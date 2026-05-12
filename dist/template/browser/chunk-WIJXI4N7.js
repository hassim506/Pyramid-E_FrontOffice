import {
  MatSelect,
  MatSelectModule
} from "./chunk-YQGZ64QL.js";
import "./chunk-G5NIWSXA.js";
import {
  MatOption
} from "./chunk-Y4A34GE3.js";
import "./chunk-WYKMS2OJ.js";
import "./chunk-EFEVSRVH.js";
import "./chunk-5FDCLFRJ.js";
import "./chunk-D4V2IZRR.js";
import "./chunk-AHGPUK2P.js";
import {
  routes
} from "./chunk-W6FAPSPW.js";
import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  ɵNgNoValidate
} from "./chunk-AK2M3J6O.js";
import {
  RouterLink
} from "./chunk-AJNKO2CX.js";
import "./chunk-FZP3BRBS.js";
import "./chunk-GSAJL664.js";
import {
  CommonModule,
  NgForOf
} from "./chunk-3IMMP55I.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-UPBSS6WA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-quiz-questions/adminrh-quiz-questions.component.ts
function AdminrhQuizQuestionsComponent_ng_container_259_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 135)(2, "div", 136)(3, "div", 137)(4, "div", 102)(5, "label", 96);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 97);
    \u0275\u0275text(8, " *");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 103)(10, "label", 138);
    \u0275\u0275text(11, "Correct Answer");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 139);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "input", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 140);
    \u0275\u0275listener("click", function AdminrhQuizQuestionsComponent_ng_container_259_Template_a_click_14_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeRow(i_r2));
    });
    \u0275\u0275element(15, "i", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Choice ", i_r2 + 2, " ");
  }
}
var AdminrhQuizQuestionsComponent = class _AdminrhQuizQuestionsComponent {
  routes = routes;
  formData = [];
  // Initialize with an empty object to start with one row
  addNewRow() {
    this.formData.push({});
  }
  removeRow(index) {
    this.formData.splice(index, 1);
  }
  static \u0275fac = function AdminrhQuizQuestionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhQuizQuestionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhQuizQuestionsComponent, selectors: [["app-adminrh-quiz-questions"]], decls: 363, vars: 2, consts: [[1, "card", "bg-light"], [1, "card-body"], [1, "row", "align-items-center", "gy-3"], [1, "col-xl-8"], [1, "d-sm-flex", "align-items-center"], [1, "quiz-img", "me-3", "mb-2", "mb-sm-0"], ["src", "assets/img/students/quiz.jpg", "alt", ""], [1, "mb-2"], ["href", "javascript:void(0);"], [1, "question-info", "d-flex", "align-items-center"], [1, "d-flex", "align-items-center", "fs-14", "me-2", "pe-2", "border-end", "mb-0"], [1, "isax", "isax-message-question5", "text-primary-soft", "me-2"], [1, "d-flex", "align-items-center", "fs-14", "mb-0"], [1, "isax", "isax-clock5", "text-secondary-soft", "me-2"], [1, "col-xl-4"], [1, "d-flex", "align-items-center", "justify-content-sm-end"], [1, "text-info", "text-decoration-underline", "fs-12", "fw-medium", "me-3", 3, "routerLink"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_question", 1, "btn", "btn-secondary"], [1, "card"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-end"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_question", 1, "d-inline-flex", "fs-14", "me-2", "action-icon"], [1, "isax", "isax-edit-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "d-inline-flex", "fs-14", "action-icon"], [1, "isax", "isax-trash"], [1, "form-check", "mb-2"], ["type", "radio", "name", "qusetion-1", "id", "Radio-sm-1", 1, "form-check-input"], ["for", "Radio-sm-1", 1, "form-check-label"], ["type", "radio", "name", "qusetion-1", "id", "Radio-sm-2", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-2", 1, "form-check-label"], ["type", "radio", "name", "qusetion-1", "id", "Radio-sm-3", 1, "form-check-input"], ["for", "Radio-sm-3", 1, "form-check-label"], [1, "form-check", "mb-0"], ["type", "radio", "name", "qusetion-1", "id", "Radio-sm-4", 1, "form-check-input"], ["for", "Radio-sm-4", 1, "form-check-label"], ["type", "radio", "name", "qusetion-1", "id", "Radio-sm-5", 1, "form-check-input"], ["for", "Radio-sm-5", 1, "form-check-label"], ["type", "radio", "name", "qusetion-2", "id", "Radio-sm-6", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-6", 1, "form-check-label"], ["type", "radio", "name", "qusetion-2", "id", "Radio-sm-7", 1, "form-check-input"], ["for", "Radio-sm-7", 1, "form-check-label"], ["type", "radio", "name", "qusetion-2", "id", "Radio-sm-8", 1, "form-check-input"], ["for", "Radio-sm-8", 1, "form-check-label"], ["type", "radio", "name", "qusetion-3", "id", "Radio-sm-9", 1, "form-check-input"], ["for", "Radio-sm-9", 1, "form-check-label"], ["type", "radio", "name", "qusetion-3", "id", "Radio-sm-10", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-10", 1, "form-check-label"], ["type", "radio", "name", "qusetion-3", "id", "Radio-sm-11", 1, "form-check-input"], ["for", "Radio-sm-11", 1, "form-check-label"], ["type", "radio", "name", "qusetion-3", "id", "Radio-sm-12", 1, "form-check-input"], ["for", "Radio-sm-12", 1, "form-check-label"], ["type", "radio", "name", "qusetion-4", "id", "Radio-sm-13", 1, "form-check-input"], ["for", "Radio-sm-13", 1, "form-check-label"], ["type", "radio", "name", "qusetion-4", "id", "Radio-sm-14", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-14", 1, "form-check-label"], ["type", "radio", "name", "qusetion-4", "id", "Radio-sm-15", 1, "form-check-input"], ["for", "Radio-sm-15", 1, "form-check-label"], ["type", "radio", "name", "qusetion-4", "id", "Radio-sm-16", 1, "form-check-input"], ["for", "Radio-sm-16", 1, "form-check-label"], ["type", "radio", "name", "qusetion-5", "id", "Radio-sm-17", 1, "form-check-input"], ["for", "Radio-sm-17", 1, "form-check-label"], ["type", "radio", "name", "qusetion-5", "id", "Radio-sm-18", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-18", 1, "form-check-label"], ["type", "radio", "name", "qusetion-5", "id", "Radio-sm-19", 1, "form-check-input"], ["for", "Radio-sm-19", 1, "form-check-label"], ["type", "radio", "name", "qusetion-5", "id", "Radio-sm-20", 1, "form-check-input"], ["for", "Radio-sm-20", 1, "form-check-label"], ["type", "radio", "name", "qusetion-6", "id", "Radio-sm-21", 1, "form-check-input"], ["for", "Radio-sm-21", 1, "form-check-label"], ["type", "radio", "name", "qusetion-6", "id", "Radio-sm-22", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-22", 1, "form-check-label"], ["type", "radio", "name", "qusetion-6", "id", "Radio-sm-23", 1, "form-check-input"], ["for", "Radio-sm-23", 1, "form-check-label"], ["type", "radio", "name", "qusetion-6", "id", "Radio-sm-24", 1, "form-check-input"], ["for", "Radio-sm-24", 1, "form-check-label"], ["href", "javascript:void(0);", 1, "d-inline-flex", "fs-14"], ["data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "isax", "isax-trash"], ["type", "radio", "name", "qusetion-7", "id", "Radio-sm-25", 1, "form-check-input"], ["for", "Radio-sm-25", 1, "form-check-label"], ["type", "radio", "name", "qusetion-7", "id", "Radio-sm-26", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-26", 1, "form-check-label"], ["type", "radio", "name", "qusetion-7", "id", "Radio-sm-27", 1, "form-check-input"], ["for", "Radio-sm-27", 1, "form-check-label"], ["type", "radio", "name", "qusetion-7", "id", "Radio-sm-28", 1, "form-check-input"], ["for", "Radio-sm-28", 1, "form-check-label"], [1, "text-center"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary"], ["id", "add_question", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "fw-bold"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "add-choice-data"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "form-check", "form-switch", "form-switch-end"], ["for", "switch-sm", 1, "form-check-label"], ["type", "checkbox", "role", "switch", "id", "switch-sm", "checked", "", 1, "form-check-input"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", 1, "text-secondary", "d-inline-flex", "align-items-center", "fw-medium", "add-choice", 3, "click"], [1, "isax", "isax-add", "me-1"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill"], ["id", "edit_question", 1, "modal", "fade"], ["type", "text", "value", "Which of the following is a principle of UX design?", 1, "form-control"], ["placeholder", "Multiple choice", 1, "custom-mat-select", "select"], ["for", "switch-sm3", 1, "form-check-label", "correct-ans"], ["type", "checkbox", "role", "switch", "id", "switch-sm3", "checked", "", 1, "form-check-input"], ["type", "text", "value", "Minimalistic Design", 1, "form-control"], ["for", "switch-sm4", 1, "form-check-label"], ["type", "checkbox", "role", "switch", "id", "switch-sm4", 1, "form-check-input"], ["type", "text", "value", "User-Centered Design", 1, "form-control"], ["for", "switch-sm5", 1, "form-check-label"], ["type", "checkbox", "role", "switch", "id", "switch-sm5", 1, "form-check-input"], ["type", "text", "value", "Gradient Usage", 1, "form-control"], ["for", "switch-sm6", 1, "form-check-label"], ["type", "checkbox", "role", "switch", "id", "switch-sm6", 1, "form-check-input"], ["type", "text", "value", "Typography Hierarchy", 1, "form-control"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-body", "text-center", "custom-modal-body"], [1, "avatar", "avatar-lg", "bg-secondary-transparent", "rounded-circle", "mb-2"], [1, "isax", "isax-trash", "fs-24", "text-danger"], [1, "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill"], [1, "mb-3", "extra-choice-row"], [1, "d-flex", "align-items-end", "justify-content-between"], [1, "flex-fill"], ["for", "switch-sm2", 1, "form-check-label"], ["type", "checkbox", "role", "switch", "id", "switch-sm2", 1, "form-check-input"], ["href", "javascript:void(0);", 1, "delete-item", "ms-4", 3, "click"]], template: function AdminrhQuizQuestionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "div", 4)(6, "div", 5);
      \u0275\u0275element(7, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div")(9, "h5", 7)(10, "a", 8);
      \u0275\u0275text(11, "Information About UI/UX Design Degree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 9)(13, "p", 10);
      \u0275\u0275element(14, "i", 11);
      \u0275\u0275text(15, "25 Questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p", 12);
      \u0275\u0275element(17, "i", 13);
      \u0275\u0275text(18, "30 Minutes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(19, "div", 14)(20, "div", 15)(21, "a", 16);
      \u0275\u0275text(22, "View Results");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 17);
      \u0275\u0275text(24, "Add Question");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(25, "div", 18)(26, "div", 1)(27, "div", 19)(28, "h6");
      \u0275\u0275text(29, "Which of the following is a principle of UX design?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 20)(31, "a", 21);
      \u0275\u0275element(32, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "a", 23);
      \u0275\u0275element(34, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div")(36, "div", 25);
      \u0275\u0275element(37, "input", 26);
      \u0275\u0275elementStart(38, "label", 27);
      \u0275\u0275text(39, " Minimalistic Design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 25);
      \u0275\u0275element(41, "input", 28);
      \u0275\u0275elementStart(42, "label", 29);
      \u0275\u0275text(43, " User-Centered Design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 25);
      \u0275\u0275element(45, "input", 30);
      \u0275\u0275elementStart(46, "label", 31);
      \u0275\u0275text(47, " Gradient Usage ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 32);
      \u0275\u0275element(49, "input", 33);
      \u0275\u0275elementStart(50, "label", 34);
      \u0275\u0275text(51, " Typography Hierarchy ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(52, "div", 18)(53, "div", 1)(54, "div", 19)(55, "h6");
      \u0275\u0275text(56, "Which tool is commonly used for wireframing?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 20)(58, "a", 21);
      \u0275\u0275element(59, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "a", 23);
      \u0275\u0275element(61, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "div")(63, "div", 25);
      \u0275\u0275element(64, "input", 35);
      \u0275\u0275elementStart(65, "label", 36);
      \u0275\u0275text(66, " Adobe Photoshop ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 25);
      \u0275\u0275element(68, "input", 37);
      \u0275\u0275elementStart(69, "label", 38);
      \u0275\u0275text(70, " Figma ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 25);
      \u0275\u0275element(72, "input", 39);
      \u0275\u0275elementStart(73, "label", 40);
      \u0275\u0275text(74, " Visual Studio Code ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 32);
      \u0275\u0275element(76, "input", 41);
      \u0275\u0275elementStart(77, "label", 42);
      \u0275\u0275text(78, " GitHub ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(79, "div", 18)(80, "div", 1)(81, "div", 19)(82, "h6");
      \u0275\u0275text(83, "What does UI stand for?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 20)(85, "a", 21);
      \u0275\u0275element(86, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "a", 23);
      \u0275\u0275element(88, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "div")(90, "div", 25);
      \u0275\u0275element(91, "input", 43);
      \u0275\u0275elementStart(92, "label", 44);
      \u0275\u0275text(93, " User Intention ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 25);
      \u0275\u0275element(95, "input", 45);
      \u0275\u0275elementStart(96, "label", 46);
      \u0275\u0275text(97, " User Interface ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div", 25);
      \u0275\u0275element(99, "input", 47);
      \u0275\u0275elementStart(100, "label", 48);
      \u0275\u0275text(101, " Universal Interaction ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div", 32);
      \u0275\u0275element(103, "input", 49);
      \u0275\u0275elementStart(104, "label", 50);
      \u0275\u0275text(105, " Usability Information ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(106, "div", 18)(107, "div", 1)(108, "div", 19)(109, "h6");
      \u0275\u0275text(110, "Which of the following is a principle of UX design?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "div", 20)(112, "a", 21);
      \u0275\u0275element(113, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "a", 23);
      \u0275\u0275element(115, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(116, "div")(117, "div", 25);
      \u0275\u0275element(118, "input", 51);
      \u0275\u0275elementStart(119, "label", 52);
      \u0275\u0275text(120, " Minimalistic Design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "div", 25);
      \u0275\u0275element(122, "input", 53);
      \u0275\u0275elementStart(123, "label", 54);
      \u0275\u0275text(124, " User-Centered Design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "div", 25);
      \u0275\u0275element(126, "input", 55);
      \u0275\u0275elementStart(127, "label", 56);
      \u0275\u0275text(128, " Gradient Usage ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "div", 32);
      \u0275\u0275element(130, "input", 57);
      \u0275\u0275elementStart(131, "label", 58);
      \u0275\u0275text(132, " Typography Hierarchy ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(133, "div", 18)(134, "div", 1)(135, "div", 19)(136, "h6");
      \u0275\u0275text(137, "Which tool is commonly used for wireframing?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "div", 20)(139, "a", 21);
      \u0275\u0275element(140, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "a", 23);
      \u0275\u0275element(142, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(143, "div")(144, "div", 25);
      \u0275\u0275element(145, "input", 59);
      \u0275\u0275elementStart(146, "label", 60);
      \u0275\u0275text(147, " Adobe Photoshop ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "div", 25);
      \u0275\u0275element(149, "input", 61);
      \u0275\u0275elementStart(150, "label", 62);
      \u0275\u0275text(151, " Figma ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "div", 25);
      \u0275\u0275element(153, "input", 63);
      \u0275\u0275elementStart(154, "label", 64);
      \u0275\u0275text(155, " Visual Studio Code ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "div", 32);
      \u0275\u0275element(157, "input", 65);
      \u0275\u0275elementStart(158, "label", 66);
      \u0275\u0275text(159, " GitHub ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(160, "div", 18)(161, "div", 1)(162, "div", 19)(163, "h6");
      \u0275\u0275text(164, "What is a wireframe?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "div", 20)(166, "a", 21);
      \u0275\u0275element(167, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "a", 23);
      \u0275\u0275element(169, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(170, "div")(171, "div", 25);
      \u0275\u0275element(172, "input", 67);
      \u0275\u0275elementStart(173, "label", 68);
      \u0275\u0275text(174, " A detailed, interactive prototype ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(175, "div", 25);
      \u0275\u0275element(176, "input", 69);
      \u0275\u0275elementStart(177, "label", 70);
      \u0275\u0275text(178, " A low-fidelity representation of a design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(179, "div", 25);
      \u0275\u0275element(180, "input", 71);
      \u0275\u0275elementStart(181, "label", 72);
      \u0275\u0275text(182, " The codebase of a website ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "div", 32);
      \u0275\u0275element(184, "input", 73);
      \u0275\u0275elementStart(185, "label", 74);
      \u0275\u0275text(186, " A high-fidelity design concept ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(187, "div", 18)(188, "div", 1)(189, "div", 19)(190, "h6");
      \u0275\u0275text(191, "What is the primary goal of UX design?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "div", 20)(193, "a", 21);
      \u0275\u0275element(194, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "a", 75);
      \u0275\u0275element(196, "i", 76);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(197, "div")(198, "div", 25);
      \u0275\u0275element(199, "input", 77);
      \u0275\u0275elementStart(200, "label", 78);
      \u0275\u0275text(201, " To create a visually appealing design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "div", 25);
      \u0275\u0275element(203, "input", 79);
      \u0275\u0275elementStart(204, "label", 80);
      \u0275\u0275text(205, " To enhance user satisfaction and usability ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "div", 25);
      \u0275\u0275element(207, "input", 81);
      \u0275\u0275elementStart(208, "label", 82);
      \u0275\u0275text(209, " To develop complex navigation flows ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(210, "div", 32);
      \u0275\u0275element(211, "input", 83);
      \u0275\u0275elementStart(212, "label", 84);
      \u0275\u0275text(213, " To optimize code performance ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(214, "div", 85)(215, "a", 86);
      \u0275\u0275text(216, "Load More");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(217, "div", 87)(218, "div", 88)(219, "div", 89)(220, "div", 90)(221, "h5", 91);
      \u0275\u0275text(222, "Add New Question");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "button", 92);
      \u0275\u0275element(224, "i", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(225, "form")(226, "div", 94)(227, "div", 95)(228, "label", 96);
      \u0275\u0275text(229, "Question ");
      \u0275\u0275elementStart(230, "span", 97);
      \u0275\u0275text(231, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(232, "input", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "div", 95)(234, "label", 96);
      \u0275\u0275text(235, "Question Type ");
      \u0275\u0275elementStart(236, "span", 97);
      \u0275\u0275text(237, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(238, "mat-select", 99)(239, "mat-option", 100);
      \u0275\u0275text(240, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "mat-option", 100);
      \u0275\u0275text(242, "Multiple choice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "mat-option", 100);
      \u0275\u0275text(244, "True or False");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(245, "h6", 95);
      \u0275\u0275text(246, "Answer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "div", 101)(248, "div", 95)(249, "div", 102)(250, "label", 96);
      \u0275\u0275text(251, "Choice 1 ");
      \u0275\u0275elementStart(252, "span", 97);
      \u0275\u0275text(253, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(254, "div", 103)(255, "label", 104);
      \u0275\u0275text(256, "Correct Answer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(257, "input", 105);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(258, "input", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275template(259, AdminrhQuizQuestionsComponent_ng_container_259_Template, 16, 1, "ng-container", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "a", 107);
      \u0275\u0275listener("click", function AdminrhQuizQuestionsComponent_Template_a_click_260_listener() {
        return ctx.addNewRow();
      });
      \u0275\u0275element(261, "i", 108);
      \u0275\u0275text(262, "Add New ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(263, "div", 109)(264, "button", 110);
      \u0275\u0275text(265, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "button", 111);
      \u0275\u0275text(267, "Add Question");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(268, "div", 112)(269, "div", 88)(270, "div", 89)(271, "div", 90)(272, "h5", 91);
      \u0275\u0275text(273, "Edit Question");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "button", 92);
      \u0275\u0275element(275, "i", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "form")(277, "div", 94)(278, "div", 95)(279, "label", 96);
      \u0275\u0275text(280, "Question ");
      \u0275\u0275elementStart(281, "span", 97);
      \u0275\u0275text(282, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(283, "input", 113);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(284, "div", 95)(285, "label", 96);
      \u0275\u0275text(286, "Question Type ");
      \u0275\u0275elementStart(287, "span", 97);
      \u0275\u0275text(288, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(289, "mat-select", 114)(290, "mat-option", 100);
      \u0275\u0275text(291, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "mat-option", 100);
      \u0275\u0275text(293, "Multiple choice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "mat-option", 100);
      \u0275\u0275text(295, "True or False");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(296, "h6", 95);
      \u0275\u0275text(297, "Answer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "div", 95)(299, "div", 102)(300, "label", 96);
      \u0275\u0275text(301, "Choice 1 ");
      \u0275\u0275elementStart(302, "span", 97);
      \u0275\u0275text(303, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(304, "div", 103)(305, "label", 115);
      \u0275\u0275text(306, "Correct Answer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(307, "input", 116);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(308, "input", 117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(309, "div", 95)(310, "div", 102)(311, "label", 96);
      \u0275\u0275text(312, "Choice 2 ");
      \u0275\u0275elementStart(313, "span", 97);
      \u0275\u0275text(314, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(315, "div", 103)(316, "label", 118);
      \u0275\u0275text(317, "Correct Answer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(318, "input", 119);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(319, "input", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "div", 95)(321, "div", 102)(322, "label", 96);
      \u0275\u0275text(323, "Choice 3 ");
      \u0275\u0275elementStart(324, "span", 97);
      \u0275\u0275text(325, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(326, "div", 103)(327, "label", 121);
      \u0275\u0275text(328, "Correct Answer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(329, "input", 122);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(330, "input", 123);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(331, "div", 95)(332, "div", 102)(333, "label", 96);
      \u0275\u0275text(334, "Choice 4 ");
      \u0275\u0275elementStart(335, "span", 97);
      \u0275\u0275text(336, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(337, "div", 103)(338, "label", 124);
      \u0275\u0275text(339, "Correct Answer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(340, "input", 125);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(341, "input", 126);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(342, "div", 109)(343, "button", 110);
      \u0275\u0275text(344, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(345, "button", 111);
      \u0275\u0275text(346, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(347, "div", 127)(348, "div", 128)(349, "div", 89)(350, "div", 129)(351, "span", 130);
      \u0275\u0275element(352, "i", 131);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(353, "div")(354, "h4", 7);
      \u0275\u0275text(355, "Delete Quiz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "p", 95);
      \u0275\u0275text(357, "Are you sure you want to delete Quiz \u201CInformation About UI/UX Design Degree\u201D?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "div", 132)(359, "a", 133);
      \u0275\u0275text(360, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(361, "a", 134);
      \u0275\u0275text(362, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275property("routerLink", ctx.routes.instructorQuizResult);
      \u0275\u0275advance(238);
      \u0275\u0275property("ngForOf", ctx.formData);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhQuizQuestionsComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-quiz-questions", imports: [CommonModule, RouterLink, FormsModule, MatSelectModule], template: '\n    <div class="card bg-light">\n        <div class="card-body">\n            <div class="row align-items-center gy-3">\n                <div class="col-xl-8">\n                    <div>\n                        <div class="d-sm-flex align-items-center">\n                            <div class="quiz-img me-3 mb-2 mb-sm-0">\n                                <img src="assets/img/students/quiz.jpg" alt="">\n                            </div>\n                            <div>\n                                <h5 class="mb-2"><a href="javascript:void(0);">Information About UI/UX Design Degree</a></h5>\n                                <div class="question-info d-flex align-items-center">\n                                    <p class="d-flex align-items-center fs-14 me-2 pe-2 border-end mb-0"><i class="isax isax-message-question5 text-primary-soft me-2"></i>25 Questions</p>\n                                    <p class="d-flex align-items-center fs-14 mb-0"><i class="isax isax-clock5 text-secondary-soft me-2"></i>30 Minutes</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-xl-4">\n                    <div class="d-flex align-items-center justify-content-sm-end">\n                        <a [routerLink]="routes.instructorQuizResult" class="text-info text-decoration-underline fs-12 fw-medium me-3">View Results</a>\n                        <a href="javascript:void(0);" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#add_question">Add Question</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="card">\n        <div class="card-body">\n            <div class="d-flex align-items-center justify-content-between mb-3">\n                <h6>Which of the following is a principle of UX design?</h6>\n                <div class="d-flex align-items-center justify-content-end">\n                    <a href="javascript:void(0);" class="d-inline-flex fs-14 me-2 action-icon" data-bs-toggle="modal" data-bs-target="#edit_question"><i class="isax isax-edit-2"></i></a>\n                    <a href="javascript:void(0);" class="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>\n                </div>\n            </div>\n            <div>\n                <div class="form-check mb-2">\n                    <input class="form-check-input" type="radio" name="qusetion-1" id="Radio-sm-1">\n                    <label class="form-check-label" for="Radio-sm-1">\n                        Minimalistic Design\n                    </label>\n                </div>\n                <div class="form-check mb-2">\n                    <input class="form-check-input" type="radio" name="qusetion-1" id="Radio-sm-2" checked>\n                    <label class="form-check-label" for="Radio-sm-2">\n                        User-Centered Design\n                    </label>\n                </div>\n                <div class="form-check mb-2">\n                    <input class="form-check-input" type="radio" name="qusetion-1" id="Radio-sm-3">\n                    <label class="form-check-label" for="Radio-sm-3">\n                        Gradient Usage\n                    </label>\n                </div>\n                <div class="form-check mb-0">\n                    <input class="form-check-input" type="radio" name="qusetion-1" id="Radio-sm-4">\n                    <label class="form-check-label" for="Radio-sm-4">\n                        Typography Hierarchy\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="card">\n        <div class="card-body">\n            <div class="d-flex align-items-center justify-content-between mb-3">\n                <h6>Which tool is commonly used for wireframing?</h6>\n                <div class="d-flex align-items-center justify-content-end">\n                    <a href="javascript:void(0);" class="d-inline-flex fs-14 me-2 action-icon" data-bs-toggle="modal" data-bs-target="#edit_question"><i class="isax isax-edit-2"></i></a>\n                    <a href="javascript:void(0);" class="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>\n                </div>\n            </div>\n            <div>\n                <div class="form-check mb-2">\n                    <input class="form-check-input" type="radio" name="qusetion-1" id="Radio-sm-5">\n                    <label class="form-check-label" for="Radio-sm-5">\n                        Adobe Photoshop\n                    </label>\n                </div>\n                <div class="form-check mb-2">\n                    <input class="form-check-input" type="radio" name="qusetion-2" id="Radio-sm-6" checked>\n                    <label class="form-check-label" for="Radio-sm-6">\n                        Figma\n                    </label>\n                </div>\n                <div class="form-check mb-2">\n                    <input class="form-check-input" type="radio" name="qusetion-2" id="Radio-sm-7">\n                    <label class="form-check-label" for="Radio-sm-7">\n                        Visual Studio Code\n                    </label>\n                </div>\n                <div class="form-check mb-0">\n                    <input class="form-check-input" type="radio" name="qusetion-2" id="Radio-sm-8">\n                    <label class="form-check-label" for="Radio-sm-8">\n                        GitHub\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="card">\n        <div class="card-body">\n            <div class="d-flex align-items-center justify-content-between mb-3">\n                <h6>What does UI stand for?</h6>\n                <div class="d-flex align-items-center justify-content-end">\n                    <a href="javascript:void(0);" class="d-inline-flex fs-14 me-2 action-icon" data-bs-toggle="modal" data-bs-target="#edit_question"><i class="isax isax-edit-2"></i></a>\n                    <a href="javascript:void(0);" class="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>\n                </div>\n            </div>\n            <div>\n                <div class="form-check mb-2">\n                    <input class="form-check-input" type="radio" name="qusetion-3" id="Radio-sm-9">\n                    <label class="form-check-label" for="Radio-sm-9">\n                        User Intention\n                    </label>\n                </div>\n                <div class="form-check mb-2">\n                    <input class="form-check-input" type="radio" name="qusetion-3" id="Radio-sm-10" checked>\n                    <label class="form-check-label" for="Radio-sm-10">\n                        User Interface\n                    </label>\n                </div>\n                <div class="form-check mb-2">\n                    <input class="form-check-input" type="radio" name="qusetion-3" id="Radio-sm-11">\n                    <label class="form-check-label" for="Radio-sm-11">\n                        Universal Interaction\n                    </label>\n                </div>\n                <div class="form-check mb-0">\n                    <input class="form-check-input" type="radio" name="qusetion-3" id="Radio-sm-12">\n                    <label class="form-check-label" for="Radio-sm-12">\n                        Usability Information\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="card">\n        <div class="card-body">\n            <div class="d-flex align-items-center justify-content-between mb-3">\n                <h6>Which of the following is a principle of UX design?</h6>\n                <div class="d-flex align-items-center justify-content-end">\n                    <a href="javascript:void(0);" class="d-inline-flex fs-14 me-2 action-icon" data-bs-toggle="modal" data-bs-target="#edit_question"><i class="isax isax-edit-2"></i></a>\n                    <a href="javascript:void(0);" class="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>\n                </div>\n            </div>\n            <div>\n                <div class="form-check mb-2">\n                    <input class="form-check-input" type="radio" name="qusetion-4" id="Radio-sm-13">\n                    <label class="form-check-label" for="Radio-sm-13">\n                        Minimalistic Design\n                    </label>\n                </div>\n                <div class="form-check mb-2">\n                    <input class="form-check-input" type="radio" name="qusetion-4" id="Radio-sm-14" checked>\n                    <label class="form-check-label" for="Radio-sm-14">\n                        User-Centered Design\n                    </label>\n                </div>\n                <div class="form-check mb-2">\n                    <input class="form-check-input" type="radio" name="qusetion-4" id="Radio-sm-15">\n                    <label class="form-check-label" for="Radio-sm-15">\n                        Gradient Usage\n                    </label>\n                </div>\n                <div class="form-check mb-0">\n                    <input class="form-check-input" type="radio" name="qusetion-4" id="Radio-sm-16">\n                    <label class="form-check-label" for="Radio-sm-16">\n                        Typography Hierarchy\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="card">\n        <div class="card-body">\n            <div class="d-flex align-items-center justify-content-between mb-3">\n                <h6>Which tool is commonly used for wireframing?</h6>\n                <div class="d-flex align-items-center justify-content-end">\n                    <a href="javascript:void(0);" class="d-inline-flex fs-14 me-2 action-icon" data-bs-toggle="modal" data-bs-target="#edit_question"><i class="isax isax-edit-2"></i></a>\n                    <a href="javascript:void(0);" class="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>\n                </div>\n            </div>\n            <div>\n                <div class="form-check mb-2">\n                    <input class="form-check-input" type="radio" name="qusetion-5" id="Radio-sm-17">\n                    <label class="form-check-label" for="Radio-sm-17">\n                        Adobe Photoshop\n                    </label>\n                </div>\n                <div class="form-check mb-2">\n                    <input class="form-check-input" type="radio" name="qusetion-5" id="Radio-sm-18" checked>\n                    <label class="form-check-label" for="Radio-sm-18">\n                        Figma\n                    </label>\n                </div>\n                <div class="form-check mb-2">\n                    <input class="form-check-input" type="radio" name="qusetion-5" id="Radio-sm-19">\n                    <label class="form-check-label" for="Radio-sm-19">\n                        Visual Studio Code\n                    </label>\n                </div>\n                <div class="form-check mb-0">\n                    <input class="form-check-input" type="radio" name="qusetion-5" id="Radio-sm-20">\n                    <label class="form-check-label" for="Radio-sm-20">\n                        GitHub\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="card">\n        <div class="card-body">\n            <div class="d-flex align-items-center justify-content-between mb-3">\n                <h6>What is a wireframe?</h6>\n                <div class="d-flex align-items-center justify-content-end">\n                    <a href="javascript:void(0);" class="d-inline-flex fs-14 me-2 action-icon" data-bs-toggle="modal" data-bs-target="#edit_question"><i class="isax isax-edit-2"></i></a>\n                    <a href="javascript:void(0);" class="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>\n                </div>\n            </div>\n            <div>\n                <div class="form-check mb-2">\n                    <input class="form-check-input" type="radio" name="qusetion-6" id="Radio-sm-21">\n                    <label class="form-check-label" for="Radio-sm-21">\n                        A detailed, interactive prototype\n                    </label>\n                </div>\n                <div class="form-check mb-2">\n                    <input class="form-check-input" type="radio" name="qusetion-6" id="Radio-sm-22" checked>\n                    <label class="form-check-label" for="Radio-sm-22">\n                        A low-fidelity representation of a design\n                    </label>\n                </div>\n                <div class="form-check mb-2">\n                    <input class="form-check-input" type="radio" name="qusetion-6" id="Radio-sm-23">\n                    <label class="form-check-label" for="Radio-sm-23">\n                        The codebase of a website\n                    </label>\n                </div>\n                <div class="form-check mb-0">\n                    <input class="form-check-input" type="radio" name="qusetion-6" id="Radio-sm-24">\n                    <label class="form-check-label" for="Radio-sm-24">\n                        A high-fidelity design concept\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="card">\n        <div class="card-body">\n            <div class="d-flex align-items-center justify-content-between mb-3">\n                <h6>What is the primary goal of UX design?</h6>\n                <div class="d-flex align-items-center justify-content-end">\n                    <a href="javascript:void(0);" class="d-inline-flex fs-14 me-2 action-icon" data-bs-toggle="modal" data-bs-target="#edit_question"><i class="isax isax-edit-2"></i></a>\n                    <a href="javascript:void(0);" class="d-inline-flex fs-14"><i class="isax isax-trash" data-bs-toggle="modal" data-bs-target="#delete_modal"></i></a>\n                </div>\n            </div>\n            <div>\n                <div class="form-check mb-2">\n                    <input class="form-check-input" type="radio" name="qusetion-7" id="Radio-sm-25">\n                    <label class="form-check-label" for="Radio-sm-25">\n                        To create a visually appealing design\n                    </label>\n                </div>\n                <div class="form-check mb-2">\n                    <input class="form-check-input" type="radio" name="qusetion-7" id="Radio-sm-26" checked>\n                    <label class="form-check-label" for="Radio-sm-26">\n                        To enhance user satisfaction and usability\n                    </label>\n                </div>\n                <div class="form-check mb-2">\n                    <input class="form-check-input" type="radio" name="qusetion-7" id="Radio-sm-27">\n                    <label class="form-check-label" for="Radio-sm-27">\n                        To develop complex navigation flows\n                    </label>\n                </div>\n                <div class="form-check mb-0">\n                    <input class="form-check-input" type="radio" name="qusetion-7" id="Radio-sm-28">\n                    <label class="form-check-label" for="Radio-sm-28">\n                        To optimize code performance\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="text-center">\n        <a href="javascript:void(0);" class="btn btn-secondary">Load More</a>\n    </div>\n\n\n    			<!-- Add Question -->\n			<div class="modal fade" id="add_question">\n				<div class="modal-dialog modal-dialog-centered modal-lg">\n					<div class="modal-content">\n						<div class="modal-header">\n							<h5 class="fw-bold">Add New Question</h5>\n							<button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">\n								<i class="isax isax-close-circle5"></i>\n							</button>\n						</div>\n						<form>\n							<div class="modal-body">\n								<div class="mb-3">\n									<label class="form-label">Question <span class="text-danger"> *</span></label>\n									<input type="text" class="form-control">\n								</div>\n								<div class="mb-3">\n									<label class="form-label">Question Type <span class="text-danger"> *</span></label>\n									<mat-select class="custom-mat-select select" placeholder="Select">\n										<mat-option value="1">Select</mat-option>\n										<mat-option value="1">Multiple choice</mat-option>\n										<mat-option value="1">True or False</mat-option>\n									</mat-select>\n								</div>\n								<h6 class="mb-3">Answer</h6>\n								<div class="add-choice-data">\n									<div class="mb-3">\n										<div class="d-flex align-items-center justify-content-between">\n											<label class="form-label">Choice 1 <span class="text-danger"> *</span></label>\n											<div class="form-check form-switch form-switch-end">\n												<label class="form-check-label" for="switch-sm">Correct Answer</label>\n												<input class="form-check-input" type="checkbox" role="switch" id="switch-sm" checked>\n											</div>\n										</div>\n										<input type="text" class="form-control">\n									</div>\n                                    <ng-container *ngFor="let item of formData; let i = index;">\n                                        <div class="mb-3 extra-choice-row">\n                                            <div class="d-flex align-items-end justify-content-between">\n                                                <div class="flex-fill">\n                                                    <div class="d-flex align-items-center justify-content-between">\n                                                        <label class="form-label">Choice {{ i + 2 }}\n                                                            <span class="text-danger"> *</span>\n                                                        </label>\n                                                        <div class="form-check form-switch form-switch-end">\n                                                            <label class="form-check-label" for="switch-sm2">Correct Answer</label>\n                                                            <input class="form-check-input" type="checkbox" role="switch" id="switch-sm2">\n                                                        </div>\n                                                    </div>\n                                                    <input type="text" class="form-control"></div>\n                                                    <a href="javascript:void(0);" class="delete-item ms-4" (click)="removeRow(i)"><i class="isax isax-trash"></i></a>\n                                                </div>\n                                            </div>\n                                    </ng-container>\n								</div>\n								<a href="javascript:void(0);" class="text-secondary d-inline-flex align-items-center fw-medium add-choice" (click)="addNewRow()">\n									<i class="isax isax-add me-1"></i>Add New\n								</a>\n							</div>\n							<div class="modal-footer">\n								<button class="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Cancel</button>\n								<button class="btn btn-secondary rounded-pill" type="submit" data-bs-dismiss="modal">Add Question</button>\n							</div>\n						</form>\n					</div>\n				</div>\n			</div>\n			<!-- /Add Question -->\n\n			<!-- Add Question -->\n			<div class="modal fade" id="edit_question">\n				<div class="modal-dialog modal-dialog-centered modal-lg">\n					<div class="modal-content">\n						<div class="modal-header">\n							<h5 class="fw-bold">Edit Question</h5>\n							<button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">\n								<i class="isax isax-close-circle5"></i>\n							</button>\n						</div>\n						<form>\n							<div class="modal-body">\n								<div class="mb-3">\n									<label class="form-label">Question <span class="text-danger"> *</span></label>\n									<input type="text" class="form-control" value="Which of the following is a principle of UX design?">\n								</div>\n								<div class="mb-3">\n									<label class="form-label">Question Type <span class="text-danger"> *</span></label>\n									<mat-select class="custom-mat-select select" placeholder="Multiple choice">\n										<mat-option value="1">Select</mat-option>\n										<mat-option value="1">Multiple choice</mat-option>\n										<mat-option value="1">True or False</mat-option>\n									</mat-select>\n								</div>\n								<h6 class="mb-3">Answer</h6>\n								<div class="mb-3">\n									<div class="d-flex align-items-center justify-content-between">\n										<label class="form-label">Choice 1 <span class="text-danger"> *</span></label>\n										<div class="form-check form-switch form-switch-end">\n											<label class="form-check-label correct-ans" for="switch-sm3">Correct Answer</label>\n											<input class="form-check-input" type="checkbox" role="switch" id="switch-sm3" checked>\n										</div>\n									</div>\n									<input type="text" class="form-control" value="Minimalistic Design">\n								</div>\n								<div class="mb-3">\n									<div class="d-flex align-items-center justify-content-between">\n										<label class="form-label">Choice 2 <span class="text-danger"> *</span></label>\n										<div class="form-check form-switch form-switch-end">\n											<label class="form-check-label" for="switch-sm4">Correct Answer</label>\n											<input class="form-check-input" type="checkbox" role="switch" id="switch-sm4">\n										</div>\n									</div>\n									<input type="text" class="form-control" value="User-Centered Design">\n								</div>\n								<div class="mb-3">\n									<div class="d-flex align-items-center justify-content-between">\n										<label class="form-label">Choice 3 <span class="text-danger"> *</span></label>\n										<div class="form-check form-switch form-switch-end">\n											<label class="form-check-label" for="switch-sm5">Correct Answer</label>\n											<input class="form-check-input" type="checkbox" role="switch" id="switch-sm5">\n										</div>\n									</div>\n									<input type="text" class="form-control" value="Gradient Usage">\n								</div>\n								<div class="mb-3">\n									<div class="d-flex align-items-center justify-content-between">\n										<label class="form-label">Choice 4 <span class="text-danger"> *</span></label>\n										<div class="form-check form-switch form-switch-end">\n											<label class="form-check-label" for="switch-sm6">Correct Answer</label>\n											<input class="form-check-input" type="checkbox" role="switch" id="switch-sm6">\n										</div>\n									</div>\n									<input type="text" class="form-control" value="Typography Hierarchy">\n								</div>\n							</div>\n							<div class="modal-footer">\n								<button class="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Cancel</button>\n								<button class="btn btn-secondary rounded-pill" type="submit" data-bs-dismiss="modal">Save Changes</button>\n							</div>\n						</form>\n					</div>\n				</div>\n			</div>\n			<!-- /Add Question -->\n\n			<!-- Delete Modal -->\n			<div class="modal fade" id="delete_modal">\n				<div class="modal-dialog modal-dialog-centered">\n					<div class="modal-content">\n						<div class="modal-body text-center custom-modal-body">\n							<span class="avatar avatar-lg bg-secondary-transparent rounded-circle mb-2">\n								<i class="isax isax-trash fs-24 text-danger"></i>\n							</span>\n							<div>\n								<h4 class="mb-2">Delete Quiz</h4>\n								<p class="mb-3">Are you sure you want to delete Quiz \n									\u201CInformation About UI/UX Design Degree\u201D?</p>\n								<div class="d-flex align-items-center justify-content-center">\n									<a href="javascript:void(0);" class="btn bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal">Cancel</a>\n									<a href="javascript:void(0);" class="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Yes, Delete</a>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<!-- /Delete Modal -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhQuizQuestionsComponent, { className: "AdminrhQuizQuestionsComponent", filePath: "src/app/features/adminrh/adminrh-quiz-questions/adminrh-quiz-questions.component.ts", lineNumber: 14 });
})();
export {
  AdminrhQuizQuestionsComponent
};
//# sourceMappingURL=chunk-WIJXI4N7.js.map
