import { ChangeDetectionStrategy, Component, computed, inject, DestroyRef, afterNextRender } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of, tap } from 'rxjs';
import { RecipeService } from '../../services/recipe.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../services/seo.service';
import { PerfService } from '../../services/perf.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RecipeCardComponent, FormsModule],
  template: `
    <!-- HERO: editorial split -->
    <section class="hero" [class.has-image]="featured().length > 0 && !!featured()[0].hero_image">
      <div class="hero-text">
        <p class="hero-label">Кулинарен блог</p>
        <h1 class="hero-title">Вкусът на<br><em>България</em></h1>
        <p class="hero-sub">Традиционни рецепти, споделени с любов и внимание към всеки детайл.</p>
        <form class="search-form" (submit)="onSearch($event)">
          <input type="text" [(ngModel)]="searchQuery" name="q"
                 placeholder="Търси рецепта…"
                 aria-label="Търси рецепта" class="search-input" />
          <button type="submit" class="search-btn" aria-label="Търси рецепта">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <span aria-hidden="true">Търси</span>
          </button>
        </form>
        <div class="hero-stats" aria-hidden="true">
          <span>Традиционни</span>
          <span class="dot"></span>
          <span>Лесни</span>
          <span class="dot"></span>
          <span>Вкусни</span>
        </div>
      </div>
      <div class="hero-visual">
        @if (featured().length > 0 && featured()[0].hero_image) {
          <div class="hero-img-wrap">
            <img class="hero-img" [src]="featured()[0].hero_image" [alt]="featured()[0].title"
                 fetchpriority="high" loading="eager" />
            <div class="hero-img-caption">
              <span class="caption-cat">{{ featured()[0].category?.name }}</span>
              <span class="caption-title">{{ featured()[0].title }}</span>
              <a [routerLink]="['/recipes', featured()[0].slug]" class="caption-link" tabindex="-1" aria-hidden="true">Виж рецептата →</a>
            </div>
          </div>
        } @else {
          <div class="hero-placeholder">
            <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 44l4-20A8 8 0 0 1 23.8 18h32.4A8 8 0 0 1 64 24l4 20"/><path d="M12 44h56v8a28 28 0 0 1-56 0v-8z"/><line x1="36" y1="76" x2="44" y2="76"/><line x1="40" y1="68" x2="40" y2="76"/></svg>
          </div>
        }
      </div>
    </section>

    <!-- FEATURED: bento grid -->
    <section class="featured-section">
      <div class="section-inner">
        <div class="section-head">
          <div>
            <p class="eyebrow">Вдъхновение от кухнята</p>
            <h2 class="section-title">Избрани рецепти</h2>
          </div>
          <a routerLink="/recipes" class="see-all">Виж всички →</a>
        </div>

        @if (loading()) {
          <div class="bento">
            @for (slot of bentoSlots; track slot) {
              <div class="bento-tile tile-{{ slot }}"><div class="sk-tile"></div></div>
            }
          </div>
        } @else if (errored()) {
          <div class="featured-error" role="status">
            <p>Рецептите не се зареждат в момента.</p>
            <button type="button" (click)="retry()">Опитай пак</button>
          </div>
        } @else if (featured().length >= 6) {
          <div class="bento">
            <div class="bento-tile tile-a">
              <app-recipe-card [recipe]="featured()[0]" [priority]="true" [index]="0" [featured]="true" [overlay]="true" [numbered]="true" />
            </div>
            <div class="bento-tile tile-b">
              <app-recipe-card [recipe]="featured()[1]" [index]="1" [overlay]="true" [numbered]="true" />
            </div>
            <div class="bento-tile tile-c">
              <app-recipe-card [recipe]="featured()[2]" [index]="2" [overlay]="true" [numbered]="true" />
            </div>
            <div class="bento-tile tile-d">
              <app-recipe-card [recipe]="featured()[3]" [index]="3" [overlay]="true" [numbered]="true" />
            </div>
            <div class="bento-tile tile-e">
              <app-recipe-card [recipe]="featured()[4]" [index]="4" [overlay]="true" [numbered]="true" />
            </div>
            <div class="bento-tile tile-f">
              <app-recipe-card [recipe]="featured()[5]" [index]="5" [overlay]="true" [numbered]="true" />
            </div>
          </div>
          @if (featured().length > 6) {
            <div class="featured-rest">
              @for (recipe of featured().slice(6); track recipe.id; let i = $index) {
                <app-recipe-card [recipe]="recipe" [index]="i + 6" />
              }
            </div>
          }
        } @else {
          <div class="featured-rest">
            @for (recipe of featured(); track recipe.id; let i = $index) {
              <app-recipe-card [recipe]="recipe" [priority]="i === 0" [index]="i" [featured]="i === 0" />
            }
          </div>
        }

        <div class="cta-row">
          <a routerLink="/recipes" class="cta-btn">
            Разгледай всички рецепти
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- COLLECTIONS: numbered editorial list -->
    <section class="collections" data-reveal>
      <div class="section-inner">
        <div class="section-head">
          <div>
            <p class="eyebrow">Открий по тема</p>
            <h2 class="section-title">Тематични колекции</h2>
          </div>
          <a routerLink="/categories" class="see-all">Всички категории →</a>
        </div>
        <ol class="col-list">
          @for (col of collections; track col.query; let i = $index) {
            <li class="col-item" [style.--i]="i">
              <a class="col-strip" [routerLink]="['/recipes']" [queryParams]="{ q: col.query }">
                <span class="col-num" aria-hidden="true">{{ pad(i + 1) }}</span>
                <div class="col-body">
                  <h3 class="col-name">{{ col.title }}</h3>
                  <p class="col-sub">{{ col.sub }}</p>
                </div>
                <svg class="col-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </a>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: [`
    /* ===== HERO: editorial split ===== */
    .hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: clamp(480px, 64dvh, 700px);
      background: var(--clr-surface);
      overflow: hidden;
    }
    .hero-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4rem) clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem);
      max-width: 640px;
    }
    .hero-label {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.22em;
      color: var(--clr-brand);
      margin: 0 0 var(--space-6);
    }
    .hero-title {
      font-family: var(--font-display);
      font-size: clamp(3rem, 6vw, 5.5rem);
      font-weight: 800;
      color: var(--clr-text);
      line-height: 0.95;
      margin: 0 0 var(--space-6);
      letter-spacing: -0.03em;
    }
    .hero-title em {
      font-style: italic;
      color: var(--clr-brand);
    }
    .hero-sub {
      font-size: clamp(1rem, 1.2vw, 1.1rem);
      color: var(--clr-text-muted);
      line-height: 1.65;
      margin: 0 0 var(--space-7);
      max-width: 44ch;
      font-weight: 400;
    }
    .search-form {
      display: flex;
      border-radius: var(--radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
      max-width: 420px;
      background: var(--clr-bg);
      border: 1.5px solid var(--clr-border);
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .search-form:focus-within {
      border-color: var(--clr-brand);
      box-shadow: var(--shadow-md), 0 0 0 3px color-mix(in oklch, var(--clr-brand) 15%, transparent);
    }
    .search-input {
      flex: 1;
      padding: var(--space-3) var(--space-4);
      border: none;
      font-size: 0.925rem;
      outline: none;
      background: transparent;
      color: var(--clr-text);
    }
    .search-input::placeholder { color: var(--clr-text-faint); }
    .search-btn {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-3) var(--space-5);
      background: var(--clr-brand);
      color: #fff;
      border: none;
      font-weight: 600;
      font-size: 0.875rem;
      cursor: pointer;
      transition: background 0.18s;
      white-space: nowrap;
      touch-action: manipulation;
    }
    .search-btn svg { width: 0.9rem; height: 0.9rem; flex-shrink: 0; }
    .search-btn:hover { background: var(--clr-brand-dark); }
    .search-btn:active { transform: scale(0.98); }
    .hero-stats {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      margin-top: var(--space-6);
      font-size: 0.78rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--clr-text-faint);
    }
    .dot {
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: var(--clr-border-strong);
      flex-shrink: 0;
    }

    /* Hero visual pane */
    .hero-visual {
      position: relative;
      overflow: hidden;
      background: var(--clr-surface-alt);
    }
    .hero-img-wrap {
      position: absolute;
      inset: 0;
    }
    .hero-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .hero-img-caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: var(--space-5) var(--space-6);
      background: linear-gradient(to top, rgba(10,8,5,0.88) 0%, rgba(10,8,5,0.5) 50%, transparent 100%);
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
    }
    .caption-cat {
      font-size: 0.62rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: var(--clr-green-text);
      background: var(--clr-green-bg);
      padding: 2px var(--space-2);
      border-radius: var(--radius-pill);
      width: fit-content;
    }
    .caption-title {
      font-family: var(--font-display);
      font-size: clamp(1.1rem, 1.6vw, 1.4rem);
      font-weight: 700;
      color: #fff;
      line-height: 1.2;
    }
    .caption-link {
      font-size: 0.78rem;
      font-weight: 600;
      color: rgba(255,255,255,0.72);
      text-decoration: none;
      margin-top: var(--space-1);
      transition: color 0.2s;
    }
    .caption-link:hover { color: #fff; }
    .hero-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--clr-border-strong);
    }
    .hero-placeholder svg { width: 5rem; height: 5rem; }

    /* Hero entrance */
    @keyframes hero-rise {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .hero-label   { animation: hero-rise 500ms var(--ease-out-expo) both; animation-delay:   0ms; }
    .hero-title   { animation: hero-rise 500ms var(--ease-out-expo) both; animation-delay: 100ms; }
    .hero-sub     { animation: hero-rise 500ms var(--ease-out-expo) both; animation-delay: 200ms; }
    .search-form  { animation: hero-rise 500ms var(--ease-out-expo) both; animation-delay: 300ms; }
    .hero-stats   { animation: hero-rise 500ms var(--ease-out-expo) both; animation-delay: 380ms; }

    @media (prefers-reduced-motion: reduce) {
      .hero-label, .hero-title, .hero-sub, .search-form, .hero-stats { animation: none; }
    }

    /* ===== FEATURED ===== */
    .featured-section {
      padding: clamp(3rem, 6vw, 5rem) var(--space-6);
      background: var(--clr-bg);
    }
    .section-inner { max-width: 1280px; margin: 0 auto; }
    .section-head {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: var(--space-8);
      gap: var(--space-4);
    }
    .eyebrow {
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--clr-brand);
      margin: 0 0 var(--space-2);
      opacity: 0.85;
    }
    .section-title {
      font-family: var(--font-display);
      font-size: clamp(1.5rem, 2.8vw, 2.2rem);
      font-weight: 800;
      color: var(--clr-text);
      margin: 0;
      letter-spacing: -0.02em;
      line-height: 1.1;
    }
    .see-all {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--clr-brand);
      text-decoration: none;
      white-space: nowrap;
      flex-shrink: 0;
      padding-bottom: var(--space-1);
      transition: opacity 0.2s;
    }
    .see-all:hover { opacity: 0.75; }

    /* Bento grid */
    .bento {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, clamp(170px, 20vw, 240px));
      grid-template-areas:
        "a a b c"
        "a a b d"
        "e e f f";
      gap: var(--space-4);
    }
    .tile-a { grid-area: a; }
    .tile-b { grid-area: b; }
    .tile-c { grid-area: c; }
    .tile-d { grid-area: d; }
    .tile-e { grid-area: e; }
    .tile-f { grid-area: f; }
    .bento-tile {
      border-radius: var(--radius-lg);
      overflow: hidden;
      min-width: 0;
    }
    .bento-tile > app-recipe-card { display: block; height: 100%; }

    .featured-rest {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: var(--space-5);
      margin-top: var(--space-7);
      align-items: start;
    }
    .featured-rest > :nth-child(1) { grid-row: span 2; }
    .featured-rest > :nth-child(2) { padding-top: var(--space-4); }
    .featured-rest > :nth-child(3) { padding-top: var(--space-8); }

    /* Error state */
    .featured-error {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-4);
      padding: clamp(2.5rem, 6vw, 4rem) var(--space-6);
      text-align: center;
      background: var(--clr-surface);
      border: 1px solid var(--clr-border-faint);
      border-radius: var(--radius-lg);
    }
    .featured-error p {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1.1rem;
      color: var(--clr-text-muted);
      margin: 0;
    }
    .featured-error button {
      padding: var(--space-3) var(--space-5);
      border-radius: var(--radius-pill);
      border: 1px solid var(--clr-border);
      background: var(--clr-surface);
      color: var(--clr-text);
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.18s;
    }
    .featured-error button:hover { background: var(--clr-surface-hover); }

    /* Skeleton */
    .sk-tile {
      width: 100%;
      height: 100%;
      background: var(--clr-skeleton);
      border-radius: var(--radius-lg);
      position: relative;
      overflow: hidden;
    }
    .sk-tile::after {
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

    /* CTA row */
    .cta-row {
      display: flex;
      justify-content: flex-end;
      margin-top: var(--space-9);
    }
    .cta-btn {
      display: inline-flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-3) var(--space-6);
      background: var(--clr-text);
      color: var(--clr-bg);
      border-radius: var(--radius-pill);
      font-weight: 600;
      font-size: 0.9rem;
      text-decoration: none;
      transition: background 0.22s var(--ease-out-expo), transform 0.22s var(--ease-out-expo);
      touch-action: manipulation;
    }
    .cta-btn svg { width: 0.95rem; height: 0.95rem; flex-shrink: 0; }
    .cta-btn:hover { background: var(--clr-brand); transform: translateY(-2px); }
    .cta-btn:active { transform: translateY(0) scale(0.98); transition-duration: 0.08s; }

    /* ===== COLLECTIONS ===== */
    [data-reveal] {
      opacity: 0;
      transform: translateY(18px);
      transition: opacity 0.75s var(--ease-out-expo), transform 0.75s var(--ease-out-expo);
    }
    [data-reveal].in-view { opacity: 1; transform: translateY(0); }
    @media (prefers-reduced-motion: reduce) {
      [data-reveal] { opacity: 1; transform: none; transition: none; }
      .col-item { opacity: 1 !important; transform: none !important; transition: none !important; }
    }

    .collections {
      padding: clamp(4rem, 7vw, 6rem) var(--space-6);
      background: var(--clr-surface);
      content-visibility: auto;
      contain-intrinsic-block-size: 520px;
    }
    .col-list {
      list-style: none;
      margin: var(--space-8) 0 0;
      padding: 0;
    }
    .col-item {
      opacity: 0;
      transform: translateX(-14px);
      transition:
        opacity 0.6s var(--ease-out-expo),
        transform 0.6s var(--ease-out-expo);
      transition-delay: calc(var(--i, 0) * 80ms + 160ms);
    }
    [data-reveal].in-view .col-item { opacity: 1; transform: translateX(0); }

    .col-strip {
      display: grid;
      grid-template-columns: 5rem 1fr auto;
      align-items: center;
      gap: var(--space-6);
      padding: var(--space-6) var(--space-4);
      margin: 0 calc(-1 * var(--space-4));
      border-bottom: 1px solid var(--clr-border-faint);
      text-decoration: none;
      color: inherit;
      border-radius: var(--radius-sm);
      transition: background 0.28s var(--ease-out-expo);
    }
    .col-strip:first-child { border-top: 1px solid var(--clr-border-faint); }
    @media (hover: hover) and (pointer: fine) {
      .col-strip:hover { background: var(--clr-surface-alt); }
      .col-strip:hover .col-num { color: var(--clr-brand); }
      .col-strip:hover .col-name { color: var(--clr-brand); }
      .col-strip:hover .col-arrow { transform: translate(3px, -3px); color: var(--clr-brand); }
    }
    .col-strip:active { background: var(--clr-surface-hover); }

    .col-num {
      font-family: var(--font-display);
      font-size: clamp(2.4rem, 4vw, 3.5rem);
      font-weight: 800;
      color: color-mix(in oklch, var(--clr-brand) 22%, transparent);
      letter-spacing: -0.04em;
      line-height: 1;
      text-align: right;
      flex-shrink: 0;
      transition: color 0.3s var(--ease-out-expo);
    }
    .col-body { min-width: 0; }
    .col-name {
      font-family: var(--font-display);
      font-size: clamp(1.45rem, 2.4vw, 2.15rem);
      font-weight: 800;
      letter-spacing: -0.02em;
      line-height: 1.1;
      margin: 0 0 var(--space-2);
      color: var(--clr-text);
      transition: color 0.22s var(--ease-out-expo);
    }
    .col-sub {
      font-size: 0.875rem;
      color: var(--clr-text-muted);
      margin: 0;
      line-height: 1.55;
      max-width: 52ch;
    }
    .col-arrow {
      width: 1.35rem;
      height: 1.35rem;
      flex-shrink: 0;
      color: var(--clr-text-faint);
      transition: transform 0.3s var(--ease-out-expo), color 0.3s var(--ease-out-expo);
    }

    /* ===== Responsive ===== */
    @media (max-width: 900px) {
      .hero { grid-template-columns: 1fr; min-height: auto; }
      .hero-text { max-width: 100%; padding: clamp(3rem, 8vw, 4rem) var(--space-6) var(--space-8); }
      .hero-visual { height: clamp(260px, 50vw, 400px); }
      .bento {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, clamp(170px, 38vw, 230px));
        grid-template-areas: "a a" "a a" "b c" "b d" "e f";
      }
      .featured-rest { grid-template-columns: repeat(2, 1fr); }
      .featured-rest > :nth-child(1) { grid-row: auto; }
      .featured-rest > :nth-child(2), .featured-rest > :nth-child(3) { padding-top: 0; }
      .cta-row { justify-content: center; }
    }
    @media (max-width: 640px) {
      .search-form { max-width: 100%; }
      .bento {
        grid-template-columns: 1fr;
        grid-template-rows: none;
        grid-auto-rows: clamp(210px, 52vw, 290px);
        grid-template-areas: "a" "b" "c" "d" "e" "f";
        gap: var(--space-3);
      }
      .featured-rest { grid-template-columns: 1fr; }
      .cta-btn { width: 100%; justify-content: center; }
      .col-strip { grid-template-columns: 3.5rem 1fr auto; gap: var(--space-4); padding: var(--space-5) var(--space-3); margin: 0 calc(-1 * var(--space-3)); }
      .col-num  { font-size: clamp(2rem, 7vw, 2.6rem); }
      .col-name { font-size: clamp(1.15rem, 4.5vw, 1.45rem); }
    }
    @media (max-width: 400px) {
      .search-btn span { display: none; }
      .col-arrow { display: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private recipeService = inject(RecipeService);
  private router = inject(Router);
  private seo = inject(SeoService);
  private perf = inject(PerfService);

  searchQuery = '';
  readonly bentoSlots = ['a', 'b', 'c', 'd', 'e', 'f'] as const;
  readonly collections = [
    { title: 'Есенни',    sub: 'Тиква, гъби, кестени — топли вкусове за студените дни.', query: 'есен',   hue: '35'  },
    { title: 'Постни',    sub: 'Рецепти без месо и млечни — за всеки ден и за празник.',  query: 'постно', hue: '145' },
    { title: 'За Коледа', sub: 'Традиционни ястия за празничната трапеза.',               query: 'коледа', hue: '22'  },
    { title: 'Бързи',     sub: 'Готови за по-малко от 30 минути — за натоварените дни.',  query: 'бързо',  hue: '55'  },
  ] as const;

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
  loading = computed(() => this.featuredResult() === undefined);
  errored = computed(() => this.featuredResult()?.kind === 'error');

  retry(): void { window.location.reload(); }

  constructor() {
    const destroyRef = inject(DestroyRef);
    this.perf.mark('home_start');
    this.seo.set({
      title: 'Начало',
      description: 'Традиционни български рецепти, споделени с любов. Открий лесни и вкусни ястия за всеки повод в кулинарния блог на Иво.',
    });
    afterNextRender(() => {
      const io = this.initReveal();
      if (io) destroyRef.onDestroy(() => io.disconnect());
    });
  }

  private initReveal(): IntersectionObserver | null {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!els.length) return null;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('in-view');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' },
    );
    els.forEach(el => io.observe(el));
    return io;
  }

  onSearch(e: Event): void {
    e.preventDefault();
    if (this.searchQuery.trim()) {
      this.router.navigate(['/recipes'], { queryParams: { q: this.searchQuery.trim() } });
    }
  }

  pad(n: number): string { return String(n).padStart(2, '0'); }
}
