import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Collection, CollectionDetailResponse, CollectionForRecipe } from '../models/models';

@Injectable({ providedIn: 'root' })
export class CollectionService {
  private http = inject(HttpClient);

  getCollections(): Observable<Collection[]> {
    return this.http.get<Collection[]>(`${environment.apiUrl}/collections`);
  }

  createCollection(data: { name: string; description?: string }): Observable<Collection> {
    return this.http.post<Collection>(`${environment.apiUrl}/collections`, data);
  }

  getCollection(id: number, page = 1): Observable<CollectionDetailResponse> {
    const params = new HttpParams().set('page', String(page));
    return this.http.get<CollectionDetailResponse>(`${environment.apiUrl}/collections/${id}`, { params });
  }

  updateCollection(id: number, data: { name: string; description?: string }): Observable<Collection> {
    return this.http.put<Collection>(`${environment.apiUrl}/collections/${id}`, data);
  }

  deleteCollection(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/collections/${id}`);
  }

  toggleRecipe(collectionId: number, recipeSlug: string): Observable<{ added: boolean; recipes_count: number }> {
    return this.http.post<{ added: boolean; recipes_count: number }>(
      `${environment.apiUrl}/collections/${collectionId}/toggle`,
      { recipe_slug: recipeSlug },
    );
  }

  getCollectionsForRecipe(slug: string): Observable<CollectionForRecipe[]> {
    return this.http.get<CollectionForRecipe[]>(`${environment.apiUrl}/recipe-collections/${slug}`);
  }
}
