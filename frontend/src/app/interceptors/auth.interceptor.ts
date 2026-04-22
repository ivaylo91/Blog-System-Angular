import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  req = req.clone({
    setHeaders: { Accept: 'application/json' },
    withCredentials: true,
  });

  return next(req).pipe(
    tap({
      error: (err) => {
        if (err.status === 401) {
          const hadUser = !!localStorage.getItem('user');
          localStorage.removeItem('user');
          if (hadUser) {
            router.navigate(['/signin']);
          }
        }
      },
    })
  );
};
