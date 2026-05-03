import {
  ToastService
} from "./chunk-CELTP6HV.js";
import {
  takeUntilDestroyed
} from "./chunk-ZGNCPTQ3.js";
import {
  AuthService
} from "./chunk-3GAFCRXR.js";
import "./chunk-QKG44OY5.js";
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
  ViewChild,
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
  viewChild,
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
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-OGGNHWOY.js";

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
    loadComponent: () => import("./chunk-XEQOEPQO.js").then((m) => m.HomeComponent)
  },
  {
    path: "recipes",
    loadComponent: () => import("./chunk-JG37YIMH.js").then((m) => m.RecipesComponent)
  },
  {
    path: "categories",
    loadComponent: () => import("./chunk-WZMSJTU2.js").then((m) => m.CategoriesComponent)
  },
  {
    path: "recipes/:slug",
    loadComponent: () => import("./chunk-7I47EDQI.js").then((m) => m.RecipeDetailComponent)
  },
  {
    path: "signin",
    canActivate: [guestGuard],
    loadComponent: () => import("./chunk-6NFX33LA.js").then((m) => m.SigninComponent)
  },
  {
    path: "register",
    canActivate: [guestGuard],
    loadComponent: () => import("./chunk-EBMYXQLG.js").then((m) => m.RegisterComponent)
  },
  {
    path: "profile",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-FMGXFN7K.js").then((m) => m.ProfileComponent)
  },
  // Recipe editor — full-page, no sidebar
  {
    path: "dashboard/recipes/new",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-OLC5ZLH5.js").then((m) => m.DashboardRecipeEditComponent)
  },
  {
    path: "dashboard/recipes/:slug/edit",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-OLC5ZLH5.js").then((m) => m.DashboardRecipeEditComponent)
  },
  // Dashboard shell — all overview pages share the sidebar layout
  {
    path: "dashboard",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-FNSPJFVX.js").then((m) => m.DashboardLayoutComponent),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-M7DWMVKE.js").then((m) => m.DashboardComponent)
      },
      {
        path: "recipes",
        loadComponent: () => import("./chunk-Q3MFIPVJ.js").then((m) => m.DashboardRecipesComponent)
      },
      {
        path: "comments",
        loadComponent: () => import("./chunk-Y6TRSEAF.js").then((m) => m.DashboardCommentsComponent)
      },
      {
        path: "favorites",
        loadComponent: () => import("./chunk-I6BCQPY3.js").then((m) => m.DashboardFavoritesComponent)
      }
    ]
  },
  {
    path: "privacy",
    loadComponent: () => import("./chunk-XM2IYISX.js").then((m) => m.PrivacyComponent)
  },
  {
    path: "**",
    loadComponent: () => import("./chunk-QZAQ6N5G.js").then((m) => m.NotFoundComponent)
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
var _c0 = ["drawer"];
var _c1 = () => ({ exact: true });
function HeaderComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 47);
    \u0275\u0275text(1, "\u0422\u0430\u0431\u043B\u043E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 48);
    \u0275\u0275text(3, "\u041F\u0440\u043E\u0444\u0438\u043B");
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "circle", 49)(2, "line", 50)(3, "line", 51)(4, "line", 52)(5, "line", 53)(6, "line", 54)(7, "line", 55)(8, "line", 56)(9, "line", 57);
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "path", 58);
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.auth.logout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 60);
    \u0275\u0275element(2, "path", 61)(3, "polyline", 62)(4, "line", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u0418\u0437\u0445\u043E\u0434 ");
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 64);
    \u0275\u0275text(1, "\u0412\u0445\u043E\u0434");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 65);
    \u0275\u0275text(3, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F");
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "circle", 49)(2, "line", 50)(3, "line", 51)(4, "line", 52)(5, "line", 53)(6, "line", 54)(7, "line", 55)(8, "line", 56)(9, "line", 57);
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 19);
    \u0275\u0275element(1, "path", 58);
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 68)(4, "span", 69);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 70);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(8, "div", 71);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.userInitial());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.auth.user()) == null ? null : tmp_3_0.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.auth.isAdmin() ? "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440" : "\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B");
  }
}
function HeaderComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 72);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_67_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "rect", 73)(3, "rect", 74)(4, "rect", 75)(5, "rect", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \u0422\u0430\u0431\u043B\u043E ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "a", 77);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_67_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 19);
    \u0275\u0275element(9, "path", 78)(10, "circle", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " \u041F\u0440\u043E\u0444\u0438\u043B ");
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_69_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.auth.logout();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 61)(3, "polyline", 62)(4, "line", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \u0418\u0437\u0445\u043E\u0434 ");
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 81);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_70_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(1, "\u0412\u0445\u043E\u0434");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 82);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_70_Template_a_click_2_listener() {
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
  drawerEl = viewChild("drawer", ...ngDevMode ? [{ debugName: "drawerEl" }] : (
    /* istanbul ignore next */
    []
  ));
  triggerEl = null;
  openDrawer() {
    this.triggerEl = document.activeElement;
    this.drawerOpen.set(true);
    document.body.style.overflow = "hidden";
    queueMicrotask(() => this.getFocusableElements()[0]?.focus());
  }
  close() {
    if (!this.drawerOpen())
      return;
    this.drawerOpen.set(false);
    document.body.style.overflow = "";
    this.triggerEl?.focus();
    this.triggerEl = null;
  }
  userInitial() {
    const name = this.auth.user()?.name || "";
    return name.charAt(0).toUpperCase() || "?";
  }
  getFocusableElements() {
    const root = this.drawerEl()?.nativeElement;
    if (!root)
      return [];
    const selector = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';
    return Array.from(root.querySelectorAll(selector)).filter((el) => el.offsetParent !== null);
  }
  scrollHandler = () => this.scrolled.set(window.scrollY > 30);
  keydownHandler = (e) => {
    if (!this.drawerOpen())
      return;
    if (e.key === "Escape") {
      e.preventDefault();
      this.close();
      return;
    }
    if (e.key === "Tab") {
      const focusable = this.getFocusableElements();
      if (focusable.length === 0)
        return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || !this.drawerEl()?.nativeElement.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };
  ngOnInit() {
    window.addEventListener("scroll", this.scrollHandler, { passive: true });
    document.addEventListener("keydown", this.keydownHandler);
  }
  ngOnDestroy() {
    window.removeEventListener("scroll", this.scrollHandler);
    document.removeEventListener("keydown", this.keydownHandler);
    document.body.style.overflow = "";
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.drawerEl, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 71, vars: 22, consts: [["drawer", ""], [1, "site-header"], [1, "header-inner"], ["aria-label", "\u041E\u0442\u0432\u043E\u0440\u0438 \u043C\u0435\u043D\u044E\u0442\u043E", 1, "mobile-toggle", 3, "click"], [1, "hamburger"], ["routerLink", "/", 1, "brand"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.6", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", 1, "brand-icon"], ["d", "M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"], ["d", "M3 11h18v2a7 7 0 0 1-14 0H3z"], ["x1", "9", "y1", "20", "x2", "15", "y2", "20"], ["x1", "12", "y1", "17", "x2", "12", "y2", "20"], [1, "brand-text"], [1, "nav-links"], [1, "nav-main"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/recipes", "routerLinkActive", "active"], ["routerLink", "/categories", "routerLinkActive", "active"], [1, "nav-auth"], [1, "theme-toggle", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], [1, "logout-btn"], ["aria-hidden", "true", 1, "drawer-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F", 1, "mobile-drawer"], [1, "drawer-header"], ["routerLink", "/", 1, "drawer-brand", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.6", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], [1, "drawer-header-actions"], ["aria-label", "\u0417\u0430\u0442\u0432\u043E\u0440\u0438 \u043C\u0435\u043D\u044E\u0442\u043E", 1, "drawer-close", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "drawer-nav"], ["routerLink", "/", "routerLinkActive", "active", 1, "drawer-item", 3, "click", "routerLinkActiveOptions"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9 22 9 12 15 12 15 22"], ["routerLink", "/recipes", "routerLinkActive", "active", 1, "drawer-item", 3, "click"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["routerLink", "/categories", "routerLinkActive", "active", 1, "drawer-item", 3, "click"], ["x", "3", "y", "3", "width", "7", "height", "7", "rx", "1.5"], ["x", "14", "y", "3", "width", "7", "height", "7", "rx", "1.5"], ["x", "14", "y", "14", "width", "7", "height", "7", "rx", "1.5"], ["x", "3", "y", "14", "width", "7", "height", "7", "rx", "1.5"], [1, "drawer-footer"], [1, "drawer-logout"], ["routerLink", "/dashboard", "routerLinkActive", "active"], ["routerLink", "/profile", "routerLinkActive", "active"], ["cx", "12", "cy", "12", "r", "5"], ["x1", "12", "y1", "1", "x2", "12", "y2", "3"], ["x1", "12", "y1", "21", "x2", "12", "y2", "23"], ["x1", "4.22", "y1", "4.22", "x2", "5.64", "y2", "5.64"], ["x1", "18.36", "y1", "18.36", "x2", "19.78", "y2", "19.78"], ["x1", "1", "y1", "12", "x2", "3", "y2", "12"], ["x1", "21", "y1", "12", "x2", "23", "y2", "12"], ["x1", "4.22", "y1", "19.78", "x2", "5.64", "y2", "18.36"], ["x1", "18.36", "y1", "5.64", "x2", "19.78", "y2", "4.22"], ["d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"], [1, "logout-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], ["routerLink", "/signin", "routerLinkActive", "active", 1, "signin-link"], ["routerLink", "/register", "routerLinkActive", "active", 1, "register-btn"], [1, "drawer-user"], [1, "drawer-avatar"], [1, "drawer-user-info"], [1, "drawer-user-name"], [1, "drawer-user-role"], [1, "drawer-sep"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "drawer-item", 3, "click"], ["x", "3", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "14", "width", "7", "height", "7", "rx", "1"], ["x", "3", "y", "14", "width", "7", "height", "7", "rx", "1"], ["routerLink", "/profile", "routerLinkActive", "active", 1, "drawer-item", 3, "click"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "drawer-logout", 3, "click"], ["routerLink", "/signin", 1, "drawer-signin", 3, "click"], ["routerLink", "/register", 1, "drawer-register", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 1)(1, "div", 2)(2, "button", 3);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_2_listener() {
        return ctx.openDrawer();
      });
      \u0275\u0275element(3, "span", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 6);
      \u0275\u0275element(6, "path", 7)(7, "path", 8)(8, "line", 9)(9, "line", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "span", 11);
      \u0275\u0275text(11, "\u041A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F\u0442 \u0431\u043B\u043E\u0433 \u043D\u0430 \u0418\u0432\u043E");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "nav", 12)(13, "div", 13)(14, "a", 14);
      \u0275\u0275text(15, "\u041D\u0430\u0447\u0430\u043B\u043E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 15);
      \u0275\u0275text(17, "\u0420\u0435\u0446\u0435\u043F\u0442\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "a", 16);
      \u0275\u0275text(19, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(20, HeaderComponent_Conditional_20_Template, 4, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 17)(22, "button", 18);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_22_listener() {
        return ctx.theme.toggle();
      });
      \u0275\u0275conditionalCreate(23, HeaderComponent_Conditional_23_Template, 10, 0, ":svg:svg", 19)(24, HeaderComponent_Conditional_24_Template, 2, 0, ":svg:svg", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(25, HeaderComponent_Conditional_25_Template, 6, 0, "button", 20)(26, HeaderComponent_Conditional_26_Template, 4, 0);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(27, "div", 21);
      \u0275\u0275listener("click", function HeaderComponent_Template_div_click_27_listener() {
        return ctx.close();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 22, 0)(30, "div", 23)(31, "a", 24);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_31_listener() {
        return ctx.close();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 25);
      \u0275\u0275element(33, "path", 7)(34, "path", 8)(35, "line", 9)(36, "line", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(37, " \u041A\u0443\u043B\u0438\u043D\u0430\u0440\u0435\u043D \u0431\u043B\u043E\u0433 ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(38, "div", 26)(39, "button", 18);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_39_listener() {
        return ctx.theme.toggle();
      });
      \u0275\u0275conditionalCreate(40, HeaderComponent_Conditional_40_Template, 10, 0, ":svg:svg", 19)(41, HeaderComponent_Conditional_41_Template, 2, 0, ":svg:svg", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 27);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_42_listener() {
        return ctx.close();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(43, "svg", 28);
      \u0275\u0275element(44, "line", 29)(45, "line", 30);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(46, HeaderComponent_Conditional_46_Template, 9, 3);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(47, "nav", 31)(48, "a", 32);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_48_listener() {
        return ctx.close();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(49, "svg", 19);
      \u0275\u0275element(50, "path", 33)(51, "polyline", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275text(52, " \u041D\u0430\u0447\u0430\u043B\u043E ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(53, "a", 35);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_53_listener() {
        return ctx.close();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(54, "svg", 19);
      \u0275\u0275element(55, "path", 36)(56, "polyline", 37)(57, "line", 38)(58, "line", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275text(59, " \u0420\u0435\u0446\u0435\u043F\u0442\u0438 ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(60, "a", 40);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_60_listener() {
        return ctx.close();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(61, "svg", 19);
      \u0275\u0275element(62, "rect", 41)(63, "rect", 42)(64, "rect", 43)(65, "rect", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275text(66, " \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(67, HeaderComponent_Conditional_67_Template, 12, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(68, "div", 45);
      \u0275\u0275conditionalCreate(69, HeaderComponent_Conditional_69_Template, 6, 0, "button", 46)(70, HeaderComponent_Conditional_70_Template, 4, 0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("scrolled", ctx.scrolled());
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-expanded", ctx.drawerOpen());
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(20, _c1));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.auth.isAuthenticated() ? 20 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", ctx.theme.isDark() ? "\u0412\u043A\u043B\u044E\u0447\u0438 \u0441\u0432\u0435\u0442\u044A\u043B \u0440\u0435\u0436\u0438\u043C" : "\u0412\u043A\u043B\u044E\u0447\u0438 \u0442\u044A\u043C\u0435\u043D \u0440\u0435\u0436\u0438\u043C")("aria-pressed", ctx.theme.isDark());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.theme.isDark() ? 23 : 24);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.auth.isAuthenticated() ? 25 : 26);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("visible", ctx.drawerOpen());
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.drawerOpen());
      \u0275\u0275attribute("inert", ctx.drawerOpen() ? null : "");
      \u0275\u0275advance(11);
      \u0275\u0275attribute("aria-label", ctx.theme.isDark() ? "\u0412\u043A\u043B\u044E\u0447\u0438 \u0441\u0432\u0435\u0442\u044A\u043B \u0440\u0435\u0436\u0438\u043C" : "\u0412\u043A\u043B\u044E\u0447\u0438 \u0442\u044A\u043C\u0435\u043D \u0440\u0435\u0436\u0438\u043C");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.theme.isDark() ? 40 : 41);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.auth.isAuthenticated() ? 46 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(21, _c1));
      \u0275\u0275advance(19);
      \u0275\u0275conditional(ctx.auth.isAuthenticated() ? 67 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.auth.isAuthenticated() ? 69 : 70);
    }
  }, dependencies: [RouterLink, RouterLinkActive], styles: ['\n.site-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: var(--z-sticky);\n  background: var(--clr-surface);\n  border-bottom: 1px solid var(--clr-border-faint);\n  transition: box-shadow 0.28s var(--ease-out-expo), border-color 0.28s var(--ease-out-expo);\n}\n.site-header.scrolled[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 0 var(--clr-border-faint), 0 4px 20px rgba(26, 20, 14, 0.06);\n  border-bottom-color: var(--clr-border);\n}\n.header-inner[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n  height: 3.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.site-header.scrolled[_ngcontent-%COMP%]   .header-inner[_ngcontent-%COMP%] {\n  height: 3.25rem;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  height: 1.75rem;\n  flex-shrink: 0;\n  color: var(--clr-brand);\n}\n.brand-text[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--clr-text);\n  letter-spacing: -0.01em;\n  white-space: nowrap;\n  transition: color 0.2s;\n}\n.brand[_ngcontent-%COMP%]:hover   .brand-text[_ngcontent-%COMP%] {\n  color: var(--clr-brand);\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.nav-main[_ngcontent-%COMP%] {\n  display: none;\n}\n.nav-auth[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.register-btn) {\n  padding: 0.4rem 0.85rem;\n  border-radius: var(--radius-pill);\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--clr-text-muted);\n  transition: background 0.16s, color 0.16s;\n  white-space: nowrap;\n  min-height: 2.25rem;\n  display: flex;\n  align-items: center;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.register-btn):hover {\n  background: var(--clr-surface-hover);\n  color: var(--clr-text);\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.register-btn).active {\n  background: var(--clr-surface-active);\n  color: var(--clr-brand);\n  font-weight: 600;\n}\n.register-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.4rem 1rem;\n  border-radius: var(--radius-pill);\n  text-decoration: none;\n  white-space: nowrap;\n  min-height: 2.25rem;\n  background: var(--clr-brand);\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: background 0.18s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);\n}\n.register-btn[_ngcontent-%COMP%]:hover {\n  background: var(--clr-brand-dark);\n  transform: translateY(-1px);\n}\n.register-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.register-btn.active[_ngcontent-%COMP%] {\n  background: var(--clr-brand);\n}\n.logout-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.4rem 0.85rem;\n  border-radius: var(--radius-pill);\n  border: none;\n  background: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--clr-error);\n  cursor: pointer;\n  transition: background 0.16s;\n  white-space: nowrap;\n  min-height: 2.25rem;\n  touch-action: manipulation;\n}\n.logout-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: var(--clr-error-bg);\n  color: var(--clr-error-dark);\n}\n.theme-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  border: none;\n  background: none;\n  border-radius: var(--radius-circle);\n  color: var(--clr-text-muted);\n  cursor: pointer;\n  transition: background 0.16s, color 0.16s;\n  touch-action: manipulation;\n  flex-shrink: 0;\n}\n.theme-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.theme-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--clr-surface-hover);\n  color: var(--clr-text);\n}\n.mobile-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  border-radius: var(--radius-xs);\n  transition: background 0.16s;\n  min-width: 2.75rem;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  touch-action: manipulation;\n  order: -1;\n}\n.mobile-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--clr-surface-hover);\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: block;\n  width: 1.2rem;\n  height: 1.5px;\n  background: var(--clr-text);\n  position: relative;\n}\n.hamburger[_ngcontent-%COMP%]::before, \n.hamburger[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 1.5px;\n  background: var(--clr-text);\n}\n.hamburger[_ngcontent-%COMP%]::before {\n  top: -5px;\n}\n.hamburger[_ngcontent-%COMP%]::after {\n  top: 5px;\n}\n.drawer-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: var(--z-overlay);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.26s var(--ease-out-expo);\n}\n.drawer-overlay.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n}\n.mobile-drawer[_ngcontent-%COMP%] {\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 300px;\n  max-width: 85vw;\n  height: 100vh;\n  height: 100dvh;\n  background: var(--clr-surface);\n  z-index: var(--z-drawer);\n  flex-direction: column;\n  transform: translateX(-100%);\n  transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);\n  box-shadow: 2px 0 32px rgba(26, 20, 14, 0.16);\n  overflow-y: auto;\n}\n.mobile-drawer.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 0.75rem 1rem 1.25rem;\n  border-bottom: 1px solid var(--clr-border-faint);\n  flex-shrink: 0;\n}\n.drawer-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.drawer-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  text-decoration: none;\n  font-family: var(--font-display);\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--clr-text);\n}\n.drawer-brand[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.3rem;\n  height: 1.3rem;\n  color: var(--clr-brand);\n  flex-shrink: 0;\n}\n.drawer-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.4rem;\n  border-radius: var(--radius-xs);\n  color: var(--clr-text-muted);\n  transition: background 0.16s, color 0.16s;\n  min-width: 2.25rem;\n  min-height: 2.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  touch-action: manipulation;\n}\n.drawer-close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.drawer-close[_ngcontent-%COMP%]:hover {\n  background: var(--clr-surface-hover);\n  color: var(--clr-text);\n}\n.drawer-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n}\n.drawer-avatar[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: var(--radius-circle);\n  background: var(--clr-brand);\n  color: #ffffff;\n  font-size: 0.9rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.drawer-user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n  min-width: 0;\n}\n.drawer-user-name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--clr-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.drawer-user-role[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--clr-text-faint);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.drawer-sep[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--clr-border-faint);\n  margin: 0 1.25rem;\n}\n.drawer-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem;\n  flex: 1;\n  gap: 0.1rem;\n}\n.drawer-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.7rem 0.75rem;\n  border-radius: var(--radius-sm);\n  text-decoration: none;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--clr-text);\n  transition: background 0.16s, color 0.16s;\n  touch-action: manipulation;\n  min-height: 2.75rem;\n}\n.drawer-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.05rem;\n  height: 1.05rem;\n  flex-shrink: 0;\n  color: var(--clr-text-muted);\n}\n.drawer-item[_ngcontent-%COMP%]:hover {\n  background: var(--clr-surface-hover);\n}\n.drawer-item.active[_ngcontent-%COMP%] {\n  background: var(--clr-surface-active);\n  color: var(--clr-brand);\n  font-weight: 600;\n}\n.drawer-item.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--clr-brand);\n}\n.drawer-footer[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-top: 1px solid var(--clr-border-faint);\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.drawer-logout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.7rem 0.75rem;\n  border-radius: var(--radius-sm);\n  border: none;\n  background: none;\n  width: 100%;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--clr-error);\n  cursor: pointer;\n  touch-action: manipulation;\n  min-height: 2.75rem;\n  transition: background 0.16s;\n}\n.drawer-logout[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.05rem;\n  height: 1.05rem;\n  flex-shrink: 0;\n}\n.drawer-logout[_ngcontent-%COMP%]:hover {\n  background: var(--clr-error-bg);\n}\n.drawer-signin[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.7rem 1rem;\n  border-radius: var(--radius-sm);\n  text-decoration: none;\n  text-align: center;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--clr-text-muted);\n  transition: background 0.16s;\n}\n.drawer-signin[_ngcontent-%COMP%]:hover {\n  background: var(--clr-surface-hover);\n}\n.drawer-register[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.7rem 1rem;\n  border-radius: var(--radius-sm);\n  text-decoration: none;\n  text-align: center;\n  font-size: 0.9rem;\n  font-weight: 600;\n  background: var(--clr-brand);\n  color: #ffffff;\n  transition: background 0.18s var(--ease-out-expo);\n}\n.drawer-register[_ngcontent-%COMP%]:hover {\n  background: var(--clr-brand-dark);\n}\n@media (min-width: 900px) {\n  .mobile-toggle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nav-main[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.15rem;\n    margin-right: 0.5rem;\n  }\n  .nav-auth[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n@media (max-width: 899px) and (max-width: 640px) {\n  .nav-auth[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 640px) {\n  .nav-auth[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 400px) {\n  .brand-text[_ngcontent-%COMP%] {\n    font-size: 0.88rem;\n  }\n  .header-inner[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .mobile-drawer[_ngcontent-%COMP%], \n   .drawer-overlay[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */'], changeDetection: 0 });
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
          <svg class="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"/><path d="M3 11h18v2a7 7 0 0 1-14 0H3z"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="17" x2="12" y2="20"/></svg>
          <span class="brand-text">\u041A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F\u0442 \u0431\u043B\u043E\u0433 \u043D\u0430 \u0418\u0432\u043E</span>
        </a>

        <nav class="nav-links">
          <div class="nav-main">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">\u041D\u0430\u0447\u0430\u043B\u043E</a>
            <a routerLink="/recipes" routerLinkActive="active">\u0420\u0435\u0446\u0435\u043F\u0442\u0438</a>
            <a routerLink="/categories" routerLinkActive="active">\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438</a>
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

    <div class="drawer-overlay" [class.visible]="drawerOpen()" (click)="close()" aria-hidden="true"></div>

    <div class="mobile-drawer" #drawer [class.open]="drawerOpen()"
         role="dialog" aria-modal="true" aria-label="\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F"
         [attr.inert]="drawerOpen() ? null : ''">

      <div class="drawer-header">
        <a routerLink="/" class="drawer-brand" (click)="close()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"/><path d="M3 11h18v2a7 7 0 0 1-14 0H3z"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="17" x2="12" y2="20"/></svg>
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
        <a routerLink="/categories" routerLinkActive="active"
           class="drawer-item" (click)="close()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg>
          \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438
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
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* angular:styles/component:scss;93d424240f4ea65938d9532f590f6ed1951479d9297b551f6f08aa7159003b74;/home/ivaylo-penev/Desktop/Blog-System-Angular/frontend/src/app/components/header/header.component.ts */\n.site-header {\n  position: sticky;\n  top: 0;\n  z-index: var(--z-sticky);\n  background: var(--clr-surface);\n  border-bottom: 1px solid var(--clr-border-faint);\n  transition: box-shadow 0.28s var(--ease-out-expo), border-color 0.28s var(--ease-out-expo);\n}\n.site-header.scrolled {\n  box-shadow: 0 1px 0 var(--clr-border-faint), 0 4px 20px rgba(26, 20, 14, 0.06);\n  border-bottom-color: var(--clr-border);\n}\n.header-inner {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n  height: 3.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.site-header.scrolled .header-inner {\n  height: 3.25rem;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.brand-icon {\n  width: 1.75rem;\n  height: 1.75rem;\n  flex-shrink: 0;\n  color: var(--clr-brand);\n}\n.brand-text {\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--clr-text);\n  letter-spacing: -0.01em;\n  white-space: nowrap;\n  transition: color 0.2s;\n}\n.brand:hover .brand-text {\n  color: var(--clr-brand);\n}\n.nav-links {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.nav-main {\n  display: none;\n}\n.nav-auth {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.nav-links a:not(.register-btn) {\n  padding: 0.4rem 0.85rem;\n  border-radius: var(--radius-pill);\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--clr-text-muted);\n  transition: background 0.16s, color 0.16s;\n  white-space: nowrap;\n  min-height: 2.25rem;\n  display: flex;\n  align-items: center;\n}\n.nav-links a:not(.register-btn):hover {\n  background: var(--clr-surface-hover);\n  color: var(--clr-text);\n}\n.nav-links a:not(.register-btn).active {\n  background: var(--clr-surface-active);\n  color: var(--clr-brand);\n  font-weight: 600;\n}\n.register-btn {\n  display: flex;\n  align-items: center;\n  padding: 0.4rem 1rem;\n  border-radius: var(--radius-pill);\n  text-decoration: none;\n  white-space: nowrap;\n  min-height: 2.25rem;\n  background: var(--clr-brand);\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: background 0.18s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);\n}\n.register-btn:hover {\n  background: var(--clr-brand-dark);\n  transform: translateY(-1px);\n}\n.register-btn:active {\n  transform: translateY(0);\n}\n.register-btn.active {\n  background: var(--clr-brand);\n}\n.logout-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.4rem 0.85rem;\n  border-radius: var(--radius-pill);\n  border: none;\n  background: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--clr-error);\n  cursor: pointer;\n  transition: background 0.16s;\n  white-space: nowrap;\n  min-height: 2.25rem;\n  touch-action: manipulation;\n}\n.logout-btn svg {\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.logout-btn:hover {\n  background: var(--clr-error-bg);\n  color: var(--clr-error-dark);\n}\n.theme-toggle {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  border: none;\n  background: none;\n  border-radius: var(--radius-circle);\n  color: var(--clr-text-muted);\n  cursor: pointer;\n  transition: background 0.16s, color 0.16s;\n  touch-action: manipulation;\n  flex-shrink: 0;\n}\n.theme-toggle svg {\n  width: 1rem;\n  height: 1rem;\n}\n.theme-toggle:hover {\n  background: var(--clr-surface-hover);\n  color: var(--clr-text);\n}\n.mobile-toggle {\n  display: flex;\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  border-radius: var(--radius-xs);\n  transition: background 0.16s;\n  min-width: 2.75rem;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  touch-action: manipulation;\n  order: -1;\n}\n.mobile-toggle:hover {\n  background: var(--clr-surface-hover);\n}\n.hamburger {\n  display: block;\n  width: 1.2rem;\n  height: 1.5px;\n  background: var(--clr-text);\n  position: relative;\n}\n.hamburger::before,\n.hamburger::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 1.5px;\n  background: var(--clr-text);\n}\n.hamburger::before {\n  top: -5px;\n}\n.hamburger::after {\n  top: 5px;\n}\n.drawer-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: var(--z-overlay);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.26s var(--ease-out-expo);\n}\n.drawer-overlay.visible {\n  opacity: 1;\n  pointer-events: auto;\n}\n.mobile-drawer {\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 300px;\n  max-width: 85vw;\n  height: 100vh;\n  height: 100dvh;\n  background: var(--clr-surface);\n  z-index: var(--z-drawer);\n  flex-direction: column;\n  transform: translateX(-100%);\n  transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);\n  box-shadow: 2px 0 32px rgba(26, 20, 14, 0.16);\n  overflow-y: auto;\n}\n.mobile-drawer.open {\n  transform: translateX(0);\n}\n.drawer-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 0.75rem 1rem 1.25rem;\n  border-bottom: 1px solid var(--clr-border-faint);\n  flex-shrink: 0;\n}\n.drawer-header-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.drawer-brand {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  text-decoration: none;\n  font-family: var(--font-display);\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--clr-text);\n}\n.drawer-brand svg {\n  width: 1.3rem;\n  height: 1.3rem;\n  color: var(--clr-brand);\n  flex-shrink: 0;\n}\n.drawer-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.4rem;\n  border-radius: var(--radius-xs);\n  color: var(--clr-text-muted);\n  transition: background 0.16s, color 0.16s;\n  min-width: 2.25rem;\n  min-height: 2.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  touch-action: manipulation;\n}\n.drawer-close svg {\n  width: 1rem;\n  height: 1rem;\n}\n.drawer-close:hover {\n  background: var(--clr-surface-hover);\n  color: var(--clr-text);\n}\n.drawer-user {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n}\n.drawer-avatar {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: var(--radius-circle);\n  background: var(--clr-brand);\n  color: #ffffff;\n  font-size: 0.9rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.drawer-user-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n  min-width: 0;\n}\n.drawer-user-name {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--clr-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.drawer-user-role {\n  font-size: 0.68rem;\n  color: var(--clr-text-faint);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.drawer-sep {\n  height: 1px;\n  background: var(--clr-border-faint);\n  margin: 0 1.25rem;\n}\n.drawer-nav {\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem;\n  flex: 1;\n  gap: 0.1rem;\n}\n.drawer-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.7rem 0.75rem;\n  border-radius: var(--radius-sm);\n  text-decoration: none;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--clr-text);\n  transition: background 0.16s, color 0.16s;\n  touch-action: manipulation;\n  min-height: 2.75rem;\n}\n.drawer-item svg {\n  width: 1.05rem;\n  height: 1.05rem;\n  flex-shrink: 0;\n  color: var(--clr-text-muted);\n}\n.drawer-item:hover {\n  background: var(--clr-surface-hover);\n}\n.drawer-item.active {\n  background: var(--clr-surface-active);\n  color: var(--clr-brand);\n  font-weight: 600;\n}\n.drawer-item.active svg {\n  color: var(--clr-brand);\n}\n.drawer-footer {\n  padding: 0.75rem;\n  border-top: 1px solid var(--clr-border-faint);\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.drawer-logout {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.7rem 0.75rem;\n  border-radius: var(--radius-sm);\n  border: none;\n  background: none;\n  width: 100%;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--clr-error);\n  cursor: pointer;\n  touch-action: manipulation;\n  min-height: 2.75rem;\n  transition: background 0.16s;\n}\n.drawer-logout svg {\n  width: 1.05rem;\n  height: 1.05rem;\n  flex-shrink: 0;\n}\n.drawer-logout:hover {\n  background: var(--clr-error-bg);\n}\n.drawer-signin {\n  display: block;\n  padding: 0.7rem 1rem;\n  border-radius: var(--radius-sm);\n  text-decoration: none;\n  text-align: center;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--clr-text-muted);\n  transition: background 0.16s;\n}\n.drawer-signin:hover {\n  background: var(--clr-surface-hover);\n}\n.drawer-register {\n  display: block;\n  padding: 0.7rem 1rem;\n  border-radius: var(--radius-sm);\n  text-decoration: none;\n  text-align: center;\n  font-size: 0.9rem;\n  font-weight: 600;\n  background: var(--clr-brand);\n  color: #ffffff;\n  transition: background 0.18s var(--ease-out-expo);\n}\n.drawer-register:hover {\n  background: var(--clr-brand-dark);\n}\n@media (min-width: 900px) {\n  .mobile-toggle {\n    display: none;\n  }\n  .nav-main {\n    display: flex;\n    align-items: center;\n    gap: 0.15rem;\n    margin-right: 0.5rem;\n  }\n  .nav-auth {\n    display: flex;\n  }\n}\n@media (max-width: 899px) and (max-width: 640px) {\n  .nav-auth {\n    display: none;\n  }\n}\n@media (max-width: 640px) {\n  .nav-auth {\n    display: none;\n  }\n}\n@media (max-width: 400px) {\n  .brand-text {\n    font-size: 0.88rem;\n  }\n  .header-inner {\n    padding: 0 1rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .mobile-drawer,\n  .drawer-overlay {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */\n'] }]
  }], null, { drawerEl: [{ type: ViewChild, args: ["drawer", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/components/header/header.component.ts", lineNumber: 506 });
})();

// src/app/components/footer/footer.component.ts
function FooterComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 43);
    \u0275\u0275text(1, "\u0422\u0430\u0431\u043B\u043E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 44);
    \u0275\u0275text(3, "\u041F\u0440\u043E\u0444\u0438\u043B");
    \u0275\u0275elementEnd();
  }
}
function FooterComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 45);
    \u0275\u0275text(1, "\u0412\u0445\u043E\u0434");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 46);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 65, vars: 2, consts: [[1, "site-footer"], [1, "footer-inner"], [1, "footer-grid"], [1, "footer-brand"], ["routerLink", "/", 1, "brand-logo"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"], ["d", "M3 11h18v2a7 7 0 0 1-14 0H3z"], ["x1", "9", "y1", "20", "x2", "15", "y2", "20"], ["x1", "12", "y1", "17", "x2", "12", "y2", "20"], [1, "brand-desc"], [1, "footer-col"], [1, "col-title"], ["routerLink", "/"], ["routerLink", "/recipes"], ["routerLink", "/categories"], [1, "social-grid"], ["href", "https://facebook.com", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Facebook", 1, "social-link"], ["viewBox", "0 0 24 24", "fill", "currentColor", "aria-hidden", "true"], ["d", "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"], ["href", "https://instagram.com", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Instagram", 1, "social-link"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["x", "2", "y", "2", "width", "20", "height", "20", "rx", "5", "ry", "5"], ["d", "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"], ["x1", "17.5", "y1", "6.5", "x2", "17.51", "y2", "6.5"], ["href", "https://youtube.com", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "YouTube", 1, "social-link"], ["d", "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"], ["points", "9.75 15.02 15.5 12 9.75 8.98 9.75 15.02", "fill", "oklch(98% 0 0)"], ["href", "https://pinterest.com", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Pinterest", 1, "social-link"], ["d", "M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"], [1, "newsletter-desc"], [1, "newsletter-form", 3, "submit"], ["type", "email", "placeholder", "\u0442\u0432\u043E\u044F\u0442@\u0438\u043C\u0435\u0439\u043B.com", "aria-label", "\u0418\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441 \u0437\u0430 \u0430\u0431\u043E\u043D\u0430\u043C\u0435\u043D\u0442", 1, "newsletter-input"], ["type", "submit", "aria-label", "\u0410\u0431\u043E\u043D\u0438\u0440\u0430\u0439 \u0441\u0435", 1, "newsletter-btn"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"], [1, "footer-bottom"], [1, "copyright"], [1, "footer-bottom-links"], ["routerLink", "/privacy"], ["aria-hidden", "true", 1, "sep"], [1, "made-with"], ["routerLink", "/dashboard"], ["routerLink", "/profile"], ["routerLink", "/signin"], ["routerLink", "/register"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6)(7, "path", 7)(8, "line", 8)(9, "line", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "span");
      \u0275\u0275text(11, "\u041A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F\u0442 \u0431\u043B\u043E\u0433 \u043D\u0430 \u0418\u0432\u043E");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "p", 10);
      \u0275\u0275text(13, "\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438, \u0441\u043F\u043E\u0434\u0435\u043B\u0435\u043D\u0438 \u0441 \u043B\u044E\u0431\u043E\u0432 \u0438 \u0441\u0442\u0440\u0430\u0441\u0442 \u043A\u044A\u043C \u0434\u043E\u0431\u0440\u043E\u0442\u043E \u0433\u043E\u0442\u0432\u0435\u043D\u0435.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 11)(15, "span", 12);
      \u0275\u0275text(16, "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 13);
      \u0275\u0275text(18, "\u041D\u0430\u0447\u0430\u043B\u043E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 14);
      \u0275\u0275text(20, "\u0420\u0435\u0446\u0435\u043F\u0442\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 15);
      \u0275\u0275text(22, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(23, FooterComponent_Conditional_23_Template, 4, 0)(24, FooterComponent_Conditional_24_Template, 4, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 11)(26, "span", 12);
      \u0275\u0275text(27, "\u0421\u043E\u0446\u0438\u0430\u043B\u043D\u0438 \u043C\u0440\u0435\u0436\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 16)(29, "a", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(30, "svg", 18);
      \u0275\u0275element(31, "path", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(32, "a", 20);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(33, "svg", 21);
      \u0275\u0275element(34, "rect", 22)(35, "path", 23)(36, "line", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(37, "a", 25);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(38, "svg", 18);
      \u0275\u0275element(39, "path", 26)(40, "polygon", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(41, "a", 28);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(42, "svg", 18);
      \u0275\u0275element(43, "path", 29);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(44, "div", 11)(45, "span", 12);
      \u0275\u0275text(46, "\u0410\u0431\u043E\u043D\u0438\u0440\u0430\u0439 \u0441\u0435");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "p", 30);
      \u0275\u0275text(48, "\u041F\u043E\u043B\u0443\u0447\u0430\u0432\u0430\u0439 \u043D\u043E\u0432\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438 \u0432\u0441\u044F\u043A\u0430 \u0441\u0435\u0434\u043C\u0438\u0446\u0430 \u0434\u0438\u0440\u0435\u043A\u0442\u043D\u043E \u0432 \u0438\u043C\u0435\u0439\u043B\u0430 \u0441\u0438.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "form", 31);
      \u0275\u0275listener("submit", function FooterComponent_Template_form_submit_49_listener($event) {
        return $event.preventDefault();
      });
      \u0275\u0275element(50, "input", 32);
      \u0275\u0275elementStart(51, "button", 33);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(52, "svg", 34);
      \u0275\u0275element(53, "line", 35)(54, "polyline", 36);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(55, "div", 37)(56, "p", 38);
      \u0275\u0275text(57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 39)(59, "a", 40);
      \u0275\u0275text(60, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u0437\u0430 \u043F\u043E\u0432\u0435\u0440\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "span", 41);
      \u0275\u0275text(62, "\xB7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "span", 42);
      \u0275\u0275text(64, "\u041D\u0430\u043F\u0440\u0430\u0432\u0435\u043D\u043E \u0441 \u043B\u044E\u0431\u043E\u0432 \u0438 \u0434\u043E\u0431\u0440\u0430 \u0445\u0440\u0430\u043D\u0430");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275conditional(ctx.auth.isAuthenticated() ? 23 : 24);
      \u0275\u0275advance(34);
      \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " \u041A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F\u0442 \u0431\u043B\u043E\u0433 \u043D\u0430 \u0418\u0432\u043E");
    }
  }, dependencies: [RouterLink], styles: ["\n.site-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  background: var(--clr-brand);\n  color: #ffffffe6;\n}\n.footer-inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 3.5rem 1.5rem 1.75rem;\n}\n.footer-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.6fr 1fr 1fr 1.4fr;\n  gap: 3rem;\n  padding-bottom: 2.5rem;\n  border-bottom: 1px solid oklch(100% 0 0deg / 0.15);\n  margin-bottom: 1.5rem;\n}\n.footer-brand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  text-decoration: none;\n  color: #ffffff;\n}\n.brand-logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  height: 1.75rem;\n  flex-shrink: 0;\n}\n.brand-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n.brand-desc[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: #ffffffb8;\n  margin: 0;\n  line-height: 1.65;\n}\n.footer-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n}\n.col-title[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #ffffff85;\n  margin-bottom: 0.35rem;\n}\n.footer-col[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffffd1;\n  text-decoration: none;\n  font-size: 0.875rem;\n  transition: color 0.18s;\n  touch-action: manipulation;\n}\n.footer-col[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n.social-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.55rem;\n  margin-top: 0.25rem;\n  flex-wrap: wrap;\n}\n.social-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.2rem;\n  height: 2.2rem;\n  border-radius: var(--radius-circle);\n  background: #ffffff24;\n  color: #ffffff;\n  text-decoration: none;\n  transition: background 0.18s, transform 0.18s var(--ease-out-expo);\n  touch-action: manipulation;\n}\n.social-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n@media (hover: hover) and (pointer: fine) {\n  .social-link[_ngcontent-%COMP%]:hover {\n    background: #ffffff47;\n    transform: translateY(-2px);\n  }\n}\n.newsletter-desc[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: #ffffffb8;\n  margin: 0 0 0.5rem;\n  line-height: 1.62;\n}\n.newsletter-form[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  border: 1.5px solid oklch(100% 0 0deg / 0.32);\n  transition: border-color 0.18s;\n}\n.newsletter-form[_ngcontent-%COMP%]:focus-within {\n  border-color: #ffffffbf;\n}\n.newsletter-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #ffffff1f;\n  border: none;\n  outline: none;\n  padding: 0.62rem 0.85rem;\n  font-size: 0.82rem;\n  color: #ffffff;\n  font-family: var(--font-body);\n  min-width: 0;\n}\n.newsletter-input[_ngcontent-%COMP%]::placeholder {\n  color: #ffffff7a;\n}\n.newsletter-btn[_ngcontent-%COMP%] {\n  background: #ffffff2e;\n  border: none;\n  padding: 0.62rem 0.9rem;\n  cursor: pointer;\n  color: #ffffff;\n  transition: background 0.18s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  touch-action: manipulation;\n  flex-shrink: 0;\n}\n.newsletter-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.95rem;\n  height: 0.95rem;\n}\n.newsletter-btn[_ngcontent-%COMP%]:hover {\n  background: #ffffff4d;\n}\n.newsletter-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid oklch(100% 0 0deg);\n  outline-offset: -2px;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.copyright[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #ffffff80;\n  margin: 0;\n}\n.footer-bottom-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.78rem;\n}\n.footer-bottom-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff80;\n  text-decoration: none;\n  transition: color 0.18s;\n}\n.footer-bottom-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffffffcc;\n}\n.sep[_ngcontent-%COMP%] {\n  color: #ffffff4d;\n}\n.made-with[_ngcontent-%COMP%] {\n  color: #ffffff80;\n}\n@media (max-width: 900px) {\n  .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 2rem;\n  }\n}\n@media (max-width: 600px) {\n  .footer-inner[_ngcontent-%COMP%] {\n    padding: 2.5rem 1.25rem 1.5rem;\n  }\n  .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.75rem;\n  }\n  .footer-bottom[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  .footer-bottom-links[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.35rem;\n  }\n  .sep[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [RouterLink], template: `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-grid">

          <div class="footer-brand">
            <a routerLink="/" class="brand-logo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"/><path d="M3 11h18v2a7 7 0 0 1-14 0H3z"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="17" x2="12" y2="20"/></svg>
              <span>\u041A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F\u0442 \u0431\u043B\u043E\u0433 \u043D\u0430 \u0418\u0432\u043E</span>
            </a>
            <p class="brand-desc">\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438, \u0441\u043F\u043E\u0434\u0435\u043B\u0435\u043D\u0438 \u0441 \u043B\u044E\u0431\u043E\u0432 \u0438 \u0441\u0442\u0440\u0430\u0441\u0442 \u043A\u044A\u043C \u0434\u043E\u0431\u0440\u043E\u0442\u043E \u0433\u043E\u0442\u0432\u0435\u043D\u0435.</p>
          </div>

          <div class="footer-col">
            <span class="col-title">\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F</span>
            <a routerLink="/">\u041D\u0430\u0447\u0430\u043B\u043E</a>
            <a routerLink="/recipes">\u0420\u0435\u0446\u0435\u043F\u0442\u0438</a>
            <a routerLink="/categories">\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438</a>
            @if (auth.isAuthenticated()) {
              <a routerLink="/dashboard">\u0422\u0430\u0431\u043B\u043E</a>
              <a routerLink="/profile">\u041F\u0440\u043E\u0444\u0438\u043B</a>
            } @else {
              <a routerLink="/signin">\u0412\u0445\u043E\u0434</a>
              <a routerLink="/register">\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</a>
            }
          </div>

          <div class="footer-col">
            <span class="col-title">\u0421\u043E\u0446\u0438\u0430\u043B\u043D\u0438 \u043C\u0440\u0435\u0436\u0438</span>
            <div class="social-grid">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="oklch(98% 0 0)"/></svg>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Pinterest">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              </a>
            </div>
          </div>

          <div class="footer-col">
            <span class="col-title">\u0410\u0431\u043E\u043D\u0438\u0440\u0430\u0439 \u0441\u0435</span>
            <p class="newsletter-desc">\u041F\u043E\u043B\u0443\u0447\u0430\u0432\u0430\u0439 \u043D\u043E\u0432\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438 \u0432\u0441\u044F\u043A\u0430 \u0441\u0435\u0434\u043C\u0438\u0446\u0430 \u0434\u0438\u0440\u0435\u043A\u0442\u043D\u043E \u0432 \u0438\u043C\u0435\u0439\u043B\u0430 \u0441\u0438.</p>
            <form class="newsletter-form" (submit)="$event.preventDefault()">
              <input type="email" placeholder="\u0442\u0432\u043E\u044F\u0442@\u0438\u043C\u0435\u0439\u043B.com" aria-label="\u0418\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441 \u0437\u0430 \u0430\u0431\u043E\u043D\u0430\u043C\u0435\u043D\u0442" class="newsletter-input">
              <button type="submit" class="newsletter-btn" aria-label="\u0410\u0431\u043E\u043D\u0438\u0440\u0430\u0439 \u0441\u0435">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </form>
          </div>

        </div>

        <div class="footer-bottom">
          <p class="copyright">\xA9 {{ currentYear }} \u041A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F\u0442 \u0431\u043B\u043E\u0433 \u043D\u0430 \u0418\u0432\u043E</p>
          <div class="footer-bottom-links">
            <a routerLink="/privacy">\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u0437\u0430 \u043F\u043E\u0432\u0435\u0440\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442</a>
            <span class="sep" aria-hidden="true">\xB7</span>
            <span class="made-with">\u041D\u0430\u043F\u0440\u0430\u0432\u0435\u043D\u043E \u0441 \u043B\u044E\u0431\u043E\u0432 \u0438 \u0434\u043E\u0431\u0440\u0430 \u0445\u0440\u0430\u043D\u0430</span>
          </div>
        </div>
      </div>
    </footer>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;ce623dc37bc4c53a2d6e085b93934f54d8d21bcd640f2412639f9bb0a09b21a1;/home/ivaylo-penev/Desktop/Blog-System-Angular/frontend/src/app/components/footer/footer.component.ts */\n.site-footer {\n  margin-top: auto;\n  background: var(--clr-brand);\n  color: #ffffffe6;\n}\n.footer-inner {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 3.5rem 1.5rem 1.75rem;\n}\n.footer-grid {\n  display: grid;\n  grid-template-columns: 1.6fr 1fr 1fr 1.4fr;\n  gap: 3rem;\n  padding-bottom: 2.5rem;\n  border-bottom: 1px solid oklch(100% 0 0deg / 0.15);\n  margin-bottom: 1.5rem;\n}\n.footer-brand {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.brand-logo {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  text-decoration: none;\n  color: #ffffff;\n}\n.brand-logo svg {\n  width: 1.75rem;\n  height: 1.75rem;\n  flex-shrink: 0;\n}\n.brand-logo span {\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n.brand-desc {\n  font-size: 0.83rem;\n  color: #ffffffb8;\n  margin: 0;\n  line-height: 1.65;\n}\n.footer-col {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n}\n.col-title {\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #ffffff85;\n  margin-bottom: 0.35rem;\n}\n.footer-col a {\n  color: #ffffffd1;\n  text-decoration: none;\n  font-size: 0.875rem;\n  transition: color 0.18s;\n  touch-action: manipulation;\n}\n.footer-col a:hover {\n  color: #ffffff;\n}\n.social-grid {\n  display: flex;\n  gap: 0.55rem;\n  margin-top: 0.25rem;\n  flex-wrap: wrap;\n}\n.social-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.2rem;\n  height: 2.2rem;\n  border-radius: var(--radius-circle);\n  background: #ffffff24;\n  color: #ffffff;\n  text-decoration: none;\n  transition: background 0.18s, transform 0.18s var(--ease-out-expo);\n  touch-action: manipulation;\n}\n.social-link svg {\n  width: 1rem;\n  height: 1rem;\n}\n@media (hover: hover) and (pointer: fine) {\n  .social-link:hover {\n    background: #ffffff47;\n    transform: translateY(-2px);\n  }\n}\n.newsletter-desc {\n  font-size: 0.83rem;\n  color: #ffffffb8;\n  margin: 0 0 0.5rem;\n  line-height: 1.62;\n}\n.newsletter-form {\n  display: flex;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  border: 1.5px solid oklch(100% 0 0deg / 0.32);\n  transition: border-color 0.18s;\n}\n.newsletter-form:focus-within {\n  border-color: #ffffffbf;\n}\n.newsletter-input {\n  flex: 1;\n  background: #ffffff1f;\n  border: none;\n  outline: none;\n  padding: 0.62rem 0.85rem;\n  font-size: 0.82rem;\n  color: #ffffff;\n  font-family: var(--font-body);\n  min-width: 0;\n}\n.newsletter-input::placeholder {\n  color: #ffffff7a;\n}\n.newsletter-btn {\n  background: #ffffff2e;\n  border: none;\n  padding: 0.62rem 0.9rem;\n  cursor: pointer;\n  color: #ffffff;\n  transition: background 0.18s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  touch-action: manipulation;\n  flex-shrink: 0;\n}\n.newsletter-btn svg {\n  width: 0.95rem;\n  height: 0.95rem;\n}\n.newsletter-btn:hover {\n  background: #ffffff4d;\n}\n.newsletter-btn:focus-visible {\n  outline: 2px solid oklch(100% 0 0deg);\n  outline-offset: -2px;\n}\n.footer-bottom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.copyright {\n  font-size: 0.78rem;\n  color: #ffffff80;\n  margin: 0;\n}\n.footer-bottom-links {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.78rem;\n}\n.footer-bottom-links a {\n  color: #ffffff80;\n  text-decoration: none;\n  transition: color 0.18s;\n}\n.footer-bottom-links a:hover {\n  color: #ffffffcc;\n}\n.sep {\n  color: #ffffff4d;\n}\n.made-with {\n  color: #ffffff80;\n}\n@media (max-width: 900px) {\n  .footer-grid {\n    grid-template-columns: 1fr 1fr;\n    gap: 2rem;\n  }\n}\n@media (max-width: 600px) {\n  .footer-inner {\n    padding: 2.5rem 1.25rem 1.5rem;\n  }\n  .footer-grid {\n    grid-template-columns: 1fr;\n    gap: 1.75rem;\n  }\n  .footer-bottom {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  .footer-bottom-links {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.35rem;\n  }\n  .sep {\n    display: none;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/components/footer/footer.component.ts", lineNumber: 258 });
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastComponent, selectors: [["app-toast"]], decls: 3, vars: 0, consts: [["aria-live", "polite", "aria-atomic", "false", 1, "toast-container"], ["role", "status", 1, "toast", 3, "class"], ["role", "status", 1, "toast"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", 1, "toast-icon"], ["points", "20 6 9 17 4 12"], ["aria-label", "\u0417\u0430\u0442\u0432\u043E\u0440\u0438", 1, "toast-close", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"]], template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, ToastComponent_For_2_Template, 11, 4, "div", 1, _forTrack0);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.toastService.toasts());
    }
  }, styles: ["\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1.5rem;\n  right: 1.5rem;\n  z-index: var(--z-toast);\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n  pointer-events: none;\n}\n.toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border-radius: var(--radius-md);\n  font-size: 0.875rem;\n  font-weight: 500;\n  max-width: 360px;\n  box-shadow: var(--shadow-md);\n  pointer-events: auto;\n  animation: _ngcontent-%COMP%_slide-in 0.28s var(--ease-out-expo);\n}\n@keyframes _ngcontent-%COMP%_slide-in {\n  from {\n    opacity: 0;\n    transform: translateX(1.25rem) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0) scale(1);\n  }\n}\n.toast-success[_ngcontent-%COMP%] {\n  background: var(--clr-green-bg);\n  color: var(--clr-green-text);\n  border: 1px solid var(--clr-green);\n}\n.toast-error[_ngcontent-%COMP%] {\n  background: var(--clr-error-bg);\n  color: var(--clr-error-dark);\n  border: 1px solid var(--clr-error);\n}\n.toast-info[_ngcontent-%COMP%] {\n  background: var(--clr-amber-bg);\n  color: var(--clr-amber-text);\n  border: 1px solid var(--clr-amber-border);\n}\n.toast-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.toast[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toast-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.2rem;\n  opacity: 0.6;\n  display: flex;\n  align-items: center;\n  border-radius: 0.25rem;\n  transition: opacity 0.15s var(--ease-out-expo);\n  touch-action: manipulation;\n}\n.toast-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.toast-close[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n}\n.toast-close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.9rem;\n  height: 0.9rem;\n}\n@media (max-width: 480px) {\n  .toast-container[_ngcontent-%COMP%] {\n    left: 1rem;\n    right: 1rem;\n    bottom: 1rem;\n  }\n  .toast[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .toast[_ngcontent-%COMP%] {\n    animation: none;\n  }\n  .toast-close[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=toast.component.css.map */"], changeDetection: 0 });
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
          <button class="toast-close" (click)="toastService.dismiss(toast.id)" aria-label="\u0417\u0430\u0442\u0432\u043E\u0440\u0438">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      }
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;28547aa3a6bd8680d77e1de34dd843d14a827454296d6a0fc0275a6012607fa3;/home/ivaylo-penev/Desktop/Blog-System-Angular/frontend/src/app/components/toast/toast.component.ts */\n.toast-container {\n  position: fixed;\n  bottom: 1.5rem;\n  right: 1.5rem;\n  z-index: var(--z-toast);\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n  pointer-events: none;\n}\n.toast {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border-radius: var(--radius-md);\n  font-size: 0.875rem;\n  font-weight: 500;\n  max-width: 360px;\n  box-shadow: var(--shadow-md);\n  pointer-events: auto;\n  animation: slide-in 0.28s var(--ease-out-expo);\n}\n@keyframes slide-in {\n  from {\n    opacity: 0;\n    transform: translateX(1.25rem) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0) scale(1);\n  }\n}\n.toast-success {\n  background: var(--clr-green-bg);\n  color: var(--clr-green-text);\n  border: 1px solid var(--clr-green);\n}\n.toast-error {\n  background: var(--clr-error-bg);\n  color: var(--clr-error-dark);\n  border: 1px solid var(--clr-error);\n}\n.toast-info {\n  background: var(--clr-amber-bg);\n  color: var(--clr-amber-text);\n  border: 1px solid var(--clr-amber-border);\n}\n.toast-icon {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.toast span {\n  flex: 1;\n}\n.toast-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.2rem;\n  opacity: 0.6;\n  display: flex;\n  align-items: center;\n  border-radius: 0.25rem;\n  transition: opacity 0.15s var(--ease-out-expo);\n  touch-action: manipulation;\n}\n.toast-close:hover {\n  opacity: 1;\n}\n.toast-close:active {\n  transform: scale(0.9);\n}\n.toast-close svg {\n  width: 0.9rem;\n  height: 0.9rem;\n}\n@media (max-width: 480px) {\n  .toast-container {\n    left: 1rem;\n    right: 1rem;\n    bottom: 1rem;\n  }\n  .toast {\n    max-width: 100%;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .toast {\n    animation: none;\n  }\n  .toast-close {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=toast.component.css.map */\n"] }]
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
  }, styles: ["\n.nav-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: var(--z-progress);\n  height: 3px;\n  width: 0%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--clr-green),\n      var(--clr-brand-hover));\n  border-radius: 0 2px 2px 0;\n  box-shadow: 0 0 10px color-mix(in oklch, var(--clr-green) 50%, transparent);\n  animation: _ngcontent-%COMP%_grow 1.2s cubic-bezier(0.1, 0.6, 0.4, 1) forwards;\n}\n.nav-bar.done[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_finish 0.22s ease-in forwards;\n}\n@keyframes _ngcontent-%COMP%_grow {\n  0% {\n    width: 0%;\n  }\n  15% {\n    width: 25%;\n  }\n  40% {\n    width: 50%;\n  }\n  70% {\n    width: 70%;\n  }\n  100% {\n    width: 82%;\n  }\n}\n@keyframes _ngcontent-%COMP%_finish {\n  from {\n    width: 82%;\n    opacity: 1;\n  }\n  to {\n    width: 100%;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=nav-progress.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavProgressComponent, [{
    type: Component,
    args: [{ selector: "app-nav-progress", standalone: true, template: `
    @if (visible()) {
      <div class="nav-bar" [class.done]="done()"></div>
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;875ecaa21ac60bd385cfe161a27073c4e22e723933c544995df5faf6b5379d05;/home/ivaylo-penev/Desktop/Blog-System-Angular/frontend/src/app/components/nav-progress/nav-progress.component.ts */\n.nav-bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: var(--z-progress);\n  height: 3px;\n  width: 0%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--clr-green),\n      var(--clr-brand-hover));\n  border-radius: 0 2px 2px 0;\n  box-shadow: 0 0 10px color-mix(in oklch, var(--clr-green) 50%, transparent);\n  animation: grow 1.2s cubic-bezier(0.1, 0.6, 0.4, 1) forwards;\n}\n.nav-bar.done {\n  animation: finish 0.22s ease-in forwards;\n}\n@keyframes grow {\n  0% {\n    width: 0%;\n  }\n  15% {\n    width: 25%;\n  }\n  40% {\n    width: 50%;\n  }\n  70% {\n    width: 70%;\n  }\n  100% {\n    width: 82%;\n  }\n}\n@keyframes finish {\n  from {\n    width: 82%;\n    opacity: 1;\n  }\n  to {\n    width: 100%;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=nav-progress.component.css.map */\n"] }]
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
  }, dependencies: [RouterOutlet, HeaderComponent, FooterComponent, ToastComponent, NavProgressComponent], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100dvh;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.skip-link[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 1rem;\n  z-index: var(--z-toast);\n  padding: 0.65rem 1.25rem;\n  background: var(--clr-brand);\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.875rem;\n  border-radius: 0 0 var(--radius-sm) var(--radius-sm);\n  text-decoration: none;\n  transform: translateY(-110%);\n  transition: transform 0.15s var(--ease-out-expo);\n}\n.skip-link[_ngcontent-%COMP%]:focus {\n  transform: translateY(0);\n  outline: 2.5px solid oklch(100% 0 0deg);\n  outline-offset: 2px;\n}\n/*# sourceMappingURL=app.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, HeaderComponent, FooterComponent, ToastComponent, NavProgressComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: '<a class="skip-link" href="#main-content">\u041F\u0440\u0435\u0441\u043A\u043E\u0447\u0438 \u043A\u044A\u043C \u0441\u044A\u0434\u044A\u0440\u0436\u0430\u043D\u0438\u0435\u0442\u043E</a>\n<app-nav-progress />\n<app-header />\n<main class="main-content" id="main-content">\n  <router-outlet />\n</main>\n<app-footer />\n<app-toast />\n', styles: ["/* src/app/app.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  min-height: 100dvh;\n}\n.main-content {\n  flex: 1;\n}\n.skip-link {\n  position: absolute;\n  top: 0;\n  left: 1rem;\n  z-index: var(--z-toast);\n  padding: 0.65rem 1.25rem;\n  background: var(--clr-brand);\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.875rem;\n  border-radius: 0 0 var(--radius-sm) var(--radius-sm);\n  text-decoration: none;\n  transform: translateY(-110%);\n  transition: transform 0.15s var(--ease-out-expo);\n}\n.skip-link:focus {\n  transform: translateY(0);\n  outline: 2.5px solid oklch(100% 0 0deg);\n  outline-offset: 2px;\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
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
