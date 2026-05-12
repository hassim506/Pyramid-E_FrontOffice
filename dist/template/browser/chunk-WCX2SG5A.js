import {
  DemandeFormationService
} from "./chunk-QSH6SDU4.js";
import {
  CustomPaginationComponent
} from "./chunk-Z2HA3X3F.js";
import "./chunk-YIMRJUCQ.js";
import {
  FormationsService
} from "./chunk-3MN45TQB.js";
import "./chunk-REZZRIDN.js";
import {
  environment
} from "./chunk-FKX6UC3I.js";
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
} from "./chunk-AK2M3J6O.js";
import {
  Router,
  RouterModule
} from "./chunk-AJNKO2CX.js";
import "./chunk-FZP3BRBS.js";
import "./chunk-GSAJL664.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  SlicePipe
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UPBSS6WA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/student/students-catalogue/students-catalogue.component.ts
function StudentsCatalogueComponent_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 63);
  }
}
function StudentsCatalogueComponent_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 64);
  }
}
function StudentsCatalogueComponent_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 65);
  }
}
function StudentsCatalogueComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_div_28_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByStatus(""));
    });
    \u0275\u0275elementStart(2, "div", 68);
    \u0275\u0275element(3, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 69)(5, "div", 70);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 71);
    \u0275\u0275text(8, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 72);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_div_28_Template_div_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByStatus("en_attente"));
    });
    \u0275\u0275elementStart(10, "div", 68);
    \u0275\u0275element(11, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 69)(13, "div", 70);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 71);
    \u0275\u0275text(16, "En attente");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 74);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_div_28_Template_div_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByStatus("validee"));
    });
    \u0275\u0275elementStart(18, "div", 68);
    \u0275\u0275element(19, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 69)(21, "div", 70);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 71);
    \u0275\u0275text(24, "Valid\xE9es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 76);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_div_28_Template_div_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByStatus("refusee"));
    });
    \u0275\u0275elementStart(26, "div", 68);
    \u0275\u0275element(27, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 69)(29, "div", 70);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 71);
    \u0275\u0275text(32, "Refus\xE9es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 78);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_div_28_Template_div_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByStatus("annulee"));
    });
    \u0275\u0275elementStart(34, "div", 68);
    \u0275\u0275element(35, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 69)(37, "div", 70);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 71);
    \u0275\u0275text(40, "Annul\xE9es");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("pq-kpi-card--active", ctx_r1.selectedStatus === "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.totalDemandes);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pq-kpi-card--active", ctx_r1.selectedStatus === "en_attente");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.totalEnAttente);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pq-kpi-card--active", ctx_r1.selectedStatus === "validee");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.totalValidees);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pq-kpi-card--active", ctx_r1.selectedStatus === "refusee");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.totalRefusees);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pq-kpi-card--active", ctx_r1.selectedStatus === "annulee");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.totalAnnulees);
  }
}
function StudentsCatalogueComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.totalEnAttente, ")");
  }
}
function StudentsCatalogueComponent_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.totalValidees, ")");
  }
}
function StudentsCatalogueComponent_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.totalRefusees, ")");
  }
}
function StudentsCatalogueComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.totalAnnulees, ")");
  }
}
function StudentsCatalogueComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275element(1, "div", 82);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement de vos demandes de catalogues...");
    \u0275\u0275elementEnd()();
  }
}
function StudentsCatalogueComponent_ng_container_52_div_1_tr_25_small_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 114);
    \u0275\u0275element(1, "i", 115);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(3, 2, demande_r4.sous_titre_affiche, 0, 60), "", (demande_r4.sous_titre_affiche == null ? null : demande_r4.sous_titre_affiche.length) > 60 ? "\u2026" : "", " ");
  }
}
function StudentsCatalogueComponent_ng_container_52_div_1_tr_25_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 116);
    \u0275\u0275element(1, "i", 117);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", demande_r4.catalogue.nombre_formations, " formation(s) ");
  }
}
function StudentsCatalogueComponent_ng_container_52_div_1_tr_25_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 116);
    \u0275\u0275element(1, "i", 118);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", demande_r4.catalogue.type_display, " ");
  }
}
function StudentsCatalogueComponent_ng_container_52_div_1_tr_25_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 116);
    \u0275\u0275element(1, "i", 119);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", demande_r4.catalogue.categorie, " ");
  }
}
function StudentsCatalogueComponent_ng_container_52_div_1_tr_25_div_26_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275element(1, "i", 130);
    \u0275\u0275elementStart(2, "em");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const demande_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(demande_r4.commentaire_rh);
  }
}
function StudentsCatalogueComponent_ng_container_52_div_1_tr_25_div_26_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 125);
    \u0275\u0275element(2, "i", 126);
    \u0275\u0275text(3, "Motif de refus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 127);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, StudentsCatalogueComponent_ng_container_52_div_1_tr_25_div_26_div_4_div_6_Template, 4, 1, "div", 128);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(demande_r4.motif_refus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r4.commentaire_rh);
  }
}
function StudentsCatalogueComponent_ng_container_52_div_1_tr_25_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275listener("mouseenter", function StudentsCatalogueComponent_ng_container_52_div_1_tr_25_div_26_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r5);
      const demande_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showMotif(demande_r4.id));
    })("mouseleave", function StudentsCatalogueComponent_ng_container_52_div_1_tr_25_div_26_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.hideMotif());
    })("click", function StudentsCatalogueComponent_ng_container_52_div_1_tr_25_div_26_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "button", 121);
    \u0275\u0275element(2, "i", 122);
    \u0275\u0275text(3, " Motif");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, StudentsCatalogueComponent_ng_container_52_div_1_tr_25_div_26_div_4_Template, 7, 2, "div", 123);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isMotifVisible(demande_r4.id));
  }
}
function StudentsCatalogueComponent_ng_container_52_div_1_tr_25_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 131);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_ng_container_52_div_1_tr_25_ng_container_29_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const demande_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.annulerDemande(demande_r4.id, $event));
    });
    \u0275\u0275element(2, "i", 77);
    \u0275\u0275elementStart(3, "span", 132);
    \u0275\u0275text(4, "Annuler la demande");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 133);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_ng_container_52_div_1_tr_25_ng_container_29_Template_div_click_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const demande_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.relancerDemande(demande_r4.id, $event));
    });
    \u0275\u0275element(6, "i", 36);
    \u0275\u0275elementStart(7, "span", 132);
    \u0275\u0275text(8, "Relancer la demande");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function StudentsCatalogueComponent_ng_container_52_div_1_tr_25_span_30_i_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 138);
  }
}
function StudentsCatalogueComponent_ng_container_52_div_1_tr_25_span_30_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 139);
  }
}
function StudentsCatalogueComponent_ng_container_52_div_1_tr_25_span_30_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 140);
  }
}
function StudentsCatalogueComponent_ng_container_52_div_1_tr_25_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 134);
    \u0275\u0275template(1, StudentsCatalogueComponent_ng_container_52_div_1_tr_25_span_30_i_1_Template, 1, 0, "i", 135)(2, StudentsCatalogueComponent_ng_container_52_div_1_tr_25_span_30_i_2_Template, 1, 0, "i", 136)(3, StudentsCatalogueComponent_ng_container_52_div_1_tr_25_span_30_i_3_Template, 1, 0, "i", 137);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", demande_r4.statut_display);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r4.statut === "validee");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r4.statut === "refusee");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r4.statut === "annulee");
  }
}
function StudentsCatalogueComponent_ng_container_52_div_1_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 97);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_ng_container_52_div_1_tr_25_Template_tr_click_0_listener($event) {
      const demande_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.ouvrirDetailDemande(demande_r4, $event));
    });
    \u0275\u0275elementStart(1, "td")(2, "div", 98);
    \u0275\u0275element(3, "img", 99);
    \u0275\u0275elementStart(4, "div", 100)(5, "div", 101);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, StudentsCatalogueComponent_ng_container_52_div_1_tr_25_small_7_Template, 4, 6, "small", 102);
    \u0275\u0275elementStart(8, "div", 103);
    \u0275\u0275template(9, StudentsCatalogueComponent_ng_container_52_div_1_tr_25_span_9_Template, 3, 1, "span", 104)(10, StudentsCatalogueComponent_ng_container_52_div_1_tr_25_span_10_Template, 3, 1, "span", 104)(11, StudentsCatalogueComponent_ng_container_52_div_1_tr_25_span_11_Template, 3, 1, "span", 104);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td")(13, "span", 105);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 106);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 94)(20, "span", 107);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 94)(23, "div", 108)(24, "span", 109);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, StudentsCatalogueComponent_ng_container_52_div_1_tr_25_div_26_Template, 5, 1, "div", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td", 111);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_ng_container_52_div_1_tr_25_Template_td_click_27_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(28, "div", 112);
    \u0275\u0275template(29, StudentsCatalogueComponent_ng_container_52_div_1_tr_25_ng_container_29_Template, 9, 0, "ng-container", 38)(30, StudentsCatalogueComponent_ng_container_52_div_1_tr_25_span_30_Template, 4, 4, "span", 113);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const demande_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("sc-row--refusee", demande_r4.statut === "refusee")("sc-row--validee", demande_r4.statut === "validee");
    \u0275\u0275advance(3);
    \u0275\u0275property("src", demande_r4.image_affiche, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(demande_r4.titre_affiche);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r4.sous_titre_affiche);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (demande_r4.catalogue == null ? null : demande_r4.catalogue.nombre_formations) != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r4.catalogue == null ? null : demande_r4.catalogue.type_display);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r4.catalogue == null ? null : demande_r4.catalogue.categorie);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 19, demande_r4.created_at, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 22, demande_r4.created_at, "HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getPrioriteClass(demande_r4.priorite));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(demande_r4.priorite_display);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getStatutClass(demande_r4.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(demande_r4.statut_display);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r4.statut === "refusee" && demande_r4.motif_refus);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", demande_r4.statut === "en_attente");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r4.statut !== "en_attente");
  }
}
function StudentsCatalogueComponent_ng_container_52_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 85)(2, "div", 86);
    \u0275\u0275element(3, "i", 87);
    \u0275\u0275text(4, " Historique des demandes de catalogues ");
    \u0275\u0275elementStart(5, "span", 88);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "small", 89);
    \u0275\u0275element(8, "i", 90);
    \u0275\u0275text(9, "Cliquez sur une ligne pour voir les d\xE9tails ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 91)(11, "table", 92)(12, "thead")(13, "tr")(14, "th", 93);
    \u0275\u0275text(15, "Catalogue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Date de soumission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 94);
    \u0275\u0275text(19, "Priorit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 95);
    \u0275\u0275text(21, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 94);
    \u0275\u0275text(23, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, StudentsCatalogueComponent_ng_container_52_div_1_tr_25_Template, 31, 25, "tr", 96);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.totalData);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.demandes);
  }
}
function StudentsCatalogueComponent_ng_container_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StudentsCatalogueComponent_ng_container_52_div_1_Template, 26, 2, "div", 83);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandes.length > 0);
  }
}
function StudentsCatalogueComponent_ng_container_53_div_1_div_1_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 158);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(3, 2, demande_r8.sous_titre_affiche, 0, 55), "", (demande_r8.sous_titre_affiche == null ? null : demande_r8.sous_titre_affiche.length) > 55 ? "\u2026" : "", " ");
  }
}
function StudentsCatalogueComponent_ng_container_53_div_1_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 116);
    \u0275\u0275element(1, "i", 117);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", demande_r8.catalogue.nombre_formations, " formation(s) ");
  }
}
function StudentsCatalogueComponent_ng_container_53_div_1_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 116);
    \u0275\u0275element(1, "i", 118);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", demande_r8.catalogue.type_display, " ");
  }
}
function StudentsCatalogueComponent_ng_container_53_div_1_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 116);
    \u0275\u0275element(1, "i", 119);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", demande_r8.catalogue.categorie, " ");
  }
}
function StudentsCatalogueComponent_ng_container_53_div_1_div_1_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 159);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_ng_container_53_div_1_div_1_ng_container_22_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const demande_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.annulerDemande(demande_r8.id, $event));
    });
    \u0275\u0275element(2, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 160);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_ng_container_53_div_1_div_1_ng_container_22_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const demande_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.relancerDemande(demande_r8.id, $event));
    });
    \u0275\u0275element(4, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function StudentsCatalogueComponent_ng_container_53_div_1_div_1_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 161);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_ng_container_53_div_1_div_1_button_23_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const demande_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.ouvrirDetailDemande(demande_r8, $event));
    });
    \u0275\u0275element(1, "i", 162);
    \u0275\u0275text(2, "Motif ");
    \u0275\u0275elementEnd();
  }
}
function StudentsCatalogueComponent_ng_container_53_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_ng_container_53_div_1_div_1_Template_div_click_0_listener($event) {
      const demande_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.ouvrirDetailDemande(demande_r8, $event));
    });
    \u0275\u0275elementStart(1, "div", 145);
    \u0275\u0275element(2, "img", 146);
    \u0275\u0275elementStart(3, "div", 147)(4, "span", 109);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 148);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 149)(9, "h6", 150);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, StudentsCatalogueComponent_ng_container_53_div_1_div_1_p_11_Template, 4, 6, "p", 151);
    \u0275\u0275elementStart(12, "div", 152);
    \u0275\u0275template(13, StudentsCatalogueComponent_ng_container_53_div_1_div_1_span_13_Template, 3, 1, "span", 104)(14, StudentsCatalogueComponent_ng_container_53_div_1_div_1_span_14_Template, 3, 1, "span", 104)(15, StudentsCatalogueComponent_ng_container_53_div_1_div_1_span_15_Template, 3, 1, "span", 104);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 153);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_ng_container_53_div_1_div_1_Template_div_click_16_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(17, "span", 154);
    \u0275\u0275element(18, "i", 155);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 156);
    \u0275\u0275template(22, StudentsCatalogueComponent_ng_container_53_div_1_div_1_ng_container_22_Template, 5, 0, "ng-container", 38)(23, StudentsCatalogueComponent_ng_container_53_div_1_div_1_button_23_Template, 3, 0, "button", 157);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const demande_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("sc-grid-card--validee", demande_r8.statut === "validee")("sc-grid-card--refusee", demande_r8.statut === "refusee")("sc-grid-card--attente", demande_r8.statut === "en_attente");
    \u0275\u0275advance(2);
    \u0275\u0275property("alt", \u0275\u0275interpolate(demande_r8.titre_affiche))("src", demande_r8.image_affiche, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getStatutClass(demande_r8.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(demande_r8.statut_display);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getPrioriteClass(demande_r8.priorite));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", demande_r8.priorite_display, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(demande_r8.titre_affiche);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r8.sous_titre_affiche);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (demande_r8.catalogue == null ? null : demande_r8.catalogue.nombre_formations) != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r8.catalogue == null ? null : demande_r8.catalogue.type_display);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r8.catalogue == null ? null : demande_r8.catalogue.categorie);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 21, demande_r8.created_at, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", demande_r8.statut === "en_attente");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r8.statut === "refusee" && demande_r8.motif_refus);
  }
}
function StudentsCatalogueComponent_ng_container_53_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 142);
    \u0275\u0275template(1, StudentsCatalogueComponent_ng_container_53_div_1_div_1_Template, 24, 24, "div", 143);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.demandes);
  }
}
function StudentsCatalogueComponent_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StudentsCatalogueComponent_ng_container_53_div_1_Template, 2, 1, "div", 141);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandes.length > 0);
  }
}
function StudentsCatalogueComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 163)(1, "div", 164);
    \u0275\u0275element(2, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 165);
    \u0275\u0275text(4, "Aucune demande de catalogue trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Vos futures demandes de catalogues appara\xEEtront ici.");
    \u0275\u0275elementEnd()();
  }
}
function StudentsCatalogueComponent_app_custom_pagination_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-custom-pagination", 166);
    \u0275\u0275listener("pageChange", function StudentsCatalogueComponent_app_custom_pagination_55_Template_app_custom_pagination_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("totalItems", ctx_r1.totalData)("pageSize", ctx_r1.pageSize)("currentPage", ctx_r1.currentPage);
  }
}
function StudentsCatalogueComponent_div_58_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 198);
    \u0275\u0275element(1, "i", 199);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Souhait\xE9 le ", \u0275\u0275pipeBind2(3, 1, ctx_r1.demandeSelectionnee.date_souhaitee_debut, "dd/MM/yyyy"), " ");
  }
}
function StudentsCatalogueComponent_div_58_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 200);
    \u0275\u0275element(1, "i", 115);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.demandeSelectionnee.sous_titre_affiche, " ");
  }
}
function StudentsCatalogueComponent_div_58_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 201);
    \u0275\u0275element(1, "i", 118);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.demandeSelectionnee.catalogue.type_display, " ");
  }
}
function StudentsCatalogueComponent_div_58_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 202);
    \u0275\u0275element(1, "i", 119);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.demandeSelectionnee.catalogue.categorie, " ");
  }
}
function StudentsCatalogueComponent_div_58_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 203)(1, "div", 204);
    \u0275\u0275element(2, "i", 205);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "Formations incluses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.demandeSelectionnee.catalogue.nombre_formations, " formation(s)");
  }
}
function StudentsCatalogueComponent_div_58_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 203)(1, "div", 204);
    \u0275\u0275element(2, "i", 206);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "Type de catalogue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.demandeSelectionnee.catalogue.type_display);
  }
}
function StudentsCatalogueComponent_div_58_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 203)(1, "div", 204);
    \u0275\u0275element(2, "i", 207);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "D\xE9but pr\xE9vu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 1, ctx_r1.demandeSelectionnee.catalogue.date_debut, "dd/MM/yyyy"));
  }
}
function StudentsCatalogueComponent_div_58_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 203)(1, "div", 204);
    \u0275\u0275element(2, "i", 208);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "Fin pr\xE9vue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 1, ctx_r1.demandeSelectionnee.catalogue.date_fin, "dd/MM/yyyy"));
  }
}
function StudentsCatalogueComponent_div_58_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 209)(1, "div", 210);
    \u0275\u0275element(2, "i", 211);
    \u0275\u0275text(3, "Description ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 212);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.demandeSelectionnee.catalogue.description);
  }
}
function StudentsCatalogueComponent_div_58_div_39_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 221)(1, "span", 222);
    \u0275\u0275element(2, "i", 223);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formationsCatalogue.length, " formation(s) ");
  }
}
function StudentsCatalogueComponent_div_58_div_39_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 224);
    \u0275\u0275element(1, "div", 225);
    \u0275\u0275elementStart(2, "span", 226);
    \u0275\u0275text(3, "Chargement des formations...");
    \u0275\u0275elementEnd()();
  }
}
function StudentsCatalogueComponent_div_58_div_39_div_8_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 241);
    \u0275\u0275element(1, "i", 242);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formation_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", formation_r15.formateur_nom, " ");
  }
}
function StudentsCatalogueComponent_div_58_div_39_div_8_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 243);
    \u0275\u0275element(1, "i", 244);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formation_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", formation_r15.duree_totale, "h ");
  }
}
function StudentsCatalogueComponent_div_58_div_39_div_8_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 245);
    \u0275\u0275element(1, "i", 117);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formation_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", formation_r15.nombre_modules, " module(s) ");
  }
}
function StudentsCatalogueComponent_div_58_div_39_div_8_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 246);
    \u0275\u0275element(1, "i", 247);
    \u0275\u0275text(2, "Certifiante ");
    \u0275\u0275elementEnd();
  }
}
function StudentsCatalogueComponent_div_58_div_39_div_8_div_1_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 258);
    \u0275\u0275element(1, "img", 259);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formation_r15 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", formation_r15.image_couverture || "assets/img/course/course-01.jpg", \u0275\u0275sanitizeUrl);
  }
}
function StudentsCatalogueComponent_div_58_div_39_div_8_div_1_div_14_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 260);
    \u0275\u0275element(1, "i", 261);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formation_r15 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", formation_r15.niveau_display, " ");
  }
}
function StudentsCatalogueComponent_div_58_div_39_div_8_div_1_div_14_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 260);
    \u0275\u0275element(1, "i", 244);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formation_r15 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", formation_r15.duree_totale, "h ");
  }
}
function StudentsCatalogueComponent_div_58_div_39_div_8_div_1_div_14_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 260);
    \u0275\u0275element(1, "i", 117);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formation_r15 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", formation_r15.nombre_modules, " module(s) ");
  }
}
function StudentsCatalogueComponent_div_58_div_39_div_8_div_1_div_14_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 262);
    \u0275\u0275element(1, "i", 247);
    \u0275\u0275text(2, "Certifiante ");
    \u0275\u0275elementEnd();
  }
}
function StudentsCatalogueComponent_div_58_div_39_div_8_div_1_div_14_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 260);
    \u0275\u0275element(1, "i", 263);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formation_r15 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", formation_r15.langue, " ");
  }
}
function StudentsCatalogueComponent_div_58_div_39_div_8_div_1_div_14_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 264);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formation_r15 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(2, 2, formation_r15.description, 0, 200), "", (formation_r15.description == null ? null : formation_r15.description.length) > 200 ? "\u2026" : "", " ");
  }
}
function StudentsCatalogueComponent_div_58_div_39_div_8_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 248)(1, "div", 249);
    \u0275\u0275template(2, StudentsCatalogueComponent_div_58_div_39_div_8_div_1_div_14_div_2_Template, 2, 1, "div", 250);
    \u0275\u0275elementStart(3, "div", 251)(4, "div", 252);
    \u0275\u0275template(5, StudentsCatalogueComponent_div_58_div_39_div_8_div_1_div_14_span_5_Template, 3, 1, "span", 253)(6, StudentsCatalogueComponent_div_58_div_39_div_8_div_1_div_14_span_6_Template, 3, 1, "span", 253)(7, StudentsCatalogueComponent_div_58_div_39_div_8_div_1_div_14_span_7_Template, 3, 1, "span", 253)(8, StudentsCatalogueComponent_div_58_div_39_div_8_div_1_div_14_span_8_Template, 3, 0, "span", 254)(9, StudentsCatalogueComponent_div_58_div_39_div_8_div_1_div_14_span_9_Template, 3, 1, "span", 253);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, StudentsCatalogueComponent_div_58_div_39_div_8_div_1_div_14_p_10_Template, 3, 6, "p", 255);
    \u0275\u0275elementStart(11, "button", 256);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_div_58_div_39_div_8_div_1_div_14_Template_button_click_11_listener($event) {
      \u0275\u0275restoreView(_r16);
      const formation_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.voirFormation(formation_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(12, "i", 257);
    \u0275\u0275text(13, "Voir la formation ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const formation_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", formation_r15.image_couverture);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", formation_r15.niveau_display && formation_r15.niveau_display !== "Non d\xE9fini");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r15.duree_totale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r15.nombre_modules);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r15.est_certifiante);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r15.langue);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r15.description);
  }
}
function StudentsCatalogueComponent_div_58_div_39_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 229)(1, "button", 230);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_div_58_div_39_div_8_div_1_Template_button_click_1_listener() {
      const i_r14 = \u0275\u0275restoreView(_r13).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleFormation(ctx_r1.demandeSelectionnee.id, i_r14));
    });
    \u0275\u0275elementStart(2, "div", 231)(3, "span", 232);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "span", 233);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, StudentsCatalogueComponent_div_58_div_39_div_8_div_1_div_8_Template, 3, 1, "div", 234);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 235);
    \u0275\u0275template(10, StudentsCatalogueComponent_div_58_div_39_div_8_div_1_span_10_Template, 3, 1, "span", 236)(11, StudentsCatalogueComponent_div_58_div_39_div_8_div_1_span_11_Template, 3, 1, "span", 237)(12, StudentsCatalogueComponent_div_58_div_39_div_8_div_1_span_12_Template, 3, 0, "span", 238);
    \u0275\u0275element(13, "i", 239);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, StudentsCatalogueComponent_div_58_div_39_div_8_div_1_div_14_Template, 14, 7, "div", 240);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formation_r15 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("lms-accordion__header--open", ctx_r1.isFormationOpen(ctx_r1.demandeSelectionnee.id, i_r14));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r14 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(formation_r15.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r15.formateur_nom);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", formation_r15.duree_totale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r15.nombre_modules);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r15.est_certifiante);
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-arrow-up-2", ctx_r1.isFormationOpen(ctx_r1.demandeSelectionnee.id, i_r14))("isax-arrow-down-2", !ctx_r1.isFormationOpen(ctx_r1.demandeSelectionnee.id, i_r14));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFormationOpen(ctx_r1.demandeSelectionnee.id, i_r14));
  }
}
function StudentsCatalogueComponent_div_58_div_39_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 227);
    \u0275\u0275template(1, StudentsCatalogueComponent_div_58_div_39_div_8_div_1_Template, 15, 13, "div", 228);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.formationsCatalogue);
  }
}
function StudentsCatalogueComponent_div_58_div_39_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 265);
    \u0275\u0275element(1, "i", 266);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Aucune formation disponible pour ce catalogue");
    \u0275\u0275elementEnd()();
  }
}
function StudentsCatalogueComponent_div_58_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 171)(1, "div", 213)(2, "div", 214)(3, "div", 215);
    \u0275\u0275element(4, "i", 216);
    \u0275\u0275text(5, "Formations disponibles ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, StudentsCatalogueComponent_div_58_div_39_div_6_Template, 4, 1, "div", 217);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, StudentsCatalogueComponent_div_58_div_39_div_7_Template, 4, 0, "div", 218)(8, StudentsCatalogueComponent_div_58_div_39_div_8_Template, 2, 1, "div", 219)(9, StudentsCatalogueComponent_div_58_div_39_div_9_Template, 4, 0, "div", 220);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r1.loadingFormations);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingFormations);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingFormations && ctx_r1.formationsCatalogue.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingFormations && ctx_r1.formationsCatalogue.length === 0);
  }
}
function StudentsCatalogueComponent_div_58_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 188)(1, "span", 189);
    \u0275\u0275text(2, "Trait\xE9e le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r1.demandeSelectionnee.date_validation, "dd/MM/yyyy \xE0 HH:mm"));
  }
}
function StudentsCatalogueComponent_div_58_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 188)(1, "span", 189);
    \u0275\u0275text(2, "Mon motif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.demandeSelectionnee.motif_demande);
  }
}
function StudentsCatalogueComponent_div_58_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 188)(1, "span", 189);
    \u0275\u0275text(2, "Mes objectifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.demandeSelectionnee.objectifs_personnels);
  }
}
function StudentsCatalogueComponent_div_58_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 188)(1, "span", 189);
    \u0275\u0275text(2, "Mon commentaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.demandeSelectionnee.commentaire_employe);
  }
}
function StudentsCatalogueComponent_div_58_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 188)(1, "span", 189);
    \u0275\u0275text(2, "Trait\xE9 par");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.demandeSelectionnee.traite_par_nom);
  }
}
function StudentsCatalogueComponent_div_58_div_56_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 271);
    \u0275\u0275element(1, "i", 130);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.demandeSelectionnee.commentaire_rh, " ");
  }
}
function StudentsCatalogueComponent_div_58_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 267)(1, "div", 172);
    \u0275\u0275element(2, "i", 268);
    \u0275\u0275text(3, "Motif de refus ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 269);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, StudentsCatalogueComponent_div_58_div_56_p_6_Template, 3, 1, "p", 270);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.demandeSelectionnee.motif_refus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.commentaire_rh);
  }
}
function StudentsCatalogueComponent_div_58_div_57_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 275);
    \u0275\u0275element(1, "i", 130);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.demandeSelectionnee.commentaire_rh, " ");
  }
}
function StudentsCatalogueComponent_div_58_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 272)(1, "div", 172);
    \u0275\u0275element(2, "i", 273);
    \u0275\u0275text(3, "Demande valid\xE9e ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 269);
    \u0275\u0275text(5, " Votre demande a \xE9t\xE9 valid\xE9e le ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, StudentsCatalogueComponent_div_58_div_57_p_10_Template, 3, 1, "p", 274);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 2, ctx_r1.demandeSelectionnee.date_validation, "dd/MM/yyyy \xE0 HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.commentaire_rh);
  }
}
function StudentsCatalogueComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "div", 47)(3, "div", 48);
    \u0275\u0275element(4, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h5", 50);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 51);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_div_58_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fermerDetailDemande());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 58)(13, "div", 167)(14, "div", 168)(15, "span", 109);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 169);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, StudentsCatalogueComponent_div_58_span_19_Template, 4, 4, "span", 170);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 171)(21, "div", 172);
    \u0275\u0275element(22, "i", 173);
    \u0275\u0275text(23, "Catalogue demand\xE9 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 174);
    \u0275\u0275element(25, "img", 175);
    \u0275\u0275elementStart(26, "div", 176)(27, "div", 177);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, StudentsCatalogueComponent_div_58_div_29_Template, 3, 1, "div", 178);
    \u0275\u0275elementStart(30, "div", 179);
    \u0275\u0275template(31, StudentsCatalogueComponent_div_58_span_31_Template, 3, 1, "span", 180)(32, StudentsCatalogueComponent_div_58_span_32_Template, 3, 1, "span", 181);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 182);
    \u0275\u0275template(34, StudentsCatalogueComponent_div_58_div_34_Template, 8, 1, "div", 183)(35, StudentsCatalogueComponent_div_58_div_35_Template, 8, 1, "div", 183)(36, StudentsCatalogueComponent_div_58_div_36_Template, 9, 4, "div", 183)(37, StudentsCatalogueComponent_div_58_div_37_Template, 9, 4, "div", 183);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, StudentsCatalogueComponent_div_58_div_38_Template, 6, 1, "div", 184);
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, StudentsCatalogueComponent_div_58_div_39_Template, 10, 4, "div", 185);
    \u0275\u0275elementStart(40, "div", 171)(41, "div", 172);
    \u0275\u0275element(42, "i", 186);
    \u0275\u0275text(43, "\xC9tat de ma demande ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 187)(45, "div", 188)(46, "span", 189);
    \u0275\u0275text(47, "Soumise le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(51, StudentsCatalogueComponent_div_58_div_51_Template, 6, 4, "div", 190)(52, StudentsCatalogueComponent_div_58_div_52_Template, 5, 1, "div", 190)(53, StudentsCatalogueComponent_div_58_div_53_Template, 5, 1, "div", 190)(54, StudentsCatalogueComponent_div_58_div_54_Template, 5, 1, "div", 190)(55, StudentsCatalogueComponent_div_58_div_55_Template, 5, 1, "div", 190);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(56, StudentsCatalogueComponent_div_58_div_56_Template, 7, 2, "div", 191)(57, StudentsCatalogueComponent_div_58_div_57_Template, 11, 5, "div", 192);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 193)(59, "button", 60);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_div_58_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fermerDetailDemande());
    });
    \u0275\u0275element(60, "i", 61);
    \u0275\u0275text(61, "Fermer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 194)(63, "button", 195);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_div_58_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.annulerDemande(ctx_r1.demandeSelectionnee.id));
    });
    \u0275\u0275element(64, "i", 126);
    \u0275\u0275text(65, "Annuler la demande ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 196);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_div_58_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.relancerDemande(ctx_r1.demandeSelectionnee.id));
    });
    \u0275\u0275element(67, "i", 197);
    \u0275\u0275text(68, "Relancer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.demandeSelectionnee.titre_affiche);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Demande du ", \u0275\u0275pipeBind2(10, 28, ctx_r1.demandeSelectionnee.created_at, "dd/MM/yyyy \xE0 HH:mm"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ctx_r1.getStatutClass(ctx_r1.demandeSelectionnee.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.demandeSelectionnee.statut_display, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getPrioriteClass(ctx_r1.demandeSelectionnee.priorite));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.demandeSelectionnee.priorite_display, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.date_souhaitee_debut);
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r1.demandeSelectionnee.image_affiche, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.demandeSelectionnee.titre_affiche);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.sous_titre_affiche);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.catalogue == null ? null : ctx_r1.demandeSelectionnee.catalogue.type_display);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.catalogue == null ? null : ctx_r1.demandeSelectionnee.catalogue.categorie);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.demandeSelectionnee.catalogue == null ? null : ctx_r1.demandeSelectionnee.catalogue.nombre_formations) != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.catalogue == null ? null : ctx_r1.demandeSelectionnee.catalogue.type_display);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.catalogue == null ? null : ctx_r1.demandeSelectionnee.catalogue.date_debut);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.catalogue == null ? null : ctx_r1.demandeSelectionnee.catalogue.date_fin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.catalogue == null ? null : ctx_r1.demandeSelectionnee.catalogue.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingFormations || ctx_r1.formationsCatalogue.length > 0);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 31, ctx_r1.demandeSelectionnee.created_at, "dd/MM/yyyy \xE0 HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.date_validation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.motif_demande);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.objectifs_personnels);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.commentaire_employe);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.traite_par_nom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.statut === "refusee" && ctx_r1.demandeSelectionnee.motif_refus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.statut === "validee" && ctx_r1.demandeSelectionnee.date_validation);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.demandeSelectionnee.statut !== "en_attente");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.demandeSelectionnee.statut !== "en_attente");
  }
}
function StudentsCatalogueComponent_small_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Catalogues disponibles");
    \u0275\u0275elementEnd();
  }
}
function StudentsCatalogueComponent_small_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275element(1, "i", 276);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedCatalogue.titre, " ");
  }
}
function StudentsCatalogueComponent_ng_container_85_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 284);
    \u0275\u0275element(1, "div", 285);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Chargement des catalogues...");
    \u0275\u0275elementEnd()();
  }
}
function StudentsCatalogueComponent_ng_container_85_div_9_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 298);
  }
  if (rf & 2) {
    const c_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", c_r18.image_couverture, \u0275\u0275sanitizeUrl);
  }
}
function StudentsCatalogueComponent_ng_container_85_div_9_div_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 49);
  }
  if (rf & 2) {
    const c_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("color", c_r18.couleur || "#069b8f");
  }
}
function StudentsCatalogueComponent_ng_container_85_div_9_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 299);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(2, 2, c_r18.description, 0, 80), "", (c_r18.description == null ? null : c_r18.description.length) > 80 ? "\u2026" : "", " ");
  }
}
function StudentsCatalogueComponent_ng_container_85_div_9_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 260);
    \u0275\u0275element(1, "i", 118);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r18.type_display, " ");
  }
}
function StudentsCatalogueComponent_ng_container_85_div_9_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 202);
    \u0275\u0275element(1, "i", 119);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r18.categorie, " ");
  }
}
function StudentsCatalogueComponent_ng_container_85_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 288);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_ng_container_85_div_9_div_1_Template_div_click_0_listener() {
      const c_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectCatalogue(c_r18));
    });
    \u0275\u0275elementStart(1, "div", 289);
    \u0275\u0275template(2, StudentsCatalogueComponent_ng_container_85_div_9_div_1_img_2_Template, 1, 1, "img", 290)(3, StudentsCatalogueComponent_ng_container_85_div_9_div_1_i_3_Template, 1, 2, "i", 291);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 292)(5, "div", 293);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, StudentsCatalogueComponent_ng_container_85_div_9_div_1_div_7_Template, 3, 6, "div", 294);
    \u0275\u0275elementStart(8, "div", 295)(9, "span", 201);
    \u0275\u0275element(10, "i", 117);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, StudentsCatalogueComponent_ng_container_85_div_9_div_1_span_12_Template, 3, 1, "span", 253)(13, StudentsCatalogueComponent_ng_container_85_div_9_div_1_span_13_Template, 3, 1, "span", 181);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 296);
    \u0275\u0275element(15, "i", 297);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", c_r18.couleur ? c_r18.couleur + "20" : null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r18.image_couverture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !c_r18.image_couverture);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r18.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r18.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", c_r18.nombre_formations, " formation(s) ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r18.type_display);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r18.categorie);
  }
}
function StudentsCatalogueComponent_ng_container_85_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 286);
    \u0275\u0275template(1, StudentsCatalogueComponent_ng_container_85_div_9_div_1_Template, 16, 9, "div", 287);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.catalogues);
  }
}
function StudentsCatalogueComponent_ng_container_85_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 300);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Aucun catalogue disponible");
    \u0275\u0275elementEnd()();
  }
}
function StudentsCatalogueComponent_ng_container_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 277)(2, "span", 278);
    \u0275\u0275text(3, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 279);
    \u0275\u0275text(5, "Choisir un catalogue ");
    \u0275\u0275elementStart(6, "span", 280);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, StudentsCatalogueComponent_ng_container_85_div_8_Template, 4, 0, "div", 281)(9, StudentsCatalogueComponent_ng_container_85_div_9_Template, 2, 1, "div", 282)(10, StudentsCatalogueComponent_ng_container_85_div_10_Template, 4, 0, "div", 283);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.loadingCatalogues);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingCatalogues && ctx_r1.catalogues.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingCatalogues && ctx_r1.catalogues.length === 0);
  }
}
function StudentsCatalogueComponent_ng_container_86_img_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 328);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.selectedCatalogue.image_couverture, \u0275\u0275sanitizeUrl);
  }
}
function StudentsCatalogueComponent_ng_container_86_i_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 49);
  }
}
function StudentsCatalogueComponent_ng_container_86_div_15_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 335);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formationsCatalogueModal.length || (ctx_r1.selectedCatalogue == null ? null : ctx_r1.selectedCatalogue.nombre_formations) || 0, " ");
  }
}
function StudentsCatalogueComponent_ng_container_86_div_15_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 336);
  }
}
function StudentsCatalogueComponent_ng_container_86_div_15_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 340);
    \u0275\u0275element(1, "div", 341);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function StudentsCatalogueComponent_ng_container_86_div_15_div_8_div_2_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 260);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r21.niveau_display);
  }
}
function StudentsCatalogueComponent_ng_container_86_div_15_div_8_div_2_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 260);
    \u0275\u0275element(1, "i", 244);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r21.duree_totale, "h");
  }
}
function StudentsCatalogueComponent_ng_container_86_div_15_div_8_div_2_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 262);
    \u0275\u0275element(1, "i", 247);
    \u0275\u0275text(2, "Certifiante");
    \u0275\u0275elementEnd();
  }
}
function StudentsCatalogueComponent_ng_container_86_div_15_div_8_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 344)(1, "div", 345);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 346);
    \u0275\u0275elementStart(4, "div", 347)(5, "div", 348);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 349);
    \u0275\u0275template(8, StudentsCatalogueComponent_ng_container_86_div_15_div_8_div_2_div_1_span_8_Template, 2, 1, "span", 253)(9, StudentsCatalogueComponent_ng_container_86_div_15_div_8_div_2_div_1_span_9_Template, 3, 1, "span", 253)(10, StudentsCatalogueComponent_ng_container_86_div_15_div_8_div_2_div_1_span_10_Template, 3, 0, "span", 254);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r22 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("src", f_r21.image_couverture || "assets/img/course/course-01.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r21.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", f_r21.niveau_display && f_r21.niveau_display !== "Non d\xE9fini");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r21.duree_totale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r21.est_certifiante);
  }
}
function StudentsCatalogueComponent_ng_container_86_div_15_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 342);
    \u0275\u0275template(1, StudentsCatalogueComponent_ng_container_86_div_15_div_8_div_2_div_1_Template, 11, 6, "div", 343);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.formationsCatalogueModal);
  }
}
function StudentsCatalogueComponent_ng_container_86_div_15_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 337);
    \u0275\u0275template(1, StudentsCatalogueComponent_ng_container_86_div_15_div_8_div_1_Template, 4, 0, "div", 338)(2, StudentsCatalogueComponent_ng_container_86_div_15_div_8_div_2_Template, 2, 1, "div", 339);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingFormationsModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingFormationsModal);
  }
}
function StudentsCatalogueComponent_ng_container_86_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 329)(1, "button", 330);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_ng_container_86_div_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showFormations = !ctx_r1.showFormations);
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275element(3, "i", 117);
    \u0275\u0275text(4, "Voir les formations incluses ");
    \u0275\u0275template(5, StudentsCatalogueComponent_ng_container_86_div_15_span_5_Template, 2, 1, "span", 331)(6, StudentsCatalogueComponent_ng_container_86_div_15_span_6_Template, 1, 0, "span", 332);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "i", 333);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, StudentsCatalogueComponent_ng_container_86_div_15_div_8_Template, 3, 2, "div", 334);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.loadingFormationsModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingFormationsModal);
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-arrow-down", !ctx_r1.showFormations)("isax-arrow-up", ctx_r1.showFormations);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showFormations);
  }
}
function StudentsCatalogueComponent_ng_container_86_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 350);
    \u0275\u0275element(1, "i", 162);
    \u0275\u0275text(2, "Le motif est obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function StudentsCatalogueComponent_ng_container_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 301);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_ng_container_86_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retourCatalogues());
    });
    \u0275\u0275element(2, "i", 302);
    \u0275\u0275text(3, " Retour aux catalogues ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 303)(5, "div", 304);
    \u0275\u0275template(6, StudentsCatalogueComponent_ng_container_86_img_6_Template, 1, 1, "img", 305)(7, StudentsCatalogueComponent_ng_container_86_i_7_Template, 1, 0, "i", 306);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 307)(9, "div", 308);
    \u0275\u0275text(10, "Catalogue s\xE9lectionn\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 309);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 201);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, StudentsCatalogueComponent_ng_container_86_div_15_Template, 9, 7, "div", 310);
    \u0275\u0275element(16, "hr", 311);
    \u0275\u0275elementStart(17, "div", 277)(18, "span", 278);
    \u0275\u0275text(19, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 279);
    \u0275\u0275text(21, "Informations compl\xE9mentaires");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "form", 312)(23, "div", 313)(24, "div", 314)(25, "label", 315);
    \u0275\u0275text(26, " Motif de la demande ");
    \u0275\u0275elementStart(27, "span", 280);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(29, "textarea", 316);
    \u0275\u0275template(30, StudentsCatalogueComponent_ng_container_86_div_30_Template, 3, 0, "div", 317);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 314)(32, "label", 315);
    \u0275\u0275text(33, "Objectifs personnels");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "textarea", 318);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 203)(36, "label", 315);
    \u0275\u0275text(37, "Priorit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "select", 319)(39, "option", 320);
    \u0275\u0275text(40, "\u{1F7E2} Basse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 321);
    \u0275\u0275text(42, "\u{1F7E1} Normale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 322);
    \u0275\u0275text(44, "\u{1F7E0} Haute");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 323);
    \u0275\u0275text(46, "\u{1F534} Urgente");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 203)(48, "label", 315);
    \u0275\u0275text(49, "Date souhait\xE9e de d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "input", 324);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 314)(52, "label", 325);
    \u0275\u0275text(53, "Commentaire ");
    \u0275\u0275elementStart(54, "span", 326);
    \u0275\u0275text(55, "(optionnel)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(56, "textarea", 327);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("background-color", ctx_r1.selectedCatalogue.couleur || "#069b8f");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCatalogue.image_couverture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedCatalogue.image_couverture);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedCatalogue.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedCatalogue.nombre_formations, " formation(s)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCatalogue);
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx_r1.form.get("motif_demande")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.form.get("motif_demande")) == null ? null : tmp_8_0.touched));
  }
}
function StudentsCatalogueComponent_button_91_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 354);
  }
}
function StudentsCatalogueComponent_button_91_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 355);
  }
}
function StudentsCatalogueComponent_button_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 351);
    \u0275\u0275listener("click", function StudentsCatalogueComponent_button_91_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitRequest());
    });
    \u0275\u0275template(1, StudentsCatalogueComponent_button_91_span_1_Template, 1, 0, "span", 352)(2, StudentsCatalogueComponent_button_91_i_2_Template, 1, 0, "i", 353);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.submitting || !ctx_r1.canSubmit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting ? "Envoi en cours..." : "Valider la demande", " ");
  }
}
var StudentsCatalogueComponent = class _StudentsCatalogueComponent {
  demandeFormationService;
  formationsService;
  fb;
  router;
  // ── VUE ─────────────────────────────────────────
  viewMode = "table";
  // ── LISTE DEMANDES ───────────────────────────────
  loading = true;
  allDemandes = [];
  demandes = [];
  searchDataValue = "";
  selectedStatus = "";
  totalData = 0;
  pageSize = 10;
  currentPage = 1;
  skip = 0;
  limit = 10;
  hoveredMotifId = null;
  // ── TOAST ────────────────────────────────────────
  toast = { type: "success", message: "", visible: false };
  toastTimer;
  // ── MODAL DÉTAIL DEMANDE ─────────────────────────
  demandeSelectionnee = null;
  detailDemandeModal;
  // ── DÉTAIL — FORMATIONS DU CATALOGUE ─────────────
  formationsCatalogue = [];
  loadingFormations = false;
  // ── ACCORDÉON FORMATIONS (modal détail) ──────────
  openFormations = /* @__PURE__ */ new Set();
  // ── MODAL NOUVELLE DEMANDE ───────────────────────
  submitting = false;
  modalInstance;
  showFormations = false;
  catalogues = [];
  loadingCatalogues = false;
  selectedCatalogue = null;
  // Formations dans le modal de création (collapsible)
  formationsCatalogueModal = [];
  loadingFormationsModal = false;
  form;
  constructor(demandeFormationService, formationsService, fb, router) {
    this.demandeFormationService = demandeFormationService;
    this.formationsService = formationsService;
    this.fb = fb;
    this.router = router;
  }
  ngOnInit() {
    this.loadDemandes();
    this.form = this.fb.group({
      motif_demande: ["", Validators.required],
      objectifs_personnels: [""],
      priorite: ["normale"],
      date_souhaitee_debut: [null],
      commentaire_employe: [""]
    });
  }
  // ── TOGGLE VUE ───────────────────────────────────
  setView(mode) {
    this.viewMode = mode;
  }
  // ── STATS ────────────────────────────────────────
  get totalDemandes() {
    return this.allDemandes.length;
  }
  get totalEnAttente() {
    return this.allDemandes.filter((d) => d.statut === "en_attente").length;
  }
  get totalValidees() {
    return this.allDemandes.filter((d) => d.statut === "validee").length;
  }
  get totalRefusees() {
    return this.allDemandes.filter((d) => d.statut === "refusee").length;
  }
  get totalAnnulees() {
    return this.allDemandes.filter((d) => d.statut === "annulee").length;
  }
  // ── CHARGEMENT DEMANDES ──────────────────────────
  loadDemandes() {
    this.loading = true;
    this.demandeFormationService.getMesDemandes().subscribe({
      next: (res) => {
        const raw = res.demandes ?? res;
        this.allDemandes = raw.filter((d) => d.type_demande === "catalogue").map((d) => this.normaliserDemande(d));
        this.totalData = this.allDemandes.length;
        this.getTableData(this.skip, this.limit);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  normaliserDemande(d) {
    return __spreadProps(__spreadValues({}, d), {
      titre_affiche: d.catalogue?.titre ?? `Catalogue #${d.catalogue_id}`,
      sous_titre_affiche: d.catalogue?.description ?? "",
      image_affiche: d.catalogue?.image_couverture ? d.catalogue.image_couverture.startsWith("http") ? d.catalogue.image_couverture : `${environment.apiUrl.replace("/api", "")}/storage/${d.catalogue.image_couverture}` : "assets/img/course/course-01.jpg"
    });
  }
  // ── FILTRES + PAGINATION ─────────────────────────
  getTableData(skip, limit) {
    let filtered = [...this.allDemandes];
    if (this.selectedStatus)
      filtered = filtered.filter((d) => d.statut === this.selectedStatus);
    if (this.searchDataValue) {
      const s = this.searchDataValue.toLowerCase();
      filtered = filtered.filter((d) => d.titre_affiche?.toLowerCase().includes(s) || d.sous_titre_affiche?.toLowerCase().includes(s));
    }
    this.totalData = filtered.length;
    this.demandes = filtered.slice(skip, skip + limit);
  }
  searchData(v) {
    this.searchDataValue = v;
    this.currentPage = 1;
    this.skip = 0;
    this.getTableData(0, this.limit);
  }
  filterByStatus(s) {
    this.selectedStatus = s;
    this.currentPage = 1;
    this.skip = 0;
    this.getTableData(0, this.limit);
  }
  resetFilters() {
    this.searchDataValue = "";
    this.selectedStatus = "";
    this.currentPage = 1;
    this.skip = 0;
    this.getTableData(0, this.limit);
  }
  onPageChange(page) {
    this.currentPage = page;
    this.skip = (page - 1) * this.pageSize;
    this.getTableData(this.skip, this.pageSize);
  }
  // ── TOOLTIP MOTIF ────────────────────────────────
  showMotif(id) {
    this.hoveredMotifId = id;
  }
  hideMotif() {
    this.hoveredMotifId = null;
  }
  isMotifVisible(id) {
    return this.hoveredMotifId === id;
  }
  // ── ACTIONS ──────────────────────────────────────
  annulerDemande(id, event) {
    event?.stopPropagation();
    if (!confirm("Confirmer l'annulation de cette demande ?"))
      return;
    this.demandeFormationService.annulerDemande(id).subscribe({
      next: () => {
        this.fermerDetailDemande();
        this.showToast("success", "\u2705 Demande annul\xE9e avec succ\xE8s.");
        this.loadDemandes();
      },
      error: () => this.showToast("error", "\u274C Impossible d'annuler cette demande.")
    });
  }
  relancerDemande(id, event) {
    event?.stopPropagation();
    this.demandeFormationService.relancerDemande(id).subscribe({
      next: () => {
        this.fermerDetailDemande();
        this.showToast("success", "\u2705 Demande relanc\xE9e avec succ\xE8s.");
        this.loadDemandes();
      },
      error: () => this.showToast("error", "\u274C Impossible de relancer cette demande.")
    });
  }
  // ── TOAST ────────────────────────────────────────
  showToast(type, message) {
    clearTimeout(this.toastTimer);
    this.toast = { type, message, visible: true };
    this.toastTimer = setTimeout(() => this.toast.visible = false, 4e3);
  }
  closeToast() {
    this.toast.visible = false;
    clearTimeout(this.toastTimer);
  }
  // ════════════════════════════════════════════════
  // MODAL DÉTAIL DEMANDE
  // ════════════════════════════════════════════════
  ouvrirDetailDemande(demande, event) {
    const target = event?.target;
    if (target?.closest(".sc-btn-annuler, .sc-btn-relancer, .sc-motif-wrapper"))
      return;
    this.demandeSelectionnee = __spreadValues({}, demande);
    this.formationsCatalogue = [];
    this.loadingFormations = false;
    this.openFormations.clear();
    const el = document.getElementById("catalogueDemandeDetailModal");
    if (el) {
      this.detailDemandeModal = new bootstrap.Modal(el, { backdrop: true, keyboard: true });
      this.detailDemandeModal.show();
    }
    const catalogueId = demande.catalogue_id ?? demande.catalogue?.id;
    if (catalogueId) {
      this.loadingFormations = true;
      this.formationsService.getCatalogueDetail(catalogueId).subscribe({
        next: (res) => {
          this.formationsCatalogue = res.formations ?? res.catalogue?.formations ?? [];
          this.loadingFormations = false;
        },
        error: () => {
          this.loadingFormations = false;
        }
      });
    }
  }
  fermerDetailDemande() {
    this.detailDemandeModal?.hide();
    this.demandeSelectionnee = null;
    this.formationsCatalogue = [];
    this.loadingFormations = false;
    this.openFormations.clear();
  }
  // ── ACCORDÉON FORMATIONS MODAL ───────────────────
  toggleFormation(demandeId, index) {
    const key = `${demandeId}_${index}`;
    this.openFormations.has(key) ? this.openFormations.delete(key) : this.openFormations.add(key);
  }
  isFormationOpen(demandeId, index) {
    return this.openFormations.has(`${demandeId}_${index}`);
  }
  // ── NAVIGATION VERS FORMATION ────────────────────
  voirFormation(formation) {
    this.detailDemandeModal?.hide();
    this.router.navigate(["/courses/course-details-2", formation.id], {
      state: {
        fromPage: "catalogue",
        fromCatalogue: true,
        catalogueId: this.demandeSelectionnee?.catalogue_id,
        catalogueTitre: this.demandeSelectionnee?.titre_affiche
      }
    });
  }
  // ════════════════════════════════════════════════
  // MODAL NOUVELLE DEMANDE
  // ════════════════════════════════════════════════
  openRequestModal() {
    this.resetModal();
    this.loadCatalogues();
    const el = document.getElementById("demandeCatalogueModal");
    if (el) {
      this.modalInstance = new bootstrap.Modal(el, { backdrop: "static", keyboard: false });
      this.modalInstance.show();
    }
  }
  closeModal() {
    this.modalInstance?.hide();
    this.resetModal();
  }
  resetModal() {
    this.catalogues = [];
    this.selectedCatalogue = null;
    this.formationsCatalogueModal = [];
    this.showFormations = false;
    this.loadingFormationsModal = false;
    this.submitting = false;
    this.form.reset({ priorite: "normale" });
  }
  loadCatalogues() {
    this.loadingCatalogues = true;
    this.formationsService.getCatalogues().subscribe({
      next: (res) => {
        this.catalogues = res.catalogues ?? [];
        this.loadingCatalogues = false;
      },
      error: () => {
        this.loadingCatalogues = false;
        this.showToast("error", "\u274C Erreur lors du chargement des catalogues.");
      }
    });
  }
  // ✅ FIX : loadingFormationsModal = true AVANT l'appel, pas dans loadFormationsDuCatalogue
  selectCatalogue(catalogue) {
    this.selectedCatalogue = catalogue;
    this.formationsCatalogueModal = [];
    this.showFormations = false;
    this.loadingFormationsModal = true;
    this.loadFormationsDuCatalogue(catalogue.id);
  }
  loadFormationsDuCatalogue(catalogueId) {
    this.formationsService.getCatalogueDetail(catalogueId).subscribe({
      next: (res) => {
        const formations = res.formations ?? res.catalogue?.formations ?? [];
        console.log("Formations catalogue re\xE7ues:", formations.length, formations);
        this.formationsCatalogueModal = formations;
        if (formations.length > 0) {
          this.showFormations = true;
        }
        this.loadingFormationsModal = false;
      },
      error: () => {
        this.loadingFormationsModal = false;
      }
    });
  }
  retourCatalogues() {
    this.selectedCatalogue = null;
    this.formationsCatalogueModal = [];
    this.showFormations = false;
    this.loadingFormationsModal = false;
  }
  canSubmit() {
    return !!this.selectedCatalogue && this.form.valid;
  }
  submitRequest() {
    if (!this.canSubmit())
      return;
    this.submitting = true;
    const fv = this.form.value;
    const date = fv.date_souhaitee_debut ? new Date(fv.date_souhaitee_debut).toISOString().split("T")[0] : void 0;
    const payload = {
      type_demande: "catalogue",
      catalogue_id: this.selectedCatalogue.id,
      motif_demande: fv.motif_demande,
      objectifs_personnels: fv.objectifs_personnels,
      priorite: fv.priorite,
      commentaire_employe: fv.commentaire_employe
    };
    if (date)
      payload.date_souhaitee_debut = date;
    this.demandeFormationService.creerDemande(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.closeModal();
        setTimeout(() => {
          this.showToast("success", "\u2705 Votre demande de catalogue a \xE9t\xE9 envoy\xE9e avec succ\xE8s !");
          this.loadDemandes();
        }, 300);
      },
      error: (err) => this.handleError(err)
    });
  }
  handleError(err) {
    this.submitting = false;
    if (err.status === 409)
      this.showToast("warning", "\u26A0\uFE0F Vous avez d\xE9j\xE0 une demande en cours pour ce catalogue.");
    else if (err.status === 422)
      this.showToast("error", "\u274C Veuillez v\xE9rifier les champs obligatoires.");
    else
      this.showToast("error", "\u274C Une erreur est survenue. Veuillez r\xE9essayer.");
  }
  // ── HELPERS CSS ──────────────────────────────────
  getPrioriteClass(p) {
    return { urgente: "priorite-urgente", haute: "priorite-haute", normale: "priorite-normale", basse: "priorite-basse" }[p] ?? "priorite-normale";
  }
  getStatutClass(s) {
    return { en_attente: "statut-attente", validee: "statut-validee", refusee: "statut-refusee", annulee: "statut-annulee" }[s] ?? "";
  }
  static \u0275fac = function StudentsCatalogueComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentsCatalogueComponent)(\u0275\u0275directiveInject(DemandeFormationService), \u0275\u0275directiveInject(FormationsService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentsCatalogueComponent, selectors: [["app-students-catalogue"]], decls: 92, vars: 48, consts: [[1, "lms-toast-container"], [1, "lms-toast"], [1, "lms-toast__icon"], ["class", "isax isax-tick-circle-filled", 4, "ngIf"], ["class", "isax isax-close-circle-filled", 4, "ngIf"], ["class", "isax isax-warning-2-filled", 4, "ngIf"], [1, "lms-toast__body"], [1, "lms-toast__label"], [1, "lms-toast__message"], [1, "lms-toast__close", 3, "click"], [1, "isax", "isax-close-square"], [1, "lms-toast__progress"], [1, "sc-header", "mb-4"], [1, "sc-header__left"], [1, "sc-header__title"], [1, "sc-header__subtitle"], [1, "sc-header__actions"], ["title", "Vue tableau", 1, "sc-header__toggle-btn", 3, "click"], [1, "isax", "isax-row-vertical"], ["title", "Vue grille", 1, "sc-header__toggle-btn", 3, "click"], [1, "isax", "isax-element-3"], [1, "sc-header__new-btn", 3, "click"], [1, "isax", "isax-add-circle"], ["class", "pq-kpi-grid mb-4", 4, "ngIf"], [1, "sc-filters", "mb-4"], [1, "sc-filters__search"], [1, "isax", "isax-search-normal-1", "sc-filters__search-icon"], ["type", "search", "placeholder", "Rechercher un catalogue...", 1, "sc-filters__search-input", 3, "ngModelChange", "ngModel"], [1, "sc-filters__pills"], [1, "sc-filters__pill", 3, "click"], [1, "sc-filters__pill", "sc-filters__pill--attente", 3, "click"], ["class", "sc-filters__pill-count", 4, "ngIf"], [1, "sc-filters__pill", "sc-filters__pill--validee", 3, "click"], [1, "sc-filters__pill", "sc-filters__pill--refusee", 3, "click"], [1, "sc-filters__pill", "sc-filters__pill--annulee", 3, "click"], [1, "sc-filters__reset", 3, "click"], [1, "isax", "isax-refresh"], ["class", "sc-loading", 4, "ngIf"], [4, "ngIf"], ["class", "sc-empty", 4, "ngIf"], [3, "totalItems", "pageSize", "currentPage", "pageChange", 4, "ngIf"], ["id", "catalogueDemandeDetailModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered", "modal-dialog-scrollable"], ["class", "modal-content lms-modal", 4, "ngIf"], ["id", "demandeCatalogueModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-content", "lms-modal"], [1, "modal-header", "lms-modal__header"], [1, "d-flex", "align-items-center", "gap-3"], [1, "lms-modal__icon"], [1, "isax", "isax-book-saved"], [1, "modal-title", "mb-0"], ["type", "button", 1, "btn-close", "btn-close-white", 3, "click"], [1, "lms-progress-bar"], [1, "lms-progress-bar__step"], [1, "lms-progress-bar__dot"], [1, "lms-progress-bar__label"], [1, "lms-progress-bar__line"], [1, "isax", "isax-send-2"], [1, "modal-body", "lms-modal__body"], [1, "modal-footer", "lms-modal__footer"], [1, "btn", "lms-btn-cancel", 3, "click"], [1, "isax", "isax-close-square", "me-1"], ["class", "btn lms-btn-submit", 3, "disabled", "click", 4, "ngIf"], [1, "isax", "isax-tick-circle-filled"], [1, "isax", "isax-close-circle-filled"], [1, "isax", "isax-warning-2-filled"], [1, "pq-kpi-grid", "mb-4"], [1, "pq-kpi-card", "pq-kpi-card--teal", 3, "click"], [1, "pq-kpi-card__icon"], [1, "pq-kpi-card__body"], [1, "pq-kpi-card__value"], [1, "pq-kpi-card__label"], [1, "pq-kpi-card", "pq-kpi-card--orange", 3, "click"], [1, "isax", "isax-clock"], [1, "pq-kpi-card", "pq-kpi-card--green", 3, "click"], [1, "isax", "isax-tick-circle"], [1, "pq-kpi-card", "pq-kpi-card--red", 3, "click"], [1, "isax", "isax-close-circle"], [1, "pq-kpi-card", "pq-kpi-card--gray", 3, "click"], [1, "isax", "isax-minus-cirlce"], [1, "sc-filters__pill-count"], [1, "sc-loading"], [1, "sc-loading__spinner"], ["class", "card sc-table-card", 4, "ngIf"], [1, "card", "sc-table-card"], [1, "card-header", "sc-table-card__header"], [1, "sc-table-card__title"], [1, "isax", "isax-book-saved", "text-primary", "me-2"], [1, "sc-table-card__count"], [1, "text-muted", 2, "font-size", "11px"], [1, "isax", "isax-mouse-circle", "me-1"], [1, "table-responsive"], [1, "table", "sc-table", "align-middle", "mb-0"], [2, "min-width", "300px"], [1, "text-center"], [1, "text-center", 2, "min-width", "160px"], ["class", "sc-table-row", 3, "sc-row--refusee", "sc-row--validee", "click", 4, "ngFor", "ngForOf"], [1, "sc-table-row", 3, "click"], [1, "sc-formation"], ["alt", "", 1, "sc-formation__thumb", 3, "src"], [1, "sc-formation__info"], [1, "sc-formation__title"], ["class", "sc-formation__sub", 4, "ngIf"], [1, "sc-formation__details"], ["class", "sc-detail-chip", 4, "ngIf"], [1, "sc-date"], [1, "sc-date", "sc-date--time", "d-block"], [1, "sc-priorite", 3, "ngClass"], [1, "sc-statut-cell"], [1, "sc-statut", 3, "ngClass"], ["class", "sc-motif-wrapper", 3, "mouseenter", "mouseleave", "click", 4, "ngIf"], [1, "text-center", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2"], ["class", "sc-statut-icon", 3, "title", 4, "ngIf"], [1, "sc-formation__sub"], [1, "isax", "isax-book-saved", "me-1"], [1, "sc-detail-chip"], [1, "isax", "isax-book", "me-1"], [1, "isax", "isax-tag", "me-1"], [1, "isax", "isax-category", "me-1"], [1, "sc-motif-wrapper", 3, "mouseenter", "mouseleave", "click"], [1, "sc-motif-btn"], [1, "isax", "isax-info-circle"], ["class", "sc-motif-tooltip", 4, "ngIf"], [1, "sc-motif-tooltip"], [1, "sc-motif-tooltip__header"], [1, "isax", "isax-close-circle", "me-1"], [1, "sc-motif-tooltip__body"], ["class", "sc-motif-tooltip__footer", 4, "ngIf"], [1, "sc-motif-tooltip__footer"], [1, "isax", "isax-message-text", "me-1"], ["title", "Annuler la demande", 1, "sc-action-btn", "sc-action-btn--danger", 3, "click"], [1, "sc-action-btn__tooltip"], ["title", "Relancer la demande", 1, "sc-action-btn", "sc-action-btn--primary", 3, "click"], [1, "sc-statut-icon", 3, "title"], ["class", "isax isax-tick-circle sc-statut-icon--validee", 4, "ngIf"], ["class", "isax isax-close-circle sc-statut-icon--refusee", 4, "ngIf"], ["class", "isax isax-minus-cirlce sc-statut-icon--annulee", 4, "ngIf"], [1, "isax", "isax-tick-circle", "sc-statut-icon--validee"], [1, "isax", "isax-close-circle", "sc-statut-icon--refusee"], [1, "isax", "isax-minus-cirlce", "sc-statut-icon--annulee"], ["class", "sc-grid", 4, "ngIf"], [1, "sc-grid"], ["class", "sc-grid-card", 3, "sc-grid-card--validee", "sc-grid-card--refusee", "sc-grid-card--attente", "click", 4, "ngFor", "ngForOf"], [1, "sc-grid-card", 3, "click"], [1, "sc-grid-card__cover"], [1, "sc-grid-card__img", 3, "src", "alt"], [1, "sc-grid-card__cover-overlay"], [1, "sc-priorite", "sc-grid-card__priorite", 3, "ngClass"], [1, "sc-grid-card__body"], [1, "sc-grid-card__title"], ["class", "sc-grid-card__sub", 4, "ngIf"], [1, "sc-grid-card__chips"], [1, "sc-grid-card__footer", 3, "click"], [1, "sc-grid-card__date"], [1, "isax", "isax-calendar-1"], [1, "sc-grid-card__actions"], ["class", "sc-grid-motif-btn", 3, "click", 4, "ngIf"], [1, "sc-grid-card__sub"], ["title", "Annuler", 1, "sc-btn-annuler", "sc-btn--xs", 3, "click"], ["title", "Relancer", 1, "sc-btn-relancer", "sc-btn--xs", 3, "click"], [1, "sc-grid-motif-btn", 3, "click"], [1, "isax", "isax-info-circle", "me-1"], [1, "sc-empty"], [1, "sc-empty__icon"], [1, "sc-empty__title"], [3, "pageChange", "totalItems", "pageSize", "currentPage"], [1, "lms-detail-chips", "mb-4"], [1, "lms-detail-chips__left"], [1, "sc-priorite", "ms-2", 3, "ngClass"], ["class", "lms-meta-chip ms-2", 4, "ngIf"], [1, "lms-detail-section", "mb-3"], [1, "lms-detail-section__title"], [1, "isax", "isax-book-saved", "me-2"], [1, "lms-formation-banner", "mt-2"], ["alt", "", 1, "lms-formation-banner__img", 3, "src"], [1, "lms-formation-banner__body"], [1, "lms-formation-banner__title"], ["class", "lms-formation-banner__sub", 4, "ngIf"], [1, "lms-formation-banner__tags"], ["class", "lms-meta-chip lms-meta-chip--teal", 4, "ngIf"], ["class", "lms-meta-chip lms-meta-chip--purple", 4, "ngIf"], [1, "row", "g-2", "mt-3"], ["class", "col-md-6", 4, "ngIf"], ["class", "lms-formation-desc mt-3", 4, "ngIf"], ["class", "lms-detail-section mb-3", 4, "ngIf"], [1, "isax", "isax-message-text", "me-2"], [1, "cd-demande-detail", "mt-2"], [1, "cd-demande-row"], [1, "cd-demande-label"], ["class", "cd-demande-row", 4, "ngIf"], ["class", "lms-detail-section lms-detail-section--danger mb-3", 4, "ngIf"], ["class", "lms-detail-section lms-detail-section--success mb-3", 4, "ngIf"], [1, "modal-footer", "lms-modal__footer", 2, "justify-content", "space-between"], [1, "d-flex", "gap-2"], [1, "btn", "sc-btn-annuler", 3, "click", "disabled"], [1, "btn", "sc-btn-relancer", 3, "click", "disabled"], [1, "isax", "isax-refresh", "me-1"], [1, "lms-meta-chip", "ms-2"], [1, "isax", "isax-calendar", "me-1"], [1, "lms-formation-banner__sub"], [1, "lms-meta-chip", "lms-meta-chip--teal"], [1, "lms-meta-chip", "lms-meta-chip--purple"], [1, "col-md-6"], [1, "lms-info-item"], [1, "isax", "isax-book", 2, "color", "#069b8f"], [1, "isax", "isax-tag", 2, "color", "#069b8f"], [1, "isax", "isax-calendar-2", 2, "color", "#069b8f"], [1, "isax", "isax-calendar-tick", 2, "color", "#069b8f"], [1, "lms-formation-desc", "mt-3"], [1, "lms-formation-desc__label"], [1, "isax", "isax-document-text"], [1, "lms-formation-desc__text"], [1, "lms-modules-header"], [1, "lms-modules-header__left"], [1, "lms-detail-section__title", "mb-0"], [1, "isax", "isax-book", "me-2"], ["class", "lms-modules-breadcrumb mt-1", 4, "ngIf"], ["class", "text-center py-4", 4, "ngIf"], ["class", "lms-accordion mt-3", 4, "ngIf"], ["class", "lms-empty-inline mt-3", 4, "ngIf"], [1, "lms-modules-breadcrumb", "mt-1"], [1, "lms-modules-breadcrumb__item"], [1, "isax", "isax-book-1", "me-1"], [1, "text-center", "py-4"], [1, "spinner-border", "spinner-border-sm", "me-2", "text-primary"], [1, "text-muted", 2, "font-size", "13px"], [1, "lms-accordion", "mt-3"], ["class", "lms-accordion__item", 4, "ngFor", "ngForOf"], [1, "lms-accordion__item"], [1, "lms-accordion__header", 3, "click"], [1, "lms-accordion__header-left"], [1, "lms-accordion__num"], [1, "lms-accordion__title"], ["class", "lms-accordion__sub", 4, "ngIf"], [1, "lms-accordion__header-right"], ["class", "lms-accordion__count lms-accordion__count--teal", 4, "ngIf"], ["class", "lms-accordion__count lms-accordion__count--purple", 4, "ngIf"], ["class", "lms-accordion__count lms-accordion__count--warning", 4, "ngIf"], [1, "isax", "lms-accordion__chevron"], ["class", "lms-accordion__body", 4, "ngIf"], [1, "lms-accordion__sub"], [1, "isax", "isax-teacher", "me-1"], [1, "lms-accordion__count", "lms-accordion__count--teal"], [1, "isax", "isax-clock", "me-1"], [1, "lms-accordion__count", "lms-accordion__count--purple"], [1, "lms-accordion__count", "lms-accordion__count--warning"], [1, "isax", "isax-award", "me-1"], [1, "lms-accordion__body"], [1, "lms-formation-detail-body"], ["class", "lms-formation-detail-body__img-wrap", 4, "ngIf"], [1, "lms-formation-detail-body__content"], [1, "d-flex", "flex-wrap", "gap-1", "mb-2"], ["class", "lms-meta-chip", 4, "ngIf"], ["class", "lms-meta-chip lms-meta-chip--warning", 4, "ngIf"], ["class", "lms-formation-detail-body__desc", 4, "ngIf"], [1, "sc-btn-voir-formation", "mt-2", 3, "click"], [1, "isax", "isax-eye", "me-1"], [1, "lms-formation-detail-body__img-wrap"], ["alt", "", 1, "lms-formation-detail-body__img", 3, "src"], [1, "lms-meta-chip"], [1, "isax", "isax-chart", "me-1"], [1, "lms-meta-chip", "lms-meta-chip--warning"], [1, "isax", "isax-language-square", "me-1"], [1, "lms-formation-detail-body__desc"], [1, "lms-empty-inline", "mt-3"], [1, "isax", "isax-book"], [1, "lms-detail-section", "lms-detail-section--danger", "mb-3"], [1, "isax", "isax-close-circle", "me-2"], [1, "lms-detail-section__body"], ["class", "lms-detail-section__body mt-1 fst-italic", 4, "ngIf"], [1, "lms-detail-section__body", "mt-1", "fst-italic"], [1, "lms-detail-section", "lms-detail-section--success", "mb-3"], [1, "isax", "isax-tick-circle", "me-2"], ["class", "lms-detail-section__body mt-1", 4, "ngIf"], [1, "lms-detail-section__body", "mt-1"], [1, "isax", "isax-arrow-right-3", "me-1", 2, "font-size", "10px"], [1, "lms-step__header", "mb-3"], [1, "lms-step__number", "lms-step__number--blue"], [1, "lms-step__title"], [1, "text-danger"], ["class", "lms-loading", 4, "ngIf"], ["class", "lms-list", 4, "ngIf"], ["class", "lms-empty-inline", 4, "ngIf"], [1, "lms-loading"], [1, "spinner-border", "text-primary"], [1, "lms-list"], ["class", "lms-list-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "lms-list-item", 3, "click"], [1, "lms-list-item__icon-wrap"], ["class", "lms-list-item__img", "alt", "", 3, "src", 4, "ngIf"], ["class", "isax isax-book-saved", 3, "color", 4, "ngIf"], [1, "lms-list-item__body"], [1, "lms-list-item__title"], ["class", "lms-list-item__desc", 4, "ngIf"], [1, "lms-list-item__meta"], [1, "lms-list-item__arrow"], [1, "isax", "isax-arrow-right-3"], ["alt", "", 1, "lms-list-item__img", 3, "src"], [1, "lms-list-item__desc"], [1, "lms-empty-inline"], [1, "lms-back-btn", "mb-3", 3, "click"], [1, "isax", "isax-arrow-left", "me-1"], [1, "lms-selected-recap", "mb-4"], [1, "lms-selected-recap__icon"], ["class", "lms-selected-recap__img", "alt", "", 3, "src", 4, "ngIf"], ["class", "isax isax-book-saved", 4, "ngIf"], [1, "lms-selected-recap__body"], [1, "lms-selected-recap__label"], [1, "lms-selected-recap__title"], ["class", "lms-collapsible mb-4", 4, "ngIf"], [1, "lms-divider"], [3, "formGroup"], [1, "row", "g-3"], [1, "col-12"], [1, "form-label", "fw-semibold"], ["formControlName", "motif_demande", "rows", "3", "placeholder", "Pourquoi souhaitez-vous ce catalogue ?", 1, "form-control", "lms-input"], ["class", "lms-field-error", 4, "ngIf"], ["formControlName", "objectifs_personnels", "rows", "2", "placeholder", "Qu'esp\xE9rez-vous acqu\xE9rir avec ce catalogue ?", 1, "form-control", "lms-input"], ["formControlName", "priorite", 1, "form-select", "lms-input"], ["value", "basse"], ["value", "normale"], ["value", "haute"], ["value", "urgente"], ["type", "date", "formControlName", "date_souhaitee_debut", 1, "form-control", "lms-input"], [1, "form-label"], [1, "text-muted", "small"], ["formControlName", "commentaire_employe", "rows", "2", "placeholder", "Informations compl\xE9mentaires...", 1, "form-control", "lms-input"], ["alt", "", 1, "lms-selected-recap__img", 3, "src"], [1, "lms-collapsible", "mb-4"], ["type", "button", 1, "lms-collapsible__trigger", 3, "click"], ["class", "lms-meta-chip lms-meta-chip--teal ms-2", 4, "ngIf"], ["class", "spinner-border spinner-border-sm text-primary ms-2", 4, "ngIf"], [1, "isax"], ["class", "lms-collapsible__body", 4, "ngIf"], [1, "lms-meta-chip", "lms-meta-chip--teal", "ms-2"], [1, "spinner-border", "spinner-border-sm", "text-primary", "ms-2"], [1, "lms-collapsible__body"], ["class", "lms-loading py-3", 4, "ngIf"], ["class", "lms-formations-list", 4, "ngIf"], [1, "lms-loading", "py-3"], [1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "lms-formations-list"], ["class", "lms-formation-item", 4, "ngFor", "ngForOf"], [1, "lms-formation-item"], [1, "lms-formation-item__num"], ["alt", "", 1, "lms-formation-item__img", 3, "src"], [1, "lms-formation-item__body"], [1, "lms-formation-item__title"], [1, "lms-formation-item__meta"], [1, "lms-field-error"], [1, "btn", "lms-btn-submit", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "isax isax-send-2 me-2", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "isax", "isax-send-2", "me-2"]], template: function StudentsCatalogueComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275template(3, StudentsCatalogueComponent_i_3_Template, 1, 0, "i", 3)(4, StudentsCatalogueComponent_i_4_Template, 1, 0, "i", 4)(5, StudentsCatalogueComponent_i_5_Template, 1, 0, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "span", 7);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275listener("click", function StudentsCatalogueComponent_Template_button_click_11_listener() {
        return ctx.closeToast();
      });
      \u0275\u0275element(12, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "div", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 12)(15, "div", 13)(16, "h3", 14);
      \u0275\u0275text(17, "Mes demandes de catalogues");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 15);
      \u0275\u0275text(19, "Suivez l'\xE9tat de vos demandes de catalogues soumises \xE0 l'entreprise");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 16)(21, "button", 17);
      \u0275\u0275listener("click", function StudentsCatalogueComponent_Template_button_click_21_listener() {
        return ctx.setView("table");
      });
      \u0275\u0275element(22, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 19);
      \u0275\u0275listener("click", function StudentsCatalogueComponent_Template_button_click_23_listener() {
        return ctx.setView("grid");
      });
      \u0275\u0275element(24, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 21);
      \u0275\u0275listener("click", function StudentsCatalogueComponent_Template_button_click_25_listener() {
        return ctx.openRequestModal();
      });
      \u0275\u0275element(26, "i", 22);
      \u0275\u0275text(27, " Nouvelle demande ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(28, StudentsCatalogueComponent_div_28_Template, 41, 15, "div", 23);
      \u0275\u0275elementStart(29, "div", 24)(30, "div", 25);
      \u0275\u0275element(31, "i", 26);
      \u0275\u0275elementStart(32, "input", 27);
      \u0275\u0275twoWayListener("ngModelChange", function StudentsCatalogueComponent_Template_input_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function StudentsCatalogueComponent_Template_input_ngModelChange_32_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 28)(34, "button", 29);
      \u0275\u0275listener("click", function StudentsCatalogueComponent_Template_button_click_34_listener() {
        return ctx.filterByStatus("");
      });
      \u0275\u0275text(35, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 30);
      \u0275\u0275listener("click", function StudentsCatalogueComponent_Template_button_click_36_listener() {
        return ctx.filterByStatus("en_attente");
      });
      \u0275\u0275text(37, " En attente ");
      \u0275\u0275template(38, StudentsCatalogueComponent_span_38_Template, 2, 1, "span", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "button", 32);
      \u0275\u0275listener("click", function StudentsCatalogueComponent_Template_button_click_39_listener() {
        return ctx.filterByStatus("validee");
      });
      \u0275\u0275text(40, " Valid\xE9e ");
      \u0275\u0275template(41, StudentsCatalogueComponent_span_41_Template, 2, 1, "span", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 33);
      \u0275\u0275listener("click", function StudentsCatalogueComponent_Template_button_click_42_listener() {
        return ctx.filterByStatus("refusee");
      });
      \u0275\u0275text(43, " Refus\xE9e ");
      \u0275\u0275template(44, StudentsCatalogueComponent_span_44_Template, 2, 1, "span", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "button", 34);
      \u0275\u0275listener("click", function StudentsCatalogueComponent_Template_button_click_45_listener() {
        return ctx.filterByStatus("annulee");
      });
      \u0275\u0275text(46, " Annul\xE9e ");
      \u0275\u0275template(47, StudentsCatalogueComponent_span_47_Template, 2, 1, "span", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "button", 35);
      \u0275\u0275listener("click", function StudentsCatalogueComponent_Template_button_click_48_listener() {
        return ctx.resetFilters();
      });
      \u0275\u0275element(49, "i", 36);
      \u0275\u0275text(50, " R\xE9initialiser ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(51, StudentsCatalogueComponent_div_51_Template, 4, 0, "div", 37)(52, StudentsCatalogueComponent_ng_container_52_Template, 2, 1, "ng-container", 38)(53, StudentsCatalogueComponent_ng_container_53_Template, 2, 1, "ng-container", 38)(54, StudentsCatalogueComponent_div_54_Template, 7, 0, "div", 39)(55, StudentsCatalogueComponent_app_custom_pagination_55_Template, 1, 3, "app-custom-pagination", 40);
      \u0275\u0275elementStart(56, "div", 41)(57, "div", 42);
      \u0275\u0275template(58, StudentsCatalogueComponent_div_58_Template, 69, 34, "div", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 44)(60, "div", 42)(61, "div", 45)(62, "div", 46)(63, "div", 47)(64, "div", 48);
      \u0275\u0275element(65, "i", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div")(67, "h5", 50);
      \u0275\u0275text(68, "Demande de catalogue");
      \u0275\u0275elementEnd();
      \u0275\u0275template(69, StudentsCatalogueComponent_small_69_Template, 2, 0, "small", 38)(70, StudentsCatalogueComponent_small_70_Template, 3, 1, "small", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "button", 51);
      \u0275\u0275listener("click", function StudentsCatalogueComponent_Template_button_click_71_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 52)(73, "div", 53)(74, "span", 54);
      \u0275\u0275element(75, "i", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span", 55);
      \u0275\u0275text(77, "Catalogue");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(78, "div", 56);
      \u0275\u0275elementStart(79, "div", 53)(80, "span", 54);
      \u0275\u0275element(81, "i", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "span", 55);
      \u0275\u0275text(83, "Demande");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "div", 58);
      \u0275\u0275template(85, StudentsCatalogueComponent_ng_container_85_Template, 11, 3, "ng-container", 38)(86, StudentsCatalogueComponent_ng_container_86_Template, 57, 9, "ng-container", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 59)(88, "button", 60);
      \u0275\u0275listener("click", function StudentsCatalogueComponent_Template_button_click_88_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275element(89, "i", 61);
      \u0275\u0275text(90, "Annuler ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(91, StudentsCatalogueComponent_button_91_Template, 4, 4, "button", 62);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("visible", ctx.toast.visible);
      \u0275\u0275advance();
      \u0275\u0275classMap("lms-toast--" + ctx.toast.type);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.toast.type === "success");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.toast.type === "error");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.toast.type === "warning");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.toast.type === "success" ? "Succ\xE8s" : ctx.toast.type === "warning" ? "Attention" : "Erreur", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.toast.message);
      \u0275\u0275advance(11);
      \u0275\u0275classProp("sc-header__toggle-btn--active", ctx.viewMode === "table");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("sc-header__toggle-btn--active", ctx.viewMode === "grid");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", !ctx.loading && ctx.allDemandes.length > 0);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("sc-filters__pill--active", ctx.selectedStatus === "");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("sc-filters__pill--active", ctx.selectedStatus === "en_attente");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.totalEnAttente > 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("sc-filters__pill--active", ctx.selectedStatus === "validee");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.totalValidees > 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("sc-filters__pill--active", ctx.selectedStatus === "refusee");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.totalRefusees > 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("sc-filters__pill--active", ctx.selectedStatus === "annulee");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.totalAnnulees > 0);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.viewMode === "table");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.viewMode === "grid");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.demandes.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.totalData > ctx.pageSize);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.demandeSelectionnee);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", !ctx.selectedCatalogue);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedCatalogue);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", true)("done", !!ctx.selectedCatalogue);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("done", !!ctx.selectedCatalogue);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", !!ctx.selectedCatalogue);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", !ctx.selectedCatalogue);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedCatalogue);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.selectedCatalogue);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, CustomPaginationComponent, SlicePipe, DatePipe], styles: ['\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_toast-progress {\n  from {\n    width: 100%;\n  }\n  to {\n    width: 0%;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.pq-kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 12px;\n}\n@media (max-width: 1200px) {\n  .pq-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .pq-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .pq-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.pq-kpi-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border-top: 3px solid transparent;\n}\n.pq-kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: currentColor;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.pq-kpi-card__icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.pq-kpi-card__body[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.pq-kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #111827;\n  line-height: 1;\n}\n.pq-kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  margin-top: 2px;\n  white-space: nowrap;\n}\n.pq-kpi-card--teal[_ngcontent-%COMP%] {\n  border-top-color: #069b8f;\n}\n.pq-kpi-card--teal[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.pq-kpi-card--teal.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #069b8f;\n}\n.pq-kpi-card--green[_ngcontent-%COMP%] {\n  border-top-color: #16a34a;\n}\n.pq-kpi-card--green[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.pq-kpi-card--green.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n}\n.pq-kpi-card--orange[_ngcontent-%COMP%] {\n  border-top-color: #d97706;\n}\n.pq-kpi-card--orange[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.pq-kpi-card--orange.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #d97706;\n}\n.pq-kpi-card--red[_ngcontent-%COMP%] {\n  border-top-color: #dc2626;\n}\n.pq-kpi-card--red[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.pq-kpi-card--red.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.pq-kpi-card--gray[_ngcontent-%COMP%] {\n  border-top-color: #9ca3af;\n}\n.pq-kpi-card--gray[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.pq-kpi-card--gray.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #9ca3af;\n}\n.sc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.sc-header__title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #111827;\n  margin-bottom: 4px;\n  letter-spacing: -0.3px;\n}\n.sc-header__subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n  margin: 0;\n}\n.sc-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.sc-header__toggle-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid #e5e7eb;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sc-header__toggle-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sc-header__toggle-btn[_ngcontent-%COMP%]:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f5;\n}\n.sc-header__toggle-btn--active[_ngcontent-%COMP%] {\n  background: #069b8f !important;\n  border-color: #069b8f !important;\n  color: #fff !important;\n}\n.sc-header__new-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 20px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.4795031056, 115.7204968944, 106.7614906832) 100%);\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(6, 155, 143, 0.3);\n  transition: all 0.2s ease;\n}\n.sc-header__new-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.sc-header__new-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(6, 155, 143, 0.4);\n}\n.sc-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px 18px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.sc-filters__search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.sc-filters__search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  font-size: 15px;\n  pointer-events: none;\n}\n.sc-filters__search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 14px 9px 36px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 50px;\n  font-size: 13px;\n  outline: none;\n  transition: all 0.2s ease;\n  background: #f9fafb;\n}\n.sc-filters__search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.sc-filters__search-input[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.1);\n}\n.sc-filters__pills[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.sc-filters__pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid #e5e7eb;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-filters__pill[_ngcontent-%COMP%]:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f5;\n}\n.sc-filters__pill--active[_ngcontent-%COMP%] {\n  background: #069b8f !important;\n  border-color: #069b8f !important;\n  color: #fff !important;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.25);\n}\n.sc-filters__pill--attente[_ngcontent-%COMP%]:hover {\n  border-color: #d97706;\n  color: #d97706;\n  background: #fffbeb;\n}\n.sc-filters__pill--validee[_ngcontent-%COMP%]:hover {\n  border-color: #16a34a;\n  color: #16a34a;\n  background: #f0fdf4;\n}\n.sc-filters__pill--refusee[_ngcontent-%COMP%]:hover {\n  border-color: #dc2626;\n  color: #dc2626;\n  background: #fef2f2;\n}\n.sc-filters__pill--annulee[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  color: #4b5563;\n  background: #f3f4f6;\n}\n.sc-filters__pill-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  opacity: 0.8;\n}\n.sc-filters__reset[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #dc2626;\n  background: rgba(220, 38, 38, 0.06);\n  border: 1.5px solid rgba(220, 38, 38, 0.2);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-filters__reset[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.12);\n  border-color: #dc2626;\n}\n.sc-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px 0;\n  color: #9ca3af;\n}\n.sc-loading__spinner[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n.sc-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 13px;\n}\n.sc-table-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n  overflow: visible;\n}\n.sc-table-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  background: #fff;\n  border-bottom: 1px solid #f3f4f6;\n  border-radius: 12px 12px 0 0;\n}\n.sc-table-card__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  display: flex;\n  align-items: center;\n}\n.sc-table-card__count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 24px;\n  height: 24px;\n  padding: 0 8px;\n  background: #069b8f;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 700;\n  margin-left: 8px;\n}\n.sc-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n  padding: 12px 16px;\n  white-space: nowrap;\n}\n.sc-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  vertical-align: middle;\n}\n.sc-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.sc-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.sc-table-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.sc-table-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f9fafb !important;\n}\n.sc-row--refusee[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.025) !important;\n}\n.sc-row--validee[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.025) !important;\n}\n.sc-formation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.sc-formation__thumb[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 8px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid #e5e7eb;\n}\n.sc-formation__info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sc-formation__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1.3;\n  margin-bottom: 3px;\n}\n.sc-formation__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.sc-formation__details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.sc-detail-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 9px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n}\n.sc-detail-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.sc-detail-chip--award[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.1);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.sc-date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n  font-weight: 500;\n}\n.sc-date--time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 400;\n  margin-top: 1px;\n}\n.sc-priorite[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.sc-priorite.priorite-urgente[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n}\n.sc-priorite.priorite-haute[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.1);\n  color: #d97706;\n}\n.sc-priorite.priorite-normale[_ngcontent-%COMP%] {\n  background: rgba(6, 155, 143, 0.1);\n  color: #069b8f;\n}\n.sc-priorite.priorite-basse[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.sc-statut-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  position: relative;\n}\n.sc-statut[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.sc-statut.statut-attente[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.sc-statut.statut-validee[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.sc-statut.statut-refusee[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.sc-statut.statut-annulee[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #9ca3af;\n}\n.sc-statut-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.sc-statut-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.sc-statut-icon--validee[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.sc-statut-icon--refusee[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.sc-statut-icon--annulee[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.sc-motif-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.sc-motif-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #fef2f2;\n  color: #dc2626;\n  border: 1px solid rgba(220, 38, 38, 0.2);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sc-motif-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.sc-motif-btn[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.sc-motif-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(100% + 10px);\n  left: 50%;\n  transform: translateX(-50%);\n  width: 260px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.06);\n  z-index: 200;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fadeIn 0.15s ease;\n}\n.sc-motif-tooltip[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -6px;\n  left: 50%;\n  width: 12px;\n  height: 12px;\n  background: #fff;\n  border-right: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  transform: translateX(-50%) rotate(45deg);\n}\n.sc-motif-tooltip__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 14px;\n  background: #fef2f2;\n  color: #dc2626;\n  font-size: 12px;\n  font-weight: 700;\n}\n.sc-motif-tooltip__header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sc-motif-tooltip__body[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 13px;\n  color: #4b5563;\n  line-height: 1.5;\n  margin: 0;\n}\n.sc-motif-tooltip__footer[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  background: #f9fafb;\n  border-top: 1px solid #f3f4f6;\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: flex-start;\n  gap: 4px;\n}\n.sc-motif-tooltip__footer[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  line-height: 1.4;\n}\n.sc-action-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.sc-action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  transition: all 0.2s ease;\n}\n.sc-action-btn__tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%) translateY(4px);\n  background: #111827;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n  padding: 5px 10px;\n  border-radius: 6px;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.15s ease, transform 0.15s ease;\n  z-index: 100;\n}\n.sc-action-btn__tooltip[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 5px solid transparent;\n  border-top-color: #111827;\n}\n.sc-action-btn[_ngcontent-%COMP%]:hover   .sc-action-btn__tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0);\n}\n.sc-action-btn--danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-color: rgba(220, 38, 38, 0.25);\n}\n.sc-action-btn--danger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.sc-action-btn--danger[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n  border-color: #dc2626;\n  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.35);\n}\n.sc-action-btn--danger[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.sc-action-btn--primary[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  border-color: rgba(6, 155, 143, 0.25);\n}\n.sc-action-btn--primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #069b8f;\n}\n.sc-action-btn--primary[_ngcontent-%COMP%]:hover {\n  background: #069b8f;\n  border-color: #069b8f;\n  box-shadow: 0 4px 12px rgba(6, 155, 143, 0.35);\n}\n.sc-action-btn--primary[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.sc-btn-annuler[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid rgba(220, 38, 38, 0.3);\n  background: #fef2f2;\n  color: #dc2626;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-btn-annuler[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.sc-btn-annuler[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.sc-btn-annuler[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sc-btn-relancer[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid rgba(6, 155, 143, 0.3);\n  background: #e6f7f5;\n  color: #069b8f;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-btn-relancer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.sc-btn-relancer[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n}\n.sc-btn-relancer[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sc-grid-motif-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  border: 1.5px solid rgba(220, 38, 38, 0.3);\n  background: #fef2f2;\n  color: #dc2626;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-grid-motif-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.sc-grid-motif-btn[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.sc-btn--xs[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  padding: 0 !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50% !important;\n}\n.sc-btn--xs[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0 !important;\n}\n.sc-btn-voir-formation[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid rgba(6, 155, 143, 0.3);\n  background: #e6f7f5;\n  color: #069b8f;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sc-btn-voir-formation[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.sc-btn-voir-formation[_ngcontent-%COMP%]:hover {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n}\n.sc-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\n  gap: 20px;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.sc-grid-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n  cursor: pointer;\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.2s ease;\n  display: flex;\n  flex-direction: column;\n}\n.sc-grid-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n  border-color: #069b8f;\n}\n.sc-grid-card--validee[_ngcontent-%COMP%] {\n  border-top: 3px solid #16a34a;\n}\n.sc-grid-card--refusee[_ngcontent-%COMP%] {\n  border-top: 3px solid #dc2626;\n}\n.sc-grid-card--attente[_ngcontent-%COMP%] {\n  border-top: 3px solid #d97706;\n}\n.sc-grid-card__cover[_ngcontent-%COMP%] {\n  position: relative;\n  height: 155px;\n  overflow: hidden;\n  background: #f3f4f6;\n}\n.sc-grid-card__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.4s ease;\n}\n.sc-grid-card[_ngcontent-%COMP%]:hover   .sc-grid-card__img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.sc-grid-card__cover-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.6) 0%,\n      rgba(0, 0, 0, 0.1) 55%,\n      transparent 100%);\n  display: flex;\n  align-items: flex-end;\n  padding: 12px 14px;\n}\n.sc-grid-card__priorite[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 10px !important;\n  padding: 3px 9px !important;\n}\n.sc-grid-card__body[_ngcontent-%COMP%] {\n  padding: 14px 16px 12px;\n  flex: 1;\n}\n.sc-grid-card__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 4px;\n  line-height: 1.35;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.sc-grid-card__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.sc-grid-card__sub[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.sc-grid-card__chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-top: 8px;\n}\n.sc-grid-card__footer[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-top: 1px solid #f3f4f6;\n  background: #f9fafb;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.sc-grid-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.sc-grid-card__date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.sc-grid-card__date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.sc-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 72px 20px;\n  text-align: center;\n}\n.sc-empty__icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: #e6f7f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.sc-empty__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #069b8f;\n}\n.sc-empty__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #4b5563;\n  margin-bottom: 8px;\n}\n.sc-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n  margin-bottom: 20px;\n}\n.lms-modal[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  overflow: hidden;\n  border: none;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.lms-modal__header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.099378882, 105.900621118, 97.701863354) 100%);\n  padding: 18px 24px;\n  border: none;\n}\n.lms-modal__header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 12px;\n}\n.lms-modal__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.lms-modal[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n  font-size: 16px;\n}\n.lms-modal__body[_ngcontent-%COMP%] {\n  padding: 28px 24px;\n  background: #f9fafb;\n  max-height: 72vh;\n  overflow-y: auto;\n}\n.lms-modal__body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n.lms-modal__body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f3f4f6;\n}\n.lms-modal__body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.lms-modal__footer[_ngcontent-%COMP%] {\n  background: #fff;\n  border-top: 1px solid #e5e7eb;\n  padding: 16px 24px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.lms-detail-chips[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.lms-detail-chips__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.lms-detail-section[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 16px 18px;\n}\n.lms-detail-section__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #374151;\n  display: flex;\n  align-items: center;\n  margin-bottom: 2px;\n}\n.lms-detail-section__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #069b8f;\n}\n.lms-detail-section__body[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n  line-height: 1.6;\n  margin: 8px 0 0 0;\n}\n.lms-detail-section--danger[_ngcontent-%COMP%] {\n  border-color: rgba(220, 38, 38, 0.3);\n  background: #fef2f2;\n}\n.lms-detail-section--danger[_ngcontent-%COMP%]   .lms-detail-section__title[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.lms-detail-section--danger[_ngcontent-%COMP%]   .lms-detail-section__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.lms-detail-section--success[_ngcontent-%COMP%] {\n  border-color: rgba(22, 163, 74, 0.3);\n  background: #f0fdf4;\n}\n.lms-detail-section--success[_ngcontent-%COMP%]   .lms-detail-section__title[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.lms-detail-section--success[_ngcontent-%COMP%]   .lms-detail-section__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.lms-formation-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px;\n}\n.lms-formation-banner__img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid #e5e7eb;\n}\n.lms-formation-banner__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.lms-formation-banner__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 3px;\n}\n.lms-formation-banner__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.lms-formation-banner__tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.lms-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #f3f4f6;\n  height: 100%;\n  transition: all 0.2s ease;\n}\n.lms-info-item[_ngcontent-%COMP%]:hover {\n  border-color: rgba(6, 155, 143, 0.25);\n  background: #e6f7f5;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.lms-info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.lms-info-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  letter-spacing: 0.2px;\n  display: block;\n  margin-bottom: 2px;\n}\n.lms-info-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #111827;\n  display: block;\n}\n.lms-formation-desc[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  background: #e6f7f5;\n  border-radius: 8px;\n  border-left: 3px solid #069b8f;\n}\n.lms-formation-desc__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #069b8f;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-bottom: 6px;\n}\n.lms-formation-desc__label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.lms-formation-desc__text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n  line-height: 1.65;\n  margin: 0;\n  white-space: pre-line;\n}\n.lms-formation-desc--objectifs[_ngcontent-%COMP%] {\n  border-left-color: #d97706;\n  background: #fffbeb;\n}\n.lms-formation-desc--objectifs[_ngcontent-%COMP%]   .lms-formation-desc__label[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.lms-formation-desc--public[_ngcontent-%COMP%] {\n  border-left-color: #7c3aed;\n  background: #f5f3ff;\n}\n.lms-formation-desc--public[_ngcontent-%COMP%]   .lms-formation-desc__label[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.lms-formation-desc--prerequis[_ngcontent-%COMP%] {\n  border-left-color: #ea580c;\n  background: #fff7ed;\n}\n.lms-formation-desc--prerequis[_ngcontent-%COMP%]   .lms-formation-desc__label[_ngcontent-%COMP%] {\n  color: #ea580c;\n}\n.lms-modules-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.lms-modules-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 4px;\n}\n.lms-modules-breadcrumb__item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6b7280;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  border-radius: 50px;\n  padding: 3px 10px;\n}\n.lms-modules-breadcrumb__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #069b8f;\n}\n.lms-modules-breadcrumb__sep[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #d1d5db;\n}\n.lms-accordion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.lms-accordion__item[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #fff;\n  transition: box-shadow 0.2s ease;\n}\n.lms-accordion__item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.lms-accordion__header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  background: #f9fafb;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s ease;\n  gap: 12px;\n}\n.lms-accordion__header[_ngcontent-%COMP%]:hover {\n  background: #e6f7f5;\n}\n.lms-accordion__header--open[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  border-bottom: 1px solid rgba(6, 155, 143, 0.15);\n}\n.lms-accordion__header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n}\n.lms-accordion__header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.lms-accordion__num[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #069b8f;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.lms-accordion__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.lms-accordion__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  margin-top: 2px;\n}\n.lms-accordion__count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  border-radius: 50px;\n  padding: 2px 8px;\n  white-space: nowrap;\n}\n.lms-accordion__count--teal[_ngcontent-%COMP%] {\n  color: #069b8f;\n  background: rgba(6, 155, 143, 0.1);\n}\n.lms-accordion__count--purple[_ngcontent-%COMP%] {\n  color: #7c3aed;\n  background: rgba(124, 58, 237, 0.1);\n}\n.lms-accordion__count--warning[_ngcontent-%COMP%] {\n  color: #d97706;\n  background: rgba(217, 119, 6, 0.1);\n}\n.lms-accordion__chevron[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #069b8f;\n  transition: transform 0.2s ease;\n}\n.lms-accordion__body[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.15s ease;\n}\n.lms-formation-detail-body[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  padding: 14px 16px;\n  background: #f9fafb;\n}\n.lms-formation-detail-body__img-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.lms-formation-detail-body__img[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 8px;\n  object-fit: cover;\n  border: 1px solid #e5e7eb;\n}\n.lms-formation-detail-body__content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.lms-formation-detail-body__desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 6px 0 0 0;\n}\n.cd-demande-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.cd-demande-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid #f3f4f6;\n}\n.cd-demande-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cd-demande-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #9ca3af;\n  min-width: 130px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.lms-meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 9px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.lms-meta-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.lms-meta-chip--purple[_ngcontent-%COMP%] {\n  background: #f5f3ff;\n  color: #7c3aed;\n  border-color: rgba(124, 58, 237, 0.2);\n}\n.lms-meta-chip--teal[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  color: #069b8f;\n  border-color: rgba(6, 155, 143, 0.2);\n}\n.lms-meta-chip--warning[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.lms-meta-chip--success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.lms-meta-chip--orange[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  color: #ea580c;\n  border-color: rgba(234, 88, 12, 0.2);\n}\n.lms-meta-chip--award[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.1);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.lms-btn-cancel[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 50px;\n  padding: 10px 22px;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.lms-btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n  color: #111827;\n}\n.lms-btn-submit[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.4795031056, 115.7204968944, 106.7614906832) 100%);\n  color: #fff;\n  border: none;\n  border-radius: 50px;\n  padding: 10px 28px;\n  font-weight: 700;\n  font-size: 14px;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.4);\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.lms-btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(6, 155, 143, 0.5);\n  color: #fff;\n}\n.lms-btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.lms-toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 9999;\n  pointer-events: none;\n  opacity: 0;\n  transform: translateX(20px);\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n.lms-toast-container.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n  pointer-events: all;\n}\n.lms-toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  min-width: 320px;\n  max-width: 420px;\n  padding: 16px 18px;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.06);\n  position: relative;\n  overflow: hidden;\n  background: #fff;\n}\n.lms-toast__icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.lms-toast__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.lms-toast__label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  font-size: 13px;\n  letter-spacing: 0.3px;\n  margin-bottom: 2px;\n}\n.lms-toast__message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.5;\n  opacity: 0.85;\n}\n.lms-toast__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 2px;\n  cursor: pointer;\n  font-size: 16px;\n  opacity: 0.6;\n  transition: all 0.2s ease;\n  color: #4b5563;\n}\n.lms-toast__close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.lms-toast__progress[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 3px;\n  width: 100%;\n  animation: _ngcontent-%COMP%_toast-progress 4s linear forwards;\n  border-radius: 0 0 12px 12px;\n}\n.lms-toast--success[_ngcontent-%COMP%] {\n  border-left: 4px solid #16a34a;\n}\n.lms-toast--success[_ngcontent-%COMP%]   .lms-toast__icon[_ngcontent-%COMP%], \n.lms-toast--success[_ngcontent-%COMP%]   .lms-toast__label[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.lms-toast--success[_ngcontent-%COMP%]   .lms-toast__progress[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.lms-toast--error[_ngcontent-%COMP%] {\n  border-left: 4px solid #dc2626;\n}\n.lms-toast--error[_ngcontent-%COMP%]   .lms-toast__icon[_ngcontent-%COMP%], \n.lms-toast--error[_ngcontent-%COMP%]   .lms-toast__label[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.lms-toast--error[_ngcontent-%COMP%]   .lms-toast__progress[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.lms-toast--warning[_ngcontent-%COMP%] {\n  border-left: 4px solid #d97706;\n}\n.lms-toast--warning[_ngcontent-%COMP%]   .lms-toast__icon[_ngcontent-%COMP%], \n.lms-toast--warning[_ngcontent-%COMP%]   .lms-toast__label[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.lms-toast--warning[_ngcontent-%COMP%]   .lms-toast__progress[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.lms-progress-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 14px 28px;\n  background: #fff;\n  border-bottom: 1px solid #f3f4f6;\n}\n.lms-progress-bar__step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n  opacity: 0.35;\n  transition: all 0.2s ease;\n}\n.lms-progress-bar__step.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lms-progress-bar__step.done[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lms-progress-bar__dot[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 2px solid #e5e7eb;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  color: #9ca3af;\n  transition: all 0.2s ease;\n}\n.active[_ngcontent-%COMP%]    > .lms-progress-bar__dot[_ngcontent-%COMP%] {\n  border-color: #069b8f;\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.done[_ngcontent-%COMP%]    > .lms-progress-bar__dot[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n  background: #16a34a;\n  color: #fff;\n}\n.lms-progress-bar__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  white-space: nowrap;\n}\n.active[_ngcontent-%COMP%]    > .lms-progress-bar__label[_ngcontent-%COMP%] {\n  color: #069b8f;\n}\n.done[_ngcontent-%COMP%]    > .lms-progress-bar__label[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.lms-progress-bar__line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background: #e5e7eb;\n  margin: 0 6px;\n  margin-bottom: 16px;\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.lms-progress-bar__line.done[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.lms-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.lms-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.lms-list-item[_ngcontent-%COMP%]:hover {\n  border-color: #069b8f;\n  background: #e6f7f5;\n  transform: translateX(4px);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.lms-list-item[_ngcontent-%COMP%]:hover   .lms-list-item__arrow[_ngcontent-%COMP%] {\n  color: #069b8f;\n}\n.lms-list-item__icon-wrap[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 8px;\n  background: #e6f7f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #069b8f;\n  font-size: 18px;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n.lms-list-item__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.lms-list-item__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.lms-list-item__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.lms-list-item__desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  line-height: 1.4;\n  margin-bottom: 6px;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.lms-list-item__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.lms-list-item__arrow[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 16px;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n}\n.lms-selected-recap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #e6f7f5;\n  border: 1.5px solid rgba(6, 155, 143, 0.2);\n  border-radius: 12px;\n  padding: 12px 16px;\n}\n.lms-selected-recap__icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 8px;\n  background: #069b8f;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 17px;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n.lms-selected-recap__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.lms-selected-recap__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.lms-selected-recap__label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #069b8f;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 2px;\n}\n.lms-selected-recap__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n}\n.lms-collapsible[_ngcontent-%COMP%] {\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.lms-collapsible__trigger[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  background: #fff;\n  border: none;\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.lms-collapsible__trigger[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.lms-collapsible__trigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #9ca3af;\n}\n.lms-collapsible__body[_ngcontent-%COMP%] {\n  border-top: 1px solid #f3f4f6;\n  padding: 12px;\n  background: #f9fafb;\n  animation: _ngcontent-%COMP%_fadeIn 0.15s ease;\n}\n.lms-formations-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.lms-formation-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 8px 12px;\n  transition: all 0.2s ease;\n}\n.lms-formation-item[_ngcontent-%COMP%]:hover {\n  border-color: #069b8f;\n}\n.lms-formation-item__num[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #e6f7f5;\n  color: #069b8f;\n  font-size: 11px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.lms-formation-item__img[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 8px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid #e5e7eb;\n}\n.lms-formation-item__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.lms-formation-item__title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 3px;\n  line-height: 1.3;\n}\n.lms-formation-item__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.lms-step__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.lms-step__number[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #4b5563;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.lms-step__number--blue[_ngcontent-%COMP%] {\n  background: #069b8f;\n}\n.lms-step__title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  color: #111827;\n  margin: 0;\n}\n.lms-back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #069b8f;\n  background: #e6f7f5;\n  border: 1.5px solid rgba(6, 155, 143, 0.2);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.lms-back-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.lms-back-btn[_ngcontent-%COMP%]:hover {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n}\n.lms-input[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1.5px solid #e5e7eb;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.lms-input[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.12);\n}\n.lms-field-error[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 12px;\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.lms-divider[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 2px dashed #e5e7eb;\n  margin: 24px 0;\n}\n.lms-empty-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 24px;\n  border: 2px dashed #e5e7eb;\n  border-radius: 12px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.lms-empty-inline[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.5;\n}\n.lms-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 32px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n@media (max-width: 767px) {\n  .sc-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .sc-filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .sc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sc-motif-tooltip[_ngcontent-%COMP%] {\n    left: auto;\n    right: 0;\n    transform: none;\n  }\n  .sc-motif-tooltip[_ngcontent-%COMP%]::after {\n    left: auto;\n    right: 20px;\n    transform: rotate(45deg);\n  }\n  .lms-toast-container[_ngcontent-%COMP%] {\n    top: auto;\n    bottom: 20px;\n    right: 16px;\n    left: 16px;\n  }\n  .lms-toast[_ngcontent-%COMP%] {\n    min-width: unset;\n    width: 100%;\n  }\n  .lms-modal__body[_ngcontent-%COMP%] {\n    max-height: 65vh;\n  }\n  .lms-formation-detail-body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .pq-kpi-card[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n@media (max-width: 991px) {\n  .sc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 575px) {\n  .sc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=students-catalogue.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentsCatalogueComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-students-catalogue", imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, CustomPaginationComponent], template: `<!-- TOAST -->\r
<div class="lms-toast-container" [class.visible]="toast.visible">\r
  <div class="lms-toast" [class]="'lms-toast--' + toast.type">\r
    <div class="lms-toast__icon">\r
      <i *ngIf="toast.type === 'success'" class="isax isax-tick-circle-filled"></i>\r
      <i *ngIf="toast.type === 'error'"   class="isax isax-close-circle-filled"></i>\r
      <i *ngIf="toast.type === 'warning'" class="isax isax-warning-2-filled"></i>\r
    </div>\r
    <div class="lms-toast__body">\r
      <span class="lms-toast__label">\r
        {{ toast.type === 'success' ? 'Succ\xE8s' : toast.type === 'warning' ? 'Attention' : 'Erreur' }}\r
      </span>\r
      <p class="lms-toast__message">{{ toast.message }}</p>\r
    </div>\r
    <button class="lms-toast__close" (click)="closeToast()">\r
      <i class="isax isax-close-square"></i>\r
    </button>\r
    <div class="lms-toast__progress"></div>\r
  </div>\r
</div>\r
\r
<!-- PAGE HEADER -->\r
<div class="sc-header mb-4">\r
  <div class="sc-header__left">\r
    <h3 class="sc-header__title">Mes demandes de catalogues</h3>\r
    <p class="sc-header__subtitle">Suivez l'\xE9tat de vos demandes de catalogues soumises \xE0 l'entreprise</p>\r
  </div>\r
  <div class="sc-header__actions">\r
    <button class="sc-header__toggle-btn"\r
            [class.sc-header__toggle-btn--active]="viewMode === 'table'"\r
            (click)="setView('table')" title="Vue tableau">\r
      <i class="isax isax-row-vertical"></i>\r
    </button>\r
    <button class="sc-header__toggle-btn"\r
            [class.sc-header__toggle-btn--active]="viewMode === 'grid'"\r
            (click)="setView('grid')" title="Vue grille">\r
      <i class="isax isax-element-3"></i>\r
    </button>\r
    <button class="sc-header__new-btn" (click)="openRequestModal()">\r
      <i class="isax isax-add-circle"></i>\r
      Nouvelle demande\r
    </button>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- KPI INDICATORS                                    -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="pq-kpi-grid mb-4" *ngIf="!loading && allDemandes.length > 0">\r
\r
  <!-- Total -->\r
  <div class="pq-kpi-card pq-kpi-card--teal" (click)="filterByStatus('')"\r
       [class.pq-kpi-card--active]="selectedStatus === ''">\r
    <div class="pq-kpi-card__icon">\r
      <i class="isax isax-book-saved"></i>\r
    </div>\r
    <div class="pq-kpi-card__body">\r
      <div class="pq-kpi-card__value">{{ totalDemandes }}</div>\r
      <div class="pq-kpi-card__label">Total</div>\r
    </div>\r
  </div>\r
\r
  <!-- En attente -->\r
  <div class="pq-kpi-card pq-kpi-card--orange" (click)="filterByStatus('en_attente')"\r
       [class.pq-kpi-card--active]="selectedStatus === 'en_attente'">\r
    <div class="pq-kpi-card__icon">\r
      <i class="isax isax-clock"></i>\r
    </div>\r
    <div class="pq-kpi-card__body">\r
      <div class="pq-kpi-card__value">{{ totalEnAttente }}</div>\r
      <div class="pq-kpi-card__label">En attente</div>\r
    </div>\r
  </div>\r
\r
  <!-- Valid\xE9es -->\r
  <div class="pq-kpi-card pq-kpi-card--green" (click)="filterByStatus('validee')"\r
       [class.pq-kpi-card--active]="selectedStatus === 'validee'">\r
    <div class="pq-kpi-card__icon">\r
      <i class="isax isax-tick-circle"></i>\r
    </div>\r
    <div class="pq-kpi-card__body">\r
      <div class="pq-kpi-card__value">{{ totalValidees }}</div>\r
      <div class="pq-kpi-card__label">Valid\xE9es</div>\r
    </div>\r
  </div>\r
\r
  <!-- Refus\xE9es -->\r
  <div class="pq-kpi-card pq-kpi-card--red" (click)="filterByStatus('refusee')"\r
       [class.pq-kpi-card--active]="selectedStatus === 'refusee'">\r
    <div class="pq-kpi-card__icon">\r
      <i class="isax isax-close-circle"></i>\r
    </div>\r
    <div class="pq-kpi-card__body">\r
      <div class="pq-kpi-card__value">{{ totalRefusees }}</div>\r
      <div class="pq-kpi-card__label">Refus\xE9es</div>\r
    </div>\r
  </div>\r
\r
  <!-- Annul\xE9es -->\r
  <div class="pq-kpi-card pq-kpi-card--gray" (click)="filterByStatus('annulee')"\r
       [class.pq-kpi-card--active]="selectedStatus === 'annulee'">\r
    <div class="pq-kpi-card__icon">\r
      <i class="isax isax-minus-cirlce"></i>\r
    </div>\r
    <div class="pq-kpi-card__body">\r
      <div class="pq-kpi-card__value">{{ totalAnnulees }}</div>\r
      <div class="pq-kpi-card__label">Annul\xE9es</div>\r
    </div>\r
  </div>\r
\r
</div>\r
\r
<!-- FILTRES -->\r
<div class="sc-filters mb-4">\r
  <div class="sc-filters__search">\r
    <i class="isax isax-search-normal-1 sc-filters__search-icon"></i>\r
    <input type="search" class="sc-filters__search-input"\r
           placeholder="Rechercher un catalogue..."\r
           [(ngModel)]="searchDataValue" (ngModelChange)="searchData(searchDataValue)">\r
  </div>\r
  <div class="sc-filters__pills">\r
    <button class="sc-filters__pill"                           [class.sc-filters__pill--active]="selectedStatus === ''"           (click)="filterByStatus('')">Tous</button>\r
    <button class="sc-filters__pill sc-filters__pill--attente" [class.sc-filters__pill--active]="selectedStatus === 'en_attente'" (click)="filterByStatus('en_attente')">\r
      En attente\r
      <span class="sc-filters__pill-count" *ngIf="totalEnAttente > 0">({{ totalEnAttente }})</span>\r
    </button>\r
    <button class="sc-filters__pill sc-filters__pill--validee" [class.sc-filters__pill--active]="selectedStatus === 'validee'"    (click)="filterByStatus('validee')">\r
      Valid\xE9e\r
      <span class="sc-filters__pill-count" *ngIf="totalValidees > 0">({{ totalValidees }})</span>\r
    </button>\r
    <button class="sc-filters__pill sc-filters__pill--refusee" [class.sc-filters__pill--active]="selectedStatus === 'refusee'"    (click)="filterByStatus('refusee')">\r
      Refus\xE9e\r
      <span class="sc-filters__pill-count" *ngIf="totalRefusees > 0">({{ totalRefusees }})</span>\r
    </button>\r
    <button class="sc-filters__pill sc-filters__pill--annulee" [class.sc-filters__pill--active]="selectedStatus === 'annulee'"    (click)="filterByStatus('annulee')">\r
      Annul\xE9e\r
      <span class="sc-filters__pill-count" *ngIf="totalAnnulees > 0">({{ totalAnnulees }})</span>\r
    </button>\r
  </div>\r
  <button class="sc-filters__reset" (click)="resetFilters()">\r
    <i class="isax isax-refresh"></i> R\xE9initialiser\r
  </button>\r
</div>\r
\r
<!-- LOADING -->\r
<div *ngIf="loading" class="sc-loading">\r
  <div class="sc-loading__spinner"></div>\r
  <p>Chargement de vos demandes de catalogues...</p>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- VUE TABLEAU                                -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<ng-container *ngIf="!loading && viewMode === 'table'">\r
  <div class="card sc-table-card" *ngIf="demandes.length > 0">\r
    <div class="card-header sc-table-card__header">\r
      <div class="sc-table-card__title">\r
        <i class="isax isax-book-saved text-primary me-2"></i>\r
        Historique des demandes de catalogues\r
        <span class="sc-table-card__count">{{ totalData }}</span>\r
      </div>\r
      <small class="text-muted" style="font-size:11px">\r
        <i class="isax isax-mouse-circle me-1"></i>Cliquez sur une ligne pour voir les d\xE9tails\r
      </small>\r
    </div>\r
    <div class="table-responsive">\r
      <table class="table sc-table align-middle mb-0">\r
        <thead>\r
          <tr>\r
            <th style="min-width:300px;">Catalogue</th>\r
            <th>Date de soumission</th>\r
            <th class="text-center">Priorit\xE9</th>\r
            <th class="text-center" style="min-width:160px;">Statut</th>\r
            <th class="text-center">Action</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let demande of demandes"\r
              class="sc-table-row"\r
              [class.sc-row--refusee]="demande.statut === 'refusee'"\r
              [class.sc-row--validee]="demande.statut === 'validee'"\r
              (click)="ouvrirDetailDemande(demande, $event)">\r
\r
            <!-- CATALOGUE -->\r
            <td>\r
              <div class="sc-formation">\r
                <img [src]="demande.image_affiche" class="sc-formation__thumb" alt="">\r
                <div class="sc-formation__info">\r
                  <div class="sc-formation__title">{{ demande.titre_affiche }}</div>\r
                  <small class="sc-formation__sub" *ngIf="demande.sous_titre_affiche">\r
                    <i class="isax isax-book-saved me-1"></i>\r
                    {{ demande.sous_titre_affiche | slice:0:60 }}{{ demande.sous_titre_affiche?.length > 60 ? '\u2026' : '' }}\r
                  </small>\r
                  <div class="sc-formation__details">\r
                    <span class="sc-detail-chip" *ngIf="demande.catalogue?.nombre_formations != null">\r
                      <i class="isax isax-book me-1"></i>{{ demande.catalogue.nombre_formations }} formation(s)\r
                    </span>\r
                    <span class="sc-detail-chip" *ngIf="demande.catalogue?.type_display">\r
                      <i class="isax isax-tag me-1"></i>{{ demande.catalogue.type_display }}\r
                    </span>\r
                    <span class="sc-detail-chip" *ngIf="demande.catalogue?.categorie">\r
                      <i class="isax isax-category me-1"></i>{{ demande.catalogue.categorie }}\r
                    </span>\r
                  </div>\r
                </div>\r
              </div>\r
            </td>\r
\r
            <!-- DATE -->\r
            <td>\r
              <span class="sc-date">{{ demande.created_at | date:'dd/MM/yyyy' }}</span>\r
              <span class="sc-date sc-date--time d-block">{{ demande.created_at | date:'HH:mm' }}</span>\r
            </td>\r
\r
            <!-- PRIORIT\xC9 -->\r
            <td class="text-center">\r
              <span class="sc-priorite" [ngClass]="getPrioriteClass(demande.priorite)">{{ demande.priorite_display }}</span>\r
            </td>\r
\r
            <!-- STATUT + MOTIF REFUS -->\r
            <td class="text-center">\r
              <div class="sc-statut-cell">\r
                <span class="sc-statut" [ngClass]="getStatutClass(demande.statut)">{{ demande.statut_display }}</span>\r
                <div class="sc-motif-wrapper"\r
                     *ngIf="demande.statut === 'refusee' && demande.motif_refus"\r
                     (mouseenter)="showMotif(demande.id)" (mouseleave)="hideMotif()"\r
                     (click)="$event.stopPropagation()">\r
                  <button class="sc-motif-btn"><i class="isax isax-info-circle"></i> Motif</button>\r
                  <div class="sc-motif-tooltip" *ngIf="isMotifVisible(demande.id)">\r
                    <div class="sc-motif-tooltip__header"><i class="isax isax-close-circle me-1"></i>Motif de refus</div>\r
                    <p class="sc-motif-tooltip__body">{{ demande.motif_refus }}</p>\r
                    <div class="sc-motif-tooltip__footer" *ngIf="demande.commentaire_rh">\r
                      <i class="isax isax-message-text me-1"></i><em>{{ demande.commentaire_rh }}</em>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </td>\r
\r
            <!-- ACTION \u2014 boutons cercle ic\xF4ne -->\r
            <td class="text-center" (click)="$event.stopPropagation()">\r
              <div class="d-flex align-items-center justify-content-center gap-2">\r
                <ng-container *ngIf="demande.statut === 'en_attente'">\r
                  <div class="sc-action-btn sc-action-btn--danger"\r
                       (click)="annulerDemande(demande.id, $event)"\r
                       title="Annuler la demande">\r
                    <i class="isax isax-close-circle"></i>\r
                    <span class="sc-action-btn__tooltip">Annuler la demande</span>\r
                  </div>\r
                  <div class="sc-action-btn sc-action-btn--primary"\r
                       (click)="relancerDemande(demande.id, $event)"\r
                       title="Relancer la demande">\r
                    <i class="isax isax-refresh"></i>\r
                    <span class="sc-action-btn__tooltip">Relancer la demande</span>\r
                  </div>\r
                </ng-container>\r
                <span *ngIf="demande.statut !== 'en_attente'"\r
                      class="sc-statut-icon"\r
                      [title]="demande.statut_display">\r
                  <i class="isax isax-tick-circle sc-statut-icon--validee" *ngIf="demande.statut === 'validee'"></i>\r
                  <i class="isax isax-close-circle sc-statut-icon--refusee" *ngIf="demande.statut === 'refusee'"></i>\r
                  <i class="isax isax-minus-cirlce sc-statut-icon--annulee" *ngIf="demande.statut === 'annulee'"></i>\r
                </span>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
</ng-container>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- VUE GRILLE                                 -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<ng-container *ngIf="!loading && viewMode === 'grid'">\r
  <div class="sc-grid" *ngIf="demandes.length > 0">\r
    <div class="sc-grid-card"\r
         *ngFor="let demande of demandes"\r
         [class.sc-grid-card--validee]="demande.statut === 'validee'"\r
         [class.sc-grid-card--refusee]="demande.statut === 'refusee'"\r
         [class.sc-grid-card--attente]="demande.statut === 'en_attente'"\r
         (click)="ouvrirDetailDemande(demande, $event)">\r
\r
      <!-- Cover -->\r
      <div class="sc-grid-card__cover">\r
        <img [src]="demande.image_affiche" alt="{{ demande.titre_affiche }}" class="sc-grid-card__img">\r
        <div class="sc-grid-card__cover-overlay">\r
          <span class="sc-statut" [ngClass]="getStatutClass(demande.statut)">{{ demande.statut_display }}</span>\r
        </div>\r
        <span class="sc-priorite sc-grid-card__priorite" [ngClass]="getPrioriteClass(demande.priorite)">\r
          {{ demande.priorite_display }}\r
        </span>\r
      </div>\r
\r
      <!-- Corps -->\r
      <div class="sc-grid-card__body">\r
        <h6 class="sc-grid-card__title">{{ demande.titre_affiche }}</h6>\r
        <p class="sc-grid-card__sub" *ngIf="demande.sous_titre_affiche">\r
          <i class="isax isax-book-saved"></i>\r
          {{ demande.sous_titre_affiche | slice:0:55 }}{{ demande.sous_titre_affiche?.length > 55 ? '\u2026' : '' }}\r
        </p>\r
        <div class="sc-grid-card__chips">\r
          <span class="sc-detail-chip" *ngIf="demande.catalogue?.nombre_formations != null">\r
            <i class="isax isax-book me-1"></i>{{ demande.catalogue.nombre_formations }} formation(s)\r
          </span>\r
          <span class="sc-detail-chip" *ngIf="demande.catalogue?.type_display">\r
            <i class="isax isax-tag me-1"></i>{{ demande.catalogue.type_display }}\r
          </span>\r
          <span class="sc-detail-chip" *ngIf="demande.catalogue?.categorie">\r
            <i class="isax isax-category me-1"></i>{{ demande.catalogue.categorie }}\r
          </span>\r
        </div>\r
      </div>\r
\r
      <!-- Footer contextuel selon statut -->\r
      <div class="sc-grid-card__footer" (click)="$event.stopPropagation()">\r
        <span class="sc-grid-card__date">\r
          <i class="isax isax-calendar-1"></i>\r
          {{ demande.created_at | date:'dd/MM/yyyy' }}\r
        </span>\r
        <div class="sc-grid-card__actions">\r
          <ng-container *ngIf="demande.statut === 'en_attente'">\r
            <button class="sc-btn-annuler sc-btn--xs" title="Annuler"\r
                    (click)="annulerDemande(demande.id, $event)">\r
              <i class="isax isax-close-circle"></i>\r
            </button>\r
            <button class="sc-btn-relancer sc-btn--xs" title="Relancer"\r
                    (click)="relancerDemande(demande.id, $event)">\r
              <i class="isax isax-refresh"></i>\r
            </button>\r
          </ng-container>\r
          <button *ngIf="demande.statut === 'refusee' && demande.motif_refus"\r
                  class="sc-grid-motif-btn"\r
                  (click)="ouvrirDetailDemande(demande, $event)">\r
            <i class="isax isax-info-circle me-1"></i>Motif\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</ng-container>\r
\r
<!-- EMPTY -->\r
<div *ngIf="!loading && demandes.length === 0" class="sc-empty">\r
  <div class="sc-empty__icon"><i class="isax isax-book-saved"></i></div>\r
  <h5 class="sc-empty__title">Aucune demande de catalogue trouv\xE9e</h5>\r
  <p>Vos futures demandes de catalogues appara\xEEtront ici.</p>\r
</div>\r
\r
<!-- PAGINATION -->\r
<app-custom-pagination\r
  *ngIf="!loading && totalData > pageSize"\r
  [totalItems]="totalData" [pageSize]="pageSize" [currentPage]="currentPage"\r
  (pageChange)="onPageChange($event)">\r
</app-custom-pagination>\r
\r
\r
<!-- ============================================================= -->\r
<!-- MODAL D\xC9TAIL DEMANDE                                          -->\r
<!-- ============================================================= -->\r
<div class="modal fade" id="catalogueDemandeDetailModal" tabindex="-1" aria-hidden="true">\r
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">\r
    <div class="modal-content lms-modal" *ngIf="demandeSelectionnee">\r
\r
      <!-- Header teal fixe -->\r
      <div class="modal-header lms-modal__header">\r
        <div class="d-flex align-items-center gap-3">\r
          <div class="lms-modal__icon"><i class="isax isax-book-saved"></i></div>\r
          <div>\r
            <h5 class="modal-title mb-0">{{ demandeSelectionnee.titre_affiche }}</h5>\r
            <small>Demande du {{ demandeSelectionnee.created_at | date:'dd/MM/yyyy \xE0 HH:mm' }}</small>\r
          </div>\r
        </div>\r
        <button type="button" class="btn-close btn-close-white" (click)="fermerDetailDemande()"></button>\r
      </div>\r
\r
      <div class="modal-body lms-modal__body">\r
\r
        <!-- Ligne chips statut + priorit\xE9 + date souhait\xE9e -->\r
        <div class="lms-detail-chips mb-4">\r
          <div class="lms-detail-chips__left">\r
            <span class="sc-statut" [ngClass]="getStatutClass(demandeSelectionnee.statut)">\r
              {{ demandeSelectionnee.statut_display }}\r
            </span>\r
            <span class="sc-priorite ms-2" [ngClass]="getPrioriteClass(demandeSelectionnee.priorite)">\r
              {{ demandeSelectionnee.priorite_display }}\r
            </span>\r
            <span class="lms-meta-chip ms-2" *ngIf="demandeSelectionnee.date_souhaitee_debut">\r
              <i class="isax isax-calendar me-1"></i>\r
              Souhait\xE9 le {{ demandeSelectionnee.date_souhaitee_debut | date:'dd/MM/yyyy' }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <!-- SECTION 1 \u2014 Pr\xE9sentation du catalogue      -->\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <div class="lms-detail-section mb-3">\r
          <div class="lms-detail-section__title">\r
            <i class="isax isax-book-saved me-2"></i>Catalogue demand\xE9\r
          </div>\r
\r
          <!-- Bandeau image + titre -->\r
          <div class="lms-formation-banner mt-2">\r
            <img [src]="demandeSelectionnee.image_affiche"\r
                 class="lms-formation-banner__img" alt="">\r
            <div class="lms-formation-banner__body">\r
              <div class="lms-formation-banner__title">{{ demandeSelectionnee.titre_affiche }}</div>\r
              <div class="lms-formation-banner__sub" *ngIf="demandeSelectionnee.sous_titre_affiche">\r
                <i class="isax isax-book-saved me-1"></i>{{ demandeSelectionnee.sous_titre_affiche }}\r
              </div>\r
              <div class="lms-formation-banner__tags">\r
                <span class="lms-meta-chip lms-meta-chip--teal"\r
                      *ngIf="demandeSelectionnee.catalogue?.type_display">\r
                  <i class="isax isax-tag me-1"></i>{{ demandeSelectionnee.catalogue.type_display }}\r
                </span>\r
                <span class="lms-meta-chip lms-meta-chip--purple"\r
                      *ngIf="demandeSelectionnee.catalogue?.categorie">\r
                  <i class="isax isax-category me-1"></i>{{ demandeSelectionnee.catalogue.categorie }}\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Grille infos cl\xE9s -->\r
          <div class="row g-2 mt-3">\r
            <div class="col-md-6" *ngIf="demandeSelectionnee.catalogue?.nombre_formations != null">\r
              <div class="lms-info-item">\r
                <i class="isax isax-book" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Formations incluses</small>\r
                  <strong>{{ demandeSelectionnee.catalogue.nombre_formations }} formation(s)</strong>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6" *ngIf="demandeSelectionnee.catalogue?.type_display">\r
              <div class="lms-info-item">\r
                <i class="isax isax-tag" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Type de catalogue</small>\r
                  <strong>{{ demandeSelectionnee.catalogue.type_display }}</strong>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6" *ngIf="demandeSelectionnee.catalogue?.date_debut">\r
              <div class="lms-info-item">\r
                <i class="isax isax-calendar-2" style="color:#069b8f"></i>\r
                <div>\r
                  <small>D\xE9but pr\xE9vu</small>\r
                  <strong>{{ demandeSelectionnee.catalogue.date_debut | date:'dd/MM/yyyy' }}</strong>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6" *ngIf="demandeSelectionnee.catalogue?.date_fin">\r
              <div class="lms-info-item">\r
                <i class="isax isax-calendar-tick" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Fin pr\xE9vue</small>\r
                  <strong>{{ demandeSelectionnee.catalogue.date_fin | date:'dd/MM/yyyy' }}</strong>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Description -->\r
          <div class="lms-formation-desc mt-3"\r
               *ngIf="demandeSelectionnee.catalogue?.description">\r
            <div class="lms-formation-desc__label">\r
              <i class="isax isax-document-text"></i>Description\r
            </div>\r
            <p class="lms-formation-desc__text">{{ demandeSelectionnee.catalogue.description }}</p>\r
          </div>\r
        </div>\r
\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <!-- SECTION 2 \u2014 Formations du catalogue        -->\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <div class="lms-detail-section mb-3"\r
             *ngIf="loadingFormations || formationsCatalogue.length > 0">\r
\r
          <div class="lms-modules-header">\r
            <div class="lms-modules-header__left">\r
              <div class="lms-detail-section__title mb-0">\r
                <i class="isax isax-book me-2"></i>Formations disponibles\r
              </div>\r
              <div class="lms-modules-breadcrumb mt-1" *ngIf="!loadingFormations">\r
                <span class="lms-modules-breadcrumb__item">\r
                  <i class="isax isax-book-1 me-1"></i>\r
                  {{ formationsCatalogue.length }} formation(s)\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Spinner chargement -->\r
          <div class="text-center py-4" *ngIf="loadingFormations">\r
            <div class="spinner-border spinner-border-sm me-2 text-primary"></div>\r
            <span class="text-muted" style="font-size:13px">Chargement des formations...</span>\r
          </div>\r
\r
          <!-- Liste formations cliquables -->\r
          <div class="lms-accordion mt-3" *ngIf="!loadingFormations && formationsCatalogue.length > 0">\r
            <div class="lms-accordion__item"\r
                 *ngFor="let formation of formationsCatalogue; let i = index">\r
\r
              <button class="lms-accordion__header"\r
                      [class.lms-accordion__header--open]="isFormationOpen(demandeSelectionnee.id, i)"\r
                      (click)="toggleFormation(demandeSelectionnee.id, i)">\r
                <div class="lms-accordion__header-left">\r
                  <span class="lms-accordion__num">{{ i + 1 }}</span>\r
                  <div>\r
                    <span class="lms-accordion__title">{{ formation.titre }}</span>\r
                    <div class="lms-accordion__sub" *ngIf="formation.formateur_nom">\r
                      <i class="isax isax-teacher me-1"></i>{{ formation.formateur_nom }}\r
                    </div>\r
                  </div>\r
                </div>\r
                <div class="lms-accordion__header-right">\r
                  <span class="lms-accordion__count lms-accordion__count--teal"\r
                        *ngIf="formation.duree_totale">\r
                    <i class="isax isax-clock me-1"></i>{{ formation.duree_totale }}h\r
                  </span>\r
                  <span class="lms-accordion__count lms-accordion__count--purple"\r
                        *ngIf="formation.nombre_modules">\r
                    <i class="isax isax-book me-1"></i>{{ formation.nombre_modules }} module(s)\r
                  </span>\r
                  <span class="lms-accordion__count lms-accordion__count--warning"\r
                        *ngIf="formation.est_certifiante">\r
                    <i class="isax isax-award me-1"></i>Certifiante\r
                  </span>\r
                  <i class="isax lms-accordion__chevron"\r
                     [class.isax-arrow-up-2]="isFormationOpen(demandeSelectionnee.id, i)"\r
                     [class.isax-arrow-down-2]="!isFormationOpen(demandeSelectionnee.id, i)"></i>\r
                </div>\r
              </button>\r
\r
              <!-- Corps accord\xE9on formation -->\r
              <div class="lms-accordion__body" *ngIf="isFormationOpen(demandeSelectionnee.id, i)">\r
                <div class="lms-formation-detail-body">\r
                  <div class="lms-formation-detail-body__img-wrap" *ngIf="formation.image_couverture">\r
                    <img [src]="formation.image_couverture || 'assets/img/course/course-01.jpg'"\r
                         class="lms-formation-detail-body__img" alt="">\r
                  </div>\r
                  <div class="lms-formation-detail-body__content">\r
                    <div class="d-flex flex-wrap gap-1 mb-2">\r
                      <span class="lms-meta-chip" *ngIf="formation.niveau_display && formation.niveau_display !== 'Non d\xE9fini'">\r
                        <i class="isax isax-chart me-1"></i>{{ formation.niveau_display }}\r
                      </span>\r
                      <span class="lms-meta-chip" *ngIf="formation.duree_totale">\r
                        <i class="isax isax-clock me-1"></i>{{ formation.duree_totale }}h\r
                      </span>\r
                      <span class="lms-meta-chip" *ngIf="formation.nombre_modules">\r
                        <i class="isax isax-book me-1"></i>{{ formation.nombre_modules }} module(s)\r
                      </span>\r
                      <span class="lms-meta-chip lms-meta-chip--warning" *ngIf="formation.est_certifiante">\r
                        <i class="isax isax-award me-1"></i>Certifiante\r
                      </span>\r
                      <span class="lms-meta-chip" *ngIf="formation.langue">\r
                        <i class="isax isax-language-square me-1"></i>{{ formation.langue }}\r
                      </span>\r
                    </div>\r
                    <p class="lms-formation-detail-body__desc" *ngIf="formation.description">\r
                      {{ formation.description | slice:0:200 }}{{ formation.description?.length > 200 ? '\u2026' : '' }}\r
                    </p>\r
                    <button class="sc-btn-voir-formation mt-2"\r
                            (click)="voirFormation(formation); $event.stopPropagation()">\r
                      <i class="isax isax-eye me-1"></i>Voir la formation\r
                    </button>\r
                  </div>\r
                </div>\r
              </div>\r
\r
            </div>\r
          </div>\r
\r
          <div *ngIf="!loadingFormations && formationsCatalogue.length === 0" class="lms-empty-inline mt-3">\r
            <i class="isax isax-book"></i>\r
            <span>Aucune formation disponible pour ce catalogue</span>\r
          </div>\r
        </div>\r
\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <!-- SECTION 3 \u2014 \xC9tat de ma demande             -->\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <div class="lms-detail-section mb-3">\r
          <div class="lms-detail-section__title">\r
            <i class="isax isax-message-text me-2"></i>\xC9tat de ma demande\r
          </div>\r
          <div class="cd-demande-detail mt-2">\r
            <div class="cd-demande-row">\r
              <span class="cd-demande-label">Soumise le</span>\r
              <span>{{ demandeSelectionnee.created_at | date:'dd/MM/yyyy \xE0 HH:mm' }}</span>\r
            </div>\r
            <div class="cd-demande-row" *ngIf="demandeSelectionnee.date_validation">\r
              <span class="cd-demande-label">Trait\xE9e le</span>\r
              <span>{{ demandeSelectionnee.date_validation | date:'dd/MM/yyyy \xE0 HH:mm' }}</span>\r
            </div>\r
            <div class="cd-demande-row" *ngIf="demandeSelectionnee.motif_demande">\r
              <span class="cd-demande-label">Mon motif</span>\r
              <span>{{ demandeSelectionnee.motif_demande }}</span>\r
            </div>\r
            <div class="cd-demande-row" *ngIf="demandeSelectionnee.objectifs_personnels">\r
              <span class="cd-demande-label">Mes objectifs</span>\r
              <span>{{ demandeSelectionnee.objectifs_personnels }}</span>\r
            </div>\r
            <div class="cd-demande-row" *ngIf="demandeSelectionnee.commentaire_employe">\r
              <span class="cd-demande-label">Mon commentaire</span>\r
              <span>{{ demandeSelectionnee.commentaire_employe }}</span>\r
            </div>\r
            <div class="cd-demande-row" *ngIf="demandeSelectionnee.traite_par_nom">\r
              <span class="cd-demande-label">Trait\xE9 par</span>\r
              <span>{{ demandeSelectionnee.traite_par_nom }}</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <!-- SECTION 4 \u2014 Motif de refus                 -->\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <div class="lms-detail-section lms-detail-section--danger mb-3"\r
             *ngIf="demandeSelectionnee.statut === 'refusee' && demandeSelectionnee.motif_refus">\r
          <div class="lms-detail-section__title">\r
            <i class="isax isax-close-circle me-2"></i>Motif de refus\r
          </div>\r
          <p class="lms-detail-section__body">{{ demandeSelectionnee.motif_refus }}</p>\r
          <p class="lms-detail-section__body mt-1 fst-italic" *ngIf="demandeSelectionnee.commentaire_rh">\r
            <i class="isax isax-message-text me-1"></i>{{ demandeSelectionnee.commentaire_rh }}\r
          </p>\r
        </div>\r
\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <!-- SECTION 5 \u2014 Validation                     -->\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <div class="lms-detail-section lms-detail-section--success mb-3"\r
             *ngIf="demandeSelectionnee.statut === 'validee' && demandeSelectionnee.date_validation">\r
          <div class="lms-detail-section__title">\r
            <i class="isax isax-tick-circle me-2"></i>Demande valid\xE9e\r
          </div>\r
          <p class="lms-detail-section__body">\r
            Votre demande a \xE9t\xE9 valid\xE9e le\r
            <strong>{{ demandeSelectionnee.date_validation | date:'dd/MM/yyyy \xE0 HH:mm' }}</strong>.\r
          </p>\r
          <p class="lms-detail-section__body mt-1" *ngIf="demandeSelectionnee.commentaire_rh">\r
            <i class="isax isax-message-text me-1"></i>{{ demandeSelectionnee.commentaire_rh }}\r
          </p>\r
        </div>\r
\r
      </div>\r
\r
      <!-- Footer modal -->\r
      <div class="modal-footer lms-modal__footer" style="justify-content:space-between;">\r
        <button class="btn lms-btn-cancel" (click)="fermerDetailDemande()">\r
          <i class="isax isax-close-square me-1"></i>Fermer\r
        </button>\r
        <div class="d-flex gap-2">\r
          <button class="btn sc-btn-annuler"\r
                  [disabled]="demandeSelectionnee.statut !== 'en_attente'"\r
                  (click)="annulerDemande(demandeSelectionnee.id)">\r
            <i class="isax isax-close-circle me-1"></i>Annuler la demande\r
          </button>\r
          <button class="btn sc-btn-relancer"\r
                  [disabled]="demandeSelectionnee.statut !== 'en_attente'"\r
                  (click)="relancerDemande(demandeSelectionnee.id)">\r
            <i class="isax isax-refresh me-1"></i>Relancer\r
          </button>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>\r
\r
\r
<!-- ============================================================= -->\r
<!-- MODAL NOUVELLE DEMANDE CATALOGUE                              -->\r
<!-- ============================================================= -->\r
<div class="modal fade" id="demandeCatalogueModal" tabindex="-1" aria-hidden="true">\r
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">\r
    <div class="modal-content lms-modal">\r
\r
      <div class="modal-header lms-modal__header">\r
        <div class="d-flex align-items-center gap-3">\r
          <div class="lms-modal__icon"><i class="isax isax-book-saved"></i></div>\r
          <div>\r
            <h5 class="modal-title mb-0">Demande de catalogue</h5>\r
            <small *ngIf="!selectedCatalogue">Catalogues disponibles</small>\r
            <small *ngIf="selectedCatalogue">\r
              <i class="isax isax-arrow-right-3 me-1" style="font-size:10px"></i>{{ selectedCatalogue.titre }}\r
            </small>\r
          </div>\r
        </div>\r
        <button type="button" class="btn-close btn-close-white" (click)="closeModal()"></button>\r
      </div>\r
\r
      <!-- Barre de progression \xE9tapes -->\r
      <div class="lms-progress-bar">\r
        <div class="lms-progress-bar__step" [class.active]="true" [class.done]="!!selectedCatalogue">\r
          <span class="lms-progress-bar__dot"><i class="isax isax-book-saved"></i></span>\r
          <span class="lms-progress-bar__label">Catalogue</span>\r
        </div>\r
        <div class="lms-progress-bar__line" [class.done]="!!selectedCatalogue"></div>\r
        <div class="lms-progress-bar__step" [class.active]="!!selectedCatalogue">\r
          <span class="lms-progress-bar__dot"><i class="isax isax-send-2"></i></span>\r
          <span class="lms-progress-bar__label">Demande</span>\r
        </div>\r
      </div>\r
\r
      <div class="modal-body lms-modal__body">\r
\r
        <!-- \u2500\u2500 \xC9TAPE 1 \u2014 Choisir un catalogue \u2500\u2500 -->\r
        <ng-container *ngIf="!selectedCatalogue">\r
          <div class="lms-step__header mb-3">\r
            <span class="lms-step__number lms-step__number--blue">1</span>\r
            <p class="lms-step__title">Choisir un catalogue <span class="text-danger">*</span></p>\r
          </div>\r
          <div *ngIf="loadingCatalogues" class="lms-loading">\r
            <div class="spinner-border text-primary"></div>\r
            <span>Chargement des catalogues...</span>\r
          </div>\r
          <div *ngIf="!loadingCatalogues && catalogues.length > 0" class="lms-list">\r
            <div class="lms-list-item" *ngFor="let c of catalogues" (click)="selectCatalogue(c)">\r
              <div class="lms-list-item__icon-wrap"\r
                   [style.background-color]="c.couleur ? c.couleur + '20' : null">\r
                <img *ngIf="c.image_couverture" [src]="c.image_couverture"\r
                     class="lms-list-item__img" alt="">\r
                <i *ngIf="!c.image_couverture" class="isax isax-book-saved"\r
                   [style.color]="c.couleur || '#069b8f'"></i>\r
              </div>\r
              <div class="lms-list-item__body">\r
                <div class="lms-list-item__title">{{ c.titre }}</div>\r
                <div class="lms-list-item__desc" *ngIf="c.description">\r
                  {{ c.description | slice:0:80 }}{{ c.description?.length > 80 ? '\u2026' : '' }}\r
                </div>\r
                <div class="lms-list-item__meta">\r
                  <span class="lms-meta-chip lms-meta-chip--teal">\r
                    <i class="isax isax-book me-1"></i>{{ c.nombre_formations }} formation(s)\r
                  </span>\r
                  <span class="lms-meta-chip" *ngIf="c.type_display">\r
                    <i class="isax isax-tag me-1"></i>{{ c.type_display }}\r
                  </span>\r
                  <span class="lms-meta-chip lms-meta-chip--purple" *ngIf="c.categorie">\r
                    <i class="isax isax-category me-1"></i>{{ c.categorie }}\r
                  </span>\r
                </div>\r
              </div>\r
              <div class="lms-list-item__arrow"><i class="isax isax-arrow-right-3"></i></div>\r
            </div>\r
          </div>\r
          <div *ngIf="!loadingCatalogues && catalogues.length === 0" class="lms-empty-inline">\r
            <i class="isax isax-book-saved"></i>\r
            <span>Aucun catalogue disponible</span>\r
          </div>\r
        </ng-container>\r
\r
        <!-- \u2500\u2500 \xC9TAPE 2 \u2014 Formulaire demande \u2500\u2500 -->\r
        <ng-container *ngIf="selectedCatalogue">\r
          <button class="lms-back-btn mb-3" (click)="retourCatalogues()">\r
            <i class="isax isax-arrow-left me-1"></i> Retour aux catalogues\r
          </button>\r
\r
          <!-- R\xE9cap catalogue s\xE9lectionn\xE9 -->\r
          <div class="lms-selected-recap mb-4">\r
            <div class="lms-selected-recap__icon"\r
                 [style.background-color]="selectedCatalogue.couleur || '#069b8f'">\r
              <img *ngIf="selectedCatalogue.image_couverture"\r
                   [src]="selectedCatalogue.image_couverture"\r
                   class="lms-selected-recap__img" alt="">\r
              <i *ngIf="!selectedCatalogue.image_couverture" class="isax isax-book-saved"></i>\r
            </div>\r
            <div class="lms-selected-recap__body">\r
              <div class="lms-selected-recap__label">Catalogue s\xE9lectionn\xE9</div>\r
              <div class="lms-selected-recap__title">{{ selectedCatalogue.titre }}</div>\r
            </div>\r
            <span class="lms-meta-chip lms-meta-chip--teal">{{ selectedCatalogue.nombre_formations }} formation(s)</span>\r
          </div>\r
\r
          <div class="lms-collapsible mb-4" *ngIf="selectedCatalogue">\r
            <button class="lms-collapsible__trigger" type="button" (click)="showFormations = !showFormations">\r
              <span>\r
                <i class="isax isax-book me-1"></i>Voir les formations incluses\r
                <span class="lms-meta-chip lms-meta-chip--teal ms-2" *ngIf="!loadingFormationsModal">\r
                  {{ formationsCatalogueModal.length || selectedCatalogue?.nombre_formations || 0 }}\r
                </span>\r
                <span class="spinner-border spinner-border-sm text-primary ms-2"\r
                      *ngIf="loadingFormationsModal"></span>\r
              </span>\r
              <i class="isax" [class.isax-arrow-down]="!showFormations" [class.isax-arrow-up]="showFormations"></i>\r
            </button>\r
            <div class="lms-collapsible__body" *ngIf="showFormations">\r
              <div *ngIf="loadingFormationsModal" class="lms-loading py-3">\r
                <div class="spinner-border spinner-border-sm text-primary"></div>\r
                <span>Chargement...</span>\r
              </div>\r
              <div *ngIf="!loadingFormationsModal" class="lms-formations-list">\r
                <div class="lms-formation-item" *ngFor="let f of formationsCatalogueModal; let i = index">\r
                  <div class="lms-formation-item__num">{{ i + 1 }}</div>\r
                  <img [src]="f.image_couverture || 'assets/img/course/course-01.jpg'"\r
                       class="lms-formation-item__img" alt="">\r
                  <div class="lms-formation-item__body">\r
                    <div class="lms-formation-item__title">{{ f.titre }}</div>\r
                    <div class="lms-formation-item__meta">\r
                      <span class="lms-meta-chip" *ngIf="f.niveau_display && f.niveau_display !== 'Non d\xE9fini'">{{ f.niveau_display }}</span>\r
                      <span class="lms-meta-chip" *ngIf="f.duree_totale"><i class="isax isax-clock me-1"></i>{{ f.duree_totale }}h</span>\r
                      <span class="lms-meta-chip lms-meta-chip--warning" *ngIf="f.est_certifiante"><i class="isax isax-award me-1"></i>Certifiante</span>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <hr class="lms-divider">\r
\r
          <div class="lms-step__header mb-3">\r
            <span class="lms-step__number lms-step__number--blue">2</span>\r
            <p class="lms-step__title">Informations compl\xE9mentaires</p>\r
          </div>\r
\r
          <form [formGroup]="form">\r
            <div class="row g-3">\r
              <div class="col-12">\r
                <label class="form-label fw-semibold">\r
                  Motif de la demande <span class="text-danger">*</span>\r
                </label>\r
                <textarea class="form-control lms-input" formControlName="motif_demande" rows="3"\r
                          placeholder="Pourquoi souhaitez-vous ce catalogue ?"></textarea>\r
                <div *ngIf="form.get('motif_demande')?.invalid && form.get('motif_demande')?.touched"\r
                     class="lms-field-error">\r
                  <i class="isax isax-info-circle me-1"></i>Le motif est obligatoire.\r
                </div>\r
              </div>\r
              <div class="col-12">\r
                <label class="form-label fw-semibold">Objectifs personnels</label>\r
                <textarea class="form-control lms-input" formControlName="objectifs_personnels" rows="2"\r
                          placeholder="Qu'esp\xE9rez-vous acqu\xE9rir avec ce catalogue ?"></textarea>\r
              </div>\r
              <div class="col-md-6">\r
                <label class="form-label fw-semibold">Priorit\xE9</label>\r
                <select class="form-select lms-input" formControlName="priorite">\r
                  <option value="basse">\u{1F7E2} Basse</option>\r
                  <option value="normale">\u{1F7E1} Normale</option>\r
                  <option value="haute">\u{1F7E0} Haute</option>\r
                  <option value="urgente">\u{1F534} Urgente</option>\r
                </select>\r
              </div>\r
              <div class="col-md-6">\r
                <label class="form-label fw-semibold">Date souhait\xE9e de d\xE9but</label>\r
                <input type="date" class="form-control lms-input" formControlName="date_souhaitee_debut">\r
              </div>\r
              <div class="col-12">\r
                <label class="form-label">Commentaire <span class="text-muted small">(optionnel)</span></label>\r
                <textarea class="form-control lms-input" formControlName="commentaire_employe" rows="2"\r
                          placeholder="Informations compl\xE9mentaires..."></textarea>\r
              </div>\r
            </div>\r
          </form>\r
        </ng-container>\r
\r
      </div>\r
\r
      <div class="modal-footer lms-modal__footer">\r
        <button class="btn lms-btn-cancel" (click)="closeModal()">\r
          <i class="isax isax-close-square me-1"></i>Annuler\r
        </button>\r
        <button class="btn lms-btn-submit"\r
                *ngIf="selectedCatalogue"\r
                [disabled]="submitting || !canSubmit()"\r
                (click)="submitRequest()">\r
          <span *ngIf="submitting" class="spinner-border spinner-border-sm me-2"></span>\r
          <i *ngIf="!submitting" class="isax isax-send-2 me-2"></i>\r
          {{ submitting ? 'Envoi en cours...' : 'Valider la demande' }}\r
        </button>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>`, styles: ['/* src/app/features/student/students-catalogue/students-catalogue.component.scss */\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes toast-progress {\n  from {\n    width: 100%;\n  }\n  to {\n    width: 0%;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.pq-kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 12px;\n}\n@media (max-width: 1200px) {\n  .pq-kpi-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .pq-kpi-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .pq-kpi-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.pq-kpi-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border-top: 3px solid transparent;\n}\n.pq-kpi-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.pq-kpi-card--active {\n  border-color: currentColor;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.pq-kpi-card__icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.pq-kpi-card__body {\n  min-width: 0;\n}\n.pq-kpi-card__value {\n  font-size: 22px;\n  font-weight: 800;\n  color: #111827;\n  line-height: 1;\n}\n.pq-kpi-card__label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  margin-top: 2px;\n  white-space: nowrap;\n}\n.pq-kpi-card--teal {\n  border-top-color: #069b8f;\n}\n.pq-kpi-card--teal .pq-kpi-card__icon {\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.pq-kpi-card--teal.pq-kpi-card--active {\n  border-color: #069b8f;\n}\n.pq-kpi-card--green {\n  border-top-color: #16a34a;\n}\n.pq-kpi-card--green .pq-kpi-card__icon {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.pq-kpi-card--green.pq-kpi-card--active {\n  border-color: #16a34a;\n}\n.pq-kpi-card--orange {\n  border-top-color: #d97706;\n}\n.pq-kpi-card--orange .pq-kpi-card__icon {\n  background: #fffbeb;\n  color: #d97706;\n}\n.pq-kpi-card--orange.pq-kpi-card--active {\n  border-color: #d97706;\n}\n.pq-kpi-card--red {\n  border-top-color: #dc2626;\n}\n.pq-kpi-card--red .pq-kpi-card__icon {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.pq-kpi-card--red.pq-kpi-card--active {\n  border-color: #dc2626;\n}\n.pq-kpi-card--gray {\n  border-top-color: #9ca3af;\n}\n.pq-kpi-card--gray .pq-kpi-card__icon {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.pq-kpi-card--gray.pq-kpi-card--active {\n  border-color: #9ca3af;\n}\n.sc-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.sc-header__title {\n  font-size: 20px;\n  font-weight: 800;\n  color: #111827;\n  margin-bottom: 4px;\n  letter-spacing: -0.3px;\n}\n.sc-header__subtitle {\n  font-size: 13px;\n  color: #9ca3af;\n  margin: 0;\n}\n.sc-header__actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.sc-header__toggle-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid #e5e7eb;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sc-header__toggle-btn i {\n  font-size: 14px;\n}\n.sc-header__toggle-btn:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f5;\n}\n.sc-header__toggle-btn--active {\n  background: #069b8f !important;\n  border-color: #069b8f !important;\n  color: #fff !important;\n}\n.sc-header__new-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 20px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.4795031056, 115.7204968944, 106.7614906832) 100%);\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(6, 155, 143, 0.3);\n  transition: all 0.2s ease;\n}\n.sc-header__new-btn i {\n  font-size: 16px;\n}\n.sc-header__new-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(6, 155, 143, 0.4);\n}\n.sc-filters {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px 18px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.sc-filters__search {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.sc-filters__search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  font-size: 15px;\n  pointer-events: none;\n}\n.sc-filters__search-input {\n  width: 100%;\n  padding: 9px 14px 9px 36px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 50px;\n  font-size: 13px;\n  outline: none;\n  transition: all 0.2s ease;\n  background: #f9fafb;\n}\n.sc-filters__search-input::placeholder {\n  color: #9ca3af;\n}\n.sc-filters__search-input:focus {\n  border-color: #069b8f;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.1);\n}\n.sc-filters__pills {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.sc-filters__pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid #e5e7eb;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-filters__pill:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f5;\n}\n.sc-filters__pill--active {\n  background: #069b8f !important;\n  border-color: #069b8f !important;\n  color: #fff !important;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.25);\n}\n.sc-filters__pill--attente:hover {\n  border-color: #d97706;\n  color: #d97706;\n  background: #fffbeb;\n}\n.sc-filters__pill--validee:hover {\n  border-color: #16a34a;\n  color: #16a34a;\n  background: #f0fdf4;\n}\n.sc-filters__pill--refusee:hover {\n  border-color: #dc2626;\n  color: #dc2626;\n  background: #fef2f2;\n}\n.sc-filters__pill--annulee:hover {\n  border-color: #9ca3af;\n  color: #4b5563;\n  background: #f3f4f6;\n}\n.sc-filters__pill-count {\n  font-size: 11px;\n  font-weight: 600;\n  opacity: 0.8;\n}\n.sc-filters__reset {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #dc2626;\n  background: rgba(220, 38, 38, 0.06);\n  border: 1.5px solid rgba(220, 38, 38, 0.2);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-filters__reset:hover {\n  background: rgba(220, 38, 38, 0.12);\n  border-color: #dc2626;\n}\n.sc-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px 0;\n  color: #9ca3af;\n}\n.sc-loading__spinner {\n  width: 44px;\n  height: 44px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n.sc-loading p {\n  margin-top: 16px;\n  font-size: 13px;\n}\n.sc-table-card {\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n  overflow: visible;\n}\n.sc-table-card__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  background: #fff;\n  border-bottom: 1px solid #f3f4f6;\n  border-radius: 12px 12px 0 0;\n}\n.sc-table-card__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  display: flex;\n  align-items: center;\n}\n.sc-table-card__count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 24px;\n  height: 24px;\n  padding: 0 8px;\n  background: #069b8f;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 700;\n  margin-left: 8px;\n}\n.sc-table thead th {\n  font-size: 12px;\n  font-weight: 700;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n  padding: 12px 16px;\n  white-space: nowrap;\n}\n.sc-table tbody td {\n  padding: 14px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  vertical-align: middle;\n}\n.sc-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.sc-table tbody tr:hover {\n  background: #f9fafb;\n}\n.sc-table-row {\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.sc-table-row:hover td {\n  background: #f9fafb !important;\n}\n.sc-row--refusee {\n  background: rgba(220, 38, 38, 0.025) !important;\n}\n.sc-row--validee {\n  background: rgba(22, 163, 74, 0.025) !important;\n}\n.sc-formation {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.sc-formation__thumb {\n  width: 56px;\n  height: 56px;\n  border-radius: 8px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid #e5e7eb;\n}\n.sc-formation__info {\n  flex: 1;\n}\n.sc-formation__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1.3;\n  margin-bottom: 3px;\n}\n.sc-formation__sub {\n  font-size: 12px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.sc-formation__details {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.sc-detail-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 9px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n}\n.sc-detail-chip i {\n  font-size: 11px;\n}\n.sc-detail-chip--award {\n  background: rgba(217, 119, 6, 0.1);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.sc-date {\n  font-size: 13px;\n  color: #4b5563;\n  font-weight: 500;\n}\n.sc-date--time {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 400;\n  margin-top: 1px;\n}\n.sc-priorite {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.sc-priorite.priorite-urgente {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n}\n.sc-priorite.priorite-haute {\n  background: rgba(217, 119, 6, 0.1);\n  color: #d97706;\n}\n.sc-priorite.priorite-normale {\n  background: rgba(6, 155, 143, 0.1);\n  color: #069b8f;\n}\n.sc-priorite.priorite-basse {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.sc-statut-cell {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  position: relative;\n}\n.sc-statut {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.sc-statut.statut-attente {\n  background: #fffbeb;\n  color: #d97706;\n}\n.sc-statut.statut-validee {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.sc-statut.statut-refusee {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.sc-statut.statut-annulee {\n  background: #f3f4f6;\n  color: #9ca3af;\n}\n.sc-statut-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.sc-statut-icon i {\n  font-size: 22px;\n}\n.sc-statut-icon--validee {\n  color: #16a34a;\n}\n.sc-statut-icon--refusee {\n  color: #dc2626;\n}\n.sc-statut-icon--annulee {\n  color: #9ca3af;\n}\n.sc-motif-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.sc-motif-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #fef2f2;\n  color: #dc2626;\n  border: 1px solid rgba(220, 38, 38, 0.2);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sc-motif-btn i {\n  font-size: 13px;\n}\n.sc-motif-btn:hover {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.sc-motif-tooltip {\n  position: absolute;\n  bottom: calc(100% + 10px);\n  left: 50%;\n  transform: translateX(-50%);\n  width: 260px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.06);\n  z-index: 200;\n  overflow: hidden;\n  animation: fadeIn 0.15s ease;\n}\n.sc-motif-tooltip::after {\n  content: "";\n  position: absolute;\n  bottom: -6px;\n  left: 50%;\n  width: 12px;\n  height: 12px;\n  background: #fff;\n  border-right: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  transform: translateX(-50%) rotate(45deg);\n}\n.sc-motif-tooltip__header {\n  display: flex;\n  align-items: center;\n  padding: 10px 14px;\n  background: #fef2f2;\n  color: #dc2626;\n  font-size: 12px;\n  font-weight: 700;\n}\n.sc-motif-tooltip__header i {\n  font-size: 14px;\n}\n.sc-motif-tooltip__body {\n  padding: 12px 14px;\n  font-size: 13px;\n  color: #4b5563;\n  line-height: 1.5;\n  margin: 0;\n}\n.sc-motif-tooltip__footer {\n  padding: 8px 14px;\n  background: #f9fafb;\n  border-top: 1px solid #f3f4f6;\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: flex-start;\n  gap: 4px;\n}\n.sc-motif-tooltip__footer em {\n  font-style: italic;\n  line-height: 1.4;\n}\n.sc-action-btn {\n  position: relative;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.sc-action-btn i {\n  font-size: 17px;\n  transition: all 0.2s ease;\n}\n.sc-action-btn__tooltip {\n  position: absolute;\n  bottom: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%) translateY(4px);\n  background: #111827;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n  padding: 5px 10px;\n  border-radius: 6px;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.15s ease, transform 0.15s ease;\n  z-index: 100;\n}\n.sc-action-btn__tooltip::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 5px solid transparent;\n  border-top-color: #111827;\n}\n.sc-action-btn:hover .sc-action-btn__tooltip {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0);\n}\n.sc-action-btn--danger {\n  background: #fef2f2;\n  border-color: rgba(220, 38, 38, 0.25);\n}\n.sc-action-btn--danger i {\n  color: #dc2626;\n}\n.sc-action-btn--danger:hover {\n  background: #dc2626;\n  border-color: #dc2626;\n  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.35);\n}\n.sc-action-btn--danger:hover i {\n  color: #fff;\n}\n.sc-action-btn--primary {\n  background: #e6f7f5;\n  border-color: rgba(6, 155, 143, 0.25);\n}\n.sc-action-btn--primary i {\n  color: #069b8f;\n}\n.sc-action-btn--primary:hover {\n  background: #069b8f;\n  border-color: #069b8f;\n  box-shadow: 0 4px 12px rgba(6, 155, 143, 0.35);\n}\n.sc-action-btn--primary:hover i {\n  color: #fff;\n}\n.sc-btn-annuler {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid rgba(220, 38, 38, 0.3);\n  background: #fef2f2;\n  color: #dc2626;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-btn-annuler i {\n  font-size: 13px;\n}\n.sc-btn-annuler:hover:not(:disabled) {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.sc-btn-annuler:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sc-btn-relancer {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid rgba(6, 155, 143, 0.3);\n  background: #e6f7f5;\n  color: #069b8f;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-btn-relancer i {\n  font-size: 13px;\n}\n.sc-btn-relancer:hover:not(:disabled) {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n}\n.sc-btn-relancer:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sc-grid-motif-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  border: 1.5px solid rgba(220, 38, 38, 0.3);\n  background: #fef2f2;\n  color: #dc2626;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-grid-motif-btn i {\n  font-size: 12px;\n}\n.sc-grid-motif-btn:hover {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.sc-btn--xs {\n  width: 30px;\n  height: 30px;\n  padding: 0 !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50% !important;\n}\n.sc-btn--xs i {\n  font-size: 14px;\n  margin: 0 !important;\n}\n.sc-btn-voir-formation {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid rgba(6, 155, 143, 0.3);\n  background: #e6f7f5;\n  color: #069b8f;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sc-btn-voir-formation i {\n  font-size: 13px;\n}\n.sc-btn-voir-formation:hover {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n}\n.sc-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\n  gap: 20px;\n  animation: fadeIn 0.2s ease;\n}\n.sc-grid-card {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n  cursor: pointer;\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.2s ease;\n  display: flex;\n  flex-direction: column;\n}\n.sc-grid-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n  border-color: #069b8f;\n}\n.sc-grid-card--validee {\n  border-top: 3px solid #16a34a;\n}\n.sc-grid-card--refusee {\n  border-top: 3px solid #dc2626;\n}\n.sc-grid-card--attente {\n  border-top: 3px solid #d97706;\n}\n.sc-grid-card__cover {\n  position: relative;\n  height: 155px;\n  overflow: hidden;\n  background: #f3f4f6;\n}\n.sc-grid-card__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.4s ease;\n}\n.sc-grid-card:hover .sc-grid-card__img {\n  transform: scale(1.05);\n}\n.sc-grid-card__cover-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.6) 0%,\n      rgba(0, 0, 0, 0.1) 55%,\n      transparent 100%);\n  display: flex;\n  align-items: flex-end;\n  padding: 12px 14px;\n}\n.sc-grid-card__priorite {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 10px !important;\n  padding: 3px 9px !important;\n}\n.sc-grid-card__body {\n  padding: 14px 16px 12px;\n  flex: 1;\n}\n.sc-grid-card__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 4px;\n  line-height: 1.35;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.sc-grid-card__sub {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.sc-grid-card__sub i {\n  font-size: 12px;\n}\n.sc-grid-card__chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-top: 8px;\n}\n.sc-grid-card__footer {\n  padding: 10px 16px;\n  border-top: 1px solid #f3f4f6;\n  background: #f9fafb;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.sc-grid-card__actions {\n  display: flex;\n  gap: 6px;\n}\n.sc-grid-card__date {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.sc-grid-card__date i {\n  font-size: 12px;\n}\n.sc-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 72px 20px;\n  text-align: center;\n}\n.sc-empty__icon {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: #e6f7f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.sc-empty__icon i {\n  font-size: 2rem;\n  color: #069b8f;\n}\n.sc-empty__title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #4b5563;\n  margin-bottom: 8px;\n}\n.sc-empty p {\n  font-size: 13px;\n  color: #9ca3af;\n  margin-bottom: 20px;\n}\n.lms-modal {\n  border-radius: 16px;\n  overflow: hidden;\n  border: none;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.lms-modal__header {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.099378882, 105.900621118, 97.701863354) 100%);\n  padding: 18px 24px;\n  border: none;\n}\n.lms-modal__header small {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 12px;\n}\n.lms-modal__icon {\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.lms-modal .modal-title {\n  color: #fff;\n  font-weight: 700;\n  font-size: 16px;\n}\n.lms-modal__body {\n  padding: 28px 24px;\n  background: #f9fafb;\n  max-height: 72vh;\n  overflow-y: auto;\n}\n.lms-modal__body::-webkit-scrollbar {\n  width: 5px;\n}\n.lms-modal__body::-webkit-scrollbar-track {\n  background: #f3f4f6;\n}\n.lms-modal__body::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.lms-modal__footer {\n  background: #fff;\n  border-top: 1px solid #e5e7eb;\n  padding: 16px 24px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.lms-detail-chips {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.lms-detail-chips__left {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.lms-detail-section {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 16px 18px;\n}\n.lms-detail-section__title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #374151;\n  display: flex;\n  align-items: center;\n  margin-bottom: 2px;\n}\n.lms-detail-section__title i {\n  font-size: 15px;\n  color: #069b8f;\n}\n.lms-detail-section__body {\n  font-size: 13px;\n  color: #4b5563;\n  line-height: 1.6;\n  margin: 8px 0 0 0;\n}\n.lms-detail-section--danger {\n  border-color: rgba(220, 38, 38, 0.3);\n  background: #fef2f2;\n}\n.lms-detail-section--danger .lms-detail-section__title {\n  color: #dc2626;\n}\n.lms-detail-section--danger .lms-detail-section__title i {\n  color: #dc2626;\n}\n.lms-detail-section--success {\n  border-color: rgba(22, 163, 74, 0.3);\n  background: #f0fdf4;\n}\n.lms-detail-section--success .lms-detail-section__title {\n  color: #16a34a;\n}\n.lms-detail-section--success .lms-detail-section__title i {\n  color: #16a34a;\n}\n.lms-formation-banner {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px;\n}\n.lms-formation-banner__img {\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid #e5e7eb;\n}\n.lms-formation-banner__body {\n  flex: 1;\n  min-width: 0;\n}\n.lms-formation-banner__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 3px;\n}\n.lms-formation-banner__sub {\n  font-size: 12px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.lms-formation-banner__tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.lms-info-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #f3f4f6;\n  height: 100%;\n  transition: all 0.2s ease;\n}\n.lms-info-item:hover {\n  border-color: rgba(6, 155, 143, 0.25);\n  background: #e6f7f5;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.lms-info-item i {\n  font-size: 20px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.lms-info-item small {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  letter-spacing: 0.2px;\n  display: block;\n  margin-bottom: 2px;\n}\n.lms-info-item strong {\n  font-size: 13px;\n  font-weight: 700;\n  color: #111827;\n  display: block;\n}\n.lms-formation-desc {\n  padding: 12px 14px;\n  background: #e6f7f5;\n  border-radius: 8px;\n  border-left: 3px solid #069b8f;\n}\n.lms-formation-desc__label {\n  font-size: 11px;\n  font-weight: 700;\n  color: #069b8f;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-bottom: 6px;\n}\n.lms-formation-desc__label i {\n  font-size: 13px;\n}\n.lms-formation-desc__text {\n  font-size: 13px;\n  color: #4b5563;\n  line-height: 1.65;\n  margin: 0;\n  white-space: pre-line;\n}\n.lms-formation-desc--objectifs {\n  border-left-color: #d97706;\n  background: #fffbeb;\n}\n.lms-formation-desc--objectifs .lms-formation-desc__label {\n  color: #d97706;\n}\n.lms-formation-desc--public {\n  border-left-color: #7c3aed;\n  background: #f5f3ff;\n}\n.lms-formation-desc--public .lms-formation-desc__label {\n  color: #7c3aed;\n}\n.lms-formation-desc--prerequis {\n  border-left-color: #ea580c;\n  background: #fff7ed;\n}\n.lms-formation-desc--prerequis .lms-formation-desc__label {\n  color: #ea580c;\n}\n.lms-modules-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.lms-modules-breadcrumb {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 4px;\n}\n.lms-modules-breadcrumb__item {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6b7280;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  border-radius: 50px;\n  padding: 3px 10px;\n}\n.lms-modules-breadcrumb__item i {\n  font-size: 11px;\n  color: #069b8f;\n}\n.lms-modules-breadcrumb__sep {\n  font-size: 12px;\n  color: #d1d5db;\n}\n.lms-accordion {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.lms-accordion__item {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #fff;\n  transition: box-shadow 0.2s ease;\n}\n.lms-accordion__item:hover {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.lms-accordion__header {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  background: #f9fafb;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s ease;\n  gap: 12px;\n}\n.lms-accordion__header:hover {\n  background: #e6f7f5;\n}\n.lms-accordion__header--open {\n  background: #e6f7f5;\n  border-bottom: 1px solid rgba(6, 155, 143, 0.15);\n}\n.lms-accordion__header-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n}\n.lms-accordion__header-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.lms-accordion__num {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #069b8f;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.lms-accordion__title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.lms-accordion__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  margin-top: 2px;\n}\n.lms-accordion__count {\n  font-size: 11px;\n  font-weight: 600;\n  border-radius: 50px;\n  padding: 2px 8px;\n  white-space: nowrap;\n}\n.lms-accordion__count--teal {\n  color: #069b8f;\n  background: rgba(6, 155, 143, 0.1);\n}\n.lms-accordion__count--purple {\n  color: #7c3aed;\n  background: rgba(124, 58, 237, 0.1);\n}\n.lms-accordion__count--warning {\n  color: #d97706;\n  background: rgba(217, 119, 6, 0.1);\n}\n.lms-accordion__chevron {\n  font-size: 16px;\n  color: #069b8f;\n  transition: transform 0.2s ease;\n}\n.lms-accordion__body {\n  animation: fadeIn 0.15s ease;\n}\n.lms-formation-detail-body {\n  display: flex;\n  gap: 14px;\n  padding: 14px 16px;\n  background: #f9fafb;\n}\n.lms-formation-detail-body__img-wrap {\n  flex-shrink: 0;\n}\n.lms-formation-detail-body__img {\n  width: 72px;\n  height: 72px;\n  border-radius: 8px;\n  object-fit: cover;\n  border: 1px solid #e5e7eb;\n}\n.lms-formation-detail-body__content {\n  flex: 1;\n  min-width: 0;\n}\n.lms-formation-detail-body__desc {\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 6px 0 0 0;\n}\n.cd-demande-detail {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.cd-demande-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid #f3f4f6;\n}\n.cd-demande-row:last-child {\n  border-bottom: none;\n}\n.cd-demande-label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #9ca3af;\n  min-width: 130px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.lms-meta-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 9px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.lms-meta-chip i {\n  font-size: 11px;\n}\n.lms-meta-chip--purple {\n  background: #f5f3ff;\n  color: #7c3aed;\n  border-color: rgba(124, 58, 237, 0.2);\n}\n.lms-meta-chip--teal {\n  background: #e6f7f5;\n  color: #069b8f;\n  border-color: rgba(6, 155, 143, 0.2);\n}\n.lms-meta-chip--warning {\n  background: #fffbeb;\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.lms-meta-chip--success {\n  background: #f0fdf4;\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.lms-meta-chip--orange {\n  background: #fff7ed;\n  color: #ea580c;\n  border-color: rgba(234, 88, 12, 0.2);\n}\n.lms-meta-chip--award {\n  background: rgba(217, 119, 6, 0.1);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.lms-btn-cancel {\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 50px;\n  padding: 10px 22px;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.lms-btn-cancel:hover {\n  background: #e5e7eb;\n  color: #111827;\n}\n.lms-btn-submit {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.4795031056, 115.7204968944, 106.7614906832) 100%);\n  color: #fff;\n  border: none;\n  border-radius: 50px;\n  padding: 10px 28px;\n  font-weight: 700;\n  font-size: 14px;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.4);\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.lms-btn-submit:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(6, 155, 143, 0.5);\n  color: #fff;\n}\n.lms-btn-submit:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.lms-toast-container {\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 9999;\n  pointer-events: none;\n  opacity: 0;\n  transform: translateX(20px);\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n.lms-toast-container.visible {\n  opacity: 1;\n  transform: translateX(0);\n  pointer-events: all;\n}\n.lms-toast {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  min-width: 320px;\n  max-width: 420px;\n  padding: 16px 18px;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.06);\n  position: relative;\n  overflow: hidden;\n  background: #fff;\n}\n.lms-toast__icon {\n  font-size: 22px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.lms-toast__body {\n  flex: 1;\n}\n.lms-toast__label {\n  display: block;\n  font-weight: 700;\n  font-size: 13px;\n  letter-spacing: 0.3px;\n  margin-bottom: 2px;\n}\n.lms-toast__message {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.5;\n  opacity: 0.85;\n}\n.lms-toast__close {\n  background: none;\n  border: none;\n  padding: 2px;\n  cursor: pointer;\n  font-size: 16px;\n  opacity: 0.6;\n  transition: all 0.2s ease;\n  color: #4b5563;\n}\n.lms-toast__close:hover {\n  opacity: 1;\n}\n.lms-toast__progress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 3px;\n  width: 100%;\n  animation: toast-progress 4s linear forwards;\n  border-radius: 0 0 12px 12px;\n}\n.lms-toast--success {\n  border-left: 4px solid #16a34a;\n}\n.lms-toast--success .lms-toast__icon,\n.lms-toast--success .lms-toast__label {\n  color: #16a34a;\n}\n.lms-toast--success .lms-toast__progress {\n  background: #16a34a;\n}\n.lms-toast--error {\n  border-left: 4px solid #dc2626;\n}\n.lms-toast--error .lms-toast__icon,\n.lms-toast--error .lms-toast__label {\n  color: #dc2626;\n}\n.lms-toast--error .lms-toast__progress {\n  background: #dc2626;\n}\n.lms-toast--warning {\n  border-left: 4px solid #d97706;\n}\n.lms-toast--warning .lms-toast__icon,\n.lms-toast--warning .lms-toast__label {\n  color: #d97706;\n}\n.lms-toast--warning .lms-toast__progress {\n  background: #d97706;\n}\n.lms-progress-bar {\n  display: flex;\n  align-items: center;\n  padding: 14px 28px;\n  background: #fff;\n  border-bottom: 1px solid #f3f4f6;\n}\n.lms-progress-bar__step {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n  opacity: 0.35;\n  transition: all 0.2s ease;\n}\n.lms-progress-bar__step.active {\n  opacity: 1;\n}\n.lms-progress-bar__step.done {\n  opacity: 1;\n}\n.lms-progress-bar__dot {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 2px solid #e5e7eb;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  color: #9ca3af;\n  transition: all 0.2s ease;\n}\n.active > .lms-progress-bar__dot {\n  border-color: #069b8f;\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.done > .lms-progress-bar__dot {\n  border-color: #16a34a;\n  background: #16a34a;\n  color: #fff;\n}\n.lms-progress-bar__label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  white-space: nowrap;\n}\n.active > .lms-progress-bar__label {\n  color: #069b8f;\n}\n.done > .lms-progress-bar__label {\n  color: #16a34a;\n}\n.lms-progress-bar__line {\n  flex: 1;\n  height: 2px;\n  background: #e5e7eb;\n  margin: 0 6px;\n  margin-bottom: 16px;\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.lms-progress-bar__line.done {\n  background: #16a34a;\n}\n.lms-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  animation: fadeIn 0.2s ease;\n}\n.lms-list-item {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.lms-list-item:hover {\n  border-color: #069b8f;\n  background: #e6f7f5;\n  transform: translateX(4px);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.lms-list-item:hover .lms-list-item__arrow {\n  color: #069b8f;\n}\n.lms-list-item__icon-wrap {\n  width: 42px;\n  height: 42px;\n  border-radius: 8px;\n  background: #e6f7f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #069b8f;\n  font-size: 18px;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n.lms-list-item__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.lms-list-item__body {\n  flex: 1;\n  min-width: 0;\n}\n.lms-list-item__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.lms-list-item__desc {\n  font-size: 12px;\n  color: #9ca3af;\n  line-height: 1.4;\n  margin-bottom: 6px;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.lms-list-item__meta {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.lms-list-item__arrow {\n  color: #9ca3af;\n  font-size: 16px;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n}\n.lms-selected-recap {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #e6f7f5;\n  border: 1.5px solid rgba(6, 155, 143, 0.2);\n  border-radius: 12px;\n  padding: 12px 16px;\n}\n.lms-selected-recap__icon {\n  width: 38px;\n  height: 38px;\n  border-radius: 8px;\n  background: #069b8f;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 17px;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n.lms-selected-recap__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.lms-selected-recap__body {\n  flex: 1;\n}\n.lms-selected-recap__label {\n  font-size: 10px;\n  font-weight: 600;\n  color: #069b8f;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 2px;\n}\n.lms-selected-recap__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n}\n.lms-collapsible {\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.lms-collapsible__trigger {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  background: #fff;\n  border: none;\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.lms-collapsible__trigger:hover {\n  background: #f9fafb;\n}\n.lms-collapsible__trigger i {\n  font-size: 14px;\n  color: #9ca3af;\n}\n.lms-collapsible__body {\n  border-top: 1px solid #f3f4f6;\n  padding: 12px;\n  background: #f9fafb;\n  animation: fadeIn 0.15s ease;\n}\n.lms-formations-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.lms-formation-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 8px 12px;\n  transition: all 0.2s ease;\n}\n.lms-formation-item:hover {\n  border-color: #069b8f;\n}\n.lms-formation-item__num {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #e6f7f5;\n  color: #069b8f;\n  font-size: 11px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.lms-formation-item__img {\n  width: 38px;\n  height: 38px;\n  border-radius: 8px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid #e5e7eb;\n}\n.lms-formation-item__body {\n  flex: 1;\n}\n.lms-formation-item__title {\n  font-size: 12px;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 3px;\n  line-height: 1.3;\n}\n.lms-formation-item__meta {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.lms-step__header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.lms-step__number {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #4b5563;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.lms-step__number--blue {\n  background: #069b8f;\n}\n.lms-step__title {\n  font-weight: 700;\n  font-size: 14px;\n  color: #111827;\n  margin: 0;\n}\n.lms-back-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #069b8f;\n  background: #e6f7f5;\n  border: 1.5px solid rgba(6, 155, 143, 0.2);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.lms-back-btn i {\n  font-size: 13px;\n}\n.lms-back-btn:hover {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n}\n.lms-input {\n  border-radius: 8px;\n  border: 1.5px solid #e5e7eb;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.lms-input:focus {\n  border-color: #069b8f;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.12);\n}\n.lms-field-error {\n  color: #dc2626;\n  font-size: 12px;\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.lms-divider {\n  border: none;\n  border-top: 2px dashed #e5e7eb;\n  margin: 24px 0;\n}\n.lms-empty-inline {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 24px;\n  border: 2px dashed #e5e7eb;\n  border-radius: 12px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.lms-empty-inline i {\n  font-size: 20px;\n  opacity: 0.5;\n}\n.lms-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 32px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n@media (max-width: 767px) {\n  .sc-header {\n    flex-direction: column;\n  }\n  .sc-filters {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .sc-grid {\n    grid-template-columns: 1fr;\n  }\n  .sc-motif-tooltip {\n    left: auto;\n    right: 0;\n    transform: none;\n  }\n  .sc-motif-tooltip::after {\n    left: auto;\n    right: 20px;\n    transform: rotate(45deg);\n  }\n  .lms-toast-container {\n    top: auto;\n    bottom: 20px;\n    right: 16px;\n    left: 16px;\n  }\n  .lms-toast {\n    min-width: unset;\n    width: 100%;\n  }\n  .lms-modal__body {\n    max-height: 65vh;\n  }\n  .lms-formation-detail-body {\n    flex-direction: column;\n  }\n  .pq-kpi-card {\n    padding: 12px;\n  }\n}\n@media (max-width: 991px) {\n  .sc-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 575px) {\n  .sc-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=students-catalogue.component.css.map */\n'] }]
  }], () => [{ type: DemandeFormationService }, { type: FormationsService }, { type: FormBuilder }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentsCatalogueComponent, { className: "StudentsCatalogueComponent", filePath: "src/app/features/student/students-catalogue/students-catalogue.component.ts", lineNumber: 26 });
})();
export {
  StudentsCatalogueComponent
};
//# sourceMappingURL=chunk-WCX2SG5A.js.map
