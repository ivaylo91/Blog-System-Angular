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
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-OGGNHWOY.js";

// src/app/pages/categories/categories.component.ts
var _c0 = () => ["/recipes"];
var _c1 = (a0) => ({ category: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function CategoriesComponent_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
  }
}
function CategoriesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, CategoriesComponent_Conditional_9_For_2_Template, 1, 0, "div", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.skeletons);
  }
}
function CategoriesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "\u041D\u044F\u043C\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0432\u0441\u0435 \u043E\u0449\u0435.");
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_Conditional_11_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r2.description);
  }
}
function CategoriesComponent_Conditional_11_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", cat_r2.recipes_count, " ", cat_r2.recipes_count === 1 ? "\u0440\u0435\u0446\u0435\u043F\u0442\u0430" : "\u0440\u0435\u0446\u0435\u043F\u0442\u0438");
  }
}
function CategoriesComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, CategoriesComponent_Conditional_11_For_2_Conditional_5_Template, 2, 1, "p", 12);
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275conditionalCreate(7, CategoriesComponent_Conditional_11_For_2_Conditional_7_Template, 2, 2, "span", 14);
    \u0275\u0275elementStart(8, "span", 15);
    \u0275\u0275text(9, "\u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const \u0275$index_29_r3 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("--tile-hue", ctx_r0.hueFor(\u0275$index_29_r3));
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c0))("queryParams", \u0275\u0275pureFunction1(9, _c1, cat_r2.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.pad(\u0275$index_29_r3 + 1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r2.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(cat_r2.description ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(cat_r2.recipes_count !== void 0 && cat_r2.recipes_count !== null ? 7 : -1);
  }
}
function CategoriesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, CategoriesComponent_Conditional_11_For_2_Template, 10, 11, "a", 8, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.categories());
  }
}
var CategoriesComponent = class _CategoriesComponent {
  recipeService = inject(RecipeService);
  seo = inject(SeoService);
  skeletons = [0, 1, 2, 3, 4, 5, 6, 7];
  hues = [35, 70, 145, 22, 280, 55, 195, 10, 160, 95];
  categoriesResult = toSignal(this.recipeService.getCategories().pipe(catchError(() => of([]))));
  categories = computed(() => this.categoriesResult() ?? [], ...ngDevMode ? [{ debugName: "categories" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = computed(() => this.categoriesResult() === void 0, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.seo.set({
      title: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",
      description: "\u0420\u0430\u0437\u0433\u043B\u0435\u0434\u0430\u0439 \u0432\u0441\u0438\u0447\u043A\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438 \u0432 \u043A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F \u0431\u043B\u043E\u0433 \u2014 \u043F\u0440\u0435\u0434\u044F\u0441\u0442\u0438\u044F, \u0441\u0443\u043F\u0438, \u043E\u0441\u043D\u043E\u0432\u043D\u0438 \u044F\u0441\u0442\u0438\u044F, \u0434\u0435\u0441\u0435\u0440\u0442\u0438 \u0438 \u043E\u0449\u0435."
    });
  }
  pad(n) {
    return String(n).padStart(2, "0");
  }
  hueFor(i) {
    return String(this.hues[i % this.hues.length]);
  }
  static \u0275fac = function CategoriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoriesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoriesComponent, selectors: [["app-categories"]], decls: 12, vars: 1, consts: [[1, "page"], [1, "page-inner"], [1, "page-header"], [1, "eyebrow"], [1, "lede"], [1, "tiles"], [1, "empty"], [1, "tile", "sk-tile"], [1, "tile", 3, "routerLink", "queryParams", "--tile-hue"], [1, "tile", 3, "routerLink", "queryParams"], [1, "tile-num"], [1, "tile-title"], [1, "tile-desc"], [1, "tile-meta"], [1, "count"], ["aria-hidden", "true", 1, "arrow"]], template: function CategoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "header", 2)(3, "span", 3);
      \u0275\u0275text(4, "\u041E\u0442\u043A\u0440\u0438\u0439");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8, "\u0420\u0430\u0437\u0433\u043B\u0435\u0434\u0430\u0439 \u0440\u0435\u0446\u0435\u043F\u0442\u0438\u0442\u0435 \u043F\u043E\u0434\u0440\u0435\u0434\u0435\u043D\u0438 \u043F\u043E \u0432\u0438\u0434 \u2014 \u043E\u0442 \u043F\u0440\u0435\u0434\u044F\u0441\u0442\u0438\u044F \u0434\u043E \u0434\u0435\u0441\u0435\u0440\u0442\u0438.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(9, CategoriesComponent_Conditional_9_Template, 3, 0, "div", 5)(10, CategoriesComponent_Conditional_10_Template, 2, 0, "p", 6)(11, CategoriesComponent_Conditional_11_Template, 3, 0, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.loading() ? 9 : ctx.categories().length === 0 ? 10 : 11);
    }
  }, dependencies: [RouterLink], styles: ['\n.page[_ngcontent-%COMP%] {\n  padding: clamp(2.5rem, 6vw, 4.5rem) 1.5rem clamp(3rem, 6vw, 5rem);\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-inner[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.page-header[_ngcontent-%COMP%] {\n  max-width: 48rem;\n  margin-bottom: clamp(2rem, 4vw, 3.25rem);\n}\n.eyebrow[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.22em;\n  color: var(--clr-brand);\n  margin-bottom: 0.75rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2.4rem, 6vw, 4.25rem);\n  font-weight: 800;\n  color: var(--clr-text);\n  line-height: 1.02;\n  letter-spacing: -0.035em;\n  margin: 0 0 1rem;\n}\n.lede[_ngcontent-%COMP%] {\n  font-size: clamp(1rem, 1.3vw, 1.15rem);\n  color: var(--clr-text-muted);\n  line-height: 1.65;\n  max-width: 42ch;\n  margin: 0;\n}\n.tiles[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1.25rem;\n}\n.tile[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1.75rem 1.6rem 1.5rem;\n  min-height: 220px;\n  border-radius: var(--radius-lg);\n  text-decoration: none;\n  color: var(--clr-text);\n  overflow: hidden;\n  background:\n    radial-gradient(\n      120% 80% at 0% 0%,\n      color-mix(in oklch, oklch(85% 0.12 var(--tile-hue)) 55%, var(--clr-surface)) 0%,\n      var(--clr-surface) 70%);\n  border: 1px solid var(--clr-border-faint);\n  box-shadow: var(--shadow-sm);\n  transition:\n    transform 0.35s var(--ease-out-expo),\n    box-shadow 0.35s var(--ease-out-expo),\n    border-color 0.25s;\n  isolation: isolate;\n}\n.tile[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      60% 50% at 85% 90%,\n      color-mix(in oklch, oklch(72% 0.14 var(--tile-hue)) 35%, transparent) 0%,\n      transparent 100%);\n  opacity: 0.7;\n  z-index: -1;\n  transition: opacity 0.3s var(--ease-out-expo);\n}\n@media (hover: hover) and (pointer: fine) {\n  .tile[_ngcontent-%COMP%]:hover {\n    transform: translateY(-4px);\n    box-shadow: var(--shadow-lg);\n    border-color: color-mix(in oklch, oklch(65% 0.13 var(--tile-hue)) 40%, var(--clr-border));\n  }\n  .tile[_ngcontent-%COMP%]:hover::after {\n    opacity: 1;\n  }\n  .tile[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%] {\n    transform: translateX(5px);\n  }\n}\n.tile[_ngcontent-%COMP%]:active {\n  transform: translateY(-1px);\n  transition-duration: 0.1s;\n}\n.tile-num[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 0.88rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  color: color-mix(in oklch, oklch(42% 0.12 var(--tile-hue)) 90%, var(--clr-text-muted));\n}\n.tile-num[_ngcontent-%COMP%]::before {\n  content: "";\n  display: inline-block;\n  width: 1.4rem;\n  height: 1px;\n  background: currentColor;\n  vertical-align: middle;\n  margin-right: 0.45rem;\n  opacity: 0.6;\n  transform: translateY(-1px);\n}\n.tile-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.7rem, 2.4vw, 2.1rem);\n  font-weight: 800;\n  line-height: 1.05;\n  letter-spacing: -0.025em;\n  color: var(--clr-text);\n  margin: 0;\n}\n.tile-desc[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  line-height: 1.55;\n  color: var(--clr-text-muted);\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.tile-meta[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  font-size: 0.82rem;\n  color: var(--clr-text-muted);\n}\n.count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  letter-spacing: 0.02em;\n}\n.arrow[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--clr-brand);\n  transition: transform 0.3s var(--ease-out-expo);\n}\n.sk-tile[_ngcontent-%COMP%] {\n  background: var(--clr-skeleton);\n  border: none;\n  box-shadow: none;\n  position: relative;\n  overflow: hidden;\n}\n.sk-tile[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: _ngcontent-%COMP%_shimmer 1.5s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n.empty[_ngcontent-%COMP%] {\n  color: var(--clr-text-muted);\n  font-size: 1rem;\n  text-align: center;\n  padding: 4rem 1rem;\n}\n@media (prefers-reduced-motion: reduce) {\n  .tile[_ngcontent-%COMP%] {\n    transition: box-shadow 0.2s, border-color 0.2s;\n  }\n  .tile[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n  .arrow[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .tile[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%] {\n    transform: none;\n  }\n}\n/*# sourceMappingURL=categories.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoriesComponent, [{
    type: Component,
    args: [{ selector: "app-categories", standalone: true, imports: [RouterLink], template: `
    <section class="page">
      <div class="page-inner">
        <header class="page-header">
          <span class="eyebrow">\u041E\u0442\u043A\u0440\u0438\u0439</span>
          <h1>\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438</h1>
          <p class="lede">\u0420\u0430\u0437\u0433\u043B\u0435\u0434\u0430\u0439 \u0440\u0435\u0446\u0435\u043F\u0442\u0438\u0442\u0435 \u043F\u043E\u0434\u0440\u0435\u0434\u0435\u043D\u0438 \u043F\u043E \u0432\u0438\u0434 \u2014 \u043E\u0442 \u043F\u0440\u0435\u0434\u044F\u0441\u0442\u0438\u044F \u0434\u043E \u0434\u0435\u0441\u0435\u0440\u0442\u0438.</p>
        </header>

        @if (loading()) {
          <div class="tiles">
            @for (s of skeletons; track s) {
              <div class="tile sk-tile"></div>
            }
          </div>
        } @else if (categories().length === 0) {
          <p class="empty">\u041D\u044F\u043C\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0432\u0441\u0435 \u043E\u0449\u0435.</p>
        } @else {
          <div class="tiles">
            @for (cat of categories(); track cat.id; let i = $index) {
              <a class="tile"
                 [routerLink]="['/recipes']"
                 [queryParams]="{ category: cat.slug }"
                 [style.--tile-hue]="hueFor(i)">
                <span class="tile-num">{{ pad(i + 1) }}</span>
                <h2 class="tile-title">{{ cat.name }}</h2>
                @if (cat.description) {
                  <p class="tile-desc">{{ cat.description }}</p>
                }
                <span class="tile-meta">
                  @if (cat.recipes_count !== undefined && cat.recipes_count !== null) {
                    <span class="count">{{ cat.recipes_count }} {{ cat.recipes_count === 1 ? '\u0440\u0435\u0446\u0435\u043F\u0442\u0430' : '\u0440\u0435\u0446\u0435\u043F\u0442\u0438' }}</span>
                  }
                  <span class="arrow" aria-hidden="true">\u2192</span>
                </span>
              </a>
            }
          </div>
        }
      </div>
    </section>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* angular:styles/component:scss;2283e2e34c1c76f1b060228c53a28a29d169a41f070dc2664f574353fdc87d62;/home/ivaylo-penev/Desktop/Blog-System-Angular/frontend/src/app/pages/categories/categories.component.ts */\n.page {\n  padding: clamp(2.5rem, 6vw, 4.5rem) 1.5rem clamp(3rem, 6vw, 5rem);\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-inner {\n  min-width: 0;\n}\n.page-header {\n  max-width: 48rem;\n  margin-bottom: clamp(2rem, 4vw, 3.25rem);\n}\n.eyebrow {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.22em;\n  color: var(--clr-brand);\n  margin-bottom: 0.75rem;\n}\nh1 {\n  font-family: var(--font-display);\n  font-size: clamp(2.4rem, 6vw, 4.25rem);\n  font-weight: 800;\n  color: var(--clr-text);\n  line-height: 1.02;\n  letter-spacing: -0.035em;\n  margin: 0 0 1rem;\n}\n.lede {\n  font-size: clamp(1rem, 1.3vw, 1.15rem);\n  color: var(--clr-text-muted);\n  line-height: 1.65;\n  max-width: 42ch;\n  margin: 0;\n}\n.tiles {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1.25rem;\n}\n.tile {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1.75rem 1.6rem 1.5rem;\n  min-height: 220px;\n  border-radius: var(--radius-lg);\n  text-decoration: none;\n  color: var(--clr-text);\n  overflow: hidden;\n  background:\n    radial-gradient(\n      120% 80% at 0% 0%,\n      color-mix(in oklch, oklch(85% 0.12 var(--tile-hue)) 55%, var(--clr-surface)) 0%,\n      var(--clr-surface) 70%);\n  border: 1px solid var(--clr-border-faint);\n  box-shadow: var(--shadow-sm);\n  transition:\n    transform 0.35s var(--ease-out-expo),\n    box-shadow 0.35s var(--ease-out-expo),\n    border-color 0.25s;\n  isolation: isolate;\n}\n.tile::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      60% 50% at 85% 90%,\n      color-mix(in oklch, oklch(72% 0.14 var(--tile-hue)) 35%, transparent) 0%,\n      transparent 100%);\n  opacity: 0.7;\n  z-index: -1;\n  transition: opacity 0.3s var(--ease-out-expo);\n}\n@media (hover: hover) and (pointer: fine) {\n  .tile:hover {\n    transform: translateY(-4px);\n    box-shadow: var(--shadow-lg);\n    border-color: color-mix(in oklch, oklch(65% 0.13 var(--tile-hue)) 40%, var(--clr-border));\n  }\n  .tile:hover::after {\n    opacity: 1;\n  }\n  .tile:hover .arrow {\n    transform: translateX(5px);\n  }\n}\n.tile:active {\n  transform: translateY(-1px);\n  transition-duration: 0.1s;\n}\n.tile-num {\n  font-family: var(--font-display);\n  font-size: 0.88rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  color: color-mix(in oklch, oklch(42% 0.12 var(--tile-hue)) 90%, var(--clr-text-muted));\n}\n.tile-num::before {\n  content: "";\n  display: inline-block;\n  width: 1.4rem;\n  height: 1px;\n  background: currentColor;\n  vertical-align: middle;\n  margin-right: 0.45rem;\n  opacity: 0.6;\n  transform: translateY(-1px);\n}\n.tile-title {\n  font-family: var(--font-display);\n  font-size: clamp(1.7rem, 2.4vw, 2.1rem);\n  font-weight: 800;\n  line-height: 1.05;\n  letter-spacing: -0.025em;\n  color: var(--clr-text);\n  margin: 0;\n}\n.tile-desc {\n  font-size: 0.92rem;\n  line-height: 1.55;\n  color: var(--clr-text-muted);\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.tile-meta {\n  margin-top: auto;\n  padding-top: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  font-size: 0.82rem;\n  color: var(--clr-text-muted);\n}\n.count {\n  font-weight: 600;\n  letter-spacing: 0.02em;\n}\n.arrow {\n  font-size: 1.1rem;\n  color: var(--clr-brand);\n  transition: transform 0.3s var(--ease-out-expo);\n}\n.sk-tile {\n  background: var(--clr-skeleton);\n  border: none;\n  box-shadow: none;\n  position: relative;\n  overflow: hidden;\n}\n.sk-tile::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: shimmer 1.5s linear infinite;\n}\n@keyframes shimmer {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n.empty {\n  color: var(--clr-text-muted);\n  font-size: 1rem;\n  text-align: center;\n  padding: 4rem 1rem;\n}\n@media (prefers-reduced-motion: reduce) {\n  .tile {\n    transition: box-shadow 0.2s, border-color 0.2s;\n  }\n  .tile:hover {\n    transform: none;\n  }\n  .arrow {\n    transition: none;\n  }\n  .tile:hover .arrow {\n    transform: none;\n  }\n}\n/*# sourceMappingURL=categories.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoriesComponent, { className: "CategoriesComponent", filePath: "src/app/pages/categories/categories.component.ts", lineNumber: 228 });
})();
export {
  CategoriesComponent
};
//# sourceMappingURL=chunk-WZMSJTU2.js.map
