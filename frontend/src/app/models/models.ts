export interface Recipe {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  description: string | null;
  hero_image: string | null;
  prep_minutes: number;
  cook_minutes: number;
  servings: number;
  difficulty: 'Лесно' | 'Средно' | 'За напреднали';
  published: boolean;
  published_at: string | null;
  author: string;
  hero_palette_from: string | null;
  hero_palette_via: string | null;
  hero_palette_to: string | null;
  category_id: number | null;
  user_id: number | null;
  category?: Category;
  user?: User;
  tags?: Tag[];
  ingredients?: Ingredient[];
  steps?: RecipeStep[];
  comments?: Comment[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  recipes_count?: number;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface Ingredient {
  id: number;
  recipe_id: number;
  amount: string;
  name: string;
  position: number;
}

export interface RecipeStep {
  id: number;
  recipe_id: number;
  title: string;
  description: string;
  position: number;
}

export interface Comment {
  id: number;
  recipe_id: number;
  user_id: number;
  body: string;
  rating: number | null;
  parent_id: number | null;
  created_at: string;
  updated_at: string;
  author?: User;
  recipe?: Recipe;
  replies?: Comment[];
}

export interface User {
  id: number;
  name: string | null;
  email: string;
  role: 'USER' | 'ADMIN';
  image: string | null;
}

export interface AuthResponse {
  user: User;
}

export interface PaginatedResponse<T> {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export interface RecipeDetailResponse {
  recipe: Recipe;
  averageRating: number | null;
  ratingsCount: number;
  favoriteCount: number;
}

export interface FavoriteStatusResponse {
  isFavorite: boolean;
  favoriteCount: number;
}

export interface DashboardStats {
  totalRecipes: number;
  publishedRecipes: number;
  draftRecipes: number;
  totalComments: number;
  totalFavorites: number;
  recentComments: Comment[];
}
