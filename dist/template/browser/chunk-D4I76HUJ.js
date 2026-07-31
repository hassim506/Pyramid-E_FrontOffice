import {
  DemandeFormationService
} from "./chunk-5322JQ3N.js";
import {
  CategorieService
} from "./chunk-DYCTQJU3.js";
import {
  FormationService
} from "./chunk-QDYFEC2R.js";
import "./chunk-I3LFGWFR.js";
import "./chunk-K7E3GT3E.js";
import {
  DefaultValueAccessor,
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
} from "./chunk-ZGFJXD53.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-UFFO2UKW.js";
import "./chunk-U7UKDAOZ.js";
import "./chunk-EGNJBGKD.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  SlicePipe
} from "./chunk-I2HNPZHV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BSBCM3BI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/student/explorer/explorer.component.ts
var _c0 = (a0) => ["/courses/course-details", a0];
var _c1 = (a0) => ["/student/catalogue-detail", a0];
var _c2 = (a0) => ["/student/parcours-details", a0];
function ExplorerComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function ExplorerComponent_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchTerm = "");
    });
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275elementEnd();
  }
}
function ExplorerComponent_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", cat_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r3.nom);
  }
}
function ExplorerComponent_div_30_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const niveau_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", niveau_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(niveau_r5.label);
  }
}
function ExplorerComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "label");
    \u0275\u0275element(2, "i", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function ExplorerComponent_div_30_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedNiveau, $event) || (ctx_r1.selectedNiveau = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 18);
    \u0275\u0275text(5, "Tous les niveaux");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ExplorerComponent_div_30_option_6_Template, 2, 2, "option", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedNiveau);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.niveaux);
  }
}
function ExplorerComponent_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function ExplorerComponent_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetFilters());
    });
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275text(2, " R\xE9initialiser ");
    \u0275\u0275elementEnd();
  }
}
function ExplorerComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275element(1, "div", 57);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement en cours...");
    \u0275\u0275elementEnd()();
  }
}
function ExplorerComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275elementStart(2, "div", 60)(3, "div", 61);
    \u0275\u0275text(4, "Erreur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 62);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 63);
    \u0275\u0275listener("click", function ExplorerComponent_div_33_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadData());
    });
    \u0275\u0275element(8, "i", 55);
    \u0275\u0275text(9, " R\xE9essayer ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function ExplorerComponent_div_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "Aucune formation trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Aucune formation ne correspond \xE0 vos crit\xE8res de recherche");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 69);
    \u0275\u0275listener("click", function ExplorerComponent_div_34_div_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.resetFilters();
      return \u0275\u0275resetView(ctx_r1.loadData());
    });
    \u0275\u0275text(7, " Voir toutes les formations ");
    \u0275\u0275elementEnd()();
  }
}
function ExplorerComponent_div_34_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275element(1, "i", 93);
    \u0275\u0275text(2, " Inscrit ");
    \u0275\u0275elementEnd();
  }
}
function ExplorerComponent_div_34_div_2_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formation_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", formation_r9.categorie_formation.nom, " ");
  }
}
function ExplorerComponent_div_34_div_2_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275element(1, "i", 95);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const formation_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", formation_r9.note_moyenne, " / 5");
  }
}
function ExplorerComponent_div_34_div_2_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275element(1, "i", 96);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const formation_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", formation_r9.nombre_etudiants, " \xE9tudiants");
  }
}
function ExplorerComponent_div_34_div_2_div_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275element(1, "img", 98);
    \u0275\u0275elementStart(2, "span", 99);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const formation_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", formation_r9.formateur.avatar || "assets/images/default-avatar.png", \u0275\u0275sanitizeUrl)("alt", formation_r9.formateur.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(formation_r9.formateur.name);
  }
}
function ExplorerComponent_div_34_div_2_div_1_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function ExplorerComponent_div_34_div_2_div_1_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const formation_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.demanderFormation(formation_r9.id));
    });
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275text(2, " Demander ");
    \u0275\u0275elementEnd();
  }
}
function ExplorerComponent_div_34_div_2_div_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275element(1, "i", 93);
    \u0275\u0275text(2, " D\xE9j\xE0 demand\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function ExplorerComponent_div_34_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73);
    \u0275\u0275element(2, "img", 74);
    \u0275\u0275template(3, ExplorerComponent_div_34_div_2_div_1_div_3_Template, 3, 0, "div", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 76)(5, "div", 77);
    \u0275\u0275template(6, ExplorerComponent_div_34_div_2_div_1_span_6_Template, 2, 1, "span", 78);
    \u0275\u0275elementStart(7, "span", 79);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h3", 80);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 81);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 82)(15, "div", 83);
    \u0275\u0275element(16, "i", 84);
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, ExplorerComponent_div_34_div_2_div_1_div_19_Template, 4, 1, "div", 85)(20, ExplorerComponent_div_34_div_2_div_1_div_20_Template, 4, 1, "div", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ExplorerComponent_div_34_div_2_div_1_div_21_Template, 4, 3, "div", 86);
    \u0275\u0275elementStart(22, "div", 87)(23, "a", 88);
    \u0275\u0275element(24, "i", 89);
    \u0275\u0275text(25, " Voir d\xE9tails ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, ExplorerComponent_div_34_div_2_div_1_button_26_Template, 3, 0, "button", 90)(27, ExplorerComponent_div_34_div_2_div_1_div_27_Template, 3, 0, "div", 91);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const formation_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.getImageUrl(formation_r9.image_couverture), \u0275\u0275sanitizeUrl)("alt", formation_r9.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r9.est_inscrit);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", formation_r9.categorie_formation);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getNiveauClass(formation_r9.niveau));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", formation_r9.niveau, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(formation_r9.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(13, 15, formation_r9.description, 0, 120), "...");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", formation_r9.duree_totale, "h");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r9.note_moyenne);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r9.nombre_etudiants);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r9.formateur);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c0, formation_r9.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", formation_r9.peut_demander !== false && !formation_r9.est_inscrit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r9.est_inscrit || formation_r9.peut_demander === false);
  }
}
function ExplorerComponent_div_34_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275template(1, ExplorerComponent_div_34_div_2_div_1_Template, 28, 21, "div", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredFormations);
  }
}
function ExplorerComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275template(1, ExplorerComponent_div_34_div_1_Template, 8, 0, "div", 65)(2, ExplorerComponent_div_34_div_2_Template, 2, 1, "div", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.activeTab === "formations");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredFormations.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredFormations.length > 0);
  }
}
function ExplorerComponent_div_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "Aucun catalogue trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Aucun catalogue ne correspond \xE0 vos crit\xE8res de recherche");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 102);
    \u0275\u0275listener("click", function ExplorerComponent_div_35_div_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.resetFilters();
      return \u0275\u0275resetView(ctx_r1.loadData());
    });
    \u0275\u0275text(7, " Voir tous les catalogues ");
    \u0275\u0275elementEnd()();
  }
}
function ExplorerComponent_div_35_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275element(1, "i", 93);
    \u0275\u0275text(2, " Assign\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function ExplorerComponent_div_35_div_2_div_1_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function ExplorerComponent_div_35_div_2_div_1_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const catalogue_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.demanderCatalogue(catalogue_r13.id));
    });
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275text(2, " Demander ");
    \u0275\u0275elementEnd();
  }
}
function ExplorerComponent_div_35_div_2_div_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275element(1, "i", 93);
    \u0275\u0275text(2, " D\xE9j\xE0 demand\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function ExplorerComponent_div_35_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 73);
    \u0275\u0275element(2, "img", 74);
    \u0275\u0275template(3, ExplorerComponent_div_35_div_2_div_1_div_3_Template, 3, 0, "div", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 76)(5, "div", 77)(6, "span", 105);
    \u0275\u0275element(7, "i", 9);
    \u0275\u0275text(8, " Catalogue ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h3", 80);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 81);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 82)(15, "div", 83);
    \u0275\u0275element(16, "i", 8);
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 87)(20, "a", 88);
    \u0275\u0275element(21, "i", 89);
    \u0275\u0275text(22, " Voir d\xE9tails ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, ExplorerComponent_div_35_div_2_div_1_button_23_Template, 3, 0, "button", 90)(24, ExplorerComponent_div_35_div_2_div_1_div_24_Template, 3, 0, "div", 91);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const catalogue_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.getImageUrl(catalogue_r13.image_couverture), \u0275\u0275sanitizeUrl)("alt", catalogue_r13.nom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", catalogue_r13.est_assigne);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(catalogue_r13.nom || catalogue_r13.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(13, 9, catalogue_r13.description, 0, 120), "...");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", catalogue_r13.formations_count || catalogue_r13.nombre_formations || 0, " formations");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c1, catalogue_r13.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", catalogue_r13.peut_demander !== false && !catalogue_r13.est_assigne);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", catalogue_r13.est_assigne || catalogue_r13.peut_demander === false);
  }
}
function ExplorerComponent_div_35_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275template(1, ExplorerComponent_div_35_div_2_div_1_Template, 25, 15, "div", 103);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredCatalogues);
  }
}
function ExplorerComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275template(1, ExplorerComponent_div_35_div_1_Template, 8, 0, "div", 65)(2, ExplorerComponent_div_35_div_2_Template, 2, 1, "div", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.activeTab === "catalogues");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredCatalogues.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredCatalogues.length > 0);
  }
}
function ExplorerComponent_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "Aucun parcours trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Aucun parcours ne correspond \xE0 vos crit\xE8res de recherche");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 102);
    \u0275\u0275listener("click", function ExplorerComponent_div_36_div_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.resetFilters();
      return \u0275\u0275resetView(ctx_r1.loadData());
    });
    \u0275\u0275text(7, " Voir tous les parcours ");
    \u0275\u0275elementEnd()();
  }
}
function ExplorerComponent_div_36_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275element(1, "i", 93);
    \u0275\u0275text(2, " Assign\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function ExplorerComponent_div_36_div_2_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const parc_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", parc_r15.categorie.nom, " ");
  }
}
function ExplorerComponent_div_36_div_2_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275element(1, "i", 84);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const parc_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", parc_r15.duree_totale, "h");
  }
}
function ExplorerComponent_div_36_div_2_div_1_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function ExplorerComponent_div_36_div_2_div_1_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const parc_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.demanderParcours(parc_r15.id));
    });
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275text(2, " Demander ");
    \u0275\u0275elementEnd();
  }
}
function ExplorerComponent_div_36_div_2_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275element(1, "i", 93);
    \u0275\u0275text(2, " D\xE9j\xE0 demand\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function ExplorerComponent_div_36_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107)(1, "div", 73);
    \u0275\u0275element(2, "img", 74);
    \u0275\u0275template(3, ExplorerComponent_div_36_div_2_div_1_div_3_Template, 3, 0, "div", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 76)(5, "div", 77)(6, "span", 108);
    \u0275\u0275element(7, "i", 10);
    \u0275\u0275text(8, " Parcours ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ExplorerComponent_div_36_div_2_div_1_span_9_Template, 2, 1, "span", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3", 80);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 81);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 82)(16, "div", 83);
    \u0275\u0275element(17, "i", 8);
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, ExplorerComponent_div_36_div_2_div_1_div_20_Template, 4, 1, "div", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 87)(22, "a", 88);
    \u0275\u0275element(23, "i", 89);
    \u0275\u0275text(24, " Voir d\xE9tails ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, ExplorerComponent_div_36_div_2_div_1_button_25_Template, 3, 0, "button", 90)(26, ExplorerComponent_div_36_div_2_div_1_div_26_Template, 3, 0, "div", 91);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const parc_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.getImageUrl(parc_r15.image_couverture), \u0275\u0275sanitizeUrl)("alt", parc_r15.nom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", parc_r15.est_assigne);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", parc_r15.categorie);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(parc_r15.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(14, 11, parc_r15.description, 0, 120), "...");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", parc_r15.formations_count, " formations");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", parc_r15.duree_totale);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c2, parc_r15.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", parc_r15.peut_demander !== false && !parc_r15.est_assigne);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", parc_r15.est_assigne || parc_r15.peut_demander === false);
  }
}
function ExplorerComponent_div_36_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275template(1, ExplorerComponent_div_36_div_2_div_1_Template, 27, 17, "div", 106);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredParcours);
  }
}
function ExplorerComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275template(1, ExplorerComponent_div_36_div_1_Template, 8, 0, "div", 65)(2, ExplorerComponent_div_36_div_2_Template, 2, 1, "div", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.activeTab === "parcours");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredParcours.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredParcours.length > 0);
  }
}
function ExplorerComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109)(1, "h6", 110);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 111);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.elementSelectionne.titre || ctx_r1.elementSelectionne.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.elementSelectionne.description);
  }
}
function ExplorerComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1, " Le motif est obligatoire ");
    \u0275\u0275elementEnd();
  }
}
function ExplorerComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1, " Les objectifs sont obligatoires ");
    \u0275\u0275elementEnd();
  }
}
function ExplorerComponent_span_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 113);
    \u0275\u0275text(2, " Envoyer la demande ");
    \u0275\u0275elementEnd();
  }
}
function ExplorerComponent_span_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 114);
    \u0275\u0275text(2, " Envoi en cours... ");
    \u0275\u0275elementEnd();
  }
}
var ExplorerComponent = class _ExplorerComponent {
  formationService;
  categorieService;
  demandeService;
  formBuilder;
  router;
  route;
  // États
  loading = false;
  error = "";
  activeTab = "formations";
  // Données
  formations = [];
  catalogues = [];
  parcours = [];
  categories = [];
  // Filtres
  searchTerm = "";
  selectedCategory = null;
  selectedNiveau = null;
  // Filtres disponibles
  niveaux = [
    { value: "d\xE9butant", label: "D\xE9butant" },
    { value: "interm\xE9diaire", label: "Interm\xE9diaire" },
    { value: "avanc\xE9", label: "Avanc\xE9" },
    { value: "expert", label: "Expert" }
  ];
  // Modal demande
  demandeForm;
  formationSelectionnee = null;
  catalogueSelectionne = null;
  parcoursSelectionne = null;
  typeDemandeActuelle = "formation";
  submitting = false;
  demandeModal;
  // Données filtrées
  get filteredFormations() {
    return this.applyFilters(this.formations);
  }
  // Getter pour l'élément actuellement sélectionné dans le modal
  get elementSelectionne() {
    if (this.typeDemandeActuelle === "formation")
      return this.formationSelectionnee;
    if (this.typeDemandeActuelle === "catalogue")
      return this.catalogueSelectionne;
    if (this.typeDemandeActuelle === "parcours")
      return this.parcoursSelectionne;
    return null;
  }
  get titreModal() {
    if (this.typeDemandeActuelle === "formation")
      return "Demander une formation";
    if (this.typeDemandeActuelle === "catalogue")
      return "Demander un catalogue";
    if (this.typeDemandeActuelle === "parcours")
      return "Demander un parcours";
    return "Faire une demande";
  }
  get filteredCatalogues() {
    let result = this.catalogues;
    if (this.searchTerm) {
      const search = this.searchTerm.toLowerCase();
      result = result.filter((item) => item.nom?.toLowerCase().includes(search) || item.description?.toLowerCase().includes(search));
    }
    return result;
  }
  get filteredParcours() {
    let result = this.parcours;
    if (this.searchTerm) {
      const search = this.searchTerm.toLowerCase();
      result = result.filter((item) => item.nom?.toLowerCase().includes(search) || item.description?.toLowerCase().includes(search));
    }
    if (this.selectedCategory) {
      result = result.filter((item) => item.categorie?.id === this.selectedCategory);
    }
    return result;
  }
  constructor(formationService, categorieService, demandeService, formBuilder, router, route) {
    this.formationService = formationService;
    this.categorieService = categorieService;
    this.demandeService = demandeService;
    this.formBuilder = formBuilder;
    this.router = router;
    this.route = route;
    this.demandeForm = this.formBuilder.group({
      motif_demande: ["", Validators.required],
      objectifs_personnels: ["", Validators.required],
      priorite: ["normale", Validators.required],
      date_souhaitee_debut: [""],
      commentaire_employe: [""]
    });
  }
  ngOnInit() {
    this.loadCategories();
    this.loadData();
    this.route.queryParams.subscribe((params) => {
      if (params["formationId"]) {
        const formationId = +params["formationId"];
        setTimeout(() => {
          this.demanderFormation(formationId);
          this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {},
            queryParamsHandling: "merge"
          });
        }, 1e3);
      }
    });
  }
  loadCategories() {
    this.categorieService.getCategories({ est_active: true, est_visible: true }).subscribe({
      next: (response) => {
        this.categories = response.data?.categories || response.categories || [];
      },
      error: (err) => console.error("Erreur chargement cat\xE9gories:", err)
    });
  }
  loadData() {
    this.loading = true;
    this.error = "";
    switch (this.activeTab) {
      case "formations":
        this.loadFormations();
        break;
      case "catalogues":
        this.loadCatalogues();
        break;
      case "parcours":
        this.loadParcours();
        break;
    }
  }
  loadFormations() {
    const user = this.getCurrentUser();
    console.log("\u{1F50D} Explorer - Chargement formations pour utilisateur:", {
      entreprise_id: user?.entreprise_id,
      user_id: user?.id
    });
    this.formationService.getFormationsForEmploye().subscribe({
      next: (response) => {
        console.log("\u{1F4E6} Explorer - R\xE9ponse API formations:", response);
        const rawFormations = response.formations || response.data || [];
        this.formations = rawFormations.map((f) => __spreadProps(__spreadValues({}, f), {
          peut_demander: f.peut_demander !== false,
          est_inscrit: f.est_inscrit || false
        }));
        console.log(`\u2705 Explorer - ${this.formations.length} formations charg\xE9es`);
        this.loading = false;
      },
      error: (err) => {
        console.error("\u274C Explorer - Erreur chargement formations:", err);
        console.log("\u26A0\uFE0F Fallback vers getFormationsByEntreprise");
        const entrepriseId = user?.entreprise_id;
        if (!entrepriseId) {
          this.error = "Impossible de charger les formations";
          this.loading = false;
          return;
        }
        this.formationService.getFormationsByEntreprise(entrepriseId).subscribe({
          next: (response) => {
            this.formations = response.formations || response.data || [];
            console.log(`\u2705 Explorer - ${this.formations.length} formations charg\xE9es (fallback)`);
            this.loading = false;
          },
          error: () => {
            this.error = "Impossible de charger les formations";
            this.loading = false;
          }
        });
      }
    });
  }
  getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem("pyramide_user") || "null");
    } catch {
      return null;
    }
  }
  loadCatalogues() {
    const user = this.getCurrentUser();
    console.log("\u{1F50D} Explorer - Chargement catalogues pour utilisateur:", {
      entreprise_id: user?.entreprise_id,
      user_id: user?.id,
      role: user?.role
    });
    this.formationService.getCataloguesForEmploye().subscribe({
      next: (response) => {
        console.log("\u{1F4E6} Explorer - R\xE9ponse API catalogues:", response);
        const rawCatalogues = response.catalogues || response.data || [];
        console.log(`\u2705 Explorer - ${rawCatalogues.length} catalogues bruts re\xE7us`);
        this.catalogues = rawCatalogues.map((c) => ({
          id: c.id,
          nom: c.nom || c.titre,
          titre: c.titre || c.nom,
          description: c.description,
          image_couverture: c.image_couverture,
          formations_count: c.formations_count || c.nombre_formations || 0,
          nombre_formations: c.nombre_formations || c.formations_count || 0,
          est_assigne: c.est_assigne || false,
          peut_demander: c.peut_demander !== false
          // Par défaut true si non défini
        }));
        console.log(`\u2705 Explorer - ${this.catalogues.length} catalogues apr\xE8s normalisation`);
        this.loading = false;
      },
      error: (err) => {
        console.error("\u274C Explorer - Erreur chargement catalogues:", err);
        this.error = "Impossible de charger les catalogues";
        this.loading = false;
      }
    });
  }
  loadParcours() {
    const user = this.getCurrentUser();
    console.log("\u{1F50D} Explorer - Chargement parcours pour utilisateur:", {
      entreprise_id: user?.entreprise_id,
      domaine_id: user?.domaine_id,
      user_id: user?.id
    });
    this.formationService.getParcoursDisponibles().subscribe({
      next: (response) => {
        console.log("\u{1F4E6} Explorer - R\xE9ponse API parcours:", response);
        const rawParcours = response.parcours || response.data || [];
        console.log(`\u2705 Explorer - ${rawParcours.length} parcours bruts re\xE7us`);
        this.parcours = rawParcours.map((p) => ({
          id: p.id,
          nom: p.nom,
          description: p.description,
          image_couverture: p.image_couverture,
          duree_totale: p.duree_totale || 0,
          formations_count: p.formations_count || p.nombre_formations || 0,
          categorie: p.categorie || null,
          est_assigne: p.est_assigne || false,
          peut_demander: p.peut_demander !== false
          // Par défaut true si non défini
        }));
        console.log(`\u2705 Explorer - ${this.parcours.length} parcours apr\xE8s normalisation`);
        this.loading = false;
      },
      error: (err) => {
        console.error("\u274C Explorer - Erreur chargement parcours:", err);
        this.error = "Impossible de charger les parcours";
        this.loading = false;
      }
    });
  }
  applyFilters(items) {
    let result = items;
    if (this.searchTerm) {
      const search = this.searchTerm.toLowerCase();
      result = result.filter((item) => item.titre.toLowerCase().includes(search) || item.description?.toLowerCase().includes(search));
    }
    if (this.selectedCategory) {
      result = result.filter((item) => item.categorie_formation?.id === this.selectedCategory);
    }
    if (this.selectedNiveau) {
      result = result.filter((item) => item.niveau?.toLowerCase() === this.selectedNiveau?.toLowerCase());
    }
    return result;
  }
  changeTab(tab) {
    if (this.activeTab === tab)
      return;
    this.activeTab = tab;
    this.resetFilters();
    this.loadData();
  }
  resetFilters() {
    this.searchTerm = "";
    this.selectedCategory = null;
    this.selectedNiveau = null;
  }
  onSearchChange() {
  }
  onFilterChange() {
  }
  demanderFormation(formationId) {
    this.formationSelectionnee = this.formations.find((f) => f.id === formationId) || null;
    this.catalogueSelectionne = null;
    this.parcoursSelectionne = null;
    this.typeDemandeActuelle = "formation";
    if (!this.formationSelectionnee)
      return;
    this.demandeForm.reset({
      motif_demande: "",
      objectifs_personnels: "",
      priorite: "normale",
      date_souhaitee_debut: "",
      commentaire_employe: ""
    });
    this.demandeModal = new bootstrap.Modal(document.getElementById("demandeFormationModal"));
    this.demandeModal.show();
  }
  soumettreDemandeFormation() {
    if (this.demandeForm.invalid) {
      Object.keys(this.demandeForm.controls).forEach((key) => {
        this.demandeForm.get(key)?.markAsTouched();
      });
      return;
    }
    if (!this.formationSelectionnee && !this.catalogueSelectionne && !this.parcoursSelectionne) {
      return;
    }
    this.submitting = true;
    let payload = __spreadValues({
      type_demande: this.typeDemandeActuelle
    }, this.demandeForm.value);
    if (this.typeDemandeActuelle === "formation" && this.formationSelectionnee) {
      payload.formation_id = this.formationSelectionnee.id;
    } else if (this.typeDemandeActuelle === "catalogue" && this.catalogueSelectionne) {
      payload.catalogue_id = this.catalogueSelectionne.id;
    } else if (this.typeDemandeActuelle === "parcours" && this.parcoursSelectionne) {
      payload.parcours_id = this.parcoursSelectionne.id;
    }
    this.demandeService.creerDemande(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.demandeModal.hide();
        const type = this.typeDemandeActuelle === "formation" ? "formation" : this.typeDemandeActuelle === "catalogue" ? "catalogue" : "parcours";
        alert(`Demande de ${type} envoy\xE9e avec succ\xE8s !`);
        this.loadData();
      },
      error: (err) => {
        this.submitting = false;
        console.error("Erreur cr\xE9ation demande:", err);
        alert("Erreur lors de la cr\xE9ation de la demande. Veuillez r\xE9essayer.");
      }
    });
  }
  fermerModalDemande() {
    if (this.demandeModal) {
      this.demandeModal.hide();
    }
  }
  demanderCatalogue(catalogueId) {
    this.catalogueSelectionne = this.catalogues.find((c) => c.id === catalogueId) || null;
    this.formationSelectionnee = null;
    this.parcoursSelectionne = null;
    this.typeDemandeActuelle = "catalogue";
    if (!this.catalogueSelectionne)
      return;
    this.demandeForm.reset({
      motif_demande: "",
      objectifs_personnels: "",
      priorite: "normale",
      date_souhaitee_debut: "",
      commentaire_employe: ""
    });
    this.demandeModal = new bootstrap.Modal(document.getElementById("demandeFormationModal"));
    this.demandeModal.show();
  }
  demanderParcours(parcoursId) {
    this.parcoursSelectionne = this.parcours.find((p) => p.id === parcoursId) || null;
    this.formationSelectionnee = null;
    this.catalogueSelectionne = null;
    this.typeDemandeActuelle = "parcours";
    if (!this.parcoursSelectionne)
      return;
    this.demandeForm.reset({
      motif_demande: "",
      objectifs_personnels: "",
      priorite: "normale",
      date_souhaitee_debut: "",
      commentaire_employe: ""
    });
    this.demandeModal = new bootstrap.Modal(document.getElementById("demandeFormationModal"));
    this.demandeModal.show();
  }
  getImageUrl(path) {
    return this.formationService.getImageUrl(path);
  }
  getNiveauClass(niveau) {
    const n = niveau?.toLowerCase();
    if (n === "d\xE9butant")
      return "badge-success";
    if (n === "interm\xE9diaire")
      return "badge-info";
    if (n === "avanc\xE9")
      return "badge-warning";
    if (n === "expert")
      return "badge-danger";
    return "badge-secondary";
  }
  static \u0275fac = function ExplorerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExplorerComponent)(\u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(CategorieService), \u0275\u0275directiveInject(DemandeFormationService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExplorerComponent, selectors: [["app-explorer"]], decls: 84, vars: 30, consts: [[1, "ph"], [1, "ph-icon"], [1, "isax", "isax-search-normal-1"], [1, "ph-info"], [1, "ph-title"], [1, "ph-sub"], [1, "tab-bar"], [1, "tab", 3, "click"], [1, "isax", "isax-book-1"], [1, "isax", "isax-folder-2"], [1, "isax", "isax-diagram"], [1, "filters-bar"], [1, "search-box"], ["type", "text", "placeholder", "Rechercher...", 3, "ngModelChange", "ngModel"], ["type", "button", "class", "clear-btn", 3, "click", 4, "ngIf"], [1, "filter-group"], [1, "isax", "isax-category"], [1, "filter-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "filter-group", 4, "ngIf"], ["type", "button", "class", "btn-reset", 3, "click", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "error-banner", 4, "ngIf"], ["class", "tv", 3, "active", 4, "ngIf"], ["id", "demandeFormationModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "isax", "isax-add-circle"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], ["class", "formation-info mb-4", 4, "ngIf"], [3, "formGroup"], [1, "mb-3"], [1, "form-label"], ["formControlName", "motif_demande", "rows", "3", "placeholder", "Expliquez pourquoi vous souhaitez suivre cette formation...", 1, "form-control"], ["class", "text-danger small", 4, "ngIf"], ["formControlName", "objectifs_personnels", "rows", "3", "placeholder", "Quels sont vos objectifs en suivant cette formation ?", 1, "form-control"], ["formControlName", "priorite", 1, "form-select"], ["value", "basse"], ["value", "normale"], ["value", "haute"], ["value", "urgente"], ["type", "date", "formControlName", "date_souhaitee_debut", 1, "form-control"], ["formControlName", "commentaire_employe", "rows", "2", "placeholder", "Ajoutez des informations compl\xE9mentaires...", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [4, "ngIf"], ["type", "button", 1, "clear-btn", 3, "click"], [1, "isax", "isax-close-circle"], [1, "isax", "isax-medal-star"], ["type", "button", 1, "btn-reset", 3, "click"], [1, "isax", "isax-refresh"], [1, "loading-state"], [1, "spinner"], [1, "error-banner"], [1, "isax", "isax-warning-2"], [1, "error-text"], [1, "error-title"], [1, "error-message"], ["type", "button", 1, "btn-retry", 3, "click"], [1, "tv"], ["class", "empty-state", 4, "ngIf"], ["class", "course-grid", 4, "ngIf"], [1, "empty-state"], [1, "isax", "isax-book"], ["type", "button", 1, "btn-primary", 3, "click"], [1, "course-grid"], ["class", "course-card", 4, "ngFor", "ngForOf"], [1, "course-card"], [1, "course-image"], [3, "src", "alt"], ["class", "course-badge", 4, "ngIf"], [1, "course-content"], [1, "course-meta"], ["class", "category-badge", 4, "ngIf"], [1, "niveau-badge", 3, "ngClass"], [1, "course-title"], [1, "course-description"], [1, "course-stats"], [1, "stat"], [1, "isax", "isax-clock"], ["class", "stat", 4, "ngIf"], ["class", "course-instructor", 4, "ngIf"], [1, "course-actions"], [1, "btn-view", 3, "routerLink"], [1, "isax", "isax-eye"], ["class", "btn-demand", 3, "click", 4, "ngIf"], ["class", "enrolled-tag", 4, "ngIf"], [1, "course-badge"], [1, "isax", "isax-tick-circle"], [1, "category-badge"], [1, "isax", "isax-star"], [1, "isax", "isax-people"], [1, "course-instructor"], [1, "instructor-avatar", 3, "src", "alt"], [1, "instructor-name"], [1, "btn-demand", 3, "click"], [1, "enrolled-tag"], [1, "btn-primary", 3, "click"], ["class", "course-card catalogue-card", 4, "ngFor", "ngForOf"], [1, "course-card", "catalogue-card"], [1, "type-badge", "catalogue"], ["class", "course-card parcours-card", 4, "ngFor", "ngForOf"], [1, "course-card", "parcours-card"], [1, "type-badge", "parcours"], [1, "formation-info", "mb-4"], [1, "text-primary"], [1, "text-muted", "small", "mb-0"], [1, "text-danger", "small"], [1, "isax", "isax-send-2"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function ExplorerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5, "Explorer les Formations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275text(7, " D\xE9couvrez formations, catalogues et parcours disponibles dans votre entreprise ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7);
      \u0275\u0275listener("click", function ExplorerComponent_Template_div_click_9_listener() {
        return ctx.changeTab("formations");
      });
      \u0275\u0275element(10, "i", 8);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7);
      \u0275\u0275listener("click", function ExplorerComponent_Template_div_click_12_listener() {
        return ctx.changeTab("catalogues");
      });
      \u0275\u0275element(13, "i", 9);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7);
      \u0275\u0275listener("click", function ExplorerComponent_Template_div_click_15_listener() {
        return ctx.changeTab("parcours");
      });
      \u0275\u0275element(16, "i", 10);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 11)(19, "div", 12);
      \u0275\u0275element(20, "i", 2);
      \u0275\u0275elementStart(21, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function ExplorerComponent_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(22, ExplorerComponent_button_22_Template, 2, 0, "button", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 15)(24, "label");
      \u0275\u0275element(25, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "select", 17);
      \u0275\u0275twoWayListener("ngModelChange", function ExplorerComponent_Template_select_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
        return $event;
      });
      \u0275\u0275elementStart(27, "option", 18);
      \u0275\u0275text(28, "Toutes les cat\xE9gories");
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, ExplorerComponent_option_29_Template, 2, 2, "option", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(30, ExplorerComponent_div_30_Template, 7, 3, "div", 20)(31, ExplorerComponent_button_31_Template, 3, 0, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(32, ExplorerComponent_div_32_Template, 4, 0, "div", 22)(33, ExplorerComponent_div_33_Template, 10, 1, "div", 23)(34, ExplorerComponent_div_34_Template, 3, 4, "div", 24)(35, ExplorerComponent_div_35_Template, 3, 4, "div", 24)(36, ExplorerComponent_div_36_Template, 3, 4, "div", 24);
      \u0275\u0275elementStart(37, "div", 25)(38, "div", 26)(39, "div", 27)(40, "div", 28)(41, "h5", 29);
      \u0275\u0275element(42, "i", 30);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 31);
      \u0275\u0275listener("click", function ExplorerComponent_Template_button_click_44_listener() {
        return ctx.fermerModalDemande();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 32);
      \u0275\u0275template(46, ExplorerComponent_div_46_Template, 5, 2, "div", 33);
      \u0275\u0275elementStart(47, "form", 34)(48, "div", 35)(49, "label", 36);
      \u0275\u0275text(50, "Motif de la demande *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(51, "textarea", 37);
      \u0275\u0275template(52, ExplorerComponent_div_52_Template, 2, 0, "div", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 35)(54, "label", 36);
      \u0275\u0275text(55, "Objectifs personnels *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(56, "textarea", 39);
      \u0275\u0275template(57, ExplorerComponent_div_57_Template, 2, 0, "div", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 35)(59, "label", 36);
      \u0275\u0275text(60, "Priorit\xE9 *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "select", 40)(62, "option", 41);
      \u0275\u0275text(63, "Basse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "option", 42);
      \u0275\u0275text(65, "Normale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "option", 43);
      \u0275\u0275text(67, "Haute");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "option", 44);
      \u0275\u0275text(69, "Urgente");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(70, "div", 35)(71, "label", 36);
      \u0275\u0275text(72, "Date souhait\xE9e de d\xE9but (optionnel)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(73, "input", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 35)(75, "label", 36);
      \u0275\u0275text(76, "Commentaire additionnel (optionnel)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(77, "textarea", 46);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "div", 47)(79, "button", 48);
      \u0275\u0275listener("click", function ExplorerComponent_Template_button_click_79_listener() {
        return ctx.fermerModalDemande();
      });
      \u0275\u0275text(80, " Annuler ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "button", 49);
      \u0275\u0275listener("click", function ExplorerComponent_Template_button_click_81_listener() {
        return ctx.soumettreDemandeFormation();
      });
      \u0275\u0275template(82, ExplorerComponent_span_82_Template, 3, 0, "span", 50)(83, ExplorerComponent_span_83_Template, 3, 0, "span", 50);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_21_0;
      let tmp_22_0;
      \u0275\u0275advance(9);
      \u0275\u0275classProp("active", ctx.activeTab === "formations");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Formations (", ctx.formations.length, ") ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "catalogues");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Catalogues (", ctx.catalogues.length, ") ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "parcours");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Parcours (", ctx.parcours.length, ") ");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchTerm);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategory);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "formations");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchTerm || ctx.selectedCategory || ctx.selectedNiveau);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.titreModal, " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.elementSelectionne);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.demandeForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ((tmp_21_0 = ctx.demandeForm.get("motif_demande")) == null ? null : tmp_21_0.touched) && ((tmp_21_0 = ctx.demandeForm.get("motif_demande")) == null ? null : tmp_21_0.errors == null ? null : tmp_21_0.errors["required"]));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ((tmp_22_0 = ctx.demandeForm.get("objectifs_personnels")) == null ? null : tmp_22_0.touched) && ((tmp_22_0 = ctx.demandeForm.get("objectifs_personnels")) == null ? null : tmp_22_0.errors == null ? null : tmp_22_0.errors["required"]));
      \u0275\u0275advance(22);
      \u0275\u0275property("disabled", ctx.submitting);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.submitting || ctx.demandeForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.submitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitting);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, RouterLink, SlicePipe], styles: [`

[_nghost-%COMP%] {
  display: block;
  width: 100%;
}
.ph[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px 0;
  margin-bottom: 24px;
}
.ph[_ngcontent-%COMP%]   .ph-icon[_ngcontent-%COMP%] {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(
      135deg,
      #059669 0%,
      #047857 100%);
  border-radius: 14px;
  color: #fff;
  font-size: 28px;
  flex-shrink: 0;
}
.ph[_ngcontent-%COMP%]   .ph-info[_ngcontent-%COMP%] {
  flex: 1;
}
.ph[_ngcontent-%COMP%]   .ph-info[_ngcontent-%COMP%]   .ph-title[_ngcontent-%COMP%] {
  font-size: 26px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
}
.ph[_ngcontent-%COMP%]   .ph-info[_ngcontent-%COMP%]   .ph-sub[_ngcontent-%COMP%] {
  font-size: 14px;
  color: #64748b;
}
.tab-bar[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  padding: 4px;
  background: #f8fafc;
  border-radius: 12px;
}
.tab-bar[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {
  flex: 1;
  padding: 12px 20px;
  background: transparent;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.tab-bar[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 18px;
}
.tab-bar[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover {
  background: #f1f5f9;
  color: #475569;
}
.tab-bar[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%] {
  background: #fff;
  color: #059669;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
.tv[_ngcontent-%COMP%] {
  display: none;
}
.tv.active[_ngcontent-%COMP%] {
  display: block;
}
.filters-bar[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  flex-wrap: wrap;
}
.filters-bar[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {
  position: relative;
  flex: 1;
  min-width: 250px;
}
.filters-bar[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
  font-size: 18px;
}
.filters-bar[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  width: 100%;
  height: 44px;
  padding: 0 44px 0 44px;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 14px;
  transition: all 0.3s;
}
.filters-bar[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #059669;
  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.1);
}
.filters-bar[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {
  color: #94a3b8;
}
.filters-bar[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  font-size: 20px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
}
.filters-bar[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%]:hover {
  color: #ef4444;
}
.filters-bar[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.filters-bar[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #f8fafc;
  border-radius: 8px;
  color: #64748b;
  font-size: 18px;
}
.filters-bar[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {
  height: 44px;
  padding: 0 40px 0 14px;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 14px;
  background: #fff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2364748b' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  appearance: none;
  cursor: pointer;
  transition: all 0.3s;
  min-width: 160px;
}
.filters-bar[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #059669;
  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.1);
}
.filters-bar[_ngcontent-%COMP%]   .btn-reset[_ngcontent-%COMP%] {
  height: 44px;
  padding: 0 20px;
  background: #f1f5f9;
  border: none;
  border-radius: 10px;
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
}
.filters-bar[_ngcontent-%COMP%]   .btn-reset[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 18px;
}
.filters-bar[_ngcontent-%COMP%]   .btn-reset[_ngcontent-%COMP%]:hover {
  background: #e2e8f0;
  color: #1e293b;
}
.loading-state[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  gap: 20px;
}
.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {
  width: 48px;
  height: 48px;
  border: 4px solid #e2e8f0;
  border-top-color: #059669;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;
}
.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 15px;
  margin: 0;
}
@keyframes _ngcontent-%COMP%_spin {
  to {
    transform: rotate(360deg);
  }
}
.error-banner[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 12px;
  margin-bottom: 20px;
}
.error-banner[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {
  font-size: 28px;
  color: #ef4444;
  flex-shrink: 0;
}
.error-banner[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {
  flex: 1;
}
.error-banner[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #991b1b;
  margin-bottom: 4px;
  font-size: 15px;
}
.error-banner[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {
  color: #dc2626;
  font-size: 14px;
}
.error-banner[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {
  padding: 10px 20px;
  background: #ef4444;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
}
.error-banner[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%]:hover {
  background: #dc2626;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}
.empty-state[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
}
.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 64px;
  color: #cbd5e1;
  margin-bottom: 20px;
}
.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 8px 0;
}
.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 15px;
  margin: 0 0 24px 0;
}
.empty-state[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {
  padding: 12px 28px;
  background: #059669;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.empty-state[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {
  background: #047857;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(5, 150, 105, 0.3);
}
.course-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  padding: 4px;
}
.course-card[_ngcontent-%COMP%] {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.course-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}
.course-card[_ngcontent-%COMP%]   .course-image[_ngcontent-%COMP%] {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #f1f5f9;
}
.course-card[_ngcontent-%COMP%]   .course-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}
.course-card[_ngcontent-%COMP%]   .course-image[_ngcontent-%COMP%]   .course-badge[_ngcontent-%COMP%] {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px 12px;
  background: rgba(5, 150, 105, 0.95);
  color: #fff;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}
.course-card[_ngcontent-%COMP%]   .course-image[_ngcontent-%COMP%]   .course-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 14px;
}
.course-card[_ngcontent-%COMP%]   .course-image[_ngcontent-%COMP%]   .course-badge.free[_ngcontent-%COMP%] {
  background: rgba(239, 68, 68, 0.95);
}
.course-card[_ngcontent-%COMP%]:hover   .course-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  transform: scale(1.05);
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%] {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-meta[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-meta[_ngcontent-%COMP%]   .category-badge[_ngcontent-%COMP%] {
  padding: 4px 10px;
  background: #f0fdfa;
  color: #0d9488;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-meta[_ngcontent-%COMP%]   .niveau-badge[_ngcontent-%COMP%] {
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  text-transform: capitalize;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-meta[_ngcontent-%COMP%]   .niveau-badge.badge-success[_ngcontent-%COMP%] {
  background: #dcfce7;
  color: #16a34a;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-meta[_ngcontent-%COMP%]   .niveau-badge.badge-info[_ngcontent-%COMP%] {
  background: #dbeafe;
  color: #2563eb;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-meta[_ngcontent-%COMP%]   .niveau-badge.badge-warning[_ngcontent-%COMP%] {
  background: #fef3c7;
  color: #d97706;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-meta[_ngcontent-%COMP%]   .niveau-badge.badge-danger[_ngcontent-%COMP%] {
  background: #fee2e2;
  color: #dc2626;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-meta[_ngcontent-%COMP%]   .niveau-badge.badge-secondary[_ngcontent-%COMP%] {
  background: #f1f5f9;
  color: #64748b;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-meta[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%] {
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-meta[_ngcontent-%COMP%]   .type-badge.catalogue[_ngcontent-%COMP%] {
  background: #ede9fe;
  color: #7c3aed;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-meta[_ngcontent-%COMP%]   .type-badge.parcours[_ngcontent-%COMP%] {
  background: #fef3c7;
  color: #d97706;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-meta[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 14px;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-title[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-description[_ngcontent-%COMP%] {
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-stats[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #64748b;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 16px;
  color: #94a3b8;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-instructor[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 8px;
  border-top: 1px solid #f1f5f9;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-instructor[_ngcontent-%COMP%]   .instructor-avatar[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-instructor[_ngcontent-%COMP%]   .instructor-name[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #475569;
  font-weight: 500;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 10px;
  margin-top: auto;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-actions[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%] {
  flex: 1;
  padding: 10px 16px;
  background: #f8fafc;
  color: #475569;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-actions[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 18px;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-actions[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%]:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
  color: #1e293b;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-actions[_ngcontent-%COMP%]   .btn-demand[_ngcontent-%COMP%] {
  flex: 1;
  padding: 10px 16px;
  background: #059669;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-actions[_ngcontent-%COMP%]   .btn-demand[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 18px;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-actions[_ngcontent-%COMP%]   .btn-demand[_ngcontent-%COMP%]:hover {
  background: #047857;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-actions[_ngcontent-%COMP%]   .btn-demand[_ngcontent-%COMP%]:active {
  transform: translateY(0);
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-actions[_ngcontent-%COMP%]   .enrolled-tag[_ngcontent-%COMP%] {
  flex: 1;
  padding: 10px 16px;
  background: #dcfce7;
  color: #16a34a;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-actions[_ngcontent-%COMP%]   .enrolled-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 18px;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-price[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  padding-top: 8px;
}
.course-card[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .course-price[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 700;
  color: #059669;
}
.course-card.catalogue-card[_ngcontent-%COMP%] {
  border-left: 4px solid #7c3aed;
}
.course-card.parcours-card[_ngcontent-%COMP%] {
  border-left: 4px solid #d97706;
}
@media (max-width: 768px) {
  .filters-bar[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: stretch;
  }
  .filters-bar[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {
    min-width: 100%;
  }
  .filters-bar[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {
    min-width: 100%;
  }
  .filters-bar[_ngcontent-%COMP%]   .btn-reset[_ngcontent-%COMP%] {
    width: 100%;
    justify-content: center;
  }
  .course-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
@media (max-width: 1024px) and (min-width: 769px) {
  .course-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
/*# sourceMappingURL=explorer.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExplorerComponent, [{
    type: Component,
    args: [{ selector: "app-explorer", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink], template: `<!-- \u2550\u2550 PAGE HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="ph">
  <div class="ph-icon"><i class="isax isax-search-normal-1"></i></div>
  <div class="ph-info">
    <div class="ph-title">Explorer les Formations</div>
    <div class="ph-sub">
      D\xE9couvrez formations, catalogues et parcours disponibles dans votre entreprise
    </div>
  </div>
</div>

<!-- \u2550\u2550 TABS NAVIGATION \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="tab-bar">
  <div
    class="tab"
    [class.active]="activeTab === 'formations'"
    (click)="changeTab('formations')">
    <i class="isax isax-book-1"></i> Formations ({{ formations.length }})
  </div>
  <div
    class="tab"
    [class.active]="activeTab === 'catalogues'"
    (click)="changeTab('catalogues')">
    <i class="isax isax-folder-2"></i> Catalogues ({{ catalogues.length }})
  </div>
  <div
    class="tab"
    [class.active]="activeTab === 'parcours'"
    (click)="changeTab('parcours')">
    <i class="isax isax-diagram"></i> Parcours ({{ parcours.length }})
  </div>
</div>

<!-- \u2550\u2550 FILTERS BAR \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="filters-bar">
  <!-- Search -->
  <div class="search-box">
    <i class="isax isax-search-normal-1"></i>
    <input
      type="text"
      [(ngModel)]="searchTerm"
      placeholder="Rechercher...">
    <button type="button" *ngIf="searchTerm" class="clear-btn" (click)="searchTerm = ''">
      <i class="isax isax-close-circle"></i>
    </button>
  </div>

  <!-- Category Filter -->
  <div class="filter-group">
    <label><i class="isax isax-category"></i></label>
    <select [(ngModel)]="selectedCategory" class="filter-select">
      <option [ngValue]="null">Toutes les cat\xE9gories</option>
      <option *ngFor="let cat of categories" [ngValue]="cat.id">{{ cat.nom }}</option>
    </select>
  </div>

  <!-- Niveau Filter (for formations) -->
  <div class="filter-group" *ngIf="activeTab === 'formations'">
    <label><i class="isax isax-medal-star"></i></label>
    <select [(ngModel)]="selectedNiveau" class="filter-select">
      <option [ngValue]="null">Tous les niveaux</option>
      <option *ngFor="let niveau of niveaux" [ngValue]="niveau.value">{{ niveau.label }}</option>
    </select>
  </div>

  <!-- Reset Filters -->
  <button type="button" class="btn-reset" (click)="resetFilters()" *ngIf="searchTerm || selectedCategory || selectedNiveau">
    <i class="isax isax-refresh"></i> R\xE9initialiser
  </button>
</div>

<!-- \u2550\u2550 LOADING STATE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="loading-state" *ngIf="loading">
  <div class="spinner"></div>
  <p>Chargement en cours...</p>
</div>

<!-- \u2550\u2550 ERROR STATE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="error-banner" *ngIf="error && !loading">
  <i class="isax isax-warning-2"></i>
  <div class="error-text">
    <div class="error-title">Erreur</div>
    <div class="error-message">{{ error }}</div>
  </div>
  <button type="button" class="btn-retry" (click)="loadData()">
    <i class="isax isax-refresh"></i> R\xE9essayer
  </button>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     TAB - FORMATIONS
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="tv" [class.active]="activeTab === 'formations'" *ngIf="!loading && !error">
  <!-- Empty State -->
  <div class="empty-state" *ngIf="filteredFormations.length === 0">
    <i class="isax isax-book"></i>
    <h3>Aucune formation trouv\xE9e</h3>
    <p>Aucune formation ne correspond \xE0 vos crit\xE8res de recherche</p>
    <button type="button" class="btn-primary" (click)="resetFilters(); loadData()">
      Voir toutes les formations
    </button>
  </div>

  <!-- Course Grid -->
  <div class="course-grid" *ngIf="filteredFormations.length > 0">
    <div class="course-card" *ngFor="let formation of filteredFormations">
      <!-- Image -->
      <div class="course-image">
        <img [src]="getImageUrl(formation.image_couverture)" [alt]="formation.titre">
        <div class="course-badge" *ngIf="formation.est_inscrit">
          <i class="isax isax-tick-circle"></i> Inscrit
        </div>
      </div>

      <!-- Content -->
      <div class="course-content">
        <!-- Category & Niveau -->
        <div class="course-meta">
          <span class="category-badge" *ngIf="formation.categorie_formation">
            {{ formation.categorie_formation.nom }}
          </span>
          <span class="niveau-badge" [ngClass]="getNiveauClass(formation.niveau)">
            {{ formation.niveau }}
          </span>
        </div>

        <!-- Title -->
        <h3 class="course-title">{{ formation.titre }}</h3>

        <!-- Description -->
        <p class="course-description">{{ formation.description | slice:0:120 }}...</p>

        <!-- Stats -->
        <div class="course-stats">
          <div class="stat">
            <i class="isax isax-clock"></i>
            <span>{{ formation.duree_totale }}h</span>
          </div>
          <div class="stat" *ngIf="formation.note_moyenne">
            <i class="isax isax-star"></i>
            <span>{{ formation.note_moyenne }} / 5</span>
          </div>
          <div class="stat" *ngIf="formation.nombre_etudiants">
            <i class="isax isax-people"></i>
            <span>{{ formation.nombre_etudiants }} \xE9tudiants</span>
          </div>
        </div>

        <!-- Formateur -->
        <div class="course-instructor" *ngIf="formation.formateur">
          <img
            [src]="formation.formateur.avatar || 'assets/images/default-avatar.png'"
            [alt]="formation.formateur.name"
            class="instructor-avatar">
          <span class="instructor-name">{{ formation.formateur.name }}</span>
        </div>

        <!-- Actions -->
        <div class="course-actions">
          <a [routerLink]="['/courses/course-details', formation.id]" class="btn-view">
            <i class="isax isax-eye"></i> Voir d\xE9tails
          </a>
          <button
            *ngIf="formation.peut_demander !== false && !formation.est_inscrit"
            class="btn-demand"
            (click)="demanderFormation(formation.id)">
            <i class="isax isax-add-circle"></i> Demander
          </button>
          <div class="enrolled-tag" *ngIf="formation.est_inscrit || formation.peut_demander === false">
            <i class="isax isax-tick-circle"></i> D\xE9j\xE0 demand\xE9
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     TAB - CATALOGUES
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="tv" [class.active]="activeTab === 'catalogues'" *ngIf="!loading && !error">
  <!-- Empty State -->
  <div class="empty-state" *ngIf="filteredCatalogues.length === 0">
    <i class="isax isax-folder-2"></i>
    <h3>Aucun catalogue trouv\xE9</h3>
    <p>Aucun catalogue ne correspond \xE0 vos crit\xE8res de recherche</p>
    <button class="btn-primary" (click)="resetFilters(); loadData()">
      Voir tous les catalogues
    </button>
  </div>

  <!-- Catalogue Grid -->
  <div class="course-grid" *ngIf="filteredCatalogues.length > 0">
    <div class="course-card catalogue-card" *ngFor="let catalogue of filteredCatalogues">
      <!-- Image -->
      <div class="course-image">
        <img [src]="getImageUrl(catalogue.image_couverture)" [alt]="catalogue.nom">
        <div class="course-badge" *ngIf="catalogue.est_assigne">
          <i class="isax isax-tick-circle"></i> Assign\xE9
        </div>
      </div>

      <!-- Content -->
      <div class="course-content">
        <!-- Type Badge -->
        <div class="course-meta">
          <span class="type-badge catalogue">
            <i class="isax isax-folder-2"></i> Catalogue
          </span>
        </div>

        <!-- Title -->
        <h3 class="course-title">{{ catalogue.nom || catalogue.titre }}</h3>

        <!-- Description -->
        <p class="course-description">{{ catalogue.description | slice:0:120 }}...</p>

        <!-- Stats -->
        <div class="course-stats">
          <div class="stat">
            <i class="isax isax-book-1"></i>
            <span>{{ catalogue.formations_count || catalogue.nombre_formations || 0 }} formations</span>
          </div>
        </div>

        <!-- Actions -->
        <div class="course-actions">
          <a [routerLink]="['/student/catalogue-detail', catalogue.id]" class="btn-view">
            <i class="isax isax-eye"></i> Voir d\xE9tails
          </a>
          <button
            *ngIf="catalogue.peut_demander !== false && !catalogue.est_assigne"
            class="btn-demand"
            (click)="demanderCatalogue(catalogue.id)">
            <i class="isax isax-add-circle"></i> Demander
          </button>
          <div class="enrolled-tag" *ngIf="catalogue.est_assigne || catalogue.peut_demander === false">
            <i class="isax isax-tick-circle"></i> D\xE9j\xE0 demand\xE9
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     TAB - PARCOURS
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="tv" [class.active]="activeTab === 'parcours'" *ngIf="!loading && !error">
  <!-- Empty State -->
  <div class="empty-state" *ngIf="filteredParcours.length === 0">
    <i class="isax isax-diagram"></i>
    <h3>Aucun parcours trouv\xE9</h3>
    <p>Aucun parcours ne correspond \xE0 vos crit\xE8res de recherche</p>
    <button class="btn-primary" (click)="resetFilters(); loadData()">
      Voir tous les parcours
    </button>
  </div>

  <!-- Parcours Grid -->
  <div class="course-grid" *ngIf="filteredParcours.length > 0">
    <div class="course-card parcours-card" *ngFor="let parc of filteredParcours">
      <!-- Image -->
      <div class="course-image">
        <img [src]="getImageUrl(parc.image_couverture)" [alt]="parc.nom">
        <div class="course-badge" *ngIf="parc.est_assigne">
          <i class="isax isax-tick-circle"></i> Assign\xE9
        </div>
      </div>

      <!-- Content -->
      <div class="course-content">
        <!-- Type Badge -->
        <div class="course-meta">
          <span class="type-badge parcours">
            <i class="isax isax-diagram"></i> Parcours
          </span>
          <span class="category-badge" *ngIf="parc.categorie">
            {{ parc.categorie.nom }}
          </span>
        </div>

        <!-- Title -->
        <h3 class="course-title">{{ parc.nom }}</h3>

        <!-- Description -->
        <p class="course-description">{{ parc.description | slice:0:120 }}...</p>

        <!-- Stats -->
        <div class="course-stats">
          <div class="stat">
            <i class="isax isax-book-1"></i>
            <span>{{ parc.formations_count }} formations</span>
          </div>
          <div class="stat" *ngIf="parc.duree_totale">
            <i class="isax isax-clock"></i>
            <span>{{ parc.duree_totale }}h</span>
          </div>
        </div>

        <!-- Actions -->
        <div class="course-actions">
          <a [routerLink]="['/student/parcours-details', parc.id]" class="btn-view">
            <i class="isax isax-eye"></i> Voir d\xE9tails
          </a>
          <button
            *ngIf="parc.peut_demander !== false && !parc.est_assigne"
            class="btn-demand"
            (click)="demanderParcours(parc.id)">
            <i class="isax isax-add-circle"></i> Demander
          </button>
          <div class="enrolled-tag" *ngIf="parc.est_assigne || parc.peut_demander === false">
            <i class="isax isax-tick-circle"></i> D\xE9j\xE0 demand\xE9
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     MODAL - DEMANDE FORMATION
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="modal fade" id="demandeFormationModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <!-- Header -->
      <div class="modal-header">
        <h5 class="modal-title">
          <i class="isax isax-add-circle"></i>
          {{ titreModal }}
        </h5>
        <button type="button" class="btn-close" (click)="fermerModalDemande()"></button>
      </div>

      <!-- Body -->
      <div class="modal-body">
        <div *ngIf="elementSelectionne" class="formation-info mb-4">
          <h6 class="text-primary">{{ elementSelectionne.titre || elementSelectionne.nom }}</h6>
          <p class="text-muted small mb-0">{{ elementSelectionne.description }}</p>
        </div>

        <form [formGroup]="demandeForm">
          <!-- Motif -->
          <div class="mb-3">
            <label class="form-label">Motif de la demande *</label>
            <textarea
              formControlName="motif_demande"
              class="form-control"
              rows="3"
              placeholder="Expliquez pourquoi vous souhaitez suivre cette formation..."></textarea>
            <div class="text-danger small" *ngIf="demandeForm.get('motif_demande')?.touched && demandeForm.get('motif_demande')?.errors?.['required']">
              Le motif est obligatoire
            </div>
          </div>

          <!-- Objectifs -->
          <div class="mb-3">
            <label class="form-label">Objectifs personnels *</label>
            <textarea
              formControlName="objectifs_personnels"
              class="form-control"
              rows="3"
              placeholder="Quels sont vos objectifs en suivant cette formation ?"></textarea>
            <div class="text-danger small" *ngIf="demandeForm.get('objectifs_personnels')?.touched && demandeForm.get('objectifs_personnels')?.errors?.['required']">
              Les objectifs sont obligatoires
            </div>
          </div>

          <!-- Priorit\xE9 -->
          <div class="mb-3">
            <label class="form-label">Priorit\xE9 *</label>
            <select formControlName="priorite" class="form-select">
              <option value="basse">Basse</option>
              <option value="normale">Normale</option>
              <option value="haute">Haute</option>
              <option value="urgente">Urgente</option>
            </select>
          </div>

          <!-- Date souhait\xE9e -->
          <div class="mb-3">
            <label class="form-label">Date souhait\xE9e de d\xE9but (optionnel)</label>
            <input
              type="date"
              formControlName="date_souhaitee_debut"
              class="form-control">
          </div>

          <!-- Commentaire -->
          <div class="mb-3">
            <label class="form-label">Commentaire additionnel (optionnel)</label>
            <textarea
              formControlName="commentaire_employe"
              class="form-control"
              rows="2"
              placeholder="Ajoutez des informations compl\xE9mentaires..."></textarea>
          </div>
        </form>
      </div>

      <!-- Footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="fermerModalDemande()" [disabled]="submitting">
          Annuler
        </button>
        <button
          type="button"
          class="btn btn-primary"
          (click)="soumettreDemandeFormation()"
          [disabled]="submitting || demandeForm.invalid">
          <span *ngIf="!submitting">
            <i class="isax isax-send-2"></i> Envoyer la demande
          </span>
          <span *ngIf="submitting">
            <span class="spinner-border spinner-border-sm me-2"></span>
            Envoi en cours...
          </span>
        </button>
      </div>
    </div>
  </div>
</div>
`, styles: [`/* src/app/features/student/explorer/explorer.component.scss */
:host {
  display: block;
  width: 100%;
}
.ph {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px 0;
  margin-bottom: 24px;
}
.ph .ph-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(
      135deg,
      #059669 0%,
      #047857 100%);
  border-radius: 14px;
  color: #fff;
  font-size: 28px;
  flex-shrink: 0;
}
.ph .ph-info {
  flex: 1;
}
.ph .ph-info .ph-title {
  font-size: 26px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
}
.ph .ph-info .ph-sub {
  font-size: 14px;
  color: #64748b;
}
.tab-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  padding: 4px;
  background: #f8fafc;
  border-radius: 12px;
}
.tab-bar .tab {
  flex: 1;
  padding: 12px 20px;
  background: transparent;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.tab-bar .tab i {
  font-size: 18px;
}
.tab-bar .tab:hover {
  background: #f1f5f9;
  color: #475569;
}
.tab-bar .tab.active {
  background: #fff;
  color: #059669;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
.tv {
  display: none;
}
.tv.active {
  display: block;
}
.filters-bar {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  flex-wrap: wrap;
}
.filters-bar .search-box {
  position: relative;
  flex: 1;
  min-width: 250px;
}
.filters-bar .search-box i {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
  font-size: 18px;
}
.filters-bar .search-box input {
  width: 100%;
  height: 44px;
  padding: 0 44px 0 44px;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 14px;
  transition: all 0.3s;
}
.filters-bar .search-box input:focus {
  outline: none;
  border-color: #059669;
  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.1);
}
.filters-bar .search-box input::placeholder {
  color: #94a3b8;
}
.filters-bar .search-box .clear-btn {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  font-size: 20px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
}
.filters-bar .search-box .clear-btn:hover {
  color: #ef4444;
}
.filters-bar .filter-group {
  display: flex;
  align-items: center;
  gap: 8px;
}
.filters-bar .filter-group label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #f8fafc;
  border-radius: 8px;
  color: #64748b;
  font-size: 18px;
}
.filters-bar .filter-group .filter-select {
  height: 44px;
  padding: 0 40px 0 14px;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 14px;
  background: #fff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2364748b' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  appearance: none;
  cursor: pointer;
  transition: all 0.3s;
  min-width: 160px;
}
.filters-bar .filter-group .filter-select:focus {
  outline: none;
  border-color: #059669;
  box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.1);
}
.filters-bar .btn-reset {
  height: 44px;
  padding: 0 20px;
  background: #f1f5f9;
  border: none;
  border-radius: 10px;
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
}
.filters-bar .btn-reset i {
  font-size: 18px;
}
.filters-bar .btn-reset:hover {
  background: #e2e8f0;
  color: #1e293b;
}
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  gap: 20px;
}
.loading-state .spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #e2e8f0;
  border-top-color: #059669;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
