import { ChangeDetectionStrategy, Component, ElementRef, inject, OnInit, OnDestroy, signal, viewChild } from '@angular/core';
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

        <button class="mobile-toggle" (click)="openDrawer()"
                aria-label="Отвори менюто" [attr.aria-expanded]="drawerOpen()">
          <span class="hamburger"></span>
        </button>

        <a routerLink="/" class="brand">
          <svg class="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"/><path d="M3 11h18v2a7 7 0 0 1-14 0H3z"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="17" x2="12" y2="20"/></svg>
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

    <div class="drawer-overlay" [class.visible]="drawerOpen()" (click)="close()" aria-hidden="true"></div>

    <div class="mobile-drawer" #drawer [class.open]="drawerOpen()"
         role="dialog" aria-modal="true" aria-label="Навигация"
         [attr.inert]="drawerOpen() ? null : ''">

      <div class="drawer-header">
        <a routerLink="/" class="drawer-brand" (click)="close()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"/><path d="M3 11h18v2a7 7 0 0 1-14 0H3z"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="17" x2="12" y2="20"/></svg>
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
    .site-header {
      position: sticky;
      top: 0;
      z-index: var(--z-sticky);
      background: var(--clr-surface);
      border-bottom: 1px solid var(--clr-border-faint);
      transition: box-shadow 0.28s var(--ease-out-expo), border-color 0.28s var(--ease-out-expo);
    }
    .site-header.scrolled {
      box-shadow: 0 1px 0 var(--clr-border-faint), 0 4px 20px rgba(26,20,14,0.06);
      border-bottom-color: var(--clr-border);
    }
    .header-inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 1.5rem;
      height: 3.75rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
    .site-header.scrolled .header-inner { height: 3.25rem; }

    /* Brand */
    .brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      flex-shrink: 0;
    }
    .brand-icon { width: 1.75rem; height: 1.75rem; flex-shrink: 0; color: var(--clr-brand); }
    .brand-text {
      font-family: var(--font-display);
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--clr-text);
      letter-spacing: -0.01em;
      white-space: nowrap;
      transition: color 0.2s;
    }
    .brand:hover .brand-text { color: var(--clr-brand); }

    .nav-links { display: flex; align-items: center; gap: 0.25rem; }
    .nav-main { display: none; }
    .nav-auth { display: flex; align-items: center; gap: 0.35rem; }

    .nav-links a:not(.register-btn) {
      padding: 0.4rem 0.85rem;
      border-radius: var(--radius-pill);
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--clr-text-muted);
      transition: background 0.16s, color 0.16s;
      white-space: nowrap;
      min-height: 2.25rem;
      display: flex;
      align-items: center;
    }
    .nav-links a:not(.register-btn):hover { background: var(--clr-surface-hover); color: var(--clr-text); }
    .nav-links a:not(.register-btn).active { background: var(--clr-surface-active); color: var(--clr-brand); font-weight: 600; }

    .register-btn {
      display: flex;
      align-items: center;
      padding: 0.4rem 1rem;
      border-radius: var(--radius-pill);
      text-decoration: none;
      white-space: nowrap;
      min-height: 2.25rem;
      background: var(--clr-brand);
      color: oklch(100% 0 0);
      font-weight: 600;
      font-size: 0.875rem;
      transition: background 0.18s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);
    }
    .register-btn:hover { background: var(--clr-brand-dark); transform: translateY(-1px); }
    .register-btn:active { transform: translateY(0); }
    .register-btn.active { background: var(--clr-brand); }

    .logout-btn {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.4rem 0.85rem;
      border-radius: var(--radius-pill);
      border: none;
      background: none;
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--clr-error);
      cursor: pointer;
      transition: background 0.16s;
      white-space: nowrap;
      min-height: 2.25rem;
      touch-action: manipulation;
    }
    .logout-btn svg { width: 0.9rem; height: 0.9rem; }
    .logout-btn:hover { background: var(--clr-error-bg); color: var(--clr-error-dark); }

    .theme-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.25rem;
      height: 2.25rem;
      border: none;
      background: none;
      border-radius: var(--radius-circle);
      color: var(--clr-text-muted);
      cursor: pointer;
      transition: background 0.16s, color 0.16s;
      touch-action: manipulation;
      flex-shrink: 0;
    }
    .theme-toggle svg { width: 1rem; height: 1rem; }
    .theme-toggle:hover { background: var(--clr-surface-hover); color: var(--clr-text); }

    .mobile-toggle {
      display: flex;
      background: none;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      border-radius: var(--radius-xs);
      transition: background 0.16s;
      min-width: 2.75rem;
      min-height: 2.75rem;
      align-items: center;
      justify-content: center;
      touch-action: manipulation;
      order: -1;
    }
    .mobile-toggle:hover { background: var(--clr-surface-hover); }
    .hamburger {
      display: block;
      width: 1.2rem;
      height: 1.5px;
      background: var(--clr-text);
      position: relative;
    }
    .hamburger::before, .hamburger::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 1.5px;
      background: var(--clr-text);
    }
    .hamburger::before { top: -5px; }
    .hamburger::after  { top: 5px; }

    /* Drawer overlay */
    .drawer-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.45);
      z-index: var(--z-overlay);
      backdrop-filter: blur(2px);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.26s var(--ease-out-expo);
    }
    .drawer-overlay.visible { opacity: 1; pointer-events: auto; }

    /* Drawer */
    .mobile-drawer {
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      width: 300px;
      max-width: 85vw;
      height: 100vh;
      height: 100dvh;
      background: var(--clr-surface);
      z-index: var(--z-drawer);
      flex-direction: column;
      transform: translateX(-100%);
      transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);
      box-shadow: 2px 0 32px rgba(26, 20, 14, 0.16);
      overflow-y: auto;
    }
    .mobile-drawer.open { transform: translateX(0); }

    .drawer-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0.75rem 1rem 1.25rem;
      border-bottom: 1px solid var(--clr-border-faint);
      flex-shrink: 0;
    }
    .drawer-header-actions { display: flex; align-items: center; gap: 0.25rem; }
    .drawer-brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      font-family: var(--font-display);
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--clr-text);
    }
    .drawer-brand svg { width: 1.3rem; height: 1.3rem; color: var(--clr-brand); flex-shrink: 0; }
    .drawer-close {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.4rem;
      border-radius: var(--radius-xs);
      color: var(--clr-text-muted);
      transition: background 0.16s, color 0.16s;
      min-width: 2.25rem;
      min-height: 2.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      touch-action: manipulation;
    }
    .drawer-close svg { width: 1rem; height: 1rem; }
    .drawer-close:hover { background: var(--clr-surface-hover); color: var(--clr-text); }

    .drawer-user {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 1.25rem;
    }
    .drawer-avatar {
      width: 2.25rem;
      height: 2.25rem;
      border-radius: var(--radius-circle);
      background: var(--clr-brand);
      color: oklch(100% 0 0);
      font-size: 0.9rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      text-transform: uppercase;
    }
    .drawer-user-info { display: flex; flex-direction: column; gap: 0.1rem; min-width: 0; }
    .drawer-user-name {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--clr-text);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .drawer-user-role {
      font-size: 0.68rem;
      color: var(--clr-text-faint);
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .drawer-sep { height: 1px; background: var(--clr-border-faint); margin: 0 1.25rem; }

    .drawer-nav {
      display: flex;
      flex-direction: column;
      padding: 0.5rem;
      flex: 1;
      gap: 0.1rem;
    }
    .drawer-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.7rem 0.75rem;
      border-radius: var(--radius-sm);
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--clr-text);
      transition: background 0.16s, color 0.16s;
      touch-action: manipulation;
      min-height: 2.75rem;
    }
    .drawer-item svg { width: 1.05rem; height: 1.05rem; flex-shrink: 0; color: var(--clr-text-muted); }
    .drawer-item:hover { background: var(--clr-surface-hover); }
    .drawer-item.active { background: var(--clr-surface-active); color: var(--clr-brand); font-weight: 600; }
    .drawer-item.active svg { color: var(--clr-brand); }

    .drawer-footer {
      padding: 0.75rem;
      border-top: 1px solid var(--clr-border-faint);
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      flex-shrink: 0;
    }
    .drawer-logout {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.7rem 0.75rem;
      border-radius: var(--radius-sm);
      border: none;
      background: none;
      width: 100%;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--clr-error);
      cursor: pointer;
      touch-action: manipulation;
      min-height: 2.75rem;
      transition: background 0.16s;
    }
    .drawer-logout svg { width: 1.05rem; height: 1.05rem; flex-shrink: 0; }
    .drawer-logout:hover { background: var(--clr-error-bg); }

    .drawer-signin {
      display: block;
      padding: 0.7rem 1rem;
      border-radius: var(--radius-sm);
      text-decoration: none;
      text-align: center;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--clr-text-muted);
      transition: background 0.16s;
    }
    .drawer-signin:hover { background: var(--clr-surface-hover); }
    .drawer-register {
      display: block;
      padding: 0.7rem 1rem;
      border-radius: var(--radius-sm);
      text-decoration: none;
      text-align: center;
      font-size: 0.9rem;
      font-weight: 600;
      background: var(--clr-brand);
      color: oklch(100% 0 0);
      transition: background 0.18s var(--ease-out-expo);
    }
    .drawer-register:hover { background: var(--clr-brand-dark); }

    /* Desktop: reveal main nav, hide hamburger */
    @media (min-width: 900px) {
      .mobile-toggle { display: none; }
      .nav-main {
        display: flex;
        align-items: center;
        gap: 0.15rem;
        margin-right: 0.5rem;
      }
      .nav-auth { display: flex; }
    }

    /* Mobile: keep theme toggle visible in the header bar; hide auth links */
    @media (max-width: 640px) {
      .nav-auth .signin-link,
      .nav-auth .register-btn,
      .nav-auth .logout-btn { display: none; }
    }
    @media (max-width: 400px) {
      .brand-text { font-size: 0.88rem; max-width: 150px; overflow: hidden; text-overflow: ellipsis; }
      .header-inner { padding: 0 1rem; }
    }
    @media (max-width: 360px) {
      .brand-text { display: none; }
    }
    @media (prefers-reduced-motion: reduce) {
      .mobile-drawer, .drawer-overlay { transition: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  auth = inject(AuthService);
  theme = inject(ThemeService);
  drawerOpen = signal(false);
  scrolled = signal(false);

  private drawerEl = viewChild<ElementRef<HTMLElement>>('drawer');
  private triggerEl: HTMLElement | null = null;

  openDrawer(): void {
    this.triggerEl = document.activeElement as HTMLElement | null;
    this.drawerOpen.set(true);
    document.body.style.overflow = 'hidden';
    queueMicrotask(() => this.getFocusableElements()[0]?.focus());
  }

  close(): void {
    if (!this.drawerOpen()) return;
    this.drawerOpen.set(false);
    document.body.style.overflow = '';
    this.triggerEl?.focus();
    this.triggerEl = null;
  }

  userInitial(): string {
    const name = this.auth.user()?.name || '';
    return name.charAt(0).toUpperCase() || '?';
  }

  private getFocusableElements(): HTMLElement[] {
    const root = this.drawerEl()?.nativeElement;
    if (!root) return [];
    const selector = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';
    return Array.from(root.querySelectorAll<HTMLElement>(selector))
      .filter(el => el.offsetParent !== null);
  }

  private scrollHandler = () => this.scrolled.set(window.scrollY > 30);
  private keydownHandler = (e: KeyboardEvent) => {
    if (!this.drawerOpen()) return;
    if (e.key === 'Escape') { e.preventDefault(); this.close(); return; }
    if (e.key === 'Tab') {
      const focusable = this.getFocusableElements();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && (active === first || !this.drawerEl()?.nativeElement.contains(active))) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault(); first.focus();
      }
    }
  };

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    document.addEventListener('keydown', this.keydownHandler);
  }
  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
    document.removeEventListener('keydown', this.keydownHandler);
    document.body.style.overflow = '';
  }
}
