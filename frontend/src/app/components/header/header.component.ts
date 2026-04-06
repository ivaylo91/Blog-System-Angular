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

        <button class="mobile-toggle" (click)="menuOpen = !menuOpen" [attr.aria-expanded]="menuOpen">
          <span class="hamburger" [class.open]="menuOpen"></span>
        </button>

        <nav class="nav-links" [class.open]="menuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="menuOpen = false">Начало</a>
          <a routerLink="/recipes" routerLinkActive="active" (click)="menuOpen = false">Рецепти</a>

          @if (auth.isAuthenticated()) {
            <a routerLink="/dashboard" routerLinkActive="active" (click)="menuOpen = false">Табло</a>
            <a routerLink="/profile" routerLinkActive="active" (click)="menuOpen = false">Профил</a>
            <button class="logout-btn" (click)="auth.logout(); menuOpen = false">Изход</button>
          } @else {
            <a routerLink="/signin" routerLinkActive="active" (click)="menuOpen = false">Вход</a>
            <a routerLink="/register" routerLinkActive="active" (click)="menuOpen = false">Регистрация</a>
          }
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .site-header {
      position: sticky;
      top: 0;
      z-index: 50;
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.07);
      transition: box-shadow 0.3s ease, border-color 0.3s ease;
    }
    .site-header.scrolled {
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      border-bottom-color: rgba(0, 0, 0, 0.12);
    }
    .header-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: height 0.3s ease;
    }
    .site-header.scrolled .header-inner {
      height: 3.25rem;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 1.15rem;
      font-weight: 700;
      color: #1c1917;
      letter-spacing: -0.01em;
    }
    .brand-icon { font-size: 1.4rem; }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 0.2rem;
    }
    .nav-links a, .logout-btn {
      padding: 0.45rem 0.9rem;
      border-radius: 9999px;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      color: #44403c;
      transition: all 0.2s;
      border: none;
      background: none;
      cursor: pointer;
      letter-spacing: 0.01em;
    }
    .nav-links a:hover, .logout-btn:hover {
      background: #f0ede8;
      color: #1c1917;
    }
    .nav-links a.active {
      background: #4a7c59;
      color: #fff;
      font-weight: 600;
    }
    .logout-btn {
      color: #dc2626;
    }
    .logout-btn:hover {
      background: #fef2f2;
      color: #991b1b;
    }
    .mobile-toggle {
      display: none;
      background: none;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
    }
    .hamburger {
      display: block;
      width: 1.25rem;
      height: 2px;
      background: #1c1917;
      position: relative;
      transition: 0.3s;
    }
    .hamburger::before, .hamburger::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background: #1c1917;
      transition: 0.3s;
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
        top: 4rem;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        padding: 1rem;
        border-bottom: 1px solid rgba(0,0,0,0.08);
        box-shadow: 0 12px 32px rgba(0,0,0,0.12);
      }
      .nav-links.open { display: flex; }
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
