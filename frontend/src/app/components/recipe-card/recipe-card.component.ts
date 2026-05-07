import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../models/models';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a [routerLink]="['/recipes', recipe.slug]" class="card"
       [class.featured]="featured" [class.compact]="compact" [class.overlay]="overlay"
       [style.animation-delay]="(index < 6 ? index : 5) * 50 + 'ms'">
      <div class="card-image" [class.img-loaded]="imgLoaded" [style.background]="gradient">
        @if (recipe.hero_image) {
          <img [src]="recipe.hero_image" [alt]="recipe.title"
               [loading]="priority ? 'eager' : 'lazy'"
               [attr.fetchpriority]="priority ? 'high' : null"
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {{ recipe.prep_minutes + recipe.cook_minutes }} мин
          </span>
          @if (!compact && !overlay) {
            <span class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
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
    /* Clean paper card — warm surface, soft shadow, no outer bezel padding. */
    .card {
      display: block;
      position: relative;
      border-radius: var(--radius-lg);
      background: var(--clr-surface);
      border: 1px solid var(--clr-border-faint);
      box-shadow: var(--shadow-sm);
      text-decoration: none;
      color: inherit;
      overflow: hidden;
      transition: transform 0.32s var(--ease-out-expo), box-shadow 0.32s var(--ease-out-expo);
      animation: fadeInUp 0.48s var(--ease-out-expo) both;
      touch-action: manipulation;
      cursor: pointer;
    }
    @media (hover: hover) and (pointer: fine) {
      .card:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
      }
    }
    .card:active {
      transform: translateY(-1px) scale(0.99);
      box-shadow: var(--shadow-sm);
      transition-duration: 0.1s;
    }

    /* --- Image --- */
    .card-image {
      aspect-ratio: 4 / 3;
      position: relative;
      overflow: hidden;
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
      .card:hover .card-image img { transform: scale(1.05); }
    }

    /* skeleton shimmer */
    .card-image:not(.img-loaded)::before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--clr-skeleton);
      z-index: 1;
    }
    .card-image:not(.img-loaded)::after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 2;
      background: linear-gradient(90deg, transparent 0%, var(--clr-skeleton-shine) 50%, transparent 100%);
      transform: translateX(-100%);
      animation: img-shimmer 1.4s linear infinite;
    }
    @keyframes img-shimmer {
      from { transform: translateX(-100%); }
      to   { transform: translateX(100%); }
    }

    /* --- Hover overlay --- */
    .card-overlay {
      position: absolute;
      inset: 0;
      background: rgba(20, 15, 10, 0);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.32s var(--ease-out-expo);
    }
    @media (hover: hover) and (pointer: fine) {
      .card:hover .card-overlay { background: rgba(20, 15, 10, 0.44); }
    }
    .overlay-btn {
      color: oklch(100% 0 0);
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 0.85rem;
      letter-spacing: 0.04em;
      padding: var(--space-2) var(--space-5);
      border: 1.5px solid oklch(100% 0 0 / 0.7);
      border-radius: var(--radius-pill);
      opacity: 0;
      transform: translateY(8px) scale(0.96);
      transition: opacity 0.25s var(--ease-out-expo), transform 0.25s var(--ease-out-expo);
    }
    @media (hover: hover) and (pointer: fine) {
      .card:hover .overlay-btn { opacity: 1; transform: translateY(0) scale(1); }
    }

    /* mobile label */
    .mobile-label { display: none; }
    @media (hover: none) {
      .mobile-label {
        display: block;
        position: absolute;
        bottom: var(--space-2);
        right: var(--space-3);
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: oklch(100% 0 0);
        background: rgba(20,15,10,0.52);
        padding: var(--space-1) var(--space-2);
        border-radius: var(--radius-pill);
        z-index: 2;
        pointer-events: none;
      }
    }

    /* --- Body --- */
    .card-body {
      padding: var(--space-5) var(--space-5) var(--space-6);
    }
    .category {
      display: inline-block;
      font-size: 0.62rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: oklch(100% 0 0);
      background: var(--clr-brand);
      padding: 2px var(--space-3);
      border-radius: var(--radius-pill);
      margin-bottom: var(--space-2);
    }
    .title {
      font-family: var(--font-display);
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--clr-text);
      margin: 0 0 var(--space-2);
      line-height: 1.22;
    }
    .card.featured .title { font-size: 1.55rem; font-weight: 800; line-height: 1.12; }
    .excerpt {
      font-size: 0.865rem;
      color: var(--clr-text-muted);
      line-height: 1.65;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .card.featured .excerpt { -webkit-line-clamp: 3; }
    .meta {
      display: flex;
      gap: var(--space-3);
      margin-top: var(--space-4);
      padding-top: var(--space-3);
      border-top: 1px solid var(--clr-border-faint);
      font-size: 0.775rem;
      color: var(--clr-text-muted);
      align-items: center;
      font-variant-numeric: tabular-nums;
    }
    .meta-item { display: flex; align-items: center; gap: var(--space-1); }
    .meta-item svg { width: 0.8rem; height: 0.8rem; flex-shrink: 0; }
    .difficulty {
      margin-left: auto;
      font-size: 0.68rem;
      font-weight: 700;
      padding: 2px var(--space-2);
      border-radius: var(--radius-pill);
      background: var(--clr-surface-alt);
      color: var(--clr-text-muted);
    }
    .diff-easy   { background: var(--clr-green-bg);  color: var(--clr-green-text); }
    .diff-medium { background: var(--clr-amber-bg);  color: var(--clr-amber-text); }
    .diff-hard   { background: var(--clr-rust-bg);   color: var(--clr-rust-text); }

    /* --- Numbered badge --- */
    .card-num {
      position: absolute;
      top: var(--space-3);
      left: var(--space-4);
      font-family: var(--font-display);
      font-size: 0.9rem;
      font-weight: 800;
      letter-spacing: 0.06em;
      color: rgba(255, 255, 255, 0.92);
      z-index: 3;
      text-shadow: 0 1px 10px rgba(0, 0, 0, 0.45);
      pointer-events: none;
    }
    .card-num::before {
      content: '';
      display: inline-block;
      width: 1.2rem;
      height: 1px;
      background: rgba(255, 255, 255, 0.65);
      vertical-align: middle;
      margin-right: var(--space-2);
      transform: translateY(-1px);
    }
    .card.featured .card-num { font-size: 1.1rem; top: var(--space-4); left: var(--space-5); }

    /* --- Overlay variant (bento tile) --- */
    .card.overlay {
      position: relative;
      height: 100%;
      display: block;
      isolation: isolate;
      padding: 0;
      background: transparent;
      border: none;
      border-radius: var(--radius-lg);
      overflow: hidden;
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
      padding: var(--space-4) var(--space-5);
      background: linear-gradient(180deg, transparent 0%, rgba(10, 8, 5, 0.3) 35%, rgba(10, 8, 5, 0.84) 100%);
      color: oklch(100% 0 0);
      z-index: 2;
    }
    .card.overlay .category {
      background: rgba(0, 0, 0, 0.38);
      color: oklch(100% 0 0);
      border: 1px solid oklch(100% 0 0 / 0.16);
    }
    .card.overlay .title {
      color: oklch(100% 0 0);
      font-size: 1.1rem;
      line-height: 1.18;
      letter-spacing: -0.01em;
    }
    .card.overlay.featured .title {
      font-size: clamp(1.6rem, 2.5vw, 2.25rem);
      line-height: 1.08;
      letter-spacing: -0.02em;
      font-weight: 800;
    }
    .card.overlay .excerpt { color: oklch(100% 0 0 / 0.85); }
    .card.overlay .meta {
      border-top-color: oklch(100% 0 0 / 0.2);
      color: oklch(100% 0 0 / 0.90);
      margin-top: var(--space-3);
      padding-top: var(--space-3);
    }
    .card.overlay .difficulty { background: oklch(100% 0 0 / 0.16); color: oklch(100% 0 0); }
    .card.overlay .diff-easy   { background: oklch(66% 0.14 148 / 0.88); color: oklch(100% 0 0); }
    .card.overlay .diff-medium { background: oklch(70% 0.15 62 / 0.88);  color: oklch(100% 0 0); }
    .card.overlay .diff-hard   { background: oklch(60% 0.17 30 / 0.88);  color: oklch(100% 0 0); }
    @media (hover: hover) and (pointer: fine) {
      .card.overlay:hover .card-image img { transform: scale(1.06); }
    }

    /* --- Compact (horizontal) variant --- */
    .card.compact {
      display: flex;
      flex-direction: row;
      border-radius: var(--radius-md);
    }
    .card.compact .card-image {
      aspect-ratio: unset;
      width: 110px;
      min-height: 100%;
      flex-shrink: 0;
    }
    .card.compact .card-body {
      padding: var(--space-4);
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: var(--space-1);
    }
    .card.compact .category { margin-bottom: 0; }
    .card.compact .title { font-size: 0.925rem; margin: 0; }
    .card.compact .meta {
      margin-top: var(--space-2);
      padding-top: var(--space-2);
      font-size: 0.72rem;
      gap: var(--space-2);
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(14px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @media (prefers-reduced-motion: reduce) {
      .card { animation: none; transition: box-shadow 0.2s; }
      .card:hover { transform: none; }
      .card-image img { transition: none; }
      .card:hover .card-image img { transform: none; }
      .overlay-btn { transition: opacity 0.15s; transform: none !important; }
    }

    @media (max-width: 500px) {
      .card.compact .card-image { width: 88px; }
      .card.compact .card-body { padding: var(--space-3); }
      .card.compact .title { font-size: 0.875rem; }
    }

  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeCardComponent {
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
