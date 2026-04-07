import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Comment } from '../../models/models';
import { ConfirmModalComponent } from '../../components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-dashboard-comments',
  standalone: true,
  imports: [ConfirmModalComponent, RouterLink],
  template: `
    <div class="dashboard-comments">
      <div class="header-row">
        <h1>Коментари</h1>
        @if (selectedIds().length > 0) {
          <button class="btn-danger" (click)="confirmBulkDelete()">
            Изтрий избраните ({{ selectedIds().length }})
          </button>
        }
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" (change)="toggleAll($event)" [checked]="allSelected()" /></th>
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
              <tr>
                <td><input type="checkbox" [checked]="isSelected(comment.id)" (change)="toggleSelect(comment.id)" /></td>
                <td class="author">{{ comment.author?.name || 'Анонимен' }}</td>
                <td class="recipe-cell">
                  @if (comment.recipe) {
                    <a [routerLink]="['/recipes', comment.recipe.slug]" class="recipe-link">{{ comment.recipe.title }}</a>
                  } @else {
                    —
                  }
                </td>
                <td class="content-cell">{{ comment.body }}</td>
                <td>{{ comment.rating ? '★' + comment.rating : '—' }}</td>
                <td class="date">{{ formatDate(comment.created_at) }}</td>
                <td>
                  <button class="btn-small btn-danger" (click)="confirmSingleDelete(comment)">Изтрий</button>
                </td>
              </tr>
            }
            @empty {
              <tr><td colspan="7" class="empty">Няма коментари.</td></tr>
            }
          </tbody>
        </table>
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
      padding: 2rem 1.5rem;
    }
    .header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
    }
    h1 { font-family: 'Georgia', serif; font-size: 1.75rem; color: #1c1917; margin: 0; }
    .btn-danger {
      padding: 0.6rem 1.25rem;
      background: #dc2626;
      color: #fff;
      border: none;
      border-radius: 0.75rem;
      font-weight: 600;
      cursor: pointer;
    }
    .btn-danger:hover { background: #b91c1c; }
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
    .author { font-weight: 700; white-space: nowrap; }
    .recipe-cell { max-width: 160px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .recipe-link { color: #78350f; text-decoration: none; font-weight: 600; font-size: 0.85rem; }
    .recipe-link:hover { text-decoration: underline; }
    .content-cell {
      max-width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #44403c;
    }
    .date { white-space: nowrap; color: #57534e; font-size: 0.85rem; font-weight: 500; }
    .btn-small {
      padding: 0.35rem 0.75rem;
      border-radius: 0.5rem;
      font-size: 0.8rem;
      font-weight: 700;
      cursor: pointer;
      border: 1.5px solid #fca5a5;
      background: #fff;
      color: #b91c1c;
    }
    .btn-small:hover { background: #fef2f2; color: #991b1b; }
    .empty { text-align: center; color: #57534e; padding: 2rem; font-weight: 500; }
    input[type="checkbox"] { width: 16px; height: 16px; cursor: pointer; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardCommentsComponent implements OnInit {
  private recipeService = inject(RecipeService);
  comments = signal<Comment[]>([]);
  selectedIds = signal<number[]>([]);
  showDeleteModal = signal(false);
  deleteModalTitle = signal('');
  deleteModalMessage = signal('');
  private deleteAction: (() => void) | null = null;

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(): void {
    this.recipeService.getAdminComments().subscribe(c => {
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
    if (checked) {
      this.selectedIds.set(this.comments().map(c => c.id));
    } else {
      this.selectedIds.set([]);
    }
  }

  confirmSingleDelete(comment: Comment): void {
    this.deleteModalTitle.set('Изтриване на коментар');
    this.deleteModalMessage.set('Сигурни ли сте, че искате да изтриете този коментар?');
    this.deleteAction = () => {
      this.recipeService.deleteComment(comment.id).subscribe(() => this.loadComments());
    };
    this.showDeleteModal.set(true);
  }

  confirmBulkDelete(): void {
    this.deleteModalTitle.set('Изтриване на коментари');
    this.deleteModalMessage.set(`Сигурни ли сте, че искате да изтриете ${this.selectedIds().length} коментар(а)?`);
    this.deleteAction = () => {
      this.recipeService.bulkDeleteComments(this.selectedIds()).subscribe(() => this.loadComments());
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
