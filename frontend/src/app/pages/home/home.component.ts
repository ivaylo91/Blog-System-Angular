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

    <!-- ══════════════════ HERO ══════════════════════════════════════ -->
    <section class="hero">
      <div class="hero-blob-tl" aria-hidden="true"></div>
      <div class="hero-blob-br" aria-hidden="true"></div>

      <div class="hero-inner">

        <div class="hero-text">
          <span class="hero-tag">Домашна Кухня</span>
          <h1 class="hero-h1">
            Нещо<br>за всеки<br><span class="hero-green">вкус</span>
          </h1>
          <svg class="hero-squiggle" viewBox="0 0 220 20" fill="none"
               xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M3 10 Q28 2 55 10 T107 10 T159 10 T217 10"
                  stroke="#f97316" stroke-width="3.5" stroke-linecap="round"/>
          </svg>
          <p class="hero-desc">
            Традиционни ястия, приготвени с любов и внимание към всеки детайл. Открий вкусни рецепти за всеки повод.
          </p>
          <div class="hero-btns">
            <a routerLink="/recipes" class="btn-green">Разгледай рецептите</a>
            <a routerLink="/recipes" class="btn-link">
              Научи повече
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                   stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="hero-visual">
          <div class="hero-dots" aria-hidden="true"></div>
          <div class="hero-frame">
            @if (featured().length && featured()[0].hero_image) {
              <img class="hero-img" [src]="featured()[0].hero_image" [alt]="featured()[0].title"
                   fetchpriority="high" loading="eager" />
            } @else {
              <div class="hero-img hero-ph"></div>
            }
          </div>
          <div class="hero-badge">
            <span class="hb-star">★</span>
            <div>
              <div class="hb-num">4.8</div>
              <div class="hb-lbl">Оценка</div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ══════════════════ OUR FAVORITES ════════════════════════════ -->
    <section class="favs">
      <div class="favs-inner">

        <div class="favs-hdr">
          <p class="sec-eyebrow light">Нашите любими</p>
          <h2 class="sec-h2 light">Избрани рецепти</h2>
        </div>

        @if (loading()) {
          <div class="favs-grid">
            @for (s of [0,1,2]; track s) {
              <div class="fav-sk"></div>
            }
          </div>
        } @else if (errored()) {
          <p class="grid-err">Рецептите не могат да се заредят в момента.</p>
        } @else {
          <div class="favs-grid">
            @for (r of featured().slice(0, 3); track r.id) {
              <a class="fav-card" [routerLink]="['/recipes', r.slug]">
                <div class="fav-img-wrap">
                  @if (r.hero_image) {
                    <img [src]="r.hero_image" [alt]="r.title" loading="lazy" />
                  } @else {
                    <div class="fav-ph"></div>
                  }
                </div>
                <div class="fav-body">
                  @if (r.category?.name) {
                    <span class="fav-cat">{{ r.category!.name }}</span>
                  } @else {
                    <span class="fav-cat">Рецепта</span>
                  }
                  <h3 class="fav-title">{{ r.title }}</h3>
                  @if (r.excerpt) {
                    <p class="fav-excerpt">{{ r.excerpt }}</p>
                  }
                  <span class="fav-cta">Виж рецептата →</span>
                </div>
              </a>
            }
          </div>
        }

        <div class="favs-foot">
          <a routerLink="/recipes" class="btn-cream">Всички рецепти</a>
        </div>

      </div>
    </section>

    <!-- ══════════════════ PHOTO GRID ════════════════════════════════ -->
    @if (!loading() && featured().length >= 3) {
      <section class="photos">
        <div class="photos-inner">
          <p class="sec-eyebrow dark">Галерия</p>
          <h2 class="sec-h2 dark">Погледни по-отблизо</h2>

          <div class="photos-grid">
            @for (r of featured().slice(0, 6); track r.id) {
              <a class="photo-cell" [routerLink]="['/recipes', r.slug]">
                @if (r.hero_image) {
                  <img [src]="r.hero_image" [alt]="r.title" loading="lazy" />
                } @else {
                  <div class="photo-ph"></div>
                }
                <div class="photo-hover">
                  <span>{{ r.title }}</span>
                </div>
              </a>
            }
          </div>
        </div>
      </section>
    }

    <!-- ══════════════════ CATEGORIES ════════════════════════════════ -->
    <section class="cats">
      <div class="cats-inner">
        <p class="sec-eyebrow light">Разгледай</p>
        <h2 class="sec-h2 light">По категории</h2>

        <div class="cats-grid">

          <a class="cat-tile" routerLink="/recipes" [queryParams]="{q:'супа'}">
            <div class="ct-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 14h20M8 14c0 5.5 3.5 9 8 9s8-3.5 8-9"/>
                <path d="M12 10c0-2.2 1.8-4 4-4s4 1.8 4 4"/>
                <path d="M5 23h22"/>
              </svg>
            </div>
            <span>Супи</span>
          </a>

          <a class="cat-tile" routerLink="/recipes" [queryParams]="{q:'десерт'}">
            <div class="ct-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round">
                <rect x="6" y="16" width="20" height="10" rx="2"/>
                <path d="M6 16c0-5.5 20-5.5 20 0"/>
                <path d="M16 8v8M12 10l4-4 4 4"/>
              </svg>
            </div>
            <span>Десерти</span>
          </a>

          <a class="cat-tile" routerLink="/recipes" [queryParams]="{q:'основно'}">
            <div class="ct-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round">
                <circle cx="16" cy="16" r="11"/>
                <path d="M9 20c2-6 12-6 14 0"/>
                <circle cx="16" cy="12" r="2.5"/>
              </svg>
            </div>
            <span>Основни</span>
          </a>

          <a class="cat-tile" routerLink="/recipes" [queryParams]="{q:'салата'}">
            <div class="ct-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 22s2-12 9-14c7-2 11 4 11 14"/>
                <path d="M10 16c2-4 5-5 8-3"/>
                <path d="M6 22h20"/>
              </svg>
            </div>
            <span>Салати</span>
          </a>

          <a class="cat-tile" routerLink="/recipes" [queryParams]="{q:'закуска'}">
            <div class="ct-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round">
                <rect x="6" y="10" width="20" height="12" rx="4"/>
                <path d="M8 14h16M8 18h16"/>
              </svg>
            </div>
            <span>Закуски</span>
          </a>

          <a class="cat-tile" routerLink="/recipes" [queryParams]="{q:'паста'}">
            <div class="ct-icon">
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

        <div class="cats-cta">
          <a routerLink="/recipes" class="btn-cream">Виж всички рецепти</a>
        </div>

      </div>
    </section>

  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Righteous&family=Nunito:wght@400;600;700;800&display=swap');

    :host {
      --g950: oklch(14% 0.06 155);
      --g900: oklch(20% 0.08 155);
      --g800: oklch(28% 0.10 155);
      --g600: oklch(44% 0.13 155);
      --g400: oklch(60% 0.14 155);
      --g200: oklch(83% 0.09 155);
      --g100: oklch(93% 0.04 155);
      --g50:  oklch(97% 0.015 155);
      --orn:  oklch(70% 0.20 52);
      --orn-lt: oklch(95% 0.04 55);
      --cream: oklch(97% 0.012 88);
      --cream-dk: oklch(92% 0.02 88);
      --txt: oklch(13% 0.01 155);
      --txt-mid: oklch(40% 0.04 155);
      --f-brand: 'Righteous', Georgia, serif;
      --f-body:  'Nunito', system-ui, sans-serif;
      display: block;
    }

    /* ─── SHARED ─────────────────────────────────────────────────── */
    .sec-eyebrow {
      font-family: var(--f-body);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin: 0 0 0.5rem;
    }
    .sec-eyebrow.light { color: var(--orn); }
    .sec-eyebrow.dark  { color: var(--g600); }

    .sec-h2 {
      font-family: var(--f-brand);
      font-size: clamp(1.75rem, 3.5vw, 2.5rem);
      letter-spacing: -0.01em;
      margin: 0 0 2.25rem;
    }
    .sec-h2.light { color: #fff; }
    .sec-h2.dark  { color: var(--txt); }

    .btn-green {
      display: inline-flex;
      align-items: center;
      padding: 0.85rem 2rem;
      background: var(--g600);
      color: #fff;
      border-radius: 9999px;
      font-family: var(--f-body);
      font-weight: 800;
      font-size: 0.9rem;
      text-decoration: none;
      transition: background 0.2s, transform 0.15s;
      touch-action: manipulation;
    }
    .btn-green:hover  { background: var(--g800); transform: translateY(-2px); }
    .btn-green:active { transform: translateY(0); }

    .btn-cream {
      display: inline-flex;
      align-items: center;
      padding: 0.85rem 2.2rem;
      background: var(--cream);
      color: var(--g900);
      border-radius: 9999px;
      font-family: var(--f-body);
      font-weight: 800;
      font-size: 0.9rem;
      text-decoration: none;
      transition: background 0.18s, transform 0.15s;
    }
    .btn-cream:hover  { background: #fff; transform: translateY(-2px); }
    .btn-cream:active { transform: translateY(0); }

    /* ─── HERO ───────────────────────────────────────────────────── */
    .hero {
      position: relative;
      background: var(--cream);
      overflow: hidden;
      padding: clamp(4.5rem, 9vw, 7rem) 0 clamp(3.5rem, 7vw, 6rem);
    }
    .hero-blob-tl {
      position: absolute;
      top: -140px;
      right: -80px;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background: radial-gradient(ellipse at center, var(--g100) 0%, transparent 68%);
      pointer-events: none;
    }
    .hero-blob-br {
      position: absolute;
      bottom: -90px;
      left: -50px;
      width: 340px;
      height: 340px;
      border-radius: 50%;
      background: radial-gradient(ellipse at center, var(--orn-lt) 0%, transparent 68%);
      pointer-events: none;
    }
    .hero-inner {
      position: relative;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 clamp(1.5rem, 5vw, 3rem);
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: clamp(2rem, 5vw, 4rem);
    }
    .hero-tag {
      display: inline-block;
      font-family: var(--f-body);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--g600);
      margin-bottom: 1.1rem;
    }
    .hero-h1 {
      font-family: var(--f-brand);
      font-size: clamp(3rem, 6.5vw, 5rem);
      line-height: 1.0;
      letter-spacing: -0.01em;
      color: var(--txt);
      margin: 0 0 0.35rem;
    }
    .hero-green { color: var(--g600); }
    .hero-squiggle {
      display: block;
      width: clamp(120px, 18vw, 200px);
      margin-bottom: 1.5rem;
    }
    .hero-desc {
      font-family: var(--f-body);
      font-size: 1rem;
      color: var(--txt-mid);
      line-height: 1.75;
      max-width: 38ch;
      margin: 0 0 2.25rem;
    }
    .hero-btns {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      flex-wrap: wrap;
    }
    .btn-link {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      font-family: var(--f-body);
      font-weight: 700;
      font-size: 0.9rem;
      color: var(--txt);
      text-decoration: none;
      transition: color 0.18s;
    }
    .btn-link svg { width: 1rem; height: 1rem; transition: transform 0.18s; }
    .btn-link:hover { color: var(--g600); }
    .btn-link:hover svg { transform: translateX(3px); }

    /* Hero visual */
    .hero-visual {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .hero-dots {
      position: absolute;
      top: -1rem;
      right: -1rem;
      width: 110px;
      height: 110px;
      background-image: radial-gradient(circle, var(--g400) 1.5px, transparent 1.5px);
      background-size: 11px 11px;
      opacity: 0.4;
      pointer-events: none;
      z-index: 0;
    }
    .hero-frame {
      position: relative;
      z-index: 1;
      width: 88%;
      aspect-ratio: 4/5;
      border-radius: 2rem;
      overflow: hidden;
      background: var(--cream-dk);
      box-shadow: 0 32px 80px oklch(14% 0.07 155 / 0.22), 0 8px 24px oklch(14% 0.07 155 / 0.1);
    }
    .hero-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .hero-ph { background: var(--cream-dk); }
    .hero-badge {
      position: absolute;
      bottom: 2rem;
      left: -0.75rem;
      z-index: 2;
      background: #fff;
      border-radius: 1rem;
      padding: 0.7rem 1.1rem;
      display: flex;
      align-items: center;
      gap: 0.65rem;
      box-shadow: 0 8px 32px oklch(14% 0.07 155 / 0.18);
    }
    .hb-star { font-size: 1.5rem; color: var(--orn); line-height: 1; }
    .hb-num  { font-family: var(--f-brand); font-size: 1.1rem; color: var(--txt); line-height: 1.1; }
    .hb-lbl  { font-family: var(--f-body); font-size: 0.68rem; color: var(--txt-mid); font-weight: 600; }

    /* ─── OUR FAVORITES ──────────────────────────────────────────── */
    .favs {
      background: var(--g900);
      padding: clamp(4.5rem, 8vw, 6.5rem) 0;
    }
    .favs-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 clamp(1.5rem, 5vw, 3rem);
    }
    .favs-hdr { margin-bottom: 2.5rem; }
    .favs-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
    .fav-card {
      border-radius: 1.25rem;
      overflow: hidden;
      background: var(--g800);
      text-decoration: none;
      color: inherit;
      display: flex;
      flex-direction: column;
      transition: transform 0.22s, box-shadow 0.22s;
    }
    .fav-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 24px 56px oklch(0% 0 0 / 0.45);
    }
    .fav-img-wrap {
      aspect-ratio: 16/10;
      overflow: hidden;
      flex-shrink: 0;
    }
    .fav-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.45s;
    }
    .fav-card:hover .fav-img-wrap img { transform: scale(1.07); }
    .fav-ph { width: 100%; height: 100%; background: var(--g800); }
    .fav-body {
      padding: 1.25rem 1.5rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.45rem;
      flex: 1;
    }
    .fav-cat {
      font-family: var(--f-body);
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--orn);
    }
    .fav-title {
      font-family: var(--f-brand);
      font-size: 1.05rem;
      color: #fff;
      margin: 0;
      line-height: 1.35;
    }
    .fav-excerpt {
      font-family: var(--f-body);
      font-size: 0.82rem;
      color: var(--g200);
      line-height: 1.55;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .fav-cta {
      font-family: var(--f-body);
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--g200);
      margin-top: auto;
      padding-top: 0.5rem;
      transition: color 0.18s;
    }
    .fav-card:hover .fav-cta { color: #fff; }

    /* Skeletons */
    .fav-sk {
      border-radius: 1.25rem;
      aspect-ratio: 0.82;
      background: var(--g800);
      animation: pulse 1.8s ease-in-out infinite;
    }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.45; } }

    .grid-err {
      text-align: center;
      color: var(--g200);
      padding: 3rem;
      font-family: var(--f-body);
    }
    .favs-foot {
      display: flex;
      justify-content: center;
      margin-top: 3.5rem;
    }

    /* ─── PHOTO GRID ─────────────────────────────────────────────── */
    .photos {
      background: var(--cream);
      padding: clamp(4.5rem, 8vw, 6.5rem) 0;
    }
    .photos-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 clamp(1.5rem, 5vw, 3rem);
    }
    .photos-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.75rem;
    }
    .photo-cell {
      border-radius: 1rem;
      overflow: hidden;
      display: block;
      aspect-ratio: 4/3;
      background: var(--cream-dk);
      position: relative;
      text-decoration: none;
    }
    .photo-cell img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.45s;
    }
    .photo-cell:hover img { transform: scale(1.06); }
    .photo-ph { width: 100%; height: 100%; background: var(--cream-dk); }
    .photo-hover {
      position: absolute;
      inset: 0;
      background: oklch(14% 0.07 155 / 0.58);
      display: flex;
      align-items: flex-end;
      padding: 1rem 1.1rem;
      opacity: 0;
      transition: opacity 0.25s;
    }
    .photo-hover span {
      font-family: var(--f-body);
      font-size: 0.82rem;
      font-weight: 700;
      color: #fff;
      line-height: 1.3;
    }
    .photo-cell:hover .photo-hover { opacity: 1; }

    /* ─── CATEGORIES ─────────────────────────────────────────────── */
    .cats {
      background: var(--g900);
      padding: clamp(4.5rem, 8vw, 6.5rem) 0;
    }
    .cats-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 clamp(1.5rem, 5vw, 3rem);
    }
    .cats-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 1rem;
    }
    .cat-tile {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.65rem;
      padding: 1.5rem 0.75rem;
      border-radius: 1.25rem;
      background: var(--g800);
      text-decoration: none;
      color: #fff;
      font-family: var(--f-body);
      font-size: 0.82rem;
      font-weight: 700;
      transition: background 0.2s, transform 0.18s, box-shadow 0.2s;
    }
    .cat-tile:hover {
      background: var(--g600);
      transform: translateY(-4px);
      box-shadow: 0 12px 32px oklch(0% 0 0 / 0.3);
    }
    .ct-icon {
      width: 2.5rem;
      height: 2.5rem;
      color: var(--orn);
      transition: color 0.2s;
    }
    .cat-tile:hover .ct-icon { color: #fff; }
    .ct-icon svg { width: 100%; height: 100%; }
    .cats-cta {
      display: flex;
      justify-content: center;
      margin-top: 3rem;
    }

    /* ─── RESPONSIVE ─────────────────────────────────────────────── */
    @media (max-width: 1024px) {
      .cats-grid { grid-template-columns: repeat(3, 1fr); }
    }
    @media (max-width: 900px) {
      .hero-inner { grid-template-columns: 1fr; }
      .hero-visual { order: -1; }
      .hero-frame { width: 72%; }
      .hero-desc { max-width: none; }
      .favs-grid { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 640px) {
      .hero-frame { width: 100%; }
      .hero-h1 { font-size: clamp(2.5rem, 9vw, 3.5rem); }
      .favs-grid { grid-template-columns: 1fr; }
      .photos-grid { grid-template-columns: 1fr 1fr; }
      .cats-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 400px) {
      .cats-grid { grid-template-columns: 1fr 1fr; }
    }
    @media (prefers-reduced-motion: reduce) {
      .btn-green, .btn-cream, .btn-link, .fav-card,
      .photo-cell img, .cat-tile { transition: none; }
      .fav-sk { animation: none; }
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
