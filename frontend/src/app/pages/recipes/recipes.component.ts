import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RecipeService } from '../../services/recipe.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { Recipe, Category } from '../../models/models';
import { SeoService } from '../../services/seo.service';
import { PerfService } from '../../services/perf.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeCardComponent, FormsModule],
  template: `
    <div class="page">
      <div class="page-inner">

        <header class="page-header">
          <span class="page-eyebrow">Готварски блог</span>
          <h1>Рецепти</h1>
          <p>Открий традиционни български рецепти за всеки повод.</p>
        </header>

        <div class="recipes-layout">

          <!-- ── Sidebar ─────────────────────────────────── -->
          <aside class="sidebar">

            <form class="search-wrap" (submit)="search($event)">
              <span class="search-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </span>
              <input type="text" [ngModel]="q()" (ngModelChange)="q.set($event)" name="q"
                     placeholder="Търси рецепти..." aria-label="Търси рецепти"
                     class="search-input" (input)="onSearchInput()" />
              @if (q()) {
                <button type="button" class="search-clear" (click)="clearSearch()" aria-label="Изчисти">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              }
            </form>

            <div class="filters-row">

              @if (categories().length > 0) {
                <div class="filter-group">
                  <span class="filter-label">Категории</span>
                  <div class="filter-list" role="group" aria-label="Категории">
                    <button class="filter-btn" [class.active]="!category()"
                            [attr.aria-pressed]="!category()" (click)="selectCategory('')">Всички</button>
                    @for (cat of categories(); track cat.id) {
                      <button class="filter-btn" [class.active]="category() === cat.slug"
                              [attr.aria-pressed]="category() === cat.slug"
                              (click)="selectCategory(cat.slug)">{{ cat.name }}</button>
                    }
                  </div>
                </div>
              }

              <div class="filter-group">
                <span class="filter-label">Трудност</span>
                <div class="filter-list" role="group" aria-label="Трудност">
                  <button class="filter-btn" [class.active]="!difficulty()"
                          [attr.aria-pressed]="!difficulty()" (click)="selectDifficulty('')">Всяка трудност</button>
                  <button class="filter-btn filter-easy" [class.active]="difficulty() === 'Лесно'"
                          [attr.aria-pressed]="difficulty() === 'Лесно'" (click)="selectDifficulty('Лесно')">Лесно</button>
                  <button class="filter-btn filter-medium" [class.active]="difficulty() === 'Средно'"
                          [attr.aria-pressed]="difficulty() === 'Средно'" (click)="selectDifficulty('Средно')">Средно</button>
                  <button class="filter-btn filter-hard" [class.active]="difficulty() === 'За напреднали'"
                          [attr.aria-pressed]="difficulty() === 'За напреднали'" (click)="selectDifficulty('За напреднали')">За напреднали</button>
                </div>
              </div>

              <div class="filter-group">
                <span class="filter-label">Сортиране</span>
                <div class="filter-list" role="group" aria-label="Сортиране">
                  <button class="filter-btn" [class.active]="sort() === 'newest'"
                          [attr.aria-pressed]="sort() === 'newest'" (click)="selectSort('newest')">Най-нови</button>
                  <button class="filter-btn" [class.active]="sort() === 'fastest'"
                          [attr.aria-pressed]="sort() === 'fastest'" (click)="selectSort('fastest')">Най-бързи</button>
                  <button class="filter-btn" [class.active]="sort() === 'easiest'"
                          [attr.aria-pressed]="sort() === 'easiest'" (click)="selectSort('easiest')">Най-лесни</button>
                </div>
              </div>

            </div>

            @if (category() || difficulty() || (sort() && sort() !== 'newest') || q()) {
              <div class="filter-group filter-group-clear">
                <button class="clear-all-btn" (click)="clearAll()">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  Изчисти всички филтри
                </button>
              </div>
            }

          </aside>

          <!-- ── Main content ─────────────────────────────── -->
          <div class="recipes-main">

            @if (category() || difficulty() || (sort() && sort() !== 'newest') || q()) {
              <div class="active-bar" aria-label="Активни филтри">
                @if (q()) {
                  <button class="a-chip" (click)="clearSearch()" aria-label="Премахни търсенето">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    "{{ q() }}"
                    <svg class="chip-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>
                }
                @if (category()) {
                  <button class="a-chip" (click)="selectCategory('')" aria-label="Премахни категория">
                    {{ getCategoryName(category()) }}
                    <svg class="chip-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>
                }
                @if (difficulty()) {
                  <button class="a-chip" (click)="selectDifficulty('')" aria-label="Премахни трудност">
                    {{ difficulty() }}
                    <svg class="chip-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>
                }
                @if (sort() && sort() !== 'newest') {
                  <button class="a-chip" (click)="selectSort('newest')" aria-label="Премахни сортиране">
                    {{ sort() === 'fastest' ? 'Най-бързи' : 'Най-лесни' }}
                    <svg class="chip-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>
                }
              </div>
            }

            @if (loading()) {
              <div class="recipe-grid">
                @for (s of skeletons; track s) {
                  <div class="skeleton-card">
                    <div class="sk-img"></div>
                    <div class="sk-body">
                      <div class="sk-line sk-short"></div>
                      <div class="sk-line sk-long"></div>
                      <div class="sk-line sk-medium"></div>
                      <div class="sk-meta">
                        <div class="sk-line sk-sm"></div>
                        <div class="sk-line sk-sm"></div>
                        <div class="sk-line sk-sm"></div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            } @else {
              <div class="recipe-grid">
                @for (recipe of recipes(); track recipe.id; let i = $index) {
                  <app-recipe-card [recipe]="recipe" [priority]="i === 0" [index]="i" />
                } @empty {
                  <div class="no-results">
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="28" cy="28" r="18"/><line x1="41" y1="41" x2="56" y2="56"/><line x1="20" y1="28" x2="36" y2="28"/></svg>
                    <p>Няма намерени рецепти.</p>
                    <span>Опитай с друга дума или смени филтрите.</span>
                  </div>
                }
              </div>
            }

            @if (lastPage() > 1) {
              <div class="pagination">
                <button class="page-btn" [disabled]="currentPage() === 1"
                        (click)="goToPage(currentPage() - 1)" aria-label="Предишна страница">‹</button>
                <span class="page-counter">{{ currentPage() }} / {{ lastPage() }}</span>
                @for (p of pageNumbers(); track $index) {
                  @if (p === null) {
                    <span class="page-ellipsis" aria-hidden="true">…</span>
                  } @else {
                    <button class="page-btn" [class.active]="p === currentPage()"
                            [attr.aria-current]="p === currentPage() ? 'page' : null"
                            (click)="goToPage(p)">{{ p }}</button>
                  }
                }
                <button class="page-btn" [disabled]="currentPage() === lastPage()"
                        (click)="goToPage(currentPage() + 1)" aria-label="Следваща страница">›</button>
              </div>
            }

          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* ── Page ─────────────────────────────────────── */
    .page {
      padding: var(--space-9) clamp(var(--space-4), 4vw, var(--space-6)) var(--space-10);
      background-color: var(--clr-bg);
      background-image: url('/backgrounds/cooking-pattern.svg');
      background-size: 500px;
      background-repeat: repeat;
      min-height: 100dvh;
    }
    .page-inner { max-width: 1280px; margin: 0 auto; }

    /* ── Header ──────────────────────────────────── */
    .page-header { margin-bottom: var(--space-8); }
    .page-eyebrow {
      display: inline-flex;
      align-items: center;
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--clr-green-text);
      background: var(--clr-green-bg);
      padding: var(--space-1) var(--space-4);
      border-radius: var(--radius-pill);
      margin-bottom: var(--space-4);
    }
    .page-header h1 {
      font-family: var(--font-display);
      font-size: clamp(2rem, 4vw, 3rem);
      color: var(--clr-text);
      margin: 0 0 var(--space-2);
      letter-spacing: -0.02em;
    }
    .page-header p {
      color: var(--clr-text-muted);
      font-size: 1rem;
      font-weight: 300;
      margin: 0;
      max-width: 55ch;
    }

    /* ── Two-column layout ───────────────────────── */
    .recipes-layout {
      display: grid;
      grid-template-columns: 252px 1fr;
      gap: clamp(1.5rem, 2.5vw, 2.5rem);
      align-items: start;
    }

    /* ── Sidebar ─────────────────────────────────── */
    .sidebar {
      position: sticky;
      top: 5.5rem;
      max-height: calc(100dvh - 7rem);
      overflow-y: auto;
      scrollbar-width: none;
      display: flex;
      flex-direction: column;
      background: var(--clr-surface);
      border: 1px solid var(--clr-border-faint);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
      padding: var(--space-5) var(--space-3);
    }
    .sidebar::-webkit-scrollbar { display: none; }

    /* Search */
    .search-wrap {
      position: relative;
      margin-bottom: var(--space-5);
    }
    .search-ico {
      position: absolute;
      left: var(--space-3);
      top: 50%;
      transform: translateY(-50%);
      color: var(--clr-text-faint);
      display: flex;
      pointer-events: none;
    }
    .search-ico svg { width: 0.88rem; height: 0.88rem; }
    .search-input {
      width: 100%;
      box-sizing: border-box;
      padding: var(--space-3) var(--space-7) var(--space-3) 2.35rem;
      border-radius: var(--radius-md);
      border: 1.5px solid var(--clr-border);
      background: var(--clr-bg);
      font-size: 0.875rem;
      color: var(--clr-text);
      font-family: var(--font-body);
      outline: none;
      transition: border-color 0.18s;
    }
    .search-input:focus { border-color: var(--clr-brand); }
    .search-input::placeholder { color: var(--clr-text-faint); }
    .search-clear {
      position: absolute;
      right: var(--space-2);
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      color: var(--clr-text-muted);
      padding: var(--space-1);
      display: flex;
      border-radius: 50%;
      transition: color 0.14s;
      touch-action: manipulation;
    }
    .search-clear svg { width: 0.82rem; height: 0.82rem; }
    .search-clear:hover { color: var(--clr-text); }

    /* filters-row: transparent on desktop so groups flow directly in sidebar flex */
    .filters-row { display: contents; }

    /* Filter groups */
    .filter-group {
      display: flex;
      flex-direction: column;
      gap: 1px;
      padding-top: var(--space-4);
      margin-top: var(--space-1);
    }
    .filter-group + .filter-group {
      border-top: 1px solid var(--clr-border-faint);
    }
    .filter-label {
      font-size: 0.62rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: var(--clr-text-faint);
      padding: 0 var(--space-2) var(--space-2);
    }
    .filter-list { display: flex; flex-direction: column; gap: 1px; }

    .filter-btn {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      width: 100%;
      padding: 0.42rem var(--space-3);
      border-radius: var(--radius-sm);
      border: none;
      background: transparent;
      color: var(--clr-text-muted);
      font-size: 0.875rem;
      font-weight: 400;
      font-family: var(--font-body);
      text-align: left;
      cursor: pointer;
      transition: background 0.14s, color 0.14s;
      touch-action: manipulation;
    }
    .filter-btn::before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      border: 1.5px solid var(--clr-border-strong);
      flex-shrink: 0;
      transition: background 0.14s, border-color 0.14s;
    }
    .filter-btn:hover { background: var(--clr-surface-alt); color: var(--clr-text); }
    .filter-btn:focus-visible { outline: 2px solid var(--clr-focus); outline-offset: 1px; }

    .filter-btn.active {
      color: var(--clr-text);
      font-weight: 600;
      background: oklch(97.5% 0.022 52);
    }
    .filter-btn.active::before { background: var(--clr-brand); border-color: var(--clr-brand); }

    .filter-easy.active   { background: var(--clr-green-bg); color: var(--clr-green-text); }
    .filter-easy.active::before   { background: var(--clr-green); border-color: var(--clr-green); }
    .filter-medium.active { background: var(--clr-amber-bg); color: var(--clr-amber-text); }
    .filter-medium.active::before { background: var(--clr-amber); border-color: var(--clr-amber); }
    .filter-hard.active   { background: var(--clr-rust-bg);  color: var(--clr-rust-text); }
    .filter-hard.active::before   { background: oklch(62% 0.16 22); border-color: oklch(62% 0.16 22); }

    /* Clear all */
    .filter-group-clear { margin-top: var(--space-2); }
    .clear-all-btn {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      background: none;
      border: 1.5px solid var(--clr-border);
      border-radius: var(--radius-md);
      padding: var(--space-2) var(--space-3);
      font-size: 0.8rem;
      font-weight: 600;
      font-family: var(--font-body);
      color: var(--clr-text-muted);
      cursor: pointer;
      width: 100%;
      transition: border-color 0.15s, color 0.15s;
      touch-action: manipulation;
    }
    .clear-all-btn svg { width: 0.78rem; height: 0.78rem; flex-shrink: 0; }
    .clear-all-btn:hover { color: var(--clr-text); border-color: var(--clr-text-muted); }

    /* ── Main ────────────────────────────────────── */
    .recipes-main { min-width: 0; }

    /* Active chips */
    .active-bar {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2);
      margin-bottom: var(--space-5);
    }
    .a-chip {
      display: inline-flex;
      align-items: center;
      gap: var(--space-1);
      padding: var(--space-1) var(--space-3);
      background: var(--clr-text);
      color: var(--clr-bg);
      border: none;
      border-radius: var(--radius-pill);
      font-size: 0.78rem;
      font-weight: 600;
      font-family: var(--font-body);
      cursor: pointer;
      transition: background 0.15s, transform 0.15s;
      touch-action: manipulation;
    }
    .a-chip > svg:first-child { width: 0.7rem; height: 0.7rem; opacity: 0.65; }
    .chip-x { width: 0.65rem; height: 0.65rem; opacity: 0.6; flex-shrink: 0; }
    .a-chip:hover { background: var(--clr-text-muted); }
    .a-chip:active { transform: scale(0.97); }

    /* ── Recipe grid ─────────────────────────────── */
    .recipe-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-5);
    }
    .recipe-grid > app-recipe-card { min-width: 0; }

    /* Stagger animation */
    .recipe-grid > app-recipe-card { animation-delay: calc(var(--card-i, 0) * 45ms) !important; }
    .recipe-grid > app-recipe-card:nth-child(1)  { --card-i: 0; }
    .recipe-grid > app-recipe-card:nth-child(2)  { --card-i: 1; }
    .recipe-grid > app-recipe-card:nth-child(3)  { --card-i: 2; }
    .recipe-grid > app-recipe-card:nth-child(4)  { --card-i: 3; }
    .recipe-grid > app-recipe-card:nth-child(5)  { --card-i: 4; }
    .recipe-grid > app-recipe-card:nth-child(6)  { --card-i: 5; }
    .recipe-grid > app-recipe-card:nth-child(7)  { --card-i: 6; }
    .recipe-grid > app-recipe-card:nth-child(8)  { --card-i: 7; }
    .recipe-grid > app-recipe-card:nth-child(9)  { --card-i: 8; }
    .recipe-grid > app-recipe-card:nth-child(n+10) { --card-i: 9; }

    /* ── No results ──────────────────────────────── */
    .no-results {
      grid-column: 1 / -1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-10) var(--space-7);
      color: var(--clr-text-muted);
      text-align: center;
    }
    .no-results svg { width: 3rem; height: 3rem; color: var(--clr-text-faint); margin-bottom: var(--space-2); }
    .no-results p { font-size: 1.05rem; font-weight: 600; color: var(--clr-text); margin: 0; }
    .no-results span { font-size: 0.875rem; color: var(--clr-text-faint); }

    /* ── Skeleton ────────────────────────────────── */
    .skeleton-card { border-radius: var(--radius-lg); overflow: hidden; background: var(--clr-surface); box-shadow: var(--shadow-sm); }
    .sk-img { aspect-ratio: 4/3; background: var(--clr-skeleton); position: relative; overflow: hidden; }
    .sk-img::after {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(90deg, transparent 0%, var(--clr-skeleton-shine) 50%, transparent 100%);
      transform: translateX(-100%); animation: shimmer 1.5s linear infinite;
    }
    .sk-body { padding: var(--space-5); display: flex; flex-direction: column; gap: var(--space-2); }
    .sk-meta { display: flex; gap: var(--space-3); margin-top: var(--space-1); }
    .sk-line {
      height: 0.8rem; border-radius: var(--radius-pill); background: var(--clr-skeleton);
      position: relative; overflow: hidden;
    }
    .sk-line::after {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(90deg, transparent 0%, var(--clr-skeleton-shine) 50%, transparent 100%);
      transform: translateX(-100%); animation: shimmer 1.5s linear infinite;
    }
    .sk-short { width: 30%; } .sk-long { width: 75%; } .sk-medium { width: 50%; } .sk-sm { width: 22%; }
    @keyframes shimmer { from { transform: translateX(-100%); } to { transform: translateX(100%); } }

    /* ── Pagination ──────────────────────────────── */
    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: var(--space-2);
      margin-top: var(--space-9);
    }
    .page-btn {
      min-width: 2.75rem; height: 2.75rem;
      padding: 0 var(--space-3);
      border-radius: var(--radius-sm);
      border: 1.5px solid var(--clr-border);
      background: var(--clr-surface);
      cursor: pointer;
      font-weight: 600; font-size: 0.9rem;
      transition: background 0.18s, border-color 0.18s, color 0.18s;
      color: var(--clr-text);
      touch-action: manipulation;
    }
    .page-btn:disabled { opacity: 0.35; cursor: not-allowed; }
    .page-btn.active { background: var(--clr-text); color: var(--clr-bg); border-color: var(--clr-text); }
    .page-btn:hover:not(.active):not(:disabled) { background: var(--clr-surface-hover); border-color: var(--clr-border-strong); }
    .page-ellipsis { display: flex; align-items: center; justify-content: center; min-width: 2rem; height: 2.75rem; font-size: 0.9rem; color: var(--clr-text-faint); }
    .page-counter { display: none; }

    /* ── Wide (4-col grid) ───────────────────────── */
    @media (min-width: 1440px) {
      .recipes-layout { grid-template-columns: 272px 1fr; gap: 3rem; }
      .recipe-grid { grid-template-columns: repeat(4, 1fr); }
    }

    /* ── Tablet: sidebar → stacked pill rows ────────── */
    @media (max-width: 960px) {
      .recipes-layout { grid-template-columns: 1fr; gap: var(--space-4); }

      .sidebar {
        position: static;
        max-height: none;
        overflow: visible;
        background: transparent;
        border: none;
        box-shadow: none;
        padding: 0;
        flex-direction: column;
        gap: var(--space-3);
      }

      .filters-row {
        display: flex;
        flex-direction: column;
        gap: var(--space-3);
      }

      .search-wrap { margin-bottom: 0; }
      .search-input { background: var(--clr-surface); }

      .filter-group {
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        gap: var(--space-2);
        padding-top: 0;
        margin-top: 0;
      }
      .filter-group + .filter-group { border-top: none; }
      .filter-label { display: none; }
      .filter-list { flex-direction: row; flex-wrap: wrap; gap: var(--space-2); }

      .filter-btn {
        width: auto;
        padding: var(--space-2) var(--space-4);
        border-radius: var(--radius-pill);
        border: 1.5px solid var(--clr-border);
        min-height: 2.5rem;
        font-size: 0.85rem;
      }
      .filter-btn::before { display: none; }
      .filter-btn.active { background: var(--clr-brand); border-color: var(--clr-brand); color: var(--clr-surface); }
      .filter-easy.active   { background: var(--clr-green-bg); color: var(--clr-green-text); border-color: var(--clr-green); }
      .filter-medium.active { background: var(--clr-amber-bg); color: var(--clr-amber-text); border-color: var(--clr-amber); }
      .filter-hard.active   { background: var(--clr-rust-bg);  color: var(--clr-rust-text);  border-color: oklch(72% 0.14 22); }

      .filter-group-clear { margin-top: 0; border-top: none; padding-top: 0; }
      .clear-all-btn { width: auto; padding: var(--space-2) var(--space-4); border-radius: var(--radius-pill); }

      .recipe-grid { grid-template-columns: repeat(2, 1fr); }
    }

    /* ── Mobile ─────────────────────────────────────── */
    @media (max-width: 640px) {
      /* Tighter page padding */
      .page {
        padding-top: clamp(1.5rem, 6vw, 2.5rem);
        padding-bottom: clamp(3rem, 8vw, 4rem);
      }
      .page-header { margin-bottom: var(--space-5); }
      .search-input { font-size: 1rem; }

      /* Each filter group is its own independent horizontal scroll row.
         Keeps categories / difficulty / sort discoverable without one
         giant strip where later groups are invisible off-screen. */
      .filters-row { flex-direction: column; overflow: visible; gap: var(--space-2); }
      .filter-group { overflow-x: auto; scrollbar-width: none; flex-wrap: nowrap; width: 100%; flex-shrink: 1; }
      .filter-group::-webkit-scrollbar { display: none; }
      .filter-list { flex-wrap: nowrap; min-width: max-content; }
      .filter-btn { flex-shrink: 0; min-height: 2.75rem; }

      /* 2-column card grid — shows more recipes without making each card too tall */
      .recipe-grid { grid-template-columns: repeat(2, 1fr); gap: var(--space-3); }
    }

    @media (max-width: 380px) {
      /* Very narrow phones: single column is easier to read */
      .recipe-grid { grid-template-columns: 1fr; }
    }

    @media (max-width: 420px) {
      .page-btn:not([aria-label]) { display: none; }
      .page-ellipsis { display: none; }
      .page-counter {
        display: flex; align-items: center;
        font-size: 0.9rem; font-weight: 600;
        color: var(--clr-text);
        padding: 0 var(--space-3);
        font-variant-numeric: tabular-nums;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .sk-img::after, .sk-line::after { animation: none; }
      .a-chip { transition: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesComponent {
  private recipeService = inject(RecipeService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private seo = inject(SeoService);
  private perf = inject(PerfService);
  private destroyRef = inject(DestroyRef);

  recipes = signal<Recipe[]>([]);
  categories = signal<Category[]>([]);
  q = signal('');
  category = signal('');
  difficulty = signal('');
  sort = signal('newest');
  currentPage = signal(1);
  lastPage = signal(1);
  loading = signal(true);
  readonly skeletons = [0, 1, 2, 3, 4, 5];

  private debounceTimer?: ReturnType<typeof setTimeout>;
  private lastSearchQ = '';

  pageNumbers = computed<(number | null)[]>(() => {
    const total = this.lastPage();
    const cur = this.currentPage();
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const pages: (number | null)[] = [1];
    if (cur > 3) pages.push(null);
    const start = Math.max(2, cur - 1);
    const end = Math.min(total - 1, cur + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (cur < total - 2) pages.push(null);
    pages.push(total);
    return pages;
  });

  constructor() {
    this.seo.set({
      title: 'Рецепти',
      description: 'Разгледай всички традиционни български рецепти. Филтрирай по категория, трудност и време за приготвяне.',
    });

    this.recipeService.getCategories()
      .pipe(takeUntilDestroyed())
      .subscribe(cats => this.categories.set(cats));

    this.route.queryParams
      .pipe(takeUntilDestroyed())
      .subscribe(params => {
        this.q.set(params['q'] || '');
        this.category.set(params['category'] || '');
        this.difficulty.set(params['difficulty'] || '');
        this.sort.set(params['sort'] || 'newest');
        this.currentPage.set(+(params['page'] || 1));
        this.loadRecipes();
      });

    this.destroyRef.onDestroy(() => clearTimeout(this.debounceTimer));
  }

  onSearchInput(): void {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      if (this.q() === this.lastSearchQ) return;
      this.lastSearchQ = this.q();
      this.router.navigate(['/recipes'], {
        queryParams: { q: this.q() || undefined, category: this.category() || undefined, difficulty: this.difficulty() || undefined, sort: this.sort() !== 'newest' ? this.sort() : undefined, page: undefined },
      });
    }, 350);
  }

  loadRecipes(): void {
    this.loading.set(true);
    this.perf.mark('recipes_fetch_start');
    this.recipeService.getRecipes({
      q: this.q(), category: this.category(), difficulty: this.difficulty(),
      sort: this.sort(), page: this.currentPage(), per_page: 6,
    }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(res => {
      this.recipes.set(res.data);
      this.currentPage.set(res.current_page);
      this.lastPage.set(res.last_page);
      this.loading.set(false);
      this.perf.mark('recipes_ready');
      this.perf.measure('recipes_list_load', 'recipes_fetch_start', 'recipes_ready');
    });
  }

  selectCategory(slug: string): void {
    this.router.navigate(['/recipes'], { queryParams: { q: this.q() || undefined, category: slug || undefined, difficulty: this.difficulty() || undefined, sort: this.sort() !== 'newest' ? this.sort() : undefined, page: undefined } });
  }

  selectDifficulty(d: string): void {
    this.router.navigate(['/recipes'], { queryParams: { q: this.q() || undefined, category: this.category() || undefined, difficulty: d || undefined, sort: this.sort() !== 'newest' ? this.sort() : undefined, page: undefined } });
  }

  selectSort(s: string): void {
    this.router.navigate(['/recipes'], { queryParams: { q: this.q() || undefined, category: this.category() || undefined, difficulty: this.difficulty() || undefined, sort: s !== 'newest' ? s : undefined, page: undefined } });
  }

  search(e: Event): void {
    e.preventDefault();
    this.router.navigate(['/recipes'], { queryParams: { q: this.q() || undefined, category: this.category() || undefined, difficulty: this.difficulty() || undefined, sort: this.sort() !== 'newest' ? this.sort() : undefined, page: undefined } });
  }

  getCategoryName(slug: string): string {
    return this.categories().find(c => c.slug === slug)?.name || slug;
  }

  clearSearch(): void {
    this.q.set('');
    this.router.navigate(['/recipes'], { queryParams: { category: this.category() || undefined, difficulty: this.difficulty() || undefined, sort: this.sort() !== 'newest' ? this.sort() : undefined } });
  }

  clearAll(): void {
    this.q.set('');
    this.router.navigate(['/recipes']);
  }

  goToPage(page: number): void {
    this.router.navigate(['/recipes'], { queryParams: { ...this.route.snapshot.queryParams, page } });
  }
}
