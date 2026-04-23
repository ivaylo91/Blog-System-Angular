import {
  PerfService
} from "./chunk-KIVHOOUT.js";
import {
  RecipeCardComponent
} from "./chunk-GNUGBRS5.js";
import {
  toSignal
} from "./chunk-OOSWPAHX.js";
import {
  SeoService
} from "./chunk-QW5YG2I6.js";
import {
  RecipeService
} from "./chunk-EYV2RDQL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-CZI4FLAU.js";
import "./chunk-GL5TQRYS.js";
import {
  ChangeDetectionStrategy,
  Component,
  Router,
  RouterLink,
  catchError,
  computed,
  inject,
  of,
  setClassMetadata,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LVOWXKII.js";

// src/app/pages/home/home.component.ts
var _c0 = (a0) => ["/recipes", a0];
var _c1 = () => [0, 1, 2];
var _forTrack0 = ($index, $item) => $item.id;
function HomeComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275elementStart(2, "div", 30)(3, "span", 31);
    \u0275\u0275text(4, "\u0418\u0437\u0431\u0440\u0430\u043D\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 33);
    \u0275\u0275text(8, "\u0412\u0438\u0436 \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u0442\u0430 \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, ctx_r0.featured()[0].slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.featured()[0].hero_image, \u0275\u0275sanitizeUrl)("alt", ctx_r0.featured()[0].title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.featured()[0].title);
  }
}
function HomeComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 17);
  }
}
function HomeComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 34);
    \u0275\u0275element(2, "ellipse", 35)(3, "path", 36)(4, "path", 37)(5, "line", 38)(6, "line", 39)(7, "line", 40);
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_50_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "div", 52);
    \u0275\u0275elementStart(2, "div", 53);
    \u0275\u0275element(3, "div", 46)(4, "div", 47);
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_50_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "div", 54);
    \u0275\u0275elementStart(2, "div", 45);
    \u0275\u0275element(3, "div", 46)(4, "div", 47)(5, "div", 48);
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "div", 43);
    \u0275\u0275element(3, "div", 44);
    \u0275\u0275elementStart(4, "div", 45);
    \u0275\u0275element(5, "div", 46)(6, "div", 47)(7, "div", 48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 49);
    \u0275\u0275repeaterCreate(9, HomeComponent_Conditional_50_For_10_Template, 5, 0, "div", 50, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 51);
    \u0275\u0275repeaterCreate(12, HomeComponent_Conditional_50_For_13_Template, 6, 0, "div", 43, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c1));
  }
}
function HomeComponent_Conditional_51_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "app-recipe-card", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("recipe", ctx_r0.featured()[0])("priority", true)("index", 0)("featured", true);
  }
}
function HomeComponent_Conditional_51_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-recipe-card", 55);
  }
  if (rf & 2) {
    const recipe_r2 = ctx.$implicit;
    const \u0275$index_173_r3 = ctx.$index;
    \u0275\u0275property("recipe", recipe_r2)("index", \u0275$index_173_r3 + 1)("compact", true);
  }
}
function HomeComponent_Conditional_51_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-recipe-card", 57);
  }
  if (rf & 2) {
    const recipe_r4 = ctx.$implicit;
    const \u0275$index_179_r5 = ctx.$index;
    \u0275\u0275property("recipe", recipe_r4)("index", \u0275$index_179_r5 + 4);
  }
}
function HomeComponent_Conditional_51_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_51_Conditional_5_For_2_Template, 1, 2, "app-recipe-card", 57, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.featured().slice(4));
  }
}
function HomeComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275conditionalCreate(1, HomeComponent_Conditional_51_Conditional_1_Template, 2, 4, "div", 42);
    \u0275\u0275elementStart(2, "div", 49);
    \u0275\u0275repeaterCreate(3, HomeComponent_Conditional_51_For_4_Template, 1, 3, "app-recipe-card", 55, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, HomeComponent_Conditional_51_Conditional_5_Template, 3, 0, "div", 51);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.featured().length > 0 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.featured().slice(1, 4));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.featured().length > 4 ? 5 : -1);
  }
}
var HomeComponent = class _HomeComponent {
  recipeService = inject(RecipeService);
  router = inject(Router);
  seo = inject(SeoService);
  perf = inject(PerfService);
  searchQuery = "";
  skeletons = [0, 1, 2, 3, 4, 5, 6];
  featuredResult = toSignal(this.recipeService.getFeaturedRecipes().pipe(tap(() => {
    this.perf.mark("home_featured_ready");
    this.perf.measure("home_featured_load", "home_start", "home_featured_ready");
  }), catchError(() => of([]))));
  featured = computed(() => this.featuredResult() ?? [], ...ngDevMode ? [{ debugName: "featured" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = computed(() => this.featuredResult() === void 0, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.perf.mark("home_start");
    this.seo.set({
      title: "\u041D\u0430\u0447\u0430\u043B\u043E",
      description: "\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u0438 \u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438, \u0441\u043F\u043E\u0434\u0435\u043B\u0435\u043D\u0438 \u0441 \u043B\u044E\u0431\u043E\u0432. \u041E\u0442\u043A\u0440\u0438\u0439 \u043B\u0435\u0441\u043D\u0438 \u0438 \u0432\u043A\u0443\u0441\u043D\u0438 \u044F\u0441\u0442\u0438\u044F \u0437\u0430 \u0432\u0441\u0435\u043A\u0438 \u043F\u043E\u0432\u043E\u0434 \u0432 \u043A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F \u0431\u043B\u043E\u0433 \u043D\u0430 \u0418\u0432\u043E."
    });
  }
  onSearch(e) {
    e.preventDefault();
    if (this.searchQuery.trim()) {
      this.router.navigate(["/recipes"], { queryParams: { q: this.searchQuery.trim() } });
    }
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 59, vars: 3, consts: [[1, "hero"], [1, "hero-inner"], [1, "hero-content"], [1, "hero-eyebrow"], [1, "hero-subtitle"], [1, "search-form", 3, "submit"], ["type", "text", "name", "q", "placeholder", "\u0422\u044A\u0440\u0441\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0430...", "aria-label", "\u0422\u044A\u0440\u0441\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0430", 1, "search-input", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "search-btn"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], [1, "hero-stats"], [1, "stat"], [1, "stat-divider"], [1, "hero-visual"], [1, "hero-frame"], [1, "hero-image-wrap", 3, "routerLink"], [1, "hero-skeleton"], [1, "hero-placeholder"], [1, "featured"], [1, "section-inner"], [1, "section-heading"], [1, "section-title"], ["routerLink", "/recipes", 1, "section-link"], [1, "cta"], ["routerLink", "/recipes", 1, "cta-btn"], ["aria-hidden", "true", 1, "cta-icon"], ["d", "M5 12h14"], ["d", "m12 5 7 7-7 7"], ["fetchpriority", "high", "loading", "eager", 1, "hero-img", 3, "src", "alt"], [1, "hero-img-badge"], [1, "badge-label"], [1, "badge-title"], [1, "badge-arrow"], ["viewBox", "0 0 64 64", "fill", "none", "stroke", "#c4b49a", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["cx", "32", "cy", "34", "rx", "20", "ry", "12"], ["d", "M12 34c0-6.6 9-12 20-12s20 5.4 20 12"], ["d", "M22 22v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"], ["x1", "32", "y1", "14", "x2", "32", "y2", "10"], ["x1", "24", "y1", "15", "x2", "22", "y2", "11"], ["x1", "40", "y1", "15", "x2", "42", "y2", "11"], [1, "mag-layout"], [1, "mag-hero"], [1, "skeleton-card"], [1, "sk-img", "sk-img-hero"], [1, "sk-body"], [1, "sk-line", "sk-short"], [1, "sk-line", "sk-long"], [1, "sk-line", "sk-medium"], [1, "mag-side"], [1, "skeleton-card", "skeleton-side"], [1, "mag-bottom-grid"], [1, "sk-img", "sk-img-side"], [1, "sk-body", "sk-body-sm"], [1, "sk-img"], [3, "recipe", "index", "compact"], [3, "recipe", "priority", "index", "featured"], [3, "recipe", "index"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "\u0414\u043E\u0431\u0440\u0435 \u0434\u043E\u0448\u043B\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "\u041A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F\u0442");
      \u0275\u0275element(7, "br");
      \u0275\u0275elementStart(8, "em");
      \u0275\u0275text(9, "\u0431\u043B\u043E\u0433 \u043D\u0430 \u0418\u0432\u043E");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "p", 4);
      \u0275\u0275text(11, "\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u0438 \u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438, \u0441\u043F\u043E\u0434\u0435\u043B\u0435\u043D\u0438 \u0441 \u043B\u044E\u0431\u043E\u0432 \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043A\u044A\u043C \u0432\u0441\u0435\u043A\u0438 \u0434\u0435\u0442\u0430\u0439\u043B.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "form", 5);
      \u0275\u0275listener("submit", function HomeComponent_Template_form_submit_12_listener($event) {
        return ctx.onSearch($event);
      });
      \u0275\u0275elementStart(13, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 8);
      \u0275\u0275element(16, "circle", 9)(17, "line", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19, "\u0422\u044A\u0440\u0441\u0438");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 11)(21, "div", 12)(22, "strong");
      \u0275\u0275text(23, "100+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25, "\u0420\u0435\u0446\u0435\u043F\u0442\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(26, "div", 13);
      \u0275\u0275elementStart(27, "div", 12)(28, "strong");
      \u0275\u0275text(29, "5\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span");
      \u0275\u0275text(31, "\u041E\u0446\u0435\u043D\u0435\u043D\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(32, "div", 13);
      \u0275\u0275elementStart(33, "div", 12)(34, "strong");
      \u0275\u0275text(35, "\u0411\u0435\u0437\u043F\u043B\u0430\u0442\u043D\u043E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span");
      \u0275\u0275text(37, "\u0417\u0430\u0432\u0438\u043D\u0430\u0433\u0438");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(38, "div", 14)(39, "div", 15);
      \u0275\u0275conditionalCreate(40, HomeComponent_Conditional_40_Template, 9, 6, "a", 16)(41, HomeComponent_Conditional_41_Template, 1, 0, "div", 17)(42, HomeComponent_Conditional_42_Template, 8, 0, "div", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "section", 19)(44, "div", 20)(45, "div", 21)(46, "h2", 22);
      \u0275\u0275text(47, "\u0418\u0437\u0431\u0440\u0430\u043D\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "a", 23);
      \u0275\u0275text(49, "\u0412\u0438\u0436 \u0432\u0441\u0438\u0447\u043A\u0438 \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(50, HomeComponent_Conditional_50_Template, 14, 2)(51, HomeComponent_Conditional_51_Template, 6, 2);
      \u0275\u0275elementStart(52, "div", 24)(53, "a", 25);
      \u0275\u0275text(54, " \u0420\u0430\u0437\u0433\u043B\u0435\u0434\u0430\u0439 \u0432\u0441\u0438\u0447\u043A\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438 ");
      \u0275\u0275elementStart(55, "span", 26);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(56, "svg", 8);
      \u0275\u0275element(57, "path", 27)(58, "path", 28);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(27);
      \u0275\u0275conditional(ctx.featured().length > 0 && ctx.featured()[0].hero_image ? 40 : ctx.loading() ? 41 : 42);
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.loading() ? 50 : 51);
    }
  }, dependencies: [RouterLink, RecipeCardComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ['@charset "UTF-8";\n\n\n.hero[_ngcontent-%COMP%] {\n  background-color: var(--clr-surface-alt);\n  background-image: url(/backgrounds/cooking-pattern.svg);\n  background-size: 500px;\n  background-repeat: repeat;\n  padding: clamp(2.5rem, 6vw, 5rem) 1.5rem clamp(2.5rem, 5vw, 4.5rem);\n  border-bottom: 1px solid var(--clr-border-faint);\n}\n.hero-inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 55fr 45fr;\n  gap: clamp(2rem, 5vw, 5rem);\n  align-items: center;\n}\n.hero-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n  color: var(--clr-green-text);\n  background: var(--clr-green-bg);\n  padding: 0.3rem 0.9rem;\n  border-radius: 9999px;\n  margin-bottom: 1.5rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2.4rem, 5.5vw, 4.5rem);\n  font-weight: 800;\n  color: var(--clr-text);\n  line-height: 1.05;\n  margin: 0 0 1.4rem;\n  letter-spacing: -0.025em;\n}\nh1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--clr-brand);\n  font-weight: 800;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  color: var(--clr-text-muted);\n  font-size: 1.1rem;\n  line-height: 1.75;\n  margin: 0 0 2.25rem;\n  font-weight: 400;\n  max-width: 50ch;\n}\n.search-form[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: 0.875rem;\n  overflow: hidden;\n  box-shadow: var(--shadow-md);\n  border: 1.5px solid var(--clr-border);\n  max-width: 440px;\n  background: var(--clr-surface);\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.search-form[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--clr-brand);\n  box-shadow: var(--shadow-md), 0 0 0 3px color-mix(in oklch, var(--clr-brand) 15%, transparent);\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.9rem 1.25rem;\n  border: none;\n  font-size: 0.95rem;\n  outline: none;\n  background: transparent;\n  color: var(--clr-text);\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--clr-text-faint);\n}\n.search-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.9rem 1.5rem;\n  background: var(--clr-green);\n  color: #fff;\n  border: none;\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: background 0.2s;\n  white-space: nowrap;\n  touch-action: manipulation;\n}\n.search-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.search-btn[_ngcontent-%COMP%]:hover {\n  background: var(--clr-green-dark);\n}\n.search-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.75rem;\n  margin-top: 2.5rem;\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n.stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--clr-text);\n  line-height: 1;\n  letter-spacing: -0.02em;\n}\n.stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--clr-text-faint);\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n.stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 2.25rem;\n  background: var(--clr-border);\n  flex-shrink: 0;\n}\n.hero-visual[_ngcontent-%COMP%] {\n  position: relative;\n}\n.hero-frame[_ngcontent-%COMP%] {\n  padding: 7px;\n  background: color-mix(in oklch, var(--clr-brand) 7%, var(--clr-bg));\n  border-radius: 2rem;\n  border: 1px solid var(--clr-border);\n  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1), var(--shadow-sm);\n}\n.hero-image-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: calc(2rem - 7px);\n  overflow: hidden;\n  box-shadow: var(--shadow-xl);\n  aspect-ratio: 4/3;\n  display: block;\n  text-decoration: none;\n  cursor: pointer;\n  transition: box-shadow 0.3s var(--ease-out-expo), transform 0.3s var(--ease-out-expo);\n}\n.hero-image-wrap[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 36px 90px rgba(0, 0, 0, 0.22);\n}\n.hero-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.hero-image-wrap[_ngcontent-%COMP%]:hover   .hero-img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.hero-img-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1.25rem;\n  left: 1.25rem;\n  right: 1.25rem;\n  background: color-mix(in oklch, var(--clr-surface) 92%, transparent);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 0.875rem;\n  padding: 0.75rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  transition: background 0.2s;\n}\n.hero-image-wrap[_ngcontent-%COMP%]:hover   .hero-img-badge[_ngcontent-%COMP%] {\n  background: color-mix(in oklch, var(--clr-surface) 98%, transparent);\n}\n.badge-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: var(--clr-brand);\n}\n.badge-title[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--clr-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n}\n.badge-arrow[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--clr-brand);\n  margin-top: 0.1rem;\n  opacity: 0;\n  transform: translateX(-6px);\n  transition: opacity 0.25s ease, transform 0.25s ease;\n}\n.hero-image-wrap[_ngcontent-%COMP%]:hover   .badge-arrow[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n.hero-skeleton[_ngcontent-%COMP%] {\n  border-radius: calc(2rem - 7px);\n  aspect-ratio: 4/3;\n  background: var(--clr-skeleton);\n  position: relative;\n  overflow: hidden;\n}\n.hero-skeleton[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: _ngcontent-%COMP%_shimmer 1.5s linear infinite;\n}\n.hero-placeholder[_ngcontent-%COMP%] {\n  border-radius: calc(2rem - 7px);\n  aspect-ratio: 4/3;\n  background: var(--clr-skeleton);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hero-placeholder[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 5rem;\n}\n.featured[_ngcontent-%COMP%] {\n  padding: clamp(3rem, 6vw, 5.5rem) 1.5rem clamp(3rem, 5vw, 5rem);\n  background: var(--clr-surface);\n}\n.section-inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  margin-bottom: 2.5rem;\n  gap: 1rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.6rem, 3vw, 2.4rem);\n  font-weight: 800;\n  color: var(--clr-text);\n  margin: 0;\n  letter-spacing: -0.025em;\n  line-height: 1.1;\n  position: relative;\n  padding-bottom: 0.8rem;\n}\n.section-title[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 2.75rem;\n  height: 3px;\n  background: var(--clr-brand);\n  border-radius: 2px;\n}\n.section-link[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--clr-brand);\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  transition: gap 0.25s cubic-bezier(0.25, 1, 0.5, 1);\n  white-space: nowrap;\n  flex-shrink: 0;\n  padding-bottom: 0.8rem;\n}\n.section-link[_ngcontent-%COMP%]:hover {\n  gap: 0.6rem;\n}\n.mag-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 1.5rem;\n  align-items: start;\n}\n.mag-hero[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.mag-side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  min-width: 0;\n}\n.mag-bottom-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  border-radius: 1.25rem;\n  overflow: hidden;\n  background: var(--clr-surface);\n  box-shadow: var(--shadow-sm);\n}\n.skeleton-side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  border-radius: 1rem;\n}\n.sk-img[_ngcontent-%COMP%] {\n  aspect-ratio: 4/3;\n  background: var(--clr-skeleton);\n  position: relative;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.sk-img[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: _ngcontent-%COMP%_shimmer 1.5s linear infinite;\n}\n.sk-img-hero[_ngcontent-%COMP%] {\n  aspect-ratio: 3/2;\n}\n.sk-img-side[_ngcontent-%COMP%] {\n  width: 110px;\n  aspect-ratio: unset;\n  min-height: 90px;\n}\n.sk-body[_ngcontent-%COMP%] {\n  padding: 1.2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n  flex: 1;\n}\n.sk-body-sm[_ngcontent-%COMP%] {\n  padding: 0.85rem;\n  gap: 0.45rem;\n}\n.sk-line[_ngcontent-%COMP%] {\n  height: 0.85rem;\n  border-radius: 9999px;\n  background: var(--clr-skeleton);\n  position: relative;\n  overflow: hidden;\n}\n.sk-line[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: _ngcontent-%COMP%_shimmer 1.5s linear infinite;\n}\n.sk-short[_ngcontent-%COMP%] {\n  width: 35%;\n}\n.sk-long[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.sk-medium[_ngcontent-%COMP%] {\n  width: 55%;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n.cta[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 3.5rem;\n}\n.cta-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem 0.875rem 0.875rem 1.875rem;\n  background: var(--clr-green);\n  color: #fff;\n  border-radius: 9999px;\n  font-weight: 600;\n  font-size: 0.95rem;\n  text-decoration: none;\n  letter-spacing: 0.01em;\n  transition:\n    background 0.25s var(--ease-out-expo),\n    box-shadow 0.25s var(--ease-out-expo),\n    transform 0.25s var(--ease-out-expo);\n  box-shadow: 0 4px 20px color-mix(in oklch, var(--clr-green) 30%, transparent);\n  touch-action: manipulation;\n}\n.cta-icon[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.18);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: transform 0.3s var(--ease-out-expo), background 0.2s;\n}\n.cta-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.cta-btn[_ngcontent-%COMP%]:hover {\n  background: var(--clr-green-dark);\n  box-shadow: 0 8px 28px color-mix(in oklch, var(--clr-green) 40%, transparent);\n  transform: translateY(-2px);\n}\n.cta-btn[_ngcontent-%COMP%]:hover   .cta-icon[_ngcontent-%COMP%] {\n  transform: translateX(3px) translateY(-1px) scale(1.08);\n  background: rgba(255, 255, 255, 0.25);\n}\n.cta-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.98);\n  transition-duration: 0.08s;\n}\n@media (max-width: 900px) {\n  .hero-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .hero-visual[_ngcontent-%COMP%] {\n    order: -1;\n  }\n  .hero-image-wrap[_ngcontent-%COMP%] {\n    aspect-ratio: 16/9;\n  }\n  .hero-skeleton[_ngcontent-%COMP%] {\n    aspect-ratio: 16/9;\n  }\n  .search-form[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .mag-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .mag-side[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .mag-bottom-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .hero-inner[_ngcontent-%COMP%] {\n    gap: 1.5rem;\n  }\n  .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .search-form[_ngcontent-%COMP%] {\n    max-width: 100%;\n    border-radius: 0.75rem;\n  }\n  .search-input[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n    font-size: 0.9rem;\n  }\n  .search-btn[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n    font-size: 0.85rem;\n  }\n  .hero-stats[_ngcontent-%COMP%] {\n    gap: 1.25rem;\n    margin-top: 1.75rem;\n  }\n  .stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n  }\n  .stat-divider[_ngcontent-%COMP%] {\n    height: 1.75rem;\n  }\n  .hero-image-wrap[_ngcontent-%COMP%] {\n    aspect-ratio: 4/3;\n  }\n  .hero-frame[_ngcontent-%COMP%] {\n    border-radius: 1.5rem;\n  }\n  .hero-image-wrap[_ngcontent-%COMP%], \n   .hero-skeleton[_ngcontent-%COMP%], \n   .hero-placeholder[_ngcontent-%COMP%] {\n    border-radius: calc(1.5rem - 7px);\n  }\n  .hero-img-badge[_ngcontent-%COMP%] {\n    bottom: 0.75rem;\n    left: 0.75rem;\n    right: 0.75rem;\n    padding: 0.65rem 0.875rem;\n  }\n  .badge-title[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .section-title[_ngcontent-%COMP%]::after {\n    width: 2rem;\n  }\n  .mag-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .mag-side[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .mag-bottom-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .cta-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    box-sizing: border-box;\n  }\n}\n@media (max-width: 400px) {\n  .hero-stats[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .stat-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .search-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .hero-image-wrap[_ngcontent-%COMP%] {\n    transition: box-shadow 0.2s;\n  }\n  .hero-image-wrap[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n  .hero-img[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .hero-image-wrap[_ngcontent-%COMP%]:hover   .hero-img[_ngcontent-%COMP%] {\n    transform: none;\n  }\n  .badge-arrow[_ngcontent-%COMP%] {\n    transition: opacity 0.15s;\n    transform: none !important;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [RouterLink, RecipeCardComponent, FormsModule], template: `
    <!-- HERO: split layout -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-content">
          <span class="hero-eyebrow">\u0414\u043E\u0431\u0440\u0435 \u0434\u043E\u0448\u043B\u0438</span>
          <h1>\u041A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F\u0442<br/><em>\u0431\u043B\u043E\u0433 \u043D\u0430 \u0418\u0432\u043E</em></h1>
          <p class="hero-subtitle">\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u0438 \u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438, \u0441\u043F\u043E\u0434\u0435\u043B\u0435\u043D\u0438 \u0441 \u043B\u044E\u0431\u043E\u0432 \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043A\u044A\u043C \u0432\u0441\u0435\u043A\u0438 \u0434\u0435\u0442\u0430\u0439\u043B.</p>
          <form class="search-form" (submit)="onSearch($event)">
            <input
              type="text"
              [(ngModel)]="searchQuery"
              name="q"
              placeholder="\u0422\u044A\u0440\u0441\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0430..."
              aria-label="\u0422\u044A\u0440\u0441\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0430"
              class="search-input"
            />
            <button type="submit" class="search-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <span>\u0422\u044A\u0440\u0441\u0438</span>
            </button>
          </form>
          <div class="hero-stats">
            <div class="stat"><strong>100+</strong><span>\u0420\u0435\u0446\u0435\u043F\u0442\u0438</span></div>
            <div class="stat-divider"></div>
            <div class="stat"><strong>5\u2605</strong><span>\u041E\u0446\u0435\u043D\u0435\u043D\u0438</span></div>
            <div class="stat-divider"></div>
            <div class="stat"><strong>\u0411\u0435\u0437\u043F\u043B\u0430\u0442\u043D\u043E</strong><span>\u0417\u0430\u0432\u0438\u043D\u0430\u0433\u0438</span></div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-frame">
            @if (featured().length > 0 && featured()[0].hero_image) {
              <a class="hero-image-wrap" [routerLink]="['/recipes', featured()[0].slug]">
                <img [src]="featured()[0].hero_image" [alt]="featured()[0].title"
                     fetchpriority="high" loading="eager" class="hero-img" />
                <div class="hero-img-badge">
                  <span class="badge-label">\u0418\u0437\u0431\u0440\u0430\u043D\u0430 \u0440\u0435\u0446\u0435\u043F\u0442\u0430</span>
                  <span class="badge-title">{{ featured()[0].title }}</span>
                  <span class="badge-arrow">\u0412\u0438\u0436 \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u0442\u0430 \u2192</span>
                </div>
              </a>
            } @else if (loading()) {
              <div class="hero-skeleton"></div>
            } @else {
              <div class="hero-placeholder">
                <svg viewBox="0 0 64 64" fill="none" stroke="#c4b49a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="32" cy="34" rx="20" ry="12"/><path d="M12 34c0-6.6 9-12 20-12s20 5.4 20 12"/><path d="M22 22v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><line x1="32" y1="14" x2="32" y2="10"/><line x1="24" y1="15" x2="22" y2="11"/><line x1="40" y1="15" x2="42" y2="11"/></svg>
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED: bento grid -->
    <section class="featured">
      <div class="section-inner">
        <div class="section-heading">
          <h2 class="section-title">\u0418\u0437\u0431\u0440\u0430\u043D\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438</h2>
          <a routerLink="/recipes" class="section-link">\u0412\u0438\u0436 \u0432\u0441\u0438\u0447\u043A\u0438 \u2192</a>
        </div>

        @if (loading()) {
          <div class="mag-layout">
            <div class="mag-hero">
              <div class="skeleton-card">
                <div class="sk-img sk-img-hero"></div>
                <div class="sk-body">
                  <div class="sk-line sk-short"></div>
                  <div class="sk-line sk-long"></div>
                  <div class="sk-line sk-medium"></div>
                </div>
              </div>
            </div>
            <div class="mag-side">
              @for (s of [0,1,2]; track s) {
                <div class="skeleton-card skeleton-side">
                  <div class="sk-img sk-img-side"></div>
                  <div class="sk-body sk-body-sm">
                    <div class="sk-line sk-short"></div>
                    <div class="sk-line sk-long"></div>
                  </div>
                </div>
              }
            </div>
          </div>
          <div class="mag-bottom-grid">
            @for (s of [0,1,2]; track s) {
              <div class="skeleton-card">
                <div class="sk-img"></div>
                <div class="sk-body">
                  <div class="sk-line sk-short"></div>
                  <div class="sk-line sk-long"></div>
                  <div class="sk-line sk-medium"></div>
                </div>
              </div>
            }
          </div>
        } @else {
          <!-- Magazine top: hero left (2/3) + 3 stacked right (1/3) -->
          <div class="mag-layout">
            @if (featured().length > 0) {
              <div class="mag-hero">
                <app-recipe-card [recipe]="featured()[0]" [priority]="true" [index]="0" [featured]="true" />
              </div>
            }
            <div class="mag-side">
              @for (recipe of featured().slice(1, 4); track recipe.id; let i = $index) {
                <app-recipe-card [recipe]="recipe" [index]="i + 1" [compact]="true" />
              }
            </div>
          </div>
          <!-- Bottom row: remaining cards in 4-col grid -->
          @if (featured().length > 4) {
            <div class="mag-bottom-grid">
              @for (recipe of featured().slice(4); track recipe.id; let i = $index) {
                <app-recipe-card [recipe]="recipe" [index]="i + 4" />
              }
            </div>
          }
        }

        <div class="cta">
          <a routerLink="/recipes" class="cta-btn">
            \u0420\u0430\u0437\u0433\u043B\u0435\u0434\u0430\u0439 \u0432\u0441\u0438\u0447\u043A\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438
            <span class="cta-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;b1c464b36ed60e387abf2518ae578d8010988b8c295329e798845a2e57668a8c;C:/Users/ipene/Desktop/Blog-System-Angular/frontend/src/app/pages/home/home.component.ts */\n.hero {\n  background-color: var(--clr-surface-alt);\n  background-image: url(/backgrounds/cooking-pattern.svg);\n  background-size: 500px;\n  background-repeat: repeat;\n  padding: clamp(2.5rem, 6vw, 5rem) 1.5rem clamp(2.5rem, 5vw, 4.5rem);\n  border-bottom: 1px solid var(--clr-border-faint);\n}\n.hero-inner {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 55fr 45fr;\n  gap: clamp(2rem, 5vw, 5rem);\n  align-items: center;\n}\n.hero-eyebrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n  color: var(--clr-green-text);\n  background: var(--clr-green-bg);\n  padding: 0.3rem 0.9rem;\n  border-radius: 9999px;\n  margin-bottom: 1.5rem;\n}\nh1 {\n  font-family: var(--font-display);\n  font-size: clamp(2.4rem, 5.5vw, 4.5rem);\n  font-weight: 800;\n  color: var(--clr-text);\n  line-height: 1.05;\n  margin: 0 0 1.4rem;\n  letter-spacing: -0.025em;\n}\nh1 em {\n  font-style: italic;\n  color: var(--clr-brand);\n  font-weight: 800;\n}\n.hero-subtitle {\n  color: var(--clr-text-muted);\n  font-size: 1.1rem;\n  line-height: 1.75;\n  margin: 0 0 2.25rem;\n  font-weight: 400;\n  max-width: 50ch;\n}\n.search-form {\n  display: flex;\n  border-radius: 0.875rem;\n  overflow: hidden;\n  box-shadow: var(--shadow-md);\n  border: 1.5px solid var(--clr-border);\n  max-width: 440px;\n  background: var(--clr-surface);\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.search-form:focus-within {\n  border-color: var(--clr-brand);\n  box-shadow: var(--shadow-md), 0 0 0 3px color-mix(in oklch, var(--clr-brand) 15%, transparent);\n}\n.search-input {\n  flex: 1;\n  padding: 0.9rem 1.25rem;\n  border: none;\n  font-size: 0.95rem;\n  outline: none;\n  background: transparent;\n  color: var(--clr-text);\n}\n.search-input::placeholder {\n  color: var(--clr-text-faint);\n}\n.search-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.9rem 1.5rem;\n  background: var(--clr-green);\n  color: #fff;\n  border: none;\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: background 0.2s;\n  white-space: nowrap;\n  touch-action: manipulation;\n}\n.search-btn svg {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\n.search-btn:hover {\n  background: var(--clr-green-dark);\n}\n.search-btn:active {\n  transform: scale(0.97);\n}\n.hero-stats {\n  display: flex;\n  align-items: center;\n  gap: 1.75rem;\n  margin-top: 2.5rem;\n}\n.stat {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n.stat strong {\n  font-family: var(--font-display);\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--clr-text);\n  line-height: 1;\n  letter-spacing: -0.02em;\n}\n.stat span {\n  font-size: 0.68rem;\n  color: var(--clr-text-faint);\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n.stat-divider {\n  width: 1px;\n  height: 2.25rem;\n  background: var(--clr-border);\n  flex-shrink: 0;\n}\n.hero-visual {\n  position: relative;\n}\n.hero-frame {\n  padding: 7px;\n  background: color-mix(in oklch, var(--clr-brand) 7%, var(--clr-bg));\n  border-radius: 2rem;\n  border: 1px solid var(--clr-border);\n  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1), var(--shadow-sm);\n}\n.hero-image-wrap {\n  position: relative;\n  border-radius: calc(2rem - 7px);\n  overflow: hidden;\n  box-shadow: var(--shadow-xl);\n  aspect-ratio: 4/3;\n  display: block;\n  text-decoration: none;\n  cursor: pointer;\n  transition: box-shadow 0.3s var(--ease-out-expo), transform 0.3s var(--ease-out-expo);\n}\n.hero-image-wrap:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 36px 90px rgba(0, 0, 0, 0.22);\n}\n.hero-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.hero-image-wrap:hover .hero-img {\n  transform: scale(1.04);\n}\n.hero-img-badge {\n  position: absolute;\n  bottom: 1.25rem;\n  left: 1.25rem;\n  right: 1.25rem;\n  background: color-mix(in oklch, var(--clr-surface) 92%, transparent);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 0.875rem;\n  padding: 0.75rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  transition: background 0.2s;\n}\n.hero-image-wrap:hover .hero-img-badge {\n  background: color-mix(in oklch, var(--clr-surface) 98%, transparent);\n}\n.badge-label {\n  display: block;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: var(--clr-brand);\n}\n.badge-title {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--clr-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n}\n.badge-arrow {\n  display: block;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--clr-brand);\n  margin-top: 0.1rem;\n  opacity: 0;\n  transform: translateX(-6px);\n  transition: opacity 0.25s ease, transform 0.25s ease;\n}\n.hero-image-wrap:hover .badge-arrow {\n  opacity: 1;\n  transform: translateX(0);\n}\n.hero-skeleton {\n  border-radius: calc(2rem - 7px);\n  aspect-ratio: 4/3;\n  background: var(--clr-skeleton);\n  position: relative;\n  overflow: hidden;\n}\n.hero-skeleton::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: shimmer 1.5s linear infinite;\n}\n.hero-placeholder {\n  border-radius: calc(2rem - 7px);\n  aspect-ratio: 4/3;\n  background: var(--clr-skeleton);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hero-placeholder svg {\n  width: 5rem;\n  height: 5rem;\n}\n.featured {\n  padding: clamp(3rem, 6vw, 5.5rem) 1.5rem clamp(3rem, 5vw, 5rem);\n  background: var(--clr-surface);\n}\n.section-inner {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.section-heading {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  margin-bottom: 2.5rem;\n  gap: 1rem;\n}\n.section-title {\n  font-family: var(--font-display);\n  font-size: clamp(1.6rem, 3vw, 2.4rem);\n  font-weight: 800;\n  color: var(--clr-text);\n  margin: 0;\n  letter-spacing: -0.025em;\n  line-height: 1.1;\n  position: relative;\n  padding-bottom: 0.8rem;\n}\n.section-title::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 2.75rem;\n  height: 3px;\n  background: var(--clr-brand);\n  border-radius: 2px;\n}\n.section-link {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--clr-brand);\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  transition: gap 0.25s cubic-bezier(0.25, 1, 0.5, 1);\n  white-space: nowrap;\n  flex-shrink: 0;\n  padding-bottom: 0.8rem;\n}\n.section-link:hover {\n  gap: 0.6rem;\n}\n.mag-layout {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 1.5rem;\n  align-items: start;\n}\n.mag-hero {\n  min-width: 0;\n}\n.mag-side {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  min-width: 0;\n}\n.mag-bottom-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n}\n.skeleton-card {\n  border-radius: 1.25rem;\n  overflow: hidden;\n  background: var(--clr-surface);\n  box-shadow: var(--shadow-sm);\n}\n.skeleton-side {\n  display: flex;\n  flex-direction: row;\n  border-radius: 1rem;\n}\n.sk-img {\n  aspect-ratio: 4/3;\n  background: var(--clr-skeleton);\n  position: relative;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.sk-img::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: shimmer 1.5s linear infinite;\n}\n.sk-img-hero {\n  aspect-ratio: 3/2;\n}\n.sk-img-side {\n  width: 110px;\n  aspect-ratio: unset;\n  min-height: 90px;\n}\n.sk-body {\n  padding: 1.2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n  flex: 1;\n}\n.sk-body-sm {\n  padding: 0.85rem;\n  gap: 0.45rem;\n}\n.sk-line {\n  height: 0.85rem;\n  border-radius: 9999px;\n  background: var(--clr-skeleton);\n  position: relative;\n  overflow: hidden;\n}\n.sk-line::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: shimmer 1.5s linear infinite;\n}\n.sk-short {\n  width: 35%;\n}\n.sk-long {\n  width: 80%;\n}\n.sk-medium {\n  width: 55%;\n}\n@keyframes shimmer {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n.cta {\n  text-align: center;\n  margin-top: 3.5rem;\n}\n.cta-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem 0.875rem 0.875rem 1.875rem;\n  background: var(--clr-green);\n  color: #fff;\n  border-radius: 9999px;\n  font-weight: 600;\n  font-size: 0.95rem;\n  text-decoration: none;\n  letter-spacing: 0.01em;\n  transition:\n    background 0.25s var(--ease-out-expo),\n    box-shadow 0.25s var(--ease-out-expo),\n    transform 0.25s var(--ease-out-expo);\n  box-shadow: 0 4px 20px color-mix(in oklch, var(--clr-green) 30%, transparent);\n  touch-action: manipulation;\n}\n.cta-icon {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.18);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: transform 0.3s var(--ease-out-expo), background 0.2s;\n}\n.cta-icon svg {\n  width: 1rem;\n  height: 1rem;\n}\n.cta-btn:hover {\n  background: var(--clr-green-dark);\n  box-shadow: 0 8px 28px color-mix(in oklch, var(--clr-green) 40%, transparent);\n  transform: translateY(-2px);\n}\n.cta-btn:hover .cta-icon {\n  transform: translateX(3px) translateY(-1px) scale(1.08);\n  background: rgba(255, 255, 255, 0.25);\n}\n.cta-btn:active {\n  transform: translateY(0) scale(0.98);\n  transition-duration: 0.08s;\n}\n@media (max-width: 900px) {\n  .hero-inner {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .hero-visual {\n    order: -1;\n  }\n  .hero-image-wrap {\n    aspect-ratio: 16/9;\n  }\n  .hero-skeleton {\n    aspect-ratio: 16/9;\n  }\n  .search-form {\n    max-width: 100%;\n  }\n  .mag-layout {\n    grid-template-columns: 1fr;\n  }\n  .mag-side {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .mag-bottom-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .hero-inner {\n    gap: 1.5rem;\n  }\n  .hero-subtitle {\n    font-size: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .search-form {\n    max-width: 100%;\n    border-radius: 0.75rem;\n  }\n  .search-input {\n    padding: 0.75rem 1rem;\n    font-size: 0.9rem;\n  }\n  .search-btn {\n    padding: 0.75rem 1rem;\n    font-size: 0.85rem;\n  }\n  .hero-stats {\n    gap: 1.25rem;\n    margin-top: 1.75rem;\n  }\n  .stat strong {\n    font-size: 1.25rem;\n  }\n  .stat span {\n    font-size: 0.65rem;\n  }\n  .stat-divider {\n    height: 1.75rem;\n  }\n  .hero-image-wrap {\n    aspect-ratio: 4/3;\n  }\n  .hero-frame {\n    border-radius: 1.5rem;\n  }\n  .hero-image-wrap,\n  .hero-skeleton,\n  .hero-placeholder {\n    border-radius: calc(1.5rem - 7px);\n  }\n  .hero-img-badge {\n    bottom: 0.75rem;\n    left: 0.75rem;\n    right: 0.75rem;\n    padding: 0.65rem 0.875rem;\n  }\n  .badge-title {\n    font-size: 0.95rem;\n  }\n  .section-title::after {\n    width: 2rem;\n  }\n  .mag-layout {\n    grid-template-columns: 1fr;\n  }\n  .mag-side {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .mag-bottom-grid {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .cta-btn {\n    width: 100%;\n    justify-content: center;\n    box-sizing: border-box;\n  }\n}\n@media (max-width: 400px) {\n  .hero-stats {\n    gap: 0.75rem;\n  }\n  .stat strong {\n    font-size: 1.1rem;\n  }\n  .stat-divider {\n    display: none;\n  }\n  .search-btn span {\n    display: none;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .hero-image-wrap {\n    transition: box-shadow 0.2s;\n  }\n  .hero-image-wrap:hover {\n    transform: none;\n  }\n  .hero-img {\n    transition: none;\n  }\n  .hero-image-wrap:hover .hero-img {\n    transform: none;\n  }\n  .badge-arrow {\n    transition: opacity 0.15s;\n    transform: none !important;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 591 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-NQNI7EA4.js.map
