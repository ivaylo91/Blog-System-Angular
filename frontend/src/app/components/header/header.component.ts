import { ChangeDetectionStrategy, Component, ElementRef, inject, OnInit, OnDestroy, signal, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">

      <!-- Mobile hamburger (only shown on small screens) -->
      <button class="mobile-toggle" (click)="openDrawer()"
              aria-label="Отвори менюто" [attr.aria-expanded]="drawerOpen()">
        <span class="hamburger"></span>
      </button>

      <!-- ── Masthead: three-column newspaper layout ── -->
      <div class="masthead">

        <!-- Left: typewriter date stamp -->
        <div class="stamp" aria-hidden="true">
          <div>том III · стр. 247</div>
          <div>всекидневна кухня</div>
        </div>

        <!-- Center: wordmark -->
        <a routerLink="/" class="wordmark">
          <span class="wordmark-by">Кулинарният блог на</span>
          <span class="wordmark-name">Иво</span>
          <span class="wordmark-rule">
            <span class="rule-line"></span>
            всекидневна кухня
            <span class="rule-line"></span>
          </span>
        </a>

        <!-- Right: auth -->
        <div class="masthead-right">
          @if (auth.isAuthenticated()) {
            <button class="avatar-btn" routerLink="/dashboard" [title]="auth.user()?.email || ''">
              {{ userInitial() }}
            </button>
            <button class="logout-btn" (click)="auth.logout()">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              Изход
            </button>
          } @else {
            <a routerLink="/signin" class="signin-link">вход</a>
            <a routerLink="/register" class="register-btn">регистрация</a>
          }
        </div>
      </div>

      <!-- ── Navigation rail ── -->
      <nav class="nav-rail" aria-label="Основна навигация">
        <ul>
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Начало</a></li>
          <li><a routerLink="/recipes" routerLinkActive="active">Рецепти</a></li>
          <li><a routerLink="/categories" routerLinkActive="active">Категории</a></li>
          @if (auth.isAuthenticated()) {
            <li><a routerLink="/dashboard" routerLinkActive="active">Табло</a></li>
            <li><a routerLink="/profile" routerLinkActive="active">Профил</a></li>
          }
        </ul>
      </nav>
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
    /* ── Site header — warm paper with red margin line ── */
    .site-header {
      position: sticky;
      top: 0;
      z-index: var(--z-sticky);
      background: var(--paper);
      border-left: 3px solid var(--pencil-red);
    }

    /* ── Mobile hamburger ── */
    .mobile-toggle {
      display: flex;
      position: absolute;
      top: 0.75rem;
      left: 1rem;
      background: none;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      min-width: 2.75rem;
      min-height: 2.75rem;
      align-items: center;
      justify-content: center;
      touch-action: manipulation;
      z-index: 2;
    }
    .hamburger {
      display: block;
      width: 1.2rem;
      height: 1.5px;
      background: var(--ink);
      position: relative;
    }
    .hamburger::before, .hamburger::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 1.5px;
      background: var(--ink);
    }
    .hamburger::before { top: -5px; }
    .hamburger::after  { top: 5px; }

    /* ── Masthead (three-column) ── */
    .masthead {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 1.5rem;
      max-width: 1180px;
      margin: 0 auto;
      padding: 1.4rem 2rem 0.6rem;
    }

    /* Left stamp */
    .stamp {
      font-family: var(--font-type);
      font-size: 0.68rem;
      letter-spacing: 0.18em;
      color: var(--ink-mute);
      text-transform: uppercase;
      line-height: 1.6;
    }

    /* Center wordmark */
    .wordmark {
      text-decoration: none;
      color: inherit;
      text-align: center;
      display: block;
    }
    .wordmark-by {
      display: block;
      font-family: var(--font-hand);
      font-size: 1.05rem;
      color: var(--pencil-red);
      transform: rotate(-2deg);
      display: inline-block;
      margin-bottom: 0.1rem;
    }
    .wordmark-name {
      display: block;
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 700;
      font-size: clamp(2.6rem, 5vw, 3.5rem);
      letter-spacing: -0.01em;
      line-height: 0.95;
      color: var(--ink);
    }
    .wordmark-rule {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.625rem;
      margin-top: 0.375rem;
      font-family: var(--font-type);
      font-size: 0.62rem;
      letter-spacing: 0.3em;
      color: var(--ink-mute);
      text-transform: uppercase;
    }
    .rule-line {
      display: inline-block;
      height: 1px;
      width: 2.25rem;
      background: var(--rule-strong);
    }

    /* Right: auth */
    .masthead-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 0.625rem;
    }
    .avatar-btn {
      width: 2.375rem;
      height: 2.375rem;
      border-radius: 50%;
      background: linear-gradient(135deg, #c8703f, #6b7a3a);
      color: var(--paper);
      border: 2px solid var(--paper);
      box-shadow: 0 0 0 1px var(--rule-strong);
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 700;
      font-size: 1.1rem;
      cursor: pointer;
      text-transform: uppercase;
    }
    .signin-link {
      background: transparent;
      border: none;
      font-family: var(--font-type);
      font-size: 0.68rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--ink-soft);
      cursor: pointer;
      padding: 0.5rem 0.25rem;
      text-decoration: none;
    }
    .signin-link:hover { color: var(--terracotta); }
    .register-btn {
      background: var(--ink);
      color: var(--paper);
      border: none;
      padding: 0.55rem 0.875rem;
      font-family: var(--font-type);
      font-size: 0.68rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      transition: background 0.18s;
    }
    .register-btn:hover { background: var(--terracotta-2); }
    .logout-btn {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      background: transparent;
      border: none;
      font-family: var(--font-type);
      font-size: 0.68rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--pencil-red);
      cursor: pointer;
      padding: 0.5rem 0.25rem;
    }
    .logout-btn svg { width: 0.8rem; height: 0.8rem; }
    .logout-btn:hover { color: var(--terracotta-2); }

    /* ── Navigation rail ── */
    .nav-rail {
      border-top: 1px solid var(--rule-strong);
      border-bottom: 2px double var(--rule-strong);
      background: rgba(255, 245, 215, .35);
    }
    .nav-rail ul {
      max-width: 1180px;
      margin: 0 auto;
      padding: 0.625rem 2rem;
      list-style: none;
      display: flex;
      gap: 1.75rem;
      justify-content: center;
    }
    .nav-rail a {
      text-decoration: none;
      font-family: var(--font-type);
      font-size: 0.75rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--ink-soft);
      padding-bottom: 0.25rem;
      position: relative;
      transition: color 0.2s;
    }
    .nav-rail a::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--terracotta);
      transform: scaleX(0);
      transform-origin: left center;
      transition: transform 0.22s var(--ease-out-expo);
    }
    .nav-rail a:hover { color: var(--terracotta-2); }
    .nav-rail a:hover::after { transform: scaleX(0.6); }
    .nav-rail a.active { color: var(--terracotta-2); }
    .nav-rail a.active::after { transform: scaleX(1); }

    /* ── Drawer overlay ── */
    .drawer-overlay {
      position: fixed;
      inset: 0;
      background: rgba(42, 34, 26, 0.55);
      z-index: var(--z-overlay);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.26s var(--ease-out-expo);
    }
    .drawer-overlay.visible { opacity: 1; pointer-events: auto; }

    /* ── Mobile drawer ── */
    .mobile-drawer {
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      width: 300px;
      max-width: 85vw;
      height: 100vh;
      height: 100dvh;
      background: var(--paper);
      border-right: 3px solid var(--pencil-red);
      z-index: var(--z-drawer);
      flex-direction: column;
      transform: translateX(-100%);
      transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);
      box-shadow: 4px 0 32px rgba(42, 34, 26, 0.18);
      overflow-y: auto;
    }
    .mobile-drawer.open { transform: translateX(0); }

    .drawer-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0.75rem 1rem 1.25rem;
      border-bottom: 1px solid var(--rule-strong);
      flex-shrink: 0;
    }
    .drawer-header-actions { display: flex; align-items: center; gap: 0.25rem; }
    .drawer-brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--ink);
    }
    .drawer-close {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.4rem;
      color: var(--ink-mute);
      transition: color 0.16s;
      min-width: 2.25rem;
      min-height: 2.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      touch-action: manipulation;
    }
    .drawer-close svg { width: 1rem; height: 1rem; }
    .drawer-close:hover { color: var(--ink); }

    .drawer-user {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 1.25rem;
    }
    .drawer-avatar {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background: linear-gradient(135deg, #c8703f, #6b7a3a);
      color: var(--paper);
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 700;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      text-transform: uppercase;
    }
    .drawer-user-info { display: flex; flex-direction: column; gap: 0.1rem; min-width: 0; }
    .drawer-user-name {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1rem;
      font-weight: 600;
      color: var(--ink);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .drawer-user-role {
      font-family: var(--font-type);
      font-size: 0.6rem;
      color: var(--ink-mute);
      text-transform: uppercase;
      letter-spacing: 0.15em;
    }

    .drawer-sep { height: 1px; background: var(--rule); margin: 0 1.25rem; }

    .drawer-nav {
      display: flex;
      flex-direction: column;
      padding: 0.75rem 0.5rem;
      flex: 1;
      gap: 0.1rem;
    }
    .drawer-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 0.875rem;
      text-decoration: none;
      font-family: var(--font-type);
      font-size: 0.75rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--ink-soft);
      transition: background 0.16s, color 0.16s;
      touch-action: manipulation;
      min-height: 2.75rem;
      border-bottom: 1px dashed transparent;
    }
    .drawer-item svg { width: 1rem; height: 1rem; flex-shrink: 0; color: var(--ink-mute); }
    .drawer-item:hover { background: var(--clr-surface-hover); color: var(--ink); }
    .drawer-item.active { color: var(--terracotta-2); border-bottom-color: var(--rule); }
    .drawer-item.active svg { color: var(--terracotta); }

    .drawer-footer {
      padding: 0.875rem;
      border-top: 1px solid var(--rule-strong);
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      flex-shrink: 0;
    }
    .drawer-logout {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.7rem 0.875rem;
      border: none;
      background: none;
      width: 100%;
      font-family: var(--font-type);
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--pencil-red);
      cursor: pointer;
      touch-action: manipulation;
      min-height: 2.75rem;
      transition: background 0.16s;
    }
    .drawer-logout svg { width: 1rem; height: 1rem; flex-shrink: 0; }
    .drawer-logout:hover { background: var(--clr-error-bg); }

    .drawer-signin {
      display: block;
      padding: 0.7rem 1rem;
      text-decoration: none;
      text-align: center;
      font-family: var(--font-type);
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--ink-soft);
      transition: color 0.16s;
    }
    .drawer-signin:hover { color: var(--terracotta); }
    .drawer-register {
      display: block;
      padding: 0.7rem 1rem;
      text-decoration: none;
      text-align: center;
      font-family: var(--font-type);
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      background: var(--ink);
      color: var(--paper);
      transition: background 0.18s;
    }
    .drawer-register:hover { background: var(--terracotta-2); }

    /* ── Desktop: hide hamburger, show masthead ── */
    @media (min-width: 900px) {
      .mobile-toggle { display: none; }
      .masthead { display: grid; }
    }

    /* ── Mobile: compact header — drawer handles nav + auth ── */
    @media (max-width: 899px) {
      .masthead {
        grid-template-columns: 1fr;
        justify-items: center;
        padding: 0.75rem 1.5rem 0.625rem;
        gap: 0.1rem;
      }
      .stamp         { display: none; }
      .masthead-right { display: none; }   /* drawer handles auth */
      .nav-rail       { display: none; }   /* drawer handles nav */
      .wordmark-by   { font-size: 0.7rem; margin-bottom: 0; }
      .wordmark-name { font-size: 1.85rem; }
      .wordmark-rule { display: none; }
    }
    @media (max-width: 480px) {
      .wordmark-name { font-size: 1.65rem; }
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
