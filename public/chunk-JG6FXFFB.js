import {
  DOCUMENT,
  Injectable,
  Meta,
  Title,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-OGGNHWOY.js";

// src/app/services/seo.service.ts
var SeoService = class _SeoService {
  meta = inject(Meta);
  title = inject(Title);
  doc = inject(DOCUMENT);
  set(options) {
    const fullTitle = `${options.title} | \u041A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F\u0442 \u0431\u043B\u043E\u0433 \u043D\u0430 \u0418\u0432\u043E`;
    const url = this.doc.location.origin + this.doc.location.pathname;
    const image = options.image ?? "https://cookingblogofivo.eu/og-image.jpg";
    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: "description", content: options.description });
    this.meta.updateTag({ property: "og:title", content: fullTitle });
    this.meta.updateTag({ property: "og:description", content: options.description });
    this.meta.updateTag({ property: "og:image", content: image });
    this.meta.updateTag({ property: "og:url", content: url });
    this.meta.updateTag({ property: "og:type", content: options.type ?? "website" });
    this.meta.updateTag({ name: "twitter:card", content: "summary_large_image" });
    this.meta.updateTag({ name: "twitter:title", content: fullTitle });
    this.meta.updateTag({ name: "twitter:description", content: options.description });
    this.meta.updateTag({ name: "twitter:image", content: image });
    this.setCanonical(url);
  }
  setCanonical(url) {
    const id = "canonical-link";
    let el = this.doc.getElementById(id);
    if (!el) {
      el = this.doc.createElement("link");
      el.id = id;
      el.rel = "canonical";
      this.doc.head.appendChild(el);
    }
    el.href = url;
  }
  setJsonLd(data) {
    const id = "json-ld-schema";
    let el = this.doc.getElementById(id);
    if (!el) {
      el = this.doc.createElement("script");
      el.id = id;
      el.type = "application/ld+json";
      this.doc.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  }
  removeJsonLd() {
    this.doc.getElementById("json-ld-schema")?.remove();
  }
  static \u0275fac = function SeoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SeoService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeoService, factory: _SeoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  SeoService
};
//# sourceMappingURL=chunk-JG6FXFFB.js.map
