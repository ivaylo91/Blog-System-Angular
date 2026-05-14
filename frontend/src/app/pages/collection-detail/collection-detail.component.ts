import { ChangeDetectionStrategy, Component, inject, signal, computed } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFolderOpen, faArrowLeft, faTrashCan, faPencil, faSpinner, faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { CollectionService } from '../../services/collection.service';
import { ToastService } from '../../services/toast.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { Collection, Recipe } from '../../models/models';

@Component({
  selector: 'app-collection-detail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, FontAwesomeModule, FormsModule, RecipeCardComponent],
  template: `
    <!-- Edit modal -->
    @if (editModalOpen()) {
      <div class="col-backdrop" (click)="editModalOpen.set(false)" role="dialog" aria-modal="true" aria-label="Редактирай колекция">
        <div class="col-modal" (click)="$event.stopPropagation()">
          <h2 class="col-modal-title">Редактирай колекция</h2>
          <label class="col-field-label" for="cd-name">Название</label>
          <input id="cd-name" class="col-input" type="text" [(ngModel)]="formName" maxlength="100" />
          <label class="col-field-label" for="cd-desc">Описание <span class="optional">(незадължително)</span></label>
          <textarea id="cd-desc" class="col-textarea" [(ngModel)]="formDesc" maxlength="300" rows="3"></textarea>
          <div class="col-modal-actions">
            <button class="col-cancel-btn" type="button" (click)="editModalOpen.set(false)">Отказ</button>
            <button class="col-save-btn" type="button" (click)="saveEdit()" [disabled]="saving() || !formName.trim()">
              @if (saving()) { <fa-icon [icon]="faSpinner" class="spin" aria-hidden="true"></fa-icon> }
              Запази
            </button>
          </div>
        </div>
      </div>
    }

    <div class="cd-page">
      @if (loading()) {
        <div class="cd-loading" role="status" aria-label="Зарежда се...">
          <div class="cd-skel-head"></div>
          <div class="cd-skel-grid">
            @for (_ of [1,2,3,4]; track $index) { <div class="cd-skel-card"></div> }
          </div>
        </div>
      } @else if (loadError()) {
        <div class="cd-error">
          <p>Колекцията не беше намерена.</p>
          <a routerLink="/collections" class="cd-back-link">← Към колекциите</a>
        </div>
      } @else {
        <!-- Header -->
        <div class="cd-header">
          <a routerLink="/collections" class="cd-back">
            <fa-icon [icon]="faArrowLeft" aria-hidden="true"></fa-icon>
            Колекции
          </a>
          <div class="cd-header-body">
            <div class="cd-title-row">
              <h1 class="cd-title">{{ collection()?.name }}</h1>
              <div class="cd-header-actions">
                <button class="cd-icon-btn" type="button" (click)="openEdit()" aria-label="Редактирай">
                  <fa-icon [icon]="faPencil" aria-hidden="true"></fa-icon>
                </button>
              </div>
            </div>
            @if (collection()?.description) {
              <p class="cd-desc">{{ collection()?.description }}</p>
            }
            <p class="cd-count">{{ collection()?.recipes_count }} {{ (collection()?.recipes_count ?? 0) === 1 ? 'рецепта' : 'рецепти' }}</p>
          </div>
        </div>

        <!-- Recipe grid -->
        @if (recipes().length === 0) {
          <div class="cd-empty">
            <fa-icon [icon]="faFolderOpen" class="cd-empty-icon" aria-hidden="true"></fa-icon>
            <p class="cd-empty-msg">Колекцията е празна.</p>
            <p class="cd-empty-sub">Добавяй рецепти от техните страници с бутона "Запази в колекция".</p>
            <a routerLink="/recipes" class="cd-browse-btn">
              <fa-icon [icon]="faPlus" aria-hidden="true"></fa-icon>
              Разгледай рецепти
            </a>
          </div>
        } @else {
          <div class="cd-grid">
            @for (r of recipes(); track r.id; let i = $index) {
              <div class="cd-recipe-wrap">
                <app-recipe-card [recipe]="r" [index]="i" />
                <button class="cd-remove-btn" type="button"
                        (click)="removeRecipe(r)"
                        aria-label="Премахни от колекцията">
                  <fa-icon [icon]="faTrashCan" aria-hidden="true"></fa-icon>
                </button>
              </div>
            }
          </div>

          <!-- Pagination -->
          @if (lastPage() > 1) {
            <div class="cd-pagination">
              <button class="cd-page-btn" [disabled]="currentPage() <= 1" (click)="goTo(currentPage() - 1)">← Предишна</button>
              <span class="cd-page-info">{{ currentPage() }} / {{ lastPage() }}</span>
              <button class="cd-page-btn" [disabled]="currentPage() >= lastPage()" (click)="goTo(currentPage() + 1)">Следваща →</button>
            </div>
          }
        }
      }
    </div>
  `,
  styles: [`
    .cd-page {
      min-height: 100dvh;
      background: var(--paper);
      padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 2rem);
      max-width: 1100px;
      margin: 0 auto;
    }

    /* ── Loading skeleton ─────────────────────────────────── */
    .cd-loading { display: flex; flex-direction: column; gap: 2rem; }
    .cd-skel-head {
      height: 80px;
      border-radius: var(--radius-xl);
      background: var(--paper-2);
      animation: cd-pulse 1.4s ease-in-out infinite;
    }
    .cd-skel-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.5rem; }
    .cd-skel-card {
      height: 260px;
      border-radius: var(--radius-xl);
      background: var(--paper-2);
      animation: cd-pulse 1.4s ease-in-out infinite;
    }
    @keyframes cd-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.55; } }

    /* ── Error ─────────────────────────────────────────────── */
    .cd-error {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 4rem 1rem;
      text-align: center;
    }
    .cd-back-link { color: var(--terracotta); text-decoration: none; font-weight: 600; }

    /* ── Header ────────────────────────────────────────────── */
    .cd-back {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--clr-text-muted);
      text-decoration: none;
      margin-bottom: 1.25rem;
      transition: color 0.2s;
    }
    .cd-back:hover { color: var(--clr-text); }

    .cd-title-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .cd-title {
      font-family: var(--font-display);
      font-style: italic;
      font-size: clamp(1.8rem, 4vw, 2.6rem);
      margin: 0;
      color: var(--clr-text);
      line-height: 1.1;
    }
    .cd-header-actions { display: flex; gap: 0.5rem; }
    .cd-icon-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2.75rem; height: 2.75rem;
      border: none;
      border-radius: 50%;
      background: var(--paper-2);
      color: var(--clr-text-muted);
      font-size: 0.85rem;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
      touch-action: manipulation;
    }
    .cd-icon-btn:hover { background: var(--clr-surface-hover); color: var(--clr-text); }
    .cd-desc {
      font-size: 0.9rem;
      color: var(--clr-text-muted);
      line-height: 1.5;
      margin: 0.35rem 0 0;
      max-width: 55ch;
    }
    .cd-count {
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: var(--clr-text-muted);
      margin: 0.5rem 0 2rem;
    }

    /* ── Grid ──────────────────────────────────────────────── */
    .cd-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 1.5rem;
    }
    .cd-recipe-wrap {
      position: relative;
    }
    .cd-remove-btn {
      position: absolute;
      top: 0.5rem; right: 0.5rem;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.75rem; height: 2.75rem;
      border: none;
      border-radius: 50%;
      background: rgba(0,0,0,0.55);
      color: rgba(255,255,255,0.85);
      font-size: 0.78rem;
      cursor: pointer;
      touch-action: manipulation;
      opacity: 0;
      transition: opacity 0.2s, background 0.2s;
    }
    .cd-recipe-wrap:hover .cd-remove-btn { opacity: 1; }
    .cd-remove-btn:hover { background: var(--clr-error); color: #fff; }
    @media (hover: none) {
      .cd-remove-btn { opacity: 1; }
    }

    /* ── Empty ─────────────────────────────────────────────── */
    .cd-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      padding: clamp(3rem, 8vw, 5rem) 1rem;
      text-align: center;
    }
    .cd-empty-icon { font-size: 3rem; color: var(--clr-text-muted); opacity: 0.4; }
    .cd-empty-msg { font-family: var(--font-display); font-style: italic; font-size: 1.2rem; margin: 0; }
    .cd-empty-sub { font-size: 0.85rem; color: var(--clr-text-muted); max-width: 36ch; line-height: 1.5; margin: 0; }
    .cd-browse-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      margin-top: 0.5rem;
      padding: 0.6rem 1.2rem;
      background: var(--terracotta);
      color: #fff;
      border-radius: var(--radius-pill);
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 600;
      transition: background 0.2s;
    }
    .cd-browse-btn:hover { background: var(--terracotta-2); }

    /* ── Pagination ─────────────────────────────────────────── */
    .cd-pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-top: 2.5rem;
    }
    .cd-page-btn {
      padding: 0.5rem 1rem;
      border: 1px solid var(--clr-border);
      border-radius: var(--radius-xl);
      background: var(--paper-2);
      color: var(--clr-text);
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    .cd-page-btn:disabled { opacity: 0.4; cursor: not-allowed; }
    .cd-page-btn:not(:disabled):hover { background: var(--clr-surface-hover); }
    .cd-page-info { font-size: 0.85rem; color: var(--clr-text-muted); min-width: 5ch; text-align: center; }

    /* ── Modal ─────────────────────────────────────────────── */
    .col-backdrop {
      position: fixed; inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 200;
      display: flex; align-items: center; justify-content: center;
      padding: 1rem;
      animation: col-fade 220ms ease both;
    }
    @keyframes col-fade { from { opacity: 0; } to { opacity: 1; } }
    .col-modal {
      background: var(--paper);
      border-radius: var(--radius-xl);
      padding: 1.75rem 2rem;
      width: 100%; max-width: 440px;
      animation: col-rise 240ms var(--ease-out-expo) both;
    }
    @keyframes col-rise { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
    .col-modal-title { font-family: var(--font-display); font-style: italic; font-size: 1.25rem; margin: 0 0 1.25rem; color: var(--clr-text); }
    .col-field-label {
      display: block;
      font-size: 0.78rem; font-weight: 600;
      text-transform: uppercase; letter-spacing: 0.07em;
      color: var(--clr-text-muted); margin-bottom: 0.4rem;
    }
    .optional { font-weight: 400; text-transform: none; letter-spacing: 0; opacity: 0.7; }
    .col-input, .col-textarea {
      width: 100%; box-sizing: border-box;
      padding: 0.6rem 0.85rem;
      background: var(--paper-2); border: 1px solid var(--clr-border);
      border-radius: var(--radius-xl); font-family: var(--font-body); font-size: 0.9rem;
      color: var(--clr-text); margin-bottom: 1rem; resize: vertical;
      transition: border-color 0.2s;
    }
    .col-input:focus, .col-textarea:focus { outline: none; border-color: var(--terracotta); }
    .col-modal-actions { display: flex; gap: 0.75rem; justify-content: flex-end; }
    .col-cancel-btn {
      padding: 0.55rem 1.1rem; border: 1px solid var(--clr-border); border-radius: var(--radius-xl);
      background: transparent; color: var(--clr-text); font-size: 0.875rem; font-weight: 600;
      cursor: pointer; transition: background 0.2s;
    }
    .col-cancel-btn:hover { background: var(--clr-surface-hover); }
    .col-save-btn {
      display: inline-flex; align-items: center; gap: 0.4rem;
      padding: 0.55rem 1.25rem; background: var(--terracotta); color: #fff;
      border: none; border-radius: var(--radius-xl); font-size: 0.875rem; font-weight: 600;
      cursor: pointer; transition: background 0.2s;
    }
    .col-save-btn:disabled { opacity: 0.55; cursor: not-allowed; }
    .col-save-btn:not(:disabled):hover { background: var(--terracotta-2); }

    .spin { animation: spin 0.8s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
  `],
})
export class CollectionDetailComponent {
  readonly faFolderOpen = faFolderOpen;
  readonly faArrowLeft = faArrowLeft;
  readonly faTrashCan = faTrashCan;
  readonly faPencil = faPencil;
  readonly faSpinner = faSpinner;
  readonly faPlus = faPlus;