.loading-state p {
  color: #64748b;
  font-size: 15px;
  margin: 0;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.error-banner {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 12px;
  margin-bottom: 20px;
}
.error-banner > i {
  font-size: 28px;
  color: #ef4444;
  flex-shrink: 0;
}
.error-banner .error-text {
  flex: 1;
}
.error-banner .error-text .error-title {
  font-weight: 600;
  color: #991b1b;
  margin-bottom: 4px;
  font-size: 15px;
}
.error-banner .error-text .error-message {
  color: #dc2626;
  font-size: 14px;
}
.error-banner .btn-retry {
  padding: 10px 20px;
  background: #ef4444;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
}
.error-banner .btn-retry:hover {
  background: #dc2626;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
}
.empty-state i {
  font-size: 64px;
  color: #cbd5e1;
  margin-bottom: 20px;
}
.empty-state h3 {
  font-size: 20px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 8px 0;
}
.empty-state p {
  color: #64748b;
  font-size: 15px;
  margin: 0 0 24px 0;
}
.empty-state .btn-primary {
  padding: 12px 28px;
  background: #059669;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.empty-state .btn-primary:hover {
  background: #047857;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(5, 150, 105, 0.3);
}
.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  padding: 4px;
}
.course-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.course-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}
.course-card .course-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #f1f5f9;
}
.course-card .course-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}
.course-card .course-image .course-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px 12px;
  background: rgba(5, 150, 105, 0.95);
  color: #fff;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}
