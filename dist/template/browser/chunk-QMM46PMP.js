import {
  routes
} from "./chunk-YJLHMFCU.js";
import {
  RouterLink
} from "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
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
  ɵɵtext
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/student/student-wishlist/student-wishlist.component.ts
var _c0 = (a0) => ({ "selected": a0 });
var StudentWishlistComponent = class _StudentWishlistComponent {
  routes = routes;
  isSelected = Array(10).fill(true);
  iconSelect(index) {
    this.isSelected[index] = !this.isSelected[index];
  }
  static \u0275fac = function StudentWishlistComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentWishlistComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentWishlistComponent, selectors: [["app-student-wishlist"]], decls: 332, vars: 72, consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "fs-14", "text-danger", "d-inline-flex", "align-items-center"], [1, "isax", "isax-trash", "me-1"], [1, "row"], [1, "col-xl-4", "col-md-6", "d-flex"], [1, "course-item", "course-item-three"], [1, "position-relative", "overflow-hidden", "rounded-3", "mb-3"], [3, "routerLink"], ["src", "./assets/img/course/course-01.jpg", "alt", "img", 1, "img-fluid", "rounded-3"], [1, "position-absolute", "start-0", "top-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-2"], ["href", "javascript:void(0);", 1, "fav-icon", "like", 3, "click", "ngClass"], [1, "isax", "isax-heart", "not-filled"], [1, "isax", "isax-heart5", "filled-heart"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", "rounded-circle"], ["src", "./assets/img/avatar/avatar1.jpg", "alt", "im", 1, "img-fluid", "rounded-circle"], [1, "fs-14", "ms-2"], [1, "tag-btn"], [1, "mt-3", "mb-2"], [1, "fa-solid", "fa-star", "text-warning", "fs-12"], [1, "fs-14", "ms-1"], [1, "d-flex", "justify-content-between", "mt-3", "align-items-center"], [1, "text-secondary"], [1, "btn", "btn-dark", "btn-sm", "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "fs-8", "fas", "fa-angle-right", "ms-2"], ["src", "./assets/img/course/course-02.jpg", "alt", "img", 1, "img-fluid", "rounded-3"], ["src", "./assets/img/avatar/avatar2.jpg", "alt", "im", 1, "img-fluid", "rounded-circle", "object-fit-cover"], ["src", "./assets/img/course/course-03.jpg", "alt", "img", 1, "img-fluid", "rounded-3"], ["src", "./assets/img/avatar/avatar3.jpg", "alt", "im", 1, "img-fluid", "rounded-circle", "object-fit-cover"], [1, "fa-solid", "fa-star", "fs-12", "text-warning"], ["src", "./assets/img/course/course-04.jpg", "alt", "img", 1, "img-fluid", "rounded-3"], ["src", "./assets/img/avatar/avatar4.jpg", "alt", "im", 1, "img-fluid", "rounded-circle", "object-fit-cover"], ["src", "./assets/img/course/course-05.jpg", "alt", "img", 1, "img-fluid", "rounded-3"], ["src", "./assets/img/avatar/avatar5.jpg", "alt", "im", 1, "img-fluid", "rounded-circle", "object-fit-cover"], ["src", "./assets/img/course/course-06.jpg", "alt", "img", 1, "img-fluid", "rounded-3"], ["src", "./assets/img/avatar/avatar6.jpg", "alt", "im", 1, "img-fluid", "rounded-circle", "object-fit-cover"], ["src", "./assets/img/course/course-07.jpg", "alt", "img", 1, "img-fluid", "rounded-3"], ["src", "./assets/img/avatar/avatar7.jpg", "alt", "im", 1, "img-fluid", "rounded-circle", "object-fit-cover"], ["src", "./assets/img/course/course-08.jpg", "alt", "img", 1, "img-fluid", "rounded-3"], ["src", "./assets/img/avatar/avatar8.jpg", "alt", "im", 1, "img-fluid", "rounded-circle", "object-fit-cover"], ["src", "./assets/img/course/course-09.jpg", "alt", "img", 1, "img-fluid", "rounded-3"], ["src", "./assets/img/avatar/avatar9.jpg", "alt", "im", 1, "img-fluid", "rounded-circle", "object-fit-cover"], [1, "row", "align-items-center"], [1, "col-md-2"], [1, "pagination-text"], [1, "col-md-10"], [1, "pagination", "lms-page", "justify-content-center", "justify-content-md-end", "mt-2", "mt-md-0"], [1, "page-item", "prev"], ["href", "javascript:void(0)", "tabindex", "-1", 1, "page-link"], [1, "fas", "fa-angle-left"], [1, "page-item", "first-page", "active"], ["href", "javascript:void(0)", 1, "page-link"], [1, "page-item"], [1, "page-item", "next"], [1, "fas", "fa-angle-right"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "text-center", "custom-modal-body"], [1, "avatar", "avatar-lg", "bg-secondary-transparent", "rounded-circle", "mb-2"], [1, "isax", "isax-trash", "fs-24", "text-danger"], [1, "mb-2"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill"]], template: function StudentWishlistComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5");
      \u0275\u0275text(2, "Mes Favoris");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "a", 1);
      \u0275\u0275element(4, "i", 2);
      \u0275\u0275text(5, "Supprimer Tout ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "a", 7);
      \u0275\u0275element(11, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 9)(13, "a", 10);
      \u0275\u0275listener("click", function StudentWishlistComponent_Template_a_click_13_listener() {
        return ctx.iconSelect(1);
      });
      \u0275\u0275element(14, "i", 11)(15, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 13)(17, "div", 14)(18, "div", 15)(19, "a", 7);
      \u0275\u0275element(20, "img", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "p", 17)(22, "a", 7);
      \u0275\u0275text(23, "David Benitez");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "span", 18);
      \u0275\u0275text(25, "Design");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "h6", 19)(27, "a", 7);
      \u0275\u0275text(28, "Information About UI/UX Design Degree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 14);
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275elementStart(31, "p", 21);
      \u0275\u0275text(32, "4.9 (200 Reviews)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 22)(34, "h5", 23);
      \u0275\u0275text(35, "$120");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "a", 24);
      \u0275\u0275text(37, "View Course");
      \u0275\u0275element(38, "i", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "div", 4)(40, "div", 5)(41, "div", 6)(42, "a", 7);
      \u0275\u0275element(43, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 9)(45, "a", 10);
      \u0275\u0275listener("click", function StudentWishlistComponent_Template_a_click_45_listener() {
        return ctx.iconSelect(2);
      });
      \u0275\u0275element(46, "i", 11)(47, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 13)(49, "div", 14)(50, "div", 15)(51, "a", 7);
      \u0275\u0275element(52, "img", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "p", 17)(54, "a", 7);
      \u0275\u0275text(55, "Ana Reyes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(56, "span", 18);
      \u0275\u0275text(57, "Wordpress");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "h6", 19)(59, "a", 7);
      \u0275\u0275text(60, "Wordpress for Beginners - Master Wordpress Quickly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 14);
      \u0275\u0275element(62, "i", 20);
      \u0275\u0275elementStart(63, "p", 21);
      \u0275\u0275text(64, "4.4 (160 Reviews)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 22)(66, "h5", 23);
      \u0275\u0275text(67, "$140");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "a", 24);
      \u0275\u0275text(69, "View Course");
      \u0275\u0275element(70, "i", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(71, "div", 4)(72, "div", 5)(73, "div", 6)(74, "a", 7);
      \u0275\u0275element(75, "img", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 9)(77, "a", 10);
      \u0275\u0275listener("click", function StudentWishlistComponent_Template_a_click_77_listener() {
        return ctx.iconSelect(3);
      });
      \u0275\u0275element(78, "i", 11)(79, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(80, "div", 13)(81, "div", 14)(82, "div", 15)(83, "a", 7);
      \u0275\u0275element(84, "img", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "p", 17)(86, "a", 7);
      \u0275\u0275text(87, "Andrew Pirtle");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(88, "span", 18);
      \u0275\u0275text(89, "Design");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "h6", 19)(91, "a", 7);
      \u0275\u0275text(92, "Sketch from A to Z (2024): Become an app designer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 14);
      \u0275\u0275element(94, "i", 30);
      \u0275\u0275elementStart(95, "p", 21);
      \u0275\u0275text(96, "4.6 (170 Reviews)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 22)(98, "h5", 23);
      \u0275\u0275text(99, "$160");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "a", 24);
      \u0275\u0275text(101, "View Course");
      \u0275\u0275element(102, "i", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(103, "div", 4)(104, "div", 5)(105, "div", 6)(106, "a", 7);
      \u0275\u0275element(107, "img", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div", 9)(109, "a", 10);
      \u0275\u0275listener("click", function StudentWishlistComponent_Template_a_click_109_listener() {
        return ctx.iconSelect(4);
      });
      \u0275\u0275element(110, "i", 11)(111, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(112, "div", 13)(113, "div", 14)(114, "div", 15)(115, "a", 7);
      \u0275\u0275element(116, "img", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "p", 17)(118, "a", 7);
      \u0275\u0275text(119, "Christy Garner");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(120, "span", 18);
      \u0275\u0275text(121, "Programming");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "h6", 19)(123, "a", 7);
      \u0275\u0275text(124, "Sketch from A to Z (2024): Become an app designer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "div", 14);
      \u0275\u0275element(126, "i", 30);
      \u0275\u0275elementStart(127, "p", 21);
      \u0275\u0275text(128, "4.2 (220 Reviews)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "div", 22)(130, "h5", 23);
      \u0275\u0275text(131, "$200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "a", 24);
      \u0275\u0275text(133, "View Course");
      \u0275\u0275element(134, "i", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(135, "div", 4)(136, "div", 5)(137, "div", 6)(138, "a", 7);
      \u0275\u0275element(139, "img", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "div", 9)(141, "a", 10);
      \u0275\u0275listener("click", function StudentWishlistComponent_Template_a_click_141_listener() {
        return ctx.iconSelect(5);
      });
      \u0275\u0275element(142, "i", 11)(143, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(144, "div", 13)(145, "div", 14)(146, "div", 15)(147, "a", 7);
      \u0275\u0275element(148, "img", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "p", 17)(150, "a", 7);
      \u0275\u0275text(151, "Justin Gregory");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(152, "span", 18);
      \u0275\u0275text(153, "Programming");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "h6", 19)(155, "a", 7);
      \u0275\u0275text(156, "Learn JavaScript and Express to become a Expert");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "div", 14);
      \u0275\u0275element(158, "i", 30);
      \u0275\u0275elementStart(159, "p", 21);
      \u0275\u0275text(160, "4.4 (180 Reviews)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "div", 22)(162, "h5", 23);
      \u0275\u0275text(163, "$130");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "a", 24);
      \u0275\u0275text(165, "View Course");
      \u0275\u0275element(166, "i", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(167, "div", 4)(168, "div", 5)(169, "div", 6)(170, "a", 7);
      \u0275\u0275element(171, "img", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "div", 9)(173, "a", 10);
      \u0275\u0275listener("click", function StudentWishlistComponent_Template_a_click_173_listener() {
        return ctx.iconSelect(6);
      });
      \u0275\u0275element(174, "i", 11)(175, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(176, "div", 13)(177, "div", 14)(178, "div", 15)(179, "a", 7);
      \u0275\u0275element(180, "img", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(181, "p", 17)(182, "a", 7);
      \u0275\u0275text(183, "Carolyn Hines");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(184, "span", 18);
      \u0275\u0275text(185, "Programming");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "h6", 19)(187, "a", 7);
      \u0275\u0275text(188, "Introduction to Python Programming");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(189, "div", 14);
      \u0275\u0275element(190, "i", 30);
      \u0275\u0275elementStart(191, "p", 21);
      \u0275\u0275text(192, "4.7 (130 Reviews)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(193, "div", 22)(194, "h5", 23);
      \u0275\u0275text(195, "$150");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "a", 24);
      \u0275\u0275text(197, "View Course");
      \u0275\u0275element(198, "i", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(199, "div", 4)(200, "div", 5)(201, "div", 6)(202, "a", 7);
      \u0275\u0275element(203, "img", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "div", 9)(205, "a", 10);
      \u0275\u0275listener("click", function StudentWishlistComponent_Template_a_click_205_listener() {
        return ctx.iconSelect(7);
      });
      \u0275\u0275element(206, "i", 11)(207, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(208, "div", 13)(209, "div", 14)(210, "div", 15)(211, "a", 7);
      \u0275\u0275element(212, "img", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(213, "p", 17)(214, "a", 7);
      \u0275\u0275text(215, "Rafael Miller");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(216, "span", 18);
      \u0275\u0275text(217, "Programming");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(218, "h6", 19)(219, "a", 7);
      \u0275\u0275text(220, "Build Responsive Websites with HTML5 and CSS3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(221, "div", 14);
      \u0275\u0275element(222, "i", 30);
      \u0275\u0275elementStart(223, "p", 21);
      \u0275\u0275text(224, "4.1 (140 Reviews)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(225, "div", 22)(226, "h5", 23);
      \u0275\u0275text(227, "$170");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "a", 24);
      \u0275\u0275text(229, "View Course");
      \u0275\u0275element(230, "i", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(231, "div", 4)(232, "div", 5)(233, "div", 6)(234, "a", 7);
      \u0275\u0275element(235, "img", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "div", 9)(237, "a", 10);
      \u0275\u0275listener("click", function StudentWishlistComponent_Template_a_click_237_listener() {
        return ctx.iconSelect(8);
      });
      \u0275\u0275element(238, "i", 11)(239, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(240, "div", 13)(241, "div", 14)(242, "div", 15)(243, "a", 7);
      \u0275\u0275element(244, "img", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "p", 17)(246, "a", 7);
      \u0275\u0275text(247, "Nancy Duarte");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(248, "span", 18);
      \u0275\u0275text(249, "Deign");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(250, "h6", 19)(251, "a", 7);
      \u0275\u0275text(252, "Information About Photoshop Design Degree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(253, "div", 14);
      \u0275\u0275element(254, "i", 30);
      \u0275\u0275elementStart(255, "p", 21);
      \u0275\u0275text(256, "4.3 (190 Reviews)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(257, "div", 22)(258, "h5", 23);
      \u0275\u0275text(259, "$110");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "a", 24);
      \u0275\u0275text(261, "View Course");
      \u0275\u0275element(262, "i", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(263, "div", 4)(264, "div", 5)(265, "div", 6)(266, "a", 7);
      \u0275\u0275element(267, "img", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "div", 9)(269, "a", 10);
      \u0275\u0275listener("click", function StudentWishlistComponent_Template_a_click_269_listener() {
        return ctx.iconSelect(9);
      });
      \u0275\u0275element(270, "i", 11)(271, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(272, "div", 13)(273, "div", 14)(274, "div", 15)(275, "a", 7);
      \u0275\u0275element(276, "img", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(277, "p", 17)(278, "a", 7);
      \u0275\u0275text(279, "James Kagan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(280, "span", 18);
      \u0275\u0275text(281, "Programming");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(282, "h6", 19)(283, "a", 7);
      \u0275\u0275text(284, "C# Developers Double Your Coding with Visual Studio");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(285, "div", 14);
      \u0275\u0275element(286, "i", 30);
      \u0275\u0275elementStart(287, "p", 21);
      \u0275\u0275text(288, "4.8 (110 Reviews)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(289, "div", 22)(290, "h5", 23);
      \u0275\u0275text(291, "$180");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "a", 24);
      \u0275\u0275text(293, "View Course");
      \u0275\u0275element(294, "i", 25);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(295, "div", 43)(296, "div", 44)(297, "p", 45);
      \u0275\u0275text(298, "Page 1 of 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(299, "div", 46)(300, "ul", 47)(301, "li", 48)(302, "a", 49);
      \u0275\u0275element(303, "i", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(304, "li", 51)(305, "a", 52);
      \u0275\u0275text(306, "1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(307, "li", 53)(308, "a", 52);
      \u0275\u0275text(309, "2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(310, "li", 53)(311, "a", 52);
      \u0275\u0275text(312, "3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(313, "li", 54)(314, "a", 52);
      \u0275\u0275element(315, "i", 55);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(316, "div", 56)(317, "div", 57)(318, "div", 58)(319, "div", 59)(320, "span", 60);
      \u0275\u0275element(321, "i", 61);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "div")(323, "h4", 62);
      \u0275\u0275text(324, "Remove All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(325, "p", 63);
      \u0275\u0275text(326, "Are you sure you want to remove all from wishlist?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "div", 64)(328, "a", 65);
      \u0275\u0275text(329, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "a", 66);
      \u0275\u0275text(331, "Yes, Remove All");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(54, _c0, ctx.isSelected[1]));
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(56, _c0, ctx.isSelected[2]));
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(58, _c0, ctx.isSelected[3]));
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(60, _c0, ctx.isSelected[4]));
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(62, _c0, ctx.isSelected[5]));
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(64, _c0, ctx.isSelected[6]));
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(66, _c0, ctx.isSelected[7]));
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(68, _c0, ctx.isSelected[8]));
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(70, _c0, ctx.isSelected[9]));
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
    }
  }, dependencies: [CommonModule, NgClass, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentWishlistComponent, [{
    type: Component,
    args: [{ selector: "app-student-wishlist", imports: [CommonModule, RouterLink], template: `\r
    <div class="page-title d-flex align-items-center justify-content-between">\r
        <h5>Mes Favoris</h5>\r
        <a href="javascript:void(0);" class="fs-14 text-danger d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">\r
            <i class="isax isax-trash me-1"></i>Supprimer Tout\r
        </a>\r
    </div>\r
        <div class="row">\r
            <div class="col-xl-4 col-md-6 d-flex">\r
                <div class="course-item course-item-three">\r
                        <div class="position-relative overflow-hidden rounded-3 mb-3">\r
                            <a [routerLink]="routes.courseDetails"><img class="img-fluid rounded-3" src="./assets/img/course/course-01.jpg" alt="img"></a>\r
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">\r
                                <a class="fav-icon like" href="javascript:void(0);" [ngClass]="{'selected':isSelected[1]}" (click)="iconSelect(1)">\r
                                    <i class="isax isax-heart not-filled"></i><i class="isax isax-heart5 filled-heart"></i>\r
                                </a>\r
                            </div>\r
                        </div>\r
                            <div class="d-flex flex-wrap align-items-center justify-content-between">\r
                                <div class="d-flex align-items-center">\r
                                    <div class="avatar avatar-sm rounded-circle">\r
                                     <a [routerLink]="routes.instructorDetails"><img class="img-fluid rounded-circle" src="./assets/img/avatar/avatar1.jpg" alt="im"></a>\r
                                    </div>\r
                                    <p class="fs-14 ms-2"><a [routerLink]="routes.instructorDetails">David Benitez</a></p>\r
                                </div>\r
                                <span class="tag-btn">Design</span>\r
                            </div>\r
                            <h6 class="mt-3 mb-2"><a [routerLink]="routes.courseDetails">Information About UI/UX Design Degree</a></h6>\r
                            <div class="d-flex align-items-center"><i class="fa-solid fa-star text-warning fs-12"></i><p class="fs-14 ms-1">4.9 (200 Reviews)</p></div>\r
                            <div class="d-flex justify-content-between mt-3 align-items-center">\r
                                <h5 class="text-secondary">$120</h5>\r
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="fs-8 fas fa-angle-right ms-2"></i></a>\r
                            </div>\r
                </div>\r
            </div>\r
            <div class="col-xl-4 col-md-6 d-flex">\r
                <div class="course-item course-item-three">\r
                        <div class="position-relative overflow-hidden rounded-3 mb-3">\r
                            <a [routerLink]="routes.courseDetails"><img class="img-fluid rounded-3" src="./assets/img/course/course-02.jpg" alt="img"></a>\r
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">\r
                                <a class="fav-icon like" href="javascript:void(0);" [ngClass]="{'selected':isSelected[2]}" (click)="iconSelect(2)">\r
                                    <i class="isax isax-heart not-filled"></i><i class="isax isax-heart5 filled-heart"></i>\r
                                </a>\r
                            </div>\r
                            </div>\r
                            <div class="d-flex flex-wrap align-items-center justify-content-between">\r
                                <div class="d-flex align-items-center">\r
                                    <div class="avatar avatar-sm rounded-circle">\r
                                    <a [routerLink]="routes.instructorDetails"><img class="img-fluid rounded-circle object-fit-cover" src="./assets/img/avatar/avatar2.jpg" alt="im"></a>\r
                                    </div>\r
                                    <p class="fs-14 ms-2"><a [routerLink]="routes.instructorDetails">Ana Reyes</a></p>\r
                                </div>\r
                                <span class="tag-btn">Wordpress</span>\r
                            </div>\r
                            <h6 class="mt-3 mb-2"><a [routerLink]="routes.courseDetails">Wordpress for Beginners - Master Wordpress Quickly</a></h6>\r
                            <div class="d-flex align-items-center"><i class="fa-solid fa-star text-warning fs-12"></i><p class="fs-14 ms-1">4.4 (160 Reviews)</p></div>\r
                            <div class="d-flex justify-content-between mt-3 align-items-center">\r
                                <h5 class="text-secondary">$140</h5>\r
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="fs-8 fas fa-angle-right ms-2"></i></a>\r
                            </div>\r
                </div>\r
            </div>\r
            <div class="col-xl-4 col-md-6 d-flex">\r
                <div class="course-item course-item-three">\r
                        <div class="position-relative overflow-hidden rounded-3 mb-3">\r
                            <a [routerLink]="routes.courseDetails"><img class="img-fluid rounded-3" src="./assets/img/course/course-03.jpg" alt="img"></a>\r
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">\r
                                <a class="fav-icon like" href="javascript:void(0);" [ngClass]="{'selected':isSelected[3]}" (click)="iconSelect(3)">\r
                                    <i class="isax isax-heart not-filled"></i><i class="isax isax-heart5 filled-heart"></i>\r
                                </a>\r
                            </div>\r
                        </div>\r
                        <div class="d-flex flex-wrap align-items-center justify-content-between">\r
                            <div class="d-flex align-items-center">\r
                                <div class="avatar avatar-sm rounded-circle">\r
                                    <a [routerLink]="routes.instructorDetails"><img class="img-fluid rounded-circle object-fit-cover" src="./assets/img/avatar/avatar3.jpg" alt="im"></a>\r
                                </div>\r
                                <p class="fs-14 ms-2"><a [routerLink]="routes.instructorDetails">Andrew Pirtle</a></p>\r
                            </div>\r
                            <span class="tag-btn">Design</span>\r
                        </div>\r
                        <h6 class="mt-3 mb-2"><a [routerLink]="routes.courseDetails">Sketch from A to Z (2024): Become an app designer</a></h6>\r
                        <div class="d-flex align-items-center"><i class="fa-solid fa-star fs-12 text-warning"></i><p class="fs-14 ms-1">4.6 (170 Reviews)</p></div>\r
                        <div class="d-flex justify-content-between mt-3 align-items-center">\r
                            <h5 class="text-secondary">$160</h5>\r
                            <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="fs-8 fas fa-angle-right ms-2"></i></a>\r
                        </div>\r
                </div>\r
            </div>\r
            <div class="col-xl-4 col-md-6 d-flex">\r
                <div class="course-item course-item-three">\r
                        <div class="position-relative overflow-hidden rounded-3 mb-3">\r
                            <a [routerLink]="routes.courseDetails"><img class="img-fluid rounded-3" src="./assets/img/course/course-04.jpg" alt="img"></a>\r
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">\r
                                <a class="fav-icon like" href="javascript:void(0);" [ngClass]="{'selected':isSelected[4]}" (click)="iconSelect(4)">\r
                                    <i class="isax isax-heart not-filled"></i><i class="isax isax-heart5 filled-heart"></i>\r
                                </a>\r
                            </div>\r
                            </div>\r
                            <div class="d-flex flex-wrap align-items-center justify-content-between">\r
                                <div class="d-flex align-items-center">\r
                                    <div class="avatar avatar-sm rounded-circle">\r
                                        <a [routerLink]="routes.instructorDetails"><img class="img-fluid rounded-circle object-fit-cover" src="./assets/img/avatar/avatar4.jpg" alt="im"></a>\r
                                    </div>\r
                                    <p class="fs-14 ms-2"><a [routerLink]="routes.instructorDetails">Christy Garner</a></p>\r
                                </div>\r
                                <span class="tag-btn">Programming</span>\r
                            </div>\r
                            <h6 class="mt-3 mb-2"><a [routerLink]="routes.courseDetails">Sketch from A to Z (2024): Become an app designer</a></h6>\r
                            <div class="d-flex align-items-center"><i class="fa-solid fa-star fs-12 text-warning"></i><p class="fs-14 ms-1">4.2 (220 Reviews)</p></div>\r
                            <div class="d-flex justify-content-between mt-3 align-items-center">\r
                                <h5 class="text-secondary">$200</h5>\r
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="fs-8 fas fa-angle-right ms-2"></i></a>\r
                            </div>\r
                </div>\r
            </div>\r
            <div class="col-xl-4 col-md-6 d-flex">\r
                <div class="course-item course-item-three">\r
                        <div class="position-relative overflow-hidden rounded-3 mb-3">\r
                            <a [routerLink]="routes.courseDetails"><img class="img-fluid rounded-3" src="./assets/img/course/course-05.jpg" alt="img"></a>\r
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">\r
                                <a class="fav-icon like" href="javascript:void(0);" [ngClass]="{'selected':isSelected[5]}" (click)="iconSelect(5)">\r
                                    <i class="isax isax-heart not-filled"></i><i class="isax isax-heart5 filled-heart"></i>\r
                                </a>\r
                            </div>\r
                        </div>\r
                        <div class="d-flex flex-wrap align-items-center justify-content-between">\r
                            <div class="d-flex align-items-center">\r
                                <div class="avatar avatar-sm rounded-circle">\r
                                    <a [routerLink]="routes.instructorDetails"><img class="img-fluid rounded-circle object-fit-cover" src="./assets/img/avatar/avatar5.jpg" alt="im"></a>\r
                                </div>\r
                                <p class="fs-14 ms-2"><a [routerLink]="routes.instructorDetails">Justin Gregory</a></p>\r
                            </div>\r
                            <span class="tag-btn">Programming</span>\r
                        </div>\r
                        <h6 class="mt-3 mb-2"><a [routerLink]="routes.courseDetails">Learn JavaScript and Express to become a Expert</a></h6>\r
                        <div class="d-flex align-items-center"><i class="fa-solid fa-star fs-12 text-warning"></i><p class="fs-14 ms-1">4.4 (180 Reviews)</p></div>\r
                        <div class="d-flex justify-content-between mt-3 align-items-center">\r
                            <h5 class="text-secondary">$130</h5>\r
                            <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="fs-8 fas fa-angle-right ms-2"></i></a>\r
                        </div>\r
                </div>\r
            </div>\r
            <div class="col-xl-4 col-md-6 d-flex">\r
                <div class="course-item course-item-three">\r
                        <div class="position-relative overflow-hidden rounded-3 mb-3">\r
                            <a [routerLink]="routes.courseDetails"><img class="img-fluid rounded-3" src="./assets/img/course/course-06.jpg" alt="img"></a>\r
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">\r
                                <a class="fav-icon like" href="javascript:void(0);" [ngClass]="{'selected':isSelected[6]}" (click)="iconSelect(6)">\r
                                    <i class="isax isax-heart not-filled"></i><i class="isax isax-heart5 filled-heart"></i>\r
                                </a>\r
                            </div>\r
                            </div>\r
                            <div class="d-flex flex-wrap align-items-center justify-content-between">\r
                                <div class="d-flex align-items-center">\r
                                    <div class="avatar avatar-sm rounded-circle">\r
                                        <a [routerLink]="routes.instructorDetails"><img class="img-fluid rounded-circle object-fit-cover" src="./assets/img/avatar/avatar6.jpg" alt="im"></a>\r
                                    </div>\r
                                    <p class="fs-14 ms-2"><a [routerLink]="routes.instructorDetails">Carolyn Hines</a></p>\r
                                </div>\r
                                <span class="tag-btn">Programming</span>\r
                            </div>\r
                            <h6 class="mt-3 mb-2"><a [routerLink]="routes.courseDetails">Introduction to Python Programming</a></h6>\r
                            <div class="d-flex align-items-center"><i class="fa-solid fa-star fs-12 text-warning"></i><p class="fs-14 ms-1">4.7 (130 Reviews)</p></div>\r
                            <div class="d-flex justify-content-between mt-3 align-items-center">\r
                                <h5 class="text-secondary">$150</h5>\r
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="fs-8 fas fa-angle-right ms-2"></i></a>\r
                            </div>\r
                </div>\r
            </div>\r
            <div class="col-xl-4 col-md-6 d-flex">\r
                <div class="course-item course-item-three">\r
                        <div class="position-relative overflow-hidden rounded-3 mb-3">\r
                            <a [routerLink]="routes.courseDetails"><img class="img-fluid rounded-3" src="./assets/img/course/course-07.jpg" alt="img"></a>\r
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">\r
                                <a class="fav-icon like" href="javascript:void(0);" [ngClass]="{'selected':isSelected[7]}" (click)="iconSelect(7)">\r
                                    <i class="isax isax-heart not-filled"></i><i class="isax isax-heart5 filled-heart"></i>\r
                                </a>\r
                            </div>\r
                            </div>\r
                            <div class="d-flex flex-wrap align-items-center justify-content-between">\r
                                <div class="d-flex align-items-center">\r
                                    <div class="avatar avatar-sm rounded-circle">\r
                                        <a [routerLink]="routes.instructorDetails"><img class="img-fluid rounded-circle object-fit-cover" src="./assets/img/avatar/avatar7.jpg" alt="im"></a>\r
                                    </div>\r
                                    <p class="fs-14 ms-2"><a [routerLink]="routes.instructorDetails">Rafael Miller</a></p>\r
                                </div>\r
                                <span class="tag-btn">Programming</span>\r
                            </div>\r
                            <h6 class="mt-3 mb-2"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML5 and CSS3</a></h6>\r
                            <div class="d-flex align-items-center"><i class="fa-solid fa-star fs-12 text-warning"></i><p class="fs-14 ms-1">4.1 (140 Reviews)</p></div>\r
                            <div class="d-flex justify-content-between mt-3 align-items-center">\r
                                <h5 class="text-secondary">$170</h5>\r
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="fs-8 fas fa-angle-right ms-2"></i></a>\r
                            </div>\r
                </div>\r
            </div>\r
            <div class="col-xl-4 col-md-6 d-flex">\r
                <div class="course-item course-item-three">\r
                        <div class="position-relative overflow-hidden rounded-3 mb-3">\r
                            <a [routerLink]="routes.courseDetails"><img class="img-fluid rounded-3" src="./assets/img/course/course-08.jpg" alt="img"></a>\r
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">\r
                                <a class="fav-icon like" href="javascript:void(0);" [ngClass]="{'selected':isSelected[8]}" (click)="iconSelect(8)">\r
                                    <i class="isax isax-heart not-filled"></i><i class="isax isax-heart5 filled-heart"></i>\r
                                </a>\r
                            </div>\r
                            </div>\r
                            <div class="d-flex flex-wrap align-items-center justify-content-between">\r
                                <div class="d-flex align-items-center">\r
                                    <div class="avatar avatar-sm rounded-circle">\r
                                        <a [routerLink]="routes.instructorDetails"><img class="img-fluid rounded-circle object-fit-cover" src="./assets/img/avatar/avatar8.jpg" alt="im"></a>\r
                                    </div>\r
                                    <p class="fs-14 ms-2"><a [routerLink]="routes.instructorDetails">Nancy Duarte</a></p>\r
                                </div>\r
                                <span class="tag-btn">Deign</span>\r
                            </div>\r
                            <h6 class="mt-3 mb-2"><a [routerLink]="routes.courseDetails">Information About Photoshop Design Degree</a></h6>\r
                            <div class="d-flex align-items-center"><i class="fa-solid fa-star fs-12 text-warning"></i><p class="fs-14 ms-1">4.3 (190 Reviews)</p></div>\r
                            <div class="d-flex justify-content-between mt-3 align-items-center">\r
                                <h5 class="text-secondary">$110</h5>\r
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="fs-8 fas fa-angle-right ms-2"></i></a>\r
                            </div>\r
                </div>\r
            </div>\r
            <div class="col-xl-4 col-md-6 d-flex">\r
                <div class="course-item course-item-three">\r
                        <div class="position-relative overflow-hidden rounded-3 mb-3">\r
                            <a [routerLink]="routes.courseDetails"><img class="img-fluid rounded-3" src="./assets/img/course/course-09.jpg" alt="img"></a>\r
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">\r
                                <a class="fav-icon like" href="javascript:void(0);" [ngClass]="{'selected':isSelected[9]}" (click)="iconSelect(9)">\r
                                    <i class="isax isax-heart not-filled"></i><i class="isax isax-heart5 filled-heart"></i>\r
                                </a>\r
                            </div>\r
                            </div>\r
                            <div class="d-flex flex-wrap align-items-center justify-content-between">\r
                                <div class="d-flex align-items-center">\r
                                    <div class="avatar avatar-sm rounded-circle">\r
                                        <a [routerLink]="routes.instructorDetails"><img class="img-fluid rounded-circle object-fit-cover" src="./assets/img/avatar/avatar9.jpg" alt="im"></a>\r
                                    </div>\r
                                    <p class="fs-14 ms-2"><a [routerLink]="routes.instructorDetails">James Kagan</a></p>\r
                                </div>\r
                                <span class="tag-btn">Programming</span>\r
                            </div>\r
                            <h6 class="mt-3 mb-2"><a [routerLink]="routes.courseDetails">C# Developers Double Your Coding with Visual Studio</a></h6>\r
                            <div class="d-flex align-items-center"><i class="fa-solid fa-star fs-12 text-warning"></i><p class="fs-14 ms-1">4.8 (110 Reviews)</p></div>\r
                            <div class="d-flex justify-content-between mt-3 align-items-center">\r
                                <h5 class="text-secondary">$180</h5>\r
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="fs-8 fas fa-angle-right ms-2"></i></a>\r
                            </div>\r
                </div>\r
            </div>\r
        </div>\r
    <!-- /pagination -->\r
    <div class="row align-items-center">\r
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
    			<!-- Delete Modal -->\r
			<div class="modal fade" id="delete_modal">\r
				<div class="modal-dialog modal-dialog-centered">\r
					<div class="modal-content">\r
						<div class="modal-body text-center custom-modal-body">\r
							<span class="avatar avatar-lg bg-secondary-transparent rounded-circle mb-2">\r
								<i class="isax isax-trash fs-24 text-danger"></i>\r
							</span>\r
							<div>\r
								<h4 class="mb-2">Remove All</h4>\r
								<p class="mb-3">Are you sure you want to remove all from wishlist?</p>\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentWishlistComponent, { className: "StudentWishlistComponent", filePath: "app/features/student/student-wishlist/student-wishlist.component.ts", lineNumber: 11 });
})();
export {
  StudentWishlistComponent
};
//# sourceMappingURL=chunk-QMM46PMP.js.map
