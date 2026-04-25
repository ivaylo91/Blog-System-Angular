import { ChangeDetectionStrategy, Component, inject, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-header" [class.scrolled]="scrolled()">
      <div class="header-inner">

        <button class="mobile-toggle" [class.open]="drawerOpen()" (click)="toggleDrawer()"
                [attr.aria-label]="drawerOpen() ? 'Затвори менюто' : 'Отвори менюто'"
                [attr.aria-expanded]="drawerOpen()">
          <span class="hamburger"></span>
        </button>

        <a routerLink="/" class="brand">
          <svg class="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"/><path d="M3 11h18v2a7 7 0 0 1-14 0H3z"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="17" x2="12" y2="20"/></svg>
          <span class="brand-text">Кулинарният блог на Иво</span>
        </a>

        <nav class="nav-links">
          <div class="nav-main">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Начало</a>
            <a routerLink="/recipes" routerLinkActive="active">Рецепти</a>
            <a routerLink="/categories" routerLinkActive="active">Категории</a>
            @if (auth.isAuthenticated()) {
              <a routerLink="/dashboard" routerLinkActive="active">Табло</a>
              <a routerLink="/profile" routerLinkActive="active">Профил</a>
            }
          </div>
          <div class="nav-auth">
            <button class="theme-toggle" (click)="theme.toggle()"
                    [attr.aria-label]="theme.isDark() ? 'Включи светъл режим' : 'Включи тъмен режим'"
                    [attr.aria-pressed]="theme.isDark()">
              @if (theme.isDark()) {
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              } @else {
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              }
            </button>
            @if (auth.isAuthenticated()) {
              <button class="logout-btn" (click)="auth.logout()">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                Изход
              </button>
            } @else {
              <a routerLink="/signin" routerLinkActive="active" class="signin-link">Вход</a>
              <a routerLink="/register" routerLinkActive="active" class="register-btn">Регистрация</a>
            }
          </div>
        </nav>
      </div>
    </header>

    <!-- ── Mobile left drawer ──────────────────────────────────────────── -->
    <div class="drawer-overlay" [class.visible]="drawerOpen()" (click)="close()" aria-hidden="true"></div>

    <div class="mobile-drawer" [class.open]="drawerOpen()" role="dialog" aria-label="Навигация">

      <div class="drawer-header">
        <a routerLink="/" class="drawer-brand" (click)="close()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"/><path d="M3 11h18v2a7 7 0 0 1-14 0H3z"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="17" x2="12" y2="20"/></svg>
          Кулинарен блог
        </a>
        <div class="drawer-header-actions">
          <button class="theme-toggle" (click)="theme.toggle()"
                  [attr.aria-label]="theme.isDark() ? 'Включи светъл режим' : 'Включи тъмен режим'">
            @if (theme.isDark()) {
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            } @else {
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            }
          </button>
          <button class="drawer-close" (click)="close()" aria-label="Затвори менюто">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>

      @if (auth.isAuthenticated()) {
        <div class="drawer-user">
          <div class="drawer-avatar">{{ userInitial() }}</div>
          <div class="drawer-user-info">
            <span class="drawer-user-name">{{ auth.user()?.name }}</span>
            <span class="drawer-user-role">{{ auth.isAdmin() ? 'Администратор' : 'Потребител' }}</span>
          </div>
        </div>
        <div class="drawer-sep"></div>
      }

      <nav class="drawer-nav">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}"
           class="drawer-item" (click)="close()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Начало
        </a>
        <a routerLink="/recipes" routerLinkActive="active"
           class="drawer-item" (click)="close()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          Рецепти
        </a>
        <a routerLink="/categories" routerLinkActive="active"
           class="drawer-item" (click)="close()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg>
          Категории
        </a>
        @if (auth.isAuthenticated()) {
          <a routerLink="/dashboard" routerLinkActive="active"
             class="drawer-item" (click)="close()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
            Табло
          </a>
          <a routerLink="/profile" routerLinkActive="active"
             class="drawer-item" (click)="close()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            Профил
          </a>
        }
      </nav>

      <div class="drawer-footer">
        @if (auth.isAuthenticated()) {
          <button class="drawer-logout" (click)="auth.logout(); close()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Изход
          </button>
        } @else {
          <a routerLink="/signin" class="drawer-signin" (click)="close()">Вход</a>
          <a routerLink="/register" class="drawer-register" (click)="close()">Регистрация</a>
        }
      </div>

    </div>
  `,
  styles: [`
    /* Fluid Island: outer wrapper holds the layout slot (sticky in flex flow);
       .header-inner is the visual pill — detached from edges, glass-blurred,
       inner-highlight-rimmed. Wrapper is pointer-events:none so dead space
       around the pill doesn't catch clicks. */
    .site-header {
      position: sticky;
      top: 1rem;
      z-index: var(--z-sticky);
      padding: 1rem 1.5rem 0;
      display: flex;
      justify-content: center;
      pointer-events: none;
    }
    .header-inner {
      pointer-events: auto;
      max-width: 100%;
      padding: 0 0.75rem 0 1.25rem;
      height: 3.5rem;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      gap: 1.25rem;
      background: color-mix(in oklch, var(--clr-surface) 84%, transparent);
      backdrop-filter: blur(20px) saturate(140%);
      -webkit-backdrop-filter: blur(20px) saturate(140%);
      box-shadow:
        0 8px 24px rgba(28, 25, 23, 0.08),
        0 0 0 1px var(--clr-border-faint),
        inset 0 1px 0 rgba(255, 255, 255, 0.55);
      transition:
        box-shadow 0.4s var(--ease-out-expo),
        background 0.4s var(--ease-out-expo),
        height 0.3s var(--ease-out-expo);
    }
    .site-header.scrolled .header-inner {
      height: 3.1rem;
      background: color-mix(in oklch, var(--clr-surface) 94%, transparent);
      box-shadow:
        0 14px 32px rgba(28, 25, 23, 0.13),
        0 0 0 1px var(--clr-border),
        inset 0 1px 0 rgba(255, 255, 255, 0.55);
    }

    /* Brand */
    .brand {
      display: flex;
      align-items: center;
      gap: 0.55rem;
      text-decoration: none;
      flex-shrink: 0;
    }
    .brand-icon { width: 1.9rem; height: 1.9rem; flex-shrink: 0; color: var(--clr-brand); }
    .brand-text {
      font-family: var(--font-display);
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--clr-text);
      letter-spacing: -0.01em;
      white-space: nowrap;
      transition: color 0.2s;
    }
    .brand:hover .brand-text { color: var(--clr-brand); }

    /* Desktop nav */
    .nav-links { display: flex; align-items: center; gap: 0.25rem; }
    .nav-main { display: flex; align-items: center; gap: 0.35rem; }
    .nav-auth {
      display: flex; align-items: center; gap: 0.5rem;
      margin-left: 0.75rem; padding-left: 0.75rem;
      border-left: 1px solid var(--clr-border);
    }
    .nav-links a:not(.register-btn) {
      padding: 0.45rem 0.9rem; border-radius: 9999px;
      text-decoration: none; font-size: 0.875rem; font-weight: 500;
      color: var(--clr-text-muted); transition: background 0.18s, color 0.18s;
      white-space: nowrap; min-height: 2.25rem;
      display: flex; align-items: center;
    }
    .nav-links a:not(.register-btn):hover { background: var(--clr-surface-hover); color: var(--clr-text); }
    .nav-links a:not(.register-btn).active { background: var(--clr-surface-hover); color: var(--clr-brand); font-weight: 600; }
    .register-btn {
      display: flex; align-items: center;
      padding: 0.45rem 0.9rem; border-radius: 9999px;
      text-decoration: none; white-space: nowrap; min-height: 2.25rem;
      background: var(--clr-brand);
      color: oklch(100% 0 0); font-weight: 600; font-size: 0.875rem;
      box-shadow: 0 1px 4px color-mix(in oklch, var(--clr-brand) 30%, transparent);
      transition: background 0.2s var(--ease-out-expo), transform 0.15s var(--ease-out-expo), box-shadow 0.2s var(--ease-out-expo);
    }
    .register-btn:hover {
      background: var(--clr-brand-dark);
      transform: translateY(-1px);
      box-shadow: 0 3px 10px color-mix(in oklch, var(--clr-brand) 35%, transparent);
    }
    .register-btn:active { transform: translateY(0); }
    .register-btn.active { background: var(--clr-brand); }
    .logout-btn {
      display: flex; align-items: center; gap: 0.35rem;
      padding: 0.45rem 0.9rem; border-radius: 9999px;
      border: none; background: none; font-size: 0.875rem; font-weight: 500;
      color: var(--clr-error); cursor: pointer;
      transition: background 0.18s, color 0.18s;
      white-space: nowrap; min-height: 2.25rem; touch-action: manipulation;
    }
    .logout-btn svg { width: 0.9rem; height: 0.9rem; }
    .logout-btn:hover { background: var(--clr-error-bg); color: var(--clr-error-dark); }

    /* Theme toggle */
    .theme-toggle {
      display: flex; align-items: center; justify-content: center;
      width: 2.25rem; height: 2.25rem;
      border: none; background: none; border-radius: 9999px;
      color: var(--clr-text-muted); cursor: pointer;
      transition: background 0.18s, color 0.18s;
      touch-action: manipulation; flex-shrink: 0;
    }
    .theme-toggle svg { width: 1rem; height: 1rem; }
    .theme-toggle:hover { background: var(--clr-surface-hover); color: var(--clr-text); }

    /* Mobile toggle — hidden on desktop */
    .mobile-toggle {
      display: none;
      background: none; border: none;
      padding: 0.5rem; cursor: pointer;
      border-radius: 0.5rem;
      transition: background 0.2s;
      min-width: 2.75rem; min-height: 2.75rem;
      align-items: center; justify-content: center;
      touch-action: manipulation;
      order: -1;
    }
    .mobile-toggle:hover { background: var(--clr-surface-hover); }
    .hamburger {
      display: block; width: 1.25rem; height: 2px;
      background: var(--clr-text); position: relative;
      transition: background 0.18s var(--ease-out-expo);
    }
    .hamburger::before, .hamburger::after {
      content: ''; position: absolute; left: 0;
      width: 100%; height: 2px; background: var(--clr-text);
      transition: transform 0.32s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .hamburger::before { top: -6px; }
    .hamburger::after { top: 6px; }
    /* Morph to ✕: middle line fades, top/bottom rotate to converge at center */
    .mobile-toggle.open .hamburger { background: transparent; }
    .mobile-toggle.open .hamburger::before { transform: translateY(6px) rotate(45deg); }
    .mobile-toggle.open .hamburger::after  { transform: translateY(-6px) rotate(-45deg); }

    /* ── Drawer overlay (legacy — kept for click-out-to-close behaviour) ── */
    .drawer-overlay {
      position: fixed; inset: 0;
      background: rgba(28, 25, 23, 0.18);
      z-index: var(--z-overlay);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.4s var(--ease-out-expo);
    }
    .drawer-overlay.visible {
      opacity: 1;
      pointer-events: auto;
    }

    /* ── Mobile drawer — fullscreen takeover with warm-glass surface ─── */
    .mobile-drawer {
      display: none;
      position: fixed; inset: 0;
      width: 100%;
      height: 100dvh;
      background: color-mix(in oklch, var(--clr-surface) 96%, transparent);
      backdrop-filter: blur(28px) saturate(140%);
      -webkit-backdrop-filter: blur(28px) saturate(140%);
      z-index: var(--z-drawer);
      flex-direction: column;
      opacity: 0;
      pointer-events: none;
      transition:
        opacity 0.42s cubic-bezier(0.32, 0.72, 0, 1);
      overflow-y: auto;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55);
    }
    .mobile-drawer.open {
      opacity: 1;
      pointer-events: auto;
    }

    .drawer-header {
      display: flex; align-items: center;
      justify-content: space-between;
      padding: 1rem 0.75rem 1rem 1.25rem;
      border-bottom: 1px solid var(--clr-border-faint);
      flex-shrink: 0;
    }
    .drawer-header-actions { display: flex; align-items: center; gap: 0.25rem; }
    .drawer-brand {
      display: flex; align-items: center; gap: 0.5rem;
      text-decoration: none;
      font-family: var(--font-display); font-size: 0.95rem;
      font-weight: 700; color: var(--clr-text);
    }
    .drawer-brand svg { width: 1.4rem; height: 1.4rem; color: var(--clr-brand); flex-shrink: 0; }
    .drawer-close {
      background: none; border: none; cursor: pointer;
      padding: 0.4rem; border-radius: 0.5rem; color: var(--clr-text-muted);
      transition: background 0.2s, color 0.2s;
      min-width: 2.5rem; min-height: 2.5rem;
      display: flex; align-items: center; justify-content: center;
      touch-action: manipulation;
    }
    .drawer-close svg { width: 1.1rem; height: 1.1rem; }
    .drawer-close:hover { background: var(--clr-surface-hover); color: var(--clr-text); }

    .drawer-user {
      display: flex; align-items: center; gap: 0.75rem;
      padding: 1rem 1.25rem;
    }
    .drawer-avatar {
      width: 2.5rem; height: 2.5rem; border-radius: 50%;
      background: var(--clr-brand); color: oklch(100% 0 0);
      font-size: 1rem; font-weight: 700;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; text-transform: uppercase;
    }
    .drawer-user-info { display: flex; flex-direction: column; gap: 0.1rem; min-width: 0; }
    .drawer-user-name {
      font-size: 0.9rem; font-weight: 600; color: var(--clr-text);
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .drawer-user-role {
      font-size: 0.7rem; color: var(--clr-text-faint);
      text-transform: uppercase; letter-spacing: 0.05em;
    }

    .drawer-sep { height: 1px; background: var(--clr-border-faint); margin: 0 1.25rem; }

    .drawer-nav {
      display: flex; flex-direction: column;
      padding: 0.75rem;
      flex: 1;
      gap: 0.125rem;
    }
    .drawer-item {
      display: flex; align-items: center; gap: 0.75rem;
      padding: 0.75rem 0.75rem;
      border-radius: 0.75rem;
      text-decoration: none;
      font-size: 0.95rem; font-weight: 500;
      color: var(--clr-text);
      transition: background 0.18s, color 0.18s;
      touch-action: manipulation; min-height: 3rem;
    }
    .drawer-item svg { width: 1.15rem; height: 1.15rem; flex-shrink: 0; color: var(--clr-text-muted); }
    .drawer-item:hover { background: var(--clr-surface-hover); }
    .drawer-item.active {
      background: var(--clr-surface-active); color: var(--clr-brand); font-weight: 600;
    }
    .drawer-item.active svg { color: var(--clr-brand); }

    .drawer-footer {
      padding: 0.75rem; border-top: 1px solid var(--clr-border-faint);
      display: flex; flex-direction: column; gap: 0.5rem;
      flex-shrink: 0;
    }
    .drawer-logout {
      display: flex; align-items: center; gap: 0.75rem;
      padding: 0.75rem; border-radius: 0.75rem;
      border: none; background: none; width: 100%;
      font-size: 0.95rem; font-weight: 500; color: var(--clr-error);
      cursor: pointer; touch-action: manipulation; min-height: 3rem;
      transition: background 0.18s;
    }
    .drawer-logout svg { width: 1.15rem; height: 1.15rem; flex-shrink: 0; }
    .drawer-logout:hover { background: var(--clr-error-bg); }
    .drawer-signin {
      display: block; padding: 0.75rem 1rem; border-radius: 0.75rem;
      text-decoration: none; text-align: center;
      font-size: 0.95rem; font-weight: 500; color: var(--clr-text-muted);
      transition: background 0.18s;
    }
    .drawer-signin:hover { background: var(--clr-surface-hover); }
    .drawer-register {
      display: block; padding: 0.75rem 1rem; border-radius: 0.75rem;
      text-decoration: none; text-align: center;
      font-size: 0.95rem; font-weight: 600;
      background: var(--clr-brand);
      color: oklch(100% 0 0);
      transition: background 0.2s var(--ease-out-expo);
    }
    .drawer-register:hover { background: var(--clr-brand-dark); }

    @media (max-width: 768px) {
      .mobile-toggle { display: flex; }
      .nav-links { display: none; }
      .mobile-drawer { display: flex; }
      .site-header { padding-top: 0.75rem; top: 0.75rem; }
      .site-header.scrolled .header-inner { height: 3rem; }
      /* Header pill must stack above the fullscreen drawer so the morphed ✕
         remains accessible. */
      .site-header { z-index: calc(var(--z-drawer) + 1); }

      /* Staggered fade-up reveal of drawer items on open */
      .drawer-nav .drawer-item {
        opacity: 0;
        transform: translateY(18px);
      }
      .mobile-drawer.open .drawer-nav .drawer-item {
        animation: drawer-item-rise 520ms cubic-bezier(0.32, 0.72, 0, 1) forwards;
      }
      .mobile-drawer.open .drawer-nav .drawer-item:nth-child(1) { animation-delay: 140ms; }
      .mobile-drawer.open .drawer-nav .drawer-item:nth-child(2) { animation-delay: 195ms; }
      .mobile-drawer.open .drawer-nav .drawer-item:nth-child(3) { animation-delay: 250ms; }
      .mobile-drawer.open .drawer-nav .drawer-item:nth-child(4) { animation-delay: 305ms; }
      .mobile-drawer.open .drawer-nav .drawer-item:nth-child(5) { animation-delay: 360ms; }
      @keyframes drawer-item-rise {
        from { opacity: 0; transform: translateY(18px); filter: blur(4px); }
        to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
      }
    }
    @media (max-width: 400px) {
      .brand-text { font-size: 0.92rem; }
      .site-header { padding: 0.6rem 0.75rem 0; top: 0.6rem; }
      .header-inner { padding: 0 0.5rem 0 0.85rem; gap: 0.5rem; }
    }
    @media (prefers-reduced-motion: reduce) {
      .mobile-drawer, .drawer-overlay { transition: none; }
      .header-inner { transition: none; }
      .hamburger, .hamburger::before, .hamburger::after { transition: none; }
      .mobile-drawer.open .drawer-nav .drawer-item { animation: none; opacity: 1; transform: none; filter: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  auth = inject(AuthService);
  theme = inject(ThemeService);
  drawerOpen = signal(false);
  scrolled = signal(false);

  openDrawer(): void {
    this.drawerOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  toggleDrawer(): void {
    if (this.drawerOpen()) {
      this.close();
    } else {
      this.openDrawer();
    }
  }

  close(): void {
    this.drawerOpen.set(false);
    document.body.style.overflow = '';
  }

  userInitial(): string {
    const name = this.auth.user()?.name || '';
    return name.charAt(0).toUpperCase() || '?';
  }

  private scrollHandler = () => this.scrolled.set(window.scrollY > 30);

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
  }
  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
    document.body.style.overflow = '';
  }
}
