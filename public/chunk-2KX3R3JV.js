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
} from "./chunk-OGGNHWOY.js";

// src/app/components/recipe-card/recipe-card.component.ts
var _c0 = (a0) => ["/recipes", a0];
function RecipeCardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 14);
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
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.paddedIndex);
  }
}
function RecipeCardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 16);
    \u0275\u0275text(2, "\u0412\u0438\u0436 \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u0442\u0430 \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4, "\u0412\u0438\u0436");
    \u0275\u0275elementEnd();
  }
}
function RecipeCardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.recipe.category.name);
  }
}
function RecipeCardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.recipe.excerpt);
  }
}
function RecipeCardComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 10);
    \u0275\u0275element(2, "path", 18)(3, "circle", 19)(4, "path", 20)(5, "path", 21);
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
  overlay = false;
  numbered = false;
  get paddedIndex() {
    return String(this.index + 1).padStart(2, "0");
  }
  imgLoaded = false;
  onImgLoad() {
    this.imgLoaded = true;
  }
  get gradient() {
    const from = this.recipe.hero_palette_from || "#c8b99a";
    const via = this.recipe.hero_palette_via || "#ddd0b8";
    const to = this.recipe.hero_palette_to || "#ede8de";
    return `linear-gradient(135deg, ${from}, ${via}, ${to})`;
  }
  static \u0275fac = function RecipeCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecipeCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecipeCardComponent, selectors: [["app-recipe-card"]], inputs: { recipe: "recipe", priority: "priority", index: "index", featured: "featured", compact: "compact", overlay: "overlay", numbered: "numbered" }, decls: 19, vars: 30, consts: [[1, "card", 3, "routerLink"], [1, "card-image"], [3, "src", "alt", "loading"], ["aria-hidden", "true", 1, "card-num"], [1, "card-body"], [1, "category"], [1, "title"], [1, "excerpt"], [1, "meta"], [1, "meta-item"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], [1, "difficulty"], [3, "load", "src", "alt", "loading"], [1, "card-overlay"], [1, "overlay-btn"], ["aria-hidden", "true", 1, "mobile-label"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"]], template: function RecipeCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, RecipeCardComponent_Conditional_2_Template, 1, 4, "img", 2);
      \u0275\u0275conditionalCreate(3, RecipeCardComponent_Conditional_3_Template, 2, 1, "span", 3);
      \u0275\u0275conditionalCreate(4, RecipeCardComponent_Conditional_4_Template, 5, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275conditionalCreate(6, RecipeCardComponent_Conditional_6_Template, 2, 1, "span", 5);
      \u0275\u0275elementStart(7, "h3", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(9, RecipeCardComponent_Conditional_9_Template, 2, 1, "p", 7);
      \u0275\u0275elementStart(10, "div", 8)(11, "span", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 10);
      \u0275\u0275element(13, "circle", 11)(14, "polyline", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, RecipeCardComponent_Conditional_16_Template, 7, 1, "span", 9);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "span", 13);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("animation-delay", (ctx.index < 6 ? ctx.index : 5) * 50 + "ms");
      \u0275\u0275classProp("featured", ctx.featured)("compact", ctx.compact)("overlay", ctx.overlay);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(28, _c0, ctx.recipe.slug));
      \u0275\u0275advance();
      \u0275\u0275styleProp("background", ctx.gradient);
      \u0275\u0275classProp("img-loaded", ctx.imgLoaded);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.recipe.hero_image ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.numbered ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.compact && !ctx.overlay ? 4 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.recipe.category ? 6 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.recipe.title);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.compact && (!ctx.overlay || ctx.featured) ? 9 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.recipe.prep_minutes + ctx.recipe.cook_minutes, " \u043C\u0438\u043D ");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.compact && !ctx.overlay ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("diff-easy", ctx.recipe.difficulty === "\u041B\u0435\u0441\u043D\u043E")("diff-medium", ctx.recipe.difficulty === "\u0421\u0440\u0435\u0434\u043D\u043E")("diff-hard", ctx.recipe.difficulty === "\u0417\u0430 \u043D\u0430\u043F\u0440\u0435\u0434\u043D\u0430\u043B\u0438");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.recipe.difficulty);
    }
  }, dependencies: [RouterLink], styles: ['@charset "UTF-8";\n\n\n.card[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  border-radius: var(--radius-lg);\n  background: var(--clr-surface);\n  border: 1px solid var(--clr-border-faint);\n  box-shadow: var(--shadow-sm);\n  text-decoration: none;\n  color: inherit;\n  overflow: hidden;\n  transition: transform 0.32s var(--ease-out-expo), box-shadow 0.32s var(--ease-out-expo);\n  animation: _ngcontent-%COMP%_fadeInUp 0.48s var(--ease-out-expo) both;\n  touch-action: manipulation;\n  cursor: pointer;\n}\n@media (hover: hover) and (pointer: fine) {\n  .card[_ngcontent-%COMP%]:hover {\n    transform: translateY(-4px);\n    box-shadow: var(--shadow-lg);\n  }\n}\n.card[_ngcontent-%COMP%]:active {\n  transform: translateY(-1px) scale(0.99);\n  box-shadow: var(--shadow-sm);\n  transition-duration: 0.1s;\n}\n.card-image[_ngcontent-%COMP%] {\n  aspect-ratio: 4/3;\n  position: relative;\n  overflow: hidden;\n}\n.card.featured[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n  aspect-ratio: 16/9;\n}\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s var(--ease-out-expo), opacity 0.3s ease;\n  opacity: 0;\n}\n.card-image.img-loaded[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@media (hover: hover) and (pointer: fine) {\n  .card[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transform: scale(1.05);\n  }\n}\n.card-image[_ngcontent-%COMP%]:not(.img-loaded)::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: var(--clr-skeleton);\n  z-index: 1;\n}\n.card-image[_ngcontent-%COMP%]:not(.img-loaded)::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: 2;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: _ngcontent-%COMP%_img-shimmer 1.4s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_img-shimmer {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n.card-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(20, 15, 10, 0);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.32s var(--ease-out-expo);\n}\n@media (hover: hover) and (pointer: fine) {\n  .card[_ngcontent-%COMP%]:hover   .card-overlay[_ngcontent-%COMP%] {\n    background: rgba(20, 15, 10, 0.44);\n  }\n}\n.overlay-btn[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-family: var(--font-body);\n  font-weight: 600;\n  font-size: 0.85rem;\n  letter-spacing: 0.04em;\n  padding: var(--space-2) var(--space-5);\n  border: 1.5px solid oklch(100% 0 0deg / 0.7);\n  border-radius: var(--radius-pill);\n  opacity: 0;\n  transform: translateY(8px) scale(0.96);\n  transition: opacity 0.25s var(--ease-out-expo), transform 0.25s var(--ease-out-expo);\n}\n@media (hover: hover) and (pointer: fine) {\n  .card[_ngcontent-%COMP%]:hover   .overlay-btn[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.mobile-label[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (hover: none) {\n  .mobile-label[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    bottom: var(--space-2);\n    right: var(--space-3);\n    font-size: 0.68rem;\n    font-weight: 700;\n    letter-spacing: 0.06em;\n    text-transform: uppercase;\n    color: #ffffff;\n    background: rgba(20, 15, 10, 0.52);\n    padding: var(--space-1) var(--space-2);\n    border-radius: var(--radius-pill);\n    z-index: 2;\n    pointer-events: none;\n  }\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: var(--space-5) var(--space-5) var(--space-6);\n}\n.category[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.62rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  color: #ffffff;\n  background: var(--clr-brand);\n  padding: 2px var(--space-3);\n  border-radius: var(--radius-pill);\n  margin-bottom: var(--space-2);\n}\n.title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--clr-text);\n  margin: 0 0 var(--space-2);\n  line-height: 1.22;\n}\n.card.featured[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.55rem;\n  font-weight: 800;\n  line-height: 1.12;\n}\n.excerpt[_ngcontent-%COMP%] {\n  font-size: 0.865rem;\n  color: var(--clr-text-muted);\n  line-height: 1.65;\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.card.featured[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%] {\n  -webkit-line-clamp: 3;\n}\n.meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n  margin-top: var(--space-4);\n  padding-top: var(--space-3);\n  border-top: 1px solid var(--clr-border-faint);\n  font-size: 0.775rem;\n  color: var(--clr-text-muted);\n  align-items: center;\n  font-variant-numeric: tabular-nums;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-1);\n}\n.meta-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.8rem;\n  height: 0.8rem;\n  flex-shrink: 0;\n}\n.difficulty[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.68rem;\n  font-weight: 700;\n  padding: 2px var(--space-2);\n  border-radius: var(--radius-pill);\n  background: var(--clr-surface-alt);\n  color: var(--clr-text-muted);\n}\n.diff-easy[_ngcontent-%COMP%] {\n  background: var(--clr-green-bg);\n  color: var(--clr-green-text);\n}\n.diff-medium[_ngcontent-%COMP%] {\n  background: var(--clr-amber-bg);\n  color: var(--clr-amber-text);\n}\n.diff-hard[_ngcontent-%COMP%] {\n  background: var(--clr-rust-bg);\n  color: var(--clr-rust-text);\n}\n.card-num[_ngcontent-%COMP%] {\n  position: absolute;\n  top: var(--space-3);\n  left: var(--space-4);\n  font-family: var(--font-display);\n  font-size: 0.9rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  color: rgba(255, 255, 255, 0.92);\n  z-index: 3;\n  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.45);\n  pointer-events: none;\n}\n.card-num[_ngcontent-%COMP%]::before {\n  content: "";\n  display: inline-block;\n  width: 1.2rem;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.65);\n  vertical-align: middle;\n  margin-right: var(--space-2);\n  transform: translateY(-1px);\n}\n.card.featured[_ngcontent-%COMP%]   .card-num[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  top: var(--space-4);\n  left: var(--space-5);\n}\n.card.overlay[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  display: block;\n  isolation: isolate;\n  padding: 0;\n  background: transparent;\n  border: none;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.card.overlay[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  aspect-ratio: auto;\n  z-index: 0;\n}\n.card.overlay[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: auto 0 0 0;\n  padding: var(--space-4) var(--space-5);\n  background:\n    linear-gradient(\n      180deg,\n      transparent 0%,\n      rgba(10, 8, 5, 0.3) 35%,\n      rgba(10, 8, 5, 0.84) 100%);\n  color: #ffffff;\n  z-index: 2;\n}\n.card.overlay[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.38);\n  color: #ffffff;\n  border: 1px solid oklch(100% 0 0deg / 0.16);\n}\n.card.overlay[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 1.1rem;\n  line-height: 1.18;\n  letter-spacing: -0.01em;\n}\n.card.overlay.featured[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: clamp(1.6rem, 2.5vw, 2.25rem);\n  line-height: 1.08;\n  letter-spacing: -0.02em;\n  font-weight: 800;\n}\n.card.overlay[_ngcontent-%COMP%]   .excerpt[_ngcontent-%COMP%] {\n  color: #ffffffd9;\n}\n.card.overlay[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  border-top-color: #ffffff33;\n  color: #ffffffe6;\n  margin-top: var(--space-3);\n  padding-top: var(--space-3);\n}\n.card.overlay[_ngcontent-%COMP%]   .difficulty[_ngcontent-%COMP%] {\n  background: #ffffff29;\n  color: #ffffff;\n}\n.card.overlay[_ngcontent-%COMP%]   .diff-easy[_ngcontent-%COMP%] {\n  background: #4ca95fe0;\n  color: #ffffff;\n}\n.card.overlay[_ngcontent-%COMP%]   .diff-medium[_ngcontent-%COMP%] {\n  background: #df8623e0;\n  color: #ffffff;\n}\n.card.overlay[_ngcontent-%COMP%]   .diff-hard[_ngcontent-%COMP%] {\n  background: #d24e3ee0;\n  color: #ffffff;\n}\n@media (hover: hover) and (pointer: fine) {\n  .card.overlay[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transform: scale(1.06);\n  }\n}\n.card.compact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  border-radius: var(--radius-md);\n}\n.card.compact[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n  aspect-ratio: unset;\n  width: 110px;\n  min-height: 100%;\n  flex-shrink: 0;\n}\n.card.compact[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: var(--space-1);\n}\n.card.compact[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.card.compact[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 0.925rem;\n  margin: 0;\n}\n.card.compact[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n  padding-top: var(--space-2);\n  font-size: 0.72rem;\n  gap: var(--space-2);\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .card[_ngcontent-%COMP%] {\n    animation: none;\n    transition: box-shadow 0.2s;\n  }\n  .card[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n  .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .card[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transform: none;\n  }\n  .overlay-btn[_ngcontent-%COMP%] {\n    transition: opacity 0.15s;\n    transform: none !important;\n  }\n}\n@media (max-width: 500px) {\n  .card.compact[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n    width: 88px;\n  }\n  .card.compact[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: var(--space-3);\n  }\n  .card.compact[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n/*# sourceMappingURL=recipe-card.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecipeCardComponent, [{
    type: Component,
    args: [{ selector: "app-recipe-card", standalone: true, imports: [RouterLink], template: `
    <a [routerLink]="['/recipes', recipe.slug]" class="card"
       [class.featured]="featured" [class.compact]="compact" [class.overlay]="overlay"
       [style.animation-delay]="(index < 6 ? index : 5) * 50 + 'ms'">
      <div class="card-image" [class.img-loaded]="imgLoaded" [style.background]="gradient">
        @if (recipe.hero_image) {
          <img [src]="recipe.hero_image" [alt]="recipe.title"
               [loading]="priority ? 'eager' : 'lazy'"
               [attr.fetchpriority]="priority ? 'high' : null"
               (load)="onImgLoad()" />
        }
        @if (numbered) {
          <span class="card-num" aria-hidden="true">{{ paddedIndex }}</span>
        }
        @if (!compact && !overlay) {
          <div class="card-overlay">
            <span class="overlay-btn">\u0412\u0438\u0436 \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u0442\u0430 \u2192</span>
          </div>
          <span class="mobile-label" aria-hidden="true">\u0412\u0438\u0436</span>
        }
      </div>
      <div class="card-body">
        @if (recipe.category) {
          <span class="category">{{ recipe.category.name }}</span>
        }
        <h3 class="title">{{ recipe.title }}</h3>
        @if (!compact && (!overlay || featured)) {
          <p class="excerpt">{{ recipe.excerpt }}</p>
        }
        <div class="meta">
          <span class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {{ recipe.prep_minutes + recipe.cook_minutes }} \u043C\u0438\u043D
          </span>
          @if (!compact && !overlay) {
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
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;ccf2085c4b9abff6c3eb7540ce9c2ab97e34c9fc29e1f41ea920c1dc9810d16d;/home/ivaylo-penev/Desktop/Blog-System-Angular/frontend/src/app/components/recipe-card/recipe-card.component.ts */\n.card {\n  display: block;\n  position: relative;\n  border-radius: var(--radius-lg);\n  background: var(--clr-surface);\n  border: 1px solid var(--clr-border-faint);\n  box-shadow: var(--shadow-sm);\n  text-decoration: none;\n  color: inherit;\n  overflow: hidden;\n  transition: transform 0.32s var(--ease-out-expo), box-shadow 0.32s var(--ease-out-expo);\n  animation: fadeInUp 0.48s var(--ease-out-expo) both;\n  touch-action: manipulation;\n  cursor: pointer;\n}\n@media (hover: hover) and (pointer: fine) {\n  .card:hover {\n    transform: translateY(-4px);\n    box-shadow: var(--shadow-lg);\n  }\n}\n.card:active {\n  transform: translateY(-1px) scale(0.99);\n  box-shadow: var(--shadow-sm);\n  transition-duration: 0.1s;\n}\n.card-image {\n  aspect-ratio: 4/3;\n  position: relative;\n  overflow: hidden;\n}\n.card.featured .card-image {\n  aspect-ratio: 16/9;\n}\n.card-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s var(--ease-out-expo), opacity 0.3s ease;\n  opacity: 0;\n}\n.card-image.img-loaded img {\n  opacity: 1;\n}\n@media (hover: hover) and (pointer: fine) {\n  .card:hover .card-image img {\n    transform: scale(1.05);\n  }\n}\n.card-image:not(.img-loaded)::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: var(--clr-skeleton);\n  z-index: 1;\n}\n.card-image:not(.img-loaded)::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: 2;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      var(--clr-skeleton-shine) 50%,\n      transparent 100%);\n  transform: translateX(-100%);\n  animation: img-shimmer 1.4s linear infinite;\n}\n@keyframes img-shimmer {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n.card-overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(20, 15, 10, 0);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.32s var(--ease-out-expo);\n}\n@media (hover: hover) and (pointer: fine) {\n  .card:hover .card-overlay {\n    background: rgba(20, 15, 10, 0.44);\n  }\n}\n.overlay-btn {\n  color: #ffffff;\n  font-family: var(--font-body);\n  font-weight: 600;\n  font-size: 0.85rem;\n  letter-spacing: 0.04em;\n  padding: var(--space-2) var(--space-5);\n  border: 1.5px solid oklch(100% 0 0deg / 0.7);\n  border-radius: var(--radius-pill);\n  opacity: 0;\n  transform: translateY(8px) scale(0.96);\n  transition: opacity 0.25s var(--ease-out-expo), transform 0.25s var(--ease-out-expo);\n}\n@media (hover: hover) and (pointer: fine) {\n  .card:hover .overlay-btn {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.mobile-label {\n  display: none;\n}\n@media (hover: none) {\n  .mobile-label {\n    display: block;\n    position: absolute;\n    bottom: var(--space-2);\n    right: var(--space-3);\n    font-size: 0.68rem;\n    font-weight: 700;\n    letter-spacing: 0.06em;\n    text-transform: uppercase;\n    color: #ffffff;\n    background: rgba(20, 15, 10, 0.52);\n    padding: var(--space-1) var(--space-2);\n    border-radius: var(--radius-pill);\n    z-index: 2;\n    pointer-events: none;\n  }\n}\n.card-body {\n  padding: var(--space-5) var(--space-5) var(--space-6);\n}\n.category {\n  display: inline-block;\n  font-size: 0.62rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  color: #ffffff;\n  background: var(--clr-brand);\n  padding: 2px var(--space-3);\n  border-radius: var(--radius-pill);\n  margin-bottom: var(--space-2);\n}\n.title {\n  font-family: var(--font-display);\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--clr-text);\n  margin: 0 0 var(--space-2);\n  line-height: 1.22;\n}\n.card.featured .title {\n  font-size: 1.55rem;\n  font-weight: 800;\n  line-height: 1.12;\n}\n.excerpt {\n  font-size: 0.865rem;\n  color: var(--clr-text-muted);\n  line-height: 1.65;\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.card.featured .excerpt {\n  -webkit-line-clamp: 3;\n}\n.meta {\n  display: flex;\n  gap: var(--space-3);\n  margin-top: var(--space-4);\n  padding-top: var(--space-3);\n  border-top: 1px solid var(--clr-border-faint);\n  font-size: 0.775rem;\n  color: var(--clr-text-muted);\n  align-items: center;\n  font-variant-numeric: tabular-nums;\n}\n.meta-item {\n  display: flex;\n  align-items: center;\n  gap: var(--space-1);\n}\n.meta-item svg {\n  width: 0.8rem;\n  height: 0.8rem;\n  flex-shrink: 0;\n}\n.difficulty {\n  margin-left: auto;\n  font-size: 0.68rem;\n  font-weight: 700;\n  padding: 2px var(--space-2);\n  border-radius: var(--radius-pill);\n  background: var(--clr-surface-alt);\n  color: var(--clr-text-muted);\n}\n.diff-easy {\n  background: var(--clr-green-bg);\n  color: var(--clr-green-text);\n}\n.diff-medium {\n  background: var(--clr-amber-bg);\n  color: var(--clr-amber-text);\n}\n.diff-hard {\n  background: var(--clr-rust-bg);\n  color: var(--clr-rust-text);\n}\n.card-num {\n  position: absolute;\n  top: var(--space-3);\n  left: var(--space-4);\n  font-family: var(--font-display);\n  font-size: 0.9rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  color: rgba(255, 255, 255, 0.92);\n  z-index: 3;\n  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.45);\n  pointer-events: none;\n}\n.card-num::before {\n  content: "";\n  display: inline-block;\n  width: 1.2rem;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.65);\n  vertical-align: middle;\n  margin-right: var(--space-2);\n  transform: translateY(-1px);\n}\n.card.featured .card-num {\n  font-size: 1.1rem;\n  top: var(--space-4);\n  left: var(--space-5);\n}\n.card.overlay {\n  position: relative;\n  height: 100%;\n  display: block;\n  isolation: isolate;\n  padding: 0;\n  background: transparent;\n  border: none;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.card.overlay .card-image {\n  position: absolute;\n  inset: 0;\n  aspect-ratio: auto;\n  z-index: 0;\n}\n.card.overlay .card-body {\n  position: absolute;\n  inset: auto 0 0 0;\n  padding: var(--space-4) var(--space-5);\n  background:\n    linear-gradient(\n      180deg,\n      transparent 0%,\n      rgba(10, 8, 5, 0.3) 35%,\n      rgba(10, 8, 5, 0.84) 100%);\n  color: #ffffff;\n  z-index: 2;\n}\n.card.overlay .category {\n  background: rgba(0, 0, 0, 0.38);\n  color: #ffffff;\n  border: 1px solid oklch(100% 0 0deg / 0.16);\n}\n.card.overlay .title {\n  color: #ffffff;\n  font-size: 1.1rem;\n  line-height: 1.18;\n  letter-spacing: -0.01em;\n}\n.card.overlay.featured .title {\n  font-size: clamp(1.6rem, 2.5vw, 2.25rem);\n  line-height: 1.08;\n  letter-spacing: -0.02em;\n  font-weight: 800;\n}\n.card.overlay .excerpt {\n  color: #ffffffd9;\n}\n.card.overlay .meta {\n  border-top-color: #ffffff33;\n  color: #ffffffe6;\n  margin-top: var(--space-3);\n  padding-top: var(--space-3);\n}\n.card.overlay .difficulty {\n  background: #ffffff29;\n  color: #ffffff;\n}\n.card.overlay .diff-easy {\n  background: #4ca95fe0;\n  color: #ffffff;\n}\n.card.overlay .diff-medium {\n  background: #df8623e0;\n  color: #ffffff;\n}\n.card.overlay .diff-hard {\n  background: #d24e3ee0;\n  color: #ffffff;\n}\n@media (hover: hover) and (pointer: fine) {\n  .card.overlay:hover .card-image img {\n    transform: scale(1.06);\n  }\n}\n.card.compact {\n  display: flex;\n  flex-direction: row;\n  border-radius: var(--radius-md);\n}\n.card.compact .card-image {\n  aspect-ratio: unset;\n  width: 110px;\n  min-height: 100%;\n  flex-shrink: 0;\n}\n.card.compact .card-body {\n  padding: var(--space-4);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: var(--space-1);\n}\n.card.compact .category {\n  margin-bottom: 0;\n}\n.card.compact .title {\n  font-size: 0.925rem;\n  margin: 0;\n}\n.card.compact .meta {\n  margin-top: var(--space-2);\n  padding-top: var(--space-2);\n  font-size: 0.72rem;\n  gap: var(--space-2);\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .card {\n    animation: none;\n    transition: box-shadow 0.2s;\n  }\n  .card:hover {\n    transform: none;\n  }\n  .card-image img {\n    transition: none;\n  }\n  .card:hover .card-image img {\n    transform: none;\n  }\n  .overlay-btn {\n    transition: opacity 0.15s;\n    transform: none !important;\n  }\n}\n@media (max-width: 500px) {\n  .card.compact .card-image {\n    width: 88px;\n  }\n  .card.compact .card-body {\n    padding: var(--space-3);\n  }\n  .card.compact .title {\n    font-size: 0.875rem;\n  }\n}\n/*# sourceMappingURL=recipe-card.component.css.map */\n'] }]
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
  }], overlay: [{
    type: Input
  }], numbered: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecipeCardComponent, { className: "RecipeCardComponent", filePath: "src/app/components/recipe-card/recipe-card.component.ts", lineNumber: 373 });
})();

export {
  RecipeCardComponent
};
//# sourceMappingURL=chunk-2KX3R3JV.js.map
