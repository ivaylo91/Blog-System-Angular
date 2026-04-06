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
        <div class="footer-brand">
          <span class="brand-icon">🍳</span>
          <span>Кулинарният блог на Иво</span>
        </div>
        <nav class="footer-links">
          <a routerLink="/">Начало</a>
          <a routerLink="/recipes">Рецепти</a>
          @if (!auth.isAuthenticated()) {
            <a routerLink="/signin">Вход</a>
            <a routerLink="/register">Регистрация</a>
          }
        </nav>
        <p class="copyright">© {{ currentYear }} Кулинарният блог на Иво. Всички права запазени.</p>
      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      margin-top: auto;
      background: #0f0e0d;
      color: #c4bdb6;
      padding: 3rem 1.5rem 2rem;
    }
    .footer-inner {
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }
    .footer-brand {
      font-family: 'Georgia', serif;
      font-size: 1.1rem;
      font-weight: 700;
      color: #fafaf9;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
    .brand-icon { font-size: 1.3rem; }
    .footer-links {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }
    .footer-links a {
      color: #c4bdb6;
      text-decoration: none;
      font-size: 0.875rem;
      transition: color 0.2s;
    }
    .footer-links a:hover { color: #ffffff; }
    .copyright {
      font-size: 0.75rem;
      color: #a8a29e;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  auth = inject(AuthService);
  currentYear = new Date().getFullYear();
}
