import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { RecipeService } from '../../services/recipe.service';
import { SeoService } from '../../services/seo.service';
import { Category } from '../../models/models';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page">
      <div class="page-inner">
        <header class="page-header">
          <span class="eyebrow">Открий</span>
          <h1>Категории</h1>
          <p class="lede">Разгледай рецептите подредени по вид — от предястия до десерти.</p>
        </header>

        @if (loading()) {
          <div class="tiles">
            @for (s of skeletons; track s) {
              <div class="tile sk-tile"></div>
            }
          </div>
        } @else if (categories().length === 0) {
          <p class="empty">Няма категории все още.</p>
        } @else {
          <div class="tiles">
            @for (cat of categories(); track cat.id; let i = $index) {
              <a class="tile"
                 [routerLink]="['/recipes']"
                 [queryParams]="{ category: cat.slug }"
                 [style.--tile-hue]="hueFor(i)">
                <span class="tile-num">{{ pad(i + 1) }}</span>
                <h2 class="tile-title">{{ cat.name }}</h2>
                @if (cat.description) {
                  <p class="tile-desc">{{ cat.description }}</p>
                }
                <span class="tile-meta">
                  @if (cat.recipes_count !== undefined && cat.recipes_count !== null) {
                    <span class="count">{{ cat.recipes_count }} {{ cat.recipes_count === 1 ? 'рецепта' : 'рецепти' }}</span>
                  }
                  <span class="arrow" aria-hidden="true">→</span>
                </span>
              </a>
            }
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .page {
      padding: clamp(2.5rem, 6vw, 4.5rem) 1.5rem clamp(3rem, 6vw, 5rem);
      max-width: 1200px;
      margin: 0 auto;
    }
    .page-inner { min-width: 0; }
    .page-header {
      max-width: 48rem;
      margin-bottom: clamp(2rem, 4vw, 3.25rem);
    }
    .eyebrow {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.22em;
      color: var(--clr-brand);
      margin-bottom: 0.75rem;
    }
    h1 {
      font-family: var(--font-display);
      font-size: clamp(2.4rem, 6vw, 4.25rem);
      font-weight: 800;
      color: var(--clr-text);
      line-height: 1.02;
      letter-spacing: -0.035em;
      margin: 0 0 1rem;
    }
    .lede {
      font-size: clamp(1rem, 1.3vw, 1.15rem);
      color: var(--clr-text-muted);
      line-height: 1.65;
      max-width: 42ch;
      margin: 0;
    }

    .tiles {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1.25rem;
    }
    .tile {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1.75rem 1.6rem 1.5rem;
      min-height: 220px;
      border-radius: var(--radius-lg);
      text-decoration: none;
      color: var(--clr-text);
      overflow: hidden;
      background:
        radial-gradient(120% 80% at 0% 0%, color-mix(in oklch, oklch(85% 0.12 var(--tile-hue)) 55%, var(--clr-surface)) 0%, var(--clr-surface) 70%);
      border: 1px solid var(--clr-border-faint);
      box-shadow: var(--shadow-sm);
      transition: transform 0.35s var(--ease-out-expo), box-shadow 0.35s var(--ease-out-expo), border-color 0.25s;
      isolation: isolate;
    }
    .tile::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(60% 50% at 85% 90%, color-mix(in oklch, oklch(72% 0.14 var(--tile-hue)) 35%, transparent) 0%, transparent 100%);
      opacity: 0.7;
      z-index: -1;
      transition: opacity 0.3s var(--ease-out-expo);
    }
    @media (hover: hover) and (pointer: fine) {
      .tile:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
        border-color: color-mix(in oklch, oklch(65% 0.13 var(--tile-hue)) 40%, var(--clr-border));
      }
      .tile:hover::after { opacity: 1; }
      .tile:hover .arrow { transform: translateX(5px); }
    }
    .tile:active { transform: translateY(-1px); transition-duration: 0.1s; }

    .tile-num {
      font-family: var(--font-display);
      font-size: 0.88rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      color: color-mix(in oklch, oklch(42% 0.12 var(--tile-hue)) 90%, var(--clr-text-muted));
    }
    .tile-num::before {
      content: '';
      display: inline-block;
      width: 1.4rem;
      height: 1px;
      background: currentColor;
      vertical-align: middle;
      margin-right: 0.45rem;
      opacity: 0.6;
      transform: translateY(-1px);
    }
    .tile-title {
      font-family: var(--font-display);
      font-size: clamp(1.7rem, 2.4vw, 2.1rem);
      font-weight: 800;
      line-height: 1.05;
      letter-spacing: -0.025em;
      color: var(--clr-text);
      margin: 0;
    }
    .tile-desc {
      font-size: 0.92rem;
      line-height: 1.55;
      color: var(--clr-text-muted);
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .tile-meta {
      margin-top: auto;
      padding-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      font-size: 0.82rem;
      color: var(--clr-text-muted);
    }
    .count {
      font-weight: 600;
      letter-spacing: 0.02em;
    }
    .arrow {
      font-size: 1.1rem;
      color: var(--clr-brand);
      transition: transform 0.3s var(--ease-out-expo);
    }

    .sk-tile {
      background: var(--clr-skeleton);
      border: none;
      box-shadow: none;
      position: relative;
      overflow: hidden;
    }
    .sk-tile::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent 0%, var(--clr-skeleton-shine) 50%, transparent 100%);
      transform: translateX(-100%);
      animation: shimmer 1.5s linear infinite;
    }
    @keyframes shimmer {
      from { transform: translateX(-100%); }
      to   { transform: translateX(100%); }
    }

    .empty {
      color: var(--clr-text-muted);
      font-size: 1rem;
      text-align: center;
      padding: 4rem 1rem;
    }

    @media (prefers-reduced-motion: reduce) {
      .tile { transition: box-shadow 0.2s, border-color 0.2s; }
      .tile:hover { transform: none; }
      .arrow { transition: none; }
      .tile:hover .arrow { transform: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  private recipeService = inject(RecipeService);
  private seo = inject(SeoService);

  readonly skeletons = [0, 1, 2, 3, 4, 5, 6, 7];
  private readonly hues = [35, 70, 145, 22, 280, 55, 195, 10, 160, 95];

  private categoriesResult = toSignal(
    this.recipeService.getCategories().pipe(catchError(() => of([] as Category[]))),
  );

  categories = computed(() => this.categoriesResult() ?? []);
  loading = computed(() => this.categoriesResult() === undefined);

  constructor() {
    this.seo.set({
      title: 'Категории',
      description: 'Разгледай всички категории рецепти в кулинарния блог — предястия, супи, основни ястия, десерти и още.',
    });
  }

  pad(n: number): string {
    return String(n).padStart(2, '0');
  }

  hueFor(i: number): string {
    return String(this.hues[i % this.hues.length]);
  }
}
