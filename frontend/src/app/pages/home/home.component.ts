import { ChangeDetectionStrategy, Component, computed, inject, DestroyRef, afterNextRender } from '@angular/core';
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
  template: `
    <!-- ═══════════════════════ HERO ═══════════════════════ -->
    <section class="hero">
      <div class="blob-main" aria-hidden="true"></div>
      <div class="blob-sm"   aria-hidden="true"></div>
      <div class="hero-inner">

        <!-- Circular food image -->
        <div class="hero-img-col">
          <div class="hero-ring" aria-hidden="true"></div>
          @if (featured().length > 0 && featured()[0].hero_image) {
            <div class="hero-circle">
              <img [src]="featured()[0].hero_image" [alt]="featured()[0].title"
                   fetchpriority="high" loading="eager" />
            </div>
          } @else {
            <div class="hero-circle hero-circle-ph">
              <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5"
                   stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 44l4-20A8 8 0 0 1 23.8 18h32.4A8 8 0 0 1 64 24l4 20"/>
                <path d="M12 44h56v8a28 28 0 0 1-56 0v-8z"/>
              </svg>
            </div>
          }
        </div>

        <!-- Text -->
        <div class="hero-text-col">
          <p class="hero-eyebrow">Кулинарен блог</p>
          <h1 class="hero-title">Открийте<br>Вкусни<br>Рецепти</h1>
          <p class="hero-desc">Традиционни ястия, приготвени с любов и внимание към всеки детайл.</p>
          <a routerLink="/recipes" class="hero-btn">Разгледай рецептите</a>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════ POPULAR RECIPES ═══════════════════════ -->
    <section class="popular">
      <div class="section-inner">
        <p class="section-eyebrow">Вдъхновение от кухнята</p>
        <h2 class="section-heading">Популярни рецепти</h2>

        <div class="pop-grid">
          @if (loading()) {
            @for (s of [0, 1, 2]; track s) {
              <div class="pop-sk">
                <div class="sk-circle"></div>
                <div class="sk-line sk-long"></div>
                <div class="sk-line sk-med"></div>
                <div class="sk-line sk-short"></div>
              </div>
            }
          } @else if (errored()) {
            <div class="pop-error" role="status">
              <p>Рецептите не се зареждат в момента.</p>
              <button type="button" (click)="retry()">Опитай пак</button>
            </div>
          } @else {
            @for (recipe of featured().slice(0, 3); track recipe.id) {
              <a class="pop-card" [routerLink]="['/recipes', recipe.slug]">
                <div class="pop-img-wrap">
                  @if (recipe.hero_image) {
                    <img class="pop-img" [src]="recipe.hero_image" [alt]="recipe.title" loading="lazy" />
                  } @else {
                    <div class="pop-img-ph">
                      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                        <circle cx="20" cy="20" r="14"/><path d="M14 24c0-5.5 12-5.5 12 0"/>
                      </svg>
                    </div>
                  }
                  @if (recipe.category?.name) {
                    <span class="pop-badge">{{ recipe.category!.name }}</span>
                  }
                </div>
                <h3 class="pop-title">{{ recipe.title }}</h3>
                <p class="pop-desc">{{ recipe.excerpt || '' }}</p>
                <div class="pop-stars" aria-label="5 звезди от 5">★★★★★</div>
                <span class="pop-btn">Виж рецептата</span>
              </a>
            }
          }
        </div>

        <div class="pop-cta-wrap">
          <a routerLink="/recipes" class="pop-cta">
            Всички рецепти
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                 stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════ DARK: CATEGORIES ═══════════════════════ -->
    <section class="cats-dark">
      <div class="section-inner">
        <p class="cats-eyebrow">Открийте по тема</p>
        <h2 class="cats-title">Лесен начин за<br>вкусна кухня</h2>
        <p class="cats-sub">Намерете рецептата по ваш вкус</p>
        <div class="cats-row">

          <a class="cat-item" routerLink="/recipes" [queryParams]="{ q: 'супа' }">
            <div class="cat-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M6 14h20M8 14c0 5.5 3.5 9 8 9s8-3.5 8-9"/>
                <path d="M12 10c0-2.2 1.8-4 4-4s4 1.8 4 4"/>
                <path d="M5 22h22"/>
              </svg>
            </div>
            <span>Супи</span>
          </a>

          <a class="cat-item" routerLink="/recipes" [queryParams]="{ q: 'десерт' }">
            <div class="cat-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="6" y="16" width="20" height="10" rx="2"/>
                <path d="M6 16c0-5.5 20-5.5 20 0"/>
                <path d="M16 8v8M12 10l4-4 4 4"/>
              </svg>
            </div>
            <span>Десерти</span>
          </a>

          <a class="cat-item" routerLink="/recipes" [queryParams]="{ q: 'основно' }">
            <div class="cat-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="16" cy="16" r="11"/>
                <path d="M9 20c2-6 12-6 14 0"/>
                <circle cx="16" cy="12" r="2.5"/>
              </svg>
            </div>
            <span>Основни</span>
          </a>

          <a class="cat-item" routerLink="/recipes" [queryParams]="{ q: 'салата' }">
            <div class="cat-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M7 22c0 0 2-12 9-14 7-2 11 4 11 14"/>
                <path d="M10 16c2-4 5-5 8-3"/>
                <path d="M6 22h20"/>
              </svg>
            </div>
            <span>Салати</span>
          </a>

          <a class="cat-item" routerLink="/recipes" [queryParams]="{ q: 'закуска' }">
            <div class="cat-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="6" y="10" width="20" height="12" rx="4"/>
                <path d="M8 14h16M8 18h16"/>
              </svg>
            </div>
            <span>Закуски</span>
          </a>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════ ABOUT SPLIT ═══════════════════════ -->
    <section class="about">
      <div class="section-inner about-inner">
        <div class="about-text">
          <p class="eyebrow">Нашата история</p>
          <h2 class="about-title">Ние сме<br>Блогът за<br><em class="about-em">Качествена Кухня</em></h2>
          <p class="about-body">Традиционни рецепти, предадени от поколение на поколение. Готвим с любов, споделяме с радост — всяко ястие носи частица от нашия дом и топлината на семейната трапеза.</p>
          <a routerLink="/recipes" class="about-btn">Разгледай рецепти</a>
        </div>
        <div class="about-img-col">
          @if (featured().length > 1 && featured()[1].hero_image) {
            <div class="about-circle">
              <img [src]="featured()[1].hero_image" [alt]="featured()[1].title" loading="lazy" />
            </div>
          } @else if (featured().length > 0 && featured()[0].hero_image) {
            <div class="about-circle">
              <img [src]="featured()[0].hero_image" [alt]="featured()[0].title" loading="lazy" />
            </div>
          } @else {
            <div class="about-circle about-circle-ph"></div>
          }
          <div class="about-blob" aria-hidden="true"></div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════ COLLECTIONS ═══════════════════════ -->
    <section class="collections" data-reveal>
      <div class="section-inner">
        <div class="section-head">
          <div>
            <p class="eyebrow">Открий по тема</p>
            <h2 class="section-heading-left">Тематични колекции</h2>
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
                  <p class="col-sub-text">{{ col.sub }}</p>
                </div>
                <svg class="col-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: [`
    /* ─── HERO ─────────────────────────────────────────────────── */
    .hero {
      position: relative;
      overflow: hidden;
      background: var(--clr-surface);
      min-height: clamp(500px, 68dvh, 760px);
    }

    /* Large orange organic blob — top-left */
    .blob-main {
      position: absolute;
      top: -12%;
      left: -12%;
      width: 72%;
      height: 140%;
      background: var(--clr-brand);
      border-radius: 38% 62% 68% 32% / 44% 48% 52% 56%;
      z-index: 0;
    }

    /* Small peach accent — bottom-right */
    .blob-sm {
      position: absolute;
      bottom: -22%;
      right: -6%;
      width: 34%;
      height: 70%;
      background: oklch(96% 0.035 45);
      border-radius: 50%;
      z-index: 0;
    }

    .hero-inner {
      position: relative;
      z-index: 1;
      max-width: 1220px;
      margin: 0 auto;
      padding: clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem);
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: clamp(2rem, 5vw, 5rem);
      min-height: inherit;
    }

    /* ── Image column */
    .hero-img-col {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .hero-ring {
      position: absolute;
      width: calc(clamp(200px, 70vw, 460px) + 32px);
      height: calc(clamp(200px, 70vw, 460px) + 32px);
      border-radius: var(--radius-circle);
      border: 2.5px solid oklch(100% 0 0 / 0.45);
      z-index: 0;
    }

    .hero-circle {
      position: relative;
      z-index: 1;
      width: clamp(200px, 70vw, 460px);
      height: clamp(200px, 70vw, 460px);
      border-radius: var(--radius-circle);
      overflow: hidden;
      border: 7px solid oklch(100% 0 0);
      box-shadow:
        0 0 0 3px color-mix(in oklch, var(--clr-brand) 30%, transparent),
        var(--shadow-xl);
    }

    .hero-circle img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero-circle-ph {
      background: oklch(95% 0.04 50);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--clr-text-faint);
    }
    .hero-circle-ph svg { width: 4rem; height: 4rem; }

    /* ── Text column */
    .hero-text-col {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-5);
    }

    .hero-eyebrow {
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.22em;
      color: var(--clr-brand);
      margin: 0;
      animation: hero-rise 0.5s var(--ease-out-expo) both 0ms;
    }

    .hero-title {
      font-family: var(--font-display);
      font-size: clamp(2.8rem, 5.5vw, 5.2rem);
      font-weight: 800;
      color: var(--clr-text);
      line-height: 0.98;
      letter-spacing: -0.03em;
      margin: 0;
      animation: hero-rise 0.5s var(--ease-out-expo) both 80ms;
    }

    .hero-desc {
      font-size: clamp(0.95rem, 1.2vw, 1.1rem);
      color: var(--clr-text-muted);
      line-height: 1.65;
      max-width: 40ch;
      margin: 0;
      animation: hero-rise 0.5s var(--ease-out-expo) both 160ms;
    }

    .hero-btn {
      display: inline-flex;
      align-items: center;
      padding: var(--space-4) var(--space-8);
      background: var(--clr-brand);
      color: oklch(100% 0 0);
      border-radius: var(--radius-pill);
      font-weight: 700;
      font-size: 1rem;
      text-decoration: none;
      transition: background 0.18s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);
      touch-action: manipulation;
      animation: hero-rise 0.5s var(--ease-out-expo) both 240ms;
    }
    .hero-btn:hover { background: var(--clr-brand-dark); transform: translateY(-2px); }
    .hero-btn:active { transform: translateY(0); }

    @keyframes hero-rise {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @media (prefers-reduced-motion: reduce) {
      .hero-eyebrow, .hero-title, .hero-desc, .hero-btn { animation: none; }
    }

    /* ─── POPULAR RECIPES ──────────────────────────────────────── */
    .popular {
      padding: clamp(4rem, 7vw, 6rem) var(--space-6);
      background: var(--clr-bg);
    }

    .section-inner { max-width: 1220px; margin: 0 auto; }

    .section-eyebrow {
      text-align: center;
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--clr-brand);
      margin: 0 0 var(--space-2);
      opacity: 0.9;
    }

    .section-heading {
      font-family: var(--font-display);
      font-size: clamp(1.7rem, 3vw, 2.5rem);
      font-weight: 800;
      color: var(--clr-text);
      text-align: center;
      margin: 0 0 var(--space-9);
      letter-spacing: -0.025em;
      line-height: 1.1;
    }

    .pop-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-6);
      margin-bottom: var(--space-8);
    }

    /* Card */
    .pop-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      text-decoration: none;
      padding: var(--space-6) var(--space-5);
      background: var(--clr-surface);
      border-radius: var(--radius-xl);
      border: 1px solid var(--clr-border-faint);
      box-shadow: var(--shadow-sm);
      color: inherit;
      transition: box-shadow 0.22s var(--ease-out-expo), transform 0.22s var(--ease-out-expo);
    }
    .pop-card:hover { box-shadow: var(--shadow-md); transform: translateY(-5px); }
    .pop-card:active { transform: translateY(-2px); }

    .pop-img-wrap {
      position: relative;
      width: clamp(140px, 20vw, 190px);
      height: clamp(140px, 20vw, 190px);
      border-radius: var(--radius-circle);
      overflow: hidden;
      border: 5px solid var(--clr-brand);
      margin-bottom: var(--space-5);
      flex-shrink: 0;
    }

    .pop-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s var(--ease-out-expo);
    }
    .pop-card:hover .pop-img { transform: scale(1.07); }

    .pop-img-ph {
      width: 100%;
      height: 100%;
      background: var(--clr-surface-alt);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--clr-text-faint);
    }
    .pop-img-ph svg { width: 2rem; height: 2rem; }

    .pop-badge {
      position: absolute;
      bottom: var(--space-2);
      left: 50%;
      transform: translateX(-50%);
      background: var(--clr-brand);
      color: oklch(100% 0 0);
      font-size: 0.6rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 2px var(--space-3);
      border-radius: var(--radius-pill);
      white-space: nowrap;
    }

    .pop-title {
      font-family: var(--font-display);
      font-size: clamp(1rem, 1.3vw, 1.2rem);
      font-weight: 700;
      color: var(--clr-text);
      margin: 0 0 var(--space-2);
      line-height: 1.25;
      letter-spacing: -0.015em;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .pop-desc {
      font-size: 0.85rem;
      color: var(--clr-text-muted);
      line-height: 1.55;
      margin: 0 0 var(--space-3);
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      max-width: 28ch;
    }

    .pop-stars {
      color: var(--clr-brand);
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      margin-bottom: var(--space-4);
    }

    .pop-btn {
      display: inline-block;
      padding: var(--space-2) var(--space-5);
      background: var(--clr-brand);
      color: oklch(100% 0 0);
      border-radius: var(--radius-pill);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.02em;
      transition: background 0.18s var(--ease-out-expo);
      margin-top: auto;
    }
    .pop-card:hover .pop-btn { background: var(--clr-brand-dark); }

    /* Skeleton */
    .pop-sk {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-6) var(--space-5);
      background: var(--clr-surface);
      border-radius: var(--radius-xl);
      border: 1px solid var(--clr-border-faint);
    }
    .sk-circle {
      width: 160px;
      height: 160px;
      border-radius: var(--radius-circle);
      background: var(--clr-skeleton);
      position: relative;
      overflow: hidden;
      flex-shrink: 0;
    }
    .sk-circle::after, .sk-line::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent 0%, var(--clr-skeleton-shine) 50%, transparent 100%);
      transform: translateX(-100%);
      animation: shimmer 1.5s linear infinite;
    }
    .sk-line {
      height: 0.8rem;
      border-radius: var(--radius-pill);
      background: var(--clr-skeleton);
      position: relative;
      overflow: hidden;
    }
    .sk-long { width: 70%; }
    .sk-med  { width: 55%; }
    .sk-short { width: 35%; }
    @keyframes shimmer {
      from { transform: translateX(-100%); }
      to   { transform: translateX(100%); }
    }

    /* Error */
    .pop-error {
      grid-column: 1 / -1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-4);
      padding: var(--space-8);
      text-align: center;
    }
    .pop-error p { color: var(--clr-text-muted); margin: 0; }
    .pop-error button {
      padding: var(--space-3) var(--space-5);
      border-radius: var(--radius-pill);
      border: 1.5px solid var(--clr-border-strong);
      background: var(--clr-surface);
      color: var(--clr-text);
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.18s;
    }
    .pop-error button:hover { background: var(--clr-surface-hover); }

    .pop-cta-wrap { display: flex; justify-content: center; }
    .pop-cta {
      display: inline-flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-3) var(--space-7);
      background: var(--clr-text);
      color: var(--clr-bg);
      border-radius: var(--radius-pill);
      font-weight: 600;
      font-size: 0.9rem;
      text-decoration: none;
      transition: background 0.22s var(--ease-out-expo), transform 0.22s var(--ease-out-expo);
      touch-action: manipulation;
    }
    .pop-cta svg { width: 0.95rem; height: 0.95rem; flex-shrink: 0; }
    .pop-cta:hover { background: var(--clr-brand); transform: translateY(-2px); }
    .pop-cta:active { transform: translateY(0) scale(0.98); }

    /* ─── DARK CATEGORIES ──────────────────────────────────────── */
    .cats-dark {
      padding: clamp(4rem, 7vw, 6rem) var(--space-6);
      background: var(--clr-text);
      text-align: center;
    }

    .cats-eyebrow {
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--clr-brand);
      margin: 0 0 var(--space-3);
    }

    .cats-title {
      font-family: var(--font-display);
      font-size: clamp(1.7rem, 3vw, 2.5rem);
      font-weight: 800;
      color: oklch(97% 0.006 55);
      margin: 0 0 var(--space-2);
      letter-spacing: -0.025em;
      line-height: 1.15;
    }

    .cats-sub {
      font-size: 0.9rem;
      color: oklch(60% 0.010 52);
      margin: 0;
      line-height: 1.6;
    }

    .cats-row {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: clamp(var(--space-6), 5vw, var(--space-10));
      margin-top: var(--space-9);
    }

    .cat-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-3);
      text-decoration: none;
      color: oklch(88% 0.006 60);
      transition: transform 0.22s var(--ease-out-expo);
    }
    .cat-item:hover { transform: translateY(-5px); }
    .cat-item:hover .cat-icon {
      background: var(--clr-brand);
      color: oklch(100% 0 0);
    }

    .cat-icon {
      width: 5rem;
      height: 5rem;
      background: oklch(100% 0 0);
      border-radius: var(--radius-circle);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--clr-brand);
      transition: background 0.22s var(--ease-out-expo), color 0.22s var(--ease-out-expo);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }
    .cat-icon svg { width: 1.75rem; height: 1.75rem; }

    .cat-item span {
      font-size: 0.875rem;
      font-weight: 600;
      letter-spacing: 0.02em;
    }

    /* ─── ABOUT SPLIT ──────────────────────────────────────────── */
    .about {
      padding: clamp(4rem, 7vw, 6.5rem) var(--space-6);
      background: var(--clr-surface);
    }

    .about-inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: clamp(3rem, 6vw, 6rem);
    }

    .about-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-5);
    }

    .eyebrow {
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--clr-brand);
      margin: 0;
      opacity: 0.9;
    }

    .about-title {
      font-family: var(--font-display);
      font-size: clamp(2rem, 3.5vw, 3.2rem);
      font-weight: 800;
      color: var(--clr-text);
      line-height: 1.05;
      letter-spacing: -0.03em;
      margin: 0;
    }

    .about-em {
      color: var(--clr-brand);
      font-style: italic;
    }

    .about-body {
      font-size: clamp(0.9rem, 1.1vw, 1rem);
      color: var(--clr-text-muted);
      line-height: 1.7;
      max-width: 48ch;
      margin: 0;
    }

    .about-btn {
      display: inline-flex;
      align-items: center;
      padding: var(--space-3) var(--space-7);
      background: var(--clr-brand);
      color: oklch(100% 0 0);
      border-radius: var(--radius-pill);
      font-weight: 700;
      font-size: 0.9rem;
      text-decoration: none;
      transition: background 0.18s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);
      touch-action: manipulation;
    }
    .about-btn:hover { background: var(--clr-brand-dark); transform: translateY(-2px); }

    .about-img-col {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .about-blob {
      position: absolute;
      bottom: -18%;
      right: -14%;
      width: 68%;
      height: 68%;
      background: oklch(96% 0.035 45);
      border-radius: 50%;
      z-index: 0;
    }

    .about-circle {
      position: relative;
      z-index: 1;
      width: clamp(200px, 72vw, 480px);
      height: clamp(200px, 72vw, 480px);
      border-radius: var(--radius-circle);
      overflow: hidden;
      box-shadow: var(--shadow-xl);
      border: 6px solid var(--clr-surface);
      outline: 3px solid var(--clr-brand);
      outline-offset: 3px;
    }

    .about-circle img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .about-circle-ph { background: var(--clr-surface-alt); }

    /* ─── COLLECTIONS ──────────────────────────────────────────── */
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
      background: var(--clr-bg);
      content-visibility: auto;
      contain-intrinsic-block-size: 520px;
    }

    .section-head {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: var(--space-8);
      gap: var(--space-4);
    }

    .section-heading-left {
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

    .col-list { list-style: none; margin: 0; padding: 0; }

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
    .col-list li:first-child .col-strip { border-top: 1px solid var(--clr-border-faint); }
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

    .col-sub-text {
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

    /* ─── RESPONSIVE ───────────────────────────────────────────── */
    @media (max-width: 920px) {
      .hero-inner {
        grid-template-columns: 1fr;
        text-align: center;
        min-height: auto;
      }
      .hero-text-col { align-items: center; order: 1; }
      .hero-img-col  { order: 2; }
      .hero-desc     { max-width: 52ch; }
      .blob-main {
        width: 100%;
        height: 52%;
        top: 0;
        left: 0;
        border-radius: 0 0 52% 48% / 0 0 36% 36%;
      }
      .blob-sm { display: none; }
      .pop-grid { grid-template-columns: 1fr 1fr; }
      .about-inner { grid-template-columns: 1fr; text-align: center; }
      .about-text   { align-items: center; }
      .about-body   { max-width: 52ch; }
      .about-img-col { order: -1; }
    }

    @media (max-width: 640px) {
      .pop-grid { grid-template-columns: 1fr; max-width: 380px; margin-inline: auto; }
      .cats-row { gap: var(--space-6); }
      .hero-inner { padding-left: clamp(1rem, 5vw, 1.5rem); padding-right: clamp(1rem, 5vw, 1.5rem); }
      .col-strip { grid-template-columns: 3.5rem 1fr auto; gap: var(--space-4); padding: var(--space-5) var(--space-3); margin: 0 calc(-1 * var(--space-3)); }
      .col-num  { font-size: clamp(2rem, 7vw, 2.6rem); }
      .col-name { font-size: clamp(1.15rem, 4.5vw, 1.45rem); }
    }

    @media (max-width: 400px) { .col-arrow { display: none; } }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private recipeService = inject(RecipeService);
  private seo = inject(SeoService);
  private perf = inject(PerfService);

  readonly collections = [
    { title: 'Есенни',    sub: 'Тиква, гъби, кестени — топли вкусове за студените дни.', query: 'есен' },
    { title: 'Постни',    sub: 'Рецепти без месо и млечни — за всеки ден и за празник.',  query: 'постно' },
    { title: 'За Коледа', sub: 'Традиционни ястия за празничната трапеза.',               query: 'коледа' },
    { title: 'Бързи',     sub: 'Готови за по-малко от 30 минути — за натоварените дни.',  query: 'бързо' },
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

  pad(n: number): string { return String(n).padStart(2, '0'); }
}