.course-card .course-image .course-badge i {
  font-size: 14px;
}
.course-card .course-image .course-badge.free {
  background: rgba(239, 68, 68, 0.95);
}
.course-card:hover .course-image img {
  transform: scale(1.05);
}
.course-card .course-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}
.course-card .course-content .course-meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.course-card .course-content .course-meta .category-badge {
  padding: 4px 10px;
  background: #f0fdfa;
  color: #0d9488;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.course-card .course-content .course-meta .niveau-badge {
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  text-transform: capitalize;
}
.course-card .course-content .course-meta .niveau-badge.badge-success {
  background: #dcfce7;
  color: #16a34a;
}
.course-card .course-content .course-meta .niveau-badge.badge-info {
  background: #dbeafe;
  color: #2563eb;
}
.course-card .course-content .course-meta .niveau-badge.badge-warning {
  background: #fef3c7;
  color: #d97706;
}
.course-card .course-content .course-meta .niveau-badge.badge-danger {
  background: #fee2e2;
  color: #dc2626;
}
.course-card .course-content .course-meta .niveau-badge.badge-secondary {
  background: #f1f5f9;
  color: #64748b;
}
.course-card .course-content .course-meta .type-badge {
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
}
.course-card .course-content .course-meta .type-badge.catalogue {
  background: #ede9fe;
  color: #7c3aed;
}
.course-card .course-content .course-meta .type-badge.parcours {
  background: #fef3c7;
  color: #d97706;
}
.course-card .course-content .course-meta .type-badge i {
  font-size: 14px;
}
.course-card .course-content .course-title {
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.course-card .course-content .course-description {
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.course-card .course-content .course-stats {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.course-card .course-content .course-stats .stat {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #64748b;
}
.course-card .course-content .course-stats .stat i {
  font-size: 16px;
  color: #94a3b8;
}
.course-card .course-content .course-instructor {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 8px;
  border-top: 1px solid #f1f5f9;
}
.course-card .course-content .course-instructor .instructor-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}
.course-card .course-content .course-instructor .instructor-name {
  font-size: 13px;
  color: #475569;
  font-weight: 500;
}
.course-card .course-content .course-actions {
  display: flex;
  gap: 10px;
  margin-top: auto;
}
.course-card .course-content .course-actions .btn-view {
  flex: 1;
  padding: 10px 16px;
  background: #f8fafc;
  color: #475569;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.course-card .course-content .course-actions .btn-view i {
  font-size: 18px;
}
.course-card .course-content .course-actions .btn-view:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
  color: #1e293b;
}
.course-card .course-content .course-actions .btn-demand {
  flex: 1;
  padding: 10px 16px;
  background: #059669;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.course-card .course-content .course-actions .btn-demand i {
  font-size: 18px;
}
.course-card .course-content .course-actions .btn-demand:hover {
  background: #047857;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
}
.course-card .course-content .course-actions .btn-demand:active {
  transform: translateY(0);
}
.course-card .course-content .course-actions .enrolled-tag {
  flex: 1;
  padding: 10px 16px;
  background: #dcfce7;
  color: #16a34a;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.course-card .course-content .course-actions .enrolled-tag i {
  font-size: 18px;
}
.course-card .course-content .course-price {
  display: flex;
  justify-content: flex-end;
  padding-top: 8px;
}
.course-card .course-content .course-price .price {
  font-size: 20px;
  font-weight: 700;
  color: #059669;
}
.course-card.catalogue-card {
  border-left: 4px solid #7c3aed;
}
.course-card.parcours-card {
  border-left: 4px solid #d97706;
}
@media (max-width: 768px) {
  .filters-bar {
    flex-direction: column;
    align-items: stretch;
  }
  .filters-bar .search-box {
    min-width: 100%;
  }
  .filters-bar .filter-group .filter-select {
    min-width: 100%;
  }
  .filters-bar .btn-reset {
    width: 100%;
    justify-content: center;
  }
  .course-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
@media (max-width: 1024px) and (min-width: 769px) {
  .course-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
/*# sourceMappingURL=explorer.component.css.map */
`] }]
  }], () => [{ type: FormationService }, { type: CategorieService }, { type: DemandeFormationService }, { type: FormBuilder }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExplorerComponent, { className: "ExplorerComponent", filePath: "app/features/student/explorer/explorer.component.ts", lineNumber: 59 });
})();
export {
  ExplorerComponent
};
//# sourceMappingURL=chunk-D4I76HUJ.js.map
