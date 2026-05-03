import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-OGGNHWOY.js";

// src/app/services/toast.service.ts
var ToastService = class _ToastService {
  toasts = signal([], ...ngDevMode ? [{ debugName: "toasts" }] : (
    /* istanbul ignore next */
    []
  ));
  counter = 0;
  success(message, duration = 3500) {
    this.show(message, "success", duration);
  }
  error(message, duration = 4500) {
    this.show(message, "error", duration);
  }
  info(message, duration = 3500) {
    this.show(message, "info", duration);
  }
  dismiss(id) {
    this.toasts.update((t) => t.filter((x) => x.id !== id));
  }
  show(message, type, duration) {
    const id = ++this.counter;
    this.toasts.update((t) => [...t, { id, message, type }]);
    setTimeout(() => this.dismiss(id), duration);
  }
  static \u0275fac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ToastService
};
//# sourceMappingURL=chunk-CELTP6HV.js.map
