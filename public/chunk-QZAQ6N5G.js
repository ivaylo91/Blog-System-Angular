import {
  ChangeDetectionStrategy,
  Component,
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-OGGNHWOY.js";

// src/app/pages/not-found/not-found.component.ts
var NotFoundComponent = class _NotFoundComponent {
  static \u0275fac = function NotFoundComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotFoundComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["app-not-found"]], decls: 13, vars: 0, consts: [[1, "not-found"], [1, "content"], ["aria-hidden", "true", 1, "num"], [1, "sub"], [1, "actions"], ["routerLink", "/", 1, "btn-primary"], ["routerLink", "/recipes", 1, "btn-secondary"]], template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3, "404");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0442\u0430 \u043D\u0435 \u0435 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "\u0418\u0437\u0433\u043B\u0435\u0436\u0434\u0430 \u0442\u0430\u0437\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0430 \u0435 \u0438\u0437\u0433\u043E\u0440\u044F\u043B\u0430 \u0438\u043B\u0438 \u043D\u0438\u043A\u043E\u0433\u0430 \u043D\u0435 \u0435 \u0441\u044A\u0449\u0435\u0441\u0442\u0432\u0443\u0432\u0430\u043B\u0430.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 4)(9, "a", 5);
      \u0275\u0275text(10, "\u041A\u044A\u043C \u043D\u0430\u0447\u0430\u043B\u043E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 6);
      \u0275\u0275text(12, "\u0420\u0430\u0437\u0433\u043B\u0435\u0434\u0430\u0439 \u0440\u0435\u0446\u0435\u043F\u0442\u0438");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RouterLink], styles: ["\n.not-found[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: calc(100dvh - 8rem);\n  padding: 3rem var(--space-6);\n  background: var(--clr-surface);\n}\n.content[_ngcontent-%COMP%] {\n  text-align: left;\n  max-width: 520px;\n}\n.num[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(5rem, 15vw, 10rem);\n  font-weight: 800;\n  color: var(--clr-brand);\n  opacity: 0.12;\n  line-height: 1;\n  margin: 0 0 var(--space-4);\n  letter-spacing: -0.04em;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.6rem, 3vw, 2.25rem);\n  font-weight: 800;\n  color: var(--clr-text);\n  margin: 0 0 var(--space-4);\n  letter-spacing: -0.02em;\n  line-height: 1.1;\n}\n.sub[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--clr-text-muted);\n  margin: 0 0 var(--space-8);\n  line-height: 1.65;\n  max-width: 38ch;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n  flex-wrap: wrap;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: var(--space-3) var(--space-6);\n  background: var(--clr-brand);\n  color: #ffffff;\n  border-radius: var(--radius-pill);\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 0.9rem;\n  transition: background 0.18s, transform 0.15s;\n  touch-action: manipulation;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--clr-brand-dark);\n  transform: translateY(-1px);\n}\n.btn-primary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: var(--space-3) var(--space-6);\n  background: transparent;\n  color: var(--clr-text);\n  border-radius: var(--radius-pill);\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.9rem;\n  border: 1.5px solid var(--clr-border-strong);\n  transition:\n    background 0.18s,\n    border-color 0.18s,\n    transform 0.15s;\n  touch-action: manipulation;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--clr-surface-hover);\n  border-color: var(--clr-border-strong);\n  transform: translateY(-1px);\n}\n.btn-secondary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n/*# sourceMappingURL=not-found.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFoundComponent, [{
    type: Component,
    args: [{ selector: "app-not-found", standalone: true, imports: [RouterLink], template: `
    <div class="not-found">
      <div class="content">
        <p class="num" aria-hidden="true">404</p>
        <h1>\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0442\u0430 \u043D\u0435 \u0435 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0430</h1>
        <p class="sub">\u0418\u0437\u0433\u043B\u0435\u0436\u0434\u0430 \u0442\u0430\u0437\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0430 \u0435 \u0438\u0437\u0433\u043E\u0440\u044F\u043B\u0430 \u0438\u043B\u0438 \u043D\u0438\u043A\u043E\u0433\u0430 \u043D\u0435 \u0435 \u0441\u044A\u0449\u0435\u0441\u0442\u0432\u0443\u0432\u0430\u043B\u0430.</p>
        <div class="actions">
          <a routerLink="/" class="btn-primary">\u041A\u044A\u043C \u043D\u0430\u0447\u0430\u043B\u043E</a>
          <a routerLink="/recipes" class="btn-secondary">\u0420\u0430\u0437\u0433\u043B\u0435\u0434\u0430\u0439 \u0440\u0435\u0446\u0435\u043F\u0442\u0438</a>
        </div>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;9541996176dc734a6e0288523b9db6e12ed45b3d7e83d7be1f2cde997590e40c;/home/ivaylo-penev/Desktop/Blog-System-Angular/frontend/src/app/pages/not-found/not-found.component.ts */\n.not-found {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: calc(100dvh - 8rem);\n  padding: 3rem var(--space-6);\n  background: var(--clr-surface);\n}\n.content {\n  text-align: left;\n  max-width: 520px;\n}\n.num {\n  font-family: var(--font-display);\n  font-size: clamp(5rem, 15vw, 10rem);\n  font-weight: 800;\n  color: var(--clr-brand);\n  opacity: 0.12;\n  line-height: 1;\n  margin: 0 0 var(--space-4);\n  letter-spacing: -0.04em;\n}\nh1 {\n  font-family: var(--font-display);\n  font-size: clamp(1.6rem, 3vw, 2.25rem);\n  font-weight: 800;\n  color: var(--clr-text);\n  margin: 0 0 var(--space-4);\n  letter-spacing: -0.02em;\n  line-height: 1.1;\n}\n.sub {\n  font-size: 1rem;\n  color: var(--clr-text-muted);\n  margin: 0 0 var(--space-8);\n  line-height: 1.65;\n  max-width: 38ch;\n}\n.actions {\n  display: flex;\n  gap: var(--space-3);\n  flex-wrap: wrap;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  padding: var(--space-3) var(--space-6);\n  background: var(--clr-brand);\n  color: #ffffff;\n  border-radius: var(--radius-pill);\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 0.9rem;\n  transition: background 0.18s, transform 0.15s;\n  touch-action: manipulation;\n}\n.btn-primary:hover {\n  background: var(--clr-brand-dark);\n  transform: translateY(-1px);\n}\n.btn-primary:active {\n  transform: translateY(0);\n}\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  padding: var(--space-3) var(--space-6);\n  background: transparent;\n  color: var(--clr-text);\n  border-radius: var(--radius-pill);\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.9rem;\n  border: 1.5px solid var(--clr-border-strong);\n  transition:\n    background 0.18s,\n    border-color 0.18s,\n    transform 0.15s;\n  touch-action: manipulation;\n}\n.btn-secondary:hover {\n  background: var(--clr-surface-hover);\n  border-color: var(--clr-border-strong);\n  transform: translateY(-1px);\n}\n.btn-secondary:active {\n  transform: translateY(0);\n}\n/*# sourceMappingURL=not-found.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src/app/pages/not-found/not-found.component.ts", lineNumber: 95 });
})();
export {
  NotFoundComponent
};
//# sourceMappingURL=chunk-QZAQ6N5G.js.map
