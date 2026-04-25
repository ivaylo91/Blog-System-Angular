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
      padding: 2rem 1.5rem 3rem;
    }

    /* Header */
    .page-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 2rem;
      gap: 1rem;
    }
    h1 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 1.9rem;
      color: #1c1917;
      margin: 0 0 0.25rem;
      letter-spacing: -0.02em;
    }
    .subtitle { color: #57534e; margin: 0; font-size: 0.9rem; }
    .btn-new {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.65rem 1.25rem;
      background: #4a7c59;
      color: #fff;
      border-radius: 0.75rem;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.875rem;
      white-space: nowrap;
      flex-shrink: 0;
      transition: background 0.2s, box-shadow 0.2s;
      box-shadow: 0 2px 8px rgba(74,124,89,0.25);
      touch-action: manipulation;
    }
    .btn-new svg { width: 0.875rem; height: 0.875rem; }
    .btn-new:hover { background: #3a6347; box-shadow: 0 4px 14px rgba(74,124,89,0.35); }

    /* Stats */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    .stat-card {
      padding: 1.5rem 1.25rem;
      background: #ffffff;
      border-radius: 1.25rem;
      border: 1px solid rgba(0,0,0,0.07);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      box-shadow: 0 2px 10px rgba(28,25,23,0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .stat-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(28,25,23,0.09);
    }
    .stat-icon {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.25rem;
    }
    .stat-icon svg { width: 1.15rem; height: 1.15rem; }
    .stat-icon.green { background: #d1fae5; color: #059669; }
    .stat-icon.yellow { background: #fef9c3; color: #92400e; }
    .stat-icon.blue { background: #dbeafe; color: #1d4ed8; }
    .stat-icon.red { background: #fee2e2; color: #b91c1c; }
    .stat-number {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 2rem;
      font-weight: 700;
      color: #1c1917;
      line-height: 1;
    }
    .stat-label {
      font-size: 0.78rem;
      color: #78716c;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    /* Bottom grid */
    .bottom-grid {
      display: grid;
      grid-template-columns: minmax(240px, 300px) 1fr;
      gap: 1.25rem;
      align-items: start;
    }
    .card {
      background: #ffffff;
      border-radius: 1.25rem;
      border: 1px solid rgba(0,0,0,0.07);
      padding: 1.25rem;
      box-shadow: 0 2px 10px rgba(28,25,23,0.05);
    }
    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    .card-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 1rem;
      font-weight: 700;
      color: #1c1917;
      margin: 0 0 1rem;
      letter-spacing: -0.01em;
    }
    .card-header .card-title { margin: 0; }
    .view-all {
      font-size: 0.78rem;
      font-weight: 600;
      color: #78350f;
      text-decoration: none;
      transition: color 0.18s;
    }
    .view-all:hover { color: #5c2a0b; text-decoration: underline; }

    /* Quick links */
    .quick-links { display: flex; flex-direction: column; gap: 0.375rem; }
    .quick-link {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.7rem 0.875rem;
      background: #fafaf9;
      border-radius: 0.875rem;
      border: 1px solid rgba(0,0,0,0.07);
      text-decoration: none;
      color: #1c1917;
      font-weight: 600;
      font-size: 0.875rem;
      transition: background 0.18s, border-color 0.18s;
      touch-action: manipulation;
      min-height: 2.75rem;
    }
    .quick-link:hover { background: #f0ede8; border-color: rgba(0,0,0,0.12); }
    .ql-icon {
      width: 1.75rem;
      height: 1.75rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .ql-icon svg { width: 0.875rem; height: 0.875rem; }
    .ql-icon.green { background: #d1fae5; color: #059669; }
    .ql-icon.blue { background: #dbeafe; color: #1d4ed8; }
    .ql-icon.red { background: #fee2e2; color: #b91c1c; }
    .ql-icon.brown { background: #fef3c7; color: #92400e; }
    .ql-arrow {
      width: 0.875rem;
      height: 0.875rem;
      color: #a8a29e;
      margin-left: auto;
      flex-shrink: 0;
      transition: transform 0.18s, color 0.18s;
    }
    .quick-link:hover .ql-arrow { transform: translateX(3px); color: #78350f; }

    /* Comments */
    .empty-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 2rem 1rem;
      color: #a8a29e;
      text-align: center;
    }
    .empty-block svg { width: 2.5rem; height: 2.5rem; }
    .empty-block span { font-size: 0.875rem; }

    .comment-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem; }
    .comment-item {
      padding: 0.875rem;
      background: #fafaf9;
      border-radius: 0.875rem;
      border: 1px solid rgba(0,0,0,0.06);
    }
    .comment-top {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.4rem;
    }
    .comment-avatar {
      width: 1.75rem;
      height: 1.75rem;
      border-radius: 50%;
      background: #4a7c59;
      color: #fff;
      font-size: 0.7rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      text-transform: uppercase;
    }
    .comment-meta { display: flex; flex-direction: column; gap: 0.05rem; min-width: 0; }
    .comment-author { font-weight: 700; font-size: 0.82rem; color: #1c1917; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .comment-date { font-size: 0.72rem; color: #78716c; }
    .comment-rating { font-size: 0.75rem; color: #d97706; font-weight: 700; margin-left: auto; white-space: nowrap; flex-shrink: 0; }
    .comment-body {
      font-size: 0.845rem;
      color: #44403c;
      margin: 0 0 0.35rem;
      line-height: 1.55;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .comment-recipe {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.75rem;
      color: #78350f;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.18s;
    }
    .comment-recipe svg { width: 0.75rem; height: 0.75rem; flex-shrink: 0; }
    .comment-recipe:hover { color: #5c2a0b; text-decoration: underline; }

    @media (max-width: 900px) {
      .bottom-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 640px) {
      .dashboard-page { padding: 1.5rem 1rem 2.5rem; }
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
