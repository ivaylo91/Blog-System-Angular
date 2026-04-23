import {
  environment
} from "./chunk-GL5TQRYS.js";
import {
  HttpClient,
  Injectable,
  inject,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-LVOWXKII.js";

// src/app/services/favorite.service.ts
var FavoriteService = class _FavoriteService {
  http = inject(HttpClient);
  _favorites = signal(null, ...ngDevMode ? [{ debugName: "_favorites" }] : (
    /* istanbul ignore next */
    []
  ));
  favorites = this._favorites.asReadonly();
  getFavoriteStatus(slug) {
    return this.http.get(`${environment.apiUrl}/recipes/${slug}/favorite-status`);
  }
  toggleFavorite(slug) {
    return this.http.post(`${environment.apiUrl}/recipes/${slug}/favorite`, {}).pipe(tap(() => this._favorites.set(null)));
  }
  getFavorites() {
    return this.http.get(`${environment.apiUrl}/favorites`).pipe(tap((recipes) => this._favorites.set(recipes)));
  }
  invalidate() {
    this._favorites.set(null);
  }
  static \u0275fac = function FavoriteService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FavoriteService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FavoriteService, factory: _FavoriteService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FavoriteService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  FavoriteService
};
//# sourceMappingURL=chunk-FD7HKJST.js.map
