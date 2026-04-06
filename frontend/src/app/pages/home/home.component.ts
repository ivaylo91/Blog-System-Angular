import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { Recipe } from '../../models/models';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SeoService } from '../../services/seo.service';

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
          @for (recipe of featured; track recipe.id; let i = $index) {
            <app-recipe-card [recipe]="recipe" [priority]="i === 0" />
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
      background: linear-gradient(135deg, #f59e0b22, #fef3c7, #fff7ed);
      border-bottom: 2px solid rgba(146, 64, 14, 0.15);
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
    .accent { color: #78350f; }
    .hero-subtitle {
      color: #44403c;
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
      box-shadow: 0 8px 32px rgba(146, 64, 14, 0.2);
      border: 2px solid rgba(146, 64, 14, 0.2);
    }
    .search-input {
      flex: 1;
      padding: 0.9rem 1.5rem;
      border: none;
      border-right: 2px solid rgba(146, 64, 14, 0.2);
      border-radius: 9999px 0 0 9999px;
      font-size: 1rem;
      outline: none;
      background: #ffffff;
      color: #1c1917;
    }
    .search-input:focus { border-color: #92400e; }
    .search-btn {
      padding: 0.9rem 1.75rem;
      background: #78350f;
      color: white;
      border: none;
      border-radius: 0 9999px 9999px 0;
      font-weight: 700;
      cursor: pointer;
      transition: background 0.2s;
    }
    .search-btn:hover { background: #5c2a0b; }
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
      background: #78350f;
      color: #ffffff;
      border: 1px solid #5c2a0b;
      border-radius: 9999px;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.2s;
      box-shadow: 0 4px 16px rgba(120, 53, 15, 0.3);
    }
    .cta-btn:hover {
      background: #5c2a0b;
      box-shadow: 0 8px 24px rgba(120, 53, 15, 0.4);
    }
    @media (max-width: 640px) {
      h1 { font-size: 2rem; }
      .recipe-grid { grid-template-columns: 1fr; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private recipeService = inject(RecipeService);
  private router = inject(Router);
  private seo = inject(SeoService);
  private cdr = inject(ChangeDetectorRef);

  featured: Recipe[] = [];
  searchQuery = '';

  ngOnInit(): void {
    this.seo.set({
      title: 'Начало',
      description: 'Традиционни български рецепти, споделени с любов. Открий лесни и вкусни ястия за всеки повод в кулинарния блог на Иво.',
    });
    this.recipeService.getFeaturedRecipes().subscribe({
      next: (recipes) => { this.featured = recipes; this.cdr.markForCheck(); },
      error: (err) => console.error('Failed to load featured recipes:', err),
    });
  }

  onSearch(e: Event): void {
    e.preventDefault();
    if (this.searchQuery.trim()) {
      this.router.navigate(['/recipes'], { queryParams: { q: this.searchQuery.trim() } });
    }
  }
}
