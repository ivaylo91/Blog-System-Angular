import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="profile-page">
      <div class="profile-card">
        <h1>Моят профил</h1>

        @if (success) {
          <div class="success-msg">{{ success }}</div>
        }
        @if (error) {
          <div class="error-msg">{{ error }}</div>
        }

        <form (submit)="onSubmit($event)">
          <label>Име</label>
          <input type="text" [(ngModel)]="name" name="name" />

          <label>Имейл</label>
          <input type="email" [value]="auth.user()?.email" disabled />

          <label>Профилна снимка</label>
          <input type="file" (change)="onFileChange($event)" accept="image/jpeg,image/png,image/webp" />

          @if (previewUrl) {
            <img [src]="previewUrl" class="avatar-preview" alt="Преглед" />
          }

          <button type="submit" [disabled]="loading" class="submit-btn">
            {{ loading ? 'Запазване...' : 'Запази промените' }}
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .profile-page {
      display: flex;
      justify-content: center;
      padding: 2rem;
    }
    .profile-card {
      max-width: 500px;
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
      margin: 0 0 1.5rem;
    }
    .success-msg {
      background: #f0fdf4;
      color: #166534;
      padding: 0.75rem 1rem;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }
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
    input:disabled { background: #f5f5f4; color: #78716c; }
    input:focus { border-color: #d97706; }
    .avatar-preview {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      margin-top: 0.5rem;
    }
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
  `],
})
export class ProfileComponent implements OnInit {
  auth = inject(AuthService);

  name = '';
  imageFile: File | null = null;
  previewUrl: string | null = null;
  loading = false;
  success = '';
  error = '';

  ngOnInit(): void {
    this.name = this.auth.user()?.name || '';
    this.previewUrl = this.auth.user()?.image || null;
  }

  onFileChange(e: Event): void {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
      this.imageFile = file;
      this.previewUrl = URL.createObjectURL(file);
    }
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    this.loading = true;
    this.success = '';
    this.error = '';

    const formData = new FormData();
    formData.append('name', this.name);
    if (this.imageFile) {
      formData.append('image', this.imageFile);
    }

    this.auth.updateProfile(formData).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Профилът е обновен успешно.';
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.message || 'Грешка при обновяване.';
      },
    });
  }
}
