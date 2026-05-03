import {
  AuthService
} from "./chunk-3GAFCRXR.js";
import "./chunk-QKG44OY5.js";
import {
  ChangeDetectionStrategy,
  Component,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-OGGNHWOY.js";

// src/app/pages/dashboard-layout/dashboard-layout.component.ts
var _c0 = () => ({ exact: true });
function DashboardLayoutComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275listener("click", function DashboardLayoutComponent_Conditional_76_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sidebarOpen.set(false));
    });
    \u0275\u0275elementEnd();
  }
}
var DashboardLayoutComponent = class _DashboardLayoutComponent {
  auth = inject(AuthService);
  router = inject(Router);
  sidebarOpen = signal(false, ...ngDevMode ? [{ debugName: "sidebarOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  userInitial() {
    const name = this.auth.user()?.name || "";
    return name.charAt(0).toUpperCase() || "?";
  }
  pageTitle() {
    const url = this.router.url;
    if (url.includes("/recipes/new") || url.includes("/recipes/edit"))
      return "\u0420\u0435\u0446\u0435\u043F\u0442\u0430";
    if (url.includes("/recipes"))
      return "\u0420\u0435\u0446\u0435\u043F\u0442\u0438";
    if (url.includes("/comments"))
      return "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438";
    if (url.includes("/favorites"))
      return "\u041B\u044E\u0431\u0438\u043C\u0438";
    return "\u041F\u0440\u0435\u0433\u043B\u0435\u0434";
  }
  todayLabel() {
    return (/* @__PURE__ */ new Date()).toLocaleDateString("bg-BG", { weekday: "long", day: "numeric", month: "long" });
  }
  static \u0275fac = function DashboardLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardLayoutComponent, selectors: [["app-dashboard-layout"]], decls: 139, vars: 15, consts: [[1, "shell"], [1, "sidebar"], [1, "sidebar-header"], [1, "sidebar-brand"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"], ["d", "M3 11h18v2a7 7 0 0 1-14 0H3z"], ["x1", "9", "y1", "20", "x2", "15", "y2", "20"], ["x1", "12", "y1", "17", "x2", "12", "y2", "20"], ["aria-label", "\u0417\u0430\u0442\u0432\u043E\u0440\u0438 \u043C\u0435\u043D\u044E\u0442\u043E", 1, "sidebar-close", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["routerLink", "/dashboard/recipes/new", 1, "sidebar-cta", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "aria-hidden", "true"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["aria-label", "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u0432 \u0442\u0430\u0431\u043B\u043E\u0442\u043E", 1, "sidebar-nav", "sidebar-nav-primary"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-item", 3, "click", "routerLinkActiveOptions"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["x", "3", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "14", "width", "7", "height", "7", "rx", "1"], ["x", "3", "y", "14", "width", "7", "height", "7", "rx", "1"], ["routerLink", "/dashboard/recipes", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["routerLink", "/dashboard/comments", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], ["routerLink", "/dashboard/favorites", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"], [1, "sidebar-sep"], ["aria-label", "\u0414\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435\u043B\u043D\u0438 \u0432\u0440\u044A\u0437\u043A\u0438", 1, "sidebar-nav", "sidebar-nav-secondary"], ["routerLink", "/profile", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["routerLink", "/recipes", 1, "nav-item", "nav-item-external", 3, "click"], ["d", "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"], ["points", "15 3 21 3 21 9"], ["x1", "10", "y1", "14", "x2", "21", "y2", "3"], [1, "nav-item", "nav-item-logout", 3, "click"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "sidebar-user"], ["aria-hidden", "true", 1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-role"], ["aria-hidden", "true", 1, "sidebar-overlay"], [1, "main-wrap"], [1, "desktop-topbar"], [1, "dt-title"], [1, "dt-right"], [1, "dt-date"], ["aria-label", "\u0418\u0437\u0432\u0435\u0441\u0442\u0438\u044F", 1, "dt-bell"], ["d", "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"], ["d", "M13.73 21a2 2 0 0 1-3.46 0"], [1, "dt-user"], ["aria-hidden", "true", 1, "dt-avatar"], [1, "dt-name"], [1, "mobile-topbar"], ["aria-label", "\u041E\u0442\u0432\u043E\u0440\u0438 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F\u0442\u0430", 1, "menu-btn", 3, "click"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["x1", "3", "y1", "12", "x2", "21", "y2", "12"], ["x1", "3", "y1", "18", "x2", "21", "y2", "18"], [1, "topbar-label"], ["routerLink", "/dashboard/recipes/new", "aria-label", "\u041D\u043E\u0432\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430", 1, "topbar-new"], [1, "page-content"], ["aria-label", "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u0432 \u0442\u0430\u0431\u043B\u043E\u0442\u043E", 1, "bottom-nav"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "bottom-nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/dashboard/recipes", "routerLinkActive", "active", 1, "bottom-nav-item"], [1, "bottom-nav-add"], ["routerLink", "/dashboard/recipes/new", "aria-label", "\u041D\u043E\u0432\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430", 1, "bottom-nav-add-btn"], ["routerLink", "/dashboard/comments", "routerLinkActive", "active", 1, "bottom-nav-item"], ["routerLink", "/dashboard/favorites", "routerLinkActive", "active", 1, "bottom-nav-item"], ["aria-hidden", "true", 1, "sidebar-overlay", 3, "click"]], template: function DashboardLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5)(6, "path", 6)(7, "line", 7)(8, "line", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " \u0411\u043B\u043E\u0433\u044A\u0442 \u043D\u0430 \u0418\u0432\u043E ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "button", 9);
      \u0275\u0275listener("click", function DashboardLayoutComponent_Template_button_click_10_listener() {
        return ctx.sidebarOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 10);
      \u0275\u0275element(12, "line", 11)(13, "line", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "a", 13);
      \u0275\u0275listener("click", function DashboardLayoutComponent_Template_a_click_14_listener() {
        return ctx.sidebarOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 14);
      \u0275\u0275element(16, "line", 15)(17, "line", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " \u041D\u043E\u0432\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430 ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(19, "nav", 17)(20, "a", 18);
      \u0275\u0275listener("click", function DashboardLayoutComponent_Template_a_click_20_listener() {
        return ctx.sidebarOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(21, "svg", 19);
      \u0275\u0275element(22, "rect", 20)(23, "rect", 21)(24, "rect", 22)(25, "rect", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(26, "span");
      \u0275\u0275text(27, "\u041F\u0440\u0435\u0433\u043B\u0435\u0434");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "a", 24);
      \u0275\u0275listener("click", function DashboardLayoutComponent_Template_a_click_28_listener() {
        return ctx.sidebarOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 19);
      \u0275\u0275element(30, "path", 25)(31, "polyline", 26)(32, "line", 27)(33, "line", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(34, "span");
      \u0275\u0275text(35, "\u0420\u0435\u0446\u0435\u043F\u0442\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "a", 29);
      \u0275\u0275listener("click", function DashboardLayoutComponent_Template_a_click_36_listener() {
        return ctx.sidebarOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(37, "svg", 19);
      \u0275\u0275element(38, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(39, "span");
      \u0275\u0275text(40, "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "a", 31);
      \u0275\u0275listener("click", function DashboardLayoutComponent_Template_a_click_41_listener() {
        return ctx.sidebarOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(42, "svg", 19);
      \u0275\u0275element(43, "path", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(44, "span");
      \u0275\u0275text(45, "\u041B\u044E\u0431\u0438\u043C\u0438");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(46, "div", 33);
      \u0275\u0275elementStart(47, "nav", 34)(48, "a", 35);
      \u0275\u0275listener("click", function DashboardLayoutComponent_Template_a_click_48_listener() {
        return ctx.sidebarOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(49, "svg", 19);
      \u0275\u0275element(50, "path", 36)(51, "circle", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(52, "span");
      \u0275\u0275text(53, "\u041F\u0440\u043E\u0444\u0438\u043B");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "a", 38);
      \u0275\u0275listener("click", function DashboardLayoutComponent_Template_a_click_54_listener() {
        return ctx.sidebarOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(55, "svg", 19);
      \u0275\u0275element(56, "path", 39)(57, "polyline", 40)(58, "line", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(59, "span");
      \u0275\u0275text(60, "\u0412\u0438\u0436 \u0431\u043B\u043E\u0433\u0430");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "button", 42);
      \u0275\u0275listener("click", function DashboardLayoutComponent_Template_button_click_61_listener() {
        return ctx.auth.logout();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(62, "svg", 19);
      \u0275\u0275element(63, "path", 43)(64, "polyline", 44)(65, "line", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(66, "span");
      \u0275\u0275text(67, "\u0418\u0437\u0445\u043E\u0434");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "div", 46)(69, "div", 47);
      \u0275\u0275text(70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 48)(72, "span", 49);
      \u0275\u0275text(73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "span", 50);
      \u0275\u0275text(75);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(76, DashboardLayoutComponent_Conditional_76_Template, 1, 0, "div", 51);
      \u0275\u0275elementStart(77, "div", 52)(78, "div", 53)(79, "span", 54);
      \u0275\u0275text(80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 55)(82, "span", 56);
      \u0275\u0275text(83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "button", 57);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(85, "svg", 19);
      \u0275\u0275element(86, "path", 58)(87, "path", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(88, "div", 60)(89, "div", 61);
      \u0275\u0275text(90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "span", 62);
      \u0275\u0275text(92);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(93, "div", 63)(94, "button", 64);
      \u0275\u0275listener("click", function DashboardLayoutComponent_Template_button_click_94_listener() {
        return ctx.sidebarOpen.set(true);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(95, "svg", 10);
      \u0275\u0275element(96, "line", 65)(97, "line", 66)(98, "line", 67);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(99, "span", 68);
      \u0275\u0275text(100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "a", 69);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(102, "svg", 10);
      \u0275\u0275element(103, "line", 15)(104, "line", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(105, "div", 70);
      \u0275\u0275element(106, "router-outlet");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "nav", 71)(108, "a", 72);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(109, "svg", 19);
      \u0275\u0275element(110, "rect", 20)(111, "rect", 21)(112, "rect", 22)(113, "rect", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(114, "span");
      \u0275\u0275text(115, "\u041F\u0440\u0435\u0433\u043B\u0435\u0434");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "a", 73);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(117, "svg", 19);
      \u0275\u0275element(118, "path", 25)(119, "polyline", 26)(120, "line", 27)(121, "line", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(122, "span");
      \u0275\u0275text(123, "\u0420\u0435\u0446\u0435\u043F\u0442\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "div", 74)(125, "a", 75);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(126, "svg", 14);
      \u0275\u0275element(127, "line", 15)(128, "line", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(129, "a", 76);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(130, "svg", 19);
      \u0275\u0275element(131, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(132, "span");
      \u0275\u0275text(133, "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "a", 77);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(135, "svg", 19);
      \u0275\u0275element(136, "path", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(137, "span");
      \u0275\u0275text(138, "\u041B\u044E\u0431\u0438\u043C\u0438");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_9_0;
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.sidebarOpen());
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(13, _c0));
      \u0275\u0275advance(50);
      \u0275\u0275textInterpolate(ctx.userInitial());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate((tmp_3_0 = ctx.auth.user()) == null ? null : tmp_3_0.name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.auth.isAdmin() ? "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440" : "\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.sidebarOpen() ? 76 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.pageTitle());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.todayLabel());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.userInitial());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((tmp_9_0 = ctx.auth.user()) == null ? null : tmp_9_0.name);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.pageTitle());
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(14, _c0));
    }
  }, dependencies: [RouterLink, RouterLinkActive, RouterOutlet], styles: ['@charset "UTF-8";\n\n\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: calc(100vh - 3.75rem);\n  background: var(--clr-bg);\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  flex-shrink: 0;\n  background: var(--clr-surface);\n  border-right: 1px solid var(--clr-border-faint);\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 3.75rem;\n  height: calc(100vh - 3.75rem);\n  overflow-y: auto;\n  z-index: 40;\n  scrollbar-width: none;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--space-5) var(--space-4) var(--space-3);\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  font-family: var(--font-display);\n  font-size: 0.92rem;\n  font-weight: 800;\n  color: var(--clr-text);\n  letter-spacing: -0.02em;\n}\n.sidebar-brand[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--clr-brand);\n  flex-shrink: 0;\n}\n.sidebar-close[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  color: var(--clr-text-muted);\n  cursor: pointer;\n  padding: var(--space-1);\n  border-radius: var(--radius-xs);\n  transition: color 0.2s, background 0.2s;\n  touch-action: manipulation;\n}\n.sidebar-close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.sidebar-close[_ngcontent-%COMP%]:hover {\n  color: var(--clr-text);\n  background: var(--clr-surface-alt);\n}\n.sidebar-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--space-2);\n  margin: var(--space-2) var(--space-4) var(--space-3);\n  padding: var(--space-3) var(--space-4);\n  background: var(--clr-brand);\n  color: #ffffff;\n  border-radius: var(--radius-pill);\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 0.875rem;\n  letter-spacing: 0.01em;\n  transition:\n    background 0.18s,\n    transform 0.15s,\n    box-shadow 0.18s;\n  box-shadow: 0 4px 14px #dd530052;\n  box-shadow: 0 4px 14px oklch(62% 0.22 42deg / 0.32);\n  touch-action: manipulation;\n}\n.sidebar-cta[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.875rem;\n  height: 0.875rem;\n  flex-shrink: 0;\n}\n.sidebar-cta[_ngcontent-%COMP%]:hover {\n  background: var(--clr-brand-dark);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px #dd530066;\n  box-shadow: 0 6px 18px oklch(62% 0.22 42deg / 0.4);\n}\n.sidebar-cta[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: none;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: var(--space-1) var(--space-3);\n}\n.sidebar-nav-secondary[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-3) var(--space-3);\n  border-radius: var(--radius-md);\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--clr-text-muted);\n  transition: background 0.15s, color 0.15s;\n  touch-action: manipulation;\n  min-height: 2.75rem;\n  background: none;\n  border: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  font-family: inherit;\n}\n.nav-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--clr-surface-alt);\n  color: var(--clr-text);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: color-mix(in oklch, var(--clr-brand) 10%, transparent);\n  color: var(--clr-brand);\n  font-weight: 700;\n}\n.nav-item-external[_ngcontent-%COMP%] {\n  opacity: 0.85;\n}\n.nav-item-external[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.nav-item-logout[_ngcontent-%COMP%] {\n  color: #8a0012;\n  color: oklch(40% 0.18 25deg);\n}\n.nav-item-logout[_ngcontent-%COMP%]:hover {\n  background: color-mix(in oklch, oklch(55% 0.18 25deg) 10%, transparent);\n  color: #74000b;\n  color: oklch(35% 0.18 25deg);\n}\n.sidebar-sep[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--clr-border-faint);\n  margin: var(--space-2) var(--space-3);\n}\n.sidebar-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-4);\n  margin-top: auto;\n  border-top: 1px solid var(--clr-border-faint);\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: var(--radius-circle);\n  background: var(--clr-brand);\n  color: #ffffff;\n  font-size: 0.8rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n  min-width: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--clr-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-role[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--clr-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.sidebar-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 39;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.desktop-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 var(--space-7);\n  height: 3.25rem;\n  background: var(--clr-surface);\n  border-bottom: 1px solid var(--clr-border-faint);\n  position: sticky;\n  top: 3.75rem;\n  z-index: 20;\n  gap: var(--space-4);\n  flex-shrink: 0;\n}\n.dt-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--clr-text);\n  letter-spacing: -0.015em;\n}\n.dt-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n}\n.dt-date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--clr-text-muted);\n  white-space: nowrap;\n  letter-spacing: 0.01em;\n}\n.dt-bell[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--clr-text-muted);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-2);\n  border-radius: var(--radius-sm);\n  transition: color 0.15s, background 0.15s;\n  min-width: 2.5rem;\n  min-height: 2.5rem;\n}\n.dt-bell[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.05rem;\n  height: 1.05rem;\n}\n.dt-bell[_ngcontent-%COMP%]:hover {\n  color: var(--clr-text);\n  background: var(--clr-surface-alt);\n}\n.dt-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.dt-avatar[_ngcontent-%COMP%] {\n  width: 1.85rem;\n  height: 1.85rem;\n  border-radius: var(--radius-circle);\n  background: var(--clr-brand);\n  color: #ffffff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  flex-shrink: 0;\n}\n.dt-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--clr-text);\n  white-space: nowrap;\n}\n.mobile-topbar[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--space-3) var(--space-4);\n  background: var(--clr-surface);\n  border-bottom: 1px solid var(--clr-border-faint);\n  position: sticky;\n  top: 3.75rem;\n  z-index: 30;\n  flex-shrink: 0;\n}\n.menu-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--clr-text);\n  cursor: pointer;\n  padding: var(--space-2);\n  border-radius: var(--radius-xs);\n  transition: background 0.15s;\n  min-width: 2.75rem;\n  min-height: 2.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  touch-action: manipulation;\n}\n.menu-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.menu-btn[_ngcontent-%COMP%]:hover {\n  background: var(--clr-surface-alt);\n}\n.topbar-label[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--clr-text);\n}\n.topbar-new[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.75rem;\n  height: 2.75rem;\n  background: var(--clr-brand);\n  color: #ffffff;\n  border-radius: var(--radius-sm);\n  text-decoration: none;\n  transition: background 0.15s;\n  touch-action: manipulation;\n}\n.topbar-new[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.topbar-new[_ngcontent-%COMP%]:hover {\n  background: var(--clr-brand-dark);\n}\n.main-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.page-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.bottom-nav[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .shell[_ngcontent-%COMP%] {\n    display: block;\n    min-height: calc(100vh - 3.75rem);\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sidebar-overlay[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .desktop-topbar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-topbar[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .page-content[_ngcontent-%COMP%] {\n    min-height: calc(100vh - 3.75rem - 4rem);\n    padding-bottom: 4rem;\n  }\n  .bottom-nav[_ngcontent-%COMP%] {\n    display: flex;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 4rem;\n    background: var(--clr-surface);\n    border-top: 1px solid var(--clr-border-faint);\n    z-index: 30;\n    box-shadow: 0 -2px 12px rgba(28, 25, 23, 0.06);\n  }\n  .bottom-nav-item[_ngcontent-%COMP%] {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: var(--space-1);\n    text-decoration: none;\n    color: var(--clr-text-muted);\n    font-size: 0.65rem;\n    font-weight: 500;\n    transition: color 0.15s, background 0.15s;\n    touch-action: manipulation;\n    min-height: 4rem;\n  }\n  .bottom-nav-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 1.25rem;\n    height: 1.25rem;\n    flex-shrink: 0;\n  }\n  .bottom-nav-item[_ngcontent-%COMP%]:hover {\n    color: var(--clr-brand);\n    background: color-mix(in oklch, var(--clr-brand) 5%, transparent);\n  }\n  .bottom-nav-item.active[_ngcontent-%COMP%] {\n    color: var(--clr-brand);\n    font-weight: 600;\n  }\n  .bottom-nav-item.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    stroke-width: 2.5;\n  }\n  .bottom-nav-add[_ngcontent-%COMP%] {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .bottom-nav-add-btn[_ngcontent-%COMP%] {\n    width: 2.75rem;\n    height: 2.75rem;\n    background: var(--clr-brand);\n    color: #ffffff;\n    border-radius: var(--radius-circle);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: var(--shadow-md);\n    transition: background 0.15s, transform 0.15s;\n  }\n  .bottom-nav-add-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 1.1rem;\n    height: 1.1rem;\n  }\n  .bottom-nav-add-btn[_ngcontent-%COMP%]:hover {\n    background: var(--clr-brand-dark);\n    transform: scale(1.08);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .sidebar-cta[_ngcontent-%COMP%], \n   .nav-item[_ngcontent-%COMP%], \n   .bottom-nav-add-btn[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=dashboard-layout.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-layout", standalone: true, imports: [RouterLink, RouterLinkActive, RouterOutlet], template: `
    <div class="shell">

      <!-- \u2500\u2500 Sidebar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <aside class="sidebar" [class.open]="sidebarOpen()">
        <div class="sidebar-header">
          <span class="sidebar-brand">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                 stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"/>
              <path d="M3 11h18v2a7 7 0 0 1-14 0H3z"/>
              <line x1="9" y1="20" x2="15" y2="20"/>
              <line x1="12" y1="17" x2="12" y2="20"/>
            </svg>
            \u0411\u043B\u043E\u0433\u044A\u0442 \u043D\u0430 \u0418\u0432\u043E
          </span>
          <button class="sidebar-close" (click)="sidebarOpen.set(false)" aria-label="\u0417\u0430\u0442\u0432\u043E\u0440\u0438 \u043C\u0435\u043D\u044E\u0442\u043E">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <a routerLink="/dashboard/recipes/new" class="sidebar-cta" (click)="sidebarOpen.set(false)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          \u041D\u043E\u0432\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430
        </a>

        <nav class="sidebar-nav sidebar-nav-primary" aria-label="\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u0432 \u0442\u0430\u0431\u043B\u043E\u0442\u043E">
          <a routerLink="/dashboard" routerLinkActive="active"
             [routerLinkActiveOptions]="{exact: true}"
             class="nav-item" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>
            </svg>
            <span>\u041F\u0440\u0435\u0433\u043B\u0435\u0434</span>
          </a>
          <a routerLink="/dashboard/recipes" routerLinkActive="active"
             class="nav-item" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            <span>\u0420\u0435\u0446\u0435\u043F\u0442\u0438</span>
          </a>
          <a routerLink="/dashboard/comments" routerLinkActive="active"
             class="nav-item" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span>\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438</span>
          </a>
          <a routerLink="/dashboard/favorites" routerLinkActive="active"
             class="nav-item" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>\u041B\u044E\u0431\u0438\u043C\u0438</span>
          </a>
        </nav>

        <div class="sidebar-sep"></div>

        <nav class="sidebar-nav sidebar-nav-secondary" aria-label="\u0414\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435\u043B\u043D\u0438 \u0432\u0440\u044A\u0437\u043A\u0438">
          <a routerLink="/profile" routerLinkActive="active"
             class="nav-item" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
            <span>\u041F\u0440\u043E\u0444\u0438\u043B</span>
          </a>
          <a routerLink="/recipes" class="nav-item nav-item-external" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            <span>\u0412\u0438\u0436 \u0431\u043B\u043E\u0433\u0430</span>
          </a>
          <button class="nav-item nav-item-logout" (click)="auth.logout()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            <span>\u0418\u0437\u0445\u043E\u0434</span>
          </button>
        </nav>

        <div class="sidebar-user">
          <div class="user-avatar" aria-hidden="true">{{ userInitial() }}</div>
          <div class="user-info">
            <span class="user-name">{{ auth.user()?.name }}</span>
            <span class="user-role">{{ auth.isAdmin() ? '\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440' : '\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B' }}</span>
          </div>
        </div>
      </aside>

      <!-- Mobile overlay -->
      @if (sidebarOpen()) {
        <div class="sidebar-overlay" (click)="sidebarOpen.set(false)" aria-hidden="true"></div>
      }

      <!-- \u2500\u2500 Main area \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <div class="main-wrap">

        <!-- Desktop topbar -->
        <div class="desktop-topbar">
          <span class="dt-title">{{ pageTitle() }}</span>
          <div class="dt-right">
            <span class="dt-date">{{ todayLabel() }}</span>
            <button class="dt-bell" aria-label="\u0418\u0437\u0432\u0435\u0441\u0442\u0438\u044F">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
            </button>
            <div class="dt-user">
              <div class="dt-avatar" aria-hidden="true">{{ userInitial() }}</div>
              <span class="dt-name">{{ auth.user()?.name }}</span>
            </div>
          </div>
        </div>

        <!-- Mobile topbar -->
        <div class="mobile-topbar">
          <button class="menu-btn" (click)="sidebarOpen.set(true)" aria-label="\u041E\u0442\u0432\u043E\u0440\u0438 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F\u0442\u0430">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
          <span class="topbar-label">{{ pageTitle() }}</span>
          <a routerLink="/dashboard/recipes/new" class="topbar-new" aria-label="\u041D\u043E\u0432\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </a>
        </div>

        <div class="page-content">
          <router-outlet />
        </div>
      </div>

    </div>

    <!-- \u2500\u2500 Mobile bottom nav \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <nav class="bottom-nav" aria-label="\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u0432 \u0442\u0430\u0431\u043B\u043E\u0442\u043E">
      <a routerLink="/dashboard" routerLinkActive="active"
         [routerLinkActiveOptions]="{exact: true}" class="bottom-nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
          <rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>
        </svg>
        <span>\u041F\u0440\u0435\u0433\u043B\u0435\u0434</span>
      </a>
      <a routerLink="/dashboard/recipes" routerLinkActive="active" class="bottom-nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
        <span>\u0420\u0435\u0446\u0435\u043F\u0442\u0438</span>
      </a>
      <div class="bottom-nav-add">
        <a routerLink="/dashboard/recipes/new" aria-label="\u041D\u043E\u0432\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430" class="bottom-nav-add-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </a>
      </div>
      <a routerLink="/dashboard/comments" routerLinkActive="active" class="bottom-nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <span>\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438</span>
      </a>
      <a routerLink="/dashboard/favorites" routerLinkActive="active" class="bottom-nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        <span>\u041B\u044E\u0431\u0438\u043C\u0438</span>
      </a>
    </nav>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;dbf043dee03206573fcde0604b4c300a1dc31a9e2e118fd105470368db0cf77f;/home/ivaylo-penev/Desktop/Blog-System-Angular/frontend/src/app/pages/dashboard-layout/dashboard-layout.component.ts */\n.shell {\n  display: flex;\n  min-height: calc(100vh - 3.75rem);\n  background: var(--clr-bg);\n}\n.sidebar {\n  width: 240px;\n  flex-shrink: 0;\n  background: var(--clr-surface);\n  border-right: 1px solid var(--clr-border-faint);\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 3.75rem;\n  height: calc(100vh - 3.75rem);\n  overflow-y: auto;\n  z-index: 40;\n  scrollbar-width: none;\n}\n.sidebar::-webkit-scrollbar {\n  display: none;\n}\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--space-5) var(--space-4) var(--space-3);\n}\n.sidebar-brand {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  font-family: var(--font-display);\n  font-size: 0.92rem;\n  font-weight: 800;\n  color: var(--clr-text);\n  letter-spacing: -0.02em;\n}\n.sidebar-brand svg {\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--clr-brand);\n  flex-shrink: 0;\n}\n.sidebar-close {\n  display: none;\n  background: none;\n  border: none;\n  color: var(--clr-text-muted);\n  cursor: pointer;\n  padding: var(--space-1);\n  border-radius: var(--radius-xs);\n  transition: color 0.2s, background 0.2s;\n  touch-action: manipulation;\n}\n.sidebar-close svg {\n  width: 1rem;\n  height: 1rem;\n}\n.sidebar-close:hover {\n  color: var(--clr-text);\n  background: var(--clr-surface-alt);\n}\n.sidebar-cta {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--space-2);\n  margin: var(--space-2) var(--space-4) var(--space-3);\n  padding: var(--space-3) var(--space-4);\n  background: var(--clr-brand);\n  color: #ffffff;\n  border-radius: var(--radius-pill);\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 0.875rem;\n  letter-spacing: 0.01em;\n  transition:\n    background 0.18s,\n    transform 0.15s,\n    box-shadow 0.18s;\n  box-shadow: 0 4px 14px #dd530052;\n  box-shadow: 0 4px 14px oklch(62% 0.22 42deg / 0.32);\n  touch-action: manipulation;\n}\n.sidebar-cta svg {\n  width: 0.875rem;\n  height: 0.875rem;\n  flex-shrink: 0;\n}\n.sidebar-cta:hover {\n  background: var(--clr-brand-dark);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px #dd530066;\n  box-shadow: 0 6px 18px oklch(62% 0.22 42deg / 0.4);\n}\n.sidebar-cta:active {\n  transform: translateY(0);\n  box-shadow: none;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: var(--space-1) var(--space-3);\n}\n.sidebar-nav-secondary {\n  padding-top: 0;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-3) var(--space-3);\n  border-radius: var(--radius-md);\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--clr-text-muted);\n  transition: background 0.15s, color 0.15s;\n  touch-action: manipulation;\n  min-height: 2.75rem;\n  background: none;\n  border: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  font-family: inherit;\n}\n.nav-item svg {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.nav-item:hover {\n  background: var(--clr-surface-alt);\n  color: var(--clr-text);\n}\n.nav-item.active {\n  background: color-mix(in oklch, var(--clr-brand) 10%, transparent);\n  color: var(--clr-brand);\n  font-weight: 700;\n}\n.nav-item-external {\n  opacity: 0.85;\n}\n.nav-item-external:hover {\n  opacity: 1;\n}\n.nav-item-logout {\n  color: #8a0012;\n  color: oklch(40% 0.18 25deg);\n}\n.nav-item-logout:hover {\n  background: color-mix(in oklch, oklch(55% 0.18 25deg) 10%, transparent);\n  color: #74000b;\n  color: oklch(35% 0.18 25deg);\n}\n.sidebar-sep {\n  height: 1px;\n  background: var(--clr-border-faint);\n  margin: var(--space-2) var(--space-3);\n}\n.sidebar-user {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-4);\n  margin-top: auto;\n  border-top: 1px solid var(--clr-border-faint);\n}\n.user-avatar {\n  width: 2rem;\n  height: 2rem;\n  border-radius: var(--radius-circle);\n  background: var(--clr-brand);\n  color: #ffffff;\n  font-size: 0.8rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.user-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n  min-width: 0;\n}\n.user-name {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--clr-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-role {\n  font-size: 0.68rem;\n  color: var(--clr-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.sidebar-overlay {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 39;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.desktop-topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 var(--space-7);\n  height: 3.25rem;\n  background: var(--clr-surface);\n  border-bottom: 1px solid var(--clr-border-faint);\n  position: sticky;\n  top: 3.75rem;\n  z-index: 20;\n  gap: var(--space-4);\n  flex-shrink: 0;\n}\n.dt-title {\n  font-family: var(--font-display);\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--clr-text);\n  letter-spacing: -0.015em;\n}\n.dt-right {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n}\n.dt-date {\n  font-size: 0.8rem;\n  color: var(--clr-text-muted);\n  white-space: nowrap;\n  letter-spacing: 0.01em;\n}\n.dt-bell {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--clr-text-muted);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-2);\n  border-radius: var(--radius-sm);\n  transition: color 0.15s, background 0.15s;\n  min-width: 2.5rem;\n  min-height: 2.5rem;\n}\n.dt-bell svg {\n  width: 1.05rem;\n  height: 1.05rem;\n}\n.dt-bell:hover {\n  color: var(--clr-text);\n  background: var(--clr-surface-alt);\n}\n.dt-user {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.dt-avatar {\n  width: 1.85rem;\n  height: 1.85rem;\n  border-radius: var(--radius-circle);\n  background: var(--clr-brand);\n  color: #ffffff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  flex-shrink: 0;\n}\n.dt-name {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--clr-text);\n  white-space: nowrap;\n}\n.mobile-topbar {\n  display: none;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--space-3) var(--space-4);\n  background: var(--clr-surface);\n  border-bottom: 1px solid var(--clr-border-faint);\n  position: sticky;\n  top: 3.75rem;\n  z-index: 30;\n  flex-shrink: 0;\n}\n.menu-btn {\n  background: none;\n  border: none;\n  color: var(--clr-text);\n  cursor: pointer;\n  padding: var(--space-2);\n  border-radius: var(--radius-xs);\n  transition: background 0.15s;\n  min-width: 2.75rem;\n  min-height: 2.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  touch-action: manipulation;\n}\n.menu-btn svg {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.menu-btn:hover {\n  background: var(--clr-surface-alt);\n}\n.topbar-label {\n  font-family: var(--font-display);\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--clr-text);\n}\n.topbar-new {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.75rem;\n  height: 2.75rem;\n  background: var(--clr-brand);\n  color: #ffffff;\n  border-radius: var(--radius-sm);\n  text-decoration: none;\n  transition: background 0.15s;\n  touch-action: manipulation;\n}\n.topbar-new svg {\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.topbar-new:hover {\n  background: var(--clr-brand-dark);\n}\n.main-wrap {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.page-content {\n  flex: 1;\n}\n.bottom-nav {\n  display: none;\n}\n@media (max-width: 768px) {\n  .shell {\n    display: block;\n    min-height: calc(100vh - 3.75rem);\n  }\n  .sidebar {\n    display: none;\n  }\n  .sidebar-overlay {\n    display: none;\n  }\n  .desktop-topbar {\n    display: none;\n  }\n  .mobile-topbar {\n    display: flex;\n  }\n  .page-content {\n    min-height: calc(100vh - 3.75rem - 4rem);\n    padding-bottom: 4rem;\n  }\n  .bottom-nav {\n    display: flex;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 4rem;\n    background: var(--clr-surface);\n    border-top: 1px solid var(--clr-border-faint);\n    z-index: 30;\n    box-shadow: 0 -2px 12px rgba(28, 25, 23, 0.06);\n  }\n  .bottom-nav-item {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: var(--space-1);\n    text-decoration: none;\n    color: var(--clr-text-muted);\n    font-size: 0.65rem;\n    font-weight: 500;\n    transition: color 0.15s, background 0.15s;\n    touch-action: manipulation;\n    min-height: 4rem;\n  }\n  .bottom-nav-item svg {\n    width: 1.25rem;\n    height: 1.25rem;\n    flex-shrink: 0;\n  }\n  .bottom-nav-item:hover {\n    color: var(--clr-brand);\n    background: color-mix(in oklch, var(--clr-brand) 5%, transparent);\n  }\n  .bottom-nav-item.active {\n    color: var(--clr-brand);\n    font-weight: 600;\n  }\n  .bottom-nav-item.active svg {\n    stroke-width: 2.5;\n  }\n  .bottom-nav-add {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .bottom-nav-add-btn {\n    width: 2.75rem;\n    height: 2.75rem;\n    background: var(--clr-brand);\n    color: #ffffff;\n    border-radius: var(--radius-circle);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: var(--shadow-md);\n    transition: background 0.15s, transform 0.15s;\n  }\n  .bottom-nav-add-btn svg {\n    width: 1.1rem;\n    height: 1.1rem;\n  }\n  .bottom-nav-add-btn:hover {\n    background: var(--clr-brand-dark);\n    transform: scale(1.08);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .sidebar-cta,\n  .nav-item,\n  .bottom-nav-add-btn {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=dashboard-layout.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardLayoutComponent, { className: "DashboardLayoutComponent", filePath: "src/app/pages/dashboard-layout/dashboard-layout.component.ts", lineNumber: 593 });
})();
export {
  DashboardLayoutComponent
};
//# sourceMappingURL=chunk-FNSPJFVX.js.map
