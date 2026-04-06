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
      background: rgba(0,0,0,0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
    }
    .modal {
      background: white;
      border-radius: 1.5rem;
      padding: 2rem;
      max-width: 400px;
      width: 90%;
      box-shadow: 0 20px 60px rgba(0,0,0,0.15);
    }
    h3 {
      margin: 0 0 0.5rem;
      font-family: 'Georgia', serif;
      color: #1c1917;
    }
    p {
      color: #57534e;
      font-size: 0.9rem;
      line-height: 1.6;
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
      transition: all 0.2s;
    }
    .btn-cancel {
      background: white;
      color: #57534e;
      border-color: #d6d3d1;
    }
    .btn-cancel:hover {
      background: #f5f5f4;
    }
    .btn-confirm {
      background: #dc2626;
      color: white;
      border-color: #dc2626;
    }
    .btn-confirm:hover {
      background: #b91c1c;
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
