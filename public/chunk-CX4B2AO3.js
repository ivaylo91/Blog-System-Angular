import {
  toSignal
} from "./chunk-OOSWPAHX.js";
import {
  SeoService
} from "./chunk-QW5YG2I6.js";
import {
  DashboardService
} from "./chunk-ISS3T7XZ.js";
import "./chunk-GL5TQRYS.js";
import {
  ChangeDetectionStrategy,
  Component,
  RouterLink,
  inject,
  setClassMetadata,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LVOWXKII.js";

// src/app/pages/dashboard/dashboard.component.ts
var _c0 = (a0) => ["/recipes", a0];
var _forTrack0 = ($index, $item) => $item.id;
function DashboardComponent_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 45);
    \u0275\u0275element(2, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u041D\u044F\u043C\u0430 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438 \u0432\u0441\u0435 \u043E\u0449\u0435.");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_94_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2605 ", c_r1.rating);
  }
}
function DashboardComponent_Conditional_94_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 54);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 55);
    \u0275\u0275element(2, "path", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, c_r1.recipe.slug));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", c_r1.recipe.title, " ");
  }
}
function DashboardComponent_Conditional_94_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 46)(1, "div", 47)(2, "div", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 49)(5, "span", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 51);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, DashboardComponent_Conditional_94_For_2_Conditional_9_Template, 2, 1, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 53);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, DashboardComponent_Conditional_94_For_2_Conditional_12_Template, 4, 4, "a", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((c_r1.author == null ? null : c_r1.author.name == null ? null : c_r1.author.name.charAt(0)) || "?");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((c_r1.author == null ? null : c_r1.author.name) || "\u0410\u043D\u043E\u043D\u0438\u043C\u0435\u043D");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(c_r1.created_at));
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r1.rating ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.body);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r1.recipe ? 12 : -1);
  }
}
function DashboardComponent_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 44);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_94_For_2_Template, 13, 6, "li", 46, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.stats().recentComments);
  }
}
var DashboardComponent = class _DashboardComponent {
  dashboardService = inject(DashboardService);
  seo = inject(SeoService);
  stats = toSignal(this.dashboardService.getStats());
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 95, vars: 5, consts: [[1, "dashboard-page"], [1, "page-header"], [1, "subtitle"], ["routerLink", "/dashboard/recipes/new", 1, "btn-new"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "green"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9 11l3 3L22 4"], ["d", "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"], [1, "stat-number"], [1, "stat-label"], [1, "stat-icon", "yellow"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "stat-icon", "blue"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], [1, "stat-icon", "red"], ["d", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"], [1, "bottom-grid"], [1, "card"], [1, "card-title"], [1, "quick-links"], ["routerLink", "/dashboard/recipes", 1, "quick-link"], [1, "ql-icon", "green"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "ql-arrow"], ["points", "9 18 15 12 9 6"], ["routerLink", "/dashboard/comments", 1, "quick-link"], [1, "ql-icon", "blue"], ["routerLink", "/dashboard/favorites", 1, "quick-link"], [1, "ql-icon", "red"], ["routerLink", "/recipes", 1, "quick-link", "quick-link-external"], [1, "ql-icon", "brown"], ["d", "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"], ["points", "15 3 21 3 21 9"], ["x1", "10", "y1", "14", "x2", "21", "y2", "3"], [1, "card-header"], ["routerLink", "/dashboard/comments", 1, "view-all"], [1, "empty-block"], [1, "comment-list"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], [1, "comment-item"], [1, "comment-top"], [1, "comment-avatar"], [1, "comment-meta"], [1, "comment-author"], [1, "comment-date"], [1, "comment-rating"], [1, "comment-body"], [1, "comment-recipe", 3, "routerLink"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275text(4, "\u041F\u0440\u0435\u0433\u043B\u0435\u0434");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 2);
      \u0275\u0275text(6, "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0432\u0430\u0439 \u0440\u0435\u0446\u0435\u043F\u0442\u0438\u0442\u0435 \u0438 \u0441\u043B\u0435\u0434\u0438 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0442\u0430 \u043D\u0430 \u0431\u043B\u043E\u0433\u0430.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 4);
      \u0275\u0275element(9, "line", 5)(10, "line", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " \u041D\u043E\u0432\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 7)(13, "div", 8)(14, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 10);
      \u0275\u0275element(16, "path", 11)(17, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "span", 13);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 14);
      \u0275\u0275text(21, "\u041F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 8)(23, "div", 15);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 10);
      \u0275\u0275element(25, "path", 16)(26, "path", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "span", 13);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 14);
      \u0275\u0275text(30, "\u0427\u0435\u0440\u043D\u043E\u0432\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 8)(32, "div", 18);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(33, "svg", 10);
      \u0275\u0275element(34, "path", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(35, "span", 13);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "span", 14);
      \u0275\u0275text(38, "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 8)(40, "div", 20);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(41, "svg", 10);
      \u0275\u0275element(42, "path", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(43, "span", 13);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "span", 14);
      \u0275\u0275text(46, "\u0417\u0430\u043F\u0430\u0437\u0432\u0430\u043D\u0438\u044F");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 22)(48, "div", 23)(49, "h2", 24);
      \u0275\u0275text(50, "\u0411\u044A\u0440\u0437\u0438 \u0432\u0440\u044A\u0437\u043A\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 25)(52, "a", 26)(53, "div", 27);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(54, "svg", 10);
      \u0275\u0275element(55, "path", 28)(56, "polyline", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(57, "span");
      \u0275\u0275text(58, "\u0420\u0435\u0446\u0435\u043F\u0442\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(59, "svg", 30);
      \u0275\u0275element(60, "polyline", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(61, "a", 32)(62, "div", 33);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(63, "svg", 10);
      \u0275\u0275element(64, "path", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(65, "span");
      \u0275\u0275text(66, "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(67, "svg", 30);
      \u0275\u0275element(68, "polyline", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(69, "a", 34)(70, "div", 35);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(71, "svg", 10);
      \u0275\u0275element(72, "path", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(73, "span");
      \u0275\u0275text(74, "\u041B\u044E\u0431\u0438\u043C\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(75, "svg", 30);
      \u0275\u0275element(76, "polyline", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(77, "a", 36)(78, "div", 37);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(79, "svg", 10);
      \u0275\u0275element(80, "path", 38)(81, "polyline", 39)(82, "line", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(83, "span");
      \u0275\u0275text(84, "\u0412\u0438\u0436 \u0431\u043B\u043E\u0433\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(85, "svg", 30);
      \u0275\u0275element(86, "polyline", 31);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(87, "div", 23)(88, "div", 41)(89, "h2", 24);
      \u0275\u0275text(90, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "a", 42);
      \u0275\u0275text(92, "\u0412\u0438\u0436 \u0432\u0441\u0438\u0447\u043A\u0438 \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(93, DashboardComponent_Conditional_93_Template, 5, 0, "div", 43)(94, DashboardComponent_Conditional_94_Template, 3, 0, "ul", 44);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      \u0275\u0275advance(19);
      \u0275\u0275textInterpolate(((tmp_0_0 = ctx.stats()) == null ? null : tmp_0_0.publishedRecipes) ?? "\u2014");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(((tmp_1_0 = ctx.stats()) == null ? null : tmp_1_0.draftRecipes) ?? "\u2014");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(((tmp_2_0 = ctx.stats()) == null ? null : tmp_2_0.totalComments) ?? "\u2014");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(((tmp_3_0 = ctx.stats()) == null ? null : tmp_3_0.totalFavorites) ?? "\u2014");
      \u0275\u0275advance(49);
      \u0275\u0275conditional(!((tmp_4_0 = ctx.stats()) == null ? null : tmp_4_0.recentComments == null ? null : tmp_4_0.recentComments.length) ? 93 : 94);
    }
  }, dependencies: [RouterLink], styles: ['\n.dashboard-page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem 3rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  gap: 1rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-family:\n    "Playfair Display",\n    Georgia,\n    serif;\n  font-size: 1.9rem;\n  color: #1c1917;\n  margin: 0 0 0.25rem;\n  letter-spacing: -0.02em;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #57534e;\n  margin: 0;\n  font-size: 0.9rem;\n}\n.btn-new[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.65rem 1.25rem;\n  background: #4a7c59;\n  color: #fff;\n  border-radius: 0.75rem;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition: background 0.2s, box-shadow 0.2s;\n  box-shadow: 0 2px 8px rgba(74, 124, 89, 0.25);\n  touch-action: manipulation;\n}\n.btn-new[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n.btn-new[_ngcontent-%COMP%]:hover {\n  background: #3a6347;\n  box-shadow: 0 4px 14px rgba(74, 124, 89, 0.35);\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  padding: 1.5rem 1.25rem;\n  background: #ffffff;\n  border-radius: 1.25rem;\n  border: 1px solid rgba(0, 0, 0, 0.07);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.5rem;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.09);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 0.25rem;\n}\n.stat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.15rem;\n  height: 1.15rem;\n}\n.stat-icon.green[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #059669;\n}\n.stat-icon.yellow[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #92400e;\n}\n.stat-icon.blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.stat-icon.red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.stat-number[_ngcontent-%COMP%] {\n  font-family:\n    "Playfair Display",\n    Georgia,\n    serif;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1c1917;\n  line-height: 1;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #78716c;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.bottom-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(240px, 300px) 1fr;\n  gap: 1.25rem;\n  align-items: start;\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 1.25rem;\n  border: 1px solid rgba(0, 0, 0, 0.07);\n  padding: 1.25rem;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-family:\n    "Playfair Display",\n    Georgia,\n    serif;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1c1917;\n  margin: 0 0 1rem;\n  letter-spacing: -0.01em;\n}\n.card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.view-all[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #78350f;\n  text-decoration: none;\n  transition: color 0.18s;\n}\n.view-all[_ngcontent-%COMP%]:hover {\n  color: #5c2a0b;\n  text-decoration: underline;\n}\n.quick-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n}\n.quick-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.7rem 0.875rem;\n  background: #fafaf9;\n  border-radius: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.07);\n  text-decoration: none;\n  color: #1c1917;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: background 0.18s, border-color 0.18s;\n  touch-action: manipulation;\n  min-height: 2.75rem;\n}\n.quick-link[_ngcontent-%COMP%]:hover {\n  background: #f0ede8;\n  border-color: rgba(0, 0, 0, 0.12);\n}\n.ql-icon[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.ql-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n.ql-icon.green[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #059669;\n}\n.ql-icon.blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.ql-icon.red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.ql-icon.brown[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.ql-arrow[_ngcontent-%COMP%] {\n  width: 0.875rem;\n  height: 0.875rem;\n  color: #a8a29e;\n  margin-left: auto;\n  flex-shrink: 0;\n  transition: transform 0.18s, color 0.18s;\n}\n.quick-link[_ngcontent-%COMP%]:hover   .ql-arrow[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n  color: #78350f;\n}\n.empty-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 2rem 1rem;\n  color: #a8a29e;\n  text-align: center;\n}\n.empty-block[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n.empty-block[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.comment-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.comment-item[_ngcontent-%COMP%] {\n  padding: 0.875rem;\n  background: #fafaf9;\n  border-radius: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n}\n.comment-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.4rem;\n}\n.comment-avatar[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 50%;\n  background: #4a7c59;\n  color: #fff;\n  font-size: 0.7rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.comment-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.05rem;\n  min-width: 0;\n}\n.comment-author[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.82rem;\n  color: #1c1917;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.comment-date[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #78716c;\n}\n.comment-rating[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #d97706;\n  font-weight: 700;\n  margin-left: auto;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.comment-body[_ngcontent-%COMP%] {\n  font-size: 0.845rem;\n  color: #44403c;\n  margin: 0 0 0.35rem;\n  line-height: 1.55;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.comment-recipe[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.75rem;\n  color: #78350f;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.18s;\n}\n.comment-recipe[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.75rem;\n  height: 0.75rem;\n  flex-shrink: 0;\n}\n.comment-recipe[_ngcontent-%COMP%]:hover {\n  color: #5c2a0b;\n  text-decoration: underline;\n}\n@media (max-width: 900px) {\n  .bottom-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .dashboard-page[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem 2.5rem;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .btn-new[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [RouterLink], template: `
    <div class="dashboard-page">
      <div class="page-header">
        <div>
          <h1>\u041F\u0440\u0435\u0433\u043B\u0435\u0434</h1>
          <p class="subtitle">\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0432\u0430\u0439 \u0440\u0435\u0446\u0435\u043F\u0442\u0438\u0442\u0435 \u0438 \u0441\u043B\u0435\u0434\u0438 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0442\u0430 \u043D\u0430 \u0431\u043B\u043E\u0433\u0430.</p>
        </div>
        <a routerLink="/dashboard/recipes/new" class="btn-new">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          \u041D\u043E\u0432\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430
        </a>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon green">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          </div>
          <span class="stat-number">{{ stats()?.publishedRecipes ?? '\u2014' }}</span>
          <span class="stat-label">\u041F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D\u0438</span>
        </div>
        <div class="stat-card">
          <div class="stat-icon yellow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </div>
          <span class="stat-number">{{ stats()?.draftRecipes ?? '\u2014' }}</span>
          <span class="stat-label">\u0427\u0435\u0440\u043D\u043E\u0432\u0438</span>
        </div>
        <div class="stat-card">
          <div class="stat-icon blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <span class="stat-number">{{ stats()?.totalComments ?? '\u2014' }}</span>
          <span class="stat-label">\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438</span>
        </div>
        <div class="stat-card">
          <div class="stat-icon red">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </div>
          <span class="stat-number">{{ stats()?.totalFavorites ?? '\u2014' }}</span>
          <span class="stat-label">\u0417\u0430\u043F\u0430\u0437\u0432\u0430\u043D\u0438\u044F</span>
        </div>
      </div>

      <div class="bottom-grid">
        <!-- Quick links -->
        <div class="card">
          <h2 class="card-title">\u0411\u044A\u0440\u0437\u0438 \u0432\u0440\u044A\u0437\u043A\u0438</h2>
          <div class="quick-links">
            <a routerLink="/dashboard/recipes" class="quick-link">
              <div class="ql-icon green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <span>\u0420\u0435\u0446\u0435\u043F\u0442\u0438</span>
              <svg class="ql-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
            <a routerLink="/dashboard/comments" class="quick-link">
              <div class="ql-icon blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <span>\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438</span>
              <svg class="ql-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
            <a routerLink="/dashboard/favorites" class="quick-link">
              <div class="ql-icon red">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <span>\u041B\u044E\u0431\u0438\u043C\u0438</span>
              <svg class="ql-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
            <a routerLink="/recipes" class="quick-link quick-link-external">
              <div class="ql-icon brown">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </div>
              <span>\u0412\u0438\u0436 \u0431\u043B\u043E\u0433\u0430</span>
              <svg class="ql-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          </div>
        </div>

        <!-- Recent comments -->
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438</h2>
            <a routerLink="/dashboard/comments" class="view-all">\u0412\u0438\u0436 \u0432\u0441\u0438\u0447\u043A\u0438 \u2192</a>
          </div>
          @if (!stats()?.recentComments?.length) {
            <div class="empty-block">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              <span>\u041D\u044F\u043C\u0430 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438 \u0432\u0441\u0435 \u043E\u0449\u0435.</span>
            </div>
          } @else {
            <ul class="comment-list">
              @for (c of stats()!.recentComments; track c.id) {
                <li class="comment-item">
                  <div class="comment-top">
                    <div class="comment-avatar">{{ c.author?.name?.charAt(0) || '?' }}</div>
                    <div class="comment-meta">
                      <span class="comment-author">{{ c.author?.name || '\u0410\u043D\u043E\u043D\u0438\u043C\u0435\u043D' }}</span>
                      <span class="comment-date">{{ formatDate(c.created_at) }}</span>
                    </div>
                    @if (c.rating) {
                      <span class="comment-rating">\u2605 {{ c.rating }}</span>
                    }
                  </div>
                  <p class="comment-body">{{ c.body }}</p>
                  @if (c.recipe) {
                    <a [routerLink]="['/recipes', c.recipe.slug]" class="comment-recipe">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>
                      {{ c.recipe.title }}
                    </a>
                  }
                </li>
              }
            </ul>
          }
        </div>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* angular:styles/component:scss;f9c8525c4e6fd588d4854b4e8e8c82f7e37ac710a092aedfb37e24cc6eed32ab;C:/Users/ipene/Desktop/Blog-System-Angular/frontend/src/app/pages/dashboard/dashboard.component.ts */\n.dashboard-page {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem 3rem;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  gap: 1rem;\n}\nh1 {\n  font-family:\n    "Playfair Display",\n    Georgia,\n    serif;\n  font-size: 1.9rem;\n  color: #1c1917;\n  margin: 0 0 0.25rem;\n  letter-spacing: -0.02em;\n}\n.subtitle {\n  color: #57534e;\n  margin: 0;\n  font-size: 0.9rem;\n}\n.btn-new {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.65rem 1.25rem;\n  background: #4a7c59;\n  color: #fff;\n  border-radius: 0.75rem;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition: background 0.2s, box-shadow 0.2s;\n  box-shadow: 0 2px 8px rgba(74, 124, 89, 0.25);\n  touch-action: manipulation;\n}\n.btn-new svg {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n.btn-new:hover {\n  background: #3a6347;\n  box-shadow: 0 4px 14px rgba(74, 124, 89, 0.35);\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.stat-card {\n  padding: 1.5rem 1.25rem;\n  background: #ffffff;\n  border-radius: 1.25rem;\n  border: 1px solid rgba(0, 0, 0, 0.07);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.5rem;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.09);\n}\n.stat-icon {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 0.25rem;\n}\n.stat-icon svg {\n  width: 1.15rem;\n  height: 1.15rem;\n}\n.stat-icon.green {\n  background: #d1fae5;\n  color: #059669;\n}\n.stat-icon.yellow {\n  background: #fef9c3;\n  color: #92400e;\n}\n.stat-icon.blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.stat-icon.red {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.stat-number {\n  font-family:\n    "Playfair Display",\n    Georgia,\n    serif;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1c1917;\n  line-height: 1;\n}\n.stat-label {\n  font-size: 0.78rem;\n  color: #78716c;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.bottom-grid {\n  display: grid;\n  grid-template-columns: minmax(240px, 300px) 1fr;\n  gap: 1.25rem;\n  align-items: start;\n}\n.card {\n  background: #ffffff;\n  border-radius: 1.25rem;\n  border: 1px solid rgba(0, 0, 0, 0.07);\n  padding: 1.25rem;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.card-title {\n  font-family:\n    "Playfair Display",\n    Georgia,\n    serif;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1c1917;\n  margin: 0 0 1rem;\n  letter-spacing: -0.01em;\n}\n.card-header .card-title {\n  margin: 0;\n}\n.view-all {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #78350f;\n  text-decoration: none;\n  transition: color 0.18s;\n}\n.view-all:hover {\n  color: #5c2a0b;\n  text-decoration: underline;\n}\n.quick-links {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n}\n.quick-link {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.7rem 0.875rem;\n  background: #fafaf9;\n  border-radius: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.07);\n  text-decoration: none;\n  color: #1c1917;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: background 0.18s, border-color 0.18s;\n  touch-action: manipulation;\n  min-height: 2.75rem;\n}\n.quick-link:hover {\n  background: #f0ede8;\n  border-color: rgba(0, 0, 0, 0.12);\n}\n.ql-icon {\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.ql-icon svg {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n.ql-icon.green {\n  background: #d1fae5;\n  color: #059669;\n}\n.ql-icon.blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.ql-icon.red {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.ql-icon.brown {\n  background: #fef3c7;\n  color: #92400e;\n}\n.ql-arrow {\n  width: 0.875rem;\n  height: 0.875rem;\n  color: #a8a29e;\n  margin-left: auto;\n  flex-shrink: 0;\n  transition: transform 0.18s, color 0.18s;\n}\n.quick-link:hover .ql-arrow {\n  transform: translateX(3px);\n  color: #78350f;\n}\n.empty-block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 2rem 1rem;\n  color: #a8a29e;\n  text-align: center;\n}\n.empty-block svg {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n.empty-block span {\n  font-size: 0.875rem;\n}\n.comment-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.comment-item {\n  padding: 0.875rem;\n  background: #fafaf9;\n  border-radius: 0.875rem;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n}\n.comment-top {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.4rem;\n}\n.comment-avatar {\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 50%;\n  background: #4a7c59;\n  color: #fff;\n  font-size: 0.7rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.comment-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 0.05rem;\n  min-width: 0;\n}\n.comment-author {\n  font-weight: 700;\n  font-size: 0.82rem;\n  color: #1c1917;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.comment-date {\n  font-size: 0.72rem;\n  color: #78716c;\n}\n.comment-rating {\n  font-size: 0.75rem;\n  color: #d97706;\n  font-weight: 700;\n  margin-left: auto;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.comment-body {\n  font-size: 0.845rem;\n  color: #44403c;\n  margin: 0 0 0.35rem;\n  line-height: 1.55;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.comment-recipe {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.75rem;\n  color: #78350f;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.18s;\n}\n.comment-recipe svg {\n  width: 0.75rem;\n  height: 0.75rem;\n  flex-shrink: 0;\n}\n.comment-recipe:hover {\n  color: #5c2a0b;\n  text-decoration: underline;\n}\n@media (max-width: 900px) {\n  .bottom-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .dashboard-page {\n    padding: 1.5rem 1rem 2.5rem;\n  }\n  .page-header {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .btn-new {\n    justify-content: center;\n  }\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  h1 {\n    font-size: 1.6rem;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/pages/dashboard/dashboard.component.ts", lineNumber: 387 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-CX4B2AO3.js.map
