import {
  CertificatService
} from "./chunk-TT7BYOVY.js";
import "./chunk-5RVU2RVV.js";
import "./chunk-FQH4LUZ5.js";
import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-IKOSZIEY.js";
import {
  HttpClient
} from "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf
} from "./chunk-5DIP3EXV.js";
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTSSTHJF.js";
import "./chunk-4MWRP73S.js";

// src/app/features/instructor/instructor-certificate/instructor-certificate.component.ts
function InstructorCertificateComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "span", 8);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function InstructorCertificateComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 10);
    \u0275\u0275listener("click", function InstructorCertificateComponent_div_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function InstructorCertificateComponent_ng_container_2_tr_70_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cert_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", cert_r5.formateur == null ? null : cert_r5.formateur.prenom, " ", cert_r5.formateur == null ? null : cert_r5.formateur.nom, " ");
  }
}
function InstructorCertificateComponent_ng_container_2_tr_70_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function InstructorCertificateComponent_ng_container_2_tr_70_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275element(1, "i", 58);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cert_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, cert_r5.date_expiration, "dd/MM/yyyy"), " ");
  }
}
function InstructorCertificateComponent_ng_container_2_tr_70_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cert_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, cert_r5.date_expiration, "dd/MM/yyyy"), " ");
  }
}
function InstructorCertificateComponent_ng_container_2_tr_70_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1, "Illimit\xE9e");
    \u0275\u0275elementEnd();
  }
}
function InstructorCertificateComponent_ng_container_2_tr_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 42)(3, "div", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 45);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "div", 46);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275template(14, InstructorCertificateComponent_ng_container_2_tr_70_span_14_Template, 2, 2, "span", 47)(15, InstructorCertificateComponent_ng_container_2_tr_70_span_15_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 48);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275template(21, InstructorCertificateComponent_ng_container_2_tr_70_span_21_Template, 4, 4, "span", 49)(22, InstructorCertificateComponent_ng_container_2_tr_70_span_22_Template, 3, 4, "span", 47)(23, InstructorCertificateComponent_ng_container_2_tr_70_span_23_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "span", 50);
    \u0275\u0275element(26, "i", 51);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td")(29, "div", 52)(30, "button", 53);
    \u0275\u0275listener("click", function InstructorCertificateComponent_ng_container_2_tr_70_Template_button_click_30_listener() {
      const cert_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetails(cert_r5));
    });
    \u0275\u0275element(31, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 55);
    \u0275\u0275listener("click", function InstructorCertificateComponent_ng_container_2_tr_70_Template_button_click_32_listener() {
      const cert_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadPdf(cert_r5));
    });
    \u0275\u0275element(33, "i", 56);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cert_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r1.getAvatarStyle(cert_r5.employe_id).bg)("color", ctx_r1.getAvatarStyle(cert_r5.employe_id).color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials((cert_r5.employe == null ? null : cert_r5.employe.name) || ""), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", cert_r5.employe == null ? null : cert_r5.employe.prenom, " ", cert_r5.employe == null ? null : cert_r5.employe.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cert_r5.employe == null ? null : cert_r5.employe.fonction);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cert_r5.formation == null ? null : cert_r5.formation.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", cert_r5.formateur);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cert_r5.formateur);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 22, cert_r5.date_delivrance, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", cert_r5.date_expiration && ctx_r1.isExpiringSoon(cert_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cert_r5.date_expiration && !ctx_r1.isExpiringSoon(cert_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cert_r5.date_expiration);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ip-cert-badge--valide", cert_r5.statut === "valide")("ip-cert-badge--expire", cert_r5.statut === "expir\xE9")("ip-cert-badge--revoque", cert_r5.statut === "r\xE9voqu\xE9");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", cert_r5.statut === "valide" ? "Valide" : cert_r5.statut === "expir\xE9" ? "Expir\xE9" : "R\xE9voqu\xE9", " ");
  }
}
function InstructorCertificateComponent_ng_container_2_tr_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 59);
    \u0275\u0275element(2, "i", 18);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Aucun certificat trouv\xE9");
    \u0275\u0275elementEnd()()();
  }
}
function InstructorCertificateComponent_ng_container_2_div_72_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function InstructorCertificateComponent_ng_container_2_div_72_ng_container_3_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function InstructorCertificateComponent_ng_container_2_div_72_ng_container_3_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const p_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ip-page-btn--active", p_r8 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r8);
  }
}
function InstructorCertificateComponent_ng_container_2_div_72_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InstructorCertificateComponent_ng_container_2_div_72_ng_container_3_span_1_Template, 2, 0, "span", 64)(2, InstructorCertificateComponent_ng_container_2_div_72_ng_container_3_button_2_Template, 2, 3, "button", 65);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r8 === -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r8 !== -1);
  }
}
function InstructorCertificateComponent_ng_container_2_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "button", 61);
    \u0275\u0275listener("click", function InstructorCertificateComponent_ng_container_2_div_72_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(2, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, InstructorCertificateComponent_ng_container_2_div_72_ng_container_3_Template, 3, 2, "ng-container", 40);
    \u0275\u0275elementStart(4, "button", 61);
    \u0275\u0275listener("click", function InstructorCertificateComponent_ng_container_2_div_72_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(5, "i", 63);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function InstructorCertificateComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "div")(3, "h5", 12);
    \u0275\u0275text(4, " Certificats ");
    \u0275\u0275elementStart(5, "span", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 14);
    \u0275\u0275text(8, "Certificats d\xE9livr\xE9s pour vos formations");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 15)(10, "div", 16)(11, "div", 17);
    \u0275\u0275element(12, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "div", 19);
    \u0275\u0275text(15, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 20);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 16)(19, "div", 21);
    \u0275\u0275element(20, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div")(22, "div", 19);
    \u0275\u0275text(23, "Valides");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 20);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 16)(27, "div", 23);
    \u0275\u0275element(28, "i", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div")(30, "div", 19);
    \u0275\u0275text(31, "Expir\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 20);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 25)(35, "div", 26)(36, "div", 27)(37, "div", 28);
    \u0275\u0275element(38, "i", 29);
    \u0275\u0275elementStart(39, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCertificateComponent_ng_container_2_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function InstructorCertificateComponent_ng_container_2_Template_input_ngModelChange_39_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 31)(41, "select", 32);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCertificateComponent_ng_container_2_Template_select_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedStatus, $event) || (ctx_r1.selectedStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function InstructorCertificateComponent_ng_container_2_Template_select_ngModelChange_41_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementStart(42, "option", 33);
    \u0275\u0275text(43, "Tous les statuts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 34);
    \u0275\u0275text(45, "Valide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 35);
    \u0275\u0275text(47, "Expir\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 36);
    \u0275\u0275text(49, "R\xE9voqu\xE9");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(50, "div", 37)(51, "div", 38)(52, "table", 39)(53, "thead")(54, "tr")(55, "th");
    \u0275\u0275text(56, "Employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th");
    \u0275\u0275text(58, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "th");
    \u0275\u0275text(60, "Formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "th");
    \u0275\u0275text(62, "D\xE9livr\xE9 le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "th");
    \u0275\u0275text(64, "Expiration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "th");
    \u0275\u0275text(66, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "th");
    \u0275\u0275text(68, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "tbody");
    \u0275\u0275template(70, InstructorCertificateComponent_ng_container_2_tr_70_Template, 34, 25, "tr", 40)(71, InstructorCertificateComponent_ng_container_2_tr_71_Template, 5, 0, "tr", 2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(72, InstructorCertificateComponent_ng_container_2_div_72_Template, 6, 3, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.filteredCertificates.length);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.certificates.length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.totalValides);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.totalExpires);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedStatus);
    \u0275\u0275advance(29);
    \u0275\u0275property("ngForOf", ctx_r1.getPaginatedCertificates());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredCertificates.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
function InstructorCertificateComponent_div_5_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 105)(2, "div", 106);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 107);
    \u0275\u0275text(5, "Dur\xE9e totale");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedCertificate.formation == null ? null : ctx_r1.selectedCertificate.formation.duree_totale, "h");
  }
}
function InstructorCertificateComponent_div_5_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 Valide jusqu'au ", \u0275\u0275pipeBind4(2, 1, ctx_r1.selectedCertificate.date_expiration, "dd MMMM yyyy", "", "fr-FR"), " ");
  }
}
function InstructorCertificateComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275element(1, "div", 69);
    \u0275\u0275elementStart(2, "div", 70)(3, "div", 71);
    \u0275\u0275element(4, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h5", 72);
    \u0275\u0275text(7, "Certificat de r\xE9ussite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 73);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "button", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "div", 75);
    \u0275\u0275elementStart(12, "div", 76)(13, "div", 77)(14, "div", 78)(15, "div", 79);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div")(18, "div", 80);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 81);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 82);
    \u0275\u0275text(23, "Certificat de r\xE9ussite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 83);
    \u0275\u0275text(25, "a compl\xE9t\xE9 avec succ\xE8s la formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 84);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, InstructorCertificateComponent_div_5_div_28_Template, 6, 1, "div", 85);
    \u0275\u0275elementStart(29, "div", 86)(30, "div", 87);
    \u0275\u0275element(31, "div", 88);
    \u0275\u0275elementStart(32, "div", 89);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 90);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 91);
    \u0275\u0275element(37, "i", 92);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 93);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "date");
    \u0275\u0275template(41, InstructorCertificateComponent_div_5_ng_container_41_Template, 3, 6, "ng-container", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 94)(43, "div", 95)(44, "div", 96);
    \u0275\u0275element(45, "i", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div")(47, "div", 98);
    \u0275\u0275text(48, "Code unique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 99);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 95)(52, "div", 96);
    \u0275\u0275element(53, "i", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div")(55, "div", 98);
    \u0275\u0275text(56, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div")(58, "span", 50);
    \u0275\u0275element(59, "i", 51);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275element(61, "div", 75);
    \u0275\u0275elementStart(62, "div", 101)(63, "button", 102);
    \u0275\u0275text(64, "Fermer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "button", 103);
    \u0275\u0275listener("click", function InstructorCertificateComponent_div_5_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadPdf(ctx_r1.selectedCertificate));
    });
    \u0275\u0275element(66, "i", 56);
    \u0275\u0275text(67, " T\xE9l\xE9charger PDF ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.getScoreColor(ctx_r1.selectedCertificate.score_final));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("N\xB0 ", ctx_r1.selectedCertificate.code_unique);
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("background", ctx_r1.getScoreColor(ctx_r1.selectedCertificate.score_final));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials((ctx_r1.selectedCertificate.employe == null ? null : ctx_r1.selectedCertificate.employe.name) || ""), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedCertificate.employe == null ? null : ctx_r1.selectedCertificate.employe.prenom, " ", ctx_r1.selectedCertificate.employe == null ? null : ctx_r1.selectedCertificate.employe.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedCertificate.employe == null ? null : ctx_r1.selectedCertificate.employe.fonction);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("color", ctx_r1.getScoreColor(ctx_r1.selectedCertificate.score_final));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCertificate.formation == null ? null : ctx_r1.selectedCertificate.formation.titre, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCertificate.formation == null ? null : ctx_r1.selectedCertificate.formation.duree_totale);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedCertificate.formateur == null ? null : ctx_r1.selectedCertificate.formateur.prenom, " ", ctx_r1.selectedCertificate.formateur == null ? null : ctx_r1.selectedCertificate.formateur.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Formateur \xB7 ", ctx_r1.selectedCertificate.formation == null ? null : ctx_r1.selectedCertificate.formation.titre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" D\xE9livr\xE9 le ", \u0275\u0275pipeBind4(40, 26, ctx_r1.selectedCertificate.date_delivrance, "dd MMMM yyyy", "", "fr-FR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedCertificate.date_expiration);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.selectedCertificate.code_unique);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("ip-cert-badge--valide", ctx_r1.selectedCertificate.statut === "valide")("ip-cert-badge--expire", ctx_r1.selectedCertificate.statut === "expir\xE9")("ip-cert-badge--revoque", ctx_r1.selectedCertificate.statut === "r\xE9voqu\xE9");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCertificate.statut === "valide" ? "Valide" : ctx_r1.selectedCertificate.statut === "expir\xE9" ? "Expir\xE9" : "R\xE9voqu\xE9", " ");
  }
}
var InstructorCertificateComponent = class _InstructorCertificateComponent {
  http;
  certService;
  certificates = [];
  filteredCertificates = [];
  loading = false;
  error = "";
  selectedCertificate = null;
  searchTerm = "";
  selectedStatus = "";
  currentPage = 1;
  itemsPerPage = 10;
  apiUrl = environment.apiUrl;
  constructor(http, certService) {
    this.http = http;
    this.certService = certService;
  }
  ngOnInit() {
    this.loadCertificates();
  }
  loadCertificates() {
    this.loading = true;
    this.error = "";
    this.http.get(`${this.apiUrl}/certificats`).subscribe({
      next: (data) => {
        this.certificates = data;
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.error = "Erreur lors du chargement des certificats.";
        this.loading = false;
      }
    });
  }
  applyFilters() {
    this.filteredCertificates = this.certificates.filter((c) => {
      const q = this.searchTerm.toLowerCase();
      const matchSearch = !q || c.code_unique.toLowerCase().includes(q) || c.employe?.name?.toLowerCase().includes(q) || c.formation?.titre?.toLowerCase().includes(q);
      const matchStatus = !this.selectedStatus || c.statut === this.selectedStatus;
      return matchSearch && matchStatus;
    });
    this.currentPage = 1;
  }
  get totalPages() {
    return Math.ceil(this.filteredCertificates.length / this.itemsPerPage);
  }
  getPaginatedCertificates() {
    const s = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredCertificates.slice(s, s + this.itemsPerPage);
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages)
      this.currentPage = page;
  }
  get pages() {
    const total = this.totalPages;
    if (total <= 7)
      return Array.from({ length: total }, (_, i) => i + 1);
    const p = this.currentPage;
    const pages = [1];
    if (p > 3)
      pages.push(-1);
    for (let i = Math.max(2, p - 1); i <= Math.min(total - 1, p + 1); i++)
      pages.push(i);
    if (p < total - 2)
      pages.push(-1);
    pages.push(total);
    return pages;
  }
  openDetails(cert) {
    this.selectedCertificate = cert;
    setTimeout(() => {
      const el = document.getElementById("inst_cert_details_modal");
      if (el)
        new window.bootstrap.Modal(el).show();
    }, 50);
  }
  downloading = false;
  downloadPdf(cert) {
    if (this.downloading)
      return;
    this.downloading = true;
    this.certService.downloadPdf(cert).finally(() => {
      this.downloading = false;
    });
  }
  getInitials(name) {
    return name?.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase() || "?";
  }
  avatarColors = ["#E6F1FB,#0C447C", "#E1F5EE,#085041", "#EEEDFE,#3C3489", "#FAEEDA,#633806", "#F1EFE8,#444441"];
  getAvatarStyle(id) {
    const pair = this.avatarColors[id % this.avatarColors.length].split(",");
    return { bg: pair[0], color: pair[1] };
  }
  getScoreColor(score) {
    if (!score)
      return "#6C757D";
    const n = parseFloat(score);
    if (n >= 80)
      return "#059669";
    if (n >= 60)
      return "#D97706";
    return "#DC3545";
  }
  isExpiringSoon(cert) {
    if (!cert.date_expiration)
      return false;
    const days = (new Date(cert.date_expiration).getTime() - Date.now()) / 864e5;
    return days > 0 && days <= 60;
  }
  parseFloat(v) {
    return parseFloat(v);
  }
  get totalValides() {
    return this.certificates.filter((c) => c.statut === "valide").length;
  }
  get totalExpires() {
    return this.certificates.filter((c) => c.statut === "expir\xE9").length;
  }
  static \u0275fac = function InstructorCertificateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorCertificateComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(CertificatService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorCertificateComponent, selectors: [["app-instructor-certificate"]], decls: 6, vars: 4, consts: [["class", "ip-loader", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible", 4, "ngIf"], [4, "ngIf"], ["id", "inst_cert_details_modal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "ip-modal-dialog"], ["class", "modal-content ip-modal-content", 4, "ngIf"], [1, "ip-loader"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "alert", "alert-danger", "alert-dismissible"], ["type", "button", 1, "btn-close", 3, "click"], [1, "ip-page-head"], [1, "ip-page-head__title"], [1, "ip-count"], [1, "ip-page-head__sub"], [1, "ip-kpi-row"], [1, "ip-kpi-card"], [1, "ip-kpi-icon"], [1, "isax", "isax-award"], [1, "ip-kpi-label"], [1, "ip-kpi-value"], [1, "ip-kpi-icon", "ip-kpi-icon--success"], [1, "isax", "isax-tick-circle"], [1, "ip-kpi-icon", "ip-kpi-icon--warn"], [1, "isax", "isax-clock"], [1, "ip-card", "ip-filter-card"], [1, "ip-filter-row"], [1, "ip-filter-group", "ip-filter-group--search"], [1, "ip-input-icon-wrap"], [1, "isax", "isax-search-normal", "ip-input-icon"], ["type", "text", "placeholder", "Code, employ\xE9, formation\u2026", 1, "ip-input", "ip-input--icon", 3, "ngModelChange", "ngModel"], [1, "ip-filter-group"], [1, "ip-input", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "valide"], ["value", "expir\xE9"], ["value", "r\xE9voqu\xE9"], [1, "ip-card"], [1, "table-responsive"], [1, "table", "ip-table"], [4, "ngFor", "ngForOf"], ["class", "ip-pagination", 4, "ngIf"], [1, "ip-user-cell"], [1, "ip-avatar"], [1, "ip-user-name"], [1, "ip-user-sub"], [1, "ip-formation-name"], ["class", "text-muted", 4, "ngIf"], [1, "text-muted"], ["class", "ip-expire-warn", 4, "ngIf"], [1, "ip-cert-badge"], [1, "fa-solid", "fa-circle"], [1, "ip-actions"], ["type", "button", "title", "D\xE9tails", 1, "ip-action-btn", 3, "click"], [1, "isax", "isax-eye"], ["type", "button", "title", "T\xE9l\xE9charger PDF", 1, "ip-action-btn", 3, "click"], [1, "isax", "isax-document-download"], [1, "ip-expire-warn"], [1, "fa-solid", "fa-triangle-exclamation"], ["colspan", "7", 1, "ip-empty"], [1, "ip-pagination"], ["type", "button", 1, "ip-page-btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], [1, "isax", "isax-arrow-right-3"], ["class", "ip-page-ellipsis", 4, "ngIf"], ["type", "button", "class", "ip-page-btn", 3, "ip-page-btn--active", "click", 4, "ngIf"], [1, "ip-page-ellipsis"], ["type", "button", 1, "ip-page-btn", 3, "click"], [1, "modal-content", "ip-modal-content"], [1, "ip-cert-accent"], [1, "ip-modal-header"], [1, "ip-modal-icon"], [1, "ip-modal-title"], [1, "ip-modal-sub"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close", "ms-auto"], [1, "ip-modal-divider"], [1, "ip-modal-body"], [1, "ip-cert-preview"], [1, "ip-cert-logo"], [1, "ip-cert-logo-mark"], [1, "ip-cert-logo-text"], [1, "ip-cert-logo-sub"], [1, "ip-cert-label"], [1, "ip-cert-action-text"], [1, "ip-cert-formation-title"], ["class", "ip-cert-score-row", 4, "ngIf"], [1, "ip-cert-sig-row"], [1, "ip-cert-sig"], [1, "ip-cert-sig-line"], [1, "ip-cert-sig-name"], [1, "ip-cert-sig-role"], [1, "ip-cert-qr"], [1, "isax", "isax-scan-barcode"], [1, "ip-cert-validity"], [1, "ip-detail-row", "ip-detail-row--mt"], [1, "ip-detail-block", "ip-detail-block--half"], [1, "ip-detail-icon-wrap"], [1, "isax", "isax-tag"], [1, "ip-detail-label"], [1, "ip-detail-value", "ip-detail-value--mono"], [1, "isax", "isax-status"], [1, "ip-modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "ip-btn", "ip-btn--ghost"], ["type", "button", 1, "ip-btn", "ip-btn--primary", 3, "click"], [1, "ip-cert-score-row"], [1, "ip-cert-score-item"], [1, "ip-cert-score-val"], [1, "ip-cert-score-label"]], template: function InstructorCertificateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, InstructorCertificateComponent_div_0_Template, 4, 0, "div", 0)(1, InstructorCertificateComponent_div_1_Template, 3, 1, "div", 1)(2, InstructorCertificateComponent_ng_container_2_Template, 73, 9, "ng-container", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275template(5, InstructorCertificateComponent_div_5_Template, 68, 31, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.selectedCertificate);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n\n.ip-loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.ip-kpi-card[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ip-kpi-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.ip-kpi-icon--success[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-kpi-icon--warn[_ngcontent-%COMP%] {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-kpi-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 3px;\n}\n.ip-kpi-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-filter-card[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  margin-bottom: 20px;\n  overflow: visible;\n}\n.ip-filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.ip-filter-group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.ip-filter-group--search[_ngcontent-%COMP%] {\n  flex: 2;\n  min-width: 220px;\n}\n.ip-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-table[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ip-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #FAFBFF;\n}\n.ip-user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n}\n.ip-user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-user-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-formation-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-score-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 6px;\n}\n.ip-expire-warn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #D97706;\n}\n.ip-expire-warn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ip-cert-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 6px;\n}\n.ip-cert-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n.ip-cert-badge--valide[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-cert-badge--expire[_ngcontent-%COMP%] {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-cert-badge--revoque[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.ip-action-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n  text-decoration: none;\n}\n.ip-action-btn[_ngcontent-%COMP%]:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-action-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: default;\n  pointer-events: none;\n}\n.ip-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 14px 16px;\n  border-top: 1px solid #E9ECEF;\n}\n.ip-page-btn[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 8px;\n  transition: all 0.12s;\n}\n.ip-page-btn[_ngcontent-%COMP%]:hover:not([disabled]) {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-page-btn--active[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  color: #fff;\n  border-color: #D4AF37;\n  font-weight: 600;\n}\n.ip-page-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: default;\n}\n.ip-page-ellipsis[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  padding: 0 4px;\n}\n.ip-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon[_ngcontent-%COMP%] {\n  padding-left: 34px;\n}\n.ip-input-icon-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ip-input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.ip-btn--primary[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary[_ngcontent-%COMP%]:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-btn--ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n}\n.ip-modal-dialog[_ngcontent-%COMP%] {\n  max-width: 540px;\n}\n.ip-modal-content[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);\n}\n.ip-cert-accent[_ngcontent-%COMP%] {\n  height: 5px;\n}\n.ip-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.ip-modal-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.ip-modal-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 2px;\n}\n.ip-modal-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  margin: 0;\n  font-family: monospace;\n}\n.ip-modal-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #E9ECEF;\n}\n.ip-modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.ip-modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n}\n.ip-cert-preview[_ngcontent-%COMP%] {\n  background: #FAFBFF;\n  border: 1px solid #E9ECEF;\n  border-radius: 12px;\n  padding: 20px 24px;\n  text-align: center;\n}\n.ip-cert-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n  text-align: left;\n}\n.ip-cert-logo-mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fff;\n}\n.ip-cert-logo-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-logo-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-cert-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 4px;\n}\n.ip-cert-action-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 6px;\n}\n.ip-cert-formation-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 14px;\n}\n.ip-cert-score-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 14px;\n}\n.ip-cert-score-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ip-cert-score-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.ip-cert-score-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.ip-cert-divider-v[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: #E9ECEF;\n}\n.ip-cert-sig-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding-top: 10px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 10px;\n}\n.ip-cert-sig[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ip-cert-sig-line[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 1px;\n  background: #E9ECEF;\n  margin: 0 auto 4px;\n}\n.ip-cert-sig-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-sig-role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n}\n.ip-cert-qr[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #F8F9FA;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  color: #6C757D;\n}\n.ip-cert-validity[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 12px;\n}\n.ip-detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n}\n.ip-detail-row--mt[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.ip-detail-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-detail-block[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-detail-block--half[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ip-detail-icon-wrap[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #F8F9FA;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.ip-detail-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 2px;\n}\n.ip-detail-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-detail-value--mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n/*# sourceMappingURL=instructor-certificate.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorCertificateComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-certificate", imports: [CommonModule, FormsModule], template: `<!-- Loading -->\r
<div *ngIf="loading" class="ip-loader">\r
  <div class="spinner-border" role="status"><span class="visually-hidden">Chargement...</span></div>\r
</div>\r
\r
<!-- Error -->\r
<div *ngIf="error" class="alert alert-danger alert-dismissible">\r
  {{ error }}\r
  <button type="button" class="btn-close" (click)="error = ''"></button>\r
</div>\r
\r
<ng-container *ngIf="!loading">\r
\r
  <!-- Page header -->\r
  <div class="ip-page-head">\r
    <div>\r
      <h5 class="ip-page-head__title">\r
        Certificats <span class="ip-count">{{ filteredCertificates.length }}</span>\r
      </h5>\r
      <p class="ip-page-head__sub">Certificats d\xE9livr\xE9s pour vos formations</p>\r
    </div>\r
  </div>\r
\r
  <!-- KPI cards -->\r
  <div class="ip-kpi-row">\r
    <div class="ip-kpi-card">\r
      <div class="ip-kpi-icon"><i class="isax isax-award"></i></div>\r
      <div>\r
        <div class="ip-kpi-label">Total</div>\r
        <div class="ip-kpi-value">{{ certificates.length }}</div>\r
      </div>\r
    </div>\r
    <div class="ip-kpi-card">\r
      <div class="ip-kpi-icon ip-kpi-icon--success"><i class="isax isax-tick-circle"></i></div>\r
      <div>\r
        <div class="ip-kpi-label">Valides</div>\r
        <div class="ip-kpi-value">{{ totalValides }}</div>\r
      </div>\r
    </div>\r
    <div class="ip-kpi-card">\r
      <div class="ip-kpi-icon ip-kpi-icon--warn"><i class="isax isax-clock"></i></div>\r
      <div>\r
        <div class="ip-kpi-label">Expir\xE9s</div>\r
        <div class="ip-kpi-value">{{ totalExpires }}</div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Filters -->\r
  <div class="ip-card ip-filter-card">\r
    <div class="ip-filter-row">\r
      <div class="ip-filter-group ip-filter-group--search">\r
        <div class="ip-input-icon-wrap">\r
          <i class="isax isax-search-normal ip-input-icon"></i>\r
          <input type="text" class="ip-input ip-input--icon"\r
                 [(ngModel)]="searchTerm" (ngModelChange)="applyFilters()"\r
                 placeholder="Code, employ\xE9, formation\u2026">\r
        </div>\r
      </div>\r
      <div class="ip-filter-group">\r
        <select class="ip-input" [(ngModel)]="selectedStatus" (ngModelChange)="applyFilters()">\r
          <option value="">Tous les statuts</option>\r
          <option value="valide">Valide</option>\r
          <option value="expir\xE9">Expir\xE9</option>\r
          <option value="r\xE9voqu\xE9">R\xE9voqu\xE9</option>\r
        </select>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Table -->\r
  <div class="ip-card">\r
    <div class="table-responsive">\r
      <table class="table ip-table">\r
        <thead>\r
          <tr>\r
            <th>Employ\xE9</th>\r
            <th>Formation</th>\r
            <th>Formateur</th>\r
            <th>D\xE9livr\xE9 le</th>\r
            <th>Expiration</th>\r
            <th>Statut</th>\r
            <th>Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let cert of getPaginatedCertificates()">\r
            <td>\r
              <div class="ip-user-cell">\r
                <div class="ip-avatar"\r
                     [style.background]="getAvatarStyle(cert.employe_id).bg"\r
                     [style.color]="getAvatarStyle(cert.employe_id).color">\r
                  {{ getInitials(cert.employe?.name || '') }}\r
                </div>\r
                <div>\r
                  <div class="ip-user-name">{{ cert.employe?.prenom }} {{ cert.employe?.nom }}</div>\r
                  <div class="ip-user-sub">{{ cert.employe?.fonction }}</div>\r
                </div>\r
              </div>\r
            </td>\r
            <td><div class="ip-formation-name">{{ cert.formation?.titre }}</div></td>\r
            <td>\r
              <span class="text-muted" *ngIf="cert.formateur">\r
                {{ cert.formateur?.prenom }} {{ cert.formateur?.nom }}\r
              </span>\r
              <span class="text-muted" *ngIf="!cert.formateur">\u2014</span>\r
            </td>\r
            <td><span class="text-muted">{{ cert.date_delivrance | date:'dd/MM/yyyy' }}</span></td>\r
            <td>\r
              <span *ngIf="cert.date_expiration && isExpiringSoon(cert)" class="ip-expire-warn">\r
                <i class="fa-solid fa-triangle-exclamation"></i>\r
                {{ cert.date_expiration | date:'dd/MM/yyyy' }}\r
              </span>\r
              <span *ngIf="cert.date_expiration && !isExpiringSoon(cert)" class="text-muted">\r
                {{ cert.date_expiration | date:'dd/MM/yyyy' }}\r
              </span>\r
              <span *ngIf="!cert.date_expiration" class="text-muted">Illimit\xE9e</span>\r
            </td>\r
            <td>\r
              <span class="ip-cert-badge"\r
                    [class.ip-cert-badge--valide]="cert.statut === 'valide'"\r
                    [class.ip-cert-badge--expire]="cert.statut === 'expir\xE9'"\r
                    [class.ip-cert-badge--revoque]="cert.statut === 'r\xE9voqu\xE9'">\r
                <i class="fa-solid fa-circle"></i>\r
                {{ cert.statut === 'valide' ? 'Valide' : cert.statut === 'expir\xE9' ? 'Expir\xE9' : 'R\xE9voqu\xE9' }}\r
              </span>\r
            </td>\r
            <td>\r
              <div class="ip-actions">\r
                <button type="button" class="ip-action-btn" title="D\xE9tails" (click)="openDetails(cert)">\r
                  <i class="isax isax-eye"></i>\r
                </button>\r
                <button type="button" class="ip-action-btn" title="T\xE9l\xE9charger PDF"\r
                        (click)="downloadPdf(cert)">\r
                  <i class="isax isax-document-download"></i>\r
                </button>\r
              </div>\r
            </td>\r
          </tr>\r
          <tr *ngIf="filteredCertificates.length === 0">\r
            <td colspan="7" class="ip-empty">\r
              <i class="isax isax-award"></i>\r
              <span>Aucun certificat trouv\xE9</span>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div *ngIf="totalPages > 1" class="ip-pagination">\r
      <button type="button" class="ip-page-btn" [disabled]="currentPage === 1" (click)="goToPage(currentPage - 1)">\r
        <i class="isax isax-arrow-left-2"></i>\r
      </button>\r
      <ng-container *ngFor="let p of pages">\r
        <span *ngIf="p === -1" class="ip-page-ellipsis">\u2026</span>\r
        <button *ngIf="p !== -1" type="button" class="ip-page-btn"\r
                [class.ip-page-btn--active]="p === currentPage"\r
                (click)="goToPage(p)">{{ p }}</button>\r
      </ng-container>\r
      <button type="button" class="ip-page-btn" [disabled]="currentPage === totalPages" (click)="goToPage(currentPage + 1)">\r
        <i class="isax isax-arrow-right-3"></i>\r
      </button>\r
    </div>\r
  </div>\r
\r
</ng-container>\r
\r
<!-- \u2500\u2500 MODAL D\xC9TAILS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div class="modal fade" id="inst_cert_details_modal" tabindex="-1" aria-hidden="true">\r
  <div class="modal-dialog modal-dialog-centered ip-modal-dialog">\r
    <div class="modal-content ip-modal-content" *ngIf="selectedCertificate">\r
\r
      <div class="ip-cert-accent" [style.background]="getScoreColor(selectedCertificate.score_final)"></div>\r
\r
      <div class="ip-modal-header">\r
        <div class="ip-modal-icon"><i class="isax isax-award"></i></div>\r
        <div>\r
          <h5 class="ip-modal-title">Certificat de r\xE9ussite</h5>\r
          <p class="ip-modal-sub">N\xB0 {{ selectedCertificate.code_unique }}</p>\r
        </div>\r
        <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal"></button>\r
      </div>\r
      <div class="ip-modal-divider"></div>\r
\r
      <div class="ip-modal-body">\r
\r
        <div class="ip-cert-preview">\r
          <div class="ip-cert-logo">\r
            <div class="ip-cert-logo-mark" [style.background]="getScoreColor(selectedCertificate.score_final)">\r
              {{ getInitials(selectedCertificate.employe?.name || '') }}\r
            </div>\r
            <div>\r
              <div class="ip-cert-logo-text">{{ selectedCertificate.employe?.prenom }} {{ selectedCertificate.employe?.nom }}</div>\r
              <div class="ip-cert-logo-sub">{{ selectedCertificate.employe?.fonction }}</div>\r
            </div>\r
          </div>\r
          <div class="ip-cert-label">Certificat de r\xE9ussite</div>\r
          <div class="ip-cert-action-text">a compl\xE9t\xE9 avec succ\xE8s la formation</div>\r
          <div class="ip-cert-formation-title" [style.color]="getScoreColor(selectedCertificate.score_final)">\r
            {{ selectedCertificate.formation?.titre }}\r
          </div>\r
          <div class="ip-cert-score-row" *ngIf="selectedCertificate.formation?.duree_totale">\r
            <div class="ip-cert-score-item">\r
              <div class="ip-cert-score-val">{{ selectedCertificate.formation?.duree_totale }}h</div>\r
              <div class="ip-cert-score-label">Dur\xE9e totale</div>\r
            </div>\r
          </div>\r
          <div class="ip-cert-sig-row">\r
            <div class="ip-cert-sig">\r
              <div class="ip-cert-sig-line"></div>\r
              <div class="ip-cert-sig-name">{{ selectedCertificate.formateur?.prenom }} {{ selectedCertificate.formateur?.nom }}</div>\r
              <div class="ip-cert-sig-role">Formateur \xB7 {{ selectedCertificate.formation?.titre }}</div>\r
            </div>\r
            <div class="ip-cert-qr"><i class="isax isax-scan-barcode"></i></div>\r
          </div>\r
          <div class="ip-cert-validity">\r
            D\xE9livr\xE9 le {{ selectedCertificate.date_delivrance | date:'dd MMMM yyyy' : '' : 'fr-FR' }}\r
            <ng-container *ngIf="selectedCertificate.date_expiration">\r
              \xB7 Valide jusqu'au {{ selectedCertificate.date_expiration | date:'dd MMMM yyyy' : '' : 'fr-FR' }}\r
            </ng-container>\r
          </div>\r
        </div>\r
\r
        <div class="ip-detail-row ip-detail-row--mt">\r
          <div class="ip-detail-block ip-detail-block--half">\r
            <div class="ip-detail-icon-wrap"><i class="isax isax-tag"></i></div>\r
            <div>\r
              <div class="ip-detail-label">Code unique</div>\r
              <div class="ip-detail-value ip-detail-value--mono">{{ selectedCertificate.code_unique }}</div>\r
            </div>\r
          </div>\r
          <div class="ip-detail-block ip-detail-block--half">\r
            <div class="ip-detail-icon-wrap"><i class="isax isax-status"></i></div>\r
            <div>\r
              <div class="ip-detail-label">Statut</div>\r
              <div>\r
                <span class="ip-cert-badge"\r
                      [class.ip-cert-badge--valide]="selectedCertificate.statut === 'valide'"\r
                      [class.ip-cert-badge--expire]="selectedCertificate.statut === 'expir\xE9'"\r
                      [class.ip-cert-badge--revoque]="selectedCertificate.statut === 'r\xE9voqu\xE9'">\r
                  <i class="fa-solid fa-circle"></i>\r
                  {{ selectedCertificate.statut === 'valide' ? 'Valide' : selectedCertificate.statut === 'expir\xE9' ? 'Expir\xE9' : 'R\xE9voqu\xE9' }}\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div>\r
      <div class="ip-modal-divider"></div>\r
      <div class="ip-modal-footer">\r
        <button type="button" class="ip-btn ip-btn--ghost" data-bs-dismiss="modal">Fermer</button>\r
        <button type="button" class="ip-btn ip-btn--primary"\r
                (click)="downloadPdf(selectedCertificate)">\r
          <i class="isax isax-document-download"></i> T\xE9l\xE9charger PDF\r
        </button>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/instructor/instructor-certificate/instructor-certificate.component.scss */\n.ip-loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-kpi-row {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.ip-kpi-card {\n  flex: 1;\n  min-width: 140px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ip-kpi-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.ip-kpi-icon--success {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-kpi-icon--warn {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-kpi-label {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 3px;\n}\n.ip-kpi-value {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-filter-card {\n  padding: 14px 18px;\n  margin-bottom: 20px;\n  overflow: visible;\n}\n.ip-filter-row {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.ip-filter-group {\n  flex: 1;\n  min-width: 160px;\n}\n.ip-filter-group--search {\n  flex: 2;\n  min-width: 220px;\n}\n.ip-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-table {\n  margin: 0;\n}\n.ip-table thead th {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table tbody td {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.ip-table tbody tr:hover td {\n  background: #FAFBFF;\n}\n.ip-user-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n}\n.ip-user-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-user-sub {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-formation-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-score-badge {\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 6px;\n}\n.ip-expire-warn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #D97706;\n}\n.ip-expire-warn i {\n  font-size: 11px;\n}\n.ip-cert-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 6px;\n}\n.ip-cert-badge i {\n  font-size: 8px;\n}\n.ip-cert-badge--valide {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-cert-badge--expire {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-cert-badge--revoque {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-actions {\n  display: flex;\n  gap: 4px;\n}\n.ip-action-btn {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n  text-decoration: none;\n}\n.ip-action-btn:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-action-btn[disabled] {\n  opacity: 0.4;\n  cursor: default;\n  pointer-events: none;\n}\n.ip-empty {\n  text-align: center;\n  padding: 48px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty i {\n  font-size: 32px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 14px 16px;\n  border-top: 1px solid #E9ECEF;\n}\n.ip-page-btn {\n  min-width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 8px;\n  transition: all 0.12s;\n}\n.ip-page-btn:hover:not([disabled]) {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-page-btn--active {\n  background: #D4AF37;\n  color: #fff;\n  border-color: #D4AF37;\n  font-weight: 600;\n}\n.ip-page-btn[disabled] {\n  opacity: 0.4;\n  cursor: default;\n}\n.ip-page-ellipsis {\n  font-size: 13px;\n  color: #6C757D;\n  padding: 0 4px;\n}\n.ip-input {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon {\n  padding-left: 34px;\n}\n.ip-input-icon-wrap {\n  position: relative;\n}\n.ip-input-icon {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn i {\n  font-size: 16px;\n}\n.ip-btn--primary {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-btn--ghost {\n  background: transparent;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n}\n.ip-modal-dialog {\n  max-width: 540px;\n}\n.ip-modal-content {\n  border: none;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);\n}\n.ip-cert-accent {\n  height: 5px;\n}\n.ip-modal-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.ip-modal-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.ip-modal-title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 2px;\n}\n.ip-modal-sub {\n  font-size: 12px;\n  color: #6C757D;\n  margin: 0;\n  font-family: monospace;\n}\n.ip-modal-divider {\n  height: 1px;\n  background: #E9ECEF;\n}\n.ip-modal-body {\n  padding: 20px 24px;\n}\n.ip-modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n}\n.ip-cert-preview {\n  background: #FAFBFF;\n  border: 1px solid #E9ECEF;\n  border-radius: 12px;\n  padding: 20px 24px;\n  text-align: center;\n}\n.ip-cert-logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n  text-align: left;\n}\n.ip-cert-logo-mark {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fff;\n}\n.ip-cert-logo-text {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-logo-sub {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-cert-label {\n  font-size: 10px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 4px;\n}\n.ip-cert-action-text {\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 6px;\n}\n.ip-cert-formation-title {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 14px;\n}\n.ip-cert-score-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 14px;\n}\n.ip-cert-score-item {\n  text-align: center;\n}\n.ip-cert-score-val {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.ip-cert-score-label {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.ip-cert-divider-v {\n  width: 1px;\n  height: 32px;\n  background: #E9ECEF;\n}\n.ip-cert-sig-row {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding-top: 10px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 10px;\n}\n.ip-cert-sig {\n  text-align: center;\n}\n.ip-cert-sig-line {\n  width: 70px;\n  height: 1px;\n  background: #E9ECEF;\n  margin: 0 auto 4px;\n}\n.ip-cert-sig-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-sig-role {\n  font-size: 10px;\n  color: #6C757D;\n}\n.ip-cert-qr {\n  width: 40px;\n  height: 40px;\n  background: #F8F9FA;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  color: #6C757D;\n}\n.ip-cert-validity {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 12px;\n}\n.ip-detail-row {\n  display: flex;\n  gap: 0;\n}\n.ip-detail-row--mt {\n  margin-top: 16px;\n}\n.ip-detail-block {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-detail-block:last-child {\n  border-bottom: none;\n}\n.ip-detail-block--half {\n  flex: 1;\n  min-width: 0;\n}\n.ip-detail-icon-wrap {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #F8F9FA;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.ip-detail-label {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 2px;\n}\n.ip-detail-value {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-detail-value--mono {\n  font-family: monospace;\n}\n/*# sourceMappingURL=instructor-certificate.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }, { type: CertificatService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorCertificateComponent, { className: "InstructorCertificateComponent", filePath: "app/features/instructor/instructor-certificate/instructor-certificate.component.ts", lineNumber: 14 });
})();
export {
  InstructorCertificateComponent
};
//# sourceMappingURL=chunk-BYYZPJYG.js.map
