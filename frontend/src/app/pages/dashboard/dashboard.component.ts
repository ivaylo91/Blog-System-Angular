import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { DashboardStats } from '../../models/models';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="dashboard-page">
      <div class="page-header">
        <div>
          <h1>Табло</h1>
          <p class="subtitle">Управлявай рецептите и следи активността на блога.</p>
        </div>
        <a routerLink="/dashboard/recipes/new" class="btn-new">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Нова рецепта
        </a>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon green">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          </div>
          <span class="stat-number">{{ stats?.publishedRecipes || 0 }}</span>
          <span class="stat-label">Публикувани</span>
        </div>
        <div class="stat-card">
          <div class="stat-icon yellow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </div>
          <span class="stat-number">{{ stats?.draftRecipes || 0 }}</span>
          <span class="stat-label">Чернови</span>
        </div>
        <div class="stat-card">
          <div class="stat-icon blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <span class="stat-number">{{ stats?.totalComments || 0 }}</span>
          <span class="stat-label">Коментари</span>
        </div>
        <div class="stat-card">
          <div class="stat-icon red">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </div>
          <span class="stat-number">{{ stats?.totalFavorites || 0 }}</span>
          <span class="stat-label">Запазвания</span>
        </div>
      </div>

      <div class="bottom-grid">
        <!-- Quick links -->
        <div class="card">
          <h2 class="card-title">Бързи връзки</h2>
          <div class="quick-links">
            <a routerLink="/dashboard/recipes" class="quick-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              Рецепти
            </a>
            <a routerLink="/dashboard/comments" class="quick-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Коментари
            </a>
            <a routerLink="/dashboard/favorites" class="quick-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              Любими
            </a>
            <a routerLink="/recipes" class="quick-link" target="_blank">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Виж блога
            </a>
          </div>
        </div>

        <!-- Recent comments -->
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">Последни коментари</h2>
            <a routerLink="/dashboard/comments" class="view-all">Виж всички →</a>
          </div>
          @if (!stats?.recentComments?.length) {
            <p class="empty-text">Няма коментари.</p>
          } @else {
            <ul class="comment-list">
              @for (c of stats!.recentComments; track c.id) {
                <li class="comment-item">
                  <div class="comment-meta">
                    <span class="comment-author">{{ c.author?.name || 'Анонимен' }}</span>
                    @if (c.rating) {
                      <span class="comment-rating">★ {{ c.rating }}</span>
                    }
                    <span class="comment-date">{{ formatDate(c.created_at) }}</span>
                  </div>
                  <p class="comment-body">{{ c.body }}</p>
                  @if (c.recipe) {
                    <a [routerLink]="['/recipes', c.recipe.slug]" class="comment-recipe">{{ c.recipe.title }}</a>
                  }
                </li>
              }
            </ul>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-page {
      max-width: 1100px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
    }
    .page-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 1.75rem;
      gap: 1rem;
    }
    h1 {
      font-family: 'Georgia', serif;
      font-size: 2rem;
      color: #1c1917;
      margin: 0 0 0.25rem;
    }
    .subtitle { color: #44403c; margin: 0; }
    .btn-new {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.6rem 1.25rem;
      background: #78350f;
      color: #fff;
      border-radius: 0.75rem;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
      white-space: nowrap;
      flex-shrink: 0;
      transition: background 0.2s;
    }
    .btn-new svg { width: 0.9rem; height: 0.9rem; }
    .btn-new:hover { background: #5c2a0b; }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    .stat-card {
      padding: 1.5rem;
      background: #ffffff;
      border-radius: 1.5rem;
      border: 1px solid rgba(0,0,0,0.08);
      text-align: center;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .stat-icon {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 0.75rem;
    }
    .stat-icon svg { width: 1.2rem; height: 1.2rem; }
    .stat-icon.green { background: #d1fae5; color: #065f46; }
    .stat-icon.yellow { background: #fef9c3; color: #713f12; }
    .stat-icon.blue { background: #dbeafe; color: #1e40af; }
    .stat-icon.red { background: #fee2e2; color: #991b1b; }
    .stat-number {
      display: block;
      font-family: 'Georgia', serif;
      font-size: 2.25rem;
      color: #1c1917;
      line-height: 1;
    }
    .stat-label {
      display: block;
      font-size: 0.82rem;
      color: #78716c;
      font-weight: 600;
      margin-top: 0.3rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .bottom-grid {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 1.5rem;
      align-items: start;
    }
    .card {
      background: #ffffff;
      border-radius: 1.5rem;
      border: 1px solid rgba(0,0,0,0.08);
      padding: 1.5rem;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    .card-title {
      font-family: 'Georgia', serif;
      font-size: 1.1rem;
      color: #1c1917;
      margin: 0 0 1rem;
    }
    .card-header .card-title { margin: 0; }
    .view-all { font-size: 0.8rem; font-weight: 600; color: #78350f; text-decoration: none; }
    .view-all:hover { text-decoration: underline; }

    .quick-links { display: flex; flex-direction: column; gap: 0.5rem; }
    .quick-link {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.75rem 1rem;
      background: #fafaf9;
      border-radius: 0.875rem;
      border: 1px solid rgba(0,0,0,0.08);
      text-decoration: none;
      color: #1c1917;
      font-weight: 600;
      font-size: 0.9rem;
      transition: all 0.2s;
    }
    .quick-link svg { width: 1rem; height: 1rem; color: #78350f; flex-shrink: 0; }
    .quick-link:hover { background: #f5f0e8; transform: translateX(3px); }

    .empty-text { color: #78716c; font-size: 0.9rem; text-align: center; padding: 1rem 0; }
    .comment-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem; }
    .comment-item {
      padding: 0.75rem;
      background: #fafaf9;
      border-radius: 0.875rem;
      border: 1px solid rgba(0,0,0,0.06);
    }
    .comment-meta { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.3rem; flex-wrap: wrap; }
    .comment-author { font-weight: 700; font-size: 0.85rem; color: #1c1917; }
    .comment-rating { font-size: 0.75rem; color: #d97706; font-weight: 700; }
    .comment-date { font-size: 0.75rem; color: #a8a29e; margin-left: auto; }
    .comment-body {
      font-size: 0.85rem;
      color: #44403c;
      margin: 0 0 0.3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .comment-recipe { font-size: 0.75rem; color: #78350f; text-decoration: none; font-weight: 600; }
    .comment-recipe:hover { text-decoration: underline; }

    @media (max-width: 768px) {
      .bottom-grid { grid-template-columns: 1fr; }
      .page-header { flex-direction: column; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  private recipeService = inject(RecipeService);
  private seo = inject(SeoService);
  private cdr = inject(ChangeDetectorRef);
  stats: DashboardStats | null = null;

  ngOnInit(): void {
    this.seo.set({
      title: 'Табло',
      description: 'Управлявай рецептите, коментарите и любимите си в таблото на кулинарния блог.',
    });
    this.recipeService.getDashboardStats().subscribe(s => { this.stats = s; this.cdr.markForCheck(); });
  }

  formatDate(date: string): string {
    if (!date) return '';
    return new Date(date).toLocaleDateString('bg-BG', { day: 'numeric', month: 'short' });
  }
}
