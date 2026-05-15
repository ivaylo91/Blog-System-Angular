import {
  ChangeDetectionStrategy, Component, ElementRef, EventEmitter,
  OnDestroy, OnInit, Output, inject, signal, viewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faXmark, faArrowRight, faClock } from '@fortawesome/free-solid-svg-icons';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/models';

@Component({
  selector: 'app-search-overlay',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
    <!-- Backdrop -->
    <div class="so-backdrop" (click)="close.emit()" aria-hidden="true"></div>

    <!-- Panel -->
    <div class="so-panel" role="dialog" aria-modal="true" aria-label="Търсене"
         (keydown.escape)="close.emit()">

      <!-- Search input -->
      <div class="so-input-row">
        <span class="so-ico" aria-hidden="true">
          <fa-icon [icon]="faMagnifyingGlass"></fa-icon>
        </span>
        <input #searchInput
               type="search"
               class="so-input"
               placeholder="Търси рецепта…"
               autocomplete="off"
               autocorrect="off"
               spellcheck="false"
               aria-label="Търси рецепта"
               [value]="query()"
               (input)="onInput($event)" />
        <button class="so-close" type="button" (click)="close.emit()" aria-label="Затвори търсенето">
          <fa-icon [icon]="faXmark"></fa-icon>
        </button>
      </div>

      <!-- Results -->
      <div class="so-body">

        @if (loading()) {
          <ul class="so-list" aria-label="Зарежда резултати">
            @for (s of skeletons; track s) {
              <li class="so-sk">
                <div class="sk-thumb"></div>
                <div class="sk-lines">
                  <div class="sk-line sk-short"></div>
                  <div class="sk-line sk-long"></div>
                </div>
              </li>
            }
          </ul>
        } @else if (hasSearched() && results().length === 0) {
          <div class="so-empty">
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"
                 stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="22" cy="22" r="14"/><line x1="31" y1="31" x2="42" y2="42"/>
              <line x1="16" y1="22" x2="28" y2="22"/>
            </svg>
            <p>Няма резултати за <strong>„{{ query() }}"</strong></p>
            <span>Опитай с друга ключова дума.</span>
          </div>
        } @else if (results().length > 0) {
          <ul class="so-list" role="listbox" aria-label="Намерени рецепти">
            @for (r of results(); track r.id) {
              <li role="option">
                <a [href]="'/recipes/' + r.slug" class="so-result" (click)="openRecipe(r.slug, $event)">
                  <div class="so-thumb">
                    @if (r.hero_image) {
                      <img [src]="r.hero_image" [alt]="r.title" loading="lazy" />
                    } @else {
                      <div class="so-thumb-ph"></div>
                    }
                  </div>
                  <div class="so-result-body">
                    @if (r.category?.name) {
                      <span class="so-cat">{{ r.category!.name }}</span>
                    }
                    <span class="so-title">{{ r.title }}</span>
                    @if (r.prep_minutes || r.cook_minutes) {
                      <span class="so-time">
                        <fa-icon [icon]="faClock" aria-hidden="true"></fa-icon>
                        {{ (r.prep_minutes || 0) + (r.cook_minutes || 0) }} мин.
                      </span>
                    }
                  </div>
                  <fa-icon [icon]="faArrowRight" class="so-arrow" aria-hidden="true"></fa-icon>
                </a>
              </li>
            }
          </ul>

          @if (query().trim()) {
            <button type="button" class="so-all-btn" (click)="goToAll()">
              Виж всички резултати за „{{ query() }}"
              <fa-icon [icon]="faArrowRight" aria-hidden="true"></fa-icon>
            </button>
          }
        } @else if (!query()) {
          <div class="so-hint">
            <span>Започни да пишеш за да потърсиш рецепта…</span>
          </div>
        }

      </div>
    </div>
  `,
  styles: [`
    /* ── Backdrop ───────────────────────────────── */
    .so-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(10, 15, 30, 0.55);
      z-index: calc(var(--z-modal) - 1);
      animation: so-fade-in 0.18s ease-out both;
    }

    /* ── Panel ──────────────────────────────────── */
    .so-panel {
      position: fixed;
      top: clamp(3.5rem, 8vw, 5rem);
      left: 50%;
      transform: translateX(-50%);
      width: min(680px, calc(100vw - 2rem));
      background: var(--paper);
      z-index: var(--z-modal);
      border-radius: var(--radius-xl);
      overflow: hidden;
      box-shadow: 0 24px 64px rgba(10, 15, 30, 0.28), 0 2px 8px rgba(10, 15, 30, 0.12);
      animation: so-slide-in 0.2s var(--ease-out-expo, cubic-bezier(0.16,1,0.3,1)) both;
    }

    @keyframes so-fade-in {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes so-slide-in {
      from { opacity: 0; transform: translateX(-50%) translateY(-12px); }
      to   { opacity: 1; transform: translateX(-50%) translateY(0); }
    }

    /* ── Input row ──────────────────────────────── */
    .so-input-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.85rem 1rem 0.85rem 1.25rem;
      border-bottom: 1px solid var(--clr-border-faint);
    }

    .so-ico {
      color: var(--clr-text-muted);
      font-size: 0.95rem;
      flex-shrink: 0;
    }

    .so-input {
      flex: 1;
      border: none;
      background: transparent;
      font-family: var(--font-body);
      font-size: 1.05rem;
      color: var(--clr-text);
      outline: none;
      min-width: 0;
    }
    .so-input::placeholder { color: var(--clr-text-faint); }
    .so-input::-webkit-search-cancel-button { display: none; }

    .so-close {
      flex-shrink: 0;
      width: 2rem;
      height: 2rem;
      border: none;
      background: var(--clr-surface);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--clr-text-muted);
      font-size: 0.85rem;
      cursor: pointer;
      transition: background 0.15s, color 0.15s;
    }
    .so-close:hover { background: var(--clr-surface-hover); color: var(--clr-text); }

    /* ── Body ───────────────────────────────────── */
    .so-body {
      max-height: min(480px, 70vh);
      max-height: min(480px, 70dvh);
      overflow-y: auto;
      overscroll-behavior: contain;
    }

    /* ── Results list ───────────────────────────── */
    .so-list {
      list-style: none;
      padding: 0.5rem 0;
      margin: 0;
    }

    .so-result {
      display: flex;
      align-items: center;
      gap: 0.875rem;
      padding: 0.625rem 1.25rem;
      text-decoration: none;
      color: inherit;
      transition: background 0.12s;
      touch-action: manipulation;
    }
    .so-result:hover { background: var(--clr-surface); }
    .so-result:focus-visible { outline: 2px solid var(--mustard); outline-offset: -2px; }

    .so-thumb {
      flex-shrink: 0;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: var(--radius-xl);
      overflow: hidden;
      background: var(--paper-2);
    }
    .so-thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .so-thumb-ph {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, var(--paper-2), var(--paper));
    }

    .so-result-body {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
    }
    .so-cat {
      font-family: var(--font-type);
      font-size: 0.57rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--terracotta);
    }
    .so-title {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 0.95rem;
      color: var(--clr-text);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .so-time {
      font-family: var(--font-type);
      font-size: 0.6rem;
      letter-spacing: 0.08em;
      color: var(--clr-text-muted);
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
    .so-time fa-icon { font-size: 0.6rem; }

    .so-arrow {
      flex-shrink: 0;
      font-size: 0.7rem;
      color: var(--clr-text-faint);
      opacity: 0;
      transform: translateX(-4px);
      transition: opacity 0.12s, transform 0.12s;
    }
    .so-result:hover .so-arrow { opacity: 1; transform: none; }

    /* ── "See all" button ───────────────────────── */
    .so-all-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      width: 100%;
      padding: 0.875rem 1.25rem;
      border: none;
      border-top: 1px solid var(--clr-border-faint);
      background: var(--paper-2);
      font-family: var(--font-type);
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--terracotta);
      cursor: pointer;
      text-align: left;
      transition: background 0.15s;
    }
    .so-all-btn:hover { background: var(--clr-surface-hover); }
    .so-all-btn fa-icon { font-size: 0.7rem; }

    /* ── Empty / hint states ────────────────────── */
    .so-empty, .so-hint {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 2.5rem 1.5rem;
      gap: 0.5rem;
      color: var(--clr-text-muted);
    }
    .so-empty svg { width: 2.5rem; height: 2.5rem; color: var(--clr-text-faint); margin-bottom: 0.25rem; }
    .so-empty p { font-size: 0.95rem; color: var(--clr-text); margin: 0; }
    .so-empty strong { color: var(--clr-text); }
    .so-empty span, .so-hint span { font-size: 0.82rem; color: var(--clr-text-muted); }

    /* ── Skeletons ──────────────────────────────── */
    .so-sk {
      display: flex;
      align-items: center;
      gap: 0.875rem;
      padding: 0.625rem 1.25rem;
    }
    .sk-thumb {
      flex-shrink: 0;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: var(--radius-xl);
      background: var(--paper-2);
      animation: so-pulse 1.4s ease-in-out infinite;
    }
    .sk-lines { flex: 1; display: flex; flex-direction: column; gap: 0.5rem; }
    .sk-line {
      height: 0.7rem;
      border-radius: 4px;
      background: var(--paper-2);
      animation: so-pulse 1.4s ease-in-out infinite;
    }
    .sk-short { width: 28%; height: 0.55rem; }
    .sk-long { width: 68%; }
    @keyframes so-pulse {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0.45; }
    }

    @media (max-width: 480px) {
      .so-panel {
        top: 3rem;
        width: calc(100vw - 1rem);
        max-height: calc(100vh - 4.5rem);
        max-height: calc(100dvh - 4.5rem);
        display: flex;
        flex-direction: column;
      }
      .so-body {
        flex: 1;
        min-height: 0;
        max-height: none;
      }
      .so-result { padding: 0.625rem 1rem; }
      .so-input-row { padding: 0.75rem 0.875rem; }
    }

    @media (prefers-reduced-motion: reduce) {
      .so-backdrop, .so-panel { animation: none; }
      .so-result { transition: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchOverlayComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter<void>();

  private recipeService = inject(RecipeService);
  private router = inject(Router);

  private searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  readonly faMagnifyingGlass = faMagnifyingGlass;
  readonly faXmark = faXmark;
  readonly faArrowRight = faArrowRight;
  readonly faClock = faClock;
  readonly skeletons = [0, 1, 2, 3];

  query = signal('');
  results = signal<Recipe[]>([]);
  loading = signal(false);
  hasSearched = signal(false);

  private timer: ReturnType<typeof setTimeout> | null = null;
  private lastFocused: Element | null = null;

  ngOnInit(): void {
    this.lastFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    queueMicrotask(() => this.searchInput()?.nativeElement.focus());
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
    if (this.timer !== null) clearTimeout(this.timer);
    (this.lastFocused as HTMLElement | null)?.focus?.();
  }

  onInput(event: Event): void {
    const q = (event.target as HTMLInputElement).value;
    this.query.set(q);
    if (this.timer !== null) clearTimeout(this.timer);
    if (!q.trim()) {
      this.results.set([]);
      this.hasSearched.set(false);
      this.loading.set(false);
      return;
    }
    this.loading.set(true);
    this.timer = setTimeout(() => {
      this.recipeService.getRecipes({ q: q.trim(), per_page: 6 }).subscribe({
        next: (res) => {
          this.results.set(res.data);
          this.hasSearched.set(true);
          this.loading.set(false);
        },
        error: () => {
          this.results.set([]);
          this.hasSearched.set(true);
          this.loading.set(false);
        },
      });
    }, 300);
  }

  openRecipe(slug: string, event: Event): void {
    const me = event as MouseEvent;
    // Let Cmd/Ctrl/Shift+click open a new tab via the href
    if (me.ctrlKey || me.metaKey || me.shiftKey) return;
    event.preventDefault();
    this.router.navigate(['/recipes', slug]);
    this.close.emit();
  }

  goToAll(): void {
    this.router.navigate(['/recipes'], { queryParams: { q: this.query().trim() } });
    this.close.emit();
  }
}
