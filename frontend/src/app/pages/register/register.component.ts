import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  template: `
    <div class="auth-page">
      <div class="auth-card">
        <h1>Регистрация</h1>
        <p class="subtitle">Създай профил, за да оставяш коментари и запазваш любими рецепти.</p>

        @if (error) {
          <div class="error-msg">{{ error }}</div>
        }

        <form (submit)="onSubmit($event)">
          <label>Име</label>
          <input type="text" [(ngModel)]="name" name="name" required placeholder="Твоето име" />

          <label>Имейл</label>
          <input type="email" [(ngModel)]="email" name="email" required placeholder="твоят&#64;имейл.бг" />

          <label>Парола</label>
          <input type="password" [(ngModel)]="password" name="password" required minlength="8" placeholder="Минимум 8 символа" />

          <label>Потвърди парола</label>
          <input type="password" [(ngModel)]="passwordConfirmation" name="password_confirmation" required minlength="8" placeholder="Повтори паролата" />

          <button type="submit" [disabled]="loading" class="submit-btn">
            {{ loading ? 'Регистриране...' : 'Регистрация' }}
          </button>
        </form>

        <p class="alt-link">Вече имаш профил? <a routerLink="/signin">Вход</a></p>
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
    input:focus { border-color: #d97706; }
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
export class RegisterComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  name = '';
  email = '';
  password = '';
  passwordConfirmation = '';
  error = '';
  loading = false;

  onSubmit(e: Event): void {
    e.preventDefault();
    if (this.password !== this.passwordConfirmation) {
      this.error = 'Паролите не съвпадат.';
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
      },
    });
  }
}
