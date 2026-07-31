import {
  AdminrhRoleComponent
} from "./chunk-UAERI2BM.js";
import {
  UserAddComponent
} from "./chunk-PKU4PXDE.js";
import "./chunk-TF33BRNX.js";
import {
  sortRoleNames
} from "./chunk-U7UUQJNF.js";
import {
  httpErrorMessage
} from "./chunk-RL3SOXDI.js";
import {
  UserService
} from "./chunk-BVKPWF4U.js";
import "./chunk-X44DCWVU.js";
import {
  CustomPaginationComponent
} from "./chunk-2S7K3BM4.js";
import "./chunk-XB4AKARW.js";
import {
  HasPermissionDirective
} from "./chunk-LPKZQSDR.js";
import "./chunk-MFYPUOQJ.js";
import {
  AuthService
} from "./chunk-I3LFGWFR.js";
import "./chunk-K7E3GT3E.js";
import "./chunk-37V3B3KY.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-ZGFJXD53.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-UFFO2UKW.js";
import "./chunk-U7UKDAOZ.js";
import "./chunk-EGNJBGKD.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-I2HNPZHV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  HostListener,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate6,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BSBCM3BI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/adminrh/user/user-list.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => [1, 2, 3, 4, 5];
function UserListComponent_ng_container_14_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedRoleFilter);
  }
}
function UserListComponent_ng_container_14_div_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_div_10_div_3_Template_div_click_0_listener() {
      const r_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setRoleFilter(r_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ul-dropdown__item--on", ctx_r1.selectedRoleFilter === r_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5);
  }
}
function UserListComponent_ng_container_14_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_div_10_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRoleFilter(""));
    });
    \u0275\u0275text(2, "Tous les r\xF4les");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UserListComponent_ng_container_14_div_10_div_3_Template, 2, 3, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.availableRoles);
  }
}
function UserListComponent_ng_container_14_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedStatutFilter === "1" ? "Actif" : "Inactif", " ");
  }
}
function UserListComponent_ng_container_14_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_div_16_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setStatutFilter(""));
    });
    \u0275\u0275text(2, "Tous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_div_16_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setStatutFilter("1"));
    });
    \u0275\u0275text(4, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 35);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_div_16_Template_div_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setStatutFilter("0"));
    });
    \u0275\u0275text(6, "Inactif");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("ul-dropdown__item--on", ctx_r1.selectedStatutFilter === "1");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ul-dropdown__item--on", ctx_r1.selectedStatutFilter === "0");
  }
}
function UserListComponent_ng_container_14_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openNew());
    });
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275text(2, " Nouvel utilisateur ");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_ng_container_14_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function UserListComponent_ng_container_14_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 43);
  }
}
function UserListComponent_ng_container_14_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, UserListComponent_ng_container_14_div_28_div_1_Template, 1, 0, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function UserListComponent_ng_container_14_table_29_tr_18_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_table_29_tr_18_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const u_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.archiveUser(u_r9));
    });
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_ng_container_14_table_29_tr_18_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_table_29_tr_18_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const u_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.reactivateUser(u_r9));
    });
    \u0275\u0275element(1, "i", 69);
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_ng_container_14_table_29_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 53)(6, "div", 54);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "div", 55);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 56);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td")(14, "span", 57);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "span", 58);
    \u0275\u0275element(18, "i");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td")(21, "span", 59);
    \u0275\u0275element(22, "i");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 60);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td")(27, "div", 61)(28, "button", 62);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_table_29_tr_18_Template_button_click_28_listener() {
      const u_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editUser(u_r9));
    });
    \u0275\u0275element(29, "i", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, UserListComponent_ng_container_14_table_29_tr_18_button_30_Template, 2, 0, "button", 64)(31, UserListComponent_ng_container_14_table_29_tr_18_button_31_Template, 2, 0, "button", 65);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r9.matricule || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-role", ctx_r1.getRoleKey(ctx_r1.getRoleName(u_r9)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(u_r9), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getDisplayName(u_r9));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r9.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r9.direction || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-role", ctx_r1.getRoleKey(ctx_r1.getRoleName(u_r9)));
    \u0275\u0275advance();
    \u0275\u0275classMap("isax " + ctx_r1.getRoleIcon(ctx_r1.getRoleName(u_r9)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getRoleName(u_r9), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-s", u_r9.statut === 1 ? "actif" : "inactif");
    \u0275\u0275advance();
    \u0275\u0275classMap("isax " + (u_r9.statut === 1 ? "isax-tick-circle" : "isax-minus-cirlce"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r9.statut === 1 ? "Actif" : "Inactif", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(u_r9.updated_at));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", u_r9.statut === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", u_r9.statut === 0);
  }
}
function UserListComponent_ng_container_14_table_29_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 70);
    \u0275\u0275element(2, "i", 71);
    \u0275\u0275text(3, " Aucun utilisateur trouv\xE9 ");
    \u0275\u0275elementEnd()();
  }
}
function UserListComponent_ng_container_14_table_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 44)(1, "thead")(2, "tr")(3, "th", 45);
    \u0275\u0275text(4, "Matricule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 46);
    \u0275\u0275text(6, "Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 47);
    \u0275\u0275text(8, "Direction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 47);
    \u0275\u0275text(10, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 48);
    \u0275\u0275text(12, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 49);
    \u0275\u0275text(14, "Derni\xE8re activit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 50);
    \u0275\u0275text(16, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, UserListComponent_ng_container_14_table_29_tr_18_Template, 32, 17, "tr", 51)(19, UserListComponent_ng_container_14_table_29_tr_19_Template, 4, 0, "tr", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r1.tableData)("ngForTrackBy", ctx_r1.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.tableData.length);
  }
}
function UserListComponent_ng_container_14_div_30_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_div_30_button_6_Template_button_click_0_listener() {
      const i_r14 = \u0275\u0275restoreView(_r13).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPageChange(i_r14 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r14 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ul-pager__btn--active", ctx_r1.currentPage === i_r14 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r14 + 1);
  }
}
function UserListComponent_ng_container_14_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "span", 73);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 74)(4, "button", 75);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_div_30_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UserListComponent_ng_container_14_div_30_button_6_Template, 2, 3, "button", 77);
    \u0275\u0275elementStart(7, "button", 75);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_div_30_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 78);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r1.skip + 1, "\u2013", ctx_r1.skip + ctx_r1.tableData.length, " sur ", ctx_r1.totalData, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pageSelection);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.pageSelection.length || !ctx_r1.pageSelection.length);
  }
}
function UserListComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 12)(2, "div", 13);
    \u0275\u0275element(3, "i", 14);
    \u0275\u0275elementStart(4, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function UserListComponent_ng_container_14_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchDataValue, $event) || (ctx_r1.searchDataValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function UserListComponent_ng_container_14_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchData($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 16);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_Template_div_click_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(6, "button", 17);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showRoleDropdown = !ctx_r1.showRoleDropdown);
    });
    \u0275\u0275element(7, "i", 18);
    \u0275\u0275text(8, " R\xF4le ");
    \u0275\u0275template(9, UserListComponent_ng_container_14_span_9_Template, 2, 1, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, UserListComponent_ng_container_14_div_10_Template, 4, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 16);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_Template_div_click_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(12, "button", 17);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showStatutDropdown = !ctx_r1.showStatutDropdown);
    });
    \u0275\u0275element(13, "i", 21);
    \u0275\u0275text(14, " Statut ");
    \u0275\u0275template(15, UserListComponent_ng_container_14_span_15_Template, 2, 1, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, UserListComponent_ng_container_14_div_16_Template, 7, 4, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 22);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openImportDialog());
    });
    \u0275\u0275element(18, "i", 23);
    \u0275\u0275text(19, " Importer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 24);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275element(21, "i", 25);
    \u0275\u0275text(22, " Template ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 26);
    \u0275\u0275listener("click", function UserListComponent_ng_container_14_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportUsers());
    });
    \u0275\u0275element(24, "i", 27);
    \u0275\u0275text(25, " Exporter ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, UserListComponent_ng_container_14_button_26_Template, 3, 0, "button", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, UserListComponent_ng_container_14_div_27_Template, 3, 1, "div", 29)(28, UserListComponent_ng_container_14_div_28_Template, 2, 2, "div", 30)(29, UserListComponent_ng_container_14_table_29_Template, 20, 3, "table", 31)(30, UserListComponent_ng_container_14_div_30_Template, 9, 6, "div", 32);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchDataValue);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(15, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ul-filter--on", !!ctx_r1.selectedRoleFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedRoleFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showRoleDropdown);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ul-filter--on", ctx_r1.selectedStatutFilter !== "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedStatutFilter !== "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showStatutDropdown);
    \u0275\u0275advance(10);
    \u0275\u0275property("appHasPermission", "creer utilisateurs");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.totalData > ctx_r1.pageSize);
  }
}
function UserListComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275element(1, "app-adminrh-role");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "h2", 83);
    \u0275\u0275element(3, "i", 84);
    \u0275\u0275text(4, "Matrice des Habilitations ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 85);
    \u0275\u0275text(6, " R\xF4les accessibles dans votre p\xE9rim\xE8tre, du plus habilit\xE9 au moins habilit\xE9. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 86)(8, "div", 87)(9, "span", 88);
    \u0275\u0275text(10, "Admin RH");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "i", 89);
    \u0275\u0275elementStart(12, "span", 88);
    \u0275\u0275text(13, "Responsable RH");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "i", 89);
    \u0275\u0275elementStart(15, "span", 90);
    \u0275\u0275text(16, "Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "i", 89);
    \u0275\u0275elementStart(18, "span", 91);
    \u0275\u0275text(19, "Formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "i", 89);
    \u0275\u0275elementStart(21, "span", 91);
    \u0275\u0275text(22, "Consultant");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "i", 89);
    \u0275\u0275elementStart(24, "span", 92);
    \u0275\u0275text(25, "Employ\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 93)(27, "table", 94)(28, "thead")(29, "tr")(30, "th", 95);
    \u0275\u0275text(31, "Permission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th", 96)(33, "span", 97);
    \u0275\u0275text(34, "ARH");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "th", 98)(36, "span", 97);
    \u0275\u0275text(37, "RRH");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "th", 99)(39, "span", 100);
    \u0275\u0275text(40, "MGR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "th", 101)(42, "span", 102);
    \u0275\u0275text(43, "FOR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "th", 103)(45, "span", 102);
    \u0275\u0275text(46, "CST");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "th", 104)(48, "span", 105);
    \u0275\u0275text(49, "EMP");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "tr", 106)(51, "td", 107);
    \u0275\u0275text(52, "R\xF4les (ordre hi\xE9rarchique \u2193)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "td", 108);
    \u0275\u0275text(54, "Admin RH");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "td", 108);
    \u0275\u0275text(56, "Responsable RH");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "td", 108);
    \u0275\u0275text(58, "Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "td", 108);
    \u0275\u0275text(60, "Formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "td", 108);
    \u0275\u0275text(62, "Consultant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "td", 108);
    \u0275\u0275text(64, "Employ\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "tbody")(66, "tr")(67, "td", 109);
    \u0275\u0275text(68, "Gestion des utilisateurs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "tr")(70, "td");
    \u0275\u0275text(71, "Cr\xE9er / modifier un utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "td")(73, "span", 110);
    \u0275\u0275text(74, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "td")(76, "span", 110);
    \u0275\u0275text(77, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "td")(79, "span", 111);
    \u0275\u0275text(80, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "td")(82, "span", 111);
    \u0275\u0275text(83, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "td")(85, "span", 111);
    \u0275\u0275text(86, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "td")(88, "span", 111);
    \u0275\u0275text(89, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(90, "tr")(91, "td");
    \u0275\u0275text(92, "Supprimer / d\xE9sactiver un compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "td")(94, "span", 110);
    \u0275\u0275text(95, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "td")(97, "span", 110);
    \u0275\u0275text(98, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "td")(100, "span", 111);
    \u0275\u0275text(101, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "td")(103, "span", 111);
    \u0275\u0275text(104, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "td")(106, "span", 111);
    \u0275\u0275text(107, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "td")(109, "span", 111);
    \u0275\u0275text(110, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(111, "tr")(112, "td");
    \u0275\u0275text(113, "Importer / exporter des utilisateurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "td")(115, "span", 110);
    \u0275\u0275text(116, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "td")(118, "span", 110);
    \u0275\u0275text(119, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "td")(121, "span", 111);
    \u0275\u0275text(122, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "td")(124, "span", 111);
    \u0275\u0275text(125, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "td")(127, "span", 111);
    \u0275\u0275text(128, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "td")(130, "span", 111);
    \u0275\u0275text(131, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(132, "tr")(133, "td");
    \u0275\u0275text(134, "Attribuer un r\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "td")(136, "span", 110);
    \u0275\u0275text(137, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(138, "td")(139, "span", 110);
    \u0275\u0275text(140, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(141, "td")(142, "span", 111);
    \u0275\u0275text(143, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(144, "td")(145, "span", 111);
    \u0275\u0275text(146, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "td")(148, "span", 111);
    \u0275\u0275text(149, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(150, "td")(151, "span", 111);
    \u0275\u0275text(152, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(153, "tr")(154, "td");
    \u0275\u0275text(155, "R\xE9initialiser le mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "td")(157, "span", 110);
    \u0275\u0275text(158, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(159, "td")(160, "span", 110);
    \u0275\u0275text(161, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(162, "td")(163, "span", 111);
    \u0275\u0275text(164, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(165, "td")(166, "span", 111);
    \u0275\u0275text(167, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(168, "td")(169, "span", 111);
    \u0275\u0275text(170, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(171, "td")(172, "span", 111);
    \u0275\u0275text(173, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(174, "tr")(175, "td");
    \u0275\u0275text(176, "Modifier son propre profil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(177, "td")(178, "span", 110);
    \u0275\u0275text(179, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(180, "td")(181, "span", 110);
    \u0275\u0275text(182, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(183, "td")(184, "span", 110);
    \u0275\u0275text(185, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(186, "td")(187, "span", 110);
    \u0275\u0275text(188, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(189, "td")(190, "span", 110);
    \u0275\u0275text(191, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(192, "td")(193, "span", 110);
    \u0275\u0275text(194, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(195, "tr")(196, "td");
    \u0275\u0275text(197, "G\xE9rer les directions / d\xE9partements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(198, "td")(199, "span", 110);
    \u0275\u0275text(200, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(201, "td")(202, "span", 110);
    \u0275\u0275text(203, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(204, "td")(205, "span", 111);
    \u0275\u0275text(206, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(207, "td")(208, "span", 111);
    \u0275\u0275text(209, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(210, "td")(211, "span", 111);
    \u0275\u0275text(212, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(213, "td")(214, "span", 111);
    \u0275\u0275text(215, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(216, "tr")(217, "td", 109);
    \u0275\u0275text(218, "Formations & contenus");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(219, "tr")(220, "td");
    \u0275\u0275text(221, "Cr\xE9er / publier une formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(222, "td")(223, "span", 111);
    \u0275\u0275text(224, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(225, "td")(226, "span", 111);
    \u0275\u0275text(227, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(228, "td")(229, "span", 111);
    \u0275\u0275text(230, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(231, "td")(232, "span", 110);
    \u0275\u0275text(233, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(234, "td")(235, "span", 112);
    \u0275\u0275text(236, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(237, "td")(238, "span", 111);
    \u0275\u0275text(239, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(240, "tr")(241, "td");
    \u0275\u0275text(242, "Modifier / archiver une formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(243, "td")(244, "span", 111);
    \u0275\u0275text(245, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(246, "td")(247, "span", 111);
    \u0275\u0275text(248, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(249, "td")(250, "span", 111);
    \u0275\u0275text(251, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(252, "td")(253, "span", 110);
    \u0275\u0275text(254, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(255, "td")(256, "span", 112);
    \u0275\u0275text(257, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(258, "td")(259, "span", 111);
    \u0275\u0275text(260, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(261, "tr")(262, "td");
    \u0275\u0275text(263, "Assigner une formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(264, "td")(265, "span", 110);
    \u0275\u0275text(266, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(267, "td")(268, "span", 110);
    \u0275\u0275text(269, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(270, "td")(271, "span", 110);
    \u0275\u0275text(272, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(273, "td")(274, "span", 111);
    \u0275\u0275text(275, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(276, "td")(277, "span", 111);
    \u0275\u0275text(278, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(279, "td")(280, "span", 111);
    \u0275\u0275text(281, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(282, "tr")(283, "td");
    \u0275\u0275text(284, "Valider une demande de formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(285, "td")(286, "span", 110);
    \u0275\u0275text(287, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(288, "td")(289, "span", 110);
    \u0275\u0275text(290, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(291, "td")(292, "span", 110);
    \u0275\u0275text(293, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(294, "td")(295, "span", 111);
    \u0275\u0275text(296, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(297, "td")(298, "span", 111);
    \u0275\u0275text(299, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(300, "td")(301, "span", 111);
    \u0275\u0275text(302, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(303, "tr")(304, "td");
    \u0275\u0275text(305, "Cr\xE9er / g\xE9rer les quiz & \xE9valuations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(306, "td")(307, "span", 111);
    \u0275\u0275text(308, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(309, "td")(310, "span", 111);
    \u0275\u0275text(311, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(312, "td")(313, "span", 111);
    \u0275\u0275text(314, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(315, "td")(316, "span", 110);
    \u0275\u0275text(317, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(318, "td")(319, "span", 111);
    \u0275\u0275text(320, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(321, "td")(322, "span", 111);
    \u0275\u0275text(323, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(324, "tr")(325, "td");
    \u0275\u0275text(326, "G\xE9rer le catalogue de formations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(327, "td")(328, "span", 110);
    \u0275\u0275text(329, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(330, "td")(331, "span", 110);
    \u0275\u0275text(332, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(333, "td")(334, "span", 111);
    \u0275\u0275text(335, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(336, "td")(337, "span", 111);
    \u0275\u0275text(338, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(339, "td")(340, "span", 111);
    \u0275\u0275text(341, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(342, "td")(343, "span", 111);
    \u0275\u0275text(344, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(345, "tr")(346, "td");
    \u0275\u0275text(347, "Explorer le catalogue (lecture)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(348, "td")(349, "span", 110);
    \u0275\u0275text(350, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(351, "td")(352, "span", 110);
    \u0275\u0275text(353, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(354, "td")(355, "span", 110);
    \u0275\u0275text(356, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(357, "td")(358, "span", 110);
    \u0275\u0275text(359, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(360, "td")(361, "span", 110);
    \u0275\u0275text(362, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(363, "td")(364, "span", 110);
    \u0275\u0275text(365, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(366, "tr")(367, "td");
    \u0275\u0275text(368, "Acc\xE9der \xE0 ses formations assign\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(369, "td")(370, "span", 110);
    \u0275\u0275text(371, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(372, "td")(373, "span", 110);
    \u0275\u0275text(374, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(375, "td")(376, "span", 110);
    \u0275\u0275text(377, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(378, "td")(379, "span", 110);
    \u0275\u0275text(380, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(381, "td")(382, "span", 110);
    \u0275\u0275text(383, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(384, "td")(385, "span", 110);
    \u0275\u0275text(386, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(387, "tr")(388, "td");
    \u0275\u0275text(389, "Demander une formation (auto-inscription)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(390, "td")(391, "span", 111);
    \u0275\u0275text(392, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(393, "td")(394, "span", 111);
    \u0275\u0275text(395, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(396, "td")(397, "span", 110);
    \u0275\u0275text(398, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(399, "td")(400, "span", 111);
    \u0275\u0275text(401, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(402, "td")(403, "span", 111);
    \u0275\u0275text(404, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(405, "td")(406, "span", 110);
    \u0275\u0275text(407, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(408, "tr")(409, "td", 109);
    \u0275\u0275text(410, "Parcours de formation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(411, "tr")(412, "td");
    \u0275\u0275text(413, "Cr\xE9er / modifier un parcours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(414, "td")(415, "span", 110);
    \u0275\u0275text(416, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(417, "td")(418, "span", 110);
    \u0275\u0275text(419, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(420, "td")(421, "span", 111);
    \u0275\u0275text(422, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(423, "td")(424, "span", 111);
    \u0275\u0275text(425, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(426, "td")(427, "span", 111);
    \u0275\u0275text(428, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(429, "td")(430, "span", 111);
    \u0275\u0275text(431, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(432, "tr")(433, "td");
    \u0275\u0275text(434, "Supprimer / archiver un parcours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(435, "td")(436, "span", 110);
    \u0275\u0275text(437, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(438, "td")(439, "span", 110);
    \u0275\u0275text(440, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(441, "td")(442, "span", 111);
    \u0275\u0275text(443, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(444, "td")(445, "span", 111);
    \u0275\u0275text(446, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(447, "td")(448, "span", 111);
    \u0275\u0275text(449, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(450, "td")(451, "span", 111);
    \u0275\u0275text(452, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(453, "tr")(454, "td");
    \u0275\u0275text(455, "Assigner un parcours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(456, "td")(457, "span", 110);
    \u0275\u0275text(458, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(459, "td")(460, "span", 110);
    \u0275\u0275text(461, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(462, "td")(463, "span", 110);
    \u0275\u0275text(464, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(465, "td")(466, "span", 111);
    \u0275\u0275text(467, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(468, "td")(469, "span", 111);
    \u0275\u0275text(470, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(471, "td")(472, "span", 111);
    \u0275\u0275text(473, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(474, "tr")(475, "td");
    \u0275\u0275text(476, "Suivre la progression d'un parcours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(477, "td")(478, "span", 110);
    \u0275\u0275text(479, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(480, "td")(481, "span", 110);
    \u0275\u0275text(482, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(483, "td")(484, "span", 110);
    \u0275\u0275text(485, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(486, "td")(487, "span", 112);
    \u0275\u0275text(488, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(489, "td")(490, "span", 111);
    \u0275\u0275text(491, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(492, "td")(493, "span", 110);
    \u0275\u0275text(494, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(495, "tr")(496, "td", 109);
    \u0275\u0275text(497, "Sessions de formation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(498, "tr")(499, "td");
    \u0275\u0275text(500, "Cr\xE9er / modifier une session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(501, "td")(502, "span", 110);
    \u0275\u0275text(503, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(504, "td")(505, "span", 110);
    \u0275\u0275text(506, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(507, "td")(508, "span", 111);
    \u0275\u0275text(509, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(510, "td")(511, "span", 110);
    \u0275\u0275text(512, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(513, "td")(514, "span", 111);
    \u0275\u0275text(515, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(516, "td")(517, "span", 111);
    \u0275\u0275text(518, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(519, "tr")(520, "td");
    \u0275\u0275text(521, "Supprimer / annuler une session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(522, "td")(523, "span", 110);
    \u0275\u0275text(524, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(525, "td")(526, "span", 110);
    \u0275\u0275text(527, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(528, "td")(529, "span", 111);
    \u0275\u0275text(530, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(531, "td")(532, "span", 111);
    \u0275\u0275text(533, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(534, "td")(535, "span", 111);
    \u0275\u0275text(536, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(537, "td")(538, "span", 111);
    \u0275\u0275text(539, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(540, "tr")(541, "td");
    \u0275\u0275text(542, "Inscrire des participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(543, "td")(544, "span", 110);
    \u0275\u0275text(545, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(546, "td")(547, "span", 110);
    \u0275\u0275text(548, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(549, "td")(550, "span", 111);
    \u0275\u0275text(551, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(552, "td")(553, "span", 112);
    \u0275\u0275text(554, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(555, "td")(556, "span", 111);
    \u0275\u0275text(557, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(558, "td")(559, "span", 111);
    \u0275\u0275text(560, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(561, "tr")(562, "td");
    \u0275\u0275text(563, "G\xE9rer l'\xE9margement / pr\xE9sence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(564, "td")(565, "span", 110);
    \u0275\u0275text(566, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(567, "td")(568, "span", 110);
    \u0275\u0275text(569, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(570, "td")(571, "span", 111);
    \u0275\u0275text(572, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(573, "td")(574, "span", 110);
    \u0275\u0275text(575, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(576, "td")(577, "span", 111);
    \u0275\u0275text(578, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(579, "td")(580, "span", 111);
    \u0275\u0275text(581, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(582, "tr")(583, "td", 109);
    \u0275\u0275text(584, "Plans de formation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(585, "tr")(586, "td");
    \u0275\u0275text(587, "Cr\xE9er / modifier un plan de formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(588, "td")(589, "span", 110);
    \u0275\u0275text(590, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(591, "td")(592, "span", 110);
    \u0275\u0275text(593, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(594, "td")(595, "span", 111);
    \u0275\u0275text(596, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(597, "td")(598, "span", 111);
    \u0275\u0275text(599, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(600, "td")(601, "span", 111);
    \u0275\u0275text(602, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(603, "td")(604, "span", 111);
    \u0275\u0275text(605, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(606, "tr")(607, "td");
    \u0275\u0275text(608, "Valider / approuver un plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(609, "td")(610, "span", 112);
    \u0275\u0275text(611, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(612, "td")(613, "span", 110);
    \u0275\u0275text(614, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(615, "td")(616, "span", 111);
    \u0275\u0275text(617, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(618, "td")(619, "span", 111);
    \u0275\u0275text(620, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(621, "td")(622, "span", 111);
    \u0275\u0275text(623, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(624, "td")(625, "span", 111);
    \u0275\u0275text(626, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(627, "tr")(628, "td");
    \u0275\u0275text(629, "Suivre le budget formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(630, "td")(631, "span", 110);
    \u0275\u0275text(632, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(633, "td")(634, "span", 110);
    \u0275\u0275text(635, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(636, "td")(637, "span", 111);
    \u0275\u0275text(638, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(639, "td")(640, "span", 111);
    \u0275\u0275text(641, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(642, "td")(643, "span", 111);
    \u0275\u0275text(644, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(645, "td")(646, "span", 111);
    \u0275\u0275text(647, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(648, "tr")(649, "td", 109);
    \u0275\u0275text(650, "Suivi & statistiques");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(651, "tr")(652, "td");
    \u0275\u0275text(653, "Statistiques de son entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(654, "td")(655, "span", 110);
    \u0275\u0275text(656, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(657, "td")(658, "span", 110);
    \u0275\u0275text(659, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(660, "td")(661, "span", 112);
    \u0275\u0275text(662, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(663, "td")(664, "span", 111);
    \u0275\u0275text(665, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(666, "td")(667, "span", 111);
    \u0275\u0275text(668, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(669, "td")(670, "span", 111);
    \u0275\u0275text(671, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(672, "tr")(673, "td");
    \u0275\u0275text(674, "Voir la progression de son \xE9quipe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(675, "td")(676, "span", 110);
    \u0275\u0275text(677, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(678, "td")(679, "span", 110);
    \u0275\u0275text(680, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(681, "td")(682, "span", 110);
    \u0275\u0275text(683, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(684, "td")(685, "span", 112);
    \u0275\u0275text(686, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(687, "td")(688, "span", 111);
    \u0275\u0275text(689, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(690, "td")(691, "span", 111);
    \u0275\u0275text(692, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(693, "tr")(694, "td");
    \u0275\u0275text(695, "Voir sa propre progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(696, "td")(697, "span", 110);
    \u0275\u0275text(698, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(699, "td")(700, "span", 110);
    \u0275\u0275text(701, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(702, "td")(703, "span", 110);
    \u0275\u0275text(704, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(705, "td")(706, "span", 110);
    \u0275\u0275text(707, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(708, "td")(709, "span", 110);
    \u0275\u0275text(710, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(711, "td")(712, "span", 110);
    \u0275\u0275text(713, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(714, "tr")(715, "td");
    \u0275\u0275text(716, "Exporter les rapports (PDF, Excel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(717, "td")(718, "span", 110);
    \u0275\u0275text(719, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(720, "td")(721, "span", 110);
    \u0275\u0275text(722, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(723, "td")(724, "span", 112);
    \u0275\u0275text(725, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(726, "td")(727, "span", 111);
    \u0275\u0275text(728, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(729, "td")(730, "span", 111);
    \u0275\u0275text(731, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(732, "td")(733, "span", 111);
    \u0275\u0275text(734, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(735, "tr")(736, "td");
    \u0275\u0275text(737, "Tableau de bord personnalis\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(738, "td")(739, "span", 110);
    \u0275\u0275text(740, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(741, "td")(742, "span", 110);
    \u0275\u0275text(743, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(744, "td")(745, "span", 110);
    \u0275\u0275text(746, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(747, "td")(748, "span", 110);
    \u0275\u0275text(749, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(750, "td")(751, "span", 110);
    \u0275\u0275text(752, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(753, "td")(754, "span", 110);
    \u0275\u0275text(755, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(756, "tr")(757, "td", 109);
    \u0275\u0275text(758, "Certifications");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(759, "tr")(760, "td");
    \u0275\u0275text(761, "G\xE9n\xE9rer / valider un certificat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(762, "td")(763, "span", 110);
    \u0275\u0275text(764, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(765, "td")(766, "span", 110);
    \u0275\u0275text(767, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(768, "td")(769, "span", 111);
    \u0275\u0275text(770, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(771, "td")(772, "span", 110);
    \u0275\u0275text(773, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(774, "td")(775, "span", 111);
    \u0275\u0275text(776, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(777, "td")(778, "span", 111);
    \u0275\u0275text(779, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(780, "tr")(781, "td");
    \u0275\u0275text(782, "R\xE9voquer un certificat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(783, "td")(784, "span", 110);
    \u0275\u0275text(785, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(786, "td")(787, "span", 110);
    \u0275\u0275text(788, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(789, "td")(790, "span", 111);
    \u0275\u0275text(791, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(792, "td")(793, "span", 111);
    \u0275\u0275text(794, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(795, "td")(796, "span", 111);
    \u0275\u0275text(797, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(798, "td")(799, "span", 111);
    \u0275\u0275text(800, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(801, "tr")(802, "td");
    \u0275\u0275text(803, "T\xE9l\xE9charger son certificat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(804, "td")(805, "span", 110);
    \u0275\u0275text(806, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(807, "td")(808, "span", 110);
    \u0275\u0275text(809, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(810, "td")(811, "span", 110);
    \u0275\u0275text(812, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(813, "td")(814, "span", 110);
    \u0275\u0275text(815, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(816, "td")(817, "span", 110);
    \u0275\u0275text(818, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(819, "td")(820, "span", 110);
    \u0275\u0275text(821, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(822, "tr")(823, "td", 109);
    \u0275\u0275text(824, "Notifications & communication");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(825, "tr")(826, "td");
    \u0275\u0275text(827, "Envoyer des notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(828, "td")(829, "span", 110);
    \u0275\u0275text(830, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(831, "td")(832, "span", 110);
    \u0275\u0275text(833, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(834, "td")(835, "span", 111);
    \u0275\u0275text(836, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(837, "td")(838, "span", 110);
    \u0275\u0275text(839, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(840, "td")(841, "span", 111);
    \u0275\u0275text(842, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(843, "td")(844, "span", 111);
    \u0275\u0275text(845, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(846, "tr")(847, "td");
    \u0275\u0275text(848, "Envoyer des emails en masse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(849, "td")(850, "span", 110);
    \u0275\u0275text(851, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(852, "td")(853, "span", 110);
    \u0275\u0275text(854, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(855, "td")(856, "span", 111);
    \u0275\u0275text(857, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(858, "td")(859, "span", 111);
    \u0275\u0275text(860, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(861, "td")(862, "span", 111);
    \u0275\u0275text(863, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(864, "td")(865, "span", 111);
    \u0275\u0275text(866, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(867, "tr")(868, "td");
    \u0275\u0275text(869, "Recevoir des notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(870, "td")(871, "span", 110);
    \u0275\u0275text(872, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(873, "td")(874, "span", 110);
    \u0275\u0275text(875, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(876, "td")(877, "span", 110);
    \u0275\u0275text(878, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(879, "td")(880, "span", 110);
    \u0275\u0275text(881, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(882, "td")(883, "span", 110);
    \u0275\u0275text(884, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(885, "td")(886, "span", 110);
    \u0275\u0275text(887, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(888, "tr")(889, "td", 109);
    \u0275\u0275text(890, "\xC9valuations & feedback");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(891, "tr")(892, "td");
    \u0275\u0275text(893, "Cr\xE9er une \xE9valuation \xE0 chaud / \xE0 froid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(894, "td")(895, "span", 110);
    \u0275\u0275text(896, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(897, "td")(898, "span", 110);
    \u0275\u0275text(899, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(900, "td")(901, "span", 111);
    \u0275\u0275text(902, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(903, "td")(904, "span", 110);
    \u0275\u0275text(905, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(906, "td")(907, "span", 111);
    \u0275\u0275text(908, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(909, "td")(910, "span", 111);
    \u0275\u0275text(911, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(912, "tr")(913, "td");
    \u0275\u0275text(914, "Consulter les r\xE9sultats d'\xE9valuation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(915, "td")(916, "span", 110);
    \u0275\u0275text(917, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(918, "td")(919, "span", 110);
    \u0275\u0275text(920, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(921, "td")(922, "span", 112);
    \u0275\u0275text(923, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(924, "td")(925, "span", 110);
    \u0275\u0275text(926, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(927, "td")(928, "span", 111);
    \u0275\u0275text(929, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(930, "td")(931, "span", 111);
    \u0275\u0275text(932, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(933, "tr")(934, "td");
    \u0275\u0275text(935, "R\xE9pondre \xE0 une \xE9valuation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(936, "td")(937, "span", 110);
    \u0275\u0275text(938, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(939, "td")(940, "span", 110);
    \u0275\u0275text(941, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(942, "td")(943, "span", 110);
    \u0275\u0275text(944, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(945, "td")(946, "span", 110);
    \u0275\u0275text(947, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(948, "td")(949, "span", 110);
    \u0275\u0275text(950, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(951, "td")(952, "span", 110);
    \u0275\u0275text(953, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(954, "tr")(955, "td");
    \u0275\u0275text(956, "Noter un formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(957, "td")(958, "span", 111);
    \u0275\u0275text(959, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(960, "td")(961, "span", 111);
    \u0275\u0275text(962, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(963, "td")(964, "span", 110);
    \u0275\u0275text(965, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(966, "td")(967, "span", 111);
    \u0275\u0275text(968, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(969, "td")(970, "span", 111);
    \u0275\u0275text(971, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(972, "td")(973, "span", 110);
    \u0275\u0275text(974, "\u2713");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(975, "div", 113)(976, "span")(977, "span", 110);
    \u0275\u0275text(978, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275text(979, " Acc\xE8s complet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(980, "span")(981, "span", 112);
    \u0275\u0275text(982, "\u25D0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(983, " Acc\xE8s limit\xE9 (son p\xE9rim\xE8tre)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(984, "span")(985, "span", 111);
    \u0275\u0275text(986, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275text(987, " Aucun acc\xE8s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(988, "div", 114);
    \u0275\u0275element(989, "i", 115);
    \u0275\u0275elementStart(990, "small", 116)(991, "strong");
    \u0275\u0275text(992, "ARH");
    \u0275\u0275elementEnd();
    \u0275\u0275text(993, " = Admin RH \xB7 ");
    \u0275\u0275elementStart(994, "strong");
    \u0275\u0275text(995, "RRH");
    \u0275\u0275elementEnd();
    \u0275\u0275text(996, " = Responsable RH \xB7 ");
    \u0275\u0275elementStart(997, "strong");
    \u0275\u0275text(998, "MGR");
    \u0275\u0275elementEnd();
    \u0275\u0275text(999, " = Manager \xB7 ");
    \u0275\u0275elementStart(1e3, "strong");
    \u0275\u0275text(1001, "FOR");
    \u0275\u0275elementEnd();
    \u0275\u0275text(1002, " = Formateur \xB7 ");
    \u0275\u0275elementStart(1003, "strong");
    \u0275\u0275text(1004, "CST");
    \u0275\u0275elementEnd();
    \u0275\u0275text(1005, " = Consultant \xB7 ");
    \u0275\u0275elementStart(1006, "strong");
    \u0275\u0275text(1007, "EMP");
    \u0275\u0275elementEnd();
    \u0275\u0275text(1008, " = Employ\xE9 ");
    \u0275\u0275elementEnd()()();
  }
}
function UserListComponent_div_17_ng_container_9_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 135);
    \u0275\u0275text(1, " Cliquer ou glisser votre fichier ici ");
    \u0275\u0275elementStart(2, "small");
    \u0275\u0275text(3, ".xlsx \xB7 .xls \xB7 .csv");
    \u0275\u0275elementEnd()();
  }
}
function UserListComponent_div_17_ng_container_9_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 135)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedFile.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (ctx_r1.selectedFile.size / 1024).toFixed(0), " Ko");
  }
}
function UserListComponent_div_17_ng_container_9_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 136);
    \u0275\u0275element(1, "div", 137);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r1.importProgress, "%");
  }
}
function UserListComponent_div_17_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label", 128);
    \u0275\u0275element(2, "i", 129);
    \u0275\u0275template(3, UserListComponent_div_17_ng_container_9_span_3_Template, 4, 0, "span", 130)(4, UserListComponent_div_17_ng_container_9_span_4_Template, 5, 2, "span", 130);
    \u0275\u0275elementStart(5, "input", 131);
    \u0275\u0275listener("change", function UserListComponent_div_17_ng_container_9_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, UserListComponent_div_17_ng_container_9_div_6_Template, 2, 2, "div", 132);
    \u0275\u0275elementStart(7, "div", 133);
    \u0275\u0275element(8, "i", 134);
    \u0275\u0275elementStart(9, "ul")(10, "li");
    \u0275\u0275text(11, "T\xE9l\xE9chargez d'abord le ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13, "template");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " pour voir la structure requise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li");
    \u0275\u0275text(16, "Colonnes obligatoires : ");
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18, "nom, prenom, email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "li");
    \u0275\u0275text(20, "Colonnes optionnelles : ");
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22, "matricule, direction, role, entreprise");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "li");
    \u0275\u0275text(24, "Matricule et num\xE9ro de t\xE9l\xE9phone doivent \xEAtre uniques");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("ul-dropzone--active", !!ctx_r1.selectedFile);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.selectedFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedFile);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isImporting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isImporting);
  }
}
function UserListComponent_div_17_ng_container_10_div_1_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r17);
  }
}
function UserListComponent_div_17_ng_container_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139)(1, "div", 140);
    \u0275\u0275element(2, "i", 122);
    \u0275\u0275text(3, " Structure du fichier invalide ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 141);
    \u0275\u0275template(5, UserListComponent_div_17_ng_container_10_div_1_li_5_Template, 2, 1, "li", 142);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.importResult.headerErrors);
  }
}
function UserListComponent_div_17_ng_container_10_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 145);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.importResult.totalCreated);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" utilisateur(s) cr\xE9\xE9(s) sur ", ctx_r1.importResult.totalProcessed, " trait\xE9(s) ");
  }
}
function UserListComponent_div_17_ng_container_10_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275element(1, "i", 134);
    \u0275\u0275text(2, " Aucune ligne \xE0 traiter dans le fichier. ");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_div_17_ng_container_10_ng_container_2_div_3_div_5_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(msg_r18);
  }
}
function UserListComponent_div_17_ng_container_10_ng_container_2_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 149)(1, "span", 150);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 141);
    \u0275\u0275template(4, UserListComponent_div_17_ng_container_10_ng_container_2_div_3_div_5_li_4_Template, 2, 1, "li", 142);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r19 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Ligne ", e_r19.line);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", e_r19.errors);
  }
}
function UserListComponent_div_17_ng_container_10_ng_container_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139)(1, "div", 140);
    \u0275\u0275element(2, "i", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 147);
    \u0275\u0275template(5, UserListComponent_div_17_ng_container_10_ng_container_2_div_3_div_5_Template, 5, 2, "div", 148);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.importResult.rowErrors.length, " ligne(s) en erreur ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.importResult.rowErrors);
  }
}
function UserListComponent_div_17_ng_container_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UserListComponent_div_17_ng_container_10_ng_container_2_div_1_Template, 5, 2, "div", 143)(2, UserListComponent_div_17_ng_container_10_ng_container_2_div_2_Template, 3, 0, "div", 144)(3, UserListComponent_div_17_ng_container_10_ng_container_2_div_3_Template, 6, 2, "div", 138);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importResult.totalCreated > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importResult.totalCreated === 0 && ctx_r1.importResult.totalErrors === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importResult.rowErrors.length);
  }
}
function UserListComponent_div_17_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UserListComponent_div_17_ng_container_10_div_1_Template, 6, 1, "div", 138)(2, UserListComponent_div_17_ng_container_10_ng_container_2_Template, 4, 3, "ng-container", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importResult.headerErrors.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.importResult.headerErrors.length);
  }
}
function UserListComponent_div_17_button_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 154);
  }
}
function UserListComponent_div_17_button_14_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 23);
  }
}
function UserListComponent_div_17_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 151);
    \u0275\u0275listener("click", function UserListComponent_div_17_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.importUsers());
    });
    \u0275\u0275template(1, UserListComponent_div_17_button_14_span_1_Template, 1, 0, "span", 152)(2, UserListComponent_div_17_button_14_i_2_Template, 1, 0, "i", 153);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.selectedFile || ctx_r1.isImporting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isImporting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isImporting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isImporting ? "Import en cours\u2026" : "Importer", " ");
  }
}
function UserListComponent_div_17_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 155);
    \u0275\u0275listener("click", function UserListComponent_div_17_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.importResult = null;
      return \u0275\u0275resetView(ctx_r1.selectedFile = null);
    });
    \u0275\u0275element(1, "i", 69);
    \u0275\u0275text(2, " Nouvel import ");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 117);
    \u0275\u0275listener("click", function UserListComponent_div_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportDialog());
    });
    \u0275\u0275elementStart(1, "div", 118);
    \u0275\u0275listener("click", function UserListComponent_div_17_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 119)(3, "div", 120);
    \u0275\u0275element(4, "i", 23);
    \u0275\u0275text(5, " Importer des utilisateurs ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 121);
    \u0275\u0275listener("click", function UserListComponent_div_17_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportDialog());
    });
    \u0275\u0275element(7, "i", 122);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 123);
    \u0275\u0275template(9, UserListComponent_div_17_ng_container_9_Template, 25, 6, "ng-container", 7)(10, UserListComponent_div_17_ng_container_10_Template, 3, 2, "ng-container", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 124)(12, "button", 125);
    \u0275\u0275listener("click", function UserListComponent_div_17_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportDialog());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, UserListComponent_div_17_button_14_Template, 4, 4, "button", 126)(15, UserListComponent_div_17_button_15_Template, 3, 0, "button", 127);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", !ctx_r1.importResult);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importResult);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.importResult ? "Fermer" : "Annuler", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.importResult);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importResult && !ctx_r1.importResult.headerErrors.length);
  }
}
var UserListComponent = class _UserListComponent {
  userService;
  authService;
  route;
  // ── Tabs ──────────────────────────────────────
  activeTab = "users";
  // ── Pagination ───────────────────────────────
  pageSize = 10;
  tableData = [];
  tableDataCopy = [];
  actualData = [];
  currentPage = 1;
  skip = 0;
  limit = this.pageSize;
  totalData = 0;
  pageSelection = [];
  // ── Filtres ──────────────────────────────────
  searchDataValue = "";
  selectedRoleFilter = "";
  selectedStatutFilter = "";
  showRoleDropdown = false;
  showStatutDropdown = false;
  // ── KPIs topbar ──────────────────────────────
  get rolesCount() {
    return this.availableRoles.length;
  }
  get entreprisesCount() {
    return new Set(this.actualData.map((u) => u.entreprise_id).filter(Boolean)).size;
  }
  get availableRoles() {
    const roles = [...new Set(this.actualData.map((u) => this.getRoleName(u)).filter(Boolean))];
    return sortRoleNames(roles);
  }
  // ── État ─────────────────────────────────────
  loading = false;
  error = "";
  userDialog = false;
  isEditMode = false;
  selectedUser = null;
  currentUser = null;
  // ── Import ───────────────────────────────────
  showImportDialog = false;
  selectedFile = null;
  isImporting = false;
  importProgress = 0;
  importResult = null;
  constructor(userService, authService, route) {
    this.userService = userService;
    this.authService = authService;
    this.route = route;
  }
  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.getUserList();
    if (this.route.snapshot.queryParamMap.get("action") === "create") {
      this.openNew();
    }
  }
  onDocumentClick() {
    this.showRoleDropdown = false;
    this.showStatutDropdown = false;
  }
  // ════════════════════════════════════════════
  // TABS
  // ════════════════════════════════════════════
  setTab(tab) {
    this.activeTab = tab;
  }
  // ════════════════════════════════════════════
  // CHARGEMENT
  // ════════════════════════════════════════════
  getUserList() {
    this.loading = true;
    this.error = "";
    const roleId = Number(this.currentUser?.role_id) || 0;
    const request$ = roleId === 5 ? this.userService.getMyUsersgroup() : this.userService.getMyUsers();
    request$.subscribe({
      next: (response) => {
        this.actualData = response.users ?? response.data ?? [];
        this.tableDataCopy = [...this.actualData];
        this.totalData = this.actualData.length;
        this.calculateTotalPages(this.totalData, this.pageSize);
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        this.error = httpErrorMessage(err, "Impossible de charger les utilisateurs.");
        this.loading = false;
      }
    });
  }
  refreshData() {
    this.getUserList();
  }
  // ════════════════════════════════════════════
  // FILTRES
  // ════════════════════════════════════════════
  setRoleFilter(role) {
    this.selectedRoleFilter = role;
    this.showRoleDropdown = false;
    this.applyFilters();
  }
  setStatutFilter(s) {
    this.selectedStatutFilter = s;
    this.showStatutDropdown = false;
    this.applyFilters();
  }
  searchData(value) {
    this.searchDataValue = value;
    this.applyFilters();
  }
  applyFilters() {
    let data = [...this.tableDataCopy];
    if (this.searchDataValue.trim()) {
      const q = this.searchDataValue.toLowerCase();
      data = data.filter((u) => u.nom?.toLowerCase().includes(q) || u.prenom?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q) || u.fonction?.toLowerCase().includes(q) || u.numero?.toLowerCase().includes(q) || u.matricule?.toLowerCase().includes(q) || u.direction?.toLowerCase().includes(q));
    }
    if (this.selectedRoleFilter) {
      data = data.filter((u) => this.getRoleName(u) === this.selectedRoleFilter);
    }
    if (this.selectedStatutFilter !== "") {
      const s = +this.selectedStatutFilter;
      data = data.filter((u) => u.statut === s);
    }
    this.actualData = data;
    this.totalData = data.length;
    this.currentPage = 1;
    this.calculateTotalPages(this.totalData, this.pageSize);
    this.getTableData({ skip: 0, limit: this.pageSize });
  }
  // ════════════════════════════════════════════
  // PAGINATION
  // ════════════════════════════════════════════
  getTableData(opt) {
    this.skip = opt.skip;
    this.limit = opt.limit;
    this.tableData = this.actualData.slice(this.skip, this.skip + this.limit);
  }
  onPageChange(page) {
    this.currentPage = page;
    this.getTableData({ skip: (page - 1) * this.pageSize, limit: this.pageSize });
  }
  calculateTotalPages(total, size) {
    this.pageSelection = [];
    for (let i = 1; i <= Math.ceil(total / size); i++) {
      this.pageSelection.push({ skip: (i - 1) * size, limit: size });
    }
  }
  // ════════════════════════════════════════════
  // CRUD
  // ════════════════════════════════════════════
  openNew() {
    this.userDialog = true;
    this.isEditMode = false;
    this.selectedUser = null;
  }
  hideDialog() {
    this.userDialog = false;
    this.selectedUser = null;
  }
  editUser(user) {
    this.userDialog = true;
    this.isEditMode = true;
    this.selectedUser = __spreadValues({}, user);
  }
  deleteUser(id) {
    if (!confirm("Supprimer cet utilisateur ?"))
      return;
    this.userService.deleteUser(id).subscribe({ next: () => this.refreshData() });
  }
  archiveUser(user) {
    if (!confirm("Archiver cet utilisateur ?"))
      return;
    this.userService.updateUser(user.id, __spreadProps(__spreadValues({}, user), { statut: 0 })).subscribe({ next: () => this.refreshData() });
  }
  reactivateUser(user) {
    if (!confirm("R\xE9activer cet utilisateur ?"))
      return;
    this.userService.updateUser(user.id, __spreadProps(__spreadValues({}, user), { statut: 1 })).subscribe({ next: () => this.refreshData() });
  }
  // ════════════════════════════════════════════
  // IMPORT
  // ════════════════════════════════════════════
  openImportDialog() {
    this.showImportDialog = true;
    this.selectedFile = null;
    this.importProgress = 0;
    this.importResult = null;
  }
  closeImportDialog() {
    this.showImportDialog = false;
    this.isImporting = false;
    this.importResult = null;
  }
  onFileSelected(event) {
    const f = event.target.files?.[0];
    if (!f)
      return;
    const ok = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
      "text/csv"
    ].includes(f.type);
    this.selectedFile = ok ? f : null;
    if (!ok)
      alert("Format non support\xE9. Utilisez .xlsx, .xls ou .csv");
  }
  importUsers() {
    if (!this.selectedFile)
      return;
    this.isImporting = true;
    this.importProgress = 0;
    this.importResult = null;
    this.userService.importUsers(this.selectedFile).subscribe({
      next: (res) => {
        this.isImporting = false;
        this.importProgress = 100;
        this.importResult = {
          done: true,
          totalProcessed: res.total_processed ?? 0,
          totalCreated: res.total_created ?? 0,
          totalErrors: res.total_errors ?? 0,
          headerErrors: res.header_errors ?? [],
          rowErrors: (res.errors ?? []).map((e) => ({ line: e.line, errors: e.errors }))
        };
        if (res.total_created > 0)
          this.refreshData();
      },
      error: (err) => {
        this.isImporting = false;
        this.importResult = {
          done: true,
          totalProcessed: 0,
          totalCreated: 0,
          totalErrors: 1,
          headerErrors: [err.error?.message ?? "Erreur serveur lors de l'import"],
          rowErrors: []
        };
      }
    });
  }
  downloadTemplate() {
    this.userService.downloadTemplate().subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "template_import_users.xlsx";
        link.click();
        window.URL.revokeObjectURL(url);
      },
      error: () => alert("Erreur lors du t\xE9l\xE9chargement du template")
    });
  }
  exportUsers() {
    const data = this.tableDataCopy;
    if (!data.length) {
      alert("Aucune donn\xE9e \xE0 exporter");
      return;
    }
    const headers = ["Matricule", "Nom", "Pr\xE9nom", "Email", "Direction", "R\xF4le", "Entreprise", "Statut"];
    const rows = data.map((u) => [
      u.matricule || "",
      u.nom || "",
      u.prenom || "",
      u.email || "",
      u.direction || "",
      this.getRoleName(u),
      u.entreprise?.nom || "",
      u.statut === 1 ? "Actif" : "Inactif"
    ]);
    const csv = [headers, ...rows].map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(";")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `utilisateurs_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  // ════════════════════════════════════════════
  // HELPERS TEMPLATE
  // ════════════════════════════════════════════
  trackById(_, u) {
    return u.id;
  }
  getDisplayName(u) {
    return u.name || [u.prenom, u.nom].filter(Boolean).join(" ") || u.email;
  }
  getInitials(u) {
    return this.getDisplayName(u).split(" ").map((w) => w[0]).join("").substring(0, 2).toUpperCase();
  }
  getRoleName(u) {
    return u.role?.name || "Non d\xE9fini";
  }
  getRoleKey(roleName) {
    const map = {
      "super admin": "superadmin",
      "superadmin": "superadmin",
      "admin rh": "adminrh",
      "responsable rh": "adminrh",
      "responsable rh groupe": "adminrh",
      "formateur": "formateur",
      "employ\xE9": "employe",
      "employee": "employe"
    };
    return map[roleName?.toLowerCase()] ?? "default";
  }
  getRoleIcon(roleName) {
    const map = {
      superadmin: "isax-shield-tick",
      adminrh: "isax-briefcase",
      formateur: "isax-teacher",
      employe: "isax-user"
    };
    return map[this.getRoleKey(roleName)] ?? "isax-user";
  }
  formatDate(d) {
    if (!d)
      return "\u2014";
    const diff = Date.now() - new Date(d).getTime();
    const h = Math.floor(diff / 36e5);
    const j = Math.floor(diff / 864e5);
    if (h < 1)
      return "\xC0 l'instant";
    if (h < 24)
      return `Il y a ${h}h`;
    if (j < 2)
      return "Hier";
    return `Il y a ${j}j`;
  }
  getStatutBadgeClass(statut) {
    return statut === 1 ? "badge bg-success" : "badge bg-warning";
  }
  static \u0275fac = function UserListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserListComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserListComponent, selectors: [["app-user-list"]], hostBindings: function UserListComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function UserListComponent_click_HostBindingHandler() {
        return ctx.onDocumentClick();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 19, vars: 19, consts: [[1, "ul-shell"], [1, "ul-topbar"], [1, "isax", "isax-people", "ul-topbar__icon"], [1, "ul-topbar__title"], [1, "ul-topbar__stats"], [1, "ul-tabbar"], ["type", "button", 1, "ul-tab", 3, "click"], [4, "ngIf"], ["class", "ul-role-embed", 4, "ngIf"], ["class", "ul-matrix-wrap", 4, "ngIf"], ["class", "ul-import-overlay", 3, "click", 4, "ngIf"], [3, "onClose", "onSave", "visible", "isEditMode", "userData"], [1, "ul-toolbar"], [1, "ul-search"], [1, "isax", "isax-search-normal-1", "ul-search__icon"], ["type", "search", "placeholder", "Rechercher un utilisateur...", 1, "ul-search__input", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "ul-filter-group", 3, "click"], ["type", "button", 1, "ul-filter", 3, "click"], [1, "isax", "isax-filter"], ["class", "ul-filter__chip", 4, "ngIf"], ["class", "ul-dropdown", 4, "ngIf"], [1, "isax", "isax-tick-circle"], ["type", "button", 1, "ul-import-btn", 3, "click"], [1, "isax", "isax-import"], ["type", "button", 1, "ul-tpl-btn", 3, "click"], [1, "isax", "isax-export"], ["type", "button", 1, "ul-export-btn", 3, "click"], [1, "isax", "isax-document-download"], ["type", "button", "class", "ul-add-btn", 3, "click", 4, "appHasPermission"], ["class", "ul-alert", 4, "ngIf"], ["class", "ul-skeletons", 4, "ngIf"], ["class", "ul-table", 4, "ngIf"], ["class", "ul-pager", 4, "ngIf"], [1, "ul-filter__chip"], [1, "ul-dropdown"], [1, "ul-dropdown__item", 3, "click"], ["class", "ul-dropdown__item", 3, "ul-dropdown__item--on", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "ul-add-btn", 3, "click"], [1, "isax", "isax-add"], [1, "ul-alert"], [1, "isax", "isax-warning-2"], [1, "ul-skeletons"], ["class", "ul-skeleton-row", 4, "ngFor", "ngForOf"], [1, "ul-skeleton-row"], [1, "ul-table"], [2, "width", "12%"], [2, "width", "26%"], [2, "width", "13%"], [2, "width", "10%"], [2, "width", "11%"], [2, "width", "15%"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ul-meta", "ul-meta--mono"], [1, "ul-user"], [1, "ul-avatar"], [1, "ul-user__name"], [1, "ul-user__email"], [1, "ul-meta"], [1, "ul-role-badge"], [1, "ul-statut"], [1, "ul-date"], [1, "ul-actions"], ["type", "button", "title", "Modifier", 1, "ul-act", 3, "click"], [1, "isax", "isax-edit"], ["type", "button", "class", "ul-act ul-act--warn", "title", "Archiver", 3, "click", 4, "ngIf"], ["type", "button", "class", "ul-act ul-act--ok", "title", "R\xE9activer", 3, "click", 4, "ngIf"], ["type", "button", "title", "Archiver", 1, "ul-act", "ul-act--warn", 3, "click"], [1, "isax", "isax-archive"], ["type", "button", "title", "R\xE9activer", 1, "ul-act", "ul-act--ok", 3, "click"], [1, "isax", "isax-refresh"], ["colspan", "6", 1, "ul-empty"], [1, "isax", "isax-people", "d-block", "mb-2", 2, "font-size", "2rem"], [1, "ul-pager"], [1, "ul-pager__info"], [1, "ul-pager__btns"], ["type", "button", 1, "ul-pager__btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], ["type", "button", "class", "ul-pager__btn", 3, "ul-pager__btn--active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-3"], ["type", "button", 1, "ul-pager__btn", 3, "click"], [1, "ul-role-embed"], [1, "ul-matrix-wrap"], [1, "ul-matrix__header"], [1, "ul-matrix__title"], [1, "isax", "isax-shield-security", "me-2"], [1, "ul-matrix__subtitle", "text-muted", "small"], [1, "ul-matrix__hierarchy", "mb-3"], [1, "ul-hier-chain"], [1, "ul-hier-badge", "ul-hier--rh"], [1, "isax", "isax-arrow-right-3", "ul-hier-arrow"], [1, "ul-hier-badge", "ul-hier--mgr"], [1, "ul-hier-badge", "ul-hier--form"], [1, "ul-hier-badge", "ul-hier--emp"], [1, "table-responsive"], [1, "ul-matrix"], [2, "min-width", "200px"], ["title", "Admin RH"], [1, "ul-mh-role", "ul-mh--rh"], ["title", "Responsable RH"], ["title", "Manager"], [1, "ul-mh-role", "ul-mh--mgr"], ["title", "Formateur"], [1, "ul-mh-role", "ul-mh--form"], ["title", "Consultant"], ["title", "Employ\xE9"], [1, "ul-mh-role", "ul-mh--emp"], [1, "ul-matrix__role-names"], [1, "ul-matrix__group-label"], [1, "small", "text-nowrap"], ["colspan", "7", 1, "ul-matrix__group"], [1, "ul-c-yes"], [1, "ul-c-no"], [1, "ul-c-partial"], [1, "ul-matrix__legend", "mt-3"], [1, "ul-matrix__note", "mt-2"], [1, "isax", "isax-info-circle", "me-1"], [1, "text-muted"], [1, "ul-import-overlay", 3, "click"], [1, "ul-import-modal", 3, "click"], [1, "ul-import-modal__head"], [1, "ul-import-modal__title"], ["type", "button", 1, "ul-import-modal__close", 3, "click"], [1, "isax", "isax-close-circle"], [1, "ul-import-modal__body"], [1, "ul-import-modal__foot"], ["type", "button", 1, "ul-import-modal__cancel", 3, "click"], ["type", "button", "class", "ul-import-modal__submit", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "ul-import-modal__submit ul-import-modal__submit--retry", 3, "click", 4, "ngIf"], ["for", "rh-file-input", 1, "ul-dropzone"], [1, "isax", "isax-document-upload", "ul-dropzone__icon"], ["class", "ul-dropzone__label", 4, "ngIf"], ["id", "rh-file-input", "type", "file", "accept", ".xlsx,.xls,.csv", 1, "ul-file-hidden", 3, "change", "disabled"], ["class", "ul-import-progress", 4, "ngIf"], [1, "ul-import-info"], [1, "isax", "isax-info-circle"], [1, "ul-dropzone__label"], [1, "ul-import-progress"], [1, "ul-import-progress__bar"], ["class", "ul-import-report ul-import-report--error", 4, "ngIf"], [1, "ul-import-report", "ul-import-report--error"], [1, "ul-import-report__title"], [1, "ul-import-report__list"], [4, "ngFor", "ngForOf"], ["class", "ul-import-report ul-import-report--success", 4, "ngIf"], ["class", "ul-import-report ul-import-report--warn", 4, "ngIf"], [1, "ul-import-report", "ul-import-report--success"], [1, "ul-import-report", "ul-import-report--warn"], [1, "ul-import-report__rows"], ["class", "ul-import-report__row", 4, "ngFor", "ngForOf"], [1, "ul-import-report__row"], [1, "ul-import-report__line"], ["type", "button", 1, "ul-import-modal__submit", 3, "click", "disabled"], ["class", "ul-spinner", 4, "ngIf"], ["class", "isax isax-import", 4, "ngIf"], [1, "ul-spinner"], ["type", "button", 1, "ul-import-modal__submit", "ul-import-modal__submit--retry", 3, "click"]], template: function UserListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275elementStart(3, "h1", 3);
      \u0275\u0275text(4, "Utilisateurs & r\xF4les");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
      \u0275\u0275listener("click", function UserListComponent_Template_button_click_8_listener() {
        return ctx.setTab("users");
      });
      \u0275\u0275text(9, "Utilisateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 6);
      \u0275\u0275listener("click", function UserListComponent_Template_button_click_10_listener() {
        return ctx.setTab("roles");
      });
      \u0275\u0275text(11, "R\xF4les & permissions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 6);
      \u0275\u0275listener("click", function UserListComponent_Template_button_click_12_listener() {
        return ctx.setTab("matrix");
      });
      \u0275\u0275text(13, "Matrice des Habilitations");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, UserListComponent_ng_container_14_Template, 31, 16, "ng-container", 7)(15, UserListComponent_div_15_Template, 2, 0, "div", 8)(16, UserListComponent_div_16_Template, 1009, 0, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, UserListComponent_div_17_Template, 16, 5, "div", 10);
      \u0275\u0275elementStart(18, "app-user-add", 11);
      \u0275\u0275listener("onClose", function UserListComponent_Template_app_user_add_onClose_18_listener() {
        return ctx.hideDialog();
      })("onSave", function UserListComponent_Template_app_user_add_onSave_18_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate6(" ", ctx.totalData, " utilisateur", ctx.totalData > 1 ? "s" : "", " \xB7 ", ctx.rolesCount, " r\xF4le", ctx.rolesCount > 1 ? "s" : "", " \xB7 ", ctx.entreprisesCount, " entreprise", ctx.entreprisesCount > 1 ? "s" : "", " ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("ul-tab--active", ctx.activeTab === "users");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("ul-tab--active", ctx.activeTab === "roles");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("ul-tab--active", ctx.activeTab === "matrix");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.activeTab === "users");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "roles");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "matrix");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showImportDialog);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.userDialog)("isEditMode", ctx.isEditMode)("userData", ctx.selectedUser);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, CommonModule, NgForOf, NgIf, UserAddComponent, AdminrhRoleComponent, HasPermissionDirective], styles: ['\n\n.ul-shell[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ul-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.ul-topbar__icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #9ca3af;\n}\n.ul-topbar__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n  flex: 1;\n}\n.ul-topbar__stats[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-tabbar[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-tab[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  font-size: 13px;\n  font-weight: 400;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ul-tab--active[_ngcontent-%COMP%] {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ul-tab[_ngcontent-%COMP%]:hover:not(.ul-tab--active) {\n  color: #111827;\n}\n.ul-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 180px;\n  max-width: 240px;\n}\n.ul-search__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ul-search__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 10px 6px 32px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ul-search__input[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n  background: #fff;\n}\n.ul-filter-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ul-filter[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 11px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: border-color 0.15s, background 0.15s;\n}\n.ul-filter[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ul-filter--on[_ngcontent-%COMP%] {\n  border-color: #185FA5;\n  color: #185FA5;\n  background: #e6f1fb;\n}\n.ul-filter__chip[_ngcontent-%COMP%] {\n  padding: 1px 6px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 10px;\n  font-size: 10px;\n}\n.ul-filter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-import-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #BA7517 0%,\n      #D4941E 100%);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(186, 117, 23, 0.35);\n  transition: opacity 0.15s, transform 0.1s;\n}\n.ul-import-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.ul-import-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.ul-import-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-tpl-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #006F78;\n  background: #E6F4F5;\n  border: 1.5px solid #9DD4D8;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.15s, transform 0.1s;\n}\n.ul-tpl-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(215.4285714286, 237.5885714286, 239.1714285714);\n  transform: translateY(-1px);\n}\n.ul-tpl-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.ul-tpl-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-export-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #006F78,\n      #00949F);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  box-shadow: 0 2px 6px rgba(0, 111, 120, 0.3);\n  transition: opacity 0.15s, transform 0.1s;\n}\n.ul-export-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.ul-export-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.ul-export-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #185FA5;\n  background: #e6f1fb;\n  border: 1px solid #185FA5;\n  border-radius: 8px;\n  cursor: pointer;\n  margin-left: auto;\n  transition: background 0.15s;\n}\n.ul-add-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(208.0172413793, 228.6896551724, 247.4827586207);\n}\n.ul-add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-import-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_ul-fade-in 0.15s ease;\n}\n@keyframes _ngcontent-%COMP%_ul-fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.ul-import-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  width: 460px;\n  max-width: calc(100vw - 32px);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_ul-slide-up 0.18s ease;\n}\n@keyframes _ngcontent-%COMP%_ul-slide-up {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.ul-import-modal__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #BA7517 0%,\n      #D4941E 100%);\n  color: #fff;\n}\n.ul-import-modal__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.ul-import-modal__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.ul-import-modal__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.8);\n  cursor: pointer;\n  font-size: 18px;\n  line-height: 1;\n  padding: 0;\n  transition: color 0.15s;\n}\n.ul-import-modal__close[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.ul-import-modal__body[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.ul-import-modal__foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e5e7eb;\n}\n.ul-import-modal__cancel[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #4b5563;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.ul-import-modal__cancel[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.ul-import-modal__cancel[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.ul-import-modal__submit[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 18px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #BA7517 0%,\n      #D4941E 100%);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(186, 117, 23, 0.35);\n  transition: opacity 0.15s;\n}\n.ul-import-modal__submit[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.ul-import-modal__submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.ul-import-modal__submit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ul-dropzone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 24px 16px;\n  border: 2px dashed #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s;\n  text-align: center;\n}\n.ul-dropzone[_ngcontent-%COMP%]:hover, \n.ul-dropzone--active[_ngcontent-%COMP%] {\n  border-color: #BA7517;\n  background: #FAEEDA;\n}\n.ul-dropzone__icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #BA7517;\n}\n.ul-dropzone__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ul-dropzone__label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #111827;\n  font-size: 13px;\n}\n.ul-dropzone__label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 11px;\n}\n.ul-import-progress[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #f3f4f6;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.ul-import-progress__bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #BA7517,\n      #E8B84B);\n  border-radius: 99px;\n  transition: width 0.3s ease;\n}\n.ul-import-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 12px;\n  background: #FAEEDA;\n  border: 1px solid #E9C97E;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #8C5410;\n}\n.ul-import-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #BA7517;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.ul-import-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 16px;\n}\n.ul-import-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n.ul-import-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #6B3C10;\n}\n.ul-file-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.ul-import-report[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 12px 14px;\n  font-size: 12.5px;\n  margin-top: 10px;\n}\n.ul-import-report--success[_ngcontent-%COMP%] {\n  background: #EDFAF2;\n  border: 1px solid #6FCF97;\n  color: #1A5C35;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ul-import-report--success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #27AE60;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.ul-import-report--warn[_ngcontent-%COMP%] {\n  background: #FAFAEC;\n  border: 1px solid #D4C84A;\n  color: #6B5E10;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ul-import-report--warn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #B8A800;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.ul-import-report--error[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  border: 1px solid #FECACA;\n  color: #7F1D1D;\n}\n.ul-import-report__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.ul-import-report__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #DC2626;\n}\n.ul-import-report__rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: 240px;\n  overflow-y: auto;\n  padding-right: 4px;\n}\n.ul-import-report__row[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #FECACA;\n  border-radius: 6px;\n  padding: 8px 10px;\n}\n.ul-import-report__line[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #DC2626;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  border-radius: 4px;\n  padding: 1px 7px;\n  margin-bottom: 4px;\n}\n.ul-import-report__list[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  padding-left: 16px;\n}\n.ul-import-report__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n}\n.ul-import-modal__submit--retry[_ngcontent-%COMP%] {\n  background: #6B7280;\n}\n.ul-import-modal__submit--retry[_ngcontent-%COMP%]:hover {\n  background: #4B5563;\n}\n.ul-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_ul-spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_ul-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ul-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  z-index: 200;\n  min-width: 160px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.ul-dropdown__item[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.ul-dropdown__item[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.ul-dropdown__item--on[_ngcontent-%COMP%] {\n  color: #185FA5;\n  font-weight: 500;\n  background: #e6f1fb;\n}\n.ul-alert[_ngcontent-%COMP%] {\n  margin: 10px 14px 0;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ul-skeletons[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ul-skeleton-row[_ngcontent-%COMP%] {\n  height: 40px;\n  border-radius: 8px;\n  background: #f3f4f6;\n  animation: _ngcontent-%COMP%_ul-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_ul-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ul-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.ul-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ul-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ul-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.ul-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 14px !important;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ul-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.ul-user__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.ul-user__email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.ul-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.ul-avatar[data-role=superadmin][_ngcontent-%COMP%] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-avatar[data-role=adminrh][_ngcontent-%COMP%] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-avatar[data-role=formateur][_ngcontent-%COMP%] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-avatar[data-role=employe][_ngcontent-%COMP%] {\n  background: #faeeda;\n  color: #633806;\n}\n.ul-avatar[data-role=default][_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-role-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ul-role-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ul-role-badge[data-role=superadmin][_ngcontent-%COMP%] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-role-badge[data-role=adminrh][_ngcontent-%COMP%] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-role-badge[data-role=formateur][_ngcontent-%COMP%] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-role-badge[data-role=employe][_ngcontent-%COMP%] {\n  background: #f1efe8;\n  color: #444441;\n}\n.ul-role-badge[data-role=default][_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-cie[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  background: #f3f4f6;\n  padding: 2px 8px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.ul-cie-none[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-statut[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n}\n.ul-statut[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ul-statut[data-s=actif][_ngcontent-%COMP%] {\n  background: #eaf3de;\n  color: #3b6d11;\n}\n.ul-statut[data-s=inactif][_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4b5563;\n}\n.ul-meta--mono[_ngcontent-%COMP%] {\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n}\n.ul-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.ul-act[_ngcontent-%COMP%] {\n  padding: 4px 7px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.ul-act[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.ul-act--warn[_ngcontent-%COMP%] {\n  color: #92400e;\n  border-color: #fcd34d;\n}\n.ul-act--warn[_ngcontent-%COMP%]:hover {\n  background: #fffbeb;\n}\n.ul-act--ok[_ngcontent-%COMP%] {\n  color: #065f46;\n  border-color: #6ee7b7;\n}\n.ul-act--ok[_ngcontent-%COMP%]:hover {\n  background: #ecfdf5;\n}\n.ul-act--del[_ngcontent-%COMP%] {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ul-act--del[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.ul-pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ul-pager__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-pager__btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.ul-pager__btn[_ngcontent-%COMP%] {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ul-pager__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ul-pager__btn--active[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ul-pager__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ul-role-embed[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.ul-role-embed[_ngcontent-%COMP%]     .page-content > .d-md-flex:first-child, \n.ul-role-embed[_ngcontent-%COMP%]     .page-content > .d-block:first-child, \n.ul-role-embed[_ngcontent-%COMP%]     .d-md-flex.align-items-center.justify-content-between.mb-4 {\n  display: none !important;\n}\n.ul-role-embed[_ngcontent-%COMP%]     .page-content {\n  padding: 0 !important;\n}\n.ul-matrix-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding: 14px;\n}\n.ul-matrix__header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.ul-matrix__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n}\n.ul-matrix__subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ul-matrix__hierarchy[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding: 8px 0;\n}\n.ul-hier-chain[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  gap: 4px;\n  width: max-content;\n}\n.ul-hier-badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.ul-hier-arrow[_ngcontent-%COMP%] {\n  color: #aaa;\n  font-size: 12px;\n}\n.ul-hier--rh[_ngcontent-%COMP%] {\n  background: #eef4ff;\n  color: #2563eb;\n  border: 1px solid #bfdbfe;\n}\n.ul-hier--mgr[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n  border: 1px solid #fde68a;\n}\n.ul-hier--form[_ngcontent-%COMP%] {\n  background: #f0fdfd;\n  color: #0891b2;\n  border: 1px solid #a5f3fc;\n}\n.ul-hier--emp[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n}\n.ul-mh-role[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 7px;\n  border-radius: 6px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n}\n.ul-mh--rh[_ngcontent-%COMP%] {\n  background: #eef4ff;\n  color: #2563eb;\n}\n.ul-mh--mgr[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.ul-mh--form[_ngcontent-%COMP%] {\n  background: #f0fdfd;\n  color: #0891b2;\n}\n.ul-mh--emp[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #6b7280;\n}\n.ul-matrix[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n  font-size: 12px;\n}\n.ul-matrix[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.ul-matrix[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border: 1px solid #e5e7eb;\n  text-align: center;\n}\n.ul-matrix[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, \n.ul-matrix[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n  font-weight: 500;\n  background: #f9fafb;\n}\n.ul-matrix[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-matrix[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n.ul-matrix__role-names[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #4b5563;\n  background: #f8f9fc !important;\n  white-space: nowrap;\n  padding: 5px 8px !important;\n}\n.ul-matrix__group-label[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #9ca3af !important;\n  font-weight: 400 !important;\n}\n.ul-matrix__group[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background: #f3f4f6 !important;\n  text-align: left !important;\n  padding-left: 12px !important;\n}\n.ul-matrix__legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 11px;\n  color: #9ca3af;\n  flex-wrap: wrap;\n}\n.ul-matrix__note[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ul-c-yes[_ngcontent-%COMP%] {\n  color: #3b6d11;\n  font-size: 15px;\n  font-weight: 700;\n}\n.ul-c-no[_ngcontent-%COMP%] {\n  color: #d3d1c7;\n  font-size: 15px;\n}\n.ul-c-partial[_ngcontent-%COMP%] {\n  color: #ba7517;\n  font-size: 15px;\n}\n/*# sourceMappingURL=user-list.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserListComponent, [{
    type: Component,
    args: [{ selector: "app-user-list", standalone: true, imports: [RouterLink, FormsModule, CommonModule, CustomPaginationComponent, UserAddComponent, AdminrhRoleComponent, HasPermissionDirective], template: `<!-- \u2500\u2500 SHELL \u2500\u2500 -->\r
<div class="ul-shell">\r
\r
  <!-- \u2500\u2500 TOP BAR \u2500\u2500 -->\r
  <div class="ul-topbar">\r
    <i class="isax isax-people ul-topbar__icon"></i>\r
    <h1 class="ul-topbar__title">Utilisateurs & r\xF4les</h1>\r
    <span class="ul-topbar__stats">\r
      {{ totalData }} utilisateur{{ totalData > 1 ? 's' : '' }}\r
      \xB7 {{ rolesCount }} r\xF4le{{ rolesCount > 1 ? 's' : '' }}\r
      \xB7 {{ entreprisesCount }} entreprise{{ entreprisesCount > 1 ? 's' : '' }}\r
    </span>\r
  </div>\r
\r
  <!-- \u2500\u2500 TABS \u2500\u2500 -->\r
  <div class="ul-tabbar">\r
    <button type="button" class="ul-tab" [class.ul-tab--active]="activeTab === 'users'"\r
            (click)="setTab('users')">Utilisateurs</button>\r
    <button type="button" class="ul-tab" [class.ul-tab--active]="activeTab === 'roles'"\r
            (click)="setTab('roles')">R\xF4les & permissions</button>\r
    <button type="button" class="ul-tab" [class.ul-tab--active]="activeTab === 'matrix'"\r
            (click)="setTab('matrix')">Matrice des Habilitations</button>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       TAB 1 : UTILISATEURS\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <ng-container *ngIf="activeTab === 'users'">\r
\r
    <!-- Toolbar -->\r
    <div class="ul-toolbar">\r
      <div class="ul-search">\r
        <i class="isax isax-search-normal-1 ul-search__icon"></i>\r
        <input type="search" class="ul-search__input"\r
               placeholder="Rechercher un utilisateur..."\r
               [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"\r
               (ngModelChange)="searchData($event)">\r
      </div>\r
\r
      <!-- Filtre R\xF4le -->\r
      <div class="ul-filter-group" (click)="$event.stopPropagation()">\r
        <button type="button" class="ul-filter" [class.ul-filter--on]="!!selectedRoleFilter"\r
                (click)="showRoleDropdown = !showRoleDropdown">\r
          <i class="isax isax-filter"></i> R\xF4le\r
          <span *ngIf="selectedRoleFilter" class="ul-filter__chip">{{ selectedRoleFilter }}</span>\r
        </button>\r
        <div class="ul-dropdown" *ngIf="showRoleDropdown">\r
          <div class="ul-dropdown__item" (click)="setRoleFilter('')">Tous les r\xF4les</div>\r
          <div class="ul-dropdown__item"\r
               *ngFor="let r of availableRoles"\r
               [class.ul-dropdown__item--on]="selectedRoleFilter === r"\r
               (click)="setRoleFilter(r)">{{ r }}</div>\r
        </div>\r
      </div>\r
\r
      <!-- Filtre Statut -->\r
      <div class="ul-filter-group" (click)="$event.stopPropagation()">\r
        <button type="button" class="ul-filter" [class.ul-filter--on]="selectedStatutFilter !== ''"\r
                (click)="showStatutDropdown = !showStatutDropdown">\r
          <i class="isax isax-tick-circle"></i> Statut\r
          <span *ngIf="selectedStatutFilter !== ''" class="ul-filter__chip">\r
            {{ selectedStatutFilter === '1' ? 'Actif' : 'Inactif' }}\r
          </span>\r
        </button>\r
        <div class="ul-dropdown" *ngIf="showStatutDropdown">\r
          <div class="ul-dropdown__item" (click)="setStatutFilter('')">Tous</div>\r
          <div class="ul-dropdown__item"\r
               [class.ul-dropdown__item--on]="selectedStatutFilter === '1'"\r
               (click)="setStatutFilter('1')">Actif</div>\r
          <div class="ul-dropdown__item"\r
               [class.ul-dropdown__item--on]="selectedStatutFilter === '0'"\r
               (click)="setStatutFilter('0')">Inactif</div>\r
        </div>\r
      </div>\r
\r
      <button type="button" class="ul-import-btn" (click)="openImportDialog()">\r
        <i class="isax isax-import"></i> Importer\r
      </button>\r
      <button type="button" class="ul-tpl-btn" (click)="downloadTemplate()">\r
        <i class="isax isax-export"></i> Template\r
      </button>\r
      <button type="button" class="ul-export-btn" (click)="exportUsers()">\r
        <i class="isax isax-document-download"></i> Exporter\r
      </button>\r
\r
      <button *appHasPermission="'creer utilisateurs'" type="button" class="ul-add-btn" (click)="openNew()">\r
        <i class="isax isax-add"></i> Nouvel utilisateur\r
      </button>\r
    </div>\r
\r
    <!-- Erreur -->\r
    <div *ngIf="error" class="ul-alert">\r
      <i class="isax isax-warning-2"></i> {{ error }}\r
    </div>\r
\r
    <!-- Skeleton -->\r
    <div *ngIf="loading" class="ul-skeletons">\r
      <div *ngFor="let i of [1,2,3,4,5]" class="ul-skeleton-row"></div>\r
    </div>\r
\r
    <!-- Tableau -->\r
    <table class="ul-table" *ngIf="!loading">\r
      <thead>\r
        <tr>\r
          <th style="width:12%">Matricule</th>\r
          <th style="width:26%">Utilisateur</th>\r
          <th style="width:13%">Direction</th>\r
          <th style="width:13%">R\xF4le</th>\r
          <th style="width:10%">Statut</th>\r
          <th style="width:11%">Derni\xE8re activit\xE9</th>\r
          <th style="width:15%">Actions</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let u of tableData; trackBy: trackById">\r
          <td>\r
            <span class="ul-meta ul-meta--mono">{{ u.matricule || '\u2014' }}</span>\r
          </td>\r
          <td>\r
            <div class="ul-user">\r
              <div class="ul-avatar" [attr.data-role]="getRoleKey(getRoleName(u))">\r
                {{ getInitials(u) }}\r
              </div>\r
              <div>\r
                <div class="ul-user__name">{{ getDisplayName(u) }}</div>\r
                <div class="ul-user__email">{{ u.email }}</div>\r
              </div>\r
            </div>\r
          </td>\r
          <td>\r
            <span class="ul-meta">{{ u.direction || '\u2014' }}</span>\r
          </td>\r
          <td>\r
            <span class="ul-role-badge" [attr.data-role]="getRoleKey(getRoleName(u))">\r
              <i [class]="'isax ' + getRoleIcon(getRoleName(u))"></i>\r
              {{ getRoleName(u) }}\r
            </span>\r
          </td>\r
          <td>\r
            <span class="ul-statut" [attr.data-s]="u.statut === 1 ? 'actif' : 'inactif'">\r
              <i [class]="'isax ' + (u.statut === 1 ? 'isax-tick-circle' : 'isax-minus-cirlce')"></i>\r
              {{ u.statut === 1 ? 'Actif' : 'Inactif' }}\r
            </span>\r
          </td>\r
          <td class="ul-date">{{ formatDate(u.updated_at) }}</td>\r
          <td>\r
            <div class="ul-actions">\r
              <button type="button" class="ul-act" title="Modifier" (click)="editUser(u)">\r
                <i class="isax isax-edit"></i>\r
              </button>\r
              <button type="button" class="ul-act ul-act--warn" *ngIf="u.statut === 1"\r
                      title="Archiver" (click)="archiveUser(u)">\r
                <i class="isax isax-archive"></i>\r
              </button>\r
              <button type="button" class="ul-act ul-act--ok" *ngIf="u.statut === 0"\r
                      title="R\xE9activer" (click)="reactivateUser(u)">\r
                <i class="isax isax-refresh"></i>\r
              </button>\r
            </div>\r
          </td>\r
        </tr>\r
        <tr *ngIf="!tableData.length">\r
          <td colspan="6" class="ul-empty">\r
            <i class="isax isax-people d-block mb-2" style="font-size:2rem;"></i>\r
            Aucun utilisateur trouv\xE9\r
          </td>\r
        </tr>\r
      </tbody>\r
    </table>\r
\r
    <!-- Pagination -->\r
    <div class="ul-pager" *ngIf="!loading && totalData > pageSize">\r
      <span class="ul-pager__info">\r
        {{ skip + 1 }}\u2013{{ skip + tableData.length }} sur {{ totalData }}\r
      </span>\r
      <div class="ul-pager__btns">\r
        <button type="button" class="ul-pager__btn" [disabled]="currentPage === 1"\r
                (click)="onPageChange(currentPage - 1)">\r
          <i class="isax isax-arrow-left-2"></i>\r
        </button>\r
        <button type="button" *ngFor="let p of pageSelection; let i = index"\r
                class="ul-pager__btn"\r
                [class.ul-pager__btn--active]="currentPage === i + 1"\r
                (click)="onPageChange(i + 1)">{{ i + 1 }}</button>\r
        <button type="button" class="ul-pager__btn"\r
                [disabled]="currentPage === pageSelection.length || !pageSelection.length"\r
                (click)="onPageChange(currentPage + 1)">\r
          <i class="isax isax-arrow-right-3"></i>\r
        </button>\r
      </div>\r
    </div>\r
\r
  </ng-container>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       TAB 2 : R\xD4LES & PERMISSIONS\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="ul-role-embed" *ngIf="activeTab === 'roles'">\r
    <app-adminrh-role></app-adminrh-role>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       TAB 3 : MATRICE DES HABILITATIONS\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="ul-matrix-wrap" *ngIf="activeTab === 'matrix'">\r
\r
    <div class="ul-matrix__header">\r
      <h2 class="ul-matrix__title">\r
        <i class="isax isax-shield-security me-2"></i>Matrice des Habilitations\r
      </h2>\r
      <p class="ul-matrix__subtitle text-muted small">\r
        R\xF4les accessibles dans votre p\xE9rim\xE8tre, du plus habilit\xE9 au moins habilit\xE9.\r
      </p>\r
    </div>\r
\r
    <!-- L\xE9gende hi\xE9rarchique -->\r
    <div class="ul-matrix__hierarchy mb-3">\r
      <div class="ul-hier-chain">\r
        <span class="ul-hier-badge ul-hier--rh">Admin RH</span>\r
        <i class="isax isax-arrow-right-3 ul-hier-arrow"></i>\r
        <span class="ul-hier-badge ul-hier--rh">Responsable RH</span>\r
        <i class="isax isax-arrow-right-3 ul-hier-arrow"></i>\r
        <span class="ul-hier-badge ul-hier--mgr">Manager</span>\r
        <i class="isax isax-arrow-right-3 ul-hier-arrow"></i>\r
        <span class="ul-hier-badge ul-hier--form">Formateur</span>\r
        <i class="isax isax-arrow-right-3 ul-hier-arrow"></i>\r
        <span class="ul-hier-badge ul-hier--form">Consultant</span>\r
        <i class="isax isax-arrow-right-3 ul-hier-arrow"></i>\r
        <span class="ul-hier-badge ul-hier--emp">Employ\xE9</span>\r
      </div>\r
    </div>\r
\r
    <div class="table-responsive">\r
    <table class="ul-matrix">\r
      <thead>\r
        <tr>\r
          <th style="min-width:200px">Permission</th>\r
          <th title="Admin RH"><span class="ul-mh-role ul-mh--rh">ARH</span></th>\r
          <th title="Responsable RH"><span class="ul-mh-role ul-mh--rh">RRH</span></th>\r
          <th title="Manager"><span class="ul-mh-role ul-mh--mgr">MGR</span></th>\r
          <th title="Formateur"><span class="ul-mh-role ul-mh--form">FOR</span></th>\r
          <th title="Consultant"><span class="ul-mh-role ul-mh--form">CST</span></th>\r
          <th title="Employ\xE9"><span class="ul-mh-role ul-mh--emp">EMP</span></th>\r
        </tr>\r
        <tr class="ul-matrix__role-names">\r
          <td class="ul-matrix__group-label">R\xF4les (ordre hi\xE9rarchique \u2193)</td>\r
          <td class="small text-nowrap">Admin RH</td>\r
          <td class="small text-nowrap">Responsable RH</td>\r
          <td class="small text-nowrap">Manager</td>\r
          <td class="small text-nowrap">Formateur</td>\r
          <td class="small text-nowrap">Consultant</td>\r
          <td class="small text-nowrap">Employ\xE9</td>\r
        </tr>\r
      </thead>\r
      <tbody>\r
\r
        <!-- Gestion des utilisateurs -->\r
        <tr><td class="ul-matrix__group" colspan="7">Gestion des utilisateurs</td></tr>\r
        <tr>\r
          <td>Cr\xE9er / modifier un utilisateur</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Supprimer / d\xE9sactiver un compte</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Importer / exporter des utilisateurs</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Attribuer un r\xF4le</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>R\xE9initialiser le mot de passe</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Modifier son propre profil</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
        </tr>\r
        <tr>\r
          <td>G\xE9rer les directions / d\xE9partements</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
\r
        <!-- Formations & contenus -->\r
        <tr><td class="ul-matrix__group" colspan="7">Formations & contenus</td></tr>\r
        <tr>\r
          <td>Cr\xE9er / publier une formation</td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Modifier / archiver une formation</td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Assigner une formation</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Valider une demande de formation</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Cr\xE9er / g\xE9rer les quiz & \xE9valuations</td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>G\xE9rer le catalogue de formations</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Explorer le catalogue (lecture)</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
        </tr>\r
        <tr>\r
          <td>Acc\xE9der \xE0 ses formations assign\xE9es</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
        </tr>\r
        <tr>\r
          <td>Demander une formation (auto-inscription)</td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
        </tr>\r
\r
        <!-- Parcours de formation -->\r
        <tr><td class="ul-matrix__group" colspan="7">Parcours de formation</td></tr>\r
        <tr>\r
          <td>Cr\xE9er / modifier un parcours</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Supprimer / archiver un parcours</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Assigner un parcours</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Suivre la progression d'un parcours</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
        </tr>\r
\r
        <!-- Sessions -->\r
        <tr><td class="ul-matrix__group" colspan="7">Sessions de formation</td></tr>\r
        <tr>\r
          <td>Cr\xE9er / modifier une session</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Supprimer / annuler une session</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Inscrire des participants</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>G\xE9rer l'\xE9margement / pr\xE9sence</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
\r
        <!-- Plans de formation -->\r
        <tr><td class="ul-matrix__group" colspan="7">Plans de formation</td></tr>\r
        <tr>\r
          <td>Cr\xE9er / modifier un plan de formation</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Valider / approuver un plan</td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Suivre le budget formation</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
\r
        <!-- Suivi & statistiques -->\r
        <tr><td class="ul-matrix__group" colspan="7">Suivi & statistiques</td></tr>\r
        <tr>\r
          <td>Statistiques de son entreprise</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Voir la progression de son \xE9quipe</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Voir sa propre progression</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
        </tr>\r
        <tr>\r
          <td>Exporter les rapports (PDF, Excel)</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Tableau de bord personnalis\xE9</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
        </tr>\r
\r
        <!-- Certifications -->\r
        <tr><td class="ul-matrix__group" colspan="7">Certifications</td></tr>\r
        <tr>\r
          <td>G\xE9n\xE9rer / valider un certificat</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>R\xE9voquer un certificat</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>T\xE9l\xE9charger son certificat</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
        </tr>\r
\r
        <!-- Notifications & communication -->\r
        <tr><td class="ul-matrix__group" colspan="7">Notifications & communication</td></tr>\r
        <tr>\r
          <td>Envoyer des notifications</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Envoyer des emails en masse</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Recevoir des notifications</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
        </tr>\r
\r
        <!-- \xC9valuations & feedback -->\r
        <tr><td class="ul-matrix__group" colspan="7">\xC9valuations & feedback</td></tr>\r
        <tr>\r
          <td>Cr\xE9er une \xE9valuation \xE0 chaud / \xE0 froid</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Consulter les r\xE9sultats d'\xE9valuation</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>R\xE9pondre \xE0 une \xE9valuation</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
        </tr>\r
        <tr>\r
          <td>Noter un formateur</td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
        </tr>\r
\r
      </tbody>\r
    </table>\r
    </div>\r
\r
    <div class="ul-matrix__legend mt-3">\r
      <span><span class="ul-c-yes">\u2713</span> Acc\xE8s complet</span>\r
      <span><span class="ul-c-partial">\u25D0</span> Acc\xE8s limit\xE9 (son p\xE9rim\xE8tre)</span>\r
      <span><span class="ul-c-no">\u2014</span> Aucun acc\xE8s</span>\r
    </div>\r
\r
    <div class="ul-matrix__note mt-2">\r
      <i class="isax isax-info-circle me-1"></i>\r
      <small class="text-muted">\r
        <strong>ARH</strong> = Admin RH \xB7 <strong>RRH</strong> = Responsable RH \xB7\r
        <strong>MGR</strong> = Manager \xB7 <strong>FOR</strong> = Formateur \xB7\r
        <strong>CST</strong> = Consultant \xB7 <strong>EMP</strong> = Employ\xE9\r
      </small>\r
    </div>\r
\r
  </div>\r
\r
</div>\r
\r
<!-- \u2500\u2500 MODAL IMPORT \u2500\u2500 -->\r
<div class="ul-import-overlay" *ngIf="showImportDialog" (click)="closeImportDialog()">\r
  <div class="ul-import-modal" (click)="$event.stopPropagation()">\r
    <div class="ul-import-modal__head">\r
      <div class="ul-import-modal__title">\r
        <i class="isax isax-import"></i> Importer des utilisateurs\r
      </div>\r
      <button type="button" class="ul-import-modal__close" (click)="closeImportDialog()">\r
        <i class="isax isax-close-circle"></i>\r
      </button>\r
    </div>\r
\r
    <div class="ul-import-modal__body">\r
\r
      <!-- \u2500\u2500 Zone de d\xE9p\xF4t (masqu\xE9e apr\xE8s r\xE9sultat) \u2500\u2500 -->\r
      <ng-container *ngIf="!importResult">\r
        <label class="ul-dropzone" for="rh-file-input" [class.ul-dropzone--active]="!!selectedFile">\r
          <i class="isax isax-document-upload ul-dropzone__icon"></i>\r
          <span class="ul-dropzone__label" *ngIf="!selectedFile">\r
            Cliquer ou glisser votre fichier ici\r
            <small>.xlsx \xB7 .xls \xB7 .csv</small>\r
          </span>\r
          <span class="ul-dropzone__label" *ngIf="selectedFile">\r
            <strong>{{ selectedFile.name }}</strong>\r
            <small>{{ (selectedFile.size / 1024).toFixed(0) }} Ko</small>\r
          </span>\r
          <input id="rh-file-input" type="file" accept=".xlsx,.xls,.csv"\r
                 (change)="onFileSelected($event)" [disabled]="isImporting" class="ul-file-hidden">\r
        </label>\r
\r
        <!-- Barre de progression -->\r
        <div class="ul-import-progress" *ngIf="isImporting">\r
          <div class="ul-import-progress__bar" [style.width.%]="importProgress"></div>\r
        </div>\r
\r
        <!-- Instructions -->\r
        <div class="ul-import-info">\r
          <i class="isax isax-info-circle"></i>\r
          <ul>\r
            <li>T\xE9l\xE9chargez d'abord le <strong>template</strong> pour voir la structure requise</li>\r
            <li>Colonnes obligatoires : <strong>nom, prenom, email</strong></li>\r
            <li>Colonnes optionnelles : <strong>matricule, direction, role, entreprise</strong></li>\r
            <li>Matricule et num\xE9ro de t\xE9l\xE9phone doivent \xEAtre uniques</li>\r
          </ul>\r
        </div>\r
      </ng-container>\r
\r
      <!-- \u2500\u2500 Rapport d'import \u2500\u2500 -->\r
      <ng-container *ngIf="importResult">\r
\r
        <!-- Erreurs de structure (colonnes manquantes) -->\r
        <div class="ul-import-report ul-import-report--error" *ngIf="importResult.headerErrors.length">\r
          <div class="ul-import-report__title">\r
            <i class="isax isax-close-circle"></i> Structure du fichier invalide\r
          </div>\r
          <ul class="ul-import-report__list">\r
            <li *ngFor="let e of importResult.headerErrors">{{ e }}</li>\r
          </ul>\r
        </div>\r
\r
        <!-- R\xE9sum\xE9 succ\xE8s/erreurs lignes -->\r
        <ng-container *ngIf="!importResult.headerErrors.length">\r
          <div class="ul-import-report ul-import-report--success" *ngIf="importResult.totalCreated > 0">\r
            <i class="isax isax-tick-circle"></i>\r
            <strong>{{ importResult.totalCreated }}</strong> utilisateur(s) cr\xE9\xE9(s) sur {{ importResult.totalProcessed }} trait\xE9(s)\r
          </div>\r
\r
          <div class="ul-import-report ul-import-report--warn" *ngIf="importResult.totalCreated === 0 && importResult.totalErrors === 0">\r
            <i class="isax isax-info-circle"></i> Aucune ligne \xE0 traiter dans le fichier.\r
          </div>\r
\r
          <!-- D\xE9tail des erreurs par ligne -->\r
          <div class="ul-import-report ul-import-report--error" *ngIf="importResult.rowErrors.length">\r
            <div class="ul-import-report__title">\r
              <i class="isax isax-warning-2"></i>\r
              {{ importResult.rowErrors.length }} ligne(s) en erreur\r
            </div>\r
            <div class="ul-import-report__rows">\r
              <div class="ul-import-report__row" *ngFor="let e of importResult.rowErrors">\r
                <span class="ul-import-report__line">Ligne {{ e.line }}</span>\r
                <ul class="ul-import-report__list">\r
                  <li *ngFor="let msg of e.errors">{{ msg }}</li>\r
                </ul>\r
              </div>\r
            </div>\r
          </div>\r
        </ng-container>\r
\r
      </ng-container>\r
    </div>\r
\r
    <div class="ul-import-modal__foot">\r
      <button type="button" class="ul-import-modal__cancel" (click)="closeImportDialog()">\r
        {{ importResult ? 'Fermer' : 'Annuler' }}\r
      </button>\r
      <button *ngIf="!importResult" type="button" class="ul-import-modal__submit"\r
              (click)="importUsers()" [disabled]="!selectedFile || isImporting">\r
        <span *ngIf="isImporting" class="ul-spinner"></span>\r
        <i *ngIf="!isImporting" class="isax isax-import"></i>\r
        {{ isImporting ? 'Import en cours\u2026' : 'Importer' }}\r
      </button>\r
      <button *ngIf="importResult && !importResult.headerErrors.length" type="button"\r
              class="ul-import-modal__submit ul-import-modal__submit--retry"\r
              (click)="importResult = null; selectedFile = null">\r
        <i class="isax isax-refresh"></i> Nouvel import\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2500\u2500 USER ADD/EDIT \u2500\u2500 -->\r
<app-user-add\r
  [visible]="userDialog"\r
  [isEditMode]="isEditMode"\r
  [userData]="selectedUser"\r
  (onClose)="hideDialog()"\r
  (onSave)="refreshData()">\r
</app-user-add>\r
`, styles: ['/* src/app/features/adminrh/user/user-list.component.scss */\n.ul-shell {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ul-topbar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.ul-topbar__icon {\n  font-size: 16px;\n  color: #9ca3af;\n}\n.ul-topbar__title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n  flex: 1;\n}\n.ul-topbar__stats {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-tabbar {\n  display: flex;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-tab {\n  padding: 10px 18px;\n  font-size: 13px;\n  font-weight: 400;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ul-tab--active {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ul-tab:hover:not(.ul-tab--active) {\n  color: #111827;\n}\n.ul-toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-search {\n  position: relative;\n  flex: 1;\n  min-width: 180px;\n  max-width: 240px;\n}\n.ul-search__icon {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ul-search__input {\n  width: 100%;\n  padding: 6px 10px 6px 32px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ul-search__input:focus {\n  border-color: #069b8f;\n  background: #fff;\n}\n.ul-filter-group {\n  position: relative;\n}\n.ul-filter {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 11px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: border-color 0.15s, background 0.15s;\n}\n.ul-filter:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ul-filter--on {\n  border-color: #185FA5;\n  color: #185FA5;\n  background: #e6f1fb;\n}\n.ul-filter__chip {\n  padding: 1px 6px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 10px;\n  font-size: 10px;\n}\n.ul-filter i {\n  font-size: 13px;\n}\n.ul-import-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #BA7517 0%,\n      #D4941E 100%);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(186, 117, 23, 0.35);\n  transition: opacity 0.15s, transform 0.1s;\n}\n.ul-import-btn:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.ul-import-btn:active {\n  transform: translateY(0);\n}\n.ul-import-btn i {\n  font-size: 13px;\n}\n.ul-tpl-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #006F78;\n  background: #E6F4F5;\n  border: 1.5px solid #9DD4D8;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.15s, transform 0.1s;\n}\n.ul-tpl-btn:hover {\n  background: rgb(215.4285714286, 237.5885714286, 239.1714285714);\n  transform: translateY(-1px);\n}\n.ul-tpl-btn:active {\n  transform: translateY(0);\n}\n.ul-tpl-btn i {\n  font-size: 13px;\n}\n.ul-export-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #006F78,\n      #00949F);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  box-shadow: 0 2px 6px rgba(0, 111, 120, 0.3);\n  transition: opacity 0.15s, transform 0.1s;\n}\n.ul-export-btn:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.ul-export-btn:active {\n  transform: translateY(0);\n}\n.ul-export-btn i {\n  font-size: 13px;\n}\n.ul-add-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #185FA5;\n  background: #e6f1fb;\n  border: 1px solid #185FA5;\n  border-radius: 8px;\n  cursor: pointer;\n  margin-left: auto;\n  transition: background 0.15s;\n}\n.ul-add-btn:hover {\n  background: rgb(208.0172413793, 228.6896551724, 247.4827586207);\n}\n.ul-add-btn i {\n  font-size: 13px;\n}\n.ul-import-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: ul-fade-in 0.15s ease;\n}\n@keyframes ul-fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.ul-import-modal {\n  background: #fff;\n  border-radius: 14px;\n  width: 460px;\n  max-width: calc(100vw - 32px);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n  animation: ul-slide-up 0.18s ease;\n}\n@keyframes ul-slide-up {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.ul-import-modal__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #BA7517 0%,\n      #D4941E 100%);\n  color: #fff;\n}\n.ul-import-modal__title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.ul-import-modal__title i {\n  font-size: 16px;\n}\n.ul-import-modal__close {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.8);\n  cursor: pointer;\n  font-size: 18px;\n  line-height: 1;\n  padding: 0;\n  transition: color 0.15s;\n}\n.ul-import-modal__close:hover {\n  color: #fff;\n}\n.ul-import-modal__body {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.ul-import-modal__foot {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid #e5e7eb;\n}\n.ul-import-modal__cancel {\n  padding: 7px 16px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #4b5563;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.ul-import-modal__cancel:hover {\n  background: #e5e7eb;\n}\n.ul-import-modal__cancel:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.ul-import-modal__submit {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 18px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #BA7517 0%,\n      #D4941E 100%);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  box-shadow: 0 2px 6px rgba(186, 117, 23, 0.35);\n  transition: opacity 0.15s;\n}\n.ul-import-modal__submit:hover {\n  opacity: 0.88;\n}\n.ul-import-modal__submit:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.ul-import-modal__submit i {\n  font-size: 14px;\n}\n.ul-dropzone {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 24px 16px;\n  border: 2px dashed #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s;\n  text-align: center;\n}\n.ul-dropzone:hover,\n.ul-dropzone--active {\n  border-color: #BA7517;\n  background: #FAEEDA;\n}\n.ul-dropzone__icon {\n  font-size: 28px;\n  color: #BA7517;\n}\n.ul-dropzone__label {\n  font-size: 13px;\n  color: #4b5563;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ul-dropzone__label strong {\n  color: #111827;\n  font-size: 13px;\n}\n.ul-dropzone__label small {\n  color: #9ca3af;\n  font-size: 11px;\n}\n.ul-import-progress {\n  height: 6px;\n  background: #f3f4f6;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.ul-import-progress__bar {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #BA7517,\n      #E8B84B);\n  border-radius: 99px;\n  transition: width 0.3s ease;\n}\n.ul-import-info {\n  display: flex;\n  gap: 10px;\n  padding: 12px;\n  background: #FAEEDA;\n  border: 1px solid #E9C97E;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #8C5410;\n}\n.ul-import-info i {\n  font-size: 15px;\n  color: #BA7517;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.ul-import-info ul {\n  margin: 0;\n  padding-left: 16px;\n}\n.ul-import-info ul li + li {\n  margin-top: 3px;\n}\n.ul-import-info ul strong {\n  color: #6B3C10;\n}\n.ul-file-hidden {\n  display: none;\n}\n.ul-import-report {\n  border-radius: 8px;\n  padding: 12px 14px;\n  font-size: 12.5px;\n  margin-top: 10px;\n}\n.ul-import-report--success {\n  background: #EDFAF2;\n  border: 1px solid #6FCF97;\n  color: #1A5C35;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ul-import-report--success i {\n  color: #27AE60;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.ul-import-report--warn {\n  background: #FAFAEC;\n  border: 1px solid #D4C84A;\n  color: #6B5E10;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ul-import-report--warn i {\n  color: #B8A800;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.ul-import-report--error {\n  background: #FEF2F2;\n  border: 1px solid #FECACA;\n  color: #7F1D1D;\n}\n.ul-import-report__title {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.ul-import-report__title i {\n  font-size: 15px;\n  color: #DC2626;\n}\n.ul-import-report__rows {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: 240px;\n  overflow-y: auto;\n  padding-right: 4px;\n}\n.ul-import-report__row {\n  background: #fff;\n  border: 1px solid #FECACA;\n  border-radius: 6px;\n  padding: 8px 10px;\n}\n.ul-import-report__line {\n  display: inline-block;\n  background: #DC2626;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  border-radius: 4px;\n  padding: 1px 7px;\n  margin-bottom: 4px;\n}\n.ul-import-report__list {\n  margin: 4px 0 0 0;\n  padding-left: 16px;\n}\n.ul-import-report__list li {\n  margin-bottom: 2px;\n}\n.ul-import-modal__submit--retry {\n  background: #6B7280;\n}\n.ul-import-modal__submit--retry:hover {\n  background: #4B5563;\n}\n.ul-spinner {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: ul-spin 0.6s linear infinite;\n}\n@keyframes ul-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ul-dropdown {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  z-index: 200;\n  min-width: 160px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.ul-dropdown__item {\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.ul-dropdown__item:hover {\n  background: #f9fafb;\n}\n.ul-dropdown__item--on {\n  color: #185FA5;\n  font-weight: 500;\n  background: #e6f1fb;\n}\n.ul-alert {\n  margin: 10px 14px 0;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ul-skeletons {\n  padding: 10px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ul-skeleton-row {\n  height: 40px;\n  border-radius: 8px;\n  background: #f3f4f6;\n  animation: ul-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes ul-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ul-table {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.ul-table th {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-table td {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ul-table tr:last-child td {\n  border-bottom: none;\n}\n.ul-table tr:hover td {\n  background: #f9fafb;\n}\n.ul-empty {\n  text-align: center;\n  padding: 40px 14px !important;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ul-user {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.ul-user__name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.ul-user__email {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.ul-avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.ul-avatar[data-role=superadmin] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-avatar[data-role=adminrh] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-avatar[data-role=formateur] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-avatar[data-role=employe] {\n  background: #faeeda;\n  color: #633806;\n}\n.ul-avatar[data-role=default] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-role-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ul-role-badge i {\n  font-size: 11px;\n}\n.ul-role-badge[data-role=superadmin] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-role-badge[data-role=adminrh] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-role-badge[data-role=formateur] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-role-badge[data-role=employe] {\n  background: #f1efe8;\n  color: #444441;\n}\n.ul-role-badge[data-role=default] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-cie {\n  font-size: 11px;\n  color: #4b5563;\n  background: #f3f4f6;\n  padding: 2px 8px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.ul-cie-none {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-statut {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n}\n.ul-statut i {\n  font-size: 11px;\n}\n.ul-statut[data-s=actif] {\n  background: #eaf3de;\n  color: #3b6d11;\n}\n.ul-statut[data-s=inactif] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-date {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-meta {\n  font-size: 12px;\n  color: #4b5563;\n}\n.ul-meta--mono {\n  font-family:\n    "SFMono-Regular",\n    Consolas,\n    "Liberation Mono",\n    Menlo,\n    monospace;\n}\n.ul-actions {\n  display: flex;\n  gap: 5px;\n}\n.ul-act {\n  padding: 4px 7px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.ul-act:hover {\n  background: #f3f4f6;\n}\n.ul-act--warn {\n  color: #92400e;\n  border-color: #fcd34d;\n}\n.ul-act--warn:hover {\n  background: #fffbeb;\n}\n.ul-act--ok {\n  color: #065f46;\n  border-color: #6ee7b7;\n}\n.ul-act--ok:hover {\n  background: #ecfdf5;\n}\n.ul-act--del {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ul-act--del:hover {\n  background: #fef2f2;\n}\n.ul-pager {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ul-pager__info {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-pager__btns {\n  display: flex;\n  gap: 4px;\n}\n.ul-pager__btn {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ul-pager__btn:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ul-pager__btn--active {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ul-pager__btn:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ul-role-embed {\n  padding: 0;\n}\n.ul-role-embed ::ng-deep .page-content > .d-md-flex:first-child,\n.ul-role-embed ::ng-deep .page-content > .d-block:first-child,\n.ul-role-embed ::ng-deep .d-md-flex.align-items-center.justify-content-between.mb-4 {\n  display: none !important;\n}\n.ul-role-embed ::ng-deep .page-content {\n  padding: 0 !important;\n}\n.ul-matrix-wrap {\n  overflow-x: auto;\n  padding: 14px;\n}\n.ul-matrix__header {\n  margin-bottom: 16px;\n}\n.ul-matrix__title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n}\n.ul-matrix__subtitle {\n  margin: 0;\n}\n.ul-matrix__hierarchy {\n  overflow-x: auto;\n  padding: 8px 0;\n}\n.ul-hier-chain {\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  gap: 4px;\n  width: max-content;\n}\n.ul-hier-badge {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.ul-hier-arrow {\n  color: #aaa;\n  font-size: 12px;\n}\n.ul-hier--rh {\n  background: #eef4ff;\n  color: #2563eb;\n  border: 1px solid #bfdbfe;\n}\n.ul-hier--mgr {\n  background: #fffbeb;\n  color: #d97706;\n  border: 1px solid #fde68a;\n}\n.ul-hier--form {\n  background: #f0fdfd;\n  color: #0891b2;\n  border: 1px solid #a5f3fc;\n}\n.ul-hier--emp {\n  background: #f9fafb;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n}\n.ul-mh-role {\n  display: inline-block;\n  padding: 3px 7px;\n  border-radius: 6px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n}\n.ul-mh--rh {\n  background: #eef4ff;\n  color: #2563eb;\n}\n.ul-mh--mgr {\n  background: #fffbeb;\n  color: #d97706;\n}\n.ul-mh--form {\n  background: #f0fdfd;\n  color: #0891b2;\n}\n.ul-mh--emp {\n  background: #f9fafb;\n  color: #6b7280;\n}\n.ul-matrix {\n  border-collapse: collapse;\n  width: 100%;\n  font-size: 12px;\n}\n.ul-matrix th,\n.ul-matrix td {\n  padding: 7px 10px;\n  border: 1px solid #e5e7eb;\n  text-align: center;\n}\n.ul-matrix th:first-child,\n.ul-matrix td:first-child {\n  text-align: left;\n  font-weight: 500;\n  background: #f9fafb;\n}\n.ul-matrix thead th {\n  background: #f9fafb;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-matrix thead th:first-child {\n  text-align: left;\n}\n.ul-matrix__role-names td {\n  font-size: 10px;\n  font-weight: 600;\n  color: #4b5563;\n  background: #f8f9fc !important;\n  white-space: nowrap;\n  padding: 5px 8px !important;\n}\n.ul-matrix__group-label {\n  font-style: italic;\n  color: #9ca3af !important;\n  font-weight: 400 !important;\n}\n.ul-matrix__group {\n  font-size: 10px;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background: #f3f4f6 !important;\n  text-align: left !important;\n  padding-left: 12px !important;\n}\n.ul-matrix__legend {\n  display: flex;\n  gap: 16px;\n  font-size: 11px;\n  color: #9ca3af;\n  flex-wrap: wrap;\n}\n.ul-matrix__note {\n  font-size: 11px;\n}\n.ul-c-yes {\n  color: #3b6d11;\n  font-size: 15px;\n  font-weight: 700;\n}\n.ul-c-no {\n  color: #d3d1c7;\n  font-size: 15px;\n}\n.ul-c-partial {\n  color: #ba7517;\n  font-size: 15px;\n}\n/*# sourceMappingURL=user-list.component.css.map */\n'] }]
  }], () => [{ type: UserService }, { type: AuthService }, { type: ActivatedRoute }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserListComponent, { className: "UserListComponent", filePath: "app/features/adminrh/user/user-list.component.ts", lineNumber: 23 });
})();
export {
  UserListComponent
};
//# sourceMappingURL=chunk-JOH7SEM5.js.map
