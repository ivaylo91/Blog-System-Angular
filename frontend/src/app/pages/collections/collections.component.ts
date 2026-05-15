import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFolderOpen, faPlus, faTrashCan, faPencil, faSpinner, faArrowRight, faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { CollectionService } from '../../services/collection.service';
import { ToastService } from '../../services/toast.service';
import { Collection } from '../../models/models';

@Component({
  selector: 'app-collections',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, FontAwesomeModule, FormsModule],
  template: `
    <!-- Create / Edit modal -->
    @if (modalOpen()) {
      <div class="col-backdrop" (click)="closeModal()" role="dialog" aria-modal="true"
           [attr.aria-label]="editingId() ? 'Редактирай колекция' : 'Нова колекция'">
        <div class="col-modal" (click)="$event.stopPropagation()">
          <h2 class="col-modal-title">
            {{ editingId() ? 'Редактирай колекция' : 'Нова колекция' }}
          </h2>
          <label class="col-field-label" for="col-name">Название</label>
          <input id="col-name" class="col-input" type="text" [(ngModel)]="formName"
                 placeholder="напр. Любими закуски" maxlength="100" />
          <label class="col-field-label" for="col-desc">Описание <span class="optional">(незадължително)</span></label>
          <textarea id="col-desc" class="col-textarea" [(ngModel)]="formDesc"
                    placeholder="Кратко описание на колекцията..." maxlength="300" rows="3"></textarea>
          <div class="col-modal-actions">
            <button class="col-cancel-btn" type="button" (click)="closeModal()">Отказ</button>
            <button class="col-save-btn" type="button" (click)="save()" [disabled]="saving() || !formName.trim()">
              @if (saving()) {
                <fa-icon [icon]="faSpinner" class="spin" aria-hidden="true"></fa-icon>
              }
              Запази
            </button>
          </div>
        </div>
      </div>
    }

    <!-- Delete confirm modal -->
    @if (deleteTarget()) {
      <div class="col-backdrop" (click)="deleteTarget.set(null)" role="dialog" aria-modal="true" aria-label="Потвърди изтриване">
        <div class="col-modal" (click)="$event.stopPropagation()">
          <h2 class="col-modal-title">Изтрий колекция</h2>
          <p class="col-modal-msg">Сигурни ли сте? Рецептите в колекцията <strong>няма да бъдат изтрити</strong>.</p>
          <div class="col-modal-actions">
            <button class="col-cancel-btn" type="button" (click)="deleteTarget.set(null)">Отказ</button>
            <button class="col-delete-confirm-btn" type="button" (click)="confirmDelete()" [disabled]="saving()">
              @if (saving()) { <fa-icon [icon]="faSpinner" class="spin" aria-hidden="true"></fa-icon> }
              Изтрий
            </button>
          </div>
        </div>
      </div>
    }

    <div class="cl-page">
      <div class="cl-header">
        <div class="cl-header-left">
          <fa-icon [icon]="faLayerGroup" class="cl-header-icon" aria-hidden="true"></fa-icon>
          <div>
            <h1 class="cl-title">Моите колекции</h1>
            <p class="cl-subtitle">Групирай рецептите по свой вкус</p>
          </div>
        </div>
        <button class="cl-new-btn" type="button" (click)="openCreate()">
          <fa-icon [icon]="faPlus" aria-hidden="true"></fa-icon>
          Нова колекция
        </button>
      </div>

      @if (loading()) {
        <div class="cl-loading" role="status" aria-label="Зарежда се...">
          @for (_ of [1,2,3]; track $index) {
            <div class="cl-skeleton"></div>
          }
        </div>
      } @else if (collections().length === 0) {
        <div class="cl-empty">
          <fa-icon [icon]="faFolderOpen" class="cl-empty-icon" aria-hidden="true"></fa-icon>
          <p class="cl-empty-msg">Нямаш колекции все още.</p>
          <p class="cl-empty-sub">Създай първата си колекция и добавяй рецепти от страниците им.</p>
          <button class="cl-new-btn" type="button" (click)="openCreate()">
            <fa-icon [icon]="faPlus" aria-hidden="true"></fa-icon>
            Създай колекция
          </button>
        </div>
      } @else {
        <div class="cl-grid">
          @for (col of collections(); track col.id) {
            <div class="cl-card">
              <!-- Cover image or placeholder -->
              <a [routerLink]="['/collections', col.id]" class="cl-cover" [attr.aria-label]="col.name">
                @if (col.cover_image) {
                  <img [src]="col.cover_image" [alt]="col.name" class="cl-cover-img" loading="lazy" />
                } @else {
                  <div class="cl-cover-empty" aria-hidden="true">
                    <fa-icon [icon]="faFolderOpen" class="cl-cover-placeholder-icon"></fa-icon>
                  </div>
                }
                <div class="cl-cover-count">
                  {{ col.recipes_count }} {{ col.recipes_count === 1 ? 'рецепта' : 'рецепти' }}
                </div>
              </a>
              <div class="cl-card-body">
                <a [routerLink]="['/collections', col.id]" class="cl-card-name">{{ col.name }}</a>
                @if (col.description) {
                  <p class="cl-card-desc">{{ col.description }}</p>
                }
                <div class="cl-card-actions">
                  <a [routerLink]="['/collections', col.id]" class="cl-open-btn">
                    Отвори
                    <fa-icon [icon]="faArrowRight" aria-hidden="true"></fa-icon>
                  </a>
                  <button class="cl-icon-btn" type="button" (click)="openEdit(col)" aria-label="Редактирай {{ col.name }}">
                    <fa-icon [icon]="faPencil" aria-hidden="true"></fa-icon>
                  </button>
                  <button class="cl-icon-btn cl-del-btn" type="button" (click)="deleteTarget.set(col)" aria-label="Изтрий {{ col.name }}">
                    <fa-icon [icon]="faTrashCan" aria-hidden="true"></fa-icon>
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    /* ── Page ─────────────────────────────────────────────────── */
    .cl-page {
      min-height: 100vh;
      min-height: 100dvh;
      background: var(--paper);
      padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 2rem);
      max-width: 1100px;
      margin: 0 auto;
    }

    .cl-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 2.5rem;
    }
    .cl-header-left {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .cl-header-icon {
      font-size: 2rem;
      color: var(--terracotta);
      opacity: 0.85;
    }
    .cl-title {
      font-family: var(--font-display);
      font-style: italic;
      font-size: clamp(1.6rem, 3vw, 2.2rem);
      color: var(--clr-text);
      margin: 0;
      line-height: 1.15;
    }
    .cl-subtitle {
      font-size: 0.85rem;
      color: var(--clr-text-muted);
      margin: 0.2rem 0 0;
    }

    /* ── New button ─────────────────────────────────────────── */
    .cl-new-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.6rem 1.2rem;
      background: var(--terracotta);
      color: #fff;
      border: none;
      border-radius: var(--radius-pill);
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s, transform 0.15s;
    }
    .cl-new-btn:hover { background: var(--terracotta-2); transform: translateY(-1px); }
    .cl-new-btn:active { transform: translateY(0); }

    /* ── Skeleton ───────────────────────────────────────────── */
    .cl-loading { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.5rem; }
    .cl-skeleton {
      height: 280px;
      border-radius: var(--radius-xl);
      background: var(--paper-2);
      animation: cl-pulse 1.4s ease-in-out infinite;
    }
    @keyframes cl-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.55; } }

    /* ── Empty ──────────────────────────────────────────────── */
    .cl-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      padding: clamp(3rem, 8vw, 6rem) 1.5rem;
      text-align: center;
    }
    .cl-empty-icon { font-size: 3.5rem; color: var(--clr-text-muted); opacity: 0.5; }
    .cl-empty-msg  { font-family: var(--font-display); font-style: italic; font-size: 1.25rem; color: var(--clr-text); margin: 0; }
    .cl-empty-sub  { font-size: 0.875rem; color: var(--clr-text-muted); max-width: 38ch; line-height: 1.5; margin: 0; }

    /* ── Grid ───────────────────────────────────────────────── */
    .cl-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1.5rem;
    }

    /* ── Card ───────────────────────────────────────────────── */
    .cl-card {
      border-radius: var(--radius-xl);
      overflow: hidden;
      background: var(--paper-2);
      box-shadow: 0 1px 3px rgba(60,40,15,0.07);
      display: flex;
      flex-direction: column;
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .cl-card:hover { box-shadow: 0 4px 16px rgba(60,40,15,0.12); transform: translateY(-2px); }

    /* Cover */
    .cl-cover {
      position: relative;
      display: block;
      aspect-ratio: 16 / 9;
      overflow: hidden;
      text-decoration: none;
    }
    .cl-cover-img {
      width: 100%; height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }
    .cl-card:hover .cl-cover-img { transform: scale(1.04); }
    .cl-cover-empty {
      width: 100%; height: 100%;
      background: var(--paper);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .cl-cover-placeholder-icon { font-size: 2.5rem; color: var(--clr-text-muted); opacity: 0.35; }
    .cl-cover-count {
      position: absolute;
      bottom: 0.5rem; right: 0.6rem;
      font-size: 0.72rem;
      font-weight: 700;
      background: rgba(0,0,0,0.6);
      color: #fff;
      padding: 0.15rem 0.5rem;
      border-radius: var(--radius-pill);
      letter-spacing: 0.04em;
    }

    /* Body */
    .cl-card-body {
      padding: 0.9rem 1rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      flex: 1;
    }
    .cl-card-name {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--clr-text);
      text-decoration: none;
      line-height: 1.25;
    }
    .cl-card-name:hover { color: var(--terracotta); }
    .cl-card-desc {
      font-size: 0.82rem;
      color: var(--clr-text-muted);
      line-height: 1.45;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .cl-card-actions {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      margin-top: auto;
      padding-top: 0.5rem;
    }
    .cl-open-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--terracotta);
      text-decoration: none;
      padding: 0.35rem 0.75rem;
      border-radius: var(--radius-pill);
      background: color-mix(in srgb, var(--terracotta) 10%, transparent);
      transition: background 0.2s;
    }
    .cl-open-btn:hover { background: color-mix(in srgb, var(--terracotta) 18%, transparent); }
    .cl-icon-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2.75rem; height: 2.75rem;
      border: none;
      border-radius: 50%;
      background: var(--paper);
      color: var(--clr-text-muted);
      cursor: pointer;
      font-size: 0.8rem;
      transition: background 0.2s, color 0.2s;
      margin-left: auto;
      touch-action: manipulation;
    }
    .cl-icon-btn:hover { background: var(--clr-surface-hover); color: var(--clr-text); }
    .cl-del-btn:hover { background: var(--clr-error-bg); color: var(--clr-error-dark); }

    /* ── Modal backdrop ─────────────────────────────────────── */
    .col-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 200;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      animation: col-fade 220ms ease both;
    }
    @keyframes col-fade { from { opacity: 0; } to { opacity: 1; } }

    .col-modal {
      background: var(--paper);
      border-radius: var(--radius-xl);
      padding: 1.75rem 2rem;
      width: 100%;
      max-width: 440px;
      animation: col-rise 240ms var(--ease-out-expo) both;
    }
    @keyframes col-rise { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

    .col-modal-title {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1.25rem;
      margin: 0 0 1.25rem;
      color: var(--clr-text);
    }
    .col-modal-msg { font-size: 0.9rem; color: var(--clr-text); line-height: 1.5; margin: 0 0 1.5rem; }

    .col-field-label {
      display: block;
      font-size: 0.78rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: var(--clr-text-muted);
      margin-bottom: 0.4rem;
    }
    .optional { font-weight: 400; text-transform: none; letter-spacing: 0; opacity: 0.7; }
    .col-input, .col-textarea {
      width: 100%;
      box-sizing: border-box;
      padding: 0.6rem 0.85rem;
      background: var(--paper-2);
      border: 1px solid var(--clr-border);
      border-radius: var(--radius-xl);
      font-family: var(--font-body);
      font-size: 0.9rem;
      color: var(--clr-text);
      margin-bottom: 1rem;
      resize: vertical;
      transition: border-color 0.2s;
    }
    .col-input:focus, .col-textarea:focus { outline: none; border-color: var(--terracotta); }

    .col-modal-actions { display: flex; gap: 0.75rem; justify-content: flex-end; }
    .col-cancel-btn {
      padding: 0.55rem 1.1rem;
      border: 1px solid var(--clr-border);
      border-radius: var(--radius-xl);
      background: transparent;
      color: var(--clr-text);
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    .col-cancel-btn:hover { background: var(--clr-surface-hover); }
    .col-save-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.55rem 1.25rem;
      background: var(--terracotta);
      color: #fff;
      border: none;
      border-radius: var(--radius-xl);
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    .col-save-btn:disabled { opacity: 0.55; cursor: not-allowed; }
    .col-save-btn:not(:disabled):hover { background: var(--terracotta-2); }
    .col-delete-confirm-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.55rem 1.25rem;
      background: var(--clr-error);
      color: #fff;
      border: none;
      border-radius: var(--radius-xl);
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    .col-delete-confirm-btn:disabled { opacity: 0.55; cursor: not-allowed; }
    .col-delete-confirm-btn:not(:disabled):hover { background: var(--clr-error-dark); }

    .spin { animation: spin 0.8s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
  `],
})
export class CollectionsComponent {
  readonly faFolderOpen = faFolderOpen;
  readonly faPlus = faPlus;
  readonly faTrashCan = faTrashCan;
  readonly faPencil = faPencil;
  readonly faSpinner = faSpinner;
  readonly faArrowRight = faArrowRight;
  readonly faLayerGroup = faLayerGroup;

