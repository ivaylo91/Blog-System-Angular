import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Comment } from '../models/models';

@Injectable({ providedIn: 'root' })
export class CommentService {
  private http = inject(HttpClient);

  comment(slug: string, body: string, rating?: number, parentId?: number): Observable<Comment> {
    return this.http.post<Comment>(`${environment.apiUrl}/recipes/${slug}/comment`, {
      body,
      rating,
      parent_id: parentId,
    });
  }

  rate(slug: string, rating: number): Observable<{ rating: number; averageRating: number; ratingsCount: number }> {
    return this.http.post<{ rating: number; averageRating: number; ratingsCount: number }>(
      `${environment.apiUrl}/recipes/${slug}/rate`,
      { rating },
    );
  }

  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${environment.apiUrl}/comments/${id}`);
  }

  getAdminComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${environment.apiUrl}/admin/comments`);
  }

  bulkDelete(ids: number[]): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${environment.apiUrl}/admin/comments/bulk-delete`, { ids });
  }
}
