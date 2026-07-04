import {
  ParcoursService
} from "./chunk-DFE3I7YI.js";
import {
  httpErrorMessage
} from "./chunk-RL3SOXDI.js";
import {
  FormationService
} from "./chunk-MHGWTEI2.js";
import {
  HasPermissionDirective
} from "./chunk-VS3ZYZPZ.js";
import "./chunk-HPF6XDYM.js";
import "./chunk-GD4TWLVQ.js";
import "./chunk-K7E3GT3E.js";
import {
  DefaultValueAccessor,
  FormArray,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-IKOSZIEY.js";
import "./chunk-M6KR3YQW.js";
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵsanitizeUrl,
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
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-parcours/adminrh-parcours.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
function AdminrhParcoursComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 92);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openParcoursModal());
    });
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275text(2, "Nouveau parcours ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_button_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_button_46_Template_button_click_0_listener() {
      const n_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedNiveau = n_r4.value);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ac-chip--on", ctx_r1.selectedNiveau === n_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r4.label);
  }
}
function AdminrhParcoursComponent_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_button_54_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2, "Effacer ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 94);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_div_56_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.success = "");
    });
    \u0275\u0275element(4, "i", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.success, " ");
  }
}
function AdminrhParcoursComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275element(1, "i", 96);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 94);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_div_57_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error = "");
    });
    \u0275\u0275element(4, "i", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.error, " ");
  }
}
function AdminrhParcoursComponent_div_58_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 99);
  }
}
function AdminrhParcoursComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275template(1, AdminrhParcoursComponent_div_58_div_1_Template, 1, 0, "div", 98);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function AdminrhParcoursComponent_ng_container_59_div_1_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 124);
  }
  if (rf & 2) {
    const p_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", p_r9.image_url, \u0275\u0275sanitizeUrl)("alt", p_r9.nom);
  }
}
function AdminrhParcoursComponent_ng_container_59_div_1_div_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 3);
  }
}
function AdminrhParcoursComponent_ng_container_59_div_1_div_1_div_19_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 96);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFormationsObligatoires(p_r9.formations).length, " oblig. ");
  }
}
function AdminrhParcoursComponent_ng_container_59_div_1_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125)(1, "span");
    \u0275\u0275element(2, "i", 126);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminrhParcoursComponent_ng_container_59_div_1_div_1_div_19_span_4_Template, 3, 1, "span", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", p_r9.prix, " XOF");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFormationsObligatoires(p_r9.formations).length > 0);
  }
}
function AdminrhParcoursComponent_ng_container_59_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105)(1, "div", 106);
    \u0275\u0275template(2, AdminrhParcoursComponent_ng_container_59_div_1_div_1_img_2_Template, 1, 2, "img", 107)(3, AdminrhParcoursComponent_ng_container_59_div_1_div_1_i_3_Template, 1, 0, "i", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 109)(5, "div", 110);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 111);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 112)(10, "span");
    \u0275\u0275element(11, "i", 113);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275element(14, "i", 14);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275element(17, "i", 114);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, AdminrhParcoursComponent_ng_container_59_div_1_div_1_div_19_Template, 5, 2, "div", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 116)(21, "span", 117);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 118)(24, "button", 119);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_ng_container_59_div_1_div_1_Template_button_click_24_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewParcours(p_r9));
    });
    \u0275\u0275element(25, "i", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 121);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_ng_container_59_div_1_div_1_Template_button_click_26_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editParcours(p_r9));
    });
    \u0275\u0275element(27, "i", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 123);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_ng_container_59_div_1_div_1_Template_button_click_28_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.archiveParcours(p_r9));
    });
    \u0275\u0275element(29, "i", 87);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-th", p_r9.actif ? "blue" : "amber");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r9.image_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r9.image_url);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-cat", p_r9.niveau === "expert" ? "purple" : p_r9.niveau === "avance" ? "blue" : p_r9.niveau === "intermediaire" ? "teal" : "default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getNiveauLabel(p_r9.niveau), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r9.nom);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", p_r9.duree_estimee, "h");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", p_r9.formations.length, " formations");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", p_r9.users.length, " inscrits");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r9.prix && p_r9.prix !== "0");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-s", p_r9.actif ? "pub" : "draft");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r9.actif ? "Actif" : "Inactif", " ");
  }
}
function AdminrhParcoursComponent_ng_container_59_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275template(1, AdminrhParcoursComponent_ng_container_59_div_1_div_1_Template, 30, 12, "div", 104);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredParcours)("ngForTrackBy", ctx_r1.trackByParcoursId);
  }
}
function AdminrhParcoursComponent_ng_container_59_div_2_ng_container_4_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 131);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_ng_container_59_div_2_ng_container_4_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openParcoursModal());
    });
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275text(2, "Cr\xE9er un parcours ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_ng_container_59_div_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminrhParcoursComponent_ng_container_59_div_2_ng_container_4_button_1_Template, 3, 0, "button", 130);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parcours.length === 0);
  }
}
function AdminrhParcoursComponent_ng_container_59_div_2_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 132);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_ng_container_59_div_2_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275element(1, "i", 133);
    \u0275\u0275text(2, "Effacer les filtres ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_ng_container_59_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275element(1, "i", 3);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminrhParcoursComponent_ng_container_59_div_2_ng_container_4_Template, 2, 1, "ng-container", 128)(5, AdminrhParcoursComponent_ng_container_59_div_2_button_5_Template, 3, 0, "button", 129);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.parcours.length === 0 ? "Aucun parcours cr\xE9\xE9" : "Aucun r\xE9sultat pour ces filtres");
    \u0275\u0275advance();
    \u0275\u0275property("appHasPermission", "creer parcours");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parcours.length > 0);
  }
}
function AdminrhParcoursComponent_ng_container_59_div_3_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 141);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_ng_container_59_div_3_button_6_Template_button_click_0_listener() {
      const pg_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPageChange(pg_r14));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pg_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", pg_r14 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pg_r14);
  }
}
function AdminrhParcoursComponent_ng_container_59_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 134)(1, "span", 135);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 136)(4, "button", 137);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_ng_container_59_div_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 138);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminrhParcoursComponent_ng_container_59_div_3_button_6_Template, 2, 3, "button", 139);
    \u0275\u0275elementStart(7, "button", 137);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_ng_container_59_div_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 140);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", ctx_r1.getPaginationStart(), "\u2013", ctx_r1.getPaginationEnd(), " sur ", ctx_r1.totalItems, " parcours");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function AdminrhParcoursComponent_ng_container_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminrhParcoursComponent_ng_container_59_div_1_Template, 2, 2, "div", 100)(2, AdminrhParcoursComponent_ng_container_59_div_2_Template, 6, 3, "div", 101)(3, AdminrhParcoursComponent_ng_container_59_div_3_Template, 9, 6, "div", 102);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredParcours.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredParcours.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
