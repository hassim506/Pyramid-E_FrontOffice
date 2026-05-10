import {
  RoleService
} from "./chunk-4MSJP6V6.js";
import {
  PermissionService
} from "./chunk-NUN3UWBA.js";
import {
  routes
} from "./chunk-ZAFZNJD2.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormArray,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-YMJPU2MG.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-LFLGGSY5.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf,
  SlicePipe
} from "./chunk-GWJREDC5.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
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
} from "./chunk-2JCHGHJA.js";

// src/app/features/adminrh/adminrh-role/adminrh-role.component.ts
function AdminrhRoleComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275element(1, "i", 98);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 99);
    \u0275\u0275listener("click", function AdminrhRoleComponent_div_16_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.successMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMessage, " ");
  }
}
function AdminrhRoleComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275element(1, "i", 87);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 99);
    \u0275\u0275listener("click", function AdminrhRoleComponent_div_17_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.errorMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function AdminrhRoleComponent_option_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275property("value", option_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r4, " ");
  }
}
function AdminrhRoleComponent_tr_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 102)(2, "div", 103)(3, "span", 104);
    \u0275\u0275text(4, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 105);
    \u0275\u0275text(6, "Chargement des r\xF4les...");
    \u0275\u0275elementEnd()()();
  }
}
function AdminrhRoleComponent_tr_59_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 109);
    \u0275\u0275listener("click", function AdminrhRoleComponent_tr_59_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275element(1, "i", 110);
    \u0275\u0275text(2, " Cr\xE9er le premier r\xF4le ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhRoleComponent_tr_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 102);
    \u0275\u0275element(2, "i", 106);
    \u0275\u0275elementStart(3, "p", 107);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminrhRoleComponent_tr_59_button_5_Template, 3, 0, "button", 108);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.searchText ? "Aucun r\xF4le ne correspond \xE0 votre recherche" : "Aucun r\xF4le trouv\xE9", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.searchText);
  }
}
function AdminrhRoleComponent_tr_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 111);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 23)(6, "div", 112)(7, "div", 113);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "h6", 62);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 27);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "td")(15, "span", 114);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "slice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "span", 115);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "button", 116);
    \u0275\u0275listener("click", function AdminrhRoleComponent_tr_60_Template_button_click_22_listener() {
      const role_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewRolePermissions(role_r7));
    });
    \u0275\u0275element(23, "i", 117);
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "td")(27, "span", 118);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td")(30, "small", 27);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "date");
    \u0275\u0275element(33, "br");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "td", 119)(37, "div", 70)(38, "button", 120);
    \u0275\u0275listener("click", function AdminrhRoleComponent_tr_60_Template_button_click_38_listener() {
      const role_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewRolePermissions(role_r7));
    });
    \u0275\u0275element(39, "i", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 122);
    \u0275\u0275listener("click", function AdminrhRoleComponent_tr_60_Template_button_click_40_listener() {
      const role_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal(role_r7));
    });
    \u0275\u0275element(41, "i", 123);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const role_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(role_r7.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", role_r7.name.charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(role_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("ID: ", role_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", role_r7.description);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r7.description ? role_r7.description.length > 50 ? \u0275\u0275pipeBind3(17, 14, role_r7.description, 0, 50) + "..." : role_r7.description : "-", " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(role_r7.guard_name === "web" ? "bg-info" : "bg-warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r7.guard_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", "Voir les " + ctx_r1.getPermissionsCount(role_r7) + " permissions");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getPermissionsCount(role_r7));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", role_r7.users_count || 0, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(32, 18, role_r7.created_at, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(35, 21, role_r7.created_at, "HH:mm"), " ");
  }
}
function AdminrhRoleComponent_div_61_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 128)(1, "a", 136);
    \u0275\u0275listener("click", function AdminrhRoleComponent_div_61_li_8_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(1));
    });
    \u0275\u0275text(2, "1");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhRoleComponent_div_61_li_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 137)(1, "span", 138);
    \u0275\u0275text(2, "...");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhRoleComponent_div_61_li_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 128)(1, "a", 136);
    \u0275\u0275listener("click", function AdminrhRoleComponent_div_61_li_10_Template_a_click_1_listener() {
      const page_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(page_r11));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r11 === ctx_r1.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", page_r11, " ");
  }
}
function AdminrhRoleComponent_div_61_li_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 137)(1, "span", 138);
    \u0275\u0275text(2, "...");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhRoleComponent_div_61_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 128)(1, "a", 136);
    \u0275\u0275listener("click", function AdminrhRoleComponent_div_61_li_12_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.totalPages));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.totalPages);
  }
}
function AdminrhRoleComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 125);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "nav", 126)(4, "ul", 127)(5, "li", 128)(6, "a", 129);
    \u0275\u0275listener("click", function AdminrhRoleComponent_div_61_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(7, "i", 130);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AdminrhRoleComponent_div_61_li_8_Template, 3, 0, "li", 131)(9, AdminrhRoleComponent_div_61_li_9_Template, 3, 0, "li", 132)(10, AdminrhRoleComponent_div_61_li_10_Template, 3, 3, "li", 133)(11, AdminrhRoleComponent_div_61_li_11_Template, 3, 0, "li", 132)(12, AdminrhRoleComponent_div_61_li_12_Template, 3, 1, "li", 131);
    \u0275\u0275elementStart(13, "li", 128)(14, "a", 134);
    \u0275\u0275listener("click", function AdminrhRoleComponent_div_61_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(15, "i", 135);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Affichage de ", ctx_r1.getStartIndex(), " \xE0 ", ctx_r1.getEndIndex(), " sur ", ctx_r1.totalItems, " r\xE9sultats ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.getPaginationArray()[0] > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPaginationArray()[0] > 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getPaginationArray());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPaginationArray()[ctx_r1.getPaginationArray().length - 1] < ctx_r1.totalPages - 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPaginationArray()[ctx_r1.getPaginationArray().length - 1] < ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function AdminrhRoleComponent_div_80_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Le nom est requis");
    \u0275\u0275elementEnd();
  }
}
function AdminrhRoleComponent_div_80_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Le nom doit contenir au moins 3 caract\xE8res");
    \u0275\u0275elementEnd();
  }
}
function AdminrhRoleComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139);
    \u0275\u0275template(1, AdminrhRoleComponent_div_80_small_1_Template, 2, 0, "small", 34)(2, AdminrhRoleComponent_div_80_small_2_Template, 2, 0, "small", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["name"].hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["name"].hasError("minlength"));
  }
}
function AdminrhRoleComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139);
    \u0275\u0275text(1, " Le guard est requis ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhRoleComponent_div_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 140);
    \u0275\u0275element(1, "i", 141);
    \u0275\u0275elementStart(2, "p", 142);
    \u0275\u0275text(3, "Aucune permission disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 27);
    \u0275\u0275text(5, "Cr\xE9ez d'abord des permissions pour les assigner aux r\xF4les");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhRoleComponent_div_144_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146)(1, "div", 147);
    \u0275\u0275element(2, "input", 148);
    \u0275\u0275elementStart(3, "label", 149)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 150);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const permission_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275property("formControlName", i_r14)("id", "permission-" + permission_r13.id);
    \u0275\u0275advance();
    \u0275\u0275property("for", "permission-" + permission_r13.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(permission_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(permission_r13.guard_name);
  }
}
function AdminrhRoleComponent_div_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143)(1, "div", 144);
    \u0275\u0275template(2, AdminrhRoleComponent_div_144_div_2_Template, 8, 5, "div", 145);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 77)(4, "small", 27);
    \u0275\u0275element(5, "i", 79);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.allPermissions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getSelectedPermissionsCount(), " permission(s) s\xE9lectionn\xE9e(s) sur ", ctx_r1.allPermissions.length, " ");
  }
}
function AdminrhRoleComponent_span_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 151);
  }
}
function AdminrhRoleComponent_i_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 152);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("isax-edit", ctx_r1.isEditing)("isax-add", !ctx_r1.isEditing);
  }
}
function AdminrhRoleComponent_div_164_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 153);
    \u0275\u0275element(1, "i", 154);
    \u0275\u0275elementStart(2, "h6", 27);
    \u0275\u0275text(3, "Aucune permission assign\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 155);
    \u0275\u0275text(5, "Ce r\xF4le n'a aucune permission assign\xE9e pour le moment.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 156);
    \u0275\u0275listener("click", function AdminrhRoleComponent_div_164_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editRoleFromPermissionsView());
    });
    \u0275\u0275element(7, "i", 95);
    \u0275\u0275text(8, " Modifier le r\xF4le ");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhRoleComponent_div_165_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 165)(1, "div", 166)(2, "div", 167)(3, "div", 168)(4, "div", 169);
    \u0275\u0275element(5, "i", 170);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 171)(7, "h6", 172);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small", 27);
    \u0275\u0275element(10, "i", 173);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const permission_r16 = ctx.$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(permission_r16.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", permission_r16.guard_name, " ");
  }
}
function AdminrhRoleComponent_div_165_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 157);
    \u0275\u0275template(2, AdminrhRoleComponent_div_165_div_2_Template, 12, 2, "div", 158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 159)(4, "div", 160)(5, "div", 161)(6, "div", 162);
    \u0275\u0275element(7, "i", 163);
    \u0275\u0275elementStart(8, "div")(9, "h4", 164);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small", 27);
    \u0275\u0275text(12, "Permission(s) assign\xE9e(s)");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.selectedRole.permissions)("ngForTrackBy", ctx_r1.trackByPermissionId);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.getPermissionsCount(ctx_r1.selectedRole));
  }
}
function AdminrhRoleComponent_div_173_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 174);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r1.showModal || ctx_r1.showPermissionsModal);
  }
}
var AdminrhRoleComponent = class _AdminrhRoleComponent {
  roleService;
  permissionService;
  fb;
  routes = routes;
  // ============= ÉTAT DES DONNÉES =============
  roles = [];
  allPermissions = [];
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
  constructor(roleService, permissionService, fb) {
    this.roleService = roleService;
    this.permissionService = permissionService;
    this.fb = fb;
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
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
          Validators.pattern(/^[a-zA-Z0-9\s\-_.]+$/)
        ]
      ],
      guard_name: ["web", [Validators.required]],
      description: ["", [Validators.maxLength(500)]],
      permissions: this.fb.array([])
    });
  }
  // ============= CHARGEMENT DES DONNÉES =============
  loadRoles() {
    this.loading = true;
    console.log("\u{1F50D} D\xE9but du chargement des r\xF4les...");
    this.roleService.getAllRoles().subscribe({
      next: (response) => {
        console.log("\u2705 R\xE9ponse compl\xE8te du backend:", response);
        this.roles = this.extractRolesFromResponse(response);
        console.log("\u2705 Nombre de r\xF4les charg\xE9s:", this.roles.length);
        if (this.roles.length > 0) {
          console.log("\u2705 Premier r\xF4le:", this.roles[0]);
          this.roles.forEach((role) => {
            console.log(`\u{1F4CA} R\xF4le "${role.name}":`, {
              id: role.id,
              permissions: role.permissions?.length || 0,
              firstPermission: role.permissions?.[0]?.name || "Aucune"
            });
          });
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
    if (response.roles && Array.isArray(response.roles)) {
      return response.roles;
    } else if (Array.isArray(response)) {
      return response;
    } else if (response.data && Array.isArray(response.data)) {
      return response.data;
    } else if (response.success && Array.isArray(response.data)) {
      return response.data;
    } else {
      console.warn("\u26A0\uFE0F Structure de r\xE9ponse des r\xF4les non reconnue:", response);
      return [];
    }
  }
  extractPermissionsFromResponse(response) {
    if (Array.isArray(response)) {
      return response;
    } else if (response.data && Array.isArray(response.data)) {
      return response.data;
    } else if (response.success && Array.isArray(response.data)) {
      return response.data;
    } else if (response.permissions && Array.isArray(response.permissions)) {
      return response.permissions;
    } else {
      console.warn("\u26A0\uFE0F Structure de r\xE9ponse des permissions non reconnue:", response);
      return [];
    }
  }
  initializeDataDisplay() {
    this.filteredRoles = [...this.roles];
    this.currentPage = 1;
    this.updatePagination();
  }
  // ============= GESTION DU FORMARRAY DES PERMISSIONS =============
  createPermissionsFormArray() {
    if (this.allPermissions.length === 0) {
      console.warn("\u26A0\uFE0F Aucune permission disponible pour cr\xE9er le FormArray");
      return;
    }
    const permissionsFormArray = this.fb.array(this.allPermissions.map(() => this.fb.control(false)));
    this.roleForm.setControl("permissions", permissionsFormArray);
    console.log("\u2705 FormArray des permissions cr\xE9\xE9 avec", permissionsFormArray.length, "contr\xF4les");
  }
  get permissionsFormArray() {
    return this.roleForm.get("permissions");
  }
  // ============= RECHERCHE ET FILTRAGE =============
  searchRoles() {
    const searchTerm = this.searchText.trim().toLowerCase();
    if (!searchTerm) {
      this.filteredRoles = [...this.roles];
    } else {
      this.filteredRoles = this.roles.filter((role) => role.name.toLowerCase().includes(searchTerm) || role.guard_name.toLowerCase().includes(searchTerm) || role.description && role.description.toLowerCase().includes(searchTerm));
    }
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
    this.allPermissions.forEach((permission, index) => {
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
        selectedPermissions.push(this.allPermissions[i]);
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
    if (!this.roleForm.get("permissions") || this.permissionsFormArray.length !== this.allPermissions.length) {
      this.createPermissionsFormArray();
    }
    if (role) {
      this.isEditing = true;
      this.selectedRole = role;
      this.roleForm.patchValue({
        name: role.name,
        guard_name: role.guard_name,
        description: role.description || ""
      });
      const permissionsArray = this.permissionsFormArray;
      const rolePermissionIds = role.permissions?.map((p) => p.id) || [];
      this.allPermissions.forEach((permission, index) => {
        const isAssigned = rolePermissionIds.includes(permission.id);
        permissionsArray.at(index).setValue(isAssigned);
      });
      console.log("\u2705 R\xF4le charg\xE9 avec", rolePermissionIds.length, "permissions assign\xE9es");
    } else {
      this.isEditing = false;
      this.selectedRole = null;
      this.roleForm.reset({
        guard_name: "web",
        description: "",
        permissions: this.allPermissions.map(() => false)
      });
    }
  }
  closeModal() {
    this.showModal = false;
    this.roleForm.reset({ guard_name: "web" });
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
    const selectedPermissions = this.getSelectedPermissionIds();
    return {
      name: formValue.name?.trim(),
      guard_name: formValue.guard_name,
      description: formValue.description?.trim() || "",
      permissions: selectedPermissions
      // <-- change ici
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
    if (error.status === 422 && error.error?.errors) {
      const messages = Object.values(error.error.errors).flat().join("\n");
      this.showError(messages);
    } else if (error.status === 404) {
      this.showError("R\xF4le introuvable");
    } else if (error.status === 403) {
      this.showError("Vous n'avez pas les droits pour effectuer cette action");
    } else if (error.status === 409) {
      this.showError("Ce r\xF4le existe d\xE9j\xE0");
    } else if (error.error?.message) {
      this.showError(error.error.message);
    } else {
      this.showError(`Erreur lors de la ${action} du r\xF4le`);
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
    return new (__ngFactoryType__ || _AdminrhRoleComponent)(\u0275\u0275directiveInject(RoleService), \u0275\u0275directiveInject(PermissionService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhRoleComponent, selectors: [["app-adminrh-role"]], decls: 174, vars: 52, consts: [[1, "page-content"], [1, "d-md-flex", "d-block", "align-items-center", "justify-content-between", "mb-4"], [1, "my-auto", "mb-2"], [1, "mb-1"], [1, "breadcrumb", "mb-0"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "isax", "isax-add", "me-2"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "card", "mb-4"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "input-group"], [1, "input-group-text"], [1, "isax", "isax-search-normal-1"], ["type", "text", "placeholder", "Rechercher un r\xF4le...", 1, "form-control", 3, "ngModelChange", "keyup", "ngModel"], [1, "col-md-6", "text-md-end", "mt-3", "mt-md-0"], [1, "d-flex", "align-items-center", "justify-content-md-end", "gap-3"], [1, "d-flex", "align-items-center"], [1, "form-label", "mb-0", "me-2"], [1, "form-select", "form-select-sm", 2, "width", "auto", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "text-muted"], [1, "card"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle"], [1, "table-light"], ["scope", "col"], ["scope", "col", 1, "text-end"], [4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "d-flex justify-content-between align-items-center mt-4", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "roleModalLabel", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], ["id", "roleModalLabel", 1, "modal-title"], [1, "isax", "isax-user-tag", "me-2"], ["type", "button", "aria-label", "Fermer", 1, "btn-close", 3, "click"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "row"], [1, "mb-3"], ["for", "roleName", 1, "form-label"], [1, "text-danger"], ["type", "text", "id", "roleName", "formControlName", "name", "placeholder", "Ex: Administrateur, Formateur, Apprenant...", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "roleGuard", 1, "form-label"], ["id", "roleGuard", "formControlName", "guard_name", 1, "form-select"], ["value", ""], ["value", "web"], ["value", "api"], [1, "form-text", "text-muted"], ["for", "roleDescription", 1, "form-label"], ["id", "roleDescription", "rows", "4", "formControlName", "description", "placeholder", "Description d\xE9taill\xE9e du r\xF4le et de ses responsabilit\xE9s...", 1, "form-control"], [1, "mt-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "mb-0"], [1, "isax", "isax-key", "me-2"], [1, "badge", "bg-primary", "ms-2"], ["role", "group", 1, "btn-group", "btn-group-sm"], ["type", "button", 1, "btn", "btn-outline-success", "btn-sm", 3, "click", "disabled"], [1, "isax", "isax-tick-square", "me-1"], ["type", "button", 1, "btn", "btn-outline-warning", "btn-sm", 3, "click", "disabled"], [1, "isax", "isax-close-square", "me-1"], ["role", "group", 1, "btn-group"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-info", "btn-sm", "dropdown-toggle"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"], [1, "isax", "isax-global", "me-2"], [1, "isax", "isax-code", "me-2"], [1, "mt-3", "p-3", "bg-light", "rounded"], [1, "col-md-8"], [1, "isax", "isax-info-circle", "me-1"], [1, "col-md-4", "text-end"], [1, "progress", 2, "height", "8px"], [1, "progress-bar"], ["class", "text-center py-4", 4, "ngIf"], ["class", "permissions-container", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click", "disabled"], [1, "isax", "isax-close-circle", "me-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "isax", 3, "isax-edit", "isax-add", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", "aria-labelledby", "permissionsModalLabel", 1, "modal", "fade", "permissions-modal"], ["id", "permissionsModalLabel", 1, "modal-title"], ["class", "text-center py-5", 4, "ngIf"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "isax", "isax-edit", "me-2"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "isax", "isax-tick-circle", "me-2"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [3, "value"], ["colspan", "8", 1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3", "text-muted", "mb-0"], [1, "isax", "isax-box", "fs-48", "text-muted", "mb-3", "d-block"], [1, "text-muted", "mb-0"], ["class", "btn btn-primary btn-sm mt-3", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "btn-sm", "mt-3", 3, "click"], [1, "isax", "isax-add", "me-1"], [1, "badge", "bg-light", "text-dark"], [1, "avatar-sm", "me-3"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary"], [3, "title"], [1, "badge"], [1, "btn", "btn-sm", "btn-outline-primary", "d-flex", "align-items-center", 3, "click", "title"], [1, "isax", "isax-key", "me-1"], [1, "badge", "bg-secondary"], [1, "text-end"], ["title", "Voir les permissions", 1, "btn", "btn-sm", "btn-outline-info", 3, "click"], [1, "isax", "isax-eye"], ["title", "Modifier le r\xF4le", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "isax", "isax-edit"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-4"], [1, "text-muted", "small"], ["aria-label", "Pagination des r\xF4les"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], ["href", "javascript:void(0);", "title", "Page pr\xE9c\xE9dente", 1, "page-link", 3, "click"], [1, "isax", "isax-arrow-left-2"], ["class", "page-item", 4, "ngIf"], ["class", "page-item disabled", 4, "ngIf"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", "title", "Page suivante", 1, "page-link", 3, "click"], [1, "isax", "isax-arrow-right-2"], ["href", "javascript:void(0);", 1, "page-link", 3, "click"], [1, "page-item", "disabled"], [1, "page-link"], [1, "invalid-feedback"], [1, "text-center", "py-4"], [1, "isax", "isax-info-circle", "fs-48", "text-muted", "mb-3", "d-block"], [1, "text-muted", "mb-2"], [1, "permissions-container"], ["formArrayName", "permissions", 1, "row"], ["class", "col-md-6 col-lg-4 mb-2", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-4", "mb-2"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "formControlName", "id"], [1, "form-check-label", "d-block", 3, "for"], [1, "d-block", "text-muted"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "isax"], [1, "text-center", "py-5"], [1, "isax", "isax-lock", "fs-48", "text-muted", "mb-3", "d-block"], [1, "text-muted", "mb-3"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "row", "g-3"], ["class", "col-md-6 col-lg-4", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mt-4", "p-3", "bg-primary", "bg-opacity-10", "rounded"], [1, "row", "text-center"], [1, "col"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-chart-success", "text-primary", "me-2", "fs-5"], [1, "mb-0", "text-primary", "fw-bold"], [1, "col-md-6", "col-lg-4"], [1, "card", "border-0", "bg-light", "h-100"], [1, "card-body", "p-3"], [1, "d-flex", "align-items-start"], [1, "me-3"], [1, "isax", "isax-tick-circle", "text-success", "fs-5"], [1, "flex-grow-1"], [1, "mb-1", "fw-semibold"], [1, "isax", "isax-shield-security", "me-1"], [1, "modal-backdrop", "fade"]], template: function AdminrhRoleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
      \u0275\u0275text(4, "Gestion des R\xF4les");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "nav")(6, "ol", 4)(7, "li", 5)(8, "a", 6);
      \u0275\u0275text(9, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "li", 7);
      \u0275\u0275text(11, "R\xF4les");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "div", 8)(13, "button", 9);
      \u0275\u0275listener("click", function AdminrhRoleComponent_Template_button_click_13_listener() {
        return ctx.openModal();
      });
      \u0275\u0275element(14, "i", 10);
      \u0275\u0275text(15, " Nouveau R\xF4le ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(16, AdminrhRoleComponent_div_16_Template, 4, 1, "div", 11)(17, AdminrhRoleComponent_div_17_Template, 4, 1, "div", 12);
      \u0275\u0275elementStart(18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "div", 16)(22, "div", 17)(23, "span", 18);
      \u0275\u0275element(24, "i", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhRoleComponent_Template_input_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return $event;
      });
      \u0275\u0275listener("keyup", function AdminrhRoleComponent_Template_input_keyup_25_listener() {
        return ctx.searchRoles();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 21)(27, "div", 22)(28, "div", 23)(29, "label", 24);
      \u0275\u0275text(30, "Afficher:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "select", 25);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhRoleComponent_Template_select_ngModelChange_31_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.itemsPerPage, $event) || (ctx.itemsPerPage = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AdminrhRoleComponent_Template_select_change_31_listener() {
        return ctx.onItemsPerPageChange();
      });
      \u0275\u0275template(32, AdminrhRoleComponent_option_32_Template, 2, 2, "option", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "span", 27);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(35, "div", 28)(36, "div", 14)(37, "div", 29)(38, "table", 30)(39, "thead", 31)(40, "tr")(41, "th", 32);
      \u0275\u0275text(42, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th", 32);
      \u0275\u0275text(44, "Nom du R\xF4le");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "th", 32);
      \u0275\u0275text(46, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "th", 32);
      \u0275\u0275text(48, "Guard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th", 32);
      \u0275\u0275text(50, "Permissions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "th", 32);
      \u0275\u0275text(52, "Utilisateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 32);
      \u0275\u0275text(54, "Date de Cr\xE9ation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th", 33);
      \u0275\u0275text(56, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "tbody");
      \u0275\u0275template(58, AdminrhRoleComponent_tr_58_Template, 7, 0, "tr", 34)(59, AdminrhRoleComponent_tr_59_Template, 6, 2, "tr", 34)(60, AdminrhRoleComponent_tr_60_Template, 42, 24, "tr", 35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(61, AdminrhRoleComponent_div_61_Template, 16, 12, "div", 36);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "div", 37)(63, "div", 38)(64, "div", 39)(65, "div", 40)(66, "h5", 41);
      \u0275\u0275element(67, "i", 42);
      \u0275\u0275text(68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "button", 43);
      \u0275\u0275listener("click", function AdminrhRoleComponent_Template_button_click_69_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "form", 44);
      \u0275\u0275listener("ngSubmit", function AdminrhRoleComponent_Template_form_ngSubmit_70_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(71, "div", 45)(72, "div", 46)(73, "div", 16)(74, "div", 47)(75, "label", 48);
      \u0275\u0275text(76, " Nom du R\xF4le ");
      \u0275\u0275elementStart(77, "span", 49);
      \u0275\u0275text(78, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(79, "input", 50);
      \u0275\u0275template(80, AdminrhRoleComponent_div_80_Template, 3, 2, "div", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 47)(82, "label", 52);
      \u0275\u0275text(83, " Guard ");
      \u0275\u0275elementStart(84, "span", 49);
      \u0275\u0275text(85, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "select", 53)(87, "option", 54);
      \u0275\u0275text(88, "S\xE9lectionner un guard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "option", 55);
      \u0275\u0275text(90, "Web");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "option", 56);
      \u0275\u0275text(92, "API");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(93, AdminrhRoleComponent_div_93_Template, 2, 0, "div", 51);
      \u0275\u0275elementStart(94, "small", 57);
      \u0275\u0275text(95, " Le guard d\xE9termine o\xF9 le r\xF4le sera utilis\xE9 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(96, "div", 16)(97, "div", 47)(98, "label", 58);
      \u0275\u0275text(99, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(100, "textarea", 59);
      \u0275\u0275elementStart(101, "small", 57);
      \u0275\u0275text(102, " Description optionnelle pour clarifier le r\xF4le ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(103, "div", 60)(104, "div", 61)(105, "h6", 62);
      \u0275\u0275element(106, "i", 63);
      \u0275\u0275text(107, " Permissions Assign\xE9es ");
      \u0275\u0275elementStart(108, "span", 64);
      \u0275\u0275text(109);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "div", 65)(111, "button", 66);
      \u0275\u0275listener("click", function AdminrhRoleComponent_Template_button_click_111_listener() {
        return ctx.selectAllPermissions();
      });
      \u0275\u0275element(112, "i", 67);
      \u0275\u0275text(113, " Tout s\xE9lectionner ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "button", 68);
      \u0275\u0275listener("click", function AdminrhRoleComponent_Template_button_click_114_listener() {
        return ctx.deselectAllPermissions();
      });
      \u0275\u0275element(115, "i", 69);
      \u0275\u0275text(116, " Tout d\xE9s\xE9lectionner ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "div", 70)(118, "button", 71);
      \u0275\u0275element(119, "i", 72);
      \u0275\u0275text(120, " Par Guard ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "ul", 73)(122, "li")(123, "a", 74);
      \u0275\u0275listener("click", function AdminrhRoleComponent_Template_a_click_123_listener() {
        return ctx.selectPermissionsByGuard("web");
      });
      \u0275\u0275element(124, "i", 75);
      \u0275\u0275text(125, "Web ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "li")(127, "a", 74);
      \u0275\u0275listener("click", function AdminrhRoleComponent_Template_a_click_127_listener() {
        return ctx.selectPermissionsByGuard("api");
      });
      \u0275\u0275element(128, "i", 76);
      \u0275\u0275text(129, "API ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(130, "div", 77)(131, "div", 15)(132, "div", 78)(133, "small", 27);
      \u0275\u0275element(134, "i", 79);
      \u0275\u0275elementStart(135, "strong");
      \u0275\u0275text(136);
      \u0275\u0275elementEnd();
      \u0275\u0275text(137);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "div", 80)(139, "div", 81);
      \u0275\u0275element(140, "div", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "small", 27);
      \u0275\u0275text(142);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(143, AdminrhRoleComponent_div_143_Template, 6, 0, "div", 83)(144, AdminrhRoleComponent_div_144_Template, 7, 3, "div", 84);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "div", 85)(146, "button", 86);
      \u0275\u0275listener("click", function AdminrhRoleComponent_Template_button_click_146_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275element(147, "i", 87);
      \u0275\u0275text(148, " Annuler ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "button", 88);
      \u0275\u0275template(150, AdminrhRoleComponent_span_150_Template, 1, 0, "span", 89)(151, AdminrhRoleComponent_i_151_Template, 1, 4, "i", 90);
      \u0275\u0275text(152);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(153, "div", 91)(154, "div", 38)(155, "div", 39)(156, "div", 40)(157, "h5", 92);
      \u0275\u0275element(158, "i", 63);
      \u0275\u0275text(159, " Permissions du r\xF4le ");
      \u0275\u0275elementStart(160, "strong");
      \u0275\u0275text(161);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(162, "button", 43);
      \u0275\u0275listener("click", function AdminrhRoleComponent_Template_button_click_162_listener() {
        return ctx.closePermissionsModal();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "div", 45);
      \u0275\u0275template(164, AdminrhRoleComponent_div_164_Template, 9, 0, "div", 93)(165, AdminrhRoleComponent_div_165_Template, 13, 3, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "div", 85)(167, "button", 94);
      \u0275\u0275listener("click", function AdminrhRoleComponent_Template_button_click_167_listener() {
        return ctx.closePermissionsModal();
      });
      \u0275\u0275element(168, "i", 87);
      \u0275\u0275text(169, " Fermer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "button", 9);
      \u0275\u0275listener("click", function AdminrhRoleComponent_Template_button_click_170_listener() {
        return ctx.editRoleFromPermissionsView();
      });
      \u0275\u0275element(171, "i", 95);
      \u0275\u0275text(172, " Modifier le r\xF4le ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(173, AdminrhRoleComponent_div_173_Template, 1, 2, "div", 96);
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.superadmin_dashboard);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.itemsPerPage);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.itemsPerPageOptions);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate3(" ", ctx.getStartIndex(), " - ", ctx.getEndIndex(), " de ", ctx.totalItems, " r\xF4le(s) ");
      \u0275\u0275advance(24);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.paginatedRoles.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.paginatedRoles)("ngForTrackBy", ctx.trackByRoleId);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalPages > 1);
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showModal);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.isEditing ? "Modifier le R\xF4le" : "Nouveau R\xF4le", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.roleForm);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("is-invalid", ctx.f["name"].invalid && ctx.f["name"].touched);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f["name"].invalid && ctx.f["name"].touched);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("is-invalid", ctx.f["guard_name"].invalid && ctx.f["guard_name"].touched);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.f["guard_name"].invalid && ctx.f["guard_name"].touched);
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate2("", ctx.getSelectedPermissionsCount(), "/", ctx.allPermissions.length);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.areAllPermissionsSelected());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.areNoPermissionsSelected());
      \u0275\u0275advance(22);
      \u0275\u0275textInterpolate(ctx.getSelectedPermissionsCount());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" permission(s) s\xE9lectionn\xE9e(s) sur ", ctx.allPermissions.length, " ");
      \u0275\u0275advance(3);
      \u0275\u0275classMap(ctx.getSelectedPermissionsCount() === 0 ? "bg-warning" : ctx.getSelectedPermissionsCount() === ctx.allPermissions.length ? "bg-success" : "bg-primary");
      \u0275\u0275styleProp("width", ctx.getSelectedPermissionsCount() / ctx.allPermissions.length * 100, "%");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", (ctx.getSelectedPermissionsCount() / ctx.allPermissions.length * 100).toFixed(0), "% ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.allPermissions.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.allPermissions.length > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(3);
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
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormArrayName, RouterModule, RouterLink, FormsModule, NgModel, SlicePipe, DatePipe], styles: ["\n\n.page-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  background-color: #f8f9fa;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.modal.show[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.form-check[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-radius: 6px;\n  transition: background-color 0.2s;\n}\n.form-check[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  margin: 0 2px;\n  border: 1px solid #dee2e6;\n  color: #6c757d;\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  border-color: #dee2e6;\n}\n.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  border-color: #007bff;\n  color: white;\n}\n.pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #6c757d;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n.modal.show[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.modal[_ngcontent-%COMP%]   .modal-dialog.modal-lg[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n.modal[_ngcontent-%COMP%]   .modal-dialog.modal-dialog-scrollable[_ngcontent-%COMP%] {\n  height: calc(100vh - 2rem);\n}\n.modal[_ngcontent-%COMP%]   .modal-dialog.modal-dialog-scrollable[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n}\n.modal[_ngcontent-%COMP%]   .modal-dialog.modal-dialog-scrollable[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: calc(100vh - 200px);\n}\n.permissions-container[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n  padding: 1rem;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  background-color: #f8f9fa;\n}\n.permissions-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.permissions-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%], \n.permissions-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n}\n.permissions-container[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  margin: 0;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  background-color: white;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.permissions-container[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]:hover {\n  border-color: #0d6efd;\n  background-color: #f0f7ff;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.permissions-container[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-top: 0.125rem;\n}\n.permissions-container[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.permissions-container[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 0.5rem;\n}\n.permissions-container[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #212529;\n  font-size: 0.9rem;\n}\n.permissions-container[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.75rem;\n}\n.permissions-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.permissions-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n  border: 1px solid #e9ecef;\n}\n.permissions-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-color: #0d6efd;\n}\n.permissions-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.permissions-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .isax[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.permissions-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  color: #212529;\n}\n.permissions-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.75rem;\n}\n.permissions-modal[_ngcontent-%COMP%]   .bg-primary.bg-opacity-10[_ngcontent-%COMP%] {\n  background-color: rgba(13, 110, 253, 0.1) !important;\n  border: 1px solid rgba(13, 110, 253, 0.2);\n}\n.permissions-counter[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.permissions-counter[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  transition: width 0.3s ease;\n}\n.permissions-controls[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  padding: 0.375rem 0.75rem;\n}\n.permissions-controls[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.permissions-controls[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  border: 1px solid #e9ecef;\n}\n.permissions-controls[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n}\n.permissions-controls[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.permissions-controls[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .isax[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.permission-badge[_ngcontent-%COMP%], \n.role-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.permission-badge[_ngcontent-%COMP%]   .isax[_ngcontent-%COMP%], \n.role-badge[_ngcontent-%COMP%]   .isax[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n@media (max-width: 768px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n  }\n  .modal-dialog.modal-lg[_ngcontent-%COMP%] {\n    max-width: calc(100vw - 1rem);\n  }\n  .modal-dialog.modal-dialog-scrollable[_ngcontent-%COMP%] {\n    height: calc(100vh - 1rem);\n  }\n  .permissions-container[_ngcontent-%COMP%] {\n    max-height: 300px;\n  }\n  .permissions-container[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%], \n   .permissions-container[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .permissions-controls[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  .permissions-controls[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    border-radius: 0.375rem !important;\n    margin-bottom: 0.25rem;\n  }\n}\n@media (max-width: 576px) {\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .permissions-container[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    max-height: 250px;\n  }\n  .form-check[_ngcontent-%COMP%] {\n    padding: 0.5rem !important;\n  }\n  .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateY(-20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n.permission-selected[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n  background-color: #e7f3ff !important;\n  border-color: #0d6efd !important;\n}\n.permission-selected[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0d6efd;\n}\n.no-permissions-state[_ngcontent-%COMP%] {\n  padding: 3rem 1rem;\n  text-align: center;\n}\n.no-permissions-state[_ngcontent-%COMP%]   .isax[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.no-permissions-state[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 1rem 0 0.5rem;\n  color: #6c757d;\n}\n.no-permissions-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  font-size: 0.9rem;\n}\n.permissions-container[_ngcontent-%COMP%], \n.modal-body[_ngcontent-%COMP%] {\n}\n.permissions-container[_ngcontent-%COMP%]::-webkit-scrollbar, \n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.permissions-container[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f3f4;\n  border-radius: 4px;\n}\n.permissions-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c8cd;\n  border-radius: 4px;\n}\n.permissions-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, \n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8b3ba;\n}\n.statistics-card[_ngcontent-%COMP%] {\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.statistics-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.statistics-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.statistics-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  opacity: 0.9;\n  font-size: 0.8rem;\n}\n.statistics-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .isax[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=adminrh-role.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhRoleComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-role", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule], template: `<div class="page-content">\r
  <!-- En-t\xEAte de la page -->\r
  <div class="d-md-flex d-block align-items-center justify-content-between mb-4">\r
    <div class="my-auto mb-2">\r
      <h3 class="mb-1">Gestion des R\xF4les</h3>\r
      <nav>\r
        <ol class="breadcrumb mb-0">\r
          <li class="breadcrumb-item">\r
            <a [routerLink]="routes.superadmin_dashboard">Dashboard</a>\r
          </li>\r
          <li class="breadcrumb-item active" aria-current="page">R\xF4les</li>\r
        </ol>\r
      </nav>\r
    </div>\r
    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">\r
      <button \r
        type="button" \r
        class="btn btn-primary"\r
        (click)="openModal()">\r
        <i class="isax isax-add me-2"></i>\r
        Nouveau R\xF4le\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Messages de notification -->\r
  <div *ngIf="successMessage" class="alert alert-success alert-dismissible fade show" role="alert">\r
    <i class="isax isax-tick-circle me-2"></i>\r
    {{ successMessage }}\r
    <button type="button" class="btn-close" (click)="successMessage = ''" aria-label="Close"></button>\r
  </div>\r
\r
  <div *ngIf="errorMessage" class="alert alert-danger alert-dismissible fade show" role="alert">\r
    <i class="isax isax-close-circle me-2"></i>\r
    {{ errorMessage }}\r
    <button type="button" class="btn-close" (click)="errorMessage = ''" aria-label="Close"></button>\r
  </div>\r
\r
  <!-- Barre de recherche et contr\xF4les -->\r
  <div class="card mb-4">\r
    <div class="card-body">\r
      <div class="row align-items-center">\r
        <div class="col-md-6">\r
          <div class="input-group">\r
            <span class="input-group-text">\r
              <i class="isax isax-search-normal-1"></i>\r
            </span>\r
            <input \r
              type="text" \r
              class="form-control" \r
              placeholder="Rechercher un r\xF4le..."\r
              [(ngModel)]="searchText"\r
              (keyup)="searchRoles()">\r
          </div>\r
        </div>\r
        <div class="col-md-6 text-md-end mt-3 mt-md-0">\r
          <div class="d-flex align-items-center justify-content-md-end gap-3">\r
            <div class="d-flex align-items-center">\r
              <label class="form-label mb-0 me-2">Afficher:</label>\r
              <select \r
                class="form-select form-select-sm"\r
                style="width: auto;"\r
                [(ngModel)]="itemsPerPage"\r
                (change)="onItemsPerPageChange()">\r
                <option *ngFor="let option of itemsPerPageOptions" [value]="option">\r
                  {{ option }}\r
                </option>\r
              </select>\r
            </div>\r
            <span class="text-muted">\r
              {{ getStartIndex() }} - {{ getEndIndex() }} de {{ totalItems }} r\xF4le(s)\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Tableau des r\xF4les -->\r
  <div class="card">\r
    <div class="card-body">\r
      <div class="table-responsive">\r
        <table class="table table-hover align-middle">\r
          <thead class="table-light">\r
            <tr>\r
              <th scope="col">#</th>\r
              <th scope="col">Nom du R\xF4le</th>\r
              <th scope="col">Description</th>\r
              <th scope="col">Guard</th>\r
              <th scope="col">Permissions</th>\r
              <th scope="col">Utilisateurs</th>\r
              <th scope="col">Date de Cr\xE9ation</th>\r
              <th scope="col" class="text-end">Actions</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <!-- \xC9tat de chargement -->\r
            <tr *ngIf="loading">\r
              <td colspan="8" class="text-center py-5">\r
                <div class="spinner-border text-primary" role="status">\r
                  <span class="visually-hidden">Chargement...</span>\r
                </div>\r
                <p class="mt-3 text-muted mb-0">Chargement des r\xF4les...</p>\r
              </td>\r
            </tr>\r
\r
            <!-- Aucun r\xE9sultat -->\r
            <tr *ngIf="!loading && paginatedRoles.length === 0">\r
              <td colspan="8" class="text-center py-5">\r
                <i class="isax isax-box fs-48 text-muted mb-3 d-block"></i>\r
                <p class="text-muted mb-0">\r
                  {{ searchText ? 'Aucun r\xF4le ne correspond \xE0 votre recherche' : 'Aucun r\xF4le trouv\xE9' }}\r
                </p>\r
                <button \r
                  *ngIf="!searchText" \r
                  class="btn btn-primary btn-sm mt-3"\r
                  (click)="openModal()">\r
                  <i class="isax isax-add me-1"></i>\r
                  Cr\xE9er le premier r\xF4le\r
                </button>\r
              </td>\r
            </tr>\r
\r
            <!-- Liste des r\xF4les -->\r
            <tr *ngFor="let role of paginatedRoles; trackBy: trackByRoleId">\r
              <td>\r
                <span class="badge bg-light text-dark">{{ role.id }}</span>\r
              </td>\r
              <td>\r
                <div class="d-flex align-items-center">\r
                  <div class="avatar-sm me-3">\r
                    <div class="avatar-title rounded-circle bg-primary-subtle text-primary">\r
                      {{ role.name.charAt(0).toUpperCase() }}\r
                    </div>\r
                  </div>\r
                  <div>\r
                    <h6 class="mb-0">{{ role.name }}</h6>\r
                    <small class="text-muted">ID: {{ role.id }}</small>\r
                  </div>\r
                </div>\r
              </td>\r
              <td>\r
                <span [title]="role.description">\r
                  {{ role.description ? (role.description.length > 50 ? (role.description | slice:0:50) + '...' : role.description) : '-' }}\r
                </span>\r
              </td>\r
              <td>\r
                <span class="badge" \r
                      [class]="role.guard_name === 'web' ? 'bg-info' : 'bg-warning'">\r
                  {{ role.guard_name }}\r
                </span>\r
              </td>\r
              <td>\r
                <button \r
                  class="btn btn-sm btn-outline-primary d-flex align-items-center"\r
                  (click)="viewRolePermissions(role)"\r
                  [title]="'Voir les ' + getPermissionsCount(role) + ' permissions'">\r
                  <i class="isax isax-key me-1"></i>\r
                  <span>{{ getPermissionsCount(role) }}</span>\r
                </button>\r
              </td>\r
              <td>\r
                <span class="badge bg-secondary">\r
                  {{ role.users_count || 0 }}\r
                </span>\r
              </td>\r
              <td>\r
                <small class="text-muted">\r
                  {{ role.created_at | date:'dd/MM/yyyy' }}<br>\r
                  {{ role.created_at | date:'HH:mm' }}\r
                </small>\r
              </td>\r
              <td class="text-end">\r
                <div class="btn-group" role="group">\r
                  <button \r
                    class="btn btn-sm btn-outline-info"\r
                    (click)="viewRolePermissions(role)"\r
                    title="Voir les permissions">\r
                    <i class="isax isax-eye"></i>\r
                  </button>\r
                  <button \r
                    class="btn btn-sm btn-outline-primary"\r
                    (click)="openModal(role)"\r
                    title="Modifier le r\xF4le">\r
                    <i class="isax isax-edit"></i>\r
                  </button>\r
                  <!-- <button \r
                    class="btn btn-sm btn-outline-danger"\r
                    (click)="deleteRole(role)"\r
                    title="Supprimer le r\xF4le">\r
                    <i class="isax isax-trash"></i>\r
                  </button> -->\r
                </div>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <!-- Pagination -->\r
      <div class="d-flex justify-content-between align-items-center mt-4" *ngIf="totalPages > 1">\r
        <div class="text-muted small">\r
          Affichage de {{ getStartIndex() }} \xE0 {{ getEndIndex() }} sur {{ totalItems }} r\xE9sultats\r
        </div>\r
        \r
        <nav aria-label="Pagination des r\xF4les">\r
          <ul class="pagination pagination-sm mb-0">\r
            <li class="page-item" [class.disabled]="currentPage === 1">\r
              <a \r
                class="page-link" \r
                href="javascript:void(0);"\r
                (click)="onPageChange(currentPage - 1)"\r
                title="Page pr\xE9c\xE9dente">\r
                <i class="isax isax-arrow-left-2"></i>\r
              </a>\r
            </li>\r
\r
            <!-- Premi\xE8re page -->\r
            <li class="page-item" *ngIf="getPaginationArray()[0] > 1">\r
              <a class="page-link" href="javascript:void(0);" (click)="onPageChange(1)">1</a>\r
            </li>\r
            <li class="page-item disabled" *ngIf="getPaginationArray()[0] > 2">\r
              <span class="page-link">...</span>\r
            </li>\r
\r
            <!-- Pages courantes -->\r
            <li \r
              class="page-item" \r
              *ngFor="let page of getPaginationArray()"\r
              [class.active]="page === currentPage">\r
              <a \r
                class="page-link" \r
                href="javascript:void(0);"\r
                (click)="onPageChange(page)">\r
                {{ page }}\r
              </a>\r
            </li>\r
\r
            <!-- Derni\xE8re page -->\r
            <li class="page-item disabled" *ngIf="getPaginationArray()[getPaginationArray().length - 1] < totalPages - 1">\r
              <span class="page-link">...</span>\r
            </li>\r
            <li class="page-item" *ngIf="getPaginationArray()[getPaginationArray().length - 1] < totalPages">\r
              <a class="page-link" href="javascript:void(0);" (click)="onPageChange(totalPages)">{{ totalPages }}</a>\r
            </li>\r
\r
            <li class="page-item" [class.disabled]="currentPage === totalPages">\r
              <a \r
                class="page-link" \r
                href="javascript:void(0);"\r
                (click)="onPageChange(currentPage + 1)"\r
                title="Page suivante">\r
                <i class="isax isax-arrow-right-2"></i>\r
              </a>\r
            </li>\r
          </ul>\r
        </nav>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal Ajout/Modification de R\xF4le -->\r
<div \r
  class="modal fade" \r
  [class.show]="showModal" \r
  [style.display]="showModal ? 'block' : 'none'"\r
  tabindex="-1"\r
  role="dialog"\r
  aria-labelledby="roleModalLabel">\r
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title" id="roleModalLabel">\r
          <i class="isax isax-user-tag me-2"></i>\r
          {{ isEditing ? 'Modifier le R\xF4le' : 'Nouveau R\xF4le' }}\r
        </h5>\r
        <button \r
          type="button" \r
          class="btn-close" \r
          (click)="closeModal()"\r
          aria-label="Fermer">\r
        </button>\r
      </div>\r
      \r
      <form [formGroup]="roleForm" (ngSubmit)="onSubmit()" novalidate>\r
        <div class="modal-body">\r
          <div class="row">\r
            <!-- Informations g\xE9n\xE9rales -->\r
            <div class="col-md-6">\r
              <div class="mb-3">\r
                <label for="roleName" class="form-label">\r
                  Nom du R\xF4le <span class="text-danger">*</span>\r
                </label>\r
                <input \r
                  type="text" \r
                  id="roleName"\r
                  class="form-control"\r
                  formControlName="name"\r
                  [class.is-invalid]="f['name'].invalid && f['name'].touched"\r
                  placeholder="Ex: Administrateur, Formateur, Apprenant...">\r
                <div class="invalid-feedback" *ngIf="f['name'].invalid && f['name'].touched">\r
                  <small *ngIf="f['name'].hasError('required')">Le nom est requis</small>\r
                  <small *ngIf="f['name'].hasError('minlength')">Le nom doit contenir au moins 3 caract\xE8res</small>\r
                </div>\r
              </div>\r
\r
              <div class="mb-3">\r
                <label for="roleGuard" class="form-label">\r
                  Guard <span class="text-danger">*</span>\r
                </label>\r
                <select \r
                  id="roleGuard"\r
                  class="form-select"\r
                  formControlName="guard_name"\r
                  [class.is-invalid]="f['guard_name'].invalid && f['guard_name'].touched">\r
                  <option value="">S\xE9lectionner un guard</option>\r
                  <option value="web">Web</option>\r
                  <option value="api">API</option>\r
                </select>\r
                <div class="invalid-feedback" *ngIf="f['guard_name'].invalid && f['guard_name'].touched">\r
                  Le guard est requis\r
                </div>\r
                <small class="form-text text-muted">\r
                  Le guard d\xE9termine o\xF9 le r\xF4le sera utilis\xE9\r
                </small>\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6">\r
              <div class="mb-3">\r
                <label for="roleDescription" class="form-label">Description</label>\r
                <textarea \r
                  id="roleDescription"\r
                  class="form-control"\r
                  rows="4"\r
                  formControlName="description"\r
                  placeholder="Description d\xE9taill\xE9e du r\xF4le et de ses responsabilit\xE9s..."></textarea>\r
                <small class="form-text text-muted">\r
                  Description optionnelle pour clarifier le r\xF4le\r
                </small>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Section des permissions -->\r
          <div class="mt-4">\r
           <div class="d-flex justify-content-between align-items-center mb-3">\r
  <h6 class="mb-0">\r
    <i class="isax isax-key me-2"></i>\r
    Permissions Assign\xE9es\r
    <span class="badge bg-primary ms-2">{{ getSelectedPermissionsCount() }}/{{ allPermissions.length }}</span>\r
  </h6>\r
  <div class="btn-group btn-group-sm" role="group">\r
    <button \r
      type="button" \r
      class="btn btn-outline-success btn-sm"\r
      [disabled]="areAllPermissionsSelected()"\r
      (click)="selectAllPermissions()">\r
      <i class="isax isax-tick-square me-1"></i>\r
      Tout s\xE9lectionner\r
    </button>\r
    <button \r
      type="button" \r
      class="btn btn-outline-warning btn-sm"\r
      [disabled]="areNoPermissionsSelected()"\r
      (click)="deselectAllPermissions()">\r
      <i class="isax isax-close-square me-1"></i>\r
      Tout d\xE9s\xE9lectionner\r
    </button>\r
    <div class="btn-group" role="group">\r
      <button \r
        type="button" \r
        class="btn btn-outline-info btn-sm dropdown-toggle"\r
        data-bs-toggle="dropdown">\r
        <i class="isax isax-filter me-1"></i>\r
        Par Guard\r
      </button>\r
      <ul class="dropdown-menu">\r
        <li>\r
          <a class="dropdown-item" href="javascript:void(0);" (click)="selectPermissionsByGuard('web')">\r
            <i class="isax isax-global me-2"></i>Web\r
          </a>\r
        </li>\r
        <li>\r
          <a class="dropdown-item" href="javascript:void(0);" (click)="selectPermissionsByGuard('api')">\r
                            <i class="isax isax-code me-2"></i>API\r
                        </a>\r
                        </li>\r
                    </ul>\r
                    </div>\r
                </div>\r
                </div>\r
\r
                <!-- Mise \xE0 jour de l'affichage du compteur -->\r
                <div class="mt-3 p-3 bg-light rounded">\r
                <div class="row align-items-center">\r
                    <div class="col-md-8">\r
                    <small class="text-muted">\r
                        <i class="isax isax-info-circle me-1"></i>\r
                        <strong>{{ getSelectedPermissionsCount() }}</strong> permission(s) s\xE9lectionn\xE9e(s) sur {{ allPermissions.length }}\r
                    </small>\r
                    </div>\r
                    <div class="col-md-4 text-end">\r
                    <div class="progress" style="height: 8px;">\r
                        <div \r
                        class="progress-bar" \r
                        [style.width.%]="(getSelectedPermissionsCount() / allPermissions.length) * 100"\r
                        [class]="getSelectedPermissionsCount() === 0 ? 'bg-warning' : \r
                                getSelectedPermissionsCount() === allPermissions.length ? 'bg-success' : 'bg-primary'">\r
                        </div>\r
                    </div>\r
                    <small class="text-muted">\r
                        {{ ((getSelectedPermissionsCount() / allPermissions.length) * 100).toFixed(0) }}%\r
                    </small>\r
                    </div>\r
                </div>\r
                </div>\r
\r
            <div *ngIf="allPermissions.length === 0" class="text-center py-4">\r
              <i class="isax isax-info-circle fs-48 text-muted mb-3 d-block"></i>\r
              <p class="text-muted mb-2">Aucune permission disponible</p>\r
              <small class="text-muted">Cr\xE9ez d'abord des permissions pour les assigner aux r\xF4les</small>\r
            </div>\r
\r
            <div *ngIf="allPermissions.length > 0" class="permissions-container">\r
              <div class="row" formArrayName="permissions">\r
                <div \r
                  class="col-md-6 col-lg-4 mb-2" \r
                  *ngFor="let permission of allPermissions; let i = index">\r
                  <div class="form-check">\r
                    <input \r
                      class="form-check-input" \r
                      type="checkbox" \r
                      [formControlName]="i"\r
                      [id]="'permission-' + permission.id">\r
                    <label \r
                      class="form-check-label d-block" \r
                      [for]="'permission-' + permission.id">\r
                      <strong>{{ permission.name }}</strong>\r
                      <small class="d-block text-muted">{{ permission.guard_name }}</small>\r
                    </label>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="mt-3 p-3 bg-light rounded">\r
                <small class="text-muted">\r
                  <i class="isax isax-info-circle me-1"></i>\r
                  {{ getSelectedPermissionsCount() }} permission(s) s\xE9lectionn\xE9e(s) sur {{ allPermissions.length }}\r
                </small>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="modal-footer">\r
          <button \r
            type="button" \r
            class="btn btn-light" \r
            (click)="closeModal()"\r
            [disabled]="loading">\r
            <i class="isax isax-close-circle me-2"></i>\r
            Annuler\r
          </button>\r
          <button \r
            type="submit" \r
            class="btn btn-primary"\r
            [disabled]="roleForm.invalid || loading">\r
            <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>\r
            <i *ngIf="!loading" class="isax" \r
               [class.isax-edit]="isEditing" \r
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
<div \r
  class="modal fade permissions-modal" \r
  [class.show]="showPermissionsModal" \r
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
        <button \r
          type="button" \r
          class="btn-close" \r
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
          <button \r
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
            <div \r
              class="col-md-6 col-lg-4" \r
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
        <button \r
          type="button" \r
          class="btn btn-light" \r
          (click)="closePermissionsModal()">\r
          <i class="isax isax-close-circle me-2"></i>\r
          Fermer\r
        </button>\r
        <button \r
          type="button" \r
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
<div \r
  class="modal-backdrop fade" \r
  [class.show]="showModal || showPermissionsModal"\r
  *ngIf="showModal || showPermissionsModal">\r
</div>`, styles: ["/* src/app/features/adminrh/adminrh-role/adminrh-role.component.scss */\n.page-content {\n  padding: 20px;\n}\n.table th {\n  font-weight: 600;\n  background-color: #f8f9fa;\n}\n.table tbody tr {\n  transition: all 0.3s ease;\n}\n.table tbody tr:hover {\n  background-color: #f8f9fa;\n}\n.modal.show {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.form-check {\n  padding: 8px 12px;\n  border-radius: 6px;\n  transition: background-color 0.2s;\n}\n.form-check:hover {\n  background-color: #f8f9fa;\n}\n.form-check .form-check-input:checked {\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.pagination .page-link {\n  border-radius: 6px;\n  margin: 0 2px;\n  border: 1px solid #dee2e6;\n  color: #6c757d;\n}\n.pagination .page-link:hover {\n  background-color: #f8f9fa;\n  border-color: #dee2e6;\n}\n.pagination .page-item.active .page-link {\n  background-color: #007bff;\n  border-color: #007bff;\n  color: white;\n}\n.pagination .page-item.disabled .page-link {\n  color: #6c757d;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n.modal.show {\n  display: block !important;\n}\n.modal .modal-dialog.modal-lg {\n  max-width: 900px;\n}\n.modal .modal-dialog.modal-dialog-scrollable {\n  height: calc(100vh - 2rem);\n}\n.modal .modal-dialog.modal-dialog-scrollable .modal-content {\n  height: 100%;\n  overflow: hidden;\n}\n.modal .modal-dialog.modal-dialog-scrollable .modal-content .modal-body {\n  overflow-y: auto;\n  max-height: calc(100vh - 200px);\n}\n.permissions-container {\n  max-height: 400px;\n  overflow-y: auto;\n  padding: 1rem;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  background-color: #f8f9fa;\n}\n.permissions-container .row {\n  margin: 0;\n}\n.permissions-container .row .col-md-6,\n.permissions-container .row .col-lg-4 {\n  padding: 0.25rem;\n}\n.permissions-container .form-check {\n  padding: 0.75rem;\n  margin: 0;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  background-color: white;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.permissions-container .form-check:hover {\n  border-color: #0d6efd;\n  background-color: #f0f7ff;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.permissions-container .form-check .form-check-input {\n  margin-top: 0.125rem;\n}\n.permissions-container .form-check .form-check-input:checked {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.permissions-container .form-check .form-check-label {\n  cursor: pointer;\n  margin-left: 0.5rem;\n}\n.permissions-container .form-check .form-check-label strong {\n  color: #212529;\n  font-size: 0.9rem;\n}\n.permissions-container .form-check .form-check-label small {\n  color: #6c757d;\n  font-size: 0.75rem;\n}\n.permissions-modal .modal-body {\n  padding: 1.5rem;\n}\n.permissions-modal .modal-body .card {\n  transition: all 0.2s ease;\n  border: 1px solid #e9ecef;\n}\n.permissions-modal .modal-body .card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-color: #0d6efd;\n}\n.permissions-modal .modal-body .card .card-body {\n  padding: 1rem;\n}\n.permissions-modal .modal-body .card .card-body .isax {\n  font-size: 1.25rem;\n}\n.permissions-modal .modal-body .card .card-body h6 {\n  margin-bottom: 0.25rem;\n  color: #212529;\n}\n.permissions-modal .modal-body .card .card-body small {\n  color: #6c757d;\n  font-size: 0.75rem;\n}\n.permissions-modal .bg-primary.bg-opacity-10 {\n  background-color: rgba(13, 110, 253, 0.1) !important;\n  border: 1px solid rgba(13, 110, 253, 0.2);\n}\n.permissions-counter .progress {\n  height: 8px;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.permissions-counter .progress .progress-bar {\n  transition: width 0.3s ease;\n}\n.permissions-controls .btn-group .btn {\n  font-size: 0.875rem;\n  padding: 0.375rem 0.75rem;\n}\n.permissions-controls .btn-group .btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.permissions-controls .dropdown-menu {\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  border: 1px solid #e9ecef;\n}\n.permissions-controls .dropdown-menu .dropdown-item {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n}\n.permissions-controls .dropdown-menu .dropdown-item:hover {\n  background-color: #f8f9fa;\n}\n.permissions-controls .dropdown-menu .dropdown-item .isax {\n  font-size: 1rem;\n}\n.permission-badge,\n.role-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.permission-badge .isax,\n.role-badge .isax {\n  font-size: 0.875rem;\n}\n@media (max-width: 768px) {\n  .modal-dialog {\n    margin: 0.5rem;\n  }\n  .modal-dialog.modal-lg {\n    max-width: calc(100vw - 1rem);\n  }\n  .modal-dialog.modal-dialog-scrollable {\n    height: calc(100vh - 1rem);\n  }\n  .permissions-container {\n    max-height: 300px;\n  }\n  .permissions-container .col-md-6,\n  .permissions-container .col-lg-4 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .permissions-controls .btn-group {\n    flex-direction: column;\n    width: 100%;\n  }\n  .permissions-controls .btn-group .btn {\n    border-radius: 0.375rem !important;\n    margin-bottom: 0.25rem;\n  }\n}\n@media (max-width: 576px) {\n  .modal-body {\n    padding: 1rem;\n  }\n  .permissions-container {\n    padding: 0.75rem;\n    max-height: 250px;\n  }\n  .form-check {\n    padding: 0.5rem !important;\n  }\n  .form-check .form-check-label strong {\n    font-size: 0.8rem;\n  }\n  .form-check .form-check-label small {\n    font-size: 0.7rem;\n  }\n}\n@keyframes slideIn {\n  from {\n    transform: translateY(-20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal.show .modal-dialog {\n  animation: slideIn 0.3s ease-out;\n}\n.modal-backdrop {\n  animation: fadeIn 0.3s ease-out;\n}\n.permission-selected .form-check {\n  background-color: #e7f3ff !important;\n  border-color: #0d6efd !important;\n}\n.permission-selected .form-check .form-check-label strong {\n  color: #0d6efd;\n}\n.no-permissions-state {\n  padding: 3rem 1rem;\n  text-align: center;\n}\n.no-permissions-state .isax {\n  opacity: 0.5;\n}\n.no-permissions-state h6 {\n  margin: 1rem 0 0.5rem;\n  color: #6c757d;\n}\n.no-permissions-state p {\n  color: #adb5bd;\n  font-size: 0.9rem;\n}\n.permissions-container,\n.modal-body {\n}\n.permissions-container::-webkit-scrollbar,\n.modal-body::-webkit-scrollbar {\n  width: 8px;\n}\n.permissions-container::-webkit-scrollbar-track,\n.modal-body::-webkit-scrollbar-track {\n  background: #f1f3f4;\n  border-radius: 4px;\n}\n.permissions-container::-webkit-scrollbar-thumb,\n.modal-body::-webkit-scrollbar-thumb {\n  background: #c1c8cd;\n  border-radius: 4px;\n}\n.permissions-container::-webkit-scrollbar-thumb:hover,\n.modal-body::-webkit-scrollbar-thumb:hover {\n  background: #a8b3ba;\n}\n.statistics-card {\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.statistics-card .card-body {\n  text-align: center;\n}\n.statistics-card .card-body h4 {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.statistics-card .card-body small {\n  opacity: 0.9;\n  font-size: 0.8rem;\n}\n.statistics-card .card-body .isax {\n  font-size: 2rem;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=adminrh-role.component.css.map */\n"] }]
  }], () => [{ type: RoleService }, { type: PermissionService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhRoleComponent, { className: "AdminrhRoleComponent", filePath: "src/app/features/adminrh/adminrh-role/adminrh-role.component.ts", lineNumber: 18 });
})();

export {
  AdminrhRoleComponent
};
//# sourceMappingURL=chunk-NETQHIBQ.js.map
