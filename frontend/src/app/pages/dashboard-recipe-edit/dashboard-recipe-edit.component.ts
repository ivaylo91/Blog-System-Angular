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
    <div class="edit-page">

      <!-- Page header -->
      <div class="page-header">
        <div>
          <p class="breadcrumb">
            <a routerLink="/dashboard/recipes">Рецепти</a>
            <span>›</span>
            {{ isNew() ? 'Нова рецепта' : 'Редактиране' }}
          </p>
          <h1>{{ isNew() ? 'Нова рецепта' : 'Редактиране на рецепта' }}</h1>
        </div>
        <div class="header-actions">
          <a routerLink="/dashboard/recipes" class="btn-cancel">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            Отказ
          </a>
          <button type="submit" form="recipe-form" class="btn-save" [disabled]="saving()">
            @if (saving()) {
              <svg class="spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
              Запазване...
            } @else {
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
              Запази
            }
          </button>
        </div>
      </div>

      @if (error()) {
        <div class="error-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          {{ error() }}
        </div>
      }

      <form id="recipe-form" (ngSubmit)="save()" class="form-grid">

        <!-- LEFT COLUMN -->
        <div class="col-main">

          <!-- Basic info card -->
          <div class="card">
            <div class="card-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              Основна информация
            </div>
            <div class="field">
              <label>Заглавие <span class="req">*</span></label>
              <input type="text" [(ngModel)]="title" name="title" required placeholder="Напр. Мусака по домашному" />
            </div>
            <div class="field">
              <label>Описание</label>
              <textarea [(ngModel)]="description" name="description" rows="4" placeholder="Кратко описание на рецептата..."></textarea>
            </div>
            <div class="field-row">
              <div class="field">
                <label>Категория</label>
                <select [(ngModel)]="categoryId" name="categoryId">
                  <option [value]="0">— Избери —</option>
                  @for (cat of categories(); track cat.id) {
                    <option [value]="cat.id">{{ cat.name }}</option>
                  }
                </select>
              </div>
              <div class="field">
                <label>Трудност</label>
                <select [(ngModel)]="difficulty" name="difficulty">
                  <option value="Лесно">Лесно</option>
                  <option value="Средно">Средно</option>
                  <option value="За напреднали">За напреднали</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Ingredients card -->
          <div class="card">
            <div class="card-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>
              Съставки
            </div>
            @for (ing of ingredients; track $index) {
              <div class="ingredient-row">
                <span class="row-index">{{ $index + 1 }}</span>
                <input type="text" [(ngModel)]="ing.quantity" [name]="'ing-qty-' + $index"
                       placeholder="Количество" class="qty-input" />
                <input type="text" [(ngModel)]="ing.name" [name]="'ing-name-' + $index"
                       placeholder="Съставка" class="name-input" />
                <button type="button" class="btn-remove" (click)="removeIngredient($index)" title="Премахни">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
            }
            <button type="button" class="btn-add" (click)="addIngredient()">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Добави съставка
            </button>
          </div>

          <!-- Steps card -->
          <div class="card">
            <div class="card-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
              Стъпки за приготвяне
            </div>
            @for (step of steps; track $index) {
              <div class="step-row">
                <div class="step-badge">{{ $index + 1 }}</div>
                <textarea [(ngModel)]="step.description" [name]="'step-' + $index"
                          rows="2" placeholder="Опиши тази стъпка..."></textarea>
                <button type="button" class="btn-remove" (click)="removeStep($index)" title="Премахни">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
            }
            <button type="button" class="btn-add" (click)="addStep()">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Добави стъпка
            </button>
          </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="col-side">

          <!-- Times & servings -->
          <div class="card">
            <div class="card-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Времена & порции
            </div>
            <div class="field">
              <label>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="label-icon"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Подготовка (мин)
              </label>
              <input type="number" [(ngModel)]="prepTime" name="prepTime" min="0" />
            </div>
            <div class="field">
              <label>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="label-icon"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
                Готвене (мин)
              </label>
              <input type="number" [(ngModel)]="cookTime" name="cookTime" min="0" />
            </div>
            <div class="field">
              <label>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="label-icon"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Порции
              </label>
              <input type="number" [(ngModel)]="servings" name="servings" min="1" />
            </div>
          </div>

          <!-- Image upload -->
          <div class="card">
            <div class="card-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              Изображение
            </div>
            <label class="file-drop">
              <input type="file" accept="image/*" (change)="onImageChange($event)" />
              @if (imagePreview) {
                <img [src]="imagePreview" alt="Преглед" class="img-preview" />
              } @else {
                <div class="file-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                  <span>Кликни за качване</span>
                  <small>PNG, JPG, WEBP</small>
                </div>
              }
            </label>
          </div>

          <!-- Tags -->
          <div class="card">
            <div class="card-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
              Тагове
            </div>
            <div class="field">
              <input type="text" [(ngModel)]="tagsInput" name="tags"
                     placeholder="Българска, Традиционна, Лятна..." />
              <p class="field-hint">Разделени със запетая</p>
            </div>
          </div>

          <!-- Publish -->
          <div class="card">
            <div class="card-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              Публикуване
            </div>
            <label class="toggle-row">
              <input type="checkbox" [(ngModel)]="published" name="published" />
              <span class="toggle-label">Публикувана рецепта</span>
            </label>
            <p class="field-hint">Само публикувани рецепти се виждат от посетителите.</p>
          </div>

        </div>
      </form>
    </div>
  `,
  styles: [`
    .edit-page {
      max-width: 1100px;
      margin: 0 auto;
      padding: 2rem 1.5rem 4rem;
    }

    /* Page header */
    .page-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 1.75rem;
    }
    .breadcrumb {
      font-size: 0.8rem;
      color: #57534e;
      margin: 0 0 0.35rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
    .breadcrumb a { color: #4a7c59; text-decoration: none; font-weight: 500; }
    .breadcrumb a:hover { text-decoration: underline; }
    h1 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 1.9rem;
      color: #1c1917;
      margin: 0;
      letter-spacing: -0.02em;
    }
    .header-actions { display: flex; gap: 0.75rem; align-items: center; flex-shrink: 0; }

    /* Error */
    .error-box {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.85rem 1rem;
      background: #fef2f2;
      border: 1px solid #fecaca;
      border-radius: 0.875rem;
      color: #dc2626;
      font-size: 0.875rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
    }
    .error-box svg { width: 1.1rem; height: 1.1rem; flex-shrink: 0; }

    /* Two-column layout */
    .form-grid {
      display: grid;
      grid-template-columns: 1fr 320px;
      gap: 1.5rem;
      align-items: start;
    }
    .col-main, .col-side { display: flex; flex-direction: column; gap: 1.5rem; }

    /* Card */
    .card {
      background: #ffffff;
      border-radius: 1.25rem;
      border: 1px solid rgba(0,0,0,0.07);
      padding: 1.5rem;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .card-title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #4a7c59;
      margin-bottom: 1.25rem;
    }
    .card-title svg { width: 1rem; height: 1rem; flex-shrink: 0; }

    /* Fields */
    .field { margin-bottom: 1rem; }
    .field:last-child { margin-bottom: 0; }
    .field-row { display: flex; gap: 1rem; }
    .field-row .field { flex: 1; }
    label {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.82rem;
      font-weight: 600;
      color: #44403c;
      margin-bottom: 0.4rem;
    }
    .label-icon { width: 0.85rem; height: 0.85rem; color: #57534e; }
    .req { color: #dc2626; }
    input, select, textarea {
      width: 100%;
      padding: 0.65rem 0.9rem;
      border: 1.5px solid rgba(0,0,0,0.1);
      border-radius: 0.75rem;
      font-size: 0.9rem;
      font-family: inherit;
      box-sizing: border-box;
      background: #fafaf9;
      color: #1c1917;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: #4a7c59;
      box-shadow: 0 0 0 3px rgba(74,124,89,0.12);
      background: #fff;
    }
    textarea { resize: vertical; }
    .field-hint { font-size: 0.75rem; color: #57534e; margin: 0.3rem 0 0; }

    /* Ingredients */
    .ingredient-row {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.6rem;
    }
    .row-index {
      font-size: 0.75rem;
      font-weight: 700;
      color: #57534e;
      min-width: 1.2rem;
      text-align: right;
    }
    .qty-input { flex: 0 0 110px; }
    .name-input { flex: 1; }

    /* Steps */
    .step-row {
      display: flex;
      gap: 0.75rem;
      align-items: flex-start;
      margin-bottom: 0.75rem;
    }
    .step-badge {
      flex-shrink: 0;
      width: 1.75rem;
      height: 1.75rem;
      border-radius: 50%;
      background: #4a7c59;
      color: #fff;
      font-size: 0.75rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.65rem;
    }
    .step-row textarea { flex: 1; }

    /* Add / Remove buttons */
    .btn-add {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.5rem 1rem;
      border: 1.5px dashed rgba(74,124,89,0.4);
      border-radius: 0.75rem;
      background: rgba(74,124,89,0.05);
      color: #4a7c59;
      font-size: 0.82rem;
      font-weight: 600;
      cursor: pointer;
      width: 100%;
      justify-content: center;
      margin-top: 0.25rem;
      transition: background 0.2s, border-color 0.2s;
    }
    .btn-add svg { width: 0.9rem; height: 0.9rem; }
    .btn-add:hover { background: rgba(74,124,89,0.1); border-color: #4a7c59; }
    .btn-remove {
      flex-shrink: 0;
      width: 2rem;
      height: 2rem;
      border: none;
      background: #fef2f2;
      color: #dc2626;
      border-radius: 0.5rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    }
    .btn-remove svg { width: 0.85rem; height: 0.85rem; }
    .btn-remove:hover { background: #fee2e2; }

    /* Image upload */
    .file-drop {
      display: block;
      cursor: pointer;
      border: 2px dashed rgba(0,0,0,0.12);
      border-radius: 1rem;
      overflow: hidden;
      transition: border-color 0.2s;
    }
    .file-drop:hover { border-color: #4a7c59; }
    .file-drop input { display: none; }
    .file-placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 2rem;
      color: #57534e;
    }
    .file-placeholder svg { width: 2rem; height: 2rem; }
    .file-placeholder span { font-size: 0.875rem; font-weight: 500; color: #57534e; }
    .file-placeholder small { font-size: 0.75rem; }
    .img-preview {
      width: 100%;
      aspect-ratio: 16/9;
      object-fit: cover;
      display: block;
    }

    /* Action buttons */
    .btn-cancel {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.65rem 1.25rem;
      border-radius: 0.75rem;
      text-decoration: none;
      color: #fff;
      background: #dc2626;
      font-weight: 600;
      font-size: 0.9rem;
      transition: background 0.2s;
    }
    .btn-cancel svg { width: 0.9rem; height: 0.9rem; }
    .btn-cancel:hover { background: #b91c1c; }
    .btn-save {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.65rem 1.5rem;
      background: #4a7c59;
      color: #fff;
      border: none;
      border-radius: 0.75rem;
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn-save svg { width: 0.9rem; height: 0.9rem; }
    .btn-save:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-save:hover:not(:disabled) { background: #3a6347; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .spin { animation: spin 1s linear infinite; }

    .toggle-row {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      cursor: pointer;
      margin-bottom: 0.4rem;
    }
    .toggle-row input[type="checkbox"] {
      width: 1.1rem;
      height: 1.1rem;
      flex-shrink: 0;
      accent-color: #4a7c59;
    }
    .toggle-label { font-size: 0.9rem; font-weight: 600; color: #1c1917; }

    @media (max-width: 900px) {
      .form-grid { grid-template-columns: 1fr; }
      .col-side { order: -1; }
    }
    @media (max-width: 640px) {
      .page-header { flex-direction: column; }
      .field-row { flex-direction: column; gap: 0; }
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
  published = false;
  imageFile: File | null = null;
  imagePreview: string | null = null;
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
          this.published = recipe.published || false;
          this.ingredients = recipe.ingredients?.map(i => ({ name: i.name, quantity: i.amount || '' })) || [];
          this.steps = recipe.steps?.map(s => ({ description: s.description })) || [];
          if (this.ingredients.length === 0) this.ingredients = [{ name: '', quantity: '' }];
          if (this.steps.length === 0) this.steps = [{ description: '' }];
          if (recipe.hero_image) this.imagePreview = recipe.hero_image;
          this.cdr.markForCheck();
        }
      });
    }
  }

  onImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.imageFile = input.files[0];
      this.imagePreview = URL.createObjectURL(this.imageFile);
      this.cdr.markForCheck();
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
    formData.append('published', this.published ? '1' : '0');
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
        const errors = err.error?.errors;
        if (errors) {
          this.error.set(Object.values(errors).flat().join(' '));
        } else {
          this.error.set(err.error?.message || 'Възникна грешка.');
        }
      },
    });
  }
}
