import {
  AuthService
} from "./chunk-3GAFCRXR.js";
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
} from "./chunk-5PRHCKE6.js";
import {
  SeoService
} from "./chunk-JG6FXFFB.js";
import "./chunk-QKG44OY5.js";
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OGGNHWOY.js";

// src/app/pages/register/register.component.ts
function RegisterComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 37);
    \u0275\u0275element(2, "circle", 46)(3, "line", 47)(4, "line", 48);
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
function RegisterComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 37);
    \u0275\u0275element(1, "path", 49)(2, "line", 50);
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 37);
    \u0275\u0275element(1, "path", 51)(2, "circle", 52);
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 53);
    \u0275\u0275element(2, "polyline", 54);
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_Conditional_64_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 37);
    \u0275\u0275element(1, "path", 49)(2, "line", 50);
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_64_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 37);
    \u0275\u0275element(1, "path", 51)(2, "circle", 52);
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function RegisterComponent_Conditional_64_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showConfirm = !ctx_r1.showConfirm);
    });
    \u0275\u0275conditionalCreate(1, RegisterComponent_Conditional_64_Conditional_1_Template, 3, 0, ":svg:svg", 37)(2, RegisterComponent_Conditional_64_Conditional_2_Template, 3, 0, ":svg:svg", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r1.showConfirm ? "\u0421\u043A\u0440\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u0430\u0442\u0430" : "\u041F\u043E\u043A\u0430\u0436\u0438 \u043F\u0430\u0440\u043E\u043B\u0430\u0442\u0430");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showConfirm ? 1 : 2);
  }
}
function RegisterComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "\u041F\u0430\u0440\u043E\u043B\u0438\u0442\u0435 \u043D\u0435 \u0441\u044A\u0432\u043F\u0430\u0434\u0430\u0442");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 55);
    \u0275\u0275text(1, " \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0435... ");
  }
}
function RegisterComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F ");
  }
}
var RegisterComponent = class _RegisterComponent {
  authService = inject(AuthService);
  router = inject(Router);
  seo = inject(SeoService);
  cdr = inject(ChangeDetectorRef);
  name = "";
  email = "";
  password = "";
  passwordConfirmation = "";
  error = "";
  loading = false;
  showPassword = false;
  showConfirm = false;
  passwordMismatch = false;
  ngOnInit() {
    this.seo.set({
      title: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F",
      description: "\u0421\u044A\u0437\u0434\u0430\u0439 \u0431\u0435\u0437\u043F\u043B\u0430\u0442\u0435\u043D \u043F\u0440\u043E\u0444\u0438\u043B \u0432 \u043A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F \u0431\u043B\u043E\u0433 \u043D\u0430 \u0418\u0432\u043E \u0438 \u0437\u0430\u043F\u043E\u0447\u043D\u0438 \u0434\u0430 \u0441\u043F\u043E\u0434\u0435\u043B\u044F\u0448 \u043C\u043D\u0435\u043D\u0438\u044F \u0438 \u0434\u0430 \u0437\u0430\u043F\u0430\u0437\u0432\u0430\u0448 \u043B\u044E\u0431\u0438\u043C\u0438 \u0440\u0435\u0446\u0435\u043F\u0442\u0438."
    });
  }
  onConfirmChange() {
    this.passwordMismatch = !!this.passwordConfirmation && this.password !== this.passwordConfirmation;
    this.cdr.markForCheck();
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.password !== this.passwordConfirmation) {
      this.passwordMismatch = true;
      this.error = "\u041F\u0430\u0440\u043E\u043B\u0438\u0442\u0435 \u043D\u0435 \u0441\u044A\u0432\u043F\u0430\u0434\u0430\u0442.";
      this.cdr.markForCheck();
      return;
    }
    this.loading = true;
    this.error = "";
    this.authService.register(this.name, this.email, this.password, this.passwordConfirmation).subscribe({
      next: () => {
        this.router.navigate(["/"]);
      },
      error: (err) => {
        this.loading = false;
        const errors = err.error?.errors;
        if (errors) {
          this.error = Object.values(errors).flat().join(" ");
        } else {
          this.error = err.error?.message || "\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F.";
        }
        this.cdr.markForCheck();
      }
    });
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 74, vars: 15, consts: [["nameInput", "ngModel"], ["emailInput", "ngModel"], [1, "auth-shell"], ["aria-hidden", "true", 1, "auth-aside"], [1, "aside-blob"], [1, "aside-content"], ["routerLink", "/", "tabindex", "-1", 1, "aside-logo"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"], ["d", "M3 11h18v2a7 7 0 0 1-14 0H3z"], ["x1", "9", "y1", "20", "x2", "15", "y2", "20"], ["x1", "12", "y1", "17", "x2", "12", "y2", "20"], [1, "aside-heading"], [1, "auth-main"], [1, "auth-form-inner"], ["aria-hidden", "true", 1, "auth-avatar"], ["viewBox", "0 0 80 80", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "40", "cy", "40", "r", "40", "fill", "oklch(92% 0 0)"], ["cx", "40", "cy", "30", "r", "14", "fill", "oklch(78% 0 0)"], ["cx", "40", "cy", "73", "rx", "23", "ry", "17", "fill", "oklch(78% 0 0)"], [1, "auth-tagline"], ["role", "alert", 1, "error-msg"], ["novalidate", "", 3, "submit"], [1, "field"], [1, "input-wrap"], ["aria-hidden", "true", 1, "input-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["id", "reg-name", "type", "text", "name", "name", "required", "", "placeholder", "\u0422\u0432\u043E\u0435\u0442\u043E \u0438\u043C\u0435", "autocomplete", "name", "aria-label", "\u0422\u0432\u043E\u0435\u0442\u043E \u0438\u043C\u0435", 3, "ngModelChange", "ngModel"], ["x", "2", "y", "4", "width", "20", "height", "16", "rx", "2"], ["d", "m22 7-10 7L2 7"], ["id", "reg-email", "type", "email", "name", "email", "required", "", "placeholder", "\u0418\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441", "autocomplete", "email", "aria-label", "\u0418\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441", 3, "ngModelChange", "ngModel"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], ["id", "reg-password", "name", "password", "required", "", "minlength", "8", "placeholder", "\u041F\u0430\u0440\u043E\u043B\u0430", "autocomplete", "new-password", "aria-label", "\u041F\u0430\u0440\u043E\u043B\u0430", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "toggle-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["d", "M12 16v.01"], ["id", "reg-confirm", "name", "password_confirmation", "required", "", "minlength", "8", "placeholder", "\u041F\u043E\u0442\u0432\u044A\u0440\u0434\u0438 \u043F\u0430\u0440\u043E\u043B\u0430", "autocomplete", "new-password", "aria-label", "\u041F\u043E\u0442\u0432\u044A\u0440\u0434\u0438 \u043F\u0430\u0440\u043E\u043B\u0430", 3, "ngModelChange", "type", "ngModel"], ["aria-hidden", "true", 1, "check-icon"], ["type", "button", 1, "toggle-btn"], ["role", "status", 1, "field-error"], ["type", "submit", 1, "submit-btn", 3, "disabled"], [1, "alt-link"], ["routerLink", "/signin"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["points", "20 6 9 17 4 12"], ["aria-hidden", "true", 1, "spinner"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "aside", 3);
      \u0275\u0275element(2, "div", 4);
      \u0275\u0275elementStart(3, "div", 5)(4, "a", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 7);
      \u0275\u0275element(6, "path", 8)(7, "path", 9)(8, "line", 10)(9, "line", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "span");
      \u0275\u0275text(11, "\u0411\u043B\u043E\u0433\u044A\u0442 \u043D\u0430 \u0418\u0432\u043E");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "h2", 12);
      \u0275\u0275text(13, "\u041F\u0440\u0438\u0441\u044A\u0435\u0434\u0438\u043D\u0438");
      \u0275\u0275element(14, "br");
      \u0275\u0275text(15, "\u0441\u0435 \u043A\u044A\u043C \u043D\u0430\u0448\u0430\u0442\u0430");
      \u0275\u0275element(16, "br");
      \u0275\u0275text(17, "\u043A\u0443\u0445\u043D\u044F!");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "main", 13)(19, "div", 14)(20, "div", 15);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(21, "svg", 16);
      \u0275\u0275element(22, "circle", 17)(23, "circle", 18)(24, "ellipse", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(25, "p", 20);
      \u0275\u0275text(26, "\u0421\u044A\u0437\u0434\u0430\u0439 \u0431\u0435\u0437\u043F\u043B\u0430\u0442\u0435\u043D \u043F\u0440\u043E\u0444\u0438\u043B, \u0437\u0430 \u0434\u0430 \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0448.");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(27, RegisterComponent_Conditional_27_Template, 6, 1, "div", 21);
      \u0275\u0275elementStart(28, "form", 22);
      \u0275\u0275listener("submit", function RegisterComponent_Template_form_submit_28_listener($event) {
        return ctx.onSubmit($event);
      });
      \u0275\u0275elementStart(29, "div", 23)(30, "div", 24)(31, "span", 25);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 26);
      \u0275\u0275element(33, "path", 27)(34, "circle", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(35, "input", 29, 0);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_35_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 23)(38, "div", 24)(39, "span", 25);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(40, "svg", 26);
      \u0275\u0275element(41, "rect", 30)(42, "path", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(43, "input", 32, 1);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_43_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 23)(46, "div", 24)(47, "span", 25);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(48, "svg", 26);
      \u0275\u0275element(49, "rect", 33)(50, "path", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(51, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_51_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "button", 36);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_52_listener() {
        return ctx.showPassword = !ctx.showPassword;
      });
      \u0275\u0275conditionalCreate(53, RegisterComponent_Conditional_53_Template, 3, 0, ":svg:svg", 37)(54, RegisterComponent_Conditional_54_Template, 3, 0, ":svg:svg", 37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "div", 23)(56, "div", 24)(57, "span", 25);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(58, "svg", 26);
      \u0275\u0275element(59, "rect", 33)(60, "path", 34)(61, "path", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(62, "input", 39);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_62_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.passwordConfirmation, $event) || (ctx.passwordConfirmation = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_62_listener() {
        return ctx.onConfirmChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(63, RegisterComponent_Conditional_63_Template, 3, 0, "span", 40)(64, RegisterComponent_Conditional_64_Template, 3, 2, "button", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(65, RegisterComponent_Conditional_65_Template, 2, 0, "span", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "button", 43);
      \u0275\u0275conditionalCreate(67, RegisterComponent_Conditional_67_Template, 2, 0)(68, RegisterComponent_Conditional_68_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "p", 44);
      \u0275\u0275text(70, "\u0412\u0435\u0447\u0435 \u0438\u043C\u0430\u0448 \u043F\u0440\u043E\u0444\u0438\u043B? ");
      \u0275\u0275elementStart(71, "a", 45);
      \u0275\u0275text(72, "\u0412\u043B\u0435\u0437");
      \u0275\u0275elementEnd();
      \u0275\u0275text(73, " \u0442\u0443\u043A.");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(27);
      \u0275\u0275conditional(ctx.error ? 27 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.name);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(8);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275attribute("aria-invalid", ctx.passwordMismatch ? "true" : null);
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showPassword ? "\u0421\u043A\u0440\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u0430\u0442\u0430" : "\u041F\u043E\u043A\u0430\u0436\u0438 \u043F\u0430\u0440\u043E\u043B\u0430\u0442\u0430");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showPassword ? 53 : 54);
      \u0275\u0275advance(9);
      \u0275\u0275property("type", ctx.showConfirm ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.passwordConfirmation);
      \u0275\u0275attribute("aria-invalid", ctx.passwordMismatch ? "true" : null);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.passwordMismatch && ctx.passwordConfirmation && ctx.password === ctx.passwordConfirmation ? 63 : 64);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.passwordMismatch ? 65 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading || ctx.passwordMismatch);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 67 : 68);
    }
  }, dependencies: [RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.auth-shell[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 5fr 6fr;\n  min-height: 100dvh;\n}\n.auth-aside[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      145deg,\n      #ffa839,\n      #f8780b 50%,\n      #f06000,\n      #e54800);\n  background:\n    linear-gradient(\n      145deg,\n      color(xyz 0.562 0.495 0.097),\n      #f8780b 50%,\n      color(xyz 0.406 0.268 0.024),\n      color(xyz 0.36 0.211 0.01));\n  display: flex;\n  flex-direction: column;\n  padding: 2.5rem;\n  isolation: isolate;\n}\n.aside-blob[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 90%;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background: #ff8b26b3;\n  background: oklch(75% 0.19 55deg / 0.7);\n  top: 50%;\n  left: 50%;\n  transform: translate(-30%, -45%);\n  pointer-events: none;\n  z-index: 0;\n}\n.aside-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.aside-logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  text-decoration: none;\n  color: #ffffff;\n}\n.aside-logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.35rem;\n  height: 1.35rem;\n  flex-shrink: 0;\n}\n.aside-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 0.92rem;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n.aside-heading[_ngcontent-%COMP%] {\n  margin: auto 0 2rem;\n  font-family: var(--font-display);\n  font-size: clamp(1.55rem, 2.8vw, 2.3rem);\n  font-weight: 700;\n  line-height: 1.22;\n  color: #ffffff;\n  letter-spacing: -0.02em;\n}\n.auth-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3.5rem);\n  background: #ffffff;\n  color-scheme: light;\n  --clr-error-bg: oklch(95% 0.005 25);\n  --clr-error: oklch(40% 0.18 25);\n  --clr-error-dark: oklch(28% 0.12 25);\n}\n.auth-form-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 360px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.auth-avatar[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  margin-bottom: 0.9rem;\n}\n.auth-avatar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.auth-tagline[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #696969;\n  margin: 0 0 1.35rem;\n  text-align: center;\n}\n.error-msg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: var(--clr-error-bg);\n  color: var(--clr-error-dark);\n  border: 1px solid color-mix(in oklch, var(--clr-error) 40%, var(--clr-error-bg));\n  padding: 0.7rem 1rem;\n  border-radius: 2rem;\n  font-size: 0.83rem;\n  font-weight: 500;\n  margin-bottom: 1rem;\n  width: 100%;\n  box-sizing: border-box;\n  animation: _ngcontent-%COMP%_shake 0.4s ease both;\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-5px);\n  }\n  75% {\n    transform: translateX(4px);\n  }\n}\n.error-msg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  width: 100%;\n}\n.field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1.1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9e9e9e;\n  display: flex;\n  pointer-events: none;\n}\n.input-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0.8rem 2.8rem 0.8rem 2.7rem;\n  border: 1.5px solid oklch(88% 0 0deg);\n  border-radius: 3rem;\n  font-size: 0.88rem;\n  outline: none;\n  color: #1b1b1b;\n  background: #f5f5f5;\n  transition:\n    border-color 0.2s,\n    box-shadow 0.2s,\n    background 0.2s;\n}\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #989898;\n}\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #fa7c20;\n  box-shadow: 0 0 0 3px #fa7c202e;\n  background: #ffffff;\n}\n.input-wrap[_ngcontent-%COMP%]   input[aria-invalid=true][_ngcontent-%COMP%] {\n  border-color: var(--clr-error);\n  box-shadow: 0 0 0 3px color-mix(in oklch, var(--clr-error) 12%, transparent);\n}\n.check-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #23a136;\n  display: flex;\n  pointer-events: none;\n}\n.check-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.45rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #9e9e9e;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.7rem;\n  min-width: 2.75rem;\n  min-height: 2.75rem;\n  border-radius: 50%;\n  transition: color 0.15s;\n}\n.toggle-btn[_ngcontent-%COMP%]:hover {\n  color: #484848;\n}\n.toggle-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.field-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.77rem;\n  font-weight: 600;\n  color: var(--clr-error-dark);\n  margin-top: 0.3rem;\n  padding-left: 1.1rem;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-top: 0.35rem;\n  padding: 0.88rem;\n  background:\n    linear-gradient(\n      90deg,\n      #f99600,\n      #f07200,\n      #e54800);\n  background:\n    linear-gradient(\n      90deg,\n      color(xyz 0.507 0.419 0.039),\n      color(xyz 0.43 0.304 0.022),\n      color(xyz 0.36 0.211 0.01));\n  color: #ffffff;\n  border: none;\n  border-radius: 3rem;\n  font-weight: 700;\n  font-size: 0.97rem;\n  cursor: pointer;\n  letter-spacing: 0.03em;\n  box-shadow: 0 8px 22px #e548006b;\n  box-shadow: 0 8px 22px oklch(62% 0.22 38deg / 0.42);\n  transition:\n    opacity 0.18s,\n    transform 0.15s,\n    box-shadow 0.18s;\n  touch-action: manipulation;\n  width: 100%;\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n  box-shadow: 0 12px 28px #e5480080;\n  box-shadow: 0 12px 28px oklch(62% 0.22 38deg / 0.5);\n}\n.submit-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 4px 12px #e5480059;\n  box-shadow: 0 4px 12px oklch(62% 0.22 38deg / 0.35);\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.alt-link[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.875rem;\n  color: #696969;\n  margin: 1.5rem 0 0;\n}\n.alt-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #e54800;\n  color: oklch(62% 0.22 38deg);\n  font-weight: 700;\n  text-decoration: none;\n}\n.alt-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (prefers-reduced-motion: reduce) {\n  .error-msg[_ngcontent-%COMP%] {\n    animation: none;\n  }\n  .submit-btn[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n@media (max-width: 860px) {\n  .auth-shell[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .auth-aside[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-main[_ngcontent-%COMP%] {\n    background: var(--clr-bg);\n    min-height: 100dvh;\n  }\n}\n@media (max-width: 480px) {\n  .auth-main[_ngcontent-%COMP%] {\n    padding: 2rem 1.25rem 3rem;\n  }\n}\n/*# sourceMappingURL=register.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [RouterLink, FormsModule], template: `
    <div class="auth-shell">

      <!-- Left: orange gradient panel -->
      <aside class="auth-aside" aria-hidden="true">
        <div class="aside-blob"></div>
        <div class="aside-content">
          <a routerLink="/" class="aside-logo" tabindex="-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                 stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 11l1.5-7.5A2 2 0 0 1 6.46 2h11.08a2 2 0 0 1 1.96 1.5L21 11"/>
              <path d="M3 11h18v2a7 7 0 0 1-14 0H3z"/>
              <line x1="9" y1="20" x2="15" y2="20"/>
              <line x1="12" y1="17" x2="12" y2="20"/>
            </svg>
            <span>\u0411\u043B\u043E\u0433\u044A\u0442 \u043D\u0430 \u0418\u0432\u043E</span>
          </a>
          <h2 class="aside-heading">\u041F\u0440\u0438\u0441\u044A\u0435\u0434\u0438\u043D\u0438<br/>\u0441\u0435 \u043A\u044A\u043C \u043D\u0430\u0448\u0430\u0442\u0430<br/>\u043A\u0443\u0445\u043D\u044F!</h2>
        </div>
      </aside>

      <!-- Right: white form pane -->
      <main class="auth-main">
        <div class="auth-form-inner">

          <div class="auth-avatar" aria-hidden="true">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="40" fill="oklch(92% 0 0)"/>
              <circle cx="40" cy="30" r="14" fill="oklch(78% 0 0)"/>
              <ellipse cx="40" cy="73" rx="23" ry="17" fill="oklch(78% 0 0)"/>
            </svg>
          </div>

          <p class="auth-tagline">\u0421\u044A\u0437\u0434\u0430\u0439 \u0431\u0435\u0437\u043F\u043B\u0430\u0442\u0435\u043D \u043F\u0440\u043E\u0444\u0438\u043B, \u0437\u0430 \u0434\u0430 \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0448.</p>

          @if (error) {
            <div class="error-msg" role="alert">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {{ error }}
            </div>
          }

          <form (submit)="onSubmit($event)" novalidate>
            <div class="field">
              <div class="input-wrap">
                <span class="input-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </span>
                <input id="reg-name" type="text" [(ngModel)]="name" name="name" required
                       placeholder="\u0422\u0432\u043E\u0435\u0442\u043E \u0438\u043C\u0435" autocomplete="name" aria-label="\u0422\u0432\u043E\u0435\u0442\u043E \u0438\u043C\u0435"
                       #nameInput="ngModel" />
              </div>
            </div>

            <div class="field">
              <div class="input-wrap">
                <span class="input-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/>
                  </svg>
                </span>
                <input id="reg-email" type="email" [(ngModel)]="email" name="email" required
                       placeholder="\u0418\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441" autocomplete="email" aria-label="\u0418\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441"
                       #emailInput="ngModel" />
              </div>
            </div>

            <div class="field">
              <div class="input-wrap">
                <span class="input-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </span>
                <input id="reg-password" [type]="showPassword ? 'text' : 'password'"
                       [(ngModel)]="password" name="password" required minlength="8"
                       placeholder="\u041F\u0430\u0440\u043E\u043B\u0430" autocomplete="new-password" aria-label="\u041F\u0430\u0440\u043E\u043B\u0430"
                       [attr.aria-invalid]="passwordMismatch ? 'true' : null" />
                <button type="button" class="toggle-btn"
                        [attr.aria-label]="showPassword ? '\u0421\u043A\u0440\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u0430\u0442\u0430' : '\u041F\u043E\u043A\u0430\u0436\u0438 \u043F\u0430\u0440\u043E\u043B\u0430\u0442\u0430'"
                        (click)="showPassword = !showPassword">
                  @if (showPassword) {
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  } @else {
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  }
                </button>
              </div>
            </div>

            <div class="field">
              <div class="input-wrap">
                <span class="input-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    <path d="M12 16v.01"/>
                  </svg>
                </span>
                <input id="reg-confirm" [type]="showConfirm ? 'text' : 'password'"
                       [(ngModel)]="passwordConfirmation" name="password_confirmation" required minlength="8"
                       placeholder="\u041F\u043E\u0442\u0432\u044A\u0440\u0434\u0438 \u043F\u0430\u0440\u043E\u043B\u0430" autocomplete="new-password" aria-label="\u041F\u043E\u0442\u0432\u044A\u0440\u0434\u0438 \u043F\u0430\u0440\u043E\u043B\u0430"
                       [attr.aria-invalid]="passwordMismatch ? 'true' : null"
                       (ngModelChange)="onConfirmChange()" />
                @if (!passwordMismatch && passwordConfirmation && password === passwordConfirmation) {
                  <span class="check-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                } @else {
                  <button type="button" class="toggle-btn"
                          [attr.aria-label]="showConfirm ? '\u0421\u043A\u0440\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u0430\u0442\u0430' : '\u041F\u043E\u043A\u0430\u0436\u0438 \u043F\u0430\u0440\u043E\u043B\u0430\u0442\u0430'"
                          (click)="showConfirm = !showConfirm">
                    @if (showConfirm) {
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                      </svg>
                    } @else {
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    }
                  </button>
                }
              </div>
              @if (passwordMismatch) {
                <span class="field-error" role="status">\u041F\u0430\u0440\u043E\u043B\u0438\u0442\u0435 \u043D\u0435 \u0441\u044A\u0432\u043F\u0430\u0434\u0430\u0442</span>
              }
            </div>

            <button type="submit" [disabled]="loading || passwordMismatch" class="submit-btn">
              @if (loading) {
                <span class="spinner" aria-hidden="true"></span>
                \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0430\u043D\u0435...
              } @else {
                \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F
              }
            </button>
          </form>

          <p class="alt-link">\u0412\u0435\u0447\u0435 \u0438\u043C\u0430\u0448 \u043F\u0440\u043E\u0444\u0438\u043B? <a routerLink="/signin">\u0412\u043B\u0435\u0437</a> \u0442\u0443\u043A.</p>
        </div>
      </main>

    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;1553efaccd678303d7d8318c7a32ee2d3779bdd3c144971d74ac1983654bf3bc;/home/ivaylo-penev/Desktop/Blog-System-Angular/frontend/src/app/pages/register/register.component.ts */\n:host {\n  display: block;\n}\n.auth-shell {\n  display: grid;\n  grid-template-columns: 5fr 6fr;\n  min-height: 100dvh;\n}\n.auth-aside {\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      145deg,\n      #ffa839,\n      #f8780b 50%,\n      #f06000,\n      #e54800);\n  background:\n    linear-gradient(\n      145deg,\n      color(xyz 0.562 0.495 0.097),\n      #f8780b 50%,\n      color(xyz 0.406 0.268 0.024),\n      color(xyz 0.36 0.211 0.01));\n  display: flex;\n  flex-direction: column;\n  padding: 2.5rem;\n  isolation: isolate;\n}\n.aside-blob {\n  position: absolute;\n  width: 90%;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background: #ff8b26b3;\n  background: oklch(75% 0.19 55deg / 0.7);\n  top: 50%;\n  left: 50%;\n  transform: translate(-30%, -45%);\n  pointer-events: none;\n  z-index: 0;\n}\n.aside-content {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.aside-logo {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  text-decoration: none;\n  color: #ffffff;\n}\n.aside-logo svg {\n  width: 1.35rem;\n  height: 1.35rem;\n  flex-shrink: 0;\n}\n.aside-logo span {\n  font-family: var(--font-display);\n  font-size: 0.92rem;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n.aside-heading {\n  margin: auto 0 2rem;\n  font-family: var(--font-display);\n  font-size: clamp(1.55rem, 2.8vw, 2.3rem);\n  font-weight: 700;\n  line-height: 1.22;\n  color: #ffffff;\n  letter-spacing: -0.02em;\n}\n.auth-main {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3.5rem);\n  background: #ffffff;\n  color-scheme: light;\n  --clr-error-bg: oklch(95% 0.005 25);\n  --clr-error: oklch(40% 0.18 25);\n  --clr-error-dark: oklch(28% 0.12 25);\n}\n.auth-form-inner {\n  width: 100%;\n  max-width: 360px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.auth-avatar {\n  width: 72px;\n  height: 72px;\n  margin-bottom: 0.9rem;\n}\n.auth-avatar svg {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.auth-tagline {\n  font-size: 0.9rem;\n  color: #696969;\n  margin: 0 0 1.35rem;\n  text-align: center;\n}\n.error-msg {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: var(--clr-error-bg);\n  color: var(--clr-error-dark);\n  border: 1px solid color-mix(in oklch, var(--clr-error) 40%, var(--clr-error-bg));\n  padding: 0.7rem 1rem;\n  border-radius: 2rem;\n  font-size: 0.83rem;\n  font-weight: 500;\n  margin-bottom: 1rem;\n  width: 100%;\n  box-sizing: border-box;\n  animation: shake 0.4s ease both;\n}\n@keyframes shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-5px);\n  }\n  75% {\n    transform: translateX(4px);\n  }\n}\n.error-msg svg {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  width: 100%;\n}\n.field {\n  width: 100%;\n}\n.input-wrap {\n  position: relative;\n}\n.input-icon {\n  position: absolute;\n  left: 1.1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9e9e9e;\n  display: flex;\n  pointer-events: none;\n}\n.input-icon svg {\n  width: 1rem;\n  height: 1rem;\n}\n.input-wrap input {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0.8rem 2.8rem 0.8rem 2.7rem;\n  border: 1.5px solid oklch(88% 0 0deg);\n  border-radius: 3rem;\n  font-size: 0.88rem;\n  outline: none;\n  color: #1b1b1b;\n  background: #f5f5f5;\n  transition:\n    border-color 0.2s,\n    box-shadow 0.2s,\n    background 0.2s;\n}\n.input-wrap input::placeholder {\n  color: #989898;\n}\n.input-wrap input:focus {\n  border-color: #fa7c20;\n  box-shadow: 0 0 0 3px #fa7c202e;\n  background: #ffffff;\n}\n.input-wrap input[aria-invalid=true] {\n  border-color: var(--clr-error);\n  box-shadow: 0 0 0 3px color-mix(in oklch, var(--clr-error) 12%, transparent);\n}\n.check-icon {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #23a136;\n  display: flex;\n  pointer-events: none;\n}\n.check-icon svg {\n  width: 1rem;\n  height: 1rem;\n}\n.toggle-btn {\n  position: absolute;\n  right: 0.45rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #9e9e9e;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.7rem;\n  min-width: 2.75rem;\n  min-height: 2.75rem;\n  border-radius: 50%;\n  transition: color 0.15s;\n}\n.toggle-btn:hover {\n  color: #484848;\n}\n.toggle-btn svg {\n  width: 1rem;\n  height: 1rem;\n}\n.field-error {\n  display: block;\n  font-size: 0.77rem;\n  font-weight: 600;\n  color: var(--clr-error-dark);\n  margin-top: 0.3rem;\n  padding-left: 1.1rem;\n}\n.submit-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-top: 0.35rem;\n  padding: 0.88rem;\n  background:\n    linear-gradient(\n      90deg,\n      #f99600,\n      #f07200,\n      #e54800);\n  background:\n    linear-gradient(\n      90deg,\n      color(xyz 0.507 0.419 0.039),\n      color(xyz 0.43 0.304 0.022),\n      color(xyz 0.36 0.211 0.01));\n  color: #ffffff;\n  border: none;\n  border-radius: 3rem;\n  font-weight: 700;\n  font-size: 0.97rem;\n  cursor: pointer;\n  letter-spacing: 0.03em;\n  box-shadow: 0 8px 22px #e548006b;\n  box-shadow: 0 8px 22px oklch(62% 0.22 38deg / 0.42);\n  transition:\n    opacity 0.18s,\n    transform 0.15s,\n    box-shadow 0.18s;\n  touch-action: manipulation;\n  width: 100%;\n}\n.submit-btn:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n  box-shadow: 0 12px 28px #e5480080;\n  box-shadow: 0 12px 28px oklch(62% 0.22 38deg / 0.5);\n}\n.submit-btn:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 4px 12px #e5480059;\n  box-shadow: 0 4px 12px oklch(62% 0.22 38deg / 0.35);\n}\n.submit-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.spinner {\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.alt-link {\n  text-align: center;\n  font-size: 0.875rem;\n  color: #696969;\n  margin: 1.5rem 0 0;\n}\n.alt-link a {\n  color: #e54800;\n  color: oklch(62% 0.22 38deg);\n  font-weight: 700;\n  text-decoration: none;\n}\n.alt-link a:hover {\n  text-decoration: underline;\n}\n@media (prefers-reduced-motion: reduce) {\n  .error-msg {\n    animation: none;\n  }\n  .submit-btn {\n    transition: none;\n  }\n  .input-wrap input {\n    transition: none;\n  }\n}\n@media (max-width: 860px) {\n  .auth-shell {\n    grid-template-columns: 1fr;\n  }\n  .auth-aside {\n    display: none;\n  }\n  .auth-main {\n    background: var(--clr-bg);\n    min-height: 100dvh;\n  }\n}\n@media (max-width: 480px) {\n  .auth-main {\n    padding: 2rem 1.25rem 3rem;\n  }\n}\n/*# sourceMappingURL=register.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/pages/register/register.component.ts", lineNumber: 441 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-EBMYXQLG.js.map
