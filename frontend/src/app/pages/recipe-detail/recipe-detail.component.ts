import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { AuthService } from '../../services/auth.service';
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
    @if (recipe) {
      <div class="detail-page">

        <!-- Full-bleed hero image -->
        <div class="hero-banner" [style.background]="heroGradient">
          @if (recipe.hero_image) {
            <img [src]="recipe.hero_image" [alt]="recipe.title" class="hero-img" fetchpriority="high" loading="eager" />
          }
          <div class="hero-overlay"></div>
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
              @if (averageRating) {
                <div class="stat-pill stat-pill-gold">
                  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <span>{{ averageRating.toFixed(1) }}</span>
                </div>
              }
            </div>

            <!-- Share bar -->
            <div class="share-bar">
              <span class="share-label">Сподели:</span>
              <a class="share-btn share-fb" [href]="'https://www.facebook.com/sharer/sharer.php?u=' + encodedUrl" target="_blank" rel="noopener" title="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a class="share-btn share-x" [href]="'https://twitter.com/intent/tweet?url=' + encodedUrl + '&text=' + encodedTitle" target="_blank" rel="noopener" title="X">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a class="share-btn share-wa" [href]="'https://wa.me/?text=' + encodedTitle + '%20' + encodedUrl" target="_blank" rel="noopener" title="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.531 5.855L.057 23.885l6.196-1.452A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.88 9.88 0 0 1-5.031-1.37l-.361-.214-3.735.875.892-3.653-.235-.374A9.867 9.867 0 0 1 2.118 12C2.118 6.52 6.52 2.118 12 2.118S21.882 6.52 21.882 12 17.48 21.882 12 21.882z"/></svg>
              </a>
              <button class="share-btn share-copy" (click)="copyLink()" [title]="copied ? 'Копирано!' : 'Копирай връзка'">
                @if (copied) {
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                } @else {
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                }
              </button>
              @if (canNativeShare) {
                <button class="share-btn share-native" (click)="nativeShare()" title="Сподели">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                </button>
              }
            </div>
          </div>
        </div>

        <!-- Main body -->
        <div class="body-wrap">
          <div class="content-grid">

            <!-- LEFT: main content -->
            <main class="main-content">

              @if (recipe.description) {
                <div class="prose-card">
                  <p>{{ recipe.description }}</p>
                </div>
              }

              <!-- Ingredients -->
              <div class="section-card">
                <div class="section-heading">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>
                  <h2>Съставки</h2>
                  <span class="count-badge">{{ recipe.ingredients?.length || 0 }}</span>
                </div>
                <ul class="ingredients-list">
                  @for (ing of recipe.ingredients; track ing.id) {
                    <li>
                      <span class="ing-dot"></span>
                      <span class="ing-amount">{{ ing.amount }}</span>
                      <span class="ing-name">{{ ing.name }}</span>
                    </li>
                  }
                </ul>
              </div>

              <!-- Steps -->
              <div class="section-card">
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
            </main>

            <!-- RIGHT: sidebar -->
            <aside class="sidebar">

              <!-- Favorite -->
              @if (auth.isAuthenticated()) {
                <button class="favorite-btn" [class.favorited]="favoriteStatus?.isFavorite" (click)="toggleFavorite()">
                  @if (favoriteStatus?.isFavorite) {
                    <svg viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    Запазено · {{ favoriteStatus?.favoriteCount }}
                  } @else {
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    Запази · {{ favoriteStatus?.favoriteCount || 0 }}
                  }
                </button>
              }

              <!-- Rating -->
              <div class="sidebar-card">
                <div class="card-label">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="star-icon"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  Оценка
                </div>
                <div class="avg-row">
                  <span class="avg-num">{{ averageRating ? averageRating.toFixed(1) : '—' }}</span>
                  <div class="avg-meta">
                    <app-star-rating [value]="Math.round(averageRating || 0)" [interactive]="false" />
                    <span class="rating-count">{{ ratingsCount > 0 ? ratingsCount + ' оценки' : 'Все още няма' }}</span>
                  </div>
                </div>
                @if (auth.isAuthenticated()) {
                  <div class="user-rating">
                    <p>Твоята оценка:</p>
                    <app-star-rating [value]="userRating" (rated)="onRate($event)" />
                  </div>
                }
              </div>

              <!-- Comment form -->
              @if (auth.isAuthenticated()) {
                <div class="sidebar-card">
                  <div class="card-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    Остави коментар
                  </div>
                  <form (submit)="onComment($event)">
                    <textarea [(ngModel)]="commentBody" name="body"
                              placeholder="Напиши мнението си..." rows="4"
                              class="comment-textarea"></textarea>
                    <button type="submit" class="submit-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                      Публикувай
                    </button>
                  </form>
                </div>
              } @else {
                <div class="sidebar-card login-prompt">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                  <p>За оценка или коментар <a routerLink="/signin">влез в профила си</a>.</p>
                </div>
              }

              <!-- Comments -->
              <div class="sidebar-card">
                <div class="card-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  Коментари
                  @if (comments.length > 0) {
                    <span class="count-badge ml">{{ comments.length }}</span>
                  }
                </div>
                @for (comment of comments; track comment.id) {
                  <div class="comment">
                    <div class="comment-header">
                      <div class="comment-avatar">{{ (comment.author?.name || comment.author?.email || 'Ч')[0].toUpperCase() }}</div>
                      <div class="comment-meta">
                        <strong>{{ comment.author?.name || comment.author?.email || 'Читател' }}</strong>
                        <span class="comment-date">{{ comment.created_at | date:'dd MMM yyyy' }}</span>
                      </div>
                      @if (canDeleteComment(comment)) {
                        <button class="delete-comment-btn" (click)="deleteComment(comment.id)" title="Изтрий">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
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
                  </div>
                } @empty {
                  <p class="no-comments">Все още няма коментари. Бъди първи!</p>
                }
              </div>

            </aside>
          </div>
        </div>

        <!-- Related -->
        @if (relatedRecipes.length > 0) {
          <section class="related-section">
            <div class="related-header">
              <h2>Подобни рецепти</h2>
              <a routerLink="/recipes" class="related-link">Виж всички →</a>
            </div>
            <div class="related-grid">
              @for (r of relatedRecipes; track r.id; let i = $index) {
                <app-recipe-card [recipe]="r" [index]="i" />
              }
            </div>
          </section>
        }

      </div>
    }
  `,
  styles: [`
    .detail-page { min-height: 100vh; background: #faf7f4; }

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
      background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.05) 100%);
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
      transition: color 0.2s;
    }
    .back-link svg { width: 1rem; height: 1rem; }
    .back-link:hover { color: #fff; }
    .hero-badge {
      display: inline-block;
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #2d6a4f;
      background: #d8f3dc;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      margin-bottom: 0.75rem;
    }
    h1 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 3rem;
      color: #fff;
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
    }
    .stat-pill svg { width: 0.9rem; height: 0.9rem; }
    .stat-pill-gold { background: rgba(251,191,36,0.2); border-color: rgba(251,191,36,0.5); color: #fbbf24; }
    .stat-pill-gold svg { fill: #fbbf24; width: 0.85rem; height: 0.85rem; }

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
    .share-x:hover   { background: #000; border-color: #000; }
    .share-wa:hover  { background: #25d366; border-color: #25d366; }
    .share-copy:hover, .share-native:hover { background: rgba(255,255,255,0.3); }

    /* ===== BODY ===== */
    .body-wrap { max-width: 1200px; margin: 0 auto; padding: 2.5rem 1.5rem; }
    .content-grid {
      display: grid;
      grid-template-columns: 1fr 360px;
      gap: 2rem;
      align-items: start;
    }
    .main-content { min-width: 0; display: flex; flex-direction: column; gap: 1.5rem; }

    /* Prose card */
    .prose-card {
      background: #fff;
      border-radius: 1.25rem;
      padding: 1.5rem;
      border: 1px solid rgba(0,0,0,0.07);
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .prose-card p {
      color: #44403c;
      line-height: 1.85;
      margin: 0;
      font-size: 1rem;
    }

    /* Section cards */
    .section-card {
      background: #fff;
      border-radius: 1.25rem;
      padding: 1.5rem;
      border: 1px solid rgba(0,0,0,0.07);
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .section-heading {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1.25rem;
    }
    .section-heading svg { width: 1.1rem; height: 1.1rem; color: #4a7c59; flex-shrink: 0; }
    h2 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 1.25rem;
      color: #1c1917;
      margin: 0;
    }
    .count-badge {
      margin-left: auto;
      font-size: 0.72rem;
      font-weight: 700;
      color: #4a7c59;
      background: #d8f3dc;
      padding: 0.2rem 0.6rem;
      border-radius: 9999px;
    }
    .count-badge.ml { margin-left: 0.5rem; }

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
      padding: 0.65rem 0;
      border-bottom: 1px solid rgba(0,0,0,0.05);
      font-size: 0.925rem;
    }
    .ingredients-list li:last-child { border-bottom: none; }
    .ing-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #4a7c59;
      flex-shrink: 0;
    }
    .ing-amount { font-weight: 700; color: #1c1917; min-width: 70px; }
    .ing-name { color: #44403c; }

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
      background: #4a7c59;
      color: #fff;
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
      color: #1c1917;
      margin: 0 0 0.3rem;
    }
    .step-body p {
      margin: 0;
      color: #44403c;
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
    .tags-row svg { width: 0.9rem; height: 0.9rem; color: #78716c; flex-shrink: 0; }
    .tag {
      padding: 0.3rem 0.85rem;
      background: #f0ede8;
      border-radius: 9999px;
      font-size: 0.78rem;
      color: #44403c;
      font-weight: 500;
    }

    /* ===== SIDEBAR ===== */
    .sidebar { display: flex; flex-direction: column; gap: 1.25rem; }
    .favorite-btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.85rem;
      border-radius: 1rem;
      border: 1.5px solid rgba(0,0,0,0.1);
      background: #fff;
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      color: #44403c;
    }
    .favorite-btn svg { width: 1.1rem; height: 1.1rem; }
    .favorite-btn.favorited { background: #fef2f2; border-color: #fecaca; color: #dc2626; }
    .favorite-btn:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
    .sidebar-card {
      background: #fff;
      border-radius: 1.25rem;
      padding: 1.25rem;
      border: 1px solid rgba(0,0,0,0.07);
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .card-label {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #4a7c59;
      margin-bottom: 1rem;
    }
    .card-label svg { width: 0.9rem; height: 0.9rem; }
    .star-icon { fill: #f59e0b; color: #f59e0b; }

    /* Rating */
    .avg-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem; }
    .avg-num {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 3rem;
      font-weight: 700;
      color: #1c1917;
      line-height: 1;
    }
    .avg-meta { display: flex; flex-direction: column; gap: 0.3rem; }
    .rating-count { font-size: 0.78rem; color: #78716c; }
    .user-rating {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(0,0,0,0.06);
    }
    .user-rating p { font-size: 0.82rem; color: #44403c; margin: 0 0 0.4rem; font-weight: 600; }

    /* Comment form */
    .comment-textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1.5px solid rgba(0,0,0,0.1);
      border-radius: 0.75rem;
      font-size: 0.875rem;
      resize: vertical;
      outline: none;
      box-sizing: border-box;
      color: #1c1917;
      font-family: inherit;
      background: #fafaf9;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .comment-textarea:focus { border-color: #4a7c59; box-shadow: 0 0 0 3px rgba(74,124,89,0.12); background: #fff; }
    .submit-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      margin-top: 0.75rem;
      padding: 0.6rem 1.25rem;
      background: #4a7c59;
      color: white;
      border: none;
      border-radius: 9999px;
      font-weight: 700;
      cursor: pointer;
      font-size: 0.85rem;
      transition: background 0.2s;
    }
    .submit-btn svg { width: 0.85rem; height: 0.85rem; }
    .submit-btn:hover { background: #3a6347; }

    /* Login prompt */
    .login-prompt {
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }
    .login-prompt svg { width: 1.1rem; height: 1.1rem; color: #78716c; flex-shrink: 0; }
    .login-prompt p { font-size: 0.875rem; color: #44403c; margin: 0; }
    .login-prompt a { color: #4a7c59; font-weight: 700; text-decoration: none; }
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
      background: #4a7c59;
      color: #fff;
      font-size: 0.8rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .comment-meta { flex: 1; }
    .comment-meta strong { font-size: 0.85rem; color: #1c1917; display: block; }
    .comment-date { font-size: 0.75rem; color: #a8a29e; }
    .comment-rating { margin-bottom: 0.4rem; }
    .comment-body { color: #44403c; font-size: 0.875rem; line-height: 1.65; margin: 0; }
    .delete-comment-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: #a8a29e;
      padding: 0.25rem;
      border-radius: 0.4rem;
      display: flex;
      transition: color 0.2s, background 0.2s;
    }
    .delete-comment-btn svg { width: 0.9rem; height: 0.9rem; }
    .delete-comment-btn:hover { color: #dc2626; background: #fef2f2; }
    .no-comments { font-size: 0.875rem; color: #a8a29e; text-align: center; padding: 1rem 0; margin: 0; }

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
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 1.5rem;
      color: #1c1917;
      margin: 0;
    }
    .related-link { font-size: 0.875rem; font-weight: 600; color: #4a7c59; text-decoration: none; }
    .related-link:hover { text-decoration: underline; }
    .related-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    @media (max-width: 900px) {
      .content-grid { grid-template-columns: 1fr; }
      h1 { font-size: 2.2rem; }
      .hero-banner { min-height: 420px; }
    }
    @media (max-width: 640px) {
      h1 { font-size: 1.8rem; }
      .related-grid { grid-template-columns: 1fr; }
      .hero-banner { min-height: 360px; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDetailComponent implements OnInit {
  private recipeService = inject(RecipeService);
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);
  private cdr = inject(ChangeDetectorRef);
  auth = inject(AuthService);

  Math = Math;
  recipe: Recipe | null = null;
  relatedRecipes: Recipe[] = [];
  comments: Comment[] = [];
  averageRating: number | null = null;
  ratingsCount = 0;
  favoriteStatus: FavoriteStatusResponse | null = null;
  userRating = 0;
  commentBody = '';
  copied = false;
  canNativeShare = typeof navigator !== 'undefined' && !!navigator.share;

  get currentUrl(): string { return typeof window !== 'undefined' ? window.location.href : ''; }
  get encodedUrl(): string { return encodeURIComponent(this.currentUrl); }
  get encodedTitle(): string { return encodeURIComponent(this.recipe?.title || ''); }

  copyLink(): void {
    navigator.clipboard.writeText(this.currentUrl).then(() => {
      this.copied = true;
      this.cdr.markForCheck();
      setTimeout(() => { this.copied = false; this.cdr.markForCheck(); }, 2000);
    });
  }

  nativeShare(): void {
    navigator.share({ title: this.recipe?.title || '', text: this.recipe?.excerpt || '', url: this.currentUrl }).catch(() => {});
  }

  get heroGradient(): string {
    if (!this.recipe) return '#1c1917';
    const from = this.recipe.hero_palette_from || '#3a3028';
    const to   = this.recipe.hero_palette_to   || '#1c1917';
    return `linear-gradient(135deg, ${from}, ${to})`;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      this.loadRecipe(params['slug']);
    });
  }

  loadRecipe(slug: string): void {
    this.recipeService.getRecipe(slug).subscribe({
      next: (res) => {
        this.recipe = res.recipe;
        this.averageRating = res.averageRating;
        this.ratingsCount = res.ratingsCount;
        this.comments = res.recipe.comments || [];
        this.seo.set({
          title: res.recipe.title,
          description: res.recipe.excerpt || res.recipe.description?.slice(0, 155) || '',
          image: res.recipe.hero_image || undefined,
        });
        if (this.auth.isAuthenticated() && this.auth.user()) {
          const userId = this.auth.user()!.id;
          const userComment = this.comments.find(c => c.user_id === userId);
          if (userComment?.rating) this.userRating = userComment.rating;
          if (userComment?.body)   this.commentBody = userComment.body;
        }
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to load recipe:', err),
    });
    this.recipeService.getRelatedRecipes(slug).subscribe({
      next: (r) => { this.relatedRecipes = r; this.cdr.markForCheck(); },
      error: (err) => console.error('Failed to load related recipes:', err),
    });
    this.recipeService.getFavoriteStatus(slug).subscribe({
      next: (s) => { this.favoriteStatus = s; this.cdr.markForCheck(); },
      error: (err) => console.error('Failed to load favorite status:', err),
    });
  }

  toggleFavorite(): void {
    if (!this.recipe) return;
    this.recipeService.toggleFavorite(this.recipe.slug).subscribe(s => { this.favoriteStatus = s; this.cdr.markForCheck(); });
  }

  onRate(rating: number): void {
    if (!this.recipe) return;
    this.recipeService.rateRecipe(this.recipe.slug, rating).subscribe(res => {
      this.userRating = res.rating;
      this.averageRating = res.averageRating;
      this.ratingsCount = res.ratingsCount;
      this.cdr.markForCheck();
    });
  }

  onComment(e: Event): void {
    e.preventDefault();
    if (!this.recipe) return;
    this.recipeService.commentRecipe(this.recipe.slug, this.commentBody, this.userRating || undefined).subscribe(comment => {
      const idx = this.comments.findIndex(c => c.id === comment.id);
      if (idx >= 0) { this.comments[idx] = comment; } else { this.comments.unshift(comment); }
      this.commentBody = '';
      this.cdr.markForCheck();
    });
  }

  canDeleteComment(comment: Comment): boolean {
    if (!this.auth.isAuthenticated()) return false;
    const user = this.auth.user();
    if (!user) return false;
    return user.role === 'ADMIN' || user.id === comment.user_id;
  }

  deleteComment(id: number): void {
    this.recipeService.deleteComment(id).subscribe(() => {
      this.comments = this.comments.filter(c => c.id !== id);
      this.cdr.markForCheck();
    });
  }
}
