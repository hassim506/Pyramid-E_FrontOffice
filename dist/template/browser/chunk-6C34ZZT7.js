import {
  MatSlider,
  MatSliderModule,
  MatSliderRangeThumb
} from "./chunk-STBDSN6U.js";
import "./chunk-I5B54ZJK.js";
import "./chunk-5FDCLFRJ.js";
import "./chunk-4TVHDBGR.js";
import "./chunk-MQ5W77M6.js";
import {
  routes
} from "./chunk-OVFIVR43.js";
import "./chunk-IKOSZIEY.js";
import {
  RouterLink
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  NgClass
} from "./chunk-5DIP3EXV.js";
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
} from "./chunk-VTSSTHJF.js";
import "./chunk-4MWRP73S.js";

// src/app/features/courses/course-grid/course-grid.component.ts
var _c0 = (a0) => ({ "selected": a0 });
var CourseGridComponent = class _CourseGridComponent {
  routes = routes;
  isSelected = [false];
  startValue = 500;
  endValue = 3e3;
  formatLabel(value) {
    if (value >= 1e3) {
      return Math.round(value) + "";
    }
    return `${value}`;
  }
  formatLabel1(value) {
    if (value >= 5e3) {
      return "$" + Math.round(value / 5e3);
    }
    return `$${value}`;
  }
  iconSelect(index) {
    this.isSelected[index] = !this.isSelected[index];
  }
  static \u0275fac = function CourseGridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseGridComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseGridComponent, selectors: [["app-course-grid"]], decls: 524, vars: 77, consts: [[1, "course-content"], [1, "container"], [1, "row", "align-items-baseline"], [1, "col-lg-3", "theiaStickySidebar"], [1, "filter-clear"], [1, "clear-filter", "mb-4", "pb-lg-2", "d-flex", "align-items-center", "justify-content-between"], [1, "feather", "icon-filter", "me-2"], ["href", "javascript:void(0);", 1, "clear-text"], [1, "accordion", "accordion-customicon1", "accordions-items-seperate"], [1, "accordion-item"], ["id", "headingcustomicon1One", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1One", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button"], [1, "fa-solid", "fa-chevron-down"], ["id", "collapsecustomicon1One", "aria-labelledby", "headingcustomicon1One", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], [1, "custom_check"], ["type", "checkbox", "name", "select_specialist"], [1, "checkmark"], ["type", "checkbox", "name", "select_specialist", "checked", ""], [1, "custom_check", "mb-0"], ["href", "javascript:void(0);", 1, "see-more-btn"], ["id", "headingcustomicon1Two", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Two", "aria-expanded", "false", "aria-controls", "collapsecustomicon1Two", 1, "accordion-button"], ["id", "collapsecustomicon1Two", "aria-labelledby", "headingcustomicon1Two", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], ["id", "headingcustomicon1Three", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Three", "aria-expanded", "false", "aria-controls", "collapsecustomicon1Three", 1, "accordion-button"], ["id", "collapsecustomicon1Three", "aria-labelledby", "headingcustomicon1Three", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], [1, "custom_check", "custom_one"], [1, "custom_check", "custom_one", "mb-0"], ["id", "headingcustomicon1Four", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Four", "aria-expanded", "false", "aria-controls", "collapsecustomicon1Four", 1, "accordion-button"], ["id", "collapsecustomicon1Four", "aria-labelledby", "headingcustomicon1Four", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], [1, "filter-range"], ["min", "200", "max", "5000", "step", "500", "showTickMarks", "", "discrete", "", 3, "displayWith"], ["matSliderStartThumb", "", 3, "value"], ["matSliderEndThumb", "", 3, "value"], ["id", "headingcustomicon1Five", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Five", "aria-expanded", "false", "aria-controls", "collapsecustomicon1Five", 1, "accordion-button"], ["id", "collapsecustomicon1Five", "aria-labelledby", "headingcustomicon1Five", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], ["id", "headingcustomicon1Six", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Six", "aria-expanded", "false", "aria-controls", "collapsecustomicon1Six", 1, "accordion-button"], ["id", "collapsecustomicon1Six", "aria-labelledby", "headingcustomicon1Six", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], [1, "fa-solid", "fa-star", "text-warning", "me-1"], [1, "fa-solid", "fa-star", "text-warning"], [1, "fa-solid", "fa-star", "text-light"], [1, "fa-solid", "fa-star", "text-light", "me-1"], [1, "col-lg-9"], [1, "showing-list", "mb-4"], [1, "row", "align-items-center"], [1, "col-lg-4"], [1, "show-result", "text-center", "text-lg-start"], [1, "fw-medium"], [1, "col-lg-8"], [1, "show-filter", "add-course-info"], ["action", "#"], [1, "d-sm-flex", "justify-content-center", "justify-content-lg-end", "mb-1", "mb-lg-0"], [1, "view-icons", "mb-2", "mb-sm-0"], [1, "grid-view", "active", 3, "routerLink"], [1, "feather", "icon-grid"], [1, "list-view", 3, "routerLink"], [1, "isax", "isax-task"], [1, "form-select"], [1, "search-group"], [1, "isax", "isax-search-normal-1"], ["type", "text", "placeholder", "Search", 1, "form-control"], [1, "row"], [1, "col-xl-4", "col-md-6"], [1, "course-item-two", "course-item", "mx-0"], [1, "course-img"], [3, "routerLink"], ["src", "assets/img/course/course-01.jpg", "alt", "img", 1, "img-fluid"], [1, "position-absolute", "start-0", "top-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-3"], [1, "badge", "text-bg-danger"], ["href", "javascript:void(0);", 1, "fav-icon", "ms-auto", 3, "click", "ngClass"], [1, "isax", "isax-heart"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", 3, "routerLink"], ["src", "assets/img/user/user-29.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], [1, "ms-2"], [1, "link-default", "fs-14", 3, "routerLink"], [1, "badge", "badge-light", "rounded-pill", "bg-light", "d-inline-flex", "align-items-center", "fs-13", "fw-medium", "mb-0"], [1, "title", "mb-2"], [1, "d-flex", "align-items-center", "mb-3"], [1, "fa-solid", "fa-star", "text-warning", "me-2"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "text-secondary", "mb-0"], [1, "btn", "btn-dark", "btn-sm", "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-arrow-right-3", "ms-1"], ["src", "assets/img/course/course-02.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-30.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], ["src", "assets/img/course/course-03.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-31.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], ["src", "assets/img/course/course-04.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-32.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], ["src", "assets/img/course/course-05.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/course/course-06.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-33.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], ["src", "assets/img/course/course-07.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-34.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], ["src", "assets/img/course/course-08.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-35.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], ["src", "assets/img/course/course-09.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-36.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], [1, "col-md-2"], [1, "pagination-text"], [1, "col-md-10"], [1, "pagination", "lms-page", "justify-content-center", "justify-content-md-end", "mt-2", "mt-md-0"], [1, "page-item", "prev"], ["href", "javascript:void(0)", "tabindex", "-1", 1, "page-link"], [1, "fas", "fa-angle-left"], [1, "page-item", "first-page", "active"], ["href", "javascript:void(0)", 1, "page-link"], [1, "page-item"], [1, "page-item", "next"], [1, "fas", "fa-angle-right"]], template: function CourseGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5");
      \u0275\u0275element(7, "i", 6);
      \u0275\u0275text(8, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 7);
      \u0275\u0275text(10, " Clear ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "h2", 10)(14, "a", 11);
      \u0275\u0275text(15, " Categories ");
      \u0275\u0275element(16, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "div")(20, "label", 15);
      \u0275\u0275element(21, "input", 16)(22, "span", 17);
      \u0275\u0275text(23, " Backend (3) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div")(25, "label", 15);
      \u0275\u0275element(26, "input", 16)(27, "span", 17);
      \u0275\u0275text(28, " CSS (2) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div")(30, "label", 15);
      \u0275\u0275element(31, "input", 16)(32, "span", 17);
      \u0275\u0275text(33, " Frontend (2) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div")(35, "label", 15);
      \u0275\u0275element(36, "input", 16)(37, "span", 17);
      \u0275\u0275text(38, " General (2) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div")(40, "label", 15);
      \u0275\u0275element(41, "input", 18)(42, "span", 17);
      \u0275\u0275text(43, " IT & Software (2) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div")(45, "label", 15);
      \u0275\u0275element(46, "input", 16)(47, "span", 17);
      \u0275\u0275text(48, " Photography (2) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div")(50, "label", 15);
      \u0275\u0275element(51, "input", 16)(52, "span", 17);
      \u0275\u0275text(53, " Programming Language (3) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div")(55, "label", 19);
      \u0275\u0275element(56, "input", 16)(57, "span", 17);
      \u0275\u0275text(58, " Technology (2) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "a", 20);
      \u0275\u0275text(60, "See More");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "div", 9)(62, "h2", 21)(63, "a", 22);
      \u0275\u0275text(64, " Instructors");
      \u0275\u0275element(65, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 23)(67, "div", 14)(68, "div")(69, "label", 15);
      \u0275\u0275element(70, "input", 16)(71, "span", 17);
      \u0275\u0275text(72, " Keny White (10) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div")(74, "label", 15);
      \u0275\u0275element(75, "input", 16)(76, "span", 17);
      \u0275\u0275text(77, " Hinata Hyuga (5) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div")(79, "label", 15);
      \u0275\u0275element(80, "input", 16)(81, "span", 17);
      \u0275\u0275text(82, " John Doe (3) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div")(84, "label", 19);
      \u0275\u0275element(85, "input", 18)(86, "span", 17);
      \u0275\u0275text(87, " Nicole Brown ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "a", 20);
      \u0275\u0275text(89, "See More");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(90, "div", 9)(91, "h2", 24)(92, "a", 25);
      \u0275\u0275text(93, " Price");
      \u0275\u0275element(94, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 26)(96, "div", 14)(97, "div")(98, "label", 27);
      \u0275\u0275element(99, "input", 16)(100, "span", 17);
      \u0275\u0275text(101, " All (10) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div")(103, "label", 27);
      \u0275\u0275element(104, "input", 16)(105, "span", 17);
      \u0275\u0275text(106, " Free (5) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div")(108, "label", 28);
      \u0275\u0275element(109, "input", 16)(110, "span", 17);
      \u0275\u0275text(111, " Paid (3) ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(112, "div", 9)(113, "h2", 29)(114, "a", 30);
      \u0275\u0275text(115, " Range");
      \u0275\u0275element(116, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "div", 31)(118, "div", 14)(119, "div", 32)(120, "mat-slider", 33);
      \u0275\u0275element(121, "input", 34)(122, "input", 35);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(123, "div", 9)(124, "h2", 36)(125, "a", 37);
      \u0275\u0275text(126, " Level");
      \u0275\u0275element(127, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "div", 38)(129, "div", 14)(130, "div")(131, "label", 27);
      \u0275\u0275element(132, "input", 16)(133, "span", 17);
      \u0275\u0275text(134, "Beginner (10) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "div")(136, "label", 27);
      \u0275\u0275element(137, "input", 16)(138, "span", 17);
      \u0275\u0275text(139, " Intermediate (5) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "div")(141, "label", 27);
      \u0275\u0275element(142, "input", 16)(143, "span", 17);
      \u0275\u0275text(144, "Advanced (21) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "div")(146, "label", 28);
      \u0275\u0275element(147, "input", 16)(148, "span", 17);
      \u0275\u0275text(149, "Expert (3) ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(150, "div", 9)(151, "h2", 39)(152, "a", 40);
      \u0275\u0275text(153, " Reviews ");
      \u0275\u0275element(154, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "div", 41)(156, "div", 14)(157, "div")(158, "label", 27);
      \u0275\u0275element(159, "input", 16)(160, "span", 17)(161, "i", 42)(162, "i", 42)(163, "i", 42)(164, "i", 42)(165, "i", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "div")(167, "label", 27);
      \u0275\u0275element(168, "input", 16)(169, "span", 17)(170, "i", 42)(171, "i", 42)(172, "i", 42)(173, "i", 42)(174, "i", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(175, "div")(176, "label", 27);
      \u0275\u0275element(177, "input", 16)(178, "span", 17)(179, "i", 42)(180, "i", 42)(181, "i", 42)(182, "i", 45)(183, "i", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "div")(185, "label", 27);
      \u0275\u0275element(186, "input", 16)(187, "span", 17)(188, "i", 42)(189, "i", 42)(190, "i", 45)(191, "i", 45)(192, "i", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(193, "div")(194, "label", 28);
      \u0275\u0275element(195, "input", 16)(196, "span", 17)(197, "i", 42)(198, "i", 45)(199, "i", 45)(200, "i", 45)(201, "i", 44);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(202, "div", 46)(203, "div", 47)(204, "div", 48)(205, "div", 49)(206, "div", 50)(207, "h6", 51);
      \u0275\u0275text(208, "Showing 1-9 of 50 results");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(209, "div", 52)(210, "div", 53)(211, "form", 54)(212, "div", 55)(213, "div", 56)(214, "a", 57);
      \u0275\u0275element(215, "i", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "a", 59);
      \u0275\u0275element(217, "i", 60);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(218, "select", 61)(219, "option");
      \u0275\u0275text(220, "Newly Published ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "option");
      \u0275\u0275text(222, "Trending Courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "option");
      \u0275\u0275text(224, "Top Rated");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "option");
      \u0275\u0275text(226, "Free Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "div", 62);
      \u0275\u0275element(228, "i", 63)(229, "input", 64);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(230, "div", 65)(231, "div", 66)(232, "div", 67)(233, "div", 68)(234, "a", 69);
      \u0275\u0275element(235, "img", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "div", 71)(237, "div", 72);
      \u0275\u0275text(238, "15% off");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "a", 73);
      \u0275\u0275listener("click", function CourseGridComponent_Template_a_click_239_listener() {
        return ctx.iconSelect(0);
      });
      \u0275\u0275element(240, "i", 74);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(241, "div", 0)(242, "div", 75)(243, "div", 76)(244, "a", 77);
      \u0275\u0275element(245, "img", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "div", 79)(247, "a", 80);
      \u0275\u0275text(248, "Brenda Slaton");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(249, "span", 81);
      \u0275\u0275text(250, " Design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(251, "h6", 82)(252, "a", 69);
      \u0275\u0275text(253, "Information About UI/UX Design Degree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(254, "p", 83);
      \u0275\u0275element(255, "i", 84);
      \u0275\u0275text(256, "4.9 (200 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "div", 85)(258, "h5", 86);
      \u0275\u0275text(259, "$120");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "a", 87);
      \u0275\u0275text(261, "View Course");
      \u0275\u0275element(262, "i", 88);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(263, "div", 66)(264, "div", 67)(265, "div", 68)(266, "a", 69);
      \u0275\u0275element(267, "img", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "div", 71)(269, "a", 73);
      \u0275\u0275listener("click", function CourseGridComponent_Template_a_click_269_listener() {
        return ctx.iconSelect(1);
      });
      \u0275\u0275element(270, "i", 74);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(271, "div", 0)(272, "div", 75)(273, "div", 76)(274, "a", 77);
      \u0275\u0275element(275, "img", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "div", 79)(277, "a", 80);
      \u0275\u0275text(278, "Ana Reyes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(279, "span", 81);
      \u0275\u0275text(280, " Wordpress ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(281, "h6", 82)(282, "a", 69);
      \u0275\u0275text(283, "Wordpress for Beginners - Master Wordpress Quickly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(284, "p", 83);
      \u0275\u0275element(285, "i", 84);
      \u0275\u0275text(286, "4.4 (160 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "div", 85)(288, "h5", 86);
      \u0275\u0275text(289, "$140");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "a", 87);
      \u0275\u0275text(291, "View Course");
      \u0275\u0275element(292, "i", 88);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(293, "div", 66)(294, "div", 67)(295, "div", 68)(296, "a", 69);
      \u0275\u0275element(297, "img", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "div", 71)(299, "a", 73);
      \u0275\u0275listener("click", function CourseGridComponent_Template_a_click_299_listener() {
        return ctx.iconSelect(2);
      });
      \u0275\u0275element(300, "i", 74);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(301, "div", 0)(302, "div", 75)(303, "div", 76)(304, "a", 77);
      \u0275\u0275element(305, "img", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "div", 79)(307, "a", 80);
      \u0275\u0275text(308, "Andrew Pirtle");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(309, "span", 81);
      \u0275\u0275text(310, " Design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(311, "h6", 82)(312, "a", 69);
      \u0275\u0275text(313, "Sketch from A to Z (2024): Become an app designer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "p", 83);
      \u0275\u0275element(315, "i", 84);
      \u0275\u0275text(316, "4.4 (160 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "div", 85)(318, "h5", 86);
      \u0275\u0275text(319, "$140");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "a", 87);
      \u0275\u0275text(321, "View Course");
      \u0275\u0275element(322, "i", 88);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(323, "div", 66)(324, "div", 67)(325, "div", 68)(326, "a", 69);
      \u0275\u0275element(327, "img", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(328, "div", 71)(329, "a", 73);
      \u0275\u0275listener("click", function CourseGridComponent_Template_a_click_329_listener() {
        return ctx.iconSelect(3);
      });
      \u0275\u0275element(330, "i", 74);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(331, "div", 0)(332, "div", 75)(333, "div", 76)(334, "a", 77);
      \u0275\u0275element(335, "img", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "div", 79)(337, "a", 80);
      \u0275\u0275text(338, "Christy Garner");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(339, "span", 81);
      \u0275\u0275text(340, " Programming ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(341, "h6", 82)(342, "a", 69);
      \u0275\u0275text(343, "Build Responsive Real World Websites with Crash Course");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(344, "p", 83);
      \u0275\u0275element(345, "i", 84);
      \u0275\u0275text(346, "4.2 (220 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(347, "div", 85)(348, "h5", 86);
      \u0275\u0275text(349, "$200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "a", 87);
      \u0275\u0275text(351, "View Course");
      \u0275\u0275element(352, "i", 88);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(353, "div", 66)(354, "div", 67)(355, "div", 68)(356, "a", 69);
      \u0275\u0275element(357, "img", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "div", 71)(359, "a", 73);
      \u0275\u0275listener("click", function CourseGridComponent_Template_a_click_359_listener() {
        return ctx.iconSelect(4);
      });
      \u0275\u0275element(360, "i", 74);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(361, "div", 0)(362, "div", 75)(363, "div", 76)(364, "a", 77);
      \u0275\u0275element(365, "img", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "div", 79)(367, "a", 80);
      \u0275\u0275text(368, "Justin Gregory");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(369, "span", 81);
      \u0275\u0275text(370, " Programming ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(371, "h6", 82)(372, "a", 69);
      \u0275\u0275text(373, "Learn JavaScript and Express to become a Expert");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(374, "p", 83);
      \u0275\u0275element(375, "i", 84);
      \u0275\u0275text(376, "4.4 (180 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "div", 85)(378, "h5", 86);
      \u0275\u0275text(379, "$130");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(380, "a", 87);
      \u0275\u0275text(381, "View Course");
      \u0275\u0275element(382, "i", 88);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(383, "div", 66)(384, "div", 67)(385, "div", 68)(386, "a", 69);
      \u0275\u0275element(387, "img", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(388, "div", 71)(389, "a", 73);
      \u0275\u0275listener("click", function CourseGridComponent_Template_a_click_389_listener() {
        return ctx.iconSelect(5);
      });
      \u0275\u0275element(390, "i", 74);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(391, "div", 0)(392, "div", 75)(393, "div", 76)(394, "a", 77);
      \u0275\u0275element(395, "img", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(396, "div", 79)(397, "a", 80);
      \u0275\u0275text(398, "Carolyn Hines");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(399, "span", 81);
      \u0275\u0275text(400, " Programming ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(401, "h6", 82)(402, "a", 69);
      \u0275\u0275text(403, "Introduction to Python Programming");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(404, "p", 83);
      \u0275\u0275element(405, "i", 84);
      \u0275\u0275text(406, "4.4 (180 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(407, "div", 85)(408, "h5", 86);
      \u0275\u0275text(409, "$130");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(410, "a", 87);
      \u0275\u0275text(411, "View Course");
      \u0275\u0275element(412, "i", 88);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(413, "div", 66)(414, "div", 67)(415, "div", 68)(416, "a", 69);
      \u0275\u0275element(417, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(418, "div", 71)(419, "a", 73);
      \u0275\u0275listener("click", function CourseGridComponent_Template_a_click_419_listener() {
        return ctx.iconSelect(6);
      });
      \u0275\u0275element(420, "i", 74);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(421, "div", 0)(422, "div", 75)(423, "div", 76)(424, "a", 77);
      \u0275\u0275element(425, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "div", 79)(427, "a", 80);
      \u0275\u0275text(428, "Rafael Miller");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(429, "span", 81);
      \u0275\u0275text(430, " Programming ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(431, "h6", 82)(432, "a", 69);
      \u0275\u0275text(433, "Build Responsive Websites with HTML5 and CSS3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(434, "p", 83);
      \u0275\u0275element(435, "i", 84);
      \u0275\u0275text(436, "4.4 (180 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(437, "div", 85)(438, "h5", 86);
      \u0275\u0275text(439, "$170");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(440, "a", 87);
      \u0275\u0275text(441, "View Course");
      \u0275\u0275element(442, "i", 88);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(443, "div", 66)(444, "div", 67)(445, "div", 68)(446, "a", 69);
      \u0275\u0275element(447, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(448, "div", 71)(449, "a", 73);
      \u0275\u0275listener("click", function CourseGridComponent_Template_a_click_449_listener() {
        return ctx.iconSelect(7);
      });
      \u0275\u0275element(450, "i", 74);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(451, "div", 0)(452, "div", 75)(453, "div", 76)(454, "a", 77);
      \u0275\u0275element(455, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(456, "div", 79)(457, "a", 80);
      \u0275\u0275text(458, "Nancy Duarte");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(459, "span", 81);
      \u0275\u0275text(460, " Design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(461, "h6", 82)(462, "a", 69);
      \u0275\u0275text(463, "Information About Photoshop Design Degree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(464, "p", 83);
      \u0275\u0275element(465, "i", 84);
      \u0275\u0275text(466, "4.4 (180 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(467, "div", 85)(468, "h5", 86);
      \u0275\u0275text(469, "$170");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(470, "a", 87);
      \u0275\u0275text(471, "View Course");
      \u0275\u0275element(472, "i", 88);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(473, "div", 66)(474, "div", 67)(475, "div", 68)(476, "a", 69);
      \u0275\u0275element(477, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(478, "div", 71)(479, "a", 73);
      \u0275\u0275listener("click", function CourseGridComponent_Template_a_click_479_listener() {
        return ctx.iconSelect(8);
      });
      \u0275\u0275element(480, "i", 74);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(481, "div", 0)(482, "div", 75)(483, "div", 76)(484, "a", 77);
      \u0275\u0275element(485, "img", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(486, "div", 79)(487, "a", 80);
      \u0275\u0275text(488, "James Kagan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(489, "span", 81);
      \u0275\u0275text(490, " Design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(491, "h6", 82)(492, "a", 69);
      \u0275\u0275text(493, "C# Developers Double Your Coding with Visual Studio");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(494, "p", 83);
      \u0275\u0275element(495, "i", 84);
      \u0275\u0275text(496, "4.4 (180 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(497, "div", 85)(498, "h5", 86);
      \u0275\u0275text(499, "$180");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(500, "a", 87);
      \u0275\u0275text(501, "View Course");
      \u0275\u0275element(502, "i", 88);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(503, "div", 48)(504, "div", 104)(505, "p", 105);
      \u0275\u0275text(506, "Page 1 of 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(507, "div", 106)(508, "ul", 107)(509, "li", 108)(510, "a", 109);
      \u0275\u0275element(511, "i", 110);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(512, "li", 111)(513, "a", 112);
      \u0275\u0275text(514, "1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(515, "li", 113)(516, "a", 112);
      \u0275\u0275text(517, "2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(518, "li", 113)(519, "a", 112);
      \u0275\u0275text(520, "3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(521, "li", 114)(522, "a", 112);
      \u0275\u0275element(523, "i", 115);
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(120);
      \u0275\u0275property("displayWith", ctx.formatLabel1);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.startValue);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.endValue);
      \u0275\u0275advance(92);
      \u0275\u0275property("routerLink", ctx.routes.courseGrid);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.courseList);
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(59, _c0, ctx.isSelected[0]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(61, _c0, ctx.isSelected[1]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(63, _c0, ctx.isSelected[2]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(65, _c0, ctx.isSelected[3]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(67, _c0, ctx.isSelected[4]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(69, _c0, ctx.isSelected[5]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(71, _c0, ctx.isSelected[6]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(73, _c0, ctx.isSelected[7]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(75, _c0, ctx.isSelected[8]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
    }
  }, dependencies: [CommonModule, NgClass, RouterLink, MatSliderModule, MatSlider, MatSliderRangeThumb], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseGridComponent, [{
    type: Component,
    args: [{ selector: "app-course-grid", imports: [CommonModule, RouterLink, MatSliderModule], template: `			\r
            \r
            \r
            <!-- Course -->\r
			<section class="course-content">\r
				<div class="container">\r
					<div class="row align-items-baseline">\r
						<div class="col-lg-3 theiaStickySidebar">\r
							<div class="filter-clear">\r
								<div class="clear-filter mb-4 pb-lg-2 d-flex align-items-center justify-content-between">\r
									<h5><i class="feather icon-filter me-2"></i>Filters</h5>\r
									<a href="javascript:void(0);" class="clear-text">\r
										Clear\r
									</a>\r
								</div>\r
\r
								<div class="accordion accordion-customicon1 accordions-items-seperate">\r
									<div class="accordion-item">\r
										<h2 class="accordion-header" id="headingcustomicon1One">\r
											<a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1One" aria-expanded="false" aria-controls="collapsecustomicon1One">\r
											Categories <i class="fa-solid fa-chevron-down"></i>\r
											</a>\r
										</h2>\r
										<div id="collapsecustomicon1One" class="accordion-collapse collapse show" aria-labelledby="headingcustomicon1One" data-bs-parent="#accordioncustomicon1Example">\r
											<div class="accordion-body">\r
												<div>\r
													<label class="custom_check">\r
														<input type="checkbox" name="select_specialist" >\r
														<span class="checkmark"></span> Backend (3)\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check">\r
														<input type="checkbox" name="select_specialist" >\r
														<span class="checkmark"></span>  CSS (2)\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span>  Frontend (2)\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span> General (2)\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check">\r
														<input type="checkbox" name="select_specialist" checked>\r
														<span class="checkmark"></span> IT & Software (2)\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span> Photography (2)\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span>  Programming Language (3)\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check mb-0">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span>  Technology (2)\r
													</label>\r
												</div>\r
												<a href="javascript:void(0);" class="see-more-btn">See More</a>\r
											</div>\r
										</div>\r
									</div>\r
									<div class="accordion-item">\r
										<h2 class="accordion-header" id="headingcustomicon1Two">\r
											<a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Two" aria-expanded="false" aria-controls="collapsecustomicon1Two">\r
											Instructors<i class="fa-solid fa-chevron-down"></i>\r
											</a>\r
										</h2>\r
										<div id="collapsecustomicon1Two" class="accordion-collapse collapse show" aria-labelledby="headingcustomicon1Two" data-bs-parent="#accordioncustomicon1Example">\r
											<div class="accordion-body">\r
												<div>\r
													<label class="custom_check">\r
														<input type="checkbox" name="select_specialist" >\r
														<span class="checkmark"></span> Keny White (10)\r
	\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check">\r
														<input type="checkbox" name="select_specialist" >\r
														<span class="checkmark"></span>  Hinata Hyuga (5)\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span>  John Doe (3)\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check mb-0">\r
														<input type="checkbox" name="select_specialist" checked>\r
														<span class="checkmark"></span> Nicole Brown\r
													</label>\r
												</div>\r
												<a href="javascript:void(0);" class="see-more-btn">See More</a>\r
											</div>\r
										</div>\r
									</div>\r
									<div class="accordion-item">\r
										<h2 class="accordion-header" id="headingcustomicon1Three">\r
											<a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Three" aria-expanded="false" aria-controls="collapsecustomicon1Three">\r
											Price<i class="fa-solid fa-chevron-down"></i>\r
											</a>\r
										</h2>\r
										<div id="collapsecustomicon1Three" class="accordion-collapse collapse show" aria-labelledby="headingcustomicon1Three" data-bs-parent="#accordioncustomicon1Example">\r
											<div class="accordion-body">\r
												<div>\r
													<label class="custom_check custom_one">\r
														<input type="checkbox" name="select_specialist" >\r
														<span class="checkmark"></span> All (10)\r
	\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check custom_one">\r
														<input type="checkbox" name="select_specialist" >\r
														<span class="checkmark"></span>  Free (5) \r
	\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check custom_one mb-0">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span>  Paid (3)\r
													</label>\r
												</div>\r
											</div>\r
										</div>\r
									</div>\r
									<div class="accordion-item">\r
										<h2 class="accordion-header" id="headingcustomicon1Four">\r
											<a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Four" aria-expanded="false" aria-controls="collapsecustomicon1Four">\r
											Range<i class="fa-solid fa-chevron-down"></i>\r
											</a>\r
										</h2>\r
										<div id="collapsecustomicon1Four" class="accordion-collapse collapse show" aria-labelledby="headingcustomicon1Four" data-bs-parent="#accordioncustomicon1Example">\r
											<div class="accordion-body">\r
												<div class="filter-range">\r
													<mat-slider min="200" max="5000" step="500" showTickMarks discrete [displayWith]="formatLabel1">\r
                                                        <input matSliderStartThumb [value]="startValue">\r
                                                        <input matSliderEndThumb [value]="endValue">\r
                                                    </mat-slider>\r
												</div>\r
											</div>\r
										</div>\r
									</div>\r
									<div class="accordion-item">\r
										<h2 class="accordion-header" id="headingcustomicon1Five">\r
											<a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Five" aria-expanded="false" aria-controls="collapsecustomicon1Five">\r
											Level<i class="fa-solid fa-chevron-down"></i>\r
											</a>\r
										</h2>\r
										<div id="collapsecustomicon1Five" class="accordion-collapse collapse show" aria-labelledby="headingcustomicon1Five" data-bs-parent="#accordioncustomicon1Example">\r
											<div class="accordion-body">\r
												<div>\r
													<label class="custom_check custom_one">\r
														<input type="checkbox" name="select_specialist" >\r
														<span class="checkmark"></span>Beginner (10)\r
	\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check custom_one">\r
														<input type="checkbox" name="select_specialist" >\r
														<span class="checkmark"></span> Intermediate (5)\r
	\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check custom_one">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span>Advanced (21)\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check custom_one mb-0">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span>Expert  (3)\r
													</label>\r
												</div>\r
											</div>\r
										</div>\r
									</div>\r
									<div class="accordion-item">\r
										<h2 class="accordion-header" id="headingcustomicon1Six">\r
											<a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Six" aria-expanded="false" aria-controls="collapsecustomicon1Six">\r
											Reviews <i class="fa-solid fa-chevron-down"></i>\r
											</a>\r
										</h2>\r
										<div id="collapsecustomicon1Six" class="accordion-collapse collapse show" aria-labelledby="headingcustomicon1Six" data-bs-parent="#accordioncustomicon1Example">\r
											<div class="accordion-body">\r
												<div>\r
													<label class="custom_check custom_one">\r
														<input type="checkbox" name="select_specialist" >\r
														<span class="checkmark"></span>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-warning"></i>\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check custom_one">\r
														<input type="checkbox" name="select_specialist" >\r
														<span class="checkmark"></span>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-light"></i>\r
	\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check custom_one">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-light me-1"></i>\r
														<i class="fa-solid fa-star text-light"></i>\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check custom_one">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-light me-1"></i>\r
														<i class="fa-solid fa-star text-light me-1"></i>\r
														<i class="fa-solid fa-star text-light"></i>\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check custom_one mb-0">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-light me-1"></i>\r
														<i class="fa-solid fa-star text-light me-1"></i>\r
														<i class="fa-solid fa-star text-light me-1"></i>\r
														<i class="fa-solid fa-star text-light"></i>\r
													</label>\r
												</div>\r
											</div>\r
										</div>\r
									</div>\r
								</div>\r
\r
							</div>\r
						</div>\r
						<div class="col-lg-9">\r
						\r
							<!-- Filter -->\r
							<div class="showing-list mb-4">\r
								<div class="row align-items-center">\r
									<div class="col-lg-4">\r
											<div class="show-result text-center text-lg-start">\r
												<h6 class="fw-medium">Showing 1-9 of 50 results</h6>\r
											</div>\r
									</div>\r
									<div class="col-lg-8">	\r
										<div class="show-filter add-course-info">\r
											<form action="#">\r
												<div class="d-sm-flex justify-content-center justify-content-lg-end mb-1 mb-lg-0">\r
													<div class="view-icons mb-2 mb-sm-0">\r
														<a [routerLink]="routes.courseGrid" class="grid-view active"><i class="feather icon-grid"></i></a>\r
														<a [routerLink]="routes.courseList" class="list-view"><i class="isax isax-task"></i></a>\r
													</div>\r
													<select class="form-select">\r
														<option>Newly Published </option>\r
														<option>Trending Courses</option>\r
														<option>Top Rated</option>\r
														<option>Free Courses</option>\r
													</select>\r
													<div class=" search-group">\r
														<i class="isax isax-search-normal-1"></i>\r
														<input type="text" class="form-control" placeholder="Search" >\r
													</div>\r
												</div>\r
											</form>\r
										</div>	\r
									</div>\r
								</div>\r
							</div>\r
							<!-- /Filter -->\r
							\r
							<div class="row">\r
								<div class="col-xl-4 col-md-6">\r
									<div class="course-item-two course-item mx-0">\r
										<div class="course-img">\r
											<a [routerLink]="routes.courseDetails">\r
												<img src="assets/img/course/course-01.jpg" alt="img" class="img-fluid">  \r
											</a>\r
											<div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">\r
												<div class="badge text-bg-danger">15% off</div>\r
												<a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[0]}" (click)="iconSelect(0)"><i class="isax isax-heart"></i></a>\r
											</div>\r
										</div>\r
										<div class="course-content">\r
											<div class="d-flex justify-content-between mb-2">\r
												<div class="d-flex align-items-center">\r
													<a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">\r
														<img src="assets/img/user/user-29.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">\r
													</a>\r
													<div class="ms-2">\r
														<a [routerLink]="routes.instructorDetails" class="link-default fs-14">Brenda Slaton</a>\r
													</div>\r
												</div>\r
												<span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">\r
													Design\r
												</span>\r
											</div>\r
											<h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Information About UI/UX Design Degree</a></h6>\r
											<p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.9 (200 Reviews)</p>\r
											<div class="d-flex align-items-center justify-content-between">\r
												<h5 class="text-secondary mb-0">$120</h5>\r
												<a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>\r
											</div>\r
										</div>\r
									</div>\r
								</div>\r
								<div class="col-xl-4 col-md-6">\r
									<div class="course-item-two course-item mx-0">\r
										<div class="course-img">\r
											<a [routerLink]="routes.courseDetails">\r
												<img src="assets/img/course/course-02.jpg" alt="img" class="img-fluid">  \r
											</a>\r
											<div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">\r
												<a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[1]}" (click)="iconSelect(1)"><i class="isax isax-heart"></i></a>\r
											</div>\r
										</div>\r
										<div class="course-content">\r
											<div class="d-flex justify-content-between mb-2">\r
												<div class="d-flex align-items-center">\r
													<a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">\r
														<img src="assets/img/user/user-30.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">\r
													</a>\r
													<div class="ms-2">\r
														<a [routerLink]="routes.instructorDetails" class="link-default fs-14">Ana Reyes</a>\r
													</div>\r
												</div>\r
												<span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">\r
													Wordpress\r
												</span>\r
											</div>\r
											<h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Wordpress for Beginners - Master Wordpress Quickly</a></h6>\r
											<p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (160 Reviews)</p>\r
											<div class="d-flex align-items-center justify-content-between">\r
												<h5 class="text-secondary mb-0">$140</h5>\r
												<a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>\r
											</div>\r
										</div>\r
									</div>\r
								</div>\r
								<div class="col-xl-4 col-md-6">\r
									<div class="course-item-two course-item mx-0">\r
										<div class="course-img">\r
											<a [routerLink]="routes.courseDetails">\r
												<img src="assets/img/course/course-03.jpg" alt="img" class="img-fluid">  \r
											</a>\r
											<div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">\r
												<a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[2]}" (click)="iconSelect(2)"><i class="isax isax-heart"></i></a>\r
											</div>\r
										</div>\r
										<div class="course-content">\r
											<div class="d-flex justify-content-between mb-2">\r
												<div class="d-flex align-items-center">\r
													<a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">\r
														<img src="assets/img/user/user-31.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">\r
													</a>\r
													<div class="ms-2">\r
														<a [routerLink]="routes.instructorDetails" class="link-default fs-14">Andrew Pirtle</a>\r
													</div>\r
												</div>\r
												<span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">\r
													Design\r
												</span>\r
											</div>\r
											<h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Sketch from A to Z (2024): Become an app designer</a></h6>\r
											<p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (160 Reviews)</p>\r
											<div class="d-flex align-items-center justify-content-between">\r
												<h5 class="text-secondary mb-0">$140</h5>\r
												<a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>\r
											</div>\r
										</div>\r
									</div>\r
								</div>\r
								<div class="col-xl-4 col-md-6">\r
									<div class="course-item-two course-item mx-0">\r
										<div class="course-img">\r
											<a [routerLink]="routes.courseDetails">\r
												<img src="assets/img/course/course-04.jpg" alt="img" class="img-fluid">  \r
											</a>\r
											<div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">\r
												<a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[3]}" (click)="iconSelect(3)"><i class="isax isax-heart"></i></a>\r
											</div>\r
										</div>\r
										<div class="course-content">\r
											<div class="d-flex justify-content-between mb-2">\r
												<div class="d-flex align-items-center">\r
													<a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">\r
														<img src="assets/img/user/user-32.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">\r
													</a>\r
													<div class="ms-2">\r
														<a [routerLink]="routes.instructorDetails" class="link-default fs-14">Christy Garner</a>\r
													</div>\r
												</div>\r
												<span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">\r
													Programming\r
												</span>\r
											</div>\r
											<h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Build Responsive Real World Websites with Crash Course</a></h6>\r
											<p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.2 (220 Reviews)</p>\r
											<div class="d-flex align-items-center justify-content-between">\r
												<h5 class="text-secondary mb-0">$200</h5>\r
												<a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>\r
											</div>\r
										</div>\r
									</div>\r
								</div>\r
								<div class="col-xl-4 col-md-6">\r
									<div class="course-item-two course-item mx-0">\r
										<div class="course-img">\r
											<a [routerLink]="routes.courseDetails">\r
												<img src="assets/img/course/course-05.jpg" alt="img" class="img-fluid">  \r
											</a>\r
											<div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">\r
												<a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[4]}" (click)="iconSelect(4)"><i class="isax isax-heart"></i></a>\r
											</div>\r
										</div>\r
										<div class="course-content">\r
											<div class="d-flex justify-content-between mb-2">\r
												<div class="d-flex align-items-center">\r
													<a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">\r
														<img src="assets/img/user/user-32.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">\r
													</a>\r
													<div class="ms-2">\r
														<a [routerLink]="routes.instructorDetails" class="link-default fs-14">Justin Gregory</a>\r
													</div>\r
												</div>\r
												<span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">\r
													Programming\r
												</span>\r
											</div>\r
											<h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Learn JavaScript and Express to become a Expert</a></h6>\r
											<p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (180 Reviews)</p>\r
											<div class="d-flex align-items-center justify-content-between">\r
												<h5 class="text-secondary mb-0">$130</h5>\r
												<a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>\r
											</div>\r
										</div>\r
									</div>\r
								</div>\r
								<div class="col-xl-4 col-md-6">\r
									<div class="course-item-two course-item mx-0">\r
										<div class="course-img">\r
											<a [routerLink]="routes.courseDetails">\r
												<img src="assets/img/course/course-06.jpg" alt="img" class="img-fluid">  \r
											</a>\r
											<div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">\r
												<a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[5]}" (click)="iconSelect(5)"><i class="isax isax-heart"></i></a>\r
											</div>\r
										</div>\r
										<div class="course-content">\r
											<div class="d-flex justify-content-between mb-2">\r
												<div class="d-flex align-items-center">\r
													<a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">\r
														<img src="assets/img/user/user-33.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">\r
													</a>\r
													<div class="ms-2">\r
														<a [routerLink]="routes.instructorDetails" class="link-default fs-14">Carolyn Hines</a>\r
													</div>\r
												</div>\r
												<span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">\r
													Programming\r
												</span>\r
											</div>\r
											<h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Introduction to Python Programming</a></h6>\r
											<p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (180 Reviews)</p>\r
											<div class="d-flex align-items-center justify-content-between">\r
												<h5 class="text-secondary mb-0">$130</h5>\r
												<a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>\r
											</div>\r
										</div>\r
									</div>\r
								</div>\r
								<div class="col-xl-4 col-md-6">\r
									<div class="course-item-two course-item mx-0">\r
										<div class="course-img">\r
											<a [routerLink]="routes.courseDetails">\r
												<img src="assets/img/course/course-07.jpg" alt="img" class="img-fluid">  \r
											</a>\r
											<div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">\r
												<a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[6]}" (click)="iconSelect(6)"><i class="isax isax-heart"></i></a>\r
											</div>\r
										</div>\r
										<div class="course-content">\r
											<div class="d-flex justify-content-between mb-2">\r
												<div class="d-flex align-items-center">\r
													<a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">\r
														<img src="assets/img/user/user-34.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">\r
													</a>\r
													<div class="ms-2">\r
														<a [routerLink]="routes.instructorDetails" class="link-default fs-14">Rafael Miller</a>\r
													</div>\r
												</div>\r
												<span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">\r
													Programming\r
												</span>\r
											</div>\r
											<h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML5 and CSS3</a></h6>\r
											<p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (180 Reviews)</p>\r
											<div class="d-flex align-items-center justify-content-between">\r
												<h5 class="text-secondary mb-0">$170</h5>\r
												<a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>\r
											</div>\r
										</div>\r
									</div>\r
								</div>\r
								<div class="col-xl-4 col-md-6">\r
									<div class="course-item-two course-item mx-0">\r
										<div class="course-img">\r
											<a [routerLink]="routes.courseDetails">\r
												<img src="assets/img/course/course-08.jpg" alt="img" class="img-fluid">  \r
											</a>\r
											<div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">\r
												<a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[7]}" (click)="iconSelect(7)"><i class="isax isax-heart"></i></a>\r
											</div>\r
										</div>\r
										<div class="course-content">\r
											<div class="d-flex justify-content-between mb-2">\r
												<div class="d-flex align-items-center">\r
													<a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">\r
														<img src="assets/img/user/user-35.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">\r
													</a>\r
													<div class="ms-2">\r
														<a [routerLink]="routes.instructorDetails" class="link-default fs-14">Nancy Duarte</a>\r
													</div>\r
												</div>\r
												<span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">\r
													Design\r
												</span>\r
											</div>\r
											<h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Information About Photoshop Design Degree</a></h6>\r
											<p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (180 Reviews)</p>\r
											<div class="d-flex align-items-center justify-content-between">\r
												<h5 class="text-secondary mb-0">$170</h5>\r
												<a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>\r
											</div>\r
										</div>\r
									</div>\r
								</div>\r
								<div class="col-xl-4 col-md-6">\r
									<div class="course-item-two course-item mx-0">\r
										<div class="course-img">\r
											<a [routerLink]="routes.courseDetails">\r
												<img src="assets/img/course/course-09.jpg" alt="img" class="img-fluid">  \r
											</a>\r
											<div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">\r
												<a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[8]}" (click)="iconSelect(8)"><i class="isax isax-heart"></i></a>\r
											</div>\r
										</div>\r
										<div class="course-content">\r
											<div class="d-flex justify-content-between mb-2">\r
												<div class="d-flex align-items-center">\r
													<a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">\r
														<img src="assets/img/user/user-36.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">\r
													</a>\r
													<div class="ms-2">\r
														<a [routerLink]="routes.instructorDetails" class="link-default fs-14">James Kagan</a>\r
													</div>\r
												</div>\r
												<span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">\r
													Design\r
												</span>\r
											</div>\r
											<h6 class="title mb-2"><a [routerLink]="routes.courseDetails">C# Developers Double Your Coding with Visual Studio</a></h6>\r
											<p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (180 Reviews)</p>\r
											<div class="d-flex align-items-center justify-content-between">\r
												<h5 class="text-secondary mb-0">$180</h5>\r
												<a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>\r
											</div>\r
										</div>\r
									</div>\r
								</div>\r
							</div>\r
							\r
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
						</div>\r
					</div>\r
				</div>\r
			</section>\r
			<!-- /Course -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseGridComponent, { className: "CourseGridComponent", filePath: "app/features/courses/course-grid/course-grid.component.ts", lineNumber: 13 });
})();
export {
  CourseGridComponent
};
//# sourceMappingURL=chunk-6C34ZZT7.js.map
