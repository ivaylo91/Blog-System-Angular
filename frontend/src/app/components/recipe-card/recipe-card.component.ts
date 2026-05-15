import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Recipe } from '../../models/models';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  template: `
    <a [routerLink]="['/recipes', recipe.slug]" class="card"
       [class.featured]="featured" [class.compact]="compact" [class.overlay]="overlay"
       [style.animation-delay]="(index < 6 ? index : 5) * 50 + 'ms'">
      <div class="card-image" [class.img-loaded]="imgLoaded" [style.background]="gradient">
        @if (recipe.hero_image) {
          <img [src]="recipe.hero_image" [alt]="recipe.title"
               [srcset]="recipe.hero_image_sm ? recipe.hero_image_sm + ' 600w, ' + recipe.hero_image + ' 1200w' : ''"
               sizes="(max-width: 500px) 90vw, (max-width: 900px) 45vw, 380px"
               [loading]="priority ? 'eager' : 'lazy'"
               [attr.fetchpriority]="priority ? 'high' : null"
               [attr.decoding]="priority ? null : 'async'"
               (load)="onImgLoad()" />
        }
        @if (numbered) {
          <span class="card-num" aria-hidden="true">{{ paddedIndex }}</span>
        }
        @if (!compact && !overlay) {
          <div class="card-overlay">
            <span class="overlay-btn">Виж рецептата →</span>
          </div>
          <span class="mobile-label" aria-hidden="true">Виж</span>
        }
      </div>
      <div class="card-body">
        @if (recipe.category) {
          <span class="category">{{ recipe.category.name }}</span>
        }
        <h3 class="title">{{ recipe.title }}</h3>
        @if (!compact && (!overlay || featured)) {
          <p class="excerpt">{{ recipe.excerpt }}</p>
        }
        <div class="meta">
          <span class="meta-item">
            <fa-icon [icon]="faClock" aria-hidden="true"></fa-icon>
            {{ recipe.prep_minutes + recipe.cook_minutes }} мин
          </span>
          @if (!compact && !overlay) {
            <span class="meta-item">
              <fa-icon [icon]="faUsers" aria-hidden="true"></fa-icon>
              {{ recipe.servings }} порции
            </span>
          }
          <span class="difficulty"
                [class.diff-easy]="recipe.difficulty === 'Лесно'"
                [class.diff-medium]="recipe.difficulty === 'Средно'"
                [class.diff-hard]="recipe.difficulty === 'За напреднали'">{{ recipe.difficulty }}</span>
        </div>
      </div>
    </a>
  `,
  styles: [`
    /* ── Modern editorial recipe card ── */
    .card {
      display: block;
      position: relative;
      background: var(--clr-surface);
      border-radius: var(--radius-xl);
      border: 1px solid var(--clr-border-faint);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
      text-decoration: none;
      color: inherit;
      transition: transform 0.35s var(--ease-out-expo), box-shadow 0.35s var(--ease-out-expo);
      animation: fadeInUp 0.48s var(--ease-out-expo) both;
      touch-action: manipulation;
      cursor: pointer;
    }
    @media (hover: hover) and (pointer: fine) {
      .card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
      }
    }
    .card:active {
      transform: translateY(-1px);
      box-shadow: var(--shadow-sm);
      transition-duration: 0.1s;
    }

    /* --- Image area --- */
    .card-image {
      aspect-ratio: 4 / 3;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, var(--paper-2), var(--paper-edge));
    }
    .card.featured .card-image { aspect-ratio: 16 / 9; }
    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s var(--ease-out-expo), opacity 0.3s ease;
      opacity: 0;
    }
    .card-image.img-loaded img { opacity: 1; }
    @media (hover: hover) and (pointer: fine) {
      .card:hover .card-image img { transform: scale(1.06); }
    }

    /* skeleton shimmer */
    .card-image:not(.img-loaded)::after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 2;
      background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%);
      transform: translateX(-100%);
      animation: img-shimmer 1.6s linear infinite;
    }
    @keyframes img-shimmer {
      from { transform: translateX(-100%); }
      to   { transform: translateX(100%); }
    }

    /* hover "view" overlay on image */
    .card-overlay {
      position: absolute;
      inset: 0;
      background: rgba(10, 22, 50, 0);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.32s var(--ease-out-expo);
    }
    @media (hover: hover) and (pointer: fine) {
      .card:hover .card-overlay { background: rgba(10, 22, 50, 0.38); }
    }
    .overlay-btn {
      color: #fff;
      font-family: var(--font-body);
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 0.5rem 1.25rem;
      border: 1px solid rgba(255,255,255,0.6);
      border-radius: var(--radius-pill);
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(4px);
      opacity: 0;
      transform: translateY(6px);
      transition: opacity 0.25s var(--ease-out-expo), transform 0.25s var(--ease-out-expo);
    }
    @media (hover: hover) and (pointer: fine) {
      .card:hover .overlay-btn { opacity: 1; transform: translateY(0); }
    }

    /* mobile label */
    .mobile-label { display: none; }
    @media (hover: none) {
      .mobile-label {
        display: block;
        position: absolute;
        bottom: 0.5rem;
        right: 0.625rem;
        font-family: var(--font-body);
        font-size: 0.6rem;
        font-weight: 500;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #fff;
        background: rgba(10,22,50,0.52);
        padding: 2px 0.5rem;
        border-radius: var(--radius-sm);
        z-index: 2;
        pointer-events: none;
      }
    }

    /* --- Card body --- */
    .card-body {
      padding: 1rem 1.125rem 1.25rem;
    }
    .category {
      display: inline-block;
      font-family: var(--font-body);
      font-size: 0.68rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--terracotta);
      margin-bottom: 0.4rem;
    }
    .title {
      font-family: var(--font-display);
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--ink);
      margin: 0 0 0.3rem;
      line-height: 1.2;
    }
    .card.featured .title { font-size: 1.4rem; }
    .excerpt {
      font-family: var(--font-body);
      font-size: 0.875rem;
      color: var(--ink-mute);
      line-height: 1.45;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .card.featured .excerpt { -webkit-line-clamp: 3; }
    .meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
      margin-top: 0.75rem;
      align-items: center;
    }
    .meta-item {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-family: var(--font-body);
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--ink-mute);
      background: var(--paper-2);
      border-radius: var(--radius-sm);
      padding: 3px 10px;
    }
    .meta-item fa-icon { font-size: 0.7rem; flex-shrink: 0; }
    .difficulty {
      margin-left: auto;
      font-family: var(--font-body);
      font-size: 0.72rem;
      font-weight: 600;
      padding: 3px 10px;
      border-radius: var(--radius-sm);
      background: var(--paper-2);
      color: var(--ink-mute);
    }
    .diff-easy   { background: var(--clr-green-bg);  color: var(--clr-green-text); }
    .diff-medium { background: var(--clr-amber-bg);  color: var(--clr-amber-text); }
    .diff-hard   { background: var(--clr-rust-bg);   color: var(--clr-rust-text); }

    /* --- Numbered badge --- */
    .card-num {
      position: absolute;
      top: 0.625rem;
      left: 0.875rem;
      font-family: var(--font-display);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      color: rgba(255,255,255,0.92);
      z-index: 3;
      text-shadow: 0 1px 8px rgba(0,0,0,0.45);
      pointer-events: none;
    }
    .card.featured .card-num { font-size: 1rem; }

    /* --- Overlay variant --- */
    .card.overlay {
      position: relative;
      height: 100%;
      display: block;
      isolation: isolate;
      background: var(--clr-surface);
    }
    .card.overlay .card-image {
      position: absolute;
      inset: 0;
      aspect-ratio: auto;
      z-index: 0;
    }
    .card.overlay .card-body {
      position: absolute;
      inset: auto 0 0 0;
      padding: 1rem 1.25rem 1.125rem;
      background: linear-gradient(180deg, transparent 0%, rgba(10,20,50,0.3) 35%, rgba(10,20,50,0.88) 100%);
      color: var(--paper);
      z-index: 2;
    }
    .card.overlay .category { color: rgba(200,220,255,0.8); }
    .card.overlay .title { color: #fff; font-size: 1.05rem; }
    .card.overlay.featured .title { font-size: clamp(1.5rem, 2.5vw, 2.1rem); line-height: 1.08; }
    .card.overlay .excerpt { color: rgba(200,220,255,0.85); }
    .card.overlay .meta-item { background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.85); }
    .card.overlay .difficulty { background: rgba(255,255,255,0.15); color: #fff; }

    /* --- Compact (horizontal) variant --- */
    .card.compact {
      display: flex;
      flex-direction: row;
    }
    .card.compact .card-image {
      aspect-ratio: unset;
      width: 96px;
      min-height: 100%;
      flex-shrink: 0;
      border-radius: 0;
    }
    .card.compact .card-body {
      padding: 0.75rem 0.875rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.125rem;
    }
    .card.compact .category { margin-bottom: 0; }
    .card.compact .title { font-size: 0.9rem; margin: 0; }
    .card.compact .meta { margin-top: 0.375rem; gap: 0.3rem; }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @media (prefers-reduced-motion: reduce) {
      .card { animation: none; transition: box-shadow 0.2s; }
      .card:hover { transform: none; }
      .card-image img { transition: none; }
      .overlay-btn { transition: opacity 0.15s; transform: none !important; }
    }

    @media (max-width: 500px) {
      .card.compact .card-image { width: 80px; }
      .card.compact .card-body { padding: 0.625rem 0.75rem; }
      .card.compact .title { font-size: 0.85rem; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeCardComponent {
  readonly faClock = faClock;
  readonly faUsers = faUsers;

  @Input({ required: true }) recipe!: Recipe;
  @Input() priority = false;
  @Input() index = 0;
  @Input() featured = false;
  @Input() compact = false;
  @Input() overlay = false;
  @Input() numbered = false;

  get paddedIndex(): string {
    return String(this.index + 1).padStart(2, '0');
  }

  imgLoaded = false;
  onImgLoad(): void { this.imgLoaded = true; }

  get gradient(): string {
    const from = this.recipe.hero_palette_from || '#c8b99a';
    const via  = this.recipe.hero_palette_via  || '#ddd0b8';
    const to   = this.recipe.hero_palette_to   || '#ede8de';
    return `linear-gradient(135deg, ${from}, ${via}, ${to})`;
  }
}
