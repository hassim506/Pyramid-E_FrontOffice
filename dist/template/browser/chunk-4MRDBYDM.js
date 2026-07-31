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
import "./chunk-ZGFJXD53.js";
import "./chunk-I2HNPZHV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-BSBCM3BI.js";
import "./chunk-4MWRP73S.js";

// src/app/features/student/settings/student-billing-address/student-billing-address.component.ts
var StudentBillingAddressComponent = class _StudentBillingAddressComponent {
  static \u0275fac = function StudentBillingAddressComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentBillingAddressComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentBillingAddressComponent, selectors: [["app-student-billing-address"]], decls: 221, vars: 0, consts: [[1, "card", "mb-0"], [1, "card-body"], [1, "d-sm-flex", "align-items-center", "justify-content-between", "border-bottom", "mb-3", "pb-3"], [1, "d-flex", "align-items-center", "mb-2", "mb-sm-0"], [1, "mb-1"], [1, "badge", "bg-soft-success", "ms-1", "fs-12", "fw-normal"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_billing", 1, "btn", "btn-light", "btn-sm", "border", "me-2"], [1, "isax", "isax-edit-2", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "btn", "btn-secondary", "btn-sm"], [1, "isax", "isax-trash", "me-1"], [1, "mt-4"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_billing", 1, "btn", "btn-secondary"], ["id", "add_billing", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], [1, "modal-body", "pb-0"], [1, "row"], [1, "col-md-12"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], [1, "col-md-6"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill"], ["id", "edit_billing", 1, "modal", "fade"], ["type", "text", "value", "Home", 1, "form-control"], ["type", "text", "value", "16 Lake Floyd Circle", 1, "form-control"], ["placeholder", "United states of America", 1, "custom-mat-select", "select"], ["placeholder", "California", 1, "custom-mat-select", "select"], ["placeholder", "Los Angeles", 1, "custom-mat-select", "select"], ["type", "text", "value", "90001", 1, "form-control"], [1, "form-check", "form-check-md", "my-4"], ["type", "checkbox", "value", "", "id", "defaultaccount", 1, "form-check-input"], ["for", "defaultaccount", 1, "form-check-label"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-body", "text-center", "custom-modal-body"], [1, "avatar", "avatar-lg", "bg-secondary-transparent", "rounded-circle", "mb-2"], [1, "isax", "isax-trash", "fs-24", "text-danger"], [1, "mb-2"], [1, "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill"]], template: function StudentBillingAddressComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "form")(3, "div", 2)(4, "div", 3)(5, "div")(6, "h6", 4);
      \u0275\u0275text(7, "Home ");
      \u0275\u0275elementStart(8, "span", 5);
      \u0275\u0275text(9, "Default");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "p");
      \u0275\u0275text(11, "16 Lake Floyd Circle, Newark, DE 19714");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 6)(13, "a", 7);
      \u0275\u0275element(14, "i", 8);
      \u0275\u0275text(15, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 9);
      \u0275\u0275element(17, "i", 10);
      \u0275\u0275text(18, "Delete");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 2)(20, "div", 3)(21, "div")(22, "h6", 4);
      \u0275\u0275text(23, "Work");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p");
      \u0275\u0275text(25, "33 Hart Country Lane, West Point, GA 31833");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 6)(27, "a", 7);
      \u0275\u0275element(28, "i", 8);
      \u0275\u0275text(29, "Edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "a", 9);
      \u0275\u0275element(31, "i", 10);
      \u0275\u0275text(32, "Delete");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(33, "div", 11)(34, "a", 12);
      \u0275\u0275text(35, "Add New Address");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 13)(37, "div", 14)(38, "div", 15)(39, "div", 16)(40, "h5");
      \u0275\u0275text(41, "Add Billing Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 17);
      \u0275\u0275element(43, "i", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "form")(45, "div", 19)(46, "div", 20)(47, "div", 21)(48, "div", 22)(49, "label", 23);
      \u0275\u0275text(50, "Title ");
      \u0275\u0275elementStart(51, "span", 24);
      \u0275\u0275text(52, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(53, "input", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 21)(55, "div", 22)(56, "label", 23);
      \u0275\u0275text(57, "Address ");
      \u0275\u0275elementStart(58, "span", 24);
      \u0275\u0275text(59, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(60, "input", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 26)(62, "div", 22)(63, "label", 23);
      \u0275\u0275text(64, "Country ");
      \u0275\u0275elementStart(65, "span", 24);
      \u0275\u0275text(66, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "mat-select", 27)(68, "mat-option", 28);
      \u0275\u0275text(69, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "mat-option", 28);
      \u0275\u0275text(71, "United states of America");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "mat-option", 28);
      \u0275\u0275text(73, "Canada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "mat-option", 28);
      \u0275\u0275text(75, "Germany");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(76, "div", 26)(77, "div", 22)(78, "label", 23);
      \u0275\u0275text(79, "State ");
      \u0275\u0275elementStart(80, "span", 24);
      \u0275\u0275text(81, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "mat-select", 27)(83, "mat-option", 28);
      \u0275\u0275text(84, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "mat-option", 28);
      \u0275\u0275text(86, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "mat-option", 28);
      \u0275\u0275text(88, "New York");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "mat-option", 28);
      \u0275\u0275text(90, "Texas");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(91, "div", 26)(92, "div", 22)(93, "label", 23);
      \u0275\u0275text(94, "City ");
      \u0275\u0275elementStart(95, "span", 24);
      \u0275\u0275text(96, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "mat-select", 27)(98, "mat-option", 28);
      \u0275\u0275text(99, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "mat-option", 28);
      \u0275\u0275text(101, "Los Angeles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "mat-option", 28);
      \u0275\u0275text(103, "San Diego");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "mat-option", 28);
      \u0275\u0275text(105, "Fresno");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(106, "div", 26)(107, "div", 22)(108, "label", 23);
      \u0275\u0275text(109, "Postal Code ");
      \u0275\u0275elementStart(110, "span", 24);
      \u0275\u0275text(111, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(112, "input", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(113, "div", 29)(114, "button", 30);
      \u0275\u0275text(115, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "button", 31);
      \u0275\u0275text(117, "Add Address");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(118, "div", 32)(119, "div", 14)(120, "div", 15)(121, "div", 16)(122, "h5");
      \u0275\u0275text(123, "Edit Billing Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "button", 17);
      \u0275\u0275element(125, "i", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "form")(127, "div", 19)(128, "div", 20)(129, "div", 21)(130, "div", 22)(131, "label", 23);
      \u0275\u0275text(132, "Title ");
      \u0275\u0275elementStart(133, "span", 24);
      \u0275\u0275text(134, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(135, "input", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "div", 21)(137, "div", 22)(138, "label", 23);
      \u0275\u0275text(139, "Address ");
      \u0275\u0275elementStart(140, "span", 24);
      \u0275\u0275text(141, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(142, "input", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "div", 26)(144, "div", 22)(145, "label", 23);
      \u0275\u0275text(146, "Country ");
      \u0275\u0275elementStart(147, "span", 24);
      \u0275\u0275text(148, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "mat-select", 35)(150, "mat-option", 28);
      \u0275\u0275text(151, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "mat-option", 28);
      \u0275\u0275text(153, "United states of America");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "mat-option", 28);
      \u0275\u0275text(155, "Canada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "mat-option", 28);
      \u0275\u0275text(157, "Germany");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(158, "div", 26)(159, "div", 22)(160, "label", 23);
      \u0275\u0275text(161, "State ");
      \u0275\u0275elementStart(162, "span", 24);
      \u0275\u0275text(163, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "mat-select", 36)(165, "mat-option", 28);
      \u0275\u0275text(166, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "mat-option", 28);
      \u0275\u0275text(168, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "mat-option", 28);
      \u0275\u0275text(170, "New York");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "mat-option", 28);
      \u0275\u0275text(172, "Texas");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(173, "div", 26)(174, "div", 22)(175, "label", 23);
      \u0275\u0275text(176, "City ");
      \u0275\u0275elementStart(177, "span", 24);
      \u0275\u0275text(178, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(179, "mat-select", 37)(180, "mat-option", 28);
      \u0275\u0275text(181, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "mat-option", 28);
      \u0275\u0275text(183, "Los Angeles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "mat-option", 28);
      \u0275\u0275text(185, "San Diego");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "mat-option", 28);
      \u0275\u0275text(187, "Fresno");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(188, "div", 26)(189, "div", 22)(190, "label", 23);
      \u0275\u0275text(191, "Postal Code ");
      \u0275\u0275elementStart(192, "span", 24);
      \u0275\u0275text(193, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(194, "input", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(195, "div", 21)(196, "div", 39);
      \u0275\u0275element(197, "input", 40);
      \u0275\u0275elementStart(198, "label", 41);
      \u0275\u0275text(199, "Yes, I'd like to delete my account");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(200, "div", 29)(201, "button", 30);
      \u0275\u0275text(202, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "button", 31);
      \u0275\u0275text(204, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(205, "div", 42)(206, "div", 14)(207, "div", 15)(208, "div", 43)(209, "span", 44);
      \u0275\u0275element(210, "i", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "div")(212, "h4", 46);
      \u0275\u0275text(213, "Delete Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "p", 22);
      \u0275\u0275text(215, "Are you sure you want to delete address?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "div", 47)(217, "a", 48);
      \u0275\u0275text(218, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "a", 49);
      \u0275\u0275text(220, "Yes, Remove All");
      \u0275\u0275elementEnd()()()()()()();
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentBillingAddressComponent, [{
    type: Component,
    args: [{ selector: "app-student-billing-address", imports: [MatSelectModule], template: `\r
    <div class="card mb-0">\r
        <div class="card-body">\r
            <form>\r
                <div class="d-sm-flex align-items-center justify-content-between border-bottom mb-3 pb-3">\r
                    <div class="d-flex align-items-center mb-2 mb-sm-0">\r
                        <div>\r
                            <h6 class="mb-1">Home <span class="badge bg-soft-success ms-1 fs-12 fw-normal">Default</span></h6>\r
                            <p>16 Lake Floyd Circle, Newark, DE 19714</p>\r
                        </div>\r
                    </div>\r
                    <div class="d-flex align-items-center">\r
                        <a href="javascript:void(0);" class="btn btn-light btn-sm border me-2" data-bs-toggle="modal" data-bs-target="#edit_billing"><i class="isax isax-edit-2 me-2"></i>Edit</a>\r
                        <a href="javascript:void(0);" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-1"></i>Delete</a>\r
                    </div>\r
                </div>\r
                <div class="d-sm-flex align-items-center justify-content-between border-bottom mb-3 pb-3">\r
                    <div class="d-flex align-items-center mb-2 mb-sm-0">\r
                        <div>\r
                            <h6 class="mb-1">Work</h6>\r
                            <p>33 Hart Country Lane, West Point, GA 31833</p>\r
                        </div>\r
                    </div>\r
                    <div class="d-flex align-items-center">\r
                        <a href="javascript:void(0);" class="btn btn-light btn-sm border me-2" data-bs-toggle="modal" data-bs-target="#edit_billing"><i class="isax isax-edit-2 me-2"></i>Edit</a>\r
                        <a href="javascript:void(0);" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-1"></i>Delete</a>\r
                    </div>\r
                </div>\r
            </form>	\r
            <div class="mt-4">\r
                <a href="javascript:void(0);" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#add_billing">Add New Address</a>\r
            </div>\r
        </div>\r
    </div>	\r
\r
    			<!-- Add Billing -->\r
			<div class="modal fade" id="add_billing">\r
				<div class="modal-dialog modal-dialog-centered">\r
					<div class="modal-content">\r
						<div class="modal-header">\r
							<h5>Add Billing Address</h5>\r
							<button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">\r
								<i class="isax isax-close-circle5"></i>\r
							</button>\r
						</div>\r
						<form>\r
							<div class="modal-body pb-0">\r
								<div class="row">\r
									<div class="col-md-12">\r
										<div class="mb-3">\r
											<label class="form-label">Title <span class="text-danger"> *</span></label>\r
											<input type="text" class="form-control">\r
										</div>\r
									</div>\r
									<div class="col-md-12">\r
										<div class="mb-3">\r
											<label class="form-label">Address <span class="text-danger"> *</span></label>\r
											<input type="text" class="form-control">\r
										</div>\r
									</div>\r
									<div class="col-md-6">\r
										<div class="mb-3">\r
											<label class="form-label">Country <span class="text-danger"> *</span></label>\r
											<mat-select class="custom-mat-select select" placeholder="Select">\r
												<mat-option value="1">Select</mat-option>\r
												<mat-option value="1">United states of America</mat-option>\r
												<mat-option value="1">Canada</mat-option>\r
												<mat-option value="1">Germany</mat-option>\r
											</mat-select>\r
										</div>\r
									</div>\r
									<div class="col-md-6">\r
										<div class="mb-3">\r
											<label class="form-label">State <span class="text-danger"> *</span></label>\r
											<mat-select class="custom-mat-select select" placeholder="Select">\r
												<mat-option value="1">Select</mat-option>\r
												<mat-option value="1">California</mat-option>\r
												<mat-option value="1">New York</mat-option>\r
												<mat-option value="1">Texas</mat-option>\r
											</mat-select>\r
										</div>\r
									</div>\r
									<div class="col-md-6">\r
										<div class="mb-3">\r
											<label class="form-label">City <span class="text-danger"> *</span></label>\r
											<mat-select class="custom-mat-select select" placeholder="Select">\r
												<mat-option value="1">Select</mat-option>\r
												<mat-option value="1">Los Angeles</mat-option>\r
												<mat-option value="1">San Diego</mat-option>\r
												<mat-option value="1">Fresno</mat-option>\r
											</mat-select>\r
										</div>\r
									</div>\r
									<div class="col-md-6">\r
										<div class="mb-3">\r
											<label class="form-label">Postal Code <span class="text-danger"> *</span></label>\r
											<input type="text" class="form-control">\r
										</div>\r
									</div>\r
								</div>\r
							</div>\r
							<div class="modal-footer">\r
								<button class="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Cancel</button>\r
								<button class="btn btn-secondary rounded-pill" type="submit" data-bs-dismiss="modal">Add Address</button>\r
							</div>\r
						</form>\r
					</div>\r
				</div>\r
			</div>\r
			<!-- /Add Billing -->\r
\r
			<!-- Edit Billing -->\r
			<div class="modal fade" id="edit_billing">\r
				<div class="modal-dialog modal-dialog-centered">\r
					<div class="modal-content">\r
						<div class="modal-header">\r
							<h5>Edit Billing Address</h5>\r
							<button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">\r
								<i class="isax isax-close-circle5"></i>\r
							</button>\r
						</div>\r
						<form>\r
							<div class="modal-body pb-0">\r
								<div class="row">\r
									<div class="col-md-12">\r
										<div class="mb-3">\r
											<label class="form-label">Title <span class="text-danger"> *</span></label>\r
											<input type="text" class="form-control" value="Home">\r
										</div>\r
									</div>\r
									<div class="col-md-12">\r
										<div class="mb-3">\r
											<label class="form-label">Address <span class="text-danger"> *</span></label>\r
											<input type="text" class="form-control" value="16 Lake Floyd Circle">\r
										</div>\r
									</div>\r
									<div class="col-md-6">\r
										<div class="mb-3">\r
											<label class="form-label">Country <span class="text-danger"> *</span></label>\r
											<mat-select class="custom-mat-select select" placeholder="United states of America">\r
												<mat-option value="1">Select</mat-option>\r
												<mat-option value="1">United states of America</mat-option>\r
												<mat-option value="1">Canada</mat-option>\r
												<mat-option value="1">Germany</mat-option>\r
											</mat-select>\r
										</div>\r
									</div>\r
									<div class="col-md-6">\r
										<div class="mb-3">\r
											<label class="form-label">State <span class="text-danger"> *</span></label>\r
											<mat-select class="custom-mat-select select" placeholder="California">\r
												<mat-option value="1">Select</mat-option>\r
												<mat-option value="1">California</mat-option>\r
												<mat-option value="1">New York</mat-option>\r
												<mat-option value="1">Texas</mat-option>\r
											</mat-select>\r
										</div>\r
									</div>\r
									<div class="col-md-6">\r
										<div class="mb-3">\r
											<label class="form-label">City <span class="text-danger"> *</span></label>\r
											<mat-select class="custom-mat-select select" placeholder="Los Angeles">\r
												<mat-option value="1">Select</mat-option>\r
												<mat-option value="1">Los Angeles</mat-option>\r
												<mat-option value="1">San Diego</mat-option>\r
												<mat-option value="1">Fresno</mat-option>\r
											</mat-select>\r
										</div>\r
									</div>\r
									<div class="col-md-6">\r
										<div class="mb-3">\r
											<label class="form-label">Postal Code <span class="text-danger"> *</span></label>\r
											<input type="text" class="form-control" value="90001">\r
										</div>\r
									</div>\r
									<div class="col-md-12">\r
										<div class="form-check form-check-md my-4">\r
											<input class="form-check-input" type="checkbox" value="" id="defaultaccount">\r
											<label class="form-check-label" for="defaultaccount">Yes, I'd like to delete my account</label>\r
										</div>\r
									</div>\r
								</div>\r
							</div>\r
							<div class="modal-footer">\r
								<button class="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Cancel</button>\r
								<button class="btn btn-secondary rounded-pill" type="submit" data-bs-dismiss="modal">Save Changes</button>\r
							</div>\r
						</form>\r
					</div>\r
				</div>\r
			</div>\r
			<!-- /Edit Billing -->\r
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
								<h4 class="mb-2">Delete Address</h4>\r
								<p class="mb-3">Are you sure you want to delete address?</p>\r
								<div class="d-flex align-items-center justify-content-center">\r
									<a href="javascript:void(0);" class="btn bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal">Cancel</a>\r
									<a href="javascript:void(0);" class="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Yes, Remove All</a>\r
								</div>\r
							</div>\r
						</div>\r
					</div>\r
				</div>\r
			</div>\r
			<!-- /Delete Modal -->\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentBillingAddressComponent, { className: "StudentBillingAddressComponent", filePath: "app/features/student/settings/student-billing-address/student-billing-address.component.ts", lineNumber: 10 });
})();
export {
  StudentBillingAddressComponent
};
//# sourceMappingURL=chunk-4MRDBYDM.js.map
