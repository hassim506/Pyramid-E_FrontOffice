import {
  RoleService
} from "./chunk-5V3WBW4C.js";
import {
  PermissionService
} from "./chunk-HPF6XDYM.js";
import {
  AuthService
} from "./chunk-GD4TWLVQ.js";
import {
  routes
} from "./chunk-F53JZPBU.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormArray,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-IKOSZIEY.js";
import {
  RouterModule
} from "./chunk-M6KR3YQW.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-5DIP3EXV.js";
import {
  Component,
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
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTSSTHJF.js";

// src/app/features/adminrh/adminrh-role/adminrh-role.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => [1, 2, 3, 4, 5];
function AdminrhRoleComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275element(1, "i", 82);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function AdminrhRoleComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275element(1, "i", 84);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function AdminrhRoleComponent_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 87);
  }
}
function AdminrhRoleComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275template(1, AdminrhRoleComponent_div_16_div_1_Template, 1, 0, "div", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function AdminrhRoleComponent_table_17_tr_16_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111);
    \u0275\u0275text(1, "syst\xE8me");
    \u0275\u0275elementEnd();
  }
}
function AdminrhRoleComponent_table_17_tr_16_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r3.description);
  }
}
function AdminrhRoleComponent_table_17_tr_16_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("N", role_r3.role_level);
  }
}
function AdminrhRoleComponent_table_17_tr_16_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 114);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminrhRoleComponent_table_17_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 95)(3, "div", 96);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 97);
    \u0275\u0275text(7);
    \u0275\u0275template(8, AdminrhRoleComponent_table_17_tr_16_span_8_Template, 2, 0, "span", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AdminrhRoleComponent_table_17_tr_16_div_9_Template, 2, 1, "div", 99);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 100);
    \u0275\u0275element(12, "i");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, AdminrhRoleComponent_table_17_tr_16_span_15_Template, 2, 1, "span", 101)(16, AdminrhRoleComponent_table_17_tr_16_span_16_Template, 2, 0, "span", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "button", 103);
    \u0275\u0275listener("click", function AdminrhRoleComponent_table_17_tr_16_Template_button_click_18_listener() {
      const role_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewRolePermissions(role_r3));
    });
    \u0275\u0275element(19, "i", 104);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "span", 105);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td")(25, "div", 106)(26, "button", 107);
    \u0275\u0275listener("click", function AdminrhRoleComponent_table_17_tr_16_Template_button_click_26_listener() {
      const role_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewRolePermissions(role_r3));
    });
    \u0275\u0275element(27, "i", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 109);
    \u0275\u0275listener("click", function AdminrhRoleComponent_table_17_tr_16_Template_button_click_28_listener() {
      const role_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openModal(role_r3));
    });
    \u0275\u0275element(29, "i", 110);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-role", ctx_r0.getRoleTypeKey(role_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r3.name.charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", role_r3.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", role_r3.is_system);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", role_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-role", ctx_r0.getRoleTypeKey(role_r3));
    \u0275\u0275advance();
    \u0275\u0275classMap("isax " + ctx_r0.getRoleTypeIcon(role_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getRoleTypeLabel(role_r3), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", role_r3.role_level != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", role_r3.role_level == null);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", "Voir les " + ctx_r0.getPermissionsCount(role_r3) + " permissions");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getPermissionsCount(role_r3), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(role_r3.users_count || 0);
  }
}
function AdminrhRoleComponent_table_17_tr_17_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 118);
    \u0275\u0275listener("click", function AdminrhRoleComponent_table_17_tr_17_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openModal());
    });
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275text(2, " Cr\xE9er le premier r\xF4le ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhRoleComponent_table_17_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 115);
    \u0275\u0275element(2, "i", 116);
    \u0275\u0275text(3);
    \u0275\u0275element(4, "br");
    \u0275\u0275template(5, AdminrhRoleComponent_table_17_tr_17_button_5_Template, 3, 0, "button", 117);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.searchText ? "Aucun r\xF4le ne correspond \xE0 votre recherche" : "Aucun r\xF4le trouv\xE9", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.searchText);
  }
}
function AdminrhRoleComponent_table_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 88)(1, "thead")(2, "tr")(3, "th", 89);
    \u0275\u0275text(4, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 90);
    \u0275\u0275text(6, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 91);
    \u0275\u0275text(8, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 92);
    \u0275\u0275text(10, "Permissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 91);
    \u0275\u0275text(12, "Utilisateurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 93);
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, AdminrhRoleComponent_table_17_tr_16_Template, 30, 14, "tr", 94)(17, AdminrhRoleComponent_table_17_tr_17_Template, 6, 2, "tr", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r0.paginatedRoles)("ngForTrackBy", ctx_r0.trackByRoleId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.paginatedRoles.length);
  }
}
function AdminrhRoleComponent_div_18_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 126);
    \u0275\u0275listener("click", function AdminrhRoleComponent_div_18_button_6_Template_button_click_0_listener() {
      const page_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPageChange(page_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ul-pager__btn--active", ctx_r0.currentPage === page_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(page_r7);
  }
}
function AdminrhRoleComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 119)(1, "span", 120);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 121)(4, "button", 122);
    \u0275\u0275listener("click", function AdminrhRoleComponent_div_18_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange(ctx_r0.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminrhRoleComponent_div_18_button_6_Template, 2, 3, "button", 124);
    \u0275\u0275elementStart(7, "button", 122);
    \u0275\u0275listener("click", function AdminrhRoleComponent_div_18_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange(ctx_r0.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 125);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r0.getStartIndex(), "\u2013", ctx_r0.getEndIndex(), " sur ", ctx_r0.totalItems, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.getPaginationArray());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
  }
}
function AdminrhRoleComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275element(1, "i", 128);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function AdminrhRoleComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275element(1, "i", 130);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
function AdminrhRoleComponent_div_30_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 136);
    \u0275\u0275listener("click", function AdminrhRoleComponent_div_30_ng_container_4_Template_button_click_1_listener() {
      const sr_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openModal(ctx_r0.getSystemRoleFromLoaded(sr_r9.name)));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const sr_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("title", "G\xE9rer les permissions de " + sr_r9.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sr_r9.name, " ");
  }
}
function AdminrhRoleComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131)(1, "div", 132)(2, "span", 133);
    \u0275\u0275text(3, " R\xF4les syst\xE8me pr\xE9sents dans toutes les entreprises ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminrhRoleComponent_div_30_ng_container_4_Template, 3, 2, "ng-container", 61);
    \u0275\u0275elementStart(5, "button", 134);
    \u0275\u0275element(6, "i", 135);
    \u0275\u0275text(7, " G\xE9rer leurs permissions \u2197 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.SYSTEM_ROLES);
  }
}
function AdminrhRoleComponent_div_38_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Le nom est requis");
    \u0275\u0275elementEnd();
  }
}
function AdminrhRoleComponent_div_38_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Minimum 3 caract\xE8res");
    \u0275\u0275elementEnd();
  }
}
function AdminrhRoleComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137);
    \u0275\u0275template(1, AdminrhRoleComponent_div_38_small_1_Template, 2, 0, "small", 74)(2, AdminrhRoleComponent_div_38_small_2_Template, 2, 0, "small", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["name"].hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["name"].hasError("minlength"));
  }
}
function AdminrhRoleComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Niveau minimum : ", ctx_r0.minRoleLevel, " ");
  }
}
function AdminrhRoleComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "div", 139);
    \u0275\u0275listener("click", function AdminrhRoleComponent_div_61_Template_div_click_1_listener() {
      const t_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.f["type"].setValue(t_r11.value));
    });
    \u0275\u0275elementStart(2, "div", 140)(3, "div", 141)(4, "span", 142);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "span", 143);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 144);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", ctx_r0.f["type"].value === t_r11.value && t_r11.color === "purple" ? "#6f42c1" : null)("background-color", ctx_r0.f["type"].value === t_r11.value && t_r11.color === "purple" ? "#f3eeff" : null);
    \u0275\u0275classProp("border-primary", ctx_r0.f["type"].value === t_r11.value && t_r11.color === "primary")("border-purple", ctx_r0.f["type"].value === t_r11.value && t_r11.color === "purple")("border-success", ctx_r0.f["type"].value === t_r11.value && t_r11.color === "success")("border-warning", ctx_r0.f["type"].value === t_r11.value && t_r11.color === "warning")("bg-primary-subtle", ctx_r0.f["type"].value === t_r11.value && t_r11.color === "primary")("bg-success-subtle", ctx_r0.f["type"].value === t_r11.value && t_r11.color === "success")("bg-warning-subtle", ctx_r0.f["type"].value === t_r11.value && t_r11.color === "warning")("border-light", ctx_r0.f["type"].value !== t_r11.value);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r11.label);
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", ctx_r0.f["type"].value === t_r11.value ? "currentColor" : "#dee2e6")("background", ctx_r0.f["type"].value === t_r11.value ? "currentColor" : "transparent");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r11.description);
  }
}
function AdminrhRoleComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 145);
    \u0275\u0275text(1, " Le type est requis ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhRoleComponent_button_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 146);
    \u0275\u0275listener("click", function AdminrhRoleComponent_button_80_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.permissionSearch = "");
    });
    \u0275\u0275element(1, "i", 147);
    \u0275\u0275elementEnd();
  }
}
function AdminrhRoleComponent_button_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 148);
    \u0275\u0275listener("click", function AdminrhRoleComponent_button_82_Template_button_click_0_listener() {
      const cat_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setPermissionCategory(cat_r14.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r14 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("btn-dark", ctx_r0.activePermissionCategory === cat_r14.key)("btn-outline-secondary", ctx_r0.activePermissionCategory !== cat_r14.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r14.label, " ");
  }
}
function AdminrhRoleComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 149);
    \u0275\u0275element(1, "i", 150);
    \u0275\u0275text(2, " Aucune permission disponible ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhRoleComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 149);
    \u0275\u0275element(1, "i", 151);
    \u0275\u0275text(2, " Aucune permission ne correspond \xE0 votre recherche ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhRoleComponent_ng_container_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 152);
    \u0275\u0275listener("click", function AdminrhRoleComponent_ng_container_86_Template_div_click_1_listener() {
      const permission_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.permissionsFormArray.at(ctx_r0.getPermissionIndex(permission_r16)).setValue(!ctx_r0.permissionsFormArray.at(ctx_r0.getPermissionIndex(permission_r16)).value));
    });
    \u0275\u0275elementStart(2, "input", 153);
    \u0275\u0275listener("click", function AdminrhRoleComponent_ng_container_86_Template_input_click_2_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 154);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const permission_r16 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r0.permissionsFormArray.at(ctx_r0.getPermissionIndex(permission_r16)).value);
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", ctx_r0.getPermissionIndex(permission_r16))("id", "perm-" + permission_r16.id);
    \u0275\u0275advance();
    \u0275\u0275property("for", "perm-" + permission_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", permission_r16.name, " ");
  }
}
function AdminrhRoleComponent_span_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 155);
  }
}
function AdminrhRoleComponent_i_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 156);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("isax-edit", ctx_r0.isEditing)("isax-add", !ctx_r0.isEditing);
  }
}
function AdminrhRoleComponent_div_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 157);
    \u0275\u0275element(1, "i", 158);
    \u0275\u0275elementStart(2, "h6", 144);
    \u0275\u0275text(3, "Aucune permission assign\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 159);
    \u0275\u0275text(5, "Ce r\xF4le n'a aucune permission assign\xE9e pour le moment.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 160);
    \u0275\u0275listener("click", function AdminrhRoleComponent_div_105_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editRoleFromPermissionsView());
    });
    \u0275\u0275element(7, "i", 79);
    \u0275\u0275text(8, " Modifier le r\xF4le ");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhRoleComponent_div_106_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 169)(1, "div", 170)(2, "div", 171)(3, "div", 172)(4, "div", 173);
    \u0275\u0275element(5, "i", 174);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 175)(7, "h6", 176);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small", 144);
    \u0275\u0275element(10, "i", 177);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const permission_r18 = ctx.$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(permission_r18.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", permission_r18.guard_name, " ");
  }
}
function AdminrhRoleComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 161);
    \u0275\u0275template(2, AdminrhRoleComponent_div_106_div_2_Template, 12, 2, "div", 162);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 163)(4, "div", 164)(5, "div", 165)(6, "div", 166);
    \u0275\u0275element(7, "i", 167);
    \u0275\u0275elementStart(8, "div")(9, "h4", 168);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small", 144);
    \u0275\u0275text(12, "Permission(s) assign\xE9e(s)");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.selectedRole.permissions)("ngForTrackBy", ctx_r0.trackByPermissionId);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.getPermissionsCount(ctx_r0.selectedRole));
  }
}
function AdminrhRoleComponent_div_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 178);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r0.showModal || ctx_r0.showPermissionsModal);
  }
}
var SUPERADMIN_ONLY_PERMISSIONS = [
  "gerer systeme",
  "gerer roles",
  "lister roles",
  "creer roles",
  "modifier roles",
  "supprimer roles",
  "lister permissions",
  "creer permissions",
  "modifier permissions",
  "supprimer permissions",
  "voir logs",
  "sauvegarder systeme",
  "mode maintenance",
  "lister clients",
  "creer clients",
  "modifier clients",
  "supprimer clients",
  "gerer contrats clients"
];
var SUPERADMIN_DELETE_KEYWORDS = ["supprimer"];
var AdminrhRoleComponent = class _AdminrhRoleComponent {
  roleService;
  permissionService;
  authService;
  fb;
  routes = routes;
  currentUser;
  isSuperAdmin = false;
  isHoldingRole = false;
  creatorRoleLevel = null;
  HOLDING_ROLE_NAMES = ["Admin RH Holding", "Superadmin Holding"];
  // Rôles système de base (toutes entreprises)
  BASE_SYSTEM_ROLES = [
    { name: "Responsable RH", type: "rh", icon: "isax-people" },
    { name: "Admin RH", type: "rh", icon: "isax-people" },
    { name: "Admin IT", type: "admin", icon: "isax-setting-2" },
    { name: "Formateur", type: "formateur", icon: "isax-teacher" },
    { name: "Employ\xE9", type: "employe", icon: "isax-user" },
    { name: "Consultant", type: "formateur", icon: "isax-briefcase" },
    { name: "Manager", type: "rh", icon: "isax-chart" }
  ];
  HOLDING_SYSTEM_ROLES = [
    { name: "Admin RH Holding", type: "rh", icon: "isax-building-4" },
    { name: "Superadmin Holding", type: "admin", icon: "isax-crown" }
  ];
  get SYSTEM_ROLES() {
    return this.isHoldingRole ? [...this.BASE_SYSTEM_ROLES, ...this.HOLDING_SYSTEM_ROLES] : this.BASE_SYSTEM_ROLES;
  }
  // Types de rôles créables par l'AdminRH
  ROLE_TYPES = [
    { value: "rh", label: "Administrateur RH", description: "Gestion RH, formations, validations", color: "primary" },
    { value: "formateur", label: "Formateur / Consultant", description: "Cr\xE9ation de contenus, suivi", color: "purple" },
    { value: "employe", label: "Employ\xE9 / Apprenant", description: "Acc\xE8s formations et quiz", color: "success" },
    { value: "manager", label: "Manager", description: "Suivi \xE9quipe, rapports", color: "warning" }
  ];
  // Catégories pour le filtre des permissions
  PERMISSION_CATEGORIES = [
    { key: "all", label: "Toutes" },
    { key: "utilisateurs", label: "Utilisateurs", keywords: ["utilisateur", "user", "employe", "apprenant"] },
    { key: "formations", label: "Formations", keywords: ["formation", "module", "section", "contenu", "parcours", "access-formation"] },
    { key: "catalogue", label: "Catalogues", keywords: ["catalogue", "categorie"] },
    { key: "sessions", label: "Sessions", keywords: ["session", "s\xE9ance", "seance", "planif"] },
    { key: "quiz", label: "Quiz", keywords: ["quiz", "evaluation", "examen", "sondage"] },
    { key: "rapports", label: "Rapports", keywords: ["rapport", "statistique", "analys", "progres", "certificat", "palmares"] },
    { key: "entreprises", label: "Entreprises", keywords: ["entreprise", "client", "contrat"] }
  ];
  activePermissionCategory = "all";
  permissionSearch = "";
  // ============= ÉTAT DES DONNÉES =============
  roles = [];
  systemRoles = [];
  // rôles système (entreprise_id = null)
  allPermissions = [];
  adminrhPermissions = [];
  // permissions que l'utilisateur peut déléguer
  creatorPermissionNames = [];
  // permissions Spatie du rôle courant
  filteredRoles = [];
  paginatedRoles = [];
  // ============= FORMULAIRE ET MODALS =============
  roleForm;
  isEditing = false;
  selectedRole = null;
  selectedRolePermissions = [];
  showModal = false;
  showPermissionsModal = false;
  // ============= ÉTATS DE L'INTERFACE =============
  loading = false;
  searchText = "";
  successMessage = "";
  errorMessage = "";
  // ============= CONFIGURATION DE LA PAGINATION =============
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  totalPages = 0;
  itemsPerPageOptions = [5, 10, 25, 50];
  constructor(roleService, permissionService, authService, fb) {
    this.roleService = roleService;
    this.permissionService = permissionService;
    this.authService = authService;
    this.fb = fb;
    this.currentUser = this.authService.getUser();
    this.isSuperAdmin = this.currentUser?.role_id === 1;
    const spatieRoleNames = (this.currentUser?.roles ?? []).map((r) => r.name ?? "");
    const holdingRoleIds = [5, 14, 25, 26];
    this.isHoldingRole = spatieRoleNames.some((n) => n.includes("Holding")) || (this.currentUser?.role_type ?? "").toLowerCase().includes("holding") || holdingRoleIds.includes(Number(this.currentUser?.role_id));
    this.creatorRoleLevel = this.currentUser?.role_level ?? null;
    this.initializeForm();
  }
  ngOnInit() {
    this.loadRoles();
    this.loadPermissions();
    setTimeout(() => {
      console.log("\u{1F50D} \xC9tat final apr\xE8s chargement:");
      console.log("- R\xF4les:", this.roles.length);
      console.log("- Permissions:", this.allPermissions.length);
    }, 3e3);
  }
  // ============= INITIALISATION =============
  initializeForm() {
    this.roleForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.pattern(/^[a-zA-Z0-9\s\-_.àâäéèêëîïôùûüç]+$/)]],
      guard_name: ["web", [Validators.required]],
      type: [null, [Validators.required]],
      role_level: [this.minRoleLevel, [Validators.required, Validators.min(this.minRoleLevel), Validators.max(10)]],
      permissions: this.fb.array([])
    });
  }
  get minRoleLevel() {
    return this.creatorRoleLevel !== null ? this.creatorRoleLevel + 1 : 2;
  }
  // ============= CHARGEMENT DES DONNÉES =============
  loadRoles() {
    this.loading = true;
    console.log("\u{1F50D} D\xE9but du chargement des r\xF4les...");
    this.roleService.getAllRoles().subscribe({
      next: (response) => {
        console.log("\u2705 R\xE9ponse compl\xE8te du backend:", response);
        this.roles = this.extractRolesFromResponse(response);
        if (this.allPermissions.length > 0) {
          this.rebuildAdminrhPermissions();
        }
        this.initializeDataDisplay();
        this.loading = false;
      },
      error: (error) => {
        console.error("\u274C Erreur lors du chargement des r\xF4les:", error);
        this.handleError(error, "chargement des r\xF4les");
        this.roles = [];
        this.initializeDataDisplay();
        this.loading = false;
      }
    });
  }
  loadPermissions() {
    console.log("\u{1F50D} D\xE9but du chargement des permissions...");
    this.permissionService.getAllPermissions().subscribe({
      next: (response) => {
        console.log("\u2705 R\xE9ponse des permissions:", response);
        this.allPermissions = this.extractPermissionsFromResponse(response);
        console.log("\u2705 Permissions charg\xE9es:", this.allPermissions.length);
        if (this.allPermissions.length > 0) {
          console.log("\u{1F4CA} Premi\xE8re permission:", this.allPermissions[0]);
        }
        this.createPermissionsFormArray();
      },
      error: (error) => {
        console.error("\u274C Erreur lors du chargement des permissions:", error);
        this.handleError(error, "chargement des permissions");
        this.allPermissions = [];
      }
    });
  }
  extractRolesFromResponse(response) {
    if (response.system_roles && Array.isArray(response.system_roles)) {
      this.systemRoles = response.system_roles;
    }
    if (response.creator_permissions && Array.isArray(response.creator_permissions)) {
      this.creatorPermissionNames = response.creator_permissions;
    }
    if (response.creator_role_level !== void 0) {
      this.creatorRoleLevel = response.creator_role_level ?? null;
      const defaultLevel = this.creatorRoleLevel !== null ? this.creatorRoleLevel + 1 : 2;
      this.roleForm.patchValue({ role_level: defaultLevel });
      this.roleForm.get("role_level")?.setValidators([
        Validators.required,
        Validators.min(this.minRoleLevel),
        Validators.max(10)
      ]);
      this.roleForm.get("role_level")?.updateValueAndValidity();
    }
    let list = [];
    if (response.roles && Array.isArray(response.roles)) {
      list = response.roles;
    } else if (Array.isArray(response)) {
      list = response;
    } else if (response.data && Array.isArray(response.data)) {
      list = response.data;
    } else if (response.success && Array.isArray(response.data)) {
      list = response.data;
    } else {
      console.warn("\u26A0\uFE0F Structure de r\xE9ponse des r\xF4les non reconnue:", response);
      return [];
    }
    return list;
  }
  rebuildAdminrhPermissions() {
    const list = this.allPermissions;
    if (this.isSuperAdmin) {
      this.adminrhPermissions = list;
    } else if (this.creatorPermissionNames.length > 0) {
      this.adminrhPermissions = list.filter((p) => this.creatorPermissionNames.includes(p.name) && !this.isRestrictedPermission(p.name));
    } else {
      this.adminrhPermissions = list.filter((p) => !this.isRestrictedPermission(p.name));
    }
    if (this.showModal) {
      this.createPermissionsFormArray();
    }
  }
  isRestrictedPermission(name) {
    const lower = name.toLowerCase().trim();
    if (SUPERADMIN_ONLY_PERMISSIONS.includes(lower))
      return true;
    if (SUPERADMIN_DELETE_KEYWORDS.some((kw) => lower.startsWith(kw)))
      return true;
    return false;
  }
  extractPermissionsFromResponse(response) {
    let list = [];
    if (Array.isArray(response)) {
      list = response;
    } else if (response.data && Array.isArray(response.data)) {
      list = response.data;
    } else if (response.success && Array.isArray(response.data)) {
      list = response.data;
    } else if (response.permissions && Array.isArray(response.permissions)) {
      list = response.permissions;
    } else {
      console.warn("\u26A0\uFE0F Structure de r\xE9ponse des permissions non reconnue:", response);
      return [];
    }
    this.allPermissions = list;
    this.rebuildAdminrhPermissions();
    return list;
  }
  ROLE_ORDER = [
    "Super Admin",
    "Superadmin Holding",
    "Super Admin Holding",
    "Super Admin RH Holding",
    "Administrateur RH Holding",
    "Admin RH Holding",
    "Responsable RH Groupe",
    "Responsable RH",
    "Admin RH",
    "Administrateur RH",
    "Admin IT",
    "Administrateur IT",
    "Gestionnaire de Contenu",
    "Gestionnaire de Compte Client",
    "Administrateur Entreprise",
    "Admin RH Entreprise",
    "Manager",
    "Formateur",
    "Consultant",
    "Employ\xE9",
    "Employe"
  ];
  sortRoles(roles) {
    return [...roles].sort((a, b) => {
      const ia = this.ROLE_ORDER.indexOf(a.name);
      const ib = this.ROLE_ORDER.indexOf(b.name);
      if (ia !== -1 && ib !== -1)
        return ia - ib;
      if (ia !== -1)
        return -1;
      if (ib !== -1)
        return 1;
      const la = a.role_level ?? 99;
      const lb = b.role_level ?? 99;
      if (la !== lb)
        return la - lb;
      return a.name.localeCompare(b.name, "fr");
    });
  }
  initializeDataDisplay() {
    this.filteredRoles = this.sortRoles(this.roles);
    this.currentPage = 1;
    this.updatePagination();
  }
  // ============= GESTION DU FORMARRAY DES PERMISSIONS =============
  createPermissionsFormArray() {
    const perms = this.adminrhPermissions;
    if (perms.length === 0) {
      console.warn("\u26A0\uFE0F Aucune permission disponible pour cr\xE9er le FormArray");
      return;
    }
    const permissionsFormArray = this.fb.array(perms.map(() => this.fb.control(false)));
    this.roleForm.setControl("permissions", permissionsFormArray);
    console.log("\u2705 FormArray des permissions cr\xE9\xE9 avec", permissionsFormArray.length, "contr\xF4les");
  }
  get permissionsFormArray() {
    return this.roleForm.get("permissions");
  }
  // ============= RECHERCHE ET FILTRAGE =============
  searchRoles() {
    const searchTerm = this.searchText.trim().toLowerCase();
    const source = !searchTerm ? this.roles : this.roles.filter((role) => role.name.toLowerCase().includes(searchTerm) || role.guard_name.toLowerCase().includes(searchTerm) || role.description && role.description.toLowerCase().includes(searchTerm));
    this.filteredRoles = this.sortRoles(source);
    this.currentPage = 1;
    this.updatePagination();
    console.log(`\u{1F50D} Recherche "${searchTerm}": ${this.filteredRoles.length} r\xE9sultat(s)`);
  }
  clearSearch() {
    this.searchText = "";
    this.searchRoles();
  }
  // ============= PAGINATION =============
  updatePagination() {
    this.totalItems = this.filteredRoles.length;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    } else if (this.currentPage < 1) {
      this.currentPage = 1;
    }
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedRoles = this.filteredRoles.slice(startIndex, endIndex);
    console.log(`\u{1F4CA} Pagination: Page ${this.currentPage}/${this.totalPages}, ${this.paginatedRoles.length} r\xF4les affich\xE9s`);
  }
  onPageChange(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
      console.log(`\u{1F4C4} Changement de page vers: ${page}`);
    }
  }
  onItemsPerPageChange() {
    this.currentPage = 1;
    this.updatePagination();
    console.log(`\u{1F4CA} Changement d'\xE9l\xE9ments par page: ${this.itemsPerPage}`);
  }
  getPaginationArray() {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }
  getStartIndex() {
    return Math.min((this.currentPage - 1) * this.itemsPerPage + 1, this.totalItems);
  }
  getEndIndex() {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }
  // ============= CATÉGORIES DE PERMISSIONS =============
  setPermissionCategory(key) {
    this.activePermissionCategory = key;
  }
  get filteredPermissionsForModal() {
    let list = this.adminrhPermissions;
    if (this.activePermissionCategory !== "all") {
      const cat = this.PERMISSION_CATEGORIES.find((c) => c.key === this.activePermissionCategory);
      if (cat?.keywords) {
        list = list.filter((p) => cat.keywords.some((kw) => p.name.toLowerCase().includes(kw)));
      }
    }
    const search = this.permissionSearch.trim().toLowerCase();
    if (search) {
      list = list.filter((p) => p.name.toLowerCase().includes(search));
    }
    return list;
  }
  // Retourne l'index global dans adminrhPermissions pour un permission filtré
  getPermissionIndex(permission) {
    return this.adminrhPermissions.indexOf(permission);
  }
  // Rôle système : chercher dans la liste system_roles retournée par l'API
  getSystemRoleFromLoaded(name) {
    return this.systemRoles.find((r) => r.name.toLowerCase() === name.toLowerCase());
  }
  // ============= GESTION DES PERMISSIONS =============
  getPermissionsCount(role) {
    return role?.permissions?.length || 0;
  }
  selectAllPermissions() {
    const permissionsArray = this.permissionsFormArray;
    if (!permissionsArray || permissionsArray.length === 0) {
      console.warn("\u26A0\uFE0F FormArray des permissions non disponible");
      return;
    }
    for (let i = 0; i < permissionsArray.length; i++) {
      permissionsArray.at(i).setValue(true);
    }
    console.log("\u2705 Toutes les permissions s\xE9lectionn\xE9es:", this.getSelectedPermissionsCount());
  }
  deselectAllPermissions() {
    const permissionsArray = this.permissionsFormArray;
    if (!permissionsArray || permissionsArray.length === 0) {
      console.warn("\u26A0\uFE0F FormArray des permissions non disponible");
      return;
    }
    for (let i = 0; i < permissionsArray.length; i++) {
      permissionsArray.at(i).setValue(false);
    }
    console.log("\u2705 Toutes les permissions d\xE9s\xE9lectionn\xE9es:", this.getSelectedPermissionsCount());
  }
  getSelectedPermissionsCount() {
    const permissionsArray = this.permissionsFormArray;
    if (!permissionsArray || permissionsArray.length === 0) {
      return 0;
    }
    let count = 0;
    for (let i = 0; i < permissionsArray.length; i++) {
      if (permissionsArray.at(i).value === true) {
        count++;
      }
    }
    return count;
  }
  selectPermissionsByGuard(guardName) {
    const permissionsArray = this.permissionsFormArray;
    if (!permissionsArray || permissionsArray.length === 0) {
      console.warn("\u26A0\uFE0F FormArray des permissions non disponible");
      return;
    }
    this.adminrhPermissions.forEach((permission, index) => {
      if (permission.guard_name === guardName) {
        permissionsArray.at(index).setValue(true);
      }
    });
    console.log(`\u2705 Permissions ${guardName} s\xE9lectionn\xE9es:`, this.getSelectedPermissionsCount());
  }
  areAllPermissionsSelected() {
    const permissionsArray = this.permissionsFormArray;
    if (!permissionsArray || permissionsArray.length === 0)
      return false;
    return this.getSelectedPermissionsCount() === permissionsArray.length;
  }
  areNoPermissionsSelected() {
    return this.getSelectedPermissionsCount() === 0;
  }
  getSelectedPermissions() {
    const permissionsArray = this.permissionsFormArray;
    const selectedPermissions = [];
    if (!permissionsArray || permissionsArray.length === 0) {
      return selectedPermissions;
    }
    for (let i = 0; i < permissionsArray.length; i++) {
      if (permissionsArray.at(i).value === true) {
        selectedPermissions.push(this.adminrhPermissions[i]);
      }
    }
    return selectedPermissions;
  }
  getSelectedPermissionIds() {
    return this.getSelectedPermissions().map((p) => p.id);
  }
  // ============= GESTION DES MODALS =============
  openModal(role) {
    if (this.allPermissions.length === 0) {
      console.log("\u26A0\uFE0F Permissions pas encore charg\xE9es, rechargement...");
      this.loadPermissions();
      setTimeout(() => {
        if (this.allPermissions.length > 0) {
          this.openModal(role);
        } else {
          this.showError("Impossible de charger les permissions. Veuillez r\xE9essayer.");
        }
      }, 1e3);
      return;
    }
    this.showModal = true;
    if (!this.roleForm.get("permissions") || this.permissionsFormArray.length !== this.adminrhPermissions.length) {
      this.createPermissionsFormArray();
    }
    if (role) {
      this.isEditing = true;
      this.selectedRole = role;
      this.roleForm.patchValue({
        name: role.name,
        guard_name: role.guard_name,
        type: role.type ?? null,
        role_level: role.role_level ?? null
      });
      const permissionsArray = this.permissionsFormArray;
      const rolePermissionIds = role.permissions?.map((p) => p.id) || [];
      this.adminrhPermissions.forEach((permission, index) => {
        const isAssigned = rolePermissionIds.includes(permission.id);
        permissionsArray.at(index).setValue(isAssigned);
      });
      console.log("\u2705 R\xF4le charg\xE9 avec", rolePermissionIds.length, "permissions assign\xE9es");
    } else {
      this.isEditing = false;
      this.selectedRole = null;
      this.roleForm.reset({
        guard_name: "web",
        type: null,
        role_level: this.minRoleLevel,
        permissions: this.adminrhPermissions.map(() => false)
      });
    }
  }
  closeModal() {
    this.showModal = false;
    this.roleForm.reset({ guard_name: "web", type: null, role_level: this.minRoleLevel });
    this.selectedRole = null;
    this.isEditing = false;
    this.clearMessages();
  }
  viewRolePermissions(role) {
    console.log("\u{1F50D} Visualisation des permissions pour le r\xF4le:", role.name);
    console.log("\u{1F4CA} Permissions du r\xF4le:", role.permissions);
    this.selectedRole = role;
    this.selectedRolePermissions = role.permissions || [];
    console.log("\u2705 Permissions s\xE9lectionn\xE9es:", this.selectedRolePermissions.length);
    this.showPermissionsModal = true;
  }
  closePermissionsModal() {
    this.showPermissionsModal = false;
    this.selectedRole = null;
    this.selectedRolePermissions = [];
  }
  editRoleFromPermissionsView() {
    this.closePermissionsModal();
    this.openModal(this.selectedRole);
  }
  // ============= CRUD OPERATIONS =============
  onSubmit() {
    if (this.roleForm.invalid) {
      this.markFormGroupTouched();
      this.showError("Veuillez corriger les erreurs dans le formulaire");
      return;
    }
    this.loading = true;
    const roleData = this.prepareRoleData();
    if (this.isEditing && this.selectedRole) {
      this.updateRole(roleData);
    } else {
      this.createRole(roleData);
    }
  }
  prepareRoleData() {
    const formValue = this.roleForm.value;
    return {
      name: formValue.name?.trim(),
      guard_name: formValue.guard_name,
      type: formValue.type,
      role_level: formValue.role_level,
      permissions: this.getSelectedPermissionIds()
    };
  }
  createRole(roleData) {
    console.log("\u2795 Cr\xE9ation d'un r\xF4le:", roleData);
    this.roleService.createRole(roleData).subscribe({
      next: (response) => {
        console.log("\u2705 R\xF4le cr\xE9\xE9:", response);
        this.showSuccess("R\xF4le cr\xE9\xE9 avec succ\xE8s");
        this.loadRoles();
        this.closeModal();
        this.loading = false;
      },
      error: (error) => {
        this.handleError(error, "cr\xE9ation");
        this.loading = false;
      }
    });
  }
  updateRole(roleData) {
    if (!this.selectedRole)
      return;
    console.log("\u{1F4DD} Mise \xE0 jour du r\xF4le:", this.selectedRole.id);
    console.log("\u{1F4CA} Donn\xE9es COMPL\xC8TES \xE0 envoyer:", JSON.stringify(roleData, null, 2));
    console.log("\u{1F4CB} Permissions s\xE9lectionn\xE9es (IDs):", roleData.permissions);
    console.log("\u{1F4CB} Permissions s\xE9lectionn\xE9es (D\xE9tails):", this.getSelectedPermissions().map((p) => ({ id: p.id, name: p.name })));
    this.roleService.updateRole(this.selectedRole.id, roleData).subscribe({
      next: (response) => {
        console.log("\u2705 R\xE9ponse serveur COMPL\xC8TE:", JSON.stringify(response, null, 2));
        if (response?.role?.permissions) {
          console.log("\u2705 Permissions dans la r\xE9ponse:", response.role.permissions);
        } else if (response?.data?.role?.permissions) {
          console.log("\u2705 Permissions dans la r\xE9ponse (data.role):", response.data.role.permissions);
        } else {
          console.warn("\u26A0\uFE0F PROBL\xC8ME: Le backend ne retourne pas les permissions dans sa r\xE9ponse");
          console.warn("\u26A0\uFE0F Structure de la r\xE9ponse:", Object.keys(response || {}));
        }
        this.showSuccess("R\xF4le mis \xE0 jour avec succ\xE8s");
        setTimeout(() => {
          this.loadRoles();
        }, 500);
        this.closeModal();
        this.loading = false;
      },
      error: (error) => {
        console.error("\u274C Erreur COMPL\xC8TE:", error);
        console.error("\u274C Status:", error.status);
        console.error("\u274C Message:", error.message);
        console.error("\u274C Body:", error.error);
        this.handleError(error, "mise \xE0 jour");
        this.loading = false;
      }
    });
  }
  deleteRole(role) {
    const confirmMessage = `\xCAtes-vous s\xFBr de vouloir supprimer le r\xF4le "${role.name}" ?

Cette action est irr\xE9versible et peut affecter les utilisateurs ayant ce r\xF4le.`;
    if (confirm(confirmMessage)) {
      this.loading = true;
      console.log("\u{1F5D1}\uFE0F Suppression du r\xF4le:", role.id);
      this.roleService.deleteRole(role.id).subscribe({
        next: (response) => {
          console.log("\u2705 R\xF4le supprim\xE9:", response);
          this.showSuccess(`R\xF4le "${role.name}" supprim\xE9 avec succ\xE8s`);
          this.loadRoles();
          this.loading = false;
        },
        error: (error) => {
          this.handleError(error, "suppression");
          this.loading = false;
        }
      });
    }
  }
  // ============= UTILITAIRES =============
  markFormGroupTouched() {
    Object.keys(this.roleForm.controls).forEach((key) => {
      const control = this.roleForm.get(key);
      control?.markAsTouched();
      if (control instanceof FormArray) {
        control.controls.forEach((arrayControl) => {
          arrayControl.markAsTouched();
        });
      }
    });
  }
  debugPermissions() {
    console.log("\u{1F50D} Debug des permissions:");
    console.log("- Total permissions charg\xE9es:", this.allPermissions.length);
    console.log("- FormArray permissions:", this.permissionsFormArray?.length);
    console.log("- Permissions s\xE9lectionn\xE9es:", this.getSelectedPermissionsCount());
    console.log("- Premi\xE8res permissions:", this.allPermissions.slice(0, 3));
  }
  // ============= HELPERS AFFICHAGE LISTE =============
  getRoleTypeKey(role) {
    const t = role.type?.toLowerCase();
    if (t === "admin")
      return "superadmin";
    if (t === "rh" || t === "manager")
      return "adminrh";
    if (t === "formateur")
      return "formateur";
    if (t === "employe")
      return "employe";
    return "default";
  }
  getRoleTypeIcon(role) {
    const t = role.type?.toLowerCase();
    if (t === "admin")
      return "isax-crown";
    if (t === "rh")
      return "isax-people";
    if (t === "manager")
      return "isax-chart";
    if (t === "formateur")
      return "isax-teacher";
    if (t === "employe")
      return "isax-user";
    return "isax-user-tag";
  }
  getRoleTypeLabel(role) {
    const t = role.type?.toLowerCase();
    if (t === "admin")
      return "Admin";
    if (t === "rh")
      return "Admin RH";
    if (t === "manager")
      return "Manager";
    if (t === "formateur")
      return "Formateur";
    if (t === "employe")
      return "Employ\xE9";
    return role.type || "\u2014";
  }
  // ============= TRACKBY FUNCTIONS =============
  trackByRoleId(index, role) {
    return role.id;
  }
  trackByPermissionId(index, permission) {
    return permission.id;
  }
  // ============= GESTION DES ERREURS ET MESSAGES =============
  handleError(error, action) {
    console.error(`\u274C Erreur lors de la ${action}:`, error);
    const backendMessage = error.error?.message;
    if (error.status === 422 && error.error?.errors) {
      const messages = Object.values(error.error.errors).flat().join(" \u2014 ");
      this.showError(messages);
    } else if (backendMessage) {
      this.showError(backendMessage);
    } else if (error.status === 404) {
      this.showError("R\xF4le introuvable.");
    } else if (error.status === 403) {
      this.showError("Action non autoris\xE9e.");
    } else if (error.status === 409) {
      this.showError("Un r\xF4le avec ce nom existe d\xE9j\xE0.");
    } else {
      this.showError(`Erreur lors de la ${action} du r\xF4le.`);
    }
  }
  showSuccess(message) {
    this.clearMessages();
    this.successMessage = message;
    console.log("\u2705 Succ\xE8s:", message);
    setTimeout(() => {
      this.successMessage = "";
    }, 4e3);
  }
  showError(message) {
    this.clearMessages();
    this.errorMessage = message;
    console.error("\u274C Erreur:", message);
    setTimeout(() => {
      this.errorMessage = "";
    }, 5e3);
  }
  clearMessages() {
    this.successMessage = "";
    this.errorMessage = "";
  }
  // ============= GETTERS ET PROPRIÉTÉS CALCULÉES =============
  get f() {
    return this.roleForm.controls;
  }
  get hasRoles() {
    return this.roles.length > 0;
  }
  get hasFilteredResults() {
    return this.filteredRoles.length > 0;
  }
  get isSearching() {
    return this.searchText.trim().length > 0;
  }
  get totalPermissions() {
    return this.allPermissions.length;
  }
  get selectedPermissionsText() {
    const count = this.getSelectedPermissionsCount();
    if (count === 0)
      return "Aucune permission s\xE9lectionn\xE9e";
    if (count === 1)
      return "1 permission s\xE9lectionn\xE9e";
    return `${count} permissions s\xE9lectionn\xE9es`;
  }
  // ============= MÉTHODES DE STATISTIQUES =============
  getPermissionsByGuard(guardName) {
    return this.allPermissions.filter((p) => p.guard_name === guardName);
  }
  getGuardCount(guardName) {
    return this.getPermissionsByGuard(guardName).length;
  }
  getRolesByGuard(guardName) {
    return this.roles.filter((r) => r.guard_name === guardName);
  }
  getAveragePermissionsPerRole() {
    if (this.roles.length === 0)
      return 0;
    const total = this.roles.reduce((sum, role) => sum + (role.permissions?.length || 0), 0);
    return Math.round(total / this.roles.length * 100) / 100;
  }
  getMostPermissionsRole() {
    if (this.roles.length === 0)
      return null;
    return this.roles.reduce((max, role) => (role.permissions?.length || 0) > (max.permissions?.length || 0) ? role : max);
  }
  getTotalGuards() {
    const guards = [...new Set(this.allPermissions.map((p) => p.guard_name))];
    return guards.sort();
  }
  getGuardPercentage(guardName) {
    if (this.allPermissions.length === 0)
      return 0;
    return this.getGuardCount(guardName) / this.allPermissions.length * 100;
  }
  static \u0275fac = function AdminrhRoleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhRoleComponent)(\u0275\u0275directiveInject(RoleService), \u0275\u0275directiveInject(PermissionService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhRoleComponent, selectors: [["app-adminrh-role"]], decls: 115, vars: 54, consts: [[1, "ul-shell"], [1, "ul-topbar"], [1, "isax", "isax-user-tag", "ul-topbar__icon"], [1, "ul-topbar__title"], [1, "ul-topbar__stats"], ["class", "ul-alert ul-alert--success", 4, "ngIf"], ["class", "ul-alert", 4, "ngIf"], [1, "ul-toolbar"], [1, "ul-search"], [1, "isax", "isax-search-normal-1", "ul-search__icon"], ["type", "search", "placeholder", "Rechercher un r\xF4le...", 1, "ul-search__input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "ul-add-btn", 3, "click"], [1, "isax", "isax-add"], ["class", "ul-skeletons", 4, "ngIf"], ["class", "ul-table", 4, "ngIf"], ["class", "ul-pager", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "roleModalLabel", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header", "border-0", "pb-0"], ["id", "roleModalLabel", 1, "modal-title", "fw-semibold"], ["type", "button", "aria-label", "Fermer", 1, "btn-close", 3, "click"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "modal-body", "pt-2"], ["class", "alert alert-danger d-flex align-items-center gap-2 mb-3 py-2", "role", "alert", 4, "ngIf"], ["class", "alert alert-success d-flex align-items-center gap-2 mb-3 py-2", "role", "alert", 4, "ngIf"], ["class", "rounded border border-success-subtle bg-success-subtle p-3 mb-4", 4, "ngIf"], [1, "row", "g-3", "mb-3"], [1, "col-md-8"], ["for", "roleName", 1, "form-label", "fw-medium"], [1, "text-danger"], ["type", "text", "id", "roleName", "formControlName", "name", "placeholder", "Ex: Manager Commercial...", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-md-4"], [1, "form-label", "fw-medium"], [1, "input-group"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], ["type", "number", "formControlName", "role_level", "max", "10", 1, "form-control", "text-center", 2, "max-width", "80px", 3, "min"], [1, "text-muted", "d-block", "mt-1"], [1, "mb-4"], [1, "text-muted", "fw-normal", "ms-2"], [1, "row", "g-2"], ["class", "col-6 col-md-3", 4, "ngFor", "ngForOf"], ["class", "text-danger small mt-1", 4, "ngIf"], ["formArrayName", "permissions"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2", "flex-wrap", "gap-2"], [1, "d-flex", "align-items-center", "gap-2"], [1, "fw-medium"], [1, "badge", "bg-primary", "rounded-pill"], [1, "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", "rounded-pill", 3, "click", "disabled"], [1, "isax", "isax-tick-square", "me-1"], [1, "isax", "isax-close-square", "me-1"], [1, "perm-search", "mb-3"], [1, "isax", "isax-search-normal-1", "perm-search__icon"], ["type", "search", "placeholder", "Rechercher une permission...", 1, "perm-search__input", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "button", "class", "perm-search__clear", 3, "click", 4, "ngIf"], [1, "d-flex", "gap-1", "flex-wrap", "mb-3"], ["type", "button", "class", "btn btn-sm rounded-pill", 3, "btn-dark", "btn-outline-secondary", "click", 4, "ngFor", "ngForOf"], ["class", "text-center py-4 text-muted", 4, "ngIf"], [1, "permissions-grid"], [4, "ngFor", "ngForOf"], [1, "modal-footer", "border-0", "pt-0"], ["type", "button", 1, "btn", "btn-light", "rounded-pill", "px-4", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-dark", "rounded-pill", "px-4", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "isax me-1", 3, "isax-edit", "isax-add", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "permissionsModalLabel", 1, "modal", "fade", "permissions-modal"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "modal-header"], ["id", "permissionsModalLabel", 1, "modal-title"], [1, "isax", "isax-key", "me-2"], [1, "modal-body"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "isax", "isax-close-circle", "me-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "isax", "isax-edit", "me-2"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [1, "ul-alert", "ul-alert--success"], [1, "isax", "isax-tick-circle"], [1, "ul-alert"], [1, "isax", "isax-warning-2"], [1, "ul-skeletons"], ["class", "ul-skeleton-row", 4, "ngFor", "ngForOf"], [1, "ul-skeleton-row"], [1, "ul-table"], [2, "width", "32%"], [2, "width", "14%"], [2, "width", "10%"], [2, "width", "12%"], [2, "width", "9%"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ul-user"], [1, "ul-avatar"], [1, "ul-user__name"], ["class", "ul-system-badge", 4, "ngIf"], ["class", "ul-user__email", 4, "ngIf"], [1, "ul-role-badge"], ["class", "ul-level-badge", 4, "ngIf"], ["class", "ul-date", 4, "ngIf"], ["type", "button", 1, "ul-perm-btn", 3, "click", "title"], [1, "isax", "isax-key"], [1, "ul-count-badge"], [1, "ul-actions"], ["type", "button", "title", "Voir permissions", 1, "ul-act", 3, "click"], [1, "isax", "isax-eye"], ["type", "button", "title", "Modifier", 1, "ul-act", 3, "click"], [1, "isax", "isax-edit"], [1, "ul-system-badge"], [1, "ul-user__email"], [1, "ul-level-badge"], [1, "ul-date"], ["colspan", "7", 1, "ul-empty"], [1, "isax", "isax-user-tag", "d-block", "mb-2", 2, "font-size", "2rem"], ["type", "button", "class", "ul-add-btn mt-3", 3, "click", 4, "ngIf"], ["type", "button", 1, "ul-add-btn", "mt-3", 3, "click"], [1, "ul-pager"], [1, "ul-pager__info"], [1, "ul-pager__btns"], ["type", "button", 1, "ul-pager__btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], ["type", "button", "class", "ul-pager__btn", 3, "ul-pager__btn--active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-3"], ["type", "button", 1, "ul-pager__btn", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2", "mb-3", "py-2"], [1, "isax", "isax-warning-2", "fs-5"], ["role", "alert", 1, "alert", "alert-success", "d-flex", "align-items-center", "gap-2", "mb-3", "py-2"], [1, "isax", "isax-tick-circle", "fs-5"], [1, "rounded", "border", "border-success-subtle", "bg-success-subtle", "p-3", "mb-4"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "fw-semibold", "text-success-emphasis", "me-1"], ["type", "button", 1, "btn", "btn-sm", "btn-success", "rounded-pill", "px-3", "py-1", "ms-auto"], [1, "isax", "isax-external-link", "me-1"], ["type", "button", 1, "btn", "btn-outline-success", "btn-sm", "rounded-pill", "px-3", "py-1", 3, "click", "title"], [1, "invalid-feedback"], [1, "col-6", "col-md-3"], [1, "card", "border-2", "cursor-pointer", "h-100", 2, "cursor", "pointer", 3, "click"], [1, "card-body", "p-2", "p-md-3"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-1"], [1, "fw-semibold", "small"], [1, "rounded-circle", "border", 2, "width", "16px", "height", "16px", "flex-shrink", "0", "margin-top", "2px"], [1, "text-muted"], [1, "text-danger", "small", "mt-1"], ["type", "button", 1, "perm-search__clear", 3, "click"], [1, "isax", "isax-close-circle"], ["type", "button", 1, "btn", "btn-sm", "rounded-pill", 3, "click"], [1, "text-center", "py-4", "text-muted"], [1, "isax", "isax-info-circle", "fs-48", "d-block", "mb-2"], [1, "isax", "isax-search-normal-1", "perm-empty-icon", "d-block", "mb-2"], [1, "permission-item", "border", "rounded", "px-3", "py-2", "d-flex", "align-items-center", "gap-2", 2, "cursor", "pointer", 3, "click"], ["type", "checkbox", 1, "form-check-input", "mt-0", "flex-shrink-0", 3, "click", "formControlName", "id"], [1, "mb-0", "small", 2, "cursor", "pointer", 3, "for"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "isax", "me-1"], [1, "text-center", "py-5"], [1, "isax", "isax-lock", "fs-48", "text-muted", "mb-3", "d-block"], [1, "text-muted", "mb-3"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "row", "g-3"], ["class", "col-md-6 col-lg-4", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mt-4", "p-3", "bg-primary", "bg-opacity-10", "rounded"], [1, "row", "text-center"], [1, "col"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-chart-success", "text-primary", "me-2", "fs-5"], [1, "mb-0", "text-primary", "fw-bold"], [1, "col-md-6", "col-lg-4"], [1, "card", "border-0", "bg-light", "h-100"], [1, "card-body", "p-3"], [1, "d-flex", "align-items-start"], [1, "me-3"], [1, "isax", "isax-tick-circle", "text-success", "fs-5"], [1, "flex-grow-1"], [1, "mb-1", "fw-semibold"], [1, "isax", "isax-shield-security", "me-1"], [1, "modal-backdrop", "fade"]], template: function AdminrhRoleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275elementStart(3, "h1", 3);
      \u0275\u0275text(4, "R\xF4les & permissions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, AdminrhRoleComponent_div_7_Template, 3, 1, "div", 5)(8, AdminrhRoleComponent_div_8_Template, 3, 1, "div", 6);
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8);
      \u0275\u0275element(11, "i", 9);
      \u0275\u0275elementStart(12, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhRoleComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminrhRoleComponent_Template_input_ngModelChange_12_listener() {
        return ctx.searchRoles();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 11);
      \u0275\u0275listener("click", function AdminrhRoleComponent_Template_button_click_13_listener() {
        return ctx.openModal();
      });
      \u0275\u0275element(14, "i", 12);
      \u0275\u0275text(15, " Nouveau r\xF4le ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, AdminrhRoleComponent_div_16_Template, 2, 2, "div", 13)(17, AdminrhRoleComponent_table_17_Template, 18, 3, "table", 14)(18, AdminrhRoleComponent_div_18_Template, 9, 6, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 16)(20, "div", 17)(21, "div", 18)(22, "div", 19)(23, "h5", 20);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 21);
      \u0275\u0275listener("click", function AdminrhRoleComponent_Template_button_click_25_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "form", 22);
      \u0275\u0275listener("ngSubmit", function AdminrhRoleComponent_Template_form_ngSubmit_26_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(27, "div", 23);
      \u0275\u0275template(28, AdminrhRoleComponent_div_28_Template, 4, 1, "div", 24)(29, AdminrhRoleComponent_div_29_Template, 4, 1, "div", 25)(30, AdminrhRoleComponent_div_30_Template, 8, 1, "div", 26);
      \u0275\u0275elementStart(31, "div", 27)(32, "div", 28)(33, "label", 29);
      \u0275\u0275text(34, " Nom du r\xF4le ");
      \u0275\u0275elementStart(35, "span", 30);
      \u0275\u0275text(36, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(37, "input", 31);
      \u0275\u0275template(38, AdminrhRoleComponent_div_38_Template, 3, 2, "div", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 33)(40, "label", 34);
      \u0275\u0275text(41, " Niveau hi\xE9rarchique ");
      \u0275\u0275elementStart(42, "span", 30);
      \u0275\u0275text(43, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 35)(45, "button", 36);
      \u0275\u0275listener("click", function AdminrhRoleComponent_Template_button_click_45_listener() {
        return ctx.f["role_level"].setValue((ctx.f["role_level"].value || ctx.minRoleLevel) - 1);
      });
      \u0275\u0275text(46, " \u2212 ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(47, "input", 37);
      \u0275\u0275elementStart(48, "button", 36);
      \u0275\u0275listener("click", function AdminrhRoleComponent_Template_button_click_48_listener() {
        return ctx.f["role_level"].setValue((ctx.f["role_level"].value || ctx.minRoleLevel) + 1);
      });
      \u0275\u0275text(49, " + ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "small", 38);
      \u0275\u0275text(51);
      \u0275\u0275elementEnd();
      \u0275\u0275template(52, AdminrhRoleComponent_div_52_Template, 2, 1, "div", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 39)(54, "label", 34);
      \u0275\u0275text(55, " Type de r\xF4le ");
      \u0275\u0275elementStart(56, "span", 30);
      \u0275\u0275text(57, "*");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "small", 40);
      \u0275\u0275text(59, "D\xE9termine le layout et les acc\xE8s du r\xF4le");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 41);
      \u0275\u0275template(61, AdminrhRoleComponent_div_61_Template, 9, 26, "div", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275template(62, AdminrhRoleComponent_div_62_Template, 2, 0, "div", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 44)(64, "div", 45)(65, "div", 46)(66, "span", 47);
      \u0275\u0275text(67, "Permissions assign\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "span", 48);
      \u0275\u0275text(69);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 49)(71, "button", 50);
      \u0275\u0275listener("click", function AdminrhRoleComponent_Template_button_click_71_listener() {
        return ctx.selectAllPermissions();
      });
      \u0275\u0275element(72, "i", 51);
      \u0275\u0275text(73, "Tout s\xE9lectionner ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "button", 50);
      \u0275\u0275listener("click", function AdminrhRoleComponent_Template_button_click_74_listener() {
        return ctx.deselectAllPermissions();
      });
      \u0275\u0275element(75, "i", 52);
      \u0275\u0275text(76, "Tout d\xE9s\xE9lectionner ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "div", 53);
      \u0275\u0275element(78, "i", 54);
      \u0275\u0275elementStart(79, "input", 55);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhRoleComponent_Template_input_ngModelChange_79_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.permissionSearch, $event) || (ctx.permissionSearch = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(80, AdminrhRoleComponent_button_80_Template, 2, 0, "button", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 57);
      \u0275\u0275template(82, AdminrhRoleComponent_button_82_Template, 2, 5, "button", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275template(83, AdminrhRoleComponent_div_83_Template, 3, 0, "div", 59)(84, AdminrhRoleComponent_div_84_Template, 3, 0, "div", 59);
      \u0275\u0275elementStart(85, "div", 60);
      \u0275\u0275template(86, AdminrhRoleComponent_ng_container_86_Template, 5, 6, "ng-container", 61);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "div", 62)(88, "button", 63);
      \u0275\u0275listener("click", function AdminrhRoleComponent_Template_button_click_88_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275text(89, " Annuler ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "button", 64);
      \u0275\u0275template(91, AdminrhRoleComponent_span_91_Template, 1, 0, "span", 65)(92, AdminrhRoleComponent_i_92_Template, 1, 4, "i", 66);
      \u0275\u0275text(93);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(94, "div", 67)(95, "div", 68)(96, "div", 18)(97, "div", 69)(98, "h5", 70);
      \u0275\u0275element(99, "i", 71);
      \u0275\u0275text(100, " Permissions du r\xF4le ");
      \u0275\u0275elementStart(101, "strong");
      \u0275\u0275text(102);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "button", 21);
      \u0275\u0275listener("click", function AdminrhRoleComponent_Template_button_click_103_listener() {
        return ctx.closePermissionsModal();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div", 72);
      \u0275\u0275template(105, AdminrhRoleComponent_div_105_Template, 9, 0, "div", 73)(106, AdminrhRoleComponent_div_106_Template, 13, 3, "div", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div", 75)(108, "button", 76);
      \u0275\u0275listener("click", function AdminrhRoleComponent_Template_button_click_108_listener() {
        return ctx.closePermissionsModal();
      });
      \u0275\u0275element(109, "i", 77);
      \u0275\u0275text(110, " Fermer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "button", 78);
      \u0275\u0275listener("click", function AdminrhRoleComponent_Template_button_click_111_listener() {
        return ctx.editRoleFromPermissionsView();
      });
      \u0275\u0275element(112, "i", 79);
      \u0275\u0275text(113, " Modifier le r\xF4le ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(114, AdminrhRoleComponent_div_114_Template, 1, 2, "div", 80);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2(" ", ctx.totalItems, " r\xF4le", ctx.totalItems > 1 ? "s" : "", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.totalPages > 1);
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showModal);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.isEditing ? "Modifier le R\xF4le" : "Nouveau r\xF4le", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.roleForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isEditing);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("is-invalid", ctx.f["name"].invalid && ctx.f["name"].touched);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f["name"].invalid && ctx.f["name"].touched);
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", (ctx.f["role_level"].value || ctx.minRoleLevel) <= ctx.minRoleLevel);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ctx.f["role_level"].invalid && ctx.f["role_level"].touched);
      \u0275\u0275property("min", ctx.minRoleLevel);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", (ctx.f["role_level"].value || 1) >= 10);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.f["role_level"].value === 1 ? "Direction \u2014 acc\xE8s complet" : ctx.f["role_level"].value === 2 ? "Gestion \u2014 acc\xE8s large" : ctx.f["role_level"].value === 3 ? "Op\xE9rationnel \u2014 acc\xE8s limit\xE9" : "Acc\xE8s restreint", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f["role_level"].invalid && ctx.f["role_level"].touched);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.ROLE_TYPES);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f["type"].invalid && ctx.f["type"].touched);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate2("", ctx.getSelectedPermissionsCount(), " / ", ctx.adminrhPermissions.length);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.areAllPermissionsSelected());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.areNoPermissionsSelected());
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.permissionSearch);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(53, _c0));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.permissionSearch);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.PERMISSION_CATEGORIES);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.adminrhPermissions.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.adminrhPermissions.length > 0 && ctx.filteredPermissionsForModal.length === 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.filteredPermissionsForModal);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.roleForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isEditing ? "Mettre \xE0 jour" : "Cr\xE9er le r\xF4le", " ");
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showPermissionsModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showPermissionsModal);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1('"', ctx.selectedRole == null ? null : ctx.selectedRole.name, '"');
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.selectedRole || ctx.getPermissionsCount(ctx.selectedRole) === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedRole && ctx.getPermissionsCount(ctx.selectedRole) > 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.showModal || ctx.showPermissionsModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, FormArrayName, RouterModule, FormsModule, NgModel], styles: ["\n\n.ul-shell[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ul-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.ul-topbar__icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #9ca3af;\n}\n.ul-topbar__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n  flex: 1;\n}\n.ul-topbar__stats[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-alert[_ngcontent-%COMP%] {\n  margin: 10px 14px 0;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ul-alert--success[_ngcontent-%COMP%] {\n  color: #065f46;\n  background: #ecfdf5;\n  border-color: #6ee7b7;\n}\n.ul-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 180px;\n  max-width: 280px;\n}\n.ul-search__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ul-search__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 10px 6px 32px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ul-search__input[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n  background: #fff;\n}\n.ul-add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #185FA5;\n  background: #e6f1fb;\n  border: 1px solid #185FA5;\n  border-radius: 8px;\n  cursor: pointer;\n  margin-left: auto;\n  transition: background 0.15s;\n}\n.ul-add-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(208.0172413793, 228.6896551724, 247.4827586207);\n}\n.ul-add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ul-skeletons[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ul-skeleton-row[_ngcontent-%COMP%] {\n  height: 40px;\n  border-radius: 8px;\n  background: #f3f4f6;\n  animation: _ngcontent-%COMP%_ul-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_ul-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ul-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.ul-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ul-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ul-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.ul-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 14px !important;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ul-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.ul-user__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.ul-user__email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.ul-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.ul-avatar[data-role=superadmin][_ngcontent-%COMP%] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-avatar[data-role=adminrh][_ngcontent-%COMP%] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-avatar[data-role=formateur][_ngcontent-%COMP%] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-avatar[data-role=employe][_ngcontent-%COMP%] {\n  background: #faeeda;\n  color: #633806;\n}\n.ul-avatar[data-role=default][_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-system-badge[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 1px 5px;\n  border-radius: 4px;\n  background: #e1f5ee;\n  color: #085041;\n  border: 1px solid #b6e9d4;\n}\n.ul-role-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ul-role-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ul-role-badge[data-role=superadmin][_ngcontent-%COMP%] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-role-badge[data-role=adminrh][_ngcontent-%COMP%] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-role-badge[data-role=formateur][_ngcontent-%COMP%] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-role-badge[data-role=employe][_ngcontent-%COMP%] {\n  background: #f1efe8;\n  color: #444441;\n}\n.ul-role-badge[data-role=default][_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-level-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 20px;\n  border-radius: 5px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n}\n.ul-perm-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  font-size: 12px;\n  color: #185FA5;\n  background: #e6f1fb;\n  border: 1px solid rgba(24, 95, 165, 0.25);\n  border-radius: 20px;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ul-perm-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(208.0172413793, 228.6896551724, 247.4827586207);\n}\n.ul-perm-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ul-count-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 22px;\n  height: 20px;\n  padding: 0 6px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.ul-act[_ngcontent-%COMP%] {\n  padding: 4px 7px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.ul-act[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.ul-act--del[_ngcontent-%COMP%] {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ul-act--del[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.ul-pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ul-pager__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-pager__btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.ul-pager__btn[_ngcontent-%COMP%] {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ul-pager__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ul-pager__btn--active[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ul-pager__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.page-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  background-color: #f8f9fa;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.modal.show[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.form-check[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-radius: 6px;\n  transition: background-color 0.2s;\n}\n.form-check[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  margin: 0 2px;\n  border: 1px solid #dee2e6;\n  color: #6c757d;\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  border-color: #dee2e6;\n}\n.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  border-color: #007bff;\n  color: white;\n}\n.pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #6c757d;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n.modal.show[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.modal[_ngcontent-%COMP%]   .modal-dialog.modal-lg[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n.modal[_ngcontent-%COMP%]   .modal-dialog.modal-dialog-scrollable[_ngcontent-%COMP%] {\n  height: calc(100vh - 2rem);\n}\n.modal[_ngcontent-%COMP%]   .modal-dialog.modal-dialog-scrollable[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n}\n.modal[_ngcontent-%COMP%]   .modal-dialog.modal-dialog-scrollable[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: calc(100vh - 200px);\n}\n.permissions-container[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n  padding: 1rem;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  background-color: #f8f9fa;\n}\n.permissions-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.permissions-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%], \n.permissions-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n}\n.permissions-container[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  margin: 0;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  background-color: white;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.permissions-container[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]:hover {\n  border-color: #0d6efd;\n  background-color: #f0f7ff;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.permissions-container[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-top: 0.125rem;\n}\n.permissions-container[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.permissions-container[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 0.5rem;\n}\n.permissions-container[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #212529;\n  font-size: 0.9rem;\n}\n.permissions-container[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.75rem;\n}\n.permissions-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.permissions-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n  border: 1px solid #e9ecef;\n}\n.permissions-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-color: #0d6efd;\n}\n.permissions-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.permissions-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .isax[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.permissions-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  color: #212529;\n}\n.permissions-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.75rem;\n}\n.permissions-modal[_ngcontent-%COMP%]   .bg-primary.bg-opacity-10[_ngcontent-%COMP%] {\n  background-color: rgba(13, 110, 253, 0.1) !important;\n  border: 1px solid rgba(13, 110, 253, 0.2);\n}\n.permissions-counter[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.permissions-counter[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  transition: width 0.3s ease;\n}\n.permissions-controls[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  padding: 0.375rem 0.75rem;\n}\n.permissions-controls[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.permissions-controls[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  border: 1px solid #e9ecef;\n}\n.permissions-controls[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n}\n.permissions-controls[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.permissions-controls[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .isax[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.permission-badge[_ngcontent-%COMP%], \n.role-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.permission-badge[_ngcontent-%COMP%]   .isax[_ngcontent-%COMP%], \n.role-badge[_ngcontent-%COMP%]   .isax[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n@media (max-width: 768px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n  }\n  .modal-dialog.modal-lg[_ngcontent-%COMP%] {\n    max-width: calc(100vw - 1rem);\n  }\n  .modal-dialog.modal-dialog-scrollable[_ngcontent-%COMP%] {\n    height: calc(100vh - 1rem);\n  }\n  .permissions-container[_ngcontent-%COMP%] {\n    max-height: 300px;\n  }\n  .permissions-container[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%], \n   .permissions-container[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .permissions-controls[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  .permissions-controls[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    border-radius: 0.375rem !important;\n    margin-bottom: 0.25rem;\n  }\n}\n@media (max-width: 576px) {\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .permissions-container[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    max-height: 250px;\n  }\n  .form-check[_ngcontent-%COMP%] {\n    padding: 0.5rem !important;\n  }\n  .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateY(-20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n.permission-selected[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n  background-color: #e7f3ff !important;\n  border-color: #0d6efd !important;\n}\n.permission-selected[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0d6efd;\n}\n.no-permissions-state[_ngcontent-%COMP%] {\n  padding: 3rem 1rem;\n  text-align: center;\n}\n.no-permissions-state[_ngcontent-%COMP%]   .isax[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.no-permissions-state[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 1rem 0 0.5rem;\n  color: #6c757d;\n}\n.no-permissions-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  font-size: 0.9rem;\n}\n.perm-search[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.perm-search__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.perm-search__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 32px 7px 32px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.perm-search__input[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n  background: #fff;\n}\n.perm-search__clear[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  background: none;\n  border: none;\n  padding: 0;\n  font-size: 15px;\n  color: #9ca3af;\n  cursor: pointer;\n  line-height: 1;\n}\n.perm-search__clear[_ngcontent-%COMP%]:hover {\n  color: #4b5563;\n}\n.perm-empty-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.permissions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  max-height: 320px;\n  overflow-y: auto;\n  padding: 4px 2px;\n}\n@media (max-width: 768px) {\n  .permissions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .permissions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.permission-item[_ngcontent-%COMP%] {\n  background: #fff;\n  border-color: #e9ecef !important;\n  transition: border-color 0.15s, background 0.15s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.permission-item[_ngcontent-%COMP%]:hover {\n  border-color: #6c757d !important;\n  background: #f8f9fa !important;\n}\n.permission-item.selected[_ngcontent-%COMP%] {\n  border-color: #0d6efd !important;\n  background: #eef4ff !important;\n}\n.permissions-container[_ngcontent-%COMP%], \n.modal-body[_ngcontent-%COMP%] {\n}\n.permissions-container[_ngcontent-%COMP%]::-webkit-scrollbar, \n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.permissions-container[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f3f4;\n  border-radius: 4px;\n}\n.permissions-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c8cd;\n  border-radius: 4px;\n}\n.permissions-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, \n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8b3ba;\n}\n.statistics-card[_ngcontent-%COMP%] {\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.statistics-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.statistics-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.statistics-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  opacity: 0.9;\n  font-size: 0.8rem;\n}\n.statistics-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .isax[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=adminrh-role.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhRoleComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-role", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule], template: `<!-- \u2500\u2500 SHELL \u2500\u2500 -->\r
<div class="ul-shell">\r
\r
  <!-- \u2500\u2500 TOP BAR \u2500\u2500 -->\r
  <div class="ul-topbar">\r
    <i class="isax isax-user-tag ul-topbar__icon"></i>\r
    <h1 class="ul-topbar__title">R\xF4les & permissions</h1>\r
    <span class="ul-topbar__stats">\r
      {{ totalItems }} r\xF4le{{ totalItems > 1 ? 's' : '' }}\r
    </span>\r
  </div>\r
\r
  <!-- Messages -->\r
  <div *ngIf="successMessage" class="ul-alert ul-alert--success">\r
    <i class="isax isax-tick-circle"></i> {{ successMessage }}\r
  </div>\r
  <div *ngIf="errorMessage" class="ul-alert">\r
    <i class="isax isax-warning-2"></i> {{ errorMessage }}\r
  </div>\r
\r
  <!-- \u2500\u2500 TOOLBAR \u2500\u2500 -->\r
  <div class="ul-toolbar">\r
    <div class="ul-search">\r
      <i class="isax isax-search-normal-1 ul-search__icon"></i>\r
      <input type="search" class="ul-search__input"\r
             placeholder="Rechercher un r\xF4le..."\r
             [(ngModel)]="searchText"\r
             (ngModelChange)="searchRoles()">\r
    </div>\r
     <button  type="button" class="ul-add-btn" (click)="openModal()">\r
      <i class="isax isax-add"></i> Nouveau r\xF4le\r
    </button>\r
    <!-- <button *appHasPermission="'creer roles'" type="button" class="ul-add-btn" (click)="openModal()">\r
      <i class="isax isax-add"></i> Nouveau r\xF4le\r
    </button> -->\r
  </div>\r
\r
  <!-- \u2500\u2500 SKELETON \u2500\u2500 -->\r
  <div *ngIf="loading" class="ul-skeletons">\r
    <div *ngFor="let i of [1,2,3,4,5]" class="ul-skeleton-row"></div>\r
  </div>\r
\r
  <!-- \u2500\u2500 TABLEAU \u2500\u2500 -->\r
  <table class="ul-table" *ngIf="!loading">\r
    <thead>\r
      <tr>\r
        <th style="width:32%">R\xF4le</th>\r
        <th style="width:14%">Type</th>\r
        <th style="width:10%">Niveau</th>\r
        <th style="width:12%">Permissions</th>\r
        <th style="width:10%">Utilisateurs</th>\r
        <th style="width:9%">Actions</th>\r
      </tr>\r
    </thead>\r
    <tbody>\r
      <tr *ngFor="let role of paginatedRoles; trackBy: trackByRoleId">\r
        <td>\r
          <div class="ul-user">\r
            <div class="ul-avatar" [attr.data-role]="getRoleTypeKey(role)">\r
              {{ role.name.charAt(0).toUpperCase() }}\r
            </div>\r
            <div>\r
              <div class="ul-user__name">\r
                {{ role.name }}\r
                <span *ngIf="role.is_system" class="ul-system-badge">syst\xE8me</span>\r
              </div>\r
              <div class="ul-user__email" *ngIf="role.description">{{ role.description }}</div>\r
            </div>\r
          </div>\r
        </td>\r
        <td>\r
          <span class="ul-role-badge" [attr.data-role]="getRoleTypeKey(role)">\r
            <i [class]="'isax ' + getRoleTypeIcon(role)"></i>\r
            {{ getRoleTypeLabel(role) }}\r
          </span>\r
        </td>\r
        <td>\r
          <span class="ul-level-badge" *ngIf="role.role_level != null">N{{ role.role_level }}</span>\r
          <span class="ul-date" *ngIf="role.role_level == null">\u2014</span>\r
        </td>\r
        <td>\r
          <button type="button" class="ul-perm-btn"\r
                  (click)="viewRolePermissions(role)"\r
                  [title]="'Voir les ' + getPermissionsCount(role) + ' permissions'">\r
            <i class="isax isax-key"></i>\r
            {{ getPermissionsCount(role) }}\r
          </button>\r
        </td>\r
        <td>\r
          <span class="ul-count-badge">{{ role.users_count || 0 }}</span>\r
        </td>\r
        <td>\r
          <div class="ul-actions">\r
            <button type="button" class="ul-act" title="Voir permissions"\r
                    (click)="viewRolePermissions(role)">\r
              <i class="isax isax-eye"></i>\r
            </button>\r
            <button type="button" class="ul-act" title="Modifier"\r
                    (click)="openModal(role)">\r
              <i class="isax isax-edit"></i>\r
            </button>\r
          </div>\r
        </td>\r
      </tr>\r
      <tr *ngIf="!paginatedRoles.length">\r
        <td colspan="7" class="ul-empty">\r
          <i class="isax isax-user-tag d-block mb-2" style="font-size:2rem;"></i>\r
          {{ searchText ? 'Aucun r\xF4le ne correspond \xE0 votre recherche' : 'Aucun r\xF4le trouv\xE9' }}\r
          <br>\r
          <button *ngIf="!searchText" type="button" class="ul-add-btn mt-3"\r
                  (click)="openModal()">\r
            <i class="isax isax-add"></i> Cr\xE9er le premier r\xF4le\r
          </button>\r
        </td>\r
      </tr>\r
    </tbody>\r
  </table>\r
\r
  <!-- \u2500\u2500 PAGINATION \u2500\u2500 -->\r
  <div class="ul-pager" *ngIf="!loading && totalPages > 1">\r
    <span class="ul-pager__info">\r
      {{ getStartIndex() }}\u2013{{ getEndIndex() }} sur {{ totalItems }}\r
    </span>\r
    <div class="ul-pager__btns">\r
      <button type="button" class="ul-pager__btn" [disabled]="currentPage === 1"\r
              (click)="onPageChange(currentPage - 1)">\r
        <i class="isax isax-arrow-left-2"></i>\r
      </button>\r
      <button type="button" *ngFor="let page of getPaginationArray()"\r
              class="ul-pager__btn"\r
              [class.ul-pager__btn--active]="currentPage === page"\r
              (click)="onPageChange(page)">{{ page }}</button>\r
      <button type="button" class="ul-pager__btn" [disabled]="currentPage === totalPages"\r
              (click)="onPageChange(currentPage + 1)">\r
        <i class="isax isax-arrow-right-3"></i>\r
      </button>\r
    </div>\r
  </div>\r
\r
</div>\r
\r
<!-- Modal Ajout/Modification de R\xF4le -->\r
<div\r
  class="modal fade"\r
  [class.show]="showModal"\r
  [style.display]="showModal ? 'block' : 'none'"\r
  tabindex="-1"\r
  role="dialog"\r
  aria-labelledby="roleModalLabel">\r
  <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">\r
    <div class="modal-content">\r
      <div class="modal-header border-0 pb-0">\r
        <h5 class="modal-title fw-semibold" id="roleModalLabel">\r
          {{ isEditing ? 'Modifier le R\xF4le' : 'Nouveau r\xF4le' }}\r
        </h5>\r
        <button type="button" class="btn-close" (click)="closeModal()" aria-label="Fermer"></button>\r
      </div>\r
\r
      <form [formGroup]="roleForm" (ngSubmit)="onSubmit()" novalidate>\r
        <div class="modal-body pt-2">\r
\r
          <!-- \u2500\u2500 Alertes formulaire \u2500\u2500 -->\r
          <div *ngIf="errorMessage" class="alert alert-danger d-flex align-items-center gap-2 mb-3 py-2" role="alert">\r
            <i class="isax isax-warning-2 fs-5"></i>\r
            <span>{{ errorMessage }}</span>\r
          </div>\r
          <div *ngIf="successMessage" class="alert alert-success d-flex align-items-center gap-2 mb-3 py-2" role="alert">\r
            <i class="isax isax-tick-circle fs-5"></i>\r
            <span>{{ successMessage }}</span>\r
          </div>\r
\r
          <!-- \u2500\u2500 Bloc r\xF4les syst\xE8me \u2500\u2500 -->\r
          <div *ngIf="!isEditing" class="rounded border border-success-subtle bg-success-subtle p-3 mb-4">\r
            <div class="d-flex align-items-center flex-wrap gap-2">\r
              <span class="fw-semibold text-success-emphasis me-1">\r
                R\xF4les syst\xE8me pr\xE9sents dans toutes les entreprises\r
              </span>\r
              <ng-container *ngFor="let sr of SYSTEM_ROLES">\r
                <button\r
                  type="button"\r
                  class="btn btn-outline-success btn-sm rounded-pill px-3 py-1"\r
                  (click)="openModal(getSystemRoleFromLoaded(sr.name))"\r
                  [title]="'G\xE9rer les permissions de ' + sr.name">\r
                  {{ sr.name }}\r
                </button>\r
              </ng-container>\r
              <button\r
                type="button"\r
                class="btn btn-sm btn-success rounded-pill px-3 py-1 ms-auto">\r
                <i class="isax isax-external-link me-1"></i>\r
                G\xE9rer leurs permissions \u2197\r
              </button>\r
            </div>\r
          </div>\r
\r
          <!-- \u2500\u2500 Ligne 1 : Nom + Niveau \u2500\u2500 -->\r
          <div class="row g-3 mb-3">\r
            <div class="col-md-8">\r
              <label for="roleName" class="form-label fw-medium">\r
                Nom du r\xF4le <span class="text-danger">*</span>\r
              </label>\r
              <input\r
                type="text"\r
                id="roleName"\r
                class="form-control"\r
                formControlName="name"\r
                [class.is-invalid]="f['name'].invalid && f['name'].touched"\r
                placeholder="Ex: Manager Commercial...">\r
              <div class="invalid-feedback" *ngIf="f['name'].invalid && f['name'].touched">\r
                <small *ngIf="f['name'].hasError('required')">Le nom est requis</small>\r
                <small *ngIf="f['name'].hasError('minlength')">Minimum 3 caract\xE8res</small>\r
              </div>\r
            </div>\r
\r
            <div class="col-md-4">\r
              <label class="form-label fw-medium">\r
                Niveau hi\xE9rarchique <span class="text-danger">*</span>\r
              </label>\r
              <div class="input-group">\r
                <button\r
                  type="button"\r
                  class="btn btn-outline-secondary"\r
                  (click)="f['role_level'].setValue((f['role_level'].value || minRoleLevel) - 1)"\r
                  [disabled]="(f['role_level'].value || minRoleLevel) <= minRoleLevel">\r
                  \u2212\r
                </button>\r
                <input\r
                  type="number"\r
                  class="form-control text-center"\r
                  formControlName="role_level"\r
                  [min]="minRoleLevel"\r
                  max="10"\r
                  [class.is-invalid]="f['role_level'].invalid && f['role_level'].touched"\r
                  style="max-width:80px;">\r
                <button\r
                  type="button"\r
                  class="btn btn-outline-secondary"\r
                  (click)="f['role_level'].setValue((f['role_level'].value || minRoleLevel) + 1)"\r
                  [disabled]="(f['role_level'].value || 1) >= 10">\r
                  +\r
                </button>\r
              </div>\r
              <small class="text-muted d-block mt-1">\r
                {{ f['role_level'].value === 1 ? 'Direction \u2014 acc\xE8s complet' :\r
                   f['role_level'].value === 2 ? 'Gestion \u2014 acc\xE8s large' :\r
                   f['role_level'].value === 3 ? 'Op\xE9rationnel \u2014 acc\xE8s limit\xE9' : 'Acc\xE8s restreint' }}\r
              </small>\r
              <div class="invalid-feedback" *ngIf="f['role_level'].invalid && f['role_level'].touched">\r
                Niveau minimum : {{ minRoleLevel }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- \u2500\u2500 Type de r\xF4le (cards) \u2500\u2500 -->\r
          <div class="mb-4">\r
            <label class="form-label fw-medium">\r
              Type de r\xF4le <span class="text-danger">*</span>\r
              <small class="text-muted fw-normal ms-2">D\xE9termine le layout et les acc\xE8s du r\xF4le</small>\r
            </label>\r
            <div class="row g-2">\r
              <div class="col-6 col-md-3" *ngFor="let t of ROLE_TYPES">\r
                <div\r
                  class="card border-2 cursor-pointer h-100"\r
                  [class.border-primary]="f['type'].value === t.value && t.color === 'primary'"\r
                  [class.border-purple]="f['type'].value === t.value && t.color === 'purple'"\r
                  [class.border-success]="f['type'].value === t.value && t.color === 'success'"\r
                  [class.border-warning]="f['type'].value === t.value && t.color === 'warning'"\r
                  [class.bg-primary-subtle]="f['type'].value === t.value && t.color === 'primary'"\r
                  [class.bg-success-subtle]="f['type'].value === t.value && t.color === 'success'"\r
                  [class.bg-warning-subtle]="f['type'].value === t.value && t.color === 'warning'"\r
                  [style.border-color]="f['type'].value === t.value && t.color === 'purple' ? '#6f42c1' : null"\r
                  [style.background-color]="f['type'].value === t.value && t.color === 'purple' ? '#f3eeff' : null"\r
                  [class.border-light]="f['type'].value !== t.value"\r
                  (click)="f['type'].setValue(t.value)"\r
                  style="cursor:pointer;">\r
                  <div class="card-body p-2 p-md-3">\r
                    <div class="d-flex justify-content-between align-items-start mb-1">\r
                      <span class="fw-semibold small">{{ t.label }}</span>\r
                      <span class="rounded-circle border"\r
                            style="width:16px;height:16px;flex-shrink:0;margin-top:2px;"\r
                            [style.border-color]="f['type'].value === t.value ? 'currentColor' : '#dee2e6'"\r
                            [style.background]="f['type'].value === t.value ? 'currentColor' : 'transparent'">\r
                      </span>\r
                    </div>\r
                    <small class="text-muted">{{ t.description }}</small>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
            <div *ngIf="f['type'].invalid && f['type'].touched" class="text-danger small mt-1">\r
              Le type est requis\r
            </div>\r
          </div>\r
\r
          <!-- \u2500\u2500 Permissions \u2500\u2500 -->\r
          <div formArrayName="permissions">\r
            <div class="d-flex align-items-center justify-content-between mb-2 flex-wrap gap-2">\r
              <div class="d-flex align-items-center gap-2">\r
                <span class="fw-medium">Permissions assign\xE9es</span>\r
                <span class="badge bg-primary rounded-pill">{{ getSelectedPermissionsCount() }} / {{ adminrhPermissions.length }}</span>\r
              </div>\r
              <div class="d-flex gap-2">\r
                <button type="button" class="btn btn-outline-secondary btn-sm rounded-pill"\r
                        [disabled]="areAllPermissionsSelected()"\r
                        (click)="selectAllPermissions()">\r
                  <i class="isax isax-tick-square me-1"></i>Tout s\xE9lectionner\r
                </button>\r
                <button type="button" class="btn btn-outline-secondary btn-sm rounded-pill"\r
                        [disabled]="areNoPermissionsSelected()"\r
                        (click)="deselectAllPermissions()">\r
                  <i class="isax isax-close-square me-1"></i>Tout d\xE9s\xE9lectionner\r
                </button>\r
              </div>\r
            </div>\r
\r
            <!-- Barre de recherche dans les permissions -->\r
            <div class="perm-search mb-3">\r
              <i class="isax isax-search-normal-1 perm-search__icon"></i>\r
              <input\r
                type="search"\r
                class="perm-search__input"\r
                placeholder="Rechercher une permission..."\r
                [(ngModel)]="permissionSearch"\r
                [ngModelOptions]="{standalone: true}">\r
              <button *ngIf="permissionSearch" type="button" class="perm-search__clear"\r
                      (click)="permissionSearch = ''">\r
                <i class="isax isax-close-circle"></i>\r
              </button>\r
            </div>\r
\r
            <!-- Tabs cat\xE9gories -->\r
            <div class="d-flex gap-1 flex-wrap mb-3">\r
              <button\r
                *ngFor="let cat of PERMISSION_CATEGORIES"\r
                type="button"\r
                class="btn btn-sm rounded-pill"\r
                [class.btn-dark]="activePermissionCategory === cat.key"\r
                [class.btn-outline-secondary]="activePermissionCategory !== cat.key"\r
                (click)="setPermissionCategory(cat.key)">\r
                {{ cat.label }}\r
              </button>\r
            </div>\r
\r
            <!-- Grille des permissions filtr\xE9es -->\r
            <div *ngIf="adminrhPermissions.length === 0" class="text-center py-4 text-muted">\r
              <i class="isax isax-info-circle fs-48 d-block mb-2"></i>\r
              Aucune permission disponible\r
            </div>\r
\r
            <div *ngIf="adminrhPermissions.length > 0 && filteredPermissionsForModal.length === 0"\r
                 class="text-center py-4 text-muted">\r
              <i class="isax isax-search-normal-1 perm-empty-icon d-block mb-2"></i>\r
              Aucune permission ne correspond \xE0 votre recherche\r
            </div>\r
\r
            <div class="permissions-grid">\r
              <ng-container *ngFor="let permission of filteredPermissionsForModal">\r
                <div\r
                  class="permission-item border rounded px-3 py-2 d-flex align-items-center gap-2"\r
                  [class.selected]="permissionsFormArray.at(getPermissionIndex(permission)).value"\r
                  (click)="permissionsFormArray.at(getPermissionIndex(permission)).setValue(!permissionsFormArray.at(getPermissionIndex(permission)).value)"\r
                  style="cursor:pointer;">\r
                  <input\r
                    type="checkbox"\r
                    class="form-check-input mt-0 flex-shrink-0"\r
                    [formControlName]="getPermissionIndex(permission)"\r
                    [id]="'perm-' + permission.id"\r
                    (click)="$event.stopPropagation()">\r
                  <label [for]="'perm-' + permission.id" class="mb-0 small" style="cursor:pointer;">\r
                    {{ permission.name }}\r
                  </label>\r
                </div>\r
              </ng-container>\r
            </div>\r
          </div>\r
\r
        </div><!-- /modal-body -->\r
\r
        <div class="modal-footer border-0 pt-0">\r
          <button type="button" class="btn btn-light rounded-pill px-4"\r
                  (click)="closeModal()" [disabled]="loading">\r
            Annuler\r
          </button>\r
          <button type="submit" class="btn btn-dark rounded-pill px-4"\r
                  [disabled]="roleForm.invalid || loading">\r
            <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>\r
            <i *ngIf="!loading" class="isax me-1"\r
               [class.isax-edit]="isEditing"\r
               [class.isax-add]="!isEditing"></i>\r
            {{ isEditing ? 'Mettre \xE0 jour' : 'Cr\xE9er le r\xF4le' }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal Visualisation des Permissions -->\r
<div\r
  class="modal fade permissions-modal"\r
  [class.show]="showPermissionsModal"\r
  [style.display]="showPermissionsModal ? 'block' : 'none'"\r
  tabindex="-1"\r
  role="dialog"\r
  aria-labelledby="permissionsModalLabel">\r
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title" id="permissionsModalLabel">\r
          <i class="isax isax-key me-2"></i>\r
          Permissions du r\xF4le <strong>"{{ selectedRole?.name }}"</strong>\r
        </h5>\r
        <button\r
          type="button"\r
          class="btn-close"\r
          (click)="closePermissionsModal()"\r
          aria-label="Fermer">\r
        </button>\r
      </div>\r
\r
      <div class="modal-body">\r
        <!-- Aucune permission -->\r
        <div *ngIf="!selectedRole || getPermissionsCount(selectedRole) === 0" class="text-center py-5">\r
          <i class="isax isax-lock fs-48 text-muted mb-3 d-block"></i>\r
          <h6 class="text-muted">Aucune permission assign\xE9e</h6>\r
          <p class="text-muted mb-3">Ce r\xF4le n'a aucune permission assign\xE9e pour le moment.</p>\r
          <button\r
            class="btn btn-primary btn-sm"\r
            (click)="editRoleFromPermissionsView()">\r
            <i class="isax isax-edit me-2"></i>\r
            Modifier le r\xF4le\r
          </button>\r
        </div>\r
\r
        <!-- Liste des permissions -->\r
        <div *ngIf="selectedRole && getPermissionsCount(selectedRole) > 0">\r
          <div class="row g-3">\r
            <div\r
              class="col-md-6 col-lg-4"\r
              *ngFor="let permission of selectedRole.permissions; trackBy: trackByPermissionId">\r
              <div class="card border-0 bg-light h-100">\r
                <div class="card-body p-3">\r
                  <div class="d-flex align-items-start">\r
                    <div class="me-3">\r
                      <i class="isax isax-tick-circle text-success fs-5"></i>\r
                    </div>\r
                    <div class="flex-grow-1">\r
                      <h6 class="mb-1 fw-semibold">{{ permission.name }}</h6>\r
                      <small class="text-muted">\r
                        <i class="isax isax-shield-security me-1"></i>\r
                        {{ permission.guard_name }}\r
                      </small>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Statistiques -->\r
          <div class="mt-4 p-3 bg-primary bg-opacity-10 rounded">\r
            <div class="row text-center">\r
              <div class="col">\r
                <div class="d-flex align-items-center justify-content-center">\r
                  <i class="isax isax-chart-success text-primary me-2 fs-5"></i>\r
                  <div>\r
                    <h4 class="mb-0 text-primary fw-bold">{{ getPermissionsCount(selectedRole) }}</h4>\r
                    <small class="text-muted">Permission(s) assign\xE9e(s)</small>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="modal-footer">\r
        <button\r
          type="button"\r
          class="btn btn-light"\r
          (click)="closePermissionsModal()">\r
          <i class="isax isax-close-circle me-2"></i>\r
          Fermer\r
        </button>\r
        <button\r
          type="button"\r
          class="btn btn-primary"\r
          (click)="editRoleFromPermissionsView()">\r
          <i class="isax isax-edit me-2"></i>\r
          Modifier le r\xF4le\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Backdrop pour les modals -->\r
<div\r
  class="modal-backdrop fade"\r
  [class.show]="showModal || showPermissionsModal"\r
  *ngIf="showModal || showPermissionsModal">\r
</div>\r
`, styles: ["/* src/app/features/adminrh/adminrh-role/adminrh-role.component.scss */\n.ul-shell {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ul-topbar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.ul-topbar__icon {\n  font-size: 16px;\n  color: #9ca3af;\n}\n.ul-topbar__title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n  flex: 1;\n}\n.ul-topbar__stats {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-alert {\n  margin: 10px 14px 0;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ul-alert--success {\n  color: #065f46;\n  background: #ecfdf5;\n  border-color: #6ee7b7;\n}\n.ul-toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ul-search {\n  position: relative;\n  flex: 1;\n  min-width: 180px;\n  max-width: 280px;\n}\n.ul-search__icon {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ul-search__input {\n  width: 100%;\n  padding: 6px 10px 6px 32px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ul-search__input:focus {\n  border-color: #069b8f;\n  background: #fff;\n}\n.ul-add-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 13px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #185FA5;\n  background: #e6f1fb;\n  border: 1px solid #185FA5;\n  border-radius: 8px;\n  cursor: pointer;\n  margin-left: auto;\n  transition: background 0.15s;\n}\n.ul-add-btn:hover {\n  background: rgb(208.0172413793, 228.6896551724, 247.4827586207);\n}\n.ul-add-btn i {\n  font-size: 13px;\n}\n.ul-skeletons {\n  padding: 10px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ul-skeleton-row {\n  height: 40px;\n  border-radius: 8px;\n  background: #f3f4f6;\n  animation: ul-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes ul-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ul-table {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.ul-table th {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ul-table td {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ul-table tr:last-child td {\n  border-bottom: none;\n}\n.ul-table tr:hover td {\n  background: #f9fafb;\n}\n.ul-empty {\n  text-align: center;\n  padding: 40px 14px !important;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ul-user {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.ul-user__name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.ul-user__email {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.ul-avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.ul-avatar[data-role=superadmin] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-avatar[data-role=adminrh] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-avatar[data-role=formateur] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-avatar[data-role=employe] {\n  background: #faeeda;\n  color: #633806;\n}\n.ul-avatar[data-role=default] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-system-badge {\n  font-size: 9px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 1px 5px;\n  border-radius: 4px;\n  background: #e1f5ee;\n  color: #085041;\n  border: 1px solid #b6e9d4;\n}\n.ul-role-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ul-role-badge i {\n  font-size: 11px;\n}\n.ul-role-badge[data-role=superadmin] {\n  background: #eeedfe;\n  color: #3c3489;\n}\n.ul-role-badge[data-role=adminrh] {\n  background: #e6f1fb;\n  color: #0c447c;\n}\n.ul-role-badge[data-role=formateur] {\n  background: #e1f5ee;\n  color: #085041;\n}\n.ul-role-badge[data-role=employe] {\n  background: #f1efe8;\n  color: #444441;\n}\n.ul-role-badge[data-role=default] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-level-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 20px;\n  border-radius: 5px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n}\n.ul-perm-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  font-size: 12px;\n  color: #185FA5;\n  background: #e6f1fb;\n  border: 1px solid rgba(24, 95, 165, 0.25);\n  border-radius: 20px;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ul-perm-btn:hover {\n  background: rgb(208.0172413793, 228.6896551724, 247.4827586207);\n}\n.ul-perm-btn i {\n  font-size: 12px;\n}\n.ul-count-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 22px;\n  height: 20px;\n  padding: 0 6px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.ul-date {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-actions {\n  display: flex;\n  gap: 5px;\n}\n.ul-act {\n  padding: 4px 7px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.ul-act:hover {\n  background: #f3f4f6;\n}\n.ul-act--del {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ul-act--del:hover {\n  background: #fef2f2;\n}\n.ul-pager {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ul-pager__info {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ul-pager__btns {\n  display: flex;\n  gap: 4px;\n}\n.ul-pager__btn {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ul-pager__btn:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ul-pager__btn--active {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ul-pager__btn:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.page-content {\n  padding: 0;\n}\n.table th {\n  font-weight: 600;\n  background-color: #f8f9fa;\n}\n.table tbody tr {\n  transition: all 0.3s ease;\n}\n.table tbody tr:hover {\n  background-color: #f8f9fa;\n}\n.modal.show {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.form-check {\n  padding: 8px 12px;\n  border-radius: 6px;\n  transition: background-color 0.2s;\n}\n.form-check:hover {\n  background-color: #f8f9fa;\n}\n.form-check .form-check-input:checked {\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.pagination .page-link {\n  border-radius: 6px;\n  margin: 0 2px;\n  border: 1px solid #dee2e6;\n  color: #6c757d;\n}\n.pagination .page-link:hover {\n  background-color: #f8f9fa;\n  border-color: #dee2e6;\n}\n.pagination .page-item.active .page-link {\n  background-color: #007bff;\n  border-color: #007bff;\n  color: white;\n}\n.pagination .page-item.disabled .page-link {\n  color: #6c757d;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n.modal.show {\n  display: block !important;\n}\n.modal .modal-dialog.modal-lg {\n  max-width: 900px;\n}\n.modal .modal-dialog.modal-dialog-scrollable {\n  height: calc(100vh - 2rem);\n}\n.modal .modal-dialog.modal-dialog-scrollable .modal-content {\n  height: 100%;\n  overflow: hidden;\n}\n.modal .modal-dialog.modal-dialog-scrollable .modal-content .modal-body {\n  overflow-y: auto;\n  max-height: calc(100vh - 200px);\n}\n.permissions-container {\n  max-height: 400px;\n  overflow-y: auto;\n  padding: 1rem;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  background-color: #f8f9fa;\n}\n.permissions-container .row {\n  margin: 0;\n}\n.permissions-container .row .col-md-6,\n.permissions-container .row .col-lg-4 {\n  padding: 0.25rem;\n}\n.permissions-container .form-check {\n  padding: 0.75rem;\n  margin: 0;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  background-color: white;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.permissions-container .form-check:hover {\n  border-color: #0d6efd;\n  background-color: #f0f7ff;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.permissions-container .form-check .form-check-input {\n  margin-top: 0.125rem;\n}\n.permissions-container .form-check .form-check-input:checked {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.permissions-container .form-check .form-check-label {\n  cursor: pointer;\n  margin-left: 0.5rem;\n}\n.permissions-container .form-check .form-check-label strong {\n  color: #212529;\n  font-size: 0.9rem;\n}\n.permissions-container .form-check .form-check-label small {\n  color: #6c757d;\n  font-size: 0.75rem;\n}\n.permissions-modal .modal-body {\n  padding: 1.5rem;\n}\n.permissions-modal .modal-body .card {\n  transition: all 0.2s ease;\n  border: 1px solid #e9ecef;\n}\n.permissions-modal .modal-body .card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-color: #0d6efd;\n}\n.permissions-modal .modal-body .card .card-body {\n  padding: 1rem;\n}\n.permissions-modal .modal-body .card .card-body .isax {\n  font-size: 1.25rem;\n}\n.permissions-modal .modal-body .card .card-body h6 {\n  margin-bottom: 0.25rem;\n  color: #212529;\n}\n.permissions-modal .modal-body .card .card-body small {\n  color: #6c757d;\n  font-size: 0.75rem;\n}\n.permissions-modal .bg-primary.bg-opacity-10 {\n  background-color: rgba(13, 110, 253, 0.1) !important;\n  border: 1px solid rgba(13, 110, 253, 0.2);\n}\n.permissions-counter .progress {\n  height: 8px;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.permissions-counter .progress .progress-bar {\n  transition: width 0.3s ease;\n}\n.permissions-controls .btn-group .btn {\n  font-size: 0.875rem;\n  padding: 0.375rem 0.75rem;\n}\n.permissions-controls .btn-group .btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.permissions-controls .dropdown-menu {\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  border: 1px solid #e9ecef;\n}\n.permissions-controls .dropdown-menu .dropdown-item {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n}\n.permissions-controls .dropdown-menu .dropdown-item:hover {\n  background-color: #f8f9fa;\n}\n.permissions-controls .dropdown-menu .dropdown-item .isax {\n  font-size: 1rem;\n}\n.permission-badge,\n.role-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.permission-badge .isax,\n.role-badge .isax {\n  font-size: 0.875rem;\n}\n@media (max-width: 768px) {\n  .modal-dialog {\n    margin: 0.5rem;\n  }\n  .modal-dialog.modal-lg {\n    max-width: calc(100vw - 1rem);\n  }\n  .modal-dialog.modal-dialog-scrollable {\n    height: calc(100vh - 1rem);\n  }\n  .permissions-container {\n    max-height: 300px;\n  }\n  .permissions-container .col-md-6,\n  .permissions-container .col-lg-4 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .permissions-controls .btn-group {\n    flex-direction: column;\n    width: 100%;\n  }\n  .permissions-controls .btn-group .btn {\n    border-radius: 0.375rem !important;\n    margin-bottom: 0.25rem;\n  }\n}\n@media (max-width: 576px) {\n  .modal-body {\n    padding: 1rem;\n  }\n  .permissions-container {\n    padding: 0.75rem;\n    max-height: 250px;\n  }\n  .form-check {\n    padding: 0.5rem !important;\n  }\n  .form-check .form-check-label strong {\n    font-size: 0.8rem;\n  }\n  .form-check .form-check-label small {\n    font-size: 0.7rem;\n  }\n}\n@keyframes slideIn {\n  from {\n    transform: translateY(-20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal.show .modal-dialog {\n  animation: slideIn 0.3s ease-out;\n}\n.modal-backdrop {\n  animation: fadeIn 0.3s ease-out;\n}\n.permission-selected .form-check {\n  background-color: #e7f3ff !important;\n  border-color: #0d6efd !important;\n}\n.permission-selected .form-check .form-check-label strong {\n  color: #0d6efd;\n}\n.no-permissions-state {\n  padding: 3rem 1rem;\n  text-align: center;\n}\n.no-permissions-state .isax {\n  opacity: 0.5;\n}\n.no-permissions-state h6 {\n  margin: 1rem 0 0.5rem;\n  color: #6c757d;\n}\n.no-permissions-state p {\n  color: #adb5bd;\n  font-size: 0.9rem;\n}\n.perm-search {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.perm-search__icon {\n  position: absolute;\n  left: 10px;\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.perm-search__input {\n  width: 100%;\n  padding: 7px 32px 7px 32px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.perm-search__input:focus {\n  border-color: #069b8f;\n  background: #fff;\n}\n.perm-search__clear {\n  position: absolute;\n  right: 8px;\n  background: none;\n  border: none;\n  padding: 0;\n  font-size: 15px;\n  color: #9ca3af;\n  cursor: pointer;\n  line-height: 1;\n}\n.perm-search__clear:hover {\n  color: #4b5563;\n}\n.perm-empty-icon {\n  font-size: 2rem;\n}\n.permissions-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  max-height: 320px;\n  overflow-y: auto;\n  padding: 4px 2px;\n}\n@media (max-width: 768px) {\n  .permissions-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .permissions-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.permission-item {\n  background: #fff;\n  border-color: #e9ecef !important;\n  transition: border-color 0.15s, background 0.15s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.permission-item:hover {\n  border-color: #6c757d !important;\n  background: #f8f9fa !important;\n}\n.permission-item.selected {\n  border-color: #0d6efd !important;\n  background: #eef4ff !important;\n}\n.permissions-container,\n.modal-body {\n}\n.permissions-container::-webkit-scrollbar,\n.modal-body::-webkit-scrollbar {\n  width: 8px;\n}\n.permissions-container::-webkit-scrollbar-track,\n.modal-body::-webkit-scrollbar-track {\n  background: #f1f3f4;\n  border-radius: 4px;\n}\n.permissions-container::-webkit-scrollbar-thumb,\n.modal-body::-webkit-scrollbar-thumb {\n  background: #c1c8cd;\n  border-radius: 4px;\n}\n.permissions-container::-webkit-scrollbar-thumb:hover,\n.modal-body::-webkit-scrollbar-thumb:hover {\n  background: #a8b3ba;\n}\n.statistics-card {\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.statistics-card .card-body {\n  text-align: center;\n}\n.statistics-card .card-body h4 {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.statistics-card .card-body small {\n  opacity: 0.9;\n  font-size: 0.8rem;\n}\n.statistics-card .card-body .isax {\n  font-size: 2rem;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=adminrh-role.component.css.map */\n"] }]
  }], () => [{ type: RoleService }, { type: PermissionService }, { type: AuthService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhRoleComponent, { className: "AdminrhRoleComponent", filePath: "app/features/adminrh/adminrh-role/adminrh-role.component.ts", lineNumber: 31 });
})();

export {
  AdminrhRoleComponent
};
//# sourceMappingURL=chunk-FYDIBLML.js.map
