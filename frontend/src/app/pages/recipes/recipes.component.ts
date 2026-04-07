import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { Recipe, Category } from '../../models/models';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeCardComponent, FormsModule],
  template: `
    <div class="page">
      <div class="page-inner">

        <header class="page-header">
          <h1>Рецепти</h1>
          <p>Открий традиционни български рецепти за всеки повод.</p>
        </header>

        <!-- Search bar -->
        <form class="search-bar" (submit)="search($event)">
          <input
            type="text"
            [(ngModel)]="q"
            name="q"
            placeholder="Търси по заглавие или съставка..."
            class="search-input"
          />
          <button type="submit" class="search-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <span class="btn-text">Търси</span>
          </button>
        </form>

        <!-- Pill filters: categories -->
        @if (categories.length > 0) {
          <div class="pill-filters">
            <button class="pill" [class.active]="!category" (click)="selectCategory('')">Всички</button>
            @for (cat of categories; track cat.id) {
              <button class="pill" [class.active]="category === cat.slug"
                      (click)="selectCategory(cat.slug)">{{ cat.name }}</button>
            }
          </div>
        }

        <!-- Pill filters: difficulty + sort -->
        <div class="pill-filters pill-filters-secondary">
          <button class="pill pill-sm" [class.active]="!difficulty" (click)="selectDifficulty('')">Всяка трудност</button>
          <button class="pill pill-sm" [class.active]="difficulty === 'Лесно'" (click)="selectDifficulty('Лесно')">Лесно</button>
          <button class="pill pill-sm" [class.active]="difficulty === 'Средно'" (click)="selectDifficulty('Средно')">Средно</button>
          <button class="pill pill-sm" [class.active]="difficulty === 'За напреднали'" (click)="selectDifficulty('За напреднали')">За напреднали</button>
          <span class="sort-divider">|</span>
          <button class="pill pill-sm" [class.active]="sort === 'newest'" (click)="selectSort('newest')">Най-нови</button>
          <button class="pill pill-sm" [class.active]="sort === 'fastest'" (click)="selectSort('fastest')">Най-бързи</button>
          <button class="pill pill-sm" [class.active]="sort === 'easiest'" (click)="selectSort('easiest')">Най-лесни</button>
        </div>

        <!-- Recipe grid / skeleton -->
        @if (loading) {
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
            @for (recipe of recipes; track recipe.id; let i = $index) {
              <app-recipe-card [recipe]="recipe" [priority]="i === 0" [index]="i" />
            } @empty {
              <p class="no-results">Няма намерени рецепти.</p>
            }
          </div>
        }

        @if (lastPage > 1) {
          <div class="pagination">
            <button class="page-btn" [disabled]="currentPage === 1" (click)="goToPage(currentPage - 1)">‹</button>
            @for (p of pageNumbers; track p) {
              <button
                class="page-btn"
                [class.active]="p === currentPage"
                (click)="goToPage(p)"
              >{{ p }}</button>
            }
            <button class="page-btn" [disabled]="currentPage === lastPage" (click)="goToPage(currentPage + 1)">›</button>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .page { padding: 3rem 1.5rem 5rem; background: #faf7f4; min-height: 100vh; }
    .page-inner { max-width: 1200px; margin: 0 auto; }
    .page-header {
      text-align: center;
      margin-bottom: 2.5rem;
    }
    .page-header h1 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 2.6rem;
      color: #1c1917;
      margin: 0 0 0.5rem;
      letter-spacing: -0.02em;
    }
    .page-header p {
      color: #78716c;
      font-size: 1rem;
      font-weight: 300;
      margin: 0;
    }

    /* Search bar */
    .search-bar {
      display: flex;
      border-radius: 0.875rem;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.09);
      border: 1.5px solid rgba(0,0,0,0.09);
      max-width: 560px;
      margin: 0 auto 1.75rem;
      background: #fff;
    }
    .search-input {
      flex: 1;
      padding: 0.85rem 1.25rem;
      border: none;
      font-size: 0.95rem;
      outline: none;
      background: transparent;
      color: #1c1917;
    }
    .search-btn {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.85rem 1.5rem;
      background: #4a7c59;
      color: white;
      border: none;
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background 0.2s;
    }
    .search-btn svg { width: 1rem; height: 1rem; flex-shrink: 0; }
    .search-btn:hover { background: #3a6347; }

    /* Pill filters */
    .pill-filters {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
      justify-content: center;
    }
    .pill-filters-secondary {
      margin-bottom: 2.5rem;
      align-items: center;
    }
    .pill {
      padding: 0.45rem 1.1rem;
      border-radius: 9999px;
      border: 1.5px solid rgba(0,0,0,0.1);
      background: #fff;
      color: #44403c;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      white-space: nowrap;
    }
    .pill:hover {
      border-color: #1c1917;
      color: #1c1917;
    }
    .pill.active {
      background: #1c1917;
      border-color: #1c1917;
      color: #fff;
      font-weight: 600;
    }
    .pill-sm {
      padding: 0.35rem 0.9rem;
      font-size: 0.8rem;
    }
    .sort-divider {
      color: rgba(0,0,0,0.15);
      padding: 0 0.25rem;
      font-size: 1.1rem;
      user-select: none;
    }

    /* Recipe grid */
    .recipe-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }
    .no-results {
      grid-column: 1 / -1;
      text-align: center;
      color: #78716c;
      padding: 4rem;
      font-size: 1rem;
    }

    /* Skeleton */
    .skeleton-card {
      border-radius: 1.25rem;
      overflow: hidden;
      background: #fff;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .sk-img {
      aspect-ratio: 4/3;
      background: linear-gradient(90deg, #f0ede8 25%, #e8e3dc 50%, #f0ede8 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    .sk-body { padding: 1.2rem; display: flex; flex-direction: column; gap: 0.55rem; }
    .sk-meta { display: flex; gap: 0.75rem; margin-top: 0.25rem; }
    .sk-line {
      height: 0.8rem;
      border-radius: 9999px;
      background: linear-gradient(90deg, #f0ede8 25%, #e8e3dc 50%, #f0ede8 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    .sk-short  { width: 30%; }
    .sk-long   { width: 75%; }
    .sk-medium { width: 50%; }
    .sk-sm     { width: 22%; }
    @keyframes shimmer {
      from { background-position: 200% 0; }
      to   { background-position: -200% 0; }
    }

    /* Pagination */
    .pagination {
      display: flex;
      justify-content: center;
      gap: 0.4rem;
      margin-top: 3rem;
    }
    .page-btn {
      min-width: 2.5rem;
      height: 2.5rem;
      padding: 0 0.75rem;
      border-radius: 0.75rem;
      border: 1.5px solid rgba(0,0,0,0.1);
      background: #fff;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.9rem;
      transition: all 0.2s;
      color: #1c1917;
    }
    .page-btn:disabled { opacity: 0.35; cursor: not-allowed; }
    .page-btn.active {
      background: #1c1917;
      color: white;
      border-color: #1c1917;
    }
    .page-btn:hover:not(.active):not(:disabled) { background: #f0ede8; }

    @media (max-width: 640px) {
      .recipe-grid { grid-template-columns: 1fr; }
      .page-header h1 { font-size: 2rem; }
      .btn-text { display: none; }
      .search-btn { padding: 0.85rem 1rem; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesComponent implements OnInit {
  private recipeService = inject(RecipeService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private seo = inject(SeoService);
  private cdr = inject(ChangeDetectorRef);

  recipes: Recipe[] = [];
  categories: Category[] = [];
  q = '';
  category = '';
  difficulty = '';
  sort = 'newest';
  currentPage = 1;
  lastPage = 1;
  loading = true;
  skeletons = [0, 1, 2, 3, 4, 5];

  get pageNumbers(): number[] {
    return Array.from({ length: this.lastPage }, (_, i) => i + 1);
  }

  ngOnInit(): void {
    this.seo.set({
      title: 'Рецепти',
      description: 'Разгледай всички традиционни български рецепти. Филтрирай по категория, трудност и време за приготвяне.',
    });
    this.recipeService.getCategories().subscribe(cats => { this.categories = cats; this.cdr.markForCheck(); });
    this.route.queryParams.subscribe(params => {
      this.q = params['q'] || '';
      this.category = params['category'] || '';
      this.difficulty = params['difficulty'] || '';
      this.sort = params['sort'] || 'newest';
      this.currentPage = +(params['page'] || 1);
      this.loadRecipes();
    });
  }

  loadRecipes(): void {
    this.loading = true;
    this.cdr.markForCheck();
    this.recipeService.getRecipes({
      q: this.q,
      category: this.category,
      difficulty: this.difficulty,
      sort: this.sort,
      page: this.currentPage,
      per_page: 6,
    }).subscribe(res => {
      this.recipes = res.data;
      this.currentPage = res.current_page;
      this.lastPage = res.last_page;
      this.loading = false;
      this.cdr.markForCheck();
    });
  }

  selectCategory(slug: string): void {
    this.router.navigate(['/recipes'], {
      queryParams: {
        q: this.q || undefined,
        category: slug || undefined,
        difficulty: this.difficulty || undefined,
        sort: this.sort !== 'newest' ? this.sort : undefined,
        page: undefined,
      },
    });
  }

  selectDifficulty(d: string): void {
    this.router.navigate(['/recipes'], {
      queryParams: {
        q: this.q || undefined,
        category: this.category || undefined,
        difficulty: d || undefined,
        sort: this.sort !== 'newest' ? this.sort : undefined,
        page: undefined,
      },
    });
  }

  selectSort(s: string): void {
    this.router.navigate(['/recipes'], {
      queryParams: {
        q: this.q || undefined,
        category: this.category || undefined,
        difficulty: this.difficulty || undefined,
        sort: s !== 'newest' ? s : undefined,
        page: undefined,
      },
    });
  }

  search(e: Event): void {
    e.preventDefault();
    this.router.navigate(['/recipes'], {
      queryParams: {
        q: this.q || undefined,
        category: this.category || undefined,
        difficulty: this.difficulty || undefined,
        sort: this.sort !== 'newest' ? this.sort : undefined,
        page: undefined,
      },
    });
  }

  goToPage(page: number): void {
    this.router.navigate(['/recipes'], {
      queryParams: { ...this.route.snapshot.queryParams, page },
    });
  }
}
