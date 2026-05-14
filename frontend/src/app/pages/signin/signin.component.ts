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

        <!-- Left notebook art panel -->
        <div class="art-panel" aria-hidden="true">
          <div class="ruled-lines"></div>
          <div class="art-text">
            <span class="art-eyebrow">✎ вход в тефтера</span>
            <span class="art-title">влез<br>отново.</span>
            <span class="art-sub">радвам се,<br>че пак намина.</span>
          </div>
          <div class="corner-stamp">частна<br>кухня</div>
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
      padding: clamp(1.5rem, 4vw, 3rem);
      background: var(--paper);
    }

    .card {
      display: grid;
      grid-template-columns: 5fr 7fr;
      width: 100%;
      max-width: 820px;
      overflow: hidden;
      box-shadow: var(--shadow-lg);
      background: var(--clr-surface);
      border: 1px solid var(--rule-strong);
    }

    /* ── Notebook art panel ──────────────────────────────────────── */
    .art-panel {
      position: relative;
      overflow: hidden;
      background: var(--paper-2);
      border-right: 1px solid var(--rule);
      min-height: 460px;
      padding: 3rem 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .ruled-lines {
      position: absolute;
      inset: 0;
      background-image: repeating-linear-gradient(
        to bottom,
        transparent 0,
        transparent calc(1.75rem - 1px),
        var(--rule) calc(1.75rem - 1px),
        var(--rule) 1.75rem
      );
      background-size: 100% 1.75rem;
      background-position: 0 2rem;
      opacity: 0.45;
    }
    .art-panel::before {
      content: '';
      position: absolute;
      left: 2.5rem;
      top: 0;
      bottom: 0;
      width: 1px;
      background: var(--pencil-red);
      opacity: 0.5;
    }
    .art-text {
      position: relative;
      z-index: 1;
      padding-left: 3rem;
    }
    .art-eyebrow {
      display: block;
      font-family: var(--font-type);
      font-size: 0.6rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--terracotta-2);
      margin-bottom: 1rem;
    }
    .art-title {
      display: block;
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 700;
      font-size: clamp(2.25rem, 5vw, 3.5rem);
      line-height: 0.95;
      color: var(--ink);
      margin-bottom: 1rem;
    }
    .art-sub {
      display: block;
      font-family: var(--font-hand);
      font-size: 1.2rem;
      color: var(--ink-mute);
      line-height: 1.3;
    }
    .corner-stamp {
      position: absolute;
      top: 1.25rem;
      right: 1.25rem;
      border: 1.5px solid var(--terracotta);
      padding: 0.3rem 0.6rem;
      font-family: var(--font-type);
      font-size: 0.5rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--terracotta-2);
      line-height: 1.5;
      transform: rotate(4deg);
      text-align: center;
    }

    /* ── Form panel ──────────────────────────────────────────────── */
    .form-panel {
      padding: clamp(2.5rem, 6vw, 4rem) clamp(1.75rem, 4vw, 3rem);
      background: var(--clr-surface);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .form-inner {
      width: 100%;
      max-width: 340px;
      display: flex;
      flex-direction: column;
    }

    h1 {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--ink);
      margin: 0 0 0.3rem;
      text-align: center;
    }
    .subtitle {
      font-family: var(--font-hand);
      font-size: 1rem;
      color: var(--ink-mute);
      margin: 0 0 1.75rem;
      text-align: center;
    }

    /* Error */
    .error-msg {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--clr-error-bg);
      color: var(--clr-error);
      border: 1px solid rgba(168, 58, 44, 0.35);
      padding: 0.65rem 1rem;
      font-family: var(--font-hand);
      font-size: 0.95rem;
      margin-bottom: 1rem;
      animation: shake 0.4s ease both;
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25%       { transform: translateX(-5px); }
      75%       { transform: translateX(4px); }
    }
    .error-msg svg { width: 1rem; height: 1rem; flex-shrink: 0; }

    form { display: flex; flex-direction: column; gap: 1rem; }
    .field { width: 100%; }
    .input-wrap { position: relative; }

    .input-icon {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      color: var(--ink-mute);
      display: flex;
      pointer-events: none;
    }
    .input-icon svg { width: 0.9rem; height: 0.9rem; }

    .input-wrap input {
      width: 100%;
      box-sizing: border-box;
      padding: 0.7rem 2.5rem 0.7rem 1.6rem;
      border: none;
      border-bottom: 1px solid var(--rule-strong);
      border-radius: 0;
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1rem;
      outline: none;
      color: var(--ink);
      background: transparent;
      transition: border-color 0.2s;
    }
    .input-wrap input::placeholder { color: var(--ink-mute); font-style: normal; font-family: var(--font-body); font-size: 0.88rem; }
    .input-wrap input:focus { border-bottom-color: var(--terracotta); border-bottom-width: 2px; }
    .input-wrap input[aria-invalid="true"] { border-bottom-color: var(--clr-error); }

    .toggle-btn {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      color: var(--ink-mute);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      transition: color 0.15s;
    }
    .toggle-btn:hover { color: var(--ink); }
    .toggle-btn svg { width: 1rem; height: 1rem; }

    .submit-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 0.75rem;
      padding: 0.825rem 2rem;
      background: var(--terracotta);
      color: var(--paper);
      border: none;
      font-family: var(--font-type);
      font-size: 0.68rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      cursor: pointer;
      box-shadow: var(--shadow-sm);
      transition: background 0.18s, transform 0.15s;
      touch-action: manipulation;
      width: 100%;
    }
    .submit-btn:hover:not(:disabled) { background: var(--terracotta-2); transform: translateY(-1px); }
    .submit-btn:active:not(:disabled) { transform: translateY(0); }
    .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }

    .spinner {
      width: 1rem;
      height: 1rem;
      border: 2px solid rgba(243,234,214,0.4);
      border-top-color: var(--paper);
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    .alt-link {
      font-family: var(--font-body);
      text-align: center;
      font-size: 0.85rem;
      color: var(--ink-mute);
      margin: 1.75rem 0 0;
    }
    .alt-link a { color: var(--terracotta); font-weight: 600; text-decoration: none; border-bottom: 1px solid transparent; transition: border-color 0.15s; }
    .alt-link a:hover { border-bottom-color: var(--terracotta); }

    @media (prefers-reduced-motion: reduce) {
      .error-msg { animation: none; }
      .submit-btn { transition: none; }
      .input-wrap input { transition: none; }
    }

    @media (max-width: 640px) {
      .page { padding: 0; align-items: stretch; }
      .card { grid-template-columns: 1fr; border: none; box-shadow: none; min-height: 100dvh; }
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
