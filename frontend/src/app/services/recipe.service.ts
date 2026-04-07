import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  Recipe,
  Category,
  PaginatedResponse,
  RecipeDetailResponse,
  FavoriteStatusResponse,
  DashboardStats,
  Comment,
} from '../models/models';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  constructor(private http: HttpClient) {}

  getRecipes(params: {
    q?: string;
    category?: string;
    difficulty?: string;
    sort?: string;
    page?: number;
    per_page?: number;
  } = {}): Observable<PaginatedResponse<Recipe>> {
    let httpParams = new HttpParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        httpParams = httpParams.set(key, String(value));
      }
    });
    return this.http.get<PaginatedResponse<Recipe>>(`${environment.apiUrl}/recipes`, { params: httpParams });
  }

  getFeaturedRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${environment.apiUrl}/recipes/featured`);
  }

  getRecipe(slug: string): Observable<RecipeDetailResponse> {
    return this.http.get<RecipeDetailResponse>(`${environment.apiUrl}/recipes/${slug}`);
  }

  getRelatedRecipes(slug: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${environment.apiUrl}/recipes/${slug}/related`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/recipes/categories`);
  }

  getFavoriteStatus(slug: string): Observable<FavoriteStatusResponse> {
    return this.http.get<FavoriteStatusResponse>(`${environment.apiUrl}/recipes/${slug}/favorite-status`);
  }

  toggleFavorite(slug: string): Observable<FavoriteStatusResponse> {
    return this.http.post<FavoriteStatusResponse>(`${environment.apiUrl}/recipes/${slug}/favorite`, {});
  }

  getFavorites(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${environment.apiUrl}/favorites`);
  }

  rateRecipe(slug: string, rating: number): Observable<{ rating: number; averageRating: number; ratingsCount: number }> {
    return this.http.post<any>(`${environment.apiUrl}/recipes/${slug}/rate`, { rating });
  }

  commentRecipe(slug: string, body: string, rating?: number, parentId?: number): Observable<Comment> {
    return this.http.post<Comment>(`${environment.apiUrl}/recipes/${slug}/comment`, { body, rating, parent_id: parentId });
  }

  deleteComment(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${environment.apiUrl}/comments/${id}`);
  }

  // Dashboard
  getDashboardStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(`${environment.apiUrl}/dashboard/stats`);
  }

  getDashboardRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${environment.apiUrl}/dashboard/recipes`);
  }

  createRecipe(data: FormData): Observable<Recipe> {
    return this.http.post<Recipe>(`${environment.apiUrl}/dashboard/recipes`, data);
  }

  updateRecipe(slug: string, data: FormData): Observable<Recipe> {
    data.append('_method', 'PUT');
    return this.http.post<Recipe>(`${environment.apiUrl}/dashboard/recipes/${slug}`, data);
  }

  deleteRecipe(slug: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${environment.apiUrl}/dashboard/recipes/${slug}`);
  }

  togglePublish(slug: string, published: boolean): Observable<Recipe> {
    const fd = new FormData();
    fd.append('_method', 'PUT');
    fd.append('published', published ? '1' : '0');
    return this.http.post<Recipe>(`${environment.apiUrl}/dashboard/recipes/${slug}`, fd);
  }

  getAdminComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${environment.apiUrl}/admin/comments`);
  }

  bulkDeleteComments(ids: number[]): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${environment.apiUrl}/admin/comments/bulk-delete`, { ids });
  }
}
