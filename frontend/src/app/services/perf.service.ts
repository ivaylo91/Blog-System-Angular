import { Injectable } from '@angular/core';

/**
 * Thin wrapper around the User Timing API (performance.mark / performance.measure).
 * Produces named marks and measures that appear in:
 *  - Chrome DevTools → Performance panel → Timings lane
 *  - Lighthouse → "User Timing marks and measures" audit
 *  - web-vitals tooling
 *
 * All calls are no-ops when the API is unavailable (SSR / old browsers).
 */
@Injectable({ providedIn: 'root' })
export class PerfService {
  private supported = typeof performance !== 'undefined' && typeof performance.mark === 'function';

  mark(name: string): void {
    if (!this.supported) return;
    try { performance.mark(name); } catch { /* ignore */ }
  }

  measure(name: string, startMark: string, endMark?: string): void {
    if (!this.supported) return;
    try {
      performance.measure(name, startMark, endMark);
    } catch {
      // startMark may not exist on repeat navigations — safe to ignore
    }
  }
}
