import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found">

      <!-- Decorative blob -->
      <svg class="blob" viewBox="0 0 400 360" aria-hidden="true">
        <path fill="#b1502d" fill-opacity=".09"
          d="M200,52 C282,28 360,88 376,170 C392,252 354,336 268,356 C182,376 94,342 56,264 C18,186 36,94 94,60 C124,42 152,70 200,52Z"/>
      </svg>

      <!-- Scatter marks -->
      <span class="scat scat-1" aria-hidden="true">×</span>
      <span class="scat scat-2" aria-hidden="true">•</span>
      <span class="scat scat-3" aria-hidden="true">×</span>

      <div class="content">
        <p class="hand-num" aria-hidden="true">404</p>
        <h1>Страницата изгоря.</h1>
        <p class="annotation">понякога добрите неща не се запазват</p>
        <p class="sub">Търсеното съдържание не съществува или е преместено на друго място.</p>
        <div class="actions">
          <a routerLink="/" class="btn-primary">Към начало</a>
          <a routerLink="/recipes" class="btn-secondary">Разгледай рецепти</a>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .not-found {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: calc(100dvh - 8rem);
      padding: 3rem 1.5rem;
      overflow: hidden;
    }

    .blob {
      position: absolute;
      width: clamp(240px, 45vw, 480px);
      top: -3rem;
      right: -3rem;
      pointer-events: none;
      z-index: 0;
    }

    .scat {
      position: absolute;
      font-family: var(--font-type);
      color: var(--terracotta);
      pointer-events: none;
      z-index: 0;
      user-select: none;
    }
    .scat-1 { top: 15%;  left: 8%;  font-size: 1.8rem; opacity: 0.22; transform: rotate(-15deg); }
    .scat-2 { bottom: 22%; right: 10%; font-size: 1.1rem; opacity: 0.3;  transform: rotate(8deg); }
    .scat-3 { top: 65%;  left: 14%; font-size: 0.85rem; opacity: 0.16; transform: rotate(22deg); }

    .content {
      position: relative;
      z-index: 1;
      max-width: 520px;
      text-align: left;
    }

    .hand-num {
      font-family: var(--font-hand);
      font-size: clamp(5.5rem, 18vw, 10rem);
      font-weight: 400;
      color: var(--terracotta);
      opacity: 0.16;
      line-height: 0.88;
      margin: 0 0 -1.25rem;
      letter-spacing: -0.02em;
    }

    h1 {
      font-family: var(--font-display);
      font-style: italic;
      font-size: clamp(2rem, 5vw, 3.25rem);
      font-weight: 800;
      color: var(--ink);
      line-height: 1.05;
      margin: 0 0 0.5rem;
    }

    .annotation {
      font-family: var(--font-hand);
      font-size: 1.2rem;
      color: var(--ink-mute);
      margin: 0 0 1.25rem;
    }

    .sub {
      font-size: 0.92rem;
      color: var(--clr-text-muted);
      margin: 0 0 2.25rem;
      line-height: 1.65;
      max-width: 44ch;
    }

    .actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      padding: 0.8rem 1.75rem;
      background: var(--terracotta);
      color: var(--paper);
      text-decoration: none;
      font-family: var(--font-type);
      font-size: 0.65rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      box-shadow: var(--shadow-sm);
      transition: background 0.18s, transform 0.15s;
      touch-action: manipulation;
    }
    .btn-primary:hover { background: var(--terracotta-2); transform: translateY(-1px); }
    .btn-primary:active { transform: translateY(0); }

    .btn-secondary {
      display: inline-flex;
      align-items: center;
      padding: 0.8rem 1.75rem;
      background: transparent;
      color: var(--ink);
      text-decoration: none;
      font-family: var(--font-type);
      font-size: 0.65rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      border: 1px solid var(--rule-strong);
      transition: background 0.18s, border-color 0.18s, transform 0.15s;
      touch-action: manipulation;
    }
    .btn-secondary:hover { background: var(--paper-2); border-color: var(--terracotta); transform: translateY(-1px); }
    .btn-secondary:active { transform: translateY(0); }

    @media (prefers-reduced-motion: reduce) {
      .btn-primary, .btn-secondary { transition: background 0.2s, border-color 0.2s; }
      .btn-primary:hover, .btn-secondary:hover { transform: none; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent implements OnInit {
  private seo = inject(SeoService);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.seo.set({
      title: '404 — Страницата не е намерена',
      description: 'Тази страница не съществува.',
    });
    this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
  }
}
