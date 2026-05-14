import { Injectable, computed, signal } from '@angular/core';
import { Recipe } from '../models/models';

export interface ShoppingItem {
  id: string;
  recipeSlug: string;
  recipeTitle: string;
  amount: string;
  name: string;
  checked: boolean;
}

const KEY = 'shopping_list';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  items = signal<ShoppingItem[]>(this.load());

  count = computed(() => this.items().filter(i => !i.checked).length);

  addFromRecipe(recipe: Recipe): void {
    if (!recipe.ingredients?.length) return;
    const existing = this.items().filter(i => i.recipeSlug !== recipe.slug);
    const newItems: ShoppingItem[] = recipe.ingredients.map(ing => ({
      id: `${recipe.slug}-${ing.id}`,
      recipeSlug: recipe.slug,
      recipeTitle: recipe.title,
      amount: ing.amount,
      name: ing.name,
      checked: false,
    }));
    const next = [...existing, ...newItems];
    this.items.set(next);
    this.save(next);
  }

  toggle(id: string): void {
    const next = this.items().map(i => i.id === id ? { ...i, checked: !i.checked } : i);
    this.items.set(next);
    this.save(next);
  }

  removeRecipe(slug: string): void {
    const next = this.items().filter(i => i.recipeSlug !== slug);
    this.items.set(next);
    this.save(next);
  }

  clear(): void {
    this.items.set([]);
    localStorage.removeItem(KEY);
  }

  hasRecipe(slug: string): boolean {
    return this.items().some(i => i.recipeSlug === slug);
  }

  private load(): ShoppingItem[] {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private save(items: ShoppingItem[]): void {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
  }
}
