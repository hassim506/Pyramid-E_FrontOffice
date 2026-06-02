import {
  CertificatService
} from "./chunk-7KDALVVQ.js";
import "./chunk-5RVU2RVV.js";
import "./chunk-FQH4LUZ5.js";
import {
  environment
} from "./chunk-FKX6UC3I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-45DOGZAU.js";
import {
  HttpClient
} from "./chunk-46QRNFHM.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf
} from "./chunk-MNWNTO2T.js";
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
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/superadmin/superadmin-certificate/superadmin-certificate.component.ts
function SuperadminCertificateComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "span", 8);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function SuperadminCertificateComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 10);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_div_1_Template_button_click_2_listener() {
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
function SuperadminCertificateComponent_ng_container_2_option_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r4 = ctx.$implicit;
    \u0275\u0275property("value", e_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r4.nom);
  }
}
function SuperadminCertificateComponent_ng_container_2_tr_88_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cert_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("color", ctx_r1.getScoreColor(cert_r6.score_final))("background", ctx_r1.parseFloat(cert_r6.score_final) >= 80 ? "#ECFDF5" : ctx_r1.parseFloat(cert_r6.score_final) >= 60 ? "#FFFBEB" : "#FFF5F5");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cert_r6.score_final, "% ");
  }
}
function SuperadminCertificateComponent_ng_container_2_tr_88_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function SuperadminCertificateComponent_ng_container_2_tr_88_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275element(1, "i", 72);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cert_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, cert_r6.date_expiration, "dd/MM/yyyy"), " ");
  }
}
function SuperadminCertificateComponent_ng_container_2_tr_88_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cert_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, cert_r6.date_expiration, "dd/MM/yyyy"), " ");
  }
}
function SuperadminCertificateComponent_ng_container_2_tr_88_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, "Illimit\xE9e");
    \u0275\u0275elementEnd();
  }
}
function SuperadminCertificateComponent_ng_container_2_tr_88_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_ng_container_2_tr_88_button_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const cert_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.revoke(cert_r6));
    });
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275elementEnd();
  }
}
function SuperadminCertificateComponent_ng_container_2_tr_88_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 74);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_ng_container_2_tr_88_button_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const cert_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reactivate(cert_r6));
    });
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275elementEnd();
  }
}
function SuperadminCertificateComponent_ng_container_2_tr_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 48)(3, "div", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 50);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 51);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "div", 52);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 53);
    \u0275\u0275element(15, "i", 54);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275template(18, SuperadminCertificateComponent_ng_container_2_tr_88_span_18_Template, 2, 5, "span", 55)(19, SuperadminCertificateComponent_ng_container_2_tr_88_span_19_Template, 2, 0, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "span", 57);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275template(25, SuperadminCertificateComponent_ng_container_2_tr_88_span_25_Template, 4, 4, "span", 58)(26, SuperadminCertificateComponent_ng_container_2_tr_88_span_26_Template, 3, 4, "span", 56)(27, SuperadminCertificateComponent_ng_container_2_tr_88_span_27_Template, 2, 0, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td")(29, "span", 59);
    \u0275\u0275element(30, "i", 60);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "td")(33, "div", 61)(34, "button", 62);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_ng_container_2_tr_88_Template_button_click_34_listener() {
      const cert_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetails(cert_r6));
    });
    \u0275\u0275element(35, "i", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 64);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_ng_container_2_tr_88_Template_button_click_36_listener() {
      const cert_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadPdf(cert_r6));
    });
    \u0275\u0275element(37, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, SuperadminCertificateComponent_ng_container_2_tr_88_button_38_Template, 2, 0, "button", 66)(39, SuperadminCertificateComponent_ng_container_2_tr_88_button_39_Template, 2, 0, "button", 67);
    \u0275\u0275elementStart(40, "button", 68);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_ng_container_2_tr_88_Template_button_click_40_listener() {
      const cert_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.delete(cert_r6));
    });
    \u0275\u0275element(41, "i", 69);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cert_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r1.getAvatarStyle(cert_r6.employe_id).bg)("color", ctx_r1.getAvatarStyle(cert_r6.employe_id).color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials((cert_r6.employe == null ? null : cert_r6.employe.name) || ""), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", cert_r6.employe == null ? null : cert_r6.employe.prenom, " ", cert_r6.employe == null ? null : cert_r6.employe.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cert_r6.employe == null ? null : cert_r6.employe.fonction);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cert_r6.formation == null ? null : cert_r6.formation.titre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (cert_r6.entreprise == null ? null : cert_r6.entreprise.nom) || "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", cert_r6.score_final);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cert_r6.score_final);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 25, cert_r6.date_delivrance, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", cert_r6.date_expiration && ctx_r1.isExpiringSoon(cert_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cert_r6.date_expiration && !ctx_r1.isExpiringSoon(cert_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cert_r6.date_expiration);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ip-cert-badge--valide", cert_r6.statut === "valide")("ip-cert-badge--expire", cert_r6.statut === "expir\xE9")("ip-cert-badge--revoque", cert_r6.statut === "r\xE9voqu\xE9");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", cert_r6.statut === "valide" ? "Valide" : cert_r6.statut === "expir\xE9" ? "Expir\xE9" : "R\xE9voqu\xE9", " ");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", cert_r6.statut === "valide");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cert_r6.statut === "r\xE9voqu\xE9");
  }
}
function SuperadminCertificateComponent_ng_container_2_tr_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 75);
    \u0275\u0275element(2, "i", 20);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Aucun certificat trouv\xE9");
    \u0275\u0275elementEnd()()();
  }
}
function SuperadminCertificateComponent_ng_container_2_div_90_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 82);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function SuperadminCertificateComponent_ng_container_2_div_90_ng_container_3_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 83);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_ng_container_2_div_90_ng_container_3_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const p_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ip-page-btn--active", p_r11 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r11);
  }
}
function SuperadminCertificateComponent_ng_container_2_div_90_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SuperadminCertificateComponent_ng_container_2_div_90_ng_container_3_span_1_Template, 2, 0, "span", 80)(2, SuperadminCertificateComponent_ng_container_2_div_90_ng_container_3_button_2_Template, 2, 3, "button", 81);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r11 === -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r11 !== -1);
  }
}
function SuperadminCertificateComponent_ng_container_2_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "button", 77);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_ng_container_2_div_90_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(2, "i", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SuperadminCertificateComponent_ng_container_2_div_90_ng_container_3_Template, 3, 2, "ng-container", 45);
    \u0275\u0275elementStart(4, "button", 77);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_ng_container_2_div_90_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(5, "i", 79);
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
function SuperadminCertificateComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "div")(3, "h5", 12);
    \u0275\u0275text(4, " Certificats ");
    \u0275\u0275elementStart(5, "span", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 14);
    \u0275\u0275text(8, "G\xE9rez tous les certificats d\xE9livr\xE9s sur la plateforme");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 15);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_ng_container_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadCertificates());
    });
    \u0275\u0275element(10, "i", 16);
    \u0275\u0275text(11, " Actualiser ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 17)(13, "div", 18)(14, "div", 19);
    \u0275\u0275element(15, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "div", 21);
    \u0275\u0275text(18, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 22);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 18)(22, "div", 23);
    \u0275\u0275element(23, "i", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div")(25, "div", 21);
    \u0275\u0275text(26, "Valides");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 22);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 18)(30, "div", 25);
    \u0275\u0275element(31, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div")(33, "div", 21);
    \u0275\u0275text(34, "Expir\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 22);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 18)(38, "div", 27);
    \u0275\u0275element(39, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div")(41, "div", 21);
    \u0275\u0275text(42, "R\xE9voqu\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 22);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 29)(46, "div", 30)(47, "div", 31)(48, "div", 32);
    \u0275\u0275element(49, "i", 33);
    \u0275\u0275elementStart(50, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminCertificateComponent_ng_container_2_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SuperadminCertificateComponent_ng_container_2_Template_input_ngModelChange_50_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 35)(52, "select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminCertificateComponent_ng_container_2_Template_select_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedStatus, $event) || (ctx_r1.selectedStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SuperadminCertificateComponent_ng_container_2_Template_select_ngModelChange_52_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementStart(53, "option", 37);
    \u0275\u0275text(54, "Tous les statuts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "option", 38);
    \u0275\u0275text(56, "Valide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "option", 39);
    \u0275\u0275text(58, "Expir\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "option", 40);
    \u0275\u0275text(60, "R\xE9voqu\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 35)(62, "select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminCertificateComponent_ng_container_2_Template_select_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedEntreprise, $event) || (ctx_r1.selectedEntreprise = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SuperadminCertificateComponent_ng_container_2_Template_select_ngModelChange_62_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementStart(63, "option", 37);
    \u0275\u0275text(64, "Toutes les entreprises");
    \u0275\u0275elementEnd();
    \u0275\u0275template(65, SuperadminCertificateComponent_ng_container_2_option_65_Template, 2, 2, "option", 41);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(66, "div", 42)(67, "div", 43)(68, "table", 44)(69, "thead")(70, "tr")(71, "th");
    \u0275\u0275text(72, "Employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "th");
    \u0275\u0275text(74, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "th");
    \u0275\u0275text(76, "Entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "th");
    \u0275\u0275text(78, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "th");
    \u0275\u0275text(80, "D\xE9livr\xE9 le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "th");
    \u0275\u0275text(82, "Expiration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "th");
    \u0275\u0275text(84, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "th");
    \u0275\u0275text(86, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(87, "tbody");
    \u0275\u0275template(88, SuperadminCertificateComponent_ng_container_2_tr_88_Template, 42, 28, "tr", 45)(89, SuperadminCertificateComponent_ng_container_2_tr_89_Template, 5, 0, "tr", 2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(90, SuperadminCertificateComponent_ng_container_2_div_90_Template, 6, 3, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.filteredCertificates.length);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.certificates.length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.totalValides);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.totalExpires);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.totalRevoques);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedStatus);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedEntreprise);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getUniqueEntreprises());
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r1.getPaginatedCertificates());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredCertificates.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
function SuperadminCertificateComponent_div_5_ng_container_52_Template(rf, ctx) {
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
function SuperadminCertificateComponent_div_5_button_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 125);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_div_5_button_74_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.revoke(ctx_r1.selectedCertificate));
    });
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2, " R\xE9voquer ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminCertificateComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275element(1, "div", 85);
    \u0275\u0275elementStart(2, "div", 86)(3, "div", 87);
    \u0275\u0275element(4, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h5", 88);
    \u0275\u0275text(7, "Certificat de r\xE9ussite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 89);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "button", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "div", 91);
    \u0275\u0275elementStart(12, "div", 92)(13, "div", 93)(14, "div", 94)(15, "div", 95);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div")(18, "div", 96);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 97);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 98);
    \u0275\u0275text(23, "Certificat de r\xE9ussite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 99);
    \u0275\u0275text(25, "a compl\xE9t\xE9 avec succ\xE8s la formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 100);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 101)(29, "div", 102)(30, "div", 103);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 104);
    \u0275\u0275text(33, "Score obtenu");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(34, "div", 105);
    \u0275\u0275elementStart(35, "div", 102)(36, "div", 103);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 104);
    \u0275\u0275text(39, "Dur\xE9e totale");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 106)(41, "div", 107);
    \u0275\u0275element(42, "div", 108);
    \u0275\u0275elementStart(43, "div", 109);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 110);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 111);
    \u0275\u0275element(48, "i", 112);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 113);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "date");
    \u0275\u0275template(52, SuperadminCertificateComponent_div_5_ng_container_52_Template, 3, 6, "ng-container", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 114)(54, "div", 115)(55, "div", 116);
    \u0275\u0275element(56, "i", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div")(58, "div", 118);
    \u0275\u0275text(59, "Code unique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 119);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 115)(63, "div", 116);
    \u0275\u0275element(64, "i", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div")(66, "div", 118);
    \u0275\u0275text(67, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div")(69, "span", 59);
    \u0275\u0275element(70, "i", 60);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275element(72, "div", 91);
    \u0275\u0275elementStart(73, "div", 121);
    \u0275\u0275template(74, SuperadminCertificateComponent_div_5_button_74_Template, 3, 0, "button", 122);
    \u0275\u0275elementStart(75, "button", 123);
    \u0275\u0275text(76, "Fermer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "button", 124);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_div_5_Template_button_click_77_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadPdf(ctx_r1.selectedCertificate));
    });
    \u0275\u0275element(78, "i", 65);
    \u0275\u0275text(79, " T\xE9l\xE9charger PDF ");
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
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r1.getScoreColor(ctx_r1.selectedCertificate.score_final));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCertificate.score_final, "% ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", (ctx_r1.selectedCertificate.formation == null ? null : ctx_r1.selectedCertificate.formation.duree_totale) || "\u2014", "h");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedCertificate.formateur == null ? null : ctx_r1.selectedCertificate.formateur.prenom, " ", ctx_r1.selectedCertificate.formateur == null ? null : ctx_r1.selectedCertificate.formateur.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Formateur \xB7 ", ctx_r1.selectedCertificate.formation == null ? null : ctx_r1.selectedCertificate.formation.titre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" D\xE9livr\xE9 le ", \u0275\u0275pipeBind4(51, 30, ctx_r1.selectedCertificate.date_delivrance, "dd MMMM yyyy", "", "fr-FR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedCertificate.date_expiration);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.selectedCertificate.code_unique);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("ip-cert-badge--valide", ctx_r1.selectedCertificate.statut === "valide")("ip-cert-badge--expire", ctx_r1.selectedCertificate.statut === "expir\xE9")("ip-cert-badge--revoque", ctx_r1.selectedCertificate.statut === "r\xE9voqu\xE9");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCertificate.statut === "valide" ? "Valide" : ctx_r1.selectedCertificate.statut === "expir\xE9" ? "Expir\xE9" : "R\xE9voqu\xE9", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedCertificate.statut === "valide");
  }
}
var SuperadminCertificateComponent = class _SuperadminCertificateComponent {
  http;
  certService;
  certificates = [];
  filteredCertificates = [];
  loading = false;
  error = "";
  selectedCertificate = null;
  searchTerm = "";
  selectedStatus = "";
  selectedEntreprise = "";
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
      const matchEnt = !this.selectedEntreprise || c.entreprise_id.toString() === this.selectedEntreprise;
      return matchSearch && matchStatus && matchEnt;
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
      const el = document.getElementById("sa_cert_details_modal");
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
  getUniqueEntreprises() {
    const map = /* @__PURE__ */ new Map();
    this.certificates.forEach((c) => {
      if (c.entreprise_id && c.entreprise?.nom)
        map.set(c.entreprise_id, c.entreprise.nom);
    });
    return Array.from(map.entries()).map(([id, nom]) => ({ id, nom }));
  }
  updateStatus(id, statut) {
    this.http.put(`${this.apiUrl}/certificats/${id}`, { statut }).subscribe({
      next: () => {
        const i = this.certificates.findIndex((c) => c.id === id);
        if (i !== -1) {
          this.certificates[i].statut = statut;
          this.applyFilters();
        }
        if (this.selectedCertificate?.id === id)
          this.selectedCertificate.statut = statut;
      },
      error: () => {
        this.error = "Erreur lors de la mise \xE0 jour du statut.";
      }
    });
  }
  revoke(cert) {
    if (confirm(`R\xE9voquer le certificat ${cert.code_unique} ?`))
      this.updateStatus(cert.id, "r\xE9voqu\xE9");
  }
  reactivate(cert) {
    if (confirm(`R\xE9activer le certificat ${cert.code_unique} ?`))
      this.updateStatus(cert.id, "valide");
  }
  delete(cert) {
    if (!confirm(`Supprimer d\xE9finitivement ${cert.code_unique} ?`))
      return;
    this.http.delete(`${this.apiUrl}/certificats/${cert.id}`).subscribe({
      next: () => {
        this.certificates = this.certificates.filter((c) => c.id !== cert.id);
        this.applyFilters();
      },
      error: () => {
        this.error = "Erreur lors de la suppression.";
      }
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
  get totalRevoques() {
    return this.certificates.filter((c) => c.statut === "r\xE9voqu\xE9").length;
  }
  static \u0275fac = function SuperadminCertificateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminCertificateComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(CertificatService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminCertificateComponent, selectors: [["app-superadmin-certificate"]], decls: 6, vars: 4, consts: [["class", "ip-loader", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible", 4, "ngIf"], [4, "ngIf"], ["id", "sa_cert_details_modal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "ip-modal-dialog"], ["class", "modal-content ip-modal-content", 4, "ngIf"], [1, "ip-loader"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "alert", "alert-danger", "alert-dismissible"], ["type", "button", 1, "btn-close", 3, "click"], [1, "ip-page-head"], [1, "ip-page-head__title"], [1, "ip-count"], [1, "ip-page-head__sub"], ["type", "button", 1, "ip-btn", "ip-btn--ghost", 3, "click"], [1, "isax", "isax-refresh"], [1, "ip-kpi-row"], [1, "ip-kpi-card"], [1, "ip-kpi-icon"], [1, "isax", "isax-award"], [1, "ip-kpi-label"], [1, "ip-kpi-value"], [1, "ip-kpi-icon", "ip-kpi-icon--success"], [1, "isax", "isax-tick-circle"], [1, "ip-kpi-icon", "ip-kpi-icon--warn"], [1, "isax", "isax-clock"], [1, "ip-kpi-icon", "ip-kpi-icon--danger"], [1, "isax", "isax-close-circle"], [1, "ip-card", "ip-filter-card"], [1, "ip-filter-row"], [1, "ip-filter-group", "ip-filter-group--search"], [1, "ip-input-icon-wrap"], [1, "isax", "isax-search-normal", "ip-input-icon"], ["type", "text", "placeholder", "Code, employ\xE9, formation\u2026", 1, "ip-input", "ip-input--icon", 3, "ngModelChange", "ngModel"], [1, "ip-filter-group"], [1, "ip-input", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "valide"], ["value", "expir\xE9"], ["value", "r\xE9voqu\xE9"], [3, "value", 4, "ngFor", "ngForOf"], [1, "ip-card"], [1, "table-responsive"], [1, "table", "ip-table"], [4, "ngFor", "ngForOf"], ["class", "ip-pagination", 4, "ngIf"], [3, "value"], [1, "ip-user-cell"], [1, "ip-avatar"], [1, "ip-user-name"], [1, "ip-user-sub"], [1, "ip-formation-name"], [1, "ip-pill"], [1, "isax", "isax-building"], ["class", "ip-score-badge", 3, "color", "background", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "text-muted"], ["class", "ip-expire-warn", 4, "ngIf"], [1, "ip-cert-badge"], [1, "fa-solid", "fa-circle"], [1, "ip-actions"], ["type", "button", "title", "D\xE9tails", 1, "ip-action-btn", 3, "click"], [1, "isax", "isax-eye"], ["type", "button", "title", "T\xE9l\xE9charger PDF", 1, "ip-action-btn", 3, "click"], [1, "isax", "isax-document-download"], ["type", "button", "class", "ip-action-btn ip-action-btn--warn", "title", "R\xE9voquer", 3, "click", 4, "ngIf"], ["type", "button", "class", "ip-action-btn ip-action-btn--success", "title", "R\xE9activer", 3, "click", 4, "ngIf"], ["type", "button", "title", "Supprimer", 1, "ip-action-btn", "text-danger", 3, "click"], [1, "isax", "isax-trash"], [1, "ip-score-badge"], [1, "ip-expire-warn"], [1, "fa-solid", "fa-triangle-exclamation"], ["type", "button", "title", "R\xE9voquer", 1, "ip-action-btn", "ip-action-btn--warn", 3, "click"], ["type", "button", "title", "R\xE9activer", 1, "ip-action-btn", "ip-action-btn--success", 3, "click"], ["colspan", "8", 1, "ip-empty"], [1, "ip-pagination"], ["type", "button", 1, "ip-page-btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], [1, "isax", "isax-arrow-right-3"], ["class", "ip-page-ellipsis", 4, "ngIf"], ["type", "button", "class", "ip-page-btn", 3, "ip-page-btn--active", "click", 4, "ngIf"], [1, "ip-page-ellipsis"], ["type", "button", 1, "ip-page-btn", 3, "click"], [1, "modal-content", "ip-modal-content"], [1, "ip-cert-accent"], [1, "ip-modal-header"], [1, "ip-modal-icon"], [1, "ip-modal-title"], [1, "ip-modal-sub"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close", "ms-auto"], [1, "ip-modal-divider"], [1, "ip-modal-body"], [1, "ip-cert-preview"], [1, "ip-cert-logo"], [1, "ip-cert-logo-mark"], [1, "ip-cert-logo-text"], [1, "ip-cert-logo-sub"], [1, "ip-cert-label"], [1, "ip-cert-action-text"], [1, "ip-cert-formation-title"], [1, "ip-cert-score-row"], [1, "ip-cert-score-item"], [1, "ip-cert-score-val"], [1, "ip-cert-score-label"], [1, "ip-cert-divider-v"], [1, "ip-cert-sig-row"], [1, "ip-cert-sig"], [1, "ip-cert-sig-line"], [1, "ip-cert-sig-name"], [1, "ip-cert-sig-role"], [1, "ip-cert-qr"], [1, "isax", "isax-scan-barcode"], [1, "ip-cert-validity"], [1, "ip-detail-row", "ip-detail-row--mt"], [1, "ip-detail-block", "ip-detail-block--half"], [1, "ip-detail-icon-wrap"], [1, "isax", "isax-tag"], [1, "ip-detail-label"], [1, "ip-detail-value", "ip-detail-value--mono"], [1, "isax", "isax-status"], [1, "ip-modal-footer"], ["type", "button", "class", "ip-btn ip-btn--danger", "data-bs-dismiss", "modal", 3, "click", 4, "ngIf"], ["type", "button", "data-bs-dismiss", "modal", 1, "ip-btn", "ip-btn--ghost"], ["type", "button", 1, "ip-btn", "ip-btn--primary", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", 1, "ip-btn", "ip-btn--danger", 3, "click"]], template: function SuperadminCertificateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, SuperadminCertificateComponent_div_0_Template, 4, 0, "div", 0)(1, SuperadminCertificateComponent_div_1_Template, 3, 1, "div", 1)(2, SuperadminCertificateComponent_ng_container_2_Template, 91, 12, "ng-container", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275template(5, SuperadminCertificateComponent_div_5_Template, 80, 35, "div", 5);
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
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n\n.ip-loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.ip-kpi-card[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ip-kpi-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.ip-kpi-icon--success[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-kpi-icon--warn[_ngcontent-%COMP%] {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-kpi-icon--danger[_ngcontent-%COMP%] {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-kpi-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 3px;\n}\n.ip-kpi-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-filter-card[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  margin-bottom: 20px;\n  overflow: visible;\n}\n.ip-filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.ip-filter-group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.ip-filter-group--search[_ngcontent-%COMP%] {\n  flex: 2;\n  min-width: 220px;\n}\n.ip-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-table[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ip-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #FAFBFF;\n}\n.ip-user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n}\n.ip-user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-user-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-formation-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #F1F3F5;\n  color: #495057;\n  font-size: 11px;\n  padding: 3px 8px;\n  border-radius: 20px;\n}\n.ip-pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ip-score-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 6px;\n}\n.ip-expire-warn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #D97706;\n}\n.ip-expire-warn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ip-cert-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 6px;\n}\n.ip-cert-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n.ip-cert-badge--valide[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-cert-badge--expire[_ngcontent-%COMP%] {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-cert-badge--revoque[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.ip-action-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n  text-decoration: none;\n}\n.ip-action-btn[_ngcontent-%COMP%]:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-action-btn--warn[_ngcontent-%COMP%]:hover {\n  border-color: #D97706;\n  color: #D97706;\n  background: #FFF9EC;\n}\n.ip-action-btn--success[_ngcontent-%COMP%]:hover {\n  border-color: #059669;\n  color: #059669;\n  background: #ECFDF5;\n}\n.ip-action-btn.text-danger[_ngcontent-%COMP%]:hover {\n  border-color: #DC3545;\n  color: #DC3545;\n  background: #FFF5F5;\n}\n.ip-action-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: default;\n  pointer-events: none;\n}\n.ip-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 14px 16px;\n  border-top: 1px solid #E9ECEF;\n}\n.ip-page-btn[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 8px;\n  transition: all 0.12s;\n}\n.ip-page-btn[_ngcontent-%COMP%]:hover:not([disabled]) {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-page-btn--active[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  color: #fff;\n  border-color: #D4AF37;\n  font-weight: 600;\n}\n.ip-page-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: default;\n}\n.ip-page-ellipsis[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  padding: 0 4px;\n}\n.ip-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon[_ngcontent-%COMP%] {\n  padding-left: 34px;\n}\n.ip-input-icon-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ip-input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.ip-btn--primary[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary[_ngcontent-%COMP%]:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-btn--ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n}\n.ip-btn--danger[_ngcontent-%COMP%] {\n  background: #FFF5F5;\n  color: #DC3545;\n  border: 1px solid #FECACA;\n}\n.ip-btn--danger[_ngcontent-%COMP%]:hover {\n  background: #DC3545;\n  color: #fff;\n}\n.ip-modal-dialog[_ngcontent-%COMP%] {\n  max-width: 540px;\n}\n.ip-modal-content[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);\n}\n.ip-cert-accent[_ngcontent-%COMP%] {\n  height: 5px;\n}\n.ip-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.ip-modal-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.ip-modal-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 2px;\n}\n.ip-modal-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  margin: 0;\n  font-family: monospace;\n}\n.ip-modal-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #E9ECEF;\n}\n.ip-modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.ip-modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n}\n.ip-cert-preview[_ngcontent-%COMP%] {\n  background: #FAFBFF;\n  border: 1px solid #E9ECEF;\n  border-radius: 12px;\n  padding: 20px 24px;\n  text-align: center;\n}\n.ip-cert-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n  text-align: left;\n}\n.ip-cert-logo-mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fff;\n}\n.ip-cert-logo-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-logo-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-cert-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 4px;\n}\n.ip-cert-action-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 6px;\n}\n.ip-cert-formation-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 14px;\n}\n.ip-cert-score-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 14px;\n}\n.ip-cert-score-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ip-cert-score-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.ip-cert-score-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.ip-cert-divider-v[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: #E9ECEF;\n}\n.ip-cert-sig-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding-top: 10px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 10px;\n}\n.ip-cert-sig[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ip-cert-sig-line[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 1px;\n  background: #E9ECEF;\n  margin: 0 auto 4px;\n}\n.ip-cert-sig-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-sig-role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n}\n.ip-cert-qr[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #F8F9FA;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  color: #6C757D;\n}\n.ip-cert-validity[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 12px;\n}\n.ip-detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n}\n.ip-detail-row--mt[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.ip-detail-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-detail-block[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-detail-block--half[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ip-detail-icon-wrap[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #F8F9FA;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.ip-detail-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 2px;\n}\n.ip-detail-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-detail-value--mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n/*# sourceMappingURL=superadmin-certificate.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminCertificateComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-certificate", imports: [CommonModule, FormsModule], template: `<!-- Loading -->
<div *ngIf="loading" class="ip-loader">
  <div class="spinner-border" role="status"><span class="visually-hidden">Chargement...</span></div>
</div>

<!-- Error -->
<div *ngIf="error" class="alert alert-danger alert-dismissible">
  {{ error }}
  <button type="button" class="btn-close" (click)="error = ''"></button>
</div>

<ng-container *ngIf="!loading">

  <!-- Page header -->
  <div class="ip-page-head">
    <div>
      <h5 class="ip-page-head__title">
        Certificats <span class="ip-count">{{ filteredCertificates.length }}</span>
      </h5>
      <p class="ip-page-head__sub">G\xE9rez tous les certificats d\xE9livr\xE9s sur la plateforme</p>
    </div>
    <button type="button" class="ip-btn ip-btn--ghost" (click)="loadCertificates()">
      <i class="isax isax-refresh"></i> Actualiser
    </button>
  </div>

  <!-- KPI cards -->
  <div class="ip-kpi-row">
    <div class="ip-kpi-card">
      <div class="ip-kpi-icon"><i class="isax isax-award"></i></div>
      <div>
        <div class="ip-kpi-label">Total</div>
        <div class="ip-kpi-value">{{ certificates.length }}</div>
      </div>
    </div>
    <div class="ip-kpi-card">
      <div class="ip-kpi-icon ip-kpi-icon--success"><i class="isax isax-tick-circle"></i></div>
      <div>
        <div class="ip-kpi-label">Valides</div>
        <div class="ip-kpi-value">{{ totalValides }}</div>
      </div>
    </div>
    <div class="ip-kpi-card">
      <div class="ip-kpi-icon ip-kpi-icon--warn"><i class="isax isax-clock"></i></div>
      <div>
        <div class="ip-kpi-label">Expir\xE9s</div>
        <div class="ip-kpi-value">{{ totalExpires }}</div>
      </div>
    </div>
    <div class="ip-kpi-card">
      <div class="ip-kpi-icon ip-kpi-icon--danger"><i class="isax isax-close-circle"></i></div>
      <div>
        <div class="ip-kpi-label">R\xE9voqu\xE9s</div>
        <div class="ip-kpi-value">{{ totalRevoques }}</div>
      </div>
    </div>
  </div>

  <!-- Filters -->
  <div class="ip-card ip-filter-card">
    <div class="ip-filter-row">
      <div class="ip-filter-group ip-filter-group--search">
        <div class="ip-input-icon-wrap">
          <i class="isax isax-search-normal ip-input-icon"></i>
          <input type="text" class="ip-input ip-input--icon"
                 [(ngModel)]="searchTerm" (ngModelChange)="applyFilters()"
                 placeholder="Code, employ\xE9, formation\u2026">
        </div>
      </div>
      <div class="ip-filter-group">
        <select class="ip-input" [(ngModel)]="selectedStatus" (ngModelChange)="applyFilters()">
          <option value="">Tous les statuts</option>
          <option value="valide">Valide</option>
          <option value="expir\xE9">Expir\xE9</option>
          <option value="r\xE9voqu\xE9">R\xE9voqu\xE9</option>
        </select>
      </div>
      <div class="ip-filter-group">
        <select class="ip-input" [(ngModel)]="selectedEntreprise" (ngModelChange)="applyFilters()">
          <option value="">Toutes les entreprises</option>
          <option *ngFor="let e of getUniqueEntreprises()" [value]="e.id">{{ e.nom }}</option>
        </select>
      </div>
    </div>
  </div>

  <!-- Table -->
  <div class="ip-card">
    <div class="table-responsive">
      <table class="table ip-table">
        <thead>
          <tr>
            <th>Employ\xE9</th>
            <th>Formation</th>
            <th>Entreprise</th>
            <th>Score</th>
            <th>D\xE9livr\xE9 le</th>
            <th>Expiration</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let cert of getPaginatedCertificates()">
            <td>
              <div class="ip-user-cell">
                <div class="ip-avatar"
                     [style.background]="getAvatarStyle(cert.employe_id).bg"
                     [style.color]="getAvatarStyle(cert.employe_id).color">
                  {{ getInitials(cert.employe?.name || '') }}
                </div>
                <div>
                  <div class="ip-user-name">{{ cert.employe?.prenom }} {{ cert.employe?.nom }}</div>
                  <div class="ip-user-sub">{{ cert.employe?.fonction }}</div>
                </div>
              </div>
            </td>
            <td>
              <div class="ip-formation-name">{{ cert.formation?.titre }}</div>
            </td>
            <td>
              <span class="ip-pill">
                <i class="isax isax-building"></i> {{ cert.entreprise?.nom || '\u2014' }}
              </span>
            </td>
            <td>
              <span *ngIf="cert.score_final" class="ip-score-badge"
                    [style.color]="getScoreColor(cert.score_final)"
                    [style.background]="parseFloat(cert.score_final) >= 80 ? '#ECFDF5' : parseFloat(cert.score_final) >= 60 ? '#FFFBEB' : '#FFF5F5'">
                {{ cert.score_final }}%
              </span>
              <span *ngIf="!cert.score_final" class="text-muted">\u2014</span>
            </td>
            <td><span class="text-muted">{{ cert.date_delivrance | date:'dd/MM/yyyy' }}</span></td>
            <td>
              <span *ngIf="cert.date_expiration && isExpiringSoon(cert)" class="ip-expire-warn">
                <i class="fa-solid fa-triangle-exclamation"></i>
                {{ cert.date_expiration | date:'dd/MM/yyyy' }}
              </span>
              <span *ngIf="cert.date_expiration && !isExpiringSoon(cert)" class="text-muted">
                {{ cert.date_expiration | date:'dd/MM/yyyy' }}
              </span>
              <span *ngIf="!cert.date_expiration" class="text-muted">Illimit\xE9e</span>
            </td>
            <td>
              <span class="ip-cert-badge"
                    [class.ip-cert-badge--valide]="cert.statut === 'valide'"
                    [class.ip-cert-badge--expire]="cert.statut === 'expir\xE9'"
                    [class.ip-cert-badge--revoque]="cert.statut === 'r\xE9voqu\xE9'">
                <i class="fa-solid fa-circle"></i>
                {{ cert.statut === 'valide' ? 'Valide' : cert.statut === 'expir\xE9' ? 'Expir\xE9' : 'R\xE9voqu\xE9' }}
              </span>
            </td>
            <td>
              <div class="ip-actions">
                <button type="button" class="ip-action-btn" title="D\xE9tails" (click)="openDetails(cert)">
                  <i class="isax isax-eye"></i>
                </button>
                <button type="button" class="ip-action-btn" title="T\xE9l\xE9charger PDF"
                        (click)="downloadPdf(cert)">
                  <i class="isax isax-document-download"></i>
                </button>
                <button type="button" *ngIf="cert.statut === 'valide'"
                        class="ip-action-btn ip-action-btn--warn" title="R\xE9voquer"
                        (click)="revoke(cert)">
                  <i class="isax isax-close-circle"></i>
                </button>
                <button type="button" *ngIf="cert.statut === 'r\xE9voqu\xE9'"
                        class="ip-action-btn ip-action-btn--success" title="R\xE9activer"
                        (click)="reactivate(cert)">
                  <i class="isax isax-tick-circle"></i>
                </button>
                <button type="button" class="ip-action-btn text-danger" title="Supprimer"
                        (click)="delete(cert)">
                  <i class="isax isax-trash"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr *ngIf="filteredCertificates.length === 0">
            <td colspan="8" class="ip-empty">
              <i class="isax isax-award"></i>
              <span>Aucun certificat trouv\xE9</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div *ngIf="totalPages > 1" class="ip-pagination">
      <button type="button" class="ip-page-btn" [disabled]="currentPage === 1" (click)="goToPage(currentPage - 1)">
        <i class="isax isax-arrow-left-2"></i>
      </button>
      <ng-container *ngFor="let p of pages">
        <span *ngIf="p === -1" class="ip-page-ellipsis">\u2026</span>
        <button *ngIf="p !== -1" type="button" class="ip-page-btn"
                [class.ip-page-btn--active]="p === currentPage"
                (click)="goToPage(p)">{{ p }}</button>
      </ng-container>
      <button type="button" class="ip-page-btn" [disabled]="currentPage === totalPages" (click)="goToPage(currentPage + 1)">
        <i class="isax isax-arrow-right-3"></i>
      </button>
    </div>
  </div>

</ng-container>

<!-- \u2500\u2500 MODAL D\xC9TAILS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<div class="modal fade" id="sa_cert_details_modal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered ip-modal-dialog">
    <div class="modal-content ip-modal-content" *ngIf="selectedCertificate">

      <div class="ip-cert-accent" [style.background]="getScoreColor(selectedCertificate.score_final)"></div>

      <div class="ip-modal-header">
        <div class="ip-modal-icon"><i class="isax isax-award"></i></div>
        <div>
          <h5 class="ip-modal-title">Certificat de r\xE9ussite</h5>
          <p class="ip-modal-sub">N\xB0 {{ selectedCertificate.code_unique }}</p>
        </div>
        <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal"></button>
      </div>
      <div class="ip-modal-divider"></div>

      <div class="ip-modal-body">

        <div class="ip-cert-preview">
          <div class="ip-cert-logo">
            <div class="ip-cert-logo-mark" [style.background]="getScoreColor(selectedCertificate.score_final)">
              {{ getInitials(selectedCertificate.employe?.name || '') }}
            </div>
            <div>
              <div class="ip-cert-logo-text">{{ selectedCertificate.employe?.prenom }} {{ selectedCertificate.employe?.nom }}</div>
              <div class="ip-cert-logo-sub">{{ selectedCertificate.employe?.fonction }}</div>
            </div>
          </div>
          <div class="ip-cert-label">Certificat de r\xE9ussite</div>
          <div class="ip-cert-action-text">a compl\xE9t\xE9 avec succ\xE8s la formation</div>
          <div class="ip-cert-formation-title" [style.color]="getScoreColor(selectedCertificate.score_final)">
            {{ selectedCertificate.formation?.titre }}
          </div>
          <div class="ip-cert-score-row">
            <div class="ip-cert-score-item">
              <div class="ip-cert-score-val" [style.color]="getScoreColor(selectedCertificate.score_final)">
                {{ selectedCertificate.score_final }}%
              </div>
              <div class="ip-cert-score-label">Score obtenu</div>
            </div>
            <div class="ip-cert-divider-v"></div>
            <div class="ip-cert-score-item">
              <div class="ip-cert-score-val">{{ selectedCertificate.formation?.duree_totale || '\u2014' }}h</div>
              <div class="ip-cert-score-label">Dur\xE9e totale</div>
            </div>
          </div>
          <div class="ip-cert-sig-row">
            <div class="ip-cert-sig">
              <div class="ip-cert-sig-line"></div>
              <div class="ip-cert-sig-name">{{ selectedCertificate.formateur?.prenom }} {{ selectedCertificate.formateur?.nom }}</div>
              <div class="ip-cert-sig-role">Formateur \xB7 {{ selectedCertificate.formation?.titre }}</div>
            </div>
            <div class="ip-cert-qr"><i class="isax isax-scan-barcode"></i></div>
          </div>
          <div class="ip-cert-validity">
            D\xE9livr\xE9 le {{ selectedCertificate.date_delivrance | date:'dd MMMM yyyy' : '' : 'fr-FR' }}
            <ng-container *ngIf="selectedCertificate.date_expiration">
              \xB7 Valide jusqu'au {{ selectedCertificate.date_expiration | date:'dd MMMM yyyy' : '' : 'fr-FR' }}
            </ng-container>
          </div>
        </div>

        <div class="ip-detail-row ip-detail-row--mt">
          <div class="ip-detail-block ip-detail-block--half">
            <div class="ip-detail-icon-wrap"><i class="isax isax-tag"></i></div>
            <div>
              <div class="ip-detail-label">Code unique</div>
              <div class="ip-detail-value ip-detail-value--mono">{{ selectedCertificate.code_unique }}</div>
            </div>
          </div>
          <div class="ip-detail-block ip-detail-block--half">
            <div class="ip-detail-icon-wrap"><i class="isax isax-status"></i></div>
            <div>
              <div class="ip-detail-label">Statut</div>
              <div>
                <span class="ip-cert-badge"
                      [class.ip-cert-badge--valide]="selectedCertificate.statut === 'valide'"
                      [class.ip-cert-badge--expire]="selectedCertificate.statut === 'expir\xE9'"
                      [class.ip-cert-badge--revoque]="selectedCertificate.statut === 'r\xE9voqu\xE9'">
                  <i class="fa-solid fa-circle"></i>
                  {{ selectedCertificate.statut === 'valide' ? 'Valide' : selectedCertificate.statut === 'expir\xE9' ? 'Expir\xE9' : 'R\xE9voqu\xE9' }}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="ip-modal-divider"></div>
      <div class="ip-modal-footer">
        <button type="button" *ngIf="selectedCertificate.statut === 'valide'"
                class="ip-btn ip-btn--danger" data-bs-dismiss="modal"
                (click)="revoke(selectedCertificate)">
          <i class="isax isax-close-circle"></i> R\xE9voquer
        </button>
        <button type="button" class="ip-btn ip-btn--ghost" data-bs-dismiss="modal">Fermer</button>
        <button type="button" class="ip-btn ip-btn--primary"
                (click)="downloadPdf(selectedCertificate)">
          <i class="isax isax-document-download"></i> T\xE9l\xE9charger PDF
        </button>
      </div>

    </div>
  </div>
</div>
`, styles: ["/* src/app/features/superadmin/superadmin-certificate/superadmin-certificate.component.scss */\n.ip-loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-kpi-row {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.ip-kpi-card {\n  flex: 1;\n  min-width: 140px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ip-kpi-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.ip-kpi-icon--success {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-kpi-icon--warn {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-kpi-icon--danger {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-kpi-label {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 3px;\n}\n.ip-kpi-value {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-filter-card {\n  padding: 14px 18px;\n  margin-bottom: 20px;\n  overflow: visible;\n}\n.ip-filter-row {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.ip-filter-group {\n  flex: 1;\n  min-width: 160px;\n}\n.ip-filter-group--search {\n  flex: 2;\n  min-width: 220px;\n}\n.ip-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-table {\n  margin: 0;\n}\n.ip-table thead th {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table tbody td {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.ip-table tbody tr:hover td {\n  background: #FAFBFF;\n}\n.ip-user-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n}\n.ip-user-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-user-sub {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-formation-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #F1F3F5;\n  color: #495057;\n  font-size: 11px;\n  padding: 3px 8px;\n  border-radius: 20px;\n}\n.ip-pill i {\n  font-size: 12px;\n}\n.ip-score-badge {\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 6px;\n}\n.ip-expire-warn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #D97706;\n}\n.ip-expire-warn i {\n  font-size: 11px;\n}\n.ip-cert-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 6px;\n}\n.ip-cert-badge i {\n  font-size: 8px;\n}\n.ip-cert-badge--valide {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-cert-badge--expire {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-cert-badge--revoque {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-actions {\n  display: flex;\n  gap: 4px;\n}\n.ip-action-btn {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n  text-decoration: none;\n}\n.ip-action-btn:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-action-btn--warn:hover {\n  border-color: #D97706;\n  color: #D97706;\n  background: #FFF9EC;\n}\n.ip-action-btn--success:hover {\n  border-color: #059669;\n  color: #059669;\n  background: #ECFDF5;\n}\n.ip-action-btn.text-danger:hover {\n  border-color: #DC3545;\n  color: #DC3545;\n  background: #FFF5F5;\n}\n.ip-action-btn[disabled] {\n  opacity: 0.4;\n  cursor: default;\n  pointer-events: none;\n}\n.ip-empty {\n  text-align: center;\n  padding: 48px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty i {\n  font-size: 32px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 14px 16px;\n  border-top: 1px solid #E9ECEF;\n}\n.ip-page-btn {\n  min-width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 8px;\n  transition: all 0.12s;\n}\n.ip-page-btn:hover:not([disabled]) {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-page-btn--active {\n  background: #D4AF37;\n  color: #fff;\n  border-color: #D4AF37;\n  font-weight: 600;\n}\n.ip-page-btn[disabled] {\n  opacity: 0.4;\n  cursor: default;\n}\n.ip-page-ellipsis {\n  font-size: 13px;\n  color: #6C757D;\n  padding: 0 4px;\n}\n.ip-input {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon {\n  padding-left: 34px;\n}\n.ip-input-icon-wrap {\n  position: relative;\n}\n.ip-input-icon {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn i {\n  font-size: 16px;\n}\n.ip-btn--primary {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-btn--ghost {\n  background: transparent;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n}\n.ip-btn--danger {\n  background: #FFF5F5;\n  color: #DC3545;\n  border: 1px solid #FECACA;\n}\n.ip-btn--danger:hover {\n  background: #DC3545;\n  color: #fff;\n}\n.ip-modal-dialog {\n  max-width: 540px;\n}\n.ip-modal-content {\n  border: none;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);\n}\n.ip-cert-accent {\n  height: 5px;\n}\n.ip-modal-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.ip-modal-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.ip-modal-title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 2px;\n}\n.ip-modal-sub {\n  font-size: 12px;\n  color: #6C757D;\n  margin: 0;\n  font-family: monospace;\n}\n.ip-modal-divider {\n  height: 1px;\n  background: #E9ECEF;\n}\n.ip-modal-body {\n  padding: 20px 24px;\n}\n.ip-modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n}\n.ip-cert-preview {\n  background: #FAFBFF;\n  border: 1px solid #E9ECEF;\n  border-radius: 12px;\n  padding: 20px 24px;\n  text-align: center;\n}\n.ip-cert-logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n  text-align: left;\n}\n.ip-cert-logo-mark {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fff;\n}\n.ip-cert-logo-text {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-logo-sub {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-cert-label {\n  font-size: 10px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 4px;\n}\n.ip-cert-action-text {\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 6px;\n}\n.ip-cert-formation-title {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 14px;\n}\n.ip-cert-score-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 14px;\n}\n.ip-cert-score-item {\n  text-align: center;\n}\n.ip-cert-score-val {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.ip-cert-score-label {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.ip-cert-divider-v {\n  width: 1px;\n  height: 32px;\n  background: #E9ECEF;\n}\n.ip-cert-sig-row {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding-top: 10px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 10px;\n}\n.ip-cert-sig {\n  text-align: center;\n}\n.ip-cert-sig-line {\n  width: 70px;\n  height: 1px;\n  background: #E9ECEF;\n  margin: 0 auto 4px;\n}\n.ip-cert-sig-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-sig-role {\n  font-size: 10px;\n  color: #6C757D;\n}\n.ip-cert-qr {\n  width: 40px;\n  height: 40px;\n  background: #F8F9FA;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  color: #6C757D;\n}\n.ip-cert-validity {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 12px;\n}\n.ip-detail-row {\n  display: flex;\n  gap: 0;\n}\n.ip-detail-row--mt {\n  margin-top: 16px;\n}\n.ip-detail-block {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-detail-block:last-child {\n  border-bottom: none;\n}\n.ip-detail-block--half {\n  flex: 1;\n  min-width: 0;\n}\n.ip-detail-icon-wrap {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #F8F9FA;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.ip-detail-label {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 2px;\n}\n.ip-detail-value {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-detail-value--mono {\n  font-family: monospace;\n}\n/*# sourceMappingURL=superadmin-certificate.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }, { type: CertificatService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminCertificateComponent, { className: "SuperadminCertificateComponent", filePath: "src/app/features/superadmin/superadmin-certificate/superadmin-certificate.component.ts", lineNumber: 14 });
})();
export {
  SuperadminCertificateComponent
};
//# sourceMappingURL=chunk-KXCLWGML.js.map
