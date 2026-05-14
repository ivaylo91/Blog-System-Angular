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
    /* ── Polaroid / notebook recipe card ── */
    .card {
      display: block;
      position: relative;
      background: #f8efd8;
      padding: 1rem 1rem 1.125rem;
      box-shadow: var(--shadow-md);
      text-decoration: none;
      color: inherit;
      transition: transform 0.35s var(--ease-out-expo), box-shadow 0.35s var(--ease-out-expo);
      animation: fadeInUp 0.48s var(--ease-out-expo) both;
      touch-action: manipulation;
      cursor: pointer;
    }
    @media (hover: hover) and (pointer: fine) {
      .card:hover {
        transform: translateY(-3px) rotate(-0.3deg);
        box-shadow: var(--shadow-lg);
      }
    }
    .card:active {
      transform: translateY(-1px);
      box-shadow: var(--shadow-sm);
      transition-duration: 0.1s;
    }

    /* --- Image area (polaroid photo frame) --- */
    .card-image {
      aspect-ratio: 4 / 3;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, #d9c9a3, #c8b482);
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
      .card:hover .card-image img { transform: scale(1.04); }
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

    /* hover "view" label on image */
    .card-overlay {
      position: absolute;
      inset: 0;
      background: rgba(42, 34, 26, 0);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.32s var(--ease-out-expo);
    }
    @media (hover: hover) and (pointer: fine) {
      .card:hover .card-overlay { background: rgba(42, 34, 26, 0.4); }
    }
    .overlay-btn {
      color: var(--paper);
      font-family: var(--font-type);
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      padding: 0.4rem 1rem;
      border: 1px solid rgba(243, 234, 214, 0.7);
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
        right: 0.75rem;
        font-family: var(--font-type);
        font-size: 0.6rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--paper);
        background: rgba(42,34,26,0.52);
        padding: 2px 0.4rem;
        z-index: 2;
        pointer-events: none;
      }
    }

    /* --- Body (polaroid caption area) --- */
    .card-body {
      padding: 0.875rem 0.25rem 0.25rem;
      border-top: 1px dashed rgba(120,90,40,0.4);
      margin-top: 0.875rem;
    }
    .category {
      display: inline-block;
      font-family: var(--font-type);
      font-size: 0.58rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--terracotta-2);
      margin-bottom: 0.375rem;
    }
    .title {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--ink);
      margin: 0 0 0.25rem;
      line-height: 1.15;
    }
    .card.featured .title { font-size: 1.5rem; font-weight: 700; }
    .excerpt {
      font-family: var(--font-hand);
      font-size: 1.1rem;
      color: var(--ink-mute);
      line-height: 1.3;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .card.featured .excerpt { -webkit-line-clamp: 3; }
    .meta {
      display: flex;
      gap: 0.75rem;
      margin-top: 0.625rem;
      padding-top: 0.5rem;
      border-top: 1px dotted var(--rule);
      font-family: var(--font-type);
      font-size: 0.72rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--ink-mute);
      align-items: center;
    }
    .meta-item { display: flex; align-items: center; gap: 0.2rem; }
    .meta-item svg { width: 0.8rem; height: 0.8rem; flex-shrink: 0; }
    .difficulty {
      margin-left: auto;
      font-size: 0.68rem;
      padding: 2px 0.5rem;
      border: 1px dashed var(--rule-strong);
      color: var(--ink-mute);
      background: transparent;
    }
    .diff-easy   { border-color: var(--olive);       color: var(--olive-2); }
    .diff-medium { border-color: var(--mustard);      color: #7a5210; }
    .diff-hard   { border-color: var(--terracotta);   color: var(--terracotta-2); }

    /* --- Numbered badge --- */
    .card-num {
      position: absolute;
      top: 0.75rem;
      left: 1rem;
      font-family: var(--font-display);
      font-style: italic;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      color: rgba(243, 234, 214, 0.92);
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
      padding: 0;
      background: #f8efd8;
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
      padding: 1rem 1.25rem;
      margin-top: 0;
      border-top: none;
      background: linear-gradient(180deg, transparent 0%, rgba(26,18,10,0.3) 35%, rgba(26,18,10,0.86) 100%);
      color: var(--paper);
      z-index: 2;
    }
    .card.overlay .category { color: rgba(243,234,214,0.75); }
    .card.overlay .title { color: var(--paper); font-size: 1.1rem; }
    .card.overlay.featured .title { font-size: clamp(1.5rem, 2.5vw, 2.1rem); line-height: 1.08; }
    .card.overlay .excerpt { color: rgba(243,234,214,0.85); }
    .card.overlay .meta {
      border-top-color: rgba(243,234,214,0.2);
      color: rgba(243,234,214,0.85);
    }
    .card.overlay .difficulty { border-color: rgba(243,234,214,0.3); color: var(--paper); }

    /* --- Compact (horizontal) variant --- */
    .card.compact {
      display: flex;
      flex-direction: row;
      padding: 0.75rem;
    }
    .card.compact .card-image {
      aspect-ratio: unset;
      width: 100px;
      min-height: 100%;
      flex-shrink: 0;
    }
    .card.compact .card-body {
      padding: 0.25rem 0.25rem 0.25rem 0.875rem;
      margin-top: 0;
      border-top: none;
      border-left: 1px dashed var(--rule);
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.125rem;
    }
    .card.compact .category { margin-bottom: 0; }
    .card.compact .title { font-size: 0.9rem; margin: 0; }
    .card.compact .meta { margin-top: 0.375rem; padding-top: 0.375rem; font-size: 0.72rem; gap: 0.5rem; }

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

    @media (max-width: 640px) {
      .meta { font-size: 0.72rem; gap: 0.6rem; }
      .meta-item svg { width: 0.75rem; height: 0.75rem; }
    }
    @media (max-width: 500px) {
      .card.compact .card-image { width: 80px; }
      .card.compact .card-body { padding-left: 0.75rem; }
      .card.compact .title { font-size: 0.85rem; }
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
