import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of, tap } from 'rxjs';
import { RecipeService } from '../../services/recipe.service';
import { SeoService } from '../../services/seo.service';
import { PerfService } from '../../services/perf.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <!-- ═══════ HERO ═══════════════════════════════════════════════ -->
    <section class="hero">
      <div class="hero-inner">

        <div class="hero-left">
          <span class="hero-eyebrow">Домашна Кухня</span>
          <h1 class="hero-heading">
            Вкусни<br>Рецепти
            <span class="hero-accent">Колекции</span>
          </h1>
          <p class="hero-sub">Традиционни ястия, приготвени с любов и внимание към всеки детайл от нашата кухня.</p>
          <div class="hero-actions">
            <a routerLink="/recipes" class="btn-primary">Разгледай рецептите</a>
            <a routerLink="/recipes" class="btn-ghost">
              <span class="btn-play" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6,3 20,12 6,21"/></svg>
              </span>
              Научи повече
            </a>
          </div>
        </div>

        <div class="hero-right">
          <div class="hero-bg-circle" aria-hidden="true"></div>
          <div class="hero-ring" aria-hidden="true"></div>
          @if (featured().length && featured()[0].hero_image) {
            <img class="hero-img" [src]="featured()[0].hero_image" [alt]="featured()[0].title"
                 fetchpriority="high" loading="eager" />
          } @else {
            <div class="hero-img hero-img-ph"></div>
          }
          <div class="hero-badge">
            <span class="badge-star">★</span>
            <span class="badge-val">4.8</span>
            <span class="badge-label">Оценка</span>
          </div>
        </div>

      </div>
    </section>

    <!-- ═══════ POPULAR RECIPES ════════════════════════════════════ -->
    <section class="popular-sec">
      <div class="s-inner">
        <h2 class="s-heading">Популярни Рецепти</h2>

        @if (loading()) {
          <div class="cards-grid">
            @for (s of [0,1,2,3]; track s) {
              <div class="card-sk"></div>
            }
          </div>
        } @else if (errored()) {
          <p class="grid-error">Рецептите не могат да се заредят в момента.</p>
        } @else {
          <div class="cards-grid">
            @for (r of featured().slice(0, 4); track r.id) {
              <a class="recipe-card" [routerLink]="['/recipes', r.slug]">
                <div class="card-img-wrap">
                  @if (r.hero_image) {
                    <img [src]="r.hero_image" [alt]="r.title" loading="lazy" />
                  } @else {
                    <div class="card-img-ph"></div>
                  }
                </div>
                <div class="card-body">
                  <h3 class="card-title">{{ r.title }}</h3>
                  <div class="card-foot">
                    <div class="card-stars" aria-label="4.5 звезди">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span class="star-dim">★</span>
                      <span class="card-score">4.5</span>
                    </div>
                    <div class="card-btn" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                           stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            }
          </div>
        }

        <div class="s-cta">
          <a routerLink="/recipes" class="btn-primary">Всички рецепти</a>
        </div>
      </div>
    </section>

    <!-- ═══════ CATEGORIES ═══════════════════════════════════════== -->
    <section class="cat-sec">
      <div class="s-inner">
        <h2 class="s-heading">Вкус на храната</h2>

        <div class="cat-grid">

          <a class="cat-item" routerLink="/recipes" [queryParams]="{q:'супа'}">
            <div class="cat-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 14h20M8 14c0 5.5 3.5 9 8 9s8-3.5 8-9"/>
                <path d="M12 10c0-2.2 1.8-4 4-4s4 1.8 4 4"/>
                <path d="M5 23h22"/>
              </svg>
            </div>
            <span>Супи</span>
          </a>

          <a class="cat-item" routerLink="/recipes" [queryParams]="{q:'десерт'}">
            <div class="cat-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round">
                <rect x="6" y="16" width="20" height="10" rx="2"/>
                <path d="M6 16c0-5.5 20-5.5 20 0"/>
                <path d="M16 8v8M12 10l4-4 4 4"/>
              </svg>
            </div>
            <span>Десерти</span>
          </a>

          <a class="cat-item" routerLink="/recipes" [queryParams]="{q:'основно'}">
            <div class="cat-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round">
                <circle cx="16" cy="16" r="11"/>
                <path d="M9 20c2-6 12-6 14 0"/>
                <circle cx="16" cy="12" r="2.5"/>
              </svg>
            </div>
            <span>Основни</span>
          </a>

          <a class="cat-item" routerLink="/recipes" [queryParams]="{q:'салата'}">
            <div class="cat-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 22s2-12 9-14c7-2 11 4 11 14"/>
                <path d="M10 16c2-4 5-5 8-3"/>
                <path d="M6 22h20"/>
              </svg>
            </div>
            <span>Салати</span>
          </a>

          <a class="cat-item" routerLink="/recipes" [queryParams]="{q:'закуска'}">
            <div class="cat-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round">
                <rect x="6" y="10" width="20" height="12" rx="4"/>
                <path d="M8 14h16M8 18h16"/>
              </svg>
            </div>
            <span>Закуски</span>
          </a>

          <a class="cat-item" routerLink="/recipes" [queryParams]="{q:'паста'}">
            <div class="cat-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 18c0 0 3 6 11 6s11-6 11-6"/>
                <path d="M5 18c0-6 4-10 11-10s11 4 11 10"/>
                <path d="M13 8c0-2 1.3-3.5 3-3.5"/>
              </svg>
            </div>
            <span>Паста</span>
          </a>

        </div>

        <div class="s-cta">
          <a routerLink="/recipes" class="btn-primary">Разгледай</a>
        </div>
      </div>
    </section>

  `,
  styles: [`

    /* ─── SHARED ──────────────────────────────────────────────── */
    .s-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 clamp(1rem, 4vw, 2.5rem);
    }
    .s-heading {
      font-family: var(--font-display);
      font-size: clamp(1.5rem, 2.8vw, 2rem);
      font-weight: 800;
      color: var(--clr-text);
      margin: 0 0 2.25rem;
      letter-spacing: -0.025em;
    }
    .s-cta {
      display: flex;
      justify-content: center;
      margin-top: 2.5rem;
    }
    .btn-primary {
      display: inline-flex;
      align-items: center;
      padding: 0.8rem 2.1rem;
      background: var(--clr-brand);
      color: #fff;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 0.9rem;
      text-decoration: none;
      transition: background 0.18s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);
      touch-action: manipulation;
    }
    .btn-primary:hover  { background: var(--clr-brand-dark); transform: translateY(-2px); }
    .btn-primary:active { transform: translateY(0); }

    /* ─── HERO ────────────────────────────────────────────────── */
    .hero {
      background: oklch(94% 0.042 55);
      padding: clamp(3.5rem, 7vw, 5.5rem) 0;
      overflow: hidden;
    }
    .hero-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 clamp(1rem, 4vw, 2.5rem);
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      align-items: center;
      gap: 3rem;
    }

    /* Left */
    .hero-eyebrow {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--clr-brand);
      margin-bottom: 1rem;
    }
    .hero-heading {
      font-family: var(--font-display);
      font-size: clamp(2.6rem, 5.5vw, 4.2rem);
      font-weight: 800;
      line-height: 1.04;
      letter-spacing: -0.03em;
      color: var(--clr-text);
      margin: 0 0 1.25rem;
    }
    .hero-accent {
      display: block;
      color: var(--clr-brand);
    }
    .hero-sub {
      font-size: 0.95rem;
      color: var(--clr-text-muted);
      line-height: 1.75;
      margin: 0 0 2rem;
      max-width: 38ch;
    }
    .hero-actions {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      flex-wrap: wrap;
    }
    .btn-ghost {
      display: inline-flex;
      align-items: center;
      gap: 0.7rem;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--clr-text);
      text-decoration: none;
      transition: color 0.18s;
    }
    .btn-ghost:hover { color: var(--clr-brand); }
    .btn-play {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background: oklch(89% 0.065 54);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--clr-brand);
      flex-shrink: 0;
      transition: background 0.18s, color 0.18s;
    }
    .btn-play svg { width: 0.6rem; height: 0.6rem; margin-left: 0.1rem; }
    .btn-ghost:hover .btn-play { background: var(--clr-brand); color: #fff; }

    /* Right: circular image */
    .hero-right {
      position: relative;
      min-height: 360px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .hero-bg-circle {
      position: absolute;
      width: 82%;
      aspect-ratio: 1;
      border-radius: 50%;
      background: oklch(87% 0.075 48);
      z-index: 0;
    }
    .hero-ring {
      position: absolute;
      top: 4%;
      right: 4%;
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 50%;
      border: 2px dashed oklch(74% 0.12 40);
      z-index: 3;
      opacity: 0.65;
    }
    .hero-img {
      position: relative;
      z-index: 2;
      width: 72%;
      aspect-ratio: 1;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: 0 24px 64px rgba(0,0,0,0.17);
    }
    .hero-img-ph { background: oklch(84% 0.07 48); }
    .hero-badge {
      position: absolute;
      bottom: 14%;
      left: 2%;
      z-index: 4;
      background: #fff;
      border-radius: 9999px;
      padding: 0.45rem 1rem;
      display: flex;
      align-items: center;
      gap: 0.35rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.13);
    }
    .badge-star  { color: oklch(72% 0.19 72); font-size: 0.85rem; }
    .badge-val   { font-size: 0.85rem; font-weight: 700; color: var(--clr-text); }
    .badge-label { font-size: 0.72rem; color: var(--clr-text-muted); font-weight: 500; }

    /* ─── POPULAR RECIPES ─────────────────────────────────────── */
    .popular-sec {
      padding: clamp(4rem, 7vw, 5.5rem) 0;
      background: oklch(100% 0 0);
    }
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.25rem;
    }
    .recipe-card {
      background: #fff;
      border-radius: 1.25rem;
      overflow: hidden;
      box-shadow: 0 2px 14px rgba(0,0,0,0.07);
      text-decoration: none;
      color: var(--clr-text);
      transition: transform 0.22s var(--ease-out-expo), box-shadow 0.22s var(--ease-out-expo);
      display: block;
      border: 1px solid rgba(0,0,0,0.05);
    }
    .recipe-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 32px rgba(0,0,0,0.12);
    }
    .card-img-wrap {
      aspect-ratio: 1;
      overflow: hidden;
      background: var(--clr-skeleton);
    }
    .card-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.42s var(--ease-out-expo);
    }
    .recipe-card:hover .card-img-wrap img { transform: scale(1.07); }
    .card-img-ph { width: 100%; height: 100%; background: var(--clr-skeleton); }
    .card-body { padding: 1rem; }
    .card-title {
      font-family: var(--font-display);
      font-size: 0.9rem;
      font-weight: 700;
      margin: 0 0 0.6rem;
      line-height: 1.35;
      color: var(--clr-text);
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .card-foot {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .card-stars {
      display: flex;
      align-items: center;
      gap: 1px;
      font-size: 0.72rem;
      color: oklch(72% 0.19 70);
    }
    .star-dim  { color: oklch(82% 0 0); }
    .card-score {
      margin-left: 0.3rem;
      font-size: 0.72rem;
      font-weight: 600;
      color: var(--clr-text-muted);
    }
    .card-btn {
      width: 2.1rem;
      height: 2.1rem;
      border-radius: 50%;
      background: var(--clr-brand);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      flex-shrink: 0;
      transition: background 0.18s, transform 0.18s;
    }
    .recipe-card:hover .card-btn { background: var(--clr-brand-dark); transform: scale(1.1); }
    .card-btn svg { width: 0.8rem; height: 0.8rem; }

    /* Skeletons */
    .card-sk {
      border-radius: 1.25rem;
      aspect-ratio: 0.9;
      background: var(--clr-skeleton);
      position: relative;
      overflow: hidden;
    }
    .card-sk::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent 0%, var(--clr-skeleton-shine) 50%, transparent 100%);
      transform: translateX(-100%);
      animation: shimmer 1.5s linear infinite;
    }
    @keyframes shimmer { from { transform: translateX(-100%); } to { transform: translateX(100%); } }

    .grid-error {
      text-align: center;
      color: var(--clr-text-muted);
      padding: 3rem;
    }

    /* ─── CATEGORIES ──────────────────────────────────────────── */
    .cat-sec {
      padding: clamp(4rem, 7vw, 5.5rem) 0;
      background: oklch(97% 0.022 58);
    }
    .cat-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 1rem;
    }
    .cat-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.6rem;
      padding: 1.35rem 0.75rem;
      border-radius: 1rem;
      background: #fff;
      text-decoration: none;
      color: var(--clr-text);
      font-size: 0.8rem;
      font-weight: 600;
      box-shadow: 0 2px 10px rgba(0,0,0,0.06);
      border: 1px solid rgba(0,0,0,0.04);
      transition: background 0.2s, color 0.2s, transform 0.2s var(--ease-out-expo), box-shadow 0.2s;
    }
    .cat-item:hover {
      background: var(--clr-brand);
      color: #fff;
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.13);
    }
    .cat-icon { width: 2.5rem; height: 2.5rem; color: var(--clr-brand); transition: color 0.2s; }
    .cat-item:hover .cat-icon { color: #fff; }
    .cat-icon svg { width: 100%; height: 100%; }

    /* ─── RESPONSIVE ──────────────────────────────────────────── */
    @media (max-width: 1024px) {
      .cards-grid { grid-template-columns: repeat(2, 1fr); }
      .cat-grid   { grid-template-columns: repeat(3, 1fr); }
    }
    @media (max-width: 900px) {
      .hero-inner { grid-template-columns: 1fr; text-align: center; }
      .hero-sub   { max-width: none; margin-inline: auto; }
      .hero-actions { justify-content: center; }
      .hero-right { min-height: 280px; order: -1; }
    }
    @media (max-width: 640px) {
      .cards-grid { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
      .cat-grid   { grid-template-columns: repeat(2, 1fr); }
      .hero-right { min-height: 240px; }
    }
    @media (max-width: 380px) {
      .hero-heading { font-size: 2.2rem; }
    }
    @media (prefers-reduced-motion: reduce) {
      .btn-primary, .recipe-card, .cat-item, .btn-play { transition: none; }
      .card-sk::after { animation: none; }
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

  featured = computed(() => {
    const r = this.featuredResult();
    return r?.kind === 'success' ? r.recipes : [];
  });
  loading  = computed(() => this.featuredResult() === undefined);
  errored  = computed(() => this.featuredResult()?.kind === 'error');

  constructor() {
    this.perf.mark('home_start');
    this.seo.set({
      title: 'Начало',
      description: 'Традиционни български рецепти, споделени с любов. Открий лесни и вкусни ястия за всеки повод в кулинарния блог на Иво.',
    });
  }
}
