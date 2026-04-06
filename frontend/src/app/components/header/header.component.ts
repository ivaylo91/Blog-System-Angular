import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
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
      background: rgba(255, 255, 255, 0.97);
      backdrop-filter: blur(12px);
      border-bottom: 2px solid rgba(0, 0, 0, 0.12);
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
    }
    .header-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      font-family: 'Georgia', serif;
      font-size: 1.2rem;
      font-weight: 700;
      color: #1c1917;
    }
    .brand-icon { font-size: 1.5rem; }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
    .nav-links a, .logout-btn {
      padding: 0.5rem 1rem;
      border-radius: 9999px;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 600;
      color: #292524;
      transition: all 0.2s;
      border: none;
      background: none;
      cursor: pointer;
    }
    .nav-links a:hover, .logout-btn:hover {
      background: #e8e3dc;
      color: #1c1917;
    }
    .nav-links a.active {
      background: #fef3c7;
      color: #78350f;
      border: 1px solid rgba(120, 53, 15, 0.2);
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
        border-bottom: 2px solid rgba(0,0,0,0.12);
        box-shadow: 0 8px 24px rgba(0,0,0,0.15);
      }
      .nav-links.open { display: flex; }
    }
  `],
})
export class HeaderComponent {
  auth = inject(AuthService);
  menuOpen = false;
}
