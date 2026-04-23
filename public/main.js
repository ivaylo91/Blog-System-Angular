import {
  ToastService
} from "./chunk-VHJLHV5Z.js";
import {
  takeUntilDestroyed
} from "./chunk-OOSWPAHX.js";
import {
  AuthService
} from "./chunk-NMKHPTKL.js";
import "./chunk-GL5TQRYS.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Observable,
  PLATFORM_ID,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  effect,
  inject,
  isPlatformBrowser,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideRouter,
  provideZonelessChangeDetection,
  setClassMetadata,
  signal,
  tap,
  withFetch,
  withInMemoryScrolling,
  withInterceptors,
  withPreloading,
  withViewTransitions,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LVOWXKII.js";

// src/app/guards/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isAuthenticated()) {
    return true;
  }
  return router.createUrlTree(["/signin"]);
};
var guestGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isAuthenticated()) {
    return true;
  }
  return router.createUrlTree(["/"]);
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-NQNI7EA4.js").then((m) => m.HomeComponent)
  },
  {
    path: "recipes",
    loadComponent: () => import("./chunk-YOYT4BPY.js").then((m) => m.RecipesComponent)
  },
  {
    path: "recipes/:slug",
    loadComponent: () => import("./chunk-GK4AOYR5.js").then((m) => m.RecipeDetailComponent)
  },
  {
    path: "signin",
    canActivate: [guestGuard],
    loadComponent: () => import("./chunk-TILVVWRC.js").then((m) => m.SigninComponent)
  },
  {
    path: "register",
    canActivate: [guestGuard],
    loadComponent: () => import("./chunk-2PSVY7HJ.js").then((m) => m.RegisterComponent)
  },
  {
    path: "profile",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-ITJOSHRV.js").then((m) => m.ProfileComponent)
  },
  // Recipe editor — full-page, no sidebar
  {
    path: "dashboard/recipes/new",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-LN6RL7DQ.js").then((m) => m.DashboardRecipeEditComponent)
  },
  {
    path: "dashboard/recipes/:slug/edit",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-LN6RL7DQ.js").then((m) => m.DashboardRecipeEditComponent)
  },
  // Dashboard shell — all overview pages share the sidebar layout
  {
    path: "dashboard",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-7AKRPNQ6.js").then((m) => m.DashboardLayoutComponent),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-CX4B2AO3.js").then((m) => m.DashboardComponent)
      },
      {
        path: "recipes",
        loadComponent: () => import("./chunk-4XCUCDF3.js").then((m) => m.DashboardRecipesComponent)
      },
      {
        path: "comments",
        loadComponent: () => import("./chunk-7XNGVO6N.js").then((m) => m.DashboardCommentsComponent)
      },
      {
        path: "favorites",
        loadComponent: () => import("./chunk-Q67XGUFI.js").then((m) => m.DashboardFavoritesComponent)
      }
    ]
  },
  {
    path: "privacy",
    loadComponent: () => import("./chunk-OHUN4ICT.js").then((m) => m.PrivacyComponent)
  },
  {
    path: "**",
    loadComponent: () => import("./chunk-LRKWW6WH.js").then((m) => m.NotFoundComponent)
  }
];

// src/app/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const router = inject(Router);
  req = req.clone({
    setHeaders: { Accept: "application/json" },
    withCredentials: true
  });
  return next(req).pipe(tap({
    error: (err) => {
      if (err.status === 401) {
        const hadUser = !!localStorage.getItem("user");
        localStorage.removeItem("user");
        if (hadUser) {
          router.navigate(["/signin"]);
        }
      }
    }
  }));
};

// src/app/strategies/idle-preload.strategy.ts
var IdlePreloadStrategy = class _IdlePreloadStrategy {
  preload(route, load) {
    return new Observable((observer) => {
      const run = () => load().subscribe({
        next: (v) => observer.next(v),
        error: () => observer.complete(),
        complete: () => observer.complete()
      });
      if (typeof requestIdleCallback !== "undefined") {
        requestIdleCallback(run, { timeout: 5e3 });
      } else {
        setTimeout(run, 3e3);
      }
    });
  }
  static \u0275fac = function IdlePreloadStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IdlePreloadStrategy)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IdlePreloadStrategy, factory: _IdlePreloadStrategy.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IdlePreloadStrategy, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withPreloading(IdlePreloadStrategy), withInMemoryScrolling({ scrollPositionRestoration: "top", anchorScrolling: "enabled" }), withViewTransitions({ skipInitialTransition: true })),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor]))
  ]
};

