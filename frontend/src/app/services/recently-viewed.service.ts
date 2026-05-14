import { Injectable, signal } from '@angular/core';

export interface RecentRecipe {
  id: number;
  slug: string;
  title: string;
  hero_image: string | null;
  category?: { name: string };
  prep_minutes: number;
  cook_minutes: number;
  viewedAt: number;
}

const KEY = 'rv_recipes';
const MAX = 6;

@Injectable({ providedIn: 'root' })
export class RecentlyViewedService {
  items = signal<RecentRecipe[]>(this.load());

  add(recipe: RecentRecipe): void {
    const without = this.items().filter(r => r.slug !== recipe.slug);
    const next = [{ ...recipe, viewedAt: Date.now() }, ...without].slice(0, MAX);
    this.items.set(next);
    this.save(next);
  }

  clear(): void {
    this.items.set([]);
    localStorage.removeItem(KEY);
  }

  private load(): RecentRecipe[] {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private save(items: RecentRecipe[]): void {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
  }
}
