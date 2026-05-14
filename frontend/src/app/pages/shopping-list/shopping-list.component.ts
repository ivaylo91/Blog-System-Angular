import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faTrashCan, faCartShopping, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ShoppingListService, ShoppingItem } from '../../services/shopping-list.service';

interface RecipeGroup {
  slug: string;
  title: string;
  items: ShoppingItem[];
}

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  template: `
    <div class="sl-page">

      <!-- ── Header ────────────────────────────────────────── -->
      <div class="sl-masthead">
        <a routerLink="/recipes" class="back-link">
          <fa-icon [icon]="faArrowLeft" aria-hidden="true"></fa-icon>
          Рецепти
        </a>
        <div class="sl-title-row">
          <h1 class="sl-title">
            <fa-icon [icon]="faCartShopping" aria-hidden="true" class="title-icon"></fa-icon>
            Списък за пазаруване
          </h1>
          @if (groups().length > 0) {
            <button class="clear-all-btn" type="button" (click)="svc.clear()">
              <fa-icon [icon]="faTrashCan" aria-hidden="true"></fa-icon>
              Изчисти всичко
            </button>
          }
        </div>
        @if (groups().length > 0) {
          <p class="sl-summary">
            {{ svc.count() === 0 ? 'Всички продукти са взети!' : svc.count() + ' ' + (svc.count() === 1 ? 'продукт остава' : 'продукта остават') }}
          </p>
        }
      </div>

      <!-- ── Empty state ────────────────────────────────────── -->
      @if (groups().length === 0) {
        <div class="sl-empty">
          <div class="empty-icon" aria-hidden="true">
            <fa-icon [icon]="faCartShopping"></fa-icon>
          </div>
          <h2 class="empty-title">Списъкът е празен</h2>
          <p class="empty-body">Добави съставките от рецепта, за да ги виждаш тук при пазаруване.</p>
          <a routerLink="/recipes" class="empty-cta">Разгледай рецептите →</a>
        </div>
      }

      <!-- ── Recipe groups ──────────────────────────────────── -->
      @for (group of groups(); track group.slug) {
        <section class="recipe-group" [attr.aria-label]="group.title">
          <div class="group-header">
            <span class="group-title">{{ group.title }}</span>
            <button class="remove-recipe-btn" type="button"
                    (click)="svc.removeRecipe(group.slug)"
                    [attr.aria-label]="'Премахни ' + group.title + ' от списъка'">
              <fa-icon [icon]="faTrashCan" aria-hidden="true"></fa-icon>
              Премахни
            </button>
          </div>

          <ul class="ingredient-list" role="list">
            @for (item of group.items; track item.id) {
              <li class="ingredient-item" [class.checked]="item.checked">
                <button class="check-btn" type="button"
                        (click)="svc.toggle(item.id)"
                        [attr.aria-label]="(item.checked ? 'Отмаркирай' : 'Маркирай') + ': ' + item.amount + ' ' + item.name"
                        [attr.aria-pressed]="item.checked"
                        role="checkbox"
                        [attr.aria-checked]="item.checked">
                  @if (item.checked) {
                    <fa-icon [icon]="faCheck" aria-hidden="true"></fa-icon>
                  }
                </button>
                <span class="item-amount">{{ item.amount }}</span>
                <span class="item-name">{{ item.name }}</span>
              </li>
            }
          </ul>
        </section>
      }

    </div>
  `,
  styles: [`
    .sl-page {
      min-height: 100dvh;
      background: var(--paper);
      max-width: 680px;
      margin: 0 auto;
      padding: clamp(1.5rem, 5vw, 3rem) clamp(1rem, 4vw, 2rem) 4rem;
    }

    /* ── Masthead ─────────────────────────────────────── */
    .sl-masthead { margin-bottom: 2.5rem; }

    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--clr-text-muted);
      text-decoration: none;
      margin-bottom: 1.25rem;
      transition: color 0.15s;
    }
    .back-link:hover { color: var(--clr-brand); }

    .sl-title-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .sl-title {
      font-family: var(--font-display);
      font-size: clamp(1.6rem, 4vw, 2.25rem);
      font-style: italic;
      color: var(--clr-text);
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }
    .title-icon { color: var(--terracotta); font-size: 0.85em; }

    .sl-summary {
      font-family: var(--font-hand);
      font-size: 1.05rem;
      color: var(--clr-text-muted);
      margin: 0.5rem 0 0;
    }

    .clear-all-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.45rem 0.85rem;
      border: 1px solid var(--clr-border);
      border-radius: var(--radius-pill);
      background: none;
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--clr-text-muted);
      cursor: pointer;
      transition: background 0.15s, border-color 0.15s, color 0.15s;
    }
    .clear-all-btn:hover { background: var(--clr-error-bg); border-color: var(--clr-error); color: var(--clr-error); }

    /* ── Empty state ──────────────────────────────────── */
    .sl-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 4rem 1rem 3rem;
      gap: 1rem;
    }

    .empty-icon {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      background: var(--paper-2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: var(--clr-text-muted);
      opacity: 0.6;
    }

    .empty-title {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1.5rem;
      color: var(--clr-text);
      margin: 0;
    }

    .empty-body {
      font-size: 0.9rem;
      color: var(--clr-text-muted);
      max-width: 34ch;
      line-height: 1.5;
      margin: 0;
    }

    .empty-cta {
      display: inline-block;
      padding: 0.65rem 1.4rem;
      border-radius: var(--radius-pill);
      background: var(--terracotta);
      color: #fff;
      font-size: 0.88rem;
      font-weight: 700;
      text-decoration: none;
      transition: opacity 0.15s, transform 0.15s;
      margin-top: 0.5rem;
    }
    .empty-cta:hover { opacity: 0.88; transform: translateY(-1px); }

    /* ── Recipe group ─────────────────────────────────── */
    .recipe-group {
      margin-bottom: 2rem;
      background: var(--clr-surface);
      border-radius: var(--radius-xl);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
    }

    .group-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 1rem 0.75rem 1.25rem;
      background: var(--paper-2);
      border-bottom: 1px solid var(--clr-border-faint);
    }

    .group-title {
      font-family: var(--font-body);
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--terracotta);
    }

    .remove-recipe-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      padding: 0.3rem 0.6rem;
      border: none;
      background: none;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--clr-text-muted);
      cursor: pointer;
      border-radius: var(--radius-xs);
      transition: background 0.15s, color 0.15s;
    }
    .remove-recipe-btn:hover { background: var(--clr-error-bg); color: var(--clr-error); }

    /* ── Ingredient list ──────────────────────────────── */
    .ingredient-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .ingredient-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.7rem 1.25rem 0.7rem 1rem;
      border-bottom: 1px solid var(--clr-border-faint);
      transition: background 0.15s, opacity 0.25s;
    }
    .ingredient-item:last-child { border-bottom: none; }
    .ingredient-item.checked {
      opacity: 0.45;
    }
    .ingredient-item.checked .item-name {
      text-decoration: line-through;
      text-decoration-color: var(--clr-text-muted);
    }

    .check-btn {
      flex-shrink: 0;
      position: relative;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      border: 2px solid var(--clr-border);
      background: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--olive);
      font-size: 0.65rem;
      transition: border-color 0.15s, background 0.15s;
      touch-action: manipulation;
    }
    .check-btn::after {
      content: '';
      position: absolute;
      inset: -0.625rem;
    }
    .ingredient-item.checked .check-btn {
      background: var(--olive);
      border-color: var(--olive);
      color: #fff;
    }
    .check-btn:focus-visible { outline: 2px solid var(--mustard); outline-offset: 2px; }

    .item-amount {
      font-family: var(--font-body);
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--terracotta);
      min-width: 2.5rem;
      flex-shrink: 0;
    }

    .item-name {
      font-size: 0.9rem;
      color: var(--clr-text);
      line-height: 1.35;
    }

    @media (max-width: 480px) {
      .sl-title { font-size: 1.5rem; }
      .ingredient-item { padding: 0.7rem 1rem; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingListComponent {
  svc = inject(ShoppingListService);

  readonly faCheck = faCheck;
  readonly faTrashCan = faTrashCan;
  readonly faCartShopping = faCartShopping;
  readonly faArrowLeft = faArrowLeft;

  groups = computed<RecipeGroup[]>(() => {
    const map = new Map<string, RecipeGroup>();
    for (const item of this.svc.items()) {
      if (!map.has(item.recipeSlug)) {
        map.set(item.recipeSlug, { slug: item.recipeSlug, title: item.recipeTitle, items: [] });
      }
      map.get(item.recipeSlug)!.items.push(item);
    }
    return Array.from(map.values());
  });
}
