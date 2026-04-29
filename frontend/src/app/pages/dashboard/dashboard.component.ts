import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { DashboardService } from '../../services/dashboard.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="dashboard-page">
      <div class="page-header">
        <div>
          <h1>Преглед</h1>
          <p class="subtitle">Управлявай рецептите и следи активността на блога.</p>
        </div>
        <a routerLink="/dashboard/recipes/new" class="btn-new">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Нова рецепта
        </a>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon green">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          </div>
          <span class="stat-number">{{ stats()?.publishedRecipes ?? '—' }}</span>
          <span class="stat-label">Публикувани</span>
        </div>
        <div class="stat-card">
          <div class="stat-icon yellow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </div>
          <span class="stat-number">{{ stats()?.draftRecipes ?? '—' }}</span>
          <span class="stat-label">Чернови</span>
        </div>
        <div class="stat-card">
          <div class="stat-icon blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <span class="stat-number">{{ stats()?.totalComments ?? '—' }}</span>
          <span class="stat-label">Коментари</span>
        </div>
        <div class="stat-card">
          <div class="stat-icon red">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </div>
          <span class="stat-number">{{ stats()?.totalFavorites ?? '—' }}</span>
          <span class="stat-label">Запазвания</span>
        </div>
      </div>

      <div class="bottom-grid">
        <!-- Quick links -->
        <div class="card">
          <h2 class="card-title">Бързи връзки</h2>
          <div class="quick-links">
            <a routerLink="/dashboard/recipes" class="quick-link">
              <div class="ql-icon green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <span>Рецепти</span>
              <svg class="ql-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
            <a routerLink="/dashboard/comments" class="quick-link">
              <div class="ql-icon blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <span>Коментари</span>
              <svg class="ql-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
            <a routerLink="/dashboard/favorites" class="quick-link">
              <div class="ql-icon red">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <span>Любими</span>
              <svg class="ql-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
            <a routerLink="/recipes" class="quick-link quick-link-external">
              <div class="ql-icon brown">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </div>
              <span>Виж блога</span>
              <svg class="ql-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          </div>
        </div>

        <!-- Recent comments -->
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">Последни коментари</h2>
            <a routerLink="/dashboard/comments" class="view-all">Виж всички →</a>
          </div>
          @if (!stats()?.recentComments?.length) {
            <div class="empty-block">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              <span>Няма коментари все още.</span>
            </div>
          } @else {
            <ul class="comment-list">
              @for (c of stats()!.recentComments; track c.id) {
                <li class="comment-item">
                  <div class="comment-top">
                    <div class="comment-avatar">{{ c.author?.name?.charAt(0) || '?' }}</div>
                    <div class="comment-meta">
                      <span class="comment-author">{{ c.author?.name || 'Анонимен' }}</span>
                      <span class="comment-date">{{ formatDate(c.created_at) }}</span>
                    </div>
                    @if (c.rating) {
                      <span class="comment-rating">★ {{ c.rating }}</span>
                    }
                  </div>
                  <p class="comment-body">{{ c.body }}</p>
                  @if (c.recipe) {
                    <a [routerLink]="['/recipes', c.recipe.slug]" class="comment-recipe">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>
                      {{ c.recipe.title }}
                    </a>
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
      padding: var(--space-7) var(--space-6) var(--space-10);
    }

    /* Header */
    .page-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: var(--space-7);
      gap: var(--space-4);
    }
    h1 {
      font-family: var(--font-display);
      font-size: clamp(1.6rem, 3vw, 2rem);
      font-weight: 800;
      color: var(--clr-text);
      margin: 0 0 var(--space-1);
      letter-spacing: -0.025em;
    }
    .subtitle { color: var(--clr-text-muted); margin: 0; font-size: 0.9rem; }
    .btn-new {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-3) var(--space-5);
      background: var(--clr-green);
      color: oklch(100% 0 0);
      border-radius: var(--radius-pill);
      text-decoration: none;
      font-weight: 700;
      font-size: 0.875rem;
      white-space: nowrap;
      flex-shrink: 0;
      transition: background 0.18s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);
      touch-action: manipulation;
    }
    .btn-new svg { width: 0.875rem; height: 0.875rem; }
    .btn-new:hover { background: var(--clr-green-dark); transform: translateY(-1px); }
    .btn-new:active { transform: translateY(0); }

    /* Stats */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: var(--space-4);
      margin-bottom: var(--space-5);
    }
    .stat-card {
      padding: var(--space-5) var(--space-4);
      background: var(--clr-surface);
      border-radius: var(--radius-lg);
      border: 1px solid var(--clr-border-faint);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-2);
      box-shadow: var(--shadow-sm);
      transition: transform 0.28s var(--ease-out-expo), box-shadow 0.28s var(--ease-out-expo);
    }
    .stat-card:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
    }
    .stat-icon {
      width: 2.25rem;
      height: 2.25rem;
      border-radius: var(--radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: var(--space-1);
    }
    .stat-icon svg { width: 1.1rem; height: 1.1rem; }
    .stat-icon.green { background: var(--clr-green-bg); color: var(--clr-green-text); }
    .stat-icon.yellow { background: var(--clr-amber-bg); color: var(--clr-amber-text); }
    .stat-icon.blue { background: color-mix(in oklch, oklch(60% 0.14 240) 14%, transparent); color: oklch(38% 0.14 240); }
    .stat-icon.red { background: var(--clr-error-bg); color: var(--clr-error); }
    .stat-number {
      font-family: var(--font-display);
      font-size: 2.25rem;
      font-weight: 800;
      color: var(--clr-text);
      line-height: 1;
    }
    .stat-label {
      font-size: 0.72rem;
      color: var(--clr-text-muted);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    /* Bottom grid */
    .bottom-grid {
      display: grid;
      grid-template-columns: minmax(240px, 300px) 1fr;
      gap: var(--space-5);
      align-items: start;
    }
    .card {
      background: var(--clr-surface);
      border-radius: var(--radius-lg);
      border: 1px solid var(--clr-border-faint);
      padding: var(--space-5);
      box-shadow: var(--shadow-sm);
    }
    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: var(--space-4);
    }
    .card-title {
      font-family: var(--font-display);
      font-size: 1rem;
      font-weight: 700;
      color: var(--clr-text);
      margin: 0 0 var(--space-4);
      letter-spacing: -0.01em;
    }
    .card-header .card-title { margin: 0; }
    .view-all {
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--clr-brand);
      text-decoration: none;
      transition: color 0.18s;
    }
    .view-all:hover { color: var(--clr-brand-dark); text-decoration: underline; }

    /* Quick links */
    .quick-links { display: flex; flex-direction: column; gap: var(--space-2); }
    .quick-link {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-3) var(--space-4);
      background: var(--clr-surface-alt);
      border-radius: var(--radius-md);
      border: 1px solid var(--clr-border-faint);
      text-decoration: none;
      color: var(--clr-text);
      font-weight: 600;
      font-size: 0.875rem;
      transition: background 0.18s var(--ease-out-expo), border-color 0.18s var(--ease-out-expo);
      touch-action: manipulation;
      min-height: 2.75rem;
    }
    .quick-link:hover { background: var(--clr-surface-hover); border-color: var(--clr-border); }
    .ql-icon {
      width: 1.75rem;
      height: 1.75rem;
      border-radius: var(--radius-xs);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .ql-icon svg { width: 0.875rem; height: 0.875rem; }
    .ql-icon.green { background: var(--clr-green-bg); color: var(--clr-green-text); }
    .ql-icon.blue { background: color-mix(in oklch, oklch(60% 0.14 240) 14%, transparent); color: oklch(38% 0.14 240); }
    .ql-icon.red { background: var(--clr-error-bg); color: var(--clr-error); }
    .ql-icon.brown { background: var(--clr-amber-bg); color: var(--clr-amber-text); }
    .ql-arrow {
      width: 0.875rem;
      height: 0.875rem;
      color: var(--clr-text-faint);
      margin-left: auto;
      flex-shrink: 0;
      transition: transform 0.18s var(--ease-out-expo), color 0.18s var(--ease-out-expo);
    }
    .quick-link:hover .ql-arrow { transform: translateX(3px); color: var(--clr-brand); }

    /* Comments */
    .empty-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-8) var(--space-4);
      color: var(--clr-text-faint);
      text-align: center;
    }
    .empty-block svg { width: 2.5rem; height: 2.5rem; }
    .empty-block span { font-size: 0.875rem; }

    .comment-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: var(--space-3); }
    .comment-item {
      padding: var(--space-4);
      background: var(--clr-surface-alt);
      border-radius: var(--radius-md);
      border: 1px solid var(--clr-border-faint);
    }
    .comment-top {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      margin-bottom: var(--space-2);
    }
    .comment-avatar {
      width: 1.75rem;
      height: 1.75rem;
      border-radius: var(--radius-circle);
      background: var(--clr-green);
      color: oklch(100% 0 0);
      font-size: 0.7rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      text-transform: uppercase;
    }
    .comment-meta { display: flex; flex-direction: column; gap: 0.05rem; min-width: 0; }
    .comment-author { font-weight: 700; font-size: 0.82rem; color: var(--clr-text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .comment-date { font-size: 0.72rem; color: var(--clr-text-muted); }
    .comment-rating { font-size: 0.75rem; color: var(--clr-amber-text); font-weight: 700; margin-left: auto; white-space: nowrap; flex-shrink: 0; }
    .comment-body {
      font-size: 0.845rem;
      color: var(--clr-text-muted);
      margin: 0 0 var(--space-2);
      line-height: 1.55;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .comment-recipe {
      display: inline-flex;
      align-items: center;
      gap: var(--space-1);
      font-size: 0.75rem;
      color: var(--clr-brand);
      text-decoration: none;
      font-weight: 600;
      transition: color 0.18s;
    }
    .comment-recipe svg { width: 0.75rem; height: 0.75rem; flex-shrink: 0; }
    .comment-recipe:hover { color: var(--clr-brand-dark); text-decoration: underline; }

    @media (max-width: 900px) {
      .bottom-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 640px) {
      .dashboard-page { padding: var(--space-6) var(--space-4) var(--space-9); }
      .page-header { flex-direction: column; align-items: stretch; }
      .btn-new { justify-content: center; }
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      h1 { font-size: 1.6rem; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  private dashboardService = inject(DashboardService);
  private seo = inject(SeoService);

  stats = toSignal(this.dashboardService.getStats());

  constructor() {
    this.seo.set({
      title: 'Табло',
      description: 'Управлявай рецептите, коментарите и любимите си в таблото на кулинарния блог.',
    });
  }

  formatDate(date: string): string {
    if (!date) return '';
    return new Date(date).toLocaleDateString('bg-BG', { day: 'numeric', month: 'short' });
  }
}
