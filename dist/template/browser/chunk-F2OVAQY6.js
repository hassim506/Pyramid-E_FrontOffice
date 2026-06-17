import {
  SlickCarouselComponent,
  SlickCarouselModule,
  SlickItemDirective
} from "./chunk-RAWGSTJW.js";
import {
  routes
} from "./chunk-YJLHMFCU.js";
import "./chunk-HLA233IM.js";
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

// src/app/features/pages/instructor-details/instructor-details.component.ts
var InstructorDetailsComponent = class _InstructorDetailsComponent {
  routes = routes;
  courseCarousel = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };
  static \u0275fac = function InstructorDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorDetailsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorDetailsComponent, selectors: [["app-instructor-details"]], decls: 245, vars: 13, consts: [[1, "instructor-detail-content"], [1, "container"], [1, "row"], [1, "col-lg-8"], [1, "card", "bg-light", "mb-4"], [1, "card-body", "instructor-details"], [1, "instructor-img"], ["href", "javascript:void(0);"], ["src", "assets/img/user/user-61.jpg", "alt", "img", 1, "img-fluid"], ["href", "javascript:void(0);", 1, "btn", "heart"], [1, "isax", "isax-heart5", "text-danger"], [1, "flex-fill"], [1, "pb-3", "border-bottom", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-1"], [1, "fw-bold"], [1, "d-flex", "align-items-center", "mb-1"], ["href", "javascript:void(0);", 1, "fs-14", "me-2"], [1, "me-2"], [1, "fa-solid", "fa-star", "text-warning"], [1, "fs-14"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap"], [1, "d-flex", "align-items-center", "counts-details"], [1, "d-flex", "align-items-center", "me-4"], [1, "d-flex", "align-items-center"], [1, "isax", "isax-book-saved5", "fs-16", "text-secondary", "me-2"], [1, "isax", "isax-profile-2user5", "fs-16", "text-secondary", "me-2"], ["href", "javascript:void(0);", 1, "rounded-circle", "d-inline-flex", "align-items-center", "justify-content-center", "me-2"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-x-twitter"], [1, "fa-brands", "fa-youtube"], ["href", "javascript:void(0);", 1, "rounded-circle", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "fa-brands", "fa-linkedin-in"], [1, "card"], [1, "card-body"], [1, "mb-3"], ["href", "javascript:void(0);", 1, "read-more-btn"], [1, "education-flow"], [1, "ps-4", "pb-4", "timeline-flow"], [1, "mb-1"], [1, "ps-4", "timeline-flow"], [1, "d-flex", "align-items-center", "mb-4"], [1, "bg-light", "border", "avatar", "avatar-lg", "text-gray-9", "flex-shrink-0", "me-3"], [1, "isax", "isax-briefcase"], [1, "card", "border-0"], [1, "card-body", "p-0"], [1, "course-carousal"], [3, "config"], ["ngxSlickItem", ""], [1, "course-item", "course-item-three", "mx-2", "mb-0"], [1, "course-carousal-img", "position-relative", "overflow-hidden", "rounded-3", "mb-3"], [3, "routerLink"], ["src", "./assets/img/course/course-02.jpg", "alt", "img", 1, "img-fluid", "rounded-3"], [1, "position-absolute", "start-0", "top-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-2"], ["href", "javascript:void(0);", 1, "like"], [1, "isax", "isax-heart", "color-active"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between"], [1, "avatar", "avatar-sm", "rounded-circle"], ["src", "./assets/img/avatar/avatar2.jpg", "alt", "img", 1, "img-fluid", "rounded-circle", "object-fit-cover"], [1, "ms-2"], [1, "tag-btn"], [1, "mt-3", "mb-2", "text-truncate", "line-clamb-2"], [1, "ti", "ti-star-filled", "text-warning"], [1, "d-flex", "justify-content-between", "mt-3", "align-items-center"], [1, "fs-16", "text-secondary"], [1, "btn", "view-course-btn", 3, "routerLink"], [1, "fs-8", "fas", "fa-angle-right", "ms-2"], ["src", "./assets/img/course/course-03.jpg", "alt", "img", 1, "img-fluid", "rounded-3"], ["src", "./assets/img/avatar/avatar3.jpg", "alt", "img", 1, "img-fluid", "rounded-circle", "object-fit-cover"], ["src", "./assets/img/course/course-04.jpg", "alt", "img", 1, "img-fluid", "rounded-3"], ["src", "./assets/img/avatar/avatar4.jpg", "alt", "img", 1, "img-fluid", "rounded-circle", "object-fit-cover"], [1, "mt-3", "mb-2"], [1, "text-truncate", "line-clamb-2", 3, "routerLink"], [1, "col-lg-4"], [1, "certificate-img", "rounded-circle", "me-2"], ["src", "assets/img/certificates/certificate-01.svg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/certificates/certificate-02.svg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/certificates/certificate-03.svg", "alt", "img", 1, "img-fluid"], [1, "certificate-img", "rounded-circle"], [1, "contact-icon", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "me-3"], [1, "fa-regular", "fa-envelope"], [1, "mb-0"], [1, "isax", "isax-location"], [1, "fs-16", "fw-medium", "text-gray-9", "mb-0"], [1, "mb-0", "text-truncate"], [1, "isax", "isax-call"]], template: function InstructorDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "a", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 9);
      \u0275\u0275element(10, "i", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "div", 13)(14, "h6", 14)(15, "a", 7);
      \u0275\u0275text(16, "Rolands Granger");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 15)(18, "a", 16);
      \u0275\u0275text(19, "Developer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 17);
      \u0275\u0275element(21, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 19);
      \u0275\u0275text(23, "4.9 (200 Reviews)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div")(25, "p");
      \u0275\u0275text(26, "I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 20)(28, "div", 21)(29, "span", 22)(30, "span", 23);
      \u0275\u0275element(31, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " 12+ Lesson ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span", 23)(34, "span", 23);
      \u0275\u0275element(35, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, " 50 Students ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 23)(38, "span")(39, "a", 26);
      \u0275\u0275element(40, "i", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "span")(42, "a", 26);
      \u0275\u0275element(43, "i", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "span")(45, "a", 26);
      \u0275\u0275element(46, "i", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "span")(48, "a", 26);
      \u0275\u0275element(49, "i", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "span")(51, "a", 31);
      \u0275\u0275element(52, "i", 32);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(53, "div", 33)(54, "div", 34)(55, "h5", 35);
      \u0275\u0275text(56, "About Me");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p", 35);
      \u0275\u0275text(58, "Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "a", 36);
      \u0275\u0275text(60, "Read More");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "div", 33)(62, "div", 34)(63, "h5", 35);
      \u0275\u0275text(64, "Education");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 37)(66, "div", 38)(67, "div")(68, "h6", 39);
      \u0275\u0275text(69, "BCA - Bachelor of Computer Applications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "p", 19);
      \u0275\u0275text(71, "International University - (2004 - 2010)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "div", 38)(73, "div")(74, "h6", 39);
      \u0275\u0275text(75, "MCA - Master of Computer Application");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "p", 19);
      \u0275\u0275text(77, "International University - (2010 - 2012)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "div", 40)(79, "div")(80, "h6", 39);
      \u0275\u0275text(81, "Design Communication Visual");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "p", 19);
      \u0275\u0275text(83, "International University - (2012-2015)");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(84, "div", 33)(85, "div", 34)(86, "h5", 35);
      \u0275\u0275text(87, "Experience");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 41)(89, "span", 42);
      \u0275\u0275element(90, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div")(92, "h6", 39);
      \u0275\u0275text(93, "Web Design & Development Team Leader");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "p");
      \u0275\u0275text(95, "Creative Agency - (2013 - 2016)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(96, "div", 23)(97, "span", 42);
      \u0275\u0275element(98, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div")(100, "h6", 39);
      \u0275\u0275text(101, "Project Manager");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "p");
      \u0275\u0275text(103, "CJobcy Technology Pvt.Ltd - (Present)");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(104, "div", 44)(105, "div", 45)(106, "h5", 35);
      \u0275\u0275text(107, "Courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div", 46)(109, "ngx-slick-carousel", 47)(110, "div", 48)(111, "div")(112, "div", 49)(113, "div", 50)(114, "a", 51);
      \u0275\u0275element(115, "img", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "div", 53)(117, "a", 54);
      \u0275\u0275element(118, "i", 55);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "div", 56)(120, "div", 23)(121, "div", 57);
      \u0275\u0275element(122, "img", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "p", 59)(124, "a", 51);
      \u0275\u0275text(125, "Ana Reyes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(126, "span", 60);
      \u0275\u0275text(127, "Wordpress");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "h5", 61)(129, "a", 51);
      \u0275\u0275text(130, "Wordpress for Beginners - Master Wordpress Quickly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "div", 23);
      \u0275\u0275element(132, "i", 62);
      \u0275\u0275elementStart(133, "p", 59);
      \u0275\u0275text(134, "4.4 (160 Reviews)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "div", 63)(136, "h6", 64);
      \u0275\u0275text(137, "$140");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "a", 65);
      \u0275\u0275text(139, "View Course");
      \u0275\u0275element(140, "i", 66);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(141, "div", 48)(142, "div")(143, "div", 49)(144, "div", 50)(145, "a", 51);
      \u0275\u0275element(146, "img", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "div", 53)(148, "a", 54);
      \u0275\u0275element(149, "i", 55);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(150, "div", 56)(151, "div", 23)(152, "div", 57);
      \u0275\u0275element(153, "img", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "p", 59)(155, "a", 51);
      \u0275\u0275text(156, "Andrew Pirtle");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(157, "span", 60);
      \u0275\u0275text(158, "Design");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "h5", 61)(160, "a", 51);
      \u0275\u0275text(161, "Sketch from A to Z (2024): Become an app designer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(162, "div", 23);
      \u0275\u0275element(163, "i", 62);
      \u0275\u0275elementStart(164, "p", 59);
      \u0275\u0275text(165, "4.6 (170 Reviews)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "div", 63)(167, "h6", 64);
      \u0275\u0275text(168, "$160");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "a", 65);
      \u0275\u0275text(170, "View Course");
      \u0275\u0275element(171, "i", 66);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(172, "div", 48)(173, "div")(174, "div", 49)(175, "div", 50)(176, "a", 51);
      \u0275\u0275element(177, "img", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "div", 53)(179, "a", 54);
      \u0275\u0275element(180, "i", 55);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(181, "div", 56)(182, "div", 23)(183, "div", 57);
      \u0275\u0275element(184, "img", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "p", 59)(186, "a", 51);
      \u0275\u0275text(187, "Christy");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(188, "span", 60);
      \u0275\u0275text(189, "Programming");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "h5", 71)(191, "a", 72);
      \u0275\u0275text(192, "Build Responsive Real World Websites with Crash Course");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(193, "div", 23);
      \u0275\u0275element(194, "i", 62);
      \u0275\u0275elementStart(195, "p", 59);
      \u0275\u0275text(196, "4.2 (220 Reviews)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(197, "div", 63)(198, "h6", 64);
      \u0275\u0275text(199, "$200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "a", 65);
      \u0275\u0275text(201, "View Course");
      \u0275\u0275element(202, "i", 66);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(203, "div", 73)(204, "div", 33)(205, "div", 34)(206, "h5", 35);
      \u0275\u0275text(207, "Certifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "div", 23)(209, "div", 74);
      \u0275\u0275element(210, "img", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "div", 74);
      \u0275\u0275element(212, "img", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "div", 74);
      \u0275\u0275element(214, "img", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "div", 78);
      \u0275\u0275element(216, "img", 75);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(217, "div", 33)(218, "div", 34)(219, "h5", 35);
      \u0275\u0275text(220, "Contact Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "div", 41)(222, "span", 79);
      \u0275\u0275element(223, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "div")(225, "h6", 81);
      \u0275\u0275text(226, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "p", 81);
      \u0275\u0275text(228, "jennywilson@example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(229, "div", 41)(230, "span", 79);
      \u0275\u0275element(231, "i", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "div")(233, "h6", 83);
      \u0275\u0275text(234, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "p", 84);
      \u0275\u0275text(236, "877 Ferry Street, Huntsville, Alabama");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(237, "div", 23)(238, "span", 79);
      \u0275\u0275element(239, "i", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "div")(241, "h6", 83);
      \u0275\u0275text(242, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "p", 81);
      \u0275\u0275text(244, "+1(452) 125-6789");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(109);
      \u0275\u0275property("config", ctx.courseCarousel);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.courseGrid);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.courseGrid);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.courseGrid);
    }
  }, dependencies: [CommonModule, RouterLink, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-details", imports: [CommonModule, RouterLink, SlickCarouselModule], template: `<div class="instructor-detail-content">\r
    <div class="container">\r
        <div class="row">\r
            <div class="col-lg-8">\r
                <div class="card bg-light mb-4">\r
                    <div class="card-body instructor-details">\r
                        <div class="instructor-img">\r
                            <a href="javascript:void(0);">\r
                                <img src="assets/img/user/user-61.jpg" alt="img" class="img-fluid">\r
                            </a>\r
                            <a href="javascript:void(0);" class="btn heart"><i class="isax isax-heart5 text-danger"></i></a>\r
                        </div>\r
                        <div class="flex-fill">\r
                            <div class="pb-3 border-bottom mb-3">\r
                                <div class="d-flex align-items-center justify-content-between mb-1">\r
                                    <h6 class="fw-bold"><a href="javascript:void(0);">Rolands Granger</a></h6>\r
                                </div>\r
                                <div class="d-flex align-items-center mb-1">\r
                                    <a href="javascript:void(0);" class="fs-14 me-2">Developer</a>\r
                                    <span class="me-2">\r
                                        <i class="fa-solid fa-star text-warning"></i>\r
                                    </span>\r
                                    <span class="fs-14">4.9 (200 Reviews)</span>\r
                                </div>\r
                                <div>\r
                                    <p>I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices.</p>\r
                                </div>\r
                            </div>\r
                            <div class="d-flex align-items-center justify-content-between flex-wrap">\r
                                <div class="d-flex align-items-center counts-details">\r
                                    <span class="d-flex align-items-center me-4">\r
                                        <span class="d-flex align-items-center"><i class="isax isax-book-saved5 fs-16 text-secondary me-2"></i></span>\r
                                        12+ Lesson\r
                                    </span>\r
                                    <span class="d-flex align-items-center">\r
                                        <span class="d-flex align-items-center"><i class="isax isax-profile-2user5 fs-16 text-secondary me-2"></i></span>\r
                                        50 Students\r
                                    </span>\r
                                </div>\r
                                <div class="d-flex align-items-center">\r
                                    <span>\r
                                        <a href="javascript:void(0);" class="rounded-circle d-inline-flex align-items-center justify-content-center me-2">\r
                                            <i class="fa-brands fa-facebook-f"></i>\r
                                        </a>\r
                                    </span>\r
                                    <span>\r
                                        <a href="javascript:void(0);" class="rounded-circle d-inline-flex align-items-center justify-content-center me-2">\r
                                            <i class="fa-brands fa-instagram"></i>\r
                                        </a>\r
                                    </span>\r
                                    <span>\r
                                        <a href="javascript:void(0);" class="rounded-circle d-inline-flex align-items-center justify-content-center me-2">\r
                                            <i class="fa-brands fa-x-twitter"></i>\r
                                        </a>\r
                                    </span>\r
                                    <span>\r
                                        <a href="javascript:void(0);" class="rounded-circle d-inline-flex align-items-center justify-content-center me-2">\r
                                            <i class="fa-brands fa-youtube"></i>\r
                                        </a>\r
                                    </span>\r
                                    <span>\r
                                        <a href="javascript:void(0);" class="rounded-circle d-inline-flex align-items-center justify-content-center">\r
                                            <i class="fa-brands fa-linkedin-in"></i>\r
                                        </a>\r
                                    </span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="card">\r
                    <div class="card-body">\r
                        <h5 class="mb-3">About Me</h5>\r
                        <p class="mb-3">Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.</p>\r
                        <a href="javascript:void(0);" class="read-more-btn">Read More</a>\r
                    </div>\r
                </div>\r
\r
                <div class="card">\r
                    <div class="card-body">\r
                        <h5 class="mb-3">Education</h5>\r
                        <div class="education-flow">\r
                            <div class="ps-4 pb-4 timeline-flow">\r
                                <div>\r
                                    <h6 class="mb-1">BCA - Bachelor of Computer Applications</h6>\r
                                    <p class="fs-14">International University - (2004 - 2010)</p>\r
                                </div>\r
                            </div>\r
                            <div class="ps-4 pb-4 timeline-flow">\r
                                <div>\r
                                    <h6 class="mb-1">MCA - Master of Computer Application</h6>\r
                                    <p class="fs-14">International University - (2010 - 2012)</p>\r
                                </div>\r
                            </div>\r
                            <div class="ps-4 timeline-flow">\r
                                <div>\r
                                    <h6 class="mb-1">Design Communication Visual</h6>\r
                                    <p class="fs-14">International University - (2012-2015)</p>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="card">\r
                    <div class="card-body">\r
                        <h5 class="mb-3">Experience</h5>\r
                        <div class="d-flex align-items-center mb-4">\r
                            <span class="bg-light border avatar avatar-lg text-gray-9 flex-shrink-0 me-3"><i class="isax isax-briefcase"></i></span>\r
                            <div>\r
                                <h6 class="mb-1">Web Design & Development Team Leader</h6>\r
                                <p>Creative Agency - (2013 - 2016)</p>\r
                            </div>\r
                        </div>\r
                        <div class="d-flex align-items-center">\r
                            <span class="bg-light border avatar avatar-lg text-gray-9 flex-shrink-0 me-3"><i class="isax isax-briefcase"></i></span>\r
                            <div>\r
                                <h6 class="mb-1">Project Manager</h6>\r
                                <p>CJobcy Technology Pvt.Ltd - (Present)</p>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="card border-0">\r
                    <div class="card-body p-0">\r
                            <h5 class="mb-3">Courses</h5>\r
                        <div class="course-carousal">\r
                           <ngx-slick-carousel [config]="courseCarousel">\r
                                <div ngxSlickItem>\r
                                    <div>\r
                                        <div class="course-item course-item-three mx-2 mb-0">\r
                                            <div class="course-carousal-img position-relative overflow-hidden rounded-3 mb-3">\r
                                                <a [routerLink]="routes.courseDetails"><img class="img-fluid rounded-3" src="./assets/img/course/course-02.jpg" alt="img"></a>\r
                                                <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">\r
                                                    <a class="like" href="javascript:void(0);"><i class="isax isax-heart color-active"></i></a>\r
                                                </div>\r
                                            </div>\r
                                            <div class="d-flex flex-wrap align-items-center justify-content-between">\r
                                                <div class="d-flex align-items-center">\r
                                                    <div class="avatar avatar-sm rounded-circle">\r
                                                        <img class="img-fluid rounded-circle object-fit-cover" src="./assets/img/avatar/avatar2.jpg" alt="img">\r
                                                    </div>\r
                                                    <p class="ms-2"><a [routerLink]="routes.instructorDetails">Ana Reyes</a></p>\r
                                                </div>\r
                                                <span class="tag-btn">Wordpress</span>\r
                                            </div>\r
                                            <h5 class="mt-3 mb-2 text-truncate line-clamb-2"><a [routerLink]="routes.courseDetails">Wordpress for Beginners - Master Wordpress Quickly</a></h5>\r
                                            <div class="d-flex align-items-center"><i class="ti ti-star-filled text-warning"></i><p class="ms-2">4.4 (160 Reviews)</p></div>\r
                                            <div class="d-flex justify-content-between mt-3 align-items-center">\r
                                                <h6 class="fs-16 text-secondary">$140</h6>\r
                                                <a [routerLink]="routes.courseGrid" class="btn view-course-btn">View Course<i class="fs-8 fas fa-angle-right ms-2"></i></a>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
\r
                                <div ngxSlickItem>\r
                                    <div>\r
                                        <div class="course-item course-item-three mx-2 mb-0">\r
                                            <div class="course-carousal-img position-relative overflow-hidden rounded-3 mb-3">\r
                                                <a [routerLink]="routes.courseDetails"><img class="img-fluid rounded-3" src="./assets/img/course/course-03.jpg" alt="img"></a>\r
                                                <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">\r
                                                    <a class="like" href="javascript:void(0);"><i class="isax isax-heart color-active"></i></a>\r
                                                </div>\r
                                            </div>\r
                                            <div class="d-flex flex-wrap align-items-center justify-content-between">\r
                                                <div class="d-flex align-items-center">\r
                                                    <div class="avatar avatar-sm rounded-circle">\r
                                                        <img class="img-fluid rounded-circle object-fit-cover" src="./assets/img/avatar/avatar3.jpg" alt="img">\r
                                                    </div>\r
                                                    <p class="ms-2"><a [routerLink]="routes.instructorDetails">Andrew Pirtle</a></p>\r
                                                </div>\r
                                                <span class="tag-btn">Design</span>\r
                                            </div>\r
                                            <h5 class="mt-3 mb-2 text-truncate line-clamb-2"><a [routerLink]="routes.courseDetails">Sketch from A to Z (2024): Become an app designer</a></h5>\r
                                            <div class="d-flex align-items-center"><i class="ti ti-star-filled text-warning"></i><p class="ms-2">4.6 (170 Reviews)</p></div>\r
                                            <div class="d-flex justify-content-between mt-3 align-items-center">\r
                                                <h6 class="fs-16 text-secondary">$160</h6>\r
                                                <a [routerLink]="routes.courseGrid" class="btn view-course-btn">View Course<i class="fs-8 fas fa-angle-right ms-2"></i></a>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <div ngxSlickItem>\r
                                    <div>\r
                                        <div class="course-item course-item-three mx-2 mb-0">\r
                                            <div class="course-carousal-img position-relative overflow-hidden rounded-3 mb-3">\r
                                                <a [routerLink]="routes.courseDetails"><img class="img-fluid rounded-3" src="./assets/img/course/course-04.jpg" alt="img"></a>\r
                                                <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">\r
                                                    <a class="like" href="javascript:void(0);"><i class="isax isax-heart color-active"></i></a>\r
                                                </div>\r
                                            </div>\r
                                            <div class="d-flex flex-wrap align-items-center justify-content-between">\r
                                            <div class="d-flex align-items-center">\r
                                                <div class="avatar avatar-sm rounded-circle">\r
                                                    <img class="img-fluid rounded-circle object-fit-cover" src="./assets/img/avatar/avatar4.jpg" alt="img">\r
                                                </div>\r
                                                <p class="ms-2"><a [routerLink]="routes.instructorDetails">Christy</a></p>\r
                                            </div>\r
                                            <span class="tag-btn">Programming</span>\r
                                            </div>\r
                                            <h5 class="mt-3 mb-2"><a [routerLink]="routes.courseDetails" class=" text-truncate line-clamb-2">Build Responsive Real World Websites with Crash Course</a></h5>\r
                                            <div class="d-flex align-items-center"><i class="ti ti-star-filled text-warning"></i><p class="ms-2">4.2 (220 Reviews)</p></div>\r
                                            <div class="d-flex justify-content-between mt-3 align-items-center">\r
                                                <h6 class="fs-16 text-secondary">$200</h6>\r
                                                <a [routerLink]="routes.courseGrid" class="btn view-course-btn">View Course<i class="fs-8 fas fa-angle-right ms-2"></i></a>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </ngx-slick-carousel>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
            </div>\r
\r
            <div class="col-lg-4">\r
                <div class="card">\r
                    <div class="card-body">\r
                        <h5 class="mb-3">Certifications</h5>\r
                        <div class="d-flex align-items-center">\r
                            <div class="certificate-img rounded-circle me-2">\r
                                <img src="assets/img/certificates/certificate-01.svg" alt="img" class="img-fluid">\r
                            </div>\r
                            <div class="certificate-img rounded-circle me-2">\r
                                <img src="assets/img/certificates/certificate-02.svg" alt="img" class="img-fluid">\r
                            </div>\r
                            <div class="certificate-img rounded-circle me-2">\r
                                <img src="assets/img/certificates/certificate-03.svg" alt="img" class="img-fluid">\r
                            </div>\r
                            <div class="certificate-img rounded-circle">\r
                                <img src="assets/img/certificates/certificate-01.svg" alt="img" class="img-fluid">\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div class="card">\r
                    <div class="card-body">\r
                        <h5 class="mb-3">Contact Details</h5>\r
                        <div class="d-flex align-items-center mb-4">\r
                            <span class="contact-icon rounded-circle d-flex align-items-center justify-content-center me-3">\r
                                <i class="fa-regular fa-envelope"></i>\r
                            </span>\r
                            <div>\r
                                <h6 class="mb-0">Email</h6>\r
                                <p class="mb-0">jennywilson&#64;example.com</p>\r
                            </div>\r
                        </div>\r
                        <div class="d-flex align-items-center mb-4">\r
                            <span class="contact-icon rounded-circle d-flex align-items-center justify-content-center me-3">\r
                                <i class="isax isax-location"></i>\r
                            </span>\r
                            <div>\r
                                <h6 class="fs-16 fw-medium text-gray-9 mb-0">Address</h6>\r
                                <p class="mb-0 text-truncate">877 Ferry Street, Huntsville, Alabama</p>\r
                            </div>\r
                        </div>\r
                        <div class="d-flex align-items-center">\r
                            <span class="contact-icon rounded-circle d-flex align-items-center justify-content-center me-3">\r
                                <i class="isax isax-call"></i>\r
                            </span>\r
                            <div>\r
                                <h6 class="fs-16 fw-medium text-gray-9 mb-0">Phone</h6>\r
                                <p class="mb-0">+1(452) 125-6789</p>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorDetailsComponent, { className: "InstructorDetailsComponent", filePath: "app/features/pages/instructor-details/instructor-details.component.ts", lineNumber: 13 });
})();
export {
  InstructorDetailsComponent
};
//# sourceMappingURL=chunk-F2OVAQY6.js.map
