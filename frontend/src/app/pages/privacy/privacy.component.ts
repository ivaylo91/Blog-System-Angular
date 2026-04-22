import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="privacy-page">
      <div class="privacy-inner">
        <h1>Политика за поверителност</h1>
        <p class="updated">Последна актуализация: April 2026</p>

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
      padding: 4rem 1.5rem;
      background: var(--clr-surface);
    }
    .privacy-inner {
      max-width: 720px;
      margin: 0 auto;
    }
    h1 {
      font-family: var(--font-display);
      font-size: clamp(1.75rem, 4vw, 2.5rem);
      font-weight: 700;
      color: var(--clr-text);
      margin-bottom: 0.25rem;
    }
    .updated {
      font-size: 0.85rem;
      color: var(--clr-text-muted);
      margin-bottom: 2.5rem;
    }
    section {
      margin-bottom: 2.25rem;
    }
    h2 {
      font-family: var(--font-display);
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--clr-text);
      margin-bottom: 0.75rem;
      padding-bottom: 0.4rem;
      border-bottom: 2px solid var(--clr-brand);
      display: inline-block;
    }
    p, li {
      color: var(--clr-text-muted);
      line-height: 1.75;
      font-size: 0.95rem;
      margin-bottom: 0.5rem;
    }
    ul {
      padding-left: 1.5rem;
      margin-bottom: 0.5rem;
    }
    li { margin-bottom: 0.35rem; }
    strong { color: var(--clr-text); }
    .back-link {
      display: inline-block;
      margin-top: 1.5rem;
      color: var(--clr-brand);
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      transition: opacity 0.2s;
    }
    .back-link:hover { opacity: 0.75; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyComponent {}