function AdminrhParcoursComponent_span_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 142);
    \u0275\u0275text(1, " Nom requis (min. 3 caract\xE8res) ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_span_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 142);
    \u0275\u0275text(1, " Description requise (min. 10 caract\xE8res) ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_option_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 143);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r15 = ctx.$implicit;
    \u0275\u0275property("value", n_r15.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r15.label);
  }
}
function AdminrhParcoursComponent_div_129_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144)(1, "span", 145);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 146);
    \u0275\u0275elementStart(4, "button", 147);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_div_129_Template_button_click_4_listener() {
      const i_r17 = \u0275\u0275restoreView(_r16).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeObjectif(i_r17));
    });
    \u0275\u0275element(5, "i", 148);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r17 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r17);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", i_r17 + 1, ".");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.objectifsLength === 1);
  }
}
function AdminrhParcoursComponent_div_138_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144)(1, "span", 145);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 149);
    \u0275\u0275elementStart(4, "button", 147);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_div_138_Template_button_click_4_listener() {
      const i_r19 = \u0275\u0275restoreView(_r18).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removePrerequis(i_r19));
    });
    \u0275\u0275element(5, "i", 148);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r19 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r19);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", i_r19 + 1, ".");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.prerequisLength === 1);
  }
}
function AdminrhParcoursComponent_span_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 150);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("(", ctx_r1.selectedFormations.length, " s\xE9lectionn\xE9e", ctx_r1.selectedFormations.length > 1 ? "s" : "", ")");
  }
}
function AdminrhParcoursComponent_div_143_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 153);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 154);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_div_143_span_1_Template_button_click_2_listener() {
      const f_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeSelectedFormation(f_r21.id));
    });
    \u0275\u0275element(3, "i", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r21 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r21.titre, " ");
  }
}
function AdminrhParcoursComponent_div_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 151);
    \u0275\u0275template(1, AdminrhParcoursComponent_div_143_span_1_Template, 4, 1, "span", 152);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.selectedFormations);
  }
}
function AdminrhParcoursComponent_div_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_div_150_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 162);
  }
}
function AdminrhParcoursComponent_div_150_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", f_r23.niveau);
  }
}
function AdminrhParcoursComponent_div_150_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 156);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_div_150_Template_div_click_0_listener() {
      const f_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFormation(f_r23.id));
    });
    \u0275\u0275elementStart(1, "div", 157);
    \u0275\u0275template(2, AdminrhParcoursComponent_div_150_i_2_Template, 1, 0, "i", 158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 159)(4, "div", 160);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 161);
    \u0275\u0275text(7);
    \u0275\u0275template(8, AdminrhParcoursComponent_div_150_span_8_Template, 2, 1, "span", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r23 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("checked", ctx_r1.isFormationSelected(f_r23.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r1.isFormationSelected(f_r23.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFormationSelected(f_r23.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r23.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", (f_r23.categorie == null ? null : f_r23.categorie.nom) || f_r23.type || "\u2014", "", f_r23.duree_totale ? " \xB7 " + f_r23.duree_totale + "h" : "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r23.niveau);
  }
}
function AdminrhParcoursComponent_div_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275text(1, " Aucune formation disponible ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_div_154_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 163);
    \u0275\u0275element(1, "i", 96);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.error, " ");
  }
}
function AdminrhParcoursComponent_span_161_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 164);
  }
}
function AdminrhParcoursComponent_ng_container_166_div_61_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275element(1, "i", 177);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obj_r25 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", obj_r25, " ");
  }
}
function AdminrhParcoursComponent_ng_container_166_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "label", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 174);
    \u0275\u0275template(4, AdminrhParcoursComponent_ng_container_166_div_61_div_4_Template, 3, 1, "div", 175);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Objectifs (", ctx_r1.selectedParcours.objectifs.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.selectedParcours.objectifs);
  }
}
function AdminrhParcoursComponent_ng_container_166_div_62_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275element(1, "i", 178);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pre_r26 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", pre_r26, " ");
  }
}
function AdminrhParcoursComponent_ng_container_166_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "label", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 174);
    \u0275\u0275template(4, AdminrhParcoursComponent_ng_container_166_div_62_div_4_Template, 3, 1, "div", 175);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Pr\xE9requis (", ctx_r1.selectedParcours.prerequis.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.selectedParcours.prerequis);
  }
}
function AdminrhParcoursComponent_ng_container_166_div_63_div_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 188);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_ng_container_166_div_63_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 182)(1, "div", 183)(2, "div", 184);
    \u0275\u0275text(3);
    \u0275\u0275template(4, AdminrhParcoursComponent_ng_container_166_div_63_div_4_span_4_Template, 2, 0, "span", 185);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 186);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 112)(8, "span");
    \u0275\u0275element(9, "i", 113);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 187);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const f_r27 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (f_r27.pivot == null ? null : f_r27.pivot.ordre) ? "\xC9tape " + (f_r27.pivot == null ? null : f_r27.pivot.ordre) : "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r27.pivot == null ? null : f_r27.pivot.obligatoire);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r27.titre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", f_r27.duree_totale, "h");
    \u0275\u0275advance();
    \u0275\u0275attribute("data-s", f_r27.est_publie ? "pub" : "draft");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r27.est_publie ? "Publi\xE9" : "Brouillon", " ");
  }
}
function AdminrhParcoursComponent_ng_container_166_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 179);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 180);
    \u0275\u0275template(4, AdminrhParcoursComponent_ng_container_166_div_63_div_4_Template, 13, 6, "div", 181);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Formations du parcours (", ctx_r1.selectedParcours.formations.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.selectedParcours.formations)("ngForTrackBy", ctx_r1.trackByFormationId);
  }
}
function AdminrhParcoursComponent_ng_container_166_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 31)(2, "div", 165);
    \u0275\u0275element(3, "i", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33)(5, "div", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35);
    \u0275\u0275text(8, "D\xE9tails du parcours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 36);
    \u0275\u0275element(10, "i", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 38)(12, "div", 166)(13, "div", 167);
    \u0275\u0275text(14, "Informations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 168)(16, "span", 169);
    \u0275\u0275text(17, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 170);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 168)(21, "span", 169);
    \u0275\u0275text(22, "Dur\xE9e estim\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 170);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 168)(26, "span", 169);
    \u0275\u0275text(27, "Dur\xE9e totale formations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 170);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 168)(31, "span", 169);
    \u0275\u0275text(32, "Co\xFBt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 170);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 168)(36, "span", 169);
    \u0275\u0275text(37, "Formations incluses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 170);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 168)(41, "span", 169);
    \u0275\u0275text(42, "Inscrits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 170);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 168)(46, "span", 169);
    \u0275\u0275text(47, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 170)(49, "span", 117);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 168)(52, "span", 169);
    \u0275\u0275text(53, "Cr\xE9\xE9 le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 170);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 39)(57, "label", 40);
    \u0275\u0275text(58, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 171);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(61, AdminrhParcoursComponent_ng_container_166_div_61_Template, 5, 2, "div", 172)(62, AdminrhParcoursComponent_ng_container_166_div_62_Template, 5, 2, "div", 172)(63, AdminrhParcoursComponent_ng_container_166_div_63_Template, 5, 3, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 77)(65, "button", 79);
    \u0275\u0275text(66, "Fermer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "button", 173);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_ng_container_166_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editParcours(ctx_r1.selectedParcours));
    });
    \u0275\u0275element(68, "i", 122);
    \u0275\u0275text(69, "Modifier ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedParcours.nom);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.getNiveauLabel(ctx_r1.selectedParcours.niveau));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedParcours.duree_estimee, "h");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.getTotalDuration(ctx_r1.selectedParcours.formations), "h");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedParcours.prix, " XOF");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedParcours.formations.length, " (", ctx_r1.getFormationsObligatoires(ctx_r1.selectedParcours.formations).length, " oblig.)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedParcours.users.length);
    \u0275\u0275advance(5);
    \u0275\u0275attribute("data-s", ctx_r1.selectedParcours.actif ? "pub" : "draft");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedParcours.actif ? "Actif" : "Inactif", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedParcours.created_at));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedParcours.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParcours.objectifs.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParcours.prerequis.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParcours.formations.length > 0);
  }
}
function AdminrhParcoursComponent_div_176_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedParcours.nom);
  }
}
var AdminrhParcoursComponent = class _AdminrhParcoursComponent {
  parcoursService;
  formationService;
  formBuilder;
  // État général
  loading = false;
  saving = false;
  error = "";
  success = "";
  // Données
  parcours = [];
  selectedParcours = null;
  formations = [];
  loadingFormations = false;
  // Multi-select formations pour le modal création/édition
  formationsSearchTerm = "";
  selectedFormationIds = /* @__PURE__ */ new Set();
  // Pagination
  currentPage = 1;
  totalPages = 1;
  totalItems = 0;
  itemsPerPage = 15;
  // Formulaires
  parcoursForm;
  editMode = false;
  // Filtres et recherche
  searchTerm = "";
  selectedNiveau = "";
  selectedStatut = "";
  // Niveaux disponibles
  niveaux = [
    { value: "debutant", label: "D\xE9butant" },
    { value: "intermediaire", label: "Interm\xE9diaire" },
    { value: "avance", label: "Avanc\xE9" },
    { value: "expert", label: "Expert" }
  ];
  constructor(parcoursService, formationService, formBuilder) {
    this.parcoursService = parcoursService;
    this.formationService = formationService;
    this.formBuilder = formBuilder;
    this.parcoursForm = this.formBuilder.group({
      nom: ["", [Validators.required, Validators.minLength(3)]],
      description: ["", [Validators.required, Validators.minLength(10)]],
      niveau: ["debutant", Validators.required],
      duree_estimee: [0, [Validators.required, Validators.min(1)]],
      prix: ["0", [Validators.required, Validators.min(0)]],
      actif: [true],
      image_url: [""],
      objectifs: this.formBuilder.array([this.createObjectifControl()]),
      prerequis: this.formBuilder.array([this.createPrerequisControl()])
    });
  }
  Math = Math;
  ngOnInit() {
    this.loadParcours();
    this.loadFormations();
  }
  // ==================== FORM ARRAYS ====================
  createObjectifControl() {
    return this.formBuilder.group({
      value: ["", Validators.required]
    });
  }
  createPrerequisControl() {
    return this.formBuilder.group({
      value: ["", Validators.required]
    });
  }
  get objectifs() {
    return this.parcoursForm.get("objectifs");
  }
  get prerequis() {
    return this.parcoursForm.get("prerequis");
  }
  // Ajout de getters pour les lengths
  get objectifsLength() {
    return this.objectifs.length;
  }
  get prerequisLength() {
    return this.prerequis.length;
  }
  addObjectif() {
    this.objectifs.push(this.createObjectifControl());
  }
  removeObjectif(index) {
    if (this.objectifs.length > 1) {
      this.objectifs.removeAt(index);
    }
  }
  addPrerequis() {
    this.prerequis.push(this.createPrerequisControl());
  }
  removePrerequis(index) {
    if (this.prerequis.length > 1) {
      this.prerequis.removeAt(index);
    }
  }
  // ==================== CHARGEMENT DES DONNÉES ====================
  loadParcours() {
    this.loading = true;
    this.error = "";
    this.parcoursService.getRhParcours().subscribe({
      next: (response) => {
        this.loading = false;
        this.parcours = response.parcours || [];
        this.totalItems = this.parcours.length;
        this.totalPages = 1;
        console.log(`${this.parcours.length} parcours charg\xE9s`);
      },
      error: (err) => {
        this.loading = false;
        console.error("Erreur chargement parcours:", err);
        this.error = httpErrorMessage(err, "Impossible de charger les parcours.");
        this.parcours = [];
      }
    });
  }
  loadFormations() {
    this.loadingFormations = true;
    this.formationService.getFormationsrh().subscribe({
      next: (response) => {
        this.loadingFormations = false;
        if (response?.status) {
          this.formations = response.formations || response.data || [];
          console.log(`${this.formations.length} formations charg\xE9es`);
        } else {
          this.formations = [];
        }
      },
      error: (err) => {
        this.loadingFormations = false;
        console.error("Erreur chargement formations:", err);
        this.formations = [];
      }
    });
  }
  // ==================== GESTION DU FORMULAIRE ====================
  openParcoursModal() {
    this.editMode = false;
    this.selectedParcours = null;
    this.selectedFormationIds = /* @__PURE__ */ new Set();
    this.formationsSearchTerm = "";
    this.resetForm();
    const modal = new bootstrap.Modal(document.getElementById("parcoursModal"));
    modal.show();
  }
  editParcours(parcours) {
    this.editMode = true;
    this.selectedParcours = parcours;
    this.selectedFormationIds = new Set(parcours.formations.map((f) => f.id));
    this.formationsSearchTerm = "";
    this.clearFormArray(this.objectifs);
    this.clearFormArray(this.prerequis);
    parcours.objectifs.forEach((objectif) => {
      this.objectifs.push(this.formBuilder.group({
        value: [objectif, Validators.required]
      }));
    });
    parcours.prerequis.forEach((prerequis) => {
      this.prerequis.push(this.formBuilder.group({
        value: [prerequis, Validators.required]
      }));
    });
    this.parcoursForm.patchValue({
      nom: parcours.nom,
      description: parcours.description,
      niveau: parcours.niveau,
      duree_estimee: parcours.duree_estimee,
      prix: parcours.prix,
      actif: parcours.actif,
      image_url: parcours.image_url || ""
    });
    const modal = new bootstrap.Modal(document.getElementById("parcoursModal"));
    modal.show();
  }
  onSubmit() {
    if (this.parcoursForm.invalid) {
      this.markFormGroupTouched();
      return;
    }
    if (this.saving)
      return;
    this.saving = true;
    this.error = "";
    const formData = this.buildParcoursData();
    console.log("Donn\xE9es envoy\xE9es:", formData);
    const operation = this.editMode && this.selectedParcours ? this.parcoursService.updateParcours(this.selectedParcours.id, formData) : this.parcoursService.createParcours(formData);
    operation.subscribe({
      next: (response) => {
        this.saving = false;
        if (response.status !== false) {
          this.success = this.editMode ? "Parcours modifi\xE9 avec succ\xE8s!" : "Parcours cr\xE9\xE9 avec succ\xE8s!";
          this.closeModal("parcoursModal");
          this.loadParcours();
          setTimeout(() => this.success = "", 5e3);
        } else {
          this.error = response.message || "Erreur lors de la sauvegarde.";
        }
      },
      error: (err) => {
        this.saving = false;
        console.error("Erreur compl\xE8te:", err);
        console.error("D\xE9tails validation:", err.error);
        console.error("Donn\xE9es envoy\xE9es:", formData);
        if (err.error && err.error.errors) {
          const validationErrors = err.error.errors;
          console.error("Erreurs de validation:", validationErrors);
          const errorMessages = Object.entries(validationErrors).map(([field, messages]) => `${field}: ${Array.isArray(messages) ? messages.join(", ") : messages}`).join("\n");
          this.error = `Erreurs de validation:
${errorMessages}`;
        } else {
          this.error = err.error?.message || "Erreur lors de la sauvegarde.";
        }
      }
    });
  }
  buildParcoursData() {
    const formValue = this.parcoursForm.value;
    const entrepriseId = this.parcoursService.getCurrentUserEntrepriseId();
    console.log("Entreprise ID utilis\xE9 pour cr\xE9ation:", entrepriseId);
    return {
      nom: formValue.nom.trim(),
      description: formValue.description.trim(),
      niveau: formValue.niveau,
      duree_estimee: parseInt(formValue.duree_estimee),
      prix: parseFloat(formValue.prix).toFixed(2),
      // ou parseFloat(formValue.prix) selon le backend
      actif: Boolean(formValue.actif),
      objectifs: formValue.objectifs.map((obj) => obj.value.trim()).filter((v) => v),
      prerequis: formValue.prerequis.map((pre) => pre.value.trim()).filter((v) => v),
      statut: Boolean(formValue.actif),
      entreprise_id: entrepriseId,
      image_url: formValue.image_url?.trim() || void 0,
      formation_ids: Array.from(this.selectedFormationIds)
    };
  }
  // ==================== ACTIONS ====================
  viewParcours(parcours) {
    this.selectedParcours = parcours;
    const modal = new bootstrap.Modal(document.getElementById("viewModal"));
    modal.show();
  }
  confirmDelete(parcours) {
    this.selectedParcours = parcours;
    const modal = new bootstrap.Modal(document.getElementById("deleteModal"));
    modal.show();
  }
  deleteParcours() {
    if (!this.selectedParcours)
      return;
    this.parcoursService.deleteParcours(this.selectedParcours.id).subscribe({
      next: (response) => {
        if (response.status !== false) {
          this.success = "Parcours supprim\xE9 avec succ\xE8s!";
          this.closeModal("deleteModal");
          this.loadParcours();
          setTimeout(() => this.success = "", 5e3);
        } else {
          this.error = response.message || "Erreur lors de la suppression.";
        }
      },
      error: (err) => {
        console.error("Erreur suppression:", err);
        this.error = err.error?.message || "Erreur lors de la suppression.";
      }
    });
  }
  archiveParcours(parcours) {
    if (!parcours)
      return;
    if (!confirm(`Archiver le parcours "${parcours.nom}" ?`))
      return;
    this.parcoursService.deleteParcours(parcours.id).subscribe({
      next: () => {
        this.success = "Parcours archiv\xE9.";
        this.loadParcours();
        setTimeout(() => this.success = "", 4e3);
      },
      error: (err) => {
        this.error = err.error?.message || "Erreur lors de l'archivage.";
      }
    });
  }
  // ==================== PAGINATION ====================
  onPageChange(page) {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.loadParcours();
    }
  }
  get pages() {
    const pages = [];
    const start = Math.max(1, this.currentPage - 2);
    const end = Math.min(this.totalPages, this.currentPage + 2);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  getParcoursActifs() {
    return this.parcours.filter((p) => p.actif).length;
  }
  getParcoursInactifs() {
    return this.parcours.filter((p) => !p.actif).length;
  }
  // Méthode pour calculer l'affichage de pagination
  getPaginationStart() {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }
  getPaginationEnd() {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }
  // ==================== UTILITAIRES ====================
  resetForm() {
    this.clearFormArray(this.objectifs);
    this.clearFormArray(this.prerequis);
    this.objectifs.push(this.createObjectifControl());
    this.prerequis.push(this.createPrerequisControl());
    this.parcoursForm.reset({
      nom: "",
      description: "",
      niveau: "debutant",
      duree_estimee: 0,
      prix: "0",
      actif: true,
      image_url: ""
    });
  }
  clearFormArray(formArray) {
    while (formArray.length !== 0) {
      formArray.removeAt(0);
    }
  }
  markFormGroupTouched() {
    Object.keys(this.parcoursForm.controls).forEach((key) => {
      const control = this.parcoursForm.get(key);
      control?.markAsTouched();
      if (control instanceof FormArray) {
        control.controls.forEach((innerControl) => {
          Object.keys(innerControl.controls).forEach((innerKey) => {
            innerControl.get(innerKey)?.markAsTouched();
          });
        });
      }
    });
  }
  // ==================== MULTI-SELECT FORMATIONS ====================
  get filteredFormationsPool() {
    const term = this.formationsSearchTerm.toLowerCase();
    return term ? this.formations.filter((f) => f.titre?.toLowerCase().includes(term) || f.categorie?.nom?.toLowerCase().includes(term)) : this.formations;
  }
  isFormationSelected(id) {
    return this.selectedFormationIds.has(id);
  }
  toggleFormation(id) {
    if (this.selectedFormationIds.has(id)) {
      this.selectedFormationIds.delete(id);
    } else {
      this.selectedFormationIds.add(id);
    }
  }
  removeSelectedFormation(id) {
    this.selectedFormationIds.delete(id);
  }
  get selectedFormations() {
    return this.formations.filter((f) => this.selectedFormationIds.has(f.id));
  }
  get selectedFormationCount() {
    return this.selectedFormationIds.size;
  }
  closeModal(modalId) {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }
  }
  // ==================== FILTRES ====================
  get filteredParcours() {
    return this.parcours.filter((parcours) => {
      const matchesSearch = !this.searchTerm || parcours.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) || parcours.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesNiveau = !this.selectedNiveau || parcours.niveau === this.selectedNiveau;
      const matchesStatut = !this.selectedStatut || this.selectedStatut === "actif" && parcours.actif || this.selectedStatut === "inactif" && !parcours.actif;
      return matchesSearch && matchesNiveau && matchesStatut;
    });
  }
  clearFilters() {
    this.searchTerm = "";
    this.selectedNiveau = "";
    this.selectedStatut = "";
  }
  // ==================== HELPERS ====================
  getNiveauLabel(niveau) {
    const niveauObj = this.niveaux.find((n) => n.value === niveau);
    return niveauObj ? niveauObj.label : niveau;
  }
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  getTotalDuration(formations) {
    return formations.reduce((total, formation) => total + formation.duree_totale, 0);
  }
  getTotalPrice(formations) {
    return formations.reduce((total, formation) => total + parseFloat(formation.prix || "0"), 0);
  }
  getFormationsObligatoires(formations) {
    return formations.filter((f) => f.pivot?.obligatoire);
  }
  // Fonctions de tracking pour optimiser le rendu
  trackByParcoursId(_index, parcours) {
    return parcours.id;
  }
  trackByFormationId(_index, formation) {
    return formation.id;
  }
  static \u0275fac = function AdminrhParcoursComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhParcoursComponent)(\u0275\u0275directiveInject(ParcoursService), \u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhParcoursComponent, selectors: [["app-adminrh-parcours"]], decls: 191, vars: 44, consts: [[1, "ac-shell"], [1, "ac-topbar"], [1, "ac-tab", "active"], [1, "isax", "isax-route-square"], [1, "ac-spacer"], ["type", "button", "class", "ac-add-btn", 3, "click", 4, "appHasPermission"], [1, "ac-kpi-row"], [1, "ac-kpi"], [1, "ac-kpi__label"], [1, "ac-kpi__val"], [1, "ac-kpi__delta", "neutral"], [1, "isax", "isax-tick-circle"], [1, "ac-kpi__delta", "up"], [1, "isax", "isax-close-circle"], [1, "isax", "isax-book-1"], [1, "ac-toolbar"], [1, "ac-search"], [1, "isax", "isax-search-normal-1", "ac-search__icon"], ["type", "search", "placeholder", "Rechercher un parcours\u2026", 1, "ac-search__input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "ac-chip", 3, "click"], ["type", "button", "class", "ac-chip", 3, "ac-chip--on", "click", 4, "ngFor", "ngForOf"], [1, "ac-view-group", 2, "margin-left", "8px"], ["type", "button", 1, "ac-view-toggle", 3, "click"], ["type", "button", "class", "ac-chip", 3, "click", 4, "ngIf"], ["class", "ac-alert", "style", "color:#27500a;background:#eaf3de;border-color:#97c459;", 4, "ngIf"], ["class", "ac-alert", 4, "ngIf"], ["class", "ac-skeletons", 4, "ngIf"], [4, "ngIf"], ["id", "parcoursModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", 2, "max-width", "640px"], [1, "wz-modal", "modal-content"], [1, "wz-head"], [1, "wz-head__icon"], [1, "wz-head__text"], [1, "wz-head__title"], [1, "wz-head__sub"], ["type", "button", "data-bs-dismiss", "modal", 1, "wz-close"], [2, "display", "flex", "flex-direction", "column", "flex", "1", "min-height", "0", "overflow", "hidden", 3, "ngSubmit", "formGroup"], [1, "wz-body"], [1, "wz-field"], [1, "wz-label"], [1, "wz-req"], ["type", "text", "formControlName", "nom", "placeholder", "Ex: D\xE9veloppement Web Full Stack", 1, "wz-input"], ["class", "wz-hint", 4, "ngIf"], ["formControlName", "description", "placeholder", "Description d\xE9taill\xE9e du parcours", 1, "wz-input", "wz-textarea"], [1, "wz-row"], [1, "wz-field", 2, "margin-bottom", "0"], ["title", "Niveau du parcours", "formControlName", "niveau", 1, "wz-input"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "formControlName", "duree_estimee", "min", "1", 1, "wz-input"], [1, "wz-row", 2, "margin-top", "12px"], ["type", "number", "formControlName", "prix", "min", "0", "step", "0.01", 1, "wz-input"], ["type", "url", "formControlName", "image_url", "placeholder", "https://\u2026", 1, "wz-input"], [1, "wz-toggle-row", 2, "margin-top", "12px"], [1, "wz-toggle-title"], [1, "wz-toggle-sub"], [1, "wz-toggle", 3, "click"], [2, "margin-top", "18px"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "margin-bottom", "8px"], ["type", "button", 1, "ac-add-btn", 2, "padding", "4px 10px", "font-size", "11px", 3, "click"], [1, "isax", "isax-add"], ["formArrayName", "objectifs"], ["style", "display:flex;align-items:center;gap:6px;margin-bottom:6px;", 3, "formGroupName", 4, "ngFor", "ngForOf"], [2, "margin-top", "12px"], ["formArrayName", "prerequis"], [1, "wz-label", 2, "margin-bottom", "8px"], ["style", "font-weight:400;color:#185fa5;margin-left:4px;", 4, "ngIf"], ["class", "cw-pool-chips", 4, "ngIf"], [1, "cw-pool"], [1, "cw-pool__search"], [1, "isax", "isax-search-normal-1"], ["type", "search", "placeholder", "Rechercher une formation\u2026", 3, "ngModelChange", "ngModel"], [1, "cw-pool__list", 2, "max-height", "200px"], ["class", "cw-pool__empty", 4, "ngIf"], ["class", "cw-pool__item", 3, "checked", "click", 4, "ngFor", "ngForOf"], [2, "font-size", "11px", "color", "#9ca3af"], ["class", "wz-error", 4, "ngIf"], [1, "wz-foot"], [1, "wz-foot__info"], ["type", "button", "data-bs-dismiss", "modal", 1, "wz-btn-ghost"], ["type", "submit", 1, "wz-btn-primary", 3, "disabled"], ["class", "wz-spinner", 4, "ngIf"], ["id", "viewModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-scrollable", 2, "max-width", "680px"], ["id", "deleteModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", 2, "max-width", "420px"], [1, "wz-head__icon", 2, "background", "#FAEEDA", "color", "#BA7517"], [1, "isax", "isax-archive"], ["class", "wz-head__sub", 4, "ngIf"], [1, "wz-info-banner", 2, "background", "#fef2f2", "border-color", "#fca5a5", "color", "#7f1d1d"], [1, "isax", "isax-warning-2", 2, "color", "#dc2626"], ["type", "button", 1, "wz-btn-arch", 3, "click"], ["type", "button", 1, "ac-add-btn", 3, "click"], [1, "ac-alert", 2, "color", "#27500a", "background", "#eaf3de", "border-color", "#97c459"], ["type", "button", 1, "ac-alert-close", 3, "click"], [1, "ac-alert"], [1, "isax", "isax-warning-2"], [1, "ac-skeletons"], ["class", "ac-skeleton-card", 4, "ngFor", "ngForOf"], [1, "ac-skeleton-card"], ["class", "ac-card-grid", 4, "ngIf"], ["class", "ac-empty ac-empty--span", 4, "ngIf"], ["class", "ac-pager", 4, "ngIf"], [1, "ac-card-grid"], ["class", "ac-fcard", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ac-fcard"], [1, "ac-fcard__thumb"], ["class", "ac-fcard__img", 3, "src", "alt", 4, "ngIf"], ["class", "isax isax-route-square", 4, "ngIf"], [1, "ac-fcard__body"], [1, "ac-fcard__cat"], [1, "ac-fcard__title"], [1, "ac-fcard__meta"], [1, "isax", "isax-clock"], [1, "isax", "isax-people"], ["class", "ac-fcard__meta", "style", "margin-top:3px;", 4, "ngIf"], [1, "ac-fcard__footer"], [1, "ac-status"], [1, "ac-fcard__actions", 2, "margin-left", "auto"], ["type", "button", "title", "Voir", 1, "ac-act", 3, "click"], [1, "isax", "isax-eye"], ["type", "button", "title", "Modifier", 1, "ac-act", 3, "click"], [1, "isax", "isax-edit-2"], ["type", "button", "title", "Archiver", 1, "ac-act", "ac-act--arch", 3, "click"], [1, "ac-fcard__img", 3, "src", "alt"], [1, "ac-fcard__meta", 2, "margin-top", "3px"], [1, "isax", "isax-wallet"], [1, "ac-empty", "ac-empty--span"], [4, "appHasPermission"], ["type", "button", "class", "ac-chip", "style", "margin-top:10px;", 3, "click", 4, "ngIf"], ["type", "button", "class", "ac-add-btn", "style", "margin-top:10px;", 3, "click", 4, "ngIf"], ["type", "button", 1, "ac-add-btn", 2, "margin-top", "10px", 3, "click"], ["type", "button", 1, "ac-chip", 2, "margin-top", "10px", 3, "click"], [1, "isax", "isax-refresh"], [1, "ac-pager"], [1, "ac-pager__info"], [1, "ac-pager__btns"], ["type", "button", 1, "ac-pager__btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-3"], ["type", "button", "class", "ac-pager__btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-3"], ["type", "button", 1, "ac-pager__btn", 3, "click"], [1, "wz-hint"], [3, "value"], [2, "display", "flex", "align-items", "center", "gap", "6px", "margin-bottom", "6px", 3, "formGroupName"], [2, "font-size", "12px", "color", "#9ca3af", "min-width", "20px", "text-align", "right"], ["type", "text", "formControlName", "value", "placeholder", "D\xE9crivez un objectif\u2026", 1, "wz-input", 2, "flex", "1"], ["type", "button", 1, "ac-act", "ac-act--del", 3, "click", "disabled"], [1, "isax", "isax-trash"], ["type", "text", "formControlName", "value", "placeholder", "D\xE9crivez un pr\xE9requis\u2026", 1, "wz-input", 2, "flex", "1"], [2, "font-weight", "400", "color", "#185fa5", "margin-left", "4px"], [1, "cw-pool-chips"], ["class", "cw-pool-chip", 4, "ngFor", "ngForOf"], [1, "cw-pool-chip"], ["type", "button", 3, "click"], [1, "cw-pool__empty"], [1, "cw-pool__item", 3, "click"], [1, "cw-pool__check"], ["class", "isax isax-tick", 4, "ngIf"], [1, "cw-pool__info"], [1, "cw-pool__name"], [1, "cw-pool__meta"], [1, "isax", "isax-tick"], [1, "wz-error"], [1, "wz-spinner"], [1, "wz-head__icon", 2, "background", "#e1f5ee", "color", "#0f6e56"], [1, "wz-recap-card"], [1, "wz-recap-title"], [1, "wz-recap-row"], [1, "wz-rl"], [1, "wz-rv"], [1, "wz-desc-box"], ["class", "wz-field", 4, "ngIf"], ["type", "button", "data-bs-dismiss", "modal", 1, "wz-btn-primary", 3, "click"], [1, "wz-list"], ["class", "wz-list-item", 4, "ngFor", "ngForOf"], [1, "wz-list-item"], [1, "isax", "isax-tick-circle", 2, "color", "#0f6e56"], [1, "isax", "isax-info-circle", 2, "color", "#185fa5"], [1, "wz-section-label"], [1, "ac-card-grid", 2, "grid-template-columns", "repeat(auto-fill,minmax(200px,1fr))", "gap", "8px"], ["class", "ac-fcard", "style", "min-height:auto;", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ac-fcard", 2, "min-height", "auto"], [1, "ac-fcard__body", 2, "padding", "10px 12px"], ["data-cat", "default", 1, "ac-fcard__cat"], ["style", "margin-left:4px;color:#e78a0e;", 4, "ngIf"], [1, "ac-fcard__title", 2, "font-size", "12px"], [1, "ac-status", 2, "font-size", "9px"], [2, "margin-left", "4px", "color", "#e78a0e"]], template: function AdminrhParcoursComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "span", 4);
      \u0275\u0275template(6, AdminrhParcoursComponent_button_6_Template, 3, 0, "button", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8);
      \u0275\u0275element(10, "i", 3);
      \u0275\u0275text(11, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 9);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 10);
      \u0275\u0275text(15, "parcours");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8);
      \u0275\u0275element(18, "i", 11);
      \u0275\u0275text(19, "Actifs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 9);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 12);
      \u0275\u0275text(23, "en cours");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 7)(25, "div", 8);
      \u0275\u0275element(26, "i", 13);
      \u0275\u0275text(27, "Inactifs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 9);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 10);
      \u0275\u0275text(31, "d\xE9sactiv\xE9s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 7)(33, "div", 8);
      \u0275\u0275element(34, "i", 14);
      \u0275\u0275text(35, "Formations dispo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 9);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 10);
      \u0275\u0275text(39, "catalogu\xE9es");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 15)(41, "div", 16);
      \u0275\u0275element(42, "i", 17);
      \u0275\u0275elementStart(43, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhParcoursComponent_Template_input_ngModelChange_43_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "button", 19);
      \u0275\u0275listener("click", function AdminrhParcoursComponent_Template_button_click_44_listener() {
        return ctx.selectedNiveau = "";
      });
      \u0275\u0275text(45, "Tous niveaux");
      \u0275\u0275elementEnd();
      \u0275\u0275template(46, AdminrhParcoursComponent_button_46_Template, 2, 3, "button", 20);
      \u0275\u0275elementStart(47, "div", 21)(48, "button", 22);
      \u0275\u0275listener("click", function AdminrhParcoursComponent_Template_button_click_48_listener() {
        return ctx.selectedStatut = "";
      });
      \u0275\u0275text(49, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "button", 22);
      \u0275\u0275listener("click", function AdminrhParcoursComponent_Template_button_click_50_listener() {
        return ctx.selectedStatut = "actif";
      });
      \u0275\u0275text(51, "Actifs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "button", 22);
      \u0275\u0275listener("click", function AdminrhParcoursComponent_Template_button_click_52_listener() {
        return ctx.selectedStatut = "inactif";
      });
      \u0275\u0275text(53, "Inactifs");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(54, AdminrhParcoursComponent_button_54_Template, 3, 0, "button", 23);
      \u0275\u0275element(55, "span", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(56, AdminrhParcoursComponent_div_56_Template, 5, 1, "div", 24)(57, AdminrhParcoursComponent_div_57_Template, 5, 1, "div", 25)(58, AdminrhParcoursComponent_div_58_Template, 2, 2, "div", 26)(59, AdminrhParcoursComponent_ng_container_59_Template, 4, 3, "ng-container", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 28)(61, "div", 29)(62, "div", 30)(63, "div", 31)(64, "div", 32);
      \u0275\u0275element(65, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 33)(67, "div", 34);
      \u0275\u0275text(68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 35);
      \u0275\u0275text(70);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "button", 36);
      \u0275\u0275element(72, "i", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "form", 37);
      \u0275\u0275listener("ngSubmit", function AdminrhParcoursComponent_Template_form_ngSubmit_73_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(74, "div", 38)(75, "div", 39)(76, "label", 40);
      \u0275\u0275text(77, "Nom du parcours ");
      \u0275\u0275elementStart(78, "span", 41);
      \u0275\u0275text(79, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(80, "input", 42);
      \u0275\u0275template(81, AdminrhParcoursComponent_span_81_Template, 2, 0, "span", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 39)(83, "label", 40);
      \u0275\u0275text(84, "Description ");
      \u0275\u0275elementStart(85, "span", 41);
      \u0275\u0275text(86, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(87, "textarea", 44);
      \u0275\u0275template(88, AdminrhParcoursComponent_span_88_Template, 2, 0, "span", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 45)(90, "div", 46)(91, "label", 40);
      \u0275\u0275text(92, "Niveau ");
      \u0275\u0275elementStart(93, "span", 41);
      \u0275\u0275text(94, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "select", 47);
      \u0275\u0275template(96, AdminrhParcoursComponent_option_96_Template, 2, 2, "option", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 46)(98, "label", 40);
      \u0275\u0275text(99, "Dur\xE9e estim\xE9e (heures) ");
      \u0275\u0275elementStart(100, "span", 41);
      \u0275\u0275text(101, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(102, "input", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "div", 50)(104, "div", 46)(105, "label", 40);
      \u0275\u0275text(106, "Co\xFBt (XOF) ");
      \u0275\u0275elementStart(107, "span", 41);
      \u0275\u0275text(108, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(109, "input", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 46)(111, "label", 40);
      \u0275\u0275text(112, "Image URL");
      \u0275\u0275elementEnd();
      \u0275\u0275element(113, "input", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "div", 53)(115, "div")(116, "div", 54);
      \u0275\u0275text(117, "Parcours actif");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "div", 55);
      \u0275\u0275text(119, "Rendre ce parcours disponible aux employ\xE9s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "div", 56);
      \u0275\u0275listener("click", function AdminrhParcoursComponent_Template_div_click_120_listener() {
        let tmp_0_0;
        return (tmp_0_0 = ctx.parcoursForm.get("actif")) == null ? null : tmp_0_0.setValue(!((tmp_0_0 = ctx.parcoursForm.get("actif")) == null ? null : tmp_0_0.value));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "div", 57)(122, "div", 58)(123, "span", 40);
      \u0275\u0275text(124, "Objectifs du parcours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "button", 59);
      \u0275\u0275listener("click", function AdminrhParcoursComponent_Template_button_click_125_listener() {
        return ctx.addObjectif();
      });
      \u0275\u0275element(126, "i", 60);
      \u0275\u0275text(127, "Ajouter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "div", 61);
      \u0275\u0275template(129, AdminrhParcoursComponent_div_129_Template, 6, 3, "div", 62);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "div", 63)(131, "div", 58)(132, "span", 40);
      \u0275\u0275text(133, "Pr\xE9requis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "button", 59);
      \u0275\u0275listener("click", function AdminrhParcoursComponent_Template_button_click_134_listener() {
        return ctx.addPrerequis();
      });
      \u0275\u0275element(135, "i", 60);
      \u0275\u0275text(136, "Ajouter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "div", 64);
      \u0275\u0275template(138, AdminrhParcoursComponent_div_138_Template, 6, 3, "div", 62);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(139, "div", 57)(140, "div", 65);
      \u0275\u0275text(141, " Formations du parcours ");
      \u0275\u0275template(142, AdminrhParcoursComponent_span_142_Template, 2, 2, "span", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275template(143, AdminrhParcoursComponent_div_143_Template, 2, 1, "div", 67);
      \u0275\u0275elementStart(144, "div", 68)(145, "div", 69);
      \u0275\u0275element(146, "i", 70);
      \u0275\u0275elementStart(147, "input", 71);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhParcoursComponent_Template_input_ngModelChange_147_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formationsSearchTerm, $event) || (ctx.formationsSearchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "div", 72);
      \u0275\u0275template(149, AdminrhParcoursComponent_div_149_Template, 2, 0, "div", 73)(150, AdminrhParcoursComponent_div_150_Template, 9, 9, "div", 74)(151, AdminrhParcoursComponent_div_151_Template, 2, 0, "div", 73);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "div", 75);
      \u0275\u0275text(153, " L'ordre des formations d\xE9finit la s\xE9quence du parcours. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(154, AdminrhParcoursComponent_div_154_Template, 3, 1, "div", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "div", 77)(156, "span", 78);
      \u0275\u0275text(157);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "button", 79);
      \u0275\u0275text(159, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "button", 80);
      \u0275\u0275template(161, AdminrhParcoursComponent_span_161_Template, 1, 0, "span", 81);
      \u0275\u0275text(162);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(163, "div", 82)(164, "div", 83)(165, "div", 30);
      \u0275\u0275template(166, AdminrhParcoursComponent_ng_container_166_Template, 70, 15, "ng-container", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(167, "div", 84)(168, "div", 85)(169, "div", 30)(170, "div", 31)(171, "div", 86);
      \u0275\u0275element(172, "i", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "div", 33)(174, "div", 34);
      \u0275\u0275text(175, "Archiver le parcours");
      \u0275\u0275elementEnd();
      \u0275\u0275template(176, AdminrhParcoursComponent_div_176_Template, 2, 1, "div", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "button", 36);
      \u0275\u0275element(178, "i", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(179, "div", 38)(180, "div", 89);
      \u0275\u0275element(181, "i", 90);
      \u0275\u0275elementStart(182, "span");
      \u0275\u0275text(183, "Le parcours sera archiv\xE9 et masqu\xE9. Les inscriptions associ\xE9es seront conserv\xE9es.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(184, "div", 77);
      \u0275\u0275element(185, "span", 78);
      \u0275\u0275elementStart(186, "button", 79);
      \u0275\u0275text(187, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "button", 91);
      \u0275\u0275listener("click", function AdminrhParcoursComponent_Template_button_click_188_listener() {
        return ctx.archiveParcours(ctx.selectedParcours);
      });
      \u0275\u0275element(189, "i", 87);
      \u0275\u0275text(190, " Archiver ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_20_0;
      let tmp_21_0;
      let tmp_23_0;
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Parcours (", ctx.totalItems, ") ");
      \u0275\u0275advance(2);
      \u0275\u0275property("appHasPermission", "creer parcours");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.totalItems);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.getParcoursActifs());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.getParcoursInactifs());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.formations.length);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275classProp("ac-chip--on", ctx.selectedNiveau === "");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.niveaux);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedStatut === "");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedStatut === "actif");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedStatut === "inactif");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.searchTerm || ctx.selectedNiveau || ctx.selectedStatut);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.editMode ? "Modifier le parcours" : "Nouveau parcours");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.editMode ? "Mettez \xE0 jour les informations" : "Renseignez les informations du parcours");
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.parcoursForm);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ((tmp_20_0 = ctx.parcoursForm.get("nom")) == null ? null : tmp_20_0.invalid) && ((tmp_20_0 = ctx.parcoursForm.get("nom")) == null ? null : tmp_20_0.touched));
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ((tmp_21_0 = ctx.parcoursForm.get("description")) == null ? null : tmp_21_0.invalid) && ((tmp_21_0 = ctx.parcoursForm.get("description")) == null ? null : tmp_21_0.touched));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.niveaux);
      \u0275\u0275advance(24);
      \u0275\u0275classProp("on", (tmp_23_0 = ctx.parcoursForm.get("actif")) == null ? null : tmp_23_0.value);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.objectifs.controls);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.prerequis.controls);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.selectedFormations.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedFormations.length > 0);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formationsSearchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loadingFormations);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.filteredFormationsPool);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingFormations && ctx.filteredFormationsPool.length === 0);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.error && ctx.saving);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.editMode ? "Modification" : "Cr\xE9ation", " en cours");
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.parcoursForm.invalid || ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.editMode ? "Modifier" : "Cr\xE9er", " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.selectedParcours);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.selectedParcours);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, FormsModule, NgModel, HasPermissionDirective], styles: ['\n\n.ac-shell[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ac-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 16px;\n  font-size: 13px;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ac-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.ac-tab.active[_ngcontent-%COMP%] {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ac-tab[_ngcontent-%COMP%]:hover:not(.active) {\n  color: #111827;\n}\n.ac-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 160px;\n  max-width: 220px;\n}\n.ac-search__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ac-search__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 10px 6px 30px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ac-search__input[_ngcontent-%COMP%]:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.ac-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    background 0.15s,\n    color 0.15s;\n}\n.ac-chip[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ac-chip--on[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  border-color: #85B7EB;\n  color: #0C447C;\n}\n.ac-spacer[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.ac-view-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-btn.active[_ngcontent-%COMP%], \n.ac-view-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background: #185FA5;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.15s;\n}\n.ac-add-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  color: #fff;\n}\n.ac-add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ac-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  padding: 12px 14px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ac-kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.ac-kpi__label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: #4b5563;\n  margin-bottom: 4px;\n}\n.ac-kpi__label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ac-kpi__val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 500;\n  color: #111827;\n}\n.ac-kpi__delta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-top: 2px;\n}\n.ac-kpi__delta.up[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.ac-kpi__delta.down[_ngcontent-%COMP%] {\n  color: #A32D2D;\n}\n.ac-kpi__delta.neutral[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.ac-skeletons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n}\n.ac-skeleton-card[_ngcontent-%COMP%] {\n  height: 220px;\n  border-radius: 12px;\n  background: #f3f4f6;\n  animation: _ngcontent-%COMP%_ac-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_ac-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ac-alert[_ngcontent-%COMP%] {\n  margin: 12px 14px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n  background: #f9fafb;\n}\n.ac-fcard[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  transition: border-color 0.15s;\n}\n.ac-fcard[_ngcontent-%COMP%]:hover {\n  border-color: #aec6e4;\n}\n.ac-fcard__thumb[_ngcontent-%COMP%] {\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  position: relative;\n  overflow: hidden;\n}\n.ac-fcard__thumb[data-th=blue][_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.ac-fcard__thumb[data-th=teal][_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.ac-fcard__thumb[data-th=purple][_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.ac-fcard__thumb[data-th=amber][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ac-fcard__thumb[data-th=coral][_ngcontent-%COMP%] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.ac-fcard__thumb[data-th=green][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.ac-fcard__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-fcard__body[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  flex: 1;\n}\n.ac-fcard__cat[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 4px;\n}\n.ac-fcard__cat[data-cat=tech][_ngcontent-%COMP%] {\n  color: #0C447C;\n}\n.ac-fcard__cat[data-cat=rh][_ngcontent-%COMP%] {\n  color: #085041;\n}\n.ac-fcard__cat[data-cat=mgmt][_ngcontent-%COMP%] {\n  color: #534AB7;\n}\n.ac-fcard__cat[data-cat=fin][_ngcontent-%COMP%] {\n  color: #633806;\n}\n.ac-fcard__cat[data-cat=default][_ngcontent-%COMP%] {\n  color: #4b5563;\n}\n.ac-fcard__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 6px;\n  line-height: 1.3;\n}\n.ac-fcard__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ac-fcard__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-fcard__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ac-fcard__footer[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-top: 1px solid #f3f4f6;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-fcard__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-left: auto;\n}\n.ac-status[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.ac-status[data-s=pub][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=draft][_ngcontent-%COMP%] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=pending][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-status[data-s=plan][_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #3730A3;\n}\n.ac-status[data-s=live][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=done][_ngcontent-%COMP%] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=cancel][_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #991B1B;\n}\n.ac-prog[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0 6px;\n}\n.ac-prog__bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: #f3f4f6;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ac-prog__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  background: #185FA5;\n}\n.ac-prog__txt[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9ca3af;\n  text-align: right;\n  margin-top: 2px;\n}\n.ac-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.ac-act[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-act[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-act--del[_ngcontent-%COMP%] {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ac-act--del[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.ac-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.ac-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ac-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ac-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ac-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.ac-table-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n}\n.ac-table-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.ac-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 14px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ac-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n}\n.ac-empty--span[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.ac-empty-tab[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 14px;\n  gap: 12px;\n  color: #9ca3af;\n}\n.ac-empty-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.ac-empty-tab[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ac-pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ac-pager__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ac-pager__btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.ac-pager__btn[_ngcontent-%COMP%] {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ac-pager__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ac-pager__btn.active[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ac-pager__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ac-toolbar--chips[_ngcontent-%COMP%] {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-top: none;\n  background: #fff;\n  gap: 6px;\n}\n.ac-view-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.ac-view-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ac-view-toggle.active[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #111827;\n  font-weight: 500;\n}\n.ac-view-toggle[_ngcontent-%COMP%]:hover:not(.active) {\n  background: #f9fafb;\n}\n.ac-sessions-list[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  background: #f9fafb;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ac-session-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  transition: border-color 0.15s;\n}\n.ac-session-row[_ngcontent-%COMP%]:hover {\n  border-color: #aec6e4;\n}\n.ac-session-date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 40px;\n}\n.ac-session-date__day[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1;\n}\n.ac-session-date__month[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.ac-session-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ac-session-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ac-session-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 3px;\n  flex-wrap: wrap;\n}\n.ac-session-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-session-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ac-session-badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.ac-session-places[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  white-space: nowrap;\n}\n.ac-cal[_ngcontent-%COMP%] {\n  padding: 12px 14px 14px;\n  background: #f9fafb;\n}\n.ac-cal__nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.ac-cal__nav-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 14px;\n  color: #4b5563;\n  transition: background 0.12s;\n}\n.ac-cal__nav-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-cal__nav-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n  text-transform: capitalize;\n}\n.ac-cal__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 4px;\n}\n.ac-cal__head[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 4px 0 6px;\n}\n.ac-cal__cell[_ngcontent-%COMP%] {\n  min-height: 80px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 5px 5px 4px;\n  overflow: hidden;\n  transition: border-color 0.12s;\n}\n.ac-cal__cell[_ngcontent-%COMP%]:hover {\n  border-color: #aec6e4;\n}\n.ac-cal__cell--other[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.ac-cal__cell--other[_ngcontent-%COMP%]   .ac-cal__day[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.ac-cal__cell--today[_ngcontent-%COMP%] {\n  border-color: #185FA5;\n}\n.ac-cal__cell--today[_ngcontent-%COMP%]   .ac-cal__day[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 50%;\n}\n.ac-cal__day[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 4px;\n  display: block;\n}\n.ac-cal__events[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ac-cal__event[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 4px;\n  border-radius: 3px;\n  background: #E6F1FB;\n  color: #0C447C;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: default;\n}\n.ac-cal__event--dist[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-cal__event--hybr[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.wz-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 620px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.wz-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-head__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E6F1FB;\n  color: #185FA5;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.wz-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.wz-head__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-head__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.wz-close[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.wz-close[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.wz-stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.wz-step__circle[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 500;\n  flex-shrink: 0;\n  border: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  color: #9ca3af;\n  transition: all 0.2s;\n}\n.wz-step__circle.active[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.wz-step__circle.done[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n  border-color: #97C459;\n}\n.wz-step__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.wz-step__label.active[_ngcontent-%COMP%] {\n  color: #185FA5;\n}\n.wz-step__label.done[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.wz-step__line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 0.5px;\n  background: #e5e7eb;\n  margin: 0 8px;\n  min-width: 20px;\n}\n.wz-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.wz-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.wz-field--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.wz-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.wz-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-req[_ngcontent-%COMP%] {\n  color: #E24B4A;\n}\n.wz-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.wz-input[_ngcontent-%COMP%]:focus {\n  border-color: #185FA5;\n  box-shadow: 0 0 0 2px #E6F1FB;\n}\n.wz-input[readonly][_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.wz-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 68px;\n  line-height: 1.5;\n}\n.wz-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-domain-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.wz-domain-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.wz-domain-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.wz-domain-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-domain-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.wz-domain-card.selected[_ngcontent-%COMP%] {\n  border-color: #185FA5;\n  background: #E6F1FB;\n}\n.wz-domain-card.selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0C447C;\n}\n.wz-strip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 10px;\n}\n.wz-strip__hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.wz-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  border: 0.5px solid #85B7EB;\n  font-size: 12px;\n  color: #0C447C;\n}\n.wz-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  cursor: pointer;\n  color: #378ADD;\n}\n.wz-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #0C447C;\n}\n.wz-pool[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 6px;\n}\n.wz-pool__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-pool__search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.wz-pool__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.wz-pool__list[_ngcontent-%COMP%] {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.wz-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.wz-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.wz-pool__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.wz-pool__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.wz-pool__item[_ngcontent-%COMP%]:hover, \n.wz-pool__item.checked[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.wz-pool__check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.wz-pool__check.on[_ngcontent-%COMP%] {\n  background: #185FA5;\n  border-color: #185FA5;\n  color: #fff;\n}\n.wz-pool__thumb[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.wz-pool__thumb[data-th=blue][_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.wz-pool__thumb[data-th=teal][_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.wz-pool__thumb[data-th=purple][_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-pool__thumb[data-th=amber][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.wz-pool__thumb[data-th=coral][_ngcontent-%COMP%] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.wz-pool__thumb[data-th=green][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.wz-pool__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.wz-pool__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wz-pool__meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-pool__tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  background: #f3f4f6;\n  color: #4b5563;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.wz-pool__empty[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.wz-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 0.5px solid #f3f4f6;\n}\n.wz-toggle-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.wz-toggle-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-toggle-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.wz-toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.wz-toggle[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.wz-toggle.on[_ngcontent-%COMP%] {\n  background: #185FA5;\n}\n.wz-toggle.on[_ngcontent-%COMP%]::after {\n  left: 19px;\n}\n.wz-info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #E6F1FB;\n  border-radius: 8px;\n  border: 0.5px solid #85B7EB;\n  margin-bottom: 12px;\n  font-size: 12px;\n  color: #0C447C;\n  line-height: 1.5;\n}\n.wz-info-banner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #185FA5;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.wz-recap-card[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 10px;\n}\n.wz-recap-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.wz-recap-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-recap-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.wz-rl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-rv[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-recap-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.wz-rc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.wz-error[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.wz-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.wz-foot__info[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-btn-ghost[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.wz-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.wz-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #185FA5;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.wz-btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.wz-btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.wz-btn-success[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #3B6D11;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.wz-btn-success[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.wz-btn-success[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.cw-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 600px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.cw-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.cw-head__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E1F5EE;\n  color: #0F6E56;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cw-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.cw-head__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-head__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.cw-close[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.cw-close[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.cw-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.cw-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.cw-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.cw-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.cw-upload-zone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 24px 16px;\n  border: 1.5px dashed #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  cursor: pointer;\n  margin-bottom: 16px;\n  transition: border-color 0.15s, background 0.15s;\n}\n.cw-upload-zone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #9ca3af;\n}\n.cw-upload-zone[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n  font-weight: 500;\n}\n.cw-upload-zone__hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 400;\n}\n.cw-upload-zone[_ngcontent-%COMP%]:hover {\n  border-color: #79C9AB;\n  background: #E1F5EE;\n}\n.cw-upload-zone[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.cw-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.cw-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-req[_ngcontent-%COMP%] {\n  color: #E24B4A;\n}\n.cw-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.cw-input[_ngcontent-%COMP%]:focus {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-input[readonly][_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.cw-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 72px;\n  line-height: 1.5;\n}\n.cw-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-toggle-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 0;\n}\n.cw-toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.cw-toggle[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.cw-toggle.on[_ngcontent-%COMP%] {\n  background: #0F6E56;\n}\n.cw-toggle.on[_ngcontent-%COMP%]::after {\n  left: 19px;\n}\n.cw-toggle-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4b5563;\n}\n.cw-section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 8px;\n}\n.cw-domain-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-domain-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.cw-domain-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #9ca3af;\n}\n.cw-domain-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-domain-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-domain-card.selected[_ngcontent-%COMP%] {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-domain-card.selected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-domain-card.selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-level-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-level-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.cw-level-card__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-level-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.cw-level-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-level-card.selected[_ngcontent-%COMP%] {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-level-card.selected[_ngcontent-%COMP%]   .cw-level-card__label[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-level-card.selected[_ngcontent-%COMP%]   .cw-level-card__sub[_ngcontent-%COMP%] {\n  color: rgb(148.5, 219.5, 194.65);\n}\n.cw-tags-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n  min-height: 36px;\n  padding: 6px 8px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.cw-tags-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  background: #E1F5EE;\n  border: 0.5px solid #79C9AB;\n  font-size: 12px;\n  color: #0F6E56;\n}\n.cw-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  cursor: pointer;\n  color: #79C9AB;\n}\n.cw-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #0F6E56;\n}\n.cw-tag-input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 12px;\n  color: #111827;\n  background: transparent;\n  flex: 1;\n  min-width: 100px;\n  font-family: inherit;\n}\n.cw-strip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 8px;\n}\n.cw-strip-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.cw-pool[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.cw-pool__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.cw-pool__search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.cw-pool__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.cw-pool__list[_ngcontent-%COMP%] {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.cw-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.cw-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.cw-pool__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.cw-pool__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cw-pool__item[_ngcontent-%COMP%]:hover, \n.cw-pool__item.checked[_ngcontent-%COMP%] {\n  background: #E1F5EE;\n}\n.cw-pool__check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.cw-pool__check.on[_ngcontent-%COMP%] {\n  background: #0F6E56;\n  border-color: #0F6E56;\n  color: #fff;\n}\n.cw-pool__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cw-pool__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cw-pool__meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-pool__empty[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.cw-vis-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.cw-vis-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  cursor: pointer;\n  transition: all 0.15s;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cw-vis-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #9ca3af;\n  margin-bottom: 4px;\n}\n.cw-vis-card__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-vis-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-vis-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-vis-card.selected[_ngcontent-%COMP%] {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-vis-card.selected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-vis-card.selected[_ngcontent-%COMP%]   .cw-vis-card__label[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-error[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.cw-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.cw-btn-ghost[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.cw-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.cw-btn-draft[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: #fff;\n  cursor: pointer;\n  transition: background 0.12s, border-color 0.12s;\n}\n.cw-btn-draft[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.cw-btn-draft[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.cw-btn-draft[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #0F6E56;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.cw-btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.cw-btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.cw-btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .ac-card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-skeletons[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .ac-card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ac-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.ac-act--arch[_ngcontent-%COMP%] {\n  color: #BA7517;\n}\n.ac-act--arch[_ngcontent-%COMP%]:hover {\n  border-color: #BA7517;\n  color: #BA7517;\n  background: #FAEEDA;\n}\n.ac-act--people[_ngcontent-%COMP%] {\n  color: #185FA5;\n}\n.ac-act--people[_ngcontent-%COMP%]:hover {\n  border-color: #93C5FD;\n  color: #185FA5;\n  background: #DBEAFE;\n}\n.ac-act--warn[_ngcontent-%COMP%] {\n  color: #B45309;\n  border-color: #FCD34D;\n}\n.ac-act--warn[_ngcontent-%COMP%]:hover {\n  background: #FFFBEB;\n}\n.ac-act--ok[_ngcontent-%COMP%] {\n  color: #166534;\n  border-color: #86EFAC;\n}\n.ac-act--ok[_ngcontent-%COMP%]:hover {\n  background: #F0FDF4;\n}\n.ac-select[_ngcontent-%COMP%] {\n  height: 32px;\n  padding: 0 10px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n}\n.ac-table-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ac-course-img[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 44px;\n  height: 32px;\n  border-radius: 6px;\n  overflow: hidden;\n  display: block;\n  background: #f3f4f6;\n}\n.ac-course-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-course-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  text-decoration: none;\n}\n.ac-course-title[_ngcontent-%COMP%]:hover {\n  color: #185FA5;\n  text-decoration: underline;\n}\n.ac-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #4b5563;\n  background: #f3f4f6;\n  border-radius: 20px;\n  padding: 2px 8px;\n}\n.ac-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  border-radius: 4px;\n  padding: 2px 7px;\n}\n.ac-badge--free[_ngcontent-%COMP%] {\n  background: #D1FAE5;\n  color: #065F46;\n}\n.ac-badge--paid[_ngcontent-%COMP%] {\n  color: #185FA5;\n  font-weight: 600;\n}\n.ac-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ac-confirm-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 28px 32px;\n  max-width: 380px;\n  width: 90%;\n  text-align: center;\n}\n.ac-confirm-modal[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 12px 0 6px;\n}\n.ac-confirm-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n  margin-bottom: 20px;\n}\n.ac-confirm-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n}\n.ac-confirm-icon--warn[_ngcontent-%COMP%] {\n  background: #FEF3C7;\n  color: #B45309;\n}\n.ac-confirm-icon--ok[_ngcontent-%COMP%] {\n  background: #D1FAE5;\n  color: #065F46;\n}\n.ac-confirm-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n.ac-btn-ghost[_ngcontent-%COMP%] {\n  padding: 7px 18px;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  background: #f3f4f6;\n  font-size: 13px;\n  cursor: pointer;\n}\n.ac-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.ac-btn-warn[_ngcontent-%COMP%] {\n  padding: 7px 18px;\n  border: none;\n  border-radius: 20px;\n  background: #F59E0B;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.ac-btn-warn[_ngcontent-%COMP%]:hover {\n  background: #D97706;\n}\n.ac-btn-ok[_ngcontent-%COMP%] {\n  padding: 7px 18px;\n  border: none;\n  border-radius: 20px;\n  background: #10B981;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.ac-btn-ok[_ngcontent-%COMP%]:hover {\n  background: #059669;\n}\n.ac-skeleton-row[_ngcontent-%COMP%] {\n  height: 48px;\n  background: #f3f4f6;\n  border-radius: 8px;\n  margin: 6px 14px;\n  animation: _ngcontent-%COMP%_ac-pulse 1.2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_ac-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.pm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n  padding: 16px;\n}\n.pm-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 820px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n}\n.pm-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.pm-head__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #DBEAFE;\n  color: #185FA5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.pm-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pm-head__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-head__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.pm-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 4px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.pm-close[_ngcontent-%COMP%]:hover {\n  color: #111827;\n}\n.pm-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 20px;\n  font-size: 13px;\n}\n.pm-alert--ok[_ngcontent-%COMP%] {\n  background: #F0FDF4;\n  color: #166534;\n  border-bottom: 1px solid #4ADE80;\n}\n.pm-alert--err[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #991B1B;\n  border-bottom: 1px solid #F87171;\n}\n.pm-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .pm-body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.pm-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  background: #e5e7eb;\n  flex-shrink: 0;\n}\n@media (max-width: 600px) {\n  .pm-divider[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 1px;\n  }\n}\n.pm-col[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 0;\n}\n.pm-col__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  flex-wrap: wrap;\n}\n.pm-col__title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #374151;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  white-space: nowrap;\n}\n.pm-col__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.pm-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 120px;\n  max-width: 180px;\n}\n.pm-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 13px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.pm-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 8px 5px 26px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #f9fafb;\n  outline: none;\n}\n.pm-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.pm-list[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  flex: 1;\n  padding: 6px 0;\n}\n.pm-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 28px 16px;\n  font-size: 13px;\n  color: #9ca3af;\n}\n.pm-spin[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid #e5e7eb;\n  border-top-color: #185FA5;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pm-spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n.pm-spin--sm[_ngcontent-%COMP%] {\n  width: 11px;\n  height: 11px;\n}\n@keyframes _ngcontent-%COMP%_pm-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pm-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n  color: #9ca3af;\n}\n.pm-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.5;\n}\n.pm-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0;\n}\n.pm-user-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 16px;\n  transition: background 0.1s;\n}\n.pm-user-row[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.pm-user-av[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #f3f4f6;\n  color: #4b5563;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.pm-user-av--blue[_ngcontent-%COMP%] {\n  background: #DBEAFE;\n  color: #185FA5;\n}\n.pm-user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pm-user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-user-email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 9px;\n  border-radius: 20px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.pm-badge--ok[_ngcontent-%COMP%] {\n  background: #DCFCE7;\n  color: #166534;\n}\n.pm-enroll-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 26px;\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 500;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.pm-enroll-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.pm-enroll-btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #DCFCE7;\n  color: #166534;\n  border-color: #86EFAC;\n}\n.pm-enroll-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pm-unenroll-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 26px;\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 500;\n  border: 1px solid #FECACA;\n  border-radius: 6px;\n  background: #FFF5F5;\n  color: #991B1B;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.pm-unenroll-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.pm-unenroll-btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #FEE2E2;\n  color: #7F1D1D;\n  border-color: #FCA5A5;\n}\n.pm-unenroll-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pm-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.pm-foot__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.pm-close-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: inline-flex;\n  align-items: center;\n  height: 30px;\n  padding: 0 14px;\n  font-size: 13px;\n  font-weight: 500;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.pm-close-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.cw-pool__item.checked[_ngcontent-%COMP%], \n.cw-pool__item[_ngcontent-%COMP%]:hover {\n  background: #e6f1fb;\n}\n.cw-pool__check.on[_ngcontent-%COMP%] {\n  background: #185fa5;\n  border-color: #185fa5;\n  color: #fff;\n}\n.cw-pool-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 10px;\n}\n.cw-pool-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  background: #e6f1fb;\n  color: #185fa5;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.cw-pool-chip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #185fa5;\n  padding: 0;\n  line-height: 1;\n  font-size: 13px;\n  display: flex;\n}\n.cw-pool-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #6b7280;\n  margin-bottom: 6px;\n}\n.ac-select[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  outline: none;\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.ac-select[_ngcontent-%COMP%]:focus {\n  border-color: #185fa5;\n}\n.wz-desc-box[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  font-size: 13px;\n  color: #374151;\n  background: #f9fafb;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  line-height: 1.6;\n}\n.wz-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.wz-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #374151;\n}\n.wz-list-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.wz-section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin: 16px 0 8px;\n}\n.ac-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  position: relative;\n}\n.ac-alert-close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n  font-size: 14px;\n}\n.ac-alert-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.wz-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.wz-btn-danger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #dc2626;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-danger[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=adminrh-parcours.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhParcoursComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-parcours", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule, HasPermissionDirective], template: `<div class="ac-shell">\r
\r
  <!-- \u2500\u2500 Topbar \u2500\u2500 -->\r
  <div class="ac-topbar">\r
    <span class="ac-tab active">\r
      <i class="isax isax-route-square"></i>Parcours ({{ totalItems }})\r
    </span>\r
    <span class="ac-spacer"></span>\r
    <button *appHasPermission="'creer parcours'" type="button" class="ac-add-btn" (click)="openParcoursModal()">\r
      <i class="isax isax-add"></i>Nouveau parcours\r
    </button>\r
  </div>\r
\r
  <!-- \u2500\u2500 KPI \u2500\u2500 -->\r
  <div class="ac-kpi-row">\r
    <div class="ac-kpi">\r
      <div class="ac-kpi__label"><i class="isax isax-route-square"></i>Total</div>\r
      <div class="ac-kpi__val">{{ totalItems }}</div>\r
      <div class="ac-kpi__delta neutral">parcours</div>\r
    </div>\r
    <div class="ac-kpi">\r
      <div class="ac-kpi__label"><i class="isax isax-tick-circle"></i>Actifs</div>\r
      <div class="ac-kpi__val">{{ getParcoursActifs() }}</div>\r
      <div class="ac-kpi__delta up">en cours</div>\r
    </div>\r
    <div class="ac-kpi">\r
      <div class="ac-kpi__label"><i class="isax isax-close-circle"></i>Inactifs</div>\r
      <div class="ac-kpi__val">{{ getParcoursInactifs() }}</div>\r
      <div class="ac-kpi__delta neutral">d\xE9sactiv\xE9s</div>\r
    </div>\r
    <div class="ac-kpi">\r
      <div class="ac-kpi__label"><i class="isax isax-book-1"></i>Formations dispo</div>\r
      <div class="ac-kpi__val">{{ formations.length }}</div>\r
      <div class="ac-kpi__delta neutral">catalogu\xE9es</div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 Toolbar \u2500\u2500 -->\r
  <div class="ac-toolbar">\r
    <div class="ac-search">\r
      <i class="isax isax-search-normal-1 ac-search__icon"></i>\r
      <input class="ac-search__input" type="search" [(ngModel)]="searchTerm" placeholder="Rechercher un parcours\u2026">\r
    </div>\r
    <button type="button" class="ac-chip" [class.ac-chip--on]="selectedNiveau === ''"\r
            (click)="selectedNiveau = ''">Tous niveaux</button>\r
    <button type="button" class="ac-chip" *ngFor="let n of niveaux"\r
            [class.ac-chip--on]="selectedNiveau === n.value"\r
            (click)="selectedNiveau = n.value">{{ n.label }}</button>\r
    <div class="ac-view-group" style="margin-left:8px;">\r
      <button type="button" class="ac-view-toggle" [class.active]="selectedStatut === ''"\r
              (click)="selectedStatut = ''">Tous</button>\r
      <button type="button" class="ac-view-toggle" [class.active]="selectedStatut === 'actif'"\r
              (click)="selectedStatut = 'actif'">Actifs</button>\r
      <button type="button" class="ac-view-toggle" [class.active]="selectedStatut === 'inactif'"\r
              (click)="selectedStatut = 'inactif'">Inactifs</button>\r
    </div>\r
    <button type="button" class="ac-chip" (click)="clearFilters()"\r
            *ngIf="searchTerm || selectedNiveau || selectedStatut">\r
      <i class="isax isax-close-circle"></i>Effacer\r
    </button>\r
    <span class="ac-spacer"></span>\r
  </div>\r
\r
  <!-- \u2500\u2500 Alerts \u2500\u2500 -->\r
  <div class="ac-alert" style="color:#27500a;background:#eaf3de;border-color:#97c459;" *ngIf="success">\r
    <i class="isax isax-tick-circle"></i>{{ success }}\r
    <button type="button" class="ac-alert-close" (click)="success=''"><i class="isax isax-close-circle"></i></button>\r
  </div>\r
  <div class="ac-alert" *ngIf="error && !saving">\r
    <i class="isax isax-warning-2"></i>{{ error }}\r
    <button type="button" class="ac-alert-close" (click)="error=''"><i class="isax isax-close-circle"></i></button>\r
  </div>\r
\r
  <!-- \u2500\u2500 Skeleton \u2500\u2500 -->\r
  <div *ngIf="loading" class="ac-skeletons">\r
    <div *ngFor="let i of [1,2,3,4,5,6]" class="ac-skeleton-card"></div>\r
  </div>\r
\r
  <!-- \u2500\u2500 Card grid \u2500\u2500 -->\r
  <ng-container *ngIf="!loading">\r
    <div class="ac-card-grid" *ngIf="filteredParcours.length > 0">\r
      <div *ngFor="let p of filteredParcours; trackBy: trackByParcoursId" class="ac-fcard">\r
\r
        <!-- Thumb -->\r
        <div class="ac-fcard__thumb" [attr.data-th]="p.actif ? 'blue' : 'amber'">\r
          <img *ngIf="p.image_url" [src]="p.image_url" [alt]="p.nom" class="ac-fcard__img">\r
          <i *ngIf="!p.image_url" class="isax isax-route-square"></i>\r
        </div>\r
\r
        <!-- Body -->\r
        <div class="ac-fcard__body">\r
          <div class="ac-fcard__cat"\r
               [attr.data-cat]="p.niveau === 'expert' ? 'purple' : p.niveau === 'avance' ? 'blue' : p.niveau === 'intermediaire' ? 'teal' : 'default'">\r
            {{ getNiveauLabel(p.niveau) }}\r
          </div>\r
          <div class="ac-fcard__title">{{ p.nom }}</div>\r
          <div class="ac-fcard__meta">\r
            <span><i class="isax isax-clock"></i> {{ p.duree_estimee }}h</span>\r
            <span><i class="isax isax-book-1"></i> {{ p.formations.length }} formations</span>\r
            <span><i class="isax isax-people"></i> {{ p.users.length }} inscrits</span>\r
          </div>\r
          <div class="ac-fcard__meta" style="margin-top:3px;" *ngIf="p.prix && p.prix !== '0'">\r
            <span><i class="isax isax-wallet"></i> {{ p.prix }} XOF</span>\r
            <span *ngIf="getFormationsObligatoires(p.formations).length > 0">\r
              <i class="isax isax-warning-2"></i> {{ getFormationsObligatoires(p.formations).length }} oblig.\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- Footer -->\r
        <div class="ac-fcard__footer">\r
          <span class="ac-status" [attr.data-s]="p.actif ? 'pub' : 'draft'">\r
            {{ p.actif ? 'Actif' : 'Inactif' }}\r
          </span>\r
          <div class="ac-fcard__actions" style="margin-left:auto;">\r
            <button type="button" class="ac-act" title="Voir" (click)="viewParcours(p)">\r
              <i class="isax isax-eye"></i>\r
            </button>\r
            <button type="button" class="ac-act" title="Modifier" (click)="editParcours(p)">\r
              <i class="isax isax-edit-2"></i>\r
            </button>\r
            <button type="button" class="ac-act ac-act--arch" title="Archiver" (click)="archiveParcours(p)">\r
              <i class="isax isax-archive"></i>\r
            </button>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div>\r
\r
    <!-- Empty -->\r
    <div class="ac-empty ac-empty--span" *ngIf="filteredParcours.length === 0">\r
      <i class="isax isax-route-square"></i>\r
      <p>{{ parcours.length === 0 ? 'Aucun parcours cr\xE9\xE9' : 'Aucun r\xE9sultat pour ces filtres' }}</p>\r
      <ng-container *appHasPermission="'creer parcours'">\r
        <button type="button" class="ac-add-btn" style="margin-top:10px;"\r
                (click)="openParcoursModal()" *ngIf="parcours.length === 0">\r
          <i class="isax isax-add"></i>Cr\xE9er un parcours\r
        </button>\r
      </ng-container>\r
      <button type="button" class="ac-chip" style="margin-top:10px;"\r
              (click)="clearFilters()" *ngIf="parcours.length > 0">\r
        <i class="isax isax-refresh"></i>Effacer les filtres\r
      </button>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div class="ac-pager" *ngIf="totalPages > 1">\r
      <span class="ac-pager__info">{{ getPaginationStart() }}\u2013{{ getPaginationEnd() }} sur {{ totalItems }} parcours</span>\r
      <div class="ac-pager__btns">\r
        <button type="button" class="ac-pager__btn" [disabled]="currentPage === 1"\r
                (click)="onPageChange(currentPage - 1)">\r
          <i class="isax isax-arrow-left-3"></i>\r
        </button>\r
        <button type="button" class="ac-pager__btn" *ngFor="let pg of pages"\r
                [class.active]="pg === currentPage" (click)="onPageChange(pg)">{{ pg }}</button>\r
        <button type="button" class="ac-pager__btn" [disabled]="currentPage === totalPages"\r
                (click)="onPageChange(currentPage + 1)">\r
          <i class="isax isax-arrow-right-3"></i>\r
        </button>\r
      </div>\r
    </div>\r
  </ng-container>\r
\r
</div><!-- /ac-shell -->\r
\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     MODAL CR\xC9ATION / MODIFICATION\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="modal fade" id="parcoursModal" tabindex="-1">\r
  <div class="modal-dialog modal-lg" style="max-width:640px;">\r
    <div class="wz-modal modal-content">\r
\r
      <div class="wz-head">\r
        <div class="wz-head__icon"><i class="isax isax-route-square"></i></div>\r
        <div class="wz-head__text">\r
          <div class="wz-head__title">{{ editMode ? 'Modifier le parcours' : 'Nouveau parcours' }}</div>\r
          <div class="wz-head__sub">{{ editMode ? 'Mettez \xE0 jour les informations' : 'Renseignez les informations du parcours' }}</div>\r
        </div>\r
        <button type="button" class="wz-close" data-bs-dismiss="modal"><i class="isax isax-close-circle"></i></button>\r
      </div>\r
\r
      <form [formGroup]="parcoursForm" (ngSubmit)="onSubmit()" style="display:flex;flex-direction:column;flex:1;min-height:0;overflow:hidden;">\r
        <div class="wz-body">\r
\r
          <div class="wz-field">\r
            <label class="wz-label">Nom du parcours <span class="wz-req">*</span></label>\r
            <input type="text" class="wz-input" formControlName="nom" placeholder="Ex: D\xE9veloppement Web Full Stack">\r
            <span class="wz-hint" *ngIf="parcoursForm.get('nom')?.invalid && parcoursForm.get('nom')?.touched">\r
              Nom requis (min. 3 caract\xE8res)\r
            </span>\r
          </div>\r
\r
          <div class="wz-field">\r
            <label class="wz-label">Description <span class="wz-req">*</span></label>\r
            <textarea class="wz-input wz-textarea" formControlName="description" placeholder="Description d\xE9taill\xE9e du parcours"></textarea>\r
            <span class="wz-hint" *ngIf="parcoursForm.get('description')?.invalid && parcoursForm.get('description')?.touched">\r
              Description requise (min. 10 caract\xE8res)\r
            </span>\r
          </div>\r
\r
          <div class="wz-row">\r
            <div class="wz-field" style="margin-bottom:0;">\r
              <label class="wz-label">Niveau <span class="wz-req">*</span></label>\r
              <select class="wz-input" title="Niveau du parcours" formControlName="niveau">\r
                <option *ngFor="let n of niveaux" [value]="n.value">{{ n.label }}</option>\r
              </select>\r
            </div>\r
            <div class="wz-field" style="margin-bottom:0;">\r
              <label class="wz-label">Dur\xE9e estim\xE9e (heures) <span class="wz-req">*</span></label>\r
              <input type="number" class="wz-input" formControlName="duree_estimee" min="1">\r
            </div>\r
          </div>\r
\r
          <div class="wz-row" style="margin-top:12px;">\r
            <div class="wz-field" style="margin-bottom:0;">\r
              <label class="wz-label">Co\xFBt (XOF) <span class="wz-req">*</span></label>\r
              <input type="number" class="wz-input" formControlName="prix" min="0" step="0.01">\r
            </div>\r
            <div class="wz-field" style="margin-bottom:0;">\r
              <label class="wz-label">Image URL</label>\r
              <input type="url" class="wz-input" formControlName="image_url" placeholder="https://\u2026">\r
            </div>\r
          </div>\r
\r
          <div class="wz-toggle-row" style="margin-top:12px;">\r
            <div>\r
              <div class="wz-toggle-title">Parcours actif</div>\r
              <div class="wz-toggle-sub">Rendre ce parcours disponible aux employ\xE9s</div>\r
            </div>\r
            <div class="wz-toggle" [class.on]="parcoursForm.get('actif')?.value"\r
                 (click)="parcoursForm.get('actif')?.setValue(!parcoursForm.get('actif')?.value)"></div>\r
          </div>\r
\r
          <!-- Objectifs -->\r
          <div style="margin-top:18px;">\r
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">\r
              <span class="wz-label">Objectifs du parcours</span>\r
              <button type="button" class="ac-add-btn" style="padding:4px 10px;font-size:11px;" (click)="addObjectif()">\r
                <i class="isax isax-add"></i>Ajouter\r
              </button>\r
            </div>\r
            <div formArrayName="objectifs">\r
              <div *ngFor="let obj of objectifs.controls; let i = index" [formGroupName]="i"\r
                   style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">\r
                <span style="font-size:12px;color:#9ca3af;min-width:20px;text-align:right;">{{ i+1 }}.</span>\r
                <input type="text" class="wz-input" formControlName="value" style="flex:1;"\r
                       placeholder="D\xE9crivez un objectif\u2026">\r
                <button type="button" class="ac-act ac-act--del" (click)="removeObjectif(i)"\r
                        [disabled]="objectifsLength === 1">\r
                  <i class="isax isax-trash"></i>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Pr\xE9requis -->\r
          <div style="margin-top:12px;">\r
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">\r
              <span class="wz-label">Pr\xE9requis</span>\r
              <button type="button" class="ac-add-btn" style="padding:4px 10px;font-size:11px;" (click)="addPrerequis()">\r
                <i class="isax isax-add"></i>Ajouter\r
              </button>\r
            </div>\r
            <div formArrayName="prerequis">\r
              <div *ngFor="let pre of prerequis.controls; let i = index" [formGroupName]="i"\r
                   style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">\r
                <span style="font-size:12px;color:#9ca3af;min-width:20px;text-align:right;">{{ i+1 }}.</span>\r
                <input type="text" class="wz-input" formControlName="value" style="flex:1;"\r
                       placeholder="D\xE9crivez un pr\xE9requis\u2026">\r
                <button type="button" class="ac-act ac-act--del" (click)="removePrerequis(i)"\r
                        [disabled]="prerequisLength === 1">\r
                  <i class="isax isax-trash"></i>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- \u2500\u2500 Formations du parcours \u2500\u2500 -->\r
          <div style="margin-top:18px;">\r
            <div class="wz-label" style="margin-bottom:8px;">\r
              Formations du parcours\r
              <span *ngIf="selectedFormations.length > 0" style="font-weight:400;color:#185fa5;margin-left:4px;">({{ selectedFormations.length }} s\xE9lectionn\xE9e{{ selectedFormations.length > 1 ? 's' : '' }})</span>\r
            </div>\r
\r
            <!-- Chips s\xE9lectionn\xE9es -->\r
            <div class="cw-pool-chips" *ngIf="selectedFormations.length > 0">\r
              <span class="cw-pool-chip" *ngFor="let f of selectedFormations">\r
                {{ f.titre }}\r
                <button type="button" (click)="removeSelectedFormation(f.id)">\r
                  <i class="isax isax-close-circle"></i>\r
                </button>\r
              </span>\r
            </div>\r
\r
            <!-- Pool -->\r
            <div class="cw-pool">\r
              <div class="cw-pool__search">\r
                <i class="isax isax-search-normal-1"></i>\r
                <input type="search" [(ngModel)]="formationsSearchTerm" placeholder="Rechercher une formation\u2026">\r
              </div>\r
              <div class="cw-pool__list" style="max-height:200px;">\r
                <div *ngIf="loadingFormations" class="cw-pool__empty">Chargement\u2026</div>\r
                <div *ngFor="let f of filteredFormationsPool"\r
                     class="cw-pool__item" [class.checked]="isFormationSelected(f.id)"\r
                     (click)="toggleFormation(f.id)">\r
                  <div class="cw-pool__check" [class.on]="isFormationSelected(f.id)">\r
                    <i class="isax isax-tick" *ngIf="isFormationSelected(f.id)"></i>\r
                  </div>\r
                  <div class="cw-pool__info">\r
                    <div class="cw-pool__name">{{ f.titre }}</div>\r
                    <div class="cw-pool__meta">\r
                      {{ f.categorie?.nom || f.type || '\u2014' }}{{ f.duree_totale ? ' \xB7 ' + f.duree_totale + 'h' : '' }}\r
                      <span *ngIf="f.niveau"> \xB7 {{ f.niveau }}</span>\r
                    </div>\r
                  </div>\r
                </div>\r
                <div class="cw-pool__empty" *ngIf="!loadingFormations && filteredFormationsPool.length === 0">\r
                  Aucune formation disponible\r
                </div>\r
              </div>\r
            </div>\r
            <div style="font-size:11px;color:#9ca3af;">\r
              L'ordre des formations d\xE9finit la s\xE9quence du parcours.\r
            </div>\r
          </div>\r
\r
          <div class="wz-error" *ngIf="error && saving">\r
            <i class="isax isax-warning-2"></i>{{ error }}\r
          </div>\r
\r
        </div>\r
\r
        <div class="wz-foot">\r
          <span class="wz-foot__info">{{ editMode ? 'Modification' : 'Cr\xE9ation' }} en cours</span>\r
          <button type="button" class="wz-btn-ghost" data-bs-dismiss="modal">Annuler</button>\r
          <button type="submit" class="wz-btn-primary" [disabled]="parcoursForm.invalid || saving">\r
            <span *ngIf="saving" class="wz-spinner"></span>\r
            {{ editMode ? 'Modifier' : 'Cr\xE9er' }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     MODAL D\xC9TAILS\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="modal fade" id="viewModal" tabindex="-1">\r
  <div class="modal-dialog modal-lg modal-dialog-scrollable" style="max-width:680px;">\r
    <div class="wz-modal modal-content">\r
      <ng-container *ngIf="selectedParcours">\r
        <div class="wz-head">\r
          <div class="wz-head__icon" style="background:#e1f5ee;color:#0f6e56;"><i class="isax isax-eye"></i></div>\r
          <div class="wz-head__text">\r
            <div class="wz-head__title">{{ selectedParcours.nom }}</div>\r
            <div class="wz-head__sub">D\xE9tails du parcours</div>\r
          </div>\r
          <button type="button" class="wz-close" data-bs-dismiss="modal"><i class="isax isax-close-circle"></i></button>\r
        </div>\r
\r
        <div class="wz-body">\r
          <div class="wz-recap-card">\r
            <div class="wz-recap-title">Informations</div>\r
            <div class="wz-recap-row"><span class="wz-rl">Niveau</span><span class="wz-rv">{{ getNiveauLabel(selectedParcours.niveau) }}</span></div>\r
            <div class="wz-recap-row"><span class="wz-rl">Dur\xE9e estim\xE9e</span><span class="wz-rv">{{ selectedParcours.duree_estimee }}h</span></div>\r
            <div class="wz-recap-row"><span class="wz-rl">Dur\xE9e totale formations</span><span class="wz-rv">{{ getTotalDuration(selectedParcours.formations) }}h</span></div>\r
            <div class="wz-recap-row"><span class="wz-rl">Co\xFBt</span><span class="wz-rv">{{ selectedParcours.prix }} XOF</span></div>\r
            <div class="wz-recap-row"><span class="wz-rl">Formations incluses</span><span class="wz-rv">{{ selectedParcours.formations.length }} ({{ getFormationsObligatoires(selectedParcours.formations).length }} oblig.)</span></div>\r
            <div class="wz-recap-row"><span class="wz-rl">Inscrits</span><span class="wz-rv">{{ selectedParcours.users.length }}</span></div>\r
            <div class="wz-recap-row"><span class="wz-rl">Statut</span>\r
              <span class="wz-rv">\r
                <span class="ac-status" [attr.data-s]="selectedParcours.actif ? 'pub' : 'draft'">\r
                  {{ selectedParcours.actif ? 'Actif' : 'Inactif' }}\r
                </span>\r
              </span>\r
            </div>\r
            <div class="wz-recap-row"><span class="wz-rl">Cr\xE9\xE9 le</span><span class="wz-rv">{{ formatDate(selectedParcours.created_at) }}</span></div>\r
          </div>\r
\r
          <div class="wz-field">\r
            <label class="wz-label">Description</label>\r
            <div class="wz-desc-box">{{ selectedParcours.description }}</div>\r
          </div>\r
\r
          <div class="wz-field" *ngIf="selectedParcours.objectifs.length > 0">\r
            <label class="wz-label">Objectifs ({{ selectedParcours.objectifs.length }})</label>\r
            <div class="wz-list">\r
              <div class="wz-list-item" *ngFor="let obj of selectedParcours.objectifs">\r
                <i class="isax isax-tick-circle" style="color:#0f6e56;"></i>{{ obj }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="wz-field" *ngIf="selectedParcours.prerequis.length > 0">\r
            <label class="wz-label">Pr\xE9requis ({{ selectedParcours.prerequis.length }})</label>\r
            <div class="wz-list">\r
              <div class="wz-list-item" *ngFor="let pre of selectedParcours.prerequis">\r
                <i class="isax isax-info-circle" style="color:#185fa5;"></i>{{ pre }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div *ngIf="selectedParcours.formations.length > 0">\r
            <div class="wz-section-label">Formations du parcours ({{ selectedParcours.formations.length }})</div>\r
            <div class="ac-card-grid" style="grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;">\r
              <div *ngFor="let f of selectedParcours.formations; trackBy: trackByFormationId"\r
                   class="ac-fcard" style="min-height:auto;">\r
                <div class="ac-fcard__body" style="padding:10px 12px;">\r
                  <div class="ac-fcard__cat" data-cat="default">\r
                    {{ f.pivot?.ordre ? '\xC9tape ' + f.pivot?.ordre : '\u2014' }}\r
                    <span *ngIf="f.pivot?.obligatoire" style="margin-left:4px;color:#e78a0e;">\u2605</span>\r
                  </div>\r
                  <div class="ac-fcard__title" style="font-size:12px;">{{ f.titre }}</div>\r
                  <div class="ac-fcard__meta">\r
                    <span><i class="isax isax-clock"></i> {{ f.duree_totale }}h</span>\r
                    <span class="ac-status" style="font-size:9px;" [attr.data-s]="f.est_publie ? 'pub' : 'draft'">\r
                      {{ f.est_publie ? 'Publi\xE9' : 'Brouillon' }}\r
                    </span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="wz-foot">\r
          <button type="button" class="wz-btn-ghost" data-bs-dismiss="modal">Fermer</button>\r
          <button type="button" class="wz-btn-primary" (click)="editParcours(selectedParcours!)" data-bs-dismiss="modal">\r
            <i class="isax isax-edit-2"></i>Modifier\r
          </button>\r
        </div>\r
      </ng-container>\r
    </div>\r
  </div>\r
</div>\r
\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     MODAL SUPPRESSION\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="modal fade" id="deleteModal" tabindex="-1">\r
  <div class="modal-dialog" style="max-width:420px;">\r
    <div class="wz-modal modal-content">\r
      <div class="wz-head">\r
        <div class="wz-head__icon" style="background:#FAEEDA;color:#BA7517;"><i class="isax isax-archive"></i></div>\r
        <div class="wz-head__text">\r
          <div class="wz-head__title">Archiver le parcours</div>\r
          <div class="wz-head__sub" *ngIf="selectedParcours">{{ selectedParcours.nom }}</div>\r
        </div>\r
        <button type="button" class="wz-close" data-bs-dismiss="modal"><i class="isax isax-close-circle"></i></button>\r
      </div>\r
      <div class="wz-body">\r
        <div class="wz-info-banner" style="background:#fef2f2;border-color:#fca5a5;color:#7f1d1d;">\r
          <i class="isax isax-warning-2" style="color:#dc2626;"></i>\r
          <span>Le parcours sera archiv\xE9 et masqu\xE9. Les inscriptions associ\xE9es seront conserv\xE9es.</span>\r
        </div>\r
      </div>\r
      <div class="wz-foot">\r
        <span class="wz-foot__info"></span>\r
        <button type="button" class="wz-btn-ghost" data-bs-dismiss="modal">Annuler</button>\r
        <button type="button" class="wz-btn-arch" (click)="archiveParcours(selectedParcours)">\r
          <i class="isax isax-archive"></i> Archiver\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/adminrh/adminrh-parcours/adminrh-parcours.component.scss */\n.ac-shell {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ac-topbar {\n  display: flex;\n  align-items: stretch;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-tab {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 16px;\n  font-size: 13px;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ac-tab i {\n  font-size: 15px;\n}\n.ac-tab.active {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ac-tab:hover:not(.active) {\n  color: #111827;\n}\n.ac-toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-search {\n  position: relative;\n  flex: 1;\n  min-width: 160px;\n  max-width: 220px;\n}\n.ac-search__icon {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ac-search__input {\n  width: 100%;\n  padding: 6px 10px 6px 30px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ac-search__input:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.ac-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    background 0.15s,\n    color 0.15s;\n}\n.ac-chip:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ac-chip--on {\n  background: #E6F1FB;\n  border-color: #85B7EB;\n  color: #0C447C;\n}\n.ac-spacer {\n  margin-left: auto;\n}\n.ac-view-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-btn.active,\n.ac-view-btn:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-add-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background: #185FA5;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.15s;\n}\n.ac-add-btn:hover {\n  opacity: 0.9;\n  color: #fff;\n}\n.ac-add-btn i {\n  font-size: 13px;\n}\n.ac-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  padding: 12px 14px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ac-kpi {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.ac-kpi__label {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: #4b5563;\n  margin-bottom: 4px;\n}\n.ac-kpi__label i {\n  font-size: 13px;\n}\n.ac-kpi__val {\n  font-size: 22px;\n  font-weight: 500;\n  color: #111827;\n}\n.ac-kpi__delta {\n  font-size: 11px;\n  margin-top: 2px;\n}\n.ac-kpi__delta.up {\n  color: #3B6D11;\n}\n.ac-kpi__delta.down {\n  color: #A32D2D;\n}\n.ac-kpi__delta.neutral {\n  color: #9ca3af;\n}\n.ac-skeletons {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n}\n.ac-skeleton-card {\n  height: 220px;\n  border-radius: 12px;\n  background: #f3f4f6;\n  animation: ac-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes ac-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ac-alert {\n  margin: 12px 14px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-card-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n  background: #f9fafb;\n}\n.ac-fcard {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  transition: border-color 0.15s;\n}\n.ac-fcard:hover {\n  border-color: #aec6e4;\n}\n.ac-fcard__thumb {\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  position: relative;\n  overflow: hidden;\n}\n.ac-fcard__thumb[data-th=blue] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.ac-fcard__thumb[data-th=teal] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.ac-fcard__thumb[data-th=purple] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.ac-fcard__thumb[data-th=amber] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ac-fcard__thumb[data-th=coral] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.ac-fcard__thumb[data-th=green] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.ac-fcard__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-fcard__body {\n  padding: 10px 12px;\n  flex: 1;\n}\n.ac-fcard__cat {\n  font-size: 10px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 4px;\n}\n.ac-fcard__cat[data-cat=tech] {\n  color: #0C447C;\n}\n.ac-fcard__cat[data-cat=rh] {\n  color: #085041;\n}\n.ac-fcard__cat[data-cat=mgmt] {\n  color: #534AB7;\n}\n.ac-fcard__cat[data-cat=fin] {\n  color: #633806;\n}\n.ac-fcard__cat[data-cat=default] {\n  color: #4b5563;\n}\n.ac-fcard__title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 6px;\n  line-height: 1.3;\n}\n.ac-fcard__meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ac-fcard__meta span {\n  font-size: 11px;\n  color: #4b5563;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-fcard__meta span i {\n  font-size: 12px;\n}\n.ac-fcard__footer {\n  padding: 8px 12px;\n  border-top: 1px solid #f3f4f6;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-fcard__actions {\n  display: flex;\n  gap: 4px;\n  margin-left: auto;\n}\n.ac-status {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.ac-status[data-s=pub] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=draft] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=pending] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-status[data-s=plan] {\n  background: #EEF2FF;\n  color: #3730A3;\n}\n.ac-status[data-s=live] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=done] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=cancel] {\n  background: #FEF2F2;\n  color: #991B1B;\n}\n.ac-prog {\n  flex: 1;\n  margin: 0 6px;\n}\n.ac-prog__bar {\n  height: 4px;\n  background: #f3f4f6;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ac-prog__fill {\n  height: 100%;\n  border-radius: 4px;\n  background: #185FA5;\n}\n.ac-prog__txt {\n  font-size: 10px;\n  color: #9ca3af;\n  text-align: right;\n  margin-top: 2px;\n}\n.ac-actions {\n  display: flex;\n  gap: 5px;\n}\n.ac-act {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-act:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-act--del {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ac-act--del:hover {\n  background: #fef2f2;\n}\n.ac-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.ac-table th {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ac-table td {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ac-table tr:last-child td {\n  border-bottom: none;\n}\n.ac-table tr:hover td {\n  background: #f9fafb;\n}\n.ac-table-name {\n  font-size: 13px;\n  font-weight: 500;\n}\n.ac-table-sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.ac-empty {\n  text-align: center;\n  padding: 40px 14px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ac-empty i {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n}\n.ac-empty--span {\n  grid-column: 1/-1;\n}\n.ac-empty-tab {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 14px;\n  gap: 12px;\n  color: #9ca3af;\n}\n.ac-empty-tab i {\n  font-size: 2.5rem;\n}\n.ac-empty-tab p {\n  font-size: 14px;\n}\n.ac-pager {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ac-pager__info {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ac-pager__btns {\n  display: flex;\n  gap: 4px;\n}\n.ac-pager__btn {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ac-pager__btn:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ac-pager__btn.active {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ac-pager__btn:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ac-toolbar--chips {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-top: none;\n  background: #fff;\n  gap: 6px;\n}\n.ac-view-group {\n  display: inline-flex;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.ac-view-toggle {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-toggle i {\n  font-size: 14px;\n}\n.ac-view-toggle.active {\n  background: #f3f4f6;\n  color: #111827;\n  font-weight: 500;\n}\n.ac-view-toggle:hover:not(.active) {\n  background: #f9fafb;\n}\n.ac-sessions-list {\n  padding: 10px 14px;\n  background: #f9fafb;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ac-session-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  transition: border-color 0.15s;\n}\n.ac-session-row:hover {\n  border-color: #aec6e4;\n}\n.ac-session-date {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 40px;\n}\n.ac-session-date__day {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1;\n}\n.ac-session-date__month {\n  font-size: 10px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.ac-session-info {\n  flex: 1;\n  min-width: 0;\n}\n.ac-session-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ac-session-meta {\n  display: flex;\n  gap: 10px;\n  margin-top: 3px;\n  flex-wrap: wrap;\n}\n.ac-session-meta span {\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-session-meta span i {\n  font-size: 12px;\n}\n.ac-session-badges {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.ac-session-places {\n  font-size: 11px;\n  color: #4b5563;\n  white-space: nowrap;\n}\n.ac-cal {\n  padding: 12px 14px 14px;\n  background: #f9fafb;\n}\n.ac-cal__nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.ac-cal__nav-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 14px;\n  color: #4b5563;\n  transition: background 0.12s;\n}\n.ac-cal__nav-btn:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-cal__nav-label {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n  text-transform: capitalize;\n}\n.ac-cal__grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 4px;\n}\n.ac-cal__head {\n  text-align: center;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 4px 0 6px;\n}\n.ac-cal__cell {\n  min-height: 80px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 5px 5px 4px;\n  overflow: hidden;\n  transition: border-color 0.12s;\n}\n.ac-cal__cell:hover {\n  border-color: #aec6e4;\n}\n.ac-cal__cell--other {\n  background: #f9fafb;\n}\n.ac-cal__cell--other .ac-cal__day {\n  color: #9ca3af;\n}\n.ac-cal__cell--today {\n  border-color: #185FA5;\n}\n.ac-cal__cell--today .ac-cal__day {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 50%;\n}\n.ac-cal__day {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 4px;\n  display: block;\n}\n.ac-cal__events {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ac-cal__event {\n  font-size: 10px;\n  padding: 2px 4px;\n  border-radius: 3px;\n  background: #E6F1FB;\n  color: #0C447C;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: default;\n}\n.ac-cal__event--dist {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-cal__event--hybr {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.wz-modal {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 620px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.wz-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-head__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E6F1FB;\n  color: #185FA5;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.wz-head__text {\n  flex: 1;\n}\n.wz-head__title {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-head__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.wz-close {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.wz-close:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.wz-stepper {\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-step {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.wz-step__circle {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 500;\n  flex-shrink: 0;\n  border: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  color: #9ca3af;\n  transition: all 0.2s;\n}\n.wz-step__circle.active {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.wz-step__circle.done {\n  background: #EAF3DE;\n  color: #27500A;\n  border-color: #97C459;\n}\n.wz-step__label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.wz-step__label.active {\n  color: #185FA5;\n}\n.wz-step__label.done {\n  color: #3B6D11;\n}\n.wz-step__line {\n  flex: 1;\n  height: 0.5px;\n  background: #e5e7eb;\n  margin: 0 8px;\n  min-width: 20px;\n}\n.wz-body {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.wz-body::-webkit-scrollbar {\n  width: 4px;\n}\n.wz-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.wz-body::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.wz-field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.wz-field--full {\n  grid-column: 1/-1;\n}\n.wz-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.wz-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-req {\n  color: #E24B4A;\n}\n.wz-input {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.wz-input:focus {\n  border-color: #185FA5;\n  box-shadow: 0 0 0 2px #E6F1FB;\n}\n.wz-input[readonly] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.wz-textarea {\n  resize: vertical;\n  min-height: 68px;\n  line-height: 1.5;\n}\n.wz-hint {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-domain-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.wz-domain-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.wz-domain-card i {\n  font-size: 20px;\n}\n.wz-domain-card span {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-domain-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.wz-domain-card.selected {\n  border-color: #185FA5;\n  background: #E6F1FB;\n}\n.wz-domain-card.selected span {\n  color: #0C447C;\n}\n.wz-strip {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 10px;\n}\n.wz-strip__hint {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.wz-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  border: 0.5px solid #85B7EB;\n  font-size: 12px;\n  color: #0C447C;\n}\n.wz-chip i {\n  font-size: 11px;\n  cursor: pointer;\n  color: #378ADD;\n}\n.wz-chip i:hover {\n  color: #0C447C;\n}\n.wz-pool {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 6px;\n}\n.wz-pool__search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-pool__search i {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.wz-pool__search input {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.wz-pool__list {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.wz-pool__list::-webkit-scrollbar {\n  width: 3px;\n}\n.wz-pool__list::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.wz-pool__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.wz-pool__item:last-child {\n  border-bottom: none;\n}\n.wz-pool__item:hover,\n.wz-pool__item.checked {\n  background: #f9fafb;\n}\n.wz-pool__check {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.wz-pool__check.on {\n  background: #185FA5;\n  border-color: #185FA5;\n  color: #fff;\n}\n.wz-pool__thumb {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.wz-pool__thumb[data-th=blue] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.wz-pool__thumb[data-th=teal] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.wz-pool__thumb[data-th=purple] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-pool__thumb[data-th=amber] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.wz-pool__thumb[data-th=coral] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.wz-pool__thumb[data-th=green] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.wz-pool__info {\n  flex: 1;\n  min-width: 0;\n}\n.wz-pool__name {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wz-pool__meta {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-pool__tag {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  background: #f3f4f6;\n  color: #4b5563;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.wz-pool__empty {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.wz-toggle-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 0.5px solid #f3f4f6;\n}\n.wz-toggle-row:last-child {\n  border-bottom: none;\n}\n.wz-toggle-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-toggle-sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.wz-toggle {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.wz-toggle::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.wz-toggle.on {\n  background: #185FA5;\n}\n.wz-toggle.on::after {\n  left: 19px;\n}\n.wz-info-banner {\n  display: flex;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #E6F1FB;\n  border-radius: 8px;\n  border: 0.5px solid #85B7EB;\n  margin-bottom: 12px;\n  font-size: 12px;\n  color: #0C447C;\n  line-height: 1.5;\n}\n.wz-info-banner i {\n  font-size: 15px;\n  color: #185FA5;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.wz-recap-card {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 10px;\n}\n.wz-recap-title {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.wz-recap-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-recap-row:last-child {\n  border-bottom: none;\n}\n.wz-rl {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-rv {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-recap-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.wz-rc {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.wz-error {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.wz-foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.wz-foot__info {\n  flex: 1;\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-btn-ghost {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.wz-btn-ghost:hover {\n  background: #f3f4f6;\n}\n.wz-btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #185FA5;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-primary i {\n  font-size: 13px;\n}\n.wz-btn-primary:hover {\n  opacity: 0.9;\n}\n.wz-btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.wz-btn-success {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #3B6D11;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-success i {\n  font-size: 13px;\n}\n.wz-btn-success:hover {\n  opacity: 0.9;\n}\n.wz-btn-success:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.cw-modal {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 600px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.cw-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.cw-head__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E1F5EE;\n  color: #0F6E56;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cw-head__text {\n  flex: 1;\n}\n.cw-head__title {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-head__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.cw-close {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.cw-close:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.cw-body {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.cw-body::-webkit-scrollbar {\n  width: 4px;\n}\n.cw-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.cw-body::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.cw-upload-zone {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 24px 16px;\n  border: 1.5px dashed #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  cursor: pointer;\n  margin-bottom: 16px;\n  transition: border-color 0.15s, background 0.15s;\n}\n.cw-upload-zone i {\n  font-size: 28px;\n  color: #9ca3af;\n}\n.cw-upload-zone span {\n  font-size: 13px;\n  color: #4b5563;\n  font-weight: 500;\n}\n.cw-upload-zone__hint {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 400;\n}\n.cw-upload-zone:hover {\n  border-color: #79C9AB;\n  background: #E1F5EE;\n}\n.cw-upload-zone:hover i {\n  color: #0F6E56;\n}\n.cw-field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.cw-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.cw-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-req {\n  color: #E24B4A;\n}\n.cw-input {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.cw-input:focus {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-input[readonly] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.cw-textarea {\n  resize: vertical;\n  min-height: 72px;\n  line-height: 1.5;\n}\n.cw-hint {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-toggle-inline {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 0;\n}\n.cw-toggle {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.cw-toggle::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.cw-toggle.on {\n  background: #0F6E56;\n}\n.cw-toggle.on::after {\n  left: 19px;\n}\n.cw-toggle-label {\n  font-size: 12px;\n  color: #4b5563;\n}\n.cw-section-label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 8px;\n}\n.cw-domain-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-domain-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.cw-domain-card i {\n  font-size: 20px;\n  color: #9ca3af;\n}\n.cw-domain-card span {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-domain-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-domain-card.selected {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-domain-card.selected i {\n  color: #0F6E56;\n}\n.cw-domain-card.selected span {\n  color: #0F6E56;\n}\n.cw-level-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-level-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.cw-level-card__label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-level-card__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.cw-level-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-level-card.selected {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-level-card.selected .cw-level-card__label {\n  color: #0F6E56;\n}\n.cw-level-card.selected .cw-level-card__sub {\n  color: rgb(148.5, 219.5, 194.65);\n}\n.cw-tags-box {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n  min-height: 36px;\n  padding: 6px 8px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.cw-tags-box:focus-within {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  background: #E1F5EE;\n  border: 0.5px solid #79C9AB;\n  font-size: 12px;\n  color: #0F6E56;\n}\n.cw-tag i {\n  font-size: 11px;\n  cursor: pointer;\n  color: #79C9AB;\n}\n.cw-tag i:hover {\n  color: #0F6E56;\n}\n.cw-tag-input {\n  border: none;\n  outline: none;\n  font-size: 12px;\n  color: #111827;\n  background: transparent;\n  flex: 1;\n  min-width: 100px;\n  font-family: inherit;\n}\n.cw-strip {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 8px;\n}\n.cw-strip-hint {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.cw-pool {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.cw-pool__search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.cw-pool__search i {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.cw-pool__search input {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.cw-pool__list {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.cw-pool__list::-webkit-scrollbar {\n  width: 3px;\n}\n.cw-pool__list::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.cw-pool__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.cw-pool__item:last-child {\n  border-bottom: none;\n}\n.cw-pool__item:hover,\n.cw-pool__item.checked {\n  background: #E1F5EE;\n}\n.cw-pool__check {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.cw-pool__check.on {\n  background: #0F6E56;\n  border-color: #0F6E56;\n  color: #fff;\n}\n.cw-pool__info {\n  flex: 1;\n  min-width: 0;\n}\n.cw-pool__name {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cw-pool__meta {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-pool__empty {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.cw-vis-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.cw-vis-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  cursor: pointer;\n  transition: all 0.15s;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cw-vis-card i {\n  font-size: 20px;\n  color: #9ca3af;\n  margin-bottom: 4px;\n}\n.cw-vis-card__label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-vis-card__sub {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-vis-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-vis-card.selected {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-vis-card.selected i {\n  color: #0F6E56;\n}\n.cw-vis-card.selected .cw-vis-card__label {\n  color: #0F6E56;\n}\n.cw-error {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.cw-foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.cw-btn-ghost {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.cw-btn-ghost:hover {\n  background: #f3f4f6;\n}\n.cw-btn-draft {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: #fff;\n  cursor: pointer;\n  transition: background 0.12s, border-color 0.12s;\n}\n.cw-btn-draft i {\n  font-size: 13px;\n}\n.cw-btn-draft:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.cw-btn-draft:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #0F6E56;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.cw-btn-primary i {\n  font-size: 13px;\n}\n.cw-btn-primary:hover {\n  opacity: 0.9;\n}\n.cw-btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .ac-card-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-skeletons {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .ac-card-grid {\n    grid-template-columns: 1fr;\n  }\n  .ac-kpi-row {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.ac-act--arch {\n  color: #BA7517;\n}\n.ac-act--arch:hover {\n  border-color: #BA7517;\n  color: #BA7517;\n  background: #FAEEDA;\n}\n.ac-act--people {\n  color: #185FA5;\n}\n.ac-act--people:hover {\n  border-color: #93C5FD;\n  color: #185FA5;\n  background: #DBEAFE;\n}\n.ac-act--warn {\n  color: #B45309;\n  border-color: #FCD34D;\n}\n.ac-act--warn:hover {\n  background: #FFFBEB;\n}\n.ac-act--ok {\n  color: #166534;\n  border-color: #86EFAC;\n}\n.ac-act--ok:hover {\n  background: #F0FDF4;\n}\n.ac-select {\n  height: 32px;\n  padding: 0 10px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n}\n.ac-table-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ac-course-img {\n  flex-shrink: 0;\n  width: 44px;\n  height: 32px;\n  border-radius: 6px;\n  overflow: hidden;\n  display: block;\n  background: #f3f4f6;\n}\n.ac-course-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-course-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  text-decoration: none;\n}\n.ac-course-title:hover {\n  color: #185FA5;\n  text-decoration: underline;\n}\n.ac-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #4b5563;\n  background: #f3f4f6;\n  border-radius: 20px;\n  padding: 2px 8px;\n}\n.ac-badge {\n  font-size: 11px;\n  font-weight: 500;\n  border-radius: 4px;\n  padding: 2px 7px;\n}\n.ac-badge--free {\n  background: #D1FAE5;\n  color: #065F46;\n}\n.ac-badge--paid {\n  color: #185FA5;\n  font-weight: 600;\n}\n.ac-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ac-confirm-modal {\n  background: #fff;\n  border-radius: 12px;\n  padding: 28px 32px;\n  max-width: 380px;\n  width: 90%;\n  text-align: center;\n}\n.ac-confirm-modal h4 {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 12px 0 6px;\n}\n.ac-confirm-modal p {\n  font-size: 13px;\n  color: #4b5563;\n  margin-bottom: 20px;\n}\n.ac-confirm-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n}\n.ac-confirm-icon--warn {\n  background: #FEF3C7;\n  color: #B45309;\n}\n.ac-confirm-icon--ok {\n  background: #D1FAE5;\n  color: #065F46;\n}\n.ac-confirm-btns {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n.ac-btn-ghost {\n  padding: 7px 18px;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  background: #f3f4f6;\n  font-size: 13px;\n  cursor: pointer;\n}\n.ac-btn-ghost:hover {\n  background: #e5e7eb;\n}\n.ac-btn-warn {\n  padding: 7px 18px;\n  border: none;\n  border-radius: 20px;\n  background: #F59E0B;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.ac-btn-warn:hover {\n  background: #D97706;\n}\n.ac-btn-ok {\n  padding: 7px 18px;\n  border: none;\n  border-radius: 20px;\n  background: #10B981;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.ac-btn-ok:hover {\n  background: #059669;\n}\n.ac-skeleton-row {\n  height: 48px;\n  background: #f3f4f6;\n  border-radius: 8px;\n  margin: 6px 14px;\n  animation: ac-pulse 1.2s ease-in-out infinite;\n}\n@keyframes ac-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.pm-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n  padding: 16px;\n}\n.pm-modal {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 820px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n}\n.pm-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.pm-head__icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #DBEAFE;\n  color: #185FA5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.pm-head__text {\n  flex: 1;\n  min-width: 0;\n}\n.pm-head__title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-head__sub {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.pm-close {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 4px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.pm-close:hover {\n  color: #111827;\n}\n.pm-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 20px;\n  font-size: 13px;\n}\n.pm-alert--ok {\n  background: #F0FDF4;\n  color: #166534;\n  border-bottom: 1px solid #4ADE80;\n}\n.pm-alert--err {\n  background: #FEF2F2;\n  color: #991B1B;\n  border-bottom: 1px solid #F87171;\n}\n.pm-body {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .pm-body {\n    flex-direction: column;\n  }\n}\n.pm-divider {\n  width: 1px;\n  background: #e5e7eb;\n  flex-shrink: 0;\n}\n@media (max-width: 600px) {\n  .pm-divider {\n    width: 100%;\n    height: 1px;\n  }\n}\n.pm-col {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 0;\n}\n.pm-col__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  flex-wrap: wrap;\n}\n.pm-col__title {\n  font-size: 12px;\n  font-weight: 600;\n  color: #374151;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  white-space: nowrap;\n}\n.pm-col__title i {\n  font-size: 14px;\n}\n.pm-search {\n  position: relative;\n  flex: 1;\n  min-width: 120px;\n  max-width: 180px;\n}\n.pm-search i {\n  position: absolute;\n  left: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 13px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.pm-search input {\n  width: 100%;\n  padding: 5px 8px 5px 26px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #f9fafb;\n  outline: none;\n}\n.pm-search input:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.pm-list {\n  overflow-y: auto;\n  flex: 1;\n  padding: 6px 0;\n}\n.pm-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 28px 16px;\n  font-size: 13px;\n  color: #9ca3af;\n}\n.pm-spin {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid #e5e7eb;\n  border-top-color: #185FA5;\n  border-radius: 50%;\n  animation: pm-spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n.pm-spin--sm {\n  width: 11px;\n  height: 11px;\n}\n@keyframes pm-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pm-empty {\n  text-align: center;\n  padding: 32px 16px;\n  color: #9ca3af;\n}\n.pm-empty i {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.5;\n}\n.pm-empty p {\n  font-size: 13px;\n  margin: 0;\n}\n.pm-user-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 16px;\n  transition: background 0.1s;\n}\n.pm-user-row:hover {\n  background: #f9fafb;\n}\n.pm-user-av {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #f3f4f6;\n  color: #4b5563;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.pm-user-av--blue {\n  background: #DBEAFE;\n  color: #185FA5;\n}\n.pm-user-info {\n  flex: 1;\n  min-width: 0;\n}\n.pm-user-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-user-email {\n  font-size: 11px;\n  color: #9ca3af;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-badge {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 9px;\n  border-radius: 20px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.pm-badge--ok {\n  background: #DCFCE7;\n  color: #166534;\n}\n.pm-enroll-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 26px;\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 500;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.pm-enroll-btn i {\n  font-size: 13px;\n}\n.pm-enroll-btn:not(:disabled):hover {\n  background: #DCFCE7;\n  color: #166534;\n  border-color: #86EFAC;\n}\n.pm-enroll-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pm-unenroll-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 26px;\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 500;\n  border: 1px solid #FECACA;\n  border-radius: 6px;\n  background: #FFF5F5;\n  color: #991B1B;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.pm-unenroll-btn i {\n  font-size: 13px;\n}\n.pm-unenroll-btn:not(:disabled):hover {\n  background: #FEE2E2;\n  color: #7F1D1D;\n  border-color: #FCA5A5;\n}\n.pm-unenroll-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pm-foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.pm-foot__info {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.pm-close-btn {\n  margin-left: auto;\n  display: inline-flex;\n  align-items: center;\n  height: 30px;\n  padding: 0 14px;\n  font-size: 13px;\n  font-weight: 500;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.pm-close-btn:hover {\n  background: #f3f4f6;\n}\n.cw-pool__item.checked,\n.cw-pool__item:hover {\n  background: #e6f1fb;\n}\n.cw-pool__check.on {\n  background: #185fa5;\n  border-color: #185fa5;\n  color: #fff;\n}\n.cw-pool-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 10px;\n}\n.cw-pool-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  background: #e6f1fb;\n  color: #185fa5;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.cw-pool-chip button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #185fa5;\n  padding: 0;\n  line-height: 1;\n  font-size: 13px;\n  display: flex;\n}\n.cw-pool-label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #6b7280;\n  margin-bottom: 6px;\n}\n.ac-select {\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  outline: none;\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.ac-select:focus {\n  border-color: #185fa5;\n}\n.wz-desc-box {\n  padding: 10px 12px;\n  font-size: 13px;\n  color: #374151;\n  background: #f9fafb;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  line-height: 1.6;\n}\n.wz-list {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.wz-list-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #374151;\n}\n.wz-list-item i {\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.wz-section-label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin: 16px 0 8px;\n}\n.ac-alert {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  position: relative;\n}\n.ac-alert-close {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n  font-size: 14px;\n}\n.ac-alert-close:hover {\n  opacity: 1;\n}\n.wz-spinner {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n  flex-shrink: 0;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.wz-btn-danger {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #dc2626;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-danger:hover {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=adminrh-parcours.component.css.map */\n'] }]
  }], () => [{ type: ParcoursService }, { type: FormationService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhParcoursComponent, { className: "AdminrhParcoursComponent", filePath: "app/features/adminrh/adminrh-parcours/adminrh-parcours.component.ts", lineNumber: 18 });
})();
export {
  AdminrhParcoursComponent
};
//# sourceMappingURL=chunk-7LXBW3Y7.js.map
