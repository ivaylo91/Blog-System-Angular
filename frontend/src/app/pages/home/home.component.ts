import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
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
      <div class="hero-bg" aria-hidden="true">
        @if (featured().length && featured()[0].hero_image) {
          <img [src]="featured()[0].hero_image" alt="" fetchpriority="high" loading="eager" />
        } @else {
          <div class="hero-ph"></div>
        }
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-heading">Здравословни<br>Рецепти</h1>
        <p class="hero-sub">Традиционни ястия, приготвени с любов и внимание към всеки детайл.</p>
        <a routerLink="/recipes" class="btn-brand hero-cta">Разгледай рецептите</a>
      </div>
    </section>

    <!-- ═══════ TASTE / CATEGORIES ══════════════════════════════════ -->
    <section class="taste-sec">
      <div class="s-inner">
        <h2 class="s-heading">Вкус на храната</h2>

        <div class="taste-grid">

          <a class="taste-item" [class.taste-active]="activeCatIdx() === 0"
             routerLink="/recipes" [queryParams]="{q:'супа'}"
             (mouseenter)="activeCatIdx.set(0)">
            <div class="taste-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 14h20M8 14c0 5.5 3.5 9 8 9s8-3.5 8-9"/>
                <path d="M12 10c0-2.2 1.8-4 4-4s4 1.8 4 4"/>
                <path d="M5 23h22"/>
              </svg>
            </div>
            <div class="taste-body">
              <h3>Супи</h3>
              <p>Топли и питателни за всеки повод</p>
            </div>
          </a>

          <a class="taste-item" [class.taste-active]="activeCatIdx() === 1"
             routerLink="/recipes" [queryParams]="{q:'десерт'}"
             (mouseenter)="activeCatIdx.set(1)">
            <div class="taste-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="6" y="16" width="20" height="10" rx="2"/>
                <path d="M6 16c0-5.5 20-5.5 20 0"/>
                <path d="M16 8v8M12 10l4-4 4 4"/>
              </svg>
            </div>
            <div class="taste-body">
              <h3>Десерти</h3>
              <p>Сладки изкушения за края на деня</p>
            </div>
          </a>

          <a class="taste-item" [class.taste-active]="activeCatIdx() === 2"
             routerLink="/recipes" [queryParams]="{q:'основно'}"
             (mouseenter)="activeCatIdx.set(2)">
            <div class="taste-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="16" cy="16" r="11"/>
                <path d="M9 20c2-6 12-6 14 0"/>
                <circle cx="16" cy="12" r="2.5"/>
              </svg>
            </div>
            <div class="taste-body">
              <h3>Основни</h3>
              <p>Сити ястия за цялото семейство</p>
            </div>
          </a>

          <a class="taste-item" [class.taste-active]="activeCatIdx() === 3"
             routerLink="/recipes" [queryParams]="{q:'салата'}"
             (mouseenter)="activeCatIdx.set(3)">
            <div class="taste-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 22s2-12 9-14c7-2 11 4 11 14"/>
                <path d="M10 16c2-4 5-5 8-3"/>
                <path d="M6 22h20"/>
              </svg>
            </div>
            <div class="taste-body">
              <h3>Салати</h3>
              <p>Свежи и хрупкави за всеки вкус</p>
            </div>
          </a>

          <a class="taste-item" [class.taste-active]="activeCatIdx() === 4"
             routerLink="/recipes" [queryParams]="{q:'закуска'}"
             (mouseenter)="activeCatIdx.set(4)">
            <div class="taste-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="6" y="10" width="20" height="12" rx="4"/>
                <path d="M8 14h16M8 18h16"/>
              </svg>
            </div>
            <div class="taste-body">
              <h3>Закуски</h3>
              <p>Заряди деня си с вкусна закуска</p>
            </div>
          </a>

          <a class="taste-item" [class.taste-active]="activeCatIdx() === 5"
             routerLink="/recipes" [queryParams]="{q:'паста'}"
             (mouseenter)="activeCatIdx.set(5)">
            <div class="taste-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 18c0 0 3 6 11 6s11-6 11-6"/>
                <path d="M5 18c0-6 4-10 11-10s11 4 11 10"/>
                <path d="M13 8c0-2 1.3-3.5 3-3.5"/>
              </svg>
            </div>
            <div class="taste-body">
              <h3>Паста</h3>
              <p>Кремообразни ястия по италиански</p>
            </div>
          </a>

        </div>

        <div class="s-cta">
          <a routerLink="/recipes" class="btn-brand">Разгледай</a>
        </div>
      </div>
    </section>

    <!-- ═══════ RECIPES PHOTO GRID ═══════════════════════════════════ -->
    <section class="rgrid-sec">
      <div class="s-inner">
        <h2 class="s-heading">Рецепти</h2>

        @if (loading()) {
          <div class="photo-grid">
            @for (s of [0,1,2,3,4,5,6,7]; track s) {
              <div class="photo-sk"></div>
            }
          </div>
        } @else if (errored()) {
          <p class="grid-error">Рецептите не могат да се заредят в момента.</p>
        } @else {
          <div class="photo-grid">
            @for (r of featured().slice(0, 8); track r.id) {
              <a class="photo-cell" [routerLink]="['/recipes', r.slug]" [attr.aria-label]="r.title">
                @if (r.hero_image) {
                  <img [src]="r.hero_image" [alt]="r.title" loading="lazy" />
                } @else {
                  <div class="photo-ph"></div>
                }
                <div class="photo-hover" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </div>
              </a>
            }
          </div>
        }

        <div class="s-cta">
          <a routerLink="/recipes" class="btn-brand">Всички рецепти</a>
        </div>
      </div>
    </section>

    <!-- ═══════ DISCOVER CAROUSEL ════════════════════════════════════ -->
    <section class="car-sec">
      <div class="s-inner">
        <h2 class="s-heading">Открийте</h2>

        @if (featured().length) {
          <div class="car-dots" role="tablist" aria-label="Рецепти">
            @for (r of featured().slice(0, 5); track r.id; let i = $index) {
              <button class="car-dot" [class.active]="carouselIdx() === i"
                      role="tab" [attr.aria-selected]="carouselIdx() === i"
                      (click)="carouselIdx.set(i)"
                      [attr.aria-label]="'Рецепта ' + (i + 1)"></button>
            }
          </div>

          <div class="car-stage">
            <button class="car-arrow" (click)="prevSlide()" aria-label="Предишна рецепта">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            @if (carouselRecipe(); as r) {
              <div class="car-body">
                <svg class="big-quote q-open" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                  <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm16 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z"/>
                </svg>
                <div class="car-inner">
                  @if (r.hero_image) {
                    <img class="car-avatar" [src]="r.hero_image" [alt]="r.title" loading="lazy" />
                  } @else {
                    <div class="car-avatar car-avatar-ph"></div>
                  }
                  <div class="car-text">
                    <a class="car-title" [routerLink]="['/recipes', r.slug]">{{ r.title }}</a>
                    <p class="car-excerpt">{{ r.excerpt }}</p>
                  </div>
                </div>
                <svg class="big-quote q-close" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                  <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm16 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z"/>
                </svg>
              </div>
            }

            <button class="car-arrow" (click)="nextSlide()" aria-label="Следваща рецепта">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>

          <div class="s-cta">
            <a routerLink="/recipes" class="btn-brand">Намери повече</a>
          </div>
        }
      </div>
    </section>

  `,
  styles: [`

    /* ─── SHARED ───────────────────────────────────────────────── */
    .s-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 clamp(1rem, 4vw, 2rem);
    }

    .s-heading {
      font-family: var(--font-display);
      font-size: clamp(1.8rem, 3.5vw, 2.6rem);
      font-weight: 800;
      text-align: center;
      color: var(--clr-text);
      margin: 0 0 var(--space-9);
      letter-spacing: -0.025em;
      line-height: 1.1;
    }

    .s-cta {
      display: flex;
      justify-content: center;
      margin-top: var(--space-9);
    }

    .btn-brand {
      display: inline-flex;
      align-items: center;
      padding: var(--space-3) var(--space-8);
      background: var(--clr-brand);
      color: oklch(100% 0 0);
      border-radius: var(--radius-pill);
      font-weight: 700;
      font-size: 0.95rem;
      text-decoration: none;
      transition: background 0.18s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);
      touch-action: manipulation;
    }
    .btn-brand:hover { background: var(--clr-brand-dark); transform: translateY(-2px); }
    .btn-brand:active { transform: translateY(0); }

    /* ─── HERO ─────────────────────────────────────────────────── */
    .hero {
      position: relative;
      min-height: clamp(460px, 72vh, 700px);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .hero-bg {
      position: absolute;
      inset: 0;
    }
    .hero-bg img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .hero-ph {
      width: 100%;
      height: 100%;
      background: oklch(22% 0.04 40);
    }
    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom,
        rgba(0,0,0,0.25) 0%,
        rgba(0,0,0,0.60) 100%
      );
    }

    .hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
      padding: var(--space-9) var(--space-6);
      max-width: 700px;
    }
    .hero-heading {
      font-family: var(--font-display);
      font-size: clamp(2.4rem, 6vw, 4.2rem);
      font-weight: 800;
      color: oklch(100% 0 0);
      margin: 0 0 var(--space-5);
      line-height: 1.05;
      letter-spacing: -0.025em;
      text-shadow: 0 2px 20px rgba(0,0,0,0.4);
    }
    .hero-sub {
      font-size: clamp(0.95rem, 1.5vw, 1.1rem);
      color: rgba(255,255,255,0.85);
      margin: 0 auto var(--space-7);
      max-width: 46ch;
      line-height: 1.65;
    }
    .hero-cta {
      font-size: 1rem;
      padding: var(--space-4) var(--space-9);
    }

    /* ─── TASTE / CATEGORIES ───────────────────────────────────── */
    .taste-sec {
      padding: clamp(4rem, 7vw, 6rem) 0;
      background: oklch(100% 0 0);
    }

    .taste-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-3);
      max-width: 880px;
      margin: 0 auto;
    }

    .taste-item {
      display: flex;
      align-items: flex-start;
      gap: var(--space-4);
      padding: var(--space-5);
      border-radius: var(--radius-lg);
      text-decoration: none;
      color: var(--clr-text);
      transition: background 0.22s var(--ease-out-expo), color 0.22s var(--ease-out-expo);
      cursor: pointer;
    }
    .taste-item:hover { background: var(--clr-surface-alt); }
    .taste-active {
      background: var(--clr-brand) !important;
      color: oklch(100% 0 0) !important;
    }

    .taste-icon {
      width: 2.5rem;
      height: 2.5rem;
      flex-shrink: 0;
    }
    .taste-icon svg { width: 100%; height: 100%; }

    .taste-body h3 {
      font-family: var(--font-display);
      font-size: 0.975rem;
      font-weight: 700;
      margin: 0 0 var(--space-1);
      line-height: 1.2;
    }
    .taste-body p {
      font-size: 0.8rem;
      color: var(--clr-text-muted);
      margin: 0;
      line-height: 1.5;
    }
    .taste-active .taste-body p { color: rgba(255,255,255,0.75); }
    .taste-active .taste-icon { color: oklch(100% 0 0); }

    /* ─── RECIPES PHOTO GRID ───────────────────────────────────── */
    .rgrid-sec {
      padding: clamp(4rem, 7vw, 6rem) 0;
      background: var(--clr-bg);
    }

    .photo-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3px;
    }

    .photo-cell {
      position: relative;
      aspect-ratio: 1;
      overflow: hidden;
      display: block;
      background: var(--clr-skeleton);
    }
    .photo-cell img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.45s var(--ease-out-expo);
    }
    .photo-cell:hover img { transform: scale(1.08); }

    .photo-ph {
      width: 100%;
      height: 100%;
      background: var(--clr-skeleton);
    }

    .photo-hover {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.3s;
    }
    .photo-cell:hover .photo-hover { background: rgba(0,0,0,0.45); }
    .photo-hover svg {
      width: 2rem;
      height: 2rem;
      color: oklch(100% 0 0);
      opacity: 0;
      transform: scale(0.7);
      transition: opacity 0.3s, transform 0.3s;
    }
    .photo-cell:hover .photo-hover svg { opacity: 1; transform: scale(1); }

    .photo-sk {
      aspect-ratio: 1;
      background: var(--clr-skeleton);
      position: relative;
      overflow: hidden;
    }
    .photo-sk::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent 0%, var(--clr-skeleton-shine) 50%, transparent 100%);
      transform: translateX(-100%);
      animation: shimmer 1.5s linear infinite;
    }
    @keyframes shimmer {
      from { transform: translateX(-100%); }
      to   { transform: translateX(100%); }
    }

    .grid-error {
      text-align: center;
      color: var(--clr-text-muted);
      padding: var(--space-8);
    }

    /* ─── DISCOVER CAROUSEL ────────────────────────────────────── */
    .car-sec {
      padding: clamp(4rem, 7vw, 6rem) 0;
      background: oklch(100% 0 0);
    }

    .car-dots {
      display: flex;
      justify-content: center;
      gap: 0.4rem;
      margin-bottom: var(--space-8);
    }
    .car-dot {
      width: 0.6rem;
      height: 0.6rem;
      border-radius: var(--radius-circle);
      border: none;
      background: var(--clr-border-strong);
      cursor: pointer;
      padding: 0;
      transition: background 0.2s, transform 0.2s;
    }
    .car-dot.active { background: var(--clr-brand); transform: scale(1.4); }

    .car-stage {
      display: flex;
      align-items: center;
      gap: var(--space-6);
      max-width: 820px;
      margin: 0 auto;
    }

    .car-arrow {
      width: 2.75rem;
      height: 2.75rem;
      border-radius: var(--radius-circle);
      border: 1.5px solid var(--clr-border-strong);
      background: oklch(100% 0 0);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--clr-text);
      flex-shrink: 0;
      transition: background 0.2s, border-color 0.2s, color 0.2s;
      touch-action: manipulation;
    }
    .car-arrow svg { width: 1rem; height: 1rem; }
    .car-arrow:hover {
      background: var(--clr-brand);
      border-color: var(--clr-brand);
      color: oklch(100% 0 0);
    }

    .car-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: var(--space-4);
    }

    .big-quote {
      width: 2rem;
      height: 2rem;
      color: var(--clr-brand);
      opacity: 0.4;
    }
    .q-open { align-self: flex-start; }
    .q-close { align-self: flex-end; transform: rotate(180deg); }

    .car-inner {
      display: flex;
      align-items: center;
      gap: var(--space-6);
      padding: 0 var(--space-4);
    }

    .car-avatar {
      width: 5rem;
      height: 5rem;
      border-radius: var(--radius-circle);
      object-fit: cover;
      flex-shrink: 0;
      border: 3px solid var(--clr-brand);
    }
    .car-avatar-ph {
      background: var(--clr-surface-alt);
    }

    .car-text { flex: 1; }

    .car-title {
      font-family: var(--font-display);
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--clr-text);
      text-decoration: none;
      display: block;
      margin-bottom: var(--space-2);
      transition: color 0.18s;
    }
    .car-title:hover { color: var(--clr-brand); }

    .car-excerpt {
      font-size: 0.875rem;
      color: var(--clr-text-muted);
      line-height: 1.65;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* ─── RESPONSIVE ───────────────────────────────────────────── */
    @media (max-width: 900px) {
      .taste-grid { grid-template-columns: repeat(2, 1fr); max-width: 600px; }
      .photo-grid { grid-template-columns: repeat(3, 1fr); }
      .car-stage  { gap: var(--space-3); }
    }

    @media (max-width: 640px) {
      .taste-grid { grid-template-columns: 1fr; max-width: 400px; }
      .photo-grid { grid-template-columns: repeat(2, 1fr); }
      .car-inner  { flex-direction: column; text-align: center; }
      .car-avatar { width: 4rem; height: 4rem; }
      .big-quote  { display: none; }
      .car-arrow  { width: 2.25rem; height: 2.25rem; }
    }

    @media (max-width: 380px) {
      .hero-heading { font-size: 2rem; }
    }

    @media (prefers-reduced-motion: reduce) {
      .btn-brand, .car-arrow, .photo-cell img, .photo-hover svg { transition: none; }
      .photo-sk::after { animation: none; }
    }

  `],
})
export class HomeComponent {
  private recipeService = inject(RecipeService);
  private seo         = inject(SeoService);
  private perf        = inject(PerfService);

  carouselIdx   = signal(0);
  activeCatIdx  = signal(1);

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

  carouselRecipe = computed(() => {
    const f = this.featured();
    if (!f.length) return null;
    return f[this.carouselIdx() % f.length];
  });

  prevSlide(): void {
    const len = this.featured().length;
    if (!len) return;
    this.carouselIdx.update(i => (i - 1 + len) % len);
  }

  nextSlide(): void {
    const len = this.featured().length;
    if (!len) return;
    this.carouselIdx.update(i => (i + 1) % len);
  }

  retry(): void { window.location.reload(); }

  constructor() {
    this.perf.mark('home_start');
    this.seo.set({
      title: 'Начало',
      description: 'Традиционни български рецепти, споделени с любов. Открий лесни и вкусни ястия за всеки повод в кулинарния блог на Иво.',
    });
  }
}
