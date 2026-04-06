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
    <div class="auth-page">
      <div class="auth-card">

        <div class="brand">
          <div class="brand-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C8 2 4 6 4 10c0 4.5 3.5 7.5 7 9 3.5-1.5 7-4.5 7-9 0-4-4-8-8-8z"/><path d="M12 6v6M9 9h6"/></svg>
          </div>
          <span class="brand-name">Кулинарен блог</span>
        </div>

        <h1>Добре дошъл</h1>
        <p class="subtitle">Влез в профила си, за да оставяш коментари и запазваш рецепти.</p>

        @if (error) {
          <div class="error-msg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            {{ error }}
          </div>
        }

        <form (submit)="onSubmit($event)">
          <div class="field">
            <label>Имейл</label>
            <div class="input-wrap">
              <span class="input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
              </span>
              <input type="email" [(ngModel)]="email" name="email" required placeholder="твоят&#64;имейл.бг" #emailInput="ngModel" />
              @if (emailInput.valid && email) {
                <span class="check-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
              }
            </div>
          </div>

          <div class="field">
            <label>Парола</label>
            <div class="input-wrap">
              <span class="input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </span>
              <input type="password" [(ngModel)]="password" name="password" required minlength="8" placeholder="Минимум 8 символа" #passInput="ngModel" />
              @if (passInput.valid && password) {
                <span class="check-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
              }
            </div>
          </div>

          <button type="submit" [disabled]="loading" class="submit-btn">
            @if (loading) {
              <span class="spinner"></span>
              Влизане...
            } @else {
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
              Вход
            }
          </button>
        </form>

        <div class="divider"><span>или</span></div>

        <p class="alt-link">Нямаш профил? <a routerLink="/register">Регистрирай се безплатно</a></p>
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
      background: linear-gradient(135deg, #fdf8f0 0%, #f5f0e8 100%);
    }
    .auth-card {
      max-width: 440px;
      width: 100%;
      padding: 2.75rem 2.5rem;
      background: #ffffff;
      border-radius: 1.5rem;
      border: 1px solid rgba(0,0,0,0.07);
      box-shadow: 0 4px 6px rgba(0,0,0,0.04), 0 24px 64px rgba(0,0,0,0.10);
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      margin-bottom: 1.75rem;
    }
    .brand-icon {
      width: 2.2rem;
      height: 2.2rem;
      background: linear-gradient(135deg, #78350f, #a16207);
      border-radius: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
    .brand-icon svg { width: 1.1rem; height: 1.1rem; }
    .brand-name {
      font-size: 0.82rem;
      font-weight: 700;
      color: #78350f;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    h1 {
      font-family: 'Georgia', serif;
      font-size: 2rem;
      color: #1c1917;
      margin: 0 0 0.4rem;
      line-height: 1.2;
    }
    .subtitle {
      color: #78716c;
      font-size: 0.88rem;
      margin: 0 0 1.75rem;
      line-height: 1.5;
    }

    .error-msg {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: #fef2f2;
      color: #b91c1c;
      border: 1px solid #fecaca;
      padding: 0.75rem 1rem;
      border-radius: 0.75rem;
      font-size: 0.85rem;
      font-weight: 500;
      margin-bottom: 1.25rem;
    }
    .error-msg svg { width: 1rem; height: 1rem; flex-shrink: 0; }

    form { display: flex; flex-direction: column; gap: 1rem; }

    .field { display: flex; flex-direction: column; gap: 0.4rem; }
    label {
      font-size: 0.82rem;
      font-weight: 700;
      color: #44403c;
      letter-spacing: 0.01em;
    }

    .input-wrap {
      position: relative;
    }
    .input-icon {
      position: absolute;
      left: 0.9rem;
      top: 50%;
      transform: translateY(-50%);
      color: #a8a29e;
      display: flex;
      pointer-events: none;
    }
    .input-icon svg { width: 1rem; height: 1rem; }

    .input-wrap input {
      width: 100%;
      box-sizing: border-box;
      padding: 0.75rem 2.75rem 0.75rem 2.5rem;
      border: 1.5px solid #e7e5e4;
      border-radius: 0.75rem;
      font-size: 0.95rem;
      outline: none;
      color: #1c1917;
      background: #fafaf9;
      transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
    }
    .input-wrap input::placeholder { color: #c2bdb9; }
    .input-wrap input:focus {
      border-color: #a16207;
      box-shadow: 0 0 0 3px rgba(161, 98, 7, 0.12);
      background: #fff;
    }

    .check-icon {
      position: absolute;
      right: 0.85rem;
      top: 50%;
      transform: translateY(-50%);
      color: #059669;
      display: flex;
      pointer-events: none;
    }
    .check-icon svg { width: 1rem; height: 1rem; }

    .submit-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 0.5rem;
      padding: 0.85rem;
      background: linear-gradient(135deg, #78350f, #92400e);
      color: white;
      border: none;
      border-radius: 0.75rem;
      font-weight: 700;
      font-size: 0.95rem;
      cursor: pointer;
      letter-spacing: 0.02em;
      transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
      box-shadow: 0 2px 8px rgba(120, 53, 15, 0.35);
    }
    .submit-btn svg { width: 1.1rem; height: 1.1rem; }
    .submit-btn:hover:not(:disabled) {
      opacity: 0.92;
      transform: translateY(-1px);
      box-shadow: 0 4px 16px rgba(120, 53, 15, 0.4);
    }
    .submit-btn:active:not(:disabled) { transform: translateY(0); }
    .submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }

    .spinner {
      width: 1rem;
      height: 1rem;
      border: 2px solid rgba(255,255,255,0.35);
      border-top-color: #fff;
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    .divider {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin: 1.5rem 0 1rem;
      color: #d4cfc9;
      font-size: 0.78rem;
    }
    .divider::before, .divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: #f0ece6;
    }
    .divider span { color: #a8a29e; font-weight: 500; }

    .alt-link {
      text-align: center;
      font-size: 0.875rem;
      color: #78716c;
    }
    .alt-link a {
      color: #78350f;
      font-weight: 700;
      text-decoration: none;
      border-bottom: 1.5px solid transparent;
      transition: border-color 0.2s;
    }
    .alt-link a:hover { border-bottom-color: #78350f; }
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
