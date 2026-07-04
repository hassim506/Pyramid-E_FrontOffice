import {
  DemandeFormationService
} from "./chunk-DOEWAYTW.js";
import {
  CustomPaginationComponent
} from "./chunk-QBIBOWET.js";
import "./chunk-M25A5D3F.js";
import {
  FormationService
} from "./chunk-MHGWTEI2.js";
import "./chunk-GD4TWLVQ.js";
import {
  environment
} from "./chunk-K7E3GT3E.js";
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

// src/app/features/student/students-session/students-session.component.ts
function StudentsSessionsComponent_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 63);
  }
}
function StudentsSessionsComponent_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 64);
  }
}
function StudentsSessionsComponent_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 65);
  }
}
function StudentsSessionsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67);
    \u0275\u0275listener("click", function StudentsSessionsComponent_div_28_Template_div_click_1_listener() {
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
    \u0275\u0275listener("click", function StudentsSessionsComponent_div_28_Template_div_click_9_listener() {
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
    \u0275\u0275listener("click", function StudentsSessionsComponent_div_28_Template_div_click_17_listener() {
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
    \u0275\u0275listener("click", function StudentsSessionsComponent_div_28_Template_div_click_25_listener() {
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
    \u0275\u0275listener("click", function StudentsSessionsComponent_div_28_Template_div_click_33_listener() {
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
function StudentsSessionsComponent_span_38_Template(rf, ctx) {
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
function StudentsSessionsComponent_span_41_Template(rf, ctx) {
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
function StudentsSessionsComponent_span_44_Template(rf, ctx) {
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
function StudentsSessionsComponent_span_47_Template(rf, ctx) {
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
function StudentsSessionsComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82);
    \u0275\u0275element(2, "div")(3, "div")(4, "div")(5, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Chargement de vos demandes de sessions...");
    \u0275\u0275elementEnd()();
  }
}
function StudentsSessionsComponent_ng_container_52_div_1_tr_25_small_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 115);
    \u0275\u0275element(1, "i", 116);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", demande_r4.sous_titre_affiche, " ");
  }
}
function StudentsSessionsComponent_ng_container_52_div_1_tr_25_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 117);
    \u0275\u0275element(1, "i", 116);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", demande_r4.session_formation.type_display, " ");
  }
}
function StudentsSessionsComponent_ng_container_52_div_1_tr_25_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 117);
    \u0275\u0275element(1, "i", 118);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", demande_r4.session_formation.lieu, " ");
  }
}
function StudentsSessionsComponent_ng_container_52_div_1_tr_25_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 117);
    \u0275\u0275element(1, "i", 119);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", demande_r4.places_restantes, "/", demande_r4.session_formation.capacite_max, " places ");
  }
}
function StudentsSessionsComponent_ng_container_52_div_1_tr_25_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 120);
    \u0275\u0275element(1, "i", 121);
    \u0275\u0275text(2, "Certifiante ");
    \u0275\u0275elementEnd();
  }
}
function StudentsSessionsComponent_ng_container_52_div_1_tr_25_div_27_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 132);
    \u0275\u0275element(1, "i", 133);
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
function StudentsSessionsComponent_ng_container_52_div_1_tr_25_div_27_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275element(1, "i", 135);
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
function StudentsSessionsComponent_ng_container_52_div_1_tr_25_div_27_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126)(1, "div", 127);
    \u0275\u0275element(2, "i", 128);
    \u0275\u0275text(3, "Motif de refus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 129);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, StudentsSessionsComponent_ng_container_52_div_1_tr_25_div_27_div_4_div_6_Template, 5, 1, "div", 130)(7, StudentsSessionsComponent_ng_container_52_div_1_tr_25_div_27_div_4_div_7_Template, 4, 1, "div", 131);
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
function StudentsSessionsComponent_ng_container_52_div_1_tr_25_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275listener("mouseenter", function StudentsSessionsComponent_ng_container_52_div_1_tr_25_div_27_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r5);
      const demande_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showMotif(demande_r4.id));
    })("mouseleave", function StudentsSessionsComponent_ng_container_52_div_1_tr_25_div_27_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.hideMotif());
    })("click", function StudentsSessionsComponent_ng_container_52_div_1_tr_25_div_27_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "button", 123);
    \u0275\u0275element(2, "i", 124);
    \u0275\u0275text(3, " Motif");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, StudentsSessionsComponent_ng_container_52_div_1_tr_25_div_27_div_4_Template, 8, 3, "div", 125);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isMotifVisible(demande_r4.id));
  }
}
function StudentsSessionsComponent_ng_container_52_div_1_tr_25_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 136);
    \u0275\u0275listener("click", function StudentsSessionsComponent_ng_container_52_div_1_tr_25_ng_container_30_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const demande_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.annulerDemande(demande_r4.id, $event));
    });
    \u0275\u0275element(2, "i", 77);
    \u0275\u0275elementStart(3, "span", 137);
    \u0275\u0275text(4, "Annuler la demande");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 138);
    \u0275\u0275listener("click", function StudentsSessionsComponent_ng_container_52_div_1_tr_25_ng_container_30_Template_div_click_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const demande_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.relancerDemande(demande_r4.id, $event));
    });
    \u0275\u0275element(6, "i", 36);
    \u0275\u0275elementStart(7, "span", 137);
    \u0275\u0275text(8, "Relancer la demande");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function StudentsSessionsComponent_ng_container_52_div_1_tr_25_span_31_i_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 143);
  }
}
function StudentsSessionsComponent_ng_container_52_div_1_tr_25_span_31_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 144);
  }
}
function StudentsSessionsComponent_ng_container_52_div_1_tr_25_span_31_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 145);
  }
}
function StudentsSessionsComponent_ng_container_52_div_1_tr_25_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 139);
    \u0275\u0275template(1, StudentsSessionsComponent_ng_container_52_div_1_tr_25_span_31_i_1_Template, 1, 0, "i", 140)(2, StudentsSessionsComponent_ng_container_52_div_1_tr_25_span_31_i_2_Template, 1, 0, "i", 141)(3, StudentsSessionsComponent_ng_container_52_div_1_tr_25_span_31_i_3_Template, 1, 0, "i", 142);
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
function StudentsSessionsComponent_ng_container_52_div_1_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 97);
    \u0275\u0275listener("click", function StudentsSessionsComponent_ng_container_52_div_1_tr_25_Template_tr_click_0_listener($event) {
      const demande_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.ouvrirDetail(demande_r4, $event));
    });
    \u0275\u0275elementStart(1, "td")(2, "div", 98);
    \u0275\u0275element(3, "img", 99);
    \u0275\u0275elementStart(4, "div", 100)(5, "div", 101);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, StudentsSessionsComponent_ng_container_52_div_1_tr_25_small_7_Template, 3, 1, "small", 102);
    \u0275\u0275elementStart(8, "div", 103);
    \u0275\u0275template(9, StudentsSessionsComponent_ng_container_52_div_1_tr_25_span_9_Template, 3, 1, "span", 104)(10, StudentsSessionsComponent_ng_container_52_div_1_tr_25_span_10_Template, 3, 1, "span", 104)(11, StudentsSessionsComponent_ng_container_52_div_1_tr_25_span_11_Template, 3, 2, "span", 104)(12, StudentsSessionsComponent_ng_container_52_div_1_tr_25_span_12_Template, 3, 0, "span", 105);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td")(14, "span", 106);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 107);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 94)(21, "span", 108);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 94)(24, "div", 109)(25, "span", 110);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, StudentsSessionsComponent_ng_container_52_div_1_tr_25_div_27_Template, 5, 1, "div", 111);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td", 112);
    \u0275\u0275listener("click", function StudentsSessionsComponent_ng_container_52_div_1_tr_25_Template_td_click_28_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(29, "div", 113);
    \u0275\u0275template(30, StudentsSessionsComponent_ng_container_52_div_1_tr_25_ng_container_30_Template, 9, 0, "ng-container", 38)(31, StudentsSessionsComponent_ng_container_52_div_1_tr_25_span_31_Template, 4, 4, "span", 114);
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
    \u0275\u0275property("ngIf", demande_r4.session_formation == null ? null : demande_r4.session_formation.type_display);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r4.session_formation == null ? null : demande_r4.session_formation.lieu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r4.session_formation == null ? null : demande_r4.session_formation.capacite_max);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r4.session_formation == null ? null : demande_r4.session_formation.certificat_delivre);
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
function StudentsSessionsComponent_ng_container_52_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 85)(2, "div", 86);
    \u0275\u0275element(3, "i", 87);
    \u0275\u0275text(4, " Historique des demandes de sessions ");
    \u0275\u0275elementStart(5, "span", 88);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "small", 89);
    \u0275\u0275element(8, "i", 90);
    \u0275\u0275text(9, "Cliquez sur une ligne pour voir les d\xE9tails ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 91)(11, "table", 92)(12, "thead")(13, "tr")(14, "th", 93);
    \u0275\u0275text(15, "Session");
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
    \u0275\u0275template(25, StudentsSessionsComponent_ng_container_52_div_1_tr_25_Template, 32, 26, "tr", 96);
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
function StudentsSessionsComponent_ng_container_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StudentsSessionsComponent_ng_container_52_div_1_Template, 26, 2, "div", 83);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandes.length > 0);
  }
}
function StudentsSessionsComponent_ng_container_53_div_1_div_1_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 162);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", demande_r8.sous_titre_affiche, " ");
  }
}
function StudentsSessionsComponent_ng_container_53_div_1_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 117);
    \u0275\u0275element(1, "i", 116);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", demande_r8.session_formation.type_display, " ");
  }
}
function StudentsSessionsComponent_ng_container_53_div_1_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 117);
    \u0275\u0275element(1, "i", 118);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", demande_r8.session_formation.lieu, " ");
  }
}
function StudentsSessionsComponent_ng_container_53_div_1_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 117);
    \u0275\u0275element(1, "i", 119);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const demande_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", demande_r8.places_restantes, "/", demande_r8.session_formation.capacite_max, " places ");
  }
}
function StudentsSessionsComponent_ng_container_53_div_1_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 120);
    \u0275\u0275element(1, "i", 121);
    \u0275\u0275text(2, "Certifiante ");
    \u0275\u0275elementEnd();
  }
}
function StudentsSessionsComponent_ng_container_53_div_1_div_1_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 163);
    \u0275\u0275listener("click", function StudentsSessionsComponent_ng_container_53_div_1_div_1_ng_container_23_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const demande_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.annulerDemande(demande_r8.id, $event));
    });
    \u0275\u0275element(2, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 164);
    \u0275\u0275listener("click", function StudentsSessionsComponent_ng_container_53_div_1_div_1_ng_container_23_Template_button_click_3_listener($event) {
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
function StudentsSessionsComponent_ng_container_53_div_1_div_1_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 165);
    \u0275\u0275listener("click", function StudentsSessionsComponent_ng_container_53_div_1_div_1_button_24_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const demande_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.ouvrirDetail(demande_r8, $event));
    });
    \u0275\u0275element(1, "i", 166);
    \u0275\u0275text(2, "Motif ");
    \u0275\u0275elementEnd();
  }
}
function StudentsSessionsComponent_ng_container_53_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 149);
    \u0275\u0275listener("click", function StudentsSessionsComponent_ng_container_53_div_1_div_1_Template_div_click_0_listener($event) {
      const demande_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.ouvrirDetail(demande_r8, $event));
    });
    \u0275\u0275elementStart(1, "div", 150);
    \u0275\u0275element(2, "img", 151);
    \u0275\u0275elementStart(3, "div", 152)(4, "span", 110);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 153);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 154)(9, "h6", 155);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, StudentsSessionsComponent_ng_container_53_div_1_div_1_p_11_Template, 3, 1, "p", 156);
    \u0275\u0275elementStart(12, "div", 157);
    \u0275\u0275template(13, StudentsSessionsComponent_ng_container_53_div_1_div_1_span_13_Template, 3, 1, "span", 104)(14, StudentsSessionsComponent_ng_container_53_div_1_div_1_span_14_Template, 3, 1, "span", 104)(15, StudentsSessionsComponent_ng_container_53_div_1_div_1_span_15_Template, 3, 2, "span", 104)(16, StudentsSessionsComponent_ng_container_53_div_1_div_1_span_16_Template, 3, 0, "span", 105);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 158);
    \u0275\u0275listener("click", function StudentsSessionsComponent_ng_container_53_div_1_div_1_Template_div_click_17_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(18, "span", 159);
    \u0275\u0275element(19, "i", 49);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 160);
    \u0275\u0275template(23, StudentsSessionsComponent_ng_container_53_div_1_div_1_ng_container_23_Template, 5, 0, "ng-container", 38)(24, StudentsSessionsComponent_ng_container_53_div_1_div_1_button_24_Template, 3, 0, "button", 161);
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
    \u0275\u0275property("ngIf", demande_r8.session_formation == null ? null : demande_r8.session_formation.type_display);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r8.session_formation == null ? null : demande_r8.session_formation.lieu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r8.session_formation == null ? null : demande_r8.session_formation.capacite_max);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r8.session_formation == null ? null : demande_r8.session_formation.certificat_delivre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 22, demande_r8.created_at, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", demande_r8.statut === "en_attente");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demande_r8.statut === "refusee" && demande_r8.motif_refus);
  }
}
function StudentsSessionsComponent_ng_container_53_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147);
    \u0275\u0275template(1, StudentsSessionsComponent_ng_container_53_div_1_div_1_Template, 25, 25, "div", 148);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.demandes);
  }
}
function StudentsSessionsComponent_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StudentsSessionsComponent_ng_container_53_div_1_Template, 2, 1, "div", 146);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandes.length > 0);
  }
}
function StudentsSessionsComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 167)(1, "div", 168);
    \u0275\u0275element(2, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 169);
    \u0275\u0275text(4, "Aucune demande de session trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Vos futures demandes de sessions appara\xEEtront ici.");
    \u0275\u0275elementEnd()();
  }
}
function StudentsSessionsComponent_app_custom_pagination_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-custom-pagination", 170);
    \u0275\u0275listener("pageChange", function StudentsSessionsComponent_app_custom_pagination_55_Template_app_custom_pagination_pageChange_0_listener($event) {
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
function StudentsSessionsComponent_div_58_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 203);
    \u0275\u0275element(1, "i", 116);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.demandeSelectionnee.session_formation.type_display, " ");
  }
}
function StudentsSessionsComponent_div_58_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 204);
    \u0275\u0275element(1, "i", 121);
    \u0275\u0275text(2, "Certifiante ");
    \u0275\u0275elementEnd();
  }
}
function StudentsSessionsComponent_div_58_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 205);
    \u0275\u0275element(1, "i", 118);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.demandeSelectionnee.session_formation.lieu, " ");
  }
}
function StudentsSessionsComponent_div_58_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 206);
    \u0275\u0275element(1, "i", 116);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.demandeSelectionnee.session_formation.type_display, " ");
  }
}
function StudentsSessionsComponent_div_58_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 207);
    \u0275\u0275element(1, "i", 208);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.demandeSelectionnee.session_formation.code_session, " ");
  }
}
function StudentsSessionsComponent_div_58_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 189)(1, "div", 190);
    \u0275\u0275element(2, "i", 209);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "Date de d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementStart(9, "span", 210);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 2, ctx_r1.demandeSelectionnee.session_formation.date_debut, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 5, ctx_r1.demandeSelectionnee.session_formation.date_debut, "HH:mm"), " ");
  }
}
function StudentsSessionsComponent_div_58_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 189)(1, "div", 190);
    \u0275\u0275element(2, "i", 211);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "Date de fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 1, ctx_r1.demandeSelectionnee.session_formation.date_fin, "dd/MM/yyyy"));
  }
}
function StudentsSessionsComponent_div_58_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 189)(1, "div", 190);
    \u0275\u0275element(2, "i", 212);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2(" ", ctx_r1.demandeSelectionnee.places_restantes, " / ", ctx_r1.demandeSelectionnee.session_formation.capacite_max, " ");
  }
}
function StudentsSessionsComponent_div_58_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 189)(1, "div", 190);
    \u0275\u0275element(2, "i", 213);
    \u0275\u0275elementStart(3, "div")(4, "small");
    \u0275\u0275text(5, "Limite d'inscription");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 1, ctx_r1.demandeSelectionnee.session_formation.date_limite_inscription, "dd/MM/yyyy"));
  }
}
function StudentsSessionsComponent_div_58_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 214)(1, "div", 215);
    \u0275\u0275element(2, "i", 216);
    \u0275\u0275text(3, "Instructions d'acc\xE8s ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 217);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.demandeSelectionnee.session_formation.instructions_acces, " ");
  }
}
function StudentsSessionsComponent_div_58_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 196)(1, "span", 197);
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
function StudentsSessionsComponent_div_58_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 196)(1, "span", 197);
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
function StudentsSessionsComponent_div_58_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 196)(1, "span", 197);
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
function StudentsSessionsComponent_div_58_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 196)(1, "span", 197);
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
function StudentsSessionsComponent_div_58_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 196)(1, "span", 197);
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
function StudentsSessionsComponent_div_58_div_72_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 222);
    \u0275\u0275element(1, "i", 135);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.demandeSelectionnee.commentaire_rh, " ");
  }
}
function StudentsSessionsComponent_div_58_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 218)(1, "div", 177);
    \u0275\u0275element(2, "i", 219);
    \u0275\u0275text(3, "Motif de refus ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 220);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, StudentsSessionsComponent_div_58_div_72_p_6_Template, 3, 1, "p", 221);
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
function StudentsSessionsComponent_div_58_div_73_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 226);
    \u0275\u0275element(1, "i", 135);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.demandeSelectionnee.commentaire_rh, " ");
  }
}
function StudentsSessionsComponent_div_58_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 223)(1, "div", 177);
    \u0275\u0275element(2, "i", 224);
    \u0275\u0275text(3, "Demande valid\xE9e ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 220);
    \u0275\u0275text(5, " Votre demande a \xE9t\xE9 valid\xE9e le ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, StudentsSessionsComponent_div_58_div_73_p_10_Template, 3, 1, "p", 225);
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
function StudentsSessionsComponent_div_58_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 227)(1, "button", 228);
    \u0275\u0275listener("click", function StudentsSessionsComponent_div_58_div_78_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.annulerDemande(ctx_r1.demandeSelectionnee.id));
    });
    \u0275\u0275element(2, "i", 128);
    \u0275\u0275text(3, "Annuler la demande ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 229);
    \u0275\u0275listener("click", function StudentsSessionsComponent_div_58_div_78_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.relancerDemande(ctx_r1.demandeSelectionnee.id));
    });
    \u0275\u0275element(5, "i", 230);
    \u0275\u0275text(6, "Relancer ");
    \u0275\u0275elementEnd()();
  }
}
function StudentsSessionsComponent_div_58_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function StudentsSessionsComponent_div_58_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fermerDetail());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 58)(13, "div", 171)(14, "div", 172)(15, "span", 110);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 173);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, StudentsSessionsComponent_div_58_span_19_Template, 3, 1, "span", 174)(20, StudentsSessionsComponent_div_58_span_20_Template, 3, 0, "span", 175);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 176)(22, "div", 177);
    \u0275\u0275element(23, "i", 178);
    \u0275\u0275text(24, "Session demand\xE9e ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 179);
    \u0275\u0275element(26, "img", 180);
    \u0275\u0275elementStart(27, "div", 181)(28, "div", 182);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, StudentsSessionsComponent_div_58_div_30_Template, 3, 1, "div", 183);
    \u0275\u0275elementStart(31, "div", 184);
    \u0275\u0275template(32, StudentsSessionsComponent_div_58_span_32_Template, 3, 1, "span", 185)(33, StudentsSessionsComponent_div_58_span_33_Template, 3, 1, "span", 186);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 187);
    \u0275\u0275template(35, StudentsSessionsComponent_div_58_div_35_Template, 12, 8, "div", 188)(36, StudentsSessionsComponent_div_58_div_36_Template, 9, 4, "div", 188);
    \u0275\u0275elementStart(37, "div", 189)(38, "div", 190);
    \u0275\u0275element(39, "i", 191);
    \u0275\u0275elementStart(40, "div")(41, "small");
    \u0275\u0275text(42, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "strong");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(45, StudentsSessionsComponent_div_58_div_45_Template, 8, 2, "div", 188)(46, StudentsSessionsComponent_div_58_div_46_Template, 9, 4, "div", 188);
    \u0275\u0275elementStart(47, "div", 189)(48, "div", 190);
    \u0275\u0275element(49, "i", 192);
    \u0275\u0275elementStart(50, "div")(51, "small");
    \u0275\u0275text(52, "Certification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "strong");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(55, StudentsSessionsComponent_div_58_div_55_Template, 6, 1, "div", 193);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 176)(57, "div", 177);
    \u0275\u0275element(58, "i", 194);
    \u0275\u0275text(59, "\xC9tat de ma demande ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 195)(61, "div", 196)(62, "span", 197);
    \u0275\u0275text(63, "Soumise le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span");
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(67, StudentsSessionsComponent_div_58_div_67_Template, 6, 4, "div", 198)(68, StudentsSessionsComponent_div_58_div_68_Template, 5, 1, "div", 198)(69, StudentsSessionsComponent_div_58_div_69_Template, 5, 1, "div", 198)(70, StudentsSessionsComponent_div_58_div_70_Template, 5, 1, "div", 198)(71, StudentsSessionsComponent_div_58_div_71_Template, 5, 1, "div", 198);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(72, StudentsSessionsComponent_div_58_div_72_Template, 7, 2, "div", 199)(73, StudentsSessionsComponent_div_58_div_73_Template, 11, 5, "div", 200);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 201)(75, "button", 60);
    \u0275\u0275listener("click", function StudentsSessionsComponent_div_58_Template_button_click_75_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fermerDetail());
    });
    \u0275\u0275element(76, "i", 61);
    \u0275\u0275text(77, "Fermer ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(78, StudentsSessionsComponent_div_58_div_78_Template, 7, 0, "div", 202);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.demandeSelectionnee.titre_affiche);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Demande du ", \u0275\u0275pipeBind2(10, 29, ctx_r1.demandeSelectionnee.created_at, "dd/MM/yyyy \xE0 HH:mm"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ctx_r1.getStatutClass(ctx_r1.demandeSelectionnee.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.demandeSelectionnee.statut_display, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getPrioriteClass(ctx_r1.demandeSelectionnee.priorite));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.demandeSelectionnee.priorite_display, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.session_formation == null ? null : ctx_r1.demandeSelectionnee.session_formation.type_display);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.session_formation == null ? null : ctx_r1.demandeSelectionnee.session_formation.certificat_delivre);
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r1.demandeSelectionnee.image_affiche, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.demandeSelectionnee.titre_affiche);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.session_formation == null ? null : ctx_r1.demandeSelectionnee.session_formation.lieu);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.session_formation == null ? null : ctx_r1.demandeSelectionnee.session_formation.type_display);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.session_formation == null ? null : ctx_r1.demandeSelectionnee.session_formation.code_session);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.session_formation == null ? null : ctx_r1.demandeSelectionnee.session_formation.date_debut);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.session_formation == null ? null : ctx_r1.demandeSelectionnee.session_formation.date_fin);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r1.getDureeJours(ctx_r1.demandeSelectionnee.session_formation), " jour(s)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.session_formation == null ? null : ctx_r1.demandeSelectionnee.session_formation.capacite_max);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.session_formation == null ? null : ctx_r1.demandeSelectionnee.session_formation.date_limite_inscription);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.demandeSelectionnee.session_formation == null ? null : ctx_r1.demandeSelectionnee.session_formation.certificat_delivre) ? "Certificat d\xE9livr\xE9" : "Non certifiante", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.statut === "validee" && (ctx_r1.demandeSelectionnee.session_formation == null ? null : ctx_r1.demandeSelectionnee.session_formation.instructions_acces) && (ctx_r1.demandeSelectionnee.session_formation == null ? null : ctx_r1.demandeSelectionnee.session_formation.type) === "distanciel");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 32, ctx_r1.demandeSelectionnee.created_at, "dd/MM/yyyy \xE0 HH:mm"));
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
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.demandeSelectionnee.statut === "en_attente");
  }
}
function StudentsSessionsComponent_small_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Sessions disponibles");
    \u0275\u0275elementEnd();
  }
}
function StudentsSessionsComponent_small_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275element(1, "i", 231);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSelectedSessionTitle(), " ");
  }
}
function StudentsSessionsComponent_ng_container_85_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 239);
    \u0275\u0275element(1, "div", 240);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Chargement des sessions...");
    \u0275\u0275elementEnd()();
  }
}
function StudentsSessionsComponent_ng_container_85_div_9_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 255);
  }
  if (rf & 2) {
    const session_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", session_r15.image_couverture, \u0275\u0275sanitizeUrl);
  }
}
function StudentsSessionsComponent_ng_container_85_div_9_div_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 49);
  }
}
function StudentsSessionsComponent_ng_container_85_div_9_div_1_div_7_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const session_r15 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2192 ", \u0275\u0275pipeBind2(2, 1, session_r15.date_fin, "dd/MM/yyyy"));
  }
}
function StudentsSessionsComponent_ng_container_85_div_9_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 256);
    \u0275\u0275element(1, "i", 257);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275template(4, StudentsSessionsComponent_ng_container_85_div_9_div_1_div_7_span_4_Template, 3, 4, "span", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const session_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" D\xE9but : ", \u0275\u0275pipeBind2(3, 2, session_r15.date_debut, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", session_r15.date_fin);
  }
}
function StudentsSessionsComponent_ng_container_85_div_9_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 206);
    \u0275\u0275element(1, "i", 116);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const session_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", session_r15.type_display, " ");
  }
}
function StudentsSessionsComponent_ng_container_85_div_9_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 207);
    \u0275\u0275element(1, "i", 118);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const session_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", session_r15.lieu, " ");
  }
}
function StudentsSessionsComponent_ng_container_85_div_9_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 258);
    \u0275\u0275element(1, "i", 119);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const session_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", session_r15.places_restantes, " place(s) ");
  }
}
function StudentsSessionsComponent_ng_container_85_div_9_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 259);
    \u0275\u0275element(1, "i", 121);
    \u0275\u0275text(2, "Certifiante ");
    \u0275\u0275elementEnd();
  }
}
function StudentsSessionsComponent_ng_container_85_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 243);
    \u0275\u0275listener("click", function StudentsSessionsComponent_ng_container_85_div_9_div_1_Template_div_click_0_listener() {
      const session_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectSession(session_r15));
    });
    \u0275\u0275elementStart(1, "div", 244);
    \u0275\u0275template(2, StudentsSessionsComponent_ng_container_85_div_9_div_1_img_2_Template, 1, 1, "img", 245)(3, StudentsSessionsComponent_ng_container_85_div_9_div_1_i_3_Template, 1, 0, "i", 246);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 247)(5, "div", 248);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, StudentsSessionsComponent_ng_container_85_div_9_div_1_div_7_Template, 5, 5, "div", 249);
    \u0275\u0275elementStart(8, "div", 250);
    \u0275\u0275template(9, StudentsSessionsComponent_ng_container_85_div_9_div_1_span_9_Template, 3, 1, "span", 185)(10, StudentsSessionsComponent_ng_container_85_div_9_div_1_span_10_Template, 3, 1, "span", 186)(11, StudentsSessionsComponent_ng_container_85_div_9_div_1_span_11_Template, 3, 1, "span", 251)(12, StudentsSessionsComponent_ng_container_85_div_9_div_1_span_12_Template, 3, 0, "span", 252);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 253);
    \u0275\u0275element(14, "i", 254);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const session_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", session_r15.image_couverture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !session_r15.image_couverture);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((session_r15.formation == null ? null : session_r15.formation.titre) ?? session_r15.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", session_r15.date_debut);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", session_r15.type_display);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", session_r15.lieu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", session_r15.places_restantes != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", session_r15.certificat_delivre);
  }
}
function StudentsSessionsComponent_ng_container_85_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 241);
    \u0275\u0275template(1, StudentsSessionsComponent_ng_container_85_div_9_div_1_Template, 15, 8, "div", 242);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.sessions);
  }
}
function StudentsSessionsComponent_ng_container_85_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 260);
    \u0275\u0275element(1, "i", 261);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Aucune session disponible actuellement");
    \u0275\u0275elementEnd()();
  }
}
function StudentsSessionsComponent_ng_container_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 232)(2, "span", 233);
    \u0275\u0275text(3, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 234);
    \u0275\u0275text(5, "Choisir une session ");
    \u0275\u0275elementStart(6, "span", 235);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, StudentsSessionsComponent_ng_container_85_div_8_Template, 4, 0, "div", 236)(9, StudentsSessionsComponent_ng_container_85_div_9_Template, 2, 1, "div", 237)(10, StudentsSessionsComponent_ng_container_85_div_10_Template, 4, 0, "div", 238);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.loadingSessions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingSessions && ctx_r1.sessions.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingSessions && ctx_r1.sessions.length === 0);
  }
}
function StudentsSessionsComponent_ng_container_86_img_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 288);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.selectedSession.image_couverture, \u0275\u0275sanitizeUrl);
  }
}
function StudentsSessionsComponent_ng_container_86_i_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 49);
  }
}
function StudentsSessionsComponent_ng_container_86_div_13_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2192 ", \u0275\u0275pipeBind2(2, 1, ctx_r1.selectedSession.date_fin, "dd/MM/yyyy"));
  }
}
function StudentsSessionsComponent_ng_container_86_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 289);
    \u0275\u0275element(1, "i", 257);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275template(4, StudentsSessionsComponent_ng_container_86_div_13_span_4_Template, 3, 4, "span", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, ctx_r1.selectedSession.date_debut, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedSession == null ? null : ctx_r1.selectedSession.date_fin);
  }
}
function StudentsSessionsComponent_ng_container_86_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 206);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSession.type_display, " ");
  }
}
function StudentsSessionsComponent_ng_container_86_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 258);
    \u0275\u0275element(1, "i", 119);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedSession.places_restantes, " place(s) ");
  }
}
function StudentsSessionsComponent_ng_container_86_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 290);
    \u0275\u0275element(1, "i", 166);
    \u0275\u0275text(2, "Le motif est obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function StudentsSessionsComponent_ng_container_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 262);
    \u0275\u0275listener("click", function StudentsSessionsComponent_ng_container_86_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retourSessions());
    });
    \u0275\u0275element(2, "i", 263);
    \u0275\u0275text(3, " Retour aux sessions ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 264)(5, "div", 265);
    \u0275\u0275template(6, StudentsSessionsComponent_ng_container_86_img_6_Template, 1, 1, "img", 266)(7, StudentsSessionsComponent_ng_container_86_i_7_Template, 1, 0, "i", 246);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 267)(9, "div", 268);
    \u0275\u0275text(10, "Session s\xE9lectionn\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 269);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, StudentsSessionsComponent_ng_container_86_div_13_Template, 5, 5, "div", 270);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 271);
    \u0275\u0275template(15, StudentsSessionsComponent_ng_container_86_span_15_Template, 2, 1, "span", 185)(16, StudentsSessionsComponent_ng_container_86_span_16_Template, 3, 1, "span", 251);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "hr", 272);
    \u0275\u0275elementStart(18, "div", 232)(19, "span", 233);
    \u0275\u0275text(20, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 234);
    \u0275\u0275text(22, "Informations compl\xE9mentaires");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "form", 273)(24, "div", 274)(25, "div", 275)(26, "label", 276);
    \u0275\u0275text(27, " Motif de la demande ");
    \u0275\u0275elementStart(28, "span", 235);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(30, "textarea", 277);
    \u0275\u0275template(31, StudentsSessionsComponent_ng_container_86_div_31_Template, 3, 0, "div", 278);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 275)(33, "label", 276);
    \u0275\u0275text(34, "Objectifs personnels");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "textarea", 279);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 189)(37, "label", 276);
    \u0275\u0275text(38, "Priorit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "select", 280)(40, "option", 281);
    \u0275\u0275text(41, "\u{1F7E2} Basse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 282);
    \u0275\u0275text(43, "\u{1F7E1} Normale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 283);
    \u0275\u0275text(45, "\u{1F7E0} Haute");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 284);
    \u0275\u0275text(47, "\u{1F534} Urgente");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 275)(49, "label", 285);
    \u0275\u0275text(50, "Commentaire ");
    \u0275\u0275elementStart(51, "span", 286);
    \u0275\u0275text(52, "(optionnel)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(53, "textarea", 287);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.selectedSession == null ? null : ctx_r1.selectedSession.image_couverture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.selectedSession == null ? null : ctx_r1.selectedSession.image_couverture));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.selectedSession == null ? null : ctx_r1.selectedSession.formation == null ? null : ctx_r1.selectedSession.formation.titre) ?? (ctx_r1.selectedSession == null ? null : ctx_r1.selectedSession.titre), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSession == null ? null : ctx_r1.selectedSession.date_debut);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedSession == null ? null : ctx_r1.selectedSession.type_display);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.selectedSession == null ? null : ctx_r1.selectedSession.places_restantes) != null);
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx_r1.form.get("motif_demande")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.form.get("motif_demande")) == null ? null : tmp_8_0.touched));
  }
}
function StudentsSessionsComponent_button_91_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 294);
  }
}
function StudentsSessionsComponent_button_91_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 295);
  }
}
function StudentsSessionsComponent_button_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 291);
    \u0275\u0275listener("click", function StudentsSessionsComponent_button_91_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitRequest());
    });
    \u0275\u0275template(1, StudentsSessionsComponent_button_91_span_1_Template, 1, 0, "span", 292)(2, StudentsSessionsComponent_button_91_i_2_Template, 1, 0, "i", 293);
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
var StudentsSessionsComponent = class _StudentsSessionsComponent {
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
  detailModal;
  // ── MODAL NOUVELLE DEMANDE ───────────────────────
  submitting = false;
  modalInstance;
  sessions = [];
  loadingSessions = false;
  selectedSessionId = null;
  selectedSession = null;
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
      commentaire_employe: [""]
    });
  }
  // ── TOGGLE VUE ───────────────────────────────────
  setView(mode) {
    this.viewMode = mode;
  }
  // ── KPI GETTERS ──────────────────────────────────
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
        this.allDemandes = raw.filter((d) => d.type_demande === "session").map((d) => this.normaliserDemande(d));
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
    const cap = d.session_formation?.capacite_max ?? 0;
    const inscrits = d.session_formation?.nombre_inscrits ?? 0;
    const date = d.session_formation?.date_debut;
    return __spreadProps(__spreadValues({}, d), {
      titre_affiche: d.session_formation?.titre ?? `Session #${d.session_formation_id}`,
      sous_titre_affiche: date ? `D\xE9but : ${new Date(date).toLocaleDateString("fr-FR")}` : "",
      image_affiche: d.session_formation?.image_couverture ? d.session_formation.image_couverture.startsWith("http") ? d.session_formation.image_couverture : `${environment.apiUrl.replace("/api", "")}/storage/${d.session_formation.image_couverture}` : "assets/img/course/course-01.jpg",
      places_restantes: Math.max(0, cap - inscrits)
    });
  }
  // ── FILTRES + PAGINATION ─────────────────────────
  getTableData(skip, limit) {
    let filtered = [...this.allDemandes];
    if (this.selectedStatus)
      filtered = filtered.filter((d) => d.statut === this.selectedStatus);
    if (this.searchDataValue) {
      const s = this.searchDataValue.toLowerCase();
      filtered = filtered.filter((d) => d.titre_affiche?.toLowerCase().includes(s) || d.session_formation?.titre?.toLowerCase().includes(s) || d.session_formation?.lieu?.toLowerCase().includes(s));
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
        this.fermerDetail();
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
        this.fermerDetail();
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
  ouvrirDetail(demande, event) {
    const target = event?.target;
    if (target?.closest(".sc-btn-annuler, .sc-btn-relancer, .sc-action-btn, .sc-motif-wrapper"))
      return;
    this.demandeSelectionnee = __spreadValues({}, demande);
    const el = document.getElementById("sessionDemandeDetailModal");
    if (el) {
      this.detailModal = new bootstrap.Modal(el, { backdrop: true, keyboard: true });
      this.detailModal.show();
    }
  }
  fermerDetail() {
    this.detailModal?.hide();
    this.demandeSelectionnee = null;
  }
  // ════════════════════════════════════════════════
  // MODAL NOUVELLE DEMANDE
  // ════════════════════════════════════════════════
  openRequestModal() {
    this.resetModal();
    this.loadSessions();
    const el = document.getElementById("demandeSessionModal");
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
    this.sessions = [];
    this.selectedSessionId = null;
    this.selectedSession = null;
    this.submitting = false;
    this.form.reset({ priorite: "normale" });
  }
  loadSessions() {
    this.loadingSessions = true;
    this.formationsService.getSessionsOuvertes().subscribe({
      next: (res) => {
        this.sessions = res.sessions ?? [];
        this.loadingSessions = false;
      },
      error: () => {
        this.loadingSessions = false;
      }
    });
  }
  selectSession(session) {
    this.selectedSessionId = session.id;
    this.selectedSession = session;
  }
  retourSessions() {
    this.selectedSessionId = null;
    this.selectedSession = null;
  }
  getSelectedSessionTitle() {
    if (!this.selectedSession)
      return "";
    return this.selectedSession.formation?.titre ?? this.selectedSession.titre ?? "";
  }
  // ── SOUMISSION ───────────────────────────────────
  canSubmit() {
    return !!this.selectedSessionId && this.form.valid;
  }
  submitRequest() {
    if (!this.canSubmit())
      return;
    this.submitting = true;
    const fv = this.form.value;
    const payload = {
      type_demande: "session",
      session_formation_id: this.selectedSessionId,
      motif_demande: fv.motif_demande,
      objectifs_personnels: fv.objectifs_personnels,
      priorite: fv.priorite,
      commentaire_employe: fv.commentaire_employe
    };
    this.demandeFormationService.creerDemande(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.closeModal();
        setTimeout(() => {
          this.showToast("success", "\u2705 Votre demande de session a \xE9t\xE9 envoy\xE9e avec succ\xE8s !");
          this.loadDemandes();
        }, 300);
      },
      error: (err) => this.handleError(err)
    });
  }
  handleError(err) {
    this.submitting = false;
    if (err.status === 409)
      this.showToast("warning", "\u26A0\uFE0F Vous avez d\xE9j\xE0 une demande en cours pour cette session.");
    else if (err.status === 422)
      this.showToast("error", "\u274C Veuillez v\xE9rifier les champs obligatoires.");
    else
      this.showToast("error", "\u274C Une erreur est survenue. Veuillez r\xE9essayer.");
  }
  // ── HELPERS SESSION ───────────────────────────────
  getTypeLabel(type) {
    return { presentiel: "Pr\xE9sentiel", distanciel: "Distanciel", hybride: "Hybride" }[type] ?? type;
  }
  getDureeJours(session) {
    if (!session?.date_debut || !session?.date_fin)
      return 0;
    const ms = new Date(session.date_fin).getTime() - new Date(session.date_debut).getTime();
    return Math.ceil(ms / (1e3 * 60 * 60 * 24)) || 1;
  }
  // ── HELPERS CSS ──────────────────────────────────
  getPrioriteClass(p) {
    return { urgente: "priorite-urgente", haute: "priorite-haute", normale: "priorite-normale", basse: "priorite-basse" }[p] ?? "priorite-normale";
  }
  getStatutClass(s) {
    return { en_attente: "statut-attente", validee: "statut-validee", refusee: "statut-refusee", annulee: "statut-annulee" }[s] ?? "";
  }
  static \u0275fac = function StudentsSessionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentsSessionsComponent)(\u0275\u0275directiveInject(DemandeFormationService), \u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentsSessionsComponent, selectors: [["app-students-sessions"]], decls: 92, vars: 48, consts: [[1, "lms-toast-container"], [1, "lms-toast"], [1, "lms-toast__icon"], ["class", "isax isax-tick-circle-filled", 4, "ngIf"], ["class", "isax isax-close-circle-filled", 4, "ngIf"], ["class", "isax isax-warning-2-filled", 4, "ngIf"], [1, "lms-toast__body"], [1, "lms-toast__label"], [1, "lms-toast__message"], [1, "lms-toast__close", 3, "click"], [1, "isax", "isax-close-square"], [1, "lms-toast__progress"], [1, "sc-header", "mb-4"], [1, "sc-header__left"], [1, "sc-header__title"], [1, "sc-header__subtitle"], [1, "sc-header__actions"], ["title", "Vue tableau", 1, "sc-header__toggle-btn", 3, "click"], [1, "isax", "isax-row-vertical"], ["title", "Vue grille", 1, "sc-header__toggle-btn", 3, "click"], [1, "isax", "isax-element-3"], [1, "sc-header__new-btn", 3, "click"], [1, "isax", "isax-add-circle"], ["class", "pq-kpi-grid mb-4", 4, "ngIf"], [1, "sc-filters", "mb-4"], [1, "sc-filters__search"], [1, "isax", "isax-search-normal-1", "sc-filters__search-icon"], ["type", "search", "placeholder", "Rechercher une session...", 1, "sc-filters__search-input", 3, "ngModelChange", "ngModel"], [1, "sc-filters__pills"], [1, "sc-filters__pill", 3, "click"], [1, "sc-filters__pill", "sc-filters__pill--attente", 3, "click"], ["class", "sc-filters__pill-count", 4, "ngIf"], [1, "sc-filters__pill", "sc-filters__pill--validee", 3, "click"], [1, "sc-filters__pill", "sc-filters__pill--refusee", 3, "click"], [1, "sc-filters__pill", "sc-filters__pill--annulee", 3, "click"], [1, "sc-filters__reset", 3, "click"], [1, "isax", "isax-refresh"], ["class", "qq-loading", 4, "ngIf"], [4, "ngIf"], ["class", "sc-empty", 4, "ngIf"], [3, "totalItems", "pageSize", "currentPage", "pageChange", 4, "ngIf"], ["id", "sessionDemandeDetailModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered", "modal-dialog-scrollable"], ["class", "modal-content lms-modal", 4, "ngIf"], ["id", "demandeSessionModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-content", "lms-modal"], [1, "modal-header", "lms-modal__header"], [1, "d-flex", "align-items-center", "gap-3"], [1, "lms-modal__icon"], [1, "isax", "isax-calendar-1"], [1, "modal-title", "mb-0"], ["type", "button", 1, "btn-close", "btn-close-white", 3, "click"], [1, "lms-progress-bar"], [1, "lms-progress-bar__step"], [1, "lms-progress-bar__dot"], [1, "lms-progress-bar__label"], [1, "lms-progress-bar__line"], [1, "isax", "isax-send-2"], [1, "modal-body", "lms-modal__body"], [1, "modal-footer", "lms-modal__footer"], [1, "btn", "lms-btn-cancel", 3, "click"], [1, "isax", "isax-close-square", "me-1"], ["class", "btn lms-btn-submit", 3, "disabled", "click", 4, "ngIf"], [1, "isax", "isax-tick-circle-filled"], [1, "isax", "isax-close-circle-filled"], [1, "isax", "isax-warning-2-filled"], [1, "pq-kpi-grid", "mb-4"], [1, "pq-kpi-card", "pq-kpi-card--teal", 3, "click"], [1, "pq-kpi-card__icon"], [1, "pq-kpi-card__body"], [1, "pq-kpi-card__value"], [1, "pq-kpi-card__label"], [1, "pq-kpi-card", "pq-kpi-card--orange", 3, "click"], [1, "isax", "isax-clock"], [1, "pq-kpi-card", "pq-kpi-card--green", 3, "click"], [1, "isax", "isax-tick-circle"], [1, "pq-kpi-card", "pq-kpi-card--red", 3, "click"], [1, "isax", "isax-close-circle"], [1, "pq-kpi-card", "pq-kpi-card--gray", 3, "click"], [1, "isax", "isax-minus-cirlce"], [1, "sc-filters__pill-count"], [1, "qq-loading"], [1, "qq-loading__ring"], ["class", "card sc-table-card", 4, "ngIf"], [1, "card", "sc-table-card"], [1, "card-header", "sc-table-card__header"], [1, "sc-table-card__title"], [1, "isax", "isax-calendar-1", "text-primary", "me-2"], [1, "sc-table-card__count"], [1, "text-muted", 2, "font-size", "11px"], [1, "isax", "isax-mouse-circle", "me-1"], [1, "table-responsive"], [1, "table", "sc-table", "align-middle", "mb-0"], [2, "min-width", "300px"], [1, "text-center"], [1, "text-center", 2, "min-width", "160px"], ["class", "sc-table-row", 3, "sc-row--refusee", "sc-row--validee", "click", 4, "ngFor", "ngForOf"], [1, "sc-table-row", 3, "click"], [1, "sc-formation"], ["alt", "", 1, "sc-formation__thumb", 3, "src"], [1, "sc-formation__info"], [1, "sc-formation__title"], ["class", "sc-formation__sub", 4, "ngIf"], [1, "sc-formation__details"], ["class", "sc-detail-chip", 4, "ngIf"], ["class", "sc-detail-chip sc-detail-chip--award", 4, "ngIf"], [1, "sc-date"], [1, "sc-date", "sc-date--time", "d-block"], [1, "sc-priorite", 3, "ngClass"], [1, "sc-statut-cell"], [1, "sc-statut", 3, "ngClass"], ["class", "sc-motif-wrapper", 3, "mouseenter", "mouseleave", "click", 4, "ngIf"], [1, "text-center", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2"], ["class", "sc-statut-icon", 3, "title", 4, "ngIf"], [1, "sc-formation__sub"], [1, "isax", "isax-calendar-1", "me-1"], [1, "sc-detail-chip"], [1, "isax", "isax-location", "me-1"], [1, "isax", "isax-people", "me-1"], [1, "sc-detail-chip", "sc-detail-chip--award"], [1, "isax", "isax-award", "me-1"], [1, "sc-motif-wrapper", 3, "mouseenter", "mouseleave", "click"], [1, "sc-motif-btn"], [1, "isax", "isax-info-circle"], ["class", "sc-motif-tooltip", 4, "ngIf"], [1, "sc-motif-tooltip"], [1, "sc-motif-tooltip__header"], [1, "isax", "isax-close-circle", "me-1"], [1, "sc-motif-tooltip__body"], ["class", "sc-motif-tooltip__responsable", 4, "ngIf"], ["class", "sc-motif-tooltip__footer", 4, "ngIf"], [1, "sc-motif-tooltip__responsable"], [1, "isax", "isax-user", "me-1"], [1, "sc-motif-tooltip__footer"], [1, "isax", "isax-message-text", "me-1"], ["title", "Annuler la demande", 1, "sc-action-btn", "sc-action-btn--danger", 3, "click"], [1, "sc-action-btn__tooltip"], ["title", "Relancer la demande", 1, "sc-action-btn", "sc-action-btn--primary", 3, "click"], [1, "sc-statut-icon", 3, "title"], ["class", "isax isax-tick-circle sc-statut-icon--validee", 4, "ngIf"], ["class", "isax isax-close-circle sc-statut-icon--refusee", 4, "ngIf"], ["class", "isax isax-minus-cirlce sc-statut-icon--annulee", 4, "ngIf"], [1, "isax", "isax-tick-circle", "sc-statut-icon--validee"], [1, "isax", "isax-close-circle", "sc-statut-icon--refusee"], [1, "isax", "isax-minus-cirlce", "sc-statut-icon--annulee"], ["class", "sc-grid", 4, "ngIf"], [1, "sc-grid"], ["class", "sc-grid-card", 3, "sc-grid-card--validee", "sc-grid-card--refusee", "sc-grid-card--attente", "click", 4, "ngFor", "ngForOf"], [1, "sc-grid-card", 3, "click"], [1, "sc-grid-card__cover"], [1, "sc-grid-card__img", 3, "src", "alt"], [1, "sc-grid-card__cover-overlay"], [1, "sc-priorite", "sc-grid-card__priorite", 3, "ngClass"], [1, "sc-grid-card__body"], [1, "sc-grid-card__title"], ["class", "sc-grid-card__sub", 4, "ngIf"], [1, "sc-grid-card__chips"], [1, "sc-grid-card__footer", 3, "click"], [1, "sc-grid-card__date"], [1, "sc-grid-card__actions"], ["class", "sc-grid-motif-btn", 3, "click", 4, "ngIf"], [1, "sc-grid-card__sub"], ["title", "Annuler", 1, "sc-btn-annuler", "sc-btn--xs", 3, "click"], ["title", "Relancer", 1, "sc-btn-relancer", "sc-btn--xs", 3, "click"], [1, "sc-grid-motif-btn", 3, "click"], [1, "isax", "isax-info-circle", "me-1"], [1, "sc-empty"], [1, "sc-empty__icon"], [1, "sc-empty__title"], [3, "pageChange", "totalItems", "pageSize", "currentPage"], [1, "lms-detail-chips", "mb-4"], [1, "lms-detail-chips__left"], [1, "sc-priorite", "ms-2", 3, "ngClass"], ["class", "lms-meta-chip ms-2", 4, "ngIf"], ["class", "lms-meta-chip lms-meta-chip--award ms-2", 4, "ngIf"], [1, "lms-detail-section", "mb-3"], [1, "lms-detail-section__title"], [1, "isax", "isax-calendar-1", "me-2"], [1, "lms-formation-banner", "mt-2"], ["alt", "", 1, "lms-formation-banner__img", 3, "src"], [1, "lms-formation-banner__body"], [1, "lms-formation-banner__title"], ["class", "lms-formation-banner__sub", 4, "ngIf"], [1, "lms-formation-banner__tags"], ["class", "lms-meta-chip lms-meta-chip--teal", 4, "ngIf"], ["class", "lms-meta-chip", 4, "ngIf"], [1, "row", "g-2", "mt-3"], ["class", "col-md-6", 4, "ngIf"], [1, "col-md-6"], [1, "lms-info-item"], [1, "isax", "isax-clock", 2, "color", "#069b8f"], [1, "isax", "isax-award", 2, "color", "#069b8f"], ["class", "lms-formation-desc mt-3", 4, "ngIf"], [1, "isax", "isax-message-text", "me-2"], [1, "cd-demande-detail", "mt-2"], [1, "cd-demande-row"], [1, "cd-demande-label"], ["class", "cd-demande-row", 4, "ngIf"], ["class", "lms-detail-section lms-detail-section--danger mb-3", 4, "ngIf"], ["class", "lms-detail-section lms-detail-section--success mb-3", 4, "ngIf"], [1, "modal-footer", "lms-modal__footer", "lms-modal__footer--split"], ["class", "d-flex gap-2", 4, "ngIf"], [1, "lms-meta-chip", "ms-2"], [1, "lms-meta-chip", "lms-meta-chip--award", "ms-2"], [1, "lms-formation-banner__sub"], [1, "lms-meta-chip", "lms-meta-chip--teal"], [1, "lms-meta-chip"], [1, "isax", "isax-hashtag", "me-1"], [1, "isax", "isax-calendar-2", 2, "color", "#069b8f"], [1, "text-muted", "small", "ms-1"], [1, "isax", "isax-calendar-tick", 2, "color", "#069b8f"], [1, "isax", "isax-people", 2, "color", "#069b8f"], [1, "isax", "isax-calendar-remove", 2, "color", "#069b8f"], [1, "lms-formation-desc", "mt-3"], [1, "lms-formation-desc__label"], [1, "isax", "isax-link"], [1, "lms-formation-desc__text"], [1, "lms-detail-section", "lms-detail-section--danger", "mb-3"], [1, "isax", "isax-close-circle", "me-2"], [1, "lms-detail-section__body"], ["class", "lms-detail-section__body mt-1 fst-italic", 4, "ngIf"], [1, "lms-detail-section__body", "mt-1", "fst-italic"], [1, "lms-detail-section", "lms-detail-section--success", "mb-3"], [1, "isax", "isax-tick-circle", "me-2"], ["class", "lms-detail-section__body mt-1", 4, "ngIf"], [1, "lms-detail-section__body", "mt-1"], [1, "d-flex", "gap-2"], [1, "btn", "sc-btn-annuler", 3, "click"], [1, "btn", "sc-btn-relancer", 3, "click"], [1, "isax", "isax-refresh", "me-1"], [1, "isax", "isax-arrow-right-3", "me-1", 2, "font-size", "10px"], [1, "lms-step__header", "mb-3"], [1, "lms-step__number", "lms-step__number--blue"], [1, "lms-step__title"], [1, "text-danger"], ["class", "lms-loading", 4, "ngIf"], ["class", "lms-list", 4, "ngIf"], ["class", "lms-empty-inline", 4, "ngIf"], [1, "lms-loading"], [1, "spinner-border", "text-primary"], [1, "lms-list"], ["class", "lms-list-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "lms-list-item", 3, "click"], [1, "lms-list-item__icon-wrap"], ["class", "lms-list-item__img", "alt", "", 3, "src", 4, "ngIf"], ["class", "isax isax-calendar-1", 4, "ngIf"], [1, "lms-list-item__body"], [1, "lms-list-item__title"], ["class", "lms-list-item__desc", 4, "ngIf"], [1, "lms-list-item__meta"], ["class", "lms-meta-chip lms-meta-chip--success", 4, "ngIf"], ["class", "lms-meta-chip lms-meta-chip--award", 4, "ngIf"], [1, "lms-list-item__arrow"], [1, "isax", "isax-arrow-right-3"], ["alt", "", 1, "lms-list-item__img", 3, "src"], [1, "lms-list-item__desc"], [1, "isax", "isax-calendar-2", "me-1"], [1, "lms-meta-chip", "lms-meta-chip--success"], [1, "lms-meta-chip", "lms-meta-chip--award"], [1, "lms-empty-inline"], [1, "isax", "isax-calendar-remove"], [1, "lms-back-btn", "mb-3", 3, "click"], [1, "isax", "isax-arrow-left", "me-1"], [1, "lms-selected-recap", "mb-4"], [1, "lms-selected-recap__icon"], ["class", "lms-selected-recap__img", "alt", "", 3, "src", 4, "ngIf"], [1, "lms-selected-recap__body"], [1, "lms-selected-recap__label"], [1, "lms-selected-recap__title"], ["class", "lms-selected-recap__date", 4, "ngIf"], [1, "d-flex", "flex-column", "gap-1", "align-items-end"], [1, "lms-divider"], [3, "formGroup"], [1, "row", "g-3"], [1, "col-12"], [1, "form-label", "fw-semibold"], ["formControlName", "motif_demande", "rows", "3", "placeholder", "Pourquoi souhaitez-vous cette session ?", 1, "form-control", "lms-input"], ["class", "lms-field-error", 4, "ngIf"], ["formControlName", "objectifs_personnels", "rows", "2", "placeholder", "Qu'esp\xE9rez-vous acqu\xE9rir avec cette session ?", 1, "form-control", "lms-input"], ["formControlName", "priorite", 1, "form-select", "lms-input"], ["value", "basse"], ["value", "normale"], ["value", "haute"], ["value", "urgente"], [1, "form-label"], [1, "text-muted", "small"], ["formControlName", "commentaire_employe", "rows", "2", "placeholder", "Informations compl\xE9mentaires...", 1, "form-control", "lms-input"], ["alt", "", 1, "lms-selected-recap__img", 3, "src"], [1, "lms-selected-recap__date"], [1, "lms-field-error"], [1, "btn", "lms-btn-submit", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "isax isax-send-2 me-2", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "isax", "isax-send-2", "me-2"]], template: function StudentsSessionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275template(3, StudentsSessionsComponent_i_3_Template, 1, 0, "i", 3)(4, StudentsSessionsComponent_i_4_Template, 1, 0, "i", 4)(5, StudentsSessionsComponent_i_5_Template, 1, 0, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "span", 7);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275listener("click", function StudentsSessionsComponent_Template_button_click_11_listener() {
        return ctx.closeToast();
      });
      \u0275\u0275element(12, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "div", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 12)(15, "div", 13)(16, "h3", 14);
      \u0275\u0275text(17, "Mes demandes de sessions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 15);
      \u0275\u0275text(19, "Suivez l'\xE9tat de vos demandes de sessions soumises \xE0 l'entreprise");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 16)(21, "button", 17);
      \u0275\u0275listener("click", function StudentsSessionsComponent_Template_button_click_21_listener() {
        return ctx.setView("table");
      });
      \u0275\u0275element(22, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 19);
      \u0275\u0275listener("click", function StudentsSessionsComponent_Template_button_click_23_listener() {
        return ctx.setView("grid");
      });
      \u0275\u0275element(24, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 21);
      \u0275\u0275listener("click", function StudentsSessionsComponent_Template_button_click_25_listener() {
        return ctx.openRequestModal();
      });
      \u0275\u0275element(26, "i", 22);
      \u0275\u0275text(27, " Nouvelle demande ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(28, StudentsSessionsComponent_div_28_Template, 41, 15, "div", 23);
      \u0275\u0275elementStart(29, "div", 24)(30, "div", 25);
      \u0275\u0275element(31, "i", 26);
      \u0275\u0275elementStart(32, "input", 27);
      \u0275\u0275twoWayListener("ngModelChange", function StudentsSessionsComponent_Template_input_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function StudentsSessionsComponent_Template_input_ngModelChange_32_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 28)(34, "button", 29);
      \u0275\u0275listener("click", function StudentsSessionsComponent_Template_button_click_34_listener() {
        return ctx.filterByStatus("");
      });
      \u0275\u0275text(35, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 30);
      \u0275\u0275listener("click", function StudentsSessionsComponent_Template_button_click_36_listener() {
        return ctx.filterByStatus("en_attente");
      });
      \u0275\u0275text(37, " En attente ");
      \u0275\u0275template(38, StudentsSessionsComponent_span_38_Template, 2, 1, "span", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "button", 32);
      \u0275\u0275listener("click", function StudentsSessionsComponent_Template_button_click_39_listener() {
        return ctx.filterByStatus("validee");
      });
      \u0275\u0275text(40, " Valid\xE9e ");
      \u0275\u0275template(41, StudentsSessionsComponent_span_41_Template, 2, 1, "span", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 33);
      \u0275\u0275listener("click", function StudentsSessionsComponent_Template_button_click_42_listener() {
        return ctx.filterByStatus("refusee");
      });
      \u0275\u0275text(43, " Refus\xE9e ");
      \u0275\u0275template(44, StudentsSessionsComponent_span_44_Template, 2, 1, "span", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "button", 34);
      \u0275\u0275listener("click", function StudentsSessionsComponent_Template_button_click_45_listener() {
        return ctx.filterByStatus("annulee");
      });
      \u0275\u0275text(46, " Annul\xE9e ");
      \u0275\u0275template(47, StudentsSessionsComponent_span_47_Template, 2, 1, "span", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "button", 35);
      \u0275\u0275listener("click", function StudentsSessionsComponent_Template_button_click_48_listener() {
        return ctx.resetFilters();
      });
      \u0275\u0275element(49, "i", 36);
      \u0275\u0275text(50, " R\xE9initialiser ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(51, StudentsSessionsComponent_div_51_Template, 8, 0, "div", 37)(52, StudentsSessionsComponent_ng_container_52_Template, 2, 1, "ng-container", 38)(53, StudentsSessionsComponent_ng_container_53_Template, 2, 1, "ng-container", 38)(54, StudentsSessionsComponent_div_54_Template, 7, 0, "div", 39)(55, StudentsSessionsComponent_app_custom_pagination_55_Template, 1, 3, "app-custom-pagination", 40);
      \u0275\u0275elementStart(56, "div", 41)(57, "div", 42);
      \u0275\u0275template(58, StudentsSessionsComponent_div_58_Template, 79, 35, "div", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 44)(60, "div", 42)(61, "div", 45)(62, "div", 46)(63, "div", 47)(64, "div", 48);
      \u0275\u0275element(65, "i", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div")(67, "h5", 50);
      \u0275\u0275text(68, "Demande de session");
      \u0275\u0275elementEnd();
      \u0275\u0275template(69, StudentsSessionsComponent_small_69_Template, 2, 0, "small", 38)(70, StudentsSessionsComponent_small_70_Template, 3, 1, "small", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "button", 51);
      \u0275\u0275listener("click", function StudentsSessionsComponent_Template_button_click_71_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 52)(73, "div", 53)(74, "span", 54);
      \u0275\u0275element(75, "i", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span", 55);
      \u0275\u0275text(77, "Session");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(78, "div", 56);
      \u0275\u0275elementStart(79, "div", 53)(80, "span", 54);
      \u0275\u0275element(81, "i", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "span", 55);
      \u0275\u0275text(83, "Demande");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "div", 58);
      \u0275\u0275template(85, StudentsSessionsComponent_ng_container_85_Template, 11, 3, "ng-container", 38)(86, StudentsSessionsComponent_ng_container_86_Template, 54, 8, "ng-container", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 59)(88, "button", 60);
      \u0275\u0275listener("click", function StudentsSessionsComponent_Template_button_click_88_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275element(89, "i", 61);
      \u0275\u0275text(90, "Annuler ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(91, StudentsSessionsComponent_button_91_Template, 4, 4, "button", 62);
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
      \u0275\u0275property("ngIf", !ctx.selectedSessionId);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedSessionId);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", true)("done", !!ctx.selectedSessionId);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("done", !!ctx.selectedSessionId);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", !!ctx.selectedSessionId);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", !ctx.selectedSessionId);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedSessionId);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.selectedSessionId);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, CustomPaginationComponent, DatePipe], styles: ['\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_toast-progress {\n  from {\n    width: 100%;\n  }\n  to {\n    width: 0%;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.qq-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.qq-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes _ngcontent-%COMP%_qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pq-kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 12px;\n}\n@media (max-width: 1200px) {\n  .pq-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .pq-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .pq-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.pq-kpi-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border-top: 3px solid transparent;\n}\n.pq-kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: currentColor;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.pq-kpi-card__icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.pq-kpi-card__body[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.pq-kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.pq-kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #94a3b8;\n  margin-top: 2px;\n  white-space: nowrap;\n}\n.pq-kpi-card--teal[_ngcontent-%COMP%] {\n  border-top-color: #069b8f;\n}\n.pq-kpi-card--teal[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.pq-kpi-card--teal.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #069b8f;\n}\n.pq-kpi-card--green[_ngcontent-%COMP%] {\n  border-top-color: #10b981;\n}\n.pq-kpi-card--green[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #10b981;\n}\n.pq-kpi-card--green.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #10b981;\n}\n.pq-kpi-card--orange[_ngcontent-%COMP%] {\n  border-top-color: #f59e0b;\n}\n.pq-kpi-card--orange[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #f59e0b;\n}\n.pq-kpi-card--orange.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #f59e0b;\n}\n.pq-kpi-card--red[_ngcontent-%COMP%] {\n  border-top-color: #ef4444;\n}\n.pq-kpi-card--red[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #ef4444;\n}\n.pq-kpi-card--red.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.pq-kpi-card--gray[_ngcontent-%COMP%] {\n  border-top-color: #94a3b8;\n}\n.pq-kpi-card--gray[_ngcontent-%COMP%]   .pq-kpi-card__icon[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.pq-kpi-card--gray.pq-kpi-card--active[_ngcontent-%COMP%] {\n  border-color: #94a3b8;\n}\n.sc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.sc-header__title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 4px;\n  letter-spacing: -0.3px;\n}\n.sc-header__subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n.sc-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.sc-header__toggle-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid #e2e8f0;\n  background: #fff;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sc-header__toggle-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sc-header__toggle-btn[_ngcontent-%COMP%]:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f5;\n}\n.sc-header__toggle-btn--active[_ngcontent-%COMP%] {\n  background: #069b8f !important;\n  border-color: #069b8f !important;\n  color: #fff !important;\n}\n.sc-header__new-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 20px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.4795031056, 115.7204968944, 106.7614906832) 100%);\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(6, 155, 143, 0.3);\n  transition: all 0.2s ease;\n}\n.sc-header__new-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.sc-header__new-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(6, 155, 143, 0.4);\n}\n.sc-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 14px 18px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.sc-filters__search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.sc-filters__search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 15px;\n  pointer-events: none;\n}\n.sc-filters__search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 14px 9px 36px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 50px;\n  font-size: 13px;\n  outline: none;\n  transition: all 0.2s ease;\n  background: #f8fafc;\n}\n.sc-filters__search-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.sc-filters__search-input[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.1);\n}\n.sc-filters__pills[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.sc-filters__pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid #e2e8f0;\n  background: #fff;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-filters__pill[_ngcontent-%COMP%]:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f5;\n}\n.sc-filters__pill--active[_ngcontent-%COMP%] {\n  background: #069b8f !important;\n  border-color: #069b8f !important;\n  color: #fff !important;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.25);\n}\n.sc-filters__pill--attente[_ngcontent-%COMP%]:hover {\n  border-color: #f59e0b;\n  color: #f59e0b;\n  background: #fffbeb;\n}\n.sc-filters__pill--validee[_ngcontent-%COMP%]:hover {\n  border-color: #10b981;\n  color: #10b981;\n  background: #f0fdf4;\n}\n.sc-filters__pill--refusee[_ngcontent-%COMP%]:hover {\n  border-color: #ef4444;\n  color: #ef4444;\n  background: #fef2f2;\n}\n.sc-filters__pill--annulee[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n  color: #475569;\n  background: #f1f5f9;\n}\n.sc-filters__pill-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  opacity: 0.8;\n}\n.sc-filters__reset[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.06);\n  border: 1.5px solid rgba(239, 68, 68, 0.2);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-filters__reset[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.12);\n  border-color: #ef4444;\n}\n.sc-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px 0;\n  color: #94a3b8;\n}\n.sc-loading__spinner[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n.sc-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 13px;\n}\n.sc-table-card[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  overflow: visible;\n}\n.sc-table-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  background: #fff;\n  border-bottom: 1px solid #f1f5f9;\n  border-radius: 14px 14px 0 0;\n}\n.sc-table-card__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  display: flex;\n  align-items: center;\n}\n.sc-table-card__count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 24px;\n  height: 24px;\n  padding: 0 8px;\n  background: #069b8f;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 700;\n  margin-left: 8px;\n}\n.sc-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  padding: 12px 16px;\n  white-space: nowrap;\n}\n.sc-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.sc-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.sc-table-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.sc-table-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n}\n.sc-row--refusee[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.025) !important;\n}\n.sc-row--validee[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.025) !important;\n}\n.sc-formation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.sc-formation__thumb[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 8px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid #e2e8f0;\n}\n.sc-formation__info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sc-formation__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.3;\n  margin-bottom: 3px;\n}\n.sc-formation__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.sc-formation__details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.sc-detail-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 9px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #f1f5f9;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n}\n.sc-detail-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.sc-detail-chip--award[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n  border-color: rgba(245, 158, 11, 0.2);\n}\n.sc-date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #475569;\n  font-weight: 500;\n}\n.sc-date--time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 400;\n  margin-top: 1px;\n}\n.sc-priorite[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.sc-priorite.priorite-urgente[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.sc-priorite.priorite-haute[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n}\n.sc-priorite.priorite-normale[_ngcontent-%COMP%] {\n  background: rgba(6, 155, 143, 0.1);\n  color: #069b8f;\n}\n.sc-priorite.priorite-basse[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.sc-statut-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  position: relative;\n}\n.sc-statut[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.sc-statut.statut-attente[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #f59e0b;\n}\n.sc-statut.statut-validee[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #10b981;\n}\n.sc-statut.statut-refusee[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #ef4444;\n}\n.sc-statut.statut-annulee[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #94a3b8;\n}\n.sc-statut-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.sc-statut-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.sc-statut-icon--validee[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.sc-statut-icon--refusee[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.sc-statut-icon--annulee[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.sc-motif-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.sc-motif-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #fef2f2;\n  color: #ef4444;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sc-motif-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.sc-motif-btn[_ngcontent-%COMP%]:hover {\n  background: #ef4444;\n  color: #fff;\n  border-color: #ef4444;\n}\n.sc-motif-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(100% + 10px);\n  left: 50%;\n  transform: translateX(-50%);\n  width: 260px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);\n  z-index: 200;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fadeIn 0.15s ease;\n}\n.sc-motif-tooltip[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -6px;\n  left: 50%;\n  width: 12px;\n  height: 12px;\n  background: #fff;\n  border-right: 1px solid #e2e8f0;\n  border-bottom: 1px solid #e2e8f0;\n  transform: translateX(-50%) rotate(45deg);\n}\n.sc-motif-tooltip__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 14px;\n  background: #fef2f2;\n  color: #ef4444;\n  font-size: 12px;\n  font-weight: 700;\n}\n.sc-motif-tooltip__header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sc-motif-tooltip__body[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 13px;\n  color: #475569;\n  line-height: 1.5;\n  margin: 0;\n}\n.sc-motif-tooltip__footer[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  background: #f8fafc;\n  border-top: 1px solid #f1f5f9;\n  font-size: 11px;\n  color: #94a3b8;\n  display: flex;\n  align-items: flex-start;\n  gap: 4px;\n}\n.sc-motif-tooltip__footer[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  line-height: 1.4;\n}\n.sc-action-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.sc-action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  transition: all 0.2s ease;\n}\n.sc-action-btn__tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%) translateY(4px);\n  background: #0f172a;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n  padding: 5px 10px;\n  border-radius: 6px;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.15s ease, transform 0.15s ease;\n  z-index: 100;\n}\n.sc-action-btn__tooltip[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 5px solid transparent;\n  border-top-color: #0f172a;\n}\n.sc-action-btn[_ngcontent-%COMP%]:hover   .sc-action-btn__tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0);\n}\n.sc-action-btn--danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-color: rgba(239, 68, 68, 0.25);\n}\n.sc-action-btn--danger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.sc-action-btn--danger[_ngcontent-%COMP%]:hover {\n  background: #ef4444;\n  border-color: #ef4444;\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.35);\n}\n.sc-action-btn--danger[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.sc-action-btn--primary[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  border-color: rgba(6, 155, 143, 0.25);\n}\n.sc-action-btn--primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #069b8f;\n}\n.sc-action-btn--primary[_ngcontent-%COMP%]:hover {\n  background: #069b8f;\n  border-color: #069b8f;\n  box-shadow: 0 4px 12px rgba(6, 155, 143, 0.35);\n}\n.sc-action-btn--primary[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.sc-btn-annuler[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid rgba(239, 68, 68, 0.3);\n  background: #fef2f2;\n  color: #ef4444;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-btn-annuler[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.sc-btn-annuler[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ef4444;\n  color: #fff;\n  border-color: #ef4444;\n}\n.sc-btn-annuler[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sc-btn-relancer[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid rgba(6, 155, 143, 0.3);\n  background: #e6f7f5;\n  color: #069b8f;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-btn-relancer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.sc-btn-relancer[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n}\n.sc-btn-relancer[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sc-grid-motif-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  border: 1.5px solid rgba(239, 68, 68, 0.3);\n  background: #fef2f2;\n  color: #ef4444;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-grid-motif-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.sc-grid-motif-btn[_ngcontent-%COMP%]:hover {\n  background: #ef4444;\n  color: #fff;\n  border-color: #ef4444;\n}\n.sc-btn--xs[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  padding: 0 !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50% !important;\n}\n.sc-btn--xs[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0 !important;\n}\n.sc-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\n  gap: 20px;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.sc-grid-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  cursor: pointer;\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.2s ease;\n  display: flex;\n  flex-direction: column;\n}\n.sc-grid-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border-color: #069b8f;\n}\n.sc-grid-card--validee[_ngcontent-%COMP%] {\n  border-top: 3px solid #10b981;\n}\n.sc-grid-card--refusee[_ngcontent-%COMP%] {\n  border-top: 3px solid #ef4444;\n}\n.sc-grid-card--attente[_ngcontent-%COMP%] {\n  border-top: 3px solid #f59e0b;\n}\n.sc-grid-card__cover[_ngcontent-%COMP%] {\n  position: relative;\n  height: 155px;\n  overflow: hidden;\n  background: #f1f5f9;\n}\n.sc-grid-card__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.4s ease;\n}\n.sc-grid-card[_ngcontent-%COMP%]:hover   .sc-grid-card__img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.sc-grid-card__cover-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.6) 0%,\n      rgba(0, 0, 0, 0.1) 55%,\n      transparent 100%);\n  display: flex;\n  align-items: flex-end;\n  padding: 12px 14px;\n}\n.sc-grid-card__priorite[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 10px !important;\n  padding: 3px 9px !important;\n}\n.sc-grid-card__body[_ngcontent-%COMP%] {\n  padding: 14px 16px 12px;\n  flex: 1;\n}\n.sc-grid-card__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n  line-height: 1.35;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.sc-grid-card__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.sc-grid-card__sub[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.sc-grid-card__chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-top: 8px;\n}\n.sc-grid-card__footer[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-top: 1px solid #f1f5f9;\n  background: #f8fafc;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.sc-grid-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.sc-grid-card__date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.sc-grid-card__date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.sc-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 72px 20px;\n  text-align: center;\n}\n.sc-empty__icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: #e6f7f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.sc-empty__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #069b8f;\n}\n.sc-empty__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #475569;\n  margin-bottom: 8px;\n}\n.sc-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin-bottom: 20px;\n}\n.lms-modal[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  overflow: hidden;\n  border: none;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);\n}\n.lms-modal__header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.099378882, 105.900621118, 97.701863354) 100%);\n  padding: 18px 24px;\n  border: none;\n}\n.lms-modal__header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 12px;\n}\n.lms-modal__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.lms-modal[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n  font-size: 16px;\n}\n.lms-modal__body[_ngcontent-%COMP%] {\n  padding: 28px 24px;\n  background: #f8fafc;\n  max-height: 72vh;\n  overflow-y: auto;\n}\n.lms-modal__body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n.lms-modal__body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f5f9;\n}\n.lms-modal__body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e2e8f0;\n  border-radius: 3px;\n}\n.lms-modal__footer[_ngcontent-%COMP%] {\n  background: #fff;\n  border-top: 1px solid #e2e8f0;\n  padding: 16px 24px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.lms-modal__footer--split[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n.lms-detail-chips[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.lms-detail-chips__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.lms-detail-section[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 16px 18px;\n}\n.lms-detail-section__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #334155;\n  display: flex;\n  align-items: center;\n  margin-bottom: 2px;\n}\n.lms-detail-section__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #069b8f;\n}\n.lms-detail-section__body[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #475569;\n  line-height: 1.6;\n  margin: 8px 0 0 0;\n}\n.lms-detail-section--danger[_ngcontent-%COMP%] {\n  border-color: rgba(239, 68, 68, 0.3);\n  background: #fef2f2;\n}\n.lms-detail-section--danger[_ngcontent-%COMP%]   .lms-detail-section__title[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.lms-detail-section--danger[_ngcontent-%COMP%]   .lms-detail-section__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.lms-detail-section--success[_ngcontent-%COMP%] {\n  border-color: rgba(16, 185, 129, 0.3);\n  background: #f0fdf4;\n}\n.lms-detail-section--success[_ngcontent-%COMP%]   .lms-detail-section__title[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.lms-detail-section--success[_ngcontent-%COMP%]   .lms-detail-section__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.lms-formation-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 12px;\n}\n.lms-formation-banner__img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid #e2e8f0;\n}\n.lms-formation-banner__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.lms-formation-banner__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 3px;\n}\n.lms-formation-banner__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.lms-formation-banner__tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.lms-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #f8fafc;\n  border-radius: 8px;\n  border: 1px solid #f1f5f9;\n  height: 100%;\n  transition: all 0.2s ease;\n}\n.lms-info-item[_ngcontent-%COMP%]:hover {\n  border-color: rgba(6, 155, 143, 0.25);\n  background: #e6f7f5;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.lms-info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.lms-info-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #94a3b8;\n  letter-spacing: 0.2px;\n  display: block;\n  margin-bottom: 2px;\n}\n.lms-info-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n  display: block;\n}\n.lms-formation-desc[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  background: #e6f7f5;\n  border-radius: 8px;\n  border-left: 3px solid #069b8f;\n}\n.lms-formation-desc__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #069b8f;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-bottom: 6px;\n}\n.lms-formation-desc__label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.lms-formation-desc__text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #475569;\n  line-height: 1.65;\n  margin: 0;\n  white-space: pre-line;\n}\n.cd-demande-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.cd-demande-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.cd-demande-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cd-demande-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #94a3b8;\n  min-width: 130px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.lms-meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 9px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #f1f5f9;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n.lms-meta-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.lms-meta-chip--teal[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  color: #069b8f;\n  border-color: rgba(6, 155, 143, 0.2);\n}\n.lms-meta-chip--success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #10b981;\n  border-color: rgba(16, 185, 129, 0.2);\n}\n.lms-meta-chip--purple[_ngcontent-%COMP%] {\n  background: #f5f3ff;\n  color: #7c3aed;\n  border-color: rgba(124, 58, 237, 0.2);\n}\n.lms-meta-chip--warning[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #f59e0b;\n  border-color: rgba(245, 158, 11, 0.2);\n}\n.lms-meta-chip--award[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n  border-color: rgba(245, 158, 11, 0.2);\n}\n.lms-btn-cancel[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 50px;\n  padding: 10px 22px;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.lms-btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.lms-btn-submit[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.4795031056, 115.7204968944, 106.7614906832) 100%);\n  color: #fff;\n  border: none;\n  border-radius: 50px;\n  padding: 10px 28px;\n  font-weight: 700;\n  font-size: 14px;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.4);\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.lms-btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(6, 155, 143, 0.5);\n  color: #fff;\n}\n.lms-btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.lms-toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 9999;\n  pointer-events: none;\n  opacity: 0;\n  transform: translateX(20px);\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n.lms-toast-container.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n  pointer-events: all;\n}\n.lms-toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  min-width: 320px;\n  max-width: 420px;\n  padding: 16px 18px;\n  border-radius: 14px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);\n  position: relative;\n  overflow: hidden;\n  background: #fff;\n}\n.lms-toast__icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.lms-toast__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.lms-toast__label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  font-size: 13px;\n  letter-spacing: 0.3px;\n  margin-bottom: 2px;\n}\n.lms-toast__message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.5;\n  opacity: 0.85;\n}\n.lms-toast__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 2px;\n  cursor: pointer;\n  font-size: 16px;\n  opacity: 0.6;\n  transition: all 0.2s ease;\n  color: #475569;\n}\n.lms-toast__close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.lms-toast__progress[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 3px;\n  width: 100%;\n  animation: _ngcontent-%COMP%_toast-progress 4s linear forwards;\n  border-radius: 0 0 14px 14px;\n}\n.lms-toast--success[_ngcontent-%COMP%] {\n  border-left: 4px solid #10b981;\n}\n.lms-toast--success[_ngcontent-%COMP%]   .lms-toast__icon[_ngcontent-%COMP%], \n.lms-toast--success[_ngcontent-%COMP%]   .lms-toast__label[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.lms-toast--success[_ngcontent-%COMP%]   .lms-toast__progress[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.lms-toast--error[_ngcontent-%COMP%] {\n  border-left: 4px solid #ef4444;\n}\n.lms-toast--error[_ngcontent-%COMP%]   .lms-toast__icon[_ngcontent-%COMP%], \n.lms-toast--error[_ngcontent-%COMP%]   .lms-toast__label[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.lms-toast--error[_ngcontent-%COMP%]   .lms-toast__progress[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.lms-toast--warning[_ngcontent-%COMP%] {\n  border-left: 4px solid #f59e0b;\n}\n.lms-toast--warning[_ngcontent-%COMP%]   .lms-toast__icon[_ngcontent-%COMP%], \n.lms-toast--warning[_ngcontent-%COMP%]   .lms-toast__label[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.lms-toast--warning[_ngcontent-%COMP%]   .lms-toast__progress[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.lms-progress-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 14px 28px;\n  background: #fff;\n  border-bottom: 1px solid #f1f5f9;\n}\n.lms-progress-bar__step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n  opacity: 0.35;\n  transition: all 0.2s ease;\n}\n.lms-progress-bar__step.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lms-progress-bar__step.done[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lms-progress-bar__dot[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 2px solid #e2e8f0;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  color: #94a3b8;\n  transition: all 0.2s ease;\n}\n.active[_ngcontent-%COMP%]    > .lms-progress-bar__dot[_ngcontent-%COMP%] {\n  border-color: #069b8f;\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.done[_ngcontent-%COMP%]    > .lms-progress-bar__dot[_ngcontent-%COMP%] {\n  border-color: #10b981;\n  background: #10b981;\n  color: #fff;\n}\n.lms-progress-bar__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #94a3b8;\n  white-space: nowrap;\n}\n.active[_ngcontent-%COMP%]    > .lms-progress-bar__label[_ngcontent-%COMP%] {\n  color: #069b8f;\n}\n.done[_ngcontent-%COMP%]    > .lms-progress-bar__label[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.lms-progress-bar__line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background: #e2e8f0;\n  margin: 0 6px;\n  margin-bottom: 16px;\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.lms-progress-bar__line.done[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.lms-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.lms-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.lms-list-item[_ngcontent-%COMP%]:hover {\n  border-color: #069b8f;\n  background: #e6f7f5;\n  transform: translateX(4px);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.lms-list-item[_ngcontent-%COMP%]:hover   .lms-list-item__arrow[_ngcontent-%COMP%] {\n  color: #069b8f;\n}\n.lms-list-item__icon-wrap[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 8px;\n  background: #e6f7f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #069b8f;\n  font-size: 18px;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n.lms-list-item__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.lms-list-item__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.lms-list-item__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.lms-list-item__desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  line-height: 1.4;\n  margin-bottom: 6px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.lms-list-item__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.lms-list-item__arrow[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 16px;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n}\n.lms-selected-recap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #e6f7f5;\n  border: 1.5px solid rgba(6, 155, 143, 0.2);\n  border-radius: 14px;\n  padding: 12px 16px;\n}\n.lms-selected-recap__icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 8px;\n  background: #069b8f;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 20px;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n.lms-selected-recap__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.lms-selected-recap__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.lms-selected-recap__label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #069b8f;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 2px;\n}\n.lms-selected-recap__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 2px;\n}\n.lms-selected-recap__date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n}\n.lms-step__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.lms-step__number[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #475569;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.lms-step__number--blue[_ngcontent-%COMP%] {\n  background: #069b8f;\n}\n.lms-step__title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  color: #0f172a;\n  margin: 0;\n}\n.lms-back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #069b8f;\n  background: #e6f7f5;\n  border: 1.5px solid rgba(6, 155, 143, 0.2);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.lms-back-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.lms-back-btn[_ngcontent-%COMP%]:hover {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n}\n.lms-input[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1.5px solid #e2e8f0;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.lms-input[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.12);\n}\n.lms-field-error[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.lms-divider[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 2px dashed #e2e8f0;\n  margin: 24px 0;\n}\n.lms-empty-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 24px;\n  border: 2px dashed #e2e8f0;\n  border-radius: 14px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.lms-empty-inline[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.5;\n}\n.lms-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 32px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n@media (max-width: 767px) {\n  .sc-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .sc-filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .sc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sc-motif-tooltip[_ngcontent-%COMP%] {\n    left: auto;\n    right: 0;\n    transform: none;\n  }\n  .sc-motif-tooltip[_ngcontent-%COMP%]::after {\n    left: auto;\n    right: 20px;\n    transform: rotate(45deg);\n  }\n  .lms-toast-container[_ngcontent-%COMP%] {\n    top: auto;\n    bottom: 20px;\n    right: 16px;\n    left: 16px;\n  }\n  .lms-toast[_ngcontent-%COMP%] {\n    min-width: unset;\n    width: 100%;\n  }\n  .lms-modal__body[_ngcontent-%COMP%] {\n    max-height: 65vh;\n  }\n  .lms-selected-recap[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .pq-kpi-card[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n@media (max-width: 991px) {\n  .sc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 575px) {\n  .sc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.sc-motif-tooltip__responsable[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  background: rgba(217, 119, 6, 0.07);\n  border-top: 1px solid rgba(217, 119, 6, 0.15);\n  font-size: 12px;\n  color: #d97706;\n  display: flex;\n  align-items: center;\n}\n.sc-motif-tooltip__responsable[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-left: 4px;\n}\n.lms-detail-section--info[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: rgba(59, 130, 246, 0.2);\n}\n.lms-detail-section--info[_ngcontent-%COMP%]   .lms-detail-section__title[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.lms-detail-section--info[_ngcontent-%COMP%]   .lms-detail-section__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n/*# sourceMappingURL=students-session.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentsSessionsComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-students-sessions", imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, CustomPaginationComponent], template: `<!-- TOAST -->\r
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
    <h3 class="sc-header__title">Mes demandes de sessions</h3>\r
    <p class="sc-header__subtitle">Suivez l'\xE9tat de vos demandes de sessions soumises \xE0 l'entreprise</p>\r
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
      <i class="isax isax-calendar-1"></i>\r
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
           placeholder="Rechercher une session..."\r
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
\r
<div class="qq-loading" *ngIf="loading">\r
  <div class="qq-loading__ring">\r
    <div></div><div></div><div></div><div></div>\r
  </div>\r
  <p>Chargement de vos demandes de sessions...</p>\r
</div>\r
\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!-- VUE TABLEAU                                -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<ng-container *ngIf="!loading && viewMode === 'table'">\r
  <div class="card sc-table-card" *ngIf="demandes.length > 0">\r
    <div class="card-header sc-table-card__header">\r
      <div class="sc-table-card__title">\r
        <i class="isax isax-calendar-1 text-primary me-2"></i>\r
        Historique des demandes de sessions\r
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
            <th style="min-width:300px;">Session</th>\r
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
              (click)="ouvrirDetail(demande, $event)">\r
\r
            <!-- SESSION -->\r
            <td>\r
              <div class="sc-formation">\r
                <img [src]="demande.image_affiche" class="sc-formation__thumb" alt="">\r
                <div class="sc-formation__info">\r
                  <div class="sc-formation__title">{{ demande.titre_affiche }}</div>\r
                  <small class="sc-formation__sub" *ngIf="demande.sous_titre_affiche">\r
                    <i class="isax isax-calendar-1 me-1"></i>\r
                    {{ demande.sous_titre_affiche }}\r
                  </small>\r
                  <div class="sc-formation__details">\r
                    <span class="sc-detail-chip" *ngIf="demande.session_formation?.type_display">\r
                      <i class="isax isax-calendar-1 me-1"></i>{{ demande.session_formation.type_display }}\r
                    </span>\r
                    <span class="sc-detail-chip" *ngIf="demande.session_formation?.lieu">\r
                      <i class="isax isax-location me-1"></i>{{ demande.session_formation.lieu }}\r
                    </span>\r
                    <span class="sc-detail-chip" *ngIf="demande.session_formation?.capacite_max">\r
                      <i class="isax isax-people me-1"></i>\r
                      {{ demande.places_restantes }}/{{ demande.session_formation.capacite_max }} places\r
                    </span>\r
                    <span class="sc-detail-chip sc-detail-chip--award"\r
                          *ngIf="demande.session_formation?.certificat_delivre">\r
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
                    <div class="sc-motif-tooltip__responsable"\r
                         *ngIf="showRefusePerson && demande.traite_par_nom">\r
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
         (click)="ouvrirDetail(demande, $event)">\r
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
          <i class="isax isax-calendar-1"></i>\r
          {{ demande.sous_titre_affiche }}\r
        </p>\r
        <div class="sc-grid-card__chips">\r
          <span class="sc-detail-chip" *ngIf="demande.session_formation?.type_display">\r
            <i class="isax isax-calendar-1 me-1"></i>{{ demande.session_formation.type_display }}\r
          </span>\r
          <span class="sc-detail-chip" *ngIf="demande.session_formation?.lieu">\r
            <i class="isax isax-location me-1"></i>{{ demande.session_formation.lieu }}\r
          </span>\r
          <span class="sc-detail-chip" *ngIf="demande.session_formation?.capacite_max">\r
            <i class="isax isax-people me-1"></i>\r
            {{ demande.places_restantes }}/{{ demande.session_formation.capacite_max }} places\r
          </span>\r
          <span class="sc-detail-chip sc-detail-chip--award"\r
                *ngIf="demande.session_formation?.certificat_delivre">\r
            <i class="isax isax-award me-1"></i>Certifiante\r
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
                  (click)="ouvrirDetail(demande, $event)">\r
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
  <div class="sc-empty__icon"><i class="isax isax-calendar-1"></i></div>\r
  <h5 class="sc-empty__title">Aucune demande de session trouv\xE9e</h5>\r
  <p>Vos futures demandes de sessions appara\xEEtront ici.</p>\r
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
<!-- MODAL D\xC9TAIL DEMANDE SESSION                                  -->\r
<!-- ============================================================= -->\r
<div class="modal fade" id="sessionDemandeDetailModal" tabindex="-1" aria-hidden="true">\r
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">\r
    <div class="modal-content lms-modal" *ngIf="demandeSelectionnee">\r
\r
      <!-- Header teal fixe -->\r
      <div class="modal-header lms-modal__header">\r
        <div class="d-flex align-items-center gap-3">\r
          <div class="lms-modal__icon"><i class="isax isax-calendar-1"></i></div>\r
          <div>\r
            <h5 class="modal-title mb-0">{{ demandeSelectionnee.titre_affiche }}</h5>\r
            <small>Demande du {{ demandeSelectionnee.created_at | date:'dd/MM/yyyy \xE0 HH:mm' }}</small>\r
          </div>\r
        </div>\r
        <button type="button" class="btn-close btn-close-white" (click)="fermerDetail()"></button>\r
      </div>\r
\r
      <div class="modal-body lms-modal__body">\r
\r
        <!-- Ligne chips statut + priorit\xE9 + type -->\r
        <div class="lms-detail-chips mb-4">\r
          <div class="lms-detail-chips__left">\r
            <span class="sc-statut" [ngClass]="getStatutClass(demandeSelectionnee.statut)">\r
              {{ demandeSelectionnee.statut_display }}\r
            </span>\r
            <span class="sc-priorite ms-2" [ngClass]="getPrioriteClass(demandeSelectionnee.priorite)">\r
              {{ demandeSelectionnee.priorite_display }}\r
            </span>\r
            <span class="lms-meta-chip ms-2" *ngIf="demandeSelectionnee.session_formation?.type_display">\r
              <i class="isax isax-calendar-1 me-1"></i>\r
              {{ demandeSelectionnee.session_formation.type_display }}\r
            </span>\r
            <span class="lms-meta-chip lms-meta-chip--award ms-2"\r
                  *ngIf="demandeSelectionnee.session_formation?.certificat_delivre">\r
              <i class="isax isax-award me-1"></i>Certifiante\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- SECTION 1 \u2014 Pr\xE9sentation de la session -->\r
        <div class="lms-detail-section mb-3">\r
          <div class="lms-detail-section__title">\r
            <i class="isax isax-calendar-1 me-2"></i>Session demand\xE9e\r
          </div>\r
\r
          <div class="lms-formation-banner mt-2">\r
            <img [src]="demandeSelectionnee.image_affiche"\r
                 class="lms-formation-banner__img" alt="">\r
            <div class="lms-formation-banner__body">\r
              <div class="lms-formation-banner__title">{{ demandeSelectionnee.titre_affiche }}</div>\r
              <div class="lms-formation-banner__sub" *ngIf="demandeSelectionnee.session_formation?.lieu">\r
                <i class="isax isax-location me-1"></i>{{ demandeSelectionnee.session_formation.lieu }}\r
              </div>\r
              <div class="lms-formation-banner__tags">\r
                <span class="lms-meta-chip lms-meta-chip--teal"\r
                      *ngIf="demandeSelectionnee.session_formation?.type_display">\r
                  <i class="isax isax-calendar-1 me-1"></i>{{ demandeSelectionnee.session_formation.type_display }}\r
                </span>\r
                <span class="lms-meta-chip" *ngIf="demandeSelectionnee.session_formation?.code_session">\r
                  <i class="isax isax-hashtag me-1"></i>{{ demandeSelectionnee.session_formation.code_session }}\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="row g-2 mt-3">\r
\r
            <div class="col-md-6" *ngIf="demandeSelectionnee.session_formation?.date_debut">\r
              <div class="lms-info-item">\r
                <i class="isax isax-calendar-2" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Date de d\xE9but</small>\r
                  <strong>\r
                    {{ demandeSelectionnee.session_formation.date_debut | date:'dd/MM/yyyy' }}\r
                    <span class="text-muted small ms-1">\r
                      {{ demandeSelectionnee.session_formation.date_debut | date:'HH:mm' }}\r
                    </span>\r
                  </strong>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6" *ngIf="demandeSelectionnee.session_formation?.date_fin">\r
              <div class="lms-info-item">\r
                <i class="isax isax-calendar-tick" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Date de fin</small>\r
                  <strong>{{ demandeSelectionnee.session_formation.date_fin | date:'dd/MM/yyyy' }}</strong>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6">\r
              <div class="lms-info-item">\r
                <i class="isax isax-clock" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Dur\xE9e</small>\r
                  <strong>{{ getDureeJours(demandeSelectionnee.session_formation) }} jour(s)</strong>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6" *ngIf="demandeSelectionnee.session_formation?.capacite_max">\r
              <div class="lms-info-item">\r
                <i class="isax isax-people" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Participants</small>\r
                  <strong>\r
                    {{ demandeSelectionnee.places_restantes }}\r
                    / {{ demandeSelectionnee.session_formation.capacite_max }}\r
                  </strong>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6" *ngIf="demandeSelectionnee.session_formation?.date_limite_inscription">\r
              <div class="lms-info-item">\r
                <i class="isax isax-calendar-remove" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Limite d'inscription</small>\r
                  <strong>{{ demandeSelectionnee.session_formation.date_limite_inscription | date:'dd/MM/yyyy' }}</strong>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6">\r
              <div class="lms-info-item">\r
                <i class="isax isax-award" style="color:#069b8f"></i>\r
                <div>\r
                  <small>Certification</small>\r
                  <strong>\r
                    {{ demandeSelectionnee.session_formation?.certificat_delivre ? 'Certificat d\xE9livr\xE9' : 'Non certifiante' }}\r
                  </strong>\r
                </div>\r
              </div>\r
            </div>\r
\r
          </div>\r
\r
          <div class="lms-formation-desc mt-3"\r
               *ngIf="demandeSelectionnee.statut === 'validee'\r
                      && demandeSelectionnee.session_formation?.instructions_acces\r
                      && demandeSelectionnee.session_formation?.type === 'distanciel'">\r
            <div class="lms-formation-desc__label">\r
              <i class="isax isax-link"></i>Instructions d'acc\xE8s\r
            </div>\r
            <p class="lms-formation-desc__text">\r
              {{ demandeSelectionnee.session_formation.instructions_acces }}\r
            </p>\r
          </div>\r
        </div>\r
\r
        <!-- SECTION 2 \u2014 \xC9tat de ma demande -->\r
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
        <!-- SECTION 3 \u2014 Motif de refus -->\r
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
        <!-- SECTION 4 \u2014 Validation -->\r
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
      <div class="modal-footer lms-modal__footer lms-modal__footer--split">\r
        <button class="btn lms-btn-cancel" (click)="fermerDetail()">\r
          <i class="isax isax-close-square me-1"></i>Fermer\r
        </button>\r
        <div class="d-flex gap-2" *ngIf="demandeSelectionnee.statut === 'en_attente'">\r
          <button class="btn sc-btn-annuler"\r
                  (click)="annulerDemande(demandeSelectionnee.id)">\r
            <i class="isax isax-close-circle me-1"></i>Annuler la demande\r
          </button>\r
          <button class="btn sc-btn-relancer"\r
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
<!-- MODAL NOUVELLE DEMANDE SESSION                                -->\r
<!-- ============================================================= -->\r
<div class="modal fade" id="demandeSessionModal" tabindex="-1" aria-hidden="true">\r
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">\r
    <div class="modal-content lms-modal">\r
\r
      <div class="modal-header lms-modal__header">\r
        <div class="d-flex align-items-center gap-3">\r
          <div class="lms-modal__icon"><i class="isax isax-calendar-1"></i></div>\r
          <div>\r
            <h5 class="modal-title mb-0">Demande de session</h5>\r
            <small *ngIf="!selectedSessionId">Sessions disponibles</small>\r
            <small *ngIf="selectedSessionId">\r
              <i class="isax isax-arrow-right-3 me-1" style="font-size:10px"></i>\r
              {{ getSelectedSessionTitle() }}\r
            </small>\r
          </div>\r
        </div>\r
        <button type="button" class="btn-close btn-close-white" (click)="closeModal()"></button>\r
      </div>\r
\r
      <!-- Barre de progression \xE9tapes -->\r
      <div class="lms-progress-bar">\r
        <div class="lms-progress-bar__step" [class.active]="true" [class.done]="!!selectedSessionId">\r
          <span class="lms-progress-bar__dot"><i class="isax isax-calendar-1"></i></span>\r
          <span class="lms-progress-bar__label">Session</span>\r
        </div>\r
        <div class="lms-progress-bar__line" [class.done]="!!selectedSessionId"></div>\r
        <div class="lms-progress-bar__step" [class.active]="!!selectedSessionId">\r
          <span class="lms-progress-bar__dot"><i class="isax isax-send-2"></i></span>\r
          <span class="lms-progress-bar__label">Demande</span>\r
        </div>\r
      </div>\r
\r
      <div class="modal-body lms-modal__body">\r
\r
        <!-- \u2500\u2500 \xC9TAPE 1 \u2014 Choisir une session \u2500\u2500 -->\r
        <ng-container *ngIf="!selectedSessionId">\r
          <div class="lms-step__header mb-3">\r
            <span class="lms-step__number lms-step__number--blue">1</span>\r
            <p class="lms-step__title">Choisir une session <span class="text-danger">*</span></p>\r
          </div>\r
          <div *ngIf="loadingSessions" class="lms-loading">\r
            <div class="spinner-border text-primary"></div>\r
            <span>Chargement des sessions...</span>\r
          </div>\r
          <div *ngIf="!loadingSessions && sessions.length > 0" class="lms-list">\r
            <div class="lms-list-item" *ngFor="let session of sessions" (click)="selectSession(session)">\r
              <div class="lms-list-item__icon-wrap">\r
                <img *ngIf="session.image_couverture" [src]="session.image_couverture"\r
                     class="lms-list-item__img" alt="">\r
                <i *ngIf="!session.image_couverture" class="isax isax-calendar-1"></i>\r
              </div>\r
              <div class="lms-list-item__body">\r
                <div class="lms-list-item__title">{{ session.formation?.titre ?? session.titre }}</div>\r
                <div class="lms-list-item__desc" *ngIf="session.date_debut">\r
                  <i class="isax isax-calendar-2 me-1"></i>\r
                  D\xE9but : {{ session.date_debut | date:'dd/MM/yyyy' }}\r
                  <span *ngIf="session.date_fin"> \u2192 {{ session.date_fin | date:'dd/MM/yyyy' }}</span>\r
                </div>\r
                <div class="lms-list-item__meta">\r
                  <span class="lms-meta-chip lms-meta-chip--teal" *ngIf="session.type_display">\r
                    <i class="isax isax-calendar-1 me-1"></i>{{ session.type_display }}\r
                  </span>\r
                  <span class="lms-meta-chip" *ngIf="session.lieu">\r
                    <i class="isax isax-location me-1"></i>{{ session.lieu }}\r
                  </span>\r
                  <span class="lms-meta-chip lms-meta-chip--success" *ngIf="session.places_restantes != null">\r
                    <i class="isax isax-people me-1"></i>{{ session.places_restantes }} place(s)\r
                  </span>\r
                  <span class="lms-meta-chip lms-meta-chip--award" *ngIf="session.certificat_delivre">\r
                    <i class="isax isax-award me-1"></i>Certifiante\r
                  </span>\r
                </div>\r
              </div>\r
              <div class="lms-list-item__arrow"><i class="isax isax-arrow-right-3"></i></div>\r
            </div>\r
          </div>\r
          <div *ngIf="!loadingSessions && sessions.length === 0" class="lms-empty-inline">\r
            <i class="isax isax-calendar-remove"></i>\r
            <span>Aucune session disponible actuellement</span>\r
          </div>\r
        </ng-container>\r
\r
        <!-- \u2500\u2500 \xC9TAPE 2 \u2014 Formulaire demande \u2500\u2500 -->\r
        <ng-container *ngIf="selectedSessionId">\r
          <button class="lms-back-btn mb-3" (click)="retourSessions()">\r
            <i class="isax isax-arrow-left me-1"></i> Retour aux sessions\r
          </button>\r
\r
          <div class="lms-selected-recap mb-4">\r
            <div class="lms-selected-recap__icon">\r
              <img *ngIf="selectedSession?.image_couverture"\r
                   [src]="selectedSession.image_couverture"\r
                   class="lms-selected-recap__img" alt="">\r
              <i *ngIf="!selectedSession?.image_couverture" class="isax isax-calendar-1"></i>\r
            </div>\r
            <div class="lms-selected-recap__body">\r
              <div class="lms-selected-recap__label">Session s\xE9lectionn\xE9e</div>\r
              <div class="lms-selected-recap__title">\r
                {{ selectedSession?.formation?.titre ?? selectedSession?.titre }}\r
              </div>\r
              <div class="lms-selected-recap__date" *ngIf="selectedSession?.date_debut">\r
                <i class="isax isax-calendar-2 me-1"></i>\r
                {{ selectedSession.date_debut | date:'dd/MM/yyyy' }}\r
                <span *ngIf="selectedSession?.date_fin"> \u2192 {{ selectedSession.date_fin | date:'dd/MM/yyyy' }}</span>\r
              </div>\r
            </div>\r
            <div class="d-flex flex-column gap-1 align-items-end">\r
              <span class="lms-meta-chip lms-meta-chip--teal" *ngIf="selectedSession?.type_display">\r
                {{ selectedSession.type_display }}\r
              </span>\r
              <span class="lms-meta-chip lms-meta-chip--success" *ngIf="selectedSession?.places_restantes != null">\r
                <i class="isax isax-people me-1"></i>{{ selectedSession.places_restantes }} place(s)\r
              </span>\r
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
                          placeholder="Pourquoi souhaitez-vous cette session ?"></textarea>\r
                <div *ngIf="form.get('motif_demande')?.invalid && form.get('motif_demande')?.touched"\r
                     class="lms-field-error">\r
                  <i class="isax isax-info-circle me-1"></i>Le motif est obligatoire.\r
                </div>\r
              </div>\r
              <div class="col-12">\r
                <label class="form-label fw-semibold">Objectifs personnels</label>\r
                <textarea class="form-control lms-input" formControlName="objectifs_personnels" rows="2"\r
                          placeholder="Qu'esp\xE9rez-vous acqu\xE9rir avec cette session ?"></textarea>\r
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
                *ngIf="selectedSessionId"\r
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
</div>`, styles: ['/* src/app/features/student/students-session/students-session.component.scss */\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes toast-progress {\n  from {\n    width: 100%;\n  }\n  to {\n    width: 0%;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.qq-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.qq-loading p {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring div {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring div:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring div:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring div:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pq-kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 12px;\n}\n@media (max-width: 1200px) {\n  .pq-kpi-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .pq-kpi-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .pq-kpi-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.pq-kpi-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border-top: 3px solid transparent;\n}\n.pq-kpi-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.pq-kpi-card--active {\n  border-color: currentColor;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.pq-kpi-card__icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.pq-kpi-card__body {\n  min-width: 0;\n}\n.pq-kpi-card__value {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.pq-kpi-card__label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #94a3b8;\n  margin-top: 2px;\n  white-space: nowrap;\n}\n.pq-kpi-card--teal {\n  border-top-color: #069b8f;\n}\n.pq-kpi-card--teal .pq-kpi-card__icon {\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.pq-kpi-card--teal.pq-kpi-card--active {\n  border-color: #069b8f;\n}\n.pq-kpi-card--green {\n  border-top-color: #10b981;\n}\n.pq-kpi-card--green .pq-kpi-card__icon {\n  background: #f0fdf4;\n  color: #10b981;\n}\n.pq-kpi-card--green.pq-kpi-card--active {\n  border-color: #10b981;\n}\n.pq-kpi-card--orange {\n  border-top-color: #f59e0b;\n}\n.pq-kpi-card--orange .pq-kpi-card__icon {\n  background: #fffbeb;\n  color: #f59e0b;\n}\n.pq-kpi-card--orange.pq-kpi-card--active {\n  border-color: #f59e0b;\n}\n.pq-kpi-card--red {\n  border-top-color: #ef4444;\n}\n.pq-kpi-card--red .pq-kpi-card__icon {\n  background: #fef2f2;\n  color: #ef4444;\n}\n.pq-kpi-card--red.pq-kpi-card--active {\n  border-color: #ef4444;\n}\n.pq-kpi-card--gray {\n  border-top-color: #94a3b8;\n}\n.pq-kpi-card--gray .pq-kpi-card__icon {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.pq-kpi-card--gray.pq-kpi-card--active {\n  border-color: #94a3b8;\n}\n.sc-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.sc-header__title {\n  font-size: 20px;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 4px;\n  letter-spacing: -0.3px;\n}\n.sc-header__subtitle {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n.sc-header__actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.sc-header__toggle-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid #e2e8f0;\n  background: #fff;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sc-header__toggle-btn i {\n  font-size: 14px;\n}\n.sc-header__toggle-btn:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f5;\n}\n.sc-header__toggle-btn--active {\n  background: #069b8f !important;\n  border-color: #069b8f !important;\n  color: #fff !important;\n}\n.sc-header__new-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 20px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.4795031056, 115.7204968944, 106.7614906832) 100%);\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(6, 155, 143, 0.3);\n  transition: all 0.2s ease;\n}\n.sc-header__new-btn i {\n  font-size: 16px;\n}\n.sc-header__new-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(6, 155, 143, 0.4);\n}\n.sc-filters {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 14px 18px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.sc-filters__search {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.sc-filters__search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 15px;\n  pointer-events: none;\n}\n.sc-filters__search-input {\n  width: 100%;\n  padding: 9px 14px 9px 36px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 50px;\n  font-size: 13px;\n  outline: none;\n  transition: all 0.2s ease;\n  background: #f8fafc;\n}\n.sc-filters__search-input::placeholder {\n  color: #94a3b8;\n}\n.sc-filters__search-input:focus {\n  border-color: #069b8f;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.1);\n}\n.sc-filters__pills {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.sc-filters__pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid #e2e8f0;\n  background: #fff;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-filters__pill:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n  background: #e6f7f5;\n}\n.sc-filters__pill--active {\n  background: #069b8f !important;\n  border-color: #069b8f !important;\n  color: #fff !important;\n  box-shadow: 0 2px 8px rgba(6, 155, 143, 0.25);\n}\n.sc-filters__pill--attente:hover {\n  border-color: #f59e0b;\n  color: #f59e0b;\n  background: #fffbeb;\n}\n.sc-filters__pill--validee:hover {\n  border-color: #10b981;\n  color: #10b981;\n  background: #f0fdf4;\n}\n.sc-filters__pill--refusee:hover {\n  border-color: #ef4444;\n  color: #ef4444;\n  background: #fef2f2;\n}\n.sc-filters__pill--annulee:hover {\n  border-color: #94a3b8;\n  color: #475569;\n  background: #f1f5f9;\n}\n.sc-filters__pill-count {\n  font-size: 11px;\n  font-weight: 600;\n  opacity: 0.8;\n}\n.sc-filters__reset {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.06);\n  border: 1.5px solid rgba(239, 68, 68, 0.2);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-filters__reset:hover {\n  background: rgba(239, 68, 68, 0.12);\n  border-color: #ef4444;\n}\n.sc-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px 0;\n  color: #94a3b8;\n}\n.sc-loading__spinner {\n  width: 44px;\n  height: 44px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n.sc-loading p {\n  margin-top: 16px;\n  font-size: 13px;\n}\n.sc-table-card {\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  overflow: visible;\n}\n.sc-table-card__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  background: #fff;\n  border-bottom: 1px solid #f1f5f9;\n  border-radius: 14px 14px 0 0;\n}\n.sc-table-card__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  display: flex;\n  align-items: center;\n}\n.sc-table-card__count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 24px;\n  height: 24px;\n  padding: 0 8px;\n  background: #069b8f;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 700;\n  margin-left: 8px;\n}\n.sc-table thead th {\n  font-size: 12px;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  padding: 12px 16px;\n  white-space: nowrap;\n}\n.sc-table tbody td {\n  padding: 14px 16px;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.sc-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.sc-table-row {\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.sc-table-row:hover td {\n  background: #f8fafc !important;\n}\n.sc-row--refusee {\n  background: rgba(239, 68, 68, 0.025) !important;\n}\n.sc-row--validee {\n  background: rgba(16, 185, 129, 0.025) !important;\n}\n.sc-formation {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.sc-formation__thumb {\n  width: 56px;\n  height: 56px;\n  border-radius: 8px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid #e2e8f0;\n}\n.sc-formation__info {\n  flex: 1;\n}\n.sc-formation__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.3;\n  margin-bottom: 3px;\n}\n.sc-formation__sub {\n  font-size: 12px;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.sc-formation__details {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.sc-detail-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 9px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #f1f5f9;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n}\n.sc-detail-chip i {\n  font-size: 11px;\n}\n.sc-detail-chip--award {\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n  border-color: rgba(245, 158, 11, 0.2);\n}\n.sc-date {\n  font-size: 13px;\n  color: #475569;\n  font-weight: 500;\n}\n.sc-date--time {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 400;\n  margin-top: 1px;\n}\n.sc-priorite {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 12px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.sc-priorite.priorite-urgente {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.sc-priorite.priorite-haute {\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n}\n.sc-priorite.priorite-normale {\n  background: rgba(6, 155, 143, 0.1);\n  color: #069b8f;\n}\n.sc-priorite.priorite-basse {\n  background: #f1f5f9;\n  color: #475569;\n}\n.sc-statut-cell {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  position: relative;\n}\n.sc-statut {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.sc-statut.statut-attente {\n  background: #fffbeb;\n  color: #f59e0b;\n}\n.sc-statut.statut-validee {\n  background: #f0fdf4;\n  color: #10b981;\n}\n.sc-statut.statut-refusee {\n  background: #fef2f2;\n  color: #ef4444;\n}\n.sc-statut.statut-annulee {\n  background: #f1f5f9;\n  color: #94a3b8;\n}\n.sc-statut-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.sc-statut-icon i {\n  font-size: 22px;\n}\n.sc-statut-icon--validee {\n  color: #10b981;\n}\n.sc-statut-icon--refusee {\n  color: #ef4444;\n}\n.sc-statut-icon--annulee {\n  color: #94a3b8;\n}\n.sc-motif-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.sc-motif-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #fef2f2;\n  color: #ef4444;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sc-motif-btn i {\n  font-size: 13px;\n}\n.sc-motif-btn:hover {\n  background: #ef4444;\n  color: #fff;\n  border-color: #ef4444;\n}\n.sc-motif-tooltip {\n  position: absolute;\n  bottom: calc(100% + 10px);\n  left: 50%;\n  transform: translateX(-50%);\n  width: 260px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);\n  z-index: 200;\n  overflow: hidden;\n  animation: fadeIn 0.15s ease;\n}\n.sc-motif-tooltip::after {\n  content: "";\n  position: absolute;\n  bottom: -6px;\n  left: 50%;\n  width: 12px;\n  height: 12px;\n  background: #fff;\n  border-right: 1px solid #e2e8f0;\n  border-bottom: 1px solid #e2e8f0;\n  transform: translateX(-50%) rotate(45deg);\n}\n.sc-motif-tooltip__header {\n  display: flex;\n  align-items: center;\n  padding: 10px 14px;\n  background: #fef2f2;\n  color: #ef4444;\n  font-size: 12px;\n  font-weight: 700;\n}\n.sc-motif-tooltip__header i {\n  font-size: 14px;\n}\n.sc-motif-tooltip__body {\n  padding: 12px 14px;\n  font-size: 13px;\n  color: #475569;\n  line-height: 1.5;\n  margin: 0;\n}\n.sc-motif-tooltip__footer {\n  padding: 8px 14px;\n  background: #f8fafc;\n  border-top: 1px solid #f1f5f9;\n  font-size: 11px;\n  color: #94a3b8;\n  display: flex;\n  align-items: flex-start;\n  gap: 4px;\n}\n.sc-motif-tooltip__footer em {\n  font-style: italic;\n  line-height: 1.4;\n}\n.sc-action-btn {\n  position: relative;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.sc-action-btn i {\n  font-size: 17px;\n  transition: all 0.2s ease;\n}\n.sc-action-btn__tooltip {\n  position: absolute;\n  bottom: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%) translateY(4px);\n  background: #0f172a;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n  padding: 5px 10px;\n  border-radius: 6px;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.15s ease, transform 0.15s ease;\n  z-index: 100;\n}\n.sc-action-btn__tooltip::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 5px solid transparent;\n  border-top-color: #0f172a;\n}\n.sc-action-btn:hover .sc-action-btn__tooltip {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0);\n}\n.sc-action-btn--danger {\n  background: #fef2f2;\n  border-color: rgba(239, 68, 68, 0.25);\n}\n.sc-action-btn--danger i {\n  color: #ef4444;\n}\n.sc-action-btn--danger:hover {\n  background: #ef4444;\n  border-color: #ef4444;\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.35);\n}\n.sc-action-btn--danger:hover i {\n  color: #fff;\n}\n.sc-action-btn--primary {\n  background: #e6f7f5;\n  border-color: rgba(6, 155, 143, 0.25);\n}\n.sc-action-btn--primary i {\n  color: #069b8f;\n}\n.sc-action-btn--primary:hover {\n  background: #069b8f;\n  border-color: #069b8f;\n  box-shadow: 0 4px 12px rgba(6, 155, 143, 0.35);\n}\n.sc-action-btn--primary:hover i {\n  color: #fff;\n}\n.sc-btn-annuler {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid rgba(239, 68, 68, 0.3);\n  background: #fef2f2;\n  color: #ef4444;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-btn-annuler i {\n  font-size: 13px;\n}\n.sc-btn-annuler:hover:not(:disabled) {\n  background: #ef4444;\n  color: #fff;\n  border-color: #ef4444;\n}\n.sc-btn-annuler:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sc-btn-relancer {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1.5px solid rgba(6, 155, 143, 0.3);\n  background: #e6f7f5;\n  color: #069b8f;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-btn-relancer i {\n  font-size: 13px;\n}\n.sc-btn-relancer:hover:not(:disabled) {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n}\n.sc-btn-relancer:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sc-grid-motif-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  border: 1.5px solid rgba(239, 68, 68, 0.3);\n  background: #fef2f2;\n  color: #ef4444;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.sc-grid-motif-btn i {\n  font-size: 12px;\n}\n.sc-grid-motif-btn:hover {\n  background: #ef4444;\n  color: #fff;\n  border-color: #ef4444;\n}\n.sc-btn--xs {\n  width: 30px;\n  height: 30px;\n  padding: 0 !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50% !important;\n}\n.sc-btn--xs i {\n  font-size: 14px;\n  margin: 0 !important;\n}\n.sc-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\n  gap: 20px;\n  animation: fadeIn 0.2s ease;\n}\n.sc-grid-card {\n  background: #fff;\n  border-radius: 20px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  cursor: pointer;\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.2s ease;\n  display: flex;\n  flex-direction: column;\n}\n.sc-grid-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border-color: #069b8f;\n}\n.sc-grid-card--validee {\n  border-top: 3px solid #10b981;\n}\n.sc-grid-card--refusee {\n  border-top: 3px solid #ef4444;\n}\n.sc-grid-card--attente {\n  border-top: 3px solid #f59e0b;\n}\n.sc-grid-card__cover {\n  position: relative;\n  height: 155px;\n  overflow: hidden;\n  background: #f1f5f9;\n}\n.sc-grid-card__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.4s ease;\n}\n.sc-grid-card:hover .sc-grid-card__img {\n  transform: scale(1.05);\n}\n.sc-grid-card__cover-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.6) 0%,\n      rgba(0, 0, 0, 0.1) 55%,\n      transparent 100%);\n  display: flex;\n  align-items: flex-end;\n  padding: 12px 14px;\n}\n.sc-grid-card__priorite {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 10px !important;\n  padding: 3px 9px !important;\n}\n.sc-grid-card__body {\n  padding: 14px 16px 12px;\n  flex: 1;\n}\n.sc-grid-card__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 4px;\n  line-height: 1.35;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.sc-grid-card__sub {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.sc-grid-card__sub i {\n  font-size: 12px;\n}\n.sc-grid-card__chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-top: 8px;\n}\n.sc-grid-card__footer {\n  padding: 10px 16px;\n  border-top: 1px solid #f1f5f9;\n  background: #f8fafc;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.sc-grid-card__actions {\n  display: flex;\n  gap: 6px;\n}\n.sc-grid-card__date {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.sc-grid-card__date i {\n  font-size: 12px;\n}\n.sc-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 72px 20px;\n  text-align: center;\n}\n.sc-empty__icon {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: #e6f7f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.sc-empty__icon i {\n  font-size: 2rem;\n  color: #069b8f;\n}\n.sc-empty__title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #475569;\n  margin-bottom: 8px;\n}\n.sc-empty p {\n  font-size: 13px;\n  color: #94a3b8;\n  margin-bottom: 20px;\n}\n.lms-modal {\n  border-radius: 20px;\n  overflow: hidden;\n  border: none;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);\n}\n.lms-modal__header {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.099378882, 105.900621118, 97.701863354) 100%);\n  padding: 18px 24px;\n  border: none;\n}\n.lms-modal__header small {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 12px;\n}\n.lms-modal__icon {\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.lms-modal .modal-title {\n  color: #fff;\n  font-weight: 700;\n  font-size: 16px;\n}\n.lms-modal__body {\n  padding: 28px 24px;\n  background: #f8fafc;\n  max-height: 72vh;\n  overflow-y: auto;\n}\n.lms-modal__body::-webkit-scrollbar {\n  width: 5px;\n}\n.lms-modal__body::-webkit-scrollbar-track {\n  background: #f1f5f9;\n}\n.lms-modal__body::-webkit-scrollbar-thumb {\n  background: #e2e8f0;\n  border-radius: 3px;\n}\n.lms-modal__footer {\n  background: #fff;\n  border-top: 1px solid #e2e8f0;\n  padding: 16px 24px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.lms-modal__footer--split {\n  justify-content: space-between;\n  align-items: center;\n}\n.lms-detail-chips {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.lms-detail-chips__left {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.lms-detail-section {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 16px 18px;\n}\n.lms-detail-section__title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #334155;\n  display: flex;\n  align-items: center;\n  margin-bottom: 2px;\n}\n.lms-detail-section__title i {\n  font-size: 15px;\n  color: #069b8f;\n}\n.lms-detail-section__body {\n  font-size: 13px;\n  color: #475569;\n  line-height: 1.6;\n  margin: 8px 0 0 0;\n}\n.lms-detail-section--danger {\n  border-color: rgba(239, 68, 68, 0.3);\n  background: #fef2f2;\n}\n.lms-detail-section--danger .lms-detail-section__title {\n  color: #ef4444;\n}\n.lms-detail-section--danger .lms-detail-section__title i {\n  color: #ef4444;\n}\n.lms-detail-section--success {\n  border-color: rgba(16, 185, 129, 0.3);\n  background: #f0fdf4;\n}\n.lms-detail-section--success .lms-detail-section__title {\n  color: #10b981;\n}\n.lms-detail-section--success .lms-detail-section__title i {\n  color: #10b981;\n}\n.lms-formation-banner {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 12px;\n}\n.lms-formation-banner__img {\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 1px solid #e2e8f0;\n}\n.lms-formation-banner__body {\n  flex: 1;\n  min-width: 0;\n}\n.lms-formation-banner__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 3px;\n}\n.lms-formation-banner__sub {\n  font-size: 12px;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.lms-formation-banner__tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.lms-info-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #f8fafc;\n  border-radius: 8px;\n  border: 1px solid #f1f5f9;\n  height: 100%;\n  transition: all 0.2s ease;\n}\n.lms-info-item:hover {\n  border-color: rgba(6, 155, 143, 0.25);\n  background: #e6f7f5;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.lms-info-item i {\n  font-size: 20px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.lms-info-item small {\n  font-size: 11px;\n  font-weight: 600;\n  color: #94a3b8;\n  letter-spacing: 0.2px;\n  display: block;\n  margin-bottom: 2px;\n}\n.lms-info-item strong {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n  display: block;\n}\n.lms-formation-desc {\n  padding: 12px 14px;\n  background: #e6f7f5;\n  border-radius: 8px;\n  border-left: 3px solid #069b8f;\n}\n.lms-formation-desc__label {\n  font-size: 11px;\n  font-weight: 700;\n  color: #069b8f;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-bottom: 6px;\n}\n.lms-formation-desc__label i {\n  font-size: 13px;\n}\n.lms-formation-desc__text {\n  font-size: 13px;\n  color: #475569;\n  line-height: 1.65;\n  margin: 0;\n  white-space: pre-line;\n}\n.cd-demande-detail {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.cd-demande-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.cd-demande-row:last-child {\n  border-bottom: none;\n}\n.cd-demande-label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #94a3b8;\n  min-width: 130px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.lms-meta-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 9px;\n  border-radius: 50px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #f1f5f9;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n.lms-meta-chip i {\n  font-size: 11px;\n}\n.lms-meta-chip--teal {\n  background: #e6f7f5;\n  color: #069b8f;\n  border-color: rgba(6, 155, 143, 0.2);\n}\n.lms-meta-chip--success {\n  background: #f0fdf4;\n  color: #10b981;\n  border-color: rgba(16, 185, 129, 0.2);\n}\n.lms-meta-chip--purple {\n  background: #f5f3ff;\n  color: #7c3aed;\n  border-color: rgba(124, 58, 237, 0.2);\n}\n.lms-meta-chip--warning {\n  background: #fffbeb;\n  color: #f59e0b;\n  border-color: rgba(245, 158, 11, 0.2);\n}\n.lms-meta-chip--award {\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n  border-color: rgba(245, 158, 11, 0.2);\n}\n.lms-btn-cancel {\n  background: #f1f5f9;\n  color: #475569;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 50px;\n  padding: 10px 22px;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.lms-btn-cancel:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.lms-btn-submit {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.4795031056, 115.7204968944, 106.7614906832) 100%);\n  color: #fff;\n  border: none;\n  border-radius: 50px;\n  padding: 10px 28px;\n  font-weight: 700;\n  font-size: 14px;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.4);\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.lms-btn-submit:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(6, 155, 143, 0.5);\n  color: #fff;\n}\n.lms-btn-submit:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.lms-toast-container {\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 9999;\n  pointer-events: none;\n  opacity: 0;\n  transform: translateX(20px);\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n.lms-toast-container.visible {\n  opacity: 1;\n  transform: translateX(0);\n  pointer-events: all;\n}\n.lms-toast {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  min-width: 320px;\n  max-width: 420px;\n  padding: 16px 18px;\n  border-radius: 14px;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);\n  position: relative;\n  overflow: hidden;\n  background: #fff;\n}\n.lms-toast__icon {\n  font-size: 22px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.lms-toast__body {\n  flex: 1;\n}\n.lms-toast__label {\n  display: block;\n  font-weight: 700;\n  font-size: 13px;\n  letter-spacing: 0.3px;\n  margin-bottom: 2px;\n}\n.lms-toast__message {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.5;\n  opacity: 0.85;\n}\n.lms-toast__close {\n  background: none;\n  border: none;\n  padding: 2px;\n  cursor: pointer;\n  font-size: 16px;\n  opacity: 0.6;\n  transition: all 0.2s ease;\n  color: #475569;\n}\n.lms-toast__close:hover {\n  opacity: 1;\n}\n.lms-toast__progress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 3px;\n  width: 100%;\n  animation: toast-progress 4s linear forwards;\n  border-radius: 0 0 14px 14px;\n}\n.lms-toast--success {\n  border-left: 4px solid #10b981;\n}\n.lms-toast--success .lms-toast__icon,\n.lms-toast--success .lms-toast__label {\n  color: #10b981;\n}\n.lms-toast--success .lms-toast__progress {\n  background: #10b981;\n}\n.lms-toast--error {\n  border-left: 4px solid #ef4444;\n}\n.lms-toast--error .lms-toast__icon,\n.lms-toast--error .lms-toast__label {\n  color: #ef4444;\n}\n.lms-toast--error .lms-toast__progress {\n  background: #ef4444;\n}\n.lms-toast--warning {\n  border-left: 4px solid #f59e0b;\n}\n.lms-toast--warning .lms-toast__icon,\n.lms-toast--warning .lms-toast__label {\n  color: #f59e0b;\n}\n.lms-toast--warning .lms-toast__progress {\n  background: #f59e0b;\n}\n.lms-progress-bar {\n  display: flex;\n  align-items: center;\n  padding: 14px 28px;\n  background: #fff;\n  border-bottom: 1px solid #f1f5f9;\n}\n.lms-progress-bar__step {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n  opacity: 0.35;\n  transition: all 0.2s ease;\n}\n.lms-progress-bar__step.active {\n  opacity: 1;\n}\n.lms-progress-bar__step.done {\n  opacity: 1;\n}\n.lms-progress-bar__dot {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 2px solid #e2e8f0;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  color: #94a3b8;\n  transition: all 0.2s ease;\n}\n.active > .lms-progress-bar__dot {\n  border-color: #069b8f;\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.done > .lms-progress-bar__dot {\n  border-color: #10b981;\n  background: #10b981;\n  color: #fff;\n}\n.lms-progress-bar__label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #94a3b8;\n  white-space: nowrap;\n}\n.active > .lms-progress-bar__label {\n  color: #069b8f;\n}\n.done > .lms-progress-bar__label {\n  color: #10b981;\n}\n.lms-progress-bar__line {\n  flex: 1;\n  height: 2px;\n  background: #e2e8f0;\n  margin: 0 6px;\n  margin-bottom: 16px;\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.lms-progress-bar__line.done {\n  background: #10b981;\n}\n.lms-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  animation: fadeIn 0.2s ease;\n}\n.lms-list-item {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.lms-list-item:hover {\n  border-color: #069b8f;\n  background: #e6f7f5;\n  transform: translateX(4px);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.lms-list-item:hover .lms-list-item__arrow {\n  color: #069b8f;\n}\n.lms-list-item__icon-wrap {\n  width: 42px;\n  height: 42px;\n  border-radius: 8px;\n  background: #e6f7f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #069b8f;\n  font-size: 18px;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n.lms-list-item__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.lms-list-item__body {\n  flex: 1;\n  min-width: 0;\n}\n.lms-list-item__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.lms-list-item__desc {\n  font-size: 12px;\n  color: #94a3b8;\n  line-height: 1.4;\n  margin-bottom: 6px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.lms-list-item__meta {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.lms-list-item__arrow {\n  color: #94a3b8;\n  font-size: 16px;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n}\n.lms-selected-recap {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #e6f7f5;\n  border: 1.5px solid rgba(6, 155, 143, 0.2);\n  border-radius: 14px;\n  padding: 12px 16px;\n}\n.lms-selected-recap__icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 8px;\n  background: #069b8f;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 20px;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n.lms-selected-recap__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.lms-selected-recap__body {\n  flex: 1;\n}\n.lms-selected-recap__label {\n  font-size: 10px;\n  font-weight: 600;\n  color: #069b8f;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 2px;\n}\n.lms-selected-recap__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 2px;\n}\n.lms-selected-recap__date {\n  font-size: 12px;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n}\n.lms-step__header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.lms-step__number {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #475569;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.lms-step__number--blue {\n  background: #069b8f;\n}\n.lms-step__title {\n  font-weight: 700;\n  font-size: 14px;\n  color: #0f172a;\n  margin: 0;\n}\n.lms-back-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #069b8f;\n  background: #e6f7f5;\n  border: 1.5px solid rgba(6, 155, 143, 0.2);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.lms-back-btn i {\n  font-size: 13px;\n}\n.lms-back-btn:hover {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n}\n.lms-input {\n  border-radius: 8px;\n  border: 1.5px solid #e2e8f0;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.lms-input:focus {\n  border-color: #069b8f;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.12);\n}\n.lms-field-error {\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.lms-divider {\n  border: none;\n  border-top: 2px dashed #e2e8f0;\n  margin: 24px 0;\n}\n.lms-empty-inline {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 24px;\n  border: 2px dashed #e2e8f0;\n  border-radius: 14px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.lms-empty-inline i {\n  font-size: 20px;\n  opacity: 0.5;\n}\n.lms-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 32px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n@media (max-width: 767px) {\n  .sc-header {\n    flex-direction: column;\n  }\n  .sc-filters {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .sc-grid {\n    grid-template-columns: 1fr;\n  }\n  .sc-motif-tooltip {\n    left: auto;\n    right: 0;\n    transform: none;\n  }\n  .sc-motif-tooltip::after {\n    left: auto;\n    right: 20px;\n    transform: rotate(45deg);\n  }\n  .lms-toast-container {\n    top: auto;\n    bottom: 20px;\n    right: 16px;\n    left: 16px;\n  }\n  .lms-toast {\n    min-width: unset;\n    width: 100%;\n  }\n  .lms-modal__body {\n    max-height: 65vh;\n  }\n  .lms-selected-recap {\n    flex-wrap: wrap;\n  }\n  .pq-kpi-card {\n    padding: 12px;\n  }\n}\n@media (max-width: 991px) {\n  .sc-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 575px) {\n  .sc-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.sc-motif-tooltip__responsable {\n  padding: 8px 14px;\n  background: rgba(217, 119, 6, 0.07);\n  border-top: 1px solid rgba(217, 119, 6, 0.15);\n  font-size: 12px;\n  color: #d97706;\n  display: flex;\n  align-items: center;\n}\n.sc-motif-tooltip__responsable strong {\n  font-weight: 700;\n  margin-left: 4px;\n}\n.lms-detail-section--info {\n  background: #eff6ff;\n  border-color: rgba(59, 130, 246, 0.2);\n}\n.lms-detail-section--info .lms-detail-section__title {\n  color: #3b82f6;\n}\n.lms-detail-section--info .lms-detail-section__title i {\n  color: #3b82f6;\n}\n/*# sourceMappingURL=students-session.component.css.map */\n'] }]
  }], () => [{ type: DemandeFormationService }, { type: FormationService }, { type: FormBuilder }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentsSessionsComponent, { className: "StudentsSessionsComponent", filePath: "app/features/student/students-session/students-session.component.ts", lineNumber: 25 });
})();
export {
  StudentsSessionsComponent
};
//# sourceMappingURL=chunk-JCSKNGS4.js.map
