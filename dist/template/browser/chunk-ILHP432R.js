import {
  SuperadminRoleComponent
} from "./chunk-NW4LQ4KK.js";
import "./chunk-5V3WBW4C.js";
import {
  UserAddComponent
} from "./chunk-YTY5ODTN.js";
import {
  httpErrorMessage
} from "./chunk-RL3SOXDI.js";
import {
  UserService
} from "./chunk-3PJKQEYW.js";
import "./chunk-AOQ7MVQS.js";
import {
  CustomPaginationComponent
} from "./chunk-QBIBOWET.js";
import "./chunk-M25A5D3F.js";
import "./chunk-HPF6XDYM.js";
import "./chunk-GD4TWLVQ.js";
import "./chunk-K7E3GT3E.js";
import "./chunk-OVFIVR43.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-IKOSZIEY.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-5DIP3EXV.js";
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
} from "./chunk-VTSSTHJF.js";
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
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89)(2, "h2", 90);
    \u0275\u0275element(3, "i", 91);
    \u0275\u0275text(4, "Matrice des Habilitations ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 92);
    \u0275\u0275text(6, " Chaque r\xF4le h\xE9rite des acc\xE8s de tous les r\xF4les qui lui sont inf\xE9rieurs dans la hi\xE9rarchie. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 93)(8, "div", 94)(9, "span", 95);
    \u0275\u0275text(10, "Super Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "i", 96);
    \u0275\u0275elementStart(12, "span", 97);
    \u0275\u0275text(13, "Superadmin Holding");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "i", 96);
    \u0275\u0275elementStart(15, "span", 97);
    \u0275\u0275text(16, "Admin RH Holding");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "i", 96);
    \u0275\u0275elementStart(18, "span", 98);
    \u0275\u0275text(19, "Responsable RH");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "i", 96);
    \u0275\u0275elementStart(21, "span", 98);
    \u0275\u0275text(22, "Admin RH");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "i", 96);
    \u0275\u0275elementStart(24, "span", 99);
    \u0275\u0275text(25, "Admin IT");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "i", 96);
    \u0275\u0275elementStart(27, "span", 100);
    \u0275\u0275text(28, "Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "i", 96);
    \u0275\u0275elementStart(30, "span", 101);
    \u0275\u0275text(31, "Formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "i", 96);
    \u0275\u0275elementStart(33, "span", 102);
    \u0275\u0275text(34, "Employ\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 103)(36, "table", 104)(37, "thead")(38, "tr")(39, "th", 105);
    \u0275\u0275text(40, "Permission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th", 106)(42, "span", 107);
    \u0275\u0275text(43, "SA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "th", 108)(45, "span", 109);
    \u0275\u0275text(46, "SH");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "th", 110)(48, "span", 109);
    \u0275\u0275text(49, "ARH-H");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "th", 111)(51, "span", 112);
    \u0275\u0275text(52, "RRH");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "th", 113)(54, "span", 112);
    \u0275\u0275text(55, "ARH");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "th", 114)(57, "span", 115);
    \u0275\u0275text(58, "AIT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "th", 116)(60, "span", 117);
    \u0275\u0275text(61, "MGR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "th", 118)(63, "span", 119);
    \u0275\u0275text(64, "FOR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "th", 120)(66, "span", 121);
    \u0275\u0275text(67, "EMP");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "tr", 122)(69, "td", 123);
    \u0275\u0275text(70, "R\xF4les (ordre hi\xE9rarchique \u2193)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "td", 124);
    \u0275\u0275text(72, "Super Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "td", 124);
    \u0275\u0275text(74, "Superadmin Holding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "td", 124);
    \u0275\u0275text(76, "Admin RH Holding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "td", 124);
    \u0275\u0275text(78, "Responsable RH");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "td", 124);
    \u0275\u0275text(80, "Admin RH");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "td", 124);
    \u0275\u0275text(82, "Admin IT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "td", 124);
    \u0275\u0275text(84, "Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "td", 124);
    \u0275\u0275text(86, "Formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "td", 124);
    \u0275\u0275text(88, "Employ\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(89, "tbody")(90, "tr")(91, "td", 125);
    \u0275\u0275text(92, "Plateforme & Syst\xE8me");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "tr")(94, "td");
    \u0275\u0275text(95, "Acc\xE8s total plateforme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "td")(97, "span", 126);
    \u0275\u0275text(98, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "td")(100, "span", 127);
    \u0275\u0275text(101, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "td")(103, "span", 127);
    \u0275\u0275text(104, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "td")(106, "span", 127);
    \u0275\u0275text(107, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "td")(109, "span", 127);
    \u0275\u0275text(110, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "td")(112, "span", 127);
    \u0275\u0275text(113, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "td")(115, "span", 127);
    \u0275\u0275text(116, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "td")(118, "span", 127);
    \u0275\u0275text(119, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "td")(121, "span", 127);
    \u0275\u0275text(122, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(123, "tr")(124, "td");
    \u0275\u0275text(125, "G\xE9rer la configuration syst\xE8me");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "td")(127, "span", 126);
    \u0275\u0275text(128, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "td")(130, "span", 127);
    \u0275\u0275text(131, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "td")(133, "span", 127);
    \u0275\u0275text(134, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "td")(136, "span", 127);
    \u0275\u0275text(137, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(138, "td")(139, "span", 127);
    \u0275\u0275text(140, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(141, "td")(142, "span", 126);
    \u0275\u0275text(143, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(144, "td")(145, "span", 127);
    \u0275\u0275text(146, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "td")(148, "span", 127);
    \u0275\u0275text(149, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(150, "td")(151, "span", 127);
    \u0275\u0275text(152, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(153, "tr")(154, "td");
    \u0275\u0275text(155, "Voir les logs syst\xE8me");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "td")(157, "span", 126);
    \u0275\u0275text(158, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(159, "td")(160, "span", 127);
    \u0275\u0275text(161, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(162, "td")(163, "span", 127);
    \u0275\u0275text(164, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(165, "td")(166, "span", 127);
    \u0275\u0275text(167, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(168, "td")(169, "span", 127);
    \u0275\u0275text(170, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(171, "td")(172, "span", 126);
    \u0275\u0275text(173, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(174, "td")(175, "span", 127);
    \u0275\u0275text(176, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(177, "td")(178, "span", 127);
    \u0275\u0275text(179, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(180, "td")(181, "span", 127);
    \u0275\u0275text(182, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(183, "tr")(184, "td", 125);
    \u0275\u0275text(185, "Gestion des entreprises");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(186, "tr")(187, "td");
    \u0275\u0275text(188, "Cr\xE9er / supprimer une entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(189, "td")(190, "span", 126);
    \u0275\u0275text(191, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(192, "td")(193, "span", 126);
    \u0275\u0275text(194, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(195, "td")(196, "span", 127);
    \u0275\u0275text(197, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(198, "td")(199, "span", 127);
    \u0275\u0275text(200, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(201, "td")(202, "span", 127);
    \u0275\u0275text(203, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(204, "td")(205, "span", 127);
    \u0275\u0275text(206, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(207, "td")(208, "span", 127);
    \u0275\u0275text(209, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(210, "td")(211, "span", 127);
    \u0275\u0275text(212, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(213, "td")(214, "span", 127);
    \u0275\u0275text(215, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(216, "tr")(217, "td");
    \u0275\u0275text(218, "Modifier les param\xE8tres d'une entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(219, "td")(220, "span", 126);
    \u0275\u0275text(221, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(222, "td")(223, "span", 126);
    \u0275\u0275text(224, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(225, "td")(226, "span", 126);
    \u0275\u0275text(227, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(228, "td")(229, "span", 128);
    \u0275\u0275text(230, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(231, "td")(232, "span", 128);
    \u0275\u0275text(233, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(234, "td")(235, "span", 127);
    \u0275\u0275text(236, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(237, "td")(238, "span", 127);
    \u0275\u0275text(239, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(240, "td")(241, "span", 127);
    \u0275\u0275text(242, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(243, "td")(244, "span", 127);
    \u0275\u0275text(245, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(246, "tr")(247, "td");
    \u0275\u0275text(248, "Voir toutes les entreprises (multi-groupe)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(249, "td")(250, "span", 126);
    \u0275\u0275text(251, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(252, "td")(253, "span", 126);
    \u0275\u0275text(254, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(255, "td")(256, "span", 126);
    \u0275\u0275text(257, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(258, "td")(259, "span", 127);
    \u0275\u0275text(260, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(261, "td")(262, "span", 127);
    \u0275\u0275text(263, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(264, "td")(265, "span", 127);
    \u0275\u0275text(266, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(267, "td")(268, "span", 127);
    \u0275\u0275text(269, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(270, "td")(271, "span", 127);
    \u0275\u0275text(272, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(273, "td")(274, "span", 127);
    \u0275\u0275text(275, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(276, "tr")(277, "td", 125);
    \u0275\u0275text(278, "Gestion des r\xF4les & permissions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(279, "tr")(280, "td");
    \u0275\u0275text(281, "Cr\xE9er / supprimer un r\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(282, "td")(283, "span", 126);
    \u0275\u0275text(284, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(285, "td")(286, "span", 126);
    \u0275\u0275text(287, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(288, "td")(289, "span", 126);
    \u0275\u0275text(290, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(291, "td")(292, "span", 128);
    \u0275\u0275text(293, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(294, "td")(295, "span", 128);
    \u0275\u0275text(296, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(297, "td")(298, "span", 127);
    \u0275\u0275text(299, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(300, "td")(301, "span", 127);
    \u0275\u0275text(302, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(303, "td")(304, "span", 127);
    \u0275\u0275text(305, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(306, "td")(307, "span", 127);
    \u0275\u0275text(308, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(309, "tr")(310, "td");
    \u0275\u0275text(311, "Attribuer un r\xF4le \xE0 un utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(312, "td")(313, "span", 126);
    \u0275\u0275text(314, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(315, "td")(316, "span", 126);
    \u0275\u0275text(317, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(318, "td")(319, "span", 126);
    \u0275\u0275text(320, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(321, "td")(322, "span", 126);
    \u0275\u0275text(323, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(324, "td")(325, "span", 126);
    \u0275\u0275text(326, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(327, "td")(328, "span", 127);
    \u0275\u0275text(329, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(330, "td")(331, "span", 127);
    \u0275\u0275text(332, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(333, "td")(334, "span", 127);
    \u0275\u0275text(335, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(336, "td")(337, "span", 127);
    \u0275\u0275text(338, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(339, "tr")(340, "td", 125);
    \u0275\u0275text(341, "Gestion des utilisateurs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(342, "tr")(343, "td");
    \u0275\u0275text(344, "Cr\xE9er / modifier un utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(345, "td")(346, "span", 126);
    \u0275\u0275text(347, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(348, "td")(349, "span", 126);
    \u0275\u0275text(350, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(351, "td")(352, "span", 126);
    \u0275\u0275text(353, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(354, "td")(355, "span", 126);
    \u0275\u0275text(356, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(357, "td")(358, "span", 126);
    \u0275\u0275text(359, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(360, "td")(361, "span", 127);
    \u0275\u0275text(362, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(363, "td")(364, "span", 127);
    \u0275\u0275text(365, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(366, "td")(367, "span", 127);
    \u0275\u0275text(368, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(369, "td")(370, "span", 127);
    \u0275\u0275text(371, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(372, "tr")(373, "td");
    \u0275\u0275text(374, "Supprimer un utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(375, "td")(376, "span", 126);
    \u0275\u0275text(377, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(378, "td")(379, "span", 126);
    \u0275\u0275text(380, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(381, "td")(382, "span", 126);
    \u0275\u0275text(383, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(384, "td")(385, "span", 126);
    \u0275\u0275text(386, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(387, "td")(388, "span", 126);
    \u0275\u0275text(389, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(390, "td")(391, "span", 127);
    \u0275\u0275text(392, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(393, "td")(394, "span", 127);
    \u0275\u0275text(395, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(396, "td")(397, "span", 127);
    \u0275\u0275text(398, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(399, "td")(400, "span", 127);
    \u0275\u0275text(401, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(402, "tr")(403, "td");
    \u0275\u0275text(404, "Importer / exporter des utilisateurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(405, "td")(406, "span", 126);
    \u0275\u0275text(407, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(408, "td")(409, "span", 126);
    \u0275\u0275text(410, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(411, "td")(412, "span", 126);
    \u0275\u0275text(413, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(414, "td")(415, "span", 126);
    \u0275\u0275text(416, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(417, "td")(418, "span", 126);
    \u0275\u0275text(419, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(420, "td")(421, "span", 127);
    \u0275\u0275text(422, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(423, "td")(424, "span", 127);
    \u0275\u0275text(425, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(426, "td")(427, "span", 127);
    \u0275\u0275text(428, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(429, "td")(430, "span", 127);
    \u0275\u0275text(431, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(432, "tr")(433, "td");
    \u0275\u0275text(434, "D\xE9sactiver / archiver un compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(435, "td")(436, "span", 126);
    \u0275\u0275text(437, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(438, "td")(439, "span", 126);
    \u0275\u0275text(440, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(441, "td")(442, "span", 126);
    \u0275\u0275text(443, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(444, "td")(445, "span", 126);
    \u0275\u0275text(446, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(447, "td")(448, "span", 126);
    \u0275\u0275text(449, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(450, "td")(451, "span", 127);
    \u0275\u0275text(452, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(453, "td")(454, "span", 127);
    \u0275\u0275text(455, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(456, "td")(457, "span", 127);
    \u0275\u0275text(458, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(459, "td")(460, "span", 127);
    \u0275\u0275text(461, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(462, "tr")(463, "td", 125);
    \u0275\u0275text(464, "Formations & contenus");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(465, "tr")(466, "td");
    \u0275\u0275text(467, "Cr\xE9er / publier une formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(468, "td")(469, "span", 126);
    \u0275\u0275text(470, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(471, "td")(472, "span", 126);
    \u0275\u0275text(473, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(474, "td")(475, "span", 128);
    \u0275\u0275text(476, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(477, "td")(478, "span", 127);
    \u0275\u0275text(479, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(480, "td")(481, "span", 127);
    \u0275\u0275text(482, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(483, "td")(484, "span", 127);
    \u0275\u0275text(485, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(486, "td")(487, "span", 127);
    \u0275\u0275text(488, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(489, "td")(490, "span", 126);
    \u0275\u0275text(491, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(492, "td")(493, "span", 127);
    \u0275\u0275text(494, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(495, "tr")(496, "td");
    \u0275\u0275text(497, "Assigner une formation \xE0 un utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(498, "td")(499, "span", 126);
    \u0275\u0275text(500, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(501, "td")(502, "span", 126);
    \u0275\u0275text(503, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(504, "td")(505, "span", 126);
    \u0275\u0275text(506, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(507, "td")(508, "span", 126);
    \u0275\u0275text(509, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(510, "td")(511, "span", 126);
    \u0275\u0275text(512, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(513, "td")(514, "span", 127);
    \u0275\u0275text(515, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(516, "td")(517, "span", 126);
    \u0275\u0275text(518, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(519, "td")(520, "span", 127);
    \u0275\u0275text(521, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(522, "td")(523, "span", 127);
    \u0275\u0275text(524, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(525, "tr")(526, "td");
    \u0275\u0275text(527, "Valider une demande de formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(528, "td")(529, "span", 126);
    \u0275\u0275text(530, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(531, "td")(532, "span", 126);
    \u0275\u0275text(533, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(534, "td")(535, "span", 126);
    \u0275\u0275text(536, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(537, "td")(538, "span", 126);
    \u0275\u0275text(539, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(540, "td")(541, "span", 126);
    \u0275\u0275text(542, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(543, "td")(544, "span", 127);
    \u0275\u0275text(545, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(546, "td")(547, "span", 126);
    \u0275\u0275text(548, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(549, "td")(550, "span", 127);
    \u0275\u0275text(551, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(552, "td")(553, "span", 127);
    \u0275\u0275text(554, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(555, "tr")(556, "td");
    \u0275\u0275text(557, "Cr\xE9er / g\xE9rer les quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(558, "td")(559, "span", 126);
    \u0275\u0275text(560, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(561, "td")(562, "span", 126);
    \u0275\u0275text(563, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(564, "td")(565, "span", 127);
    \u0275\u0275text(566, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(567, "td")(568, "span", 127);
    \u0275\u0275text(569, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(570, "td")(571, "span", 127);
    \u0275\u0275text(572, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(573, "td")(574, "span", 127);
    \u0275\u0275text(575, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(576, "td")(577, "span", 127);
    \u0275\u0275text(578, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(579, "td")(580, "span", 126);
    \u0275\u0275text(581, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(582, "td")(583, "span", 127);
    \u0275\u0275text(584, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(585, "tr")(586, "td");
    \u0275\u0275text(587, "Acc\xE9der \xE0 ses formations assign\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(588, "td")(589, "span", 126);
    \u0275\u0275text(590, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(591, "td")(592, "span", 126);
    \u0275\u0275text(593, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(594, "td")(595, "span", 126);
    \u0275\u0275text(596, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(597, "td")(598, "span", 126);
    \u0275\u0275text(599, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(600, "td")(601, "span", 126);
    \u0275\u0275text(602, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(603, "td")(604, "span", 126);
    \u0275\u0275text(605, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(606, "td")(607, "span", 126);
    \u0275\u0275text(608, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(609, "td")(610, "span", 126);
    \u0275\u0275text(611, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(612, "td")(613, "span", 126);
    \u0275\u0275text(614, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(615, "tr")(616, "td", 125);
    \u0275\u0275text(617, "Sessions de formation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(618, "tr")(619, "td");
    \u0275\u0275text(620, "Cr\xE9er / modifier une session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(621, "td")(622, "span", 126);
    \u0275\u0275text(623, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(624, "td")(625, "span", 126);
    \u0275\u0275text(626, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(627, "td")(628, "span", 126);
    \u0275\u0275text(629, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(630, "td")(631, "span", 126);
    \u0275\u0275text(632, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(633, "td")(634, "span", 126);
    \u0275\u0275text(635, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(636, "td")(637, "span", 127);
    \u0275\u0275text(638, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(639, "td")(640, "span", 127);
    \u0275\u0275text(641, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(642, "td")(643, "span", 126);
    \u0275\u0275text(644, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(645, "td")(646, "span", 127);
    \u0275\u0275text(647, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(648, "tr")(649, "td");
    \u0275\u0275text(650, "Inscrire des participants \xE0 une session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(651, "td")(652, "span", 126);
    \u0275\u0275text(653, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(654, "td")(655, "span", 126);
    \u0275\u0275text(656, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(657, "td")(658, "span", 126);
    \u0275\u0275text(659, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(660, "td")(661, "span", 126);
    \u0275\u0275text(662, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(663, "td")(664, "span", 126);
    \u0275\u0275text(665, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(666, "td")(667, "span", 127);
    \u0275\u0275text(668, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(669, "td")(670, "span", 127);
    \u0275\u0275text(671, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(672, "td")(673, "span", 128);
    \u0275\u0275text(674, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(675, "td")(676, "span", 127);
    \u0275\u0275text(677, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(678, "tr")(679, "td", 125);
    \u0275\u0275text(680, "Suivi & statistiques");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(681, "tr")(682, "td");
    \u0275\u0275text(683, "Statistiques globales plateforme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(684, "td")(685, "span", 126);
    \u0275\u0275text(686, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(687, "td")(688, "span", 126);
    \u0275\u0275text(689, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(690, "td")(691, "span", 128);
    \u0275\u0275text(692, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(693, "td")(694, "span", 127);
    \u0275\u0275text(695, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(696, "td")(697, "span", 127);
    \u0275\u0275text(698, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(699, "td")(700, "span", 127);
    \u0275\u0275text(701, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(702, "td")(703, "span", 127);
    \u0275\u0275text(704, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(705, "td")(706, "span", 127);
    \u0275\u0275text(707, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(708, "td")(709, "span", 127);
    \u0275\u0275text(710, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(711, "tr")(712, "td");
    \u0275\u0275text(713, "Statistiques multi-entreprises (groupe)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(714, "td")(715, "span", 126);
    \u0275\u0275text(716, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(717, "td")(718, "span", 126);
    \u0275\u0275text(719, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(720, "td")(721, "span", 126);
    \u0275\u0275text(722, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(723, "td")(724, "span", 127);
    \u0275\u0275text(725, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(726, "td")(727, "span", 127);
    \u0275\u0275text(728, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(729, "td")(730, "span", 127);
    \u0275\u0275text(731, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(732, "td")(733, "span", 127);
    \u0275\u0275text(734, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(735, "td")(736, "span", 127);
    \u0275\u0275text(737, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(738, "td")(739, "span", 127);
    \u0275\u0275text(740, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(741, "tr")(742, "td");
    \u0275\u0275text(743, "Statistiques de son entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(744, "td")(745, "span", 126);
    \u0275\u0275text(746, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(747, "td")(748, "span", 126);
    \u0275\u0275text(749, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(750, "td")(751, "span", 126);
    \u0275\u0275text(752, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(753, "td")(754, "span", 126);
    \u0275\u0275text(755, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(756, "td")(757, "span", 126);
    \u0275\u0275text(758, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(759, "td")(760, "span", 127);
    \u0275\u0275text(761, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(762, "td")(763, "span", 128);
    \u0275\u0275text(764, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(765, "td")(766, "span", 127);
    \u0275\u0275text(767, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(768, "td")(769, "span", 127);
    \u0275\u0275text(770, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(771, "tr")(772, "td");
    \u0275\u0275text(773, "Voir la progression de son \xE9quipe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(774, "td")(775, "span", 126);
    \u0275\u0275text(776, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(777, "td")(778, "span", 126);
    \u0275\u0275text(779, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(780, "td")(781, "span", 126);
    \u0275\u0275text(782, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(783, "td")(784, "span", 126);
    \u0275\u0275text(785, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(786, "td")(787, "span", 126);
    \u0275\u0275text(788, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(789, "td")(790, "span", 127);
    \u0275\u0275text(791, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(792, "td")(793, "span", 126);
    \u0275\u0275text(794, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(795, "td")(796, "span", 128);
    \u0275\u0275text(797, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(798, "td")(799, "span", 127);
    \u0275\u0275text(800, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(801, "tr")(802, "td");
    \u0275\u0275text(803, "Voir sa propre progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(804, "td")(805, "span", 126);
    \u0275\u0275text(806, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(807, "td")(808, "span", 126);
    \u0275\u0275text(809, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(810, "td")(811, "span", 126);
    \u0275\u0275text(812, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(813, "td")(814, "span", 126);
    \u0275\u0275text(815, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(816, "td")(817, "span", 126);
    \u0275\u0275text(818, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(819, "td")(820, "span", 126);
    \u0275\u0275text(821, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(822, "td")(823, "span", 126);
    \u0275\u0275text(824, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(825, "td")(826, "span", 126);
    \u0275\u0275text(827, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(828, "td")(829, "span", 126);
    \u0275\u0275text(830, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(831, "tr")(832, "td", 125);
    \u0275\u0275text(833, "Certifications");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(834, "tr")(835, "td");
    \u0275\u0275text(836, "G\xE9n\xE9rer / valider un certificat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(837, "td")(838, "span", 126);
    \u0275\u0275text(839, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(840, "td")(841, "span", 126);
    \u0275\u0275text(842, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(843, "td")(844, "span", 126);
    \u0275\u0275text(845, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(846, "td")(847, "span", 126);
    \u0275\u0275text(848, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(849, "td")(850, "span", 126);
    \u0275\u0275text(851, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(852, "td")(853, "span", 127);
    \u0275\u0275text(854, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(855, "td")(856, "span", 127);
    \u0275\u0275text(857, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(858, "td")(859, "span", 126);
    \u0275\u0275text(860, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(861, "td")(862, "span", 127);
    \u0275\u0275text(863, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(864, "tr")(865, "td");
    \u0275\u0275text(866, "T\xE9l\xE9charger son certificat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(867, "td")(868, "span", 126);
    \u0275\u0275text(869, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(870, "td")(871, "span", 126);
    \u0275\u0275text(872, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(873, "td")(874, "span", 126);
    \u0275\u0275text(875, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(876, "td")(877, "span", 126);
    \u0275\u0275text(878, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(879, "td")(880, "span", 126);
    \u0275\u0275text(881, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(882, "td")(883, "span", 126);
    \u0275\u0275text(884, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(885, "td")(886, "span", 126);
    \u0275\u0275text(887, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(888, "td")(889, "span", 126);
    \u0275\u0275text(890, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(891, "td")(892, "span", 126);
    \u0275\u0275text(893, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(894, "tr")(895, "td", 125);
    \u0275\u0275text(896, "Notifications");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(897, "tr")(898, "td");
    \u0275\u0275text(899, "Envoyer des notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(900, "td")(901, "span", 126);
    \u0275\u0275text(902, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(903, "td")(904, "span", 126);
    \u0275\u0275text(905, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(906, "td")(907, "span", 126);
    \u0275\u0275text(908, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(909, "td")(910, "span", 126);
    \u0275\u0275text(911, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(912, "td")(913, "span", 126);
    \u0275\u0275text(914, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(915, "td")(916, "span", 127);
    \u0275\u0275text(917, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(918, "td")(919, "span", 127);
    \u0275\u0275text(920, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(921, "td")(922, "span", 126);
    \u0275\u0275text(923, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(924, "td")(925, "span", 127);
    \u0275\u0275text(926, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(927, "tr")(928, "td");
    \u0275\u0275text(929, "G\xE9rer les mod\xE8les de notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(930, "td")(931, "span", 126);
    \u0275\u0275text(932, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(933, "td")(934, "span", 126);
    \u0275\u0275text(935, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(936, "td")(937, "span", 126);
    \u0275\u0275text(938, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(939, "td")(940, "span", 126);
    \u0275\u0275text(941, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(942, "td")(943, "span", 126);
    \u0275\u0275text(944, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(945, "td")(946, "span", 127);
    \u0275\u0275text(947, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(948, "td")(949, "span", 127);
    \u0275\u0275text(950, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(951, "td")(952, "span", 127);
    \u0275\u0275text(953, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(954, "td")(955, "span", 127);
    \u0275\u0275text(956, "\u2014");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(957, "div", 129)(958, "span")(959, "span", 126);
    \u0275\u0275text(960, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275text(961, " Acc\xE8s complet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(962, "span")(963, "span", 128);
    \u0275\u0275text(964, "\u25D0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(965, " Acc\xE8s limit\xE9 (son p\xE9rim\xE8tre)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(966, "span")(967, "span", 127);
    \u0275\u0275text(968, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275text(969, " Aucun acc\xE8s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(970, "div", 130);
    \u0275\u0275element(971, "i", 131);
    \u0275\u0275elementStart(972, "small", 132)(973, "strong");
    \u0275\u0275text(974, "SA");
    \u0275\u0275elementEnd();
    \u0275\u0275text(975, " = Super Admin \xB7 ");
    \u0275\u0275elementStart(976, "strong");
    \u0275\u0275text(977, "SH");
    \u0275\u0275elementEnd();
    \u0275\u0275text(978, " = Superadmin Holding \xB7 ");
    \u0275\u0275elementStart(979, "strong");
    \u0275\u0275text(980, "ARH-H");
    \u0275\u0275elementEnd();
    \u0275\u0275text(981, " = Admin RH Holding \xB7 ");
    \u0275\u0275elementStart(982, "strong");
    \u0275\u0275text(983, "RRH");
    \u0275\u0275elementEnd();
    \u0275\u0275text(984, " = Responsable RH \xB7 ");
    \u0275\u0275elementStart(985, "strong");
    \u0275\u0275text(986, "ARH");
    \u0275\u0275elementEnd();
    \u0275\u0275text(987, " = Admin RH \xB7 ");
    \u0275\u0275elementStart(988, "strong");
    \u0275\u0275text(989, "AIT");
    \u0275\u0275elementEnd();
    \u0275\u0275text(990, " = Admin IT \xB7 ");
    \u0275\u0275elementStart(991, "strong");
    \u0275\u0275text(992, "MGR");
    \u0275\u0275elementEnd();
    \u0275\u0275text(993, " = Manager \xB7 ");
    \u0275\u0275elementStart(994, "strong");
    \u0275\u0275text(995, "FOR");
    \u0275\u0275elementEnd();
    \u0275\u0275text(996, " = Formateur \xB7 ");
    \u0275\u0275elementStart(997, "strong");
    \u0275\u0275text(998, "EMP");
    \u0275\u0275elementEnd();
    \u0275\u0275text(999, " = Employ\xE9 ");
    \u0275\u0275elementEnd()()();
  }
}
function UserListComponent_div_18_ng_container_9_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 155);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedFile.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", (ctx_r1.selectedFile.size / 1024 / 1024).toFixed(2), " MB)");
  }
}
function UserListComponent_div_18_ng_container_9_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 145)(1, "div", 156)(2, "div", 157);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.importProgress, "%");
    \u0275\u0275attribute("aria-valuenow", ctx_r1.importProgress);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.importProgress, "% ");
  }
}
function UserListComponent_div_18_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 145)(2, "label", 146);
    \u0275\u0275text(3, "Fichier Excel / CSV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 147);
    \u0275\u0275listener("change", function UserListComponent_div_18_ng_container_9_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 148);
    \u0275\u0275text(6, "Formats accept\xE9s : .xlsx, .xls, .csv");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, UserListComponent_div_18_ng_container_9_div_7_Template, 5, 2, "div", 149)(8, UserListComponent_div_18_ng_container_9_div_8_Template, 4, 4, "div", 150);
    \u0275\u0275elementStart(9, "div", 151)(10, "h6", 152);
    \u0275\u0275element(11, "i", 131);
    \u0275\u0275text(12, "Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ul", 153)(14, "li");
    \u0275\u0275text(15, "T\xE9l\xE9chargez d'abord le template pour voir la structure requise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li");
    \u0275\u0275text(17, "Colonnes obligatoires : ");
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19, "nom, prenom, email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "li");
    \u0275\u0275text(21, "Colonnes optionnelles : ");
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23, "matricule, direction, role, entreprise");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "li");
    \u0275\u0275text(25, "Matricule et num\xE9ro de t\xE9l\xE9phone doivent \xEAtre uniques");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isImporting);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isImporting);
  }
}
function UserListComponent_div_18_ng_container_10_div_1_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r16);
  }
}
function UserListComponent_div_18_ng_container_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 159)(1, "h6", 160);
    \u0275\u0275element(2, "i", 161);
    \u0275\u0275text(3, "Structure du fichier invalide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 153);
    \u0275\u0275template(5, UserListComponent_div_18_ng_container_10_div_1_li_5_Template, 2, 1, "li", 162);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.importResult.headerErrors);
  }
}
function UserListComponent_div_18_ng_container_10_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 165);
    \u0275\u0275element(1, "i", 166);
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
function UserListComponent_div_18_ng_container_10_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154);
    \u0275\u0275element(1, "i", 131);
    \u0275\u0275text(2, " Aucune ligne \xE0 traiter dans le fichier. ");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_div_18_ng_container_10_ng_container_2_div_3_div_5_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(msg_r17);
  }
}
function UserListComponent_div_18_ng_container_10_ng_container_2_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 172)(1, "span", 173);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 174);
    \u0275\u0275template(4, UserListComponent_div_18_ng_container_10_ng_container_2_div_3_div_5_li_4_Template, 2, 1, "li", 162);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r18 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Ligne ", e_r18.line);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", e_r18.errors);
  }
}
function UserListComponent_div_18_ng_container_10_ng_container_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 167)(1, "div", 168);
    \u0275\u0275element(2, "i", 169);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 170);
    \u0275\u0275template(5, UserListComponent_div_18_ng_container_10_ng_container_2_div_3_div_5_Template, 5, 2, "div", 171);
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
function UserListComponent_div_18_ng_container_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UserListComponent_div_18_ng_container_10_ng_container_2_div_1_Template, 5, 2, "div", 163)(2, UserListComponent_div_18_ng_container_10_ng_container_2_div_2_Template, 3, 0, "div", 149)(3, UserListComponent_div_18_ng_container_10_ng_container_2_div_3_Template, 6, 2, "div", 164);
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
function UserListComponent_div_18_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UserListComponent_div_18_ng_container_10_div_1_Template, 6, 1, "div", 158)(2, UserListComponent_div_18_ng_container_10_ng_container_2_Template, 4, 3, "ng-container", 8);
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
function UserListComponent_div_18_button_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 177);
  }
}
function UserListComponent_div_18_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 175);
    \u0275\u0275listener("click", function UserListComponent_div_18_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.importUsers());
    });
    \u0275\u0275template(1, UserListComponent_div_18_button_14_span_1_Template, 1, 0, "span", 176);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.selectedFile || ctx_r1.isImporting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isImporting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isImporting ? "Import en cours..." : "Importer", " ");
  }
}
function UserListComponent_div_18_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 178);
    \u0275\u0275listener("click", function UserListComponent_div_18_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.importResult = null;
      return \u0275\u0275resetView(ctx_r1.selectedFile = null);
    });
    \u0275\u0275element(1, "i", 179);
    \u0275\u0275text(2, " Nouvel import ");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 133)(1, "div", 134)(2, "div", 135)(3, "div", 136)(4, "h5", 137);
    \u0275\u0275element(5, "i", 138);
    \u0275\u0275text(6, "Importer des utilisateurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 139);
    \u0275\u0275listener("click", function UserListComponent_div_18_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportDialog());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 140);
    \u0275\u0275template(9, UserListComponent_div_18_ng_container_9_Template, 26, 3, "ng-container", 8)(10, UserListComponent_div_18_ng_container_10_Template, 3, 2, "ng-container", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 141)(12, "button", 142);
    \u0275\u0275listener("click", function UserListComponent_div_18_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportDialog());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, UserListComponent_div_18_button_14_Template, 3, 3, "button", 143)(15, UserListComponent_div_18_button_15_Template, 3, 0, "button", 144);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.showImportDialog ? "block" : "none");
    \u0275\u0275classProp("show", ctx_r1.showImportDialog);
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
function UserListComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 180);
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
  importResult = null;
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
    const headers = ["Nom", "Pr\xE9nom", "Email", "Matricule", "Direction", "R\xF4le", "Statut"];
    const rows = data.map((u) => [
      u.nom || "",
      u.prenom || "",
      u.email || "",
      u.matricule || "",
      u.direction || "",
      this.getRoleName(u),
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
  }, decls: 21, vars: 21, consts: [[1, "ul-shell"], [1, "ul-topbar"], [1, "isax", "isax-people", "ul-topbar__icon"], [1, "ul-topbar__title"], [1, "ul-topbar__stats"], ["routerLink", "/superadmin/superadmin-companymanagement", "class", "ul-back", 4, "ngIf"], [1, "ul-tabbar"], [1, "ul-tab", 3, "click"], [4, "ngIf"], ["class", "ul-role-embed", 4, "ngIf"], ["class", "ul-matrix-wrap", 4, "ngIf"], ["class", "modal", "tabindex", "-1", "role", "dialog", 3, "show", "display", 4, "ngIf"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [3, "onClose", "onSave", "visible", "isEditMode", "userData"], ["routerLink", "/superadmin/superadmin-companymanagement", 1, "ul-back"], [1, "isax", "isax-arrow-left-2", "me-1"], [1, "ul-toolbar"], [1, "ul-search"], [1, "isax", "isax-search-normal-1", "ul-search__icon"], ["type", "search", "placeholder", "Rechercher un utilisateur...", 1, "ul-search__input", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "ul-filter-group", 3, "clickOutside"], [1, "ul-filter", 3, "click"], [1, "isax", "isax-filter"], ["class", "ul-filter__chip", 4, "ngIf"], ["class", "ul-dropdown", 4, "ngIf"], [1, "ul-filter"], [1, "isax", "isax-building"], [1, "isax", "isax-tick-circle"], [1, "ul-import-btn", 3, "click"], [1, "isax", "isax-import"], [1, "ul-tpl-btn", 3, "click"], [1, "isax", "isax-export"], [1, "ul-export-btn", 3, "click"], [1, "isax", "isax-document-download"], [1, "ul-add-btn", 3, "click"], [1, "isax", "isax-add"], ["class", "ul-alert", 4, "ngIf"], ["class", "ul-skeletons", 4, "ngIf"], ["class", "ul-table", 4, "ngIf"], ["class", "ul-pager", 4, "ngIf"], [1, "ul-filter__chip"], [1, "ul-dropdown"], [1, "ul-dropdown__item", 3, "click"], ["class", "ul-dropdown__item", 3, "ul-dropdown__item--on", "click", 4, "ngFor", "ngForOf"], [1, "ul-alert"], [1, "isax", "isax-warning-2"], [1, "ul-skeletons"], ["class", "ul-skeleton-row", 4, "ngFor", "ngForOf"], [1, "ul-skeleton-row"], [1, "ul-table"], [2, "width", "28%"], [2, "width", "16%"], [2, "width", "12%"], [2, "width", "14%"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ul-user"], [1, "ul-avatar"], [1, "ul-user__name"], [1, "ul-user__email"], [1, "ul-role-badge"], ["class", "ul-cie", 4, "ngIf"], ["class", "ul-cie-none", 4, "ngIf"], [1, "ul-statut"], [1, "ul-date"], [1, "ul-actions"], ["title", "Modifier", 1, "ul-act", 3, "click"], [1, "isax", "isax-edit"], ["class", "ul-act ul-act--warn", "title", "Archiver", 3, "click", 4, "ngIf"], ["class", "ul-act ul-act--ok", "title", "R\xE9activer", 3, "click", 4, "ngIf"], ["title", "Supprimer", 1, "ul-act", "ul-act--del", 3, "click"], [1, "isax", "isax-trash"], [1, "ul-cie"], [1, "ul-cie-none"], ["title", "Archiver", 1, "ul-act", "ul-act--warn", 3, "click"], [1, "isax", "isax-archive"], ["title", "R\xE9activer", 1, "ul-act", "ul-act--ok", 3, "click"], [1, "isax", "isax-refresh"], ["colspan", "6", 1, "ul-empty"], [1, "isax", "isax-people", "d-block", "mb-2", 2, "font-size", "2rem"], [1, "ul-pager"], [1, "ul-pager__info"], [1, "ul-pager__btns"], [1, "ul-pager__btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], ["class", "ul-pager__btn", 3, "ul-pager__btn--active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-3"], [1, "ul-pager__btn", 3, "click"], [1, "ul-role-embed"], [1, "ul-matrix-wrap"], [1, "ul-matrix__header"], [1, "ul-matrix__title"], [1, "isax", "isax-shield-security", "me-2"], [1, "ul-matrix__subtitle", "text-muted", "small"], [1, "ul-matrix__hierarchy", "mb-3"], [1, "ul-hier-chain"], [1, "ul-hier-badge", "ul-hier--sa"], [1, "isax", "isax-arrow-right-3", "ul-hier-arrow"], [1, "ul-hier-badge", "ul-hier--holding"], [1, "ul-hier-badge", "ul-hier--rh"], [1, "ul-hier-badge", "ul-hier--it"], [1, "ul-hier-badge", "ul-hier--mgr"], [1, "ul-hier-badge", "ul-hier--form"], [1, "ul-hier-badge", "ul-hier--emp"], [1, "table-responsive"], [1, "ul-matrix"], [2, "min-width", "220px"], ["title", "Super Admin"], [1, "ul-mh-role", "ul-mh--sa"], ["title", "Superadmin Holding"], [1, "ul-mh-role", "ul-mh--holding"], ["title", "Admin RH Holding"], ["title", "Responsable RH"], [1, "ul-mh-role", "ul-mh--rh"], ["title", "Admin RH"], ["title", "Admin IT"], [1, "ul-mh-role", "ul-mh--it"], ["title", "Manager"], [1, "ul-mh-role", "ul-mh--mgr"], ["title", "Formateur"], [1, "ul-mh-role", "ul-mh--form"], ["title", "Employ\xE9"], [1, "ul-mh-role", "ul-mh--emp"], [1, "ul-matrix__role-names"], [1, "ul-matrix__group-label"], [1, "small", "text-nowrap"], ["colspan", "10", 1, "ul-matrix__group"], [1, "ul-c-yes"], [1, "ul-c-no"], [1, "ul-c-partial"], [1, "ul-matrix__legend", "mt-3"], [1, "ul-matrix__note", "mt-2"], [1, "isax", "isax-info-circle", "me-1"], [1, "text-muted"], ["tabindex", "-1", "role", "dialog", 1, "modal"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "isax", "isax-import", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-secondary", 3, "click", 4, "ngIf"], [1, "mb-3"], ["for", "fileInput", 1, "form-label"], ["id", "fileInput", "type", "file", "accept", ".xlsx,.xls,.csv", 1, "form-control", 3, "change", "disabled"], [1, "form-text"], ["class", "alert alert-info py-2", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], [1, "alert", "alert-warning", "mb-0"], [1, "alert-heading", "small", "fw-bold"], [1, "mb-0", "mt-1", "small"], [1, "alert", "alert-info", "py-2"], [1, "text-muted", "ms-1"], [1, "progress"], ["role", "progressbar", "aria-label", "Progression de l'import", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "alert-heading", "fw-bold"], [1, "isax", "isax-close-circle", "me-1"], [4, "ngFor", "ngForOf"], ["class", "alert alert-success py-2", 4, "ngIf"], ["class", "mt-2", 4, "ngIf"], [1, "alert", "alert-success", "py-2"], [1, "isax", "isax-tick-circle", "me-1"], [1, "mt-2"], [1, "alert", "alert-danger", "mb-2", "py-2", "fw-bold", "small"], [1, "isax", "isax-warning-2", "me-1"], [1, "ul-import-error-list"], ["class", "ul-import-error-item", 4, "ngFor", "ngForOf"], [1, "ul-import-error-item"], [1, "badge", "bg-danger", "me-2"], [1, "mb-0", "small"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-1"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "isax", "isax-refresh", "me-1"], [1, "modal-backdrop", "fade"]], template: function UserListComponent_Template(rf, ctx) {
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
      \u0275\u0275text(14, "Matrice des Habilitations");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(15, UserListComponent_ng_container_15_Template, 36, 18, "ng-container", 8)(16, UserListComponent_div_16_Template, 2, 0, "div", 9)(17, UserListComponent_div_17_Template, 1e3, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, UserListComponent_div_18_Template, 16, 9, "div", 11)(19, UserListComponent_div_19_Template, 1, 2, "div", 12);
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
  }, dependencies: [RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, CommonModule, NgForOf, NgIf, UserAddComponent, SuperadminRoleComponent], styles: ["\n\n.ul-shell[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ul-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.ul-topbar__icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #9ca3af;\n}\n.ul-topbar__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n  flex: 1;\n}\n.ul-topbar__stats[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-back[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #185FA5;\n  text-decoration: none;\n}\n.ul-back[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.ul-tabbar[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-tab[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  font-size: 13px;\n  font-weight: 400;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ul-tab--active[_ngcontent-%COMP%] {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ul-tab[_ngcontent-%COMP%]:hover:not(.ul-tab--active) {\n  color: #111827;\n}\n.ul-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 180px;\n  max-width: 240px;\n}\n.ul-search__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ul-search__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 10px 6px 32px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ul-search__input[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n  background: #fff;\n}\n.ul-filter-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ul-filter[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 11px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: border-color 0.15s, background 0.15s;\n}\n.ul-filter[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ul-filter--on[_ngcontent-%COMP%] {\n  border-color: #185FA5;\n  color: #185FA5;\n  background: #e6f1fb;\n}\n.ul-filter__chip[_ngcontent-%COMP%] {\n  padding: 1px 6px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 10px;\n  font-size: 10px;\n}\n.ul-filter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #185FA5;\n  background: #e6f1fb;\n  border: 1px solid #185FA5;\n  border-radius: 8px;\n  cursor: pointer;\n  margin-left: auto;\n  transition: background 0.15s;\n}\n.ul-add-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(208.0172413793, 228.6896551724, 247.4827586207);\n}\n.ul-add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-import-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #BA7517,\n      #D4941E);\n  border: 1px solid #8C5410;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: opacity 0.15s;\n}\n.ul-import-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.ul-import-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-tpl-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #006F78;\n  background: #E6F4F5;\n  border: 1px solid #9DD4D8;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.ul-tpl-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(215.4285714286, 237.5885714286, 239.1714285714);\n}\n.ul-tpl-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-export-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #006F78,\n      #00949F);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  box-shadow: 0 2px 6px rgba(0, 111, 120, 0.3);\n  transition: opacity 0.15s, transform 0.1s;\n}\n.ul-export-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.ul-export-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.ul-export-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  z-index: 200;\n  min-width: 160px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.ul-dropdown__item[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.ul-dropdown__item[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.ul-dropdown__item--on[_ngcontent-%COMP%] {\n  color: #185FA5;\n  font-weight: 500;\n  background: #e6f1fb;\n}\n.ul-alert[_ngcontent-%COMP%] {\n  margin: 10px 14px 0;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ul-skeletons[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ul-skeleton-row[_ngcontent-%COMP%] {\n  height: 40px;\n  border-radius: 8px;\n  background: #f3f4f6;\n  animation: _ngcontent-%COMP%_ul-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_ul-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ul-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.ul-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ul-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ul-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.ul-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 14px !important;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ul-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.ul-user__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.ul-user__email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.ul-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.ul-avatar[data-role=superadmin][_ngcontent-%COMP%] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-avatar[data-role=adminrh][_ngcontent-%COMP%] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-avatar[data-role=formateur][_ngcontent-%COMP%] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-avatar[data-role=employe][_ngcontent-%COMP%] {\n  background: #faeeda;\n  color: #633806;\n}\n.ul-avatar[data-role=default][_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-role-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ul-role-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ul-role-badge[data-role=superadmin][_ngcontent-%COMP%] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-role-badge[data-role=adminrh][_ngcontent-%COMP%] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-role-badge[data-role=formateur][_ngcontent-%COMP%] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-role-badge[data-role=employe][_ngcontent-%COMP%] {\n  background: #f1efe8;\n  color: #444441;\n}\n.ul-role-badge[data-role=default][_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-cie[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  background: #f3f4f6;\n  padding: 2px 8px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.ul-cie-none[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-statut[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n}\n.ul-statut[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ul-statut[data-s=actif][_ngcontent-%COMP%] {\n  background: #eaf3de;\n  color: #3b6d11;\n}\n.ul-statut[data-s=inactif][_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.ul-act[_ngcontent-%COMP%] {\n  padding: 4px 7px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.ul-act[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.ul-act--warn[_ngcontent-%COMP%] {\n  color: #92400e;\n  border-color: #fcd34d;\n}\n.ul-act--warn[_ngcontent-%COMP%]:hover {\n  background: #fffbeb;\n}\n.ul-act--ok[_ngcontent-%COMP%] {\n  color: #065f46;\n  border-color: #6ee7b7;\n}\n.ul-act--ok[_ngcontent-%COMP%]:hover {\n  background: #ecfdf5;\n}\n.ul-act--del[_ngcontent-%COMP%] {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ul-act--del[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.ul-pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ul-pager__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-pager__btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.ul-pager__btn[_ngcontent-%COMP%] {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ul-pager__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ul-pager__btn--active[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ul-pager__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ul-role-embed[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.ul-role-embed[_ngcontent-%COMP%]     .page-content > .d-md-flex:first-child, \n.ul-role-embed[_ngcontent-%COMP%]     .page-content > .d-block:first-child, \n.ul-role-embed[_ngcontent-%COMP%]     .d-md-flex.align-items-center.justify-content-between.mb-4 {\n  display: none !important;\n}\n.ul-role-embed[_ngcontent-%COMP%]     .page-content {\n  padding: 0 !important;\n}\n.ul-matrix-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding: 14px;\n}\n.ul-matrix__header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.ul-matrix__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n}\n.ul-matrix__subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ul-matrix__hierarchy[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding: 8px 0;\n}\n.ul-hier-chain[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  gap: 4px;\n  width: max-content;\n}\n.ul-hier-badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.ul-hier-arrow[_ngcontent-%COMP%] {\n  color: #aaa;\n  font-size: 12px;\n}\n.ul-hier--sa[_ngcontent-%COMP%] {\n  background: #fff0f0;\n  color: #c0392b;\n  border: 1px solid #f5c6c6;\n}\n.ul-hier--holding[_ngcontent-%COMP%] {\n  background: #fdf3ff;\n  color: #8e44ad;\n  border: 1px solid #e8c6f5;\n}\n.ul-hier--rh[_ngcontent-%COMP%] {\n  background: #eef4ff;\n  color: #2563eb;\n  border: 1px solid #bfdbfe;\n}\n.ul-hier--it[_ngcontent-%COMP%] {\n  background: #f0fff4;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n}\n.ul-hier--mgr[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n  border: 1px solid #fde68a;\n}\n.ul-hier--form[_ngcontent-%COMP%] {\n  background: #f0fdfd;\n  color: #0891b2;\n  border: 1px solid #a5f3fc;\n}\n.ul-hier--emp[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n}\n.ul-mh-role[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 7px;\n  border-radius: 6px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n}\n.ul-mh--sa[_ngcontent-%COMP%] {\n  background: #fff0f0;\n  color: #c0392b;\n}\n.ul-mh--holding[_ngcontent-%COMP%] {\n  background: #fdf3ff;\n  color: #8e44ad;\n}\n.ul-mh--rh[_ngcontent-%COMP%] {\n  background: #eef4ff;\n  color: #2563eb;\n}\n.ul-mh--it[_ngcontent-%COMP%] {\n  background: #f0fff4;\n  color: #16a34a;\n}\n.ul-mh--mgr[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.ul-mh--form[_ngcontent-%COMP%] {\n  background: #f0fdfd;\n  color: #0891b2;\n}\n.ul-mh--emp[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #6b7280;\n}\n.ul-matrix[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n  font-size: 12px;\n}\n.ul-matrix[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.ul-matrix[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border: 1px solid #e5e7eb;\n  text-align: center;\n}\n.ul-matrix[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, \n.ul-matrix[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n  font-weight: 500;\n  background: #f9fafb;\n}\n.ul-matrix[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-matrix[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n.ul-matrix__role-names[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #4b5563;\n  background: #f8f9fc !important;\n  white-space: nowrap;\n  padding: 5px 8px !important;\n}\n.ul-matrix__group-label[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #9ca3af !important;\n  font-weight: 400 !important;\n}\n.ul-matrix__group[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background: #f3f4f6 !important;\n  text-align: left !important;\n  padding-left: 12px !important;\n}\n.ul-matrix__legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 11px;\n  color: #9ca3af;\n  flex-wrap: wrap;\n}\n.ul-matrix__note[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ul-c-yes[_ngcontent-%COMP%] {\n  color: #3b6d11;\n  font-size: 15px;\n  font-weight: 700;\n}\n.ul-c-no[_ngcontent-%COMP%] {\n  color: #d3d1c7;\n  font-size: 15px;\n}\n.ul-c-partial[_ngcontent-%COMP%] {\n  color: #ba7517;\n  font-size: 15px;\n}\n.modal[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.45);\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\n.ul-import-error-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: 240px;\n  overflow-y: auto;\n  padding-right: 4px;\n}\n.ul-import-error-item[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #FECACA;\n  border-radius: 6px;\n  padding: 8px 10px;\n  font-size: 12.5px;\n  color: #7F1D1D;\n}\n.ul-import-error-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  padding-left: 16px;\n}\n.ul-import-error-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n}\n/*# sourceMappingURL=user-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserListComponent, [{
    type: Component,
    args: [{ selector: "app-user-list", standalone: true, imports: [RouterLink, FormsModule, CommonModule, CustomPaginationComponent, UserAddComponent, SuperadminRoleComponent], template: `<!-- \u2500\u2500 SHELL \u2500\u2500 -->\r
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
    <a *ngIf="entrepriseId" routerLink="/superadmin/superadmin-companymanagement"\r
       class="ul-back"><i class="isax isax-arrow-left-2 me-1"></i>Retour aux entreprises</a>\r
  </div>\r
\r
  <!-- \u2500\u2500 TABS \u2500\u2500 -->\r
  <div class="ul-tabbar">\r
    <button class="ul-tab" [class.ul-tab--active]="activeTab === 'users'"\r
            (click)="setTab('users')">Utilisateurs</button>\r
    <button class="ul-tab" [class.ul-tab--active]="activeTab === 'roles'"\r
            (click)="setTab('roles')">R\xF4les & permissions</button>\r
    <button class="ul-tab" [class.ul-tab--active]="activeTab === 'matrix'"\r
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
      <div class="ul-filter-group" (clickOutside)="showRoleDropdown = false">\r
        <button class="ul-filter" [class.ul-filter--on]="!!selectedRoleFilter"\r
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
      <!-- Filtre Entreprise -->\r
      <button class="ul-filter" [class.ul-filter--on]="!!entrepriseId">\r
        <i class="isax isax-building"></i>\r
        {{ entrepriseId ? ('Entreprise #' + entrepriseId) : 'Entreprise' }}\r
      </button>\r
\r
      <!-- Filtre Statut -->\r
      <div class="ul-filter-group" (clickOutside)="showStatutDropdown = false">\r
        <button class="ul-filter" [class.ul-filter--on]="selectedStatutFilter !== ''"\r
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
      <button class="ul-import-btn" (click)="openImportDialog()">\r
        <i class="isax isax-import"></i> Importer\r
      </button>\r
      <button class="ul-tpl-btn" (click)="downloadTemplate()">\r
        <i class="isax isax-export"></i> Template\r
      </button>\r
      <button class="ul-export-btn" (click)="exportUsers()">\r
        <i class="isax isax-document-download"></i> Exporter\r
      </button>\r
\r
      <button class="ul-add-btn" (click)="openNew()">\r
        <i class="isax isax-add"></i> Nouvel utilisateur\r
      </button>\r
    </div>\r
\r
    <!-- Erreur -->\r
    <div *ngIf="error" class="ul-alert">\r
      <i class="isax isax-warning-2"></i> {{ error }}\r
    </div>\r
\r
    <!-- Skeleton loading -->\r
    <div *ngIf="loading" class="ul-skeletons">\r
      <div *ngFor="let i of [1,2,3,4,5]" class="ul-skeleton-row"></div>\r
    </div>\r
\r
    <!-- Tableau -->\r
    <table class="ul-table" *ngIf="!loading">\r
      <thead>\r
        <tr>\r
          <th style="width:28%">Utilisateur</th>\r
          <th style="width:16%">R\xF4le</th>\r
          <th style="width:16%">Entreprise</th>\r
          <th style="width:12%">Statut</th>\r
          <th style="width:14%">Derni\xE8re activit\xE9</th>\r
          <th style="width:14%">Actions</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let u of tableData; trackBy: trackById">\r
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
            <span class="ul-role-badge" [attr.data-role]="getRoleKey(getRoleName(u))">\r
              <i [class]="'isax ' + getRoleIcon(getRoleName(u))"></i>\r
              {{ getRoleName(u) }}\r
            </span>\r
          </td>\r
          <td>\r
            <span *ngIf="u.entreprise?.nom" class="ul-cie">{{ u.entreprise!.nom }}</span>\r
            <span *ngIf="!u.entreprise?.nom" class="ul-cie-none">\u2014 Plateforme</span>\r
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
              <button class="ul-act" title="Modifier" (click)="editUser(u)">\r
                <i class="isax isax-edit"></i>\r
              </button>\r
              <button class="ul-act ul-act--warn" *ngIf="u.statut === 1"\r
                      title="Archiver" (click)="archiveUser(u)">\r
                <i class="isax isax-archive"></i>\r
              </button>\r
              <button class="ul-act ul-act--ok" *ngIf="u.statut === 0"\r
                      title="R\xE9activer" (click)="reactivateUser(u)">\r
                <i class="isax isax-refresh"></i>\r
              </button>\r
              <button class="ul-act ul-act--del" title="Supprimer" (click)="deleteUser(u.id)">\r
                <i class="isax isax-trash"></i>\r
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
        <button class="ul-pager__btn" [disabled]="currentPage === 1"\r
                (click)="onPageChange(currentPage - 1)">\r
          <i class="isax isax-arrow-left-2"></i>\r
        </button>\r
        <button *ngFor="let p of pageSelection; let i = index"\r
                class="ul-pager__btn"\r
                [class.ul-pager__btn--active]="currentPage === i + 1"\r
                (click)="onPageChange(i + 1)">{{ i + 1 }}</button>\r
        <button class="ul-pager__btn"\r
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
       Embedded SuperadminRoleComponent (full CRUD)\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="ul-role-embed" *ngIf="activeTab === 'roles'">\r
    <app-superadmin-role></app-superadmin-role>\r
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
        Chaque r\xF4le h\xE9rite des acc\xE8s de tous les r\xF4les qui lui sont inf\xE9rieurs dans la hi\xE9rarchie.\r
      </p>\r
    </div>\r
\r
    <!-- L\xE9gende hi\xE9rarchique -->\r
    <div class="ul-matrix__hierarchy mb-3">\r
      <div class="ul-hier-chain">\r
        <span class="ul-hier-badge ul-hier--sa">Super Admin</span>\r
        <i class="isax isax-arrow-right-3 ul-hier-arrow"></i>\r
        <span class="ul-hier-badge ul-hier--holding">Superadmin Holding</span>\r
        <i class="isax isax-arrow-right-3 ul-hier-arrow"></i>\r
        <span class="ul-hier-badge ul-hier--holding">Admin RH Holding</span>\r
        <i class="isax isax-arrow-right-3 ul-hier-arrow"></i>\r
        <span class="ul-hier-badge ul-hier--rh">Responsable RH</span>\r
        <i class="isax isax-arrow-right-3 ul-hier-arrow"></i>\r
        <span class="ul-hier-badge ul-hier--rh">Admin RH</span>\r
        <i class="isax isax-arrow-right-3 ul-hier-arrow"></i>\r
        <span class="ul-hier-badge ul-hier--it">Admin IT</span>\r
        <i class="isax isax-arrow-right-3 ul-hier-arrow"></i>\r
        <span class="ul-hier-badge ul-hier--mgr">Manager</span>\r
        <i class="isax isax-arrow-right-3 ul-hier-arrow"></i>\r
        <span class="ul-hier-badge ul-hier--form">Formateur</span>\r
        <i class="isax isax-arrow-right-3 ul-hier-arrow"></i>\r
        <span class="ul-hier-badge ul-hier--emp">Employ\xE9</span>\r
      </div>\r
    </div>\r
\r
    <div class="table-responsive">\r
    <table class="ul-matrix">\r
      <thead>\r
        <tr>\r
          <th style="min-width:220px">Permission</th>\r
          <th title="Super Admin"><span class="ul-mh-role ul-mh--sa">SA</span></th>\r
          <th title="Superadmin Holding"><span class="ul-mh-role ul-mh--holding">SH</span></th>\r
          <th title="Admin RH Holding"><span class="ul-mh-role ul-mh--holding">ARH-H</span></th>\r
          <th title="Responsable RH"><span class="ul-mh-role ul-mh--rh">RRH</span></th>\r
          <th title="Admin RH"><span class="ul-mh-role ul-mh--rh">ARH</span></th>\r
          <th title="Admin IT"><span class="ul-mh-role ul-mh--it">AIT</span></th>\r
          <th title="Manager"><span class="ul-mh-role ul-mh--mgr">MGR</span></th>\r
          <th title="Formateur"><span class="ul-mh-role ul-mh--form">FOR</span></th>\r
          <th title="Employ\xE9"><span class="ul-mh-role ul-mh--emp">EMP</span></th>\r
        </tr>\r
        <tr class="ul-matrix__role-names">\r
          <td class="ul-matrix__group-label">R\xF4les (ordre hi\xE9rarchique \u2193)</td>\r
          <td class="small text-nowrap">Super Admin</td>\r
          <td class="small text-nowrap">Superadmin Holding</td>\r
          <td class="small text-nowrap">Admin RH Holding</td>\r
          <td class="small text-nowrap">Responsable RH</td>\r
          <td class="small text-nowrap">Admin RH</td>\r
          <td class="small text-nowrap">Admin IT</td>\r
          <td class="small text-nowrap">Manager</td>\r
          <td class="small text-nowrap">Formateur</td>\r
          <td class="small text-nowrap">Employ\xE9</td>\r
        </tr>\r
      </thead>\r
      <tbody>\r
\r
        <!-- Plateforme & Syst\xE8me -->\r
        <tr><td class="ul-matrix__group" colspan="10">Plateforme & Syst\xE8me</td></tr>\r
        <tr>\r
          <td>Acc\xE8s total plateforme</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>G\xE9rer la configuration syst\xE8me</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Voir les logs syst\xE8me</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
\r
        <!-- Gestion des entreprises -->\r
        <tr><td class="ul-matrix__group" colspan="10">Gestion des entreprises</td></tr>\r
        <tr>\r
          <td>Cr\xE9er / supprimer une entreprise</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Modifier les param\xE8tres d'une entreprise</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Voir toutes les entreprises (multi-groupe)</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
\r
        <!-- Gestion des r\xF4les & permissions -->\r
        <tr><td class="ul-matrix__group" colspan="10">Gestion des r\xF4les & permissions</td></tr>\r
        <tr>\r
          <td>Cr\xE9er / supprimer un r\xF4le</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Attribuer un r\xF4le \xE0 un utilisateur</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
\r
        <!-- Gestion des utilisateurs -->\r
        <tr><td class="ul-matrix__group" colspan="10">Gestion des utilisateurs</td></tr>\r
        <tr>\r
          <td>Cr\xE9er / modifier un utilisateur</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Supprimer un utilisateur</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
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
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>D\xE9sactiver / archiver un compte</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
\r
        <!-- Formations & contenus -->\r
        <tr><td class="ul-matrix__group" colspan="10">Formations & contenus</td></tr>\r
        <tr>\r
          <td>Cr\xE9er / publier une formation</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Assigner une formation \xE0 un utilisateur</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Valider une demande de formation</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Cr\xE9er / g\xE9rer les quiz</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Acc\xE9der \xE0 ses formations assign\xE9es</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
        </tr>\r
\r
        <!-- Sessions de formation -->\r
        <tr><td class="ul-matrix__group" colspan="10">Sessions de formation</td></tr>\r
        <tr>\r
          <td>Cr\xE9er / modifier une session</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Inscrire des participants \xE0 une session</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
\r
        <!-- Suivi & statistiques -->\r
        <tr><td class="ul-matrix__group" colspan="10">Suivi & statistiques</td></tr>\r
        <tr>\r
          <td>Statistiques globales plateforme</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Statistiques multi-entreprises (groupe)</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Statistiques de son entreprise</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Voir la progression de son \xE9quipe</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
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
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
        </tr>\r
\r
        <!-- Certifications -->\r
        <tr><td class="ul-matrix__group" colspan="10">Certifications</td></tr>\r
        <tr>\r
          <td>G\xE9n\xE9rer / valider un certificat</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
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
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
        </tr>\r
\r
        <!-- Notifications -->\r
        <tr><td class="ul-matrix__group" colspan="10">Notifications</td></tr>\r
        <tr>\r
          <td>Envoyer des notifications</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>G\xE9rer les mod\xE8les de notifications</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
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
        <strong>SA</strong> = Super Admin \xB7 <strong>SH</strong> = Superadmin Holding \xB7\r
        <strong>ARH-H</strong> = Admin RH Holding \xB7 <strong>RRH</strong> = Responsable RH \xB7\r
        <strong>ARH</strong> = Admin RH \xB7 <strong>AIT</strong> = Admin IT \xB7\r
        <strong>MGR</strong> = Manager \xB7 <strong>FOR</strong> = Formateur \xB7 <strong>EMP</strong> = Employ\xE9\r
      </small>\r
    </div>\r
\r
  </div>\r
\r
</div>\r
\r
<!-- \u2500\u2500 MODAL IMPORT \u2500\u2500 -->\r
<div class="modal"\r
     [class.show]="showImportDialog"\r
     [style.display]="showImportDialog ? 'block' : 'none'"\r
     tabindex="-1"\r
     *ngIf="showImportDialog"\r
     role="dialog">\r
  <div class="modal-dialog modal-dialog-centered">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title"><i class="isax isax-import me-2"></i>Importer des utilisateurs</h5>\r
        <button type="button" class="btn-close" (click)="closeImportDialog()"></button>\r
      </div>\r
      <div class="modal-body">\r
\r
        <!-- \u2500\u2500 Zone de d\xE9p\xF4t (masqu\xE9e apr\xE8s r\xE9sultat) \u2500\u2500 -->\r
        <ng-container *ngIf="!importResult">\r
          <div class="mb-3">\r
            <label for="fileInput" class="form-label">Fichier Excel / CSV</label>\r
            <input id="fileInput" type="file" class="form-control"\r
                   (change)="onFileSelected($event)" accept=".xlsx,.xls,.csv" [disabled]="isImporting">\r
            <div class="form-text">Formats accept\xE9s : .xlsx, .xls, .csv</div>\r
          </div>\r
          <div *ngIf="selectedFile" class="alert alert-info py-2">\r
            <strong>{{ selectedFile.name }}</strong>\r
            <small class="text-muted ms-1">({{ (selectedFile.size / 1024 / 1024).toFixed(2) }} MB)</small>\r
          </div>\r
          <div *ngIf="isImporting" class="mb-3">\r
            <div class="progress">\r
              <div class="progress-bar progress-bar-striped progress-bar-animated"\r
                   role="progressbar" aria-label="Progression de l'import"\r
                   [style.width.%]="importProgress"\r
                   [attr.aria-valuenow]="importProgress" aria-valuemin="0" aria-valuemax="100">\r
                {{ importProgress }}%\r
              </div>\r
            </div>\r
          </div>\r
          <div class="alert alert-warning mb-0">\r
            <h6 class="alert-heading small fw-bold"><i class="isax isax-info-circle me-1"></i>Instructions</h6>\r
            <ul class="mb-0 mt-1 small">\r
              <li>T\xE9l\xE9chargez d'abord le template pour voir la structure requise</li>\r
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
          <!-- Erreurs de structure -->\r
          <div class="alert alert-danger" *ngIf="importResult.headerErrors.length">\r
            <h6 class="alert-heading fw-bold"><i class="isax isax-close-circle me-1"></i>Structure du fichier invalide</h6>\r
            <ul class="mb-0 mt-1 small">\r
              <li *ngFor="let e of importResult.headerErrors">{{ e }}</li>\r
            </ul>\r
          </div>\r
\r
          <ng-container *ngIf="!importResult.headerErrors.length">\r
            <!-- R\xE9sum\xE9 succ\xE8s -->\r
            <div class="alert alert-success py-2" *ngIf="importResult.totalCreated > 0">\r
              <i class="isax isax-tick-circle me-1"></i>\r
              <strong>{{ importResult.totalCreated }}</strong> utilisateur(s) cr\xE9\xE9(s) sur {{ importResult.totalProcessed }} trait\xE9(s)\r
            </div>\r
            <div class="alert alert-info py-2" *ngIf="importResult.totalCreated === 0 && importResult.totalErrors === 0">\r
              <i class="isax isax-info-circle me-1"></i> Aucune ligne \xE0 traiter dans le fichier.\r
            </div>\r
\r
            <!-- D\xE9tail erreurs par ligne -->\r
            <div *ngIf="importResult.rowErrors.length" class="mt-2">\r
              <div class="alert alert-danger mb-2 py-2 fw-bold small">\r
                <i class="isax isax-warning-2 me-1"></i>\r
                {{ importResult.rowErrors.length }} ligne(s) en erreur\r
              </div>\r
              <div class="ul-import-error-list">\r
                <div class="ul-import-error-item" *ngFor="let e of importResult.rowErrors">\r
                  <span class="badge bg-danger me-2">Ligne {{ e.line }}</span>\r
                  <ul class="mb-0 small">\r
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
      <div class="modal-footer">\r
        <button type="button" class="btn btn-secondary" (click)="closeImportDialog()">\r
          {{ importResult ? 'Fermer' : 'Annuler' }}\r
        </button>\r
        <button type="button" *ngIf="!importResult" class="btn btn-primary" (click)="importUsers()" [disabled]="!selectedFile || isImporting">\r
          <span *ngIf="isImporting" class="spinner-border spinner-border-sm me-1"></span>\r
          {{ isImporting ? 'Import en cours...' : 'Importer' }}\r
        </button>\r
        <button type="button" *ngIf="importResult && !importResult.headerErrors.length" class="btn btn-outline-secondary"\r
                (click)="importResult = null; selectedFile = null">\r
          <i class="isax isax-refresh me-1"></i> Nouvel import\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<div class="modal-backdrop fade" [class.show]="showImportDialog" *ngIf="showImportDialog"></div>\r
\r
<!-- \u2500\u2500 USER ADD/EDIT \u2500\u2500 -->\r
<app-user-add\r
  [visible]="userDialog"\r
  [isEditMode]="isEditMode"\r
  [userData]="selectedUser"\r
  (onClose)="hideDialog()"\r
  (onSave)="refreshData()">\r
</app-user-add>\r
`, styles: ["/* src/app/features/superadmin/user/user-list.component.scss */\n.ul-shell {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ul-topbar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.ul-topbar__icon {\n  font-size: 16px;\n  color: #9ca3af;\n}\n.ul-topbar__title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n  flex: 1;\n}\n.ul-topbar__stats {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-back {\n  font-size: 12px;\n  color: #185FA5;\n  text-decoration: none;\n}\n.ul-back:hover {\n  text-decoration: underline;\n}\n.ul-tabbar {\n  display: flex;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-tab {\n  padding: 10px 18px;\n  font-size: 13px;\n  font-weight: 400;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ul-tab--active {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ul-tab:hover:not(.ul-tab--active) {\n  color: #111827;\n}\n.ul-toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-search {\n  position: relative;\n  flex: 1;\n  min-width: 180px;\n  max-width: 240px;\n}\n.ul-search__icon {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ul-search__input {\n  width: 100%;\n  padding: 6px 10px 6px 32px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ul-search__input:focus {\n  border-color: #069b8f;\n  background: #fff;\n}\n.ul-filter-group {\n  position: relative;\n}\n.ul-filter {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 11px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: border-color 0.15s, background 0.15s;\n}\n.ul-filter:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ul-filter--on {\n  border-color: #185FA5;\n  color: #185FA5;\n  background: #e6f1fb;\n}\n.ul-filter__chip {\n  padding: 1px 6px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 10px;\n  font-size: 10px;\n}\n.ul-filter i {\n  font-size: 13px;\n}\n.ul-add-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #185FA5;\n  background: #e6f1fb;\n  border: 1px solid #185FA5;\n  border-radius: 8px;\n  cursor: pointer;\n  margin-left: auto;\n  transition: background 0.15s;\n}\n.ul-add-btn:hover {\n  background: rgb(208.0172413793, 228.6896551724, 247.4827586207);\n}\n.ul-add-btn i {\n  font-size: 13px;\n}\n.ul-import-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #BA7517,\n      #D4941E);\n  border: 1px solid #8C5410;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: opacity 0.15s;\n}\n.ul-import-btn:hover {\n  opacity: 0.88;\n}\n.ul-import-btn i {\n  font-size: 13px;\n}\n.ul-tpl-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #006F78;\n  background: #E6F4F5;\n  border: 1px solid #9DD4D8;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.ul-tpl-btn:hover {\n  background: rgb(215.4285714286, 237.5885714286, 239.1714285714);\n}\n.ul-tpl-btn i {\n  font-size: 13px;\n}\n.ul-export-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #006F78,\n      #00949F);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  box-shadow: 0 2px 6px rgba(0, 111, 120, 0.3);\n  transition: opacity 0.15s, transform 0.1s;\n}\n.ul-export-btn:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.ul-export-btn:active {\n  transform: translateY(0);\n}\n.ul-export-btn i {\n  font-size: 13px;\n}\n.ul-dropdown {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  z-index: 200;\n  min-width: 160px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.ul-dropdown__item {\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.ul-dropdown__item:hover {\n  background: #f9fafb;\n}\n.ul-dropdown__item--on {\n  color: #185FA5;\n  font-weight: 500;\n  background: #e6f1fb;\n}\n.ul-alert {\n  margin: 10px 14px 0;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ul-skeletons {\n  padding: 10px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ul-skeleton-row {\n  height: 40px;\n  border-radius: 8px;\n  background: #f3f4f6;\n  animation: ul-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes ul-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ul-table {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.ul-table th {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-table td {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ul-table tr:last-child td {\n  border-bottom: none;\n}\n.ul-table tr:hover td {\n  background: #f9fafb;\n}\n.ul-empty {\n  text-align: center;\n  padding: 40px 14px !important;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ul-user {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.ul-user__name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.ul-user__email {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.ul-avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.ul-avatar[data-role=superadmin] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-avatar[data-role=adminrh] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-avatar[data-role=formateur] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-avatar[data-role=employe] {\n  background: #faeeda;\n  color: #633806;\n}\n.ul-avatar[data-role=default] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-role-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ul-role-badge i {\n  font-size: 11px;\n}\n.ul-role-badge[data-role=superadmin] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-role-badge[data-role=adminrh] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-role-badge[data-role=formateur] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-role-badge[data-role=employe] {\n  background: #f1efe8;\n  color: #444441;\n}\n.ul-role-badge[data-role=default] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-cie {\n  font-size: 11px;\n  color: #4b5563;\n  background: #f3f4f6;\n  padding: 2px 8px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.ul-cie-none {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-statut {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n}\n.ul-statut i {\n  font-size: 11px;\n}\n.ul-statut[data-s=actif] {\n  background: #eaf3de;\n  color: #3b6d11;\n}\n.ul-statut[data-s=inactif] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-date {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-actions {\n  display: flex;\n  gap: 5px;\n}\n.ul-act {\n  padding: 4px 7px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.ul-act:hover {\n  background: #f3f4f6;\n}\n.ul-act--warn {\n  color: #92400e;\n  border-color: #fcd34d;\n}\n.ul-act--warn:hover {\n  background: #fffbeb;\n}\n.ul-act--ok {\n  color: #065f46;\n  border-color: #6ee7b7;\n}\n.ul-act--ok:hover {\n  background: #ecfdf5;\n}\n.ul-act--del {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ul-act--del:hover {\n  background: #fef2f2;\n}\n.ul-pager {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ul-pager__info {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-pager__btns {\n  display: flex;\n  gap: 4px;\n}\n.ul-pager__btn {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ul-pager__btn:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ul-pager__btn--active {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ul-pager__btn:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ul-role-embed {\n  padding: 0;\n}\n.ul-role-embed ::ng-deep .page-content > .d-md-flex:first-child,\n.ul-role-embed ::ng-deep .page-content > .d-block:first-child,\n.ul-role-embed ::ng-deep .d-md-flex.align-items-center.justify-content-between.mb-4 {\n  display: none !important;\n}\n.ul-role-embed ::ng-deep .page-content {\n  padding: 0 !important;\n}\n.ul-matrix-wrap {\n  overflow-x: auto;\n  padding: 14px;\n}\n.ul-matrix__header {\n  margin-bottom: 16px;\n}\n.ul-matrix__title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 4px;\n}\n.ul-matrix__subtitle {\n  margin: 0;\n}\n.ul-matrix__hierarchy {\n  overflow-x: auto;\n  padding: 8px 0;\n}\n.ul-hier-chain {\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  gap: 4px;\n  width: max-content;\n}\n.ul-hier-badge {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.ul-hier-arrow {\n  color: #aaa;\n  font-size: 12px;\n}\n.ul-hier--sa {\n  background: #fff0f0;\n  color: #c0392b;\n  border: 1px solid #f5c6c6;\n}\n.ul-hier--holding {\n  background: #fdf3ff;\n  color: #8e44ad;\n  border: 1px solid #e8c6f5;\n}\n.ul-hier--rh {\n  background: #eef4ff;\n  color: #2563eb;\n  border: 1px solid #bfdbfe;\n}\n.ul-hier--it {\n  background: #f0fff4;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n}\n.ul-hier--mgr {\n  background: #fffbeb;\n  color: #d97706;\n  border: 1px solid #fde68a;\n}\n.ul-hier--form {\n  background: #f0fdfd;\n  color: #0891b2;\n  border: 1px solid #a5f3fc;\n}\n.ul-hier--emp {\n  background: #f9fafb;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n}\n.ul-mh-role {\n  display: inline-block;\n  padding: 3px 7px;\n  border-radius: 6px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n}\n.ul-mh--sa {\n  background: #fff0f0;\n  color: #c0392b;\n}\n.ul-mh--holding {\n  background: #fdf3ff;\n  color: #8e44ad;\n}\n.ul-mh--rh {\n  background: #eef4ff;\n  color: #2563eb;\n}\n.ul-mh--it {\n  background: #f0fff4;\n  color: #16a34a;\n}\n.ul-mh--mgr {\n  background: #fffbeb;\n  color: #d97706;\n}\n.ul-mh--form {\n  background: #f0fdfd;\n  color: #0891b2;\n}\n.ul-mh--emp {\n  background: #f9fafb;\n  color: #6b7280;\n}\n.ul-matrix {\n  border-collapse: collapse;\n  width: 100%;\n  font-size: 12px;\n}\n.ul-matrix th,\n.ul-matrix td {\n  padding: 7px 10px;\n  border: 1px solid #e5e7eb;\n  text-align: center;\n}\n.ul-matrix th:first-child,\n.ul-matrix td:first-child {\n  text-align: left;\n  font-weight: 500;\n  background: #f9fafb;\n}\n.ul-matrix thead th {\n  background: #f9fafb;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-matrix thead th:first-child {\n  text-align: left;\n}\n.ul-matrix__role-names td {\n  font-size: 10px;\n  font-weight: 600;\n  color: #4b5563;\n  background: #f8f9fc !important;\n  white-space: nowrap;\n  padding: 5px 8px !important;\n}\n.ul-matrix__group-label {\n  font-style: italic;\n  color: #9ca3af !important;\n  font-weight: 400 !important;\n}\n.ul-matrix__group {\n  font-size: 10px;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background: #f3f4f6 !important;\n  text-align: left !important;\n  padding-left: 12px !important;\n}\n.ul-matrix__legend {\n  display: flex;\n  gap: 16px;\n  font-size: 11px;\n  color: #9ca3af;\n  flex-wrap: wrap;\n}\n.ul-matrix__note {\n  font-size: 11px;\n}\n.ul-c-yes {\n  color: #3b6d11;\n  font-size: 15px;\n  font-weight: 700;\n}\n.ul-c-no {\n  color: #d3d1c7;\n  font-size: 15px;\n}\n.ul-c-partial {\n  color: #ba7517;\n  font-size: 15px;\n}\n.modal {\n  background: rgba(0, 0, 0, 0.45);\n}\n.modal-content {\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\n.ul-import-error-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: 240px;\n  overflow-y: auto;\n  padding-right: 4px;\n}\n.ul-import-error-item {\n  background: #fff;\n  border: 1px solid #FECACA;\n  border-radius: 6px;\n  padding: 8px 10px;\n  font-size: 12.5px;\n  color: #7F1D1D;\n}\n.ul-import-error-item ul {\n  margin: 4px 0 0 0;\n  padding-left: 16px;\n}\n.ul-import-error-item ul li {\n  margin-bottom: 2px;\n}\n/*# sourceMappingURL=user-list.component.css.map */\n"] }]
  }], () => [{ type: UserService }, { type: ActivatedRoute }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserListComponent, { className: "UserListComponent", filePath: "app/features/superadmin/user/user-list.component.ts", lineNumber: 20 });
})();
export {
  UserListComponent
};
//# sourceMappingURL=chunk-ILHP432R.js.map
