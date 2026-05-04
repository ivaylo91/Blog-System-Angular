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

        <!-- Brand + burger art -->
        <div class="footer-brand">
          <div class="burger-art" aria-hidden="true">
            <svg viewBox="0 0 100 116" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Top bun -->
              <ellipse cx="50" cy="28" rx="40" ry="25" fill="#b8721a"/>
              <ellipse cx="50" cy="22" rx="36" ry="21" fill="#e8962c"/>
              <ellipse cx="50" cy="18" rx="32" ry="17" fill="#f5a83a"/>
              <!-- sesame seeds -->
              <ellipse cx="38" cy="14" rx="3.8" ry="2.1" fill="#c07820" transform="rotate(-18 38 14)"/>
              <ellipse cx="51" cy="10" rx="3.8" ry="2.1" fill="#c07820" transform="rotate(4 51 10)"/>
              <ellipse cx="63" cy="14" rx="3.8" ry="2.1" fill="#c07820" transform="rotate(18 63 14)"/>
              <!-- Lettuce -->
              <path d="M10 47 Q17 38 27 44 Q35 36 45 43 Q52 35 60 42 Q68 36 78 43 Q86 38 90 47 Q70 56 50 54 Q30 56 10 47Z" fill="#3b9428"/>
              <path d="M10 47 Q17 40 27 46 Q35 38 45 45 Q52 37 60 44 Q68 38 78 45 Q86 40 90 47" stroke="#276b1c" stroke-width="0.8" fill="none" opacity="0.7"/>
              <!-- Tomato -->
              <ellipse cx="50" cy="60" rx="38" ry="8" fill="#b82e1f"/>
              <ellipse cx="50" cy="58" rx="36" ry="7" fill="#e03a28"/>
              <!-- Cheese -->
              <rect x="11" y="66" width="78" height="11" rx="2.5" fill="#f0b914"/>
              <path d="M11 77 L3 73 L11 69" fill="#f0b914"/>
              <path d="M89 77 L97 73 L89 69" fill="#f0b914"/>
              <!-- Patty -->
              <ellipse cx="50" cy="88" rx="41" ry="12" fill="#341508"/>
              <ellipse cx="50" cy="85" rx="39" ry="10" fill="#4e1e0a"/>
              <!-- grill marks -->
              <path d="M26 83 Q34 80 42 83" stroke="#2a1006" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M50 80 Q58 77 66 80" stroke="#2a1006" stroke-width="1.8" stroke-linecap="round"/>
              <!-- Bottom bun -->
              <ellipse cx="50" cy="102" rx="41" ry="10" fill="#e8962c"/>
              <ellipse cx="50" cy="109" rx="41" ry="7" fill="#b8721a"/>
            </svg>
          </div>
          <a routerLink="/" class="brand-name">Иво Кук</a>
          <p class="brand-tagline">Традиционни рецепти с любов</p>
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
            <span class="nav-copy">© {{ currentYear }} Иво Кук</span>
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
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="oklch(18% 0.09 158)"/></svg>
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
    @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

    :host {
      --f-display: 'Lilita One', var(--font-display), sans-serif;
      --bg:        oklch(18% 0.09 158);
      --bg-circle: oklch(25% 0.07 158);
      --fg:        oklch(92% 0.022 85);
      --fg-muted:  oklch(58% 0.042 158);
      --fg-link:   oklch(86% 0.022 85);
      --fg-hover:  oklch(78% 0.18 72);
      --accent:    oklch(72% 0.16 72);
    }

    .site-footer {
      background: var(--bg);
      color: var(--fg);
      position: relative;
      overflow: hidden;
    }

    /* subtle noise texture */
    .site-footer::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.055'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 0;
    }

    .footer-inner {
      position: relative;
      z-index: 1;
      max-width: 1200px;
      margin: 0 auto;
      padding: 3rem 2.5rem 2.75rem;
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 5rem;
      align-items: center;
    }

    /* ── Brand + burger art ─────────────────────────────── */
    .footer-brand {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.6rem;
    }

    .burger-art {
      width: 110px;
      height: 127px;
      filter: drop-shadow(0 10px 28px oklch(0% 0 0 / 0.5))
              drop-shadow(0 4px 10px oklch(0% 0 0 / 0.3));
      transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .burger-art:hover { transform: translateY(-4px) rotate(-3deg); }
    .burger-art svg { width: 100%; height: 100%; }

    .brand-name {
      font-family: var(--f-display);
      font-size: 1.5rem;
      color: var(--fg);
      text-decoration: none;
      letter-spacing: 0.01em;
      text-align: center;
      transition: color 0.18s;
    }
    .brand-name:hover { color: var(--fg-hover); }

    .brand-tagline {
      font-size: 0.77rem;
      color: var(--fg-muted);
      margin: 0;
      text-align: center;
      letter-spacing: 0.01em;
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
      gap: 0.7rem;
    }

    .nav-title {
      font-family: var(--f-display);
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 0.15rem;
    }

    .nav-col a {
      color: var(--fg-link);
      text-decoration: none;
      font-size: 0.9rem;
      line-height: 1.4;
      transition: color 0.18s;
    }
    .nav-col a:hover { color: var(--fg-hover); }
    .nav-col a:focus-visible {
      outline: 2px solid var(--fg-hover);
      outline-offset: 2px;
      border-radius: 2px;
    }

    .nav-copy {
      font-size: 0.75rem;
      color: var(--fg-muted);
      margin-top: 0.4rem;
    }

    /* ── Social icons ────────────────────────────────────── */
    .footer-social {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;
    }

    .social-list {
      display: flex;
      flex-direction: column;
      gap: 0.55rem;
    }

    .social-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background: var(--bg-circle);
      color: var(--fg-link);
      text-decoration: none;
      transition: background 0.2s, color 0.2s, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .social-btn svg { width: 1.1rem; height: 1.1rem; }

    @media (hover: hover) and (pointer: fine) {
      .social-btn:hover {
        background: var(--fg-hover);
        color: oklch(12% 0.04 70);
        transform: scale(1.15);
      }
    }
    .social-btn:focus-visible {
      outline: 2px solid var(--fg-hover);
      outline-offset: 2px;
    }

    /* ── Responsive ──────────────────────────────────────── */
    @media (max-width: 900px) {
      .footer-inner {
        grid-template-columns: auto 1fr;
        grid-template-rows: auto auto;
        gap: 2.5rem 3rem;
        padding: 2.75rem 1.75rem 2.25rem;
      }
      .footer-brand {
        grid-row: 1;
        grid-column: 1;
        flex-direction: row;
        align-items: center;
        gap: 1.25rem;
        text-align: left;
      }
      .brand-name { text-align: left; }
      .brand-tagline { text-align: left; }
      .burger-art { width: 76px; height: 88px; flex-shrink: 0; }
      .footer-nav {
        grid-row: 1;
        grid-column: 2;
        justify-content: flex-start;
        align-items: flex-start;
        align-self: center;
      }
      .footer-social {
        grid-row: 2;
        grid-column: 1 / -1;
        flex-direction: row;
        align-items: center;
        gap: 1.25rem;
      }
      .social-list { flex-direction: row; gap: 0.55rem; }
    }

    @media (max-width: 600px) {
      .footer-inner {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 2.5rem 1.25rem 2rem;
      }
      .footer-brand {
        grid-column: 1;
        flex-direction: column;
        align-items: flex-start;
      }
      .footer-nav {
        grid-column: 1;
        grid-row: auto;
        gap: 2rem;
        flex-wrap: wrap;
      }
      .footer-social {
        grid-column: 1;
        grid-row: auto;
        align-items: flex-start;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  auth = inject(AuthService);
  currentYear = new Date().getFullYear();
}
