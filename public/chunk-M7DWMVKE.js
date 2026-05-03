import {
  DashboardService
} from "./chunk-AFHZHI6J.js";
import {
  toSignal
} from "./chunk-ZGNCPTQ3.js";
import {
  AuthService
} from "./chunk-3GAFCRXR.js";
import {
  SeoService
} from "./chunk-JG6FXFFB.js";
import "./chunk-QKG44OY5.js";
import {
  ChangeDetectionStrategy,
  Component,
  RouterLink,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OGGNHWOY.js";

// src/app/pages/dashboard/dashboard.component.ts
var _c0 = (a0) => ["/recipes", a0];
var _c1 = (a0) => ["/dashboard/recipes", a0, "edit"];
var _forTrack0 = ($index, $item) => $item.id;
function DashboardComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 36);
    \u0275\u0275element(2, "path", 37)(3, "polyline", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u041D\u044F\u043C\u0430\u0448 \u0440\u0435\u0446\u0435\u043F\u0442\u0438 \u0432\u0441\u0435 \u043E\u0449\u0435.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 39);
    \u0275\u0275text(7, "\u0421\u044A\u0437\u0434\u0430\u0439 \u043F\u044A\u0440\u0432\u0430\u0442\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430 \u2192");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_53_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 42);
  }
  if (rf & 2) {
    const r_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", r_r1.hero_image, \u0275\u0275sanitizeUrl)("alt", r_r1.title);
  }
}
function DashboardComponent_Conditional_53_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 54);
    \u0275\u0275element(2, "path", 37)(3, "polyline", 38);
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_53_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r1.category.name);
  }
}
function DashboardComponent_Conditional_53_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r1.excerpt);
  }
}
function DashboardComponent_Conditional_53_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275conditionalCreate(2, DashboardComponent_Conditional_53_For_2_Conditional_2_Template, 1, 2, "img", 42)(3, DashboardComponent_Conditional_53_For_2_Conditional_3_Template, 4, 0, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 44)(5, "a", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, DashboardComponent_Conditional_53_For_2_Conditional_7_Template, 2, 1, "span", 46);
    \u0275\u0275conditionalCreate(8, DashboardComponent_Conditional_53_For_2_Conditional_8_Template, 2, 1, "p", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 48)(10, "span", 49);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 51);
    \u0275\u0275element(14, "path", 52)(15, "path", 53);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r1.hero_image ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, r_r1.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r1.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r1.category ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r1.excerpt ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("published", r_r1.published)("draft", !r_r1.published);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r1.published ? "\u041F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D\u0430" : "\u0427\u0435\u0440\u043D\u043E\u0432\u0430", " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c1, r_r1.slug));
    \u0275\u0275attribute("aria-label", "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0430\u0439 " + r_r1.title);
  }
}
function DashboardComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_53_For_2_Template, 16, 16, "div", 40, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.recentRecipes());
  }
}
function DashboardComponent_Conditional_54_For_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2605 ", c_r3.rating);
  }
}
function DashboardComponent_Conditional_54_For_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, c_r3.recipe.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r3.recipe.title, " ");
  }
}
function DashboardComponent_Conditional_54_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 59)(4, "div", 60)(5, "span", 61);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, DashboardComponent_Conditional_54_For_8_Conditional_7_Template, 2, 1, "span", 62);
    \u0275\u0275elementStart(8, "span", 63);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 64);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, DashboardComponent_Conditional_54_For_8_Conditional_12_Template, 2, 4, "a", 65);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((c_r3.author == null ? null : c_r3.author.name == null ? null : c_r3.author.name.charAt(0)) || "?");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((c_r3.author == null ? null : c_r3.author.name) || "\u0410\u043D\u043E\u043D\u0438\u043C\u0435\u043D");
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r3.rating ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(c_r3.created_at));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.body);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r3.recipe ? 12 : -1);
  }
}
function DashboardComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 30)(2, "h2", 31);
    \u0275\u0275text(3, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 55);
    \u0275\u0275text(5, "\u0412\u0438\u0436 \u0432\u0441\u0438\u0447\u043A\u0438 \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 56);
    \u0275\u0275repeaterCreate(7, DashboardComponent_Conditional_54_For_8_Template, 13, 6, "div", 57, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.stats().recentComments);
  }
}
var DashboardComponent = class _DashboardComponent {
  dashboardService = inject(DashboardService);
  auth = inject(AuthService);
  seo = inject(SeoService);
  stats = toSignal(this.dashboardService.getStats());
  recipes = toSignal(this.dashboardService.getRecipes(), { initialValue: [] });
  firstName = computed(() => {
    const name = this.auth.user()?.name || "";
    return name.split(" ")[0] || "Chef";
  }, ...ngDevMode ? [{ debugName: "firstName" }] : (
    /* istanbul ignore next */
    []
  ));
  recentRecipes = computed(() => this.recipes().slice(0, 5), ...ngDevMode ? [{ debugName: "recentRecipes" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.seo.set({
      title: "\u0422\u0430\u0431\u043B\u043E",
      description: "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0432\u0430\u0439 \u0440\u0435\u0446\u0435\u043F\u0442\u0438\u0442\u0435, \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0442\u0435 \u0438 \u043B\u044E\u0431\u0438\u043C\u0438\u0442\u0435 \u0441\u0438 \u0432 \u0442\u0430\u0431\u043B\u043E\u0442\u043E \u043D\u0430 \u043A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F \u0431\u043B\u043E\u0433."
    });
  }
  formatDate(date) {
    if (!date)
      return "";
    return new Date(date).toLocaleDateString("bg-BG", { day: "numeric", month: "short" });
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 55, vars: 7, consts: [[1, "dashboard-page"], [1, "welcome-banner"], [1, "welcome-text"], [1, "welcome-heading"], [1, "welcome-sub"], ["routerLink", "/dashboard/recipes/new", 1, "welcome-cta"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "aria-hidden", "true"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["aria-hidden", "true", 1, "welcome-art"], ["viewBox", "0 0 120 120", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "60", "cy", "80", "rx", "38", "ry", "14", "fill", "oklch(82% 0.10 58)"], ["d", "M22 80 Q22 106 60 106 Q98 106 98 80", "fill", "oklch(74% 0.13 55)"], ["cx", "60", "cy", "74", "rx", "38", "ry", "10", "fill", "oklch(86% 0.09 60)"], ["d", "M22 74 Q12 74 12 66 Q12 58 22 62", "stroke", "oklch(68% 0.12 52)", "stroke-width", "4", "stroke-linecap", "round", "fill", "none"], ["d", "M98 74 Q108 74 108 66 Q108 58 98 62", "stroke", "oklch(68% 0.12 52)", "stroke-width", "4", "stroke-linecap", "round", "fill", "none"], ["d", "M44 58 Q40 50 44 42 Q48 34 44 26", "stroke", "oklch(68% 0.09 65)", "stroke-width", "2.5", "stroke-linecap", "round", "fill", "none", "opacity", "0.7"], ["d", "M60 55 Q56 47 60 39 Q64 31 60 23", "stroke", "oklch(68% 0.09 65)", "stroke-width", "2.5", "stroke-linecap", "round", "fill", "none", "opacity", "0.7"], ["d", "M76 58 Q72 50 76 42 Q80 34 76 26", "stroke", "oklch(68% 0.09 65)", "stroke-width", "2.5", "stroke-linecap", "round", "fill", "none", "opacity", "0.7"], ["cx", "60", "cy", "68", "rx", "34", "ry", "9", "fill", "oklch(80% 0.12 60)"], ["cx", "60", "cy", "67", "rx", "34", "ry", "7", "fill", "oklch(84% 0.10 62)"], ["cx", "60", "cy", "62", "rx", "10", "ry", "4", "fill", "oklch(74% 0.12 58)"], [1, "tiles-row"], [1, "tile", "tile-amber"], [1, "tile-num"], [1, "tile-label"], [1, "tile", "tile-orange"], [1, "tile", "tile-rose"], [1, "tile", "tile-lavender"], [1, "section"], [1, "section-head"], [1, "section-title"], ["routerLink", "/dashboard/recipes", 1, "view-all"], [1, "empty-state"], [1, "recipe-list"], [1, "section", "section-comments"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["routerLink", "/dashboard/recipes/new", 1, "empty-cta"], [1, "recipe-row"], [1, "recipe-thumb"], ["loading", "lazy", 3, "src", "alt"], ["aria-hidden", "true", 1, "thumb-placeholder"], [1, "recipe-info"], [1, "recipe-title-link", 3, "routerLink"], [1, "recipe-cat"], [1, "recipe-excerpt"], [1, "recipe-actions"], [1, "status-badge"], [1, "edit-btn", 3, "routerLink"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["routerLink", "/dashboard/comments", 1, "view-all"], [1, "comment-list"], [1, "comment-row"], [1, "comment-avatar"], [1, "comment-body-wrap"], [1, "comment-meta-row"], [1, "comment-author"], [1, "comment-rating"], [1, "comment-date"], [1, "comment-body"], [1, "comment-recipe-link", 3, "routerLink"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "\u0414\u043E\u0431\u0440\u0435 \u0434\u043E\u0448\u044A\u043B \u0432 \u0442\u0430\u0431\u043B\u043E\u0442\u043E. \u0421\u043B\u0435\u0434\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438\u0442\u0435 \u0438 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0442\u0430 \u043D\u0430 \u0431\u043B\u043E\u0433\u0430.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 6);
      \u0275\u0275element(9, "line", 7)(10, "line", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " \u041D\u043E\u0432\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 10);
      \u0275\u0275element(14, "ellipse", 11)(15, "path", 12)(16, "ellipse", 13)(17, "path", 14)(18, "path", 15)(19, "path", 16)(20, "path", 17)(21, "path", 18)(22, "ellipse", 19)(23, "ellipse", 20)(24, "ellipse", 21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(25, "div", 22)(26, "div", 23)(27, "span", 24);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 25);
      \u0275\u0275text(30, "\u041F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 26)(32, "span", 24);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 25);
      \u0275\u0275text(35, "\u0427\u0435\u0440\u043D\u043E\u0432\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 27)(37, "span", 24);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 25);
      \u0275\u0275text(40, "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 28)(42, "span", 24);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span", 25);
      \u0275\u0275text(45, "\u0417\u0430\u043F\u0430\u0437\u0432\u0430\u043D\u0438\u044F");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 29)(47, "div", 30)(48, "h2", 31);
      \u0275\u0275text(49, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "a", 32);
      \u0275\u0275text(51, "\u0412\u0438\u0436 \u0432\u0441\u0438\u0447\u043A\u0438 \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(52, DashboardComponent_Conditional_52_Template, 8, 0, "div", 33)(53, DashboardComponent_Conditional_53_Template, 3, 0, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(54, DashboardComponent_Conditional_54_Template, 9, 0, "div", 35);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_6_0;
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("\u0417\u0434\u0440\u0430\u0432\u0435\u0439, ", ctx.firstName(), "!");
      \u0275\u0275advance(24);
      \u0275\u0275textInterpolate(((tmp_1_0 = ctx.stats()) == null ? null : tmp_1_0.publishedRecipes) ?? "\u2014");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(((tmp_2_0 = ctx.stats()) == null ? null : tmp_2_0.draftRecipes) ?? "\u2014");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(((tmp_3_0 = ctx.stats()) == null ? null : tmp_3_0.totalComments) ?? "\u2014");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(((tmp_4_0 = ctx.stats()) == null ? null : tmp_4_0.totalFavorites) ?? "\u2014");
      \u0275\u0275advance(9);
      \u0275\u0275conditional(!ctx.recentRecipes().length ? 52 : 53);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_6_0 = ctx.stats()) == null ? null : tmp_6_0.recentComments == null ? null : tmp_6_0.recentComments.length) ? 54 : -1);
    }
  }, dependencies: [RouterLink], styles: ['@charset "UTF-8";\n\n\n.dashboard-page[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: var(--space-7) var(--space-7) var(--space-10);\n}\n.welcome-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #fff3e6;\n  background: oklch(97% 0.04 70deg);\n  border-radius: var(--radius-xl);\n  padding: var(--space-7) var(--space-8);\n  margin-bottom: var(--space-7);\n  overflow: hidden;\n  gap: var(--space-6);\n}\n.welcome-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.welcome-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.6rem, 3vw, 2.2rem);\n  font-weight: 800;\n  color: #3a1a04;\n  margin: 0 0 var(--space-2);\n  letter-spacing: -0.03em;\n  line-height: 1.1;\n}\n.welcome-sub[_ngcontent-%COMP%] {\n  color: #684b38;\n  font-size: 0.9rem;\n  margin: 0 0 var(--space-5);\n  max-width: 42ch;\n  line-height: 1.6;\n}\n.welcome-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-3) var(--space-5);\n  background: var(--clr-brand);\n  color: #ffffff;\n  border-radius: var(--radius-pill);\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 0.875rem;\n  letter-spacing: 0.01em;\n  box-shadow: 0 4px 14px #dd53004d;\n  box-shadow: 0 4px 14px oklch(62% 0.22 42deg / 0.3);\n  transition:\n    background 0.18s,\n    transform 0.15s,\n    box-shadow 0.18s;\n  touch-action: manipulation;\n}\n.welcome-cta[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.85rem;\n  height: 0.85rem;\n  flex-shrink: 0;\n}\n.welcome-cta[_ngcontent-%COMP%]:hover {\n  background: var(--clr-brand-dark);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px #dd530061;\n  box-shadow: 0 6px 18px oklch(62% 0.22 42deg / 0.38);\n}\n.welcome-cta[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: none;\n}\n.welcome-art[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 110px;\n  height: 110px;\n}\n.welcome-art[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.tiles-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: var(--space-4);\n  margin-bottom: var(--space-7);\n}\n.tile[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n  padding: var(--space-5) var(--space-5);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.tile[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.tile-num[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 2.6rem;\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: -0.04em;\n}\n.tile-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  opacity: 0.72;\n}\n.tile-amber[_ngcontent-%COMP%] {\n  background: #ffefda;\n  background: oklch(96% 0.05 76deg);\n  color: #5a3700;\n  color: oklch(37% 0.14 70deg);\n}\n.tile-orange[_ngcontent-%COMP%] {\n  background: #fff2eb;\n  background: oklch(97% 0.05 50deg);\n  color: #8b3100;\n  color: oklch(44% 0.2 42deg);\n}\n.tile-rose[_ngcontent-%COMP%] {\n  background: #fff0f1;\n  background: oklch(97% 0.025 16deg);\n  color: #890024;\n  color: oklch(40% 0.17 18deg);\n}\n.tile-lavender[_ngcontent-%COMP%] {\n  background: #f2f0ff;\n  background: oklch(96% 0.022 292deg);\n  color: #4b2e96;\n}\n@media (prefers-color-scheme: dark) {\n  .tile-amber[_ngcontent-%COMP%] {\n    background: #281600;\n    background: oklch(22% 0.05 72deg);\n    color: #ecb260;\n  }\n  .tile-orange[_ngcontent-%COMP%] {\n    background: #270e02;\n    color: #fd9c5d;\n  }\n  .tile-rose[_ngcontent-%COMP%] {\n    background: #250e0f;\n    color: #fb9797;\n  }\n  .tile-lavender[_ngcontent-%COMP%] {\n    background: #161325;\n    color: #b4adf4;\n  }\n  .welcome-banner[_ngcontent-%COMP%] {\n    background: #1b0f04;\n  }\n  .welcome-heading[_ngcontent-%COMP%] {\n    color: #f6e1c9;\n  }\n  .welcome-sub[_ngcontent-%COMP%] {\n    color: #ab937f;\n  }\n}\nhtml.dark[_ngcontent-%COMP%]   .tile-amber[_ngcontent-%COMP%] {\n  background: #281600;\n  background: oklch(22% 0.05 72deg);\n  color: #ecb260;\n}\nhtml.dark[_ngcontent-%COMP%]   .tile-orange[_ngcontent-%COMP%] {\n  background: #270e02;\n  color: #fd9c5d;\n}\nhtml.dark[_ngcontent-%COMP%]   .tile-rose[_ngcontent-%COMP%] {\n  background: #250e0f;\n  color: #fb9797;\n}\nhtml.dark[_ngcontent-%COMP%]   .tile-lavender[_ngcontent-%COMP%] {\n  background: #161325;\n  color: #b4adf4;\n}\nhtml.dark[_ngcontent-%COMP%]   .welcome-banner[_ngcontent-%COMP%] {\n  background: #1b0f04;\n}\nhtml.dark[_ngcontent-%COMP%]   .welcome-heading[_ngcontent-%COMP%] {\n  color: #f6e1c9;\n}\nhtml.dark[_ngcontent-%COMP%]   .welcome-sub[_ngcontent-%COMP%] {\n  color: #ab937f;\n}\n.section[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-7);\n}\n.section-comments[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n}\n.section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--space-4);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--clr-text);\n  margin: 0;\n  letter-spacing: -0.015em;\n}\n.view-all[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--clr-brand);\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.view-all[_ngcontent-%COMP%]:hover {\n  color: var(--clr-brand-dark);\n  text-decoration: underline;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-10) var(--space-4);\n  color: var(--clr-text-faint);\n  text-align: center;\n  background: var(--clr-surface);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--clr-border-faint);\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.empty-cta[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--clr-brand);\n  text-decoration: none;\n  margin-top: var(--space-1);\n}\n.empty-cta[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.recipe-list[_ngcontent-%COMP%] {\n  background: var(--clr-surface);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--clr-border-faint);\n  overflow: hidden;\n}\n.recipe-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  padding: var(--space-4) var(--space-5);\n  border-bottom: 1px solid var(--clr-border-faint);\n  transition: background 0.15s;\n}\n.recipe-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.recipe-row[_ngcontent-%COMP%]:hover {\n  background: var(--clr-surface-alt);\n}\n.recipe-thumb[_ngcontent-%COMP%] {\n  width: 3.25rem;\n  height: 3.25rem;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  flex-shrink: 0;\n  background: var(--clr-surface-alt);\n}\n.recipe-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.thumb-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--clr-text-faint);\n}\n.thumb-placeholder[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.recipe-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.recipe-title-link[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: var(--clr-text);\n  text-decoration: none;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  transition: color 0.15s;\n}\n.recipe-title-link[_ngcontent-%COMP%]:hover {\n  color: var(--clr-brand);\n}\n.recipe-cat[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--clr-brand);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.recipe-excerpt[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--clr-text-muted);\n  margin: 0;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n.recipe-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  flex-shrink: 0;\n}\n.status-badge[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding: 0.28rem 0.65rem;\n  border-radius: var(--radius-pill);\n  white-space: nowrap;\n}\n.status-badge.published[_ngcontent-%COMP%] {\n  background: #daf3dc;\n  color: #003f14;\n  color: oklch(32% 0.12 148deg);\n}\n.status-badge.draft[_ngcontent-%COMP%] {\n  background: #f8eddc;\n  color: #7c5518;\n}\n@media (prefers-color-scheme: dark) {\n  .status-badge.published[_ngcontent-%COMP%] {\n    background: #002809;\n    color: #7ebc87;\n  }\n  .status-badge.draft[_ngcontent-%COMP%] {\n    background: #2b1800;\n    color: #c69c63;\n  }\n}\nhtml.dark[_ngcontent-%COMP%]   .status-badge.published[_ngcontent-%COMP%] {\n  background: #002809;\n  color: #7ebc87;\n}\nhtml.dark[_ngcontent-%COMP%]   .status-badge.draft[_ngcontent-%COMP%] {\n  background: #2b1800;\n  color: #c69c63;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: var(--radius-sm);\n  color: var(--clr-text-muted);\n  text-decoration: none;\n  transition: background 0.15s, color 0.15s;\n}\n.edit-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n.edit-btn[_ngcontent-%COMP%]:hover {\n  background: color-mix(in oklch, var(--clr-brand) 10%, transparent);\n  color: var(--clr-brand);\n}\n.comment-list[_ngcontent-%COMP%] {\n  background: var(--clr-surface);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--clr-border-faint);\n  overflow: hidden;\n}\n.comment-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n  padding: var(--space-4) var(--space-5);\n  border-bottom: 1px solid var(--clr-border-faint);\n}\n.comment-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.comment-avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: var(--radius-circle);\n  background: var(--clr-brand);\n  color: #ffffff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.comment-body-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.comment-meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-bottom: 0.25rem;\n}\n.comment-author[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.82rem;\n  color: var(--clr-text);\n}\n.comment-rating[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #a56d00;\n  color: oklch(58% 0.14 74deg);\n  font-weight: 700;\n}\n.comment-date[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--clr-text-muted);\n  margin-left: auto;\n}\n.comment-body[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: var(--clr-text-muted);\n  margin: 0 0 var(--space-1);\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.comment-recipe-link[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--clr-brand);\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.comment-recipe-link[_ngcontent-%COMP%]:hover {\n  color: var(--clr-brand-dark);\n  text-decoration: underline;\n}\n@media (max-width: 900px) {\n  .tiles-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .dashboard-page[_ngcontent-%COMP%] {\n    padding: var(--space-5) var(--space-4) var(--space-9);\n  }\n  .welcome-banner[_ngcontent-%COMP%] {\n    padding: var(--space-6) var(--space-5);\n    gap: var(--space-4);\n  }\n  .welcome-art[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .welcome-heading[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .tiles-row[_ngcontent-%COMP%] {\n    gap: var(--space-3);\n  }\n  .tile[_ngcontent-%COMP%] {\n    padding: var(--space-4) var(--space-4);\n  }\n  .tile-num[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .recipe-row[_ngcontent-%COMP%] {\n    gap: var(--space-3);\n    padding: var(--space-3) var(--space-4);\n  }\n  .status-badge[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .tile[_ngcontent-%COMP%], \n   .welcome-cta[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [RouterLink], template: `
    <div class="dashboard-page">

      <!-- Welcome banner -->
      <div class="welcome-banner">
        <div class="welcome-text">
          <h1 class="welcome-heading">\u0417\u0434\u0440\u0430\u0432\u0435\u0439, {{ firstName() }}!</h1>
          <p class="welcome-sub">\u0414\u043E\u0431\u0440\u0435 \u0434\u043E\u0448\u044A\u043B \u0432 \u0442\u0430\u0431\u043B\u043E\u0442\u043E. \u0421\u043B\u0435\u0434\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438\u0442\u0435 \u0438 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0442\u0430 \u043D\u0430 \u0431\u043B\u043E\u0433\u0430.</p>
          <a routerLink="/dashboard/recipes/new" class="welcome-cta">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            \u041D\u043E\u0432\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430
          </a>
        </div>
        <div class="welcome-art" aria-hidden="true">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Pot body -->
            <ellipse cx="60" cy="80" rx="38" ry="14" fill="oklch(82% 0.10 58)"/>
            <path d="M22 80 Q22 106 60 106 Q98 106 98 80" fill="oklch(74% 0.13 55)"/>
            <!-- Pot rim -->
            <ellipse cx="60" cy="74" rx="38" ry="10" fill="oklch(86% 0.09 60)"/>
            <!-- Handles -->
            <path d="M22 74 Q12 74 12 66 Q12 58 22 62" stroke="oklch(68% 0.12 52)" stroke-width="4" stroke-linecap="round" fill="none"/>
            <path d="M98 74 Q108 74 108 66 Q108 58 98 62" stroke="oklch(68% 0.12 52)" stroke-width="4" stroke-linecap="round" fill="none"/>
            <!-- Steam lines -->
            <path d="M44 58 Q40 50 44 42 Q48 34 44 26" stroke="oklch(68% 0.09 65)" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.7"/>
            <path d="M60 55 Q56 47 60 39 Q64 31 60 23" stroke="oklch(68% 0.09 65)" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.7"/>
            <path d="M76 58 Q72 50 76 42 Q80 34 76 26" stroke="oklch(68% 0.09 65)" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.7"/>
            <!-- Lid -->
            <ellipse cx="60" cy="68" rx="34" ry="9" fill="oklch(80% 0.12 60)"/>
            <ellipse cx="60" cy="67" rx="34" ry="7" fill="oklch(84% 0.10 62)"/>
            <ellipse cx="60" cy="62" rx="10" ry="4" fill="oklch(74% 0.12 58)"/>
          </svg>
        </div>
      </div>

      <!-- Stat tiles -->
      <div class="tiles-row">
        <div class="tile tile-amber">
          <span class="tile-num">{{ stats()?.publishedRecipes ?? '\u2014' }}</span>
          <span class="tile-label">\u041F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D\u0438</span>
        </div>
        <div class="tile tile-orange">
          <span class="tile-num">{{ stats()?.draftRecipes ?? '\u2014' }}</span>
          <span class="tile-label">\u0427\u0435\u0440\u043D\u043E\u0432\u0438</span>
        </div>
        <div class="tile tile-rose">
          <span class="tile-num">{{ stats()?.totalComments ?? '\u2014' }}</span>
          <span class="tile-label">\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438</span>
        </div>
        <div class="tile tile-lavender">
          <span class="tile-num">{{ stats()?.totalFavorites ?? '\u2014' }}</span>
          <span class="tile-label">\u0417\u0430\u043F\u0430\u0437\u0432\u0430\u043D\u0438\u044F</span>
        </div>
      </div>

      <!-- Recent recipes -->
      <div class="section">
        <div class="section-head">
          <h2 class="section-title">\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438</h2>
          <a routerLink="/dashboard/recipes" class="view-all">\u0412\u0438\u0436 \u0432\u0441\u0438\u0447\u043A\u0438 \u2192</a>
        </div>

        @if (!recentRecipes().length) {
          <div class="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            <span>\u041D\u044F\u043C\u0430\u0448 \u0440\u0435\u0446\u0435\u043F\u0442\u0438 \u0432\u0441\u0435 \u043E\u0449\u0435.</span>
            <a routerLink="/dashboard/recipes/new" class="empty-cta">\u0421\u044A\u0437\u0434\u0430\u0439 \u043F\u044A\u0440\u0432\u0430\u0442\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430 \u2192</a>
          </div>
        } @else {
          <div class="recipe-list">
            @for (r of recentRecipes(); track r.id) {
              <div class="recipe-row">
                <div class="recipe-thumb">
                  @if (r.hero_image) {
                    <img [src]="r.hero_image" [alt]="r.title" loading="lazy" />
                  } @else {
                    <div class="thumb-placeholder" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                      </svg>
                    </div>
                  }
                </div>
                <div class="recipe-info">
                  <a [routerLink]="['/recipes', r.slug]" class="recipe-title-link">{{ r.title }}</a>
                  @if (r.category) {
                    <span class="recipe-cat">{{ r.category.name }}</span>
                  }
                  @if (r.excerpt) {
                    <p class="recipe-excerpt">{{ r.excerpt }}</p>
                  }
                </div>
                <div class="recipe-actions">
                  <span class="status-badge" [class.published]="r.published" [class.draft]="!r.published">
                    {{ r.published ? '\u041F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D\u0430' : '\u0427\u0435\u0440\u043D\u043E\u0432\u0430' }}
                  </span>
                  <a [routerLink]="['/dashboard/recipes', r.slug, 'edit']"
                     class="edit-btn"
                     [attr.aria-label]="'\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0430\u0439 ' + r.title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                  </a>
                </div>
              </div>
            }
          </div>
        }
      </div>

      <!-- Recent comments -->
      @if (stats()?.recentComments?.length) {
        <div class="section section-comments">
          <div class="section-head">
            <h2 class="section-title">\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438</h2>
            <a routerLink="/dashboard/comments" class="view-all">\u0412\u0438\u0436 \u0432\u0441\u0438\u0447\u043A\u0438 \u2192</a>
          </div>
          <div class="comment-list">
            @for (c of stats()!.recentComments; track c.id) {
              <div class="comment-row">
                <div class="comment-avatar">{{ c.author?.name?.charAt(0) || '?' }}</div>
                <div class="comment-body-wrap">
                  <div class="comment-meta-row">
                    <span class="comment-author">{{ c.author?.name || '\u0410\u043D\u043E\u043D\u0438\u043C\u0435\u043D' }}</span>
                    @if (c.rating) {
                      <span class="comment-rating">\u2605 {{ c.rating }}</span>
                    }
                    <span class="comment-date">{{ formatDate(c.created_at) }}</span>
                  </div>
                  <p class="comment-body">{{ c.body }}</p>
                  @if (c.recipe) {
                    <a [routerLink]="['/recipes', c.recipe.slug]" class="comment-recipe-link">
                      {{ c.recipe.title }}
                    </a>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      }

    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;df09ca12edde9f65733684fb3dad05d675068f2bcb39b636f8c69c81ff2b50c6;/home/ivaylo-penev/Desktop/Blog-System-Angular/frontend/src/app/pages/dashboard/dashboard.component.ts */\n.dashboard-page {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: var(--space-7) var(--space-7) var(--space-10);\n}\n.welcome-banner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #fff3e6;\n  background: oklch(97% 0.04 70deg);\n  border-radius: var(--radius-xl);\n  padding: var(--space-7) var(--space-8);\n  margin-bottom: var(--space-7);\n  overflow: hidden;\n  gap: var(--space-6);\n}\n.welcome-text {\n  flex: 1;\n  min-width: 0;\n}\n.welcome-heading {\n  font-family: var(--font-display);\n  font-size: clamp(1.6rem, 3vw, 2.2rem);\n  font-weight: 800;\n  color: #3a1a04;\n  margin: 0 0 var(--space-2);\n  letter-spacing: -0.03em;\n  line-height: 1.1;\n}\n.welcome-sub {\n  color: #684b38;\n  font-size: 0.9rem;\n  margin: 0 0 var(--space-5);\n  max-width: 42ch;\n  line-height: 1.6;\n}\n.welcome-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-3) var(--space-5);\n  background: var(--clr-brand);\n  color: #ffffff;\n  border-radius: var(--radius-pill);\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 0.875rem;\n  letter-spacing: 0.01em;\n  box-shadow: 0 4px 14px #dd53004d;\n  box-shadow: 0 4px 14px oklch(62% 0.22 42deg / 0.3);\n  transition:\n    background 0.18s,\n    transform 0.15s,\n    box-shadow 0.18s;\n  touch-action: manipulation;\n}\n.welcome-cta svg {\n  width: 0.85rem;\n  height: 0.85rem;\n  flex-shrink: 0;\n}\n.welcome-cta:hover {\n  background: var(--clr-brand-dark);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px #dd530061;\n  box-shadow: 0 6px 18px oklch(62% 0.22 42deg / 0.38);\n}\n.welcome-cta:active {\n  transform: translateY(0);\n  box-shadow: none;\n}\n.welcome-art {\n  flex-shrink: 0;\n  width: 110px;\n  height: 110px;\n}\n.welcome-art svg {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.tiles-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: var(--space-4);\n  margin-bottom: var(--space-7);\n}\n.tile {\n  border-radius: var(--radius-lg);\n  padding: var(--space-5) var(--space-5);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.tile:hover {\n  transform: translateY(-2px);\n}\n.tile-num {\n  font-family: var(--font-display);\n  font-size: 2.6rem;\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: -0.04em;\n}\n.tile-label {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  opacity: 0.72;\n}\n.tile-amber {\n  background: #ffefda;\n  background: oklch(96% 0.05 76deg);\n  color: #5a3700;\n  color: oklch(37% 0.14 70deg);\n}\n.tile-orange {\n  background: #fff2eb;\n  background: oklch(97% 0.05 50deg);\n  color: #8b3100;\n  color: oklch(44% 0.2 42deg);\n}\n.tile-rose {\n  background: #fff0f1;\n  background: oklch(97% 0.025 16deg);\n  color: #890024;\n  color: oklch(40% 0.17 18deg);\n}\n.tile-lavender {\n  background: #f2f0ff;\n  background: oklch(96% 0.022 292deg);\n  color: #4b2e96;\n}\n@media (prefers-color-scheme: dark) {\n  .tile-amber {\n    background: #281600;\n    background: oklch(22% 0.05 72deg);\n    color: #ecb260;\n  }\n  .tile-orange {\n    background: #270e02;\n    color: #fd9c5d;\n  }\n  .tile-rose {\n    background: #250e0f;\n    color: #fb9797;\n  }\n  .tile-lavender {\n    background: #161325;\n    color: #b4adf4;\n  }\n  .welcome-banner {\n    background: #1b0f04;\n  }\n  .welcome-heading {\n    color: #f6e1c9;\n  }\n  .welcome-sub {\n    color: #ab937f;\n  }\n}\nhtml.dark .tile-amber {\n  background: #281600;\n  background: oklch(22% 0.05 72deg);\n  color: #ecb260;\n}\nhtml.dark .tile-orange {\n  background: #270e02;\n  color: #fd9c5d;\n}\nhtml.dark .tile-rose {\n  background: #250e0f;\n  color: #fb9797;\n}\nhtml.dark .tile-lavender {\n  background: #161325;\n  color: #b4adf4;\n}\nhtml.dark .welcome-banner {\n  background: #1b0f04;\n}\nhtml.dark .welcome-heading {\n  color: #f6e1c9;\n}\nhtml.dark .welcome-sub {\n  color: #ab937f;\n}\n.section {\n  margin-bottom: var(--space-7);\n}\n.section-comments {\n  margin-top: var(--space-1);\n}\n.section-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--space-4);\n}\n.section-title {\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--clr-text);\n  margin: 0;\n  letter-spacing: -0.015em;\n}\n.view-all {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--clr-brand);\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.view-all:hover {\n  color: var(--clr-brand-dark);\n  text-decoration: underline;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-10) var(--space-4);\n  color: var(--clr-text-faint);\n  text-align: center;\n  background: var(--clr-surface);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--clr-border-faint);\n}\n.empty-state svg {\n  width: 2.25rem;\n  height: 2.25rem;\n}\n.empty-state span {\n  font-size: 0.875rem;\n}\n.empty-cta {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--clr-brand);\n  text-decoration: none;\n  margin-top: var(--space-1);\n}\n.empty-cta:hover {\n  text-decoration: underline;\n}\n.recipe-list {\n  background: var(--clr-surface);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--clr-border-faint);\n  overflow: hidden;\n}\n.recipe-row {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  padding: var(--space-4) var(--space-5);\n  border-bottom: 1px solid var(--clr-border-faint);\n  transition: background 0.15s;\n}\n.recipe-row:last-child {\n  border-bottom: none;\n}\n.recipe-row:hover {\n  background: var(--clr-surface-alt);\n}\n.recipe-thumb {\n  width: 3.25rem;\n  height: 3.25rem;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  flex-shrink: 0;\n  background: var(--clr-surface-alt);\n}\n.recipe-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.thumb-placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--clr-text-faint);\n}\n.thumb-placeholder svg {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.recipe-info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.recipe-title-link {\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: var(--clr-text);\n  text-decoration: none;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  transition: color 0.15s;\n}\n.recipe-title-link:hover {\n  color: var(--clr-brand);\n}\n.recipe-cat {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--clr-brand);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.recipe-excerpt {\n  font-size: 0.8rem;\n  color: var(--clr-text-muted);\n  margin: 0;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n.recipe-actions {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  flex-shrink: 0;\n}\n.status-badge {\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding: 0.28rem 0.65rem;\n  border-radius: var(--radius-pill);\n  white-space: nowrap;\n}\n.status-badge.published {\n  background: #daf3dc;\n  color: #003f14;\n  color: oklch(32% 0.12 148deg);\n}\n.status-badge.draft {\n  background: #f8eddc;\n  color: #7c5518;\n}\n@media (prefers-color-scheme: dark) {\n  .status-badge.published {\n    background: #002809;\n    color: #7ebc87;\n  }\n  .status-badge.draft {\n    background: #2b1800;\n    color: #c69c63;\n  }\n}\nhtml.dark .status-badge.published {\n  background: #002809;\n  color: #7ebc87;\n}\nhtml.dark .status-badge.draft {\n  background: #2b1800;\n  color: #c69c63;\n}\n.edit-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: var(--radius-sm);\n  color: var(--clr-text-muted);\n  text-decoration: none;\n  transition: background 0.15s, color 0.15s;\n}\n.edit-btn svg {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n.edit-btn:hover {\n  background: color-mix(in oklch, var(--clr-brand) 10%, transparent);\n  color: var(--clr-brand);\n}\n.comment-list {\n  background: var(--clr-surface);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--clr-border-faint);\n  overflow: hidden;\n}\n.comment-row {\n  display: flex;\n  gap: var(--space-3);\n  padding: var(--space-4) var(--space-5);\n  border-bottom: 1px solid var(--clr-border-faint);\n}\n.comment-row:last-child {\n  border-bottom: none;\n}\n.comment-avatar {\n  width: 2rem;\n  height: 2rem;\n  border-radius: var(--radius-circle);\n  background: var(--clr-brand);\n  color: #ffffff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.comment-body-wrap {\n  flex: 1;\n  min-width: 0;\n}\n.comment-meta-row {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-bottom: 0.25rem;\n}\n.comment-author {\n  font-weight: 700;\n  font-size: 0.82rem;\n  color: var(--clr-text);\n}\n.comment-rating {\n  font-size: 0.75rem;\n  color: #a56d00;\n  color: oklch(58% 0.14 74deg);\n  font-weight: 700;\n}\n.comment-date {\n  font-size: 0.72rem;\n  color: var(--clr-text-muted);\n  margin-left: auto;\n}\n.comment-body {\n  font-size: 0.83rem;\n  color: var(--clr-text-muted);\n  margin: 0 0 var(--space-1);\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.comment-recipe-link {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--clr-brand);\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.comment-recipe-link:hover {\n  color: var(--clr-brand-dark);\n  text-decoration: underline;\n}\n@media (max-width: 900px) {\n  .tiles-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .dashboard-page {\n    padding: var(--space-5) var(--space-4) var(--space-9);\n  }\n  .welcome-banner {\n    padding: var(--space-6) var(--space-5);\n    gap: var(--space-4);\n  }\n  .welcome-art {\n    display: none;\n  }\n  .welcome-heading {\n    font-size: 1.5rem;\n  }\n  .tiles-row {\n    gap: var(--space-3);\n  }\n  .tile {\n    padding: var(--space-4) var(--space-4);\n  }\n  .tile-num {\n    font-size: 2rem;\n  }\n  .recipe-row {\n    gap: var(--space-3);\n    padding: var(--space-3) var(--space-4);\n  }\n  .status-badge {\n    display: none;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .tile,\n  .welcome-cta {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/pages/dashboard/dashboard.component.ts", lineNumber: 517 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-M7DWMVKE.js.map
