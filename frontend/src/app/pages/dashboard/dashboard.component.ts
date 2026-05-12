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
    <div class="page">

      <!-- ── Main column ──────────────────────────────────────────── -->
      <div class="main-col">

        <!-- Welcome card -->
        <div class="welcome-card">
          <div class="welcome-body">
            <h1 class="welcome-heading">Здравей, {{ firstName() }}!</h1>
            <p class="welcome-text">
              Имаш {{ stats()?.publishedRecipes ?? 0 }} публикувани рецепти.<br>
              Управлявай блога и следи активността.
            </p>
            <a routerLink="/dashboard/recipes/new" class="welcome-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                   stroke-linecap="round" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              Нова рецепта
            </a>
          </div>
          <div class="welcome-art" aria-hidden="true">
            <svg viewBox="0 0 200 175" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Bowl shadow -->
              <ellipse cx="100" cy="162" rx="55" ry="10" fill="#c49640" opacity="0.35"/>
              <!-- Bowl body -->
              <path d="M42 110 Q42 148 100 148 Q158 148 158 110" fill="#c07838"/>
              <!-- Bowl rim -->
              <ellipse cx="100" cy="110" rx="58" ry="16" fill="#ddc068"/>
              <!-- Inner rim -->
              <ellipse cx="100" cy="108" rx="50" ry="11" fill="#d0ad50"/>
              <!-- Steam lines -->
              <path d="M68 88 Q64 78 68 68 Q72 58 68 48" stroke="#b08838"
                    stroke-width="3" stroke-linecap="round" fill="none" opacity="0.55"/>
              <path d="M100 83 Q96 73 100 63 Q104 53 100 43" stroke="#b08838"
                    stroke-width="3" stroke-linecap="round" fill="none" opacity="0.55"/>
              <path d="M132 88 Q128 78 132 68 Q136 58 132 48" stroke="#b08838"
                    stroke-width="3" stroke-linecap="round" fill="none" opacity="0.55"/>
              <!-- Spoon -->
              <rect x="148" y="75" width="7" height="52" rx="3.5" fill="#8c6428"/>
              <ellipse cx="151.5" cy="73" rx="7" ry="11" fill="#9c7030"/>
              <!-- Floating ingredients -->
              <circle cx="24" cy="80" r="9" fill="#d8b858" opacity="0.75"/>
              <circle cx="176" cy="65" r="7" fill="#cd9c48" opacity="0.75"/>
              <circle cx="18" cy="118" r="6" fill="#d0aa50" opacity="0.6"/>
              <circle cx="182" cy="112" r="5" fill="#d4b058" opacity="0.6"/>
              <!-- Star accents -->
              <path d="M158 22 L160 16 L162 22 L168 22 L163 26 L165 32 L160 28 L155 32 L157 26 L152 22 Z"
                    fill="#c8a038" opacity="0.85"/>
              <path d="M36 38 L37.5 33 L39 38 L44 38 L40 41 L41.5 46 L37.5 43 L33.5 46 L35 41 L31 38 Z"
                    fill="#c8a038" opacity="0.7"/>
            </svg>
          </div>
        </div>

        <!-- Recent recipes table -->
        <div class="section-card">
          <div class="section-head">
            <h2 class="section-title">Последни рецепти</h2>
            <a routerLink="/dashboard/recipes" class="view-btn">Виж всички</a>
          </div>

          <div class="tbl-labels" aria-hidden="true">
            <span>Рецепта</span>
            <span>Категория</span>
            <span>Статус</span>
            <span></span>
          </div>

          @if (!recentRecipes().length) {
            <div class="empty-row">
              Нямаш рецепти все още.
              <a routerLink="/dashboard/recipes/new">Създай първата →</a>
            </div>
          } @else {
            @for (r of recentRecipes(); track r.id) {
              <div class="tbl-row">
                <div class="cell-recipe">
                  <div class="recipe-thumb">
                    @if (r.hero_image) {
                      <img [src]="r.hero_image" [alt]="r.title" loading="lazy" />
                    } @else {
                      <div class="thumb-ph" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             stroke-width="1.5" stroke-linecap="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14 2 14 8 20 8"/>
                        </svg>
                      </div>
                    }
                  </div>
                  <a [routerLink]="['/recipes', r.slug]" class="recipe-name">{{ r.title }}</a>
                </div>

                <div class="cell-cat">
                  @if (r.category) {
                    <span class="cat-pill">{{ r.category.name }}</span>
                  } @else {
                    <span class="cat-pill cat-none">—</span>
                  }
                </div>

                <div class="cell-status">
                  <span class="status-dot" [class.pub]="r.published" [class.dft]="!r.published">
                    {{ r.published ? 'Публикувана' : 'Чернова' }}
                  </span>
                </div>

                <div class="cell-action">
                  <a [routerLink]="['/dashboard/recipes', r.slug, 'edit']"
                     class="edit-icon" [attr.aria-label]="'Редактирай ' + r.title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                  </a>
                </div>
              </div>
            }
          }
        </div>
      </div>

      <!-- ── Right column ─────────────────────────────────────────── -->
      <aside class="right-col">

        <!-- Stats -->
        <div class="section-card">
          <h3 class="rc-title">Статистики</h3>
          <div class="stats-grid">
            <div class="stat-box stat-amber">
              <span class="stat-n">{{ stats()?.publishedRecipes ?? '—' }}</span>
              <span class="stat-l">Публикувани</span>
            </div>
            <div class="stat-box stat-orange">
              <span class="stat-n">{{ stats()?.draftRecipes ?? '—' }}</span>
              <span class="stat-l">Чернови</span>
            </div>
            <div class="stat-box stat-rose">
              <span class="stat-n">{{ stats()?.totalComments ?? '—' }}</span>
              <span class="stat-l">Коментари</span>
            </div>
            <div class="stat-box stat-lavender">
              <span class="stat-n">{{ stats()?.totalFavorites ?? '—' }}</span>
              <span class="stat-l">Запазени</span>
            </div>
          </div>
        </div>

        <!-- Profile card -->
        <div class="section-card profile-card">
          <div class="profile-top">
            <div class="profile-avatar">{{ userInitial() }}</div>
            <div class="profile-info">
              <div class="profile-name">{{ auth.user()?.name }}</div>
              <div class="profile-role">
                {{ auth.isAdmin() ? 'Администратор' : 'Потребител' }}
              </div>
            </div>
          </div>
          <div class="profile-meta">
            <div class="meta-row">
              <span class="meta-label">Рецепти</span>
              <span class="meta-val">
                {{ (stats()?.publishedRecipes ?? 0) + (stats()?.draftRecipes ?? 0) }}
              </span>
            </div>
            <div class="meta-row">
              <span class="meta-label">Коментари</span>
              <span class="meta-val">{{ stats()?.totalComments ?? 0 }}</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">Запазвания</span>
              <span class="meta-val">{{ stats()?.totalFavorites ?? 0 }}</span>
            </div>
          </div>
        </div>

        <!-- Recent comments -->
        @if (stats()?.recentComments?.length) {
          <div class="section-card">
            <div class="section-head">
              <h3 class="rc-title" style="margin:0">Коментари</h3>
              <a routerLink="/dashboard/comments" class="view-btn">Виж →</a>
            </div>
            <div class="comment-list">
              @for (c of stats()!.recentComments.slice(0, 3); track c.id) {
                <div class="comment-row">
                  <div class="comment-av">{{ c.author?.name?.charAt(0) || '?' }}</div>
                  <div class="comment-body-wrap">
                    <div class="comment-author-row">
                      <span class="comment-author">{{ c.author?.name || 'Анонимен' }}</span>
                      @if (c.rating) {
                        <span class="comment-rating">★{{ c.rating }}</span>
                      }
                    </div>
                    <p class="comment-text">{{ c.body }}</p>
                  </div>
                </div>
              }
            </div>
          </div>
        }

      </aside>
    </div>
  `,
  styles: [`
    /* ── Page layout ─────────────────────────────────────────────── */
    .page {
      display: grid;
      grid-template-columns: 1fr 272px;
      gap: var(--space-5);
      padding: var(--space-6) var(--space-6) var(--space-10);
      align-items: start;
      max-width: 1380px;
      margin: 0 auto;
      width: 100%;
      box-sizing: border-box;
    }

    .main-col {
      display: flex;
      flex-direction: column;
      gap: var(--space-5);
      min-width: 0;
    }

    /* ── Welcome card ────────────────────────────────────────────── */
    .welcome-card {
      background: var(--clr-amber-bg);
      border-radius: var(--radius-xl);
      padding: var(--space-7) var(--space-8);
      display: flex;
      align-items: center;
      justify-content: space-between;
      overflow: hidden;
      gap: var(--space-4);
      min-height: 185px;
    }
    .welcome-body { flex: 1; min-width: 0; }
    .welcome-heading {
      font-family: var(--font-display);
      font-size: clamp(1.5rem, 2.8vw, 2rem);
      font-weight: 800;
      color: var(--ink);
      margin: 0 0 var(--space-2);
      letter-spacing: -0.03em;
      line-height: 1.1;
    }
    .welcome-text {
      font-size: 0.875rem;
      color: var(--ink-mute);
      margin: 0 0 var(--space-5);
      line-height: 1.65;
      max-width: 34ch;
    }
    .welcome-btn {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-2) var(--space-5);
      background: var(--terracotta);
      color: var(--paper);
      border-radius: var(--radius-pill);
      text-decoration: none;
      font-weight: 700;
      font-size: 0.875rem;
      box-shadow: 0 4px 14px rgba(177, 80, 45, 0.35);
      transition: background 0.18s, transform 0.15s;
      touch-action: manipulation;
    }
    .welcome-btn svg { width: 0.85rem; height: 0.85rem; flex-shrink: 0; }
    .welcome-btn:hover { background: var(--terracotta-2); transform: translateY(-1px); }
    .welcome-btn:active { transform: translateY(0); }
    .welcome-art { flex-shrink: 0; width: 155px; height: 155px; }
    .welcome-art svg { width: 100%; height: 100%; display: block; }


    /* ── Section card ────────────────────────────────────────────── */
    .section-card {
      background: var(--clr-surface);
      border-radius: var(--radius-xl);
      padding: var(--space-5) var(--space-6);
      box-shadow: 0 2px 16px rgba(0,0,0,0.055);
    }

    .section-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: var(--space-4);
    }
    .section-title {
      font-family: var(--font-display);
      font-size: 1rem;
      font-weight: 700;
      color: var(--clr-text);
      margin: 0;
      letter-spacing: -0.015em;
    }
    .view-btn {
      display: inline-flex;
      align-items: center;
      padding: var(--space-2) var(--space-4);
      background: var(--clr-amber-bg);
      color: var(--clr-amber-text);
      border-radius: var(--radius-pill);
      text-decoration: none;
      font-size: 0.78rem;
      font-weight: 700;
      transition: background 0.15s;
      white-space: nowrap;
    }
    .view-btn:hover { background: var(--clr-amber-bg); }

    /* ── Table ───────────────────────────────────────────────────── */
    .tbl-labels {
      display: grid;
      grid-template-columns: 1fr 130px 120px 44px;
      gap: var(--space-3);
      padding: var(--space-2) var(--space-2) var(--space-2);
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: var(--clr-text-muted);
      border-bottom: 1px solid var(--clr-border-faint);
      margin-bottom: var(--space-1);
    }
    .tbl-row {
      display: grid;
      grid-template-columns: 1fr 130px 120px 44px;
      gap: var(--space-3);
      align-items: center;
      padding: var(--space-3) var(--space-2);
      border-radius: var(--radius-md);
      transition: background 0.15s;
    }
    .tbl-row:hover { background: var(--clr-surface-alt); }

    .cell-recipe {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      min-width: 0;
    }
    .recipe-thumb {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: var(--radius-sm);
      overflow: hidden;
      flex-shrink: 0;
      background: var(--clr-surface-alt);
    }
    .recipe-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .thumb-ph {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--clr-text-faint);
    }
    .thumb-ph svg { width: 1rem; height: 1rem; }
    .recipe-name {
      font-size: 0.88rem;
      font-weight: 600;
      color: var(--clr-text);
      text-decoration: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: color 0.15s;
    }
    .recipe-name:hover { color: var(--clr-brand); }

    .cell-cat { display: flex; align-items: center; }
    .cat-pill {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 600;
      padding: 0.22rem 0.6rem;
      background: var(--clr-surface-alt);
      color: var(--ink-mute);
      border-radius: var(--radius-pill);
      white-space: nowrap;
    }
    .cat-none { background: var(--clr-surface-alt); color: var(--clr-text-faint); }

    .cell-status { display: flex; align-items: center; }
    .status-dot {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.8rem;
      font-weight: 600;
    }
    .status-dot::before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .status-dot.pub { color: var(--olive-2); }
    .status-dot.pub::before { background: var(--olive); }
    .status-dot.dft { color: var(--clr-amber-text); }
    .status-dot.dft::before { background: var(--mustard); }

    .cell-action { display: flex; align-items: center; justify-content: center; }
    .edit-icon {
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
    .edit-icon svg { width: 0.9rem; height: 0.9rem; }
    .edit-icon:hover {
      background: rgba(177, 80, 45, 0.08);
      color: var(--clr-brand);
    }

    .empty-row {
      padding: var(--space-8) var(--space-4);
      text-align: center;
      font-size: 0.875rem;
      color: var(--clr-text-muted);
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
      align-items: center;
    }
    .empty-row a { color: var(--clr-brand); text-decoration: none; font-weight: 600; }
    .empty-row a:hover { text-decoration: underline; }

    /* ── Right column ────────────────────────────────────────────── */
    .right-col {
      display: flex;
      flex-direction: column;
      gap: var(--space-5);
    }

    .rc-title {
      font-family: var(--font-display);
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--clr-text);
      margin: 0 0 var(--space-4);
      letter-spacing: -0.01em;
    }

    /* Stats */
    .stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-3);
    }
    .stat-box {
      border-radius: var(--radius-lg);
      padding: var(--space-4) var(--space-4);
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
    }
    .stat-n {
      font-family: var(--font-display);
      font-size: 1.9rem;
      font-weight: 800;
      line-height: 1;
      letter-spacing: -0.04em;
    }
    .stat-l {
      font-size: 0.62rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      opacity: 0.7;
    }
    .stat-amber   { background: var(--clr-amber-bg);  color: var(--clr-amber-text); }
    .stat-orange  { background: var(--clr-rust-bg);   color: var(--terracotta-2); }
    .stat-rose    { background: var(--clr-error-bg);  color: var(--clr-error); }
    .stat-lavender{ background: var(--paper-2);        color: var(--ink-soft); }

    /* Profile */
    .profile-top {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding-bottom: var(--space-4);
      border-bottom: 1px solid var(--clr-border-faint);
      margin-bottom: var(--space-4);
    }
    .profile-avatar {
      width: 2.75rem;
      height: 2.75rem;
      border-radius: var(--radius-circle);
      background: var(--clr-brand);
      color: var(--paper);
      font-size: 1rem;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      text-transform: uppercase;
    }
    .profile-info { min-width: 0; }
    .profile-name {
      font-weight: 700;
      font-size: 0.9rem;
      color: var(--clr-text);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .profile-role {
      font-size: 0.7rem;
      color: var(--clr-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-top: 0.1rem;
    }
    .profile-meta { display: flex; flex-direction: column; gap: var(--space-2); }
    .meta-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.82rem;
    }
    .meta-label { color: var(--clr-text-muted); }
    .meta-val { font-weight: 700; color: var(--clr-text); }

    /* Comments panel */
    .comment-list { display: flex; flex-direction: column; gap: var(--space-3); margin-top: var(--space-3); }
    .comment-row { display: flex; gap: var(--space-2); align-items: flex-start; }
    .comment-av {
      width: 1.75rem;
      height: 1.75rem;
      border-radius: var(--radius-circle);
      background: var(--clr-brand);
      color: var(--paper);
      font-size: 0.7rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      text-transform: uppercase;
    }
    .comment-body-wrap { flex: 1; min-width: 0; }
    .comment-author-row { display: flex; align-items: center; gap: var(--space-1); margin-bottom: 0.15rem; }
    .comment-author { font-size: 0.78rem; font-weight: 700; color: var(--clr-text); }
    .comment-rating { font-size: 0.68rem; color: var(--mustard); font-weight: 700; }
    .comment-text {
      font-size: 0.78rem;
      color: var(--clr-text-muted);
      margin: 0;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.5;
    }

    /* ── Responsive ──────────────────────────────────────────────── */
    @media (max-width: 1080px) {
      .page { grid-template-columns: 1fr 240px; }
    }
    @media (max-width: 900px) {
      .page { grid-template-columns: 1fr; }
      .right-col { display: grid; grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 640px) {
      .page { padding: var(--space-4) var(--space-4) var(--space-10); gap: var(--space-4); }
      .right-col { grid-template-columns: 1fr; }
      .welcome-art { display: none; }
      .welcome-card { padding: var(--space-6) var(--space-5); }
      .tbl-labels { display: none; }
      .tbl-row { grid-template-columns: 1fr 100px 40px; }
      .cell-cat { display: none; }
    }

    @media (prefers-reduced-motion: reduce) {
      .welcome-btn, .tbl-row { transition: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  private dashboardService = inject(DashboardService);
  auth = inject(AuthService);
  private seo = inject(SeoService);

  stats = toSignal(this.dashboardService.getStats());
  recipes = toSignal(this.dashboardService.getRecipes(), { initialValue: [] as Recipe[] });

  firstName = computed(() => {
    const name = this.auth.user()?.name || '';
    return name.split(' ')[0] || 'Chef';
  });

  recentRecipes = computed(() => this.recipes().slice(0, 5));

  userInitial(): string {
    return this.auth.user()?.name?.charAt(0).toUpperCase() || '?';
  }

  constructor() {
    this.seo.set({
      title: 'Табло',
      description: 'Управлявай рецептите, коментарите и любимите си в таблото на кулинарния блог.',
    });
  }
}
