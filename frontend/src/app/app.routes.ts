import { Routes } from '@angular/router';
import { authGuard, guestGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'recipes',
    loadComponent: () => import('./pages/recipes/recipes.component').then(m => m.RecipesComponent),
  },
  {
    path: 'recipes/:slug',
    loadComponent: () => import('./pages/recipe-detail/recipe-detail.component').then(m => m.RecipeDetailComponent),
  },
  {
    path: 'signin',
    canActivate: [guestGuard],
    loadComponent: () => import('./pages/signin/signin.component').then(m => m.SigninComponent),
  },
  {
    path: 'register',
    canActivate: [guestGuard],
    loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent),
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: 'dashboard/recipes',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/dashboard-recipes/dashboard-recipes.component').then(m => m.DashboardRecipesComponent),
  },
  {
    path: 'dashboard/recipes/new',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/dashboard-recipe-edit/dashboard-recipe-edit.component').then(m => m.DashboardRecipeEditComponent),
  },
  {
    path: 'dashboard/recipes/:id/edit',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/dashboard-recipe-edit/dashboard-recipe-edit.component').then(m => m.DashboardRecipeEditComponent),
  },
  {
    path: 'dashboard/comments',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/dashboard-comments/dashboard-comments.component').then(m => m.DashboardCommentsComponent),
  },
  {
    path: 'dashboard/favorites',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/dashboard-favorites/dashboard-favorites.component').then(m => m.DashboardFavoritesComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
