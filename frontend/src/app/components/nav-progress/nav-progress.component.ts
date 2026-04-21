import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-nav-progress',
  standalone: true,
  template: `
    @if (visible()) {
      <div class="nav-bar" [class.done]="done()"></div>
    }
  `,
  styles: [`
    .nav-bar {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10000;
      height: 3px;
      width: 0%;
      background: linear-gradient(90deg, var(--clr-green), var(--clr-brand-hover));
      border-radius: 0 2px 2px 0;
      box-shadow: 0 0 10px color-mix(in oklch, var(--clr-green) 50%, transparent);
      animation: grow 1.2s cubic-bezier(0.1, 0.6, 0.4, 1) forwards;
    }
    .nav-bar.done {
      animation: finish 0.22s ease-in forwards;
    }
    @keyframes grow {
      0%   { width: 0%; }
      15%  { width: 25%; }
      40%  { width: 50%; }
      70%  { width: 70%; }
      100% { width: 82%; }
    }
    @keyframes finish {
      from { width: 82%; opacity: 1; }
      to   { width: 100%; opacity: 0; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavProgressComponent {
  visible = signal(false);
  done = signal(false);

  constructor() {
    inject(Router).events.pipe(takeUntilDestroyed()).subscribe(event => {
      if (event instanceof NavigationStart) {
        this.done.set(false);
        this.visible.set(true);
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.done.set(true);
        setTimeout(() => this.visible.set(false), 220);
      }
    });
  }
}
