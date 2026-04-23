import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { DashboardStats, Recipe } from '../models/models';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private http = inject(HttpClient);

  private _stats = signal<DashboardStats | null>(null);
  stats = this._stats.asReadonly();

  getStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(`${environment.apiUrl}/dashboard/stats`).pipe(
      tap(s => this._stats.set(s)),
    );
  }

  getRecipes(): Observable<Recipe[]> {
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

  invalidateStats(): void {
    this._stats.set(null);
  }
}
