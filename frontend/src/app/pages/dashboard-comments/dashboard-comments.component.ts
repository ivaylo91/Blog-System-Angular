import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../models/models';
import { ConfirmModalComponent } from '../../components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-dashboard-comments',
  standalone: true,
  imports: [ConfirmModalComponent, RouterLink],
  template: `
    <div class="dashboard-comments">
      <div class="header-row">
        <div>
          <h1>Коментари</h1>
          <p class="subtitle">{{ comments().length }} коментара общо</p>
        </div>
        @if (selectedIds().length > 0) {
          <button class="btn-bulk-delete" (click)="confirmBulkDelete()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
            Изтрий избраните ({{ selectedIds().length }})
          </button>
        }
      </div>

      <div class="table-wrap">
        @if (comments().length === 0) {
          <div class="empty-state">
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M52 16a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H20l-12 8V20a4 4 0 0 1 4-4h40z"/><line x1="24" y1="28" x2="40" y2="28"/><line x1="24" y1="36" x2="34" y2="36"/></svg>
            <p>Няма коментари.</p>
            <span>Коментарите от посетителите ще се появят тук.</span>
          </div>
        } @else {
          <table>
            <thead>
              <tr>
                <th class="th-check">
                  <input type="checkbox" (change)="toggleAll($event)" [checked]="allSelected()" [indeterminate]="someSelected()" aria-label="Избери всички" />
                </th>
                <th>Автор</th>
                <th>Рецепта</th>
                <th>Коментар</th>
                <th>Оценка</th>
                <th>Дата</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              @for (comment of comments(); track comment.id) {
                <tr [class.selected-row]="isSelected(comment.id)">
                  <td class="td-check">
                    <input type="checkbox" [checked]="isSelected(comment.id)" (change)="toggleSelect(comment.id)" [attr.aria-label]="'Избери коментар от ' + (comment.author?.name || 'Анонимен')" />
                  </td>
                  <td class="author-cell">
                    <div class="author-wrap">
                      <div class="author-avatar">{{ comment.author?.name?.charAt(0) || '?' }}</div>
                      <span>{{ comment.author?.name || 'Анонимен' }}</span>
                    </div>
                  </td>
                  <td class="recipe-cell">
                    @if (comment.recipe) {
                      <a [routerLink]="['/recipes', comment.recipe.slug]" class="recipe-link">{{ comment.recipe.title }}</a>
                    } @else {
                      <span class="no-val">—</span>
                    }
                  </td>
                  <td class="content-cell">{{ comment.body }}</td>
                  <td class="rating-cell">
                    @if (comment.rating) {
                      <span class="rating-badge">★ {{ comment.rating }}</span>
                    } @else {
                      <span class="no-val">—</span>
                    }
                  </td>
                  <td class="date-cell">{{ formatDate(comment.created_at) }}</td>
                  <td class="actions-cell">
                    <button class="btn-delete" (click)="confirmSingleDelete(comment)" title="Изтрий коментара">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
                      Изтрий
                    </button>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        }
      </div>

      @if (showDeleteModal()) {
        <app-confirm-modal
          [open]="true"
          [title]="deleteModalTitle()"
          [message]="deleteModalMessage()"
          (confirmed)="executeDelete()"
          (cancelled)="showDeleteModal.set(false)"
        ></app-confirm-modal>
      }
    </div>
  `,
  styles: [`
    .dashboard-comments {
      max-width: 1100px;
      margin: 0 auto;
      padding: 2rem 1.5rem 3rem;
    }

    /* Header */
    .header-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      gap: 1rem;
      flex-wrap: wrap;
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

    .btn-bulk-delete {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-3) var(--space-4);
      background: var(--clr-error-bg);
      color: var(--clr-error);
      border: 1.5px solid rgba(168, 58, 44, 0.4);
      border-radius: var(--radius-sm);
      font-weight: 600;
      font-size: 0.875rem;
      cursor: pointer;
      transition: background 0.18s, border-color 0.18s;
      touch-action: manipulation;
      white-space: nowrap;
    }
    .btn-bulk-delete svg { width: 0.875rem; height: 0.875rem; flex-shrink: 0; }
    .btn-bulk-delete:hover { background: var(--clr-error-bg); border-color: rgba(168, 58, 44, 0.6); }

    .table-wrap {
      border-radius: var(--radius-lg);
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

    /* Empty state */
    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-10) var(--space-7);
      color: var(--clr-text-faint);
      text-align: center;
    }
    .empty-state svg { width: 3rem; height: 3rem; margin-bottom: var(--space-1); }
    .empty-state p { font-size: 1rem; font-weight: 600; color: var(--clr-text); margin: 0; }
    .empty-state span { font-size: 0.875rem; }

    /* Table */
    table { width: 100%; border-collapse: collapse; }
    th {
      text-align: left;
      padding: var(--space-3) var(--space-4);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--clr-text-muted);
      font-weight: 700;
      border-bottom: 2px solid var(--clr-border-faint);
      background: var(--clr-surface-alt);
      white-space: nowrap;
    }
    .th-check { width: 2.5rem; padding: var(--space-3) var(--space-3); }
    td {
      padding: var(--space-3) var(--space-4);
      border-bottom: 1px solid var(--clr-border-faint);
      font-size: 0.875rem;
      color: var(--clr-text);
      vertical-align: middle;
    }
    .td-check { padding: var(--space-3) var(--space-3); }
    tbody tr { transition: background 0.15s; }
    tbody tr:hover { background: var(--clr-surface-hover); }
    tbody tr.selected-row { background: var(--clr-amber-bg); }
    tbody tr:last-child td { border-bottom: none; }

    /* Cells */
    .author-cell { white-space: nowrap; }
    .author-wrap {
      display: flex;
      align-items: center;
      gap: var(--space-2);
    }
    .author-avatar {
      width: 1.75rem;
      height: 1.75rem;
      border-radius: var(--radius-circle);
      background: var(--clr-green);
      color: var(--paper);
      font-size: 0.68rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      text-transform: uppercase;
    }
    .author-wrap span { font-weight: 600; font-size: 0.85rem; color: var(--clr-text); }

    .recipe-cell { max-width: 160px; }
    .recipe-link {
      color: var(--clr-brand);
      text-decoration: none;
      font-weight: 600;
      font-size: 0.83rem;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .recipe-link:hover { text-decoration: underline; }

    .content-cell {
      max-width: 280px;
      color: var(--clr-text-muted);
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-height: 1.5;
      white-space: normal;
    }

    .rating-badge {
      display: inline-block;
      padding: 2px var(--space-2);
      background: var(--clr-amber-bg);
      color: var(--clr-amber-text);
      border-radius: var(--radius-pill);
      font-size: 0.72rem;
      font-weight: 700;
    }
    .no-val { color: var(--clr-text-faint); }
    .date-cell { white-space: nowrap; color: var(--clr-text-muted); font-size: 0.82rem; }
    .actions-cell { white-space: nowrap; }

    .btn-delete {
      display: inline-flex;
      align-items: center;
      gap: var(--space-1);
      padding: var(--space-2) var(--space-3);
      border-radius: var(--radius-xs);
      font-size: 0.78rem;
      font-weight: 600;
      cursor: pointer;
      border: 1.5px solid rgba(168, 58, 44, 0.4);
      background: var(--clr-surface);
      color: var(--clr-error);
      transition: background 0.18s, border-color 0.18s;
      touch-action: manipulation;
    }
    .btn-delete svg { width: 0.8rem; height: 0.8rem; flex-shrink: 0; }
    .btn-delete:hover { background: var(--clr-error-bg); border-color: rgba(168, 58, 44, 0.6); }

    input[type="checkbox"] {
      width: 1rem;
      height: 1rem;
      cursor: pointer;
      accent-color: var(--clr-brand);
    }

    @media (max-width: 768px) {
      .dashboard-comments { padding: 1.5rem 1rem 2.5rem; }
      .header-row { flex-direction: column; align-items: stretch; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardCommentsComponent {
  private commentService = inject(CommentService);
  private destroyRef = inject(DestroyRef);
  comments = signal<Comment[]>([]);
  selectedIds = signal<number[]>([]);
  showDeleteModal = signal(false);
  deleteModalTitle = signal('');
  deleteModalMessage = signal('');
  private deleteAction: (() => void) | null = null;

  constructor() {
    this.loadComments();
  }

  loadComments(): void {
    this.commentService.getAdminComments().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(c => {
      this.comments.set(c);
      this.selectedIds.set([]);
    });
  }

  isSelected(id: number): boolean {
    return this.selectedIds().includes(id);
  }

  allSelected(): boolean {
    const c = this.comments();
    return c.length > 0 && this.selectedIds().length === c.length;
  }

  someSelected(): boolean {
    const len = this.selectedIds().length;
    return len > 0 && len < this.comments().length;
  }

  toggleSelect(id: number): void {
    const ids = this.selectedIds();
    if (ids.includes(id)) {
      this.selectedIds.set(ids.filter(i => i !== id));
    } else {
      this.selectedIds.set([...ids, id]);
    }
  }

  toggleAll(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedIds.set(checked ? this.comments().map(c => c.id) : []);
  }

  confirmSingleDelete(comment: Comment): void {
    this.deleteModalTitle.set('Изтриване на коментар');
    this.deleteModalMessage.set('Сигурни ли сте, че искате да изтриете този коментар?');
    this.deleteAction = () => {
      this.commentService.delete(comment.id).subscribe(() => this.loadComments());
    };
    this.showDeleteModal.set(true);
  }

  confirmBulkDelete(): void {
    const count = this.selectedIds().length;
    this.deleteModalTitle.set('Изтриване на коментари');
    this.deleteModalMessage.set(`Сигурни ли сте, че искате да изтриете ${count} коментар${count === 1 ? '' : 'а'}?`);
    this.deleteAction = () => {
      this.commentService.bulkDelete(this.selectedIds()).subscribe(() => this.loadComments());
    };
    this.showDeleteModal.set(true);
  }

  executeDelete(): void {
    this.showDeleteModal.set(false);
    this.deleteAction?.();
    this.deleteAction = null;
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('bg-BG', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }
}
