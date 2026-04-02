import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../models/models';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a [routerLink]="['/recipes', recipe.slug]" class="card">
      <div class="card-image" [style.background]="gradient">
        @if (recipe.hero_image) {
          <img [src]="recipe.hero_image" [alt]="recipe.title" loading="lazy" />
        }
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
      border-radius: 1.5rem;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.85);
      border: 1px solid rgba(0, 0, 0, 0.06);
      box-shadow: 0 12px 40px rgba(56, 44, 24, 0.06);
      text-decoration: none;
      color: inherit;
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 60px rgba(56, 44, 24, 0.12);
    }
    .card-image {
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .card-body { padding: 1.25rem; }
    .category {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: #92400e;
      background: #fffbeb;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      margin-bottom: 0.5rem;
    }
    .title {
      font-family: 'Georgia', serif;
      font-size: 1.25rem;
      color: #1c1917;
      margin: 0.5rem 0;
    }
    .excerpt {
      font-size: 0.875rem;
      color: #57534e;
      line-height: 1.6;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .meta {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
      font-size: 0.8rem;
      color: #78716c;
    }
    .difficulty {
      margin-left: auto;
      font-weight: 600;
    }
  `],
})
export class RecipeCardComponent {
  @Input({ required: true }) recipe!: Recipe;

  get gradient(): string {
    const from = this.recipe.hero_palette_from || '#d6c5a5';
    const via = this.recipe.hero_palette_via || '#e8dcc8';
    const to = this.recipe.hero_palette_to || '#f5f0e8';
    return `linear-gradient(135deg, ${from}, ${via}, ${to})`;
  }
}
