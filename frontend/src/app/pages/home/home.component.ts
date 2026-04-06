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
    <!-- HERO: split layout -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-content">
          <span class="hero-eyebrow">Добре дошли</span>
          <h1>Кулинарният<br/><em>блог на Иво</em></h1>
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
          <div class="hero-stats">
            <div class="stat"><strong>100+</strong><span>Рецепти</span></div>
            <div class="stat-divider"></div>
            <div class="stat"><strong>5★</strong><span>Оценени</span></div>
            <div class="stat-divider"></div>
            <div class="stat"><strong>Безплатно</strong><span>Завинаги</span></div>
          </div>
        </div>
        <div class="hero-visual">
          @if (featured.length > 0 && featured[0].hero_image) {
            <div class="hero-image-wrap">
              <img [src]="featured[0].hero_image" [alt]="featured[0].title"
                   fetchpriority="high" loading="eager" class="hero-img" />
              <div class="hero-img-badge">
                <span class="badge-label">Избрана рецепта</span>
                <span class="badge-title">{{ featured[0].title }}</span>
              </div>
            </div>
          } @else if (loading) {
            <div class="hero-skeleton"></div>
          } @else {
            <div class="hero-placeholder">
              <span>🍲</span>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- FEATURED: bento grid -->
    <section class="featured">
      <div class="section-inner">
        <div class="section-heading">
          <h2 class="section-title">Избрани рецепти</h2>
          <a routerLink="/recipes" class="section-link">Виж всички →</a>
        </div>

        @if (loading) {
          <div class="bento-grid">
            @for (s of skeletons; track s) {
              <div class="skeleton-card" [class.skeleton-large]="s === 0">
                <div class="sk-img"></div>
                <div class="sk-body">
                  <div class="sk-line sk-short"></div>
                  <div class="sk-line sk-long"></div>
                  <div class="sk-line sk-medium"></div>
                </div>
              </div>
            }
          </div>
        } @else {
          <div class="bento-grid">
            @for (recipe of featured; track recipe.id; let i = $index) {
              <div class="bento-cell" [class.bento-large]="i === 0">
                <app-recipe-card [recipe]="recipe" [priority]="i === 0"
                                 [index]="i" [featured]="i === 0" />
              </div>
            }
          </div>
        }

        <div class="cta">
          <a routerLink="/recipes" class="cta-btn">Разгледай всички рецепти</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* ===== HERO ===== */
    .hero {
      background: #faf7f4;
      padding: 4rem 1.5rem 3.5rem;
      border-bottom: 1px solid rgba(0,0,0,0.06);
    }
    .hero-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }
    .hero-eyebrow {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: #2d6a4f;
      background: #d8f3dc;
      padding: 0.3rem 0.8rem;
      border-radius: 9999px;
      margin-bottom: 1.1rem;
    }
    h1 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 3.4rem;
      color: #1c1917;
      line-height: 1.12;
      margin: 0 0 1.1rem;
      letter-spacing: -0.02em;
    }
    h1 em {
      font-style: italic;
      color: #78350f;
    }
    .hero-subtitle {
      color: #57534e;
      font-size: 1.05rem;
      line-height: 1.75;
      margin: 0 0 2rem;
      font-weight: 300;
    }
    .search-form {
      display: flex;
      border-radius: 0.875rem;
      overflow: hidden;
      box-shadow: 0 4px 24px rgba(0,0,0,0.1);
      border: 1.5px solid rgba(0,0,0,0.1);
      max-width: 440px;
      background: #fff;
    }
    .search-input {
      flex: 1;
      padding: 0.85rem 1.25rem;
      border: none;
      font-size: 0.95rem;
      outline: none;
      background: transparent;
      color: #1c1917;
    }
    .search-btn {
      padding: 0.85rem 1.5rem;
      background: #1c1917;
      color: white;
      border: none;
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background 0.2s;
      white-space: nowrap;
    }
    .search-btn:hover { background: #44403c; }
    .hero-stats {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-top: 2rem;
    }
    .stat {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
    }
    .stat strong {
      font-size: 1.05rem;
      font-weight: 700;
      color: #1c1917;
    }
    .stat span {
      font-size: 0.75rem;
      color: #78716c;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .stat-divider {
      width: 1px;
      height: 2rem;
      background: rgba(0,0,0,0.1);
    }

    /* Hero visual */
    .hero-visual { position: relative; }
    .hero-image-wrap {
      position: relative;
      border-radius: 1.5rem;
      overflow: hidden;
      box-shadow: 0 32px 80px rgba(0,0,0,0.18);
      aspect-ratio: 4/3;
    }
    .hero-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .hero-img-badge {
      position: absolute;
      bottom: 1.25rem;
      left: 1.25rem;
      right: 1.25rem;
      background: rgba(255,255,255,0.92);
      backdrop-filter: blur(10px);
      border-radius: 0.875rem;
      padding: 0.75rem 1rem;
    }
    .badge-label {
      display: block;
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #78350f;
      margin-bottom: 0.2rem;
    }
    .badge-title {
      display: block;
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 0.95rem;
      font-weight: 600;
      color: #1c1917;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .hero-skeleton {
      border-radius: 1.5rem;
      aspect-ratio: 4/3;
      background: linear-gradient(90deg, #f0ede8 25%, #e8e3dc 50%, #f0ede8 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    .hero-placeholder {
      border-radius: 1.5rem;
      aspect-ratio: 4/3;
      background: #f0ede8;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 5rem;
    }

    /* ===== BENTO GRID ===== */
    .featured { padding: 4rem 1.5rem 5rem; background: #fff; }
    .section-inner { max-width: 1200px; margin: 0 auto; }
    .section-heading {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 2rem;
    }
    .section-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 2rem;
      color: #1c1917;
      margin: 0;
      letter-spacing: -0.02em;
    }
    .section-link {
      font-size: 0.875rem;
      font-weight: 600;
      color: #78350f;
      text-decoration: none;
    }
    .section-link:hover { text-decoration: underline; }

    .bento-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
      gap: 1.25rem;
    }
    .bento-cell { min-width: 0; }
    .bento-large {
      grid-column: 1 / 3;
    }

    /* Skeleton cards */
    .skeleton-card {
      border-radius: 1.25rem;
      overflow: hidden;
      background: #fff;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .skeleton-card.skeleton-large { grid-column: 1 / 3; }
    .sk-img {
      aspect-ratio: 4/3;
      background: linear-gradient(90deg, #f0ede8 25%, #e8e3dc 50%, #f0ede8 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    .skeleton-card.skeleton-large .sk-img { aspect-ratio: 16/9; }
    .sk-body { padding: 1.2rem; display: flex; flex-direction: column; gap: 0.6rem; }
    .sk-line {
      height: 0.85rem;
      border-radius: 9999px;
      background: linear-gradient(90deg, #f0ede8 25%, #e8e3dc 50%, #f0ede8 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    .sk-short  { width: 35%; }
    .sk-long   { width: 80%; }
    .sk-medium { width: 55%; }
    @keyframes shimmer {
      from { background-position: 200% 0; }
      to   { background-position: -200% 0; }
    }

    .cta { text-align: center; margin-top: 3rem; }
    .cta-btn {
      display: inline-block;
      padding: 0.85rem 2.25rem;
      background: #1c1917;
      color: #ffffff;
      border-radius: 9999px;
      font-weight: 600;
      font-size: 0.95rem;
      text-decoration: none;
      letter-spacing: 0.01em;
      transition: background 0.2s, box-shadow 0.2s;
      box-shadow: 0 4px 20px rgba(28,25,23,0.2);
    }
    .cta-btn:hover {
      background: #44403c;
      box-shadow: 0 8px 28px rgba(28,25,23,0.3);
    }

    @media (max-width: 900px) {
      .hero-inner { grid-template-columns: 1fr; gap: 2.5rem; }
      h1 { font-size: 2.6rem; }
      .hero-visual { order: -1; }
      .bento-grid { grid-template-columns: 1fr 1fr; }
      .bento-large { grid-column: 1 / 3; }
    }
    @media (max-width: 640px) {
      h1 { font-size: 2rem; }
      .bento-grid { grid-template-columns: 1fr; }
      .bento-large { grid-column: 1; }
      .skeleton-card.skeleton-large { grid-column: 1; }
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
  loading = true;
  skeletons = [0, 1, 2];

  ngOnInit(): void {
    this.seo.set({
      title: 'Начало',
      description: 'Традиционни български рецепти, споделени с любов. Открий лесни и вкусни ястия за всеки повод в кулинарния блог на Иво.',
    });
    this.recipeService.getFeaturedRecipes().subscribe({
      next: (recipes) => {
        this.featured = recipes;
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.loading = false;
        this.cdr.markForCheck();
      },
    });
  }

  onSearch(e: Event): void {
    e.preventDefault();
    if (this.searchQuery.trim()) {
      this.router.navigate(['/recipes'], { queryParams: { q: this.searchQuery.trim() } });
    }
  }
}
