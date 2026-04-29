import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="profile-page">
      <div class="profile-card">
        <h1>Моят профил</h1>

        @if (success()) {
          <div class="success-msg">{{ success() }}</div>
        }
        @if (error()) {
          <div class="error-msg">{{ error() }}</div>
        }

        <form (submit)="onSubmit($event)">
          <label>Име</label>
          <input type="text" [(ngModel)]="name" name="name" />

          <label>Имейл</label>
          <input type="email" [value]="auth.user()?.email" disabled />

          <label>Профилна снимка</label>
          <input type="file" (change)="onFileChange($event)" accept="image/jpeg,image/png,image/webp" />

          @if (previewUrl()) {
            <img [src]="previewUrl()" class="avatar-preview" alt="Преглед" />
          }

          <button type="submit" [disabled]="loading()" class="submit-btn">
            {{ loading() ? 'Запазване...' : 'Запази промените' }}
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .profile-page {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: calc(100dvh - 8rem);
      padding: var(--space-9) var(--space-6);
      background: var(--clr-bg);
    }
    .profile-card {
      max-width: 480px;
      width: 100%;
      padding: var(--space-8) var(--space-7);
      background: var(--clr-surface);
      border-radius: var(--radius-xl);
      border: 1px solid var(--clr-border-faint);
      box-shadow: var(--shadow-md);
    }
    h1 {
      font-family: var(--font-display);
      font-size: clamp(1.6rem, 3vw, 2rem);
      font-weight: 800;
      color: var(--clr-text);
      margin: 0 0 var(--space-7);
      letter-spacing: -0.025em;
    }
    .success-msg {
      background: var(--clr-green-bg);
      color: var(--clr-green-text);
      border: 1px solid color-mix(in oklch, var(--clr-green) 35%, transparent);
      padding: var(--space-3) var(--space-4);
      border-radius: var(--radius-sm);
      font-size: 0.875rem;
      font-weight: 500;
      margin-bottom: var(--space-5);
    }
    .error-msg {
      background: var(--clr-error-bg);
      color: var(--clr-error-dark);
      border: 1px solid color-mix(in oklch, var(--clr-error) 35%, transparent);
      padding: var(--space-3) var(--space-4);
      border-radius: var(--radius-sm);
      font-size: 0.875rem;
      font-weight: 500;
      margin-bottom: var(--space-5);
    }
    form { display: flex; flex-direction: column; gap: var(--space-2); }
    label {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--clr-text-muted);
      letter-spacing: 0.02em;
      margin-top: var(--space-3);
    }
    input {
      padding: 0.78rem var(--space-4);
      border: 1.5px solid var(--clr-border-strong);
      border-radius: var(--radius-sm);
      font-size: 0.95rem;
      outline: none;
      color: var(--clr-text);
      background: var(--clr-surface-alt);
      width: 100%;
      box-sizing: border-box;
      transition: border-color 0.2s var(--ease-out-expo), box-shadow 0.2s var(--ease-out-expo), background 0.2s var(--ease-out-expo);
    }
    input::placeholder { color: var(--clr-text-faint); }
    input:disabled { background: var(--clr-surface-alt); color: var(--clr-text-faint); cursor: not-allowed; }
    input:focus { border-color: var(--clr-brand); box-shadow: 0 0 0 3px color-mix(in oklch, var(--clr-brand) 14%, transparent); background: var(--clr-surface); }
    .avatar-preview {
      width: 88px;
      height: 88px;
      border-radius: var(--radius-circle);
      object-fit: cover;
      margin-top: var(--space-3);
      border: 2px solid var(--clr-border);
    }
    .submit-btn {
      margin-top: var(--space-5);
      padding: 0.85rem;
      background: var(--clr-brand);
      color: oklch(100% 0 0);
      border: none;
      border-radius: var(--radius-pill);
      font-weight: 700;
      font-size: 0.95rem;
      cursor: pointer;
      transition: background 0.18s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);
      touch-action: manipulation;
    }
    .submit-btn:hover:not(:disabled) { background: var(--clr-brand-dark); transform: translateY(-1px); }
    .submit-btn:active:not(:disabled) { transform: translateY(0); }
    .submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
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
