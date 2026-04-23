import {
  AuthService
} from "./chunk-NMKHPTKL.js";
import {
  SeoService
} from "./chunk-QW5YG2I6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-CZI4FLAU.js";
import "./chunk-GL5TQRYS.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Router,
  RouterLink,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LVOWXKII.js";

// src/app/pages/signin/signin.component.ts
function SigninComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 23);
    \u0275\u0275element(2, "circle", 28)(3, "line", 29)(4, "line", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function SigninComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 31);
    \u0275\u0275element(2, "polyline", 32);
    \u0275\u0275elementEnd()();
  }
}
function SigninComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 23);
    \u0275\u0275element(1, "path", 33)(2, "line", 34);
    \u0275\u0275elementEnd();
  }
}
function SigninComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 23);
    \u0275\u0275element(1, "path", 35)(2, "circle", 36);
    \u0275\u0275elementEnd();
  }
}
function SigninComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 37);
    \u0275\u0275text(1, " \u0412\u043B\u0438\u0437\u0430\u043D\u0435... ");
  }
}
function SigninComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 38);
    \u0275\u0275element(1, "path", 39)(2, "polyline", 40)(3, "line", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u0412\u0445\u043E\u0434 ");
  }
}
var SigninComponent = class _SigninComponent {
  authService = inject(AuthService);
  router = inject(Router);
  seo = inject(SeoService);
  cdr = inject(ChangeDetectorRef);
  email = "";
  password = "";
  error = "";
  loading = false;
  showPassword = false;
  ngOnInit() {
    this.seo.set({
      title: "\u0412\u0445\u043E\u0434",
      description: "\u0412\u043B\u0435\u0437 \u0432 \u043F\u0440\u043E\u0444\u0438\u043B\u0430 \u0441\u0438 \u0432 \u043A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F \u0431\u043B\u043E\u0433 \u043D\u0430 \u0418\u0432\u043E, \u0437\u0430 \u0434\u0430 \u043E\u0441\u0442\u0430\u0432\u044F\u0448 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438, \u043E\u0446\u0435\u043D\u043A\u0438 \u0438 \u0434\u0430 \u0437\u0430\u043F\u0430\u0437\u0432\u0430\u0448 \u043B\u044E\u0431\u0438\u043C\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438."
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.loading = true;
    this.error = "";
    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(["/"]);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.message || err.error?.errors?.email?.[0] || "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0438\u043C\u0435\u0439\u043B \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u0430.";
        this.cdr.markForCheck();
      }
    });
  }
  static \u0275fac = function SigninComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SigninComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SigninComponent, selectors: [["app-signin"]], decls: 46, vars: 11, consts: [["emailInput", "ngModel"], [1, "auth-page"], [1, "auth-card"], [1, "brand"], ["aria-hidden", "true", 1, "brand-icon"], [1, "brand-name"], [1, "subtitle"], ["role", "alert", 1, "error-msg"], ["novalidate", "", 3, "submit"], [1, "field"], ["for", "signin-email"], [1, "input-wrap"], ["aria-hidden", "true", 1, "input-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "2", "y", "4", "width", "20", "height", "16", "rx", "2"], ["d", "m22 7-10 7L2 7"], ["id", "signin-email", "type", "email", "name", "email", "required", "", "placeholder", "\u0442\u0432\u043E\u044F\u0442@\u0438\u043C\u0435\u0439\u043B.\u0431\u0433", "autocomplete", "email", 3, "ngModelChange", "ngModel"], ["aria-hidden", "true", 1, "check-icon"], ["for", "signin-password"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], ["id", "signin-password", "name", "password", "required", "", "minlength", "8", "placeholder", "\u041C\u0438\u043D\u0438\u043C\u0443\u043C 8 \u0441\u0438\u043C\u0432\u043E\u043B\u0430", "autocomplete", "current-password", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "toggle-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["type", "submit", 1, "submit-btn", 3, "disabled"], ["aria-hidden", "true", 1, "divider"], [1, "alt-link"], ["routerLink", "/register"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["points", "20 6 9 17 4 12"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["aria-hidden", "true", 1, "spinner"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"], ["d", "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"], ["points", "10 17 15 12 10 7"], ["x1", "15", "y1", "12", "x2", "3", "y2", "12"]], template: function SigninComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "span", 4);
      \u0275\u0275text(4, "\u{1F373}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 5);
      \u0275\u0275text(6, "\u041A\u0443\u043B\u0438\u043D\u0430\u0440\u0435\u043D \u0431\u043B\u043E\u0433");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "h1");
      \u0275\u0275text(8, "\u0414\u043E\u0431\u0440\u0435 \u0434\u043E\u0448\u044A\u043B");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10, "\u0412\u043B\u0435\u0437 \u0432 \u043F\u0440\u043E\u0444\u0438\u043B\u0430 \u0441\u0438, \u0437\u0430 \u0434\u0430 \u043E\u0441\u0442\u0430\u0432\u044F\u0448 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438 \u0438 \u0437\u0430\u043F\u0430\u0437\u0432\u0430\u0448 \u0440\u0435\u0446\u0435\u043F\u0442\u0438.");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, SigninComponent_Conditional_11_Template, 6, 1, "div", 7);
      \u0275\u0275elementStart(12, "form", 8);
      \u0275\u0275listener("submit", function SigninComponent_Template_form_submit_12_listener($event) {
        return ctx.onSubmit($event);
      });
      \u0275\u0275elementStart(13, "div", 9)(14, "label", 10);
      \u0275\u0275text(15, "\u0418\u043C\u0435\u0439\u043B");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 11)(17, "span", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 13);
      \u0275\u0275element(19, "rect", 14)(20, "path", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "input", 16, 0);
      \u0275\u0275twoWayListener("ngModelChange", function SigninComponent_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(23, SigninComponent_Conditional_23_Template, 3, 0, "span", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 9)(25, "label", 18);
      \u0275\u0275text(26, "\u041F\u0430\u0440\u043E\u043B\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 11)(28, "span", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 13);
      \u0275\u0275element(30, "rect", 19)(31, "path", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(32, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function SigninComponent_Template_input_ngModelChange_32_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "button", 22);
      \u0275\u0275listener("click", function SigninComponent_Template_button_click_33_listener() {
        return ctx.showPassword = !ctx.showPassword;
      });
      \u0275\u0275conditionalCreate(34, SigninComponent_Conditional_34_Template, 3, 0, ":svg:svg", 23)(35, SigninComponent_Conditional_35_Template, 3, 0, ":svg:svg", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "button", 24);
      \u0275\u0275conditionalCreate(37, SigninComponent_Conditional_37_Template, 2, 0)(38, SigninComponent_Conditional_38_Template, 5, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 25)(40, "span");
      \u0275\u0275text(41, "\u0438\u043B\u0438");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "p", 26);
      \u0275\u0275text(43, "\u041D\u044F\u043C\u0430\u0448 \u043F\u0440\u043E\u0444\u0438\u043B? ");
      \u0275\u0275elementStart(44, "a", 27);
      \u0275\u0275text(45, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u0439 \u0441\u0435 \u0431\u0435\u0437\u043F\u043B\u0430\u0442\u043D\u043E");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const emailInput_r3 = \u0275\u0275reference(22);
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.error ? 11 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275attribute("aria-invalid", ctx.error ? "true" : null);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(emailInput_r3.valid && ctx.email ? 23 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275attribute("aria-invalid", ctx.error ? "true" : null);
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showPassword ? "\u0421\u043A\u0440\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u0430\u0442\u0430" : "\u041F\u043E\u043A\u0430\u0436\u0438 \u043F\u0430\u0440\u043E\u043B\u0430\u0442\u0430");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showPassword ? 34 : 35);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 37 : 38);
    }
  }, dependencies: [RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm], styles: ['\n.auth-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: calc(100vh - 8rem);\n  padding: 2rem;\n  background-color: var(--clr-bg);\n  background-image: url(/backgrounds/cooking-pattern.svg);\n  background-size: 500px;\n  background-repeat: repeat;\n}\n.auth-card[_ngcontent-%COMP%] {\n  max-width: 440px;\n  width: 100%;\n  padding: 2.75rem 2.5rem;\n  background: var(--clr-surface);\n  border-radius: 1.5rem;\n  border: 1px solid var(--clr-border-faint);\n  box-shadow: var(--shadow-xl);\n  animation: _ngcontent-%COMP%_card-in 0.28s var(--ease-out-expo) both;\n}\n@keyframes _ngcontent-%COMP%_card-in {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .auth-card[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin-bottom: 1.75rem;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  line-height: 1;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--clr-brand);\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 2rem;\n  color: var(--clr-text);\n  margin: 0 0 0.4rem;\n  line-height: 1.2;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--clr-text-muted);\n  font-size: 0.88rem;\n  margin: 0 0 1.75rem;\n  line-height: 1.55;\n}\n.error-msg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: var(--clr-error-bg);\n  color: var(--clr-error-dark);\n  border: 1px solid color-mix(in oklch, var(--clr-error) 40%, var(--clr-error-bg));\n  padding: 0.75rem 1rem;\n  border-radius: 0.75rem;\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 1.25rem;\n  animation: _ngcontent-%COMP%_shake 0.4s var(--ease-out-expo);\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  20% {\n    transform: translateX(-5px);\n  }\n  60% {\n    transform: translateX(4px);\n  }\n  80% {\n    transform: translateX(-2px);\n  }\n}\n.error-msg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--clr-text-muted);\n  letter-spacing: 0.01em;\n}\n.input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.9rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--clr-text-faint);\n  display: flex;\n  pointer-events: none;\n}\n.input-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0.75rem 2.75rem 0.75rem 2.5rem;\n  border: 1.5px solid var(--clr-border-strong);\n  border-radius: 0.75rem;\n  font-size: 0.95rem;\n  outline: none;\n  color: var(--clr-text);\n  background: var(--clr-surface-alt);\n  transition:\n    border-color 0.2s var(--ease-out-expo),\n    box-shadow 0.2s var(--ease-out-expo),\n    background 0.2s var(--ease-out-expo);\n}\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--clr-text-faint);\n}\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--clr-brand);\n  box-shadow: 0 0 0 3px color-mix(in oklch, var(--clr-brand) 14%, transparent);\n  background: var(--clr-surface);\n}\n.input-wrap[_ngcontent-%COMP%]   input[aria-invalid=true][_ngcontent-%COMP%] {\n  border-color: var(--clr-error);\n}\n.check-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.85rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--clr-green);\n  display: flex;\n  pointer-events: none;\n}\n.check-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.65rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--clr-text-faint);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.25rem;\n  border-radius: 0.35rem;\n  transition: color 0.15s var(--ease-out-expo);\n}\n.toggle-btn[_ngcontent-%COMP%]:hover {\n  color: var(--clr-text-muted);\n}\n.toggle-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n  padding: 0.85rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--clr-brand),\n      var(--clr-brand-dark));\n  color: #ffffff;\n  border: none;\n  border-radius: 0.75rem;\n  font-weight: 700;\n  font-size: 0.95rem;\n  cursor: pointer;\n  letter-spacing: 0.02em;\n  transition:\n    opacity 0.2s var(--ease-out-expo),\n    transform 0.15s var(--ease-out-expo),\n    box-shadow 0.2s var(--ease-out-expo);\n  box-shadow: 0 2px 8px color-mix(in oklch, var(--clr-brand) 35%, transparent);\n}\n.submit-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.92;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px color-mix(in oklch, var(--clr-brand) 40%, transparent);\n}\n.submit-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin: 1.5rem 0 1rem;\n}\n.divider[_ngcontent-%COMP%]::before, \n.divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--clr-border-faint);\n}\n.divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--clr-text-faint);\n  font-size: 0.78rem;\n  font-weight: 500;\n}\n.alt-link[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.875rem;\n  color: var(--clr-text-muted);\n  margin: 0;\n}\n.alt-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--clr-brand);\n  font-weight: 700;\n  text-decoration: underline;\n  text-decoration-color: transparent;\n  text-underline-offset: 2px;\n  transition: text-decoration-color 0.2s var(--ease-out-expo);\n}\n.alt-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration-color: var(--clr-brand);\n}\n@media (max-width: 500px) {\n  .auth-page[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    padding: 1.5rem 1rem 3rem;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n  }\n}\n/*# sourceMappingURL=signin.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SigninComponent, [{
    type: Component,
    args: [{ selector: "app-signin", standalone: true, imports: [RouterLink, FormsModule], template: `
    <div class="auth-page">
      <div class="auth-card">

        <div class="brand">
          <span class="brand-icon" aria-hidden="true">\u{1F373}</span>
          <span class="brand-name">\u041A\u0443\u043B\u0438\u043D\u0430\u0440\u0435\u043D \u0431\u043B\u043E\u0433</span>
        </div>

        <h1>\u0414\u043E\u0431\u0440\u0435 \u0434\u043E\u0448\u044A\u043B</h1>
        <p class="subtitle">\u0412\u043B\u0435\u0437 \u0432 \u043F\u0440\u043E\u0444\u0438\u043B\u0430 \u0441\u0438, \u0437\u0430 \u0434\u0430 \u043E\u0441\u0442\u0430\u0432\u044F\u0448 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438 \u0438 \u0437\u0430\u043F\u0430\u0437\u0432\u0430\u0448 \u0440\u0435\u0446\u0435\u043F\u0442\u0438.</p>

        @if (error) {
          <div class="error-msg" role="alert">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            {{ error }}
          </div>
        }

        <form (submit)="onSubmit($event)" novalidate>
          <div class="field">
            <label for="signin-email">\u0418\u043C\u0435\u0439\u043B</label>
            <div class="input-wrap">
              <span class="input-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
              </span>
              <input id="signin-email" type="email" [(ngModel)]="email" name="email" required
                     placeholder="\u0442\u0432\u043E\u044F\u0442&#64;\u0438\u043C\u0435\u0439\u043B.\u0431\u0433" autocomplete="email"
                     [attr.aria-invalid]="error ? 'true' : null"
                     #emailInput="ngModel" />
              @if (emailInput.valid && email) {
                <span class="check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
              }
            </div>
          </div>

          <div class="field">
            <label for="signin-password">\u041F\u0430\u0440\u043E\u043B\u0430</label>
            <div class="input-wrap">
              <span class="input-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </span>
              <input id="signin-password" [type]="showPassword ? 'text' : 'password'"
                     [(ngModel)]="password" name="password" required minlength="8"
                     placeholder="\u041C\u0438\u043D\u0438\u043C\u0443\u043C 8 \u0441\u0438\u043C\u0432\u043E\u043B\u0430" autocomplete="current-password"
                     [attr.aria-invalid]="error ? 'true' : null" />
              <button type="button" class="toggle-btn"
                      [attr.aria-label]="showPassword ? '\u0421\u043A\u0440\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u0430\u0442\u0430' : '\u041F\u043E\u043A\u0430\u0436\u0438 \u043F\u0430\u0440\u043E\u043B\u0430\u0442\u0430'"
                      (click)="showPassword = !showPassword">
                @if (showPassword) {
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                } @else {
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                }
              </button>
            </div>
          </div>

          <button type="submit" [disabled]="loading" class="submit-btn">
            @if (loading) {
              <span class="spinner" aria-hidden="true"></span>
              \u0412\u043B\u0438\u0437\u0430\u043D\u0435...
            } @else {
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
              \u0412\u0445\u043E\u0434
            }
          </button>
        </form>

        <div class="divider" aria-hidden="true"><span>\u0438\u043B\u0438</span></div>

        <p class="alt-link">\u041D\u044F\u043C\u0430\u0448 \u043F\u0440\u043E\u0444\u0438\u043B? <a routerLink="/register">\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u0439 \u0441\u0435 \u0431\u0435\u0437\u043F\u043B\u0430\u0442\u043D\u043E</a></p>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* angular:styles/component:scss;914dffffad8e0ba0b0959a7e9754816fa12e0aeea6ca9b3534cb5886e07eb2b9;C:/Users/ipene/Desktop/Blog-System-Angular/frontend/src/app/pages/signin/signin.component.ts */\n.auth-page {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: calc(100vh - 8rem);\n  padding: 2rem;\n  background-color: var(--clr-bg);\n  background-image: url(/backgrounds/cooking-pattern.svg);\n  background-size: 500px;\n  background-repeat: repeat;\n}\n.auth-card {\n  max-width: 440px;\n  width: 100%;\n  padding: 2.75rem 2.5rem;\n  background: var(--clr-surface);\n  border-radius: 1.5rem;\n  border: 1px solid var(--clr-border-faint);\n  box-shadow: var(--shadow-xl);\n  animation: card-in 0.28s var(--ease-out-expo) both;\n}\n@keyframes card-in {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .auth-card {\n    animation: none;\n  }\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin-bottom: 1.75rem;\n}\n.brand-icon {\n  font-size: 1.6rem;\n  line-height: 1;\n}\n.brand-name {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--clr-brand);\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\nh1 {\n  font-family: var(--font-display);\n  font-size: 2rem;\n  color: var(--clr-text);\n  margin: 0 0 0.4rem;\n  line-height: 1.2;\n}\n.subtitle {\n  color: var(--clr-text-muted);\n  font-size: 0.88rem;\n  margin: 0 0 1.75rem;\n  line-height: 1.55;\n}\n.error-msg {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: var(--clr-error-bg);\n  color: var(--clr-error-dark);\n  border: 1px solid color-mix(in oklch, var(--clr-error) 40%, var(--clr-error-bg));\n  padding: 0.75rem 1rem;\n  border-radius: 0.75rem;\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 1.25rem;\n  animation: shake 0.4s var(--ease-out-expo);\n}\n@keyframes shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  20% {\n    transform: translateX(-5px);\n  }\n  60% {\n    transform: translateX(4px);\n  }\n  80% {\n    transform: translateX(-2px);\n  }\n}\n.error-msg svg {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\nlabel {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--clr-text-muted);\n  letter-spacing: 0.01em;\n}\n.input-wrap {\n  position: relative;\n}\n.input-icon {\n  position: absolute;\n  left: 0.9rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--clr-text-faint);\n  display: flex;\n  pointer-events: none;\n}\n.input-icon svg {\n  width: 1rem;\n  height: 1rem;\n}\n.input-wrap input {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0.75rem 2.75rem 0.75rem 2.5rem;\n  border: 1.5px solid var(--clr-border-strong);\n  border-radius: 0.75rem;\n  font-size: 0.95rem;\n  outline: none;\n  color: var(--clr-text);\n  background: var(--clr-surface-alt);\n  transition:\n    border-color 0.2s var(--ease-out-expo),\n    box-shadow 0.2s var(--ease-out-expo),\n    background 0.2s var(--ease-out-expo);\n}\n.input-wrap input::placeholder {\n  color: var(--clr-text-faint);\n}\n.input-wrap input:focus {\n  border-color: var(--clr-brand);\n  box-shadow: 0 0 0 3px color-mix(in oklch, var(--clr-brand) 14%, transparent);\n  background: var(--clr-surface);\n}\n.input-wrap input[aria-invalid=true] {\n  border-color: var(--clr-error);\n}\n.check-icon {\n  position: absolute;\n  right: 0.85rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--clr-green);\n  display: flex;\n  pointer-events: none;\n}\n.check-icon svg {\n  width: 1rem;\n  height: 1rem;\n}\n.toggle-btn {\n  position: absolute;\n  right: 0.65rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--clr-text-faint);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.25rem;\n  border-radius: 0.35rem;\n  transition: color 0.15s var(--ease-out-expo);\n}\n.toggle-btn:hover {\n  color: var(--clr-text-muted);\n}\n.toggle-btn svg {\n  width: 1rem;\n  height: 1rem;\n}\n.submit-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n  padding: 0.85rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--clr-brand),\n      var(--clr-brand-dark));\n  color: #ffffff;\n  border: none;\n  border-radius: 0.75rem;\n  font-weight: 700;\n  font-size: 0.95rem;\n  cursor: pointer;\n  letter-spacing: 0.02em;\n  transition:\n    opacity 0.2s var(--ease-out-expo),\n    transform 0.15s var(--ease-out-expo),\n    box-shadow 0.2s var(--ease-out-expo);\n  box-shadow: 0 2px 8px color-mix(in oklch, var(--clr-brand) 35%, transparent);\n}\n.submit-btn svg {\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.submit-btn:hover:not(:disabled) {\n  opacity: 0.92;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px color-mix(in oklch, var(--clr-brand) 40%, transparent);\n}\n.submit-btn:active:not(:disabled) {\n  transform: translateY(0);\n}\n.submit-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.spinner {\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.divider {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin: 1.5rem 0 1rem;\n}\n.divider::before,\n.divider::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--clr-border-faint);\n}\n.divider span {\n  color: var(--clr-text-faint);\n  font-size: 0.78rem;\n  font-weight: 500;\n}\n.alt-link {\n  text-align: center;\n  font-size: 0.875rem;\n  color: var(--clr-text-muted);\n  margin: 0;\n}\n.alt-link a {\n  color: var(--clr-brand);\n  font-weight: 700;\n  text-decoration: underline;\n  text-decoration-color: transparent;\n  text-underline-offset: 2px;\n  transition: text-decoration-color 0.2s var(--ease-out-expo);\n}\n.alt-link a:hover {\n  text-decoration-color: var(--clr-brand);\n}\n@media (max-width: 500px) {\n  .auth-page {\n    align-items: flex-start;\n    padding: 1.5rem 1rem 3rem;\n  }\n  .auth-card {\n    padding: 2rem 1.5rem;\n  }\n}\n/*# sourceMappingURL=signin.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SigninComponent, { className: "SigninComponent", filePath: "src/app/pages/signin/signin.component.ts", lineNumber: 317 });
})();
export {
  SigninComponent
};
//# sourceMappingURL=chunk-TILVVWRC.js.map
