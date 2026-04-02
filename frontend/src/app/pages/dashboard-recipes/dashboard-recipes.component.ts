import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/models';
import { ConfirmModalComponent } from '../../components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-dashboard-recipes',
  standalone: true,
  imports: [RouterLink, ConfirmModalComponent],
  template: `
    <div class="dashboard-recipes">
      <div class="header-row">
        <h1>Управление на рецепти</h1>
        <a routerLink="/dashboard/recipes/new" class="btn-primary">+ Нова рецепта</a>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Заглавие</th>
              <th>Категория</th>
              <th>Трудност</th>
              <th>Оценка</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            @for (recipe of recipes(); track recipe.id) {
              <tr>
                <td>
                  <a [routerLink]="['/recipes', recipe.slug]" class="recipe-link">{{ recipe.title }}</a>
                </td>
                <td>{{ recipe.category?.name || '—' }}</td>
                <td>
                  <span class="badge" [class]="'badge-' + recipe.difficulty">{{ recipe.difficulty }}</span>
                </td>
                <td>—</td>
                <td class="actions">
                  <a [routerLink]="['/dashboard/recipes', recipe.id, 'edit']" class="btn-small">Редактирай</a>
                  <button class="btn-small btn-danger" (click)="confirmDelete(recipe)">Изтрий</button>
                </td>
              </tr>
            }
            @empty {
              <tr><td colspan="5" class="empty">Няма рецепти.</td></tr>
            }
          </tbody>
        </table>
      </div>

      @if (showDeleteModal()) {
        <app-confirm-modal
          [open]="true"
          title="Изтриване на рецепта"
          [message]="'Сигурни ли сте, че искате да изтриете ' + recipeToDelete()!.title + '?'"
          (confirmed)="deleteRecipe()"
          (cancelled)="showDeleteModal.set(false)"
        ></app-confirm-modal>
      }
    </div>
  `,
  styles: [`
    .dashboard-recipes {
      max-width: 1100px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
    }
    .header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
    }
    h1 {
      font-family: 'Georgia', serif;
      font-size: 1.75rem;
      color: #1c1917;
      margin: 0;
    }
    .btn-primary {
      padding: 0.6rem 1.25rem;
      background: #1c1917;
      color: #fff;
      border-radius: 0.75rem;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
      transition: background 0.2s;
    }
    .btn-primary:hover { background: #44403c; }
    .table-wrap {
      background: rgba(255,255,255,0.9);
      border-radius: 1.5rem;
      border: 1px solid rgba(0,0,0,0.06);
      overflow-x: auto;
      box-shadow: 0 8px 24px rgba(0,0,0,0.04);
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th {
      text-align: left;
      padding: 0.75rem 1rem;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #78716c;
      border-bottom: 1px solid rgba(0,0,0,0.06);
    }
    td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid rgba(0,0,0,0.04);
      font-size: 0.95rem;
    }
    .recipe-link {
      color: #1c1917;
      text-decoration: none;
      font-weight: 600;
    }
    .recipe-link:hover { text-decoration: underline; }
    .badge {
      padding: 0.2rem 0.6rem;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 600;
    }
    .badge-Лесно { background: #d1fae5; color: #065f46; }
    .badge-Средно { background: #fef3c7; color: #92400e; }
    .badge-За\\ напреднали { background: #fee2e2; color: #991b1b; }
    .actions { display: flex; gap: 0.5rem; }
    .btn-small {
      padding: 0.35rem 0.75rem;
      border-radius: 0.5rem;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      border: 1px solid rgba(0,0,0,0.1);
      background: #fff;
      color: #1c1917;
      transition: all 0.2s;
    }
    .btn-small:hover { background: #f5f5f4; }
    .btn-danger { color: #dc2626; border-color: #fecaca; }
    .btn-danger:hover { background: #fef2f2; }
    .empty { text-align: center; color: #78716c; padding: 2rem; }
  `],
})
export class DashboardRecipesComponent implements OnInit {
  private recipeService = inject(RecipeService);
  recipes = signal<Recipe[]>([]);
  showDeleteModal = signal(false);
  recipeToDelete = signal<Recipe | null>(null);

  ngOnInit(): void {
    this.loadRecipes();
  }

  loadRecipes(): void {
    this.recipeService.getDashboardRecipes().subscribe(r => this.recipes.set(r));
  }

  confirmDelete(recipe: Recipe): void {
    this.recipeToDelete.set(recipe);
    this.showDeleteModal.set(true);
  }

  deleteRecipe(): void {
    const recipe = this.recipeToDelete();
    if (!recipe) return;
    this.recipeService.deleteRecipe(recipe.slug).subscribe(() => {
      this.showDeleteModal.set(false);
      this.recipeToDelete.set(null);
      this.loadRecipes();
    });
  }
}
