import {
  routes
} from "./chunk-ZAFZNJD2.js";
import {
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-2JCHGHJA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/superadmin/superadmin-quiz-details/superadmin-quiz-details.component.ts
var SuperadminQuizDetailsComponent = class _SuperadminQuizDetailsComponent {
  routes = routes;
  static \u0275fac = function SuperadminQuizDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminQuizDetailsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminQuizDetailsComponent, selectors: [["app-superadmin-quiz-details"]], decls: 134, vars: 1, consts: [[1, "page-content"], [1, "container"], [1, "row"], [1, "col-xl-9", "col-lg-9"], [1, "quiz-details"], [1, "back-link", 3, "routerLink"], [1, "bx", "bx-left-arrow-alt"], [1, "table-quiz"], [1, "table-responsive", "custom-table"], [1, "table", "table-nowrap", "mb-0"], [1, "quiz-table"], [1, "bx", "bx-info-circle"], [1, "resut-badge", "badge-light-danger"], [1, "quiz-overview"], [1, "bx", "bxs-adjust"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-original-title", "True / False"], [1, "bx", "bxs-info-circle"], [1, "resut-badge", "badge-light-success"]], template: function SuperadminQuizDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
      \u0275\u0275element(6, "i", 6);
      \u0275\u0275text(7, "Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "Course: Learn Angular Fundamentals Beginners Guide");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "h6");
      \u0275\u0275text(11, "Quiz 1 : What is meant by Angular? ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "ul")(13, "li");
      \u0275\u0275text(14, "Quiz Time: 10 Minutes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "li");
      \u0275\u0275text(16, "Attempt Time: 7 Seconds");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 7)(18, "div", 8)(19, "table", 9)(20, "thead")(21, "tr")(22, "th");
      \u0275\u0275text(23, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Question");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Total Marks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "Pass Marks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "Correct Answers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "Incorrect Answers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th");
      \u0275\u0275text(35, "Earned Marks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th");
      \u0275\u0275text(37, "Result");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "tbody")(39, "tr")(40, "td")(41, "div", 10)(42, "p");
      \u0275\u0275text(43, "March 12, 2024 05:40 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p");
      \u0275\u0275text(45, "Quiz ");
      \u0275\u0275element(46, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "p")(48, "span");
      \u0275\u0275text(49, "Student");
      \u0275\u0275elementEnd();
      \u0275\u0275text(50, " : studentdemo ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "td");
      \u0275\u0275text(52, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "td");
      \u0275\u0275text(54, "3.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "td");
      \u0275\u0275text(56, "2.40(80%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "td");
      \u0275\u0275text(58, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "td");
      \u0275\u0275text(60, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "td");
      \u0275\u0275text(62, "2.00(67%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "td")(64, "span", 12);
      \u0275\u0275text(65, "Fail");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(66, "div", 13)(67, "h6");
      \u0275\u0275text(68, "Quiz Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 8)(70, "table", 9)(71, "thead")(72, "tr")(73, "th");
      \u0275\u0275text(74, "No");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "th");
      \u0275\u0275text(76, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th");
      \u0275\u0275text(78, "Questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "th");
      \u0275\u0275text(80, "Given Answers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th");
      \u0275\u0275text(82, "Correct Answers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "th");
      \u0275\u0275text(84, "Result");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(85, "tbody")(86, "tr")(87, "td");
      \u0275\u0275text(88, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "td");
      \u0275\u0275element(90, "i", 14);
      \u0275\u0275elementStart(91, "a", 15);
      \u0275\u0275element(92, "i", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "td");
      \u0275\u0275text(94, "Has Angular been fully supported by all browsers?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "td");
      \u0275\u0275text(96, "True");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "td");
      \u0275\u0275text(98, "False");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "td")(100, "span", 12);
      \u0275\u0275text(101, "Incorrect");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(102, "tr")(103, "td");
      \u0275\u0275text(104, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "td");
      \u0275\u0275element(106, "i", 14);
      \u0275\u0275elementStart(107, "a", 15);
      \u0275\u0275element(108, "i", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "td");
      \u0275\u0275text(110, "Has Angular been fully supported by all browsers?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "td");
      \u0275\u0275text(112, "True");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "td");
      \u0275\u0275text(114, "True");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "td")(116, "span", 17);
      \u0275\u0275text(117, "Correct");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(118, "tr")(119, "td");
      \u0275\u0275text(120, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "td");
      \u0275\u0275element(122, "i", 14);
      \u0275\u0275elementStart(123, "a", 15);
      \u0275\u0275element(124, "i", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "td");
      \u0275\u0275text(126, "Has Angular been fully supported by all browsers?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "td");
      \u0275\u0275text(128, "True");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "td");
      \u0275\u0275text(130, "True");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "td")(132, "span", 17);
      \u0275\u0275text(133, "Correct");
      \u0275\u0275elementEnd()()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.studentsQuiz);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminQuizDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-quiz-details", imports: [CommonModule, RouterLink], template: '<!-- Page Content -->\n<div class="page-content">\n    <div class="container">\n        <div class="row">\n            \n            \n            \n            <!-- Instructor Quiz Details -->\n            <div class="col-xl-9 col-lg-9">	\n\n                <div class="quiz-details">\n                    <a [routerLink]="routes.studentsQuiz" class="back-link"><i class="bx bx-left-arrow-alt"></i>Back</a>\n                    <p>Course: Learn Angular Fundamentals Beginners Guide</p>\n                    <h6>Quiz 1 : What is meant by Angular?  </h6>\n                    <ul>\n                        <li>Quiz Time: 10 Minutes</li>\n                        <li>Attempt Time: 7 Seconds</li>\n                    </ul>\n                </div>\n\n                <!-- Quiz -->\n                <div class="table-quiz">					\n                    <div class="table-responsive custom-table">											\n                        <table class="table table-nowrap mb-0">\n                            <thead>\n                              <tr>\n                                <th>Date</th>\n                                <th>Question</th>\n                                <th>Total Marks</th>\n                                <th>Pass Marks</th>\n                                <th>Correct Answers</th>\n                                <th>Incorrect Answers</th>\n                                <th>Earned Marks</th>\n                                <th>Result</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>\n                                        <div class="quiz-table">\n                                            <p>March 12, 2024 05:40 PM</p>\n                                            <p>Quiz <i class="bx bx-info-circle"></i></p>\n                                            <p><span>Student</span> : studentdemo </p>\n                                        </div>\n                                    </td>\n                                    <td>3</td>\n                                    <td>3.00</td>\n                                    <td>2.40(80%)</td>\n                                    <td>2</td>\n                                    <td>1</td>\n                                    <td>2.00(67%)</td>\n                                    <td><span class="resut-badge badge-light-danger">Fail</span></td>\n                                </tr>\n                            </tbody>\n                         </table>\n                    </div>\n                </div>\n                <!-- /Quiz -->\n\n                <!-- Quiz Overview -->\n                <div class="quiz-overview">\n                    <h6>Quiz Overview</h6>\n                    <div class="table-responsive custom-table">											\n                        <table class="table table-nowrap mb-0">\n                            <thead>\n                              <tr>\n                                <th>No</th>\n                                <th>Type</th>\n                                <th>Questions</th>\n                                <th>Given  Answers</th>\n                                <th>Correct Answers</th>\n                                <th>Result</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>1</td>\n                                    <td>\n                                        <i class="bx bxs-adjust"></i>\n                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="True / False"><i class="bx bxs-info-circle"></i></a>\n                                    </td>\n                                    <td>Has Angular been fully supported by all browsers?</td>\n                                    <td>True</td>\n                                    <td>False</td>\n                                    <td><span class="resut-badge badge-light-danger">Incorrect</span></td>\n                                </tr>\n                                <tr>\n                                    <td>2</td>\n                                    <td>\n                                        <i class="bx bxs-adjust"></i>\n                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="True / False"><i class="bx bxs-info-circle"></i></a>\n                                    </td>\n                                    <td>Has Angular been fully supported by all browsers?</td>\n                                    <td>True</td>\n                                    <td>True</td>\n                                    <td><span class="resut-badge badge-light-success">Correct</span></td>\n                                </tr>\n                                <tr>\n                                    <td>3</td>\n                                    <td>\n                                        <i class="bx bxs-adjust"></i>\n                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="True / False"><i class="bx bxs-info-circle"></i></a>\n                                    </td>\n                                    <td>Has Angular been fully supported by all browsers?</td>\n                                    <td>True</td>\n                                    <td>True</td>\n                                    <td><span class="resut-badge badge-light-success">Correct</span></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <!-- /Quiz Overview -->\n            </div>	\n            <!-- /Instructor Quiz Details -->\n\n        </div>\n    </div>\n</div>	\n<!-- /Page Content -->\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminQuizDetailsComponent, { className: "SuperadminQuizDetailsComponent", filePath: "src/app/features/superadmin/superadmin-quiz-details/superadmin-quiz-details.component.ts", lineNumber: 12 });
})();
export {
  SuperadminQuizDetailsComponent
};
//# sourceMappingURL=chunk-H6WLWQXC.js.map
