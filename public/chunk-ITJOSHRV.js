import {
  AuthService
} from "./chunk-NMKHPTKL.js";
import {
  SeoService
} from "./chunk-QW5YG2I6.js";
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LVOWXKII.js";

// src/app/pages/profile/profile.component.ts
function ProfileComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.success());
  }
}
function ProfileComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function ProfileComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.previewUrl(), \u0275\u0275sanitizeUrl);
  }
}
var ProfileComponent = class _ProfileComponent {
  auth = inject(AuthService);
  seo = inject(SeoService);
  name = this.auth.user()?.name || "";
  imageFile = null;
  previewUrl = signal(this.auth.user()?.image || null, ...ngDevMode ? [{ debugName: "previewUrl" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  success = signal("", ...ngDevMode ? [{ debugName: "success" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.seo.set({
      title: "\u041F\u0440\u043E\u0444\u0438\u043B",
      description: "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0432\u0430\u0439 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438\u0442\u0435 \u043D\u0430 \u0441\u0432\u043E\u044F \u043F\u0440\u043E\u0444\u0438\u043B \u0432 \u043A\u0443\u043B\u0438\u043D\u0430\u0440\u043D\u0438\u044F \u0431\u043B\u043E\u0433 \u043D\u0430 \u0418\u0432\u043E."
    });
  }
  onFileChange(e) {
    const file = e.target.files?.[0];
    if (file) {
      this.imageFile = file;
      this.previewUrl.set(URL.createObjectURL(file));
    }
  }
  onSubmit(e) {
    e.preventDefault();
    this.loading.set(true);
    this.success.set("");
    this.error.set("");
    const formData = new FormData();
    formData.append("name", this.name);
    if (this.imageFile) {
      formData.append("image", this.imageFile);
    }
    this.auth.updateProfile(formData).subscribe({
      next: () => {
        this.loading.set(false);
        this.success.set("\u041F\u0440\u043E\u0444\u0438\u043B\u044A\u0442 \u0435 \u043E\u0431\u043D\u043E\u0432\u0435\u043D \u0443\u0441\u043F\u0435\u0448\u043D\u043E.");
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err.error?.message || "\u0413\u0440\u0435\u0448\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u044F\u0432\u0430\u043D\u0435.");
      }
    });
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 19, vars: 7, consts: [[1, "profile-page"], [1, "profile-card"], [1, "success-msg"], [1, "error-msg"], [3, "submit"], ["type", "text", "name", "name", 3, "ngModelChange", "ngModel"], ["type", "email", "disabled", "", 3, "value"], ["type", "file", "accept", "image/jpeg,image/png,image/webp", 3, "change"], ["alt", "\u041F\u0440\u0435\u0433\u043B\u0435\u0434", 1, "avatar-preview", 3, "src"], ["type", "submit", 1, "submit-btn", 3, "disabled"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "\u041C\u043E\u044F\u0442 \u043F\u0440\u043E\u0444\u0438\u043B");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, ProfileComponent_Conditional_4_Template, 2, 1, "div", 2);
      \u0275\u0275conditionalCreate(5, ProfileComponent_Conditional_5_Template, 2, 1, "div", 3);
      \u0275\u0275elementStart(6, "form", 4);
      \u0275\u0275listener("submit", function ProfileComponent_Template_form_submit_6_listener($event) {
        return ctx.onSubmit($event);
      });
      \u0275\u0275elementStart(7, "label");
      \u0275\u0275text(8, "\u0418\u043C\u0435");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "label");
      \u0275\u0275text(11, "\u0418\u043C\u0435\u0439\u043B");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 6);
      \u0275\u0275elementStart(13, "label");
      \u0275\u0275text(14, "\u041F\u0440\u043E\u0444\u0438\u043B\u043D\u0430 \u0441\u043D\u0438\u043C\u043A\u0430");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 7);
      \u0275\u0275listener("change", function ProfileComponent_Template_input_change_15_listener($event) {
        return ctx.onFileChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, ProfileComponent_Conditional_16_Template, 1, 1, "img", 8);
      \u0275\u0275elementStart(17, "button", 9);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.success() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 5 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.name);
      \u0275\u0275advance(3);
      \u0275\u0275property("value", (tmp_3_0 = ctx.auth.user()) == null ? null : tmp_3_0.email);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.previewUrl() ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? "\u0417\u0430\u043F\u0430\u0437\u0432\u0430\u043D\u0435..." : "\u0417\u0430\u043F\u0430\u0437\u0438 \u043F\u0440\u043E\u043C\u0435\u043D\u0438\u0442\u0435", " ");
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ['\n.profile-page[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n}\n.profile-card[_ngcontent-%COMP%] {\n  max-width: 500px;\n  width: 100%;\n  padding: 2.5rem;\n  background: #ffffff;\n  border-radius: 2rem;\n  border: 1px solid rgba(0, 0, 0, 0.14);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);\n}\nh1[_ngcontent-%COMP%] {\n  font-family: "Georgia", serif;\n  font-size: 1.8rem;\n  color: #1c1917;\n  margin: 0 0 1.5rem;\n}\n.success-msg[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n  padding: 0.75rem 1rem;\n  border-radius: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-bottom: 1rem;\n}\n.error-msg[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  padding: 0.75rem 1rem;\n  border-radius: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-bottom: 1rem;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #1c1917;\n  margin-top: 0.5rem;\n}\ninput[_ngcontent-%COMP%] {\n  padding: 0.7rem 1rem;\n  border: 1.5px solid #c9c5c2;\n  border-radius: 0.75rem;\n  font-size: 0.95rem;\n  outline: none;\n  color: #1c1917;\n}\ninput[_ngcontent-%COMP%]:disabled {\n  background: #f0ede8;\n  color: #57534e;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border-color: #92400e;\n  box-shadow: 0 0 0 3px rgba(146, 64, 14, 0.12);\n}\n.avatar-preview[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-top: 0.5rem;\n  border: 3px solid #e7e5e4;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.75rem;\n  background: #78350f;\n  color: white;\n  border: none;\n  border-radius: 9999px;\n  font-weight: 700;\n  font-size: 1rem;\n  cursor: pointer;\n}\n.submit-btn[_ngcontent-%COMP%]:hover {\n  background: #5c2a0b;\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=profile.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, imports: [FormsModule], template: `
    <div class="profile-page">
      <div class="profile-card">
        <h1>\u041C\u043E\u044F\u0442 \u043F\u0440\u043E\u0444\u0438\u043B</h1>

        @if (success()) {
          <div class="success-msg">{{ success() }}</div>
        }
        @if (error()) {
          <div class="error-msg">{{ error() }}</div>
        }

        <form (submit)="onSubmit($event)">
          <label>\u0418\u043C\u0435</label>
          <input type="text" [(ngModel)]="name" name="name" />

          <label>\u0418\u043C\u0435\u0439\u043B</label>
          <input type="email" [value]="auth.user()?.email" disabled />

          <label>\u041F\u0440\u043E\u0444\u0438\u043B\u043D\u0430 \u0441\u043D\u0438\u043C\u043A\u0430</label>
          <input type="file" (change)="onFileChange($event)" accept="image/jpeg,image/png,image/webp" />

          @if (previewUrl()) {
            <img [src]="previewUrl()" class="avatar-preview" alt="\u041F\u0440\u0435\u0433\u043B\u0435\u0434" />
          }

          <button type="submit" [disabled]="loading()" class="submit-btn">
            {{ loading() ? '\u0417\u0430\u043F\u0430\u0437\u0432\u0430\u043D\u0435...' : '\u0417\u0430\u043F\u0430\u0437\u0438 \u043F\u0440\u043E\u043C\u0435\u043D\u0438\u0442\u0435' }}
          </button>
        </form>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ['/* angular:styles/component:scss;49118e9c569c417876c585684315e8dbc069336674830a1a2ac22be73dd58e1b;C:/Users/ipene/Desktop/Blog-System-Angular/frontend/src/app/pages/profile/profile.component.ts */\n.profile-page {\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n}\n.profile-card {\n  max-width: 500px;\n  width: 100%;\n  padding: 2.5rem;\n  background: #ffffff;\n  border-radius: 2rem;\n  border: 1px solid rgba(0, 0, 0, 0.14);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);\n}\nh1 {\n  font-family: "Georgia", serif;\n  font-size: 1.8rem;\n  color: #1c1917;\n  margin: 0 0 1.5rem;\n}\n.success-msg {\n  background: #f0fdf4;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n  padding: 0.75rem 1rem;\n  border-radius: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-bottom: 1rem;\n}\n.error-msg {\n  background: #fef2f2;\n  color: #b91c1c;\n  border: 1px solid #fecaca;\n  padding: 0.75rem 1rem;\n  border-radius: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-bottom: 1rem;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\nlabel {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #1c1917;\n  margin-top: 0.5rem;\n}\ninput {\n  padding: 0.7rem 1rem;\n  border: 1.5px solid #c9c5c2;\n  border-radius: 0.75rem;\n  font-size: 0.95rem;\n  outline: none;\n  color: #1c1917;\n}\ninput:disabled {\n  background: #f0ede8;\n  color: #57534e;\n}\ninput:focus {\n  border-color: #92400e;\n  box-shadow: 0 0 0 3px rgba(146, 64, 14, 0.12);\n}\n.avatar-preview {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-top: 0.5rem;\n  border: 3px solid #e7e5e4;\n}\n.submit-btn {\n  margin-top: 1rem;\n  padding: 0.75rem;\n  background: #78350f;\n  color: white;\n  border: none;\n  border-radius: 9999px;\n  font-weight: 700;\n  font-size: 1rem;\n  cursor: pointer;\n}\n.submit-btn:hover {\n  background: #5c2a0b;\n}\n.submit-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=profile.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/pages/profile/profile.component.ts", lineNumber: 125 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-ITJOSHRV.js.map
