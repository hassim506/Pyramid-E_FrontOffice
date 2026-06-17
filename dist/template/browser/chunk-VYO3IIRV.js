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
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
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
  NgIf
} from "./chunk-MNWNTO2T.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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

// src/app/auth/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_For_7_Template(rf, ctx) {
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
function ForgotPasswordComponent_ng_container_16_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.errorMsg, " ");
  }
}
function ForgotPasswordComponent_ng_container_16_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 40);
  }
}
function ForgotPasswordComponent_ng_container_16_i_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 41);
  }
}
function ForgotPasswordComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h1", 24);
    \u0275\u0275text(2, "Mot de passe oubli\xE9 ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 25);
    \u0275\u0275text(4, " Entrez votre adresse e-mail et nous vous enverrons un lien pour r\xE9initialiser votre mot de passe. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ForgotPasswordComponent_ng_container_16_div_5_Template, 3, 1, "div", 26);
    \u0275\u0275elementStart(6, "form", 27);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_ng_container_16_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submit());
    });
    \u0275\u0275elementStart(7, "div", 28)(8, "label", 29);
    \u0275\u0275text(9, "Adresse Email");
    \u0275\u0275elementStart(10, "span", 30);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 31)(13, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_ng_container_16_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.email, $event) || (ctx_r2.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ForgotPasswordComponent_ng_container_16_Template_input_keydown_enter_13_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275element(15, "i", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 34)(17, "button", 35);
    \u0275\u0275template(18, ForgotPasswordComponent_ng_container_16_span_18_Template, 1, 0, "span", 36)(19, ForgotPasswordComponent_ng_container_16_i_19_Template, 1, 0, "i", 37);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.errorMsg);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.email);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isLoading ? "Envoi en cours\u2026" : "Envoyer le lien de r\xE9initialisation", " ");
  }
}
function ForgotPasswordComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 42)(2, "div", 43);
    \u0275\u0275element(3, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h5", 45);
    \u0275\u0275text(5, "E-mail envoy\xE9 !");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 46);
    \u0275\u0275text(7, " Si un compte est associ\xE9 \xE0 ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, ",");
    \u0275\u0275element(11, "br");
    \u0275\u0275text(12, " vous recevrez un lien de r\xE9initialisation sous peu.");
    \u0275\u0275element(13, "br");
    \u0275\u0275text(14, " Le lien est valable ");
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16, "60 minutes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, ". ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 34)(19, "button", 47);
    \u0275\u0275listener("click", function ForgotPasswordComponent_ng_container_17_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.sent = false;
      return \u0275\u0275resetView(ctx_r2.email = "");
    });
    \u0275\u0275element(20, "i", 48);
    \u0275\u0275text(21, "Utiliser une autre adresse ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.email);
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  dataService;
  authService;
  router;
  routes = routes;
  welcomeLogin = [];
  email = "";
  isLoading = false;
  sent = false;
  errorMsg = "";
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
  constructor(dataService, authService, router) {
    this.dataService = dataService;
    this.authService = authService;
    this.router = router;
    this.welcomeLogin = this.dataService.welcomeLogin;
  }
  submit() {
    this.errorMsg = "";
    if (!this.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      this.errorMsg = "Veuillez entrer une adresse e-mail valide.";
      return;
    }
    this.isLoading = true;
    this.authService.sendPasswordResetLink(this.email).subscribe({
      next: () => {
        this.isLoading = false;
        this.sent = true;
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMsg = err?.message || "Une erreur est survenue.";
      }
    });
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 22, vars: 5, consts: [[1, "main-wrapper"], [1, "login-content"], [1, "row"], [1, "col-md-6", "login-bg", "d-none", "d-lg-flex"], [1, "login-carousel"], [3, "config"], ["ngxSlickItem", ""], [1, "col-md-6", "login-wrap-bg"], [1, "login-wrapper"], [1, "loginbox"], [1, "w-100"], [1, "d-flex", "align-items-center", "justify-content-between", "login-header"], ["src", "assets/img/logo.png", "alt", "Logo Pyramide", 1, "img-fluid", "fp-logo"], [1, "link-1", 3, "routerLink"], [4, "ngIf"], [1, "fs-14", "fw-normal", "d-flex", "align-items-center", "justify-content-center"], [1, "link-2", "ms-1", 3, "routerLink"], [1, "isax", "isax-arrow-left-2", "me-1"], [1, "login-carousel-section", "mb-3"], [1, "login-banner"], ["alt", "Logo", 1, "img-fluid", 3, "src"], [1, "mentor-course", "text-center"], [1, "mb-2"], [1, "text-secondary"], [1, "fs-32", "fw-bold", "topic"], [1, "text-muted", "mb-4"], ["class", "alert alert-danger mb-3", 4, "ngIf"], [1, "mb-3", "pb-3", 3, "ngSubmit"], [1, "mb-4", "position-relative"], [1, "form-label"], [1, "text-danger", "ms-1"], [1, "position-relative"], ["type", "email", "name", "email", "placeholder", "votre@email.com", 1, "form-control", "form-control-lg", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "isax", "isax-sms", "input-icon", "text-gray-7", "fs-14"], [1, "d-grid", "mb-3"], ["type", "submit", 1, "btn", "btn-secondary", "btn-lg", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "isax isax-send-2 me-2", 4, "ngIf"], [1, "alert", "alert-danger", "mb-3"], [1, "isax", "isax-close-circle", "me-2"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "isax", "isax-send-2", "me-2"], [1, "fp-sent-box", "mb-4"], [1, "fps-icon"], [1, "isax", "isax-sms-star"], [1, "fps-title"], [1, "fps-sub"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-lg", 3, "click"], [1, "isax", "isax-refresh", "me-2"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ngx-slick-carousel", 5);
      \u0275\u0275repeaterCreate(6, ForgotPasswordComponent_For_7_Template, 14, 6, "div", 6, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11);
      \u0275\u0275element(13, "img", 12);
      \u0275\u0275elementStart(14, "a", 13);
      \u0275\u0275text(15, "Retour \xE0 l'accueil");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, ForgotPasswordComponent_ng_container_16_Template, 21, 6, "ng-container", 14)(17, ForgotPasswordComponent_ng_container_17_Template, 22, 1, "ng-container", 14);
      \u0275\u0275elementStart(18, "p", 15)(19, "a", 16);
      \u0275\u0275element(20, "i", 17);
      \u0275\u0275text(21, "Retour \xE0 la connexion ");
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
      \u0275\u0275property("ngIf", !ctx.sent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.sent);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.login);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], styles: ["\n\n.fp-logo[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 75px;\n}\n.fp-sent-box[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 20px;\n  background: #f0fdf9;\n  border: 1px solid #b2e8e3;\n  border-radius: 12px;\n}\n.fps-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #069b8f;\n  color: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  margin-bottom: 16px;\n}\n.fps-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #047a6f;\n  margin-bottom: 10px;\n}\n.fps-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #374151;\n  line-height: 1.6;\n  margin: 0;\n}\n/*# sourceMappingURL=forgot-password.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-forgot-password", imports: [CommonModule, FormsModule, RouterLink, SlickCarouselModule], template: `<div class="main-wrapper">\r
  <div class="login-content">\r
    <div class="row">\r
\r
      <!-- Banni\xE8re -->\r
      <div class="col-md-6 login-bg d-none d-lg-flex">\r
        <div class="login-carousel">\r
          <ngx-slick-carousel [config]="authSlider">\r
            @for (slide of welcomeLogin; track slide) {\r
              <div ngxSlickItem>\r
                <div class="login-carousel-section mb-3">\r
                  <div class="login-banner">\r
                    <img [src]="slide.img" class="img-fluid" alt="Logo">\r
                  </div>\r
                  <div class="mentor-course text-center">\r
                    <h3 class="mb-2">{{slide.content1}} <br>{{slide.content2}}<span class="text-secondary">{{slide.content3}}</span> {{slide.content4}}</h3>\r
                    <p>{{slide.paragraph}}</p>\r
                  </div>\r
                </div>\r
              </div>\r
            }\r
          </ngx-slick-carousel>\r
        </div>\r
      </div>\r
\r
      <div class="col-md-6 login-wrap-bg">\r
        <div class="login-wrapper">\r
          <div class="loginbox">\r
            <div class="w-100">\r
\r
              <div class="d-flex align-items-center justify-content-between login-header">\r
                <img src="assets/img/logo.png" class="img-fluid fp-logo" alt="Logo Pyramide">\r
                <a [routerLink]="routes.home" class="link-1">Retour \xE0 l'accueil</a>\r
              </div>\r
\r
              <!-- \u2500\u2500 \xC9tat : formulaire \u2500\u2500 -->\r
              <ng-container *ngIf="!sent">\r
\r
                <h1 class="fs-32 fw-bold topic">Mot de passe oubli\xE9 ?</h1>\r
                <p class="text-muted mb-4">\r
                  Entrez votre adresse e-mail et nous vous enverrons un lien pour r\xE9initialiser votre mot de passe.\r
                </p>\r
\r
                <div *ngIf="errorMsg" class="alert alert-danger mb-3">\r
                  <i class="isax isax-close-circle me-2"></i>{{ errorMsg }}\r
                </div>\r
\r
                <form (ngSubmit)="submit()" class="mb-3 pb-3">\r
                  <div class="mb-4 position-relative">\r
                    <label class="form-label">Adresse Email<span class="text-danger ms-1">*</span></label>\r
                    <div class="position-relative">\r
                      <input\r
                        type="email"\r
                        class="form-control form-control-lg"\r
                        [(ngModel)]="email"\r
                        name="email"\r
                        placeholder="votre@email.com"\r
                        (keydown.enter)="submit()">\r
                      <span><i class="isax isax-sms input-icon text-gray-7 fs-14"></i></span>\r
                    </div>\r
                  </div>\r
\r
                  <div class="d-grid mb-3">\r
                    <button class="btn btn-secondary btn-lg" type="submit" [disabled]="isLoading">\r
                      <span *ngIf="isLoading" class="spinner-border spinner-border-sm me-2"></span>\r
                      <i *ngIf="!isLoading" class="isax isax-send-2 me-2"></i>\r
                      {{ isLoading ? 'Envoi en cours\u2026' : 'Envoyer le lien de r\xE9initialisation' }}\r
                    </button>\r
                  </div>\r
                </form>\r
\r
              </ng-container>\r
\r
              <!-- \u2500\u2500 \xC9tat : e-mail envoy\xE9 \u2500\u2500 -->\r
              <ng-container *ngIf="sent">\r
\r
                <div class="fp-sent-box mb-4">\r
                  <div class="fps-icon"><i class="isax isax-sms-star"></i></div>\r
                  <h5 class="fps-title">E-mail envoy\xE9 !</h5>\r
                  <p class="fps-sub">\r
                    Si un compte est associ\xE9 \xE0 <strong>{{ email }}</strong>,<br>\r
                    vous recevrez un lien de r\xE9initialisation sous peu.<br>\r
                    Le lien est valable <strong>60 minutes</strong>.\r
                  </p>\r
                </div>\r
\r
                <div class="d-grid mb-3">\r
                  <button type="button" class="btn btn-outline-secondary btn-lg"\r
                          (click)="sent = false; email = ''">\r
                    <i class="isax isax-refresh me-2"></i>Utiliser une autre adresse\r
                  </button>\r
                </div>\r
\r
              </ng-container>\r
\r
              <p class="fs-14 fw-normal d-flex align-items-center justify-content-center">\r
                <a [routerLink]="routes.login" class="link-2 ms-1">\r
                  <i class="isax isax-arrow-left-2 me-1"></i>Retour \xE0 la connexion\r
                </a>\r
              </p>\r
\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/auth/forgot-password/forgot-password.component.scss */\n.fp-logo {\n  width: 250px;\n  height: 75px;\n}\n.fp-sent-box {\n  text-align: center;\n  padding: 32px 20px;\n  background: #f0fdf9;\n  border: 1px solid #b2e8e3;\n  border-radius: 12px;\n}\n.fps-icon {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #069b8f;\n  color: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  margin-bottom: 16px;\n}\n.fps-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #047a6f;\n  margin-bottom: 10px;\n}\n.fps-sub {\n  font-size: 13px;\n  color: #374151;\n  line-height: 1.6;\n  margin: 0;\n}\n/*# sourceMappingURL=forgot-password.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "app/auth/forgot-password/forgot-password.component.ts", lineNumber: 18 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-VYO3IIRV.js.map
