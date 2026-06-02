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
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-45DOGZAU.js";
import {
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/auth/login/login.component.ts
function LoginComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 34)(2, "div", 35);
    \u0275\u0275element(3, "img", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 37)(5, "h3", 38);
    \u0275\u0275text(6);
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "span", 39);
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
function LoginComponent_ng_container_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 63);
    \u0275\u0275listener("click", function LoginComponent_ng_container_27_div_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.errorMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.errorMessage, " ");
  }
}
function LoginComponent_ng_container_27_div_12_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "L'email est requis");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_27_div_12_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Veuillez entrer un email valide");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_27_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275template(1, LoginComponent_ng_container_27_div_12_small_1_Template, 2, 0, "small", 20)(2, LoginComponent_ng_container_27_div_12_small_2_Template, 2, 0, "small", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.f["email"].hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.f["email"].hasError("email"));
  }
}
function LoginComponent_ng_container_27_div_21_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Le mot de passe est requis");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_27_div_21_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Le mot de passe doit contenir au moins 6 caract\xE8res");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_27_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275template(1, LoginComponent_ng_container_27_div_21_small_1_Template, 2, 0, "small", 20)(2, LoginComponent_ng_container_27_div_21_small_2_Template, 2, 0, "small", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.f["password"].hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.f["password"].hasError("minlength"));
  }
}
function LoginComponent_ng_container_27_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 65);
  }
}
function LoginComponent_ng_container_27_i_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 66);
  }
}
function LoginComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LoginComponent_ng_container_27_div_1_Template, 4, 1, "div", 40);
    \u0275\u0275elementStart(2, "form", 41);
    \u0275\u0275listener("ngSubmit", function LoginComponent_ng_container_27_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSubmit());
    });
    \u0275\u0275elementStart(3, "div", 42)(4, "label", 43);
    \u0275\u0275text(5, "Adresse Email");
    \u0275\u0275elementStart(6, "span", 44);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 45);
    \u0275\u0275element(9, "input", 46);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275element(11, "i", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, LoginComponent_ng_container_27_div_12_Template, 3, 2, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 42)(14, "label", 43);
    \u0275\u0275text(15, "Mot de Passe ");
    \u0275\u0275elementStart(16, "span", 44);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 49);
    \u0275\u0275element(19, "input", 50);
    \u0275\u0275elementStart(20, "span", 51);
    \u0275\u0275listener("click", function LoginComponent_ng_container_27_Template_span_click_20_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.togglePassword());
    })("keydown.enter", function LoginComponent_ng_container_27_Template_span_keydown_enter_20_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.togglePassword());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, LoginComponent_ng_container_27_div_21_Template, 3, 2, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 52)(23, "div", 53);
    \u0275\u0275element(24, "input", 54);
    \u0275\u0275elementStart(25, "label", 55);
    \u0275\u0275text(26, " Se souvenir de moi ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div")(28, "a", 56);
    \u0275\u0275text(29, " Mot de passe oubli\xE9 ? ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 57)(31, "button", 58);
    \u0275\u0275template(32, LoginComponent_ng_container_27_span_32_Template, 1, 0, "span", 59);
    \u0275\u0275text(33);
    \u0275\u0275template(34, LoginComponent_ng_container_27_i_34_Template, 1, 0, "i", 60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.loginForm);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r3.f["email"].invalid && ctx_r3.f["email"].touched);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.f["email"].invalid && ctx_r3.f["email"].touched);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r3.f["password"].invalid && ctx_r3.f["password"].touched);
    \u0275\u0275property("type", ctx_r3.password ? "text" : "password");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.password ? "isax-eye" : "isax-eye-slash");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.f["password"].invalid && ctx_r3.f["password"].touched);
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", ctx_r3.routes.forgot_password);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.isLoading || ctx_r3.loginForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.isLoading ? "Connexion en cours..." : "Se Connecter", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isLoading);
  }
}
function LoginComponent_ng_container_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69);
    \u0275\u0275element(2, "i", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 71)(4, "div", 72);
    \u0275\u0275text(5, "E-mail envoy\xE9 !");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 73);
    \u0275\u0275text(7, " V\xE9rifiez votre bo\xEEte de r\xE9ception \xE0 ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, ".");
    \u0275\u0275element(11, "br");
    \u0275\u0275text(12, " Le lien est valable ");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14, "15 minutes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, ". ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 74);
    \u0275\u0275listener("click", function LoginComponent_ng_container_28_div_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.magicSent = false);
    });
    \u0275\u0275text(17, " Renvoyer ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r3.magicEmail);
  }
}
function LoginComponent_ng_container_28_ng_container_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.magicError, " ");
  }
}
function LoginComponent_ng_container_28_ng_container_2_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 65);
  }
}
function LoginComponent_ng_container_28_ng_container_2_i_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 83);
  }
}
function LoginComponent_ng_container_28_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 75);
    \u0275\u0275element(2, "i", 76);
    \u0275\u0275text(3, " Entrez votre e-mail. Nous vous enverrons un lien de connexion instantan\xE9, sans mot de passe. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, LoginComponent_ng_container_28_ng_container_2_div_4_Template, 3, 1, "div", 77);
    \u0275\u0275elementStart(5, "div", 42)(6, "label", 43);
    \u0275\u0275text(7, "Adresse Email");
    \u0275\u0275elementStart(8, "span", 44);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 45)(11, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_ng_container_28_ng_container_2_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.magicEmail, $event) || (ctx_r3.magicEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function LoginComponent_ng_container_28_ng_container_2_Template_input_keydown_enter_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.sendMagicLink());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275element(13, "i", 47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 79)(15, "button", 80);
    \u0275\u0275listener("click", function LoginComponent_ng_container_28_ng_container_2_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.sendMagicLink());
    });
    \u0275\u0275template(16, LoginComponent_ng_container_28_ng_container_2_span_16_Template, 1, 0, "span", 59)(17, LoginComponent_ng_container_28_ng_container_2_i_17_Template, 1, 0, "i", 81);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.magicError);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.magicEmail);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.magicLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.magicLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.magicLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.magicLoading ? "Envoi en cours\u2026" : "Envoyer le lien de connexion", " ");
  }
}
function LoginComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LoginComponent_ng_container_28_div_1_Template, 18, 1, "div", 67)(2, LoginComponent_ng_container_28_ng_container_2_Template, 19, 6, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.magicSent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.magicSent);
  }
}
var LoginComponent = class _LoginComponent {
  dataService;
  fb;
  authService;
  router;
  routes = routes;
  loginForm;
  welcomeLogin = [];
  password = false;
  isLoading = false;
  errorMessage = "";
  // Magic link
  loginMode = "password";
  magicEmail = "";
  magicLoading = false;
  magicSent = false;
  magicError = "";
  authSlider = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  constructor(dataService, fb, authService, router) {
    this.dataService = dataService;
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.welcomeLogin = this.dataService.welcomeLogin;
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  togglePassword() {
    this.password = !this.password;
  }
  onSubmit() {
    this.errorMessage = "";
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    const payload = {
      email: this.loginForm.get("email")?.value.trim(),
      password: this.loginForm.get("password")?.value
    };
    this.authService.login(payload).subscribe({
      next: (res) => {
        this.isLoading = false;
        const roleId = res.user?.role_id;
        if (roleId === 2) {
          this.router.navigate(["/student/student-dashboard"]);
        } else if (roleId === 3 || roleId === 10 || roleId === 6 || roleId === 13) {
          this.router.navigate(["/instructor/instructor-dashboard"]);
        } else if (roleId === 4 || roleId === 5 || roleId === 9 || roleId === 14) {
          this.router.navigate(["/adminrh/adminrh-dashboard"]);
        } else if (roleId === 1) {
          this.router.navigate(["/superadmin/superadmin-dashboard"]);
        } else {
          this.router.navigate(["/index"]);
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.message || "Erreur de connexion. Veuillez v\xE9rifier vos identifiants.";
        console.error("Erreur login:", err);
      }
    });
  }
  sendMagicLink() {
    this.magicError = "";
    if (!this.magicEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.magicEmail)) {
      this.magicError = "Veuillez entrer une adresse e-mail valide.";
      return;
    }
    this.magicLoading = true;
    this.authService.sendMagicLink(this.magicEmail).subscribe({
      next: () => {
        this.magicLoading = false;
        this.magicSent = true;
      },
      error: (err) => {
        this.magicLoading = false;
        this.magicError = err?.message || "Une erreur est survenue.";
      }
    });
  }
  directIndex() {
    this.onSubmit();
  }
  get f() {
    return this.loginForm.controls;
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 50, vars: 9, consts: [[1, "main-wrapper"], [1, "login-content"], [1, "row"], [1, "col-md-6", "login-bg", "d-none", "d-lg-flex"], [1, "login-carousel"], [3, "config"], ["ngxSlickItem", ""], [1, "col-md-6", "login-wrap-bg"], [1, "login-wrapper"], [1, "loginbox"], [1, "w-100"], [1, "d-flex", "align-items-center", "justify-content-between", "login-header"], ["src", "assets/img/logo.png", "alt", "Logo Pyramide", 1, "img-fluid", 2, "width", "250px", "height", "75px"], [1, "link-1", 3, "routerLink"], [1, "fs-32", "fw-bold", "topic"], [1, "text-muted", "mb-3"], [1, "login-mode-toggle", "mb-4"], ["type", "button", 1, "lmt-btn", 3, "click"], [1, "isax", "isax-lock"], [1, "isax", "isax-sms"], [4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-center", "or", "fs-14", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center", "mb-3"], ["href", "javascript:void(0);", 1, "btn", "btn-light", "me-2"], ["src", "assets/img/icons/google.svg", "alt", "img", 1, "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-light"], ["src", "assets/img/icons/facebook.svg", "alt", "img", 1, "me-2"], [1, "fs-14", "fw-normal", "d-flex", "align-items-center", "justify-content-center"], [1, "link-2", "ms-1", 3, "routerLink"], [1, "fs-13", "text-center", "text-muted", "mt-4"], [1, "mb-1"], [1, "mb-0"], [1, "isax", "isax-call", "me-1"], [1, "isax", "isax-sms", "ms-2", "me-1"], [1, "login-carousel-section", "mb-3"], [1, "login-banner"], ["alt", "Logo", 1, "img-fluid", 3, "src"], [1, "mentor-course", "text-center"], [1, "mb-2"], [1, "text-secondary"], ["class", "alert alert-danger alert-dismissible fade show mb-3", "role", "alert", 4, "ngIf"], [1, "mb-3", "pb-3", 3, "ngSubmit", "formGroup"], [1, "mb-3", "position-relative"], [1, "form-label"], [1, "text-danger", "ms-1"], [1, "position-relative"], ["type", "email", "formControlName", "email", "placeholder", "Entrez votre adresse email", 1, "form-control", "form-control-lg"], [1, "isax", "isax-sms", "input-icon", "text-gray-7", "fs-14"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["id", "passwordInput", 1, "position-relative"], ["formControlName", "password", "placeholder", "Entrez votre mot de passe", 1, "pass-inputs", "form-control", "form-control-lg", 3, "type"], ["tabindex", "0", 1, "isax", "toggle-passwords", "fs-14", "cursor-pointer", 3, "click", "keydown.enter", "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "remember-me", "d-flex", "align-items-center"], ["type", "checkbox", "value", "true", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label", "ms-2"], [1, "link-2", 3, "routerLink"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-secondary", "btn-lg", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "isax isax-arrow-right-3 ms-1", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "mb-3"], [1, "isax", "isax-close-circle", "me-2"], ["type", "button", "aria-label", "Fermer", 1, "btn-close", 3, "click"], [1, "invalid-feedback", "d-block"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "isax", "isax-arrow-right-3", "ms-1"], ["class", "magic-sent-box mb-3", 4, "ngIf"], [1, "magic-sent-box", "mb-3"], [1, "msb-icon"], [1, "isax", "isax-sms-star"], [1, "msb-text"], [1, "msb-title"], [1, "msb-sub"], ["type", "button", 1, "msb-resend", 3, "click"], [1, "magic-desc", "mb-3"], [1, "isax", "isax-info-circle", "me-2"], ["class", "alert alert-danger mb-3", 4, "ngIf"], ["type", "email", "placeholder", "votre@email.com", 1, "form-control", "form-control-lg", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "d-grid", "mb-3"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg", 3, "click", "disabled"], ["class", "isax isax-send-2 me-2", 4, "ngIf"], [1, "alert", "alert-danger", "mb-3"], [1, "isax", "isax-send-2", "me-2"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ngx-slick-carousel", 5);
      \u0275\u0275repeaterCreate(6, LoginComponent_For_7_Template, 14, 6, "div", 6, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11);
      \u0275\u0275element(13, "img", 12);
      \u0275\u0275elementStart(14, "a", 13);
      \u0275\u0275text(15, "Retour \xE0 l'Accueil");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "h1", 14);
      \u0275\u0275text(17, "Connectez-vous \xE0 Pyramide-e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 15);
      \u0275\u0275text(19, "Formez vous simplement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 16)(21, "button", 17);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_21_listener() {
        ctx.loginMode = "password";
        ctx.magicSent = false;
        return ctx.magicError = "";
      });
      \u0275\u0275element(22, "i", 18);
      \u0275\u0275text(23, " Mot de passe ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 17);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_24_listener() {
        ctx.loginMode = "magic";
        return ctx.errorMessage = "";
      });
      \u0275\u0275element(25, "i", 19);
      \u0275\u0275text(26, " Lien par e-mail ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(27, LoginComponent_ng_container_27_Template, 35, 15, "ng-container", 20)(28, LoginComponent_ng_container_28_Template, 3, 2, "ng-container", 20);
      \u0275\u0275elementStart(29, "div", 21);
      \u0275\u0275text(30, " Ou ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 22)(32, "a", 23);
      \u0275\u0275element(33, "img", 24);
      \u0275\u0275text(34, "Google");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "a", 25);
      \u0275\u0275element(36, "img", 26);
      \u0275\u0275text(37, "Facebook");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 27);
      \u0275\u0275text(39, " Vous n'avez pas de compte ?");
      \u0275\u0275elementStart(40, "a", 28);
      \u0275\u0275text(41, " Inscrivez-vous");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 29)(43, "p", 30);
      \u0275\u0275text(44, "Besoin d'aide ? Contactez notre support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "p", 31);
      \u0275\u0275element(46, "i", 32);
      \u0275\u0275text(47, " +221 XX XXX XX XX | ");
      \u0275\u0275element(48, "i", 33);
      \u0275\u0275text(49, " support@pyramide.com ");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("config", ctx.authSlider);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.welcomeLogin);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("active", ctx.loginMode === "password");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.loginMode === "magic");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loginMode === "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loginMode === "magic");
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.register);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, RouterLink, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], styles: ["\n\n.login-mode-toggle[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 6px;\n  background: #f3f4f6;\n  border-radius: 10px;\n  padding: 4px;\n}\n.lmt-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  padding: 9px 14px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6b7280;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.lmt-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.lmt-btn.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #069b8f;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);\n  font-weight: 600;\n}\n.lmt-btn[_ngcontent-%COMP%]:not(.active):hover {\n  color: #374151;\n}\n.magic-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  background: #f0fdf9;\n  border: 1px solid #b2e8e3;\n  border-radius: 8px;\n  padding: 10px 14px;\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  line-height: 1.5;\n}\n.magic-desc[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #069b8f;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.magic-sent-box[_ngcontent-%COMP%] {\n  background: #f0fdf9;\n  border: 1px solid #b2e8e3;\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.msb-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #069b8f;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.msb-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.msb-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #047a6f;\n  margin-bottom: 4px;\n}\n.msb-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #374151;\n  line-height: 1.5;\n}\n.msb-resend[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #069b8f;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  white-space: nowrap;\n  font-weight: 500;\n  padding: 4px 0;\n  text-decoration: underline;\n  flex-shrink: 0;\n}\n.msb-resend[_ngcontent-%COMP%]:hover {\n  color: #047a6f;\n}\n.mv-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.mv-icon--spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.mv-icon--success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.mv-icon--error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, SlickCarouselModule], template: `<div class="main-wrapper">
  <div class="login-content">
      <div class="row">
          <!-- Login Banner -->
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
          <!-- /Login Banner -->

          <div class="col-md-6 login-wrap-bg">
              <!-- Login -->
              <div class="login-wrapper">
                  <div class="loginbox">
                      <div class="w-100">
                          <div class="d-flex align-items-center justify-content-between login-header">
                              <img src="assets/img/logo.png" class="img-fluid" alt="Logo Pyramide" style="width: 250px;height: 75px;">
                              <a [routerLink]="routes.home" class="link-1">Retour \xE0 l'Accueil</a>
                          </div>
                          <h1 class="fs-32 fw-bold topic">Connectez-vous \xE0 Pyramide-e</h1>
                          <p class="text-muted mb-3">Formez vous simplement</p>

                          <!-- Toggle mode -->
                          <div class="login-mode-toggle mb-4">
                              <button type="button"
                                      class="lmt-btn"
                                      [class.active]="loginMode === 'password'"
                                      (click)="loginMode = 'password'; magicSent = false; magicError = ''">
                                  <i class="isax isax-lock"></i> Mot de passe
                              </button>
                              <button type="button"
                                      class="lmt-btn"
                                      [class.active]="loginMode === 'magic'"
                                      (click)="loginMode = 'magic'; errorMessage = ''">
                                  <i class="isax isax-sms"></i> Lien par e-mail
                              </button>
                          </div>

                          <!-- \u2550\u2550\u2550 MODE MOT DE PASSE \u2550\u2550\u2550 -->
                          <ng-container *ngIf="loginMode === 'password'">

                            <!-- Message d'erreur -->
                            <div *ngIf="errorMessage" class="alert alert-danger alert-dismissible fade show mb-3" role="alert">
                                <i class="isax isax-close-circle me-2"></i>
                                {{ errorMessage }}
                                <button type="button" class="btn-close" (click)="errorMessage = ''" aria-label="Fermer"></button>
                            </div>

                            <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="mb-3 pb-3">
                                <!-- Email Field -->
                                <div class="mb-3 position-relative">
                                    <label class="form-label">Adresse Email<span class="text-danger ms-1">*</span></label>
                                    <div class="position-relative">
                                        <input
                                            type="email"
                                            class="form-control form-control-lg"
                                            formControlName="email"
                                            [class.is-invalid]="f['email'].invalid && f['email'].touched"
                                            placeholder="Entrez votre adresse email">
                                        <span><i class="isax isax-sms input-icon text-gray-7 fs-14"></i></span>
                                    </div>
                                    <div *ngIf="f['email'].invalid && f['email'].touched" class="invalid-feedback d-block">
                                        <small *ngIf="f['email'].hasError('required')">L'email est requis</small>
                                        <small *ngIf="f['email'].hasError('email')">Veuillez entrer un email valide</small>
                                    </div>
                                </div>

                                <!-- Password Field -->
                                <div class="mb-3 position-relative">
                                    <label class="form-label">Mot de Passe <span class="text-danger ms-1">*</span></label>
                                    <div class="position-relative" id="passwordInput">
                                        <input
                                            [type]="password ? 'text' : 'password'"
                                            class="pass-inputs form-control form-control-lg"
                                            formControlName="password"
                                            [class.is-invalid]="f['password'].invalid && f['password'].touched"
                                            placeholder="Entrez votre mot de passe">
                                        <span
                                            tabindex="0"
                                            (click)="togglePassword()"
                                            (keydown.enter)="togglePassword()"
                                            class="isax toggle-passwords fs-14 cursor-pointer"
                                            [ngClass]="password ? 'isax-eye' : 'isax-eye-slash'">
                                        </span>
                                    </div>
                                    <div *ngIf="f['password'].invalid && f['password'].touched" class="invalid-feedback d-block">
                                        <small *ngIf="f['password'].hasError('required')">Le mot de passe est requis</small>
                                        <small *ngIf="f['password'].hasError('minlength')">Le mot de passe doit contenir au moins 6 caract\xE8res</small>
                                    </div>
                                </div>

                                <!-- Remember Me & Forgot Password -->
                                <div class="d-flex align-items-center justify-content-between mb-4">
                                    <div class="remember-me d-flex align-items-center">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value="true"
                                            id="flexCheckDefault">
                                        <label class="form-check-label ms-2" for="flexCheckDefault">
                                            Se souvenir de moi
                                        </label>
                                    </div>
                                    <div>
                                        <a [routerLink]="routes.forgot_password" class="link-2">
                                            Mot de passe oubli\xE9 ?
                                        </a>
                                    </div>
                                </div>

                                <!-- Submit Button -->
                                <div class="d-grid">
                                    <button
                                        class="btn btn-secondary btn-lg"
                                        type="submit"
                                        [disabled]="isLoading || loginForm.invalid">
                                        <span *ngIf="isLoading" class="spinner-border spinner-border-sm me-2"></span>
                                        {{ isLoading ? 'Connexion en cours...' : 'Se Connecter' }}
                                        <i *ngIf="!isLoading" class="isax isax-arrow-right-3 ms-1"></i>
                                    </button>
                                </div>
                            </form>

                          </ng-container>

                          <!-- \u2550\u2550\u2550 MODE MAGIC LINK \u2550\u2550\u2550 -->
                          <ng-container *ngIf="loginMode === 'magic'">

                            <!-- Succ\xE8s envoi -->
                            <div *ngIf="magicSent" class="magic-sent-box mb-3">
                                <div class="msb-icon"><i class="isax isax-sms-star"></i></div>
                                <div class="msb-text">
                                    <div class="msb-title">E-mail envoy\xE9 !</div>
                                    <div class="msb-sub">
                                        V\xE9rifiez votre bo\xEEte de r\xE9ception \xE0 <strong>{{ magicEmail }}</strong>.<br>
                                        Le lien est valable <strong>15 minutes</strong>.
                                    </div>
                                </div>
                                <button type="button" class="msb-resend" (click)="magicSent = false">
                                    Renvoyer
                                </button>
                            </div>

                            <!-- Formulaire envoi -->
                            <ng-container *ngIf="!magicSent">

                              <div class="magic-desc mb-3">
                                  <i class="isax isax-info-circle me-2"></i>
                                  Entrez votre e-mail. Nous vous enverrons un lien de connexion instantan\xE9, sans mot de passe.
                              </div>

                              <div *ngIf="magicError" class="alert alert-danger mb-3">
                                  <i class="isax isax-close-circle me-2"></i>{{ magicError }}
                              </div>

                              <div class="mb-3 position-relative">
                                  <label class="form-label">Adresse Email<span class="text-danger ms-1">*</span></label>
                                  <div class="position-relative">
                                      <input
                                          type="email"
                                          class="form-control form-control-lg"
                                          [(ngModel)]="magicEmail"
                                          placeholder="votre@email.com"
                                          (keydown.enter)="sendMagicLink()">
                                      <span><i class="isax isax-sms input-icon text-gray-7 fs-14"></i></span>
                                  </div>
                              </div>

                              <div class="d-grid mb-3">
                                  <button
                                      type="button"
                                      class="btn btn-secondary btn-lg"
                                      [disabled]="magicLoading"
                                      (click)="sendMagicLink()">
                                      <span *ngIf="magicLoading" class="spinner-border spinner-border-sm me-2"></span>
                                      <i *ngIf="!magicLoading" class="isax isax-send-2 me-2"></i>
                                      {{ magicLoading ? 'Envoi en cours\u2026' : 'Envoyer le lien de connexion' }}
                                  </button>
                              </div>

                            </ng-container>

                          </ng-container>

                          <div class="d-flex align-items-center justify-content-center or fs-14 mb-3">
                              Ou
                          </div>

                          <div class="d-flex align-items-center justify-content-center mb-3">
                              <a href="javascript:void(0);" class="btn btn-light me-2"><img src="assets/img/icons/google.svg" alt="img" class="me-2">Google</a>
                              <a href="javascript:void(0);" class="btn btn-light"><img src="assets/img/icons/facebook.svg" alt="img" class="me-2">Facebook</a>
                          </div>

                          <div class="fs-14 fw-normal d-flex align-items-center justify-content-center">
                              Vous n'avez pas de compte ?<a [routerLink]="routes.register" class="link-2 ms-1"> Inscrivez-vous</a>
                          </div>

                          <div class="fs-13 text-center text-muted mt-4">
                              <p class="mb-1">Besoin d'aide ? Contactez notre support</p>
                              <p class="mb-0">
                                  <i class="isax isax-call me-1"></i> +221 XX XXX XX XX | 
                                  <i class="isax isax-sms ms-2 me-1"></i> support@pyramide.com
                              </p>
                          </div>

                          <!-- /Login -->

                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>`, styles: ["/* src/app/auth/login/login.component.scss */\n.login-mode-toggle {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 6px;\n  background: #f3f4f6;\n  border-radius: 10px;\n  padding: 4px;\n}\n.lmt-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  padding: 9px 14px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6b7280;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.lmt-btn i {\n  font-size: 15px;\n}\n.lmt-btn.active {\n  background: #fff;\n  color: #069b8f;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);\n  font-weight: 600;\n}\n.lmt-btn:not(.active):hover {\n  color: #374151;\n}\n.magic-desc {\n  font-size: 13px;\n  color: #6b7280;\n  background: #f0fdf9;\n  border: 1px solid #b2e8e3;\n  border-radius: 8px;\n  padding: 10px 14px;\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  line-height: 1.5;\n}\n.magic-desc i {\n  font-size: 15px;\n  color: #069b8f;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.magic-sent-box {\n  background: #f0fdf9;\n  border: 1px solid #b2e8e3;\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.msb-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #069b8f;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.msb-text {\n  flex: 1;\n}\n.msb-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #047a6f;\n  margin-bottom: 4px;\n}\n.msb-sub {\n  font-size: 12px;\n  color: #374151;\n  line-height: 1.5;\n}\n.msb-resend {\n  font-size: 12px;\n  color: #069b8f;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  white-space: nowrap;\n  font-weight: 500;\n  padding: 4px 0;\n  text-decoration: underline;\n  flex-shrink: 0;\n}\n.msb-resend:hover {\n  color: #047a6f;\n}\n.mv-icon {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.mv-icon--spin {\n  animation: spin 0.8s linear infinite;\n}\n.mv-icon--success {\n  background: #ecfdf5;\n  color: #059669;\n}\n.mv-icon--error {\n  background: #fef2f2;\n  color: #dc2626;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/auth/login/login.component.ts", lineNumber: 17 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-2VXY2445.js.map
