import { ChangeDetectionStrategy, Component, inject, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-header" [class.scrolled]="scrolled()">
      <div class="header-inner">

        <a routerLink="/" class="brand">
          <span class="brand-icon">🍳</span>
          <span class="brand-text">Кулинарният блог на Иво</span>
        </a>

        <button class="mobile-toggle" (click)="menuOpen = !menuOpen" [attr.aria-expanded]="menuOpen" aria-label="Меню">
          <span class="hamburger" [class.open]="menuOpen"></span>
        </button>

        <nav class="nav-links" [class.open]="menuOpen">
          <div class="nav-main">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="menuOpen = false">Начало</a>
            <a routerLink="/recipes" routerLinkActive="active" (click)="menuOpen = false">Рецепти</a>
            @if (auth.isAuthenticated()) {
              <a routerLink="/dashboard" routerLinkActive="active" (click)="menuOpen = false">Табло</a>
              <a routerLink="/profile" routerLinkActive="active" (click)="menuOpen = false">Профил</a>
            }
          </div>
          <div class="nav-auth">
            @if (auth.isAuthenticated()) {
              <button class="logout-btn" (click)="auth.logout(); menuOpen = false">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                Изход
              </button>
            } @else {
              <a routerLink="/signin" routerLinkActive="active" class="signin-link" (click)="menuOpen = false">Вход</a>
              <a routerLink="/register" routerLinkActive="active" class="register-btn" (click)="menuOpen = false">Регистрация</a>
            }
          </div>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .site-header {
      position: sticky;
      top: 0;
      z-index: 50;
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      transition: box-shadow 0.3s, border-color 0.3s, background 0.3s;
    }
    .site-header.scrolled {
      background: rgba(255, 255, 255, 0.97);
      box-shadow: 0 1px 3px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.07);
      border-bottom-color: rgba(0, 0, 0, 0.09);
    }
    .header-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      transition: height 0.3s;
    }
    .site-header.scrolled .header-inner { height: 3.25rem; }

    /* Brand */
    .brand {
      display: flex;
      align-items: center;
      gap: 0.55rem;
      text-decoration: none;
      flex-shrink: 0;
    }
    .brand-icon { font-size: 1.8rem; }
    .brand-text {
      font-family: 'Georgia', serif;
      font-size: 1.05rem;
      font-weight: 700;
      color: #1c1917;
      letter-spacing: -0.01em;
      white-space: nowrap;
    }

    /* Nav */
    .nav-links {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
    .nav-main {
      display: flex;
      align-items: center;
      gap: 0.1rem;
    }
    .nav-auth {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-left: 0.75rem;
      padding-left: 0.75rem;
      border-left: 1px solid #e7e5e4;
    }
    .nav-links a {
      padding: 0.4rem 0.85rem;
      border-radius: 9999px;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      color: #57534e;
      transition: background 0.18s, color 0.18s;
      white-space: nowrap;
    }
    .nav-links a:hover { background: #f5f0e8; color: #1c1917; }
    .nav-links a.active {
      background: #f5f0e8;
      color: #78350f;
      font-weight: 600;
    }

    .signin-link { color: #57534e; }
    .register-btn {
      background: linear-gradient(135deg, #78350f, #92400e) !important;
      color: #fff !important;
      font-weight: 600 !important;
      box-shadow: 0 1px 4px rgba(120,53,15,0.3);
      transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s !important;
    }
    .register-btn:hover {
      background: linear-gradient(135deg, #6c2d0c, #7c3a0c) !important;
      opacity: 0.93;
      transform: translateY(-1px);
      box-shadow: 0 3px 10px rgba(120,53,15,0.35) !important;
    }
    .register-btn.active { background: linear-gradient(135deg, #78350f, #92400e) !important; }

    .logout-btn {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.4rem 0.85rem;
      border-radius: 9999px;
      border: none;
      background: none;
      font-size: 0.875rem;
      font-weight: 500;
      color: #dc2626;
      cursor: pointer;
      transition: background 0.18s, color 0.18s;
      white-space: nowrap;
    }
    .logout-btn svg { width: 0.9rem; height: 0.9rem; }
    .logout-btn:hover { background: #fef2f2; color: #991b1b; }

    /* Mobile toggle */
    .mobile-toggle {
      display: none;
      background: none;
      border: none;
      padding: 0.4rem;
      cursor: pointer;
      border-radius: 0.5rem;
      transition: background 0.2s;
    }
    .mobile-toggle:hover { background: #f5f0e8; }
    .hamburger {
      display: block;
      width: 1.25rem;
      height: 2px;
      background: #1c1917;
      position: relative;
      transition: 0.25s;
    }
    .hamburger::before, .hamburger::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background: #1c1917;
      transition: 0.25s;
    }
    .hamburger::before { top: -6px; }
    .hamburger::after { top: 6px; }
    .hamburger.open { background: transparent; }
    .hamburger.open::before { top: 0; transform: rotate(45deg); }
    .hamburger.open::after { top: 0; transform: rotate(-45deg); }

    @media (max-width: 768px) {
      .mobile-toggle { display: block; }
      .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        align-items: stretch;
        background: #fff;
        padding: 0.75rem 1rem 1rem;
        border-bottom: 1px solid rgba(0,0,0,0.07);
        box-shadow: 0 16px 40px rgba(0,0,0,0.1);
        gap: 0.25rem;
      }
      .nav-links.open { display: flex; }
      .nav-main { flex-direction: column; align-items: stretch; width: 100%; gap: 0.25rem; }
      .nav-auth {
        flex-direction: column;
        align-items: stretch;
        margin-left: 0;
        padding-left: 0;
        border-left: none;
        border-top: 1px solid #f0ece6;
        padding-top: 0.75rem;
        margin-top: 0.5rem;
        gap: 0.25rem;
      }
      .nav-links a, .logout-btn {
        border-radius: 0.75rem;
        padding: 0.6rem 1rem;
        width: 100%;
        box-sizing: border-box;
        text-align: left;
      }
      .register-btn { text-align: center !important; }
      .site-header.scrolled .header-inner { height: 3.5rem; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  auth = inject(AuthService);
  menuOpen = false;
  scrolled = signal(false);

  private scrollHandler = () => {
    this.scrolled.set(window.scrollY > 30);
  };

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
  }
}
