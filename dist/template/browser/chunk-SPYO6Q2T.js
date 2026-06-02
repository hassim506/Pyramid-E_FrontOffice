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
  CommonModule,
  NgClass
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
  ɵɵtext
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/superadmin/settings/superadmin-change-password/superadmin-change-password.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "poor-active": a0, "avg-active": a1, "strong-active": a2, "heavy-active": a3 });
var _c1 = (a0) => ({ "active": a0 });
var SuperadminChangePasswordComponent = class _SuperadminChangePasswordComponent {
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
  static \u0275fac = function SuperadminChangePasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminChangePasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminChangePasswordComponent, selectors: [["app-superadmin-change-password"]], decls: 65, vars: 24, consts: [[1, "card", "mb-0"], [1, "card-body"], [1, "border-bottom", "mb-4", "pb-4"], [1, "row"], [1, "col-md-8"], [1, "mb-3"], [1, "mb-1", "fs-18"], ["href", "javascript:void(0);", 1, "text-decoration-underline"], [1, "mb-3", "position-relative"], [1, "form-label"], [1, "text-danger"], [1, "position-relative"], [1, "pass-inputs", "form-control", 3, "type"], ["tabindex", "0", 1, "isax", "toggle-password", 3, "click", "keydown.enter", "ngClass"], ["id", "passwordInput", 1, "pass-group"], [1, "pass-group", "mb-3"], ["id", "password", 1, "pass-input", "form-control", "form-control-lg", 3, "input", "type"], ["tabindex", "0", 1, "isax", "toggle-password", "fs-14", 3, "click", "keydown.enter", "ngClass"], ["id", "passwordStrength", 1, "strength-meter", "password-strength", 3, "ngClass"], ["id", "poor", 3, "ngClass"], ["id", "weak", 3, "ngClass"], ["id", "strong", 3, "ngClass"], ["id", "heavy", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-secondary"], ["href", "javascript:void(0);", 1, "fw-semibold"], ["type", "text", 1, "form-control"]], template: function SuperadminChangePasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5", 6);
      \u0275\u0275text(7, "Change Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "Can't remember your current password?\xA0");
      \u0275\u0275elementStart(10, "a", 7);
      \u0275\u0275text(11, "Reset your password via email");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "form")(13, "div", 8)(14, "label", 9);
      \u0275\u0275text(15, "Current Password ");
      \u0275\u0275elementStart(16, "span", 10);
      \u0275\u0275text(17, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 11);
      \u0275\u0275element(19, "input", 12);
      \u0275\u0275elementStart(20, "span", 13);
      \u0275\u0275listener("click", function SuperadminChangePasswordComponent_Template_span_click_20_listener() {
        return ctx.togglePassword(1);
      })("keydown.enter", function SuperadminChangePasswordComponent_Template_span_keydown_enter_20_listener() {
        return ctx.togglePassword(1);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 8)(22, "label", 9);
      \u0275\u0275text(23, "New Password ");
      \u0275\u0275elementStart(24, "span", 10);
      \u0275\u0275text(25, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 14)(27, "div", 15)(28, "input", 16);
      \u0275\u0275listener("input", function SuperadminChangePasswordComponent_Template_input_input_28_listener($event) {
        return ctx.checkPasswordStrength($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 17);
      \u0275\u0275listener("click", function SuperadminChangePasswordComponent_Template_span_click_29_listener() {
        return ctx.togglePassword(0);
      })("keydown.enter", function SuperadminChangePasswordComponent_Template_span_keydown_enter_29_listener() {
        return ctx.togglePassword(0);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 18);
      \u0275\u0275element(31, "span", 19)(32, "span", 20)(33, "span", 21)(34, "span", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 8)(36, "label", 9);
      \u0275\u0275text(37, "Confirm Password ");
      \u0275\u0275elementStart(38, "span", 10);
      \u0275\u0275text(39, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 11);
      \u0275\u0275element(41, "input", 12);
      \u0275\u0275elementStart(42, "span", 13);
      \u0275\u0275listener("click", function SuperadminChangePasswordComponent_Template_span_click_42_listener() {
        return ctx.togglePassword(2);
      })("keydown.enter", function SuperadminChangePasswordComponent_Template_span_keydown_enter_42_listener() {
        return ctx.togglePassword(2);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div")(44, "button", 23);
      \u0275\u0275text(45, "Change Password");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(46, "div", 3)(47, "div", 4)(48, "div", 5)(49, "h5", 6);
      \u0275\u0275text(50, "Change Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p");
      \u0275\u0275text(52, "Your current email address is\xA0");
      \u0275\u0275elementStart(53, "a", 24);
      \u0275\u0275text(54, "richard@example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "form")(56, "div", 5)(57, "label", 9);
      \u0275\u0275text(58, "New Email Address ");
      \u0275\u0275elementStart(59, "span", 10);
      \u0275\u0275text(60, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(61, "input", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div")(63, "button", 23);
      \u0275\u0275text(64, "Save Changes");
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
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(11, _c0, ctx.strengthLevel === "poor", ctx.strengthLevel === "weak", ctx.strengthLevel === "strong", ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c1, ctx.strengthLevel === "poor" || ctx.strengthLevel === "weak" || ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(18, _c1, ctx.strengthLevel === "weak" || ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(20, _c1, ctx.strengthLevel === "strong" || ctx.strengthLevel === "heavy"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(22, _c1, ctx.strengthLevel === "heavy"));
      \u0275\u0275advance(7);
      \u0275\u0275property("type", ctx.password[2] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[2] ? "isax-eye" : "isax-eye-slash");
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminChangePasswordComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-change-password", imports: [CommonModule, FormsModule], template: `<div class="card mb-0">
    <div class="card-body">
        <div class="border-bottom mb-4 pb-4">
            <div class="row">
                <div class="col-md-8">
                    <div class="mb-3">
                        <h5 class="mb-1 fs-18">Change Password</h5>
                        <p>Can't remember your current password?\xA0<a href="javascript:void(0);" class="text-decoration-underline">Reset your password via email</a></p>
                    </div>
                    <form>
                        <div class="mb-3 position-relative">
                            <label class="form-label">Current Password <span class="text-danger"> *</span></label>
                            <div class="position-relative">
                                <input  [type]="password[1] ? 'text' : 'password'"
                                class="pass-inputs form-control">
                                <span
                                class="isax toggle-password"
                                [ngClass]="password[1] ? 'isax-eye' : 'isax-eye-slash'"
                                (click)="togglePassword(1)"
                                (keydown.enter)="togglePassword(1)"
                                tabindex="0"
                              ></span>
                            </div>
                        </div>
                        <div class="mb-3 position-relative">
                            <label class="form-label">New Password <span class="text-danger"> *</span></label>
                            <div id="passwordInput" class="pass-group">
                                <div class="pass-group mb-3">
                                    <input
                                  [type]="password[0] ? 'text' : 'password'"
                                  id="password"
                                  class="pass-input form-control form-control-lg"
                                  (input)="checkPasswordStrength($event)"
                                />
                                <span class="isax toggle-password fs-14"
                                    [ngClass]="password[0] ? 'isax-eye' : 'isax-eye-slash'"
                                    (click)="togglePassword(0)"
                                    (keydown.enter)="togglePassword(0)"
                                    tabindex="0"
                                    ></span>
                                </div>
                                <div id="passwordStrength" class="strength-meter password-strength" [ngClass]="{'poor-active':strengthLevel === 'poor','avg-active':strengthLevel === 'weak','strong-active':strengthLevel === 'strong','heavy-active':strengthLevel === 'heavy'}" >
                                  <span id="poor" [ngClass]="{'active': strengthLevel === 'poor'||strengthLevel === 'weak'||strengthLevel === 'strong'||strengthLevel === 'heavy'}"></span>
                                  <span id="weak" [ngClass]="{'active': strengthLevel === 'weak'||strengthLevel === 'strong'||strengthLevel === 'heavy'}"></span>
                                  <span id="strong" [ngClass]="{'active': strengthLevel === 'strong'||strengthLevel === 'heavy'}"></span>
                                  <span id="heavy" [ngClass]="{'active': strengthLevel === 'heavy'}"></span>
                                </div>
                               
                              </div>
                        </div>
                        <div class="mb-3 position-relative">
                            <label class="form-label">Confirm Password <span class="text-danger"> *</span></label>
                            <div class="position-relative">
                                <input  [type]="password[2] ? 'text' : 'password'"
                                class="pass-inputs form-control">
                                <span
                                class="isax toggle-password"
                                [ngClass]="password[2] ? 'isax-eye' : 'isax-eye-slash'"
                                (click)="togglePassword(2)"
                                (keydown.enter)="togglePassword(2)"
                                tabindex="0"
                              ></span>
                            </div>
                        </div>
                        <div>
                            <button class="btn btn-secondary" type="submit">Change Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="mb-3">
                    <h5 class="mb-1 fs-18">Change Email</h5>
                    <p>Your current email address is\xA0<a href="javascript:void(0);" class="fw-semibold">richard&#64;example.com</a></p>
                </div>
                <form>
                    <div class="mb-3">
                        <label class="form-label">New Email Address <span class="text-danger"> *</span></label>
                        <input type="text" class="form-control">
                    </div>
                    <div>
                        <button class="btn btn-secondary" type="submit">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminChangePasswordComponent, { className: "SuperadminChangePasswordComponent", filePath: "src/app/features/superadmin/settings/superadmin-change-password/superadmin-change-password.component.ts", lineNumber: 12 });
})();
export {
  SuperadminChangePasswordComponent
};
//# sourceMappingURL=chunk-SPYO6Q2T.js.map
