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
        <div class="footer-grid">

          <div class="footer-brand">
            <a routerLink="/" class="brand-logo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"/><path d="M3 11h18v2a7 7 0 0 1-14 0H3z"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="17" x2="12" y2="20"/></svg>
              <span>Кулинарният блог на Иво</span>
            </a>
            <p class="brand-desc">Традиционни рецепти, споделени с любов и страст към доброто готвене.</p>
          </div>

          <div class="footer-col">
            <span class="col-title">Навигация</span>
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

          <div class="footer-col">
            <span class="col-title">Социални мрежи</span>
            <div class="social-grid">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="oklch(98% 0 0)"/></svg>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Pinterest">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              </a>
            </div>
          </div>

          <div class="footer-col">
            <span class="col-title">Абонирай се</span>
            <p class="newsletter-desc">Получавай нови рецепти всяка седмица директно в имейла си.</p>
            <form class="newsletter-form" (submit)="$event.preventDefault()">
              <input type="email" placeholder="твоят@имейл.com" aria-label="Имейл адрес за абонамент" class="newsletter-input">
              <button type="submit" class="newsletter-btn" aria-label="Абонирай се">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </form>
          </div>

        </div>

        <div class="footer-bottom">
          <p class="copyright">© {{ currentYear }} Кулинарният блог на Иво</p>
          <div class="footer-bottom-links">
            <a routerLink="/privacy">Политика за поверителност</a>
            <span class="sep" aria-hidden="true">·</span>
            <span class="made-with">Направено с любов и добра храна</span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      margin-top: auto;
      background: var(--clr-brand);
      color: oklch(100% 0 0 / 0.9);
    }
    .footer-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 3.5rem 1.5rem 1.75rem;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 1.6fr 1fr 1fr 1.4fr;
      gap: 3rem;
      padding-bottom: 2.5rem;
      border-bottom: 1px solid oklch(100% 0 0 / 0.15);
      margin-bottom: 1.5rem;
    }

    /* Brand */
    .footer-brand {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .brand-logo {
      display: flex;
      align-items: center;
      gap: 0.55rem;
      text-decoration: none;
      color: oklch(100% 0 0);
    }
    .brand-logo svg { width: 1.75rem; height: 1.75rem; flex-shrink: 0; }
    .brand-logo span {
      font-family: var(--font-display);
      font-size: 1.05rem;
      font-weight: 700;
      letter-spacing: -0.01em;
    }
    .brand-desc {
      font-size: 0.83rem;
      color: oklch(100% 0 0 / 0.72);
      margin: 0;
      line-height: 1.65;
    }

    /* Columns */
    .footer-col {
      display: flex;
      flex-direction: column;
      gap: 0.55rem;
    }
    .col-title {
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: oklch(100% 0 0 / 0.52);
      margin-bottom: 0.35rem;
    }
    .footer-col a {
      color: oklch(100% 0 0 / 0.82);
      text-decoration: none;
      font-size: 0.875rem;
      transition: color 0.18s;
      touch-action: manipulation;
    }
    .footer-col a:hover { color: oklch(100% 0 0); }

    /* Social */
    .social-grid {
      display: flex;
      gap: 0.55rem;
      margin-top: 0.25rem;
      flex-wrap: wrap;
    }
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.2rem;
      height: 2.2rem;
      border-radius: var(--radius-circle);
      background: oklch(100% 0 0 / 0.14);
      color: oklch(100% 0 0);
      text-decoration: none;
      transition: background 0.18s, transform 0.18s var(--ease-out-expo);
      touch-action: manipulation;
    }
    .social-link svg { width: 1rem; height: 1rem; }
    @media (hover: hover) and (pointer: fine) {
      .social-link:hover { background: oklch(100% 0 0 / 0.28); transform: translateY(-2px); }
    }

    /* Newsletter */
    .newsletter-desc {
      font-size: 0.83rem;
      color: oklch(100% 0 0 / 0.72);
      margin: 0 0 0.5rem;
      line-height: 1.62;
    }
    .newsletter-form {
      display: flex;
      border-radius: var(--radius-sm);
      overflow: hidden;
      border: 1.5px solid oklch(100% 0 0 / 0.32);
      transition: border-color 0.18s;
    }
    .newsletter-form:focus-within { border-color: oklch(100% 0 0 / 0.75); }
    .newsletter-input {
      flex: 1;
      background: oklch(100% 0 0 / 0.12);
      border: none;
      outline: none;
      padding: 0.62rem 0.85rem;
      font-size: 0.82rem;
      color: oklch(100% 0 0);
      font-family: var(--font-body);
      min-width: 0;
    }
    .newsletter-input::placeholder { color: oklch(100% 0 0 / 0.48); }
    .newsletter-btn {
      background: oklch(100% 0 0 / 0.18);
      border: none;
      padding: 0.62rem 0.9rem;
      cursor: pointer;
      color: oklch(100% 0 0);
      transition: background 0.18s;
      display: flex;
      align-items: center;
      justify-content: center;
      touch-action: manipulation;
      flex-shrink: 0;
    }
    .newsletter-btn svg { width: 0.95rem; height: 0.95rem; }
    .newsletter-btn:hover { background: oklch(100% 0 0 / 0.3); }
    .newsletter-btn:focus-visible { outline: 2px solid oklch(100% 0 0); outline-offset: -2px; }

    /* Bottom */
    .footer-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .copyright {
      font-size: 0.78rem;
      color: oklch(100% 0 0 / 0.5);
      margin: 0;
    }
    .footer-bottom-links {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.78rem;
    }
    .footer-bottom-links a {
      color: oklch(100% 0 0 / 0.5);
      text-decoration: none;
      transition: color 0.18s;
    }
    .footer-bottom-links a:hover { color: oklch(100% 0 0 / 0.8); }
    .sep { color: oklch(100% 0 0 / 0.3); }
    .made-with { color: oklch(100% 0 0 / 0.5); }

    @media (max-width: 900px) {
      .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
    }
    @media (max-width: 600px) {
      .footer-inner { padding: 2.5rem 1.25rem 1.5rem; }
      .footer-grid { grid-template-columns: 1fr; gap: 1.75rem; }
      .footer-bottom { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
      .footer-bottom-links { flex-direction: column; align-items: flex-start; gap: 0.35rem; }
      .sep { display: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  auth = inject(AuthService);
  currentYear = new Date().getFullYear();
}
