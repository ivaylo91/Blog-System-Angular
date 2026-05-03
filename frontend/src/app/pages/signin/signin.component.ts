import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterLink, FormsModule],
  template: `
    <div class="auth-shell">

      <!-- Left: orange gradient panel -->
      <aside class="auth-aside" aria-hidden="true">
        <div class="aside-blob"></div>
        <div class="aside-content">
          <a routerLink="/" class="aside-logo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                 stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"/>
              <path d="M3 11h18v2a7 7 0 0 1-14 0H3z"/>
              <line x1="9" y1="20" x2="15" y2="20"/>
              <line x1="12" y1="17" x2="12" y2="20"/>
            </svg>
            <span>Блогът на Иво</span>
          </a>
          <h2 class="aside-heading">Добре дошъл<br/>в кулинарния<br/>ни блог!</h2>
        </div>
      </aside>

      <!-- Right: white form pane -->
      <main class="auth-main">
        <div class="auth-form-inner">

          <div class="auth-avatar" aria-hidden="true">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="40" fill="oklch(92% 0 0)"/>
              <circle cx="40" cy="30" r="14" fill="oklch(78% 0 0)"/>
              <ellipse cx="40" cy="73" rx="23" ry="17" fill="oklch(78% 0 0)"/>
            </svg>
          </div>

          <p class="auth-tagline">Влез в профила си, за да продължиш.</p>

          @if (error) {
            <div class="error-msg" role="alert">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {{ error }}
            </div>
          }

          <form (submit)="onSubmit($event)" novalidate>
            <div class="field">
              <div class="input-wrap">
                <span class="input-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/>
                  </svg>
                </span>
                <input id="signin-email" type="email" [(ngModel)]="email" name="email" required
                       placeholder="Имейл адрес" autocomplete="email"
                       [attr.aria-invalid]="error ? 'true' : null"
                       #emailInput="ngModel" />
              </div>
            </div>

            <div class="field">
              <div class="input-wrap">
                <span class="input-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </span>
                <input id="signin-password" [type]="showPassword ? 'text' : 'password'"
                       [(ngModel)]="password" name="password" required minlength="8"
                       placeholder="Парола" autocomplete="current-password"
                       [attr.aria-invalid]="error ? 'true' : null" />
                <button type="button" class="toggle-btn"
                        [attr.aria-label]="showPassword ? 'Скрий паролата' : 'Покажи паролата'"
                        (click)="showPassword = !showPassword">
                  @if (showPassword) {
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  } @else {
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  }
                </button>
              </div>
            </div>

            <button type="submit" [disabled]="loading" class="submit-btn">
              @if (loading) {
                <span class="spinner" aria-hidden="true"></span>
                Влизане...
              } @else {
                Вход
              }
            </button>
          </form>

          <p class="alt-link">Нямаш профил? <a routerLink="/register">Регистрирай се</a> тук.</p>
        </div>
      </main>

    </div>
  `,
  styles: [`
    :host { display: block; }

    /* ===== SHELL ===== */
    .auth-shell {
      display: grid;
      grid-template-columns: 5fr 6fr;
      min-height: 100dvh;
    }

    /* ===== LEFT PANEL ===== */
    .auth-aside {
      position: relative;
      overflow: hidden;
      background: linear-gradient(145deg, oklch(80% 0.16 68) 0%, oklch(62% 0.22 38) 100%);
      display: flex;
      flex-direction: column;
      padding: 2.5rem;
      isolation: isolate;
    }
    .aside-blob {
      position: absolute;
      width: 90%;
      aspect-ratio: 1;
      border-radius: 50%;
      background: oklch(75% 0.19 55 / 0.7);
      top: 50%;
      left: 50%;
      transform: translate(-30%, -45%);
      pointer-events: none;
      z-index: 0;
    }
    .aside-content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .aside-logo {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: oklch(100% 0 0);
    }
    .aside-logo svg { width: 1.35rem; height: 1.35rem; flex-shrink: 0; }
    .aside-logo span {
      font-family: var(--font-display);
      font-size: 0.92rem;
      font-weight: 700;
      letter-spacing: -0.01em;
    }
    .aside-heading {
      margin: auto 0 2rem;
      font-family: var(--font-display);
      font-size: clamp(1.55rem, 2.8vw, 2.3rem);
      font-weight: 700;
      line-height: 1.22;
      color: oklch(100% 0 0);
      letter-spacing: -0.02em;
    }

    /* ===== RIGHT PANEL ===== */
    .auth-main {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3.5rem);
      background: oklch(100% 0 0);
    }
    .auth-form-inner {
      width: 100%;
      max-width: 360px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .auth-avatar {
      width: 76px;
      height: 76px;
      margin-bottom: 1rem;
    }
    .auth-avatar svg { width: 100%; height: 100%; display: block; }

    .auth-tagline {
      font-size: 0.92rem;
      color: oklch(52% 0 0);
      margin: 0 0 1.5rem;
      text-align: center;
    }

    .error-msg {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--clr-error-bg);
      color: var(--clr-error-dark);
      border: 1px solid color-mix(in oklch, var(--clr-error) 40%, var(--clr-error-bg));
      padding: 0.7rem 1rem;
      border-radius: 2rem;
      font-size: 0.83rem;
      font-weight: 500;
      margin-bottom: 1rem;
      width: 100%;
      box-sizing: border-box;
      animation: shake 0.4s ease both;
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25%       { transform: translateX(-5px); }
      75%       { transform: translateX(4px); }
    }
    .error-msg svg { width: 1rem; height: 1rem; flex-shrink: 0; }

    form { display: flex; flex-direction: column; gap: 0.9rem; width: 100%; }

    .field { width: 100%; }

    .input-wrap { position: relative; }
    .input-icon {
      position: absolute;
      left: 1.1rem;
      top: 50%;
      transform: translateY(-50%);
      color: oklch(70% 0 0);
      display: flex;
      pointer-events: none;
    }
    .input-icon svg { width: 1rem; height: 1rem; }

    .input-wrap input {
      width: 100%;
      box-sizing: border-box;
      padding: 0.82rem 2.8rem 0.82rem 2.7rem;
      border: 1.5px solid oklch(88% 0 0);
      border-radius: 3rem;
      font-size: 0.88rem;
      outline: none;
      color: oklch(22% 0 0);
      background: oklch(97% 0 0);
      transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
    }
    .input-wrap input::placeholder { color: oklch(68% 0 0); }
    .input-wrap input:focus {
      border-color: oklch(72% 0.18 50);
      box-shadow: 0 0 0 3px oklch(72% 0.18 50 / 0.18);
      background: oklch(100% 0 0);
    }
    .input-wrap input[aria-invalid="true"] { border-color: var(--clr-error); }

    .toggle-btn {
      position: absolute;
      right: 0.9rem;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      color: oklch(70% 0 0);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.25rem;
      border-radius: 50%;
      transition: color 0.15s;
    }
    .toggle-btn:hover { color: oklch(40% 0 0); }
    .toggle-btn svg { width: 1rem; height: 1rem; }

    .submit-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 0.4rem;
      padding: 0.88rem;
      background: linear-gradient(90deg, oklch(76% 0.18 65), oklch(62% 0.22 38));
      color: oklch(100% 0 0);
      border: none;
      border-radius: 3rem;
      font-weight: 700;
      font-size: 0.97rem;
      cursor: pointer;
      letter-spacing: 0.03em;
      box-shadow: 0 8px 22px oklch(62% 0.22 38 / 0.42);
      transition: opacity 0.18s, transform 0.15s, box-shadow 0.18s;
      touch-action: manipulation;
      width: 100%;
    }
    .submit-btn:hover:not(:disabled) {
      opacity: 0.9;
      transform: translateY(-1px);
      box-shadow: 0 12px 28px oklch(62% 0.22 38 / 0.5);
    }
    .submit-btn:active:not(:disabled) { transform: translateY(0); box-shadow: 0 4px 12px oklch(62% 0.22 38 / 0.35); }
    .submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }

    .spinner {
      width: 1rem;
      height: 1rem;
      border: 2px solid rgba(255,255,255,0.35);
      border-top-color: oklch(100% 0 0);
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    .alt-link {
      text-align: center;
      font-size: 0.875rem;
      color: oklch(52% 0 0);
      margin: 1.75rem 0 0;
    }
    .alt-link a {
      color: oklch(62% 0.22 38);
      font-weight: 700;
      text-decoration: none;
    }
    .alt-link a:hover { text-decoration: underline; }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 860px) {
      .auth-shell { grid-template-columns: 1fr; }
      .auth-aside { display: none; }
      .auth-main { background: var(--clr-bg); min-height: 100dvh; }
    }
    @media (max-width: 480px) {
      .auth-main { padding: 2rem 1.25rem 3rem; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  private seo = inject(SeoService);
  private cdr = inject(ChangeDetectorRef);

  email = '';
  password = '';
  error = '';
  loading = false;
  showPassword = false;

  ngOnInit(): void {
    this.seo.set({
      title: 'Вход',
      description: 'Влез в профила си в кулинарния блог на Иво, за да оставяш коментари, оценки и да запазваш любими рецепти.',
    });
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    this.loading = true;
    this.error = '';

    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.message || err.error?.errors?.email?.[0] || 'Невалиден имейл или парола.';
        this.cdr.markForCheck();
      },
    });
  }
}
