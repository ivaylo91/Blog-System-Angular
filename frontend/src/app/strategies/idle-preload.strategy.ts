import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

/**
 * Preloads lazy route chunks during browser idle time.
 * Uses requestIdleCallback so preloading never competes with user interaction,
 * which keeps TBT (Total Blocking Time) low while still improving
 * subsequent navigation speed.
 *
 * Falls back to a 3-second setTimeout on browsers that lack rIC support.
 */
@Injectable({ providedIn: 'root' })
export class IdlePreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    return new Observable(observer => {
      const run = () => load().subscribe({
        next: v  => observer.next(v),
        error: () => observer.complete(),
        complete: () => observer.complete(),
      });

      if (typeof requestIdleCallback !== 'undefined') {
        requestIdleCallback(run, { timeout: 5000 });
      } else {
        setTimeout(run, 3000);
      }
    });
  }
}
