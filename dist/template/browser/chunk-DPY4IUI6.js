import {
  CertificatService,
  DEFAULT_CERT_CONFIG
} from "./chunk-INMEGA4B.js";
import "./chunk-FQH4LUZ5.js";
import {
  AuthService
} from "./chunk-REZZRIDN.js";
import "./chunk-FKX6UC3I.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-AK2M3J6O.js";
import {
  Router
} from "./chunk-AJNKO2CX.js";
import "./chunk-FZP3BRBS.js";
import {
  HttpClient
} from "./chunk-GSAJL664.js";
import {
  CommonModule,
  DatePipe,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UPBSS6WA.js";
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
function AdminrhCertificateComponent_ng_container_2_div_14_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_ng_container_2_div_14_button_22_Template_button_click_0_listener() {
      const c_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setPalette(c_r6));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", c_r6);
    \u0275\u0275classProp("ip-palette-swatch--active", ctx_r1.config.couleur_principale === c_r6);
  }
}
function AdminrhCertificateComponent_ng_container_2_div_14_div_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275element(1, "i", 83);
    \u0275\u0275text(2, " Mod\xE8le enregistr\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCertificateComponent_ng_container_2_div_14_img_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 84);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.config.logo_url, \u0275\u0275sanitizeUrl);
  }
}
function AdminrhCertificateComponent_ng_container_2_div_14_div_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", ctx_r1.config.couleur_principale);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(ctx_r1.config.entreprise_nom || "E"), " ");
  }
}
function AdminrhCertificateComponent_ng_container_2_div_14_div_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275text(1, "N\xB0 CERT-2025-0091");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCertificateComponent_ng_container_2_div_14_div_145_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91);
    \u0275\u0275text(2, "87%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 92);
    \u0275\u0275text(4, "Score obtenu");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.config.couleur_principale);
  }
}
function AdminrhCertificateComponent_ng_container_2_div_14_div_145_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 93);
  }
}
function AdminrhCertificateComponent_ng_container_2_div_14_div_145_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91);
    \u0275\u0275text(2, "8h");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 92);
    \u0275\u0275text(4, "Dur\xE9e totale");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhCertificateComponent_ng_container_2_div_14_div_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275template(1, AdminrhCertificateComponent_ng_container_2_div_14_div_145_div_1_Template, 5, 2, "div", 88)(2, AdminrhCertificateComponent_ng_container_2_div_14_div_145_div_2_Template, 1, 0, "div", 89)(3, AdminrhCertificateComponent_ng_container_2_div_14_div_145_div_3_Template, 5, 0, "div", 88);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.show_score);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.show_score && ctx_r1.config.show_duree);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.show_duree);
  }
}
function AdminrhCertificateComponent_ng_container_2_div_14_div_147_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275element(1, "div", 95);
    \u0275\u0275elementStart(2, "div", 96);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 97);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.config.signataire_nom || "Signataire");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.config.signataire_role);
  }
}
function AdminrhCertificateComponent_ng_container_2_div_14_div_148_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275element(1, "div", 95);
    \u0275\u0275elementStart(2, "div", 96);
    \u0275\u0275text(3, "Ibrahima Sow");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 97);
    \u0275\u0275text(5, " Formateur \xB7 Cybers\xE9curit\xE9 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r1.config.couleur_principale);
  }
}
function AdminrhCertificateComponent_ng_container_2_div_14_div_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275element(1, "i", 99);
    \u0275\u0275elementEnd();
  }
}
function AdminrhCertificateComponent_ng_container_2_div_14_ng_container_152_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 Valide jusqu'au 15 janvier 2025 (", ctx_r1.config.duree_validite, ") ");
  }
}
function AdminrhCertificateComponent_ng_container_2_div_14_tr_171_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 112);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cert_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("color", ctx_r1.getScoreColor(cert_r8.score_final))("background", ctx_r1.parseFloat(cert_r8.score_final) >= 80 ? "#ECFDF5" : ctx_r1.parseFloat(cert_r8.score_final) >= 60 ? "#FFFBEB" : "#FFF5F5");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cert_r8.score_final, "% ");
  }
}
function AdminrhCertificateComponent_ng_container_2_div_14_tr_171_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCertificateComponent_ng_container_2_div_14_tr_171_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 100)(3, "div", 101);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 102);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 103);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td")(12, "span", 104);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, AdminrhCertificateComponent_ng_container_2_div_14_tr_171_span_15_Template, 2, 5, "span", 105)(16, AdminrhCertificateComponent_ng_container_2_div_14_tr_171_span_16_Template, 2, 0, "span", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 107);
    \u0275\u0275element(19, "i", 108);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "div", 109)(23, "button", 110);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_ng_container_2_div_14_tr_171_Template_button_click_23_listener() {
      const cert_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDetails(cert_r8));
    });
    \u0275\u0275element(24, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 111);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_ng_container_2_div_14_tr_171_Template_button_click_25_listener() {
      const cert_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.downloadPdf(cert_r8));
    });
    \u0275\u0275element(26, "i");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cert_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r1.getAvatarStyle(cert_r8.employe_id).bg)("color", ctx_r1.getAvatarStyle(cert_r8.employe_id).color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials((cert_r8.employe == null ? null : cert_r8.employe.name) || ""), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", cert_r8.employe == null ? null : cert_r8.employe.prenom, " ", cert_r8.employe == null ? null : cert_r8.employe.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 21, cert_r8.date_delivrance, "d MMM yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(cert_r8.formation == null ? null : cert_r8.formation.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", cert_r8.score_final);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cert_r8.score_final);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ip-cert-badge--valide", cert_r8.statut === "valide")("ip-cert-badge--expire", cert_r8.statut === "expir\xE9")("ip-cert-badge--revoque", cert_r8.statut === "r\xE9voqu\xE9");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", cert_r8.statut === "valide" ? "D\xE9livr\xE9" : cert_r8.statut === "expir\xE9" ? "Expir\xE9" : "R\xE9voqu\xE9", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.downloading);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.downloading ? "isax isax-refresh ip-spin" : "isax isax-document-download");
  }
}
function AdminrhCertificateComponent_ng_container_2_div_14_tr_173_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 114);
    \u0275\u0275element(2, "i", 16);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Aucun certificat trouv\xE9");
    \u0275\u0275elementEnd()()();
  }
}
function AdminrhCertificateComponent_ng_container_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "div", 21)(3, "div", 22);
    \u0275\u0275element(4, "i", 23);
    \u0275\u0275text(5, " Identit\xE9 entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 24)(7, "label", 25);
    \u0275\u0275text(8, "Nom de l'entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_div_14_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.config.entreprise_nom, $event) || (ctx_r1.config.entreprise_nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 24)(11, "label", 25);
    \u0275\u0275text(12, "Sous-titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_div_14_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.config.entreprise_sous_titre, $event) || (ctx_r1.config.entreprise_sous_titre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 24)(15, "label", 25);
    \u0275\u0275text(16, "Logo (URL)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_div_14_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.config.logo_url, $event) || (ctx_r1.config.logo_url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 24)(19, "label", 25);
    \u0275\u0275text(20, "Couleur principale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 29);
    \u0275\u0275template(22, AdminrhCertificateComponent_ng_container_2_div_14_button_22_Template, 1, 4, "button", 30);
    \u0275\u0275elementStart(23, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_div_14_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.config.couleur_principale, $event) || (ctx_r1.config.couleur_principale = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 24)(25, "label", 25);
    \u0275\u0275text(26, "Couleur de fond du certificat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 29)(28, "button", 32);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_ng_container_2_div_14_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.config.bg_couleur = "#FAFBFF");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 33);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_ng_container_2_div_14_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.config.bg_couleur = "#fff");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 34);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_ng_container_2_div_14_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.config.bg_couleur = "#F0FFF4");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 35);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_ng_container_2_div_14_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.config.bg_couleur = "#EFF6FF");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_div_14_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.config.bg_couleur, $event) || (ctx_r1.config.bg_couleur = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 21)(34, "div", 22);
    \u0275\u0275element(35, "i", 36);
    \u0275\u0275text(36, " Textes du certificat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 24)(38, "label", 25);
    \u0275\u0275text(39, "Intitul\xE9 d'accroche");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_div_14_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.config.accroche, $event) || (ctx_r1.config.accroche = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 24)(42, "label", 25);
    \u0275\u0275text(43, "Signataire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_div_14_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.config.signataire_nom, $event) || (ctx_r1.config.signataire_nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 24)(46, "label", 25);
    \u0275\u0275text(47, "R\xF4le du signataire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_div_14_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.config.signataire_role, $event) || (ctx_r1.config.signataire_role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 24)(50, "label", 25);
    \u0275\u0275text(51, "Dur\xE9e de validit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_div_14_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.config.duree_validite, $event) || (ctx_r1.config.duree_validite = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div", 21)(54, "div", 22);
    \u0275\u0275element(55, "i", 41);
    \u0275\u0275text(56, " Options & s\xE9curit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 42)(58, "div")(59, "div", 43);
    \u0275\u0275text(60, "Score et dur\xE9e visibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 44);
    \u0275\u0275text(62, "Affich\xE9s sur le certificat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "label", 45)(64, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_div_14_Template_input_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.config.show_score, $event) || (ctx_r1.config.show_score = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "span", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 42)(67, "div")(68, "div", 43);
    \u0275\u0275text(69, "Dur\xE9e totale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 44);
    \u0275\u0275text(71, "Heures de formation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "label", 45)(73, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_div_14_Template_input_ngModelChange_73_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.config.show_duree, $event) || (ctx_r1.config.show_duree = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(74, "span", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 42)(76, "div")(77, "div", 43);
    \u0275\u0275text(78, "Nom du formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 44);
    \u0275\u0275text(80, "Signature du formateur");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "label", 45)(82, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_div_14_Template_input_ngModelChange_82_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.config.show_formateur, $event) || (ctx_r1.config.show_formateur = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(83, "span", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 42)(85, "div")(86, "div", 43);
    \u0275\u0275text(87, "QR code de v\xE9rification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 44);
    \u0275\u0275text(89, "Lien de validation publique");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "label", 45)(91, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_div_14_Template_input_ngModelChange_91_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.config.show_qr, $event) || (ctx_r1.config.show_qr = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(92, "span", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 42)(94, "div")(95, "div", 43);
    \u0275\u0275text(96, "Num\xE9ro unique visible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "div", 44);
    \u0275\u0275text(98, "R\xE9f\xE9rence tra\xE7able");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "label", 45)(100, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_div_14_Template_input_ngModelChange_100_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.config.show_numero, $event) || (ctx_r1.config.show_numero = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(101, "span", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div", 42)(103, "div")(104, "div", 43);
    \u0275\u0275text(105, "Date d'expiration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "div", 44);
    \u0275\u0275text(107, "Valide jusqu'au\u2026");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "label", 45)(109, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_div_14_Template_input_ngModelChange_109_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.config.show_date_expiration, $event) || (ctx_r1.config.show_date_expiration = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(110, "span", 47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(111, "div", 48);
    \u0275\u0275template(112, AdminrhCertificateComponent_ng_container_2_div_14_div_112_Template, 3, 0, "div", 49);
    \u0275\u0275elementStart(113, "button", 50);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_ng_container_2_div_14_Template_button_click_113_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveModele());
    });
    \u0275\u0275element(114, "i", 51);
    \u0275\u0275text(115);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(116, "div", 52)(117, "div", 53)(118, "span");
    \u0275\u0275element(119, "i", 54);
    \u0275\u0275text(120, " Aper\xE7u en temps r\xE9el \u2014 mod\xE8le appliqu\xE9 \xE0 toutes les formations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "button", 55);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_ng_container_2_div_14_Template_button_click_121_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadPreview());
    });
    \u0275\u0275element(122, "i");
    \u0275\u0275text(123);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(124, "div", 56);
    \u0275\u0275element(125, "div", 57);
    \u0275\u0275elementStart(126, "div", 58)(127, "div", 59);
    \u0275\u0275template(128, AdminrhCertificateComponent_ng_container_2_div_14_img_128_Template, 1, 1, "img", 60)(129, AdminrhCertificateComponent_ng_container_2_div_14_div_129_Template, 2, 3, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "div", 62)(131, "div", 63);
    \u0275\u0275text(132);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "div", 64);
    \u0275\u0275text(134);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(135, AdminrhCertificateComponent_ng_container_2_div_14_div_135_Template, 2, 0, "div", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "div", 66)(137, "div", 67);
    \u0275\u0275text(138, "CERTIFICAT DE R\xC9USSITE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "div", 68);
    \u0275\u0275text(140, "Moussa Ndiaye");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "div", 69);
    \u0275\u0275text(142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "div", 70);
    \u0275\u0275text(144, " Cybers\xE9curit\xE9 & protection des donn\xE9es ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(145, AdminrhCertificateComponent_ng_container_2_div_14_div_145_Template, 4, 3, "div", 71);
    \u0275\u0275elementStart(146, "div", 72);
    \u0275\u0275template(147, AdminrhCertificateComponent_ng_container_2_div_14_div_147_Template, 6, 2, "div", 73)(148, AdminrhCertificateComponent_ng_container_2_div_14_div_148_Template, 6, 2, "div", 73)(149, AdminrhCertificateComponent_ng_container_2_div_14_div_149_Template, 2, 0, "div", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "div", 75);
    \u0275\u0275text(151, " D\xE9livr\xE9 le 15 janvier 2025 ");
    \u0275\u0275template(152, AdminrhCertificateComponent_ng_container_2_div_14_ng_container_152_Template, 2, 1, "ng-container", 2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(153, "div", 76);
    \u0275\u0275text(154, "CERTIFICATS R\xC9CEMMENT D\xC9LIVR\xC9S");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "div", 77)(156, "div", 78)(157, "table", 79)(158, "thead")(159, "tr")(160, "th");
    \u0275\u0275text(161, "Employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "th");
    \u0275\u0275text(163, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "th");
    \u0275\u0275text(165, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "th");
    \u0275\u0275text(167, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "th");
    \u0275\u0275text(169, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(170, "tbody");
    \u0275\u0275template(171, AdminrhCertificateComponent_ng_container_2_div_14_tr_171_Template, 27, 24, "tr", 80);
    \u0275\u0275pipe(172, "slice");
    \u0275\u0275template(173, AdminrhCertificateComponent_ng_container_2_div_14_tr_173_Template, 5, 0, "tr", 2);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.config.entreprise_nom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.config.entreprise_sous_titre);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.config.logo_url);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.palette);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.config.couleur_principale);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("ip-palette-swatch--active", ctx_r1.config.bg_couleur === "#FAFBFF");
    \u0275\u0275advance();
    \u0275\u0275classProp("ip-palette-swatch--active", ctx_r1.config.bg_couleur === "#fff");
    \u0275\u0275advance();
    \u0275\u0275classProp("ip-palette-swatch--active", ctx_r1.config.bg_couleur === "#F0FFF4");
    \u0275\u0275advance();
    \u0275\u0275classProp("ip-palette-swatch--active", ctx_r1.config.bg_couleur === "#EFF6FF");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.config.bg_couleur);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.config.accroche);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.config.signataire_nom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.config.signataire_role);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.config.duree_validite);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.config.show_score);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.config.show_duree);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.config.show_formateur);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.config.show_qr);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.config.show_numero);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.config.show_date_expiration);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.saveSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Enregistrement\u2026" : "Enregistrer le mod\xE8le", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.downloading);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.downloading ? "isax isax-refresh ip-spin" : "isax isax-document-download");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.downloading ? "G\xE9n\xE9ration\u2026" : "Exporter PDF", " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.config.bg_couleur);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.config.couleur_principale);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.config.logo_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.config.logo_url);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.config.entreprise_nom || "Votre Entreprise");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.config.entreprise_sous_titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.show_numero);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.config.accroche);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.config.couleur_principale);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.config.show_score || ctx_r1.config.show_duree);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.config.signataire_nom || ctx_r1.config.signataire_role);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.show_formateur);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.show_qr);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.config.show_date_expiration);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(172, 50, ctx_r1.filteredCertificats, 0, 5));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.filteredCertificats.length === 0);
  }
}
function AdminrhCertificateComponent_ng_container_2_ng_container_15_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 141);
    \u0275\u0275element(1, "i", 83);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.syncResult, " ");
  }
}
function AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_73_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275element(1, "i", 128);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cert_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", cert_r11.formation == null ? null : cert_r11.formation.duree_totale, "h ");
  }
}
function AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_73_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 112);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cert_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("color", ctx_r1.getScoreColor(cert_r11.score_final))("background", ctx_r1.parseFloat(cert_r11.score_final) >= 80 ? "#ECFDF5" : ctx_r1.parseFloat(cert_r11.score_final) >= 60 ? "#FFFBEB" : "#FFF5F5");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cert_r11.score_final, "% ");
  }
}
function AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_73_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_73_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cert_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", cert_r11.formateur == null ? null : cert_r11.formateur.prenom, " ", cert_r11.formateur == null ? null : cert_r11.formateur.nom, " ");
  }
}
function AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_73_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_73_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 145);
    \u0275\u0275element(1, "i", 146);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cert_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, cert_r11.date_expiration, "dd/MM/yyyy"), " ");
  }
}
function AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_73_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cert_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, cert_r11.date_expiration, "dd/MM/yyyy"), " ");
  }
}
function AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_73_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "Illimit\xE9e");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 100)(3, "div", 101);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 102);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 103);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "div", 104);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_73_div_13_Template, 3, 1, "div", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_73_span_15_Template, 2, 5, "span", 105)(16, AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_73_span_16_Template, 2, 0, "span", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275template(18, AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_73_span_18_Template, 2, 2, "span", 106)(19, AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_73_span_19_Template, 2, 0, "span", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "span", 113);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275template(25, AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_73_span_25_Template, 4, 4, "span", 143)(26, AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_73_span_26_Template, 3, 4, "span", 106)(27, AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_73_span_27_Template, 2, 0, "span", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td")(29, "span", 107);
    \u0275\u0275element(30, "i", 108);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "td")(33, "div", 109)(34, "button", 110);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_73_Template_button_click_34_listener() {
      const cert_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDetails(cert_r11));
    });
    \u0275\u0275element(35, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 111);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_73_Template_button_click_36_listener() {
      const cert_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.downloadPdf(cert_r11));
    });
    \u0275\u0275element(37, "i");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cert_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r1.getAvatarStyle(cert_r11.employe_id).bg)("color", ctx_r1.getAvatarStyle(cert_r11.employe_id).color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials((cert_r11.employe == null ? null : cert_r11.employe.name) || ""), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", cert_r11.employe == null ? null : cert_r11.employe.prenom, " ", cert_r11.employe == null ? null : cert_r11.employe.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cert_r11.employe == null ? null : cert_r11.employe.fonction);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cert_r11.formation == null ? null : cert_r11.formation.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cert_r11.formation == null ? null : cert_r11.formation.duree_totale);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", cert_r11.score_final);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cert_r11.score_final);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", cert_r11.formateur);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cert_r11.formateur);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 28, cert_r11.date_delivrance, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", cert_r11.date_expiration && ctx_r1.isExpiringSoon(cert_r11));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cert_r11.date_expiration && !ctx_r1.isExpiringSoon(cert_r11));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cert_r11.date_expiration);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ip-cert-badge--valide", cert_r11.statut === "valide")("ip-cert-badge--expire", cert_r11.statut === "expir\xE9")("ip-cert-badge--revoque", cert_r11.statut === "r\xE9voqu\xE9");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", cert_r11.statut === "valide" ? "Valide" : cert_r11.statut === "expir\xE9" ? "Expir\xE9" : "R\xE9voqu\xE9", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.downloading);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.downloading ? "isax isax-refresh ip-spin" : "isax isax-document-download");
  }
}
function AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 147);
    \u0275\u0275element(2, "i", 16);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Aucun certificat trouv\xE9");
    \u0275\u0275elementEnd()()();
  }
}
function AdminrhCertificateComponent_ng_container_2_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 115)(2, "span", 116);
    \u0275\u0275element(3, "i", 117);
    \u0275\u0275text(4, " Les certificats sont g\xE9n\xE9r\xE9s automatiquement \xE0 la fin des formations certifiantes. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 118);
    \u0275\u0275template(6, AdminrhCertificateComponent_ng_container_2_ng_container_15_span_6_Template, 3, 1, "span", 119);
    \u0275\u0275elementStart(7, "button", 55);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_ng_container_2_ng_container_15_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.syncCertificats());
    });
    \u0275\u0275element(8, "i", 120);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 121)(11, "div", 122)(12, "div", 123);
    \u0275\u0275element(13, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div")(15, "div", 124);
    \u0275\u0275text(16, "Total certificats");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 125);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 122)(20, "div", 126);
    \u0275\u0275element(21, "i", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "div", 124);
    \u0275\u0275text(24, "Valides");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 125);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 122)(28, "div", 127);
    \u0275\u0275element(29, "i", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div")(31, "div", 124);
    \u0275\u0275text(32, "Expir\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 125);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 129)(36, "div", 130)(37, "div", 131)(38, "div", 132);
    \u0275\u0275element(39, "i", 133);
    \u0275\u0275elementStart(40, "input", 134);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_ng_container_15_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.filterSearch, $event) || (ctx_r1.filterSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_ng_container_15_Template_input_ngModelChange_40_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 135)(42, "select", 136);
    \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_ng_container_15_Template_select_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.filterStatut, $event) || (ctx_r1.filterStatut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdminrhCertificateComponent_ng_container_2_ng_container_15_Template_select_ngModelChange_42_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementStart(43, "option", 137);
    \u0275\u0275text(44, "Tous les statuts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 138);
    \u0275\u0275text(46, "Valide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option", 139);
    \u0275\u0275text(48, "Expir\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option", 140);
    \u0275\u0275text(50, "R\xE9voqu\xE9");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(51, "div", 77)(52, "div", 78)(53, "table", 79)(54, "thead")(55, "tr")(56, "th");
    \u0275\u0275text(57, "Employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "th");
    \u0275\u0275text(59, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "th");
    \u0275\u0275text(61, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "th");
    \u0275\u0275text(63, "Formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "th");
    \u0275\u0275text(65, "D\xE9livr\xE9 le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "th");
    \u0275\u0275text(67, "Expiration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "th");
    \u0275\u0275text(69, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "th");
    \u0275\u0275text(71, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "tbody");
    \u0275\u0275template(73, AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_73_Template, 38, 31, "tr", 80)(74, AdminrhCertificateComponent_ng_container_2_ng_container_15_tr_74_Template, 5, 0, "tr", 2);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
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
    \u0275\u0275advance(31);
    \u0275\u0275property("ngForOf", ctx_r1.filteredCertificats);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredCertificats.length === 0);
  }
}
function AdminrhCertificateComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "div")(3, "h5", 12);
    \u0275\u0275text(4, "Admin RH \u2014 personnalisation & gestion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 13);
    \u0275\u0275text(6, "Personnalisez le mod\xE8le et g\xE9rez les certificats d\xE9livr\xE9s \xE0 vos employ\xE9s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14)(8, "button", 15);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_ng_container_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.activeTab = "certificats";
      return \u0275\u0275resetView(ctx_r1.loadCertificats());
    });
    \u0275\u0275element(9, "i", 16);
    \u0275\u0275text(10, " Voir tous les certificats ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 15);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_ng_container_2_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "personnalisation");
    });
    \u0275\u0275element(12, "i", 17);
    \u0275\u0275text(13, " Personnaliser le mod\xE8le ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, AdminrhCertificateComponent_ng_container_2_div_14_Template, 174, 54, "div", 18)(15, AdminrhCertificateComponent_ng_container_2_ng_container_15_Template, 75, 12, "ng-container", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275classProp("ip-btn--primary", ctx_r1.activeTab === "certificats")("ip-btn--ghost", ctx_r1.activeTab !== "certificats");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("ip-btn--primary", ctx_r1.activeTab === "personnalisation")("ip-btn--ghost", ctx_r1.activeTab !== "personnalisation");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "personnalisation");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "certificats");
  }
}
function AdminrhCertificateComponent_div_5_img_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 185);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.config.logo_url, \u0275\u0275sanitizeUrl);
  }
}
function AdminrhCertificateComponent_div_5_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 186);
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
function AdminrhCertificateComponent_div_5_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 190)(1, "div", 191);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 192);
    \u0275\u0275text(4, "Score obtenu");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.config.couleur_principale);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCert.score_final, "% ");
  }
}
function AdminrhCertificateComponent_div_5_div_28_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 193);
  }
}
function AdminrhCertificateComponent_div_5_div_28_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 190)(1, "div", 191);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 192);
    \u0275\u0275text(4, "Dur\xE9e totale");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (ctx_r1.selectedCert.formation == null ? null : ctx_r1.selectedCert.formation.duree_totale) || "\u2014", "h");
  }
}
function AdminrhCertificateComponent_div_5_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 187);
    \u0275\u0275template(1, AdminrhCertificateComponent_div_5_div_28_div_1_Template, 5, 3, "div", 188)(2, AdminrhCertificateComponent_div_5_div_28_div_2_Template, 1, 0, "div", 189)(3, AdminrhCertificateComponent_div_5_div_28_div_3_Template, 5, 1, "div", 188);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.show_score);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.show_score && ctx_r1.config.show_duree);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.show_duree);
  }
}
function AdminrhCertificateComponent_div_5_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 168);
    \u0275\u0275element(1, "div", 169);
    \u0275\u0275elementStart(2, "div", 170);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 171);
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
    \u0275\u0275elementStart(0, "div", 194);
    \u0275\u0275element(1, "i", 99);
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
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 148);
    \u0275\u0275element(1, "div", 149);
    \u0275\u0275elementStart(2, "div", 150)(3, "div", 151);
    \u0275\u0275element(4, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h5", 152);
    \u0275\u0275text(7, "Certificat de r\xE9ussite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 153);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "button", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "div", 155);
    \u0275\u0275elementStart(12, "div", 156)(13, "div", 157)(14, "div", 158);
    \u0275\u0275template(15, AdminrhCertificateComponent_div_5_img_15_Template, 1, 1, "img", 159)(16, AdminrhCertificateComponent_div_5_div_16_Template, 2, 3, "div", 160);
    \u0275\u0275elementStart(17, "div")(18, "div", 161);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 162);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 163);
    \u0275\u0275text(23, "Certificat de r\xE9ussite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 164);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 165);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, AdminrhCertificateComponent_div_5_div_28_Template, 4, 3, "div", 166);
    \u0275\u0275elementStart(29, "div", 167)(30, "div", 168);
    \u0275\u0275element(31, "div", 169);
    \u0275\u0275elementStart(32, "div", 170);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 171);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(36, AdminrhCertificateComponent_div_5_div_36_Template, 6, 5, "div", 172)(37, AdminrhCertificateComponent_div_5_div_37_Template, 2, 0, "div", 173);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 174);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "date");
    \u0275\u0275template(41, AdminrhCertificateComponent_div_5_ng_container_41_Template, 3, 6, "ng-container", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 175)(43, "div", 176)(44, "div", 177);
    \u0275\u0275element(45, "i", 178);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div")(47, "div", 179);
    \u0275\u0275text(48, "Code unique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 180);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 176)(52, "div", 177);
    \u0275\u0275element(53, "i", 181);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div")(55, "div", 179);
    \u0275\u0275text(56, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div")(58, "span", 107);
    \u0275\u0275element(59, "i", 108);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275element(61, "div", 155);
    \u0275\u0275elementStart(62, "div", 182)(63, "button", 183);
    \u0275\u0275text(64, "Fermer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "button", 184);
    \u0275\u0275listener("click", function AdminrhCertificateComponent_div_5_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r12);
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
    \u0275\u0275property("ngIf", ctx_r1.config.show_score || ctx_r1.config.show_duree);
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
var PALETTE = ["#059669", "#1D6EBF", "#7B5EA7", "#A0522D", "#C0392B", "#1A1A2E"];
var AdminrhCertificateComponent = class _AdminrhCertificateComponent {
  http;
  certService;
  auth;
  router;
  // ── tabs ──────────────────────────────────────────────────────────────────
  activeTab = "personnalisation";
  // ── certificate list ──────────────────────────────────────────────────────
  certificats = [];
  filteredCertificats = [];
  loading = false;
  error = "";
  filterStatut = "all";
  filterSearch = "";
  selectedCert = null;
  // ── customizer ────────────────────────────────────────────────────────────
  config = __spreadValues({}, DEFAULT_CONFIG);
  modeleId = null;
  saving = false;
  saveSuccess = false;
  palette = PALETTE;
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
    return "http://127.0.0.1:8000/api";
  }
  get entrepriseId() {
    return this.auth.getUser()?.entreprise_id ?? 0;
  }
  constructor(http, certService, auth, router) {
    this.http = http;
    this.certService = certService;
    this.auth = auth;
    this.router = router;
  }
  ngOnInit() {
    this.activeTab = this.router.url.includes("modele") ? "personnalisation" : "certificats";
    this.loadCertificats();
    this.loadModele();
  }
  // ── Certificats ───────────────────────────────────────────────────────────
  loadCertificats() {
    this.loading = true;
    this.certService.getCertificats().subscribe({
      next: (data) => {
        this.certificats = data;
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.error = "Erreur chargement certificats.";
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
  }
  openDetails(cert) {
    this.selectedCert = cert;
    setTimeout(() => {
      const el = document.getElementById("arh_cert_details_modal");
      if (el)
        new window.bootstrap.Modal(el).show();
    }, 50);
  }
  // ── Modèle customizer ─────────────────────────────────────────────────────
  loadModele() {
    const eid = this.entrepriseId;
    if (!eid)
      return;
    this.http.get(`${this.apiUrl}/modeles-certificat/entreprise/${eid}`).subscribe({
      next: (res) => {
        if (res.data) {
          this.modeleId = res.data.id;
          if (res.data.config) {
            this.config = __spreadValues(__spreadValues({}, DEFAULT_CONFIG), res.data.config);
          }
          if (!this.config.entreprise_nom && res.data.entreprise?.nom) {
            this.config.entreprise_nom = res.data.entreprise.nom;
          }
        } else {
          const user = this.auth.getUser();
          if (user?.entreprise?.nom)
            this.config.entreprise_nom = user.entreprise.nom;
          if (user?.prenom && user?.nom)
            this.config.signataire_nom = `${user.prenom} ${user.nom}`;
        }
      },
      error: () => {
      }
    });
  }
  saveModele() {
    const eid = this.entrepriseId;
    if (!eid)
      return;
    this.saving = true;
    const payload = {
      nom: `Mod\xE8le ${this.config.entreprise_nom || "d\xE9faut"}`,
      config: this.config
    };
    this.http.post(`${this.apiUrl}/modeles-certificat/entreprise/${eid}`, payload).subscribe({
      next: (res) => {
        this.modeleId = res.data?.id ?? this.modeleId;
        this.saving = false;
        this.saveSuccess = true;
        setTimeout(() => this.saveSuccess = false, 3e3);
      },
      error: () => {
        this.saving = false;
        this.error = "Erreur lors de la sauvegarde.";
      }
    });
  }
  setPalette(color) {
    this.config.couleur_principale = color;
  }
  // ── Helpers ───────────────────────────────────────────────────────────────
  getInitials(name) {
    return name?.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase() || "?";
  }
  isExpiringSoon(cert) {
    if (!cert.date_expiration)
      return false;
    const days = (new Date(cert.date_expiration).getTime() - Date.now()) / 864e5;
    return days > 0 && days <= 60;
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
  avatarColors = ["#E6F1FB,#0C447C", "#E1F5EE,#085041", "#EEEDFE,#3C3489", "#FAEEDA,#633806", "#F1EFE8,#444441"];
  getAvatarStyle(id) {
    const pair = this.avatarColors[id % this.avatarColors.length].split(",");
    return { bg: pair[0], color: pair[1] };
  }
  parseFloat(v) {
    return parseFloat(v);
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
  downloadPreview() {
    if (this.downloading)
      return;
    const fakeCert = {
      id: 0,
      code_unique: "CERT-DEMO-2025",
      employe_id: 0,
      formation_id: 0,
      entreprise_id: 0,
      formateur_id: 0,
      date_delivrance: (/* @__PURE__ */ new Date()).toISOString(),
      date_expiration: null,
      score_final: "87",
      statut: "valide",
      url_pdf: null,
      created_at: "",
      employe: {
        id: 0,
        matricule: "",
        name: "Moussa Ndiaye",
        prenom: "Moussa",
        nom: "Ndiaye",
        fonction: "D\xE9veloppeur",
        direction: "",
        avatar: null,
        entreprise_id: 0
      },
      formation: {
        id: 0,
        titre: "Cybers\xE9curit\xE9 & protection des donn\xE9es",
        duree_totale: 8,
        niveau: "",
        image_couverture: null
      },
      formateur: { id: 0, name: "Ibrahima Sow", prenom: "Ibrahima", nom: "Sow", fonction: "" }
    };
    this.downloading = true;
    this.certService.downloadPdf(fakeCert, this.config).finally(() => {
      this.downloading = false;
    });
  }
  // preview helpers – use fake data so the live preview always shows something
  get previewInitials() {
    return this.getInitials(this.config.signataire_nom || "Employ\xE9 Exemple");
  }
  static \u0275fac = function AdminrhCertificateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhCertificateComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(CertificatService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhCertificateComponent, selectors: [["app-adminrh-certificate"]], decls: 6, vars: 4, consts: [["class", "ip-loader", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible", 4, "ngIf"], [4, "ngIf"], ["id", "arh_cert_details_modal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "ip-modal-dialog"], ["class", "modal-content ip-modal-content", 4, "ngIf"], [1, "ip-loader"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "alert", "alert-danger", "alert-dismissible"], ["type", "button", 1, "btn-close", 3, "click"], [1, "ip-page-head"], [1, "ip-page-head__title"], [1, "ip-page-head__sub"], [1, "ip-head-actions"], ["type", "button", 1, "ip-btn", 3, "click"], [1, "isax", "isax-award"], [1, "isax", "isax-setting-2"], ["class", "ip-customizer-layout", 4, "ngIf"], [1, "ip-customizer-layout"], [1, "ip-panel"], [1, "ip-section"], [1, "ip-section-head"], [1, "isax", "isax-document"], [1, "ip-field"], [1, "ip-label"], ["type", "text", "placeholder", "Ex. TechNova S\xE9n\xE9gal", 1, "ip-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Learning Management System", 1, "ip-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "https://\u2026/logo.png", 1, "ip-input", 3, "ngModelChange", "ngModel"], [1, "ip-palette-row"], ["type", "button", "class", "ip-palette-swatch", 3, "background", "ip-palette-swatch--active", "click", 4, "ngFor", "ngForOf"], ["type", "color", "title", "Couleur personnalis\xE9e", 1, "ip-color-pick", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "ip-palette-swatch", 2, "background", "#FAFBFF", "border", "1px solid #dee2e6", 3, "click"], ["type", "button", 1, "ip-palette-swatch", 2, "background", "#fff", "border", "1px solid #dee2e6", 3, "click"], ["type", "button", 1, "ip-palette-swatch", 2, "background", "#F0FFF4", "border", "1px solid #dee2e6", 3, "click"], ["type", "button", 1, "ip-palette-swatch", 2, "background", "#EFF6FF", "border", "1px solid #dee2e6", 3, "click"], [1, "isax", "isax-text"], ["type", "text", "placeholder", "a compl\xE9t\xE9 avec succ\xE8s la formation", 1, "ip-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Pr\xE9nom Nom", 1, "ip-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Responsable RH, TechNova S\xE9n\xE9gal", 1, "ip-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "1 an", 1, "ip-input", 3, "ngModelChange", "ngModel"], [1, "isax", "isax-shield-tick"], [1, "ip-toggle-row"], [1, "ip-toggle-label"], [1, "ip-toggle-sub"], [1, "ip-switch"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "ip-switch-track"], [1, "ip-save-row"], ["class", "ip-save-ok", 4, "ngIf"], ["type", "button", 1, "ip-btn", "ip-btn--primary", "ip-btn--wide", 3, "click", "disabled"], [1, "isax", "isax-save-2"], [1, "ip-preview-col"], [1, "ip-preview-head"], [1, "isax", "isax-eye"], ["type", "button", 1, "ip-btn", "ip-btn--ghost", "ip-btn--sm", 3, "click", "disabled"], [1, "ip-cert-card"], [1, "ip-cert-card__bar"], [1, "ip-cert-card__header"], [1, "ip-cert-card__logo-wrap"], ["class", "ip-cert-card__logo-img", "alt", "logo", "onerror", "this.style.display='none'", 3, "src", 4, "ngIf"], ["class", "ip-cert-card__logo-mark", 3, "background", 4, "ngIf"], [1, "ip-cert-card__header-text"], [1, "ip-cert-card__company"], [1, "ip-cert-card__company-sub"], ["class", "ip-cert-card__num", 4, "ngIf"], [1, "ip-cert-card__body"], [1, "ip-cert-card__label"], [1, "ip-cert-card__name"], [1, "ip-cert-card__accroche"], [1, "ip-cert-card__formation"], ["class", "ip-cert-card__stats", 4, "ngIf"], [1, "ip-cert-card__sig-row"], ["class", "ip-cert-card__sig", 4, "ngIf"], ["class", "ip-cert-card__qr", 4, "ngIf"], [1, "ip-cert-card__validity"], [1, "ip-recent-head"], [1, "ip-card"], [1, "table-responsive"], [1, "table", "ip-table"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "ip-palette-swatch", 3, "click"], [1, "ip-save-ok"], [1, "isax", "isax-tick-circle"], ["alt", "logo", "onerror", "this.style.display='none'", 1, "ip-cert-card__logo-img", 3, "src"], [1, "ip-cert-card__logo-mark"], [1, "ip-cert-card__num"], [1, "ip-cert-card__stats"], ["class", "ip-cert-card__stat", 4, "ngIf"], ["class", "ip-cert-card__stat-sep", 4, "ngIf"], [1, "ip-cert-card__stat"], [1, "ip-cert-card__stat-val"], [1, "ip-cert-card__stat-label"], [1, "ip-cert-card__stat-sep"], [1, "ip-cert-card__sig"], [1, "ip-cert-card__sig-line"], [1, "ip-cert-card__sig-name"], [1, "ip-cert-card__sig-role"], [1, "ip-cert-card__qr"], [1, "isax", "isax-scan-barcode"], [1, "ip-user-cell"], [1, "ip-avatar"], [1, "ip-user-name"], [1, "ip-user-sub"], [1, "ip-formation-name"], ["class", "ip-score-badge", 3, "color", "background", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "ip-cert-badge"], [1, "fa-solid", "fa-circle"], [1, "ip-actions"], ["type", "button", "title", "D\xE9tails", 1, "ip-action-btn", 3, "click"], ["type", "button", "title", "T\xE9l\xE9charger PDF", 1, "ip-action-btn", 3, "click", "disabled"], [1, "ip-score-badge"], [1, "text-muted"], ["colspan", "5", 1, "ip-empty"], [1, "ip-sync-bar"], [1, "ip-sync-hint"], [1, "isax", "isax-info-circle"], [1, "ip-sync-right"], ["class", "ip-sync-ok", 4, "ngIf"], [1, "isax", "isax-refresh"], [1, "ip-kpi-row"], [1, "ip-kpi-card"], [1, "ip-kpi-icon"], [1, "ip-kpi-label"], [1, "ip-kpi-value"], [1, "ip-kpi-icon", "ip-kpi-icon--success"], [1, "ip-kpi-icon", "ip-kpi-icon--warn"], [1, "isax", "isax-clock"], [1, "ip-card", "ip-filter-card"], [1, "ip-filter-row"], [1, "ip-filter-group", "ip-filter-group--search"], [1, "ip-input-icon-wrap"], [1, "isax", "isax-search-normal", "ip-input-icon"], ["type", "text", "placeholder", "Rechercher par employ\xE9, formation, code\u2026", 1, "ip-input", "ip-input--icon", 3, "ngModelChange", "ngModel"], [1, "ip-filter-group"], [1, "ip-input", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "valide"], ["value", "expir\xE9"], ["value", "r\xE9voqu\xE9"], [1, "ip-sync-ok"], ["class", "ip-formation-meta", 4, "ngIf"], ["class", "ip-expire-warn", 4, "ngIf"], [1, "ip-formation-meta"], [1, "ip-expire-warn"], [1, "fa-solid", "fa-triangle-exclamation"], ["colspan", "8", 1, "ip-empty"], [1, "modal-content", "ip-modal-content"], [1, "ip-cert-accent"], [1, "ip-modal-header"], [1, "ip-modal-icon"], [1, "ip-modal-title"], [1, "ip-modal-sub"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close", "ms-auto"], [1, "ip-modal-divider"], [1, "ip-modal-body"], [1, "ip-cert-preview"], [1, "ip-cert-logo"], ["class", "ip-cert-card__logo-img", "alt", "logo", "style", "width:36px;height:36px;object-fit:contain;", 3, "src", 4, "ngIf"], ["class", "ip-cert-logo-mark", 3, "background", 4, "ngIf"], [1, "ip-cert-logo-text"], [1, "ip-cert-logo-sub"], [1, "ip-cert-label"], [1, "ip-cert-action-text"], [1, "ip-cert-formation-title"], ["class", "ip-cert-score-row", 4, "ngIf"], [1, "ip-cert-sig-row"], [1, "ip-cert-sig"], [1, "ip-cert-sig-line"], [1, "ip-cert-sig-name"], [1, "ip-cert-sig-role"], ["class", "ip-cert-sig", 4, "ngIf"], ["class", "ip-cert-qr", 4, "ngIf"], [1, "ip-cert-validity"], [1, "ip-detail-row", "ip-detail-row--mt"], [1, "ip-detail-block", "ip-detail-block--half"], [1, "ip-detail-icon-wrap"], [1, "isax", "isax-tag"], [1, "ip-detail-label"], [1, "ip-detail-value", "ip-detail-value--mono"], [1, "isax", "isax-status"], [1, "ip-modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "ip-btn", "ip-btn--ghost"], ["type", "button", 1, "ip-btn", "ip-btn--primary", 3, "click", "disabled"], ["alt", "logo", 1, "ip-cert-card__logo-img", 2, "width", "36px", "height", "36px", "object-fit", "contain", 3, "src"], [1, "ip-cert-logo-mark"], [1, "ip-cert-score-row"], ["class", "ip-cert-score-item", 4, "ngIf"], ["class", "ip-cert-divider-v", 4, "ngIf"], [1, "ip-cert-score-item"], [1, "ip-cert-score-val"], [1, "ip-cert-score-label"], [1, "ip-cert-divider-v"], [1, "ip-cert-qr"]], template: function AdminrhCertificateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AdminrhCertificateComponent_div_0_Template, 4, 0, "div", 0)(1, AdminrhCertificateComponent_div_1_Template, 3, 1, "div", 1)(2, AdminrhCertificateComponent_ng_container_2_Template, 16, 10, "ng-container", 2);
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
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, SlicePipe, DatePipe], styles: ['\n\n.ip-loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ip-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.ip-btn--primary[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary[_ngcontent-%COMP%]:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-btn--ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n}\n.ip-btn--wide[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.ip-btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.ip-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.55;\n  cursor: default;\n}\n.ip-customizer-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  gap: 24px;\n  align-items: flex-start;\n}\n@media (max-width: 900px) {\n  .ip-customizer-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-panel[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.ip-section[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid #E9ECEF;\n}\n.ip-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-section-head[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1A1A2E;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ip-section-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #D4AF37;\n  font-size: 14px;\n}\n.ip-field[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.ip-field[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.ip-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 500;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 5px;\n}\n.ip-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon[_ngcontent-%COMP%] {\n  padding-left: 34px;\n}\n.ip-input-icon-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ip-input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-palette-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.ip-palette-swatch[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n  transition: transform 0.12s, border-color 0.12s;\n  padding: 0;\n}\n.ip-palette-swatch--active[_ngcontent-%COMP%] {\n  border-color: #1A1A2E;\n  transform: scale(1.15);\n}\n.ip-palette-swatch[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.ip-color-pick[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 1px solid #E9ECEF;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n}\n.ip-color-pick[_ngcontent-%COMP%]::-webkit-color-swatch-wrapper {\n  padding: 0;\n  border-radius: 50%;\n}\n.ip-color-pick[_ngcontent-%COMP%]::-webkit-color-swatch {\n  border-radius: 50%;\n  border: none;\n}\n.ip-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 9px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-toggle-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-toggle-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-toggle-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 1px;\n}\n.ip-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.ip-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ip-switch-track[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 22px;\n  background: #DEE2E6;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.ip-switch-track[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.ip-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ip-switch-track[_ngcontent-%COMP%] {\n  background: #D4AF37;\n}\n.ip-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ip-switch-track[_ngcontent-%COMP%]::before {\n  transform: translateX(18px);\n}\n.ip-save-row[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-save-ok[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #059669;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.ip-save-ok[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ip-preview-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 14px;\n}\n.ip-preview-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-right: 4px;\n}\n.ip-cert-card[_ngcontent-%COMP%] {\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n}\n.ip-cert-card__bar[_ngcontent-%COMP%] {\n  height: 6px;\n}\n.ip-cert-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #E9ECEF;\n}\n.ip-cert-card__logo-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.ip-cert-card__logo-img[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  object-fit: contain;\n  border-radius: 6px;\n}\n.ip-cert-card__logo-mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n}\n.ip-cert-card__header-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ip-cert-card__company[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.ip-cert-card__company-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-cert-card__num[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  font-family: monospace;\n  white-space: nowrap;\n}\n.ip-cert-card__body[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n}\n.ip-cert-card__label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-bottom: 6px;\n}\n.ip-cert-card__name[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n  margin-bottom: 6px;\n}\n.ip-cert-card__accroche[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 6px;\n}\n.ip-cert-card__formation[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.ip-cert-card__stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 16px;\n}\n.ip-cert-card__stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ip-cert-card__stat-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-cert-card__stat-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.ip-cert-card__stat-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: #E9ECEF;\n}\n.ip-cert-card__sig-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding-top: 12px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 4px;\n}\n.ip-cert-card__sig[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ip-cert-card__sig-line[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 1px;\n  background: #E9ECEF;\n  margin: 0 auto 4px;\n}\n.ip-cert-card__sig-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-card__sig-role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n}\n.ip-cert-card__qr[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #F8F9FA;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  color: #6C757D;\n}\n.ip-cert-card__validity[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 12px;\n}\n.ip-recent-head[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 10px;\n}\n.ip-sync-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 10px 16px;\n  margin-bottom: 16px;\n  font-size: 12px;\n}\n.ip-sync-hint[_ngcontent-%COMP%] {\n  color: #6C757D;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ip-sync-hint[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #D4AF37;\n  font-size: 14px;\n}\n.ip-sync-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-sync-ok[_ngcontent-%COMP%] {\n  color: #059669;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.ip-sync-ok[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ip-spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  display: inline-block;\n}\n.ip-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.ip-kpi-card[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ip-kpi-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.ip-kpi-icon--success[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-kpi-icon--warn[_ngcontent-%COMP%] {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-kpi-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 3px;\n}\n.ip-kpi-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-filter-card[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  margin-bottom: 20px;\n  overflow: visible;\n}\n.ip-filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.ip-filter-group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.ip-filter-group--search[_ngcontent-%COMP%] {\n  flex: 2;\n  min-width: 220px;\n}\n.ip-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-table[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ip-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #FAFBFF;\n}\n.ip-user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n}\n.ip-user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-user-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-formation-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-formation-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 2px;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ip-formation-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ip-score-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 6px;\n}\n.ip-expire-warn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #D97706;\n}\n.ip-expire-warn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ip-cert-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 6px;\n}\n.ip-cert-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n.ip-cert-badge--valide[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-cert-badge--expire[_ngcontent-%COMP%] {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-cert-badge--revoque[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.ip-action-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n  text-decoration: none;\n}\n.ip-action-btn[_ngcontent-%COMP%]:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-modal-dialog[_ngcontent-%COMP%] {\n  max-width: 540px;\n}\n.ip-modal-content[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);\n}\n.ip-cert-accent[_ngcontent-%COMP%] {\n  height: 5px;\n}\n.ip-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.ip-modal-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.ip-modal-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 2px;\n}\n.ip-modal-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  margin: 0;\n  font-family: monospace;\n}\n.ip-modal-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #E9ECEF;\n}\n.ip-modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.ip-modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n}\n.ip-cert-preview[_ngcontent-%COMP%] {\n  background: #FAFBFF;\n  border: 1px solid #E9ECEF;\n  border-radius: 12px;\n  padding: 20px 24px;\n  text-align: center;\n}\n.ip-cert-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n  text-align: left;\n}\n.ip-cert-logo-mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fff;\n}\n.ip-cert-logo-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-logo-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-cert-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 4px;\n}\n.ip-cert-action-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 6px;\n}\n.ip-cert-formation-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 14px;\n}\n.ip-cert-score-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 14px;\n}\n.ip-cert-score-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ip-cert-score-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.ip-cert-score-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.ip-cert-divider-v[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: #E9ECEF;\n}\n.ip-cert-sig-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding-top: 10px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 10px;\n}\n.ip-cert-sig[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ip-cert-sig-line[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 1px;\n  background: #E9ECEF;\n  margin: 0 auto 4px;\n}\n.ip-cert-sig-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-sig-role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n}\n.ip-cert-qr[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #F8F9FA;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  color: #6C757D;\n}\n.ip-cert-validity[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 12px;\n}\n.ip-detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n}\n.ip-detail-row--mt[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.ip-detail-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-detail-block[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-detail-block--half[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ip-detail-icon-wrap[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #F8F9FA;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.ip-detail-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 2px;\n}\n.ip-detail-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-detail-value--mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n/*# sourceMappingURL=adminrh-certificate.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhCertificateComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-certificate", imports: [CommonModule, FormsModule], template: `<!-- Loading -->
<div *ngIf="loading" class="ip-loader">
  <div class="spinner-border" role="status"><span class="visually-hidden">Chargement\u2026</span></div>
</div>

<!-- Error -->
<div *ngIf="error" class="alert alert-danger alert-dismissible">
  {{ error }}
  <button type="button" class="btn-close" (click)="error = ''"></button>
</div>

<ng-container *ngIf="!loading">

  <!-- \u2500\u2500 Page header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="ip-page-head">
    <div>
      <h5 class="ip-page-head__title">Admin RH \u2014 personnalisation &amp; gestion</h5>
      <p class="ip-page-head__sub">Personnalisez le mod\xE8le et g\xE9rez les certificats d\xE9livr\xE9s \xE0 vos employ\xE9s</p>
    </div>
    <div class="ip-head-actions">
      <button type="button" class="ip-btn"
              [class.ip-btn--primary]="activeTab === 'certificats'"
              [class.ip-btn--ghost]="activeTab !== 'certificats'"
              (click)="activeTab = 'certificats'; loadCertificats()">
        <i class="isax isax-award"></i> Voir tous les certificats
      </button>
      <button type="button" class="ip-btn"
              [class.ip-btn--primary]="activeTab === 'personnalisation'"
              [class.ip-btn--ghost]="activeTab !== 'personnalisation'"
              (click)="activeTab = 'personnalisation'">
        <i class="isax isax-setting-2"></i> Personnaliser le mod\xE8le
      </button>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <!-- TAB : Personnalisation                                                -->
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div *ngIf="activeTab === 'personnalisation'" class="ip-customizer-layout">

    <!-- \u2500\u2500 Left panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="ip-panel">

      <!-- Section: Mod\xE8le de base -->
      <div class="ip-section">
        <div class="ip-section-head"><i class="isax isax-document"></i> Identit\xE9 entreprise</div>

        <div class="ip-field">
          <label class="ip-label">Nom de l'entreprise</label>
          <input type="text" class="ip-input" [(ngModel)]="config.entreprise_nom"
                 placeholder="Ex. TechNova S\xE9n\xE9gal">
        </div>
        <div class="ip-field">
          <label class="ip-label">Sous-titre</label>
          <input type="text" class="ip-input" [(ngModel)]="config.entreprise_sous_titre"
                 placeholder="Learning Management System">
        </div>
        <div class="ip-field">
          <label class="ip-label">Logo (URL)</label>
          <input type="text" class="ip-input" [(ngModel)]="config.logo_url"
                 placeholder="https://\u2026/logo.png">
        </div>

        <div class="ip-field">
          <label class="ip-label">Couleur principale</label>
          <div class="ip-palette-row">
            <button *ngFor="let c of palette" type="button"
                    class="ip-palette-swatch"
                    [style.background]="c"
                    [class.ip-palette-swatch--active]="config.couleur_principale === c"
                    (click)="setPalette(c)"></button>
            <input type="color" class="ip-color-pick" [(ngModel)]="config.couleur_principale"
                   title="Couleur personnalis\xE9e">
          </div>
        </div>

        <div class="ip-field">
          <label class="ip-label">Couleur de fond du certificat</label>
          <div class="ip-palette-row">
            <button type="button" class="ip-palette-swatch"
                    style="background:#FAFBFF; border:1px solid #dee2e6;"
                    [class.ip-palette-swatch--active]="config.bg_couleur === '#FAFBFF'"
                    (click)="config.bg_couleur = '#FAFBFF'"></button>
            <button type="button" class="ip-palette-swatch"
                    style="background:#fff; border:1px solid #dee2e6;"
                    [class.ip-palette-swatch--active]="config.bg_couleur === '#fff'"
                    (click)="config.bg_couleur = '#fff'"></button>
            <button type="button" class="ip-palette-swatch"
                    style="background:#F0FFF4; border:1px solid #dee2e6;"
                    [class.ip-palette-swatch--active]="config.bg_couleur === '#F0FFF4'"
                    (click)="config.bg_couleur = '#F0FFF4'"></button>
            <button type="button" class="ip-palette-swatch"
                    style="background:#EFF6FF; border:1px solid #dee2e6;"
                    [class.ip-palette-swatch--active]="config.bg_couleur === '#EFF6FF'"
                    (click)="config.bg_couleur = '#EFF6FF'"></button>
            <input type="color" class="ip-color-pick" [(ngModel)]="config.bg_couleur"
                   title="Couleur personnalis\xE9e">
          </div>
        </div>
      </div>

      <!-- Section: Textes -->
      <div class="ip-section">
        <div class="ip-section-head"><i class="isax isax-text"></i> Textes du certificat</div>

        <div class="ip-field">
          <label class="ip-label">Intitul\xE9 d'accroche</label>
          <input type="text" class="ip-input" [(ngModel)]="config.accroche"
                 placeholder="a compl\xE9t\xE9 avec succ\xE8s la formation">
        </div>
        <div class="ip-field">
          <label class="ip-label">Signataire</label>
          <input type="text" class="ip-input" [(ngModel)]="config.signataire_nom"
                 placeholder="Pr\xE9nom Nom">
        </div>
        <div class="ip-field">
          <label class="ip-label">R\xF4le du signataire</label>
          <input type="text" class="ip-input" [(ngModel)]="config.signataire_role"
                 placeholder="Responsable RH, TechNova S\xE9n\xE9gal">
        </div>
        <div class="ip-field">
          <label class="ip-label">Dur\xE9e de validit\xE9</label>
          <input type="text" class="ip-input" [(ngModel)]="config.duree_validite"
                 placeholder="1 an">
        </div>
      </div>

      <!-- Section: Options & s\xE9curit\xE9 -->
      <div class="ip-section">
        <div class="ip-section-head"><i class="isax isax-shield-tick"></i> Options &amp; s\xE9curit\xE9</div>

        <div class="ip-toggle-row">
          <div>
            <div class="ip-toggle-label">Score et dur\xE9e visibles</div>
            <div class="ip-toggle-sub">Affich\xE9s sur le certificat</div>
          </div>
          <label class="ip-switch">
            <input type="checkbox" [(ngModel)]="config.show_score">
            <span class="ip-switch-track"></span>
          </label>
        </div>
        <div class="ip-toggle-row">
          <div>
            <div class="ip-toggle-label">Dur\xE9e totale</div>
            <div class="ip-toggle-sub">Heures de formation</div>
          </div>
          <label class="ip-switch">
            <input type="checkbox" [(ngModel)]="config.show_duree">
            <span class="ip-switch-track"></span>
          </label>
        </div>
        <div class="ip-toggle-row">
          <div>
            <div class="ip-toggle-label">Nom du formateur</div>
            <div class="ip-toggle-sub">Signature du formateur</div>
          </div>
          <label class="ip-switch">
            <input type="checkbox" [(ngModel)]="config.show_formateur">
            <span class="ip-switch-track"></span>
          </label>
        </div>
        <div class="ip-toggle-row">
          <div>
            <div class="ip-toggle-label">QR code de v\xE9rification</div>
            <div class="ip-toggle-sub">Lien de validation publique</div>
          </div>
          <label class="ip-switch">
            <input type="checkbox" [(ngModel)]="config.show_qr">
            <span class="ip-switch-track"></span>
          </label>
        </div>
        <div class="ip-toggle-row">
          <div>
            <div class="ip-toggle-label">Num\xE9ro unique visible</div>
            <div class="ip-toggle-sub">R\xE9f\xE9rence tra\xE7able</div>
          </div>
          <label class="ip-switch">
            <input type="checkbox" [(ngModel)]="config.show_numero">
            <span class="ip-switch-track"></span>
          </label>
        </div>
        <div class="ip-toggle-row">
          <div>
            <div class="ip-toggle-label">Date d'expiration</div>
            <div class="ip-toggle-sub">Valide jusqu'au\u2026</div>
          </div>
          <label class="ip-switch">
            <input type="checkbox" [(ngModel)]="config.show_date_expiration">
            <span class="ip-switch-track"></span>
          </label>
        </div>
      </div>

      <!-- Save -->
      <div class="ip-save-row">
        <div *ngIf="saveSuccess" class="ip-save-ok">
          <i class="isax isax-tick-circle"></i> Mod\xE8le enregistr\xE9
        </div>
        <button type="button" class="ip-btn ip-btn--primary ip-btn--wide"
                [disabled]="saving" (click)="saveModele()">
          <i class="isax isax-save-2"></i>
          {{ saving ? 'Enregistrement\u2026' : 'Enregistrer le mod\xE8le' }}
        </button>
      </div>
    </div>

    <!-- \u2500\u2500 Right panel: live preview \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="ip-preview-col">
      <div class="ip-preview-head">
        <span><i class="isax isax-eye"></i> Aper\xE7u en temps r\xE9el \u2014 mod\xE8le appliqu\xE9 \xE0 toutes les formations</span>
        <button type="button" class="ip-btn ip-btn--ghost ip-btn--sm"
                [disabled]="downloading" (click)="downloadPreview()">
          <i [class]="downloading ? 'isax isax-refresh ip-spin' : 'isax isax-document-download'"></i>
          {{ downloading ? 'G\xE9n\xE9ration\u2026' : 'Exporter PDF' }}
        </button>
      </div>

      <!-- Certificate card preview -->
      <div class="ip-cert-card" [style.background]="config.bg_couleur">
        <!-- Accent bar -->
        <div class="ip-cert-card__bar" [style.background]="config.couleur_principale"></div>

        <!-- Header row -->
        <div class="ip-cert-card__header">
          <div class="ip-cert-card__logo-wrap">
            <img *ngIf="config.logo_url" [src]="config.logo_url" class="ip-cert-card__logo-img"
                 alt="logo" onerror="this.style.display='none'">
            <div *ngIf="!config.logo_url" class="ip-cert-card__logo-mark"
                 [style.background]="config.couleur_principale">
              {{ getInitials(config.entreprise_nom || 'E') }}
            </div>
          </div>
          <div class="ip-cert-card__header-text">
            <div class="ip-cert-card__company">{{ config.entreprise_nom || 'Votre Entreprise' }}</div>
            <div class="ip-cert-card__company-sub">{{ config.entreprise_sous_titre }}</div>
          </div>
          <div *ngIf="config.show_numero" class="ip-cert-card__num">N\xB0 CERT-2025-0091</div>
        </div>

        <!-- Body -->
        <div class="ip-cert-card__body">
          <div class="ip-cert-card__label">CERTIFICAT DE R\xC9USSITE</div>
          <div class="ip-cert-card__name">Moussa Ndiaye</div>
          <div class="ip-cert-card__accroche">{{ config.accroche }}</div>
          <div class="ip-cert-card__formation" [style.color]="config.couleur_principale">
            Cybers\xE9curit\xE9 &amp; protection des donn\xE9es
          </div>

          <!-- Stats row -->
          <div class="ip-cert-card__stats" *ngIf="config.show_score || config.show_duree">
            <div *ngIf="config.show_score" class="ip-cert-card__stat">
              <div class="ip-cert-card__stat-val" [style.color]="config.couleur_principale">87%</div>
              <div class="ip-cert-card__stat-label">Score obtenu</div>
            </div>
            <div *ngIf="config.show_score && config.show_duree" class="ip-cert-card__stat-sep"></div>
            <div *ngIf="config.show_duree" class="ip-cert-card__stat">
              <div class="ip-cert-card__stat-val">8h</div>
              <div class="ip-cert-card__stat-label">Dur\xE9e totale</div>
            </div>
          </div>

          <!-- Signature row -->
          <div class="ip-cert-card__sig-row">
            <div *ngIf="config.signataire_nom || config.signataire_role" class="ip-cert-card__sig">
              <div class="ip-cert-card__sig-line"></div>
              <div class="ip-cert-card__sig-name">{{ config.signataire_nom || 'Signataire' }}</div>
              <div class="ip-cert-card__sig-role">{{ config.signataire_role }}</div>
            </div>
            <div *ngIf="config.show_formateur" class="ip-cert-card__sig">
              <div class="ip-cert-card__sig-line"></div>
              <div class="ip-cert-card__sig-name">Ibrahima Sow</div>
              <div class="ip-cert-card__sig-role" [style.color]="config.couleur_principale">
                Formateur \xB7 Cybers\xE9curit\xE9
              </div>
            </div>
            <div *ngIf="config.show_qr" class="ip-cert-card__qr">
              <i class="isax isax-scan-barcode"></i>
            </div>
          </div>

          <!-- Validity -->
          <div class="ip-cert-card__validity">
            D\xE9livr\xE9 le 15 janvier 2025
            <ng-container *ngIf="config.show_date_expiration">
              \xB7 Valide jusqu'au 15 janvier 2025 ({{ config.duree_validite }})
            </ng-container>
          </div>
        </div>
      </div>

      <!-- Recently issued -->
      <div class="ip-recent-head">CERTIFICATS R\xC9CEMMENT D\xC9LIVR\xC9S</div>
      <div class="ip-card">
        <div class="table-responsive">
          <table class="table ip-table">
            <thead>
              <tr>
                <th>Employ\xE9</th>
                <th>Formation</th>
                <th>Score</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let cert of filteredCertificats | slice:0:5">
                <td>
                  <div class="ip-user-cell">
                    <div class="ip-avatar"
                         [style.background]="getAvatarStyle(cert.employe_id).bg"
                         [style.color]="getAvatarStyle(cert.employe_id).color">
                      {{ getInitials(cert.employe?.name || '') }}
                    </div>
                    <div>
                      <div class="ip-user-name">{{ cert.employe?.prenom }} {{ cert.employe?.nom }}</div>
                      <div class="ip-user-sub">{{ cert.date_delivrance | date:'d MMM yyyy' }}</div>
                    </div>
                  </div>
                </td>
                <td><span class="ip-formation-name">{{ cert.formation?.titre }}</span></td>
                <td>
                  <span *ngIf="cert.score_final" class="ip-score-badge"
                        [style.color]="getScoreColor(cert.score_final)"
                        [style.background]="parseFloat(cert.score_final) >= 80 ? '#ECFDF5' : parseFloat(cert.score_final) >= 60 ? '#FFFBEB' : '#FFF5F5'">
                    {{ cert.score_final }}%
                  </span>
                  <span *ngIf="!cert.score_final" class="text-muted">\u2014</span>
                </td>
                <td>
                  <span class="ip-cert-badge"
                        [class.ip-cert-badge--valide]="cert.statut === 'valide'"
                        [class.ip-cert-badge--expire]="cert.statut === 'expir\xE9'"
                        [class.ip-cert-badge--revoque]="cert.statut === 'r\xE9voqu\xE9'">
                    <i class="fa-solid fa-circle"></i>
                    {{ cert.statut === 'valide' ? 'D\xE9livr\xE9' : cert.statut === 'expir\xE9' ? 'Expir\xE9' : 'R\xE9voqu\xE9' }}
                  </span>
                </td>
                <td>
                  <div class="ip-actions">
                    <button type="button" class="ip-action-btn" title="D\xE9tails" (click)="openDetails(cert)">
                      <i class="isax isax-eye"></i>
                    </button>
                    <button type="button" class="ip-action-btn" title="T\xE9l\xE9charger PDF"
                            [disabled]="downloading" (click)="downloadPdf(cert)">
                      <i [class]="downloading ? 'isax isax-refresh ip-spin' : 'isax isax-document-download'"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr *ngIf="filteredCertificats.length === 0">
                <td colspan="5" class="ip-empty">
                  <i class="isax isax-award"></i>
                  <span>Aucun certificat trouv\xE9</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <!-- TAB : Tous les certificats                                            -->
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <ng-container *ngIf="activeTab === 'certificats'">

    <!-- Sync bar -->
    <div class="ip-sync-bar">
      <span class="ip-sync-hint">
        <i class="isax isax-info-circle"></i>
        Les certificats sont g\xE9n\xE9r\xE9s automatiquement \xE0 la fin des formations certifiantes.
      </span>
      <div class="ip-sync-right">
        <span *ngIf="syncResult" class="ip-sync-ok">
          <i class="isax isax-tick-circle"></i> {{ syncResult }}
        </span>
        <button type="button" class="ip-btn ip-btn--ghost ip-btn--sm"
                [disabled]="syncing" (click)="syncCertificats()">
          <i class="isax isax-refresh" [class.ip-spin]="syncing"></i>
          {{ syncing ? 'Synchronisation\u2026' : 'Synchroniser' }}
        </button>
      </div>
    </div>

    <!-- KPI cards -->
    <div class="ip-kpi-row">
      <div class="ip-kpi-card">
        <div class="ip-kpi-icon"><i class="isax isax-award"></i></div>
        <div>
          <div class="ip-kpi-label">Total certificats</div>
          <div class="ip-kpi-value">{{ totalCertificats }}</div>
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
    </div>

    <!-- Filters -->
    <div class="ip-card ip-filter-card">
      <div class="ip-filter-row">
        <div class="ip-filter-group ip-filter-group--search">
          <div class="ip-input-icon-wrap">
            <i class="isax isax-search-normal ip-input-icon"></i>
            <input type="text" class="ip-input ip-input--icon"
                   [(ngModel)]="filterSearch" (ngModelChange)="applyFilters()"
                   placeholder="Rechercher par employ\xE9, formation, code\u2026">
          </div>
        </div>
        <div class="ip-filter-group">
          <select class="ip-input" [(ngModel)]="filterStatut" (ngModelChange)="applyFilters()">
            <option value="all">Tous les statuts</option>
            <option value="valide">Valide</option>
            <option value="expir\xE9">Expir\xE9</option>
            <option value="r\xE9voqu\xE9">R\xE9voqu\xE9</option>
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
              <th>Score</th>
              <th>Formateur</th>
              <th>D\xE9livr\xE9 le</th>
              <th>Expiration</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let cert of filteredCertificats">
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
                <div class="ip-formation-meta" *ngIf="cert.formation?.duree_totale">
                  <i class="isax isax-clock"></i> {{ cert.formation?.duree_totale }}h
                </div>
              </td>
              <td>
                <span *ngIf="cert.score_final" class="ip-score-badge"
                      [style.color]="getScoreColor(cert.score_final)"
                      [style.background]="parseFloat(cert.score_final) >= 80 ? '#ECFDF5' : parseFloat(cert.score_final) >= 60 ? '#FFFBEB' : '#FFF5F5'">
                  {{ cert.score_final }}%
                </span>
                <span *ngIf="!cert.score_final" class="text-muted">\u2014</span>
              </td>
              <td>
                <span class="text-muted" *ngIf="cert.formateur">
                  {{ cert.formateur?.prenom }} {{ cert.formateur?.nom }}
                </span>
                <span class="text-muted" *ngIf="!cert.formateur">\u2014</span>
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
                          [disabled]="downloading" (click)="downloadPdf(cert)">
                    <i [class]="downloading ? 'isax isax-refresh ip-spin' : 'isax isax-document-download'"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr *ngIf="filteredCertificats.length === 0">
              <td colspan="8" class="ip-empty">
                <i class="isax isax-award"></i>
                <span>Aucun certificat trouv\xE9</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </ng-container>

</ng-container>

<!-- \u2500\u2500 MODAL D\xC9TAILS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<div class="modal fade" id="arh_cert_details_modal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered ip-modal-dialog">
    <div class="modal-content ip-modal-content" *ngIf="selectedCert">

      <div class="ip-cert-accent" [style.background]="config.couleur_principale"></div>

      <div class="ip-modal-header">
        <div class="ip-modal-icon" [style.background]="config.couleur_principale + '20'"
             [style.color]="config.couleur_principale">
          <i class="isax isax-award"></i>
        </div>
        <div>
          <h5 class="ip-modal-title">Certificat de r\xE9ussite</h5>
          <p class="ip-modal-sub">N\xB0 {{ selectedCert.code_unique }}</p>
        </div>
        <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal"></button>
      </div>
      <div class="ip-modal-divider"></div>

      <div class="ip-modal-body">
        <div class="ip-cert-preview" [style.background]="config.bg_couleur">

          <div class="ip-cert-logo">
            <img *ngIf="config.logo_url" [src]="config.logo_url" class="ip-cert-card__logo-img" alt="logo"
                 style="width:36px;height:36px;object-fit:contain;">
            <div *ngIf="!config.logo_url" class="ip-cert-logo-mark"
                 [style.background]="config.couleur_principale">
              {{ getInitials(config.entreprise_nom || 'E') }}
            </div>
            <div>
              <div class="ip-cert-logo-text">{{ config.entreprise_nom || selectedCert.employe?.prenom + ' ' + selectedCert.employe?.nom }}</div>
              <div class="ip-cert-logo-sub">{{ config.entreprise_sous_titre }}</div>
            </div>
          </div>

          <div class="ip-cert-label">Certificat de r\xE9ussite</div>
          <div class="ip-cert-action-text">{{ config.accroche }}</div>
          <div class="ip-cert-formation-title" [style.color]="config.couleur_principale">
            {{ selectedCert.formation?.titre }}
          </div>

          <div class="ip-cert-score-row" *ngIf="config.show_score || config.show_duree">
            <div *ngIf="config.show_score" class="ip-cert-score-item">
              <div class="ip-cert-score-val" [style.color]="config.couleur_principale">
                {{ selectedCert.score_final }}%
              </div>
              <div class="ip-cert-score-label">Score obtenu</div>
            </div>
            <div *ngIf="config.show_score && config.show_duree" class="ip-cert-divider-v"></div>
            <div *ngIf="config.show_duree" class="ip-cert-score-item">
              <div class="ip-cert-score-val">{{ selectedCert.formation?.duree_totale || '\u2014' }}h</div>
              <div class="ip-cert-score-label">Dur\xE9e totale</div>
            </div>
          </div>

          <div class="ip-cert-sig-row">
            <div class="ip-cert-sig">
              <div class="ip-cert-sig-line"></div>
              <div class="ip-cert-sig-name">{{ config.signataire_nom || '\u2014' }}</div>
              <div class="ip-cert-sig-role">{{ config.signataire_role }}</div>
            </div>
            <div *ngIf="config.show_formateur" class="ip-cert-sig">
              <div class="ip-cert-sig-line"></div>
              <div class="ip-cert-sig-name">{{ selectedCert.formateur?.prenom }} {{ selectedCert.formateur?.nom }}</div>
              <div class="ip-cert-sig-role" [style.color]="config.couleur_principale">
                Formateur \xB7 {{ selectedCert.formation?.titre }}
              </div>
            </div>
            <div *ngIf="config.show_qr" class="ip-cert-qr"><i class="isax isax-scan-barcode"></i></div>
          </div>

          <div class="ip-cert-validity">
            D\xE9livr\xE9 le {{ selectedCert.date_delivrance | date:'dd MMMM yyyy' : '' : 'fr-FR' }}
            <ng-container *ngIf="config.show_date_expiration && selectedCert.date_expiration">
              \xB7 Valide jusqu'au {{ selectedCert.date_expiration | date:'dd MMMM yyyy' : '' : 'fr-FR' }}
            </ng-container>
          </div>
        </div>

        <div class="ip-detail-row ip-detail-row--mt">
          <div class="ip-detail-block ip-detail-block--half">
            <div class="ip-detail-icon-wrap"><i class="isax isax-tag"></i></div>
            <div>
              <div class="ip-detail-label">Code unique</div>
              <div class="ip-detail-value ip-detail-value--mono">{{ selectedCert.code_unique }}</div>
            </div>
          </div>
          <div class="ip-detail-block ip-detail-block--half">
            <div class="ip-detail-icon-wrap"><i class="isax isax-status"></i></div>
            <div>
              <div class="ip-detail-label">Statut</div>
              <div>
                <span class="ip-cert-badge"
                      [class.ip-cert-badge--valide]="selectedCert.statut === 'valide'"
                      [class.ip-cert-badge--expire]="selectedCert.statut === 'expir\xE9'"
                      [class.ip-cert-badge--revoque]="selectedCert.statut === 'r\xE9voqu\xE9'">
                  <i class="fa-solid fa-circle"></i>
                  {{ selectedCert.statut === 'valide' ? 'Valide' : selectedCert.statut === 'expir\xE9' ? 'Expir\xE9' : 'R\xE9voqu\xE9' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="ip-modal-divider"></div>
      <div class="ip-modal-footer">
        <button type="button" class="ip-btn ip-btn--ghost" data-bs-dismiss="modal">Fermer</button>
        <button type="button" class="ip-btn ip-btn--primary"
                [style.background]="config.couleur_principale"
                [disabled]="downloading"
                (click)="downloadPdf(selectedCert)">
          <i [class]="downloading ? 'isax isax-refresh ip-spin' : 'isax isax-document-download'"></i>
          {{ downloading ? 'G\xE9n\xE9ration\u2026' : 'T\xE9l\xE9charger PDF' }}
        </button>
      </div>

    </div>
  </div>
</div>
`, styles: ['/* src/app/features/adminrh/adminrh-certificate/adminrh-certificate.component.scss */\n.ip-loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-head-actions {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ip-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn i {\n  font-size: 15px;\n}\n.ip-btn--primary {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-btn--ghost {\n  background: #fff;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n}\n.ip-btn--wide {\n  width: 100%;\n  justify-content: center;\n}\n.ip-btn--sm {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.ip-btn[disabled] {\n  opacity: 0.55;\n  cursor: default;\n}\n.ip-customizer-layout {\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  gap: 24px;\n  align-items: flex-start;\n}\n@media (max-width: 900px) {\n  .ip-customizer-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-panel {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.ip-section {\n  padding: 16px 20px;\n  border-bottom: 1px solid #E9ECEF;\n}\n.ip-section:last-child {\n  border-bottom: none;\n}\n.ip-section-head {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1A1A2E;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ip-section-head i {\n  color: #D4AF37;\n  font-size: 14px;\n}\n.ip-field {\n  margin-bottom: 12px;\n}\n.ip-field:last-child {\n  margin-bottom: 0;\n}\n.ip-label {\n  display: block;\n  font-size: 11px;\n  font-weight: 500;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 5px;\n}\n.ip-input {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-input--icon {\n  padding-left: 34px;\n}\n.ip-input-icon-wrap {\n  position: relative;\n}\n.ip-input-icon {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6C757D;\n  font-size: 14px;\n  pointer-events: none;\n}\n.ip-palette-row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.ip-palette-swatch {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n  transition: transform 0.12s, border-color 0.12s;\n  padding: 0;\n}\n.ip-palette-swatch--active {\n  border-color: #1A1A2E;\n  transform: scale(1.15);\n}\n.ip-palette-swatch:hover {\n  transform: scale(1.1);\n}\n.ip-color-pick {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 1px solid #E9ECEF;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n}\n.ip-color-pick::-webkit-color-swatch-wrapper {\n  padding: 0;\n  border-radius: 50%;\n}\n.ip-color-pick::-webkit-color-swatch {\n  border-radius: 50%;\n  border: none;\n}\n.ip-toggle-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 9px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-toggle-row:last-child {\n  border-bottom: none;\n}\n.ip-toggle-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-toggle-sub {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 1px;\n}\n.ip-switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.ip-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ip-switch-track {\n  position: absolute;\n  inset: 0;\n  border-radius: 22px;\n  background: #DEE2E6;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.ip-switch-track::before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.ip-switch input:checked + .ip-switch-track {\n  background: #D4AF37;\n}\n.ip-switch input:checked + .ip-switch-track::before {\n  transform: translateX(18px);\n}\n.ip-save-row {\n  padding: 16px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-save-ok {\n  font-size: 12px;\n  color: #059669;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.ip-save-ok i {\n  font-size: 14px;\n}\n.ip-preview-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 14px;\n}\n.ip-preview-head i {\n  font-size: 14px;\n  margin-right: 4px;\n}\n.ip-cert-card {\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n}\n.ip-cert-card__bar {\n  height: 6px;\n}\n.ip-cert-card__header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #E9ECEF;\n}\n.ip-cert-card__logo-wrap {\n  flex-shrink: 0;\n}\n.ip-cert-card__logo-img {\n  width: 36px;\n  height: 36px;\n  object-fit: contain;\n  border-radius: 6px;\n}\n.ip-cert-card__logo-mark {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n}\n.ip-cert-card__header-text {\n  flex: 1;\n  min-width: 0;\n}\n.ip-cert-card__company {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.ip-cert-card__company-sub {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-cert-card__num {\n  font-size: 11px;\n  color: #6C757D;\n  font-family: monospace;\n  white-space: nowrap;\n}\n.ip-cert-card__body {\n  padding: 20px;\n  text-align: center;\n}\n.ip-cert-card__label {\n  font-size: 10px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-bottom: 6px;\n}\n.ip-cert-card__name {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n  margin-bottom: 6px;\n}\n.ip-cert-card__accroche {\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 6px;\n}\n.ip-cert-card__formation {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.ip-cert-card__stats {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 16px;\n}\n.ip-cert-card__stat {\n  text-align: center;\n}\n.ip-cert-card__stat-val {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-cert-card__stat-label {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.ip-cert-card__stat-sep {\n  width: 1px;\n  height: 32px;\n  background: #E9ECEF;\n}\n.ip-cert-card__sig-row {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding-top: 12px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 4px;\n}\n.ip-cert-card__sig {\n  text-align: center;\n}\n.ip-cert-card__sig-line {\n  width: 70px;\n  height: 1px;\n  background: #E9ECEF;\n  margin: 0 auto 4px;\n}\n.ip-cert-card__sig-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-card__sig-role {\n  font-size: 10px;\n  color: #6C757D;\n}\n.ip-cert-card__qr {\n  width: 40px;\n  height: 40px;\n  background: #F8F9FA;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  color: #6C757D;\n}\n.ip-cert-card__validity {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 12px;\n}\n.ip-recent-head {\n  font-size: 10px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 10px;\n}\n.ip-sync-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 10px 16px;\n  margin-bottom: 16px;\n  font-size: 12px;\n}\n.ip-sync-hint {\n  color: #6C757D;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ip-sync-hint i {\n  color: #D4AF37;\n  font-size: 14px;\n}\n.ip-sync-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-sync-ok {\n  color: #059669;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.ip-sync-ok i {\n  font-size: 13px;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ip-spin {\n  animation: spin 0.8s linear infinite;\n  display: inline-block;\n}\n.ip-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #FDF8E7;\n  color: #D4AF37;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-kpi-row {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.ip-kpi-card {\n  flex: 1;\n  min-width: 140px;\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ip-kpi-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: #FDF8E7;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.ip-kpi-icon--success {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-kpi-icon--warn {\n  background: #FFF9EC;\n  color: #D97706;\n}\n.ip-kpi-label {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 3px;\n}\n.ip-kpi-value {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-filter-card {\n  padding: 14px 18px;\n  margin-bottom: 20px;\n  overflow: visible;\n}\n.ip-filter-row {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.ip-filter-group {\n  flex: 1;\n  min-width: 160px;\n}\n.ip-filter-group--search {\n  flex: 2;\n  min-width: 220px;\n}\n.ip-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-table {\n  margin: 0;\n}\n.ip-table thead th {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table tbody td {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.ip-table tbody tr:hover td {\n  background: #FAFBFF;\n}\n.ip-user-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n}\n.ip-user-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-user-sub {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-formation-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-formation-meta {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 2px;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ip-formation-meta i {\n  font-size: 11px;\n}\n.ip-score-badge {\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 6px;\n}\n.ip-expire-warn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #D97706;\n}\n.ip-expire-warn i {\n  font-size: 11px;\n}\n.ip-cert-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 6px;\n}\n.ip-cert-badge i {\n  font-size: 8px;\n}\n.ip-cert-badge--valide {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-cert-badge--expire {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-cert-badge--revoque {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-actions {\n  display: flex;\n  gap: 4px;\n}\n.ip-action-btn {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n  text-decoration: none;\n}\n.ip-action-btn:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-empty {\n  text-align: center;\n  padding: 40px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty i {\n  font-size: 28px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-modal-dialog {\n  max-width: 540px;\n}\n.ip-modal-content {\n  border: none;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);\n}\n.ip-cert-accent {\n  height: 5px;\n}\n.ip-modal-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 24px;\n}\n.ip-modal-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.ip-modal-title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 2px;\n}\n.ip-modal-sub {\n  font-size: 12px;\n  color: #6C757D;\n  margin: 0;\n  font-family: monospace;\n}\n.ip-modal-divider {\n  height: 1px;\n  background: #E9ECEF;\n}\n.ip-modal-body {\n  padding: 20px 24px;\n}\n.ip-modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n}\n.ip-cert-preview {\n  background: #FAFBFF;\n  border: 1px solid #E9ECEF;\n  border-radius: 12px;\n  padding: 20px 24px;\n  text-align: center;\n}\n.ip-cert-logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n  text-align: left;\n}\n.ip-cert-logo-mark {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: #fff;\n}\n.ip-cert-logo-text {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-logo-sub {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-cert-label {\n  font-size: 10px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 4px;\n}\n.ip-cert-action-text {\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 6px;\n}\n.ip-cert-formation-title {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 14px;\n}\n.ip-cert-score-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 14px;\n}\n.ip-cert-score-item {\n  text-align: center;\n}\n.ip-cert-score-val {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.ip-cert-score-label {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.ip-cert-divider-v {\n  width: 1px;\n  height: 32px;\n  background: #E9ECEF;\n}\n.ip-cert-sig-row {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding-top: 10px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 10px;\n}\n.ip-cert-sig {\n  text-align: center;\n}\n.ip-cert-sig-line {\n  width: 70px;\n  height: 1px;\n  background: #E9ECEF;\n  margin: 0 auto 4px;\n}\n.ip-cert-sig-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-sig-role {\n  font-size: 10px;\n  color: #6C757D;\n}\n.ip-cert-qr {\n  width: 40px;\n  height: 40px;\n  background: #F8F9FA;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  color: #6C757D;\n}\n.ip-cert-validity {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 12px;\n}\n.ip-detail-row {\n  display: flex;\n  gap: 0;\n}\n.ip-detail-row--mt {\n  margin-top: 16px;\n}\n.ip-detail-block {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-detail-block:last-child {\n  border-bottom: none;\n}\n.ip-detail-block--half {\n  flex: 1;\n  min-width: 0;\n}\n.ip-detail-icon-wrap {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  background: #F8F9FA;\n  color: #D4AF37;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.ip-detail-label {\n  font-size: 11px;\n  color: #6C757D;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 2px;\n}\n.ip-detail-value {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-detail-value--mono {\n  font-family: monospace;\n}\n/*# sourceMappingURL=adminrh-certificate.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }, { type: CertificatService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhCertificateComponent, { className: "AdminrhCertificateComponent", filePath: "src/app/features/adminrh/adminrh-certificate/adminrh-certificate.component.ts", lineNumber: 19 });
})();
export {
  AdminrhCertificateComponent
};
//# sourceMappingURL=chunk-DPY4IUI6.js.map
