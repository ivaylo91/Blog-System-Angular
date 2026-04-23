import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { FavoriteStatusResponse, Recipe } from '../models/models';

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  private http = inject(HttpClient);

  private _favorites = signal<Recipe[] | null>(null);
  favorites = this._favorites.asReadonly();

  getFavoriteStatus(slug: string): Observable<FavoriteStatusResponse> {
    return this.http.get<FavoriteStatusResponse>(`${environment.apiUrl}/recipes/${slug}/favorite-status`);
  }

  toggleFavorite(slug: string): Observable<FavoriteStatusResponse> {
    return this.http.post<FavoriteStatusResponse>(`${environment.apiUrl}/recipes/${slug}/favorite`, {}).pipe(
      tap(() => this._favorites.set(null)),
    );
  }

  getFavorites(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${environment.apiUrl}/favorites`).pipe(
      tap(recipes => this._favorites.set(recipes)),
    );
  }

  invalidate(): void {
    this._favorites.set(null);
  }
}
