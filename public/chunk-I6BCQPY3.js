import {
  FavoriteService
} from "./chunk-HB5MKAR7.js";
import {
  RecipeCardComponent
} from "./chunk-2KX3R3JV.js";
import {
  takeUntilDestroyed
} from "./chunk-ZGNCPTQ3.js";
import "./chunk-QKG44OY5.js";
import {
  ChangeDetectionStrategy,
  Component,
  RouterLink,
  inject,
  setClassMetadata,
  signal,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-OGGNHWOY.js";

// src/app/pages/dashboard-favorites/dashboard-favorites.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DashboardFavoritesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.recipes().length);
  }
}
function DashboardFavoritesComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "div", 8);
    \u0275\u0275element(3, "div", 9)(4, "div", 10)(5, "div", 11);
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275element(7, "div", 13)(8, "div", 13);
    \u0275\u0275elementEnd()()();
  }
}
function DashboardFavoritesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, DashboardFavoritesComponent_Conditional_8_For_2_Template, 9, 0, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.skeletons);
  }
}
function DashboardFavoritesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 15);
    \u0275\u0275element(3, "path", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430\u0442\u0435 \u043B\u044E\u0431\u0438\u043C\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "\u0417\u0430\u043F\u0430\u0437\u0435\u0442\u0435 \u0440\u0435\u0446\u0435\u043F\u0442\u0438, \u0434\u043E\u043A\u0430\u0442\u043E \u0440\u0430\u0437\u0433\u043B\u0435\u0436\u0434\u0430\u0442\u0435 \u0431\u043B\u043E\u0433\u0430, \u0438 \u0442\u0435 \u0449\u0435 \u0441\u0435 \u043F\u043E\u044F\u0432\u044F\u0442 \u0442\u0443\u043A.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 18);
    \u0275\u0275element(10, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " \u0420\u0430\u0437\u0433\u043B\u0435\u0434\u0430\u0439 \u0440\u0435\u0446\u0435\u043F\u0442\u0438 ");
    \u0275\u0275elementEnd()();
  }
}
function DashboardFavoritesComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-recipe-card", 20);
  }
  if (rf & 2) {
    const recipe_r2 = ctx.$implicit;
    const \u0275$index_64_r3 = ctx.$index;
    \u0275\u0275property("recipe", recipe_r2)("index", \u0275$index_64_r3);
  }
}
function DashboardFavoritesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, DashboardFavoritesComponent_Conditional_10_For_2_Template, 1, 2, "app-recipe-card", 20, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.recipes());
  }
}
var DashboardFavoritesComponent = class _DashboardFavoritesComponent {
  favoriteService = inject(FavoriteService);
  recipes = signal([], ...ngDevMode ? [{ debugName: "recipes" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  skeletons = [0, 1, 2, 3, 4, 5];
  constructor() {
    this.favoriteService.getFavorites().pipe(takeUntilDestroyed()).subscribe({
      next: (r) => {
        this.recipes.set(r);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  static \u0275fac = function DashboardFavoritesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardFavoritesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardFavoritesComponent, selectors: [["app-dashboard-favorites"]], decls: 11, vars: 2, consts: [[1, "dashboard-favorites"], [1, "page-header"], [1, "subtitle"], [1, "count-badge"], [1, "favorites-grid"], [1, "empty-state"], [1, "skeleton-card"], [1, "sk-img"], [1, "sk-body"], [1, "sk-line", "sk-short"], [1, "sk-line", "sk-long"], [1, "sk-line", "sk-medium"], [1, "sk-meta"], [1, "sk-line", "sk-sm"], [1, "empty-icon"], ["viewBox", "0 0 64 64", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M48 12a12 12 0 0 0-16 0l-2 2-2-2a12 12 0 0 0-16 16l2 2L32 48l18-18 2-2a12 12 0 0 0-4-16z"], ["routerLink", "/recipes", 1, "btn-browse"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M4 6h16M4 12h16M4 18h7"], [3, "recipe", "index"]], template: function DashboardFavoritesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275text(4, "\u041B\u044E\u0431\u0438\u043C\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 2);
      \u0275\u0275text(6, "\u0420\u0435\u0446\u0435\u043F\u0442\u0438\u0442\u0435, \u043A\u043E\u0438\u0442\u043E \u0441\u0442\u0435 \u0437\u0430\u043F\u0430\u0437\u0438\u043B\u0438 \u0437\u0430 \u043F\u043E-\u043A\u044A\u0441\u043D\u043E.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, DashboardFavoritesComponent_Conditional_7_Template, 2, 1, "span", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, DashboardFavoritesComponent_Conditional_8_Template, 3, 0, "div", 4)(9, DashboardFavoritesComponent_Conditional_9_Template, 12, 0, "div", 5)(10, DashboardFavoritesComponent_Conditional_10_Template, 3, 0, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(!ctx.loading() && ctx.recipes().length > 0 ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 8 : ctx.recipes().length === 0 ? 9 : 10);
    }
  }, dependencies: [RouterLink, RecipeCardComponent], styles: ['\n.dashboard-favorites[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem 3rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.75rem;\n  gap: 1rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.5rem, 2.5vw, 1.75rem);\n  font-weight: 800;\n  color: var(--clr-text);\n  margin: 0 0 var(--space-1);\n  letter-spacing: -0.025em;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--clr-text-muted);\n  margin: 0;\n  font-size: 0.875rem;\n}\n.count-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 2rem;\n  height: 2rem;\n  padding: 0 var(--space-3);\n  background: var(--clr-amber-bg);\n  color: var(--clr-amber-text);\n  border-radius: var(--radius-pill);\n  font-size: 0.82rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.favorites-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: var(--space-6);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: var(--space-10) var(--space-7);\n  background: var(--clr-surface);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--clr-border-faint);\n  box-shadow: var(--shadow-sm);\n}\n.empty-icon[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 5rem;\n  border-radius: var(--radius-circle);\n  background: var(--clr-error-bg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: var(--space-5);\n}\n.empty-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  color: var(--clr-error);\n}\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: var(--clr-text);\n  margin: 0 0 var(--space-2);\n  letter-spacing: -0.02em;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--clr-text-muted);\n  font-size: 0.9rem;\n  margin: 0 0 var(--space-6);\n  max-width: 320px;\n  line-height: 1.6;\n}\n.btn-browse[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-3) var(--space-6);\n  background: var(--clr-brand);\n  color: #ffffff;\n  border-radius: var(--radius-pill);\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 0.875rem;\n  transition: background 0.18s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);\n  touch-action: manipulation;\n}\n.btn-browse[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.875rem;\n  height: 0.875rem;\n  flex-shrink: 0;\n}\n.btn-browse[_ngcontent-%COMP%]:hover {\n  background: var(--clr-brand-dark);\n  transform: translateY(-1px);\n}\n.btn-browse[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  background: var(--clr-surface);\n  box-shadow: var(--shadow-sm);\n}\n.sk-img[_ngcontent-%COMP%] {\n  aspect-ratio: 4/3;\n  background: var(--clr-skeleton);\n  position: relative;\n  overflow: hidden;\n}\n.sk-img[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: _ngcontent-%COMP%_shimmer 1.5s linear infinite;\n}\n.sk-body[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.sk-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n  margin-top: var(--space-1);\n}\n.sk-line[_ngcontent-%COMP%] {\n  height: 0.8rem;\n  border-radius: var(--radius-pill);\n  background: var(--clr-skeleton);\n  position: relative;\n  overflow: hidden;\n}\n.sk-line[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: _ngcontent-%COMP%_shimmer 1.5s linear infinite;\n}\n.sk-short[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.sk-long[_ngcontent-%COMP%] {\n  width: 75%;\n}\n.sk-medium[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.sk-sm[_ngcontent-%COMP%] {\n  width: 22%;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n@media (max-width: 768px) {\n  .dashboard-favorites[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem 2.5rem;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n}\n@media (max-width: 640px) {\n  .favorites-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .sk-img[_ngcontent-%COMP%]::after, \n   .sk-line[_ngcontent-%COMP%]::after {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=dashboard-favorites.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardFavoritesComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-favorites", standalone: true, imports: [RouterLink, RecipeCardComponent], template: `
    <div class="dashboard-favorites">
      <div class="page-header">
        <div>
          <h1>\u041B\u044E\u0431\u0438\u043C\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438</h1>
          <p class="subtitle">\u0420\u0435\u0446\u0435\u043F\u0442\u0438\u0442\u0435, \u043A\u043E\u0438\u0442\u043E \u0441\u0442\u0435 \u0437\u0430\u043F\u0430\u0437\u0438\u043B\u0438 \u0437\u0430 \u043F\u043E-\u043A\u044A\u0441\u043D\u043E.</p>
        </div>
        @if (!loading() && recipes().length > 0) {
          <span class="count-badge">{{ recipes().length }}</span>
        }
      </div>

      @if (loading()) {
        <div class="favorites-grid">
          @for (s of skeletons; track s) {
            <div class="skeleton-card">
              <div class="sk-img"></div>
              <div class="sk-body">
                <div class="sk-line sk-short"></div>
                <div class="sk-line sk-long"></div>
                <div class="sk-line sk-medium"></div>
                <div class="sk-meta">
                  <div class="sk-line sk-sm"></div>
                  <div class="sk-line sk-sm"></div>
                </div>
              </div>
            </div>
          }
        </div>
      } @else if (recipes().length === 0) {
        <div class="empty-state">
          <div class="empty-icon">
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M48 12a12 12 0 0 0-16 0l-2 2-2-2a12 12 0 0 0-16 16l2 2L32 48l18-18 2-2a12 12 0 0 0-4-16z"/></svg>
          </div>
          <h2>\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430\u0442\u0435 \u043B\u044E\u0431\u0438\u043C\u0438</h2>
          <p>\u0417\u0430\u043F\u0430\u0437\u0435\u0442\u0435 \u0440\u0435\u0446\u0435\u043F\u0442\u0438, \u0434\u043E\u043A\u0430\u0442\u043E \u0440\u0430\u0437\u0433\u043B\u0435\u0436\u0434\u0430\u0442\u0435 \u0431\u043B\u043E\u0433\u0430, \u0438 \u0442\u0435 \u0449\u0435 \u0441\u0435 \u043F\u043E\u044F\u0432\u044F\u0442 \u0442\u0443\u043A.</p>
          <a routerLink="/recipes" class="btn-browse">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h7"/></svg>
            \u0420\u0430\u0437\u0433\u043B\u0435\u0434\u0430\u0439 \u0440\u0435\u0446\u0435\u043F\u0442\u0438
          </a>
        </div>
      } @else {
        <div class="favorites-grid">
          @for (recipe of recipes(); track recipe.id; let i = $index) {
            <app-recipe-card [recipe]="recipe" [index]="i" />
          }
        </div>
      }
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* angular:styles/component:scss;90bc62de2cfcc9eb24a7f987e3c7fea29ac046f705fb75c1c917ed00a94fdf6c;/home/ivaylo-penev/Desktop/Blog-System-Angular/frontend/src/app/pages/dashboard-favorites/dashboard-favorites.component.ts */\n.dashboard-favorites {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem 3rem;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.75rem;\n  gap: 1rem;\n}\nh1 {\n  font-family: var(--font-display);\n  font-size: clamp(1.5rem, 2.5vw, 1.75rem);\n  font-weight: 800;\n  color: var(--clr-text);\n  margin: 0 0 var(--space-1);\n  letter-spacing: -0.025em;\n}\n.subtitle {\n  color: var(--clr-text-muted);\n  margin: 0;\n  font-size: 0.875rem;\n}\n.count-badge {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 2rem;\n  height: 2rem;\n  padding: 0 var(--space-3);\n  background: var(--clr-amber-bg);\n  color: var(--clr-amber-text);\n  border-radius: var(--radius-pill);\n  font-size: 0.82rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.favorites-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: var(--space-6);\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: var(--space-10) var(--space-7);\n  background: var(--clr-surface);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--clr-border-faint);\n  box-shadow: var(--shadow-sm);\n}\n.empty-icon {\n  width: 5rem;\n  height: 5rem;\n  border-radius: var(--radius-circle);\n  background: var(--clr-error-bg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: var(--space-5);\n}\n.empty-icon svg {\n  width: 2.5rem;\n  height: 2.5rem;\n  color: var(--clr-error);\n}\n.empty-state h2 {\n  font-family: var(--font-display);\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: var(--clr-text);\n  margin: 0 0 var(--space-2);\n  letter-spacing: -0.02em;\n}\n.empty-state p {\n  color: var(--clr-text-muted);\n  font-size: 0.9rem;\n  margin: 0 0 var(--space-6);\n  max-width: 320px;\n  line-height: 1.6;\n}\n.btn-browse {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-3) var(--space-6);\n  background: var(--clr-brand);\n  color: #ffffff;\n  border-radius: var(--radius-pill);\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 0.875rem;\n  transition: background 0.18s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);\n  touch-action: manipulation;\n}\n.btn-browse svg {\n  width: 0.875rem;\n  height: 0.875rem;\n  flex-shrink: 0;\n}\n.btn-browse:hover {\n  background: var(--clr-brand-dark);\n  transform: translateY(-1px);\n}\n.btn-browse:active {\n  transform: translateY(0);\n}\n.skeleton-card {\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  background: var(--clr-surface);\n  box-shadow: var(--shadow-sm);\n}\n.sk-img {\n  aspect-ratio: 4/3;\n  background: var(--clr-skeleton);\n  position: relative;\n  overflow: hidden;\n}\n.sk-img::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: shimmer 1.5s linear infinite;\n}\n.sk-body {\n  padding: var(--space-5);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.sk-meta {\n  display: flex;\n  gap: var(--space-3);\n  margin-top: var(--space-1);\n}\n.sk-line {\n  height: 0.8rem;\n  border-radius: var(--radius-pill);\n  background: var(--clr-skeleton);\n  position: relative;\n  overflow: hidden;\n}\n.sk-line::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: shimmer 1.5s linear infinite;\n}\n.sk-short {\n  width: 30%;\n}\n.sk-long {\n  width: 75%;\n}\n.sk-medium {\n  width: 50%;\n}\n.sk-sm {\n  width: 22%;\n}\n@keyframes shimmer {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n@media (max-width: 768px) {\n  .dashboard-favorites {\n    padding: 1.5rem 1rem 2.5rem;\n  }\n  .page-header {\n    align-items: flex-start;\n  }\n}\n@media (max-width: 640px) {\n  .favorites-grid {\n    grid-template-columns: 1fr;\n  }\n  h1 {\n    font-size: 1.5rem;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .sk-img::after,\n  .sk-line::after {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=dashboard-favorites.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardFavoritesComponent, { className: "DashboardFavoritesComponent", filePath: "src/app/pages/dashboard-favorites/dashboard-favorites.component.ts", lineNumber: 225 });
})();
export {
  DashboardFavoritesComponent
};
//# sourceMappingURL=chunk-I6BCQPY3.js.map
