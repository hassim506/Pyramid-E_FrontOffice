import {
  CommonService
} from "./chunk-UYSR4AJV.js";
import {
  require_aos
} from "./chunk-EOCJYYK5.js";
import {
  routes
} from "./chunk-ZAFZNJD2.js";
import {
  RouterLink
} from "./chunk-LFLGGSY5.js";
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
  ɵɵproperty,
  ɵɵtext
} from "./chunk-2JCHGHJA.js";
import {
  __toESM
} from "./chunk-4MWRP73S.js";

// src/app/features/layouts/footer/footer.component.ts
var Aos = __toESM(require_aos());

// src/app/features/layouts/footer/footer-top-container/footer-top-container.component.ts
var FooterTopContainerComponent = class _FooterTopContainerComponent {
  routes = routes;
  static \u0275fac = function FooterTopContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterTopContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterTopContainerComponent, selectors: [["app-footer-top-container"]], decls: 89, vars: 9, consts: [[1, "container"], [1, "row", "row-gap-4"], [1, "col-lg-4"], [1, "footer-about"], [1, "footer-logo"], ["src", "assets/img/logo-white.png", "alt", "", 2, "max-height", "56px"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "me-2"], ["src", "assets/img/icon/appstore.svg", "alt", ""], ["href", "javascript:void(0);"], ["src", "assets/img/icon/googleplay.svg", "alt", ""], [1, "col-lg-5"], [1, "col-lg-4", "col-md-4"], [1, "footer-widget", "footer-menu"], [1, "footer-title"], [3, "routerLink"], ["href", "javscript:void(0);"], [1, "col-lg-3"], [1, "footer-widget", "footer-contact"], [1, "footer-newsletter"], ["action", "javascript:void(0);"], [1, "subscribe-form"], [1, "isax", "isax-message-text"], ["type", "email", "placeholder", "Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-secondary", "btn-xl", "w-100"]], template: function FooterTopContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "D\xE9veloppez les comp\xE9tences qui font avancer votre entreprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "a", 7);
      \u0275\u0275element(10, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 9);
      \u0275\u0275element(12, "img", 10);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 11)(14, "div", 1)(15, "div", 12)(16, "div", 13)(17, "h5", 14);
      \u0275\u0275text(18, "Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "ul")(20, "li")(21, "a", 15);
      \u0275\u0275text(22, "Formation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "li")(24, "a", 15);
      \u0275\u0275text(25, "Enroll Course");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li")(27, "a", 16);
      \u0275\u0275text(28, "Orders");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "li")(30, "a", 15);
      \u0275\u0275text(31, "Payments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "li")(33, "a", 15);
      \u0275\u0275text(34, "Blogs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(35, "div", 12)(36, "div", 13)(37, "h5", 14);
      \u0275\u0275text(38, "About");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "ul")(40, "li")(41, "a", 15);
      \u0275\u0275text(42, "Categories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "li")(44, "a", 15);
      \u0275\u0275text(45, "Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "li")(47, "a", 15);
      \u0275\u0275text(48, "About Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "li")(50, "a", 15);
      \u0275\u0275text(51, "Faq");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 15);
      \u0275\u0275text(54, "Contacts");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(55, "div", 12)(56, "div", 13)(57, "h5", 14);
      \u0275\u0275text(58, "Useful Links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "ul")(60, "li")(61, "a", 9);
      \u0275\u0275text(62, "Our values");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "li")(64, "a", 9);
      \u0275\u0275text(65, "Our advisory board");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "li")(67, "a", 9);
      \u0275\u0275text(68, "Our partners");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "li")(70, "a", 9);
      \u0275\u0275text(71, "Become a partner");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "li")(73, "a", 9);
      \u0275\u0275text(74, "Work at Future Learn");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(75, "div", 17)(76, "div", 18)(77, "h5", 14);
      \u0275\u0275text(78, "Subscribe Newsletter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 19)(80, "p");
      \u0275\u0275text(81, "Sign up to get updates & news.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "form", 20)(83, "div", 21)(84, "span");
      \u0275\u0275element(85, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275element(86, "input", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "button", 24);
      \u0275\u0275text(88, "Subscribe");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275property("routerLink", ctx.routes.courseGrid);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.addCourse);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.page_pricing_plan);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.courseList);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.aboutUs);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.page_faq);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.contactUs);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterTopContainerComponent, [{
    type: Component,
    args: [{ selector: "app-footer-top-container", imports: [CommonModule, RouterLink], template: '<div class="container">\n    <div class="row row-gap-4">\n        <div class="col-lg-4">\n            <div class="footer-about">\n                <div class="footer-logo">\n                    <img src="assets/img/logo-white.png" alt="" style="max-height:56px">\n                </div>\n                <p>D\xE9veloppez les comp\xE9tences qui font avancer votre entreprise</p>\n                <div class="d-flex align-items-center">\n                    <a href="javascript:void(0);" class="me-2"><img src="assets/img/icon/appstore.svg" alt=""></a>\n                    <a href="javascript:void(0);"><img src="assets/img/icon/googleplay.svg" alt=""></a>\n                </div>\n            </div>\n        </div>\n        <div class="col-lg-5">\n            <div class="row row-gap-4">\n                <div class="col-lg-4 col-md-4">\n                    <div class="footer-widget footer-menu">\n                        <h5 class="footer-title">Support</h5>\n                        <ul>\n                            <li><a [routerLink]="routes.courseGrid">Formation</a></li>\n                            <li><a [routerLink]="routes.addCourse">Enroll Course</a></li>\n                            <li><a href="javscript:void(0);">Orders</a></li>\n                            <li><a [routerLink]="routes.page_pricing_plan">Payments</a></li>\n                            <li><a [routerLink]="routes.blog_grid">Blogs</a></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class="col-lg-4 col-md-4">\n                    <div class="footer-widget footer-menu">\n                        <h5 class="footer-title">About</h5>\n                        <ul>\n                            <li><a [routerLink]="routes.courseCategory">Categories</a></li>\n                            <li><a [routerLink]="routes.courseList">Courses</a></li>\n                            <li><a [routerLink]="routes.aboutUs">About Us</a></li>\n                            <li><a [routerLink]="routes.page_faq">Faq</a></li>\n                            <li><a [routerLink]="routes.contactUs">Contacts</a></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class="col-lg-4 col-md-4">\n                    <div class="footer-widget footer-menu">\n                        <h5 class="footer-title">Useful Links</h5>\n                        <ul>\n                            <li><a href="javascript:void(0);">Our values</a></li>\n                            <li><a href="javascript:void(0);">Our advisory board</a></li>\n                            <li><a href="javascript:void(0);">Our partners</a></li>\n                            <li><a href="javascript:void(0);">Become a partner</a></li>\n                            <li><a href="javascript:void(0);">Work at Future Learn</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>							\n        <div class="col-lg-3">\n            <div class="footer-widget footer-contact">\n                <h5 class="footer-title">Subscribe Newsletter</h5>\n                <div class="footer-newsletter">\n                    <p>Sign up to get updates & news.</p>							\n                    <form action="javascript:void(0);">\n                        <div class="subscribe-form">\n                            <span>\n                                <i class="isax isax-message-text"></i>\n                            </span>\n                            <input type="email" class="form-control" placeholder="Email Address">\n                        </div>\n                        <button type="submit" class="btn btn-secondary btn-xl w-100">Subscribe</button>		\n                    </form>	\n                </div>	\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterTopContainerComponent, { className: "FooterTopContainerComponent", filePath: "src/app/features/layouts/footer/footer-top-container/footer-top-container.component.ts", lineNumber: 12 });
})();

// src/app/features/layouts/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  common;
  base = "";
  routes = routes;
  constructor(common) {
    this.common = common;
    this.common.base.subscribe((res) => {
      this.base = res;
    });
  }
  ngOnInit() {
    Aos.init({
      duration: 1500,
      once: true
    });
  }
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)(\u0275\u0275directiveInject(CommonService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 41, vars: 2, consts: [[1, "footer", "footer-one"], ["data-aos", "fade-up", "data-aos-duration", "1500", 1, "footer-top", "aos"], [1, "footer-bottom"], [1, "container"], [1, "row", "row-gap-2"], [1, "col-lg-5"], [1, "text-center", "text-lg-start"], [1, "text-secondary"], [1, "col-lg-4"], [1, "d-flex", "align-items-center", "justify-content-center", "footer-link"], [3, "routerLink"], [1, "col-lg-3"], [1, "social-icon"], ["href", "javascript:void(0);"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-x-twitter"], [1, "fa-brands", "fa-youtube"], [1, "fa-brands", "fa-linkedin"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-footer-top-container");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
      \u0275\u0275text(8, " <<<<<<< HEAD ");
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, "Copyright 2025 \xA9 ");
      \u0275\u0275elementStart(11, "span", 7);
      \u0275\u0275text(12, "Pyramid-E");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, ". All right reserved.");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, "\n======= ");
      \u0275\u0275elementStart(15, "p");
      \u0275\u0275text(16, "Copyright 2025 \xA9 ");
      \u0275\u0275elementStart(17, "span", 7);
      \u0275\u0275text(18, "Pyramide-e");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, ". All right reserved.");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, "\n>>>>>>> Master ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 8)(22, "ul", 9)(23, "li")(24, "a", 10);
      \u0275\u0275text(25, "Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li")(27, "a", 10);
      \u0275\u0275text(28, "Privacy Policy");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 11)(30, "div", 12)(31, "a", 13);
      \u0275\u0275element(32, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "a", 13);
      \u0275\u0275element(34, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "a", 13);
      \u0275\u0275element(36, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "a", 13);
      \u0275\u0275element(38, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "a", 13);
      \u0275\u0275element(40, "i", 18);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(24);
      \u0275\u0275property("routerLink", ctx.routes.page_term_condition);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.page_privacy_policy);
    }
  }, dependencies: [CommonModule, RouterLink, FooterTopContainerComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", imports: [CommonModule, RouterLink, FooterTopContainerComponent], template: '<!-- Footer -->\r\n<footer class="footer footer-one">\r\n\r\n  <!-- Footer Top -->\r\n\r\n    <div class="footer-top aos" data-aos="fade-up" data-aos-duration="1500">\r\n      <app-footer-top-container></app-footer-top-container>\r\n    </div>\r\n\r\n\r\n  <!-- /Footer Top -->\r\n\r\n  <!-- Footer Bottom -->\r\n  <div class="footer-bottom">\r\n    <div class="container">\r\n      <div class="row row-gap-2">\r\n        <div class="col-lg-5">\r\n          <div class="text-center text-lg-start">									\r\n<<<<<<< HEAD\r\n            <p>Copyright 2025 \xA9 <span class="text-secondary">Pyramid-E</span>. All right reserved.</p>\r\n=======\r\n            <p>Copyright 2025 \xA9 <span class="text-secondary">Pyramide-e</span>. All right reserved.</p>\r\n>>>>>>> Master\r\n          </div>\r\n        </div>\r\n        <div class="col-lg-4">\r\n          <ul class="d-flex align-items-center justify-content-center footer-link">\r\n            <li><a [routerLink]="routes.page_term_condition">Terms & Conditions</a></li>\r\n            <li><a [routerLink]="routes.page_privacy_policy">Privacy Policy</a></li>\r\n          </ul>\r\n        </div>\r\n        <div class="col-lg-3">\r\n          <div class="social-icon">\r\n            <a href="javascript:void(0);"><i class="fa-brands fa-facebook-f"></i></a>\r\n            <a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a>\r\n            <a href="javascript:void(0);"><i class="fa-brands fa-x-twitter"></i></a>\r\n            <a href="javascript:void(0);"><i class="fa-brands fa-youtube"></i></a>\r\n            <a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- /Footer Bottom -->\r\n\r\n</footer>\r\n<!-- /Footer -->\r\n' }]
  }], () => [{ type: CommonService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/features/layouts/footer/footer.component.ts", lineNumber: 15 });
})();

export {
  FooterComponent
};
//# sourceMappingURL=chunk-QW6HHHYN.js.map
