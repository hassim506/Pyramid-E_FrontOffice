import {
  AuthService
} from "./chunk-SNOA42FF.js";
import "./chunk-FKX6UC3I.js";
import {
  DataService
} from "./chunk-WI4QPEBR.js";
import {
  SlickCarouselComponent,
  SlickCarouselModule,
  SlickItemDirective
} from "./chunk-BLAN2R2X.js";
import {
  routes
} from "./chunk-TYVQP4CB.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-45DOGZAU.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
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
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction4,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/auth/set-password/set-password.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "poor-active": a0, "avg-active": a1, "strong-active": a2, "heavy-active": a3 });
var _c1 = () => ["poor", "weak", "strong", "heavy"];
var _c2 = () => ["weak", "strong", "heavy"];
var _c3 = () => ["strong", "heavy"];
function SetPasswordComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 18)(2, "div", 19);
    \u0275\u0275element(3, "img", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21)(5, "h3", 22);
    \u0275\u0275text(6);
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "span", 23);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", slide_r1.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", slide_r1.content1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r1.content2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r1.content3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", slide_r1.content4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r1.paragraph);
  }
}
function SetPasswordComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 24)(2, "div", 25);
    \u0275\u0275element(3, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h5", 27);
    \u0275\u0275text(5, "Lien invalide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 28);
    \u0275\u0275text(7, "Ce lien de r\xE9initialisation est invalide ou incomplet. Veuillez en demander un nouveau.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 29)(9, "a", 30);
    \u0275\u0275element(10, "i", 31);
    \u0275\u0275text(11, "Demander un nouveau lien ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("routerLink", ctx_r1.routes.forgot_password);
  }
}
function SetPasswordComponent_ng_container_17_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.errorMsg, " ");
  }
}
function SetPasswordComponent_ng_container_17_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "span")(2, "span")(3, "span")(4, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(9, _c0, ctx_r1.strengthLevel === "poor", ctx_r1.strengthLevel === "weak", ctx_r1.strengthLevel === "strong", ctx_r1.strengthLevel === "heavy"));
    \u0275\u0275advance();
    \u0275\u0275classProp("active", \u0275\u0275pureFunction0(14, _c1).includes(ctx_r1.strengthLevel));
    \u0275\u0275advance();
    \u0275\u0275classProp("active", \u0275\u0275pureFunction0(15, _c2).includes(ctx_r1.strengthLevel));
    \u0275\u0275advance();
    \u0275\u0275classProp("active", \u0275\u0275pureFunction0(16, _c3).includes(ctx_r1.strengthLevel));
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.strengthLevel === "heavy");
  }
}
function SetPasswordComponent_ng_container_17_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("color", ctx_r1.strengthColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.strengthMsg, " ");
  }
}
function SetPasswordComponent_ng_container_17_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 55);
  }
}
function SetPasswordComponent_ng_container_17_i_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 56);
  }
}
function SetPasswordComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h1", 32);
    \u0275\u0275text(2, "Nouveau mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 33);
    \u0275\u0275text(4, "Votre nouveau mot de passe doit \xEAtre diff\xE9rent de l'ancien.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SetPasswordComponent_ng_container_17_div_5_Template, 3, 1, "div", 34);
    \u0275\u0275elementStart(6, "form", 35);
    \u0275\u0275listener("ngSubmit", function SetPasswordComponent_ng_container_17_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(7, "div", 36)(8, "label", 37);
    \u0275\u0275text(9, "Nouveau mot de passe");
    \u0275\u0275elementStart(10, "span", 38);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 39)(13, "input", 40);
    \u0275\u0275listener("ngModelChange", function SetPasswordComponent_ng_container_17_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkStrength($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 41);
    \u0275\u0275listener("click", function SetPasswordComponent_ng_container_17_Template_span_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPass = !ctx_r1.showPass);
    })("keydown.enter", function SetPasswordComponent_ng_container_17_Template_span_keydown_enter_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPass = !ctx_r1.showPass);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, SetPasswordComponent_ng_container_17_div_15_Template, 5, 17, "div", 42)(16, SetPasswordComponent_ng_container_17_div_16_Template, 2, 3, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 44)(18, "label", 37);
    \u0275\u0275text(19, "Confirmer le mot de passe");
    \u0275\u0275elementStart(20, "span", 38);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 45)(23, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function SetPasswordComponent_ng_container_17_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.passwordConfirm, $event) || (ctx_r1.passwordConfirm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 47);
    \u0275\u0275listener("click", function SetPasswordComponent_ng_container_17_Template_span_click_24_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showConfirm = !ctx_r1.showConfirm);
    })("keydown.enter", function SetPasswordComponent_ng_container_17_Template_span_keydown_enter_24_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showConfirm = !ctx_r1.showConfirm);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 29)(26, "button", 48);
    \u0275\u0275template(27, SetPasswordComponent_ng_container_17_span_27_Template, 1, 0, "span", 49)(28, SetPasswordComponent_ng_container_17_i_28_Template, 1, 0, "i", 50);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.errorMsg);
    \u0275\u0275advance(8);
    \u0275\u0275property("type", ctx_r1.showPass ? "text" : "password")("ngModel", ctx_r1.password);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.showPass ? "isax-eye" : "isax-eye-slash");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.strengthLevel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.strengthMsg);
    \u0275\u0275advance(7);
    \u0275\u0275property("type", ctx_r1.showConfirm ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.passwordConfirm);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.showConfirm ? "isax-eye" : "isax-eye-slash");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isLoading ? "Enregistrement\u2026" : "R\xE9initialiser le mot de passe", " ");
  }
}
function SetPasswordComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 57)(2, "div", 25);
    \u0275\u0275element(3, "i", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h5", 27);
    \u0275\u0275text(5, "Mot de passe mis \xE0 jour !");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 28);
    \u0275\u0275text(7, "Votre mot de passe a \xE9t\xE9 r\xE9initialis\xE9 avec succ\xE8s. Vous pouvez maintenant vous connecter.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 29)(9, "a", 30);
    \u0275\u0275element(10, "i", 59);
    \u0275\u0275text(11, "Se connecter ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("routerLink", ctx_r1.routes.login);
  }
}
var SetPasswordComponent = class _SetPasswordComponent {
  dataService;
  authService;
  route;
  router;
  routes = routes;
  welcomeLogin = [];
  token = "";
  email = "";
  password = "";
  passwordConfirm = "";
  showPass = false;
  showConfirm = false;
  isLoading = false;
  success = false;
  errorMsg = "";
  strengthLevel = "";
  strengthMsg = "";
  strengthColor = "";
  authSlider = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1300, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };
  constructor(dataService, authService, route, router) {
    this.dataService = dataService;
    this.authService = authService;
    this.route = route;
    this.router = router;
    this.welcomeLogin = this.dataService.welcomeLogin;
  }
  ngOnInit() {
    this.token = this.route.snapshot.queryParamMap.get("token") ?? "";
    this.email = this.route.snapshot.queryParamMap.get("email") ?? "";
    if (!this.token || !this.email) {
      this.errorMsg = "Lien de r\xE9initialisation invalide ou incomplet.";
    }
  }
  checkStrength(value) {
    this.password = value;
    if (!value) {
      this.strengthLevel = "";
      this.strengthMsg = "";
      return;
    }
    const len = value.length;
    const hasLow = /[a-z]/.test(value);
    const hasNum = /[0-9]/.test(value);
    const hasSym = /[#?!@$%^&*\-]/.test(value);
    if (len < 8) {
      this.strengthLevel = "poor";
      this.strengthMsg = "Trop court (min. 8 caract\xE8res)";
      this.strengthColor = "#dc2626";
    } else if (hasLow && !hasNum && !hasSym) {
      this.strengthLevel = "weak";
      this.strengthMsg = "Moyen \u2014 ajoutez des chiffres";
      this.strengthColor = "#f59e0b";
    } else if (hasLow && hasNum && !hasSym) {
      this.strengthLevel = "strong";
      this.strengthMsg = "Bien \u2014 ajoutez un symbole sp\xE9cial";
      this.strengthColor = "#3b82f6";
    } else if (hasLow && hasNum && hasSym) {
      this.strengthLevel = "heavy";
      this.strengthMsg = "Excellent mot de passe !";
      this.strengthColor = "#059669";
    }
  }
  submit() {
    this.errorMsg = "";
    if (!this.token || !this.email) {
      this.errorMsg = "Lien invalide.";
      return;
    }
    if (!this.password) {
      this.errorMsg = "Veuillez saisir un mot de passe.";
      return;
    }
    if (this.password.length < 8) {
      this.errorMsg = "Le mot de passe doit contenir au moins 8 caract\xE8res.";
      return;
    }
    if (this.password !== this.passwordConfirm) {
      this.errorMsg = "Les mots de passe ne correspondent pas.";
      return;
    }
    this.isLoading = true;
    this.authService.resetPassword(this.token, this.email, this.password, this.passwordConfirm).subscribe({
      next: () => {
        this.isLoading = false;
        this.success = true;
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMsg = err?.message || "Une erreur est survenue.";
      }
    });
  }
  static \u0275fac = function SetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SetPasswordComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetPasswordComponent, selectors: [["app-set-password"]], decls: 23, vars: 6, consts: [[1, "main-wrapper"], [1, "login-content"], [1, "row"], [1, "col-md-6", "login-bg", "d-none", "d-lg-flex"], [1, "login-carousel"], [3, "config"], ["ngxSlickItem", ""], [1, "col-md-6", "login-wrap-bg"], [1, "login-wrapper"], [1, "loginbox"], [1, "w-100"], [1, "d-flex", "align-items-center", "justify-content-between", "login-header"], ["src", "assets/img/logo.png", "alt", "Logo Pyramide", 1, "img-fluid", "sp-logo"], [1, "link-1", 3, "routerLink"], [4, "ngIf"], [1, "fs-14", "fw-normal", "d-flex", "align-items-center", "justify-content-center", "mt-3"], [1, "link-2", 3, "routerLink"], [1, "isax", "isax-arrow-left-2", "me-1"], [1, "login-carousel-section", "mb-3"], [1, "login-banner"], ["alt", "Logo", 1, "img-fluid", 3, "src"], [1, "mentor-course", "text-center"], [1, "mb-2"], [1, "text-secondary"], [1, "sp-result-box", "sp-result-box--error", "mb-4"], [1, "sp-result-icon"], [1, "isax", "isax-close-circle"], [1, "sp-result-title"], [1, "sp-result-sub"], [1, "d-grid"], [1, "btn", "btn-secondary", "btn-lg", 3, "routerLink"], [1, "isax", "isax-send-2", "me-2"], [1, "fs-32", "fw-bold", "topic"], [1, "text-muted", "mb-4"], ["class", "alert alert-danger mb-3", 4, "ngIf"], [1, "mb-3", "pb-3", 3, "ngSubmit"], [1, "mb-3", "position-relative"], [1, "form-label"], [1, "text-danger", "ms-1"], [1, "pass-group", "mb-2"], ["name", "password", "placeholder", "Min. 8 caract\xE8res", 1, "pass-input", "form-control", "form-control-lg", 3, "ngModelChange", "type", "ngModel"], ["tabindex", "0", 1, "isax", "toggle-password", "fs-14", 3, "click", "keydown.enter", "ngClass"], ["class", "strength-meter password-strength mb-1", 3, "ngClass", 4, "ngIf"], ["class", "sp-strength-msg", 3, "color", 4, "ngIf"], [1, "mb-4", "position-relative"], [1, "position-relative"], ["name", "passwordConfirm", "placeholder", "R\xE9p\xE9tez le mot de passe", 1, "pass-inputs", "form-control", "form-control-lg", 3, "ngModelChange", "type", "ngModel"], ["tabindex", "0", 1, "isax", "toggle-passwords", "fs-14", 3, "click", "keydown.enter", "ngClass"], ["type", "submit", 1, "btn", "btn-secondary", "btn-lg", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "isax isax-tick-circle me-2", 4, "ngIf"], [1, "alert", "alert-danger", "mb-3"], [1, "isax", "isax-close-circle", "me-2"], [1, "strength-meter", "password-strength", "mb-1", 3, "ngClass"], [1, "sp-strength-msg"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "isax", "isax-tick-circle", "me-2"], [1, "sp-result-box", "sp-result-box--success", "mb-4"], [1, "isax", "isax-tick-circle"], [1, "isax", "isax-arrow-right-3", "me-2"]], template: function SetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ngx-slick-carousel", 5);
      \u0275\u0275repeaterCreate(6, SetPasswordComponent_For_7_Template, 14, 6, "div", 6, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11);
      \u0275\u0275element(13, "img", 12);
      \u0275\u0275elementStart(14, "a", 13);
      \u0275\u0275text(15, "Retour \xE0 l'accueil");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, SetPasswordComponent_ng_container_16_Template, 12, 1, "ng-container", 14)(17, SetPasswordComponent_ng_container_17_Template, 30, 13, "ng-container", 14)(18, SetPasswordComponent_ng_container_18_Template, 12, 1, "ng-container", 14);
      \u0275\u0275elementStart(19, "p", 15)(20, "a", 16);
      \u0275\u0275element(21, "i", 17);
      \u0275\u0275text(22, "Retour \xE0 la connexion ");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("config", ctx.authSlider);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.welcomeLogin);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.token || !ctx.email);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.token && ctx.email && !ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.login);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], styles: ["\n\n.sp-logo[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 75px;\n}\n.sp-strength-msg[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  margin-top: 4px;\n}\n.sp-result-box[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 20px;\n  border-radius: 12px;\n  border: 1px solid;\n}\n.sp-result-box--success[_ngcontent-%COMP%] {\n  background: #f0fdf9;\n  border-color: #b2e8e3;\n}\n.sp-result-box--success[_ngcontent-%COMP%]   .sp-result-icon[_ngcontent-%COMP%] {\n  background: #069b8f;\n  color: #fff;\n}\n.sp-result-box--success[_ngcontent-%COMP%]   .sp-result-title[_ngcontent-%COMP%] {\n  color: #047a6f;\n}\n.sp-result-box--error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-color: #fca5a5;\n}\n.sp-result-box--error[_ngcontent-%COMP%]   .sp-result-icon[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n}\n.sp-result-box--error[_ngcontent-%COMP%]   .sp-result-title[_ngcontent-%COMP%] {\n  color: #991b1b;\n}\n.sp-result-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  margin-bottom: 16px;\n}\n.sp-result-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n.sp-result-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #374151;\n  line-height: 1.6;\n  margin: 0;\n}\n/*# sourceMappingURL=set-password.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetPasswordComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-set-password", imports: [CommonModule, FormsModule, RouterLink, SlickCarouselModule], template: `<div class="main-wrapper">
  <div class="login-content">
    <div class="row">

      <!-- Banni\xE8re -->
      <div class="col-md-6 login-bg d-none d-lg-flex">
        <div class="login-carousel">
          <ngx-slick-carousel [config]="authSlider">
            @for (slide of welcomeLogin; track slide) {
              <div ngxSlickItem>
                <div class="login-carousel-section mb-3">
                  <div class="login-banner">
                    <img [src]="slide.img" class="img-fluid" alt="Logo">
                  </div>
                  <div class="mentor-course text-center">
                    <h3 class="mb-2">{{slide.content1}} <br>{{slide.content2}}<span class="text-secondary">{{slide.content3}}</span> {{slide.content4}}</h3>
                    <p>{{slide.paragraph}}</p>
                  </div>
                </div>
              </div>
            }
          </ngx-slick-carousel>
        </div>
      </div>

      <div class="col-md-6 login-wrap-bg">
        <div class="login-wrapper">
          <div class="loginbox">
            <div class="w-100">

              <div class="d-flex align-items-center justify-content-between login-header">
                <img src="assets/img/logo.png" class="img-fluid sp-logo" alt="Logo Pyramide">
                <a [routerLink]="routes.home" class="link-1">Retour \xE0 l'accueil</a>
              </div>

              <!-- \u2500\u2500 Lien invalide \u2500\u2500 -->
              <ng-container *ngIf="!token || !email">
                <div class="sp-result-box sp-result-box--error mb-4">
                  <div class="sp-result-icon"><i class="isax isax-close-circle"></i></div>
                  <h5 class="sp-result-title">Lien invalide</h5>
                  <p class="sp-result-sub">Ce lien de r\xE9initialisation est invalide ou incomplet. Veuillez en demander un nouveau.</p>
                </div>
                <div class="d-grid">
                  <a [routerLink]="routes.forgot_password" class="btn btn-secondary btn-lg">
                    <i class="isax isax-send-2 me-2"></i>Demander un nouveau lien
                  </a>
                </div>
              </ng-container>

              <!-- \u2500\u2500 Formulaire \u2500\u2500 -->
              <ng-container *ngIf="token && email && !success">

                <h1 class="fs-32 fw-bold topic">Nouveau mot de passe</h1>
                <p class="text-muted mb-4">Votre nouveau mot de passe doit \xEAtre diff\xE9rent de l'ancien.</p>

                <div *ngIf="errorMsg" class="alert alert-danger mb-3">
                  <i class="isax isax-close-circle me-2"></i>{{ errorMsg }}
                </div>

                <form (ngSubmit)="submit()" class="mb-3 pb-3">

                  <!-- Nouveau mot de passe -->
                  <div class="mb-3 position-relative">
                    <label class="form-label">Nouveau mot de passe<span class="text-danger ms-1">*</span></label>
                    <div class="pass-group mb-2">
                      <input
                        [type]="showPass ? 'text' : 'password'"
                        class="pass-input form-control form-control-lg"
                        [ngModel]="password"
                        (ngModelChange)="checkStrength($event)"
                        name="password"
                        placeholder="Min. 8 caract\xE8res">
                      <span
                        class="isax toggle-password fs-14"
                        [ngClass]="showPass ? 'isax-eye' : 'isax-eye-slash'"
                        (click)="showPass = !showPass"
                        tabindex="0"
                        (keydown.enter)="showPass = !showPass">
                      </span>
                    </div>

                    <!-- Barre de force -->
                    <div *ngIf="strengthLevel" class="strength-meter password-strength mb-1"
                         [ngClass]="{
                           'poor-active':   strengthLevel === 'poor',
                           'avg-active':    strengthLevel === 'weak',
                           'strong-active': strengthLevel === 'strong',
                           'heavy-active':  strengthLevel === 'heavy'
                         }">
                      <span [class.active]="['poor','weak','strong','heavy'].includes(strengthLevel)"></span>
                      <span [class.active]="['weak','strong','heavy'].includes(strengthLevel)"></span>
                      <span [class.active]="['strong','heavy'].includes(strengthLevel)"></span>
                      <span [class.active]="strengthLevel === 'heavy'"></span>
                    </div>
                    <div *ngIf="strengthMsg" class="sp-strength-msg" [style.color]="strengthColor">
                      {{ strengthMsg }}
                    </div>
                  </div>

                  <!-- Confirmation -->
                  <div class="mb-4 position-relative">
                    <label class="form-label">Confirmer le mot de passe<span class="text-danger ms-1">*</span></label>
                    <div class="position-relative">
                      <input
                        [type]="showConfirm ? 'text' : 'password'"
                        class="pass-inputs form-control form-control-lg"
                        [(ngModel)]="passwordConfirm"
                        name="passwordConfirm"
                        placeholder="R\xE9p\xE9tez le mot de passe">
                      <span
                        class="isax toggle-passwords fs-14"
                        [ngClass]="showConfirm ? 'isax-eye' : 'isax-eye-slash'"
                        (click)="showConfirm = !showConfirm"
                        tabindex="0"
                        (keydown.enter)="showConfirm = !showConfirm">
                      </span>
                    </div>
                  </div>

                  <div class="d-grid">
                    <button class="btn btn-secondary btn-lg" type="submit" [disabled]="isLoading">
                      <span *ngIf="isLoading" class="spinner-border spinner-border-sm me-2"></span>
                      <i *ngIf="!isLoading" class="isax isax-tick-circle me-2"></i>
                      {{ isLoading ? 'Enregistrement\u2026' : 'R\xE9initialiser le mot de passe' }}
                    </button>
                  </div>
                </form>

              </ng-container>

              <!-- \u2500\u2500 Succ\xE8s \u2500\u2500 -->
              <ng-container *ngIf="success">
                <div class="sp-result-box sp-result-box--success mb-4">
                  <div class="sp-result-icon"><i class="isax isax-tick-circle"></i></div>
                  <h5 class="sp-result-title">Mot de passe mis \xE0 jour !</h5>
                  <p class="sp-result-sub">Votre mot de passe a \xE9t\xE9 r\xE9initialis\xE9 avec succ\xE8s. Vous pouvez maintenant vous connecter.</p>
                </div>
                <div class="d-grid">
                  <a [routerLink]="routes.login" class="btn btn-secondary btn-lg">
                    <i class="isax isax-arrow-right-3 me-2"></i>Se connecter
                  </a>
                </div>
              </ng-container>

              <p class="fs-14 fw-normal d-flex align-items-center justify-content-center mt-3">
                <a [routerLink]="routes.login" class="link-2">
                  <i class="isax isax-arrow-left-2 me-1"></i>Retour \xE0 la connexion
                </a>
              </p>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
`, styles: ["/* src/app/auth/set-password/set-password.component.scss */\n.sp-logo {\n  width: 250px;\n  height: 75px;\n}\n.sp-strength-msg {\n  font-size: 12px;\n  font-weight: 500;\n  margin-top: 4px;\n}\n.sp-result-box {\n  text-align: center;\n  padding: 32px 20px;\n  border-radius: 12px;\n  border: 1px solid;\n}\n.sp-result-box--success {\n  background: #f0fdf9;\n  border-color: #b2e8e3;\n}\n.sp-result-box--success .sp-result-icon {\n  background: #069b8f;\n  color: #fff;\n}\n.sp-result-box--success .sp-result-title {\n  color: #047a6f;\n}\n.sp-result-box--error {\n  background: #fef2f2;\n  border-color: #fca5a5;\n}\n.sp-result-box--error .sp-result-icon {\n  background: #dc2626;\n  color: #fff;\n}\n.sp-result-box--error .sp-result-title {\n  color: #991b1b;\n}\n.sp-result-icon {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  margin-bottom: 16px;\n}\n.sp-result-title {\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n.sp-result-sub {\n  font-size: 13px;\n  color: #374151;\n  line-height: 1.6;\n  margin: 0;\n}\n/*# sourceMappingURL=set-password.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: AuthService }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetPasswordComponent, { className: "SetPasswordComponent", filePath: "src/app/auth/set-password/set-password.component.ts", lineNumber: 18 });
})();
export {
  SetPasswordComponent
};
//# sourceMappingURL=chunk-TAQXKQ7H.js.map
