import {
  routes
} from "./chunk-YJLHMFCU.js";
import {
  CommonModule
} from "./chunk-MNWNTO2T.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/instructor/instructor-profile/instructor-profile.component.ts
var InstructorProfileComponent = class _InstructorProfileComponent {
  routes = routes;
  toggleClass(data) {
    data.active = !data.active;
  }
  static \u0275fac = function InstructorProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorProfileComponent, selectors: [["app-instructor-profile"]], decls: 113, vars: 0, consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold"], ["href", "javascript:void(0);", 1, "edit-profile-icon"], [1, "isax", "isax-edit-2"], [1, "card"], [1, "card-body"], [1, "fs-18", "pb-3", "border-bottom", "mb-3"], [1, "row"], [1, "col-md-4"], [1, "mb-3"], [1, "col-md-12"], [1, "education-flow"], [1, "ps-4", "pb-3", "timeline-flow"], [1, "mb-1"], [1, "ps-4", "pb-0", "timeline-flow"], [1, "card", "mb-0"], [1, "d-flex", "align-items-center", "mb-4"], [1, "bg-light", "border", "avatar", "avatar-lg", "text-gray-9", "flex-shrink-0", "me-3"], [1, "isax", "isax-briefcase", "fw-bold"], [1, "d-flex", "align-items-center"]], template: function InstructorProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "h5", 1);
      \u0275\u0275text(2, "My Profile");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "a", 2);
      \u0275\u0275domElement(4, "i", 3);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 4)(6, "div", 5)(7, "h5", 6);
      \u0275\u0275text(8, "Basic Information");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "h6");
      \u0275\u0275text(13, "First Name");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "span");
      \u0275\u0275text(15, "Eugene");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(16, "div", 8)(17, "div", 9)(18, "h6");
      \u0275\u0275text(19, "Last Name");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "span");
      \u0275\u0275text(21, "Andre");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(22, "div", 8)(23, "div", 9)(24, "h6");
      \u0275\u0275text(25, "Registration Date");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(26, "span");
      \u0275\u0275text(27, "16 Jan 2024, 11:15 AM");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(28, "div", 8)(29, "div", 9)(30, "h6");
      \u0275\u0275text(31, "User Name");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(32, "span");
      \u0275\u0275text(33, "instructordemo");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(34, "div", 8)(35, "div", 9)(36, "h6");
      \u0275\u0275text(37, "Phone Number");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(38, "span");
      \u0275\u0275text(39, "89104-71829");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(40, "div", 8)(41, "div", 9)(42, "h6");
      \u0275\u0275text(43, "Email");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(44, "span");
      \u0275\u0275text(45, "instructordemo@example.com");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(46, "div", 8)(47, "div", 9)(48, "h6");
      \u0275\u0275text(49, "Gender");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(50, "span");
      \u0275\u0275text(51, "Male");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(52, "div", 8)(53, "div", 9)(54, "h6");
      \u0275\u0275text(55, "DOB");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(56, "span");
      \u0275\u0275text(57, "16 Jan 2020");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(58, "div", 8)(59, "div", 9)(60, "h6");
      \u0275\u0275text(61, "Age");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(62, "span");
      \u0275\u0275text(63, "24");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(64, "div", 10)(65, "div")(66, "h6");
      \u0275\u0275text(67, "Bio");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(68, "span");
      \u0275\u0275text(69, "I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. ");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(70, "div", 4)(71, "div", 5)(72, "h5", 6);
      \u0275\u0275text(73, "Education");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(74, "div", 11)(75, "div", 12)(76, "div")(77, "h6", 13);
      \u0275\u0275text(78, "BCA - Bachelor of Computer Applications");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(79, "p");
      \u0275\u0275text(80, "International University - (2004 - 2010)");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(81, "div", 12)(82, "div")(83, "h6", 13);
      \u0275\u0275text(84, "MCA - Master of Computer Application");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(85, "p");
      \u0275\u0275text(86, "International University - (2010 - 2012)");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(87, "div", 14)(88, "div")(89, "h6", 13);
      \u0275\u0275text(90, "Design Communication Visual");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(91, "p");
      \u0275\u0275text(92, "International University - (2012-2015)");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(93, "div", 15)(94, "div", 5)(95, "h5", 6);
      \u0275\u0275text(96, "Experience");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(97, "div", 16)(98, "span", 17);
      \u0275\u0275domElement(99, "i", 18);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(100, "div")(101, "h6", 13);
      \u0275\u0275text(102, "Web Design & Development Team Leader");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(103, "p");
      \u0275\u0275text(104, "Creative Agency - (2013 - 2016)");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(105, "div", 19)(106, "span", 17);
      \u0275\u0275domElement(107, "i", 18);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(108, "div")(109, "h6", 13);
      \u0275\u0275text(110, "Project Manager");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(111, "p");
      \u0275\u0275text(112, "CJobcy Technology Pvt.Ltd - (Present)");
      \u0275\u0275domElementEnd()()()()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorProfileComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-profile", imports: [CommonModule], template: '\r\n            <div class="page-title d-flex align-items-center justify-content-between">\r\n              <h5 class="fw-bold">My Profile</h5>\r\n              <a href="javascript:void(0);" class="edit-profile-icon"><i class="isax isax-edit-2"></i></a>\r\n            </div>\r\n            <div class="card">\r\n              <div class="card-body">\r\n                <h5 class="fs-18 pb-3 border-bottom mb-3">Basic Information</h5>\r\n                <div class="row">\r\n                  <div class="col-md-4">\r\n                    <div class="mb-3">\r\n                      <h6>First Name</h6>\r\n                      <span>Eugene</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class="col-md-4">\r\n                    <div class="mb-3">\r\n                      <h6>Last Name</h6>\r\n                      <span>Andre</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class="col-md-4">\r\n                    <div class="mb-3">\r\n                      <h6>Registration Date</h6>\r\n                      <span>16 Jan 2024, 11:15 AM</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class="col-md-4">\r\n                    <div class="mb-3">\r\n                      <h6>User Name</h6>\r\n                      <span>instructordemo</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class="col-md-4">\r\n                    <div class="mb-3">\r\n                      <h6>Phone Number</h6>\r\n                      <span>89104-71829</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class="col-md-4">\r\n                    <div class="mb-3">\r\n                      <h6>Email</h6>\r\n                      <span>instructordemo&#64;example.com</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class="col-md-4">\r\n                    <div class="mb-3">\r\n                      <h6>Gender</h6>\r\n                      <span>Male</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class="col-md-4">\r\n                    <div class="mb-3">\r\n                      <h6>DOB</h6>\r\n                      <span>16 Jan 2020</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class="col-md-4">\r\n                    <div class="mb-3">\r\n                      <h6>Age</h6>\r\n                      <span>24</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class="col-md-12">\r\n                    <div>\r\n                      <h6>Bio</h6>\r\n                      <span>I am a web developer with a vast array of knowledge in\r\n                        many different front end and back end languages, \r\n                        responsive frameworks, databases, and best code practices.\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>								\r\n              </div>\r\n            </div>\r\n            <div class="card">\r\n              <div class="card-body">\r\n                  <h5 class="fs-18 pb-3 border-bottom mb-3">Education</h5>\r\n                  <div class="education-flow">\r\n                    <div class="ps-4 pb-3 timeline-flow">\r\n                      <div>\r\n                        <h6 class="mb-1">BCA - Bachelor of Computer Applications</h6>\r\n                        <p>International University - (2004 - 2010)</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class="ps-4 pb-3 timeline-flow">\r\n                      <div>\r\n                        <h6 class="mb-1">MCA - Master of Computer Application</h6>\r\n                        <p>International University - (2010 - 2012)</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class="ps-4 pb-0 timeline-flow">\r\n                      <div>\r\n                        <h6 class="mb-1">Design Communication Visual</h6>\r\n                        <p>International University - (2012-2015)</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="card mb-0">\r\n              <div class="card-body">\r\n                  <h5 class="fs-18 pb-3 border-bottom mb-3">Experience</h5>\r\n                  <div class="d-flex align-items-center mb-4">\r\n                    <span class="bg-light border avatar avatar-lg text-gray-9 flex-shrink-0 me-3"><i class="isax isax-briefcase fw-bold"></i></span>\r\n                    <div>\r\n                      <h6 class="mb-1">Web Design & Development Team Leader</h6>\r\n                      <p>Creative Agency - (2013 - 2016)</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class="d-flex align-items-center">\r\n                    <span class="bg-light border avatar avatar-lg text-gray-9 flex-shrink-0 me-3"><i class="isax isax-briefcase fw-bold"></i></span>\r\n                    <div>\r\n                      <h6 class="mb-1">Project Manager</h6>\r\n                      <p>CJobcy Technology Pvt.Ltd - (Present)</p>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n            </div>					\r\n        ' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorProfileComponent, { className: "InstructorProfileComponent", filePath: "app/features/instructor/instructor-profile/instructor-profile.component.ts", lineNumber: 15 });
})();
export {
  InstructorProfileComponent
};
//# sourceMappingURL=chunk-U4UT6SY6.js.map
