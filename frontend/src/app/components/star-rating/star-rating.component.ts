import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  template: `
    <div class="stars">
      @for (star of stars; track star) {
        <button
          type="button"
          class="star"
          [class.filled]="star <= (hoverValue || value)"
          (mouseenter)="interactive && (hoverValue = star)"
          (mouseleave)="interactive && (hoverValue = 0)"
          (click)="interactive && select(star)"
          [disabled]="!interactive"
        >★</button>
      }
    </div>
  `,
  styles: [`
    .stars { display: inline-flex; gap: 0.1rem; }
    .star {
      font-size: 1.5rem;
      color: var(--clr-border-strong);
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.1rem;
      transition: color 0.15s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);
      line-height: 1;
    }
    .star:not(:disabled):hover { transform: scale(1.2); }
    .star:disabled { cursor: default; }
    .star.filled { color: var(--clr-amber); }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingComponent {
  @Input() value = 0;
  @Input() interactive = true;
  @Output() rated = new EventEmitter<number>();

  stars = [1, 2, 3, 4, 5];
  hoverValue = 0;

  select(rating: number): void {
    this.value = rating;
    this.rated.emit(rating);
  }
}
