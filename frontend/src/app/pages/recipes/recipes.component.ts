import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RecipeService } from '../../services/recipe.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { Recipe, Category } from '../../models/models';
import { SeoService } from '../../services/seo.service';
import { PerfService } from '../../services/perf.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeCardComponent, FormsModule],
  template: `
    <div class="page">
      <div class="page-inner">

        <header class="page-header">
          <span class="page-eyebrow">Готварски блог</span>
          <h1>Рецепти</h1>
          <p>Открий традиционни български рецепти за всеки повод.</p>
        </header>

        <!-- Search bar -->
        <form class="search-bar" (submit)="search($event)">
          <input
            type="text"
            [ngModel]="q()" (ngModelChange)="q.set($event)"
            name="q"
            placeholder="Търси по заглавие или съставка..."
            aria-label="Търси рецепти"
            class="search-input"
            (input)="onSearchInput()"
          />
          <button type="submit" class="search-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <span class="btn-text">Търси</span>
          </button>
        </form>

        <!-- Pill filters: categories -->
        @if (categories().length > 0) {
          <div class="pill-filters" role="group" aria-label="Категории">
            <button class="pill" [class.active]="!category()" [attr.aria-pressed]="!category()" (click)="selectCategory('')">Всички</button>
            @for (cat of categories(); track cat.id) {
              <button class="pill" [class.active]="category() === cat.slug" [attr.aria-pressed]="category() === cat.slug"
                      (click)="selectCategory(cat.slug)">{{ cat.name }}</button>
            }
          </div>
        }

        <!-- Pill filters: difficulty + sort -->
        <div class="pill-filters pill-filters-secondary" role="group" aria-label="Филтри">
          <button class="pill pill-sm" [class.active]="!difficulty()" [attr.aria-pressed]="!difficulty()" (click)="selectDifficulty('')">Всяка трудност</button>
          <button class="pill pill-sm" [class.active]="difficulty() === 'Лесно'" [attr.aria-pressed]="difficulty() === 'Лесно'" (click)="selectDifficulty('Лесно')">Лесно</button>
          <button class="pill pill-sm" [class.active]="difficulty() === 'Средно'" [attr.aria-pressed]="difficulty() === 'Средно'" (click)="selectDifficulty('Средно')">Средно</button>
          <button class="pill pill-sm" [class.active]="difficulty() === 'За напреднали'" [attr.aria-pressed]="difficulty() === 'За напреднали'" (click)="selectDifficulty('За напреднали')">За напреднали</button>
          <span class="sort-divider" aria-hidden="true"></span>
          <button class="pill pill-sm" [class.active]="sort() === 'newest'" [attr.aria-pressed]="sort() === 'newest'" (click)="selectSort('newest')">Най-нови</button>
          <button class="pill pill-sm" [class.active]="sort() === 'fastest'" [attr.aria-pressed]="sort() === 'fastest'" (click)="selectSort('fastest')">Най-бързи</button>
          <button class="pill pill-sm" [class.active]="sort() === 'easiest'" [attr.aria-pressed]="sort() === 'easiest'" (click)="selectSort('easiest')">Най-лесни</button>
        </div>

        <!-- Active filter chips -->
        @if (category() || difficulty() || (sort() && sort() !== 'newest') || q()) {
          <div class="active-filters" aria-label="Активни филтри">
            <span class="filters-label">Филтри:</span>
            @if (q()) {
              <button class="active-chip" (click)="clearSearch()" aria-label="Премахни търсенето">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                "{{ q() }}"
                <svg class="chip-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            }
            @if (category()) {
              <button class="active-chip" (click)="selectCategory('')" aria-label="Премахни категория">
                {{ getCategoryName(category()) }}
                <svg class="chip-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            }
            @if (difficulty()) {
              <button class="active-chip" (click)="selectDifficulty('')" aria-label="Премахни трудност">
                {{ difficulty() }}
                <svg class="chip-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            }
            @if (sort() && sort() !== 'newest') {
              <button class="active-chip" (click)="selectSort('newest')" aria-label="Премахни сортиране">
                {{ sort() === 'fastest' ? 'Най-бързи' : 'Най-лесни' }}
                <svg class="chip-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            }
            <button class="clear-all" (click)="clearAll()">Изчисти всички</button>
          </div>
        }

        <!-- Recipe grid / skeleton -->
        @if (loading()) {
          <div class="recipe-grid">
            @for (s of skeletons; track s) {
              <div class="skeleton-card">
                <div class="sk-img"></div>
                <div class="sk-body">
                  <div class="sk-line sk-short"></div>
                  <div class="sk-line sk-long"></div>
                  <div class="sk-line sk-medium"></div>
                  <div class="sk-meta">
                    <div class="sk-line sk-sm"></div>
                    <div class="sk-line sk-sm"></div>
                    <div class="sk-line sk-sm"></div>
                  </div>
                </div>
              </div>
            }
          </div>
        } @else {
          <div class="recipe-grid">
            @for (recipe of recipes(); track recipe.id; let i = $index) {
              <app-recipe-card [recipe]="recipe" [priority]="i === 0" [index]="i" />
            } @empty {
              <div class="no-results">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="28" cy="28" r="18"/><line x1="41" y1="41" x2="56" y2="56"/><line x1="20" y1="28" x2="36" y2="28"/></svg>
                <p>Няма намерени рецепти.</p>
                <span>Опитай с друга дума или смени филтрите.</span>
              </div>
            }
          </div>
        }

        @if (lastPage() > 1) {
          <div class="pagination">
            <button class="page-btn" [disabled]="currentPage() === 1" (click)="goToPage(currentPage() - 1)" aria-label="Предишна страница">‹</button>
            <span class="page-counter">{{ currentPage() }} / {{ lastPage() }}</span>
            @for (p of pageNumbers(); track $index) {
              @if (p === null) {
                <span class="page-ellipsis" aria-hidden="true">…</span>
              } @else {
                <button
                  class="page-btn"
                  [class.active]="p === currentPage()"
                  [attr.aria-current]="p === currentPage() ? 'page' : null"
                  (click)="goToPage(p)"
                >{{ p }}</button>
              }
            }
            <button class="page-btn" [disabled]="currentPage() === lastPage()" (click)="goToPage(currentPage() + 1)" aria-label="Следваща страница">›</button>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .page { padding: var(--space-9) var(--space-6) var(--space-10); background-color: var(--clr-bg, #faf7f4); background-image: url('/backgrounds/cooking-pattern.svg'); background-size: 500px; background-repeat: repeat; min-height: 100dvh; }
    .page-inner { max-width: 1200px; margin: 0 auto; }
    .page-header {
      text-align: left;
      margin-bottom: var(--space-7);
    }
    .page-eyebrow {
      display: inline-flex;
      align-items: center;
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--clr-green-text);
      background: var(--clr-green-bg);
      padding: var(--space-1) var(--space-4);
      border-radius: 9999px;
      margin-bottom: var(--space-4);
    }
    .page-header h1 {
      font-family: var(--font-display, 'Alegreya', Georgia, serif);
      font-size: clamp(2rem, 4vw, 3rem);
      color: var(--clr-text);
      margin: 0 0 var(--space-2);
      letter-spacing: -0.02em;
    }
    .page-header p {
      color: var(--clr-text-muted);
      font-size: 1rem;
      font-weight: 300;
      margin: 0;
      max-width: 55ch;
    }

    /* Search bar */
    .search-bar {
      display: flex;
      border-radius: 0.875rem;
      overflow: hidden;
      box-shadow: var(--shadow-sm);
      border: 1.5px solid var(--clr-border);
      max-width: 560px;
      margin: 0 0 var(--space-6);
      background: var(--clr-surface);
    }
    .search-input {
      flex: 1;
      padding: var(--space-3) var(--space-5);
      border: none;
      font-size: 0.95rem;
      outline: none;
      background: transparent;
      color: var(--clr-text);
    }
    .search-btn {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-3) var(--space-6);
      background: var(--clr-green);
      color: var(--clr-surface);
      border: none;
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background 0.18s var(--ease-out-expo);
      touch-action: manipulation;
    }
    .search-btn svg { width: 1rem; height: 1rem; flex-shrink: 0; }
    .search-btn:hover { background: var(--clr-green-dark); }

    /* Pill filters */
    .pill-filters {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2);
      margin-bottom: var(--space-3);
      justify-content: flex-start;
    }
    .pill-filters-secondary {
      margin-bottom: var(--space-8);
      align-items: center;
      justify-content: flex-start;
    }
    .pill {
      padding: var(--space-2) var(--space-4);
      border-radius: 9999px;
      border: 1.5px solid var(--clr-border);
      background: var(--clr-surface);
      color: var(--clr-text-muted);
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.18s var(--ease-out-expo), border-color 0.18s var(--ease-out-expo), color 0.18s var(--ease-out-expo);
      white-space: nowrap;
      min-height: 2.75rem;
      touch-action: manipulation;
    }
    .pill:hover {
      background: var(--clr-surface-hover);
      border-color: var(--clr-border-strong);
      color: var(--clr-text);
    }
    .pill.active {
      background: var(--clr-brand);
      border-color: var(--clr-brand);
      color: var(--clr-surface);
      font-weight: 600;
    }
    .pill:focus-visible {
      outline: 2.5px solid var(--clr-focus);
      outline-offset: 2px;
    }
    .pill-sm {
      padding: var(--space-2) var(--space-3);
      font-size: 0.8rem;
      min-height: 2.75rem;
    }
    .sort-divider {
      width: 1px;
      height: var(--space-5);
      background: var(--clr-border-strong);
      flex-shrink: 0;
      align-self: center;
      margin: 0 var(--space-1);
    }

    /* Active filter chips */
    .active-filters {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--space-2);
      margin-bottom: var(--space-6);
      padding: var(--space-3) var(--space-4);
      background: var(--clr-surface-alt);
      border-radius: 0.875rem;
      border: 1px solid var(--clr-border-faint);
    }
    .filters-label {
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--clr-text-faint);
      margin-right: var(--space-1);
      flex-shrink: 0;
    }
    .active-chip {
      display: inline-flex;
      align-items: center;
      gap: var(--space-1);
      padding: var(--space-1) var(--space-3);
      background: var(--clr-text);
      color: var(--clr-bg);
      border: none;
      border-radius: 9999px;
      font-size: 0.78rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.15s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);
      touch-action: manipulation;
    }
    .active-chip:hover { background: var(--clr-text-muted); }
    .active-chip:active { transform: scale(0.97); }
    .active-chip > svg:first-child { width: 0.7rem; height: 0.7rem; opacity: 0.7; }
    .chip-x {
      width: 0.7rem;
      height: 0.7rem;
      opacity: 0.6;
      flex-shrink: 0;
    }
    .clear-all {
      margin-left: auto;
      background: none;
      border: none;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--clr-text-muted);
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 2px;
      padding: var(--space-1);
      transition: color 0.15s var(--ease-out-expo);
      touch-action: manipulation;
    }
    .clear-all:hover { color: var(--clr-text); }

    /* Recipe grid */
    .recipe-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: var(--space-6);
    }
    .no-results {
      grid-column: 1 / -1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-10) var(--space-7);
      color: var(--clr-text-muted);
      text-align: center;
    }
    .no-results svg {
      width: 3rem;
      height: 3rem;
      color: var(--clr-text-faint);
      margin-bottom: var(--space-2);
    }
    .no-results p {
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--clr-text);
      margin: 0;
    }
    .no-results span {
      font-size: 0.875rem;
      color: var(--clr-text-faint);
    }

    /* Skeleton — shimmer uses transform:translateX (composited, no repaint) */
    .skeleton-card {
      border-radius: 1.25rem;
      overflow: hidden;
      background: var(--clr-surface);
      box-shadow: var(--shadow-sm);
    }
    .sk-img {
      aspect-ratio: 4/3;
      background: var(--clr-skeleton);
      position: relative;
      overflow: hidden;
    }
    .sk-img::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent 0%, var(--clr-skeleton-shine) 50%, transparent 100%);
      transform: translateX(-100%);
      animation: shimmer 1.5s linear infinite;
    }
    .sk-body { padding: var(--space-5); display: flex; flex-direction: column; gap: var(--space-2); }
    .sk-meta { display: flex; gap: var(--space-3); margin-top: var(--space-1); }
    .sk-line {
      height: 0.8rem;
      border-radius: 9999px;
      background: var(--clr-skeleton);
      position: relative;
      overflow: hidden;
    }
    .sk-line::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent 0%, var(--clr-skeleton-shine) 50%, transparent 100%);
      transform: translateX(-100%);
      animation: shimmer 1.5s linear infinite;
    }
    .sk-short  { width: 30%; }
    .sk-long   { width: 75%; }
    .sk-medium { width: 50%; }
    .sk-sm     { width: 22%; }
    @keyframes shimmer {
      from { transform: translateX(-100%); }
      to   { transform: translateX(100%); }
    }

    /* Pagination */
    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: var(--space-2);
      margin-top: var(--space-9);
    }
    .page-btn {
      min-width: 2.75rem;
      height: 2.75rem;
      padding: 0 var(--space-3);
      border-radius: 0.75rem;
      border: 1.5px solid var(--clr-border);
      background: var(--clr-surface);
      cursor: pointer;
      font-weight: 600;
      font-size: 0.9rem;
      transition: background 0.18s var(--ease-out-expo), border-color 0.18s var(--ease-out-expo), color 0.18s var(--ease-out-expo);
      color: var(--clr-text);
      touch-action: manipulation;
    }
    .page-btn:disabled { opacity: 0.35; cursor: not-allowed; }
    .page-btn.active {
      background: var(--clr-text);
      color: var(--clr-bg);
      border-color: var(--clr-text);
    }
    .page-btn:hover:not(.active):not(:disabled) { background: var(--clr-surface-hover); border-color: var(--clr-border-strong); }
    .page-ellipsis {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 2rem;
      height: 2.75rem;
      font-size: 0.9rem;
      color: var(--clr-text-faint);
      user-select: none;
    }
    .page-counter { display: none; }

    @media (max-width: 640px) {
      .recipe-grid { grid-template-columns: 1fr; }
      .btn-text { display: none; }
      .search-btn { padding: var(--space-3) var(--space-4); }
      .pill { min-height: 2.75rem; }
      .pill-sm { min-height: 2.75rem; }
      .page-btn { min-width: 2.75rem; height: 2.75rem; }
    }
    @media (max-width: 420px) {
      .page-btn:not([aria-label]) { display: none; }
      .page-ellipsis { display: none; }
      .page-counter {
        display: flex;
        align-items: center;
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--clr-text);
        padding: 0 var(--space-3);
        font-variant-numeric: tabular-nums;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesComponent {
  private recipeService = inject(RecipeService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private seo = inject(SeoService);
  private perf = inject(PerfService);
  private destroyRef = inject(DestroyRef);

  recipes = signal<Recipe[]>([]);
  categories = signal<Category[]>([]);
  q = signal('');
  category = signal('');
  difficulty = signal('');
  sort = signal('newest');
  currentPage = signal(1);
  lastPage = signal(1);
  loading = signal(true);
  readonly skeletons = [0, 1, 2, 3, 4, 5];

  private debounceTimer?: ReturnType<typeof setTimeout>;
  private lastSearchQ = '';

  pageNumbers = computed<(number | null)[]>(() => {
    const total = this.lastPage();
    const cur = this.currentPage();
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const pages: (number | null)[] = [1];
    if (cur > 3) pages.push(null);
    const start = Math.max(2, cur - 1);
    const end = Math.min(total - 1, cur + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (cur < total - 2) pages.push(null);
    pages.push(total);
    return pages;
  });

  constructor() {
    this.seo.set({
      title: 'Рецепти',
      description: 'Разгледай всички традиционни български рецепти. Филтрирай по категория, трудност и време за приготвяне.',
    });

    this.recipeService.getCategories()
      .pipe(takeUntilDestroyed())
      .subscribe(cats => this.categories.set(cats));

    this.route.queryParams
      .pipe(takeUntilDestroyed())
      .subscribe(params => {
        this.q.set(params['q'] || '');
        this.category.set(params['category'] || '');
        this.difficulty.set(params['difficulty'] || '');
        this.sort.set(params['sort'] || 'newest');
        this.currentPage.set(+(params['page'] || 1));
        this.loadRecipes();
      });

    this.destroyRef.onDestroy(() => clearTimeout(this.debounceTimer));
  }

  onSearchInput(): void {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      if (this.q() === this.lastSearchQ) return;
      this.lastSearchQ = this.q();
      this.router.navigate(['/recipes'], {
        queryParams: { q: this.q() || undefined, category: this.category() || undefined, difficulty: this.difficulty() || undefined, sort: this.sort() !== 'newest' ? this.sort() : undefined, page: undefined },
      });
    }, 350);
  }

  loadRecipes(): void {
    this.loading.set(true);
    this.perf.mark('recipes_fetch_start');
    this.recipeService.getRecipes({
      q: this.q(),
      category: this.category(),
      difficulty: this.difficulty(),
      sort: this.sort(),
      page: this.currentPage(),
      per_page: 6,
    }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(res => {
      this.recipes.set(res.data);
      this.currentPage.set(res.current_page);
      this.lastPage.set(res.last_page);
      this.loading.set(false);
      this.perf.mark('recipes_ready');
      this.perf.measure('recipes_list_load', 'recipes_fetch_start', 'recipes_ready');
    });
  }

  selectCategory(slug: string): void {
    this.router.navigate(['/recipes'], {
      queryParams: {
        q: this.q() || undefined,
        category: slug || undefined,
        difficulty: this.difficulty() || undefined,
        sort: this.sort() !== 'newest' ? this.sort() : undefined,
        page: undefined,
      },
    });
  }

  selectDifficulty(d: string): void {
    this.router.navigate(['/recipes'], {
      queryParams: {
        q: this.q() || undefined,
        category: this.category() || undefined,
        difficulty: d || undefined,
        sort: this.sort() !== 'newest' ? this.sort() : undefined,
        page: undefined,
      },
    });
  }

  selectSort(s: string): void {
    this.router.navigate(['/recipes'], {
      queryParams: {
        q: this.q() || undefined,
        category: this.category() || undefined,
        difficulty: this.difficulty() || undefined,
        sort: s !== 'newest' ? s : undefined,
        page: undefined,
      },
    });
  }

  search(e: Event): void {
    e.preventDefault();
    this.router.navigate(['/recipes'], {
      queryParams: {
        q: this.q() || undefined,
        category: this.category() || undefined,
        difficulty: this.difficulty() || undefined,
        sort: this.sort() !== 'newest' ? this.sort() : undefined,
        page: undefined,
      },
    });
  }

  getCategoryName(slug: string): string {
    return this.categories().find(c => c.slug === slug)?.name || slug;
  }

  clearSearch(): void {
    this.q.set('');
    this.router.navigate(['/recipes'], {
      queryParams: { category: this.category() || undefined, difficulty: this.difficulty() || undefined, sort: this.sort() !== 'newest' ? this.sort() : undefined },
    });
  }

  clearAll(): void {
    this.q.set('');
    this.router.navigate(['/recipes']);
  }

  goToPage(page: number): void {
    this.router.navigate(['/recipes'], {
      queryParams: { ...this.route.snapshot.queryParams, page },
    });
  }
}
