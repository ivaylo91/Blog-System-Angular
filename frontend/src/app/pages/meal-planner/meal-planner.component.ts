import {
  ChangeDetectionStrategy, Component, OnDestroy,
  computed, inject, signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronLeft, faChevronRight, faPlus, faXmark,
  faTrashCan, faCalendarDays, faMagnifyingGlass, faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import {
  MealPlannerService, PlannedMeal,
  BG_DAYS_SHORT, BG_DAYS_FULL, BG_MONTHS,
} from '../../services/meal-planner.service';
import { RecentlyViewedService } from '../../services/recently-viewed.service';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/models';

@Component({
  selector: 'app-meal-planner',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  template: `

    <!-- ── Recipe picker overlay ─────────────────────────── -->
    @if (pickerDay() !== null) {
      <div class="picker-backdrop" (click)="closePicker()" aria-hidden="true"></div>
      <div class="picker-panel" role="dialog" aria-modal="true"
           [attr.aria-label]="'Добави рецепта към ' + dayLabel(pickerDay()!)"
           (keydown.escape)="closePicker()">
        <div class="picker-head">
          <span class="picker-title">Добави към {{ dayLabel(pickerDay()!) }}</span>
          <button class="picker-close" type="button" (click)="closePicker()" aria-label="Затвори">
            <fa-icon [icon]="faXmark"></fa-icon>
          </button>
        </div>
        <div class="picker-search-row">
          <span class="picker-ico" aria-hidden="true"><fa-icon [icon]="faMagnifyingGlass"></fa-icon></span>
          <input type="search" class="picker-input"
                 placeholder="Търси рецепта…"
                 autocomplete="off"
                 [value]="pickerQuery()"
                 (input)="onPickerInput($event)"
                 aria-label="Търси рецепта" />
        </div>
        <div class="picker-body">
          @if (pickerLoading()) {
            <div class="picker-sk">
              @for (s of [0,1,2]; track s) {
                <div class="psk-row">
                  <div class="psk-thumb"></div>
                  <div class="psk-lines">
                    <div class="psk-line psk-sm"></div>
                    <div class="psk-line psk-lg"></div>
                  </div>
                </div>
              }
            </div>
          } @else if (pickerHasSearched() && pickerResults().length === 0) {
            <p class="picker-empty">Няма намерени рецепти.</p>
          } @else if (pickerResults().length > 0) {
            <ul class="picker-list">
              @for (r of pickerResults(); track r.id) {
                <li>
                  <button type="button" class="picker-item" (click)="pickRecipe(r)">
                    <div class="picker-thumb">
                      @if (r.hero_image) {
                        <img [src]="r.hero_image" [alt]="r.title" loading="lazy" />
                      } @else {
                        <div class="picker-thumb-ph"></div>
                      }
                    </div>
                    <div class="picker-info">
                      @if (r.category?.name) {
                        <span class="picker-cat">{{ r.category!.name }}</span>
                      }
                      <span class="picker-title-text">{{ r.title }}</span>
                      @if (r.prep_minutes || r.cook_minutes) {
                        <span class="picker-time">{{ (r.prep_minutes || 0) + (r.cook_minutes || 0) }} мин.</span>
                      }
                    </div>
                  </button>
                </li>
              }
            </ul>
          } @else if (!pickerQuery()) {
            <!-- Quick picks from recently viewed -->
            @if (recentRecipes().length > 0) {
              <p class="picker-section-label">Наскоро разглеждани</p>
              <ul class="picker-list">
                @for (r of recentRecipes(); track r.slug) {
                  <li>
                    <button type="button" class="picker-item" (click)="pickRecentRecipe(r)">
                      <div class="picker-thumb">
                        @if (r.hero_image) {
                          <img [src]="r.hero_image" [alt]="r.title" loading="lazy" />
                        } @else {
                          <div class="picker-thumb-ph"></div>
                        }
                      </div>
                      <div class="picker-info">
                        @if (r.category?.name) {
                          <span class="picker-cat">{{ r.category!.name }}</span>
                        }
                        <span class="picker-title-text">{{ r.title }}</span>
                        @if ((r.prep_minutes || 0) + (r.cook_minutes || 0) > 0) {
                          <span class="picker-time">{{ (r.prep_minutes || 0) + (r.cook_minutes || 0) }} мин.</span>
                        }
                      </div>
                    </button>
                  </li>
                }
              </ul>
            } @else {
              <p class="picker-empty">Напиши рецепта за да я добавиш.</p>
            }
          }
        </div>
      </div>
    }

    <!-- ── Page ────────────────────────────────────────────── -->
    <div class="mp-page">

      <!-- Back link -->
      <a routerLink="/" class="mp-back">
        <fa-icon [icon]="faArrowLeft" aria-hidden="true"></fa-icon>
        Начало
      </a>

      <!-- Page header -->
      <div class="mp-header">
        <div class="mp-title-row">
          <fa-icon [icon]="faCalendarDays" class="mp-icon" aria-hidden="true"></fa-icon>
          <h1 class="mp-title">Седмично меню</h1>
        </div>

        <!-- Week navigation -->
        <div class="mp-week-nav">
          <button type="button" class="week-btn" (click)="svc.prevWeek()" aria-label="Предишна седмица">
            <fa-icon [icon]="faChevronLeft" aria-hidden="true"></fa-icon>
          </button>
          <div class="week-label-wrap">
            <span class="week-label">{{ svc.weekLabel() }}</span>
            @if (!svc.isCurrentWeek()) {
              <button type="button" class="week-today-btn" (click)="svc.goToCurrentWeek()">
                Тази седмица
              </button>
            }
          </div>
          <button type="button" class="week-btn" (click)="svc.nextWeek()" aria-label="Следваща седмица">
            <fa-icon [icon]="faChevronRight" aria-hidden="true"></fa-icon>
          </button>
        </div>

        @if (svc.totalPlanned() > 0) {
          <button type="button" class="clear-week-btn" (click)="svc.clearWeek()">
            <fa-icon [icon]="faTrashCan" aria-hidden="true"></fa-icon>
            Изчисти седмицата
          </button>
        }
      </div>

      <!-- Week grid -->
      <div class="mp-grid" role="grid" aria-label="Седмично меню">

        @for (date of svc.weekDays(); track date.toISOString(); let i = $index) {
          <div class="day-col" [class.day-today]="isToday(date)" role="gridcell">

            <!-- Day header -->
            <div class="day-head">
              <span class="day-name">{{ BG_DAYS_SHORT[i] }}</span>
              <span class="day-date" [class.today-badge]="isToday(date)">
                {{ date.getDate() }}
              </span>
              <span class="day-month">{{ BG_MONTHS[date.getMonth()] }}</span>
            </div>

            <!-- Meals -->
            <div class="day-meals">
              @for (meal of svc.dayMeals(i); track meal.recipeSlug) {
                <div class="meal-chip">
                  <a [routerLink]="['/recipes', meal.recipeSlug]" class="meal-chip-inner">
                    @if (meal.hero_image) {
                      <img [src]="meal.hero_image" [alt]="meal.recipeTitle" class="meal-thumb" loading="lazy" />
                    } @else {
                      <div class="meal-thumb meal-thumb-ph"></div>
                    }
                    <span class="meal-name">{{ meal.recipeTitle }}</span>
                    @if (meal.totalMinutes > 0) {
                      <span class="meal-time">{{ meal.totalMinutes }} мин.</span>
                    }
                  </a>
                  <button type="button" class="meal-remove"
                          (click)="svc.removeRecipe(i, meal.recipeSlug)"
                          [attr.aria-label]="'Премахни ' + meal.recipeTitle">
                    <fa-icon [icon]="faXmark" aria-hidden="true"></fa-icon>
                  </button>
                </div>
              }
            </div>

            <!-- Add button -->
            @if ((svc.dayMeals(i).length) < 5) {
              <button type="button" class="day-add-btn"
                      (click)="openPicker(i)"
                      [attr.aria-label]="'Добави рецепта към ' + BG_DAYS_FULL[i]">
                <fa-icon [icon]="faPlus" aria-hidden="true"></fa-icon>
              </button>
            }

            <!-- Clear day -->
            @if (svc.dayMeals(i).length > 0) {
              <button type="button" class="day-clear-btn"
                      (click)="svc.clearDay(i)"
                      [attr.aria-label]="'Изчисти ' + BG_DAYS_FULL[i]">
                <fa-icon [icon]="faTrashCan" aria-hidden="true"></fa-icon>
              </button>
            }

          </div>
        }

      </div>

      <!-- Empty-week hint -->
      @if (svc.totalPlanned() === 0) {
        <p class="mp-hint">
          Натисни <strong>+</strong> под всеки ден за да добавиш рецепта към менюто.
        </p>
      }

    </div>
  `,
  styles: [`
    /* ── Page ──────────────────────────────────────────── */
    .mp-page {
      min-height: 100dvh;
      background: var(--paper);
      padding: clamp(1.25rem, 4vw, 2.5rem) clamp(1rem, 4vw, 2rem) 4rem;
      max-width: 1300px;
      margin: 0 auto;
    }

    .mp-back {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--clr-text-muted);
      text-decoration: none;
      margin-bottom: 1.25rem;
      transition: color 0.15s;
    }
    .mp-back:hover { color: var(--clr-brand); }

    /* ── Page header ──────────────────────────────────── */
    .mp-header {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      flex-wrap: wrap;
      margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
    }

    .mp-title-row {
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }
    .mp-icon { color: var(--terracotta); font-size: 1.25rem; }
    .mp-title {
      font-family: var(--font-display);
      font-style: italic;
      font-size: clamp(1.5rem, 3.5vw, 2rem);
      color: var(--clr-text);
      margin: 0;
    }

    /* Week navigation */
    .mp-week-nav {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-left: auto;
    }
    .week-btn {
      width: 2rem;
      height: 2rem;
      border: 1px solid var(--clr-border);
      border-radius: 50%;
      background: var(--clr-surface);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--clr-text-muted);
      font-size: 0.75rem;
      transition: background 0.15s, border-color 0.15s, color 0.15s;
    }
    .week-btn:hover { background: var(--clr-surface-hover); border-color: var(--clr-border-strong); color: var(--clr-text); }

    .week-label-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      min-width: 14ch;
      text-align: center;
    }
    .week-label {
      font-family: var(--font-type);
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--clr-text);
      white-space: nowrap;
    }
    .week-today-btn {
      font-family: var(--font-type);
      font-size: 0.58rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--terracotta);
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      transition: color 0.15s;
    }
    .week-today-btn:hover { color: var(--terracotta-2); }

    .clear-week-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.4rem 0.8rem;
      border: 1px solid var(--clr-border);
      border-radius: var(--radius-pill);
      background: none;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--clr-text-muted);
      cursor: pointer;
      transition: background 0.15s, border-color 0.15s, color 0.15s;
    }
    .clear-week-btn:hover { background: var(--clr-error-bg); border-color: var(--clr-error); color: var(--clr-error); }

    /* ── Week grid ────────────────────────────────────── */
    .mp-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 0.5rem;
    }

    /* ── Day column ───────────────────────────────────── */
    .day-col {
      background: var(--clr-surface);
      border-radius: 0.75rem;
      border: 1.5px solid var(--clr-border-faint);
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 0.75rem 0.6rem;
      min-height: 260px;
      position: relative;
      transition: border-color 0.15s;
    }
    .day-col.day-today {
      border-color: var(--terracotta);
      background: color-mix(in srgb, var(--paper-2) 60%, transparent);
    }

    /* Day header */
    .day-head {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.15rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px dashed var(--clr-border-faint);
      margin-bottom: 0.25rem;
    }
    .day-name {
      font-family: var(--font-type);
      font-size: 0.6rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--clr-text-muted);
    }
    .day-date {
      font-family: var(--font-display);
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--clr-text);
      line-height: 1;
    }
    .today-badge {
      background: var(--terracotta);
      color: #fff;
      border-radius: 50%;
      width: 1.6rem;
      height: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.88rem;
    }
    .day-month {
      font-family: var(--font-type);
      font-size: 0.55rem;
      color: var(--clr-text-faint);
      letter-spacing: 0.08em;
    }

    /* Meal chips */
    .day-meals {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      flex: 1;
    }

    .meal-chip {
      position: relative;
      border-radius: var(--radius-xl);
      overflow: hidden;
      background: var(--paper-2);
      border: 1px solid var(--clr-border-faint);
    }
    .meal-chip-inner {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.35rem 1.8rem 0.35rem 0.35rem;
      text-decoration: none;
      color: inherit;
    }
    .meal-thumb {
      flex-shrink: 0;
      width: 1.75rem;
      height: 1.75rem;
      border-radius: var(--radius-xs);
      object-fit: cover;
      display: block;
    }
    .meal-thumb-ph {
      background: linear-gradient(135deg, var(--paper), var(--paper-2));
    }
    .meal-name {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 0.72rem;
      color: var(--clr-text);
      line-height: 1.25;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      flex: 1;
    }
    .meal-time {
      display: none; /* hidden in compact view */
    }
    .meal-remove {
      position: absolute;
      top: 0;
      right: 0;
      width: 1.75rem;
      height: 1.75rem;
      border: none;
      background: var(--paper-2);
      border-radius: 0 0.5rem 0 0.35rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.55rem;
      color: var(--clr-text-muted);
      cursor: pointer;
      touch-action: manipulation;
      opacity: 0;
      transition: opacity 0.15s, background 0.15s, color 0.15s;
    }
    .meal-chip:hover .meal-remove { opacity: 1; }
    .meal-remove:hover { background: var(--clr-error-bg); color: var(--clr-error); }
    @media (hover: none) {
      .meal-remove { opacity: 1; }
    }

    /* Add / clear buttons */
    .day-add-btn {
      align-self: center;
      width: 2.75rem;
      height: 2.75rem;
      border-radius: 50%;
      border: 1.5px dashed var(--clr-border);
      background: none;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--clr-text-faint);
      font-size: 0.7rem;
      cursor: pointer;
      transition: border-color 0.15s, color 0.15s, background 0.15s;
      margin-top: auto;
      touch-action: manipulation;
    }
    .day-add-btn:hover { border-color: var(--terracotta); color: var(--terracotta); background: color-mix(in srgb, var(--paper-2) 50%, transparent); }

    .day-clear-btn {
      align-self: center;
      background: none;
      border: none;
      font-size: 0.6rem;
      color: var(--clr-text-faint);
      cursor: pointer;
      padding: 0.65rem 0.5rem;
      min-height: 2.75rem;
      display: flex;
      align-items: center;
      transition: color 0.15s;
      touch-action: manipulation;
    }
    .day-clear-btn:hover { color: var(--clr-error); }

    /* Hint */
    .mp-hint {
      text-align: center;
      font-family: var(--font-hand);
      font-size: 1.05rem;
      color: var(--clr-text-muted);
      margin-top: 2rem;
    }

    /* ── Picker overlay ───────────────────────────────── */
    .picker-backdrop {
      position: fixed;
      inset: 0;
      background: oklch(20% 0.02 40 / 0.5);
      z-index: 200;
      animation: fade-in 0.18s ease-out both;
    }
    .picker-panel {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: min(520px, calc(100vw - 2rem));
      max-height: min(560px, 80dvh);
      background: var(--paper);
      border-radius: var(--radius-xl);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      z-index: 201;
      box-shadow: 0 24px 64px oklch(15% 0.02 40 / 0.28);
      animation: slide-in 0.2s cubic-bezier(0.16,1,0.3,1) both;
    }
    @keyframes fade-in  { from { opacity:0 } to { opacity:1 } }
    @keyframes slide-in { from { opacity:0; transform:translate(-50%,-52%) } to { opacity:1; transform:translate(-50%,-50%) } }

    .picker-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.875rem 1rem 0.875rem 1.25rem;
      border-bottom: 1px solid var(--clr-border-faint);
    }
    .picker-title {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1.05rem;
      color: var(--clr-text);
    }
    .picker-close {
      width: 2rem;
      height: 2rem;
      border: none;
      background: var(--clr-surface);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--clr-text-muted);
      font-size: 0.85rem;
      transition: background 0.15s, color 0.15s;
    }
    .picker-close:hover { background: var(--clr-surface-hover); color: var(--clr-text); }

    .picker-search-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.7rem 1rem 0.7rem 1.25rem;
      border-bottom: 1px solid var(--clr-border-faint);
    }
    .picker-ico { color: var(--clr-text-muted); font-size: 0.85rem; flex-shrink: 0; }
    .picker-input {
      flex: 1;
      border: none;
      background: transparent;
      font-family: var(--font-body);
      font-size: 0.95rem;
      color: var(--clr-text);
      outline: none;
    }
    .picker-input::placeholder { color: var(--clr-text-faint); }
    .picker-input::-webkit-search-cancel-button { display: none; }

    .picker-body {
      overflow-y: auto;
      overscroll-behavior: contain;
      flex: 1;
    }

    .picker-section-label {
      font-family: var(--font-type);
      font-size: 0.6rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--clr-text-faint);
      padding: 0.75rem 1.25rem 0.25rem;
      margin: 0;
    }

    .picker-list {
      list-style: none;
      padding: 0.25rem 0;
      margin: 0;
    }
    .picker-item {
      display: flex;
      align-items: center;
      gap: 0.875rem;
      padding: 0.6rem 1.25rem;
      width: 100%;
      background: none;
      border: none;
      cursor: pointer;
      text-align: left;
      font-family: inherit;
      transition: background 0.12s;
      color: inherit;
    }
    .picker-item:hover { background: var(--clr-surface); }

    .picker-thumb {
      flex-shrink: 0;
      width: 3rem;
      height: 3rem;
      border-radius: var(--radius-xl);
      overflow: hidden;
      background: var(--paper-2);
    }
    .picker-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .picker-thumb-ph { width: 100%; height: 100%; background: linear-gradient(135deg, var(--paper-2), var(--paper)); }

    .picker-info {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
    }
    .picker-cat {
      font-family: var(--font-type);
      font-size: 0.55rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--terracotta);
    }
    .picker-title-text {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 0.9rem;
      color: var(--clr-text);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .picker-time {
      font-family: var(--font-type);
      font-size: 0.58rem;
      letter-spacing: 0.08em;
      color: var(--clr-text-muted);
    }
    .picker-empty {
      text-align: center;
      padding: 2rem;
      color: var(--clr-text-muted);
      font-size: 0.9rem;
      margin: 0;
    }

    /* Picker skeletons */
    .picker-sk { padding: 0.5rem 0; }
    .psk-row {
      display: flex;
      align-items: center;
      gap: 0.875rem;
      padding: 0.6rem 1.25rem;
    }
    .psk-thumb {
      flex-shrink: 0; width: 3rem; height: 3rem; border-radius: var(--radius-xl);
      background: var(--paper-2); animation: sk-pulse 1.4s ease-in-out infinite;
    }
    .psk-lines { flex: 1; display: flex; flex-direction: column; gap: 0.4rem; }
    .psk-line {
      height: 0.65rem; border-radius: var(--radius-xl);
      background: var(--paper-2); animation: sk-pulse 1.4s ease-in-out infinite;
    }
    .psk-sm { width: 25%; height: 0.5rem; }
    .psk-lg { width: 65%; }
    @keyframes sk-pulse { 0%,100% { opacity:1 } 50% { opacity:0.45 } }

    /* ── Responsive ───────────────────────────────────── */
    @media (max-width: 1100px) {
      .mp-grid { grid-template-columns: repeat(7, minmax(110px, 1fr)); overflow-x: auto; }
    }
    @media (max-width: 800px) {
      .mp-header { gap: 0.75rem; }
      .mp-week-nav { margin-left: 0; }
      .mp-grid {
        grid-template-columns: repeat(7, 130px);
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        padding-bottom: 0.5rem;
        gap: 0.4rem;
      }
      .day-col { scroll-snap-align: start; }
    }
    @media (max-width: 480px) {
      .mp-grid { grid-template-columns: repeat(7, 120px); }
      .mp-header { flex-direction: column; align-items: flex-start; }
      .mp-week-nav { width: 100%; justify-content: space-between; }
    }
    @media (prefers-reduced-motion: reduce) {
      .picker-backdrop, .picker-panel { animation: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealPlannerComponent implements OnDestroy {
  svc = inject(MealPlannerService);
  private recentlyViewedSvc = inject(RecentlyViewedService);
  private recipeService = inject(RecipeService);

  readonly faChevronLeft  = faChevronLeft;
  readonly faChevronRight = faChevronRight;
  readonly faPlus         = faPlus;
  readonly faXmark        = faXmark;
  readonly faTrashCan     = faTrashCan;
  readonly faCalendarDays = faCalendarDays;
  readonly faMagnifyingGlass = faMagnifyingGlass;
  readonly faArrowLeft    = faArrowLeft;

  readonly BG_DAYS_SHORT = BG_DAYS_SHORT;
  readonly BG_DAYS_FULL  = BG_DAYS_FULL;
  readonly BG_MONTHS     = BG_MONTHS;

  recentRecipes = computed(() => this.recentlyViewedSvc.items());

  pickerDay      = signal<number | null>(null);
  pickerQuery    = signal('');
  pickerResults  = signal<Recipe[]>([]);
  pickerLoading  = signal(false);
  pickerHasSearched = signal(false);

  private pickerTimer: ReturnType<typeof setTimeout> | null = null;

  openPicker(dayIndex: number): void {
    this.pickerDay.set(dayIndex);
    this.pickerQuery.set('');
    this.pickerResults.set([]);
    this.pickerHasSearched.set(false);
    document.body.style.overflow = 'hidden';
  }

  closePicker(): void {
    this.pickerDay.set(null);
    document.body.style.overflow = '';
    if (this.pickerTimer !== null) { clearTimeout(this.pickerTimer); this.pickerTimer = null; }
  }

  onPickerInput(event: Event): void {
    const q = (event.target as HTMLInputElement).value;
    this.pickerQuery.set(q);
    if (this.pickerTimer !== null) clearTimeout(this.pickerTimer);
    if (!q.trim()) {
      this.pickerResults.set([]);
      this.pickerHasSearched.set(false);
      this.pickerLoading.set(false);
      return;
    }
    this.pickerLoading.set(true);
    this.pickerTimer = setTimeout(() => {
      this.recipeService.getRecipes({ q: q.trim(), per_page: 8 }).subscribe({
        next: (res) => { this.pickerResults.set(res.data); this.pickerHasSearched.set(true); this.pickerLoading.set(false); },
        error: () => { this.pickerResults.set([]); this.pickerHasSearched.set(true); this.pickerLoading.set(false); },
      });
    }, 280);
  }

  pickRecipe(r: Recipe): void {
    const day = this.pickerDay();
    if (day === null) return;
    this.svc.addRecipe(day, {
      recipeSlug: r.slug,
      recipeTitle: r.title,
      hero_image: r.hero_image,
      totalMinutes: (r.prep_minutes || 0) + (r.cook_minutes || 0),
    });
    this.closePicker();
  }

  pickRecentRecipe(r: { slug: string; title: string; hero_image: string | null; prep_minutes: number; cook_minutes: number }): void {
    const day = this.pickerDay();
    if (day === null) return;
    this.svc.addRecipe(day, {
      recipeSlug: r.slug,
      recipeTitle: r.title,
      hero_image: r.hero_image,
      totalMinutes: (r.prep_minutes || 0) + (r.cook_minutes || 0),
    });
    this.closePicker();
  }

  dayLabel(dayIndex: number): string {
    return BG_DAYS_FULL[dayIndex];
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate()
      && date.getMonth() === today.getMonth()
      && date.getFullYear() === today.getFullYear();
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
    if (this.pickerTimer !== null) clearTimeout(this.pickerTimer);
  }
}
