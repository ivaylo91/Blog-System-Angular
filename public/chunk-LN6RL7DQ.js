import {
  DashboardService
} from "./chunk-ISS3T7XZ.js";
import {
  RecipeService
} from "./chunk-EYV2RDQL.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-CZI4FLAU.js";
import "./chunk-GL5TQRYS.js";
import {
  ActivatedRoute,
  ChangeDetectionStrategy,
  Component,
  Router,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LVOWXKII.js";

// src/app/pages/dashboard-recipe-edit/dashboard-recipe-edit.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DashboardRecipeEditComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 75);
    \u0275\u0275element(1, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " \u0417\u0430\u043F\u0430\u0437\u0432\u0430\u043D\u0435... ");
  }
}
function DashboardRecipeEditComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 6);
    \u0275\u0275element(1, "path", 77)(2, "polyline", 78)(3, "polyline", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u0417\u0430\u043F\u0430\u0437\u0438 ");
  }
}
function DashboardRecipeEditComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "circle", 45)(3, "line", 80)(4, "line", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function DashboardRecipeEditComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    \u0275\u0275property("value", cat_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r2.name);
  }
}
function DashboardRecipeEditComponent_For_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 82);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 83);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardRecipeEditComponent_For_66_Template_input_ngModelChange_3_listener($event) {
      const ing_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(ing_r4.quantity, $event) || (ing_r4.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 84);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardRecipeEditComponent_For_66_Template_input_ngModelChange_4_listener($event) {
      const ing_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(ing_r4.name, $event) || (ing_r4.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 85);
    \u0275\u0275listener("click", function DashboardRecipeEditComponent_For_66_Template_button_click_5_listener() {
      const $index_r5 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeIngredient($index_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 34);
    \u0275\u0275element(7, "line", 7)(8, "line", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ing_r4 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate($index_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ing_r4.quantity);
    \u0275\u0275property("name", "ing-qty-" + $index_r5);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ing_r4.name);
    \u0275\u0275property("name", "ing-name-" + $index_r5);
  }
}
function DashboardRecipeEditComponent_For_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 86);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 87);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardRecipeEditComponent_For_83_Template_textarea_ngModelChange_3_listener($event) {
      const step_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(step_r7.description, $event) || (step_r7.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 85);
    \u0275\u0275listener("click", function DashboardRecipeEditComponent_For_83_Template_button_click_4_listener() {
      const $index_r8 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeStep($index_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 34);
    \u0275\u0275element(6, "line", 7)(7, "line", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const step_r7 = ctx.$implicit;
    const $index_r8 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate($index_r8 + 1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", step_r7.description);
    \u0275\u0275property("name", "step-" + $index_r8);
  }
}
function DashboardRecipeEditComponent_Conditional_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 65);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.imagePreview(), \u0275\u0275sanitizeUrl);
  }
}
function DashboardRecipeEditComponent_Conditional_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 88);
    \u0275\u0275element(2, "path", 89)(3, "polyline", 90)(4, "line", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "\u041A\u043B\u0438\u043A\u043D\u0438 \u0437\u0430 \u043A\u0430\u0447\u0432\u0430\u043D\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small");
    \u0275\u0275text(8, "PNG, JPG, WEBP");
    \u0275\u0275elementEnd()();
  }
}
var DashboardRecipeEditComponent = class _DashboardRecipeEditComponent {
  recipeService = inject(RecipeService);
  dashboardService = inject(DashboardService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  isNew = signal(true, ...ngDevMode ? [{ debugName: "isNew" }] : (
    /* istanbul ignore next */
    []
  ));
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  categories = signal([], ...ngDevMode ? [{ debugName: "categories" }] : (
    /* istanbul ignore next */
    []
  ));
  recipeId = 0;
  recipeSlug = "";
  title = "";
  description = "";
  categoryId = 0;
  difficulty = "\u0421\u0440\u0435\u0434\u043D\u043E";
  prepTime = 0;
  cookTime = 0;
  servings = 4;
  tagsInput = "";
  published = false;
  imageFile = null;
  imagePreview = signal(null, ...ngDevMode ? [{ debugName: "imagePreview" }] : (
    /* istanbul ignore next */
    []
  ));
  ingredients = [{ name: "", quantity: "" }];
  steps = [{ description: "" }];
  constructor() {
    this.recipeService.getCategories().subscribe((c) => this.categories.set(c));
    const slug = this.route.snapshot.paramMap.get("slug");
    if (slug) {
      this.isNew.set(false);
      this.recipeSlug = slug;
      this.dashboardService.getRecipes().subscribe((recipes) => {
        const recipe = recipes.find((r) => r.slug === this.recipeSlug);
        if (recipe) {
          this.title = recipe.title;
          this.description = recipe.description || "";
          this.categoryId = recipe.category_id || 0;
          this.difficulty = recipe.difficulty || "\u0421\u0440\u0435\u0434\u043D\u043E";
          this.prepTime = recipe.prep_minutes || 0;
          this.cookTime = recipe.cook_minutes || 0;
          this.servings = recipe.servings || 4;
          this.tagsInput = recipe.tags?.map((t) => t.name).join(", ") || "";
          this.published = recipe.published || false;
          this.ingredients = recipe.ingredients?.map((i) => ({ name: i.name, quantity: i.amount || "" })) || [];
          this.steps = recipe.steps?.map((s) => ({ description: s.description })) || [];
          if (this.ingredients.length === 0)
            this.ingredients = [{ name: "", quantity: "" }];
          if (this.steps.length === 0)
            this.steps = [{ description: "" }];
          if (recipe.hero_image)
            this.imagePreview.set(recipe.hero_image);
        }
      });
    }
  }
  onImageChange(event) {
    const input = event.target;
    if (input.files?.length) {
      this.imageFile = input.files[0];
      this.imagePreview.set(URL.createObjectURL(this.imageFile));
    }
  }
  addIngredient() {
    this.ingredients.push({ name: "", quantity: "" });
  }
  removeIngredient(i) {
    this.ingredients.splice(i, 1);
  }
  addStep() {
    this.steps.push({ description: "" });
  }
  removeStep(i) {
    this.steps.splice(i, 1);
  }
  save() {
    if (!this.title.trim()) {
      this.error.set("\u0417\u0430\u0433\u043B\u0430\u0432\u0438\u0435\u0442\u043E \u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E.");
      return;
    }
    this.saving.set(true);
    this.error.set("");
    const formData = new FormData();
    formData.append("title", this.title);
    formData.append("description", this.description);
    if (this.categoryId)
      formData.append("category_id", String(this.categoryId));
    formData.append("difficulty", this.difficulty);
    formData.append("prep_minutes", String(this.prepTime));
    formData.append("cook_minutes", String(this.cookTime));
    formData.append("servings", String(this.servings));
    formData.append("published", this.published ? "1" : "0");
    if (this.imageFile)
      formData.append("hero_image", this.imageFile);
    const tags = this.tagsInput.split(",").map((t) => t.trim()).filter(Boolean);
    tags.forEach((t, i) => formData.append(`tags[${i}]`, t));
    const validIngredients = this.ingredients.filter((i) => i.name.trim());
    validIngredients.forEach((ing, i) => {
      formData.append(`ingredients[${i}][name]`, ing.name);
      formData.append(`ingredients[${i}][amount]`, ing.quantity);
    });
    const validSteps = this.steps.filter((s) => s.description.trim());
    validSteps.forEach((s, i) => {
      formData.append(`steps[${i}][title]`, `\u0421\u0442\u044A\u043F\u043A\u0430 ${i + 1}`);
      formData.append(`steps[${i}][description]`, s.description);
    });
    const req$ = this.isNew() ? this.dashboardService.createRecipe(formData) : this.dashboardService.updateRecipe(this.recipeSlug, formData);
    req$.subscribe({
      next: () => {
        this.saving.set(false);
        this.router.navigate(["/dashboard/recipes"]);
      },
      error: (err) => {
        this.saving.set(false);
        const errors = err.error?.errors;
        if (errors) {
          this.error.set(Object.values(errors).flat().join(" "));
        } else {
          this.error.set(err.error?.message || "\u0412\u044A\u0437\u043D\u0438\u043A\u043D\u0430 \u0433\u0440\u0435\u0448\u043A\u0430.");
        }
      }
    });
  }
  static \u0275fac = function DashboardRecipeEditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardRecipeEditComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardRecipeEditComponent, selectors: [["app-dashboard-recipe-edit"]], decls: 154, vars: 16, consts: [[1, "edit-page"], [1, "page-header"], [1, "breadcrumb"], ["routerLink", "/dashboard/recipes"], [1, "header-actions"], ["routerLink", "/dashboard/recipes", 1, "btn-cancel"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["type", "submit", "form", "recipe-form", 1, "btn-save", 3, "disabled"], [1, "error-box"], ["id", "recipe-form", 1, "form-grid", 3, "ngSubmit"], [1, "col-main"], [1, "card"], [1, "card-title"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "field"], [1, "req"], ["type", "text", "name", "title", "required", "", "placeholder", "\u041D\u0430\u043F\u0440. \u041C\u0443\u0441\u0430\u043A\u0430 \u043F\u043E \u0434\u043E\u043C\u0430\u0448\u043D\u043E\u043C\u0443", 3, "ngModelChange", "ngModel"], ["name", "description", "rows", "4", "placeholder", "\u041A\u0440\u0430\u0442\u043A\u043E \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u0442\u0430...", 3, "ngModelChange", "ngModel"], [1, "field-row"], ["name", "categoryId", 3, "ngModelChange", "ngModel"], [3, "value"], ["name", "difficulty", 3, "ngModelChange", "ngModel"], ["value", "\u041B\u0435\u0441\u043D\u043E"], ["value", "\u0421\u0440\u0435\u0434\u043D\u043E"], ["value", "\u0417\u0430 \u043D\u0430\u043F\u0440\u0435\u0434\u043D\u0430\u043B\u0438"], ["d", "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"], ["d", "M7 2v20"], ["d", "M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"], [1, "ingredient-row"], ["type", "button", 1, "btn-add", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["x1", "8", "y1", "6", "x2", "21", "y2", "6"], ["x1", "8", "y1", "12", "x2", "21", "y2", "12"], ["x1", "8", "y1", "18", "x2", "21", "y2", "18"], ["x1", "3", "y1", "6", "x2", "3.01", "y2", "6"], ["x1", "3", "y1", "12", "x2", "3.01", "y2", "12"], ["x1", "3", "y1", "18", "x2", "3.01", "y2", "18"], [1, "step-row"], [1, "col-side"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "label-icon"], ["type", "number", "name", "prepTime", "min", "0", 3, "ngModelChange", "ngModel"], ["d", "M18 8h1a4 4 0 0 1 0 8h-1"], ["d", "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"], ["x1", "6", "y1", "1", "x2", "6", "y2", "4"], ["x1", "10", "y1", "1", "x2", "10", "y2", "4"], ["x1", "14", "y1", "1", "x2", "14", "y2", "4"], ["type", "number", "name", "cookTime", "min", "0", 3, "ngModelChange", "ngModel"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["type", "number", "name", "servings", "min", "1", 3, "ngModelChange", "ngModel"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["cx", "8.5", "cy", "8.5", "r", "1.5"], ["points", "21 15 16 10 5 21"], [1, "file-drop"], ["type", "file", "accept", "image/*", 3, "change"], ["alt", "\u041F\u0440\u0435\u0433\u043B\u0435\u0434", 1, "img-preview", 3, "src"], [1, "file-placeholder"], ["d", "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"], ["x1", "7", "y1", "7", "x2", "7.01", "y2", "7"], ["type", "text", "name", "tags", "placeholder", "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0430, \u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u0430, \u041B\u044F\u0442\u043D\u0430...", 3, "ngModelChange", "ngModel"], [1, "field-hint"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"], [1, "toggle-row"], ["type", "checkbox", "name", "published", 3, "ngModelChange", "ngModel"], [1, "toggle-label"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "spin"], ["d", "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"], ["d", "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"], ["points", "17 21 17 13 7 13 7 21"], ["points", "7 3 7 8 15 8"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "row-index"], ["type", "text", "placeholder", "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E", 1, "qty-input", 3, "ngModelChange", "ngModel", "name"], ["type", "text", "placeholder", "\u0421\u044A\u0441\u0442\u0430\u0432\u043A\u0430", 1, "name-input", 3, "ngModelChange", "ngModel", "name"], ["type", "button", "title", "\u041F\u0440\u0435\u043C\u0430\u0445\u043D\u0438", 1, "btn-remove", 3, "click"], [1, "step-badge"], ["rows", "2", "placeholder", "\u041E\u043F\u0438\u0448\u0438 \u0442\u0430\u0437\u0438 \u0441\u0442\u044A\u043F\u043A\u0430...", 3, "ngModelChange", "ngModel", "name"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "17 8 12 3 7 8"], ["x1", "12", "y1", "3", "x2", "12", "y2", "15"]], template: function DashboardRecipeEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "p", 2)(4, "a", 3);
      \u0275\u0275text(5, "\u0420\u0435\u0446\u0435\u043F\u0442\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "h1");
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 4)(12, "a", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 6);
      \u0275\u0275element(14, "line", 7)(15, "line", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " \u041E\u0442\u043A\u0430\u0437 ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "button", 9);
      \u0275\u0275conditionalCreate(18, DashboardRecipeEditComponent_Conditional_18_Template, 3, 0)(19, DashboardRecipeEditComponent_Conditional_19_Template, 5, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(20, DashboardRecipeEditComponent_Conditional_20_Template, 6, 1, "div", 10);
      \u0275\u0275elementStart(21, "form", 11);
      \u0275\u0275listener("ngSubmit", function DashboardRecipeEditComponent_Template_form_ngSubmit_21_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(22, "div", 12)(23, "div", 13)(24, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(25, "svg", 15);
      \u0275\u0275element(26, "path", 16)(27, "path", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, " \u041E\u0441\u043D\u043E\u0432\u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(29, "div", 18)(30, "label");
      \u0275\u0275text(31, "\u0417\u0430\u0433\u043B\u0430\u0432\u0438\u0435 ");
      \u0275\u0275elementStart(32, "span", 19);
      \u0275\u0275text(33, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function DashboardRecipeEditComponent_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.title, $event) || (ctx.title = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 18)(36, "label");
      \u0275\u0275text(37, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "textarea", 21);
      \u0275\u0275twoWayListener("ngModelChange", function DashboardRecipeEditComponent_Template_textarea_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.description, $event) || (ctx.description = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 22)(40, "div", 18)(41, "label");
      \u0275\u0275text(42, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "select", 23);
      \u0275\u0275twoWayListener("ngModelChange", function DashboardRecipeEditComponent_Template_select_ngModelChange_43_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.categoryId, $event) || (ctx.categoryId = $event);
        return $event;
      });
      \u0275\u0275elementStart(44, "option", 24);
      \u0275\u0275text(45, "\u2014 \u0418\u0437\u0431\u0435\u0440\u0438 \u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(46, DashboardRecipeEditComponent_For_47_Template, 2, 2, "option", 24, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 18)(49, "label");
      \u0275\u0275text(50, "\u0422\u0440\u0443\u0434\u043D\u043E\u0441\u0442");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "select", 25);
      \u0275\u0275twoWayListener("ngModelChange", function DashboardRecipeEditComponent_Template_select_ngModelChange_51_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.difficulty, $event) || (ctx.difficulty = $event);
        return $event;
      });
      \u0275\u0275elementStart(52, "option", 26);
      \u0275\u0275text(53, "\u041B\u0435\u0441\u043D\u043E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "option", 27);
      \u0275\u0275text(55, "\u0421\u0440\u0435\u0434\u043D\u043E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "option", 28);
      \u0275\u0275text(57, "\u0417\u0430 \u043D\u0430\u043F\u0440\u0435\u0434\u043D\u0430\u043B\u0438");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(58, "div", 13)(59, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(60, "svg", 15);
      \u0275\u0275element(61, "path", 29)(62, "path", 30)(63, "path", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275text(64, " \u0421\u044A\u0441\u0442\u0430\u0432\u043A\u0438 ");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(65, DashboardRecipeEditComponent_For_66_Template, 9, 5, "div", 32, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(67, "button", 33);
      \u0275\u0275listener("click", function DashboardRecipeEditComponent_Template_button_click_67_listener() {
        return ctx.addIngredient();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(68, "svg", 34);
      \u0275\u0275element(69, "line", 35)(70, "line", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275text(71, " \u0414\u043E\u0431\u0430\u0432\u0438 \u0441\u044A\u0441\u0442\u0430\u0432\u043A\u0430 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(72, "div", 13)(73, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(74, "svg", 15);
      \u0275\u0275element(75, "line", 37)(76, "line", 38)(77, "line", 39)(78, "line", 40)(79, "line", 41)(80, "line", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275text(81, " \u0421\u0442\u044A\u043F\u043A\u0438 \u0437\u0430 \u043F\u0440\u0438\u0433\u043E\u0442\u0432\u044F\u043D\u0435 ");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(82, DashboardRecipeEditComponent_For_83_Template, 8, 3, "div", 43, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(84, "button", 33);
      \u0275\u0275listener("click", function DashboardRecipeEditComponent_Template_button_click_84_listener() {
        return ctx.addStep();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(85, "svg", 34);
      \u0275\u0275element(86, "line", 35)(87, "line", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275text(88, " \u0414\u043E\u0431\u0430\u0432\u0438 \u0441\u0442\u044A\u043F\u043A\u0430 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(89, "div", 44)(90, "div", 13)(91, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(92, "svg", 15);
      \u0275\u0275element(93, "circle", 45)(94, "polyline", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275text(95, " \u0412\u0440\u0435\u043C\u0435\u043D\u0430 & \u043F\u043E\u0440\u0446\u0438\u0438 ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(96, "div", 18)(97, "label");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(98, "svg", 47);
      \u0275\u0275element(99, "circle", 45)(100, "polyline", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275text(101, " \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 (\u043C\u0438\u043D) ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(102, "input", 48);
      \u0275\u0275twoWayListener("ngModelChange", function DashboardRecipeEditComponent_Template_input_ngModelChange_102_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.prepTime, $event) || (ctx.prepTime = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "div", 18)(104, "label");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(105, "svg", 47);
      \u0275\u0275element(106, "path", 49)(107, "path", 50)(108, "line", 51)(109, "line", 52)(110, "line", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275text(111, " \u0413\u043E\u0442\u0432\u0435\u043D\u0435 (\u043C\u0438\u043D) ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(112, "input", 54);
      \u0275\u0275twoWayListener("ngModelChange", function DashboardRecipeEditComponent_Template_input_ngModelChange_112_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.cookTime, $event) || (ctx.cookTime = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "div", 18)(114, "label");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(115, "svg", 47);
      \u0275\u0275element(116, "path", 55)(117, "circle", 56)(118, "path", 57)(119, "path", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275text(120, " \u041F\u043E\u0440\u0446\u0438\u0438 ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(121, "input", 59);
      \u0275\u0275twoWayListener("ngModelChange", function DashboardRecipeEditComponent_Template_input_ngModelChange_121_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.servings, $event) || (ctx.servings = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(122, "div", 13)(123, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(124, "svg", 15);
      \u0275\u0275element(125, "rect", 60)(126, "circle", 61)(127, "polyline", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275text(128, " \u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(129, "label", 63)(130, "input", 64);
      \u0275\u0275listener("change", function DashboardRecipeEditComponent_Template_input_change_130_listener($event) {
        return ctx.onImageChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(131, DashboardRecipeEditComponent_Conditional_131_Template, 1, 1, "img", 65)(132, DashboardRecipeEditComponent_Conditional_132_Template, 9, 0, "div", 66);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "div", 13)(134, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(135, "svg", 15);
      \u0275\u0275element(136, "path", 67)(137, "line", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275text(138, " \u0422\u0430\u0433\u043E\u0432\u0435 ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(139, "div", 18)(140, "input", 69);
      \u0275\u0275twoWayListener("ngModelChange", function DashboardRecipeEditComponent_Template_input_ngModelChange_140_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.tagsInput, $event) || (ctx.tagsInput = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "p", 70);
      \u0275\u0275text(142, "\u0420\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438 \u0441\u044A\u0441 \u0437\u0430\u043F\u0435\u0442\u0430\u044F");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(143, "div", 13)(144, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(145, "svg", 15);
      \u0275\u0275element(146, "path", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275text(147, " \u041F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D\u0435 ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(148, "label", 72)(149, "input", 73);
      \u0275\u0275twoWayListener("ngModelChange", function DashboardRecipeEditComponent_Template_input_ngModelChange_149_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.published, $event) || (ctx.published = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "span", 74);
      \u0275\u0275text(151, "\u041F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "p", 70);
      \u0275\u0275text(153, "\u0421\u0430\u043C\u043E \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438 \u0441\u0435 \u0432\u0438\u0436\u0434\u0430\u0442 \u043E\u0442 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438\u0442\u0435.");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.isNew() ? "\u041D\u043E\u0432\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430" : "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0430\u043D\u0435", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isNew() ? "\u041D\u043E\u0432\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430" : "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430");
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving() ? 18 : 19);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.error() ? 20 : -1);
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.title);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.description);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.categoryId);
      \u0275\u0275advance();
      \u0275\u0275property("value", 0);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.categories());
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.difficulty);
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.ingredients);
      \u0275\u0275advance(17);
      \u0275\u0275repeater(ctx.steps);
      \u0275\u0275advance(20);
      \u0275\u0275twoWayProperty("ngModel", ctx.prepTime);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.cookTime);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.servings);
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.imagePreview() ? 131 : 132);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.tagsInput);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.published);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm, RouterLink], styles: ['\n.edit-page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem 4rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.75rem;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #57534e;\n  margin: 0 0 0.35rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4a7c59;\n  text-decoration: none;\n  font-weight: 500;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\nh1[_ngcontent-%COMP%] {\n  font-family:\n    "Playfair Display",\n    Georgia,\n    serif;\n  font-size: 1.9rem;\n  color: #1c1917;\n  margin: 0;\n  letter-spacing: -0.02em;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  flex-shrink: 0;\n}\n.error-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0.85rem 1rem;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 0.875rem;\n  color: #dc2626;\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-bottom: 1.5rem;\n}\n.error-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.1rem;\n  height: 1.1rem;\n  flex-shrink: 0;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: 1.5rem;\n  align-items: start;\n}\n.col-main[_ngcontent-%COMP%], \n.col-side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 1.25rem;\n  border: 1px solid rgba(0, 0, 0, 0.07);\n  padding: 1.5rem;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);\n}\n.card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #4a7c59;\n  margin-bottom: 1.25rem;\n}\n.card-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.field[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.field[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.field-row[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  flex: 1;\n}\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #44403c;\n  margin-bottom: 0.4rem;\n}\n.label-icon[_ngcontent-%COMP%] {\n  width: 0.85rem;\n  height: 0.85rem;\n  color: #57534e;\n}\n.req[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.65rem 0.9rem;\n  border: 1.5px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0.75rem;\n  font-size: 0.9rem;\n  font-family: inherit;\n  box-sizing: border-box;\n  background: #fafaf9;\n  color: #1c1917;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\ninput[_ngcontent-%COMP%]:focus, \nselect[_ngcontent-%COMP%]:focus, \ntextarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4a7c59;\n  box-shadow: 0 0 0 3px rgba(74, 124, 89, 0.12);\n  background: #fff;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #57534e;\n  margin: 0.3rem 0 0;\n}\n.ingredient-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.6rem;\n}\n.row-index[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #57534e;\n  min-width: 1.2rem;\n  text-align: right;\n}\n.qty-input[_ngcontent-%COMP%] {\n  flex: 0 0 110px;\n}\n.name-input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.step-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n  margin-bottom: 0.75rem;\n}\n.step-badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 50%;\n  background: #4a7c59;\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.65rem;\n}\n.step-row[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.btn-add[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.5rem 1rem;\n  border: 1.5px dashed rgba(74, 124, 89, 0.4);\n  border-radius: 0.75rem;\n  background: rgba(74, 124, 89, 0.05);\n  color: #4a7c59;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  width: 100%;\n  justify-content: center;\n  margin-top: 0.25rem;\n  transition: background 0.2s, border-color 0.2s;\n  touch-action: manipulation;\n  min-height: 2.5rem;\n}\n.btn-add[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  background: rgba(74, 124, 89, 0.1);\n  border-color: #4a7c59;\n}\n.btn-remove[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 2rem;\n  height: 2rem;\n  border: none;\n  background: #fef2f2;\n  color: #dc2626;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n  touch-action: manipulation;\n}\n.btn-remove[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.btn-remove[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.file-drop[_ngcontent-%COMP%] {\n  display: block;\n  cursor: pointer;\n  border: 2px dashed rgba(0, 0, 0, 0.12);\n  border-radius: 1rem;\n  overflow: hidden;\n  transition: border-color 0.2s;\n}\n.file-drop[_ngcontent-%COMP%]:hover {\n  border-color: #4a7c59;\n}\n.file-drop[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.file-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 2rem;\n  color: #57534e;\n}\n.file-placeholder[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n.file-placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #57534e;\n}\n.file-placeholder[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.img-preview[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 16/9;\n  object-fit: cover;\n  display: block;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.65rem 1.25rem;\n  border-radius: 0.75rem;\n  text-decoration: none;\n  color: #44403c;\n  background: #f0ede8;\n  border: 1.5px solid rgba(0, 0, 0, 0.1);\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: background 0.18s, border-color 0.18s;\n  touch-action: manipulation;\n}\n.btn-cancel[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #e4dfd8;\n  border-color: rgba(0, 0, 0, 0.16);\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.65rem 1.5rem;\n  background: #4a7c59;\n  color: #fff;\n  border: none;\n  border-radius: 0.75rem;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: background 0.2s, box-shadow 0.2s;\n  box-shadow: 0 2px 8px rgba(74, 124, 89, 0.25);\n  touch-action: manipulation;\n}\n.btn-save[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #3a6347;\n  box-shadow: 0 4px 14px rgba(74, 124, 89, 0.35);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  cursor: pointer;\n  margin-bottom: 0.4rem;\n}\n.toggle-row[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 1.1rem;\n  height: 1.1rem;\n  flex-shrink: 0;\n  accent-color: #4a7c59;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1c1917;\n}\n@media (max-width: 900px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .col-side[_ngcontent-%COMP%] {\n    order: -1;\n  }\n}\n@media (max-width: 640px) {\n  .edit-page[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem 3rem;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n  .field-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0;\n  }\n}\n/*# sourceMappingURL=dashboard-recipe-edit.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardRecipeEditComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-recipe-edit", standalone: true, imports: [FormsModule, RouterLink], template: `
    <div class="edit-page">

      <!-- Page header -->
      <div class="page-header">
        <div>
          <p class="breadcrumb">
            <a routerLink="/dashboard/recipes">\u0420\u0435\u0446\u0435\u043F\u0442\u0438</a>
            <span>\u203A</span>
            {{ isNew() ? '\u041D\u043E\u0432\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430' : '\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0430\u043D\u0435' }}
          </p>
          <h1>{{ isNew() ? '\u041D\u043E\u0432\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430' : '\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430' }}</h1>
        </div>
        <div class="header-actions">
          <a routerLink="/dashboard/recipes" class="btn-cancel">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            \u041E\u0442\u043A\u0430\u0437
          </a>
          <button type="submit" form="recipe-form" class="btn-save" [disabled]="saving()">
            @if (saving()) {
              <svg class="spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
              \u0417\u0430\u043F\u0430\u0437\u0432\u0430\u043D\u0435...
            } @else {
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
              \u0417\u0430\u043F\u0430\u0437\u0438
            }
          </button>
        </div>
      </div>

      @if (error()) {
        <div class="error-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          {{ error() }}
        </div>
      }

      <form id="recipe-form" (ngSubmit)="save()" class="form-grid">

        <!-- LEFT COLUMN -->
        <div class="col-main">

          <!-- Basic info card -->
          <div class="card">
            <div class="card-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              \u041E\u0441\u043D\u043E\u0432\u043D\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F
            </div>
            <div class="field">
              <label>\u0417\u0430\u0433\u043B\u0430\u0432\u0438\u0435 <span class="req">*</span></label>
              <input type="text" [(ngModel)]="title" name="title" required placeholder="\u041D\u0430\u043F\u0440. \u041C\u0443\u0441\u0430\u043A\u0430 \u043F\u043E \u0434\u043E\u043C\u0430\u0448\u043D\u043E\u043C\u0443" />
            </div>
            <div class="field">
              <label>\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</label>
              <textarea [(ngModel)]="description" name="description" rows="4" placeholder="\u041A\u0440\u0430\u0442\u043A\u043E \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u0442\u0430..."></textarea>
            </div>
            <div class="field-row">
              <div class="field">
                <label>\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F</label>
                <select [(ngModel)]="categoryId" name="categoryId">
                  <option [value]="0">\u2014 \u0418\u0437\u0431\u0435\u0440\u0438 \u2014</option>
                  @for (cat of categories(); track cat.id) {
                    <option [value]="cat.id">{{ cat.name }}</option>
                  }
                </select>
              </div>
              <div class="field">
                <label>\u0422\u0440\u0443\u0434\u043D\u043E\u0441\u0442</label>
                <select [(ngModel)]="difficulty" name="difficulty">
                  <option value="\u041B\u0435\u0441\u043D\u043E">\u041B\u0435\u0441\u043D\u043E</option>
                  <option value="\u0421\u0440\u0435\u0434\u043D\u043E">\u0421\u0440\u0435\u0434\u043D\u043E</option>
                  <option value="\u0417\u0430 \u043D\u0430\u043F\u0440\u0435\u0434\u043D\u0430\u043B\u0438">\u0417\u0430 \u043D\u0430\u043F\u0440\u0435\u0434\u043D\u0430\u043B\u0438</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Ingredients card -->
          <div class="card">
            <div class="card-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>
              \u0421\u044A\u0441\u0442\u0430\u0432\u043A\u0438
            </div>
            @for (ing of ingredients; track $index) {
              <div class="ingredient-row">
                <span class="row-index">{{ $index + 1 }}</span>
                <input type="text" [(ngModel)]="ing.quantity" [name]="'ing-qty-' + $index"
                       placeholder="\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E" class="qty-input" />
                <input type="text" [(ngModel)]="ing.name" [name]="'ing-name-' + $index"
                       placeholder="\u0421\u044A\u0441\u0442\u0430\u0432\u043A\u0430" class="name-input" />
                <button type="button" class="btn-remove" (click)="removeIngredient($index)" title="\u041F\u0440\u0435\u043C\u0430\u0445\u043D\u0438">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
            }
            <button type="button" class="btn-add" (click)="addIngredient()">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              \u0414\u043E\u0431\u0430\u0432\u0438 \u0441\u044A\u0441\u0442\u0430\u0432\u043A\u0430
            </button>
          </div>

          <!-- Steps card -->
          <div class="card">
            <div class="card-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
              \u0421\u0442\u044A\u043F\u043A\u0438 \u0437\u0430 \u043F\u0440\u0438\u0433\u043E\u0442\u0432\u044F\u043D\u0435
            </div>
            @for (step of steps; track $index) {
              <div class="step-row">
                <div class="step-badge">{{ $index + 1 }}</div>
                <textarea [(ngModel)]="step.description" [name]="'step-' + $index"
                          rows="2" placeholder="\u041E\u043F\u0438\u0448\u0438 \u0442\u0430\u0437\u0438 \u0441\u0442\u044A\u043F\u043A\u0430..."></textarea>
                <button type="button" class="btn-remove" (click)="removeStep($index)" title="\u041F\u0440\u0435\u043C\u0430\u0445\u043D\u0438">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
            }
            <button type="button" class="btn-add" (click)="addStep()">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              \u0414\u043E\u0431\u0430\u0432\u0438 \u0441\u0442\u044A\u043F\u043A\u0430
            </button>
          </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="col-side">

          <!-- Times & servings -->
          <div class="card">
            <div class="card-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              \u0412\u0440\u0435\u043C\u0435\u043D\u0430 & \u043F\u043E\u0440\u0446\u0438\u0438
            </div>
            <div class="field">
              <label>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="label-icon"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 (\u043C\u0438\u043D)
              </label>
              <input type="number" [(ngModel)]="prepTime" name="prepTime" min="0" />
            </div>
            <div class="field">
              <label>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="label-icon"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
                \u0413\u043E\u0442\u0432\u0435\u043D\u0435 (\u043C\u0438\u043D)
              </label>
              <input type="number" [(ngModel)]="cookTime" name="cookTime" min="0" />
            </div>
            <div class="field">
              <label>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="label-icon"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                \u041F\u043E\u0440\u0446\u0438\u0438
              </label>
              <input type="number" [(ngModel)]="servings" name="servings" min="1" />
            </div>
          </div>

          <!-- Image upload -->
          <div class="card">
            <div class="card-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              \u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435
            </div>
            <label class="file-drop">
              <input type="file" accept="image/*" (change)="onImageChange($event)" />
              @if (imagePreview()) {
                <img [src]="imagePreview()" alt="\u041F\u0440\u0435\u0433\u043B\u0435\u0434" class="img-preview" />
              } @else {
                <div class="file-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                  <span>\u041A\u043B\u0438\u043A\u043D\u0438 \u0437\u0430 \u043A\u0430\u0447\u0432\u0430\u043D\u0435</span>
                  <small>PNG, JPG, WEBP</small>
                </div>
              }
            </label>
          </div>

          <!-- Tags -->
          <div class="card">
            <div class="card-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
              \u0422\u0430\u0433\u043E\u0432\u0435
            </div>
            <div class="field">
              <input type="text" [(ngModel)]="tagsInput" name="tags"
                     placeholder="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0430, \u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u0430, \u041B\u044F\u0442\u043D\u0430..." />
              <p class="field-hint">\u0420\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438 \u0441\u044A\u0441 \u0437\u0430\u043F\u0435\u0442\u0430\u044F</p>
            </div>
          </div>

          <!-- Publish -->
          <div class="card">
            <div class="card-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              \u041F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D\u0435
            </div>
            <label class="toggle-row">
              <input type="checkbox" [(ngModel)]="published" name="published" />
              <span class="toggle-label">\u041F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430</span>
            </label>
            <p class="field-hint">\u0421\u0430\u043C\u043E \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438 \u0441\u0435 \u0432\u0438\u0436\u0434\u0430\u0442 \u043E\u0442 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438\u0442\u0435.</p>
          </div>

        </div>
      </form>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* angular:styles/component:scss;47b4a44527a15e50deb7f330d7e2f153bf44cfaac23c077084db866b1f81e648;C:/Users/ipene/Desktop/Blog-System-Angular/frontend/src/app/pages/dashboard-recipe-edit/dashboard-recipe-edit.component.ts */\n.edit-page {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem 4rem;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.75rem;\n}\n.breadcrumb {\n  font-size: 0.8rem;\n  color: #57534e;\n  margin: 0 0 0.35rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.breadcrumb a {\n  color: #4a7c59;\n  text-decoration: none;\n  font-weight: 500;\n}\n.breadcrumb a:hover {\n  text-decoration: underline;\n}\nh1 {\n  font-family:\n    "Playfair Display",\n    Georgia,\n    serif;\n  font-size: 1.9rem;\n  color: #1c1917;\n  margin: 0;\n  letter-spacing: -0.02em;\n}\n.header-actions {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  flex-shrink: 0;\n}\n.error-box {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0.85rem 1rem;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 0.875rem;\n  color: #dc2626;\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-bottom: 1.5rem;\n}\n.error-box svg {\n  width: 1.1rem;\n  height: 1.1rem;\n  flex-shrink: 0;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: 1.5rem;\n  align-items: start;\n}\n.col-main,\n.col-side {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.card {\n  background: #ffffff;\n  border-radius: 1.25rem;\n  border: 1px solid rgba(0, 0, 0, 0.07);\n  padding: 1.5rem;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);\n}\n.card-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #4a7c59;\n  margin-bottom: 1.25rem;\n}\n.card-title svg {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.field {\n  margin-bottom: 1rem;\n}\n.field:last-child {\n  margin-bottom: 0;\n}\n.field-row {\n  display: flex;\n  gap: 1rem;\n}\n.field-row .field {\n  flex: 1;\n}\nlabel {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #44403c;\n  margin-bottom: 0.4rem;\n}\n.label-icon {\n  width: 0.85rem;\n  height: 0.85rem;\n  color: #57534e;\n}\n.req {\n  color: #dc2626;\n}\ninput,\nselect,\ntextarea {\n  width: 100%;\n  padding: 0.65rem 0.9rem;\n  border: 1.5px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0.75rem;\n  font-size: 0.9rem;\n  font-family: inherit;\n  box-sizing: border-box;\n  background: #fafaf9;\n  color: #1c1917;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\ninput:focus,\nselect:focus,\ntextarea:focus {\n  outline: none;\n  border-color: #4a7c59;\n  box-shadow: 0 0 0 3px rgba(74, 124, 89, 0.12);\n  background: #fff;\n}\ntextarea {\n  resize: vertical;\n}\n.field-hint {\n  font-size: 0.75rem;\n  color: #57534e;\n  margin: 0.3rem 0 0;\n}\n.ingredient-row {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.6rem;\n}\n.row-index {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #57534e;\n  min-width: 1.2rem;\n  text-align: right;\n}\n.qty-input {\n  flex: 0 0 110px;\n}\n.name-input {\n  flex: 1;\n}\n.step-row {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n  margin-bottom: 0.75rem;\n}\n.step-badge {\n  flex-shrink: 0;\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 50%;\n  background: #4a7c59;\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.65rem;\n}\n.step-row textarea {\n  flex: 1;\n}\n.btn-add {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.5rem 1rem;\n  border: 1.5px dashed rgba(74, 124, 89, 0.4);\n  border-radius: 0.75rem;\n  background: rgba(74, 124, 89, 0.05);\n  color: #4a7c59;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  width: 100%;\n  justify-content: center;\n  margin-top: 0.25rem;\n  transition: background 0.2s, border-color 0.2s;\n  touch-action: manipulation;\n  min-height: 2.5rem;\n}\n.btn-add svg {\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.btn-add:hover {\n  background: rgba(74, 124, 89, 0.1);\n  border-color: #4a7c59;\n}\n.btn-remove {\n  flex-shrink: 0;\n  width: 2rem;\n  height: 2rem;\n  border: none;\n  background: #fef2f2;\n  color: #dc2626;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n  touch-action: manipulation;\n}\n.btn-remove svg {\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.btn-remove:hover {\n  background: #fee2e2;\n}\n.file-drop {\n  display: block;\n  cursor: pointer;\n  border: 2px dashed rgba(0, 0, 0, 0.12);\n  border-radius: 1rem;\n  overflow: hidden;\n  transition: border-color 0.2s;\n}\n.file-drop:hover {\n  border-color: #4a7c59;\n}\n.file-drop input {\n  display: none;\n}\n.file-placeholder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 2rem;\n  color: #57534e;\n}\n.file-placeholder svg {\n  width: 2rem;\n  height: 2rem;\n}\n.file-placeholder span {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #57534e;\n}\n.file-placeholder small {\n  font-size: 0.75rem;\n}\n.img-preview {\n  width: 100%;\n  aspect-ratio: 16/9;\n  object-fit: cover;\n  display: block;\n}\n.btn-cancel {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.65rem 1.25rem;\n  border-radius: 0.75rem;\n  text-decoration: none;\n  color: #44403c;\n  background: #f0ede8;\n  border: 1.5px solid rgba(0, 0, 0, 0.1);\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: background 0.18s, border-color 0.18s;\n  touch-action: manipulation;\n}\n.btn-cancel svg {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n.btn-cancel:hover {\n  background: #e4dfd8;\n  border-color: rgba(0, 0, 0, 0.16);\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.65rem 1.5rem;\n  background: #4a7c59;\n  color: #fff;\n  border: none;\n  border-radius: 0.75rem;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: background 0.2s, box-shadow 0.2s;\n  box-shadow: 0 2px 8px rgba(74, 124, 89, 0.25);\n  touch-action: manipulation;\n}\n.btn-save svg {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n.btn-save:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.btn-save:hover:not(:disabled) {\n  background: #3a6347;\n  box-shadow: 0 4px 14px rgba(74, 124, 89, 0.35);\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n.toggle-row {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  cursor: pointer;\n  margin-bottom: 0.4rem;\n}\n.toggle-row input[type=checkbox] {\n  width: 1.1rem;\n  height: 1.1rem;\n  flex-shrink: 0;\n  accent-color: #4a7c59;\n}\n.toggle-label {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1c1917;\n}\n@media (max-width: 900px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .col-side {\n    order: -1;\n  }\n}\n@media (max-width: 640px) {\n  .edit-page {\n    padding: 1.5rem 1rem 3rem;\n  }\n  .page-header {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .header-actions {\n    justify-content: flex-end;\n  }\n  .field-row {\n    flex-direction: column;\n    gap: 0;\n  }\n}\n/*# sourceMappingURL=dashboard-recipe-edit.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardRecipeEditComponent, { className: "DashboardRecipeEditComponent", filePath: "src/app/pages/dashboard-recipe-edit/dashboard-recipe-edit.component.ts", lineNumber: 516 });
})();
export {
  DashboardRecipeEditComponent
};
//# sourceMappingURL=chunk-LN6RL7DQ.js.map
