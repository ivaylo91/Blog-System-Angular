import {
  environment
} from "./chunk-QKG44OY5.js";
import {
  HttpClient,
  HttpParams,
  Injectable,
  inject,
  setClassMetadata,
  shareReplay,
  ɵɵdefineInjectable
} from "./chunk-OGGNHWOY.js";

// src/app/services/recipe.service.ts
var RecipeService = class _RecipeService {
  http = inject(HttpClient);
  categories$ = null;
  getRecipes(params = {}) {
    let httpParams = new HttpParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== void 0 && value !== null && value !== "") {
        httpParams = httpParams.set(key, String(value));
      }
    });
    return this.http.get(`${environment.apiUrl}/recipes`, { params: httpParams });
  }
  getFeaturedRecipes() {
    return this.http.get(`${environment.apiUrl}/recipes/featured`);
  }
  getRecipe(slug) {
    return this.http.get(`${environment.apiUrl}/recipes/${slug}`);
  }
  getRelatedRecipes(slug) {
    return this.http.get(`${environment.apiUrl}/recipes/${slug}/related`);
  }
  getCategories() {
    if (!this.categories$) {
      this.categories$ = this.http.get(`${environment.apiUrl}/recipes/categories`).pipe(shareReplay(1));
    }
    return this.categories$;
  }
  static \u0275fac = function RecipeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecipeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RecipeService, factory: _RecipeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecipeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  RecipeService
};
//# sourceMappingURL=chunk-QBJYTMMZ.js.map
