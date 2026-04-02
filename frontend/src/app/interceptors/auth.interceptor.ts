import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('auth_token');
  const router = inject(Router);

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });
  } else {
    req = req.clone({
      setHeaders: {
        Accept: 'application/json',
      },
    });
  }

  return next(req).pipe(
    tap({
      error: (err) => {
        if (err.status === 401 && token) {
          localStorage.removeItem('auth_token');
          localStorage.removeItem('user');
          router.navigate(['/signin']);
        }
      },
    })
  );
};
