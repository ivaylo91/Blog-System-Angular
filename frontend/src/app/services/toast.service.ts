import { Injectable, signal } from '@angular/core';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts = signal<Toast[]>([]);
  private counter = 0;

  success(message: string, duration = 3500): void { this.show(message, 'success', duration); }
  error(message: string, duration = 4500): void { this.show(message, 'error', duration); }
  info(message: string, duration = 3500): void { this.show(message, 'info', duration); }

  dismiss(id: number): void {
    this.toasts.update(t => t.filter(x => x.id !== id));
  }

  private show(message: string, type: Toast['type'], duration: number): void {
    const id = ++this.counter;
    this.toasts.update(t => [...t, { id, message, type }]);
    setTimeout(() => this.dismiss(id), duration);
  }
}
