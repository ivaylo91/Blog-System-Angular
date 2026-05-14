import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="privacy-page">

      <!-- Editorial page header -->
      <header class="priv-header">
        <span class="eyebrow">Документ</span>
        <h1>Политика за поверителност</h1>
        <p class="lede">Честни думи за това какво правим с твоите данни — нищо повече, нищо по-малко.</p>
        <p class="updated">Последна актуализация: April 2026</p>
      </header>

      <div class="privacy-inner">

        <section>
          <h2>Какви данни събираме</h2>
          <p>При регистрация събираме: <strong>имe, имейл адрес и парола</strong> (съхранявана в хеширан вид). По желание можеш да добавиш профилна снимка.</p>
          <p>При използване на сайта съхраняваме: коментари и оценки към рецепти, рецепти, създадени от теб, и списъка ти с любими рецепти.</p>
        </section>

        <section>
          <h2>Защо събираме тези данни</h2>
          <ul>
            <li>Имейл и парола — за идентифициране на акаунта ти</li>
            <li>Коментари и оценки — за показване на обратна връзка към рецептите</li>
            <li>Любими рецепти — за персонализиране на твоето изживяване</li>
          </ul>
          <p>Не споделяме данните ти с трети страни и не използваме рекламни или аналитични услуги.</p>
        </section>

        <section>
          <h2>Бисквитки (cookies)</h2>
          <p>Сайтът използва само технически задължителни бисквитки:</p>
          <ul>
            <li><strong>Сесийна бисквитка</strong> — поддържа те вписан в акаунта си (httpOnly, изчиства се при затваряне на браузъра или при изход)</li>
            <li><strong>XSRF-TOKEN</strong> — защита срещу CSRF атаки (стандартна мярка за сигурност)</li>
          </ul>
          <p>Не използваме бисквитки за проследяване, реклами или анализ. Нямаш нужда да се съгласяваш за тяхното ползване, тъй като те са строго необходими за работата на сайта.</p>
        </section>

        <section>
          <h2>Твоите права (GDPR)</h2>
          <p>Като потребител имаш следните права:</p>
          <ul>
            <li><strong>Право на достъп</strong> — можеш да видиш профила и данните си от страниците „Профил" и „Табло"</li>
            <li><strong>Право на поправка</strong> — можеш да промениш името и снимката си от страница „Профил"</li>
            <li><strong>Право на изтриване</strong> — можеш да изтриеш акаунта си от страница „Профил"; всички коментари и любими се изтриват незабавно, а рецептите остават в блога без авторски данни</li>
          </ul>
        </section>

        <section>
          <h2>Сигурност</h2>
          <p>Паролите се съхраняват хеширани (bcrypt, 12 рунда). Комуникацията е шифрована чрез HTTPS. Данните на сесията са криптирани на сървъра. Автентикацията се базира на httpOnly сесийни бисквитки — токени не се съхраняват в браузъра.</p>
        </section>

        <section>
          <h2>Контакт</h2>
          <p>При въпроси относно личните ти данни, пиши на <strong>ipenev91&#64;gmail.com</strong>.</p>
        </section>

        <a routerLink="/" class="back-link">← Обратно към начало</a>
      </div>
    </main>
  `,
  styles: [`
    .privacy-page {
      min-height: 60vh;
      background: var(--clr-bg);
    }

    /* ── Editorial header ─────────────────────────────────────────── */
    .priv-header {
      padding: clamp(2.5rem, 6vw, 4rem) clamp(1.5rem, 6vw, 3rem) clamp(2rem, 4vw, 3rem);
      max-width: 800px;
      margin: 0 auto;
    }
    .eyebrow {
      display: inline-block;
      font-family: var(--font-type);
      font-size: 0.6rem;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.22em;
      color: var(--terracotta);
      margin-bottom: 0.75rem;
    }
    h1 {
      font-family: var(--font-display);
      font-style: italic;
      font-size: clamp(2rem, 5vw, 3.25rem);
      font-weight: 800;
      color: var(--ink);
      line-height: 1.05;
      margin: 0 0 0.875rem;
    }
    .lede {
      font-size: clamp(0.95rem, 1.2vw, 1.05rem);
      color: var(--ink-mute);
      line-height: 1.65;
      max-width: 52ch;
      margin: 0 0 0.5rem;
    }
    .updated {
      font-family: var(--font-type);
      font-size: 0.65rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--clr-text-faint);
    }

    /* ── Content ──────────────────────────────────────────────────── */
    .privacy-inner {
      max-width: 680px;
      margin: 0 auto;
      padding: 0 clamp(1.5rem, 6vw, 3rem) clamp(3rem, 6vw, 5rem);
    }

    section {
      margin-bottom: 2.5rem;
      padding-top: 2rem;
      border-top: 1px dotted var(--rule);
    }
    section:first-child { border-top: none; padding-top: 0; }

    h2 {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--ink);
      margin: 0 0 1rem;
    }
    h2::before {
      content: '§ ';
      font-family: var(--font-display);
      color: var(--terracotta);
      font-size: 0.9em;
    }

    p, li {
      color: var(--ink-mute);
      line-height: 1.75;
      font-size: 0.95rem;
      margin-bottom: 0.6rem;
    }
    ul {
      padding-left: 1.25rem;
      margin-bottom: 0.6rem;
    }
    li { margin-bottom: 0.4rem; }
    strong { color: var(--ink); }

    .back-link {
      display: inline-flex;
      align-items: center;
      margin-top: 2rem;
      padding: 0.7rem 1.5rem;
      color: var(--ink);
      text-decoration: none;
      font-family: var(--font-type);
      font-size: 0.65rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      border: 1px solid var(--rule-strong);
      transition: background 0.18s, border-color 0.18s;
    }
    .back-link:hover { background: var(--paper-2); border-color: var(--terracotta); }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.set({
      title: 'Политика за поверителност',
      description: 'Прочети политиката за поверителност на Кулинарният блог на Иво — какви данни събираме, защо и как ги пазим.',
    });
  }
}
