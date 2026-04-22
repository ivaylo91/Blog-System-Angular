import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthResponse, User } from '../models/models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUser = signal<User | null>(null);

  user = this.currentUser.asReadonly();
  isAuthenticated = computed(() => !!this.currentUser());
  isAdmin = computed(() => this.currentUser()?.role === 'ADMIN');

  constructor(private http: HttpClient, private router: Router) {
    this.loadFromStorage();
    this.verifySession();
  }

  private loadFromStorage(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        this.currentUser.set(JSON.parse(userData));
      } catch {
        localStorage.removeItem('user');
      }
    }
  }

  private verifySession(): void {
    this.http.get<User>(`${environment.apiUrl}/user`).subscribe({
      next: (user) => {
        this.currentUser.set(user);
        localStorage.setItem('user', JSON.stringify(user));
      },
      error: () => {
        this.currentUser.set(null);
        localStorage.removeItem('user');
      },
    });
  }

  private csrf(): Observable<void> {
    return this.http.get<void>('/sanctum/csrf-cookie');
  }

  private clearStorage(): void {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }

  register(name: string, email: string, password: string, password_confirmation: string): Observable<AuthResponse> {
    return this.csrf().pipe(
      switchMap(() => this.http.post<AuthResponse>(`${environment.apiUrl}/register`, {
        name, email, password, password_confirmation,
      })),
      tap(res => this.handleAuth(res)),
    );
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.csrf().pipe(
      switchMap(() => this.http.post<AuthResponse>(`${environment.apiUrl}/login`, {
        email, password,
      })),
      tap(res => this.handleAuth(res)),
    );
  }

  logout(): void {
    this.http.post(`${environment.apiUrl}/logout`, {}).subscribe({
      complete: () => {},
      error: () => {},
    });
    this.clearStorage();
    this.router.navigate(['/']);
  }

  fetchUser(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/user`).pipe(
      tap(user => {
        this.currentUser.set(user);
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  updateProfile(data: FormData): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/user/profile`, data).pipe(
      tap(user => {
        this.currentUser.set(user);
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  private handleAuth(res: AuthResponse): void {
    this.currentUser.set(res.user);
    localStorage.setItem('user', JSON.stringify(res.user));
  }
}
