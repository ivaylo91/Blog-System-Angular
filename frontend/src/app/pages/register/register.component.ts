import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  template: `
    <div class="auth-page">
      <div class="auth-card">

        <div class="brand">
          <span class="brand-icon" aria-hidden="true">🍳</span>
          <span class="brand-name">Кулинарен блог</span>
        </div>

        <h1>Създай профил</h1>
        <p class="subtitle">Регистрирай се безплатно и започни да споделяш любими рецепти.</p>

        @if (error) {
          <div class="error-msg" role="alert">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            {{ error }}
          </div>
        }

        <form (submit)="onSubmit($event)" novalidate>
          <div class="field">
            <label for="reg-name">Име</label>
            <div class="input-wrap">
              <span class="input-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </span>
              <input id="reg-name" type="text" [(ngModel)]="name" name="name" required
                     placeholder="твоето име" autocomplete="name"
                     #nameInput="ngModel" />
              @if (nameInput.valid && name) {
                <span class="check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
              }
            </div>
          </div>

          <div class="field">
            <label for="reg-email">Имейл</label>
            <div class="input-wrap">
              <span class="input-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
              </span>
              <input id="reg-email" type="email" [(ngModel)]="email" name="email" required
                     placeholder="твоят&#64;имейл.бг" autocomplete="email"
                     #emailInput="ngModel" />
              @if (emailInput.valid && email) {
                <span class="check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
              }
            </div>
          </div>

          <div class="field">
            <label for="reg-password">Парола</label>
            <div class="input-wrap">
              <span class="input-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </span>
              <input id="reg-password" [type]="showPassword ? 'text' : 'password'"
                     [(ngModel)]="password" name="password" required minlength="8"
                     placeholder="Минимум 8 символа" autocomplete="new-password"
                     [attr.aria-invalid]="passwordMismatch ? 'true' : null" />
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

          <div class="field">
            <label for="reg-confirm">Потвърди парола</label>
            <div class="input-wrap">
              <span class="input-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><path d="M12 16v.01"/></svg>
              </span>
              <input id="reg-confirm" [type]="showConfirm ? 'text' : 'password'"
                     [(ngModel)]="passwordConfirmation" name="password_confirmation" required minlength="8"
                     placeholder="Повтори паролата" autocomplete="new-password"
                     [attr.aria-invalid]="passwordMismatch ? 'true' : null"
                     (ngModelChange)="onConfirmChange()" />
              @if (!passwordMismatch && passwordConfirmation && password === passwordConfirmation) {
                <span class="check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
              } @else {
                <button type="button" class="toggle-btn"
                        [attr.aria-label]="showConfirm ? 'Скрий паролата' : 'Покажи паролата'"
                        (click)="showConfirm = !showConfirm">
                  @if (showConfirm) {
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  } @else {
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  }
                </button>
              }
            </div>
            @if (passwordMismatch) {
              <span class="field-error" role="status">Паролите не съвпадат</span>
            }
          </div>

          <button type="submit" [disabled]="loading || passwordMismatch" class="submit-btn">
            @if (loading) {
              <span class="spinner" aria-hidden="true"></span>
              Регистриране...
            } @else {
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
              Регистрация
            }
          </button>
        </form>

        <div class="divider" aria-hidden="true"><span>или</span></div>

        <p class="alt-link">Вече имаш профил? <a routerLink="/signin">Влез в акаунта си</a></p>
      </div>
    </div>
  `,
  styles: [`
    .auth-page {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: calc(100vh - 8rem);
      padding: 2rem;
      background-color: var(--clr-bg);
      background-image: url('/backgrounds/cooking-pattern.svg');
      background-size: 500px;
      background-repeat: repeat;
    }
    .auth-card {
      max-width: 440px;
      width: 100%;
      padding: 2.75rem 2.5rem;
      background: var(--clr-surface);
      border-radius: 1.5rem;
      border: 1px solid var(--clr-border-faint);
      box-shadow: var(--shadow-xl);
      animation: card-in 0.35s var(--ease-out-expo) both;
    }
    @keyframes card-in {
      from { opacity: 0; transform: translateY(16px) scale(0.98); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    @media (prefers-reduced-motion: reduce) {
      .auth-card { animation: none; }
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      margin-bottom: 1.75rem;
    }
    .brand-icon { font-size: 1.6rem; line-height: 1; }
    .brand-name {
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--clr-brand);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    h1 {
      font-family: var(--font-display);
      font-size: 2rem;
      color: var(--clr-text);
      margin: 0 0 0.4rem;
      line-height: 1.2;
    }
    .subtitle {
      color: var(--clr-text-muted);
      font-size: 0.88rem;
      margin: 0 0 1.75rem;
      line-height: 1.55;
    }

    .error-msg {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--clr-error-bg);
      color: var(--clr-error-dark);
      border: 1px solid color-mix(in oklch, var(--clr-error) 40%, var(--clr-error-bg));
      padding: 0.75rem 1rem;
      border-radius: 0.75rem;
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
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--clr-text-muted);
      letter-spacing: 0.01em;
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
      padding: 0.75rem 2.75rem 0.75rem 2.5rem;
      border: 1.5px solid var(--clr-border-strong);
      border-radius: 0.75rem;
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
    .input-wrap input[aria-invalid="true"] {
      border-color: var(--clr-error);
      box-shadow: 0 0 0 3px color-mix(in oklch, var(--clr-error) 10%, transparent);
    }

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

    .field-error {
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--clr-error-dark);
    }

    .submit-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 0.5rem;
      padding: 0.85rem;
      background: linear-gradient(135deg, var(--clr-brand), var(--clr-brand-dark));
      color: oklch(100% 0 0);
      border: none;
      border-radius: 0.75rem;
      font-weight: 700;
      font-size: 0.95rem;
      cursor: pointer;
      letter-spacing: 0.02em;
      transition: opacity 0.2s var(--ease-out-expo), transform 0.15s var(--ease-out-expo), box-shadow 0.2s var(--ease-out-expo);
      box-shadow: 0 2px 8px color-mix(in oklch, var(--clr-brand) 35%, transparent);
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
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    .divider {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin: 1.5rem 0 1rem;
    }
    .divider::before, .divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--clr-border-faint);
    }
    .divider span { color: var(--clr-text-faint); font-size: 0.78rem; font-weight: 500; }

    .alt-link {
      text-align: center;
      font-size: 0.875rem;
      color: var(--clr-text-muted);
      margin: 0;
    }
    .alt-link a {
      color: var(--clr-brand);
      font-weight: 700;
      text-decoration: underline;
      text-decoration-color: transparent;
      text-underline-offset: 2px;
      transition: text-decoration-color 0.2s var(--ease-out-expo);
    }
    .alt-link a:hover { text-decoration-color: var(--clr-brand); }

    @media (max-width: 500px) {
      .auth-page { align-items: flex-start; padding: 1.5rem 1rem 3rem; }
      .auth-card { padding: 2rem 1.5rem; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  private seo = inject(SeoService);
  private cdr = inject(ChangeDetectorRef);

  name = '';
  email = '';
  password = '';
  passwordConfirmation = '';
  error = '';
  loading = false;
  showPassword = false;
  showConfirm = false;
  passwordMismatch = false;

  ngOnInit(): void {
    this.seo.set({
      title: 'Регистрация',
      description: 'Създай безплатен профил в кулинарния блог на Иво и започни да споделяш мнения и да запазваш любими рецепти.',
    });
  }

  onConfirmChange(): void {
    this.passwordMismatch = !!this.passwordConfirmation && this.password !== this.passwordConfirmation;
    this.cdr.markForCheck();
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    if (this.password !== this.passwordConfirmation) {
      this.passwordMismatch = true;
      this.error = 'Паролите не съвпадат.';
      this.cdr.markForCheck();
      return;
    }
    this.loading = true;
    this.error = '';

    this.authService.register(this.name, this.email, this.password, this.passwordConfirmation).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.loading = false;
        const errors = err.error?.errors;
        if (errors) {
          this.error = Object.values(errors).flat().join(' ');
        } else {
          this.error = err.error?.message || 'Грешка при регистрация.';
        }
        this.cdr.markForCheck();
      },
    });
  }
}
