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
    path: 'categories',
    loadComponent: () => import('./pages/categories/categories.component').then(m => m.CategoriesComponent),
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
  // Recipe editor — full-page, no sidebar
  {
    path: 'dashboard/recipes/new',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/dashboard-recipe-edit/dashboard-recipe-edit.component').then(m => m.DashboardRecipeEditComponent),
  },
  {
    path: 'dashboard/recipes/:slug/edit',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/dashboard-recipe-edit/dashboard-recipe-edit.component').then(m => m.DashboardRecipeEditComponent),
  },
  // Dashboard shell — all overview pages share the sidebar layout
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/dashboard-layout/dashboard-layout.component').then(m => m.DashboardLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: 'recipes',
        loadComponent: () => import('./pages/dashboard-recipes/dashboard-recipes.component').then(m => m.DashboardRecipesComponent),
      },
      {
        path: 'comments',
        loadComponent: () => import('./pages/dashboard-comments/dashboard-comments.component').then(m => m.DashboardCommentsComponent),
      },
      {
        path: 'favorites',
        loadComponent: () => import('./pages/dashboard-favorites/dashboard-favorites.component').then(m => m.DashboardFavoritesComponent),
      },
    ],
  },
  {
    path: 'shopping-list',
    loadComponent: () => import('./pages/shopping-list/shopping-list.component').then(m => m.ShoppingListComponent),
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy.component').then(m => m.PrivacyComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];
