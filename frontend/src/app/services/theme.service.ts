import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark' | 'system';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);

  readonly theme = signal<Theme>(this.loadSaved());
  readonly isDark = signal<boolean>(this.resolveIsDark(this.loadSaved()));

  constructor() {
    effect(() => {
      const t = this.theme();
      this.isDark.set(this.resolveIsDark(t));
      this.applyToDOM(t);
      this.save(t);
    });

    if (isPlatformBrowser(this.platformId)) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (this.theme() === 'system') {
          this.isDark.set(window.matchMedia('(prefers-color-scheme: dark)').matches);
          this.applyToDOM('system');
        }
      });
    }
  }

  toggle() {
    this.theme.set(this.isDark() ? 'light' : 'dark');
  }

  private resolveIsDark(t: Theme): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;
    if (t === 'dark') return true;
    if (t === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private applyToDOM(t: Theme) {
    if (!isPlatformBrowser(this.platformId)) return;
    const html = document.documentElement;
    html.classList.remove('dark', 'light');
    if (t === 'dark')  html.classList.add('dark');
    if (t === 'light') html.classList.add('light');
  }

  private save(t: Theme) {
    if (isPlatformBrowser(this.platformId)) localStorage.setItem('theme', t);
  }

  private loadSaved(): Theme {
    if (!isPlatformBrowser(this.platformId)) return 'system';
    return (localStorage.getItem('theme') as Theme) ?? 'system';
  }
}
