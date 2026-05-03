import {
  CommentService
} from "./chunk-2FNRSGCU.js";
import {
  ConfirmModalComponent
} from "./chunk-STXRDFLB.js";
import {
  takeUntilDestroyed
} from "./chunk-ZGNCPTQ3.js";
import "./chunk-QKG44OY5.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  RouterLink,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OGGNHWOY.js";

// src/app/pages/dashboard-comments/dashboard-comments.component.ts
var _c0 = (a0) => ["/recipes", a0];
var _forTrack0 = ($index, $item) => $item.id;
function DashboardCommentsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function DashboardCommentsComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmBulkDelete());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8);
    \u0275\u0275element(2, "polyline", 9)(3, "path", 10)(4, "path", 11)(5, "path", 12)(6, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" \u0418\u0437\u0442\u0440\u0438\u0439 \u0438\u0437\u0431\u0440\u0430\u043D\u0438\u0442\u0435 (", ctx_r1.selectedIds().length, ") ");
  }
}
function DashboardCommentsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 14);
    \u0275\u0275element(2, "path", 15)(3, "line", 16)(4, "line", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "\u041D\u044F\u043C\u0430 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0442\u0435 \u043E\u0442 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438\u0442\u0435 \u0449\u0435 \u0441\u0435 \u043F\u043E\u044F\u0432\u044F\u0442 \u0442\u0443\u043A.");
    \u0275\u0275elementEnd()();
  }
}
function DashboardCommentsComponent_Conditional_10_For_19_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, comment_r5.recipe.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(comment_r5.recipe.title);
  }
}
function DashboardCommentsComponent_Conditional_10_For_19_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function DashboardCommentsComponent_Conditional_10_For_19_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2605 ", comment_r5.rating);
  }
}
function DashboardCommentsComponent_Conditional_10_For_19_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function DashboardCommentsComponent_Conditional_10_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 21)(2, "input", 22);
    \u0275\u0275listener("change", function DashboardCommentsComponent_Conditional_10_For_19_Template_input_change_2_listener() {
      const comment_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSelect(comment_r5.id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td", 23)(4, "div", 24)(5, "div", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 26);
    \u0275\u0275conditionalCreate(10, DashboardCommentsComponent_Conditional_10_For_19_Conditional_10_Template, 2, 4, "a", 27)(11, DashboardCommentsComponent_Conditional_10_For_19_Conditional_11_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 29);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 30);
    \u0275\u0275conditionalCreate(15, DashboardCommentsComponent_Conditional_10_For_19_Conditional_15_Template, 2, 1, "span", 31)(16, DashboardCommentsComponent_Conditional_10_For_19_Conditional_16_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 32);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 33)(20, "button", 34);
    \u0275\u0275listener("click", function DashboardCommentsComponent_Conditional_10_For_19_Template_button_click_20_listener() {
      const comment_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmSingleDelete(comment_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 8);
    \u0275\u0275element(22, "polyline", 9)(23, "path", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " \u0418\u0437\u0442\u0440\u0438\u0439 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const comment_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected-row", ctx_r1.isSelected(comment_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isSelected(comment_r5.id));
    \u0275\u0275attribute("aria-label", "\u0418\u0437\u0431\u0435\u0440\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440 \u043E\u0442 " + ((comment_r5.author == null ? null : comment_r5.author.name) || "\u0410\u043D\u043E\u043D\u0438\u043C\u0435\u043D"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((comment_r5.author == null ? null : comment_r5.author.name == null ? null : comment_r5.author.name.charAt(0)) || "?");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((comment_r5.author == null ? null : comment_r5.author.name) || "\u0410\u043D\u043E\u043D\u0438\u043C\u0435\u043D");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(comment_r5.recipe ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(comment_r5.body);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(comment_r5.rating ? 15 : 16);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(comment_r5.created_at));
  }
}
function DashboardCommentsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "table")(1, "thead")(2, "tr")(3, "th", 18)(4, "input", 19);
    \u0275\u0275listener("change", function DashboardCommentsComponent_Conditional_10_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAll($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "\u0410\u0432\u0442\u043E\u0440");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "\u0420\u0435\u0446\u0435\u043F\u0442\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "\u041E\u0446\u0435\u043D\u043A\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "\u0414\u0430\u0442\u0430");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, DashboardCommentsComponent_Conditional_10_For_19_Template, 25, 10, "tr", 20, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r1.allSelected())("indeterminate", ctx_r1.someSelected());
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.comments());
  }
}
function DashboardCommentsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-confirm-modal", 35);
    \u0275\u0275listener("confirmed", function DashboardCommentsComponent_Conditional_11_Template_app_confirm_modal_confirmed_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.executeDelete());
    })("cancelled", function DashboardCommentsComponent_Conditional_11_Template_app_confirm_modal_cancelled_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDeleteModal.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("open", true)("title", ctx_r1.deleteModalTitle())("message", ctx_r1.deleteModalMessage());
  }
}
var DashboardCommentsComponent = class _DashboardCommentsComponent {
  commentService = inject(CommentService);
  destroyRef = inject(DestroyRef);
  comments = signal([], ...ngDevMode ? [{ debugName: "comments" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedIds = signal([], ...ngDevMode ? [{ debugName: "selectedIds" }] : (
    /* istanbul ignore next */
    []
  ));
  showDeleteModal = signal(false, ...ngDevMode ? [{ debugName: "showDeleteModal" }] : (
    /* istanbul ignore next */
    []
  ));
  deleteModalTitle = signal("", ...ngDevMode ? [{ debugName: "deleteModalTitle" }] : (
    /* istanbul ignore next */
    []
  ));
  deleteModalMessage = signal("", ...ngDevMode ? [{ debugName: "deleteModalMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  deleteAction = null;
  constructor() {
    this.loadComments();
  }
  loadComments() {
    this.commentService.getAdminComments().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((c) => {
      this.comments.set(c);
      this.selectedIds.set([]);
    });
  }
  isSelected(id) {
    return this.selectedIds().includes(id);
  }
  allSelected() {
    const c = this.comments();
    return c.length > 0 && this.selectedIds().length === c.length;
  }
  someSelected() {
    const len = this.selectedIds().length;
    return len > 0 && len < this.comments().length;
  }
  toggleSelect(id) {
    const ids = this.selectedIds();
    if (ids.includes(id)) {
      this.selectedIds.set(ids.filter((i) => i !== id));
    } else {
      this.selectedIds.set([...ids, id]);
    }
  }
  toggleAll(event) {
    const checked = event.target.checked;
    this.selectedIds.set(checked ? this.comments().map((c) => c.id) : []);
  }
  confirmSingleDelete(comment) {
    this.deleteModalTitle.set("\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440");
    this.deleteModalMessage.set("\u0421\u0438\u0433\u0443\u0440\u043D\u0438 \u043B\u0438 \u0441\u0442\u0435, \u0447\u0435 \u0438\u0441\u043A\u0430\u0442\u0435 \u0434\u0430 \u0438\u0437\u0442\u0440\u0438\u0435\u0442\u0435 \u0442\u043E\u0437\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440?");
    this.deleteAction = () => {
      this.commentService.delete(comment.id).subscribe(() => this.loadComments());
    };
    this.showDeleteModal.set(true);
  }
  confirmBulkDelete() {
    const count = this.selectedIds().length;
    this.deleteModalTitle.set("\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u043D\u0430 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438");
    this.deleteModalMessage.set(`\u0421\u0438\u0433\u0443\u0440\u043D\u0438 \u043B\u0438 \u0441\u0442\u0435, \u0447\u0435 \u0438\u0441\u043A\u0430\u0442\u0435 \u0434\u0430 \u0438\u0437\u0442\u0440\u0438\u0435\u0442\u0435 ${count} \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440${count === 1 ? "" : "\u0430"}?`);
    this.deleteAction = () => {
      this.commentService.bulkDelete(this.selectedIds()).subscribe(() => this.loadComments());
    };
    this.showDeleteModal.set(true);
  }
  executeDelete() {
    this.showDeleteModal.set(false);
    this.deleteAction?.();
    this.deleteAction = null;
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString("bg-BG", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  }
  static \u0275fac = function DashboardCommentsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardCommentsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardCommentsComponent, selectors: [["app-dashboard-comments"]], decls: 12, vars: 4, consts: [[1, "dashboard-comments"], [1, "header-row"], [1, "subtitle"], [1, "btn-bulk-delete"], [1, "table-wrap"], [1, "empty-state"], [3, "open", "title", "message"], [1, "btn-bulk-delete", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"], ["d", "M10 11v6"], ["d", "M14 11v6"], ["d", "M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"], ["viewBox", "0 0 64 64", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M52 16a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H20l-12 8V20a4 4 0 0 1 4-4h40z"], ["x1", "24", "y1", "28", "x2", "40", "y2", "28"], ["x1", "24", "y1", "36", "x2", "34", "y2", "36"], [1, "th-check"], ["type", "checkbox", "aria-label", "\u0418\u0437\u0431\u0435\u0440\u0438 \u0432\u0441\u0438\u0447\u043A\u0438", 3, "change", "checked", "indeterminate"], [3, "selected-row"], [1, "td-check"], ["type", "checkbox", 3, "change", "checked"], [1, "author-cell"], [1, "author-wrap"], [1, "author-avatar"], [1, "recipe-cell"], [1, "recipe-link", 3, "routerLink"], [1, "no-val"], [1, "content-cell"], [1, "rating-cell"], [1, "rating-badge"], [1, "date-cell"], [1, "actions-cell"], ["title", "\u0418\u0437\u0442\u0440\u0438\u0439 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0430", 1, "btn-delete", 3, "click"], [3, "confirmed", "cancelled", "open", "title", "message"]], template: function DashboardCommentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275text(4, "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 2);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, DashboardCommentsComponent_Conditional_7_Template, 8, 1, "button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 4);
      \u0275\u0275conditionalCreate(9, DashboardCommentsComponent_Conditional_9_Template, 9, 0, "div", 5)(10, DashboardCommentsComponent_Conditional_10_Template, 20, 2, "table");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, DashboardCommentsComponent_Conditional_11_Template, 1, 3, "app-confirm-modal", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.comments().length, " \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0430 \u043E\u0431\u0449\u043E");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedIds().length > 0 ? 7 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.comments().length === 0 ? 9 : 10);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showDeleteModal() ? 11 : -1);
    }
  }, dependencies: [ConfirmModalComponent, RouterLink], styles: ["\n.dashboard-comments[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem 3rem;\n}\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.5rem, 2.5vw, 1.75rem);\n  font-weight: 800;\n  color: var(--clr-text);\n  margin: 0 0 var(--space-1);\n  letter-spacing: -0.025em;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--clr-text-muted);\n  font-size: 0.85rem;\n  margin: 0;\n}\n.btn-bulk-delete[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-3) var(--space-4);\n  background: var(--clr-error-bg);\n  color: var(--clr-error);\n  border: 1.5px solid color-mix(in oklch, var(--clr-error) 40%, transparent);\n  border-radius: var(--radius-sm);\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: background 0.18s, border-color 0.18s;\n  touch-action: manipulation;\n  white-space: nowrap;\n}\n.btn-bulk-delete[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.875rem;\n  height: 0.875rem;\n  flex-shrink: 0;\n}\n.btn-bulk-delete[_ngcontent-%COMP%]:hover {\n  background: color-mix(in oklch, var(--clr-error-bg) 70%, var(--clr-error));\n  border-color: color-mix(in oklch, var(--clr-error) 60%, transparent);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--clr-border-faint);\n  overflow-x: auto;\n  box-shadow: var(--shadow-sm), inset 0 1px 0 rgba(255, 255, 255, 0.55);\n  background:\n    linear-gradient(\n      to right,\n      var(--clr-surface),\n      var(--clr-surface)) left center/40px 100% no-repeat local,\n    linear-gradient(\n      to right,\n      var(--clr-surface),\n      var(--clr-surface)) right center/40px 100% no-repeat local,\n    linear-gradient(\n      to right,\n      rgba(28, 25, 23, 0.1),\n      transparent) left center/14px 100% no-repeat scroll,\n    linear-gradient(\n      to left,\n      rgba(28, 25, 23, 0.1),\n      transparent) right center/14px 100% no-repeat scroll,\n    var(--clr-surface);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-10) var(--space-7);\n  color: var(--clr-text-faint);\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  margin-bottom: var(--space-1);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--clr-text);\n  margin: 0;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\nth[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: var(--space-3) var(--space-4);\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--clr-text-muted);\n  font-weight: 700;\n  border-bottom: 2px solid var(--clr-border-faint);\n  background: var(--clr-surface-alt);\n  white-space: nowrap;\n}\n.th-check[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  padding: var(--space-3) var(--space-3);\n}\ntd[_ngcontent-%COMP%] {\n  padding: var(--space-3) var(--space-4);\n  border-bottom: 1px solid var(--clr-border-faint);\n  font-size: 0.875rem;\n  color: var(--clr-text);\n  vertical-align: middle;\n}\n.td-check[_ngcontent-%COMP%] {\n  padding: var(--space-3) var(--space-3);\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.15s;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--clr-surface-hover);\n}\ntbody[_ngcontent-%COMP%]   tr.selected-row[_ngcontent-%COMP%] {\n  background: color-mix(in oklch, var(--clr-amber-bg) 60%, var(--clr-surface));\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.author-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.author-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.author-avatar[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: var(--radius-circle);\n  background: var(--clr-green);\n  color: #ffffff;\n  font-size: 0.68rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.author-wrap[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: var(--clr-text);\n}\n.recipe-cell[_ngcontent-%COMP%] {\n  max-width: 160px;\n}\n.recipe-link[_ngcontent-%COMP%] {\n  color: var(--clr-brand);\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.83rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.recipe-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.content-cell[_ngcontent-%COMP%] {\n  max-width: 280px;\n  color: var(--clr-text-muted);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  line-height: 1.5;\n  white-space: normal;\n}\n.rating-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px var(--space-2);\n  background: var(--clr-amber-bg);\n  color: var(--clr-amber-text);\n  border-radius: var(--radius-pill);\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.no-val[_ngcontent-%COMP%] {\n  color: var(--clr-text-faint);\n}\n.date-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  color: var(--clr-text-muted);\n  font-size: 0.82rem;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.btn-delete[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-1);\n  padding: var(--space-2) var(--space-3);\n  border-radius: var(--radius-xs);\n  font-size: 0.78rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: 1.5px solid color-mix(in oklch, var(--clr-error) 40%, transparent);\n  background: var(--clr-surface);\n  color: var(--clr-error);\n  transition: background 0.18s, border-color 0.18s;\n  touch-action: manipulation;\n}\n.btn-delete[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.8rem;\n  height: 0.8rem;\n  flex-shrink: 0;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: var(--clr-error-bg);\n  border-color: color-mix(in oklch, var(--clr-error) 60%, transparent);\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  cursor: pointer;\n  accent-color: var(--clr-brand);\n}\n@media (max-width: 768px) {\n  .dashboard-comments[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem 2.5rem;\n  }\n  .header-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=dashboard-comments.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardCommentsComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-comments", standalone: true, imports: [ConfirmModalComponent, RouterLink], template: `
    <div class="dashboard-comments">
      <div class="header-row">
        <div>
          <h1>\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438</h1>
          <p class="subtitle">{{ comments().length }} \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0430 \u043E\u0431\u0449\u043E</p>
        </div>
        @if (selectedIds().length > 0) {
          <button class="btn-bulk-delete" (click)="confirmBulkDelete()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
            \u0418\u0437\u0442\u0440\u0438\u0439 \u0438\u0437\u0431\u0440\u0430\u043D\u0438\u0442\u0435 ({{ selectedIds().length }})
          </button>
        }
      </div>

      <div class="table-wrap">
        @if (comments().length === 0) {
          <div class="empty-state">
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M52 16a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H20l-12 8V20a4 4 0 0 1 4-4h40z"/><line x1="24" y1="28" x2="40" y2="28"/><line x1="24" y1="36" x2="34" y2="36"/></svg>
            <p>\u041D\u044F\u043C\u0430 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438.</p>
            <span>\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0442\u0435 \u043E\u0442 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438\u0442\u0435 \u0449\u0435 \u0441\u0435 \u043F\u043E\u044F\u0432\u044F\u0442 \u0442\u0443\u043A.</span>
          </div>
        } @else {
          <table>
            <thead>
              <tr>
                <th class="th-check">
                  <input type="checkbox" (change)="toggleAll($event)" [checked]="allSelected()" [indeterminate]="someSelected()" aria-label="\u0418\u0437\u0431\u0435\u0440\u0438 \u0432\u0441\u0438\u0447\u043A\u0438" />
                </th>
                <th>\u0410\u0432\u0442\u043E\u0440</th>
                <th>\u0420\u0435\u0446\u0435\u043F\u0442\u0430</th>
                <th>\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440</th>
                <th>\u041E\u0446\u0435\u043D\u043A\u0430</th>
                <th>\u0414\u0430\u0442\u0430</th>
                <th>\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F</th>
              </tr>
            </thead>
            <tbody>
              @for (comment of comments(); track comment.id) {
                <tr [class.selected-row]="isSelected(comment.id)">
                  <td class="td-check">
                    <input type="checkbox" [checked]="isSelected(comment.id)" (change)="toggleSelect(comment.id)" [attr.aria-label]="'\u0418\u0437\u0431\u0435\u0440\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440 \u043E\u0442 ' + (comment.author?.name || '\u0410\u043D\u043E\u043D\u0438\u043C\u0435\u043D')" />
                  </td>
                  <td class="author-cell">
                    <div class="author-wrap">
                      <div class="author-avatar">{{ comment.author?.name?.charAt(0) || '?' }}</div>
                      <span>{{ comment.author?.name || '\u0410\u043D\u043E\u043D\u0438\u043C\u0435\u043D' }}</span>
                    </div>
                  </td>
                  <td class="recipe-cell">
                    @if (comment.recipe) {
                      <a [routerLink]="['/recipes', comment.recipe.slug]" class="recipe-link">{{ comment.recipe.title }}</a>
                    } @else {
                      <span class="no-val">\u2014</span>
                    }
                  </td>
                  <td class="content-cell">{{ comment.body }}</td>
                  <td class="rating-cell">
                    @if (comment.rating) {
                      <span class="rating-badge">\u2605 {{ comment.rating }}</span>
                    } @else {
                      <span class="no-val">\u2014</span>
                    }
                  </td>
                  <td class="date-cell">{{ formatDate(comment.created_at) }}</td>
                  <td class="actions-cell">
                    <button class="btn-delete" (click)="confirmSingleDelete(comment)" title="\u0418\u0437\u0442\u0440\u0438\u0439 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0430">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
                      \u0418\u0437\u0442\u0440\u0438\u0439
                    </button>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        }
      </div>

      @if (showDeleteModal()) {
        <app-confirm-modal
          [open]="true"
          [title]="deleteModalTitle()"
          [message]="deleteModalMessage()"
          (confirmed)="executeDelete()"
          (cancelled)="showDeleteModal.set(false)"
        ></app-confirm-modal>
      }
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;89441c595ce45acd7e90c69e218c97ff1355fb7bdd06505977ec5162674d6670;/home/ivaylo-penev/Desktop/Blog-System-Angular/frontend/src/app/pages/dashboard-comments/dashboard-comments.component.ts */\n.dashboard-comments {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem 3rem;\n}\n.header-row {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\nh1 {\n  font-family: var(--font-display);\n  font-size: clamp(1.5rem, 2.5vw, 1.75rem);\n  font-weight: 800;\n  color: var(--clr-text);\n  margin: 0 0 var(--space-1);\n  letter-spacing: -0.025em;\n}\n.subtitle {\n  color: var(--clr-text-muted);\n  font-size: 0.85rem;\n  margin: 0;\n}\n.btn-bulk-delete {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-3) var(--space-4);\n  background: var(--clr-error-bg);\n  color: var(--clr-error);\n  border: 1.5px solid color-mix(in oklch, var(--clr-error) 40%, transparent);\n  border-radius: var(--radius-sm);\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: background 0.18s, border-color 0.18s;\n  touch-action: manipulation;\n  white-space: nowrap;\n}\n.btn-bulk-delete svg {\n  width: 0.875rem;\n  height: 0.875rem;\n  flex-shrink: 0;\n}\n.btn-bulk-delete:hover {\n  background: color-mix(in oklch, var(--clr-error-bg) 70%, var(--clr-error));\n  border-color: color-mix(in oklch, var(--clr-error) 60%, transparent);\n}\n.table-wrap {\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--clr-border-faint);\n  overflow-x: auto;\n  box-shadow: var(--shadow-sm), inset 0 1px 0 rgba(255, 255, 255, 0.55);\n  background:\n    linear-gradient(\n      to right,\n      var(--clr-surface),\n      var(--clr-surface)) left center/40px 100% no-repeat local,\n    linear-gradient(\n      to right,\n      var(--clr-surface),\n      var(--clr-surface)) right center/40px 100% no-repeat local,\n    linear-gradient(\n      to right,\n      rgba(28, 25, 23, 0.1),\n      transparent) left center/14px 100% no-repeat scroll,\n    linear-gradient(\n      to left,\n      rgba(28, 25, 23, 0.1),\n      transparent) right center/14px 100% no-repeat scroll,\n    var(--clr-surface);\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-10) var(--space-7);\n  color: var(--clr-text-faint);\n  text-align: center;\n}\n.empty-state svg {\n  width: 3rem;\n  height: 3rem;\n  margin-bottom: var(--space-1);\n}\n.empty-state p {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--clr-text);\n  margin: 0;\n}\n.empty-state span {\n  font-size: 0.875rem;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\nth {\n  text-align: left;\n  padding: var(--space-3) var(--space-4);\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--clr-text-muted);\n  font-weight: 700;\n  border-bottom: 2px solid var(--clr-border-faint);\n  background: var(--clr-surface-alt);\n  white-space: nowrap;\n}\n.th-check {\n  width: 2.5rem;\n  padding: var(--space-3) var(--space-3);\n}\ntd {\n  padding: var(--space-3) var(--space-4);\n  border-bottom: 1px solid var(--clr-border-faint);\n  font-size: 0.875rem;\n  color: var(--clr-text);\n  vertical-align: middle;\n}\n.td-check {\n  padding: var(--space-3) var(--space-3);\n}\ntbody tr {\n  transition: background 0.15s;\n}\ntbody tr:hover {\n  background: var(--clr-surface-hover);\n}\ntbody tr.selected-row {\n  background: color-mix(in oklch, var(--clr-amber-bg) 60%, var(--clr-surface));\n}\ntbody tr:last-child td {\n  border-bottom: none;\n}\n.author-cell {\n  white-space: nowrap;\n}\n.author-wrap {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.author-avatar {\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: var(--radius-circle);\n  background: var(--clr-green);\n  color: #ffffff;\n  font-size: 0.68rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.author-wrap span {\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: var(--clr-text);\n}\n.recipe-cell {\n  max-width: 160px;\n}\n.recipe-link {\n  color: var(--clr-brand);\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.83rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.recipe-link:hover {\n  text-decoration: underline;\n}\n.content-cell {\n  max-width: 280px;\n  color: var(--clr-text-muted);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  line-height: 1.5;\n  white-space: normal;\n}\n.rating-badge {\n  display: inline-block;\n  padding: 2px var(--space-2);\n  background: var(--clr-amber-bg);\n  color: var(--clr-amber-text);\n  border-radius: var(--radius-pill);\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.no-val {\n  color: var(--clr-text-faint);\n}\n.date-cell {\n  white-space: nowrap;\n  color: var(--clr-text-muted);\n  font-size: 0.82rem;\n}\n.actions-cell {\n  white-space: nowrap;\n}\n.btn-delete {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-1);\n  padding: var(--space-2) var(--space-3);\n  border-radius: var(--radius-xs);\n  font-size: 0.78rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: 1.5px solid color-mix(in oklch, var(--clr-error) 40%, transparent);\n  background: var(--clr-surface);\n  color: var(--clr-error);\n  transition: background 0.18s, border-color 0.18s;\n  touch-action: manipulation;\n}\n.btn-delete svg {\n  width: 0.8rem;\n  height: 0.8rem;\n  flex-shrink: 0;\n}\n.btn-delete:hover {\n  background: var(--clr-error-bg);\n  border-color: color-mix(in oklch, var(--clr-error) 60%, transparent);\n}\ninput[type=checkbox] {\n  width: 1rem;\n  height: 1rem;\n  cursor: pointer;\n  accent-color: var(--clr-brand);\n}\n@media (max-width: 768px) {\n  .dashboard-comments {\n    padding: 1.5rem 1rem 2.5rem;\n  }\n  .header-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=dashboard-comments.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardCommentsComponent, { className: "DashboardCommentsComponent", filePath: "src/app/pages/dashboard-comments/dashboard-comments.component.ts", lineNumber: 293 });
})();
export {
  DashboardCommentsComponent
};
//# sourceMappingURL=chunk-Y6TRSEAF.js.map
