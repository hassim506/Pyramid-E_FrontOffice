import {
  CapitalizeWordsPipe
} from "./chunk-XYZG5U44.js";
import {
  CommonService
} from "./chunk-7KRE5D5Y.js";
import {
  routes
} from "./chunk-F53JZPBU.js";
import {
  RouterLink,
  RouterOutlet
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule
} from "./chunk-5DIP3EXV.js";
import "./chunk-SS7FF3CJ.js";
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-VTSSTHJF.js";
import "./chunk-4MWRP73S.js";

// src/app/features/courses/courses.component.ts
var CoursesComponent = class _CoursesComponent {
  common;
  routes = routes;
  base = "";
  page = "";
  last = "";
  constructor(common) {
    this.common = common;
    this.common.base.subscribe((res) => {
      this.base = res;
    });
    this.common.page.subscribe((res) => {
      this.page = res;
    });
    this.common.last.subscribe((res) => {
      this.last = res;
    });
  }
  static \u0275fac = function CoursesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CoursesComponent)(\u0275\u0275directiveInject(CommonService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoursesComponent, selectors: [["app-courses"]], decls: 36, vars: 10, consts: [[1, "breadcrumb-bar", "text-center", 3, "hidden"], [1, "container"], [1, "row"], [1, "col-md-12", "col-12"], [1, "breadcrumb-title", "mb-2"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "justify-content-center", "mb-0"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "footer"], [1, "footer-bg"], ["src", "assets/img/bg/footer-bg-01.png", "alt", "", 1, "footer-bg-1"], ["src", "assets/img/bg/footer-bg-02.png", "alt", "", 1, "footer-bg-2"], [1, "footer-bottom"], [1, "row", "row-gap-2"], [1, "col-md-6"], [1, "text-center", "text-md-start"], [1, "text-white"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-md-end", "footer-link"]], template: function CoursesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "capitalizeWords");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "nav", 5)(8, "ol", 6)(9, "li", 7)(10, "a", 8);
      \u0275\u0275text(11, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li", 9);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "capitalizeWords");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275element(15, "router-outlet");
      \u0275\u0275elementStart(16, "footer", 10)(17, "div", 11);
      \u0275\u0275element(18, "img", 12)(19, "img", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 14)(21, "div", 1)(22, "div", 15)(23, "div", 16)(24, "div", 17)(25, "p", 18);
      \u0275\u0275text(26, "Copyright \xA9 2025 DreamsLMS. All rights reserved.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 16)(28, "div")(29, "ul", 19)(30, "li")(31, "a", 8);
      \u0275\u0275text(32, "Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "li")(34, "a", 8);
      \u0275\u0275text(35, "Privacy Policy");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("hidden", ctx.page === "course-details-2");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, ctx.page));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 8, ctx.page));
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.page_term_condition);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.page_privacy_policy);
    }
  }, dependencies: [CommonModule, RouterOutlet, RouterLink, CapitalizeWordsPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CoursesComponent, [{
    type: Component,
    args: [{ selector: "app-courses", standalone: true, imports: [CommonModule, RouterOutlet, RouterLink, CapitalizeWordsPipe], template: `\r
<!-- Breadcrumb -->\r
<div [hidden]="page==='course-details-2'" class="breadcrumb-bar text-center">\r
    <div class="container">\r
        <div class="row">\r
            <div class="col-md-12 col-12">\r
                <h2 class="breadcrumb-title mb-2">{{page | capitalizeWords}}</h2>\r
                <nav aria-label="breadcrumb">\r
                    <ol class="breadcrumb justify-content-center mb-0">\r
                        <li class="breadcrumb-item"><a [routerLink]="routes.home">Home</a></li>\r
                        <li class="breadcrumb-item active" aria-current="page">{{page | capitalizeWords}}</li>\r
                    </ol>\r
                </nav>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
<!-- /Breadcrumb -->\r
<router-outlet></router-outlet>\r
\r
\r
<!-- Footer -->\r
<footer class="footer">\r
    <div class="footer-bg">\r
        <img src="assets/img/bg/footer-bg-01.png" class="footer-bg-1" alt="">\r
        <img src="assets/img/bg/footer-bg-02.png" class="footer-bg-2" alt="">\r
    </div>\r
    <!-- <div class="footer-top">\r
        <div class="container">\r
            <div class="row row-gap-4">\r
                <div class="col-lg-4">\r
                    <div class="footer-about">\r
                        <div class="footer-logo">\r
                            <img src="assets/img/logo.png" alt="" style="max-height:56px">\r
                        </div>\r
                        <p>Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.</p>\r
                        <div class="d-flex align-items-center">\r
                            <a href="javascript:void(0);" class="me-2"><img src="assets/img/icon/appstore.svg" alt=""></a>\r
                            <a href="javascript:void(0);"><img src="assets/img/icon/googleplay.svg" alt=""></a>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="col-lg-8">\r
                    <div class="row row-gap-4">\r
                        <div class="col-lg-3">\r
                            <div class="footer-widget footer-menu">\r
                                <h5 class="footer-title">Pour Formateur</h5>\r
                                <ul>\r
                                    <li><a [routerLink]="routes.courseGrid">Search Mentors</a></li>\r
                                    <li><a [routerLink]="routes.login">Login</a></li>\r
                                    <li><a [routerLink]="routes.register">Register</a></li>\r
                                    <li><a [routerLink]="routes.courseList">Booking</a></li>\r
                                    <li><a [routerLink]="routes.students_Dashboard">Students Dashboard</a></li>\r
                                </ul>\r
                            </div>\r
                        </div>\r
                        <div class="col-lg-3">\r
                            <div class="footer-widget footer-menu">\r
                                <h5 class="footer-title">Pour employ\xE9</h5>\r
                                <ul>\r
                                    <li><a href="javascript:void(0);">Appointments</a></li>\r
                                    <li><a [routerLink]="routes.instructorMessage">Chat</a></li>\r
                                    <li><a [routerLink]="routes.login">Login</a></li>\r
                                    <li><a [routerLink]="routes.register">Register</a></li>\r
                                    <li><a [routerLink]="routes.instructor_dashboard">Instructor Dashboard</a></li>\r
                                </ul>\r
                            </div>\r
                        </div>\r
                        <div class="col-lg-6">\r
                            <div class="footer-widget footer-contact">\r
                                <h5 class="footer-title">Newsletter</h5>\r
                                <div class="subscribe-input">\r
                                    <form action="javascript:void(0);">\r
                                        <input type="email" class="form-control" placeholder="Enter your Email Address">\r
                                        <button type="submit" class="btn btn-primary btn-sm inline-flex align-items-center"><i class="isax isax-send-2 me-1"></i>Subscribe</button>\r
                                    </form>\r
                                </div>\r
                                <div class="footer-contact-info">\r
                                    <div class="footer-address d-flex align-items-center">\r
                                        <img src="assets/img/icon/icon-20.svg" alt="Img" class="img-fluid me-2">\r
                                        <p> 3556  Beech Street, San Francisco,<br> California, CA 94108 </p>\r
                                    </div>\r
                                    <div class="footer-address d-flex align-items-center">\r
                                        <img src="assets/img/icon/icon-19.svg" alt="Img" class="img-fluid me-2">\r
                                        <p>dreamslms&#64;example.com</p>\r
                                    </div>\r
                                    <div class="footer-address d-flex align-items-center">\r
                                        <img src="assets/img/icon/icon-21.svg" alt="Img" class="img-fluid me-2">\r
                                        <p>+19 123-456-7890</p>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div> -->\r
    <div class="footer-bottom">\r
        <div class="container">\r
            <div class="row row-gap-2">\r
                <div class="col-md-6">\r
                    <div class="text-center text-md-start">\r
                        <p class="text-white">Copyright &copy; 2025 DreamsLMS. All rights reserved.</p>\r
                    </div>\r
                </div>\r
                <div class="col-md-6">\r
                    <div>\r
                        <ul class="d-flex align-items-center justify-content-center justify-content-md-end footer-link">\r
                            <li><a [routerLink]="routes.page_term_condition">Terms & Conditions</a></li>\r
                            <li><a [routerLink]="routes.page_privacy_policy">Privacy Policy</a></li>\r
                        </ul>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</footer>\r
<!-- /Footer -->\r
` }]
  }], () => [{ type: CommonService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoursesComponent, { className: "CoursesComponent", filePath: "app/features/courses/courses.component.ts", lineNumber: 15 });
})();
export {
  CoursesComponent
};
//# sourceMappingURL=chunk-DJBSN2HV.js.map
