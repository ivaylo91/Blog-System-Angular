import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { Recipe, Category } from '../../models/models';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RouterLink, RecipeCardComponent, FormsModule],
  template: `
    <div class="page">
      <div class="page-inner">
        <header class="page-header">
          <h1>Рецепти</h1>
          <p>Открий традиционни български рецепти за всеки повод.</p>
        </header>

        <form class="filters" (submit)="search($event)">
          <input
            type="text"
            [(ngModel)]="q"
            name="q"
            placeholder="Търси по заглавие или съставка..."
            class="filter-input"
          />
          <select [(ngModel)]="category" name="category" class="filter-select" (change)="search($event)">
            <option value="">Всички категории</option>
            @for (cat of categories; track cat.id) {
              <option [value]="cat.slug">{{ cat.name }}</option>
            }
          </select>
          <select [(ngModel)]="difficulty" name="difficulty" class="filter-select" (change)="search($event)">
            <option value="">Всяка трудност</option>
            <option value="Лесно">Лесно</option>
            <option value="Средно">Средно</option>
            <option value="За напреднали">За напреднали</option>
          </select>
          <select [(ngModel)]="sort" name="sort" class="filter-select" (change)="search($event)">
            <option value="newest">Най-нови</option>
            <option value="fastest">Най-бързи</option>
            <option value="easiest">Най-лесни</option>
          </select>
          <button type="submit" class="filter-btn">Търси</button>
        </form>

        <div class="recipe-grid">
          @for (recipe of recipes; track recipe.id; let i = $index) {
            <app-recipe-card [recipe]="recipe" [priority]="i === 0" />
          } @empty {
            <p class="no-results">Няма намерени рецепти.</p>
          }
        </div>

        @if (lastPage > 1) {
          <div class="pagination">
            @for (p of pageNumbers; track p) {
              <button
                class="page-btn"
                [class.active]="p === currentPage"
                (click)="goToPage(p)"
              >{{ p }}</button>
            }
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .page { padding: 2rem 1.5rem; }
    .page-inner { max-width: 1200px; margin: 0 auto; }
    .page-header {
      text-align: center;
      margin-bottom: 2rem;
    }
    .page-header h1 {
      font-family: 'Georgia', serif;
      font-size: 2.2rem;
      color: #1c1917;
      margin: 0 0 0.5rem;
    }
    .page-header p {
      color: #44403c;
      font-size: 1rem;
    }
    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-bottom: 2rem;
      padding: 1.25rem;
      background: #ffffff;
      border-radius: 1.5rem;
      border: 1px solid rgba(0,0,0,0.14);
      box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    }
    .filter-input {
      flex: 1 1 250px;
      padding: 0.65rem 1rem;
      border: 1.5px solid #c9c5c2;
      border-radius: 0.75rem;
      font-size: 0.9rem;
      outline: none;
      color: #1c1917;
    }
    .filter-input:focus { border-color: #92400e; box-shadow: 0 0 0 3px rgba(146,64,14,0.12); }
    .filter-select {
      padding: 0.65rem 1rem;
      border: 1.5px solid #c9c5c2;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      background: white;
      outline: none;
      color: #1c1917;
    }
    .filter-btn {
      padding: 0.65rem 1.5rem;
      background: #78350f;
      color: white;
      border: none;
      border-radius: 0.75rem;
      font-weight: 700;
      cursor: pointer;
    }
    .filter-btn:hover { background: #5c2a0b; }
    .recipe-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.5rem;
    }
    .no-results {
      grid-column: 1 / -1;
      text-align: center;
      color: #57534e;
      padding: 3rem;
    }
    .pagination {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 2rem;
    }
    .page-btn {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.75rem;
      border: 1.5px solid #c9c5c2;
      background: white;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.2s;
      color: #1c1917;
    }
    .page-btn.active {
      background: #78350f;
      color: white;
      border-color: #78350f;
    }
    .page-btn:hover:not(.active) { background: #e8e3dc; }
    @media (max-width: 640px) {
      .recipe-grid { grid-template-columns: 1fr; }
    }
  `],
})
export class RecipesComponent implements OnInit {
  private recipeService = inject(RecipeService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private seo = inject(SeoService);

  recipes: Recipe[] = [];
  categories: Category[] = [];
  q = '';
  category = '';
  difficulty = '';
  sort = 'newest';
  currentPage = 1;
  lastPage = 1;

  get pageNumbers(): number[] {
    return Array.from({ length: this.lastPage }, (_, i) => i + 1);
  }

  ngOnInit(): void {
    this.seo.set({
      title: 'Рецепти',
      description: 'Разгледай всички традиционни български рецепти. Филтрирай по категория, трудност и време за приготвяне.',
    });
    this.recipeService.getCategories().subscribe(cats => this.categories = cats);
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
