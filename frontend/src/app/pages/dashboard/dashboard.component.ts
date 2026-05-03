import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { DashboardService } from '../../services/dashboard.service';
import { AuthService } from '../../services/auth.service';
import { SeoService } from '../../services/seo.service';
import { Recipe } from '../../models/models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="dashboard-page">

      <!-- Welcome banner -->
      <div class="welcome-banner">
        <div class="welcome-text">
          <h1 class="welcome-heading">Здравей, {{ firstName() }}!</h1>
          <p class="welcome-sub">Добре дошъл в таблото. Следи рецептите и активността на блога.</p>
          <a routerLink="/dashboard/recipes/new" class="welcome-cta">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Нова рецепта
          </a>
        </div>
        <div class="welcome-art" aria-hidden="true">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Pot body -->
            <ellipse cx="60" cy="80" rx="38" ry="14" fill="oklch(82% 0.10 58)"/>
            <path d="M22 80 Q22 106 60 106 Q98 106 98 80" fill="oklch(74% 0.13 55)"/>
            <!-- Pot rim -->
            <ellipse cx="60" cy="74" rx="38" ry="10" fill="oklch(86% 0.09 60)"/>
            <!-- Handles -->
            <path d="M22 74 Q12 74 12 66 Q12 58 22 62" stroke="oklch(68% 0.12 52)" stroke-width="4" stroke-linecap="round" fill="none"/>
            <path d="M98 74 Q108 74 108 66 Q108 58 98 62" stroke="oklch(68% 0.12 52)" stroke-width="4" stroke-linecap="round" fill="none"/>
            <!-- Steam lines -->
            <path d="M44 58 Q40 50 44 42 Q48 34 44 26" stroke="oklch(68% 0.09 65)" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.7"/>
            <path d="M60 55 Q56 47 60 39 Q64 31 60 23" stroke="oklch(68% 0.09 65)" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.7"/>
            <path d="M76 58 Q72 50 76 42 Q80 34 76 26" stroke="oklch(68% 0.09 65)" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.7"/>
            <!-- Lid -->
            <ellipse cx="60" cy="68" rx="34" ry="9" fill="oklch(80% 0.12 60)"/>
            <ellipse cx="60" cy="67" rx="34" ry="7" fill="oklch(84% 0.10 62)"/>
            <ellipse cx="60" cy="62" rx="10" ry="4" fill="oklch(74% 0.12 58)"/>
          </svg>
        </div>
      </div>

      <!-- Stat tiles -->
      <div class="tiles-row">
        <div class="tile tile-amber">
          <span class="tile-num">{{ stats()?.publishedRecipes ?? '—' }}</span>
          <span class="tile-label">Публикувани</span>
        </div>
        <div class="tile tile-orange">
          <span class="tile-num">{{ stats()?.draftRecipes ?? '—' }}</span>
          <span class="tile-label">Чернови</span>
        </div>
        <div class="tile tile-rose">
          <span class="tile-num">{{ stats()?.totalComments ?? '—' }}</span>
          <span class="tile-label">Коментари</span>
        </div>
        <div class="tile tile-lavender">
          <span class="tile-num">{{ stats()?.totalFavorites ?? '—' }}</span>
          <span class="tile-label">Запазвания</span>
        </div>
      </div>

      <!-- Recent recipes -->
      <div class="section">
        <div class="section-head">
          <h2 class="section-title">Последни рецепти</h2>
          <a routerLink="/dashboard/recipes" class="view-all">Виж всички →</a>
        </div>

        @if (!recentRecipes().length) {
          <div class="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            <span>Нямаш рецепти все още.</span>
            <a routerLink="/dashboard/recipes/new" class="empty-cta">Създай първата рецепта →</a>
          </div>
        } @else {
          <div class="recipe-list">
            @for (r of recentRecipes(); track r.id) {
              <div class="recipe-row">
                <div class="recipe-thumb">
                  @if (r.hero_image) {
                    <img [src]="r.hero_image" [alt]="r.title" loading="lazy" />
                  } @else {
                    <div class="thumb-placeholder" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                      </svg>
                    </div>
                  }
                </div>
                <div class="recipe-info">
                  <a [routerLink]="['/recipes', r.slug]" class="recipe-title-link">{{ r.title }}</a>
                  @if (r.category) {
                    <span class="recipe-cat">{{ r.category.name }}</span>
                  }
                  @if (r.excerpt) {
                    <p class="recipe-excerpt">{{ r.excerpt }}</p>
                  }
                </div>
                <div class="recipe-actions">
                  <span class="status-badge" [class.published]="r.published" [class.draft]="!r.published">
                    {{ r.published ? 'Публикувана' : 'Чернова' }}
                  </span>
                  <a [routerLink]="['/dashboard/recipes', r.slug, 'edit']"
                     class="edit-btn"
                     [attr.aria-label]="'Редактирай ' + r.title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                  </a>
                </div>
              </div>
            }
          </div>
        }
      </div>

      <!-- Recent comments -->
      @if (stats()?.recentComments?.length) {
        <div class="section section-comments">
          <div class="section-head">
            <h2 class="section-title">Последни коментари</h2>
            <a routerLink="/dashboard/comments" class="view-all">Виж всички →</a>
          </div>
          <div class="comment-list">
            @for (c of stats()!.recentComments; track c.id) {
              <div class="comment-row">
                <div class="comment-avatar">{{ c.author?.name?.charAt(0) || '?' }}</div>
                <div class="comment-body-wrap">
                  <div class="comment-meta-row">
                    <span class="comment-author">{{ c.author?.name || 'Анонимен' }}</span>
                    @if (c.rating) {
                      <span class="comment-rating">★ {{ c.rating }}</span>
                    }
                    <span class="comment-date">{{ formatDate(c.created_at) }}</span>
                  </div>
                  <p class="comment-body">{{ c.body }}</p>
                  @if (c.recipe) {
                    <a [routerLink]="['/recipes', c.recipe.slug]" class="comment-recipe-link">
                      {{ c.recipe.title }}
                    </a>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      }

    </div>
  `,
  styles: [`
    .dashboard-page {
      max-width: 1000px;
      margin: 0 auto;
      padding: var(--space-7) var(--space-7) var(--space-10);
    }

    /* ── Welcome banner ─────────────────────────────────────────────── */
    .welcome-banner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: oklch(97% 0.04 70);
      border-radius: var(--radius-xl);
      padding: var(--space-7) var(--space-8);
      margin-bottom: var(--space-7);
      overflow: hidden;
      gap: var(--space-6);
    }
    .welcome-text { flex: 1; min-width: 0; }
    .welcome-heading {
      font-family: var(--font-display);
      font-size: clamp(1.6rem, 3vw, 2.2rem);
      font-weight: 800;
      color: oklch(26% 0.06 52);
      margin: 0 0 var(--space-2);
      letter-spacing: -0.03em;
      line-height: 1.1;
    }
    .welcome-sub {
      color: oklch(44% 0.05 55);
      font-size: 0.9rem;
      margin: 0 0 var(--space-5);
      max-width: 42ch;
      line-height: 1.6;
    }
    .welcome-cta {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-3) var(--space-5);
      background: var(--clr-brand);
      color: oklch(100% 0 0);
      border-radius: var(--radius-pill);
      text-decoration: none;
      font-weight: 700;
      font-size: 0.875rem;
      letter-spacing: 0.01em;
      box-shadow: 0 4px 14px oklch(62% 0.22 42 / 0.3);
      transition: background 0.18s, transform 0.15s, box-shadow 0.18s;
      touch-action: manipulation;
    }
    .welcome-cta svg { width: 0.85rem; height: 0.85rem; flex-shrink: 0; }
    .welcome-cta:hover {
      background: var(--clr-brand-dark);
      transform: translateY(-1px);
      box-shadow: 0 6px 18px oklch(62% 0.22 42 / 0.38);
    }
    .welcome-cta:active { transform: translateY(0); box-shadow: none; }
    .welcome-art {
      flex-shrink: 0;
      width: 110px;
      height: 110px;
    }
    .welcome-art svg { width: 100%; height: 100%; display: block; }

    /* ── Stat tiles ─────────────────────────────────────────────────── */
    .tiles-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-4);
      margin-bottom: var(--space-7);
    }
    .tile {
      border-radius: var(--radius-lg);
      padding: var(--space-5) var(--space-5);
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .tile:hover { transform: translateY(-2px); }
    .tile-num {
      font-family: var(--font-display);
      font-size: 2.6rem;
      font-weight: 800;
      line-height: 1;
      letter-spacing: -0.04em;
    }
    .tile-label {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      opacity: 0.72;
    }
    .tile-amber   { background: oklch(96% 0.05 76); color: oklch(37% 0.14 70); }
    .tile-orange  { background: oklch(97% 0.05 50); color: oklch(44% 0.20 42); }
    .tile-rose    { background: oklch(97% 0.025 16); color: oklch(40% 0.17 18); }
    .tile-lavender{ background: oklch(96% 0.022 292); color: oklch(40% 0.16 290); }

    @media (prefers-color-scheme: dark) {
      .tile-amber   { background: oklch(22% 0.05 72); color: oklch(80% 0.12 74); }
      .tile-orange  { background: oklch(20% 0.05 48); color: oklch(78% 0.14 52); }
      .tile-rose    { background: oklch(20% 0.04 18); color: oklch(78% 0.12 20); }
      .tile-lavender{ background: oklch(20% 0.035 290); color: oklch(78% 0.10 288); }
      .welcome-banner { background: oklch(18% 0.03 65); }
      .welcome-heading { color: oklch(92% 0.04 70); }
      .welcome-sub { color: oklch(68% 0.04 62); }
    }
    html.dark .tile-amber   { background: oklch(22% 0.05 72); color: oklch(80% 0.12 74); }
    html.dark .tile-orange  { background: oklch(20% 0.05 48); color: oklch(78% 0.14 52); }
    html.dark .tile-rose    { background: oklch(20% 0.04 18); color: oklch(78% 0.12 20); }
    html.dark .tile-lavender{ background: oklch(20% 0.035 290); color: oklch(78% 0.10 288); }
    html.dark .welcome-banner { background: oklch(18% 0.03 65); }
    html.dark .welcome-heading { color: oklch(92% 0.04 70); }
    html.dark .welcome-sub { color: oklch(68% 0.04 62); }

    /* ── Sections ───────────────────────────────────────────────────── */
    .section { margin-bottom: var(--space-7); }
    .section-comments { margin-top: var(--space-1); }
    .section-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: var(--space-4);
    }
    .section-title {
      font-family: var(--font-display);
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--clr-text);
      margin: 0;
      letter-spacing: -0.015em;
    }
    .view-all {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--clr-brand);
      text-decoration: none;
      transition: color 0.15s;
    }
    .view-all:hover { color: var(--clr-brand-dark); text-decoration: underline; }

    /* ── Empty state ────────────────────────────────────────────────── */
    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-10) var(--space-4);
      color: var(--clr-text-faint);
      text-align: center;
      background: var(--clr-surface);
      border-radius: var(--radius-lg);
      border: 1px solid var(--clr-border-faint);
    }
    .empty-state svg { width: 2.25rem; height: 2.25rem; }
    .empty-state span { font-size: 0.875rem; }
    .empty-cta {
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--clr-brand);
      text-decoration: none;
      margin-top: var(--space-1);
    }
    .empty-cta:hover { text-decoration: underline; }

    /* ── Recipe list ────────────────────────────────────────────────── */
    .recipe-list {
      background: var(--clr-surface);
      border-radius: var(--radius-lg);
      border: 1px solid var(--clr-border-faint);
      overflow: hidden;
    }
    .recipe-row {
      display: flex;
      align-items: center;
      gap: var(--space-4);
      padding: var(--space-4) var(--space-5);
      border-bottom: 1px solid var(--clr-border-faint);
      transition: background 0.15s;
    }
    .recipe-row:last-child { border-bottom: none; }
    .recipe-row:hover { background: var(--clr-surface-alt); }

    .recipe-thumb {
      width: 3.25rem;
      height: 3.25rem;
      border-radius: var(--radius-md);
      overflow: hidden;
      flex-shrink: 0;
      background: var(--clr-surface-alt);
    }
    .recipe-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .thumb-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--clr-text-faint);
    }
    .thumb-placeholder svg { width: 1.25rem; height: 1.25rem; }

    .recipe-info { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 0.2rem; }
    .recipe-title-link {
      font-weight: 700;
      font-size: 0.9rem;
      color: var(--clr-text);
      text-decoration: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
      transition: color 0.15s;
    }
    .recipe-title-link:hover { color: var(--clr-brand); }
    .recipe-cat {
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--clr-brand);
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .recipe-excerpt {
      font-size: 0.8rem;
      color: var(--clr-text-muted);
      margin: 0;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .recipe-actions {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      flex-shrink: 0;
    }
    .status-badge {
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 0.28rem 0.65rem;
      border-radius: var(--radius-pill);
      white-space: nowrap;
    }
    .status-badge.published { background: oklch(94% 0.04 148); color: oklch(32% 0.12 148); }
    .status-badge.draft     { background: oklch(95% 0.025 76); color: oklch(48% 0.09 74); }
    @media (prefers-color-scheme: dark) {
      .status-badge.published { background: oklch(24% 0.07 148); color: oklch(74% 0.10 148); }
      .status-badge.draft     { background: oklch(23% 0.05 72); color: oklch(72% 0.09 74); }
    }
    html.dark .status-badge.published { background: oklch(24% 0.07 148); color: oklch(74% 0.10 148); }
    html.dark .status-badge.draft     { background: oklch(23% 0.05 72); color: oklch(72% 0.09 74); }

    .edit-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.25rem;
      height: 2.25rem;
      border-radius: var(--radius-sm);
      color: var(--clr-text-muted);
      text-decoration: none;
      transition: background 0.15s, color 0.15s;
    }
    .edit-btn svg { width: 0.875rem; height: 0.875rem; }
    .edit-btn:hover { background: color-mix(in oklch, var(--clr-brand) 10%, transparent); color: var(--clr-brand); }

    /* ── Comment list ───────────────────────────────────────────────── */
    .comment-list {
      background: var(--clr-surface);
      border-radius: var(--radius-lg);
      border: 1px solid var(--clr-border-faint);
      overflow: hidden;
    }
    .comment-row {
      display: flex;
      gap: var(--space-3);
      padding: var(--space-4) var(--space-5);
      border-bottom: 1px solid var(--clr-border-faint);
    }
    .comment-row:last-child { border-bottom: none; }
    .comment-avatar {
      width: 2rem;
      height: 2rem;
      border-radius: var(--radius-circle);
      background: var(--clr-brand);
      color: oklch(100% 0 0);
      font-size: 0.75rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      text-transform: uppercase;
    }
    .comment-body-wrap { flex: 1; min-width: 0; }
    .comment-meta-row {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      margin-bottom: 0.25rem;
    }
    .comment-author { font-weight: 700; font-size: 0.82rem; color: var(--clr-text); }
    .comment-rating { font-size: 0.75rem; color: oklch(58% 0.14 74); font-weight: 700; }
    .comment-date { font-size: 0.72rem; color: var(--clr-text-muted); margin-left: auto; }
    .comment-body {
      font-size: 0.83rem;
      color: var(--clr-text-muted);
      margin: 0 0 var(--space-1);
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .comment-recipe-link {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--clr-brand);
      text-decoration: none;
      transition: color 0.15s;
    }
    .comment-recipe-link:hover { color: var(--clr-brand-dark); text-decoration: underline; }

    /* ── Responsive ─────────────────────────────────────────────────── */
    @media (max-width: 900px) {
      .tiles-row { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 640px) {
      .dashboard-page { padding: var(--space-5) var(--space-4) var(--space-9); }
      .welcome-banner { padding: var(--space-6) var(--space-5); gap: var(--space-4); }
      .welcome-art { display: none; }
      .welcome-heading { font-size: 1.5rem; }
      .tiles-row { gap: var(--space-3); }
      .tile { padding: var(--space-4) var(--space-4); }
      .tile-num { font-size: 2rem; }
      .recipe-row { gap: var(--space-3); padding: var(--space-3) var(--space-4); }
      .status-badge { display: none; }
    }

    @media (prefers-reduced-motion: reduce) {
      .tile,
      .welcome-cta { transition: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  private dashboardService = inject(DashboardService);
  private auth = inject(AuthService);
  private seo = inject(SeoService);

  stats = toSignal(this.dashboardService.getStats());
  recipes = toSignal(this.dashboardService.getRecipes(), { initialValue: [] as Recipe[] });

  firstName = computed(() => {
    const name = this.auth.user()?.name || '';
    return name.split(' ')[0] || 'Chef';
  });

  recentRecipes = computed(() => this.recipes().slice(0, 5));

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
