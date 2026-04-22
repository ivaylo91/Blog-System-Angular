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
            <a routerLink="/" class="brand-logo">
              <svg class="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"/><path d="M3 11h18v2a7 7 0 0 1-14 0H3z"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="17" x2="12" y2="20"/></svg>
              <span class="brand-name">Кулинарният блог на Иво</span>
            </a>
            <p class="brand-tagline">Традиционни рецепти, споделени с любов и страст към доброто готвене.</p>
          </div>

          <div class="footer-cols">
            <div class="footer-col">
              <span class="col-title">Навигация</span>
              <a routerLink="/">Начало</a>
              <a routerLink="/recipes">Всички рецепти</a>
              @if (auth.isAuthenticated()) {
                <a routerLink="/dashboard">Табло</a>
                <a routerLink="/profile">Профил</a>
              } @else {
                <a routerLink="/signin">Вход</a>
                <a routerLink="/register">Регистрация</a>
              }
            </div>
          </div>
        </div>

        <div class="footer-quote">
          <svg class="quote-icon" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm16 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z"/></svg>
          <p>Готвенето е любов, превърната в ястие.</p>
        </div>

        <div class="footer-bottom">
          <p class="copyright">© {{ currentYear }} Кулинарният блог на Иво</p>
          <span class="footer-sep"></span>
          <a routerLink="/privacy" class="privacy-link">Политика за поверителност</a>
          <span class="footer-sep"></span>
          <p class="made-with">
            Направено с
            <svg class="heart" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            и добра храна
          </p>
        </div>

      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      margin-top: auto;
      background: oklch(14% 0.008 50);
      color: oklch(60% 0.01 50);
      border-top: 3px solid var(--clr-brand);
    }
    .footer-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 3rem 1.5rem 1.75rem;
    }

    .footer-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 3rem;
      padding-bottom: 2.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      margin-bottom: 1.5rem;
    }

    /* Brand */
    .footer-brand {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      max-width: 260px;
    }
    .brand-logo {
      display: flex;
      align-items: center;
      gap: 0.55rem;
      text-decoration: none;
    }
    .brand-icon { width: 1.75rem; height: 1.75rem; flex-shrink: 0; color: var(--clr-brand); }
    .brand-name {
      font-family: var(--font-display);
      font-size: 1.05rem;
      font-weight: 700;
      color: oklch(94% 0.005 65);
      letter-spacing: -0.01em;
    }
    .brand-tagline {
      font-size: 0.83rem;
      color: oklch(60% 0.01 50);
      margin: 0;
      line-height: 1.6;
    }

    /* Columns */
    .footer-cols {
      display: flex;
      gap: 3rem;
    }
    .footer-col {
      display: flex;
      flex-direction: column;
      gap: 0.55rem;
      min-width: 110px;
    }
    .col-title {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: oklch(50% 0.01 50);
      margin-bottom: 0.25rem;
    }
    .footer-col a {
      color: oklch(60% 0.01 50);
      text-decoration: none;
      font-size: 0.875rem;
      transition: color 0.2s;
      touch-action: manipulation;
    }
    .footer-col a:hover { color: oklch(94% 0.005 65); }

    /* Quote */
    .footer-quote {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      padding: 1.5rem 0 2rem;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      margin-bottom: 1.5rem;
    }
    .quote-icon {
      width: 1.5rem;
      height: 1.5rem;
      flex-shrink: 0;
      color: var(--clr-brand);
      opacity: 0.6;
      margin-top: 0.1rem;
    }
    .footer-quote p {
      font-family: var(--font-display);
      font-size: 1.05rem;
      font-style: italic;
      color: oklch(72% 0.01 55);
      margin: 0;
      line-height: 1.5;
      letter-spacing: 0.01em;
    }

    /* Bottom */
    .footer-bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .copyright {
      font-size: 0.78rem;
      color: oklch(45% 0.008 50);
      margin: 0;
    }
    .footer-sep {
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: oklch(30% 0.008 50);
    }
    .privacy-link {
      font-size: 0.78rem;
      color: oklch(45% 0.008 50);
      text-decoration: none;
      transition: color 0.2s;
    }
    .privacy-link:hover { color: oklch(70% 0.01 50); }
    .made-with {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.78rem;
      color: oklch(45% 0.008 50);
      margin: 0;
    }
    .heart {
      width: 0.8rem;
      height: 0.8rem;
      color: var(--clr-error);
    }

    @media (max-width: 600px) {
      .footer-inner { padding: 2.5rem 1.25rem 1.5rem; }
      .footer-top { flex-direction: column; gap: 1.5rem; padding-bottom: 1.75rem; }
      .footer-brand { max-width: 100%; }
      .footer-cols { gap: 1.5rem; }
      .footer-col { flex-direction: column; gap: 0; }
      .col-title { margin-bottom: 0.25rem; }
      .footer-col a {
        padding: 0.65rem 0;
        font-size: 0.95rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        min-height: 2.75rem;
        display: flex;
        align-items: center;
      }
      .footer-col a:last-child { border-bottom: none; }
      .footer-bottom { gap: 0.5rem; flex-direction: column; }
      .footer-sep { display: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  auth = inject(AuthService);
  currentYear = new Date().getFullYear();
}
