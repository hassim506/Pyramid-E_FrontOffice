import {
  SuperadminRoleComponent
} from "./chunk-FXZPOGB5.js";
import "./chunk-TF33BRNX.js";
import {
  UserAddComponent
} from "./chunk-WXK65PPX.js";
import {
  sortRoleNames,
  sortRoles
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
import "./chunk-MFYPUOQJ.js";
import "./chunk-I3LFGWFR.js";
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
      return \u0275\u0275resetView(ctx_r1.setRoleFilter(r_r5.name));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ul-dropdown__item--on", ctx_r1.selectedRoleFilter === r_r5.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5.name);
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
    \u0275\u0275property("ngForOf", ctx_r1.allRoles);
  }
}
function UserListComponent_ng_container_15_div_11_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEntrepriseName(ctx_r1.selectedEntrepriseFilter), " ");
  }
}
function UserListComponent_ng_container_15_div_11_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_11_div_5_div_3_Template_div_click_0_listener() {
      const e_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.setEntrepriseFilter(e_r9.id.toString()));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("ul-dropdown__item--on", ctx_r1.selectedEntrepriseFilter === e_r9.id.toString());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r9.nom);
  }
}
function UserListComponent_ng_container_15_div_11_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_11_div_5_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setEntrepriseFilter(""));
    });
    \u0275\u0275text(2, "Toutes les entreprises");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UserListComponent_ng_container_15_div_11_div_5_div_3_Template, 2, 3, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.allEntreprises);
  }
}
function UserListComponent_ng_container_15_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 21);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_11_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleEntrepriseDropdown($event));
    });
    \u0275\u0275element(2, "i", 44);
    \u0275\u0275text(3, " Entreprise ");
    \u0275\u0275template(4, UserListComponent_ng_container_15_div_11_span_4_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, UserListComponent_ng_container_15_div_11_div_5_Template, 4, 1, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("ul-filter--on", !!ctx_r1.selectedEntrepriseFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedEntrepriseFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showEntrepriseDropdown);
  }
}
function UserListComponent_ng_container_15_button_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ul-filter--on", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEntrepriseName(ctx_r1.entrepriseId.toString()), " ");
  }
}
function UserListComponent_ng_container_15_span_17_Template(rf, ctx) {
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
function UserListComponent_ng_container_15_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_18_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setStatutFilter(""));
    });
    \u0275\u0275text(2, "Tous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_18_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setStatutFilter("1"));
    });
    \u0275\u0275text(4, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 42);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_18_Template_div_click_5_listener() {
      \u0275\u0275restoreView(_r10);
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
function UserListComponent_ng_container_15_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function UserListComponent_ng_container_15_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 50);
  }
}
function UserListComponent_ng_container_15_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275template(1, UserListComponent_ng_container_15_div_32_div_1_Template, 1, 0, "div", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function UserListComponent_ng_container_15_table_33_tr_16_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r12.entreprise.nom);
  }
}
function UserListComponent_ng_container_15_table_33_tr_16_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1, "\u2014 Plateforme");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_ng_container_15_table_33_tr_16_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_table_33_tr_16_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const u_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.archiveUser(u_r12));
    });
    \u0275\u0275element(1, "i", 76);
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_ng_container_15_table_33_tr_16_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_table_33_tr_16_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const u_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.reactivateUser(u_r12));
    });
    \u0275\u0275element(1, "i", 78);
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_ng_container_15_table_33_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 57)(3, "div", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 59);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 60);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 61);
    \u0275\u0275element(12, "i");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, UserListComponent_ng_container_15_table_33_tr_16_span_15_Template, 2, 1, "span", 62)(16, UserListComponent_ng_container_15_table_33_tr_16_span_16_Template, 2, 0, "span", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 64);
    \u0275\u0275element(19, "i");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 65);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "div", 66)(25, "button", 67);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_table_33_tr_16_Template_button_click_25_listener() {
      const u_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editUser(u_r12));
    });
    \u0275\u0275element(26, "i", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, UserListComponent_ng_container_15_table_33_tr_16_button_27_Template, 2, 0, "button", 69)(28, UserListComponent_ng_container_15_table_33_tr_16_button_28_Template, 2, 0, "button", 70);
    \u0275\u0275elementStart(29, "button", 71);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_table_33_tr_16_Template_button_click_29_listener() {
      const u_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteUser(u_r12.id));
    });
    \u0275\u0275element(30, "i", 72);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const u_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-role", ctx_r1.getRoleKey(ctx_r1.getRoleName(u_r12)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(u_r12), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getDisplayName(u_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r12.email);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-role", ctx_r1.getRoleKey(ctx_r1.getRoleName(u_r12)));
    \u0275\u0275advance();
    \u0275\u0275classMap("isax " + ctx_r1.getRoleIcon(ctx_r1.getRoleName(u_r12)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getRoleName(u_r12), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", u_r12.entreprise == null ? null : u_r12.entreprise.nom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(u_r12.entreprise == null ? null : u_r12.entreprise.nom));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-s", u_r12.statut === 1 ? "actif" : "inactif");
    \u0275\u0275advance();
    \u0275\u0275classMap("isax " + (u_r12.statut === 1 ? "isax-tick-circle" : "isax-minus-cirlce"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r12.statut === 1 ? "Actif" : "Inactif", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(u_r12.updated_at));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", u_r12.statut === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", u_r12.statut === 0);
  }
}
function UserListComponent_ng_container_15_table_33_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 79);
    \u0275\u0275element(2, "i", 80);
    \u0275\u0275text(3, " Aucun utilisateur trouv\xE9 ");
    \u0275\u0275elementEnd()();
  }
}
function UserListComponent_ng_container_15_table_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 51)(1, "thead")(2, "tr")(3, "th", 52);
    \u0275\u0275text(4, "Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 53);
    \u0275\u0275text(6, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 53);
    \u0275\u0275text(8, "Entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 54);
    \u0275\u0275text(10, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 55);
    \u0275\u0275text(12, "Derni\xE8re activit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 55);
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, UserListComponent_ng_container_15_table_33_tr_16_Template, 31, 17, "tr", 56)(17, UserListComponent_ng_container_15_table_33_tr_17_Template, 4, 0, "tr", 8);
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
function UserListComponent_ng_container_15_div_34_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_34_button_6_Template_button_click_0_listener() {
      const i_r17 = \u0275\u0275restoreView(_r16).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPageChange(i_r17 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r17 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ul-pager__btn--active", ctx_r1.currentPage === i_r17 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r17 + 1);
  }
}
function UserListComponent_ng_container_15_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "span", 82);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 83)(4, "button", 84);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_34_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UserListComponent_ng_container_15_div_34_button_6_Template, 2, 3, "button", 86);
    \u0275\u0275elementStart(7, "button", 84);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_div_34_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 87);
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
    \u0275\u0275elementStart(5, "div", 20)(6, "button", 21);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_Template_button_click_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleRoleDropdown($event));
    });
    \u0275\u0275element(7, "i", 22);
    \u0275\u0275text(8, " R\xF4le ");
    \u0275\u0275template(9, UserListComponent_ng_container_15_span_9_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, UserListComponent_ng_container_15_div_10_Template, 4, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, UserListComponent_ng_container_15_div_11_Template, 6, 4, "div", 25)(12, UserListComponent_ng_container_15_button_12_Template, 3, 3, "button", 26);
    \u0275\u0275elementStart(13, "div", 20)(14, "button", 21);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_Template_button_click_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleStatutDropdown($event));
    });
    \u0275\u0275element(15, "i", 27);
    \u0275\u0275text(16, " Statut ");
    \u0275\u0275template(17, UserListComponent_ng_container_15_span_17_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, UserListComponent_ng_container_15_div_18_Template, 7, 4, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 28);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openImportDialog());
    });
    \u0275\u0275element(20, "i", 29);
    \u0275\u0275text(21, " Importer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 30);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275element(23, "i", 31);
    \u0275\u0275text(24, " Template ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 32);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportUsers());
    });
    \u0275\u0275element(26, "i", 33);
    \u0275\u0275text(27, " Exporter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 34);
    \u0275\u0275listener("click", function UserListComponent_ng_container_15_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNew());
    });
    \u0275\u0275element(29, "i", 35);
    \u0275\u0275text(30, " Nouvel utilisateur ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, UserListComponent_ng_container_15_div_31_Template, 3, 1, "div", 36)(32, UserListComponent_ng_container_15_div_32_Template, 2, 2, "div", 37)(33, UserListComponent_ng_container_15_table_33_Template, 18, 3, "table", 38)(34, UserListComponent_ng_container_15_div_34_Template, 9, 6, "div", 39);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchDataValue);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(16, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ul-filter--on", !!ctx_r1.selectedRoleFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedRoleFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showRoleDropdown);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.entrepriseId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.entrepriseId);
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
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275element(1, "app-superadmin-role");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91)(2, "h2", 92);
    \u0275\u0275element(3, "i", 93);
    \u0275\u0275text(4, "Matrice des Habilitations ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 94);
    \u0275\u0275text(6, " Chaque r\xF4le h\xE9rite des acc\xE8s de tous les r\xF4les qui lui sont inf\xE9rieurs dans la hi\xE9rarchie. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 95)(8, "div", 96)(9, "span", 97);
    \u0275\u0275text(10, "Super Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "i", 98);
    \u0275\u0275elementStart(12, "span", 99);
    \u0275\u0275text(13, "Superadmin Holding");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "i", 98);
    \u0275\u0275elementStart(15, "span", 99);
    \u0275\u0275text(16, "Admin RH Holding");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "i", 98);
    \u0275\u0275elementStart(18, "span", 100);
    \u0275\u0275text(19, "Admin RH");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "i", 98);
    \u0275\u0275elementStart(21, "span", 101);
    \u0275\u0275text(22, "Admin IT");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "i", 98);
    \u0275\u0275elementStart(24, "span", 100);
    \u0275\u0275text(25, "Responsable RH");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "i", 98);
    \u0275\u0275elementStart(27, "span", 102);
    \u0275\u0275text(28, "Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "i", 98);
    \u0275\u0275elementStart(30, "span", 103);
    \u0275\u0275text(31, "Formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "i", 98);
    \u0275\u0275elementStart(33, "span", 104);
    \u0275\u0275text(34, "Employ\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 105)(36, "table", 106)(37, "thead")(38, "tr")(39, "th", 107);
    \u0275\u0275text(40, "Permission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th", 108)(42, "span", 109);
    \u0275\u0275text(43, "SA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "th", 110)(45, "span", 111);
    \u0275\u0275text(46, "SH");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "th", 112)(48, "span", 111);
    \u0275\u0275text(49, "ARH-H");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "th", 113)(51, "span", 114);
    \u0275\u0275text(52, "ARH");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "th", 115)(54, "span", 116);
    \u0275\u0275text(55, "AIT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "th", 117)(57, "span", 114);
    \u0275\u0275text(58, "RRH");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "th", 118)(60, "span", 119);
    \u0275\u0275text(61, "MGR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "th", 120)(63, "span", 121);
    \u0275\u0275text(64, "FOR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "th", 122)(66, "span", 123);
    \u0275\u0275text(67, "EMP");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "tr", 124)(69, "td", 125);
    \u0275\u0275text(70, "R\xF4les (ordre hi\xE9rarchique \u2193)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "td", 126);
    \u0275\u0275text(72, "Super Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "td", 126);
    \u0275\u0275text(74, "Superadmin Holding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "td", 126);
    \u0275\u0275text(76, "Admin RH Holding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "td", 126);
    \u0275\u0275text(78, "Admin RH");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "td", 126);
    \u0275\u0275text(80, "Admin IT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "td", 126);
    \u0275\u0275text(82, "Responsable RH");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "td", 126);
    \u0275\u0275text(84, "Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "td", 126);
    \u0275\u0275text(86, "Formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "td", 126);
    \u0275\u0275text(88, "Employ\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(89, "tbody")(90, "tr")(91, "td", 127);
    \u0275\u0275text(92, "Plateforme & Syst\xE8me");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "tr")(94, "td");
    \u0275\u0275text(95, "Acc\xE8s total plateforme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "td")(97, "span", 128);
    \u0275\u0275text(98, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "td")(100, "span", 129);
    \u0275\u0275text(101, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "td")(103, "span", 129);
    \u0275\u0275text(104, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "td")(106, "span", 129);
    \u0275\u0275text(107, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "td")(109, "span", 129);
    \u0275\u0275text(110, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "td")(112, "span", 129);
    \u0275\u0275text(113, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "td")(115, "span", 129);
    \u0275\u0275text(116, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "td")(118, "span", 129);
    \u0275\u0275text(119, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "td")(121, "span", 129);
    \u0275\u0275text(122, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(123, "tr")(124, "td");
    \u0275\u0275text(125, "G\xE9rer la configuration syst\xE8me");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "td")(127, "span", 128);
    \u0275\u0275text(128, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "td")(130, "span", 129);
    \u0275\u0275text(131, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "td")(133, "span", 129);
    \u0275\u0275text(134, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "td")(136, "span", 129);
    \u0275\u0275text(137, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(138, "td")(139, "span", 128);
    \u0275\u0275text(140, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(141, "td")(142, "span", 129);
    \u0275\u0275text(143, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(144, "td")(145, "span", 129);
    \u0275\u0275text(146, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "td")(148, "span", 129);
    \u0275\u0275text(149, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(150, "td")(151, "span", 129);
    \u0275\u0275text(152, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(153, "tr")(154, "td");
    \u0275\u0275text(155, "Voir les logs syst\xE8me");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "td")(157, "span", 128);
    \u0275\u0275text(158, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(159, "td")(160, "span", 129);
    \u0275\u0275text(161, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(162, "td")(163, "span", 129);
    \u0275\u0275text(164, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(165, "td")(166, "span", 129);
    \u0275\u0275text(167, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(168, "td")(169, "span", 128);
    \u0275\u0275text(170, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(171, "td")(172, "span", 129);
    \u0275\u0275text(173, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(174, "td")(175, "span", 129);
    \u0275\u0275text(176, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(177, "td")(178, "span", 129);
    \u0275\u0275text(179, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(180, "td")(181, "span", 129);
    \u0275\u0275text(182, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(183, "tr")(184, "td");
    \u0275\u0275text(185, "G\xE9rer les abonnements & facturation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "td")(187, "span", 128);
    \u0275\u0275text(188, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(189, "td")(190, "span", 128);
    \u0275\u0275text(191, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(192, "td")(193, "span", 129);
    \u0275\u0275text(194, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(195, "td")(196, "span", 129);
    \u0275\u0275text(197, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(198, "td")(199, "span", 129);
    \u0275\u0275text(200, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(201, "td")(202, "span", 129);
    \u0275\u0275text(203, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(204, "td")(205, "span", 129);
    \u0275\u0275text(206, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(207, "td")(208, "span", 129);
    \u0275\u0275text(209, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(210, "td")(211, "span", 129);
    \u0275\u0275text(212, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(213, "tr")(214, "td");
    \u0275\u0275text(215, "Personnaliser l'interface (th\xE8me, logo)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(216, "td")(217, "span", 128);
    \u0275\u0275text(218, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(219, "td")(220, "span", 128);
    \u0275\u0275text(221, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(222, "td")(223, "span", 128);
    \u0275\u0275text(224, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(225, "td")(226, "span", 129);
    \u0275\u0275text(227, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(228, "td")(229, "span", 128);
    \u0275\u0275text(230, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(231, "td")(232, "span", 129);
    \u0275\u0275text(233, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(234, "td")(235, "span", 129);
    \u0275\u0275text(236, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(237, "td")(238, "span", 129);
    \u0275\u0275text(239, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(240, "td")(241, "span", 129);
    \u0275\u0275text(242, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(243, "tr")(244, "td", 127);
    \u0275\u0275text(245, "Gestion des entreprises");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(246, "tr")(247, "td");
    \u0275\u0275text(248, "Cr\xE9er / supprimer une entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(249, "td")(250, "span", 128);
    \u0275\u0275text(251, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(252, "td")(253, "span", 128);
    \u0275\u0275text(254, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(255, "td")(256, "span", 129);
    \u0275\u0275text(257, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(258, "td")(259, "span", 129);
    \u0275\u0275text(260, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(261, "td")(262, "span", 129);
    \u0275\u0275text(263, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(264, "td")(265, "span", 129);
    \u0275\u0275text(266, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(267, "td")(268, "span", 129);
    \u0275\u0275text(269, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(270, "td")(271, "span", 129);
    \u0275\u0275text(272, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(273, "td")(274, "span", 129);
    \u0275\u0275text(275, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(276, "tr")(277, "td");
    \u0275\u0275text(278, "Modifier les param\xE8tres d'une entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(279, "td")(280, "span", 128);
    \u0275\u0275text(281, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(282, "td")(283, "span", 128);
    \u0275\u0275text(284, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(285, "td")(286, "span", 128);
    \u0275\u0275text(287, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(288, "td")(289, "span", 130);
    \u0275\u0275text(290, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(291, "td")(292, "span", 129);
    \u0275\u0275text(293, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(294, "td")(295, "span", 130);
    \u0275\u0275text(296, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(297, "td")(298, "span", 129);
    \u0275\u0275text(299, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(300, "td")(301, "span", 129);
    \u0275\u0275text(302, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(303, "td")(304, "span", 129);
    \u0275\u0275text(305, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(306, "tr")(307, "td");
    \u0275\u0275text(308, "Voir toutes les entreprises (multi-groupe)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(309, "td")(310, "span", 128);
    \u0275\u0275text(311, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(312, "td")(313, "span", 128);
    \u0275\u0275text(314, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(315, "td")(316, "span", 128);
    \u0275\u0275text(317, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(318, "td")(319, "span", 129);
    \u0275\u0275text(320, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(321, "td")(322, "span", 129);
    \u0275\u0275text(323, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(324, "td")(325, "span", 129);
    \u0275\u0275text(326, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(327, "td")(328, "span", 129);
    \u0275\u0275text(329, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(330, "td")(331, "span", 129);
    \u0275\u0275text(332, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(333, "td")(334, "span", 129);
    \u0275\u0275text(335, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(336, "tr")(337, "td");
    \u0275\u0275text(338, "G\xE9rer les directions / d\xE9partements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(339, "td")(340, "span", 128);
    \u0275\u0275text(341, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(342, "td")(343, "span", 128);
    \u0275\u0275text(344, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(345, "td")(346, "span", 128);
    \u0275\u0275text(347, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(348, "td")(349, "span", 128);
    \u0275\u0275text(350, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(351, "td")(352, "span", 129);
    \u0275\u0275text(353, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(354, "td")(355, "span", 128);
    \u0275\u0275text(356, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(357, "td")(358, "span", 129);
    \u0275\u0275text(359, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(360, "td")(361, "span", 129);
    \u0275\u0275text(362, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(363, "td")(364, "span", 129);
    \u0275\u0275text(365, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(366, "tr")(367, "td", 127);
    \u0275\u0275text(368, "Gestion des r\xF4les & permissions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(369, "tr")(370, "td");
    \u0275\u0275text(371, "Cr\xE9er / supprimer un r\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(372, "td")(373, "span", 128);
    \u0275\u0275text(374, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(375, "td")(376, "span", 128);
    \u0275\u0275text(377, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(378, "td")(379, "span", 128);
    \u0275\u0275text(380, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(381, "td")(382, "span", 130);
    \u0275\u0275text(383, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(384, "td")(385, "span", 129);
    \u0275\u0275text(386, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(387, "td")(388, "span", 130);
    \u0275\u0275text(389, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(390, "td")(391, "span", 129);
    \u0275\u0275text(392, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(393, "td")(394, "span", 129);
    \u0275\u0275text(395, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(396, "td")(397, "span", 129);
    \u0275\u0275text(398, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(399, "tr")(400, "td");
    \u0275\u0275text(401, "Modifier les permissions d'un r\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(402, "td")(403, "span", 128);
    \u0275\u0275text(404, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(405, "td")(406, "span", 128);
    \u0275\u0275text(407, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(408, "td")(409, "span", 128);
    \u0275\u0275text(410, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(411, "td")(412, "span", 130);
    \u0275\u0275text(413, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(414, "td")(415, "span", 129);
    \u0275\u0275text(416, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(417, "td")(418, "span", 130);
    \u0275\u0275text(419, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(420, "td")(421, "span", 129);
    \u0275\u0275text(422, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(423, "td")(424, "span", 129);
    \u0275\u0275text(425, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(426, "td")(427, "span", 129);
    \u0275\u0275text(428, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(429, "tr")(430, "td");
    \u0275\u0275text(431, "Attribuer un r\xF4le \xE0 un utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(432, "td")(433, "span", 128);
    \u0275\u0275text(434, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(435, "td")(436, "span", 128);
    \u0275\u0275text(437, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(438, "td")(439, "span", 128);
    \u0275\u0275text(440, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(441, "td")(442, "span", 128);
    \u0275\u0275text(443, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(444, "td")(445, "span", 129);
    \u0275\u0275text(446, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(447, "td")(448, "span", 128);
    \u0275\u0275text(449, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(450, "td")(451, "span", 129);
    \u0275\u0275text(452, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(453, "td")(454, "span", 129);
    \u0275\u0275text(455, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(456, "td")(457, "span", 129);
    \u0275\u0275text(458, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(459, "tr")(460, "td");
    \u0275\u0275text(461, "Voir la matrice des habilitations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(462, "td")(463, "span", 128);
    \u0275\u0275text(464, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(465, "td")(466, "span", 128);
    \u0275\u0275text(467, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(468, "td")(469, "span", 128);
    \u0275\u0275text(470, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(471, "td")(472, "span", 128);
    \u0275\u0275text(473, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(474, "td")(475, "span", 129);
    \u0275\u0275text(476, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(477, "td")(478, "span", 128);
    \u0275\u0275text(479, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(480, "td")(481, "span", 129);
    \u0275\u0275text(482, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(483, "td")(484, "span", 129);
    \u0275\u0275text(485, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(486, "td")(487, "span", 129);
    \u0275\u0275text(488, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(489, "tr")(490, "td", 127);
    \u0275\u0275text(491, "Gestion des utilisateurs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(492, "tr")(493, "td");
    \u0275\u0275text(494, "Cr\xE9er / modifier un utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(495, "td")(496, "span", 128);
    \u0275\u0275text(497, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(498, "td")(499, "span", 128);
    \u0275\u0275text(500, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(501, "td")(502, "span", 128);
    \u0275\u0275text(503, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(504, "td")(505, "span", 128);
    \u0275\u0275text(506, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(507, "td")(508, "span", 129);
    \u0275\u0275text(509, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(510, "td")(511, "span", 128);
    \u0275\u0275text(512, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(513, "td")(514, "span", 129);
    \u0275\u0275text(515, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(516, "td")(517, "span", 129);
    \u0275\u0275text(518, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(519, "td")(520, "span", 129);
    \u0275\u0275text(521, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(522, "tr")(523, "td");
    \u0275\u0275text(524, "Supprimer un utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(525, "td")(526, "span", 128);
    \u0275\u0275text(527, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(528, "td")(529, "span", 128);
    \u0275\u0275text(530, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(531, "td")(532, "span", 128);
    \u0275\u0275text(533, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(534, "td")(535, "span", 128);
    \u0275\u0275text(536, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(537, "td")(538, "span", 129);
    \u0275\u0275text(539, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(540, "td")(541, "span", 128);
    \u0275\u0275text(542, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(543, "td")(544, "span", 129);
    \u0275\u0275text(545, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(546, "td")(547, "span", 129);
    \u0275\u0275text(548, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(549, "td")(550, "span", 129);
    \u0275\u0275text(551, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(552, "tr")(553, "td");
    \u0275\u0275text(554, "Importer / exporter des utilisateurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(555, "td")(556, "span", 128);
    \u0275\u0275text(557, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(558, "td")(559, "span", 128);
    \u0275\u0275text(560, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(561, "td")(562, "span", 128);
    \u0275\u0275text(563, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(564, "td")(565, "span", 128);
    \u0275\u0275text(566, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(567, "td")(568, "span", 129);
    \u0275\u0275text(569, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(570, "td")(571, "span", 128);
    \u0275\u0275text(572, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(573, "td")(574, "span", 129);
    \u0275\u0275text(575, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(576, "td")(577, "span", 129);
    \u0275\u0275text(578, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(579, "td")(580, "span", 129);
    \u0275\u0275text(581, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(582, "tr")(583, "td");
    \u0275\u0275text(584, "D\xE9sactiver / archiver un compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(585, "td")(586, "span", 128);
    \u0275\u0275text(587, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(588, "td")(589, "span", 128);
    \u0275\u0275text(590, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(591, "td")(592, "span", 128);
    \u0275\u0275text(593, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(594, "td")(595, "span", 128);
    \u0275\u0275text(596, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(597, "td")(598, "span", 129);
    \u0275\u0275text(599, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(600, "td")(601, "span", 128);
    \u0275\u0275text(602, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(603, "td")(604, "span", 129);
    \u0275\u0275text(605, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(606, "td")(607, "span", 129);
    \u0275\u0275text(608, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(609, "td")(610, "span", 129);
    \u0275\u0275text(611, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(612, "tr")(613, "td");
    \u0275\u0275text(614, "R\xE9initialiser le mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(615, "td")(616, "span", 128);
    \u0275\u0275text(617, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(618, "td")(619, "span", 128);
    \u0275\u0275text(620, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(621, "td")(622, "span", 128);
    \u0275\u0275text(623, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(624, "td")(625, "span", 128);
    \u0275\u0275text(626, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(627, "td")(628, "span", 129);
    \u0275\u0275text(629, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(630, "td")(631, "span", 128);
    \u0275\u0275text(632, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(633, "td")(634, "span", 129);
    \u0275\u0275text(635, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(636, "td")(637, "span", 129);
    \u0275\u0275text(638, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(639, "td")(640, "span", 129);
    \u0275\u0275text(641, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(642, "tr")(643, "td");
    \u0275\u0275text(644, "Modifier son propre profil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(645, "td")(646, "span", 128);
    \u0275\u0275text(647, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(648, "td")(649, "span", 128);
    \u0275\u0275text(650, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(651, "td")(652, "span", 128);
    \u0275\u0275text(653, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(654, "td")(655, "span", 128);
    \u0275\u0275text(656, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(657, "td")(658, "span", 128);
    \u0275\u0275text(659, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(660, "td")(661, "span", 128);
    \u0275\u0275text(662, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(663, "td")(664, "span", 128);
    \u0275\u0275text(665, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(666, "td")(667, "span", 128);
    \u0275\u0275text(668, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(669, "td")(670, "span", 128);
    \u0275\u0275text(671, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(672, "tr")(673, "td", 127);
    \u0275\u0275text(674, "Formations & contenus");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(675, "tr")(676, "td");
    \u0275\u0275text(677, "Cr\xE9er / publier une formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(678, "td")(679, "span", 128);
    \u0275\u0275text(680, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(681, "td")(682, "span", 128);
    \u0275\u0275text(683, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(684, "td")(685, "span", 130);
    \u0275\u0275text(686, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(687, "td")(688, "span", 129);
    \u0275\u0275text(689, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(690, "td")(691, "span", 129);
    \u0275\u0275text(692, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(693, "td")(694, "span", 129);
    \u0275\u0275text(695, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(696, "td")(697, "span", 129);
    \u0275\u0275text(698, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(699, "td")(700, "span", 128);
    \u0275\u0275text(701, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(702, "td")(703, "span", 129);
    \u0275\u0275text(704, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(705, "tr")(706, "td");
    \u0275\u0275text(707, "Modifier / archiver une formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(708, "td")(709, "span", 128);
    \u0275\u0275text(710, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(711, "td")(712, "span", 128);
    \u0275\u0275text(713, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(714, "td")(715, "span", 130);
    \u0275\u0275text(716, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(717, "td")(718, "span", 129);
    \u0275\u0275text(719, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(720, "td")(721, "span", 129);
    \u0275\u0275text(722, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(723, "td")(724, "span", 129);
    \u0275\u0275text(725, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(726, "td")(727, "span", 129);
    \u0275\u0275text(728, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(729, "td")(730, "span", 128);
    \u0275\u0275text(731, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(732, "td")(733, "span", 129);
    \u0275\u0275text(734, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(735, "tr")(736, "td");
    \u0275\u0275text(737, "Assigner une formation \xE0 un utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(738, "td")(739, "span", 128);
    \u0275\u0275text(740, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(741, "td")(742, "span", 128);
    \u0275\u0275text(743, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(744, "td")(745, "span", 128);
    \u0275\u0275text(746, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(747, "td")(748, "span", 128);
    \u0275\u0275text(749, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(750, "td")(751, "span", 129);
    \u0275\u0275text(752, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(753, "td")(754, "span", 128);
    \u0275\u0275text(755, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(756, "td")(757, "span", 128);
    \u0275\u0275text(758, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(759, "td")(760, "span", 129);
    \u0275\u0275text(761, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(762, "td")(763, "span", 129);
    \u0275\u0275text(764, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(765, "tr")(766, "td");
    \u0275\u0275text(767, "Valider une demande de formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(768, "td")(769, "span", 128);
    \u0275\u0275text(770, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(771, "td")(772, "span", 128);
    \u0275\u0275text(773, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(774, "td")(775, "span", 128);
    \u0275\u0275text(776, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(777, "td")(778, "span", 128);
    \u0275\u0275text(779, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(780, "td")(781, "span", 129);
    \u0275\u0275text(782, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(783, "td")(784, "span", 128);
    \u0275\u0275text(785, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(786, "td")(787, "span", 128);
    \u0275\u0275text(788, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(789, "td")(790, "span", 129);
    \u0275\u0275text(791, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(792, "td")(793, "span", 129);
    \u0275\u0275text(794, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(795, "tr")(796, "td");
    \u0275\u0275text(797, "Cr\xE9er / g\xE9rer les quiz & \xE9valuations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(798, "td")(799, "span", 128);
    \u0275\u0275text(800, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(801, "td")(802, "span", 128);
    \u0275\u0275text(803, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(804, "td")(805, "span", 129);
    \u0275\u0275text(806, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(807, "td")(808, "span", 129);
    \u0275\u0275text(809, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(810, "td")(811, "span", 129);
    \u0275\u0275text(812, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(813, "td")(814, "span", 129);
    \u0275\u0275text(815, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(816, "td")(817, "span", 129);
    \u0275\u0275text(818, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(819, "td")(820, "span", 128);
    \u0275\u0275text(821, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(822, "td")(823, "span", 129);
    \u0275\u0275text(824, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(825, "tr")(826, "td");
    \u0275\u0275text(827, "G\xE9rer le catalogue de formations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(828, "td")(829, "span", 128);
    \u0275\u0275text(830, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(831, "td")(832, "span", 128);
    \u0275\u0275text(833, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(834, "td")(835, "span", 128);
    \u0275\u0275text(836, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(837, "td")(838, "span", 128);
    \u0275\u0275text(839, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(840, "td")(841, "span", 129);
    \u0275\u0275text(842, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(843, "td")(844, "span", 128);
    \u0275\u0275text(845, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(846, "td")(847, "span", 129);
    \u0275\u0275text(848, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(849, "td")(850, "span", 129);
    \u0275\u0275text(851, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(852, "td")(853, "span", 129);
    \u0275\u0275text(854, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(855, "tr")(856, "td");
    \u0275\u0275text(857, "Explorer le catalogue (lecture)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(858, "td")(859, "span", 128);
    \u0275\u0275text(860, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(861, "td")(862, "span", 128);
    \u0275\u0275text(863, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(864, "td")(865, "span", 128);
    \u0275\u0275text(866, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(867, "td")(868, "span", 128);
    \u0275\u0275text(869, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(870, "td")(871, "span", 128);
    \u0275\u0275text(872, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(873, "td")(874, "span", 128);
    \u0275\u0275text(875, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(876, "td")(877, "span", 128);
    \u0275\u0275text(878, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(879, "td")(880, "span", 128);
    \u0275\u0275text(881, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(882, "td")(883, "span", 128);
    \u0275\u0275text(884, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(885, "tr")(886, "td");
    \u0275\u0275text(887, "Acc\xE9der \xE0 ses formations assign\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(888, "td")(889, "span", 128);
    \u0275\u0275text(890, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(891, "td")(892, "span", 128);
    \u0275\u0275text(893, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(894, "td")(895, "span", 128);
    \u0275\u0275text(896, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(897, "td")(898, "span", 128);
    \u0275\u0275text(899, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(900, "td")(901, "span", 128);
    \u0275\u0275text(902, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(903, "td")(904, "span", 128);
    \u0275\u0275text(905, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(906, "td")(907, "span", 128);
    \u0275\u0275text(908, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(909, "td")(910, "span", 128);
    \u0275\u0275text(911, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(912, "td")(913, "span", 128);
    \u0275\u0275text(914, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(915, "tr")(916, "td");
    \u0275\u0275text(917, "Demander une formation (auto-inscription)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(918, "td")(919, "span", 129);
    \u0275\u0275text(920, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(921, "td")(922, "span", 129);
    \u0275\u0275text(923, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(924, "td")(925, "span", 129);
    \u0275\u0275text(926, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(927, "td")(928, "span", 129);
    \u0275\u0275text(929, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(930, "td")(931, "span", 129);
    \u0275\u0275text(932, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(933, "td")(934, "span", 129);
    \u0275\u0275text(935, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(936, "td")(937, "span", 128);
    \u0275\u0275text(938, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(939, "td")(940, "span", 129);
    \u0275\u0275text(941, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(942, "td")(943, "span", 128);
    \u0275\u0275text(944, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(945, "tr")(946, "td", 127);
    \u0275\u0275text(947, "Parcours de formation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(948, "tr")(949, "td");
    \u0275\u0275text(950, "Cr\xE9er / modifier un parcours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(951, "td")(952, "span", 128);
    \u0275\u0275text(953, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(954, "td")(955, "span", 128);
    \u0275\u0275text(956, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(957, "td")(958, "span", 128);
    \u0275\u0275text(959, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(960, "td")(961, "span", 128);
    \u0275\u0275text(962, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(963, "td")(964, "span", 129);
    \u0275\u0275text(965, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(966, "td")(967, "span", 128);
    \u0275\u0275text(968, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(969, "td")(970, "span", 129);
    \u0275\u0275text(971, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(972, "td")(973, "span", 129);
    \u0275\u0275text(974, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(975, "td")(976, "span", 129);
    \u0275\u0275text(977, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(978, "tr")(979, "td");
    \u0275\u0275text(980, "Supprimer / archiver un parcours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(981, "td")(982, "span", 128);
    \u0275\u0275text(983, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(984, "td")(985, "span", 128);
    \u0275\u0275text(986, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(987, "td")(988, "span", 128);
    \u0275\u0275text(989, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(990, "td")(991, "span", 128);
    \u0275\u0275text(992, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(993, "td")(994, "span", 129);
    \u0275\u0275text(995, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(996, "td")(997, "span", 128);
    \u0275\u0275text(998, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(999, "td")(1e3, "span", 129);
    \u0275\u0275text(1001, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1002, "td")(1003, "span", 129);
    \u0275\u0275text(1004, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1005, "td")(1006, "span", 129);
    \u0275\u0275text(1007, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1008, "tr")(1009, "td");
    \u0275\u0275text(1010, "Assigner un parcours \xE0 un utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1011, "td")(1012, "span", 128);
    \u0275\u0275text(1013, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1014, "td")(1015, "span", 128);
    \u0275\u0275text(1016, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1017, "td")(1018, "span", 128);
    \u0275\u0275text(1019, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1020, "td")(1021, "span", 128);
    \u0275\u0275text(1022, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1023, "td")(1024, "span", 129);
    \u0275\u0275text(1025, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1026, "td")(1027, "span", 128);
    \u0275\u0275text(1028, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1029, "td")(1030, "span", 128);
    \u0275\u0275text(1031, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1032, "td")(1033, "span", 129);
    \u0275\u0275text(1034, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1035, "td")(1036, "span", 129);
    \u0275\u0275text(1037, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1038, "tr")(1039, "td");
    \u0275\u0275text(1040, "Suivre la progression d'un parcours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1041, "td")(1042, "span", 128);
    \u0275\u0275text(1043, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1044, "td")(1045, "span", 128);
    \u0275\u0275text(1046, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1047, "td")(1048, "span", 128);
    \u0275\u0275text(1049, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1050, "td")(1051, "span", 128);
    \u0275\u0275text(1052, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1053, "td")(1054, "span", 129);
    \u0275\u0275text(1055, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1056, "td")(1057, "span", 128);
    \u0275\u0275text(1058, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1059, "td")(1060, "span", 128);
    \u0275\u0275text(1061, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1062, "td")(1063, "span", 130);
    \u0275\u0275text(1064, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1065, "td")(1066, "span", 128);
    \u0275\u0275text(1067, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1068, "tr")(1069, "td", 127);
    \u0275\u0275text(1070, "Sessions de formation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1071, "tr")(1072, "td");
    \u0275\u0275text(1073, "Cr\xE9er / modifier une session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1074, "td")(1075, "span", 128);
    \u0275\u0275text(1076, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1077, "td")(1078, "span", 128);
    \u0275\u0275text(1079, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1080, "td")(1081, "span", 128);
    \u0275\u0275text(1082, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1083, "td")(1084, "span", 128);
    \u0275\u0275text(1085, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1086, "td")(1087, "span", 129);
    \u0275\u0275text(1088, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1089, "td")(1090, "span", 128);
    \u0275\u0275text(1091, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1092, "td")(1093, "span", 129);
    \u0275\u0275text(1094, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1095, "td")(1096, "span", 128);
    \u0275\u0275text(1097, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1098, "td")(1099, "span", 129);
    \u0275\u0275text(1100, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1101, "tr")(1102, "td");
    \u0275\u0275text(1103, "Supprimer / annuler une session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1104, "td")(1105, "span", 128);
    \u0275\u0275text(1106, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1107, "td")(1108, "span", 128);
    \u0275\u0275text(1109, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1110, "td")(1111, "span", 128);
    \u0275\u0275text(1112, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1113, "td")(1114, "span", 128);
    \u0275\u0275text(1115, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1116, "td")(1117, "span", 129);
    \u0275\u0275text(1118, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1119, "td")(1120, "span", 128);
    \u0275\u0275text(1121, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1122, "td")(1123, "span", 129);
    \u0275\u0275text(1124, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1125, "td")(1126, "span", 129);
    \u0275\u0275text(1127, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1128, "td")(1129, "span", 129);
    \u0275\u0275text(1130, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1131, "tr")(1132, "td");
    \u0275\u0275text(1133, "Inscrire des participants \xE0 une session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1134, "td")(1135, "span", 128);
    \u0275\u0275text(1136, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1137, "td")(1138, "span", 128);
    \u0275\u0275text(1139, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1140, "td")(1141, "span", 128);
    \u0275\u0275text(1142, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1143, "td")(1144, "span", 128);
    \u0275\u0275text(1145, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1146, "td")(1147, "span", 129);
    \u0275\u0275text(1148, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1149, "td")(1150, "span", 128);
    \u0275\u0275text(1151, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1152, "td")(1153, "span", 129);
    \u0275\u0275text(1154, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1155, "td")(1156, "span", 130);
    \u0275\u0275text(1157, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1158, "td")(1159, "span", 129);
    \u0275\u0275text(1160, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1161, "tr")(1162, "td");
    \u0275\u0275text(1163, "G\xE9rer l'\xE9margement / pr\xE9sence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1164, "td")(1165, "span", 128);
    \u0275\u0275text(1166, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1167, "td")(1168, "span", 128);
    \u0275\u0275text(1169, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1170, "td")(1171, "span", 128);
    \u0275\u0275text(1172, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1173, "td")(1174, "span", 128);
    \u0275\u0275text(1175, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1176, "td")(1177, "span", 129);
    \u0275\u0275text(1178, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1179, "td")(1180, "span", 128);
    \u0275\u0275text(1181, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1182, "td")(1183, "span", 129);
    \u0275\u0275text(1184, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1185, "td")(1186, "span", 128);
    \u0275\u0275text(1187, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1188, "td")(1189, "span", 129);
    \u0275\u0275text(1190, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1191, "tr")(1192, "td", 127);
    \u0275\u0275text(1193, "Plans de formation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1194, "tr")(1195, "td");
    \u0275\u0275text(1196, "Cr\xE9er / modifier un plan de formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1197, "td")(1198, "span", 128);
    \u0275\u0275text(1199, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1200, "td")(1201, "span", 128);
    \u0275\u0275text(1202, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1203, "td")(1204, "span", 128);
    \u0275\u0275text(1205, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1206, "td")(1207, "span", 128);
    \u0275\u0275text(1208, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1209, "td")(1210, "span", 129);
    \u0275\u0275text(1211, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1212, "td")(1213, "span", 128);
    \u0275\u0275text(1214, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1215, "td")(1216, "span", 129);
    \u0275\u0275text(1217, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1218, "td")(1219, "span", 129);
    \u0275\u0275text(1220, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1221, "td")(1222, "span", 129);
    \u0275\u0275text(1223, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1224, "tr")(1225, "td");
    \u0275\u0275text(1226, "Valider / approuver un plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1227, "td")(1228, "span", 128);
    \u0275\u0275text(1229, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1230, "td")(1231, "span", 128);
    \u0275\u0275text(1232, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1233, "td")(1234, "span", 128);
    \u0275\u0275text(1235, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1236, "td")(1237, "span", 130);
    \u0275\u0275text(1238, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1239, "td")(1240, "span", 129);
    \u0275\u0275text(1241, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1242, "td")(1243, "span", 128);
    \u0275\u0275text(1244, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1245, "td")(1246, "span", 129);
    \u0275\u0275text(1247, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1248, "td")(1249, "span", 129);
    \u0275\u0275text(1250, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1251, "td")(1252, "span", 129);
    \u0275\u0275text(1253, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1254, "tr")(1255, "td");
    \u0275\u0275text(1256, "Suivre le budget formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1257, "td")(1258, "span", 128);
    \u0275\u0275text(1259, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1260, "td")(1261, "span", 128);
    \u0275\u0275text(1262, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1263, "td")(1264, "span", 128);
    \u0275\u0275text(1265, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1266, "td")(1267, "span", 128);
    \u0275\u0275text(1268, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1269, "td")(1270, "span", 129);
    \u0275\u0275text(1271, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1272, "td")(1273, "span", 128);
    \u0275\u0275text(1274, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1275, "td")(1276, "span", 129);
    \u0275\u0275text(1277, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1278, "td")(1279, "span", 129);
    \u0275\u0275text(1280, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1281, "td")(1282, "span", 129);
    \u0275\u0275text(1283, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1284, "tr")(1285, "td", 127);
    \u0275\u0275text(1286, "Suivi & statistiques");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1287, "tr")(1288, "td");
    \u0275\u0275text(1289, "Statistiques globales plateforme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1290, "td")(1291, "span", 128);
    \u0275\u0275text(1292, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1293, "td")(1294, "span", 128);
    \u0275\u0275text(1295, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1296, "td")(1297, "span", 130);
    \u0275\u0275text(1298, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1299, "td")(1300, "span", 129);
    \u0275\u0275text(1301, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1302, "td")(1303, "span", 129);
    \u0275\u0275text(1304, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1305, "td")(1306, "span", 129);
    \u0275\u0275text(1307, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1308, "td")(1309, "span", 129);
    \u0275\u0275text(1310, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1311, "td")(1312, "span", 129);
    \u0275\u0275text(1313, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1314, "td")(1315, "span", 129);
    \u0275\u0275text(1316, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1317, "tr")(1318, "td");
    \u0275\u0275text(1319, "Statistiques multi-entreprises (groupe)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1320, "td")(1321, "span", 128);
    \u0275\u0275text(1322, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1323, "td")(1324, "span", 128);
    \u0275\u0275text(1325, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1326, "td")(1327, "span", 128);
    \u0275\u0275text(1328, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1329, "td")(1330, "span", 129);
    \u0275\u0275text(1331, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1332, "td")(1333, "span", 129);
    \u0275\u0275text(1334, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1335, "td")(1336, "span", 129);
    \u0275\u0275text(1337, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1338, "td")(1339, "span", 129);
    \u0275\u0275text(1340, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1341, "td")(1342, "span", 129);
    \u0275\u0275text(1343, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1344, "td")(1345, "span", 129);
    \u0275\u0275text(1346, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1347, "tr")(1348, "td");
    \u0275\u0275text(1349, "Statistiques de son entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1350, "td")(1351, "span", 128);
    \u0275\u0275text(1352, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1353, "td")(1354, "span", 128);
    \u0275\u0275text(1355, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1356, "td")(1357, "span", 128);
    \u0275\u0275text(1358, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1359, "td")(1360, "span", 128);
    \u0275\u0275text(1361, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1362, "td")(1363, "span", 129);
    \u0275\u0275text(1364, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1365, "td")(1366, "span", 128);
    \u0275\u0275text(1367, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1368, "td")(1369, "span", 130);
    \u0275\u0275text(1370, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1371, "td")(1372, "span", 129);
    \u0275\u0275text(1373, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1374, "td")(1375, "span", 129);
    \u0275\u0275text(1376, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1377, "tr")(1378, "td");
    \u0275\u0275text(1379, "Voir la progression de son \xE9quipe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1380, "td")(1381, "span", 128);
    \u0275\u0275text(1382, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1383, "td")(1384, "span", 128);
    \u0275\u0275text(1385, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1386, "td")(1387, "span", 128);
    \u0275\u0275text(1388, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1389, "td")(1390, "span", 128);
    \u0275\u0275text(1391, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1392, "td")(1393, "span", 129);
    \u0275\u0275text(1394, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1395, "td")(1396, "span", 128);
    \u0275\u0275text(1397, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1398, "td")(1399, "span", 128);
    \u0275\u0275text(1400, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1401, "td")(1402, "span", 130);
    \u0275\u0275text(1403, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1404, "td")(1405, "span", 129);
    \u0275\u0275text(1406, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1407, "tr")(1408, "td");
    \u0275\u0275text(1409, "Voir sa propre progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1410, "td")(1411, "span", 128);
    \u0275\u0275text(1412, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1413, "td")(1414, "span", 128);
    \u0275\u0275text(1415, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1416, "td")(1417, "span", 128);
    \u0275\u0275text(1418, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1419, "td")(1420, "span", 128);
    \u0275\u0275text(1421, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1422, "td")(1423, "span", 128);
    \u0275\u0275text(1424, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1425, "td")(1426, "span", 128);
    \u0275\u0275text(1427, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1428, "td")(1429, "span", 128);
    \u0275\u0275text(1430, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1431, "td")(1432, "span", 128);
    \u0275\u0275text(1433, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1434, "td")(1435, "span", 128);
    \u0275\u0275text(1436, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1437, "tr")(1438, "td");
    \u0275\u0275text(1439, "Exporter les rapports (PDF, Excel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1440, "td")(1441, "span", 128);
    \u0275\u0275text(1442, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1443, "td")(1444, "span", 128);
    \u0275\u0275text(1445, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1446, "td")(1447, "span", 128);
    \u0275\u0275text(1448, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1449, "td")(1450, "span", 128);
    \u0275\u0275text(1451, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1452, "td")(1453, "span", 129);
    \u0275\u0275text(1454, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1455, "td")(1456, "span", 128);
    \u0275\u0275text(1457, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1458, "td")(1459, "span", 130);
    \u0275\u0275text(1460, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1461, "td")(1462, "span", 129);
    \u0275\u0275text(1463, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1464, "td")(1465, "span", 129);
    \u0275\u0275text(1466, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1467, "tr")(1468, "td");
    \u0275\u0275text(1469, "Tableau de bord personnalis\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1470, "td")(1471, "span", 128);
    \u0275\u0275text(1472, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1473, "td")(1474, "span", 128);
    \u0275\u0275text(1475, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1476, "td")(1477, "span", 128);
    \u0275\u0275text(1478, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1479, "td")(1480, "span", 128);
    \u0275\u0275text(1481, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1482, "td")(1483, "span", 128);
    \u0275\u0275text(1484, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1485, "td")(1486, "span", 128);
    \u0275\u0275text(1487, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1488, "td")(1489, "span", 128);
    \u0275\u0275text(1490, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1491, "td")(1492, "span", 128);
    \u0275\u0275text(1493, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1494, "td")(1495, "span", 128);
    \u0275\u0275text(1496, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1497, "tr")(1498, "td", 127);
    \u0275\u0275text(1499, "Certifications");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1500, "tr")(1501, "td");
    \u0275\u0275text(1502, "Cr\xE9er / configurer un mod\xE8le de certificat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1503, "td")(1504, "span", 128);
    \u0275\u0275text(1505, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1506, "td")(1507, "span", 128);
    \u0275\u0275text(1508, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1509, "td")(1510, "span", 128);
    \u0275\u0275text(1511, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1512, "td")(1513, "span", 130);
    \u0275\u0275text(1514, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1515, "td")(1516, "span", 129);
    \u0275\u0275text(1517, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1518, "td")(1519, "span", 130);
    \u0275\u0275text(1520, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1521, "td")(1522, "span", 129);
    \u0275\u0275text(1523, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1524, "td")(1525, "span", 129);
    \u0275\u0275text(1526, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1527, "td")(1528, "span", 129);
    \u0275\u0275text(1529, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1530, "tr")(1531, "td");
    \u0275\u0275text(1532, "G\xE9n\xE9rer / valider un certificat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1533, "td")(1534, "span", 128);
    \u0275\u0275text(1535, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1536, "td")(1537, "span", 128);
    \u0275\u0275text(1538, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1539, "td")(1540, "span", 128);
    \u0275\u0275text(1541, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1542, "td")(1543, "span", 128);
    \u0275\u0275text(1544, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1545, "td")(1546, "span", 129);
    \u0275\u0275text(1547, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1548, "td")(1549, "span", 128);
    \u0275\u0275text(1550, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1551, "td")(1552, "span", 129);
    \u0275\u0275text(1553, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1554, "td")(1555, "span", 128);
    \u0275\u0275text(1556, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1557, "td")(1558, "span", 129);
    \u0275\u0275text(1559, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1560, "tr")(1561, "td");
    \u0275\u0275text(1562, "R\xE9voquer un certificat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1563, "td")(1564, "span", 128);
    \u0275\u0275text(1565, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1566, "td")(1567, "span", 128);
    \u0275\u0275text(1568, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1569, "td")(1570, "span", 128);
    \u0275\u0275text(1571, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1572, "td")(1573, "span", 128);
    \u0275\u0275text(1574, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1575, "td")(1576, "span", 129);
    \u0275\u0275text(1577, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1578, "td")(1579, "span", 128);
    \u0275\u0275text(1580, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1581, "td")(1582, "span", 129);
    \u0275\u0275text(1583, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1584, "td")(1585, "span", 129);
    \u0275\u0275text(1586, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1587, "td")(1588, "span", 129);
    \u0275\u0275text(1589, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1590, "tr")(1591, "td");
    \u0275\u0275text(1592, "T\xE9l\xE9charger son certificat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1593, "td")(1594, "span", 128);
    \u0275\u0275text(1595, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1596, "td")(1597, "span", 128);
    \u0275\u0275text(1598, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1599, "td")(1600, "span", 128);
    \u0275\u0275text(1601, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1602, "td")(1603, "span", 128);
    \u0275\u0275text(1604, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1605, "td")(1606, "span", 128);
    \u0275\u0275text(1607, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1608, "td")(1609, "span", 128);
    \u0275\u0275text(1610, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1611, "td")(1612, "span", 128);
    \u0275\u0275text(1613, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1614, "td")(1615, "span", 128);
    \u0275\u0275text(1616, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1617, "td")(1618, "span", 128);
    \u0275\u0275text(1619, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1620, "tr")(1621, "td", 127);
    \u0275\u0275text(1622, "Notifications & communication");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1623, "tr")(1624, "td");
    \u0275\u0275text(1625, "Envoyer des notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1626, "td")(1627, "span", 128);
    \u0275\u0275text(1628, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1629, "td")(1630, "span", 128);
    \u0275\u0275text(1631, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1632, "td")(1633, "span", 128);
    \u0275\u0275text(1634, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1635, "td")(1636, "span", 128);
    \u0275\u0275text(1637, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1638, "td")(1639, "span", 129);
    \u0275\u0275text(1640, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1641, "td")(1642, "span", 128);
    \u0275\u0275text(1643, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1644, "td")(1645, "span", 129);
    \u0275\u0275text(1646, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1647, "td")(1648, "span", 128);
    \u0275\u0275text(1649, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1650, "td")(1651, "span", 129);
    \u0275\u0275text(1652, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1653, "tr")(1654, "td");
    \u0275\u0275text(1655, "G\xE9rer les mod\xE8les de notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1656, "td")(1657, "span", 128);
    \u0275\u0275text(1658, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1659, "td")(1660, "span", 128);
    \u0275\u0275text(1661, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1662, "td")(1663, "span", 128);
    \u0275\u0275text(1664, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1665, "td")(1666, "span", 128);
    \u0275\u0275text(1667, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1668, "td")(1669, "span", 129);
    \u0275\u0275text(1670, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1671, "td")(1672, "span", 128);
    \u0275\u0275text(1673, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1674, "td")(1675, "span", 129);
    \u0275\u0275text(1676, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1677, "td")(1678, "span", 129);
    \u0275\u0275text(1679, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1680, "td")(1681, "span", 129);
    \u0275\u0275text(1682, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1683, "tr")(1684, "td");
    \u0275\u0275text(1685, "Envoyer des emails en masse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1686, "td")(1687, "span", 128);
    \u0275\u0275text(1688, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1689, "td")(1690, "span", 128);
    \u0275\u0275text(1691, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1692, "td")(1693, "span", 128);
    \u0275\u0275text(1694, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1695, "td")(1696, "span", 128);
    \u0275\u0275text(1697, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1698, "td")(1699, "span", 129);
    \u0275\u0275text(1700, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1701, "td")(1702, "span", 128);
    \u0275\u0275text(1703, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1704, "td")(1705, "span", 129);
    \u0275\u0275text(1706, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1707, "td")(1708, "span", 129);
    \u0275\u0275text(1709, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1710, "td")(1711, "span", 129);
    \u0275\u0275text(1712, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1713, "tr")(1714, "td");
    \u0275\u0275text(1715, "Recevoir des notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1716, "td")(1717, "span", 128);
    \u0275\u0275text(1718, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1719, "td")(1720, "span", 128);
    \u0275\u0275text(1721, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1722, "td")(1723, "span", 128);
    \u0275\u0275text(1724, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1725, "td")(1726, "span", 128);
    \u0275\u0275text(1727, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1728, "td")(1729, "span", 128);
    \u0275\u0275text(1730, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1731, "td")(1732, "span", 128);
    \u0275\u0275text(1733, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1734, "td")(1735, "span", 128);
    \u0275\u0275text(1736, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1737, "td")(1738, "span", 128);
    \u0275\u0275text(1739, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1740, "td")(1741, "span", 128);
    \u0275\u0275text(1742, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1743, "tr")(1744, "td", 127);
    \u0275\u0275text(1745, "\xC9valuations & feedback");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1746, "tr")(1747, "td");
    \u0275\u0275text(1748, "Cr\xE9er une \xE9valuation \xE0 chaud / \xE0 froid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1749, "td")(1750, "span", 128);
    \u0275\u0275text(1751, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1752, "td")(1753, "span", 128);
    \u0275\u0275text(1754, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1755, "td")(1756, "span", 128);
    \u0275\u0275text(1757, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1758, "td")(1759, "span", 128);
    \u0275\u0275text(1760, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1761, "td")(1762, "span", 129);
    \u0275\u0275text(1763, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1764, "td")(1765, "span", 128);
    \u0275\u0275text(1766, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1767, "td")(1768, "span", 129);
    \u0275\u0275text(1769, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1770, "td")(1771, "span", 128);
    \u0275\u0275text(1772, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1773, "td")(1774, "span", 129);
    \u0275\u0275text(1775, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1776, "tr")(1777, "td");
    \u0275\u0275text(1778, "Consulter les r\xE9sultats d'\xE9valuation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1779, "td")(1780, "span", 128);
    \u0275\u0275text(1781, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1782, "td")(1783, "span", 128);
    \u0275\u0275text(1784, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1785, "td")(1786, "span", 128);
    \u0275\u0275text(1787, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1788, "td")(1789, "span", 128);
    \u0275\u0275text(1790, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1791, "td")(1792, "span", 129);
    \u0275\u0275text(1793, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1794, "td")(1795, "span", 128);
    \u0275\u0275text(1796, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1797, "td")(1798, "span", 130);
    \u0275\u0275text(1799, "\u25D0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1800, "td")(1801, "span", 128);
    \u0275\u0275text(1802, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1803, "td")(1804, "span", 129);
    \u0275\u0275text(1805, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1806, "tr")(1807, "td");
    \u0275\u0275text(1808, "R\xE9pondre \xE0 une \xE9valuation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1809, "td")(1810, "span", 128);
    \u0275\u0275text(1811, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1812, "td")(1813, "span", 128);
    \u0275\u0275text(1814, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1815, "td")(1816, "span", 128);
    \u0275\u0275text(1817, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1818, "td")(1819, "span", 128);
    \u0275\u0275text(1820, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1821, "td")(1822, "span", 128);
    \u0275\u0275text(1823, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1824, "td")(1825, "span", 128);
    \u0275\u0275text(1826, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1827, "td")(1828, "span", 128);
    \u0275\u0275text(1829, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1830, "td")(1831, "span", 128);
    \u0275\u0275text(1832, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1833, "td")(1834, "span", 128);
    \u0275\u0275text(1835, "\u2713");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(1836, "tr")(1837, "td");
    \u0275\u0275text(1838, "Noter un formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1839, "td")(1840, "span", 129);
    \u0275\u0275text(1841, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1842, "td")(1843, "span", 129);
    \u0275\u0275text(1844, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1845, "td")(1846, "span", 129);
    \u0275\u0275text(1847, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1848, "td")(1849, "span", 129);
    \u0275\u0275text(1850, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1851, "td")(1852, "span", 129);
    \u0275\u0275text(1853, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1854, "td")(1855, "span", 129);
    \u0275\u0275text(1856, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1857, "td")(1858, "span", 128);
    \u0275\u0275text(1859, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1860, "td")(1861, "span", 129);
    \u0275\u0275text(1862, "\u2014");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1863, "td")(1864, "span", 128);
    \u0275\u0275text(1865, "\u2713");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(1866, "div", 131)(1867, "span")(1868, "span", 128);
    \u0275\u0275text(1869, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275text(1870, " Acc\xE8s complet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1871, "span")(1872, "span", 130);
    \u0275\u0275text(1873, "\u25D0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(1874, " Acc\xE8s limit\xE9 (son p\xE9rim\xE8tre)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1875, "span")(1876, "span", 129);
    \u0275\u0275text(1877, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275text(1878, " Aucun acc\xE8s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(1879, "div", 132);
    \u0275\u0275element(1880, "i", 133);
    \u0275\u0275elementStart(1881, "small", 134)(1882, "strong");
    \u0275\u0275text(1883, "SA");
    \u0275\u0275elementEnd();
    \u0275\u0275text(1884, " = Super Admin \xB7 ");
    \u0275\u0275elementStart(1885, "strong");
    \u0275\u0275text(1886, "SH");
    \u0275\u0275elementEnd();
    \u0275\u0275text(1887, " = Superadmin Holding \xB7 ");
    \u0275\u0275elementStart(1888, "strong");
    \u0275\u0275text(1889, "ARH-H");
    \u0275\u0275elementEnd();
    \u0275\u0275text(1890, " = Admin RH Holding \xB7 ");
    \u0275\u0275elementStart(1891, "strong");
    \u0275\u0275text(1892, "ARH");
    \u0275\u0275elementEnd();
    \u0275\u0275text(1893, " = Admin RH \xB7 ");
    \u0275\u0275elementStart(1894, "strong");
    \u0275\u0275text(1895, "AIT");
    \u0275\u0275elementEnd();
    \u0275\u0275text(1896, " = Admin IT \xB7 ");
    \u0275\u0275elementStart(1897, "strong");
    \u0275\u0275text(1898, "RRH");
    \u0275\u0275elementEnd();
    \u0275\u0275text(1899, " = Responsable RH \xB7 ");
    \u0275\u0275elementStart(1900, "strong");
    \u0275\u0275text(1901, "MGR");
    \u0275\u0275elementEnd();
    \u0275\u0275text(1902, " = Manager \xB7 ");
    \u0275\u0275elementStart(1903, "strong");
    \u0275\u0275text(1904, "FOR");
    \u0275\u0275elementEnd();
    \u0275\u0275text(1905, " = Formateur \xB7 ");
    \u0275\u0275elementStart(1906, "strong");
    \u0275\u0275text(1907, "EMP");
    \u0275\u0275elementEnd();
    \u0275\u0275text(1908, " = Employ\xE9 ");
    \u0275\u0275elementEnd()()();
  }
}
function UserListComponent_div_18_ng_container_9_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 156)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 157);
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
    \u0275\u0275elementStart(0, "div", 147)(1, "div", 158)(2, "div", 159);
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
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 147)(2, "label", 148);
    \u0275\u0275text(3, "Fichier Excel / CSV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 149);
    \u0275\u0275listener("change", function UserListComponent_div_18_ng_container_9_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 150);
    \u0275\u0275text(6, "Formats accept\xE9s : .xlsx, .xls, .csv");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, UserListComponent_div_18_ng_container_9_div_7_Template, 5, 2, "div", 151)(8, UserListComponent_div_18_ng_container_9_div_8_Template, 4, 4, "div", 152);
    \u0275\u0275elementStart(9, "div", 153)(10, "h6", 154);
    \u0275\u0275element(11, "i", 133);
    \u0275\u0275text(12, "Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ul", 155)(14, "li");
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
    const e_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r20);
  }
}
function UserListComponent_div_18_ng_container_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 161)(1, "h6", 162);
    \u0275\u0275element(2, "i", 163);
    \u0275\u0275text(3, "Structure du fichier invalide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 155);
    \u0275\u0275template(5, UserListComponent_div_18_ng_container_10_div_1_li_5_Template, 2, 1, "li", 164);
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
    \u0275\u0275elementStart(0, "div", 167);
    \u0275\u0275element(1, "i", 168);
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
    \u0275\u0275elementStart(0, "div", 156);
    \u0275\u0275element(1, "i", 133);
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
    const msg_r21 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(msg_r21);
  }
}
function UserListComponent_div_18_ng_container_10_ng_container_2_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174)(1, "span", 175);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 176);
    \u0275\u0275template(4, UserListComponent_div_18_ng_container_10_ng_container_2_div_3_div_5_li_4_Template, 2, 1, "li", 164);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r22 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Ligne ", e_r22.line);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", e_r22.errors);
  }
}
function UserListComponent_div_18_ng_container_10_ng_container_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 169)(1, "div", 170);
    \u0275\u0275element(2, "i", 171);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 172);
    \u0275\u0275template(5, UserListComponent_div_18_ng_container_10_ng_container_2_div_3_div_5_Template, 5, 2, "div", 173);
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
    \u0275\u0275template(1, UserListComponent_div_18_ng_container_10_ng_container_2_div_1_Template, 5, 2, "div", 165)(2, UserListComponent_div_18_ng_container_10_ng_container_2_div_2_Template, 3, 0, "div", 151)(3, UserListComponent_div_18_ng_container_10_ng_container_2_div_3_Template, 6, 2, "div", 166);
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
    \u0275\u0275template(1, UserListComponent_div_18_ng_container_10_div_1_Template, 6, 1, "div", 160)(2, UserListComponent_div_18_ng_container_10_ng_container_2_Template, 4, 3, "ng-container", 8);
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
    \u0275\u0275element(0, "span", 179);
  }
}
function UserListComponent_div_18_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 177);
    \u0275\u0275listener("click", function UserListComponent_div_18_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.importUsers());
    });
    \u0275\u0275template(1, UserListComponent_div_18_button_14_span_1_Template, 1, 0, "span", 178);
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
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 180);
    \u0275\u0275listener("click", function UserListComponent_div_18_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.importResult = null;
      return \u0275\u0275resetView(ctx_r1.selectedFile = null);
    });
    \u0275\u0275element(1, "i", 181);
    \u0275\u0275text(2, " Nouvel import ");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135)(1, "div", 136)(2, "div", 137)(3, "div", 138)(4, "h5", 139);
    \u0275\u0275element(5, "i", 140);
    \u0275\u0275text(6, "Importer des utilisateurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 141);
    \u0275\u0275listener("click", function UserListComponent_div_18_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportDialog());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 142);
    \u0275\u0275template(9, UserListComponent_div_18_ng_container_9_Template, 26, 3, "ng-container", 8)(10, UserListComponent_div_18_ng_container_10_Template, 3, 2, "ng-container", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 143)(12, "button", 144);
    \u0275\u0275listener("click", function UserListComponent_div_18_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportDialog());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, UserListComponent_div_18_button_14_Template, 3, 3, "button", 145)(15, UserListComponent_div_18_button_15_Template, 3, 0, "button", 146);
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
    \u0275\u0275element(0, "div", 182);
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
  selectedEntrepriseFilter = "";
  showRoleDropdown = false;
  showStatutDropdown = false;
  showEntrepriseDropdown = false;
  // ── Context entreprise (depuis query param) ──
  entrepriseId = null;
  // ── Listes pour filtres ──────────────────────
  allRoles = [];
  allEntreprises = [];
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
    this.loadRoles();
    this.loadEntreprises();
    this.route.queryParamMap.subscribe((params) => {
      const id = params.get("entreprise_id");
      this.entrepriseId = id ? +id : null;
      this.selectedEntrepriseFilter = id || "";
      this.getUserList();
    });
  }
  loadRoles() {
    this.userService.getRoles().subscribe({
      next: (response) => {
        const roles = response.roles || [];
        this.allRoles = sortRoles(roles);
        console.log("Roles charg\xE9s:", this.allRoles);
      },
      error: (err) => {
        console.error("Erreur lors du chargement des r\xF4les:", err);
      }
    });
  }
  loadEntreprises() {
    this.userService.getEntreprises().subscribe({
      next: (response) => {
        this.allEntreprises = response.entreprises || response.data || response || [];
        console.log("Entreprises charg\xE9es:", this.allEntreprises);
      },
      error: (err) => {
        console.error("Erreur lors du chargement des entreprises:", err);
      }
    });
  }
  // ── Toggle dropdowns ──
  toggleRoleDropdown(event) {
    event.stopPropagation();
    this.showStatutDropdown = false;
    this.showEntrepriseDropdown = false;
    this.showRoleDropdown = !this.showRoleDropdown;
  }
  toggleStatutDropdown(event) {
    event.stopPropagation();
    this.showRoleDropdown = false;
    this.showEntrepriseDropdown = false;
    this.showStatutDropdown = !this.showStatutDropdown;
  }
  toggleEntrepriseDropdown(event) {
    event.stopPropagation();
    this.showRoleDropdown = false;
    this.showStatutDropdown = false;
    this.showEntrepriseDropdown = !this.showEntrepriseDropdown;
  }
  // ── Ferme les dropdowns sur clic extérieur ──
  onDocumentClick() {
    this.showRoleDropdown = false;
    this.showStatutDropdown = false;
    this.showEntrepriseDropdown = false;
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
  setEntrepriseFilter(id) {
    this.selectedEntrepriseFilter = id;
    this.showEntrepriseDropdown = false;
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
    if (this.selectedEntrepriseFilter) {
      const eid = +this.selectedEntrepriseFilter;
      data = data.filter((u) => u.entreprise_id === eid);
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
  getEntrepriseName(id) {
    const entreprise = this.allEntreprises.find((e) => e.id.toString() === id);
    return entreprise?.nom || `Entreprise #${id}`;
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
  }, decls: 21, vars: 21, consts: [[1, "ul-shell"], [1, "ul-topbar"], [1, "isax", "isax-people", "ul-topbar__icon"], [1, "ul-topbar__title"], [1, "ul-topbar__stats"], ["routerLink", "/superadmin/superadmin-companymanagement", "class", "ul-back", 4, "ngIf"], [1, "ul-tabbar"], [1, "ul-tab", 3, "click"], [4, "ngIf"], ["class", "ul-role-embed", 4, "ngIf"], ["class", "ul-matrix-wrap", 4, "ngIf"], ["class", "modal", "tabindex", "-1", "role", "dialog", 3, "show", "display", 4, "ngIf"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [3, "onClose", "onSave", "visible", "isEditMode", "userData"], ["routerLink", "/superadmin/superadmin-companymanagement", 1, "ul-back"], [1, "isax", "isax-arrow-left-2", "me-1"], [1, "ul-toolbar"], [1, "ul-search"], [1, "isax", "isax-search-normal-1", "ul-search__icon"], ["type", "search", "placeholder", "Rechercher un utilisateur...", 1, "ul-search__input", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "ul-filter-group"], [1, "ul-filter", 3, "click"], [1, "isax", "isax-filter"], ["class", "ul-filter__chip", 4, "ngIf"], ["class", "ul-dropdown", 4, "ngIf"], ["class", "ul-filter-group", 4, "ngIf"], ["class", "ul-filter", 3, "ul-filter--on", 4, "ngIf"], [1, "isax", "isax-tick-circle"], [1, "ul-import-btn", 3, "click"], [1, "isax", "isax-import"], [1, "ul-tpl-btn", 3, "click"], [1, "isax", "isax-export"], [1, "ul-export-btn", 3, "click"], [1, "isax", "isax-document-download"], [1, "ul-add-btn", 3, "click"], [1, "isax", "isax-add"], ["class", "ul-alert", 4, "ngIf"], ["class", "ul-skeletons", 4, "ngIf"], ["class", "ul-table", 4, "ngIf"], ["class", "ul-pager", 4, "ngIf"], [1, "ul-filter__chip"], [1, "ul-dropdown"], [1, "ul-dropdown__item", 3, "click"], ["class", "ul-dropdown__item", 3, "ul-dropdown__item--on", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-building"], [1, "ul-filter"], [1, "ul-alert"], [1, "isax", "isax-warning-2"], [1, "ul-skeletons"], ["class", "ul-skeleton-row", 4, "ngFor", "ngForOf"], [1, "ul-skeleton-row"], [1, "ul-table"], [2, "width", "28%"], [2, "width", "16%"], [2, "width", "12%"], [2, "width", "14%"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ul-user"], [1, "ul-avatar"], [1, "ul-user__name"], [1, "ul-user__email"], [1, "ul-role-badge"], ["class", "ul-cie", 4, "ngIf"], ["class", "ul-cie-none", 4, "ngIf"], [1, "ul-statut"], [1, "ul-date"], [1, "ul-actions"], ["title", "Modifier", 1, "ul-act", 3, "click"], [1, "isax", "isax-edit"], ["class", "ul-act ul-act--warn", "title", "Archiver", 3, "click", 4, "ngIf"], ["class", "ul-act ul-act--ok", "title", "R\xE9activer", 3, "click", 4, "ngIf"], ["title", "Supprimer", 1, "ul-act", "ul-act--del", 3, "click"], [1, "isax", "isax-trash"], [1, "ul-cie"], [1, "ul-cie-none"], ["title", "Archiver", 1, "ul-act", "ul-act--warn", 3, "click"], [1, "isax", "isax-archive"], ["title", "R\xE9activer", 1, "ul-act", "ul-act--ok", 3, "click"], [1, "isax", "isax-refresh"], ["colspan", "6", 1, "ul-empty"], [1, "isax", "isax-people", "d-block", "mb-2", 2, "font-size", "2rem"], [1, "ul-pager"], [1, "ul-pager__info"], [1, "ul-pager__btns"], [1, "ul-pager__btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], ["class", "ul-pager__btn", 3, "ul-pager__btn--active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-3"], [1, "ul-pager__btn", 3, "click"], [1, "ul-role-embed"], [1, "ul-matrix-wrap"], [1, "ul-matrix__header"], [1, "ul-matrix__title"], [1, "isax", "isax-shield-security", "me-2"], [1, "ul-matrix__subtitle", "text-muted", "small"], [1, "ul-matrix__hierarchy", "mb-3"], [1, "ul-hier-chain"], [1, "ul-hier-badge", "ul-hier--sa"], [1, "isax", "isax-arrow-right-3", "ul-hier-arrow"], [1, "ul-hier-badge", "ul-hier--holding"], [1, "ul-hier-badge", "ul-hier--rh"], [1, "ul-hier-badge", "ul-hier--it"], [1, "ul-hier-badge", "ul-hier--mgr"], [1, "ul-hier-badge", "ul-hier--form"], [1, "ul-hier-badge", "ul-hier--emp"], [1, "table-responsive"], [1, "ul-matrix"], [2, "min-width", "220px"], ["title", "Super Admin"], [1, "ul-mh-role", "ul-mh--sa"], ["title", "Superadmin Holding"], [1, "ul-mh-role", "ul-mh--holding"], ["title", "Admin RH Holding"], ["title", "Admin RH"], [1, "ul-mh-role", "ul-mh--rh"], ["title", "Admin IT"], [1, "ul-mh-role", "ul-mh--it"], ["title", "Responsable RH"], ["title", "Manager"], [1, "ul-mh-role", "ul-mh--mgr"], ["title", "Formateur"], [1, "ul-mh-role", "ul-mh--form"], ["title", "Employ\xE9"], [1, "ul-mh-role", "ul-mh--emp"], [1, "ul-matrix__role-names"], [1, "ul-matrix__group-label"], [1, "small", "text-nowrap"], ["colspan", "10", 1, "ul-matrix__group"], [1, "ul-c-yes"], [1, "ul-c-no"], [1, "ul-c-partial"], [1, "ul-matrix__legend", "mt-3"], [1, "ul-matrix__note", "mt-2"], [1, "isax", "isax-info-circle", "me-1"], [1, "text-muted"], ["tabindex", "-1", "role", "dialog", 1, "modal"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "isax", "isax-import", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-secondary", 3, "click", 4, "ngIf"], [1, "mb-3"], ["for", "fileInput", 1, "form-label"], ["id", "fileInput", "type", "file", "accept", ".xlsx,.xls,.csv", 1, "form-control", 3, "change", "disabled"], [1, "form-text"], ["class", "alert alert-info py-2", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], [1, "alert", "alert-warning", "mb-0"], [1, "alert-heading", "small", "fw-bold"], [1, "mb-0", "mt-1", "small"], [1, "alert", "alert-info", "py-2"], [1, "text-muted", "ms-1"], [1, "progress"], ["role", "progressbar", "aria-label", "Progression de l'import", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "alert-heading", "fw-bold"], [1, "isax", "isax-close-circle", "me-1"], [4, "ngFor", "ngForOf"], ["class", "alert alert-success py-2", 4, "ngIf"], ["class", "mt-2", 4, "ngIf"], [1, "alert", "alert-success", "py-2"], [1, "isax", "isax-tick-circle", "me-1"], [1, "mt-2"], [1, "alert", "alert-danger", "mb-2", "py-2", "fw-bold", "small"], [1, "isax", "isax-warning-2", "me-1"], [1, "ul-import-error-list"], ["class", "ul-import-error-item", 4, "ngFor", "ngForOf"], [1, "ul-import-error-item"], [1, "badge", "bg-danger", "me-2"], [1, "mb-0", "small"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-1"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "isax", "isax-refresh", "me-1"], [1, "modal-backdrop", "fade"]], template: function UserListComponent_Template(rf, ctx) {
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
      \u0275\u0275template(15, UserListComponent_ng_container_15_Template, 35, 17, "ng-container", 8)(16, UserListComponent_div_16_Template, 2, 0, "div", 9)(17, UserListComponent_div_17_Template, 1909, 0, "div", 10);
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
      <div class="ul-filter-group">\r
        <button class="ul-filter" [class.ul-filter--on]="!!selectedRoleFilter"\r
                (click)="toggleRoleDropdown($event)">\r
          <i class="isax isax-filter"></i> R\xF4le\r
          <span *ngIf="selectedRoleFilter" class="ul-filter__chip">{{ selectedRoleFilter }}</span>\r
        </button>\r
        <div class="ul-dropdown" *ngIf="showRoleDropdown">\r
          <div class="ul-dropdown__item" (click)="setRoleFilter('')">Tous les r\xF4les</div>\r
          <div class="ul-dropdown__item"\r
               *ngFor="let r of allRoles"\r
               [class.ul-dropdown__item--on]="selectedRoleFilter === r.name"\r
               (click)="setRoleFilter(r.name)">{{ r.name }}</div>\r
        </div>\r
      </div>\r
\r
      <!-- Filtre Entreprise -->\r
      <div class="ul-filter-group" *ngIf="!entrepriseId">\r
        <button class="ul-filter" [class.ul-filter--on]="!!selectedEntrepriseFilter"\r
                (click)="toggleEntrepriseDropdown($event)">\r
          <i class="isax isax-building"></i> Entreprise\r
          <span *ngIf="selectedEntrepriseFilter" class="ul-filter__chip">\r
            {{ getEntrepriseName(selectedEntrepriseFilter) }}\r
          </span>\r
        </button>\r
        <div class="ul-dropdown" *ngIf="showEntrepriseDropdown">\r
          <div class="ul-dropdown__item" (click)="setEntrepriseFilter('')">Toutes les entreprises</div>\r
          <div class="ul-dropdown__item"\r
               *ngFor="let e of allEntreprises"\r
               [class.ul-dropdown__item--on]="selectedEntrepriseFilter === e.id.toString()"\r
               (click)="setEntrepriseFilter(e.id.toString())">{{ e.nom }}</div>\r
        </div>\r
      </div>\r
      <button *ngIf="entrepriseId" class="ul-filter" [class.ul-filter--on]="true">\r
        <i class="isax isax-building"></i>\r
        {{ getEntrepriseName(entrepriseId.toString()) }}\r
      </button>\r
\r
      <!-- Filtre Statut -->\r
      <div class="ul-filter-group">\r
        <button class="ul-filter" [class.ul-filter--on]="selectedStatutFilter !== ''"\r
                (click)="toggleStatutDropdown($event)">\r
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
        <span class="ul-hier-badge ul-hier--rh">Admin RH</span>\r
        <i class="isax isax-arrow-right-3 ul-hier-arrow"></i>\r
        <span class="ul-hier-badge ul-hier--it">Admin IT</span>\r
        <i class="isax isax-arrow-right-3 ul-hier-arrow"></i>\r
        <span class="ul-hier-badge ul-hier--rh">Responsable RH</span>\r
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
          <th title="Admin RH"><span class="ul-mh-role ul-mh--rh">ARH</span></th>\r
          <th title="Admin IT"><span class="ul-mh-role ul-mh--it">AIT</span></th>\r
          <th title="Responsable RH"><span class="ul-mh-role ul-mh--rh">RRH</span></th>\r
          <th title="Manager"><span class="ul-mh-role ul-mh--mgr">MGR</span></th>\r
          <th title="Formateur"><span class="ul-mh-role ul-mh--form">FOR</span></th>\r
          <th title="Employ\xE9"><span class="ul-mh-role ul-mh--emp">EMP</span></th>\r
        </tr>\r
        <tr class="ul-matrix__role-names">\r
          <td class="ul-matrix__group-label">R\xF4les (ordre hi\xE9rarchique \u2193)</td>\r
          <td class="small text-nowrap">Super Admin</td>\r
          <td class="small text-nowrap">Superadmin Holding</td>\r
          <td class="small text-nowrap">Admin RH Holding</td>\r
          <td class="small text-nowrap">Admin RH</td>\r
          <td class="small text-nowrap">Admin IT</td>\r
          <td class="small text-nowrap">Responsable RH</td>\r
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
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
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
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>G\xE9rer les abonnements & facturation</td>\r
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
          <td>Personnaliser l'interface (th\xE8me, logo)</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
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
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
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
        <tr>\r
          <td>G\xE9rer les directions / d\xE9partements</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
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
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Modifier les permissions d'un r\xF4le</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
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
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Voir la matrice des habilitations</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
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
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
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
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
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
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
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
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>R\xE9initialiser le mot de passe</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
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
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
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
          <td>Modifier / archiver une formation</td>\r
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
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
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
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Cr\xE9er / g\xE9rer les quiz & \xE9valuations</td>\r
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
          <td>G\xE9rer le catalogue de formations</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
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
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
        </tr>\r
        <tr>\r
          <td>Demander une formation (auto-inscription)</td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
        </tr>\r
\r
        <!-- Parcours de formation -->\r
        <tr><td class="ul-matrix__group" colspan="10">Parcours de formation</td></tr>\r
        <tr>\r
          <td>Cr\xE9er / modifier un parcours</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Supprimer / archiver un parcours</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Assigner un parcours \xE0 un utilisateur</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Suivre la progression d'un parcours</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
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
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Supprimer / annuler une session</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Inscrire des participants \xE0 une session</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>G\xE9rer l'\xE9margement / pr\xE9sence</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
\r
        <!-- Plans de formation -->\r
        <tr><td class="ul-matrix__group" colspan="10">Plans de formation</td></tr>\r
        <tr>\r
          <td>Cr\xE9er / modifier un plan de formation</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Valider / approuver un plan</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Suivre le budget formation</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
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
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
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
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
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
        <tr>\r
          <td>Exporter les rapports (PDF, Excel)</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
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
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
        </tr>\r
\r
        <!-- Certifications -->\r
        <tr><td class="ul-matrix__group" colspan="10">Certifications</td></tr>\r
        <tr>\r
          <td>Cr\xE9er / configurer un mod\xE8le de certificat</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>G\xE9n\xE9rer / valider un certificat</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>R\xE9voquer un certificat</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
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
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
        </tr>\r
\r
        <!-- Notifications & communication -->\r
        <tr><td class="ul-matrix__group" colspan="10">Notifications & communication</td></tr>\r
        <tr>\r
          <td>Envoyer des notifications</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
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
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Envoyer des emails en masse</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
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
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
        </tr>\r
\r
        <!-- \xC9valuations & feedback -->\r
        <tr><td class="ul-matrix__group" colspan="10">\xC9valuations & feedback</td></tr>\r
        <tr>\r
          <td>Cr\xE9er une \xE9valuation \xE0 chaud / \xE0 froid</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
        </tr>\r
        <tr>\r
          <td>Consulter les r\xE9sultats d'\xE9valuation</td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-partial">\u25D0</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
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
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
        </tr>\r
        <tr>\r
          <td>Noter un formateur</td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-no">\u2014</span></td>\r
          <td><span class="ul-c-yes">\u2713</span></td>\r
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
        <strong>SA</strong> = Super Admin \xB7 <strong>SH</strong> = Superadmin Holding \xB7\r
        <strong>ARH-H</strong> = Admin RH Holding \xB7 <strong>ARH</strong> = Admin RH \xB7\r
        <strong>AIT</strong> = Admin IT \xB7 <strong>RRH</strong> = Responsable RH \xB7\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserListComponent, { className: "UserListComponent", filePath: "app/features/superadmin/user/user-list.component.ts", lineNumber: 21 });
})();
export {
  UserListComponent
};
//# sourceMappingURL=chunk-Q5WCG7BX.js.map
