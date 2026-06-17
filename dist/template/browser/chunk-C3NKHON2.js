import {
  routes
} from "./chunk-YJLHMFCU.js";
import {
  RouterLink
} from "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
import {
  CommonModule
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
  ɵɵproperty,
  ɵɵtext
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/student/student-reviews/student-reviews.component.ts
var StudentReviewsComponent = class _StudentReviewsComponent {
  routes = routes;
  static \u0275fac = function StudentReviewsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentReviewsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentReviewsComponent, selectors: [["app-student-reviews"]], decls: 205, vars: 8, consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "border", "mb-3", "p-3", "rounded-2"], [1, "d-flex", "flex-wrap", "gap-1", "align-items-center", "justify-content-between", "mb-3"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-lg", "avatar-rounded", "me-2"], [3, "routerLink"], ["src", "assets/img/user/user-02.jpg", "alt", "img"], [1, "reviewer-info"], [1, "mb-1"], [1, "fs-14"], [1, "rating"], [1, "fa-solid", "fa-star", "filled"], [1, "fa-solid", "fa-star"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_review", 1, "d-inline-flex", "align-items-center", "me-3", "edit-review"], [1, "isax", "isax-edit-2", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "d-inline-flex", "align-items-center", "delete-review"], [1, "isax", "isax-trash", "me-1"], [1, "bg-light", "border", "p-3", "rounded-2"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "border", "p-3", "rounded-2"], [1, "row", "align-items-center", "mt-3"], [1, "col-md-2"], [1, "pagination-text"], [1, "col-md-10"], [1, "pagination", "lms-page", "justify-content-center", "justify-content-md-end", "mt-2", "mt-md-0"], [1, "page-item", "prev"], ["href", "javascript:void(0)", "tabindex", "-1", 1, "page-link"], [1, "fas", "fa-angle-left"], [1, "page-item", "first-page", "active"], ["href", "javascript:void(0)", 1, "page-link"], [1, "page-item"], [1, "page-item", "next"], [1, "fas", "fa-angle-right"], ["id", "edit_review", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], [1, "modal-body", "pb-0"], [1, "form-label", "fs-14"], [1, "text-danger"], [1, "selection-wrap"], [1, "d-inline-block"], [1, "rating-selction"], ["type", "radio", "name", "rating", "value", "5", "id", "rating5", "checked", ""], ["for", "rating5"], ["type", "radio", "name", "rating", "value", "4", "id", "rating4", "checked", ""], ["for", "rating4"], ["type", "radio", "name", "rating", "value", "3", "id", "rating3", "checked", ""], ["for", "rating3"], ["type", "radio", "name", "rating", "value", "2", "id", "rating2"], ["for", "rating2"], ["type", "radio", "name", "rating", "value", "1", "id", "rating1"], ["for", "rating1"], ["rows", "3", 1, "form-control", "lh-base"], [1, "modal-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "bg-gray-100", "rounded-pill", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-secondary", "rounded-pill"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-body", "text-center", "custom-modal-body"], [1, "avatar", "avatar-lg", "bg-secondary-transparent", "rounded-circle", "mb-2"], [1, "isax", "isax-trash", "fs-24", "text-danger"], [1, "mb-2"], [1, "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill"]], template: function StudentReviewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5");
      \u0275\u0275text(2, "Forum");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "a", 5);
      \u0275\u0275element(8, "img", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "h6", 8)(11, "a", 5);
      \u0275\u0275text(12, "Ronald Richard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "p", 9);
      \u0275\u0275text(14, "6 months ago");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 10);
      \u0275\u0275element(16, "i", 11)(17, "i", 11)(18, "i", 11)(19, "i", 11)(20, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 13)(22, "p");
      \u0275\u0275text(23, "This is the second Photoshop course I have completed with Nancy Duarte. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Nancy Duarte. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 14)(25, "div", 3)(26, "a", 15);
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275text(28, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "a", 17);
      \u0275\u0275element(30, "i", 18);
      \u0275\u0275text(31, "Delete");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 19)(33, "h6", 8);
      \u0275\u0275text(34, "Reponse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p", 9);
      \u0275\u0275text(36, "As a learner who has navigated through various online platforms, the sophistication and user-centric design of this website set a new");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 1)(38, "div", 2)(39, "div", 3)(40, "div", 4)(41, "a", 5);
      \u0275\u0275element(42, "img", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 7)(44, "h6", 8)(45, "a", 5);
      \u0275\u0275text(46, "Ronald Richard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "p", 9);
      \u0275\u0275text(48, "9 months ago");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 10);
      \u0275\u0275element(50, "i", 11)(51, "i", 11)(52, "i", 11)(53, "i", 11)(54, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 13)(56, "p");
      \u0275\u0275text(57, "I've been using this LMS for several months for my online courses, and it's been a game-changer. The interface is incredibly user-friendly, making it easy for both instructors and students to navigate through the courses. The variety of tools available for creating interactive and engaging content has significantly enhanced the learning experience. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 20)(59, "div", 3)(60, "a", 15);
      \u0275\u0275element(61, "i", 16);
      \u0275\u0275text(62, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "a", 17);
      \u0275\u0275element(64, "i", 18);
      \u0275\u0275text(65, "Delete");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "div", 1)(67, "div", 2)(68, "div", 3)(69, "div", 4)(70, "a", 5);
      \u0275\u0275element(71, "img", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 7)(73, "h6", 8)(74, "a", 5);
      \u0275\u0275text(75, "Ronald Richard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "p", 9);
      \u0275\u0275text(77, "9 months ago");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "div", 10);
      \u0275\u0275element(79, "i", 11)(80, "i", 11)(81, "i", 11)(82, "i", 11)(83, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div", 13)(85, "p");
      \u0275\u0275text(86, "Any time I've had a question or encountered a minor issue, the customer support team has been quick to respond and incredibly helpful. Moreover, the reliability of this LMS has impressed me\u2014downtime is nearly non-existent, ensuring that students have access to their courses 24/7. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 20)(88, "div", 3)(89, "a", 15);
      \u0275\u0275element(90, "i", 16);
      \u0275\u0275text(91, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "a", 17);
      \u0275\u0275element(93, "i", 18);
      \u0275\u0275text(94, "Delete");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(95, "div", 21)(96, "div", 2)(97, "div", 3)(98, "div", 4)(99, "a", 5);
      \u0275\u0275element(100, "img", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 7)(102, "h6", 8)(103, "a", 5);
      \u0275\u0275text(104, "Ronald Richard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "p", 9);
      \u0275\u0275text(106, "9 months ago");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "div", 10);
      \u0275\u0275element(108, "i", 11)(109, "i", 11)(110, "i", 11)(111, "i", 11)(112, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "div", 13)(114, "p");
      \u0275\u0275text(115, "From the onset, my experience with this LMS Website has been nothing short of extraordinary. As a learner who has navigated through various online platforms, the sophistication and user-centric design of this website set a new benchmark for what digital education should look like. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "div", 20)(117, "div", 3)(118, "a", 15);
      \u0275\u0275element(119, "i", 16);
      \u0275\u0275text(120, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "a", 17);
      \u0275\u0275element(122, "i", 18);
      \u0275\u0275text(123, "Delete");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(124, "div", 22)(125, "div", 23)(126, "p", 24);
      \u0275\u0275text(127, "Page 1 of 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "div", 25)(129, "ul", 26)(130, "li", 27)(131, "a", 28);
      \u0275\u0275element(132, "i", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "li", 30)(134, "a", 31);
      \u0275\u0275text(135, "1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "li", 32)(137, "a", 31);
      \u0275\u0275text(138, "2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(139, "li", 32)(140, "a", 31);
      \u0275\u0275text(141, "3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "li", 33)(143, "a", 31);
      \u0275\u0275element(144, "i", 34);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(145, "div", 35)(146, "div", 36)(147, "div", 37)(148, "div", 38)(149, "h5");
      \u0275\u0275text(150, "Edit Review");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "button", 39);
      \u0275\u0275element(152, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(153, "div", 41)(154, "div", 13)(155, "label", 42);
      \u0275\u0275text(156, "Your Rating ");
      \u0275\u0275elementStart(157, "span", 43);
      \u0275\u0275text(158, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "div", 44)(160, "div", 45)(161, "div", 46);
      \u0275\u0275element(162, "input", 47);
      \u0275\u0275elementStart(163, "label", 48);
      \u0275\u0275element(164, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275element(165, "input", 49);
      \u0275\u0275elementStart(166, "label", 50);
      \u0275\u0275element(167, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275element(168, "input", 51);
      \u0275\u0275elementStart(169, "label", 52);
      \u0275\u0275element(170, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275element(171, "input", 53);
      \u0275\u0275elementStart(172, "label", 54);
      \u0275\u0275element(173, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275element(174, "input", 55);
      \u0275\u0275elementStart(175, "label", 56);
      \u0275\u0275element(176, "i", 12);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(177, "div", 13)(178, "label", 42);
      \u0275\u0275text(179, "Write Your Review ");
      \u0275\u0275elementStart(180, "span", 43);
      \u0275\u0275text(181, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "textarea", 57);
      \u0275\u0275text(183, "This is the second Photoshop course I have completed with Nancy Duarte. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Nancy Duarte.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(184, "div", 58)(185, "a", 59);
      \u0275\u0275text(186, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "button", 60);
      \u0275\u0275text(188, "Save Changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(189, "div", 61)(190, "div", 36)(191, "div", 37)(192, "div", 62)(193, "span", 63);
      \u0275\u0275element(194, "i", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "div")(196, "h4", 65);
      \u0275\u0275text(197, "Delete Review");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "p", 13);
      \u0275\u0275text(199, "Are you sure you want to delete review?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "div", 66)(201, "a", 67);
      \u0275\u0275text(202, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "a", 68);
      \u0275\u0275text(204, "Yes, Remove All");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(30);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(25);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(25);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentReviewsComponent, [{
    type: Component,
    args: [{ selector: "app-student-reviews", imports: [CommonModule, RouterLink], template: `<div class="page-title d-flex align-items-center justify-content-between">\r
        <h5>Forum</h5>\r
    </div>\r
\r
    <div class="border mb-3 p-3 rounded-2">\r
        <div class="d-flex flex-wrap gap-1 align-items-center justify-content-between mb-3">\r
            <div class="d-flex align-items-center">\r
                <div class="avatar avatar-lg avatar-rounded me-2">\r
                    <a [routerLink]="routes.studentsDetails"><img src="assets/img/user/user-02.jpg" alt="img"></a>\r
                </div>\r
                <div class="reviewer-info">\r
                    <h6 class="mb-1"><a [routerLink]="routes.studentsDetails">Ronald Richard</a></h6>\r
                    <p class="fs-14">6 months ago</p>									\r
                </div>\r
            </div>\r
            <div class="rating">\r
                <i class="fa-solid fa-star filled"></i>\r
                <i class="fa-solid fa-star filled"></i>\r
                <i class="fa-solid fa-star filled"></i>\r
                <i class="fa-solid fa-star filled"></i>\r
                <i class="fa-solid fa-star"></i>\r
            </div>\r
        </div>\r
        <div class="mb-3">\r
            <p>This is the second Photoshop course I have completed with Nancy Duarte.\r
                Worth every penny and recommend it highly. To get the most out of this course, \r
                its best to to take the Beginner to Advanced course first. \r
                The sound and video quality is of a good standard. Thank you Nancy Duarte.\r
            </p>\r
        </div>\r
        <div class="d-flex align-items-center justify-content-between mb-3">			\r
            <div class="d-flex align-items-center">\r
                <a href="javascript:void(0);" class="d-inline-flex align-items-center me-3 edit-review" data-bs-toggle="modal" data-bs-target="#edit_review"><i class="isax isax-edit-2 me-1"></i>Edit</a>\r
                <a href="javascript:void(0);" class="d-inline-flex align-items-center delete-review" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-1"></i>Delete</a>\r
            </div>\r
        </div>\r
        <div class="bg-light border p-3 rounded-2">\r
            <h6 class="mb-1">Reponse</h6>\r
            <p class="fs-14">As a learner who has navigated through various online platforms, the sophistication and user-centric design of this website set a new</p>\r
        </div>\r
    </div>\r
    <div class="border mb-3 p-3 rounded-2">\r
        <div class="d-flex flex-wrap gap-1 align-items-center justify-content-between mb-3">\r
            <div class="d-flex align-items-center">\r
                <div class="avatar avatar-lg avatar-rounded me-2">\r
                    <a [routerLink]="routes.studentsDetails"><img src="assets/img/user/user-02.jpg" alt="img"></a>\r
                </div>\r
                <div class="reviewer-info">\r
                    <h6 class="mb-1"><a [routerLink]="routes.studentsDetails">Ronald Richard</a></h6>\r
                    <p class="fs-14">9 months ago</p>									\r
                </div>\r
            </div>\r
            <div class="rating">\r
                <i class="fa-solid fa-star filled"></i>\r
                <i class="fa-solid fa-star filled"></i>\r
                <i class="fa-solid fa-star filled"></i>\r
                <i class="fa-solid fa-star filled"></i>\r
                <i class="fa-solid fa-star"></i>\r
            </div>\r
        </div>\r
        <div class="mb-3">\r
            <p>I've been using this LMS for several months for my online courses, and it's been\r
                a game-changer. The interface is incredibly user-friendly, making it easy for both \r
                instructors and students to navigate through the courses. The variety of tools available \r
                for creating interactive and\r
                engaging content has significantly enhanced the learning experience.\r
            </p>\r
        </div>\r
        <div class="d-flex align-items-center justify-content-between">\r
            <div class="d-flex align-items-center">\r
                <a href="javascript:void(0);" class="d-inline-flex align-items-center me-3 edit-review" data-bs-toggle="modal" data-bs-target="#edit_review"><i class="isax isax-edit-2 me-1"></i>Edit</a>\r
                <a href="javascript:void(0);" class="d-inline-flex align-items-center delete-review" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-1"></i>Delete</a>\r
            </div>\r
        </div>\r
    </div>\r
    <div class="border mb-3 p-3 rounded-2">\r
        <div class="d-flex flex-wrap gap-1 align-items-center justify-content-between mb-3">\r
            <div class="d-flex align-items-center">\r
                <div class="avatar avatar-lg avatar-rounded me-2">\r
                    <a [routerLink]="routes.studentsDetails"><img src="assets/img/user/user-02.jpg" alt="img"></a>\r
                </div>\r
                <div class="reviewer-info">\r
                    <h6 class="mb-1"><a [routerLink]="routes.studentsDetails">Ronald Richard</a></h6>\r
                    <p class="fs-14">9 months ago</p>									\r
                </div>\r
            </div>\r
            <div class="rating">\r
                <i class="fa-solid fa-star filled"></i>\r
                <i class="fa-solid fa-star filled"></i>\r
                <i class="fa-solid fa-star filled"></i>\r
                <i class="fa-solid fa-star filled"></i>\r
                <i class="fa-solid fa-star"></i>\r
            </div>\r
        </div>\r
        <div class="mb-3">\r
            <p>Any time I've had a question or encountered a minor issue, the \r
                customer support team has been quick to respond and incredibly helpful. Moreover, \r
                the reliability of this LMS has impressed me\u2014downtime is \r
                nearly non-existent, ensuring that  students have access to their courses 24/7.\r
            </p>\r
        </div>\r
        <div class="d-flex align-items-center justify-content-between">\r
            <div class="d-flex align-items-center">\r
                <a href="javascript:void(0);" class="d-inline-flex align-items-center me-3 edit-review" data-bs-toggle="modal" data-bs-target="#edit_review"><i class="isax isax-edit-2 me-1"></i>Edit</a>\r
                <a href="javascript:void(0);" class="d-inline-flex align-items-center delete-review" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-1"></i>Delete</a>\r
            </div>\r
        </div>\r
    </div>\r
    <div class="border p-3 rounded-2">\r
        <div class="d-flex flex-wrap gap-1 align-items-center justify-content-between mb-3">\r
            <div class="d-flex align-items-center">\r
                <div class="avatar avatar-lg avatar-rounded me-2">\r
                    <a [routerLink]="routes.studentsDetails"><img src="assets/img/user/user-02.jpg" alt="img"></a>\r
                </div>\r
                <div class="reviewer-info">\r
                    <h6 class="mb-1"><a [routerLink]="routes.studentsDetails">Ronald Richard</a></h6>\r
                    <p class="fs-14">9 months ago</p>									\r
                </div>\r
            </div>\r
            <div class="rating">\r
                <i class="fa-solid fa-star filled"></i>\r
                <i class="fa-solid fa-star filled"></i>\r
                <i class="fa-solid fa-star filled"></i>\r
                <i class="fa-solid fa-star filled"></i>\r
                <i class="fa-solid fa-star"></i>\r
            </div>\r
        </div>\r
        <div class="mb-3">\r
            <p>From the onset, my experience with this LMS Website has been nothing \r
                short of extraordinary. As a learner who has navigated through various online platforms, \r
                the sophistication and user-centric design of this website\r
                set a new benchmark for what digital education should look like.\r
            </p>\r
        </div>\r
        <div class="d-flex align-items-center justify-content-between">\r
            <div class="d-flex align-items-center">\r
                <a href="javascript:void(0);" class="d-inline-flex align-items-center me-3 edit-review" data-bs-toggle="modal" data-bs-target="#edit_review"><i class="isax isax-edit-2 me-1"></i>Edit</a>\r
                <a href="javascript:void(0);" class="d-inline-flex align-items-center delete-review" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-1"></i>Delete</a>\r
            </div>\r
        </div>\r
    </div>\r
        \r
    <!-- /pagination -->\r
    <div class="row align-items-center mt-3">\r
        <div class="col-md-2">\r
          <p class="pagination-text">Page 1 of 2</p>\r
        </div>\r
        <div class="col-md-10">\r
            <ul class="pagination lms-page justify-content-center justify-content-md-end mt-2 mt-md-0">\r
                <li class="page-item prev">\r
                    <a class="page-link" href="javascript:void(0)" tabindex="-1"><i class="fas fa-angle-left"></i></a>\r
                </li>\r
                <li class="page-item first-page active">\r
                    <a class="page-link" href="javascript:void(0)">1</a>\r
                </li>\r
                <li class="page-item">\r
                    <a class="page-link" href="javascript:void(0)">2</a>\r
                </li>\r
                <li class="page-item">\r
                    <a class="page-link" href="javascript:void(0)">3</a>\r
                </li>\r
                <li class="page-item next">\r
                    <a class="page-link" href="javascript:void(0)"><i class="fas fa-angle-right"></i></a>\r
                </li>\r
            </ul>\r
        </div>\r
    </div>\r
    <!-- /pagination -->\r
\r
\r
    			<!-- Edit Review -->\r
			<div class="modal fade" id="edit_review">\r
				<div class="modal-dialog modal-dialog-centered">\r
					<div class="modal-content">\r
						<div class="modal-header">\r
							<h5>Edit Review</h5>\r
							<button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">\r
								<i class="isax isax-close-circle5"></i>\r
							</button>\r
						</div>\r
						<div class="modal-body pb-0">                    \r
							<div class="mb-3">\r
								<label class="form-label fs-14">Your Rating <span class="text-danger">*</span></label>\r
								<div class="selection-wrap">\r
									<div class="d-inline-block">\r
										<div class="rating-selction">\r
											<input type="radio" name="rating" value="5" id="rating5" checked>\r
											<label for="rating5"><i class="fa-solid fa-star"></i></label>\r
											<input type="radio" name="rating" value="4" id="rating4" checked>\r
											<label for="rating4"><i class="fa-solid fa-star"></i></label>\r
											<input type="radio" name="rating" value="3" id="rating3" checked>\r
											<label for="rating3"><i class="fa-solid fa-star"></i></label>\r
											<input type="radio" name="rating" value="2" id="rating2">\r
											<label for="rating2"><i class="fa-solid fa-star"></i></label>\r
											<input type="radio" name="rating" value="1" id="rating1">\r
											<label for="rating1"><i class="fa-solid fa-star"></i></label>\r
										</div>\r
									</div>\r
								</div>\r
							</div>\r
							<div class="mb-3">\r
								<label class="form-label fs-14">Write Your Review <span class="text-danger">*</span></label>\r
								<textarea class="form-control lh-base" rows="3">This is the second Photoshop course I have completed with Nancy Duarte. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Nancy Duarte.</textarea>\r
							</div>\r
						</div>\r
						<div class="modal-footer">\r
							<a href="javascript:void(0);" class="btn btn-md bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal">Cancel</a>   \r
							<button type="submit" class="btn btn-md btn-secondary rounded-pill" data-bs-dismiss="modal">Save Changes</button>                \r
						</div>\r
					</div>\r
				</div>\r
			</div>\r
			<!-- /Edit Review -->\r
\r
			<!-- Delete Modal -->\r
			<div class="modal fade" id="delete_modal">\r
				<div class="modal-dialog modal-dialog-centered">\r
					<div class="modal-content">\r
						<div class="modal-body text-center custom-modal-body">\r
							<span class="avatar avatar-lg bg-secondary-transparent rounded-circle mb-2">\r
								<i class="isax isax-trash fs-24 text-danger"></i>\r
							</span>\r
							<div>\r
								<h4 class="mb-2">Delete Review</h4>\r
								<p class="mb-3">Are you sure you want to delete review?</p>\r
								<div class="d-flex align-items-center justify-content-center">\r
									<a href="javascript:void(0);" class="btn bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal">Cancel</a>\r
									<a href="javascript:void(0);" class="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Yes, Remove All</a>\r
								</div>\r
							</div>\r
						</div>\r
					</div>\r
				</div>\r
			</div>\r
			<!-- /Delete Modal -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentReviewsComponent, { className: "StudentReviewsComponent", filePath: "app/features/student/student-reviews/student-reviews.component.ts", lineNumber: 12 });
})();
export {
  StudentReviewsComponent
};
//# sourceMappingURL=chunk-C3NKHON2.js.map
