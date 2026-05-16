import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="site-footer">
      <div class="footer-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,55 C240,90 480,10 720,55 C960,100 1200,15 1440,55 L1440,90 L0,90 Z" fill="#181e30"/>
        </svg>
      </div>
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
            <a routerLink="/meal-planner">Седмично меню</a>
            <a routerLink="/shopping-list">Списък за пазаруване</a>
            <a routerLink="/collections">Колекции</a>
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
              <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Instagram">
              <svg viewBox="0 0 448 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="YouTube">
              <svg viewBox="0 0 576 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"/></svg>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Pinterest">
              <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M504 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2C161.5 437.2 163.5 467.4 165.6 487 73.4 450.9 8 361.1 8 256 8 119 119 8 256 8S504 119 504 256z"/></svg>
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
      position: relative;
      overflow: hidden;
    }
    .footer-wave {
      line-height: 0;
      display: block;
      background: var(--paper);
      margin-top: -1px;
    }
    .footer-wave svg { width: 100%; height: 90px; display: block; }

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
    .brand-name:hover { color: var(--clr-brand-hover); }

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
      background: var(--clr-footer-text-muted);
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
      border-bottom: 1px solid var(--clr-footer-sep);
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
      outline: 2px solid var(--clr-brand-hover);
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
      border: 1px solid var(--clr-footer-sep);
      border-radius: var(--radius-sm);
      color: var(--clr-footer-text);
      text-decoration: none;
      transition: border-color 0.2s, color 0.2s, background 0.2s;
    }
    .social-btn svg { width: 1rem; height: 1rem; display: block; }

    @media (hover: hover) and (pointer: fine) {
      .social-btn:hover {
        border-color: var(--clr-brand-hover);
        color: var(--clr-footer-text-bright);
        background: rgba(36, 85, 168, 0.18);
      }
    }
    .social-btn:focus-visible {
      outline: 2px solid var(--clr-brand-hover);
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
      /* Touch-friendly social buttons */
      .social-btn { width: 2.75rem; height: 2.75rem; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  auth = inject(AuthService);
  currentYear = new Date().getFullYear();

}
