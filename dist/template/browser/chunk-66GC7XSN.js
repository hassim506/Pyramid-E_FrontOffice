import {
  BsDatepickerDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule
} from "./chunk-2KO2TTRT.js";
import "./chunk-YZMAOYRX.js";
import "./chunk-KJG6A5PB.js";
import {
  routes
} from "./chunk-ZAFZNJD2.js";
import "./chunk-YMJPU2MG.js";
import {
  RouterLink
} from "./chunk-LFLGGSY5.js";
import "./chunk-VEAR4SGA.js";
import "./chunk-J5AS2QYG.js";
import "./chunk-GWJREDC5.js";
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
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-2JCHGHJA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/settings/adminrh-settings/adminrh-settings.component.ts
var _c0 = () => ({ adaptivePosition: true });
var AdminrhSettingsComponent = class _AdminrhSettingsComponent {
  routes = routes;
  static \u0275fac = function AdminrhSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhSettingsComponent, selectors: [["app-adminrh-settings"]], decls: 224, vars: 10, consts: [[1, "card"], [1, "card-body"], [1, "profile-upload-group"], [1, "d-flex", "align-items-center"], [1, "avatar", "flex-shrink-0", "avatar-xxxl", "avatar-rounded", "border", "me-3", 3, "routerLink"], ["src", "assets/img/user/user-01.jpg", "alt", "Img", 1, "img-fluid"], [1, "profile-upload-head"], [3, "routerLink"], [1, "fs-14", "mb-0"], [1, "new-employee-field"], [1, "d-flex", "align-items-center", "mt-2"], [1, "image-upload", "position-relative", "mb-0", "me-2"], ["type", "file"], ["href", "javascript:void(0);", 1, "btn", "bg-gray-100", "btn-sm", "rounded-pill", "image-uploads"], [1, "img-delete"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "btn-sm", "rounded-pill"], [1, "edit-profile-info", "mb-3"], [1, "mb-1", "fs-18"], [1, "row"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "value", "Eugene", 1, "form-control"], ["type", "text", "value", "Andre", 1, "form-control"], ["type", "text", "value", "instructordemo", 1, "form-control"], ["type", "text", "value", "90154-91036", 1, "form-control"], [1, "col-md-12"], [1, "mb-4"], ["rows", "4", 1, "form-control"], [1, "mt-3", "mb-3"], [1, "col-xl-7"], ["type", "text", "value", "", 1, "form-control"], [1, "col-xl-5"], [1, "mb-3", "ngxdate"], [1, "input-icon", "position-relative", "calender-input"], [1, "input-icon-addon"], [1, "isax", "isax-calendar"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate", "placeholder", "", 1, "form-control", "datetimepicker", 3, "bsConfig"], [1, "mb-3", "ngxdate1"], [1, "input-icon-addon", "calender-input"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate1", "placeholder", "", 1, "form-control", "datetimepicker", 3, "bsConfig"], ["href", "javascript:void(0);", "id", "add-new-topic-btn", 1, "d-inline-flex", "align-items-center", "text-secondary", "fw-medium", "mb-3"], [1, "isax", "isax-add", "me-1"], [1, "mb-3", "ngxdate2"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate2", "placeholder", "", 1, "form-control", "datetimepicker", 3, "bsConfig"], [1, "mb-3", "ngxdate3"], ["type", "text", "bsDatepicker", "", "placeholder", "", "container", ".ngxdate3", 1, "form-control", "datetimepicker", 3, "bsConfig"], ["href", "javascript:void(0);", "id", "add-new-topic-btn2", 1, "d-inline-flex", "align-items-center", "text-secondary", "fw-medium", "mb-3"], ["type", "submit", 1, "btn", "btn-secondary", "rounded-pill"], [1, "card", "mb-0"], [1, "fs-18", "mb-3"], [1, "mb-1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_account", 1, "btn", "btn-secondary"], ["id", "delete_account", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], [1, "modal-body"], [1, "form-check", "mb-3"], ["type", "radio", "name", "reason", "id", "Radio-sm-1", 1, "form-check-input"], ["for", "Radio-sm-1", 1, "fw-medium", "form-check-label", "text-gray-9"], ["type", "radio", "name", "reason", "id", "Radio-sm-2", 1, "form-check-input"], ["for", "Radio-sm-2", 1, "fw-medium", "form-check-label", "text-gray-9"], ["type", "radio", "name", "reason", "id", "Radio-sm-3", 1, "form-check-input"], ["for", "Radio-sm-3", 1, "fw-medium", "form-check-label", "text-gray-9"], ["type", "radio", "name", "reason", "id", "Radio-sm-4", 1, "form-check-input"], ["for", "Radio-sm-4", 1, "fw-medium", "form-check-label", "text-gray-9"], ["type", "radio", "name", "reason", "id", "Radio-sm-5", 1, "form-check-input"], ["for", "Radio-sm-5", 1, "fw-medium", "form-check-label", "text-gray-9"], ["rows", "3", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill"]], template: function AdminrhSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "a", 4);
      \u0275\u0275element(6, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6)(8, "h6")(9, "a", 7);
      \u0275\u0275text(10, "Your Avatar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p", 8);
      \u0275\u0275text(12, "PNG or JPG no bigger than 800px width and height");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "div", 11);
      \u0275\u0275element(16, "input", 12);
      \u0275\u0275elementStart(17, "a", 13);
      \u0275\u0275text(18, "Upload");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 14)(20, "a", 15);
      \u0275\u0275text(21, "Delete");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(22, "div")(23, "div", 16)(24, "h5", 17);
      \u0275\u0275text(25, "Personal Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p");
      \u0275\u0275text(27, "Edit your personal information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 18)(29, "div", 19)(30, "div", 20)(31, "label", 21);
      \u0275\u0275text(32, "First Name ");
      \u0275\u0275elementStart(33, "span", 22);
      \u0275\u0275text(34, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(35, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 19)(37, "div", 20)(38, "label", 21);
      \u0275\u0275text(39, "Last Name ");
      \u0275\u0275elementStart(40, "span", 22);
      \u0275\u0275text(41, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(42, "input", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 19)(44, "div", 20)(45, "label", 21);
      \u0275\u0275text(46, "User Name ");
      \u0275\u0275elementStart(47, "span", 22);
      \u0275\u0275text(48, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(49, "input", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 19)(51, "div", 20)(52, "label", 21);
      \u0275\u0275text(53, "Phone Number ");
      \u0275\u0275elementStart(54, "span", 22);
      \u0275\u0275text(55, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(56, "input", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 27)(58, "div", 28)(59, "label", 21);
      \u0275\u0275text(60, "Bio ");
      \u0275\u0275elementStart(61, "span", 22);
      \u0275\u0275text(62, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "textarea", 29);
      \u0275\u0275text(64, "I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "div", 30)(66, "h5", 17);
      \u0275\u0275text(67, "Educational Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "p");
      \u0275\u0275text(69, "Edit your Educational information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 27)(71, "div", 18)(72, "div", 31)(73, "div", 18)(74, "div", 19)(75, "div", 20)(76, "label", 21);
      \u0275\u0275text(77, "Degree");
      \u0275\u0275elementStart(78, "span", 22);
      \u0275\u0275text(79, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(80, "input", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 19)(82, "div", 20)(83, "label", 21);
      \u0275\u0275text(84, "University");
      \u0275\u0275elementStart(85, "span", 22);
      \u0275\u0275text(86, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(87, "input", 32);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(88, "div", 33)(89, "div", 18)(90, "div", 19)(91, "div", 34)(92, "label", 21);
      \u0275\u0275text(93, "From Date");
      \u0275\u0275elementStart(94, "span", 22);
      \u0275\u0275text(95, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "div", 35)(97, "span", 36);
      \u0275\u0275element(98, "i", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275element(99, "input", 38);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "div", 19)(101, "div", 39)(102, "label", 21);
      \u0275\u0275text(103, "To Date");
      \u0275\u0275elementStart(104, "span", 22);
      \u0275\u0275text(105, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "div", 35)(107, "span", 40);
      \u0275\u0275element(108, "i", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275element(109, "input", 41);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(110, "a", 42);
      \u0275\u0275element(111, "i", 43);
      \u0275\u0275text(112, " Add New ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "div", 30)(114, "h5", 17);
      \u0275\u0275text(115, "Experience");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "p");
      \u0275\u0275text(117, "Edit your Experience");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "div", 27)(119, "div", 18)(120, "div", 31)(121, "div", 18)(122, "div", 19)(123, "div", 20)(124, "label", 21);
      \u0275\u0275text(125, "Company");
      \u0275\u0275elementStart(126, "span", 22);
      \u0275\u0275text(127, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(128, "input", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "div", 19)(130, "div", 20)(131, "label", 21);
      \u0275\u0275text(132, "Position");
      \u0275\u0275elementStart(133, "span", 22);
      \u0275\u0275text(134, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(135, "input", 32);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(136, "div", 33)(137, "div", 18)(138, "div", 19)(139, "div", 44)(140, "label", 21);
      \u0275\u0275text(141, "From Date");
      \u0275\u0275elementStart(142, "span", 22);
      \u0275\u0275text(143, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "div", 35)(145, "span", 36);
      \u0275\u0275element(146, "i", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275element(147, "input", 45);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(148, "div", 19)(149, "div", 46)(150, "label", 21);
      \u0275\u0275text(151, "To Date");
      \u0275\u0275elementStart(152, "span", 22);
      \u0275\u0275text(153, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "div", 35)(155, "span", 40);
      \u0275\u0275element(156, "i", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275element(157, "input", 47);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(158, "a", 48);
      \u0275\u0275element(159, "i", 43);
      \u0275\u0275text(160, " Add New ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "div", 27)(162, "button", 49);
      \u0275\u0275text(163, "Update Profile");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(164, "div", 50)(165, "div", 1)(166, "h5", 51);
      \u0275\u0275text(167, "Delete Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "h6", 52);
      \u0275\u0275text(169, "Are you sure you want to delete your account?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "p", 20);
      \u0275\u0275text(171, "Refers to the action of permanently removing a user's account and associated data from a system, service and platform.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "a", 53);
      \u0275\u0275text(173, "Delete Account");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(174, "div", 54)(175, "div", 55)(176, "div", 56)(177, "div", 57)(178, "h5");
      \u0275\u0275text(179, "Delete Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "button", 58);
      \u0275\u0275element(181, "i", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "div", 60)(183, "div", 20)(184, "h6", 52);
      \u0275\u0275text(185, "Why Are You Deleting Your Account?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "p");
      \u0275\u0275text(187, "We're sorry to see you go! To help us improve, please let us know your reason for deleting your account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(188, "div")(189, "div", 61);
      \u0275\u0275element(190, "input", 62);
      \u0275\u0275elementStart(191, "label", 63);
      \u0275\u0275text(192, " No longer using the service ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "p");
      \u0275\u0275text(194, "I no longer need this service and won\u2019t be using it in the future.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(195, "div", 61);
      \u0275\u0275element(196, "input", 64);
      \u0275\u0275elementStart(197, "label", 65);
      \u0275\u0275text(198, " Privacy concerns ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "p");
      \u0275\u0275text(200, "I am concerned about how my data is handled and want to remove my information.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(201, "div", 61);
      \u0275\u0275element(202, "input", 66);
      \u0275\u0275elementStart(203, "label", 67);
      \u0275\u0275text(204, " Too many notifications/emails ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "p");
      \u0275\u0275text(206, "I\u2019m overwhelmed by the volume of notifications or emails and would like to reduce them.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(207, "div", 61);
      \u0275\u0275element(208, "input", 68);
      \u0275\u0275elementStart(209, "label", 69);
      \u0275\u0275text(210, " Poor user experience ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "p");
      \u0275\u0275text(212, "I\u2019ve had difficulty using the platform, and it didn\u2019t meet my expectations.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(213, "div", 61);
      \u0275\u0275element(214, "input", 70);
      \u0275\u0275elementStart(215, "label", 71);
      \u0275\u0275text(216, " Other (Please specify) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(217, "div");
      \u0275\u0275element(218, "textarea", 72);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(219, "div", 73)(220, "button", 74);
      \u0275\u0275text(221, "Keep My Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "button", 75);
      \u0275\u0275text(223, "Delete Account");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.studentProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentProfile);
      \u0275\u0275advance(90);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(6, _c0));
      \u0275\u0275advance(10);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(7, _c0));
      \u0275\u0275advance(38);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(10);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(9, _c0));
    }
  }, dependencies: [RouterLink, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-settings", imports: [RouterLink, BsDatepickerModule], template: `

        <form>
        <div class="card">
            <div class="card-body">									
            <div class="profile-upload-group">									
                <div class="d-flex align-items-center">
                    <a [routerLink]="routes.studentProfile" class="avatar flex-shrink-0 avatar-xxxl avatar-rounded border me-3"><img src="assets/img/user/user-01.jpg" alt="Img" class="img-fluid"></a>
                    <div class="profile-upload-head">
                        <h6><a [routerLink]="routes.studentProfile">Your Avatar</a></h6>
                        <p class="fs-14 mb-0">PNG or JPG no bigger than 800px width and height</p>
                        <div class="new-employee-field">
                            <div class="d-flex align-items-center mt-2">
                                <div class="image-upload position-relative mb-0 me-2">
                                    <input type="file">
                                    <a href="javascript:void(0);" class="btn bg-gray-100 btn-sm rounded-pill image-uploads">Upload</a>
                                </div>
                                <div class="img-delete">
                                    <a href="javascript:void(0);" class="btn btn-secondary btn-sm rounded-pill">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>											
            </div>
                <div>
                    <div class="edit-profile-info mb-3">
                        <h5 class="mb-1 fs-18">Personal Details</h5>
                        <p>Edit your personal information</p>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">First Name <span class="text-danger"> *</span></label>
                                <input type="text" class="form-control" value="Eugene">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Last Name <span class="text-danger"> *</span></label>
                                <input type="text" class="form-control" value="Andre">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">User Name <span class="text-danger"> *</span></label>
                                <input type="text" class="form-control" value="instructordemo">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Phone Number <span class="text-danger"> *</span></label>
                                <input type="text" class="form-control" value="90154-91036">
                            </div>
                        </div>
            
                        <div class="col-md-12">
                            <div class="mb-4">
                                <label class="form-label">Bio <span class="text-danger"> *</span></label>
                                <textarea rows="4" class="form-control">I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices.</textarea>
                            </div>
                        </div>
                        <div class="mt-3 mb-3">
                            <h5 class="mb-1 fs-18">Educational Details</h5>
                            <p>Edit your Educational information</p>
                        </div>
                        <div class="col-md-12">                                                    
                            <div class="row">
                                <div class="col-xl-7">
                                  <div class="row">
                                   <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Degree<span class="text-danger"> *</span></label>
                                        <input type="text" class="form-control" value="">
                                    </div>
                                   </div>
                                   <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">University<span class="text-danger"> *</span></label>
                                        <input type="text" class="form-control" value="">
                                    </div>
                                   </div>
                                </div>
                               </div>
                                <div class="col-xl-5">
                                    <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3 ngxdate">
                                        <label class="form-label">From Date<span class="text-danger"> *</span></label>
                                        <div class="input-icon position-relative calender-input">
                                            <span class="input-icon-addon">
                                                <i class="isax isax-calendar"></i>
                                            </span>
                                            <input type="text" class="form-control datetimepicker" bsDatepicker container=".ngxdate" [bsConfig]="{ adaptivePosition: true }" placeholder="">
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3 ngxdate1">
                                        <label class="form-label">To Date<span class="text-danger"> *</span></label>
                                        <div class="input-icon position-relative calender-input">
                                            <span class="input-icon-addon calender-input">
                                                <i class="isax isax-calendar"></i>
                                            </span>
                                            <input type="text" class="form-control datetimepicker" bsDatepicker container=".ngxdate1" [bsConfig]="{ adaptivePosition: true }" placeholder="">
                                        </div>
                                    </div>
                                    </div>
                                   </div>
                                </div>
                            </div>
                            <a href="javascript:void(0);" class="d-inline-flex align-items-center text-secondary fw-medium mb-3" id="add-new-topic-btn">
                                <i class="isax isax-add me-1"></i> Add New
                            </a>
                        </div>
                        <div class="mt-3 mb-3">
                            <h5 class="mb-1 fs-18">Experience</h5>
                            <p>Edit your Experience</p>
                        </div>
                        <div class="col-md-12">                                                    
                            <div class="row">
                                <div class="col-xl-7">
                                  <div class="row">
                                   <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Company<span class="text-danger"> *</span></label>
                                        <input type="text" class="form-control" value="">
                                    </div>
                                   </div>
                                   <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Position<span class="text-danger"> *</span></label>
                                        <input type="text" class="form-control" value="">
                                    </div>
                                   </div>
                                </div>
                               </div>
                                <div class="col-xl-5">
                                    <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3 ngxdate2">
                                        <label class="form-label">From Date<span class="text-danger"> *</span></label>
                                        <div class="input-icon position-relative calender-input">
                                            <span class="input-icon-addon">
                                                <i class="isax isax-calendar"></i>
                                            </span>
                                            <input type="text" class="form-control datetimepicker" bsDatepicker container=".ngxdate2" [bsConfig]="{ adaptivePosition: true }" placeholder="">
                                        </div>
                                       </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3 ngxdate3">
                                        <label class="form-label">To Date<span class="text-danger"> *</span></label>
                                        <div class="input-icon position-relative calender-input">
                                            <span class="input-icon-addon calender-input">
                                                <i class="isax isax-calendar"></i>
                                            </span>
                                            <input type="text" class="form-control datetimepicker" bsDatepicker placeholder="" container=".ngxdate3" [bsConfig]="{ adaptivePosition: true }">
                                        </div>
                                        </div>
                                    </div>
                                   </div>
                                </div>
                            </div>
                            <a href="javascript:void(0);" class="d-inline-flex align-items-center text-secondary fw-medium mb-3" id="add-new-topic-btn2">
                                <i class="isax isax-add me-1"></i> Add New
                              </a>
                        </div>
                        <div class="col-md-12">
                            <button class="btn btn-secondary rounded-pill" type="submit">Update Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div class="card mb-0">
                <div class="card-body">	
                    <h5 class="fs-18 mb-3">Delete Account</h5>								
                    <h6 class="mb-1">Are you sure you want to delete your account?</h6>
                    <p class="mb-3">Refers to the action of permanently removing a user's account and associated data from a system, service and platform.</p>
                    <a href="javascript:void(0);" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#delete_account">Delete Account</a>								
                </div>
            </div>
        </form>


            		<!-- Delete Modal -->
			<div class="modal fade" id="delete_account">
				<div class="modal-dialog modal-dialog-centered modal-lg">
					<div class="modal-content">
						<div class="modal-header">
							<h5>Delete Account</h5>
							<button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
								<i class="isax isax-close-circle5"></i>
							</button>
						</div>
						<div class="modal-body">
							<div class="mb-3">
								<h6 class="mb-1">Why Are You Deleting Your Account?</h6>
								<p>We're sorry to see you go! To help us improve, please let us know your reason for deleting your account</p>
							</div>
							<div>
								<div class="form-check mb-3">
									<input class="form-check-input" type="radio" name="reason" id="Radio-sm-1">
									<label class="fw-medium form-check-label text-gray-9" for="Radio-sm-1">
										No longer using the service
									</label>
									<p>I no longer need this service and won\u2019t be using it in the future.</p>
								</div>
								<div class="form-check mb-3">
									<input class="form-check-input" type="radio" name="reason" id="Radio-sm-2">
									<label class="fw-medium form-check-label text-gray-9" for="Radio-sm-2">
										Privacy concerns
									</label>
									<p>I am concerned about how my data is handled and want to remove my information.</p>
								</div>
								<div class="form-check mb-3">
									<input class="form-check-input" type="radio" name="reason" id="Radio-sm-3">
									<label class="fw-medium form-check-label text-gray-9" for="Radio-sm-3">
										Too many notifications/emails
									</label>
									<p>I\u2019m overwhelmed by the volume of notifications or emails and would like to reduce them.</p>
								</div>
								<div class="form-check mb-3">
									<input class="form-check-input" type="radio" name="reason" id="Radio-sm-4">
									<label class="fw-medium form-check-label text-gray-9" for="Radio-sm-4">
										Poor user experience
									</label>
									<p>I\u2019ve had difficulty using the platform, and it didn\u2019t meet my expectations.</p>
								</div>
								<div class="form-check mb-3">
									<input class="form-check-input" type="radio" name="reason" id="Radio-sm-5">
									<label class="fw-medium form-check-label text-gray-9" for="Radio-sm-5">
										Other (Please specify)
									</label>
								</div>
								<div>
									<textarea rows="3" class="form-control"></textarea>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button class="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Keep My Account</button>
							<button class="btn btn-secondary rounded-pill" type="button" data-bs-dismiss="modal">Delete Account</button>
						</div>
					</div>
				</div>
			</div>
			<!-- /Delete Modal -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhSettingsComponent, { className: "AdminrhSettingsComponent", filePath: "src/app/features/adminrh/settings/adminrh-settings/adminrh-settings.component.ts", lineNumber: 11 });
})();
export {
  AdminrhSettingsComponent
};
//# sourceMappingURL=chunk-66GC7XSN.js.map
