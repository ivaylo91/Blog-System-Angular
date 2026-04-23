import {
  ChangeDetectionStrategy,
  Component,
  Input,
  RouterLink,
  setClassMetadata,
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LVOWXKII.js";

// src/app/components/recipe-card/recipe-card.component.ts
var _c0 = (a0) => ["/recipes", a0];
function RecipeCardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 13);
    \u0275\u0275listener("load", function RecipeCardComponent_Conditional_2_Template_img_load_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImgLoad());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.recipe.hero_image, \u0275\u0275sanitizeUrl)("alt", ctx_r1.recipe.title)("loading", ctx_r1.priority ? "eager" : "lazy");
    \u0275\u0275attribute("fetchpriority", ctx_r1.priority ? "high" : null);
  }
}
function RecipeCardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "\u0412\u0438\u0436 \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u0442\u0430 \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4, "\u0412\u0438\u0436 \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u0442\u0430");
    \u0275\u0275elementEnd();
  }
}
function RecipeCardComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.recipe.category.name);
  }
}
function RecipeCardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.recipe.excerpt);
  }
}
function RecipeCardComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 9);
    \u0275\u0275element(2, "path", 17)(3, "circle", 18)(4, "path", 19)(5, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.recipe.servings, " \u043F\u043E\u0440\u0446\u0438\u0438 ");
  }
}
var RecipeCardComponent = class _RecipeCardComponent {
  recipe;
  priority = false;
  index = 0;
  featured = false;
  compact = false;
  imgLoaded = false;
  onImgLoad() {
    this.imgLoaded = true;
  }
  get gradient() {
    const from = this.recipe.hero_palette_from || "#d6c5a5";
    const via = this.recipe.hero_palette_via || "#e8dcc8";
    const to = this.recipe.hero_palette_to || "#f5f0e8";
    return `linear-gradient(135deg, ${from}, ${via}, ${to})`;
  }
  static \u0275fac = function RecipeCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecipeCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecipeCardComponent, selectors: [["app-recipe-card"]], inputs: { recipe: "recipe", priority: "priority", index: "index", featured: "featured", compact: "compact" }, decls: 18, vars: 27, consts: [[1, "card", 3, "routerLink"], [1, "card-image"], [3, "src", "alt", "loading"], [1, "card-body"], [1, "category"], [1, "title"], [1, "excerpt"], [1, "meta"], [1, "meta-item"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], [1, "difficulty"], [3, "load", "src", "alt", "loading"], [1, "card-overlay"], [1, "overlay-btn"], ["aria-hidden", "true", 1, "mobile-label"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"]], template: function RecipeCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, RecipeCardComponent_Conditional_2_Template, 1, 4, "img", 2);
      \u0275\u0275conditionalCreate(3, RecipeCardComponent_Conditional_3_Template, 5, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275conditionalCreate(5, RecipeCardComponent_Conditional_5_Template, 2, 1, "span", 4);
      \u0275\u0275elementStart(6, "h3", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, RecipeCardComponent_Conditional_8_Template, 2, 1, "p", 6);
      \u0275\u0275elementStart(9, "div", 7)(10, "span", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 9);
      \u0275\u0275element(12, "circle", 10)(13, "polyline", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, RecipeCardComponent_Conditional_15_Template, 7, 1, "span", 8);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "span", 12);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("animation-delay", (ctx.index < 6 ? ctx.index : 5) * 50 + "ms");
      \u0275\u0275classProp("featured", ctx.featured)("compact", ctx.compact);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(25, _c0, ctx.recipe.slug));
      \u0275\u0275advance();
      \u0275\u0275styleProp("background", ctx.gradient);
      \u0275\u0275classProp("img-loaded", ctx.imgLoaded);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.recipe.hero_image ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.compact ? 3 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.recipe.category ? 5 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.recipe.title);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.compact ? 8 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.recipe.prep_minutes + ctx.recipe.cook_minutes, " \u043C\u0438\u043D ");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.compact ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("diff-easy", ctx.recipe.difficulty === "\u041B\u0435\u0441\u043D\u043E")("diff-medium", ctx.recipe.difficulty === "\u0421\u0440\u0435\u0434\u043D\u043E")("diff-hard", ctx.recipe.difficulty === "\u0417\u0430 \u043D\u0430\u043F\u0440\u0435\u0434\u043D\u0430\u043B\u0438");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.recipe.difficulty);
    }
  }, dependencies: [RouterLink], styles: ['@charset "UTF-8";\n\n\n.card[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 1.25rem;\n  overflow: hidden;\n  background: var(--clr-surface);\n  box-shadow: var(--shadow-sm);\n  text-decoration: none;\n  color: inherit;\n  transition: transform 0.35s var(--ease-out-expo), box-shadow 0.35s var(--ease-out-expo);\n  animation: _ngcontent-%COMP%_fadeInUp 0.5s var(--ease-out-expo) both;\n  touch-action: manipulation;\n  cursor: pointer;\n}\n@media (hover: hover) and (pointer: fine) {\n  .card[_ngcontent-%COMP%]:hover {\n    transform: translateY(-5px);\n    box-shadow: var(--shadow-lg);\n  }\n}\n.card[_ngcontent-%COMP%]:active {\n  transform: translateY(-1px) scale(0.99);\n  box-shadow: var(--shadow-sm);\n  transition-duration: 0.1s;\n}\n.card-image[_ngcontent-%COMP%] {\n  aspect-ratio: 4/3;\n  position: relative;\n  overflow: hidden;\n}\n.card.featured[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n  aspect-ratio: 16/9;\n}\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s var(--ease-out-expo), opacity 0.35s var(--ease-out-expo);\n  opacity: 0;\n}\n.card-image.img-loaded[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@media (hover: hover) and (pointer: fine) {\n  .card[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transform: scale(1.04);\n  }\n}\n.card-image[_ngcontent-%COMP%]:not(.img-loaded)::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: var(--clr-skeleton, #f0ede8);\n  z-index: 1;\n}\n.card-image[_ngcontent-%COMP%]:not(.img-loaded)::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: 2;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine, rgba(255, 255, 255, 0.55)) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: _ngcontent-%COMP%_img-shimmer 1.4s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_img-shimmer {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n.card-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(28, 25, 23, 0);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.35s var(--ease-out-expo);\n}\n@media (hover: hover) and (pointer: fine) {\n  .card[_ngcontent-%COMP%]:hover   .card-overlay[_ngcontent-%COMP%] {\n    background: rgba(28, 25, 23, 0.42);\n  }\n}\n.overlay-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 600;\n  font-size: 0.9rem;\n  letter-spacing: 0.03em;\n  padding: 0.55rem 1.2rem;\n  border: 1.5px solid rgba(255, 255, 255, 0.75);\n  border-radius: 9999px;\n  opacity: 0;\n  transform: translateY(10px);\n  transition: opacity 0.28s var(--ease-out-expo), transform 0.28s var(--ease-out-expo);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n@media (hover: hover) and (pointer: fine) {\n  .card[_ngcontent-%COMP%]:hover   .overlay-btn[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.mobile-label[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (hover: none) {\n  .mobile-label[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    bottom: 0.6rem;\n    right: 0.75rem;\n    font-size: 0.7rem;\n    font-weight: 700;\n    letter-spacing: 0.05em;\n    color: #fff;\n    background: rgba(28, 25, 23, 0.55);\n    -webkit-backdrop-filter: blur(6px);\n    backdrop-filter: blur(6px);\n    padding: 0.25rem 0.65rem;\n    border-radius: 9999px;\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    z-index: 2;\n    pointer-events: none;\n  }\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.375rem 1.375rem;\n}\n.category[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: var(--clr-green-text);\n  background: var(--clr-green-bg);\n  padding: 0.2rem 0.65rem;\n  border-radius: 9999px;\n  margin-bottom: 0.55rem;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--clr-text);\n  margin: 0 0 0.5rem;\n  line-height: 1.25;\n}\n.card.featured[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  line-height: 1.15;\n}\n.excerpt[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--clr-text-muted);\n  line-height: 1.65;\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.card.featured[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%] {\n  -webkit-line-clamp: 3;\n}\n.meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 1rem;\n  padding-top: 0.875rem;\n  border-top: 1px solid var(--clr-border-faint);\n  font-size: 0.78rem;\n  color: var(--clr-text-muted);\n  align-items: center;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n.meta-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.85rem;\n  height: 0.85rem;\n  flex-shrink: 0;\n}\n.difficulty[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 0.18rem 0.55rem;\n  border-radius: 9999px;\n  background: var(--clr-surface-alt);\n  color: var(--clr-text-muted);\n}\n.diff-easy[_ngcontent-%COMP%] {\n  background: var(--clr-green-bg);\n  color: var(--clr-green-text);\n}\n.diff-medium[_ngcontent-%COMP%] {\n  background: var(--clr-amber-bg);\n  color: var(--clr-amber-text);\n}\n.diff-hard[_ngcontent-%COMP%] {\n  background: var(--clr-rust-bg);\n  color: var(--clr-rust-text);\n}\n.card.compact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  border-radius: 1rem;\n}\n.card.compact[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n  aspect-ratio: unset;\n  width: 120px;\n  min-height: 100%;\n  flex-shrink: 0;\n  border-radius: 1rem 0 0 1rem;\n}\n.card.compact[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0.9rem 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.3rem;\n}\n.card.compact[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.card.compact[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  margin: 0;\n}\n.card.compact[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  padding-top: 0.5rem;\n  font-size: 0.75rem;\n  gap: 0.75rem;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .card[_ngcontent-%COMP%] {\n    animation: none;\n    transition: box-shadow 0.2s;\n  }\n  .card[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n  .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .card[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transform: none;\n  }\n  .overlay-btn[_ngcontent-%COMP%] {\n    transition: opacity 0.15s;\n    transform: none !important;\n  }\n}\n@media (max-width: 500px) {\n  .card.compact[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n    width: 90px;\n  }\n  .card.compact[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.875rem;\n  }\n  .card.compact[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .card.compact[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    gap: 0.5rem;\n  }\n}\n/*# sourceMappingURL=recipe-card.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecipeCardComponent, [{
    type: Component,
    args: [{ selector: "app-recipe-card", standalone: true, imports: [RouterLink], template: `
    <a [routerLink]="['/recipes', recipe.slug]" class="card"
       [class.featured]="featured" [class.compact]="compact"
       [style.animation-delay]="(index < 6 ? index : 5) * 50 + 'ms'">
      <div class="card-image" [class.img-loaded]="imgLoaded" [style.background]="gradient">
        @if (recipe.hero_image) {
          <img [src]="recipe.hero_image" [alt]="recipe.title"
               [loading]="priority ? 'eager' : 'lazy'"
               [attr.fetchpriority]="priority ? 'high' : null"
               (load)="onImgLoad()" />
        }
        @if (!compact) {
          <div class="card-overlay">
            <span class="overlay-btn">\u0412\u0438\u0436 \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u0442\u0430 \u2192</span>
          </div>
          <span class="mobile-label" aria-hidden="true">\u0412\u0438\u0436 \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u0442\u0430</span>
        }
      </div>
      <div class="card-body">
        @if (recipe.category) {
          <span class="category">{{ recipe.category.name }}</span>
        }
        <h3 class="title">{{ recipe.title }}</h3>
        @if (!compact) {
          <p class="excerpt">{{ recipe.excerpt }}</p>
        }
        <div class="meta">
          <span class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {{ recipe.prep_minutes + recipe.cook_minutes }} \u043C\u0438\u043D
          </span>
          @if (!compact) {
            <span class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              {{ recipe.servings }} \u043F\u043E\u0440\u0446\u0438\u0438
            </span>
          }
          <span class="difficulty"
                [class.diff-easy]="recipe.difficulty === '\u041B\u0435\u0441\u043D\u043E'"
                [class.diff-medium]="recipe.difficulty === '\u0421\u0440\u0435\u0434\u043D\u043E'"
                [class.diff-hard]="recipe.difficulty === '\u0417\u0430 \u043D\u0430\u043F\u0440\u0435\u0434\u043D\u0430\u043B\u0438'">{{ recipe.difficulty }}</span>
        </div>
      </div>
    </a>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;94e8953695dfff6f6f1e4d4f313db4c0fbc5acbe7c65d718b85a6b1927db8cb2;C:/Users/ipene/Desktop/Blog-System-Angular/frontend/src/app/components/recipe-card/recipe-card.component.ts */\n.card {\n  display: block;\n  border-radius: 1.25rem;\n  overflow: hidden;\n  background: var(--clr-surface);\n  box-shadow: var(--shadow-sm);\n  text-decoration: none;\n  color: inherit;\n  transition: transform 0.35s var(--ease-out-expo), box-shadow 0.35s var(--ease-out-expo);\n  animation: fadeInUp 0.5s var(--ease-out-expo) both;\n  touch-action: manipulation;\n  cursor: pointer;\n}\n@media (hover: hover) and (pointer: fine) {\n  .card:hover {\n    transform: translateY(-5px);\n    box-shadow: var(--shadow-lg);\n  }\n}\n.card:active {\n  transform: translateY(-1px) scale(0.99);\n  box-shadow: var(--shadow-sm);\n  transition-duration: 0.1s;\n}\n.card-image {\n  aspect-ratio: 4/3;\n  position: relative;\n  overflow: hidden;\n}\n.card.featured .card-image {\n  aspect-ratio: 16/9;\n}\n.card-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s var(--ease-out-expo), opacity 0.35s var(--ease-out-expo);\n  opacity: 0;\n}\n.card-image.img-loaded img {\n  opacity: 1;\n}\n@media (hover: hover) and (pointer: fine) {\n  .card:hover .card-image img {\n    transform: scale(1.04);\n  }\n}\n.card-image:not(.img-loaded)::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: var(--clr-skeleton, #f0ede8);\n  z-index: 1;\n}\n.card-image:not(.img-loaded)::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: 2;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine, rgba(255, 255, 255, 0.55)) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: img-shimmer 1.4s linear infinite;\n}\n@keyframes img-shimmer {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n.card-overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(28, 25, 23, 0);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.35s var(--ease-out-expo);\n}\n@media (hover: hover) and (pointer: fine) {\n  .card:hover .card-overlay {\n    background: rgba(28, 25, 23, 0.42);\n  }\n}\n.overlay-btn {\n  color: #fff;\n  font-weight: 600;\n  font-size: 0.9rem;\n  letter-spacing: 0.03em;\n  padding: 0.55rem 1.2rem;\n  border: 1.5px solid rgba(255, 255, 255, 0.75);\n  border-radius: 9999px;\n  opacity: 0;\n  transform: translateY(10px);\n  transition: opacity 0.28s var(--ease-out-expo), transform 0.28s var(--ease-out-expo);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n@media (hover: hover) and (pointer: fine) {\n  .card:hover .overlay-btn {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.mobile-label {\n  display: none;\n}\n@media (hover: none) {\n  .mobile-label {\n    display: block;\n    position: absolute;\n    bottom: 0.6rem;\n    right: 0.75rem;\n    font-size: 0.7rem;\n    font-weight: 700;\n    letter-spacing: 0.05em;\n    color: #fff;\n    background: rgba(28, 25, 23, 0.55);\n    -webkit-backdrop-filter: blur(6px);\n    backdrop-filter: blur(6px);\n    padding: 0.25rem 0.65rem;\n    border-radius: 9999px;\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    z-index: 2;\n    pointer-events: none;\n  }\n}\n.card-body {\n  padding: 1.25rem 1.375rem 1.375rem;\n}\n.category {\n  display: inline-block;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: var(--clr-green-text);\n  background: var(--clr-green-bg);\n  padding: 0.2rem 0.65rem;\n  border-radius: 9999px;\n  margin-bottom: 0.55rem;\n}\n.title {\n  font-family: var(--font-display);\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--clr-text);\n  margin: 0 0 0.5rem;\n  line-height: 1.25;\n}\n.card.featured .title {\n  font-size: 1.6rem;\n  font-weight: 800;\n  line-height: 1.15;\n}\n.excerpt {\n  font-size: 0.875rem;\n  color: var(--clr-text-muted);\n  line-height: 1.65;\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.card.featured .excerpt {\n  -webkit-line-clamp: 3;\n}\n.meta {\n  display: flex;\n  gap: 1rem;\n  margin-top: 1rem;\n  padding-top: 0.875rem;\n  border-top: 1px solid var(--clr-border-faint);\n  font-size: 0.78rem;\n  color: var(--clr-text-muted);\n  align-items: center;\n}\n.meta-item {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n.meta-item svg {\n  width: 0.85rem;\n  height: 0.85rem;\n  flex-shrink: 0;\n}\n.difficulty {\n  margin-left: auto;\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 0.18rem 0.55rem;\n  border-radius: 9999px;\n  background: var(--clr-surface-alt);\n  color: var(--clr-text-muted);\n}\n.diff-easy {\n  background: var(--clr-green-bg);\n  color: var(--clr-green-text);\n}\n.diff-medium {\n  background: var(--clr-amber-bg);\n  color: var(--clr-amber-text);\n}\n.diff-hard {\n  background: var(--clr-rust-bg);\n  color: var(--clr-rust-text);\n}\n.card.compact {\n  display: flex;\n  flex-direction: row;\n  border-radius: 1rem;\n}\n.card.compact .card-image {\n  aspect-ratio: unset;\n  width: 120px;\n  min-height: 100%;\n  flex-shrink: 0;\n  border-radius: 1rem 0 0 1rem;\n}\n.card.compact .card-body {\n  padding: 0.9rem 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.3rem;\n}\n.card.compact .category {\n  margin-bottom: 0;\n}\n.card.compact .title {\n  font-size: 0.95rem;\n  margin: 0;\n}\n.card.compact .meta {\n  margin-top: 0.5rem;\n  padding-top: 0.5rem;\n  font-size: 0.75rem;\n  gap: 0.75rem;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .card {\n    animation: none;\n    transition: box-shadow 0.2s;\n  }\n  .card:hover {\n    transform: none;\n  }\n  .card-image img {\n    transition: none;\n  }\n  .card:hover .card-image img {\n    transform: none;\n  }\n  .overlay-btn {\n    transition: opacity 0.15s;\n    transform: none !important;\n  }\n}\n@media (max-width: 500px) {\n  .card.compact .card-image {\n    width: 90px;\n  }\n  .card.compact .card-body {\n    padding: 0.75rem 0.875rem;\n  }\n  .card.compact .title {\n    font-size: 0.875rem;\n  }\n  .card.compact .meta {\n    font-size: 0.7rem;\n    gap: 0.5rem;\n  }\n}\n/*# sourceMappingURL=recipe-card.component.css.map */\n'] }]
  }], null, { recipe: [{
    type: Input,
    args: [{ required: true }]
  }], priority: [{
    type: Input
  }], index: [{
    type: Input
  }], featured: [{
    type: Input
  }], compact: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecipeCardComponent, { className: "RecipeCardComponent", filePath: "src/app/components/recipe-card/recipe-card.component.ts", lineNumber: 306 });
})();

export {
  RecipeCardComponent
};
//# sourceMappingURL=chunk-GNUGBRS5.js.map
