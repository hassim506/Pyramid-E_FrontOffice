import {
  ParcoursService
} from "./chunk-OMSY4J3S.js";
import {
  FormationService
} from "./chunk-SRQJ2PQ4.js";
import "./chunk-REZZRIDN.js";
import "./chunk-FKX6UC3I.js";
import {
  CheckboxControlValueAccessor,
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
} from "./chunk-AK2M3J6O.js";
import "./chunk-AJNKO2CX.js";
import "./chunk-FZP3BRBS.js";
import "./chunk-GSAJL664.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-3IMMP55I.js";
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
  ɵɵproperty,
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
} from "./chunk-UPBSS6WA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-parcours/adminrh-parcours.component.ts
function AdminrhParcoursComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 91);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_div_7_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.success = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.success, " ");
  }
}
function AdminrhParcoursComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275element(1, "i", 93);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 91);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_div_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.error, " ");
  }
}
function AdminrhParcoursComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const niveau_r4 = ctx.$implicit;
    \u0275\u0275property("value", niveau_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(niveau_r4.label);
  }
}
function AdminrhParcoursComponent_tr_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "img", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div")(5, "h6", 96);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 97);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td")(10, "span", 98);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "div", 99)(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "small", 100);
    \u0275\u0275text(17, "estim\xE9e");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "td")(19, "div", 99)(20, "strong", 101);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "td")(23, "div", 99)(24, "strong");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "small", 100);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "td")(29, "div", 99)(30, "strong");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "small", 100);
    \u0275\u0275text(33, "inscrits");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "td")(35, "span", 102);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "td")(38, "div", 103)(39, "button", 104);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_tr_105_Template_button_click_39_listener() {
      const parcour_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewParcours(parcour_r6));
    });
    \u0275\u0275element(40, "i", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 106);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_tr_105_Template_button_click_41_listener() {
      const parcour_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editParcours(parcour_r6));
    });
    \u0275\u0275element(42, "i", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 108);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_tr_105_Template_button_click_43_listener() {
      const parcour_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete(parcour_r6));
    });
    \u0275\u0275element(44, "i", 109);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const parcour_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", parcour_r6.image_url || "assets/images/default-parcours.png", \u0275\u0275sanitizeUrl)("alt", parcour_r6.nom);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(parcour_r6.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Cr\xE9\xE9 le ", ctx_r1.formatDate(parcour_r6.created_at));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getNiveauLabel(parcour_r6.niveau));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", parcour_r6.duree_estimee, "h");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", parcour_r6.prix, "XOF");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(parcour_r6.formations.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFormationsObligatoires(parcour_r6.formations).length, " oblig. ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(parcour_r6.users.length);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(parcour_r6.actif ? "bg-success" : "bg-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", parcour_r6.actif ? "Actif" : "Inactif", " ");
  }
}
function AdminrhParcoursComponent_div_106_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 115);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_div_106_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openParcoursModal());
    });
    \u0275\u0275element(1, "i", 3);
    \u0275\u0275text(2, "Cr\xE9er un parcours ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_div_106_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 116);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_div_106_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275element(1, "i", 117);
    \u0275\u0275text(2, "Effacer les filtres ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275element(1, "i", 111);
    \u0275\u0275elementStart(2, "h6", 112);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 97);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminrhParcoursComponent_div_106_button_6_Template, 3, 0, "button", 113)(7, AdminrhParcoursComponent_div_106_button_7_Template, 3, 0, "button", 114);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.parcours.length === 0 ? "Aucun parcours trouv\xE9" : "Aucun r\xE9sultat pour ces filtres");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.parcours.length === 0 ? "Commencez par cr\xE9er votre premier parcours" : "Essayez de modifier vos crit\xE8res de recherche", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parcours.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parcours.length > 0);
  }
}
function AdminrhParcoursComponent_div_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "div", 118)(2, "span", 119);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 120);
    \u0275\u0275text(5, "Chargement des parcours...");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhParcoursComponent_div_108_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 115);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_div_108_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openParcoursModal());
    });
    \u0275\u0275element(1, "i", 3);
    \u0275\u0275text(2, "Cr\xE9er un parcours ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_div_108_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 116);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_div_108_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275element(1, "i", 117);
    \u0275\u0275text(2, "Effacer les filtres ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_div_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275element(1, "i", 122);
    \u0275\u0275elementStart(2, "h6", 112);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 97);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminrhParcoursComponent_div_108_button_6_Template, 3, 0, "button", 113)(7, AdminrhParcoursComponent_div_108_button_7_Template, 3, 0, "button", 114);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.parcours.length === 0 ? "Aucun parcours trouv\xE9" : "Aucun r\xE9sultat pour ces filtres");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.parcours.length === 0 ? "Commencez par cr\xE9er votre premier parcours" : "Essayez de modifier vos crit\xE8res de recherche", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parcours.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parcours.length > 0);
  }
}
function AdminrhParcoursComponent_div_109_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 125)(1, "a", 126);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_div_109_li_8_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(1));
    });
    \u0275\u0275text(2, "1");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhParcoursComponent_div_109_li_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 132)(1, "span", 133);
    \u0275\u0275text(2, "...");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhParcoursComponent_div_109_li_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 125)(1, "a", 126);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_div_109_li_10_Template_a_click_1_listener() {
      const page_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(page_r14));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r14 === ctx_r1.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r14);
  }
}
function AdminrhParcoursComponent_div_109_li_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 132)(1, "span", 133);
    \u0275\u0275text(2, "...");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhParcoursComponent_div_109_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 125)(1, "a", 126);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_div_109_li_12_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r15);
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
function AdminrhParcoursComponent_div_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 123)(1, "div", 97);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "nav")(4, "ul", 124)(5, "li", 125)(6, "a", 126);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_div_109_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(7, "i", 127);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AdminrhParcoursComponent_div_109_li_8_Template, 3, 0, "li", 128)(9, AdminrhParcoursComponent_div_109_li_9_Template, 3, 0, "li", 129)(10, AdminrhParcoursComponent_div_109_li_10_Template, 3, 3, "li", 130)(11, AdminrhParcoursComponent_div_109_li_11_Template, 3, 0, "li", 129)(12, AdminrhParcoursComponent_div_109_li_12_Template, 3, 1, "li", 128);
    \u0275\u0275elementStart(13, "li", 125)(14, "a", 126);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_div_109_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(15, "i", 131);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Affichage de ", ctx_r1.getPaginationStart(), " \xE0 ", ctx_r1.getPaginationEnd(), " sur ", ctx_r1.totalItems, " parcours ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.currentPage > 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentPage > 4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentPage < ctx_r1.totalPages - 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentPage < ctx_r1.totalPages - 2);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function AdminrhParcoursComponent_div_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275text(1, " Le nom est requis (min. 3 caract\xE8res) ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_div_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275text(1, " La description est requise (min. 10 caract\xE8res) ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_option_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const niveau_r16 = ctx.$implicit;
    \u0275\u0275property("value", niveau_r16.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(niveau_r16.label);
  }
}
function AdminrhParcoursComponent_div_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275text(1, " La dur\xE9e doit \xEAtre sup\xE9rieure \xE0 0 ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_div_148_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275text(1, " Le co\xFBt doit \xEAtre positif ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_div_167_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275text(1, " L'objectif est requis ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_div_167_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135)(1, "div", 136)(2, "span", 137);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 138);
    \u0275\u0275elementStart(5, "button", 139);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_div_167_Template_button_click_5_listener() {
      const i_r18 = \u0275\u0275restoreView(_r17).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeObjectif(i_r18));
    });
    \u0275\u0275element(6, "i", 109);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AdminrhParcoursComponent_div_167_div_7_Template, 2, 0, "div", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const objectif_r19 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r18);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", i_r18 + 1, ".");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.objectifsLength === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_6_0 = objectif_r19.get("value")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = objectif_r19.get("value")) == null ? null : tmp_6_0.touched));
  }
}
function AdminrhParcoursComponent_div_176_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275text(1, " Le pr\xE9requis est requis ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_div_176_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135)(1, "div", 136)(2, "span", 137);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 140);
    \u0275\u0275elementStart(5, "button", 139);
    \u0275\u0275listener("click", function AdminrhParcoursComponent_div_176_Template_button_click_5_listener() {
      const i_r21 = \u0275\u0275restoreView(_r20).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removePrerequis(i_r21));
    });
    \u0275\u0275element(6, "i", 109);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AdminrhParcoursComponent_div_176_div_7_Template, 2, 0, "div", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const prerequisControl_r22 = ctx.$implicit;
    const i_r21 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r21);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", i_r21 + 1, ".");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.prerequisLength === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_6_0 = prerequisControl_r22.get("value")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = prerequisControl_r22.get("value")) == null ? null : tmp_6_0.touched));
  }
}
function AdminrhParcoursComponent_span_181_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 141);
  }
}
function AdminrhParcoursComponent_div_190_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 161);
    \u0275\u0275text(1, "Actif");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_div_190_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 162);
    \u0275\u0275text(1, "Inactif");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_div_190_li_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 96);
    \u0275\u0275element(1, "i", 163);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const objectif_r23 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", objectif_r23, " ");
  }
}
function AdminrhParcoursComponent_div_190_li_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 96);
    \u0275\u0275element(1, "i", 164);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const prerequis_r24 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", prerequis_r24, " ");
  }
}
function AdminrhParcoursComponent_div_190_div_77_div_2_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 176);
    \u0275\u0275text(1, "Obligatoire");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_div_190_div_77_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 169)(1, "div", 170)(2, "div", 171)(3, "h6", 96);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 162);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 172);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 173)(10, "div")(11, "span", 174);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AdminrhParcoursComponent_div_190_div_77_div_2_span_13_Template, 2, 0, "span", 175);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "small", 97);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const formation_r25 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(formation_r25.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((formation_r25.pivot == null ? null : formation_r25.pivot.ordre) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(formation_r25.short_description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(formation_r25.niveau);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r25.pivot == null ? null : formation_r25.pivot.obligatoire);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", formation_r25.duree_totale, "h - ", formation_r25.prix, "XOF");
  }
}
function AdminrhParcoursComponent_div_190_div_77_tr_20_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 179);
    \u0275\u0275text(1, "Obligatoire");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_div_190_div_77_tr_20_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 161);
    \u0275\u0275text(1, "Publi\xE9");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_div_190_div_77_tr_20_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 162);
    \u0275\u0275text(1, "Brouillon");
    \u0275\u0275elementEnd();
  }
}
function AdminrhParcoursComponent_div_190_div_77_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 162);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div")(6, "strong", 177);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AdminrhParcoursComponent_div_190_div_77_tr_20_span_8_Template, 2, 0, "span", 178);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span", 151);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275template(17, AdminrhParcoursComponent_div_190_div_77_tr_20_span_17_Template, 2, 0, "span", 149)(18, AdminrhParcoursComponent_div_190_div_77_tr_20_span_18_Template, 2, 0, "span", 150);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const formation_r26 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((formation_r26.pivot == null ? null : formation_r26.pivot.ordre) || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(formation_r26.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r26.pivot == null ? null : formation_r26.pivot.obligatoire);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(formation_r26.niveau);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", formation_r26.duree_totale, "h");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", formation_r26.prix, "XOF");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", formation_r26.est_publie);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !formation_r26.est_publie);
  }
}
function AdminrhParcoursComponent_div_190_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 165);
    \u0275\u0275template(2, AdminrhParcoursComponent_div_190_div_77_div_2_Template, 16, 7, "div", 166);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 167)(4, "table", 168)(5, "thead")(6, "tr")(7, "th");
    \u0275\u0275text(8, "Ordre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Co\xFBt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Statut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, AdminrhParcoursComponent_div_190_div_77_tr_20_Template, 19, 8, "tr", 40);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.selectedParcours.formations)("ngForTrackBy", ctx_r1.trackByFormationId);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r1.selectedParcours.formations)("ngForTrackBy", ctx_r1.trackByFormationId);
  }
}
function AdminrhParcoursComponent_div_190_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 180);
    \u0275\u0275element(1, "i", 181);
    \u0275\u0275elementStart(2, "p", 182);
    \u0275\u0275text(3, "Aucune formation dans ce parcours");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhParcoursComponent_div_190_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 142)(2, "div", 143);
    \u0275\u0275element(3, "img", 144);
    \u0275\u0275elementStart(4, "div", 145)(5, "h4", 146);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 147);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 148)(10, "span", 98);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AdminrhParcoursComponent_div_190_span_12_Template, 2, 0, "span", 149)(13, AdminrhParcoursComponent_div_190_span_13_Template, 2, 0, "span", 150);
    \u0275\u0275elementStart(14, "span", 151);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 152);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "div", 52)(19, "div", 153)(20, "h6");
    \u0275\u0275text(21, "Statistiques");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 154)(23, "div", 155)(24, "span");
    \u0275\u0275text(25, "Formations incluses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "strong");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 155)(29, "span");
    \u0275\u0275text(30, "Dur\xE9e totale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "strong");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 155)(34, "span");
    \u0275\u0275text(35, "Formations obligatoires");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "strong");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 155)(39, "span");
    \u0275\u0275text(40, "Inscrits actuels");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "strong");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 153)(44, "h6");
    \u0275\u0275text(45, "Informations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 154)(47, "div", 156)(48, "strong");
    \u0275\u0275text(49, "Niveau:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 156)(52, "strong");
    \u0275\u0275text(53, "Dur\xE9e estim\xE9e:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 156)(56, "strong");
    \u0275\u0275text(57, "Co\xFBt:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 156)(60, "strong");
    \u0275\u0275text(61, "Cr\xE9\xE9 le:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "div", 52)(64, "div", 153)(65, "h6");
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "ul", 157);
    \u0275\u0275template(68, AdminrhParcoursComponent_div_190_li_68_Template, 3, 1, "li", 158);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 153)(70, "h6");
    \u0275\u0275text(71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "ul", 157);
    \u0275\u0275template(73, AdminrhParcoursComponent_div_190_li_73_Template, 3, 1, "li", 158);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(74, "div", 54)(75, "h6");
    \u0275\u0275text(76);
    \u0275\u0275elementEnd();
    \u0275\u0275template(77, AdminrhParcoursComponent_div_190_div_77_Template, 21, 4, "div", 159)(78, AdminrhParcoursComponent_div_190_div_78_Template, 4, 0, "div", 160);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.selectedParcours.image_url || "assets/images/default-parcours.png", \u0275\u0275sanitizeUrl)("alt", ctx_r1.selectedParcours.nom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedParcours.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedParcours.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getNiveauLabel(ctx_r1.selectedParcours.niveau));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParcours.actif);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedParcours.actif);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedParcours.duree_estimee, "h");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedParcours.prix, "XOF");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.selectedParcours.formations.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.getTotalDuration(ctx_r1.selectedParcours.formations), "h");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getFormationsObligatoires(ctx_r1.selectedParcours.formations).length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedParcours.users.length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getNiveauLabel(ctx_r1.selectedParcours.niveau), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedParcours.duree_estimee, "h ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedParcours.prix, "XOF ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(ctx_r1.selectedParcours.created_at), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Objectifs (", ctx_r1.selectedParcours.objectifs.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.selectedParcours.objectifs);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Pr\xE9requis (", ctx_r1.selectedParcours.prerequis.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.selectedParcours.prerequis);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Formations du parcours (", ctx_r1.selectedParcours.formations.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParcours.formations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedParcours.formations.length === 0);
  }
}
function AdminrhParcoursComponent_p_205_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 97);
    \u0275\u0275text(1, ' \xCAtes-vous s\xFBr de vouloir supprimer le parcours "');
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, '" ? ');
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
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
        this.error = "Impossible de charger les parcours.";
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
    this.resetForm();
    const modal = new bootstrap.Modal(document.getElementById("parcoursModal"));
    modal.show();
  }
  editParcours(parcours) {
    this.editMode = true;
    this.selectedParcours = parcours;
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
      image_url: formValue.image_url?.trim() || void 0
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
  trackByParcoursId(index, parcours) {
    return parcours.id;
  }
  trackByFormationId(index, formation) {
    return formation.id;
  }
  static \u0275fac = function AdminrhParcoursComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhParcoursComponent)(\u0275\u0275directiveInject(ParcoursService), \u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhParcoursComponent, selectors: [["app-adminrh-parcours"]], decls: 214, vars: 31, consts: [[1, "parcours"], [1, "page-title", "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "btn", "btn-primary", "d-flex", "align-items-center", 3, "click"], [1, "isax", "isax-add-circle", "me-2"], ["class", "alert alert-success alert-dismissible fade show", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", 4, "ngIf"], [1, "card", "mb-4"], [1, "card-body"], [1, "row", "g-3"], [1, "col-md-4"], [1, "form-group"], [1, "form-label"], ["type", "text", "placeholder", "Nom, description...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-3"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "actif"], ["value", "inactif"], [1, "col-md-2", "d-flex", "align-items-end"], [1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "isax", "isax-refresh", "me-1"], [1, "row", "mb-4"], [1, "card", "bg-primary", "text-white"], [1, "d-flex", "justify-content-between"], [1, "card-title"], [1, "mb-0"], [1, "isax", "isax-routing-2", 2, "font-size", "2rem", "opacity", "0.7"], [1, "card", "bg-success", "text-white"], [1, "isax", "isax-tick-circle", 2, "font-size", "2rem", "opacity", "0.7"], [1, "card", "bg-info", "text-white"], [1, "isax", "isax-book", 2, "font-size", "2rem", "opacity", "0.7"], [1, "card", "bg-warning", "text-white"], [1, "isax", "isax-document", 2, "font-size", "2rem", "opacity", "0.7"], [1, "parcours-list"], [1, "table-responsive"], [1, "table", "table-hover"], [2, "width", "80px"], [2, "width", "120px"], [2, "width", "100px"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "text-center py-4", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "d-flex justify-content-between align-items-center mt-4", 4, "ngIf"], ["id", "parcoursModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "row"], [1, "col-12"], [1, "mb-3"], ["type", "text", "formControlName", "nom", "placeholder", "Ex: D\xE9veloppement Web Full Stack", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["rows", "3", "formControlName", "description", "placeholder", "Description d\xE9taill\xE9e du parcours", 1, "form-control"], [1, "col-md-6"], ["formControlName", "niveau", 1, "form-select"], ["type", "number", "formControlName", "duree_estimee", "min", "1", 1, "form-control"], ["type", "number", "formControlName", "prix", "min", "0", "step", "0.01", 1, "form-control"], ["type", "url", "formControlName", "image_url", "placeholder", "https://example.com/image.jpg", 1, "form-control"], [1, "form-check", "mb-3"], ["type", "checkbox", "formControlName", "actif", "id", "actif", 1, "form-check-input"], ["for", "actif", 1, "form-check-label"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "isax", "isax-add-circle", "me-1"], ["formArrayName", "objectifs"], ["class", "mb-2", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["formArrayName", "prerequis"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["id", "viewModal", "tabindex", "-1", 1, "modal", "fade"], ["class", "modal-body", 4, "ngIf"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], [1, "isax", "isax-edit-2", "me-2"], ["id", "deleteModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-body", "text-center", "py-4"], [1, "isax", "isax-trash", "text-danger", 2, "font-size", "3rem"], ["class", "text-muted", 4, "ngIf"], [1, "text-warning", "small"], [1, "isax", "isax-warning-2", "me-1"], [1, "d-flex", "justify-content-center", "gap-2", "mt-4"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "isax", "isax-tick-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "isax", "isax-close-circle", "me-2"], [3, "value"], [1, "rounded", 2, "width", "50px", "height", "50px", "object-fit", "cover", 3, "src", "alt"], [1, "mb-1"], [1, "text-muted"], [1, "badge", "bg-primary"], [1, "text-center"], [1, "d-block", "text-muted"], [1, "text-success"], [1, "badge"], [1, "d-flex", "gap-1"], ["title", "Voir d\xE9tails", 1, "btn", "btn-sm", "btn-outline-info", 3, "click"], [1, "isax", "isax-eye"], ["title", "Modifier", 1, "btn", "btn-sm", "btn-outline-warning", 3, "click"], [1, "isax", "isax-edit-2"], ["title", "Supprimer", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "isax", "isax-trash"], [1, "text-center", "py-4"], [1, "isax", "isax-routing-2", "text-muted", 2, "font-size", "3rem"], [1, "text-muted", "mt-3"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-secondary", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "isax", "isax-refresh", "me-2"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "mt-2", "text-muted"], [1, "text-center", "py-5"], [1, "isax", "isax-routing-2", "text-muted", 2, "font-size", "4rem"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-4"], [1, "pagination", "mb-0"], [1, "page-item"], ["href", "javascript:void(0);", 1, "page-link", 3, "click"], [1, "isax", "isax-arrow-left-3"], ["class", "page-item", 4, "ngIf"], ["class", "page-item disabled", 4, "ngIf"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-3"], [1, "page-item", "disabled"], [1, "page-link"], [1, "invalid-feedback"], [1, "mb-2", 3, "formGroupName"], [1, "input-group", "input-group-sm"], [1, "input-group-text"], ["type", "text", "formControlName", "value", "placeholder", "D\xE9crivez un objectif du parcours", 1, "form-control"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click", "disabled"], ["type", "text", "formControlName", "value", "placeholder", "D\xE9crivez un pr\xE9requis", 1, "form-control"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "mb-4"], [1, "d-flex", "align-items-start", "p-3", "bg-light", "rounded"], [1, "me-3", "rounded", 2, "width", "80px", "height", "80px", "object-fit", "cover", 3, "src", "alt"], [1, "flex-grow-1"], [1, "mb-2"], [1, "mb-2", "text-muted"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], ["class", "badge bg-success", 4, "ngIf"], ["class", "badge bg-secondary", 4, "ngIf"], [1, "badge", "bg-info"], [1, "badge", "bg-warning"], [1, "col-md-6", "mb-3"], [1, "list-group", "list-group-flush", "small"], [1, "list-group-item", "d-flex", "justify-content-between", "py-2"], [1, "list-group-item", "py-2"], [1, "list-unstyled", "small"], ["class", "mb-1", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "text-center text-muted py-3", 4, "ngIf"], [1, "badge", "bg-success"], [1, "badge", "bg-secondary"], [1, "isax", "isax-tick-circle", "text-success", "me-2"], [1, "isax", "isax-info-circle", "text-info", "me-2"], [1, "d-md-none"], ["class", "card mb-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "table-responsive", "d-none", "d-md-block"], [1, "table", "table-sm"], [1, "card", "mb-2"], [1, "card-body", "p-3"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-2"], [1, "small", "text-muted", "mb-2"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "bg-info", "me-1"], ["class", "badge bg-danger me-1", 4, "ngIf"], [1, "badge", "bg-danger", "me-1"], [1, "d-block"], ["class", "badge bg-danger", 4, "ngIf"], [1, "badge", "bg-danger"], [1, "text-center", "text-muted", "py-3"], [1, "isax", "isax-book", 2, "font-size", "2rem", "opacity", "0.5"], [1, "mt-2", "mb-0"]], template: function AdminrhParcoursComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
      \u0275\u0275text(3, "Gestion des Parcours de Formation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function AdminrhParcoursComponent_Template_button_click_4_listener() {
        return ctx.openParcoursModal();
      });
      \u0275\u0275element(5, "i", 3);
      \u0275\u0275text(6, "Nouveau Parcours ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, AdminrhParcoursComponent_div_7_Template, 4, 1, "div", 4)(8, AdminrhParcoursComponent_div_8_Template, 4, 1, "div", 5);
      \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "label", 11);
      \u0275\u0275text(15, "Rechercher");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhParcoursComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 10)(19, "label", 11);
      \u0275\u0275text(20, "Niveau");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhParcoursComponent_Template_select_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedNiveau, $event) || (ctx.selectedNiveau = $event);
        return $event;
      });
      \u0275\u0275elementStart(22, "option", 15);
      \u0275\u0275text(23, "Tous les niveaux");
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, AdminrhParcoursComponent_option_24_Template, 2, 2, "option", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 13)(26, "div", 10)(27, "label", 11);
      \u0275\u0275text(28, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhParcoursComponent_Template_select_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedStatut, $event) || (ctx.selectedStatut = $event);
        return $event;
      });
      \u0275\u0275elementStart(30, "option", 15);
      \u0275\u0275text(31, "Tous les statuts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 17);
      \u0275\u0275text(33, "Actif");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "option", 18);
      \u0275\u0275text(35, "Inactif");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 19)(37, "button", 20);
      \u0275\u0275listener("click", function AdminrhParcoursComponent_Template_button_click_37_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275element(38, "i", 21);
      \u0275\u0275text(39, "Effacer ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(40, "div", 22)(41, "div", 13)(42, "div", 23)(43, "div", 7)(44, "div", 24)(45, "div")(46, "h6", 25);
      \u0275\u0275text(47, "Total Parcours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "h4", 26);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(50, "i", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "div", 13)(52, "div", 28)(53, "div", 7)(54, "div", 24)(55, "div")(56, "h6", 25);
      \u0275\u0275text(57, "Parcours Actifs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "h4", 26);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(60, "i", 29);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "div", 13)(62, "div", 30)(63, "div", 7)(64, "div", 24)(65, "div")(66, "h6", 25);
      \u0275\u0275text(67, "Formations Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "h4", 26);
      \u0275\u0275text(69);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(70, "i", 31);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(71, "div", 13)(72, "div", 32)(73, "div", 7)(74, "div", 24)(75, "div")(76, "h6", 25);
      \u0275\u0275text(77, "Page Actuelle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "h4", 26);
      \u0275\u0275text(79);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(80, "i", 33);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(81, "div", 34)(82, "div", 35)(83, "table", 36)(84, "thead")(85, "tr")(86, "th", 37);
      \u0275\u0275text(87, "Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th");
      \u0275\u0275text(89, "Nom du Parcours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th", 38);
      \u0275\u0275text(91, "Niveau");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th", 39);
      \u0275\u0275text(93, "Dur\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "th", 39);
      \u0275\u0275text(95, "Co\xFBt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "th", 38);
      \u0275\u0275text(97, "Formations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "th", 39);
      \u0275\u0275text(99, "Inscrits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "th", 39);
      \u0275\u0275text(101, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "th", 38);
      \u0275\u0275text(103, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(104, "tbody");
      \u0275\u0275template(105, AdminrhParcoursComponent_tr_105_Template, 45, 13, "tr", 40);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(106, AdminrhParcoursComponent_div_106_Template, 8, 4, "div", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275template(107, AdminrhParcoursComponent_div_107_Template, 6, 0, "div", 41)(108, AdminrhParcoursComponent_div_108_Template, 8, 4, "div", 42)(109, AdminrhParcoursComponent_div_109_Template, 16, 12, "div", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 44)(111, "div", 45)(112, "div", 46)(113, "div", 47)(114, "h5", 48);
      \u0275\u0275text(115);
      \u0275\u0275elementEnd();
      \u0275\u0275element(116, "button", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "form", 50);
      \u0275\u0275listener("ngSubmit", function AdminrhParcoursComponent_Template_form_ngSubmit_117_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(118, "div", 51)(119, "div", 52)(120, "div", 53)(121, "div", 54)(122, "label", 11);
      \u0275\u0275text(123, "Nom du parcours *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(124, "input", 55);
      \u0275\u0275template(125, AdminrhParcoursComponent_div_125_Template, 2, 0, "div", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div", 54)(127, "label", 11);
      \u0275\u0275text(128, "Description *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(129, "textarea", 57);
      \u0275\u0275template(130, AdminrhParcoursComponent_div_130_Template, 2, 0, "div", 56);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(131, "div", 52)(132, "div", 58)(133, "div", 54)(134, "label", 11);
      \u0275\u0275text(135, "Niveau *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "select", 59);
      \u0275\u0275template(137, AdminrhParcoursComponent_option_137_Template, 2, 2, "option", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "div", 54)(139, "label", 11);
      \u0275\u0275text(140, "Dur\xE9e estim\xE9e (heures) *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(141, "input", 60);
      \u0275\u0275template(142, AdminrhParcoursComponent_div_142_Template, 2, 0, "div", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "div", 58)(144, "div", 54)(145, "label", 11);
      \u0275\u0275text(146, "Prix (XOF) *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(147, "input", 61);
      \u0275\u0275template(148, AdminrhParcoursComponent_div_148_Template, 2, 0, "div", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "div", 54)(150, "label", 11);
      \u0275\u0275text(151, "Image URL");
      \u0275\u0275elementEnd();
      \u0275\u0275element(152, "input", 62);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(153, "div", 52)(154, "div", 53)(155, "div", 63);
      \u0275\u0275element(156, "input", 64);
      \u0275\u0275elementStart(157, "label", 65);
      \u0275\u0275text(158, " Parcours actif ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(159, "div", 54)(160, "div", 66)(161, "h6", 26);
      \u0275\u0275text(162, "Objectifs du parcours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "button", 67);
      \u0275\u0275listener("click", function AdminrhParcoursComponent_Template_button_click_163_listener() {
        return ctx.addObjectif();
      });
      \u0275\u0275element(164, "i", 68);
      \u0275\u0275text(165, "Ajouter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "div", 69);
      \u0275\u0275template(167, AdminrhParcoursComponent_div_167_Template, 8, 4, "div", 70);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "div", 54)(169, "div", 66)(170, "h6", 26);
      \u0275\u0275text(171, "Pr\xE9requis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "button", 67);
      \u0275\u0275listener("click", function AdminrhParcoursComponent_Template_button_click_172_listener() {
        return ctx.addPrerequis();
      });
      \u0275\u0275element(173, "i", 68);
      \u0275\u0275text(174, "Ajouter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(175, "div", 71);
      \u0275\u0275template(176, AdminrhParcoursComponent_div_176_Template, 8, 4, "div", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(177, "div", 72)(178, "button", 73);
      \u0275\u0275text(179, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "button", 74);
      \u0275\u0275template(181, AdminrhParcoursComponent_span_181_Template, 1, 0, "span", 75);
      \u0275\u0275text(182);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(183, "div", 76)(184, "div", 45)(185, "div", 46)(186, "div", 47)(187, "h5", 48);
      \u0275\u0275text(188, "D\xE9tails du Parcours");
      \u0275\u0275elementEnd();
      \u0275\u0275element(189, "button", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275template(190, AdminrhParcoursComponent_div_190_Template, 79, 24, "div", 77);
      \u0275\u0275elementStart(191, "div", 72)(192, "button", 73);
      \u0275\u0275text(193, "Fermer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "button", 78);
      \u0275\u0275listener("click", function AdminrhParcoursComponent_Template_button_click_194_listener() {
        return ctx.editParcours(ctx.selectedParcours);
      });
      \u0275\u0275element(195, "i", 79);
      \u0275\u0275text(196, "Modifier ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(197, "div", 80)(198, "div", 81)(199, "div", 46)(200, "div", 82)(201, "div", 54);
      \u0275\u0275element(202, "i", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "h5");
      \u0275\u0275text(204, "Supprimer le parcours");
      \u0275\u0275elementEnd();
      \u0275\u0275template(205, AdminrhParcoursComponent_p_205_Template, 5, 1, "p", 84);
      \u0275\u0275elementStart(206, "p", 85);
      \u0275\u0275element(207, "i", 86);
      \u0275\u0275text(208, " Cette action est irr\xE9versible et supprimera aussi les inscriptions associ\xE9es. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "div", 87)(210, "button", 73);
      \u0275\u0275text(211, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "button", 88);
      \u0275\u0275listener("click", function AdminrhParcoursComponent_Template_button_click_212_listener() {
        return ctx.deleteParcours();
      });
      \u0275\u0275text(213, " Supprimer d\xE9finitivement ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_18_0;
      let tmp_19_0;
      let tmp_21_0;
      let tmp_22_0;
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedNiveau);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.niveaux);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatut);
      \u0275\u0275advance(20);
      \u0275\u0275textInterpolate(ctx.totalItems);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.getParcoursActifs());
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.formations.length);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate2("", ctx.currentPage, "/", ctx.totalPages);
      \u0275\u0275advance(26);
      \u0275\u0275property("ngForOf", ctx.filteredParcours)("ngForTrackBy", ctx.trackByParcoursId);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredParcours.length === 0 && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredParcours.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalPages > 1);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.editMode ? "Modifier le Parcours" : "Nouveau Parcours", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.parcoursForm);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ((tmp_18_0 = ctx.parcoursForm.get("nom")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx.parcoursForm.get("nom")) == null ? null : tmp_18_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ((tmp_19_0 = ctx.parcoursForm.get("description")) == null ? null : tmp_19_0.invalid) && ((tmp_19_0 = ctx.parcoursForm.get("description")) == null ? null : tmp_19_0.touched));
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.niveaux);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ((tmp_21_0 = ctx.parcoursForm.get("duree_estimee")) == null ? null : tmp_21_0.invalid) && ((tmp_21_0 = ctx.parcoursForm.get("duree_estimee")) == null ? null : tmp_21_0.touched));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ((tmp_22_0 = ctx.parcoursForm.get("prix")) == null ? null : tmp_22_0.invalid) && ((tmp_22_0 = ctx.parcoursForm.get("prix")) == null ? null : tmp_22_0.touched));
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.objectifs.controls);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.prerequis.controls);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.parcoursForm.invalid || ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.editMode ? "Modifier" : "Cr\xE9er", " ");
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.selectedParcours);
      \u0275\u0275advance(15);
      \u0275\u0275property("ngIf", ctx.selectedParcours);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, FormsModule, NgModel], styles: ["\n\n.parcours[_ngcontent-%COMP%]   .parcours-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n  border: 1px solid #e9ecef;\n}\n.parcours[_ngcontent-%COMP%]   .parcours-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border-color: #007bff;\n}\n.parcours[_ngcontent-%COMP%]   .parcours-list[_ngcontent-%COMP%]   .parcours-image[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n}\n.parcours[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n}\n.parcours[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 0.375rem 0.75rem;\n}\n.parcours[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  border-color: #adb5bd;\n}\n.parcours[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n.parcours[_ngcontent-%COMP%]   .spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.modal-xl[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n.list-group-item[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: none;\n}\n.list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top: none;\n}\n.list-group-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.parcours[_ngcontent-%COMP%]   .parcours-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n  border: 1px solid #e9ecef;\n}\n.parcours[_ngcontent-%COMP%]   .parcours-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border-color: #007bff;\n}\n.parcours[_ngcontent-%COMP%]   .parcours-list[_ngcontent-%COMP%]   .parcours-image[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n}\n.parcours[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n}\n.parcours[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 0.375rem 0.75rem;\n}\n.parcours[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  border-color: #adb5bd;\n}\n.parcours[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n.parcours[_ngcontent-%COMP%]   .spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.modal-lg[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n@media (max-width: 767px) {\n  .modal-lg[_ngcontent-%COMP%] {\n    max-width: 95%;\n    margin: 10px auto;\n  }\n}\n.modal-dialog-scrollable[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  max-height: 90vh;\n}\n.modal-dialog-scrollable[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  max-height: calc(90vh - 150px);\n  overflow-y: auto;\n}\n@media (max-width: 767px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 10px;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .input-group-sm[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.875rem;\n  }\n}\n.list-group-flush[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: none;\n}\n.list-group-flush[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top: none;\n}\n.list-group-flush[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: none;\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.9rem;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.table-responsive[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  margin: 0 0.125rem;\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.input-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  min-width: 40px;\n  justify-content: center;\n}\n.input-group-sm[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  min-width: 35px;\n  font-size: 0.875rem;\n}\n.input-group-sm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n}\n.parcours[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 2px solid #dee2e6;\n  font-weight: 600;\n  color: #495057;\n  white-space: nowrap;\n}\n.parcours[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  padding: 0.75rem 0.5rem;\n}\n.parcours[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n.parcours[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n@media (max-width: 992px) {\n  .parcours[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .parcours[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .parcours[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.25rem;\n  }\n  .parcours[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n    padding: 0.2rem 0.4rem;\n  }\n  .parcours[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n@media (max-width: 767px) {\n  .parcours[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .parcours[_ngcontent-%COMP%]   .mobile-cards[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (min-width: 768px) {\n  .parcours[_ngcontent-%COMP%]   .mobile-cards[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.parcours[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n}\n.parcours[_ngcontent-%COMP%]   .spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: none;\n  font-weight: 600;\n  color: #495057;\n}\n.table-responsive[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  margin: 0 0.125rem;\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.input-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  min-width: 45px;\n  justify-content: center;\n}\n/*# sourceMappingURL=adminrh-parcours.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhParcoursComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-parcours", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule], template: `<div class="parcours">\r
  <!-- En-t\xEAte avec titre et bouton d'ajout -->\r
  <div class="page-title d-flex align-items-center justify-content-between mb-4">\r
    <h5>Gestion des Parcours de Formation</h5>\r
    <button class="btn btn-primary d-flex align-items-center" (click)="openParcoursModal()">\r
      <i class="isax isax-add-circle me-2"></i>Nouveau Parcours\r
    </button>\r
  </div>\r
\r
  <!-- Messages d'alerte -->\r
  <div class="alert alert-success alert-dismissible fade show" *ngIf="success">\r
    <i class="isax isax-tick-circle me-2"></i>{{ success }}\r
    <button type="button" class="btn-close" (click)="success = ''"></button>\r
  </div>\r
\r
  <div class="alert alert-danger alert-dismissible fade show" *ngIf="error">\r
    <i class="isax isax-close-circle me-2"></i>{{ error }}\r
    <button type="button" class="btn-close" (click)="error = ''"></button>\r
  </div>\r
\r
  <!-- Filtres et recherche -->\r
  <div class="card mb-4">\r
    <div class="card-body">\r
      <div class="row g-3">\r
        <div class="col-md-4">\r
          <div class="form-group">\r
            <label class="form-label">Rechercher</label>\r
            <input type="text" class="form-control" [(ngModel)]="searchTerm" \r
                   placeholder="Nom, description...">\r
          </div>\r
        </div>\r
        <div class="col-md-3">\r
          <div class="form-group">\r
            <label class="form-label">Niveau</label>\r
            <select class="form-select" [(ngModel)]="selectedNiveau">\r
              <option value="">Tous les niveaux</option>\r
              <option *ngFor="let niveau of niveaux" [value]="niveau.value">{{ niveau.label }}</option>\r
            </select>\r
          </div>\r
        </div>\r
        <div class="col-md-3">\r
          <div class="form-group">\r
            <label class="form-label">Statut</label>\r
            <select class="form-select" [(ngModel)]="selectedStatut">\r
              <option value="">Tous les statuts</option>\r
              <option value="actif">Actif</option>\r
              <option value="inactif">Inactif</option>\r
            </select>\r
          </div>\r
        </div>\r
        <div class="col-md-2 d-flex align-items-end">\r
          <button class="btn btn-outline-secondary w-100" (click)="clearFilters()">\r
            <i class="isax isax-refresh me-1"></i>Effacer\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Statistiques rapides -->\r
  <div class="row mb-4">\r
    <div class="col-md-3">\r
      <div class="card bg-primary text-white">\r
        <div class="card-body">\r
          <div class="d-flex justify-content-between">\r
            <div>\r
              <h6 class="card-title">Total Parcours</h6>\r
              <h4 class="mb-0">{{ totalItems }}</h4>\r
            </div>\r
            <i class="isax isax-routing-2" style="font-size: 2rem; opacity: 0.7;"></i>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="col-md-3">\r
      <div class="card bg-success text-white">\r
        <div class="card-body">\r
          <div class="d-flex justify-content-between">\r
            <div>\r
              <h6 class="card-title">Parcours Actifs</h6>\r
              <h4 class="mb-0">{{ getParcoursActifs() }}</h4>\r
            </div>\r
            <i class="isax isax-tick-circle" style="font-size: 2rem; opacity: 0.7;"></i>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="col-md-3">\r
      <div class="card bg-info text-white">\r
        <div class="card-body">\r
          <div class="d-flex justify-content-between">\r
            <div>\r
              <h6 class="card-title">Formations Total</h6>\r
              <h4 class="mb-0">{{ formations.length }}</h4>\r
            </div>\r
            <i class="isax isax-book" style="font-size: 2rem; opacity: 0.7;"></i>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="col-md-3">\r
      <div class="card bg-warning text-white">\r
        <div class="card-body">\r
          <div class="d-flex justify-content-between">\r
            <div>\r
              <h6 class="card-title">Page Actuelle</h6>\r
              <h4 class="mb-0">{{ currentPage }}/{{ totalPages }}</h4>\r
            </div>\r
            <i class="isax isax-document" style="font-size: 2rem; opacity: 0.7;"></i>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Liste des parcours -->\r
  <div class="parcours-list">\r
  <div class="table-responsive">\r
    <table class="table table-hover">\r
      <thead>\r
        <tr>\r
          <th style="width: 80px;">Image</th>\r
          <th>Nom du Parcours</th>\r
          <th style="width: 120px;">Niveau</th>\r
          <th style="width: 100px;">Dur\xE9e</th>\r
          <th style="width: 100px;">Co\xFBt</th>\r
          <th style="width: 120px;">Formations</th>\r
          <th style="width: 100px;">Inscrits</th>\r
          <th style="width: 100px;">Statut</th>\r
          <th style="width: 120px;">Actions</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let parcour of filteredParcours; trackBy: trackByParcoursId">\r
          <!-- Image -->\r
          <td>\r
            <img [src]="parcour.image_url || 'assets/images/default-parcours.png'" \r
                 [alt]="parcour.nom" \r
                 class="rounded"\r
                 style="width: 50px; height: 50px; object-fit: cover;">\r
          </td>\r
\r
          <!-- Nom du parcours -->\r
          <td>\r
            <div>\r
              <h6 class="mb-1">{{ parcour.nom }}</h6>\r
              <small class="text-muted">Cr\xE9\xE9 le {{ formatDate(parcour.created_at) }}</small>\r
            </div>\r
          </td>\r
\r
          <!-- Niveau -->\r
          <td>\r
            <span class="badge bg-primary">{{ getNiveauLabel(parcour.niveau) }}</span>\r
          </td>\r
\r
          <!-- Dur\xE9e -->\r
          <td>\r
            <div class="text-center">\r
              <strong>{{ parcour.duree_estimee }}h</strong>\r
              <small class="d-block text-muted">estim\xE9e</small>\r
            </div>\r
          </td>\r
\r
          <!-- Prix -->\r
          <td>\r
            <div class="text-center">\r
              <strong class="text-success">{{ parcour.prix }}XOF</strong>\r
            </div>\r
          </td>\r
\r
          <!-- Formations -->\r
          <td>\r
            <div class="text-center">\r
              <strong>{{ parcour.formations.length }}</strong>\r
              <small class="d-block text-muted">\r
                {{ getFormationsObligatoires(parcour.formations).length }} oblig.\r
              </small>\r
            </div>\r
          </td>\r
\r
          <!-- Inscrits -->\r
          <td>\r
            <div class="text-center">\r
              <strong>{{ parcour.users.length }}</strong>\r
              <small class="d-block text-muted">inscrits</small>\r
            </div>\r
          </td>\r
\r
          <!-- Statut -->\r
          <td>\r
            <span class="badge" \r
                  [class]="parcour.actif ? 'bg-success' : 'bg-secondary'">\r
              {{ parcour.actif ? 'Actif' : 'Inactif' }}\r
            </span>\r
          </td>\r
\r
          <!-- Actions -->\r
          <td>\r
            <div class="d-flex gap-1">\r
              <button class="btn btn-sm btn-outline-info" \r
                      (click)="viewParcours(parcour)"\r
                      title="Voir d\xE9tails">\r
                <i class="isax isax-eye"></i>\r
              </button>\r
              <button class="btn btn-sm btn-outline-warning" \r
                      (click)="editParcours(parcour)"\r
                      title="Modifier">\r
                <i class="isax isax-edit-2"></i>\r
              </button>\r
              <button class="btn btn-sm btn-outline-danger" \r
                      (click)="confirmDelete(parcour)"\r
                      title="Supprimer">\r
                <i class="isax isax-trash"></i>\r
              </button>\r
            </div>\r
          </td>\r
        </tr>\r
      </tbody>\r
    </table>\r
  </div>\r
\r
  <!-- Message si aucun r\xE9sultat -->\r
  <div class="text-center py-4" *ngIf="filteredParcours.length === 0 && !loading">\r
    <i class="isax isax-routing-2 text-muted" style="font-size: 3rem;"></i>\r
    <h6 class="text-muted mt-3">{{ parcours.length === 0 ? 'Aucun parcours trouv\xE9' : 'Aucun r\xE9sultat pour ces filtres' }}</h6>\r
    <p class="text-muted">\r
      {{ parcours.length === 0 ? 'Commencez par cr\xE9er votre premier parcours' : 'Essayez de modifier vos crit\xE8res de recherche' }}\r
    </p>\r
    <button class="btn btn-primary" (click)="openParcoursModal()" *ngIf="parcours.length === 0">\r
      <i class="isax isax-add-circle me-2"></i>Cr\xE9er un parcours\r
    </button>\r
    <button class="btn btn-outline-secondary" (click)="clearFilters()" *ngIf="parcours.length > 0">\r
      <i class="isax isax-refresh me-2"></i>Effacer les filtres\r
    </button>\r
  </div>\r
</div>\r
\r
\r
  <!-- \xC9tat de chargement -->\r
  <div class="text-center py-4" *ngIf="loading">\r
    <div class="spinner-border" role="status">\r
      <span class="visually-hidden">Chargement...</span>\r
    </div>\r
    <p class="mt-2 text-muted">Chargement des parcours...</p>\r
  </div>\r
\r
  <!-- \xC9tat vide -->\r
  <div class="text-center py-5" *ngIf="!loading && filteredParcours.length === 0">\r
    <i class="isax isax-routing-2 text-muted" style="font-size: 4rem;"></i>\r
    <h6 class="text-muted mt-3">{{ parcours.length === 0 ? 'Aucun parcours trouv\xE9' : 'Aucun r\xE9sultat pour ces filtres' }}</h6>\r
    <p class="text-muted">\r
      {{ parcours.length === 0 ? 'Commencez par cr\xE9er votre premier parcours' : 'Essayez de modifier vos crit\xE8res de recherche' }}\r
    </p>\r
    <button class="btn btn-primary" (click)="openParcoursModal()" *ngIf="parcours.length === 0">\r
      <i class="isax isax-add-circle me-2"></i>Cr\xE9er un parcours\r
    </button>\r
    <button class="btn btn-outline-secondary" (click)="clearFilters()" *ngIf="parcours.length > 0">\r
      <i class="isax isax-refresh me-2"></i>Effacer les filtres\r
    </button>\r
  </div>\r
\r
  <!-- Pagination -->\r
  <div class="d-flex justify-content-between align-items-center mt-4" *ngIf="totalPages > 1">\r
    <div class="text-muted">\r
      Affichage de {{ getPaginationStart() }} \xE0 {{ getPaginationEnd() }} \r
      sur {{ totalItems }} parcours\r
    </div>\r
    \r
    <nav>\r
      <ul class="pagination mb-0">\r
        <li class="page-item" [class.disabled]="currentPage === 1">\r
          <a class="page-link" href="javascript:void(0);" (click)="onPageChange(currentPage - 1)">\r
            <i class="isax isax-arrow-left-3"></i>\r
          </a>\r
        </li>\r
        \r
        <li class="page-item" *ngIf="currentPage > 3">\r
          <a class="page-link" href="javascript:void(0);" (click)="onPageChange(1)">1</a>\r
        </li>\r
        <li class="page-item disabled" *ngIf="currentPage > 4">\r
          <span class="page-link">...</span>\r
        </li>\r
        \r
        <li class="page-item" *ngFor="let page of pages" [class.active]="page === currentPage">\r
          <a class="page-link" href="javascript:void(0);" (click)="onPageChange(page)">{{ page }}</a>\r
        </li>\r
        \r
        <li class="page-item disabled" *ngIf="currentPage < totalPages - 3">\r
          <span class="page-link">...</span>\r
        </li>\r
        <li class="page-item" *ngIf="currentPage < totalPages - 2">\r
          <a class="page-link" href="javascript:void(0);" (click)="onPageChange(totalPages)">{{ totalPages }}</a>\r
        </li>\r
        \r
        <li class="page-item" [class.disabled]="currentPage === totalPages">\r
          <a class="page-link" href="javascript:void(0);" (click)="onPageChange(currentPage + 1)">\r
            <i class="isax isax-arrow-right-3"></i>\r
          </a>\r
        </li>\r
      </ul>\r
    </nav>\r
  </div>\r
</div>\r
\r
<!-- Modal Ajout/Modification Parcours -->\r
\r
<!-- Modal Ajout/Modification Parcours - CORRIG\xC9 -->\r
<div class="modal fade" id="parcoursModal" tabindex="-1">\r
  <div class="modal-dialog modal-lg modal-dialog-scrollable">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">\r
          {{ editMode ? 'Modifier le Parcours' : 'Nouveau Parcours' }}\r
        </h5>\r
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>\r
      </div>\r
      \r
      <form [formGroup]="parcoursForm" (ngSubmit)="onSubmit()">\r
        <div class="modal-body">\r
          <!-- Informations de base -->\r
          <div class="row">\r
            <div class="col-12">\r
              <div class="mb-3">\r
                <label class="form-label">Nom du parcours *</label>\r
                <input type="text" class="form-control" formControlName="nom" \r
                       placeholder="Ex: D\xE9veloppement Web Full Stack">\r
                <div class="invalid-feedback" \r
                     *ngIf="parcoursForm.get('nom')?.invalid && parcoursForm.get('nom')?.touched">\r
                  Le nom est requis (min. 3 caract\xE8res)\r
                </div>\r
              </div>\r
\r
              <div class="mb-3">\r
                <label class="form-label">Description *</label>\r
                <textarea class="form-control" rows="3" formControlName="description" \r
                          placeholder="Description d\xE9taill\xE9e du parcours"></textarea>\r
                <div class="invalid-feedback" \r
                     *ngIf="parcoursForm.get('description')?.invalid && parcoursForm.get('description')?.touched">\r
                  La description est requise (min. 10 caract\xE8res)\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Configuration en 2 colonnes -->\r
          <div class="row">\r
            <div class="col-md-6">\r
              <div class="mb-3">\r
                <label class="form-label">Niveau *</label>\r
                <select class="form-select" formControlName="niveau">\r
                  <option *ngFor="let niveau of niveaux" [value]="niveau.value">{{ niveau.label }}</option>\r
                </select>\r
              </div>\r
\r
              <div class="mb-3">\r
                <label class="form-label">Dur\xE9e estim\xE9e (heures) *</label>\r
                <input type="number" class="form-control" formControlName="duree_estimee" min="1">\r
                <div class="invalid-feedback" \r
                     *ngIf="parcoursForm.get('duree_estimee')?.invalid && parcoursForm.get('duree_estimee')?.touched">\r
                  La dur\xE9e doit \xEAtre sup\xE9rieure \xE0 0\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6">\r
              <div class="mb-3">\r
                <label class="form-label">Prix (XOF) *</label>\r
                <input type="number" class="form-control" formControlName="prix" \r
                       min="0" step="0.01">\r
                <div class="invalid-feedback" \r
                     *ngIf="parcoursForm.get('prix')?.invalid && parcoursForm.get('prix')?.touched">\r
                  Le co\xFBt doit \xEAtre positif\r
                </div>\r
              </div>\r
\r
              <div class="mb-3">\r
                <label class="form-label">Image URL</label>\r
                <input type="url" class="form-control" formControlName="image_url" \r
                       placeholder="https://example.com/image.jpg">\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="row">\r
            <div class="col-12">\r
              <div class="form-check mb-3">\r
                <input class="form-check-input" type="checkbox" formControlName="actif" id="actif">\r
                <label class="form-check-label" for="actif">\r
                  Parcours actif\r
                </label>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Objectifs -->\r
          <div class="mb-3">\r
            <div class="d-flex justify-content-between align-items-center mb-2">\r
              <h6 class="mb-0">Objectifs du parcours</h6>\r
              <button type="button" class="btn btn-sm btn-outline-primary" (click)="addObjectif()">\r
                <i class="isax isax-add-circle me-1"></i>Ajouter\r
              </button>\r
            </div>\r
            \r
            <div formArrayName="objectifs">\r
              <div *ngFor="let objectif of objectifs.controls; let i = index" \r
                   [formGroupName]="i" class="mb-2">\r
                <div class="input-group input-group-sm">\r
                  <span class="input-group-text">{{ i + 1 }}.</span>\r
                  <input type="text" class="form-control" formControlName="value" \r
                         placeholder="D\xE9crivez un objectif du parcours">\r
                  <button type="button" class="btn btn-outline-danger" \r
                          (click)="removeObjectif(i)" \r
                          [disabled]="objectifsLength === 1">\r
                    <i class="isax isax-trash"></i>\r
                  </button>\r
                </div>\r
                <div class="invalid-feedback" \r
                     *ngIf="objectif.get('value')?.invalid && objectif.get('value')?.touched">\r
                  L'objectif est requis\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Pr\xE9requis -->\r
          <div class="mb-3">\r
            <div class="d-flex justify-content-between align-items-center mb-2">\r
              <h6 class="mb-0">Pr\xE9requis</h6>\r
              <button type="button" class="btn btn-sm btn-outline-primary" (click)="addPrerequis()">\r
                <i class="isax isax-add-circle me-1"></i>Ajouter\r
              </button>\r
            </div>\r
            \r
            <div formArrayName="prerequis">\r
              <div *ngFor="let prerequisControl of prerequis.controls; let i = index" \r
                   [formGroupName]="i" class="mb-2">\r
                <div class="input-group input-group-sm">\r
                  <span class="input-group-text">{{ i + 1 }}.</span>\r
                  <input type="text" class="form-control" formControlName="value" \r
                         placeholder="D\xE9crivez un pr\xE9requis">\r
                  <button type="button" class="btn btn-outline-danger" \r
                          (click)="removePrerequis(i)" \r
                          [disabled]="prerequisLength === 1">\r
                    <i class="isax isax-trash"></i>\r
                  </button>\r
                </div>\r
                <div class="invalid-feedback" \r
                     *ngIf="prerequisControl.get('value')?.invalid && prerequisControl.get('value')?.touched">\r
                  Le pr\xE9requis est requis\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="modal-footer">\r
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>\r
          <button type="submit" class="btn btn-primary" [disabled]="parcoursForm.invalid || saving">\r
            <span class="spinner-border spinner-border-sm me-2" *ngIf="saving"></span>\r
            {{ editMode ? 'Modifier' : 'Cr\xE9er' }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal Visualisation - CORRIG\xC9 -->\r
<div class="modal fade" id="viewModal" tabindex="-1">\r
  <div class="modal-dialog modal-lg modal-dialog-scrollable">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">D\xE9tails du Parcours</h5>\r
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>\r
      </div>\r
      <div class="modal-body" *ngIf="selectedParcours">\r
        <!-- En-t\xEAte du parcours -->\r
        <div class="mb-4">\r
          <div class="d-flex align-items-start p-3 bg-light rounded">\r
            <img [src]="selectedParcours.image_url || 'assets/images/default-parcours.png'" \r
                 [alt]="selectedParcours.nom" \r
                 class="me-3 rounded"\r
                 style="width: 80px; height: 80px; object-fit: cover;">\r
            <div class="flex-grow-1">\r
              <h4 class="mb-2">{{ selectedParcours.nom }}</h4>\r
              <p class="mb-2 text-muted">{{ selectedParcours.description }}</p>\r
              <div class="d-flex align-items-center gap-2 flex-wrap">\r
                <span class="badge bg-primary">{{ getNiveauLabel(selectedParcours.niveau) }}</span>\r
                <span class="badge bg-success" *ngIf="selectedParcours.actif">Actif</span>\r
                <span class="badge bg-secondary" *ngIf="!selectedParcours.actif">Inactif</span>\r
                <span class="badge bg-info">{{ selectedParcours.duree_estimee }}h</span>\r
                <span class="badge bg-warning">{{ selectedParcours.prix }}XOF</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Informations en colonnes -->\r
        <div class="row">\r
          <!-- Statistiques -->\r
          <div class="col-md-6 mb-3">\r
            <h6>Statistiques</h6>\r
            <div class="list-group list-group-flush small">\r
              <div class="list-group-item d-flex justify-content-between py-2">\r
                <span>Formations incluses</span>\r
                <strong>{{ selectedParcours.formations.length }}</strong>\r
              </div>\r
              <div class="list-group-item d-flex justify-content-between py-2">\r
                <span>Dur\xE9e totale</span>\r
                <strong>{{ getTotalDuration(selectedParcours.formations) }}h</strong>\r
              </div>\r
              <div class="list-group-item d-flex justify-content-between py-2">\r
                <span>Formations obligatoires</span>\r
                <strong>{{ getFormationsObligatoires(selectedParcours.formations).length }}</strong>\r
              </div>\r
              <div class="list-group-item d-flex justify-content-between py-2">\r
                <span>Inscrits actuels</span>\r
                <strong>{{ selectedParcours.users.length }}</strong>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Informations g\xE9n\xE9rales -->\r
          <div class="col-md-6 mb-3">\r
            <h6>Informations</h6>\r
            <div class="list-group list-group-flush small">\r
              <div class="list-group-item py-2">\r
                <strong>Niveau:</strong> {{ getNiveauLabel(selectedParcours.niveau) }}\r
              </div>\r
              <div class="list-group-item py-2">\r
                <strong>Dur\xE9e estim\xE9e:</strong> {{ selectedParcours.duree_estimee }}h\r
              </div>\r
              <div class="list-group-item py-2">\r
                <strong>Co\xFBt:</strong> {{ selectedParcours.prix }}XOF\r
              </div>\r
              <div class="list-group-item py-2">\r
                <strong>Cr\xE9\xE9 le:</strong> {{ formatDate(selectedParcours.created_at) }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Objectifs et Pr\xE9requis -->\r
        <div class="row">\r
          <div class="col-md-6 mb-3">\r
            <h6>Objectifs ({{ selectedParcours.objectifs.length }})</h6>\r
            <ul class="list-unstyled small">\r
              <li class="mb-1" *ngFor="let objectif of selectedParcours.objectifs">\r
                <i class="isax isax-tick-circle text-success me-2"></i>{{ objectif }}\r
              </li>\r
            </ul>\r
          </div>\r
\r
          <div class="col-md-6 mb-3">\r
            <h6>Pr\xE9requis ({{ selectedParcours.prerequis.length }})</h6>\r
            <ul class="list-unstyled small">\r
              <li class="mb-1" *ngFor="let prerequis of selectedParcours.prerequis">\r
                <i class="isax isax-info-circle text-info me-2"></i>{{ prerequis }}\r
              </li>\r
            </ul>\r
          </div>\r
        </div>\r
\r
        <!-- Formations du parcours -->\r
        <div class="mb-3">\r
          <h6>Formations du parcours ({{ selectedParcours.formations.length }})</h6>\r
          \r
          <div *ngIf="selectedParcours.formations.length > 0">\r
            <!-- Version compacte pour mobile -->\r
            <div class="d-md-none">\r
              <div class="card mb-2" *ngFor="let formation of selectedParcours.formations; trackBy: trackByFormationId">\r
                <div class="card-body p-3">\r
                  <div class="d-flex justify-content-between align-items-start mb-2">\r
                    <h6 class="mb-1">{{ formation.titre }}</h6>\r
                    <span class="badge bg-secondary">{{ formation.pivot?.ordre || '-' }}</span>\r
                  </div>\r
                  <p class="small text-muted mb-2">{{ formation.short_description }}</p>\r
                  <div class="d-flex justify-content-between align-items-center">\r
                    <div>\r
                      <span class="badge bg-info me-1">{{ formation.niveau }}</span>\r
                      <span class="badge bg-danger me-1" *ngIf="formation.pivot?.obligatoire">Obligatoire</span>\r
                    </div>\r
                    <small class="text-muted">{{ formation.duree_totale }}h - {{ formation.prix }}XOF</small>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Version tableau pour desktop -->\r
            <div class="table-responsive d-none d-md-block">\r
              <table class="table table-sm">\r
                <thead>\r
                  <tr>\r
                    <th>Ordre</th>\r
                    <th>Formation</th>\r
                    <th>Niveau</th>\r
                    <th>Dur\xE9e</th>\r
                    <th>Co\xFBt</th>\r
                    <th>Statut</th>\r
                  </tr>\r
                </thead>\r
                <tbody>\r
                  <tr *ngFor="let formation of selectedParcours.formations; trackBy: trackByFormationId">\r
                    <td>\r
                      <span class="badge bg-secondary">{{ formation.pivot?.ordre || '-' }}</span>\r
                    </td>\r
                    <td>\r
                      <div>\r
                        <strong class="d-block">{{ formation.titre }}</strong>\r
                        <span class="badge bg-danger" *ngIf="formation.pivot?.obligatoire">Obligatoire</span>\r
                      </div>\r
                    </td>\r
                    <td>\r
                      <span class="badge bg-info">{{ formation.niveau }}</span>\r
                    </td>\r
                    <td>{{ formation.duree_totale }}h</td>\r
                    <td>{{ formation.prix }}XOF</td>\r
                    <td>\r
                      <span class="badge bg-success" *ngIf="formation.est_publie">Publi\xE9</span>\r
                      <span class="badge bg-secondary" *ngIf="!formation.est_publie">Brouillon</span>\r
                    </td>\r
                  </tr>\r
                </tbody>\r
              </table>\r
            </div>\r
          </div>\r
          \r
          <div class="text-center text-muted py-3" *ngIf="selectedParcours.formations.length === 0">\r
            <i class="isax isax-book" style="font-size: 2rem; opacity: 0.5;"></i>\r
            <p class="mt-2 mb-0">Aucune formation dans ce parcours</p>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>\r
        <button type="button" class="btn btn-primary" (click)="editParcours(selectedParcours!)" data-bs-dismiss="modal">\r
          <i class="isax isax-edit-2 me-2"></i>Modifier\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal Suppression reste inchang\xE9 -->\r
<div class="modal fade" id="deleteModal" tabindex="-1">\r
  <div class="modal-dialog">\r
    <div class="modal-content">\r
      <div class="modal-body text-center py-4">\r
        <div class="mb-3">\r
          <i class="isax isax-trash text-danger" style="font-size: 3rem;"></i>\r
        </div>\r
        <h5>Supprimer le parcours</h5>\r
        <p class="text-muted" *ngIf="selectedParcours">\r
          \xCAtes-vous s\xFBr de vouloir supprimer le parcours \r
          "<strong>{{ selectedParcours.nom }}</strong>" ?\r
        </p>\r
        <p class="text-warning small">\r
          <i class="isax isax-warning-2 me-1"></i>\r
          Cette action est irr\xE9versible et supprimera aussi les inscriptions associ\xE9es.\r
        </p>\r
        <div class="d-flex justify-content-center gap-2 mt-4">\r
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>\r
          <button type="button" class="btn btn-danger" (click)="deleteParcours()">\r
            Supprimer d\xE9finitivement\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/features/adminrh/adminrh-parcours/adminrh-parcours.component.scss */\n.parcours .parcours-list .card {\n  transition: all 0.2s ease;\n  border: 1px solid #e9ecef;\n}\n.parcours .parcours-list .card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border-color: #007bff;\n}\n.parcours .parcours-list .parcours-image .badge {\n  font-size: 0.6rem;\n}\n.parcours .badge {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n}\n.parcours .dropdown-toggle {\n  border: 1px solid #ddd;\n  padding: 0.375rem 0.75rem;\n}\n.parcours .dropdown-toggle:hover {\n  background-color: #f8f9fa;\n  border-color: #adb5bd;\n}\n.parcours .invalid-feedback {\n  display: block;\n}\n.parcours .spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n}\n.modal-xl {\n  max-width: 1200px;\n}\n.list-group-item {\n  border-left: none;\n  border-right: none;\n}\n.list-group-item:first-child {\n  border-top: none;\n}\n.list-group-item:last-child {\n  border-bottom: none;\n}\n.parcours .parcours-list .card {\n  transition: all 0.2s ease;\n  border: 1px solid #e9ecef;\n}\n.parcours .parcours-list .card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border-color: #007bff;\n}\n.parcours .parcours-list .parcours-image .badge {\n  font-size: 0.6rem;\n}\n.parcours .badge {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n}\n.parcours .dropdown-toggle {\n  border: 1px solid #ddd;\n  padding: 0.375rem 0.75rem;\n}\n.parcours .dropdown-toggle:hover {\n  background-color: #f8f9fa;\n  border-color: #adb5bd;\n}\n.parcours .invalid-feedback {\n  display: block;\n}\n.parcours .spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n}\n.modal-lg {\n  max-width: 900px;\n}\n@media (max-width: 767px) {\n  .modal-lg {\n    max-width: 95%;\n    margin: 10px auto;\n  }\n}\n.modal-dialog-scrollable .modal-content {\n  max-height: 90vh;\n}\n.modal-dialog-scrollable .modal-body {\n  max-height: calc(90vh - 150px);\n  overflow-y: auto;\n}\n@media (max-width: 767px) {\n  .modal-dialog {\n    margin: 10px;\n  }\n  .modal-body {\n    padding: 1rem;\n  }\n  .input-group-sm .input-group-text {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.875rem;\n  }\n}\n.list-group-flush .list-group-item {\n  border-left: none;\n  border-right: none;\n}\n.list-group-flush .list-group-item:first-child {\n  border-top: none;\n}\n.list-group-flush .list-group-item:last-child {\n  border-bottom: none;\n}\n.table-responsive .table th {\n  border-top: none;\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.9rem;\n}\n.table-responsive .table td {\n  font-size: 0.85rem;\n}\n.table-responsive .badge {\n  font-size: 0.7rem;\n}\n.pagination .page-link {\n  border-radius: 0.375rem;\n  margin: 0 0.125rem;\n}\n.pagination .page-link:hover {\n  background-color: #f8f9fa;\n}\n.pagination .page-item.active .page-link {\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.input-group .input-group-text {\n  min-width: 40px;\n  justify-content: center;\n}\n.input-group-sm .input-group-text {\n  min-width: 35px;\n  font-size: 0.875rem;\n}\n.input-group-sm .btn {\n  padding: 0.25rem 0.5rem;\n}\n.parcours .table th {\n  background-color: #f8f9fa;\n  border-bottom: 2px solid #dee2e6;\n  font-weight: 600;\n  color: #495057;\n  white-space: nowrap;\n}\n.parcours .table td {\n  vertical-align: middle;\n  padding: 0.75rem 0.5rem;\n}\n.parcours .table .btn-sm {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n.parcours .table .btn-sm i {\n  font-size: 0.9rem;\n}\n@media (max-width: 992px) {\n  .parcours .table {\n    font-size: 0.875rem;\n  }\n  .parcours .table th,\n  .parcours .table td {\n    padding: 0.5rem 0.25rem;\n  }\n  .parcours .table .btn-sm {\n    padding: 0.2rem 0.4rem;\n  }\n  .parcours .table .btn-sm i {\n    font-size: 0.8rem;\n  }\n}\n@media (max-width: 767px) {\n  .parcours .table-responsive {\n    display: none;\n  }\n  .parcours .mobile-cards {\n    display: block;\n  }\n}\n@media (min-width: 768px) {\n  .parcours .mobile-cards {\n    display: none;\n  }\n}\n.parcours .badge {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n}\n.parcours .spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n}\n.table-responsive .table th {\n  border-top: none;\n  font-weight: 600;\n  color: #495057;\n}\n.table-responsive .badge {\n  font-size: 0.7rem;\n}\n.pagination .page-link {\n  border-radius: 0.375rem;\n  margin: 0 0.125rem;\n}\n.pagination .page-link:hover {\n  background-color: #f8f9fa;\n}\n.pagination .page-item.active .page-link {\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.input-group .input-group-text {\n  min-width: 45px;\n  justify-content: center;\n}\n/*# sourceMappingURL=adminrh-parcours.component.css.map */\n"] }]
  }], () => [{ type: ParcoursService }, { type: FormationService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhParcoursComponent, { className: "AdminrhParcoursComponent", filePath: "src/app/features/adminrh/adminrh-parcours/adminrh-parcours.component.ts", lineNumber: 16 });
})();
export {
  AdminrhParcoursComponent
};
//# sourceMappingURL=chunk-3ZNMXZHH.js.map