// src/app/services/theme.service.ts
var ThemeService = class _ThemeService {
  platformId = inject(PLATFORM_ID);
  theme = signal(this.loadSaved(), ...ngDevMode ? [{ debugName: "theme" }] : (
    /* istanbul ignore next */
    []
  ));
  isDark = signal(this.resolveIsDark(this.loadSaved()), ...ngDevMode ? [{ debugName: "isDark" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect(() => {
      const t = this.theme();
      this.isDark.set(this.resolveIsDark(t));
      this.applyToDOM(t);
      this.save(t);
    });
    if (isPlatformBrowser(this.platformId)) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
        if (this.theme() === "system") {
          this.isDark.set(window.matchMedia("(prefers-color-scheme: dark)").matches);
          this.applyToDOM("system");
        }
      });
    }
  }
  toggle() {
    this.theme.set(this.isDark() ? "light" : "dark");
  }
  resolveIsDark(t) {
    if (!isPlatformBrowser(this.platformId))
      return false;
    if (t === "dark")
      return true;
    if (t === "light")
      return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  applyToDOM(t) {
    if (!isPlatformBrowser(this.platformId))
      return;
    const html = document.documentElement;
    html.classList.remove("dark", "light");
    if (t === "dark")
      html.classList.add("dark");
    if (t === "light")
      html.classList.add("light");
  }
  save(t) {
    if (isPlatformBrowser(this.platformId))
      localStorage.setItem("theme", t);
  }
  loadSaved() {
    if (!isPlatformBrowser(this.platformId))
      return "system";
    return localStorage.getItem("theme") ?? "system";
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/components/header/header.component.ts
var _c0 = () => ({ exact: true });
function HeaderComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 40);
    \u0275\u0275text(1, "\u0422\u0430\u0431\u043B\u043E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 41);
    \u0275\u0275text(3, "\u041F\u0440\u043E\u0444\u0438\u043B");
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "circle", 42)(2, "line", 43)(3, "line", 44)(4, "line", 45)(5, "line", 46)(6, "line", 47)(7, "line", 48)(8, "line", 49)(9, "line", 50);
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 51);
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.auth.logout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 53);
    \u0275\u0275element(2, "path", 54)(3, "polyline", 55)(4, "line", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u0418\u0437\u0445\u043E\u0434 ");
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 57);
    \u0275\u0275text(1, "\u0412\u0445\u043E\u0434");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 58);
    \u0275\u0275text(3, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F");
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "circle", 42)(2, "line", 43)(3, "line", 44)(4, "line", 45)(5, "line", 46)(6, "line", 47)(7, "line", 48)(8, "line", 49)(9, "line", 50);
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 51);
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61)(4, "span", 62);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 63);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(8, "div", 64);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.userInitial());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r1.auth.user()) == null ? null : tmp_2_0.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.auth.isAdmin() ? "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440" : "\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B");
  }
}
function HeaderComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 65);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_57_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "rect", 66)(3, "rect", 67)(4, "rect", 68)(5, "rect", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \u0422\u0430\u0431\u043B\u043E ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "a", 70);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_57_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 17);
    \u0275\u0275element(9, "path", 71)(10, "circle", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " \u041F\u0440\u043E\u0444\u0438\u043B ");
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_59_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.auth.logout();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "path", 54)(3, "polyline", 55)(4, "line", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u0418\u0437\u0445\u043E\u0434 ");
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 74);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_60_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(1, "\u0412\u0445\u043E\u0434");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 75);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_60_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(3, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F");
    \u0275\u0275elementEnd();
  }
}
var HeaderComponent = class _HeaderComponent {
  auth = inject(AuthService);
  theme = inject(ThemeService);
  drawerOpen = signal(false, ...ngDevMode ? [{ debugName: "drawerOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  scrolled = signal(false, ...ngDevMode ? [{ debugName: "scrolled" }] : (
    /* istanbul ignore next */
    []
  ));
  openDrawer() {
    this.drawerOpen.set(true);
    document.body.style.overflow = "hidden";
  }
  close() {
    this.drawerOpen.set(false);
    document.body.style.overflow = "";
  }
  userInitial() {
    const name = this.auth.user()?.name || "";
    return name.charAt(0).toUpperCase() || "?";
  }
  scrollHandler = () => this.scrolled.set(window.scrollY > 30);
  ngOnInit() {
    window.addEventListener("scroll", this.scrollHandler, { passive: true });
  }
  ngOnDestroy() {
    window.removeEventListener("scroll", this.scrollHandler);
    document.body.style.overflow = "";
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], decls: 61, vars: 21, consts: [[1, "site-header"], [1, "header-inner"], ["aria-label", "\u041E\u0442\u0432\u043E\u0440\u0438 \u043C\u0435\u043D\u044E\u0442\u043E", 1, "mobile-toggle", 3, "click"], [1, "hamburger"], ["routerLink", "/", 1, "brand"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", 1, "brand-icon"], ["d", "M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"], ["d", "M3 11h18v2a7 7 0 0 1-14 0H3z"], ["x1", "9", "y1", "20", "x2", "15", "y2", "20"], ["x1", "12", "y1", "17", "x2", "12", "y2", "20"], [1, "brand-text"], [1, "nav-links"], [1, "nav-main"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/recipes", "routerLinkActive", "active"], [1, "nav-auth"], [1, "theme-toggle", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], [1, "logout-btn"], ["aria-hidden", "true", 1, "drawer-overlay", 3, "click"], ["role", "dialog", "aria-label", "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F", 1, "mobile-drawer"], [1, "drawer-header"], ["routerLink", "/", 1, "drawer-brand", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], [1, "drawer-header-actions"], ["aria-label", "\u0417\u0430\u0442\u0432\u043E\u0440\u0438 \u043C\u0435\u043D\u044E\u0442\u043E", 1, "drawer-close", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "drawer-nav"], ["routerLink", "/", "routerLinkActive", "active", 1, "drawer-item", 3, "click", "routerLinkActiveOptions"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9 22 9 12 15 12 15 22"], ["routerLink", "/recipes", "routerLinkActive", "active", 1, "drawer-item", 3, "click"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], [1, "drawer-footer"], [1, "drawer-logout"], ["routerLink", "/dashboard", "routerLinkActive", "active"], ["routerLink", "/profile", "routerLinkActive", "active"], ["cx", "12", "cy", "12", "r", "5"], ["x1", "12", "y1", "1", "x2", "12", "y2", "3"], ["x1", "12", "y1", "21", "x2", "12", "y2", "23"], ["x1", "4.22", "y1", "4.22", "x2", "5.64", "y2", "5.64"], ["x1", "18.36", "y1", "18.36", "x2", "19.78", "y2", "19.78"], ["x1", "1", "y1", "12", "x2", "3", "y2", "12"], ["x1", "21", "y1", "12", "x2", "23", "y2", "12"], ["x1", "4.22", "y1", "19.78", "x2", "5.64", "y2", "18.36"], ["x1", "18.36", "y1", "5.64", "x2", "19.78", "y2", "4.22"], ["d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"], [1, "logout-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], ["routerLink", "/signin", "routerLinkActive", "active", 1, "signin-link"], ["routerLink", "/register", "routerLinkActive", "active", 1, "register-btn"], [1, "drawer-user"], [1, "drawer-avatar"], [1, "drawer-user-info"], [1, "drawer-user-name"], [1, "drawer-user-role"], [1, "drawer-sep"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "drawer-item", 3, "click"], ["x", "3", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "14", "width", "7", "height", "7", "rx", "1"], ["x", "3", "y", "14", "width", "7", "height", "7", "rx", "1"], ["routerLink", "/profile", "routerLinkActive", "active", 1, "drawer-item", 3, "click"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "drawer-logout", 3, "click"], ["routerLink", "/signin", 1, "drawer-signin", 3, "click"], ["routerLink", "/register", 1, "drawer-register", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_2_listener() {
        return ctx.openDrawer();
      });
      \u0275\u0275element(3, "span", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6)(7, "path", 7)(8, "line", 8)(9, "line", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "span", 10);
      \u0275\u0275text(11, "\u041A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F\u0442 \u0431\u043B\u043E\u0433 \u043D\u0430 \u0418\u0432\u043E");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "nav", 11)(13, "div", 12)(14, "a", 13);
      \u0275\u0275text(15, "\u041D\u0430\u0447\u0430\u043B\u043E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 14);
      \u0275\u0275text(17, "\u0420\u0435\u0446\u0435\u043F\u0442\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(18, HeaderComponent_Conditional_18_Template, 4, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 15)(20, "button", 16);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_20_listener() {
        return ctx.theme.toggle();
      });
      \u0275\u0275conditionalCreate(21, HeaderComponent_Conditional_21_Template, 10, 0, ":svg:svg", 17)(22, HeaderComponent_Conditional_22_Template, 2, 0, ":svg:svg", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(23, HeaderComponent_Conditional_23_Template, 6, 0, "button", 18)(24, HeaderComponent_Conditional_24_Template, 4, 0);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(25, "div", 19);
      \u0275\u0275listener("click", function HeaderComponent_Template_div_click_25_listener() {
        return ctx.close();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 20)(27, "div", 21)(28, "a", 22);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_28_listener() {
        return ctx.close();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 23);
      \u0275\u0275element(30, "path", 6)(31, "path", 7)(32, "line", 8)(33, "line", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275text(34, " \u041A\u0443\u043B\u0438\u043D\u0430\u0440\u0435\u043D \u0431\u043B\u043E\u0433 ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(35, "div", 24)(36, "button", 16);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_36_listener() {
        return ctx.theme.toggle();
      });
      \u0275\u0275conditionalCreate(37, HeaderComponent_Conditional_37_Template, 10, 0, ":svg:svg", 17)(38, HeaderComponent_Conditional_38_Template, 2, 0, ":svg:svg", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "button", 25);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_39_listener() {
        return ctx.close();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(40, "svg", 26);
      \u0275\u0275element(41, "line", 27)(42, "line", 28);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(43, HeaderComponent_Conditional_43_Template, 9, 3);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(44, "nav", 29)(45, "a", 30);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_45_listener() {
        return ctx.close();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(46, "svg", 17);
      \u0275\u0275element(47, "path", 31)(48, "polyline", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275text(49, " \u041D\u0430\u0447\u0430\u043B\u043E ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(50, "a", 33);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_50_listener() {
        return ctx.close();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(51, "svg", 17);
      \u0275\u0275element(52, "path", 34)(53, "polyline", 35)(54, "line", 36)(55, "line", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275text(56, " \u0420\u0435\u0446\u0435\u043F\u0442\u0438 ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(57, HeaderComponent_Conditional_57_Template, 12, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(58, "div", 38);
      \u0275\u0275conditionalCreate(59, HeaderComponent_Conditional_59_Template, 6, 0, "button", 39)(60, HeaderComponent_Conditional_60_Template, 4, 0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("scrolled", ctx.scrolled());
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-expanded", ctx.drawerOpen());
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(19, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.auth.isAuthenticated() ? 18 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", ctx.theme.isDark() ? "\u0412\u043A\u043B\u044E\u0447\u0438 \u0441\u0432\u0435\u0442\u044A\u043B \u0440\u0435\u0436\u0438\u043C" : "\u0412\u043A\u043B\u044E\u0447\u0438 \u0442\u044A\u043C\u0435\u043D \u0440\u0435\u0436\u0438\u043C")("aria-pressed", ctx.theme.isDark());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.theme.isDark() ? 21 : 22);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.auth.isAuthenticated() ? 23 : 24);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("visible", ctx.drawerOpen());
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.drawerOpen());
      \u0275\u0275advance(10);
      \u0275\u0275attribute("aria-label", ctx.theme.isDark() ? "\u0412\u043A\u043B\u044E\u0447\u0438 \u0441\u0432\u0435\u0442\u044A\u043B \u0440\u0435\u0436\u0438\u043C" : "\u0412\u043A\u043B\u044E\u0447\u0438 \u0442\u044A\u043C\u0435\u043D \u0440\u0435\u0436\u0438\u043C");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.theme.isDark() ? 37 : 38);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.auth.isAuthenticated() ? 43 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(20, _c0));
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.auth.isAuthenticated() ? 57 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.auth.isAuthenticated() ? 59 : 60);
    }
  }, dependencies: [RouterLink, RouterLinkActive], styles: ['@charset "UTF-8";\n\n\n.site-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  background: color-mix(in oklch, var(--clr-surface) 92%, transparent);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border-bottom: 1px solid var(--clr-border-faint);\n  transition:\n    box-shadow 0.3s var(--ease-out-expo),\n    border-color 0.3s var(--ease-out-expo),\n    background 0.3s var(--ease-out-expo);\n}\n.site-header.scrolled[_ngcontent-%COMP%] {\n  background: color-mix(in oklch, var(--clr-surface) 97%, transparent);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 8px 24px rgba(0, 0, 0, 0.07);\n  border-bottom-color: var(--clr-border);\n}\n.header-inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n  height: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.site-header.scrolled[_ngcontent-%COMP%]   .header-inner[_ngcontent-%COMP%] {\n  height: 3.25rem;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  width: 1.9rem;\n  height: 1.9rem;\n  flex-shrink: 0;\n  color: var(--clr-brand);\n}\n.brand-text[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--clr-text);\n  letter-spacing: -0.01em;\n  white-space: nowrap;\n  transition: color 0.2s;\n}\n.brand[_ngcontent-%COMP%]:hover   .brand-text[_ngcontent-%COMP%] {\n  color: var(--clr-brand);\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.nav-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.nav-auth[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-left: 0.75rem;\n  padding-left: 0.75rem;\n  border-left: 1px solid var(--clr-border);\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.register-btn) {\n  padding: 0.45rem 0.9rem;\n  border-radius: 9999px;\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--clr-text-muted);\n  transition: background 0.18s, color 0.18s;\n  white-space: nowrap;\n  min-height: 2.25rem;\n  display: flex;\n  align-items: center;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.register-btn):hover {\n  background: var(--clr-surface-hover);\n  color: var(--clr-text);\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.register-btn).active {\n  background: var(--clr-surface-hover);\n  color: var(--clr-brand);\n  font-weight: 600;\n}\n.register-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.45rem 0.9rem;\n  border-radius: 9999px;\n  text-decoration: none;\n  white-space: nowrap;\n  min-height: 2.25rem;\n  background: var(--clr-brand);\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 0.875rem;\n  box-shadow: 0 1px 4px color-mix(in oklch, var(--clr-brand) 30%, transparent);\n  transition:\n    background 0.2s var(--ease-out-expo),\n    transform 0.15s var(--ease-out-expo),\n    box-shadow 0.2s var(--ease-out-expo);\n}\n.register-btn[_ngcontent-%COMP%]:hover {\n  background: var(--clr-brand-dark);\n  transform: translateY(-1px);\n  box-shadow: 0 3px 10px color-mix(in oklch, var(--clr-brand) 35%, transparent);\n}\n.register-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.register-btn.active[_ngcontent-%COMP%] {\n  background: var(--clr-brand);\n}\n.logout-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.45rem 0.9rem;\n  border-radius: 9999px;\n  border: none;\n  background: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--clr-error);\n  cursor: pointer;\n  transition: background 0.18s, color 0.18s;\n  white-space: nowrap;\n  min-height: 2.25rem;\n  touch-action: manipulation;\n}\n.logout-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: var(--clr-error-bg);\n  color: var(--clr-error-dark);\n}\n.theme-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  border: none;\n  background: none;\n  border-radius: 9999px;\n  color: var(--clr-text-muted);\n  cursor: pointer;\n  transition: background 0.18s, color 0.18s;\n  touch-action: manipulation;\n  flex-shrink: 0;\n}\n.theme-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.theme-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--clr-surface-hover);\n  color: var(--clr-text);\n}\n.mobile-toggle[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  border-radius: 0.5rem;\n  transition: background 0.2s;\n  min-width: 2.75rem;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  touch-action: manipulation;\n  order: -1;\n}\n.mobile-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--clr-surface-hover);\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: block;\n  width: 1.25rem;\n  height: 2px;\n  background: var(--clr-text);\n  position: relative;\n}\n.hamburger[_ngcontent-%COMP%]::before, \n.hamburger[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: var(--clr-text);\n}\n.hamburger[_ngcontent-%COMP%]::before {\n  top: -6px;\n}\n.hamburger[_ngcontent-%COMP%]::after {\n  top: 6px;\n}\n.drawer-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 59;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.28s var(--ease-out-expo);\n}\n.drawer-overlay.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n}\n.mobile-drawer[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 280px;\n  max-width: 85vw;\n  height: 100vh;\n  height: 100dvh;\n  background: var(--clr-surface);\n  z-index: 60;\n  flex-direction: column;\n  transform: translateX(-100%);\n  transition: transform 0.28s var(--ease-out-expo);\n  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.18);\n  overflow-y: auto;\n}\n.mobile-drawer.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 0.75rem 1rem 1.25rem;\n  border-bottom: 1px solid var(--clr-border-faint);\n  flex-shrink: 0;\n}\n.drawer-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.drawer-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  text-decoration: none;\n  font-family: var(--font-display);\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--clr-text);\n}\n.drawer-brand[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.4rem;\n  height: 1.4rem;\n  color: var(--clr-brand);\n  flex-shrink: 0;\n}\n.drawer-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.4rem;\n  border-radius: 0.5rem;\n  color: var(--clr-text-muted);\n  transition: background 0.2s, color 0.2s;\n  min-width: 2.5rem;\n  min-height: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  touch-action: manipulation;\n}\n.drawer-close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.drawer-close[_ngcontent-%COMP%]:hover {\n  background: var(--clr-surface-hover);\n  color: var(--clr-text);\n}\n.drawer-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n}\n.drawer-avatar[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  background: var(--clr-brand);\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.drawer-user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n  min-width: 0;\n}\n.drawer-user-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--clr-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.drawer-user-role[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--clr-text-faint);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.drawer-sep[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--clr-border-faint);\n  margin: 0 1.25rem;\n}\n.drawer-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0.75rem;\n  flex: 1;\n  gap: 0.125rem;\n}\n.drawer-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 0.75rem;\n  border-radius: 0.75rem;\n  text-decoration: none;\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: var(--clr-text);\n  transition: background 0.18s, color 0.18s;\n  touch-action: manipulation;\n  min-height: 3rem;\n}\n.drawer-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.15rem;\n  height: 1.15rem;\n  flex-shrink: 0;\n  color: var(--clr-text-muted);\n}\n.drawer-item[_ngcontent-%COMP%]:hover {\n  background: var(--clr-surface-hover);\n}\n.drawer-item.active[_ngcontent-%COMP%] {\n  background: var(--clr-surface-active);\n  color: var(--clr-brand);\n  font-weight: 600;\n}\n.drawer-item.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--clr-brand);\n}\n.drawer-footer[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-top: 1px solid var(--clr-border-faint);\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.drawer-logout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  border-radius: 0.75rem;\n  border: none;\n  background: none;\n  width: 100%;\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: var(--clr-error);\n  cursor: pointer;\n  touch-action: manipulation;\n  min-height: 3rem;\n  transition: background 0.18s;\n}\n.drawer-logout[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.15rem;\n  height: 1.15rem;\n  flex-shrink: 0;\n}\n.drawer-logout[_ngcontent-%COMP%]:hover {\n  background: var(--clr-error-bg);\n}\n.drawer-signin[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.75rem 1rem;\n  border-radius: 0.75rem;\n  text-decoration: none;\n  text-align: center;\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: var(--clr-text-muted);\n  transition: background 0.18s;\n}\n.drawer-signin[_ngcontent-%COMP%]:hover {\n  background: var(--clr-surface-hover);\n}\n.drawer-register[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.75rem 1rem;\n  border-radius: 0.75rem;\n  text-decoration: none;\n  text-align: center;\n  font-size: 0.95rem;\n  font-weight: 600;\n  background: var(--clr-brand);\n  color: #ffffff;\n  transition: background 0.2s var(--ease-out-expo);\n}\n.drawer-register[_ngcontent-%COMP%]:hover {\n  background: var(--clr-brand-dark);\n}\n@media (max-width: 768px) {\n  .mobile-toggle[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .nav-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-drawer[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .site-header.scrolled[_ngcontent-%COMP%]   .header-inner[_ngcontent-%COMP%] {\n    height: 3.5rem;\n  }\n}\n@media (max-width: 400px) {\n  .brand-text[_ngcontent-%COMP%] {\n    font-size: 0.92rem;\n  }\n  .header-inner[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .mobile-drawer[_ngcontent-%COMP%], \n   .drawer-overlay[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [RouterLink, RouterLinkActive], template: `
    <header class="site-header" [class.scrolled]="scrolled()">
      <div class="header-inner">

        <button class="mobile-toggle" (click)="openDrawer()"
                aria-label="\u041E\u0442\u0432\u043E\u0440\u0438 \u043C\u0435\u043D\u044E\u0442\u043E" [attr.aria-expanded]="drawerOpen()">
          <span class="hamburger"></span>
        </button>

        <a routerLink="/" class="brand">
          <svg class="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"/><path d="M3 11h18v2a7 7 0 0 1-14 0H3z"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="17" x2="12" y2="20"/></svg>
          <span class="brand-text">\u041A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F\u0442 \u0431\u043B\u043E\u0433 \u043D\u0430 \u0418\u0432\u043E</span>
        </a>

        <nav class="nav-links">
          <div class="nav-main">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">\u041D\u0430\u0447\u0430\u043B\u043E</a>
            <a routerLink="/recipes" routerLinkActive="active">\u0420\u0435\u0446\u0435\u043F\u0442\u0438</a>
            @if (auth.isAuthenticated()) {
              <a routerLink="/dashboard" routerLinkActive="active">\u0422\u0430\u0431\u043B\u043E</a>
              <a routerLink="/profile" routerLinkActive="active">\u041F\u0440\u043E\u0444\u0438\u043B</a>
            }
          </div>
          <div class="nav-auth">
            <button class="theme-toggle" (click)="theme.toggle()"
                    [attr.aria-label]="theme.isDark() ? '\u0412\u043A\u043B\u044E\u0447\u0438 \u0441\u0432\u0435\u0442\u044A\u043B \u0440\u0435\u0436\u0438\u043C' : '\u0412\u043A\u043B\u044E\u0447\u0438 \u0442\u044A\u043C\u0435\u043D \u0440\u0435\u0436\u0438\u043C'"
                    [attr.aria-pressed]="theme.isDark()">
              @if (theme.isDark()) {
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              } @else {
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              }
            </button>
            @if (auth.isAuthenticated()) {
              <button class="logout-btn" (click)="auth.logout()">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                \u0418\u0437\u0445\u043E\u0434
              </button>
            } @else {
              <a routerLink="/signin" routerLinkActive="active" class="signin-link">\u0412\u0445\u043E\u0434</a>
              <a routerLink="/register" routerLinkActive="active" class="register-btn">\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</a>
            }
          </div>
        </nav>
      </div>
    </header>

    <!-- \u2500\u2500 Mobile left drawer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="drawer-overlay" [class.visible]="drawerOpen()" (click)="close()" aria-hidden="true"></div>

    <div class="mobile-drawer" [class.open]="drawerOpen()" role="dialog" aria-label="\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F">

      <div class="drawer-header">
        <a routerLink="/" class="drawer-brand" (click)="close()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"/><path d="M3 11h18v2a7 7 0 0 1-14 0H3z"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="17" x2="12" y2="20"/></svg>
          \u041A\u0443\u043B\u0438\u043D\u0430\u0440\u0435\u043D \u0431\u043B\u043E\u0433
        </a>
        <div class="drawer-header-actions">
          <button class="theme-toggle" (click)="theme.toggle()"
                  [attr.aria-label]="theme.isDark() ? '\u0412\u043A\u043B\u044E\u0447\u0438 \u0441\u0432\u0435\u0442\u044A\u043B \u0440\u0435\u0436\u0438\u043C' : '\u0412\u043A\u043B\u044E\u0447\u0438 \u0442\u044A\u043C\u0435\u043D \u0440\u0435\u0436\u0438\u043C'">
            @if (theme.isDark()) {
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            } @else {
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            }
          </button>
          <button class="drawer-close" (click)="close()" aria-label="\u0417\u0430\u0442\u0432\u043E\u0440\u0438 \u043C\u0435\u043D\u044E\u0442\u043E">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>

      @if (auth.isAuthenticated()) {
        <div class="drawer-user">
          <div class="drawer-avatar">{{ userInitial() }}</div>
          <div class="drawer-user-info">
            <span class="drawer-user-name">{{ auth.user()?.name }}</span>
            <span class="drawer-user-role">{{ auth.isAdmin() ? '\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440' : '\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B' }}</span>
          </div>
        </div>
        <div class="drawer-sep"></div>
      }

      <nav class="drawer-nav">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}"
           class="drawer-item" (click)="close()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          \u041D\u0430\u0447\u0430\u043B\u043E
        </a>
        <a routerLink="/recipes" routerLinkActive="active"
           class="drawer-item" (click)="close()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          \u0420\u0435\u0446\u0435\u043F\u0442\u0438
        </a>
        @if (auth.isAuthenticated()) {
          <a routerLink="/dashboard" routerLinkActive="active"
             class="drawer-item" (click)="close()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
            \u0422\u0430\u0431\u043B\u043E
          </a>
          <a routerLink="/profile" routerLinkActive="active"
             class="drawer-item" (click)="close()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            \u041F\u0440\u043E\u0444\u0438\u043B
          </a>
        }
      </nav>

      <div class="drawer-footer">
        @if (auth.isAuthenticated()) {
          <button class="drawer-logout" (click)="auth.logout(); close()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            \u0418\u0437\u0445\u043E\u0434
          </button>
        } @else {
          <a routerLink="/signin" class="drawer-signin" (click)="close()">\u0412\u0445\u043E\u0434</a>
          <a routerLink="/register" class="drawer-register" (click)="close()">\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</a>
        }
      </div>

    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;f4afbccacd9d0939a9b9db8cc09073886c1525e8f29250a549fd40452ce139bd;C:/Users/ipene/Desktop/Blog-System-Angular/frontend/src/app/components/header/header.component.ts */\n.site-header {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  background: color-mix(in oklch, var(--clr-surface) 92%, transparent);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border-bottom: 1px solid var(--clr-border-faint);\n  transition:\n    box-shadow 0.3s var(--ease-out-expo),\n    border-color 0.3s var(--ease-out-expo),\n    background 0.3s var(--ease-out-expo);\n}\n.site-header.scrolled {\n  background: color-mix(in oklch, var(--clr-surface) 97%, transparent);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 8px 24px rgba(0, 0, 0, 0.07);\n  border-bottom-color: var(--clr-border);\n}\n.header-inner {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n  height: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.site-header.scrolled .header-inner {\n  height: 3.25rem;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.brand-icon {\n  width: 1.9rem;\n  height: 1.9rem;\n  flex-shrink: 0;\n  color: var(--clr-brand);\n}\n.brand-text {\n  font-family: var(--font-display);\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--clr-text);\n  letter-spacing: -0.01em;\n  white-space: nowrap;\n  transition: color 0.2s;\n}\n.brand:hover .brand-text {\n  color: var(--clr-brand);\n}\n.nav-links {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.nav-main {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.nav-auth {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-left: 0.75rem;\n  padding-left: 0.75rem;\n  border-left: 1px solid var(--clr-border);\n}\n.nav-links a:not(.register-btn) {\n  padding: 0.45rem 0.9rem;\n  border-radius: 9999px;\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--clr-text-muted);\n  transition: background 0.18s, color 0.18s;\n  white-space: nowrap;\n  min-height: 2.25rem;\n  display: flex;\n  align-items: center;\n}\n.nav-links a:not(.register-btn):hover {\n  background: var(--clr-surface-hover);\n  color: var(--clr-text);\n}\n.nav-links a:not(.register-btn).active {\n  background: var(--clr-surface-hover);\n  color: var(--clr-brand);\n  font-weight: 600;\n}\n.register-btn {\n  display: flex;\n  align-items: center;\n  padding: 0.45rem 0.9rem;\n  border-radius: 9999px;\n  text-decoration: none;\n  white-space: nowrap;\n  min-height: 2.25rem;\n  background: var(--clr-brand);\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 0.875rem;\n  box-shadow: 0 1px 4px color-mix(in oklch, var(--clr-brand) 30%, transparent);\n  transition:\n    background 0.2s var(--ease-out-expo),\n    transform 0.15s var(--ease-out-expo),\n    box-shadow 0.2s var(--ease-out-expo);\n}\n.register-btn:hover {\n  background: var(--clr-brand-dark);\n  transform: translateY(-1px);\n  box-shadow: 0 3px 10px color-mix(in oklch, var(--clr-brand) 35%, transparent);\n}\n.register-btn:active {\n  transform: translateY(0);\n}\n.register-btn.active {\n  background: var(--clr-brand);\n}\n.logout-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.45rem 0.9rem;\n  border-radius: 9999px;\n  border: none;\n  background: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--clr-error);\n  cursor: pointer;\n  transition: background 0.18s, color 0.18s;\n  white-space: nowrap;\n  min-height: 2.25rem;\n  touch-action: manipulation;\n}\n.logout-btn svg {\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.logout-btn:hover {\n  background: var(--clr-error-bg);\n  color: var(--clr-error-dark);\n}\n.theme-toggle {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  border: none;\n  background: none;\n  border-radius: 9999px;\n  color: var(--clr-text-muted);\n  cursor: pointer;\n  transition: background 0.18s, color 0.18s;\n  touch-action: manipulation;\n  flex-shrink: 0;\n}\n.theme-toggle svg {\n  width: 1rem;\n  height: 1rem;\n}\n.theme-toggle:hover {\n  background: var(--clr-surface-hover);\n  color: var(--clr-text);\n}\n.mobile-toggle {\n  display: none;\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  border-radius: 0.5rem;\n  transition: background 0.2s;\n  min-width: 2.75rem;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  touch-action: manipulation;\n  order: -1;\n}\n.mobile-toggle:hover {\n  background: var(--clr-surface-hover);\n}\n.hamburger {\n  display: block;\n  width: 1.25rem;\n  height: 2px;\n  background: var(--clr-text);\n  position: relative;\n}\n.hamburger::before,\n.hamburger::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: var(--clr-text);\n}\n.hamburger::before {\n  top: -6px;\n}\n.hamburger::after {\n  top: 6px;\n}\n.drawer-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 59;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.28s var(--ease-out-expo);\n}\n.drawer-overlay.visible {\n  opacity: 1;\n  pointer-events: auto;\n}\n.mobile-drawer {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 280px;\n  max-width: 85vw;\n  height: 100vh;\n  height: 100dvh;\n  background: var(--clr-surface);\n  z-index: 60;\n  flex-direction: column;\n  transform: translateX(-100%);\n  transition: transform 0.28s var(--ease-out-expo);\n  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.18);\n  overflow-y: auto;\n}\n.mobile-drawer.open {\n  transform: translateX(0);\n}\n.drawer-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 0.75rem 1rem 1.25rem;\n  border-bottom: 1px solid var(--clr-border-faint);\n  flex-shrink: 0;\n}\n.drawer-header-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.drawer-brand {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  text-decoration: none;\n  font-family: var(--font-display);\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--clr-text);\n}\n.drawer-brand svg {\n  width: 1.4rem;\n  height: 1.4rem;\n  color: var(--clr-brand);\n  flex-shrink: 0;\n}\n.drawer-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.4rem;\n  border-radius: 0.5rem;\n  color: var(--clr-text-muted);\n  transition: background 0.2s, color 0.2s;\n  min-width: 2.5rem;\n  min-height: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  touch-action: manipulation;\n}\n.drawer-close svg {\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.drawer-close:hover {\n  background: var(--clr-surface-hover);\n  color: var(--clr-text);\n}\n.drawer-user {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n}\n.drawer-avatar {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  background: var(--clr-brand);\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.drawer-user-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n  min-width: 0;\n}\n.drawer-user-name {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--clr-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.drawer-user-role {\n  font-size: 0.7rem;\n  color: var(--clr-text-faint);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.drawer-sep {\n  height: 1px;\n  background: var(--clr-border-faint);\n  margin: 0 1.25rem;\n}\n.drawer-nav {\n  display: flex;\n  flex-direction: column;\n  padding: 0.75rem;\n  flex: 1;\n  gap: 0.125rem;\n}\n.drawer-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 0.75rem;\n  border-radius: 0.75rem;\n  text-decoration: none;\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: var(--clr-text);\n  transition: background 0.18s, color 0.18s;\n  touch-action: manipulation;\n  min-height: 3rem;\n}\n.drawer-item svg {\n  width: 1.15rem;\n  height: 1.15rem;\n  flex-shrink: 0;\n  color: var(--clr-text-muted);\n}\n.drawer-item:hover {\n  background: var(--clr-surface-hover);\n}\n.drawer-item.active {\n  background: var(--clr-surface-active);\n  color: var(--clr-brand);\n  font-weight: 600;\n}\n.drawer-item.active svg {\n  color: var(--clr-brand);\n}\n.drawer-footer {\n  padding: 0.75rem;\n  border-top: 1px solid var(--clr-border-faint);\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.drawer-logout {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  border-radius: 0.75rem;\n  border: none;\n  background: none;\n  width: 100%;\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: var(--clr-error);\n  cursor: pointer;\n  touch-action: manipulation;\n  min-height: 3rem;\n  transition: background 0.18s;\n}\n.drawer-logout svg {\n  width: 1.15rem;\n  height: 1.15rem;\n  flex-shrink: 0;\n}\n.drawer-logout:hover {\n  background: var(--clr-error-bg);\n}\n.drawer-signin {\n  display: block;\n  padding: 0.75rem 1rem;\n  border-radius: 0.75rem;\n  text-decoration: none;\n  text-align: center;\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: var(--clr-text-muted);\n  transition: background 0.18s;\n}\n.drawer-signin:hover {\n  background: var(--clr-surface-hover);\n}\n.drawer-register {\n  display: block;\n  padding: 0.75rem 1rem;\n  border-radius: 0.75rem;\n  text-decoration: none;\n  text-align: center;\n  font-size: 0.95rem;\n  font-weight: 600;\n  background: var(--clr-brand);\n  color: #ffffff;\n  transition: background 0.2s var(--ease-out-expo);\n}\n.drawer-register:hover {\n  background: var(--clr-brand-dark);\n}\n@media (max-width: 768px) {\n  .mobile-toggle {\n    display: flex;\n  }\n  .nav-links {\n    display: none;\n  }\n  .mobile-drawer {\n    display: flex;\n  }\n  .site-header.scrolled .header-inner {\n    height: 3.5rem;\n  }\n}\n@media (max-width: 400px) {\n  .brand-text {\n    font-size: 0.92rem;\n  }\n  .header-inner {\n    padding: 0 1rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .mobile-drawer,\n  .drawer-overlay {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/components/header/header.component.ts", lineNumber: 411 });
})();

// src/app/components/footer/footer.component.ts
function FooterComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275text(1, "\u0422\u0430\u0431\u043B\u043E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 28);
    \u0275\u0275text(3, "\u041F\u0440\u043E\u0444\u0438\u043B");
    \u0275\u0275elementEnd();
  }
}
function FooterComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275text(1, "\u0412\u0445\u043E\u0434");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 30);
    \u0275\u0275text(3, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F");
    \u0275\u0275elementEnd();
  }
}
var FooterComponent = class _FooterComponent {
  auth = inject(AuthService);
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 41, vars: 2, consts: [[1, "site-footer"], [1, "footer-inner"], [1, "footer-top"], [1, "footer-brand"], ["routerLink", "/", 1, "brand-logo"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", 1, "brand-icon"], ["d", "M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"], ["d", "M3 11h18v2a7 7 0 0 1-14 0H3z"], ["x1", "9", "y1", "20", "x2", "15", "y2", "20"], ["x1", "12", "y1", "17", "x2", "12", "y2", "20"], [1, "brand-name"], [1, "brand-tagline"], [1, "footer-cols"], [1, "footer-col"], [1, "col-title"], ["routerLink", "/"], ["routerLink", "/recipes"], [1, "footer-quote"], ["viewBox", "0 0 32 32", "fill", "currentColor", "aria-hidden", "true", 1, "quote-icon"], ["d", "M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm16 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z"], [1, "footer-bottom"], [1, "copyright"], [1, "footer-sep"], ["routerLink", "/privacy", 1, "privacy-link"], [1, "made-with"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "heart"], ["d", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"], ["routerLink", "/dashboard"], ["routerLink", "/profile"], ["routerLink", "/signin"], ["routerLink", "/register"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6)(7, "path", 7)(8, "line", 8)(9, "line", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "span", 10);
      \u0275\u0275text(11, "\u041A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F\u0442 \u0431\u043B\u043E\u0433 \u043D\u0430 \u0418\u0432\u043E");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "p", 11);
      \u0275\u0275text(13, "\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438, \u0441\u043F\u043E\u0434\u0435\u043B\u0435\u043D\u0438 \u0441 \u043B\u044E\u0431\u043E\u0432 \u0438 \u0441\u0442\u0440\u0430\u0441\u0442 \u043A\u044A\u043C \u0434\u043E\u0431\u0440\u043E\u0442\u043E \u0433\u043E\u0442\u0432\u0435\u043D\u0435.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 12)(15, "div", 13)(16, "span", 14);
      \u0275\u0275text(17, "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "a", 15);
      \u0275\u0275text(19, "\u041D\u0430\u0447\u0430\u043B\u043E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "a", 16);
      \u0275\u0275text(21, "\u0412\u0441\u0438\u0447\u043A\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(22, FooterComponent_Conditional_22_Template, 4, 0)(23, FooterComponent_Conditional_23_Template, 4, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(25, "svg", 18);
      \u0275\u0275element(26, "path", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "p");
      \u0275\u0275text(28, "\u0413\u043E\u0442\u0432\u0435\u043D\u0435\u0442\u043E \u0435 \u043B\u044E\u0431\u043E\u0432, \u043F\u0440\u0435\u0432\u044A\u0440\u043D\u0430\u0442\u0430 \u0432 \u044F\u0441\u0442\u0438\u0435.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 20)(30, "p", 21);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "span", 22);
      \u0275\u0275elementStart(33, "a", 23);
      \u0275\u0275text(34, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u0437\u0430 \u043F\u043E\u0432\u0435\u0440\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "span", 22);
      \u0275\u0275elementStart(36, "p", 24);
      \u0275\u0275text(37, " \u041D\u0430\u043F\u0440\u0430\u0432\u0435\u043D\u043E \u0441 ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(38, "svg", 25);
      \u0275\u0275element(39, "path", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, " \u0438 \u0434\u043E\u0431\u0440\u0430 \u0445\u0440\u0430\u043D\u0430 ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(22);
      \u0275\u0275conditional(ctx.auth.isAuthenticated() ? 22 : 23);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " \u041A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F\u0442 \u0431\u043B\u043E\u0433 \u043D\u0430 \u0418\u0432\u043E");
    }
  }, dependencies: [RouterLink], styles: ["\n.site-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  background: #0c0807;\n  color: #857f7b;\n  border-top: 3px solid var(--clr-brand);\n}\n.footer-inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 3rem 1.5rem 1.75rem;\n}\n.footer-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 3rem;\n  padding-bottom: 2.5rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  margin-bottom: 1.5rem;\n}\n.footer-brand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  max-width: 260px;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  text-decoration: none;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  height: 1.75rem;\n  flex-shrink: 0;\n  color: var(--clr-brand);\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #eeeae8;\n  letter-spacing: -0.01em;\n}\n.brand-tagline[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: #857f7b;\n  margin: 0;\n  line-height: 1.6;\n}\n.footer-cols[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3rem;\n}\n.footer-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n  min-width: 110px;\n}\n.col-title[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #68625e;\n  margin-bottom: 0.25rem;\n}\n.footer-col[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #857f7b;\n  text-decoration: none;\n  font-size: 0.875rem;\n  transition: color 0.2s;\n  touch-action: manipulation;\n}\n.footer-col[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #eeeae8;\n}\n.footer-quote[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 1.5rem 0 2rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  margin-bottom: 1.5rem;\n}\n.quote-icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  flex-shrink: 0;\n  color: var(--clr-brand);\n  opacity: 0.6;\n  margin-top: 0.1rem;\n}\n.footer-quote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  font-style: italic;\n  color: #aaa39f;\n  margin: 0;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.copyright[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #595451;\n  margin: 0;\n}\n.footer-sep[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: #312d2a;\n}\n.privacy-link[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #595451;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.privacy-link[_ngcontent-%COMP%]:hover {\n  color: #a49d99;\n}\n.made-with[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.78rem;\n  color: #595451;\n  margin: 0;\n}\n.heart[_ngcontent-%COMP%] {\n  width: 0.8rem;\n  height: 0.8rem;\n  color: var(--clr-error);\n}\n@media (max-width: 600px) {\n  .footer-inner[_ngcontent-%COMP%] {\n    padding: 2.5rem 1.25rem 1.5rem;\n  }\n  .footer-top[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1.5rem;\n    padding-bottom: 1.75rem;\n  }\n  .footer-brand[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .footer-cols[_ngcontent-%COMP%] {\n    gap: 1.5rem;\n  }\n  .footer-col[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0;\n  }\n  .col-title[_ngcontent-%COMP%] {\n    margin-bottom: 0.25rem;\n  }\n  .footer-col[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 0.65rem 0;\n    font-size: 0.95rem;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n    min-height: 2.75rem;\n    display: flex;\n    align-items: center;\n  }\n  .footer-col[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .footer-bottom[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n    flex-direction: column;\n  }\n  .footer-sep[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [RouterLink], template: `
    <footer class="site-footer">
      <div class="footer-inner">

        <div class="footer-top">
          <div class="footer-brand">
            <a routerLink="/" class="brand-logo">
              <svg class="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"/><path d="M3 11h18v2a7 7 0 0 1-14 0H3z"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="17" x2="12" y2="20"/></svg>
              <span class="brand-name">\u041A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F\u0442 \u0431\u043B\u043E\u0433 \u043D\u0430 \u0418\u0432\u043E</span>
            </a>
            <p class="brand-tagline">\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438, \u0441\u043F\u043E\u0434\u0435\u043B\u0435\u043D\u0438 \u0441 \u043B\u044E\u0431\u043E\u0432 \u0438 \u0441\u0442\u0440\u0430\u0441\u0442 \u043A\u044A\u043C \u0434\u043E\u0431\u0440\u043E\u0442\u043E \u0433\u043E\u0442\u0432\u0435\u043D\u0435.</p>
          </div>

          <div class="footer-cols">
            <div class="footer-col">
              <span class="col-title">\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F</span>
              <a routerLink="/">\u041D\u0430\u0447\u0430\u043B\u043E</a>
              <a routerLink="/recipes">\u0412\u0441\u0438\u0447\u043A\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438</a>
              @if (auth.isAuthenticated()) {
                <a routerLink="/dashboard">\u0422\u0430\u0431\u043B\u043E</a>
                <a routerLink="/profile">\u041F\u0440\u043E\u0444\u0438\u043B</a>
              } @else {
                <a routerLink="/signin">\u0412\u0445\u043E\u0434</a>
                <a routerLink="/register">\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</a>
              }
            </div>
          </div>
        </div>

        <div class="footer-quote">
          <svg class="quote-icon" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm16 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z"/></svg>
          <p>\u0413\u043E\u0442\u0432\u0435\u043D\u0435\u0442\u043E \u0435 \u043B\u044E\u0431\u043E\u0432, \u043F\u0440\u0435\u0432\u044A\u0440\u043D\u0430\u0442\u0430 \u0432 \u044F\u0441\u0442\u0438\u0435.</p>
        </div>

        <div class="footer-bottom">
          <p class="copyright">\xA9 {{ currentYear }} \u041A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F\u0442 \u0431\u043B\u043E\u0433 \u043D\u0430 \u0418\u0432\u043E</p>
          <span class="footer-sep"></span>
          <a routerLink="/privacy" class="privacy-link">\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u0437\u0430 \u043F\u043E\u0432\u0435\u0440\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442</a>
          <span class="footer-sep"></span>
          <p class="made-with">
            \u041D\u0430\u043F\u0440\u0430\u0432\u0435\u043D\u043E \u0441
            <svg class="heart" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            \u0438 \u0434\u043E\u0431\u0440\u0430 \u0445\u0440\u0430\u043D\u0430
          </p>
        </div>

      </div>
    </footer>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;bc556a99ffb4b626712e1a1869a63cd37e3f43dbaa32fca9104786bad9c349f2;C:/Users/ipene/Desktop/Blog-System-Angular/frontend/src/app/components/footer/footer.component.ts */\n.site-footer {\n  margin-top: auto;\n  background: #0c0807;\n  color: #857f7b;\n  border-top: 3px solid var(--clr-brand);\n}\n.footer-inner {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 3rem 1.5rem 1.75rem;\n}\n.footer-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 3rem;\n  padding-bottom: 2.5rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  margin-bottom: 1.5rem;\n}\n.footer-brand {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  max-width: 260px;\n}\n.brand-logo {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  text-decoration: none;\n}\n.brand-icon {\n  width: 1.75rem;\n  height: 1.75rem;\n  flex-shrink: 0;\n  color: var(--clr-brand);\n}\n.brand-name {\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #eeeae8;\n  letter-spacing: -0.01em;\n}\n.brand-tagline {\n  font-size: 0.83rem;\n  color: #857f7b;\n  margin: 0;\n  line-height: 1.6;\n}\n.footer-cols {\n  display: flex;\n  gap: 3rem;\n}\n.footer-col {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n  min-width: 110px;\n}\n.col-title {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #68625e;\n  margin-bottom: 0.25rem;\n}\n.footer-col a {\n  color: #857f7b;\n  text-decoration: none;\n  font-size: 0.875rem;\n  transition: color 0.2s;\n  touch-action: manipulation;\n}\n.footer-col a:hover {\n  color: #eeeae8;\n}\n.footer-quote {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 1.5rem 0 2rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  margin-bottom: 1.5rem;\n}\n.quote-icon {\n  width: 1.5rem;\n  height: 1.5rem;\n  flex-shrink: 0;\n  color: var(--clr-brand);\n  opacity: 0.6;\n  margin-top: 0.1rem;\n}\n.footer-quote p {\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  font-style: italic;\n  color: #aaa39f;\n  margin: 0;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n}\n.footer-bottom {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.copyright {\n  font-size: 0.78rem;\n  color: #595451;\n  margin: 0;\n}\n.footer-sep {\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: #312d2a;\n}\n.privacy-link {\n  font-size: 0.78rem;\n  color: #595451;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.privacy-link:hover {\n  color: #a49d99;\n}\n.made-with {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.78rem;\n  color: #595451;\n  margin: 0;\n}\n.heart {\n  width: 0.8rem;\n  height: 0.8rem;\n  color: var(--clr-error);\n}\n@media (max-width: 600px) {\n  .footer-inner {\n    padding: 2.5rem 1.25rem 1.5rem;\n  }\n  .footer-top {\n    flex-direction: column;\n    gap: 1.5rem;\n    padding-bottom: 1.75rem;\n  }\n  .footer-brand {\n    max-width: 100%;\n  }\n  .footer-cols {\n    gap: 1.5rem;\n  }\n  .footer-col {\n    flex-direction: column;\n    gap: 0;\n  }\n  .col-title {\n    margin-bottom: 0.25rem;\n  }\n  .footer-col a {\n    padding: 0.65rem 0;\n    font-size: 0.95rem;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n    min-height: 2.75rem;\n    display: flex;\n    align-items: center;\n  }\n  .footer-col a:last-child {\n    border-bottom: none;\n  }\n  .footer-bottom {\n    gap: 0.5rem;\n    flex-direction: column;\n  }\n  .footer-sep {\n    display: none;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/components/footer/footer.component.ts", lineNumber: 226 });
})();

// src/app/components/toast/toast.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ToastComponent_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "polyline", 4);
  }
}
function ToastComponent_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "circle", 9)(1, "line", 10)(2, "line", 11);
  }
}
function ToastComponent_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "circle", 9)(1, "line", 10)(2, "line", 11);
  }
}
function ToastComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 3);
    \u0275\u0275conditionalCreate(2, ToastComponent_For_2_Conditional_2_Template, 1, 0, ":svg:polyline", 4)(3, ToastComponent_For_2_Conditional_3_Template, 3, 0)(4, ToastComponent_For_2_Conditional_4_Template, 3, 0);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "button", 5);
    \u0275\u0275domListener("click", function ToastComponent_For_2_Template_button_click_7_listener() {
      const toast_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toastService.dismiss(toast_r2.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(8, "svg", 6);
    \u0275\u0275domElement(9, "line", 7)(10, "line", 8);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    \u0275\u0275classMap("toast-" + toast_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(toast_r2.type === "success" ? 2 : toast_r2.type === "error" ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(toast_r2.message);
  }
}
var ToastComponent = class _ToastComponent {
  toastService = inject(ToastService);
  static \u0275fac = function ToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastComponent, selectors: [["app-toast"]], decls: 3, vars: 0, consts: [["aria-live", "polite", "aria-atomic", "false", 1, "toast-container"], ["role", "status", 1, "toast", 3, "class"], ["role", "status", 1, "toast"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", 1, "toast-icon"], ["points", "20 6 9 17 4 12"], [1, "toast-close", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"]], template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, ToastComponent_For_2_Template, 11, 4, "div", 1, _forTrack0);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.toastService.toasts());
    }
  }, styles: ["\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1.5rem;\n  right: 1.5rem;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n  pointer-events: none;\n}\n.toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border-radius: 0.875rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  max-width: 360px;\n  box-shadow: var(--shadow-md);\n  pointer-events: auto;\n  animation: _ngcontent-%COMP%_slide-in 0.28s var(--ease-out-expo);\n}\n@keyframes _ngcontent-%COMP%_slide-in {\n  from {\n    opacity: 0;\n    transform: translateX(1.25rem) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0) scale(1);\n  }\n}\n.toast-success[_ngcontent-%COMP%] {\n  background: var(--clr-green-bg);\n  color: var(--clr-green-text);\n  border: 1px solid var(--clr-green);\n}\n.toast-error[_ngcontent-%COMP%] {\n  background: var(--clr-error-bg);\n  color: var(--clr-error-dark);\n  border: 1px solid var(--clr-error);\n}\n.toast-info[_ngcontent-%COMP%] {\n  background: var(--clr-amber-bg);\n  color: var(--clr-amber-text);\n  border: 1px solid var(--clr-amber-border);\n}\n.toast-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.toast[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toast-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.2rem;\n  opacity: 0.6;\n  display: flex;\n  align-items: center;\n  border-radius: 0.25rem;\n  transition: opacity 0.15s var(--ease-out-expo);\n  touch-action: manipulation;\n}\n.toast-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.toast-close[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n}\n.toast-close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.9rem;\n  height: 0.9rem;\n}\n@media (max-width: 480px) {\n  .toast-container[_ngcontent-%COMP%] {\n    left: 1rem;\n    right: 1rem;\n    bottom: 1rem;\n  }\n  .toast[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .toast[_ngcontent-%COMP%] {\n    animation: none;\n  }\n  .toast-close[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=toast.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastComponent, [{
    type: Component,
    args: [{ selector: "app-toast", standalone: true, template: `
    <div class="toast-container" aria-live="polite" aria-atomic="false">
      @for (toast of toastService.toasts(); track toast.id) {
        <div class="toast" [class]="'toast-' + toast.type" role="status">
          <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            @if (toast.type === 'success') {
              <polyline points="20 6 9 17 4 12"/>
            } @else if (toast.type === 'error') {
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            } @else {
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            }
          </svg>
          <span>{{ toast.message }}</span>
          <button class="toast-close" (click)="toastService.dismiss(toast.id)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      }
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;3424594d097486ac0535beb40d941324362348d456e04ce9038777d836bfc511;C:/Users/ipene/Desktop/Blog-System-Angular/frontend/src/app/components/toast/toast.component.ts */\n.toast-container {\n  position: fixed;\n  bottom: 1.5rem;\n  right: 1.5rem;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n  pointer-events: none;\n}\n.toast {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border-radius: 0.875rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  max-width: 360px;\n  box-shadow: var(--shadow-md);\n  pointer-events: auto;\n  animation: slide-in 0.28s var(--ease-out-expo);\n}\n@keyframes slide-in {\n  from {\n    opacity: 0;\n    transform: translateX(1.25rem) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0) scale(1);\n  }\n}\n.toast-success {\n  background: var(--clr-green-bg);\n  color: var(--clr-green-text);\n  border: 1px solid var(--clr-green);\n}\n.toast-error {\n  background: var(--clr-error-bg);\n  color: var(--clr-error-dark);\n  border: 1px solid var(--clr-error);\n}\n.toast-info {\n  background: var(--clr-amber-bg);\n  color: var(--clr-amber-text);\n  border: 1px solid var(--clr-amber-border);\n}\n.toast-icon {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.toast span {\n  flex: 1;\n}\n.toast-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.2rem;\n  opacity: 0.6;\n  display: flex;\n  align-items: center;\n  border-radius: 0.25rem;\n  transition: opacity 0.15s var(--ease-out-expo);\n  touch-action: manipulation;\n}\n.toast-close:hover {\n  opacity: 1;\n}\n.toast-close:active {\n  transform: scale(0.9);\n}\n.toast-close svg {\n  width: 0.9rem;\n  height: 0.9rem;\n}\n@media (max-width: 480px) {\n  .toast-container {\n    left: 1rem;\n    right: 1rem;\n    bottom: 1rem;\n  }\n  .toast {\n    max-width: 100%;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .toast {\n    animation: none;\n  }\n  .toast-close {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=toast.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "src/app/components/toast/toast.component.ts", lineNumber: 87 });
})();

// src/app/components/nav-progress/nav-progress.component.ts
function NavProgressComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("done", ctx_r0.done());
  }
}
var NavProgressComponent = class _NavProgressComponent {
  visible = signal(false, ...ngDevMode ? [{ debugName: "visible" }] : (
    /* istanbul ignore next */
    []
  ));
  done = signal(false, ...ngDevMode ? [{ debugName: "done" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    inject(Router).events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.done.set(false);
        this.visible.set(true);
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.done.set(true);
        setTimeout(() => this.visible.set(false), 220);
      }
    });
  }
  static \u0275fac = function NavProgressComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavProgressComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavProgressComponent, selectors: [["app-nav-progress"]], decls: 1, vars: 1, consts: [[1, "nav-bar", 3, "done"], [1, "nav-bar"]], template: function NavProgressComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, NavProgressComponent_Conditional_0_Template, 1, 2, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.visible() ? 0 : -1);
    }
  }, styles: ["\n.nav-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10000;\n  height: 3px;\n  width: 0%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--clr-green),\n      var(--clr-brand-hover));\n  border-radius: 0 2px 2px 0;\n  box-shadow: 0 0 10px color-mix(in oklch, var(--clr-green) 50%, transparent);\n  animation: _ngcontent-%COMP%_grow 1.2s cubic-bezier(0.1, 0.6, 0.4, 1) forwards;\n}\n.nav-bar.done[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_finish 0.22s ease-in forwards;\n}\n@keyframes _ngcontent-%COMP%_grow {\n  0% {\n    width: 0%;\n  }\n  15% {\n    width: 25%;\n  }\n  40% {\n    width: 50%;\n  }\n  70% {\n    width: 70%;\n  }\n  100% {\n    width: 82%;\n  }\n}\n@keyframes _ngcontent-%COMP%_finish {\n  from {\n    width: 82%;\n    opacity: 1;\n  }\n  to {\n    width: 100%;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=nav-progress.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavProgressComponent, [{
    type: Component,
    args: [{ selector: "app-nav-progress", standalone: true, template: `
    @if (visible()) {
      <div class="nav-bar" [class.done]="done()"></div>
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;e6c0d84f7387acb0d4b61fe45738447581f528ae93f94f9a92a52d136ce85306;C:/Users/ipene/Desktop/Blog-System-Angular/frontend/src/app/components/nav-progress/nav-progress.component.ts */\n.nav-bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10000;\n  height: 3px;\n  width: 0%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--clr-green),\n      var(--clr-brand-hover));\n  border-radius: 0 2px 2px 0;\n  box-shadow: 0 0 10px color-mix(in oklch, var(--clr-green) 50%, transparent);\n  animation: grow 1.2s cubic-bezier(0.1, 0.6, 0.4, 1) forwards;\n}\n.nav-bar.done {\n  animation: finish 0.22s ease-in forwards;\n}\n@keyframes grow {\n  0% {\n    width: 0%;\n  }\n  15% {\n    width: 25%;\n  }\n  40% {\n    width: 50%;\n  }\n  70% {\n    width: 70%;\n  }\n  100% {\n    width: 82%;\n  }\n}\n@keyframes finish {\n  from {\n    width: 82%;\n    opacity: 1;\n  }\n  to {\n    width: 100%;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=nav-progress.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavProgressComponent, { className: "NavProgressComponent", filePath: "src/app/components/nav-progress/nav-progress.component.ts", lineNumber: 43 });
})();

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 8, vars: 0, consts: [["href", "#main-content", 1, "skip-link"], ["id", "main-content", 1, "main-content"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275text(1, "\u041F\u0440\u0435\u0441\u043A\u043E\u0447\u0438 \u043A\u044A\u043C \u0441\u044A\u0434\u044A\u0440\u0436\u0430\u043D\u0438\u0435\u0442\u043E");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "app-nav-progress")(3, "app-header");
      \u0275\u0275elementStart(4, "main", 1);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "app-footer")(7, "app-toast");
    }
  }, dependencies: [RouterOutlet, HeaderComponent, FooterComponent, ToastComponent, NavProgressComponent], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.skip-link[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -100%;\n  left: 1rem;\n  z-index: 9999;\n  padding: 0.65rem 1.25rem;\n  background: var(--clr-brand);\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.875rem;\n  border-radius: 0 0 0.75rem 0.75rem;\n  text-decoration: none;\n  transition: top 0.15s var(--ease-out-expo);\n}\n.skip-link[_ngcontent-%COMP%]:focus {\n  top: 0;\n  outline: 2.5px solid oklch(100% 0 0deg);\n  outline-offset: 2px;\n}\n/*# sourceMappingURL=app.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, HeaderComponent, FooterComponent, ToastComponent, NavProgressComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: '<a class="skip-link" href="#main-content">\u041F\u0440\u0435\u0441\u043A\u043E\u0447\u0438 \u043A\u044A\u043C \u0441\u044A\u0434\u044A\u0440\u0436\u0430\u043D\u0438\u0435\u0442\u043E</a>\r\n<app-nav-progress />\r\n<app-header />\r\n<main class="main-content" id="main-content">\r\n  <router-outlet />\r\n</main>\r\n<app-footer />\r\n<app-toast />\r\n', styles: ["/* src/app/app.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.main-content {\n  flex: 1;\n}\n.skip-link {\n  position: absolute;\n  top: -100%;\n  left: 1rem;\n  z-index: 9999;\n  padding: 0.65rem 1.25rem;\n  background: var(--clr-brand);\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.875rem;\n  border-radius: 0 0 0.75rem 0.75rem;\n  text-decoration: none;\n  transition: top 0.15s var(--ease-out-expo);\n}\n.skip-link:focus {\n  top: 0;\n  outline: 2.5px solid oklch(100% 0 0deg);\n  outline-offset: 2px;\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 14 });
})();

// src/main.ts
performance.mark("app_bootstrap_start");
bootstrapApplication(App, appConfig).then(() => {
  performance.mark("app_bootstrap_end");
  performance.measure("app_bootstrap", "app_bootstrap_start", "app_bootstrap_end");
}).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
