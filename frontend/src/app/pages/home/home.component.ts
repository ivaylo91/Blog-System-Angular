import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
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
    <!-- HERO: full-bleed editorial -->
    <section class="hero" [class.has-image]="featured().length > 0 && !!featured()[0].hero_image">
      @if (featured().length > 0 && featured()[0].hero_image) {
        <img class="hero-bg" [src]="featured()[0].hero_image" alt=""
             fetchpriority="high" loading="eager" aria-hidden="true" />
      }
      <div class="hero-scrim" aria-hidden="true"></div>
      <div class="hero-inner">
        <span class="hero-eyebrow">Кулинарен блог</span>
        <h1 class="hero-title">Вкусът на<br/><em>българската кухня</em></h1>
        <p class="hero-subtitle">Традиционни рецепти, споделени с любов и внимание към всеки детайл.</p>
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
        @if (featured().length > 0) {
          <a class="hero-featured" [routerLink]="['/recipes', featured()[0].slug]">
            <span class="hero-featured-label">Избрана рецепта</span>
            <span class="hero-featured-title">{{ featured()[0].title }}</span>
            <span class="hero-featured-arrow" aria-hidden="true">→</span>
          </a>
        }
      </div>
    </section>

    <!-- FEATURED: bento grid -->
    <section class="featured">
      <div class="section-inner">
        <div class="section-heading">
          <h2 class="section-title">Избрани рецепти</h2>
          <a routerLink="/recipes" class="section-link">Виж всички →</a>
        </div>

        @if (loading()) {
          <div class="bento">
            @for (slot of bentoSlots; track slot) {
              <div class="bento-tile tile-{{ slot }}">
                <div class="sk-tile"></div>
              </div>
            }
          </div>
        } @else if (errored()) {
          <div class="featured-error" role="status">
            <p class="featured-error-msg">Рецептите не се зареждат в момента.</p>
            <button type="button" class="featured-error-btn" (click)="retry()">Опитай пак</button>
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

    <!-- COLLECTIONS: themed buckets -->
    <section class="collections">
      <div class="section-inner">
        <div class="section-heading">
          <h2 class="section-title">Тематични колекции</h2>
          <a routerLink="/categories" class="section-link">Всички категории →</a>
        </div>
        <div class="collection-grid">
          @for (col of collections; track col.query; let i = $index) {
            <a class="collection" [routerLink]="['/recipes']" [queryParams]="{ q: col.query }" [style.--col-hue]="col.hue">
              <span class="col-num">{{ pad(i + 1) }}</span>
              <h3 class="col-title">{{ col.title }}</h3>
              <p class="col-sub">{{ col.sub }}</p>
              <span class="col-arrow" aria-hidden="true">→</span>
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* ===== HERO — full-bleed editorial ===== */
    .hero {
      position: relative;
      min-height: clamp(520px, 78dvh, 760px);
      display: flex;
      align-items: flex-end;
      padding: clamp(4rem, 10vw, 7rem) var(--space-6) clamp(2.5rem, 6vw, 4.5rem);
      overflow: hidden;
      background-color: oklch(22% 0.02 40);
      color: #fff;
      isolation: isolate;
    }
    .hero-bg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -2;
    }
    .hero-scrim {
      position: absolute;
      inset: 0;
      z-index: -1;
      background:
        linear-gradient(180deg, rgba(12,10,8,0.25) 0%, rgba(12,10,8,0) 35%, rgba(12,10,8,0.55) 75%, rgba(12,10,8,0.88) 100%),
        linear-gradient(90deg, rgba(12,10,8,0.55) 0%, rgba(12,10,8,0.15) 55%, transparent 100%);
    }
    .hero:not(.has-image) .hero-scrim {
      background: linear-gradient(160deg, oklch(28% 0.03 55) 0%, oklch(18% 0.02 40) 100%);
    }
    .hero-inner {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }
    .hero-eyebrow {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.22em;
      color: rgba(255,255,255,0.85);
      padding: var(--space-1) var(--space-4);
      border: 1px solid rgba(255,255,255,0.28);
      border-radius: 9999px;
      margin-bottom: var(--space-7);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
    }
    .hero-title {
      font-family: var(--font-display);
      font-size: clamp(2.8rem, 8vw, 6.5rem);
      font-weight: 800;
      color: #fff;
      line-height: 0.98;
      margin: 0 0 var(--space-6);
      letter-spacing: -0.035em;
      max-width: 16ch;
      text-shadow: 0 2px 30px rgba(0,0,0,0.35);
    }
    .hero-title em {
      font-style: italic;
      color: color-mix(in oklch, var(--clr-brand) 30%, #fff);
      font-weight: 800;
    }
    .hero-subtitle {
      color: rgba(255,255,255,0.9);
      font-size: clamp(1rem, 1.3vw, 1.2rem);
      line-height: 1.6;
      margin: 0 0 var(--space-7);
      font-weight: 400;
      max-width: 48ch;
      text-shadow: 0 1px 14px rgba(0,0,0,0.3);
    }
    .search-form {
      display: flex;
      border-radius: 0.875rem;
      overflow: hidden;
      box-shadow: 0 12px 40px rgba(0,0,0,0.25);
      max-width: 480px;
      background: rgba(255,255,255,0.96);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      transition: box-shadow 0.2s;
    }
    .search-form:focus-within {
      box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 0 3px color-mix(in oklch, var(--clr-brand) 35%, transparent);
    }
    .search-input {
      flex: 1;
      padding: var(--space-4) var(--space-5);
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
      gap: var(--space-2);
      padding: var(--space-4) var(--space-6);
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

    .hero-featured {
      display: inline-flex;
      align-items: center;
      gap: var(--space-3);
      margin-top: var(--space-7);
      padding: var(--space-3) var(--space-4);
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.22);
      border-radius: 9999px;
      color: #fff;
      text-decoration: none;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      max-width: 100%;
      transition: background 0.25s var(--ease-out-expo), transform 0.25s var(--ease-out-expo), border-color 0.25s;
    }
    .hero-featured:hover {
      background: rgba(255,255,255,0.18);
      border-color: rgba(255,255,255,0.4);
      transform: translateY(-2px);
    }
    .hero-featured-label {
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: rgba(255,255,255,0.75);
      flex-shrink: 0;
    }
    .hero-featured-title {
      font-family: var(--font-display);
      font-size: 0.95rem;
      font-weight: 600;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 24ch;
    }
    .hero-featured-arrow {
      font-size: 1rem;
      color: color-mix(in oklch, var(--clr-brand) 30%, #fff);
      flex-shrink: 0;
      transition: transform 0.25s var(--ease-out-expo);
    }
    .hero-featured:hover .hero-featured-arrow {
      transform: translateX(4px);
    }

    /* ===== BENTO GRID ===== */
    .featured { padding: clamp(3rem, 6vw, 5.5rem) var(--space-6) clamp(3rem, 5vw, 5rem); background: var(--clr-surface); }
    .section-inner { max-width: 1200px; margin: 0 auto; }
    .section-heading {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: var(--space-8);
      gap: var(--space-4);
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
      padding-bottom: var(--space-3);
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
      gap: var(--space-1);
      transition: gap 0.25s cubic-bezier(0.25, 1, 0.5, 1);
      white-space: nowrap;
      flex-shrink: 0;
      padding-bottom: var(--space-3);
    }
    .section-link:hover { gap: var(--space-2); }

    /* ===== BENTO: ragged grid with varied weights ===== */
    .bento {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, clamp(180px, 21vw, 250px));
      grid-template-areas:
        "a a b c"
        "a a b d"
        "e e f f";
      gap: var(--space-5);
    }
    .tile-a { grid-area: a; }
    .tile-b { grid-area: b; }
    .tile-c { grid-area: c; }
    .tile-d { grid-area: d; }
    .tile-e { grid-area: e; }
    .tile-f { grid-area: f; }
    .bento-tile {
      border-radius: 1.25rem;
      overflow: hidden;
      min-width: 0;
    }
    .bento-tile > app-recipe-card {
      display: block;
      height: 100%;
    }

    /* Anti-slop: no "3 equal cards horizontally". 2fr | 1fr | 1fr asymmetric split
       with a zig-zag bias — first card dominates, next two share the remainder. */
    .featured-rest {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: var(--space-6);
      margin-top: var(--space-8);
      align-items: start;
    }
    .featured-rest > :nth-child(1) { grid-row: span 2; }
    .featured-rest > :nth-child(2) { padding-top: var(--space-5); }
    .featured-rest > :nth-child(3) { padding-top: var(--space-9); }

    /* Error state — editorial, not alert-y */
    .featured-error {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-5);
      padding: clamp(2.5rem, 6vw, 4rem) var(--space-6);
      text-align: center;
      background: var(--clr-surface-alt);
      border: 1px solid var(--clr-border-faint);
      border-radius: 1.25rem;
    }
    .featured-error-msg {
      font-family: var(--font-display);
      font-style: italic;
      font-size: clamp(1.05rem, 1.6vw, 1.25rem);
      color: var(--clr-text-muted);
      margin: 0;
      max-width: 32ch;
      line-height: 1.4;
    }
    .featured-error-btn {
      padding: var(--space-3) var(--space-5);
      border-radius: 9999px;
      border: 1px solid var(--clr-border);
      background: var(--clr-surface);
      color: var(--clr-text);
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s var(--ease-out-expo), border-color 0.2s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);
      touch-action: manipulation;
    }
    .featured-error-btn:hover { background: var(--clr-surface-hover); border-color: var(--clr-border-strong); transform: translateY(-1px); }
    .featured-error-btn:active { transform: translateY(0); }

    /* Skeleton tile — shimmering block that matches bento cell shape */
    .sk-tile {
      width: 100%;
      height: 100%;
      background: var(--clr-skeleton);
      border-radius: 1.25rem;
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

    /* ===== COLLECTIONS ===== */
    .collections {
      padding: clamp(3rem, 6vw, 5rem) var(--space-6) clamp(3rem, 6vw, 5rem);
      background: var(--clr-surface-alt);
      border-top: 1px solid var(--clr-border-faint);
    }
    .collection-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: var(--space-5);
    }
    .collection {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
      padding: var(--space-6) var(--space-6) var(--space-5);
      min-height: 200px;
      border-radius: 1.25rem;
      text-decoration: none;
      color: var(--clr-text);
      background:
        radial-gradient(130% 85% at 0% 0%, color-mix(in oklch, oklch(82% 0.13 var(--col-hue)) 50%, var(--clr-surface)) 0%, var(--clr-surface) 70%);
      border: 1px solid var(--clr-border-faint);
      box-shadow: var(--shadow-sm);
      overflow: hidden;
      transition: transform 0.35s var(--ease-out-expo), box-shadow 0.35s var(--ease-out-expo), border-color 0.25s;
      isolation: isolate;
    }
    .collection::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(55% 45% at 90% 95%, color-mix(in oklch, oklch(70% 0.14 var(--col-hue)) 38%, transparent) 0%, transparent 100%);
      z-index: -1;
      opacity: 0.75;
      transition: opacity 0.3s var(--ease-out-expo);
    }
    @media (hover: hover) and (pointer: fine) {
      .collection:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
        border-color: color-mix(in oklch, oklch(62% 0.13 var(--col-hue)) 40%, var(--clr-border));
      }
      .collection:hover::after { opacity: 1; }
      .collection:hover .col-arrow { transform: translateX(5px); }
    }
    .collection:active { transform: translateY(-1px); transition-duration: 0.1s; }
    .col-num {
      font-family: var(--font-display);
      font-size: 0.82rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      color: color-mix(in oklch, oklch(42% 0.12 var(--col-hue)) 90%, var(--clr-text-muted));
    }
    .col-num::before {
      content: '';
      display: inline-block;
      width: 1.2rem;
      height: 1px;
      background: currentColor;
      vertical-align: middle;
      margin-right: var(--space-2);
      opacity: 0.55;
      transform: translateY(-1px);
    }
    .col-title {
      font-family: var(--font-display);
      font-size: clamp(1.5rem, 2.2vw, 1.9rem);
      font-weight: 800;
      line-height: 1.05;
      letter-spacing: -0.02em;
      color: var(--clr-text);
      margin: 0;
    }
    .col-sub {
      font-size: 0.9rem;
      color: var(--clr-text-muted);
      line-height: 1.55;
      margin: 0;
    }
    .col-arrow {
      margin-top: auto;
      align-self: flex-end;
      font-size: 1.3rem;
      color: var(--clr-brand);
      transition: transform 0.3s var(--ease-out-expo);
    }
    @media (prefers-reduced-motion: reduce) {
      .collection { transition: box-shadow 0.2s, border-color 0.2s; }
      .collection:hover { transform: none; }
      .col-arrow { transition: none; }
      .collection:hover .col-arrow { transform: none; }
    }

    /* Anti-center bias: CTA skews to right-end with massive left white-space */
    .cta {
      display: flex;
      justify-content: flex-end;
      padding-left: clamp(0rem, 20vw, 14rem);
      margin-top: var(--space-10);
    }
    .cta-btn {
      display: inline-flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-3) var(--space-3) var(--space-3) var(--space-7);
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
      .hero { min-height: clamp(460px, 70dvh, 620px); }
      .hero-featured-title { max-width: 18ch; }
      .bento {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, clamp(180px, 40vw, 240px));
        grid-template-areas:
          "a a"
          "a a"
          "b c"
          "b d"
          "e f";
      }
      .featured-rest {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-5);
      }
      .featured-rest > :nth-child(1) { grid-row: span 1; }
      .featured-rest > :nth-child(2),
      .featured-rest > :nth-child(3) { padding-top: 0; }
      .cta { justify-content: center; padding-left: 0; }
    }
    @media (max-width: 640px) {
      .hero {
        min-height: clamp(440px, 80dvh, 560px);
        padding: clamp(3rem, 12vw, 5rem) var(--space-5) clamp(2rem, 6vw, 3rem);
      }
      .hero-title { max-width: 14ch; }
      .hero-subtitle { font-size: 1rem; margin-bottom: var(--space-6); }
      .search-form { max-width: 100%; border-radius: 0.75rem; }
      .search-input { padding: var(--space-3) var(--space-4); font-size: 0.9rem; }
      .search-btn { padding: var(--space-3) var(--space-4); font-size: 0.85rem; }
      .hero-featured { margin-top: var(--space-6); }
      .hero-featured-title { max-width: 14ch; font-size: 0.88rem; }
      .section-title::after { width: 2rem; }
      .bento {
        grid-template-columns: 1fr;
        grid-template-rows: none;
        grid-auto-rows: clamp(220px, 55vw, 300px);
        grid-template-areas:
          "a"
          "b"
          "c"
          "d"
          "e"
          "f";
        gap: var(--space-4);
      }
      .tile-a { grid-area: a; }
      .featured-rest { grid-template-columns: 1fr; gap: var(--space-4); }
      .cta-btn { width: 100%; justify-content: center; box-sizing: border-box; }
    }
    @media (max-width: 400px) {
      .search-btn span { display: none; }
      .hero-featured-label { display: none; }
    }

    /* Hero entrance choreography */
    @keyframes hero-rise {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .hero-eyebrow,
    .hero-title,
    .hero-subtitle,
    .search-form,
    .hero-featured {
      animation: hero-rise 620ms var(--ease-out-expo) both;
    }
    .hero-eyebrow  { animation-delay:   0ms; }
    .hero-title    { animation-delay: 120ms; }
    .hero-subtitle { animation-delay: 240ms; }
    .search-form   { animation-delay: 360ms; }
    .hero-featured { animation-delay: 480ms; }

    @media (prefers-reduced-motion: reduce) {
      .hero-featured { transition: background 0.2s, border-color 0.2s; }
      .hero-featured:hover { transform: none; }
      .hero-featured-arrow { transition: none; }
      .hero-featured:hover .hero-featured-arrow { transform: none; }
      .hero-eyebrow,
      .hero-title,
      .hero-subtitle,
      .search-form,
      .hero-featured { animation: none; }
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
    { title: 'Есенни',     sub: 'Тиква, гъби, кестени — топли вкусове за студените дни.', query: 'есен',   hue: '35'  },
    { title: 'Постни',     sub: 'Рецепти без месо и млечни — за всеки ден и за празник.',  query: 'постно', hue: '145' },
    { title: 'За Коледа',  sub: 'Традиционни ястия за празничната трапеза.',               query: 'коледа', hue: '22'  },
    { title: 'Бързи',      sub: 'Готови за по-малко от 30 минути — за натоварените дни.',  query: 'бързо',  hue: '55'  },
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

  retry(): void {
    window.location.reload();
  }

  constructor() {
    this.perf.mark('home_start');
    this.seo.set({
      title: 'Начало',
      description: 'Традиционни български рецепти, споделени с любов. Открий лесни и вкусни ястия за всеки повод в кулинарния блог на Иво.',
    });
  }

  onSearch(e: Event): void {
    e.preventDefault();
    if (this.searchQuery.trim()) {
      this.router.navigate(['/recipes'], { queryParams: { q: this.searchQuery.trim() } });
    }
  }

  pad(n: number): string {
    return String(n).padStart(2, '0');
  }
}
