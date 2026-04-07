import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  template: `
    <div class="toast-container">
      @for (toast of toastService.toasts(); track toast.id) {
        <div class="toast" [class]="'toast-' + toast.type">
          <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            @if (toast.type === 'success') {
              <polyline points="20 6 9 17 4 12"/>
            } @else if (toast.type === 'error') {
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            } @else {
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            }
          </svg>
          <span>{{ toast.message }}</span>
          <button class="toast-close" (click)="toastService.dismiss(toast.id)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      }
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      bottom: 1.5rem;
      right: 1.5rem;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      pointer-events: none;
    }
    .toast {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.75rem 1rem;
      border-radius: 0.875rem;
      font-size: 0.875rem;
      font-weight: 500;
      max-width: 360px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      pointer-events: auto;
      animation: slide-in 0.25s ease;
    }
    @keyframes slide-in {
      from { opacity: 0; transform: translateX(1rem) scale(0.95); }
      to   { opacity: 1; transform: translateX(0) scale(1); }
    }
    .toast-success { background: #ecfdf5; color: #065f46; border: 1px solid #6ee7b7; }
    .toast-error   { background: #fef2f2; color: #991b1b; border: 1px solid #fca5a5; }
    .toast-info    { background: #eff6ff; color: #1e40af; border: 1px solid #93c5fd; }
    .toast-icon { width: 1rem; height: 1rem; flex-shrink: 0; }
    .toast span { flex: 1; }
    .toast-close {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      opacity: 0.6;
      display: flex;
      align-items: center;
    }
    .toast-close:hover { opacity: 1; }
    .toast-close svg { width: 0.9rem; height: 0.9rem; }
    @media (max-width: 480px) {
      .toast-container { left: 1rem; right: 1rem; bottom: 1rem; }
      .toast { max-width: 100%; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  toastService = inject(ToastService);
}
