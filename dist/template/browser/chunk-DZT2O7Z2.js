import {
  CertificatService,
  DEFAULT_CERT_CONFIG
} from "./chunk-7KDALVVQ.js";
import "./chunk-5RVU2RVV.js";
import "./chunk-FQH4LUZ5.js";
import {
  FormationsService
} from "./chunk-MDRJR4EN.js";
import {
  AuthService
} from "./chunk-SNOA42FF.js";
import "./chunk-FKX6UC3I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-45DOGZAU.js";
import "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-MNWNTO2T.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  catchError,
  of,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
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
} from "./chunk-7XGB4BEQ.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/student/student-certificate/student-certificate.component.ts
function StudentCertificateComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r0.userEntreprise);
  }
}
function StudentCertificateComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2191 +", ctx_r0.nbObtenusCeMois, " ce mois");
  }
}
function StudentCertificateComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, "Aucun ce mois");
    \u0275\u0275elementEnd();
  }
}
function StudentCertificateComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Dans ", ctx_r0.daysUntilExpiry(ctx_r0.firstExpiring), " jours ");
  }
}
function StudentCertificateComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, "Aucun");
    \u0275\u0275elementEnd();
  }
}
function StudentCertificateComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275elementStart(2, "div", 53)(3, "div", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 55);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 56);
    \u0275\u0275text(8, "Renouveler \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r0.firstExpiring.formation == null ? null : ctx_r0.firstExpiring.formation.titre, " \u2014 expire dans ", ctx_r0.daysUntilExpiry(ctx_r0.firstExpiring), " jours ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Renouvelez votre certification avant le ", ctx_r0.formatDate(ctx_r0.firstExpiring.date_expiration), " pour conserver vos droits. ");
  }
}
function StudentCertificateComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "div", 58);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement de vos certificats...");
    \u0275\u0275elementEnd()();
  }
}
function StudentCertificateComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60);
    \u0275\u0275element(2, "i", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 61);
    \u0275\u0275text(4, "Aucun certificat trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Vos certificats obtenus appara\xEEtront ici.");
    \u0275\u0275elementEnd()();
  }
}
function StudentCertificateComponent_div_86_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1, "Valide");
    \u0275\u0275elementEnd();
  }
}
function StudentCertificateComponent_div_86_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1, "Expire bient\xF4t");
    \u0275\u0275elementEnd();
  }
}
function StudentCertificateComponent_div_86_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 97);
    \u0275\u0275text(1, "Expir\xE9");
    \u0275\u0275elementEnd();
  }
}
function StudentCertificateComponent_div_86_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 98);
    \u0275\u0275text(1, "R\xE9cent");
    \u0275\u0275elementEnd();
  }
}
function StudentCertificateComponent_div_86_div_1_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r0.userEntreprise);
  }
}
function StudentCertificateComponent_div_86_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275element(1, "i", 100);
    \u0275\u0275elementStart(2, "span", 101);
    \u0275\u0275text(3, "ID :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 102);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 103);
    \u0275\u0275listener("click", function StudentCertificateComponent_div_86_div_1_div_28_Template_span_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const cert_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyCode(cert_r4));
    });
    \u0275\u0275element(7, "i", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cert_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.getIconStyle(cert_r4).color);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r0.getIconStyle(cert_r4).color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cert_r4.code_unique);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.copiedId === cert_r4.id ? "Copi\xE9 !" : "Copier");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.copiedId === cert_r4.id ? "isax-tick-circle" : "isax-copy");
  }
}
function StudentCertificateComponent_div_86_div_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275element(1, "i", 104);
    \u0275\u0275elementStart(2, "span", 101);
    \u0275\u0275text(3, "Expire dans");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 105);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 106);
    \u0275\u0275text(7, "Renouveler \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cert_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.daysUntilExpiry(cert_r4), " jours");
  }
}
function StudentCertificateComponent_div_86_div_1_button_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 107);
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275text(2, " Renouveler ");
    \u0275\u0275elementEnd();
  }
}
function StudentCertificateComponent_div_86_div_1_button_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 108);
    \u0275\u0275listener("click", function StudentCertificateComponent_div_86_div_1_button_49_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const cert_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openPreview(cert_r4));
    });
    \u0275\u0275element(1, "i", 109);
    \u0275\u0275elementEnd();
  }
}
function StudentCertificateComponent_div_86_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "div", 65);
    \u0275\u0275elementStart(2, "div", 66)(3, "div", 67)(4, "div", 68);
    \u0275\u0275element(5, "i", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 70);
    \u0275\u0275template(7, StudentCertificateComponent_div_86_div_1_span_7_Template, 2, 0, "span", 71)(8, StudentCertificateComponent_div_86_div_1_span_8_Template, 2, 0, "span", 72)(9, StudentCertificateComponent_div_86_div_1_span_9_Template, 2, 0, "span", 73)(10, StudentCertificateComponent_div_86_div_1_span_10_Template, 2, 0, "span", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 75);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 76);
    \u0275\u0275element(14, "i", 77);
    \u0275\u0275text(15);
    \u0275\u0275template(16, StudentCertificateComponent_div_86_div_1_ng_container_16_Template, 2, 1, "ng-container", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 78)(18, "div", 79)(19, "div", 80);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 81);
    \u0275\u0275text(22, "Dur\xE9e");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 79)(24, "div", 80);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 81);
    \u0275\u0275text(27, "Niveau");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(28, StudentCertificateComponent_div_86_div_1_div_28_Template, 8, 7, "div", 82)(29, StudentCertificateComponent_div_86_div_1_div_29_Template, 8, 1, "div", 82);
    \u0275\u0275elementStart(30, "div", 83)(31, "div", 84)(32, "div", 85);
    \u0275\u0275text(33, "D\xE9livr\xE9 le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 86);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 87)(37, "div", 85);
    \u0275\u0275text(38, "Expire le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 86);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 88)(42, "button", 89);
    \u0275\u0275listener("click", function StudentCertificateComponent_div_86_div_1_Template_button_click_42_listener() {
      const cert_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.downloadPdf(cert_r4));
    });
    \u0275\u0275element(43, "i", 90);
    \u0275\u0275text(44, " PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 91);
    \u0275\u0275element(46, "i", 92);
    \u0275\u0275text(47, " Partager ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, StudentCertificateComponent_div_86_div_1_button_48_Template, 3, 0, "button", 93)(49, StudentCertificateComponent_div_86_div_1_button_49_Template, 2, 0, "button", 94);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cert_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("expiring", ctx_r0.getCardStatus(cert_r4) === "expiring")("expired", ctx_r0.getCardStatus(cert_r4) === "expired");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.getAccentColor(cert_r4));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r0.getIconStyle(cert_r4).bg);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.getIconStyle(cert_r4).color);
    \u0275\u0275property("ngClass", ctx_r0.getIconStyle(cert_r4).icon);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.getCardStatus(cert_r4) === "valid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getCardStatus(cert_r4) === "expiring");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getCardStatus(cert_r4) === "expired");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isNewCert(cert_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((cert_r4.formation == null ? null : cert_r4.formation.titre) ?? "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormateurName(cert_r4));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.userEntreprise);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((cert_r4.formation == null ? null : cert_r4.formation.duree_totale) ? cert_r4.formation.duree_totale + "h" : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((cert_r4.formation == null ? null : cert_r4.formation.niveau) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.getCardStatus(cert_r4) !== "expiring");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getCardStatus(cert_r4) === "expiring");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(cert_r4.date_delivrance));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("warn", ctx_r0.getCardStatus(cert_r4) === "expiring")("danger", ctx_r0.getCardStatus(cert_r4) === "expired");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cert_r4.date_expiration ? ctx_r0.formatDate(cert_r4.date_expiration) : "Illimit\xE9", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.downloading);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.getCardStatus(cert_r4) === "expiring");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getCardStatus(cert_r4) !== "expiring");
  }
}
function StudentCertificateComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275template(1, StudentCertificateComponent_div_86_div_1_Template, 50, 31, "div", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.filteredCertificats);
  }
}
function StudentCertificateComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "div", 58);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function StudentCertificateComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60);
    \u0275\u0275element(2, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 61);
    \u0275\u0275text(4, "Aucun historique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Vos certifications obtenues appara\xEEtront ici.");
    \u0275\u0275elementEnd()();
  }
}
function StudentCertificateComponent_div_90_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 124);
  }
}
function StudentCertificateComponent_div_90_div_1_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cert_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", cert_r6.formation.duree_totale, "h \xB7 ");
  }
}
function StudentCertificateComponent_div_90_div_1_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " \xB7 ");
    \u0275\u0275elementStart(2, "span", 125);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cert_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("expire dans ", ctx_r0.daysUntilExpiry(cert_r6), "j");
  }
}
function StudentCertificateComponent_div_90_div_1_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 126);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cert_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", cert_r6.formation.duree_totale, "h");
  }
}
function StudentCertificateComponent_div_90_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113);
    \u0275\u0275element(2, "div", 114);
    \u0275\u0275template(3, StudentCertificateComponent_div_90_div_1_div_3_Template, 1, 0, "div", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 116)(5, "div", 117);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 118)(8, "div", 119);
    \u0275\u0275element(9, "i", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 120)(11, "div", 121);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 122);
    \u0275\u0275template(14, StudentCertificateComponent_div_90_div_1_ng_container_14_Template, 2, 1, "ng-container", 6);
    \u0275\u0275text(15);
    \u0275\u0275template(16, StudentCertificateComponent_div_90_div_1_ng_container_16_Template, 4, 1, "ng-container", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, StudentCertificateComponent_div_90_div_1_span_17_Template, 2, 1, "span", 123);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cert_r6 = ctx.$implicit;
    const last_r7 = ctx.last;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r0.getAccentColor(cert_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(cert_r6.date_delivrance));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r0.getIconStyle(cert_r6).bg);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.getIconStyle(cert_r6).color);
    \u0275\u0275property("ngClass", ctx_r0.getIconStyle(cert_r6).icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((cert_r6.formation == null ? null : cert_r6.formation.titre) ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", cert_r6.formation == null ? null : cert_r6.formation.duree_totale);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFormateurName(cert_r6), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isExpiringSoon(cert_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cert_r6.formation == null ? null : cert_r6.formation.duree_totale);
  }
}
function StudentCertificateComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275template(1, StudentCertificateComponent_div_90_div_1_Template, 18, 14, "div", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.historiqueList);
  }
}
function StudentCertificateComponent_p_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 127);
    \u0275\u0275text(1, " Ces formations d\xE9livreront un certificat \xE0 leur compl\xE9tion. ");
    \u0275\u0275elementEnd();
  }
}
function StudentCertificateComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60);
    \u0275\u0275element(2, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 61);
    \u0275\u0275text(4, "Aucune formation certifiante en cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Commencez une formation certifiante pour la voir appara\xEEtre ici.");
    \u0275\u0275elementEnd()();
  }
}
function StudentCertificateComponent_div_94_div_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const f_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Formateur : ", f_r8.formateur_nom);
  }
}
function StudentCertificateComponent_div_94_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "div", 131);
    \u0275\u0275element(2, "i", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 133);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 134);
    \u0275\u0275template(6, StudentCertificateComponent_div_94_div_1_ng_container_6_Template, 2, 1, "ng-container", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 135)(8, "div", 136);
    \u0275\u0275element(9, "div", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 138);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 139);
    \u0275\u0275text(13, "Certificat disponible \xE0 100% + quiz final \u2265 70%");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r8 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(f_r8.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", f_r8.formateur_nom);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", (f_r8.progression ?? 0) + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r8.progression ?? 0, "%");
  }
}
function StudentCertificateComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275template(1, StudentCertificateComponent_div_94_div_1_Template, 14, 5, "div", 129);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.formationsEnCours);
  }
}
function StudentCertificateComponent_div_97_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 173);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" N\xB0 ", ctx_r0.selectedCert.code_unique, " ");
  }
}
function StudentCertificateComponent_div_97_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174)(1, "div", 175)(2, "div", 176);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 177);
    \u0275\u0275text(5, "Dur\xE9e totale");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.selectedCert.formation == null ? null : ctx_r0.selectedCert.formation.duree_totale, "h");
  }
}
function StudentCertificateComponent_div_97_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 178);
    \u0275\u0275element(1, "div", 179);
    \u0275\u0275elementStart(2, "div", 180);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 181);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.config.signataire_nom || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.config.signataire_role);
  }
}
function StudentCertificateComponent_div_97_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 178);
    \u0275\u0275element(1, "div", 179);
    \u0275\u0275elementStart(2, "div", 180);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 181);
    \u0275\u0275text(5, "Formateur");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getFormateurName(ctx_r0.selectedCert));
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.getAccentColor(ctx_r0.selectedCert));
  }
}
function StudentCertificateComponent_div_97_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 Valide jusqu'au ", ctx_r0.formatDate(ctx_r0.selectedCert.date_expiration), " ");
  }
}
function StudentCertificateComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 140);
    \u0275\u0275element(1, "div", 141);
    \u0275\u0275elementStart(2, "div", 142)(3, "div", 143);
    \u0275\u0275element(4, "i", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h5", 144);
    \u0275\u0275text(7, "Certificat de r\xE9ussite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 145);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 146);
    \u0275\u0275listener("click", function StudentCertificateComponent_div_97_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePreview());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "div", 147);
    \u0275\u0275elementStart(12, "div", 148)(13, "div", 149)(14, "div", 150)(15, "div", 151);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div")(18, "div", 152);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 153);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, StudentCertificateComponent_div_97_div_22_Template, 2, 1, "div", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 155);
    \u0275\u0275text(24, " CERTIFICAT DE R\xC9USSITE ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 156);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 157);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 158);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, StudentCertificateComponent_div_97_div_31_Template, 6, 1, "div", 159);
    \u0275\u0275elementStart(32, "div", 160);
    \u0275\u0275template(33, StudentCertificateComponent_div_97_div_33_Template, 6, 2, "div", 161)(34, StudentCertificateComponent_div_97_div_34_Template, 6, 3, "div", 161);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 162);
    \u0275\u0275text(36);
    \u0275\u0275template(37, StudentCertificateComponent_div_97_ng_container_37_Template, 2, 1, "ng-container", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 163)(39, "div", 164);
    \u0275\u0275element(40, "i", 165);
    \u0275\u0275elementStart(41, "div")(42, "div", 166);
    \u0275\u0275text(43, "Code unique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 167);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 164);
    \u0275\u0275element(47, "i", 168);
    \u0275\u0275elementStart(48, "div")(49, "div", 166);
    \u0275\u0275text(50, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 169);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(53, "div", 147);
    \u0275\u0275elementStart(54, "div", 170)(55, "button", 171);
    \u0275\u0275listener("click", function StudentCertificateComponent_div_97_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePreview());
    });
    \u0275\u0275text(56, "Fermer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 172);
    \u0275\u0275listener("click", function StudentCertificateComponent_div_97_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.downloadPdf(ctx_r0.selectedCert));
    });
    \u0275\u0275element(58, "i", 69);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.getAccentColor(ctx_r0.selectedCert));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r0.getAccentColor(ctx_r0.selectedCert) + "20")("color", ctx_r0.getAccentColor(ctx_r0.selectedCert));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("N\xB0 ", ctx_r0.selectedCert.code_unique);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", ctx_r0.config.bg_couleur);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r0.getAccentColor(ctx_r0.selectedCert));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.config.entreprise_nom || ctx_r0.userEntreprise || "E").slice(0, 1).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.config.entreprise_nom || ctx_r0.userEntreprise || "Entreprise");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.config.entreprise_sous_titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.config.show_numero);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.getAccentColor(ctx_r0.selectedCert) + "20")("color", ctx_r0.getAccentColor(ctx_r0.selectedCert));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getEmployeeName(ctx_r0.selectedCert));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.config.accroche);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.getAccentColor(ctx_r0.selectedCert));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedCert.formation == null ? null : ctx_r0.selectedCert.formation.titre, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.config.show_duree && (ctx_r0.selectedCert.formation == null ? null : ctx_r0.selectedCert.formation.duree_totale));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.config.signataire_nom || ctx_r0.config.signataire_role);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.config.show_formateur);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" D\xE9livr\xE9 le ", ctx_r0.formatDate(ctx_r0.selectedCert.date_delivrance), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.config.show_date_expiration && ctx_r0.selectedCert.date_expiration);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.selectedCert.code_unique);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("sp-valid", ctx_r0.selectedCert.statut === "valide")("sp-expired", ctx_r0.selectedCert.statut === "expir\xE9");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedCert.statut === "valide" ? "Valide" : ctx_r0.selectedCert.statut === "expir\xE9" ? "Expir\xE9" : "R\xE9voqu\xE9", " ");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("background", ctx_r0.getAccentColor(ctx_r0.selectedCert));
    \u0275\u0275property("disabled", ctx_r0.downloading);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.downloading ? "isax-refresh" : "isax-document-download");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.downloading ? "G\xE9n\xE9ration\u2026" : "T\xE9l\xE9charger PDF", " ");
  }
}
var StudentCertificateComponent = class _StudentCertificateComponent {
  certService;
  formationsService;
  auth;
  // ── tabs ──────────────────────────────────────────────────────────────────
  activeTab = "obtenus";
  // ── user ──────────────────────────────────────────────────────────────────
  userName = "";
  userEntreprise = "";
  // ── data ──────────────────────────────────────────────────────────────────
  loading = true;
  allCertificats = [];
  formationsEnCours = [];
  // ── filters ───────────────────────────────────────────────────────────────
  filterSearch = "";
  filterStatut = "";
  // '' | 'valide' | 'expiré'
  sortOrder = "recent";
  // ── config for PDF gen ────────────────────────────────────────────────────
  config = __spreadValues({}, DEFAULT_CERT_CONFIG);
  downloading = false;
  copiedId = null;
  selectedCert = null;
  previewModal;
  constructor(certService, formationsService, auth) {
    this.certService = certService;
    this.formationsService = formationsService;
    this.auth = auth;
  }
  ngOnInit() {
    const user = this.auth.getUser();
    this.userName = user ? `${user.prenom ?? ""} ${user.nom ?? ""}`.trim() || user.name || "" : "";
    this.userEntreprise = user?.entreprise?.nom ?? "";
    this.loadCertificats();
    this.loadFormationsEnCours();
    this.loadConfig();
  }
  // ── Loaders ───────────────────────────────────────────────────────────────
  loadCertificats() {
    this.loading = true;
    this.formationsService.getMyCertificates().pipe(catchError(() => of({ data: [] }))).subscribe((res) => {
      const raw = res?.data ?? res?.certificats ?? res ?? [];
      this.allCertificats = Array.isArray(raw) ? raw : [];
      this.loading = false;
    });
  }
  loadFormationsEnCours() {
    this.formationsService.getMesFormations().pipe(catchError(() => of({ formations: [] }))).subscribe((res) => {
      const all = res?.formations ?? [];
      this.formationsEnCours = all.filter((f) => {
        const p = f.progression ?? 0;
        return p < 100 && f.est_certifiante;
      }).slice(0, 6);
    });
  }
  loadConfig() {
    const user = this.auth.getUser();
    const eid = user?.entreprise_id;
    if (!eid)
      return;
    import("./chunk-MMGNGCIW.js").then(({ DEFAULT_CERT_CONFIG: DEFAULT_CERT_CONFIG2 }) => {
      if (user?.entreprise?.nom)
        this.config.entreprise_nom = user.entreprise.nom;
    });
  }
  // ── KPIs ──────────────────────────────────────────────────────────────────
  get nbObtenus() {
    return this.allCertificats.length;
  }
  get nbValides() {
    return this.allCertificats.filter((c) => c.statut === "valide").length;
  }
  get nbExpireBientot() {
    return this.allCertificats.filter((c) => this.isExpiringSoon(c)).length;
  }
  get scoreMoyen() {
    const scores = this.allCertificats.map((c) => parseFloat(c.score_final)).filter((n) => !isNaN(n));
    return scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }
  get nbObtenusCeMois() {
    const now = /* @__PURE__ */ new Date();
    return this.allCertificats.filter((c) => {
      const d = new Date(c.date_delivrance ?? c.created_at);
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }).length;
  }
  // ── Computed lists ────────────────────────────────────────────────────────
  get firstExpiring() {
    return this.allCertificats.filter((c) => this.isExpiringSoon(c)).sort((a, b) => new Date(a.date_expiration).getTime() - new Date(b.date_expiration).getTime())[0] ?? null;
  }
  get filteredCertificats() {
    let list = [...this.allCertificats];
    if (this.filterStatut === "valide")
      list = list.filter((c) => c.statut === "valide" && !this.isExpiringSoon(c));
    if (this.filterStatut === "expirant")
      list = list.filter((c) => this.isExpiringSoon(c));
    if (this.filterStatut === "expir\xE9")
      list = list.filter((c) => c.statut === "expir\xE9");
    if (this.filterSearch) {
      const s = this.filterSearch.toLowerCase();
      list = list.filter((c) => c.formation?.titre?.toLowerCase().includes(s) || c.code_unique?.toLowerCase().includes(s) || c.formateur?.name?.toLowerCase().includes(s));
    }
    if (this.sortOrder === "recent")
      list.sort((a, b) => new Date(b.date_delivrance ?? b.created_at).getTime() - new Date(a.date_delivrance ?? a.created_at).getTime());
    if (this.sortOrder === "score")
      list.sort((a, b) => parseFloat(b.score_final) - parseFloat(a.score_final));
    return list;
  }
  get historiqueList() {
    return [...this.allCertificats].sort((a, b) => new Date(b.date_delivrance ?? b.created_at).getTime() - new Date(a.date_delivrance ?? a.created_at).getTime());
  }
  // ── Helpers ───────────────────────────────────────────────────────────────
  isExpiringSoon(cert) {
    if (!cert.date_expiration || cert.statut === "expir\xE9")
      return false;
    const days = (new Date(cert.date_expiration).getTime() - Date.now()) / 864e5;
    return days > 0 && days <= 60;
  }
  daysUntilExpiry(cert) {
    if (!cert.date_expiration)
      return 0;
    return Math.round((new Date(cert.date_expiration).getTime() - Date.now()) / 864e5);
  }
  getCardStatus(cert) {
    if (cert.statut === "expir\xE9")
      return "expired";
    if (this.isExpiringSoon(cert))
      return "expiring";
    return "valid";
  }
  isNewCert(cert) {
    const days = (Date.now() - new Date(cert.date_delivrance ?? cert.created_at).getTime()) / 864e5;
    return days <= 30;
  }
  getScoreColor(cert) {
    const n = parseFloat(cert.score_final);
    if (isNaN(n))
      return "#6b7280";
    if (n >= 80)
      return "#059669";
    if (n >= 60)
      return "#854F0B";
    return "#A32D2D";
  }
  accentColors = [
    "#1D9E75",
    "#534AB7",
    "#185FA5",
    "#EF9F27",
    "#C0392B",
    "#2980B9"
  ];
  getAccentColor(cert) {
    if (this.isExpiringSoon(cert))
      return "#EF9F27";
    if (cert.statut === "expir\xE9")
      return "#F09595";
    return this.accentColors[(cert.id ?? 0) % this.accentColors.length];
  }
  iconBgMap = [
    { bg: "#E1F5EE", color: "#0F6E56", icon: "isax-shield-tick" },
    { bg: "#EEEDFE", color: "#534AB7", icon: "isax-award" },
    { bg: "#E6F1FB", color: "#185FA5", icon: "isax-people" },
    { bg: "#FAEEDA", color: "#854F0B", icon: "isax-chart" },
    { bg: "#FCEBEB", color: "#A32D2D", icon: "isax-medal" },
    { bg: "#EAF3DE", color: "#3B6D11", icon: "isax-tick-circle" }
  ];
  getIconStyle(cert) {
    return this.iconBgMap[(cert.id ?? 0) % this.iconBgMap.length];
  }
  getFormateurName(cert) {
    const f = cert.formateur;
    if (!f)
      return "\u2014";
    return [f.prenom, f.nom].filter(Boolean).join(" ") || f.name || "\u2014";
  }
  getEmployeeName(cert) {
    const e = cert.employe;
    if (!e)
      return "\u2014";
    return [e.prenom, e.nom].filter(Boolean).join(" ") || e.name || "\u2014";
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "\u2014";
    return new Date(dateStr).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" });
  }
  copyCode(cert) {
    if (cert.code_unique) {
      navigator.clipboard.writeText(cert.code_unique).catch(() => {
      });
      this.copiedId = cert.id;
      setTimeout(() => this.copiedId = null, 2e3);
    }
  }
  downloadPdf(cert) {
    if (this.downloading)
      return;
    this.downloading = true;
    this.certService.downloadPdf(cert, this.config).finally(() => this.downloading = false);
  }
  setFilter(f) {
    this.filterStatut = this.filterStatut === f ? "" : f;
  }
  setSort(s) {
    this.sortOrder = s;
  }
  openPreview(cert) {
    this.selectedCert = cert;
    setTimeout(() => {
      const el = document.getElementById("sc_cert_preview_modal");
      if (el) {
        this.previewModal = new bootstrap.Modal(el);
        this.previewModal.show();
      }
    }, 50);
  }
  closePreview() {
    this.previewModal?.hide();
    this.selectedCert = null;
  }
  static \u0275fac = function StudentCertificateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentCertificateComponent)(\u0275\u0275directiveInject(CertificatService), \u0275\u0275directiveInject(FormationsService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentCertificateComponent, selectors: [["app-student-certificate"]], decls: 98, vars: 47, consts: [[1, "ph"], [1, "ph-icon"], [1, "isax", "isax-award"], [1, "ph-info"], [1, "ph-title"], [1, "ph-sub"], [4, "ngIf"], [1, "ph-acts"], [1, "btn-o", 3, "click"], [1, "isax", "isax-refresh"], [1, "kpi-row"], [1, "kpi"], [1, "kpi-icon", "ki-warm"], [1, "kpi-body"], [1, "kpi-val"], [1, "kpi-lbl"], ["class", "kpi-delta du", 4, "ngIf"], ["class", "kpi-delta dn", 4, "ngIf"], [1, "kpi-icon", "ki-green"], [1, "isax", "isax-tick-circle"], [1, "kpi-delta", "dn"], [1, "kpi-icon", "ki-red"], [1, "isax", "isax-clock"], ["class", "kpi-delta dd", 4, "ngIf"], [1, "kpi-icon", "ki-blue"], [1, "isax", "isax-chart"], [1, "tab-bar"], [1, "tab", 3, "click"], [1, "isax", "isax-calendar-tick"], [1, "isax", "isax-refresh-circle"], [1, "tv"], ["class", "expire-banner", 4, "ngIf"], [1, "toolbar"], [1, "search-box"], [1, "isax", "isax-search-normal-1"], ["type", "text", "placeholder", "Rechercher...", 3, "ngModelChange", "ngModel"], [1, "fchip", 3, "click"], [1, "ml"], [1, "sort-btn", 3, "click"], [1, "isax", "isax-calendar-1"], ["class", "sc-loading", 4, "ngIf"], ["class", "sc-empty", 4, "ngIf"], ["class", "cert-grid", 4, "ngIf"], ["class", "timeline", 4, "ngIf"], ["class", "encours-hint", 4, "ngIf"], ["class", "progress-grid", 4, "ngIf"], ["id", "sc_cert_preview_modal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "sc-modal-dialog"], ["class", "modal-content sc-modal-content", 4, "ngIf"], [1, "kpi-delta", "du"], [1, "kpi-delta", "dd"], [1, "expire-banner"], [1, "isax", "isax-warning-2", "eb-icon"], [1, "eb-text"], [1, "eb-title"], [1, "eb-sub"], [1, "eb-btn"], [1, "sc-loading"], [1, "sc-loading__spinner"], [1, "sc-empty"], [1, "sc-empty__icon"], [1, "sc-empty__title"], [1, "cert-grid"], ["class", "cert-card", 3, "expiring", "expired", 4, "ngFor", "ngForOf"], [1, "cert-card"], [1, "cc-accent"], [1, "cc-body"], [1, "cc-top"], [1, "cc-icon"], [1, "isax", 3, "ngClass"], [1, "cc-badges"], ["class", "status-pill sp-valid", 4, "ngIf"], ["class", "status-pill sp-expire", 4, "ngIf"], ["class", "status-pill sp-expired", 4, "ngIf"], ["class", "new-badge", 4, "ngIf"], [1, "cc-title"], [1, "cc-formateur"], [1, "isax", "isax-user"], [1, "cc-score-row"], [1, "cc-score-item"], [1, "csi-v"], [1, "csi-l"], ["class", "cc-verify", 4, "ngIf"], [1, "cc-dates"], [1, "cc-date-item"], [1, "cdi-lbl"], [1, "cdi-val"], [1, "cc-date-item", 2, "text-align", "right"], [1, "cc-footer"], [1, "ccf-btn", "ccf-dl", 3, "click", "disabled"], [1, "isax", "isax-document-download"], [1, "ccf-btn", "ccf-share"], [1, "isax", "isax-share"], ["class", "ccf-btn ccf-renew", 4, "ngIf"], ["class", "ccf-btn ccf-view", 3, "click", 4, "ngIf"], [1, "status-pill", "sp-valid"], [1, "status-pill", "sp-expire"], [1, "status-pill", "sp-expired"], [1, "new-badge"], [1, "cc-verify"], [1, "isax", "isax-scan-barcode", "ccv-icon"], [1, "ccv-text"], [1, "ccv-id"], [1, "ccv-copy", 3, "click", "title"], [1, "isax", "isax-warning-2", "ccv-icon", 2, "color", "#854F0B"], [1, "ccv-id", 2, "color", "#854F0B"], [1, "ccv-copy", 2, "color", "#854F0B"], [1, "ccf-btn", "ccf-renew"], [1, "ccf-btn", "ccf-view", 3, "click"], [1, "isax", "isax-eye"], [1, "timeline"], ["class", "tl-item", 4, "ngFor", "ngForOf"], [1, "tl-item"], [1, "tl-left"], [1, "tl-dot"], ["class", "tl-line", 4, "ngIf"], [1, "tl-body"], [1, "tl-date"], [1, "tl-card"], [1, "tl-cert-icon"], [1, "tl-info"], [1, "tl-name"], [1, "tl-meta"], ["class", "tl-duration", 4, "ngIf"], [1, "tl-line"], [1, "tl-expire-warn"], [1, "tl-duration"], [1, "encours-hint"], [1, "progress-grid"], ["class", "prog-card", 4, "ngFor", "ngForOf"], [1, "prog-card"], [1, "pc-icon"], [1, "isax", "isax-teacher", "pc-icon__i"], [1, "pc-title"], [1, "pc-sub"], [1, "pc-prog"], [1, "pc-prog-bar"], [1, "pc-prog-fill", "pc-prog-fill--green"], [1, "pc-prog-pct", "pc-prog-pct--green"], [1, "pc-hint"], [1, "modal-content", "sc-modal-content"], [1, "sc-cert-accent"], [1, "sc-modal-header"], [1, "sc-modal-icon"], [1, "sc-modal-title"], [1, "sc-modal-sub"], ["type", "button", 1, "btn-close", "ms-auto", 3, "click"], [1, "sc-modal-divider"], [1, "sc-modal-body"], [1, "sc-cert-preview"], [1, "sc-cert-logo-row"], [1, "sc-cert-logo-mark"], [1, "sc-cert-logo-name"], [1, "sc-cert-logo-sub"], ["class", "sc-cert-num ms-auto", 4, "ngIf"], [1, "sc-cert-badge-label"], [1, "sc-cert-employee"], [1, "sc-cert-accroche"], [1, "sc-cert-formation"], ["class", "sc-cert-scores", 4, "ngIf"], [1, "sc-cert-sigs"], ["class", "sc-cert-sig", 4, "ngIf"], [1, "sc-cert-validity"], [1, "sc-detail-row"], [1, "sc-detail-block"], [1, "isax", "isax-scan-barcode", "sc-detail-block__icon"], [1, "sc-detail-label"], [1, "sc-detail-value", "sc-detail-mono"], [1, "isax", "isax-tick-circle", "sc-detail-block__icon"], [1, "status-pill"], [1, "sc-modal-footer"], ["type", "button", 1, "sc-btn-cancel", 3, "click"], ["type", "button", 1, "sc-btn-download", 3, "click", "disabled"], [1, "sc-cert-num", "ms-auto"], [1, "sc-cert-scores"], [1, "sc-cert-score-item"], [1, "sc-cert-score-val"], [1, "sc-cert-score-lbl"], [1, "sc-cert-sig"], [1, "sc-cert-sig-line"], [1, "sc-cert-sig-name"], [1, "sc-cert-sig-role"]], template: function StudentCertificateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5, "Mes certificats");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275text(7);
      \u0275\u0275template(8, StudentCertificateComponent_ng_container_8_Template, 2, 1, "ng-container", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7)(11, "button", 8);
      \u0275\u0275listener("click", function StudentCertificateComponent_Template_button_click_11_listener() {
        return ctx.loadCertificats();
      });
      \u0275\u0275element(12, "i", 9);
      \u0275\u0275text(13, " Actualiser ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "div", 12);
      \u0275\u0275element(17, "i", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 13)(19, "div", 14);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 15);
      \u0275\u0275text(22, "Certificats obtenus");
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, StudentCertificateComponent_div_23_Template, 2, 1, "div", 16)(24, StudentCertificateComponent_div_24_Template, 2, 0, "div", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 11)(26, "div", 18);
      \u0275\u0275element(27, "i", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 13)(29, "div", 14);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 15);
      \u0275\u0275text(32, "Valides");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 20);
      \u0275\u0275text(34, "Toujours actifs");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 11)(36, "div", 21);
      \u0275\u0275element(37, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 13)(39, "div", 14);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 15);
      \u0275\u0275text(42, "Expire bient\xF4t");
      \u0275\u0275elementEnd();
      \u0275\u0275template(43, StudentCertificateComponent_div_43_Template, 2, 1, "div", 23)(44, StudentCertificateComponent_div_44_Template, 2, 0, "div", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 11)(46, "div", 24);
      \u0275\u0275element(47, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 13)(49, "div", 14);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 15);
      \u0275\u0275text(52, "Score moyen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 20);
      \u0275\u0275text(54, "Sur tous les certificats");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "div", 26)(56, "div", 27);
      \u0275\u0275listener("click", function StudentCertificateComponent_Template_div_click_56_listener() {
        return ctx.activeTab = "obtenus";
      });
      \u0275\u0275element(57, "i", 2);
      \u0275\u0275text(58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 27);
      \u0275\u0275listener("click", function StudentCertificateComponent_Template_div_click_59_listener() {
        return ctx.activeTab = "historique";
      });
      \u0275\u0275element(60, "i", 28);
      \u0275\u0275text(61, " Historique ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 27);
      \u0275\u0275listener("click", function StudentCertificateComponent_Template_div_click_62_listener() {
        return ctx.activeTab = "encours";
      });
      \u0275\u0275element(63, "i", 29);
      \u0275\u0275text(64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 30);
      \u0275\u0275template(66, StudentCertificateComponent_div_66_Template, 9, 3, "div", 31);
      \u0275\u0275elementStart(67, "div", 32)(68, "div", 33);
      \u0275\u0275element(69, "i", 34);
      \u0275\u0275elementStart(70, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function StudentCertificateComponent_Template_input_ngModelChange_70_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterSearch, $event) || (ctx.filterSearch = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 36);
      \u0275\u0275listener("click", function StudentCertificateComponent_Template_div_click_71_listener() {
        return ctx.setFilter("valide");
      });
      \u0275\u0275element(72, "i", 19);
      \u0275\u0275text(73, " Valides ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 36);
      \u0275\u0275listener("click", function StudentCertificateComponent_Template_div_click_74_listener() {
        return ctx.setFilter("expirant");
      });
      \u0275\u0275element(75, "i", 22);
      \u0275\u0275text(76, " Expirant ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(77, "div", 37);
      \u0275\u0275elementStart(78, "div", 38);
      \u0275\u0275listener("click", function StudentCertificateComponent_Template_div_click_78_listener() {
        return ctx.setSort("recent");
      });
      \u0275\u0275element(79, "i", 39);
      \u0275\u0275text(80, " Plus r\xE9cent ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 38);
      \u0275\u0275listener("click", function StudentCertificateComponent_Template_div_click_81_listener() {
        return ctx.setSort("score");
      });
      \u0275\u0275element(82, "i", 25);
      \u0275\u0275text(83, " Meilleur score ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(84, StudentCertificateComponent_div_84_Template, 4, 0, "div", 40)(85, StudentCertificateComponent_div_85_Template, 7, 0, "div", 41)(86, StudentCertificateComponent_div_86_Template, 2, 1, "div", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 30);
      \u0275\u0275template(88, StudentCertificateComponent_div_88_Template, 4, 0, "div", 40)(89, StudentCertificateComponent_div_89_Template, 7, 0, "div", 41)(90, StudentCertificateComponent_div_90_Template, 2, 1, "div", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 30);
      \u0275\u0275template(92, StudentCertificateComponent_p_92_Template, 2, 0, "p", 44)(93, StudentCertificateComponent_div_93_Template, 7, 0, "div", 41)(94, StudentCertificateComponent_div_94_Template, 2, 1, "div", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 46)(96, "div", 47);
      \u0275\u0275template(97, StudentCertificateComponent_div_97_Template, 60, 40, "div", 48);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.userName);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.userEntreprise);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate3(" \xB7 ", ctx.nbObtenus, " certificat", ctx.nbObtenus > 1 ? "s" : "", " obtenu", ctx.nbObtenus > 1 ? "s" : "", " ");
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.nbObtenus);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.nbObtenusCeMois > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.nbObtenusCeMois === 0);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.nbValides);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.nbExpireBientot);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.firstExpiring);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.firstExpiring);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.scoreMoyen, "%");
      \u0275\u0275advance(6);
      \u0275\u0275classProp("active", ctx.activeTab === "obtenus");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Obtenus (", ctx.nbObtenus, ") ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "historique");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "encours");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" En cours (", ctx.formationsEnCours.length, ") ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "obtenus");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.firstExpiring);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterSearch);
      \u0275\u0275advance();
      \u0275\u0275classProp("on", ctx.filterStatut === "valide");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("on", ctx.filterStatut === "expirant");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.sortOrder === "recent");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.sortOrder === "score");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredCertificats.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredCertificats.length > 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "historique");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.historiqueList.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.historiqueList.length > 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "encours");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.formationsEnCours.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.formationsEnCours.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.formationsEnCours.length > 0);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.selectedCert);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ph[_ngcontent-%COMP%] {\n  background: #fff;\n  border-bottom: 0.5px solid #e5e7eb;\n  padding: 14px 20px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 0;\n}\n.ph-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #FAEEDA;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  color: #854F0B;\n  flex-shrink: 0;\n}\n.ph-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.ph-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: #1a1a2e;\n}\n.ph-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.ph-acts[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-o[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 13px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #6b7280;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-o[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-o[_ngcontent-%COMP%]:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  padding: 14px 0;\n}\n@media (max-width: 768px) {\n  .kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.kpi-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.ki-warm[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ki-green[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.ki-red[_ngcontent-%COMP%] {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.ki-blue[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.kpi-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.kpi-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 500;\n  color: #1a1a2e;\n}\n.kpi-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 1px;\n}\n.kpi-delta[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-top: 2px;\n}\n.du[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.dd[_ngcontent-%COMP%] {\n  color: #A32D2D;\n}\n.dn[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.tab-bar[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 0.5px solid #e5e7eb;\n  background: #fff;\n  margin-bottom: 0;\n}\n.tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 14px;\n  font-size: 13px;\n  cursor: pointer;\n  color: #6b7280;\n  border-bottom: 2px solid transparent;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: #854F0B;\n  border-bottom-color: #854F0B;\n  font-weight: 500;\n}\n.tv[_ngcontent-%COMP%] {\n  display: none;\n  padding: 16px 0;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.tv.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 6px 10px;\n  width: 200px;\n}\n.search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 12px;\n  color: #1a1a2e;\n  width: 100%;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #6b7280;\n}\n.fchip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.fchip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.fchip.on[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  border-color: #EF9F27;\n  color: #633806;\n  font-weight: 500;\n}\n.fchip[_ngcontent-%COMP%]:hover:not(.on) {\n  border-color: #069b8f;\n  color: #069b8f;\n}\n.ml[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.sort-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.sort-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.sort-btn.active[_ngcontent-%COMP%], \n.sort-btn[_ngcontent-%COMP%]:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n}\n.expire-banner[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  border: 0.5px solid #EF9F27;\n  border-radius: 8px;\n  padding: 11px 14px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.eb-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #854F0B;\n  flex-shrink: 0;\n}\n.eb-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.eb-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #633806;\n}\n.eb-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #854F0B;\n  margin-top: 2px;\n}\n.eb-btn[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 0.5px solid #854F0B;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #633806;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  font-weight: 500;\n}\n.eb-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(133, 79, 11, 0.08);\n}\n.cert-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n@media (max-width: 768px) {\n  .cert-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cert-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  transition: border-color 0.15s, box-shadow 0.15s;\n  cursor: pointer;\n}\n.cert-card[_ngcontent-%COMP%]:hover {\n  border-color: #c0c4cc;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n}\n.cert-card.expiring[_ngcontent-%COMP%] {\n  border-color: #EF9F27;\n}\n.cert-card.expired[_ngcontent-%COMP%] {\n  border-color: #F09595;\n  opacity: 0.8;\n}\n.cc-accent[_ngcontent-%COMP%] {\n  height: 5px;\n}\n.cc-body[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n}\n.cc-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.cc-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.cc-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.cc-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n}\n.status-pill[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.sp-valid[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.sp-expire[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.sp-expired[_ngcontent-%COMP%] {\n  background: #FCEBEB;\n  color: #791F1F;\n}\n.new-badge[_ngcontent-%COMP%] {\n  font-size: 9px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  color: #0C447C;\n  border: 0.5px solid #85B7EB;\n}\n.cc-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #1a1a2e;\n  margin-bottom: 4px;\n  line-height: 1.3;\n}\n.cc-formateur[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 10px;\n}\n.cc-formateur[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.cc-score-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.cc-score-item[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 8px;\n  text-align: center;\n}\n.csi-v[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #1a1a2e;\n}\n.csi-l[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6b7280;\n  margin-top: 1px;\n}\n.cc-verify[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 10px;\n  border-radius: 8px;\n  background: #f9fafb;\n  margin-bottom: 10px;\n}\n.ccv-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.ccv-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n}\n.ccv-id[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  font-family: monospace;\n}\n.ccv-copy[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  margin-left: auto;\n  cursor: pointer;\n  transition: color 0.15s;\n}\n.ccv-copy[_ngcontent-%COMP%]:hover {\n  color: #1a1a2e;\n}\n.ccv-copy[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.cc-verify--warn[_ngcontent-%COMP%]   .ccv-icon[_ngcontent-%COMP%], \n.cc-verify--warn[_ngcontent-%COMP%]   .ccv-id[_ngcontent-%COMP%], \n.cc-verify--warn[_ngcontent-%COMP%]   .ccv-copy[_ngcontent-%COMP%] {\n  color: #854F0B;\n}\n.cc-dates[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.cc-date-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.cdi-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6b7280;\n}\n.cdi-val[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1a1a2e;\n}\n.cdi-val.warn[_ngcontent-%COMP%] {\n  color: #854F0B;\n}\n.cdi-val.danger[_ngcontent-%COMP%] {\n  color: #A32D2D;\n}\n.cc-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.ccf-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  padding: 8px;\n  border-radius: 8px;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.12s;\n  border: none;\n}\n.ccf-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ccf-dl[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n  border: 0.5px solid #EF9F27;\n  font-weight: 500;\n}\n.ccf-dl[_ngcontent-%COMP%]:hover {\n  background: #F5D9B8;\n}\n.ccf-share[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #6b7280;\n  border: 0.5px solid #e5e7eb;\n}\n.ccf-share[_ngcontent-%COMP%]:hover {\n  background: #eee;\n}\n.ccf-renew[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n  border: 0.5px solid #85B7EB;\n  font-weight: 500;\n}\n.ccf-renew[_ngcontent-%COMP%]:hover {\n  background: #cde3f7;\n}\n.ccf-view[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n  border: 0.5px solid #85B7EB;\n}\n.ccf-view[_ngcontent-%COMP%]:hover {\n  background: #cde3f7;\n}\n.ccf-view[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.timeline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  max-width: 640px;\n}\n.tl-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  padding: 12px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.tl-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.tl-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 40px;\n  flex-shrink: 0;\n}\n.tl-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.tl-line[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 1px;\n  background: #e5e7eb;\n  margin-top: 4px;\n}\n.tl-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.tl-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #6b7280;\n  margin-bottom: 4px;\n}\n.tl-card[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.tl-cert-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.tl-cert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.tl-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.tl-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1a1a2e;\n}\n.tl-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.tl-expire-warn[_ngcontent-%COMP%] {\n  color: #854F0B;\n}\n.tl-duration[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #6b7280;\n}\n.encours-hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin-bottom: 12px;\n}\n.progress-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n@media (max-width: 768px) {\n  .progress-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.prog-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  opacity: 0.8;\n}\n.pc-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f9fafb;\n  font-size: 18px;\n}\n.pc-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1a1a2e;\n}\n.pc-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n}\n.pc-prog[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pc-prog-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 5px;\n  background: #f9fafb;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.pc-prog-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 5px;\n  transition: width 0.4s ease;\n}\n.pc-prog-fill--green[_ngcontent-%COMP%] {\n  background: #069b8f;\n}\n.pc-prog-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n}\n.pc-prog-pct--green[_ngcontent-%COMP%] {\n  color: #069b8f;\n}\n.pc-icon__i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #6b7280;\n}\n.pc-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  text-align: center;\n}\n.sc-modal-dialog[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.sc-modal-content[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.14);\n}\n.sc-cert-accent[_ngcontent-%COMP%] {\n  height: 5px;\n}\n.sc-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px 14px;\n}\n.sc-modal-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.sc-modal-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0;\n}\n.sc-modal-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  margin: 2px 0 0;\n  font-family: monospace;\n}\n.sc-modal-divider[_ngcontent-%COMP%] {\n  height: 0.5px;\n  background: #e5e7eb;\n}\n.sc-modal-body[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n}\n.sc-cert-preview[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 14px;\n  text-align: center;\n}\n.sc-cert-logo-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 14px;\n  text-align: left;\n}\n.sc-cert-logo-mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n}\n.sc-cert-logo-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.sc-cert-logo-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6b7280;\n}\n.sc-cert-num[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6b7280;\n  font-family: monospace;\n  letter-spacing: 1px;\n}\n.sc-cert-badge-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  padding: 3px 14px;\n  border-radius: 20px;\n  margin-bottom: 10px;\n}\n.sc-cert-employee[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin-bottom: 6px;\n}\n.sc-cert-accroche[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin-bottom: 4px;\n}\n.sc-cert-formation[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n.sc-cert-scores[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 12px;\n}\n.sc-cert-score-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.sc-cert-score-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.sc-cert-score-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6b7280;\n  letter-spacing: 0.5px;\n}\n.sc-cert-score-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: #e5e7eb;\n}\n.sc-cert-sigs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 40px;\n  margin-bottom: 12px;\n}\n.sc-cert-sig[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 120px;\n}\n.sc-cert-sig-line[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #aaa;\n  margin-bottom: 6px;\n}\n.sc-cert-sig-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.sc-cert-sig-role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6b7280;\n}\n.sc-cert-validity[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6b7280;\n  border-top: 0.5px solid #e5e7eb;\n  padding-top: 10px;\n  margin-top: 8px;\n}\n.sc-detail-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.sc-detail-block[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.sc-detail-block__icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.sc-detail-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6b7280;\n}\n.sc-detail-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1a1a2e;\n}\n.sc-detail-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 12px;\n}\n.sc-modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 12px 20px;\n}\n.sc-btn-cancel[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #6b7280;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.sc-btn-cancel[_ngcontent-%COMP%]:hover {\n  border-color: #aaa;\n  color: #1a1a2e;\n}\n.sc-btn-download[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #fff;\n  cursor: pointer;\n  transition: filter 0.15s;\n}\n.sc-btn-download[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.9);\n}\n.sc-btn-download[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.sc-btn-download[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.sc-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 0;\n  color: #6b7280;\n}\n.sc-loading__spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n.sc-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  font-size: 13px;\n}\n.sc-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 0;\n  text-align: center;\n}\n.sc-empty__icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #FAEEDA;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.sc-empty__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #854F0B;\n}\n.sc-empty__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin-bottom: 8px;\n}\n.sc-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n/*# sourceMappingURL=student-certificate.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentCertificateComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-student-certificate", imports: [CommonModule, FormsModule], template: `<!-- \u2550\u2550 PAGE HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="ph">
  <div class="ph-icon"><i class="isax isax-award"></i></div>
  <div class="ph-info">
    <div class="ph-title">Mes certificats</div>
    <div class="ph-sub">
      {{ userName }}<ng-container *ngIf="userEntreprise"> \xB7 {{ userEntreprise }}</ng-container>
      \xB7 {{ nbObtenus }} certificat{{ nbObtenus > 1 ? 's' : '' }} obtenu{{ nbObtenus > 1 ? 's' : '' }}
    </div>
  </div>
  <div class="ph-acts">
    <button class="btn-o" (click)="loadCertificats()">
      <i class="isax isax-refresh"></i> Actualiser
    </button>
  </div>
</div>

<!-- \u2550\u2550 KPIs \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="kpi-row">
  <div class="kpi">
    <div class="kpi-icon ki-warm"><i class="isax isax-award"></i></div>
    <div class="kpi-body">
      <div class="kpi-val">{{ nbObtenus }}</div>
      <div class="kpi-lbl">Certificats obtenus</div>
      <div class="kpi-delta du" *ngIf="nbObtenusCeMois > 0">\u2191 +{{ nbObtenusCeMois }} ce mois</div>
      <div class="kpi-delta dn" *ngIf="nbObtenusCeMois === 0">Aucun ce mois</div>
    </div>
  </div>
  <div class="kpi">
    <div class="kpi-icon ki-green"><i class="isax isax-tick-circle"></i></div>
    <div class="kpi-body">
      <div class="kpi-val">{{ nbValides }}</div>
      <div class="kpi-lbl">Valides</div>
      <div class="kpi-delta dn">Toujours actifs</div>
    </div>
  </div>
  <div class="kpi">
    <div class="kpi-icon ki-red"><i class="isax isax-clock"></i></div>
    <div class="kpi-body">
      <div class="kpi-val">{{ nbExpireBientot }}</div>
      <div class="kpi-lbl">Expire bient\xF4t</div>
      <div class="kpi-delta dd" *ngIf="firstExpiring">
        Dans {{ daysUntilExpiry(firstExpiring) }} jours
      </div>
      <div class="kpi-delta dn" *ngIf="!firstExpiring">Aucun</div>
    </div>
  </div>
  <div class="kpi">
    <div class="kpi-icon ki-blue"><i class="isax isax-chart"></i></div>
    <div class="kpi-body">
      <div class="kpi-val">{{ scoreMoyen }}%</div>
      <div class="kpi-lbl">Score moyen</div>
      <div class="kpi-delta dn">Sur tous les certificats</div>
    </div>
  </div>
</div>

<!-- \u2550\u2550 TABS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="tab-bar">
  <div class="tab" [class.active]="activeTab === 'obtenus'" (click)="activeTab = 'obtenus'">
    <i class="isax isax-award"></i> Obtenus ({{ nbObtenus }})
  </div>
  <div class="tab" [class.active]="activeTab === 'historique'" (click)="activeTab = 'historique'">
    <i class="isax isax-calendar-tick"></i> Historique
  </div>
  <div class="tab" [class.active]="activeTab === 'encours'" (click)="activeTab = 'encours'">
    <i class="isax isax-refresh-circle"></i> En cours ({{ formationsEnCours.length }})
  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     TAB \u2014 OBTENUS
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="tv" [class.active]="activeTab === 'obtenus'">

  <!-- Expire banner -->
  <div class="expire-banner" *ngIf="firstExpiring">
    <i class="isax isax-warning-2 eb-icon"></i>
    <div class="eb-text">
      <div class="eb-title">
        {{ firstExpiring.formation?.titre }} \u2014 expire dans {{ daysUntilExpiry(firstExpiring) }} jours
      </div>
      <div class="eb-sub">
        Renouvelez votre certification avant le {{ formatDate(firstExpiring.date_expiration) }} pour conserver vos droits.
      </div>
    </div>
    <button class="eb-btn">Renouveler \u2192</button>
  </div>

  <!-- Toolbar -->
  <div class="toolbar">
    <div class="search-box">
      <i class="isax isax-search-normal-1"></i>
      <input type="text" [(ngModel)]="filterSearch" placeholder="Rechercher...">
    </div>
    <div class="fchip" [class.on]="filterStatut === 'valide'"   (click)="setFilter('valide')">
      <i class="isax isax-tick-circle"></i> Valides
    </div>
    <div class="fchip" [class.on]="filterStatut === 'expirant'" (click)="setFilter('expirant')">
      <i class="isax isax-clock"></i> Expirant
    </div>
    <div class="ml"></div>
    <div class="sort-btn" [class.active]="sortOrder === 'recent'" (click)="setSort('recent')">
      <i class="isax isax-calendar-1"></i> Plus r\xE9cent
    </div>
    <div class="sort-btn" [class.active]="sortOrder === 'score'" (click)="setSort('score')">
      <i class="isax isax-chart"></i> Meilleur score
    </div>
  </div>

  <!-- Loading -->
  <div class="sc-loading" *ngIf="loading">
    <div class="sc-loading__spinner"></div>
    <p>Chargement de vos certificats...</p>
  </div>

  <!-- Empty -->
  <div class="sc-empty" *ngIf="!loading && filteredCertificats.length === 0">
    <div class="sc-empty__icon"><i class="isax isax-award"></i></div>
    <h5 class="sc-empty__title">Aucun certificat trouv\xE9</h5>
    <p>Vos certificats obtenus appara\xEEtront ici.</p>
  </div>

  <!-- Grid -->
  <div class="cert-grid" *ngIf="!loading && filteredCertificats.length > 0">
    <div class="cert-card"
         *ngFor="let cert of filteredCertificats"
         [class.expiring]="getCardStatus(cert) === 'expiring'"
         [class.expired]="getCardStatus(cert) === 'expired'">

      <!-- accent stripe -->
      <div class="cc-accent" [style.background]="getAccentColor(cert)"></div>

      <div class="cc-body">
        <!-- top row: icon + badges -->
        <div class="cc-top">
          <div class="cc-icon"
               [style.background]="getIconStyle(cert).bg">
            <i class="isax" [ngClass]="getIconStyle(cert).icon" [style.color]="getIconStyle(cert).color"></i>
          </div>
          <div class="cc-badges">
            <span class="status-pill sp-valid"    *ngIf="getCardStatus(cert) === 'valid'">Valide</span>
            <span class="status-pill sp-expire"   *ngIf="getCardStatus(cert) === 'expiring'">Expire bient\xF4t</span>
            <span class="status-pill sp-expired"  *ngIf="getCardStatus(cert) === 'expired'">Expir\xE9</span>
            <span class="new-badge" *ngIf="isNewCert(cert)">R\xE9cent</span>
          </div>
        </div>

        <!-- title -->
        <div class="cc-title">{{ cert.formation?.titre ?? '\u2014' }}</div>

        <!-- formateur -->
        <div class="cc-formateur">
          <i class="isax isax-user"></i>
          {{ getFormateurName(cert) }}<ng-container *ngIf="userEntreprise"> \xB7 {{ userEntreprise }}</ng-container>
        </div>

        <!-- scores -->
        <div class="cc-score-row">
          <div class="cc-score-item">
            <div class="csi-v">{{ cert.formation?.duree_totale ? cert.formation.duree_totale + 'h' : '\u2014' }}</div>
            <div class="csi-l">Dur\xE9e</div>
          </div>
          <div class="cc-score-item">
            <div class="csi-v">{{ cert.formation?.niveau || '\u2014' }}</div>
            <div class="csi-l">Niveau</div>
          </div>
        </div>

        <!-- verify row -->
        <div class="cc-verify" *ngIf="getCardStatus(cert) !== 'expiring'">
          <i class="isax isax-scan-barcode ccv-icon" [style.color]="getIconStyle(cert).color"></i>
          <span class="ccv-text">ID :</span>
          <span class="ccv-id" [style.color]="getIconStyle(cert).color">{{ cert.code_unique }}</span>
          <span class="ccv-copy" (click)="copyCode(cert)" [title]="copiedId === cert.id ? 'Copi\xE9 !' : 'Copier'">
            <i class="isax" [ngClass]="copiedId === cert.id ? 'isax-tick-circle' : 'isax-copy'"></i>
          </span>
        </div>

        <!-- expiring: expire soon row -->
        <div class="cc-verify" *ngIf="getCardStatus(cert) === 'expiring'">
          <i class="isax isax-warning-2 ccv-icon" style="color:#854F0B;"></i>
          <span class="ccv-text">Expire dans</span>
          <span class="ccv-id" style="color:#854F0B;">{{ daysUntilExpiry(cert) }} jours</span>
          <span class="ccv-copy" style="color:#854F0B;">Renouveler \u2192</span>
        </div>

        <!-- dates -->
        <div class="cc-dates">
          <div class="cc-date-item">
            <div class="cdi-lbl">D\xE9livr\xE9 le</div>
            <div class="cdi-val">{{ formatDate(cert.date_delivrance) }}</div>
          </div>
          <div class="cc-date-item" style="text-align:right;">
            <div class="cdi-lbl">Expire le</div>
            <div class="cdi-val" [class.warn]="getCardStatus(cert) === 'expiring'" [class.danger]="getCardStatus(cert) === 'expired'">
              {{ cert.date_expiration ? formatDate(cert.date_expiration) : 'Illimit\xE9' }}
            </div>
          </div>
        </div>

        <!-- footer buttons -->
        <div class="cc-footer">
          <button class="ccf-btn ccf-dl" (click)="downloadPdf(cert)" [disabled]="downloading">
            <i class="isax isax-document-download"></i> PDF
          </button>
          <button class="ccf-btn ccf-share">
            <i class="isax isax-share"></i> Partager
          </button>
          <button class="ccf-btn ccf-renew" *ngIf="getCardStatus(cert) === 'expiring'">
            <i class="isax isax-refresh"></i> Renouveler
          </button>
          <button class="ccf-btn ccf-view" *ngIf="getCardStatus(cert) !== 'expiring'" (click)="openPreview(cert)">
            <i class="isax isax-eye"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     TAB \u2014 HISTORIQUE
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="tv" [class.active]="activeTab === 'historique'">

  <div class="sc-loading" *ngIf="loading">
    <div class="sc-loading__spinner"></div>
    <p>Chargement...</p>
  </div>

  <div class="sc-empty" *ngIf="!loading && historiqueList.length === 0">
    <div class="sc-empty__icon"><i class="isax isax-calendar-tick"></i></div>
    <h5 class="sc-empty__title">Aucun historique</h5>
    <p>Vos certifications obtenues appara\xEEtront ici.</p>
  </div>

  <div class="timeline" *ngIf="!loading && historiqueList.length > 0">
    <div class="tl-item" *ngFor="let cert of historiqueList; let last = last">
      <div class="tl-left">
        <div class="tl-dot" [style.background]="getAccentColor(cert)"></div>
        <div class="tl-line" *ngIf="!last"></div>
      </div>
      <div class="tl-body">
        <div class="tl-date">{{ formatDate(cert.date_delivrance) }}</div>
        <div class="tl-card">
          <div class="tl-cert-icon" [style.background]="getIconStyle(cert).bg">
            <i class="isax" [ngClass]="getIconStyle(cert).icon" [style.color]="getIconStyle(cert).color"></i>
          </div>
          <div class="tl-info">
            <div class="tl-name">{{ cert.formation?.titre ?? '\u2014' }}</div>
            <div class="tl-meta">
              <ng-container *ngIf="cert.formation?.duree_totale">{{ cert.formation.duree_totale }}h \xB7 </ng-container>
              {{ getFormateurName(cert) }}
              <ng-container *ngIf="isExpiringSoon(cert)">
                \xB7 <span class="tl-expire-warn">expire dans {{ daysUntilExpiry(cert) }}j</span>
              </ng-container>
            </div>
          </div>
          <span class="tl-duration" *ngIf="cert.formation?.duree_totale">{{ cert.formation.duree_totale }}h</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     TAB \u2014 EN COURS
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="tv" [class.active]="activeTab === 'encours'">

  <p class="encours-hint" *ngIf="formationsEnCours.length > 0">
    Ces formations d\xE9livreront un certificat \xE0 leur compl\xE9tion.
  </p>

  <div class="sc-empty" *ngIf="formationsEnCours.length === 0">
    <div class="sc-empty__icon"><i class="isax isax-refresh-circle"></i></div>
    <h5 class="sc-empty__title">Aucune formation certifiante en cours</h5>
    <p>Commencez une formation certifiante pour la voir appara\xEEtre ici.</p>
  </div>

  <div class="progress-grid" *ngIf="formationsEnCours.length > 0">
    <div class="prog-card" *ngFor="let f of formationsEnCours">
      <div class="pc-icon">
        <i class="isax isax-teacher pc-icon__i"></i>
      </div>
      <div class="pc-title">{{ f.titre }}</div>
      <div class="pc-sub">
        <ng-container *ngIf="f.formateur_nom">Formateur : {{ f.formateur_nom }}</ng-container>
      </div>
      <div class="pc-prog">
        <div class="pc-prog-bar">
          <div class="pc-prog-fill pc-prog-fill--green" [style.width]="(f.progression ?? 0) + '%'"></div>
        </div>
        <span class="pc-prog-pct pc-prog-pct--green">{{ f.progression ?? 0 }}%</span>
      </div>
      <div class="pc-hint">Certificat disponible \xE0 100% + quiz final \u2265 70%</div>
    </div>
  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     MODAL \u2014 APER\xC7U CERTIFICAT
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="modal fade" id="sc_cert_preview_modal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered sc-modal-dialog">
    <div class="modal-content sc-modal-content" *ngIf="selectedCert">

      <!-- accent top bar -->
      <div class="sc-cert-accent" [style.background]="getAccentColor(selectedCert)"></div>

      <!-- modal header -->
      <div class="sc-modal-header">
        <div class="sc-modal-icon"
             [style.background]="getAccentColor(selectedCert) + '20'"
             [style.color]="getAccentColor(selectedCert)">
          <i class="isax isax-award"></i>
        </div>
        <div>
          <h5 class="sc-modal-title">Certificat de r\xE9ussite</h5>
          <p class="sc-modal-sub">N\xB0 {{ selectedCert.code_unique }}</p>
        </div>
        <button type="button" class="btn-close ms-auto" (click)="closePreview()"></button>
      </div>
      <div class="sc-modal-divider"></div>

      <!-- certificate preview -->
      <div class="sc-modal-body">
        <div class="sc-cert-preview" [style.background]="config.bg_couleur">

          <!-- logo header -->
          <div class="sc-cert-logo-row">
            <div class="sc-cert-logo-mark" [style.background]="getAccentColor(selectedCert)">
              {{ (config.entreprise_nom || userEntreprise || 'E').slice(0,1).toUpperCase() }}
            </div>
            <div>
              <div class="sc-cert-logo-name">{{ config.entreprise_nom || userEntreprise || 'Entreprise' }}</div>
              <div class="sc-cert-logo-sub">{{ config.entreprise_sous_titre }}</div>
            </div>
            <div class="sc-cert-num ms-auto" *ngIf="config.show_numero">
              N\xB0 {{ selectedCert.code_unique }}
            </div>
          </div>

          <!-- badge + name -->
          <div class="sc-cert-badge-label" [style.background]="getAccentColor(selectedCert) + '20'" [style.color]="getAccentColor(selectedCert)">
            CERTIFICAT DE R\xC9USSITE
          </div>
          <div class="sc-cert-employee">{{ getEmployeeName(selectedCert) }}</div>
          <div class="sc-cert-accroche">{{ config.accroche }}</div>
          <div class="sc-cert-formation" [style.color]="getAccentColor(selectedCert)">
            {{ selectedCert.formation?.titre }}
          </div>

          <!-- dur\xE9e -->
          <div class="sc-cert-scores" *ngIf="config.show_duree && selectedCert.formation?.duree_totale">
            <div class="sc-cert-score-item">
              <div class="sc-cert-score-val">{{ selectedCert.formation?.duree_totale }}h</div>
              <div class="sc-cert-score-lbl">Dur\xE9e totale</div>
            </div>
          </div>

          <!-- signatures -->
          <div class="sc-cert-sigs">
            <div class="sc-cert-sig" *ngIf="config.signataire_nom || config.signataire_role">
              <div class="sc-cert-sig-line"></div>
              <div class="sc-cert-sig-name">{{ config.signataire_nom || '\u2014' }}</div>
              <div class="sc-cert-sig-role">{{ config.signataire_role }}</div>
            </div>
            <div class="sc-cert-sig" *ngIf="config.show_formateur">
              <div class="sc-cert-sig-line"></div>
              <div class="sc-cert-sig-name">{{ getFormateurName(selectedCert) }}</div>
              <div class="sc-cert-sig-role" [style.color]="getAccentColor(selectedCert)">Formateur</div>
            </div>
          </div>

          <!-- validity -->
          <div class="sc-cert-validity">
            D\xE9livr\xE9 le {{ formatDate(selectedCert.date_delivrance) }}
            <ng-container *ngIf="config.show_date_expiration && selectedCert.date_expiration">
              \xB7 Valide jusqu'au {{ formatDate(selectedCert.date_expiration) }}
            </ng-container>
          </div>
        </div>

        <!-- meta rows -->
        <div class="sc-detail-row">
          <div class="sc-detail-block">
            <i class="isax isax-scan-barcode sc-detail-block__icon"></i>
            <div>
              <div class="sc-detail-label">Code unique</div>
              <div class="sc-detail-value sc-detail-mono">{{ selectedCert.code_unique }}</div>
            </div>
          </div>
          <div class="sc-detail-block">
            <i class="isax isax-tick-circle sc-detail-block__icon"></i>
            <div>
              <div class="sc-detail-label">Statut</div>
              <span class="status-pill" [class.sp-valid]="selectedCert.statut === 'valide'" [class.sp-expired]="selectedCert.statut === 'expir\xE9'">
                {{ selectedCert.statut === 'valide' ? 'Valide' : selectedCert.statut === 'expir\xE9' ? 'Expir\xE9' : 'R\xE9voqu\xE9' }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="sc-modal-divider"></div>
      <div class="sc-modal-footer">
        <button type="button" class="sc-btn-cancel" (click)="closePreview()">Fermer</button>
        <button type="button" class="sc-btn-download"
                [disabled]="downloading"
                [style.background]="getAccentColor(selectedCert)"
                (click)="downloadPdf(selectedCert)">
          <i class="isax" [ngClass]="downloading ? 'isax-refresh' : 'isax-document-download'"></i>
          {{ downloading ? 'G\xE9n\xE9ration\u2026' : 'T\xE9l\xE9charger PDF' }}
        </button>
      </div>

    </div>
  </div>
</div>
`, styles: ["/* src/app/features/student/student-certificate/student-certificate.component.scss */\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ph {\n  background: #fff;\n  border-bottom: 0.5px solid #e5e7eb;\n  padding: 14px 20px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 0;\n}\n.ph-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #FAEEDA;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  color: #854F0B;\n  flex-shrink: 0;\n}\n.ph-info {\n  flex: 1;\n}\n.ph-title {\n  font-size: 15px;\n  font-weight: 500;\n  color: #1a1a2e;\n}\n.ph-sub {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.ph-acts {\n  display: flex;\n  gap: 8px;\n}\n.btn-o {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 13px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #6b7280;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-o i {\n  font-size: 14px;\n}\n.btn-o:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  padding: 14px 0;\n}\n@media (max-width: 768px) {\n  .kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.kpi {\n  background: #fff;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.kpi-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.ki-warm {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ki-green {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.ki-red {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.ki-blue {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.kpi-body {\n  flex: 1;\n}\n.kpi-val {\n  font-size: 22px;\n  font-weight: 500;\n  color: #1a1a2e;\n}\n.kpi-lbl {\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 1px;\n}\n.kpi-delta {\n  font-size: 10px;\n  margin-top: 2px;\n}\n.du {\n  color: #3B6D11;\n}\n.dd {\n  color: #A32D2D;\n}\n.dn {\n  color: #6b7280;\n}\n.tab-bar {\n  display: flex;\n  border-bottom: 0.5px solid #e5e7eb;\n  background: #fff;\n  margin-bottom: 0;\n}\n.tab {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 14px;\n  font-size: 13px;\n  cursor: pointer;\n  color: #6b7280;\n  border-bottom: 2px solid transparent;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.tab i {\n  font-size: 15px;\n}\n.tab.active {\n  color: #854F0B;\n  border-bottom-color: #854F0B;\n  font-weight: 500;\n}\n.tv {\n  display: none;\n  padding: 16px 0;\n  animation: fadeIn 0.2s ease;\n}\n.tv.active {\n  display: block;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 6px 10px;\n  width: 200px;\n}\n.search-box i {\n  font-size: 14px;\n  color: #6b7280;\n}\n.search-box input {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 12px;\n  color: #1a1a2e;\n  width: 100%;\n}\n.search-box input::placeholder {\n  color: #6b7280;\n}\n.fchip {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.fchip i {\n  font-size: 12px;\n}\n.fchip.on {\n  background: #FAEEDA;\n  border-color: #EF9F27;\n  color: #633806;\n  font-weight: 500;\n}\n.fchip:hover:not(.on) {\n  border-color: #069b8f;\n  color: #069b8f;\n}\n.ml {\n  margin-left: auto;\n}\n.sort-btn {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.sort-btn i {\n  font-size: 13px;\n}\n.sort-btn.active,\n.sort-btn:hover {\n  border-color: #069b8f;\n  color: #069b8f;\n}\n.expire-banner {\n  background: #FAEEDA;\n  border: 0.5px solid #EF9F27;\n  border-radius: 8px;\n  padding: 11px 14px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.eb-icon {\n  font-size: 18px;\n  color: #854F0B;\n  flex-shrink: 0;\n}\n.eb-text {\n  flex: 1;\n}\n.eb-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #633806;\n}\n.eb-sub {\n  font-size: 11px;\n  color: #854F0B;\n  margin-top: 2px;\n}\n.eb-btn {\n  padding: 6px 12px;\n  border: 0.5px solid #854F0B;\n  border-radius: 8px;\n  font-size: 12px;\n  color: #633806;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  font-weight: 500;\n}\n.eb-btn:hover {\n  background: rgba(133, 79, 11, 0.08);\n}\n.cert-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n@media (max-width: 768px) {\n  .cert-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.cert-card {\n  background: #fff;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  transition: border-color 0.15s, box-shadow 0.15s;\n  cursor: pointer;\n}\n.cert-card:hover {\n  border-color: #c0c4cc;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n}\n.cert-card.expiring {\n  border-color: #EF9F27;\n}\n.cert-card.expired {\n  border-color: #F09595;\n  opacity: 0.8;\n}\n.cc-accent {\n  height: 5px;\n}\n.cc-body {\n  padding: 14px 16px;\n}\n.cc-top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.cc-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.cc-icon i {\n  font-size: 20px;\n}\n.cc-badges {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n}\n.status-pill {\n  font-size: 10px;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.sp-valid {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.sp-expire {\n  background: #FAEEDA;\n  color: #633806;\n}\n.sp-expired {\n  background: #FCEBEB;\n  color: #791F1F;\n}\n.new-badge {\n  font-size: 9px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  color: #0C447C;\n  border: 0.5px solid #85B7EB;\n}\n.cc-title {\n  font-size: 14px;\n  font-weight: 500;\n  color: #1a1a2e;\n  margin-bottom: 4px;\n  line-height: 1.3;\n}\n.cc-formateur {\n  font-size: 11px;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 10px;\n}\n.cc-formateur i {\n  font-size: 12px;\n}\n.cc-score-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.cc-score-item {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 8px;\n  text-align: center;\n}\n.csi-v {\n  font-size: 16px;\n  font-weight: 500;\n  color: #1a1a2e;\n}\n.csi-l {\n  font-size: 10px;\n  color: #6b7280;\n  margin-top: 1px;\n}\n.cc-verify {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 10px;\n  border-radius: 8px;\n  background: #f9fafb;\n  margin-bottom: 10px;\n}\n.ccv-icon {\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.ccv-text {\n  font-size: 11px;\n  color: #6b7280;\n}\n.ccv-id {\n  font-size: 10px;\n  font-weight: 500;\n  font-family: monospace;\n}\n.ccv-copy {\n  font-size: 11px;\n  color: #6b7280;\n  margin-left: auto;\n  cursor: pointer;\n  transition: color 0.15s;\n}\n.ccv-copy:hover {\n  color: #1a1a2e;\n}\n.ccv-copy i {\n  font-size: 13px;\n}\n.cc-verify--warn .ccv-icon,\n.cc-verify--warn .ccv-id,\n.cc-verify--warn .ccv-copy {\n  color: #854F0B;\n}\n.cc-dates {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.cc-date-item {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.cdi-lbl {\n  font-size: 10px;\n  color: #6b7280;\n}\n.cdi-val {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1a1a2e;\n}\n.cdi-val.warn {\n  color: #854F0B;\n}\n.cdi-val.danger {\n  color: #A32D2D;\n}\n.cc-footer {\n  display: flex;\n  gap: 6px;\n}\n.ccf-btn {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  padding: 8px;\n  border-radius: 8px;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.12s;\n  border: none;\n}\n.ccf-btn i {\n  font-size: 14px;\n}\n.ccf-dl {\n  background: #FAEEDA;\n  color: #854F0B;\n  border: 0.5px solid #EF9F27;\n  font-weight: 500;\n}\n.ccf-dl:hover {\n  background: #F5D9B8;\n}\n.ccf-share {\n  background: #f9fafb;\n  color: #6b7280;\n  border: 0.5px solid #e5e7eb;\n}\n.ccf-share:hover {\n  background: #eee;\n}\n.ccf-renew {\n  background: #E6F1FB;\n  color: #185FA5;\n  border: 0.5px solid #85B7EB;\n  font-weight: 500;\n}\n.ccf-renew:hover {\n  background: #cde3f7;\n}\n.ccf-view {\n  background: #E6F1FB;\n  color: #185FA5;\n  border: 0.5px solid #85B7EB;\n}\n.ccf-view:hover {\n  background: #cde3f7;\n}\n.ccf-view:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.timeline {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  max-width: 640px;\n}\n.tl-item {\n  display: flex;\n  gap: 14px;\n  padding: 12px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.tl-item:last-child {\n  border-bottom: none;\n}\n.tl-left {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 40px;\n  flex-shrink: 0;\n}\n.tl-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.tl-line {\n  flex: 1;\n  width: 1px;\n  background: #e5e7eb;\n  margin-top: 4px;\n}\n.tl-body {\n  flex: 1;\n}\n.tl-date {\n  font-size: 11px;\n  font-weight: 500;\n  color: #6b7280;\n  margin-bottom: 4px;\n}\n.tl-card {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.tl-cert-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.tl-cert-icon i {\n  font-size: 16px;\n}\n.tl-info {\n  flex: 1;\n}\n.tl-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1a1a2e;\n}\n.tl-meta {\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.tl-expire-warn {\n  color: #854F0B;\n}\n.tl-duration {\n  font-size: 13px;\n  font-weight: 500;\n  color: #6b7280;\n}\n.encours-hint {\n  font-size: 13px;\n  color: #6b7280;\n  margin-bottom: 12px;\n}\n.progress-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n@media (max-width: 768px) {\n  .progress-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.prog-card {\n  background: #fff;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  opacity: 0.8;\n}\n.pc-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f9fafb;\n  font-size: 18px;\n}\n.pc-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1a1a2e;\n}\n.pc-sub {\n  font-size: 11px;\n  color: #6b7280;\n}\n.pc-prog {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pc-prog-bar {\n  flex: 1;\n  height: 5px;\n  background: #f9fafb;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.pc-prog-fill {\n  height: 100%;\n  border-radius: 5px;\n  transition: width 0.4s ease;\n}\n.pc-prog-fill--green {\n  background: #069b8f;\n}\n.pc-prog-pct {\n  font-size: 11px;\n  font-weight: 500;\n}\n.pc-prog-pct--green {\n  color: #069b8f;\n}\n.pc-icon__i {\n  font-size: 18px;\n  color: #6b7280;\n}\n.pc-hint {\n  font-size: 11px;\n  color: #6b7280;\n  text-align: center;\n}\n.sc-modal-dialog {\n  max-width: 600px;\n}\n.sc-modal-content {\n  border: none;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.14);\n}\n.sc-cert-accent {\n  height: 5px;\n}\n.sc-modal-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px 14px;\n}\n.sc-modal-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.sc-modal-title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0;\n}\n.sc-modal-sub {\n  font-size: 11px;\n  color: #6b7280;\n  margin: 2px 0 0;\n  font-family: monospace;\n}\n.sc-modal-divider {\n  height: 0.5px;\n  background: #e5e7eb;\n}\n.sc-modal-body {\n  padding: 16px 20px;\n}\n.sc-cert-preview {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 14px;\n  text-align: center;\n}\n.sc-cert-logo-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 14px;\n  text-align: left;\n}\n.sc-cert-logo-mark {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n}\n.sc-cert-logo-name {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.sc-cert-logo-sub {\n  font-size: 10px;\n  color: #6b7280;\n}\n.sc-cert-num {\n  font-size: 10px;\n  color: #6b7280;\n  font-family: monospace;\n  letter-spacing: 1px;\n}\n.sc-cert-badge-label {\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  padding: 3px 14px;\n  border-radius: 20px;\n  margin-bottom: 10px;\n}\n.sc-cert-employee {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n  margin-bottom: 6px;\n}\n.sc-cert-accroche {\n  font-size: 12px;\n  color: #6b7280;\n  margin-bottom: 4px;\n}\n.sc-cert-formation {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n.sc-cert-scores {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 12px;\n}\n.sc-cert-score-item {\n  text-align: center;\n}\n.sc-cert-score-val {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1a1a2e;\n}\n.sc-cert-score-lbl {\n  font-size: 10px;\n  color: #6b7280;\n  letter-spacing: 0.5px;\n}\n.sc-cert-score-sep {\n  width: 1px;\n  height: 36px;\n  background: #e5e7eb;\n}\n.sc-cert-sigs {\n  display: flex;\n  justify-content: center;\n  gap: 40px;\n  margin-bottom: 12px;\n}\n.sc-cert-sig {\n  text-align: center;\n  min-width: 120px;\n}\n.sc-cert-sig-line {\n  height: 1px;\n  background: #aaa;\n  margin-bottom: 6px;\n}\n.sc-cert-sig-name {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.sc-cert-sig-role {\n  font-size: 10px;\n  color: #6b7280;\n}\n.sc-cert-validity {\n  font-size: 10px;\n  color: #6b7280;\n  border-top: 0.5px solid #e5e7eb;\n  padding-top: 10px;\n  margin-top: 8px;\n}\n.sc-detail-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.sc-detail-block {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.sc-detail-block__icon {\n  font-size: 18px;\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.sc-detail-label {\n  font-size: 10px;\n  color: #6b7280;\n}\n.sc-detail-value {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1a1a2e;\n}\n.sc-detail-mono {\n  font-family: monospace;\n  font-size: 12px;\n}\n.sc-modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 12px 20px;\n}\n.sc-btn-cancel {\n  padding: 8px 18px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #6b7280;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.sc-btn-cancel:hover {\n  border-color: #aaa;\n  color: #1a1a2e;\n}\n.sc-btn-download {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #fff;\n  cursor: pointer;\n  transition: filter 0.15s;\n}\n.sc-btn-download:hover:not(:disabled) {\n  filter: brightness(0.9);\n}\n.sc-btn-download:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.sc-btn-download i {\n  font-size: 15px;\n}\n.sc-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 0;\n  color: #6b7280;\n}\n.sc-loading__spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n.sc-loading p {\n  margin-top: 14px;\n  font-size: 13px;\n}\n.sc-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 0;\n  text-align: center;\n}\n.sc-empty__icon {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #FAEEDA;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.sc-empty__icon i {\n  font-size: 28px;\n  color: #854F0B;\n}\n.sc-empty__title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin-bottom: 8px;\n}\n.sc-empty p {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n/*# sourceMappingURL=student-certificate.component.css.map */\n"] }]
  }], () => [{ type: CertificatService }, { type: FormationsService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentCertificateComponent, { className: "StudentCertificateComponent", filePath: "src/app/features/student/student-certificate/student-certificate.component.ts", lineNumber: 18 });
})();
export {
  StudentCertificateComponent
};
//# sourceMappingURL=chunk-DZT2O7Z2.js.map
