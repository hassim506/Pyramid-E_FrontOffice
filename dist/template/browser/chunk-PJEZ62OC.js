import {
  AuthService
} from "./chunk-REZZRIDN.js";
import "./chunk-FKX6UC3I.js";
import {
  DataService
} from "./chunk-WWUAO4BD.js";
import {
  SlickCarouselComponent,
  SlickCarouselModule,
  SlickItemDirective
} from "./chunk-L4X6OO6M.js";
import {
  routes
} from "./chunk-W6FAPSPW.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-AK2M3J6O.js";
import {
  Router,
  RouterLink
} from "./chunk-AJNKO2CX.js";
import "./chunk-FZP3BRBS.js";
import "./chunk-GSAJL664.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-3IMMP55I.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵtextInterpolate1
} from "./chunk-UPBSS6WA.js";
import "./chunk-4MWRP73S.js";

// src/app/auth/login/login.component.ts
function LoginComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 50)(2, "div", 51);
    \u0275\u0275element(3, "img", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 53)(5, "h3", 54);
    \u0275\u0275text(6);
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "span", 55);
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
function LoginComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 58);
    \u0275\u0275listener("click", function LoginComponent_div_20_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.errorMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.errorMessage, " ");
  }
}
function LoginComponent_div_31_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "L'email est requis");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_31_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Veuillez entrer un email valide");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, LoginComponent_div_31_small_1_Template, 2, 0, "small", 60)(2, LoginComponent_div_31_small_2_Template, 2, 0, "small", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.f["email"].hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.f["email"].hasError("email"));
  }
}
function LoginComponent_div_40_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Le mot de passe est requis");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_40_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Le mot de passe doit contenir au moins 6 caract\xE8res");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, LoginComponent_div_40_small_1_Template, 2, 0, "small", 60)(2, LoginComponent_div_40_small_2_Template, 2, 0, "small", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.f["password"].hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.f["password"].hasError("minlength"));
  }
}
function LoginComponent_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 61);
  }
}
function LoginComponent_i_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 62);
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
  directIndex() {
    this.onSubmit();
  }
  get f() {
    return this.loginForm.controls;
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 75, vars: 18, consts: [[1, "main-wrapper"], [1, "login-content"], [1, "row"], [1, "col-md-6", "login-bg", "d-none", "d-lg-flex"], [1, "login-carousel"], [3, "config"], ["ngxSlickItem", ""], [1, "col-md-6", "login-wrap-bg"], [1, "login-wrapper"], [1, "loginbox"], [1, "w-100"], [1, "d-flex", "align-items-center", "justify-content-between", "login-header"], ["src", "assets/img/logo.png", "alt", "Logo Pyramide", 1, "img-fluid", 2, "width", "250px", "height", "75px"], [1, "link-1", 3, "routerLink"], [1, "fs-32", "fw-bold", "topic"], [1, "text-muted", "mb-4"], ["class", "alert alert-danger alert-dismissible fade show mb-3", "role", "alert", 4, "ngIf"], [1, "mb-3", "pb-3", 3, "ngSubmit", "formGroup"], [1, "mb-3", "position-relative"], [1, "form-label"], [1, "text-danger", "ms-1"], [1, "position-relative"], ["type", "email", "formControlName", "email", "placeholder", "Entrez votre adresse email", 1, "form-control", "form-control-lg"], [1, "isax", "isax-sms", "input-icon", "text-gray-7", "fs-14"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["id", "passwordInput", 1, "position-relative"], ["formControlName", "password", "placeholder", "Entrez votre mot de passe", 1, "pass-inputs", "form-control", "form-control-lg", 3, "type"], ["tabindex", "0", 1, "isax", "toggle-passwords", "fs-14", "cursor-pointer", 3, "click", "keydown.enter", "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "remember-me", "d-flex", "align-items-center"], ["type", "checkbox", "value", "true", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label", "ms-2"], [1, "link-2", 3, "routerLink"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-secondary", "btn-lg", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "isax isax-arrow-right-3 ms-1", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-center", "or", "fs-14", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center", "mb-3"], ["href", "javascript:void(0);", 1, "btn", "btn-light", "me-2"], ["src", "assets/img/icons/google.svg", "alt", "img", 1, "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-light"], ["src", "assets/img/icons/facebook.svg", "alt", "img", 1, "me-2"], [1, "fs-14", "fw-normal", "d-flex", "align-items-center", "justify-content-center"], [1, "link-2", "ms-1", 3, "routerLink"], [1, "fs-13", "text-center", "text-muted", "mt-4"], [1, "mb-1"], [1, "mb-0"], [1, "isax", "isax-call", "me-1"], [1, "isax", "isax-sms", "ms-2", "me-1"], [1, "login-carousel-section", "mb-3"], [1, "login-banner"], ["alt", "Logo", 1, "img-fluid", 3, "src"], [1, "mentor-course", "text-center"], [1, "mb-2"], [1, "text-secondary"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "mb-3"], [1, "isax", "isax-close-circle", "me-2"], ["type", "button", "aria-label", "Fermer", 1, "btn-close", 3, "click"], [1, "invalid-feedback", "d-block"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "isax", "isax-arrow-right-3", "ms-1"]], template: function LoginComponent_Template(rf, ctx) {
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
      \u0275\u0275template(20, LoginComponent_div_20_Template, 4, 1, "div", 16);
      \u0275\u0275elementStart(21, "form", 17);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_21_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(22, "div", 18)(23, "label", 19);
      \u0275\u0275text(24, "Adresse Email");
      \u0275\u0275elementStart(25, "span", 20);
      \u0275\u0275text(26, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 21);
      \u0275\u0275element(28, "input", 22);
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275element(30, "i", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(31, LoginComponent_div_31_Template, 3, 2, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 18)(33, "label", 19);
      \u0275\u0275text(34, "Mot de Passe ");
      \u0275\u0275elementStart(35, "span", 20);
      \u0275\u0275text(36, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 25);
      \u0275\u0275element(38, "input", 26);
      \u0275\u0275elementStart(39, "span", 27);
      \u0275\u0275listener("click", function LoginComponent_Template_span_click_39_listener() {
        return ctx.togglePassword();
      })("keydown.enter", function LoginComponent_Template_span_keydown_enter_39_listener() {
        return ctx.togglePassword();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(40, LoginComponent_div_40_Template, 3, 2, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 28)(42, "div", 29);
      \u0275\u0275element(43, "input", 30);
      \u0275\u0275elementStart(44, "label", 31);
      \u0275\u0275text(45, " Se souvenir de moi ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div")(47, "a", 32);
      \u0275\u0275text(48, " Mot de passe oubli\xE9 ? ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 33)(50, "button", 34);
      \u0275\u0275template(51, LoginComponent_span_51_Template, 1, 0, "span", 35);
      \u0275\u0275text(52);
      \u0275\u0275template(53, LoginComponent_i_53_Template, 1, 0, "i", 36);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "div", 37);
      \u0275\u0275text(55, " Ou ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 38)(57, "a", 39);
      \u0275\u0275element(58, "img", 40);
      \u0275\u0275text(59, "Google");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "a", 41);
      \u0275\u0275element(61, "img", 42);
      \u0275\u0275text(62, "Facebook");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 43);
      \u0275\u0275text(64, " Vous n'avez pas de compte ?");
      \u0275\u0275elementStart(65, "a", 44);
      \u0275\u0275text(66, " Inscrivez-vous");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 45)(68, "p", 46);
      \u0275\u0275text(69, "Besoin d'aide ? Contactez notre support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "p", 47);
      \u0275\u0275element(71, "i", 48);
      \u0275\u0275text(72, " +221 XX XXX XX XX | ");
      \u0275\u0275element(73, "i", 49);
      \u0275\u0275text(74, " support@pyramide.com ");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("config", ctx.authSlider);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.welcomeLogin);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("is-invalid", ctx.f["email"].invalid && ctx.f["email"].touched);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.f["email"].invalid && ctx.f["email"].touched);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("is-invalid", ctx.f["password"].invalid && ctx.f["password"].touched);
      \u0275\u0275property("type", ctx.password ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password ? "isax-eye" : "isax-eye-slash");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f["password"].invalid && ctx.f["password"].touched);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.forgot_password);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.isLoading || ctx.loginForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "Connexion en cours..." : "Se Connecter", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.register);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, RouterLink, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], encapsulation: 2 });
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
                          <p class="text-muted mb-4">Formez vous simplement</p>
                          
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
</div>` }]
  }], () => [{ type: DataService }, { type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/auth/login/login.component.ts", lineNumber: 17 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-PJEZ62OC.js.map
