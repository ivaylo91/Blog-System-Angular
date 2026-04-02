import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { AuthService } from '../../services/auth.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { StarRatingComponent } from '../../components/star-rating/star-rating.component';
import { ConfirmModalComponent } from '../../components/confirm-modal/confirm-modal.component';
import { Recipe, Comment, FavoriteStatusResponse } from '../../models/models';

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
      color: rgba(0,0,0,0.5);
      text-decoration: none;
      font-size: 0.875rem;
      display: inline-block;
      margin-bottom: 1rem;
    }
    .back-link:hover { color: rgba(0,0,0,0.7); }
    h1 {
      font-family: 'Georgia', serif;
      font-size: 2.5rem;
      color: #1c1917;
      margin: 0 0 0.75rem;
    }
    .hero-excerpt {
      color: #57534e;
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
      color: #78716c;
    }
    .hero-category {
      background: rgba(255,255,255,0.6);
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-weight: 600;
      color: #92400e;
    }
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
      background: rgba(255,255,255,0.85);
      border-radius: 1.5rem;
      border: 1px solid rgba(0,0,0,0.06);
      margin-bottom: 1.5rem;
    }
    .description-section p {
      color: #57534e;
      line-height: 1.8;
      margin: 0;
    }
    .ingredients-section, .steps-section {
      padding: 1.5rem;
      background: rgba(255,255,255,0.85);
      border-radius: 1.5rem;
      border: 1px solid rgba(0,0,0,0.06);
      margin-bottom: 1.5rem;
    }
    .ingredients-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .ingredients-list li {
      padding: 0.6rem 0;
      border-bottom: 1px solid #f5f5f4;
      color: #44403c;
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
      background: #fffbeb;
      color: #92400e;
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
      color: #57534e;
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
      background: #f5f5f4;
      border-radius: 9999px;
      font-size: 0.8rem;
      color: #57534e;
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
      background: rgba(255,255,255,0.85);
      border-radius: 1.5rem;
      border: 1px solid rgba(0,0,0,0.06);
      box-shadow: 0 8px 24px rgba(0,0,0,0.04);
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
    .avg-suffix { color: #78716c; font-size: 0.9rem; }
    .rating-info { color: #78716c; font-size: 0.85rem; margin: 0.5rem 0 0; }
    .user-rating {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid #f5f5f4;
    }
    .user-rating p {
      font-size: 0.85rem;
      color: #57534e;
      margin: 0 0 0.25rem;
    }
    .comment-textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #e7e5e4;
      border-radius: 0.75rem;
      font-size: 0.9rem;
      resize: vertical;
      outline: none;
      box-sizing: border-box;
    }
    .comment-textarea:focus { border-color: #d97706; }
    .submit-btn {
      margin-top: 0.75rem;
      padding: 0.6rem 1.5rem;
      background: #92400e;
      color: white;
      border: none;
      border-radius: 9999px;
      font-weight: 600;
      cursor: pointer;
      font-size: 0.875rem;
    }
    .submit-btn:hover { background: #78350f; }
    .comment {
      padding: 1rem 0;
      border-bottom: 1px solid #f5f5f4;
    }
    .comment:last-child { border-bottom: none; }
    .comment-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.85rem;
    }
    .comment-date { color: #a8a29e; font-size: 0.8rem; }
    .comment-rating { margin: 0.25rem 0; }
    .comment-body {
      color: #44403c;
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
    }
    .no-comments { color: #78716c; font-size: 0.9rem; }
    .login-prompt {
      font-size: 0.9rem;
      color: #92400e;
    }
    .login-prompt a { color: #92400e; font-weight: 600; }
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
})
export class RecipeDetailComponent implements OnInit {
  private recipeService = inject(RecipeService);
  private route = inject(ActivatedRoute);
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
    this.recipeService.getRecipe(slug).subscribe(res => {
      this.recipe = res.recipe;
      this.averageRating = res.averageRating;
      this.ratingsCount = res.ratingsCount;
      this.comments = res.recipe.comments || [];

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
    });

    this.recipeService.getRelatedRecipes(slug).subscribe(r => this.relatedRecipes = r);
    this.recipeService.getFavoriteStatus(slug).subscribe(s => this.favoriteStatus = s);
  }

  toggleFavorite(): void {
    if (!this.recipe) return;
    this.recipeService.toggleFavorite(this.recipe.slug).subscribe(s => this.favoriteStatus = s);
  }

  onRate(rating: number): void {
    if (!this.recipe) return;
    this.recipeService.rateRecipe(this.recipe.slug, rating).subscribe(res => {
      this.userRating = res.rating;
      this.averageRating = res.averageRating;
      this.ratingsCount = res.ratingsCount;
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
    });
  }
}
