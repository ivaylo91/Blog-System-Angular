import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found">
      <div class="content">
        <div class="emoji">🍳</div>
        <h1>404</h1>
        <p class="title">Страницата не е намерена</p>
        <p class="subtitle">Изглежда тази рецепта е изгоряла или никога не е съществувала.</p>
        <div class="actions">
          <a routerLink="/" class="btn-primary">Към начало</a>
          <a routerLink="/recipes" class="btn-secondary">Разгледай рецепти</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .not-found {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: calc(100vh - 8rem);
      padding: 2rem;
      background: linear-gradient(135deg, #fdf8f0 0%, #f5f0e8 100%);
    }
    .content {
      text-align: center;
      max-width: 480px;
    }
    .emoji { font-size: 4rem; margin-bottom: 0.5rem; }
    h1 {
      font-family: 'Georgia', serif;
      font-size: 6rem;
      color: #78350f;
      margin: 0;
      line-height: 1;
      opacity: 0.15;
    }
    .title {
      font-family: 'Georgia', serif;
      font-size: 1.75rem;
      color: #1c1917;
      margin: 0.5rem 0 0.75rem;
    }
    .subtitle {
      color: #57534e;
      font-size: 1rem;
      margin: 0 0 2rem;
      line-height: 1.6;
    }
    .actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
    .btn-primary {
      padding: 0.75rem 1.75rem;
      background: #78350f;
      color: #fff;
      border-radius: var(--radius-md);
      text-decoration: none;
      font-weight: 700;
      font-size: 0.95rem;
      transition: background 0.2s, transform 0.15s;
    }
    .btn-primary:hover { background: #5c2a0b; transform: translateY(-1px); }
    .btn-secondary {
      padding: 0.75rem 1.75rem;
      background: #fff;
      color: #1c1917;
      border-radius: var(--radius-md);
      text-decoration: none;
      font-weight: 700;
      font-size: 0.95rem;
      border: 1.5px solid rgba(0,0,0,0.12);
      transition: background 0.2s, transform 0.15s;
    }
    .btn-secondary:hover { background: #f5f0e8; transform: translateY(-1px); }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
