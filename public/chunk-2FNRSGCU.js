import {
  environment
} from "./chunk-QKG44OY5.js";
import {
  HttpClient,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-OGGNHWOY.js";

// src/app/services/comment.service.ts
var CommentService = class _CommentService {
  http = inject(HttpClient);
  comment(slug, body, rating, parentId) {
    return this.http.post(`${environment.apiUrl}/recipes/${slug}/comment`, {
      body,
      rating,
      parent_id: parentId
    });
  }
  rate(slug, rating) {
    return this.http.post(`${environment.apiUrl}/recipes/${slug}/rate`, { rating });
  }
  delete(id) {
    return this.http.delete(`${environment.apiUrl}/comments/${id}`);
  }
  getAdminComments() {
    return this.http.get(`${environment.apiUrl}/admin/comments`);
  }
  bulkDelete(ids) {
    return this.http.post(`${environment.apiUrl}/admin/comments/bulk-delete`, { ids });
  }
  static \u0275fac = function CommentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommentService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CommentService, factory: _CommentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  CommentService
};
//# sourceMappingURL=chunk-2FNRSGCU.js.map
