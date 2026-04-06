import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-brand">
            <span class="brand-icon">🍳</span>
            <span class="brand-name">Кулинарният блог на Иво</span>
            <p class="brand-tagline">Традиционни рецепти, споделени с любов.</p>
          </div>
          <nav class="footer-links">
            <span class="footer-nav-title">Навигация</span>
            <a routerLink="/">Начало</a>
            <a routerLink="/recipes">Рецепти</a>
            @if (!auth.isAuthenticated()) {
              <a routerLink="/signin">Вход</a>
              <a routerLink="/register">Регистрация</a>
            } @else {
              <a routerLink="/dashboard">Табло</a>
              <a routerLink="/profile">Профил</a>
            }
          </nav>
        </div>
        <div class="footer-bottom">
          <p class="copyright">© {{ currentYear }} Кулинарният блог на Иво. Всички права запазени.</p>
          <span class="footer-dot">·</span>
          <p class="made-with">Направено с ❤️ и добра храна</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      margin-top: auto;
      background: #000000;
      color: #a8a29e;
      padding: 3.5rem 1.5rem 2rem;
    }
    .footer-inner {
      max-width: 1200px;
      margin: 0 auto;
    }
    .footer-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 3rem;
      padding-bottom: 2.5rem;
      border-bottom: 1px solid rgba(255,255,255,0.07);
      margin-bottom: 1.75rem;
    }
    .footer-brand {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    .brand-icon { font-size: 1.6rem; }
    .brand-name {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 1.1rem;
      font-weight: 700;
      color: #fafaf9;
      letter-spacing: -0.01em;
    }
    .brand-tagline {
      font-size: 0.85rem;
      color: #78716c;
      margin: 0;
      max-width: 220px;
      line-height: 1.5;
    }
    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      min-width: 120px;
    }
    .footer-nav-title {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #57534e;
      margin-bottom: 0.25rem;
    }
    .footer-links a {
      color: #a8a29e;
      text-decoration: none;
      font-size: 0.875rem;
      transition: color 0.2s;
    }
    .footer-links a:hover { color: #fafaf9; }
    .footer-bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }
    .copyright, .made-with {
      font-size: 0.75rem;
      color: #ffffff;
      margin: 0;
    }
    .footer-dot { color: #ffffff; font-size: 1rem; }
    @media (max-width: 600px) {
      .footer-top { flex-direction: column; gap: 2rem; }
      .footer-links { flex-direction: row; flex-wrap: wrap; gap: 0.75rem 1.5rem; }
      .footer-nav-title { width: 100%; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  auth = inject(AuthService);
  currentYear = new Date().getFullYear();
}
