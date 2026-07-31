import {
  MatSelect,
  MatSelectModule
} from "./chunk-EG4EGZDY.js";
import {
  MatOption
} from "./chunk-ZO6YLGJ4.js";
import "./chunk-OFSY6GHA.js";
import "./chunk-UHG6VJUL.js";
import "./chunk-OKOPG33U.js";
import "./chunk-5FDCLFRJ.js";
import "./chunk-5G2VXYOC.js";
import "./chunk-EOO6SK2I.js";
import {
  BsDatepickerDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule
} from "./chunk-STYII2HH.js";
import "./chunk-WK6TGC5I.js";
import "./chunk-T567WOGV.js";
import {
  routes
} from "./chunk-37V3B3KY.js";
import "./chunk-ZGFJXD53.js";
import {
  RouterLink
} from "./chunk-UFFO2UKW.js";
import "./chunk-U7UKDAOZ.js";
import "./chunk-EGNJBGKD.js";
import {
  CommonModule
} from "./chunk-I2HNPZHV.js";
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
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-BSBCM3BI.js";
import "./chunk-4MWRP73S.js";

// src/app/features/student/settings/student-settings/student-settings.component.ts
var _c0 = () => ({ adaptivePosition: true });
var StudentSettingsComponent = class _StudentSettingsComponent {
  routes = routes;
  static \u0275fac = function StudentSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentSettingsComponent, selectors: [["app-student-settings"]], decls: 151, vars: 4, consts: [[1, "card"], [1, "card-body"], [1, "profile-upload-group"], [1, "d-flex", "align-items-center"], [1, "avatar", "flex-shrink-0", "avatar-xxxl", "avatar-rounded", "border", "me-3", 3, "routerLink"], ["src", "assets/img/user/user-02.jpg", "alt", "Img", 1, "img-fluid"], [1, "profile-upload-head"], [3, "routerLink"], [1, "fs-14", "mb-0"], [1, "new-employee-field"], [1, "d-flex", "align-items-center", "mt-2"], [1, "image-upload", "position-relative", "mb-0", "me-2"], ["type", "file"], ["href", "javascript:void(0);", 1, "btn", "bg-gray-100", "btn-sm", "rounded-pill", "image-uploads"], [1, "img-delete"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "btn-sm", "rounded-pill"], [1, "edit-profile-info", "mb-3"], [1, "mb-1"], [1, "row"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "value", "Ronald", 1, "form-control"], ["type", "text", "value", "Richard", 1, "form-control"], ["type", "text", "value", "studentdemo", 1, "form-control"], ["type", "text", "value", "90154-91036", 1, "form-control"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "mb-3", "ngxdate"], [1, "input-icon-end", "position-relative"], ["type", "text", "bsDatepicker", "", "placeholder", "dd/mm/yyyy", "container", ".ngxdate", 1, "form-control", "datetimepicker", 3, "bsConfig"], [1, "input-icon-addon"], [1, "isax", "isax-calendar"], [1, "col-md-12"], ["rows", "4", 1, "form-control"], ["type", "submit", 1, "btn", "btn-secondary", "rounded-pill"], [1, "card", "mb-0"], [1, "fs-18", "mb-3"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_account", 1, "btn", "btn-secondary"], ["id", "delete_account", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], [1, "modal-body"], [1, "form-check", "mb-3"], ["type", "radio", "name", "reason", "id", "Radio-sm-1", 1, "form-check-input"], ["for", "Radio-sm-1", 1, "fw-medium", "form-check-label", "text-gray-9"], ["type", "radio", "name", "reason", "id", "Radio-sm-2", 1, "form-check-input"], ["for", "Radio-sm-2", 1, "fw-medium", "form-check-label", "text-gray-9"], ["type", "radio", "name", "reason", "id", "Radio-sm-3", 1, "form-check-input"], ["for", "Radio-sm-3", 1, "fw-medium", "form-check-label", "text-gray-9"], ["type", "radio", "name", "reason", "id", "Radio-sm-4", 1, "form-check-input"], ["for", "Radio-sm-4", 1, "fw-medium", "form-check-label", "text-gray-9"], ["type", "radio", "name", "reason", "id", "Radio-sm-5", 1, "form-check-input"], ["for", "Radio-sm-5", 1, "fw-medium", "form-check-label", "text-gray-9"], ["rows", "3", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill"]], template: function StudentSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "form")(3, "div", 2)(4, "div", 3)(5, "a", 4);
      \u0275\u0275element(6, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6)(8, "h6")(9, "a", 7);
      \u0275\u0275text(10, "Photo de Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p", 8);
      \u0275\u0275text(12, "PNG or JPG no bigger than 800px width and height");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "div", 11);
      \u0275\u0275element(16, "input", 12);
      \u0275\u0275elementStart(17, "a", 13);
      \u0275\u0275text(18, "Uploader");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 14)(20, "a", 15);
      \u0275\u0275text(21, "Supprimer");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(22, "div")(23, "div", 16)(24, "h5", 17);
      \u0275\u0275text(25, "Informations Personnelles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p");
      \u0275\u0275text(27, "Edit your personal information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 18)(29, "div", 19)(30, "div", 20)(31, "label", 21);
      \u0275\u0275text(32, "Prenom ");
      \u0275\u0275elementStart(33, "span", 22);
      \u0275\u0275text(34, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(35, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 19)(37, "div", 20)(38, "label", 21);
      \u0275\u0275text(39, "Nom ");
      \u0275\u0275elementStart(40, "span", 22);
      \u0275\u0275text(41, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(42, "input", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 19)(44, "div", 20)(45, "label", 21);
      \u0275\u0275text(46, "Nom d'utilisateur ");
      \u0275\u0275elementStart(47, "span", 22);
      \u0275\u0275text(48, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(49, "input", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 19)(51, "div", 20)(52, "label", 21);
      \u0275\u0275text(53, "Num\xE9ro de T\xE9l\xE9phone ");
      \u0275\u0275elementStart(54, "span", 22);
      \u0275\u0275text(55, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(56, "input", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 19)(58, "div", 20)(59, "label", 21);
      \u0275\u0275text(60, "Genre ");
      \u0275\u0275elementStart(61, "span", 22);
      \u0275\u0275text(62, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "mat-select", 27)(64, "mat-option", 28);
      \u0275\u0275text(65, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "mat-option", 28);
      \u0275\u0275text(67, "Male");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "mat-option", 28);
      \u0275\u0275text(69, "Female");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(70, "div", 19)(71, "div", 29)(72, "label", 21);
      \u0275\u0275text(73, "Date de Naissance ");
      \u0275\u0275elementStart(74, "span", 22);
      \u0275\u0275text(75, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 30);
      \u0275\u0275element(77, "input", 31);
      \u0275\u0275elementStart(78, "span", 32);
      \u0275\u0275element(79, "i", 33);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(80, "div", 34)(81, "div", 20)(82, "label", 21);
      \u0275\u0275text(83, "Bio ");
      \u0275\u0275elementStart(84, "span", 22);
      \u0275\u0275text(85, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "textarea", 35);
      \u0275\u0275text(87, "Hello! I'm Ronald Richard. I'm passionate about developing innovative software solutions, analyzing classic literature. I aspire to become a software developer, work as an editor. In my free time, I enjoy coding, reading, hiking etc.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(88, "div", 34)(89, "button", 36);
      \u0275\u0275text(90, "Mettre \xE0 jour le Profile");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(91, "div", 37)(92, "div", 1)(93, "h5", 38);
      \u0275\u0275text(94, "Suppression du compte");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "h6", 17);
      \u0275\u0275text(96, "Are you sure you want to delete your account?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p", 20);
      \u0275\u0275text(98, "Refers to the action of permanently removing a user's account and associated data from a system, service and platform.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "a", 39);
      \u0275\u0275text(100, "Supprimer le compte");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "div", 40)(102, "div", 41)(103, "div", 42)(104, "div", 43)(105, "h5");
      \u0275\u0275text(106, "Delete Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "button", 44);
      \u0275\u0275element(108, "i", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "div", 46)(110, "div", 20)(111, "h6", 17);
      \u0275\u0275text(112, "Why Are You Deleting Your Account?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "p");
      \u0275\u0275text(114, "We're sorry to see you go! To help us improve, please let us know your reason for deleting your account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "div")(116, "div", 47);
      \u0275\u0275element(117, "input", 48);
      \u0275\u0275elementStart(118, "label", 49);
      \u0275\u0275text(119, " No longer using the service ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "p");
      \u0275\u0275text(121, "I no longer need this service and won\u2019t be using it in the future.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 47);
      \u0275\u0275element(123, "input", 50);
      \u0275\u0275elementStart(124, "label", 51);
      \u0275\u0275text(125, " Privacy concerns ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "p");
      \u0275\u0275text(127, "I am concerned about how my data is handled and want to remove my information.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "div", 47);
      \u0275\u0275element(129, "input", 52);
      \u0275\u0275elementStart(130, "label", 53);
      \u0275\u0275text(131, " Too many notifications/emails ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "p");
      \u0275\u0275text(133, "I\u2019m overwhelmed by the volume of notifications or emails and would like to reduce them.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "div", 47);
      \u0275\u0275element(135, "input", 54);
      \u0275\u0275elementStart(136, "label", 55);
      \u0275\u0275text(137, " Poor user experience ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "p");
      \u0275\u0275text(139, "I\u2019ve had difficulty using the platform, and it didn\u2019t meet my expectations.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "div", 47);
      \u0275\u0275element(141, "input", 56);
      \u0275\u0275elementStart(142, "label", 57);
      \u0275\u0275text(143, " Other (Please specify) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "div");
      \u0275\u0275element(145, "textarea", 58);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(146, "div", 59)(147, "button", 60);
      \u0275\u0275text(148, "Keep My Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "button", 61);
      \u0275\u0275text(150, "Delete Account");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.studentProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentProfile);
      \u0275\u0275advance(68);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(3, _c0));
    }
  }, dependencies: [CommonModule, RouterLink, MatSelectModule, MatSelect, MatOption, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-student-settings", imports: [CommonModule, RouterLink, MatSelectModule, BsDatepickerModule], template: `\r
\r
        <div class="card">\r
            <div class="card-body">\r
        <form>\r
            <div class="profile-upload-group">									\r
                <div class="d-flex align-items-center">\r
                    <a [routerLink]="routes.studentProfile" class="avatar flex-shrink-0 avatar-xxxl avatar-rounded border me-3"><img src="assets/img/user/user-02.jpg" alt="Img" class="img-fluid"></a>\r
                    <div class="profile-upload-head">\r
                        <h6><a [routerLink]="routes.studentProfile">Photo de Profile</a></h6>\r
                        <p class="fs-14 mb-0">PNG or JPG no bigger than 800px width and height</p>\r
                        <div class="new-employee-field">\r
                            <div class="d-flex align-items-center mt-2">\r
                                <div class="image-upload position-relative mb-0 me-2">\r
                                    <input type="file">\r
                                    <a href="javascript:void(0);" class="btn bg-gray-100 btn-sm rounded-pill image-uploads">Uploader</a>\r
                                </div>\r
                                <div class="img-delete">\r
                                    <a href="javascript:void(0);" class="btn btn-secondary btn-sm rounded-pill">Supprimer</a>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>											\r
            </div>\r
                <div>\r
                    <div class="edit-profile-info mb-3">\r
                        <h5 class="mb-1">Informations Personnelles</h5>\r
                        <p>Edit your personal information</p>\r
                    </div>\r
                    <div class="row">\r
                        <div class="col-md-6">\r
                            <div class="mb-3">\r
                                <label class="form-label">Prenom <span class="text-danger"> *</span></label>\r
                                <input type="text" class="form-control" value="Ronald">\r
                            </div>\r
                        </div>\r
                        <div class="col-md-6">\r
                            <div class="mb-3">\r
                                <label class="form-label">Nom <span class="text-danger"> *</span></label>\r
                                <input type="text" class="form-control" value="Richard">\r
                            </div>\r
                        </div>\r
                        <div class="col-md-6">\r
                            <div class="mb-3">\r
                                <label class="form-label">Nom d'utilisateur <span class="text-danger"> *</span></label>\r
                                <input type="text" class="form-control" value="studentdemo">\r
                            </div>\r
                        </div>\r
                        <div class="col-md-6">\r
                            <div class="mb-3">\r
                                <label class="form-label">Num\xE9ro de T\xE9l\xE9phone  <span class="text-danger"> *</span></label>\r
                                <input type="text" class="form-control" value="90154-91036">\r
                            </div>\r
                        </div>\r
                        <div class="col-md-6">\r
                            <div class="mb-3">\r
                                <label class="form-label">Genre <span class="text-danger"> *</span></label>\r
                                <mat-select class="custom-mat-select select" placeholder="Select">\r
                                    <mat-option value="1">Select</mat-option>\r
                                    <mat-option value="1">Male</mat-option>\r
                                    <mat-option value="1">Female</mat-option>\r
                                </mat-select>\r
                            </div>\r
                        </div>\r
                        <div class="col-md-6">\r
                            <div class="mb-3 ngxdate">\r
                                <label class="form-label">Date de Naissance <span class="text-danger"> *</span></label>\r
                                <div class="input-icon-end position-relative">\r
                                    <input type="text" class="form-control datetimepicker" bsDatepicker placeholder="dd/mm/yyyy" container=".ngxdate" [bsConfig]="{ adaptivePosition: true }">\r
                                    <span class="input-icon-addon">\r
                                        <i class="isax isax-calendar"></i>\r
                                    </span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <div class="col-md-12">\r
                            <div class="mb-3">\r
                                <label class="form-label">Bio <span class="text-danger"> *</span></label>\r
                                <textarea rows="4" class="form-control">Hello! I'm Ronald Richard. I'm passionate about developing innovative software solutions, analyzing classic literature. I aspire to become a software developer, work as an editor. In my free time, I enjoy coding, reading, hiking etc.</textarea>\r
                            </div>\r
                        </div>\r
                        <div class="col-md-12">\r
                            <button class="btn btn-secondary rounded-pill" type="submit">Mettre \xE0 jour le Profile</button>\r
                        </div>\r
                    </div>\r
                </div>\r
        </form>\r
            </div>\r
        </div>\r
        <div class="card mb-0">\r
            <div class="card-body">	\r
                <h5 class="fs-18 mb-3">Suppression du compte</h5>								\r
                <h6 class="mb-1">Are you sure you want to delete your account?</h6>\r
                <p class="mb-3">Refers to the action of permanently removing a user's account and associated data from a system, service and platform.</p>\r
                <a href="javascript:void(0);" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#delete_account">Supprimer le compte</a>	\r
            </div>\r
        </div>\r
\r
\r
        			<!-- Delete Modal -->\r
			<div class="modal fade" id="delete_account">\r
				<div class="modal-dialog modal-dialog-centered modal-lg">\r
					<div class="modal-content">\r
						<div class="modal-header">\r
							<h5>Delete Account</h5>\r
							<button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">\r
								<i class="isax isax-close-circle5"></i>\r
							</button>\r
						</div>\r
						<div class="modal-body">\r
							<div class="mb-3">\r
								<h6 class="mb-1">Why Are You Deleting Your Account?</h6>\r
								<p>We're sorry to see you go! To help us improve, please let us know your reason for deleting your account</p>\r
							</div>\r
							<div>\r
								<div class="form-check mb-3">\r
									<input class="form-check-input" type="radio" name="reason" id="Radio-sm-1">\r
									<label class="fw-medium form-check-label text-gray-9" for="Radio-sm-1">\r
										No longer using the service\r
									</label>\r
									<p>I no longer need this service and won\u2019t be using it in the future.</p>\r
								</div>\r
								<div class="form-check mb-3">\r
									<input class="form-check-input" type="radio" name="reason" id="Radio-sm-2">\r
									<label class="fw-medium form-check-label text-gray-9" for="Radio-sm-2">\r
										Privacy concerns\r
									</label>\r
									<p>I am concerned about how my data is handled and want to remove my information.</p>\r
								</div>\r
								<div class="form-check mb-3">\r
									<input class="form-check-input" type="radio" name="reason" id="Radio-sm-3">\r
									<label class="fw-medium form-check-label text-gray-9" for="Radio-sm-3">\r
										Too many notifications/emails\r
									</label>\r
									<p>I\u2019m overwhelmed by the volume of notifications or emails and would like to reduce them.</p>\r
								</div>\r
								<div class="form-check mb-3">\r
									<input class="form-check-input" type="radio" name="reason" id="Radio-sm-4">\r
									<label class="fw-medium form-check-label text-gray-9" for="Radio-sm-4">\r
										Poor user experience\r
									</label>\r
									<p>I\u2019ve had difficulty using the platform, and it didn\u2019t meet my expectations.</p>\r
								</div>\r
								<div class="form-check mb-3">\r
									<input class="form-check-input" type="radio" name="reason" id="Radio-sm-5">\r
									<label class="fw-medium form-check-label text-gray-9" for="Radio-sm-5">\r
										Other (Please specify)\r
									</label>\r
								</div>\r
								<div>\r
									<textarea rows="3" class="form-control"></textarea>\r
								</div>\r
							</div>\r
						</div>\r
						<div class="modal-footer">\r
							<button class="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Keep My Account</button>\r
							<button class="btn btn-secondary rounded-pill" type="button" data-bs-dismiss="modal">Delete Account</button>\r
						</div>\r
					</div>\r
				</div>\r
			</div>\r
			<!-- /Delete Modal -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentSettingsComponent, { className: "StudentSettingsComponent", filePath: "app/features/student/settings/student-settings/student-settings.component.ts", lineNumber: 14 });
})();
export {
  StudentSettingsComponent
};
//# sourceMappingURL=chunk-IK3QT5CD.js.map
