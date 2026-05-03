import {
  environment
} from "./chunk-QKG44OY5.js";
import {
  HttpClient,
  Injectable,
  inject,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-OGGNHWOY.js";

// src/app/services/dashboard.service.ts
var DashboardService = class _DashboardService {
  http = inject(HttpClient);
  _stats = signal(null, ...ngDevMode ? [{ debugName: "_stats" }] : (
    /* istanbul ignore next */
    []
  ));
  stats = this._stats.asReadonly();
  getStats() {
    return this.http.get(`${environment.apiUrl}/dashboard/stats`).pipe(tap((s) => this._stats.set(s)));
  }
  getRecipes() {
    return this.http.get(`${environment.apiUrl}/dashboard/recipes`);
  }
  createRecipe(data) {
    return this.http.post(`${environment.apiUrl}/dashboard/recipes`, data);
  }
  updateRecipe(slug, data) {
    data.append("_method", "PUT");
    return this.http.post(`${environment.apiUrl}/dashboard/recipes/${slug}`, data);
  }
  deleteRecipe(slug) {
    return this.http.delete(`${environment.apiUrl}/dashboard/recipes/${slug}`);
  }
  togglePublish(slug, published) {
    const fd = new FormData();
    fd.append("_method", "PUT");
    fd.append("published", published ? "1" : "0");
    return this.http.post(`${environment.apiUrl}/dashboard/recipes/${slug}`, fd);
  }
  invalidateStats() {
    this._stats.set(null);
  }
  static \u0275fac = function DashboardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardService, factory: _DashboardService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  DashboardService
};
//# sourceMappingURL=chunk-AFHZHI6J.js.map
