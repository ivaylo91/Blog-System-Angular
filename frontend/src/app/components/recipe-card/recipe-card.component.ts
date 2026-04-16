import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../models/models';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a [routerLink]="['/recipes', recipe.slug]" class="card"
       [class.featured]="featured" [class.compact]="compact"
       [style.animation-delay]="(index < 6 ? index : 5) * 50 + 'ms'">
      <div class="card-image" [style.background]="gradient">
        @if (recipe.hero_image) {
          <img [src]="recipe.hero_image" [alt]="recipe.title"
               [loading]="priority ? 'eager' : 'lazy'"
               [attr.fetchpriority]="priority ? 'high' : null" />
        }
        @if (!compact) {
          <div class="card-overlay">
            <span class="overlay-btn">Виж рецептата →</span>
          </div>
        }
      </div>
      <div class="card-body">
        @if (recipe.category) {
          <span class="category">{{ recipe.category.name }}</span>
        }
        <h3 class="title">{{ recipe.title }}</h3>
        @if (!compact) {
          <p class="excerpt">{{ recipe.excerpt }}</p>
        }
        <div class="meta">
          <span class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {{ recipe.prep_minutes + recipe.cook_minutes }} мин
          </span>
          @if (!compact) {
            <span class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              {{ recipe.servings }} порции
            </span>
          }
          <span class="difficulty">{{ recipe.difficulty }}</span>
        </div>
      </div>
    </a>
  `,
  styles: [`
    .card {
      display: block;
      border-radius: 1.25rem;
      overflow: hidden;
      background: #ffffff;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
      text-decoration: none;
      color: inherit;
      transition: transform 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.28s ease;
      animation: fadeInUp 0.45s both;
      touch-action: manipulation;
      cursor: pointer;
    }
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 40px rgba(28, 25, 23, 0.13);
    }

    /* --- Image --- */
    .card-image {
      aspect-ratio: 4 / 3;
      position: relative;
      overflow: hidden;
    }
    .card.featured .card-image {
      aspect-ratio: 16 / 9;
    }
    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.45s ease;
    }
    .card:hover .card-image img {
      transform: scale(1.04);
    }

    /* --- Hover overlay --- */
    .card-overlay {
      position: absolute;
      inset: 0;
      background: rgba(28, 25, 23, 0);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.35s ease;
    }
    .card:hover .card-overlay {
      background: rgba(28, 25, 23, 0.42);
    }
    .overlay-btn {
      color: #fff;
      font-weight: 600;
      font-size: 0.9rem;
      letter-spacing: 0.03em;
      padding: 0.55rem 1.2rem;
      border: 1.5px solid rgba(255, 255, 255, 0.75);
      border-radius: 9999px;
      opacity: 0;
      transform: translateY(10px);
      transition: opacity 0.3s ease, transform 0.3s ease;
      backdrop-filter: blur(4px);
    }
    .card:hover .overlay-btn {
      opacity: 1;
      transform: translateY(0);
    }

    /* --- Body --- */
    .card-body { padding: 1.2rem 1.25rem 1.25rem; }
    .category {
      display: inline-block;
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #2d6a4f;
      background: #d8f3dc;
      padding: 0.22rem 0.7rem;
      border-radius: 9999px;
      margin-bottom: 0.45rem;
    }
    .title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 1.15rem;
      color: #1c1917;
      margin: 0 0 0.45rem;
      line-height: 1.35;
    }
    .card.featured .title {
      font-size: 1.4rem;
    }
    .excerpt {
      font-size: 0.875rem;
      color: #57534e;
      line-height: 1.65;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .card.featured .excerpt {
      -webkit-line-clamp: 3;
    }
    .meta {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
      padding-top: 0.75rem;
      border-top: 1px solid rgba(0, 0, 0, 0.06);
      font-size: 0.78rem;
      color: #57534e;
    }
    .meta-item {
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
    .meta-item svg { width: 0.85rem; height: 0.85rem; flex-shrink: 0; }
    .difficulty {
      margin-left: auto;
      font-weight: 600;
      color: #44403c;
    }

    /* --- Compact (horizontal) variant --- */
    .card.compact {
      display: flex;
      flex-direction: row;
      border-radius: 1rem;
    }
    .card.compact .card-image {
      aspect-ratio: unset;
      width: 120px;
      min-height: 100%;
      flex-shrink: 0;
      border-radius: 1rem 0 0 1rem;
    }
    .card.compact .card-body {
      padding: 0.9rem 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.3rem;
    }
    .card.compact .category { margin-bottom: 0; }
    .card.compact .title { font-size: 0.95rem; margin: 0; }
    .card.compact .meta {
      margin-top: 0.5rem;
      padding-top: 0.5rem;
      font-size: 0.75rem;
      gap: 0.75rem;
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(16px); }
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
      .card.compact .card-image { width: 90px; }
      .card.compact .card-body { padding: 0.75rem 0.875rem; }
      .card.compact .title { font-size: 0.875rem; }
      .card.compact .meta { font-size: 0.7rem; gap: 0.5rem; }
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

  get gradient(): string {
    const from = this.recipe.hero_palette_from || '#d6c5a5';
    const via  = this.recipe.hero_palette_via  || '#e8dcc8';
    const to   = this.recipe.hero_palette_to   || '#f5f0e8';
    return `linear-gradient(135deg, ${from}, ${via}, ${to})`;
  }
}
