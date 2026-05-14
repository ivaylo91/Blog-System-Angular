import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  template: `
    <footer class="site-footer">
      <div class="footer-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,55 C240,90 480,10 720,55 C960,100 1200,15 1440,55 L1440,90 L0,90 Z" fill="#364210"/>
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
              <fa-icon [icon]="faFacebook" aria-hidden="true"></fa-icon>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Instagram">
              <fa-icon [icon]="faInstagram" aria-hidden="true"></fa-icon>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="YouTube">
              <fa-icon [icon]="faYoutube" aria-hidden="true"></fa-icon>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Pinterest">
              <fa-icon [icon]="faPinterest" aria-hidden="true"></fa-icon>
            </a>
          </div>
        </div>

      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      background: #364210;
      color: #8a9a6a;
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
      color: #d8e8b0;
      text-decoration: none;
      line-height: 1.15;
      transition: color 0.18s;
    }
    .brand-name:hover { color: #d4b460; }

    .brand-tagline {
      font-family: var(--font-hand);
      font-size: 1rem;
      color: #a8b888;
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
      background: #4a5c1e;
      max-width: 2.5rem;
    }
    .brand-rule-dot {
      width: 4px;
      height: 4px;
      background: #5a6c2a;
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
      color: #d8e8b0;
      margin-bottom: 0.25rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px dashed #4a5c1e;
    }

    .nav-col a {
      font-family: var(--font-body);
      color: #8a9a6a;
      text-decoration: none;
      font-size: 0.88rem;
      line-height: 1.45;
      transition: color 0.18s;
    }
    .nav-col a:hover { color: #d8e8b0; }
    .nav-col a:focus-visible {
      outline: 2px solid var(--mustard);
      outline-offset: 2px;
    }

    .nav-copy {
      font-family: var(--font-type);
      font-size: 0.62rem;
      letter-spacing: 0.1em;
      color: #5a6c2a;
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
      border: 1px dashed #4a5c1e;
      color: #8a9a6a;
      text-decoration: none;
      transition: border-color 0.2s, color 0.2s;
    }
    .social-btn fa-icon { font-size: 1rem; }

    @media (hover: hover) and (pointer: fine) {
      .social-btn:hover {
        border-color: #d4b460;
        color: #d4b460;
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
      /* Touch-friendly social buttons */
      .social-btn { width: 2.75rem; height: 2.75rem; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  auth = inject(AuthService);
  currentYear = new Date().getFullYear();

  readonly faFacebook = faFacebook;
  readonly faInstagram = faInstagram;
  readonly faYoutube = faYoutube;
  readonly faPinterest = faPinterest;
}
