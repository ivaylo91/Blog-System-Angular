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
    <div class="page">
      <div class="card">

        <!-- Left blob art -->
        <div class="art-panel" aria-hidden="true">
          <svg class="art-svg" viewBox="0 0 280 460" fill="none"
               xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="si-g1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ff8c40"/>
                <stop offset="42%" stop-color="#f0346b"/>
                <stop offset="100%" stop-color="#c840e8"/>
              </linearGradient>
              <linearGradient id="si-g2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#e040c8"/>
                <stop offset="100%" stop-color="#6a18c0"/>
              </linearGradient>
              <linearGradient id="si-g3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ffa040"/>
                <stop offset="100%" stop-color="#ff4d78"/>
              </linearGradient>
            </defs>
            <!-- Large teardrop blob -->
            <path d="M 0 0 C 90 -5, 262 28, 270 152 C 278 276, 146 368, 36 344 C -74 320, -28 188, 0 94 Z"
                  fill="url(#si-g1)"/>
            <!-- White highlight stroke -->
            <path d="M 22 22 C 102 10, 242 54, 248 160 C 254 266, 136 350, 50 330"
                  stroke="white" stroke-width="13" stroke-linecap="round" fill="none" opacity="0.42"/>
            <!-- Purple blob -->
            <circle cx="206" cy="318" r="80" fill="url(#si-g2)"/>
            <!-- Orange blob -->
            <circle cx="50" cy="418" r="56" fill="url(#si-g3)"/>
          </svg>
        </div>

        <!-- Right form -->
        <main class="form-panel">
          <div class="form-inner">

            <h1>Вход</h1>
            <p class="subtitle">Влез в профила си, за да продължиш.</p>

            @if (error) {
              <div class="error-msg" role="alert">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
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
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-10 7L2 7"/>
                    </svg>
                  </span>
                  <input type="email" [(ngModel)]="email" name="email" required
                         placeholder="Имейл адрес" autocomplete="email" aria-label="Имейл адрес"
                         [attr.aria-invalid]="error ? 'true' : null" />
                </div>
              </div>

              <div class="field">
                <div class="input-wrap">
                  <span class="input-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="11" width="18" height="11" rx="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </span>
                  <input [type]="showPassword ? 'text' : 'password'"
                         [(ngModel)]="password" name="password" required minlength="8"
                         placeholder="Парола" autocomplete="current-password" aria-label="Парола"
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

            <p class="alt-link">Нямаш профил? <a routerLink="/register">Регистрирай се</a></p>
          </div>
        </main>

      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }

    .page {
      min-height: 100dvh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      background: linear-gradient(135deg, #ff7a28 0%, #f0346b 48%, #8a30e0 100%);
    }

    .card {
      display: grid;
      grid-template-columns: 5fr 7fr;
      width: 100%;
      max-width: 800px;
      border-radius: 1.5rem;
      overflow: hidden;
      box-shadow: 0 28px 80px rgba(100, 20, 80, 0.45);
      background: #fff;
    }

    /* ── Art panel ───────────────────────────────────────────────── */
    .art-panel {
      position: relative;
      overflow: hidden;
      background: #fff;
      min-height: 440px;
    }
    .art-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }

    /* ── Form panel ──────────────────────────────────────────────── */
    .form-panel {
      padding: clamp(2.5rem, 6vw, 4rem) clamp(1.75rem, 4vw, 3rem);
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      color-scheme: light;
    }
    .form-inner {
      width: 100%;
      max-width: 340px;
      display: flex;
      flex-direction: column;
    }

    h1 {
      font-family: var(--font-display);
      font-size: 1.65rem;
      font-weight: 800;
      color: oklch(18% 0 0);
      margin: 0 0 0.3rem;
      letter-spacing: -0.025em;
      text-align: center;
    }
    .subtitle {
      font-size: 0.85rem;
      color: oklch(56% 0 0);
      margin: 0 0 1.6rem;
      text-align: center;
    }

    /* Error */
    .error-msg {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: oklch(97% 0.02 10);
      color: oklch(38% 0.22 15);
      border: 1px solid oklch(88% 0.08 15);
      padding: 0.65rem 1rem;
      border-radius: 2rem;
      font-size: 0.82rem;
      font-weight: 500;
      margin-bottom: 1rem;
      animation: shake 0.4s ease both;
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25%       { transform: translateX(-5px); }
      75%       { transform: translateX(4px); }
    }
    .error-msg svg { width: 1rem; height: 1rem; flex-shrink: 0; }

    form { display: flex; flex-direction: column; gap: 0.85rem; }
    .field { width: 100%; }
    .input-wrap { position: relative; }

    .input-icon {
      position: absolute;
      left: 1.1rem;
      top: 50%;
      transform: translateY(-50%);
      color: oklch(68% 0 0);
      display: flex;
      pointer-events: none;
    }
    .input-icon svg { width: 1rem; height: 1rem; }

    .input-wrap input {
      width: 100%;
      box-sizing: border-box;
      padding: 0.82rem 2.8rem 0.82rem 2.7rem;
      border: none;
      border-radius: 3rem;
      font-size: 0.88rem;
      outline: none;
      color: oklch(20% 0 0);
      background: oklch(94% 0 0);
      transition: box-shadow 0.2s, background 0.2s;
    }
    .input-wrap input::placeholder { color: oklch(62% 0 0); }
    .input-wrap input:focus {
      background: oklch(99% 0 0);
      box-shadow: 0 0 0 2.5px rgba(240, 52, 107, 0.32);
    }
    .input-wrap input[aria-invalid="true"] {
      box-shadow: 0 0 0 2px rgba(220, 40, 60, 0.4);
    }

    .toggle-btn {
      position: absolute;
      right: 0.45rem;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      color: oklch(68% 0 0);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.7rem;
      min-width: 2.75rem;
      min-height: 2.75rem;
      border-radius: 50%;
      transition: color 0.15s;
    }
    .toggle-btn:hover { color: oklch(35% 0 0); }
    .toggle-btn svg { width: 1rem; height: 1rem; }

    .submit-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 0.4rem;
      padding: 0.9rem;
      background: linear-gradient(90deg, #f0346b 0%, #8a30e0 100%);
      color: #fff;
      border: none;
      border-radius: 3rem;
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      cursor: pointer;
      box-shadow: 0 8px 24px rgba(138, 48, 224, 0.4);
      transition: opacity 0.18s, transform 0.15s, box-shadow 0.18s;
      touch-action: manipulation;
      width: 100%;
    }
    .submit-btn:hover:not(:disabled) {
      opacity: 0.9;
      transform: translateY(-1px);
      box-shadow: 0 12px 30px rgba(138, 48, 224, 0.5);
    }
    .submit-btn:active:not(:disabled) { transform: translateY(0); }
    .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }

    .spinner {
      width: 1rem;
      height: 1rem;
      border: 2px solid rgba(255,255,255,0.4);
      border-top-color: #fff;
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    .alt-link {
      text-align: center;
      font-size: 0.85rem;
      color: oklch(54% 0 0);
      margin: 1.6rem 0 0;
    }
    .alt-link a { color: #8a30e0; font-weight: 700; text-decoration: none; }
    .alt-link a:hover { text-decoration: underline; }

    @media (prefers-reduced-motion: reduce) {
      .error-msg { animation: none; }
      .submit-btn { transition: none; }
      .input-wrap input { transition: none; }
    }

    @media (max-width: 640px) {
      .page { padding: 0; align-items: stretch; }
      .card { grid-template-columns: 1fr; border-radius: 0; box-shadow: none; min-height: 100dvh; }
      .art-panel { display: none; }
      .form-panel { padding: 3rem 1.5rem; align-items: stretch; }
      .form-inner { max-width: 100%; }
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
