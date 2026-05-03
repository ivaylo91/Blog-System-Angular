import {
  RecipeCardComponent
} from "./chunk-2KX3R3JV.js";
import {
  PerfService
} from "./chunk-3KFQWM6T.js";
import {
  RecipeService
} from "./chunk-QBJYTMMZ.js";
import {
  takeUntilDestroyed
} from "./chunk-ZGNCPTQ3.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-5PRHCKE6.js";
import {
  SeoService
} from "./chunk-JG6FXFFB.js";
import "./chunk-QKG44OY5.js";
import {
  ActivatedRoute,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Router,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-OGGNHWOY.js";

// src/app/pages/recipes/recipes.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function RecipesComponent_Conditional_17_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function RecipesComponent_Conditional_17_For_4_Template_button_click_0_listener() {
      const cat_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectCategory(cat_r4.slug));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.category() === cat_r4.slug);
    \u0275\u0275attribute("aria-pressed", ctx_r1.category() === cat_r4.slug);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r4.name);
  }
}
function RecipesComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 21);
    \u0275\u0275listener("click", function RecipesComponent_Conditional_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectCategory(""));
    });
    \u0275\u0275text(2, "\u0412\u0441\u0438\u0447\u043A\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, RecipesComponent_Conditional_17_For_4_Template, 2, 4, "button", 22, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", !ctx_r1.category());
    \u0275\u0275attribute("aria-pressed", !ctx_r1.category());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.categories());
  }
}
function RecipesComponent_Conditional_34_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function RecipesComponent_Conditional_34_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 30);
    \u0275\u0275element(2, "circle", 8)(3, "line", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "svg", 31);
    \u0275\u0275element(6, "line", 32)(7, "line", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(' "', ctx_r1.q(), '" ');
  }
}
function RecipesComponent_Conditional_34_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function RecipesComponent_Conditional_34_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectCategory(""));
    });
    \u0275\u0275text(1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 31);
    \u0275\u0275element(3, "line", 32)(4, "line", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCategoryName(ctx_r1.category()), " ");
  }
}
function RecipesComponent_Conditional_34_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function RecipesComponent_Conditional_34_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectDifficulty(""));
    });
    \u0275\u0275text(1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 31);
    \u0275\u0275element(3, "line", 32)(4, "line", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.difficulty(), " ");
  }
}
function RecipesComponent_Conditional_34_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function RecipesComponent_Conditional_34_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectSort("newest"));
    });
    \u0275\u0275text(1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 31);
    \u0275\u0275element(3, "line", 32)(4, "line", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.sort() === "fastest" ? "\u041D\u0430\u0439-\u0431\u044A\u0440\u0437\u0438" : "\u041D\u0430\u0439-\u043B\u0435\u0441\u043D\u0438", " ");
  }
}
function RecipesComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 23);
    \u0275\u0275text(2, "\u0424\u0438\u043B\u0442\u0440\u0438:");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, RecipesComponent_Conditional_34_Conditional_3_Template, 8, 1, "button", 24);
    \u0275\u0275conditionalCreate(4, RecipesComponent_Conditional_34_Conditional_4_Template, 5, 1, "button", 25);
    \u0275\u0275conditionalCreate(5, RecipesComponent_Conditional_34_Conditional_5_Template, 5, 1, "button", 26);
    \u0275\u0275conditionalCreate(6, RecipesComponent_Conditional_34_Conditional_6_Template, 5, 1, "button", 27);
    \u0275\u0275elementStart(7, "button", 28);
    \u0275\u0275listener("click", function RecipesComponent_Conditional_34_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearAll());
    });
    \u0275\u0275text(8, "\u0418\u0437\u0447\u0438\u0441\u0442\u0438 \u0432\u0441\u0438\u0447\u043A\u0438");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.q() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.category() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.difficulty() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.sort() && ctx_r1.sort() !== "newest" ? 6 : -1);
  }
}
function RecipesComponent_Conditional_35_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "div", 38);
    \u0275\u0275elementStart(2, "div", 39);
    \u0275\u0275element(3, "div", 40)(4, "div", 41)(5, "div", 42);
    \u0275\u0275elementStart(6, "div", 43);
    \u0275\u0275element(7, "div", 44)(8, "div", 44)(9, "div", 44);
    \u0275\u0275elementEnd()()();
  }
}
function RecipesComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275repeaterCreate(1, RecipesComponent_Conditional_35_For_2_Template, 10, 0, "div", 37, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.skeletons);
  }
}
function RecipesComponent_Conditional_36_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-recipe-card", 45);
  }
  if (rf & 2) {
    const recipe_r10 = ctx.$implicit;
    const \u0275$index_148_r11 = ctx.$index;
    \u0275\u0275property("recipe", recipe_r10)("priority", \u0275$index_148_r11 === 0)("index", \u0275$index_148_r11);
  }
}
function RecipesComponent_Conditional_36_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 47);
    \u0275\u0275element(2, "circle", 48)(3, "line", 49)(4, "line", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "\u041D\u044F\u043C\u0430 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "\u041E\u043F\u0438\u0442\u0430\u0439 \u0441 \u0434\u0440\u0443\u0433\u0430 \u0434\u0443\u043C\u0430 \u0438\u043B\u0438 \u0441\u043C\u0435\u043D\u0438 \u0444\u0438\u043B\u0442\u0440\u0438\u0442\u0435.");
    \u0275\u0275elementEnd()();
  }
}
function RecipesComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275repeaterCreate(1, RecipesComponent_Conditional_36_For_2_Template, 1, 3, "app-recipe-card", 45, _forTrack0, false, RecipesComponent_Conditional_36_ForEmpty_3_Template, 9, 0, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.recipes());
  }
}
function RecipesComponent_Conditional_37_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function RecipesComponent_Conditional_37_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function RecipesComponent_Conditional_37_For_6_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const p_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r14));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r14 === ctx_r1.currentPage());
    \u0275\u0275attribute("aria-current", p_r14 === ctx_r1.currentPage() ? "page" : null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r14);
  }
}
function RecipesComponent_Conditional_37_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RecipesComponent_Conditional_37_For_6_Conditional_0_Template, 2, 0, "span", 54)(1, RecipesComponent_Conditional_37_For_6_Conditional_1_Template, 2, 4, "button", 55);
  }
  if (rf & 2) {
    const p_r14 = ctx.$implicit;
    \u0275\u0275conditional(p_r14 === null ? 0 : 1);
  }
}
function RecipesComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 51);
    \u0275\u0275listener("click", function RecipesComponent_Conditional_37_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275text(2, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, RecipesComponent_Conditional_37_For_6_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(7, "button", 53);
    \u0275\u0275listener("click", function RecipesComponent_Conditional_37_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275text(8, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.currentPage(), " / ", ctx_r1.lastPage());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.pageNumbers());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage() === ctx_r1.lastPage());
  }
}
var RecipesComponent = class _RecipesComponent {
  recipeService = inject(RecipeService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  seo = inject(SeoService);
  perf = inject(PerfService);
  destroyRef = inject(DestroyRef);
  recipes = signal([], ...ngDevMode ? [{ debugName: "recipes" }] : (
    /* istanbul ignore next */
    []
  ));
  categories = signal([], ...ngDevMode ? [{ debugName: "categories" }] : (
    /* istanbul ignore next */
    []
  ));
  q = signal("", ...ngDevMode ? [{ debugName: "q" }] : (
    /* istanbul ignore next */
    []
  ));
  category = signal("", ...ngDevMode ? [{ debugName: "category" }] : (
    /* istanbul ignore next */
    []
  ));
  difficulty = signal("", ...ngDevMode ? [{ debugName: "difficulty" }] : (
    /* istanbul ignore next */
    []
  ));
  sort = signal("newest", ...ngDevMode ? [{ debugName: "sort" }] : (
    /* istanbul ignore next */
    []
  ));
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : (
    /* istanbul ignore next */
    []
  ));
  lastPage = signal(1, ...ngDevMode ? [{ debugName: "lastPage" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  skeletons = [0, 1, 2, 3, 4, 5];
  debounceTimer;
  lastSearchQ = "";
  pageNumbers = computed(() => {
    const total = this.lastPage();
    const cur = this.currentPage();
    if (total <= 7)
      return Array.from({ length: total }, (_, i) => i + 1);
    const pages = [1];
    if (cur > 3)
      pages.push(null);
    const start = Math.max(2, cur - 1);
    const end = Math.min(total - 1, cur + 1);
    for (let i = start; i <= end; i++)
      pages.push(i);
    if (cur < total - 2)
      pages.push(null);
    pages.push(total);
    return pages;
  }, ...ngDevMode ? [{ debugName: "pageNumbers" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.seo.set({
      title: "\u0420\u0435\u0446\u0435\u043F\u0442\u0438",
      description: "\u0420\u0430\u0437\u0433\u043B\u0435\u0434\u0430\u0439 \u0432\u0441\u0438\u0447\u043A\u0438 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u0438 \u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438. \u0424\u0438\u043B\u0442\u0440\u0438\u0440\u0430\u0439 \u043F\u043E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F, \u0442\u0440\u0443\u0434\u043D\u043E\u0441\u0442 \u0438 \u0432\u0440\u0435\u043C\u0435 \u0437\u0430 \u043F\u0440\u0438\u0433\u043E\u0442\u0432\u044F\u043D\u0435."
    });
    this.recipeService.getCategories().pipe(takeUntilDestroyed()).subscribe((cats) => this.categories.set(cats));
    this.route.queryParams.pipe(takeUntilDestroyed()).subscribe((params) => {
      this.q.set(params["q"] || "");
      this.category.set(params["category"] || "");
      this.difficulty.set(params["difficulty"] || "");
      this.sort.set(params["sort"] || "newest");
      this.currentPage.set(+(params["page"] || 1));
      this.loadRecipes();
    });
    this.destroyRef.onDestroy(() => clearTimeout(this.debounceTimer));
  }
  onSearchInput() {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      if (this.q() === this.lastSearchQ)
        return;
      this.lastSearchQ = this.q();
      this.router.navigate(["/recipes"], {
        queryParams: { q: this.q() || void 0, category: this.category() || void 0, difficulty: this.difficulty() || void 0, sort: this.sort() !== "newest" ? this.sort() : void 0, page: void 0 }
      });
    }, 350);
  }
  loadRecipes() {
    this.loading.set(true);
    this.perf.mark("recipes_fetch_start");
    this.recipeService.getRecipes({
      q: this.q(),
      category: this.category(),
      difficulty: this.difficulty(),
      sort: this.sort(),
      page: this.currentPage(),
      per_page: 6
    }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((res) => {
      this.recipes.set(res.data);
      this.currentPage.set(res.current_page);
      this.lastPage.set(res.last_page);
      this.loading.set(false);
      this.perf.mark("recipes_ready");
      this.perf.measure("recipes_list_load", "recipes_fetch_start", "recipes_ready");
    });
  }
  selectCategory(slug) {
    this.router.navigate(["/recipes"], {
      queryParams: {
        q: this.q() || void 0,
        category: slug || void 0,
        difficulty: this.difficulty() || void 0,
        sort: this.sort() !== "newest" ? this.sort() : void 0,
        page: void 0
      }
    });
  }
  selectDifficulty(d) {
    this.router.navigate(["/recipes"], {
      queryParams: {
        q: this.q() || void 0,
        category: this.category() || void 0,
        difficulty: d || void 0,
        sort: this.sort() !== "newest" ? this.sort() : void 0,
        page: void 0
      }
    });
  }
  selectSort(s) {
    this.router.navigate(["/recipes"], {
      queryParams: {
        q: this.q() || void 0,
        category: this.category() || void 0,
        difficulty: this.difficulty() || void 0,
        sort: s !== "newest" ? s : void 0,
        page: void 0
      }
    });
  }
  search(e) {
    e.preventDefault();
    this.router.navigate(["/recipes"], {
      queryParams: {
        q: this.q() || void 0,
        category: this.category() || void 0,
        difficulty: this.difficulty() || void 0,
        sort: this.sort() !== "newest" ? this.sort() : void 0,
        page: void 0
      }
    });
  }
  getCategoryName(slug) {
    return this.categories().find((c) => c.slug === slug)?.name || slug;
  }
  clearSearch() {
    this.q.set("");
    this.router.navigate(["/recipes"], {
      queryParams: { category: this.category() || void 0, difficulty: this.difficulty() || void 0, sort: this.sort() !== "newest" ? this.sort() : void 0 }
    });
  }
  clearAll() {
    this.q.set("");
    this.router.navigate(["/recipes"]);
  }
  goToPage(page) {
    this.router.navigate(["/recipes"], {
      queryParams: __spreadProps(__spreadValues({}, this.route.snapshot.queryParams), { page })
    });
  }
  static \u0275fac = function RecipesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecipesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecipesComponent, selectors: [["app-recipes"]], decls: 38, vars: 26, consts: [[1, "page"], [1, "page-inner"], [1, "page-header"], [1, "page-eyebrow"], [1, "search-bar", 3, "submit"], ["type", "text", "name", "q", "placeholder", "\u0422\u044A\u0440\u0441\u0438 \u043F\u043E \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u0435 \u0438\u043B\u0438 \u0441\u044A\u0441\u0442\u0430\u0432\u043A\u0430...", "aria-label", "\u0422\u044A\u0440\u0441\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], ["type", "submit", 1, "search-btn"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], [1, "btn-text"], ["role", "group", "aria-label", "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438", 1, "pill-filters"], ["role", "group", "aria-label", "\u0424\u0438\u043B\u0442\u0440\u0438", 1, "pill-filters", "pill-filters-secondary"], [1, "pill", "pill-sm", 3, "click"], [1, "pill", "pill-sm", "pill-easy", 3, "click"], [1, "pill", "pill-sm", "pill-medium", 3, "click"], [1, "pill", "pill-sm", "pill-hard", 3, "click"], ["aria-hidden", "true", 1, "sort-divider"], ["aria-label", "\u0410\u043A\u0442\u0438\u0432\u043D\u0438 \u0444\u0438\u043B\u0442\u0440\u0438", 1, "active-filters"], [1, "recipe-grid"], [1, "pagination"], [1, "pill", 3, "click"], [1, "pill", 3, "active"], [1, "filters-label"], ["aria-label", "\u041F\u0440\u0435\u043C\u0430\u0445\u043D\u0438 \u0442\u044A\u0440\u0441\u0435\u043D\u0435\u0442\u043E", 1, "active-chip"], ["aria-label", "\u041F\u0440\u0435\u043C\u0430\u0445\u043D\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F", 1, "active-chip"], ["aria-label", "\u041F\u0440\u0435\u043C\u0430\u0445\u043D\u0438 \u0442\u0440\u0443\u0434\u043D\u043E\u0441\u0442", 1, "active-chip"], ["aria-label", "\u041F\u0440\u0435\u043C\u0430\u0445\u043D\u0438 \u0441\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435", 1, "active-chip"], [1, "clear-all", 3, "click"], ["aria-label", "\u041F\u0440\u0435\u043C\u0430\u0445\u043D\u0438 \u0442\u044A\u0440\u0441\u0435\u043D\u0435\u0442\u043E", 1, "active-chip", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true", 1, "chip-x"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["aria-label", "\u041F\u0440\u0435\u043C\u0430\u0445\u043D\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F", 1, "active-chip", 3, "click"], ["aria-label", "\u041F\u0440\u0435\u043C\u0430\u0445\u043D\u0438 \u0442\u0440\u0443\u0434\u043D\u043E\u0441\u0442", 1, "active-chip", 3, "click"], ["aria-label", "\u041F\u0440\u0435\u043C\u0430\u0445\u043D\u0438 \u0441\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435", 1, "active-chip", 3, "click"], [1, "skeleton-card"], [1, "sk-img"], [1, "sk-body"], [1, "sk-line", "sk-short"], [1, "sk-line", "sk-long"], [1, "sk-line", "sk-medium"], [1, "sk-meta"], [1, "sk-line", "sk-sm"], [3, "recipe", "priority", "index"], [1, "no-results"], ["viewBox", "0 0 64 64", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["cx", "28", "cy", "28", "r", "18"], ["x1", "41", "y1", "41", "x2", "56", "y2", "56"], ["x1", "20", "y1", "28", "x2", "36", "y2", "28"], ["aria-label", "\u041F\u0440\u0435\u0434\u0438\u0448\u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430", 1, "page-btn", 3, "click", "disabled"], [1, "page-counter"], ["aria-label", "\u0421\u043B\u0435\u0434\u0432\u0430\u0449\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430", 1, "page-btn", 3, "click", "disabled"], ["aria-hidden", "true", 1, "page-ellipsis"], [1, "page-btn", 3, "active"], [1, "page-btn", 3, "click"]], template: function RecipesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "header", 2)(3, "span", 3);
      \u0275\u0275text(4, "\u0413\u043E\u0442\u0432\u0430\u0440\u0441\u043A\u0438 \u0431\u043B\u043E\u0433");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "\u0420\u0435\u0446\u0435\u043F\u0442\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "\u041E\u0442\u043A\u0440\u0438\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u0438 \u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438 \u0437\u0430 \u0432\u0441\u0435\u043A\u0438 \u043F\u043E\u0432\u043E\u0434.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "form", 4);
      \u0275\u0275listener("submit", function RecipesComponent_Template_form_submit_9_listener($event) {
        return ctx.search($event);
      });
      \u0275\u0275elementStart(10, "input", 5);
      \u0275\u0275listener("ngModelChange", function RecipesComponent_Template_input_ngModelChange_10_listener($event) {
        return ctx.q.set($event);
      })("input", function RecipesComponent_Template_input_input_10_listener() {
        return ctx.onSearchInput();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 7);
      \u0275\u0275element(13, "circle", 8)(14, "line", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "span", 10);
      \u0275\u0275text(16, "\u0422\u044A\u0440\u0441\u0438");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(17, RecipesComponent_Conditional_17_Template, 5, 3, "div", 11);
      \u0275\u0275elementStart(18, "div", 12)(19, "button", 13);
      \u0275\u0275listener("click", function RecipesComponent_Template_button_click_19_listener() {
        return ctx.selectDifficulty("");
      });
      \u0275\u0275text(20, "\u0412\u0441\u044F\u043A\u0430 \u0442\u0440\u0443\u0434\u043D\u043E\u0441\u0442");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 14);
      \u0275\u0275listener("click", function RecipesComponent_Template_button_click_21_listener() {
        return ctx.selectDifficulty("\u041B\u0435\u0441\u043D\u043E");
      });
      \u0275\u0275text(22, "\u041B\u0435\u0441\u043D\u043E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 15);
      \u0275\u0275listener("click", function RecipesComponent_Template_button_click_23_listener() {
        return ctx.selectDifficulty("\u0421\u0440\u0435\u0434\u043D\u043E");
      });
      \u0275\u0275text(24, "\u0421\u0440\u0435\u0434\u043D\u043E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 16);
      \u0275\u0275listener("click", function RecipesComponent_Template_button_click_25_listener() {
        return ctx.selectDifficulty("\u0417\u0430 \u043D\u0430\u043F\u0440\u0435\u0434\u043D\u0430\u043B\u0438");
      });
      \u0275\u0275text(26, "\u0417\u0430 \u043D\u0430\u043F\u0440\u0435\u0434\u043D\u0430\u043B\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "span", 17);
      \u0275\u0275elementStart(28, "button", 13);
      \u0275\u0275listener("click", function RecipesComponent_Template_button_click_28_listener() {
        return ctx.selectSort("newest");
      });
      \u0275\u0275text(29, "\u041D\u0430\u0439-\u043D\u043E\u0432\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "button", 13);
      \u0275\u0275listener("click", function RecipesComponent_Template_button_click_30_listener() {
        return ctx.selectSort("fastest");
      });
      \u0275\u0275text(31, "\u041D\u0430\u0439-\u0431\u044A\u0440\u0437\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 13);
      \u0275\u0275listener("click", function RecipesComponent_Template_button_click_32_listener() {
        return ctx.selectSort("easiest");
      });
      \u0275\u0275text(33, "\u041D\u0430\u0439-\u043B\u0435\u0441\u043D\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(34, RecipesComponent_Conditional_34_Template, 9, 4, "div", 18);
      \u0275\u0275conditionalCreate(35, RecipesComponent_Conditional_35_Template, 3, 0, "div", 19)(36, RecipesComponent_Conditional_36_Template, 4, 1, "div", 19);
      \u0275\u0275conditionalCreate(37, RecipesComponent_Conditional_37_Template, 9, 4, "div", 20);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngModel", ctx.q());
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.categories().length > 0 ? 17 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", !ctx.difficulty());
      \u0275\u0275attribute("aria-pressed", !ctx.difficulty());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.difficulty() === "\u041B\u0435\u0441\u043D\u043E");
      \u0275\u0275attribute("aria-pressed", ctx.difficulty() === "\u041B\u0435\u0441\u043D\u043E");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.difficulty() === "\u0421\u0440\u0435\u0434\u043D\u043E");
      \u0275\u0275attribute("aria-pressed", ctx.difficulty() === "\u0421\u0440\u0435\u0434\u043D\u043E");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.difficulty() === "\u0417\u0430 \u043D\u0430\u043F\u0440\u0435\u0434\u043D\u0430\u043B\u0438");
      \u0275\u0275attribute("aria-pressed", ctx.difficulty() === "\u0417\u0430 \u043D\u0430\u043F\u0440\u0435\u0434\u043D\u0430\u043B\u0438");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.sort() === "newest");
      \u0275\u0275attribute("aria-pressed", ctx.sort() === "newest");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.sort() === "fastest");
      \u0275\u0275attribute("aria-pressed", ctx.sort() === "fastest");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.sort() === "easiest");
      \u0275\u0275attribute("aria-pressed", ctx.sort() === "easiest");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.category() || ctx.difficulty() || ctx.sort() && ctx.sort() !== "newest" || ctx.q() ? 34 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 35 : 36);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.lastPage() > 1 ? 37 : -1);
    }
  }, dependencies: [RecipeCardComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ['@charset "UTF-8";\n\n\n.page[_ngcontent-%COMP%] {\n  padding: var(--space-9) clamp(var(--space-4), 4vw, var(--space-6)) var(--space-10);\n  background-color: var(--clr-bg);\n  background-image: url(/backgrounds/cooking-pattern.svg);\n  background-size: 500px;\n  background-repeat: repeat;\n  min-height: 100dvh;\n}\n.page-inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: var(--space-7);\n}\n.page-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n  color: var(--clr-green-text);\n  background: var(--clr-green-bg);\n  padding: var(--space-1) var(--space-4);\n  border-radius: var(--radius-pill);\n  margin-bottom: var(--space-4);\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2rem, 4vw, 3rem);\n  color: var(--clr-text);\n  margin: 0 0 var(--space-2);\n  letter-spacing: -0.02em;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--clr-text-muted);\n  font-size: 1rem;\n  font-weight: 300;\n  margin: 0;\n  max-width: 55ch;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n  border: 1.5px solid var(--clr-border);\n  max-width: 560px;\n  margin: 0 0 var(--space-6);\n  background: var(--clr-surface);\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--space-3) var(--space-5);\n  border: none;\n  font-size: 0.95rem;\n  outline: none;\n  background: transparent;\n  color: var(--clr-text);\n}\n.search-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-3) var(--space-6);\n  background: var(--clr-brand);\n  color: #ffffff;\n  border: none;\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: background 0.18s var(--ease-out-expo);\n  touch-action: manipulation;\n}\n.search-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.search-btn[_ngcontent-%COMP%]:hover {\n  background: var(--clr-brand-dark);\n}\n.pill-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-2);\n  margin-bottom: var(--space-3);\n  justify-content: flex-start;\n}\n.pill-filters-secondary[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-8);\n  align-items: center;\n  justify-content: flex-start;\n}\n.pill[_ngcontent-%COMP%] {\n  padding: var(--space-2) var(--space-4);\n  border-radius: var(--radius-pill);\n  border: 1.5px solid var(--clr-border);\n  background: var(--clr-surface);\n  color: var(--clr-text-muted);\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition:\n    background 0.18s var(--ease-out-expo),\n    border-color 0.18s var(--ease-out-expo),\n    color 0.18s var(--ease-out-expo);\n  white-space: nowrap;\n  min-height: 2.75rem;\n  touch-action: manipulation;\n}\n.pill[_ngcontent-%COMP%]:hover {\n  background: var(--clr-surface-hover);\n  border-color: var(--clr-border-strong);\n  color: var(--clr-text);\n}\n.pill.active[_ngcontent-%COMP%] {\n  background: var(--clr-brand);\n  border-color: var(--clr-brand);\n  color: var(--clr-surface);\n  font-weight: 600;\n}\n.pill-easy.active[_ngcontent-%COMP%] {\n  background: var(--clr-green-bg);\n  color: var(--clr-green-text);\n  border-color: var(--clr-green);\n}\n.pill-medium.active[_ngcontent-%COMP%] {\n  background: var(--clr-amber-bg);\n  color: var(--clr-amber-text);\n  border-color: var(--clr-amber-border);\n}\n.pill-hard.active[_ngcontent-%COMP%] {\n  background: var(--clr-rust-bg);\n  color: var(--clr-rust-text);\n  border-color: var(--clr-rust-border);\n}\n.pill[_ngcontent-%COMP%]:focus-visible {\n  outline: 2.5px solid var(--clr-focus);\n  outline-offset: 2px;\n}\n.pill-sm[_ngcontent-%COMP%] {\n  padding: var(--space-2) var(--space-3);\n  font-size: 0.8rem;\n  min-height: 2.75rem;\n}\n.sort-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: var(--space-5);\n  background: var(--clr-border-strong);\n  flex-shrink: 0;\n  align-self: center;\n  margin: 0 var(--space-1);\n}\n.active-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--space-2);\n  margin-bottom: var(--space-6);\n  padding: var(--space-3) var(--space-4);\n  background: var(--clr-surface-alt);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--clr-border-faint);\n}\n.filters-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--clr-text-faint);\n  margin-right: var(--space-1);\n  flex-shrink: 0;\n}\n.active-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-1);\n  padding: var(--space-1) var(--space-3);\n  background: var(--clr-text);\n  color: var(--clr-bg);\n  border: none;\n  border-radius: var(--radius-pill);\n  font-size: 0.78rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);\n  touch-action: manipulation;\n}\n.active-chip[_ngcontent-%COMP%]:hover {\n  background: var(--clr-text-muted);\n}\n.active-chip[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.active-chip[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%]:first-child {\n  width: 0.7rem;\n  height: 0.7rem;\n  opacity: 0.7;\n}\n.chip-x[_ngcontent-%COMP%] {\n  width: 0.7rem;\n  height: 0.7rem;\n  opacity: 0.6;\n  flex-shrink: 0;\n}\n.clear-all[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--clr-text-muted);\n  cursor: pointer;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n  padding: var(--space-1);\n  transition: color 0.15s var(--ease-out-expo);\n  touch-action: manipulation;\n}\n.clear-all[_ngcontent-%COMP%]:hover {\n  color: var(--clr-text);\n}\n.recipe-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr 1fr;\n  grid-auto-rows: minmax(0, auto);\n  gap: var(--space-6);\n}\n.recipe-grid[_ngcontent-%COMP%]    > app-recipe-card[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.recipe-grid[_ngcontent-%COMP%]    > app-recipe-card[_ngcontent-%COMP%]:nth-child(9n+1) {\n  grid-column: span 2;\n}\n.recipe-grid[_ngcontent-%COMP%]    > app-recipe-card[_ngcontent-%COMP%]:nth-child(11n+4) {\n  grid-row: span 2;\n}\n.recipe-grid[_ngcontent-%COMP%]    > app-recipe-card[_ngcontent-%COMP%] {\n  --card-i: 0;\n  animation-delay: calc(var(--card-i) * 45ms) !important;\n}\n.recipe-grid[_ngcontent-%COMP%]    > app-recipe-card[_ngcontent-%COMP%]:nth-child(1) {\n  --card-i: 0;\n}\n.recipe-grid[_ngcontent-%COMP%]    > app-recipe-card[_ngcontent-%COMP%]:nth-child(2) {\n  --card-i: 1;\n}\n.recipe-grid[_ngcontent-%COMP%]    > app-recipe-card[_ngcontent-%COMP%]:nth-child(3) {\n  --card-i: 2;\n}\n.recipe-grid[_ngcontent-%COMP%]    > app-recipe-card[_ngcontent-%COMP%]:nth-child(4) {\n  --card-i: 3;\n}\n.recipe-grid[_ngcontent-%COMP%]    > app-recipe-card[_ngcontent-%COMP%]:nth-child(5) {\n  --card-i: 4;\n}\n.recipe-grid[_ngcontent-%COMP%]    > app-recipe-card[_ngcontent-%COMP%]:nth-child(6) {\n  --card-i: 5;\n}\n.recipe-grid[_ngcontent-%COMP%]    > app-recipe-card[_ngcontent-%COMP%]:nth-child(7) {\n  --card-i: 6;\n}\n.recipe-grid[_ngcontent-%COMP%]    > app-recipe-card[_ngcontent-%COMP%]:nth-child(8) {\n  --card-i: 7;\n}\n.recipe-grid[_ngcontent-%COMP%]    > app-recipe-card[_ngcontent-%COMP%]:nth-child(9) {\n  --card-i: 8;\n}\n.recipe-grid[_ngcontent-%COMP%]    > app-recipe-card[_ngcontent-%COMP%]:nth-child(10) {\n  --card-i: 9;\n}\n.recipe-grid[_ngcontent-%COMP%]    > app-recipe-card[_ngcontent-%COMP%]:nth-child(11) {\n  --card-i: 10;\n}\n.recipe-grid[_ngcontent-%COMP%]    > app-recipe-card[_ngcontent-%COMP%]:nth-child(12) {\n  --card-i: 11;\n}\n.recipe-grid[_ngcontent-%COMP%]    > app-recipe-card[_ngcontent-%COMP%]:nth-child(n+13) {\n  --card-i: 12;\n}\n@media (min-width: 1280px) {\n  .recipe-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1.6fr 1fr 1fr 1fr;\n    gap: var(--space-7);\n  }\n  .recipe-grid[_ngcontent-%COMP%]    > app-recipe-card[_ngcontent-%COMP%]:nth-child(9n+1) {\n    grid-column: span 2;\n  }\n}\n@media (max-width: 900px) {\n  .recipe-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: var(--space-5);\n  }\n  .recipe-grid[_ngcontent-%COMP%]    > app-recipe-card[_ngcontent-%COMP%]:nth-child(9n+1), \n   .recipe-grid[_ngcontent-%COMP%]    > app-recipe-card[_ngcontent-%COMP%]:nth-child(11n+4) {\n    grid-column: auto;\n    grid-row: auto;\n  }\n}\n.no-results[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-10) var(--space-7);\n  color: var(--clr-text-muted);\n  text-align: center;\n}\n.no-results[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  color: var(--clr-text-faint);\n  margin-bottom: var(--space-2);\n}\n.no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 600;\n  color: var(--clr-text);\n  margin: 0;\n}\n.no-results[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--clr-text-faint);\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  background: var(--clr-surface);\n  box-shadow: var(--shadow-sm);\n}\n.sk-img[_ngcontent-%COMP%] {\n  aspect-ratio: 4/3;\n  background: var(--clr-skeleton);\n  position: relative;\n  overflow: hidden;\n}\n.sk-img[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: _ngcontent-%COMP%_shimmer 1.5s linear infinite;\n}\n.sk-body[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.sk-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n  margin-top: var(--space-1);\n}\n.sk-line[_ngcontent-%COMP%] {\n  height: 0.8rem;\n  border-radius: var(--radius-pill);\n  background: var(--clr-skeleton);\n  position: relative;\n  overflow: hidden;\n}\n.sk-line[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: _ngcontent-%COMP%_shimmer 1.5s linear infinite;\n}\n.sk-short[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.sk-long[_ngcontent-%COMP%] {\n  width: 75%;\n}\n.sk-medium[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.sk-sm[_ngcontent-%COMP%] {\n  width: 22%;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: var(--space-2);\n  margin-top: var(--space-9);\n}\n.page-btn[_ngcontent-%COMP%] {\n  min-width: 2.75rem;\n  height: 2.75rem;\n  padding: 0 var(--space-3);\n  border-radius: var(--radius-sm);\n  border: 1.5px solid var(--clr-border);\n  background: var(--clr-surface);\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 0.9rem;\n  transition:\n    background 0.18s var(--ease-out-expo),\n    border-color 0.18s var(--ease-out-expo),\n    color 0.18s var(--ease-out-expo);\n  color: var(--clr-text);\n  touch-action: manipulation;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background: var(--clr-text);\n  color: var(--clr-bg);\n  border-color: var(--clr-text);\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(.active):not(:disabled) {\n  background: var(--clr-surface-hover);\n  border-color: var(--clr-border-strong);\n}\n.page-ellipsis[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 2rem;\n  height: 2.75rem;\n  font-size: 0.9rem;\n  color: var(--clr-text-faint);\n  -webkit-user-select: none;\n  user-select: none;\n}\n.page-counter[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 640px) {\n  .recipe-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .btn-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .search-btn[_ngcontent-%COMP%] {\n    padding: var(--space-3) var(--space-4);\n  }\n  .search-bar[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .pill[_ngcontent-%COMP%] {\n    min-height: 2.75rem;\n  }\n  .pill-sm[_ngcontent-%COMP%] {\n    min-height: 2.75rem;\n  }\n  .page-btn[_ngcontent-%COMP%] {\n    min-width: 2.75rem;\n    height: 2.75rem;\n  }\n  .pill-filters[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    scroll-snap-type: x mandatory;\n    -webkit-overflow-scrolling: touch;\n    scrollbar-width: none;\n    padding-bottom: var(--space-1);\n    -ms-overflow-style: none;\n  }\n  .pill-filters[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .pill-filters[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%] {\n    scroll-snap-align: start;\n    flex-shrink: 0;\n  }\n}\n@media (max-width: 420px) {\n  .page-btn[_ngcontent-%COMP%]:not([aria-label]) {\n    display: none;\n  }\n  .page-ellipsis[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .page-counter[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    font-size: 0.9rem;\n    font-weight: 600;\n    color: var(--clr-text);\n    padding: 0 var(--space-3);\n    font-variant-numeric: tabular-nums;\n  }\n}\n/*# sourceMappingURL=recipes.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecipesComponent, [{
    type: Component,
    args: [{ selector: "app-recipes", standalone: true, imports: [RecipeCardComponent, FormsModule], template: `
    <div class="page">
      <div class="page-inner">

        <header class="page-header">
          <span class="page-eyebrow">\u0413\u043E\u0442\u0432\u0430\u0440\u0441\u043A\u0438 \u0431\u043B\u043E\u0433</span>
          <h1>\u0420\u0435\u0446\u0435\u043F\u0442\u0438</h1>
          <p>\u041E\u0442\u043A\u0440\u0438\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u0438 \u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438 \u0437\u0430 \u0432\u0441\u0435\u043A\u0438 \u043F\u043E\u0432\u043E\u0434.</p>
        </header>

        <!-- Search bar -->
        <form class="search-bar" (submit)="search($event)">
          <input
            type="text"
            [ngModel]="q()" (ngModelChange)="q.set($event)"
            name="q"
            placeholder="\u0422\u044A\u0440\u0441\u0438 \u043F\u043E \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u0435 \u0438\u043B\u0438 \u0441\u044A\u0441\u0442\u0430\u0432\u043A\u0430..."
            aria-label="\u0422\u044A\u0440\u0441\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438"
            class="search-input"
            (input)="onSearchInput()"
          />
          <button type="submit" class="search-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <span class="btn-text">\u0422\u044A\u0440\u0441\u0438</span>
          </button>
        </form>

        <!-- Pill filters: categories -->
        @if (categories().length > 0) {
          <div class="pill-filters" role="group" aria-label="\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438">
            <button class="pill" [class.active]="!category()" [attr.aria-pressed]="!category()" (click)="selectCategory('')">\u0412\u0441\u0438\u0447\u043A\u0438</button>
            @for (cat of categories(); track cat.id) {
              <button class="pill" [class.active]="category() === cat.slug" [attr.aria-pressed]="category() === cat.slug"
                      (click)="selectCategory(cat.slug)">{{ cat.name }}</button>
            }
          </div>
        }

        <!-- Pill filters: difficulty + sort -->
        <div class="pill-filters pill-filters-secondary" role="group" aria-label="\u0424\u0438\u043B\u0442\u0440\u0438">
          <button class="pill pill-sm" [class.active]="!difficulty()" [attr.aria-pressed]="!difficulty()" (click)="selectDifficulty('')">\u0412\u0441\u044F\u043A\u0430 \u0442\u0440\u0443\u0434\u043D\u043E\u0441\u0442</button>
          <button class="pill pill-sm pill-easy" [class.active]="difficulty() === '\u041B\u0435\u0441\u043D\u043E'" [attr.aria-pressed]="difficulty() === '\u041B\u0435\u0441\u043D\u043E'" (click)="selectDifficulty('\u041B\u0435\u0441\u043D\u043E')">\u041B\u0435\u0441\u043D\u043E</button>
          <button class="pill pill-sm pill-medium" [class.active]="difficulty() === '\u0421\u0440\u0435\u0434\u043D\u043E'" [attr.aria-pressed]="difficulty() === '\u0421\u0440\u0435\u0434\u043D\u043E'" (click)="selectDifficulty('\u0421\u0440\u0435\u0434\u043D\u043E')">\u0421\u0440\u0435\u0434\u043D\u043E</button>
          <button class="pill pill-sm pill-hard" [class.active]="difficulty() === '\u0417\u0430 \u043D\u0430\u043F\u0440\u0435\u0434\u043D\u0430\u043B\u0438'" [attr.aria-pressed]="difficulty() === '\u0417\u0430 \u043D\u0430\u043F\u0440\u0435\u0434\u043D\u0430\u043B\u0438'" (click)="selectDifficulty('\u0417\u0430 \u043D\u0430\u043F\u0440\u0435\u0434\u043D\u0430\u043B\u0438')">\u0417\u0430 \u043D\u0430\u043F\u0440\u0435\u0434\u043D\u0430\u043B\u0438</button>
          <span class="sort-divider" aria-hidden="true"></span>
          <button class="pill pill-sm" [class.active]="sort() === 'newest'" [attr.aria-pressed]="sort() === 'newest'" (click)="selectSort('newest')">\u041D\u0430\u0439-\u043D\u043E\u0432\u0438</button>
          <button class="pill pill-sm" [class.active]="sort() === 'fastest'" [attr.aria-pressed]="sort() === 'fastest'" (click)="selectSort('fastest')">\u041D\u0430\u0439-\u0431\u044A\u0440\u0437\u0438</button>
          <button class="pill pill-sm" [class.active]="sort() === 'easiest'" [attr.aria-pressed]="sort() === 'easiest'" (click)="selectSort('easiest')">\u041D\u0430\u0439-\u043B\u0435\u0441\u043D\u0438</button>
        </div>

        <!-- Active filter chips -->
        @if (category() || difficulty() || (sort() && sort() !== 'newest') || q()) {
          <div class="active-filters" aria-label="\u0410\u043A\u0442\u0438\u0432\u043D\u0438 \u0444\u0438\u043B\u0442\u0440\u0438">
            <span class="filters-label">\u0424\u0438\u043B\u0442\u0440\u0438:</span>
            @if (q()) {
              <button class="active-chip" (click)="clearSearch()" aria-label="\u041F\u0440\u0435\u043C\u0430\u0445\u043D\u0438 \u0442\u044A\u0440\u0441\u0435\u043D\u0435\u0442\u043E">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                "{{ q() }}"
                <svg class="chip-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            }
            @if (category()) {
              <button class="active-chip" (click)="selectCategory('')" aria-label="\u041F\u0440\u0435\u043C\u0430\u0445\u043D\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F">
                {{ getCategoryName(category()) }}
                <svg class="chip-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            }
            @if (difficulty()) {
              <button class="active-chip" (click)="selectDifficulty('')" aria-label="\u041F\u0440\u0435\u043C\u0430\u0445\u043D\u0438 \u0442\u0440\u0443\u0434\u043D\u043E\u0441\u0442">
                {{ difficulty() }}
                <svg class="chip-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            }
            @if (sort() && sort() !== 'newest') {
              <button class="active-chip" (click)="selectSort('newest')" aria-label="\u041F\u0440\u0435\u043C\u0430\u0445\u043D\u0438 \u0441\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435">
                {{ sort() === 'fastest' ? '\u041D\u0430\u0439-\u0431\u044A\u0440\u0437\u0438' : '\u041D\u0430\u0439-\u043B\u0435\u0441\u043D\u0438' }}
                <svg class="chip-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            }
            <button class="clear-all" (click)="clearAll()">\u0418\u0437\u0447\u0438\u0441\u0442\u0438 \u0432\u0441\u0438\u0447\u043A\u0438</button>
          </div>
        }

        <!-- Recipe grid / skeleton -->
        @if (loading()) {
          <div class="recipe-grid">
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
                    <div class="sk-line sk-sm"></div>
                  </div>
                </div>
              </div>
            }
          </div>
        } @else {
          <div class="recipe-grid">
            @for (recipe of recipes(); track recipe.id; let i = $index) {
              <app-recipe-card [recipe]="recipe" [priority]="i === 0" [index]="i" />
            } @empty {
              <div class="no-results">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="28" cy="28" r="18"/><line x1="41" y1="41" x2="56" y2="56"/><line x1="20" y1="28" x2="36" y2="28"/></svg>
                <p>\u041D\u044F\u043C\u0430 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438.</p>
                <span>\u041E\u043F\u0438\u0442\u0430\u0439 \u0441 \u0434\u0440\u0443\u0433\u0430 \u0434\u0443\u043C\u0430 \u0438\u043B\u0438 \u0441\u043C\u0435\u043D\u0438 \u0444\u0438\u043B\u0442\u0440\u0438\u0442\u0435.</span>
              </div>
            }
          </div>
        }

        @if (lastPage() > 1) {
          <div class="pagination">
            <button class="page-btn" [disabled]="currentPage() === 1" (click)="goToPage(currentPage() - 1)" aria-label="\u041F\u0440\u0435\u0434\u0438\u0448\u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430">\u2039</button>
            <span class="page-counter">{{ currentPage() }} / {{ lastPage() }}</span>
            @for (p of pageNumbers(); track $index) {
              @if (p === null) {
                <span class="page-ellipsis" aria-hidden="true">\u2026</span>
              } @else {
                <button
                  class="page-btn"
                  [class.active]="p === currentPage()"
                  [attr.aria-current]="p === currentPage() ? 'page' : null"
                  (click)="goToPage(p)"
                >{{ p }}</button>
              }
            }
            <button class="page-btn" [disabled]="currentPage() === lastPage()" (click)="goToPage(currentPage() + 1)" aria-label="\u0421\u043B\u0435\u0434\u0432\u0430\u0449\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430">\u203A</button>
          </div>
        }
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;9ccaf8d4ac49b73ddd5826a08c4c7cf1c83c35faef693d1277c8324c901c8c44;/home/ivaylo-penev/Desktop/Blog-System-Angular/frontend/src/app/pages/recipes/recipes.component.ts */\n.page {\n  padding: var(--space-9) clamp(var(--space-4), 4vw, var(--space-6)) var(--space-10);\n  background-color: var(--clr-bg);\n  background-image: url(/backgrounds/cooking-pattern.svg);\n  background-size: 500px;\n  background-repeat: repeat;\n  min-height: 100dvh;\n}\n.page-inner {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  text-align: left;\n  margin-bottom: var(--space-7);\n}\n.page-eyebrow {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n  color: var(--clr-green-text);\n  background: var(--clr-green-bg);\n  padding: var(--space-1) var(--space-4);\n  border-radius: var(--radius-pill);\n  margin-bottom: var(--space-4);\n}\n.page-header h1 {\n  font-family: var(--font-display);\n  font-size: clamp(2rem, 4vw, 3rem);\n  color: var(--clr-text);\n  margin: 0 0 var(--space-2);\n  letter-spacing: -0.02em;\n}\n.page-header p {\n  color: var(--clr-text-muted);\n  font-size: 1rem;\n  font-weight: 300;\n  margin: 0;\n  max-width: 55ch;\n}\n.search-bar {\n  display: flex;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n  border: 1.5px solid var(--clr-border);\n  max-width: 560px;\n  margin: 0 0 var(--space-6);\n  background: var(--clr-surface);\n}\n.search-input {\n  flex: 1;\n  padding: var(--space-3) var(--space-5);\n  border: none;\n  font-size: 0.95rem;\n  outline: none;\n  background: transparent;\n  color: var(--clr-text);\n}\n.search-btn {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-3) var(--space-6);\n  background: var(--clr-brand);\n  color: #ffffff;\n  border: none;\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: background 0.18s var(--ease-out-expo);\n  touch-action: manipulation;\n}\n.search-btn svg {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.search-btn:hover {\n  background: var(--clr-brand-dark);\n}\n.pill-filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-2);\n  margin-bottom: var(--space-3);\n  justify-content: flex-start;\n}\n.pill-filters-secondary {\n  margin-bottom: var(--space-8);\n  align-items: center;\n  justify-content: flex-start;\n}\n.pill {\n  padding: var(--space-2) var(--space-4);\n  border-radius: var(--radius-pill);\n  border: 1.5px solid var(--clr-border);\n  background: var(--clr-surface);\n  color: var(--clr-text-muted);\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition:\n    background 0.18s var(--ease-out-expo),\n    border-color 0.18s var(--ease-out-expo),\n    color 0.18s var(--ease-out-expo);\n  white-space: nowrap;\n  min-height: 2.75rem;\n  touch-action: manipulation;\n}\n.pill:hover {\n  background: var(--clr-surface-hover);\n  border-color: var(--clr-border-strong);\n  color: var(--clr-text);\n}\n.pill.active {\n  background: var(--clr-brand);\n  border-color: var(--clr-brand);\n  color: var(--clr-surface);\n  font-weight: 600;\n}\n.pill-easy.active {\n  background: var(--clr-green-bg);\n  color: var(--clr-green-text);\n  border-color: var(--clr-green);\n}\n.pill-medium.active {\n  background: var(--clr-amber-bg);\n  color: var(--clr-amber-text);\n  border-color: var(--clr-amber-border);\n}\n.pill-hard.active {\n  background: var(--clr-rust-bg);\n  color: var(--clr-rust-text);\n  border-color: var(--clr-rust-border);\n}\n.pill:focus-visible {\n  outline: 2.5px solid var(--clr-focus);\n  outline-offset: 2px;\n}\n.pill-sm {\n  padding: var(--space-2) var(--space-3);\n  font-size: 0.8rem;\n  min-height: 2.75rem;\n}\n.sort-divider {\n  width: 1px;\n  height: var(--space-5);\n  background: var(--clr-border-strong);\n  flex-shrink: 0;\n  align-self: center;\n  margin: 0 var(--space-1);\n}\n.active-filters {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--space-2);\n  margin-bottom: var(--space-6);\n  padding: var(--space-3) var(--space-4);\n  background: var(--clr-surface-alt);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--clr-border-faint);\n}\n.filters-label {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--clr-text-faint);\n  margin-right: var(--space-1);\n  flex-shrink: 0;\n}\n.active-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-1);\n  padding: var(--space-1) var(--space-3);\n  background: var(--clr-text);\n  color: var(--clr-bg);\n  border: none;\n  border-radius: var(--radius-pill);\n  font-size: 0.78rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);\n  touch-action: manipulation;\n}\n.active-chip:hover {\n  background: var(--clr-text-muted);\n}\n.active-chip:active {\n  transform: scale(0.97);\n}\n.active-chip > svg:first-child {\n  width: 0.7rem;\n  height: 0.7rem;\n  opacity: 0.7;\n}\n.chip-x {\n  width: 0.7rem;\n  height: 0.7rem;\n  opacity: 0.6;\n  flex-shrink: 0;\n}\n.clear-all {\n  margin-left: auto;\n  background: none;\n  border: none;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--clr-text-muted);\n  cursor: pointer;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n  padding: var(--space-1);\n  transition: color 0.15s var(--ease-out-expo);\n  touch-action: manipulation;\n}\n.clear-all:hover {\n  color: var(--clr-text);\n}\n.recipe-grid {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr 1fr;\n  grid-auto-rows: minmax(0, auto);\n  gap: var(--space-6);\n}\n.recipe-grid > app-recipe-card {\n  min-width: 0;\n}\n.recipe-grid > app-recipe-card:nth-child(9n+1) {\n  grid-column: span 2;\n}\n.recipe-grid > app-recipe-card:nth-child(11n+4) {\n  grid-row: span 2;\n}\n.recipe-grid > app-recipe-card {\n  --card-i: 0;\n  animation-delay: calc(var(--card-i) * 45ms) !important;\n}\n.recipe-grid > app-recipe-card:nth-child(1) {\n  --card-i: 0;\n}\n.recipe-grid > app-recipe-card:nth-child(2) {\n  --card-i: 1;\n}\n.recipe-grid > app-recipe-card:nth-child(3) {\n  --card-i: 2;\n}\n.recipe-grid > app-recipe-card:nth-child(4) {\n  --card-i: 3;\n}\n.recipe-grid > app-recipe-card:nth-child(5) {\n  --card-i: 4;\n}\n.recipe-grid > app-recipe-card:nth-child(6) {\n  --card-i: 5;\n}\n.recipe-grid > app-recipe-card:nth-child(7) {\n  --card-i: 6;\n}\n.recipe-grid > app-recipe-card:nth-child(8) {\n  --card-i: 7;\n}\n.recipe-grid > app-recipe-card:nth-child(9) {\n  --card-i: 8;\n}\n.recipe-grid > app-recipe-card:nth-child(10) {\n  --card-i: 9;\n}\n.recipe-grid > app-recipe-card:nth-child(11) {\n  --card-i: 10;\n}\n.recipe-grid > app-recipe-card:nth-child(12) {\n  --card-i: 11;\n}\n.recipe-grid > app-recipe-card:nth-child(n+13) {\n  --card-i: 12;\n}\n@media (min-width: 1280px) {\n  .recipe-grid {\n    grid-template-columns: 1.6fr 1fr 1fr 1fr;\n    gap: var(--space-7);\n  }\n  .recipe-grid > app-recipe-card:nth-child(9n+1) {\n    grid-column: span 2;\n  }\n}\n@media (max-width: 900px) {\n  .recipe-grid {\n    grid-template-columns: 1fr 1fr;\n    gap: var(--space-5);\n  }\n  .recipe-grid > app-recipe-card:nth-child(9n+1),\n  .recipe-grid > app-recipe-card:nth-child(11n+4) {\n    grid-column: auto;\n    grid-row: auto;\n  }\n}\n.no-results {\n  grid-column: 1/-1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-10) var(--space-7);\n  color: var(--clr-text-muted);\n  text-align: center;\n}\n.no-results svg {\n  width: 3rem;\n  height: 3rem;\n  color: var(--clr-text-faint);\n  margin-bottom: var(--space-2);\n}\n.no-results p {\n  font-size: 1.05rem;\n  font-weight: 600;\n  color: var(--clr-text);\n  margin: 0;\n}\n.no-results span {\n  font-size: 0.875rem;\n  color: var(--clr-text-faint);\n}\n.skeleton-card {\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  background: var(--clr-surface);\n  box-shadow: var(--shadow-sm);\n}\n.sk-img {\n  aspect-ratio: 4/3;\n  background: var(--clr-skeleton);\n  position: relative;\n  overflow: hidden;\n}\n.sk-img::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: shimmer 1.5s linear infinite;\n}\n.sk-body {\n  padding: var(--space-5);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.sk-meta {\n  display: flex;\n  gap: var(--space-3);\n  margin-top: var(--space-1);\n}\n.sk-line {\n  height: 0.8rem;\n  border-radius: var(--radius-pill);\n  background: var(--clr-skeleton);\n  position: relative;\n  overflow: hidden;\n}\n.sk-line::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: shimmer 1.5s linear infinite;\n}\n.sk-short {\n  width: 30%;\n}\n.sk-long {\n  width: 75%;\n}\n.sk-medium {\n  width: 50%;\n}\n.sk-sm {\n  width: 22%;\n}\n@keyframes shimmer {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: var(--space-2);\n  margin-top: var(--space-9);\n}\n.page-btn {\n  min-width: 2.75rem;\n  height: 2.75rem;\n  padding: 0 var(--space-3);\n  border-radius: var(--radius-sm);\n  border: 1.5px solid var(--clr-border);\n  background: var(--clr-surface);\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 0.9rem;\n  transition:\n    background 0.18s var(--ease-out-expo),\n    border-color 0.18s var(--ease-out-expo),\n    color 0.18s var(--ease-out-expo);\n  color: var(--clr-text);\n  touch-action: manipulation;\n}\n.page-btn:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.page-btn.active {\n  background: var(--clr-text);\n  color: var(--clr-bg);\n  border-color: var(--clr-text);\n}\n.page-btn:hover:not(.active):not(:disabled) {\n  background: var(--clr-surface-hover);\n  border-color: var(--clr-border-strong);\n}\n.page-ellipsis {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 2rem;\n  height: 2.75rem;\n  font-size: 0.9rem;\n  color: var(--clr-text-faint);\n  -webkit-user-select: none;\n  user-select: none;\n}\n.page-counter {\n  display: none;\n}\n@media (max-width: 640px) {\n  .recipe-grid {\n    grid-template-columns: 1fr;\n  }\n  .btn-text {\n    display: none;\n  }\n  .search-btn {\n    padding: var(--space-3) var(--space-4);\n  }\n  .search-bar {\n    max-width: 100%;\n  }\n  .pill {\n    min-height: 2.75rem;\n  }\n  .pill-sm {\n    min-height: 2.75rem;\n  }\n  .page-btn {\n    min-width: 2.75rem;\n    height: 2.75rem;\n  }\n  .pill-filters {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    scroll-snap-type: x mandatory;\n    -webkit-overflow-scrolling: touch;\n    scrollbar-width: none;\n    padding-bottom: var(--space-1);\n    -ms-overflow-style: none;\n  }\n  .pill-filters::-webkit-scrollbar {\n    display: none;\n  }\n  .pill-filters .pill {\n    scroll-snap-align: start;\n    flex-shrink: 0;\n  }\n}\n@media (max-width: 420px) {\n  .page-btn:not([aria-label]) {\n    display: none;\n  }\n  .page-ellipsis {\n    display: none;\n  }\n  .page-counter {\n    display: flex;\n    align-items: center;\n    font-size: 0.9rem;\n    font-weight: 600;\n    color: var(--clr-text);\n    padding: 0 var(--space-3);\n    font-variant-numeric: tabular-nums;\n  }\n}\n/*# sourceMappingURL=recipes.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecipesComponent, { className: "RecipesComponent", filePath: "src/app/pages/recipes/recipes.component.ts", lineNumber: 537 });
})();
export {
  RecipesComponent
};
//# sourceMappingURL=chunk-JG37YIMH.js.map