  private svc = inject(CollectionService);
  private toast = inject(ToastService);
  private route = inject(ActivatedRoute);

  collection = signal<Collection | null>(null);
  recipes = signal<Recipe[]>([]);
  currentPage = signal(1);
  lastPage = signal(1);
  loading = signal(true);
  loadError = signal(false);
  saving = signal(false);

  editModalOpen = signal(false);
  formName = '';
  formDesc = '';

  private collectionId = signal<number>(0);

  constructor() {
    this.route.params.pipe(takeUntilDestroyed()).subscribe(p => {
      const id = Number(p['id']);
      this.collectionId.set(id);
      this.load(id, 1);
    });
  }

  private load(id: number, page: number): void {
    this.loading.set(true);
    this.svc.getCollection(id, page).pipe(takeUntilDestroyed()).subscribe({
      next: (res) => {
        this.collection.set(res.collection);
        this.recipes.set(res.recipes.data);
        this.currentPage.set(res.recipes.current_page);
        this.lastPage.set(res.recipes.last_page);
        this.loading.set(false);
      },
      error: () => { this.loading.set(false); this.loadError.set(true); },
    });
  }

  goTo(page: number): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.load(this.collectionId(), page);
  }

  openEdit(): void {
    const col = this.collection();
    if (!col) return;
    this.formName = col.name;
    this.formDesc = col.description ?? '';
    this.editModalOpen.set(true);
  }

  saveEdit(): void {
    if (!this.formName.trim() || this.saving()) return;
    this.saving.set(true);
    this.svc.updateCollection(this.collectionId(), { name: this.formName.trim(), description: this.formDesc.trim() || undefined }).subscribe({
      next: (updated) => {
        this.collection.update(c => c ? { ...c, ...updated } : c);
        this.saving.set(false);
        this.editModalOpen.set(false);
        this.toast.success('Колекцията е обновена.');
      },
      error: () => { this.saving.set(false); this.toast.error('Грешка при запазване.'); },
    });
  }

  removeRecipe(recipe: Recipe): void {
    this.svc.toggleRecipe(this.collectionId(), recipe.slug).subscribe({
      next: (res) => {
        this.recipes.update(rs => rs.filter(r => r.id !== recipe.id));
        this.collection.update(c => c ? { ...c, recipes_count: res.recipes_count } : c);
        this.toast.success(`"${recipe.title}" е премахната от колекцията.`);
      },
      error: () => this.toast.error('Грешка при премахване.'),
    });
  }
}
