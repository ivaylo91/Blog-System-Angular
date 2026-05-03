import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="shell">

      <!-- ── Sidebar ─────────────────────────────────────────────── -->
      <aside class="sidebar" [class.open]="sidebarOpen()">
        <div class="sidebar-header">
          <span class="sidebar-brand">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                 stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"/>
              <path d="M3 11h18v2a7 7 0 0 1-14 0H3z"/>
              <line x1="9" y1="20" x2="15" y2="20"/>
              <line x1="12" y1="17" x2="12" y2="20"/>
            </svg>
            Блогът на Иво
          </span>
          <button class="sidebar-close" (click)="sidebarOpen.set(false)" aria-label="Затвори менюто">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <a routerLink="/dashboard/recipes/new" class="sidebar-cta" (click)="sidebarOpen.set(false)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Нова рецепта
        </a>

        <nav class="sidebar-nav sidebar-nav-primary" aria-label="Навигация в таблото">
          <a routerLink="/dashboard/recipes" routerLinkActive="active"
             class="nav-item" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            <span>Рецепти</span>
          </a>
          <a routerLink="/dashboard/comments" routerLinkActive="active"
             class="nav-item" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span>Коментари</span>
          </a>
          <a routerLink="/dashboard/favorites" routerLinkActive="active"
             class="nav-item" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>Любими</span>
          </a>
        </nav>

        <div class="sidebar-sep"></div>

        <nav class="sidebar-nav sidebar-nav-secondary" aria-label="Допълнителни връзки">
          <a routerLink="/profile" routerLinkActive="active"
             class="nav-item" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
            <span>Профил</span>
          </a>
          <a routerLink="/recipes" class="nav-item nav-item-external" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            <span>Виж блога</span>
          </a>
          <button class="nav-item nav-item-logout" (click)="auth.logout()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            <span>Изход</span>
          </button>
        </nav>

        <div class="sidebar-user">
          <div class="user-avatar" aria-hidden="true">{{ userInitial() }}</div>
          <div class="user-info">
            <span class="user-name">{{ auth.user()?.name }}</span>
            <span class="user-role">{{ auth.isAdmin() ? 'Администратор' : 'Потребител' }}</span>
          </div>
        </div>
      </aside>

      <!-- Mobile overlay -->
      @if (sidebarOpen()) {
        <div class="sidebar-overlay" (click)="sidebarOpen.set(false)" aria-hidden="true"></div>
      }

      <!-- ── Main area ───────────────────────────────────────────── -->
      <div class="main-wrap">

        <!-- Mobile topbar -->
        <div class="mobile-topbar">
          <button class="menu-btn" (click)="sidebarOpen.set(true)" aria-label="Отвори навигацията">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
          <span class="topbar-label">{{ pageTitle() }}</span>
          <a routerLink="/dashboard/recipes/new" class="topbar-new" aria-label="Нова рецепта">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </a>
        </div>

        <div class="page-content">
          <router-outlet />
        </div>
      </div>

    </div>

    <!-- ── Mobile bottom nav ─────────────────────────────────────── -->
    <nav class="bottom-nav" aria-label="Навигация в таблото">
      <a routerLink="/dashboard/recipes" routerLinkActive="active" class="bottom-nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
        <span>Рецепти</span>
      </a>
      <div class="bottom-nav-add">
        <a routerLink="/dashboard/recipes/new" aria-label="Нова рецепта" class="bottom-nav-add-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </a>
      </div>
      <a routerLink="/dashboard/comments" routerLinkActive="active" class="bottom-nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <span>Коментари</span>
      </a>
      <a routerLink="/dashboard/favorites" routerLinkActive="active" class="bottom-nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        <span>Любими</span>
      </a>
    </nav>
  `,
  styles: [`
    /* ── Shell ──────────────────────────────────────────────────────── */
    .shell {
      display: flex;
      min-height: calc(100vh - 3.75rem);
      background: var(--clr-bg);
    }

    /* ── Sidebar ─────────────────────────────────────────────────────── */
    .sidebar {
      width: 240px;
      flex-shrink: 0;
      background: var(--clr-surface);
      border-right: 1px solid var(--clr-border-faint);
      display: flex;
      flex-direction: column;
      position: sticky;
      top: 3.75rem;
      height: calc(100vh - 3.75rem);
      overflow-y: auto;
      z-index: 40;
      scrollbar-width: none;
    }
    .sidebar::-webkit-scrollbar { display: none; }

    .sidebar-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-5) var(--space-4) var(--space-3);
    }
    .sidebar-brand {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      font-family: var(--font-display);
      font-size: 0.92rem;
      font-weight: 800;
      color: var(--clr-text);
      letter-spacing: -0.02em;
    }
    .sidebar-brand svg { width: 1.1rem; height: 1.1rem; color: var(--clr-brand); flex-shrink: 0; }
    .sidebar-close {
      display: none;
      background: none;
      border: none;
      color: var(--clr-text-muted);
      cursor: pointer;
      padding: var(--space-1);
      border-radius: var(--radius-xs);
      transition: color 0.2s, background 0.2s;
      touch-action: manipulation;
    }
    .sidebar-close svg { width: 1rem; height: 1rem; }
    .sidebar-close:hover { color: var(--clr-text); background: var(--clr-surface-alt); }

    /* CTA button */
    .sidebar-cta {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-2);
      margin: var(--space-2) var(--space-4) var(--space-3);
      padding: var(--space-3) var(--space-4);
      background: var(--clr-brand);
      color: oklch(100% 0 0);
      border-radius: var(--radius-pill);
      text-decoration: none;
      font-weight: 700;
      font-size: 0.875rem;
      letter-spacing: 0.01em;
      transition: background 0.18s, transform 0.15s, box-shadow 0.18s;
      box-shadow: 0 4px 14px oklch(62% 0.22 42 / 0.32);
      touch-action: manipulation;
    }
    .sidebar-cta svg { width: 0.875rem; height: 0.875rem; flex-shrink: 0; }
    .sidebar-cta:hover {
      background: var(--clr-brand-dark);
      transform: translateY(-1px);
      box-shadow: 0 6px 18px oklch(62% 0.22 42 / 0.4);
    }
    .sidebar-cta:active { transform: translateY(0); box-shadow: none; }

    /* Nav */
    .sidebar-nav {
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding: var(--space-1) var(--space-3);
    }
    .sidebar-nav-secondary { padding-top: 0; }

    .nav-item {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-3) var(--space-3);
      border-radius: var(--radius-md);
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--clr-text-muted);
      transition: background 0.15s, color 0.15s;
      touch-action: manipulation;
      min-height: 2.75rem;
      background: none;
      border: none;
      width: 100%;
      text-align: left;
      cursor: pointer;
      font-family: inherit;
    }
    .nav-item svg { width: 1rem; height: 1rem; flex-shrink: 0; }
    .nav-item:hover { background: var(--clr-surface-alt); color: var(--clr-text); }
    .nav-item.active {
      background: color-mix(in oklch, var(--clr-brand) 10%, transparent);
      color: var(--clr-brand);
      font-weight: 700;
    }
    .nav-item-external { opacity: 0.85; }
    .nav-item-external:hover { opacity: 1; }
    .nav-item-logout { color: oklch(40% 0.18 25); }
    .nav-item-logout:hover {
      background: color-mix(in oklch, oklch(55% 0.18 25) 10%, transparent);
      color: oklch(35% 0.18 25);
    }

    /* Separator */
    .sidebar-sep {
      height: 1px;
      background: var(--clr-border-faint);
      margin: var(--space-2) var(--space-3);
    }

    /* User info */
    .sidebar-user {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-4);
      margin-top: auto;
      border-top: 1px solid var(--clr-border-faint);
    }
    .user-avatar {
      width: 2rem;
      height: 2rem;
      border-radius: var(--radius-circle);
      background: var(--clr-brand);
      color: oklch(100% 0 0);
      font-size: 0.8rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      text-transform: uppercase;
    }
    .user-info { display: flex; flex-direction: column; gap: 0.1rem; min-width: 0; }
    .user-name {
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--clr-text);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .user-role {
      font-size: 0.68rem;
      color: var(--clr-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    /* ── Mobile overlay ─────────────────────────────────────────────── */
    .sidebar-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.45);
      z-index: 39;
      backdrop-filter: blur(2px);
    }

    /* ── Mobile topbar ──────────────────────────────────────────────── */
    .mobile-topbar {
      display: none;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-3) var(--space-4);
      background: var(--clr-surface);
      border-bottom: 1px solid var(--clr-border-faint);
      position: sticky;
      top: 3.75rem;
      z-index: 30;
      flex-shrink: 0;
    }
    .menu-btn {
      background: none;
      border: none;
      color: var(--clr-text);
      cursor: pointer;
      padding: var(--space-2);
      border-radius: var(--radius-xs);
      transition: background 0.15s;
      min-width: 2.75rem;
      min-height: 2.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      touch-action: manipulation;
    }
    .menu-btn svg { width: 1.25rem; height: 1.25rem; }
    .menu-btn:hover { background: var(--clr-surface-alt); }
    .topbar-label {
      font-family: var(--font-display);
      font-size: 1rem;
      font-weight: 700;
      color: var(--clr-text);
    }
    .topbar-new {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.75rem;
      height: 2.75rem;
      background: var(--clr-brand);
      color: oklch(100% 0 0);
      border-radius: var(--radius-sm);
      text-decoration: none;
      transition: background 0.15s;
      touch-action: manipulation;
    }
    .topbar-new svg { width: 1.1rem; height: 1.1rem; }
    .topbar-new:hover { background: var(--clr-brand-dark); }

    /* ── Main content ───────────────────────────────────────────────── */
    .main-wrap {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
    }
    .page-content { flex: 1; }

    /* ── Bottom nav (desktop: hidden) ──────────────────────────────── */
    .bottom-nav { display: none; }

    @media (max-width: 768px) {
      .shell { display: block; min-height: calc(100vh - 3.75rem); }
      .sidebar { display: none; }
      .sidebar-overlay { display: none; }
      .mobile-topbar { display: flex; }

      .page-content {
        min-height: calc(100vh - 3.75rem - 4rem);
        padding-bottom: 4rem;
      }

      /* Bottom nav */
      .bottom-nav {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 4rem;
        background: var(--clr-surface);
        border-top: 1px solid var(--clr-border-faint);
        z-index: 30;
        box-shadow: 0 -2px 12px rgba(28,25,23,0.06);
      }
      .bottom-nav-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--space-1);
        text-decoration: none;
        color: var(--clr-text-muted);
        font-size: 0.65rem;
        font-weight: 500;
        transition: color 0.15s, background 0.15s;
        touch-action: manipulation;
        min-height: 4rem;
      }
      .bottom-nav-item svg { width: 1.25rem; height: 1.25rem; flex-shrink: 0; }
      .bottom-nav-item:hover { color: var(--clr-brand); background: color-mix(in oklch, var(--clr-brand) 5%, transparent); }
      .bottom-nav-item.active { color: var(--clr-brand); font-weight: 600; }
      .bottom-nav-item.active svg { stroke-width: 2.5; }
      .bottom-nav-add {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .bottom-nav-add-btn {
        width: 2.75rem;
        height: 2.75rem;
        background: var(--clr-brand);
        color: oklch(100% 0 0);
        border-radius: var(--radius-circle);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: var(--shadow-md);
        transition: background 0.15s, transform 0.15s;
      }
      .bottom-nav-add-btn svg { width: 1.1rem; height: 1.1rem; }
      .bottom-nav-add-btn:hover { background: var(--clr-brand-dark); transform: scale(1.08); }
    }

    @media (prefers-reduced-motion: reduce) {
      .sidebar-cta,
      .nav-item,
      .bottom-nav-add-btn { transition: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {
  auth = inject(AuthService);
  router = inject(Router);
  sidebarOpen = signal(false);

  userInitial(): string {
    const name = this.auth.user()?.name || '';
    return name.charAt(0).toUpperCase() || '?';
  }

  pageTitle(): string {
    const url = this.router.url;
    if (url.includes('/recipes/new') || url.includes('/recipes/edit')) return 'Рецепта';
    if (url.includes('/recipes')) return 'Рецепти';
    if (url.includes('/comments')) return 'Коментари';
    if (url.includes('/favorites')) return 'Любими';
    return '';
  }

}
