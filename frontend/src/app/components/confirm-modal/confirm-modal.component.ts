import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  template: `
    @if (open) {
      <div class="overlay" (click)="cancel()">
        <div class="modal" (click)="$event.stopPropagation()">
          <h3>{{ title }}</h3>
          <p>{{ message }}</p>
          <div class="actions">
            <button class="btn-cancel" (click)="cancel()">Отказ</button>
            <button class="btn-confirm" (click)="confirm()">{{ confirmLabel }}</button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.45);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
      animation: fade-in 0.18s var(--ease-out-expo);
    }
    @keyframes fade-in {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    .modal {
      background: var(--clr-surface);
      border-radius: 1.5rem;
      padding: 2rem;
      max-width: 400px;
      width: 90%;
      box-shadow: var(--shadow-xl);
      animation: modal-in 0.25s var(--ease-out-expo);
    }
    @keyframes modal-in {
      from { opacity: 0; transform: translateY(12px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    h3 {
      margin: 0 0 0.5rem;
      font-family: var(--font-display);
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--clr-text);
    }
    p {
      color: var(--clr-text-muted);
      font-size: 0.9rem;
      line-height: 1.6;
      margin: 0;
    }
    .actions {
      display: flex;
      gap: 0.75rem;
      justify-content: flex-end;
      margin-top: 1.5rem;
    }
    .btn-cancel, .btn-confirm {
      padding: 0.5rem 1.25rem;
      border-radius: 9999px;
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      border: 1px solid;
      transition: background 0.18s var(--ease-out-expo), color 0.18s var(--ease-out-expo), transform 0.1s var(--ease-out-expo);
      touch-action: manipulation;
    }
    .btn-cancel:active, .btn-confirm:active { transform: scale(0.97); }
    .btn-cancel {
      background: var(--clr-surface);
      color: var(--clr-text-muted);
      border-color: var(--clr-border-strong);
    }
    .btn-cancel:hover { background: var(--clr-surface-hover); }
    .btn-confirm {
      background: var(--clr-error);
      color: var(--clr-surface);
      border-color: var(--clr-error);
    }
    .btn-confirm:hover { background: var(--clr-error-dark); border-color: var(--clr-error-dark); }
    @media (prefers-reduced-motion: reduce) {
      .overlay, .modal { animation: none; }
      .btn-cancel, .btn-confirm { transition: none; }
      .btn-cancel:active, .btn-confirm:active { transform: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmModalComponent {
  @Input() open = false;
  @Input() title = 'Потвърждение';
  @Input() message = 'Сигурни ли сте?';
  @Input() confirmLabel = 'Изтрий';
  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  confirm(): void {
    this.confirmed.emit();
  }

  cancel(): void {
    this.cancelled.emit();
  }
}
