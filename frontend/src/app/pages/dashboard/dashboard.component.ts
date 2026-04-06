import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { DashboardStats } from '../../models/models';
import { SeoService } from '../../services/seo.service';

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
    .subtitle { color: #44403c; margin: 0 0 2rem; }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }
    .stat-card {
      padding: 1.5rem;
      background: #ffffff;
      border-radius: 1.5rem;
      border: 1px solid rgba(0,0,0,0.14);
      text-align: center;
      box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    }
    .stat-number {
      display: block;
      font-family: 'Georgia', serif;
      font-size: 2.5rem;
      color: #78350f;
    }
    .stat-label {
      display: block;
      font-size: 0.85rem;
      color: #44403c;
      font-weight: 600;
      margin-top: 0.25rem;
    }
    .quick-links {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }
    .quick-link {
      padding: 1rem 1.5rem;
      background: #ffffff;
      border-radius: 1rem;
      border: 1px solid rgba(0,0,0,0.14);
      text-decoration: none;
      color: #1c1917;
      font-weight: 700;
      transition: all 0.2s;
      box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    }
    .quick-link:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.14);
      background: #f5f0e8;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  private recipeService = inject(RecipeService);
  private seo = inject(SeoService);
  private cdr = inject(ChangeDetectorRef);
  stats: DashboardStats | null = null;

  ngOnInit(): void {
    this.seo.set({
      title: 'Табло',
      description: 'Управлявай рецептите, коментарите и любимите си в таблото на кулинарния блог.',
    });
    this.recipeService.getDashboardStats().subscribe(s => { this.stats = s; this.cdr.markForCheck(); });
  }
}
