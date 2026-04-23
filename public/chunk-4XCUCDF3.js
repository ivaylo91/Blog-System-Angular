import {
  ConfirmModalComponent
} from "./chunk-TBBU46XN.js";
import {
  ToastService
} from "./chunk-VHJLHV5Z.js";
import {
  takeUntilDestroyed
} from "./chunk-OOSWPAHX.js";
import {
  AuthService
} from "./chunk-NMKHPTKL.js";
import {
  DashboardService
} from "./chunk-ISS3T7XZ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-CZI4FLAU.js";
import "./chunk-GL5TQRYS.js";
import {
  ChangeDetectionStrategy,
  Component,
  RouterLink,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LVOWXKII.js";

// src/app/pages/dashboard-recipes/dashboard-recipes.component.ts
var _c0 = (a0) => ["/recipes", a0];
var _c1 = (a0) => ["/dashboard/recipes", a0, "edit"];
var _forTrack0 = ($index, $item) => $item.id;
function DashboardRecipesComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "\u0410\u0432\u0442\u043E\u0440");
    \u0275\u0275elementEnd();
  }
}
function DashboardRecipesComponent_For_44_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const recipe_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((recipe_r2.user == null ? null : recipe_r2.user.name) || "\u2014");
  }
}
function DashboardRecipesComponent_For_44_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "path", 25)(2, "circle", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u041F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D\u0430 ");
  }
}
function DashboardRecipesComponent_For_44_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "path", 27)(2, "line", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u0427\u0435\u0440\u043D\u043E\u0432\u0430 ");
  }
}
function DashboardRecipesComponent_For_44_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275text(1, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0430\u0439");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 30);
    \u0275\u0275listener("click", function DashboardRecipesComponent_For_44_Conditional_17_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const recipe_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete(recipe_r2));
    });
    \u0275\u0275text(3, "\u0418\u0437\u0442\u0440\u0438\u0439");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const recipe_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c1, recipe_r2.slug));
  }
}
function DashboardRecipesComponent_For_44_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function DashboardRecipesComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, DashboardRecipesComponent_For_44_Conditional_4_Template, 2, 1, "td", 19);
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "button", 21);
    \u0275\u0275listener("click", function DashboardRecipesComponent_For_44_Template_button_click_11_listener() {
      const recipe_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.togglePublish(recipe_r2));
    });
    \u0275\u0275conditionalCreate(12, DashboardRecipesComponent_For_44_Conditional_12_Template, 4, 0)(13, DashboardRecipesComponent_For_44_Conditional_13_Template, 4, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 22);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 23);
    \u0275\u0275conditionalCreate(17, DashboardRecipesComponent_For_44_Conditional_17_Template, 4, 3)(18, DashboardRecipesComponent_For_44_Conditional_18_Template, 2, 0, "span", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const recipe_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("draft-row", !recipe_r2.published);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c0, recipe_r2.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(recipe_r2.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.auth.isAdmin() ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((recipe_r2.category == null ? null : recipe_r2.category.name) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge-" + recipe_r2.difficulty);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(recipe_r2.difficulty);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("published", recipe_r2.published)("draft", !recipe_r2.published);
    \u0275\u0275property("title", recipe_r2.published ? "\u0421\u043A\u0440\u0438\u0439" : "\u041F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u0439")("disabled", !ctx_r2.canManage(recipe_r2));
    \u0275\u0275advance();
    \u0275\u0275conditional(recipe_r2.published ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(recipe_r2.published_at || ""));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.canManage(recipe_r2) ? 17 : 18);
  }
}
function DashboardRecipesComponent_ForEmpty_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275text(2, "\u041D\u044F\u043C\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0438.");
    \u0275\u0275elementEnd()();
  }
}
function DashboardRecipesComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-confirm-modal", 32);
    \u0275\u0275listener("confirmed", function DashboardRecipesComponent_Conditional_46_Template_app_confirm_modal_confirmed_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteRecipe());
    })("cancelled", function DashboardRecipesComponent_Conditional_46_Template_app_confirm_modal_cancelled_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showDeleteModal.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("open", true)("message", "\u0421\u0438\u0433\u0443\u0440\u043D\u0438 \u043B\u0438 \u0441\u0442\u0435, \u0447\u0435 \u0438\u0441\u043A\u0430\u0442\u0435 \u0434\u0430 \u0438\u0437\u0442\u0440\u0438\u0435\u0442\u0435 " + ctx_r2.recipeToDelete().title + "?");
  }
}
var DashboardRecipesComponent = class _DashboardRecipesComponent {
  dashboardService = inject(DashboardService);
  toast = inject(ToastService);
  auth = inject(AuthService);
  recipes = signal([], ...ngDevMode ? [{ debugName: "recipes" }] : (
    /* istanbul ignore next */
    []
  ));
  filteredRecipes = signal([], ...ngDevMode ? [{ debugName: "filteredRecipes" }] : (
    /* istanbul ignore next */
    []
  ));
  showDeleteModal = signal(false, ...ngDevMode ? [{ debugName: "showDeleteModal" }] : (
    /* istanbul ignore next */
    []
  ));
  recipeToDelete = signal(null, ...ngDevMode ? [{ debugName: "recipeToDelete" }] : (
    /* istanbul ignore next */
    []
  ));
  searchQuery = "";
  filterStatus = "all";
  publishedCount = () => this.recipes().filter((r) => r.published).length;
  draftCount = () => this.recipes().filter((r) => !r.published).length;
  canManage(recipe) {
    if (this.auth.isAdmin())
      return true;
    return recipe.user_id === this.auth.user()?.id;
  }
  constructor() {
    this.loadRecipes();
  }
  loadRecipes() {
    this.dashboardService.getRecipes().pipe(takeUntilDestroyed()).subscribe({
      next: (r) => {
        this.recipes.set(r);
        this.applyFilter();
      },
      error: () => this.toast.error("\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0440\u0435\u0436\u0434\u0430\u043D\u0435 \u043D\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0438.")
    });
  }
  applyFilter() {
    let result = this.recipes();
    if (this.filterStatus === "published")
      result = result.filter((r) => r.published);
    if (this.filterStatus === "draft")
      result = result.filter((r) => !r.published);
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      result = result.filter((r) => r.title.toLowerCase().includes(q) || (r.user?.name?.toLowerCase().includes(q) ?? false));
    }
    this.filteredRecipes.set(result);
  }
  setFilter(status) {
    this.filterStatus = status;
    this.applyFilter();
  }
  togglePublish(recipe) {
    if (!this.canManage(recipe))
      return;
    this.dashboardService.togglePublish(recipe.slug, !recipe.published).subscribe({
      next: () => {
        this.toast.success(recipe.published ? "\u0420\u0435\u0446\u0435\u043F\u0442\u0430\u0442\u0430 \u0435 \u0441\u043A\u0440\u0438\u0442\u0430." : "\u0420\u0435\u0446\u0435\u043F\u0442\u0430\u0442\u0430 \u0435 \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D\u0430.");
        this.loadRecipes();
      },
      error: () => this.toast.error("\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u043F\u0440\u043E\u043C\u044F\u043D\u0430 \u043D\u0430 \u0441\u0442\u0430\u0442\u0443\u0441\u0430.")
    });
  }
  confirmDelete(recipe) {
    this.recipeToDelete.set(recipe);
    this.showDeleteModal.set(true);
  }
  deleteRecipe() {
    const recipe = this.recipeToDelete();
    if (!recipe)
      return;
    this.dashboardService.deleteRecipe(recipe.slug).subscribe({
      next: () => {
        this.showDeleteModal.set(false);
        this.recipeToDelete.set(null);
        this.toast.success("\u0420\u0435\u0446\u0435\u043F\u0442\u0430\u0442\u0430 \u0435 \u0438\u0437\u0442\u0440\u0438\u0442\u0430.");
        this.loadRecipes();
      },
      error: () => this.toast.error("\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u0438\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435.")
    });
  }
  formatDate(date) {
    if (!date)
      return "\u2014";
    return new Date(date).toLocaleDateString("bg-BG", { day: "numeric", month: "short", year: "numeric" });
  }
  static \u0275fac = function DashboardRecipesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardRecipesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardRecipesComponent, selectors: [["app-dashboard-recipes"]], decls: 47, vars: 14, consts: [[1, "dashboard-recipes"], [1, "header-row"], [1, "subtitle"], ["routerLink", "/dashboard/recipes/new", 1, "btn-primary"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "filter-bar"], [1, "search-wrap"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["type", "text", "placeholder", "\u0422\u044A\u0440\u0441\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0430...", 3, "ngModelChange", "input", "ngModel"], [1, "filter-pills"], [1, "pill", 3, "click"], [1, "table-wrap"], [3, "draft-row"], ["title", "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430", 3, "open", "message"], [1, "recipe-link", 3, "routerLink"], [1, "author-cell"], [1, "badge"], [1, "status-toggle", 3, "click", "title", "disabled"], [1, "date-cell"], [1, "actions"], [1, "no-access"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], [1, "btn-small", 3, "routerLink"], [1, "btn-small", "btn-danger", 3, "click"], ["colspan", "7", 1, "empty"], ["title", "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430", 3, "confirmed", "cancelled", "open", "message"]], template: function DashboardRecipesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 2);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 4);
      \u0275\u0275element(9, "line", 5)(10, "line", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " \u041D\u043E\u0432\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 7)(13, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 9);
      \u0275\u0275element(15, "circle", 10)(16, "line", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function DashboardRecipesComponent_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("input", function DashboardRecipesComponent_Template_input_input_17_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 13)(19, "button", 14);
      \u0275\u0275listener("click", function DashboardRecipesComponent_Template_button_click_19_listener() {
        return ctx.setFilter("all");
      });
      \u0275\u0275text(20, "\u0412\u0441\u0438\u0447\u043A\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 14);
      \u0275\u0275listener("click", function DashboardRecipesComponent_Template_button_click_21_listener() {
        return ctx.setFilter("published");
      });
      \u0275\u0275text(22, "\u041F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 14);
      \u0275\u0275listener("click", function DashboardRecipesComponent_Template_button_click_23_listener() {
        return ctx.setFilter("draft");
      });
      \u0275\u0275text(24, "\u0427\u0435\u0440\u043D\u043E\u0432\u0438");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "table")(27, "thead")(28, "tr")(29, "th");
      \u0275\u0275text(30, "\u0417\u0430\u0433\u043B\u0430\u0432\u0438\u0435");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(31, DashboardRecipesComponent_Conditional_31_Template, 2, 0, "th");
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th");
      \u0275\u0275text(35, "\u0422\u0440\u0443\u0434\u043D\u043E\u0441\u0442");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th");
      \u0275\u0275text(37, "\u0421\u0442\u0430\u0442\u0443\u0441");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "th");
      \u0275\u0275text(39, "\u0414\u0430\u0442\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th");
      \u0275\u0275text(41, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "tbody");
      \u0275\u0275repeaterCreate(43, DashboardRecipesComponent_For_44_Template, 19, 20, "tr", 16, _forTrack0, false, DashboardRecipesComponent_ForEmpty_45_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(46, DashboardRecipesComponent_Conditional_46_Template, 1, 2, "app-confirm-modal", 17);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.auth.isAdmin() ? "\u0412\u0441\u0438\u0447\u043A\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438" : "\u041C\u043E\u0438\u0442\u0435 \u0440\u0435\u0446\u0435\u043F\u0442\u0438");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate3("", ctx.recipes().length, " \u0440\u0435\u0446\u0435\u043F\u0442\u0438 \u2014 ", ctx.publishedCount(), " \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D\u0438, ", ctx.draftCount(), " \u0447\u0435\u0440\u043D\u043E\u0432\u0438");
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.filterStatus === "all");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.filterStatus === "published");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.filterStatus === "draft");
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.auth.isAdmin() ? 31 : -1);
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.filteredRecipes());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showDeleteModal() ? 46 : -1);
    }
  }, dependencies: [RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ConfirmModalComponent], styles: ['@charset "UTF-8";\n\n\n.dashboard-recipes[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem;\n}\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  gap: 1rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-family:\n    "Playfair Display",\n    Georgia,\n    serif;\n  font-size: 1.75rem;\n  color: #1c1917;\n  margin: 0 0 0.2rem;\n  letter-spacing: -0.02em;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #57534e;\n  font-size: 0.85rem;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.65rem 1.25rem;\n  background: #4a7c59;\n  color: #fff;\n  border-radius: 0.75rem;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: background 0.2s, box-shadow 0.2s;\n  white-space: nowrap;\n  flex-shrink: 0;\n  box-shadow: 0 2px 8px rgba(74, 124, 89, 0.25);\n  touch-action: manipulation;\n}\n.btn-primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #3a6347;\n  box-shadow: 0 4px 14px rgba(74, 124, 89, 0.35);\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n  flex-wrap: wrap;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #fff;\n  border: 1.5px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0.75rem;\n  padding: 0.5rem 0.9rem;\n  flex: 1;\n  min-width: 200px;\n  transition: border-color 0.18s, box-shadow 0.18s;\n}\n.search-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: #4a7c59;\n  box-shadow: 0 0 0 3px rgba(74, 124, 89, 0.1);\n}\n.search-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  color: #57534e;\n  flex-shrink: 0;\n}\n.search-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 0.875rem;\n  width: 100%;\n  color: #1c1917;\n}\n.filter-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n}\n.pill[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.9rem;\n  border-radius: 999px;\n  border: 1.5px solid rgba(0, 0, 0, 0.12);\n  background: #fff;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  color: #44403c;\n  transition:\n    background 0.18s,\n    border-color 0.18s,\n    color 0.18s;\n  touch-action: manipulation;\n  min-height: 2.25rem;\n}\n.pill.active[_ngcontent-%COMP%] {\n  background: #78350f;\n  color: #fff;\n  border-color: #78350f;\n}\n.pill[_ngcontent-%COMP%]:hover:not(.active) {\n  background: #f5f0e8;\n  border-color: rgba(0, 0, 0, 0.18);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 1.5rem;\n  border: 1px solid rgba(0, 0, 0, 0.14);\n  overflow-x: auto;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\nth[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 0.75rem 1rem;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #44403c;\n  font-weight: 700;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.1);\n  background: #f5f0e8;\n}\ntd[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.07);\n  font-size: 0.9rem;\n  color: #1c1917;\n  vertical-align: middle;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.15s;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #faf7f4;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.draft-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #78716c;\n}\n.recipe-link[_ngcontent-%COMP%] {\n  color: #1c1917;\n  text-decoration: none;\n  font-weight: 600;\n}\n.recipe-link[_ngcontent-%COMP%]:hover {\n  color: #78350f;\n  text-decoration: underline;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.badge-\\41b\\435\\441\\43d\\43e[_ngcontent-%COMP%]  {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge-\\421\\440\\435\\434\\43d\\43e[_ngcontent-%COMP%]  {\n  background: #fde68a;\n  color: #78350f;\n}\n.badge-\\417\\430[_ngcontent-%COMP%]   \\ \\43d\\430\\43f\\440\\435\\434\\43d\\430\\43b\\438[_ngcontent-%COMP%]  {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.status-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.3rem 0.7rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  transition: background 0.18s;\n  touch-action: manipulation;\n  white-space: nowrap;\n}\n.status-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.75rem;\n  height: 0.75rem;\n  flex-shrink: 0;\n}\n.status-toggle.published[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n  border-color: #6ee7b7;\n}\n.status-toggle.published[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #a7f3d0;\n}\n.status-toggle.draft[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #713f12;\n  border-color: #fde68a;\n}\n.status-toggle.draft[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fef08a;\n}\n.status-toggle[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: default;\n}\n.author-cell[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #57534e;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.no-access[_ngcontent-%COMP%] {\n  color: #a8a29e;\n  font-size: 0.8rem;\n}\n.date-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  color: #78716c;\n  font-size: 0.83rem;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n  align-items: center;\n}\n.btn-small[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.5rem;\n  font-size: 0.78rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  border: 1.5px solid rgba(0, 0, 0, 0.12);\n  background: #fafaf9;\n  color: #1c1917;\n  transition: background 0.18s, border-color 0.18s;\n  touch-action: manipulation;\n  white-space: nowrap;\n  min-height: 2rem;\n  display: inline-flex;\n  align-items: center;\n}\n.btn-small[_ngcontent-%COMP%]:hover {\n  background: #f0ede8;\n  border-color: rgba(0, 0, 0, 0.18);\n}\n.btn-danger[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  border-color: #fca5a5;\n  background: #fff;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  border-color: #f87171;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #78716c;\n  padding: 3rem 2rem;\n  font-size: 0.9rem;\n}\n@media (max-width: 768px) {\n  .dashboard-recipes[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem 2.5rem;\n  }\n  .header-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .btn-primary[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n@media (max-width: 640px) {\n  .filter-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-pills[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=dashboard-recipes.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardRecipesComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-recipes", standalone: true, imports: [RouterLink, FormsModule, ConfirmModalComponent], template: `
    <div class="dashboard-recipes">
      <div class="header-row">
        <div>
          <h1>{{ auth.isAdmin() ? '\u0412\u0441\u0438\u0447\u043A\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438' : '\u041C\u043E\u0438\u0442\u0435 \u0440\u0435\u0446\u0435\u043F\u0442\u0438' }}</h1>
          <p class="subtitle">{{ recipes().length }} \u0440\u0435\u0446\u0435\u043F\u0442\u0438 \u2014 {{ publishedCount() }} \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D\u0438, {{ draftCount() }} \u0447\u0435\u0440\u043D\u043E\u0432\u0438</p>
        </div>
        <a routerLink="/dashboard/recipes/new" class="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          \u041D\u043E\u0432\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430
        </a>
      </div>

      <!-- Search & filter bar -->
      <div class="filter-bar">
        <div class="search-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" [(ngModel)]="searchQuery" (input)="applyFilter()" placeholder="\u0422\u044A\u0440\u0441\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0430..." />
        </div>
        <div class="filter-pills">
          <button class="pill" [class.active]="filterStatus === 'all'" (click)="setFilter('all')">\u0412\u0441\u0438\u0447\u043A\u0438</button>
          <button class="pill" [class.active]="filterStatus === 'published'" (click)="setFilter('published')">\u041F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D\u0438</button>
          <button class="pill" [class.active]="filterStatus === 'draft'" (click)="setFilter('draft')">\u0427\u0435\u0440\u043D\u043E\u0432\u0438</button>
        </div>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>\u0417\u0430\u0433\u043B\u0430\u0432\u0438\u0435</th>
              @if (auth.isAdmin()) { <th>\u0410\u0432\u0442\u043E\u0440</th> }
              <th>\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F</th>
              <th>\u0422\u0440\u0443\u0434\u043D\u043E\u0441\u0442</th>
              <th>\u0421\u0442\u0430\u0442\u0443\u0441</th>
              <th>\u0414\u0430\u0442\u0430</th>
              <th>\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F</th>
            </tr>
          </thead>
          <tbody>
            @for (recipe of filteredRecipes(); track recipe.id) {
              <tr [class.draft-row]="!recipe.published">
                <td>
                  <a [routerLink]="['/recipes', recipe.slug]" class="recipe-link">{{ recipe.title }}</a>
                </td>
                @if (auth.isAdmin()) {
                  <td class="author-cell">{{ recipe.user?.name || '\u2014' }}</td>
                }
                <td>{{ recipe.category?.name || '\u2014' }}</td>
                <td>
                  <span class="badge" [class]="'badge-' + recipe.difficulty">{{ recipe.difficulty }}</span>
                </td>
                <td>
                  <button class="status-toggle"
                    [class.published]="recipe.published"
                    [class.draft]="!recipe.published"
                    (click)="togglePublish(recipe)"
                    [title]="recipe.published ? '\u0421\u043A\u0440\u0438\u0439' : '\u041F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u0439'"
                    [disabled]="!canManage(recipe)">
                    @if (recipe.published) {
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      \u041F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D\u0430
                    } @else {
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                      \u0427\u0435\u0440\u043D\u043E\u0432\u0430
                    }
                  </button>
                </td>
                <td class="date-cell">{{ formatDate(recipe.published_at || '') }}</td>
                <td class="actions">
                  @if (canManage(recipe)) {
                    <a [routerLink]="['/dashboard/recipes', recipe.slug, 'edit']" class="btn-small">\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0430\u0439</a>
                    <button class="btn-small btn-danger" (click)="confirmDelete(recipe)">\u0418\u0437\u0442\u0440\u0438\u0439</button>
                  } @else {
                    <span class="no-access">\u2014</span>
                  }
                </td>
              </tr>
            }
            @empty {
              <tr><td colspan="7" class="empty">\u041D\u044F\u043C\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0438.</td></tr>
            }
          </tbody>
        </table>
      </div>

      @if (showDeleteModal()) {
        <app-confirm-modal
          [open]="true"
          title="\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430"
          [message]="'\u0421\u0438\u0433\u0443\u0440\u043D\u0438 \u043B\u0438 \u0441\u0442\u0435, \u0447\u0435 \u0438\u0441\u043A\u0430\u0442\u0435 \u0434\u0430 \u0438\u0437\u0442\u0440\u0438\u0435\u0442\u0435 ' + recipeToDelete()!.title + '?'"
          (confirmed)="deleteRecipe()"
          (cancelled)="showDeleteModal.set(false)"
        ></app-confirm-modal>
      }
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;f6176347ecbc0c20fc2bb236ebacc9fd583706569e1b13afd856a56871e41b1f;C:/Users/ipene/Desktop/Blog-System-Angular/frontend/src/app/pages/dashboard-recipes/dashboard-recipes.component.ts */\n.dashboard-recipes {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem;\n}\n.header-row {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  gap: 1rem;\n}\nh1 {\n  font-family:\n    "Playfair Display",\n    Georgia,\n    serif;\n  font-size: 1.75rem;\n  color: #1c1917;\n  margin: 0 0 0.2rem;\n  letter-spacing: -0.02em;\n}\n.subtitle {\n  color: #57534e;\n  font-size: 0.85rem;\n  margin: 0;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.65rem 1.25rem;\n  background: #4a7c59;\n  color: #fff;\n  border-radius: 0.75rem;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: background 0.2s, box-shadow 0.2s;\n  white-space: nowrap;\n  flex-shrink: 0;\n  box-shadow: 0 2px 8px rgba(74, 124, 89, 0.25);\n  touch-action: manipulation;\n}\n.btn-primary svg {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n.btn-primary:hover {\n  background: #3a6347;\n  box-shadow: 0 4px 14px rgba(74, 124, 89, 0.35);\n}\n.filter-bar {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n  flex-wrap: wrap;\n}\n.search-wrap {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #fff;\n  border: 1.5px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0.75rem;\n  padding: 0.5rem 0.9rem;\n  flex: 1;\n  min-width: 200px;\n  transition: border-color 0.18s, box-shadow 0.18s;\n}\n.search-wrap:focus-within {\n  border-color: #4a7c59;\n  box-shadow: 0 0 0 3px rgba(74, 124, 89, 0.1);\n}\n.search-wrap svg {\n  width: 1rem;\n  height: 1rem;\n  color: #57534e;\n  flex-shrink: 0;\n}\n.search-wrap input {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 0.875rem;\n  width: 100%;\n  color: #1c1917;\n}\n.filter-pills {\n  display: flex;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n}\n.pill {\n  padding: 0.45rem 0.9rem;\n  border-radius: 999px;\n  border: 1.5px solid rgba(0, 0, 0, 0.12);\n  background: #fff;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  color: #44403c;\n  transition:\n    background 0.18s,\n    border-color 0.18s,\n    color 0.18s;\n  touch-action: manipulation;\n  min-height: 2.25rem;\n}\n.pill.active {\n  background: #78350f;\n  color: #fff;\n  border-color: #78350f;\n}\n.pill:hover:not(.active) {\n  background: #f5f0e8;\n  border-color: rgba(0, 0, 0, 0.18);\n}\n.table-wrap {\n  background: #ffffff;\n  border-radius: 1.5rem;\n  border: 1px solid rgba(0, 0, 0, 0.14);\n  overflow-x: auto;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\nth {\n  text-align: left;\n  padding: 0.75rem 1rem;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #44403c;\n  font-weight: 700;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.1);\n  background: #f5f0e8;\n}\ntd {\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.07);\n  font-size: 0.9rem;\n  color: #1c1917;\n  vertical-align: middle;\n}\ntbody tr {\n  transition: background 0.15s;\n}\ntbody tr:hover {\n  background: #faf7f4;\n}\ntbody tr:last-child td {\n  border-bottom: none;\n}\n.draft-row td {\n  color: #78716c;\n}\n.recipe-link {\n  color: #1c1917;\n  text-decoration: none;\n  font-weight: 600;\n}\n.recipe-link:hover {\n  color: #78350f;\n  text-decoration: underline;\n}\n.badge {\n  padding: 0.2rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.badge-\\41b\\435\\441\\43d\\43e  {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge-\\421\\440\\435\\434\\43d\\43e  {\n  background: #fde68a;\n  color: #78350f;\n}\n.badge-\\417\\430 \\ \\43d\\430\\43f\\440\\435\\434\\43d\\430\\43b\\438  {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.status-toggle {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.3rem 0.7rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  transition: background 0.18s;\n  touch-action: manipulation;\n  white-space: nowrap;\n}\n.status-toggle svg {\n  width: 0.75rem;\n  height: 0.75rem;\n  flex-shrink: 0;\n}\n.status-toggle.published {\n  background: #d1fae5;\n  color: #065f46;\n  border-color: #6ee7b7;\n}\n.status-toggle.published:hover:not(:disabled) {\n  background: #a7f3d0;\n}\n.status-toggle.draft {\n  background: #fef9c3;\n  color: #713f12;\n  border-color: #fde68a;\n}\n.status-toggle.draft:hover:not(:disabled) {\n  background: #fef08a;\n}\n.status-toggle:disabled {\n  opacity: 0.45;\n  cursor: default;\n}\n.author-cell {\n  font-size: 0.85rem;\n  color: #57534e;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.no-access {\n  color: #a8a29e;\n  font-size: 0.8rem;\n}\n.date-cell {\n  white-space: nowrap;\n  color: #78716c;\n  font-size: 0.83rem;\n}\n.actions {\n  display: flex;\n  gap: 0.4rem;\n  align-items: center;\n}\n.btn-small {\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.5rem;\n  font-size: 0.78rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  border: 1.5px solid rgba(0, 0, 0, 0.12);\n  background: #fafaf9;\n  color: #1c1917;\n  transition: background 0.18s, border-color 0.18s;\n  touch-action: manipulation;\n  white-space: nowrap;\n  min-height: 2rem;\n  display: inline-flex;\n  align-items: center;\n}\n.btn-small:hover {\n  background: #f0ede8;\n  border-color: rgba(0, 0, 0, 0.18);\n}\n.btn-danger {\n  color: #b91c1c;\n  border-color: #fca5a5;\n  background: #fff;\n}\n.btn-danger:hover {\n  background: #fef2f2;\n  border-color: #f87171;\n}\n.empty {\n  text-align: center;\n  color: #78716c;\n  padding: 3rem 2rem;\n  font-size: 0.9rem;\n}\n@media (max-width: 768px) {\n  .dashboard-recipes {\n    padding: 1.5rem 1rem 2.5rem;\n  }\n  .header-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .btn-primary {\n    justify-content: center;\n  }\n}\n@media (max-width: 640px) {\n  .filter-bar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-pills {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=dashboard-recipes.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardRecipesComponent, { className: "DashboardRecipesComponent", filePath: "src/app/pages/dashboard-recipes/dashboard-recipes.component.ts", lineNumber: 305 });
})();
export {
  DashboardRecipesComponent
};
//# sourceMappingURL=chunk-4XCUCDF3.js.map
