import { Component, inject, OnInit } from '@angular/core';
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
        <h1>Регистрация</h1>
        <p class="subtitle">Създай профил, за да оставяш коментари и запазваш любими рецепти.</p>

        @if (error) {
          <div class="error-msg">{{ error }}</div>
        }

        <form (submit)="onSubmit($event)">
          <label>Име</label>
          <div class="input-wrap">
            <input type="text" [(ngModel)]="name" name="name" required placeholder="Твоето име" #nameInput="ngModel" />
            @if (nameInput.valid && name) {
              <span class="check-icon">✓</span>
            }
          </div>

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

          <label>Потвърди парола</label>
          <div class="input-wrap">
            <input type="password" [(ngModel)]="passwordConfirmation" name="password_confirmation" required minlength="8" placeholder="Повтори паролата" #confirmInput="ngModel" />
            @if (confirmInput.valid && passwordConfirmation && password === passwordConfirmation) {
              <span class="check-icon">✓</span>
            }
          </div>

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
      background: #ffffff;
      border-radius: 2rem;
      border: 1px solid rgba(0,0,0,0.14);
      box-shadow: 0 20px 60px rgba(0,0,0,0.12);
    }
    h1 {
      font-family: 'Georgia', serif;
      font-size: 1.8rem;
      color: #1c1917;
      margin: 0 0 0.5rem;
    }
    .subtitle { color: #44403c; font-size: 0.9rem; margin: 0 0 1.5rem; }
    .error-msg {
      background: #fef2f2;
      color: #b91c1c;
      border: 1px solid #fecaca;
      padding: 0.75rem 1rem;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    form { display: flex; flex-direction: column; gap: 0.5rem; }
    label {
      font-size: 0.85rem;
      font-weight: 700;
      color: #1c1917;
      margin-top: 0.5rem;
    }
    input {
      padding: 0.7rem 1rem;
      border: 1.5px solid #c9c5c2;
      border-radius: 0.75rem;
      font-size: 0.95rem;
      outline: none;
      color: #1c1917;
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
      background: #78350f;
      color: white;
      border: none;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 1rem;
      cursor: pointer;
    }
    .submit-btn:hover { background: #5c2a0b; }
    .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
    .alt-link {
      text-align: center;
      font-size: 0.875rem;
      color: #44403c;
      margin-top: 1.25rem;
    }
    .alt-link a { color: #78350f; font-weight: 700; text-decoration: none; }
  `],
})
export class RegisterComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  private seo = inject(SeoService);

  name = '';

  ngOnInit(): void {
    this.seo.set({
      title: 'Регистрация',
      description: 'Създай безплатен профил в кулинарния блог на Иво и започни да споделяш мнения и да запазваш любими рецепти.',
    });
  }
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
