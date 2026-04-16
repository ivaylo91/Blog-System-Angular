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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
            Табло
          </span>
          <button class="sidebar-close" (click)="sidebarOpen.set(false)" aria-label="Затвори менюто" touch-action="manipulation">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <nav class="sidebar-nav sidebar-nav-primary" aria-label="Навигация в таблото">
          <a routerLink="/dashboard" routerLinkActive="active"
             [routerLinkActiveOptions]="{exact: true}"
             class="nav-item" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
            <span>Преглед</span>
          </a>
          <a routerLink="/dashboard/recipes" routerLinkActive="active"
             class="nav-item" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            <span>Рецепти</span>
          </a>
          <a routerLink="/dashboard/comments" routerLinkActive="active"
             class="nav-item" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <span>Коментари</span>
          </a>
          <a routerLink="/dashboard/favorites" routerLinkActive="active"
             class="nav-item" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <span>Любими</span>
          </a>
        </nav>

        <div class="sidebar-sep"></div>

        <nav class="sidebar-nav sidebar-nav-secondary" aria-label="Допълнителни връзки">
          <a routerLink="/profile" routerLinkActive="active"
             class="nav-item" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span>Профил</span>
          </a>
          <a routerLink="/recipes" class="nav-item nav-item-external" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            <span>Виж блога</span>
          </a>
          <button class="nav-item nav-item-logout" (click)="auth.logout()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
          <span class="topbar-label">{{ pageTitle() }}</span>
          <a routerLink="/dashboard/recipes/new" class="topbar-new" aria-label="Нова рецепта">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </a>
        </div>

        <div class="page-content">
          <router-outlet />
        </div>
      </div>

    </div>

    <!-- ── Mobile bottom nav ─────────────────────────────────────── -->
    <nav class="bottom-nav" aria-label="Навигация в таблото">
      <a routerLink="/dashboard" routerLinkActive="active"
         [routerLinkActiveOptions]="{exact: true}" class="bottom-nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
        <span>Преглед</span>
      </a>
      <a routerLink="/dashboard/recipes" routerLinkActive="active" class="bottom-nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        <span>Рецепти</span>
      </a>
      <div class="bottom-nav-add">
        <a routerLink="/dashboard/recipes/new" aria-label="Нова рецепта" class="bottom-nav-add-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </a>
      </div>
      <a routerLink="/dashboard/comments" routerLinkActive="active" class="bottom-nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <span>Коментари</span>
      </a>
      <a routerLink="/dashboard/favorites" routerLinkActive="active" class="bottom-nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        <span>Любими</span>
      </a>
    </nav>
  `,
  styles: [`
    /* ── Shell ──────────────────────────────────────────────────────── */
    .shell {
      display: flex;
      min-height: calc(100vh - 4rem);
      background: #f5f0e8;
    }

    /* ── Sidebar ─────────────────────────────────────────────────────── */
    .sidebar {
      width: 220px;
      flex-shrink: 0;
      background: #1c1917;
      display: flex;
      flex-direction: column;
      position: sticky;
      top: 4rem;
      height: calc(100vh - 4rem);
      overflow-y: auto;
      z-index: 40;
      scrollbar-width: none;
    }
    .sidebar::-webkit-scrollbar { display: none; }

    .sidebar-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.25rem 1rem 0.75rem;
    }
    .sidebar-brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-family: 'Georgia', serif;
      font-size: 0.95rem;
      font-weight: 700;
      color: #fafaf9;
      letter-spacing: -0.01em;
    }
    .sidebar-brand svg { width: 1rem; height: 1rem; color: #78350f; }
    .sidebar-close {
      display: none;
      background: none;
      border: none;
      color: #a8a29e;
      cursor: pointer;
      padding: 0.25rem;
      border-radius: 0.375rem;
      transition: color 0.2s, background 0.2s;
      touch-action: manipulation;
    }
    .sidebar-close svg { width: 1rem; height: 1rem; }
    .sidebar-close:hover { color: #fafaf9; background: rgba(255,255,255,0.08); }

    /* Nav */
    .sidebar-nav {
      display: flex;
      flex-direction: column;
      gap: 0.125rem;
      padding: 0.5rem 0.75rem;
    }
    .sidebar-nav-secondary { padding-top: 0; }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.6rem 0.75rem;
      border-radius: 0.625rem;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      color: #a8a29e;
      transition: background 0.18s, color 0.18s;
      touch-action: manipulation;
      min-height: 2.75rem;
      border-left: 2px solid transparent;
    }
    .nav-item svg { width: 1rem; height: 1rem; flex-shrink: 0; }
    .nav-item:hover {
      background: rgba(255, 255, 255, 0.07);
      color: #e7e5e4;
    }
    .nav-item.active {
      background: rgba(120, 53, 15, 0.18);
      color: #fafaf9;
      font-weight: 600;
      border-left-color: #78350f;
    }
    .nav-item-external { opacity: 0.85; }
    .nav-item-external:hover { opacity: 1; }
    .nav-item-logout {
      background: none;
      border: none;
      width: 100%;
      text-align: left;
      cursor: pointer;
      color: #f87171;
      display: none;
    }
    .nav-item-logout:hover { background: rgba(248,113,113,0.1); color: #ef4444; }

    /* Separator */
    .sidebar-sep {
      height: 1px;
      background: rgba(255, 255, 255, 0.07);
      margin: 0.5rem 0.75rem;
    }

    /* User info */
    .sidebar-user {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      padding: 0.875rem 1rem;
      margin-top: auto;
      border-top: 1px solid rgba(255, 255, 255, 0.07);
    }
    .user-avatar {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background: #78350f;
      color: #fff;
      font-size: 0.8rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      text-transform: uppercase;
    }
    .user-info {
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
      min-width: 0;
    }
    .user-name {
      font-size: 0.82rem;
      font-weight: 600;
      color: #fafaf9;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .user-role {
      font-size: 0.7rem;
      color: #78716c;
      text-transform: uppercase;
      letter-spacing: 0.05em;
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
      padding: 0.75rem 1rem;
      background: #fff;
      border-bottom: 1px solid rgba(0, 0, 0, 0.07);
      position: sticky;
      top: 4rem;
      z-index: 30;
    }
    .menu-btn {
      background: none;
      border: none;
      color: #1c1917;
      cursor: pointer;
      padding: 0.4rem;
      border-radius: 0.5rem;
      transition: background 0.2s;
      min-width: 2.75rem;
      min-height: 2.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      touch-action: manipulation;
    }
    .menu-btn svg { width: 1.25rem; height: 1.25rem; }
    .menu-btn:hover { background: #f5f0e8; }
    .topbar-label {
      font-family: 'Georgia', serif;
      font-size: 1rem;
      font-weight: 700;
      color: #1c1917;
    }
    .topbar-new {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.75rem;
      height: 2.75rem;
      background: #4a7c59;
      color: #fff;
      border-radius: 0.75rem;
      text-decoration: none;
      transition: background 0.2s;
      touch-action: manipulation;
    }
    .topbar-new svg { width: 1.1rem; height: 1.1rem; }
    .topbar-new:hover { background: #3a6347; }

    /* ── Main content ───────────────────────────────────────────────── */
    .main-wrap {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
    }
    .page-content {
      flex: 1;
    }

    /* ── Mobile breakpoint ──────────────────────────────────────────── */
    /* ── Bottom nav (desktop: hidden) ──────────────────────────────── */
    .bottom-nav { display: none; }

    @media (max-width: 768px) {
      .shell { display: block; min-height: calc(100vh - 4rem); }
      .sidebar { display: none; }
      .sidebar-overlay { display: none; }
      .mobile-topbar { display: none; }

      .page-content {
        min-height: calc(100vh - 4rem - 4rem);
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
        background: #fff;
        border-top: 1px solid rgba(0,0,0,0.08);
        z-index: 30;
        box-shadow: 0 -2px 12px rgba(0,0,0,0.06);
      }
      .bottom-nav-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        text-decoration: none;
        color: #a8a29e;
        font-size: 0.65rem;
        font-weight: 500;
        transition: color 0.18s, background 0.18s;
        touch-action: manipulation;
        min-height: 4rem;
      }
      .bottom-nav-item svg { width: 1.25rem; height: 1.25rem; flex-shrink: 0; }
      .bottom-nav-item:hover { color: #78350f; background: rgba(120,53,15,0.04); }
      .bottom-nav-item.active { color: #78350f; font-weight: 600; }
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
        background: #78350f;
        color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 10px rgba(120,53,15,0.4);
        transition: background 0.18s, transform 0.15s;
      }
      .bottom-nav-add-btn svg { width: 1.1rem; height: 1.1rem; }
      .bottom-nav-add-btn:hover { background: #6c2d0c; transform: scale(1.08); }
    }

    @media (prefers-reduced-motion: reduce) {
      .sidebar { transition: none; }
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
    return 'Преглед';
  }
}
