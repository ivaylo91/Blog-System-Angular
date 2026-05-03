import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-OGGNHWOY.js";

// src/app/services/perf.service.ts
var PerfService = class _PerfService {
  supported = typeof performance !== "undefined" && typeof performance.mark === "function";
  mark(name) {
    if (!this.supported)
      return;
    try {
      performance.mark(name);
    } catch {
    }
  }
  measure(name, startMark, endMark) {
    if (!this.supported)
      return;
    try {
      performance.measure(name, startMark, endMark);
    } catch {
    }
  }
  static \u0275fac = function PerfService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PerfService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PerfService, factory: _PerfService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PerfService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  PerfService
};
//# sourceMappingURL=chunk-3KFQWM6T.js.map
