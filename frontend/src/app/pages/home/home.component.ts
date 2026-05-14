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

    <!-- ════════════════════ HERO ══════════════════════════════════════════ -->
    <section class="hero">
      <svg class="blob blob-1" viewBox="0 0 560 560" aria-hidden="true">
        <path fill="var(--terracotta)" fill-opacity=".11"
          d="M280,85 C375,55 465,120 490,205 C515,290 480,385 405,428 C330,471 225,462 155,408 C85,354 70,250 90,165 C110,80 200,108 280,85Z"/>
      </svg>
      <svg class="blob blob-2" viewBox="0 0 420 420" aria-hidden="true">
        <path fill="var(--olive)" fill-opacity=".09"
          d="M210,65 C295,42 378,100 395,182 C412,264 368,352 285,382 C202,412 108,378 68,300 C28,222 48,118 105,76 C135,57 160,82 210,65Z"/>
      </svg>

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
          <div class="hero-frame">
            <svg class="frame-blob" viewBox="0 0 500 500" aria-hidden="true">
              <path fill="var(--terracotta)" fill-opacity=".16"
                d="M250,72 C342,46 432,114 457,202 C482,290 445,388 362,424 C279,460 175,444 112,378 C49,312 55,200 97,135 C128,85 178,93 250,72Z"/>
            </svg>
            @if (featured().length && featured()[0].hero_image) {
              <img [src]="featured()[0].hero_image" [alt]="featured()[0].title"
                   fetchpriority="high" loading="eager" class="hero-img" />
            } @else {
              <div class="hero-img-ph"></div>
            }
          </div>
          <div class="hero-caption">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="caption-dot">
              <circle cx="8" cy="8" r="3.5" fill="var(--terracotta)" fill-opacity=".55"/>
            </svg>
            <span class="caption-text">{{ featured()[0]?.title || 'Домашна кухня' }}</span>
          </div>
          <span class="hero-annotation" aria-hidden="true">~ рецепти с любов ~</span>
        </div>

      </div>
    </section>

    <!-- ════════════════════ WAVE DIVIDER ═══════════════════════════════════ -->
    <div class="wave-div" aria-hidden="true">
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z"
              fill="var(--paper-2)"/>
      </svg>
    </div>

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

    <!-- ════════════════════ EDITORIAL FEATURED ════════════════════════════ -->
    <section class="editorial-sec">
      <svg class="blob blob-3" viewBox="0 0 460 460" aria-hidden="true">
        <path fill="var(--olive)" fill-opacity=".08"
          d="M230,58 C322,34 408,104 425,192 C442,280 396,374 308,405 C220,436 118,400 68,318 C18,236 40,122 104,72 C136,50 162,78 230,58Z"/>
      </svg>

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
            <span class="scat scat-1" aria-hidden="true">×</span>
            <span class="scat scat-2" aria-hidden="true">•</span>
            @for (r of featured().slice(0, 6); track r.id; let i = $index) {
              <article class="feat-row" [class.feat-row--rev]="i % 2 === 1">

                <div class="feat-img-wrap">

                  <div class="photo-blob" [class.photo-blob--olive]="i % 2 === 1" aria-hidden="true">
                    <svg viewBox="0 0 420 390" xmlns="http://www.w3.org/2000/svg">
                      <path class="blob-path"
                            d="M210,62 C302,38 392,108 414,200 C436,292 396,386 306,415 C216,444 114,410 68,326 C22,242 44,132 104,82 C135,60 164,84 210,62Z"/>
                    </svg>
                  </div>

                  <a [routerLink]="['/recipes', r.slug]" class="feat-img-link"
                     tabindex="-1" aria-hidden="true">
                    @if (r.hero_image) {
                      <img [src]="r.hero_image" [alt]="r.title" class="feat-img"
                           [loading]="i < 2 ? 'eager' : 'lazy'" />
                    } @else {
                      <div class="feat-img-ph"></div>
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
                             aria-hidden="true" width="12" height="12">
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

  `,
  styles: [`
    :host { display: block; background: var(--paper); }

    /* ═══ BLOB DECORATIONS ══════════════════════════════════════════════ */
    .blob {
      position: absolute;
      pointer-events: none;
      z-index: 0;
    }
    .blob-1 {
      width: clamp(320px, 48vw, 640px);
      top: -5rem;
      right: -8rem;
    }
    .blob-2 {
      width: clamp(200px, 28vw, 360px);
      bottom: -4rem;
      left: -6rem;
    }
    .blob-3 {
      width: clamp(240px, 36vw, 500px);
      top: 4rem;
      right: -8rem;
    }

    /* ═══ HERO ══════════════════════════════════════════════════════════ */
    .hero {
      position: relative;
      overflow: hidden;
      padding: clamp(3rem, 8vw, 5.5rem) 0 clamp(3rem, 7vw, 5rem);
    }
    .hero-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 clamp(1.5rem, 5vw, 3rem);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: clamp(2rem, 6vw, 5rem);
      align-items: center;
      position: relative;
      z-index: 1;
    }

    /* Copy */
    .hero-copy { display: flex; flex-direction: column; gap: 0; }
    .eyebrow { margin-bottom: 0.375rem; }
    .hero-title { margin-bottom: 1.25rem; }
    .hero-lead { margin-bottom: 2rem; }
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
    .hero-title em { color: var(--terracotta); font-style: italic; }
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
      padding: 0.75rem 1.875rem;
      background: var(--terracotta);
      color: var(--paper);
      font-family: var(--font-type);
      font-size: 0.68rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 6rem;
      box-shadow: var(--shadow-sm);
      transition: background 0.2s var(--ease-out-expo), transform 0.2s var(--ease-out-expo);
      align-self: flex-start;
    }
    .hero-btn svg { width: 0.85rem; height: 0.85rem; flex-shrink: 0; }
    @media (hover: hover) and (pointer: fine) {
      .hero-btn:hover { background: var(--terracotta-2); transform: translateY(-2px); }
    }
    .hero-btn:active { transform: translateY(0); }

    /* Visual */
    .hero-visual {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 1rem 3rem;
    }
    .hero-frame {
      position: relative;
      width: clamp(260px, 38vw, 380px);
      height: clamp(260px, 38vw, 380px);
    }
    .frame-blob {
      position: absolute;
      inset: -14%;
      width: 128%;
      height: 128%;
      z-index: 0;
    }
    .hero-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 62% 38% 54% 46% / 48% 62% 38% 52%;
      display: block;
      position: relative;
      z-index: 1;
    }
    .hero-img-ph {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #d9c9a3 0%, #c8b482 55%, #ddd0b8 100%);
      border-radius: 62% 38% 54% 46% / 48% 62% 38% 52%;
      position: relative;
      z-index: 1;
    }
    .hero-caption {
      position: absolute;
      bottom: 0.75rem;
      left: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--paper);
      padding: 0.45rem 0.875rem;
      box-shadow: 0 2px 12px rgba(30,23,16,.1);
    }
    .caption-dot { width: 0.85rem; height: 0.85rem; flex-shrink: 0; }
    .caption-text {
      font-family: var(--font-hand);
      font-size: 0.95rem;
      color: var(--ink-mute);
      max-width: 20ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .hero-annotation {
      position: absolute;
      top: 1.5rem;
      right: 0;
      font-family: var(--font-hand);
      font-size: 0.9rem;
      color: var(--terracotta);
      opacity: 0.6;
      transform: rotate(3deg);
      pointer-events: none;
    }

    /* ═══ WAVE DIVIDER ══════════════════════════════════════════════════ */
    .wave-div {
      line-height: 0;
      margin-top: -1px;
    }
    .wave-div svg { width: 100%; height: 56px; display: block; }

    /* ═══ CATEGORY STRIP ════════════════════════════════════════════════ */
    .cats {
      background: var(--paper-2);
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
      padding: 0.3rem 0.875rem;
      border: 1px dashed var(--rule-strong);
      border-radius: 6rem;
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

    /* ═══ EDITORIAL SECTION ═════════════════════════════════════════════ */
    .editorial-sec {
      position: relative;
      overflow: hidden;
      padding: clamp(3.5rem, 8vw, 6rem) 0;
    }
    .sec-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 clamp(1.5rem, 5vw, 3rem);
      position: relative;
      z-index: 1;
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

    /* Editorial list */
    .ed-list {
      display: flex;
      flex-direction: column;
      position: relative;
    }

    /* Feature row */
    .feat-row {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: clamp(2rem, 5vw, 4.5rem);
      align-items: center;
      padding: clamp(3rem, 6vw, 5rem) 0;
      border-bottom: 1px dashed var(--rule);
    }
    .feat-row:first-child { padding-top: 0; }
    .feat-row:last-child  { border-bottom: none; }

    .feat-row--rev {
      grid-template-columns: 0.85fr 1.15fr;
    }
    .feat-row--rev .feat-img-wrap { order: 2; }
    .feat-row--rev .feat-body { order: 1; }

    /* Image side */
    .feat-img-wrap {
      position: relative;
      padding: 1.5rem 1.25rem 2rem;
    }
    .photo-blob {
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
    }
    .photo-blob svg { width: 100%; height: 100%; }
    .photo-blob .blob-path { fill: #b1502d; fill-opacity: 0.55; }
    .photo-blob.photo-blob--olive .blob-path { fill: #6b7a3a; fill-opacity: 0.46; }
    .feat-img-link { display: block; overflow: hidden; position: relative; z-index: 1; }
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
      background: linear-gradient(135deg, #d9c9a3 0%, #c8b482 55%, #ddd0b8 100%);
    }

    /* Ghost number */
    .feat-num {
      position: absolute;
      z-index: 2;
      top: 0.25rem;
      left: 0.5rem;
      font-family: var(--font-display);
      font-style: italic;
      font-size: clamp(3.5rem, 6vw, 5.5rem);
      font-weight: 800;
      color: var(--terracotta);
      opacity: 0.15;
      line-height: 1;
      user-select: none;
      pointer-events: none;
      white-space: nowrap;
    }
    .feat-row--rev .feat-num {
      left: auto;
      right: 0.5rem;
    }

    /* Body side */
    .feat-body {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .feat-cat {
      font-family: var(--font-type);
      font-size: 0.58rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--terracotta);
    }
    .feat-title {
      font-family: var(--font-display);
      font-style: italic;
      font-size: clamp(1.6rem, 3.5vw, 2.4rem);
      font-weight: 700;
      line-height: 1.15;
      margin: 0;
      color: var(--ink);
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
      font-family: var(--font-type);
      font-size: 0.6rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--ink-soft);
    }
    .feat-meta-sep {
      color: var(--rule-strong);
      font-size: 0.75rem;
    }
    .feat-cta {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-family: var(--font-type);
      font-size: 0.62rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--terracotta);
      text-decoration: none;
      padding-bottom: 2px;
      border-bottom: 1px solid var(--terracotta);
      transition: color 0.15s, gap 0.2s;
      align-self: flex-start;
    }
    @media (hover: hover) and (pointer: fine) {
      .feat-cta:hover { color: var(--terracotta-2); gap: 0.75rem; }
    }

    /* Scatter marks */
    .scat {
      position: absolute;
      pointer-events: none;
      user-select: none;
      z-index: 0;
    }
    .scat-1 {
      font-family: var(--font-type);
      font-size: 1.1rem;
      color: var(--terracotta);
      opacity: 0.3;
      top: 15%;
      left: -1.5rem;
    }
    .scat-2 {
      font-size: 1.8rem;
      color: var(--olive);
      opacity: 0.35;
      bottom: 25%;
      right: -1rem;
      line-height: 1;
    }

    /* ═══ SKELETON ══════════════════════════════════════════════════════ */
    .ed-sk { display: flex; flex-direction: column; gap: 0; }
    .sk-row {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 3.5rem;
      align-items: center;
      padding: 4rem 0;
      border-bottom: 1px dashed var(--rule);
    }
    .sk-row:first-child { padding-top: 0; }
    .sk-row--rev {
      grid-template-columns: 0.85fr 1.15fr;
    }
    .sk-row--rev .sk-img { order: 2; }
    .sk-row--rev .sk-body { order: 1; }
    .sk-img {
      aspect-ratio: 4 / 3;
      background: var(--paper-2);
      animation: sk-pulse 1.6s ease-in-out infinite;
    }
    .sk-body { display: flex; flex-direction: column; gap: 0.875rem; }
    .sk-line {
      height: 1rem;
      background: var(--paper-2);
      border-radius: 2px;
      animation: sk-pulse 1.6s ease-in-out infinite;
    }
    .sk-sm { width: 22%; height: 0.65rem; }
    .sk-xl { width: 82%; height: 2.25rem; }
    .sk-md { width: 65%; }
    @keyframes sk-pulse {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0.5; }
    }

    /* ═══ ERROR / FOOTER ════════════════════════════════════════════════ */
    .err-msg {
      text-align: center;
      font-family: var(--font-hand);
      font-size: 1.15rem;
      color: var(--ink-mute);
      padding: 3rem;
    }
    .sec-footer {
      text-align: center;
      margin-top: clamp(2.5rem, 5vw, 3.5rem);
      padding-top: 1.75rem;
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

    /* ═══ RESPONSIVE ════════════════════════════════════════════════════ */
    @media (min-width: 1100px) {
      .hero-inner { grid-template-columns: 1fr 1.15fr; }
      .hero-frame { width: 420px; height: 420px; }
    }
    @media (min-width: 1400px) {
      .hero-title { font-size: 5rem; }
      .hero-frame { width: 480px; height: 480px; }
    }

    @media (max-width: 900px) {
      .hero-inner { grid-template-columns: 1fr; }
      .hero-visual { display: none; }
      .feat-row {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      .feat-img-wrap { padding: 1.25rem 0.75rem 1.5rem; }
      .feat-row--rev { grid-template-columns: 1fr; }
      .feat-row--rev .feat-img-wrap { order: 0; }
      .feat-row--rev .feat-body { order: 1; }
      .feat-num { font-size: 3rem; top: -0.5rem; left: -0.5rem; }
      .feat-row--rev .feat-num { right: -0.5rem; left: auto; }
      .sk-row { grid-template-columns: 1fr; gap: 1.5rem; }
      .sk-row--rev .sk-img { order: 0; }
      .sk-row--rev .sk-body { order: 1; }
    }

    @media (max-width: 640px) {
      .cat-pill {
        padding: 0.55rem 1rem;
        min-height: 2.75rem;
        display: inline-flex;
        align-items: center;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .feat-img, .hero-btn, .cat-pill, .feat-cta, .all-link { transition: none; }
      .sk-img, .sk-line { animation: none; }
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
