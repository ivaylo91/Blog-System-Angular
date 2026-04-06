import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../models/models';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a [routerLink]="['/recipes', recipe.slug]" class="card" [class.featured]="featured"
       [style.animation-delay]="index * 70 + 'ms'">
      <div class="card-image" [style.background]="gradient">
        @if (recipe.hero_image) {
          <img [src]="recipe.hero_image" [alt]="recipe.title"
               [loading]="priority ? 'eager' : 'lazy'"
               [attr.fetchpriority]="priority ? 'high' : null" />
        }
        <div class="card-overlay">
          <span class="overlay-btn">Виж рецептата →</span>
        </div>
      </div>
      <div class="card-body">
        @if (recipe.category) {
          <span class="category">{{ recipe.category.name }}</span>
        }
        <h3 class="title">{{ recipe.title }}</h3>
        <p class="excerpt">{{ recipe.excerpt }}</p>
        <div class="meta">
          <span>⏱ {{ recipe.prep_minutes + recipe.cook_minutes }} мин</span>
          <span>👥 {{ recipe.servings }} порции</span>
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
      transition: transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1), box-shadow 0.35s ease;
      animation: fadeInUp 0.55s both;
    }
    .card:hover {
      transform: translateY(-7px);
      box-shadow: 0 24px 56px rgba(28, 25, 23, 0.14);
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
      transition: transform 0.55s ease;
    }
    .card:hover .card-image img {
      transform: scale(1.07);
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
      color: #78716c;
    }
    .difficulty {
      margin-left: auto;
      font-weight: 600;
      color: #44403c;
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(22px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeCardComponent {
  @Input({ required: true }) recipe!: Recipe;
  @Input() priority = false;
  @Input() index = 0;
  @Input() featured = false;

  get gradient(): string {
    const from = this.recipe.hero_palette_from || '#d6c5a5';
    const via  = this.recipe.hero_palette_via  || '#e8dcc8';
    const to   = this.recipe.hero_palette_to   || '#f5f0e8';
    return `linear-gradient(135deg, ${from}, ${via}, ${to})`;
  }
}
