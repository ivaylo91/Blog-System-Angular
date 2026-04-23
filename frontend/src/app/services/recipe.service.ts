import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { environment } from '../../environments/environment';
import { Category, PaginatedResponse, Recipe, RecipeDetailResponse } from '../models/models';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private http = inject(HttpClient);
  private categories$: Observable<Category[]> | null = null;

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
    if (!this.categories$) {
      this.categories$ = this.http.get<Category[]>(`${environment.apiUrl}/recipes/categories`).pipe(shareReplay(1));
    }
    return this.categories$;
  }
}
