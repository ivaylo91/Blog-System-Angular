import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found">
      <div class="content">
        <p class="num" aria-hidden="true">404</p>
        <h1>Страницата не е намерена</h1>
        <p class="sub">Изглежда тази рецепта е изгоряла или никога не е съществувала.</p>
        <div class="actions">
          <a routerLink="/" class="btn-primary">Към начало</a>
          <a routerLink="/recipes" class="btn-secondary">Разгледай рецепти</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .not-found {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: calc(100dvh - 8rem);
      padding: 3rem var(--space-6);
      background: var(--clr-surface);
    }
    .content {
      text-align: left;
      max-width: 520px;
    }
    .num {
      font-family: var(--font-display);
      font-size: clamp(5rem, 15vw, 10rem);
      font-weight: 800;
      color: var(--clr-brand);
      opacity: 0.12;
      line-height: 1;
      margin: 0 0 var(--space-4);
      letter-spacing: -0.04em;
    }
    h1 {
      font-family: var(--font-display);
      font-size: clamp(1.6rem, 3vw, 2.25rem);
      font-weight: 800;
      color: var(--clr-text);
      margin: 0 0 var(--space-4);
      letter-spacing: -0.02em;
      line-height: 1.1;
    }
    .sub {
      font-size: 1rem;
      color: var(--clr-text-muted);
      margin: 0 0 var(--space-8);
      line-height: 1.65;
      max-width: 38ch;
    }
    .actions { display: flex; gap: var(--space-3); flex-wrap: wrap; }
    .btn-primary {
      display: inline-flex;
      align-items: center;
      padding: var(--space-3) var(--space-6);
      background: var(--clr-brand);
      color: var(--paper);
      border-radius: var(--radius-pill);
      text-decoration: none;
      font-weight: 700;
      font-size: 0.9rem;
      transition: background 0.18s, transform 0.15s;
      touch-action: manipulation;
    }
    .btn-primary:hover { background: var(--clr-brand-dark); transform: translateY(-1px); }
    .btn-primary:active { transform: translateY(0); }
    .btn-secondary {
      display: inline-flex;
      align-items: center;
      padding: var(--space-3) var(--space-6);
      background: transparent;
      color: var(--clr-text);
      border-radius: var(--radius-pill);
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
      border: 1.5px solid var(--clr-border-strong);
      transition: background 0.18s, border-color 0.18s, transform 0.15s;
      touch-action: manipulation;
    }
    .btn-secondary:hover { background: var(--clr-surface-hover); border-color: var(--clr-border-strong); transform: translateY(-1px); }
    .btn-secondary:active { transform: translateY(0); }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent implements OnInit {
  private seo = inject(SeoService);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.seo.set({
      title: '404 — Страницата не е намерена',
      description: 'Тази страница не съществува.',
    });
    this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
  }
}
