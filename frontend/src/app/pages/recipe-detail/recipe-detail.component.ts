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
        <div class="hero" [style.background]="heroGradient">
          <div class="hero-inner">
            <a routerLink="/recipes" class="back-link">← Обратно към рецептите</a>
            <h1>{{ recipe.title }}</h1>
            <p class="hero-excerpt">{{ recipe.excerpt }}</p>
            <div class="hero-meta">
              <span>⏱ {{ recipe.prep_minutes + recipe.cook_minutes }} мин</span>
              <span>👥 {{ recipe.servings }} порции</span>
              <span>📊 {{ recipe.difficulty }}</span>
              @if (recipe.category) {
                <span class="hero-category">{{ recipe.category.name }}</span>
              }
            </div>

            <div class="share-bar">
              <span class="share-label">Сподели:</span>
              <a class="share-btn share-fb"
                 [href]="'https://www.facebook.com/sharer/sharer.php?u=' + encodedUrl"
                 target="_blank" rel="noopener" title="Сподели във Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a class="share-btn share-x"
                 [href]="'https://twitter.com/intent/tweet?url=' + encodedUrl + '&text=' + encodedTitle"
                 target="_blank" rel="noopener" title="Сподели в X">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a class="share-btn share-wa"
                 [href]="'https://wa.me/?text=' + encodedTitle + '%20' + encodedUrl"
                 target="_blank" rel="noopener" title="Сподели в WhatsApp">
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

        <div class="content-grid">
          <main class="main-content">
            <section class="description-section">
              <p>{{ recipe.description }}</p>
            </section>

            <section class="ingredients-section">
              <h2>Съставки</h2>
              <ul class="ingredients-list">
                @for (ing of recipe.ingredients; track ing.id) {
                  <li><strong>{{ ing.amount }}</strong> {{ ing.name }}</li>
                }
              </ul>
            </section>

            <section class="steps-section">
              <h2>Стъпки</h2>
              @for (step of recipe.steps; track step.id; let i = $index) {
                <div class="step">
                  <div class="step-number">{{ i + 1 }}</div>
                  <div class="step-content">
                    <h3>{{ step.title }}</h3>
                    <p>{{ step.description }}</p>
                  </div>
                </div>
              }
            </section>

            @if (recipe.tags && recipe.tags.length) {
              <section class="tags-section">
                @for (tag of recipe.tags; track tag.id) {
                  <span class="tag">{{ tag.name }}</span>
                }
              </section>
            }
          </main>

          <aside class="sidebar">
            <!-- Favorite button -->
            @if (auth.isAuthenticated()) {
              <button class="favorite-btn" [class.favorited]="favoriteStatus?.isFavorite" (click)="toggleFavorite()">
                {{ favoriteStatus?.isFavorite ? '❤️' : '🤍' }}
                {{ favoriteStatus?.favoriteCount || 0 }} запазвания
              </button>
            }

            <!-- Rating section -->
            <div class="rating-card">
              <h3>Оценка на рецептата</h3>
              <div class="avg-rating">
                <span class="avg-number">{{ averageRating ? averageRating.toFixed(1) : '—' }}</span>
                <span class="avg-suffix">/ 5</span>
              </div>
              <app-star-rating [value]="Math.round(averageRating || 0)" [interactive]="false" />
              <p class="rating-info">
                {{ ratingsCount > 0 ? ratingsCount + ' оценки' : 'Все още няма оценки.' }}
              </p>

              @if (auth.isAuthenticated()) {
                <div class="user-rating">
                  <p>Твоята оценка:</p>
                  <app-star-rating [value]="userRating" (rated)="onRate($event)" />
                </div>
              }
            </div>

            <!-- Comment form -->
            @if (auth.isAuthenticated()) {
              <div class="comment-form-card">
                <h3>Остави коментар</h3>
                <form (submit)="onComment($event)">
                  <textarea
                    [(ngModel)]="commentBody"
                    name="body"
                    placeholder="Напиши мнението си..."
                    rows="4"
                    class="comment-textarea"
                  ></textarea>
                  <button type="submit" class="submit-btn">Публикувай</button>
                </form>
              </div>
            } @else {
              <div class="login-prompt">
                <p>За да оставиш оценка или коментар, <a routerLink="/signin">влез в профила си</a>.</p>
              </div>
            }

            <!-- Comments list -->
            <div class="comments-card">
              <h3>Коментари</h3>
              @for (comment of comments; track comment.id) {
                <div class="comment">
                  <div class="comment-header">
                    <strong>{{ comment.author?.name || comment.author?.email || 'Читател' }}</strong>
                    <span class="comment-date">{{ comment.created_at | date:'dd MMM yyyy' }}</span>
                  </div>
                  @if (comment.rating) {
                    <div class="comment-rating">
                      <app-star-rating [value]="comment.rating" [interactive]="false" />
                    </div>
                  }
                  @if (comment.body?.trim()) {
                    <p class="comment-body">{{ comment.body }}</p>
                  }
                  @if (canDeleteComment(comment)) {
                    <button class="delete-comment-btn" (click)="deleteComment(comment.id)">Изтрий</button>
                  }
                </div>
              } @empty {
                <p class="no-comments">Все още няма коментари.</p>
              }
            </div>
          </aside>
        </div>

        <!-- Related recipes -->
        @if (relatedRecipes.length > 0) {
          <section class="related-section">
            <h2>Подобни рецепти</h2>
            <div class="related-grid">
              @for (r of relatedRecipes; track r.id) {
                <app-recipe-card [recipe]="r" />
              }
            </div>
          </section>
        }
      </div>
    }
  `,
  styles: [`
    .detail-page { min-height: 100vh; }
    .hero {
      padding: 4rem 1.5rem 3rem;
      text-align: center;
    }
    .hero-inner { max-width: 700px; margin: 0 auto; }
    .back-link {
      color: #44403c;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 600;
      display: inline-block;
      margin-bottom: 1rem;
    }
    .back-link:hover { color: #1c1917; }
    h1 {
      font-family: 'Georgia', serif;
      font-size: 2.5rem;
      color: #1c1917;
      margin: 0 0 0.75rem;
    }
    .hero-excerpt {
      color: #44403c;
      font-size: 1.05rem;
      line-height: 1.7;
    }
    .hero-meta {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1.25rem;
      margin-top: 1.5rem;
      font-size: 0.9rem;
      color: #44403c;
      font-weight: 500;
    }
    .hero-category {
      background: rgba(255,255,255,0.85);
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-weight: 700;
      color: #78350f;
      border: 1px solid rgba(120, 53, 15, 0.2);
    }
    .share-bar {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1.75rem;
      flex-wrap: wrap;
    }
    .share-label {
      font-size: 0.8rem;
      font-weight: 600;
      color: #78716c;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-right: 0.25rem;
    }
    .share-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 50%;
      border: 1.5px solid rgba(0,0,0,0.12);
      background: rgba(255,255,255,0.85);
      backdrop-filter: blur(6px);
      color: #1c1917;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.2s, transform 0.2s, border-color 0.2s;
    }
    .share-btn svg { width: 1rem; height: 1rem; }
    .share-btn:hover { transform: translateY(-2px); border-color: rgba(0,0,0,0.25); }
    .share-fb:hover  { background: #1877f2; color: #fff; border-color: #1877f2; }
    .share-x:hover   { background: #000; color: #fff; border-color: #000; }
    .share-wa:hover  { background: #25d366; color: #fff; border-color: #25d366; }
    .share-copy:hover   { background: #1c1917; color: #fff; border-color: #1c1917; }
    .share-native:hover { background: #78350f; color: #fff; border-color: #78350f; }
    .content-grid {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
      display: grid;
      gap: 2rem;
      grid-template-columns: 1fr 380px;
    }
    .main-content { min-width: 0; }
    h2 {
      font-family: 'Georgia', serif;
      font-size: 1.5rem;
      color: #1c1917;
      margin: 0 0 1rem;
    }
    .description-section {
      padding: 1.5rem;
      background: #ffffff;
      border-radius: 1.5rem;
      border: 1px solid rgba(0,0,0,0.14);
      margin-bottom: 1.5rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    }
    .description-section p {
      color: #292524;
      line-height: 1.8;
      margin: 0;
    }
    .ingredients-section, .steps-section {
      padding: 1.5rem;
      background: #ffffff;
      border-radius: 1.5rem;
      border: 1px solid rgba(0,0,0,0.14);
      margin-bottom: 1.5rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    }
    .ingredients-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .ingredients-list li {
      padding: 0.6rem 0;
      border-bottom: 1px solid #e7e5e4;
      color: #292524;
      font-size: 0.95rem;
    }
    .ingredients-list li:last-child { border-bottom: none; }
    .step {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.25rem;
    }
    .step-number {
      flex-shrink: 0;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background: #78350f;
      color: #ffffff;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .step h3 {
      font-size: 1rem;
      margin: 0 0 0.25rem;
      color: #1c1917;
    }
    .step p {
      margin: 0;
      color: #44403c;
      line-height: 1.7;
      font-size: 0.9rem;
    }
    .tags-section {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }
    .tag {
      padding: 0.35rem 0.9rem;
      background: #e8e3dc;
      border-radius: 9999px;
      font-size: 0.8rem;
      color: #292524;
      font-weight: 500;
    }
    .sidebar { display: flex; flex-direction: column; gap: 1.25rem; }
    .favorite-btn {
      width: 100%;
      padding: 0.75rem;
      border-radius: 1.25rem;
      border: 1px solid #e7e5e4;
      background: white;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.2s;
    }
    .favorite-btn.favorited {
      background: #fef2f2;
      border-color: #fecaca;
    }
    .favorite-btn:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
    .rating-card, .comment-form-card, .comments-card, .login-prompt {
      padding: 1.25rem;
      background: #ffffff;
      border-radius: 1.5rem;
      border: 1px solid rgba(0,0,0,0.14);
      box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    }
    .rating-card h3, .comment-form-card h3, .comments-card h3 {
      font-family: 'Georgia', serif;
      font-size: 1.1rem;
      margin: 0 0 0.75rem;
      color: #1c1917;
    }
    .avg-rating {
      display: flex;
      align-items: baseline;
      gap: 0.25rem;
      margin-bottom: 0.5rem;
    }
    .avg-number {
      font-family: 'Georgia', serif;
      font-size: 2.5rem;
      color: #1c1917;
    }
    .avg-suffix { color: #57534e; font-size: 0.9rem; }
    .rating-info { color: #57534e; font-size: 0.85rem; margin: 0.5rem 0 0; }
    .user-rating {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid #e7e5e4;
    }
    .user-rating p {
      font-size: 0.85rem;
      color: #44403c;
      margin: 0 0 0.25rem;
    }
    .comment-textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1.5px solid #c9c5c2;
      border-radius: 0.75rem;
      font-size: 0.9rem;
      resize: vertical;
      outline: none;
      box-sizing: border-box;
      color: #1c1917;
    }
    .comment-textarea:focus { border-color: #92400e; box-shadow: 0 0 0 3px rgba(146,64,14,0.12); }
    .submit-btn {
      margin-top: 0.75rem;
      padding: 0.6rem 1.5rem;
      background: #78350f;
      color: white;
      border: none;
      border-radius: 9999px;
      font-weight: 700;
      cursor: pointer;
      font-size: 0.875rem;
    }
    .submit-btn:hover { background: #5c2a0b; }
    .comment {
      padding: 1rem 0;
      border-bottom: 1px solid #e7e5e4;
    }
    .comment:last-child { border-bottom: none; }
    .comment-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.85rem;
    }
    .comment-date { color: #78716c; font-size: 0.8rem; }
    .comment-rating { margin: 0.25rem 0; }
    .comment-body {
      color: #292524;
      font-size: 0.9rem;
      line-height: 1.6;
      margin: 0.5rem 0 0;
    }
    .delete-comment-btn {
      font-size: 0.75rem;
      color: #dc2626;
      background: none;
      border: none;
      cursor: pointer;
      margin-top: 0.25rem;
      font-weight: 600;
    }
    .no-comments { color: #57534e; font-size: 0.9rem; }
    .login-prompt {
      font-size: 0.9rem;
      color: #44403c;
    }
    .login-prompt a { color: #78350f; font-weight: 700; }
    .related-section {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem 3rem;
    }
    .related-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }
    @media (max-width: 900px) {
      .content-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 640px) {
      h1 { font-size: 1.8rem; }
      .related-grid { grid-template-columns: 1fr; }
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

  get currentUrl(): string {
    return typeof window !== 'undefined' ? window.location.href : '';
  }
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
    navigator.share({
      title: this.recipe?.title || '',
      text: this.recipe?.excerpt || '',
      url: this.currentUrl,
    }).catch(() => {});
  }

  get heroGradient(): string {
    if (!this.recipe) return '';
    const from = this.recipe.hero_palette_from || '#d6c5a5';
    const via = this.recipe.hero_palette_via || '#e8dcc8';
    const to = this.recipe.hero_palette_to || '#f5f0e8';
    return `linear-gradient(135deg, ${from}, ${via}, ${to})`;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
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

        // Find user's existing rating
        if (this.auth.isAuthenticated() && this.auth.user()) {
          const userId = this.auth.user()!.id;
          const userComment = this.comments.find(c => c.user_id === userId);
          if (userComment?.rating) {
            this.userRating = userComment.rating;
          }
          if (userComment?.body) {
            this.commentBody = userComment.body;
          }
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
      if (idx >= 0) {
        this.comments[idx] = comment;
      } else {
        this.comments.unshift(comment);
      }
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
