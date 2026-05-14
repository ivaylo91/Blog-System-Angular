import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, FormsModule],
  template: `
    <div class="page">
      <div class="card">

        <!-- Left notebook art panel -->
        <div class="art-panel" aria-hidden="true">
          <div class="ruled-lines"></div>
          <div class="art-content">
            <span class="art-eyebrow">✎ твоите данни</span>
            <div class="avatar-frame">
              @if (previewUrl()) {
                <img [src]="previewUrl()" class="avatar-img" alt="" />
              } @else {
                <span class="avatar-init">{{ userInitial() }}</span>
              }
            </div>
            <span class="art-name">{{ auth.user()?.name || auth.user()?.email || 'Готвач' }}</span>
            <span class="art-role">{{ auth.isAdmin() ? 'Администратор' : 'Готвач' }}</span>
          </div>
          <div class="corner-stamp">твоят<br>профил</div>
        </div>

        <!-- Right form -->
        <main class="form-panel">
          <div class="form-inner">

            <h1>Редактирай</h1>
            <p class="subtitle">Смени името или добави снимка.</p>

            @if (success()) {
              <div class="success-msg" role="status">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                {{ success() }}
              </div>
            }
            @if (error()) {
              <div class="error-msg" role="alert">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                {{ error() }}
              </div>
            }

            <form (submit)="onSubmit($event)" novalidate>

              <div class="field">
                <div class="input-wrap">
                  <span class="input-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  </span>
                  <input type="text" [(ngModel)]="name" name="name"
                         placeholder="Твоето име" autocomplete="name" aria-label="Твоето име" />
                </div>
              </div>

              <div class="field">
                <div class="input-wrap">
                  <span class="input-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/>
                    </svg>
                  </span>
                  <input type="email" [value]="auth.user()?.email || ''" disabled
                         aria-label="Имейл адрес" />
                </div>
              </div>

              <label class="upload-label" for="avatar-input">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
                {{ imageFile ? imageFile.name : 'Качи профилна снимка' }}
              </label>
              <input type="file" id="avatar-input" (change)="onFileChange($event)"
                     accept="image/jpeg,image/png,image/webp" aria-label="Профилна снимка" />

              <button type="submit" [disabled]="loading()" class="submit-btn">
                @if (loading()) {
                  <span class="spinner" aria-hidden="true"></span>
                  Запазване...
                } @else {
                  Запази промените
                }
              </button>

            </form>

            <p class="alt-link"><a routerLink="/dashboard">← Обратно към таблото</a></p>
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
      min-height: 520px;
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
    .art-content {
      position: relative;
      z-index: 1;
      padding-left: 3rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .art-eyebrow {
      display: block;
      font-family: var(--font-type);
      font-size: 0.6rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--terracotta-2);
      margin-bottom: 1.25rem;
    }
    .avatar-frame {
      width: 5.5rem;
      height: 5.5rem;
      border-radius: 50%;
      overflow: hidden;
      background: var(--terracotta);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      border: 2px dashed var(--rule-strong);
      box-shadow: 0 4px 16px rgba(60,40,15,0.18);
    }
    .avatar-img { width: 100%; height: 100%; object-fit: cover; }
    .avatar-init {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 800;
      font-size: 2.2rem;
      color: var(--paper);
      line-height: 1;
    }
    .art-name {
      display: block;
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 700;
      font-size: clamp(1.3rem, 2.5vw, 1.75rem);
      line-height: 1.1;
      color: var(--ink);
      margin-bottom: 0.25rem;
      max-width: 16ch;
    }
    .art-role {
      display: block;
      font-family: var(--font-hand);
      font-size: 1rem;
      color: var(--ink-mute);
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

    /* Messages */
    .success-msg, .error-msg {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.65rem 1rem;
      font-family: var(--font-hand);
      font-size: 0.95rem;
      margin-bottom: 1rem;
    }
    .success-msg {
      background: var(--clr-green-bg);
      color: var(--olive-2);
      border: 1px solid rgba(107, 122, 58, 0.4);
    }
    .error-msg {
      background: var(--clr-error-bg);
      color: var(--clr-error);
      border: 1px solid rgba(168, 58, 44, 0.35);
      animation: shake 0.4s ease both;
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25%       { transform: translateX(-5px); }
      75%       { transform: translateX(4px); }
    }
    .success-msg svg, .error-msg svg { width: 1rem; height: 1rem; flex-shrink: 0; }

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
      padding: 0.7rem 1rem 0.7rem 1.6rem;
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
    .input-wrap input:disabled { color: var(--ink-mute); opacity: 0.65; cursor: not-allowed; }

    /* File upload */
    .upload-label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.7rem 1rem;
      border: 1px dashed var(--rule-strong);
      background: transparent;
      cursor: pointer;
      font-family: var(--font-body);
      font-size: 0.88rem;
      color: var(--ink-mute);
      transition: border-color 0.2s, color 0.2s;
    }
    .upload-label:hover { border-color: var(--terracotta); color: var(--terracotta); }
    .upload-label svg { width: 1rem; height: 1rem; flex-shrink: 0; }
    input[type="file"] { display: none; }

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
      .submit-btn, .upload-label, .input-wrap input { transition: none; }
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
export class ProfileComponent {
  auth = inject(AuthService);
  private seo = inject(SeoService);

  name = this.auth.user()?.name || '';
  imageFile: File | null = null;
  previewUrl = signal<string | null>(this.auth.user()?.image || null);
  loading = signal(false);
  success = signal('');
  error = signal('');

  constructor() {
    this.seo.set({
      title: 'Профил',
      description: 'Управлявай настройките на своя профил в кулинарния блог на Иво.',
    });
  }

  userInitial(): string {
    const n = this.auth.user()?.name || this.auth.user()?.email || '?';
    return n.charAt(0).toUpperCase();
  }

  onFileChange(e: Event): void {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
      this.imageFile = file;
      this.previewUrl.set(URL.createObjectURL(file));
    }
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    this.loading.set(true);
    this.success.set('');
    this.error.set('');

    const formData = new FormData();
    formData.append('name', this.name);
    if (this.imageFile) {
      formData.append('image', this.imageFile);
    }

    this.auth.updateProfile(formData).subscribe({
      next: () => {
        this.loading.set(false);
        this.success.set('Профилът е обновен успешно.');
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err.error?.message || 'Грешка при обновяване.');
      },
    });
  }
}
