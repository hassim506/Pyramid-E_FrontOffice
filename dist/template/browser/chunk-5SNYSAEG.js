import {
  DataService
} from "./chunk-QN7QKNG4.js";
import {
  SlickCarouselComponent,
  SlickCarouselModule,
  SlickItemDirective
} from "./chunk-PTDAZEKM.js";
import {
  routes
} from "./chunk-ZAFZNJD2.js";
import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  ɵNgNoValidate
} from "./chunk-YMJPU2MG.js";
import {
  Router,
  RouterLink
} from "./chunk-LFLGGSY5.js";
import "./chunk-VEAR4SGA.js";
import "./chunk-J5AS2QYG.js";
import {
  CommonModule
} from "./chunk-GWJREDC5.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2JCHGHJA.js";
import "./chunk-4MWRP73S.js";

// src/app/auth/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 29)(2, "div", 30);
    \u0275\u0275element(3, "img", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 32)(5, "h3", 33);
    \u0275\u0275text(6);
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "span", 34);
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
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  DataService;
  router;
  routes = routes;
  welcomeLogin = [];
  password = false;
  // Add more as needed
  togglePassword() {
    this.password = !this.password;
  }
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
  constructor(DataService2, router) {
    this.DataService = DataService2;
    this.router = router;
    this.welcomeLogin = this.DataService.welcomeLogin;
  }
  directIndex() {
    this.router.navigate([routes.setPassword]);
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 39, vars: 3, consts: [[1, "main-wrapper"], [1, "login-content"], [1, "row"], [1, "col-md-6", "login-bg", "d-none", "d-lg-flex"], [1, "login-carousel"], [3, "config"], ["ngxSlickItem", ""], [1, "col-md-6", "login-wrap-bg"], [1, "login-wrapper"], [1, "loginbox"], [1, "w-100"], [1, "d-flex", "align-items-center", "justify-content-between", "login-header"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid"], [1, "link-1", 3, "routerLink"], [1, "topic"], [1, "fs-32", "fw-bold", "mb-3"], [1, "fs-14", "fw-normal", "mb-0"], [1, "mb-3", "pb-3", 3, "ngSubmit"], [1, "mb-3", "position-relative"], [1, "form-label"], [1, "text-danger", "ms-1"], [1, "position-relative"], ["type", "email", 1, "form-control", "form-control-lg"], [1, "isax", "isax-sms", "input-icon", "text-gray-7", "fs-14"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-secondary", "btn-lg"], [1, "isax", "isax-arrow-right-3", "ms-1"], [1, "fs-14", "fw-normal", "d-flex", "align-items-center", "justify-content-center"], [1, "link-2", "ms-1", 3, "routerLink"], [1, "login-carousel-section", "mb-3"], [1, "login-banner"], ["alt", "Logo", 1, "img-fluid", 3, "src"], [1, "mentor-course", "text-center"], [1, "mb-2"], [1, "text-secondary"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ngx-slick-carousel", 5);
      \u0275\u0275repeaterCreate(6, ForgotPasswordComponent_For_7_Template, 14, 6, "div", 6, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11);
      \u0275\u0275element(13, "img", 12);
      \u0275\u0275elementStart(14, "a", 13);
      \u0275\u0275text(15, "Back to Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 14)(17, "h1", 15);
      \u0275\u0275text(18, "Forgot Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 16);
      \u0275\u0275text(20, "Enter your email to reset your password.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "form", 17);
      \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_21_listener() {
        return ctx.directIndex();
      });
      \u0275\u0275elementStart(22, "div", 18)(23, "label", 19);
      \u0275\u0275text(24, "Email");
      \u0275\u0275elementStart(25, "span", 20);
      \u0275\u0275text(26, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 21);
      \u0275\u0275element(28, "input", 22);
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275element(30, "i", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 24)(32, "button", 25);
      \u0275\u0275text(33, "Submit");
      \u0275\u0275element(34, "i", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "p", 27);
      \u0275\u0275text(36, " Remember Password?");
      \u0275\u0275elementStart(37, "a", 28);
      \u0275\u0275text(38, " Sign In");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("config", ctx.authSlider);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.welcomeLogin);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(23);
      \u0275\u0275property("routerLink", ctx.routes.login);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, RouterLink, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", imports: [CommonModule, FormsModule, RouterLink, SlickCarouselModule], template: '<div class="main-wrapper">\n  <div class="login-content">\n      <div class="row">\n          <!-- Login Banner -->\n          <div class="col-md-6 login-bg d-none d-lg-flex">\n              <div class="login-carousel">\n                <ngx-slick-carousel [config]="authSlider">\n                  @for (slide of welcomeLogin; track slide) {\n                    <div ngxSlickItem>\n                      <div class="login-carousel-section mb-3">\n                          <div class="login-banner">\n                              <img [src]="slide.img" class="img-fluid" alt="Logo">\n                          </div>\n                          <div class="mentor-course text-center">\n                              <h3 class="mb-2">{{slide.content1}} <br>{{slide.content2}}<span class="text-secondary">{{slide.content3}}</span> {{slide.content4}}</h3>\n                              <p>{{slide.paragraph}}</p>\n                          </div>\n                      </div>\n                  </div>\n                  }\n                </ngx-slick-carousel>\n                  \n                  \n              </div>\n          </div>\n          <!-- /Login Banner -->\n\n          <div class="col-md-6 login-wrap-bg">\n            <!-- Login -->\n            <div class="login-wrapper">\n                <div class="loginbox">\n                    <div class="w-100">\n                        <div class="d-flex align-items-center justify-content-between login-header">\n                            <img src="assets/img/logo.svg" class="img-fluid" alt="Logo">\n                            <a [routerLink]="routes.home" class="link-1">Back to Home</a>\n                        </div>\n                        <div class="topic">\n                            <h1 class="fs-32 fw-bold mb-3">Forgot Password</h1>\n                            <p class="fs-14 fw-normal mb-0">Enter your email to reset your password.</p>\n                        </div>\n                        <form (ngSubmit)="directIndex()" class="mb-3 pb-3">\n                            <div class="mb-3 position-relative">\n                                <label class="form-label">Email<span class="text-danger ms-1">*</span></label>\n                                <div class="position-relative">\n                                    <input type="email" class="form-control form-control-lg">\n                                    <span><i class="isax isax-sms input-icon text-gray-7 fs-14"></i></span>\n                                </div>\n                            </div>\n                            <div class="d-grid">\n                                <button class="btn btn-secondary btn-lg" type="submit">Submit<i class="isax isax-arrow-right-3 ms-1"></i></button>\n                            </div>\n                        </form>\n\n                        <p class="fs-14 fw-normal d-flex align-items-center justify-content-center">\n                            Remember Password?<a [routerLink]="routes.login" class="link-2 ms-1"> Sign In</a>\n                        </p>\n\n                        <!-- /Login -->\n\n                    </div>\n                </div>\n            </div>\n        </div>\n      </div>\n  </div>\n</div>' }]
  }], () => [{ type: DataService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/auth/forgot-password/forgot-password.component.ts", lineNumber: 18 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-5SNYSAEG.js.map
