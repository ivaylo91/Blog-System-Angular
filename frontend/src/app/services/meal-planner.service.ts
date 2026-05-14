import { Injectable, computed, effect, signal } from '@angular/core';

export interface PlannedMeal {
  recipeSlug: string;
  recipeTitle: string;
  hero_image: string | null;
  totalMinutes: number;
}

export type WeekPlan = { [dayIndex: number]: PlannedMeal[] };

const PREFIX = 'meal_plan_';
const MAX_PER_DAY = 5;

export const BG_DAYS_SHORT  = ['Пон', 'Вт', 'Ср', 'Чет', 'Пет', 'Съб', 'Нед'];
export const BG_DAYS_FULL   = ['Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота', 'Неделя'];
export const BG_MONTHS      = ['ян.', 'февр.', 'март', 'апр.', 'май', 'юни', 'юли', 'авг.', 'септ.', 'окт.', 'ное.', 'дек.'];

@Injectable({ providedIn: 'root' })
export class MealPlannerService {
  weekStart = signal<Date>(this.getMonday(new Date()));

  weekKey  = computed(() => this.toKey(this.weekStart()));
  weekDays = computed<Date[]>(() => {
    const s = this.weekStart();
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(s);
      d.setDate(s.getDate() + i);
      return d;
    });
  });

  weekLabel = computed(() => {
    const days = this.weekDays();
    const from = days[0];
    const to   = days[6];
    const fromStr = `${from.getDate()} ${BG_MONTHS[from.getMonth()]}`;
    const toStr   = to.getMonth() === from.getMonth()
      ? `${to.getDate()}`
      : `${to.getDate()} ${BG_MONTHS[to.getMonth()]}`;
    return `${fromStr} – ${toStr} ${to.getFullYear()}`;
  });

  plan = signal<WeekPlan>({});

  totalPlanned = computed(() =>
    Object.values(this.plan()).reduce((s, meals) => s + meals.length, 0),
  );

  constructor() {
    effect(() => {
      const key = this.weekKey();
      this.plan.set(this.loadPlan(key));
    });
  }

  prevWeek(): void {
    const d = new Date(this.weekStart());
    d.setDate(d.getDate() - 7);
    this.weekStart.set(d);
  }

  nextWeek(): void {
    const d = new Date(this.weekStart());
    d.setDate(d.getDate() + 7);
    this.weekStart.set(d);
  }

  goToCurrentWeek(): void {
    this.weekStart.set(this.getMonday(new Date()));
  }

  isCurrentWeek(): boolean {
    return this.weekKey() === this.toKey(this.getMonday(new Date()));
  }

  addRecipe(dayIndex: number, meal: PlannedMeal): void {
    const plan = { ...this.plan() };
    const day = plan[dayIndex] ?? [];
    if (day.length >= MAX_PER_DAY) return;
    if (day.some(m => m.recipeSlug === meal.recipeSlug)) return;
    plan[dayIndex] = [...day, meal];
    this.plan.set(plan);
    this.save();
  }

  removeRecipe(dayIndex: number, slug: string): void {
    const plan = { ...this.plan() };
    plan[dayIndex] = (plan[dayIndex] ?? []).filter(m => m.recipeSlug !== slug);
    this.plan.set(plan);
    this.save();
  }

  clearDay(dayIndex: number): void {
    const plan = { ...this.plan() };
    plan[dayIndex] = [];
    this.plan.set(plan);
    this.save();
  }

  clearWeek(): void {
    this.plan.set({});
    try { localStorage.removeItem(PREFIX + this.weekKey()); } catch {}
  }

  dayMeals(dayIndex: number): PlannedMeal[] {
    return this.plan()[dayIndex] ?? [];
  }

  private save(): void {
    const plan = this.plan();
    const key = PREFIX + this.weekKey();
    const hasAny = Object.values(plan).some(d => d.length > 0);
    try {
      if (hasAny) { localStorage.setItem(key, JSON.stringify(plan)); }
      else { localStorage.removeItem(key); }
    } catch {}
  }

  private loadPlan(key: string): WeekPlan {
    try {
      const raw = localStorage.getItem(PREFIX + key);
      return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
  }

  private getMonday(date: Date): Date {
    const d = new Date(date);
    const day = d.getDay();
    d.setDate(d.getDate() - (day === 0 ? 6 : day - 1));
    d.setHours(0, 0, 0, 0);
    return d;
  }

  private toKey(date: Date): string {
    return date.toISOString().slice(0, 10);
  }
}
