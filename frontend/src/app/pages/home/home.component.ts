import {
  ChangeDetectionStrategy, Component, OnDestroy, OnInit,
  computed, inject, signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of, tap } from 'rxjs';
import { RecipeService } from '../../services/recipe.service';
import { SeoService } from '../../services/seo.service';
import { PerfService } from '../../services/perf.service';
import { RecentlyViewedService } from '../../services/recently-viewed.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <!-- ══════════════════ HERO CAROUSEL ════════════════════════════════════ -->
    @if (loading() && featured().length === 0) {
      <div class="hero-skeleton" aria-hidden="true">
        <div class="hero-sk-grad"></div>
        <div class="hero-sk-content">
          <div class="sk-badge"></div>
          <div class="sk-title"></div>
          <div class="sk-sub"></div>
        </div>
      </div>
    } @else if (featured().length > 0) {
      <section class="hero-carousel" aria-label="Препоръчани рецепти">

        <!-- BG slides — one image per recipe, crossfade -->
        @for (r of featured(); track r.id; let i = $index) {
          <div class="slide-bg" [class.slide-bg--active]="i === heroIndex()">
            @if (r.hero_image) {
              <img [src]="r.hero_image"
                   [srcset]="r.hero_image_sm ? r.hero_image_sm + ' 600w, ' + r.hero_image + ' 1200w' : ''"
                   sizes="100vw"
                   [alt]="r.title" class="slide-bg-img"
                   [loading]="i === 0 ? 'eager' : 'lazy'"
                   [attr.fetchpriority]="i === 0 ? 'high' : null" />
            } @else {
              <div class="slide-bg-ph"
                   [style.background]="'linear-gradient(135deg,' + (r.hero_palette_from || '#1b3c72') + ',' + (r.hero_palette_to || '#2455a8') + ')'"></div>
            }
          </div>
        }

        <!-- Gradient overlay -->
        <div class="carousel-overlay" aria-hidden="true"></div>

        <!-- Slide content — one per recipe -->
        @for (r of featured(); track r.id; let i = $index) {
          <div class="slide-content"
               [class.slide-content--active]="i === heroIndex()"
               [attr.aria-hidden]="i !== heroIndex()">
            <div class="slide-badges">
              <span class="badge badge--featured">Препоръчана</span>
              @if (r.category?.name) {
                <span class="badge badge--cat">{{ r.category!.name }}</span>
              }
            </div>
            <h2 class="slide-title">{{ r.title }}</h2>
            @if (r.excerpt) {
              <p class="slide-sub">{{ r.excerpt }}</p>
            }
            <div class="slide-meta">
              @if (r.prep_minutes || r.cook_minutes) {
                <div class="slide-meta-item">
                  <span class="slide-meta-label">Готвене</span>
                  <span class="slide-meta-val">{{ (r.prep_minutes || 0) + (r.cook_minutes || 0) }} мин.</span>
                </div>
              }
              @if (r.difficulty) {
                <div class="slide-meta-item">
                  <span class="slide-meta-label">Трудност</span>
                  <span class="slide-meta-val">{{ r.difficulty }}</span>
                </div>
              }
              @if (r.servings) {
                <div class="slide-meta-item">
                  <span class="slide-meta-label">Порции</span>
                  <span class="slide-meta-val">{{ r.servings }}</span>
                </div>
              }
            </div>
            <a [routerLink]="['/recipes', r.slug]" class="slide-btn"
               [tabindex]="i === heroIndex() ? 0 : -1">
              Виж рецептата →
            </a>
          </div>
        }

        <!-- Prev / next arrows -->
        @if (featured().length > 1) {
          <button class="carousel-arrow carousel-arrow--prev"
                  (click)="prevSlide()" aria-label="Предишна рецепта">‹</button>
          <button class="carousel-arrow carousel-arrow--next"
                  (click)="nextSlide()" aria-label="Следваща рецепта">›</button>

          <div class="carousel-controls" role="tablist" aria-label="Слайдове">
            <!-- WCAG 2.2.2 pause/play button -->
            <button class="carousel-pause" type="button"
                    (click)="togglePause()"
                    [attr.aria-label]="isPaused() ? 'Пусни слайдшоу' : 'Спри слайдшоу'"
                    [attr.aria-pressed]="isPaused()">
              @if (isPaused()) {
                <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" width="10" height="10">
                  <path d="M3 3l10 5-10 5V3z"/>
                </svg>
              } @else {
                <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" width="10" height="10">
                  <rect x="3" y="2" width="4" height="12" rx="1"/>
                  <rect x="9" y="2" width="4" height="12" rx="1"/>
                </svg>
              }
            </button>
            @for (r of featured(); track r.id; let i = $index) {
              <button class="carousel-dot" [class.carousel-dot--active]="i === heroIndex()"
                      role="tab" [attr.aria-selected]="i === heroIndex()"
                      [attr.aria-label]="'Рецепта ' + (i + 1) + ' от ' + featured().length"
                      (click)="goToSlide(i)"></button>
            }
          </div>
        }
      </section>
    }

    <!-- ══════════════════ CATEGORY STRIP ═══════════════════════════════════ -->
    <nav class="cats" aria-label="Категории рецепти">
      <div class="cats-inner">
        @if (categoriesLoading()) {
          @for (s of [0,1,2,3,4,5,6,7]; track s) {
            <span class="cat-tab cat-tab-sk" aria-hidden="true"></span>
          }
        } @else {
          <a routerLink="/recipes" class="cat-tab cat-tab--all">Всички</a>
          @for (cat of categories().slice(0, 7); track cat.id) {
            <a [routerLink]="['/recipes']" [queryParams]="{category: cat.slug}"
               class="cat-tab">{{ cat.name }}</a>
          }
        }
      </div>
    </nav>

    <!-- ══════════════════ TAGLINE ═════════════════════════════════════════ -->
    <div class="tagline-strip">
      <div class="tagline-inner">
        <span class="tagline-rule" aria-hidden="true"></span>
        <p class="tagline-text">рецепти направени с любов</p>
        <span class="tagline-rule tagline-rule--right" aria-hidden="true"></span>
      </div>
    </div>

    <!-- ══════════════════ EDITORIAL FEATURED ═══════════════════════════════ -->
    <section class="editorial-sec">
      <div class="sec-inner">

        <header class="sec-head">
          <span class="sec-eyebrow">ИЗБРАНИ РЕЦЕПТИ</span>
          <h2 class="sec-title">Нашите любими</h2>
          <div class="sec-rule"></div>
        </header>

        @if (loading()) {
          <div class="ed-sk">
            @for (s of [0,1,2]; track s) {
              <div class="sk-row" [class.sk-row--rev]="s % 2 === 1">
                <div class="sk-img"></div>
                <div class="sk-body">
                  <div class="sk-line sk-sm"></div>
                  <div class="sk-line sk-xl"></div>
                  <div class="sk-line sk-md"></div>
                  <div class="sk-line sk-sm" style="margin-top:.5rem"></div>
                </div>
              </div>
            }
          </div>
        } @else if (errored()) {
          <p class="err-msg">Рецептите не могат да се заредят в момента.</p>
        } @else {
          <div class="ed-list">
            @for (r of featured().slice(0, 6); track r.id; let i = $index) {
              <article class="feat-row" [class.feat-row--rev]="i % 2 === 1">

                <div class="feat-img-wrap">
                  <a [routerLink]="['/recipes', r.slug]" class="feat-img-link"
                     tabindex="-1" aria-hidden="true">
                    @if (r.hero_image) {
                      <img [src]="r.hero_image" [alt]="r.title" class="feat-img"
                           [loading]="i < 2 ? 'eager' : 'lazy'" />
                    } @else {
                      <div class="feat-img-ph"
                           [style.background]="'linear-gradient(135deg,' + (r.hero_palette_from || '#dae6f5') + ',' + (r.hero_palette_to || '#b8d0e8') + ')'"></div>
                    }
                  </a>
                  <span class="feat-num" aria-hidden="true">
                    {{ i < 9 ? '0' : '' }}{{ i + 1 }}
                  </span>
                </div>

                <div class="feat-body">
                  @if (r.category?.name) {
                    <span class="feat-cat">{{ r.category!.name }}</span>
                  }
                  <h3 class="feat-title">
                    <a [routerLink]="['/recipes', r.slug]" class="feat-title-link">{{ r.title }}</a>
                  </h3>
                  @if (r.excerpt) {
                    <p class="feat-desc">{{ r.excerpt }}</p>
                  }
                  <div class="feat-meta">
                    @if (r.prep_minutes || r.cook_minutes) {
                      <span class="feat-meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             aria-hidden="true" width="13" height="13">
                          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                        {{ (r.prep_minutes || 0) + (r.cook_minutes || 0) }} мин.
                      </span>
                    }
                    @if (r.difficulty) {
                      <span class="feat-meta-sep" aria-hidden="true">·</span>
                      <span class="feat-meta-item">{{ r.difficulty }}</span>
                    }
                  </div>
                  <a [routerLink]="['/recipes', r.slug]" class="feat-cta">
                    Виж рецептата
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"
                         width="14" height="14">
                      <path d="M5 12h14M13 6l6 6-6 6"/>
                    </svg>
                  </a>
                </div>

              </article>
            }
          </div>

          <div class="sec-footer">
            <a routerLink="/recipes" class="all-link">Виж всички рецепти →</a>
          </div>
        }

      </div>
    </section>

    <!-- ══════════════════ AUTHOR STRIP ═════════════════════════════════════ -->
    <div class="author-strip">
      <div class="author-inner">
        <div class="author-avatar" aria-hidden="true">ИВО</div>
        <div class="author-copy">
          <p class="author-eyebrow">За автора</p>
          <h3 class="author-name">Здравейте, аз съм Иво!</h3>
          <p class="author-bio">
            Обичам да готвя от малък — израснал съм с аромата на домашна баница, прясно сварена боб чорба и сладкото ухание на козунак преди Великден. Тук споделям любимите си рецепти: от бабините класики и традиционните български ястия до бързи и лесни идеи за всеки ден. Вярвам, че доброто готвене е преди всичко акт на любов — към семейството, приятелите и към себе си.
          </p>
        </div>
      </div>
    </div>

    <!-- ══════════════════ RECENTLY VIEWED ══════════════════════════════════ -->
    @if (recentlyViewed().length > 0) {
      <section class="rv-section" aria-label="Наскоро разглеждани">
        <div class="rv-inner">
          <div class="rv-head">
            <span class="rv-label">Наскоро разглеждани</span>
            <a routerLink="/recipes" class="rv-more">Всички рецепти →</a>
          </div>
          <div class="rv-strip">
            @for (r of recentlyViewed(); track r.slug) {
              <a [routerLink]="['/recipes', r.slug]" class="rv-card">
                <div class="rv-img-wrap">
                  @if (r.hero_image) {
                    <img [src]="r.hero_image" [alt]="r.title" class="rv-img" loading="lazy" />
                  } @else {
                    <div class="rv-img-ph"></div>
                  }
                </div>
                <div class="rv-info">
                  @if (r.category?.name) {
                    <span class="rv-cat">{{ r.category!.name }}</span>
                  }
                  <span class="rv-title">{{ r.title }}</span>
                  <span class="rv-time">{{ (r.prep_minutes || 0) + (r.cook_minutes || 0) }} мин.</span>
                </div>
              </a>
            }
          </div>
        </div>
      </section>
    }

  `,
  styles: [`
    :host { display: block; background: var(--paper); }

    /* ══ HERO CAROUSEL ════════════════════════════════════════════════════ */
    .hero-skeleton {
      position: relative;
      height: 560px;
      background: linear-gradient(135deg, var(--terracotta) 0%, var(--clr-brand-hover) 100%);
      overflow: hidden;
    }
    .hero-sk-grad {
      position: absolute;
      inset: 0;
      background: linear-gradient(108deg, rgba(6,16,46,0.70) 0%, rgba(0,0,0,0.30) 60%);
    }
    .hero-sk-content {
      position: absolute;
      bottom: 3rem;
      left: 4rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .sk-badge  { width: 100px; height: 26px; border-radius: 100px; background: rgba(255,255,255,.18); animation: sk-pulse 1.6s ease-in-out infinite; }
    .sk-title  { width: 420px; height: 56px; border-radius: var(--radius-md); background: rgba(255,255,255,.18); animation: sk-pulse 1.6s ease-in-out infinite 0.1s; }
    .sk-sub    { width: 320px; height: 20px; border-radius: var(--radius-md); background: rgba(255,255,255,.12); animation: sk-pulse 1.6s ease-in-out infinite 0.2s; }

    .hero-carousel {
      position: relative;
      height: 560px;
      overflow: hidden;
      background: var(--terracotta);
    }

    /* Background slides */
    .slide-bg {
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 0.9s ease;
      z-index: 0;
    }
    .slide-bg--active { opacity: 1; }
    .slide-bg-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .slide-bg-ph {
      width: 100%;
      height: 100%;
    }

    /* Dark gradient overlay */
    .carousel-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(108deg, rgba(6,16,46,0.75) 0%, rgba(0,0,0,0.40) 50%, rgba(0,0,0,0.08) 100%);
      z-index: 1;
    }

    /* Slide content panes */
    .slide-content {
      position: absolute;
      bottom: 0;
      left: 0;
      width: min(54%, 740px);
      padding: clamp(2rem, 4vw, 3.25rem) clamp(2rem, 5vw, 4rem);
      z-index: 2;
      opacity: 0;
      transform: translateY(18px);
      transition: opacity 0.55s ease 0.12s, transform 0.55s cubic-bezier(0.16,1,0.3,1) 0.12s;
      pointer-events: none;
    }
    .slide-content--active {
      opacity: 1;
      transform: none;
      pointer-events: auto;
    }

    /* Badges */
    .slide-badges {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1.125rem;
      flex-wrap: wrap;
    }
    .badge {
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 5px 13px;
      border-radius: var(--radius-pill);
      white-space: nowrap;
    }
    .badge--featured {
      background: var(--warm, #bc3f34);
      color: #fff;
    }
    .badge--cat {
      background: rgba(255,255,255,0.18);
      color: #fff;
      border: 1px solid rgba(255,255,255,0.28);
    }

    /* Slide title */
    .slide-title {
      font-family: var(--font-display);
      font-size: clamp(2.25rem, 5vw, 3.75rem);
      font-weight: 800;
      color: #fff;
      line-height: 1.05;
      letter-spacing: -0.025em;
      margin: 0 0 0.75rem;
      text-wrap: balance;
    }

    /* Subtitle */
    .slide-sub {
      font-size: 1.0rem;
      color: rgba(255,255,255,0.76);
      margin: 0 0 1.75rem;
      font-weight: 300;
      line-height: 1.65;
      max-width: 48ch;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Meta row */
    .slide-meta {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }
    .slide-meta-item {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    .slide-meta-label {
      font-size: 0.62rem;
      color: rgba(255,255,255,0.50);
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .slide-meta-val {
      font-size: 0.94rem;
      color: rgba(255,255,255,0.92);
      font-weight: 600;
    }

    /* CTA button */
    .slide-btn {
      display: inline-block;
      background: #fff;
      color: var(--terracotta);
      border-radius: var(--radius-lg);
      padding: 0.8rem 2rem;
      font-size: 0.94rem;
      font-weight: 700;
      text-decoration: none;
      letter-spacing: -0.01em;
      box-shadow: 0 4px 28px rgba(0,0,0,0.22);
      transition: transform 0.15s var(--ease-out-expo), box-shadow 0.15s;
    }
    @media (hover: hover) and (pointer: fine) {
      .slide-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 36px rgba(0,0,0,0.28);
      }
    }
    .slide-btn:active { transform: none; }

    /* Prev / next arrows */
    .carousel-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 3;
      background: rgba(10, 20, 50, 0.42);
      border: 1px solid rgba(255,255,255,0.20);
      color: #fff;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.2s;
      line-height: 1;
      padding: 0;
    }
    .carousel-arrow:hover { background: rgba(10, 20, 50, 0.65); }
    .carousel-arrow--prev { left: 1.25rem; }
    .carousel-arrow--next { right: 1.25rem; }

    /* Dots + pause button row */
    .carousel-controls {
      position: absolute;
      bottom: 1.5rem;
      right: 3rem;
      z-index: 3;
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
    .carousel-pause {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 1.5px solid rgba(255,255,255,0.45);
      background: rgba(10, 20, 50, 0.35);
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin-right: 0.25rem;
      transition: background 0.18s, border-color 0.18s;
      flex-shrink: 0;
    }
    .carousel-pause:hover { background: rgba(10, 20, 50, 0.65); border-color: rgba(255,255,255,0.7); }
    .carousel-dot {
      border: none;
      padding: 0;
      height: 8px;
      width: 8px;
      border-radius: 4px;
      background: rgba(255,255,255,0.38);
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .carousel-dot--active {
      background: #fff;
      width: 26px;
    }

    /* ══ CATEGORY STRIP ═══════════════════════════════════════════════════ */
    .cat-tab-sk {
      /* Same padding as .cat-tab so flex height matches when real tabs load */
      padding: 0.9rem 0.625rem;
      flex-shrink: 0;
      border-bottom: 2px solid transparent;
      display: inline-block;
      pointer-events: none;
    }
    .cat-tab-sk::after {
      content: '';
      display: block;
      width: 72px;
      height: 13px;
      border-radius: var(--radius-sm);
      background: var(--paper-2);
      animation: sk-pulse 1.6s ease-in-out infinite;
    }
    .cats {
      background: var(--clr-surface);
      border-bottom: 1px solid var(--clr-border-faint);
      padding: 0;
      overflow-x: auto;
      scrollbar-width: none;
      position: sticky;
      top: 64px;
      z-index: var(--z-sticky);
    }
    .cats::-webkit-scrollbar { display: none; }
    .cats-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 clamp(1.5rem, 5vw, 3rem);
      display: flex;
      align-items: center;
      white-space: nowrap;
    }
    .cat-tab {
      padding: 0.9rem 1rem;
      border: none;
      border-bottom: 2px solid transparent;
      background: none;
      font-family: var(--font-body);
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--ink-mute);
      text-decoration: none;
      flex-shrink: 0;
      transition: color 0.18s, border-color 0.18s;
      cursor: pointer;
    }
    .cat-tab:hover { color: var(--terracotta); }
    .cat-tab--all {
      color: var(--terracotta);
      font-weight: 600;
      border-bottom-color: var(--terracotta);
    }

    /* ══ TAGLINE STRIP ════════════════════════════════════════════════════ */
    .tagline-strip {
      background: var(--paper);
      padding: clamp(2rem, 5vw, 3rem) 0;
      border-bottom: 1px solid var(--clr-border-faint);
    }
    .tagline-inner {
      max-width: 860px;
      margin: 0 auto;
      padding: 0 clamp(1.5rem, 5vw, 3rem);
      display: flex;
      align-items: center;
      gap: clamp(1.25rem, 3vw, 2.25rem);
    }
    .tagline-rule {
      flex: 1;
      height: 1px;
      background: linear-gradient(to right, transparent, var(--clr-border-strong));
      display: block;
    }
    .tagline-rule--right {
      background: linear-gradient(to left, transparent, var(--clr-border-strong));
    }
    .tagline-text {
      font-family: var(--font-hand);
      font-size: clamp(1.5rem, 3.5vw, 2.125rem);
      font-weight: 500;
      color: var(--warm);
      white-space: nowrap;
      flex-shrink: 0;
      margin: 0;
      letter-spacing: 0.01em;
      line-height: 1.2;
    }
    @media (max-width: 480px) {
      .tagline-rule { display: none; }
      .tagline-text { white-space: normal; font-size: 1.375rem; }
    }

    /* ══ EDITORIAL SECTION ════════════════════════════════════════════════ */
    .editorial-sec {
      padding: clamp(3.5rem, 8vw, 6rem) 0;
    }
    .sec-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 clamp(1.5rem, 5vw, 3rem);
    }

    /* Section header */
    .sec-head {
      text-align: center;
      margin-bottom: clamp(2.5rem, 6vw, 4.5rem);
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
      font-size: clamp(1.75rem, 4vw, 2.75rem);
      font-weight: 700;
      color: var(--ink);
      margin: 0 0 1rem;
      letter-spacing: -0.02em;
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

    /* Editorial list */
    .ed-list { display: flex; flex-direction: column; }

    /* Feature row */
    .feat-row {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: clamp(2rem, 5vw, 4.5rem);
      align-items: center;
      padding: clamp(3rem, 6vw, 5rem) 0;
      border-bottom: 1px solid var(--clr-border-faint);
    }
    .feat-row:first-child { padding-top: 0; }
    .feat-row:last-child  { border-bottom: none; }
    .feat-row--rev { grid-template-columns: 0.85fr 1.15fr; }
    .feat-row--rev .feat-img-wrap { order: 2; }
    .feat-row--rev .feat-body     { order: 1; }

    /* Image side */
    .feat-img-wrap { position: relative; }
    .feat-img-link {
      display: block;
      overflow: hidden;
      border-radius: var(--radius-lg);
    }
    .feat-img {
      width: 100%;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      display: block;
      transition: transform 0.5s var(--ease-out-expo);
    }
    @media (hover: hover) and (pointer: fine) {
      .feat-img-link:hover .feat-img { transform: scale(1.04); }
    }
    .feat-img-ph {
      width: 100%;
      aspect-ratio: 4 / 3;
      border-radius: var(--radius-lg);
    }

    /* Ghost number */
    .feat-num {
      position: absolute;
      z-index: 2;
      top: 0.25rem;
      left: 0.5rem;
      font-family: var(--font-display);
      font-size: clamp(3.5rem, 6vw, 5.5rem);
      font-weight: 800;
      color: var(--terracotta);
      opacity: 0.12;
      line-height: 1;
      user-select: none;
      pointer-events: none;
    }
    .feat-row--rev .feat-num { left: auto; right: 0.5rem; }

    /* Body side */
    .feat-body { display: flex; flex-direction: column; gap: 1rem; }
    .feat-cat {
      font-family: var(--font-type);
      font-size: 0.65rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--terracotta);
    }
    .feat-title {
      font-family: var(--font-display);
      font-size: clamp(1.6rem, 3.5vw, 2.4rem);
      font-weight: 700;
      line-height: 1.15;
      margin: 0;
      color: var(--ink);
      letter-spacing: -0.02em;
    }
    .feat-title-link {
      color: inherit;
      text-decoration: none;
      transition: color 0.18s;
    }
    @media (hover: hover) and (pointer: fine) {
      .feat-title-link:hover { color: var(--terracotta); }
    }
    .feat-desc {
      font-family: var(--font-body);
      font-size: 1rem;
      color: var(--ink-mute);
      line-height: 1.7;
      margin: 0;
      max-width: 44ch;
    }
    .feat-meta {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }
    .feat-meta-item {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.8rem;
      color: var(--ink-mute);
    }
    .feat-meta-sep { color: var(--rule-strong); font-size: 0.75rem; }
    .feat-cta {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      color: var(--terracotta);
      text-decoration: none;
      padding: 0.5rem 1.125rem;
      border: 1.5px solid var(--terracotta);
      border-radius: var(--radius-md);
      align-self: flex-start;
      transition: background 0.18s, color 0.18s;
    }
    @media (hover: hover) and (pointer: fine) {
      .feat-cta:hover {
        background: var(--terracotta);
        color: #fff;
      }
    }

    /* ══ SKELETON ═════════════════════════════════════════════════════════ */
    .ed-sk { display: flex; flex-direction: column; gap: 0; }
    .sk-row {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 3.5rem;
      align-items: center;
      padding: 4rem 0;
      border-bottom: 1px solid var(--clr-border-faint);
    }
    .sk-row:first-child { padding-top: 0; }
    .sk-row--rev { grid-template-columns: 0.85fr 1.15fr; }
    .sk-row--rev .sk-img  { order: 2; }
    .sk-row--rev .sk-body { order: 1; }
    .sk-img {
      aspect-ratio: 4 / 3;
      background: var(--paper-2);
      border-radius: var(--radius-lg);
      animation: sk-pulse 1.6s ease-in-out infinite;
    }
    .sk-body { display: flex; flex-direction: column; gap: 0.875rem; }
    .sk-line {
      height: 1rem;
      background: var(--paper-2);
      border-radius: var(--radius-sm);
      animation: sk-pulse 1.6s ease-in-out infinite;
    }
    .sk-sm { width: 22%; height: 0.65rem; }
    .sk-xl { width: 82%; height: 2.25rem; }
    .sk-md { width: 65%; }
    @keyframes sk-pulse {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0.45; }
    }

    /* ══ ERROR / SECTION FOOTER ═══════════════════════════════════════════ */
    .err-msg {
      text-align: center;
      font-size: 1rem;
      color: var(--ink-mute);
      padding: 3rem;
    }
    .sec-footer {
      text-align: center;
      margin-top: clamp(2.5rem, 5vw, 3.5rem);
      padding-top: 1.75rem;
      border-top: 1px solid var(--clr-border-faint);
    }
    .all-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--terracotta);
      text-decoration: none;
      padding: 0.625rem 1.5rem;
      border: 1.5px solid var(--terracotta);
      border-radius: var(--radius-md);
      transition: background 0.18s, color 0.18s;
    }
    @media (hover: hover) and (pointer: fine) {
      .all-link:hover { background: var(--terracotta); color: #fff; }
    }

    /* ══ AUTHOR STRIP ═════════════════════════════════════════════════════ */
    .author-strip {
      background: var(--paper-2);
      border-top: 1px solid var(--clr-border-faint);
      padding: clamp(2.5rem, 5vw, 3.75rem) 0;
      content-visibility: auto;
      contain-intrinsic-size: 0 240px;
    }
    .author-inner {
      max-width: 760px;
      margin: 0 auto;
      padding: 0 clamp(1.5rem, 5vw, 3rem);
      display: flex;
      gap: 2.5rem;
      align-items: center;
    }
    .author-avatar {
      width: 5.5rem;
      height: 5.5rem;
      border-radius: 50%;
      flex-shrink: 0;
      background: var(--clr-surface);
      border: 3px solid var(--terracotta);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-display);
      font-size: 1.1rem;
      font-weight: 800;
      color: var(--terracotta);
      letter-spacing: -0.03em;
    }
    .author-copy { display: flex; flex-direction: column; gap: 0.375rem; }
    .author-eyebrow {
      font-family: var(--font-type);
      font-size: 0.62rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--terracotta);
      margin: 0;
    }
    .author-name {
      font-family: var(--font-display);
      font-size: 1.375rem;
      font-weight: 700;
      color: var(--ink);
      margin: 0;
      letter-spacing: -0.02em;
    }
    .author-bio {
      font-family: var(--font-body);
      font-size: 1rem;
      color: var(--ink-mute);
      line-height: 1.75;
      margin: 0;
      font-weight: 300;
      max-width: 52ch;
    }

    /* ══ RECENTLY VIEWED ══════════════════════════════════════════════════ */
    .rv-section {
      background: var(--clr-surface);
      border-top: 1px solid var(--clr-border-faint);
      padding: clamp(2rem, 5vw, 3rem) 0;
      content-visibility: auto;
      contain-intrinsic-size: 0 220px;
    }
    .rv-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 clamp(1.5rem, 5vw, 3rem);
    }
    .rv-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 1.25rem;
    }
    .rv-label {
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--ink-mute);
    }
    .rv-more {
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--terracotta);
      text-decoration: none;
      transition: color 0.15s;
    }
    .rv-more:hover { color: var(--terracotta-2); }

    .rv-strip {
      display: flex;
      gap: 1rem;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      padding-bottom: 0.25rem;
    }
    .rv-strip::-webkit-scrollbar { display: none; }

    .rv-card {
      flex: 0 0 auto;
      width: clamp(140px, 22vw, 180px);
      scroll-snap-align: start;
      text-decoration: none;
      color: inherit;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      transition: transform 0.18s;
    }
    @media (hover: hover) and (pointer: fine) {
      .rv-card:hover { transform: translateY(-3px); }
      .rv-card:hover .rv-img { transform: scale(1.05); }
    }
    .rv-img-wrap {
      border-radius: var(--radius-lg);
      overflow: hidden;
      aspect-ratio: 3 / 2;
      background: var(--paper-2);
    }
    .rv-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.4s var(--ease-out-expo);
    }
    .rv-img-ph {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, var(--paper-2), var(--paper-edge));
    }
    .rv-info {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }
    .rv-cat {
      font-size: 0.62rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--terracotta);
    }
    .rv-title {
      font-family: var(--font-display);
      font-size: 0.88rem;
      font-weight: 600;
      color: var(--ink);
      line-height: 1.25;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .rv-time {
      font-size: 0.72rem;
      color: var(--ink-mute);
      margin-top: 0.1rem;
    }

    /* ══ RESPONSIVE ═══════════════════════════════════════════════════════ */
    @media (max-width: 900px) {
      .hero-carousel, .hero-skeleton { height: 500px; }
      .slide-content { width: 90%; }
      .slide-title { font-size: clamp(1.75rem, 6vw, 2.5rem); }
      .carousel-arrow { display: none; }

      .feat-row {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      .feat-row--rev { grid-template-columns: 1fr; }
      .feat-row--rev .feat-img-wrap { order: 0; }
      .feat-row--rev .feat-body     { order: 1; }
      .feat-num { font-size: 3rem; top: -0.5rem; left: -0.5rem; }
      .feat-row--rev .feat-num { right: -0.5rem; left: auto; }

      .sk-row { grid-template-columns: 1fr; gap: 1.5rem; }
      .sk-row--rev .sk-img  { order: 0; }
      .sk-row--rev .sk-body { order: 1; }
    }

    @media (max-width: 600px) {
      .hero-carousel, .hero-skeleton { height: 460px; }
      .slide-content { padding: 1.5rem 1.25rem; }
      .slide-sub { display: none; }
      .carousel-controls { right: 1.25rem; }
      .author-inner { flex-direction: column; align-items: flex-start; gap: 1.25rem; }
    }

    @media (prefers-reduced-motion: reduce) {
      .slide-bg,
      .slide-content { transition: none; }
      .feat-img, .feat-cta, .all-link { transition: none; }
      .sk-img, .sk-line, .sk-badge, .sk-title, .sk-sub { animation: none; }
      .carousel-dot, .carousel-pause { transition: none; }
    }
  `],
})
export class HomeComponent implements OnInit, OnDestroy {
  private recipeService    = inject(RecipeService);
  private seo              = inject(SeoService);
  private perf             = inject(PerfService);
  private recentlyViewedSvc = inject(RecentlyViewedService);

  recentlyViewed = computed(() => this.recentlyViewedSvc.items());

  /* ── Carousel state ── */
  heroIndex  = signal(0);
  isPaused   = signal(false);
  private heroTimer:   ReturnType<typeof setInterval>  | null = null;
  private resumeTimer: ReturnType<typeof setTimeout>   | null = null;

  /* ── Data ── */
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
  loading           = computed(() => this.featuredResult() === undefined);
  errored           = computed(() => this.featuredResult()?.kind === 'error');
  categories        = computed(() => this.categoriesResult() ?? []);
  categoriesLoading = computed(() => this.categoriesResult() === undefined);

  constructor() {
    this.perf.mark('home_start');
    this.seo.set({
      title: 'Кулинарният блог на Иво',
      description: 'Традиционни български рецепти, споделени с любов. Открий лесни и вкусни ястия за всеки повод в кулинарния блог на Иво.',
      standalone: true,
    });
  }

  ngOnInit(): void { this.startAutoPlay(); }

  ngOnDestroy(): void {
    if (this.heroTimer  !== null) clearInterval(this.heroTimer);
    if (this.resumeTimer !== null) clearTimeout(this.resumeTimer);
  }

  togglePause(): void {
    if (this.isPaused()) {
      this.isPaused.set(false);
      this.startAutoPlay();
    } else {
      this.isPaused.set(true);
      this.stopAutoPlay();
    }
  }

  nextSlide(): void {
    const len = this.featured().length;
    if (len > 1) this.heroIndex.update(i => (i + 1) % len);
    this.deferAutoPlay();
  }

  prevSlide(): void {
    const len = this.featured().length;
    if (len > 1) this.heroIndex.update(i => (i - 1 + len) % len);
    this.deferAutoPlay();
  }

  goToSlide(i: number): void {
    this.heroIndex.set(i);
    this.deferAutoPlay();
  }

  private startAutoPlay(): void {
    this.stopAutoPlay();
    this.heroTimer = setInterval(() => {
      const len = this.featured().length;
      if (len > 1) this.heroIndex.update(i => (i + 1) % len);
    }, 5400);
  }

  private stopAutoPlay(): void {
    if (this.heroTimer !== null) { clearInterval(this.heroTimer); this.heroTimer = null; }
  }

  /** After user interaction: pause auto-play for 10s, then resume unless manually paused. */
  private deferAutoPlay(): void {
    this.stopAutoPlay();
    if (this.resumeTimer !== null) clearTimeout(this.resumeTimer);
    this.resumeTimer = setTimeout(() => {
      if (!this.isPaused()) this.startAutoPlay();
    }, 10_000);
  }
}
