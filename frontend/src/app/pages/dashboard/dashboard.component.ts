import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { DashboardStats } from '../../models/models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="dashboard-page">
      <h1>Табло</h1>
      <p class="subtitle">Управлявай рецептите и следи активността на блога.</p>

      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-number">{{ stats?.totalRecipes || 0 }}</span>
          <span class="stat-label">Общо рецепти</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">{{ stats?.publishedRecipes || 0 }}</span>
          <span class="stat-label">Публикувани</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">{{ stats?.totalComments || 0 }}</span>
          <span class="stat-label">Коментари</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">{{ stats?.totalFavorites || 0 }}</span>
          <span class="stat-label">Запазвания</span>
        </div>
      </div>

      <div class="quick-links">
        <a routerLink="/dashboard/recipes" class="quick-link">📝 Управление на рецепти</a>
        <a routerLink="/dashboard/comments" class="quick-link">💬 Коментари</a>
        <a routerLink="/dashboard/favorites" class="quick-link">❤️ Любими рецепти</a>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-page {
      max-width: 1000px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
    }
    h1 {
      font-family: 'Georgia', serif;
      font-size: 2rem;
      color: #1c1917;
      margin: 0 0 0.25rem;
    }
    .subtitle { color: #78716c; margin: 0 0 2rem; }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }
    .stat-card {
      padding: 1.5rem;
      background: rgba(255,255,255,0.9);
      border-radius: 1.5rem;
      border: 1px solid rgba(0,0,0,0.06);
      text-align: center;
      box-shadow: 0 8px 24px rgba(0,0,0,0.04);
    }
    .stat-number {
      display: block;
      font-family: 'Georgia', serif;
      font-size: 2.5rem;
      color: #1c1917;
    }
    .stat-label {
      display: block;
      font-size: 0.85rem;
      color: #78716c;
      margin-top: 0.25rem;
    }
    .quick-links {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }
    .quick-link {
      padding: 1rem 1.5rem;
      background: rgba(255,255,255,0.9);
      border-radius: 1rem;
      border: 1px solid rgba(0,0,0,0.06);
      text-decoration: none;
      color: #1c1917;
      font-weight: 600;
      transition: all 0.2s;
      box-shadow: 0 4px 16px rgba(0,0,0,0.04);
    }
    .quick-link:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }
  `],
})
export class DashboardComponent implements OnInit {
  private recipeService = inject(RecipeService);
  stats: DashboardStats | null = null;

  ngOnInit(): void {
    this.recipeService.getDashboardStats().subscribe(s => this.stats = s);
  }
}
