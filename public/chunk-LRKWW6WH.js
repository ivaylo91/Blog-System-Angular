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
} from "./chunk-LVOWXKII.js";

// src/app/pages/not-found/not-found.component.ts
var NotFoundComponent = class _NotFoundComponent {
  static \u0275fac = function NotFoundComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotFoundComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["app-not-found"]], decls: 15, vars: 0, consts: [[1, "not-found"], [1, "content"], [1, "emoji"], [1, "title"], [1, "subtitle"], [1, "actions"], ["routerLink", "/", 1, "btn-primary"], ["routerLink", "/recipes", 1, "btn-secondary"]], template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "\u{1F373}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "404");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0442\u0430 \u043D\u0435 \u0435 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 4);
      \u0275\u0275text(9, "\u0418\u0437\u0433\u043B\u0435\u0436\u0434\u0430 \u0442\u0430\u0437\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0430 \u0435 \u0438\u0437\u0433\u043E\u0440\u044F\u043B\u0430 \u0438\u043B\u0438 \u043D\u0438\u043A\u043E\u0433\u0430 \u043D\u0435 \u0435 \u0441\u044A\u0449\u0435\u0441\u0442\u0432\u0443\u0432\u0430\u043B\u0430.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 5)(11, "a", 6);
      \u0275\u0275text(12, "\u041A\u044A\u043C \u043D\u0430\u0447\u0430\u043B\u043E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 7);
      \u0275\u0275text(14, "\u0420\u0430\u0437\u0433\u043B\u0435\u0434\u0430\u0439 \u0440\u0435\u0446\u0435\u043F\u0442\u0438");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RouterLink], styles: ['\n.not-found[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: calc(100vh - 8rem);\n  padding: 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #fdf8f0 0%,\n      #f5f0e8 100%);\n}\n.content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 480px;\n}\n.emoji[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 0.5rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: "Georgia", serif;\n  font-size: 6rem;\n  color: #78350f;\n  margin: 0;\n  line-height: 1;\n  opacity: 0.15;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: "Georgia", serif;\n  font-size: 1.75rem;\n  color: #1c1917;\n  margin: 0.5rem 0 0.75rem;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #57534e;\n  font-size: 1rem;\n  margin: 0 0 2rem;\n  line-height: 1.6;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.75rem;\n  background: #78350f;\n  color: #fff;\n  border-radius: 0.875rem;\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 0.95rem;\n  transition: background 0.2s, transform 0.15s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #5c2a0b;\n  transform: translateY(-1px);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.75rem;\n  background: #fff;\n  color: #1c1917;\n  border-radius: 0.875rem;\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 0.95rem;\n  border: 1.5px solid rgba(0, 0, 0, 0.12);\n  transition: background 0.2s, transform 0.15s;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f5f0e8;\n  transform: translateY(-1px);\n}\n/*# sourceMappingURL=not-found.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFoundComponent, [{
    type: Component,
    args: [{ selector: "app-not-found", standalone: true, imports: [RouterLink], template: `
    <div class="not-found">
      <div class="content">
        <div class="emoji">\u{1F373}</div>
        <h1>404</h1>
        <p class="title">\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0442\u0430 \u043D\u0435 \u0435 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0430</p>
        <p class="subtitle">\u0418\u0437\u0433\u043B\u0435\u0436\u0434\u0430 \u0442\u0430\u0437\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0430 \u0435 \u0438\u0437\u0433\u043E\u0440\u044F\u043B\u0430 \u0438\u043B\u0438 \u043D\u0438\u043A\u043E\u0433\u0430 \u043D\u0435 \u0435 \u0441\u044A\u0449\u0435\u0441\u0442\u0432\u0443\u0432\u0430\u043B\u0430.</p>
        <div class="actions">
          <a routerLink="/" class="btn-primary">\u041A\u044A\u043C \u043D\u0430\u0447\u0430\u043B\u043E</a>
          <a routerLink="/recipes" class="btn-secondary">\u0420\u0430\u0437\u0433\u043B\u0435\u0434\u0430\u0439 \u0440\u0435\u0446\u0435\u043F\u0442\u0438</a>
        </div>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* angular:styles/component:scss;235f6f52bb6dbb70d714fa56bb53f6941032b30476d228dd5f64225249df8ae8;C:/Users/ipene/Desktop/Blog-System-Angular/frontend/src/app/pages/not-found/not-found.component.ts */\n.not-found {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: calc(100vh - 8rem);\n  padding: 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #fdf8f0 0%,\n      #f5f0e8 100%);\n}\n.content {\n  text-align: center;\n  max-width: 480px;\n}\n.emoji {\n  font-size: 4rem;\n  margin-bottom: 0.5rem;\n}\nh1 {\n  font-family: "Georgia", serif;\n  font-size: 6rem;\n  color: #78350f;\n  margin: 0;\n  line-height: 1;\n  opacity: 0.15;\n}\n.title {\n  font-family: "Georgia", serif;\n  font-size: 1.75rem;\n  color: #1c1917;\n  margin: 0.5rem 0 0.75rem;\n}\n.subtitle {\n  color: #57534e;\n  font-size: 1rem;\n  margin: 0 0 2rem;\n  line-height: 1.6;\n}\n.actions {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.btn-primary {\n  padding: 0.75rem 1.75rem;\n  background: #78350f;\n  color: #fff;\n  border-radius: 0.875rem;\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 0.95rem;\n  transition: background 0.2s, transform 0.15s;\n}\n.btn-primary:hover {\n  background: #5c2a0b;\n  transform: translateY(-1px);\n}\n.btn-secondary {\n  padding: 0.75rem 1.75rem;\n  background: #fff;\n  color: #1c1917;\n  border-radius: 0.875rem;\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 0.95rem;\n  border: 1.5px solid rgba(0, 0, 0, 0.12);\n  transition: background 0.2s, transform 0.15s;\n}\n.btn-secondary:hover {\n  background: #f5f0e8;\n  transform: translateY(-1px);\n}\n/*# sourceMappingURL=not-found.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src/app/pages/not-found/not-found.component.ts", lineNumber: 83 });
})();
export {
  NotFoundComponent
};
//# sourceMappingURL=chunk-LRKWW6WH.js.map
