import {
  CatalogueService
} from "./chunk-TZUKCMYI.js";
import {
  FormationService
} from "./chunk-SRQJ2PQ4.js";
import "./chunk-FKX6UC3I.js";
import {
  CheckboxControlValueAccessor,
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
} from "./chunk-AK2M3J6O.js";
import "./chunk-GSAJL664.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf
} from "./chunk-3IMMP55I.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UPBSS6WA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-catalogue/adminrh-catalogue.component.ts
function AdminrhCatalogueComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275element(1, "i", 94);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 95);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_div_7_Template_button_click_3_listener() {
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
function AdminrhCatalogueComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275element(1, "i", 97);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 95);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_div_8_Template_button_click_3_listener() {
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
function AdminrhCatalogueComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    \u0275\u0275property("value", type_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r4.label);
  }
}
function AdminrhCatalogueComponent_div_41_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 130);
    \u0275\u0275text(1, "Certifiant");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_div_41_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const catalogue_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Prix moyen: ", \u0275\u0275pipeBind2(2, 1, ctx_r1.getAveragePrice(catalogue_r6.formations), "1.0-0"), "\u20AC ");
  }
}
function AdminrhCatalogueComponent_div_41_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 131);
    \u0275\u0275text(1, "Publi\xE9");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_div_41_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 130);
    \u0275\u0275text(1, "Brouillon");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_div_41_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 132);
    \u0275\u0275text(1, "Public");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_div_41_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 133);
    \u0275\u0275text(1, "Inscription requise");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 99)(1, "div", 7)(2, "div", 100)(3, "div", 101)(4, "div", 102);
    \u0275\u0275element(5, "i", 103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 104)(7, "h6", 105);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 106);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 107)(12, "span");
    \u0275\u0275element(13, "i", 108);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275element(16, "i", 109);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275element(19, "i", 110);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 13)(22, "div", 111)(23, "span", 112);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, AdminrhCatalogueComponent_div_41_span_25_Template, 2, 0, "span", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 114)(27, "div");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, AdminrhCatalogueComponent_div_41_div_29_Template, 3, 4, "div", 115);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 116)(31, "div", 117);
    \u0275\u0275template(32, AdminrhCatalogueComponent_div_41_span_32_Template, 2, 0, "span", 118)(33, AdminrhCatalogueComponent_div_41_span_33_Template, 2, 0, "span", 113)(34, AdminrhCatalogueComponent_div_41_span_34_Template, 2, 0, "span", 119)(35, AdminrhCatalogueComponent_div_41_span_35_Template, 2, 0, "span", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "small", 54);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 101)(39, "div", 121)(40, "button", 122);
    \u0275\u0275text(41, " Actions ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "ul", 123)(43, "li")(44, "a", 124);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_div_41_Template_a_click_44_listener() {
      const catalogue_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewCatalogue(catalogue_r6));
    });
    \u0275\u0275element(45, "i", 125);
    \u0275\u0275text(46, "Voir d\xE9tails ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "li")(48, "a", 124);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_div_41_Template_a_click_48_listener() {
      const catalogue_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openFormationModal(catalogue_r6));
    });
    \u0275\u0275element(49, "i", 3);
    \u0275\u0275text(50, "Ajouter formation ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "li");
    \u0275\u0275element(52, "hr", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "li")(54, "a", 124);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_div_41_Template_a_click_54_listener() {
      const catalogue_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editCatalogue(catalogue_r6));
    });
    \u0275\u0275element(55, "i", 127);
    \u0275\u0275text(56, "Modifier ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "li")(58, "a", 128);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_div_41_Template_a_click_58_listener() {
      const catalogue_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete(catalogue_r6));
    });
    \u0275\u0275element(59, "i", 129);
    \u0275\u0275text(60, "Supprimer ");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const catalogue_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background-color", catalogue_r6.couleur);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getIconClass(catalogue_r6.icone));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(catalogue_r6.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(catalogue_r6.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", catalogue_r6.nombre_formations, " formations");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", catalogue_r6.duree_totale, "h total");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getTypeLabel(catalogue_r6.type));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(catalogue_r6.metadata.niveau);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", catalogue_r6.metadata.certificat_disponible);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Dur\xE9e moyenne: ", catalogue_r6.metadata.duree_moyenne, "h");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", catalogue_r6.formations.length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", catalogue_r6.est_publie);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !catalogue_r6.est_publie);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", catalogue_r6.est_public);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", catalogue_r6.inscription_requise);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Ordre: ", catalogue_r6.ordre);
  }
}
function AdminrhCatalogueComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134)(1, "div", 135)(2, "span", 136);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 137);
    \u0275\u0275text(5, "Chargement des catalogues...");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhCatalogueComponent_div_43_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 143);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_div_43_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCatalogueModal());
    });
    \u0275\u0275element(1, "i", 3);
    \u0275\u0275text(2, "Cr\xE9er un catalogue ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_div_43_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 144);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_div_43_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275element(1, "i", 145);
    \u0275\u0275text(2, "Effacer les filtres ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138);
    \u0275\u0275element(1, "i", 139);
    \u0275\u0275elementStart(2, "h6", 140);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminrhCatalogueComponent_div_43_button_6_Template, 3, 0, "button", 141)(7, AdminrhCatalogueComponent_div_43_button_7_Template, 3, 0, "button", 142);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.catalogues.length === 0 ? "Aucun catalogue trouv\xE9" : "Aucun r\xE9sultat pour ces filtres");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.catalogues.length === 0 ? "Commencez par cr\xE9er votre premier catalogue" : "Essayez de modifier vos crit\xE8res de recherche", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.catalogues.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.catalogues.length > 0);
  }
}
function AdminrhCatalogueComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275text(1, " Le titre est requis (min. 3 caract\xE8res) ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275text(1, " La description est requise (min. 10 caract\xE8res) ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_option_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r9 = ctx.$implicit;
    \u0275\u0275property("value", type_r9.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r9.label);
  }
}
function AdminrhCatalogueComponent_div_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147)(1, "label", 11);
    \u0275\u0275text(2, "Aper\xE7u");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 148)(4, "div", 149);
    \u0275\u0275element(5, "i", 150);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h6", 105);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 151);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background-color", (tmp_1_0 = ctx_r1.catalogueForm.get("couleur")) == null ? null : tmp_1_0.value);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getIconClass((tmp_2_0 = ctx_r1.catalogueForm.get("icone")) == null ? null : tmp_2_0.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_3_0 = ctx_r1.catalogueForm.get("titre")) == null ? null : tmp_3_0.value) || "Titre du catalogue");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_4_0 = ctx_r1.catalogueForm.get("short_description")) == null ? null : tmp_4_0.value) || "Description courte");
  }
}
function AdminrhCatalogueComponent_span_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 152);
  }
}
function AdminrhCatalogueComponent_span_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(": ", ctx_r1.selectedCatalogue.titre);
  }
}
function AdminrhCatalogueComponent_div_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153);
    \u0275\u0275element(1, "div", 152);
    \u0275\u0275text(2, " Chargement des formations... ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_div_151_option_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formation_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", formation_r10.duree_totale, "h)");
  }
}
function AdminrhCatalogueComponent_div_151_option_6_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formation_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" - ", formation_r10.prix, "\u20AC");
  }
}
function AdminrhCatalogueComponent_div_151_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 98);
    \u0275\u0275text(1);
    \u0275\u0275template(2, AdminrhCatalogueComponent_div_151_option_6_span_2_Template, 2, 1, "span", 115)(3, AdminrhCatalogueComponent_div_151_option_6_span_3_Template, 2, 1, "span", 115);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formation_r10 = ctx.$implicit;
    \u0275\u0275property("value", formation_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", formation_r10.titre, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r10.duree_totale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r10.prix);
  }
}
function AdminrhCatalogueComponent_div_151_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275text(1, " Veuillez s\xE9lectionner une formation ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_div_151_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 156);
    \u0275\u0275text(1, " Toutes les formations publi\xE9es sont d\xE9j\xE0 dans ce catalogue ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_div_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "label", 11);
    \u0275\u0275text(2, "Formation \xE0 ajouter *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 154)(4, "option", 15);
    \u0275\u0275text(5, "Choisir une formation...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminrhCatalogueComponent_div_151_option_6_Template, 4, 4, "option", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminrhCatalogueComponent_div_151_div_7_Template, 2, 0, "div", 37)(8, AdminrhCatalogueComponent_div_151_div_8_Template, 2, 0, "div", 155);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.formationsDisponibles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.formationForm.get("formation_id")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.formationForm.get("formation_id")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formationsDisponibles.length === 0 && !ctx_r1.loadingFormations);
  }
}
function AdminrhCatalogueComponent_div_152_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 161);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const selectedFormation_r11 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(selectedFormation_r11.niveau);
  }
}
function AdminrhCatalogueComponent_div_152_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 130);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const selectedFormation_r11 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(selectedFormation_r11.type);
  }
}
function AdminrhCatalogueComponent_div_152_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 132);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const selectedFormation_r11 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", selectedFormation_r11.duree_totale, "h");
  }
}
function AdminrhCatalogueComponent_div_152_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 131);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const selectedFormation_r11 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", selectedFormation_r11.prix, "\u20AC");
  }
}
function AdminrhCatalogueComponent_div_152_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "div", 7)(2, "h6", 157);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 158);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 159);
    \u0275\u0275template(7, AdminrhCatalogueComponent_div_152_span_7_Template, 2, 1, "span", 160)(8, AdminrhCatalogueComponent_div_152_span_8_Template, 2, 1, "span", 113)(9, AdminrhCatalogueComponent_div_152_span_9_Template, 2, 1, "span", 119)(10, AdminrhCatalogueComponent_div_152_span_10_Template, 2, 1, "span", 118);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const selectedFormation_r11 = ctx.ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(selectedFormation_r11.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(selectedFormation_r11.short_description || selectedFormation_r11.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", selectedFormation_r11.niveau);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", selectedFormation_r11.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", selectedFormation_r11.duree_totale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", selectedFormation_r11.prix);
  }
}
function AdminrhCatalogueComponent_div_175_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 162)(1, "h6");
    \u0275\u0275element(2, "i", 163);
    \u0275\u0275text(3, "Informations du catalogue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 55)(5, "div", 45)(6, "small")(7, "strong");
    \u0275\u0275text(8, "Formations actuelles:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "br");
    \u0275\u0275elementStart(11, "small")(12, "strong");
    \u0275\u0275text(13, "Dur\xE9e totale:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 45)(16, "small")(17, "strong");
    \u0275\u0275text(18, "Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "br");
    \u0275\u0275elementStart(21, "small")(22, "strong");
    \u0275\u0275text(23, "Niveau:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCatalogue.formations.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCatalogue.duree_totale, "h");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTypeLabel(ctx_r1.selectedCatalogue.type));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCatalogue.metadata.niveau);
  }
}
function AdminrhCatalogueComponent_span_180_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 152);
  }
}
function AdminrhCatalogueComponent_div_189_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 131);
    \u0275\u0275text(1, "Publi\xE9");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_div_189_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 130);
    \u0275\u0275text(1, "Certifiant");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_div_189_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 172)(1, "span");
    \u0275\u0275text(2, "Prix moyen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 1, ctx_r1.getAveragePrice(ctx_r1.selectedCatalogue.formations), "1.0-0"), "\u20AC");
  }
}
function AdminrhCatalogueComponent_div_189_div_50_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 184);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const prerequis_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", prerequis_r13, " ");
  }
}
function AdminrhCatalogueComponent_div_189_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174)(1, "strong");
    \u0275\u0275text(2, "Pr\xE9requis:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 182);
    \u0275\u0275template(4, AdminrhCatalogueComponent_div_189_div_50_span_4_Template, 2, 1, "span", 183);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.selectedCatalogue.metadata.prerequis);
  }
}
function AdminrhCatalogueComponent_div_189_div_62_tr_21_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 133);
    \u0275\u0275text(1, "Featured");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_div_189_div_62_tr_21_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 161);
    \u0275\u0275text(1, "Obligatoire");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_div_189_div_62_tr_21_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 131);
    \u0275\u0275text(1, "Publi\xE9");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_div_189_div_62_tr_21_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 130);
    \u0275\u0275text(1, "Brouillon");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCatalogueComponent_div_189_div_62_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 130);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 188);
    \u0275\u0275template(9, AdminrhCatalogueComponent_div_189_div_62_tr_21_span_9_Template, 2, 0, "span", 120)(10, AdminrhCatalogueComponent_div_189_div_62_tr_21_span_10_Template, 2, 0, "span", 160);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "small", 54);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 161);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275template(23, AdminrhCatalogueComponent_div_189_div_62_tr_21_span_23_Template, 2, 0, "span", 118)(24, AdminrhCatalogueComponent_div_189_div_62_tr_21_span_24_Template, 2, 0, "span", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td")(26, "button", 189);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_div_189_div_62_tr_21_Template_button_click_26_listener() {
      const formation_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.retirerFormation(ctx_r1.selectedCatalogue, formation_r15));
    });
    \u0275\u0275element(27, "i", 190);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const formation_r15 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((formation_r15.pivot == null ? null : formation_r15.pivot.ordre) || 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(formation_r15.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", formation_r15.pivot == null ? null : formation_r15.pivot.est_featured);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r15.pivot == null ? null : formation_r15.pivot.est_obligatoire);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(formation_r15.short_description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(formation_r15.niveau);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", formation_r15.duree_totale, "h");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", formation_r15.prix, "\u20AC");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(formation_r15.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", formation_r15.est_publie);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !formation_r15.est_publie);
  }
}
function AdminrhCatalogueComponent_div_189_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 185)(1, "table", 186)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Ordre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Prix");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, AdminrhCatalogueComponent_div_189_div_62_tr_21_Template, 28, 11, "tr", 187);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r1.selectedCatalogue.formations)("ngForTrackBy", ctx_r1.trackByFormationId);
  }
}
function AdminrhCatalogueComponent_div_189_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 191);
    \u0275\u0275element(1, "i", 192);
    \u0275\u0275elementStart(2, "p", 193);
    \u0275\u0275text(3, "Aucune formation dans ce catalogue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 194);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_div_189_div_63_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openFormationModal(ctx_r1.selectedCatalogue));
    });
    \u0275\u0275element(5, "i", 179);
    \u0275\u0275text(6, "Ajouter la premi\xE8re formation ");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhCatalogueComponent_div_189_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 55)(2, "div", 164)(3, "div", 165)(4, "div", 166);
    \u0275\u0275element(5, "i", 167);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 168)(7, "h4", 111);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 111);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 169)(12, "span", 132);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 161);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, AdminrhCatalogueComponent_div_189_span_16_Template, 2, 0, "span", 118)(17, AdminrhCatalogueComponent_div_189_span_17_Template, 2, 0, "span", 113);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 170)(19, "h6");
    \u0275\u0275text(20, "Statistiques");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 171)(22, "div", 172)(23, "span");
    \u0275\u0275text(24, "Nombre de formations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "strong");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 172)(28, "span");
    \u0275\u0275text(29, "Dur\xE9e totale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "strong");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 172)(33, "span");
    \u0275\u0275text(34, "Formations mises en avant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "strong");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, AdminrhCatalogueComponent_div_189_div_37_Template, 6, 4, "div", 173);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 170)(39, "h6");
    \u0275\u0275text(40, "Informations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 171)(42, "div", 174)(43, "strong");
    \u0275\u0275text(44, "Niveau:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 174)(47, "strong");
    \u0275\u0275text(48, "Dur\xE9e moyenne:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(50, AdminrhCatalogueComponent_div_189_div_50_Template, 5, 1, "div", 175);
    \u0275\u0275elementStart(51, "div", 174)(52, "strong");
    \u0275\u0275text(53, "Cr\xE9\xE9 le:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 176)(56, "div", 177)(57, "h6");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 178);
    \u0275\u0275listener("click", function AdminrhCatalogueComponent_div_189_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openFormationModal(ctx_r1.selectedCatalogue));
    });
    \u0275\u0275element(60, "i", 179);
    \u0275\u0275text(61, "Ajouter formation ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(62, AdminrhCatalogueComponent_div_189_div_62_Template, 22, 2, "div", 180)(63, AdminrhCatalogueComponent_div_189_div_63_Template, 7, 0, "div", 181);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-color", ctx_r1.selectedCatalogue.couleur + "20");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.selectedCatalogue.couleur);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getIconClass(ctx_r1.selectedCatalogue.icone));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedCatalogue.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedCatalogue.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getTypeLabel(ctx_r1.selectedCatalogue.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedCatalogue.metadata.niveau);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCatalogue.est_publie);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCatalogue.metadata.certificat_disponible);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.selectedCatalogue.nombre_formations);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedCatalogue.duree_totale, "h");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getFeaturedFormationsCount(ctx_r1.selectedCatalogue.formations));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCatalogue.formations.length > 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCatalogue.metadata.niveau, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCatalogue.metadata.duree_moyenne, "h ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCatalogue.metadata.prerequis.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(ctx_r1.selectedCatalogue.created_at), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Formations incluses (", ctx_r1.selectedCatalogue.formations.length, ")");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.selectedCatalogue.formations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCatalogue.formations.length === 0);
  }
}
function AdminrhCatalogueComponent_p_198_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 54);
    \u0275\u0275text(1, ' \xCAtes-vous s\xFBr de vouloir supprimer le catalogue "');
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, '" ? ');
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedCatalogue.titre);
  }
}
var AdminrhCatalogueComponent = class _AdminrhCatalogueComponent {
  catalogueService;
  formationService;
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
  constructor(catalogueService, formationService, formBuilder) {
    this.catalogueService = catalogueService;
    this.formationService = formationService;
    this.formBuilder = formBuilder;
    this.catalogueForm = this.formBuilder.group({
      titre: ["", [Validators.required, Validators.minLength(3)]],
      description: ["", [Validators.required, Validators.minLength(10)]],
      short_description: ["", Validators.required],
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
        this.error = "Impossible de charger les catalogues.";
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
    return {
      titre: formValue.titre.trim(),
      description: formValue.description.trim(),
      short_description: formValue.short_description.trim(),
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
      type: formValue.type
    };
  }
  // ==================== GESTION DES FORMATIONS DANS LE CATALOGUE ====================
  openFormationModal(catalogue) {
    this.selectedCatalogue = catalogue;
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
  trackByFormationId(index, formation) {
    return formation.id;
  }
  trackByCatalogueId(index, catalogue) {
    return catalogue.id;
  }
  static \u0275fac = function AdminrhCatalogueComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhCatalogueComponent)(\u0275\u0275directiveInject(CatalogueService), \u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhCatalogueComponent, selectors: [["app-adminrh-catalogue"]], decls: 207, vars: 29, consts: [[1, "catalogue"], [1, "page-title", "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "btn", "btn-primary", "d-flex", "align-items-center", 3, "click"], [1, "isax", "isax-add-circle", "me-2"], ["class", "alert alert-success alert-dismissible fade show", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", 4, "ngIf"], [1, "card", "mb-4"], [1, "card-body"], [1, "row", "g-3"], [1, "col-md-4"], [1, "form-group"], [1, "form-label"], ["type", "text", "placeholder", "Titre, description...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-3"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "active"], ["value", "inactive"], [1, "col-md-2", "d-flex", "align-items-end"], [1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "isax", "isax-refresh", "me-1"], [1, "catalogues-list"], ["class", "card mb-3", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "text-center py-4", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["id", "catalogueModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "row", "mb-3"], [1, "col-md-8"], ["type", "text", "formControlName", "titre", "placeholder", "Ex: D\xE9veloppement Web Avanc\xE9", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "number", "formControlName", "ordre", "min", "1", 1, "form-control"], [1, "mb-3"], ["type", "text", "formControlName", "short_description", "placeholder", "R\xE9sum\xE9 en une phrase", 1, "form-control"], ["rows", "3", "formControlName", "description", "placeholder", "Description d\xE9taill\xE9e du catalogue", 1, "form-control"], ["type", "text", "formControlName", "icone", "placeholder", "Ex: folder, book, code", 1, "form-control"], ["type", "color", "formControlName", "couleur", 1, "form-control", "form-control-color"], ["formControlName", "type", 1, "form-select"], [1, "col-md-6"], ["formControlName", "niveau", 1, "form-select"], ["value", "D\xE9butant"], ["value", "Interm\xE9diaire"], ["value", "Avanc\xE9"], ["value", "Expert"], ["value", "Tous niveaux"], ["type", "number", "formControlName", "duree_moyenne", "min", "1", 1, "form-control"], ["type", "text", "formControlName", "prerequis", "placeholder", "Ex: HTML, CSS, JavaScript (s\xE9par\xE9s par des virgules)", 1, "form-control"], [1, "text-muted"], [1, "row"], [1, "form-check", "mb-3"], ["type", "checkbox", "formControlName", "est_publie", "id", "est_publie", 1, "form-check-input"], ["for", "est_publie", 1, "form-check-label"], ["type", "checkbox", "formControlName", "est_public", "id", "est_public", 1, "form-check-input"], ["for", "est_public", 1, "form-check-label"], ["type", "checkbox", "formControlName", "certificat_disponible", "id", "certificat", 1, "form-check-input"], ["for", "certificat", 1, "form-check-label"], ["type", "checkbox", "formControlName", "inscription_requise", "id", "inscription", 1, "form-check-input"], ["for", "inscription", 1, "form-check-label"], ["class", "mt-4", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["id", "formationModal", "tabindex", "-1", 1, "modal", "fade"], ["class", "text-muted", 4, "ngIf"], ["class", "text-center py-3", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], ["class", "card mb-3", 4, "ngIf"], [1, "form-check"], ["type", "checkbox", "formControlName", "est_featured", "id", "est_featured", 1, "form-check-input"], ["for", "est_featured", 1, "form-check-label"], ["type", "checkbox", "formControlName", "est_obligatoire", "id", "est_obligatoire", 1, "form-check-input"], ["for", "est_obligatoire", 1, "form-check-label"], ["rows", "3", "formControlName", "conditions_speciales", "placeholder", "Conditions particuli\xE8res pour cette formation dans ce catalogue (optionnel)", 1, "form-control"], ["class", "alert alert-info", 4, "ngIf"], ["id", "viewModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl"], ["class", "modal-body", 4, "ngIf"], ["id", "deleteModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-body", "text-center", "py-4"], [1, "isax", "isax-trash", "text-danger", 2, "font-size", "3rem"], [1, "text-warning", "small"], [1, "isax", "isax-warning-2", "me-1"], [1, "d-flex", "justify-content-center", "gap-2", "mt-4"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "isax", "isax-tick-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "isax", "isax-close-circle", "me-2"], [3, "value"], [1, "card", "mb-3"], [1, "row", "align-items-center"], [1, "col-md-1"], [1, "catalogue-icon", "d-flex", "align-items-center", "justify-content-center", "rounded", 2, "width", "60px", "height", "60px"], [2, "font-size", "1.8rem", "color", "white"], [1, "col-md-5"], [1, "mb-1"], [1, "text-muted", "mb-1", "small"], [1, "d-flex", "align-items-center", "gap-3", "small", "text-muted"], [1, "isax", "isax-book", "me-1"], [1, "isax", "isax-clock", "me-1"], [1, "isax", "isax-tag", "me-1"], [1, "mb-2"], [1, "badge", "bg-info", "me-1"], ["class", "badge bg-secondary", 4, "ngIf"], [1, "small", "text-muted"], [4, "ngIf"], [1, "col-md-2"], [1, "d-flex", "flex-wrap", "gap-1", "mb-2"], ["class", "badge bg-success", 4, "ngIf"], ["class", "badge bg-primary", 4, "ngIf"], ["class", "badge bg-warning", 4, "ngIf"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-sm", "btn-outline-secondary", "dropdown-toggle"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"], [1, "isax", "isax-eye", "me-2"], [1, "dropdown-divider"], [1, "isax", "isax-edit-2", "me-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "text-danger", 3, "click"], [1, "isax", "isax-trash", "me-2"], [1, "badge", "bg-secondary"], [1, "badge", "bg-success"], [1, "badge", "bg-primary"], [1, "badge", "bg-warning"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "mt-2", "text-muted"], [1, "text-center", "py-5"], [1, "isax", "isax-folder-2", "text-muted", 2, "font-size", "4rem"], [1, "text-muted", "mt-3"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-secondary", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "isax", "isax-refresh", "me-2"], [1, "invalid-feedback"], [1, "mt-4"], [1, "d-flex", "align-items-center", "p-3", "border", "rounded"], [1, "catalogue-icon", "d-flex", "align-items-center", "justify-content-center", "rounded", "me-3", 2, "width", "50px", "height", "50px"], [2, "font-size", "1.5rem", "color", "white"], [1, "mb-0", "text-muted", "small"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "text-center", "py-3"], ["formControlName", "formation_id", 1, "form-select"], ["class", "text-muted small mt-1", 4, "ngIf"], [1, "text-muted", "small", "mt-1"], [1, "card-title"], [1, "card-text"], [1, "d-flex", "gap-2"], ["class", "badge bg-info", 4, "ngIf"], [1, "badge", "bg-info"], [1, "alert", "alert-info"], [1, "isax", "isax-info-circle", "me-2"], [1, "col-12", "mb-4"], [1, "d-flex", "align-items-center", "p-3", "rounded"], [1, "catalogue-icon", "d-flex", "align-items-center", "justify-content-center", "rounded", "me-3", 2, "width", "80px", "height", "80px"], [2, "font-size", "2.5rem", "color", "white"], [1, "flex-grow-1"], [1, "d-flex", "align-items-center", "gap-3"], [1, "col-md-6", "mb-4"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "d-flex", "justify-content-between"], ["class", "list-group-item d-flex justify-content-between", 4, "ngIf"], [1, "list-group-item"], ["class", "list-group-item", 4, "ngIf"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], ["data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "isax", "isax-add-circle", "me-1"], ["class", "table-responsive", 4, "ngIf"], ["class", "text-center text-muted py-4", 4, "ngIf"], [1, "mt-1"], ["class", "badge bg-light text-dark me-1", 4, "ngFor", "ngForOf"], [1, "badge", "bg-light", "text-dark", "me-1"], [1, "table-responsive"], [1, "table", "table-sm"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "d-flex", "gap-1", "mt-1"], ["title", "Retirer du catalogue", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "isax", "isax-trash"], [1, "text-center", "text-muted", "py-4"], [1, "isax", "isax-book", 2, "font-size", "2rem", "opacity", "0.5"], [1, "mt-2"], ["data-bs-dismiss", "modal", 1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function AdminrhCatalogueComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
      \u0275\u0275text(3, "Gestion des Catalogues de Formation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function AdminrhCatalogueComponent_Template_button_click_4_listener() {
        return ctx.openCatalogueModal();
      });
      \u0275\u0275element(5, "i", 3);
      \u0275\u0275text(6, "Nouveau Catalogue ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, AdminrhCatalogueComponent_div_7_Template, 4, 1, "div", 4)(8, AdminrhCatalogueComponent_div_8_Template, 4, 1, "div", 5);
      \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "label", 11);
      \u0275\u0275text(15, "Rechercher");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCatalogueComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 10)(19, "label", 11);
      \u0275\u0275text(20, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCatalogueComponent_Template_select_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedType, $event) || (ctx.selectedType = $event);
        return $event;
      });
      \u0275\u0275elementStart(22, "option", 15);
      \u0275\u0275text(23, "Tous les types");
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, AdminrhCatalogueComponent_option_24_Template, 2, 2, "option", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 13)(26, "div", 10)(27, "label", 11);
      \u0275\u0275text(28, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCatalogueComponent_Template_select_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
        return $event;
      });
      \u0275\u0275elementStart(30, "option", 15);
      \u0275\u0275text(31, "Tous les statuts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 17);
      \u0275\u0275text(33, "Publi\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "option", 18);
      \u0275\u0275text(35, "Non publi\xE9");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 19)(37, "button", 20);
      \u0275\u0275listener("click", function AdminrhCatalogueComponent_Template_button_click_37_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275element(38, "i", 21);
      \u0275\u0275text(39, "Effacer ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(40, "div", 22);
      \u0275\u0275template(41, AdminrhCatalogueComponent_div_41_Template, 61, 18, "div", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275template(42, AdminrhCatalogueComponent_div_42_Template, 6, 0, "div", 24)(43, AdminrhCatalogueComponent_div_43_Template, 8, 4, "div", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 26)(45, "div", 27)(46, "div", 28)(47, "div", 29)(48, "h5", 30);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "button", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "form", 32);
      \u0275\u0275listener("ngSubmit", function AdminrhCatalogueComponent_Template_form_ngSubmit_51_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(52, "div", 33)(53, "div", 34)(54, "div", 35)(55, "label", 11);
      \u0275\u0275text(56, "Titre *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(57, "input", 36);
      \u0275\u0275template(58, AdminrhCatalogueComponent_div_58_Template, 2, 0, "div", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 9)(60, "label", 11);
      \u0275\u0275text(61, "Ordre d'affichage *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "input", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 39)(64, "label", 11);
      \u0275\u0275text(65, "Description courte *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "input", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 39)(68, "label", 11);
      \u0275\u0275text(69, "Description compl\xE8te *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(70, "textarea", 41);
      \u0275\u0275template(71, AdminrhCatalogueComponent_div_71_Template, 2, 0, "div", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 34)(73, "div", 9)(74, "label", 11);
      \u0275\u0275text(75, "Ic\xF4ne *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "input", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 9)(78, "label", 11);
      \u0275\u0275text(79, "Couleur *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(80, "input", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 9)(82, "label", 11);
      \u0275\u0275text(83, "Type *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "select", 44);
      \u0275\u0275template(85, AdminrhCatalogueComponent_option_85_Template, 2, 2, "option", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "h6", 39);
      \u0275\u0275text(87, "M\xE9tadonn\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 34)(89, "div", 45)(90, "label", 11);
      \u0275\u0275text(91, "Niveau *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "select", 46)(93, "option", 47);
      \u0275\u0275text(94, "D\xE9butant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "option", 48);
      \u0275\u0275text(96, "Interm\xE9diaire");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "option", 49);
      \u0275\u0275text(98, "Avanc\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "option", 50);
      \u0275\u0275text(100, "Expert");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "option", 51);
      \u0275\u0275text(102, "Tous niveaux");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(103, "div", 45)(104, "label", 11);
      \u0275\u0275text(105, "Dur\xE9e moyenne (heures) *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(106, "input", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div", 39)(108, "label", 11);
      \u0275\u0275text(109, "Pr\xE9requis");
      \u0275\u0275elementEnd();
      \u0275\u0275element(110, "input", 53);
      \u0275\u0275elementStart(111, "small", 54);
      \u0275\u0275text(112, "S\xE9parez les pr\xE9requis par des virgules");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "div", 55)(114, "div", 9)(115, "div", 56);
      \u0275\u0275element(116, "input", 57);
      \u0275\u0275elementStart(117, "label", 58);
      \u0275\u0275text(118, "Publi\xE9");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "div", 9)(120, "div", 56);
      \u0275\u0275element(121, "input", 59);
      \u0275\u0275elementStart(122, "label", 60);
      \u0275\u0275text(123, "Public");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "div", 9)(125, "div", 56);
      \u0275\u0275element(126, "input", 61);
      \u0275\u0275elementStart(127, "label", 62);
      \u0275\u0275text(128, "Certificat disponible");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(129, "div", 56);
      \u0275\u0275element(130, "input", 63);
      \u0275\u0275elementStart(131, "label", 64);
      \u0275\u0275text(132, "Inscription requise");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(133, AdminrhCatalogueComponent_div_133_Template, 11, 6, "div", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "div", 66)(135, "button", 67);
      \u0275\u0275text(136, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "button", 68);
      \u0275\u0275template(138, AdminrhCatalogueComponent_span_138_Template, 1, 0, "span", 69);
      \u0275\u0275text(139);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(140, "div", 70)(141, "div", 27)(142, "div", 28)(143, "div", 29)(144, "h5", 30);
      \u0275\u0275text(145, " Ajouter une Formation au Catalogue ");
      \u0275\u0275template(146, AdminrhCatalogueComponent_span_146_Template, 2, 1, "span", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275element(147, "button", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "form", 32);
      \u0275\u0275listener("ngSubmit", function AdminrhCatalogueComponent_Template_form_ngSubmit_148_listener() {
        return ctx.ajouterFormation();
      });
      \u0275\u0275elementStart(149, "div", 33);
      \u0275\u0275template(150, AdminrhCatalogueComponent_div_150_Template, 3, 0, "div", 72)(151, AdminrhCatalogueComponent_div_151_Template, 9, 3, "div", 73)(152, AdminrhCatalogueComponent_div_152_Template, 11, 6, "div", 74);
      \u0275\u0275elementStart(153, "div", 34)(154, "div", 45)(155, "label", 11);
      \u0275\u0275text(156, "Ordre d'affichage *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(157, "input", 38);
      \u0275\u0275elementStart(158, "small", 54);
      \u0275\u0275text(159, "Position dans le catalogue");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "div", 45)(161, "label", 11);
      \u0275\u0275text(162, "Options");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "div", 75);
      \u0275\u0275element(164, "input", 76);
      \u0275\u0275elementStart(165, "label", 77);
      \u0275\u0275text(166, " Formation mise en avant ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(167, "div", 75);
      \u0275\u0275element(168, "input", 78);
      \u0275\u0275elementStart(169, "label", 79);
      \u0275\u0275text(170, " Formation obligatoire ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(171, "div", 39)(172, "label", 11);
      \u0275\u0275text(173, "Conditions sp\xE9ciales");
      \u0275\u0275elementEnd();
      \u0275\u0275element(174, "textarea", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275template(175, AdminrhCatalogueComponent_div_175_Template, 25, 4, "div", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "div", 66)(177, "button", 67);
      \u0275\u0275text(178, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "button", 68);
      \u0275\u0275template(180, AdminrhCatalogueComponent_span_180_Template, 1, 0, "span", 69);
      \u0275\u0275text(181, " Ajouter au catalogue ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(182, "div", 82)(183, "div", 83)(184, "div", 28)(185, "div", 29)(186, "h5", 30);
      \u0275\u0275text(187, "D\xE9tails du Catalogue");
      \u0275\u0275elementEnd();
      \u0275\u0275element(188, "button", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(189, AdminrhCatalogueComponent_div_189_Template, 64, 23, "div", 84);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(190, "div", 85)(191, "div", 86)(192, "div", 28)(193, "div", 87)(194, "div", 39);
      \u0275\u0275element(195, "i", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "h5");
      \u0275\u0275text(197, "Supprimer le catalogue");
      \u0275\u0275elementEnd();
      \u0275\u0275template(198, AdminrhCatalogueComponent_p_198_Template, 5, 1, "p", 71);
      \u0275\u0275elementStart(199, "p", 89);
      \u0275\u0275element(200, "i", 90);
      \u0275\u0275text(201, " Cette action est irr\xE9versible. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "div", 91)(203, "button", 67);
      \u0275\u0275text(204, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "button", 92);
      \u0275\u0275listener("click", function AdminrhCatalogueComponent_Template_button_click_205_listener() {
        return ctx.deleteCatalogue();
      });
      \u0275\u0275text(206, " Supprimer ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_12_0;
      let tmp_13_0;
      let tmp_15_0;
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedType);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.types);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.filteredCatalogues)("ngForTrackBy", ctx.trackByCatalogueId);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredCatalogues.length === 0);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.editMode ? "Modifier le Catalogue" : "Nouveau Catalogue", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.catalogueForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ((tmp_12_0 = ctx.catalogueForm.get("titre")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx.catalogueForm.get("titre")) == null ? null : tmp_12_0.touched));
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ((tmp_13_0 = ctx.catalogueForm.get("description")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx.catalogueForm.get("description")) == null ? null : tmp_13_0.touched));
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.types);
      \u0275\u0275advance(48);
      \u0275\u0275property("ngIf", ((tmp_15_0 = ctx.catalogueForm.get("couleur")) == null ? null : tmp_15_0.value) && ((tmp_15_0 = ctx.catalogueForm.get("icone")) == null ? null : tmp_15_0.value));
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.catalogueForm.invalid || ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.editMode ? "Modifier" : "Cr\xE9er", " ");
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.selectedCatalogue);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.formationForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loadingFormations);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingFormations);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getSelectedFormationInfo());
      \u0275\u0275advance(23);
      \u0275\u0275property("ngIf", ctx.selectedCatalogue);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.formationForm.invalid || ctx.saving || ctx.formationsDisponibles.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.selectedCatalogue);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.selectedCatalogue);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, FormsModule, NgModel, DecimalPipe], styles: ["\n\n.catalogue[_ngcontent-%COMP%]   .catalogues-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n  border: 1px solid #e9ecef;\n}\n.catalogue[_ngcontent-%COMP%]   .catalogues-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border-color: #007bff;\n}\n.catalogue[_ngcontent-%COMP%]   .catalogues-list[_ngcontent-%COMP%]   .catalogue-icon[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.catalogue[_ngcontent-%COMP%]   .catalogues-list[_ngcontent-%COMP%]   .catalogue-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.catalogue[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n}\n.catalogue[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 0.375rem 0.75rem;\n}\n.catalogue[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  border-color: #adb5bd;\n}\n.catalogue[_ngcontent-%COMP%]   .form-control-color[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 38px;\n}\n.catalogue[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n.catalogue[_ngcontent-%COMP%]   .spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.modal-xl[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n.list-group-item[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: none;\n}\n.list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top: none;\n}\n.list-group-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: none;\n  font-weight: 600;\n  color: #495057;\n}\n.table-responsive[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n/*# sourceMappingURL=adminrh-catalogue.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhCatalogueComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-catalogue", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule], template: `<div class="catalogue">\r
  <!-- En-t\xEAte avec titre et bouton d'ajout -->\r
  <div class="page-title d-flex align-items-center justify-content-between mb-4">\r
    <h5>Gestion des Catalogues de Formation</h5>\r
    <button class="btn btn-primary d-flex align-items-center" (click)="openCatalogueModal()">\r
      <i class="isax isax-add-circle me-2"></i>Nouveau Catalogue\r
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
                   placeholder="Titre, description...">\r
          </div>\r
        </div>\r
        <div class="col-md-3">\r
          <div class="form-group">\r
            <label class="form-label">Type</label>\r
            <select class="form-select" [(ngModel)]="selectedType">\r
              <option value="">Tous les types</option>\r
              <option *ngFor="let type of types" [value]="type.value">{{ type.label }}</option>\r
            </select>\r
          </div>\r
        </div>\r
        <div class="col-md-3">\r
          <div class="form-group">\r
            <label class="form-label">Statut</label>\r
            <select class="form-select" [(ngModel)]="selectedStatus">\r
              <option value="">Tous les statuts</option>\r
              <option value="active">Publi\xE9</option>\r
              <option value="inactive">Non publi\xE9</option>\r
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
  <!-- Liste des catalogues -->\r
  <div class="catalogues-list">\r
    <div class="card mb-3" *ngFor="let catalogue of filteredCatalogues; trackBy: trackByCatalogueId">\r
      <div class="card-body">\r
        <div class="row align-items-center">\r
          <!-- Ic\xF4ne et couleur -->\r
          <div class="col-md-1">\r
            <div class="catalogue-icon d-flex align-items-center justify-content-center rounded"\r
                 [style.background-color]="catalogue.couleur"\r
                 style="width: 60px; height: 60px;">\r
              <i [class]="getIconClass(catalogue.icone)" \r
                 style="font-size: 1.8rem; color: white;"></i>\r
            </div>\r
          </div>\r
\r
          <!-- Informations principales -->\r
          <div class="col-md-5">\r
            <h6 class="mb-1">{{ catalogue.titre }}</h6>\r
            <p class="text-muted mb-1 small">{{ catalogue.description }}</p>\r
            <div class="d-flex align-items-center gap-3 small text-muted">\r
              <span><i class="isax isax-book me-1"></i>{{ catalogue.nombre_formations }} formations</span>\r
              <span><i class="isax isax-clock me-1"></i>{{ catalogue.duree_totale }}h total</span>\r
              <span><i class="isax isax-tag me-1"></i>{{ getTypeLabel(catalogue.type) }}</span>\r
            </div>\r
          </div>\r
\r
          <!-- M\xE9tadonn\xE9es -->\r
          <div class="col-md-3">\r
            <div class="mb-2">\r
              <span class="badge bg-info me-1">{{ catalogue.metadata.niveau }}</span>\r
              <span class="badge bg-secondary" *ngIf="catalogue.metadata.certificat_disponible">Certifiant</span>\r
            </div>\r
            <div class="small text-muted">\r
              <div>Dur\xE9e moyenne: {{ catalogue.metadata.duree_moyenne }}h</div>\r
              <div *ngIf="catalogue.formations.length > 0">\r
                Prix moyen: {{ getAveragePrice(catalogue.formations) | number:'1.0-0' }}\u20AC\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Statuts et badges -->\r
          <div class="col-md-2">\r
            <div class="d-flex flex-wrap gap-1 mb-2">\r
              <span class="badge bg-success" *ngIf="catalogue.est_publie">Publi\xE9</span>\r
              <span class="badge bg-secondary" *ngIf="!catalogue.est_publie">Brouillon</span>\r
              <span class="badge bg-primary" *ngIf="catalogue.est_public">Public</span>\r
              <span class="badge bg-warning" *ngIf="catalogue.inscription_requise">Inscription requise</span>\r
            </div>\r
            <small class="text-muted">Ordre: {{ catalogue.ordre }}</small>\r
          </div>\r
\r
          <!-- Actions -->\r
          <div class="col-md-1">\r
            <div class="dropdown">\r
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle" \r
                      type="button" data-bs-toggle="dropdown">\r
                Actions\r
              </button>\r
              <ul class="dropdown-menu dropdown-menu-end">\r
                <li>\r
                  <a class="dropdown-item" href="javascript:void(0);" \r
                     (click)="viewCatalogue(catalogue)">\r
                    <i class="isax isax-eye me-2"></i>Voir d\xE9tails\r
                  </a>\r
                </li>\r
                <li>\r
                  <a class="dropdown-item" href="javascript:void(0);" \r
                     (click)="openFormationModal(catalogue)">\r
                    <i class="isax isax-add-circle me-2"></i>Ajouter formation\r
                  </a>\r
                </li>\r
                <li><hr class="dropdown-divider"></li>\r
                <li>\r
                  <a class="dropdown-item" href="javascript:void(0);" \r
                     (click)="editCatalogue(catalogue)">\r
                    <i class="isax isax-edit-2 me-2"></i>Modifier\r
                  </a>\r
                </li>\r
                <li>\r
                  <a class="dropdown-item text-danger" href="javascript:void(0);" \r
                     (click)="confirmDelete(catalogue)">\r
                    <i class="isax isax-trash me-2"></i>Supprimer\r
                  </a>\r
                </li>\r
              </ul>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \xC9tat de chargement -->\r
  <div class="text-center py-4" *ngIf="loading">\r
    <div class="spinner-border" role="status">\r
      <span class="visually-hidden">Chargement...</span>\r
    </div>\r
    <p class="mt-2 text-muted">Chargement des catalogues...</p>\r
  </div>\r
\r
  <!-- \xC9tat vide -->\r
  <div class="text-center py-5" *ngIf="!loading && filteredCatalogues.length === 0">\r
    <i class="isax isax-folder-2 text-muted" style="font-size: 4rem;"></i>\r
    <h6 class="text-muted mt-3">{{ catalogues.length === 0 ? 'Aucun catalogue trouv\xE9' : 'Aucun r\xE9sultat pour ces filtres' }}</h6>\r
    <p class="text-muted">\r
      {{ catalogues.length === 0 ? 'Commencez par cr\xE9er votre premier catalogue' : 'Essayez de modifier vos crit\xE8res de recherche' }}\r
    </p>\r
    <button class="btn btn-primary" (click)="openCatalogueModal()" *ngIf="catalogues.length === 0">\r
      <i class="isax isax-add-circle me-2"></i>Cr\xE9er un catalogue\r
    </button>\r
    <button class="btn btn-outline-secondary" (click)="clearFilters()" *ngIf="catalogues.length > 0">\r
      <i class="isax isax-refresh me-2"></i>Effacer les filtres\r
    </button>\r
  </div>\r
</div>\r
\r
<!-- Modal Ajout/Modification Catalogue -->\r
<div class="modal fade" id="catalogueModal" tabindex="-1">\r
  <div class="modal-dialog modal-lg">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">\r
          {{ editMode ? 'Modifier le Catalogue' : 'Nouveau Catalogue' }}\r
        </h5>\r
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>\r
      </div>\r
      \r
      <form [formGroup]="catalogueForm" (ngSubmit)="onSubmit()">\r
        <div class="modal-body">\r
          <!-- Informations de base -->\r
          <div class="row mb-3">\r
            <div class="col-md-8">\r
              <label class="form-label">Titre *</label>\r
              <input type="text" class="form-control" formControlName="titre" \r
                     placeholder="Ex: D\xE9veloppement Web Avanc\xE9">\r
              <div class="invalid-feedback" \r
                   *ngIf="catalogueForm.get('titre')?.invalid && catalogueForm.get('titre')?.touched">\r
                Le titre est requis (min. 3 caract\xE8res)\r
              </div>\r
            </div>\r
            <div class="col-md-4">\r
              <label class="form-label">Ordre d'affichage *</label>\r
              <input type="number" class="form-control" formControlName="ordre" min="1">\r
            </div>\r
          </div>\r
\r
          <div class="mb-3">\r
            <label class="form-label">Description courte *</label>\r
            <input type="text" class="form-control" formControlName="short_description" \r
                   placeholder="R\xE9sum\xE9 en une phrase">\r
          </div>\r
\r
          <div class="mb-3">\r
            <label class="form-label">Description compl\xE8te *</label>\r
            <textarea class="form-control" rows="3" formControlName="description" \r
                      placeholder="Description d\xE9taill\xE9e du catalogue"></textarea>\r
            <div class="invalid-feedback" \r
                 *ngIf="catalogueForm.get('description')?.invalid && catalogueForm.get('description')?.touched">\r
              La description est requise (min. 10 caract\xE8res)\r
            </div>\r
          </div>\r
\r
          <!-- Apparence -->\r
          <div class="row mb-3">\r
            <div class="col-md-4">\r
              <label class="form-label">Ic\xF4ne *</label>\r
              <input type="text" class="form-control" formControlName="icone" \r
                     placeholder="Ex: folder, book, code">\r
            </div>\r
            <div class="col-md-4">\r
              <label class="form-label">Couleur *</label>\r
              <input type="color" class="form-control form-control-color" formControlName="couleur">\r
            </div>\r
            <div class="col-md-4">\r
              <label class="form-label">Type *</label>\r
              <select class="form-select" formControlName="type">\r
                <option *ngFor="let type of types" [value]="type.value">{{ type.label }}</option>\r
              </select>\r
            </div>\r
          </div>\r
\r
          <!-- M\xE9tadonn\xE9es -->\r
          <h6 class="mb-3">M\xE9tadonn\xE9es</h6>\r
          <div class="row mb-3">\r
            <div class="col-md-6">\r
              <label class="form-label">Niveau *</label>\r
              <select class="form-select" formControlName="niveau">\r
                <option value="D\xE9butant">D\xE9butant</option>\r
                <option value="Interm\xE9diaire">Interm\xE9diaire</option>\r
                <option value="Avanc\xE9">Avanc\xE9</option>\r
                <option value="Expert">Expert</option>\r
                <option value="Tous niveaux">Tous niveaux</option>\r
              </select>\r
            </div>\r
            <div class="col-md-6">\r
              <label class="form-label">Dur\xE9e moyenne (heures) *</label>\r
              <input type="number" class="form-control" formControlName="duree_moyenne" min="1">\r
            </div>\r
          </div>\r
\r
          <div class="mb-3">\r
            <label class="form-label">Pr\xE9requis</label>\r
            <input type="text" class="form-control" formControlName="prerequis" \r
                   placeholder="Ex: HTML, CSS, JavaScript (s\xE9par\xE9s par des virgules)">\r
            <small class="text-muted">S\xE9parez les pr\xE9requis par des virgules</small>\r
          </div>\r
\r
          <!-- Options -->\r
          <div class="row">\r
            <div class="col-md-4">\r
              <div class="form-check mb-3">\r
                <input class="form-check-input" type="checkbox" formControlName="est_publie" id="est_publie">\r
                <label class="form-check-label" for="est_publie">Publi\xE9</label>\r
              </div>\r
            </div>\r
            <div class="col-md-4">\r
              <div class="form-check mb-3">\r
                <input class="form-check-input" type="checkbox" formControlName="est_public" id="est_public">\r
                <label class="form-check-label" for="est_public">Public</label>\r
              </div>\r
            </div>\r
            <div class="col-md-4">\r
              <div class="form-check mb-3">\r
                <input class="form-check-input" type="checkbox" formControlName="certificat_disponible" id="certificat">\r
                <label class="form-check-label" for="certificat">Certificat disponible</label>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="form-check mb-3">\r
            <input class="form-check-input" type="checkbox" formControlName="inscription_requise" id="inscription">\r
            <label class="form-check-label" for="inscription">Inscription requise</label>\r
          </div>\r
\r
          <!-- Aper\xE7u -->\r
          <div class="mt-4" *ngIf="catalogueForm.get('couleur')?.value && catalogueForm.get('icone')?.value">\r
            <label class="form-label">Aper\xE7u</label>\r
            <div class="d-flex align-items-center p-3 border rounded">\r
              <div class="catalogue-icon d-flex align-items-center justify-content-center rounded me-3"\r
                   [style.background-color]="catalogueForm.get('couleur')?.value"\r
                   style="width: 50px; height: 50px;">\r
                <i [class]="getIconClass(catalogueForm.get('icone')?.value)" \r
                   style="font-size: 1.5rem; color: white;"></i>\r
              </div>\r
              <div>\r
                <h6 class="mb-1">{{ catalogueForm.get('titre')?.value || 'Titre du catalogue' }}</h6>\r
                <p class="mb-0 text-muted small">{{ catalogueForm.get('short_description')?.value || 'Description courte' }}</p>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="modal-footer">\r
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>\r
          <button type="submit" class="btn btn-primary" [disabled]="catalogueForm.invalid || saving">\r
            <span class="spinner-border spinner-border-sm me-2" *ngIf="saving"></span>\r
            {{ editMode ? 'Modifier' : 'Cr\xE9er' }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal Ajouter Formation au Catalogue -->\r
<div class="modal fade" id="formationModal" tabindex="-1">\r
  <div class="modal-dialog modal-lg">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">\r
          Ajouter une Formation au Catalogue\r
          <span class="text-muted" *ngIf="selectedCatalogue">: {{ selectedCatalogue.titre }}</span>\r
        </h5>\r
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>\r
      </div>\r
      \r
      <form [formGroup]="formationForm" (ngSubmit)="ajouterFormation()">\r
        <div class="modal-body">\r
          <!-- Chargement des formations -->\r
          <div class="text-center py-3" *ngIf="loadingFormations">\r
            <div class="spinner-border spinner-border-sm me-2"></div>\r
            Chargement des formations...\r
          </div>\r
\r
          <!-- S\xE9lection de la formation -->\r
          <div class="mb-3" *ngIf="!loadingFormations">\r
            <label class="form-label">Formation \xE0 ajouter *</label>\r
            <select class="form-select" formControlName="formation_id">\r
              <option value="">Choisir une formation...</option>\r
              <option *ngFor="let formation of formationsDisponibles" [value]="formation.id">\r
                {{ formation.titre }} \r
                <span *ngIf="formation.duree_totale">({{ formation.duree_totale }}h)</span>\r
                <span *ngIf="formation.prix"> - {{ formation.prix }}\u20AC</span>\r
              </option>\r
            </select>\r
            <div class="invalid-feedback" \r
                 *ngIf="formationForm.get('formation_id')?.invalid && formationForm.get('formation_id')?.touched">\r
              Veuillez s\xE9lectionner une formation\r
            </div>\r
            <div class="text-muted small mt-1" *ngIf="formationsDisponibles.length === 0 && !loadingFormations">\r
              Toutes les formations publi\xE9es sont d\xE9j\xE0 dans ce catalogue\r
            </div>\r
          </div>\r
\r
          <!-- Aper\xE7u de la formation s\xE9lectionn\xE9e -->\r
          <div class="card mb-3" *ngIf="getSelectedFormationInfo() as selectedFormation">\r
            <div class="card-body">\r
              <h6 class="card-title">{{ selectedFormation.titre }}</h6>\r
              <p class="card-text">{{ selectedFormation.short_description || selectedFormation.description }}</p>\r
              <div class="d-flex gap-2">\r
                <span class="badge bg-info" *ngIf="selectedFormation.niveau">{{ selectedFormation.niveau }}</span>\r
                <span class="badge bg-secondary" *ngIf="selectedFormation.type">{{ selectedFormation.type }}</span>\r
                <span class="badge bg-primary" *ngIf="selectedFormation.duree_totale">{{ selectedFormation.duree_totale }}h</span>\r
                <span class="badge bg-success" *ngIf="selectedFormation.prix">{{ selectedFormation.prix }}\u20AC</span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Configuration dans le catalogue -->\r
          <div class="row mb-3">\r
            <div class="col-md-6">\r
              <label class="form-label">Ordre d'affichage *</label>\r
              <input type="number" class="form-control" formControlName="ordre" min="1">\r
              <small class="text-muted">Position dans le catalogue</small>\r
            </div>\r
            <div class="col-md-6">\r
              <label class="form-label">Options</label>\r
              <div class="form-check">\r
                <input class="form-check-input" type="checkbox" \r
                       formControlName="est_featured" id="est_featured">\r
                <label class="form-check-label" for="est_featured">\r
                  Formation mise en avant\r
                </label>\r
              </div>\r
              <div class="form-check">\r
                <input class="form-check-input" type="checkbox" \r
                       formControlName="est_obligatoire" id="est_obligatoire">\r
                <label class="form-check-label" for="est_obligatoire">\r
                  Formation obligatoire\r
                </label>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Conditions sp\xE9ciales -->\r
          <div class="mb-3">\r
            <label class="form-label">Conditions sp\xE9ciales</label>\r
            <textarea class="form-control" rows="3" formControlName="conditions_speciales" \r
                      placeholder="Conditions particuli\xE8res pour cette formation dans ce catalogue (optionnel)"></textarea>\r
          </div>\r
\r
          <!-- Informations sur le catalogue -->\r
          <div class="alert alert-info" *ngIf="selectedCatalogue">\r
            <h6><i class="isax isax-info-circle me-2"></i>Informations du catalogue</h6>\r
            <div class="row">\r
              <div class="col-md-6">\r
                <small><strong>Formations actuelles:</strong> {{ selectedCatalogue.formations.length }}</small><br>\r
                <small><strong>Dur\xE9e totale:</strong> {{ selectedCatalogue.duree_totale }}h</small>\r
              </div>\r
              <div class="col-md-6">\r
                <small><strong>Type:</strong> {{ getTypeLabel(selectedCatalogue.type) }}</small><br>\r
                <small><strong>Niveau:</strong> {{ selectedCatalogue.metadata.niveau }}</small>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="modal-footer">\r
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>\r
          <button type="submit" class="btn btn-primary" \r
                  [disabled]="formationForm.invalid || saving || formationsDisponibles.length === 0">\r
            <span class="spinner-border spinner-border-sm me-2" *ngIf="saving"></span>\r
            Ajouter au catalogue\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal Visualisation -->\r
<div class="modal fade" id="viewModal" tabindex="-1">\r
  <div class="modal-dialog modal-xl">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">D\xE9tails du Catalogue</h5>\r
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>\r
      </div>\r
      <div class="modal-body" *ngIf="selectedCatalogue">\r
        <div class="row">\r
          <!-- En-t\xEAte du catalogue -->\r
          <div class="col-12 mb-4">\r
            <div class="d-flex align-items-center p-3 rounded" \r
                 [style.background-color]="selectedCatalogue.couleur + '20'">\r
              <div class="catalogue-icon d-flex align-items-center justify-content-center rounded me-3"\r
                   [style.background-color]="selectedCatalogue.couleur"\r
                   style="width: 80px; height: 80px;">\r
                <i [class]="getIconClass(selectedCatalogue.icone)" \r
                   style="font-size: 2.5rem; color: white;"></i>\r
              </div>\r
              <div class="flex-grow-1">\r
                <h4 class="mb-2">{{ selectedCatalogue.titre }}</h4>\r
                <p class="mb-2">{{ selectedCatalogue.description }}</p>\r
                <div class="d-flex align-items-center gap-3">\r
                  <span class="badge bg-primary">{{ getTypeLabel(selectedCatalogue.type) }}</span>\r
                  <span class="badge bg-info">{{ selectedCatalogue.metadata.niveau }}</span>\r
                  <span class="badge bg-success" *ngIf="selectedCatalogue.est_publie">Publi\xE9</span>\r
                  <span class="badge bg-secondary" *ngIf="selectedCatalogue.metadata.certificat_disponible">Certifiant</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Statistiques -->\r
          <div class="col-md-6 mb-4">\r
            <h6>Statistiques</h6>\r
            <div class="list-group list-group-flush">\r
              <div class="list-group-item d-flex justify-content-between">\r
                <span>Nombre de formations</span>\r
                <strong>{{ selectedCatalogue.nombre_formations }}</strong>\r
              </div>\r
              <div class="list-group-item d-flex justify-content-between">\r
                <span>Dur\xE9e totale</span>\r
                <strong>{{ selectedCatalogue.duree_totale }}h</strong>\r
              </div>\r
              <div class="list-group-item d-flex justify-content-between">\r
                <span>Formations mises en avant</span>\r
                <strong>{{ getFeaturedFormationsCount(selectedCatalogue.formations) }}</strong>\r
              </div>\r
              <div class="list-group-item d-flex justify-content-between" *ngIf="selectedCatalogue.formations.length > 0">\r
                <span>Prix moyen</span>\r
                <strong>{{ getAveragePrice(selectedCatalogue.formations) | number:'1.0-0' }}\u20AC</strong>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- M\xE9tadonn\xE9es -->\r
          <div class="col-md-6 mb-4">\r
            <h6>Informations</h6>\r
            <div class="list-group list-group-flush">\r
              <div class="list-group-item">\r
                <strong>Niveau:</strong> {{ selectedCatalogue.metadata.niveau }}\r
              </div>\r
              <div class="list-group-item">\r
                <strong>Dur\xE9e moyenne:</strong> {{ selectedCatalogue.metadata.duree_moyenne }}h\r
              </div>\r
              <div class="list-group-item" *ngIf="selectedCatalogue.metadata.prerequis.length > 0">\r
                <strong>Pr\xE9requis:</strong>\r
                <div class="mt-1">\r
                  <span class="badge bg-light text-dark me-1" *ngFor="let prerequis of selectedCatalogue.metadata.prerequis">\r
                    {{ prerequis }}\r
                  </span>\r
                </div>\r
              </div>\r
              <div class="list-group-item">\r
                <strong>Cr\xE9\xE9 le:</strong> {{ formatDate(selectedCatalogue.created_at) }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Formations du catalogue -->\r
          <div class="col-12">\r
            <div class="d-flex justify-content-between align-items-center mb-3">\r
              <h6>Formations incluses ({{ selectedCatalogue.formations.length }})</h6>\r
              <button class="btn btn-sm btn-primary" \r
                      (click)="openFormationModal(selectedCatalogue)"\r
                      data-bs-dismiss="modal">\r
                <i class="isax isax-add-circle me-1"></i>Ajouter formation\r
              </button>\r
            </div>\r
            \r
            <div class="table-responsive" *ngIf="selectedCatalogue.formations.length > 0">\r
              <table class="table table-sm">\r
                <thead>\r
                  <tr>\r
                    <th>Ordre</th>\r
                    <th>Titre</th>\r
                    <th>Niveau</th>\r
                    <th>Dur\xE9e</th>\r
                    <th>Prix</th>\r
                    <th>Type</th>\r
                    <th>Statut</th>\r
                    <th>Actions</th>\r
                  </tr>\r
                </thead>\r
                <tbody>\r
                  <tr *ngFor="let formation of selectedCatalogue.formations; trackBy: trackByFormationId">\r
                    <td>\r
                      <span class="badge bg-secondary">{{ formation.pivot?.ordre || 1 }}</span>\r
                    </td>\r
                    <td>\r
                      <div>\r
                        <strong>{{ formation.titre }}</strong>\r
                        <div class="d-flex gap-1 mt-1">\r
                          <span class="badge bg-warning" *ngIf="formation.pivot?.est_featured">Featured</span>\r
                          <span class="badge bg-info" *ngIf="formation.pivot?.est_obligatoire">Obligatoire</span>\r
                        </div>\r
                      </div>\r
                      <small class="text-muted">{{ formation.short_description }}</small>\r
                    </td>\r
                    <td>\r
                      <span class="badge bg-info">{{ formation.niveau }}</span>\r
                    </td>\r
                    <td>{{ formation.duree_totale }}h</td>\r
                    <td>{{ formation.prix }}\u20AC</td>\r
                    <td>{{ formation.type }}</td>\r
                    <td>\r
                      <span class="badge bg-success" *ngIf="formation.est_publie">Publi\xE9</span>\r
                      <span class="badge bg-secondary" *ngIf="!formation.est_publie">Brouillon</span>\r
                    </td>\r
                    <td>\r
                      <button class="btn btn-sm btn-outline-danger" \r
                              (click)="retirerFormation(selectedCatalogue, formation)"\r
                              title="Retirer du catalogue">\r
                        <i class="isax isax-trash"></i>\r
                      </button>\r
                    </td>\r
                  </tr>\r
                </tbody>\r
              </table>\r
            </div>\r
            \r
            <div class="text-center text-muted py-4" *ngIf="selectedCatalogue.formations.length === 0">\r
              <i class="isax isax-book" style="font-size: 2rem; opacity: 0.5;"></i>\r
              <p class="mt-2">Aucune formation dans ce catalogue</p>\r
              <button class="btn btn-primary btn-sm" \r
                      (click)="openFormationModal(selectedCatalogue)"\r
                      data-bs-dismiss="modal">\r
                <i class="isax isax-add-circle me-1"></i>Ajouter la premi\xE8re formation\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal Suppression -->\r
<div class="modal fade" id="deleteModal" tabindex="-1">\r
  <div class="modal-dialog">\r
    <div class="modal-content">\r
      <div class="modal-body text-center py-4">\r
        <div class="mb-3">\r
          <i class="isax isax-trash text-danger" style="font-size: 3rem;"></i>\r
        </div>\r
        <h5>Supprimer le catalogue</h5>\r
        <p class="text-muted" *ngIf="selectedCatalogue">\r
          \xCAtes-vous s\xFBr de vouloir supprimer le catalogue \r
          "<strong>{{ selectedCatalogue.titre }}</strong>" ?\r
        </p>\r
        <p class="text-warning small">\r
          <i class="isax isax-warning-2 me-1"></i>\r
          Cette action est irr\xE9versible.\r
        </p>\r
        <div class="d-flex justify-content-center gap-2 mt-4">\r
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>\r
          <button type="button" class="btn btn-danger" (click)="deleteCatalogue()">\r
            Supprimer\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/features/adminrh/adminrh-catalogue/adminrh-catalogue.component.scss */\n.catalogue .catalogues-list .card {\n  transition: all 0.2s ease;\n  border: 1px solid #e9ecef;\n}\n.catalogue .catalogues-list .card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border-color: #007bff;\n}\n.catalogue .catalogues-list .catalogue-icon {\n  transition: transform 0.2s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.catalogue .catalogues-list .catalogue-icon:hover {\n  transform: scale(1.05);\n}\n.catalogue .badge {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n}\n.catalogue .dropdown-toggle {\n  border: 1px solid #ddd;\n  padding: 0.375rem 0.75rem;\n}\n.catalogue .dropdown-toggle:hover {\n  background-color: #f8f9fa;\n  border-color: #adb5bd;\n}\n.catalogue .form-control-color {\n  width: 100%;\n  height: 38px;\n}\n.catalogue .invalid-feedback {\n  display: block;\n}\n.catalogue .spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n}\n.modal-xl {\n  max-width: 1200px;\n}\n.list-group-item {\n  border-left: none;\n  border-right: none;\n}\n.list-group-item:first-child {\n  border-top: none;\n}\n.list-group-item:last-child {\n  border-bottom: none;\n}\n.table-responsive .table th {\n  border-top: none;\n  font-weight: 600;\n  color: #495057;\n}\n.table-responsive .badge {\n  font-size: 0.7rem;\n}\n/*# sourceMappingURL=adminrh-catalogue.component.css.map */\n"] }]
  }], () => [{ type: CatalogueService }, { type: FormationService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhCatalogueComponent, { className: "AdminrhCatalogueComponent", filePath: "src/app/features/adminrh/adminrh-catalogue/adminrh-catalogue.component.ts", lineNumber: 16 });
})();
export {
  AdminrhCatalogueComponent
};
//# sourceMappingURL=chunk-2K2TSDHG.js.map
