import {
  AuthService
} from "./chunk-NMKHPTKL.js";
import "./chunk-GL5TQRYS.js";
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
} from "./chunk-LVOWXKII.js";

// src/app/pages/dashboard-layout/dashboard-layout.component.ts
var _c0 = () => ({ exact: true });
function DashboardLayoutComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function DashboardLayoutComponent_Conditional_71_Template_div_click_0_listener() {
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
  static \u0275fac = function DashboardLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardLayoutComponent, selectors: [["app-dashboard-layout"]], decls: 119, vars: 11, consts: [[1, "shell"], [1, "sidebar"], [1, "sidebar-header"], [1, "sidebar-brand"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["x", "3", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "14", "width", "7", "height", "7", "rx", "1"], ["x", "3", "y", "14", "width", "7", "height", "7", "rx", "1"], ["aria-label", "\u0417\u0430\u0442\u0432\u043E\u0440\u0438 \u043C\u0435\u043D\u044E\u0442\u043E", "touch-action", "manipulation", 1, "sidebar-close", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["aria-label", "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u0432 \u0442\u0430\u0431\u043B\u043E\u0442\u043E", 1, "sidebar-nav", "sidebar-nav-primary"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-item", 3, "click", "routerLinkActiveOptions"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["routerLink", "/dashboard/recipes", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["routerLink", "/dashboard/comments", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], ["routerLink", "/dashboard/favorites", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"], [1, "sidebar-sep"], ["aria-label", "\u0414\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435\u043B\u043D\u0438 \u0432\u0440\u044A\u0437\u043A\u0438", 1, "sidebar-nav", "sidebar-nav-secondary"], ["routerLink", "/profile", "routerLinkActive", "active", 1, "nav-item", 3, "click"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["routerLink", "/recipes", 1, "nav-item", "nav-item-external", 3, "click"], ["d", "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"], ["points", "15 3 21 3 21 9"], ["x1", "10", "y1", "14", "x2", "21", "y2", "3"], [1, "nav-item", "nav-item-logout", 3, "click"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "sidebar-user"], ["aria-hidden", "true", 1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-role"], ["aria-hidden", "true", 1, "sidebar-overlay"], [1, "main-wrap"], [1, "mobile-topbar"], ["aria-label", "\u041E\u0442\u0432\u043E\u0440\u0438 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F\u0442\u0430", 1, "menu-btn", 3, "click"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["x1", "3", "y1", "12", "x2", "21", "y2", "12"], ["x1", "3", "y1", "18", "x2", "21", "y2", "18"], [1, "topbar-label"], ["routerLink", "/dashboard/recipes/new", "aria-label", "\u041D\u043E\u0432\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430", 1, "topbar-new"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "page-content"], ["aria-label", "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u0432 \u0442\u0430\u0431\u043B\u043E\u0442\u043E", 1, "bottom-nav"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "bottom-nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/dashboard/recipes", "routerLinkActive", "active", 1, "bottom-nav-item"], [1, "bottom-nav-add"], ["routerLink", "/dashboard/recipes/new", "aria-label", "\u041D\u043E\u0432\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430", 1, "bottom-nav-add-btn"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "aria-hidden", "true"], ["routerLink", "/dashboard/comments", "routerLinkActive", "active", 1, "bottom-nav-item"], ["routerLink", "/dashboard/favorites", "routerLinkActive", "active", 1, "bottom-nav-item"], ["aria-hidden", "true", 1, "sidebar-overlay", 3, "click"]], template: function DashboardLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "rect", 5)(6, "rect", 6)(7, "rect", 7)(8, "rect", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " \u0422\u0430\u0431\u043B\u043E ");
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
      \u0275\u0275elementStart(14, "nav", 13)(15, "a", 14);
      \u0275\u0275listener("click", function DashboardLayoutComponent_Template_a_click_15_listener() {
        return ctx.sidebarOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 15);
      \u0275\u0275element(17, "rect", 5)(18, "rect", 6)(19, "rect", 7)(20, "rect", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "span");
      \u0275\u0275text(22, "\u041F\u0440\u0435\u0433\u043B\u0435\u0434");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "a", 16);
      \u0275\u0275listener("click", function DashboardLayoutComponent_Template_a_click_23_listener() {
        return ctx.sidebarOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 15);
      \u0275\u0275element(25, "path", 17)(26, "polyline", 18)(27, "line", 19)(28, "line", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275text(30, "\u0420\u0435\u0446\u0435\u043F\u0442\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "a", 21);
      \u0275\u0275listener("click", function DashboardLayoutComponent_Template_a_click_31_listener() {
        return ctx.sidebarOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 15);
      \u0275\u0275element(33, "path", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(34, "span");
      \u0275\u0275text(35, "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "a", 23);
      \u0275\u0275listener("click", function DashboardLayoutComponent_Template_a_click_36_listener() {
        return ctx.sidebarOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(37, "svg", 15);
      \u0275\u0275element(38, "path", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(39, "span");
      \u0275\u0275text(40, "\u041B\u044E\u0431\u0438\u043C\u0438");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(41, "div", 25);
      \u0275\u0275elementStart(42, "nav", 26)(43, "a", 27);
      \u0275\u0275listener("click", function DashboardLayoutComponent_Template_a_click_43_listener() {
        return ctx.sidebarOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(44, "svg", 15);
      \u0275\u0275element(45, "path", 28)(46, "circle", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(47, "span");
      \u0275\u0275text(48, "\u041F\u0440\u043E\u0444\u0438\u043B");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "a", 30);
      \u0275\u0275listener("click", function DashboardLayoutComponent_Template_a_click_49_listener() {
        return ctx.sidebarOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(50, "svg", 15);
      \u0275\u0275element(51, "path", 31)(52, "polyline", 32)(53, "line", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(54, "span");
      \u0275\u0275text(55, "\u0412\u0438\u0436 \u0431\u043B\u043E\u0433\u0430");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "button", 34);
      \u0275\u0275listener("click", function DashboardLayoutComponent_Template_button_click_56_listener() {
        return ctx.auth.logout();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(57, "svg", 15);
      \u0275\u0275element(58, "path", 35)(59, "polyline", 36)(60, "line", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(61, "span");
      \u0275\u0275text(62, "\u0418\u0437\u0445\u043E\u0434");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "div", 38)(64, "div", 39);
      \u0275\u0275text(65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 40)(67, "span", 41);
      \u0275\u0275text(68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "span", 42);
      \u0275\u0275text(70);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(71, DashboardLayoutComponent_Conditional_71_Template, 1, 0, "div", 43);
      \u0275\u0275elementStart(72, "div", 44)(73, "div", 45)(74, "button", 46);
      \u0275\u0275listener("click", function DashboardLayoutComponent_Template_button_click_74_listener() {
        return ctx.sidebarOpen.set(true);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(75, "svg", 10);
      \u0275\u0275element(76, "line", 47)(77, "line", 48)(78, "line", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(79, "span", 50);
      \u0275\u0275text(80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "a", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(82, "svg", 10);
      \u0275\u0275element(83, "line", 52)(84, "line", 53);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(85, "div", 54);
      \u0275\u0275element(86, "router-outlet");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "nav", 55)(88, "a", 56);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(89, "svg", 15);
      \u0275\u0275element(90, "rect", 5)(91, "rect", 6)(92, "rect", 7)(93, "rect", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(94, "span");
      \u0275\u0275text(95, "\u041F\u0440\u0435\u0433\u043B\u0435\u0434");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "a", 57);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(97, "svg", 15);
      \u0275\u0275element(98, "path", 17)(99, "polyline", 18)(100, "line", 19)(101, "line", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(102, "span");
      \u0275\u0275text(103, "\u0420\u0435\u0446\u0435\u043F\u0442\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div", 58)(105, "a", 59);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(106, "svg", 60);
      \u0275\u0275element(107, "line", 52)(108, "line", 53);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(109, "a", 61);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(110, "svg", 15);
      \u0275\u0275element(111, "path", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(112, "span");
      \u0275\u0275text(113, "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "a", 62);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(115, "svg", 15);
      \u0275\u0275element(116, "path", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(117, "span");
      \u0275\u0275text(118, "\u041B\u044E\u0431\u0438\u043C\u0438");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.sidebarOpen());
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance(50);
      \u0275\u0275textInterpolate(ctx.userInitial());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate((tmp_3_0 = ctx.auth.user()) == null ? null : tmp_3_0.name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.auth.isAdmin() ? "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440" : "\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.sidebarOpen() ? 71 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.pageTitle());
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(10, _c0));
    }
  }, dependencies: [RouterLink, RouterLinkActive, RouterOutlet], styles: ['@charset "UTF-8";\n\n\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: calc(100vh - 4rem);\n  background: #f5f0e8;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 220px;\n  flex-shrink: 0;\n  background: #1c1917;\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 4rem;\n  height: calc(100vh - 4rem);\n  overflow-y: auto;\n  z-index: 40;\n  scrollbar-width: none;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1rem 0.75rem;\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-family: "Georgia", serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #fafaf9;\n  letter-spacing: -0.01em;\n}\n.sidebar-brand[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  color: #78350f;\n}\n.sidebar-close[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  color: #a8a29e;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 0.375rem;\n  transition: color 0.2s, background 0.2s;\n  touch-action: manipulation;\n}\n.sidebar-close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.sidebar-close[_ngcontent-%COMP%]:hover {\n  color: #fafaf9;\n  background: rgba(255, 255, 255, 0.08);\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n  padding: 0.5rem 0.75rem;\n}\n.sidebar-nav-secondary[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0.6rem 0.75rem;\n  border-radius: 0.625rem;\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #a8a29e;\n  transition: background 0.18s var(--ease-out-expo), color 0.18s var(--ease-out-expo);\n  touch-action: manipulation;\n  min-height: 2.75rem;\n}\n.nav-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: #e7e5e4;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(120, 53, 15, 0.28);\n  color: #fafaf9;\n  font-weight: 600;\n}\n.nav-item-external[_ngcontent-%COMP%] {\n  opacity: 0.85;\n}\n.nav-item-external[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.nav-item-logout[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  color: #f87171;\n  display: none;\n}\n.nav-item-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.1);\n  color: #ef4444;\n}\n.sidebar-sep[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 0.5rem 0.75rem;\n}\n.sidebar-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.875rem 1rem;\n  margin-top: auto;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background: #78350f;\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n  min-width: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #fafaf9;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-role[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #78716c;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.sidebar-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 39;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.mobile-topbar[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  background: #fff;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.07);\n  position: sticky;\n  top: 4rem;\n  z-index: 30;\n}\n.menu-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #1c1917;\n  cursor: pointer;\n  padding: 0.4rem;\n  border-radius: 0.5rem;\n  transition: background 0.2s;\n  min-width: 2.75rem;\n  min-height: 2.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  touch-action: manipulation;\n}\n.menu-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.menu-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f0e8;\n}\n.topbar-label[_ngcontent-%COMP%] {\n  font-family: "Georgia", serif;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1c1917;\n}\n.topbar-new[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.75rem;\n  height: 2.75rem;\n  background: #4a7c59;\n  color: #fff;\n  border-radius: 0.75rem;\n  text-decoration: none;\n  transition: background 0.2s;\n  touch-action: manipulation;\n}\n.topbar-new[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.topbar-new[_ngcontent-%COMP%]:hover {\n  background: #3a6347;\n}\n.main-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.page-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.bottom-nav[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .shell[_ngcontent-%COMP%] {\n    display: block;\n    min-height: calc(100vh - 4rem);\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sidebar-overlay[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-topbar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .page-content[_ngcontent-%COMP%] {\n    min-height: calc(100vh - 4rem - 4rem);\n    padding-bottom: 4rem;\n  }\n  .bottom-nav[_ngcontent-%COMP%] {\n    display: flex;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 4rem;\n    background: #fff;\n    border-top: 1px solid rgba(0, 0, 0, 0.08);\n    z-index: 30;\n    box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.06);\n  }\n  .bottom-nav-item[_ngcontent-%COMP%] {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 0.2rem;\n    text-decoration: none;\n    color: #a8a29e;\n    font-size: 0.65rem;\n    font-weight: 500;\n    transition: color 0.18s, background 0.18s;\n    touch-action: manipulation;\n    min-height: 4rem;\n  }\n  .bottom-nav-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 1.25rem;\n    height: 1.25rem;\n    flex-shrink: 0;\n  }\n  .bottom-nav-item[_ngcontent-%COMP%]:hover {\n    color: #78350f;\n    background: rgba(120, 53, 15, 0.04);\n  }\n  .bottom-nav-item.active[_ngcontent-%COMP%] {\n    color: #78350f;\n    font-weight: 600;\n  }\n  .bottom-nav-item.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    stroke-width: 2.5;\n  }\n  .bottom-nav-add[_ngcontent-%COMP%] {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .bottom-nav-add-btn[_ngcontent-%COMP%] {\n    width: 2.75rem;\n    height: 2.75rem;\n    background: #78350f;\n    color: #fff;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 0 2px 10px rgba(120, 53, 15, 0.4);\n    transition: background 0.18s, transform 0.15s;\n  }\n  .bottom-nav-add-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 1.1rem;\n    height: 1.1rem;\n  }\n  .bottom-nav-add-btn[_ngcontent-%COMP%]:hover {\n    background: #6c2d0c;\n    transform: scale(1.08);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .sidebar[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=dashboard-layout.component.css.map */'], changeDetection: 0 });
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
            \u0422\u0430\u0431\u043B\u043E
          </span>
          <button class="sidebar-close" (click)="sidebarOpen.set(false)" aria-label="\u0417\u0430\u0442\u0432\u043E\u0440\u0438 \u043C\u0435\u043D\u044E\u0442\u043E" touch-action="manipulation">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <nav class="sidebar-nav sidebar-nav-primary" aria-label="\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u0432 \u0442\u0430\u0431\u043B\u043E\u0442\u043E">
          <a routerLink="/dashboard" routerLinkActive="active"
             [routerLinkActiveOptions]="{exact: true}"
             class="nav-item" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
            <span>\u041F\u0440\u0435\u0433\u043B\u0435\u0434</span>
          </a>
          <a routerLink="/dashboard/recipes" routerLinkActive="active"
             class="nav-item" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            <span>\u0420\u0435\u0446\u0435\u043F\u0442\u0438</span>
          </a>
          <a routerLink="/dashboard/comments" routerLinkActive="active"
             class="nav-item" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <span>\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438</span>
          </a>
          <a routerLink="/dashboard/favorites" routerLinkActive="active"
             class="nav-item" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <span>\u041B\u044E\u0431\u0438\u043C\u0438</span>
          </a>
        </nav>

        <div class="sidebar-sep"></div>

        <nav class="sidebar-nav sidebar-nav-secondary" aria-label="\u0414\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435\u043B\u043D\u0438 \u0432\u0440\u044A\u0437\u043A\u0438">
          <a routerLink="/profile" routerLinkActive="active"
             class="nav-item" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span>\u041F\u0440\u043E\u0444\u0438\u043B</span>
          </a>
          <a routerLink="/recipes" class="nav-item nav-item-external" (click)="sidebarOpen.set(false)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            <span>\u0412\u0438\u0436 \u0431\u043B\u043E\u0433\u0430</span>
          </a>
          <button class="nav-item nav-item-logout" (click)="auth.logout()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
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

        <!-- Mobile topbar -->
        <div class="mobile-topbar">
          <button class="menu-btn" (click)="sidebarOpen.set(true)" aria-label="\u041E\u0442\u0432\u043E\u0440\u0438 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F\u0442\u0430">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
          <span class="topbar-label">{{ pageTitle() }}</span>
          <a routerLink="/dashboard/recipes/new" class="topbar-new" aria-label="\u041D\u043E\u0432\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
        <span>\u041F\u0440\u0435\u0433\u043B\u0435\u0434</span>
      </a>
      <a routerLink="/dashboard/recipes" routerLinkActive="active" class="bottom-nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        <span>\u0420\u0435\u0446\u0435\u043F\u0442\u0438</span>
      </a>
      <div class="bottom-nav-add">
        <a routerLink="/dashboard/recipes/new" aria-label="\u041D\u043E\u0432\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430" class="bottom-nav-add-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </a>
      </div>
      <a routerLink="/dashboard/comments" routerLinkActive="active" class="bottom-nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <span>\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438</span>
      </a>
      <a routerLink="/dashboard/favorites" routerLinkActive="active" class="bottom-nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        <span>\u041B\u044E\u0431\u0438\u043C\u0438</span>
      </a>
    </nav>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;788f6e235e7e5cafafbfd796393bb81f42a6f689eb8cc365a5c23fadac749273;C:/Users/ipene/Desktop/Blog-System-Angular/frontend/src/app/pages/dashboard-layout/dashboard-layout.component.ts */\n.shell {\n  display: flex;\n  min-height: calc(100vh - 4rem);\n  background: #f5f0e8;\n}\n.sidebar {\n  width: 220px;\n  flex-shrink: 0;\n  background: #1c1917;\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 4rem;\n  height: calc(100vh - 4rem);\n  overflow-y: auto;\n  z-index: 40;\n  scrollbar-width: none;\n}\n.sidebar::-webkit-scrollbar {\n  display: none;\n}\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1rem 0.75rem;\n}\n.sidebar-brand {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-family: "Georgia", serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #fafaf9;\n  letter-spacing: -0.01em;\n}\n.sidebar-brand svg {\n  width: 1rem;\n  height: 1rem;\n  color: #78350f;\n}\n.sidebar-close {\n  display: none;\n  background: none;\n  border: none;\n  color: #a8a29e;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 0.375rem;\n  transition: color 0.2s, background 0.2s;\n  touch-action: manipulation;\n}\n.sidebar-close svg {\n  width: 1rem;\n  height: 1rem;\n}\n.sidebar-close:hover {\n  color: #fafaf9;\n  background: rgba(255, 255, 255, 0.08);\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n  padding: 0.5rem 0.75rem;\n}\n.sidebar-nav-secondary {\n  padding-top: 0;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0.6rem 0.75rem;\n  border-radius: 0.625rem;\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #a8a29e;\n  transition: background 0.18s var(--ease-out-expo), color 0.18s var(--ease-out-expo);\n  touch-action: manipulation;\n  min-height: 2.75rem;\n}\n.nav-item svg {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.nav-item:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: #e7e5e4;\n}\n.nav-item.active {\n  background: rgba(120, 53, 15, 0.28);\n  color: #fafaf9;\n  font-weight: 600;\n}\n.nav-item-external {\n  opacity: 0.85;\n}\n.nav-item-external:hover {\n  opacity: 1;\n}\n.nav-item-logout {\n  background: none;\n  border: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  color: #f87171;\n  display: none;\n}\n.nav-item-logout:hover {\n  background: rgba(248, 113, 113, 0.1);\n  color: #ef4444;\n}\n.sidebar-sep {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 0.5rem 0.75rem;\n}\n.sidebar-user {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.875rem 1rem;\n  margin-top: auto;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n}\n.user-avatar {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background: #78350f;\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.user-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n  min-width: 0;\n}\n.user-name {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #fafaf9;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-role {\n  font-size: 0.7rem;\n  color: #78716c;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.sidebar-overlay {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 39;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.mobile-topbar {\n  display: none;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  background: #fff;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.07);\n  position: sticky;\n  top: 4rem;\n  z-index: 30;\n}\n.menu-btn {\n  background: none;\n  border: none;\n  color: #1c1917;\n  cursor: pointer;\n  padding: 0.4rem;\n  border-radius: 0.5rem;\n  transition: background 0.2s;\n  min-width: 2.75rem;\n  min-height: 2.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  touch-action: manipulation;\n}\n.menu-btn svg {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.menu-btn:hover {\n  background: #f5f0e8;\n}\n.topbar-label {\n  font-family: "Georgia", serif;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1c1917;\n}\n.topbar-new {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.75rem;\n  height: 2.75rem;\n  background: #4a7c59;\n  color: #fff;\n  border-radius: 0.75rem;\n  text-decoration: none;\n  transition: background 0.2s;\n  touch-action: manipulation;\n}\n.topbar-new svg {\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.topbar-new:hover {\n  background: #3a6347;\n}\n.main-wrap {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.page-content {\n  flex: 1;\n}\n.bottom-nav {\n  display: none;\n}\n@media (max-width: 768px) {\n  .shell {\n    display: block;\n    min-height: calc(100vh - 4rem);\n  }\n  .sidebar {\n    display: none;\n  }\n  .sidebar-overlay {\n    display: none;\n  }\n  .mobile-topbar {\n    display: none;\n  }\n  .page-content {\n    min-height: calc(100vh - 4rem - 4rem);\n    padding-bottom: 4rem;\n  }\n  .bottom-nav {\n    display: flex;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 4rem;\n    background: #fff;\n    border-top: 1px solid rgba(0, 0, 0, 0.08);\n    z-index: 30;\n    box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.06);\n  }\n  .bottom-nav-item {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 0.2rem;\n    text-decoration: none;\n    color: #a8a29e;\n    font-size: 0.65rem;\n    font-weight: 500;\n    transition: color 0.18s, background 0.18s;\n    touch-action: manipulation;\n    min-height: 4rem;\n  }\n  .bottom-nav-item svg {\n    width: 1.25rem;\n    height: 1.25rem;\n    flex-shrink: 0;\n  }\n  .bottom-nav-item:hover {\n    color: #78350f;\n    background: rgba(120, 53, 15, 0.04);\n  }\n  .bottom-nav-item.active {\n    color: #78350f;\n    font-weight: 600;\n  }\n  .bottom-nav-item.active svg {\n    stroke-width: 2.5;\n  }\n  .bottom-nav-add {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .bottom-nav-add-btn {\n    width: 2.75rem;\n    height: 2.75rem;\n    background: #78350f;\n    color: #fff;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 0 2px 10px rgba(120, 53, 15, 0.4);\n    transition: background 0.18s, transform 0.15s;\n  }\n  .bottom-nav-add-btn svg {\n    width: 1.1rem;\n    height: 1.1rem;\n  }\n  .bottom-nav-add-btn:hover {\n    background: #6c2d0c;\n    transform: scale(1.08);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .sidebar {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=dashboard-layout.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardLayoutComponent, { className: "DashboardLayoutComponent", filePath: "src/app/pages/dashboard-layout/dashboard-layout.component.ts", lineNumber: 426 });
})();
export {
  DashboardLayoutComponent
};
//# sourceMappingURL=chunk-7AKRPNQ6.js.map
