import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/models';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';

@Component({
  selector: 'app-dashboard-favorites',
  standalone: true,
  imports: [RouterLink, RecipeCardComponent],
  template: `
    <div class="dashboard-favorites">
      <h1>Любими рецепти</h1>
      <p class="subtitle">Рецептите, които сте запазили.</p>

      @if (loading()) {
        <p class="loading">Зареждане...</p>
      } @else if (recipes().length === 0) {
        <div class="empty-state">
          <p>Все още нямате любими рецепти.</p>
          <a routerLink="/recipes" class="btn-browse">Разгледай рецепти</a>
        </div>
      } @else {
        <div class="favorites-grid">
          @for (recipe of recipes(); track recipe.id) {
            <app-recipe-card [recipe]="recipe" />
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .dashboard-favorites {
      max-width: 1100px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
    }
    h1 { font-family: 'Georgia', serif; font-size: 1.75rem; color: #1c1917; margin: 0 0 0.25rem; }
    .subtitle { color: #44403c; margin: 0 0 1.5rem; }
    .loading { color: #57534e; font-weight: 500; }
    .empty-state {
      text-align: center;
      padding: 3rem;
      background: #ffffff;
      border-radius: 1.5rem;
      border: 1px solid rgba(0,0,0,0.14);
      box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    }
    .empty-state p { color: #44403c; margin: 0 0 1rem; }
    .btn-browse {
      display: inline-block;
      padding: 0.6rem 1.25rem;
      background: #78350f;
      color: #fff;
      border-radius: 0.75rem;
      text-decoration: none;
      font-weight: 700;
    }
    .btn-browse:hover { background: #5c2a0b; }
    .favorites-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }
  `],
})
export class DashboardFavoritesComponent implements OnInit {
  private recipeService = inject(RecipeService);
  recipes = signal<Recipe[]>([]);
  loading = signal(true);

  ngOnInit(): void {
    this.recipeService.getFavorites().subscribe({
      next: (r) => {
        this.recipes.set(r);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }
}
