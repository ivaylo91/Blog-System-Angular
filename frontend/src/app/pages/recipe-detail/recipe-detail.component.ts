import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RecipeService } from '../../services/recipe.service';
import { FavoriteService } from '../../services/favorite.service';
import { CommentService } from '../../services/comment.service';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { PerfService } from '../../services/perf.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { StarRatingComponent } from '../../components/star-rating/star-rating.component';
import { ConfirmModalComponent } from '../../components/confirm-modal/confirm-modal.component';
import { Recipe, Comment, FavoriteStatusResponse } from '../../models/models';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [RouterLink, DatePipe, FormsModule, RecipeCardComponent, StarRatingComponent, ConfirmModalComponent],
  template: `
    <app-confirm-modal
      [open]="confirmDeleteId() !== null"
      title="Изтрий коментар"
      message="Сигурни ли сте, че искате да изтриете този коментар? Действието е необратимо."
      confirmLabel="Изтрий"
      (confirmed)="deleteComment(confirmDeleteId()!)"
      (cancelled)="confirmDeleteId.set(null)">
    </app-confirm-modal>

    @if (recipe(); as recipe) {
      <div class="detail-page">

        <!-- Reading progress bar -->
        <div class="read-progress" aria-hidden="true">
          <div class="read-progress-bar" [style.transform]="'scaleX(' + readProgress() + ')'"></div>
        </div>

        <!-- Full-bleed hero image -->
        <div class="hero-banner" [style.background]="heroGradient()">
          @if (recipe.hero_image) {
            <img [src]="recipe.hero_image" [alt]="recipe.title" class="hero-img" fetchpriority="high" loading="eager" />
          }
          <div class="hero-overlay" aria-hidden="true"></div>
          <div class="hero-content">
            <a routerLink="/recipes" class="back-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
              Обратно към рецептите
            </a>
            @if (recipe.category) {
              <span class="hero-badge">{{ recipe.category.name }}</span>
            }
            <h1>{{ recipe.title }}</h1>
            <p class="hero-excerpt">{{ recipe.excerpt }}</p>

            <!-- Stat pills -->
            <div class="stat-pills">
              <div class="stat-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>{{ recipe.prep_minutes + recipe.cook_minutes }} мин</span>
              </div>
              <div class="stat-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <span>{{ recipe.servings }} порции</span>
              </div>
              <div class="stat-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                <span>{{ recipe.difficulty }}</span>
              </div>
              @if (averageRating()) {
                <div class="stat-pill stat-pill-gold">
                  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <span>{{ averageRating()!.toFixed(1) }}</span>
                </div>
              }
            </div>

            <!-- Share bar — native share on touch, direct links on desktop -->
            <div class="share-bar">
              <span class="share-label">Сподели:</span>
              @if (canNativeShare) {
                <button class="share-btn share-native" (click)="nativeShare()" title="Сподели">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                </button>
              } @else {
                <a class="share-btn share-fb" [href]="'https://www.facebook.com/sharer/sharer.php?u=' + encodedUrl()" target="_blank" rel="noopener" title="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a class="share-btn share-wa" [href]="'https://wa.me/?text=' + encodedTitle() + '%20' + encodedUrl()" target="_blank" rel="noopener" title="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.531 5.855L.057 23.885l6.196-1.452A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.88 9.88 0 0 1-5.031-1.37l-.361-.214-3.735.875.892-3.653-.235-.374A9.867 9.867 0 0 1 2.118 12C2.118 6.52 6.52 2.118 12 2.118S21.882 6.52 21.882 12 17.48 21.882 12 21.882z"/></svg>
                </a>
              }
              <button class="share-btn share-copy" (click)="copyLink()" [title]="copied() ? 'Копирано!' : 'Копирай връзка'">
                @if (copied()) {
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                } @else {
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                }
              </button>
              <button class="share-btn share-print" (click)="printRecipe()" title="Принтирай">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Jump-to nav -->
        <nav class="jump-nav" aria-label="Навигация в рецептата">
          <button type="button" class="jump-link" (click)="scrollTo('ingredients')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>
            Съставки
          </button>
          <span class="jump-sep" aria-hidden="true"></span>
          <button type="button" class="jump-link" (click)="scrollTo('steps')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            Приготвяне
          </button>
          <span class="jump-sep" aria-hidden="true"></span>
          <button type="button" class="jump-link" (click)="scrollTo('comments')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Коментари
          </button>
        </nav>

        <!-- Main body -->
        <div class="body-wrap">
          <div class="content-grid">

            <!-- RIGHT on desktop, TOP on mobile: sticky ingredients + favorite -->
            <aside class="sidebar">

              <!-- Favorite -->
              @if (auth.isAuthenticated()) {
                <button class="favorite-btn"
                  [class.favorited]="favoriteStatus()?.isFavorite"
                  [disabled]="favoriting()"
                  [attr.aria-pressed]="!!favoriteStatus()?.isFavorite"
                  [attr.aria-label]="favoriteStatus()?.isFavorite ? 'Премахни от любими' : 'Добави в любими'"
                  (click)="toggleFavorite()">
                  @if (favoriting()) {
                    <svg class="spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="24"/></svg>
                  } @else if (favoriteStatus()?.isFavorite) {
                    <svg viewBox="0 0 24 24" fill="var(--clr-error)" stroke="var(--clr-error)" stroke-width="2" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  } @else {
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  }
                  @if (favoriteStatus()?.isFavorite) {
                    Запазено · {{ favoriteStatus()?.favoriteCount }}
                  } @else {
                    Запази · {{ favoriteStatus()?.favoriteCount || 0 }}
                  }
                </button>
              }

              <!-- Ingredients (sticky) -->
              <div class="section-card" id="ingredients">
                <div class="section-heading">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>
                  <h2>Съставки</h2>
                  <span class="count-badge">{{ recipe.ingredients?.length || 0 }}</span>
                </div>
                @if (checkedIngredients().size > 0) {
                  <div class="ing-progress">
                    <div class="ing-progress-bar" [style.transform]="'scaleX(' + (checkedIngredients().size / (recipe.ingredients?.length || 1)) + ')'"></div>
                  </div>
                }
                <ul class="ingredients-list">
                  @for (ing of recipe.ingredients; track ing.id) {
                    <li [class.checked]="checkedIngredients().has(ing.id)"
                        (click)="toggleIngredient(ing.id)"
                        role="checkbox"
                        [attr.aria-checked]="checkedIngredients().has(ing.id)"
                        tabindex="0"
                        (keydown.space)="$event.preventDefault(); toggleIngredient(ing.id)"
                        (keydown.enter)="toggleIngredient(ing.id)">
                      <span class="ing-check" aria-hidden="true">
                        @if (checkedIngredients().has(ing.id)) {
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        }
                      </span>
                      <span class="ing-amount">{{ ing.amount }}</span>
                      <span class="ing-name">{{ ing.name }}</span>
                    </li>
                  }
                </ul>
                @if (checkedIngredients().size > 0) {
                  <button class="ing-reset" (click)="clearIngredients()">
                    Изчисти всички
                  </button>
                }
              </div>

            </aside>

            <!-- LEFT on desktop, BELOW on mobile: intro + steps + rating + comments -->
            <main class="main-content">

              @if (recipe.description) {
                <div class="prose-card">
                  <p>{{ recipe.description }}</p>
                </div>
              }

              <!-- Steps -->
              <div class="section-card" id="steps">
                <div class="section-heading">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                  <h2>Приготвяне</h2>
                  <span class="count-badge">{{ recipe.steps?.length || 0 }} стъпки</span>
                </div>
                <div class="steps-list">
                  @for (step of recipe.steps; track step.id; let i = $index) {
                    <div class="step-item">
                      <div class="step-num">{{ i + 1 }}</div>
                      <div class="step-body">
                        @if (step.title && step.title !== 'Стъпка ' + (i + 1)) {
                          <h3>{{ step.title }}</h3>
                        }
                        <p>{{ step.description }}</p>
                      </div>
                    </div>
                  }
                </div>
              </div>

              @if (recipe.tags && recipe.tags.length) {
                <div class="tags-row">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                  @for (tag of recipe.tags; track tag.id) {
                    <span class="tag">{{ tag.name }}</span>
                  }
                </div>
              }
              <!-- Rating -->
              <div class="panel-card">
                <div class="card-label">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="star-icon"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  Оценка
                </div>
                <div class="avg-row">
                  <span class="avg-num">{{ averageRating() ? averageRating()!.toFixed(1) : '—' }}</span>
                  <div class="avg-meta">
                    <app-star-rating [value]="Math.round(averageRating() || 0)" [interactive]="false" />
                    <span class="rating-count">{{ ratingsCount() > 0 ? ratingsCount() + ' оценки' : 'Все още няма' }}</span>
                  </div>
                </div>
                @if (auth.isAuthenticated()) {
                  <div class="user-rating">
                    <p>Твоята оценка:</p>
                    <app-star-rating [value]="userRating()" (rated)="onRate($event)" />
                  </div>
                }
              </div>

              <!-- Comment form -->
              @if (auth.isAuthenticated()) {
                <div class="panel-card">
                  <div class="card-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    Остави коментар
                  </div>
                  <form (submit)="onComment($event)">
                    <textarea [ngModel]="commentBody()" (ngModelChange)="commentBody.set($event)" name="body"
                              placeholder="Напиши мнението си..." rows="4"
                              class="comment-textarea"
                              [disabled]="submittingComment()"
                              maxlength="2000"></textarea>
                    <button type="submit" class="submit-btn"
                            [disabled]="submittingComment() || !commentBody().trim()">
                      @if (submittingComment()) {
                        <svg class="spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="24"/></svg>
                        Изпращане...
                      } @else {
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        Публикувай
                      }
                    </button>
                  </form>
                </div>
              } @else {
                <div class="panel-card login-prompt">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                  <p>За оценка или коментар <a routerLink="/signin">влез в профила си</a>.</p>
                </div>
              }

              <!-- Comments -->
              <div class="panel-card" id="comments">
                <div class="card-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  Коментари
                  @if (comments().length > 0) {
                    <span class="count-badge ml">{{ comments().length }}</span>
                  }
                </div>
                @for (comment of comments(); track comment.id) {
                  <div class="comment">
                    <div class="comment-header">
                      <div class="comment-avatar">{{ (comment.author?.name || comment.author?.email || 'Ч')[0].toUpperCase() }}</div>
                      <div class="comment-meta">
                        <strong>{{ comment.author?.name || comment.author?.email || 'Читател' }}</strong>
                        <span class="comment-date">{{ comment.created_at | date:'dd MMM yyyy' }}</span>
                      </div>
                      @if (canDeleteComment(comment)) {
                        <button class="delete-comment-btn" (click)="confirmDelete(comment.id)" aria-label="Изтрий коментар">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
                        </button>
                      }
                    </div>
                    @if (comment.rating) {
                      <div class="comment-rating">
                        <app-star-rating [value]="comment.rating" [interactive]="false" />
                      </div>
                    }
                    @if (comment.body?.trim()) {
                      <p class="comment-body">{{ comment.body }}</p>
                    }
                    @if (auth.isAuthenticated()) {
                      <button class="reply-btn"
                        [attr.aria-expanded]="replyingToId() === comment.id"
                        (click)="startReply(comment.id)">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></svg>
                        {{ replyingToId() === comment.id ? 'Отказ' : 'Отговори' }}
                      </button>
                    }
                    @if (replyingToId() === comment.id) {
                      <form class="reply-form" (submit)="submitReply($event, comment.id)">
                        <textarea [ngModel]="replyBody()" (ngModelChange)="replyBody.set($event)" [name]="'reply-' + comment.id" rows="2"
                                  placeholder="Напиши отговор..."
                                  [disabled]="submittingReply()"
                                  maxlength="1000"></textarea>
                        <button type="submit" class="submit-btn"
                                [disabled]="submittingReply() || !replyBody().trim()">
                          @if (submittingReply()) {
                            <svg class="spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="24"/></svg>
                            Изпращане...
                          } @else {
                            Изпрати
                          }
                        </button>
                      </form>
                    }
                    @if (comment.replies && comment.replies.length > 0) {
                      <div class="replies">
                        @for (reply of comment.replies; track reply.id) {
                          <div class="reply">
                            <div class="comment-header">
                              <div class="comment-avatar reply-avatar">{{ (reply.author?.name || 'Ч')[0].toUpperCase() }}</div>
                              <div class="comment-meta">
                                <strong>{{ reply.author?.name || 'Читател' }}</strong>
                                <span class="comment-date">{{ reply.created_at | date:'dd MMM yyyy' }}</span>
                              </div>
                              @if (canDeleteComment(reply)) {
                                <button class="delete-comment-btn" (click)="confirmDelete(reply.id)" aria-label="Изтрий отговор">
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
                                </button>
                              }
                            </div>
                            <p class="comment-body">{{ reply.body }}</p>
                          </div>
                        }
                      </div>
                    }
                  </div>
                } @empty {
                  <p class="no-comments">Все още няма коментари. Бъди първи!</p>
                }
              </div>

            </main>
          </div>
        </div>

        <!-- Related -->
        @if (relatedRecipes().length > 0) {
          <section class="related-section">
            <div class="related-header">
              <h2>Подобни рецепти</h2>
              <a routerLink="/recipes" class="related-link">Виж всички →</a>
            </div>
            <div class="related-grid">
              @for (r of relatedRecipes(); track r.id; let i = $index) {
                <app-recipe-card [recipe]="r" [index]="i" />
              }
            </div>
          </section>
        }

      </div>
    } @else if (loadError()) {
      <div class="detail-load-error" role="status">
        <p class="detail-load-error-msg">Тази рецепта не е намерена.</p>
        <a routerLink="/recipes" class="detail-load-error-btn">← Обратно към рецептите</a>
      </div>
    }
  `,
  styles: [`
    .detail-page { min-height: 100dvh; background-color: var(--clr-bg, #faf7f4); background-image: url('/backgrounds/cooking-pattern.svg'); background-size: 500px; background-repeat: repeat; }

    /* Load error — editorial, matches home .featured-error */
    .detail-load-error {
      min-height: 60dvh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      padding: clamp(3rem, 8vw, 6rem) 1.5rem;
      text-align: center;
    }
    .detail-load-error-msg {
      font-family: var(--font-display);
      font-style: italic;
      font-size: clamp(1.15rem, 1.8vw, 1.4rem);
      color: var(--clr-text-muted);
      margin: 0;
      max-width: 32ch;
      line-height: 1.4;
    }
    .detail-load-error-btn {
      padding: 0.7rem 1.5rem;
      border-radius: 9999px;
      border: 1px solid var(--clr-border);
      background: var(--clr-surface);
      color: var(--clr-text);
      font-size: 0.9rem;
      font-weight: 600;
      text-decoration: none;
      transition: background 0.2s var(--ease-out-expo), border-color 0.2s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);
    }
    .detail-load-error-btn:hover {
      background: var(--clr-surface-hover);
      border-color: var(--clr-border-strong);
      transform: translateY(-1px);
    }
    .detail-load-error-btn:active { transform: translateY(0); }

    /* ===== READING PROGRESS ===== */
    .read-progress {
      position: fixed;
      top: 0; left: 0; right: 0;
      height: 2px;
      z-index: 51;
      pointer-events: none;
      background: transparent;
    }
    .read-progress-bar {
      height: 100%;
      background: var(--clr-brand);
      transform-origin: left;
      transform: scaleX(0);
      will-change: transform;
      box-shadow: 0 0 8px color-mix(in oklch, var(--clr-brand) 45%, transparent);
    }
    @media (prefers-reduced-motion: reduce) {
      .read-progress-bar { transition: none; }
    }

    /* ===== HERO ===== */
    .hero-banner {
      position: relative;
      min-height: 520px;
      display: flex;
      align-items: flex-end;
      overflow: hidden;
    }
    .hero-img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.0) 100%);
    }
    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 800px;
      margin: 0 auto;
      width: 100%;
      padding: 3rem 1.5rem 2.5rem;
    }
    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      color: rgba(255,255,255,0.85);
      text-decoration: none;
      font-size: 0.82rem;
      font-weight: 600;
      margin-bottom: 1rem;
      margin-right: 0.5rem;
      transition: color 0.2s;
    }
    .back-link svg { width: 1rem; height: 1rem; }
    .back-link:hover { color: oklch(100% 0 0); }
    .hero-badge {
      display: inline-block;
      margin-left: 0.75rem;
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--clr-green-text);
      background: var(--clr-green-bg);
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      margin-bottom: 0.75rem;
    }
    h1 {
      font-family: var(--font-display, 'Alegreya', Georgia, serif);
      font-size: clamp(1.8rem, 4vw, 3rem);
      color: oklch(100% 0 0);
      margin: 0 0 0.75rem;
      line-height: 1.1;
      letter-spacing: -0.02em;
      text-shadow: 0 2px 12px rgba(0,0,0,0.3);
    }
    .hero-excerpt {
      color: rgba(255,255,255,0.88);
      font-size: 1.05rem;
      line-height: 1.7;
      margin: 0 0 1.5rem;
      font-weight: 300;
      max-width: 600px;
    }
    .stat-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }
    .stat-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.4rem 0.9rem;
      background: rgba(255,255,255,0.15);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.25);
      border-radius: 9999px;
      color: #fff;
      font-size: 0.82rem;
      font-weight: 500;
      font-variant-numeric: tabular-nums;
    }
    .stat-pill svg { width: 0.9rem; height: 0.9rem; }
    .stat-pill-gold { background: color-mix(in oklch, var(--clr-amber) 20%, transparent); border-color: color-mix(in oklch, var(--clr-amber) 50%, transparent); color: var(--clr-amber); }
    .stat-pill-gold svg { fill: var(--clr-amber); width: 0.85rem; height: 0.85rem; }

    /* Share bar */
    .share-bar {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      flex-wrap: wrap;
    }
    .share-label {
      font-size: 0.72rem;
      font-weight: 600;
      color: rgba(255,255,255,0.6);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-right: 0.25rem;
    }
    .share-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2.1rem;
      height: 2.1rem;
      border-radius: 50%;
      border: 1.5px solid rgba(255,255,255,0.3);
      background: rgba(255,255,255,0.12);
      backdrop-filter: blur(6px);
      color: #fff;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.2s, transform 0.2s;
    }
    .share-btn svg { width: 0.9rem; height: 0.9rem; }
    .share-btn:hover { transform: translateY(-2px); }
    .share-fb:hover  { background: #1877f2; border-color: #1877f2; }
    .share-wa:hover  { background: #25d366; border-color: #25d366; }
    .share-copy:hover, .share-native:hover { background: rgba(255,255,255,0.3); }

    /* ===== BODY ===== */
    .body-wrap { max-width: 1200px; margin: 0 auto; padding: 2.5rem 1.5rem; }
    .content-grid {
      display: grid;
      grid-template-columns: 1fr 340px;
      grid-template-areas: "main aside";
      gap: 2rem;
      align-items: start;
    }
    .main-content { grid-area: main; min-width: 0; display: flex; flex-direction: column; gap: 1.5rem; }
    .sidebar { grid-area: aside; }

    /* Prose card — editorial intro with drop cap */
    .prose-card {
      background: var(--clr-surface);
      border-radius: 1.25rem;
      padding: 1.75rem 1.75rem 1.6rem;
      border: 1px solid var(--clr-border-faint);
      box-shadow: var(--shadow-sm);
    }
    .prose-card p {
      color: var(--clr-text);
      line-height: 1.8;
      margin: 0;
      font-size: 1.08rem;
      font-family: var(--font-display);
      font-weight: 400;
    }
    .prose-card p::first-letter {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 800;
      font-size: 4.2em;
      line-height: 0.85;
      float: left;
      color: var(--clr-brand);
      padding: 0.4rem 0.7rem 0 0;
      margin-top: 0.15rem;
    }
    .prose-card p::first-line {
      font-variant-caps: small-caps;
      letter-spacing: 0.04em;
      color: var(--clr-text);
    }

    @media (max-width: 640px) {
      .prose-card { padding: 1.5rem 1.4rem 1.4rem; }
      .prose-card p { font-size: 1rem; }
      .prose-card p::first-letter { font-size: 3.6em; padding-right: 0.55rem; }
    }

    /* Section cards */
    .section-card {
      background: var(--clr-surface);
      border-radius: 1.25rem;
      padding: 1.5rem;
      border: 1px solid var(--clr-border-faint);
      box-shadow: var(--shadow-sm);
      scroll-margin-top: 8rem;
    }
    .section-heading {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1.25rem;
    }
    .section-heading svg { width: 1.1rem; height: 1.1rem; color: var(--clr-green); flex-shrink: 0; }
    h2 {
      font-family: var(--font-display, 'Alegreya', Georgia, serif);
      font-size: 1.25rem;
      color: var(--clr-text);
      margin: 0;
    }
    .count-badge {
      margin-left: auto;
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--clr-green-text);
      background: var(--clr-green-bg);
      padding: 0.2rem 0.6rem;
      border-radius: 9999px;
    }
    .count-badge.ml { margin-left: 0.5rem; }

    /* Ingredients progress */
    .ing-progress {
      height: 3px;
      background: rgba(0,0,0,0.06);
      border-radius: 9999px;
      margin-bottom: 1rem;
      overflow: hidden;
    }
    .ing-progress-bar {
      height: 100%;
      width: 100%;
      background: var(--clr-green);
      border-radius: 9999px;
      transform-origin: left;
      transform: scaleX(0);
      transition: transform 0.4s var(--ease-out-expo, cubic-bezier(0.16,1,0.3,1));
    }

    /* Ingredients */
    .ingredients-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .ingredients-list li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.65rem 0.4rem;
      border-bottom: 1px solid rgba(0,0,0,0.05);
      font-size: 0.925rem;
      cursor: pointer;
      border-radius: 0.5rem;
      transition: background 0.15s, opacity 0.25s;
      -webkit-user-select: none;
      user-select: none;
    }
    .ingredients-list li:last-child { border-bottom: none; }
    .ingredients-list li:hover { background: rgba(0,0,0,0.025); }
    .ingredients-list li:focus-visible { outline: 2px solid var(--clr-green); outline-offset: 1px; }
    .ingredients-list li.checked {
      opacity: 0.45;
    }
    .ingredients-list li.checked .ing-name,
    .ingredients-list li.checked .ing-amount {
      text-decoration: line-through;
    }
    .ing-check {
      width: 1.1rem;
      height: 1.1rem;
      border-radius: 50%;
      border: 1.5px solid rgba(0,0,0,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: background 0.2s, border-color 0.2s;
    }
    .ing-check svg { width: 0.6rem; height: 0.6rem; display: none; }
    li.checked .ing-check {
      background: var(--clr-green);
      border-color: var(--clr-green);
    }
    li.checked .ing-check svg { display: block; stroke: oklch(100% 0 0); }
    .ing-amount { font-weight: 700; color: var(--clr-text); min-width: 70px; }
    .ing-name { color: var(--clr-text-muted); }
    .ing-reset {
      margin-top: 0.75rem;
      background: none;
      border: none;
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--clr-text-muted);
      cursor: pointer;
      padding: 0.25rem 0;
      text-decoration: underline;
      text-underline-offset: 2px;
      transition: color 0.15s var(--ease-out-expo);
    }
    .ing-reset:hover { color: var(--clr-text); }

    /* Steps */
    .steps-list { display: flex; flex-direction: column; gap: 1.25rem; }
    .step-item {
      display: flex;
      gap: 1rem;
    }
    .step-num {
      flex-shrink: 0;
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 50%;
      background: var(--clr-green);
      color: oklch(100% 0 0);
      font-weight: 700;
      font-size: 0.85rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2px;
    }
    .step-body h3 {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--clr-text);
      margin: 0 0 0.3rem;
    }
    .step-body p {
      margin: 0;
      color: var(--clr-text-muted);
      line-height: 1.75;
      font-size: 0.925rem;
    }

    /* Tags */
    .tags-row {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .tags-row svg { width: 0.9rem; height: 0.9rem; color: var(--clr-text-muted); flex-shrink: 0; }
    .tag {
      padding: 0.3rem 0.85rem;
      background: var(--clr-surface-hover);
      border-radius: 9999px;
      font-size: 0.78rem;
      color: var(--clr-text-muted);
      font-weight: 500;
    }

    /* ===== JUMP-TO NAV ===== */
    .jump-nav {
      background: var(--clr-surface, #fff);
      border-bottom: 1px solid var(--clr-border-faint, rgba(0,0,0,0.06));
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0;
      position: sticky;
      top: 4rem;
      z-index: 10;
      padding: 0;
      box-shadow: 0 1px 8px rgba(0,0,0,0.06);
    }
    .jump-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.85rem 1.5rem;
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--clr-text-muted);
      text-decoration: none;
      background: none;
      border: none;
      cursor: pointer;
      font-family: inherit;
      transition: color 0.2s var(--ease-out-expo), background 0.2s var(--ease-out-expo);
      position: relative;
      white-space: nowrap;
    }
    .jump-link svg { width: 0.85rem; height: 0.85rem; flex-shrink: 0; }
    .jump-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 1rem;
      right: 1rem;
      height: 2px;
      background: var(--clr-green);
      border-radius: 2px;
      transform: scaleX(0);
      transition: transform 0.2s var(--ease-out-expo, cubic-bezier(0.16,1,0.3,1));
    }
    .jump-link:hover { color: var(--clr-text); background: var(--clr-surface-hover); }
    .jump-link:hover::after { transform: scaleX(1); }
    .jump-sep {
      width: 1px;
      height: 1.2rem;
      background: var(--clr-border);
      flex-shrink: 0;
    }

    /* ===== SIDEBAR ===== */
    .sidebar {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      position: sticky;
      top: calc(4rem + 3.25rem);
      max-height: calc(100dvh - 8rem);
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: rgba(0,0,0,0.12) transparent;
      padding-right: 2px;
    }
    .sidebar::-webkit-scrollbar { width: 4px; }
    .sidebar::-webkit-scrollbar-track { background: transparent; }
    .sidebar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.12); border-radius: 4px; }
    .favorite-btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.85rem;
      border-radius: 1rem;
      border: 1.5px solid var(--clr-border);
      background: var(--clr-surface);
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      transition: box-shadow 0.2s var(--ease-out-expo), background 0.18s var(--ease-out-expo), color 0.18s var(--ease-out-expo), border-color 0.18s var(--ease-out-expo);
      color: var(--clr-text-muted);
    }
    .favorite-btn svg { width: 1.1rem; height: 1.1rem; }
    .favorite-btn.favorited { background: var(--clr-error-bg); border-color: var(--clr-error); color: var(--clr-error); }
    .favorite-btn:hover:not(:disabled) { box-shadow: var(--shadow-md); }
    .favorite-btn:disabled { opacity: 0.7; cursor: wait; }
    .sidebar-card,
    .panel-card {
      background: var(--clr-surface);
      border-radius: 1.25rem;
      padding: 1.5rem;
      border: 1px solid var(--clr-border-faint);
      box-shadow: var(--shadow-sm);
      scroll-margin-top: 8rem;
    }
    .card-label {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--clr-green);
      margin-bottom: 1rem;
    }
    .card-label svg { width: 0.9rem; height: 0.9rem; }
    .star-icon { fill: var(--clr-amber); color: var(--clr-amber); }

    /* Rating */
    .avg-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem; }
    .avg-num {
      font-family: var(--font-display, 'Alegreya', Georgia, serif);
      font-size: 3rem;
      font-weight: 700;
      color: var(--clr-text);
      line-height: 1;
    }
    .avg-meta { display: flex; flex-direction: column; gap: 0.3rem; }
    .rating-count { font-size: 0.78rem; color: var(--clr-text-muted); }
    .user-rating {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid var(--clr-border-faint);
    }
    .user-rating p { font-size: 0.82rem; color: var(--clr-text-muted); margin: 0 0 0.4rem; font-weight: 600; }

    /* Comment form */
    .comment-textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1.5px solid var(--clr-border);
      border-radius: 0.75rem;
      font-size: 0.875rem;
      resize: vertical;
      outline: none;
      box-sizing: border-box;
      color: var(--clr-text);
      font-family: inherit;
      background: var(--clr-surface-alt);
      transition: border-color 0.2s var(--ease-out-expo), box-shadow 0.2s var(--ease-out-expo), background 0.2s var(--ease-out-expo);
    }
    .comment-textarea:focus { border-color: var(--clr-green); box-shadow: 0 0 0 3px color-mix(in oklch, var(--clr-green) 12%, transparent); background: var(--clr-surface); }
    .submit-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      margin-top: 0.75rem;
      padding: 0.6rem 1.25rem;
      background: var(--clr-green);
      color: oklch(100% 0 0);
      border: none;
      border-radius: 9999px;
      font-weight: 700;
      cursor: pointer;
      font-size: 0.85rem;
      transition: background 0.18s var(--ease-out-expo);
    }
    .submit-btn svg { width: 0.85rem; height: 0.85rem; }
    .submit-btn:hover:not(:disabled) { background: var(--clr-green-dark); }
    .submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
    .spin { animation: spin 0.75s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }

    /* Login prompt */
    .login-prompt {
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }
    .login-prompt svg { width: 1.1rem; height: 1.1rem; color: var(--clr-text-muted); flex-shrink: 0; }
    .login-prompt p { font-size: 0.875rem; color: var(--clr-text-muted); margin: 0; }
    .login-prompt a { color: var(--clr-green); font-weight: 700; text-decoration: none; }
    .login-prompt a:hover { text-decoration: underline; }

    /* Comments list */
    .comment {
      padding: 1rem 0;
      border-bottom: 1px solid rgba(0,0,0,0.05);
    }
    .comment:last-child { border-bottom: none; }
    .comment-header {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      margin-bottom: 0.5rem;
    }
    .comment-avatar {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background: var(--clr-green);
      color: oklch(100% 0 0);
      font-size: 0.8rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .comment-meta { flex: 1; }
    .comment-meta strong { font-size: 0.85rem; color: var(--clr-text); display: block; }
    .comment-date { font-size: 0.75rem; color: var(--clr-text-muted); }
    .comment-rating { margin-bottom: 0.4rem; }
    .comment-body { color: var(--clr-text-muted); font-size: 0.875rem; line-height: 1.65; margin: 0; }
    .delete-comment-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--clr-text-muted);
      padding: 0.25rem;
      border-radius: 0.4rem;
      display: flex;
      transition: color 0.18s var(--ease-out-expo), background 0.18s var(--ease-out-expo);
    }
    .delete-comment-btn svg { width: 0.9rem; height: 0.9rem; }
    .delete-comment-btn:hover { color: var(--clr-error); background: var(--clr-error-bg); }
    .no-comments { font-size: 0.875rem; color: var(--clr-text-muted); text-align: center; padding: 1rem 0; margin: 0; }

    /* ===== RELATED ===== */
    .related-section {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem 4rem;
    }
    .related-header {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 1.5rem;
    }
    .related-header h2 {
      font-family: var(--font-display, 'Alegreya', Georgia, serif);
      font-size: 1.5rem;
      color: var(--clr-text);
      margin: 0;
    }
    .related-link { font-size: 0.875rem; font-weight: 600; color: var(--clr-green); text-decoration: none; }
    .related-link:hover { text-decoration: underline; }
    .related-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .reply-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      margin-top: 0.4rem;
      padding: 0.25rem 0.6rem;
      background: none;
      border: none;
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--clr-text-muted);
      cursor: pointer;
      border-radius: 0.5rem;
      transition: background 0.15s var(--ease-out-expo), color 0.15s var(--ease-out-expo);
    }
    .reply-btn svg { width: 0.75rem; height: 0.75rem; }
    .reply-btn:hover { background: var(--clr-surface-hover); color: var(--clr-brand); }
    .reply-form { margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.4rem; }
    .reply-form textarea {
      width: 100%;
      box-sizing: border-box;
      padding: 0.5rem 0.75rem;
      border: 1.5px solid var(--clr-border);
      border-radius: 0.625rem;
      font-size: 0.85rem;
      font-family: inherit;
      resize: vertical;
      background: var(--clr-surface-alt);
      color: var(--clr-text);
    }
    .reply-form textarea:focus { outline: none; border-color: var(--clr-green); }
    .replies { margin-top: 0.5rem; padding-left: 1rem; border-left: 1px solid var(--clr-border-faint); display: flex; flex-direction: column; gap: 0.6rem; }
    .reply { padding: 0.5rem 0; }
    .reply-avatar { width: 1.5rem !important; height: 1.5rem !important; font-size: 0.65rem !important; }

    @media print {
      app-header, app-footer, .share-bar, .related-section, .back-link, .hero-overlay, .read-progress, .favorite-btn { display: none !important; }
      .hero-banner { min-height: auto !important; }
      .hero-img { position: static !important; width: 100% !important; height: 300px !important; object-fit: cover; }
      .content-grid {
        grid-template-columns: 1fr !important;
        grid-template-areas: "aside" "main" !important;
      }
      .sidebar { position: static !important; max-height: none !important; overflow: visible !important; }
      .body-wrap { padding: 1rem !important; }
    }

    @media (max-width: 900px) {
      .content-grid {
        grid-template-columns: 1fr;
        grid-template-areas:
          "aside"
          "main";
      }
      h1 { font-size: 2.2rem; }
      .hero-banner { min-height: 420px; }
      .sidebar {
        position: static;
        max-height: none;
        overflow-y: visible;
      }
      .jump-link { padding: 0.75rem 1rem; font-size: 0.78rem; }
    }
    @media (max-width: 640px) {
      h1 { font-size: 1.8rem; }
      .related-grid { grid-template-columns: 1fr; }
      .hero-banner { min-height: 360px; }
      .jump-nav { gap: 0; justify-content: stretch; }
      .jump-link { flex: 1; justify-content: center; padding: 0.75rem 0.5rem; font-size: 0.72rem; gap: 0.3rem; }
      .jump-sep { display: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDetailComponent {
  private recipeService = inject(RecipeService);
  private favoriteService = inject(FavoriteService);
  private commentService = inject(CommentService);
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);
  private toast = inject(ToastService);
  private perf = inject(PerfService);
  auth = inject(AuthService);

  Math = Math;
  readProgress = signal(0);
  private rafPending = false;
  private onScroll = () => {
    if (this.rafPending) return;
    this.rafPending = true;
    requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      this.readProgress.set(docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0);
      this.rafPending = false;
    });
  };
  checkedIngredients = signal<Set<number>>(new Set());
  recipe = signal<Recipe | null>(null);
  loadError = signal(false);
  relatedRecipes = signal<Recipe[]>([]);
  comments = signal<Comment[]>([]);
  averageRating = signal<number | null>(null);
  ratingsCount = signal(0);
  favoriteStatus = signal<FavoriteStatusResponse | null>(null);
  userRating = signal(0);
  commentBody = signal('');
  replyingToId = signal<number | null>(null);
  replyBody = signal('');
  copied = signal(false);
  canNativeShare = typeof navigator !== 'undefined' && !!navigator.share;
  favoriting = signal(false);
  submittingComment = signal(false);
  submittingReply = signal(false);
  confirmDeleteId = signal<number | null>(null);

  readonly currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  encodedUrl = computed(() => encodeURIComponent(this.currentUrl));
  encodedTitle = computed(() => encodeURIComponent(this.recipe()?.title || ''));
  heroGradient = computed(() => {
    const r = this.recipe();
    if (!r) return '#1c1917';
    return `linear-gradient(135deg, ${r.hero_palette_from || '#3a3028'}, ${r.hero_palette_to || '#1c1917'})`;
  });

  constructor() {
    this.route.params.pipe(takeUntilDestroyed()).subscribe(params => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      this.checkedIngredients.set(new Set());
      this.loadRecipe(params['slug']);
    });
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      this.onScroll();
    }
  }

  ngOnDestroy(): void {
    this.seo.removeJsonLd();
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.onScroll);
    }
  }

  toggleIngredient(id: number): void {
    const next = new Set(this.checkedIngredients());
    if (next.has(id)) { next.delete(id); } else { next.add(id); }
    this.checkedIngredients.set(next);
  }

  clearIngredients(): void {
    this.checkedIngredients.set(new Set());
  }

  copyLink(): void {
    navigator.clipboard.writeText(this.currentUrl).then(
      () => {
        this.copied.set(true);
        this.toast.success('Връзката е копирана.');
        setTimeout(() => this.copied.set(false), 2000);
      },
      () => this.toast.error('Неуспешно копиране.'),
    );
  }

  nativeShare(): void {
    const r = this.recipe();
    navigator.share({ title: r?.title || '', text: r?.excerpt || '', url: this.currentUrl }).catch(() => {});
  }

  loadRecipe(slug: string): void {
    this.perf.mark('recipe_detail_fetch_start');
    this.loadError.set(false);
    this.recipeService.getRecipe(slug).pipe(takeUntilDestroyed()).subscribe({
      next: (res) => {
        this.recipe.set(res.recipe);
        this.averageRating.set(res.averageRating);
        this.ratingsCount.set(res.ratingsCount);
        this.comments.set(res.recipe.comments || []);
        this.seo.set({
          title: res.recipe.title,
          description: res.recipe.excerpt || res.recipe.description?.slice(0, 155) || '',
          image: res.recipe.hero_image || undefined,
          type: 'article',
        });
        this.seo.setJsonLd(this.buildJsonLd(res.recipe, res.averageRating, res.ratingsCount));
        if (this.auth.isAuthenticated() && this.auth.user()) {
          const userId = this.auth.user()!.id;
          const userComment = this.comments().find(c => c.user_id === userId);
          if (userComment?.rating) this.userRating.set(userComment.rating);
          if (userComment?.body)   this.commentBody.set(userComment.body);
        }
        this.perf.mark('recipe_detail_ready');
        this.perf.measure('recipe_detail_load', 'recipe_detail_fetch_start', 'recipe_detail_ready');
      },
      error: () => {
        this.loadError.set(true);
        this.toast.error('Рецептата не беше намерена.');
      },
    });
    this.recipeService.getRelatedRecipes(slug).pipe(takeUntilDestroyed()).subscribe({
      next: (r) => this.relatedRecipes.set(r),
      error: () => {},
    });
    if (this.auth.isAuthenticated()) {
      this.favoriteService.getFavoriteStatus(slug).pipe(takeUntilDestroyed()).subscribe({
        next: (s) => this.favoriteStatus.set(s),
        error: () => {},
      });
    }
  }

  private buildJsonLd(recipe: Recipe, avgRating: number | null, ratingsCount: number): object {
    const base: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Recipe',
      name: recipe.title,
      description: recipe.excerpt || recipe.description || '',
      prepTime: `PT${recipe.prep_minutes}M`,
      cookTime: `PT${recipe.cook_minutes}M`,
      totalTime: `PT${recipe.prep_minutes + recipe.cook_minutes}M`,
      recipeYield: `${recipe.servings} порции`,
      recipeCategory: recipe.category?.name || '',
      recipeIngredient: recipe.ingredients?.map(i => `${i.amount} ${i.name}`) || [],
      recipeInstructions: recipe.steps?.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        text: s.description,
      })) || [],
    };
    if (recipe.hero_image) base['image'] = recipe.hero_image;
    if (avgRating && ratingsCount > 0) {
      base['aggregateRating'] = {
        '@type': 'AggregateRating',
        ratingValue: avgRating,
        reviewCount: ratingsCount,
        bestRating: 5,
        worstRating: 1,
      };
    }
    return base;
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  printRecipe(): void {
    window.print();
  }

  toggleFavorite(): void {
    const r = this.recipe();
    if (!r || this.favoriting()) return;
    this.favoriting.set(true);
    this.favoriteService.toggleFavorite(r.slug).subscribe({
      next: (s) => {
        this.favoriteStatus.set(s);
        this.favoriting.set(false);
        this.toast.success(s.isFavorite ? 'Добавено в любими.' : 'Премахнато от любими.');
      },
      error: () => {
        this.favoriting.set(false);
        this.toast.error('Грешка при запазване.');
      },
    });
  }

  onRate(rating: number): void {
    const r = this.recipe();
    if (!r) return;
    this.commentService.rate(r.slug, rating).subscribe({
      next: (res) => {
        this.userRating.set(res.rating);
        this.averageRating.set(res.averageRating);
        this.ratingsCount.set(res.ratingsCount);
        this.toast.success('Оценката е запазена.');
      },
      error: () => this.toast.error('Грешка при оценяване.'),
    });
  }

  onComment(e: Event): void {
    e.preventDefault();
    const r = this.recipe();
    if (!r || !this.commentBody().trim() || this.submittingComment()) return;
    this.submittingComment.set(true);
    this.commentService.comment(r.slug, this.commentBody(), this.userRating() || undefined).subscribe({
      next: (comment) => {
        const current = this.comments();
        const idx = current.findIndex(c => c.id === comment.id);
        this.comments.set(idx >= 0
          ? current.map((c, i) => i === idx ? comment : c)
          : [comment, ...current]);
        this.commentBody.set('');
        this.submittingComment.set(false);
        this.toast.success('Коментарът е публикуван.');
      },
      error: () => {
        this.submittingComment.set(false);
        this.toast.error('Грешка при публикуване на коментар.');
      },
    });
  }

  startReply(commentId: number): void {
    this.replyingToId.set(this.replyingToId() === commentId ? null : commentId);
    this.replyBody.set('');
  }

  submitReply(e: Event, parentId: number): void {
    e.preventDefault();
    const r = this.recipe();
    if (!r || !this.replyBody().trim() || this.submittingReply()) return;
    this.submittingReply.set(true);
    this.commentService.comment(r.slug, this.replyBody(), undefined, parentId).subscribe({
      next: (reply) => {
        this.comments.set(this.comments().map(c =>
          c.id === parentId ? { ...c, replies: [...(c.replies || []), reply] } : c
        ));
        this.replyingToId.set(null);
        this.replyBody.set('');
        this.submittingReply.set(false);
        this.toast.success('Отговорът е публикуван.');
      },
      error: () => {
        this.submittingReply.set(false);
        this.toast.error('Грешка при публикуване на отговор.');
      },
    });
  }

  confirmDelete(id: number): void {
    this.confirmDeleteId.set(id);
  }

  canDeleteComment(comment: Comment): boolean {
    if (!this.auth.isAuthenticated()) return false;
    const user = this.auth.user();
    if (!user) return false;
    return user.role === 'ADMIN' || user.id === comment.user_id;
  }

  deleteComment(id: number): void {
    this.confirmDeleteId.set(null);
    this.commentService.delete(id).subscribe({
      next: () => {
        this.comments.set(
          this.comments()
            .filter(c => c.id !== id)
            .map(c => ({ ...c, replies: c.replies?.filter(r => r.id !== id) || [] }))
        );
        this.toast.success('Коментарът е изтрит.');
      },
      error: () => this.toast.error('Грешка при изтриване.'),
    });
  }
}
