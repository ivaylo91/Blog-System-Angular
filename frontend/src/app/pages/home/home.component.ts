import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { Recipe } from '../../models/models';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RecipeCardComponent, FormsModule],
  template: `
    <section class="hero">
      <div class="hero-inner">
        <h1>Добре дошли в<br/><span class="accent">Кулинарния блог на Иво</span></h1>
        <p class="hero-subtitle">Традиционни български рецепти, споделени с любов и внимание към всеки детайл.</p>
        <form class="search-form" (submit)="onSearch($event)">
          <input
            type="text"
            [(ngModel)]="searchQuery"
            name="q"
            placeholder="Търси рецепта..."
            class="search-input"
          />
          <button type="submit" class="search-btn">Търси</button>
        </form>
      </div>
    </section>

    <section class="featured">
      <div class="section-inner">
        <h2 class="section-title">Избрани рецепти</h2>
        <div class="recipe-grid">
          @for (recipe of featured; track recipe.id) {
            <app-recipe-card [recipe]="recipe" />
          }
        </div>
        <div class="cta">
          <a routerLink="/recipes" class="cta-btn">Виж всички рецепти →</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, #fef3c7, #fffbeb, #fff7ed);
      padding: 5rem 1.5rem;
      text-align: center;
    }
    .hero-inner { max-width: 700px; margin: 0 auto; }
    h1 {
      font-family: 'Georgia', serif;
      font-size: 2.8rem;
      color: #1c1917;
      line-height: 1.2;
      margin: 0 0 1rem;
    }
    .accent { color: #92400e; }
    .hero-subtitle {
      color: #57534e;
      font-size: 1.1rem;
      line-height: 1.7;
      margin: 0 0 2rem;
    }
    .search-form {
      display: flex;
      max-width: 500px;
      margin: 0 auto;
      border-radius: 9999px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(146, 64, 14, 0.1);
    }
    .search-input {
      flex: 1;
      padding: 0.9rem 1.5rem;
      border: 1px solid #e7e5e4;
      border-right: none;
      border-radius: 9999px 0 0 9999px;
      font-size: 1rem;
      outline: none;
    }
    .search-input:focus { border-color: #d97706; }
    .search-btn {
      padding: 0.9rem 1.75rem;
      background: #92400e;
      color: white;
      border: none;
      border-radius: 0 9999px 9999px 0;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    .search-btn:hover { background: #78350f; }
    .featured { padding: 4rem 1.5rem; }
    .section-inner { max-width: 1200px; margin: 0 auto; }
    .section-title {
      font-family: 'Georgia', serif;
      font-size: 2rem;
      color: #1c1917;
      text-align: center;
      margin: 0 0 2rem;
    }
    .recipe-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.5rem;
    }
    .cta {
      text-align: center;
      margin-top: 2.5rem;
    }
    .cta-btn {
      display: inline-block;
      padding: 0.75rem 2rem;
      background: #fffbeb;
      color: #92400e;
      border: 1px solid rgba(146, 64, 14, 0.15);
      border-radius: 9999px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s;
      box-shadow: 0 4px 16px rgba(146, 64, 14, 0.08);
    }
    .cta-btn:hover {
      background: #fef3c7;
      box-shadow: 0 8px 24px rgba(146, 64, 14, 0.12);
    }
    @media (max-width: 640px) {
      h1 { font-size: 2rem; }
      .recipe-grid { grid-template-columns: 1fr; }
    }
  `],
})
export class HomeComponent implements OnInit {
  private recipeService = inject(RecipeService);
  private router = inject(Router);

  featured: Recipe[] = [];
  searchQuery = '';

  ngOnInit(): void {
    this.recipeService.getFeaturedRecipes().subscribe(recipes => {
      this.featured = recipes;
    });
  }

  onSearch(e: Event): void {
    e.preventDefault();
    if (this.searchQuery.trim()) {
      this.router.navigate(['/recipes'], { queryParams: { q: this.searchQuery.trim() } });
    }
  }
}
