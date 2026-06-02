import {
  routes
} from "./chunk-TYVQP4CB.js";
import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  ɵNgNoValidate
} from "./chunk-45DOGZAU.js";
import {
  RouterModule
} from "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-MNWNTO2T.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction4,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/student/settings/student-change-password/student-change-password.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "poor-active": a0, "avg-active": a1, "strong-active": a2, "heavy-active": a3 });
var _c1 = (a0) => ({ "active": a0 });
function StudentChangePasswordComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275element(1, "img", 32);
    \u0275\u0275text(2, "Weak. Must contain at least 8 characters ");
    \u0275\u0275elementEnd();
  }
}
function StudentChangePasswordComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275element(1, "img", 34);
    \u0275\u0275text(2, "Average. Must contain at least 1 letter or number ");
    \u0275\u0275elementEnd();
  }
}
function StudentChangePasswordComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275element(1, "img", 36);
    \u0275\u0275text(2, "Almost. Must contain special symbol ");
    \u0275\u0275elementEnd();
  }
}
function StudentChangePasswordComponent_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275element(1, "img", 36);
    \u0275\u0275text(2, "Awesome! You have a secure password. ");
    \u0275\u0275elementEnd();
  }
}
var StudentChangePasswordComponent = class _StudentChangePasswordComponent {
  routes = routes;
  password = [false, false];
  // Add more as needed
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  passwordValue = "";
  strengthLevel = "";
  passwordInfoMessage = null;
  passwordInfoColor = "";
  poorRegExp = /[a-z]/;
  weakRegExp = /(?=.*?[0-9])/;
  strongRegExp = /(?=.*?[#?!@$%^&*-])/;
  whitespaceRegExp = /^$|\s+/;
  checkPasswordStrength(event) {
    const inputElement = event.target;
    const password = inputElement.value;
    this.passwordValue = password;
    const passwordLength = password.length;
    const hasPoor = this.poorRegExp.test(password);
    const hasWeak = this.weakRegExp.test(password);
    const hasStrong = this.strongRegExp.test(password);
    const hasWhitespace = this.whitespaceRegExp.test(password);
    if (password === "") {
      this.resetStrength();
      return;
    }
    if (hasWhitespace) {
      this.passwordInfoMessage = "Whitespaces are not allowed";
      this.passwordInfoColor = "red";
      this.strengthLevel = "";
      return;
    }
    if (passwordLength < 8) {
      this.strengthLevel = "poor";
      this.passwordInfoMessage = "Weak. Must contain at least 8 characters.";
      this.passwordInfoColor = "red";
    } else if (hasPoor || hasWeak || hasStrong) {
      this.strengthLevel = "weak";
      this.passwordInfoMessage = "Average. Must contain at least 1 letter or number.";
      this.passwordInfoColor = "#FFB54A";
    }
    if (passwordLength >= 8 && hasPoor && (hasWeak || hasStrong)) {
      this.strengthLevel = "strong";
      this.passwordInfoMessage = "Almost strong. Must contain a special symbol.";
      this.passwordInfoColor = "#1D9CFD";
    }
    if (passwordLength >= 8 && hasPoor && hasWeak && hasStrong) {
      this.strengthLevel = "heavy";
      this.passwordInfoMessage = "Awesome! You have a secure password.";
      this.passwordInfoColor = "#159F46";
    }
  }
  resetStrength() {
    this.strengthLevel = "";
    this.passwordInfoMessage = null;
  }
  static \u0275fac = function StudentChangePasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentChangePasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentChangePasswordComponent, selectors: [["app-student-change-password"]], decls: 70, vars: 28, consts: [[1, "card", "mb-0"], [1, "card-body"], [1, "border-bottom", "mb-4", "pb-4"], [1, "row"], [1, "col-md-8"], [1, "mb-3"], [1, "mb-1", "fs-18"], ["href", "javascript:void(0);", 1, "text-decoration-underline"], [1, "mb-3", "position-relative"], [1, "form-label"], [1, "text-danger"], [1, "position-relative"], [1, "pass-inputs", "form-control", 3, "type"], ["tabindex", "0", 1, "isax", "toggle-password", 3, "click", "keydown.enter", "ngClass"], ["id", "passwordInput", 1, "pass-group"], [1, "pass-group", "mb-3"], ["id", "password", 1, "pass-input", "form-control", "form-control-lg", 3, "input", "type"], ["tabindex", "0", 1, "isax", "toggle-password", "fs-14", 3, "click", "keydown.enter", "ngClass"], ["id", "passwordStrength", 1, "strength-meter", "password-strength", 3, "ngClass"], ["id", "poor", 3, "ngClass"], ["id", "weak", 3, "ngClass"], ["id", "strong", 3, "ngClass"], ["id", "heavy", 3, "ngClass"], ["id", "passwordInfo", "aria-live", "polite", 1, "mt-2"], ["class", "d-flex align-items-center text-danger fs-15 fw-semibold", 4, "ngIf"], ["class", "d-flex align-items-center text-warning fs-15 fw-semibold", 4, "ngIf"], ["class", "d-flex align-items-center text-blueL fs-15 fw-semibold", 4, "ngIf"], ["class", "d-flex align-items-center text-success fs-15 fw-semibold", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-secondary"], ["href", "javascript:void(0);", 1, "fw-semibold"], ["type", "text", 1, "form-control"], [1, "d-flex", "align-items-center", "text-danger", "fs-15", "fw-semibold"], ["src", "assets/img/icon/angry.svg", 1, "me-2"], [1, "d-flex", "align-items-center", "text-warning", "fs-15", "fw-semibold"], ["src", "assets/img/icon/anguish.svg", 1, "me-2"], [1, "d-flex", "align-items-center", "text-blueL", "fs-15", "fw-semibold"], ["src", "assets/img/icon/smile.svg", 1, "me-2"], [1, "d-flex", "align-items-center", "text-success", "fs-15", "fw-semibold"]], template: function StudentChangePasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5", 6);
      \u0275\u0275text(7, "Modifier votre mot de Passe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "Can't remember your current password?\xA0");
      \u0275\u0275elementStart(10, "a", 7);
      \u0275\u0275text(11, "Reset your password via email");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "form")(13, "div", 8)(14, "label", 9);
      \u0275\u0275text(15, "Mot de Passe Actuel ");
      \u0275\u0275elementStart(16, "span", 10);
      \u0275\u0275text(17, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 11);
      \u0275\u0275element(19, "input", 12);
      \u0275\u0275elementStart(20, "span", 13);
      \u0275\u0275listener("click", function StudentChangePasswordComponent_Template_span_click_20_listener() {
        return ctx.togglePassword(1);
      })("keydown.enter", function StudentChangePasswordComponent_Template_span_keydown_enter_20_listener() {
        return ctx.togglePassword(1);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 8)(22, "label", 9);
      \u0275\u0275text(23, "Nouveau Mot de Passe ");
      \u0275\u0275elementStart(24, "span", 10);
      \u0275\u0275text(25, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 14)(27, "div", 15)(28, "input", 16);
      \u0275\u0275listener("input", function StudentChangePasswordComponent_Template_input_input_28_listener($event) {
        return ctx.checkPasswordStrength($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 17);
      \u0275\u0275listener("click", function StudentChangePasswordComponent_Template_span_click_29_listener() {
        return ctx.togglePassword(0);
      })("keydown.enter", function StudentChangePasswordComponent_Template_span_keydown_enter_29_listener() {
        return ctx.togglePassword(0);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 18);
      \u0275\u0275element(31, "span", 19)(32, "span", 20)(33, "span", 21)(34, "span", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 23);
      \u0275\u0275template(36, StudentChangePasswordComponent_span_36_Template, 3, 0, "span", 24)(37, StudentChangePasswordComponent_span_37_Template, 3, 0, "span", 25)(38, StudentChangePasswordComponent_span_38_Template, 3, 0, "span", 26)(39, StudentChangePasswordComponent_span_39_Template, 3, 0, "span", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 8)(41, "label", 9);
      \u0275\u0275text(42, "Confirmer Votre Mot de Passe ");
      \u0275\u0275elementStart(43, "span", 10);
      \u0275\u0275text(44, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 11);
      \u0275\u0275element(46, "input", 12);
      \u0275\u0275elementStart(47, "span", 13);
      \u0275\u0275listener("click", function StudentChangePasswordComponent_Template_span_click_47_listener() {
        return ctx.togglePassword(2);
      })("keydown.enter", function StudentChangePasswordComponent_Template_span_keydown_enter_47_listener() {
        return ctx.togglePassword(2);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div")(49, "button", 28);
      \u0275\u0275text(50, "Enregistrer les Modifications");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(51, "div", 3)(52, "div", 4)(53, "div", 5)(54, "h5", 6);
      \u0275\u0275text(55, "Modifier Votre Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "p");
      \u0275\u0275text(57, "Your current email address is\xA0");
      \u0275\u0275elementStart(58, "a", 29);
      \u0275\u0275text(59, "richard@example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "form")(61, "div", 5)(62, "label", 9);
      \u0275\u0275text(63, "Nouveau Adresse Email ");
      \u0275\u0275elementStart(64, "span", 10);
      \u0275\u0275text(65, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(66, "input", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div")(68, "button", 28);
      \u0275\u0275text(69, "Enregistrer les Modifications");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275property("type", ctx.password[1] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[1] ? "isax-eye" : "isax-eye-slash");
      \u0275\u0275advance(8);
      \u0275\u0275property("type", ctx.password[0] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[0] ? "isax-eye" : "isax-eye-slash");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(15, _c0, ctx.strengthLevel === "poor", ctx.strengthLevel === "weak", ctx.strengthLevel === "strong", ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(20, _c1, ctx.strengthLevel === "poor" || ctx.strengthLevel === "weak" || ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(22, _c1, ctx.strengthLevel === "weak" || ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(24, _c1, ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(26, _c1, ctx.strengthLevel === "heavy"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.strengthLevel === "poor");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.strengthLevel === "weak");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.strengthLevel === "strong");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.strengthLevel === "heavy");
      \u0275\u0275advance(7);
      \u0275\u0275property("type", ctx.password[2] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[2] ? "isax-eye" : "isax-eye-slash");
    }
  }, dependencies: [RouterModule, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, CommonModule, NgClass, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentChangePasswordComponent, [{
    type: Component,
    args: [{ selector: "app-student-change-password", imports: [RouterModule, FormsModule, CommonModule], template: `<div class="card mb-0">\r
    <div class="card-body">\r
        <div class="border-bottom mb-4 pb-4">\r
            <div class="row">\r
                <div class="col-md-8">\r
                    <div class="mb-3">\r
                        <h5 class="mb-1 fs-18">Modifier votre mot de Passe</h5>\r
                        <p>Can't remember your current password?\xA0<a href="javascript:void(0);" class="text-decoration-underline">Reset your password via email</a></p>\r
                    </div>\r
                    <form>\r
                        <div class="mb-3 position-relative">\r
                            <label class="form-label">Mot de Passe Actuel <span class="text-danger"> *</span></label>\r
                            <div class="position-relative">\r
                                <input  [type]="password[1] ? 'text' : 'password'"\r
                                class="pass-inputs form-control">\r
                                <span\r
                                class="isax toggle-password"\r
                                [ngClass]="password[1] ? 'isax-eye' : 'isax-eye-slash'"\r
                                (click)="togglePassword(1)"\r
                                (keydown.enter)="togglePassword(1)"\r
                                tabindex="0"\r
                              ></span>\r
                            </div>\r
                        </div>\r
                        <div class="mb-3 position-relative">\r
                            <label class="form-label">Nouveau Mot de Passe <span class="text-danger"> *</span></label>\r
                            <div id="passwordInput" class="pass-group">\r
                                <div class="pass-group mb-3">\r
                                    <input\r
                                  [type]="password[0] ? 'text' : 'password'"\r
                                  id="password"\r
                                  class="pass-input form-control form-control-lg"\r
                                  (input)="checkPasswordStrength($event)"\r
                                />\r
                                <span class="isax toggle-password fs-14"\r
                                    [ngClass]="password[0] ? 'isax-eye' : 'isax-eye-slash'"\r
                                    (click)="togglePassword(0)"\r
                                    (keydown.enter)="togglePassword(0)"\r
                                    tabindex="0"\r
                                    ></span>\r
                                </div>\r
                                <div id="passwordStrength" class="strength-meter password-strength" [ngClass]="{'poor-active':strengthLevel === 'poor','avg-active':strengthLevel === 'weak','strong-active':strengthLevel === 'strong','heavy-active':strengthLevel === 'heavy'}" >\r
                                  <span id="poor" [ngClass]="{'active': strengthLevel === 'poor'||strengthLevel === 'weak'||strengthLevel === 'strong'||strengthLevel === 'heavy'}"></span>\r
                                  <span id="weak" [ngClass]="{'active': strengthLevel === 'weak'||strengthLevel === 'strong'||strengthLevel === 'heavy'}"></span>\r
                                  <span id="strong" [ngClass]="{'active': strengthLevel === 'strong'||strengthLevel === 'heavy'}"></span>\r
                                  <span id="heavy" [ngClass]="{'active': strengthLevel === 'heavy'}"></span>\r
                                </div>\r
                               \r
                              </div>\r
                              <div id="passwordInfo" class="mt-2" aria-live="polite">\r
                                <span *ngIf="strengthLevel === 'poor'" class="d-flex align-items-center text-danger fs-15 fw-semibold">\r
                                  <img src="assets/img/icon/angry.svg" class="me-2">Weak. Must contain at least 8 characters\r
                                </span>\r
                                <span *ngIf="strengthLevel === 'weak'" class="d-flex align-items-center text-warning fs-15 fw-semibold">\r
                                  <img src="assets/img/icon/anguish.svg" class="me-2">Average. Must contain at least 1 letter or number\r
                                </span>\r
                                <span *ngIf="strengthLevel === 'strong'" class="d-flex align-items-center text-blueL fs-15 fw-semibold">\r
                                  <img src="assets/img/icon/smile.svg" class="me-2">Almost. Must contain special symbol\r
                                </span>\r
                                <span *ngIf="strengthLevel === 'heavy'" class="d-flex align-items-center text-success fs-15 fw-semibold">\r
                                  <img src="assets/img/icon/smile.svg" class="me-2">Awesome! You have a secure password.\r
                                </span>\r
                              </div>\r
                          \r
                        </div>\r
                        <div class="mb-3 position-relative">\r
                            <label class="form-label">Confirmer Votre Mot de Passe <span class="text-danger"> *</span></label>\r
                            <div class="position-relative">\r
                                <input  [type]="password[2] ? 'text' : 'password'"\r
                                class="pass-inputs form-control">\r
                                <span\r
                                class="isax toggle-password"\r
                                [ngClass]="password[2] ? 'isax-eye' : 'isax-eye-slash'"\r
                                (click)="togglePassword(2)"\r
                                (keydown.enter)="togglePassword(2)"\r
                                tabindex="0"\r
                              ></span>\r
                            </div>\r
                        </div>\r
                        <div>\r
                            <button class="btn btn-secondary" type="submit">Enregistrer les Modifications</button>\r
                        </div>\r
                    </form>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="row">\r
            <div class="col-md-8">\r
                <div class="mb-3">\r
                    <h5 class="mb-1 fs-18">Modifier Votre Email</h5>\r
                    <p>Your current email address is\xA0<a href="javascript:void(0);" class="fw-semibold">richard&#64;example.com</a></p>\r
                </div>\r
                <form>\r
                    <div class="mb-3">\r
                        <label class="form-label">Nouveau Adresse Email <span class="text-danger"> *</span></label>\r
                        <input type="text" class="form-control">\r
                    </div>\r
                    <div>\r
                        <button class="btn btn-secondary" type="submit">Enregistrer les Modifications</button>\r
                    </div>\r
                </form>\r
            </div>\r
        </div>\r
    </div>\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentChangePasswordComponent, { className: "StudentChangePasswordComponent", filePath: "src/app/features/student/settings/student-change-password/student-change-password.component.ts", lineNumber: 13 });
})();
export {
  StudentChangePasswordComponent
};
//# sourceMappingURL=chunk-5VCMHXW6.js.map
