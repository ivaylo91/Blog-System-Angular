import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of, tap } from 'rxjs';
import { RecipeService } from '../../services/recipe.service';
import { SeoService } from '../../services/seo.service';
import { PerfService } from '../../services/perf.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RecipeCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <!-- ════════════════════ HERO ══════════════════════════════════════════ -->
    <section class="hero">
      <div class="hero-inner">

        <div class="hero-copy">
          <span class="eyebrow">— Домашна кухня —</span>
          <h1 class="hero-title">
            Рецепти<br>с <em>душа</em>
          </h1>
          <p class="hero-lead">
            Традиционни вкусове, предавани от поколение на поколение,
            приготвени с топлина и разказани с любов.
          </p>
          <a routerLink="/recipes" class="hero-btn">
            Разгледай рецептите
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                 stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </a>
        </div>

        <div class="hero-visual" aria-hidden="true">
          <div class="polaroid">
            @if (featured().length && featured()[0].hero_image) {
              <img [src]="featured()[0].hero_image" [alt]="featured()[0].title"
                   fetchpriority="high" loading="eager" class="polaroid-img" />
            } @else {
              <div class="polaroid-ph"></div>
            }
            <span class="polaroid-cap">{{ featured()[0]?.title || 'Домашна кухня' }}</span>
          </div>
          <span class="hero-annotation" aria-hidden="true">~ рецепти с любов ~</span>
        </div>

      </div>
    </section>

    <!-- ════════════════════ CATEGORY STRIP ════════════════════════════════ -->
    @if (categories().length) {
      <nav class="cats" aria-label="Категории">
        <div class="cats-inner">
          <a routerLink="/recipes" class="cat-pill cat-all">Всички</a>
          @for (cat of categories().slice(0, 7); track cat.id) {
            <a [routerLink]="['/recipes']" [queryParams]="{category: cat.slug}"
               class="cat-pill">{{ cat.name }}</a>
          }
        </div>
      </nav>
    }

    <!-- ════════════════════ FEATURED RECIPES ══════════════════════════════ -->
    <section class="recipes-sec">
      <div class="sec-inner">

        <header class="sec-head">
          <span class="sec-eyebrow">ИЗБРАНИ РЕЦЕПТИ</span>
          <h2 class="sec-title">Нашите любими</h2>
          <div class="sec-rule"></div>
        </header>

        @if (loading()) {
          <div class="recipe-grid">
            @for (s of [0,1,2,3,4,5]; track s) {
              <div class="recipe-sk"></div>
            }
          </div>
        } @else if (errored()) {
          <p class="err-msg">Рецептите не могат да се заредят в момента.</p>
        } @else {
          <div class="recipe-grid">
            @for (r of featured(); track r.id; let i = $index) {
              <app-recipe-card [recipe]="r" [index]="i" [priority]="i === 0" />
            }
          </div>
          <div class="sec-footer">
            <a routerLink="/recipes" class="all-link">Виж всички рецепти →</a>
          </div>
        }

      </div>
    </section>

  `,
  styles: [`
    :host { display: block; background: var(--paper); }

    /* ═══ HERO ══════════════════════════════════════════════════════════ */
    .hero {
      padding: clamp(3rem, 8vw, 5.5rem) 0 clamp(2.5rem, 6vw, 4.5rem);
      border-bottom: 1px solid var(--rule);
    }
    .hero-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 clamp(1.5rem, 5vw, 3rem);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: clamp(2rem, 6vw, 5rem);
      align-items: center;
    }

    /* Copy column */
    .hero-copy {
      display: flex;
      flex-direction: column;
      gap: 1.375rem;
    }
    .eyebrow {
      font-family: var(--font-type);
      font-size: 0.68rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--terracotta);
    }
    .hero-title {
      font-family: var(--font-display);
      font-style: italic;
      font-size: clamp(3rem, 6vw, 4.75rem);
      font-weight: 800;
      line-height: 1.0;
      color: var(--ink);
      margin: 0;
    }
    .hero-title em {
      color: var(--terracotta);
      font-style: italic;
    }
    .hero-lead {
      font-family: var(--font-body);
      font-size: 1.05rem;
      color: var(--ink-mute);
      line-height: 1.65;
      margin: 0;
      max-width: 38ch;
    }
    .hero-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.75rem 1.75rem;
      background: var(--terracotta);
      color: var(--paper);
      font-family: var(--font-type);
      font-size: 0.68rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      text-decoration: none;
      box-shadow: var(--shadow-sm);
      transition: background 0.2s var(--ease-out-expo), transform 0.2s var(--ease-out-expo);
      align-self: flex-start;
    }
    .hero-btn svg { width: 0.85rem; height: 0.85rem; flex-shrink: 0; }
    @media (hover: hover) and (pointer: fine) {
      .hero-btn:hover { background: var(--terracotta-2); transform: translateY(-2px); }
    }
    .hero-btn:active { transform: translateY(0); }

    /* Polaroid visual column */
    .hero-visual {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 1rem;
    }
    .polaroid {
      background: #fff;
      padding: 0.875rem 0.875rem 3.5rem;
      box-shadow: var(--shadow-lg);
      transform: rotate(-2deg);
      max-width: 340px;
      width: 100%;
      transition: transform 0.45s var(--ease-out-expo);
    }
    @media (hover: hover) and (pointer: fine) {
      .hero-visual:hover .polaroid { transform: rotate(-0.5deg) translateY(-4px); }
    }
    .polaroid-img {
      width: 100%;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      display: block;
    }
    .polaroid-ph {
      width: 100%;
      aspect-ratio: 4 / 3;
      background: linear-gradient(135deg, #d9c9a3 0%, #c8b482 55%, #ddd0b8 100%);
      display: block;
    }
    .polaroid-cap {
      display: block;
      padding-top: 0.75rem;
      font-family: var(--font-hand);
      font-size: 1.05rem;
      color: var(--ink-mute);
      text-align: center;
      line-height: 1.2;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .hero-annotation {
      position: absolute;
      bottom: 0;
      right: 1.5rem;
      font-family: var(--font-hand);
      font-size: 0.9rem;
      color: var(--terracotta);
      opacity: 0.65;
      transform: rotate(3deg);
      pointer-events: none;
    }

    /* ═══ CATEGORY STRIP ════════════════════════════════════════════════ */
    .cats {
      background: var(--paper-2);
      border-top: 1px solid var(--rule);
      border-bottom: 1px solid var(--rule);
      padding: 0.75rem 0;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .cats::-webkit-scrollbar { display: none; }
    .cats-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 clamp(1.5rem, 5vw, 3rem);
      display: flex;
      gap: 0.625rem;
      align-items: center;
      white-space: nowrap;
    }
    .cat-pill {
      font-family: var(--font-type);
      font-size: 0.58rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--ink-mute);
      padding: 0.3rem 0.8rem;
      border: 1px dashed var(--rule-strong);
      text-decoration: none;
      flex-shrink: 0;
      transition: border-color 0.15s, color 0.15s, background 0.15s;
    }
    @media (hover: hover) and (pointer: fine) {
      .cat-pill:hover {
        border-color: var(--terracotta);
        color: var(--terracotta);
        background: rgba(177, 80, 45, 0.06);
      }
    }
    .cat-all {
      color: var(--terracotta);
      border-color: var(--terracotta);
    }

    /* ═══ FEATURED RECIPES SECTION ══════════════════════════════════════ */
    .recipes-sec {
      padding: clamp(3rem, 7vw, 5rem) 0;
    }
    .sec-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 clamp(1.5rem, 5vw, 3rem);
    }
    .sec-head {
      text-align: center;
      margin-bottom: clamp(2rem, 5vw, 3.5rem);
    }
    .sec-eyebrow {
      display: block;
      font-family: var(--font-type);
      font-size: 0.6rem;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: var(--terracotta);
      margin-bottom: 0.5rem;
    }
    .sec-title {
      font-family: var(--font-display);
      font-style: italic;
      font-size: clamp(1.75rem, 4vw, 2.75rem);
      font-weight: 700;
      color: var(--ink);
      margin: 0 0 1rem;
    }
    .sec-rule {
      width: 3rem;
      height: 2px;
      background: var(--terracotta);
      margin: 0 auto;
      position: relative;
    }
    .sec-rule::before,
    .sec-rule::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 2rem;
      height: 1px;
      background: var(--rule-strong);
    }
    .sec-rule::before { right: calc(100% + 0.625rem); }
    .sec-rule::after  { left:  calc(100% + 0.625rem); }

    /* Recipe grid */
    .recipe-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: clamp(1.25rem, 3vw, 2rem);
      align-items: start;
    }
    .recipe-sk {
      background: var(--paper-2);
      aspect-ratio: 3 / 4;
      animation: sk-pulse 1.6s ease-in-out infinite;
    }
    @keyframes sk-pulse {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0.55; }
    }
    .err-msg {
      text-align: center;
      font-family: var(--font-hand);
      font-size: 1.15rem;
      color: var(--ink-mute);
      padding: 3rem;
    }

    /* Section footer / all-link */
    .sec-footer {
      text-align: center;
      margin-top: clamp(2rem, 5vw, 3rem);
      padding-top: 1.5rem;
      border-top: 1px dashed var(--rule);
    }
    .all-link {
      font-family: var(--font-type);
      font-size: 0.65rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--terracotta);
      text-decoration: none;
      padding-bottom: 2px;
      border-bottom: 1px solid var(--terracotta);
      transition: color 0.15s, border-color 0.15s;
    }
    @media (hover: hover) and (pointer: fine) {
      .all-link:hover { color: var(--terracotta-2); border-color: var(--terracotta-2); }
    }

    /* ═══ RESPONSIVE ══════════════════════════════════════════════════════ */
    @media (max-width: 900px) {
      .hero-inner { grid-template-columns: 1fr; }
      .hero-visual { display: none; }
      .recipe-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 640px) {
      .cat-pill {
        padding: 0.55rem 1rem;
        min-height: 2.75rem;
        display: inline-flex;
        align-items: center;
      }
    }
    @media (max-width: 580px) {
      .recipe-grid { grid-template-columns: 1fr; }
    }
    @media (prefers-reduced-motion: reduce) {
      .polaroid, .hero-btn, .cat-pill, .all-link { transition: none; }
      .recipe-sk { animation: none; }
    }
  `],
})
export class HomeComponent {
  private recipeService = inject(RecipeService);
  private seo           = inject(SeoService);
  private perf          = inject(PerfService);

  private featuredResult = toSignal(
    this.recipeService.getFeaturedRecipes().pipe(
      tap(() => {
        this.perf.mark('home_featured_ready');
        this.perf.measure('home_featured_load', 'home_start', 'home_featured_ready');
      }),
      map(recipes => ({ kind: 'success' as const, recipes })),
      catchError(() => of({ kind: 'error' as const })),
    ),
  );

  private categoriesResult = toSignal(
    this.recipeService.getCategories().pipe(
      catchError(() => of([])),
    ),
  );

  featured   = computed(() => {
    const r = this.featuredResult();
    return r?.kind === 'success' ? r.recipes : [];
  });
  loading    = computed(() => this.featuredResult() === undefined);
  errored    = computed(() => this.featuredResult()?.kind === 'error');
  categories = computed(() => this.categoriesResult() ?? []);

  constructor() {
    this.perf.mark('home_start');
    this.seo.set({
      title: 'Начало',
      description: 'Традиционни български рецепти, споделени с любов. Открий лесни и вкусни ястия за всеки повод в кулинарния блог на Иво.',
    });
  }
}
