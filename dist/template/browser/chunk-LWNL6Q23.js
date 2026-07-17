import {
  FormationsService
} from "./chunk-KYEJQ6VQ.js";
import {
  DemandeFormationService
} from "./chunk-44TGPX27.js";
import {
  CustomPaginationComponent
} from "./chunk-QBIBOWET.js";
import "./chunk-M25A5D3F.js";
import "./chunk-GD4TWLVQ.js";
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
} from "./chunk-IKOSZIEY.js";
import {
  Router,
  RouterModule
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-5DIP3EXV.js";
import "./chunk-SS7FF3CJ.js";
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTSSTHJF.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/student/student-demande/student-demande.component.ts
function StudentDemandeComponent_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 85);
  }
}
function StudentDemandeComponent_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 86);
  }
}
function StudentDemandeComponent_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 87);
  }
}
function StudentDemandeComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89);
    \u0275\u0275listener("click", function StudentDemandeComponent_div_28_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByStatus(""));
    });
    \u0275\u0275elementStart(2, "div", 90);
    \u0275\u0275element(3, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 91)(5, "div", 92);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 93);
    \u0275\u0275text(8, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 94);
    \u0275\u0275listener("click", function StudentDemandeComponent_div_28_Template_div_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByStatus("en_attente"));
    });
    \u0275\u0275elementStart(10, "div", 90);
    \u0275\u0275element(11, "i", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 91)(13, "div", 92);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 93);
    \u0275\u0275text(16, "En attente");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 96);
    \u0275\u0275listener("click", function StudentDemandeComponent_div_28_Template_div_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByStatus("validee"));
    });
    \u0275\u0275elementStart(18, "div", 90);
    \u0275\u0275element(19, "i", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 91)(21, "div", 92);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 93);
    \u0275\u0275text(24, "Valid\xE9es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 98);
    \u0275\u0275listener("click", function StudentDemandeComponent_div_28_Template_div_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByStatus("refusee"));
    });
    \u0275\u0275elementStart(26, "div", 90);
    \u0275\u0275element(27, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 91)(29, "div", 92);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 93);
    \u0275\u0275text(32, "Refus\xE9es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 100);
    \u0275\u0275listener("click", function StudentDemandeComponent_div_28_Template_div_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByStatus("annulee"));
    });
    \u0275\u0275elementStart(34, "div", 90);
    \u0275\u0275element(35, "i", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 91)(37, "div", 92);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 93);
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
function StudentDemandeComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.totalEnAttente, ")");
  }
}
function StudentDemandeComponent_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.totalValidees, ")");
  }
}
function StudentDemandeComponent_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.totalRefusees, ")");
  }
}
function StudentDemandeComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.totalAnnulees, ")");
  }
}
function StudentDemandeComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275element(1, "div", 104);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement de vos demandes...");
    \u0275\u0275elementEnd()();
  }
}
function StudentDemandeComponent_ng_container_52_div_1_tr_25_small_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 137);
    \u0275\u0275element(1, "i", 138);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", demande_r4.sous_titre_affiche, " ");
  }
}
function StudentDemandeComponent_ng_container_52_div_1_tr_25_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 139);
    \u0275\u0275element(1, "i", 140);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", demande_r4.formation.niveau, " ");
  }
}
function StudentDemandeComponent_ng_container_52_div_1_tr_25_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 139);
    \u0275\u0275element(1, "i", 141);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", demande_r4.formation.duree_totale, "h ");
  }
}
function StudentDemandeComponent_ng_container_52_div_1_tr_25_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 139);
    \u0275\u0275element(1, "i", 142);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", demande_r4.formation.categorie.nom, " ");
  }
}
function StudentDemandeComponent_ng_container_52_div_1_tr_25_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 143);
    \u0275\u0275element(1, "i", 144);
    \u0275\u0275text(2, "Certifiante ");
    \u0275\u0275elementEnd();
  }
}
function StudentDemandeComponent_ng_container_52_div_1_tr_25_div_27_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275element(1, "i", 156);
    \u0275\u0275text(2, "Refus\xE9 par : ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const demande_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(demande_r4.traite_par_nom);
  }
}
function StudentDemandeComponent_ng_container_52_div_1_tr_25_div_27_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157);
    \u0275\u0275element(1, "i", 158);
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
function StudentDemandeComponent_ng_container_52_div_1_tr_25_div_27_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 149)(1, "div", 150);
    \u0275\u0275element(2, "i", 151);
    \u0275\u0275text(3, "Motif de refus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 152);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, StudentDemandeComponent_ng_container_52_div_1_tr_25_div_27_div_4_div_6_Template, 5, 1, "div", 153)(7, StudentDemandeComponent_ng_container_52_div_1_tr_25_div_27_div_4_div_7_Template, 4, 1, "div", 154);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(demande_r4.motif_refus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showRefusePerson && demande_r4.traite_par_nom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r4.commentaire_rh);
  }
}
function StudentDemandeComponent_ng_container_52_div_1_tr_25_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 145);
    \u0275\u0275listener("mouseenter", function StudentDemandeComponent_ng_container_52_div_1_tr_25_div_27_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r5);
      const demande_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showMotif(demande_r4.id));
    })("mouseleave", function StudentDemandeComponent_ng_container_52_div_1_tr_25_div_27_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.hideMotif());
    })("click", function StudentDemandeComponent_ng_container_52_div_1_tr_25_div_27_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "button", 146);
    \u0275\u0275element(2, "i", 147);
    \u0275\u0275text(3, " Motif");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, StudentDemandeComponent_ng_container_52_div_1_tr_25_div_27_div_4_Template, 8, 3, "div", 148);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isMotifVisible(demande_r4.id));
  }
}
function StudentDemandeComponent_ng_container_52_div_1_tr_25_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 159);
    \u0275\u0275listener("click", function StudentDemandeComponent_ng_container_52_div_1_tr_25_ng_container_30_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const demande_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.annulerDemande(demande_r4.id, $event));
    });
    \u0275\u0275element(2, "i", 99);
    \u0275\u0275elementStart(3, "span", 160);
    \u0275\u0275text(4, "Annuler la demande");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 161);
    \u0275\u0275listener("click", function StudentDemandeComponent_ng_container_52_div_1_tr_25_ng_container_30_Template_div_click_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const demande_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.relancerDemande(demande_r4.id, $event));
    });
    \u0275\u0275element(6, "i", 36);
    \u0275\u0275elementStart(7, "span", 160);
    \u0275\u0275text(8, "Relancer la demande");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function StudentDemandeComponent_ng_container_52_div_1_tr_25_span_31_i_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 166);
  }
}
function StudentDemandeComponent_ng_container_52_div_1_tr_25_span_31_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 167);
  }
}
function StudentDemandeComponent_ng_container_52_div_1_tr_25_span_31_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 168);
  }
}
function StudentDemandeComponent_ng_container_52_div_1_tr_25_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 162);
    \u0275\u0275template(1, StudentDemandeComponent_ng_container_52_div_1_tr_25_span_31_i_1_Template, 1, 0, "i", 163)(2, StudentDemandeComponent_ng_container_52_div_1_tr_25_span_31_i_2_Template, 1, 0, "i", 164)(3, StudentDemandeComponent_ng_container_52_div_1_tr_25_span_31_i_3_Template, 1, 0, "i", 165);
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
function StudentDemandeComponent_ng_container_52_div_1_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 119);
    \u0275\u0275listener("click", function StudentDemandeComponent_ng_container_52_div_1_tr_25_Template_tr_click_0_listener($event) {
      const demande_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.ouvrirDetailDemande(demande_r4, $event));
    });
    \u0275\u0275elementStart(1, "td")(2, "div", 120);
    \u0275\u0275element(3, "img", 121);
    \u0275\u0275elementStart(4, "div", 122)(5, "div", 123);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, StudentDemandeComponent_ng_container_52_div_1_tr_25_small_7_Template, 3, 1, "small", 124);
    \u0275\u0275elementStart(8, "div", 125);
    \u0275\u0275template(9, StudentDemandeComponent_ng_container_52_div_1_tr_25_span_9_Template, 3, 1, "span", 126)(10, StudentDemandeComponent_ng_container_52_div_1_tr_25_span_10_Template, 3, 1, "span", 126)(11, StudentDemandeComponent_ng_container_52_div_1_tr_25_span_11_Template, 3, 1, "span", 126)(12, StudentDemandeComponent_ng_container_52_div_1_tr_25_span_12_Template, 3, 0, "span", 127);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td")(14, "span", 128);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 129);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 116)(21, "span", 130);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 116)(24, "div", 131)(25, "span", 132);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, StudentDemandeComponent_ng_container_52_div_1_tr_25_div_27_Template, 5, 1, "div", 133);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td", 134);
    \u0275\u0275listener("click", function StudentDemandeComponent_ng_container_52_div_1_tr_25_Template_td_click_28_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(29, "div", 135);
    \u0275\u0275template(30, StudentDemandeComponent_ng_container_52_div_1_tr_25_ng_container_30_Template, 9, 0, "ng-container", 38)(31, StudentDemandeComponent_ng_container_52_div_1_tr_25_span_31_Template, 4, 4, "span", 136);
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
    \u0275\u0275property("ngIf", demande_r4.formation == null ? null : demande_r4.formation.niveau);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r4.formation == null ? null : demande_r4.formation.duree_totale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r4.formation == null ? null : demande_r4.formation.categorie == null ? null : demande_r4.formation.categorie.nom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r4.formation == null ? null : demande_r4.formation.est_certifiante);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 20, demande_r4.created_at, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 23, demande_r4.created_at, "HH:mm"));
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
function StudentDemandeComponent_ng_container_52_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "div", 107)(2, "div", 108);
    \u0275\u0275element(3, "i", 109);
    \u0275\u0275text(4, " Historique des demandes de formations ");
    \u0275\u0275elementStart(5, "span", 110);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "small", 111);
    \u0275\u0275element(8, "i", 112);
    \u0275\u0275text(9, "Cliquez sur une ligne pour voir les d\xE9tails ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 113)(11, "table", 114)(12, "thead")(13, "tr")(14, "th", 115);
    \u0275\u0275text(15, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Date de soumission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 116);
    \u0275\u0275text(19, "Priorit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 117);
    \u0275\u0275text(21, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 116);
    \u0275\u0275text(23, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, StudentDemandeComponent_ng_container_52_div_1_tr_25_Template, 32, 26, "tr", 118);
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
function StudentDemandeComponent_ng_container_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StudentDemandeComponent_ng_container_52_div_1_Template, 26, 2, "div", 105);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandes.length > 0);
  }
}
function StudentDemandeComponent_ng_container_53_div_1_div_1_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 187);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", demande_r8.sous_titre_affiche, " ");
  }
}
function StudentDemandeComponent_ng_container_53_div_1_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 139);
    \u0275\u0275element(1, "i", 140);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", demande_r8.formation.niveau, " ");
  }
}
function StudentDemandeComponent_ng_container_53_div_1_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 139);
    \u0275\u0275element(1, "i", 141);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", demande_r8.formation.duree_totale, "h ");
  }
}
function StudentDemandeComponent_ng_container_53_div_1_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 139);
    \u0275\u0275element(1, "i", 142);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", demande_r8.formation.categorie.nom, " ");
  }
}
function StudentDemandeComponent_ng_container_53_div_1_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 143);
    \u0275\u0275element(1, "i", 144);
    \u0275\u0275text(2, "Certifiante ");
    \u0275\u0275elementEnd();
  }
}
function StudentDemandeComponent_ng_container_53_div_1_div_1_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 188);
    \u0275\u0275listener("click", function StudentDemandeComponent_ng_container_53_div_1_div_1_ng_container_23_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const demande_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.annulerDemande(demande_r8.id, $event));
    });
    \u0275\u0275element(2, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 189);
    \u0275\u0275listener("click", function StudentDemandeComponent_ng_container_53_div_1_div_1_ng_container_23_Template_button_click_3_listener($event) {
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
function StudentDemandeComponent_ng_container_53_div_1_div_1_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 190);
    \u0275\u0275listener("click", function StudentDemandeComponent_ng_container_53_div_1_div_1_button_24_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const demande_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.ouvrirDetailDemande(demande_r8, $event));
    });
    \u0275\u0275element(1, "i", 191);
    \u0275\u0275text(2, "Motif ");
    \u0275\u0275elementEnd();
  }
}
function StudentDemandeComponent_ng_container_53_div_1_div_1_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 192);
    \u0275\u0275listener("click", function StudentDemandeComponent_ng_container_53_div_1_div_1_button_25_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const demande_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.commencerFormation(demande_r8, $event));
    });
    \u0275\u0275element(1, "i", 193);
    \u0275\u0275text(2, "Commencer ");
    \u0275\u0275elementEnd();
  }
}
function StudentDemandeComponent_ng_container_53_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 172);
    \u0275\u0275listener("click", function StudentDemandeComponent_ng_container_53_div_1_div_1_Template_div_click_0_listener($event) {
      const demande_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.ouvrirDetailDemande(demande_r8, $event));
    });
    \u0275\u0275elementStart(1, "div", 173);
    \u0275\u0275element(2, "img", 174);
    \u0275\u0275elementStart(3, "div", 175)(4, "span", 132);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 176);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 177)(9, "h6", 178);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, StudentDemandeComponent_ng_container_53_div_1_div_1_p_11_Template, 3, 1, "p", 179);
    \u0275\u0275elementStart(12, "div", 180);
    \u0275\u0275template(13, StudentDemandeComponent_ng_container_53_div_1_div_1_span_13_Template, 3, 1, "span", 126)(14, StudentDemandeComponent_ng_container_53_div_1_div_1_span_14_Template, 3, 1, "span", 126)(15, StudentDemandeComponent_ng_container_53_div_1_div_1_span_15_Template, 3, 1, "span", 126)(16, StudentDemandeComponent_ng_container_53_div_1_div_1_span_16_Template, 3, 0, "span", 127);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 181);
    \u0275\u0275listener("click", function StudentDemandeComponent_ng_container_53_div_1_div_1_Template_div_click_17_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(18, "span", 182);
    \u0275\u0275element(19, "i", 183);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 184);
    \u0275\u0275template(23, StudentDemandeComponent_ng_container_53_div_1_div_1_ng_container_23_Template, 5, 0, "ng-container", 38)(24, StudentDemandeComponent_ng_container_53_div_1_div_1_button_24_Template, 3, 0, "button", 185)(25, StudentDemandeComponent_ng_container_53_div_1_div_1_button_25_Template, 3, 0, "button", 186);
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
    \u0275\u0275property("ngIf", demande_r8.formation == null ? null : demande_r8.formation.niveau);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r8.formation == null ? null : demande_r8.formation.duree_totale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r8.formation == null ? null : demande_r8.formation.categorie == null ? null : demande_r8.formation.categorie.nom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r8.formation == null ? null : demande_r8.formation.est_certifiante);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 23, demande_r8.created_at, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", demande_r8.statut === "en_attente");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r8.statut === "refusee" && demande_r8.motif_refus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r8.statut === "validee");
  }
}
function StudentDemandeComponent_ng_container_53_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170);
    \u0275\u0275template(1, StudentDemandeComponent_ng_container_53_div_1_div_1_Template, 26, 26, "div", 171);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.demandes);
  }
}
function StudentDemandeComponent_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StudentDemandeComponent_ng_container_53_div_1_Template, 2, 1, "div", 169);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandes.length > 0);
  }
}
function StudentDemandeComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 194)(1, "div", 195);
    \u0275\u0275element(2, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 196);
    \u0275\u0275text(4, "Aucune demande de formation trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Vos futures demandes de formations appara\xEEtront ici.");
    \u0275\u0275elementEnd()();
  }
}
function StudentDemandeComponent_app_custom_pagination_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-custom-pagination", 197);
    \u0275\u0275listener("pageChange", function StudentDemandeComponent_app_custom_pagination_55_Template_app_custom_pagination_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
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
function StudentDemandeComponent_div_58_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 220);
    \u0275\u0275element(1, "i", 221);
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
function StudentDemandeComponent_div_58_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 222);
    \u0275\u0275element(1, "i", 144);
    \u0275\u0275text(2, "Certifiante ");
    \u0275\u0275elementEnd();
  }
}
function StudentDemandeComponent_div_58_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 223);
    \u0275\u0275listener("click", function StudentDemandeComponent_div_58_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.commencerFormation(ctx_r1.demandeSelectionnee));
    });
    \u0275\u0275element(1, "i", 193);
    \u0275\u0275text(2, "Commencer la formation ");
    \u0275\u0275elementEnd();
  }
}
function StudentDemandeComponent_div_58_div_22_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 243);
    \u0275\u0275element(1, "i", 138);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.demandeSelectionnee.sous_titre_affiche, " ");
  }
}
function StudentDemandeComponent_div_58_div_22_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 244);
    \u0275\u0275element(1, "i", 142);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.demandeSelectionnee.formation.categorie.nom, " ");
  }
}
function StudentDemandeComponent_div_58_div_22_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 245);
    \u0275\u0275element(1, "i", 246);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.demandeSelectionnee.formation.domaine.nom, " ");
  }
}
function StudentDemandeComponent_div_58_div_22_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 247);
    \u0275\u0275element(1, "i", 248);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.demandeSelectionnee.formation.langue, " ");
  }
}
function StudentDemandeComponent_div_58_div_22_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 236);
    \u0275\u0275element(2, "i", 249);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.demandeSelectionnee.formation.niveau_display ?? ctx_r1.demandeSelectionnee.formation.niveau);
  }
}
function StudentDemandeComponent_div_58_div_22_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 236);
    \u0275\u0275element(2, "i", 250);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "Dur\xE9e totale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.demandeSelectionnee.formation.duree_totale, " heure(s)");
  }
}
function StudentDemandeComponent_div_58_div_22_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 236);
    \u0275\u0275element(2, "i", 251);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "Modules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.demandeSelectionnee.formation.nombre_modules, " module(s)");
  }
}
function StudentDemandeComponent_div_58_div_22_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 236);
    \u0275\u0275element(2, "i", 252);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "Le\xE7ons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.demandeSelectionnee.formation.nombre_lecons, " le\xE7on(s)");
  }
}
function StudentDemandeComponent_div_58_div_22_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 236);
    \u0275\u0275element(2, "i", 253);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "Formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.demandeSelectionnee.formation.formateur_nom);
  }
}
function StudentDemandeComponent_div_58_div_22_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 236);
    \u0275\u0275element(2, "i", 254);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.demandeSelectionnee.formation.type_formation_display ?? ctx_r1.demandeSelectionnee.formation.type_formation);
  }
}
function StudentDemandeComponent_div_58_div_22_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 236);
    \u0275\u0275element(2, "i", 255);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "Note moyenne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 1, ctx_r1.demandeSelectionnee.formation.note_moyenne, "1.1-1"), " / 5");
  }
}
function StudentDemandeComponent_div_58_div_22_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 236);
    \u0275\u0275element(2, "i", 256);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "D\xE9but pr\xE9vu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 1, ctx_r1.demandeSelectionnee.formation.date_debut, "dd/MM/yyyy"));
  }
}
function StudentDemandeComponent_div_58_div_22_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 236);
    \u0275\u0275element(2, "i", 257);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "Fin pr\xE9vue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 1, ctx_r1.demandeSelectionnee.formation.date_fin, "dd/MM/yyyy"));
  }
}
function StudentDemandeComponent_div_58_div_22_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 258)(1, "div", 259);
    \u0275\u0275element(2, "i", 260);
    \u0275\u0275text(3, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 261);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.demandeSelectionnee.formation.description);
  }
}
function StudentDemandeComponent_div_58_div_22_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 262)(1, "div", 259);
    \u0275\u0275element(2, "i", 147);
    \u0275\u0275text(3, "Pr\xE9requis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 261);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.demandeSelectionnee.formation.prerequis);
  }
}
function StudentDemandeComponent_div_58_div_22_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 263)(1, "div", 259);
    \u0275\u0275element(2, "i", 264);
    \u0275\u0275text(3, "Public cible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 261);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.demandeSelectionnee.formation.population_cible ?? ctx_r1.demandeSelectionnee.formation.public_cible, " ");
  }
}
function StudentDemandeComponent_div_58_div_22_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 265)(1, "div", 259);
    \u0275\u0275element(2, "i", 266);
    \u0275\u0275text(3, "Comp\xE9tences vis\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 261);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.demandeSelectionnee.formation.competences_visees);
  }
}
function StudentDemandeComponent_div_58_div_22_div_36_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 97);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comp_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", comp_r15, " ");
  }
}
function StudentDemandeComponent_div_58_div_22_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 265)(1, "div", 259);
    \u0275\u0275element(2, "i", 266);
    \u0275\u0275text(3, "Comp\xE9tences vis\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 267);
    \u0275\u0275template(5, StudentDemandeComponent_div_58_div_22_div_36_li_5_Template, 3, 1, "li", 268);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.demandeSelectionnee.formation.competences_acquises);
  }
}
function StudentDemandeComponent_div_58_div_22_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 269)(1, "div", 259);
    \u0275\u0275element(2, "i", 270);
    \u0275\u0275text(3, "Objectifs p\xE9dagogiques");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 261);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.demandeSelectionnee.formation.objectifs ?? ctx_r1.demandeSelectionnee.formation.objectifs_pedagogiques, " ");
  }
}
function StudentDemandeComponent_div_58_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 206)(1, "div", 207);
    \u0275\u0275element(2, "i", 224);
    \u0275\u0275text(3, "Formation demand\xE9e ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 225);
    \u0275\u0275element(5, "img", 226);
    \u0275\u0275elementStart(6, "div", 227)(7, "div", 228);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, StudentDemandeComponent_div_58_div_22_div_9_Template, 3, 1, "div", 229);
    \u0275\u0275elementStart(10, "div", 230);
    \u0275\u0275template(11, StudentDemandeComponent_div_58_div_22_span_11_Template, 3, 1, "span", 231)(12, StudentDemandeComponent_div_58_div_22_span_12_Template, 3, 1, "span", 232)(13, StudentDemandeComponent_div_58_div_22_span_13_Template, 3, 1, "span", 233);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 234);
    \u0275\u0275template(15, StudentDemandeComponent_div_58_div_22_div_15_Template, 8, 1, "div", 235)(16, StudentDemandeComponent_div_58_div_22_div_16_Template, 8, 1, "div", 235)(17, StudentDemandeComponent_div_58_div_22_div_17_Template, 8, 1, "div", 235)(18, StudentDemandeComponent_div_58_div_22_div_18_Template, 8, 1, "div", 235)(19, StudentDemandeComponent_div_58_div_22_div_19_Template, 8, 1, "div", 235)(20, StudentDemandeComponent_div_58_div_22_div_20_Template, 8, 1, "div", 235);
    \u0275\u0275elementStart(21, "div", 70)(22, "div", 236);
    \u0275\u0275element(23, "i", 237);
    \u0275\u0275elementStart(24, "div")(25, "small");
    \u0275\u0275text(26, "Certificat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(29, StudentDemandeComponent_div_58_div_22_div_29_Template, 9, 4, "div", 235)(30, StudentDemandeComponent_div_58_div_22_div_30_Template, 9, 4, "div", 235)(31, StudentDemandeComponent_div_58_div_22_div_31_Template, 9, 4, "div", 235);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, StudentDemandeComponent_div_58_div_22_div_32_Template, 6, 1, "div", 238)(33, StudentDemandeComponent_div_58_div_22_div_33_Template, 6, 1, "div", 239)(34, StudentDemandeComponent_div_58_div_22_div_34_Template, 6, 1, "div", 240)(35, StudentDemandeComponent_div_58_div_22_div_35_Template, 6, 1, "div", 241)(36, StudentDemandeComponent_div_58_div_22_div_36_Template, 6, 1, "div", 241)(37, StudentDemandeComponent_div_58_div_22_div_37_Template, 6, 1, "div", 242);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r1.demandeSelectionnee.image_affiche, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.demandeSelectionnee.titre_affiche);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.sous_titre_affiche);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.categorie == null ? null : ctx_r1.demandeSelectionnee.formation.categorie.nom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.domaine == null ? null : ctx_r1.demandeSelectionnee.formation.domaine.nom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.langue);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.niveau);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.duree_totale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.nombre_modules) != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.nombre_lecons) != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.formateur_nom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.type_formation);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.demandeSelectionnee.formation.est_certifiante ? "D\xE9livr\xE9 \xE0 la fin" : "Non d\xE9livr\xE9");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.note_moyenne);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.date_debut);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.date_fin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.prerequis);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.population_cible) || (ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.public_cible));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.competences_visees);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.competences_acquises == null ? null : ctx_r1.demandeSelectionnee.formation.competences_acquises.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.objectifs) || (ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.objectifs_pedagogiques));
  }
}
function StudentDemandeComponent_div_58_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 271);
    \u0275\u0275element(1, "div", 272);
    \u0275\u0275elementStart(2, "span", 273);
    \u0275\u0275text(3, "Chargement du contenu...");
    \u0275\u0275elementEnd()();
  }
}
function StudentDemandeComponent_div_58_div_24_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 281);
    \u0275\u0275text(1, "/");
    \u0275\u0275elementEnd();
  }
}
function StudentDemandeComponent_div_58_div_24_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 279);
    \u0275\u0275element(1, "i", 141);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.demandeSelectionnee.formation.duree_totale, "h ");
  }
}
function StudentDemandeComponent_div_58_div_24_div_18_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 296);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", module_r18.sections.length, " section(s) ");
  }
}
function StudentDemandeComponent_div_58_div_24_div_18_div_10_li_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 307);
    \u0275\u0275element(1, "i", 141);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", section_r19.duree_estimee, " ");
  }
}
function StudentDemandeComponent_div_58_div_24_div_18_div_10_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 301)(1, "div", 302)(2, "span", 303);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "i", 304);
    \u0275\u0275elementStart(5, "span", 305);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, StudentDemandeComponent_div_58_div_24_div_18_div_10_li_2_span_7_Template, 3, 1, "span", 306);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r19 = ctx.$implicit;
    const j_r20 = ctx.index;
    const i_r17 = \u0275\u0275nextContext(2).index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", i_r17 + 1, ".", j_r20 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(section_r19.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", section_r19.duree_estimee);
  }
}
function StudentDemandeComponent_div_58_div_24_div_18_div_10_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 308);
    \u0275\u0275element(1, "i", 191);
    \u0275\u0275text(2, "Aucune section ");
    \u0275\u0275elementEnd();
  }
}
function StudentDemandeComponent_div_58_div_24_div_18_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 297)(1, "ul", 298);
    \u0275\u0275template(2, StudentDemandeComponent_div_58_div_24_div_18_div_10_li_2_Template, 8, 4, "li", 299)(3, StudentDemandeComponent_div_58_div_24_div_18_div_10_li_3_Template, 3, 0, "li", 300);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const module_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", module_r18.sections);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(module_r18.sections == null ? null : module_r18.sections.length));
  }
}
function StudentDemandeComponent_div_58_div_24_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 287)(1, "button", 288);
    \u0275\u0275listener("click", function StudentDemandeComponent_div_58_div_24_div_18_Template_button_click_1_listener() {
      const i_r17 = \u0275\u0275restoreView(_r16).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleModule(ctx_r1.demandeSelectionnee.id, i_r17));
    });
    \u0275\u0275elementStart(2, "div", 289)(3, "span", 290);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 291);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 292);
    \u0275\u0275template(8, StudentDemandeComponent_div_58_div_24_div_18_span_8_Template, 2, 1, "span", 293);
    \u0275\u0275element(9, "i", 294);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, StudentDemandeComponent_div_58_div_24_div_18_div_10_Template, 4, 2, "div", 295);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r18 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("lms-accordion__header--open", ctx_r1.isModuleOpen(ctx_r1.demandeSelectionnee.id, i_r17));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r17 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(module_r18.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", module_r18.sections == null ? null : module_r18.sections.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-arrow-up-2", ctx_r1.isModuleOpen(ctx_r1.demandeSelectionnee.id, i_r17))("isax-arrow-down-2", !ctx_r1.isModuleOpen(ctx_r1.demandeSelectionnee.id, i_r17));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isModuleOpen(ctx_r1.demandeSelectionnee.id, i_r17));
  }
}
function StudentDemandeComponent_div_58_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 206)(1, "div", 274)(2, "div", 275)(3, "div", 276);
    \u0275\u0275element(4, "i", 277);
    \u0275\u0275text(5, "Contenu de la formation ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 278)(7, "span", 279);
    \u0275\u0275element(8, "i", 280);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 281);
    \u0275\u0275text(11, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 279);
    \u0275\u0275element(13, "i", 282);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, StudentDemandeComponent_div_58_div_24_span_15_Template, 2, 0, "span", 283)(16, StudentDemandeComponent_div_58_div_24_span_16_Template, 3, 1, "span", 284);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 285);
    \u0275\u0275template(18, StudentDemandeComponent_div_58_div_24_div_18_Template, 11, 10, "div", 286);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.demandeSelectionnee.formation.modules.length, " module(s) ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.demandeSelectionnee.formation.nombre_lecons ?? ctx_r1.getTotalSections(ctx_r1.demandeSelectionnee.formation.modules), " section(s) ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.duree_totale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.duree_totale);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.demandeSelectionnee.formation.modules);
  }
}
function StudentDemandeComponent_div_58_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 210)(1, "span", 211);
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
function StudentDemandeComponent_div_58_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 210)(1, "span", 211);
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
function StudentDemandeComponent_div_58_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 210)(1, "span", 211);
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
function StudentDemandeComponent_div_58_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 210)(1, "span", 211);
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
function StudentDemandeComponent_div_58_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 210)(1, "span", 211);
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
function StudentDemandeComponent_div_58_div_41_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 313);
    \u0275\u0275element(1, "i", 158);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.demandeSelectionnee.commentaire_rh, " ");
  }
}
function StudentDemandeComponent_div_58_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 309)(1, "div", 207);
    \u0275\u0275element(2, "i", 310);
    \u0275\u0275text(3, "Motif de refus ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 311);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, StudentDemandeComponent_div_58_div_41_p_6_Template, 3, 1, "p", 312);
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
function StudentDemandeComponent_div_58_div_42_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 317);
    \u0275\u0275element(1, "i", 158);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.demandeSelectionnee.commentaire_rh, " ");
  }
}
function StudentDemandeComponent_div_58_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 314)(1, "div", 207);
    \u0275\u0275element(2, "i", 315);
    \u0275\u0275text(3, "Demande valid\xE9e ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 311);
    \u0275\u0275text(5, " Votre demande a \xE9t\xE9 valid\xE9e le ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, StudentDemandeComponent_div_58_div_42_p_10_Template, 3, 1, "p", 316);
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
function StudentDemandeComponent_div_58_div_43_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 325);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.demandeSelectionnee.formation.formateur.fonction, " ");
  }
}
function StudentDemandeComponent_div_58_div_43_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 326);
    \u0275\u0275element(1, "i", 327);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.demandeSelectionnee.formation.formateur_email, " ");
  }
}
function StudentDemandeComponent_div_58_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 206)(1, "div", 207);
    \u0275\u0275element(2, "i", 318);
    \u0275\u0275text(3, "\xC0 propos du formateur ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 319);
    \u0275\u0275element(5, "img", 320);
    \u0275\u0275elementStart(6, "div", 321)(7, "div", 322);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, StudentDemandeComponent_div_58_div_43_div_9_Template, 2, 1, "div", 323)(10, StudentDemandeComponent_div_58_div_43_div_10_Template, 3, 1, "div", 324);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", (ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.formateur == null ? null : ctx_r1.demandeSelectionnee.formation.formateur.photo) || (ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.image_couverture) || "assets/img/profiles/avatar-01.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.demandeSelectionnee.formation.formateur_nom ?? (ctx_r1.demandeSelectionnee.formation.formateur == null ? null : ctx_r1.demandeSelectionnee.formation.formateur.nom), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.formateur == null ? null : ctx_r1.demandeSelectionnee.formation.formateur.fonction);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.formateur_email);
  }
}
function StudentDemandeComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
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
    \u0275\u0275listener("click", function StudentDemandeComponent_div_58_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fermerDetailDemande());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 52)(13, "div", 198)(14, "div", 199)(15, "span", 132);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 200);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, StudentDemandeComponent_div_58_span_19_Template, 4, 4, "span", 201)(20, StudentDemandeComponent_div_58_span_20_Template, 3, 0, "span", 202);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, StudentDemandeComponent_div_58_button_21_Template, 3, 0, "button", 203);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, StudentDemandeComponent_div_58_div_22_Template, 38, 22, "div", 204)(23, StudentDemandeComponent_div_58_div_23_Template, 4, 0, "div", 205)(24, StudentDemandeComponent_div_58_div_24_Template, 19, 5, "div", 204);
    \u0275\u0275elementStart(25, "div", 206)(26, "div", 207);
    \u0275\u0275element(27, "i", 208);
    \u0275\u0275text(28, "\xC9tat de ma demande ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 209)(30, "div", 210)(31, "span", 211);
    \u0275\u0275text(32, "Soumise le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(36, StudentDemandeComponent_div_58_div_36_Template, 6, 4, "div", 212)(37, StudentDemandeComponent_div_58_div_37_Template, 5, 1, "div", 212)(38, StudentDemandeComponent_div_58_div_38_Template, 5, 1, "div", 212)(39, StudentDemandeComponent_div_58_div_39_Template, 5, 1, "div", 212)(40, StudentDemandeComponent_div_58_div_40_Template, 5, 1, "div", 212);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(41, StudentDemandeComponent_div_58_div_41_Template, 7, 2, "div", 213)(42, StudentDemandeComponent_div_58_div_42_Template, 11, 5, "div", 214)(43, StudentDemandeComponent_div_58_div_43_Template, 11, 4, "div", 204);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 215)(45, "button", 80);
    \u0275\u0275listener("click", function StudentDemandeComponent_div_58_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fermerDetailDemande());
    });
    \u0275\u0275element(46, "i", 81);
    \u0275\u0275text(47, "Fermer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 216)(49, "button", 217);
    \u0275\u0275listener("click", function StudentDemandeComponent_div_58_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.annulerDemande(ctx_r1.demandeSelectionnee.id));
    });
    \u0275\u0275element(50, "i", 151);
    \u0275\u0275text(51, "Annuler la demande ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 218);
    \u0275\u0275listener("click", function StudentDemandeComponent_div_58_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.relancerDemande(ctx_r1.demandeSelectionnee.id));
    });
    \u0275\u0275element(53, "i", 219);
    \u0275\u0275text(54, "Relancer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.demandeSelectionnee.titre_affiche);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Demande du ", \u0275\u0275pipeBind2(10, 23, ctx_r1.demandeSelectionnee.created_at, "dd/MM/yyyy \xE0 HH:mm"));
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
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.est_certifiante);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.statut === "validee");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.formation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingFormationDetail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingFormationDetail && (ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.modules == null ? null : ctx_r1.demandeSelectionnee.formation.modules.length));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 26, ctx_r1.demandeSelectionnee.created_at, "dd/MM/yyyy \xE0 HH:mm"));
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
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingFormationDetail && ((ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.formateur_nom) || (ctx_r1.demandeSelectionnee.formation == null ? null : ctx_r1.demandeSelectionnee.formation.formateur)));
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.demandeSelectionnee.statut !== "en_attente");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.demandeSelectionnee.statut !== "en_attente");
  }
}
function StudentDemandeComponent_option_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 328);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r21 = ctx.$implicit;
    \u0275\u0275property("value", cat_r21.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r21.nom);
  }
}
function StudentDemandeComponent_ng_container_85_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 332);
    \u0275\u0275element(1, "div", 333);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Chargement des formations...");
    \u0275\u0275elementEnd()();
  }
}
function StudentDemandeComponent_ng_container_85_div_10_div_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 342);
  }
}
function StudentDemandeComponent_ng_container_85_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 337);
    \u0275\u0275listener("click", function StudentDemandeComponent_ng_container_85_div_10_div_1_Template_div_click_1_listener() {
      const f_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleFormation(f_r23.id));
    });
    \u0275\u0275template(2, StudentDemandeComponent_ng_container_85_div_10_div_1_i_2_Template, 1, 0, "i", 338);
    \u0275\u0275elementStart(3, "div", 339);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 340)(6, "span", 341);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "i", 141);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r23 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("lms-select-card--active", ctx_r1.isFormationSelected(f_r23.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFormationSelected(f_r23.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r23.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r23.niveau);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r23.duree_totale, "h ");
  }
}
function StudentDemandeComponent_ng_container_85_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 343);
    \u0275\u0275element(2, "i", 49);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Aucune formation dans cette cat\xE9gorie");
    \u0275\u0275elementEnd()()();
  }
}
function StudentDemandeComponent_ng_container_85_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 334);
    \u0275\u0275template(1, StudentDemandeComponent_ng_container_85_div_10_div_1_Template, 10, 6, "div", 335)(2, StudentDemandeComponent_ng_container_85_div_10_div_2_Template, 5, 0, "div", 336);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.formations);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formations.length === 0);
  }
}
function StudentDemandeComponent_ng_container_85_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 344);
    \u0275\u0275element(1, "i", 345);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedFormationIds.length, " formation(s) s\xE9lectionn\xE9e(s) ");
  }
}
function StudentDemandeComponent_ng_container_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 53)(2, "div", 54)(3, "span", 55);
    \u0275\u0275text(4, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 56);
    \u0275\u0275text(6, "Choisir une ou plusieurs formations ");
    \u0275\u0275elementStart(7, "span", 77);
    \u0275\u0275text(8, "(optionnel)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, StudentDemandeComponent_ng_container_85_div_9_Template, 4, 0, "div", 329)(10, StudentDemandeComponent_ng_container_85_div_10_Template, 3, 2, "div", 330)(11, StudentDemandeComponent_ng_container_85_div_11_Template, 3, 1, "div", 331);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.loadingFormations);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingFormations);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedFormationIds.length > 0);
  }
}
function StudentDemandeComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 346);
    \u0275\u0275element(1, "i", 191);
    \u0275\u0275text(2, "Le motif est obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function StudentDemandeComponent_span_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 347);
  }
}
function StudentDemandeComponent_i_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 348);
  }
}
var StudentDemandeComponent = class _StudentDemandeComponent {
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
  showRefusePerson = false;
  // ── TOAST ────────────────────────────────────────
  toast = { type: "success", message: "", visible: false };
  toastTimer;
  // ── MODAL DÉTAIL DEMANDE ─────────────────────────
  demandeSelectionnee = null;
  detailDemandeModal;
  // ── MODAL NOUVELLE DEMANDE ───────────────────────
  submitting = false;
  modalInstance;
  categories = [];
  formations = [];
  selectedCategorieId = "";
  selectedFormationIds = [];
  loadingFormations = false;
  form;
  constructor(demandeFormationService, formationsService, fb, router) {
    this.demandeFormationService = demandeFormationService;
    this.formationsService = formationsService;
    this.fb = fb;
    this.router = router;
  }
  ngOnInit() {
    this.loadDemandes();
    this.loadCategories();
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
        this.allDemandes = raw.filter((d) => d.type_demande === "formation").map((d) => this.normaliserDemande(d));
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
    const fallback = "assets/img/course/course-01.jpg";
    return __spreadProps(__spreadValues({}, d), {
      titre_affiche: d.formation?.titre ?? `Formation #${d.formation_id}`,
      sous_titre_affiche: d.formation?.formateur_nom ?? d.formation?.categorie?.nom ?? "",
      image_affiche: d.formation?.image_couverture || fallback,
      formation: d.formation ? __spreadProps(__spreadValues({}, d.formation), {
        niveau: d.formation.niveau ?? "\u2014",
        duree_totale: d.formation.duree_totale ?? null
      }) : null
    });
  }
  // ── FILTRES + PAGINATION ─────────────────────────
  getTableData(skip, limit) {
    let filtered = [...this.allDemandes];
    if (this.selectedStatus)
      filtered = filtered.filter((d) => d.statut === this.selectedStatus);
    if (this.searchDataValue) {
      const s = this.searchDataValue.toLowerCase();
      filtered = filtered.filter((d) => d.titre_affiche?.toLowerCase().includes(s) || d.sous_titre_affiche?.toLowerCase().includes(s) || d.formation?.titre?.toLowerCase().includes(s));
    }
    this.totalData = filtered.length;
    this.demandes = filtered.slice(skip, skip + limit);
  }
  searchData(value) {
    this.searchDataValue = value;
    this.currentPage = 1;
    this.skip = 0;
    this.getTableData(0, this.limit);
  }
  filterByStatus(status) {
    this.selectedStatus = status;
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
  toggleShowRefusePerson() {
    this.showRefusePerson = !this.showRefusePerson;
  }
  // ── ACTIONS ──────────────────────────────────────
  annulerDemande(id, event) {
    event?.stopPropagation();
    if (!confirm("Confirmer l'annulation de cette demande ?"))
      return;
    this.demandeFormationService.annulerDemande(id).subscribe({
      next: () => {
        this.fermerDetailDemande();
        this.loadDemandes();
      }
    });
  }
  relancerDemande(id, event) {
    event?.stopPropagation();
    this.demandeFormationService.relancerDemande(id).subscribe({
      next: () => {
        this.fermerDetailDemande();
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
  // ── CHARGEMENT DÉTAIL FORMATION ──────────────────
  loadingFormationDetail = false;
  // ════════════════════════════════════════════════
  // MODAL DÉTAIL DEMANDE
  // ════════════════════════════════════════════════
  ouvrirDetailDemande(demande, event) {
    const target = event.target;
    if (target.closest(".sc-btn-annuler, .sc-btn-relancer, .sc-motif-wrapper"))
      return;
    this.demandeSelectionnee = __spreadValues({}, demande);
    this.openModules.clear();
    const el = document.getElementById("demandeDetailModal");
    if (el) {
      this.detailDemandeModal = new bootstrap.Modal(el, { backdrop: true, keyboard: true });
      this.detailDemandeModal.show();
    }
    const formationId = demande.formation_id ?? demande.formation?.id;
    if (formationId) {
      this.loadingFormationDetail = true;
      this.formationsService.getFormationById(formationId).subscribe({
        next: (res) => {
          const full = res?.data ?? res?.formation ?? res;
          this.demandeSelectionnee = __spreadProps(__spreadValues({}, this.demandeSelectionnee), {
            formation: __spreadValues(__spreadValues({}, this.demandeSelectionnee.formation), full)
          });
          this.loadingFormationDetail = false;
        },
        error: () => {
          this.loadingFormationDetail = false;
        }
      });
    }
  }
  fermerDetailDemande() {
    this.detailDemandeModal?.hide();
    this.demandeSelectionnee = null;
    this.openModules.clear();
  }
  // ════════════════════════════════════════════════
  // MODAL NOUVELLE DEMANDE
  // ════════════════════════════════════════════════
  openRequestModal() {
    this.resetModal();
    const el = document.getElementById("demandeFormationModal");
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
    this.selectedCategorieId = "";
    this.selectedFormationIds = [];
    this.formations = [];
    this.submitting = false;
    this.form.reset({ priorite: "normale" });
  }
  loadCategories() {
    this.formationsService.getCategories().subscribe({
      next: (res) => this.categories = res.categories ?? []
    });
  }
  onCategorieChange() {
    this.selectedFormationIds = [];
    this.formations = [];
    if (!this.selectedCategorieId)
      return;
    this.loadFormations(+this.selectedCategorieId);
  }
  loadFormations(categorieId) {
    this.loadingFormations = true;
    this.formationsService.getFormationsByCategorie(categorieId).subscribe({
      next: (res) => {
        this.formations = res.formations ?? [];
        this.loadingFormations = false;
      },
      error: () => {
        this.loadingFormations = false;
      }
    });
  }
  toggleFormation(id) {
    const i = this.selectedFormationIds.indexOf(id);
    i === -1 ? this.selectedFormationIds.push(id) : this.selectedFormationIds.splice(i, 1);
  }
  isFormationSelected(id) {
    return this.selectedFormationIds.includes(id);
  }
  canSubmit() {
    return !!this.selectedCategorieId && this.form.valid;
  }
  submitRequest() {
    if (!this.canSubmit())
      return;
    this.submitting = true;
    const fv = this.form.value;
    const date = fv.date_souhaitee_debut ? new Date(fv.date_souhaitee_debut).toISOString().split("T")[0] : void 0;
    const base = {
      type_demande: "formation",
      motif_demande: fv.motif_demande,
      objectifs_personnels: fv.objectifs_personnels,
      priorite: fv.priorite,
      commentaire_employe: fv.commentaire_employe
    };
    if (date)
      base.date_souhaitee_debut = date;
    if (this.selectedFormationIds.length === 0) {
      this.envoyerDemande(base);
    } else if (this.selectedFormationIds.length === 1) {
      this.envoyerDemande(__spreadProps(__spreadValues({}, base), { formation_id: this.selectedFormationIds[0] }));
    } else {
      this.envoyerDemandesMultiples(base);
    }
  }
  envoyerDemande(payload) {
    this.demandeFormationService.creerDemande(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.closeModal();
        setTimeout(() => {
          this.showToast("success", "\u2705 Votre demande a \xE9t\xE9 envoy\xE9e avec succ\xE8s !");
          this.loadDemandes();
        }, 300);
      },
      error: (err) => this.handleError(err)
    });
  }
  envoyerDemandesMultiples(base) {
    let completed = 0;
    let hasError = false;
    this.selectedFormationIds.forEach((id) => {
      this.demandeFormationService.creerDemande(__spreadProps(__spreadValues({}, base), { formation_id: id })).subscribe({
        next: () => {
          completed++;
          if (completed === this.selectedFormationIds.length && !hasError) {
            this.submitting = false;
            this.closeModal();
            setTimeout(() => {
              this.showToast("success", `\u2705 ${completed} demande(s) envoy\xE9e(s) avec succ\xE8s !`);
              this.loadDemandes();
            }, 300);
          }
        },
        error: (err) => {
          if (!hasError) {
            hasError = true;
            this.handleError(err);
          }
        }
      });
    });
  }
  handleError(err) {
    this.submitting = false;
    if (err.status === 409)
      this.showToast("warning", "\u26A0\uFE0F Vous avez d\xE9j\xE0 une demande en cours pour cet \xE9l\xE9ment.");
    else if (err.status === 422)
      this.showToast("error", "\u274C Veuillez v\xE9rifier les champs obligatoires.");
    else
      this.showToast("error", "\u274C Une erreur est survenue. Veuillez r\xE9essayer.");
  }
  // ── NAVIGATION — commencer formation ────────────
  commencerFormation(demande, event) {
    event?.stopPropagation();
    const formationId = demande.formation_id ?? demande.formation?.id;
    if (formationId) {
      this.fermerDetailDemande();
      const url = this.router.serializeUrl(this.router.createUrlTree(["/courses/course-watch", formationId], {
        queryParams: { fromPage: "demandes" }
      }));
      window.open(url, "_blank");
    }
  }
  // ── ACCORDÉON MODULES ────────────────────────────
  openModules = /* @__PURE__ */ new Set();
  toggleModule(demandeId, moduleIndex) {
    const key = `${demandeId}_${moduleIndex}`;
    this.openModules.has(key) ? this.openModules.delete(key) : this.openModules.add(key);
  }
  isModuleOpen(demandeId, moduleIndex) {
    return this.openModules.has(`${demandeId}_${moduleIndex}`);
  }
  // ── HELPERS CSS ──────────────────────────────────
  getTotalSections(modules) {
    return modules?.reduce((acc, m) => acc + (m.sections?.length ?? 0), 0) ?? 0;
  }
  getPrioriteClass(priorite) {
    return { urgente: "priorite-urgente", haute: "priorite-haute", normale: "priorite-normale", basse: "priorite-basse" }[priorite] ?? "priorite-normale";
  }
  getStatutClass(statut) {
    return { en_attente: "statut-attente", validee: "statut-validee", refusee: "statut-refusee", annulee: "statut-annulee" }[statut] ?? "";
  }
  static \u0275fac = function StudentDemandeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentDemandeComponent)(\u0275\u0275directiveInject(DemandeFormationService), \u0275\u0275directiveInject(FormationsService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentDemandeComponent, selectors: [["app-student-demande"]], decls: 133, vars: 45, consts: [[1, "lms-toast-container"], [1, "lms-toast"], [1, "lms-toast__icon"], ["class", "isax isax-tick-circle-filled", 4, "ngIf"], ["class", "isax isax-close-circle-filled", 4, "ngIf"], ["class", "isax isax-warning-2-filled", 4, "ngIf"], [1, "lms-toast__body"], [1, "lms-toast__label"], [1, "lms-toast__message"], [1, "lms-toast__close", 3, "click"], [1, "isax", "isax-close-square"], [1, "lms-toast__progress"], [1, "sc-header", "mb-4"], [1, "sc-header__left"], [1, "sc-header__title"], [1, "sc-header__subtitle"], [1, "sc-header__actions"], ["title", "Vue tableau", 1, "sc-header__toggle-btn", 3, "click"], [1, "isax", "isax-row-vertical"], ["title", "Vue grille", 1, "sc-header__toggle-btn", 3, "click"], [1, "isax", "isax-element-3"], [1, "sc-header__new-btn", 3, "click"], [1, "isax", "isax-add-circle"], ["class", "pq-kpi-grid mb-4", 4, "ngIf"], [1, "sc-filters", "mb-4"], [1, "sc-filters__search"], [1, "isax", "isax-search-normal-1", "sc-filters__search-icon"], ["type", "search", "placeholder", "Rechercher une formation...", 1, "sc-filters__search-input", 3, "ngModelChange", "ngModel"], [1, "sc-filters__pills"], [1, "sc-filters__pill", 3, "click"], [1, "sc-filters__pill", "sc-filters__pill--attente", 3, "click"], ["class", "sc-filters__pill-count", 4, "ngIf"], [1, "sc-filters__pill", "sc-filters__pill--validee", 3, "click"], [1, "sc-filters__pill", "sc-filters__pill--refusee", 3, "click"], [1, "sc-filters__pill", "sc-filters__pill--annulee", 3, "click"], [1, "sc-filters__reset", 3, "click"], [1, "isax", "isax-refresh"], ["class", "sc-loading", 4, "ngIf"], [4, "ngIf"], ["class", "sc-empty", 4, "ngIf"], [3, "totalItems", "pageSize", "currentPage", "pageChange", 4, "ngIf"], ["id", "demandeDetailModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered", "modal-dialog-scrollable"], ["class", "modal-content lms-modal", 4, "ngIf"], ["id", "demandeFormationModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-content", "lms-modal"], [1, "modal-header", "lms-modal__header"], [1, "d-flex", "align-items-center", "gap-3"], [1, "lms-modal__icon"], [1, "isax", "isax-teacher"], [1, "modal-title", "mb-0"], ["type", "button", 1, "btn-close", "btn-close-white", 3, "click"], [1, "modal-body", "lms-modal__body"], [1, "lms-step", "mb-4"], [1, "lms-step__header", "mb-2"], [1, "lms-step__number", "lms-step__number--orange"], [1, "lms-step__title"], [1, "text-danger"], [1, "form-select", "lms-input", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "lms-divider"], [1, "lms-step__header", "mb-3"], [3, "formGroup"], [1, "row", "g-3"], [1, "col-12"], [1, "form-label", "fw-semibold"], ["formControlName", "motif_demande", "rows", "3", "placeholder", "Pourquoi souhaitez-vous cette formation ?", 1, "form-control", "lms-input"], ["class", "lms-field-error", 4, "ngIf"], ["formControlName", "objectifs_personnels", "rows", "2", "placeholder", "Qu'esp\xE9rez-vous acqu\xE9rir ?", 1, "form-control", "lms-input"], [1, "col-md-6"], ["formControlName", "priorite", 1, "form-select", "lms-input"], ["value", "basse"], ["value", "normale"], ["value", "haute"], ["type", "date", "formControlName", "date_souhaitee_debut", 1, "form-control", "lms-input"], [1, "form-label"], [1, "text-muted", "small"], ["formControlName", "commentaire_employe", "rows", "2", "placeholder", "Informations compl\xE9mentaires...", 1, "form-control", "lms-input"], [1, "modal-footer", "lms-modal__footer"], [1, "btn", "lms-btn-cancel", 3, "click"], [1, "isax", "isax-close-square", "me-1"], [1, "btn", "lms-btn-submit", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "isax isax-send-2 me-2", 4, "ngIf"], [1, "isax", "isax-tick-circle-filled"], [1, "isax", "isax-close-circle-filled"], [1, "isax", "isax-warning-2-filled"], [1, "pq-kpi-grid", "mb-4"], [1, "pq-kpi-card", "pq-kpi-card--teal", 3, "click"], [1, "pq-kpi-card__icon"], [1, "pq-kpi-card__body"], [1, "pq-kpi-card__value"], [1, "pq-kpi-card__label"], [1, "pq-kpi-card", "pq-kpi-card--orange", 3, "click"], [1, "isax", "isax-clock"], [1, "pq-kpi-card", "pq-kpi-card--green", 3, "click"], [1, "isax", "isax-tick-circle"], [1, "pq-kpi-card", "pq-kpi-card--red", 3, "click"], [1, "isax", "isax-close-circle"], [1, "pq-kpi-card", "pq-kpi-card--gray", 3, "click"], [1, "isax", "isax-minus-cirlce"], [1, "sc-filters__pill-count"], [1, "sc-loading"], [1, "sc-loading__spinner"], ["class", "card sc-table-card", 4, "ngIf"], [1, "card", "sc-table-card"], [1, "card-header", "sc-table-card__header"], [1, "sc-table-card__title"], [1, "isax", "isax-teacher", "text-primary", "me-2"], [1, "sc-table-card__count"], [1, "text-muted", 2, "font-size", "11px"], [1, "isax", "isax-mouse-circle", "me-1"], [1, "table-responsive"], [1, "table", "sc-table", "align-middle", "mb-0"], [2, "min-width", "280px"], [1, "text-center"], [1, "text-center", 2, "min-width", "160px"], ["class", "sc-table-row", 3, "sc-row--refusee", "sc-row--validee", "click", 4, "ngFor", "ngForOf"], [1, "sc-table-row", 3, "click"], [1, "sc-formation"], ["alt", "", 1, "sc-formation__thumb", 3, "src"], [1, "sc-formation__info"], [1, "sc-formation__title"], ["class", "sc-formation__sub", 4, "ngIf"], [1, "sc-formation__details"], ["class", "sc-detail-chip", 4, "ngIf"], ["class", "sc-detail-chip sc-detail-chip--award", 4, "ngIf"], [1, "sc-date"], [1, "sc-date", "sc-date--time", "d-block"], [1, "sc-priorite", 3, "ngClass"], [1, "sc-statut-cell"], [1, "sc-statut", 3, "ngClass"], ["class", "sc-motif-wrapper", 3, "mouseenter", "mouseleave", "click", 4, "ngIf"], [1, "text-center", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2"], ["class", "sc-statut-icon", 3, "title", 4, "ngIf"], [1, "sc-formation__sub"], [1, "isax", "isax-teacher", "me-1"], [1, "sc-detail-chip"], [1, "isax", "isax-chart", "me-1"], [1, "isax", "isax-clock", "me-1"], [1, "isax", "isax-category", "me-1"], [1, "sc-detail-chip", "sc-detail-chip--award"], [1, "isax", "isax-award", "me-1"], [1, "sc-motif-wrapper", 3, "mouseenter", "mouseleave", "click"], [1, "sc-motif-btn"], [1, "isax", "isax-info-circle"], ["class", "sc-motif-tooltip", 4, "ngIf"], [1, "sc-motif-tooltip"], [1, "sc-motif-tooltip__header"], [1, "isax", "isax-close-circle", "me-1"], [1, "sc-motif-tooltip__body"], ["class", "sc-motif-tooltip__responsable", 4, "ngIf"], ["class", "sc-motif-tooltip__footer", 4, "ngIf"], [1, "sc-motif-tooltip__responsable"], [1, "isax", "isax-user", "me-1"], [1, "sc-motif-tooltip__footer"], [1, "isax", "isax-message-text", "me-1"], ["title", "Annuler la demande", 1, "sc-action-btn", "sc-action-btn--danger", 3, "click"], [1, "sc-action-btn__tooltip"], ["title", "Relancer la demande", 1, "sc-action-btn", "sc-action-btn--teal", 3, "click"], [1, "sc-statut-icon", 3, "title"], ["class", "isax isax-tick-circle sc-statut-icon--validee", 4, "ngIf"], ["class", "isax isax-close-circle sc-statut-icon--refusee", 4, "ngIf"], ["class", "isax isax-minus-cirlce sc-statut-icon--annulee", 4, "ngIf"], [1, "isax", "isax-tick-circle", "sc-statut-icon--validee"], [1, "isax", "isax-close-circle", "sc-statut-icon--refusee"], [1, "isax", "isax-minus-cirlce", "sc-statut-icon--annulee"], ["class", "sc-grid", 4, "ngIf"], [1, "sc-grid"], ["class", "sc-grid-card", 3, "sc-grid-card--validee", "sc-grid-card--refusee", "sc-grid-card--attente", "click", 4, "ngFor", "ngForOf"], [1, "sc-grid-card", 3, "click"], [1, "sc-grid-card__cover"], [1, "sc-grid-card__img", 3, "src", "alt"], [1, "sc-grid-card__cover-overlay"], [1, "sc-priorite", "sc-grid-card__priorite", 3, "ngClass"], [1, "sc-grid-card__body"], [1, "sc-grid-card__title"], ["class", "sc-grid-card__sub", 4, "ngIf"], [1, "sc-grid-card__chips"], [1, "sc-grid-card__footer", 3, "click"], [1, "sc-grid-card__date"], [1, "isax", "isax-calendar-1"], [1, "sc-grid-card__actions"], ["class", "sc-grid-motif-btn", 3, "click", 4, "ngIf"], ["class", "sc-grid-commencer-btn", 3, "click", 4, "ngIf"], [1, "sc-grid-card__sub"], ["title", "Annuler", 1, "sc-btn-annuler", "sc-btn--xs", 3, "click"], ["title", "Relancer", 1, "sc-btn-relancer", "sc-btn--xs", 3, "click"], [1, "sc-grid-motif-btn", 3, "click"], [1, "isax", "isax-info-circle", "me-1"], [1, "sc-grid-commencer-btn", 3, "click"], [1, "isax", "isax-play-circle", "me-1"], [1, "sc-empty"], [1, "sc-empty__icon"], [1, "sc-empty__title"], [3, "pageChange", "totalItems", "pageSize", "currentPage"], [1, "lms-detail-chips", "mb-4"], [1, "lms-detail-chips__left"], [1, "sc-priorite", "ms-2", 3, "ngClass"], ["class", "lms-meta-chip lms-meta-chip--teal ms-2", 4, "ngIf"], ["class", "lms-meta-chip lms-meta-chip--warning ms-1", 4, "ngIf"], ["class", "lms-btn-commencer", 3, "click", 4, "ngIf"], ["class", "lms-detail-section mb-3", 4, "ngIf"], ["class", "lms-detail-section mb-3 text-center py-4", 4, "ngIf"], [1, "lms-detail-section", "mb-3"], [1, "lms-detail-section__title"], [1, "isax", "isax-message-text", "me-2"], [1, "cd-demande-detail", "mt-2"], [1, "cd-demande-row"], [1, "cd-demande-label"], ["class", "cd-demande-row", 4, "ngIf"], ["class", "lms-detail-section lms-detail-section--danger mb-3", 4, "ngIf"], ["class", "lms-detail-section lms-detail-section--success mb-3", 4, "ngIf"], [1, "modal-footer", "lms-modal__footer", 2, "justify-content", "space-between"], [1, "d-flex", "gap-2"], [1, "btn", "sc-btn-annuler", 3, "click", "disabled"], [1, "btn", "sc-btn-relancer", 3, "click", "disabled"], [1, "isax", "isax-refresh", "me-1"], [1, "lms-meta-chip", "lms-meta-chip--teal", "ms-2"], [1, "isax", "isax-calendar", "me-1"], [1, "lms-meta-chip", "lms-meta-chip--warning", "ms-1"], [1, "lms-btn-commencer", 3, "click"], [1, "isax", "isax-teacher", "me-2"], [1, "lms-formation-banner", "mt-2"], ["alt", "", 1, "lms-formation-banner__img", 3, "src"], [1, "lms-formation-banner__body"], [1, "lms-formation-banner__title"], ["class", "lms-formation-banner__sub", 4, "ngIf"], [1, "lms-formation-banner__tags"], ["class", "lms-meta-chip lms-meta-chip--purple", 4, "ngIf"], ["class", "lms-meta-chip lms-meta-chip--teal", 4, "ngIf"], ["class", "lms-meta-chip lms-meta-chip--orange", 4, "ngIf"], [1, "row", "g-2", "mt-3"], ["class", "col-md-6", 4, "ngIf"], [1, "lms-info-item"], [1, "isax", "isax-award", 2, "color", "#069b8f"], ["class", "lms-formation-desc mt-3", 4, "ngIf"], ["class", "lms-formation-desc lms-formation-desc--prerequis mt-2", 4, "ngIf"], ["class", "lms-formation-desc lms-formation-desc--public mt-2", 4, "ngIf"], ["class", "lms-formation-desc lms-formation-desc--competences mt-2", 4, "ngIf"], ["class", "lms-formation-desc lms-formation-desc--objectifs mt-2", 4, "ngIf"], [1, "lms-formation-banner__sub"], [1, "lms-meta-chip", "lms-meta-chip--purple"], [1, "lms-meta-chip", "lms-meta-chip--teal"], [1, "isax", "isax-briefcase", "me-1"], [1, "lms-meta-chip", "lms-meta-chip--orange"], [1, "isax", "isax-language-square", "me-1"], [1, "isax", "isax-chart", 2, "color", "#069b8f"], [1, "isax", "isax-clock", 2, "color", "#069b8f"], [1, "isax", "isax-book", 2, "color", "#069b8f"], [1, "isax", "isax-note-2", 2, "color", "#069b8f"], [1, "isax", "isax-user", 2, "color", "#069b8f"], [1, "isax", "isax-monitor", 2, "color", "#069b8f"], [1, "isax", "isax-star", 2, "color", "#069b8f"], [1, "isax", "isax-calendar-2", 2, "color", "#069b8f"], [1, "isax", "isax-calendar-tick", 2, "color", "#069b8f"], [1, "lms-formation-desc", "mt-3"], [1, "lms-formation-desc__label"], [1, "isax", "isax-document-text"], [1, "lms-formation-desc__text"], [1, "lms-formation-desc", "lms-formation-desc--prerequis", "mt-2"], [1, "lms-formation-desc", "lms-formation-desc--public", "mt-2"], [1, "isax", "isax-people"], [1, "lms-formation-desc", "lms-formation-desc--competences", "mt-2"], [1, "isax", "isax-medal"], [1, "lms-competences-list"], [4, "ngFor", "ngForOf"], [1, "lms-formation-desc", "lms-formation-desc--objectifs", "mt-2"], [1, "isax", "isax-tick-square"], [1, "lms-detail-section", "mb-3", "text-center", "py-4"], [1, "spinner-border", "spinner-border-sm", "text-primary", "me-2"], [1, "text-muted", 2, "font-size", "13px"], [1, "lms-modules-header"], [1, "lms-modules-header__left"], [1, "lms-detail-section__title", "mb-0"], [1, "isax", "isax-book", "me-2"], [1, "lms-modules-breadcrumb", "mt-1"], [1, "lms-modules-breadcrumb__item"], [1, "isax", "isax-book-1", "me-1"], [1, "lms-modules-breadcrumb__sep"], [1, "isax", "isax-note-2", "me-1"], ["class", "lms-modules-breadcrumb__sep", 4, "ngIf"], ["class", "lms-modules-breadcrumb__item", 4, "ngIf"], [1, "lms-accordion", "mt-3"], ["class", "lms-accordion__item", 4, "ngFor", "ngForOf"], [1, "lms-accordion__item"], [1, "lms-accordion__header", 3, "click"], [1, "lms-accordion__header-left"], [1, "lms-accordion__num"], [1, "lms-accordion__title"], [1, "lms-accordion__header-right"], ["class", "lms-accordion__count", 4, "ngIf"], [1, "isax", "lms-accordion__chevron"], ["class", "lms-accordion__body", 4, "ngIf"], [1, "lms-accordion__count"], [1, "lms-accordion__body"], [1, "lms-sections-list"], ["class", "lms-sections-list__item", 4, "ngFor", "ngForOf"], ["class", "lms-sections-list__empty", 4, "ngIf"], [1, "lms-sections-list__item"], [1, "lms-sections-list__left"], [1, "lms-sections-list__index"], [1, "isax", "isax-play-circle", "lms-sections-list__icon"], [1, "lms-sections-list__title"], ["class", "lms-sections-list__duree", 4, "ngIf"], [1, "lms-sections-list__duree"], [1, "lms-sections-list__empty"], [1, "lms-detail-section", "lms-detail-section--danger", "mb-3"], [1, "isax", "isax-close-circle", "me-2"], [1, "lms-detail-section__body"], ["class", "lms-detail-section__body mt-1 fst-italic", 4, "ngIf"], [1, "lms-detail-section__body", "mt-1", "fst-italic"], [1, "lms-detail-section", "lms-detail-section--success", "mb-3"], [1, "isax", "isax-tick-circle", "me-2"], ["class", "lms-detail-section__body mt-1", 4, "ngIf"], [1, "lms-detail-section__body", "mt-1"], [1, "isax", "isax-user-octagon", "me-2"], [1, "lms-formateur-card", "mt-2"], ["alt", "", 1, "lms-formateur-card__avatar", 3, "src"], [1, "lms-formateur-card__body"], [1, "lms-formateur-card__name"], ["class", "lms-formateur-card__fonction", 4, "ngIf"], ["class", "lms-formateur-card__email", 4, "ngIf"], [1, "lms-formateur-card__fonction"], [1, "lms-formateur-card__email"], [1, "isax", "isax-sms", "me-1"], [3, "value"], ["class", "lms-loading", 4, "ngIf"], ["class", "row g-2", 4, "ngIf"], ["class", "lms-selection-badge lms-selection-badge--orange mt-3", 4, "ngIf"], [1, "lms-loading"], [1, "spinner-border", "text-warning"], [1, "row", "g-2"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], ["class", "col-12", 4, "ngIf"], [1, "lms-select-card", "lms-select-card--orange", 3, "click"], ["class", "isax isax-tick-circle lms-select-card__check", 4, "ngIf"], [1, "lms-select-card__title"], [1, "lms-select-card__sub"], [1, "badge", "bg-secondary", "me-1"], [1, "isax", "isax-tick-circle", "lms-select-card__check"], [1, "lms-empty-inline"], [1, "lms-selection-badge", "lms-selection-badge--orange", "mt-3"], [1, "isax", "isax-tick-circle", "me-1"], [1, "lms-field-error"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "isax", "isax-send-2", "me-2"]], template: function StudentDemandeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275template(3, StudentDemandeComponent_i_3_Template, 1, 0, "i", 3)(4, StudentDemandeComponent_i_4_Template, 1, 0, "i", 4)(5, StudentDemandeComponent_i_5_Template, 1, 0, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "span", 7);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275listener("click", function StudentDemandeComponent_Template_button_click_11_listener() {
        return ctx.closeToast();
      });
      \u0275\u0275element(12, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "div", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 12)(15, "div", 13)(16, "h3", 14);
      \u0275\u0275text(17, "Mes demandes de formation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 15);
      \u0275\u0275text(19, "Suivez l'\xE9tat de vos demandes de formations soumises \xE0 l'entreprise");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 16)(21, "button", 17);
      \u0275\u0275listener("click", function StudentDemandeComponent_Template_button_click_21_listener() {
        return ctx.setView("table");
      });
      \u0275\u0275element(22, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 19);
      \u0275\u0275listener("click", function StudentDemandeComponent_Template_button_click_23_listener() {
        return ctx.setView("grid");
      });
      \u0275\u0275element(24, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 21);
      \u0275\u0275listener("click", function StudentDemandeComponent_Template_button_click_25_listener() {
        return ctx.openRequestModal();
      });
      \u0275\u0275element(26, "i", 22);
      \u0275\u0275text(27, " Nouvelle demande ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(28, StudentDemandeComponent_div_28_Template, 41, 15, "div", 23);
      \u0275\u0275elementStart(29, "div", 24)(30, "div", 25);
      \u0275\u0275element(31, "i", 26);
      \u0275\u0275elementStart(32, "input", 27);
      \u0275\u0275twoWayListener("ngModelChange", function StudentDemandeComponent_Template_input_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function StudentDemandeComponent_Template_input_ngModelChange_32_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 28)(34, "button", 29);
      \u0275\u0275listener("click", function StudentDemandeComponent_Template_button_click_34_listener() {
        return ctx.filterByStatus("");
      });
      \u0275\u0275text(35, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 30);
      \u0275\u0275listener("click", function StudentDemandeComponent_Template_button_click_36_listener() {
        return ctx.filterByStatus("en_attente");
      });
      \u0275\u0275text(37, " En attente ");
      \u0275\u0275template(38, StudentDemandeComponent_span_38_Template, 2, 1, "span", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "button", 32);
      \u0275\u0275listener("click", function StudentDemandeComponent_Template_button_click_39_listener() {
        return ctx.filterByStatus("validee");
      });
      \u0275\u0275text(40, " Valid\xE9e ");
      \u0275\u0275template(41, StudentDemandeComponent_span_41_Template, 2, 1, "span", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 33);
      \u0275\u0275listener("click", function StudentDemandeComponent_Template_button_click_42_listener() {
        return ctx.filterByStatus("refusee");
      });
      \u0275\u0275text(43, " Refus\xE9e ");
      \u0275\u0275template(44, StudentDemandeComponent_span_44_Template, 2, 1, "span", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "button", 34);
      \u0275\u0275listener("click", function StudentDemandeComponent_Template_button_click_45_listener() {
        return ctx.filterByStatus("annulee");
      });
      \u0275\u0275text(46, " Annul\xE9e ");
      \u0275\u0275template(47, StudentDemandeComponent_span_47_Template, 2, 1, "span", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "button", 35);
      \u0275\u0275listener("click", function StudentDemandeComponent_Template_button_click_48_listener() {
        return ctx.resetFilters();
      });
      \u0275\u0275element(49, "i", 36);
      \u0275\u0275text(50, " R\xE9initialiser ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(51, StudentDemandeComponent_div_51_Template, 4, 0, "div", 37)(52, StudentDemandeComponent_ng_container_52_Template, 2, 1, "ng-container", 38)(53, StudentDemandeComponent_ng_container_53_Template, 2, 1, "ng-container", 38)(54, StudentDemandeComponent_div_54_Template, 7, 0, "div", 39)(55, StudentDemandeComponent_app_custom_pagination_55_Template, 1, 3, "app-custom-pagination", 40);
      \u0275\u0275elementStart(56, "div", 41)(57, "div", 42);
      \u0275\u0275template(58, StudentDemandeComponent_div_58_Template, 55, 29, "div", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 44)(60, "div", 42)(61, "div", 45)(62, "div", 46)(63, "div", 47)(64, "div", 48);
      \u0275\u0275element(65, "i", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div")(67, "h5", 50);
      \u0275\u0275text(68, "Demande de formation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "small");
      \u0275\u0275text(70, "S\xE9lectionnez une cat\xE9gorie puis une ou plusieurs formations");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "button", 51);
      \u0275\u0275listener("click", function StudentDemandeComponent_Template_button_click_71_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 52)(73, "div", 53)(74, "div", 54)(75, "span", 55);
      \u0275\u0275text(76, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "p", 56);
      \u0275\u0275text(78, "Choisir une cat\xE9gorie ");
      \u0275\u0275elementStart(79, "span", 57);
      \u0275\u0275text(80, "*");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(81, "select", 58);
      \u0275\u0275twoWayListener("ngModelChange", function StudentDemandeComponent_Template_select_ngModelChange_81_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedCategorieId, $event) || (ctx.selectedCategorieId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function StudentDemandeComponent_Template_select_change_81_listener() {
        return ctx.onCategorieChange();
      });
      \u0275\u0275elementStart(82, "option", 59);
      \u0275\u0275text(83, "-- S\xE9lectionner une cat\xE9gorie --");
      \u0275\u0275elementEnd();
      \u0275\u0275template(84, StudentDemandeComponent_option_84_Template, 2, 2, "option", 60);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(85, StudentDemandeComponent_ng_container_85_Template, 12, 3, "ng-container", 38);
      \u0275\u0275element(86, "hr", 61);
      \u0275\u0275elementStart(87, "div", 62)(88, "span", 55);
      \u0275\u0275text(89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "p", 56);
      \u0275\u0275text(91, "Informations compl\xE9mentaires");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "form", 63)(93, "div", 64)(94, "div", 65)(95, "label", 66);
      \u0275\u0275text(96, "Motif de la demande ");
      \u0275\u0275elementStart(97, "span", 57);
      \u0275\u0275text(98, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(99, "textarea", 67);
      \u0275\u0275template(100, StudentDemandeComponent_div_100_Template, 3, 0, "div", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 65)(102, "label", 66);
      \u0275\u0275text(103, "Objectifs personnels");
      \u0275\u0275elementEnd();
      \u0275\u0275element(104, "textarea", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "div", 70)(106, "label", 66);
      \u0275\u0275text(107, "Priorit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "select", 71)(109, "option", 72);
      \u0275\u0275text(110, "\u{1F7E2} Basse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "option", 73);
      \u0275\u0275text(112, "\u{1F7E1} Normale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "option", 74);
      \u0275\u0275text(114, "\u{1F7E0} Haute");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "div", 70)(116, "label", 66);
      \u0275\u0275text(117, "Date souhait\xE9e de d\xE9but");
      \u0275\u0275elementEnd();
      \u0275\u0275element(118, "input", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div", 65)(120, "label", 76);
      \u0275\u0275text(121, "Commentaire ");
      \u0275\u0275elementStart(122, "span", 77);
      \u0275\u0275text(123, "(optionnel)");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(124, "textarea", 78);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(125, "div", 79)(126, "button", 80);
      \u0275\u0275listener("click", function StudentDemandeComponent_Template_button_click_126_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275element(127, "i", 81);
      \u0275\u0275text(128, "Annuler ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "button", 82);
      \u0275\u0275listener("click", function StudentDemandeComponent_Template_button_click_129_listener() {
        return ctx.submitRequest();
      });
      \u0275\u0275template(130, StudentDemandeComponent_span_130_Template, 1, 0, "span", 83)(131, StudentDemandeComponent_i_131_Template, 1, 0, "i", 84);
      \u0275\u0275text(132);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_31_0;
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
      \u0275\u0275advance(23);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategorieId);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedCategorieId);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.selectedCategorieId ? "3" : "2");
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ((tmp_31_0 = ctx.form.get("motif_demande")) == null ? null : tmp_31_0.invalid) && ((tmp_31_0 = ctx.form.get("motif_demande")) == null ? null : tmp_31_0.touched));
      \u0275\u0275advance(29);
      \u0275\u0275property("disabled", ctx.submitting || !ctx.canSubmit());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.submitting);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.submitting ? "Envoi en cours..." : "Valider la demande", " ");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, CustomPaginationComponent, DecimalPipe, DatePipe], styles: ['\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_toast-progress {\n  from {\n    width: 100%;\n  }\n  to {\n    width: 0%;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.pq-kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 12px;\n}\n@media (max-width: 1200px) {\n  .pq-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .pq-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .pq-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.pq-kpi-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border-top: 3px solid transparent;\n}\n.pq-kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: currentColor;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.pq-kpi-card__icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.pq-kpi-card__body[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.pq-kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #111827;\n  line-height: 1;\n}\n.pq-kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  margin-top: 2px;\n  white-space: nowrap;\n}\n.pq-kpi-card--teal[_ngcontent-%COMP%] {\n  border-top-color: #069b8f;\n}\n.pq-kpi-card--teal[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.pq-kpi-card--teal.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #069b8f;\n}\n.pq-kpi-card--green[_ngcontent-%COMP%] {\n  border-top-color: #16a34a;\n}\n.pq-kpi-card--green[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.pq-kpi-card--green.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n}\n.pq-kpi-card--orange[_ngcontent-%COMP%] {\n  border-top-color: #d97706;\n}\n.pq-kpi-card--orange[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.pq-kpi-card--orange.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #d97706;\n}\n.pq-kpi-card--red[_ngcontent-%COMP%] {\n  border-top-color: #dc2626;\n}\n.pq-kpi-card--red[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.pq-kpi-card--red.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.pq-kpi-card--gray[_ngcontent-%COMP%] {\n  border-top-color: #9ca3af;\n}\n.pq-kpi-card--gray[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.pq-kpi-card--gray.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #9ca3af;\n}\n.sc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.sc-header__title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #111827;\n  margin-bottom: 4px;\n  letter-spacing: -0.3px;\n}\n.sc-header__subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n  margin: 0;\n}\n.sc-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.sc-header__toggle-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid #e5e7eb;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sc-header__toggle-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sc-header__toggle-btn[_ngcontent-%COMP%]:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f5;\n}\n.sc-header__toggle-btn--active[_ngcontent-%COMP%] {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: #fff;\n}\n.sc-header__new-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 20px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.4795031056, 115.7204968944, 106.7614906832) 100%);\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(6, 155, 143, 0.3);\n  transition: all 0.2s ease;\n}\n.sc-header__new-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.sc-header__new-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(6, 155, 143, 0.4);\n}\n.sc-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px 18px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.sc-filters__search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.sc-filters__search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  font-size: 15px;\n  pointer-events: none;\n}\n.sc-filters__search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 14px 9px 36px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 50px;\n  font-size: 13px;\n  outline: none;\n  transition: all 0.2s ease;\n  background: #f9fafb;\n}\n.sc-filters__search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.sc-filters__search-input[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.1);\n}\n.sc-filters__pills[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.sc-filters__pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid #e5e7eb;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-filters__pill[_ngcontent-%COMP%]:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f5;\n}\n.sc-filters__pill--active[_ngcontent-%COMP%] {\n  background: #069b8f !important;\n  border-color: #069b8f !important;\n  color: #fff !important;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.25);\n}\n.sc-filters__pill--attente[_ngcontent-%COMP%]:hover {\n  border-color: #d97706;\n  color: #d97706;\n  background: #fffbeb;\n}\n.sc-filters__pill--validee[_ngcontent-%COMP%]:hover {\n  border-color: #16a34a;\n  color: #16a34a;\n  background: #f0fdf4;\n}\n.sc-filters__pill--refusee[_ngcontent-%COMP%]:hover {\n  border-color: #dc2626;\n  color: #dc2626;\n  background: #fef2f2;\n}\n.sc-filters__pill--annulee[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  color: #4b5563;\n  background: #f3f4f6;\n}\n.sc-filters__pill-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  opacity: 0.8;\n}\n.sc-filters__reset[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #dc2626;\n  background: rgba(220, 38, 38, 0.06);\n  border: 1.5px solid rgba(220, 38, 38, 0.2);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-filters__reset[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.12);\n  border-color: #dc2626;\n}\n.sc-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px 0;\n  color: #9ca3af;\n}\n.sc-loading__spinner[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n.sc-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 13px;\n}\n.sc-table-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n  overflow: visible;\n}\n.sc-table-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  background: #fff;\n  border-bottom: 1px solid #f3f4f6;\n  border-radius: 12px 12px 0 0;\n}\n.sc-table-card__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  display: flex;\n  align-items: center;\n}\n.sc-table-card__count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 24px;\n  height: 24px;\n  padding: 0 8px;\n  background: #069b8f;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 700;\n  margin-left: 8px;\n}\n.sc-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n  padding: 12px 16px;\n  white-space: nowrap;\n}\n.sc-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  vertical-align: middle;\n}\n.sc-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.sc-row--refusee[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.025) !important;\n}\n.sc-row--validee[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.025) !important;\n}\n.sc-table-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sc-table-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-left: 3px solid transparent;\n  transition: border-color 0.2s;\n}\n.sc-table-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #e6f7f5 !important;\n}\n.sc-table-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]:first-child {\n  border-left-color: #069b8f;\n}\n.sc-formation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.sc-formation__thumb[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 8px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid #e5e7eb;\n}\n.sc-formation__info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sc-formation__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1.3;\n  margin-bottom: 3px;\n}\n.sc-formation__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.sc-formation__details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.sc-detail-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 9px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n}\n.sc-detail-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.sc-detail-chip--award[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.25);\n}\n.sc-date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n  font-weight: 500;\n}\n.sc-date--time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 400;\n  margin-top: 1px;\n}\n.sc-priorite[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.sc-priorite.priorite-urgente[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n}\n.sc-priorite.priorite-haute[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.1);\n  color: #d97706;\n}\n.sc-priorite.priorite-normale[_ngcontent-%COMP%] {\n  background: rgba(6, 155, 143, 0.1);\n  color: #069b8f;\n}\n.sc-priorite.priorite-basse[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.sc-statut-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  position: relative;\n}\n.sc-statut[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.sc-statut.statut-attente[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.sc-statut.statut-validee[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.sc-statut.statut-refusee[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.sc-statut.statut-annulee[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #9ca3af;\n}\n.sc-motif-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.sc-motif-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #fef2f2;\n  color: #dc2626;\n  border: 1px solid rgba(220, 38, 38, 0.2);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sc-motif-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.sc-motif-btn[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.sc-motif-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(100% + 10px);\n  left: 50%;\n  transform: translateX(-50%);\n  width: 260px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.06);\n  z-index: 200;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fadeIn 0.15s ease;\n}\n.sc-motif-tooltip[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -6px;\n  left: 50%;\n  width: 12px;\n  height: 12px;\n  background: #fff;\n  border-right: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  transform: translateX(-50%) rotate(45deg);\n}\n.sc-motif-tooltip__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 14px;\n  background: #fef2f2;\n  color: #dc2626;\n  font-size: 12px;\n  font-weight: 700;\n}\n.sc-motif-tooltip__header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sc-motif-tooltip__body[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 13px;\n  color: #4b5563;\n  line-height: 1.5;\n  margin: 0;\n}\n.sc-motif-tooltip__responsable[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  background: rgba(217, 119, 6, 0.07);\n  border-top: 1px solid rgba(217, 119, 6, 0.15);\n  font-size: 12px;\n  color: #d97706;\n  display: flex;\n  align-items: center;\n}\n.sc-motif-tooltip__responsable[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-left: 4px;\n}\n.sc-motif-tooltip__footer[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  background: #f9fafb;\n  border-top: 1px solid #f3f4f6;\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: flex-start;\n  gap: 4px;\n}\n.sc-motif-tooltip__footer[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  line-height: 1.4;\n}\n.sc-statut-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.sc-statut-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.sc-statut-icon--validee[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.sc-statut-icon--refusee[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.sc-statut-icon--annulee[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.sc-grid-motif-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  border: 1.5px solid rgba(220, 38, 38, 0.3);\n  background: #fef2f2;\n  color: #dc2626;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-grid-motif-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.sc-grid-motif-btn[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.sc-grid-commencer-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  border: 1.5px solid rgba(22, 163, 74, 0.3);\n  background: #f0fdf4;\n  color: #16a34a;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-grid-commencer-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.sc-grid-commencer-btn[_ngcontent-%COMP%]:hover {\n  background: #16a34a;\n  color: #fff;\n  border-color: #16a34a;\n}\n.lms-formateur-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 12px;\n  background: #f9fafb;\n  border: 1px solid #f3f4f6;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.lms-formateur-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(6, 155, 143, 0.2);\n  background: #e6f7f5;\n}\n.lms-formateur-card__avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 2px solid rgba(6, 155, 143, 0.2);\n}\n.lms-formateur-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.lms-formateur-card__name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 2px;\n}\n.lms-formateur-card__fonction[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin-bottom: 3px;\n}\n.lms-formateur-card__email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #069b8f;\n  display: flex;\n  align-items: center;\n}\n.lms-formateur-card__email[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.sc-action-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.sc-action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  transition: all 0.2s ease;\n}\n.sc-action-btn__tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%) translateY(4px);\n  background: #111827;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n  padding: 5px 10px;\n  border-radius: 6px;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.15s ease, transform 0.15s ease;\n  z-index: 100;\n}\n.sc-action-btn__tooltip[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 5px solid transparent;\n  border-top-color: #111827;\n}\n.sc-action-btn[_ngcontent-%COMP%]:hover   .sc-action-btn__tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0);\n}\n.sc-action-btn--danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-color: rgba(220, 38, 38, 0.25);\n}\n.sc-action-btn--danger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.sc-action-btn--danger[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n  border-color: #dc2626;\n  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.35);\n}\n.sc-action-btn--danger[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.sc-action-btn--teal[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  border-color: rgba(6, 155, 143, 0.25);\n}\n.sc-action-btn--teal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #069b8f;\n}\n.sc-action-btn--teal[_ngcontent-%COMP%]:hover {\n  background: #069b8f;\n  border-color: #069b8f;\n  box-shadow: 0 4px 12px rgba(6, 155, 143, 0.35);\n}\n.sc-action-btn--teal[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.sc-btn-annuler[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid rgba(220, 38, 38, 0.3);\n  background: #fef2f2;\n  color: #dc2626;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-btn-annuler[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.sc-btn-annuler[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.sc-btn-annuler[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sc-btn-relancer[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid rgba(6, 155, 143, 0.3);\n  background: #e6f7f5;\n  color: #069b8f;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-btn-relancer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.sc-btn-relancer[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n}\n.sc-btn-relancer[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sc-btn--xs[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  padding: 0 !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50% !important;\n}\n.sc-btn--xs[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0 !important;\n}\n.sc-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 72px 20px;\n  text-align: center;\n}\n.sc-empty__icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: #e6f7f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.sc-empty__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #069b8f;\n}\n.sc-empty__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #4b5563;\n  margin-bottom: 8px;\n}\n.sc-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n  margin-bottom: 20px;\n}\n.sc-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\n  gap: 20px;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.sc-grid-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n  cursor: pointer;\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.2s ease;\n  display: flex;\n  flex-direction: column;\n}\n.sc-grid-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.13), 0 4px 12px rgba(0, 0, 0, 0.07);\n  border-color: #069b8f;\n}\n.sc-grid-card--validee[_ngcontent-%COMP%] {\n  border-top: 3px solid #16a34a;\n}\n.sc-grid-card--refusee[_ngcontent-%COMP%] {\n  border-top: 3px solid #dc2626;\n}\n.sc-grid-card--attente[_ngcontent-%COMP%] {\n  border-top: 3px solid #d97706;\n}\n.sc-grid-card__cover[_ngcontent-%COMP%] {\n  position: relative;\n  height: 155px;\n  overflow: hidden;\n  background: #f3f4f6;\n}\n.sc-grid-card__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.4s ease;\n}\n.sc-grid-card[_ngcontent-%COMP%]:hover   .sc-grid-card__img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.sc-grid-card__cover-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.6) 0%,\n      rgba(0, 0, 0, 0.1) 55%,\n      transparent 100%);\n  display: flex;\n  align-items: flex-end;\n  padding: 12px 14px;\n}\n.sc-grid-card__priorite[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 10px !important;\n  padding: 3px 9px !important;\n}\n.sc-grid-card__body[_ngcontent-%COMP%] {\n  padding: 14px 16px 12px;\n  flex: 1;\n}\n.sc-grid-card__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 4px;\n  line-height: 1.35;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.sc-grid-card__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.sc-grid-card__sub[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.sc-grid-card__chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-top: 8px;\n}\n.sc-grid-card__footer[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-top: 1px solid #f3f4f6;\n  background: #f9fafb;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.sc-grid-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.sc-grid-card__date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.sc-grid-card__date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.lms-modal[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  overflow: hidden;\n  border: none;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.lms-modal__header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.099378882, 105.900621118, 97.701863354) 100%);\n  padding: 18px 24px;\n  border: none;\n}\n.lms-modal__header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 12px;\n}\n.lms-modal__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.lms-modal[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n  font-size: 16px;\n}\n.lms-modal__body[_ngcontent-%COMP%] {\n  padding: 28px 24px;\n  background: #f9fafb;\n  max-height: 72vh;\n  overflow-y: auto;\n}\n.lms-modal__body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n.lms-modal__body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f3f4f6;\n}\n.lms-modal__body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.lms-modal__footer[_ngcontent-%COMP%] {\n  background: #fff;\n  border-top: 1px solid #e5e7eb;\n  padding: 16px 24px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.lms-detail-chips[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.lms-detail-chips__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.lms-btn-commencer[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 16px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      rgb(4.4795031056, 115.7204968944, 106.7614906832));\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  white-space: nowrap;\n  box-shadow: 0 4px 12px rgba(6, 155, 143, 0.35);\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.lms-btn-commencer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.lms-btn-commencer[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(6, 155, 143, 0.45);\n}\n.lms-btn-commencer[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.lms-detail-section[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 16px 18px;\n}\n.lms-detail-section__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #374151;\n  display: flex;\n  align-items: center;\n  margin-bottom: 2px;\n}\n.lms-detail-section__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #069b8f;\n}\n.lms-detail-section__body[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n  line-height: 1.6;\n  margin: 8px 0 0 0;\n}\n.lms-detail-section--danger[_ngcontent-%COMP%] {\n  border-color: rgba(220, 38, 38, 0.3);\n  background: #fef2f2;\n}\n.lms-detail-section--danger[_ngcontent-%COMP%]   .lms-detail-section__title[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.lms-detail-section--danger[_ngcontent-%COMP%]   .lms-detail-section__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.lms-detail-section--success[_ngcontent-%COMP%] {\n  border-color: rgba(22, 163, 74, 0.3);\n  background: #f0fdf4;\n}\n.lms-detail-section--success[_ngcontent-%COMP%]   .lms-detail-section__title[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.lms-detail-section--success[_ngcontent-%COMP%]   .lms-detail-section__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.lms-formation-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 14px;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n}\n.lms-formation-banner__img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.lms-formation-banner__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.lms-formation-banner__title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 15px;\n  color: #111827;\n  line-height: 1.35;\n  margin-bottom: 4px;\n}\n.lms-formation-banner__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 10px;\n}\n.lms-formation-banner__sub[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #069b8f;\n}\n.lms-formation-banner__tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.lms-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #f3f4f6;\n  height: 100%;\n  transition: all 0.2s ease;\n}\n.lms-info-item[_ngcontent-%COMP%]:hover {\n  border-color: rgba(6, 155, 143, 0.25);\n  background: #e6f7f5;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.lms-info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n  margin-top: 1px;\n  color: #069b8f;\n}\n.lms-info-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  letter-spacing: 0.2px;\n  display: block;\n  margin-bottom: 2px;\n}\n.lms-info-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #111827;\n  display: block;\n}\n.lms-formation-desc[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  background: #f9fafb;\n  border-radius: 8px;\n  border-left: 3px solid #069b8f;\n}\n.lms-formation-desc__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #069b8f;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-bottom: 6px;\n}\n.lms-formation-desc__label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.lms-formation-desc__text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n  line-height: 1.65;\n  margin: 0;\n  white-space: pre-line;\n}\n.lms-formation-desc--contenu[_ngcontent-%COMP%] {\n  border-left-color: #4f46e5;\n  background: #eef2ff;\n}\n.lms-formation-desc--contenu[_ngcontent-%COMP%]   .lms-formation-desc__label[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.lms-formation-desc--prerequis[_ngcontent-%COMP%] {\n  border-left-color: #D4AF37;\n  background: #fdf8e7;\n}\n.lms-formation-desc--prerequis[_ngcontent-%COMP%]   .lms-formation-desc__label[_ngcontent-%COMP%] {\n  color: #D4AF37;\n}\n.lms-formation-desc--public[_ngcontent-%COMP%] {\n  border-left-color: #7c3aed;\n  background: #f5f3ff;\n}\n.lms-formation-desc--public[_ngcontent-%COMP%]   .lms-formation-desc__label[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.lms-formation-desc--competences[_ngcontent-%COMP%] {\n  border-left-color: #16a34a;\n  background: #f0fdf4;\n}\n.lms-formation-desc--competences[_ngcontent-%COMP%]   .lms-formation-desc__label[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.lms-formation-desc--objectifs[_ngcontent-%COMP%] {\n  border-left-color: #d97706;\n  background: #fffbeb;\n}\n.lms-formation-desc--objectifs[_ngcontent-%COMP%]   .lms-formation-desc__label[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.lms-meta-chip--orange[_ngcontent-%COMP%] {\n  background: #fdf8e7;\n  color: #D4AF37;\n  border-color: rgba(212, 175, 55, 0.2);\n}\n.lms-modules-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.lms-modules-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 4px;\n}\n.lms-modules-breadcrumb__item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6b7280;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  border-radius: 50px;\n  padding: 3px 10px;\n}\n.lms-modules-breadcrumb__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #069b8f;\n}\n.lms-modules-breadcrumb__sep[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #d1d5db;\n  font-weight: 400;\n}\n.lms-accordion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.lms-accordion__item[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #fff;\n  transition: box-shadow 0.2s ease;\n}\n.lms-accordion__item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.lms-accordion__header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  background: #f9fafb;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s ease;\n  gap: 12px;\n}\n.lms-accordion__header[_ngcontent-%COMP%]:hover {\n  background: #e6f7f5;\n}\n.lms-accordion__header--open[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  border-bottom: 1px solid rgba(6, 155, 143, 0.15);\n}\n.lms-accordion__header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n}\n.lms-accordion__header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.lms-accordion__num[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #069b8f;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.lms-accordion__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.lms-accordion__count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #069b8f;\n  background: rgba(6, 155, 143, 0.1);\n  border-radius: 50px;\n  padding: 2px 8px;\n  white-space: nowrap;\n}\n.lms-accordion__chevron[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #069b8f;\n  transition: transform 0.2s ease;\n}\n.lms-accordion__body[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.15s ease;\n}\n.lms-sections-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.lms-sections-list__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  gap: 12px;\n  transition: background 0.15s ease;\n}\n.lms-sections-list__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.lms-sections-list__item[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.lms-sections-list__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  min-width: 0;\n}\n.lms-sections-list__index[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #9ca3af;\n  min-width: 28px;\n  flex-shrink: 0;\n}\n.lms-sections-list__icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #069b8f;\n  flex-shrink: 0;\n}\n.lms-sections-list__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #374151;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.lms-sections-list__duree[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.lms-sections-list__duree[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.lms-sections-list__empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  font-size: 12px;\n  color: #9ca3af;\n  font-style: italic;\n}\n.lms-sections-list__empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.lms-competences-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 4px 0 0 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.lms-competences-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  line-height: 1.5;\n}\n.lms-competences-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #16a34a;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.cd-demande-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.cd-demande-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 13px;\n}\n.cd-demande-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cd-demande-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #9ca3af;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.lms-meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 9px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.lms-meta-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.lms-meta-chip--teal[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  color: #069b8f;\n  border-color: rgba(6, 155, 143, 0.2);\n}\n.lms-meta-chip--warning[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.lms-meta-chip--success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.lms-meta-chip--purple[_ngcontent-%COMP%] {\n  background: #f5f3ff;\n  color: #7c3aed;\n  border-color: rgba(124, 58, 237, 0.2);\n}\n.lms-step__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.lms-step__number[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #4b5563;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.lms-step__number--blue[_ngcontent-%COMP%] {\n  background: #069b8f;\n}\n.lms-step__number--green[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.lms-step__number--purple[_ngcontent-%COMP%] {\n  background: #7c3aed;\n}\n.lms-step__number--orange[_ngcontent-%COMP%] {\n  background: #D4AF37;\n}\n.lms-step__title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  color: #111827;\n  margin: 0;\n}\n.lms-select-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px;\n  cursor: pointer;\n  position: relative;\n  height: 100%;\n  transition: all 0.2s ease;\n}\n.lms-select-card__check[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 20px;\n}\n.lms-select-card__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n  color: #111827;\n  margin-bottom: 4px;\n  padding-right: 24px;\n}\n.lms-select-card__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.lms-select-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.lms-select-card--orange[_ngcontent-%COMP%]:hover {\n  border-color: #D4AF37;\n  background: #fdf8e7;\n}\n.lms-select-card--orange.lms-select-card--active[_ngcontent-%COMP%] {\n  border-color: #D4AF37 !important;\n  background: #D4AF37 !important;\n}\n.lms-select-card--orange.lms-select-card--active[_ngcontent-%COMP%]   .lms-select-card__title[_ngcontent-%COMP%], \n.lms-select-card--orange.lms-select-card--active[_ngcontent-%COMP%]   .lms-select-card__sub[_ngcontent-%COMP%], \n.lms-select-card--orange.lms-select-card--active[_ngcontent-%COMP%]   .lms-select-card__check[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.lms-selection-badge[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.lms-selection-badge--orange[_ngcontent-%COMP%] {\n  background: #fdf8e7;\n  color: #D4AF37;\n}\n.lms-selection-badge--teal[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.lms-selection-badge--purple[_ngcontent-%COMP%] {\n  background: #f5f3ff;\n  color: #7c3aed;\n}\n.lms-input[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1.5px solid #e5e7eb;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.lms-input[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.12);\n}\n.lms-field-error[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 12px;\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.lms-divider[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 2px dashed #e5e7eb;\n  margin: 24px 0;\n}\n.lms-empty-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 24px;\n  border: 2px dashed #e5e7eb;\n  border-radius: 12px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.lms-empty-inline[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.5;\n}\n.lms-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 32px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.lms-btn-cancel[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 50px;\n  padding: 10px 22px;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.lms-btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n  color: #111827;\n}\n.lms-btn-submit[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.4795031056, 115.7204968944, 106.7614906832) 100%);\n  color: #fff;\n  border: none;\n  border-radius: 50px;\n  padding: 10px 28px;\n  font-weight: 700;\n  font-size: 14px;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.4);\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.lms-btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(6, 155, 143, 0.5);\n  color: #fff;\n}\n.lms-btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.lms-toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 9999;\n  pointer-events: none;\n  opacity: 0;\n  transform: translateX(20px);\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n.lms-toast-container.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n  pointer-events: all;\n}\n.lms-toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  min-width: 320px;\n  max-width: 420px;\n  padding: 16px 18px;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.06);\n  position: relative;\n  overflow: hidden;\n  background: #fff;\n}\n.lms-toast__icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.lms-toast__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.lms-toast__label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  font-size: 13px;\n  letter-spacing: 0.3px;\n  margin-bottom: 2px;\n}\n.lms-toast__message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.5;\n  opacity: 0.85;\n}\n.lms-toast__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 2px;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 1;\n  opacity: 0.6;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n  color: #4b5563;\n}\n.lms-toast__close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.lms-toast__progress[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 3px;\n  width: 100%;\n  animation: _ngcontent-%COMP%_toast-progress 4s linear forwards;\n  border-radius: 0 0 12px 12px;\n}\n.lms-toast--success[_ngcontent-%COMP%] {\n  border-left: 4px solid #16a34a;\n}\n.lms-toast--success[_ngcontent-%COMP%]   .lms-toast__icon[_ngcontent-%COMP%], \n.lms-toast--success[_ngcontent-%COMP%]   .lms-toast__label[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.lms-toast--success[_ngcontent-%COMP%]   .lms-toast__progress[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.lms-toast--error[_ngcontent-%COMP%] {\n  border-left: 4px solid #dc2626;\n}\n.lms-toast--error[_ngcontent-%COMP%]   .lms-toast__icon[_ngcontent-%COMP%], \n.lms-toast--error[_ngcontent-%COMP%]   .lms-toast__label[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.lms-toast--error[_ngcontent-%COMP%]   .lms-toast__progress[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.lms-toast--warning[_ngcontent-%COMP%] {\n  border-left: 4px solid #d97706;\n}\n.lms-toast--warning[_ngcontent-%COMP%]   .lms-toast__icon[_ngcontent-%COMP%], \n.lms-toast--warning[_ngcontent-%COMP%]   .lms-toast__label[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.lms-toast--warning[_ngcontent-%COMP%]   .lms-toast__progress[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n@media (max-width: 991px) {\n  .sc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 767px) {\n  .sc-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .sc-filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .sc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sc-motif-tooltip[_ngcontent-%COMP%] {\n    left: auto;\n    right: 0;\n    transform: none;\n  }\n  .sc-motif-tooltip[_ngcontent-%COMP%]::after {\n    left: auto;\n    right: 20px;\n    transform: rotate(45deg);\n  }\n  .lms-toast-container[_ngcontent-%COMP%] {\n    top: auto;\n    bottom: 20px;\n    right: 16px;\n    left: 16px;\n  }\n  .lms-toast[_ngcontent-%COMP%] {\n    min-width: unset;\n    width: 100%;\n  }\n  .lms-modal__body[_ngcontent-%COMP%] {\n    max-height: 65vh;\n  }\n  .pq-kpi-card[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=student-demande.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentDemandeComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-student-demande", imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, CustomPaginationComponent], template: `<!-- TOAST -->\r
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
    <h3 class="sc-header__title">Mes demandes de formation</h3>\r
    <p class="sc-header__subtitle">Suivez l'\xE9tat de vos demandes de formations soumises \xE0 l'entreprise</p>\r
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
      <i class="isax isax-teacher"></i>\r
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
           placeholder="Rechercher une formation..."\r
           [(ngModel)]="searchDataValue" (ngModelChange)="searchData(searchDataValue)">\r
  </div>\r
  <div class="sc-filters__pills">\r
    <button class="sc-filters__pill"\r
            [class.sc-filters__pill--active]="selectedStatus === ''"\r
            (click)="filterByStatus('')">Tous</button>\r
    <button class="sc-filters__pill sc-filters__pill--attente"\r
            [class.sc-filters__pill--active]="selectedStatus === 'en_attente'"\r
            (click)="filterByStatus('en_attente')">\r
      En attente\r
      <span class="sc-filters__pill-count" *ngIf="totalEnAttente > 0">({{ totalEnAttente }})</span>\r
    </button>\r
    <button class="sc-filters__pill sc-filters__pill--validee"\r
            [class.sc-filters__pill--active]="selectedStatus === 'validee'"\r
            (click)="filterByStatus('validee')">\r
      Valid\xE9e\r
      <span class="sc-filters__pill-count" *ngIf="totalValidees > 0">({{ totalValidees }})</span>\r
    </button>\r
    <button class="sc-filters__pill sc-filters__pill--refusee"\r
            [class.sc-filters__pill--active]="selectedStatus === 'refusee'"\r
            (click)="filterByStatus('refusee')">\r
      Refus\xE9e\r
      <span class="sc-filters__pill-count" *ngIf="totalRefusees > 0">({{ totalRefusees }})</span>\r
    </button>\r
    <button class="sc-filters__pill sc-filters__pill--annulee"\r
            [class.sc-filters__pill--active]="selectedStatus === 'annulee'"\r
            (click)="filterByStatus('annulee')">\r
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
  <p>Chargement de vos demandes...</p>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- VUE TABLEAU                                -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<ng-container *ngIf="!loading && viewMode === 'table'">\r
  <div class="card sc-table-card" *ngIf="demandes.length > 0">\r
    <div class="card-header sc-table-card__header">\r
      <div class="sc-table-card__title">\r
        <i class="isax isax-teacher text-primary me-2"></i>\r
        Historique des demandes de formations\r
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
            <th style="min-width:280px;">Formation</th>\r
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
            <!-- FORMATION -->\r
            <td>\r
              <div class="sc-formation">\r
                <img [src]="demande.image_affiche" class="sc-formation__thumb" alt="">\r
                <div class="sc-formation__info">\r
                  <div class="sc-formation__title">{{ demande.titre_affiche }}</div>\r
                  <small class="sc-formation__sub" *ngIf="demande.sous_titre_affiche">\r
                    <i class="isax isax-teacher me-1"></i>{{ demande.sous_titre_affiche }}\r
                  </small>\r
                  <div class="sc-formation__details">\r
                    <span class="sc-detail-chip" *ngIf="demande.formation?.niveau">\r
                      <i class="isax isax-chart me-1"></i>{{ demande.formation.niveau }}\r
                    </span>\r
                    <span class="sc-detail-chip" *ngIf="demande.formation?.duree_totale">\r
                      <i class="isax isax-clock me-1"></i>{{ demande.formation.duree_totale }}h\r
                    </span>\r
                    <span class="sc-detail-chip" *ngIf="demande.formation?.categorie?.nom">\r
                      <i class="isax isax-category me-1"></i>{{ demande.formation.categorie.nom }}\r
                    </span>\r
                    <span class="sc-detail-chip sc-detail-chip--award" *ngIf="demande.formation?.est_certifiante">\r
                      <i class="isax isax-award me-1"></i>Certifiante\r
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
                    <div class="sc-motif-tooltip__responsable" *ngIf="showRefusePerson && demande.traite_par_nom">\r
                      <i class="isax isax-user me-1"></i>Refus\xE9 par : <strong>{{ demande.traite_par_nom }}</strong>\r
                    </div>\r
                    <div class="sc-motif-tooltip__footer" *ngIf="demande.commentaire_rh">\r
                      <i class="isax isax-message-text me-1"></i><em>{{ demande.commentaire_rh }}</em>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </td>\r
\r
            <!-- ACTION -->\r
            <td class="text-center" (click)="$event.stopPropagation()">\r
              <div class="d-flex align-items-center justify-content-center gap-2">\r
                <ng-container *ngIf="demande.statut === 'en_attente'">\r
                  <div class="sc-action-btn sc-action-btn--danger"\r
                       (click)="annulerDemande(demande.id, $event)"\r
                       title="Annuler la demande">\r
                    <i class="isax isax-close-circle"></i>\r
                    <span class="sc-action-btn__tooltip">Annuler la demande</span>\r
                  </div>\r
                  <div class="sc-action-btn sc-action-btn--teal"\r
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
          <i class="isax isax-teacher"></i>{{ demande.sous_titre_affiche }}\r
        </p>\r
        <div class="sc-grid-card__chips">\r
          <span class="sc-detail-chip" *ngIf="demande.formation?.niveau">\r
            <i class="isax isax-chart me-1"></i>{{ demande.formation.niveau }}\r
          </span>\r
          <span class="sc-detail-chip" *ngIf="demande.formation?.duree_totale">\r
            <i class="isax isax-clock me-1"></i>{{ demande.formation.duree_totale }}h\r
          </span>\r
          <span class="sc-detail-chip" *ngIf="demande.formation?.categorie?.nom">\r
            <i class="isax isax-category me-1"></i>{{ demande.formation.categorie.nom }}\r
          </span>\r
          <span class="sc-detail-chip sc-detail-chip--award" *ngIf="demande.formation?.est_certifiante">\r
            <i class="isax isax-award me-1"></i>Certifiante\r
          </span>\r
        </div>\r
      </div>\r
\r
      <!-- Footer -->\r
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
          <button *ngIf="demande.statut === 'validee'"\r
                  class="sc-grid-commencer-btn"\r
                  (click)="commencerFormation(demande, $event)">\r
            <i class="isax isax-play-circle me-1"></i>Commencer\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</ng-container>\r
\r
<!-- EMPTY -->\r
<div *ngIf="!loading && demandes.length === 0" class="sc-empty">\r
  <div class="sc-empty__icon"><i class="isax isax-teacher"></i></div>\r
  <h5 class="sc-empty__title">Aucune demande de formation trouv\xE9e</h5>\r
  <p>Vos futures demandes de formations appara\xEEtront ici.</p>\r
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
<div class="modal fade" id="demandeDetailModal" tabindex="-1" aria-hidden="true">\r
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">\r
    <div class="modal-content lms-modal" *ngIf="demandeSelectionnee">\r
\r
      <div class="modal-header lms-modal__header">\r
        <div class="d-flex align-items-center gap-3">\r
          <div class="lms-modal__icon"><i class="isax isax-teacher"></i></div>\r
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
        <div class="lms-detail-chips mb-4">\r
          <div class="lms-detail-chips__left">\r
            <span class="sc-statut" [ngClass]="getStatutClass(demandeSelectionnee.statut)">\r
              {{ demandeSelectionnee.statut_display }}\r
            </span>\r
            <span class="sc-priorite ms-2" [ngClass]="getPrioriteClass(demandeSelectionnee.priorite)">\r
              {{ demandeSelectionnee.priorite_display }}\r
            </span>\r
            <span class="lms-meta-chip lms-meta-chip--teal ms-2"\r
                  *ngIf="demandeSelectionnee.date_souhaitee_debut">\r
              <i class="isax isax-calendar me-1"></i>\r
              Souhait\xE9 le {{ demandeSelectionnee.date_souhaitee_debut | date:'dd/MM/yyyy' }}\r
            </span>\r
            <span class="lms-meta-chip lms-meta-chip--warning ms-1"\r
                  *ngIf="demandeSelectionnee.formation?.est_certifiante">\r
              <i class="isax isax-award me-1"></i>Certifiante\r
            </span>\r
          </div>\r
          <button *ngIf="demandeSelectionnee.statut === 'validee'"\r
                  class="lms-btn-commencer"\r
                  (click)="commencerFormation(demandeSelectionnee)">\r
            <i class="isax isax-play-circle me-1"></i>Commencer la formation\r
          </button>\r
        </div>\r
\r
        <!-- SECTION 1 \u2014 Pr\xE9sentation de la formation -->\r
        <div class="lms-detail-section mb-3" *ngIf="demandeSelectionnee.formation">\r
          <div class="lms-detail-section__title">\r
            <i class="isax isax-teacher me-2"></i>Formation demand\xE9e\r
          </div>\r
\r
          <div class="lms-formation-banner mt-2">\r
            <img [src]="demandeSelectionnee.image_affiche"\r
                 class="lms-formation-banner__img" alt="">\r
            <div class="lms-formation-banner__body">\r
              <div class="lms-formation-banner__title">{{ demandeSelectionnee.titre_affiche }}</div>\r
              <div class="lms-formation-banner__sub" *ngIf="demandeSelectionnee.sous_titre_affiche">\r
                <i class="isax isax-teacher me-1"></i>{{ demandeSelectionnee.sous_titre_affiche }}\r
              </div>\r
              <div class="lms-formation-banner__tags">\r
                <span class="lms-meta-chip lms-meta-chip--purple"\r
                      *ngIf="demandeSelectionnee.formation?.categorie?.nom">\r
                  <i class="isax isax-category me-1"></i>\r
                  {{ demandeSelectionnee.formation.categorie.nom }}\r
                </span>\r
                <span class="lms-meta-chip lms-meta-chip--teal"\r
                      *ngIf="demandeSelectionnee.formation?.domaine?.nom">\r
                  <i class="isax isax-briefcase me-1"></i>\r
                  {{ demandeSelectionnee.formation.domaine.nom }}\r
                </span>\r
                <span class="lms-meta-chip lms-meta-chip--orange"\r
                      *ngIf="demandeSelectionnee.formation?.langue">\r
                  <i class="isax isax-language-square me-1"></i>\r
                  {{ demandeSelectionnee.formation.langue }}\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="row g-2 mt-3">\r
            <div class="col-md-6" *ngIf="demandeSelectionnee.formation?.niveau">\r
              <div class="lms-info-item">\r
                <i class="isax isax-chart" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Niveau</small>\r
                  <strong>{{ demandeSelectionnee.formation.niveau_display ?? demandeSelectionnee.formation.niveau }}</strong>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="col-md-6" *ngIf="demandeSelectionnee.formation?.duree_totale">\r
              <div class="lms-info-item">\r
                <i class="isax isax-clock" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Dur\xE9e totale</small>\r
                  <strong>{{ demandeSelectionnee.formation.duree_totale }} heure(s)</strong>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="col-md-6" *ngIf="demandeSelectionnee.formation?.nombre_modules != null">\r
              <div class="lms-info-item">\r
                <i class="isax isax-book" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Modules</small>\r
                  <strong>{{ demandeSelectionnee.formation.nombre_modules }} module(s)</strong>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="col-md-6" *ngIf="demandeSelectionnee.formation?.nombre_lecons != null">\r
              <div class="lms-info-item">\r
                <i class="isax isax-note-2" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Le\xE7ons</small>\r
                  <strong>{{ demandeSelectionnee.formation.nombre_lecons }} le\xE7on(s)</strong>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="col-md-6" *ngIf="demandeSelectionnee.formation?.formateur_nom">\r
              <div class="lms-info-item">\r
                <i class="isax isax-user" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Formateur</small>\r
                  <strong>{{ demandeSelectionnee.formation.formateur_nom }}</strong>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="col-md-6" *ngIf="demandeSelectionnee.formation?.type_formation">\r
              <div class="lms-info-item">\r
                <i class="isax isax-monitor" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Type</small>\r
                  <strong>{{ demandeSelectionnee.formation.type_formation_display ?? demandeSelectionnee.formation.type_formation }}</strong>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="col-md-6">\r
              <div class="lms-info-item">\r
                <i class="isax isax-award" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Certificat</small>\r
                  <strong>{{ demandeSelectionnee.formation.est_certifiante ? 'D\xE9livr\xE9 \xE0 la fin' : 'Non d\xE9livr\xE9' }}</strong>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="col-md-6" *ngIf="demandeSelectionnee.formation?.note_moyenne">\r
              <div class="lms-info-item">\r
                <i class="isax isax-star" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Note moyenne</small>\r
                  <strong>{{ demandeSelectionnee.formation.note_moyenne | number:'1.1-1' }} / 5</strong>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="col-md-6" *ngIf="demandeSelectionnee.formation?.date_debut">\r
              <div class="lms-info-item">\r
                <i class="isax isax-calendar-2" style="color:#069b8f"></i>\r
                <div>\r
                  <small>D\xE9but pr\xE9vu</small>\r
                  <strong>{{ demandeSelectionnee.formation.date_debut | date:'dd/MM/yyyy' }}</strong>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="col-md-6" *ngIf="demandeSelectionnee.formation?.date_fin">\r
              <div class="lms-info-item">\r
                <i class="isax isax-calendar-tick" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Fin pr\xE9vue</small>\r
                  <strong>{{ demandeSelectionnee.formation.date_fin | date:'dd/MM/yyyy' }}</strong>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="lms-formation-desc mt-3" *ngIf="demandeSelectionnee.formation?.description">\r
            <div class="lms-formation-desc__label"><i class="isax isax-document-text"></i>Description</div>\r
            <p class="lms-formation-desc__text">{{ demandeSelectionnee.formation.description }}</p>\r
          </div>\r
          <div class="lms-formation-desc lms-formation-desc--prerequis mt-2" *ngIf="demandeSelectionnee.formation?.prerequis">\r
            <div class="lms-formation-desc__label"><i class="isax isax-info-circle"></i>Pr\xE9requis</div>\r
            <p class="lms-formation-desc__text">{{ demandeSelectionnee.formation.prerequis }}</p>\r
          </div>\r
          <div class="lms-formation-desc lms-formation-desc--public mt-2"\r
               *ngIf="demandeSelectionnee.formation?.population_cible || demandeSelectionnee.formation?.public_cible">\r
            <div class="lms-formation-desc__label"><i class="isax isax-people"></i>Public cible</div>\r
            <p class="lms-formation-desc__text">\r
              {{ demandeSelectionnee.formation.population_cible ?? demandeSelectionnee.formation.public_cible }}\r
            </p>\r
          </div>\r
          <div class="lms-formation-desc lms-formation-desc--competences mt-2"\r
               *ngIf="demandeSelectionnee.formation?.competences_visees">\r
            <div class="lms-formation-desc__label"><i class="isax isax-medal"></i>Comp\xE9tences vis\xE9es</div>\r
            <p class="lms-formation-desc__text">{{ demandeSelectionnee.formation.competences_visees }}</p>\r
          </div>\r
          <div class="lms-formation-desc lms-formation-desc--competences mt-2"\r
               *ngIf="demandeSelectionnee.formation?.competences_acquises?.length">\r
            <div class="lms-formation-desc__label"><i class="isax isax-medal"></i>Comp\xE9tences vis\xE9es</div>\r
            <ul class="lms-competences-list">\r
              <li *ngFor="let comp of demandeSelectionnee.formation.competences_acquises">\r
                <i class="isax isax-tick-circle"></i>{{ comp }}\r
              </li>\r
            </ul>\r
          </div>\r
          <div class="lms-formation-desc lms-formation-desc--objectifs mt-2"\r
               *ngIf="demandeSelectionnee.formation?.objectifs || demandeSelectionnee.formation?.objectifs_pedagogiques">\r
            <div class="lms-formation-desc__label"><i class="isax isax-tick-square"></i>Objectifs p\xE9dagogiques</div>\r
            <p class="lms-formation-desc__text">\r
              {{ demandeSelectionnee.formation.objectifs ?? demandeSelectionnee.formation.objectifs_pedagogiques }}\r
            </p>\r
          </div>\r
        </div>\r
\r
        <!-- SECTION 2 \u2014 Contenu : modules & sections -->\r
        <div class="lms-detail-section mb-3 text-center py-4" *ngIf="loadingFormationDetail">\r
          <div class="spinner-border spinner-border-sm text-primary me-2"></div>\r
          <span class="text-muted" style="font-size:13px">Chargement du contenu...</span>\r
        </div>\r
\r
        <div class="lms-detail-section mb-3"\r
             *ngIf="!loadingFormationDetail && demandeSelectionnee.formation?.modules?.length">\r
          <div class="lms-modules-header">\r
            <div class="lms-modules-header__left">\r
              <div class="lms-detail-section__title mb-0">\r
                <i class="isax isax-book me-2"></i>Contenu de la formation\r
              </div>\r
              <div class="lms-modules-breadcrumb mt-1">\r
                <span class="lms-modules-breadcrumb__item">\r
                  <i class="isax isax-book-1 me-1"></i>\r
                  {{ demandeSelectionnee.formation.modules.length }} module(s)\r
                </span>\r
                <span class="lms-modules-breadcrumb__sep">/</span>\r
                <span class="lms-modules-breadcrumb__item">\r
                  <i class="isax isax-note-2 me-1"></i>\r
                  {{ demandeSelectionnee.formation.nombre_lecons ?? getTotalSections(demandeSelectionnee.formation.modules) }} section(s)\r
                </span>\r
                <span class="lms-modules-breadcrumb__sep" *ngIf="demandeSelectionnee.formation?.duree_totale">/</span>\r
                <span class="lms-modules-breadcrumb__item" *ngIf="demandeSelectionnee.formation?.duree_totale">\r
                  <i class="isax isax-clock me-1"></i>\r
                  {{ demandeSelectionnee.formation.duree_totale }}h\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="lms-accordion mt-3">\r
            <div class="lms-accordion__item"\r
                 *ngFor="let module of demandeSelectionnee.formation.modules; let i = index">\r
              <button class="lms-accordion__header"\r
                      [class.lms-accordion__header--open]="isModuleOpen(demandeSelectionnee.id, i)"\r
                      (click)="toggleModule(demandeSelectionnee.id, i)">\r
                <div class="lms-accordion__header-left">\r
                  <span class="lms-accordion__num">{{ i + 1 }}</span>\r
                  <span class="lms-accordion__title">{{ module.titre }}</span>\r
                </div>\r
                <div class="lms-accordion__header-right">\r
                  <span class="lms-accordion__count" *ngIf="module.sections?.length">\r
                    {{ module.sections.length }} section(s)\r
                  </span>\r
                  <i class="isax lms-accordion__chevron"\r
                     [class.isax-arrow-up-2]="isModuleOpen(demandeSelectionnee.id, i)"\r
                     [class.isax-arrow-down-2]="!isModuleOpen(demandeSelectionnee.id, i)"></i>\r
                </div>\r
              </button>\r
              <div class="lms-accordion__body" *ngIf="isModuleOpen(demandeSelectionnee.id, i)">\r
                <ul class="lms-sections-list">\r
                  <li class="lms-sections-list__item"\r
                      *ngFor="let section of module.sections; let j = index">\r
                    <div class="lms-sections-list__left">\r
                      <span class="lms-sections-list__index">{{ i + 1 }}.{{ j + 1 }}</span>\r
                      <i class="isax isax-play-circle lms-sections-list__icon"></i>\r
                      <span class="lms-sections-list__title">{{ section.titre }}</span>\r
                    </div>\r
                    <span class="lms-sections-list__duree" *ngIf="section.duree_estimee">\r
                      <i class="isax isax-clock me-1"></i>{{ section.duree_estimee }}\r
                    </span>\r
                  </li>\r
                  <li class="lms-sections-list__empty" *ngIf="!module.sections?.length">\r
                    <i class="isax isax-info-circle me-1"></i>Aucune section\r
                  </li>\r
                </ul>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- SECTION 3 \u2014 \xC9tat de ma demande -->\r
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
        <!-- SECTION 4 \u2014 Motif de refus -->\r
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
        <!-- SECTION 5 \u2014 Validation -->\r
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
        <!-- SECTION 6 \u2014 Formateur -->\r
        <div class="lms-detail-section mb-3"\r
             *ngIf="!loadingFormationDetail && (demandeSelectionnee.formation?.formateur_nom || demandeSelectionnee.formation?.formateur)">\r
          <div class="lms-detail-section__title">\r
            <i class="isax isax-user-octagon me-2"></i>\xC0 propos du formateur\r
          </div>\r
          <div class="lms-formateur-card mt-2">\r
            <img class="lms-formateur-card__avatar"\r
                 [src]="demandeSelectionnee.formation?.formateur?.photo || demandeSelectionnee.formation?.image_couverture || 'assets/img/profiles/avatar-01.jpg'"\r
                 alt="">\r
            <div class="lms-formateur-card__body">\r
              <div class="lms-formateur-card__name">\r
                {{ demandeSelectionnee.formation.formateur_nom ?? demandeSelectionnee.formation.formateur?.nom }}\r
              </div>\r
              <div class="lms-formateur-card__fonction" *ngIf="demandeSelectionnee.formation?.formateur?.fonction">\r
                {{ demandeSelectionnee.formation.formateur.fonction }}\r
              </div>\r
              <div class="lms-formateur-card__email" *ngIf="demandeSelectionnee.formation?.formateur_email">\r
                <i class="isax isax-sms me-1"></i>{{ demandeSelectionnee.formation.formateur_email }}\r
              </div>\r
            </div>\r
          </div>\r
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
<!-- MODAL NOUVELLE DEMANDE \u2014 FORMATION                            -->\r
<!-- ============================================================= -->\r
<div class="modal fade" id="demandeFormationModal" tabindex="-1" aria-hidden="true">\r
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">\r
    <div class="modal-content lms-modal">\r
\r
      <div class="modal-header lms-modal__header">\r
        <div class="d-flex align-items-center gap-3">\r
          <div class="lms-modal__icon"><i class="isax isax-teacher"></i></div>\r
          <div>\r
            <h5 class="modal-title mb-0">Demande de formation</h5>\r
            <small>S\xE9lectionnez une cat\xE9gorie puis une ou plusieurs formations</small>\r
          </div>\r
        </div>\r
        <button type="button" class="btn-close btn-close-white" (click)="closeModal()"></button>\r
      </div>\r
\r
      <div class="modal-body lms-modal__body">\r
\r
        <!-- \xC9TAPE 1 : CAT\xC9GORIE -->\r
        <div class="lms-step mb-4">\r
          <div class="lms-step__header mb-2">\r
            <span class="lms-step__number lms-step__number--orange">1</span>\r
            <p class="lms-step__title">Choisir une cat\xE9gorie <span class="text-danger">*</span></p>\r
          </div>\r
          <select class="form-select lms-input" [(ngModel)]="selectedCategorieId" (change)="onCategorieChange()">\r
            <option value="">-- S\xE9lectionner une cat\xE9gorie --</option>\r
            <option *ngFor="let cat of categories" [value]="cat.id">{{ cat.nom }}</option>\r
          </select>\r
        </div>\r
\r
        <!-- \xC9TAPE 2 : FORMATIONS -->\r
        <ng-container *ngIf="selectedCategorieId">\r
          <div class="lms-step mb-4">\r
            <div class="lms-step__header mb-2">\r
              <span class="lms-step__number lms-step__number--orange">2</span>\r
              <p class="lms-step__title">Choisir une ou plusieurs formations <span class="text-muted small">(optionnel)</span></p>\r
            </div>\r
            <div *ngIf="loadingFormations" class="lms-loading">\r
              <div class="spinner-border text-warning"></div><span>Chargement des formations...</span>\r
            </div>\r
            <div class="row g-2" *ngIf="!loadingFormations">\r
              <div class="col-md-6" *ngFor="let f of formations">\r
                <div class="lms-select-card lms-select-card--orange"\r
                     [class.lms-select-card--active]="isFormationSelected(f.id)"\r
                     (click)="toggleFormation(f.id)">\r
                  <i *ngIf="isFormationSelected(f.id)" class="isax isax-tick-circle lms-select-card__check"></i>\r
                  <div class="lms-select-card__title">{{ f.titre }}</div>\r
                  <div class="lms-select-card__sub">\r
                    <span class="badge bg-secondary me-1">{{ f.niveau }}</span>\r
                    <i class="isax isax-clock me-1"></i>{{ f.duree_totale }}h\r
                  </div>\r
                </div>\r
              </div>\r
              <div *ngIf="formations.length === 0" class="col-12">\r
                <div class="lms-empty-inline">\r
                  <i class="isax isax-teacher"></i><span>Aucune formation dans cette cat\xE9gorie</span>\r
                </div>\r
              </div>\r
            </div>\r
            <div *ngIf="selectedFormationIds.length > 0" class="lms-selection-badge lms-selection-badge--orange mt-3">\r
              <i class="isax isax-tick-circle me-1"></i>{{ selectedFormationIds.length }} formation(s) s\xE9lectionn\xE9e(s)\r
            </div>\r
          </div>\r
        </ng-container>\r
\r
        <hr class="lms-divider">\r
\r
        <!-- \xC9TAPE 3 : INFOS COMPL\xC9MENTAIRES -->\r
        <div class="lms-step__header mb-3">\r
          <span class="lms-step__number lms-step__number--orange">{{ selectedCategorieId ? '3' : '2' }}</span>\r
          <p class="lms-step__title">Informations compl\xE9mentaires</p>\r
        </div>\r
\r
        <form [formGroup]="form">\r
          <div class="row g-3">\r
            <div class="col-12">\r
              <label class="form-label fw-semibold">Motif de la demande <span class="text-danger">*</span></label>\r
              <textarea class="form-control lms-input" formControlName="motif_demande" rows="3"\r
                        placeholder="Pourquoi souhaitez-vous cette formation ?"></textarea>\r
              <div *ngIf="form.get('motif_demande')?.invalid && form.get('motif_demande')?.touched" class="lms-field-error">\r
                <i class="isax isax-info-circle me-1"></i>Le motif est obligatoire.\r
              </div>\r
            </div>\r
            <div class="col-12">\r
              <label class="form-label fw-semibold">Objectifs personnels</label>\r
              <textarea class="form-control lms-input" formControlName="objectifs_personnels" rows="2"\r
                        placeholder="Qu'esp\xE9rez-vous acqu\xE9rir ?"></textarea>\r
            </div>\r
            <div class="col-md-6">\r
              <label class="form-label fw-semibold">Priorit\xE9</label>\r
              <select class="form-select lms-input" formControlName="priorite">\r
                <option value="basse">\u{1F7E2} Basse</option>\r
                <option value="normale">\u{1F7E1} Normale</option>\r
                <option value="haute">\u{1F7E0} Haute</option>\r
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
\r
      </div>\r
\r
      <div class="modal-footer lms-modal__footer">\r
        <button class="btn lms-btn-cancel" (click)="closeModal()">\r
          <i class="isax isax-close-square me-1"></i>Annuler\r
        </button>\r
        <button class="btn lms-btn-submit"\r
                [disabled]="submitting || !canSubmit()"\r
                (click)="submitRequest()">\r
          <span *ngIf="submitting"  class="spinner-border spinner-border-sm me-2"></span>\r
          <i    *ngIf="!submitting" class="isax isax-send-2 me-2"></i>\r
          {{ submitting ? 'Envoi en cours...' : 'Valider la demande' }}\r
        </button>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>`, styles: ['/* src/app/features/student/student-demande/student-demande.component.scss */\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes toast-progress {\n  from {\n    width: 100%;\n  }\n  to {\n    width: 0%;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.pq-kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 12px;\n}\n@media (max-width: 1200px) {\n  .pq-kpi-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .pq-kpi-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .pq-kpi-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.pq-kpi-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border-top: 3px solid transparent;\n}\n.pq-kpi-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.pq-kpi-card--active {\n  border-color: currentColor;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.pq-kpi-card__icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.pq-kpi-card__body {\n  min-width: 0;\n}\n.pq-kpi-card__value {\n  font-size: 22px;\n  font-weight: 800;\n  color: #111827;\n  line-height: 1;\n}\n.pq-kpi-card__label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  margin-top: 2px;\n  white-space: nowrap;\n}\n.pq-kpi-card--teal {\n  border-top-color: #069b8f;\n}\n.pq-kpi-card--teal .pq-kpi-card__icon {\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.pq-kpi-card--teal.pq-kpi-card--active {\n  border-color: #069b8f;\n}\n.pq-kpi-card--green {\n  border-top-color: #16a34a;\n}\n.pq-kpi-card--green .pq-kpi-card__icon {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.pq-kpi-card--green.pq-kpi-card--active {\n  border-color: #16a34a;\n}\n.pq-kpi-card--orange {\n  border-top-color: #d97706;\n}\n.pq-kpi-card--orange .pq-kpi-card__icon {\n  background: #fffbeb;\n  color: #d97706;\n}\n.pq-kpi-card--orange.pq-kpi-card--active {\n  border-color: #d97706;\n}\n.pq-kpi-card--red {\n  border-top-color: #dc2626;\n}\n.pq-kpi-card--red .pq-kpi-card__icon {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.pq-kpi-card--red.pq-kpi-card--active {\n  border-color: #dc2626;\n}\n.pq-kpi-card--gray {\n  border-top-color: #9ca3af;\n}\n.pq-kpi-card--gray .pq-kpi-card__icon {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.pq-kpi-card--gray.pq-kpi-card--active {\n  border-color: #9ca3af;\n}\n.sc-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.sc-header__title {\n  font-size: 20px;\n  font-weight: 800;\n  color: #111827;\n  margin-bottom: 4px;\n  letter-spacing: -0.3px;\n}\n.sc-header__subtitle {\n  font-size: 13px;\n  color: #9ca3af;\n  margin: 0;\n}\n.sc-header__actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.sc-header__toggle-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid #e5e7eb;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sc-header__toggle-btn i {\n  font-size: 14px;\n}\n.sc-header__toggle-btn:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f5;\n}\n.sc-header__toggle-btn--active {\n  background: #069b8f;\n  border-color: #069b8f;\n  color: #fff;\n}\n.sc-header__new-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 20px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.4795031056, 115.7204968944, 106.7614906832) 100%);\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(6, 155, 143, 0.3);\n  transition: all 0.2s ease;\n}\n.sc-header__new-btn i {\n  font-size: 16px;\n}\n.sc-header__new-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(6, 155, 143, 0.4);\n}\n.sc-filters {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px 18px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.sc-filters__search {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.sc-filters__search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  font-size: 15px;\n  pointer-events: none;\n}\n.sc-filters__search-input {\n  width: 100%;\n  padding: 9px 14px 9px 36px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 50px;\n  font-size: 13px;\n  outline: none;\n  transition: all 0.2s ease;\n  background: #f9fafb;\n}\n.sc-filters__search-input::placeholder {\n  color: #9ca3af;\n}\n.sc-filters__search-input:focus {\n  border-color: #069b8f;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.1);\n}\n.sc-filters__pills {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.sc-filters__pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid #e5e7eb;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-filters__pill:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f5;\n}\n.sc-filters__pill--active {\n  background: #069b8f !important;\n  border-color: #069b8f !important;\n  color: #fff !important;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.25);\n}\n.sc-filters__pill--attente:hover {\n  border-color: #d97706;\n  color: #d97706;\n  background: #fffbeb;\n}\n.sc-filters__pill--validee:hover {\n  border-color: #16a34a;\n  color: #16a34a;\n  background: #f0fdf4;\n}\n.sc-filters__pill--refusee:hover {\n  border-color: #dc2626;\n  color: #dc2626;\n  background: #fef2f2;\n}\n.sc-filters__pill--annulee:hover {\n  border-color: #9ca3af;\n  color: #4b5563;\n  background: #f3f4f6;\n}\n.sc-filters__pill-count {\n  font-size: 11px;\n  font-weight: 600;\n  opacity: 0.8;\n}\n.sc-filters__reset {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #dc2626;\n  background: rgba(220, 38, 38, 0.06);\n  border: 1.5px solid rgba(220, 38, 38, 0.2);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-filters__reset:hover {\n  background: rgba(220, 38, 38, 0.12);\n  border-color: #dc2626;\n}\n.sc-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px 0;\n  color: #9ca3af;\n}\n.sc-loading__spinner {\n  width: 44px;\n  height: 44px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n.sc-loading p {\n  margin-top: 16px;\n  font-size: 13px;\n}\n.sc-table-card {\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n  overflow: visible;\n}\n.sc-table-card__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  background: #fff;\n  border-bottom: 1px solid #f3f4f6;\n  border-radius: 12px 12px 0 0;\n}\n.sc-table-card__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  display: flex;\n  align-items: center;\n}\n.sc-table-card__count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 24px;\n  height: 24px;\n  padding: 0 8px;\n  background: #069b8f;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 700;\n  margin-left: 8px;\n}\n.sc-table thead th {\n  font-size: 12px;\n  font-weight: 700;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n  padding: 12px 16px;\n  white-space: nowrap;\n}\n.sc-table tbody td {\n  padding: 14px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  vertical-align: middle;\n}\n.sc-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.sc-row--refusee {\n  background: rgba(220, 38, 38, 0.025) !important;\n}\n.sc-row--validee {\n  background: rgba(22, 163, 74, 0.025) !important;\n}\n.sc-table-row {\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sc-table-row td:first-child {\n  border-left: 3px solid transparent;\n  transition: border-color 0.2s;\n}\n.sc-table-row:hover td {\n  background: #e6f7f5 !important;\n}\n.sc-table-row:hover td:first-child {\n  border-left-color: #069b8f;\n}\n.sc-formation {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.sc-formation__thumb {\n  width: 56px;\n  height: 56px;\n  border-radius: 8px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid #e5e7eb;\n}\n.sc-formation__info {\n  flex: 1;\n}\n.sc-formation__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1.3;\n  margin-bottom: 3px;\n}\n.sc-formation__sub {\n  font-size: 12px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.sc-formation__details {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.sc-detail-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 9px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n}\n.sc-detail-chip i {\n  font-size: 11px;\n}\n.sc-detail-chip--award {\n  background: #fffbeb;\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.25);\n}\n.sc-date {\n  font-size: 13px;\n  color: #4b5563;\n  font-weight: 500;\n}\n.sc-date--time {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 400;\n  margin-top: 1px;\n}\n.sc-priorite {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.sc-priorite.priorite-urgente {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n}\n.sc-priorite.priorite-haute {\n  background: rgba(217, 119, 6, 0.1);\n  color: #d97706;\n}\n.sc-priorite.priorite-normale {\n  background: rgba(6, 155, 143, 0.1);\n  color: #069b8f;\n}\n.sc-priorite.priorite-basse {\n  background: #f3f4f6;\n  color: #4b5563;\n}\n.sc-statut-cell {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  position: relative;\n}\n.sc-statut {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.sc-statut.statut-attente {\n  background: #fffbeb;\n  color: #d97706;\n}\n.sc-statut.statut-validee {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.sc-statut.statut-refusee {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.sc-statut.statut-annulee {\n  background: #f3f4f6;\n  color: #9ca3af;\n}\n.sc-motif-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.sc-motif-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #fef2f2;\n  color: #dc2626;\n  border: 1px solid rgba(220, 38, 38, 0.2);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sc-motif-btn i {\n  font-size: 13px;\n}\n.sc-motif-btn:hover {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.sc-motif-tooltip {\n  position: absolute;\n  bottom: calc(100% + 10px);\n  left: 50%;\n  transform: translateX(-50%);\n  width: 260px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.06);\n  z-index: 200;\n  overflow: hidden;\n  animation: fadeIn 0.15s ease;\n}\n.sc-motif-tooltip::after {\n  content: "";\n  position: absolute;\n  bottom: -6px;\n  left: 50%;\n  width: 12px;\n  height: 12px;\n  background: #fff;\n  border-right: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  transform: translateX(-50%) rotate(45deg);\n}\n.sc-motif-tooltip__header {\n  display: flex;\n  align-items: center;\n  padding: 10px 14px;\n  background: #fef2f2;\n  color: #dc2626;\n  font-size: 12px;\n  font-weight: 700;\n}\n.sc-motif-tooltip__header i {\n  font-size: 14px;\n}\n.sc-motif-tooltip__body {\n  padding: 12px 14px;\n  font-size: 13px;\n  color: #4b5563;\n  line-height: 1.5;\n  margin: 0;\n}\n.sc-motif-tooltip__responsable {\n  padding: 8px 14px;\n  background: rgba(217, 119, 6, 0.07);\n  border-top: 1px solid rgba(217, 119, 6, 0.15);\n  font-size: 12px;\n  color: #d97706;\n  display: flex;\n  align-items: center;\n}\n.sc-motif-tooltip__responsable strong {\n  font-weight: 700;\n  margin-left: 4px;\n}\n.sc-motif-tooltip__footer {\n  padding: 8px 14px;\n  background: #f9fafb;\n  border-top: 1px solid #f3f4f6;\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: flex-start;\n  gap: 4px;\n}\n.sc-motif-tooltip__footer em {\n  font-style: italic;\n  line-height: 1.4;\n}\n.sc-statut-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.sc-statut-icon i {\n  font-size: 22px;\n}\n.sc-statut-icon--validee {\n  color: #16a34a;\n}\n.sc-statut-icon--refusee {\n  color: #dc2626;\n}\n.sc-statut-icon--annulee {\n  color: #9ca3af;\n}\n.sc-grid-motif-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  border: 1.5px solid rgba(220, 38, 38, 0.3);\n  background: #fef2f2;\n  color: #dc2626;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-grid-motif-btn i {\n  font-size: 12px;\n}\n.sc-grid-motif-btn:hover {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.sc-grid-commencer-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  border: 1.5px solid rgba(22, 163, 74, 0.3);\n  background: #f0fdf4;\n  color: #16a34a;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-grid-commencer-btn i {\n  font-size: 12px;\n}\n.sc-grid-commencer-btn:hover {\n  background: #16a34a;\n  color: #fff;\n  border-color: #16a34a;\n}\n.lms-formateur-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 12px;\n  background: #f9fafb;\n  border: 1px solid #f3f4f6;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.lms-formateur-card:hover {\n  border-color: rgba(6, 155, 143, 0.2);\n  background: #e6f7f5;\n}\n.lms-formateur-card__avatar {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 2px solid rgba(6, 155, 143, 0.2);\n}\n.lms-formateur-card__body {\n  flex: 1;\n  min-width: 0;\n}\n.lms-formateur-card__name {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 2px;\n}\n.lms-formateur-card__fonction {\n  font-size: 12px;\n  color: #6b7280;\n  margin-bottom: 3px;\n}\n.lms-formateur-card__email {\n  font-size: 11px;\n  color: #069b8f;\n  display: flex;\n  align-items: center;\n}\n.lms-formateur-card__email i {\n  font-size: 12px;\n}\n.sc-action-btn {\n  position: relative;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.sc-action-btn i {\n  font-size: 17px;\n  transition: all 0.2s ease;\n}\n.sc-action-btn__tooltip {\n  position: absolute;\n  bottom: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%) translateY(4px);\n  background: #111827;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n  padding: 5px 10px;\n  border-radius: 6px;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.15s ease, transform 0.15s ease;\n  z-index: 100;\n}\n.sc-action-btn__tooltip::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 5px solid transparent;\n  border-top-color: #111827;\n}\n.sc-action-btn:hover .sc-action-btn__tooltip {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0);\n}\n.sc-action-btn--danger {\n  background: #fef2f2;\n  border-color: rgba(220, 38, 38, 0.25);\n}\n.sc-action-btn--danger i {\n  color: #dc2626;\n}\n.sc-action-btn--danger:hover {\n  background: #dc2626;\n  border-color: #dc2626;\n  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.35);\n}\n.sc-action-btn--danger:hover i {\n  color: #fff;\n}\n.sc-action-btn--teal {\n  background: #e6f7f5;\n  border-color: rgba(6, 155, 143, 0.25);\n}\n.sc-action-btn--teal i {\n  color: #069b8f;\n}\n.sc-action-btn--teal:hover {\n  background: #069b8f;\n  border-color: #069b8f;\n  box-shadow: 0 4px 12px rgba(6, 155, 143, 0.35);\n}\n.sc-action-btn--teal:hover i {\n  color: #fff;\n}\n.sc-btn-annuler {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid rgba(220, 38, 38, 0.3);\n  background: #fef2f2;\n  color: #dc2626;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-btn-annuler i {\n  font-size: 13px;\n}\n.sc-btn-annuler:hover:not(:disabled) {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.sc-btn-annuler:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sc-btn-relancer {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid rgba(6, 155, 143, 0.3);\n  background: #e6f7f5;\n  color: #069b8f;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-btn-relancer i {\n  font-size: 13px;\n}\n.sc-btn-relancer:hover:not(:disabled) {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n}\n.sc-btn-relancer:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sc-btn--xs {\n  width: 30px;\n  height: 30px;\n  padding: 0 !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50% !important;\n}\n.sc-btn--xs i {\n  font-size: 14px;\n  margin: 0 !important;\n}\n.sc-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 72px 20px;\n  text-align: center;\n}\n.sc-empty__icon {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: #e6f7f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.sc-empty__icon i {\n  font-size: 2rem;\n  color: #069b8f;\n}\n.sc-empty__title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #4b5563;\n  margin-bottom: 8px;\n}\n.sc-empty p {\n  font-size: 13px;\n  color: #9ca3af;\n  margin-bottom: 20px;\n}\n.sc-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\n  gap: 20px;\n  animation: fadeIn 0.2s ease;\n}\n.sc-grid-card {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n  cursor: pointer;\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.2s ease;\n  display: flex;\n  flex-direction: column;\n}\n.sc-grid-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.13), 0 4px 12px rgba(0, 0, 0, 0.07);\n  border-color: #069b8f;\n}\n.sc-grid-card--validee {\n  border-top: 3px solid #16a34a;\n}\n.sc-grid-card--refusee {\n  border-top: 3px solid #dc2626;\n}\n.sc-grid-card--attente {\n  border-top: 3px solid #d97706;\n}\n.sc-grid-card__cover {\n  position: relative;\n  height: 155px;\n  overflow: hidden;\n  background: #f3f4f6;\n}\n.sc-grid-card__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.4s ease;\n}\n.sc-grid-card:hover .sc-grid-card__img {\n  transform: scale(1.05);\n}\n.sc-grid-card__cover-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.6) 0%,\n      rgba(0, 0, 0, 0.1) 55%,\n      transparent 100%);\n  display: flex;\n  align-items: flex-end;\n  padding: 12px 14px;\n}\n.sc-grid-card__priorite {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 10px !important;\n  padding: 3px 9px !important;\n}\n.sc-grid-card__body {\n  padding: 14px 16px 12px;\n  flex: 1;\n}\n.sc-grid-card__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 4px;\n  line-height: 1.35;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.sc-grid-card__sub {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.sc-grid-card__sub i {\n  font-size: 12px;\n}\n.sc-grid-card__chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-top: 8px;\n}\n.sc-grid-card__footer {\n  padding: 10px 16px;\n  border-top: 1px solid #f3f4f6;\n  background: #f9fafb;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.sc-grid-card__actions {\n  display: flex;\n  gap: 6px;\n}\n.sc-grid-card__date {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.sc-grid-card__date i {\n  font-size: 12px;\n}\n.lms-modal {\n  border-radius: 16px;\n  overflow: hidden;\n  border: none;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.lms-modal__header {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.099378882, 105.900621118, 97.701863354) 100%);\n  padding: 18px 24px;\n  border: none;\n}\n.lms-modal__header small {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 12px;\n}\n.lms-modal__icon {\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.lms-modal .modal-title {\n  color: #fff;\n  font-weight: 700;\n  font-size: 16px;\n}\n.lms-modal__body {\n  padding: 28px 24px;\n  background: #f9fafb;\n  max-height: 72vh;\n  overflow-y: auto;\n}\n.lms-modal__body::-webkit-scrollbar {\n  width: 5px;\n}\n.lms-modal__body::-webkit-scrollbar-track {\n  background: #f3f4f6;\n}\n.lms-modal__body::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.lms-modal__footer {\n  background: #fff;\n  border-top: 1px solid #e5e7eb;\n  padding: 16px 24px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.lms-detail-chips {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.lms-detail-chips__left {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.lms-btn-commencer {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 16px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      rgb(4.4795031056, 115.7204968944, 106.7614906832));\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  white-space: nowrap;\n  box-shadow: 0 4px 12px rgba(6, 155, 143, 0.35);\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.lms-btn-commencer i {\n  font-size: 15px;\n}\n.lms-btn-commencer:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(6, 155, 143, 0.45);\n}\n.lms-btn-commencer:active {\n  transform: translateY(0);\n}\n.lms-detail-section {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 16px 18px;\n}\n.lms-detail-section__title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #374151;\n  display: flex;\n  align-items: center;\n  margin-bottom: 2px;\n}\n.lms-detail-section__title i {\n  font-size: 15px;\n  color: #069b8f;\n}\n.lms-detail-section__body {\n  font-size: 13px;\n  color: #4b5563;\n  line-height: 1.6;\n  margin: 8px 0 0 0;\n}\n.lms-detail-section--danger {\n  border-color: rgba(220, 38, 38, 0.3);\n  background: #fef2f2;\n}\n.lms-detail-section--danger .lms-detail-section__title {\n  color: #dc2626;\n}\n.lms-detail-section--danger .lms-detail-section__title i {\n  color: #dc2626;\n}\n.lms-detail-section--success {\n  border-color: rgba(22, 163, 74, 0.3);\n  background: #f0fdf4;\n}\n.lms-detail-section--success .lms-detail-section__title {\n  color: #16a34a;\n}\n.lms-detail-section--success .lms-detail-section__title i {\n  color: #16a34a;\n}\n.lms-formation-banner {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 14px;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n}\n.lms-formation-banner__img {\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.lms-formation-banner__body {\n  flex: 1;\n  min-width: 0;\n}\n.lms-formation-banner__title {\n  font-weight: 800;\n  font-size: 15px;\n  color: #111827;\n  line-height: 1.35;\n  margin-bottom: 4px;\n}\n.lms-formation-banner__sub {\n  font-size: 12px;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 10px;\n}\n.lms-formation-banner__sub i {\n  font-size: 13px;\n  color: #069b8f;\n}\n.lms-formation-banner__tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.lms-info-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #f3f4f6;\n  height: 100%;\n  transition: all 0.2s ease;\n}\n.lms-info-item:hover {\n  border-color: rgba(6, 155, 143, 0.25);\n  background: #e6f7f5;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.lms-info-item i {\n  font-size: 20px;\n  flex-shrink: 0;\n  margin-top: 1px;\n  color: #069b8f;\n}\n.lms-info-item small {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  letter-spacing: 0.2px;\n  display: block;\n  margin-bottom: 2px;\n}\n.lms-info-item strong {\n  font-size: 13px;\n  font-weight: 700;\n  color: #111827;\n  display: block;\n}\n.lms-formation-desc {\n  padding: 12px 14px;\n  background: #f9fafb;\n  border-radius: 8px;\n  border-left: 3px solid #069b8f;\n}\n.lms-formation-desc__label {\n  font-size: 11px;\n  font-weight: 700;\n  color: #069b8f;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-bottom: 6px;\n}\n.lms-formation-desc__label i {\n  font-size: 13px;\n}\n.lms-formation-desc__text {\n  font-size: 13px;\n  color: #4b5563;\n  line-height: 1.65;\n  margin: 0;\n  white-space: pre-line;\n}\n.lms-formation-desc--contenu {\n  border-left-color: #4f46e5;\n  background: #eef2ff;\n}\n.lms-formation-desc--contenu .lms-formation-desc__label {\n  color: #4f46e5;\n}\n.lms-formation-desc--prerequis {\n  border-left-color: #D4AF37;\n  background: #fdf8e7;\n}\n.lms-formation-desc--prerequis .lms-formation-desc__label {\n  color: #D4AF37;\n}\n.lms-formation-desc--public {\n  border-left-color: #7c3aed;\n  background: #f5f3ff;\n}\n.lms-formation-desc--public .lms-formation-desc__label {\n  color: #7c3aed;\n}\n.lms-formation-desc--competences {\n  border-left-color: #16a34a;\n  background: #f0fdf4;\n}\n.lms-formation-desc--competences .lms-formation-desc__label {\n  color: #16a34a;\n}\n.lms-formation-desc--objectifs {\n  border-left-color: #d97706;\n  background: #fffbeb;\n}\n.lms-formation-desc--objectifs .lms-formation-desc__label {\n  color: #d97706;\n}\n.lms-meta-chip--orange {\n  background: #fdf8e7;\n  color: #D4AF37;\n  border-color: rgba(212, 175, 55, 0.2);\n}\n.lms-modules-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.lms-modules-breadcrumb {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 4px;\n}\n.lms-modules-breadcrumb__item {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6b7280;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  border-radius: 50px;\n  padding: 3px 10px;\n}\n.lms-modules-breadcrumb__item i {\n  font-size: 11px;\n  color: #069b8f;\n}\n.lms-modules-breadcrumb__sep {\n  font-size: 12px;\n  color: #d1d5db;\n  font-weight: 400;\n}\n.lms-accordion {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.lms-accordion__item {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #fff;\n  transition: box-shadow 0.2s ease;\n}\n.lms-accordion__item:hover {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.lms-accordion__header {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  background: #f9fafb;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s ease;\n  gap: 12px;\n}\n.lms-accordion__header:hover {\n  background: #e6f7f5;\n}\n.lms-accordion__header--open {\n  background: #e6f7f5;\n  border-bottom: 1px solid rgba(6, 155, 143, 0.15);\n}\n.lms-accordion__header-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n}\n.lms-accordion__header-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.lms-accordion__num {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #069b8f;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.lms-accordion__title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.lms-accordion__count {\n  font-size: 11px;\n  font-weight: 600;\n  color: #069b8f;\n  background: rgba(6, 155, 143, 0.1);\n  border-radius: 50px;\n  padding: 2px 8px;\n  white-space: nowrap;\n}\n.lms-accordion__chevron {\n  font-size: 16px;\n  color: #069b8f;\n  transition: transform 0.2s ease;\n}\n.lms-accordion__body {\n  animation: fadeIn 0.15s ease;\n}\n.lms-sections-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.lms-sections-list__item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  border-bottom: 1px solid #f3f4f6;\n  gap: 12px;\n  transition: background 0.15s ease;\n}\n.lms-sections-list__item:last-child {\n  border-bottom: none;\n}\n.lms-sections-list__item:hover {\n  background: #f9fafb;\n}\n.lms-sections-list__left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  min-width: 0;\n}\n.lms-sections-list__index {\n  font-size: 11px;\n  font-weight: 700;\n  color: #9ca3af;\n  min-width: 28px;\n  flex-shrink: 0;\n}\n.lms-sections-list__icon {\n  font-size: 15px;\n  color: #069b8f;\n  flex-shrink: 0;\n}\n.lms-sections-list__title {\n  font-size: 13px;\n  color: #374151;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.lms-sections-list__duree {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.lms-sections-list__duree i {\n  font-size: 11px;\n}\n.lms-sections-list__empty {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  font-size: 12px;\n  color: #9ca3af;\n  font-style: italic;\n}\n.lms-sections-list__empty i {\n  font-size: 14px;\n}\n.lms-competences-list {\n  list-style: none;\n  margin: 4px 0 0 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.lms-competences-list li {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  line-height: 1.5;\n}\n.lms-competences-list li i {\n  font-size: 15px;\n  color: #16a34a;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.cd-demande-detail {\n  display: flex;\n  flex-direction: column;\n}\n.cd-demande-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 13px;\n}\n.cd-demande-row:last-child {\n  border-bottom: none;\n}\n.cd-demande-label {\n  font-weight: 600;\n  color: #9ca3af;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.lms-meta-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 9px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.lms-meta-chip i {\n  font-size: 11px;\n}\n.lms-meta-chip--teal {\n  background: #e6f7f5;\n  color: #069b8f;\n  border-color: rgba(6, 155, 143, 0.2);\n}\n.lms-meta-chip--warning {\n  background: #fffbeb;\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.lms-meta-chip--success {\n  background: #f0fdf4;\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.lms-meta-chip--purple {\n  background: #f5f3ff;\n  color: #7c3aed;\n  border-color: rgba(124, 58, 237, 0.2);\n}\n.lms-step__header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.lms-step__number {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #4b5563;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.lms-step__number--blue {\n  background: #069b8f;\n}\n.lms-step__number--green {\n  background: #16a34a;\n}\n.lms-step__number--purple {\n  background: #7c3aed;\n}\n.lms-step__number--orange {\n  background: #D4AF37;\n}\n.lms-step__title {\n  font-weight: 700;\n  font-size: 14px;\n  color: #111827;\n  margin: 0;\n}\n.lms-select-card {\n  background: #fff;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px;\n  cursor: pointer;\n  position: relative;\n  height: 100%;\n  transition: all 0.2s ease;\n}\n.lms-select-card__check {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 20px;\n}\n.lms-select-card__title {\n  font-weight: 600;\n  font-size: 13px;\n  color: #111827;\n  margin-bottom: 4px;\n  padding-right: 24px;\n}\n.lms-select-card__sub {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.lms-select-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.lms-select-card--orange:hover {\n  border-color: #D4AF37;\n  background: #fdf8e7;\n}\n.lms-select-card--orange.lms-select-card--active {\n  border-color: #D4AF37 !important;\n  background: #D4AF37 !important;\n}\n.lms-select-card--orange.lms-select-card--active .lms-select-card__title,\n.lms-select-card--orange.lms-select-card--active .lms-select-card__sub,\n.lms-select-card--orange.lms-select-card--active .lms-select-card__check {\n  color: #fff !important;\n}\n.lms-selection-badge {\n  padding: 8px 14px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.lms-selection-badge--orange {\n  background: #fdf8e7;\n  color: #D4AF37;\n}\n.lms-selection-badge--teal {\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.lms-selection-badge--purple {\n  background: #f5f3ff;\n  color: #7c3aed;\n}\n.lms-input {\n  border-radius: 8px;\n  border: 1.5px solid #e5e7eb;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.lms-input:focus {\n  border-color: #069b8f;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.12);\n}\n.lms-field-error {\n  color: #dc2626;\n  font-size: 12px;\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.lms-divider {\n  border: none;\n  border-top: 2px dashed #e5e7eb;\n  margin: 24px 0;\n}\n.lms-empty-inline {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 24px;\n  border: 2px dashed #e5e7eb;\n  border-radius: 12px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.lms-empty-inline i {\n  font-size: 20px;\n  opacity: 0.5;\n}\n.lms-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 32px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.lms-btn-cancel {\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 50px;\n  padding: 10px 22px;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.lms-btn-cancel:hover {\n  background: #e5e7eb;\n  color: #111827;\n}\n.lms-btn-submit {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.4795031056, 115.7204968944, 106.7614906832) 100%);\n  color: #fff;\n  border: none;\n  border-radius: 50px;\n  padding: 10px 28px;\n  font-weight: 700;\n  font-size: 14px;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.4);\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.lms-btn-submit:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(6, 155, 143, 0.5);\n  color: #fff;\n}\n.lms-btn-submit:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.lms-toast-container {\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 9999;\n  pointer-events: none;\n  opacity: 0;\n  transform: translateX(20px);\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n.lms-toast-container.visible {\n  opacity: 1;\n  transform: translateX(0);\n  pointer-events: all;\n}\n.lms-toast {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  min-width: 320px;\n  max-width: 420px;\n  padding: 16px 18px;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.06);\n  position: relative;\n  overflow: hidden;\n  background: #fff;\n}\n.lms-toast__icon {\n  font-size: 22px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.lms-toast__body {\n  flex: 1;\n}\n.lms-toast__label {\n  display: block;\n  font-weight: 700;\n  font-size: 13px;\n  letter-spacing: 0.3px;\n  margin-bottom: 2px;\n}\n.lms-toast__message {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.5;\n  opacity: 0.85;\n}\n.lms-toast__close {\n  background: none;\n  border: none;\n  padding: 2px;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 1;\n  opacity: 0.6;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n  color: #4b5563;\n}\n.lms-toast__close:hover {\n  opacity: 1;\n}\n.lms-toast__progress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 3px;\n  width: 100%;\n  animation: toast-progress 4s linear forwards;\n  border-radius: 0 0 12px 12px;\n}\n.lms-toast--success {\n  border-left: 4px solid #16a34a;\n}\n.lms-toast--success .lms-toast__icon,\n.lms-toast--success .lms-toast__label {\n  color: #16a34a;\n}\n.lms-toast--success .lms-toast__progress {\n  background: #16a34a;\n}\n.lms-toast--error {\n  border-left: 4px solid #dc2626;\n}\n.lms-toast--error .lms-toast__icon,\n.lms-toast--error .lms-toast__label {\n  color: #dc2626;\n}\n.lms-toast--error .lms-toast__progress {\n  background: #dc2626;\n}\n.lms-toast--warning {\n  border-left: 4px solid #d97706;\n}\n.lms-toast--warning .lms-toast__icon,\n.lms-toast--warning .lms-toast__label {\n  color: #d97706;\n}\n.lms-toast--warning .lms-toast__progress {\n  background: #d97706;\n}\n@media (max-width: 991px) {\n  .sc-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 767px) {\n  .sc-header {\n    flex-direction: column;\n  }\n  .sc-filters {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .sc-grid {\n    grid-template-columns: 1fr;\n  }\n  .sc-motif-tooltip {\n    left: auto;\n    right: 0;\n    transform: none;\n  }\n  .sc-motif-tooltip::after {\n    left: auto;\n    right: 20px;\n    transform: rotate(45deg);\n  }\n  .lms-toast-container {\n    top: auto;\n    bottom: 20px;\n    right: 16px;\n    left: 16px;\n  }\n  .lms-toast {\n    min-width: unset;\n    width: 100%;\n  }\n  .lms-modal__body {\n    max-height: 65vh;\n  }\n  .pq-kpi-card {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=student-demande.component.css.map */\n'] }]
  }], () => [{ type: DemandeFormationService }, { type: FormationsService }, { type: FormBuilder }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentDemandeComponent, { className: "StudentDemandeComponent", filePath: "app/features/student/student-demande/student-demande.component.ts", lineNumber: 24 });
})();
export {
  StudentDemandeComponent
};
//# sourceMappingURL=chunk-LWNL6Q23.js.map
