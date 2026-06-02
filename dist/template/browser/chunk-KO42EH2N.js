import {
  SuperadminRoleComponent
} from "./chunk-KMZBECY6.js";
import "./chunk-YY5U2YRC.js";
import {
  UserAddComponent
} from "./chunk-K5IK5MGW.js";
import {
  UserService
} from "./chunk-OGJSU6V5.js";
import "./chunk-NAWDUVHO.js";
import {
  CustomPaginationComponent
} from "./chunk-3XTSKOGE.js";
import "./chunk-EDMPVZTI.js";
import "./chunk-W5FY3JM3.js";
import "./chunk-SNOA42FF.js";
import "./chunk-FKX6UC3I.js";
import "./chunk-TYVQP4CB.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-45DOGZAU.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-MNWNTO2T.js";
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
} from "./chunk-7XGB4BEQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/superadmin/user/user-list.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => [1, 2, 3, 4, 5];
function UserListComponent_a_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275text(2, "Retour aux entreprises");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_ng_container_15_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedRoleFilter);
  }
}
function UserListComponent_ng_container_15_div_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_10_div_3_Template_div_click_0_listener() {
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
function UserListComponent_ng_container_15_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_10_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRoleFilter(""));
    });
    \u0275\u0275text(2, "Tous les r\xF4les");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UserListComponent_ng_container_15_div_10_div_3_Template, 2, 3, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.availableRoles);
  }
}
function UserListComponent_ng_container_15_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedStatutFilter === "1" ? "Actif" : "Inactif", " ");
  }
}
function UserListComponent_ng_container_15_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_19_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setStatutFilter(""));
    });
    \u0275\u0275text(2, "Tous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_19_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setStatutFilter("1"));
    });
    \u0275\u0275text(4, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 42);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_19_Template_div_click_5_listener() {
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
function UserListComponent_ng_container_15_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function UserListComponent_ng_container_15_div_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 48);
  }
}
function UserListComponent_ng_container_15_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, UserListComponent_ng_container_15_div_33_div_1_Template, 1, 0, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function UserListComponent_ng_container_15_table_34_tr_16_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r8.entreprise.nom);
  }
}
function UserListComponent_ng_container_15_table_34_tr_16_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1, "\u2014 Plateforme");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_ng_container_15_table_34_tr_16_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_table_34_tr_16_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const u_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.archiveUser(u_r8));
    });
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_ng_container_15_table_34_tr_16_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_table_34_tr_16_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const u_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.reactivateUser(u_r8));
    });
    \u0275\u0275element(1, "i", 76);
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_ng_container_15_table_34_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 55)(3, "div", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 57);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 58);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 59);
    \u0275\u0275element(12, "i");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, UserListComponent_ng_container_15_table_34_tr_16_span_15_Template, 2, 1, "span", 60)(16, UserListComponent_ng_container_15_table_34_tr_16_span_16_Template, 2, 0, "span", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 62);
    \u0275\u0275element(19, "i");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 63);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "div", 64)(25, "button", 65);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_table_34_tr_16_Template_button_click_25_listener() {
      const u_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editUser(u_r8));
    });
    \u0275\u0275element(26, "i", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, UserListComponent_ng_container_15_table_34_tr_16_button_27_Template, 2, 0, "button", 67)(28, UserListComponent_ng_container_15_table_34_tr_16_button_28_Template, 2, 0, "button", 68);
    \u0275\u0275elementStart(29, "button", 69);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_table_34_tr_16_Template_button_click_29_listener() {
      const u_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteUser(u_r8.id));
    });
    \u0275\u0275element(30, "i", 70);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const u_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-role", ctx_r1.getRoleKey(ctx_r1.getRoleName(u_r8)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(u_r8), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getDisplayName(u_r8));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r8.email);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-role", ctx_r1.getRoleKey(ctx_r1.getRoleName(u_r8)));
    \u0275\u0275advance();
    \u0275\u0275classMap("isax " + ctx_r1.getRoleIcon(ctx_r1.getRoleName(u_r8)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getRoleName(u_r8), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", u_r8.entreprise == null ? null : u_r8.entreprise.nom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(u_r8.entreprise == null ? null : u_r8.entreprise.nom));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-s", u_r8.statut === 1 ? "actif" : "inactif");
    \u0275\u0275advance();
    \u0275\u0275classMap("isax " + (u_r8.statut === 1 ? "isax-tick-circle" : "isax-minus-cirlce"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r8.statut === 1 ? "Actif" : "Inactif", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(u_r8.updated_at));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", u_r8.statut === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", u_r8.statut === 0);
  }
}
function UserListComponent_ng_container_15_table_34_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 77);
    \u0275\u0275element(2, "i", 78);
    \u0275\u0275text(3, " Aucun utilisateur trouv\xE9 ");
    \u0275\u0275elementEnd()();
  }
}
function UserListComponent_ng_container_15_table_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 49)(1, "thead")(2, "tr")(3, "th", 50);
    \u0275\u0275text(4, "Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 51);
    \u0275\u0275text(6, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 51);
    \u0275\u0275text(8, "Entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 52);
    \u0275\u0275text(10, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 53);
    \u0275\u0275text(12, "Derni\xE8re activit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 53);
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, UserListComponent_ng_container_15_table_34_tr_16_Template, 31, 17, "tr", 54)(17, UserListComponent_ng_container_15_table_34_tr_17_Template, 4, 0, "tr", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r1.tableData)("ngForTrackBy", ctx_r1.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.tableData.length);
  }
}
function UserListComponent_ng_container_15_div_35_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 86);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_35_button_6_Template_button_click_0_listener() {
      const i_r13 = \u0275\u0275restoreView(_r12).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPageChange(i_r13 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ul-pager__btn--active", ctx_r1.currentPage === i_r13 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r13 + 1);
  }
}
function UserListComponent_ng_container_15_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "span", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 81)(4, "button", 82);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_35_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UserListComponent_ng_container_15_div_35_button_6_Template, 2, 3, "button", 84);
    \u0275\u0275elementStart(7, "button", 82);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_35_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 85);
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
function UserListComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 16)(2, "div", 17);
    \u0275\u0275element(3, "i", 18);
    \u0275\u0275elementStart(4, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function UserListComponent_ng_container_15_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchDataValue, $event) || (ctx_r1.searchDataValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function UserListComponent_ng_container_15_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchData($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275listener("clickOutside", function UserListComponent_ng_container_15_Template_div_clickOutside_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showRoleDropdown = false);
    });
    \u0275\u0275elementStart(6, "button", 21);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showRoleDropdown = !ctx_r1.showRoleDropdown);
    });
    \u0275\u0275element(7, "i", 22);
    \u0275\u0275text(8, " R\xF4le ");
    \u0275\u0275template(9, UserListComponent_ng_container_15_span_9_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, UserListComponent_ng_container_15_div_10_Template, 4, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 25);
    \u0275\u0275element(12, "i", 26);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 20);
    \u0275\u0275listener("clickOutside", function UserListComponent_ng_container_15_Template_div_clickOutside_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showStatutDropdown = false);
    });
    \u0275\u0275elementStart(15, "button", 21);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showStatutDropdown = !ctx_r1.showStatutDropdown);
    });
    \u0275\u0275element(16, "i", 27);
    \u0275\u0275text(17, " Statut ");
    \u0275\u0275template(18, UserListComponent_ng_container_15_span_18_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, UserListComponent_ng_container_15_div_19_Template, 7, 4, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 28);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openImportDialog());
    });
    \u0275\u0275element(21, "i", 29);
    \u0275\u0275text(22, " Importer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 30);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275element(24, "i", 31);
    \u0275\u0275text(25, " Template ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 32);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportUsers());
    });
    \u0275\u0275element(27, "i", 33);
    \u0275\u0275text(28, " Exporter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 34);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNew());
    });
    \u0275\u0275element(30, "i", 35);
    \u0275\u0275text(31, " Nouvel utilisateur ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, UserListComponent_ng_container_15_div_32_Template, 3, 1, "div", 36)(33, UserListComponent_ng_container_15_div_33_Template, 2, 2, "div", 37)(34, UserListComponent_ng_container_15_table_34_Template, 18, 3, "table", 38)(35, UserListComponent_ng_container_15_div_35_Template, 9, 6, "div", 39);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchDataValue);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(17, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ul-filter--on", !!ctx_r1.selectedRoleFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedRoleFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showRoleDropdown);
    \u0275\u0275advance();
    \u0275\u0275classProp("ul-filter--on", !!ctx_r1.entrepriseId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.entrepriseId ? "Entreprise #" + ctx_r1.entrepriseId : "Entreprise", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ul-filter--on", ctx_r1.selectedStatutFilter !== "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedStatutFilter !== "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showStatutDropdown);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.totalData > ctx_r1.pageSize);
  }
}
function UserListComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275element(1, "app-superadmin-role");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "table", 89)(2, "thead")(3, "tr")(4, "th", 90);
    \u0275\u0275text(5, "Permission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Superadmin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Admin RH");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Employ\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody")(15, "tr")(16, "td", 91);
    \u0275\u0275text(17, "Gestion des entreprises");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "tr")(19, "td");
    \u0275\u0275text(20, "Cr\xE9er / supprimer une entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "span", 92);
    \u0275\u0275text(23, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td")(25, "span", 93);
    \u0275\u0275text(26, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td")(28, "span", 93);
    \u0275\u0275text(29, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "td")(31, "span", 93);
    \u0275\u0275text(32, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "tr")(34, "td");
    \u0275\u0275text(35, "Voir toutes les entreprises");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "td")(37, "span", 92);
    \u0275\u0275text(38, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "td")(40, "span", 93);
    \u0275\u0275text(41, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "td")(43, "span", 93);
    \u0275\u0275text(44, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "td")(46, "span", 93);
    \u0275\u0275text(47, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "tr")(49, "td", 91);
    \u0275\u0275text(50, "Gestion des utilisateurs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "tr")(52, "td");
    \u0275\u0275text(53, "Cr\xE9er / modifier un utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "td")(55, "span", 92);
    \u0275\u0275text(56, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "td")(58, "span", 94);
    \u0275\u0275text(59, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "td")(61, "span", 93);
    \u0275\u0275text(62, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "td")(64, "span", 93);
    \u0275\u0275text(65, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "tr")(67, "td");
    \u0275\u0275text(68, "Attribuer un r\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "td")(70, "span", 92);
    \u0275\u0275text(71, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "td")(73, "span", 93);
    \u0275\u0275text(74, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "td")(76, "span", 93);
    \u0275\u0275text(77, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "td")(79, "span", 93);
    \u0275\u0275text(80, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "tr")(82, "td");
    \u0275\u0275text(83, "D\xE9sactiver un compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "td")(85, "span", 92);
    \u0275\u0275text(86, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "td")(88, "span", 94);
    \u0275\u0275text(89, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "td")(91, "span", 93);
    \u0275\u0275text(92, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "td")(94, "span", 93);
    \u0275\u0275text(95, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "tr")(97, "td", 91);
    \u0275\u0275text(98, "Formations & contenus");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "tr")(100, "td");
    \u0275\u0275text(101, "Cr\xE9er une formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "td")(103, "span", 92);
    \u0275\u0275text(104, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "td")(106, "span", 93);
    \u0275\u0275text(107, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "td")(109, "span", 92);
    \u0275\u0275text(110, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "td")(112, "span", 93);
    \u0275\u0275text(113, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(114, "tr")(115, "td");
    \u0275\u0275text(116, "Valider une demande de formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "td")(118, "span", 92);
    \u0275\u0275text(119, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "td")(121, "span", 92);
    \u0275\u0275text(122, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "td")(124, "span", 93);
    \u0275\u0275text(125, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "td")(127, "span", 93);
    \u0275\u0275text(128, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(129, "tr")(130, "td");
    \u0275\u0275text(131, "Acc\xE9der \xE0 ses formations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "td")(133, "span", 92);
    \u0275\u0275text(134, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "td")(136, "span", 92);
    \u0275\u0275text(137, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(138, "td")(139, "span", 92);
    \u0275\u0275text(140, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(141, "td")(142, "span", 92);
    \u0275\u0275text(143, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(144, "tr")(145, "td");
    \u0275\u0275text(146, "G\xE9rer les quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "td")(148, "span", 92);
    \u0275\u0275text(149, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(150, "td")(151, "span", 93);
    \u0275\u0275text(152, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(153, "td")(154, "span", 92);
    \u0275\u0275text(155, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(156, "td")(157, "span", 93);
    \u0275\u0275text(158, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(159, "tr")(160, "td", 91);
    \u0275\u0275text(161, "Suivi & statistiques");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(162, "tr")(163, "td");
    \u0275\u0275text(164, "Statistiques globales plateforme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(165, "td")(166, "span", 92);
    \u0275\u0275text(167, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(168, "td")(169, "span", 93);
    \u0275\u0275text(170, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(171, "td")(172, "span", 93);
    \u0275\u0275text(173, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(174, "td")(175, "span", 93);
    \u0275\u0275text(176, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(177, "tr")(178, "td");
    \u0275\u0275text(179, "Statistiques de son entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "td")(181, "span", 92);
    \u0275\u0275text(182, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(183, "td")(184, "span", 92);
    \u0275\u0275text(185, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(186, "td")(187, "span", 93);
    \u0275\u0275text(188, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(189, "td")(190, "span", 93);
    \u0275\u0275text(191, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(192, "tr")(193, "td");
    \u0275\u0275text(194, "Voir sa propre progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "td")(196, "span", 92);
    \u0275\u0275text(197, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(198, "td")(199, "span", 92);
    \u0275\u0275text(200, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(201, "td")(202, "span", 92);
    \u0275\u0275text(203, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(204, "td")(205, "span", 92);
    \u0275\u0275text(206, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(207, "tr")(208, "td");
    \u0275\u0275text(209, "T\xE9l\xE9charger un certificat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(210, "td")(211, "span", 92);
    \u0275\u0275text(212, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(213, "td")(214, "span", 92);
    \u0275\u0275text(215, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(216, "td")(217, "span", 92);
    \u0275\u0275text(218, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(219, "td")(220, "span", 92);
    \u0275\u0275text(221, "\u2713");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(222, "div", 95)(223, "span")(224, "span", 92);
    \u0275\u0275text(225, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275text(226, " Acc\xE8s complet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(227, "span")(228, "span", 94);
    \u0275\u0275text(229, "\u25D0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(230, " Acc\xE8s limit\xE9 (son p\xE9rim\xE8tre)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(231, "span")(232, "span", 93);
    \u0275\u0275text(233, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275text(234, " Aucun acc\xE8s");
    \u0275\u0275elementEnd()()();
  }
}
function UserListComponent_div_18_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 119);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedFile.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", (ctx_r1.selectedFile.size / 1024 / 1024).toFixed(2), " MB)");
  }
}
function UserListComponent_div_18_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 120)(2, "div", 121);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.importProgress, "%");
    \u0275\u0275attribute("aria-valuenow", ctx_r1.importProgress);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.importProgress, "% ");
  }
}
function UserListComponent_div_18_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 122);
  }
}
function UserListComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 97)(2, "div", 98)(3, "div", 99)(4, "h5", 100);
    \u0275\u0275element(5, "i", 101);
    \u0275\u0275text(6, "Importer des utilisateurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 102);
    \u0275\u0275listener("click", function UserListComponent_div_18_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportDialog());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 103)(9, "div", 104)(10, "label", 105);
    \u0275\u0275text(11, "Fichier Excel / CSV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 106);
    \u0275\u0275listener("change", function UserListComponent_div_18_Template_input_change_12_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 107);
    \u0275\u0275text(14, "Formats accept\xE9s : .xlsx, .xls, .csv");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, UserListComponent_div_18_div_15_Template, 5, 2, "div", 108)(16, UserListComponent_div_18_div_16_Template, 4, 4, "div", 109);
    \u0275\u0275elementStart(17, "div", 110)(18, "h6", 111);
    \u0275\u0275element(19, "i", 112);
    \u0275\u0275text(20, "Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ul", 113)(22, "li");
    \u0275\u0275text(23, "T\xE9l\xE9chargez d'abord le template pour voir la structure requise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li");
    \u0275\u0275text(25, "Colonnes obligatoires : ");
    \u0275\u0275elementStart(26, "strong");
    \u0275\u0275text(27, "nom, prenom, email, role_id");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "li");
    \u0275\u0275text(29, "Les utilisateurs avec le m\xEAme email seront mis \xE0 jour");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div", 114)(31, "button", 115);
    \u0275\u0275listener("click", function UserListComponent_div_18_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportDialog());
    });
    \u0275\u0275text(32, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 116);
    \u0275\u0275listener("click", function UserListComponent_div_18_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.importUsers());
    });
    \u0275\u0275template(34, UserListComponent_div_18_span_34_Template, 1, 0, "span", 117);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.showImportDialog ? "block" : "none");
    \u0275\u0275classProp("show", ctx_r1.showImportDialog);
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx_r1.isImporting);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isImporting);
    \u0275\u0275advance(15);
    \u0275\u0275property("disabled", ctx_r1.isImporting);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.selectedFile || ctx_r1.isImporting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isImporting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isImporting ? "Import en cours..." : "Importer", " ");
  }
}
function UserListComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 123);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r1.showImportDialog);
  }
}
var UserListComponent = class _UserListComponent {
  userService;
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
  // ── Context entreprise (depuis query param) ──
  entrepriseId = null;
  // ── KPIs topbar ──────────────────────────────
  get rolesCount() {
    return this.availableRoles.length;
  }
  get entreprisesCount() {
    return new Set(this.actualData.map((u) => u.entreprise_id).filter(Boolean)).size;
  }
  get availableRoles() {
    return [...new Set(this.actualData.map((u) => this.getRoleName(u)).filter(Boolean))];
  }
  // ── État ─────────────────────────────────────
  loading = false;
  error = "";
  userDialog = false;
  isEditMode = false;
  selectedUser = null;
  // ── Import ───────────────────────────────────
  selectedFile = null;
  isImporting = false;
  importProgress = 0;
  showImportDialog = false;
  constructor(userService, route) {
    this.userService = userService;
    this.route = route;
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const id = params.get("entreprise_id");
      this.entrepriseId = id ? +id : null;
      this.getUserList();
    });
  }
  // ── Ferme les dropdowns sur clic extérieur ──
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
    const request$ = this.entrepriseId ? this.userService.getEmployesByEntreprise(this.entrepriseId) : this.userService.getUsers();
    request$.subscribe({
      next: (response) => {
        this.actualData = response.employes ?? response.users ?? response.data ?? [];
        this.tableDataCopy = [...this.actualData];
        this.totalData = this.actualData.length;
        this.calculateTotalPages(this.totalData, this.pageSize);
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.error = "Erreur lors du chargement des donn\xE9es";
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
      data = data.filter((u) => u.nom?.toLowerCase().includes(q) || u.prenom?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q) || u.fonction?.toLowerCase().includes(q) || u.numero?.toLowerCase().includes(q));
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
  }
  closeImportDialog() {
    this.showImportDialog = false;
    this.isImporting = false;
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
    this.userService.importUsers(this.selectedFile).subscribe({
      next: (res) => {
        this.importProgress = 100;
        let msg = "Import r\xE9ussi !";
        if (res.created)
          msg += `
${res.created} cr\xE9\xE9(s)`;
        if (res.updated)
          msg += `
${res.updated} mis \xE0 jour`;
        alert(msg);
        this.refreshData();
        this.closeImportDialog();
      },
      error: (err) => {
        this.isImporting = false;
        alert("Erreur lors de l'import : " + (err.error?.message ?? err.message));
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
    const headers = ["Nom", "Pr\xE9nom", "Email", "R\xF4le", "Entreprise", "Direction", "Matricule", "Statut", "Derni\xE8re activit\xE9"];
    const rows = data.map((u) => [
      u.nom || "",
      u.prenom || "",
      u.email || "",
      this.getRoleName(u),
      u.entreprise?.nom || "",
      u.direction || "",
      u.matricule || "",
      u.statut === 1 ? "Actif" : "Inactif",
      this.formatDate(u.updated_at)
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
    const name = this.getDisplayName(u);
    return name.split(" ").map((w) => w[0]).join("").substring(0, 2).toUpperCase();
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
  static \u0275fac = function UserListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserListComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserListComponent, selectors: [["app-user-list"]], hostBindings: function UserListComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function UserListComponent_click_HostBindingHandler() {
        return ctx.onDocumentClick();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 21, vars: 21, consts: [[1, "ul-shell"], [1, "ul-topbar"], [1, "isax", "isax-people", "ul-topbar__icon"], [1, "ul-topbar__title"], [1, "ul-topbar__stats"], ["routerLink", "/superadmin/superadmin-companymanagement", "class", "ul-back", 4, "ngIf"], [1, "ul-tabbar"], [1, "ul-tab", 3, "click"], [4, "ngIf"], ["class", "ul-role-embed", 4, "ngIf"], ["class", "ul-matrix-wrap", 4, "ngIf"], ["class", "modal", "tabindex", "-1", "role", "dialog", 3, "show", "display", 4, "ngIf"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [3, "onClose", "onSave", "visible", "isEditMode", "userData"], ["routerLink", "/superadmin/superadmin-companymanagement", 1, "ul-back"], [1, "isax", "isax-arrow-left-2", "me-1"], [1, "ul-toolbar"], [1, "ul-search"], [1, "isax", "isax-search-normal-1", "ul-search__icon"], ["type", "search", "placeholder", "Rechercher un utilisateur...", 1, "ul-search__input", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "ul-filter-group", 3, "clickOutside"], [1, "ul-filter", 3, "click"], [1, "isax", "isax-filter"], ["class", "ul-filter__chip", 4, "ngIf"], ["class", "ul-dropdown", 4, "ngIf"], [1, "ul-filter"], [1, "isax", "isax-building"], [1, "isax", "isax-tick-circle"], [1, "ul-import-btn", 3, "click"], [1, "isax", "isax-import"], [1, "ul-tpl-btn", 3, "click"], [1, "isax", "isax-export"], [1, "ul-export-btn", 3, "click"], [1, "isax", "isax-document-download"], [1, "ul-add-btn", 3, "click"], [1, "isax", "isax-add"], ["class", "ul-alert", 4, "ngIf"], ["class", "ul-skeletons", 4, "ngIf"], ["class", "ul-table", 4, "ngIf"], ["class", "ul-pager", 4, "ngIf"], [1, "ul-filter__chip"], [1, "ul-dropdown"], [1, "ul-dropdown__item", 3, "click"], ["class", "ul-dropdown__item", 3, "ul-dropdown__item--on", "click", 4, "ngFor", "ngForOf"], [1, "ul-alert"], [1, "isax", "isax-warning-2"], [1, "ul-skeletons"], ["class", "ul-skeleton-row", 4, "ngFor", "ngForOf"], [1, "ul-skeleton-row"], [1, "ul-table"], [2, "width", "28%"], [2, "width", "16%"], [2, "width", "12%"], [2, "width", "14%"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ul-user"], [1, "ul-avatar"], [1, "ul-user__name"], [1, "ul-user__email"], [1, "ul-role-badge"], ["class", "ul-cie", 4, "ngIf"], ["class", "ul-cie-none", 4, "ngIf"], [1, "ul-statut"], [1, "ul-date"], [1, "ul-actions"], ["title", "Modifier", 1, "ul-act", 3, "click"], [1, "isax", "isax-edit"], ["class", "ul-act ul-act--warn", "title", "Archiver", 3, "click", 4, "ngIf"], ["class", "ul-act ul-act--ok", "title", "R\xE9activer", 3, "click", 4, "ngIf"], ["title", "Supprimer", 1, "ul-act", "ul-act--del", 3, "click"], [1, "isax", "isax-trash"], [1, "ul-cie"], [1, "ul-cie-none"], ["title", "Archiver", 1, "ul-act", "ul-act--warn", 3, "click"], [1, "isax", "isax-archive"], ["title", "R\xE9activer", 1, "ul-act", "ul-act--ok", 3, "click"], [1, "isax", "isax-refresh"], ["colspan", "6", 1, "ul-empty"], [1, "isax", "isax-people", "d-block", "mb-2", 2, "font-size", "2rem"], [1, "ul-pager"], [1, "ul-pager__info"], [1, "ul-pager__btns"], [1, "ul-pager__btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], ["class", "ul-pager__btn", 3, "ul-pager__btn--active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-3"], [1, "ul-pager__btn", 3, "click"], [1, "ul-role-embed"], [1, "ul-matrix-wrap"], [1, "ul-matrix"], [2, "width", "38%"], ["colspan", "5", 1, "ul-matrix__group"], [1, "ul-c-yes"], [1, "ul-c-no"], [1, "ul-c-partial"], [1, "ul-matrix__legend"], ["tabindex", "-1", "role", "dialog", 1, "modal"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "isax", "isax-import", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-3"], ["for", "fileInput", 1, "form-label"], ["id", "fileInput", "type", "file", "accept", ".xlsx,.xls,.csv", 1, "form-control", 3, "change", "disabled"], [1, "form-text"], ["class", "alert alert-info", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], [1, "alert", "alert-warning"], [1, "alert-heading"], [1, "isax", "isax-warning-2", "me-1"], [1, "mb-0", "mt-2", "small"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "alert", "alert-info"], [1, "text-muted", "ms-1"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "modal-backdrop", "fade"]], template: function UserListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275elementStart(3, "h1", 3);
      \u0275\u0275text(4, "Utilisateurs & r\xF4les");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, UserListComponent_a_7_Template, 3, 0, "a", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275listener("click", function UserListComponent_Template_button_click_9_listener() {
        return ctx.setTab("users");
      });
      \u0275\u0275text(10, "Utilisateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 7);
      \u0275\u0275listener("click", function UserListComponent_Template_button_click_11_listener() {
        return ctx.setTab("roles");
      });
      \u0275\u0275text(12, "R\xF4les & permissions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function UserListComponent_Template_button_click_13_listener() {
        return ctx.setTab("matrix");
      });
      \u0275\u0275text(14, "Matrice d'acc\xE8s");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(15, UserListComponent_ng_container_15_Template, 36, 18, "ng-container", 8)(16, UserListComponent_div_16_Template, 2, 0, "div", 9)(17, UserListComponent_div_17_Template, 235, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, UserListComponent_div_18_Template, 36, 11, "div", 11)(19, UserListComponent_div_19_Template, 1, 2, "div", 12);
      \u0275\u0275elementStart(20, "app-user-add", 13);
      \u0275\u0275listener("onClose", function UserListComponent_Template_app_user_add_onClose_20_listener() {
        return ctx.hideDialog();
      })("onSave", function UserListComponent_Template_app_user_add_onSave_20_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate6(" ", ctx.totalData, " utilisateur", ctx.totalData > 1 ? "s" : "", " \xB7 ", ctx.rolesCount, " r\xF4le", ctx.rolesCount > 1 ? "s" : "", " \xB7 ", ctx.entreprisesCount, " entreprise", ctx.entreprisesCount > 1 ? "s" : "", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.entrepriseId);
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
      \u0275\u0275property("ngIf", ctx.showImportDialog);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.userDialog)("isEditMode", ctx.isEditMode)("userData", ctx.selectedUser);
    }
  }, dependencies: [RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, CommonModule, NgForOf, NgIf, UserAddComponent, SuperadminRoleComponent], styles: ["\n\n.ul-shell[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ul-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.ul-topbar__icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #9ca3af;\n}\n.ul-topbar__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n  flex: 1;\n}\n.ul-topbar__stats[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-back[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #185FA5;\n  text-decoration: none;\n}\n.ul-back[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.ul-tabbar[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-tab[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  font-size: 13px;\n  font-weight: 400;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ul-tab--active[_ngcontent-%COMP%] {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ul-tab[_ngcontent-%COMP%]:hover:not(.ul-tab--active) {\n  color: #111827;\n}\n.ul-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 180px;\n  max-width: 240px;\n}\n.ul-search__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ul-search__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 10px 6px 32px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ul-search__input[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n  background: #fff;\n}\n.ul-filter-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ul-filter[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 11px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: border-color 0.15s, background 0.15s;\n}\n.ul-filter[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ul-filter--on[_ngcontent-%COMP%] {\n  border-color: #185FA5;\n  color: #185FA5;\n  background: #e6f1fb;\n}\n.ul-filter__chip[_ngcontent-%COMP%] {\n  padding: 1px 6px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 10px;\n  font-size: 10px;\n}\n.ul-filter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #185FA5;\n  background: #e6f1fb;\n  border: 1px solid #185FA5;\n  border-radius: 8px;\n  cursor: pointer;\n  margin-left: auto;\n  transition: background 0.15s;\n}\n.ul-add-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(208.0172413793, 228.6896551724, 247.4827586207);\n}\n.ul-add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-import-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #BA7517,\n      #D4941E);\n  border: 1px solid #8C5410;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: opacity 0.15s;\n}\n.ul-import-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.ul-import-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-tpl-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #006F78;\n  background: #E6F4F5;\n  border: 1px solid #9DD4D8;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.ul-tpl-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(215.4285714286, 237.5885714286, 239.1714285714);\n}\n.ul-tpl-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-export-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #006F78,\n      #00949F);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  box-shadow: 0 2px 6px rgba(0, 111, 120, 0.3);\n  transition: opacity 0.15s, transform 0.1s;\n}\n.ul-export-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.ul-export-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.ul-export-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  z-index: 200;\n  min-width: 160px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.ul-dropdown__item[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.ul-dropdown__item[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.ul-dropdown__item--on[_ngcontent-%COMP%] {\n  color: #185FA5;\n  font-weight: 500;\n  background: #e6f1fb;\n}\n.ul-alert[_ngcontent-%COMP%] {\n  margin: 10px 14px 0;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ul-skeletons[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ul-skeleton-row[_ngcontent-%COMP%] {\n  height: 40px;\n  border-radius: 8px;\n  background: #f3f4f6;\n  animation: _ngcontent-%COMP%_ul-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_ul-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ul-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.ul-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ul-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ul-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.ul-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 14px !important;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ul-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.ul-user__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.ul-user__email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.ul-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.ul-avatar[data-role=superadmin][_ngcontent-%COMP%] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-avatar[data-role=adminrh][_ngcontent-%COMP%] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-avatar[data-role=formateur][_ngcontent-%COMP%] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-avatar[data-role=employe][_ngcontent-%COMP%] {\n  background: #faeeda;\n  color: #633806;\n}\n.ul-avatar[data-role=default][_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-role-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ul-role-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ul-role-badge[data-role=superadmin][_ngcontent-%COMP%] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-role-badge[data-role=adminrh][_ngcontent-%COMP%] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-role-badge[data-role=formateur][_ngcontent-%COMP%] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-role-badge[data-role=employe][_ngcontent-%COMP%] {\n  background: #f1efe8;\n  color: #444441;\n}\n.ul-role-badge[data-role=default][_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-cie[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  background: #f3f4f6;\n  padding: 2px 8px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.ul-cie-none[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-statut[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n}\n.ul-statut[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ul-statut[data-s=actif][_ngcontent-%COMP%] {\n  background: #eaf3de;\n  color: #3b6d11;\n}\n.ul-statut[data-s=inactif][_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.ul-act[_ngcontent-%COMP%] {\n  padding: 4px 7px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.ul-act[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.ul-act--warn[_ngcontent-%COMP%] {\n  color: #92400e;\n  border-color: #fcd34d;\n}\n.ul-act--warn[_ngcontent-%COMP%]:hover {\n  background: #fffbeb;\n}\n.ul-act--ok[_ngcontent-%COMP%] {\n  color: #065f46;\n  border-color: #6ee7b7;\n}\n.ul-act--ok[_ngcontent-%COMP%]:hover {\n  background: #ecfdf5;\n}\n.ul-act--del[_ngcontent-%COMP%] {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ul-act--del[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.ul-pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ul-pager__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-pager__btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.ul-pager__btn[_ngcontent-%COMP%] {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ul-pager__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ul-pager__btn--active[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ul-pager__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ul-role-embed[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.ul-role-embed[_ngcontent-%COMP%]     .page-content > .d-md-flex:first-child, \n.ul-role-embed[_ngcontent-%COMP%]     .page-content > .d-block:first-child, \n.ul-role-embed[_ngcontent-%COMP%]     .d-md-flex.align-items-center.justify-content-between.mb-4 {\n  display: none !important;\n}\n.ul-role-embed[_ngcontent-%COMP%]     .page-content {\n  padding: 0 !important;\n}\n.ul-matrix-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding: 14px;\n}\n.ul-matrix[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n  font-size: 12px;\n}\n.ul-matrix[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.ul-matrix[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e5e7eb;\n  text-align: center;\n}\n.ul-matrix[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, \n.ul-matrix[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n  font-weight: 500;\n  background: #f9fafb;\n}\n.ul-matrix[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-matrix[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n.ul-matrix__group[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background: #f3f4f6 !important;\n  text-align: left !important;\n  padding-left: 12px !important;\n}\n.ul-matrix__legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-top: 10px;\n  font-size: 11px;\n  color: #9ca3af;\n}\n.ul-c-yes[_ngcontent-%COMP%] {\n  color: #3b6d11;\n  font-size: 15px;\n  font-weight: 700;\n}\n.ul-c-no[_ngcontent-%COMP%] {\n  color: #d3d1c7;\n  font-size: 15px;\n}\n.ul-c-partial[_ngcontent-%COMP%] {\n  color: #ba7517;\n  font-size: 15px;\n}\n.modal[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.45);\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=user-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserListComponent, [{
    type: Component,
    args: [{ selector: "app-user-list", standalone: true, imports: [RouterLink, FormsModule, CommonModule, CustomPaginationComponent, UserAddComponent, SuperadminRoleComponent], template: `<!-- \u2500\u2500 SHELL \u2500\u2500 -->
<div class="ul-shell">

  <!-- \u2500\u2500 TOP BAR \u2500\u2500 -->
  <div class="ul-topbar">
    <i class="isax isax-people ul-topbar__icon"></i>
    <h1 class="ul-topbar__title">Utilisateurs & r\xF4les</h1>
    <span class="ul-topbar__stats">
      {{ totalData }} utilisateur{{ totalData > 1 ? 's' : '' }}
      \xB7 {{ rolesCount }} r\xF4le{{ rolesCount > 1 ? 's' : '' }}
      \xB7 {{ entreprisesCount }} entreprise{{ entreprisesCount > 1 ? 's' : '' }}
    </span>
    <a *ngIf="entrepriseId" routerLink="/superadmin/superadmin-companymanagement"
       class="ul-back"><i class="isax isax-arrow-left-2 me-1"></i>Retour aux entreprises</a>
  </div>

  <!-- \u2500\u2500 TABS \u2500\u2500 -->
  <div class="ul-tabbar">
    <button class="ul-tab" [class.ul-tab--active]="activeTab === 'users'"
            (click)="setTab('users')">Utilisateurs</button>
    <button class="ul-tab" [class.ul-tab--active]="activeTab === 'roles'"
            (click)="setTab('roles')">R\xF4les & permissions</button>
    <button class="ul-tab" [class.ul-tab--active]="activeTab === 'matrix'"
            (click)="setTab('matrix')">Matrice d'acc\xE8s</button>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       TAB 1 : UTILISATEURS
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <ng-container *ngIf="activeTab === 'users'">

    <!-- Toolbar -->
    <div class="ul-toolbar">
      <div class="ul-search">
        <i class="isax isax-search-normal-1 ul-search__icon"></i>
        <input type="search" class="ul-search__input"
               placeholder="Rechercher un utilisateur..."
               [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}"
               (ngModelChange)="searchData($event)">
      </div>

      <!-- Filtre R\xF4le -->
      <div class="ul-filter-group" (clickOutside)="showRoleDropdown = false">
        <button class="ul-filter" [class.ul-filter--on]="!!selectedRoleFilter"
                (click)="showRoleDropdown = !showRoleDropdown">
          <i class="isax isax-filter"></i> R\xF4le
          <span *ngIf="selectedRoleFilter" class="ul-filter__chip">{{ selectedRoleFilter }}</span>
        </button>
        <div class="ul-dropdown" *ngIf="showRoleDropdown">
          <div class="ul-dropdown__item" (click)="setRoleFilter('')">Tous les r\xF4les</div>
          <div class="ul-dropdown__item"
               *ngFor="let r of availableRoles"
               [class.ul-dropdown__item--on]="selectedRoleFilter === r"
               (click)="setRoleFilter(r)">{{ r }}</div>
        </div>
      </div>

      <!-- Filtre Entreprise -->
      <button class="ul-filter" [class.ul-filter--on]="!!entrepriseId">
        <i class="isax isax-building"></i>
        {{ entrepriseId ? ('Entreprise #' + entrepriseId) : 'Entreprise' }}
      </button>

      <!-- Filtre Statut -->
      <div class="ul-filter-group" (clickOutside)="showStatutDropdown = false">
        <button class="ul-filter" [class.ul-filter--on]="selectedStatutFilter !== ''"
                (click)="showStatutDropdown = !showStatutDropdown">
          <i class="isax isax-tick-circle"></i> Statut
          <span *ngIf="selectedStatutFilter !== ''" class="ul-filter__chip">
            {{ selectedStatutFilter === '1' ? 'Actif' : 'Inactif' }}
          </span>
        </button>
        <div class="ul-dropdown" *ngIf="showStatutDropdown">
          <div class="ul-dropdown__item" (click)="setStatutFilter('')">Tous</div>
          <div class="ul-dropdown__item"
               [class.ul-dropdown__item--on]="selectedStatutFilter === '1'"
               (click)="setStatutFilter('1')">Actif</div>
          <div class="ul-dropdown__item"
               [class.ul-dropdown__item--on]="selectedStatutFilter === '0'"
               (click)="setStatutFilter('0')">Inactif</div>
        </div>
      </div>

      <button class="ul-import-btn" (click)="openImportDialog()">
        <i class="isax isax-import"></i> Importer
      </button>
      <button class="ul-tpl-btn" (click)="downloadTemplate()">
        <i class="isax isax-export"></i> Template
      </button>
      <button class="ul-export-btn" (click)="exportUsers()">
        <i class="isax isax-document-download"></i> Exporter
      </button>

      <button class="ul-add-btn" (click)="openNew()">
        <i class="isax isax-add"></i> Nouvel utilisateur
      </button>
    </div>

    <!-- Erreur -->
    <div *ngIf="error" class="ul-alert">
      <i class="isax isax-warning-2"></i> {{ error }}
    </div>

    <!-- Skeleton loading -->
    <div *ngIf="loading" class="ul-skeletons">
      <div *ngFor="let i of [1,2,3,4,5]" class="ul-skeleton-row"></div>
    </div>

    <!-- Tableau -->
    <table class="ul-table" *ngIf="!loading">
      <thead>
        <tr>
          <th style="width:28%">Utilisateur</th>
          <th style="width:16%">R\xF4le</th>
          <th style="width:16%">Entreprise</th>
          <th style="width:12%">Statut</th>
          <th style="width:14%">Derni\xE8re activit\xE9</th>
          <th style="width:14%">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let u of tableData; trackBy: trackById">
          <td>
            <div class="ul-user">
              <div class="ul-avatar" [attr.data-role]="getRoleKey(getRoleName(u))">
                {{ getInitials(u) }}
              </div>
              <div>
                <div class="ul-user__name">{{ getDisplayName(u) }}</div>
                <div class="ul-user__email">{{ u.email }}</div>
              </div>
            </div>
          </td>
          <td>
            <span class="ul-role-badge" [attr.data-role]="getRoleKey(getRoleName(u))">
              <i [class]="'isax ' + getRoleIcon(getRoleName(u))"></i>
              {{ getRoleName(u) }}
            </span>
          </td>
          <td>
            <span *ngIf="u.entreprise?.nom" class="ul-cie">{{ u.entreprise!.nom }}</span>
            <span *ngIf="!u.entreprise?.nom" class="ul-cie-none">\u2014 Plateforme</span>
          </td>
          <td>
            <span class="ul-statut" [attr.data-s]="u.statut === 1 ? 'actif' : 'inactif'">
              <i [class]="'isax ' + (u.statut === 1 ? 'isax-tick-circle' : 'isax-minus-cirlce')"></i>
              {{ u.statut === 1 ? 'Actif' : 'Inactif' }}
            </span>
          </td>
          <td class="ul-date">{{ formatDate(u.updated_at) }}</td>
          <td>
            <div class="ul-actions">
              <button class="ul-act" title="Modifier" (click)="editUser(u)">
                <i class="isax isax-edit"></i>
              </button>
              <button class="ul-act ul-act--warn" *ngIf="u.statut === 1"
                      title="Archiver" (click)="archiveUser(u)">
                <i class="isax isax-archive"></i>
              </button>
              <button class="ul-act ul-act--ok" *ngIf="u.statut === 0"
                      title="R\xE9activer" (click)="reactivateUser(u)">
                <i class="isax isax-refresh"></i>
              </button>
              <button class="ul-act ul-act--del" title="Supprimer" (click)="deleteUser(u.id)">
                <i class="isax isax-trash"></i>
              </button>
            </div>
          </td>
        </tr>
        <tr *ngIf="!tableData.length">
          <td colspan="6" class="ul-empty">
            <i class="isax isax-people d-block mb-2" style="font-size:2rem;"></i>
            Aucun utilisateur trouv\xE9
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div class="ul-pager" *ngIf="!loading && totalData > pageSize">
      <span class="ul-pager__info">
        {{ skip + 1 }}\u2013{{ skip + tableData.length }} sur {{ totalData }}
      </span>
      <div class="ul-pager__btns">
        <button class="ul-pager__btn" [disabled]="currentPage === 1"
                (click)="onPageChange(currentPage - 1)">
          <i class="isax isax-arrow-left-2"></i>
        </button>
        <button *ngFor="let p of pageSelection; let i = index"
                class="ul-pager__btn"
                [class.ul-pager__btn--active]="currentPage === i + 1"
                (click)="onPageChange(i + 1)">{{ i + 1 }}</button>
        <button class="ul-pager__btn"
                [disabled]="currentPage === pageSelection.length || !pageSelection.length"
                (click)="onPageChange(currentPage + 1)">
          <i class="isax isax-arrow-right-3"></i>
        </button>
      </div>
    </div>

  </ng-container>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       TAB 2 : R\xD4LES & PERMISSIONS
       Embedded SuperadminRoleComponent (full CRUD)
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="ul-role-embed" *ngIf="activeTab === 'roles'">
    <app-superadmin-role></app-superadmin-role>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       TAB 3 : MATRICE D'ACC\xC8S
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="ul-matrix-wrap" *ngIf="activeTab === 'matrix'">
    <table class="ul-matrix">
      <thead>
        <tr>
          <th style="width:38%">Permission</th>
          <th>Superadmin</th>
          <th>Admin RH</th>
          <th>Formateur</th>
          <th>Employ\xE9</th>
        </tr>
      </thead>
      <tbody>
        <!-- Gestion des entreprises -->
        <tr><td class="ul-matrix__group" colspan="5">Gestion des entreprises</td></tr>
        <tr>
          <td>Cr\xE9er / supprimer une entreprise</td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
        </tr>
        <tr>
          <td>Voir toutes les entreprises</td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
        </tr>
        <!-- Gestion des utilisateurs -->
        <tr><td class="ul-matrix__group" colspan="5">Gestion des utilisateurs</td></tr>
        <tr>
          <td>Cr\xE9er / modifier un utilisateur</td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-partial">\u25D0</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
        </tr>
        <tr>
          <td>Attribuer un r\xF4le</td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
        </tr>
        <tr>
          <td>D\xE9sactiver un compte</td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-partial">\u25D0</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
        </tr>
        <!-- Formations & contenus -->
        <tr><td class="ul-matrix__group" colspan="5">Formations & contenus</td></tr>
        <tr>
          <td>Cr\xE9er une formation</td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
        </tr>
        <tr>
          <td>Valider une demande de formation</td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
        </tr>
        <tr>
          <td>Acc\xE9der \xE0 ses formations</td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-yes">\u2713</span></td>
        </tr>
        <tr>
          <td>G\xE9rer les quiz</td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
        </tr>
        <!-- Suivi & statistiques -->
        <tr><td class="ul-matrix__group" colspan="5">Suivi & statistiques</td></tr>
        <tr>
          <td>Statistiques globales plateforme</td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
        </tr>
        <tr>
          <td>Statistiques de son entreprise</td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
          <td><span class="ul-c-no">\u2014</span></td>
        </tr>
        <tr>
          <td>Voir sa propre progression</td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-yes">\u2713</span></td>
        </tr>
        <tr>
          <td>T\xE9l\xE9charger un certificat</td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-yes">\u2713</span></td>
          <td><span class="ul-c-yes">\u2713</span></td>
        </tr>
      </tbody>
    </table>
    <div class="ul-matrix__legend">
      <span><span class="ul-c-yes">\u2713</span> Acc\xE8s complet</span>
      <span><span class="ul-c-partial">\u25D0</span> Acc\xE8s limit\xE9 (son p\xE9rim\xE8tre)</span>
      <span><span class="ul-c-no">\u2014</span> Aucun acc\xE8s</span>
    </div>
  </div>

</div>

<!-- \u2500\u2500 MODAL IMPORT \u2500\u2500 -->
<div class="modal"
     [class.show]="showImportDialog"
     [style.display]="showImportDialog ? 'block' : 'none'"
     tabindex="-1"
     *ngIf="showImportDialog"
     role="dialog">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"><i class="isax isax-import me-2"></i>Importer des utilisateurs</h5>
        <button type="button" class="btn-close" (click)="closeImportDialog()"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label for="fileInput" class="form-label">Fichier Excel / CSV</label>
          <input id="fileInput" type="file" class="form-control"
                 (change)="onFileSelected($event)" accept=".xlsx,.xls,.csv" [disabled]="isImporting">
          <div class="form-text">Formats accept\xE9s : .xlsx, .xls, .csv</div>
        </div>
        <div *ngIf="selectedFile" class="alert alert-info">
          <strong>{{ selectedFile.name }}</strong>
          <small class="text-muted ms-1">({{ (selectedFile.size / 1024 / 1024).toFixed(2) }} MB)</small>
        </div>
        <div *ngIf="isImporting" class="mb-3">
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated"
                 role="progressbar" [style.width.%]="importProgress"
                 [attr.aria-valuenow]="importProgress" aria-valuemin="0" aria-valuemax="100">
              {{ importProgress }}%
            </div>
          </div>
        </div>
        <div class="alert alert-warning">
          <h6 class="alert-heading"><i class="isax isax-warning-2 me-1"></i>Instructions</h6>
          <ul class="mb-0 mt-2 small">
            <li>T\xE9l\xE9chargez d'abord le template pour voir la structure requise</li>
            <li>Colonnes obligatoires : <strong>nom, prenom, email, role_id</strong></li>
            <li>Les utilisateurs avec le m\xEAme email seront mis \xE0 jour</li>
          </ul>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" (click)="closeImportDialog()" [disabled]="isImporting">Annuler</button>
        <button class="btn btn-primary" (click)="importUsers()" [disabled]="!selectedFile || isImporting">
          <span *ngIf="isImporting" class="spinner-border spinner-border-sm me-1"></span>
          {{ isImporting ? 'Import en cours...' : 'Importer' }}
        </button>
      </div>
    </div>
  </div>
</div>
<div class="modal-backdrop fade" [class.show]="showImportDialog" *ngIf="showImportDialog"></div>

<!-- \u2500\u2500 USER ADD/EDIT \u2500\u2500 -->
<app-user-add
  [visible]="userDialog"
  [isEditMode]="isEditMode"
  [userData]="selectedUser"
  (onClose)="hideDialog()"
  (onSave)="refreshData()">
</app-user-add>
`, styles: ["/* src/app/features/superadmin/user/user-list.component.scss */\n.ul-shell {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ul-topbar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.ul-topbar__icon {\n  font-size: 16px;\n  color: #9ca3af;\n}\n.ul-topbar__title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n  flex: 1;\n}\n.ul-topbar__stats {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-back {\n  font-size: 12px;\n  color: #185FA5;\n  text-decoration: none;\n}\n.ul-back:hover {\n  text-decoration: underline;\n}\n.ul-tabbar {\n  display: flex;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-tab {\n  padding: 10px 18px;\n  font-size: 13px;\n  font-weight: 400;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ul-tab--active {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ul-tab:hover:not(.ul-tab--active) {\n  color: #111827;\n}\n.ul-toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-search {\n  position: relative;\n  flex: 1;\n  min-width: 180px;\n  max-width: 240px;\n}\n.ul-search__icon {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ul-search__input {\n  width: 100%;\n  padding: 6px 10px 6px 32px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ul-search__input:focus {\n  border-color: #069b8f;\n  background: #fff;\n}\n.ul-filter-group {\n  position: relative;\n}\n.ul-filter {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 11px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: border-color 0.15s, background 0.15s;\n}\n.ul-filter:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ul-filter--on {\n  border-color: #185FA5;\n  color: #185FA5;\n  background: #e6f1fb;\n}\n.ul-filter__chip {\n  padding: 1px 6px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 10px;\n  font-size: 10px;\n}\n.ul-filter i {\n  font-size: 13px;\n}\n.ul-add-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #185FA5;\n  background: #e6f1fb;\n  border: 1px solid #185FA5;\n  border-radius: 8px;\n  cursor: pointer;\n  margin-left: auto;\n  transition: background 0.15s;\n}\n.ul-add-btn:hover {\n  background: rgb(208.0172413793, 228.6896551724, 247.4827586207);\n}\n.ul-add-btn i {\n  font-size: 13px;\n}\n.ul-import-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #BA7517,\n      #D4941E);\n  border: 1px solid #8C5410;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: opacity 0.15s;\n}\n.ul-import-btn:hover {\n  opacity: 0.88;\n}\n.ul-import-btn i {\n  font-size: 13px;\n}\n.ul-tpl-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #006F78;\n  background: #E6F4F5;\n  border: 1px solid #9DD4D8;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.ul-tpl-btn:hover {\n  background: rgb(215.4285714286, 237.5885714286, 239.1714285714);\n}\n.ul-tpl-btn i {\n  font-size: 13px;\n}\n.ul-export-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #006F78,\n      #00949F);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  box-shadow: 0 2px 6px rgba(0, 111, 120, 0.3);\n  transition: opacity 0.15s, transform 0.1s;\n}\n.ul-export-btn:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.ul-export-btn:active {\n  transform: translateY(0);\n}\n.ul-export-btn i {\n  font-size: 13px;\n}\n.ul-dropdown {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  z-index: 200;\n  min-width: 160px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.ul-dropdown__item {\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.ul-dropdown__item:hover {\n  background: #f9fafb;\n}\n.ul-dropdown__item--on {\n  color: #185FA5;\n  font-weight: 500;\n  background: #e6f1fb;\n}\n.ul-alert {\n  margin: 10px 14px 0;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ul-skeletons {\n  padding: 10px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ul-skeleton-row {\n  height: 40px;\n  border-radius: 8px;\n  background: #f3f4f6;\n  animation: ul-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes ul-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ul-table {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.ul-table th {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-table td {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ul-table tr:last-child td {\n  border-bottom: none;\n}\n.ul-table tr:hover td {\n  background: #f9fafb;\n}\n.ul-empty {\n  text-align: center;\n  padding: 40px 14px !important;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ul-user {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.ul-user__name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.ul-user__email {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.ul-avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.ul-avatar[data-role=superadmin] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-avatar[data-role=adminrh] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-avatar[data-role=formateur] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-avatar[data-role=employe] {\n  background: #faeeda;\n  color: #633806;\n}\n.ul-avatar[data-role=default] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-role-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ul-role-badge i {\n  font-size: 11px;\n}\n.ul-role-badge[data-role=superadmin] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-role-badge[data-role=adminrh] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-role-badge[data-role=formateur] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-role-badge[data-role=employe] {\n  background: #f1efe8;\n  color: #444441;\n}\n.ul-role-badge[data-role=default] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-cie {\n  font-size: 11px;\n  color: #4b5563;\n  background: #f3f4f6;\n  padding: 2px 8px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.ul-cie-none {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-statut {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n}\n.ul-statut i {\n  font-size: 11px;\n}\n.ul-statut[data-s=actif] {\n  background: #eaf3de;\n  color: #3b6d11;\n}\n.ul-statut[data-s=inactif] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-date {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-actions {\n  display: flex;\n  gap: 5px;\n}\n.ul-act {\n  padding: 4px 7px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.ul-act:hover {\n  background: #f3f4f6;\n}\n.ul-act--warn {\n  color: #92400e;\n  border-color: #fcd34d;\n}\n.ul-act--warn:hover {\n  background: #fffbeb;\n}\n.ul-act--ok {\n  color: #065f46;\n  border-color: #6ee7b7;\n}\n.ul-act--ok:hover {\n  background: #ecfdf5;\n}\n.ul-act--del {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ul-act--del:hover {\n  background: #fef2f2;\n}\n.ul-pager {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ul-pager__info {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-pager__btns {\n  display: flex;\n  gap: 4px;\n}\n.ul-pager__btn {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ul-pager__btn:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ul-pager__btn--active {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ul-pager__btn:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ul-role-embed {\n  padding: 0;\n}\n.ul-role-embed ::ng-deep .page-content > .d-md-flex:first-child,\n.ul-role-embed ::ng-deep .page-content > .d-block:first-child,\n.ul-role-embed ::ng-deep .d-md-flex.align-items-center.justify-content-between.mb-4 {\n  display: none !important;\n}\n.ul-role-embed ::ng-deep .page-content {\n  padding: 0 !important;\n}\n.ul-matrix-wrap {\n  overflow-x: auto;\n  padding: 14px;\n}\n.ul-matrix {\n  border-collapse: collapse;\n  width: 100%;\n  font-size: 12px;\n}\n.ul-matrix th,\n.ul-matrix td {\n  padding: 8px 12px;\n  border: 1px solid #e5e7eb;\n  text-align: center;\n}\n.ul-matrix th:first-child,\n.ul-matrix td:first-child {\n  text-align: left;\n  font-weight: 500;\n  background: #f9fafb;\n}\n.ul-matrix thead th {\n  background: #f9fafb;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-matrix thead th:first-child {\n  text-align: left;\n}\n.ul-matrix__group {\n  font-size: 10px;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background: #f3f4f6 !important;\n  text-align: left !important;\n  padding-left: 12px !important;\n}\n.ul-matrix__legend {\n  display: flex;\n  gap: 16px;\n  margin-top: 10px;\n  font-size: 11px;\n  color: #9ca3af;\n}\n.ul-c-yes {\n  color: #3b6d11;\n  font-size: 15px;\n  font-weight: 700;\n}\n.ul-c-no {\n  color: #d3d1c7;\n  font-size: 15px;\n}\n.ul-c-partial {\n  color: #ba7517;\n  font-size: 15px;\n}\n.modal {\n  background: rgba(0, 0, 0, 0.45);\n}\n.modal-content {\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=user-list.component.css.map */\n"] }]
  }], () => [{ type: UserService }, { type: ActivatedRoute }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserListComponent, { className: "UserListComponent", filePath: "src/app/features/superadmin/user/user-list.component.ts", lineNumber: 19 });
})();
export {
  UserListComponent
};
//# sourceMappingURL=chunk-KO42EH2N.js.map
