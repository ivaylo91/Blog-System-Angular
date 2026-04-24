import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  template: `
    <div class="toast-container" aria-live="polite" aria-atomic="false">
      @for (toast of toastService.toasts(); track toast.id) {
        <div class="toast" [class]="'toast-' + toast.type" role="status">
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
      z-index: var(--z-toast);
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      pointer-events: none;
    }
    .toast {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1rem;
      border-radius: 0.875rem;
      font-size: 0.875rem;
      font-weight: 500;
      max-width: 360px;
      box-shadow: var(--shadow-md);
      pointer-events: auto;
      animation: slide-in 0.28s var(--ease-out-expo);
    }
    @keyframes slide-in {
      from { opacity: 0; transform: translateX(1.25rem) scale(0.96); }
      to   { opacity: 1; transform: translateX(0) scale(1); }
    }
    .toast-success { background: var(--clr-green-bg); color: var(--clr-green-text); border: 1px solid var(--clr-green); }
    .toast-error   { background: var(--clr-error-bg); color: var(--clr-error-dark); border: 1px solid var(--clr-error); }
    .toast-info    { background: var(--clr-amber-bg); color: var(--clr-amber-text); border: 1px solid var(--clr-amber-border); }
    .toast-icon { width: 1rem; height: 1rem; flex-shrink: 0; }
    .toast span { flex: 1; }
    .toast-close {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.2rem;
      opacity: 0.6;
      display: flex;
      align-items: center;
      border-radius: 0.25rem;
      transition: opacity 0.15s var(--ease-out-expo);
      touch-action: manipulation;
    }
    .toast-close:hover { opacity: 1; }
    .toast-close:active { transform: scale(0.9); }
    .toast-close svg { width: 0.9rem; height: 0.9rem; }
    @media (max-width: 480px) {
      .toast-container { left: 1rem; right: 1rem; bottom: 1rem; }
      .toast { max-width: 100%; }
    }
    @media (prefers-reduced-motion: reduce) {
      .toast { animation: none; }
      .toast-close { transition: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  toastService = inject(ToastService);
}
