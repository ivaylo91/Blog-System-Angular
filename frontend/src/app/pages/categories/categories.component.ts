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
          <p class="lede">Разгледай рецептите подредени по вид — от бързи предястия и топли супи до основни ястия и домашни десерти. Избери категория и открий вкусни рецепти за всеки случай и сезон.</p>
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
    .eyebrow,
    h1, .lede { position: relative; }
    .eyebrow {
      display: inline-block;
      font-family: var(--font-type);
      font-size: 0.6rem;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.22em;
      color: var(--terracotta);
      margin-bottom: 0.75rem;
    }
    h1 {
      font-family: var(--font-display);
      font-style: italic;
      font-size: clamp(2.4rem, 6vw, 4.25rem);
      font-weight: 800;
      color: var(--ink);
      line-height: 1.02;
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
      gap: clamp(1rem, 2vw, 1.5rem);
    }
    .tiles > .tile:first-child {
      grid-column: 1 / span 2;
      min-height: 260px;
      background: var(--terracotta);
      border-color: var(--terracotta-2, #8a3a1e);
      color: var(--paper);
    }
    .tiles > .tile:first-child .tile-title { color: var(--paper); }
    .tiles > .tile:first-child .tile-desc  { color: rgba(243, 234, 214, 0.78); }
    .tiles > .tile:first-child .tile-num   { color: rgba(243, 234, 214, 0.55); }
    .tiles > .tile:first-child .count      { color: rgba(243, 234, 214, 0.85); }
    .tiles > .tile:first-child .arrow      { color: var(--paper); }
    .tiles > .tile:first-child::after      { display: none; }
    @media (hover: hover) and (pointer: fine) {
      .tiles > .tile:first-child:hover { background: #9a3e24; border-color: var(--paper); }
    }
    @media (max-width: 640px) {
      .tiles { grid-template-columns: repeat(2, 1fr); gap: 0.875rem; }
      .tile { min-height: 170px; padding: 1.25rem 1.1rem 1rem; }
      .tile-title { font-size: clamp(1.1rem, 5vw, 1.5rem); }
      .tiles > .tile:first-child { grid-column: 1; min-height: 180px; }
    }
    @media (max-width: 360px) {
      .tiles { grid-template-columns: 1fr; }
      .tiles > .tile:first-child { grid-column: 1; }
    }
    .tile {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1.75rem 1.6rem 1.5rem;
      min-height: 200px;
      text-decoration: none;
      color: var(--ink);
      overflow: hidden;
      background: var(--paper-2);
      border: 1px dashed var(--rule);
      box-shadow: var(--shadow-sm);
      transition: transform 0.35s var(--ease-out-expo), box-shadow 0.35s var(--ease-out-expo);
      isolation: isolate;
    }
    .tile::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(60% 50% at 85% 90%, rgba(177, 80, 45, 0.08) 0%, transparent 100%);
      opacity: 0;
      z-index: -1;
      transition: opacity 0.3s var(--ease-out-expo);
    }
    @media (hover: hover) and (pointer: fine) {
      .tile:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-lg);
        border-color: var(--terracotta);
      }
      .tile:hover::after { opacity: 1; }
      .tile:hover .arrow { transform: translateX(5px); }
    }
    .tile:active { transform: translateY(-1px); transition-duration: 0.1s; }

    .tile-num {
      font-family: var(--font-type);
      font-size: 0.7rem;
      letter-spacing: 0.18em;
      color: var(--terracotta);
      text-transform: uppercase;
    }
    .tile-title {
      font-family: var(--font-display);
      font-style: italic;
      font-size: clamp(1.7rem, 2.4vw, 2.1rem);
      font-weight: 800;
      line-height: 1.05;
      color: var(--ink);
      margin: 0;
    }
    .tile-desc {
      font-size: 0.92rem;
      line-height: 1.55;
      color: var(--ink-mute);
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
      color: var(--terracotta);
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
      description: 'Разгледай всички категории рецепти — предястия, супи, основни ястия, десерти и много още. Намери бързо рецепти по вид ястие в кулинарния блог на Иво.',
    });
  }

  pad(n: number): string {
    return String(n).padStart(2, '0');
  }

  hueFor(i: number): string {
    return String(this.hues[i % this.hues.length]);
  }
}
