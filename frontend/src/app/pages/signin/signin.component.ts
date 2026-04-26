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

      <!-- Editorial aside: chapter-opening typography -->
      <aside class="auth-aside" aria-hidden="true">
        <span class="aside-mark">Кулинарният блог на Иво</span>
        <blockquote class="aside-quote">
          <p>Готвенето е любов,<br/>превърната в <em>ястие</em>.</p>
        </blockquote>
        <p class="aside-tagline">Традиционни рецепти,<br/>споделени с любов.</p>
      </aside>

      <!-- Form pane -->
      <main class="auth-main">
        <div class="auth-form-inner">

          <a routerLink="/" class="brand-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"/><path d="M3 11h18v2a7 7 0 0 1-14 0H3z"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="17" x2="12" y2="20"/></svg>
            <span>Кулинарният блог на Иво</span>
          </a>

          <span class="eyebrow">Влез</span>
          <h1>Добре дошъл обратно.</h1>
          <p class="subtitle">Влез в профила си, за да оставяш коментари и запазваш любими рецепти.</p>

          @if (error) {
            <div class="error-msg" role="alert">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              {{ error }}
            </div>
          }

          <form (submit)="onSubmit($event)" novalidate>
            <div class="field">
              <label for="signin-email">Имейл</label>
              <div class="input-wrap">
                <span class="input-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
                </span>
                <input id="signin-email" type="email" [(ngModel)]="email" name="email" required
                       placeholder="твоят&#64;имейл.бг" autocomplete="email"
                       [attr.aria-invalid]="error ? 'true' : null"
                       #emailInput="ngModel" />
                @if (emailInput.valid && email) {
                  <span class="check-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                }
              </div>
            </div>

            <div class="field">
              <label for="signin-password">Парола</label>
              <div class="input-wrap">
                <span class="input-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </span>
                <input id="signin-password" [type]="showPassword ? 'text' : 'password'"
                       [(ngModel)]="password" name="password" required minlength="8"
                       placeholder="Минимум 8 символа" autocomplete="current-password"
                       [attr.aria-invalid]="error ? 'true' : null" />
                <button type="button" class="toggle-btn"
                        [attr.aria-label]="showPassword ? 'Скрий паролата' : 'Покажи паролата'"
                        (click)="showPassword = !showPassword">
                  @if (showPassword) {
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  } @else {
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  }
                </button>
              </div>
            </div>

            <button type="submit" [disabled]="loading" class="submit-btn">
              @if (loading) {
                <span class="spinner" aria-hidden="true"></span>
                Влизане...
              } @else {
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                Вход
              }
            </button>
          </form>

          <p class="alt-link">Нямаш профил? <a routerLink="/register">Регистрирай се безплатно</a></p>
        </div>
      </main>

    </div>
  `,
  styles: [`
    /* ===== SHELL ===== */
    .auth-shell {
      display: grid;
      grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
      min-height: 100dvh;
      background-color: var(--clr-bg);
    }

    /* ===== ASIDE — editorial chapter opening ===== */
    .auth-aside {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 3rem;
      padding: clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4rem);
      background-color: var(--clr-surface-alt);
      background-image: url('/backgrounds/cooking-pattern.svg');
      background-size: 500px;
      background-blend-mode: multiply;
      border-right: 1px solid var(--clr-border-faint);
      position: relative;
      isolation: isolate;
    }
    .auth-aside::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      background: radial-gradient(80% 60% at 20% 100%, color-mix(in oklch, var(--clr-brand) 12%, transparent) 0%, transparent 70%);
      pointer-events: none;
    }
    .aside-mark {
      font-family: var(--font-display);
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: -0.005em;
      color: var(--clr-text);
    }
    .aside-quote {
      margin: 0;
    }
    .aside-quote p {
      font-family: var(--font-display);
      font-size: clamp(1.7rem, 3.4vw, 2.8rem);
      line-height: 1.08;
      letter-spacing: -0.025em;
      font-weight: 800;
      color: var(--clr-text);
      margin: 0;
      max-width: 14ch;
      text-wrap: balance;
    }
    .aside-quote p em {
      font-style: italic;
      font-weight: 700;
      color: var(--clr-brand);
    }
    .aside-tagline {
      margin: 0;
      font-size: 0.82rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      color: var(--clr-text-muted);
      line-height: 1.55;
      text-transform: uppercase;
    }
    .aside-tagline::before {
      content: '';
      display: block;
      width: 2.5rem;
      height: 1px;
      background: var(--clr-brand);
      opacity: 0.65;
      margin-bottom: 0.85rem;
    }

    /* ===== FORM PANE ===== */
    .auth-main {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: clamp(2.5rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 3rem);
      background: var(--clr-surface);
    }
    .auth-form-inner {
      width: 100%;
      max-width: 420px;
      animation: form-in 0.32s var(--ease-out-expo) both;
    }
    @keyframes form-in {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @media (prefers-reduced-motion: reduce) {
      .auth-form-inner { animation: none; }
    }

    .brand-link {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      margin-bottom: 2.5rem;
      text-decoration: none;
      color: var(--clr-text);
      transition: color 0.2s var(--ease-out-expo);
    }
    .brand-link:hover { color: var(--clr-brand); }
    .brand-link svg { width: 1.5rem; height: 1.5rem; color: var(--clr-brand); flex-shrink: 0; }
    .brand-link span {
      font-family: var(--font-display);
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: -0.01em;
      white-space: nowrap;
    }

    .eyebrow {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--clr-brand);
      margin-bottom: 0.85rem;
    }
    .eyebrow::before {
      content: '';
      display: inline-block;
      width: 1.5rem;
      height: 1px;
      background: currentColor;
      vertical-align: middle;
      margin-right: 0.55rem;
      opacity: 0.6;
      transform: translateY(-2px);
    }

    h1 {
      font-family: var(--font-display);
      font-size: clamp(1.9rem, 3.6vw, 2.5rem);
      font-weight: 800;
      color: var(--clr-text);
      margin: 0 0 0.75rem;
      line-height: 1.05;
      letter-spacing: -0.025em;
      text-wrap: balance;
    }
    .subtitle {
      color: var(--clr-text-muted);
      font-size: 0.92rem;
      margin: 0 0 2rem;
      line-height: 1.6;
      max-width: 36ch;
    }

    .error-msg {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--clr-error-bg);
      color: var(--clr-error-dark);
      border: 1px solid color-mix(in oklch, var(--clr-error) 40%, var(--clr-error-bg));
      padding: 0.75rem 1rem;
      border-radius: var(--radius-sm);
      font-size: 0.85rem;
      font-weight: 500;
      margin-bottom: 1.25rem;
      animation: shake 0.4s var(--ease-out-expo);
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%       { transform: translateX(-5px); }
      60%       { transform: translateX(4px); }
      80%       { transform: translateX(-2px); }
    }
    .error-msg svg { width: 1rem; height: 1rem; flex-shrink: 0; }

    form { display: flex; flex-direction: column; gap: 1rem; }

    .field { display: flex; flex-direction: column; gap: 0.4rem; }
    label {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--clr-text-muted);
      letter-spacing: 0.02em;
    }

    .input-wrap { position: relative; }
    .input-icon {
      position: absolute;
      left: 0.9rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--clr-text-faint);
      display: flex;
      pointer-events: none;
    }
    .input-icon svg { width: 1rem; height: 1rem; }

    .input-wrap input {
      width: 100%;
      box-sizing: border-box;
      padding: 0.78rem 2.75rem 0.78rem 2.5rem;
      border: 1.5px solid var(--clr-border-strong);
      border-radius: var(--radius-sm);
      font-size: 0.95rem;
      outline: none;
      color: var(--clr-text);
      background: var(--clr-surface-alt);
      transition: border-color 0.2s var(--ease-out-expo), box-shadow 0.2s var(--ease-out-expo), background 0.2s var(--ease-out-expo);
    }
    .input-wrap input::placeholder { color: var(--clr-text-faint); }
    .input-wrap input:focus {
      border-color: var(--clr-brand);
      box-shadow: 0 0 0 3px color-mix(in oklch, var(--clr-brand) 14%, transparent);
      background: var(--clr-surface);
    }
    .input-wrap input[aria-invalid="true"] { border-color: var(--clr-error); }

    .check-icon {
      position: absolute;
      right: 0.85rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--clr-green);
      display: flex;
      pointer-events: none;
    }
    .check-icon svg { width: 1rem; height: 1rem; }

    .toggle-btn {
      position: absolute;
      right: 0.65rem;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      color: var(--clr-text-faint);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.25rem;
      border-radius: 0.35rem;
      transition: color 0.15s var(--ease-out-expo);
    }
    .toggle-btn:hover { color: var(--clr-text-muted); }
    .toggle-btn svg { width: 1rem; height: 1rem; }

    .submit-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 0.75rem;
      padding: 0.9rem;
      background: linear-gradient(135deg, var(--clr-brand), var(--clr-brand-dark));
      color: oklch(100% 0 0);
      border: none;
      border-radius: var(--radius-sm);
      font-weight: 700;
      font-size: 0.95rem;
      cursor: pointer;
      letter-spacing: 0.02em;
      transition: opacity 0.2s var(--ease-out-expo), transform 0.15s var(--ease-out-expo), box-shadow 0.2s var(--ease-out-expo);
      box-shadow: 0 2px 8px color-mix(in oklch, var(--clr-brand) 35%, transparent);
      touch-action: manipulation;
    }
    .submit-btn svg { width: 1.1rem; height: 1.1rem; }
    .submit-btn:hover:not(:disabled) {
      opacity: 0.92;
      transform: translateY(-1px);
      box-shadow: 0 4px 16px color-mix(in oklch, var(--clr-brand) 40%, transparent);
    }
    .submit-btn:active:not(:disabled) { transform: translateY(0); }
    .submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }

    .spinner {
      width: 1rem;
      height: 1rem;
      border: 2px solid rgba(255,255,255,0.35);
      border-top-color: oklch(100% 0 0);
      border-radius: var(--radius-circle);
      animation: spin 0.7s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    .alt-link {
      text-align: left;
      font-size: 0.875rem;
      color: var(--clr-text-muted);
      margin: 2rem 0 0;
      padding-top: 1.5rem;
      border-top: 1px solid var(--clr-border-faint);
    }
    .alt-link a {
      color: var(--clr-brand);
      font-weight: 700;
      text-decoration: underline;
      text-decoration-color: transparent;
      text-underline-offset: 3px;
      transition: text-decoration-color 0.2s var(--ease-out-expo);
    }
    .alt-link a:hover { text-decoration-color: var(--clr-brand); }

    /* ===== RESPONSIVE — collapse to form-only ===== */
    @media (max-width: 900px) {
      .auth-shell { grid-template-columns: 1fr; }
      .auth-aside { display: none; }
    }
    @media (max-width: 500px) {
      .auth-main { padding: 2rem 1.25rem 3rem; align-items: flex-start; }
      .brand-link { margin-bottom: 2rem; }
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
