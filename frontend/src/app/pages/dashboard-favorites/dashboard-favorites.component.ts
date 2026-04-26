import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FavoriteService } from '../../services/favorite.service';
import { Recipe } from '../../models/models';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';

@Component({
  selector: 'app-dashboard-favorites',
  standalone: true,
  imports: [RouterLink, RecipeCardComponent],
  template: `
    <div class="dashboard-favorites">
      <div class="page-header">
        <div>
          <h1>Любими рецепти</h1>
          <p class="subtitle">Рецептите, които сте запазили за по-късно.</p>
        </div>
        @if (!loading() && recipes().length > 0) {
          <span class="count-badge">{{ recipes().length }}</span>
        }
      </div>

      @if (loading()) {
        <div class="favorites-grid">
          @for (s of skeletons; track s) {
            <div class="skeleton-card">
              <div class="sk-img"></div>
              <div class="sk-body">
                <div class="sk-line sk-short"></div>
                <div class="sk-line sk-long"></div>
                <div class="sk-line sk-medium"></div>
                <div class="sk-meta">
                  <div class="sk-line sk-sm"></div>
                  <div class="sk-line sk-sm"></div>
                </div>
              </div>
            </div>
          }
        </div>
      } @else if (recipes().length === 0) {
        <div class="empty-state">
          <div class="empty-icon">
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M48 12a12 12 0 0 0-16 0l-2 2-2-2a12 12 0 0 0-16 16l2 2L32 48l18-18 2-2a12 12 0 0 0-4-16z"/></svg>
          </div>
          <h2>Все още нямате любими</h2>
          <p>Запазете рецепти, докато разглеждате блога, и те ще се появят тук.</p>
          <a routerLink="/recipes" class="btn-browse">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h7"/></svg>
            Разгледай рецепти
          </a>
        </div>
      } @else {
        <div class="favorites-grid">
          @for (recipe of recipes(); track recipe.id; let i = $index) {
            <app-recipe-card [recipe]="recipe" [index]="i" />
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .dashboard-favorites {
      max-width: 1100px;
      margin: 0 auto;
      padding: 2rem 1.5rem 3rem;
    }

    .page-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.75rem;
      gap: 1rem;
    }
    h1 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 1.75rem;
      color: #1c1917;
      margin: 0 0 0.2rem;
      letter-spacing: -0.02em;
    }
    .subtitle { color: #57534e; margin: 0; font-size: 0.875rem; }
    .count-badge {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 2rem;
      height: 2rem;
      padding: 0 0.6rem;
      background: #fef3c7;
      color: #92400e;
      border-radius: var(--radius-pill);
      font-size: 0.82rem;
      font-weight: 700;
      flex-shrink: 0;
    }

    /* Grid */
    .favorites-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    /* Empty state */
    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 4rem 2rem;
      background: #ffffff;
      border-radius: var(--radius-lg);
      border: 1px solid rgba(0,0,0,0.07);
      box-shadow: 0 2px 10px rgba(28,25,23,0.05);
    }
    .empty-icon {
      width: 5rem;
      height: 5rem;
      border-radius: var(--radius-circle);
      background: #fee2e2;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.25rem;
    }
    .empty-icon svg { width: 2.5rem; height: 2.5rem; color: #e11d48; }
    .empty-state h2 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 1.3rem;
      color: #1c1917;
      margin: 0 0 0.5rem;
      letter-spacing: -0.01em;
    }
    .empty-state p {
      color: #57534e;
      font-size: 0.9rem;
      margin: 0 0 1.5rem;
      max-width: 320px;
      line-height: 1.6;
    }
    .btn-browse {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.7rem 1.5rem;
      background: #78350f;
      color: #fff;
      border-radius: var(--radius-sm);
      text-decoration: none;
      font-weight: 600;
      font-size: 0.875rem;
      transition: background 0.2s, box-shadow 0.2s;
      box-shadow: 0 2px 8px rgba(120,53,15,0.25);
      touch-action: manipulation;
    }
    .btn-browse svg { width: 0.875rem; height: 0.875rem; flex-shrink: 0; }
    .btn-browse:hover { background: #5c2a0b; box-shadow: 0 4px 14px rgba(120,53,15,0.35); }

    /* Skeleton */
    .skeleton-card {
      border-radius: var(--radius-lg);
      overflow: hidden;
      background: #fff;
      box-shadow: 0 2px 10px rgba(28,25,23,0.05);
    }
    .sk-img {
      aspect-ratio: 4/3;
      background: #f0ede8;
      position: relative;
      overflow: hidden;
    }
    .sk-img::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%);
      transform: translateX(-100%);
      animation: shimmer 1.5s linear infinite;
    }
    .sk-body { padding: 1.2rem; display: flex; flex-direction: column; gap: 0.55rem; }
    .sk-meta { display: flex; gap: 0.75rem; margin-top: 0.25rem; }
    .sk-line {
      height: 0.8rem;
      border-radius: var(--radius-pill);
      background: #f0ede8;
      position: relative;
      overflow: hidden;
    }
    .sk-line::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%);
      transform: translateX(-100%);
      animation: shimmer 1.5s linear infinite;
    }
    .sk-short  { width: 30%; }
    .sk-long   { width: 75%; }
    .sk-medium { width: 50%; }
    .sk-sm     { width: 22%; }
    @keyframes shimmer {
      from { transform: translateX(-100%); }
      to   { transform: translateX(100%); }
    }

    @media (max-width: 768px) {
      .dashboard-favorites { padding: 1.5rem 1rem 2.5rem; }
      .page-header { align-items: flex-start; }
    }
    @media (max-width: 640px) {
      .favorites-grid { grid-template-columns: 1fr; }
      h1 { font-size: 1.5rem; }
    }

    @media (prefers-reduced-motion: reduce) {
      .sk-img::after, .sk-line::after { animation: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardFavoritesComponent {
  private favoriteService = inject(FavoriteService);
  recipes = signal<Recipe[]>([]);
  loading = signal(true);
  skeletons = [0, 1, 2, 3, 4, 5];

  constructor() {
    this.favoriteService.getFavorites().pipe(takeUntilDestroyed()).subscribe({
      next: (r) => { this.recipes.set(r); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }
}
