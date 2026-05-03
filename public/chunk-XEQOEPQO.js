import {
  PerfService
} from "./chunk-3KFQWM6T.js";
import {
  RecipeService
} from "./chunk-QBJYTMMZ.js";
import {
  toSignal
} from "./chunk-ZGNCPTQ3.js";
import {
  SeoService
} from "./chunk-JG6FXFFB.js";
import "./chunk-QKG44OY5.js";
import {
  ChangeDetectionStrategy,
  Component,
  RouterLink,
  catchError,
  computed,
  inject,
  map,
  of,
  setClassMetadata,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-OGGNHWOY.js";

// src/app/pages/home/home.component.ts
var _c0 = () => ({ q: "\u0441\u0443\u043F\u0430" });
var _c1 = () => ({ q: "\u0434\u0435\u0441\u0435\u0440\u0442" });
var _c2 = () => ({ q: "\u043E\u0441\u043D\u043E\u0432\u043D\u043E" });
var _c3 = () => ({ q: "\u0441\u0430\u043B\u0430\u0442\u0430" });
var _c4 = () => ({ q: "\u0437\u0430\u043A\u0443\u0441\u043A\u0430" });
var _c5 = () => ({ q: "\u043F\u0430\u0441\u0442\u0430" });
var _c6 = () => [0, 1, 2, 3];
var _c7 = (a0) => ["/recipes", a0];
var _forTrack0 = ($index, $item) => $item.id;
function HomeComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.featured()[0].hero_image, \u0275\u0275sanitizeUrl)("alt", ctx_r0.featured()[0].title);
  }
}
function HomeComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 17);
  }
}
function HomeComponent_Conditional_37_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 50);
  }
}
function HomeComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_37_For_2_Template, 1, 0, "div", 50, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c6));
  }
}
function HomeComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1, "\u0420\u0435\u0446\u0435\u043F\u0442\u0438\u0442\u0435 \u043D\u0435 \u043C\u043E\u0433\u0430\u0442 \u0434\u0430 \u0441\u0435 \u0437\u0430\u0440\u0435\u0434\u044F\u0442 \u0432 \u043C\u043E\u043C\u0435\u043D\u0442\u0430.");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_39_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 53);
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", r_r2.hero_image, \u0275\u0275sanitizeUrl)("alt", r_r2.title);
  }
}
function HomeComponent_Conditional_39_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 54);
  }
}
function HomeComponent_Conditional_39_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 51)(1, "div", 52);
    \u0275\u0275conditionalCreate(2, HomeComponent_Conditional_39_For_2_Conditional_2_Template, 1, 2, "img", 53)(3, HomeComponent_Conditional_39_For_2_Conditional_3_Template, 1, 0, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 55)(5, "h3", 56);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 57)(8, "div", 58)(9, "span");
    \u0275\u0275text(10, "\u2605");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "\u2605");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "\u2605");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "\u2605");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 59);
    \u0275\u0275text(18, "\u2605");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 60);
    \u0275\u0275text(20, "4.5");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 61);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 62);
    \u0275\u0275element(23, "path", 63);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c7, r_r2.slug));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r2.hero_image ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r2.title);
  }
}
function HomeComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_39_For_2_Template, 24, 5, "a", 51, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.featured().slice(0, 4));
  }
}
var HomeComponent = class _HomeComponent {
  recipeService = inject(RecipeService);
  seo = inject(SeoService);
  perf = inject(PerfService);
  featuredResult = toSignal(this.recipeService.getFeaturedRecipes().pipe(tap(() => {
    this.perf.mark("home_featured_ready");
    this.perf.measure("home_featured_load", "home_start", "home_featured_ready");
  }), map((recipes) => ({ kind: "success", recipes })), catchError(() => of({ kind: "error" }))));
  featured = computed(() => {
    const r = this.featuredResult();
    return r?.kind === "success" ? r.recipes : [];
  }, ...ngDevMode ? [{ debugName: "featured" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = computed(() => this.featuredResult() === void 0, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  errored = computed(() => this.featuredResult()?.kind === "error", ...ngDevMode ? [{ debugName: "errored" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.perf.mark("home_start");
    this.seo.set({
      title: "\u041D\u0430\u0447\u0430\u043B\u043E",
      description: "\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u0438 \u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438, \u0441\u043F\u043E\u0434\u0435\u043B\u0435\u043D\u0438 \u0441 \u043B\u044E\u0431\u043E\u0432. \u041E\u0442\u043A\u0440\u0438\u0439 \u043B\u0435\u0441\u043D\u0438 \u0438 \u0432\u043A\u0443\u0441\u043D\u0438 \u044F\u0441\u0442\u0438\u044F \u0437\u0430 \u0432\u0441\u0435\u043A\u0438 \u043F\u043E\u0432\u043E\u0434 \u0432 \u043A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F \u0431\u043B\u043E\u0433 \u043D\u0430 \u0418\u0432\u043E."
    });
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 98, vars: 14, consts: [[1, "hero"], [1, "hero-inner"], [1, "hero-left"], [1, "hero-eyebrow"], [1, "hero-heading"], [1, "hero-accent"], [1, "hero-sub"], [1, "hero-actions"], ["routerLink", "/recipes", 1, "btn-primary"], ["routerLink", "/recipes", 1, "btn-ghost"], ["aria-hidden", "true", 1, "btn-play"], ["viewBox", "0 0 24 24", "fill", "currentColor"], ["points", "6,3 20,12 6,21"], [1, "hero-right"], ["aria-hidden", "true", 1, "hero-bg-circle"], ["aria-hidden", "true", 1, "hero-ring"], ["fetchpriority", "high", "loading", "eager", 1, "hero-img", 3, "src", "alt"], [1, "hero-img", "hero-img-ph"], [1, "hero-badge"], [1, "badge-star"], [1, "badge-val"], [1, "badge-label"], [1, "popular-sec"], [1, "s-inner"], [1, "s-heading"], [1, "cards-grid"], [1, "grid-error"], [1, "s-cta"], [1, "cat-sec"], [1, "cat-grid"], ["routerLink", "/recipes", 1, "cat-item", 3, "queryParams"], [1, "cat-icon"], ["viewBox", "0 0 32 32", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M6 14h20M8 14c0 5.5 3.5 9 8 9s8-3.5 8-9"], ["d", "M12 10c0-2.2 1.8-4 4-4s4 1.8 4 4"], ["d", "M5 23h22"], ["x", "6", "y", "16", "width", "20", "height", "10", "rx", "2"], ["d", "M6 16c0-5.5 20-5.5 20 0"], ["d", "M16 8v8M12 10l4-4 4 4"], ["cx", "16", "cy", "16", "r", "11"], ["d", "M9 20c2-6 12-6 14 0"], ["cx", "16", "cy", "12", "r", "2.5"], ["d", "M7 22s2-12 9-14c7-2 11 4 11 14"], ["d", "M10 16c2-4 5-5 8-3"], ["d", "M6 22h20"], ["x", "6", "y", "10", "width", "20", "height", "12", "rx", "4"], ["d", "M8 14h16M8 18h16"], ["d", "M5 18c0 0 3 6 11 6s11-6 11-6"], ["d", "M5 18c0-6 4-10 11-10s11 4 11 10"], ["d", "M13 8c0-2 1.3-3.5 3-3.5"], [1, "card-sk"], [1, "recipe-card", 3, "routerLink"], [1, "card-img-wrap"], ["loading", "lazy", 3, "src", "alt"], [1, "card-img-ph"], [1, "card-body"], [1, "card-title"], [1, "card-foot"], ["aria-label", "4.5 \u0437\u0432\u0435\u0437\u0434\u0438", 1, "card-stars"], [1, "star-dim"], [1, "card-score"], ["aria-hidden", "true", 1, "card-btn"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9 18l6-6-6-6"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "\u0414\u043E\u043C\u0430\u0448\u043D\u0430 \u041A\u0443\u0445\u043D\u044F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 4);
      \u0275\u0275text(6, " \u0412\u043A\u0443\u0441\u043D\u0438");
      \u0275\u0275element(7, "br");
      \u0275\u0275text(8, "\u0420\u0435\u0446\u0435\u043F\u0442\u0438 ");
      \u0275\u0275elementStart(9, "span", 5);
      \u0275\u0275text(10, "\u041A\u043E\u043B\u0435\u043A\u0446\u0438\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p", 6);
      \u0275\u0275text(12, "\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u0438 \u044F\u0441\u0442\u0438\u044F, \u043F\u0440\u0438\u0433\u043E\u0442\u0432\u0435\u043D\u0438 \u0441 \u043B\u044E\u0431\u043E\u0432 \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043A\u044A\u043C \u0432\u0441\u0435\u043A\u0438 \u0434\u0435\u0442\u0430\u0439\u043B \u043E\u0442 \u043D\u0430\u0448\u0430\u0442\u0430 \u043A\u0443\u0445\u043D\u044F.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7)(14, "a", 8);
      \u0275\u0275text(15, "\u0420\u0430\u0437\u0433\u043B\u0435\u0434\u0430\u0439 \u0440\u0435\u0446\u0435\u043F\u0442\u0438\u0442\u0435");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 9)(17, "span", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 11);
      \u0275\u0275element(19, "polygon", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(20, " \u041D\u0430\u0443\u0447\u0438 \u043F\u043E\u0432\u0435\u0447\u0435 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "div", 13);
      \u0275\u0275element(22, "div", 14)(23, "div", 15);
      \u0275\u0275conditionalCreate(24, HomeComponent_Conditional_24_Template, 1, 2, "img", 16)(25, HomeComponent_Conditional_25_Template, 1, 0, "div", 17);
      \u0275\u0275elementStart(26, "div", 18)(27, "span", 19);
      \u0275\u0275text(28, "\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 20);
      \u0275\u0275text(30, "4.8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 21);
      \u0275\u0275text(32, "\u041E\u0446\u0435\u043D\u043A\u0430");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(33, "section", 22)(34, "div", 23)(35, "h2", 24);
      \u0275\u0275text(36, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0438 \u0420\u0435\u0446\u0435\u043F\u0442\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(37, HomeComponent_Conditional_37_Template, 3, 1, "div", 25)(38, HomeComponent_Conditional_38_Template, 2, 0, "p", 26)(39, HomeComponent_Conditional_39_Template, 3, 0, "div", 25);
      \u0275\u0275elementStart(40, "div", 27)(41, "a", 8);
      \u0275\u0275text(42, "\u0412\u0441\u0438\u0447\u043A\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "section", 28)(44, "div", 23)(45, "h2", 24);
      \u0275\u0275text(46, "\u0412\u043A\u0443\u0441 \u043D\u0430 \u0445\u0440\u0430\u043D\u0430\u0442\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 29)(48, "a", 30)(49, "div", 31);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(50, "svg", 32);
      \u0275\u0275element(51, "path", 33)(52, "path", 34)(53, "path", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(54, "span");
      \u0275\u0275text(55, "\u0421\u0443\u043F\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "a", 30)(57, "div", 31);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(58, "svg", 32);
      \u0275\u0275element(59, "rect", 36)(60, "path", 37)(61, "path", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(62, "span");
      \u0275\u0275text(63, "\u0414\u0435\u0441\u0435\u0440\u0442\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "a", 30)(65, "div", 31);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(66, "svg", 32);
      \u0275\u0275element(67, "circle", 39)(68, "path", 40)(69, "circle", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(70, "span");
      \u0275\u0275text(71, "\u041E\u0441\u043D\u043E\u0432\u043D\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "a", 30)(73, "div", 31);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(74, "svg", 32);
      \u0275\u0275element(75, "path", 42)(76, "path", 43)(77, "path", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(78, "span");
      \u0275\u0275text(79, "\u0421\u0430\u043B\u0430\u0442\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "a", 30)(81, "div", 31);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(82, "svg", 32);
      \u0275\u0275element(83, "rect", 45)(84, "path", 46);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(85, "span");
      \u0275\u0275text(86, "\u0417\u0430\u043A\u0443\u0441\u043A\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "a", 30)(88, "div", 31);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(89, "svg", 32);
      \u0275\u0275element(90, "path", 47)(91, "path", 48)(92, "path", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(93, "span");
      \u0275\u0275text(94, "\u041F\u0430\u0441\u0442\u0430");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(95, "div", 27)(96, "a", 8);
      \u0275\u0275text(97, "\u0420\u0430\u0437\u0433\u043B\u0435\u0434\u0430\u0439");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(24);
      \u0275\u0275conditional(ctx.featured().length && ctx.featured()[0].hero_image ? 24 : 25);
      \u0275\u0275advance(13);
      \u0275\u0275conditional(ctx.loading() ? 37 : ctx.errored() ? 38 : 39);
      \u0275\u0275advance(11);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(8);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(9, _c1));
      \u0275\u0275advance(8);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(10, _c2));
      \u0275\u0275advance(8);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(11, _c3));
      \u0275\u0275advance(8);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(12, _c4));
      \u0275\u0275advance(7);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(13, _c5));
    }
  }, dependencies: [RouterLink], styles: ['@charset "UTF-8";\n\n\n.s-inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 clamp(1rem, 4vw, 2.5rem);\n}\n.s-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.5rem, 2.8vw, 2rem);\n  font-weight: 800;\n  color: var(--clr-text);\n  margin: 0 0 2.25rem;\n  letter-spacing: -0.025em;\n}\n.s-cta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 2.5rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.8rem 2.1rem;\n  background: var(--clr-brand);\n  color: #fff;\n  border-radius: 9999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  text-decoration: none;\n  transition: background 0.18s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);\n  touch-action: manipulation;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--clr-brand-dark);\n  transform: translateY(-2px);\n}\n.btn-primary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.hero[_ngcontent-%COMP%] {\n  background: #ffe6d5;\n  background: oklch(94% 0.042 55deg);\n  padding: clamp(3.5rem, 7vw, 5.5rem) 0;\n  overflow: hidden;\n}\n.hero-inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 clamp(1rem, 4vw, 2.5rem);\n  display: grid;\n  grid-template-columns: 1.1fr 0.9fr;\n  align-items: center;\n  gap: 3rem;\n}\n.hero-eyebrow[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--clr-brand);\n  margin-bottom: 1rem;\n}\n.hero-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2.6rem, 5.5vw, 4.2rem);\n  font-weight: 800;\n  line-height: 1.04;\n  letter-spacing: -0.03em;\n  color: var(--clr-text);\n  margin: 0 0 1.25rem;\n}\n.hero-accent[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--clr-brand);\n}\n.hero-sub[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--clr-text-muted);\n  line-height: 1.75;\n  margin: 0 0 2rem;\n  max-width: 38ch;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.7rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--clr-text);\n  text-decoration: none;\n  transition: color 0.18s;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  color: var(--clr-brand);\n}\n.btn-play[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  background: #fed0b3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--clr-brand);\n  flex-shrink: 0;\n  transition: background 0.18s, color 0.18s;\n}\n.btn-play[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.6rem;\n  height: 0.6rem;\n  margin-left: 0.1rem;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover   .btn-play[_ngcontent-%COMP%] {\n  background: var(--clr-brand);\n  color: #fff;\n}\n.hero-right[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 360px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hero-bg-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 82%;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background: #fec6aa;\n  z-index: 0;\n}\n.hero-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4%;\n  right: 4%;\n  width: 4.5rem;\n  height: 4.5rem;\n  border-radius: 50%;\n  border: 2px dashed oklch(74% 0.12 40deg);\n  z-index: 3;\n  opacity: 0.65;\n}\n.hero-img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 72%;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  object-fit: cover;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.17);\n}\n.hero-img-ph[_ngcontent-%COMP%] {\n  background: #f2bea3;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 14%;\n  left: 2%;\n  z-index: 4;\n  background: var(--clr-surface);\n  border-radius: 9999px;\n  padding: 0.45rem 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.13);\n}\n.badge-star[_ngcontent-%COMP%] {\n  color: #df9200;\n  color: oklch(72% 0.19 72deg);\n  font-size: 0.85rem;\n}\n.badge-val[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: var(--clr-text);\n}\n.badge-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--clr-text-muted);\n  font-weight: 500;\n}\n.popular-sec[_ngcontent-%COMP%] {\n  padding: clamp(4rem, 7vw, 5.5rem) 0;\n  background: var(--clr-surface);\n}\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.25rem;\n}\n.recipe-card[_ngcontent-%COMP%] {\n  background: var(--clr-surface);\n  border-radius: 1.25rem;\n  overflow: hidden;\n  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.07);\n  text-decoration: none;\n  color: var(--clr-text);\n  transition: transform 0.22s var(--ease-out-expo), box-shadow 0.22s var(--ease-out-expo);\n  display: block;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n.recipe-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);\n}\n.card-img-wrap[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  overflow: hidden;\n  background: var(--clr-skeleton);\n}\n.card-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.42s var(--ease-out-expo);\n}\n.recipe-card[_ngcontent-%COMP%]:hover   .card-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.07);\n}\n.card-img-ph[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: var(--clr-skeleton);\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin: 0 0 0.6rem;\n  line-height: 1.35;\n  color: var(--clr-text);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.card-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.card-stars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1px;\n  font-size: 0.72rem;\n  color: #e19000;\n  color: oklch(72% 0.19 70deg);\n}\n.star-dim[_ngcontent-%COMP%] {\n  color: #c4c4c4;\n}\n.card-score[_ngcontent-%COMP%] {\n  margin-left: 0.3rem;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--clr-text-muted);\n}\n.card-btn[_ngcontent-%COMP%] {\n  width: 2.1rem;\n  height: 2.1rem;\n  border-radius: 50%;\n  background: var(--clr-brand);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  flex-shrink: 0;\n  transition: background 0.18s, transform 0.18s;\n}\n.recipe-card[_ngcontent-%COMP%]:hover   .card-btn[_ngcontent-%COMP%] {\n  background: var(--clr-brand-dark);\n  transform: scale(1.1);\n}\n.card-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.8rem;\n  height: 0.8rem;\n}\n.card-sk[_ngcontent-%COMP%] {\n  border-radius: 1.25rem;\n  aspect-ratio: 0.9;\n  background: var(--clr-skeleton);\n  position: relative;\n  overflow: hidden;\n}\n.card-sk[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: _ngcontent-%COMP%_shimmer 1.5s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n.grid-error[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--clr-text-muted);\n  padding: 3rem;\n}\n.cat-sec[_ngcontent-%COMP%] {\n  padding: clamp(4rem, 7vw, 5.5rem) 0;\n  background: var(--clr-surface-alt);\n}\n.cat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 1rem;\n}\n.cat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 1.35rem 0.75rem;\n  border-radius: 1rem;\n  background: var(--clr-surface);\n  text-decoration: none;\n  color: var(--clr-text);\n  font-size: 0.8rem;\n  font-weight: 600;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  transition:\n    background 0.2s,\n    color 0.2s,\n    transform 0.2s var(--ease-out-expo),\n    box-shadow 0.2s;\n}\n.cat-item[_ngcontent-%COMP%]:hover {\n  background: var(--clr-brand);\n  color: #fff;\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.13);\n}\n.cat-icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  color: var(--clr-brand);\n  transition: color 0.2s;\n}\n.cat-item[_ngcontent-%COMP%]:hover   .cat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.cat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n@media (prefers-color-scheme: dark) {\n  .hero[_ngcontent-%COMP%] {\n    background: #150a04;\n  }\n  .hero-bg-circle[_ngcontent-%COMP%] {\n    background: #261305;\n  }\n  .btn-play[_ngcontent-%COMP%] {\n    background: #2e1a0c;\n  }\n  .hero-badge[_ngcontent-%COMP%] {\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);\n  }\n}\nhtml.dark[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%] {\n  background: #150a04;\n}\nhtml.dark[_ngcontent-%COMP%]   .hero-bg-circle[_ngcontent-%COMP%] {\n  background: #261305;\n}\nhtml.dark[_ngcontent-%COMP%]   .btn-play[_ngcontent-%COMP%] {\n  background: #2e1a0c;\n}\nhtml.dark[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);\n}\n@media (max-width: 1024px) {\n  .cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .cat-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 900px) {\n  .hero-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  .hero-sub[_ngcontent-%COMP%] {\n    max-width: none;\n    margin-inline: auto;\n  }\n  .hero-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .hero-right[_ngcontent-%COMP%] {\n    min-height: 280px;\n    order: -1;\n  }\n}\n@media (max-width: 640px) {\n  .cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 0.75rem;\n  }\n  .cat-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .hero-right[_ngcontent-%COMP%] {\n    min-height: 240px;\n  }\n}\n@media (max-width: 380px) {\n  .hero-heading[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .btn-primary[_ngcontent-%COMP%], \n   .recipe-card[_ngcontent-%COMP%], \n   .cat-item[_ngcontent-%COMP%], \n   .btn-play[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .card-sk[_ngcontent-%COMP%]::after {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550 HERO \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <section class="hero">
      <div class="hero-inner">

        <div class="hero-left">
          <span class="hero-eyebrow">\u0414\u043E\u043C\u0430\u0448\u043D\u0430 \u041A\u0443\u0445\u043D\u044F</span>
          <h1 class="hero-heading">
            \u0412\u043A\u0443\u0441\u043D\u0438<br>\u0420\u0435\u0446\u0435\u043F\u0442\u0438
            <span class="hero-accent">\u041A\u043E\u043B\u0435\u043A\u0446\u0438\u0438</span>
          </h1>
          <p class="hero-sub">\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u0438 \u044F\u0441\u0442\u0438\u044F, \u043F\u0440\u0438\u0433\u043E\u0442\u0432\u0435\u043D\u0438 \u0441 \u043B\u044E\u0431\u043E\u0432 \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043A\u044A\u043C \u0432\u0441\u0435\u043A\u0438 \u0434\u0435\u0442\u0430\u0439\u043B \u043E\u0442 \u043D\u0430\u0448\u0430\u0442\u0430 \u043A\u0443\u0445\u043D\u044F.</p>
          <div class="hero-actions">
            <a routerLink="/recipes" class="btn-primary">\u0420\u0430\u0437\u0433\u043B\u0435\u0434\u0430\u0439 \u0440\u0435\u0446\u0435\u043F\u0442\u0438\u0442\u0435</a>
            <a routerLink="/recipes" class="btn-ghost">
              <span class="btn-play" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6,3 20,12 6,21"/></svg>
              </span>
              \u041D\u0430\u0443\u0447\u0438 \u043F\u043E\u0432\u0435\u0447\u0435
            </a>
          </div>
        </div>

        <div class="hero-right">
          <div class="hero-bg-circle" aria-hidden="true"></div>
          <div class="hero-ring" aria-hidden="true"></div>
          @if (featured().length && featured()[0].hero_image) {
            <img class="hero-img" [src]="featured()[0].hero_image" [alt]="featured()[0].title"
                 fetchpriority="high" loading="eager" />
          } @else {
            <div class="hero-img hero-img-ph"></div>
          }
          <div class="hero-badge">
            <span class="badge-star">\u2605</span>
            <span class="badge-val">4.8</span>
            <span class="badge-label">\u041E\u0446\u0435\u043D\u043A\u0430</span>
          </div>
        </div>

      </div>
    </section>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550 POPULAR RECIPES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <section class="popular-sec">
      <div class="s-inner">
        <h2 class="s-heading">\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0438 \u0420\u0435\u0446\u0435\u043F\u0442\u0438</h2>

        @if (loading()) {
          <div class="cards-grid">
            @for (s of [0,1,2,3]; track s) {
              <div class="card-sk"></div>
            }
          </div>
        } @else if (errored()) {
          <p class="grid-error">\u0420\u0435\u0446\u0435\u043F\u0442\u0438\u0442\u0435 \u043D\u0435 \u043C\u043E\u0433\u0430\u0442 \u0434\u0430 \u0441\u0435 \u0437\u0430\u0440\u0435\u0434\u044F\u0442 \u0432 \u043C\u043E\u043C\u0435\u043D\u0442\u0430.</p>
        } @else {
          <div class="cards-grid">
            @for (r of featured().slice(0, 4); track r.id) {
              <a class="recipe-card" [routerLink]="['/recipes', r.slug]">
                <div class="card-img-wrap">
                  @if (r.hero_image) {
                    <img [src]="r.hero_image" [alt]="r.title" loading="lazy" />
                  } @else {
                    <div class="card-img-ph"></div>
                  }
                </div>
                <div class="card-body">
                  <h3 class="card-title">{{ r.title }}</h3>
                  <div class="card-foot">
                    <div class="card-stars" aria-label="4.5 \u0437\u0432\u0435\u0437\u0434\u0438">
                      <span>\u2605</span><span>\u2605</span><span>\u2605</span><span>\u2605</span><span class="star-dim">\u2605</span>
                      <span class="card-score">4.5</span>
                    </div>
                    <div class="card-btn" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                           stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            }
          </div>
        }

        <div class="s-cta">
          <a routerLink="/recipes" class="btn-primary">\u0412\u0441\u0438\u0447\u043A\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438</a>
        </div>
      </div>
    </section>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550 CATEGORIES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550== -->
    <section class="cat-sec">
      <div class="s-inner">
        <h2 class="s-heading">\u0412\u043A\u0443\u0441 \u043D\u0430 \u0445\u0440\u0430\u043D\u0430\u0442\u0430</h2>

        <div class="cat-grid">

          <a class="cat-item" routerLink="/recipes" [queryParams]="{q:'\u0441\u0443\u043F\u0430'}">
            <div class="cat-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 14h20M8 14c0 5.5 3.5 9 8 9s8-3.5 8-9"/>
                <path d="M12 10c0-2.2 1.8-4 4-4s4 1.8 4 4"/>
                <path d="M5 23h22"/>
              </svg>
            </div>
            <span>\u0421\u0443\u043F\u0438</span>
          </a>

          <a class="cat-item" routerLink="/recipes" [queryParams]="{q:'\u0434\u0435\u0441\u0435\u0440\u0442'}">
            <div class="cat-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round">
                <rect x="6" y="16" width="20" height="10" rx="2"/>
                <path d="M6 16c0-5.5 20-5.5 20 0"/>
                <path d="M16 8v8M12 10l4-4 4 4"/>
              </svg>
            </div>
            <span>\u0414\u0435\u0441\u0435\u0440\u0442\u0438</span>
          </a>

          <a class="cat-item" routerLink="/recipes" [queryParams]="{q:'\u043E\u0441\u043D\u043E\u0432\u043D\u043E'}">
            <div class="cat-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round">
                <circle cx="16" cy="16" r="11"/>
                <path d="M9 20c2-6 12-6 14 0"/>
                <circle cx="16" cy="12" r="2.5"/>
              </svg>
            </div>
            <span>\u041E\u0441\u043D\u043E\u0432\u043D\u0438</span>
          </a>

          <a class="cat-item" routerLink="/recipes" [queryParams]="{q:'\u0441\u0430\u043B\u0430\u0442\u0430'}">
            <div class="cat-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 22s2-12 9-14c7-2 11 4 11 14"/>
                <path d="M10 16c2-4 5-5 8-3"/>
                <path d="M6 22h20"/>
              </svg>
            </div>
            <span>\u0421\u0430\u043B\u0430\u0442\u0438</span>
          </a>

          <a class="cat-item" routerLink="/recipes" [queryParams]="{q:'\u0437\u0430\u043A\u0443\u0441\u043A\u0430'}">
            <div class="cat-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round">
                <rect x="6" y="10" width="20" height="12" rx="4"/>
                <path d="M8 14h16M8 18h16"/>
              </svg>
            </div>
            <span>\u0417\u0430\u043A\u0443\u0441\u043A\u0438</span>
          </a>

          <a class="cat-item" routerLink="/recipes" [queryParams]="{q:'\u043F\u0430\u0441\u0442\u0430'}">
            <div class="cat-icon">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 18c0 0 3 6 11 6s11-6 11-6"/>
                <path d="M5 18c0-6 4-10 11-10s11 4 11 10"/>
                <path d="M13 8c0-2 1.3-3.5 3-3.5"/>
              </svg>
            </div>
            <span>\u041F\u0430\u0441\u0442\u0430</span>
          </a>

        </div>

        <div class="s-cta">
          <a routerLink="/recipes" class="btn-primary">\u0420\u0430\u0437\u0433\u043B\u0435\u0434\u0430\u0439</a>
        </div>
      </div>
    </section>

  `, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;5ab48674c7e0c16eb07917a64fa089cdf03362708bcf2d6c4ff81e7a77e37063;/home/ivaylo-penev/Desktop/Blog-System-Angular/frontend/src/app/pages/home/home.component.ts */\n.s-inner {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 clamp(1rem, 4vw, 2.5rem);\n}\n.s-heading {\n  font-family: var(--font-display);\n  font-size: clamp(1.5rem, 2.8vw, 2rem);\n  font-weight: 800;\n  color: var(--clr-text);\n  margin: 0 0 2.25rem;\n  letter-spacing: -0.025em;\n}\n.s-cta {\n  display: flex;\n  justify-content: center;\n  margin-top: 2.5rem;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.8rem 2.1rem;\n  background: var(--clr-brand);\n  color: #fff;\n  border-radius: 9999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  text-decoration: none;\n  transition: background 0.18s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);\n  touch-action: manipulation;\n}\n.btn-primary:hover {\n  background: var(--clr-brand-dark);\n  transform: translateY(-2px);\n}\n.btn-primary:active {\n  transform: translateY(0);\n}\n.hero {\n  background: #ffe6d5;\n  background: oklch(94% 0.042 55deg);\n  padding: clamp(3.5rem, 7vw, 5.5rem) 0;\n  overflow: hidden;\n}\n.hero-inner {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 clamp(1rem, 4vw, 2.5rem);\n  display: grid;\n  grid-template-columns: 1.1fr 0.9fr;\n  align-items: center;\n  gap: 3rem;\n}\n.hero-eyebrow {\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--clr-brand);\n  margin-bottom: 1rem;\n}\n.hero-heading {\n  font-family: var(--font-display);\n  font-size: clamp(2.6rem, 5.5vw, 4.2rem);\n  font-weight: 800;\n  line-height: 1.04;\n  letter-spacing: -0.03em;\n  color: var(--clr-text);\n  margin: 0 0 1.25rem;\n}\n.hero-accent {\n  display: block;\n  color: var(--clr-brand);\n}\n.hero-sub {\n  font-size: 0.95rem;\n  color: var(--clr-text-muted);\n  line-height: 1.75;\n  margin: 0 0 2rem;\n  max-width: 38ch;\n}\n.hero-actions {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.btn-ghost {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.7rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--clr-text);\n  text-decoration: none;\n  transition: color 0.18s;\n}\n.btn-ghost:hover {\n  color: var(--clr-brand);\n}\n.btn-play {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  background: #fed0b3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--clr-brand);\n  flex-shrink: 0;\n  transition: background 0.18s, color 0.18s;\n}\n.btn-play svg {\n  width: 0.6rem;\n  height: 0.6rem;\n  margin-left: 0.1rem;\n}\n.btn-ghost:hover .btn-play {\n  background: var(--clr-brand);\n  color: #fff;\n}\n.hero-right {\n  position: relative;\n  min-height: 360px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hero-bg-circle {\n  position: absolute;\n  width: 82%;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background: #fec6aa;\n  z-index: 0;\n}\n.hero-ring {\n  position: absolute;\n  top: 4%;\n  right: 4%;\n  width: 4.5rem;\n  height: 4.5rem;\n  border-radius: 50%;\n  border: 2px dashed oklch(74% 0.12 40deg);\n  z-index: 3;\n  opacity: 0.65;\n}\n.hero-img {\n  position: relative;\n  z-index: 2;\n  width: 72%;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  object-fit: cover;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.17);\n}\n.hero-img-ph {\n  background: #f2bea3;\n}\n.hero-badge {\n  position: absolute;\n  bottom: 14%;\n  left: 2%;\n  z-index: 4;\n  background: var(--clr-surface);\n  border-radius: 9999px;\n  padding: 0.45rem 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.13);\n}\n.badge-star {\n  color: #df9200;\n  color: oklch(72% 0.19 72deg);\n  font-size: 0.85rem;\n}\n.badge-val {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: var(--clr-text);\n}\n.badge-label {\n  font-size: 0.72rem;\n  color: var(--clr-text-muted);\n  font-weight: 500;\n}\n.popular-sec {\n  padding: clamp(4rem, 7vw, 5.5rem) 0;\n  background: var(--clr-surface);\n}\n.cards-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.25rem;\n}\n.recipe-card {\n  background: var(--clr-surface);\n  border-radius: 1.25rem;\n  overflow: hidden;\n  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.07);\n  text-decoration: none;\n  color: var(--clr-text);\n  transition: transform 0.22s var(--ease-out-expo), box-shadow 0.22s var(--ease-out-expo);\n  display: block;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n.recipe-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);\n}\n.card-img-wrap {\n  aspect-ratio: 1;\n  overflow: hidden;\n  background: var(--clr-skeleton);\n}\n.card-img-wrap img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.42s var(--ease-out-expo);\n}\n.recipe-card:hover .card-img-wrap img {\n  transform: scale(1.07);\n}\n.card-img-ph {\n  width: 100%;\n  height: 100%;\n  background: var(--clr-skeleton);\n}\n.card-body {\n  padding: 1rem;\n}\n.card-title {\n  font-family: var(--font-display);\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin: 0 0 0.6rem;\n  line-height: 1.35;\n  color: var(--clr-text);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.card-foot {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.card-stars {\n  display: flex;\n  align-items: center;\n  gap: 1px;\n  font-size: 0.72rem;\n  color: #e19000;\n  color: oklch(72% 0.19 70deg);\n}\n.star-dim {\n  color: #c4c4c4;\n}\n.card-score {\n  margin-left: 0.3rem;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--clr-text-muted);\n}\n.card-btn {\n  width: 2.1rem;\n  height: 2.1rem;\n  border-radius: 50%;\n  background: var(--clr-brand);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  flex-shrink: 0;\n  transition: background 0.18s, transform 0.18s;\n}\n.recipe-card:hover .card-btn {\n  background: var(--clr-brand-dark);\n  transform: scale(1.1);\n}\n.card-btn svg {\n  width: 0.8rem;\n  height: 0.8rem;\n}\n.card-sk {\n  border-radius: 1.25rem;\n  aspect-ratio: 0.9;\n  background: var(--clr-skeleton);\n  position: relative;\n  overflow: hidden;\n}\n.card-sk::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: shimmer 1.5s linear infinite;\n}\n@keyframes shimmer {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n.grid-error {\n  text-align: center;\n  color: var(--clr-text-muted);\n  padding: 3rem;\n}\n.cat-sec {\n  padding: clamp(4rem, 7vw, 5.5rem) 0;\n  background: var(--clr-surface-alt);\n}\n.cat-grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 1rem;\n}\n.cat-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 1.35rem 0.75rem;\n  border-radius: 1rem;\n  background: var(--clr-surface);\n  text-decoration: none;\n  color: var(--clr-text);\n  font-size: 0.8rem;\n  font-weight: 600;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  transition:\n    background 0.2s,\n    color 0.2s,\n    transform 0.2s var(--ease-out-expo),\n    box-shadow 0.2s;\n}\n.cat-item:hover {\n  background: var(--clr-brand);\n  color: #fff;\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.13);\n}\n.cat-icon {\n  width: 2.5rem;\n  height: 2.5rem;\n  color: var(--clr-brand);\n  transition: color 0.2s;\n}\n.cat-item:hover .cat-icon {\n  color: #fff;\n}\n.cat-icon svg {\n  width: 100%;\n  height: 100%;\n}\n@media (prefers-color-scheme: dark) {\n  .hero {\n    background: #150a04;\n  }\n  .hero-bg-circle {\n    background: #261305;\n  }\n  .btn-play {\n    background: #2e1a0c;\n  }\n  .hero-badge {\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);\n  }\n}\nhtml.dark .hero {\n  background: #150a04;\n}\nhtml.dark .hero-bg-circle {\n  background: #261305;\n}\nhtml.dark .btn-play {\n  background: #2e1a0c;\n}\nhtml.dark .hero-badge {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);\n}\n@media (max-width: 1024px) {\n  .cards-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .cat-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 900px) {\n  .hero-inner {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  .hero-sub {\n    max-width: none;\n    margin-inline: auto;\n  }\n  .hero-actions {\n    justify-content: center;\n  }\n  .hero-right {\n    min-height: 280px;\n    order: -1;\n  }\n}\n@media (max-width: 640px) {\n  .cards-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 0.75rem;\n  }\n  .cat-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .hero-right {\n    min-height: 240px;\n  }\n}\n@media (max-width: 380px) {\n  .hero-heading {\n    font-size: 2.2rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .btn-primary,\n  .recipe-card,\n  .cat-item,\n  .btn-play {\n    transition: none;\n  }\n  .card-sk::after {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 546 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-XEQOEPQO.js.map
