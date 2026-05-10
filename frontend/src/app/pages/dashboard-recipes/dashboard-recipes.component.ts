import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DashboardService } from '../../services/dashboard.service';
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
      font-family: var(--font-display);
      font-size: clamp(1.5rem, 2.5vw, 1.75rem);
      font-weight: 800;
      color: var(--clr-text);
      margin: 0 0 var(--space-1);
      letter-spacing: -0.025em;
    }
    .subtitle { color: var(--clr-text-muted); font-size: 0.85rem; margin: 0; }
    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-3) var(--space-5);
      background: var(--clr-green);
      color: var(--paper);
      border-radius: var(--radius-pill);
      text-decoration: none;
      font-weight: 700;
      font-size: 0.875rem;
      transition: background 0.18s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);
      white-space: nowrap;
      flex-shrink: 0;
      touch-action: manipulation;
    }
    .btn-primary svg { width: 0.875rem; height: 0.875rem; }
    .btn-primary:hover { background: var(--clr-green-dark); transform: translateY(-1px); }
    .btn-primary:active { transform: translateY(0); }

    /* Filter bar */
    .filter-bar {
      display: flex;
      align-items: center;
      gap: var(--space-4);
      margin-bottom: var(--space-5);
      flex-wrap: wrap;
    }
    .search-wrap {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      background: var(--clr-surface);
      border: 1.5px solid var(--clr-border);
      border-radius: var(--radius-sm);
      padding: var(--space-2) var(--space-4);
      flex: 1;
      min-width: 200px;
      transition: border-color 0.18s, box-shadow 0.18s;
    }
    .search-wrap:focus-within {
      border-color: var(--clr-green);
      box-shadow: 0 0 0 3px rgba(107, 122, 58, 0.12);
    }
    .search-wrap svg { width: 1rem; height: 1rem; color: var(--clr-text-muted); flex-shrink: 0; }
    .search-wrap input {
      border: none;
      outline: none;
      background: transparent;
      font-size: 0.875rem;
      width: 100%;
      color: var(--clr-text);
    }
    .filter-pills { display: flex; gap: var(--space-2); flex-wrap: wrap; }
    .pill {
      padding: var(--space-2) var(--space-4);
      border-radius: var(--radius-pill);
      border: 1.5px solid var(--clr-border);
      background: var(--clr-surface);
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      color: var(--clr-text-muted);
      transition: background 0.18s, border-color 0.18s, color 0.18s;
      touch-action: manipulation;
      min-height: 2.25rem;
    }
    .pill.active { background: var(--clr-brand); color: var(--paper); border-color: var(--clr-brand); }
    .pill:hover:not(.active) { background: var(--clr-surface-hover); border-color: var(--clr-border-strong); color: var(--clr-text); }

    .table-wrap {
      border-radius: var(--radius-xl);
      border: 1px solid var(--clr-border-faint);
      overflow-x: auto;
      box-shadow: var(--shadow-sm), inset 0 1px 0 rgba(255, 255, 255, 0.55);
      background:
        linear-gradient(to right, var(--clr-surface), var(--clr-surface)) left center / 40px 100% no-repeat local,
        linear-gradient(to right, var(--clr-surface), var(--clr-surface)) right center / 40px 100% no-repeat local,
        linear-gradient(to right, rgba(28,25,23,0.1), transparent) left center / 14px 100% no-repeat scroll,
        linear-gradient(to left,  rgba(28,25,23,0.1), transparent) right center / 14px 100% no-repeat scroll,
        var(--clr-surface);
    }
    table { width: 100%; border-collapse: collapse; }
    th {
      text-align: left;
      padding: var(--space-3) var(--space-4);
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--clr-text-muted);
      font-weight: 700;
      border-bottom: 2px solid var(--clr-border-faint);
      background: var(--clr-surface-alt);
    }
    td {
      padding: var(--space-3) var(--space-4);
      border-bottom: 1px solid var(--clr-border-faint);
      font-size: 0.9rem;
      color: var(--clr-text);
      vertical-align: middle;
    }
    tbody tr { transition: background 0.15s; }
    tbody tr:hover { background: var(--clr-surface-hover); }
    tbody tr:last-child td { border-bottom: none; }
    .draft-row td { color: var(--clr-text-muted); }
    .recipe-link { color: var(--clr-text); text-decoration: none; font-weight: 600; }
    .recipe-link:hover { color: var(--clr-brand); text-decoration: underline; }
    .badge {
      padding: 2px var(--space-3);
      border-radius: var(--radius-pill);
      font-size: 0.72rem;
      font-weight: 700;
    }
    .badge-Лесно { background: var(--clr-green-bg); color: var(--clr-green-text); }
    .badge-Средно { background: var(--clr-amber-bg); color: var(--clr-amber-text); }
    .badge-За\ напреднали { background: var(--clr-rust-bg); color: var(--clr-rust-text); }

    /* Status toggle button */
    .status-toggle {
      display: inline-flex;
      align-items: center;
      gap: var(--space-1);
      padding: 2px var(--space-3);
      border-radius: var(--radius-pill);
      font-size: 0.72rem;
      font-weight: 700;
      cursor: pointer;
      border: 1.5px solid transparent;
      transition: background 0.18s;
      touch-action: manipulation;
      white-space: nowrap;
    }
    .status-toggle svg { width: 0.75rem; height: 0.75rem; flex-shrink: 0; }
    .status-toggle.published { background: var(--clr-green-bg); color: var(--clr-green-text); border-color: rgba(107, 122, 58, 0.4); }
    .status-toggle.published:hover:not(:disabled) { background: var(--clr-green-bg); }
    .status-toggle.draft { background: var(--clr-amber-bg); color: var(--clr-amber-text); border-color: var(--clr-amber-border); }
    .status-toggle.draft:hover:not(:disabled) { background: var(--clr-amber-bg); }
    .status-toggle:disabled { opacity: 0.45; cursor: default; }

    .author-cell { font-size: 0.85rem; color: var(--clr-text-muted); font-weight: 600; white-space: nowrap; }
    .no-access { color: var(--clr-text-faint); font-size: 0.8rem; }
    .date-cell { white-space: nowrap; color: var(--clr-text-muted); font-size: 0.83rem; }
    .actions { display: flex; gap: var(--space-2); align-items: center; }
    .btn-small {
      padding: var(--space-2) var(--space-3);
      border-radius: var(--radius-xs);
      font-size: 0.78rem;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      border: 1.5px solid var(--clr-border);
      background: var(--clr-surface-alt);
      color: var(--clr-text);
      transition: background 0.18s, border-color 0.18s;
      touch-action: manipulation;
      white-space: nowrap;
      min-height: 2rem;
      display: inline-flex;
      align-items: center;
    }
    .btn-small:hover { background: var(--clr-surface-hover); border-color: var(--clr-border-strong); }
    .btn-danger { color: var(--clr-error); border-color: rgba(168, 58, 44, 0.4); background: var(--clr-surface); }
    .btn-danger:hover { background: var(--clr-error-bg); border-color: rgba(168, 58, 44, 0.6); }
    .empty { text-align: center; color: var(--clr-text-muted); padding: var(--space-9) var(--space-7); font-size: 0.9rem; }

    @media (max-width: 768px) {
      .dashboard-recipes { padding: 1.5rem 1rem 2.5rem; }
      .header-row { flex-direction: column; align-items: stretch; }
      .btn-primary { justify-content: center; }
    }
    @media (max-width: 640px) {
      .filter-bar { flex-direction: column; align-items: stretch; }
      .filter-pills { flex-wrap: wrap; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardRecipesComponent {
  private dashboardService = inject(DashboardService);
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

  constructor() {
    this.loadRecipes();
  }

  loadRecipes(): void {
    this.dashboardService.getRecipes().pipe(takeUntilDestroyed()).subscribe({
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
  }

  setFilter(status: 'all' | 'published' | 'draft'): void {
    this.filterStatus = status;
    this.applyFilter();
  }

  togglePublish(recipe: Recipe): void {
    if (!this.canManage(recipe)) return;
    this.dashboardService.togglePublish(recipe.slug, !recipe.published).subscribe({
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
    this.dashboardService.deleteRecipe(recipe.slug).subscribe({
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
