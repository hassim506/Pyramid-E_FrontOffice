import {
  CatalogueService
} from "./chunk-QZCSJ7I3.js";
import {
  httpErrorMessage
} from "./chunk-RL3SOXDI.js";
import {
  UserService
} from "./chunk-C3XHZ4TX.js";
import {
  FormationService
} from "./chunk-R5DFAXQH.js";
import {
  HasPermissionDirective
} from "./chunk-VS3ZYZPZ.js";
import "./chunk-HPF6XDYM.js";
import "./chunk-GD4TWLVQ.js";
import "./chunk-K7E3GT3E.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
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
  DecimalPipe,
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
  ɵɵpipe,
  ɵɵpipeBind2,
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
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-catalogue/adminrh-catalogue.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _c1 = () => ({ standalone: true });
function AdminrhCatalogueComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 93);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCatalogueModal());
    });
    \u0275\u0275element(1, "i", 94);
    \u0275\u0275text(2, "Nouveau catalogue ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_button_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_button_46_Template_button_click_0_listener() {
      const t_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedType = t_r4.value);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ac-chip--on", ctx_r1.selectedType === t_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4.label);
  }
}
function AdminrhCatalogueComponent_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_button_54_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275text(2, "Effacer ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 96);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_div_56_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.success = "");
    });
    \u0275\u0275element(4, "i", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.success, " ");
  }
}
function AdminrhCatalogueComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275element(1, "i", 98);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 96);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_div_57_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error = "");
    });
    \u0275\u0275element(4, "i", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.error, " ");
  }
}
function AdminrhCatalogueComponent_div_58_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 101);
  }
}
function AdminrhCatalogueComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275template(1, AdminrhCatalogueComponent_div_58_div_1_Template, 1, 0, "div", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function AdminrhCatalogueComponent_ng_container_59_div_1_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r9.short_description || cat_r9.description, " ");
  }
}
function AdminrhCatalogueComponent_ng_container_59_div_1_div_1_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2, " Certifiant ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_ng_container_59_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106)(1, "div", 107)(2, "div", 108);
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 109)(5, "div", 110);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 111);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AdminrhCatalogueComponent_ng_container_59_div_1_div_1_div_9_Template, 2, 1, "div", 112);
    \u0275\u0275elementStart(10, "div", 113)(11, "span");
    \u0275\u0275element(12, "i", 13);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275element(15, "i", 114);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275element(18, "i", 115);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 116)(21, "span");
    \u0275\u0275element(22, "i", 117);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, AdminrhCatalogueComponent_ng_container_59_div_1_div_1_span_24_Template, 3, 0, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 118)(26, "span", 119);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 120)(29, "button", 121);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_ng_container_59_div_1_div_1_Template_button_click_29_listener() {
      const cat_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openParticipants(cat_r9));
    });
    \u0275\u0275element(30, "i", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 123);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_ng_container_59_div_1_div_1_Template_button_click_31_listener() {
      const cat_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewCatalogue(cat_r9));
    });
    \u0275\u0275element(32, "i", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 125);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_ng_container_59_div_1_div_1_Template_button_click_33_listener() {
      const cat_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openFormationModal(cat_r9));
    });
    \u0275\u0275element(34, "i", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 126);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_ng_container_59_div_1_div_1_Template_button_click_35_listener() {
      const cat_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editCatalogue(cat_r9));
    });
    \u0275\u0275element(36, "i", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 128);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_ng_container_59_div_1_div_1_Template_button_click_37_listener() {
      const cat_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.archiveCatalogue(cat_r9));
    });
    \u0275\u0275element(38, "i", 88);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cat_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", cat_r9.couleur + "22");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", cat_r9.couleur + "33")("color", cat_r9.couleur);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getIconClass(cat_r9.icone));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-cat", cat_r9.type === "technique" ? "blue" : cat_r9.type === "management" ? "teal" : "default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTypeLabel(cat_r9.type), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r9.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cat_r9.short_description || cat_r9.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", cat_r9.nombre_formations, " formation", cat_r9.nombre_formations !== 1 ? "s" : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", cat_r9.duree_totale, "h total");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", cat_r9.metadata == null ? null : cat_r9.metadata.duree_moyenne, "h/form.");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", cat_r9.metadata == null ? null : cat_r9.metadata.niveau);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cat_r9.metadata == null ? null : cat_r9.metadata.certificat_disponible);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-s", cat_r9.est_publie ? "pub" : "draft");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r9.est_publie ? "Publi\xE9" : "Brouillon", " ");
  }
}
function AdminrhCatalogueComponent_ng_container_59_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275template(1, AdminrhCatalogueComponent_ng_container_59_div_1_div_1_Template, 39, 20, "div", 105);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredCatalogues)("ngForTrackBy", ctx_r1.trackByCatalogueId);
  }
}
function AdminrhCatalogueComponent_ng_container_59_div_2_ng_container_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 134);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_ng_container_59_div_2_ng_container_3_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openCatalogueModal());
    });
    \u0275\u0275element(1, "i", 94);
    \u0275\u0275text(2, "Cr\xE9er un catalogue ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_ng_container_59_div_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminrhCatalogueComponent_ng_container_59_div_2_ng_container_3_button_1_Template, 3, 0, "button", 133);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.catalogues.length === 0);
  }
}
function AdminrhCatalogueComponent_ng_container_59_div_2_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 135);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_ng_container_59_div_2_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275element(1, "i", 136);
    \u0275\u0275text(2, "Effacer les filtres ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_ng_container_59_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275element(1, "i", 3);
    \u0275\u0275text(2);
    \u0275\u0275template(3, AdminrhCatalogueComponent_ng_container_59_div_2_ng_container_3_Template, 2, 1, "ng-container", 131)(4, AdminrhCatalogueComponent_ng_container_59_div_2_button_4_Template, 3, 0, "button", 132);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.catalogues.length === 0 ? "Aucun catalogue cr\xE9\xE9" : "Aucun r\xE9sultat pour ces filtres", " ");
    \u0275\u0275advance();
    \u0275\u0275property("appHasPermission", "creer catalogues");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.catalogues.length > 0);
  }
}
function AdminrhCatalogueComponent_ng_container_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminrhCatalogueComponent_ng_container_59_div_1_Template, 2, 2, "div", 102)(2, AdminrhCatalogueComponent_ng_container_59_div_2_Template, 5, 3, "div", 103);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredCatalogues.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredCatalogues.length === 0);
  }
}
function AdminrhCatalogueComponent_span_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, " Titre requis (min. 3 caract\xE8res) ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_option_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 137);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r12 = ctx.$implicit;
    \u0275\u0275property("value", t_r12.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r12.label);
  }
}
function AdminrhCatalogueComponent_div_161_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138)(1, "div", 139);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 140);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 141);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", (((tmp_1_0 = ctx_r1.catalogueForm.get("couleur")) == null ? null : tmp_1_0.value) || "#3B82F6") + "22")("color", ((tmp_2_0 = ctx_r1.catalogueForm.get("couleur")) == null ? null : tmp_2_0.value) || "#3B82F6");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getIconClass((tmp_3_0 = ctx_r1.catalogueForm.get("icone")) == null ? null : tmp_3_0.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_4_0 = ctx_r1.catalogueForm.get("titre")) == null ? null : tmp_4_0.value) || "Titre du catalogue");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_5_0 = ctx_r1.catalogueForm.get("short_description")) == null ? null : tmp_5_0.value) || "Description courte");
  }
}
function AdminrhCatalogueComponent_span_166_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 142);
  }
}
function AdminrhCatalogueComponent_div_177_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Catalogue : ", ctx_r1.selectedCatalogue.titre);
  }
}
function AdminrhCatalogueComponent_div_181_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2, "Chargement des formations\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_ng_container_182_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 157);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.selectedFormationsInPool.length, ")");
  }
}
function AdminrhCatalogueComponent_ng_container_182_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 160);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 161);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_ng_container_182_div_4_span_1_Template_button_click_2_listener() {
      const f_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeSelectedFormation(f_r15.id));
    });
    \u0275\u0275element(3, "i", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r15.titre, " ");
  }
}
function AdminrhCatalogueComponent_ng_container_182_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 158);
    \u0275\u0275template(1, AdminrhCatalogueComponent_ng_container_182_div_4_span_1_Template, 4, 1, "span", 159);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.selectedFormationsInPool);
  }
}
function AdminrhCatalogueComponent_ng_container_182_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275text(1, " Cliquez sur une formation ci-dessous pour la s\xE9lectionner. ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_ng_container_182_div_13_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 168);
  }
}
function AdminrhCatalogueComponent_ng_container_182_div_13_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", f_r17.niveau);
  }
}
function AdminrhCatalogueComponent_ng_container_182_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 162);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_ng_container_182_div_13_Template_div_click_0_listener() {
      const f_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFormationInPool(f_r17.id));
    });
    \u0275\u0275elementStart(1, "div", 163);
    \u0275\u0275template(2, AdminrhCatalogueComponent_ng_container_182_div_13_i_2_Template, 1, 0, "i", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 165)(4, "div", 166);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 167);
    \u0275\u0275text(7);
    \u0275\u0275template(8, AdminrhCatalogueComponent_ng_container_182_div_13_span_8_Template, 2, 1, "span", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("checked", ctx_r1.isFormationSelected(f_r17.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r1.isFormationSelected(f_r17.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFormationSelected(f_r17.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r17.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", (f_r17.categorie == null ? null : f_r17.categorie.nom) || f_r17.type || "\u2014", "", f_r17.duree_totale ? " \xB7 " + f_r17.duree_totale + "h" : "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r17.niveau);
  }
}
function AdminrhCatalogueComponent_ng_container_182_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 169);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formations.length === 0 ? "Aucune formation disponible" : "Toutes les formations sont d\xE9j\xE0 dans ce catalogue", " ");
  }
}
function AdminrhCatalogueComponent_ng_container_182_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170);
    \u0275\u0275element(1, "i", 171);
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedCatalogue.titre);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" \u2014 ", ctx_r1.selectedCatalogue.formations.length, " formations \xB7 ", ctx_r1.selectedCatalogue.duree_totale, "h \xB7 ", ctx_r1.getTypeLabel(ctx_r1.selectedCatalogue.type), " ");
  }
}
function AdminrhCatalogueComponent_ng_container_182_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 144);
    \u0275\u0275text(2, " Formations s\xE9lectionn\xE9es ");
    \u0275\u0275template(3, AdminrhCatalogueComponent_ng_container_182_span_3_Template, 2, 1, "span", 145);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminrhCatalogueComponent_ng_container_182_div_4_Template, 2, 1, "div", 146)(5, AdminrhCatalogueComponent_ng_container_182_div_5_Template, 2, 0, "div", 147);
    \u0275\u0275elementStart(6, "div", 144);
    \u0275\u0275text(7, "Catalogue disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 148)(9, "div", 149);
    \u0275\u0275element(10, "i", 150);
    \u0275\u0275elementStart(11, "input", 151);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCatalogueComponent_ng_container_182_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formationsPoolSearch, $event) || (ctx_r1.formationsPoolSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 152);
    \u0275\u0275template(13, AdminrhCatalogueComponent_ng_container_182_div_13_Template, 9, 9, "div", 153)(14, AdminrhCatalogueComponent_ng_container_182_div_14_Template, 2, 1, "div", 154);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 155);
    \u0275\u0275text(16, " L'ordre des formations d\xE9finit la s\xE9quence du catalogue. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, AdminrhCatalogueComponent_ng_container_182_div_17_Template, 6, 4, "div", 156);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedFormationsInPool.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedFormationsInPool.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedFormationsInPool.length === 0);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formationsPoolSearch);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredFormationsPool);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredFormationsPool.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedCatalogue);
  }
}
function AdminrhCatalogueComponent_span_187_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 142);
  }
}
function AdminrhCatalogueComponent_ng_container_192_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 174);
    \u0275\u0275text(1, "Certifiant");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_ng_container_192_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 179)(1, "span", 180);
    \u0275\u0275text(2, "Co\xFBt moyen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 181);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 1, ctx_r1.getAveragePrice(ctx_r1.selectedCatalogue.formations), "1.0-0"), " F");
  }
}
function AdminrhCatalogueComponent_ng_container_192_div_49_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 175);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r19);
  }
}
function AdminrhCatalogueComponent_ng_container_192_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "label", 42);
    \u0275\u0275text(2, "Pr\xE9requis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 189);
    \u0275\u0275template(4, AdminrhCatalogueComponent_ng_container_192_div_49_span_4_Template, 2, 1, "span", 190);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.selectedCatalogue.metadata.prerequis);
  }
}
function AdminrhCatalogueComponent_ng_container_192_div_55_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 204);
    \u0275\u0275text(1, "Featured");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_ng_container_192_div_55_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 204);
    \u0275\u0275text(1, "Obligatoire");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_ng_container_192_div_55_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 193)(1, "div", 194)(2, "div", 195)(3, "span", 196);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 197);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminrhCatalogueComponent_ng_container_192_div_55_div_1_span_7_Template, 2, 0, "span", 198)(8, AdminrhCatalogueComponent_ng_container_192_div_55_div_1_span_8_Template, 2, 0, "span", 198);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 199);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 200)(12, "span");
    \u0275\u0275element(13, "i", 117);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275element(16, "i", 114);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 201)(19, "button", 202);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_ng_container_192_div_55_div_1_Template_button_click_19_listener() {
      const f_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.retirerFormation(ctx_r1.selectedCatalogue, f_r21));
    });
    \u0275\u0275element(20, "i", 203);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r21 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((f_r21.pivot == null ? null : f_r21.pivot.ordre) || 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-s", f_r21.est_publie ? "pub" : "draft");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r21.est_publie ? "Publi\xE9" : "Brouillon", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r21.pivot == null ? null : f_r21.pivot.est_featured);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r21.pivot == null ? null : f_r21.pivot.est_obligatoire);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r21.titre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", f_r21.niveau);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", f_r21.duree_totale, "h");
  }
}
function AdminrhCatalogueComponent_ng_container_192_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 191);
    \u0275\u0275template(1, AdminrhCatalogueComponent_ng_container_192_div_55_div_1_Template, 21, 8, "div", 192);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.selectedCatalogue.formations)("ngForTrackBy", ctx_r1.trackByFormationId);
  }
}
function AdminrhCatalogueComponent_ng_container_192_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 205);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2, "Aucune formation dans ce catalogue ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_ng_container_192_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 31)(2, "div", 172);
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33)(5, "div", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 36);
    \u0275\u0275element(10, "i", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 39)(12, "div", 173)(13, "span", 174);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 175);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 119);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, AdminrhCatalogueComponent_ng_container_192_span_19_Template, 2, 0, "span", 176);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 177)(21, "div", 178);
    \u0275\u0275text(22, "Statistiques");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 179)(24, "span", 180);
    \u0275\u0275text(25, "Formations incluses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 181);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 179)(29, "span", 180);
    \u0275\u0275text(30, "Dur\xE9e totale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 181);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 179)(34, "span", 180);
    \u0275\u0275text(35, "Dur\xE9e moyenne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 181);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 179)(39, "span", 180);
    \u0275\u0275text(40, "Formations mises en avant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 181);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(43, AdminrhCatalogueComponent_ng_container_192_div_43_Template, 6, 4, "div", 182);
    \u0275\u0275elementStart(44, "div", 179)(45, "span", 180);
    \u0275\u0275text(46, "Cr\xE9\xE9 le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 181);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(49, AdminrhCatalogueComponent_ng_container_192_div_49_Template, 5, 1, "div", 183);
    \u0275\u0275elementStart(50, "div", 184);
    \u0275\u0275text(51);
    \u0275\u0275elementStart(52, "button", 185);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_ng_container_192_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openFormationModal(ctx_r1.selectedCatalogue));
    });
    \u0275\u0275element(53, "i", 94);
    \u0275\u0275text(54, "Ajouter ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(55, AdminrhCatalogueComponent_ng_container_192_div_55_Template, 2, 2, "div", 186)(56, AdminrhCatalogueComponent_ng_container_192_div_56_Template, 3, 0, "div", 187);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 72)(58, "button", 73);
    \u0275\u0275text(59, "Fermer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 188);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_ng_container_192_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editCatalogue(ctx_r1.selectedCatalogue));
    });
    \u0275\u0275element(61, "i", 127);
    \u0275\u0275text(62, "Modifier ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.selectedCatalogue.couleur + "18");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.selectedCatalogue.couleur + "28")("color", ctx_r1.selectedCatalogue.couleur);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getIconClass(ctx_r1.selectedCatalogue.icone));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedCatalogue.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedCatalogue.short_description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getTypeLabel(ctx_r1.selectedCatalogue.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedCatalogue.metadata.niveau);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-s", ctx_r1.selectedCatalogue.est_publie ? "pub" : "draft");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedCatalogue.est_publie ? "Publi\xE9" : "Brouillon");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCatalogue.metadata.certificat_disponible);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.selectedCatalogue.nombre_formations);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedCatalogue.duree_totale, "h");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedCatalogue.metadata.duree_moyenne, "h");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getFeaturedFormationsCount(ctx_r1.selectedCatalogue.formations));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCatalogue.formations.length > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedCatalogue.created_at));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCatalogue.metadata.prerequis.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Formations incluses (", ctx_r1.selectedCatalogue.formations.length, ") ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.selectedCatalogue.formations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCatalogue.formations.length === 0);
  }
}
function AdminrhCatalogueComponent_div_193_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 230);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.inscriptionSuccess, " ");
  }
}
function AdminrhCatalogueComponent_div_193_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 231);
    \u0275\u0275element(1, "i", 98);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.inscriptionError, " ");
  }
}
function AdminrhCatalogueComponent_div_193_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 232);
    \u0275\u0275element(1, "span", 233);
    \u0275\u0275text(2, " Chargement... ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_div_193_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 234);
    \u0275\u0275element(1, "i", 122);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucun participant");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhCatalogueComponent_div_193_div_25_div_1_ng_container_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 245);
  }
}
function AdminrhCatalogueComponent_div_193_div_25_div_1_ng_container_8_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 246);
  }
}
function AdminrhCatalogueComponent_div_193_div_25_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 242);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_div_193_div_25_div_1_ng_container_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r23);
      const p_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.desinscrireUser(p_r24));
    });
    \u0275\u0275template(2, AdminrhCatalogueComponent_div_193_div_25_div_1_ng_container_8_span_2_Template, 1, 0, "span", 243)(3, AdminrhCatalogueComponent_div_193_div_25_div_1_ng_container_8_i_3_Template, 1, 0, "i", 244);
    \u0275\u0275text(4, " Retirer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.inscriptionPending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.inscriptionPending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.inscriptionPending);
  }
}
function AdminrhCatalogueComponent_div_193_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 237)(1, "div", 238);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 239)(4, "div", 240);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 241);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AdminrhCatalogueComponent_div_193_div_25_div_1_ng_container_8_Template, 5, 3, "ng-container", 131);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r24 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((p_r24.prenom || p_r24.nom || p_r24.name || p_r24.email || "?").charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r24.prenom && p_r24.nom ? p_r24.prenom + " " + p_r24.nom : p_r24.name || p_r24.nom || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r24.email);
    \u0275\u0275advance();
    \u0275\u0275property("appHasPermission", "desassigner formations");
  }
}
function AdminrhCatalogueComponent_div_193_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 235);
    \u0275\u0275template(1, AdminrhCatalogueComponent_div_193_div_25_div_1_Template, 9, 4, "div", 236);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.participantsFiltered)("ngForTrackBy", ctx_r1.trackByUserId);
  }
}
function AdminrhCatalogueComponent_div_193_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 232);
    \u0275\u0275element(1, "span", 233);
    \u0275\u0275text(2, " Chargement... ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_div_193_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 234);
    \u0275\u0275element(1, "i", 226);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Tous les employ\xE9s sont d\xE9j\xE0 inscrits");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhCatalogueComponent_div_193_div_37_div_1_ng_container_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 245);
  }
}
function AdminrhCatalogueComponent_div_193_div_37_div_1_ng_container_8_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 226);
  }
}
function AdminrhCatalogueComponent_div_193_div_37_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 248);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_div_193_div_37_div_1_ng_container_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r25);
      const u_r26 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.inscrireUser(u_r26));
    });
    \u0275\u0275template(2, AdminrhCatalogueComponent_div_193_div_37_div_1_ng_container_8_span_2_Template, 1, 0, "span", 243)(3, AdminrhCatalogueComponent_div_193_div_37_div_1_ng_container_8_i_3_Template, 1, 0, "i", 249);
    \u0275\u0275text(4, " Inscrire ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.inscriptionPending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.inscriptionPending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.inscriptionPending);
  }
}
function AdminrhCatalogueComponent_div_193_div_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 237)(1, "div", 247);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 239)(4, "div", 240);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 241);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AdminrhCatalogueComponent_div_193_div_37_div_1_ng_container_8_Template, 5, 3, "ng-container", 131);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r26 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((u_r26.prenom || u_r26.nom || u_r26.name || u_r26.email || "?").charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r26.prenom && u_r26.nom ? u_r26.prenom + " " + u_r26.nom : u_r26.name || u_r26.nom || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r26.email);
    \u0275\u0275advance();
    \u0275\u0275property("appHasPermission", "assigner formations");
  }
}
function AdminrhCatalogueComponent_div_193_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 235);
    \u0275\u0275template(1, AdminrhCatalogueComponent_div_193_div_37_div_1_Template, 9, 4, "div", 236);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.availableUsersFiltered)("ngForTrackBy", ctx_r1.trackByUserId);
  }
}
function AdminrhCatalogueComponent_div_193_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 206);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_div_193_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeParticipants());
    });
    \u0275\u0275elementStart(1, "div", 207);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_div_193_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 208)(3, "div", 209);
    \u0275\u0275element(4, "i", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 210)(6, "div", 211);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 212);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 213);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_div_193_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeParticipants());
    });
    \u0275\u0275element(11, "i", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, AdminrhCatalogueComponent_div_193_div_12_Template, 3, 1, "div", 214)(13, AdminrhCatalogueComponent_div_193_div_13_Template, 3, 1, "div", 215);
    \u0275\u0275elementStart(14, "div", 216)(15, "div", 217)(16, "div", 218)(17, "span", 219);
    \u0275\u0275element(18, "i", 11);
    \u0275\u0275text(19, " Inscrits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 220);
    \u0275\u0275element(21, "i", 150);
    \u0275\u0275elementStart(22, "input", 221);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCatalogueComponent_div_193_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.participantsSearch, $event) || (ctx_r1.participantsSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(23, AdminrhCatalogueComponent_div_193_div_23_Template, 3, 0, "div", 222)(24, AdminrhCatalogueComponent_div_193_div_24_Template, 4, 0, "div", 223)(25, AdminrhCatalogueComponent_div_193_div_25_Template, 2, 2, "div", 224);
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "div", 225);
    \u0275\u0275elementStart(27, "div", 217)(28, "div", 218)(29, "span", 219);
    \u0275\u0275element(30, "i", 226);
    \u0275\u0275text(31, " Inscrire un employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 220);
    \u0275\u0275element(33, "i", 150);
    \u0275\u0275elementStart(34, "input", 221);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCatalogueComponent_div_193_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.usersSearch, $event) || (ctx_r1.usersSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminrhCatalogueComponent_div_193_Template_input_ngModelChange_34_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyUsersFilter());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(35, AdminrhCatalogueComponent_div_193_div_35_Template, 3, 0, "div", 222)(36, AdminrhCatalogueComponent_div_193_div_36_Template, 4, 0, "div", 223)(37, AdminrhCatalogueComponent_div_193_div_37_Template, 2, 2, "div", 224);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 227)(39, "span", 228);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 229);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_div_193_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeParticipants());
    });
    \u0275\u0275text(42, "Fermer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedCatalogueForParticipants == null ? null : ctx_r1.selectedCatalogueForParticipants.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.participants.length, " participant(s) inscrit(s)");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.inscriptionSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.inscriptionError);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.participantsSearch);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(16, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.participantsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.participantsLoading && !ctx_r1.participantsFiltered.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.participantsLoading && ctx_r1.participantsFiltered.length);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.usersSearch);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(17, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.usersLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.usersLoading && !ctx_r1.availableUsersFiltered.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.usersLoading && ctx_r1.availableUsersFiltered.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.participants.length, " inscrit(s) \xB7 ", ctx_r1.availableUsers.length, " disponible(s)");
  }
}
function AdminrhCatalogueComponent_div_203_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedCatalogue.titre);
  }
}
var AdminrhCatalogueComponent = class _AdminrhCatalogueComponent {
  catalogueService;
  formationService;
  userService;
  formBuilder;
  // État général
  loading = false;
  saving = false;
  error = "";
  success = "";
  // Données
  catalogues = [];
  selectedCatalogue = null;
  // Données formations
  formations = [];
  formationsDisponibles = [];
  loadingFormations = false;
  // Multi-select pool pour ajout de formations
  formationsPoolSearch = "";
  selectedFormationIds = /* @__PURE__ */ new Set();
  // Formulaires
  catalogueForm;
  formationForm;
  editMode = false;
  // Filtres et recherche
  searchTerm = "";
  selectedType = "";
  selectedStatus = "";
  // Types et statuts pour les filtres
  types = [
    { value: "technique", label: "Technique" },
    { value: "management", label: "Management" },
    { value: "soft_skills", label: "Soft Skills" }
  ];
  // ── Modal participants ─────────────────────────────────────────
  participantsModalOpen = false;
  selectedCatalogueForParticipants = null;
  participants = [];
  participantsLoading = false;
  participantsSearch = "";
  availableUsers = [];
  availableUsersFiltered = [];
  usersSearch = "";
  usersLoading = false;
  inscriptionPending = false;
  inscriptionSuccess = "";
  inscriptionError = "";
  constructor(catalogueService, formationService, userService, formBuilder) {
    this.catalogueService = catalogueService;
    this.formationService = formationService;
    this.userService = userService;
    this.formBuilder = formBuilder;
    this.catalogueForm = this.formBuilder.group({
      titre: ["", [Validators.required, Validators.minLength(3)]],
      description: [""],
      short_description: [""],
      couleur: ["#3B82F6", Validators.required],
      icone: ["folder", Validators.required],
      ordre: [1, [Validators.required, Validators.min(1)]],
      type: ["technique", Validators.required],
      est_publie: [true],
      est_public: [true],
      inscription_requise: [false],
      // Métadonnées
      niveau: ["D\xE9butant", Validators.required],
      prerequis: [""],
      duree_moyenne: [30, [Validators.required, Validators.min(1)]],
      certificat_disponible: [false]
    });
    this.formationForm = this.formBuilder.group({
      formation_id: ["", Validators.required],
      ordre: [1, [Validators.required, Validators.min(1)]],
      est_featured: [false],
      est_obligatoire: [false],
      conditions_speciales: [""]
    });
  }
  ngOnInit() {
    this.loadCatalogues();
    this.loadFormations();
  }
  // ==================== CHARGEMENT DES DONNÉES ====================
  loadCatalogues() {
    this.loading = true;
    this.error = "";
    this.catalogueService.getCatalogues().subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status && response.catalogues) {
          this.catalogues = response.catalogues;
          console.log(`${this.catalogues.length} catalogues charg\xE9s`);
        } else {
          this.catalogues = [];
          this.error = "Aucun catalogue trouv\xE9.";
        }
      },
      error: (err) => {
        this.loading = false;
        console.error("Erreur chargement catalogues:", err);
        this.error = httpErrorMessage(err, "Impossible de charger les catalogues.");
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
  // ==================== GESTION DU FORMULAIRE CATALOGUE ====================
  openCatalogueModal() {
    this.editMode = false;
    this.selectedCatalogue = null;
    this.resetCatalogueForm();
    const modal = new bootstrap.Modal(document.getElementById("catalogueModal"));
    modal.show();
  }
  editCatalogue(catalogue) {
    this.editMode = true;
    this.selectedCatalogue = catalogue;
    this.catalogueForm.patchValue({
      titre: catalogue.titre,
      description: catalogue.description,
      short_description: catalogue.short_description,
      couleur: catalogue.couleur,
      icone: catalogue.icone,
      ordre: catalogue.ordre,
      type: catalogue.type,
      est_publie: catalogue.est_publie,
      est_public: catalogue.est_public,
      inscription_requise: catalogue.inscription_requise,
      niveau: catalogue.metadata.niveau,
      prerequis: catalogue.metadata.prerequis.join(", "),
      duree_moyenne: catalogue.metadata.duree_moyenne,
      certificat_disponible: catalogue.metadata.certificat_disponible
    });
    const modal = new bootstrap.Modal(document.getElementById("catalogueModal"));
    modal.show();
  }
  onSubmit() {
    if (this.catalogueForm.invalid) {
      this.markFormGroupTouched(this.catalogueForm);
      return;
    }
    this.saving = true;
    this.error = "";
    const formData = this.buildCatalogueData();
    const operation = this.editMode && this.selectedCatalogue ? this.catalogueService.updateCatalogue(this.selectedCatalogue.id, formData) : this.catalogueService.createCatalogue(formData);
    operation.subscribe({
      next: (response) => {
        this.saving = false;
        if (response.status) {
          this.success = this.editMode ? "Catalogue modifi\xE9 avec succ\xE8s!" : "Catalogue cr\xE9\xE9 avec succ\xE8s!";
          this.closeModal("catalogueModal");
          this.loadCatalogues();
          setTimeout(() => this.success = "", 5e3);
        }
      },
      error: (err) => {
        this.saving = false;
        console.error("Erreur sauvegarde:", err);
        this.error = err.error?.message || "Erreur lors de la sauvegarde.";
      }
    });
  }
  buildCatalogueData() {
    const formValue = this.catalogueForm.value;
    const user = JSON.parse(localStorage.getItem("pyramide_user") || "{}");
    const entrepriseId = user?.entreprise_id;
    return {
      titre: formValue.titre.trim(),
      description: formValue.description?.trim() || "",
      short_description: formValue.short_description?.trim() || "",
      couleur: formValue.couleur,
      icone: formValue.icone.trim(),
      ordre: parseInt(formValue.ordre),
      tags: [],
      metadata: {
        niveau: formValue.niveau,
        prerequis: formValue.prerequis ? formValue.prerequis.split(",").map((p) => p.trim()).filter((p) => p) : [],
        duree_moyenne: parseInt(formValue.duree_moyenne),
        certificat_disponible: Boolean(formValue.certificat_disponible)
      },
      est_publie: Boolean(formValue.est_publie),
      est_public: Boolean(formValue.est_public),
      inscription_requise: Boolean(formValue.inscription_requise),
      type: formValue.type,
      entreprise_id: entrepriseId
      // ✅ Ajouter l'entreprise_id
    };
  }
  // ==================== GESTION DES FORMATIONS DANS LE CATALOGUE ====================
  openFormationModal(catalogue) {
    this.selectedCatalogue = catalogue;
    this.selectedFormationIds = /* @__PURE__ */ new Set();
    this.formationsPoolSearch = "";
    this.updateFormationsDisponibles();
    this.formationForm.reset({
      formation_id: "",
      ordre: this.getNextOrdre(catalogue),
      est_featured: false,
      est_obligatoire: false,
      conditions_speciales: ""
    });
    const modal = new bootstrap.Modal(document.getElementById("formationModal"));
    modal.show();
  }
  updateFormationsDisponibles() {
    if (!this.selectedCatalogue)
      return;
    const formationsDejaIncluses = this.selectedCatalogue.formations.map((f) => f.id);
    this.formationsDisponibles = this.formations.filter((f) => !formationsDejaIncluses.includes(f.id) && f.est_publie !== false);
  }
  getNextOrdre(catalogue) {
    if (catalogue.formations.length === 0)
      return 1;
    const maxOrdre = Math.max(...catalogue.formations.map((f) => f.pivot?.ordre || 1));
    return maxOrdre + 1;
  }
  ajouterFormation() {
    if (this.formationForm.invalid || !this.selectedCatalogue) {
      this.markFormGroupTouched(this.formationForm);
      return;
    }
    this.saving = true;
    this.error = "";
    const formData = {
      formation_id: parseInt(this.formationForm.value.formation_id),
      ordre: parseInt(this.formationForm.value.ordre),
      est_featured: Boolean(this.formationForm.value.est_featured),
      est_obligatoire: Boolean(this.formationForm.value.est_obligatoire),
      conditions_speciales: this.formationForm.value.conditions_speciales?.trim() || void 0
    };
    this.catalogueService.ajouterFormation(this.selectedCatalogue.id, formData).subscribe({
      next: (response) => {
        this.saving = false;
        if (response.status) {
          this.success = "Formation ajout\xE9e au catalogue avec succ\xE8s!";
          this.closeModal("formationModal");
          this.loadCatalogues();
          setTimeout(() => this.success = "", 5e3);
        } else {
          this.error = response.message || "Erreur lors de l'ajout de la formation.";
        }
      },
      error: (err) => {
        this.saving = false;
        console.error("Erreur ajout formation:", err);
        this.error = err.error?.message || "Erreur lors de l'ajout de la formation.";
      }
    });
  }
  retirerFormation(catalogue, formation) {
    if (!confirm(`\xCAtes-vous s\xFBr de vouloir retirer "${formation.titre}" de ce catalogue ?`)) {
      return;
    }
    this.catalogueService.retirerFormation(catalogue.id, formation.id).subscribe({
      next: (response) => {
        if (response.status) {
          this.success = "Formation retir\xE9e du catalogue avec succ\xE8s!";
          this.loadCatalogues();
          setTimeout(() => this.success = "", 5e3);
        } else {
          this.error = response.message || "Erreur lors de la suppression de la formation.";
        }
      },
      error: (err) => {
        console.error("Erreur suppression formation:", err);
        this.error = err.error?.message || "Erreur lors de la suppression de la formation.";
      }
    });
  }
  // ==================== ACTIONS CATALOGUE ====================
  viewCatalogue(catalogue) {
    this.selectedCatalogue = catalogue;
    const modal = new bootstrap.Modal(document.getElementById("viewModal"));
    modal.show();
  }
  confirmDelete(catalogue) {
    this.selectedCatalogue = catalogue;
    const modal = new bootstrap.Modal(document.getElementById("deleteModal"));
    modal.show();
  }
  deleteCatalogue() {
    if (!this.selectedCatalogue)
      return;
    this.catalogueService.deleteCatalogue(this.selectedCatalogue.id).subscribe({
      next: (response) => {
        if (response.status) {
          this.success = "Catalogue supprim\xE9 avec succ\xE8s!";
          this.closeModal("deleteModal");
          this.loadCatalogues();
          setTimeout(() => this.success = "", 5e3);
        }
      },
      error: (err) => {
        console.error("Erreur suppression:", err);
        this.error = "Erreur lors de la suppression.";
      }
    });
  }
  archiveCatalogue(catalogue) {
    if (!catalogue)
      return;
    if (!confirm(`Archiver le catalogue "${catalogue.titre}" ?`))
      return;
    this.catalogueService.deleteCatalogue(catalogue.id).subscribe({
      next: () => {
        this.success = "Catalogue archiv\xE9.";
        this.loadCatalogues();
        setTimeout(() => this.success = "", 4e3);
      },
      error: () => {
        this.error = "Erreur lors de l'archivage.";
      }
    });
  }
  // ==================== UTILITAIRES ====================
  resetCatalogueForm() {
    this.catalogueForm.reset({
      titre: "",
      description: "",
      short_description: "",
      couleur: "#3B82F6",
      icone: "folder",
      ordre: 1,
      type: "technique",
      est_publie: true,
      est_public: true,
      inscription_requise: false,
      niveau: "D\xE9butant",
      prerequis: "",
      duree_moyenne: 30,
      certificat_disponible: false
    });
  }
  markFormGroupTouched(form) {
    Object.keys(form.controls).forEach((key) => {
      form.get(key)?.markAsTouched();
    });
  }
  closeModal(modalId) {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }
  }
  // ==================== FILTRES ====================
  get filteredCatalogues() {
    return this.catalogues.filter((catalogue) => {
      const matchesSearch = !this.searchTerm || catalogue.titre.toLowerCase().includes(this.searchTerm.toLowerCase()) || catalogue.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesType = !this.selectedType || catalogue.type === this.selectedType;
      const matchesStatus = !this.selectedStatus || this.selectedStatus === "active" && catalogue.est_publie || this.selectedStatus === "inactive" && !catalogue.est_publie;
      return matchesSearch && matchesType && matchesStatus;
    });
  }
  clearFilters() {
    this.searchTerm = "";
    this.selectedType = "";
    this.selectedStatus = "";
  }
  // ==================== HELPERS ====================
  getIconClass(iconeName) {
    return `isax isax-${iconeName}`;
  }
  getTypeLabel(type) {
    const typeObj = this.types.find((t) => t.value === type);
    return typeObj ? typeObj.label : type;
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
  getTotalPrice(formations) {
    return formations.reduce((total, formation) => {
      return total + parseFloat(formation.prix || "0");
    }, 0);
  }
  getAveragePrice(formations) {
    if (formations.length === 0)
      return 0;
    return this.getTotalPrice(formations) / formations.length;
  }
  getFeaturedFormationsCount(formations) {
    return formations.filter((f) => f.pivot?.est_featured).length;
  }
  getFormationById(id) {
    return this.formations.find((f) => f.id === id);
  }
  getSelectedFormationInfo() {
    const formationId = this.formationForm.get("formation_id")?.value;
    if (!formationId)
      return null;
    return this.getFormationById(parseInt(formationId)) || null;
  }
  // Fonctions de tracking pour optimiser le rendu
  // ==================== MULTI-SELECT POOL ====================
  get filteredFormationsPool() {
    const term = this.formationsPoolSearch.toLowerCase();
    if (!this.selectedCatalogue)
      return [];
    const alreadyIn = new Set(this.selectedCatalogue.formations.map((f) => f.id));
    const available = this.formations.filter((f) => !alreadyIn.has(f.id) && f.est_publie !== false);
    return term ? available.filter((f) => f.titre?.toLowerCase().includes(term) || f.categorie?.toLowerCase().includes(term)) : available;
  }
  isFormationSelected(id) {
    return this.selectedFormationIds.has(id);
  }
  toggleFormationInPool(id) {
    if (this.selectedFormationIds.has(id)) {
      this.selectedFormationIds.delete(id);
    } else {
      this.selectedFormationIds.add(id);
    }
  }
  removeSelectedFormation(id) {
    this.selectedFormationIds.delete(id);
  }
  get selectedFormationsInPool() {
    return this.formations.filter((f) => this.selectedFormationIds.has(f.id));
  }
  get selectedFormationCount() {
    return this.selectedFormationIds.size;
  }
  ajouterFormationsMultiples() {
    if (!this.selectedCatalogue || this.selectedFormationIds.size === 0)
      return;
    this.saving = true;
    this.error = "";
    const ids = Array.from(this.selectedFormationIds);
    let completed = 0;
    ids.forEach((formationId, i) => {
      const formData = {
        formation_id: formationId,
        ordre: this.selectedCatalogue.formations.length + i + 1,
        est_featured: false,
        est_obligatoire: false
      };
      this.catalogueService.ajouterFormation(this.selectedCatalogue.id, formData).subscribe({
        next: () => {
          completed++;
          if (completed === ids.length) {
            this.saving = false;
            this.success = `${ids.length} formation(s) ajout\xE9e(s) au catalogue avec succ\xE8s!`;
            this.closeModal("formationModal");
            this.selectedFormationIds = /* @__PURE__ */ new Set();
            this.formationsPoolSearch = "";
            this.loadCatalogues();
            setTimeout(() => this.success = "", 5e3);
          }
        },
        error: (err) => {
          completed++;
          this.saving = false;
          this.error = err.error?.message || "Erreur lors de l'ajout.";
        }
      });
    });
  }
  trackByFormationId(_index, formation) {
    return formation.id;
  }
  trackByCatalogueId(_index, catalogue) {
    return catalogue.id;
  }
  trackByUserId(_i, u) {
    return u.id;
  }
  // ==================== PARTICIPANTS MODAL ====================
  openParticipants(cat) {
    this.selectedCatalogueForParticipants = cat;
    this.participants = [];
    this.availableUsers = [];
    this.availableUsersFiltered = [];
    this.participantsSearch = "";
    this.usersSearch = "";
    this.inscriptionSuccess = "";
    this.inscriptionError = "";
    this.participantsModalOpen = true;
    this.loadParticipants(cat.id);
  }
  closeParticipants() {
    this.participantsModalOpen = false;
    this.selectedCatalogueForParticipants = null;
  }
  loadParticipants(catalogueId) {
    this.participantsLoading = true;
    this.catalogueService.getParticipantsCatalogue(catalogueId).subscribe({
      next: (res) => {
        this.participants = res.participants || [];
        this.participantsLoading = false;
        this.loadAvailableUsers();
      },
      error: () => {
        this.participantsLoading = false;
      }
    });
  }
  loadAvailableUsers() {
    this.usersLoading = true;
    this.userService.getMyUsers().subscribe({
      next: (res) => {
        const enrolled = new Set(this.participants.map((p) => p.id));
        const all = res.users || res.data || [];
        this.availableUsers = all.filter((u) => !enrolled.has(u.id));
        this.applyUsersFilter();
        this.usersLoading = false;
      },
      error: () => {
        this.usersLoading = false;
      }
    });
  }
  applyUsersFilter() {
    const q = this.usersSearch.toLowerCase();
    this.availableUsersFiltered = this.availableUsers.filter((u) => !q || u.name?.toLowerCase().includes(q) || u.nom?.toLowerCase().includes(q) || u.prenom?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q));
  }
  get participantsFiltered() {
    const q = this.participantsSearch.toLowerCase();
    return this.participants.filter((p) => !q || p.name?.toLowerCase().includes(q) || p.nom?.toLowerCase().includes(q) || p.prenom?.toLowerCase().includes(q) || p.email?.toLowerCase().includes(q));
  }
  inscrireUser(user) {
    if (!this.selectedCatalogueForParticipants || this.inscriptionPending)
      return;
    this.inscriptionPending = true;
    this.inscriptionSuccess = "";
    this.inscriptionError = "";
    this.catalogueService.inscrireUtilisateur(this.selectedCatalogueForParticipants.id, user.id).subscribe({
      next: () => {
        this.inscriptionPending = false;
        const displayName = user.prenom && user.nom ? `${user.prenom} ${user.nom}` : user.name || user.email;
        this.inscriptionSuccess = `${displayName} a \xE9t\xE9 inscrit(e) avec succ\xE8s.`;
        this.participants.push(user);
        this.availableUsers = this.availableUsers.filter((u) => u.id !== user.id);
        this.applyUsersFilter();
      },
      error: (err) => {
        this.inscriptionPending = false;
        this.inscriptionError = err?.error?.message || "Erreur lors de l'inscription.";
      }
    });
  }
  desinscrireUser(user) {
    if (!this.selectedCatalogueForParticipants || this.inscriptionPending)
      return;
    this.inscriptionPending = true;
    this.inscriptionSuccess = "";
    this.inscriptionError = "";
    this.catalogueService.desinscrireUtilisateur(this.selectedCatalogueForParticipants.id, user.id).subscribe({
      next: () => {
        this.inscriptionPending = false;
        const displayName = user.prenom && user.nom ? `${user.prenom} ${user.nom}` : user.name || user.email;
        this.inscriptionSuccess = `${displayName} a \xE9t\xE9 d\xE9sinscrit(e).`;
        this.participants = this.participants.filter((p) => p.id !== user.id);
        this.availableUsers.push(user);
        this.applyUsersFilter();
      },
      error: (err) => {
        this.inscriptionPending = false;
        this.inscriptionError = err?.error?.message || "Erreur lors de la d\xE9sinscription.";
      }
    });
  }
  getTotalFormationsCount() {
    return this.catalogues.reduce((sum, c) => sum + (c.nombre_formations || 0), 0);
  }
  getCertifiantCount() {
    return this.catalogues.filter((c) => c.metadata?.certificat_disponible).length;
  }
  getPubliedCount() {
    return this.catalogues.filter((c) => c.est_publie).length;
  }
  static \u0275fac = function AdminrhCatalogueComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhCatalogueComponent)(\u0275\u0275directiveInject(CatalogueService), \u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhCatalogueComponent, selectors: [["app-adminrh-catalogue"]], decls: 218, vars: 47, consts: [[1, "ac-shell"], [1, "ac-topbar"], [1, "ac-tab", "active"], [1, "isax", "isax-category"], [1, "ac-spacer"], ["type", "button", "class", "ac-add-btn", 3, "click", 4, "appHasPermission"], [1, "ac-kpi-row"], [1, "ac-kpi"], [1, "ac-kpi__label"], [1, "ac-kpi__val"], [1, "ac-kpi__delta", "neutral"], [1, "isax", "isax-tick-circle"], [1, "ac-kpi__delta", "up"], [1, "isax", "isax-book-1"], [1, "isax", "isax-medal-star"], [1, "ac-toolbar"], [1, "ac-search"], [1, "isax", "isax-search-normal-1", "ac-search__icon"], ["type", "search", "placeholder", "Rechercher un catalogue\u2026", 1, "ac-search__input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "ac-chip", 3, "click"], ["type", "button", "class", "ac-chip", 3, "ac-chip--on", "click", 4, "ngFor", "ngForOf"], [1, "ac-view-group", 2, "margin-left", "8px"], ["type", "button", 1, "ac-view-toggle", 3, "click"], ["type", "button", "class", "ac-chip", 3, "click", 4, "ngIf"], ["class", "ac-alert", "style", "color:#27500a;background:#eaf3de;border-color:#97c459;", 4, "ngIf"], ["class", "ac-alert", 4, "ngIf"], ["class", "ac-skeletons", 4, "ngIf"], [4, "ngIf"], ["id", "catalogueModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-scrollable", 2, "max-width", "620px"], [1, "cw-modal", "modal-content"], [1, "cw-head"], [1, "cw-head__icon"], [1, "cw-head__text"], [1, "cw-head__title"], [1, "cw-head__sub"], ["type", "button", "data-bs-dismiss", "modal", 1, "cw-close"], [1, "isax", "isax-close-circle"], [3, "ngSubmit", "formGroup"], [1, "cw-body"], [1, "cw-row"], [1, "cw-field", 2, "margin-bottom", "0", "grid-column", "span 2"], [1, "cw-label"], [1, "cw-req"], ["type", "text", "formControlName", "titre", "placeholder", "Ex: D\xE9veloppement Web Avanc\xE9", 1, "cw-input"], ["class", "cw-hint", 4, "ngIf"], [1, "cw-field"], ["type", "text", "formControlName", "short_description", "placeholder", "R\xE9sum\xE9 en une phrase", 1, "cw-input"], ["formControlName", "description", "placeholder", "Description d\xE9taill\xE9e du catalogue", 1, "cw-input", "cw-textarea"], [1, "cw-section-label"], [1, "cw-field", 2, "margin-bottom", "0"], ["type", "text", "formControlName", "icone", "placeholder", "folder, book, code\u2026", 1, "cw-input"], ["type", "color", "formControlName", "couleur", 1, "cw-input", 2, "height", "38px", "padding", "2px 4px"], [1, "cw-row", 2, "margin-top", "12px"], ["title", "Type de catalogue", "formControlName", "type", 1, "cw-input"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "formControlName", "ordre", "min", "1", 1, "cw-input"], [1, "cw-section-label", 2, "margin-top", "16px"], ["title", "Niveau du catalogue", "formControlName", "niveau", 1, "cw-input"], ["value", "D\xE9butant"], ["value", "Interm\xE9diaire"], ["value", "Avanc\xE9"], ["value", "Expert"], ["value", "Tous niveaux"], ["type", "number", "formControlName", "duree_moyenne", "min", "1", 1, "cw-input"], [1, "cw-field", 2, "margin-top", "12px"], ["type", "text", "formControlName", "prerequis", "placeholder", "HTML, CSS, JavaScript (s\xE9par\xE9s par des virgules)", 1, "cw-input"], [1, "cw-hint"], [1, "cw-toggle-inline"], [1, "cw-toggle", 3, "click"], [1, "cw-toggle-label"], ["class", "cat-preview", 4, "ngIf"], [1, "cw-foot"], ["type", "button", "data-bs-dismiss", "modal", 1, "cw-btn-ghost"], ["type", "submit", 1, "cw-btn-primary", 3, "disabled"], ["class", "cw-spinner", 4, "ngIf"], ["id", "formationModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-scrollable", 2, "max-width", "560px"], [1, "isax", "isax-add-circle"], ["class", "cw-head__sub", 4, "ngIf"], ["class", "ac-empty", "style", "padding:20px 0;", 4, "ngIf"], ["type", "button", 1, "cw-btn-primary", 3, "click", "disabled"], ["id", "viewModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-scrollable", 2, "max-width", "720px"], ["class", "pm-overlay", 3, "click", 4, "ngIf"], ["id", "deleteModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", 2, "max-width", "420px"], [1, "cw-head__icon", 2, "background", "#FAEEDA", "color", "#BA7517"], [1, "isax", "isax-archive"], [1, "wz-info-banner", 2, "background", "#fef2f2", "border-color", "#fca5a5", "color", "#991b1b"], [1, "isax", "isax-warning-2", 2, "color", "#dc2626"], [2, "flex", "1"], ["type", "button", 1, "cw-btn-arch", 3, "click"], ["type", "button", 1, "ac-add-btn", 3, "click"], [1, "isax", "isax-add"], [1, "ac-alert", 2, "color", "#27500a", "background", "#eaf3de", "border-color", "#97c459"], ["type", "button", 1, "ac-alert-close", 3, "click"], [1, "ac-alert"], [1, "isax", "isax-warning-2"], [1, "ac-skeletons"], ["class", "ac-skeleton-card", 4, "ngFor", "ngForOf"], [1, "ac-skeleton-card"], ["class", "ac-card-grid", 4, "ngIf"], ["class", "ac-empty", 4, "ngIf"], [1, "ac-card-grid"], ["class", "ac-fcard", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ac-fcard"], [1, "ac-fcard__thumb"], [1, "cat-icon", 2, "width", "48px", "height", "48px", "font-size", "22px", "border-radius", "12px", "display", "flex", "align-items", "center", "justify-content", "center"], [1, "ac-fcard__body"], [1, "ac-fcard__cat"], [1, "ac-fcard__title"], ["class", "ac-fcard__desc", 4, "ngIf"], [1, "ac-fcard__meta"], [1, "isax", "isax-clock"], [1, "isax", "isax-chart-square"], [1, "ac-fcard__meta", 2, "margin-top", "3px"], [1, "isax", "isax-ranking"], [1, "ac-fcard__footer"], [1, "ac-status"], [1, "ac-fcard__actions", 2, "margin-left", "auto"], ["type", "button", "title", "Participants", 1, "ac-act", "ac-act--people", 3, "click"], [1, "isax", "isax-people"], ["type", "button", "title", "Voir", 1, "ac-act", 3, "click"], [1, "isax", "isax-eye"], ["type", "button", "title", "Ajouter formation", 1, "ac-act", 3, "click"], ["type", "button", "title", "Modifier", 1, "ac-act", 3, "click"], [1, "isax", "isax-edit-2"], ["type", "button", "title", "Archiver", 1, "ac-act", "ac-act--arch", 3, "click"], [1, "ac-fcard__desc"], [1, "ac-empty"], [4, "appHasPermission"], ["class", "ac-chip", "style", "margin-top:10px;", 3, "click", 4, "ngIf"], ["type", "button", "class", "ac-add-btn", "style", "margin-top:10px;", 3, "click", 4, "ngIf"], ["type", "button", 1, "ac-add-btn", 2, "margin-top", "10px", 3, "click"], [1, "ac-chip", 2, "margin-top", "10px", 3, "click"], [1, "isax", "isax-refresh"], [3, "value"], [1, "cat-preview"], [1, "cat-icon", 2, "width", "44px", "height", "44px", "font-size", "20px"], [2, "font-size", "13px", "font-weight", "500", "color", "#111827"], [2, "font-size", "11px", "color", "#9ca3af"], [1, "cw-spinner"], [1, "ac-empty", 2, "padding", "20px 0"], [1, "cw-pool-label"], ["style", "color:#185fa5;font-weight:500;margin-left:4px;", 4, "ngIf"], ["class", "cw-pool-chips", 4, "ngIf"], ["style", "font-size:11px;color:#9ca3af;margin-bottom:10px;", 4, "ngIf"], [1, "cw-pool"], [1, "cw-pool__search"], [1, "isax", "isax-search-normal-1"], ["type", "search", "placeholder", "Rechercher une formation\u2026", 3, "ngModelChange", "ngModel"], [1, "cw-pool__list", 2, "max-height", "220px"], ["class", "cw-pool__item", 3, "checked", "click", 4, "ngFor", "ngForOf"], ["class", "cw-pool__empty", 4, "ngIf"], [2, "font-size", "11px", "color", "#9ca3af", "margin-bottom", "10px"], ["class", "wz-info-banner", "style", "background:#e1f5ee;border-color:#79c9ab;color:#085041;", 4, "ngIf"], [2, "color", "#185fa5", "font-weight", "500", "margin-left", "4px"], [1, "cw-pool-chips"], ["class", "cw-pool-chip", 4, "ngFor", "ngForOf"], [1, "cw-pool-chip"], ["type", "button", 3, "click"], [1, "cw-pool__item", 3, "click"], [1, "cw-pool__check"], ["class", "isax isax-tick", 4, "ngIf"], [1, "cw-pool__info"], [1, "cw-pool__name"], [1, "cw-pool__meta"], [1, "isax", "isax-tick"], [1, "cw-pool__empty"], [1, "wz-info-banner", 2, "background", "#e1f5ee", "border-color", "#79c9ab", "color", "#085041"], [1, "isax", "isax-info-circle", 2, "color", "#0f6e56"], [1, "cat-icon"], [2, "display", "flex", "gap", "8px", "flex-wrap", "wrap", "margin-bottom", "14px"], ["data-s", "plan", 1, "ac-status"], ["data-s", "done", 1, "ac-status"], ["class", "ac-status", "data-s", "plan", 4, "ngIf"], [1, "wz-recap-card"], [1, "wz-recap-title"], [1, "wz-recap-row"], [1, "wz-rl"], [1, "wz-rv"], ["class", "wz-recap-row", 4, "ngIf"], ["class", "cw-field", 4, "ngIf"], [1, "wz-section-label", 2, "margin-top", "16px"], ["type", "button", "data-bs-dismiss", "modal", 1, "ac-add-btn", 2, "padding", "3px 10px", "font-size", "11px", "float", "right", "margin-top", "-2px", 3, "click"], ["class", "ac-card-grid", "style", "grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px;margin-top:10px;", 4, "ngIf"], ["class", "ac-empty", "style", "padding:24px 14px;", 4, "ngIf"], ["type", "button", "data-bs-dismiss", "modal", 1, "cw-btn-primary", 3, "click"], [2, "display", "flex", "flex-wrap", "wrap", "gap", "5px"], ["class", "ac-status", "data-s", "done", 4, "ngFor", "ngForOf"], [1, "ac-card-grid", 2, "grid-template-columns", "repeat(auto-fill,minmax(220px,1fr))", "gap", "10px", "margin-top", "10px"], ["class", "ac-fcard", "style", "min-height:0;", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ac-fcard", 2, "min-height", "0"], [1, "ac-fcard__body", 2, "padding", "12px"], [2, "display", "flex", "align-items", "center", "gap", "6px", "margin-bottom", "6px"], ["data-s", "plan", 1, "ac-status", 2, "font-size", "10px"], [1, "ac-status", 2, "font-size", "10px"], ["class", "ac-status", "data-s", "pending", "style", "font-size:9px;", 4, "ngIf"], [1, "ac-fcard__title", 2, "font-size", "12px", "margin-bottom", "4px"], [1, "ac-fcard__meta", 2, "font-size", "10px"], [1, "ac-fcard__footer", 2, "padding", "6px 12px"], ["type", "button", "title", "Retirer", 1, "ac-act", "ac-act--del", 2, "margin-left", "auto", 3, "click"], [1, "isax", "isax-trash"], ["data-s", "pending", 1, "ac-status", 2, "font-size", "9px"], [1, "ac-empty", 2, "padding", "24px 14px"], [1, "pm-overlay", 3, "click"], [1, "pm-modal", 3, "click"], [1, "pm-head"], [1, "pm-head__icon"], [1, "pm-head__text"], [1, "pm-head__title"], [1, "pm-head__sub"], ["type", "button", 1, "pm-close", 3, "click"], ["class", "pm-alert pm-alert--ok", 4, "ngIf"], ["class", "pm-alert pm-alert--err", 4, "ngIf"], [1, "pm-body"], [1, "pm-col"], [1, "pm-col__header"], [1, "pm-col__title"], [1, "pm-search"], ["type", "search", "placeholder", "Rechercher...", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "pm-loading", 4, "ngIf"], ["class", "pm-empty", 4, "ngIf"], ["class", "pm-list", 4, "ngIf"], [1, "pm-divider"], [1, "isax", "isax-user-add"], [1, "pm-foot"], [1, "pm-foot__info"], ["type", "button", 1, "pm-close-btn", 3, "click"], [1, "pm-alert", "pm-alert--ok"], [1, "pm-alert", "pm-alert--err"], [1, "pm-loading"], [1, "pm-spin"], [1, "pm-empty"], [1, "pm-list"], ["class", "pm-user-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "pm-user-row"], [1, "pm-user-av"], [1, "pm-user-info"], [1, "pm-user-name"], [1, "pm-user-email"], ["type", "button", 1, "pm-unenroll-btn", 3, "click", "disabled"], ["class", "pm-spin pm-spin--sm", 4, "ngIf"], ["class", "isax isax-user-remove", 4, "ngIf"], [1, "pm-spin", "pm-spin--sm"], [1, "isax", "isax-user-remove"], [1, "pm-user-av", "pm-user-av--blue"], ["type", "button", 1, "pm-enroll-btn", 3, "click", "disabled"], ["class", "isax isax-user-add", 4, "ngIf"]], template: function AdminrhCatalogueComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "span", 4);
      \u0275\u0275template(6, AdminrhCatalogueComponent_button_6_Template, 3, 0, "button", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8);
      \u0275\u0275element(10, "i", 3);
      \u0275\u0275text(11, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 9);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 10);
      \u0275\u0275text(15, "catalogues");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8);
      \u0275\u0275element(18, "i", 11);
      \u0275\u0275text(19, "Publi\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 9);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 12);
      \u0275\u0275text(23, "actifs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 7)(25, "div", 8);
      \u0275\u0275element(26, "i", 13);
      \u0275\u0275text(27, "Formations totales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 9);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 10);
      \u0275\u0275text(31, "incluses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 7)(33, "div", 8);
      \u0275\u0275element(34, "i", 14);
      \u0275\u0275text(35, "Certifiants");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 9);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 10);
      \u0275\u0275text(39, "catalogues");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 15)(41, "div", 16);
      \u0275\u0275element(42, "i", 17);
      \u0275\u0275elementStart(43, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCatalogueComponent_Template_input_ngModelChange_43_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "button", 19);
      \u0275\u0275listener("click", function AdminrhCatalogueComponent_Template_button_click_44_listener() {
        return ctx.selectedType = "";
      });
      \u0275\u0275text(45, "Tous les types");
      \u0275\u0275elementEnd();
      \u0275\u0275template(46, AdminrhCatalogueComponent_button_46_Template, 2, 3, "button", 20);
      \u0275\u0275elementStart(47, "div", 21)(48, "button", 22);
      \u0275\u0275listener("click", function AdminrhCatalogueComponent_Template_button_click_48_listener() {
        return ctx.selectedStatus = "";
      });
      \u0275\u0275text(49, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "button", 22);
      \u0275\u0275listener("click", function AdminrhCatalogueComponent_Template_button_click_50_listener() {
        return ctx.selectedStatus = "active";
      });
      \u0275\u0275text(51, "Publi\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "button", 22);
      \u0275\u0275listener("click", function AdminrhCatalogueComponent_Template_button_click_52_listener() {
        return ctx.selectedStatus = "inactive";
      });
      \u0275\u0275text(53, "Brouillons");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(54, AdminrhCatalogueComponent_button_54_Template, 3, 0, "button", 23);
      \u0275\u0275element(55, "span", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(56, AdminrhCatalogueComponent_div_56_Template, 5, 1, "div", 24)(57, AdminrhCatalogueComponent_div_57_Template, 5, 1, "div", 25)(58, AdminrhCatalogueComponent_div_58_Template, 2, 2, "div", 26)(59, AdminrhCatalogueComponent_ng_container_59_Template, 3, 2, "ng-container", 27);
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
      \u0275\u0275element(72, "i", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "form", 38);
      \u0275\u0275listener("ngSubmit", function AdminrhCatalogueComponent_Template_form_ngSubmit_73_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(74, "div", 39)(75, "div", 40)(76, "div", 41)(77, "label", 42);
      \u0275\u0275text(78, "Titre ");
      \u0275\u0275elementStart(79, "span", 43);
      \u0275\u0275text(80, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(81, "input", 44);
      \u0275\u0275template(82, AdminrhCatalogueComponent_span_82_Template, 2, 0, "span", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 46)(84, "label", 42);
      \u0275\u0275text(85, "Description courte");
      \u0275\u0275elementEnd();
      \u0275\u0275element(86, "input", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 46)(88, "label", 42);
      \u0275\u0275text(89, "Description compl\xE8te");
      \u0275\u0275elementEnd();
      \u0275\u0275element(90, "textarea", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 49);
      \u0275\u0275text(92, "Apparence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div", 40)(94, "div", 50)(95, "label", 42);
      \u0275\u0275text(96, "Ic\xF4ne");
      \u0275\u0275elementEnd();
      \u0275\u0275element(97, "input", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "div", 50)(99, "label", 42);
      \u0275\u0275text(100, "Couleur");
      \u0275\u0275elementEnd();
      \u0275\u0275element(101, "input", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div", 53)(103, "div", 50)(104, "label", 42);
      \u0275\u0275text(105, "Type ");
      \u0275\u0275elementStart(106, "span", 43);
      \u0275\u0275text(107, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "select", 54);
      \u0275\u0275template(109, AdminrhCatalogueComponent_option_109_Template, 2, 2, "option", 55);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "div", 50)(111, "label", 42);
      \u0275\u0275text(112, "Ordre d'affichage");
      \u0275\u0275elementEnd();
      \u0275\u0275element(113, "input", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "div", 57);
      \u0275\u0275text(115, "M\xE9tadonn\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "div", 40)(117, "div", 50)(118, "label", 42);
      \u0275\u0275text(119, "Niveau ");
      \u0275\u0275elementStart(120, "span", 43);
      \u0275\u0275text(121, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "select", 58)(123, "option", 59);
      \u0275\u0275text(124, "D\xE9butant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "option", 60);
      \u0275\u0275text(126, "Interm\xE9diaire");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "option", 61);
      \u0275\u0275text(128, "Avanc\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "option", 62);
      \u0275\u0275text(130, "Expert");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "option", 63);
      \u0275\u0275text(132, "Tous niveaux");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(133, "div", 50)(134, "label", 42);
      \u0275\u0275text(135, "Dur\xE9e moyenne (heures)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(136, "input", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "div", 65)(138, "label", 42);
      \u0275\u0275text(139, "Pr\xE9requis");
      \u0275\u0275elementEnd();
      \u0275\u0275element(140, "input", 66);
      \u0275\u0275elementStart(141, "span", 67);
      \u0275\u0275text(142, "S\xE9parez les pr\xE9requis par des virgules");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "div", 57);
      \u0275\u0275text(144, "Options");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "div", 68)(146, "div", 69);
      \u0275\u0275listener("click", function AdminrhCatalogueComponent_Template_div_click_146_listener() {
        let tmp_0_0;
        return (tmp_0_0 = ctx.catalogueForm.get("est_publie")) == null ? null : tmp_0_0.setValue(!((tmp_0_0 = ctx.catalogueForm.get("est_publie")) == null ? null : tmp_0_0.value));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "span", 70);
      \u0275\u0275text(148, "Publi\xE9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "div", 68)(150, "div", 69);
      \u0275\u0275listener("click", function AdminrhCatalogueComponent_Template_div_click_150_listener() {
        let tmp_0_0;
        return (tmp_0_0 = ctx.catalogueForm.get("est_public")) == null ? null : tmp_0_0.setValue(!((tmp_0_0 = ctx.catalogueForm.get("est_public")) == null ? null : tmp_0_0.value));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "span", 70);
      \u0275\u0275text(152, "Public (visible par tous)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(153, "div", 68)(154, "div", 69);
      \u0275\u0275listener("click", function AdminrhCatalogueComponent_Template_div_click_154_listener() {
        let tmp_0_0;
        return (tmp_0_0 = ctx.catalogueForm.get("inscription_requise")) == null ? null : tmp_0_0.setValue(!((tmp_0_0 = ctx.catalogueForm.get("inscription_requise")) == null ? null : tmp_0_0.value));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "span", 70);
      \u0275\u0275text(156, "Inscription requise");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "div", 68)(158, "div", 69);
      \u0275\u0275listener("click", function AdminrhCatalogueComponent_Template_div_click_158_listener() {
        let tmp_0_0;
        return (tmp_0_0 = ctx.catalogueForm.get("certificat_disponible")) == null ? null : tmp_0_0.setValue(!((tmp_0_0 = ctx.catalogueForm.get("certificat_disponible")) == null ? null : tmp_0_0.value));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "span", 70);
      \u0275\u0275text(160, "Certificat disponible");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(161, AdminrhCatalogueComponent_div_161_Template, 8, 8, "div", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "div", 72)(163, "button", 73);
      \u0275\u0275text(164, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "button", 74);
      \u0275\u0275template(166, AdminrhCatalogueComponent_span_166_Template, 1, 0, "span", 75);
      \u0275\u0275text(167);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(168, "div", 76)(169, "div", 77)(170, "div", 30)(171, "div", 31)(172, "div", 32);
      \u0275\u0275element(173, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "div", 33)(175, "div", 34);
      \u0275\u0275text(176, "Ajouter des formations");
      \u0275\u0275elementEnd();
      \u0275\u0275template(177, AdminrhCatalogueComponent_div_177_Template, 2, 1, "div", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "button", 36);
      \u0275\u0275element(179, "i", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "div", 39);
      \u0275\u0275template(181, AdminrhCatalogueComponent_div_181_Template, 3, 0, "div", 80)(182, AdminrhCatalogueComponent_ng_container_182_Template, 18, 7, "ng-container", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "div", 72)(184, "button", 73);
      \u0275\u0275text(185, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "button", 81);
      \u0275\u0275listener("click", function AdminrhCatalogueComponent_Template_button_click_186_listener() {
        return ctx.ajouterFormationsMultiples();
      });
      \u0275\u0275template(187, AdminrhCatalogueComponent_span_187_Template, 1, 0, "span", 75);
      \u0275\u0275text(188);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(189, "div", 82)(190, "div", 83)(191, "div", 30);
      \u0275\u0275template(192, AdminrhCatalogueComponent_ng_container_192_Template, 63, 25, "ng-container", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(193, AdminrhCatalogueComponent_div_193_Template, 43, 18, "div", 84);
      \u0275\u0275elementStart(194, "div", 85)(195, "div", 86)(196, "div", 30)(197, "div", 31)(198, "div", 87);
      \u0275\u0275element(199, "i", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "div", 33)(201, "div", 34);
      \u0275\u0275text(202, "Archiver le catalogue");
      \u0275\u0275elementEnd();
      \u0275\u0275template(203, AdminrhCatalogueComponent_div_203_Template, 2, 1, "div", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "button", 36);
      \u0275\u0275element(205, "i", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "div", 39)(207, "div", 89);
      \u0275\u0275element(208, "i", 90);
      \u0275\u0275elementStart(209, "div");
      \u0275\u0275text(210, " Le catalogue sera archiv\xE9 et masqu\xE9. Ses associations avec les formations seront conserv\xE9es. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(211, "div", 72);
      \u0275\u0275element(212, "span", 91);
      \u0275\u0275elementStart(213, "button", 73);
      \u0275\u0275text(214, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "button", 92);
      \u0275\u0275listener("click", function AdminrhCatalogueComponent_Template_button_click_215_listener() {
        return ctx.archiveCatalogue(ctx.selectedCatalogue);
      });
      \u0275\u0275element(216, "i", 88);
      \u0275\u0275text(217, " Archiver ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_20_0;
      let tmp_22_0;
      let tmp_23_0;
      let tmp_24_0;
      let tmp_25_0;
      let tmp_26_0;
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Catalogues (", ctx.catalogues.length, ") ");
      \u0275\u0275advance(2);
      \u0275\u0275property("appHasPermission", "creer catalogues");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.catalogues.length);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.getPubliedCount());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.getTotalFormationsCount());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.getCertifiantCount());
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275classProp("ac-chip--on", ctx.selectedType === "");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.types);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedStatus === "");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedStatus === "active");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedStatus === "inactive");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.searchTerm || ctx.selectedType || ctx.selectedStatus);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.editMode ? "Modifier le catalogue" : "Nouveau catalogue");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.editMode ? "Mettez \xE0 jour les informations" : "Renseignez les informations du catalogue");
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.catalogueForm);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ((tmp_20_0 = ctx.catalogueForm.get("titre")) == null ? null : tmp_20_0.invalid) && ((tmp_20_0 = ctx.catalogueForm.get("titre")) == null ? null : tmp_20_0.touched));
      \u0275\u0275advance(27);
      \u0275\u0275property("ngForOf", ctx.types);
      \u0275\u0275advance(37);
      \u0275\u0275classProp("on", (tmp_22_0 = ctx.catalogueForm.get("est_publie")) == null ? null : tmp_22_0.value);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("on", (tmp_23_0 = ctx.catalogueForm.get("est_public")) == null ? null : tmp_23_0.value);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("on", (tmp_24_0 = ctx.catalogueForm.get("inscription_requise")) == null ? null : tmp_24_0.value);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("on", (tmp_25_0 = ctx.catalogueForm.get("certificat_disponible")) == null ? null : tmp_25_0.value);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", (tmp_26_0 = ctx.catalogueForm.get("icone")) == null ? null : tmp_26_0.value);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.catalogueForm.invalid || ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.editMode ? "Modifier" : "Cr\xE9er", " ");
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.selectedCatalogue);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loadingFormations);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingFormations);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.selectedFormationCount === 0 || ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" Ajouter (", ctx.selectedFormationCount, ") ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.selectedCatalogue);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.participantsModalOpen);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.selectedCatalogue);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, FormsModule, NgModel, HasPermissionDirective, DecimalPipe], styles: ['\n\n.ac-shell[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ac-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 16px;\n  font-size: 13px;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ac-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.ac-tab.active[_ngcontent-%COMP%] {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ac-tab[_ngcontent-%COMP%]:hover:not(.active) {\n  color: #111827;\n}\n.ac-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 160px;\n  max-width: 220px;\n}\n.ac-search__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ac-search__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 10px 6px 30px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ac-search__input[_ngcontent-%COMP%]:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.ac-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    background 0.15s,\n    color 0.15s;\n}\n.ac-chip[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ac-chip--on[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  border-color: #85B7EB;\n  color: #0C447C;\n}\n.ac-spacer[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.ac-view-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-btn.active[_ngcontent-%COMP%], \n.ac-view-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background: #185FA5;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.15s;\n}\n.ac-add-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  color: #fff;\n}\n.ac-add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ac-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  padding: 12px 14px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ac-kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.ac-kpi__label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: #4b5563;\n  margin-bottom: 4px;\n}\n.ac-kpi__label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ac-kpi__val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 500;\n  color: #111827;\n}\n.ac-kpi__delta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-top: 2px;\n}\n.ac-kpi__delta.up[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.ac-kpi__delta.down[_ngcontent-%COMP%] {\n  color: #A32D2D;\n}\n.ac-kpi__delta.neutral[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.ac-skeletons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n}\n.ac-skeleton-card[_ngcontent-%COMP%] {\n  height: 220px;\n  border-radius: 12px;\n  background: #f3f4f6;\n  animation: _ngcontent-%COMP%_ac-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_ac-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ac-alert[_ngcontent-%COMP%] {\n  margin: 12px 14px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n  background: #f9fafb;\n}\n.ac-fcard[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  transition: border-color 0.15s;\n}\n.ac-fcard[_ngcontent-%COMP%]:hover {\n  border-color: #aec6e4;\n}\n.ac-fcard__thumb[_ngcontent-%COMP%] {\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  position: relative;\n  overflow: hidden;\n}\n.ac-fcard__thumb[data-th=blue][_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.ac-fcard__thumb[data-th=teal][_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.ac-fcard__thumb[data-th=purple][_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.ac-fcard__thumb[data-th=amber][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ac-fcard__thumb[data-th=coral][_ngcontent-%COMP%] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.ac-fcard__thumb[data-th=green][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.ac-fcard__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-fcard__body[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  flex: 1;\n}\n.ac-fcard__cat[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 4px;\n}\n.ac-fcard__cat[data-cat=tech][_ngcontent-%COMP%] {\n  color: #0C447C;\n}\n.ac-fcard__cat[data-cat=rh][_ngcontent-%COMP%] {\n  color: #085041;\n}\n.ac-fcard__cat[data-cat=mgmt][_ngcontent-%COMP%] {\n  color: #534AB7;\n}\n.ac-fcard__cat[data-cat=fin][_ngcontent-%COMP%] {\n  color: #633806;\n}\n.ac-fcard__cat[data-cat=default][_ngcontent-%COMP%] {\n  color: #4b5563;\n}\n.ac-fcard__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 6px;\n  line-height: 1.3;\n}\n.ac-fcard__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ac-fcard__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-fcard__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ac-fcard__footer[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-top: 1px solid #f3f4f6;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-fcard__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-left: auto;\n}\n.ac-status[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.ac-status[data-s=pub][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=draft][_ngcontent-%COMP%] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=pending][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-status[data-s=plan][_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #3730A3;\n}\n.ac-status[data-s=live][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=done][_ngcontent-%COMP%] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=cancel][_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #991B1B;\n}\n.ac-prog[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0 6px;\n}\n.ac-prog__bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: #f3f4f6;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ac-prog__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  background: #185FA5;\n}\n.ac-prog__txt[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9ca3af;\n  text-align: right;\n  margin-top: 2px;\n}\n.ac-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.ac-act[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-act[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-act--del[_ngcontent-%COMP%] {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ac-act--del[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.ac-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.ac-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ac-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ac-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ac-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.ac-table-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n}\n.ac-table-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.ac-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 14px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ac-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n}\n.ac-empty--span[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.ac-empty-tab[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 14px;\n  gap: 12px;\n  color: #9ca3af;\n}\n.ac-empty-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.ac-empty-tab[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ac-pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ac-pager__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ac-pager__btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.ac-pager__btn[_ngcontent-%COMP%] {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ac-pager__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ac-pager__btn.active[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ac-pager__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ac-toolbar--chips[_ngcontent-%COMP%] {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-top: none;\n  background: #fff;\n  gap: 6px;\n}\n.ac-view-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.ac-view-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ac-view-toggle.active[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #111827;\n  font-weight: 500;\n}\n.ac-view-toggle[_ngcontent-%COMP%]:hover:not(.active) {\n  background: #f9fafb;\n}\n.ac-sessions-list[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  background: #f9fafb;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ac-session-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  transition: border-color 0.15s;\n}\n.ac-session-row[_ngcontent-%COMP%]:hover {\n  border-color: #aec6e4;\n}\n.ac-session-date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 40px;\n}\n.ac-session-date__day[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1;\n}\n.ac-session-date__month[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.ac-session-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ac-session-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ac-session-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 3px;\n  flex-wrap: wrap;\n}\n.ac-session-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-session-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ac-session-badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.ac-session-places[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  white-space: nowrap;\n}\n.ac-cal[_ngcontent-%COMP%] {\n  padding: 12px 14px 14px;\n  background: #f9fafb;\n}\n.ac-cal__nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.ac-cal__nav-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 14px;\n  color: #4b5563;\n  transition: background 0.12s;\n}\n.ac-cal__nav-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-cal__nav-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n  text-transform: capitalize;\n}\n.ac-cal__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 4px;\n}\n.ac-cal__head[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 4px 0 6px;\n}\n.ac-cal__cell[_ngcontent-%COMP%] {\n  min-height: 80px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 5px 5px 4px;\n  overflow: hidden;\n  transition: border-color 0.12s;\n}\n.ac-cal__cell[_ngcontent-%COMP%]:hover {\n  border-color: #aec6e4;\n}\n.ac-cal__cell--other[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.ac-cal__cell--other[_ngcontent-%COMP%]   .ac-cal__day[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.ac-cal__cell--today[_ngcontent-%COMP%] {\n  border-color: #185FA5;\n}\n.ac-cal__cell--today[_ngcontent-%COMP%]   .ac-cal__day[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 50%;\n}\n.ac-cal__day[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 4px;\n  display: block;\n}\n.ac-cal__events[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ac-cal__event[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 4px;\n  border-radius: 3px;\n  background: #E6F1FB;\n  color: #0C447C;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: default;\n}\n.ac-cal__event--dist[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-cal__event--hybr[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.wz-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 620px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.wz-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-head__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E6F1FB;\n  color: #185FA5;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.wz-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.wz-head__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-head__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.wz-close[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.wz-close[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.wz-stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.wz-step__circle[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 500;\n  flex-shrink: 0;\n  border: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  color: #9ca3af;\n  transition: all 0.2s;\n}\n.wz-step__circle.active[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.wz-step__circle.done[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n  border-color: #97C459;\n}\n.wz-step__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.wz-step__label.active[_ngcontent-%COMP%] {\n  color: #185FA5;\n}\n.wz-step__label.done[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.wz-step__line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 0.5px;\n  background: #e5e7eb;\n  margin: 0 8px;\n  min-width: 20px;\n}\n.wz-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.wz-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.wz-field--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.wz-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.wz-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-req[_ngcontent-%COMP%] {\n  color: #E24B4A;\n}\n.wz-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.wz-input[_ngcontent-%COMP%]:focus {\n  border-color: #185FA5;\n  box-shadow: 0 0 0 2px #E6F1FB;\n}\n.wz-input[readonly][_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.wz-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 68px;\n  line-height: 1.5;\n}\n.wz-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-domain-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.wz-domain-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.wz-domain-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.wz-domain-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-domain-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.wz-domain-card.selected[_ngcontent-%COMP%] {\n  border-color: #185FA5;\n  background: #E6F1FB;\n}\n.wz-domain-card.selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0C447C;\n}\n.wz-strip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 10px;\n}\n.wz-strip__hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.wz-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  border: 0.5px solid #85B7EB;\n  font-size: 12px;\n  color: #0C447C;\n}\n.wz-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  cursor: pointer;\n  color: #378ADD;\n}\n.wz-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #0C447C;\n}\n.wz-pool[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 6px;\n}\n.wz-pool__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-pool__search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.wz-pool__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.wz-pool__list[_ngcontent-%COMP%] {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.wz-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.wz-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.wz-pool__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.wz-pool__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.wz-pool__item[_ngcontent-%COMP%]:hover, \n.wz-pool__item.checked[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.wz-pool__check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.wz-pool__check.on[_ngcontent-%COMP%] {\n  background: #185FA5;\n  border-color: #185FA5;\n  color: #fff;\n}\n.wz-pool__thumb[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.wz-pool__thumb[data-th=blue][_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.wz-pool__thumb[data-th=teal][_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.wz-pool__thumb[data-th=purple][_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-pool__thumb[data-th=amber][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.wz-pool__thumb[data-th=coral][_ngcontent-%COMP%] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.wz-pool__thumb[data-th=green][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.wz-pool__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.wz-pool__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wz-pool__meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-pool__tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  background: #f3f4f6;\n  color: #4b5563;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.wz-pool__empty[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.wz-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 0.5px solid #f3f4f6;\n}\n.wz-toggle-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.wz-toggle-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-toggle-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.wz-toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.wz-toggle[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.wz-toggle.on[_ngcontent-%COMP%] {\n  background: #185FA5;\n}\n.wz-toggle.on[_ngcontent-%COMP%]::after {\n  left: 19px;\n}\n.wz-info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #E6F1FB;\n  border-radius: 8px;\n  border: 0.5px solid #85B7EB;\n  margin-bottom: 12px;\n  font-size: 12px;\n  color: #0C447C;\n  line-height: 1.5;\n}\n.wz-info-banner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #185FA5;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.wz-recap-card[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 10px;\n}\n.wz-recap-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.wz-recap-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-recap-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.wz-rl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-rv[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-recap-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.wz-rc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.wz-error[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.wz-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.wz-foot__info[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-btn-ghost[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.wz-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.wz-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #185FA5;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.wz-btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.wz-btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.wz-btn-success[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #3B6D11;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.wz-btn-success[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.wz-btn-success[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.cw-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 600px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.cw-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.cw-head__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E1F5EE;\n  color: #0F6E56;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cw-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.cw-head__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-head__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.cw-close[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.cw-close[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.cw-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n  max-height: calc(80vh - 120px);\n}\n.cw-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.cw-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.cw-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.cw-upload-zone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 24px 16px;\n  border: 1.5px dashed #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  cursor: pointer;\n  margin-bottom: 16px;\n  transition: border-color 0.15s, background 0.15s;\n}\n.cw-upload-zone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #9ca3af;\n}\n.cw-upload-zone[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n  font-weight: 500;\n}\n.cw-upload-zone__hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 400;\n}\n.cw-upload-zone[_ngcontent-%COMP%]:hover {\n  border-color: #79C9AB;\n  background: #E1F5EE;\n}\n.cw-upload-zone[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.cw-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.cw-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-req[_ngcontent-%COMP%] {\n  color: #E24B4A;\n}\n.cw-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.cw-input[_ngcontent-%COMP%]:focus {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-input[readonly][_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.cw-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 72px;\n  line-height: 1.5;\n}\n.cw-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-toggle-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 0;\n}\n.cw-toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.cw-toggle[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.cw-toggle.on[_ngcontent-%COMP%] {\n  background: #0F6E56;\n}\n.cw-toggle.on[_ngcontent-%COMP%]::after {\n  left: 19px;\n}\n.cw-toggle-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4b5563;\n}\n.cw-section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 8px;\n}\n.cw-domain-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-domain-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.cw-domain-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #9ca3af;\n}\n.cw-domain-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-domain-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-domain-card.selected[_ngcontent-%COMP%] {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-domain-card.selected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-domain-card.selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-level-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-level-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.cw-level-card__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-level-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.cw-level-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-level-card.selected[_ngcontent-%COMP%] {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-level-card.selected[_ngcontent-%COMP%]   .cw-level-card__label[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-level-card.selected[_ngcontent-%COMP%]   .cw-level-card__sub[_ngcontent-%COMP%] {\n  color: rgb(148.5, 219.5, 194.65);\n}\n.cw-tags-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n  min-height: 36px;\n  padding: 6px 8px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.cw-tags-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  background: #E1F5EE;\n  border: 0.5px solid #79C9AB;\n  font-size: 12px;\n  color: #0F6E56;\n}\n.cw-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  cursor: pointer;\n  color: #79C9AB;\n}\n.cw-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #0F6E56;\n}\n.cw-tag-input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 12px;\n  color: #111827;\n  background: transparent;\n  flex: 1;\n  min-width: 100px;\n  font-family: inherit;\n}\n.cw-strip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 8px;\n}\n.cw-strip-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.cw-pool[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.cw-pool__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.cw-pool__search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.cw-pool__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.cw-pool__list[_ngcontent-%COMP%] {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.cw-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.cw-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.cw-pool__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.cw-pool__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cw-pool__item[_ngcontent-%COMP%]:hover, \n.cw-pool__item.checked[_ngcontent-%COMP%] {\n  background: #E1F5EE;\n}\n.cw-pool__check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.cw-pool__check.on[_ngcontent-%COMP%] {\n  background: #0F6E56;\n  border-color: #0F6E56;\n  color: #fff;\n}\n.cw-pool__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cw-pool__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cw-pool__meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-pool__empty[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.cw-vis-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.cw-vis-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  cursor: pointer;\n  transition: all 0.15s;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cw-vis-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #9ca3af;\n  margin-bottom: 4px;\n}\n.cw-vis-card__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-vis-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-vis-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-vis-card.selected[_ngcontent-%COMP%] {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-vis-card.selected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-vis-card.selected[_ngcontent-%COMP%]   .cw-vis-card__label[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-error[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.cw-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.cw-btn-ghost[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.cw-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.cw-btn-draft[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: #fff;\n  cursor: pointer;\n  transition: background 0.12s, border-color 0.12s;\n}\n.cw-btn-draft[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.cw-btn-draft[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.cw-btn-draft[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #0F6E56;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.cw-btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.cw-btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.cw-btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .ac-card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-skeletons[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .ac-card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ac-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.ac-act--arch[_ngcontent-%COMP%] {\n  color: #BA7517;\n}\n.ac-act--arch[_ngcontent-%COMP%]:hover {\n  border-color: #BA7517;\n  color: #BA7517;\n  background: #FAEEDA;\n}\n.ac-act--people[_ngcontent-%COMP%] {\n  color: #185FA5;\n}\n.ac-act--people[_ngcontent-%COMP%]:hover {\n  border-color: #93C5FD;\n  color: #185FA5;\n  background: #DBEAFE;\n}\n.ac-act--warn[_ngcontent-%COMP%] {\n  color: #B45309;\n  border-color: #FCD34D;\n}\n.ac-act--warn[_ngcontent-%COMP%]:hover {\n  background: #FFFBEB;\n}\n.ac-act--ok[_ngcontent-%COMP%] {\n  color: #166534;\n  border-color: #86EFAC;\n}\n.ac-act--ok[_ngcontent-%COMP%]:hover {\n  background: #F0FDF4;\n}\n.ac-select[_ngcontent-%COMP%] {\n  height: 32px;\n  padding: 0 10px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n}\n.ac-table-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ac-course-img[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 44px;\n  height: 32px;\n  border-radius: 6px;\n  overflow: hidden;\n  display: block;\n  background: #f3f4f6;\n}\n.ac-course-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-course-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  text-decoration: none;\n}\n.ac-course-title[_ngcontent-%COMP%]:hover {\n  color: #185FA5;\n  text-decoration: underline;\n}\n.ac-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #4b5563;\n  background: #f3f4f6;\n  border-radius: 20px;\n  padding: 2px 8px;\n}\n.ac-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  border-radius: 4px;\n  padding: 2px 7px;\n}\n.ac-badge--free[_ngcontent-%COMP%] {\n  background: #D1FAE5;\n  color: #065F46;\n}\n.ac-badge--paid[_ngcontent-%COMP%] {\n  color: #185FA5;\n  font-weight: 600;\n}\n.ac-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ac-confirm-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 28px 32px;\n  max-width: 380px;\n  width: 90%;\n  text-align: center;\n}\n.ac-confirm-modal[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 12px 0 6px;\n}\n.ac-confirm-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n  margin-bottom: 20px;\n}\n.ac-confirm-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n}\n.ac-confirm-icon--warn[_ngcontent-%COMP%] {\n  background: #FEF3C7;\n  color: #B45309;\n}\n.ac-confirm-icon--ok[_ngcontent-%COMP%] {\n  background: #D1FAE5;\n  color: #065F46;\n}\n.ac-confirm-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n.ac-btn-ghost[_ngcontent-%COMP%] {\n  padding: 7px 18px;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  background: #f3f4f6;\n  font-size: 13px;\n  cursor: pointer;\n}\n.ac-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.ac-btn-warn[_ngcontent-%COMP%] {\n  padding: 7px 18px;\n  border: none;\n  border-radius: 20px;\n  background: #F59E0B;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.ac-btn-warn[_ngcontent-%COMP%]:hover {\n  background: #D97706;\n}\n.ac-btn-ok[_ngcontent-%COMP%] {\n  padding: 7px 18px;\n  border: none;\n  border-radius: 20px;\n  background: #10B981;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.ac-btn-ok[_ngcontent-%COMP%]:hover {\n  background: #059669;\n}\n.ac-skeleton-row[_ngcontent-%COMP%] {\n  height: 48px;\n  background: #f3f4f6;\n  border-radius: 8px;\n  margin: 6px 14px;\n  animation: _ngcontent-%COMP%_ac-pulse 1.2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_ac-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.pm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n  padding: 16px;\n}\n.pm-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 820px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n}\n.pm-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.pm-head__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #DBEAFE;\n  color: #185FA5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.pm-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pm-head__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-head__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.pm-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 4px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.pm-close[_ngcontent-%COMP%]:hover {\n  color: #111827;\n}\n.pm-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 20px;\n  font-size: 13px;\n}\n.pm-alert--ok[_ngcontent-%COMP%] {\n  background: #F0FDF4;\n  color: #166534;\n  border-bottom: 1px solid #4ADE80;\n}\n.pm-alert--err[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #991B1B;\n  border-bottom: 1px solid #F87171;\n}\n.pm-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .pm-body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.pm-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  background: #e5e7eb;\n  flex-shrink: 0;\n}\n@media (max-width: 600px) {\n  .pm-divider[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 1px;\n  }\n}\n.pm-col[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 0;\n}\n.pm-col__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  flex-wrap: wrap;\n}\n.pm-col__title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #374151;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  white-space: nowrap;\n}\n.pm-col__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.pm-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 120px;\n  max-width: 180px;\n}\n.pm-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 13px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.pm-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 8px 5px 26px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #f9fafb;\n  outline: none;\n}\n.pm-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.pm-list[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  flex: 1;\n  padding: 6px 0;\n}\n.pm-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 28px 16px;\n  font-size: 13px;\n  color: #9ca3af;\n}\n.pm-spin[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid #e5e7eb;\n  border-top-color: #185FA5;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pm-spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n.pm-spin--sm[_ngcontent-%COMP%] {\n  width: 11px;\n  height: 11px;\n}\n@keyframes _ngcontent-%COMP%_pm-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pm-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n  color: #9ca3af;\n}\n.pm-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.5;\n}\n.pm-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0;\n}\n.pm-user-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 16px;\n  transition: background 0.1s;\n}\n.pm-user-row[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.pm-user-av[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #f3f4f6;\n  color: #4b5563;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.pm-user-av--blue[_ngcontent-%COMP%] {\n  background: #DBEAFE;\n  color: #185FA5;\n}\n.pm-user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pm-user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-user-email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 9px;\n  border-radius: 20px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.pm-badge--ok[_ngcontent-%COMP%] {\n  background: #DCFCE7;\n  color: #166534;\n}\n.pm-enroll-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 26px;\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 500;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.pm-enroll-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.pm-enroll-btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #DCFCE7;\n  color: #166534;\n  border-color: #86EFAC;\n}\n.pm-enroll-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pm-unenroll-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 26px;\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 500;\n  border: 1px solid #FECACA;\n  border-radius: 6px;\n  background: #FFF5F5;\n  color: #991B1B;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.pm-unenroll-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.pm-unenroll-btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #FEE2E2;\n  color: #7F1D1D;\n  border-color: #FCA5A5;\n}\n.pm-unenroll-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pm-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.pm-foot__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.pm-close-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: inline-flex;\n  align-items: center;\n  height: 30px;\n  padding: 0 14px;\n  font-size: 13px;\n  font-weight: 500;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.pm-close-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.cw-pool__item.checked[_ngcontent-%COMP%], \n.cw-pool__item[_ngcontent-%COMP%]:hover {\n  background: #e6f1fb;\n}\n.cw-pool__check.on[_ngcontent-%COMP%] {\n  background: #185fa5;\n  border-color: #185fa5;\n  color: #fff;\n}\n.cw-pool-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 10px;\n}\n.cw-pool-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  background: #e6f1fb;\n  color: #185fa5;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.cw-pool-chip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #185fa5;\n  padding: 0;\n  line-height: 1;\n  font-size: 13px;\n  display: flex;\n}\n.cw-pool-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #6b7280;\n  margin-bottom: 6px;\n}\n.cat-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.cat-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #f9fafb;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  margin-top: 16px;\n}\n.ac-select[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  outline: none;\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.ac-select[_ngcontent-%COMP%]:focus {\n  border-color: #0f6e56;\n}\n.ac-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  position: relative;\n}\n.ac-alert-close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n  font-size: 14px;\n}\n.ac-alert-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.wz-section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin: 16px 0 8px;\n  display: block;\n}\n.wz-recap-card[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 14px;\n}\n.wz-recap-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.wz-recap-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-recap-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.wz-rl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-rv[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 0.5px solid #85b7eb;\n  margin-top: 12px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.wz-info-banner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.cw-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_cw-spin 0.6s linear infinite;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_cw-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cw-btn-danger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #dc2626;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.cw-btn-danger[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=adminrh-catalogue.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhCatalogueComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-catalogue", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule, HasPermissionDirective], template: `<div class="ac-shell">\r
\r
  <!-- \u2500\u2500 Topbar \u2500\u2500 -->\r
  <div class="ac-topbar">\r
    <span class="ac-tab active">\r
      <i class="isax isax-category"></i>Catalogues ({{ catalogues.length }})\r
    </span>\r
    <span class="ac-spacer"></span>\r
    <button *appHasPermission="'creer catalogues'" type="button" class="ac-add-btn" (click)="openCatalogueModal()">\r
      <i class="isax isax-add"></i>Nouveau catalogue\r
    </button>\r
  </div>\r
\r
  <!-- \u2500\u2500 KPI \u2500\u2500 -->\r
  <div class="ac-kpi-row">\r
    <div class="ac-kpi">\r
      <div class="ac-kpi__label"><i class="isax isax-category"></i>Total</div>\r
      <div class="ac-kpi__val">{{ catalogues.length }}</div>\r
      <div class="ac-kpi__delta neutral">catalogues</div>\r
    </div>\r
    <div class="ac-kpi">\r
      <div class="ac-kpi__label"><i class="isax isax-tick-circle"></i>Publi\xE9s</div>\r
      <div class="ac-kpi__val">{{ getPubliedCount() }}</div>\r
      <div class="ac-kpi__delta up">actifs</div>\r
    </div>\r
    <div class="ac-kpi">\r
      <div class="ac-kpi__label"><i class="isax isax-book-1"></i>Formations totales</div>\r
      <div class="ac-kpi__val">{{ getTotalFormationsCount() }}</div>\r
      <div class="ac-kpi__delta neutral">incluses</div>\r
    </div>\r
    <div class="ac-kpi">\r
      <div class="ac-kpi__label"><i class="isax isax-medal-star"></i>Certifiants</div>\r
      <div class="ac-kpi__val">{{ getCertifiantCount() }}</div>\r
      <div class="ac-kpi__delta neutral">catalogues</div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 Toolbar \u2500\u2500 -->\r
  <div class="ac-toolbar">\r
    <div class="ac-search">\r
      <i class="isax isax-search-normal-1 ac-search__icon"></i>\r
      <input class="ac-search__input" type="search" [(ngModel)]="searchTerm" placeholder="Rechercher un catalogue\u2026">\r
    </div>\r
    <button type="button" class="ac-chip" [class.ac-chip--on]="selectedType === ''"\r
            (click)="selectedType = ''">Tous les types</button>\r
    <button type="button" class="ac-chip" *ngFor="let t of types"\r
            [class.ac-chip--on]="selectedType === t.value"\r
            (click)="selectedType = t.value">{{ t.label }}</button>\r
    <div class="ac-view-group" style="margin-left:8px;">\r
      <button type="button" class="ac-view-toggle" [class.active]="selectedStatus === ''"\r
              (click)="selectedStatus = ''">Tous</button>\r
      <button type="button" class="ac-view-toggle" [class.active]="selectedStatus === 'active'"\r
              (click)="selectedStatus = 'active'">Publi\xE9s</button>\r
      <button type="button" class="ac-view-toggle" [class.active]="selectedStatus === 'inactive'"\r
              (click)="selectedStatus = 'inactive'">Brouillons</button>\r
    </div>\r
    <button type="button" class="ac-chip" (click)="clearFilters()"\r
            *ngIf="searchTerm || selectedType || selectedStatus">\r
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
    <div class="ac-card-grid" *ngIf="filteredCatalogues.length > 0">\r
      <div *ngFor="let cat of filteredCatalogues; trackBy: trackByCatalogueId" class="ac-fcard">\r
\r
        <!-- Thumb -->\r
        <div class="ac-fcard__thumb" [style.background]="cat.couleur + '22'">\r
          <div class="cat-icon" [style.background]="cat.couleur + '33'" [style.color]="cat.couleur"\r
               style="width:48px;height:48px;font-size:22px;border-radius:12px;display:flex;align-items:center;justify-content:center;">\r
            <i [class]="getIconClass(cat.icone)"></i>\r
          </div>\r
        </div>\r
\r
        <!-- Body -->\r
        <div class="ac-fcard__body">\r
          <div class="ac-fcard__cat"\r
               [attr.data-cat]="cat.type === 'technique' ? 'blue' : cat.type === 'management' ? 'teal' : 'default'">\r
            {{ getTypeLabel(cat.type) }}\r
          </div>\r
          <div class="ac-fcard__title">{{ cat.titre }}</div>\r
          <div class="ac-fcard__desc" *ngIf="cat.short_description || cat.description">\r
            {{ cat.short_description || cat.description }}\r
          </div>\r
          <div class="ac-fcard__meta">\r
            <span><i class="isax isax-book-1"></i> {{ cat.nombre_formations }} formation{{ cat.nombre_formations !== 1 ? 's' : '' }}</span>\r
            <span><i class="isax isax-clock"></i> {{ cat.duree_totale }}h total</span>\r
            <span><i class="isax isax-chart-square"></i> {{ cat.metadata?.duree_moyenne }}h/form.</span>\r
          </div>\r
          <div class="ac-fcard__meta" style="margin-top:3px;">\r
            <span><i class="isax isax-ranking"></i> {{ cat.metadata?.niveau }}</span>\r
            <span *ngIf="cat.metadata?.certificat_disponible">\r
              <i class="isax isax-medal-star"></i> Certifiant\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- Footer -->\r
        <div class="ac-fcard__footer">\r
          <span class="ac-status" [attr.data-s]="cat.est_publie ? 'pub' : 'draft'">\r
            {{ cat.est_publie ? 'Publi\xE9' : 'Brouillon' }}\r
          </span>\r
          <div class="ac-fcard__actions" style="margin-left:auto;">\r
            <button type="button" class="ac-act ac-act--people" title="Participants" (click)="openParticipants(cat)">\r
              <i class="isax isax-people"></i>\r
            </button>\r
            <button type="button" class="ac-act" title="Voir" (click)="viewCatalogue(cat)">\r
              <i class="isax isax-eye"></i>\r
            </button>\r
            <button type="button" class="ac-act" title="Ajouter formation" (click)="openFormationModal(cat)">\r
              <i class="isax isax-add-circle"></i>\r
            </button>\r
            <button type="button" class="ac-act" title="Modifier" (click)="editCatalogue(cat)">\r
              <i class="isax isax-edit-2"></i>\r
            </button>\r
            <button type="button" class="ac-act ac-act--arch" title="Archiver" (click)="archiveCatalogue(cat)">\r
              <i class="isax isax-archive"></i>\r
            </button>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div>\r
\r
    <!-- Empty -->\r
    <div class="ac-empty" *ngIf="filteredCatalogues.length === 0">\r
      <i class="isax isax-category"></i>\r
      {{ catalogues.length === 0 ? 'Aucun catalogue cr\xE9\xE9' : 'Aucun r\xE9sultat pour ces filtres' }}\r
      <ng-container *appHasPermission="'creer catalogues'">\r
        <button type="button" class="ac-add-btn" style="margin-top:10px;" (click)="openCatalogueModal()" *ngIf="catalogues.length === 0">\r
          <i class="isax isax-add"></i>Cr\xE9er un catalogue\r
        </button>\r
      </ng-container>\r
      <button class="ac-chip" style="margin-top:10px;" (click)="clearFilters()" *ngIf="catalogues.length > 0">\r
        <i class="isax isax-refresh"></i>Effacer les filtres\r
      </button>\r
    </div>\r
  </ng-container>\r
\r
</div><!-- /ac-shell -->\r
\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     MODAL CR\xC9ATION / MODIFICATION CATALOGUE\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="modal fade" id="catalogueModal" tabindex="-1">\r
  <div class="modal-dialog modal-lg modal-dialog-scrollable" style="max-width:620px;">\r
    <div class="cw-modal modal-content">\r
\r
      <div class="cw-head">\r
        <div class="cw-head__icon"><i class="isax isax-category"></i></div>\r
        <div class="cw-head__text">\r
          <div class="cw-head__title">{{ editMode ? 'Modifier le catalogue' : 'Nouveau catalogue' }}</div>\r
          <div class="cw-head__sub">{{ editMode ? 'Mettez \xE0 jour les informations' : 'Renseignez les informations du catalogue' }}</div>\r
        </div>\r
        <button type="button" class="cw-close" data-bs-dismiss="modal"><i class="isax isax-close-circle"></i></button>\r
      </div>\r
\r
      <form [formGroup]="catalogueForm" (ngSubmit)="onSubmit()">\r
        <div class="cw-body">\r
\r
          <div class="cw-row">\r
            <div class="cw-field" style="margin-bottom:0;grid-column:span 2;">\r
              <label class="cw-label">Titre <span class="cw-req">*</span></label>\r
              <input type="text" class="cw-input" formControlName="titre" placeholder="Ex: D\xE9veloppement Web Avanc\xE9">\r
              <span class="cw-hint" *ngIf="catalogueForm.get('titre')?.invalid && catalogueForm.get('titre')?.touched">\r
                Titre requis (min. 3 caract\xE8res)\r
              </span>\r
            </div>\r
          </div>\r
\r
          <div class="cw-field">\r
            <label class="cw-label">Description courte</label>\r
            <input type="text" class="cw-input" formControlName="short_description" placeholder="R\xE9sum\xE9 en une phrase">\r
          </div>\r
\r
          <div class="cw-field">\r
            <label class="cw-label">Description compl\xE8te</label>\r
            <textarea class="cw-input cw-textarea" formControlName="description" placeholder="Description d\xE9taill\xE9e du catalogue"></textarea>\r
          </div>\r
\r
          <div class="cw-section-label">Apparence</div>\r
          <div class="cw-row">\r
            <div class="cw-field" style="margin-bottom:0;">\r
              <label class="cw-label">Ic\xF4ne</label>\r
              <input type="text" class="cw-input" formControlName="icone" placeholder="folder, book, code\u2026">\r
            </div>\r
            <div class="cw-field" style="margin-bottom:0;">\r
              <label class="cw-label">Couleur</label>\r
              <input type="color" class="cw-input" style="height:38px;padding:2px 4px;" formControlName="couleur">\r
            </div>\r
          </div>\r
\r
          <div class="cw-row" style="margin-top:12px;">\r
            <div class="cw-field" style="margin-bottom:0;">\r
              <label class="cw-label">Type <span class="cw-req">*</span></label>\r
              <select class="cw-input" title="Type de catalogue" formControlName="type">\r
                <option *ngFor="let t of types" [value]="t.value">{{ t.label }}</option>\r
              </select>\r
            </div>\r
            <div class="cw-field" style="margin-bottom:0;">\r
              <label class="cw-label">Ordre d'affichage</label>\r
              <input type="number" class="cw-input" formControlName="ordre" min="1">\r
            </div>\r
          </div>\r
\r
          <div class="cw-section-label" style="margin-top:16px;">M\xE9tadonn\xE9es</div>\r
          <div class="cw-row">\r
            <div class="cw-field" style="margin-bottom:0;">\r
              <label class="cw-label">Niveau <span class="cw-req">*</span></label>\r
              <select class="cw-input" title="Niveau du catalogue" formControlName="niveau">\r
                <option value="D\xE9butant">D\xE9butant</option>\r
                <option value="Interm\xE9diaire">Interm\xE9diaire</option>\r
                <option value="Avanc\xE9">Avanc\xE9</option>\r
                <option value="Expert">Expert</option>\r
                <option value="Tous niveaux">Tous niveaux</option>\r
              </select>\r
            </div>\r
            <div class="cw-field" style="margin-bottom:0;">\r
              <label class="cw-label">Dur\xE9e moyenne (heures)</label>\r
              <input type="number" class="cw-input" formControlName="duree_moyenne" min="1">\r
            </div>\r
          </div>\r
\r
          <div class="cw-field" style="margin-top:12px;">\r
            <label class="cw-label">Pr\xE9requis</label>\r
            <input type="text" class="cw-input" formControlName="prerequis" placeholder="HTML, CSS, JavaScript (s\xE9par\xE9s par des virgules)">\r
            <span class="cw-hint">S\xE9parez les pr\xE9requis par des virgules</span>\r
          </div>\r
\r
          <div class="cw-section-label" style="margin-top:16px;">Options</div>\r
          <div class="cw-toggle-inline">\r
            <div class="cw-toggle" [class.on]="catalogueForm.get('est_publie')?.value"\r
                 (click)="catalogueForm.get('est_publie')?.setValue(!catalogueForm.get('est_publie')?.value)"></div>\r
            <span class="cw-toggle-label">Publi\xE9</span>\r
          </div>\r
          <div class="cw-toggle-inline">\r
            <div class="cw-toggle" [class.on]="catalogueForm.get('est_public')?.value"\r
                 (click)="catalogueForm.get('est_public')?.setValue(!catalogueForm.get('est_public')?.value)"></div>\r
            <span class="cw-toggle-label">Public (visible par tous)</span>\r
          </div>\r
          <div class="cw-toggle-inline">\r
            <div class="cw-toggle" [class.on]="catalogueForm.get('inscription_requise')?.value"\r
                 (click)="catalogueForm.get('inscription_requise')?.setValue(!catalogueForm.get('inscription_requise')?.value)"></div>\r
            <span class="cw-toggle-label">Inscription requise</span>\r
          </div>\r
          <div class="cw-toggle-inline">\r
            <div class="cw-toggle" [class.on]="catalogueForm.get('certificat_disponible')?.value"\r
                 (click)="catalogueForm.get('certificat_disponible')?.setValue(!catalogueForm.get('certificat_disponible')?.value)"></div>\r
            <span class="cw-toggle-label">Certificat disponible</span>\r
          </div>\r
\r
          <!-- Aper\xE7u -->\r
          <div class="cat-preview" *ngIf="catalogueForm.get('icone')?.value">\r
            <div class="cat-icon" [style.background]="(catalogueForm.get('couleur')?.value || '#3B82F6') + '22'"\r
                 [style.color]="catalogueForm.get('couleur')?.value || '#3B82F6'" style="width:44px;height:44px;font-size:20px;">\r
              <i [class]="getIconClass(catalogueForm.get('icone')?.value)"></i>\r
            </div>\r
            <div>\r
              <div style="font-size:13px;font-weight:500;color:#111827;">{{ catalogueForm.get('titre')?.value || 'Titre du catalogue' }}</div>\r
              <div style="font-size:11px;color:#9ca3af;">{{ catalogueForm.get('short_description')?.value || 'Description courte' }}</div>\r
            </div>\r
          </div>\r
\r
        </div><!-- /cw-body -->\r
\r
        <div class="cw-foot">\r
          <button type="button" class="cw-btn-ghost" data-bs-dismiss="modal">Annuler</button>\r
          <button type="submit" class="cw-btn-primary" [disabled]="catalogueForm.invalid || saving">\r
            <span class="cw-spinner" *ngIf="saving"></span>\r
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
     MODAL AJOUTER FORMATION AU CATALOGUE\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="modal fade" id="formationModal" tabindex="-1">\r
  <div class="modal-dialog modal-dialog-scrollable" style="max-width:560px;">\r
    <div class="cw-modal modal-content">\r
\r
      <div class="cw-head">\r
        <div class="cw-head__icon"><i class="isax isax-add-circle"></i></div>\r
        <div class="cw-head__text">\r
          <div class="cw-head__title">Ajouter des formations</div>\r
          <div class="cw-head__sub" *ngIf="selectedCatalogue">Catalogue : {{ selectedCatalogue.titre }}</div>\r
        </div>\r
        <button type="button" class="cw-close" data-bs-dismiss="modal"><i class="isax isax-close-circle"></i></button>\r
      </div>\r
\r
      <div class="cw-body">\r
\r
        <div class="ac-empty" *ngIf="loadingFormations" style="padding:20px 0;">\r
          <i class="isax isax-book-1"></i>Chargement des formations\u2026\r
        </div>\r
\r
        <ng-container *ngIf="!loadingFormations">\r
\r
          <!-- \u2500\u2500 Formations s\xE9lectionn\xE9es (chips) \u2500\u2500 -->\r
          <div class="cw-pool-label">\r
            Formations s\xE9lectionn\xE9es\r
            <span *ngIf="selectedFormationsInPool.length > 0" style="color:#185fa5;font-weight:500;margin-left:4px;">({{ selectedFormationsInPool.length }})</span>\r
          </div>\r
          <div class="cw-pool-chips" *ngIf="selectedFormationsInPool.length > 0">\r
            <span class="cw-pool-chip" *ngFor="let f of selectedFormationsInPool">\r
              {{ f.titre }}\r
              <button type="button" (click)="removeSelectedFormation(f.id)">\r
                <i class="isax isax-close-circle"></i>\r
              </button>\r
            </span>\r
          </div>\r
          <div *ngIf="selectedFormationsInPool.length === 0"\r
               style="font-size:11px;color:#9ca3af;margin-bottom:10px;">\r
            Cliquez sur une formation ci-dessous pour la s\xE9lectionner.\r
          </div>\r
\r
          <!-- \u2500\u2500 Pool \u2500\u2500 -->\r
          <div class="cw-pool-label">Catalogue disponible</div>\r
          <div class="cw-pool">\r
            <div class="cw-pool__search">\r
              <i class="isax isax-search-normal-1"></i>\r
              <input type="search" [(ngModel)]="formationsPoolSearch" placeholder="Rechercher une formation\u2026">\r
            </div>\r
            <div class="cw-pool__list" style="max-height:220px;">\r
              <div *ngFor="let f of filteredFormationsPool"\r
                   class="cw-pool__item" [class.checked]="isFormationSelected(f.id)"\r
                   (click)="toggleFormationInPool(f.id)">\r
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
              <div class="cw-pool__empty" *ngIf="filteredFormationsPool.length === 0">\r
                {{ formations.length === 0 ? 'Aucune formation disponible' : 'Toutes les formations sont d\xE9j\xE0 dans ce catalogue' }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div style="font-size:11px;color:#9ca3af;margin-bottom:10px;">\r
            L'ordre des formations d\xE9finit la s\xE9quence du catalogue.\r
          </div>\r
\r
          <!-- Info catalogue -->\r
          <div class="wz-info-banner" style="background:#e1f5ee;border-color:#79c9ab;color:#085041;" *ngIf="selectedCatalogue">\r
            <i class="isax isax-info-circle" style="color:#0f6e56;"></i>\r
            <div>\r
              <strong>{{ selectedCatalogue.titre }}</strong> \u2014\r
              {{ selectedCatalogue.formations.length }} formations \xB7 {{ selectedCatalogue.duree_totale }}h \xB7 {{ getTypeLabel(selectedCatalogue.type) }}\r
            </div>\r
          </div>\r
\r
        </ng-container>\r
\r
      </div>\r
\r
      <div class="cw-foot">\r
        <button type="button" class="cw-btn-ghost" data-bs-dismiss="modal">Annuler</button>\r
        <button type="button" class="cw-btn-primary"\r
                (click)="ajouterFormationsMultiples()"\r
                [disabled]="selectedFormationCount === 0 || saving">\r
          <span class="cw-spinner" *ngIf="saving"></span>\r
          Ajouter ({{ selectedFormationCount }})\r
        </button>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>\r
\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     MODAL D\xC9TAILS CATALOGUE\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="modal fade" id="viewModal" tabindex="-1">\r
  <div class="modal-dialog modal-lg modal-dialog-scrollable" style="max-width:720px;">\r
    <div class="cw-modal modal-content">\r
      <ng-container *ngIf="selectedCatalogue">\r
\r
        <div class="cw-head" [style.background]="selectedCatalogue.couleur + '18'">\r
          <div class="cat-icon"\r
               [style.background]="selectedCatalogue.couleur + '28'"\r
               [style.color]="selectedCatalogue.couleur">\r
            <i [class]="getIconClass(selectedCatalogue.icone)"></i>\r
          </div>\r
          <div class="cw-head__text">\r
            <div class="cw-head__title">{{ selectedCatalogue.titre }}</div>\r
            <div class="cw-head__sub">{{ selectedCatalogue.short_description }}</div>\r
          </div>\r
          <button type="button" class="cw-close" data-bs-dismiss="modal"><i class="isax isax-close-circle"></i></button>\r
        </div>\r
\r
        <div class="cw-body">\r
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px;">\r
            <span class="ac-status" data-s="plan">{{ getTypeLabel(selectedCatalogue.type) }}</span>\r
            <span class="ac-status" data-s="done">{{ selectedCatalogue.metadata.niveau }}</span>\r
            <span class="ac-status" [attr.data-s]="selectedCatalogue.est_publie ? 'pub' : 'draft'">{{ selectedCatalogue.est_publie ? 'Publi\xE9' : 'Brouillon' }}</span>\r
            <span class="ac-status" data-s="plan" *ngIf="selectedCatalogue.metadata.certificat_disponible">Certifiant</span>\r
          </div>\r
\r
          <div class="wz-recap-card">\r
            <div class="wz-recap-title">Statistiques</div>\r
            <div class="wz-recap-row"><span class="wz-rl">Formations incluses</span><span class="wz-rv">{{ selectedCatalogue.nombre_formations }}</span></div>\r
            <div class="wz-recap-row"><span class="wz-rl">Dur\xE9e totale</span><span class="wz-rv">{{ selectedCatalogue.duree_totale }}h</span></div>\r
            <div class="wz-recap-row"><span class="wz-rl">Dur\xE9e moyenne</span><span class="wz-rv">{{ selectedCatalogue.metadata.duree_moyenne }}h</span></div>\r
            <div class="wz-recap-row"><span class="wz-rl">Formations mises en avant</span><span class="wz-rv">{{ getFeaturedFormationsCount(selectedCatalogue.formations) }}</span></div>\r
            <div class="wz-recap-row" *ngIf="selectedCatalogue.formations.length > 0">\r
              <span class="wz-rl">Co\xFBt moyen</span>\r
              <span class="wz-rv">{{ getAveragePrice(selectedCatalogue.formations) | number:'1.0-0' }} F</span>\r
            </div>\r
            <div class="wz-recap-row"><span class="wz-rl">Cr\xE9\xE9 le</span><span class="wz-rv">{{ formatDate(selectedCatalogue.created_at) }}</span></div>\r
          </div>\r
\r
          <div class="cw-field" *ngIf="selectedCatalogue.metadata.prerequis.length > 0">\r
            <label class="cw-label">Pr\xE9requis</label>\r
            <div style="display:flex;flex-wrap:wrap;gap:5px;">\r
              <span class="ac-status" data-s="done" *ngFor="let p of selectedCatalogue.metadata.prerequis">{{ p }}</span>\r
            </div>\r
          </div>\r
\r
          <!-- Formations du catalogue -->\r
          <div class="wz-section-label" style="margin-top:16px;">\r
            Formations incluses ({{ selectedCatalogue.formations.length }})\r
            <button type="button" class="ac-add-btn" style="padding:3px 10px;font-size:11px;float:right;margin-top:-2px;"\r
                    (click)="openFormationModal(selectedCatalogue)" data-bs-dismiss="modal">\r
              <i class="isax isax-add"></i>Ajouter\r
            </button>\r
          </div>\r
\r
          <!-- Mini card grid for formations in catalogue -->\r
          <div class="ac-card-grid" style="grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px;margin-top:10px;"\r
               *ngIf="selectedCatalogue.formations.length > 0">\r
            <div *ngFor="let f of selectedCatalogue.formations; trackBy: trackByFormationId"\r
                 class="ac-fcard" style="min-height:0;">\r
              <div class="ac-fcard__body" style="padding:12px;">\r
                <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">\r
                  <span class="ac-status" data-s="plan" style="font-size:10px;">{{ f.pivot?.ordre || 1 }}</span>\r
                  <span class="ac-status" [attr.data-s]="f.est_publie ? 'pub' : 'draft'" style="font-size:10px;">\r
                    {{ f.est_publie ? 'Publi\xE9' : 'Brouillon' }}\r
                  </span>\r
                  <span class="ac-status" data-s="pending" style="font-size:9px;" *ngIf="f.pivot?.est_featured">Featured</span>\r
                  <span class="ac-status" data-s="pending" style="font-size:9px;" *ngIf="f.pivot?.est_obligatoire">Obligatoire</span>\r
                </div>\r
                <div class="ac-fcard__title" style="font-size:12px;margin-bottom:4px;">{{ f.titre }}</div>\r
                <div class="ac-fcard__meta" style="font-size:10px;">\r
                  <span><i class="isax isax-ranking"></i> {{ f.niveau }}</span>\r
                  <span><i class="isax isax-clock"></i> {{ f.duree_totale }}h</span>\r
                </div>\r
              </div>\r
              <div class="ac-fcard__footer" style="padding:6px 12px;">\r
                <button type="button" class="ac-act ac-act--del" style="margin-left:auto;"\r
                        (click)="retirerFormation(selectedCatalogue!, f)" title="Retirer">\r
                  <i class="isax isax-trash"></i>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="ac-empty" style="padding:24px 14px;" *ngIf="selectedCatalogue.formations.length === 0">\r
            <i class="isax isax-book-1"></i>Aucune formation dans ce catalogue\r
          </div>\r
        </div>\r
\r
        <div class="cw-foot">\r
          <button type="button" class="cw-btn-ghost" data-bs-dismiss="modal">Fermer</button>\r
          <button type="button" class="cw-btn-primary" (click)="editCatalogue(selectedCatalogue!)" data-bs-dismiss="modal">\r
            <i class="isax isax-edit-2"></i>Modifier\r
          </button>\r
        </div>\r
      </ng-container>\r
    </div>\r
  </div>\r
</div>\r
\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     MODAL PARTICIPANTS\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="pm-overlay" *ngIf="participantsModalOpen" (click)="closeParticipants()">\r
  <div class="pm-modal" (click)="$event.stopPropagation()">\r
\r
    <!-- Head -->\r
    <div class="pm-head">\r
      <div class="pm-head__icon"><i class="isax isax-people"></i></div>\r
      <div class="pm-head__text">\r
        <div class="pm-head__title">{{ selectedCatalogueForParticipants?.titre }}</div>\r
        <div class="pm-head__sub">{{ participants.length }} participant(s) inscrit(s)</div>\r
      </div>\r
      <button type="button" class="pm-close" (click)="closeParticipants()">\r
        <i class="isax isax-close-circle"></i>\r
      </button>\r
    </div>\r
\r
    <!-- Alerts -->\r
    <div *ngIf="inscriptionSuccess" class="pm-alert pm-alert--ok">\r
      <i class="isax isax-tick-circle"></i> {{ inscriptionSuccess }}\r
    </div>\r
    <div *ngIf="inscriptionError" class="pm-alert pm-alert--err">\r
      <i class="isax isax-warning-2"></i> {{ inscriptionError }}\r
    </div>\r
\r
    <div class="pm-body">\r
\r
      <!-- Colonne gauche : inscrits -->\r
      <div class="pm-col">\r
        <div class="pm-col__header">\r
          <span class="pm-col__title"><i class="isax isax-tick-circle"></i> Inscrits</span>\r
          <div class="pm-search">\r
            <i class="isax isax-search-normal-1"></i>\r
            <input type="search" placeholder="Rechercher..."\r
                   [(ngModel)]="participantsSearch" [ngModelOptions]="{standalone:true}">\r
          </div>\r
        </div>\r
\r
        <div *ngIf="participantsLoading" class="pm-loading">\r
          <span class="pm-spin"></span> Chargement...\r
        </div>\r
\r
        <div *ngIf="!participantsLoading && !participantsFiltered.length" class="pm-empty">\r
          <i class="isax isax-people"></i>\r
          <p>Aucun participant</p>\r
        </div>\r
\r
        <div class="pm-list" *ngIf="!participantsLoading && participantsFiltered.length">\r
          <div *ngFor="let p of participantsFiltered; trackBy: trackByUserId" class="pm-user-row">\r
            <div class="pm-user-av">{{ ((p.prenom || p.nom || p.name || p.email || '?').charAt(0)).toUpperCase() }}</div>\r
            <div class="pm-user-info">\r
              <div class="pm-user-name">{{ (p.prenom && p.nom) ? (p.prenom + ' ' + p.nom) : (p.name || p.nom || '\u2014') }}</div>\r
              <div class="pm-user-email">{{ p.email }}</div>\r
            </div>\r
            <ng-container *appHasPermission="'desassigner formations'">\r
              <button type="button" class="pm-unenroll-btn"\r
                      [disabled]="inscriptionPending" (click)="desinscrireUser(p)">\r
                <span *ngIf="inscriptionPending" class="pm-spin pm-spin--sm"></span>\r
                <i *ngIf="!inscriptionPending" class="isax isax-user-remove"></i>\r
                Retirer\r
              </button>\r
            </ng-container>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="pm-divider"></div>\r
\r
      <!-- Colonne droite : \xE0 inscrire -->\r
      <div class="pm-col">\r
        <div class="pm-col__header">\r
          <span class="pm-col__title"><i class="isax isax-user-add"></i> Inscrire un employ\xE9</span>\r
          <div class="pm-search">\r
            <i class="isax isax-search-normal-1"></i>\r
            <input type="search" placeholder="Rechercher..."\r
                   [(ngModel)]="usersSearch" [ngModelOptions]="{standalone:true}"\r
                   (ngModelChange)="applyUsersFilter()">\r
          </div>\r
        </div>\r
\r
        <div *ngIf="usersLoading" class="pm-loading">\r
          <span class="pm-spin"></span> Chargement...\r
        </div>\r
\r
        <div *ngIf="!usersLoading && !availableUsersFiltered.length" class="pm-empty">\r
          <i class="isax isax-user-add"></i>\r
          <p>Tous les employ\xE9s sont d\xE9j\xE0 inscrits</p>\r
        </div>\r
\r
        <div class="pm-list" *ngIf="!usersLoading && availableUsersFiltered.length">\r
          <div *ngFor="let u of availableUsersFiltered; trackBy: trackByUserId" class="pm-user-row">\r
            <div class="pm-user-av pm-user-av--blue">{{ ((u.prenom || u.nom || u.name || u.email || '?').charAt(0)).toUpperCase() }}</div>\r
            <div class="pm-user-info">\r
              <div class="pm-user-name">{{ (u.prenom && u.nom) ? (u.prenom + ' ' + u.nom) : (u.name || u.nom || '\u2014') }}</div>\r
              <div class="pm-user-email">{{ u.email }}</div>\r
            </div>\r
            <ng-container *appHasPermission="'assigner formations'">\r
              <button type="button" class="pm-enroll-btn"\r
                      [disabled]="inscriptionPending" (click)="inscrireUser(u)">\r
                <span *ngIf="inscriptionPending" class="pm-spin pm-spin--sm"></span>\r
                <i *ngIf="!inscriptionPending" class="isax isax-user-add"></i>\r
                Inscrire\r
              </button>\r
            </ng-container>\r
          </div>\r
        </div>\r
      </div>\r
\r
    </div>\r
\r
    <!-- Footer -->\r
    <div class="pm-foot">\r
      <span class="pm-foot__info">{{ participants.length }} inscrit(s) \xB7 {{ availableUsers.length }} disponible(s)</span>\r
      <button type="button" class="pm-close-btn" (click)="closeParticipants()">Fermer</button>\r
    </div>\r
\r
  </div>\r
</div>\r
\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     MODAL SUPPRESSION\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="modal fade" id="deleteModal" tabindex="-1">\r
  <div class="modal-dialog" style="max-width:420px;">\r
    <div class="cw-modal modal-content">\r
      <div class="cw-head">\r
        <div class="cw-head__icon" style="background:#FAEEDA;color:#BA7517;"><i class="isax isax-archive"></i></div>\r
        <div class="cw-head__text">\r
          <div class="cw-head__title">Archiver le catalogue</div>\r
          <div class="cw-head__sub" *ngIf="selectedCatalogue">{{ selectedCatalogue.titre }}</div>\r
        </div>\r
        <button type="button" class="cw-close" data-bs-dismiss="modal"><i class="isax isax-close-circle"></i></button>\r
      </div>\r
      <div class="cw-body">\r
        <div class="wz-info-banner" style="background:#fef2f2;border-color:#fca5a5;color:#991b1b;">\r
          <i class="isax isax-warning-2" style="color:#dc2626;"></i>\r
          <div>\r
            Le catalogue sera archiv\xE9 et masqu\xE9. Ses associations avec les formations seront conserv\xE9es.\r
          </div>\r
        </div>\r
      </div>\r
      <div class="cw-foot">\r
        <span style="flex:1;"></span>\r
        <button type="button" class="cw-btn-ghost" data-bs-dismiss="modal">Annuler</button>\r
        <button type="button" class="cw-btn-arch" (click)="archiveCatalogue(selectedCatalogue)">\r
          <i class="isax isax-archive"></i> Archiver\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/adminrh/adminrh-catalogue/adminrh-catalogue.component.scss */\n.ac-shell {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ac-topbar {\n  display: flex;\n  align-items: stretch;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-tab {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 16px;\n  font-size: 13px;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ac-tab i {\n  font-size: 15px;\n}\n.ac-tab.active {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ac-tab:hover:not(.active) {\n  color: #111827;\n}\n.ac-toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-search {\n  position: relative;\n  flex: 1;\n  min-width: 160px;\n  max-width: 220px;\n}\n.ac-search__icon {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ac-search__input {\n  width: 100%;\n  padding: 6px 10px 6px 30px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ac-search__input:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.ac-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    background 0.15s,\n    color 0.15s;\n}\n.ac-chip:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ac-chip--on {\n  background: #E6F1FB;\n  border-color: #85B7EB;\n  color: #0C447C;\n}\n.ac-spacer {\n  margin-left: auto;\n}\n.ac-view-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-btn.active,\n.ac-view-btn:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-add-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background: #185FA5;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.15s;\n}\n.ac-add-btn:hover {\n  opacity: 0.9;\n  color: #fff;\n}\n.ac-add-btn i {\n  font-size: 13px;\n}\n.ac-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  padding: 12px 14px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ac-kpi {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.ac-kpi__label {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: #4b5563;\n  margin-bottom: 4px;\n}\n.ac-kpi__label i {\n  font-size: 13px;\n}\n.ac-kpi__val {\n  font-size: 22px;\n  font-weight: 500;\n  color: #111827;\n}\n.ac-kpi__delta {\n  font-size: 11px;\n  margin-top: 2px;\n}\n.ac-kpi__delta.up {\n  color: #3B6D11;\n}\n.ac-kpi__delta.down {\n  color: #A32D2D;\n}\n.ac-kpi__delta.neutral {\n  color: #9ca3af;\n}\n.ac-skeletons {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n}\n.ac-skeleton-card {\n  height: 220px;\n  border-radius: 12px;\n  background: #f3f4f6;\n  animation: ac-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes ac-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ac-alert {\n  margin: 12px 14px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-card-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n  background: #f9fafb;\n}\n.ac-fcard {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  transition: border-color 0.15s;\n}\n.ac-fcard:hover {\n  border-color: #aec6e4;\n}\n.ac-fcard__thumb {\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  position: relative;\n  overflow: hidden;\n}\n.ac-fcard__thumb[data-th=blue] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.ac-fcard__thumb[data-th=teal] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.ac-fcard__thumb[data-th=purple] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.ac-fcard__thumb[data-th=amber] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ac-fcard__thumb[data-th=coral] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.ac-fcard__thumb[data-th=green] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.ac-fcard__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-fcard__body {\n  padding: 10px 12px;\n  flex: 1;\n}\n.ac-fcard__cat {\n  font-size: 10px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 4px;\n}\n.ac-fcard__cat[data-cat=tech] {\n  color: #0C447C;\n}\n.ac-fcard__cat[data-cat=rh] {\n  color: #085041;\n}\n.ac-fcard__cat[data-cat=mgmt] {\n  color: #534AB7;\n}\n.ac-fcard__cat[data-cat=fin] {\n  color: #633806;\n}\n.ac-fcard__cat[data-cat=default] {\n  color: #4b5563;\n}\n.ac-fcard__title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 6px;\n  line-height: 1.3;\n}\n.ac-fcard__meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ac-fcard__meta span {\n  font-size: 11px;\n  color: #4b5563;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-fcard__meta span i {\n  font-size: 12px;\n}\n.ac-fcard__footer {\n  padding: 8px 12px;\n  border-top: 1px solid #f3f4f6;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-fcard__actions {\n  display: flex;\n  gap: 4px;\n  margin-left: auto;\n}\n.ac-status {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.ac-status[data-s=pub] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=draft] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=pending] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-status[data-s=plan] {\n  background: #EEF2FF;\n  color: #3730A3;\n}\n.ac-status[data-s=live] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=done] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=cancel] {\n  background: #FEF2F2;\n  color: #991B1B;\n}\n.ac-prog {\n  flex: 1;\n  margin: 0 6px;\n}\n.ac-prog__bar {\n  height: 4px;\n  background: #f3f4f6;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ac-prog__fill {\n  height: 100%;\n  border-radius: 4px;\n  background: #185FA5;\n}\n.ac-prog__txt {\n  font-size: 10px;\n  color: #9ca3af;\n  text-align: right;\n  margin-top: 2px;\n}\n.ac-actions {\n  display: flex;\n  gap: 5px;\n}\n.ac-act {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-act:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-act--del {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ac-act--del:hover {\n  background: #fef2f2;\n}\n.ac-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.ac-table th {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ac-table td {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ac-table tr:last-child td {\n  border-bottom: none;\n}\n.ac-table tr:hover td {\n  background: #f9fafb;\n}\n.ac-table-name {\n  font-size: 13px;\n  font-weight: 500;\n}\n.ac-table-sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.ac-empty {\n  text-align: center;\n  padding: 40px 14px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ac-empty i {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n}\n.ac-empty--span {\n  grid-column: 1/-1;\n}\n.ac-empty-tab {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 14px;\n  gap: 12px;\n  color: #9ca3af;\n}\n.ac-empty-tab i {\n  font-size: 2.5rem;\n}\n.ac-empty-tab p {\n  font-size: 14px;\n}\n.ac-pager {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ac-pager__info {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ac-pager__btns {\n  display: flex;\n  gap: 4px;\n}\n.ac-pager__btn {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ac-pager__btn:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ac-pager__btn.active {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ac-pager__btn:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ac-toolbar--chips {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-top: none;\n  background: #fff;\n  gap: 6px;\n}\n.ac-view-group {\n  display: inline-flex;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.ac-view-toggle {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-toggle i {\n  font-size: 14px;\n}\n.ac-view-toggle.active {\n  background: #f3f4f6;\n  color: #111827;\n  font-weight: 500;\n}\n.ac-view-toggle:hover:not(.active) {\n  background: #f9fafb;\n}\n.ac-sessions-list {\n  padding: 10px 14px;\n  background: #f9fafb;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ac-session-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  transition: border-color 0.15s;\n}\n.ac-session-row:hover {\n  border-color: #aec6e4;\n}\n.ac-session-date {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 40px;\n}\n.ac-session-date__day {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1;\n}\n.ac-session-date__month {\n  font-size: 10px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.ac-session-info {\n  flex: 1;\n  min-width: 0;\n}\n.ac-session-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ac-session-meta {\n  display: flex;\n  gap: 10px;\n  margin-top: 3px;\n  flex-wrap: wrap;\n}\n.ac-session-meta span {\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-session-meta span i {\n  font-size: 12px;\n}\n.ac-session-badges {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.ac-session-places {\n  font-size: 11px;\n  color: #4b5563;\n  white-space: nowrap;\n}\n.ac-cal {\n  padding: 12px 14px 14px;\n  background: #f9fafb;\n}\n.ac-cal__nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.ac-cal__nav-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 14px;\n  color: #4b5563;\n  transition: background 0.12s;\n}\n.ac-cal__nav-btn:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-cal__nav-label {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n  text-transform: capitalize;\n}\n.ac-cal__grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 4px;\n}\n.ac-cal__head {\n  text-align: center;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 4px 0 6px;\n}\n.ac-cal__cell {\n  min-height: 80px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 5px 5px 4px;\n  overflow: hidden;\n  transition: border-color 0.12s;\n}\n.ac-cal__cell:hover {\n  border-color: #aec6e4;\n}\n.ac-cal__cell--other {\n  background: #f9fafb;\n}\n.ac-cal__cell--other .ac-cal__day {\n  color: #9ca3af;\n}\n.ac-cal__cell--today {\n  border-color: #185FA5;\n}\n.ac-cal__cell--today .ac-cal__day {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 50%;\n}\n.ac-cal__day {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 4px;\n  display: block;\n}\n.ac-cal__events {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ac-cal__event {\n  font-size: 10px;\n  padding: 2px 4px;\n  border-radius: 3px;\n  background: #E6F1FB;\n  color: #0C447C;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: default;\n}\n.ac-cal__event--dist {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-cal__event--hybr {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.wz-modal {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 620px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.wz-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-head__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E6F1FB;\n  color: #185FA5;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.wz-head__text {\n  flex: 1;\n}\n.wz-head__title {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-head__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.wz-close {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.wz-close:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.wz-stepper {\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-step {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.wz-step__circle {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 500;\n  flex-shrink: 0;\n  border: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  color: #9ca3af;\n  transition: all 0.2s;\n}\n.wz-step__circle.active {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.wz-step__circle.done {\n  background: #EAF3DE;\n  color: #27500A;\n  border-color: #97C459;\n}\n.wz-step__label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.wz-step__label.active {\n  color: #185FA5;\n}\n.wz-step__label.done {\n  color: #3B6D11;\n}\n.wz-step__line {\n  flex: 1;\n  height: 0.5px;\n  background: #e5e7eb;\n  margin: 0 8px;\n  min-width: 20px;\n}\n.wz-body {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.wz-body::-webkit-scrollbar {\n  width: 4px;\n}\n.wz-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.wz-body::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.wz-field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.wz-field--full {\n  grid-column: 1/-1;\n}\n.wz-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.wz-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-req {\n  color: #E24B4A;\n}\n.wz-input {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.wz-input:focus {\n  border-color: #185FA5;\n  box-shadow: 0 0 0 2px #E6F1FB;\n}\n.wz-input[readonly] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.wz-textarea {\n  resize: vertical;\n  min-height: 68px;\n  line-height: 1.5;\n}\n.wz-hint {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-domain-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.wz-domain-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.wz-domain-card i {\n  font-size: 20px;\n}\n.wz-domain-card span {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-domain-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.wz-domain-card.selected {\n  border-color: #185FA5;\n  background: #E6F1FB;\n}\n.wz-domain-card.selected span {\n  color: #0C447C;\n}\n.wz-strip {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 10px;\n}\n.wz-strip__hint {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.wz-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  border: 0.5px solid #85B7EB;\n  font-size: 12px;\n  color: #0C447C;\n}\n.wz-chip i {\n  font-size: 11px;\n  cursor: pointer;\n  color: #378ADD;\n}\n.wz-chip i:hover {\n  color: #0C447C;\n}\n.wz-pool {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 6px;\n}\n.wz-pool__search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-pool__search i {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.wz-pool__search input {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.wz-pool__list {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.wz-pool__list::-webkit-scrollbar {\n  width: 3px;\n}\n.wz-pool__list::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.wz-pool__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.wz-pool__item:last-child {\n  border-bottom: none;\n}\n.wz-pool__item:hover,\n.wz-pool__item.checked {\n  background: #f9fafb;\n}\n.wz-pool__check {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.wz-pool__check.on {\n  background: #185FA5;\n  border-color: #185FA5;\n  color: #fff;\n}\n.wz-pool__thumb {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.wz-pool__thumb[data-th=blue] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.wz-pool__thumb[data-th=teal] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.wz-pool__thumb[data-th=purple] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-pool__thumb[data-th=amber] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.wz-pool__thumb[data-th=coral] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.wz-pool__thumb[data-th=green] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.wz-pool__info {\n  flex: 1;\n  min-width: 0;\n}\n.wz-pool__name {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wz-pool__meta {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-pool__tag {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  background: #f3f4f6;\n  color: #4b5563;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.wz-pool__empty {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.wz-toggle-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 0.5px solid #f3f4f6;\n}\n.wz-toggle-row:last-child {\n  border-bottom: none;\n}\n.wz-toggle-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-toggle-sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.wz-toggle {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.wz-toggle::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.wz-toggle.on {\n  background: #185FA5;\n}\n.wz-toggle.on::after {\n  left: 19px;\n}\n.wz-info-banner {\n  display: flex;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #E6F1FB;\n  border-radius: 8px;\n  border: 0.5px solid #85B7EB;\n  margin-bottom: 12px;\n  font-size: 12px;\n  color: #0C447C;\n  line-height: 1.5;\n}\n.wz-info-banner i {\n  font-size: 15px;\n  color: #185FA5;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.wz-recap-card {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 10px;\n}\n.wz-recap-title {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.wz-recap-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-recap-row:last-child {\n  border-bottom: none;\n}\n.wz-rl {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-rv {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-recap-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.wz-rc {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.wz-error {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.wz-foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.wz-foot__info {\n  flex: 1;\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-btn-ghost {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.wz-btn-ghost:hover {\n  background: #f3f4f6;\n}\n.wz-btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #185FA5;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-primary i {\n  font-size: 13px;\n}\n.wz-btn-primary:hover {\n  opacity: 0.9;\n}\n.wz-btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.wz-btn-success {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #3B6D11;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-success i {\n  font-size: 13px;\n}\n.wz-btn-success:hover {\n  opacity: 0.9;\n}\n.wz-btn-success:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.cw-modal {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 600px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.cw-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.cw-head__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E1F5EE;\n  color: #0F6E56;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cw-head__text {\n  flex: 1;\n}\n.cw-head__title {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-head__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.cw-close {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.cw-close:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.cw-body {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n  max-height: calc(80vh - 120px);\n}\n.cw-body::-webkit-scrollbar {\n  width: 4px;\n}\n.cw-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.cw-body::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.cw-upload-zone {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 24px 16px;\n  border: 1.5px dashed #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  cursor: pointer;\n  margin-bottom: 16px;\n  transition: border-color 0.15s, background 0.15s;\n}\n.cw-upload-zone i {\n  font-size: 28px;\n  color: #9ca3af;\n}\n.cw-upload-zone span {\n  font-size: 13px;\n  color: #4b5563;\n  font-weight: 500;\n}\n.cw-upload-zone__hint {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 400;\n}\n.cw-upload-zone:hover {\n  border-color: #79C9AB;\n  background: #E1F5EE;\n}\n.cw-upload-zone:hover i {\n  color: #0F6E56;\n}\n.cw-field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.cw-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.cw-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-req {\n  color: #E24B4A;\n}\n.cw-input {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.cw-input:focus {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-input[readonly] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.cw-textarea {\n  resize: vertical;\n  min-height: 72px;\n  line-height: 1.5;\n}\n.cw-hint {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-toggle-inline {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 0;\n}\n.cw-toggle {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.cw-toggle::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.cw-toggle.on {\n  background: #0F6E56;\n}\n.cw-toggle.on::after {\n  left: 19px;\n}\n.cw-toggle-label {\n  font-size: 12px;\n  color: #4b5563;\n}\n.cw-section-label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 8px;\n}\n.cw-domain-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-domain-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.cw-domain-card i {\n  font-size: 20px;\n  color: #9ca3af;\n}\n.cw-domain-card span {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-domain-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-domain-card.selected {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-domain-card.selected i {\n  color: #0F6E56;\n}\n.cw-domain-card.selected span {\n  color: #0F6E56;\n}\n.cw-level-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-level-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.cw-level-card__label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-level-card__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.cw-level-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-level-card.selected {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-level-card.selected .cw-level-card__label {\n  color: #0F6E56;\n}\n.cw-level-card.selected .cw-level-card__sub {\n  color: rgb(148.5, 219.5, 194.65);\n}\n.cw-tags-box {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n  min-height: 36px;\n  padding: 6px 8px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.cw-tags-box:focus-within {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  background: #E1F5EE;\n  border: 0.5px solid #79C9AB;\n  font-size: 12px;\n  color: #0F6E56;\n}\n.cw-tag i {\n  font-size: 11px;\n  cursor: pointer;\n  color: #79C9AB;\n}\n.cw-tag i:hover {\n  color: #0F6E56;\n}\n.cw-tag-input {\n  border: none;\n  outline: none;\n  font-size: 12px;\n  color: #111827;\n  background: transparent;\n  flex: 1;\n  min-width: 100px;\n  font-family: inherit;\n}\n.cw-strip {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 8px;\n}\n.cw-strip-hint {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.cw-pool {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.cw-pool__search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.cw-pool__search i {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.cw-pool__search input {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.cw-pool__list {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.cw-pool__list::-webkit-scrollbar {\n  width: 3px;\n}\n.cw-pool__list::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.cw-pool__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.cw-pool__item:last-child {\n  border-bottom: none;\n}\n.cw-pool__item:hover,\n.cw-pool__item.checked {\n  background: #E1F5EE;\n}\n.cw-pool__check {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.cw-pool__check.on {\n  background: #0F6E56;\n  border-color: #0F6E56;\n  color: #fff;\n}\n.cw-pool__info {\n  flex: 1;\n  min-width: 0;\n}\n.cw-pool__name {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cw-pool__meta {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-pool__empty {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.cw-vis-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.cw-vis-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  cursor: pointer;\n  transition: all 0.15s;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cw-vis-card i {\n  font-size: 20px;\n  color: #9ca3af;\n  margin-bottom: 4px;\n}\n.cw-vis-card__label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-vis-card__sub {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-vis-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-vis-card.selected {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-vis-card.selected i {\n  color: #0F6E56;\n}\n.cw-vis-card.selected .cw-vis-card__label {\n  color: #0F6E56;\n}\n.cw-error {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.cw-foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.cw-btn-ghost {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.cw-btn-ghost:hover {\n  background: #f3f4f6;\n}\n.cw-btn-draft {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: #fff;\n  cursor: pointer;\n  transition: background 0.12s, border-color 0.12s;\n}\n.cw-btn-draft i {\n  font-size: 13px;\n}\n.cw-btn-draft:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.cw-btn-draft:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #0F6E56;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.cw-btn-primary i {\n  font-size: 13px;\n}\n.cw-btn-primary:hover {\n  opacity: 0.9;\n}\n.cw-btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .ac-card-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-skeletons {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .ac-card-grid {\n    grid-template-columns: 1fr;\n  }\n  .ac-kpi-row {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.ac-act--arch {\n  color: #BA7517;\n}\n.ac-act--arch:hover {\n  border-color: #BA7517;\n  color: #BA7517;\n  background: #FAEEDA;\n}\n.ac-act--people {\n  color: #185FA5;\n}\n.ac-act--people:hover {\n  border-color: #93C5FD;\n  color: #185FA5;\n  background: #DBEAFE;\n}\n.ac-act--warn {\n  color: #B45309;\n  border-color: #FCD34D;\n}\n.ac-act--warn:hover {\n  background: #FFFBEB;\n}\n.ac-act--ok {\n  color: #166534;\n  border-color: #86EFAC;\n}\n.ac-act--ok:hover {\n  background: #F0FDF4;\n}\n.ac-select {\n  height: 32px;\n  padding: 0 10px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n}\n.ac-table-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ac-course-img {\n  flex-shrink: 0;\n  width: 44px;\n  height: 32px;\n  border-radius: 6px;\n  overflow: hidden;\n  display: block;\n  background: #f3f4f6;\n}\n.ac-course-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-course-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  text-decoration: none;\n}\n.ac-course-title:hover {\n  color: #185FA5;\n  text-decoration: underline;\n}\n.ac-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #4b5563;\n  background: #f3f4f6;\n  border-radius: 20px;\n  padding: 2px 8px;\n}\n.ac-badge {\n  font-size: 11px;\n  font-weight: 500;\n  border-radius: 4px;\n  padding: 2px 7px;\n}\n.ac-badge--free {\n  background: #D1FAE5;\n  color: #065F46;\n}\n.ac-badge--paid {\n  color: #185FA5;\n  font-weight: 600;\n}\n.ac-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ac-confirm-modal {\n  background: #fff;\n  border-radius: 12px;\n  padding: 28px 32px;\n  max-width: 380px;\n  width: 90%;\n  text-align: center;\n}\n.ac-confirm-modal h4 {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 12px 0 6px;\n}\n.ac-confirm-modal p {\n  font-size: 13px;\n  color: #4b5563;\n  margin-bottom: 20px;\n}\n.ac-confirm-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n}\n.ac-confirm-icon--warn {\n  background: #FEF3C7;\n  color: #B45309;\n}\n.ac-confirm-icon--ok {\n  background: #D1FAE5;\n  color: #065F46;\n}\n.ac-confirm-btns {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n.ac-btn-ghost {\n  padding: 7px 18px;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  background: #f3f4f6;\n  font-size: 13px;\n  cursor: pointer;\n}\n.ac-btn-ghost:hover {\n  background: #e5e7eb;\n}\n.ac-btn-warn {\n  padding: 7px 18px;\n  border: none;\n  border-radius: 20px;\n  background: #F59E0B;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.ac-btn-warn:hover {\n  background: #D97706;\n}\n.ac-btn-ok {\n  padding: 7px 18px;\n  border: none;\n  border-radius: 20px;\n  background: #10B981;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.ac-btn-ok:hover {\n  background: #059669;\n}\n.ac-skeleton-row {\n  height: 48px;\n  background: #f3f4f6;\n  border-radius: 8px;\n  margin: 6px 14px;\n  animation: ac-pulse 1.2s ease-in-out infinite;\n}\n@keyframes ac-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.pm-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n  padding: 16px;\n}\n.pm-modal {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 820px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n}\n.pm-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.pm-head__icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #DBEAFE;\n  color: #185FA5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.pm-head__text {\n  flex: 1;\n  min-width: 0;\n}\n.pm-head__title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-head__sub {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.pm-close {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 4px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.pm-close:hover {\n  color: #111827;\n}\n.pm-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 20px;\n  font-size: 13px;\n}\n.pm-alert--ok {\n  background: #F0FDF4;\n  color: #166534;\n  border-bottom: 1px solid #4ADE80;\n}\n.pm-alert--err {\n  background: #FEF2F2;\n  color: #991B1B;\n  border-bottom: 1px solid #F87171;\n}\n.pm-body {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .pm-body {\n    flex-direction: column;\n  }\n}\n.pm-divider {\n  width: 1px;\n  background: #e5e7eb;\n  flex-shrink: 0;\n}\n@media (max-width: 600px) {\n  .pm-divider {\n    width: 100%;\n    height: 1px;\n  }\n}\n.pm-col {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 0;\n}\n.pm-col__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  flex-wrap: wrap;\n}\n.pm-col__title {\n  font-size: 12px;\n  font-weight: 600;\n  color: #374151;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  white-space: nowrap;\n}\n.pm-col__title i {\n  font-size: 14px;\n}\n.pm-search {\n  position: relative;\n  flex: 1;\n  min-width: 120px;\n  max-width: 180px;\n}\n.pm-search i {\n  position: absolute;\n  left: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 13px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.pm-search input {\n  width: 100%;\n  padding: 5px 8px 5px 26px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #f9fafb;\n  outline: none;\n}\n.pm-search input:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.pm-list {\n  overflow-y: auto;\n  flex: 1;\n  padding: 6px 0;\n}\n.pm-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 28px 16px;\n  font-size: 13px;\n  color: #9ca3af;\n}\n.pm-spin {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid #e5e7eb;\n  border-top-color: #185FA5;\n  border-radius: 50%;\n  animation: pm-spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n.pm-spin--sm {\n  width: 11px;\n  height: 11px;\n}\n@keyframes pm-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pm-empty {\n  text-align: center;\n  padding: 32px 16px;\n  color: #9ca3af;\n}\n.pm-empty i {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.5;\n}\n.pm-empty p {\n  font-size: 13px;\n  margin: 0;\n}\n.pm-user-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 16px;\n  transition: background 0.1s;\n}\n.pm-user-row:hover {\n  background: #f9fafb;\n}\n.pm-user-av {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #f3f4f6;\n  color: #4b5563;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.pm-user-av--blue {\n  background: #DBEAFE;\n  color: #185FA5;\n}\n.pm-user-info {\n  flex: 1;\n  min-width: 0;\n}\n.pm-user-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-user-email {\n  font-size: 11px;\n  color: #9ca3af;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-badge {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 9px;\n  border-radius: 20px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.pm-badge--ok {\n  background: #DCFCE7;\n  color: #166534;\n}\n.pm-enroll-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 26px;\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 500;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.pm-enroll-btn i {\n  font-size: 13px;\n}\n.pm-enroll-btn:not(:disabled):hover {\n  background: #DCFCE7;\n  color: #166534;\n  border-color: #86EFAC;\n}\n.pm-enroll-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pm-unenroll-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 26px;\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 500;\n  border: 1px solid #FECACA;\n  border-radius: 6px;\n  background: #FFF5F5;\n  color: #991B1B;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n}\n.pm-unenroll-btn i {\n  font-size: 13px;\n}\n.pm-unenroll-btn:not(:disabled):hover {\n  background: #FEE2E2;\n  color: #7F1D1D;\n  border-color: #FCA5A5;\n}\n.pm-unenroll-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pm-foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.pm-foot__info {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.pm-close-btn {\n  margin-left: auto;\n  display: inline-flex;\n  align-items: center;\n  height: 30px;\n  padding: 0 14px;\n  font-size: 13px;\n  font-weight: 500;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.pm-close-btn:hover {\n  background: #f3f4f6;\n}\n.cw-pool__item.checked,\n.cw-pool__item:hover {\n  background: #e6f1fb;\n}\n.cw-pool__check.on {\n  background: #185fa5;\n  border-color: #185fa5;\n  color: #fff;\n}\n.cw-pool-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 10px;\n}\n.cw-pool-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  background: #e6f1fb;\n  color: #185fa5;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.cw-pool-chip button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #185fa5;\n  padding: 0;\n  line-height: 1;\n  font-size: 13px;\n  display: flex;\n}\n.cw-pool-label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #6b7280;\n  margin-bottom: 6px;\n}\n.cat-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.cat-preview {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #f9fafb;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  margin-top: 16px;\n}\n.ac-select {\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  outline: none;\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.ac-select:focus {\n  border-color: #0f6e56;\n}\n.ac-alert {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  position: relative;\n}\n.ac-alert-close {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n  font-size: 14px;\n}\n.ac-alert-close:hover {\n  opacity: 1;\n}\n.wz-section-label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin: 16px 0 8px;\n  display: block;\n}\n.wz-recap-card {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 14px;\n}\n.wz-recap-title {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.wz-recap-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-recap-row:last-child {\n  border-bottom: none;\n}\n.wz-rl {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-rv {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-info-banner {\n  display: flex;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  border: 0.5px solid #85b7eb;\n  margin-top: 12px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.wz-info-banner i {\n  font-size: 15px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.cw-spinner {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: cw-spin 0.6s linear infinite;\n  flex-shrink: 0;\n}\n@keyframes cw-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cw-btn-danger {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #dc2626;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.cw-btn-danger:hover {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=adminrh-catalogue.component.css.map */\n'] }]
  }], () => [{ type: CatalogueService }, { type: FormationService }, { type: UserService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhCatalogueComponent, { className: "AdminrhCatalogueComponent", filePath: "app/features/adminrh/adminrh-catalogue/adminrh-catalogue.component.ts", lineNumber: 19 });
})();
export {
  AdminrhCatalogueComponent
};
//# sourceMappingURL=chunk-CTPE5ZOU.js.map
