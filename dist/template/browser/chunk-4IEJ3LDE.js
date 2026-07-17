import {
  httpErrorMessage
} from "./chunk-RL3SOXDI.js";
import {
  CertificatService,
  DEFAULT_CERT_CONFIG
} from "./chunk-TT7BYOVY.js";
import "./chunk-5RVU2RVV.js";
import "./chunk-FQH4LUZ5.js";
import {
  AuthService
} from "./chunk-GD4TWLVQ.js";
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
import "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
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
  ɵɵpipeBind4,
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTSSTHJF.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-certificate/adminrh-certificate.component.ts
function AdminrhCertificateComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "span", 8);
    \u0275\u0275text(3, "Chargement\u2026");
    \u0275\u0275elementEnd()()();
  }
}
function AdminrhCertificateComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 10);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_div_1_Template_button_click_2_listener() {
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
function AdminrhCertificateComponent_ng_container_2_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.syncResult, " ");
  }
}
function AdminrhCertificateComponent_ng_container_2_tr_77_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cert_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", cert_r5.formation == null ? null : cert_r5.formation.duree_totale, "h ");
  }
}
function AdminrhCertificateComponent_ng_container_2_tr_77_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cert_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", cert_r5.formateur == null ? null : cert_r5.formateur.prenom, " ", cert_r5.formateur == null ? null : cert_r5.formateur.nom, " ");
  }
}
function AdminrhCertificateComponent_ng_container_2_tr_77_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCertificateComponent_ng_container_2_tr_77_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275element(1, "i", 66);
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
function AdminrhCertificateComponent_ng_container_2_tr_77_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
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
function AdminrhCertificateComponent_ng_container_2_tr_77_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1, "Illimit\xE9e");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCertificateComponent_ng_container_2_tr_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 49)(3, "div", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 51);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 52);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "div", 53);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AdminrhCertificateComponent_ng_container_2_tr_77_div_13_Template, 3, 1, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, AdminrhCertificateComponent_ng_container_2_tr_77_span_15_Template, 2, 2, "span", 55)(16, AdminrhCertificateComponent_ng_container_2_tr_77_span_16_Template, 2, 0, "span", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 56);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275template(22, AdminrhCertificateComponent_ng_container_2_tr_77_span_22_Template, 4, 4, "span", 57)(23, AdminrhCertificateComponent_ng_container_2_tr_77_span_23_Template, 3, 4, "span", 55)(24, AdminrhCertificateComponent_ng_container_2_tr_77_span_24_Template, 2, 0, "span", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td")(26, "span", 58);
    \u0275\u0275element(27, "i", 59);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td")(30, "div", 60)(31, "button", 61);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_ng_container_2_tr_77_Template_button_click_31_listener() {
      const cert_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetails(cert_r5));
    });
    \u0275\u0275element(32, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 63);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_ng_container_2_tr_77_Template_button_click_33_listener() {
      const cert_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadPdf(cert_r5));
    });
    \u0275\u0275element(34, "i");
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
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cert_r5.formation == null ? null : cert_r5.formation.duree_totale);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", cert_r5.formateur);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cert_r5.formateur);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 26, cert_r5.date_delivrance, "dd/MM/yyyy"));
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
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.downloading);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.downloading ? "isax isax-refresh ip-spin" : "isax isax-document-download");
  }
}
function AdminrhCertificateComponent_ng_container_2_tr_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 67);
    \u0275\u0275element(2, "i", 24);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Aucun certificat trouv\xE9");
    \u0275\u0275elementEnd()()();
  }
}
function AdminrhCertificateComponent_ng_container_2_div_79_ng_container_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCertificateComponent_ng_container_2_div_79_ng_container_6_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_ng_container_2_div_79_ng_container_6_button_2_Template_button_click_0_listener() {
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
    \u0275\u0275classProp("ip-pg-btn--active", p_r8 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r8);
  }
}
function AdminrhCertificateComponent_ng_container_2_div_79_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminrhCertificateComponent_ng_container_2_div_79_ng_container_6_span_1_Template, 2, 0, "span", 74)(2, AdminrhCertificateComponent_ng_container_2_div_79_ng_container_6_button_2_Template, 2, 3, "button", 75);
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
function AdminrhCertificateComponent_ng_container_2_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "span", 69);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 70)(4, "button", 71);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_ng_container_2_div_79_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminrhCertificateComponent_ng_container_2_div_79_ng_container_6_Template, 3, 2, "ng-container", 46);
    \u0275\u0275elementStart(7, "button", 71);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_ng_container_2_div_79_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 73);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", (ctx_r1.currentPage - 1) * ctx_r1.itemsPerPage + 1, "\u2013", ctx_r1.pageEnd, " sur ", ctx_r1.filteredCertificats.length, " certificats ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function AdminrhCertificateComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "div")(3, "h5", 12);
    \u0275\u0275text(4, "Gestion des certificats");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 13);
    \u0275\u0275text(6, "Consultez et g\xE9rez les certificats d\xE9livr\xE9s \xE0 vos employ\xE9s");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 14)(8, "span", 15);
    \u0275\u0275element(9, "i", 16);
    \u0275\u0275text(10, " Les certificats sont g\xE9n\xE9r\xE9s automatiquement \xE0 la fin des formations certifiantes. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17);
    \u0275\u0275template(12, AdminrhCertificateComponent_ng_container_2_span_12_Template, 3, 1, "span", 18);
    \u0275\u0275elementStart(13, "button", 19);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_ng_container_2_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.syncCertificats());
    });
    \u0275\u0275element(14, "i", 20);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 21)(17, "div", 22)(18, "div", 23);
    \u0275\u0275element(19, "i", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "div", 25);
    \u0275\u0275text(22, "Total certificats");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 26);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 22)(26, "div", 27);
    \u0275\u0275element(27, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div")(29, "div", 25);
    \u0275\u0275text(30, "Valides");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 26);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 22)(34, "div", 29);
    \u0275\u0275element(35, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div")(37, "div", 25);
    \u0275\u0275text(38, "Expir\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 26);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 31)(42, "div", 32)(43, "div", 33)(44, "div", 34);
    \u0275\u0275element(45, "i", 35);
    \u0275\u0275elementStart(46, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterSearch, $event) || (ctx_r1.filterSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_Template_input_ngModelChange_46_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 37)(48, "select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_Template_select_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterStatut, $event) || (ctx_r1.filterStatut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_Template_select_ngModelChange_48_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementStart(49, "option", 39);
    \u0275\u0275text(50, "Tous les statuts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "option", 40);
    \u0275\u0275text(52, "Valide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "option", 41);
    \u0275\u0275text(54, "Expir\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "option", 42);
    \u0275\u0275text(56, "R\xE9voqu\xE9");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(57, "div", 43)(58, "div", 44)(59, "table", 45)(60, "thead")(61, "tr")(62, "th");
    \u0275\u0275text(63, "Employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "th");
    \u0275\u0275text(65, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "th");
    \u0275\u0275text(67, "Formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "th");
    \u0275\u0275text(69, "D\xE9livr\xE9 le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "th");
    \u0275\u0275text(71, "Expiration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "th");
    \u0275\u0275text(73, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "th");
    \u0275\u0275text(75, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "tbody");
    \u0275\u0275template(77, AdminrhCertificateComponent_ng_container_2_tr_77_Template, 35, 29, "tr", 46)(78, AdminrhCertificateComponent_ng_container_2_tr_78_Template, 5, 0, "tr", 2);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(79, AdminrhCertificateComponent_ng_container_2_div_79_Template, 9, 6, "div", 47);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r1.syncResult);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.syncing);
    \u0275\u0275advance();
    \u0275\u0275classProp("ip-spin", ctx_r1.syncing);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.syncing ? "Synchronisation\u2026" : "Synchroniser", " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.totalCertificats);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.totalValides);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.totalExpires);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterSearch);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterStatut);
    \u0275\u0275advance(29);
    \u0275\u0275property("ngForOf", ctx_r1.paginatedCertificats);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredCertificats.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
function AdminrhCertificateComponent_div_5_img_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 115);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.config.logo_url, \u0275\u0275sanitizeUrl);
  }
}
function AdminrhCertificateComponent_div_5_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", ctx_r1.config.couleur_principale);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(ctx_r1.config.entreprise_nom || "E"), " ");
  }
}
function AdminrhCertificateComponent_div_5_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "div", 118)(2, "div", 119);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 120);
    \u0275\u0275text(5, "Dur\xE9e totale");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedCert.formation == null ? null : ctx_r1.selectedCert.formation.duree_totale, "h");
  }
}
function AdminrhCertificateComponent_div_5_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275element(1, "div", 99);
    \u0275\u0275elementStart(2, "div", 100);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 101);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedCert.formateur == null ? null : ctx_r1.selectedCert.formateur.prenom, " ", ctx_r1.selectedCert.formateur == null ? null : ctx_r1.selectedCert.formateur.nom);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.config.couleur_principale);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Formateur \xB7 ", ctx_r1.selectedCert.formation == null ? null : ctx_r1.selectedCert.formation.titre, " ");
  }
}
function AdminrhCertificateComponent_div_5_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275element(1, "i", 122);
    \u0275\u0275elementEnd();
  }
}
function AdminrhCertificateComponent_div_5_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 Valide jusqu'au ", \u0275\u0275pipeBind4(2, 1, ctx_r1.selectedCert.date_expiration, "dd MMMM yyyy", "", "fr-FR"), " ");
  }
}
function AdminrhCertificateComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275element(1, "div", 79);
    \u0275\u0275elementStart(2, "div", 80)(3, "div", 81);
    \u0275\u0275element(4, "i", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h5", 82);
    \u0275\u0275text(7, "Certificat de r\xE9ussite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 83);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "button", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "div", 85);
    \u0275\u0275elementStart(12, "div", 86)(13, "div", 87)(14, "div", 88);
    \u0275\u0275template(15, AdminrhCertificateComponent_div_5_img_15_Template, 1, 1, "img", 89)(16, AdminrhCertificateComponent_div_5_div_16_Template, 2, 3, "div", 90);
    \u0275\u0275elementStart(17, "div")(18, "div", 91);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 92);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 93);
    \u0275\u0275text(23, "Certificat de r\xE9ussite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 94);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 95);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, AdminrhCertificateComponent_div_5_div_28_Template, 6, 1, "div", 96);
    \u0275\u0275elementStart(29, "div", 97)(30, "div", 98);
    \u0275\u0275element(31, "div", 99);
    \u0275\u0275elementStart(32, "div", 100);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 101);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(36, AdminrhCertificateComponent_div_5_div_36_Template, 6, 5, "div", 102)(37, AdminrhCertificateComponent_div_5_div_37_Template, 2, 0, "div", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 104);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "date");
    \u0275\u0275template(41, AdminrhCertificateComponent_div_5_ng_container_41_Template, 3, 6, "ng-container", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 105)(43, "div", 106)(44, "div", 107);
    \u0275\u0275element(45, "i", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div")(47, "div", 109);
    \u0275\u0275text(48, "Code unique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 110);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 106)(52, "div", 107);
    \u0275\u0275element(53, "i", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div")(55, "div", 109);
    \u0275\u0275text(56, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div")(58, "span", 58);
    \u0275\u0275element(59, "i", 59);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275element(61, "div", 85);
    \u0275\u0275elementStart(62, "div", 112)(63, "button", 113);
    \u0275\u0275text(64, "Fermer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "button", 114);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_div_5_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadPdf(ctx_r1.selectedCert));
    });
    \u0275\u0275element(66, "i");
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.config.couleur_principale);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.config.couleur_principale + "20")("color", ctx_r1.config.couleur_principale);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("N\xB0 ", ctx_r1.selectedCert.code_unique);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", ctx_r1.config.bg_couleur);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.config.logo_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.config.logo_url);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.config.entreprise_nom || (ctx_r1.selectedCert.employe == null ? null : ctx_r1.selectedCert.employe.prenom) + " " + (ctx_r1.selectedCert.employe == null ? null : ctx_r1.selectedCert.employe.nom));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.config.entreprise_sous_titre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.config.accroche);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.config.couleur_principale);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCert.formation == null ? null : ctx_r1.selectedCert.formation.titre, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.show_duree && (ctx_r1.selectedCert.formation == null ? null : ctx_r1.selectedCert.formation.duree_totale));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.config.signataire_nom || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.config.signataire_role);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.show_formateur);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.show_qr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" D\xE9livr\xE9 le ", \u0275\u0275pipeBind4(40, 38, ctx_r1.selectedCert.date_delivrance, "dd MMMM yyyy", "", "fr-FR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.config.show_date_expiration && ctx_r1.selectedCert.date_expiration);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.selectedCert.code_unique);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("ip-cert-badge--valide", ctx_r1.selectedCert.statut === "valide")("ip-cert-badge--expire", ctx_r1.selectedCert.statut === "expir\xE9")("ip-cert-badge--revoque", ctx_r1.selectedCert.statut === "r\xE9voqu\xE9");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCert.statut === "valide" ? "Valide" : ctx_r1.selectedCert.statut === "expir\xE9" ? "Expir\xE9" : "R\xE9voqu\xE9", " ");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("background", ctx_r1.config.couleur_principale);
    \u0275\u0275property("disabled", ctx_r1.downloading);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.downloading ? "isax isax-refresh ip-spin" : "isax isax-document-download");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.downloading ? "G\xE9n\xE9ration\u2026" : "T\xE9l\xE9charger PDF", " ");
  }
}
var DEFAULT_CONFIG = __spreadValues({}, DEFAULT_CERT_CONFIG);
var AdminrhCertificateComponent = class _AdminrhCertificateComponent {
  http;
  certService;
  auth;
  certificats = [];
  filteredCertificats = [];
  loading = false;
  error = "";
  filterStatut = "all";
  filterSearch = "";
  selectedCert = null;
  currentPage = 1;
  itemsPerPage = 10;
  // config kept for modal styling (colours from saved modèle)
  config = __spreadValues({}, DEFAULT_CONFIG);
  get totalValides() {
    return this.certificats.filter((c) => c.statut === "valide").length;
  }
  get totalExpires() {
    return this.certificats.filter((c) => c.statut === "expir\xE9").length;
  }
  get totalCertificats() {
    return this.certificats.length;
  }
  get apiUrl() {
    return environment.apiUrl;
  }
  get entrepriseId() {
    return this.auth.getUser()?.entreprise_id ?? 0;
  }
  constructor(http, certService, auth) {
    this.http = http;
    this.certService = certService;
    this.auth = auth;
  }
  ngOnInit() {
    this.loadCertificats();
    this.loadModeleConfig();
  }
  loadModeleConfig() {
    const eid = this.entrepriseId;
    if (!eid)
      return;
    this.http.get(`${this.apiUrl}/modeles-certificat/entreprise/${eid}`).subscribe({
      next: (res) => {
        if (res.data?.config) {
          this.config = __spreadValues(__spreadValues({}, DEFAULT_CONFIG), res.data.config);
          if (this.config.logo_url && !this.config.logo_url.startsWith("http")) {
            const baseUrl = this.apiUrl.replace("/api", "");
            this.config.logo_url = baseUrl + this.config.logo_url;
            console.log("\u2705 Logo URL charg\xE9e AdminRH:", this.config.logo_url);
          }
        }
      },
      error: () => {
      }
    });
  }
  loadCertificats() {
    this.loading = true;
    this.certService.getCertificats().subscribe({
      next: (data) => {
        this.certificats = data;
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        this.error = httpErrorMessage(err, "Impossible de charger les certificats.");
        this.loading = false;
      }
    });
  }
  syncing = false;
  syncResult = "";
  syncCertificats() {
    this.syncing = true;
    this.syncResult = "";
    this.http.post(`${this.apiUrl}/certificats/backfill`, {}).subscribe({
      next: (res) => {
        this.syncing = false;
        this.syncResult = `${res.created} nouveau(x) certificat(s) cr\xE9\xE9(s) sur ${res.total_eligible} formations termin\xE9es.`;
        if (res.created > 0)
          this.loadCertificats();
        setTimeout(() => this.syncResult = "", 6e3);
      },
      error: () => {
        this.syncing = false;
        this.error = "Erreur lors de la synchronisation.";
      }
    });
  }
  applyFilters() {
    this.filteredCertificats = this.certificats.filter((c) => {
      const matchStatut = this.filterStatut === "all" || c.statut === this.filterStatut;
      const s = this.filterSearch.toLowerCase();
      const matchSearch = !s || c.employe?.name?.toLowerCase().includes(s) || c.formation?.titre?.toLowerCase().includes(s) || c.code_unique?.toLowerCase().includes(s);
      return matchStatut && matchSearch;
    });
    this.currentPage = 1;
  }
  get totalPages() {
    return Math.ceil(this.filteredCertificats.length / this.itemsPerPage);
  }
  get paginatedCertificats() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredCertificats.slice(start, start + this.itemsPerPage);
  }
  get pageNumbers() {
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
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages)
      this.currentPage = page;
  }
  get pageEnd() {
    return Math.min(this.currentPage * this.itemsPerPage, this.filteredCertificats.length);
  }
  openDetails(cert) {
    this.selectedCert = cert;
    if (cert.modele?.config) {
      this.config = __spreadValues(__spreadValues({}, DEFAULT_CONFIG), cert.modele.config);
      if (this.config.logo_url && !this.config.logo_url.startsWith("http")) {
        const baseUrl = this.apiUrl.replace("/api", "");
        this.config.logo_url = baseUrl + this.config.logo_url;
        console.log("\u2705 Logo URL convertie dans preview AdminRH:", this.config.logo_url);
      }
      console.log("\u2705 Config du mod\xE8le appliqu\xE9e pour la pr\xE9visualisation AdminRH:", this.config);
    } else if (cert.modele?.template_html) {
      try {
        const parsed = JSON.parse(cert.modele.template_html);
        if (parsed && typeof parsed === "object") {
          this.config = __spreadValues(__spreadValues({}, DEFAULT_CONFIG), parsed);
          if (this.config.logo_url && !this.config.logo_url.startsWith("http")) {
            const baseUrl = this.apiUrl.replace("/api", "");
            this.config.logo_url = baseUrl + this.config.logo_url;
          }
          console.log("\u2705 Config du template_html appliqu\xE9e AdminRH:", this.config);
        }
      } catch (e) {
        console.warn("\u26A0\uFE0F Impossible de parser le template_html du mod\xE8le");
      }
    }
    setTimeout(() => {
      const el = document.getElementById("arh_cert_details_modal");
      if (el)
        new window.bootstrap.Modal(el).show();
    }, 50);
  }
  getInitials(name) {
    return name?.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase() || "?";
  }
  isExpiringSoon(cert) {
    if (!cert.date_expiration)
      return false;
    const days = (new Date(cert.date_expiration).getTime() - Date.now()) / 864e5;
    return days > 0 && days <= 60;
  }
  avatarColors = ["#E6F1FB,#0C447C", "#E1F5EE,#085041", "#EEEDFE,#3C3489", "#FAEEDA,#633806", "#F1EFE8,#444441"];
  getAvatarStyle(id) {
    const pair = this.avatarColors[id % this.avatarColors.length].split(",");
    return { bg: pair[0], color: pair[1] };
  }
  downloading = false;
  downloadPdf(cert) {
    if (this.downloading)
      return;
    this.downloading = true;
    this.certService.downloadPdf(cert, this.config).finally(() => {
      this.downloading = false;
    });
  }
  static \u0275fac = function AdminrhCertificateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhCertificateComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(CertificatService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhCertificateComponent, selectors: [["app-adminrh-certificate"]], decls: 6, vars: 4, consts: [["class", "ip-loader", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible", 4, "ngIf"], [4, "ngIf"], ["id", "arh_cert_details_modal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "ip-modal-dialog"], ["class", "modal-content ip-modal-content", 4, "ngIf"], [1, "ip-loader"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "alert", "alert-danger", "alert-dismissible"], ["type", "button", 1, "btn-close", 3, "click"], [1, "ip-page-head"], [1, "ip-page-head__title"], [1, "ip-page-head__sub"], [1, "ip-sync-bar"], [1, "ip-sync-hint"], [1, "isax", "isax-info-circle"], [1, "ip-sync-right"], ["class", "ip-sync-ok", 4, "ngIf"], ["type", "button", 1, "ip-btn", "ip-btn--ghost", "ip-btn--sm", 3, "click", "disabled"], [1, "isax", "isax-refresh"], [1, "ip-kpi-row"], [1, "ip-kpi-card"], [1, "ip-kpi-icon"], [1, "isax", "isax-award"], [1, "ip-kpi-label"], [1, "ip-kpi-value"], [1, "ip-kpi-icon", "ip-kpi-icon--success"], [1, "isax", "isax-tick-circle"], [1, "ip-kpi-icon", "ip-kpi-icon--warn"], [1, "isax", "isax-clock"], [1, "ip-card", "ip-filter-card"], [1, "ip-filter-row"], [1, "ip-filter-group", "ip-filter-group--search"], [1, "ip-input-icon-wrap"], [1, "isax", "isax-search-normal", "ip-input-icon"], ["type", "text", "placeholder", "Rechercher par employ\xE9, formation, code\u2026", 1, "ip-input", "ip-input--icon", 3, "ngModelChange", "ngModel"], [1, "ip-filter-group"], [1, "ip-input", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "valide"], ["value", "expir\xE9"], ["value", "r\xE9voqu\xE9"], [1, "ip-card"], [1, "table-responsive"], [1, "table", "ip-table"], [4, "ngFor", "ngForOf"], ["class", "ip-pagination", 4, "ngIf"], [1, "ip-sync-ok"], [1, "ip-user-cell"], [1, "ip-avatar"], [1, "ip-user-name"], [1, "ip-user-sub"], [1, "ip-formation-name"], ["class", "ip-formation-meta", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "text-muted"], ["class", "ip-expire-warn", 4, "ngIf"], [1, "ip-cert-badge"], [1, "fa-solid", "fa-circle"], [1, "ip-actions"], ["type", "button", "title", "D\xE9tails", 1, "ip-action-btn", 3, "click"], [1, "isax", "isax-eye"], ["type", "button", "title", "T\xE9l\xE9charger PDF", 1, "ip-action-btn", 3, "click", "disabled"], [1, "ip-formation-meta"], [1, "ip-expire-warn"], [1, "fa-solid", "fa-triangle-exclamation"], ["colspan", "7", 1, "ip-empty"], [1, "ip-pagination"], [1, "ip-pagination__info"], [1, "ip-pagination__controls"], [1, "ip-pg-btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], [1, "isax", "isax-arrow-right-3"], ["class", "ip-pg-ellipsis", 4, "ngIf"], ["class", "ip-pg-btn", 3, "ip-pg-btn--active", "click", 4, "ngIf"], [1, "ip-pg-ellipsis"], [1, "ip-pg-btn", 3, "click"], [1, "modal-content", "ip-modal-content"], [1, "ip-cert-accent"], [1, "ip-modal-header"], [1, "ip-modal-icon"], [1, "ip-modal-title"], [1, "ip-modal-sub"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close", "ms-auto"], [1, "ip-modal-divider"], [1, "ip-modal-body"], [1, "ip-cert-preview"], [1, "ip-cert-logo"], ["class", "ip-cert-card__logo-img", "alt", "logo", "style", "width:36px;height:36px;object-fit:contain;", 3, "src", 4, "ngIf"], ["class", "ip-cert-logo-mark", 3, "background", 4, "ngIf"], [1, "ip-cert-logo-text"], [1, "ip-cert-logo-sub"], [1, "ip-cert-label"], [1, "ip-cert-action-text"], [1, "ip-cert-formation-title"], ["class", "ip-cert-score-row", 4, "ngIf"], [1, "ip-cert-sig-row"], [1, "ip-cert-sig"], [1, "ip-cert-sig-line"], [1, "ip-cert-sig-name"], [1, "ip-cert-sig-role"], ["class", "ip-cert-sig", 4, "ngIf"], ["class", "ip-cert-qr", 4, "ngIf"], [1, "ip-cert-validity"], [1, "ip-detail-row", "ip-detail-row--mt"], [1, "ip-detail-block", "ip-detail-block--half"], [1, "ip-detail-icon-wrap"], [1, "isax", "isax-tag"], [1, "ip-detail-label"], [1, "ip-detail-value", "ip-detail-value--mono"], [1, "isax", "isax-status"], [1, "ip-modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "ip-btn", "ip-btn--ghost"], ["type", "button", 1, "ip-btn", "ip-btn--primary", 3, "click", "disabled"], ["alt", "logo", 1, "ip-cert-card__logo-img", 2, "width", "36px", "height", "36px", "object-fit", "contain", 3, "src"], [1, "ip-cert-logo-mark"], [1, "ip-cert-score-row"], [1, "ip-cert-score-item"], [1, "ip-cert-score-val"], [1, "ip-cert-score-label"], [1, "ip-cert-qr"], [1, "isax", "isax-scan-barcode"]], template: function AdminrhCertificateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AdminrhCertificateComponent_div_0_Template, 4, 0, "div", 0)(1, AdminrhCertificateComponent_div_1_Template, 3, 1, "div", 1)(2, AdminrhCertificateComponent_ng_container_2_Template, 80, 13, "ng-container", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275template(5, AdminrhCertificateComponent_div_5_Template, 68, 43, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.selectedCert);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ['\n\n.ip-loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ip-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.ip-btn--primary[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary[_ngcontent-%COMP%]:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-btn--ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n}\n.ip-btn--wide[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.ip-btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.ip-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.55;\n  cursor: default;\n}\n.ip-customizer-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  gap: 24px;\n  align-items: flex-start;\n}\n@media (max-width: 900px) {\n  .ip-customizer-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-panel[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.ip-section[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid #E9ECEF;\n}\n.ip-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-section-head[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1A1A2E;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ip-section-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #D4AF37;\n  font-size: 14px;\n}\n.ip-field[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.ip-field[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.ip-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 500;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 5px;\n}\n.ip-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon[_ngcontent-%COMP%] {\n  padding-left: 34px;\n}\n.ip-input-icon-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ip-input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-palette-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.ip-palette-swatch[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n  transition: transform 0.12s, border-color 0.12s;\n  padding: 0;\n}\n.ip-palette-swatch--active[_ngcontent-%COMP%] {\n  border-color: #1A1A2E;\n  transform: scale(1.15);\n}\n.ip-palette-swatch[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.ip-color-pick[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 1px solid #E9ECEF;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n}\n.ip-color-pick[_ngcontent-%COMP%]::-webkit-color-swatch-wrapper {\n  padding: 0;\n  border-radius: 50%;\n}\n.ip-color-pick[_ngcontent-%COMP%]::-webkit-color-swatch {\n  border-radius: 50%;\n  border: none;\n}\n.ip-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 9px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-toggle-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-toggle-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-toggle-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 1px;\n}\n.ip-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.ip-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ip-switch-track[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 22px;\n  background: #DEE2E6;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.ip-switch-track[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.ip-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ip-switch-track[_ngcontent-%COMP%] {\n  background: #D4AF37;\n}\n.ip-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ip-switch-track[_ngcontent-%COMP%]::before {\n  transform: translateX(18px);\n}\n.ip-save-row[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-save-ok[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #059669;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.ip-save-ok[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ip-preview-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 14px;\n}\n.ip-preview-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-right: 4px;\n}\n.ip-cert-card[_ngcontent-%COMP%] {\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n}\n.ip-cert-card__bar[_ngcontent-%COMP%] {\n  height: 6px;\n}\n.ip-cert-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #E9ECEF;\n}\n.ip-cert-card__logo-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.ip-cert-card__logo-img[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  object-fit: contain;\n  border-radius: 6px;\n}\n.ip-cert-card__logo-mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n}\n.ip-cert-card__header-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ip-cert-card__company[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.ip-cert-card__company-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-cert-card__num[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  font-family: monospace;\n  white-space: nowrap;\n}\n.ip-cert-card__body[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n}\n.ip-cert-card__label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-bottom: 6px;\n}\n.ip-cert-card__name[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n  margin-bottom: 6px;\n}\n.ip-cert-card__accroche[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 6px;\n}\n.ip-cert-card__formation[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.ip-cert-card__stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 16px;\n}\n.ip-cert-card__stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ip-cert-card__stat-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-cert-card__stat-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.ip-cert-card__stat-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: #E9ECEF;\n}\n.ip-cert-card__sig-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding-top: 12px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 4px;\n}\n.ip-cert-card__sig[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ip-cert-card__sig-line[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 1px;\n  background: #E9ECEF;\n  margin: 0 auto 4px;\n}\n.ip-cert-card__sig-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-card__sig-role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n}\n.ip-cert-card__qr[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #F8F9FA;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  color: #6C757D;\n}\n.ip-cert-card__validity[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 12px;\n}\n.ip-recent-head[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 10px;\n}\n.ip-sync-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 10px 16px;\n  margin-bottom: 16px;\n  font-size: 12px;\n}\n.ip-sync-hint[_ngcontent-%COMP%] {\n  color: #6C757D;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ip-sync-hint[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #D4AF37;\n  font-size: 14px;\n}\n.ip-sync-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-sync-ok[_ngcontent-%COMP%] {\n  color: #059669;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.ip-sync-ok[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ip-spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  display: inline-block;\n}\n.ip-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.ip-kpi-card[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ip-kpi-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.ip-kpi-icon--success[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-kpi-icon--warn[_ngcontent-%COMP%] {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-kpi-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 3px;\n}\n.ip-kpi-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-filter-card[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  margin-bottom: 20px;\n  overflow: visible;\n}\n.ip-filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.ip-filter-group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.ip-filter-group--search[_ngcontent-%COMP%] {\n  flex: 2;\n  min-width: 220px;\n}\n.ip-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-table[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ip-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #FAFBFF;\n}\n.ip-user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n}\n.ip-user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-user-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-formation-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-formation-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 2px;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ip-formation-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ip-score-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 6px;\n}\n.ip-expire-warn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #D97706;\n}\n.ip-expire-warn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ip-cert-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 6px;\n}\n.ip-cert-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n.ip-cert-badge--valide[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-cert-badge--expire[_ngcontent-%COMP%] {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-cert-badge--revoque[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.ip-action-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n  text-decoration: none;\n}\n.ip-action-btn[_ngcontent-%COMP%]:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-modal-dialog[_ngcontent-%COMP%] {\n  max-width: 540px;\n}\n.ip-modal-content[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);\n}\n.ip-cert-accent[_ngcontent-%COMP%] {\n  height: 5px;\n}\n.ip-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.ip-modal-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.ip-modal-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 2px;\n}\n.ip-modal-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  margin: 0;\n  font-family: monospace;\n}\n.ip-modal-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #E9ECEF;\n}\n.ip-modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.ip-modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n}\n.ip-cert-preview[_ngcontent-%COMP%] {\n  background: #FAFBFF;\n  border: 1px solid #E9ECEF;\n  border-radius: 12px;\n  padding: 20px 24px;\n  text-align: center;\n}\n.ip-cert-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n  text-align: left;\n}\n.ip-cert-logo-mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fff;\n}\n.ip-cert-logo-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-logo-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-cert-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 4px;\n}\n.ip-cert-action-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 6px;\n}\n.ip-cert-formation-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 14px;\n}\n.ip-cert-score-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 14px;\n}\n.ip-cert-score-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ip-cert-score-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.ip-cert-score-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.ip-cert-divider-v[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: #E9ECEF;\n}\n.ip-cert-sig-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding-top: 10px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 10px;\n}\n.ip-cert-sig[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ip-cert-sig-line[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 1px;\n  background: #E9ECEF;\n  margin: 0 auto 4px;\n}\n.ip-cert-sig-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-sig-role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n}\n.ip-cert-qr[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #F8F9FA;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  color: #6C757D;\n}\n.ip-cert-validity[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 12px;\n}\n.ip-detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n}\n.ip-detail-row--mt[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.ip-detail-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-detail-block[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-detail-block--half[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ip-detail-icon-wrap[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #F8F9FA;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.ip-detail-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 2px;\n}\n.ip-detail-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-detail-value--mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.ip-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 20px;\n  padding: 0 2px;\n}\n.ip-pagination__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-pagination__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-pg-btn[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E9ECEF;\n  border-radius: 6px;\n  background: #fff;\n  color: #6C757D;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.ip-pg-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ip-pg-btn[_ngcontent-%COMP%]:hover:not([disabled]):not(.ip-pg-btn--active) {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-pg-btn--active[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  border-color: #D4AF37;\n  color: #fff;\n  font-weight: 600;\n  cursor: default;\n}\n.ip-pg-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: default;\n}\n.ip-pg-ellipsis[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  color: #6C757D;\n  font-size: 13px;\n  line-height: 32px;\n}\n/*# sourceMappingURL=adminrh-certificate.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhCertificateComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-certificate", imports: [CommonModule, FormsModule], template: `<!-- Loading -->\r
<div *ngIf="loading" class="ip-loader">\r
  <div class="spinner-border" role="status"><span class="visually-hidden">Chargement\u2026</span></div>\r
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
  <!-- \u2500\u2500 Page header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="ip-page-head">\r
    <div>\r
      <h5 class="ip-page-head__title">Gestion des certificats</h5>\r
      <p class="ip-page-head__sub">Consultez et g\xE9rez les certificats d\xE9livr\xE9s \xE0 vos employ\xE9s</p>\r
    </div>\r
  </div>\r
\r
  <!-- Sync bar -->\r
  <div class="ip-sync-bar">\r
    <span class="ip-sync-hint">\r
      <i class="isax isax-info-circle"></i>\r
      Les certificats sont g\xE9n\xE9r\xE9s automatiquement \xE0 la fin des formations certifiantes.\r
    </span>\r
    <div class="ip-sync-right">\r
      <span *ngIf="syncResult" class="ip-sync-ok">\r
        <i class="isax isax-tick-circle"></i> {{ syncResult }}\r
      </span>\r
      <button type="button" class="ip-btn ip-btn--ghost ip-btn--sm"\r
              [disabled]="syncing" (click)="syncCertificats()">\r
        <i class="isax isax-refresh" [class.ip-spin]="syncing"></i>\r
        {{ syncing ? 'Synchronisation\u2026' : 'Synchroniser' }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- KPI cards -->\r
  <div class="ip-kpi-row">\r
    <div class="ip-kpi-card">\r
      <div class="ip-kpi-icon"><i class="isax isax-award"></i></div>\r
      <div>\r
        <div class="ip-kpi-label">Total certificats</div>\r
        <div class="ip-kpi-value">{{ totalCertificats }}</div>\r
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
                 [(ngModel)]="filterSearch" (ngModelChange)="applyFilters()"\r
                 placeholder="Rechercher par employ\xE9, formation, code\u2026">\r
        </div>\r
      </div>\r
      <div class="ip-filter-group">\r
        <select class="ip-input" [(ngModel)]="filterStatut" (ngModelChange)="applyFilters()">\r
          <option value="all">Tous les statuts</option>\r
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
          <tr *ngFor="let cert of paginatedCertificats">\r
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
            <td>\r
              <div class="ip-formation-name">{{ cert.formation?.titre }}</div>\r
              <div class="ip-formation-meta" *ngIf="cert.formation?.duree_totale">\r
                <i class="isax isax-clock"></i> {{ cert.formation?.duree_totale }}h\r
              </div>\r
            </td>\r
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
                        [disabled]="downloading" (click)="downloadPdf(cert)">\r
                  <i [class]="downloading ? 'isax isax-refresh ip-spin' : 'isax isax-document-download'"></i>\r
                </button>\r
              </div>\r
            </td>\r
          </tr>\r
          <tr *ngIf="filteredCertificats.length === 0">\r
            <td colspan="7" class="ip-empty">\r
              <i class="isax isax-award"></i>\r
              <span>Aucun certificat trouv\xE9</span>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
\r
  <!-- Pagination -->\r
  <div *ngIf="totalPages > 1" class="ip-pagination">\r
    <span class="ip-pagination__info">\r
      {{ (currentPage - 1) * itemsPerPage + 1 }}\u2013{{ pageEnd }}\r
      sur {{ filteredCertificats.length }} certificats\r
    </span>\r
    <div class="ip-pagination__controls">\r
      <button class="ip-pg-btn" [disabled]="currentPage === 1" (click)="goToPage(currentPage - 1)">\r
        <i class="isax isax-arrow-left-2"></i>\r
      </button>\r
      <ng-container *ngFor="let p of pageNumbers">\r
        <span *ngIf="p === -1" class="ip-pg-ellipsis">\u2026</span>\r
        <button *ngIf="p !== -1" class="ip-pg-btn"\r
                [class.ip-pg-btn--active]="p === currentPage"\r
                (click)="goToPage(p)">{{ p }}</button>\r
      </ng-container>\r
      <button class="ip-pg-btn" [disabled]="currentPage === totalPages" (click)="goToPage(currentPage + 1)">\r
        <i class="isax isax-arrow-right-3"></i>\r
      </button>\r
    </div>\r
  </div>\r
\r
</ng-container>\r
\r
<!-- \u2500\u2500 MODAL D\xC9TAILS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div class="modal fade" id="arh_cert_details_modal" tabindex="-1" aria-hidden="true">\r
  <div class="modal-dialog modal-dialog-centered ip-modal-dialog">\r
    <div class="modal-content ip-modal-content" *ngIf="selectedCert">\r
\r
      <div class="ip-cert-accent" [style.background]="config.couleur_principale"></div>\r
\r
      <div class="ip-modal-header">\r
        <div class="ip-modal-icon" [style.background]="config.couleur_principale + '20'"\r
             [style.color]="config.couleur_principale">\r
          <i class="isax isax-award"></i>\r
        </div>\r
        <div>\r
          <h5 class="ip-modal-title">Certificat de r\xE9ussite</h5>\r
          <p class="ip-modal-sub">N\xB0 {{ selectedCert.code_unique }}</p>\r
        </div>\r
        <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal"></button>\r
      </div>\r
      <div class="ip-modal-divider"></div>\r
\r
      <div class="ip-modal-body">\r
        <div class="ip-cert-preview" [style.background]="config.bg_couleur">\r
\r
          <div class="ip-cert-logo">\r
            <img *ngIf="config.logo_url" [src]="config.logo_url" class="ip-cert-card__logo-img" alt="logo"\r
                 style="width:36px;height:36px;object-fit:contain;">\r
            <div *ngIf="!config.logo_url" class="ip-cert-logo-mark"\r
                 [style.background]="config.couleur_principale">\r
              {{ getInitials(config.entreprise_nom || 'E') }}\r
            </div>\r
            <div>\r
              <div class="ip-cert-logo-text">{{ config.entreprise_nom || selectedCert.employe?.prenom + ' ' + selectedCert.employe?.nom }}</div>\r
              <div class="ip-cert-logo-sub">{{ config.entreprise_sous_titre }}</div>\r
            </div>\r
          </div>\r
\r
          <div class="ip-cert-label">Certificat de r\xE9ussite</div>\r
          <div class="ip-cert-action-text">{{ config.accroche }}</div>\r
          <div class="ip-cert-formation-title" [style.color]="config.couleur_principale">\r
            {{ selectedCert.formation?.titre }}\r
          </div>\r
\r
          <div class="ip-cert-score-row" *ngIf="config.show_duree && selectedCert.formation?.duree_totale">\r
            <div class="ip-cert-score-item">\r
              <div class="ip-cert-score-val">{{ selectedCert.formation?.duree_totale }}h</div>\r
              <div class="ip-cert-score-label">Dur\xE9e totale</div>\r
            </div>\r
          </div>\r
\r
          <div class="ip-cert-sig-row">\r
            <div class="ip-cert-sig">\r
              <div class="ip-cert-sig-line"></div>\r
              <div class="ip-cert-sig-name">{{ config.signataire_nom || '\u2014' }}</div>\r
              <div class="ip-cert-sig-role">{{ config.signataire_role }}</div>\r
            </div>\r
            <div *ngIf="config.show_formateur" class="ip-cert-sig">\r
              <div class="ip-cert-sig-line"></div>\r
              <div class="ip-cert-sig-name">{{ selectedCert.formateur?.prenom }} {{ selectedCert.formateur?.nom }}</div>\r
              <div class="ip-cert-sig-role" [style.color]="config.couleur_principale">\r
                Formateur \xB7 {{ selectedCert.formation?.titre }}\r
              </div>\r
            </div>\r
            <div *ngIf="config.show_qr" class="ip-cert-qr"><i class="isax isax-scan-barcode"></i></div>\r
          </div>\r
\r
          <div class="ip-cert-validity">\r
            D\xE9livr\xE9 le {{ selectedCert.date_delivrance | date:'dd MMMM yyyy' : '' : 'fr-FR' }}\r
            <ng-container *ngIf="config.show_date_expiration && selectedCert.date_expiration">\r
              \xB7 Valide jusqu'au {{ selectedCert.date_expiration | date:'dd MMMM yyyy' : '' : 'fr-FR' }}\r
            </ng-container>\r
          </div>\r
        </div>\r
\r
        <div class="ip-detail-row ip-detail-row--mt">\r
          <div class="ip-detail-block ip-detail-block--half">\r
            <div class="ip-detail-icon-wrap"><i class="isax isax-tag"></i></div>\r
            <div>\r
              <div class="ip-detail-label">Code unique</div>\r
              <div class="ip-detail-value ip-detail-value--mono">{{ selectedCert.code_unique }}</div>\r
            </div>\r
          </div>\r
          <div class="ip-detail-block ip-detail-block--half">\r
            <div class="ip-detail-icon-wrap"><i class="isax isax-status"></i></div>\r
            <div>\r
              <div class="ip-detail-label">Statut</div>\r
              <div>\r
                <span class="ip-cert-badge"\r
                      [class.ip-cert-badge--valide]="selectedCert.statut === 'valide'"\r
                      [class.ip-cert-badge--expire]="selectedCert.statut === 'expir\xE9'"\r
                      [class.ip-cert-badge--revoque]="selectedCert.statut === 'r\xE9voqu\xE9'">\r
                  <i class="fa-solid fa-circle"></i>\r
                  {{ selectedCert.statut === 'valide' ? 'Valide' : selectedCert.statut === 'expir\xE9' ? 'Expir\xE9' : 'R\xE9voqu\xE9' }}\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="ip-modal-divider"></div>\r
      <div class="ip-modal-footer">\r
        <button type="button" class="ip-btn ip-btn--ghost" data-bs-dismiss="modal">Fermer</button>\r
        <button type="button" class="ip-btn ip-btn--primary"\r
                [style.background]="config.couleur_principale"\r
                [disabled]="downloading"\r
                (click)="downloadPdf(selectedCert)">\r
          <i [class]="downloading ? 'isax isax-refresh ip-spin' : 'isax isax-document-download'"></i>\r
          {{ downloading ? 'G\xE9n\xE9ration\u2026' : 'T\xE9l\xE9charger PDF' }}\r
        </button>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/adminrh/adminrh-certificate/adminrh-certificate.component.scss */\n.ip-loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-head-actions {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ip-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn i {\n  font-size: 15px;\n}\n.ip-btn--primary {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-btn--ghost {\n  background: #fff;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n}\n.ip-btn--wide {\n  width: 100%;\n  justify-content: center;\n}\n.ip-btn--sm {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.ip-btn[disabled] {\n  opacity: 0.55;\n  cursor: default;\n}\n.ip-customizer-layout {\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  gap: 24px;\n  align-items: flex-start;\n}\n@media (max-width: 900px) {\n  .ip-customizer-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-panel {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.ip-section {\n  padding: 16px 20px;\n  border-bottom: 1px solid #E9ECEF;\n}\n.ip-section:last-child {\n  border-bottom: none;\n}\n.ip-section-head {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1A1A2E;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ip-section-head i {\n  color: #D4AF37;\n  font-size: 14px;\n}\n.ip-field {\n  margin-bottom: 12px;\n}\n.ip-field:last-child {\n  margin-bottom: 0;\n}\n.ip-label {\n  display: block;\n  font-size: 11px;\n  font-weight: 500;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 5px;\n}\n.ip-input {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon {\n  padding-left: 34px;\n}\n.ip-input-icon-wrap {\n  position: relative;\n}\n.ip-input-icon {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-palette-row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.ip-palette-swatch {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n  transition: transform 0.12s, border-color 0.12s;\n  padding: 0;\n}\n.ip-palette-swatch--active {\n  border-color: #1A1A2E;\n  transform: scale(1.15);\n}\n.ip-palette-swatch:hover {\n  transform: scale(1.1);\n}\n.ip-color-pick {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 1px solid #E9ECEF;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n}\n.ip-color-pick::-webkit-color-swatch-wrapper {\n  padding: 0;\n  border-radius: 50%;\n}\n.ip-color-pick::-webkit-color-swatch {\n  border-radius: 50%;\n  border: none;\n}\n.ip-toggle-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 9px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-toggle-row:last-child {\n  border-bottom: none;\n}\n.ip-toggle-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-toggle-sub {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 1px;\n}\n.ip-switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.ip-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ip-switch-track {\n  position: absolute;\n  inset: 0;\n  border-radius: 22px;\n  background: #DEE2E6;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.ip-switch-track::before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.ip-switch input:checked + .ip-switch-track {\n  background: #D4AF37;\n}\n.ip-switch input:checked + .ip-switch-track::before {\n  transform: translateX(18px);\n}\n.ip-save-row {\n  padding: 16px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-save-ok {\n  font-size: 12px;\n  color: #059669;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.ip-save-ok i {\n  font-size: 14px;\n}\n.ip-preview-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 14px;\n}\n.ip-preview-head i {\n  font-size: 14px;\n  margin-right: 4px;\n}\n.ip-cert-card {\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n}\n.ip-cert-card__bar {\n  height: 6px;\n}\n.ip-cert-card__header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #E9ECEF;\n}\n.ip-cert-card__logo-wrap {\n  flex-shrink: 0;\n}\n.ip-cert-card__logo-img {\n  width: 36px;\n  height: 36px;\n  object-fit: contain;\n  border-radius: 6px;\n}\n.ip-cert-card__logo-mark {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n}\n.ip-cert-card__header-text {\n  flex: 1;\n  min-width: 0;\n}\n.ip-cert-card__company {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.ip-cert-card__company-sub {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-cert-card__num {\n  font-size: 11px;\n  color: #6C757D;\n  font-family: monospace;\n  white-space: nowrap;\n}\n.ip-cert-card__body {\n  padding: 20px;\n  text-align: center;\n}\n.ip-cert-card__label {\n  font-size: 10px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-bottom: 6px;\n}\n.ip-cert-card__name {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n  margin-bottom: 6px;\n}\n.ip-cert-card__accroche {\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 6px;\n}\n.ip-cert-card__formation {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.ip-cert-card__stats {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 16px;\n}\n.ip-cert-card__stat {\n  text-align: center;\n}\n.ip-cert-card__stat-val {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-cert-card__stat-label {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.ip-cert-card__stat-sep {\n  width: 1px;\n  height: 32px;\n  background: #E9ECEF;\n}\n.ip-cert-card__sig-row {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding-top: 12px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 4px;\n}\n.ip-cert-card__sig {\n  text-align: center;\n}\n.ip-cert-card__sig-line {\n  width: 70px;\n  height: 1px;\n  background: #E9ECEF;\n  margin: 0 auto 4px;\n}\n.ip-cert-card__sig-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-card__sig-role {\n  font-size: 10px;\n  color: #6C757D;\n}\n.ip-cert-card__qr {\n  width: 40px;\n  height: 40px;\n  background: #F8F9FA;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  color: #6C757D;\n}\n.ip-cert-card__validity {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 12px;\n}\n.ip-recent-head {\n  font-size: 10px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 10px;\n}\n.ip-sync-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 10px 16px;\n  margin-bottom: 16px;\n  font-size: 12px;\n}\n.ip-sync-hint {\n  color: #6C757D;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ip-sync-hint i {\n  color: #D4AF37;\n  font-size: 14px;\n}\n.ip-sync-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-sync-ok {\n  color: #059669;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.ip-sync-ok i {\n  font-size: 13px;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ip-spin {\n  animation: spin 0.8s linear infinite;\n  display: inline-block;\n}\n.ip-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-kpi-row {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.ip-kpi-card {\n  flex: 1;\n  min-width: 140px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ip-kpi-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.ip-kpi-icon--success {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-kpi-icon--warn {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-kpi-label {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 3px;\n}\n.ip-kpi-value {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-filter-card {\n  padding: 14px 18px;\n  margin-bottom: 20px;\n  overflow: visible;\n}\n.ip-filter-row {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.ip-filter-group {\n  flex: 1;\n  min-width: 160px;\n}\n.ip-filter-group--search {\n  flex: 2;\n  min-width: 220px;\n}\n.ip-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-table {\n  margin: 0;\n}\n.ip-table thead th {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table tbody td {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.ip-table tbody tr:hover td {\n  background: #FAFBFF;\n}\n.ip-user-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n}\n.ip-user-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-user-sub {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-formation-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-formation-meta {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 2px;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ip-formation-meta i {\n  font-size: 11px;\n}\n.ip-score-badge {\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 6px;\n}\n.ip-expire-warn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #D97706;\n}\n.ip-expire-warn i {\n  font-size: 11px;\n}\n.ip-cert-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 6px;\n}\n.ip-cert-badge i {\n  font-size: 8px;\n}\n.ip-cert-badge--valide {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-cert-badge--expire {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-cert-badge--revoque {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-actions {\n  display: flex;\n  gap: 4px;\n}\n.ip-action-btn {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n  text-decoration: none;\n}\n.ip-action-btn:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-empty {\n  text-align: center;\n  padding: 40px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty i {\n  font-size: 28px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-modal-dialog {\n  max-width: 540px;\n}\n.ip-modal-content {\n  border: none;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);\n}\n.ip-cert-accent {\n  height: 5px;\n}\n.ip-modal-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.ip-modal-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.ip-modal-title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 2px;\n}\n.ip-modal-sub {\n  font-size: 12px;\n  color: #6C757D;\n  margin: 0;\n  font-family: monospace;\n}\n.ip-modal-divider {\n  height: 1px;\n  background: #E9ECEF;\n}\n.ip-modal-body {\n  padding: 20px 24px;\n}\n.ip-modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n}\n.ip-cert-preview {\n  background: #FAFBFF;\n  border: 1px solid #E9ECEF;\n  border-radius: 12px;\n  padding: 20px 24px;\n  text-align: center;\n}\n.ip-cert-logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n  text-align: left;\n}\n.ip-cert-logo-mark {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fff;\n}\n.ip-cert-logo-text {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-logo-sub {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-cert-label {\n  font-size: 10px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 4px;\n}\n.ip-cert-action-text {\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 6px;\n}\n.ip-cert-formation-title {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 14px;\n}\n.ip-cert-score-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 14px;\n}\n.ip-cert-score-item {\n  text-align: center;\n}\n.ip-cert-score-val {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.ip-cert-score-label {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.ip-cert-divider-v {\n  width: 1px;\n  height: 32px;\n  background: #E9ECEF;\n}\n.ip-cert-sig-row {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding-top: 10px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 10px;\n}\n.ip-cert-sig {\n  text-align: center;\n}\n.ip-cert-sig-line {\n  width: 70px;\n  height: 1px;\n  background: #E9ECEF;\n  margin: 0 auto 4px;\n}\n.ip-cert-sig-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-sig-role {\n  font-size: 10px;\n  color: #6C757D;\n}\n.ip-cert-qr {\n  width: 40px;\n  height: 40px;\n  background: #F8F9FA;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  color: #6C757D;\n}\n.ip-cert-validity {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 12px;\n}\n.ip-detail-row {\n  display: flex;\n  gap: 0;\n}\n.ip-detail-row--mt {\n  margin-top: 16px;\n}\n.ip-detail-block {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-detail-block:last-child {\n  border-bottom: none;\n}\n.ip-detail-block--half {\n  flex: 1;\n  min-width: 0;\n}\n.ip-detail-icon-wrap {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #F8F9FA;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.ip-detail-label {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 2px;\n}\n.ip-detail-value {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-detail-value--mono {\n  font-family: monospace;\n}\n.ip-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 20px;\n  padding: 0 2px;\n}\n.ip-pagination__info {\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-pagination__controls {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ip-pg-btn {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E9ECEF;\n  border-radius: 6px;\n  background: #fff;\n  color: #6C757D;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.ip-pg-btn i {\n  font-size: 13px;\n}\n.ip-pg-btn:hover:not([disabled]):not(.ip-pg-btn--active) {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-pg-btn--active {\n  background: #D4AF37;\n  border-color: #D4AF37;\n  color: #fff;\n  font-weight: 600;\n  cursor: default;\n}\n.ip-pg-btn[disabled] {\n  opacity: 0.4;\n  cursor: default;\n}\n.ip-pg-ellipsis {\n  padding: 0 4px;\n  color: #6C757D;\n  font-size: 13px;\n  line-height: 32px;\n}\n/*# sourceMappingURL=adminrh-certificate.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }, { type: CertificatService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhCertificateComponent, { className: "AdminrhCertificateComponent", filePath: "app/features/adminrh/adminrh-certificate/adminrh-certificate.component.ts", lineNumber: 18 });
})();
export {
  AdminrhCertificateComponent
};
//# sourceMappingURL=chunk-4IEJ3LDE.js.map
