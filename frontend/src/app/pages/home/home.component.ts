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

    <!-- ════════════════════ HERO ═══════════════════════════════════════ -->
    <section class="hero">

      <div class="hero-bg" aria-hidden="true">
        @if (featured().length && featured()[0].hero_image) {
          <img [src]="featured()[0].hero_image" [alt]="''"
               fetchpriority="high" loading="eager" />
        } @else {
          <div class="hero-bg-ph"></div>
        }
        <div class="hero-shade"></div>
      </div>

      <!-- Doodle sparkles -->
      <svg class="hero-sparkle hero-sparkle-1" viewBox="0 0 40 40" aria-hidden="true">
        <path d="M20 4 L23 17 L36 20 L23 23 L20 36 L17 23 L4 20 L17 17 Z"
              fill="#fbbf24" stroke="#f97316" stroke-width="1.5" stroke-linejoin="round"/>
      </svg>
      <svg class="hero-sparkle hero-sparkle-2" viewBox="0 0 40 40" aria-hidden="true">
        <path d="M20 6 L22.5 17.5 L34 20 L22.5 22.5 L20 34 L17.5 22.5 L6 20 L17.5 17.5 Z"
              fill="#fde68a"/>
      </svg>

      <div class="hero-content">
        <span class="hero-eyebrow">— ДОМАШНА КУХНЯ —</span>
        <h1 class="hero-title">
          Нещо<br>за всеки <span class="title-script">вкус</span>
        </h1>
        <a routerLink="/recipes" class="hero-cta">
          Разгледай рецептите
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6"/>
          </svg>
        </a>
      </div>

      <!-- White starburst sticker, like in the reference -->
      <div class="hero-sticker" aria-hidden="true">
        <svg viewBox="0 0 100 100">
          <path d="M50 2 L57 18 L74 12 L72 30 L88 32 L78 46 L92 56 L76 62 L84 78 L66 76 L62 92 L50 80 L38 92 L34 76 L16 78 L24 62 L8 56 L22 46 L12 32 L28 30 L26 12 L43 18 Z"
                fill="#fff"/>
        </svg>
        <div class="sticker-text">
          <span class="sticker-num">4.8</span>
          <span class="sticker-lbl">оценка</span>
        </div>
      </div>
    </section>

    <!-- ════════════════════ OUR FAVORITES ═══════════════════════════════ -->
    <section class="favs">

      <!-- Hand-drawn doodles on the sides -->
      <svg class="doodle doodle-tl" viewBox="0 0 100 100" aria-hidden="true">
        <path d="M10 50 Q25 20, 45 35 T80 30" stroke="#f97316" stroke-width="2.5"
              fill="none" stroke-linecap="round"/>
        <circle cx="85" cy="45" r="2" fill="#f97316"/>
        <circle cx="92" cy="55" r="1.5" fill="#f97316"/>
      </svg>

      <svg class="doodle doodle-tr" viewBox="0 0 100 100" aria-hidden="true">
        <path d="M20 30 Q40 10, 60 25 Q80 40, 70 60" stroke="#f97316" stroke-width="2.5"
              fill="none" stroke-linecap="round"/>
        <path d="M65 65 L75 70 M70 60 L72 75" stroke="#f97316" stroke-width="2"
              fill="none" stroke-linecap="round"/>
      </svg>

      <svg class="doodle doodle-bl" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="20" cy="20" r="15" stroke="#16a34a" stroke-width="2.5"
                fill="none" stroke-dasharray="4 6"/>
        <path d="M50 60 Q60 50, 70 60 T90 60" stroke="#16a34a" stroke-width="2.5"
              fill="none" stroke-linecap="round"/>
      </svg>

      <svg class="doodle doodle-br" viewBox="0 0 100 100" aria-hidden="true">
        <path d="M30 30 L70 70 M50 25 L50 75 M25 50 L75 50" stroke="#f97316"
              stroke-width="2.5" stroke-linecap="round"/>
      </svg>

      <div class="favs-inner">

        <header class="favs-head">
          <h2 class="favs-title">Нашите Любими</h2>
          <svg class="favs-underline" viewBox="0 0 200 16" aria-hidden="true">
            <path d="M5 10 Q40 2, 75 8 T145 8 T195 6" stroke="#f97316" stroke-width="3.5"
                  fill="none" stroke-linecap="round"/>
          </svg>
        </header>

        @if (loading()) {
          <div class="favs-grid">
            @for (s of [0,1,2]; track s) {
              <div class="fav-sk"></div>
            }
          </div>
        } @else if (errored()) {
          <p class="favs-err">Рецептите не могат да се заредят в момента.</p>
        } @else {
          <div class="favs-grid">
            @for (r of featured().slice(0, 3); track r.id; let i = $index) {
              <a class="fav-card" [routerLink]="['/recipes', r.slug]">

                <!-- White speech bubble badge top-left -->
                <div class="card-badge" aria-hidden="true">
                  <svg viewBox="0 0 60 60">
                    <path d="M30 2 L36 12 L48 8 L46 20 L58 22 L50 32 L60 40 L48 42 L52 54 L40 50 L38 60 L30 52 L22 60 L20 50 L8 54 L12 42 L0 40 L10 32 L2 22 L14 20 L12 8 L24 12 Z"
                          fill="#fff"/>
                  </svg>
                  <span>{{ ['Нов', 'Топ', 'Вкус'][i] }}</span>
                </div>

                <!-- Orange circle top-right -->
                <div class="card-circle" aria-hidden="true">
                  <span>{{ i + 1 }}</span>
                </div>

                <!-- Round food image overlapping top -->
                <div class="card-photo">
                  <div class="photo-plate" aria-hidden="true"></div>
                  @if (r.hero_image) {
                    <img [src]="r.hero_image" [alt]="r.title" loading="lazy" />
                  } @else {
                    <div class="photo-ph"></div>
                  }
                </div>

                <h3 class="card-title">{{ r.title }}</h3>
                @if (r.excerpt) {
                  <p class="card-text">{{ r.excerpt }}</p>
                }
                <span class="card-link">Виж рецептата →</span>

              </a>
            }
          </div>
        }
      </div>
    </section>

    <!-- ════════════════════ PHOTO GRID ══════════════════════════════════ -->
    @if (!loading() && featured().length >= 3) {
      <section class="photos">
        <div class="photos-inner">
          <div class="photos-grid">
            @for (r of featured().slice(0, 3); track r.id; let i = $index) {
              <a class="photo-cell" [routerLink]="['/recipes', r.slug]"
                 [attr.data-bg]="i">
                <div class="photo-frame">
                  @if (r.hero_image) {
                    <img [src]="r.hero_image" [alt]="r.title" loading="lazy" />
                  }
                  @if (i === 1) {
                    <div class="photo-play" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="6,3 22,12 6,21"/>
                      </svg>
                    </div>
                  }
                </div>
                <div class="photo-caption">{{ r.title }}</div>
              </a>
            }
          </div>

          <div class="photos-cta">
            <a routerLink="/recipes" class="cta-pill">Виж всички рецепти →</a>
          </div>
        </div>
      </section>
    }

  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

    :host {
      /* Painterly green palette */
      --g-deep:   oklch(28% 0.09 158);
      --g-card:   oklch(46% 0.13 158);
      --g-card-2: oklch(40% 0.12 158);
      --g-mid:    oklch(60% 0.13 158);
      --g-soft:   oklch(85% 0.07 158);

      /* Warm orange */
      --orn:      oklch(70% 0.20 52);
      --orn-deep: oklch(58% 0.20 42);
      --orn-soft: oklch(94% 0.05 60);

      /* Cream + earth */
      --cream:    oklch(96% 0.022 88);
      --cream-2:  oklch(93% 0.030 85);
      --txt-dark: oklch(20% 0.04 50);

      --f-display: 'Lilita One', 'Comic Sans MS', cursive;
      --f-body:    var(--font-body);

      display: block;
      background: var(--cream);
    }

    /* ═══════ HERO ════════════════════════════════════════════════ */
    .hero {
      position: relative;
      min-height: clamp(560px, 88vh, 780px);
      display: grid;
      place-items: center;
      overflow: hidden;
      isolation: isolate;
    }
    .hero-bg {
      position: absolute;
      inset: 0;
      z-index: 0;
    }
    .hero-bg img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .hero-bg-ph {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, var(--g-card) 0%, var(--g-deep) 100%);
    }
    .hero-shade {
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse at center, oklch(15% 0.04 155 / 0.20) 0%, oklch(15% 0.04 155 / 0.55) 100%),
        linear-gradient(180deg, oklch(15% 0.04 155 / 0.10) 0%, oklch(15% 0.04 155 / 0.45) 100%);
    }

    /* Sparkle decorations */
    .hero-sparkle {
      position: absolute;
      z-index: 2;
      filter: drop-shadow(0 4px 12px oklch(0% 0 0 / 0.3));
    }
    .hero-sparkle-1 {
      width: 56px;
      height: 56px;
      top: 18%;
      left: 8%;
      animation: spin 20s linear infinite;
    }
    .hero-sparkle-2 {
      width: 36px;
      height: 36px;
      top: 30%;
      right: 12%;
      animation: spin 16s linear infinite reverse;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    .hero-content {
      position: relative;
      z-index: 3;
      text-align: center;
      padding: 0 1.5rem;
      max-width: 880px;
    }
    .hero-eyebrow {
      display: inline-block;
      font-family: var(--f-body);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      color: oklch(98% 0 0);
      margin-bottom: 1.5rem;
      text-shadow: 0 2px 8px oklch(0% 0 0 / 0.4);
    }
    .hero-title {
      font-family: var(--f-display);
      font-size: clamp(3.5rem, 9vw, 7rem);
      line-height: 0.95;
      letter-spacing: 0.005em;
      color: oklch(99% 0 0);
      margin: 0 0 2.25rem;
      text-shadow:
        0 4px 0 oklch(15% 0.04 155 / 0.25),
        0 8px 32px oklch(0% 0 0 / 0.5);
      font-weight: 400;
    }
    .title-script {
      color: var(--orn);
      display: inline-block;
      transform: rotate(-3deg);
    }
    .hero-cta {
      display: inline-flex;
      align-items: center;
      gap: 0.7rem;
      padding: 1.1rem 2.6rem;
      background: var(--orn);
      color: #fff;
      border-radius: 9999px;
      font-family: var(--f-body);
      font-weight: 800;
      font-size: 0.95rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      text-decoration: none;
      box-shadow:
        0 12px 32px oklch(0% 0 0 / 0.35),
        0 4px 12px oklch(58% 0.20 42 / 0.4),
        inset 0 -3px 0 oklch(48% 0.18 42 / 0.5);
      transition: transform 0.18s, box-shadow 0.2s;
      touch-action: manipulation;
    }
    .hero-cta svg { width: 1.05rem; height: 1.05rem; }
    .hero-cta:hover {
      transform: translateY(-3px);
      box-shadow:
        0 16px 38px oklch(0% 0 0 / 0.4),
        0 6px 16px oklch(58% 0.20 42 / 0.5),
        inset 0 -3px 0 oklch(48% 0.18 42 / 0.5);
    }
    .hero-cta:active { transform: translateY(-1px); }

    .hero-sticker {
      position: absolute;
      bottom: 14%;
      right: 8%;
      width: 110px;
      height: 110px;
      z-index: 4;
      transform: rotate(8deg);
      filter: drop-shadow(0 8px 24px oklch(0% 0 0 / 0.35));
      animation: wiggle 4s ease-in-out infinite;
    }
    .hero-sticker svg { width: 100%; height: 100%; display: block; }
    .sticker-text {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }
    .sticker-num {
      font-family: var(--f-display);
      font-size: 1.55rem;
      color: var(--orn-deep);
      line-height: 1;
    }
    .sticker-lbl {
      font-family: var(--f-body);
      font-size: 0.6rem;
      font-weight: 800;
      text-transform: uppercase;
      color: var(--txt-dark);
      letter-spacing: 0.08em;
      margin-top: 2px;
    }
    @keyframes wiggle {
      0%, 100% { transform: rotate(8deg); }
      50%      { transform: rotate(2deg); }
    }

    /* ═══════ OUR FAVORITES ═══════════════════════════════════════ */
    .favs {
      position: relative;
      background: var(--cream);
      padding: clamp(4.5rem, 10vw, 8rem) 0 clamp(4.5rem, 10vw, 8rem);
      overflow: hidden;
    }
    .doodle {
      position: absolute;
      width: 100px;
      height: 100px;
      opacity: 0.55;
      pointer-events: none;
    }
    .doodle-tl { top: 6%;  left: 4%; }
    .doodle-tr { top: 8%;  right: 5%; }
    .doodle-bl { bottom: 8%; left: 6%; }
    .doodle-br { bottom: 6%; right: 4%; }

    .favs-inner {
      position: relative;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 clamp(1.5rem, 5vw, 3rem);
      z-index: 1;
    }

    .favs-head {
      text-align: center;
      margin-bottom: clamp(3rem, 6vw, 4.5rem);
    }
    .favs-title {
      font-family: var(--f-display);
      font-size: clamp(2.25rem, 5vw, 3.5rem);
      color: var(--orn);
      margin: 0;
      letter-spacing: 0.005em;
      font-weight: 400;
    }
    .favs-underline {
      display: block;
      width: clamp(140px, 22vw, 220px);
      margin: 0.6rem auto 0;
    }

    .favs-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: clamp(1.5rem, 3vw, 2.5rem);
      align-items: start;
      padding-top: 4rem;
    }

    /* Painterly green card */
    .fav-card {
      position: relative;
      padding: 5rem 1.75rem 2.25rem;
      background-color: var(--g-card);
      background-image:
        radial-gradient(ellipse at 25% 20%, oklch(58% 0.14 158 / 0.45) 0%, transparent 55%),
        radial-gradient(ellipse at 80% 75%, oklch(28% 0.09 158 / 0.45) 0%, transparent 60%),
        url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.15 0"/></filter><rect width="220" height="220" filter="url(%23n)"/></svg>');
      background-blend-mode: normal, normal, overlay;
      background-size: cover, cover, 220px;
      border-radius: 28px 36px 26px 32px / 32px 28px 34px 26px;
      box-shadow:
        0 20px 48px oklch(28% 0.09 158 / 0.30),
        inset 0 -4px 0 oklch(28% 0.09 158 / 0.4),
        inset 0 1px 0 oklch(80% 0.08 158 / 0.3);
      text-align: center;
      text-decoration: none;
      color: oklch(98% 0.01 158);
      transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .fav-card:nth-child(2) {
      background-color: var(--g-card-2);
      border-radius: 32px 28px 36px 26px / 28px 34px 26px 32px;
      transform: translateY(1rem);
    }
    .fav-card:nth-child(3) {
      border-radius: 26px 32px 30px 36px / 30px 26px 32px 28px;
    }
    .fav-card:hover {
      transform: translateY(-8px);
    }
    .fav-card:nth-child(2):hover {
      transform: translateY(calc(1rem - 8px));
    }

    /* White starburst sticker */
    .card-badge {
      position: absolute;
      top: -1rem;
      left: -0.5rem;
      width: 70px;
      height: 70px;
      transform: rotate(-12deg);
      z-index: 3;
      filter: drop-shadow(0 4px 8px oklch(0% 0 0 / 0.2));
    }
    .card-badge svg { width: 100%; height: 100%; display: block; }
    .card-badge span {
      position: absolute;
      inset: 0;
      display: grid;
      place-items: center;
      font-family: var(--f-display);
      font-size: 0.85rem;
      color: var(--orn-deep);
    }

    /* Orange number circle */
    .card-circle {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: var(--orn);
      color: #fff;
      display: grid;
      place-items: center;
      font-family: var(--f-display);
      font-size: 1.1rem;
      box-shadow: 0 4px 10px oklch(58% 0.20 42 / 0.5);
      z-index: 3;
    }

    /* Round food image overlapping the card top */
    .card-photo {
      position: relative;
      width: 78%;
      aspect-ratio: 1;
      margin: -7rem auto 1rem;
      z-index: 2;
    }
    .photo-plate {
      position: absolute;
      inset: -8% -6% -4% -10%;
      background: oklch(85% 0.04 350);
      border-radius: 50%;
      transform: rotate(-6deg);
      z-index: 0;
      box-shadow: 0 8px 20px oklch(0% 0 0 / 0.15);
    }
    .fav-card:nth-child(2) .photo-plate { background: oklch(82% 0.06 220); transform: rotate(4deg); }
    .fav-card:nth-child(3) .photo-plate { background: oklch(82% 0.07 60); transform: rotate(-3deg); }
    .card-photo img {
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      z-index: 1;
      box-shadow: 0 12px 28px oklch(0% 0 0 / 0.3);
      border: 4px solid #fff;
    }
    .photo-ph {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: var(--g-deep);
    }

    .card-title {
      font-family: var(--f-display);
      font-size: 1.55rem;
      color: #fff;
      margin: 0 0 0.5rem;
      line-height: 1.1;
      letter-spacing: 0.005em;
      font-weight: 400;
    }
    .card-text {
      font-family: var(--f-body);
      font-size: 0.85rem;
      color: oklch(92% 0.04 158);
      line-height: 1.5;
      margin: 0 0 1.25rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-align: center;
    }
    .card-link {
      font-family: var(--f-body);
      font-size: 0.78rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: oklch(96% 0.04 60);
      margin-top: auto;
      padding-top: 0.5rem;
      transition: color 0.2s;
    }
    .fav-card:hover .card-link { color: var(--orn); }

    /* Skeleton */
    .fav-sk {
      height: 380px;
      border-radius: 28px;
      background: oklch(48% 0.10 158);
      animation: pulse 1.6s ease-in-out infinite;
    }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.55; } }

    .favs-err {
      text-align: center;
      color: var(--txt-dark);
      padding: 3rem;
      font-family: var(--f-body);
    }

    /* ═══════ PHOTO GRID ═══════════════════════════════════════════ */
    .photos {
      background: var(--cream);
      padding: 0 0 clamp(4.5rem, 10vw, 8rem);
    }
    .photos-inner {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 clamp(1.5rem, 5vw, 3rem);
    }
    .photos-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: clamp(1.25rem, 3vw, 2rem);
    }
    .photo-cell {
      text-decoration: none;
      color: var(--txt-dark);
      display: block;
    }
    .photo-frame {
      position: relative;
      aspect-ratio: 1;
      border-radius: 22px 28px 24px 26px / 26px 22px 28px 24px;
      overflow: hidden;
      padding: 0.75rem;
      transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .photo-cell[data-bg="0"] .photo-frame { background: oklch(82% 0.07 200); }
    .photo-cell[data-bg="1"] .photo-frame { background: oklch(78% 0.10 50); }
    .photo-cell[data-bg="2"] .photo-frame { background: oklch(82% 0.07 350); }
    .photo-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px 22px 18px 20px / 20px 16px 22px 18px;
      display: block;
    }
    .photo-cell:hover .photo-frame { transform: translateY(-5px) rotate(-1deg); }

    .photo-play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: var(--orn);
      color: #fff;
      display: grid;
      place-items: center;
      box-shadow: 0 8px 20px oklch(0% 0 0 / 0.4);
    }
    .photo-play svg { width: 1.5rem; height: 1.5rem; margin-left: 0.2rem; }

    .photo-caption {
      font-family: var(--f-body);
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--txt-dark);
      text-align: center;
      margin-top: 0.85rem;
      line-height: 1.35;
    }

    .photos-cta {
      display: flex;
      justify-content: center;
      margin-top: clamp(2.5rem, 5vw, 4rem);
    }
    .cta-pill {
      display: inline-flex;
      align-items: center;
      padding: 1rem 2.4rem;
      background: var(--g-card);
      color: #fff;
      border-radius: 9999px;
      font-family: var(--f-body);
      font-weight: 800;
      font-size: 0.85rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      text-decoration: none;
      box-shadow:
        0 10px 24px oklch(28% 0.09 158 / 0.35),
        inset 0 -3px 0 oklch(28% 0.09 158 / 0.5);
      transition: transform 0.18s, box-shadow 0.2s;
    }
    .cta-pill:hover {
      transform: translateY(-2px);
      background: var(--g-deep);
    }

    /* ═══════ RESPONSIVE ═══════════════════════════════════════════ */
    @media (max-width: 900px) {
      .favs-grid { grid-template-columns: 1fr 1fr; }
      .fav-card:nth-child(3) { grid-column: span 2; max-width: 480px; margin-left: auto; margin-right: auto; width: 100%; }
      .photos-grid { grid-template-columns: 1fr 1fr; }
      .photo-cell:nth-child(3) { grid-column: span 2; max-width: 480px; margin: 0 auto; width: 100%; }
      .hero-sticker { width: 90px; height: 90px; right: 5%; }
      .doodle { width: 70px; height: 70px; }
    }
    @media (max-width: 640px) {
      .favs-grid { grid-template-columns: 1fr; padding-top: 5rem; }
      .fav-card:nth-child(2) { transform: none; }
      .fav-card:nth-child(2):hover { transform: translateY(-8px); }
      .fav-card:nth-child(3) { grid-column: auto; }
      .photos-grid { grid-template-columns: 1fr; }
      .photo-cell:nth-child(3) { grid-column: auto; }
      .hero-sticker { width: 78px; height: 78px; bottom: 8%; right: 4%; }
      .sticker-num { font-size: 1.25rem; }
      .sticker-lbl { font-size: 0.55rem; }
      .doodle-tl, .doodle-bl { left: 0; }
      .doodle-tr, .doodle-br { right: 0; }
    }

    @media (prefers-reduced-motion: reduce) {
      .hero-sparkle, .hero-sticker { animation: none; }
      .fav-card, .photo-frame, .hero-cta, .cta-pill { transition: none; }
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