  private svc = inject(CollectionService);
  private toast = inject(ToastService);

  collections = signal<Collection[]>([]);
  loading = signal(true);
  saving = signal(false);

  modalOpen = signal(false);
  editingId = signal<number | null>(null);
  deleteTarget = signal<Collection | null>(null);

  formName = '';
  formDesc = '';

  constructor() {
    this.load();
  }

  private load(): void {
    this.svc.getCollections().pipe(takeUntilDestroyed()).subscribe({
      next: (cols) => { this.collections.set(cols); this.loading.set(false); },
      error: () => { this.loading.set(false); this.toast.error('Грешка при зареждане.'); },
    });
  }

  openCreate(): void {
    this.editingId.set(null);
    this.formName = '';
    this.formDesc = '';
    this.modalOpen.set(true);
  }

  openEdit(col: Collection): void {
    this.editingId.set(col.id);
    this.formName = col.name;
    this.formDesc = col.description ?? '';
    this.modalOpen.set(true);
  }

  closeModal(): void {
    this.modalOpen.set(false);
    this.editingId.set(null);
  }

  save(): void {
    if (!this.formName.trim() || this.saving()) return;
    this.saving.set(true);
    const data = { name: this.formName.trim(), description: this.formDesc.trim() || undefined };
    const id = this.editingId();

    const req = id ? this.svc.updateCollection(id, data) : this.svc.createCollection(data);
    req.subscribe({
      next: (updated) => {
        if (id) {
          this.collections.update(cols => cols.map(c => c.id === id ? { ...c, ...updated } : c));
          this.toast.success('Колекцията е обновена.');
        } else {
          this.collections.update(cols => [updated, ...cols]);
          this.toast.success('Колекцията е създадена.');
        }
        this.saving.set(false);
        this.closeModal();
      },
      error: (err) => {
        this.saving.set(false);
        const msg = err?.error?.message || 'Грешка при запазване.';
        this.toast.error(msg);
      },
    });
  }

  confirmDelete(): void {
    const target = this.deleteTarget();
    if (!target || this.saving()) return;
    this.saving.set(true);
    this.svc.deleteCollection(target.id).subscribe({
      next: () => {
        this.collections.update(cols => cols.filter(c => c.id !== target.id));
        this.saving.set(false);
        this.deleteTarget.set(null);
        this.toast.success('Колекцията е изтрита.');
      },
      error: () => { this.saving.set(false); this.toast.error('Грешка при изтриване.'); },
    });
  }
}
