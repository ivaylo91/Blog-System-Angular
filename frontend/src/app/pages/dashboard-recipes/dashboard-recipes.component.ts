import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { Recipe } from '../../models/models';
import { ConfirmModalComponent } from '../../components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-dashboard-recipes',
  standalone: true,
  imports: [RouterLink, FormsModule, ConfirmModalComponent],
  template: `
    <div class="dashboard-recipes">
      <div class="header-row">
        <div>
          <h1>{{ auth.isAdmin() ? 'Всички рецепти' : 'Моите рецепти' }}</h1>
          <p class="subtitle">{{ recipes().length }} рецепти — {{ publishedCount() }} публикувани, {{ draftCount() }} чернови</p>
        </div>
        <a routerLink="/dashboard/recipes/new" class="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Нова рецепта
        </a>
      </div>

      <!-- Search & filter bar -->
      <div class="filter-bar">
        <div class="search-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" [(ngModel)]="searchQuery" (input)="applyFilter()" placeholder="Търси рецепта..." />
        </div>
        <div class="filter-pills">
          <button class="pill" [class.active]="filterStatus === 'all'" (click)="setFilter('all')">Всички</button>
          <button class="pill" [class.active]="filterStatus === 'published'" (click)="setFilter('published')">Публикувани</button>
          <button class="pill" [class.active]="filterStatus === 'draft'" (click)="setFilter('draft')">Чернови</button>
        </div>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Заглавие</th>
              @if (auth.isAdmin()) { <th>Автор</th> }
              <th>Категория</th>
              <th>Трудност</th>
              <th>Статус</th>
              <th>Дата</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            @for (recipe of filteredRecipes(); track recipe.id) {
              <tr [class.draft-row]="!recipe.published">
                <td>
                  <a [routerLink]="['/recipes', recipe.slug]" class="recipe-link">{{ recipe.title }}</a>
                </td>
                @if (auth.isAdmin()) {
                  <td class="author-cell">{{ recipe.user?.name || '—' }}</td>
                }
                <td>{{ recipe.category?.name || '—' }}</td>
                <td>
                  <span class="badge" [class]="'badge-' + recipe.difficulty">{{ recipe.difficulty }}</span>
                </td>
                <td>
                  <button class="status-toggle"
                    [class.published]="recipe.published"
                    [class.draft]="!recipe.published"
                    (click)="togglePublish(recipe)"
                    [title]="recipe.published ? 'Скрий' : 'Публикувай'"
                    [disabled]="!canManage(recipe)">
                    @if (recipe.published) {
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      Публикувана
                    } @else {
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                      Чернова
                    }
                  </button>
                </td>
                <td class="date-cell">{{ formatDate(recipe.published_at || '') }}</td>
                <td class="actions">
                  @if (canManage(recipe)) {
                    <a [routerLink]="['/dashboard/recipes', recipe.slug, 'edit']" class="btn-small">Редактирай</a>
                    <button class="btn-small btn-danger" (click)="confirmDelete(recipe)">Изтрий</button>
                  } @else {
                    <span class="no-access">—</span>
                  }
                </td>
              </tr>
            }
            @empty {
              <tr><td colspan="7" class="empty">Няма рецепти.</td></tr>
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
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      gap: 1rem;
    }
    h1 {
      font-family: 'Georgia', serif;
      font-size: 1.75rem;
      color: #1c1917;
      margin: 0 0 0.2rem;
    }
    .subtitle { color: #78716c; font-size: 0.85rem; margin: 0; }
    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.6rem 1.25rem;
      background: #4a7c59;
      color: #fff;
      border-radius: 0.75rem;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
      transition: background 0.2s;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .btn-primary svg { width: 0.9rem; height: 0.9rem; }
    .btn-primary:hover { background: #3a6347; }

    /* Filter bar */
    .filter-bar {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.25rem;
      flex-wrap: wrap;
    }
    .search-wrap {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: #fff;
      border: 1.5px solid rgba(0,0,0,0.1);
      border-radius: 0.75rem;
      padding: 0.5rem 0.9rem;
      flex: 1;
      min-width: 200px;
    }
    .search-wrap svg { width: 1rem; height: 1rem; color: #a8a29e; flex-shrink: 0; }
    .search-wrap input {
      border: none;
      outline: none;
      background: transparent;
      font-size: 0.9rem;
      width: 100%;
      color: #1c1917;
    }
    .filter-pills { display: flex; gap: 0.4rem; }
    .pill {
      padding: 0.4rem 0.9rem;
      border-radius: 999px;
      border: 1.5px solid rgba(0,0,0,0.12);
      background: #fff;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      color: #44403c;
      transition: all 0.2s;
    }
    .pill.active { background: #78350f; color: #fff; border-color: #78350f; }
    .pill:hover:not(.active) { background: #f5f0e8; }

    .table-wrap {
      background: #ffffff;
      border-radius: 1.5rem;
      border: 1px solid rgba(0,0,0,0.14);
      overflow-x: auto;
      box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    }
    table { width: 100%; border-collapse: collapse; }
    th {
      text-align: left;
      padding: 0.75rem 1rem;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #44403c;
      font-weight: 700;
      border-bottom: 2px solid rgba(0,0,0,0.1);
      background: #f5f0e8;
    }
    td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid rgba(0,0,0,0.08);
      font-size: 0.95rem;
      color: #1c1917;
    }
    .draft-row td { opacity: 0.75; }
    .recipe-link { color: #1c1917; text-decoration: none; font-weight: 600; }
    .recipe-link:hover { text-decoration: underline; color: #78350f; }
    .badge {
      padding: 0.2rem 0.6rem;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 700;
    }
    .badge-Лесно { background: #d1fae5; color: #065f46; }
    .badge-Средно { background: #fde68a; color: #78350f; }
    .badge-За\\ напреднали { background: #fee2e2; color: #991b1b; }

    /* Status toggle button */
    .status-toggle {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      padding: 0.25rem 0.65rem;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 700;
      cursor: pointer;
      border: 1.5px solid transparent;
      transition: all 0.2s;
    }
    .status-toggle svg { width: 0.75rem; height: 0.75rem; }
    .status-toggle.published { background: #d1fae5; color: #065f46; border-color: #6ee7b7; }
    .status-toggle.published:hover { background: #a7f3d0; }
    .status-toggle.draft { background: #fef9c3; color: #713f12; border-color: #fde68a; }
    .status-toggle.draft:hover { background: #fef08a; }

    .author-cell { font-size: 0.85rem; color: #57534e; font-weight: 600; white-space: nowrap; }
    .no-access { color: #c2bdb9; font-size: 0.8rem; }
    .status-toggle:disabled { opacity: 0.5; cursor: default; }
    .date-cell { white-space: nowrap; color: #57534e; font-size: 0.85rem; }
    .actions { display: flex; gap: 0.5rem; }
    .btn-small {
      padding: 0.35rem 0.75rem;
      border-radius: 0.5rem;
      font-size: 0.8rem;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
      border: 1.5px solid rgba(0,0,0,0.15);
      background: #fff;
      color: #1c1917;
      transition: all 0.2s;
    }
    .btn-small:hover { background: #e8e3dc; }
    .btn-danger { color: #b91c1c; border-color: #fca5a5; }
    .btn-danger:hover { background: #fef2f2; color: #991b1b; }
    .empty { text-align: center; color: #57534e; padding: 2rem; font-weight: 500; }

    @media (max-width: 640px) {
      .filter-bar { flex-direction: column; align-items: stretch; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardRecipesComponent implements OnInit {
  private recipeService = inject(RecipeService);
  private cdr = inject(ChangeDetectorRef);
  private toast = inject(ToastService);
  auth = inject(AuthService);

  recipes = signal<Recipe[]>([]);
  filteredRecipes = signal<Recipe[]>([]);
  showDeleteModal = signal(false);
  recipeToDelete = signal<Recipe | null>(null);
  searchQuery = '';
  filterStatus: 'all' | 'published' | 'draft' = 'all';

  publishedCount = () => this.recipes().filter(r => r.published).length;
  draftCount = () => this.recipes().filter(r => !r.published).length;

  canManage(recipe: Recipe): boolean {
    if (this.auth.isAdmin()) return true;
    return recipe.user_id === this.auth.user()?.id;
  }

  ngOnInit(): void {
    this.loadRecipes();
  }

  loadRecipes(): void {
    this.recipeService.getDashboardRecipes().subscribe({
      next: r => { this.recipes.set(r); this.applyFilter(); },
      error: () => this.toast.error('Грешка при зареждане на рецепти.'),
    });
  }

  applyFilter(): void {
    let result = this.recipes();
    if (this.filterStatus === 'published') result = result.filter(r => r.published);
    if (this.filterStatus === 'draft') result = result.filter(r => !r.published);
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      result = result.filter(r =>
        r.title.toLowerCase().includes(q) ||
        (r.user?.name?.toLowerCase().includes(q) ?? false)
      );
    }
    this.filteredRecipes.set(result);
    this.cdr.markForCheck();
  }

  setFilter(status: 'all' | 'published' | 'draft'): void {
    this.filterStatus = status;
    this.applyFilter();
  }

  togglePublish(recipe: Recipe): void {
    if (!this.canManage(recipe)) return;
    this.recipeService.togglePublish(recipe.slug, !recipe.published).subscribe({
      next: () => { this.toast.success(recipe.published ? 'Рецептата е скрита.' : 'Рецептата е публикувана.'); this.loadRecipes(); },
      error: () => this.toast.error('Грешка при промяна на статуса.'),
    });
  }

  confirmDelete(recipe: Recipe): void {
    this.recipeToDelete.set(recipe);
    this.showDeleteModal.set(true);
  }

  deleteRecipe(): void {
    const recipe = this.recipeToDelete();
    if (!recipe) return;
    this.recipeService.deleteRecipe(recipe.slug).subscribe({
      next: () => {
        this.showDeleteModal.set(false);
        this.recipeToDelete.set(null);
        this.toast.success('Рецептата е изтрита.');
        this.loadRecipes();
      },
      error: () => this.toast.error('Грешка при изтриване.'),
    });
  }

  formatDate(date: string): string {
    if (!date) return '—';
    return new Date(date).toLocaleDateString('bg-BG', { day: 'numeric', month: 'short', year: 'numeric' });
  }
}
