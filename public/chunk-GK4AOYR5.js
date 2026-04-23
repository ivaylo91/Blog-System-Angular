import {
  CommentService
} from "./chunk-VSTPVFLU.js";
import {
  ConfirmModalComponent
} from "./chunk-TBBU46XN.js";
import {
  FavoriteService
} from "./chunk-FD7HKJST.js";
import {
  ToastService
} from "./chunk-VHJLHV5Z.js";
import {
  PerfService
} from "./chunk-KIVHOOUT.js";
import {
  RecipeCardComponent
} from "./chunk-GNUGBRS5.js";
import {
  takeUntilDestroyed
} from "./chunk-OOSWPAHX.js";
import {
  AuthService
} from "./chunk-NMKHPTKL.js";
import {
  SeoService
} from "./chunk-QW5YG2I6.js";
import {
  RecipeService
} from "./chunk-EYV2RDQL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-CZI4FLAU.js";
import "./chunk-GL5TQRYS.js";
import {
  ActivatedRoute,
  ChangeDetectionStrategy,
  Component,
  DatePipe,
  EventEmitter,
  Input,
  Output,
  RouterLink,
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
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LVOWXKII.js";

// src/app/components/star-rating/star-rating.component.ts
function StarRatingComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 2);
    \u0275\u0275domListener("mouseenter", function StarRatingComponent_For_2_Template_button_mouseenter_0_listener() {
      const star_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.interactive && (ctx_r2.hoverValue = star_r2));
    })("mouseleave", function StarRatingComponent_For_2_Template_button_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.interactive && (ctx_r2.hoverValue = 0));
    })("click", function StarRatingComponent_For_2_Template_button_click_0_listener() {
      const star_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.interactive && ctx_r2.select(star_r2));
    });
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const star_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("filled", star_r2 <= (ctx_r2.hoverValue || ctx_r2.value));
    \u0275\u0275domProperty("disabled", !ctx_r2.interactive);
    \u0275\u0275attribute("aria-label", ctx_r2.interactive ? "\u041E\u0446\u0435\u043D\u043A\u0430 " + star_r2 + " \u043E\u0442 5" : null)("aria-pressed", ctx_r2.interactive ? star_r2 <= ctx_r2.value : null)("aria-hidden", !ctx_r2.interactive ? "true" : null)("tabindex", !ctx_r2.interactive ? -1 : null);
  }
}
var StarRatingComponent = class _StarRatingComponent {
  value = 0;
  interactive = true;
  rated = new EventEmitter();
  stars = [1, 2, 3, 4, 5];
  hoverValue = 0;
  select(rating) {
    this.value = rating;
    this.rated.emit(rating);
  }
  static \u0275fac = function StarRatingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StarRatingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StarRatingComponent, selectors: [["app-star-rating"]], inputs: { value: "value", interactive: "interactive" }, outputs: { rated: "rated" }, decls: 3, vars: 2, consts: [[1, "stars"], ["type", "button", 1, "star", 3, "filled", "disabled"], ["type", "button", 1, "star", 3, "mouseenter", "mouseleave", "click", "disabled"]], template: function StarRatingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, StarRatingComponent_For_2_Template, 2, 7, "button", 1, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275attribute("role", ctx.interactive ? "group" : "img")("aria-label", ctx.interactive ? "\u0418\u0437\u0431\u0435\u0440\u0438 \u043E\u0446\u0435\u043D\u043A\u0430" : "\u041E\u0446\u0435\u043D\u043A\u0430 " + ctx.value + " \u043E\u0442 5");
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.stars);
    }
  }, styles: ["\n.stars[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 0.1rem;\n}\n.star[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--clr-border-strong);\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.1rem;\n  transition: color 0.15s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);\n  line-height: 1;\n}\n.star[_ngcontent-%COMP%]:not(:disabled):hover {\n  transform: scale(1.2);\n}\n.star[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n.star.filled[_ngcontent-%COMP%] {\n  color: var(--clr-amber);\n}\n/*# sourceMappingURL=star-rating.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StarRatingComponent, [{
    type: Component,
    args: [{ selector: "app-star-rating", standalone: true, template: `
    <div class="stars"
      [attr.role]="interactive ? 'group' : 'img'"
      [attr.aria-label]="interactive ? '\u0418\u0437\u0431\u0435\u0440\u0438 \u043E\u0446\u0435\u043D\u043A\u0430' : '\u041E\u0446\u0435\u043D\u043A\u0430 ' + value + ' \u043E\u0442 5'">
      @for (star of stars; track star) {
        <button
          type="button"
          class="star"
          [class.filled]="star <= (hoverValue || value)"
          [attr.aria-label]="interactive ? ('\u041E\u0446\u0435\u043D\u043A\u0430 ' + star + ' \u043E\u0442 5') : null"
          [attr.aria-pressed]="interactive ? (star <= value) : null"
          [attr.aria-hidden]="!interactive ? 'true' : null"
          [attr.tabindex]="!interactive ? -1 : null"
          (mouseenter)="interactive && (hoverValue = star)"
          (mouseleave)="interactive && (hoverValue = 0)"
          (click)="interactive && select(star)"
          [disabled]="!interactive"
        >\u2605</button>
      }
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;a15b41a5335d7ef9cb6a0ce68ee47d6ef760d117abbe716332e819687fdf2b8a;C:/Users/ipene/Desktop/Blog-System-Angular/frontend/src/app/components/star-rating/star-rating.component.ts */\n.stars {\n  display: inline-flex;\n  gap: 0.1rem;\n}\n.star {\n  font-size: 1.5rem;\n  color: var(--clr-border-strong);\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.1rem;\n  transition: color 0.15s var(--ease-out-expo), transform 0.15s var(--ease-out-expo);\n  line-height: 1;\n}\n.star:not(:disabled):hover {\n  transform: scale(1.2);\n}\n.star:disabled {\n  cursor: default;\n}\n.star.filled {\n  color: var(--clr-amber);\n}\n/*# sourceMappingURL=star-rating.component.css.map */\n"] }]
  }], null, { value: [{
    type: Input
  }], interactive: [{
    type: Input
  }], rated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StarRatingComponent, { className: "StarRatingComponent", filePath: "src/app/components/star-rating/star-rating.component.ts", lineNumber: 45 });
})();

// src/app/pages/recipe-detail/recipe-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function RecipeDetailComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
  if (rf & 2) {
    const recipe_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", recipe_r2.hero_image, \u0275\u0275sanitizeUrl)("alt", recipe_r2.title);
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const recipe_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(recipe_r2.category.name);
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 27);
    \u0275\u0275element(2, "polygon", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.averageRating().toFixed(1));
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 35);
    \u0275\u0275element(1, "polyline", 88);
    \u0275\u0275elementEnd();
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 15);
    \u0275\u0275element(1, "rect", 89)(2, "path", 90);
    \u0275\u0275elementEnd();
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function RecipeDetailComponent_Conditional_1_Conditional_53_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.nativeShare());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "circle", 92)(3, "circle", 93)(4, "circle", 94)(5, "line", 95)(6, "line", 96);
    \u0275\u0275elementEnd()();
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_84_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 98);
    \u0275\u0275element(1, "circle", 101);
    \u0275\u0275elementEnd();
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_84_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 99);
    \u0275\u0275element(1, "path", 102);
    \u0275\u0275elementEnd();
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_84_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 100);
    \u0275\u0275element(1, "path", 102);
    \u0275\u0275elementEnd();
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_84_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" \u0417\u0430\u043F\u0430\u0437\u0435\u043D\u043E \xB7 ", (tmp_4_0 = ctx_r2.favoriteStatus()) == null ? null : tmp_4_0.favoriteCount, " ");
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_84_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" \u0417\u0430\u043F\u0430\u0437\u0438 \xB7 ", ((tmp_4_0 = ctx_r2.favoriteStatus()) == null ? null : tmp_4_0.favoriteCount) || 0, " ");
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 97);
    \u0275\u0275listener("click", function RecipeDetailComponent_Conditional_1_Conditional_84_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFavorite());
    });
    \u0275\u0275conditionalCreate(1, RecipeDetailComponent_Conditional_1_Conditional_84_Conditional_1_Template, 2, 0, ":svg:svg", 98)(2, RecipeDetailComponent_Conditional_1_Conditional_84_Conditional_2_Template, 2, 0, ":svg:svg", 99)(3, RecipeDetailComponent_Conditional_1_Conditional_84_Conditional_3_Template, 2, 0, ":svg:svg", 100);
    \u0275\u0275conditionalCreate(4, RecipeDetailComponent_Conditional_1_Conditional_84_Conditional_4_Template, 1, 1)(5, RecipeDetailComponent_Conditional_1_Conditional_84_Conditional_5_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("favorited", (tmp_3_0 = ctx_r2.favoriteStatus()) == null ? null : tmp_3_0.isFavorite);
    \u0275\u0275property("disabled", ctx_r2.favoriting());
    \u0275\u0275attribute("aria-pressed", !!((tmp_5_0 = ctx_r2.favoriteStatus()) == null ? null : tmp_5_0.isFavorite))("aria-label", ((tmp_6_0 = ctx_r2.favoriteStatus()) == null ? null : tmp_6_0.isFavorite) ? "\u041F\u0440\u0435\u043C\u0430\u0445\u043D\u0438 \u043E\u0442 \u043B\u044E\u0431\u0438\u043C\u0438" : "\u0414\u043E\u0431\u0430\u0432\u0438 \u0432 \u043B\u044E\u0431\u0438\u043C\u0438");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.favoriting() ? 1 : ((tmp_7_0 = ctx_r2.favoriteStatus()) == null ? null : tmp_7_0.isFavorite) ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_8_0 = ctx_r2.favoriteStatus()) == null ? null : tmp_8_0.isFavorite) ? 4 : 5);
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275element(1, "div", 103);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const recipe_r2 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("transform", "scaleX(" + ctx_r2.checkedIngredients().size / ((recipe_r2.ingredients == null ? null : recipe_r2.ingredients.length) || 1) + ")");
  }
}
function RecipeDetailComponent_Conditional_1_For_98_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 106);
    \u0275\u0275element(1, "polyline", 88);
    \u0275\u0275elementEnd();
  }
}
function RecipeDetailComponent_Conditional_1_For_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 104);
    \u0275\u0275listener("click", function RecipeDetailComponent_Conditional_1_For_98_Template_li_click_0_listener() {
      const ing_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleIngredient(ing_r7.id));
    })("keydown.space", function RecipeDetailComponent_Conditional_1_For_98_Template_li_keydown_space_0_listener($event) {
      const ing_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r2.toggleIngredient(ing_r7.id));
    })("keydown.enter", function RecipeDetailComponent_Conditional_1_For_98_Template_li_keydown_enter_0_listener() {
      const ing_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleIngredient(ing_r7.id));
    });
    \u0275\u0275elementStart(1, "span", 105);
    \u0275\u0275conditionalCreate(2, RecipeDetailComponent_Conditional_1_For_98_Conditional_2_Template, 2, 0, ":svg:svg", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 107);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 108);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ing_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("checked", ctx_r2.checkedIngredients().has(ing_r7.id));
    \u0275\u0275attribute("aria-checked", ctx_r2.checkedIngredients().has(ing_r7.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.checkedIngredients().has(ing_r7.id) ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ing_r7.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ing_r7.name);
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 109);
    \u0275\u0275listener("click", function RecipeDetailComponent_Conditional_1_Conditional_99_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearIngredients());
    });
    \u0275\u0275text(1, " \u0418\u0437\u0447\u0438\u0441\u0442\u0438 \u0432\u0441\u0438\u0447\u043A\u0438 ");
    \u0275\u0275elementEnd();
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const recipe_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(recipe_r2.description);
  }
}
function RecipeDetailComponent_Conditional_1_For_117_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(step_r9.title);
  }
}
function RecipeDetailComponent_Conditional_1_For_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 110);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 111);
    \u0275\u0275conditionalCreate(4, RecipeDetailComponent_Conditional_1_For_117_Conditional_4_Template, 2, 1, "h3");
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const step_r9 = ctx.$implicit;
    const \u0275$index_295_r10 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_295_r10 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(step_r9.title && step_r9.title !== "\u0421\u0442\u044A\u043F\u043A\u0430 " + (\u0275$index_295_r10 + 1) ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r9.description);
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_118_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r11.name);
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "path", 112)(3, "line", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, RecipeDetailComponent_Conditional_1_Conditional_118_For_5_Template, 2, 1, "span", 114, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const recipe_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(recipe_r2.tags);
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_131_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "p");
    \u0275\u0275text(2, "\u0422\u0432\u043E\u044F\u0442\u0430 \u043E\u0446\u0435\u043D\u043A\u0430:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-star-rating", 115);
    \u0275\u0275listener("rated", function RecipeDetailComponent_Conditional_1_Conditional_131_Template_app_star_rating_rated_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onRate($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.userRating());
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_132_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 98);
    \u0275\u0275element(1, "circle", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " \u0418\u0437\u043F\u0440\u0430\u0449\u0430\u043D\u0435... ");
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_132_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 119);
    \u0275\u0275element(1, "line", 120)(2, "polygon", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u041F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u0439 ");
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 15);
    \u0275\u0275element(3, "path", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u041E\u0441\u0442\u0430\u0432\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440 ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "form", 116);
    \u0275\u0275listener("submit", function RecipeDetailComponent_Conditional_1_Conditional_132_Template_form_submit_5_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onComment($event));
    });
    \u0275\u0275elementStart(6, "textarea", 117);
    \u0275\u0275listener("ngModelChange", function RecipeDetailComponent_Conditional_1_Conditional_132_Template_textarea_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.commentBody.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 118);
    \u0275\u0275conditionalCreate(8, RecipeDetailComponent_Conditional_1_Conditional_132_Conditional_8_Template, 3, 0)(9, RecipeDetailComponent_Conditional_1_Conditional_132_Conditional_9_Template, 4, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r2.commentBody())("disabled", ctx_r2.submittingComment());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.submittingComment() || !ctx_r2.commentBody().trim());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.submittingComment() ? 8 : 9);
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "path", 122)(3, "polyline", 123)(4, "line", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "\u0417\u0430 \u043E\u0446\u0435\u043D\u043A\u0430 \u0438\u043B\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440 ");
    \u0275\u0275elementStart(7, "a", 125);
    \u0275\u0275text(8, "\u0432\u043B\u0435\u0437 \u0432 \u043F\u0440\u043E\u0444\u0438\u043B\u0430 \u0441\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ".");
    \u0275\u0275elementEnd()();
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.comments().length);
  }
}
function RecipeDetailComponent_Conditional_1_For_141_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 136);
    \u0275\u0275listener("click", function RecipeDetailComponent_Conditional_1_For_141_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const comment_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmDelete(comment_r15.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 100);
    \u0275\u0275element(2, "polyline", 137)(3, "path", 138)(4, "path", 139)(5, "path", 140);
    \u0275\u0275elementEnd()();
  }
}
function RecipeDetailComponent_Conditional_1_For_141_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275element(1, "app-star-rating", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", comment_r15.rating)("interactive", false);
  }
}
function RecipeDetailComponent_Conditional_1_For_141_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 132);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(comment_r15.body);
  }
}
function RecipeDetailComponent_Conditional_1_For_141_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 141);
    \u0275\u0275listener("click", function RecipeDetailComponent_Conditional_1_For_141_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const comment_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startReply(comment_r15.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 100);
    \u0275\u0275element(2, "polyline", 142)(3, "path", 143);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-expanded", ctx_r2.replyingToId() === comment_r15.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.replyingToId() === comment_r15.id ? "\u041E\u0442\u043A\u0430\u0437" : "\u041E\u0442\u0433\u043E\u0432\u043E\u0440\u0438", " ");
  }
}
function RecipeDetailComponent_Conditional_1_For_141_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 98);
    \u0275\u0275element(1, "circle", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " \u0418\u0437\u043F\u0440\u0430\u0449\u0430\u043D\u0435... ");
  }
}
function RecipeDetailComponent_Conditional_1_For_141_Conditional_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0418\u0437\u043F\u0440\u0430\u0442\u0438 ");
  }
}
function RecipeDetailComponent_Conditional_1_For_141_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 144);
    \u0275\u0275listener("submit", function RecipeDetailComponent_Conditional_1_For_141_Conditional_14_Template_form_submit_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const comment_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitReply($event, comment_r15.id));
    });
    \u0275\u0275elementStart(1, "textarea", 145);
    \u0275\u0275listener("ngModelChange", function RecipeDetailComponent_Conditional_1_For_141_Conditional_14_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.replyBody.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 118);
    \u0275\u0275conditionalCreate(3, RecipeDetailComponent_Conditional_1_For_141_Conditional_14_Conditional_3_Template, 3, 0)(4, RecipeDetailComponent_Conditional_1_For_141_Conditional_14_Conditional_4_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const comment_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.replyBody())("name", "reply-" + comment_r15.id)("disabled", ctx_r2.submittingReply());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.submittingReply() || !ctx_r2.replyBody().trim());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.submittingReply() ? 3 : 4);
  }
}
function RecipeDetailComponent_Conditional_1_For_141_Conditional_15_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 149);
    \u0275\u0275listener("click", function RecipeDetailComponent_Conditional_1_For_141_Conditional_15_For_2_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const reply_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.confirmDelete(reply_r19.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 100);
    \u0275\u0275element(2, "polyline", 137)(3, "path", 138)(4, "path", 139)(5, "path", 140);
    \u0275\u0275elementEnd()();
  }
}
function RecipeDetailComponent_Conditional_1_For_141_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146)(1, "div", 126)(2, "div", 147);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 128)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 129);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, RecipeDetailComponent_Conditional_1_For_141_Conditional_15_For_2_Conditional_10_Template, 6, 0, "button", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 132);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reply_r19 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((reply_r19.author == null ? null : reply_r19.author.name) || "\u0427")[0].toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((reply_r19.author == null ? null : reply_r19.author.name) || "\u0427\u0438\u0442\u0430\u0442\u0435\u043B");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 5, reply_r19.created_at, "dd MMM yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.canDeleteComment(reply_r19) ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reply_r19.body);
  }
}
function RecipeDetailComponent_Conditional_1_For_141_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275repeaterCreate(1, RecipeDetailComponent_Conditional_1_For_141_Conditional_15_For_2_Template, 13, 8, "div", 146, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(comment_r15.replies);
  }
}
function RecipeDetailComponent_Conditional_1_For_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 126)(2, "div", 127);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 128)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 129);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, RecipeDetailComponent_Conditional_1_For_141_Conditional_10_Template, 6, 0, "button", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, RecipeDetailComponent_Conditional_1_For_141_Conditional_11_Template, 2, 2, "div", 131);
    \u0275\u0275conditionalCreate(12, RecipeDetailComponent_Conditional_1_For_141_Conditional_12_Template, 2, 1, "p", 132);
    \u0275\u0275conditionalCreate(13, RecipeDetailComponent_Conditional_1_For_141_Conditional_13_Template, 5, 2, "button", 133);
    \u0275\u0275conditionalCreate(14, RecipeDetailComponent_Conditional_1_For_141_Conditional_14_Template, 5, 5, "form", 134);
    \u0275\u0275conditionalCreate(15, RecipeDetailComponent_Conditional_1_For_141_Conditional_15_Template, 3, 0, "div", 135);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((comment_r15.author == null ? null : comment_r15.author.name) || (comment_r15.author == null ? null : comment_r15.author.email) || "\u0427")[0].toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((comment_r15.author == null ? null : comment_r15.author.name) || (comment_r15.author == null ? null : comment_r15.author.email) || "\u0427\u0438\u0442\u0430\u0442\u0435\u043B");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 9, comment_r15.created_at, "dd MMM yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.canDeleteComment(comment_r15) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(comment_r15.rating ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((comment_r15.body == null ? null : comment_r15.body.trim()) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.auth.isAuthenticated() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.replyingToId() === comment_r15.id ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(comment_r15.replies && comment_r15.replies.length > 0 ? 15 : -1);
  }
}
function RecipeDetailComponent_Conditional_1_ForEmpty_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 86);
    \u0275\u0275text(1, "\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438. \u0411\u044A\u0434\u0438 \u043F\u044A\u0440\u0432\u0438!");
    \u0275\u0275elementEnd();
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_143_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-recipe-card", 153);
  }
  if (rf & 2) {
    const r_r20 = ctx.$implicit;
    const \u0275$index_530_r21 = ctx.$index;
    \u0275\u0275property("recipe", r_r20)("index", \u0275$index_530_r21);
  }
}
function RecipeDetailComponent_Conditional_1_Conditional_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 87)(1, "div", 150)(2, "h2");
    \u0275\u0275text(3, "\u041F\u043E\u0434\u043E\u0431\u043D\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 151);
    \u0275\u0275text(5, "\u0412\u0438\u0436 \u0432\u0441\u0438\u0447\u043A\u0438 \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 152);
    \u0275\u0275repeaterCreate(7, RecipeDetailComponent_Conditional_1_Conditional_143_For_8_Template, 1, 2, "app-recipe-card", 153, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r2.relatedRecipes());
  }
}
function RecipeDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275element(2, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275conditionalCreate(4, RecipeDetailComponent_Conditional_1_Conditional_4_Template, 1, 2, "img", 5);
    \u0275\u0275element(5, "div", 6);
    \u0275\u0275elementStart(6, "div", 7)(7, "a", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 9);
    \u0275\u0275element(9, "polyline", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " \u041E\u0431\u0440\u0430\u0442\u043D\u043E \u043A\u044A\u043C \u0440\u0435\u0446\u0435\u043F\u0442\u0438\u0442\u0435 ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, RecipeDetailComponent_Conditional_1_Conditional_11_Template, 2, 1, "span", 11);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "h1");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 12);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 13)(17, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 15);
    \u0275\u0275element(19, "circle", 16)(20, "polyline", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 15);
    \u0275\u0275element(25, "path", 18)(26, "circle", 19)(27, "path", 20)(28, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 15);
    \u0275\u0275element(33, "polyline", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(36, RecipeDetailComponent_Conditional_1_Conditional_36_Template, 5, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 24)(38, "span", 25);
    \u0275\u0275text(39, "\u0421\u043F\u043E\u0434\u0435\u043B\u0438:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "a", 26);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 27);
    \u0275\u0275element(42, "path", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(43, "a", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(44, "svg", 27);
    \u0275\u0275element(45, "path", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(46, "a", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(47, "svg", 27);
    \u0275\u0275element(48, "path", 32)(49, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "button", 34);
    \u0275\u0275listener("click", function RecipeDetailComponent_Conditional_1_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyLink());
    });
    \u0275\u0275conditionalCreate(51, RecipeDetailComponent_Conditional_1_Conditional_51_Template, 2, 0, ":svg:svg", 35)(52, RecipeDetailComponent_Conditional_1_Conditional_52_Template, 3, 0, ":svg:svg", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(53, RecipeDetailComponent_Conditional_1_Conditional_53_Template, 7, 0, "button", 36);
    \u0275\u0275elementStart(54, "button", 37);
    \u0275\u0275listener("click", function RecipeDetailComponent_Conditional_1_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.printRecipe());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(55, "svg", 15);
    \u0275\u0275element(56, "polyline", 38)(57, "path", 39)(58, "rect", 40);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(59, "nav", 41)(60, "button", 42);
    \u0275\u0275listener("click", function RecipeDetailComponent_Conditional_1_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scrollTo("ingredients"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(61, "svg", 43);
    \u0275\u0275element(62, "path", 44)(63, "path", 45)(64, "path", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, " \u0421\u044A\u0441\u0442\u0430\u0432\u043A\u0438 ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(66, "span", 47);
    \u0275\u0275elementStart(67, "button", 42);
    \u0275\u0275listener("click", function RecipeDetailComponent_Conditional_1_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scrollTo("steps"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(68, "svg", 43);
    \u0275\u0275element(69, "line", 48)(70, "line", 49)(71, "line", 50)(72, "line", 51)(73, "line", 52)(74, "line", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275text(75, " \u041F\u0440\u0438\u0433\u043E\u0442\u0432\u044F\u043D\u0435 ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(76, "span", 47);
    \u0275\u0275elementStart(77, "button", 42);
    \u0275\u0275listener("click", function RecipeDetailComponent_Conditional_1_Template_button_click_77_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scrollTo("comments"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(78, "svg", 43);
    \u0275\u0275element(79, "path", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275text(80, " \u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(81, "div", 55)(82, "div", 56)(83, "aside", 57);
    \u0275\u0275conditionalCreate(84, RecipeDetailComponent_Conditional_1_Conditional_84_Template, 6, 7, "button", 58);
    \u0275\u0275elementStart(85, "div", 59)(86, "div", 60);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(87, "svg", 15);
    \u0275\u0275element(88, "path", 44)(89, "path", 45)(90, "path", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(91, "h2");
    \u0275\u0275text(92, "\u0421\u044A\u0441\u0442\u0430\u0432\u043A\u0438");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "span", 61);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(95, RecipeDetailComponent_Conditional_1_Conditional_95_Template, 2, 2, "div", 62);
    \u0275\u0275elementStart(96, "ul", 63);
    \u0275\u0275repeaterCreate(97, RecipeDetailComponent_Conditional_1_For_98_Template, 7, 6, "li", 64, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(99, RecipeDetailComponent_Conditional_1_Conditional_99_Template, 2, 0, "button", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "main", 66);
    \u0275\u0275conditionalCreate(101, RecipeDetailComponent_Conditional_1_Conditional_101_Template, 3, 1, "div", 67);
    \u0275\u0275elementStart(102, "div", 68)(103, "div", 60);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(104, "svg", 15);
    \u0275\u0275element(105, "line", 48)(106, "line", 49)(107, "line", 50)(108, "line", 51)(109, "line", 52)(110, "line", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(111, "h2");
    \u0275\u0275text(112, "\u041F\u0440\u0438\u0433\u043E\u0442\u0432\u044F\u043D\u0435");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "span", 61);
    \u0275\u0275text(114);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "div", 69);
    \u0275\u0275repeaterCreate(116, RecipeDetailComponent_Conditional_1_For_117_Template, 7, 3, "div", 70, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(118, RecipeDetailComponent_Conditional_1_Conditional_118_Template, 6, 0, "div", 71);
    \u0275\u0275elementStart(119, "div", 72)(120, "div", 73);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(121, "svg", 74);
    \u0275\u0275element(122, "polygon", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275text(123, " \u041E\u0446\u0435\u043D\u043A\u0430 ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(124, "div", 76)(125, "span", 77);
    \u0275\u0275text(126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "div", 78);
    \u0275\u0275element(128, "app-star-rating", 79);
    \u0275\u0275elementStart(129, "span", 80);
    \u0275\u0275text(130);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(131, RecipeDetailComponent_Conditional_1_Conditional_131_Template, 4, 1, "div", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(132, RecipeDetailComponent_Conditional_1_Conditional_132_Template, 10, 4, "div", 72)(133, RecipeDetailComponent_Conditional_1_Conditional_133_Template, 10, 0, "div", 82);
    \u0275\u0275elementStart(134, "div", 83)(135, "div", 73);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(136, "svg", 15);
    \u0275\u0275element(137, "path", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275text(138, " \u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438 ");
    \u0275\u0275conditionalCreate(139, RecipeDetailComponent_Conditional_1_Conditional_139_Template, 2, 1, "span", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(140, RecipeDetailComponent_Conditional_1_For_141_Template, 16, 12, "div", 85, _forTrack0, false, RecipeDetailComponent_Conditional_1_ForEmpty_142_Template, 2, 0, "p", 86);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(143, RecipeDetailComponent_Conditional_1_Conditional_143_Template, 9, 0, "section", 87);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const recipe_r2 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("transform", "scaleX(" + ctx_r2.readProgress() + ")");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.heroGradient());
    \u0275\u0275advance();
    \u0275\u0275conditional(recipe_r2.hero_image ? 4 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(recipe_r2.category ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(recipe_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(recipe_r2.excerpt);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", recipe_r2.prep_minutes + recipe_r2.cook_minutes, " \u043C\u0438\u043D");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", recipe_r2.servings, " \u043F\u043E\u0440\u0446\u0438\u0438");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(recipe_r2.difficulty);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.averageRating() ? 36 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("href", "https://www.facebook.com/sharer/sharer.php?u=" + ctx_r2.encodedUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "https://twitter.com/intent/tweet?url=" + ctx_r2.encodedUrl() + "&text=" + ctx_r2.encodedTitle(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "https://wa.me/?text=" + ctx_r2.encodedTitle() + "%20" + ctx_r2.encodedUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r2.copied() ? "\u041A\u043E\u043F\u0438\u0440\u0430\u043D\u043E!" : "\u041A\u043E\u043F\u0438\u0440\u0430\u0439 \u0432\u0440\u044A\u0437\u043A\u0430");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.copied() ? 51 : 52);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.canNativeShare ? 53 : -1);
    \u0275\u0275advance(31);
    \u0275\u0275conditional(ctx_r2.auth.isAuthenticated() ? 84 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate((recipe_r2.ingredients == null ? null : recipe_r2.ingredients.length) || 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.checkedIngredients().size > 0 ? 95 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(recipe_r2.ingredients);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.checkedIngredients().size > 0 ? 99 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(recipe_r2.description ? 101 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("", (recipe_r2.steps == null ? null : recipe_r2.steps.length) || 0, " \u0441\u0442\u044A\u043F\u043A\u0438");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(recipe_r2.steps);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(recipe_r2.tags && recipe_r2.tags.length ? 118 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.averageRating() ? ctx_r2.averageRating().toFixed(1) : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.Math.round(ctx_r2.averageRating() || 0))("interactive", false);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.ratingsCount() > 0 ? ctx_r2.ratingsCount() + " \u043E\u0446\u0435\u043D\u043A\u0438" : "\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.auth.isAuthenticated() ? 131 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.auth.isAuthenticated() ? 132 : 133);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r2.comments().length > 0 ? 139 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.comments());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.relatedRecipes().length > 0 ? 143 : -1);
  }
}
var RecipeDetailComponent = class _RecipeDetailComponent {
  recipeService = inject(RecipeService);
  favoriteService = inject(FavoriteService);
  commentService = inject(CommentService);
  route = inject(ActivatedRoute);
  seo = inject(SeoService);
  toast = inject(ToastService);
  perf = inject(PerfService);
  auth = inject(AuthService);
  Math = Math;
  readProgress = signal(0, ...ngDevMode ? [{ debugName: "readProgress" }] : (
    /* istanbul ignore next */
    []
  ));
  rafPending = false;
  onScroll = () => {
    if (this.rafPending)
      return;
    this.rafPending = true;
    requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      this.readProgress.set(docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0);
      this.rafPending = false;
    });
  };
  checkedIngredients = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "checkedIngredients" }] : (
    /* istanbul ignore next */
    []
  ));
  recipe = signal(null, ...ngDevMode ? [{ debugName: "recipe" }] : (
    /* istanbul ignore next */
    []
  ));
  relatedRecipes = signal([], ...ngDevMode ? [{ debugName: "relatedRecipes" }] : (
    /* istanbul ignore next */
    []
  ));
  comments = signal([], ...ngDevMode ? [{ debugName: "comments" }] : (
    /* istanbul ignore next */
    []
  ));
  averageRating = signal(null, ...ngDevMode ? [{ debugName: "averageRating" }] : (
    /* istanbul ignore next */
    []
  ));
  ratingsCount = signal(0, ...ngDevMode ? [{ debugName: "ratingsCount" }] : (
    /* istanbul ignore next */
    []
  ));
  favoriteStatus = signal(null, ...ngDevMode ? [{ debugName: "favoriteStatus" }] : (
    /* istanbul ignore next */
    []
  ));
  userRating = signal(0, ...ngDevMode ? [{ debugName: "userRating" }] : (
    /* istanbul ignore next */
    []
  ));
  commentBody = signal("", ...ngDevMode ? [{ debugName: "commentBody" }] : (
    /* istanbul ignore next */
    []
  ));
  replyingToId = signal(null, ...ngDevMode ? [{ debugName: "replyingToId" }] : (
    /* istanbul ignore next */
    []
  ));
  replyBody = signal("", ...ngDevMode ? [{ debugName: "replyBody" }] : (
    /* istanbul ignore next */
    []
  ));
  copied = signal(false, ...ngDevMode ? [{ debugName: "copied" }] : (
    /* istanbul ignore next */
    []
  ));
  canNativeShare = typeof navigator !== "undefined" && !!navigator.share;
  favoriting = signal(false, ...ngDevMode ? [{ debugName: "favoriting" }] : (
    /* istanbul ignore next */
    []
  ));
  submittingComment = signal(false, ...ngDevMode ? [{ debugName: "submittingComment" }] : (
    /* istanbul ignore next */
    []
  ));
  submittingReply = signal(false, ...ngDevMode ? [{ debugName: "submittingReply" }] : (
    /* istanbul ignore next */
    []
  ));
  confirmDeleteId = signal(null, ...ngDevMode ? [{ debugName: "confirmDeleteId" }] : (
    /* istanbul ignore next */
    []
  ));
  currentUrl = typeof window !== "undefined" ? window.location.href : "";
  encodedUrl = computed(() => encodeURIComponent(this.currentUrl), ...ngDevMode ? [{ debugName: "encodedUrl" }] : (
    /* istanbul ignore next */
    []
  ));
  encodedTitle = computed(() => encodeURIComponent(this.recipe()?.title || ""), ...ngDevMode ? [{ debugName: "encodedTitle" }] : (
    /* istanbul ignore next */
    []
  ));
  heroGradient = computed(() => {
    const r = this.recipe();
    if (!r)
      return "#1c1917";
    return `linear-gradient(135deg, ${r.hero_palette_from || "#3a3028"}, ${r.hero_palette_to || "#1c1917"})`;
  }, ...ngDevMode ? [{ debugName: "heroGradient" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.route.params.pipe(takeUntilDestroyed()).subscribe((params) => {
      window.scrollTo({ top: 0, behavior: "instant" });
      this.checkedIngredients.set(/* @__PURE__ */ new Set());
      this.loadRecipe(params["slug"]);
    });
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", this.onScroll, { passive: true });
      this.onScroll();
    }
  }
  ngOnDestroy() {
    this.seo.removeJsonLd();
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", this.onScroll);
    }
  }
  toggleIngredient(id) {
    const next = new Set(this.checkedIngredients());
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    this.checkedIngredients.set(next);
  }
  clearIngredients() {
    this.checkedIngredients.set(/* @__PURE__ */ new Set());
  }
  copyLink() {
    navigator.clipboard.writeText(this.currentUrl).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2e3);
    });
  }
  nativeShare() {
    const r = this.recipe();
    navigator.share({ title: r?.title || "", text: r?.excerpt || "", url: this.currentUrl }).catch(() => {
    });
  }
  loadRecipe(slug) {
    this.perf.mark("recipe_detail_fetch_start");
    this.recipeService.getRecipe(slug).pipe(takeUntilDestroyed()).subscribe({
      next: (res) => {
        this.recipe.set(res.recipe);
        this.averageRating.set(res.averageRating);
        this.ratingsCount.set(res.ratingsCount);
        this.comments.set(res.recipe.comments || []);
        this.seo.set({
          title: res.recipe.title,
          description: res.recipe.excerpt || res.recipe.description?.slice(0, 155) || "",
          image: res.recipe.hero_image || void 0,
          type: "article"
        });
        this.seo.setJsonLd(this.buildJsonLd(res.recipe, res.averageRating, res.ratingsCount));
        if (this.auth.isAuthenticated() && this.auth.user()) {
          const userId = this.auth.user().id;
          const userComment = this.comments().find((c) => c.user_id === userId);
          if (userComment?.rating)
            this.userRating.set(userComment.rating);
          if (userComment?.body)
            this.commentBody.set(userComment.body);
        }
        this.perf.mark("recipe_detail_ready");
        this.perf.measure("recipe_detail_load", "recipe_detail_fetch_start", "recipe_detail_ready");
      },
      error: () => this.toast.error("\u0420\u0435\u0446\u0435\u043F\u0442\u0430\u0442\u0430 \u043D\u0435 \u0431\u0435\u0448\u0435 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0430.")
    });
    this.recipeService.getRelatedRecipes(slug).pipe(takeUntilDestroyed()).subscribe({
      next: (r) => this.relatedRecipes.set(r),
      error: () => {
      }
    });
    if (this.auth.isAuthenticated()) {
      this.favoriteService.getFavoriteStatus(slug).pipe(takeUntilDestroyed()).subscribe({
        next: (s) => this.favoriteStatus.set(s),
        error: () => {
        }
      });
    }
  }
  buildJsonLd(recipe, avgRating, ratingsCount) {
    const base = {
      "@context": "https://schema.org",
      "@type": "Recipe",
      name: recipe.title,
      description: recipe.excerpt || recipe.description || "",
      prepTime: `PT${recipe.prep_minutes}M`,
      cookTime: `PT${recipe.cook_minutes}M`,
      totalTime: `PT${recipe.prep_minutes + recipe.cook_minutes}M`,
      recipeYield: `${recipe.servings} \u043F\u043E\u0440\u0446\u0438\u0438`,
      recipeCategory: recipe.category?.name || "",
      recipeIngredient: recipe.ingredients?.map((i) => `${i.amount} ${i.name}`) || [],
      recipeInstructions: recipe.steps?.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        text: s.description
      })) || []
    };
    if (recipe.hero_image)
      base["image"] = recipe.hero_image;
    if (avgRating && ratingsCount > 0) {
      base["aggregateRating"] = {
        "@type": "AggregateRating",
        ratingValue: avgRating,
        reviewCount: ratingsCount,
        bestRating: 5,
        worstRating: 1
      };
    }
    return base;
  }
  scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  printRecipe() {
    window.print();
  }
  toggleFavorite() {
    const r = this.recipe();
    if (!r || this.favoriting())
      return;
    this.favoriting.set(true);
    this.favoriteService.toggleFavorite(r.slug).subscribe({
      next: (s) => {
        this.favoriteStatus.set(s);
        this.favoriting.set(false);
        this.toast.success(s.isFavorite ? "\u0414\u043E\u0431\u0430\u0432\u0435\u043D\u043E \u0432 \u043B\u044E\u0431\u0438\u043C\u0438." : "\u041F\u0440\u0435\u043C\u0430\u0445\u043D\u0430\u0442\u043E \u043E\u0442 \u043B\u044E\u0431\u0438\u043C\u0438.");
      },
      error: () => {
        this.favoriting.set(false);
        this.toast.error("\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0430\u0437\u0432\u0430\u043D\u0435.");
      }
    });
  }
  onRate(rating) {
    const r = this.recipe();
    if (!r)
      return;
    this.commentService.rate(r.slug, rating).subscribe({
      next: (res) => {
        this.userRating.set(res.rating);
        this.averageRating.set(res.averageRating);
        this.ratingsCount.set(res.ratingsCount);
        this.toast.success("\u041E\u0446\u0435\u043D\u043A\u0430\u0442\u0430 \u0435 \u0437\u0430\u043F\u0430\u0437\u0435\u043D\u0430.");
      },
      error: () => this.toast.error("\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u043E\u0446\u0435\u043D\u044F\u0432\u0430\u043D\u0435.")
    });
  }
  onComment(e) {
    e.preventDefault();
    const r = this.recipe();
    if (!r || !this.commentBody().trim() || this.submittingComment())
      return;
    this.submittingComment.set(true);
    this.commentService.comment(r.slug, this.commentBody(), this.userRating() || void 0).subscribe({
      next: (comment) => {
        const current = this.comments();
        const idx = current.findIndex((c) => c.id === comment.id);
        this.comments.set(idx >= 0 ? current.map((c, i) => i === idx ? comment : c) : [comment, ...current]);
        this.commentBody.set("");
        this.submittingComment.set(false);
        this.toast.success("\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u044A\u0442 \u0435 \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D.");
      },
      error: () => {
        this.submittingComment.set(false);
        this.toast.error("\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D\u0435 \u043D\u0430 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440.");
      }
    });
  }
  startReply(commentId) {
    this.replyingToId.set(this.replyingToId() === commentId ? null : commentId);
    this.replyBody.set("");
  }
  submitReply(e, parentId) {
    e.preventDefault();
    const r = this.recipe();
    if (!r || !this.replyBody().trim() || this.submittingReply())
      return;
    this.submittingReply.set(true);
    this.commentService.comment(r.slug, this.replyBody(), void 0, parentId).subscribe({
      next: (reply) => {
        this.comments.set(this.comments().map((c) => c.id === parentId ? __spreadProps(__spreadValues({}, c), { replies: [...c.replies || [], reply] }) : c));
        this.replyingToId.set(null);
        this.replyBody.set("");
        this.submittingReply.set(false);
        this.toast.success("\u041E\u0442\u0433\u043E\u0432\u043E\u0440\u044A\u0442 \u0435 \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D.");
      },
      error: () => {
        this.submittingReply.set(false);
        this.toast.error("\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u043D\u0435 \u043D\u0430 \u043E\u0442\u0433\u043E\u0432\u043E\u0440.");
      }
    });
  }
  confirmDelete(id) {
    this.confirmDeleteId.set(id);
  }
  canDeleteComment(comment) {
    if (!this.auth.isAuthenticated())
      return false;
    const user = this.auth.user();
    if (!user)
      return false;
    return user.role === "ADMIN" || user.id === comment.user_id;
  }
  deleteComment(id) {
    this.confirmDeleteId.set(null);
    this.commentService.delete(id).subscribe({
      next: () => {
        this.comments.set(this.comments().filter((c) => c.id !== id).map((c) => __spreadProps(__spreadValues({}, c), { replies: c.replies?.filter((r) => r.id !== id) || [] })));
        this.toast.success("\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u044A\u0442 \u0435 \u0438\u0437\u0442\u0440\u0438\u0442.");
      },
      error: () => this.toast.error("\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u0438\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435.")
    });
  }
  static \u0275fac = function RecipeDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecipeDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecipeDetailComponent, selectors: [["app-recipe-detail"]], decls: 2, vars: 2, consts: [["title", "\u0418\u0437\u0442\u0440\u0438\u0439 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440", "message", "\u0421\u0438\u0433\u0443\u0440\u043D\u0438 \u043B\u0438 \u0441\u0442\u0435, \u0447\u0435 \u0438\u0441\u043A\u0430\u0442\u0435 \u0434\u0430 \u0438\u0437\u0442\u0440\u0438\u0435\u0442\u0435 \u0442\u043E\u0437\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440? \u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u0442\u043E \u0435 \u043D\u0435\u043E\u0431\u0440\u0430\u0442\u0438\u043C\u043E.", "confirmLabel", "\u0418\u0437\u0442\u0440\u0438\u0439", 3, "confirmed", "cancelled", "open"], [1, "detail-page"], ["aria-hidden", "true", 1, "read-progress"], [1, "read-progress-bar"], [1, "hero-banner"], ["fetchpriority", "high", "loading", "eager", 1, "hero-img", 3, "src", "alt"], ["aria-hidden", "true", 1, "hero-overlay"], [1, "hero-content"], ["routerLink", "/recipes", 1, "back-link"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round"], ["points", "15 18 9 12 15 6"], [1, "hero-badge"], [1, "hero-excerpt"], [1, "stat-pills"], [1, "stat-pill"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["points", "22 12 18 12 15 21 9 3 6 12 2 12"], [1, "stat-pill", "stat-pill-gold"], [1, "share-bar"], [1, "share-label"], ["target", "_blank", "rel", "noopener", "title", "Facebook", 1, "share-btn", "share-fb", 3, "href"], ["viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"], ["target", "_blank", "rel", "noopener", "title", "X", 1, "share-btn", "share-x", 3, "href"], ["d", "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"], ["target", "_blank", "rel", "noopener", "title", "WhatsApp", 1, "share-btn", "share-wa", 3, "href"], ["d", "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"], ["d", "M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.531 5.855L.057 23.885l6.196-1.452A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.88 9.88 0 0 1-5.031-1.37l-.361-.214-3.735.875.892-3.653-.235-.374A9.867 9.867 0 0 1 2.118 12C2.118 6.52 6.52 2.118 12 2.118S21.882 6.52 21.882 12 17.48 21.882 12 21.882z"], [1, "share-btn", "share-copy", 3, "click", "title"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["title", "\u0421\u043F\u043E\u0434\u0435\u043B\u0438", 1, "share-btn", "share-native"], ["title", "\u041F\u0440\u0438\u043D\u0442\u0438\u0440\u0430\u0439", 1, "share-btn", "share-print", 3, "click"], ["points", "6 9 6 2 18 2 18 9"], ["d", "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"], ["x", "6", "y", "14", "width", "12", "height", "8"], ["aria-label", "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u0432 \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u0442\u0430", 1, "jump-nav"], ["type", "button", 1, "jump-link", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"], ["d", "M7 2v20"], ["d", "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"], ["aria-hidden", "true", 1, "jump-sep"], ["x1", "8", "y1", "6", "x2", "21", "y2", "6"], ["x1", "8", "y1", "12", "x2", "21", "y2", "12"], ["x1", "8", "y1", "18", "x2", "21", "y2", "18"], ["x1", "3", "y1", "6", "x2", "3.01", "y2", "6"], ["x1", "3", "y1", "12", "x2", "3.01", "y2", "12"], ["x1", "3", "y1", "18", "x2", "3.01", "y2", "18"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], [1, "body-wrap"], [1, "content-grid"], [1, "sidebar"], [1, "favorite-btn", 3, "favorited", "disabled"], ["id", "ingredients", 1, "section-card"], [1, "section-heading"], [1, "count-badge"], [1, "ing-progress"], [1, "ingredients-list"], ["role", "checkbox", "tabindex", "0", 3, "checked"], [1, "ing-reset"], [1, "main-content"], [1, "prose-card"], ["id", "steps", 1, "section-card"], [1, "steps-list"], [1, "step-item"], [1, "tags-row"], [1, "panel-card"], [1, "card-label"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "star-icon"], ["points", "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"], [1, "avg-row"], [1, "avg-num"], [1, "avg-meta"], [3, "value", "interactive"], [1, "rating-count"], [1, "user-rating"], [1, "panel-card", "login-prompt"], ["id", "comments", 1, "panel-card"], [1, "count-badge", "ml"], [1, "comment"], [1, "no-comments"], [1, "related-section"], ["points", "20 6 9 17 4 12"], ["x", "9", "y", "9", "width", "13", "height", "13", "rx", "2", "ry", "2"], ["d", "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"], ["title", "\u0421\u043F\u043E\u0434\u0435\u043B\u0438", 1, "share-btn", "share-native", 3, "click"], ["cx", "18", "cy", "5", "r", "3"], ["cx", "6", "cy", "12", "r", "3"], ["cx", "18", "cy", "19", "r", "3"], ["x1", "8.59", "y1", "13.51", "x2", "15.42", "y2", "17.49"], ["x1", "15.41", "y1", "6.51", "x2", "8.59", "y2", "10.49"], [1, "favorite-btn", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true", 1, "spin"], ["viewBox", "0 0 24 24", "fill", "var(--clr-error)", "stroke", "var(--clr-error)", "stroke-width", "2", "aria-hidden", "true"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["cx", "12", "cy", "12", "r", "10", "stroke-dasharray", "32", "stroke-dashoffset", "24"], ["d", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"], [1, "ing-progress-bar"], ["role", "checkbox", "tabindex", "0", 3, "click", "keydown.space", "keydown.enter"], ["aria-hidden", "true", 1, "ing-check"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "ing-amount"], [1, "ing-name"], [1, "ing-reset", 3, "click"], [1, "step-num"], [1, "step-body"], ["d", "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"], ["x1", "7", "y1", "7", "x2", "7.01", "y2", "7"], [1, "tag"], [3, "rated", "value"], [3, "submit"], ["name", "body", "placeholder", "\u041D\u0430\u043F\u0438\u0448\u0438 \u043C\u043D\u0435\u043D\u0438\u0435\u0442\u043E \u0441\u0438...", "rows", "4", "maxlength", "2000", 1, "comment-textarea", 3, "ngModelChange", "ngModel", "disabled"], ["type", "submit", 1, "submit-btn", 3, "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"], ["x1", "22", "y1", "2", "x2", "11", "y2", "13"], ["points", "22 2 15 22 11 13 2 9 22 2"], ["d", "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"], ["points", "10 17 15 12 10 7"], ["x1", "15", "y1", "12", "x2", "3", "y2", "12"], ["routerLink", "/signin"], [1, "comment-header"], [1, "comment-avatar"], [1, "comment-meta"], [1, "comment-date"], ["aria-label", "\u0418\u0437\u0442\u0440\u0438\u0439 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440", 1, "delete-comment-btn"], [1, "comment-rating"], [1, "comment-body"], [1, "reply-btn"], [1, "reply-form"], [1, "replies"], ["aria-label", "\u0418\u0437\u0442\u0440\u0438\u0439 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440", 1, "delete-comment-btn", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14H6L5 6"], ["d", "M10 11v6M14 11v6"], ["d", "M9 6V4h6v2"], [1, "reply-btn", 3, "click"], ["points", "9 17 4 12 9 7"], ["d", "M20 18v-2a4 4 0 0 0-4-4H4"], [1, "reply-form", 3, "submit"], ["rows", "2", "placeholder", "\u041D\u0430\u043F\u0438\u0448\u0438 \u043E\u0442\u0433\u043E\u0432\u043E\u0440...", "maxlength", "1000", 3, "ngModelChange", "ngModel", "name", "disabled"], [1, "reply"], [1, "comment-avatar", "reply-avatar"], ["aria-label", "\u0418\u0437\u0442\u0440\u0438\u0439 \u043E\u0442\u0433\u043E\u0432\u043E\u0440", 1, "delete-comment-btn"], ["aria-label", "\u0418\u0437\u0442\u0440\u0438\u0439 \u043E\u0442\u0433\u043E\u0432\u043E\u0440", 1, "delete-comment-btn", 3, "click"], [1, "related-header"], ["routerLink", "/recipes", 1, "related-link"], [1, "related-grid"], [3, "recipe", "index"]], template: function RecipeDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-confirm-modal", 0);
      \u0275\u0275listener("confirmed", function RecipeDetailComponent_Template_app_confirm_modal_confirmed_0_listener() {
        return ctx.deleteComment(ctx.confirmDeleteId());
      })("cancelled", function RecipeDetailComponent_Template_app_confirm_modal_cancelled_0_listener() {
        return ctx.confirmDeleteId.set(null);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(1, RecipeDetailComponent_Conditional_1_Template, 144, 34, "div", 1);
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275property("open", ctx.confirmDeleteId() !== null);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_1_0 = ctx.recipe()) ? 1 : -1, tmp_1_0);
    }
  }, dependencies: [RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, RecipeCardComponent, StarRatingComponent, ConfirmModalComponent, DatePipe], styles: ['\n.detail-page[_ngcontent-%COMP%] {\n  min-height: 100dvh;\n  background-color: var(--clr-bg, #faf7f4);\n  background-image: url(/backgrounds/cooking-pattern.svg);\n  background-size: 500px;\n  background-repeat: repeat;\n}\n.read-progress[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  z-index: 51;\n  pointer-events: none;\n  background: transparent;\n}\n.read-progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--clr-brand);\n  transform-origin: left;\n  transform: scaleX(0);\n  will-change: transform;\n  box-shadow: 0 0 8px color-mix(in oklch, var(--clr-brand) 45%, transparent);\n}\n@media (prefers-reduced-motion: reduce) {\n  .read-progress-bar[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.hero-banner[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 520px;\n  display: flex;\n  align-items: flex-end;\n  overflow: hidden;\n}\n.hero-img[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.9) 0%,\n      rgba(0, 0, 0, 0.5) 40%,\n      rgba(0, 0, 0, 0.1) 75%,\n      rgba(0, 0, 0, 0) 100%);\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  padding: 3rem 1.5rem 2.5rem;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  color: rgba(255, 255, 255, 0.85);\n  text-decoration: none;\n  font-size: 0.82rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  margin-right: 0.5rem;\n  transition: color 0.2s;\n}\n.back-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 0.75rem;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: var(--clr-green-text);\n  background: var(--clr-green-bg);\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  margin-bottom: 0.75rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: var(--font-display, "Alegreya", Georgia, serif);\n  font-size: clamp(1.8rem, 4vw, 3rem);\n  color: #ffffff;\n  margin: 0 0 0.75rem;\n  line-height: 1.1;\n  letter-spacing: -0.02em;\n  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);\n}\n.hero-excerpt[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.88);\n  font-size: 1.05rem;\n  line-height: 1.7;\n  margin: 0 0 1.5rem;\n  font-weight: 300;\n  max-width: 600px;\n}\n.stat-pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n.stat-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.4rem 0.9rem;\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 9999px;\n  color: #fff;\n  font-size: 0.82rem;\n  font-weight: 500;\n}\n.stat-pill[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.stat-pill-gold[_ngcontent-%COMP%] {\n  background: color-mix(in oklch, var(--clr-amber) 20%, transparent);\n  border-color: color-mix(in oklch, var(--clr-amber) 50%, transparent);\n  color: var(--clr-amber);\n}\n.stat-pill-gold[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: var(--clr-amber);\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.share-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n}\n.share-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.6);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-right: 0.25rem;\n}\n.share-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.1rem;\n  height: 2.1rem;\n  border-radius: 50%;\n  border: 1.5px solid rgba(255, 255, 255, 0.3);\n  background: rgba(255, 255, 255, 0.12);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  color: #fff;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.2s, transform 0.2s;\n}\n.share-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.share-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.share-fb[_ngcontent-%COMP%]:hover {\n  background: #1877f2;\n  border-color: #1877f2;\n}\n.share-x[_ngcontent-%COMP%]:hover {\n  background: #000;\n  border-color: #000;\n}\n.share-wa[_ngcontent-%COMP%]:hover {\n  background: #25d366;\n  border-color: #25d366;\n}\n.share-copy[_ngcontent-%COMP%]:hover, \n.share-native[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n.body-wrap[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2.5rem 1.5rem;\n}\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  grid-template-areas: "main aside";\n  gap: 2rem;\n  align-items: start;\n}\n.main-content[_ngcontent-%COMP%] {\n  grid-area: main;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.sidebar[_ngcontent-%COMP%] {\n  grid-area: aside;\n}\n.prose-card[_ngcontent-%COMP%] {\n  background: var(--clr-surface);\n  border-radius: 1.25rem;\n  padding: 1.5rem;\n  border: 1px solid var(--clr-border-faint);\n  box-shadow: var(--shadow-sm);\n}\n.prose-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--clr-text-muted);\n  line-height: 1.85;\n  margin: 0;\n  font-size: 1rem;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: var(--clr-surface);\n  border-radius: 1.25rem;\n  padding: 1.5rem;\n  border: 1px solid var(--clr-border-faint);\n  box-shadow: var(--shadow-sm);\n  scroll-margin-top: 8rem;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 1.25rem;\n}\n.section-heading[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--clr-green);\n  flex-shrink: 0;\n}\nh2[_ngcontent-%COMP%] {\n  font-family: var(--font-display, "Alegreya", Georgia, serif);\n  font-size: 1.25rem;\n  color: var(--clr-text);\n  margin: 0;\n}\n.count-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--clr-green-text);\n  background: var(--clr-green-bg);\n  padding: 0.2rem 0.6rem;\n  border-radius: 9999px;\n}\n.count-badge.ml[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.ing-progress[_ngcontent-%COMP%] {\n  height: 3px;\n  background: rgba(0, 0, 0, 0.06);\n  border-radius: 9999px;\n  margin-bottom: 1rem;\n  overflow: hidden;\n}\n.ing-progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background: var(--clr-green);\n  border-radius: 9999px;\n  transform-origin: left;\n  transform: scaleX(0);\n  transition: transform 0.4s var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1));\n}\n.ingredients-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.ingredients-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.65rem 0.4rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  font-size: 0.925rem;\n  cursor: pointer;\n  border-radius: 0.5rem;\n  transition: background 0.15s, opacity 0.25s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.ingredients-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ingredients-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.025);\n}\n.ingredients-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--clr-green);\n  outline-offset: 1px;\n}\n.ingredients-list[_ngcontent-%COMP%]   li.checked[_ngcontent-%COMP%] {\n  opacity: 0.45;\n}\n.ingredients-list[_ngcontent-%COMP%]   li.checked[_ngcontent-%COMP%]   .ing-name[_ngcontent-%COMP%], \n.ingredients-list[_ngcontent-%COMP%]   li.checked[_ngcontent-%COMP%]   .ing-amount[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n.ing-check[_ngcontent-%COMP%] {\n  width: 1.1rem;\n  height: 1.1rem;\n  border-radius: 50%;\n  border: 1.5px solid rgba(0, 0, 0, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: background 0.2s, border-color 0.2s;\n}\n.ing-check[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.6rem;\n  height: 0.6rem;\n  display: none;\n}\nli.checked[_ngcontent-%COMP%]   .ing-check[_ngcontent-%COMP%] {\n  background: var(--clr-green);\n  border-color: var(--clr-green);\n}\nli.checked[_ngcontent-%COMP%]   .ing-check[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  stroke: #ffffff;\n}\n.ing-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--clr-text);\n  min-width: 70px;\n}\n.ing-name[_ngcontent-%COMP%] {\n  color: var(--clr-text-muted);\n}\n.ing-reset[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  background: none;\n  border: none;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--clr-text-muted);\n  cursor: pointer;\n  padding: 0.25rem 0;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n  transition: color 0.15s var(--ease-out-expo);\n}\n.ing-reset[_ngcontent-%COMP%]:hover {\n  color: var(--clr-text);\n}\n.steps-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.step-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.step-num[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 50%;\n  background: var(--clr-green);\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 2px;\n}\n.step-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--clr-text);\n  margin: 0 0 0.3rem;\n}\n.step-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--clr-text-muted);\n  line-height: 1.75;\n  font-size: 0.925rem;\n}\n.tags-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.tags-row[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.9rem;\n  height: 0.9rem;\n  color: var(--clr-text-muted);\n  flex-shrink: 0;\n}\n.tag[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.85rem;\n  background: var(--clr-surface-hover);\n  border-radius: 9999px;\n  font-size: 0.78rem;\n  color: var(--clr-text-muted);\n  font-weight: 500;\n}\n.jump-nav[_ngcontent-%COMP%] {\n  background: var(--clr-surface, #fff);\n  border-bottom: 1px solid var(--clr-border-faint, rgba(0, 0, 0, 0.06));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0;\n  position: sticky;\n  top: 4rem;\n  z-index: 10;\n  padding: 0;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);\n}\n.jump-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.85rem 1.5rem;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--clr-text-muted);\n  text-decoration: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-family: inherit;\n  transition: color 0.2s var(--ease-out-expo), background 0.2s var(--ease-out-expo);\n  position: relative;\n  white-space: nowrap;\n}\n.jump-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.85rem;\n  height: 0.85rem;\n  flex-shrink: 0;\n}\n.jump-link[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 1rem;\n  right: 1rem;\n  height: 2px;\n  background: var(--clr-green);\n  border-radius: 2px;\n  transform: scaleX(0);\n  transition: transform 0.2s var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1));\n}\n.jump-link[_ngcontent-%COMP%]:hover {\n  color: var(--clr-text);\n  background: var(--clr-surface-hover);\n}\n.jump-link[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1);\n}\n.jump-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 1.2rem;\n  background: var(--clr-border);\n  flex-shrink: 0;\n}\n.sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  position: sticky;\n  top: 7.25rem;\n  max-height: calc(100dvh - 8rem);\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(0, 0, 0, 0.12) transparent;\n  padding-right: 2px;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n}\n.favorite-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.85rem;\n  border-radius: 1rem;\n  border: 1.5px solid var(--clr-border);\n  background: var(--clr-surface);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    box-shadow 0.2s var(--ease-out-expo),\n    background 0.18s var(--ease-out-expo),\n    color 0.18s var(--ease-out-expo),\n    border-color 0.18s var(--ease-out-expo);\n  color: var(--clr-text-muted);\n}\n.favorite-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.favorite-btn.favorited[_ngcontent-%COMP%] {\n  background: var(--clr-error-bg);\n  border-color: var(--clr-error);\n  color: var(--clr-error);\n}\n.favorite-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: var(--shadow-md);\n}\n.favorite-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: wait;\n}\n.sidebar-card[_ngcontent-%COMP%], \n.panel-card[_ngcontent-%COMP%] {\n  background: var(--clr-surface);\n  border-radius: 1.25rem;\n  padding: 1.5rem;\n  border: 1px solid var(--clr-border-faint);\n  box-shadow: var(--shadow-sm);\n  scroll-margin-top: 8rem;\n}\n.card-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: var(--clr-green);\n  margin-bottom: 1rem;\n}\n.card-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.star-icon[_ngcontent-%COMP%] {\n  fill: var(--clr-amber);\n  color: var(--clr-amber);\n}\n.avg-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 0.5rem;\n}\n.avg-num[_ngcontent-%COMP%] {\n  font-family: var(--font-display, "Alegreya", Georgia, serif);\n  font-size: 3rem;\n  font-weight: 700;\n  color: var(--clr-text);\n  line-height: 1;\n}\n.avg-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.rating-count[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--clr-text-muted);\n}\n.user-rating[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--clr-border-faint);\n}\n.user-rating[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--clr-text-muted);\n  margin: 0 0 0.4rem;\n  font-weight: 600;\n}\n.comment-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1.5px solid var(--clr-border);\n  border-radius: 0.75rem;\n  font-size: 0.875rem;\n  resize: vertical;\n  outline: none;\n  box-sizing: border-box;\n  color: var(--clr-text);\n  font-family: inherit;\n  background: var(--clr-surface-alt);\n  transition:\n    border-color 0.2s var(--ease-out-expo),\n    box-shadow 0.2s var(--ease-out-expo),\n    background 0.2s var(--ease-out-expo);\n}\n.comment-textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--clr-green);\n  box-shadow: 0 0 0 3px color-mix(in oklch, var(--clr-green) 12%, transparent);\n  background: var(--clr-surface);\n}\n.submit-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  margin-top: 0.75rem;\n  padding: 0.6rem 1.25rem;\n  background: var(--clr-green);\n  color: #ffffff;\n  border: none;\n  border-radius: 9999px;\n  font-weight: 700;\n  cursor: pointer;\n  font-size: 0.85rem;\n  transition: background 0.18s var(--ease-out-expo);\n}\n.submit-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--clr-green-dark);\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.75s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.login-prompt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n}\n.login-prompt[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--clr-text-muted);\n  flex-shrink: 0;\n}\n.login-prompt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--clr-text-muted);\n  margin: 0;\n}\n.login-prompt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--clr-green);\n  font-weight: 700;\n  text-decoration: none;\n}\n.login-prompt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.comment[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.comment[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.comment-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin-bottom: 0.5rem;\n}\n.comment-avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background: var(--clr-green);\n  color: #ffffff;\n  font-size: 0.8rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.comment-meta[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.comment-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--clr-text);\n  display: block;\n}\n.comment-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--clr-text-muted);\n}\n.comment-rating[_ngcontent-%COMP%] {\n  margin-bottom: 0.4rem;\n}\n.comment-body[_ngcontent-%COMP%] {\n  color: var(--clr-text-muted);\n  font-size: 0.875rem;\n  line-height: 1.65;\n  margin: 0;\n}\n.delete-comment-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--clr-text-muted);\n  padding: 0.25rem;\n  border-radius: 0.4rem;\n  display: flex;\n  transition: color 0.18s var(--ease-out-expo), background 0.18s var(--ease-out-expo);\n}\n.delete-comment-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.delete-comment-btn[_ngcontent-%COMP%]:hover {\n  color: var(--clr-error);\n  background: var(--clr-error-bg);\n}\n.no-comments[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--clr-text-muted);\n  text-align: center;\n  padding: 1rem 0;\n  margin: 0;\n}\n.related-section[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1.5rem 4rem;\n}\n.related-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.related-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--font-display, "Alegreya", Georgia, serif);\n  font-size: 1.5rem;\n  color: var(--clr-text);\n  margin: 0;\n}\n.related-link[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--clr-green);\n  text-decoration: none;\n}\n.related-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.related-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.5rem;\n}\n.reply-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  margin-top: 0.4rem;\n  padding: 0.25rem 0.6rem;\n  background: none;\n  border: none;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--clr-text-muted);\n  cursor: pointer;\n  border-radius: 0.5rem;\n  transition: background 0.15s var(--ease-out-expo), color 0.15s var(--ease-out-expo);\n}\n.reply-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.reply-btn[_ngcontent-%COMP%]:hover {\n  background: var(--clr-surface-hover);\n  color: var(--clr-brand);\n}\n.reply-form[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.reply-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0.5rem 0.75rem;\n  border: 1.5px solid var(--clr-border);\n  border-radius: 0.625rem;\n  font-size: 0.85rem;\n  font-family: inherit;\n  resize: vertical;\n  background: var(--clr-surface-alt);\n  color: var(--clr-text);\n}\n.reply-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--clr-green);\n}\n.replies[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  padding-left: 1rem;\n  border-left: 1px solid var(--clr-border-faint);\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n.reply[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n.reply-avatar[_ngcontent-%COMP%] {\n  width: 1.5rem !important;\n  height: 1.5rem !important;\n  font-size: 0.65rem !important;\n}\n@media print {\n  app-header[_ngcontent-%COMP%], \n   app-footer[_ngcontent-%COMP%], \n   .share-bar[_ngcontent-%COMP%], \n   .related-section[_ngcontent-%COMP%], \n   .back-link[_ngcontent-%COMP%], \n   .hero-overlay[_ngcontent-%COMP%], \n   .read-progress[_ngcontent-%COMP%], \n   .favorite-btn[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .hero-banner[_ngcontent-%COMP%] {\n    min-height: auto !important;\n  }\n  .hero-img[_ngcontent-%COMP%] {\n    position: static !important;\n    width: 100% !important;\n    height: 300px !important;\n    object-fit: cover;\n  }\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n    grid-template-areas: "aside" "main" !important;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    position: static !important;\n    max-height: none !important;\n    overflow: visible !important;\n  }\n  .body-wrap[_ngcontent-%COMP%] {\n    padding: 1rem !important;\n  }\n}\n@media (max-width: 900px) {\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-areas: "aside" "main";\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n  .hero-banner[_ngcontent-%COMP%] {\n    min-height: 420px;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    position: static;\n    max-height: none;\n    overflow-y: visible;\n  }\n  .jump-link[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n    font-size: 0.78rem;\n  }\n}\n@media (max-width: 640px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .related-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero-banner[_ngcontent-%COMP%] {\n    min-height: 360px;\n  }\n  .jump-nav[_ngcontent-%COMP%] {\n    gap: 0;\n    justify-content: stretch;\n  }\n  .jump-link[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n    padding: 0.75rem 0.5rem;\n    font-size: 0.72rem;\n    gap: 0.3rem;\n  }\n  .jump-sep[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=recipe-detail.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecipeDetailComponent, [{
    type: Component,
    args: [{ selector: "app-recipe-detail", standalone: true, imports: [RouterLink, DatePipe, FormsModule, RecipeCardComponent, StarRatingComponent, ConfirmModalComponent], template: `
    <app-confirm-modal
      [open]="confirmDeleteId() !== null"
      title="\u0418\u0437\u0442\u0440\u0438\u0439 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440"
      message="\u0421\u0438\u0433\u0443\u0440\u043D\u0438 \u043B\u0438 \u0441\u0442\u0435, \u0447\u0435 \u0438\u0441\u043A\u0430\u0442\u0435 \u0434\u0430 \u0438\u0437\u0442\u0440\u0438\u0435\u0442\u0435 \u0442\u043E\u0437\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440? \u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u0442\u043E \u0435 \u043D\u0435\u043E\u0431\u0440\u0430\u0442\u0438\u043C\u043E."
      confirmLabel="\u0418\u0437\u0442\u0440\u0438\u0439"
      (confirmed)="deleteComment(confirmDeleteId()!)"
      (cancelled)="confirmDeleteId.set(null)">
    </app-confirm-modal>

    @if (recipe(); as recipe) {
      <div class="detail-page">

        <!-- Reading progress bar -->
        <div class="read-progress" aria-hidden="true">
          <div class="read-progress-bar" [style.transform]="'scaleX(' + readProgress() + ')'"></div>
        </div>

        <!-- Full-bleed hero image -->
        <div class="hero-banner" [style.background]="heroGradient()">
          @if (recipe.hero_image) {
            <img [src]="recipe.hero_image" [alt]="recipe.title" class="hero-img" fetchpriority="high" loading="eager" />
          }
          <div class="hero-overlay" aria-hidden="true"></div>
          <div class="hero-content">
            <a routerLink="/recipes" class="back-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
              \u041E\u0431\u0440\u0430\u0442\u043D\u043E \u043A\u044A\u043C \u0440\u0435\u0446\u0435\u043F\u0442\u0438\u0442\u0435
            </a>
            @if (recipe.category) {
              <span class="hero-badge">{{ recipe.category.name }}</span>
            }
            <h1>{{ recipe.title }}</h1>
            <p class="hero-excerpt">{{ recipe.excerpt }}</p>

            <!-- Stat pills -->
            <div class="stat-pills">
              <div class="stat-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>{{ recipe.prep_minutes + recipe.cook_minutes }} \u043C\u0438\u043D</span>
              </div>
              <div class="stat-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <span>{{ recipe.servings }} \u043F\u043E\u0440\u0446\u0438\u0438</span>
              </div>
              <div class="stat-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                <span>{{ recipe.difficulty }}</span>
              </div>
              @if (averageRating()) {
                <div class="stat-pill stat-pill-gold">
                  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <span>{{ averageRating()!.toFixed(1) }}</span>
                </div>
              }
            </div>

            <!-- Share bar -->
            <div class="share-bar">
              <span class="share-label">\u0421\u043F\u043E\u0434\u0435\u043B\u0438:</span>
              <a class="share-btn share-fb" [href]="'https://www.facebook.com/sharer/sharer.php?u=' + encodedUrl()" target="_blank" rel="noopener" title="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a class="share-btn share-x" [href]="'https://twitter.com/intent/tweet?url=' + encodedUrl() + '&text=' + encodedTitle()" target="_blank" rel="noopener" title="X">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a class="share-btn share-wa" [href]="'https://wa.me/?text=' + encodedTitle() + '%20' + encodedUrl()" target="_blank" rel="noopener" title="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.531 5.855L.057 23.885l6.196-1.452A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.88 9.88 0 0 1-5.031-1.37l-.361-.214-3.735.875.892-3.653-.235-.374A9.867 9.867 0 0 1 2.118 12C2.118 6.52 6.52 2.118 12 2.118S21.882 6.52 21.882 12 17.48 21.882 12 21.882z"/></svg>
              </a>
              <button class="share-btn share-copy" (click)="copyLink()" [title]="copied() ? '\u041A\u043E\u043F\u0438\u0440\u0430\u043D\u043E!' : '\u041A\u043E\u043F\u0438\u0440\u0430\u0439 \u0432\u0440\u044A\u0437\u043A\u0430'">
                @if (copied()) {
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                } @else {
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                }
              </button>
              @if (canNativeShare) {
                <button class="share-btn share-native" (click)="nativeShare()" title="\u0421\u043F\u043E\u0434\u0435\u043B\u0438">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                </button>
              }
              <button class="share-btn share-print" (click)="printRecipe()" title="\u041F\u0440\u0438\u043D\u0442\u0438\u0440\u0430\u0439">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Jump-to nav -->
        <nav class="jump-nav" aria-label="\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u0432 \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u0442\u0430">
          <button type="button" class="jump-link" (click)="scrollTo('ingredients')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>
            \u0421\u044A\u0441\u0442\u0430\u0432\u043A\u0438
          </button>
          <span class="jump-sep" aria-hidden="true"></span>
          <button type="button" class="jump-link" (click)="scrollTo('steps')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            \u041F\u0440\u0438\u0433\u043E\u0442\u0432\u044F\u043D\u0435
          </button>
          <span class="jump-sep" aria-hidden="true"></span>
          <button type="button" class="jump-link" (click)="scrollTo('comments')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            \u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438
          </button>
        </nav>

        <!-- Main body -->
        <div class="body-wrap">
          <div class="content-grid">

            <!-- RIGHT on desktop, TOP on mobile: sticky ingredients + favorite -->
            <aside class="sidebar">

              <!-- Favorite -->
              @if (auth.isAuthenticated()) {
                <button class="favorite-btn"
                  [class.favorited]="favoriteStatus()?.isFavorite"
                  [disabled]="favoriting()"
                  [attr.aria-pressed]="!!favoriteStatus()?.isFavorite"
                  [attr.aria-label]="favoriteStatus()?.isFavorite ? '\u041F\u0440\u0435\u043C\u0430\u0445\u043D\u0438 \u043E\u0442 \u043B\u044E\u0431\u0438\u043C\u0438' : '\u0414\u043E\u0431\u0430\u0432\u0438 \u0432 \u043B\u044E\u0431\u0438\u043C\u0438'"
                  (click)="toggleFavorite()">
                  @if (favoriting()) {
                    <svg class="spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="24"/></svg>
                  } @else if (favoriteStatus()?.isFavorite) {
                    <svg viewBox="0 0 24 24" fill="var(--clr-error)" stroke="var(--clr-error)" stroke-width="2" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  } @else {
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  }
                  @if (favoriteStatus()?.isFavorite) {
                    \u0417\u0430\u043F\u0430\u0437\u0435\u043D\u043E \xB7 {{ favoriteStatus()?.favoriteCount }}
                  } @else {
                    \u0417\u0430\u043F\u0430\u0437\u0438 \xB7 {{ favoriteStatus()?.favoriteCount || 0 }}
                  }
                </button>
              }

              <!-- Ingredients (sticky) -->
              <div class="section-card" id="ingredients">
                <div class="section-heading">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>
                  <h2>\u0421\u044A\u0441\u0442\u0430\u0432\u043A\u0438</h2>
                  <span class="count-badge">{{ recipe.ingredients?.length || 0 }}</span>
                </div>
                @if (checkedIngredients().size > 0) {
                  <div class="ing-progress">
                    <div class="ing-progress-bar" [style.transform]="'scaleX(' + (checkedIngredients().size / (recipe.ingredients?.length || 1)) + ')'"></div>
                  </div>
                }
                <ul class="ingredients-list">
                  @for (ing of recipe.ingredients; track ing.id) {
                    <li [class.checked]="checkedIngredients().has(ing.id)"
                        (click)="toggleIngredient(ing.id)"
                        role="checkbox"
                        [attr.aria-checked]="checkedIngredients().has(ing.id)"
                        tabindex="0"
                        (keydown.space)="$event.preventDefault(); toggleIngredient(ing.id)"
                        (keydown.enter)="toggleIngredient(ing.id)">
                      <span class="ing-check" aria-hidden="true">
                        @if (checkedIngredients().has(ing.id)) {
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        }
                      </span>
                      <span class="ing-amount">{{ ing.amount }}</span>
                      <span class="ing-name">{{ ing.name }}</span>
                    </li>
                  }
                </ul>
                @if (checkedIngredients().size > 0) {
                  <button class="ing-reset" (click)="clearIngredients()">
                    \u0418\u0437\u0447\u0438\u0441\u0442\u0438 \u0432\u0441\u0438\u0447\u043A\u0438
                  </button>
                }
              </div>

            </aside>

            <!-- LEFT on desktop, BELOW on mobile: intro + steps + rating + comments -->
            <main class="main-content">

              @if (recipe.description) {
                <div class="prose-card">
                  <p>{{ recipe.description }}</p>
                </div>
              }

              <!-- Steps -->
              <div class="section-card" id="steps">
                <div class="section-heading">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                  <h2>\u041F\u0440\u0438\u0433\u043E\u0442\u0432\u044F\u043D\u0435</h2>
                  <span class="count-badge">{{ recipe.steps?.length || 0 }} \u0441\u0442\u044A\u043F\u043A\u0438</span>
                </div>
                <div class="steps-list">
                  @for (step of recipe.steps; track step.id; let i = $index) {
                    <div class="step-item">
                      <div class="step-num">{{ i + 1 }}</div>
                      <div class="step-body">
                        @if (step.title && step.title !== '\u0421\u0442\u044A\u043F\u043A\u0430 ' + (i + 1)) {
                          <h3>{{ step.title }}</h3>
                        }
                        <p>{{ step.description }}</p>
                      </div>
                    </div>
                  }
                </div>
              </div>

              @if (recipe.tags && recipe.tags.length) {
                <div class="tags-row">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                  @for (tag of recipe.tags; track tag.id) {
                    <span class="tag">{{ tag.name }}</span>
                  }
                </div>
              }
              <!-- Rating -->
              <div class="panel-card">
                <div class="card-label">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="star-icon"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  \u041E\u0446\u0435\u043D\u043A\u0430
                </div>
                <div class="avg-row">
                  <span class="avg-num">{{ averageRating() ? averageRating()!.toFixed(1) : '\u2014' }}</span>
                  <div class="avg-meta">
                    <app-star-rating [value]="Math.round(averageRating() || 0)" [interactive]="false" />
                    <span class="rating-count">{{ ratingsCount() > 0 ? ratingsCount() + ' \u043E\u0446\u0435\u043D\u043A\u0438' : '\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430' }}</span>
                  </div>
                </div>
                @if (auth.isAuthenticated()) {
                  <div class="user-rating">
                    <p>\u0422\u0432\u043E\u044F\u0442\u0430 \u043E\u0446\u0435\u043D\u043A\u0430:</p>
                    <app-star-rating [value]="userRating()" (rated)="onRate($event)" />
                  </div>
                }
              </div>

              <!-- Comment form -->
              @if (auth.isAuthenticated()) {
                <div class="panel-card">
                  <div class="card-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    \u041E\u0441\u0442\u0430\u0432\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440
                  </div>
                  <form (submit)="onComment($event)">
                    <textarea [ngModel]="commentBody()" (ngModelChange)="commentBody.set($event)" name="body"
                              placeholder="\u041D\u0430\u043F\u0438\u0448\u0438 \u043C\u043D\u0435\u043D\u0438\u0435\u0442\u043E \u0441\u0438..." rows="4"
                              class="comment-textarea"
                              [disabled]="submittingComment()"
                              maxlength="2000"></textarea>
                    <button type="submit" class="submit-btn"
                            [disabled]="submittingComment() || !commentBody().trim()">
                      @if (submittingComment()) {
                        <svg class="spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="24"/></svg>
                        \u0418\u0437\u043F\u0440\u0430\u0449\u0430\u043D\u0435...
                      } @else {
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        \u041F\u0443\u0431\u043B\u0438\u043A\u0443\u0432\u0430\u0439
                      }
                    </button>
                  </form>
                </div>
              } @else {
                <div class="panel-card login-prompt">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                  <p>\u0417\u0430 \u043E\u0446\u0435\u043D\u043A\u0430 \u0438\u043B\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440 <a routerLink="/signin">\u0432\u043B\u0435\u0437 \u0432 \u043F\u0440\u043E\u0444\u0438\u043B\u0430 \u0441\u0438</a>.</p>
                </div>
              }

              <!-- Comments -->
              <div class="panel-card" id="comments">
                <div class="card-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  \u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438
                  @if (comments().length > 0) {
                    <span class="count-badge ml">{{ comments().length }}</span>
                  }
                </div>
                @for (comment of comments(); track comment.id) {
                  <div class="comment">
                    <div class="comment-header">
                      <div class="comment-avatar">{{ (comment.author?.name || comment.author?.email || '\u0427')[0].toUpperCase() }}</div>
                      <div class="comment-meta">
                        <strong>{{ comment.author?.name || comment.author?.email || '\u0427\u0438\u0442\u0430\u0442\u0435\u043B' }}</strong>
                        <span class="comment-date">{{ comment.created_at | date:'dd MMM yyyy' }}</span>
                      </div>
                      @if (canDeleteComment(comment)) {
                        <button class="delete-comment-btn" (click)="confirmDelete(comment.id)" aria-label="\u0418\u0437\u0442\u0440\u0438\u0439 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
                        </button>
                      }
                    </div>
                    @if (comment.rating) {
                      <div class="comment-rating">
                        <app-star-rating [value]="comment.rating" [interactive]="false" />
                      </div>
                    }
                    @if (comment.body?.trim()) {
                      <p class="comment-body">{{ comment.body }}</p>
                    }
                    @if (auth.isAuthenticated()) {
                      <button class="reply-btn"
                        [attr.aria-expanded]="replyingToId() === comment.id"
                        (click)="startReply(comment.id)">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></svg>
                        {{ replyingToId() === comment.id ? '\u041E\u0442\u043A\u0430\u0437' : '\u041E\u0442\u0433\u043E\u0432\u043E\u0440\u0438' }}
                      </button>
                    }
                    @if (replyingToId() === comment.id) {
                      <form class="reply-form" (submit)="submitReply($event, comment.id)">
                        <textarea [ngModel]="replyBody()" (ngModelChange)="replyBody.set($event)" [name]="'reply-' + comment.id" rows="2"
                                  placeholder="\u041D\u0430\u043F\u0438\u0448\u0438 \u043E\u0442\u0433\u043E\u0432\u043E\u0440..."
                                  [disabled]="submittingReply()"
                                  maxlength="1000"></textarea>
                        <button type="submit" class="submit-btn"
                                [disabled]="submittingReply() || !replyBody().trim()">
                          @if (submittingReply()) {
                            <svg class="spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="24"/></svg>
                            \u0418\u0437\u043F\u0440\u0430\u0449\u0430\u043D\u0435...
                          } @else {
                            \u0418\u0437\u043F\u0440\u0430\u0442\u0438
                          }
                        </button>
                      </form>
                    }
                    @if (comment.replies && comment.replies.length > 0) {
                      <div class="replies">
                        @for (reply of comment.replies; track reply.id) {
                          <div class="reply">
                            <div class="comment-header">
                              <div class="comment-avatar reply-avatar">{{ (reply.author?.name || '\u0427')[0].toUpperCase() }}</div>
                              <div class="comment-meta">
                                <strong>{{ reply.author?.name || '\u0427\u0438\u0442\u0430\u0442\u0435\u043B' }}</strong>
                                <span class="comment-date">{{ reply.created_at | date:'dd MMM yyyy' }}</span>
                              </div>
                              @if (canDeleteComment(reply)) {
                                <button class="delete-comment-btn" (click)="confirmDelete(reply.id)" aria-label="\u0418\u0437\u0442\u0440\u0438\u0439 \u043E\u0442\u0433\u043E\u0432\u043E\u0440">
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
                                </button>
                              }
                            </div>
                            <p class="comment-body">{{ reply.body }}</p>
                          </div>
                        }
                      </div>
                    }
                  </div>
                } @empty {
                  <p class="no-comments">\u0412\u0441\u0435 \u043E\u0449\u0435 \u043D\u044F\u043C\u0430 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438. \u0411\u044A\u0434\u0438 \u043F\u044A\u0440\u0432\u0438!</p>
                }
              </div>

            </main>
          </div>
        </div>

        <!-- Related -->
        @if (relatedRecipes().length > 0) {
          <section class="related-section">
            <div class="related-header">
              <h2>\u041F\u043E\u0434\u043E\u0431\u043D\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438</h2>
              <a routerLink="/recipes" class="related-link">\u0412\u0438\u0436 \u0432\u0441\u0438\u0447\u043A\u0438 \u2192</a>
            </div>
            <div class="related-grid">
              @for (r of relatedRecipes(); track r.id; let i = $index) {
                <app-recipe-card [recipe]="r" [index]="i" />
              }
            </div>
          </section>
        }

      </div>
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* angular:styles/component:scss;74621012bd5b3dd524f3741b6a95dddce6179a3c9ecb87396365dcee38383171;C:/Users/ipene/Desktop/Blog-System-Angular/frontend/src/app/pages/recipe-detail/recipe-detail.component.ts */\n.detail-page {\n  min-height: 100dvh;\n  background-color: var(--clr-bg, #faf7f4);\n  background-image: url(/backgrounds/cooking-pattern.svg);\n  background-size: 500px;\n  background-repeat: repeat;\n}\n.read-progress {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  z-index: 51;\n  pointer-events: none;\n  background: transparent;\n}\n.read-progress-bar {\n  height: 100%;\n  background: var(--clr-brand);\n  transform-origin: left;\n  transform: scaleX(0);\n  will-change: transform;\n  box-shadow: 0 0 8px color-mix(in oklch, var(--clr-brand) 45%, transparent);\n}\n@media (prefers-reduced-motion: reduce) {\n  .read-progress-bar {\n    transition: none;\n  }\n}\n.hero-banner {\n  position: relative;\n  min-height: 520px;\n  display: flex;\n  align-items: flex-end;\n  overflow: hidden;\n}\n.hero-img {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.hero-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.9) 0%,\n      rgba(0, 0, 0, 0.5) 40%,\n      rgba(0, 0, 0, 0.1) 75%,\n      rgba(0, 0, 0, 0) 100%);\n}\n.hero-content {\n  position: relative;\n  z-index: 2;\n  max-width: 800px;\n  margin: 0 auto;\n  width: 100%;\n  padding: 3rem 1.5rem 2.5rem;\n}\n.back-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  color: rgba(255, 255, 255, 0.85);\n  text-decoration: none;\n  font-size: 0.82rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  margin-right: 0.5rem;\n  transition: color 0.2s;\n}\n.back-link svg {\n  width: 1rem;\n  height: 1rem;\n}\n.back-link:hover {\n  color: #ffffff;\n}\n.hero-badge {\n  display: inline-block;\n  margin-left: 0.75rem;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: var(--clr-green-text);\n  background: var(--clr-green-bg);\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  margin-bottom: 0.75rem;\n}\nh1 {\n  font-family: var(--font-display, "Alegreya", Georgia, serif);\n  font-size: clamp(1.8rem, 4vw, 3rem);\n  color: #ffffff;\n  margin: 0 0 0.75rem;\n  line-height: 1.1;\n  letter-spacing: -0.02em;\n  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);\n}\n.hero-excerpt {\n  color: rgba(255, 255, 255, 0.88);\n  font-size: 1.05rem;\n  line-height: 1.7;\n  margin: 0 0 1.5rem;\n  font-weight: 300;\n  max-width: 600px;\n}\n.stat-pills {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n.stat-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.4rem 0.9rem;\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 9999px;\n  color: #fff;\n  font-size: 0.82rem;\n  font-weight: 500;\n}\n.stat-pill svg {\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.stat-pill-gold {\n  background: color-mix(in oklch, var(--clr-amber) 20%, transparent);\n  border-color: color-mix(in oklch, var(--clr-amber) 50%, transparent);\n  color: var(--clr-amber);\n}\n.stat-pill-gold svg {\n  fill: var(--clr-amber);\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.share-bar {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n}\n.share-label {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.6);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-right: 0.25rem;\n}\n.share-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.1rem;\n  height: 2.1rem;\n  border-radius: 50%;\n  border: 1.5px solid rgba(255, 255, 255, 0.3);\n  background: rgba(255, 255, 255, 0.12);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  color: #fff;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.2s, transform 0.2s;\n}\n.share-btn svg {\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.share-btn:hover {\n  transform: translateY(-2px);\n}\n.share-fb:hover {\n  background: #1877f2;\n  border-color: #1877f2;\n}\n.share-x:hover {\n  background: #000;\n  border-color: #000;\n}\n.share-wa:hover {\n  background: #25d366;\n  border-color: #25d366;\n}\n.share-copy:hover,\n.share-native:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n.body-wrap {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2.5rem 1.5rem;\n}\n.content-grid {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  grid-template-areas: "main aside";\n  gap: 2rem;\n  align-items: start;\n}\n.main-content {\n  grid-area: main;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.sidebar {\n  grid-area: aside;\n}\n.prose-card {\n  background: var(--clr-surface);\n  border-radius: 1.25rem;\n  padding: 1.5rem;\n  border: 1px solid var(--clr-border-faint);\n  box-shadow: var(--shadow-sm);\n}\n.prose-card p {\n  color: var(--clr-text-muted);\n  line-height: 1.85;\n  margin: 0;\n  font-size: 1rem;\n}\n.section-card {\n  background: var(--clr-surface);\n  border-radius: 1.25rem;\n  padding: 1.5rem;\n  border: 1px solid var(--clr-border-faint);\n  box-shadow: var(--shadow-sm);\n  scroll-margin-top: 8rem;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 1.25rem;\n}\n.section-heading svg {\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--clr-green);\n  flex-shrink: 0;\n}\nh2 {\n  font-family: var(--font-display, "Alegreya", Georgia, serif);\n  font-size: 1.25rem;\n  color: var(--clr-text);\n  margin: 0;\n}\n.count-badge {\n  margin-left: auto;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--clr-green-text);\n  background: var(--clr-green-bg);\n  padding: 0.2rem 0.6rem;\n  border-radius: 9999px;\n}\n.count-badge.ml {\n  margin-left: 0.5rem;\n}\n.ing-progress {\n  height: 3px;\n  background: rgba(0, 0, 0, 0.06);\n  border-radius: 9999px;\n  margin-bottom: 1rem;\n  overflow: hidden;\n}\n.ing-progress-bar {\n  height: 100%;\n  width: 100%;\n  background: var(--clr-green);\n  border-radius: 9999px;\n  transform-origin: left;\n  transform: scaleX(0);\n  transition: transform 0.4s var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1));\n}\n.ingredients-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.ingredients-list li {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.65rem 0.4rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  font-size: 0.925rem;\n  cursor: pointer;\n  border-radius: 0.5rem;\n  transition: background 0.15s, opacity 0.25s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.ingredients-list li:last-child {\n  border-bottom: none;\n}\n.ingredients-list li:hover {\n  background: rgba(0, 0, 0, 0.025);\n}\n.ingredients-list li:focus-visible {\n  outline: 2px solid var(--clr-green);\n  outline-offset: 1px;\n}\n.ingredients-list li.checked {\n  opacity: 0.45;\n}\n.ingredients-list li.checked .ing-name,\n.ingredients-list li.checked .ing-amount {\n  text-decoration: line-through;\n}\n.ing-check {\n  width: 1.1rem;\n  height: 1.1rem;\n  border-radius: 50%;\n  border: 1.5px solid rgba(0, 0, 0, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: background 0.2s, border-color 0.2s;\n}\n.ing-check svg {\n  width: 0.6rem;\n  height: 0.6rem;\n  display: none;\n}\nli.checked .ing-check {\n  background: var(--clr-green);\n  border-color: var(--clr-green);\n}\nli.checked .ing-check svg {\n  display: block;\n  stroke: #ffffff;\n}\n.ing-amount {\n  font-weight: 700;\n  color: var(--clr-text);\n  min-width: 70px;\n}\n.ing-name {\n  color: var(--clr-text-muted);\n}\n.ing-reset {\n  margin-top: 0.75rem;\n  background: none;\n  border: none;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--clr-text-muted);\n  cursor: pointer;\n  padding: 0.25rem 0;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n  transition: color 0.15s var(--ease-out-expo);\n}\n.ing-reset:hover {\n  color: var(--clr-text);\n}\n.steps-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.step-item {\n  display: flex;\n  gap: 1rem;\n}\n.step-num {\n  flex-shrink: 0;\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 50%;\n  background: var(--clr-green);\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 2px;\n}\n.step-body h3 {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--clr-text);\n  margin: 0 0 0.3rem;\n}\n.step-body p {\n  margin: 0;\n  color: var(--clr-text-muted);\n  line-height: 1.75;\n  font-size: 0.925rem;\n}\n.tags-row {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.tags-row svg {\n  width: 0.9rem;\n  height: 0.9rem;\n  color: var(--clr-text-muted);\n  flex-shrink: 0;\n}\n.tag {\n  padding: 0.3rem 0.85rem;\n  background: var(--clr-surface-hover);\n  border-radius: 9999px;\n  font-size: 0.78rem;\n  color: var(--clr-text-muted);\n  font-weight: 500;\n}\n.jump-nav {\n  background: var(--clr-surface, #fff);\n  border-bottom: 1px solid var(--clr-border-faint, rgba(0, 0, 0, 0.06));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0;\n  position: sticky;\n  top: 4rem;\n  z-index: 10;\n  padding: 0;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);\n}\n.jump-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.85rem 1.5rem;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--clr-text-muted);\n  text-decoration: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-family: inherit;\n  transition: color 0.2s var(--ease-out-expo), background 0.2s var(--ease-out-expo);\n  position: relative;\n  white-space: nowrap;\n}\n.jump-link svg {\n  width: 0.85rem;\n  height: 0.85rem;\n  flex-shrink: 0;\n}\n.jump-link::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 1rem;\n  right: 1rem;\n  height: 2px;\n  background: var(--clr-green);\n  border-radius: 2px;\n  transform: scaleX(0);\n  transition: transform 0.2s var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1));\n}\n.jump-link:hover {\n  color: var(--clr-text);\n  background: var(--clr-surface-hover);\n}\n.jump-link:hover::after {\n  transform: scaleX(1);\n}\n.jump-sep {\n  width: 1px;\n  height: 1.2rem;\n  background: var(--clr-border);\n  flex-shrink: 0;\n}\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  position: sticky;\n  top: 7.25rem;\n  max-height: calc(100dvh - 8rem);\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(0, 0, 0, 0.12) transparent;\n  padding-right: 2px;\n}\n.sidebar::-webkit-scrollbar {\n  width: 4px;\n}\n.sidebar::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sidebar::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n}\n.favorite-btn {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.85rem;\n  border-radius: 1rem;\n  border: 1.5px solid var(--clr-border);\n  background: var(--clr-surface);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    box-shadow 0.2s var(--ease-out-expo),\n    background 0.18s var(--ease-out-expo),\n    color 0.18s var(--ease-out-expo),\n    border-color 0.18s var(--ease-out-expo);\n  color: var(--clr-text-muted);\n}\n.favorite-btn svg {\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.favorite-btn.favorited {\n  background: var(--clr-error-bg);\n  border-color: var(--clr-error);\n  color: var(--clr-error);\n}\n.favorite-btn:hover:not(:disabled) {\n  box-shadow: var(--shadow-md);\n}\n.favorite-btn:disabled {\n  opacity: 0.7;\n  cursor: wait;\n}\n.sidebar-card,\n.panel-card {\n  background: var(--clr-surface);\n  border-radius: 1.25rem;\n  padding: 1.5rem;\n  border: 1px solid var(--clr-border-faint);\n  box-shadow: var(--shadow-sm);\n  scroll-margin-top: 8rem;\n}\n.card-label {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: var(--clr-green);\n  margin-bottom: 1rem;\n}\n.card-label svg {\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.star-icon {\n  fill: var(--clr-amber);\n  color: var(--clr-amber);\n}\n.avg-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 0.5rem;\n}\n.avg-num {\n  font-family: var(--font-display, "Alegreya", Georgia, serif);\n  font-size: 3rem;\n  font-weight: 700;\n  color: var(--clr-text);\n  line-height: 1;\n}\n.avg-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.rating-count {\n  font-size: 0.78rem;\n  color: var(--clr-text-muted);\n}\n.user-rating {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--clr-border-faint);\n}\n.user-rating p {\n  font-size: 0.82rem;\n  color: var(--clr-text-muted);\n  margin: 0 0 0.4rem;\n  font-weight: 600;\n}\n.comment-textarea {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1.5px solid var(--clr-border);\n  border-radius: 0.75rem;\n  font-size: 0.875rem;\n  resize: vertical;\n  outline: none;\n  box-sizing: border-box;\n  color: var(--clr-text);\n  font-family: inherit;\n  background: var(--clr-surface-alt);\n  transition:\n    border-color 0.2s var(--ease-out-expo),\n    box-shadow 0.2s var(--ease-out-expo),\n    background 0.2s var(--ease-out-expo);\n}\n.comment-textarea:focus {\n  border-color: var(--clr-green);\n  box-shadow: 0 0 0 3px color-mix(in oklch, var(--clr-green) 12%, transparent);\n  background: var(--clr-surface);\n}\n.submit-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  margin-top: 0.75rem;\n  padding: 0.6rem 1.25rem;\n  background: var(--clr-green);\n  color: #ffffff;\n  border: none;\n  border-radius: 9999px;\n  font-weight: 700;\n  cursor: pointer;\n  font-size: 0.85rem;\n  transition: background 0.18s var(--ease-out-expo);\n}\n.submit-btn svg {\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.submit-btn:hover:not(:disabled) {\n  background: var(--clr-green-dark);\n}\n.submit-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.spin {\n  animation: spin 0.75s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.login-prompt {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n}\n.login-prompt svg {\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--clr-text-muted);\n  flex-shrink: 0;\n}\n.login-prompt p {\n  font-size: 0.875rem;\n  color: var(--clr-text-muted);\n  margin: 0;\n}\n.login-prompt a {\n  color: var(--clr-green);\n  font-weight: 700;\n  text-decoration: none;\n}\n.login-prompt a:hover {\n  text-decoration: underline;\n}\n.comment {\n  padding: 1rem 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.comment:last-child {\n  border-bottom: none;\n}\n.comment-header {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin-bottom: 0.5rem;\n}\n.comment-avatar {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background: var(--clr-green);\n  color: #ffffff;\n  font-size: 0.8rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.comment-meta {\n  flex: 1;\n}\n.comment-meta strong {\n  font-size: 0.85rem;\n  color: var(--clr-text);\n  display: block;\n}\n.comment-date {\n  font-size: 0.75rem;\n  color: var(--clr-text-muted);\n}\n.comment-rating {\n  margin-bottom: 0.4rem;\n}\n.comment-body {\n  color: var(--clr-text-muted);\n  font-size: 0.875rem;\n  line-height: 1.65;\n  margin: 0;\n}\n.delete-comment-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--clr-text-muted);\n  padding: 0.25rem;\n  border-radius: 0.4rem;\n  display: flex;\n  transition: color 0.18s var(--ease-out-expo), background 0.18s var(--ease-out-expo);\n}\n.delete-comment-btn svg {\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.delete-comment-btn:hover {\n  color: var(--clr-error);\n  background: var(--clr-error-bg);\n}\n.no-comments {\n  font-size: 0.875rem;\n  color: var(--clr-text-muted);\n  text-align: center;\n  padding: 1rem 0;\n  margin: 0;\n}\n.related-section {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1.5rem 4rem;\n}\n.related-header {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.related-header h2 {\n  font-family: var(--font-display, "Alegreya", Georgia, serif);\n  font-size: 1.5rem;\n  color: var(--clr-text);\n  margin: 0;\n}\n.related-link {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--clr-green);\n  text-decoration: none;\n}\n.related-link:hover {\n  text-decoration: underline;\n}\n.related-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.5rem;\n}\n.reply-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  margin-top: 0.4rem;\n  padding: 0.25rem 0.6rem;\n  background: none;\n  border: none;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--clr-text-muted);\n  cursor: pointer;\n  border-radius: 0.5rem;\n  transition: background 0.15s var(--ease-out-expo), color 0.15s var(--ease-out-expo);\n}\n.reply-btn svg {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.reply-btn:hover {\n  background: var(--clr-surface-hover);\n  color: var(--clr-brand);\n}\n.reply-form {\n  margin-top: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.reply-form textarea {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0.5rem 0.75rem;\n  border: 1.5px solid var(--clr-border);\n  border-radius: 0.625rem;\n  font-size: 0.85rem;\n  font-family: inherit;\n  resize: vertical;\n  background: var(--clr-surface-alt);\n  color: var(--clr-text);\n}\n.reply-form textarea:focus {\n  outline: none;\n  border-color: var(--clr-green);\n}\n.replies {\n  margin-top: 0.5rem;\n  padding-left: 1rem;\n  border-left: 1px solid var(--clr-border-faint);\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n.reply {\n  padding: 0.5rem 0;\n}\n.reply-avatar {\n  width: 1.5rem !important;\n  height: 1.5rem !important;\n  font-size: 0.65rem !important;\n}\n@media print {\n  app-header,\n  app-footer,\n  .share-bar,\n  .related-section,\n  .back-link,\n  .hero-overlay,\n  .read-progress,\n  .favorite-btn {\n    display: none !important;\n  }\n  .hero-banner {\n    min-height: auto !important;\n  }\n  .hero-img {\n    position: static !important;\n    width: 100% !important;\n    height: 300px !important;\n    object-fit: cover;\n  }\n  .content-grid {\n    grid-template-columns: 1fr !important;\n    grid-template-areas: "aside" "main" !important;\n  }\n  .sidebar {\n    position: static !important;\n    max-height: none !important;\n    overflow: visible !important;\n  }\n  .body-wrap {\n    padding: 1rem !important;\n  }\n}\n@media (max-width: 900px) {\n  .content-grid {\n    grid-template-columns: 1fr;\n    grid-template-areas: "aside" "main";\n  }\n  h1 {\n    font-size: 2.2rem;\n  }\n  .hero-banner {\n    min-height: 420px;\n  }\n  .sidebar {\n    position: static;\n    max-height: none;\n    overflow-y: visible;\n  }\n  .jump-link {\n    padding: 0.75rem 1rem;\n    font-size: 0.78rem;\n  }\n}\n@media (max-width: 640px) {\n  h1 {\n    font-size: 1.8rem;\n  }\n  .related-grid {\n    grid-template-columns: 1fr;\n  }\n  .hero-banner {\n    min-height: 360px;\n  }\n  .jump-nav {\n    gap: 0;\n    justify-content: stretch;\n  }\n  .jump-link {\n    flex: 1;\n    justify-content: center;\n    padding: 0.75rem 0.5rem;\n    font-size: 0.72rem;\n    gap: 0.3rem;\n  }\n  .jump-sep {\n    display: none;\n  }\n}\n/*# sourceMappingURL=recipe-detail.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecipeDetailComponent, { className: "RecipeDetailComponent", filePath: "src/app/pages/recipe-detail/recipe-detail.component.ts", lineNumber: 1064 });
})();
export {
  RecipeDetailComponent
};
//# sourceMappingURL=chunk-GK4AOYR5.js.map
