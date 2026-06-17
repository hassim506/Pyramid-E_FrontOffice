import {
  RoleRedirectService
} from "./chunk-DS2V2BCU.js";
import {
  AuthService
} from "./chunk-IEFOQSOV.js";
import "./chunk-K7E3GT3E.js";
import {
  DataService
} from "./chunk-L2JYRU5M.js";
import {
  SlickCarouselComponent,
  SlickCarouselModule,
  SlickItemDirective
} from "./chunk-RAWGSTJW.js";
import {
  routes
} from "./chunk-YJLHMFCU.js";
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
} from "./chunk-HLA233IM.js";
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
function LoginComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 32)(2, "div", 33);
    \u0275\u0275element(3, "img", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "p", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2", 37)(8, "span", 38);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 39);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "div", 40);
    \u0275\u0275elementStart(13, "p", 41);
    \u0275\u0275text(14, " Votre plateforme de ");
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16, "formation");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " et de ");
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19, "d\xE9veloppement des comp\xE9tences");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "div", 42);
    \u0275\u0275elementStart(22, "p", 43);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", slide_r1.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(slide_r1.content1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(slide_r1.content3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", slide_r1.content4);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(slide_r1.paragraph);
  }
}
function LoginComponent_ng_container_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 67);
    \u0275\u0275listener("click", function LoginComponent_ng_container_33_div_1_Template_button_click_3_listener() {
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
function LoginComponent_ng_container_33_div_12_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "L'email est requis");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_33_div_12_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Veuillez entrer un email valide");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_33_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275template(1, LoginComponent_ng_container_33_div_12_small_1_Template, 2, 0, "small", 26)(2, LoginComponent_ng_container_33_div_12_small_2_Template, 2, 0, "small", 26);
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
function LoginComponent_ng_container_33_div_21_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Le mot de passe est requis");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_33_div_21_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Le mot de passe doit contenir au moins 6 caract\xE8res");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_ng_container_33_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275template(1, LoginComponent_ng_container_33_div_21_small_1_Template, 2, 0, "small", 26)(2, LoginComponent_ng_container_33_div_21_small_2_Template, 2, 0, "small", 26);
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
function LoginComponent_ng_container_33_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 69);
  }
}
function LoginComponent_ng_container_33_i_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 70);
  }
}
function LoginComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LoginComponent_ng_container_33_div_1_Template, 4, 1, "div", 44);
    \u0275\u0275elementStart(2, "form", 45);
    \u0275\u0275listener("ngSubmit", function LoginComponent_ng_container_33_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSubmit());
    });
    \u0275\u0275elementStart(3, "div", 46)(4, "label", 47);
    \u0275\u0275text(5, "Adresse Email");
    \u0275\u0275elementStart(6, "span", 48);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 49);
    \u0275\u0275element(9, "input", 50);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275element(11, "i", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, LoginComponent_ng_container_33_div_12_Template, 3, 2, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 46)(14, "label", 47);
    \u0275\u0275text(15, "Mot de Passe ");
    \u0275\u0275elementStart(16, "span", 48);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 53);
    \u0275\u0275element(19, "input", 54);
    \u0275\u0275elementStart(20, "span", 55);
    \u0275\u0275listener("click", function LoginComponent_ng_container_33_Template_span_click_20_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.togglePassword());
    })("keydown.enter", function LoginComponent_ng_container_33_Template_span_keydown_enter_20_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.togglePassword());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, LoginComponent_ng_container_33_div_21_Template, 3, 2, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 56)(23, "div", 57);
    \u0275\u0275element(24, "input", 58);
    \u0275\u0275elementStart(25, "label", 59);
    \u0275\u0275text(26, " Se souvenir de moi ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div")(28, "a", 60);
    \u0275\u0275text(29, " Mot de passe oubli\xE9 ? ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 61)(31, "button", 62);
    \u0275\u0275template(32, LoginComponent_ng_container_33_span_32_Template, 1, 0, "span", 63);
    \u0275\u0275text(33);
    \u0275\u0275template(34, LoginComponent_ng_container_33_i_34_Template, 1, 0, "i", 64);
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
function LoginComponent_ng_container_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73);
    \u0275\u0275element(2, "i", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 75)(4, "div", 76);
    \u0275\u0275text(5, "E-mail envoy\xE9 !");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 77);
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
    \u0275\u0275elementStart(16, "button", 78);
    \u0275\u0275listener("click", function LoginComponent_ng_container_34_div_1_Template_button_click_16_listener() {
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
function LoginComponent_ng_container_34_ng_container_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.magicError, " ");
  }
}
function LoginComponent_ng_container_34_ng_container_2_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 69);
  }
}
function LoginComponent_ng_container_34_ng_container_2_i_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 87);
  }
}
function LoginComponent_ng_container_34_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 79);
    \u0275\u0275element(2, "i", 80);
    \u0275\u0275text(3, " Entrez votre e-mail. Nous vous enverrons un lien de connexion instantan\xE9, sans mot de passe. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, LoginComponent_ng_container_34_ng_container_2_div_4_Template, 3, 1, "div", 81);
    \u0275\u0275elementStart(5, "div", 46)(6, "label", 47);
    \u0275\u0275text(7, "Adresse Email");
    \u0275\u0275elementStart(8, "span", 48);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 49)(11, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_ng_container_34_ng_container_2_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.magicEmail, $event) || (ctx_r3.magicEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function LoginComponent_ng_container_34_ng_container_2_Template_input_keydown_enter_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.sendMagicLink());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275element(13, "i", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 83)(15, "button", 84);
    \u0275\u0275listener("click", function LoginComponent_ng_container_34_ng_container_2_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.sendMagicLink());
    });
    \u0275\u0275template(16, LoginComponent_ng_container_34_ng_container_2_span_16_Template, 1, 0, "span", 63)(17, LoginComponent_ng_container_34_ng_container_2_i_17_Template, 1, 0, "i", 85);
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
function LoginComponent_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LoginComponent_ng_container_34_div_1_Template, 18, 1, "div", 71)(2, LoginComponent_ng_container_34_ng_container_2_Template, 19, 6, "ng-container", 26);
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
  roleRedirect;
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
  constructor(dataService, fb, authService, roleRedirect, router) {
    this.dataService = dataService;
    this.fb = fb;
    this.authService = authService;
    this.roleRedirect = roleRedirect;
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
        const roleId = res.user?.role_id ?? 0;
        const roleType = res.role_type ?? res.user?.["role_type"];
        this.roleRedirect.redirectAfterLogin(roleId, roleType);
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
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(RoleRedirectService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 43, vars: 8, consts: [[1, "main-wrapper"], [1, "login-content"], [1, "row"], [1, "col-md-6", "login-bg", "d-none", "d-lg-flex"], [1, "lc-float-icon", "lc-float-book"], [1, "isax", "isax-book"], [1, "lc-float-icon", "lc-float-cap"], [1, "isax", "isax-teacher"], [1, "lc-float-icon", "lc-float-triangle"], [1, "lc-float-icon", "lc-float-dots"], [1, "login-carousel"], [3, "config"], ["ngxSlickItem", ""], [1, "col-md-6", "login-wrap-bg"], [1, "login-wrapper"], [1, "loginbox"], [1, "w-100"], [1, "d-flex", "align-items-center", "justify-content-between", "login-header"], ["src", "assets/img/logo.png", "alt", "Logo Pyramide", 1, "img-fluid", 2, "width", "250px", "height", "75px"], [1, "link-1", 3, "routerLink"], [1, "fs-32", "fw-bold", "topic"], [1, "text-muted", "mb-3"], [1, "login-mode-toggle", "mb-4"], ["type", "button", 1, "lmt-btn", 3, "click"], [1, "isax", "isax-lock"], [1, "isax", "isax-sms"], [4, "ngIf"], [1, "fs-13", "text-center", "text-muted", "mt-4"], [1, "mb-1"], [1, "mb-0"], [1, "isax", "isax-call", "me-1"], [1, "isax", "isax-sms", "ms-2", "me-1"], [1, "login-carousel-section", "mb-3"], [1, "login-banner"], ["alt", "Logo", 1, "img-fluid", 3, "src"], [1, "mentor-course", "text-center"], [1, "lc-welcome"], [1, "lc-title"], [1, "lc-brand"], [1, "lc-lms"], [1, "lc-divider", "mx-auto"], [1, "lc-subtitle"], [1, "lc-divider-thin", "mx-auto"], [1, "lc-paragraph"], ["class", "alert alert-danger alert-dismissible fade show mb-3", "role", "alert", 4, "ngIf"], [1, "mb-3", "pb-3", 3, "ngSubmit", "formGroup"], [1, "mb-3", "position-relative"], [1, "form-label"], [1, "text-danger", "ms-1"], [1, "position-relative"], ["type", "email", "formControlName", "email", "placeholder", "Entrez votre adresse email", 1, "form-control", "form-control-lg"], [1, "isax", "isax-sms", "input-icon", "text-gray-7", "fs-14"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["id", "passwordInput", 1, "position-relative"], ["formControlName", "password", "placeholder", "Entrez votre mot de passe", 1, "pass-inputs", "form-control", "form-control-lg", 3, "type"], ["tabindex", "0", 1, "isax", "toggle-passwords", "fs-14", "cursor-pointer", 3, "click", "keydown.enter", "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "remember-me", "d-flex", "align-items-center"], ["type", "checkbox", "value", "true", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label", "ms-2"], [1, "link-2", 3, "routerLink"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-secondary", "btn-lg", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "isax isax-arrow-right-3 ms-1", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "mb-3"], [1, "isax", "isax-close-circle", "me-2"], ["type", "button", "aria-label", "Fermer", 1, "btn-close", 3, "click"], [1, "invalid-feedback", "d-block"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "isax", "isax-arrow-right-3", "ms-1"], ["class", "magic-sent-box mb-3", 4, "ngIf"], [1, "magic-sent-box", "mb-3"], [1, "msb-icon"], [1, "isax", "isax-sms-star"], [1, "msb-text"], [1, "msb-title"], [1, "msb-sub"], ["type", "button", 1, "msb-resend", 3, "click"], [1, "magic-desc", "mb-3"], [1, "isax", "isax-info-circle", "me-2"], ["class", "alert alert-danger mb-3", 4, "ngIf"], ["type", "email", "placeholder", "votre@email.com", 1, "form-control", "form-control-lg", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "d-grid", "mb-3"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg", 3, "click", "disabled"], ["class", "isax isax-send-2 me-2", 4, "ngIf"], [1, "alert", "alert-danger", "mb-3"], [1, "isax", "isax-send-2", "me-2"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 6);
      \u0275\u0275element(7, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "span", 8)(9, "span", 9);
      \u0275\u0275elementStart(10, "div", 10)(11, "ngx-slick-carousel", 11);
      \u0275\u0275repeaterCreate(12, LoginComponent_For_13_Template, 24, 5, "div", 12, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "div", 17);
      \u0275\u0275element(19, "img", 18);
      \u0275\u0275elementStart(20, "a", 19);
      \u0275\u0275text(21, "Retour \xE0 l'Accueil");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "h1", 20);
      \u0275\u0275text(23, "Connectez-vous \xE0 Pyramide-e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p", 21);
      \u0275\u0275text(25, "Formez vous simplement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 22)(27, "button", 23);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_27_listener() {
        ctx.loginMode = "password";
        ctx.magicSent = false;
        return ctx.magicError = "";
      });
      \u0275\u0275element(28, "i", 24);
      \u0275\u0275text(29, " Mot de passe ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "button", 23);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_30_listener() {
        ctx.loginMode = "magic";
        return ctx.errorMessage = "";
      });
      \u0275\u0275element(31, "i", 25);
      \u0275\u0275text(32, " Lien par e-mail ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(33, LoginComponent_ng_container_33_Template, 35, 15, "ng-container", 26)(34, LoginComponent_ng_container_34_Template, 3, 2, "ng-container", 26);
      \u0275\u0275elementStart(35, "div", 27)(36, "p", 28);
      \u0275\u0275text(37, "Besoin d'aide ? Contactez notre support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p", 29);
      \u0275\u0275element(39, "i", 30);
      \u0275\u0275text(40, " +221 77 662 26 82 | ");
      \u0275\u0275element(41, "i", 31);
      \u0275\u0275text(42, " support@pyramide-e.com ");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
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
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, RouterLink, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], styles: ['\n\n.lc-welcome[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: #1a2e44;\n  margin-bottom: 4px;\n  letter-spacing: 0.01em;\n}\n.lc-title[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 800;\n  line-height: 1.15;\n  margin-bottom: 14px;\n}\n.lc-brand[_ngcontent-%COMP%] {\n  color: #c9a227;\n  font-weight: 800;\n}\n.lc-lms[_ngcontent-%COMP%] {\n  color: #1a2e44;\n  font-weight: 700;\n  font-size: 32px;\n  vertical-align: middle;\n  letter-spacing: 0.04em;\n}\n.lc-divider[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 3px;\n  background: #c9a227;\n  border-radius: 4px;\n  margin-bottom: 14px;\n}\n.lc-divider-thin[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 2px;\n  background: #c9a227;\n  border-radius: 4px;\n  margin-bottom: 14px;\n}\n.lc-subtitle[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #2c3e50;\n  margin-bottom: 14px;\n}\n.lc-subtitle[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.lc-paragraph[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #555e6d;\n  line-height: 1.7;\n  max-width: 480px;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]     .login-bg {\n  background: #fdf8f1 !important;\n  position: relative !important;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .login-content .slick-dots .slick-active {\n  background: #c9a227 !important;\n}\n.lc-float-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  opacity: 0.35;\n  pointer-events: none;\n}\n.lc-float-book[_ngcontent-%COMP%] {\n  top: 9%;\n  left: 10%;\n  font-size: 44px;\n  color: #c9a227;\n  opacity: 0.45;\n  transform: rotate(-8deg);\n}\n.lc-float-cap[_ngcontent-%COMP%] {\n  top: 7%;\n  right: 10%;\n  font-size: 44px;\n  color: #c9a227;\n  opacity: 0.45;\n  transform: rotate(6deg);\n}\n.lc-float-triangle[_ngcontent-%COMP%] {\n  right: 7%;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 36px;\n  height: 36px;\n  opacity: 0.25;\n}\n.lc-float-triangle[_ngcontent-%COMP%]::before {\n  content: "";\n  display: block;\n  width: 0;\n  height: 0;\n  border-left: 18px solid transparent;\n  border-right: 18px solid transparent;\n  border-bottom: 32px solid #c9a227;\n}\n.lc-float-dots[_ngcontent-%COMP%] {\n  top: 4%;\n  left: 3%;\n  width: 80px;\n  height: 80px;\n  opacity: 0.18;\n  background-image:\n    radial-gradient(\n      circle,\n      #c9a227 1.5px,\n      transparent 1.5px);\n  background-size: 12px 12px;\n}\n.login-mode-toggle[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 6px;\n  background: #f3f4f6;\n  border-radius: 10px;\n  padding: 4px;\n}\n.lmt-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  padding: 9px 14px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6b7280;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.lmt-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.lmt-btn.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #069b8f;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);\n  font-weight: 600;\n}\n.lmt-btn[_ngcontent-%COMP%]:not(.active):hover {\n  color: #374151;\n}\n.magic-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  background: #f0fdf9;\n  border: 1px solid #b2e8e3;\n  border-radius: 8px;\n  padding: 10px 14px;\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  line-height: 1.5;\n}\n.magic-desc[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #069b8f;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.magic-sent-box[_ngcontent-%COMP%] {\n  background: #f0fdf9;\n  border: 1px solid #b2e8e3;\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.msb-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #069b8f;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.msb-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.msb-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #047a6f;\n  margin-bottom: 4px;\n}\n.msb-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #374151;\n  line-height: 1.5;\n}\n.msb-resend[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #069b8f;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  white-space: nowrap;\n  font-weight: 500;\n  padding: 4px 0;\n  text-decoration: underline;\n  flex-shrink: 0;\n}\n.msb-resend[_ngcontent-%COMP%]:hover {\n  color: #047a6f;\n}\n.mv-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.mv-icon--spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.mv-icon--success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.mv-icon--error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, SlickCarouselModule], template: `<div class="main-wrapper">\r
  <div class="login-content">\r
      <div class="row">\r
          <!-- Login Banner -->\r
          <div class="col-md-6 login-bg d-none d-lg-flex">\r
              <!-- Floating decorative icons -->\r
              <span class="lc-float-icon lc-float-book"><i class="isax isax-book"></i></span>\r
              <span class="lc-float-icon lc-float-cap"><i class="isax isax-teacher"></i></span>\r
              <span class="lc-float-icon lc-float-triangle"></span>\r
              <span class="lc-float-icon lc-float-dots"></span>\r
              <div class="login-carousel">\r
                <ngx-slick-carousel [config]="authSlider">\r
                  @for (slide of welcomeLogin; track slide) {\r
                    <div ngxSlickItem>\r
                      <div class="login-carousel-section mb-3">\r
                          <div class="login-banner">\r
                              <img [src]="slide.img" class="img-fluid" alt="Logo">\r
                          </div>\r
                          <div class="mentor-course text-center">\r
                              <p class="lc-welcome">{{slide.content1}}</p>\r
                              <h2 class="lc-title">\r
                                  <span class="lc-brand">{{slide.content3}}</span>\r
                                  <span class="lc-lms"> {{slide.content4}}</span>\r
                              </h2>\r
                              <div class="lc-divider mx-auto"></div>\r
                              <p class="lc-subtitle">\r
                                  Votre plateforme de <strong>formation</strong> et de <strong>d\xE9veloppement des comp\xE9tences</strong>.\r
                              </p>\r
                              <div class="lc-divider-thin mx-auto"></div>\r
                              <p class="lc-paragraph">{{slide.paragraph}}</p>\r
                          </div>\r
                      </div>\r
                  </div>\r
                  }\r
                </ngx-slick-carousel>\r
              </div>\r
          </div>\r
          <!-- /Login Banner -->\r
\r
          <div class="col-md-6 login-wrap-bg">\r
              <!-- Login -->\r
              <div class="login-wrapper">\r
                  <div class="loginbox">\r
                      <div class="w-100">\r
                          <div class="d-flex align-items-center justify-content-between login-header">\r
                              <img src="assets/img/logo.png" class="img-fluid" alt="Logo Pyramide" style="width: 250px;height: 75px;">\r
                              <a [routerLink]="routes.home" class="link-1">Retour \xE0 l'Accueil</a>\r
                          </div>\r
                          <h1 class="fs-32 fw-bold topic">Connectez-vous \xE0 Pyramide-e</h1>\r
                          <p class="text-muted mb-3">Formez vous simplement</p>\r
\r
                          <!-- Toggle mode -->\r
                          <div class="login-mode-toggle mb-4">\r
                              <button type="button"\r
                                      class="lmt-btn"\r
                                      [class.active]="loginMode === 'password'"\r
                                      (click)="loginMode = 'password'; magicSent = false; magicError = ''">\r
                                  <i class="isax isax-lock"></i> Mot de passe\r
                              </button>\r
                              <button type="button"\r
                                      class="lmt-btn"\r
                                      [class.active]="loginMode === 'magic'"\r
                                      (click)="loginMode = 'magic'; errorMessage = ''">\r
                                  <i class="isax isax-sms"></i> Lien par e-mail\r
                              </button>\r
                          </div>\r
\r
                          <!-- \u2550\u2550\u2550 MODE MOT DE PASSE \u2550\u2550\u2550 -->\r
                          <ng-container *ngIf="loginMode === 'password'">\r
\r
                            <!-- Message d'erreur -->\r
                            <div *ngIf="errorMessage" class="alert alert-danger alert-dismissible fade show mb-3" role="alert">\r
                                <i class="isax isax-close-circle me-2"></i>\r
                                {{ errorMessage }}\r
                                <button type="button" class="btn-close" (click)="errorMessage = ''" aria-label="Fermer"></button>\r
                            </div>\r
\r
                            <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="mb-3 pb-3">\r
                                <!-- Email Field -->\r
                                <div class="mb-3 position-relative">\r
                                    <label class="form-label">Adresse Email<span class="text-danger ms-1">*</span></label>\r
                                    <div class="position-relative">\r
                                        <input\r
                                            type="email"\r
                                            class="form-control form-control-lg"\r
                                            formControlName="email"\r
                                            [class.is-invalid]="f['email'].invalid && f['email'].touched"\r
                                            placeholder="Entrez votre adresse email">\r
                                        <span><i class="isax isax-sms input-icon text-gray-7 fs-14"></i></span>\r
                                    </div>\r
                                    <div *ngIf="f['email'].invalid && f['email'].touched" class="invalid-feedback d-block">\r
                                        <small *ngIf="f['email'].hasError('required')">L'email est requis</small>\r
                                        <small *ngIf="f['email'].hasError('email')">Veuillez entrer un email valide</small>\r
                                    </div>\r
                                </div>\r
\r
                                <!-- Password Field -->\r
                                <div class="mb-3 position-relative">\r
                                    <label class="form-label">Mot de Passe <span class="text-danger ms-1">*</span></label>\r
                                    <div class="position-relative" id="passwordInput">\r
                                        <input\r
                                            [type]="password ? 'text' : 'password'"\r
                                            class="pass-inputs form-control form-control-lg"\r
                                            formControlName="password"\r
                                            [class.is-invalid]="f['password'].invalid && f['password'].touched"\r
                                            placeholder="Entrez votre mot de passe">\r
                                        <span\r
                                            tabindex="0"\r
                                            (click)="togglePassword()"\r
                                            (keydown.enter)="togglePassword()"\r
                                            class="isax toggle-passwords fs-14 cursor-pointer"\r
                                            [ngClass]="password ? 'isax-eye' : 'isax-eye-slash'">\r
                                        </span>\r
                                    </div>\r
                                    <div *ngIf="f['password'].invalid && f['password'].touched" class="invalid-feedback d-block">\r
                                        <small *ngIf="f['password'].hasError('required')">Le mot de passe est requis</small>\r
                                        <small *ngIf="f['password'].hasError('minlength')">Le mot de passe doit contenir au moins 6 caract\xE8res</small>\r
                                    </div>\r
                                </div>\r
\r
                                <!-- Remember Me & Forgot Password -->\r
                                <div class="d-flex align-items-center justify-content-between mb-4">\r
                                    <div class="remember-me d-flex align-items-center">\r
                                        <input\r
                                            class="form-check-input"\r
                                            type="checkbox"\r
                                            value="true"\r
                                            id="flexCheckDefault">\r
                                        <label class="form-check-label ms-2" for="flexCheckDefault">\r
                                            Se souvenir de moi\r
                                        </label>\r
                                    </div>\r
                                    <div>\r
                                        <a [routerLink]="routes.forgot_password" class="link-2">\r
                                            Mot de passe oubli\xE9 ?\r
                                        </a>\r
                                    </div>\r
                                </div>\r
\r
                                <!-- Submit Button -->\r
                                <div class="d-grid">\r
                                    <button\r
                                        class="btn btn-secondary btn-lg"\r
                                        type="submit"\r
                                        [disabled]="isLoading || loginForm.invalid">\r
                                        <span *ngIf="isLoading" class="spinner-border spinner-border-sm me-2"></span>\r
                                        {{ isLoading ? 'Connexion en cours...' : 'Se Connecter' }}\r
                                        <i *ngIf="!isLoading" class="isax isax-arrow-right-3 ms-1"></i>\r
                                    </button>\r
                                </div>\r
                            </form>\r
\r
                          </ng-container>\r
\r
                          <!-- \u2550\u2550\u2550 MODE MAGIC LINK \u2550\u2550\u2550 -->\r
                          <ng-container *ngIf="loginMode === 'magic'">\r
\r
                            <!-- Succ\xE8s envoi -->\r
                            <div *ngIf="magicSent" class="magic-sent-box mb-3">\r
                                <div class="msb-icon"><i class="isax isax-sms-star"></i></div>\r
                                <div class="msb-text">\r
                                    <div class="msb-title">E-mail envoy\xE9 !</div>\r
                                    <div class="msb-sub">\r
                                        V\xE9rifiez votre bo\xEEte de r\xE9ception \xE0 <strong>{{ magicEmail }}</strong>.<br>\r
                                        Le lien est valable <strong>15 minutes</strong>.\r
                                    </div>\r
                                </div>\r
                                <button type="button" class="msb-resend" (click)="magicSent = false">\r
                                    Renvoyer\r
                                </button>\r
                            </div>\r
\r
                            <!-- Formulaire envoi -->\r
                            <ng-container *ngIf="!magicSent">\r
\r
                              <div class="magic-desc mb-3">\r
                                  <i class="isax isax-info-circle me-2"></i>\r
                                  Entrez votre e-mail. Nous vous enverrons un lien de connexion instantan\xE9, sans mot de passe.\r
                              </div>\r
\r
                              <div *ngIf="magicError" class="alert alert-danger mb-3">\r
                                  <i class="isax isax-close-circle me-2"></i>{{ magicError }}\r
                              </div>\r
\r
                              <div class="mb-3 position-relative">\r
                                  <label class="form-label">Adresse Email<span class="text-danger ms-1">*</span></label>\r
                                  <div class="position-relative">\r
                                      <input\r
                                          type="email"\r
                                          class="form-control form-control-lg"\r
                                          [(ngModel)]="magicEmail"\r
                                          placeholder="votre@email.com"\r
                                          (keydown.enter)="sendMagicLink()">\r
                                      <span><i class="isax isax-sms input-icon text-gray-7 fs-14"></i></span>\r
                                  </div>\r
                              </div>\r
\r
                              <div class="d-grid mb-3">\r
                                  <button\r
                                      type="button"\r
                                      class="btn btn-secondary btn-lg"\r
                                      [disabled]="magicLoading"\r
                                      (click)="sendMagicLink()">\r
                                      <span *ngIf="magicLoading" class="spinner-border spinner-border-sm me-2"></span>\r
                                      <i *ngIf="!magicLoading" class="isax isax-send-2 me-2"></i>\r
                                      {{ magicLoading ? 'Envoi en cours\u2026' : 'Envoyer le lien de connexion' }}\r
                                  </button>\r
                              </div>\r
\r
                            </ng-container>\r
\r
                          </ng-container>\r
\r
                          <!-- <div class="d-flex align-items-center justify-content-center or fs-14 mb-3">\r
                              Ou\r
                          </div>\r
\r
                          <div class="d-flex align-items-center justify-content-center mb-3">\r
                              <a href="javascript:void(0);" class="btn btn-light me-2"><img src="assets/img/icons/google.svg" alt="img" class="me-2">Google</a>\r
                              <a href="javascript:void(0);" class="btn btn-light"><img src="assets/img/icons/facebook.svg" alt="img" class="me-2">Facebook</a>\r
                          </div>\r
\r
                          <div class="fs-14 fw-normal d-flex align-items-center justify-content-center">\r
                              Vous n'avez pas de compte ?<a [routerLink]="routes.register" class="link-2 ms-1"> Inscrivez-vous</a>\r
                          </div> -->\r
\r
                          <div class="fs-13 text-center text-muted mt-4">\r
                              <p class="mb-1">Besoin d'aide ? Contactez notre support</p>\r
                              <p class="mb-0">\r
                                  <i class="isax isax-call me-1"></i> +221 77 662 26 82 |\r
                                  <i class="isax isax-sms ms-2 me-1"></i> support@pyramide-e.com\r
                              </p>\r
                          </div>\r
\r
                          <!-- /Login -->\r
\r
                      </div>\r
                  </div>\r
              </div>\r
          </div>\r
      </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/auth/login/login.component.scss */\n.lc-welcome {\n  font-size: 18px;\n  font-weight: 500;\n  color: #1a2e44;\n  margin-bottom: 4px;\n  letter-spacing: 0.01em;\n}\n.lc-title {\n  font-size: 42px;\n  font-weight: 800;\n  line-height: 1.15;\n  margin-bottom: 14px;\n}\n.lc-brand {\n  color: #c9a227;\n  font-weight: 800;\n}\n.lc-lms {\n  color: #1a2e44;\n  font-weight: 700;\n  font-size: 32px;\n  vertical-align: middle;\n  letter-spacing: 0.04em;\n}\n.lc-divider {\n  width: 60px;\n  height: 3px;\n  background: #c9a227;\n  border-radius: 4px;\n  margin-bottom: 14px;\n}\n.lc-divider-thin {\n  width: 40px;\n  height: 2px;\n  background: #c9a227;\n  border-radius: 4px;\n  margin-bottom: 14px;\n}\n.lc-subtitle {\n  font-size: 15px;\n  color: #2c3e50;\n  margin-bottom: 14px;\n}\n.lc-subtitle strong {\n  font-weight: 700;\n}\n.lc-paragraph {\n  font-size: 13px;\n  color: #555e6d;\n  line-height: 1.7;\n  max-width: 480px;\n  margin: 0 auto;\n}\n:host ::ng-deep .login-bg {\n  background: #fdf8f1 !important;\n  position: relative !important;\n  overflow: hidden;\n}\n:host ::ng-deep .login-content .slick-dots .slick-active {\n  background: #c9a227 !important;\n}\n.lc-float-icon {\n  position: absolute;\n  z-index: 2;\n  opacity: 0.35;\n  pointer-events: none;\n}\n.lc-float-book {\n  top: 9%;\n  left: 10%;\n  font-size: 44px;\n  color: #c9a227;\n  opacity: 0.45;\n  transform: rotate(-8deg);\n}\n.lc-float-cap {\n  top: 7%;\n  right: 10%;\n  font-size: 44px;\n  color: #c9a227;\n  opacity: 0.45;\n  transform: rotate(6deg);\n}\n.lc-float-triangle {\n  right: 7%;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 36px;\n  height: 36px;\n  opacity: 0.25;\n}\n.lc-float-triangle::before {\n  content: "";\n  display: block;\n  width: 0;\n  height: 0;\n  border-left: 18px solid transparent;\n  border-right: 18px solid transparent;\n  border-bottom: 32px solid #c9a227;\n}\n.lc-float-dots {\n  top: 4%;\n  left: 3%;\n  width: 80px;\n  height: 80px;\n  opacity: 0.18;\n  background-image:\n    radial-gradient(\n      circle,\n      #c9a227 1.5px,\n      transparent 1.5px);\n  background-size: 12px 12px;\n}\n.login-mode-toggle {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 6px;\n  background: #f3f4f6;\n  border-radius: 10px;\n  padding: 4px;\n}\n.lmt-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  padding: 9px 14px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6b7280;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.lmt-btn i {\n  font-size: 15px;\n}\n.lmt-btn.active {\n  background: #fff;\n  color: #069b8f;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);\n  font-weight: 600;\n}\n.lmt-btn:not(.active):hover {\n  color: #374151;\n}\n.magic-desc {\n  font-size: 13px;\n  color: #6b7280;\n  background: #f0fdf9;\n  border: 1px solid #b2e8e3;\n  border-radius: 8px;\n  padding: 10px 14px;\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  line-height: 1.5;\n}\n.magic-desc i {\n  font-size: 15px;\n  color: #069b8f;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.magic-sent-box {\n  background: #f0fdf9;\n  border: 1px solid #b2e8e3;\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.msb-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #069b8f;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.msb-text {\n  flex: 1;\n}\n.msb-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #047a6f;\n  margin-bottom: 4px;\n}\n.msb-sub {\n  font-size: 12px;\n  color: #374151;\n  line-height: 1.5;\n}\n.msb-resend {\n  font-size: 12px;\n  color: #069b8f;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  white-space: nowrap;\n  font-weight: 500;\n  padding: 4px 0;\n  text-decoration: underline;\n  flex-shrink: 0;\n}\n.msb-resend:hover {\n  color: #047a6f;\n}\n.mv-icon {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.mv-icon--spin {\n  animation: spin 0.8s linear infinite;\n}\n.mv-icon--success {\n  background: #ecfdf5;\n  color: #059669;\n}\n.mv-icon--error {\n  background: #fef2f2;\n  color: #dc2626;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], () => [{ type: DataService }, { type: FormBuilder }, { type: AuthService }, { type: RoleRedirectService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app/auth/login/login.component.ts", lineNumber: 18 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-HPJWMZXX.js.map
