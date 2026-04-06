import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { Category } from '../../models/models';

interface IngredientInput { name: string; quantity: string; }
interface StepInput { description: string; }

@Component({
  selector: 'app-dashboard-recipe-edit',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <div class="recipe-edit-page">
      <h1>{{ isNew() ? 'Нова рецепта' : 'Редактиране на рецепта' }}</h1>

      @if (error()) {
        <div class="error-box">{{ error() }}</div>
      }

      <form (ngSubmit)="save()" class="recipe-form">
        <div class="form-group">
          <label>Заглавие</label>
          <input type="text" [(ngModel)]="title" name="title" required />
        </div>

        <div class="form-group">
          <label>Описание</label>
          <textarea [(ngModel)]="description" name="description" rows="3"></textarea>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Категория</label>
            <select [(ngModel)]="categoryId" name="categoryId">
              <option [value]="0">— Избери —</option>
              @for (cat of categories(); track cat.id) {
                <option [value]="cat.id">{{ cat.name }}</option>
              }
            </select>
          </div>
          <div class="form-group">
            <label>Трудност</label>
            <select [(ngModel)]="difficulty" name="difficulty">
              <option value="Лесно">Лесно</option>
              <option value="Средно">Средно</option>
              <option value="За напреднали">За напреднали</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Време за приготвяне (мин)</label>
            <input type="number" [(ngModel)]="prepTime" name="prepTime" />
          </div>
          <div class="form-group">
            <label>Време за готвене (мин)</label>
            <input type="number" [(ngModel)]="cookTime" name="cookTime" />
          </div>
          <div class="form-group">
            <label>Порции</label>
            <input type="number" [(ngModel)]="servings" name="servings" />
          </div>
        </div>

        <div class="form-group">
          <label>Изображение</label>
          <input type="file" accept="image/*" (change)="onImageChange($event)" />
        </div>

        <div class="form-group">
          <label>Тагове (разделени със запетая)</label>
          <input type="text" [(ngModel)]="tagsInput" name="tags" placeholder="Българска, Традиционна..." />
        </div>

        <div class="section">
          <div class="section-header">
            <h2>Съставки</h2>
            <button type="button" class="btn-small" (click)="addIngredient()">+ Добави</button>
          </div>
          @for (ing of ingredients; track $index) {
            <div class="ingredient-row">
              <input type="text" [(ngModel)]="ing.quantity" [name]="'ing-qty-' + $index" placeholder="Количество" class="qty-input" />
              <input type="text" [(ngModel)]="ing.name" [name]="'ing-name-' + $index" placeholder="Съставка" class="name-input" />
              <button type="button" class="btn-remove" (click)="removeIngredient($index)">×</button>
            </div>
          }
        </div>

        <div class="section">
          <div class="section-header">
            <h2>Стъпки</h2>
            <button type="button" class="btn-small" (click)="addStep()">+ Добави</button>
          </div>
          @for (step of steps; track $index) {
            <div class="step-row">
              <span class="step-num">{{ $index + 1 }}.</span>
              <textarea [(ngModel)]="step.description" [name]="'step-' + $index" rows="2"></textarea>
              <button type="button" class="btn-remove" (click)="removeStep($index)">×</button>
            </div>
          }
        </div>

        <div class="form-actions">
          <a routerLink="/dashboard/recipes" class="btn-cancel">Отказ</a>
          <button type="submit" class="btn-save" [disabled]="saving()">
            {{ saving() ? 'Запазване...' : 'Запази' }}
          </button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .recipe-edit-page {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
    }
    h1 { font-family: 'Georgia', serif; font-size: 1.75rem; color: #1c1917; margin: 0 0 1.5rem; }
    h2 { font-family: 'Georgia', serif; font-size: 1.1rem; color: #1c1917; margin: 0; }
    .error-box {
      padding: 0.75rem 1rem;
      background: #fef2f2;
      border: 1px solid #fecaca;
      border-radius: 0.75rem;
      color: #dc2626;
      margin-bottom: 1rem;
    }
    .recipe-form {
      background: rgba(255,255,255,0.9);
      border-radius: 1.5rem;
      border: 1px solid rgba(0,0,0,0.06);
      padding: 2rem;
      box-shadow: 0 8px 24px rgba(0,0,0,0.04);
    }
    .form-group {
      margin-bottom: 1rem;
      flex: 1;
    }
    .form-group label {
      display: block;
      font-size: 0.85rem;
      font-weight: 600;
      color: #44403c;
      margin-bottom: 0.3rem;
    }
    .form-group input, .form-group select, .form-group textarea {
      width: 100%;
      padding: 0.6rem 0.75rem;
      border: 1px solid rgba(0,0,0,0.12);
      border-radius: 0.75rem;
      font-size: 0.95rem;
      font-family: inherit;
      box-sizing: border-box;
    }
    .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
      outline: none;
      border-color: #1c1917;
    }
    .form-row { display: flex; gap: 1rem; }
    .section { margin-top: 1.5rem; }
    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.75rem;
    }
    .ingredient-row, .step-row {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      margin-bottom: 0.5rem;
    }
    .qty-input { flex: 0 0 120px; }
    .name-input { flex: 1; }
    .step-row textarea { flex: 1; padding: 0.5rem 0.75rem; border: 1px solid rgba(0,0,0,0.12); border-radius: 0.75rem; font-family: inherit; font-size: 0.95rem; }
    .step-num { font-weight: 600; color: #78716c; min-width: 24px; }
    .btn-small {
      padding: 0.35rem 0.75rem;
      border-radius: 0.5rem;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      border: 1px solid rgba(0,0,0,0.1);
      background: #fff;
      color: #1c1917;
    }
    .btn-remove {
      width: 28px;
      height: 28px;
      border: none;
      background: #fef2f2;
      color: #dc2626;
      border-radius: 50%;
      font-size: 1.1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem;
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(0,0,0,0.06);
    }
    .btn-cancel {
      padding: 0.6rem 1.25rem;
      border-radius: 0.75rem;
      text-decoration: none;
      color: #78716c;
      font-weight: 600;
    }
    .btn-save {
      padding: 0.6rem 1.5rem;
      background: #1c1917;
      color: #fff;
      border: none;
      border-radius: 0.75rem;
      font-weight: 600;
      font-size: 0.95rem;
      cursor: pointer;
    }
    .btn-save:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-save:hover:not(:disabled) { background: #44403c; }
    @media (max-width: 640px) {
      .form-row { flex-direction: column; gap: 0; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardRecipeEditComponent implements OnInit {
  private recipeService = inject(RecipeService);
  private cdr = inject(ChangeDetectorRef);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  isNew = signal(true);
  saving = signal(false);
  error = signal('');
  categories = signal<Category[]>([]);
  recipeId = 0;
  recipeSlug = '';

  title = '';
  description = '';
  categoryId = 0;
  difficulty = 'Средно';
  prepTime = 0;
  cookTime = 0;
  servings = 4;
  tagsInput = '';
  imageFile: File | null = null;
  ingredients: IngredientInput[] = [{ name: '', quantity: '' }];
  steps: StepInput[] = [{ description: '' }];

  ngOnInit(): void {
    this.recipeService.getCategories().subscribe(c => this.categories.set(c));

    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.isNew.set(false);
      this.recipeSlug = slug;
      this.recipeService.getDashboardRecipes().subscribe(recipes => {
        const recipe = recipes.find(r => r.slug === this.recipeSlug);
        if (recipe) {
          this.title = recipe.title;
          this.description = recipe.description || '';
          this.categoryId = recipe.category_id || 0;
          this.difficulty = recipe.difficulty || 'Средно';
          this.prepTime = recipe.prep_minutes || 0;
          this.cookTime = recipe.cook_minutes || 0;
          this.servings = recipe.servings || 4;
          this.tagsInput = recipe.tags?.map(t => t.name).join(', ') || '';
          this.ingredients = recipe.ingredients?.map(i => ({ name: i.name, quantity: i.amount || '' })) || [];
          this.steps = recipe.steps?.map(s => ({ description: s.description })) || [];
          if (this.ingredients.length === 0) this.ingredients = [{ name: '', quantity: '' }];
          if (this.steps.length === 0) this.steps = [{ description: '' }];
          this.cdr.markForCheck();
        }
      });
    }
  }

  onImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.imageFile = input.files[0];
    }
  }

  addIngredient(): void { this.ingredients.push({ name: '', quantity: '' }); }
  removeIngredient(i: number): void { this.ingredients.splice(i, 1); }
  addStep(): void { this.steps.push({ description: '' }); }
  removeStep(i: number): void { this.steps.splice(i, 1); }

  save(): void {
    if (!this.title.trim()) {
      this.error.set('Заглавието е задължително.');
      return;
    }
    this.saving.set(true);
    this.error.set('');

    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('description', this.description);
    if (this.categoryId) formData.append('category_id', String(this.categoryId));
    formData.append('difficulty', this.difficulty);
    formData.append('prep_minutes', String(this.prepTime));
    formData.append('cook_minutes', String(this.cookTime));
    formData.append('servings', String(this.servings));
    if (this.imageFile) formData.append('hero_image', this.imageFile);
    const tags = this.tagsInput.split(',').map(t => t.trim()).filter(Boolean);
    tags.forEach((t, i) => formData.append(`tags[${i}]`, t));
    const validIngredients = this.ingredients.filter(i => i.name.trim());
    validIngredients.forEach((ing, i) => {
      formData.append(`ingredients[${i}][name]`, ing.name);
      formData.append(`ingredients[${i}][amount]`, ing.quantity);
    });
    const validSteps = this.steps.filter(s => s.description.trim());
    validSteps.forEach((s, i) => {
      formData.append(`steps[${i}][title]`, `Стъпка ${i + 1}`);
      formData.append(`steps[${i}][description]`, s.description);
    });

    const req$ = this.isNew()
      ? this.recipeService.createRecipe(formData)
      : this.recipeService.updateRecipe(this.recipeSlug, formData);

    req$.subscribe({
      next: () => {
        this.saving.set(false);
        this.router.navigate(['/dashboard/recipes']);
      },
      error: (err) => {
        this.saving.set(false);
        this.error.set(err.error?.message || 'Възникна грешка.');
      },
    });
  }
}
