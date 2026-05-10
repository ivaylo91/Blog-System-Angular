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

        <!-- Brand -->
        <div class="footer-brand">
          <a routerLink="/" class="brand-name">Кулинарният блог на Иво</a>
          <p class="brand-tagline">Благодаря, че ме посети</p>
          <div class="brand-rule" aria-hidden="true">
            <span class="brand-rule-dot"></span>
            <span class="brand-rule-dot"></span>
            <span class="brand-rule-dot"></span>
          </div>
        </div>

        <!-- Nav columns -->
        <nav class="footer-nav" aria-label="Footer navigation">
          <div class="nav-col">
            <span class="nav-title">Меню</span>
            <a routerLink="/">Начало</a>
            <a routerLink="/recipes">Рецепти</a>
            <a routerLink="/categories">Категории</a>
            @if (auth.isAuthenticated()) {
              <a routerLink="/dashboard">Табло</a>
              <a routerLink="/profile">Профил</a>
            } @else {
              <a routerLink="/signin">Вход</a>
              <a routerLink="/register">Регистрация</a>
            }
          </div>
          <div class="nav-col">
            <span class="nav-title">Информация</span>
            <a routerLink="/privacy">Поверителност</a>
            <span class="nav-copy">© {{ currentYear }} Кулинарният блог на Иво</span>
          </div>
        </nav>

        <!-- Social icons -->
        <div class="footer-social">
          <span class="nav-title">Намери ни</span>
          <div class="social-list">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1e1710"/></svg>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Pinterest">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      background: var(--clr-footer-bg);
      color: var(--clr-footer-text);
      border-top: 3px solid var(--pencil-red);
      position: relative;
      overflow: hidden;
    }

    /* paper grain on dark background */
    .site-footer::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 0;
    }

    .footer-inner {
      position: relative;
      z-index: 1;
      max-width: 1200px;
      margin: 0 auto;
      padding: 3.5rem 2.5rem 2.75rem;
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 4.5rem;
      align-items: start;
    }

    /* ── Brand ──────────────────────────────────────────── */
    .footer-brand {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
    }

    .brand-name {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--clr-footer-text-bright);
      text-decoration: none;
      line-height: 1.15;
      transition: color 0.18s;
    }
    .brand-name:hover { color: var(--mustard); }

    .brand-tagline {
      font-family: var(--font-hand);
      font-size: 1rem;
      color: var(--clr-footer-quote);
      margin: 0;
      line-height: 1.3;
    }

    .brand-rule {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 0.25rem;
    }
    .brand-rule::before,
    .brand-rule::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--clr-footer-sep);
      max-width: 2.5rem;
    }
    .brand-rule-dot {
      width: 4px;
      height: 4px;
      background: var(--clr-footer-text-faint);
      border-radius: 50%;
    }

    /* ── Nav columns ─────────────────────────────────────── */
    .footer-nav {
      display: flex;
      gap: 3.5rem;
      justify-content: center;
    }

    .nav-col {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
    }

    .nav-title {
      font-family: var(--font-type);
      font-size: 0.6rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--clr-footer-text-bright);
      margin-bottom: 0.25rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px dashed var(--clr-footer-sep);
    }

    .nav-col a {
      font-family: var(--font-body);
      color: var(--clr-footer-text);
      text-decoration: none;
      font-size: 0.88rem;
      line-height: 1.45;
      transition: color 0.18s;
    }
    .nav-col a:hover { color: var(--clr-footer-text-bright); }
    .nav-col a:focus-visible {
      outline: 2px solid var(--mustard);
      outline-offset: 2px;
    }

    .nav-copy {
      font-family: var(--font-type);
      font-size: 0.62rem;
      letter-spacing: 0.1em;
      color: var(--clr-footer-text-faint);
      margin-top: 0.5rem;
    }

    /* ── Social icons ────────────────────────────────────── */
    .footer-social {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .social-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .social-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.25rem;
      height: 2.25rem;
      border: 1px dashed var(--clr-footer-sep);
      color: var(--clr-footer-text);
      text-decoration: none;
      transition: border-color 0.2s, color 0.2s;
    }
    .social-btn svg { width: 1rem; height: 1rem; }

    @media (hover: hover) and (pointer: fine) {
      .social-btn:hover {
        border-color: var(--mustard);
        color: var(--mustard);
      }
    }
    .social-btn:focus-visible {
      outline: 2px solid var(--mustard);
      outline-offset: 2px;
    }

    /* ── Responsive ──────────────────────────────────────── */
    @media (max-width: 900px) {
      .footer-inner {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        gap: 2.5rem 3rem;
        padding: 2.75rem 1.75rem 2.25rem;
      }
      .footer-brand  { grid-row: 1; grid-column: 1 / -1; }
      .footer-nav    { grid-row: 2; grid-column: 1; justify-content: flex-start; align-items: flex-start; }
      .footer-social { grid-row: 2; grid-column: 2; align-items: flex-end; }
      .social-list   { flex-direction: row; }
    }

    @media (max-width: 580px) {
      .footer-inner {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 2.5rem 1.25rem 2rem;
      }
      .footer-brand  { grid-column: 1; }
      .footer-nav    { grid-column: 1; grid-row: auto; gap: 2rem; flex-wrap: wrap; }
      .footer-social { grid-column: 1; grid-row: auto; flex-direction: row; align-items: center; gap: 1rem; }
      .social-list   { flex-direction: row; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  auth = inject(AuthService);
  currentYear = new Date().getFullYear();
}
