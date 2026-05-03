import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-OGGNHWOY.js";

// src/app/components/confirm-modal/confirm-modal.component.ts
function ConfirmModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275domListener("click", function ConfirmModalComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275domElementStart(1, "div", 2);
    \u0275\u0275domListener("click", function ConfirmModalComponent_Conditional_0_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275domElementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 3)(7, "button", 4);
    \u0275\u0275domListener("click", function ConfirmModalComponent_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(8, "\u041E\u0442\u043A\u0430\u0437");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "button", 5);
    \u0275\u0275domListener("click", function ConfirmModalComponent_Conditional_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirm());
    });
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.message);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.confirmLabel);
  }
}
var ConfirmModalComponent = class _ConfirmModalComponent {
  open = false;
  title = "\u041F\u043E\u0442\u0432\u044A\u0440\u0436\u0434\u0435\u043D\u0438\u0435";
  message = "\u0421\u0438\u0433\u0443\u0440\u043D\u0438 \u043B\u0438 \u0441\u0442\u0435?";
  confirmLabel = "\u0418\u0437\u0442\u0440\u0438\u0439";
  confirmed = new EventEmitter();
  cancelled = new EventEmitter();
  confirm() {
    this.confirmed.emit();
  }
  cancel() {
    this.cancelled.emit();
  }
  static \u0275fac = function ConfirmModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmModalComponent, selectors: [["app-confirm-modal"]], inputs: { open: "open", title: "title", message: "message", confirmLabel: "confirmLabel" }, outputs: { confirmed: "confirmed", cancelled: "cancelled" }, decls: 1, vars: 1, consts: [[1, "overlay"], [1, "overlay", 3, "click"], [1, "modal", 3, "click"], [1, "actions"], [1, "btn-cancel", 3, "click"], [1, "btn-confirm", 3, "click"]], template: function ConfirmModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ConfirmModalComponent_Conditional_0_Template, 11, 3, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.open ? 0 : -1);
    }
  }, styles: ["\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: var(--z-modal);\n  animation: _ngcontent-%COMP%_fade-in 0.18s var(--ease-out-expo);\n}\n@keyframes _ngcontent-%COMP%_fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--clr-surface);\n  border-radius: var(--radius-xl);\n  padding: 2rem;\n  max-width: 400px;\n  width: 90%;\n  box-shadow: var(--shadow-xl);\n  animation: _ngcontent-%COMP%_modal-in 0.25s var(--ease-out-expo);\n}\n@keyframes _ngcontent-%COMP%_modal-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\nh3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-family: var(--font-display);\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--clr-text);\n}\np[_ngcontent-%COMP%] {\n  color: var(--clr-text-muted);\n  font-size: 0.9rem;\n  line-height: 1.6;\n  margin: 0;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n}\n.btn-cancel[_ngcontent-%COMP%], \n.btn-confirm[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.25rem;\n  border-radius: var(--radius-pill);\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: 1px solid;\n  transition:\n    background 0.18s var(--ease-out-expo),\n    color 0.18s var(--ease-out-expo),\n    transform 0.1s var(--ease-out-expo);\n  touch-action: manipulation;\n}\n.btn-cancel[_ngcontent-%COMP%]:active, \n.btn-confirm[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: var(--clr-surface);\n  color: var(--clr-text-muted);\n  border-color: var(--clr-border-strong);\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--clr-surface-hover);\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  background: var(--clr-error);\n  color: var(--clr-surface);\n  border-color: var(--clr-error);\n}\n.btn-confirm[_ngcontent-%COMP%]:hover {\n  background: var(--clr-error-dark);\n  border-color: var(--clr-error-dark);\n}\n@media (prefers-reduced-motion: reduce) {\n  .overlay[_ngcontent-%COMP%], \n   .modal[_ngcontent-%COMP%] {\n    animation: none;\n  }\n  .btn-cancel[_ngcontent-%COMP%], \n   .btn-confirm[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .btn-cancel[_ngcontent-%COMP%]:active, \n   .btn-confirm[_ngcontent-%COMP%]:active {\n    transform: none;\n  }\n}\n/*# sourceMappingURL=confirm-modal.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmModalComponent, [{
    type: Component,
    args: [{ selector: "app-confirm-modal", standalone: true, template: `
    @if (open) {
      <div class="overlay" (click)="cancel()">
        <div class="modal" (click)="$event.stopPropagation()">
          <h3>{{ title }}</h3>
          <p>{{ message }}</p>
          <div class="actions">
            <button class="btn-cancel" (click)="cancel()">\u041E\u0442\u043A\u0430\u0437</button>
            <button class="btn-confirm" (click)="confirm()">{{ confirmLabel }}</button>
          </div>
        </div>
      </div>
    }
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;a4947af5ec877c2d8be2c25082788c548a0a046313e05a26f07f8289e6bac6f9;/home/ivaylo-penev/Desktop/Blog-System-Angular/frontend/src/app/components/confirm-modal/confirm-modal.component.ts */\n.overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: var(--z-modal);\n  animation: fade-in 0.18s var(--ease-out-expo);\n}\n@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal {\n  background: var(--clr-surface);\n  border-radius: var(--radius-xl);\n  padding: 2rem;\n  max-width: 400px;\n  width: 90%;\n  box-shadow: var(--shadow-xl);\n  animation: modal-in 0.25s var(--ease-out-expo);\n}\n@keyframes modal-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\nh3 {\n  margin: 0 0 0.5rem;\n  font-family: var(--font-display);\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--clr-text);\n}\np {\n  color: var(--clr-text-muted);\n  font-size: 0.9rem;\n  line-height: 1.6;\n  margin: 0;\n}\n.actions {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n}\n.btn-cancel,\n.btn-confirm {\n  padding: 0.5rem 1.25rem;\n  border-radius: var(--radius-pill);\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: 1px solid;\n  transition:\n    background 0.18s var(--ease-out-expo),\n    color 0.18s var(--ease-out-expo),\n    transform 0.1s var(--ease-out-expo);\n  touch-action: manipulation;\n}\n.btn-cancel:active,\n.btn-confirm:active {\n  transform: scale(0.97);\n}\n.btn-cancel {\n  background: var(--clr-surface);\n  color: var(--clr-text-muted);\n  border-color: var(--clr-border-strong);\n}\n.btn-cancel:hover {\n  background: var(--clr-surface-hover);\n}\n.btn-confirm {\n  background: var(--clr-error);\n  color: var(--clr-surface);\n  border-color: var(--clr-error);\n}\n.btn-confirm:hover {\n  background: var(--clr-error-dark);\n  border-color: var(--clr-error-dark);\n}\n@media (prefers-reduced-motion: reduce) {\n  .overlay,\n  .modal {\n    animation: none;\n  }\n  .btn-cancel,\n  .btn-confirm {\n    transition: none;\n  }\n  .btn-cancel:active,\n  .btn-confirm:active {\n    transform: none;\n  }\n}\n/*# sourceMappingURL=confirm-modal.component.css.map */\n"] }]
  }], null, { open: [{
    type: Input
  }], title: [{
    type: Input
  }], message: [{
    type: Input
  }], confirmLabel: [{
    type: Input
  }], confirmed: [{
    type: Output
  }], cancelled: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmModalComponent, { className: "ConfirmModalComponent", filePath: "src/app/components/confirm-modal/confirm-modal.component.ts", lineNumber: 98 });
})();

export {
  ConfirmModalComponent
};
//# sourceMappingURL=chunk-STXRDFLB.js.map
