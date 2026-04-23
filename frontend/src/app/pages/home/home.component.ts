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
              aria-label="Търси рецепта"
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
          <div class="hero-frame">
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
                <svg viewBox="0 0 64 64" fill="none" stroke="#c4b49a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="32" cy="34" rx="20" ry="12"/><path d="M12 34c0-6.6 9-12 20-12s20 5.4 20 12"/><path d="M22 22v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><line x1="32" y1="14" x2="32" y2="10"/><line x1="24" y1="15" x2="22" y2="11"/><line x1="40" y1="15" x2="42" y2="11"/></svg>
              </div>
            }
          </div>
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
            @for (s of [0,1,2]; track s) {
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
            Разгледай всички рецепти
            <span class="cta-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* ===== HERO ===== */
    .hero {
      background-color: var(--clr-surface-alt);
      background-image: url('/backgrounds/cooking-pattern.svg');
      background-size: 500px;
      background-repeat: repeat;
      padding: clamp(2.5rem, 6vw, 5rem) 1.5rem clamp(2.5rem, 5vw, 4.5rem);
      border-bottom: 1px solid var(--clr-border-faint);
    }
    .hero-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 55fr 45fr;
      gap: clamp(2rem, 5vw, 5rem);
      align-items: center;
    }
    .hero-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--clr-green-text);
      background: var(--clr-green-bg);
      padding: 0.3rem 0.9rem;
      border-radius: 9999px;
      margin-bottom: 1.5rem;
    }
    h1 {
      font-family: var(--font-display);
      font-size: clamp(2.4rem, 5.5vw, 4.5rem);
      font-weight: 800;
      color: var(--clr-text);
      line-height: 1.05;
      margin: 0 0 1.4rem;
      letter-spacing: -0.025em;
    }
    h1 em {
      font-style: italic;
      color: var(--clr-brand);
      font-weight: 800;
    }
    .hero-subtitle {
      color: var(--clr-text-muted);
      font-size: 1.1rem;
      line-height: 1.75;
      margin: 0 0 2.25rem;
      font-weight: 400;
      max-width: 50ch;
    }
    .search-form {
      display: flex;
      border-radius: 0.875rem;
      overflow: hidden;
      box-shadow: var(--shadow-md);
      border: 1.5px solid var(--clr-border);
      max-width: 440px;
      background: var(--clr-surface);
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .search-form:focus-within {
      border-color: var(--clr-brand);
      box-shadow: var(--shadow-md), 0 0 0 3px color-mix(in oklch, var(--clr-brand) 15%, transparent);
    }
    .search-input {
      flex: 1;
      padding: 0.9rem 1.25rem;
      border: none;
      font-size: 0.95rem;
      outline: none;
      background: transparent;
      color: var(--clr-text);
    }
    .search-input::placeholder { color: var(--clr-text-faint); }
    .search-btn {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.9rem 1.5rem;
      background: var(--clr-green);
      color: #fff;
      border: none;
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background 0.2s;
      white-space: nowrap;
      touch-action: manipulation;
    }
    .search-btn svg { width: 1rem; height: 1rem; flex-shrink: 0; }
    .search-btn:hover { background: var(--clr-green-dark); }
    .search-btn:active { transform: scale(0.97); }
    .hero-stats {
      display: flex;
      align-items: center;
      gap: 1.75rem;
      margin-top: 2.5rem;
    }
    .stat {
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
    }
    .stat strong {
      font-family: var(--font-display);
      font-size: 1.6rem;
      font-weight: 800;
      color: var(--clr-text);
      line-height: 1;
      letter-spacing: -0.02em;
    }
    .stat span {
      font-size: 0.68rem;
      color: var(--clr-text-faint);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    .stat-divider {
      width: 1px;
      height: 2.25rem;
      background: var(--clr-border);
      flex-shrink: 0;
    }

    /* Hero visual — double-bezel (outer shell + inner core) */
    .hero-visual { position: relative; }
    .hero-frame {
      padding: 7px;
      background: color-mix(in oklch, var(--clr-brand) 7%, var(--clr-bg));
      border-radius: 2rem;
      border: 1px solid var(--clr-border);
      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1), var(--shadow-sm);
    }
    .hero-image-wrap {
      position: relative;
      border-radius: calc(2rem - 7px);
      overflow: hidden;
      box-shadow: var(--shadow-xl);
      aspect-ratio: 4/3;
      display: block;
      text-decoration: none;
      cursor: pointer;
      transition: box-shadow 0.3s var(--ease-out-expo), transform 0.3s var(--ease-out-expo);
    }
    .hero-image-wrap:hover {
      transform: translateY(-4px);
      box-shadow: 0 36px 90px rgba(0,0,0,0.22);
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
      background: color-mix(in oklch, var(--clr-surface) 92%, transparent);
      backdrop-filter: blur(10px);
      border-radius: 0.875rem;
      padding: 0.75rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      transition: background 0.2s;
    }
    .hero-image-wrap:hover .hero-img-badge {
      background: color-mix(in oklch, var(--clr-surface) 98%, transparent);
    }
    .badge-label {
      display: block;
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--clr-brand);
    }
    .badge-title {
      display: block;
      font-family: var(--font-display);
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--clr-text);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.2;
    }
    .badge-arrow {
      display: block;
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--clr-brand);
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
      border-radius: calc(2rem - 7px);
      aspect-ratio: 4/3;
      background: var(--clr-skeleton);
      position: relative;
      overflow: hidden;
    }
    .hero-skeleton::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent 0%, var(--clr-skeleton-shine) 50%, transparent 100%);
      transform: translateX(-100%);
      animation: shimmer 1.5s linear infinite;
    }
    .hero-placeholder {
      border-radius: calc(2rem - 7px);
      aspect-ratio: 4/3;
      background: var(--clr-skeleton);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .hero-placeholder svg { width: 5rem; height: 5rem; }

    /* ===== BENTO GRID ===== */
    .featured { padding: clamp(3rem, 6vw, 5.5rem) 1.5rem clamp(3rem, 5vw, 5rem); background: var(--clr-surface); }
    .section-inner { max-width: 1200px; margin: 0 auto; }
    .section-heading {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 2.5rem;
      gap: 1rem;
    }
    .section-title {
      font-family: var(--font-display);
      font-size: clamp(1.6rem, 3vw, 2.4rem);
      font-weight: 800;
      color: var(--clr-text);
      margin: 0;
      letter-spacing: -0.025em;
      line-height: 1.1;
      position: relative;
      padding-bottom: 0.8rem;
    }
    .section-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 2.75rem;
      height: 3px;
      background: var(--clr-brand);
      border-radius: 2px;
    }
    .section-link {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--clr-brand);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      transition: gap 0.25s cubic-bezier(0.25, 1, 0.5, 1);
      white-space: nowrap;
      flex-shrink: 0;
      padding-bottom: 0.8rem;
    }
    .section-link:hover { gap: 0.6rem; }

    /* Magazine top row */
    .mag-layout {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 1.5rem;
      align-items: start;
    }
    .mag-hero { min-width: 0; }
    .mag-side {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      min-width: 0;
    }
    /* Bottom row — intentionally more space above to signal a tier break */
    .mag-bottom-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin-top: 2.5rem;
    }

    /* Skeleton cards */
    .skeleton-card {
      border-radius: 1.25rem;
      overflow: hidden;
      background: var(--clr-surface);
      box-shadow: var(--shadow-sm);
    }
    .skeleton-side { display: flex; flex-direction: row; border-radius: 1rem; }
    .sk-img {
      aspect-ratio: 4/3;
      background: var(--clr-skeleton);
      position: relative;
      overflow: hidden;
      flex-shrink: 0;
    }
    .sk-img::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent 0%, var(--clr-skeleton-shine) 50%, transparent 100%);
      transform: translateX(-100%);
      animation: shimmer 1.5s linear infinite;
    }
    .sk-img-hero { aspect-ratio: 3/2; }
    .sk-img-side { width: 110px; aspect-ratio: unset; min-height: 90px; }
    .sk-body { padding: 1.2rem; display: flex; flex-direction: column; gap: 0.6rem; flex: 1; }
    .sk-body-sm { padding: 0.85rem; gap: 0.45rem; }
    .sk-line {
      height: 0.85rem;
      border-radius: 9999px;
      background: var(--clr-skeleton);
      position: relative;
      overflow: hidden;
    }
    .sk-line::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent 0%, var(--clr-skeleton-shine) 50%, transparent 100%);
      transform: translateX(-100%);
      animation: shimmer 1.5s linear infinite;
    }
    .sk-short  { width: 35%; }
    .sk-long   { width: 80%; }
    .sk-medium { width: 55%; }
    @keyframes shimmer {
      from { transform: translateX(-100%); }
      to   { transform: translateX(100%); }
    }

    .cta { text-align: center; margin-top: 3.5rem; }
    .cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.875rem 0.875rem 0.875rem 1.875rem;
      background: var(--clr-green);
      color: #fff;
      border-radius: 9999px;
      font-weight: 600;
      font-size: 0.95rem;
      text-decoration: none;
      letter-spacing: 0.01em;
      transition: background 0.25s var(--ease-out-expo), box-shadow 0.25s var(--ease-out-expo), transform 0.25s var(--ease-out-expo);
      box-shadow: 0 4px 20px color-mix(in oklch, var(--clr-green) 30%, transparent);
      touch-action: manipulation;
    }
    .cta-icon {
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.18);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: transform 0.3s var(--ease-out-expo), background 0.2s;
    }
    .cta-icon svg { width: 1rem; height: 1rem; }
    .cta-btn:hover {
      background: var(--clr-green-dark);
      box-shadow: 0 8px 28px color-mix(in oklch, var(--clr-green) 40%, transparent);
      transform: translateY(-2px);
    }
    .cta-btn:hover .cta-icon {
      transform: translateX(3px) translateY(-1px) scale(1.08);
      background: rgba(255, 255, 255, 0.25);
    }
    .cta-btn:active { transform: translateY(0) scale(0.98); transition-duration: 0.08s; }

    @media (max-width: 900px) {
      .hero-inner { grid-template-columns: 1fr; gap: 2rem; }
      .hero-visual { order: -1; }
      .hero-image-wrap { aspect-ratio: 16/9; }
      .hero-skeleton { aspect-ratio: 16/9; }
      .search-form { max-width: 100%; }
      .mag-layout { grid-template-columns: 1fr; }
      .mag-side { flex-direction: column; gap: 1rem; }
      .mag-bottom-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 640px) {
      .hero-inner { gap: 1.5rem; }
      .hero-subtitle { font-size: 1rem; margin-bottom: 1.5rem; }
      .search-form { max-width: 100%; border-radius: 0.75rem; }
      .search-input { padding: 0.75rem 1rem; font-size: 0.9rem; }
      .search-btn { padding: 0.75rem 1rem; font-size: 0.85rem; }
      .hero-stats { gap: 1.25rem; margin-top: 1.75rem; }
      .stat strong { font-size: 1.25rem; }
      .stat span { font-size: 0.65rem; }
      .stat-divider { height: 1.75rem; }
      .hero-image-wrap { aspect-ratio: 4/3; }
      .hero-frame { border-radius: 1.5rem; }
      .hero-image-wrap, .hero-skeleton, .hero-placeholder { border-radius: calc(1.5rem - 7px); }
      .hero-img-badge { bottom: 0.75rem; left: 0.75rem; right: 0.75rem; padding: 0.65rem 0.875rem; }
      .badge-title { font-size: 0.95rem; }
      .section-title::after { width: 2rem; }
      .mag-layout { grid-template-columns: 1fr; }
      .mag-side { flex-direction: column; gap: 1rem; }
      .mag-bottom-grid { grid-template-columns: 1fr; gap: 1rem; }
      .cta-btn { width: 100%; justify-content: center; box-sizing: border-box; }
    }
    @media (max-width: 400px) {
      .hero-stats { gap: 0.75rem; }
      .stat strong { font-size: 1.1rem; }
      .stat-divider { display: none; }
      .search-btn span { display: none; }
    }

    @media (prefers-reduced-motion: reduce) {
      .hero-image-wrap { transition: box-shadow 0.2s; }
      .hero-image-wrap:hover { transform: none; }
      .hero-img { transition: none; }
      .hero-image-wrap:hover .hero-img { transform: none; }
      .badge-arrow { transition: opacity 0.15s; transform: none !important; }
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
