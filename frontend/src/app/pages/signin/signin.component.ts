import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterLink, FormsModule],
  template: `
    <div class="auth-page">
      <div class="auth-card">
        <h1>Вход</h1>
        <p class="subtitle">Влез в профила си, за да оставяш коментари и запазваш рецепти.</p>

        @if (error) {
          <div class="error-msg">{{ error }}</div>
        }

        <form (submit)="onSubmit($event)">
          <label>Имейл</label>
          <div class="input-wrap">
            <input type="email" [(ngModel)]="email" name="email" required placeholder="твоят&#64;имейл.бг" #emailInput="ngModel" />
            @if (emailInput.valid && email) {
              <span class="check-icon">✓</span>
            }
          </div>

          <label>Парола</label>
          <div class="input-wrap">
            <input type="password" [(ngModel)]="password" name="password" required minlength="8" placeholder="Минимум 8 символа" #passInput="ngModel" />
            @if (passInput.valid && password) {
              <span class="check-icon">✓</span>
            }
          </div>

          <button type="submit" [disabled]="loading" class="submit-btn">
            {{ loading ? 'Влизане...' : 'Вход' }}
          </button>
        </form>

        <p class="alt-link">Нямаш профил? <a routerLink="/register">Регистрирай се</a></p>
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
    }
    .auth-card {
      max-width: 420px;
      width: 100%;
      padding: 2.5rem;
      background: rgba(255,255,255,0.9);
      border-radius: 2rem;
      border: 1px solid rgba(0,0,0,0.06);
      box-shadow: 0 20px 60px rgba(0,0,0,0.06);
    }
    h1 {
      font-family: 'Georgia', serif;
      font-size: 1.8rem;
      color: #1c1917;
      margin: 0 0 0.5rem;
    }
    .subtitle { color: #78716c; font-size: 0.9rem; margin: 0 0 1.5rem; }
    .error-msg {
      background: #fef2f2;
      color: #dc2626;
      padding: 0.75rem 1rem;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }
    form { display: flex; flex-direction: column; gap: 0.5rem; }
    label {
      font-size: 0.85rem;
      font-weight: 600;
      color: #44403c;
      margin-top: 0.5rem;
    }
    input {
      padding: 0.7rem 1rem;
      border: 1px solid #e7e5e4;
      border-radius: 0.75rem;
      font-size: 0.95rem;
      outline: none;
    }
    .input-wrap {
      position: relative;
    }
    .input-wrap input {
      width: 100%;
      box-sizing: border-box;
      padding-right: 2.5rem;
    }
    .check-icon {
      position: absolute;
      right: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      color: #059669;
      font-size: 1.1rem;
      font-weight: 700;
      pointer-events: none;
    }
    input:focus { border-color: #059669; box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.15); }
    .submit-btn {
      margin-top: 1rem;
      padding: 0.75rem;
      background: #92400e;
      color: white;
      border: none;
      border-radius: 9999px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
    }
    .submit-btn:hover { background: #78350f; }
    .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
    .alt-link {
      text-align: center;
      font-size: 0.875rem;
      color: #78716c;
      margin-top: 1.25rem;
    }
    .alt-link a { color: #92400e; font-weight: 600; text-decoration: none; }
  `],
})
export class SigninComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';
  error = '';
  loading = false;

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
      },
    });
  }
}
