import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faUtensils, faListOl, faComments, faSpinner, faHeart, faCheck, faCopy, faMinus, faPlus, faPrint, faCartShopping, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp, faViber } from '@fortawesome/free-brands-svg-icons';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RecipeService } from '../../services/recipe.service';
import { FavoriteService } from '../../services/favorite.service';
import { CommentService } from '../../services/comment.service';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { PerfService } from '../../services/perf.service';
import { RecentlyViewedService } from '../../services/recently-viewed.service';
import { ShoppingListService } from '../../services/shopping-list.service';
import { CollectionService } from '../../services/collection.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { StarRatingComponent } from '../../components/star-rating/star-rating.component';
import { ConfirmModalComponent } from '../../components/confirm-modal/confirm-modal.component';
import { Recipe, Comment, FavoriteStatusResponse, CollectionForRecipe } from '../../models/models';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [RouterLink, DatePipe, FormsModule, RecipeCardComponent, StarRatingComponent, ConfirmModalComponent, FontAwesomeModule],
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

        <!-- ══ HERO ══════════════════════════════════════════════════ -->
        <div class="hero-banner" [style.background]="heroGradient()">
          @if (recipe.hero_image) {
            <img [src]="recipe.hero_image" [alt]="recipe.title" class="hero-img" fetchpriority="high" loading="eager" />
          }
          <div class="hero-overlay" aria-hidden="true"></div>
          <div class="hero-content">
            <a routerLink="/recipes" class="back-link">
              <fa-icon [icon]="faChevronLeft" aria-hidden="true"></fa-icon>
              Обратно към рецептите
            </a>
            @if (recipe.category) {
              <span class="hero-badge">{{ recipe.category.name }}</span>
            }
            <h1 class="hero-title-script">{{ recipe.title }}</h1>

            <!-- Share bar -->
            <div class="share-bar">
              <span class="share-label">Сподели:</span>
              <a class="share-btn share-wa" [href]="'https://wa.me/?text=' + encodedTitle() + '%20' + encodedUrl()" target="_blank" rel="noopener" title="WhatsApp">
                <fa-icon [icon]="faWhatsapp" aria-hidden="true"></fa-icon>
              </a>
              <a class="share-btn share-vb" [href]="'viber://forward?text=' + encodedTitle() + '%20' + encodedUrl()" target="_blank" rel="noopener" title="Viber">
                <fa-icon [icon]="faViber" aria-hidden="true"></fa-icon>
              </a>
              <button class="share-btn share-copy" (click)="copyLink()" [title]="copied() ? 'Копирано!' : 'Копирай връзка'">
                @if (copied()) {
                  <fa-icon [icon]="faCheck" aria-hidden="true"></fa-icon>
                } @else {
                  <fa-icon [icon]="faCopy" aria-hidden="true"></fa-icon>
                }
              </button>
            </div>
          </div>

          <!-- torn paper wave -->
          <div class="hero-wave" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 72" preserveAspectRatio="none">
              <path d="M0,45 L18,30 L36,42 L54,24 L72,38 L90,20 L108,34 L126,16 L144,30 L162,12 L180,26 L198,8 L216,22 L234,5 L252,18 L270,2 L288,15 L306,0 L324,13 L342,1 L360,11 L378,0 L396,9 L414,0 L432,7 L450,0 L468,6 L486,0 L504,7 L522,1 L540,10 L558,2 L576,12 L594,3 L612,14 L630,5 L648,17 L666,8 L684,20 L702,11 L720,24 L738,14 L756,28 L774,18 L792,33 L810,22 L828,37 L846,27 L864,40 L882,30 L900,43 L918,32 L936,45 L954,34 L972,47 L990,36 L1008,50 L1026,40 L1044,53 L1062,42 L1080,56 L1098,45 L1116,58 L1134,48 L1152,61 L1170,50 L1188,63 L1206,52 L1224,64 L1242,54 L1260,66 L1278,56 L1296,68 L1314,58 L1332,69 L1350,60 L1368,71 L1386,62 L1404,72 L1440,72 L0,72 Z"/>
            </svg>
          </div>
        </div>

        <!-- ══ META BAR ══════════════════════════════════════════════ -->
        <div class="recipe-meta-wrap">
          <div class="recipe-meta-bar">
            <div class="meta-item">
              <span class="meta-label">Подготовка</span>
              <span class="meta-val">{{ recipe.prep_minutes }} мин</span>
            </div>
            <div class="meta-sep"></div>
            <div class="meta-item">
              <span class="meta-label">Готвене</span>
              <span class="meta-val">{{ recipe.cook_minutes }} мин</span>
            </div>
            <div class="meta-sep"></div>
            <div class="meta-item">
              <span class="meta-label">Порции</span>
              <div class="servings-ctrl">
                <button type="button" class="srv-btn" (click)="decrementServings()"
                        [disabled]="currentServings() <= 1" aria-label="Намали порциите">
                  <fa-icon [icon]="faMinus" aria-hidden="true"></fa-icon>
                </button>
                <span class="meta-val">{{ currentServings() }}</span>
                <button type="button" class="srv-btn" (click)="incrementServings()"
                        aria-label="Увеличи порциите">
                  <fa-icon [icon]="faPlus" aria-hidden="true"></fa-icon>
                </button>
              </div>
            </div>
            @if (recipe.difficulty) {
              <div class="meta-sep"></div>
              <div class="meta-item">
                <span class="meta-label">Трудност</span>
                <span class="meta-val">{{ recipe.difficulty }}</span>
              </div>
            }
          </div>
        </div>

        <!-- ══ JUMP NAV ══════════════════════════════════════════════ -->
        <nav class="jump-nav" aria-label="Навигация в рецептата">
          <button type="button" class="jump-link" (click)="scrollTo('ingredients')">
            <fa-icon [icon]="faUtensils" aria-hidden="true"></fa-icon>
            Съставки
          </button>
          <span class="jump-sep" aria-hidden="true"></span>
          <button type="button" class="jump-link" (click)="scrollTo('steps')">
            <fa-icon [icon]="faListOl" aria-hidden="true"></fa-icon>
            Приготвяне
          </button>
          <span class="jump-sep" aria-hidden="true"></span>
          <button type="button" class="jump-link" (click)="scrollTo('comments')">
            <fa-icon [icon]="faComments" aria-hidden="true"></fa-icon>
            Коментари
          </button>
        </nav>

        <!-- ══ BODY ═════════════════════════════════════════════════ -->
        <div class="body-wrap">

          <!-- Actions bar -->
          <div class="fav-wrap">
            @if (auth.isAuthenticated()) {
              <button class="favorite-btn"
                [class.favorited]="favoriteStatus()?.isFavorite"
                [class.pulse]="heartPulse()"
                [disabled]="favoriting()"
                [attr.aria-pressed]="!!favoriteStatus()?.isFavorite"
                [attr.aria-label]="favoriteStatus()?.isFavorite ? 'Премахни от любими' : 'Добави в любими'"
                (click)="toggleFavorite()">
                @if (favoriting()) {
                  <fa-icon class="spin" [icon]="faSpinner" aria-hidden="true"></fa-icon>
                } @else if (favoriteStatus()?.isFavorite) {
                  <fa-icon [icon]="faHeart" aria-hidden="true"></fa-icon>
                } @else {
                  <fa-icon [icon]="faHeartOutline" aria-hidden="true"></fa-icon>
                }
                @if (favoriteStatus()?.isFavorite) {
                  Запазено · {{ favoriteStatus()?.favoriteCount }}
                } @else {
                  Запази · {{ favoriteStatus()?.favoriteCount || 0 }}
                }
              </button>

              <!-- Collections popover trigger -->
              <div class="col-popover-wrap">
                <button class="col-trigger-btn"
                        type="button"
                        [class.col-trigger-active]="colPopoverOpen()"
                        (click)="toggleColPopover()"
                        aria-label="Запази в колекция"
                        [attr.aria-expanded]="colPopoverOpen()">
                  <fa-icon [icon]="faLayerGroup" aria-hidden="true"></fa-icon>
                  Колекции
                  @if (recipeInCollectionCount() > 0) {
                    <span class="col-trigger-badge">{{ recipeInCollectionCount() }}</span>
                  }
                </button>

                @if (colPopoverOpen()) {
                  <div class="col-popover" role="dialog" aria-label="Избери колекция">
                    <div class="col-pop-head">Запази в колекция</div>

                    @if (loadingCollections()) {
                      <div class="col-pop-loading" aria-label="Зарежда се...">
                        @for (_ of [1,2]; track $index) { <div class="col-pop-skel"></div> }
                      </div>
                    } @else if (recipeCollections().length === 0) {
                      <p class="col-pop-empty">Нямаш колекции все още.</p>
                    } @else {
                      <ul class="col-pop-list">
                        @for (col of recipeCollections(); track col.id) {
                          <li>
                            <button class="col-pop-item" type="button"
                                    [class.col-pop-checked]="col.has_recipe"
                                    (click)="toggleInCollection(col)">
                              <span class="col-pop-check" aria-hidden="true">
                                @if (col.has_recipe) { <fa-icon [icon]="faCheck" aria-hidden="true"></fa-icon> }
                              </span>
                              <span class="col-pop-name">{{ col.name }}</span>
                              <span class="col-pop-cnt">{{ col.recipes_count }}</span>
                            </button>
                          </li>
                        }
                      </ul>
                    }

                    <!-- Quick-create form -->
                    @if (!colCreateOpen()) {
                      <button class="col-pop-new-trigger" type="button" (click)="colCreateOpen.set(true)">
                        + Нова колекция
                      </button>
                    } @else {
                      <div class="col-pop-create">
                        <input class="col-pop-input" type="text" placeholder="Название..." maxlength="100"
                               [value]="colNewName()" (input)="colNewName.set($any($event.target).value)"
                               (keydown.enter)="quickCreateCollection()" />
                        <div class="col-pop-create-actions">
                          <button class="col-pop-cancel" type="button" (click)="colCreateOpen.set(false); colNewName.set('')">Отказ</button>
                          <button class="col-pop-create-btn" type="button"
                                  (click)="quickCreateCollection()"
                                  [disabled]="!colNewName().trim() || colCreating()">
                            @if (colCreating()) { <fa-icon [icon]="faSpinner" class="spin" aria-hidden="true"></fa-icon> }
                            Създай
                          </button>
                        </div>
                      </div>
                    }
                  </div>
                }
              </div>
            }
            <button class="print-btn" type="button" (click)="printRecipe()">
              <fa-icon [icon]="faPrint" aria-hidden="true"></fa-icon>
              Принтирай
            </button>
          </div>

          <!-- ── RECIPE CARD GRID: ingredients | procedure ─────── -->
          <div class="recipe-card-grid">

            <!-- INGREDIENTS -->
            <div class="ingredients-col" id="ingredients">
              <h2 class="col-heading">Съставки</h2>
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
                        <fa-icon [icon]="faCheck"></fa-icon>
                      }
                    </span>
                    <span class="ing-amount">{{ scaleAmount(ing.amount) }}</span>
                    <span class="ing-name">{{ ing.name }}</span>
                  </li>
                }
              </ul>
              @if (checkedIngredients().size > 0) {
                <button class="ing-reset" (click)="clearIngredients()">Изчисти всички</button>
              }
              <button class="add-to-list-btn" type="button" (click)="addToShoppingList()"
                      [class.in-list]="shoppingList.hasRecipe(recipe.slug)"
                      [attr.aria-pressed]="shoppingList.hasRecipe(recipe.slug)">
                <fa-icon [icon]="faCartShopping" aria-hidden="true"></fa-icon>
                {{ shoppingList.hasRecipe(recipe.slug) ? 'Добавено в списъка' : 'Добави в списъка' }}
              </button>
            </div>

            <!-- PROCEDURE -->
            <div class="procedure-col" id="steps">
              <h2 class="col-heading">Приготвяне</h2>
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

              @if (recipe.tags && recipe.tags.length) {
                <div class="tags-row">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                  @for (tag of recipe.tags; track tag.id) {
                    <span class="tag">{{ tag.name }}</span>
                  }
                </div>
              }

              <!-- Notes / description -->
              @if (recipe.description) {
                <div class="notes-section">
                  <h3 class="notes-label">Бележки</h3>
                  <p>{{ recipe.description }}</p>
                </div>
              }
            </div>

          </div>

          <!-- ── LOWER: rating + comments ──────────────────────── -->
          <div class="lower-panels">

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
                                aria-label="Напиши отговор"
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
    /* ── TERRACOTTA TOKENS ─────────────────────────────────────── */
    :host {
      --tc:       var(--terracotta);
      --tc-bg:    var(--paper-2);
      --tc-mid:   var(--terracotta);
      --tc-soft:  var(--rule);
      --tc-hover: var(--clr-surface-hover);
      --tc-ring:  var(--rule-strong);
    }

    .detail-page { min-height: 100dvh; background-color: var(--clr-bg); }

    /* ── LOAD ERROR ───────────────────────────────────────────── */
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
      border-radius: var(--radius-pill);
      border: 1px solid var(--clr-border);
      background: var(--clr-surface);
      color: var(--clr-text);
      font-size: 0.9rem;
      font-weight: 600;
      text-decoration: none;
      transition: background 0.2s, border-color 0.2s, transform 0.15s;
    }
    .detail-load-error-btn:hover { background: var(--clr-surface-hover); border-color: var(--clr-border-strong); transform: translateY(-1px); }
    .detail-load-error-btn:active { transform: translateY(0); }

    /* ── READING PROGRESS ─────────────────────────────────────── */
    .read-progress {
      position: fixed;
      top: 0; left: 0; right: 0;
      height: 3px;
      z-index: 51;
      pointer-events: none;
    }
    .read-progress-bar {
      height: 100%;
      background: linear-gradient(90deg, var(--clr-brand), var(--mustard));
      transform-origin: left;
      transform: scaleX(0);
      will-change: transform;
    }

    /* ── HERO ─────────────────────────────────────────────────── */
    .hero-banner {
      position: relative;
      min-height: 380px;
      max-height: 60dvh;
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
      background: linear-gradient(
        to top,
        rgba(0,0,0,0.82) 0%,
        rgba(0,0,0,0.48) 38%,
        rgba(0,0,0,0.12) 70%,
        rgba(0,0,0,0.0) 100%
      );
    }
    .hero-content {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 820px;
      margin: 0 auto;
      padding: 2.5rem 1.5rem 4rem;
    }
    @keyframes hero-rise {
      from { opacity: 0; transform: translateY(14px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .hero-content > * { animation: hero-rise 640ms var(--ease-out-expo) both; }
    .hero-content > *:nth-child(1) { animation-delay:   0ms; }
    .hero-content > *:nth-child(2) { animation-delay:  80ms; }
    .hero-content > *:nth-child(3) { animation-delay: 180ms; }
    .hero-content > *:nth-child(4) { animation-delay: 280ms; }
    @media (prefers-reduced-motion: reduce) {
      .hero-content > * { animation: none; }
    }

    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      color: rgba(255,255,255,0.8);
      text-decoration: none;
      font-size: 0.82rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      transition: color 0.2s;
    }
    .back-link fa-icon { font-size: 1rem; }
    .back-link:hover { color: #fff; }

    .hero-badge {
      display: inline-block;
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #fff;
      background: var(--clr-brand);
      padding: 0.22rem 0.8rem;
      border-radius: var(--radius-pill);
      margin-bottom: 0.75rem;
    }

    /* Script-style title — Spectral italic feels handwritten */
    .hero-title-script {
      font-family: var(--font-display);
      font-style: italic;
      font-size: clamp(2.2rem, 6vw, 4rem);
      font-weight: 700;
      color: #fff;
      line-height: 1.08;
      letter-spacing: -0.01em;
      margin: 0 0 0.3rem;
      text-shadow: 0 2px 20px rgba(0,0,0,0.35);
    }

    /* Share bar */
    .share-bar {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      flex-wrap: wrap;
    }
    .share-label {
      font-size: 0.7rem;
      font-weight: 600;
      color: rgba(255,255,255,0.55);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-right: 0.2rem;
    }
    .share-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      border: 1.5px solid rgba(255,255,255,0.3);
      background: rgba(255,255,255,0.12);
      backdrop-filter: blur(6px);
      color: #fff;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.2s, transform 0.2s;
      touch-action: manipulation;
    }
    .share-btn fa-icon { font-size: 0.85rem; }
    .share-btn:hover { transform: translateY(-2px); }
    @media (pointer: coarse) {
      .share-btn { width: 2.75rem; height: 2.75rem; }
      .share-btn fa-icon { font-size: 1rem; }
    }
    .share-wa:hover   { background: #25d366; border-color: #25d366; }
    .share-vb:hover   { background: #7360f2; border-color: #7360f2; }
    .share-copy:hover { background: rgba(255,255,255,0.28); }

    /* Torn paper wave */
    .hero-wave {
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      z-index: 3;
      overflow: hidden;
    }
    .hero-wave svg {
      display: block;
      width: 100%;
      height: 72px;
      fill: var(--clr-bg);
    }

    /* ── META BAR ─────────────────────────────────────────────── */
    .recipe-meta-wrap {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem clamp(1rem, 4vw, 1.5rem) 0;
    }
    .recipe-meta-bar {
      display: flex;
      align-items: stretch;
      justify-content: center;
      border: 1.5px solid var(--tc-soft);
      border-radius: 0.65rem;
      max-width: 680px;
      margin: 0 auto;
      overflow: hidden;
    }
    .meta-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.18rem;
      padding: 0.9rem 1rem;
    }
    .meta-sep {
      width: 1px;
      background: var(--tc-soft);
      align-self: stretch;
      flex-shrink: 0;
    }
    .meta-label {
      font-size: 0.68rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--clr-text-muted);
    }
    .meta-val {
      font-family: var(--font-display);
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--tc);
    }

    /* ── JUMP NAV ─────────────────────────────────────────────── */
    .jump-nav {
      background: var(--clr-surface);
      border-bottom: 1px solid var(--clr-border-faint);
      display: flex;
      align-items: center;
      justify-content: center;
      position: sticky;
      top: 3.25rem;
      z-index: 10;
      box-shadow: 0 1px 8px rgba(28,25,23,0.06);
      margin-top: 1.5rem;
    }
    .jump-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.85rem 1.5rem;
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--clr-text-muted);
      background: none;
      border: none;
      cursor: pointer;
      font-family: inherit;
      transition: color 0.2s, background 0.2s;
      position: relative;
      white-space: nowrap;
    }
    .jump-link fa-icon { font-size: 0.85rem; flex-shrink: 0; }
    .jump-link::after {
      content: '';
      position: absolute;
      bottom: 0; left: 1rem; right: 1rem;
      height: 2px;
      background: var(--clr-brand);
      border-radius: 2px;
      transform: scaleX(0);
      transition: transform 0.2s var(--ease-out-expo);
    }
    .jump-link:hover { color: var(--clr-text); background: var(--clr-surface-hover); }
    .jump-link:hover::after { transform: scaleX(1); }
    .jump-sep { width: 1px; height: 1.2rem; background: var(--clr-border); flex-shrink: 0; }

    /* ── BODY ─────────────────────────────────────────────────── */
    .body-wrap {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem clamp(1rem, 4vw, 1.5rem) 3rem;
    }

    /* Servings stepper */
    .servings-ctrl {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .srv-btn {
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: 1px solid var(--tc-soft);
      border-radius: 50%;
      cursor: pointer;
      color: var(--tc);
      transition: background 0.15s, border-color 0.15s;
      padding: 0;
      flex-shrink: 0;
    }
    .srv-btn fa-icon { font-size: 0.55rem; }
    .srv-btn:hover:not(:disabled) { background: var(--tc-bg); border-color: var(--tc); }
    .srv-btn:disabled { opacity: 0.3; cursor: not-allowed; }

    /* Favorite + print bar */
    .fav-wrap { margin-bottom: 1.5rem; display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap; }
    .favorite-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.7rem 1.5rem;
      border-radius: var(--radius-pill);
      border: 1.5px solid var(--clr-border);
      background: var(--clr-surface);
      font-size: 0.88rem;
      font-weight: 600;
      cursor: pointer;
      color: var(--clr-text-muted);
      transition: box-shadow 0.2s, background 0.18s, color 0.18s, border-color 0.18s, transform 0.12s;
    }
    .favorite-btn fa-icon { font-size: 1rem; transform-origin: center; }
    .favorite-btn.favorited { background: var(--clr-error-bg); border-color: var(--clr-error); color: var(--clr-error); }
    .favorite-btn.pulse fa-icon { animation: heart-pop 360ms var(--ease-out-expo) both; }
    .favorite-btn:hover:not(:disabled) { box-shadow: var(--shadow-md); }
    .favorite-btn:active:not(:disabled) { transform: scale(0.97); }
    .favorite-btn:disabled { opacity: 0.7; cursor: wait; }

    .print-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.7rem 1.25rem;
      border-radius: var(--radius-pill);
      border: 1.5px solid var(--clr-border);
      background: var(--clr-surface);
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      color: var(--clr-text-muted);
      font-family: inherit;
      transition: background 0.18s, border-color 0.18s, color 0.18s;
      touch-action: manipulation;
    }
    .print-btn fa-icon { font-size: 0.85rem; }
    .print-btn:hover { background: var(--clr-surface-hover); border-color: var(--clr-border-strong); color: var(--clr-text); }

    /* ── COLLECTIONS POPOVER ─────────────────────────────── */
    .col-popover-wrap { position: relative; }
    .col-trigger-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.55rem 1rem;
      border: 1px solid var(--clr-border);
      border-radius: var(--radius-pill);
      background: var(--clr-surface);
      color: var(--clr-text);
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      font-family: inherit;
      transition: background 0.18s, border-color 0.18s, color 0.18s;
    }
    .col-trigger-btn:hover, .col-trigger-btn.col-trigger-active {
      background: var(--clr-surface-hover);
      border-color: var(--clr-border-strong);
    }
    .col-trigger-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 1.25rem;
      height: 1.25rem;
      padding: 0 0.3rem;
      background: var(--terracotta);
      color: #fff;
      border-radius: 999px;
      font-size: 0.7rem;
      font-weight: 700;
      line-height: 1;
    }

    .col-popover {
      position: absolute;
      top: calc(100% + 0.5rem);
      left: 0;
      z-index: 100;
      width: 280px;
      background: var(--paper);
      border: 1px solid var(--clr-border);
      border-radius: 12px;
      box-shadow: 0 8px 32px oklch(0.2 0.02 50 / 0.15);
      overflow: hidden;
      animation: col-pop-in 200ms var(--ease-out-expo) both;
    }
    @media (max-width: 600px) {
      .col-popover { left: auto; right: 0; width: 260px; }
    }
    @keyframes col-pop-in {
      from { opacity: 0; transform: translateY(-6px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    .col-pop-head {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--clr-text-muted);
      padding: 0.75rem 1rem 0.5rem;
    }
    .col-pop-loading { padding: 0.75rem 1rem; display: flex; flex-direction: column; gap: 0.5rem; }
    .col-pop-skel {
      height: 2.2rem; border-radius: 8px;
      background: var(--paper-2);
      animation: col-pulse 1.4s ease-in-out infinite;
    }
    @keyframes col-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.55; } }
    .col-pop-empty { font-size: 0.83rem; color: var(--clr-text-muted); padding: 0.5rem 1rem 0.75rem; margin: 0; }

    .col-pop-list { list-style: none; margin: 0; padding: 0 0.5rem; }
    .col-pop-item {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      width: 100%;
      padding: 0.55rem 0.6rem;
      border: none;
      border-radius: 8px;
      background: transparent;
      cursor: pointer;
      text-align: left;
      font-family: inherit;
      font-size: 0.875rem;
      color: var(--clr-text);
      transition: background 0.15s;
    }
    .col-pop-item:hover { background: var(--clr-surface-hover); }
    .col-pop-item.col-pop-checked { color: var(--terracotta); }
    .col-pop-check {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.1rem; height: 1.1rem;
      border-radius: 4px;
      flex-shrink: 0;
      font-size: 0.7rem;
      border: 1.5px solid var(--clr-border);
    }
    .col-pop-checked .col-pop-check {
      background: var(--terracotta);
      border-color: var(--terracotta);
      color: #fff;
    }
    .col-pop-name { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .col-pop-cnt { font-size: 0.72rem; color: var(--clr-text-muted); flex-shrink: 0; }

    .col-pop-new-trigger {
      display: block;
      width: 100%;
      padding: 0.6rem 1rem;
      border: none;
      background: transparent;
      color: var(--terracotta);
      font-size: 0.82rem;
      font-weight: 600;
      cursor: pointer;
      text-align: left;
      font-family: inherit;
      transition: background 0.15s;
    }
    .col-pop-new-trigger:hover { background: var(--clr-surface-hover); }

    .col-pop-create {
      padding: 0.5rem 0.75rem 0.75rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .col-pop-input {
      width: 100%;
      box-sizing: border-box;
      padding: 0.45rem 0.65rem;
      border: 1px solid var(--clr-border);
      border-radius: 7px;
      background: var(--paper-2);
      font-size: 0.85rem;
      font-family: inherit;
      color: var(--clr-text);
    }
    .col-pop-input:focus { outline: none; border-color: var(--terracotta); }
    .col-pop-create-actions { display: flex; gap: 0.5rem; justify-content: flex-end; }
    .col-pop-cancel {
      padding: 0.35rem 0.7rem;
      border: 1px solid var(--clr-border); border-radius: 6px;
      background: transparent; color: var(--clr-text-muted);
      font-size: 0.8rem; font-weight: 600;
      cursor: pointer; font-family: inherit;
      transition: background 0.15s;
    }
    .col-pop-cancel:hover { background: var(--clr-surface-hover); }
    .col-pop-create-btn {
      display: inline-flex; align-items: center; gap: 0.3rem;
      padding: 0.35rem 0.8rem;
      background: var(--terracotta); color: #fff;
      border: none; border-radius: 6px;
      font-size: 0.8rem; font-weight: 600;
      cursor: pointer; font-family: inherit;
      transition: background 0.15s;
    }
    .col-pop-create-btn:disabled { opacity: 0.55; cursor: not-allowed; }
    .col-pop-create-btn:not(:disabled):hover { background: oklch(from var(--terracotta) calc(l - 0.08) c h); }

    /* ── ADD TO SHOPPING LIST (inside ingredients card) ─── */
    .add-to-list-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      margin-top: 1rem;
      padding: 0.6rem 1rem;
      border-radius: var(--radius-pill);
      border: 1.5px solid rgba(255,255,255,0.15);
      background: rgba(255,255,255,0.08);
      font-size: 0.82rem;
      font-weight: 700;
      cursor: pointer;
      color: var(--paper);
      font-family: inherit;
      width: 100%;
      justify-content: center;
      transition: background 0.18s, border-color 0.18s;
      touch-action: manipulation;
    }
    .add-to-list-btn fa-icon { font-size: 0.8rem; }
    .add-to-list-btn:hover {
      background: rgba(255,255,255,0.14);
      border-color: rgba(255,255,255,0.3);
    }
    .add-to-list-btn.in-list {
      border-color: var(--olive);
      color: #9ec86a;
    }
    .add-to-list-btn.in-list:hover {
      background: rgba(107, 122, 58, 0.15);
    }

    @keyframes heart-pop {
      0%   { transform: scale(0.8); }
      45%  { transform: scale(1.28); }
      100% { transform: scale(1); }
    }

    /* ── RECIPE CARD GRID ─────────────────────────────────────── */
    .recipe-card-grid {
      display: grid;
      grid-template-columns: 1fr 1.55fr;
      gap: 2.5rem;
      align-items: start;
    }

    /* Column heading — UPPERCASE SPACED label */
    .col-heading {
      font-family: var(--font-body);
      font-size: 0.76rem;
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--tc);
      margin: 0 0 1.25rem;
      padding-bottom: 0.6rem;
      border-bottom: 1.5px solid var(--tc-soft);
    }

    /* ── INGREDIENTS COLUMN ───────────────────────────────────── */
    .ingredients-col {
      --tc-bg:    #2a1e14;
      --tc-soft:  #4b3322;
      --tc-hover: #3a2a1c;
      --tc-ring:  #7a6458;
      background: var(--tc-bg);
      border-radius: 1.25rem;
      padding: 1.5rem;
      scroll-margin-top: 8rem;
    }
    .ingredients-col .col-heading {
      color: var(--paper);
      border-bottom-color: var(--tc-soft);
    }

    .ing-progress {
      height: 3px;
      background: var(--tc-soft);
      border-radius: var(--radius-pill);
      margin-bottom: 1rem;
      overflow: hidden;
    }
    .ing-progress-bar {
      height: 100%;
      width: 100%;
      background: var(--tc-mid);
      border-radius: var(--radius-pill);
      transform-origin: left;
      transform: scaleX(0);
      transition: transform 0.4s var(--ease-out-expo);
    }

    .ingredients-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .ingredients-list li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.6rem 0.35rem;
      border-bottom: 1px solid var(--tc-soft);
      font-size: 0.9rem;
      cursor: pointer;
      border-radius: var(--radius-xs);
      transition: background 0.15s, opacity 0.25s;
      -webkit-user-select: none;
      user-select: none;
    }
    .ingredients-list li:last-child { border-bottom: none; }
    .ingredients-list li:hover { background: var(--tc-hover); }
    .ingredients-list li:focus-visible { outline: 2px solid var(--tc-mid); outline-offset: 1px; }
    .ingredients-list li.checked { opacity: 0.45; }
    .ingredients-list li.checked .ing-name,
    .ingredients-list li.checked .ing-amount { text-decoration: line-through; }

    .ing-check {
      width: 1.1rem;
      height: 1.1rem;
      border-radius: 50%;
      border: 1.5px solid var(--tc-ring);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: background 0.2s, border-color 0.2s;
    }
    .ing-check fa-icon { font-size: 0.6rem; }
    li.checked .ing-check { background: var(--tc-mid); border-color: var(--tc-mid); }
    li.checked .ing-check fa-icon { color: #fff; }

    .ing-amount { font-weight: 700; color: var(--paper); min-width: 68px; }
    .ing-name   { color: rgba(243, 234, 214, 0.85); }
    .ing-reset {
      margin-top: 0.9rem;
      background: none;
      border: none;
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--tc-mid);
      cursor: pointer;
      padding: 0;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .ing-reset:hover { color: var(--clr-brand); }

    /* ── PROCEDURE COLUMN ─────────────────────────────────────── */
    .procedure-col {
      scroll-margin-top: 8rem;
    }
    .steps-list { display: flex; flex-direction: column; gap: 1.25rem; }
    .step-item { display: flex; gap: 1rem; }
    .step-num {
      flex-shrink: 0;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background: var(--tc);
      color: #fff;
      font-weight: 700;
      font-size: 0.82rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2px;
    }
    .step-body h3 {
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--clr-text);
      margin: 0 0 0.25rem;
    }
    .step-body p {
      margin: 0;
      color: var(--clr-text-muted);
      line-height: 1.75;
      font-size: 0.9rem;
    }

    /* Tags */
    .tags-row {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1.75rem;
    }
    .tags-row svg { width: 0.9rem; height: 0.9rem; color: var(--clr-text-muted); flex-shrink: 0; }
    .tag {
      padding: 0.3rem 0.85rem;
      background: var(--tc-bg);
      border-radius: var(--radius-pill);
      font-size: 0.78rem;
      color: var(--tc);
      font-weight: 500;
      border: 1px solid var(--tc-soft);
    }

    /* Notes */
    .notes-section {
      margin-top: 2rem;
      padding-top: 1.25rem;
      border-top: 1px solid var(--clr-border-faint);
    }
    .notes-label {
      font-family: var(--font-body);
      font-size: 0.76rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--tc);
      margin: 0 0 0.6rem;
    }
    .notes-section p {
      font-size: 0.875rem;
      color: var(--clr-text-muted);
      line-height: 1.7;
      margin: 0;
    }

    /* ── LOWER PANELS ─────────────────────────────────────────── */
    .lower-panels {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-top: 2.5rem;
      padding-top: 2rem;
      border-top: 1.5px solid var(--clr-border-faint);
    }
    .panel-card {
      background: var(--clr-surface);
      border-radius: var(--radius-lg);
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
      color: var(--tc);
      margin-bottom: 1rem;
    }
    .card-label svg { width: 0.9rem; height: 0.9rem; }
    .star-icon { fill: var(--mustard); color: var(--mustard); }
    .count-badge { font-size: 0.72rem; font-weight: 700; color: var(--tc); background: var(--tc-bg); padding: 0.2rem 0.6rem; border-radius: var(--radius-pill); }
    .count-badge.ml { margin-left: 0.5rem; }

    /* Rating */
    .avg-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem; }
    .avg-num { font-family: var(--font-display); font-size: 3rem; font-weight: 700; color: var(--clr-text); line-height: 1; }
    .avg-meta { display: flex; flex-direction: column; gap: 0.3rem; }
    .rating-count { font-size: 0.78rem; color: var(--clr-text-muted); }
    .user-rating { margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--clr-border-faint); }
    .user-rating p { font-size: 0.82rem; color: var(--clr-text-muted); margin: 0 0 0.4rem; font-weight: 600; }

    /* Comment form */
    .comment-textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1.5px solid var(--clr-border);
      border-radius: var(--radius-sm);
      font-size: 0.875rem;
      resize: vertical;
      outline: none;
      box-sizing: border-box;
      color: var(--clr-text);
      font-family: inherit;
      background: var(--clr-surface-alt);
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .comment-textarea:focus { border-color: var(--clr-brand); box-shadow: 0 0 0 3px rgba(177, 80, 45, 0.12); background: var(--clr-surface); }
    .submit-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      margin-top: 0.75rem;
      padding: 0.6rem 1.25rem;
      background: var(--clr-brand);
      color: #fff;
      border: none;
      border-radius: var(--radius-pill);
      font-weight: 700;
      cursor: pointer;
      font-size: 0.85rem;
      transition: background 0.18s;
    }
    .submit-btn svg { width: 0.85rem; height: 0.85rem; }
    .submit-btn:hover:not(:disabled) { background: var(--clr-brand-dark); }
    .submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
    .spin { animation: spin 0.75s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }

    .login-prompt { display: flex; align-items: center; gap: 0.6rem; }
    .login-prompt svg { width: 1.1rem; height: 1.1rem; color: var(--clr-text-muted); flex-shrink: 0; }
    .login-prompt p { font-size: 0.875rem; color: var(--clr-text-muted); margin: 0; }
    .login-prompt a { color: var(--clr-brand); font-weight: 700; text-decoration: none; }
    .login-prompt a:hover { text-decoration: underline; }

    /* Comments */
    .comment { padding: 1rem 0; border-bottom: 1px solid var(--clr-border-faint); }
    .comment:last-child { border-bottom: none; }
    .comment-header { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem; }
    .comment-avatar {
      width: 2rem; height: 2rem;
      border-radius: 50%;
      background: var(--tc);
      color: #fff;
      font-size: 0.8rem; font-weight: 700;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .comment-meta { flex: 1; }
    .comment-meta strong { font-size: 0.85rem; color: var(--clr-text); display: block; }
    .comment-date { font-size: 0.75rem; color: var(--clr-text-muted); }
    .comment-rating { margin-bottom: 0.4rem; }
    .comment-body { color: var(--clr-text-muted); font-size: 0.875rem; line-height: 1.65; margin: 0; }
    .delete-comment-btn {
      background: none; border: none; cursor: pointer;
      color: var(--clr-text-muted); padding: 0.25rem; border-radius: 0.4rem;
      display: flex; transition: color 0.18s, background 0.18s;
    }
    .delete-comment-btn svg { width: 0.9rem; height: 0.9rem; }
    .delete-comment-btn:hover { color: var(--clr-error); background: var(--clr-error-bg); }
    .no-comments { font-size: 0.875rem; color: var(--clr-text-muted); text-align: center; padding: 1rem 0; margin: 0; }

    .reply-btn {
      display: inline-flex; align-items: center; gap: 0.3rem;
      margin-top: 0.4rem; padding: 0.25rem 0.6rem;
      background: none; border: none; font-size: 0.78rem; font-weight: 600;
      color: var(--clr-text-muted); cursor: pointer;
      border-radius: var(--radius-xs);
      transition: background 0.15s, color 0.15s;
    }
    .reply-btn svg { width: 0.75rem; height: 0.75rem; }
    .reply-btn:hover { background: var(--clr-surface-hover); color: var(--clr-brand); }
    .reply-form { margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.4rem; }
    .reply-form textarea {
      width: 100%; box-sizing: border-box;
      padding: 0.5rem 0.75rem;
      border: 1.5px solid var(--clr-border);
      border-radius: 0.625rem;
      font-size: 0.85rem; font-family: inherit;
      resize: vertical;
      background: var(--clr-surface-alt); color: var(--clr-text);
    }
    .reply-form textarea:focus { outline: none; border-color: var(--clr-brand); box-shadow: 0 0 0 3px rgba(177, 80, 45, 0.12); }
    .replies { margin-top: 0.5rem; padding-left: 1rem; border-left: 1px solid var(--clr-border-faint); display: flex; flex-direction: column; gap: 0.6rem; }
    .reply { padding: 0.5rem 0; }
    .reply-avatar { width: 1.5rem !important; height: 1.5rem !important; font-size: 0.65rem !important; }

    /* ── RELATED ──────────────────────────────────────────────── */
    .related-section { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem 4rem; }
    .related-header { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 1.5rem; }
    .related-header h2 { font-family: var(--font-display); font-size: 1.5rem; color: var(--clr-text); margin: 0; }
    .related-link { font-size: 0.875rem; font-weight: 600; color: var(--clr-brand); text-decoration: none; }
    .related-link:hover { text-decoration: underline; }
    .related-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }

    /* ── WIDE-SCREEN ENHANCEMENTS ────────────────────────────────────────── */
    @media (min-width: 1400px) {
      .body-wrap { max-width: 1340px; padding-left: 2.5rem; padding-right: 2.5rem; }
      .recipe-meta-wrap { max-width: 1340px; }
      .recipe-card-grid { grid-template-columns: 1fr 1.4fr; gap: 3.5rem; }
      /* Cap procedure text to ~75ch so lines stay readable at large widths */
      .step-body p { max-width: 72ch; }
    }

    /* ── RESPONSIVE ───────────────────────────────────────────── */
    @media print {
      app-header, app-footer, .share-bar, .related-section, .back-link,
      .hero-overlay, .read-progress, .fav-wrap, .jump-nav, .lower-panels { display: none !important; }
      .hero-banner { min-height: auto !important; max-height: none !important; }
      .hero-img { position: static !important; width: 100% !important; height: 200px !important; object-fit: cover; }
      .hero-content { padding: 1rem 1.5rem 1.5rem !important; }
      .hero-title-script { font-size: 1.8rem !important; }
      .recipe-meta-wrap { padding: 0.75rem 1rem !important; }
      .recipe-meta-bar { max-width: 100% !important; }
      .recipe-card-grid { grid-template-columns: 1fr 1fr !important; gap: 1.5rem !important; }
      .body-wrap { padding: 0.75rem 1rem 1rem !important; }
      .ingredients-col { background: #f0e8d5 !important; color: #2a1e14 !important; border-radius: 0.5rem !important; }
      .ingredients-col .col-heading { color: #2a1e14 !important; }
      .ing-amount { color: #2a1e14 !important; }
      .ing-name { color: #4b3322 !important; }
      .ingredients-list li { opacity: 1 !important; }
      .ingredients-list li.checked { opacity: 0.55 !important; }
      .srv-btn { display: none !important; }
    }
    @media (max-width: 900px) {
      .recipe-card-grid { grid-template-columns: 1fr; gap: 1.5rem; }
      .hero-title-script { font-size: 2.6rem; }
      .jump-link { padding: 0.75rem 1rem; font-size: 0.78rem; }
    }
    @media (max-width: 768px) {
      .jump-nav { top: 3.5rem; }
    }
    @media (max-width: 640px) {
      .hero-banner { min-height: 380px; }
      .hero-title-script { font-size: 2rem; }
      .hero-content { padding: 2rem 1rem 4rem; }
      .jump-nav { justify-content: stretch; }
      .jump-link { flex: 1; justify-content: center; padding: 0.75rem 0.4rem; font-size: 0.72rem; gap: 0.25rem; }
      .jump-sep { display: none; }
      .related-grid { grid-template-columns: 1fr; }
      /* Share bar: hide label so 6 buttons fit in one row */
      .share-label { display: none; }
      /* Meta bar: switch to 2-column grid — separators in DOM can't wrap cleanly */
      .meta-sep { display: none; }
      .recipe-meta-bar { display: grid; grid-template-columns: 1fr 1fr; }
      .meta-item { padding: 0.85rem 0.5rem; }
      /* Grid dividers: right border on col-1 cells (DOM pos 1 & 5), bottom border on row-1 cells (pos 1 & 3) */
      .meta-item:nth-child(1),
      .meta-item:nth-child(5) { border-right: 1px solid var(--tc-soft); }
      .meta-item:nth-child(1),
      .meta-item:nth-child(3) { border-bottom: 1px solid var(--tc-soft); }
    }
    @media (max-width: 380px) {
      .hero-title-script { font-size: 1.8rem; }
      .share-btn { width: 2.25rem; height: 2.25rem; }
      .share-bar { gap: 0.3rem; }
    }
    @media (max-width: 380px) {
      .hero-title-script { font-size: 1.8rem; }
    }
    @media (prefers-reduced-motion: reduce) {
      .favorite-btn, .share-btn, .submit-btn { transition: none; }
      .favorite-btn.pulse fa-icon, .spin { animation: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDetailComponent {
  readonly faChevronLeft = faChevronLeft;
  readonly faUtensils = faUtensils;
  readonly faListOl = faListOl;
  readonly faComments = faComments;
  readonly faSpinner = faSpinner;
  readonly faHeart = faHeart;
  readonly faHeartOutline = faHeartOutline;
  readonly faCheck = faCheck;
  readonly faCopy = faCopy;
  readonly faWhatsapp = faWhatsapp;
  readonly faViber = faViber;
  readonly faMinus = faMinus;
  readonly faPlus = faPlus;
  readonly faPrint = faPrint;
  readonly faCartShopping = faCartShopping;
  readonly faLayerGroup = faLayerGroup;

  private recipeService = inject(RecipeService);
  private favoriteService = inject(FavoriteService);
  private commentService = inject(CommentService);
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);
  private toast = inject(ToastService);
  private perf = inject(PerfService);
  auth = inject(AuthService);
  private recentlyViewed = inject(RecentlyViewedService);
  shoppingList = inject(ShoppingListService);
  private collectionSvc = inject(CollectionService);

  colPopoverOpen = signal(false);
  loadingCollections = signal(false);
  recipeCollections = signal<CollectionForRecipe[]>([]);
  colCreateOpen = signal(false);
  colNewName = signal('');
  colCreating = signal(false);
  recipeInCollectionCount = computed(() => this.recipeCollections().filter(c => c.has_recipe).length);

  Math = Math;
  private heartPulseTimer: ReturnType<typeof setTimeout> | null = null;
  private copiedTimer: ReturnType<typeof setTimeout> | null = null;
  private onDocClick = (e: MouseEvent) => {
    const wrap = (e.target as HTMLElement).closest('.col-popover-wrap');
    if (!wrap && this.colPopoverOpen()) this.colPopoverOpen.set(false);
  };
  readProgress = signal(0);
  currentServings = signal(0);
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
  favoriting = signal(false);
  heartPulse = signal(false);
  submittingComment = signal(false);
  submittingReply = signal(false);
  confirmDeleteId = signal<number | null>(null);

  readonly currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  encodedUrl = computed(() => encodeURIComponent(this.currentUrl));
  encodedTitle = computed(() => encodeURIComponent(this.recipe()?.title || ''));
  scalingFactor = computed(() => {
    const base = this.recipe()?.servings;
    return base && base > 0 && this.currentServings() > 0 ? this.currentServings() / base : 1;
  });

  heroGradient = computed(() => {
    const r = this.recipe();
    if (!r) return '#2a221a';
    return `linear-gradient(135deg, ${r.hero_palette_from || '#3a2a1c'}, ${r.hero_palette_to || '#2a221a'})`;
  });

  constructor() {
    this.route.params.pipe(takeUntilDestroyed()).subscribe(params => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      this.checkedIngredients.set(new Set());
      this.currentServings.set(0);
      this.loadRecipe(params['slug']);
    });
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      document.addEventListener('click', this.onDocClick);
      this.onScroll();
    }
  }

  ngOnDestroy(): void {
    this.seo.removeJsonLd();
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.onScroll);
      document.removeEventListener('click', this.onDocClick);
    }
    if (this.heartPulseTimer !== null) clearTimeout(this.heartPulseTimer);
    if (this.copiedTimer !== null) clearTimeout(this.copiedTimer);
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
        if (this.copiedTimer !== null) clearTimeout(this.copiedTimer);
        this.copiedTimer = setTimeout(() => { this.copied.set(false); this.copiedTimer = null; }, 2000);
      },
      () => this.toast.error('Неуспешно копиране.'),
    );
  }

  loadRecipe(slug: string): void {
    this.perf.mark('recipe_detail_fetch_start');
    this.loadError.set(false);
    this.recipeService.getRecipe(slug).pipe(takeUntilDestroyed()).subscribe({
      next: (res) => {
        this.recipe.set(res.recipe);
        this.currentServings.set(res.recipe.servings);
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
        this.recentlyViewed.add({
          id: res.recipe.id,
          slug: res.recipe.slug,
          title: res.recipe.title,
          hero_image: res.recipe.hero_image,
          category: res.recipe.category,
          prep_minutes: res.recipe.prep_minutes,
          cook_minutes: res.recipe.cook_minutes,
          viewedAt: Date.now(),
        });
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

  incrementServings(): void { this.currentServings.update(n => n + 1); }
  decrementServings(): void { this.currentServings.update(n => Math.max(1, n - 1)); }
  printRecipe(): void { window.print(); }

  addToShoppingList(): void {
    const r = this.recipe();
    if (!r) return;
    if (this.shoppingList.hasRecipe(r.slug)) {
      this.shoppingList.removeRecipe(r.slug);
      this.toast.success('Рецептата е премахната от списъка.');
    } else {
      this.shoppingList.addFromRecipe(r);
      this.toast.success('Съставките са добавени в списъка за пазаруване.');
    }
  }

  toggleColPopover(): void {
    const next = !this.colPopoverOpen();
    this.colPopoverOpen.set(next);
    if (next) {
      const slug = this.recipe()?.slug;
      if (!slug) return;
      this.loadingCollections.set(true);
      this.colCreateOpen.set(false);
      this.colNewName.set('');
      this.collectionSvc.getCollectionsForRecipe(slug).subscribe({
        next: (cols) => { this.recipeCollections.set(cols); this.loadingCollections.set(false); },
        error: () => this.loadingCollections.set(false),
      });
    }
  }

  toggleInCollection(col: CollectionForRecipe): void {
    const slug = this.recipe()?.slug;
    if (!slug) return;
    this.collectionSvc.toggleRecipe(col.id, slug).subscribe({
      next: (res) => {
        this.recipeCollections.update(cols =>
          cols.map(c => c.id === col.id ? { ...c, has_recipe: res.added, recipes_count: res.recipes_count } : c),
        );
        this.toast.success(res.added ? `Добавено в "${col.name}".` : `Премахнато от "${col.name}".`);
      },
      error: (err) => {
        const msg = err?.error?.message || 'Грешка при промяна на колекцията.';
        this.toast.error(msg);
      },
    });
  }

  quickCreateCollection(): void {
    const name = this.colNewName().trim();
    const slug = this.recipe()?.slug;
    if (!name || !slug || this.colCreating()) return;
    this.colCreating.set(true);
    this.collectionSvc.createCollection({ name }).subscribe({
      next: (newCol) => {
        // Immediately add the recipe to the new collection
        this.collectionSvc.toggleRecipe(newCol.id, slug).subscribe({
          next: (res) => {
            const entry: CollectionForRecipe = { id: newCol.id, name: newCol.name, has_recipe: true, recipes_count: res.recipes_count };
            this.recipeCollections.update(cols => [entry, ...cols]);
            this.colCreating.set(false);
            this.colCreateOpen.set(false);
            this.colNewName.set('');
            this.toast.success(`Колекцията "${name}" е създадена и рецептата е добавена.`);
          },
          error: () => {
            const entry: CollectionForRecipe = { id: newCol.id, name: newCol.name, has_recipe: false, recipes_count: 0 };
            this.recipeCollections.update(cols => [entry, ...cols]);
            this.colCreating.set(false);
            this.colCreateOpen.set(false);
            this.colNewName.set('');
          },
        });
      },
      error: (err) => {
        this.colCreating.set(false);
        this.toast.error(err?.error?.message || 'Грешка при създаване на колекция.');
      },
    });
  }

  scaleAmount(amount: string): string {
    const factor = this.scalingFactor();
    if (factor === 1) return amount;

    const rangeM = amount.match(/^(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)(\D*)/);
    if (rangeM) {
      return `${this.fmtNum(+rangeM[1] * factor)}-${this.fmtNum(+rangeM[2] * factor)}${rangeM[3]}`;
    }
    const mixedM = amount.match(/^(\d+)\s+(\d+)\/(\d+)(.*)/);
    if (mixedM) {
      const val = (parseInt(mixedM[1]) + parseInt(mixedM[2]) / parseInt(mixedM[3])) * factor;
      return `${this.fmtNum(val)}${mixedM[4]}`;
    }
    const fracM = amount.match(/^(\d+)\/(\d+)(.*)/);
    if (fracM) {
      const val = (parseInt(fracM[1]) / parseInt(fracM[2])) * factor;
      return `${this.fmtNum(val)}${fracM[3]}`;
    }
    const numM = amount.match(/^(\d+(?:\.\d+)?)(.*)/);
    if (numM) {
      return `${this.fmtNum(+numM[1] * factor)}${numM[2]}`;
    }
    return amount;
  }

  private fmtNum(n: number): string {
    if (n === 0) return '0';
    const whole = Math.floor(n);
    const frac = n - whole;
    const knownFracs: Array<[number, string]> = [
      [0.125, '⅛'], [0.25, '¼'], [1 / 3, '⅓'],
      [0.5, '½'], [2 / 3, '⅔'], [0.75, '¾'],
    ];
    for (const [val, sym] of knownFracs) {
      if (Math.abs(frac - val) < 0.07) return whole > 0 ? `${whole}${sym}` : sym;
    }
    if (n >= 10) return String(Math.round(n));
    if (n >= 1) return String(Math.round(n * 2) / 2);
    return String(Math.round(n * 4) / 4);
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  toggleFavorite(): void {
    const r = this.recipe();
    if (!r || this.favoriting()) return;
    this.favoriting.set(true);
    this.favoriteService.toggleFavorite(r.slug).subscribe({
      next: (s) => {
        this.favoriteStatus.set(s);
        this.favoriting.set(false);
        if (s.isFavorite) {
          this.heartPulse.set(true);
          if (this.heartPulseTimer !== null) clearTimeout(this.heartPulseTimer);
          this.heartPulseTimer = setTimeout(() => { this.heartPulse.set(false); this.heartPulseTimer = null; }, 420);
        }
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
