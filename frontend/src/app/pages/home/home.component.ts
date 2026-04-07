import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { Recipe } from '../../models/models';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../services/seo.service';
import { PerfService } from '../../services/perf.service';

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
            <button type="submit" class="search-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <span>Търси</span>
            </button>
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
            <a class="hero-image-wrap" [routerLink]="['/recipes', featured[0].slug]">
              <img [src]="featured[0].hero_image" [alt]="featured[0].title"
                   fetchpriority="high" loading="eager" class="hero-img" />
              <div class="hero-img-badge">
                <span class="badge-label">Избрана рецепта</span>
                <span class="badge-title">{{ featured[0].title }}</span>
                <span class="badge-arrow">Виж рецептата →</span>
              </div>
            </a>
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
          <div class="mag-layout">
            <div class="mag-hero">
              <div class="skeleton-card">
                <div class="sk-img sk-img-hero"></div>
                <div class="sk-body">
                  <div class="sk-line sk-short"></div>
                  <div class="sk-line sk-long"></div>
                  <div class="sk-line sk-medium"></div>
                </div>
              </div>
            </div>
            <div class="mag-side">
              @for (s of [0,1,2]; track s) {
                <div class="skeleton-card skeleton-side">
                  <div class="sk-img sk-img-side"></div>
                  <div class="sk-body sk-body-sm">
                    <div class="sk-line sk-short"></div>
                    <div class="sk-line sk-long"></div>
                  </div>
                </div>
              }
            </div>
          </div>
          <div class="mag-bottom-grid">
            @for (s of [0,1,2,3]; track s) {
              <div class="skeleton-card">
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
          <!-- Magazine top: hero left (2/3) + 3 stacked right (1/3) -->
          <div class="mag-layout">
            @if (featured.length > 0) {
              <div class="mag-hero">
                <app-recipe-card [recipe]="featured[0]" [priority]="true" [index]="0" [featured]="true" />
              </div>
            }
            <div class="mag-side">
              @for (recipe of featured.slice(1, 4); track recipe.id; let i = $index) {
                <app-recipe-card [recipe]="recipe" [index]="i + 1" [compact]="true" />
              }
            </div>
          </div>
          <!-- Bottom row: remaining cards in 4-col grid -->
          @if (featured.length > 4) {
            <div class="mag-bottom-grid">
              @for (recipe of featured.slice(4); track recipe.id; let i = $index) {
                <app-recipe-card [recipe]="recipe" [index]="i + 4" />
              }
            </div>
          }
        }

        <div class="cta">
          <a routerLink="/recipes" class="cta-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h7"/></svg>
            Разгледай всички рецепти
          </a>
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
      display: flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.85rem 1.5rem;
      background: #4a7c59;
      color: white;
      border: none;
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background 0.2s;
      white-space: nowrap;
    }
    .search-btn svg { width: 1rem; height: 1rem; flex-shrink: 0; }
    .search-btn:hover { background: #3a6347; }
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
      color: #57534e;
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
      display: block;
      text-decoration: none;
      cursor: pointer;
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }
    .hero-image-wrap:hover {
      transform: translateY(-4px);
      box-shadow: 0 40px 100px rgba(0,0,0,0.24);
    }
    .hero-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    .hero-image-wrap:hover .hero-img {
      transform: scale(1.04);
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
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      transition: background 0.2s;
    }
    .hero-image-wrap:hover .hero-img-badge {
      background: rgba(255,255,255,0.98);
    }
    .badge-label {
      display: block;
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #78350f;
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
    .badge-arrow {
      display: block;
      font-size: 0.78rem;
      font-weight: 600;
      color: #78350f;
      margin-top: 0.1rem;
      opacity: 0;
      transform: translateX(-6px);
      transition: opacity 0.25s ease, transform 0.25s ease;
    }
    .hero-image-wrap:hover .badge-arrow {
      opacity: 1;
      transform: translateX(0);
    }
    .hero-skeleton {
      border-radius: 1.5rem;
      aspect-ratio: 4/3;
      background: #f0ede8;
      position: relative;
      overflow: hidden;
    }
    .hero-skeleton::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%);
      transform: translateX(-100%);
      animation: shimmer 1.5s ease-in-out infinite;
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

    /* Magazine top row */
    .mag-layout {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 1.25rem;
      align-items: start;
    }
    .mag-hero { min-width: 0; }
    .mag-side {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      min-width: 0;
    }
    /* Bottom row */
    .mag-bottom-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
      margin-top: 1.25rem;
    }

    /* Skeleton cards — shimmer uses transform:translateX (composited, no repaint) */
    .skeleton-card {
      border-radius: 1.25rem;
      overflow: hidden;
      background: #fff;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .skeleton-side { display: flex; flex-direction: row; border-radius: 1rem; }
    .sk-img {
      aspect-ratio: 4/3;
      background: #f0ede8;
      position: relative;
      overflow: hidden;
      flex-shrink: 0;
    }
    .sk-img::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%);
      transform: translateX(-100%);
      animation: shimmer 1.5s ease-in-out infinite;
    }
    .sk-img-hero { aspect-ratio: 3/2; }
    .sk-img-side { width: 110px; aspect-ratio: unset; min-height: 90px; }
    .sk-body { padding: 1.2rem; display: flex; flex-direction: column; gap: 0.6rem; flex: 1; }
    .sk-body-sm { padding: 0.85rem; gap: 0.45rem; }
    .sk-line {
      height: 0.85rem;
      border-radius: 9999px;
      background: #f0ede8;
      position: relative;
      overflow: hidden;
    }
    .sk-line::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%);
      transform: translateX(-100%);
      animation: shimmer 1.5s ease-in-out infinite;
    }
    .sk-short  { width: 35%; }
    .sk-long   { width: 80%; }
    .sk-medium { width: 55%; }
    @keyframes shimmer {
      from { transform: translateX(-100%); }
      to   { transform: translateX(100%); }
    }

    .cta { text-align: center; margin-top: 3rem; }
    .cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.85rem 2.25rem;
      background: #4a7c59;
      color: #ffffff;
      border-radius: 9999px;
      font-weight: 600;
      font-size: 0.95rem;
      text-decoration: none;
      letter-spacing: 0.01em;
      transition: background 0.2s, box-shadow 0.2s;
      box-shadow: 0 4px 20px rgba(74,124,89,0.3);
    }
    .cta-btn svg { width: 1.1rem; height: 1.1rem; flex-shrink: 0; }
    .cta-btn:hover {
      background: #3a6347;
      box-shadow: 0 8px 28px rgba(74,124,89,0.4);
    }

    @media (max-width: 900px) {
      .hero { padding: 3rem 1.25rem 2.5rem; }
      .hero-inner { grid-template-columns: 1fr; gap: 2rem; }
      h1 { font-size: 2.6rem; }
      .hero-visual { order: -1; }
      .hero-image-wrap { aspect-ratio: 16/9; border-radius: 1.25rem; }
      .hero-skeleton { aspect-ratio: 16/9; border-radius: 1.25rem; }
      .search-form { max-width: 100%; }
      .mag-layout { grid-template-columns: 1fr; }
      .mag-side { flex-direction: column; gap: 1rem; }
      .mag-bottom-grid { grid-template-columns: repeat(2, 1fr); }
      .featured { padding: 3rem 1.25rem 4rem; }
    }
    @media (max-width: 640px) {
      .hero { padding: 1.75rem 1rem 1.75rem; }
      .hero-inner { gap: 1.5rem; }
      h1 { font-size: 1.9rem; }
      .hero-subtitle { font-size: 0.9rem; margin-bottom: 1.25rem; }
      .hero-eyebrow { font-size: 0.68rem; margin-bottom: 0.75rem; }
      .search-form { max-width: 100%; border-radius: 0.75rem; }
      .search-input { padding: 0.75rem 1rem; font-size: 0.9rem; }
      .search-btn { padding: 0.75rem 1rem; font-size: 0.85rem; }
      .hero-stats { gap: 1rem; margin-top: 1.25rem; }
      .stat strong { font-size: 0.95rem; }
      .stat span { font-size: 0.7rem; }
      .stat-divider { height: 1.5rem; }
      .hero-image-wrap { aspect-ratio: 4/3; border-radius: 1rem; box-shadow: 0 16px 40px rgba(0,0,0,0.14); }
      .hero-img-badge { bottom: 0.75rem; left: 0.75rem; right: 0.75rem; padding: 0.6rem 0.75rem; }
      .badge-title { font-size: 0.85rem; }
      .section-heading { flex-direction: row; align-items: baseline; justify-content: space-between; }
      .section-title { font-size: 1.5rem; }
      .mag-layout { grid-template-columns: 1fr; }
      .mag-side { flex-direction: column; gap: 1rem; }
      .mag-bottom-grid { grid-template-columns: 1fr; gap: 1rem; }
      .featured { padding: 2rem 1rem 3rem; }
      .cta { margin-top: 1.75rem; }
      .cta-btn { width: 100%; justify-content: center; padding: 0.85rem 1.5rem; box-sizing: border-box; }
    }
    @media (max-width: 400px) {
      h1 { font-size: 1.65rem; }
      .hero-eyebrow { font-size: 0.62rem; }
      .hero-stats { gap: 0.6rem; }
      .stat-divider { display: none; }
      .search-btn span { display: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private recipeService = inject(RecipeService);
  private router = inject(Router);
  private seo = inject(SeoService);
  private cdr = inject(ChangeDetectorRef);
  private perf = inject(PerfService);

  featured: Recipe[] = [];
  searchQuery = '';
  loading = true;
  skeletons = [0, 1, 2, 3, 4, 5, 6];

  ngOnInit(): void {
    this.perf.mark('home_start');
    this.seo.set({
      title: 'Начало',
      description: 'Традиционни български рецепти, споделени с любов. Открий лесни и вкусни ястия за всеки повод в кулинарния блог на Иво.',
    });
    this.recipeService.getFeaturedRecipes().subscribe({
      next: (recipes) => {
        this.featured = recipes;
        this.loading = false;
        this.cdr.markForCheck();
        this.perf.mark('home_featured_ready');
        this.perf.measure('home_featured_load', 'home_start', 'home_featured_ready');
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
