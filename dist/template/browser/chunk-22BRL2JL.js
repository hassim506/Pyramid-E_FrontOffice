import {
  CertificatService,
  DEFAULT_CERT_CONFIG
} from "./chunk-KJTEBG5L.js";
import "./chunk-ESOPKBER.js";
import "./chunk-FQH4LUZ5.js";
import {
  AuthService
} from "./chunk-IEFOQSOV.js";
import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-HLA233IM.js";
import "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
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
} from "./chunk-7XGB4BEQ.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-certificate-modele/adminrh-certificate-modele.component.ts
function AdminrhCertificateModeleComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 68);
    \u0275\u0275listener("click", function AdminrhCertificateModeleComponent_div_0_Template_button_click_2_listener() {
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
function AdminrhCertificateModeleComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function AdminrhCertificateModeleComponent_button_29_Template_button_click_0_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPalette(c_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", c_r4);
    \u0275\u0275classProp("ip-palette-swatch--active", ctx_r1.config.couleur_principale === c_r4);
  }
}
function AdminrhCertificateModeleComponent_div_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275text(2, " Mod\xE8le enregistr\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCertificateModeleComponent_img_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 72);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.config.logo_url, \u0275\u0275sanitizeUrl);
  }
}
function AdminrhCertificateModeleComponent_div_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", ctx_r1.config.couleur_principale);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(ctx_r1.config.entreprise_nom || "E"), " ");
  }
}
function AdminrhCertificateModeleComponent_div_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275text(1, "N\xB0 CERT-2025-0091");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCertificateModeleComponent_div_152_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79);
    \u0275\u0275text(2, "87%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 80);
    \u0275\u0275text(4, "Score obtenu");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.config.couleur_principale);
  }
}
function AdminrhCertificateModeleComponent_div_152_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 81);
  }
}
function AdminrhCertificateModeleComponent_div_152_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79);
    \u0275\u0275text(2, "8h");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 80);
    \u0275\u0275text(4, "Dur\xE9e totale");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhCertificateModeleComponent_div_152_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275template(1, AdminrhCertificateModeleComponent_div_152_div_1_Template, 5, 2, "div", 76)(2, AdminrhCertificateModeleComponent_div_152_div_2_Template, 1, 0, "div", 77)(3, AdminrhCertificateModeleComponent_div_152_div_3_Template, 5, 0, "div", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.show_score);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.show_score && ctx_r1.config.show_duree);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.show_duree);
  }
}
function AdminrhCertificateModeleComponent_div_154_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275element(1, "div", 83);
    \u0275\u0275elementStart(2, "div", 84);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 85);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.config.signataire_nom || "Signataire");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.config.signataire_role);
  }
}
function AdminrhCertificateModeleComponent_div_155_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275element(1, "div", 83);
    \u0275\u0275elementStart(2, "div", 84);
    \u0275\u0275text(3, "Ibrahima Sow");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 85);
    \u0275\u0275text(5, " Formateur \xB7 Cybers\xE9curit\xE9 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r1.config.couleur_principale);
  }
}
function AdminrhCertificateModeleComponent_div_156_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275element(1, "i", 87);
    \u0275\u0275elementEnd();
  }
}
function AdminrhCertificateModeleComponent_ng_container_159_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 Valide jusqu'au 15 janvier 2026 (", ctx_r1.config.duree_validite, ") ");
  }
}
function AdminrhCertificateModeleComponent_tr_176_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 88)(3, "div", 89);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 90);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 91);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td")(12, "span", 92);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "span", 93);
    \u0275\u0275element(16, "i", 94);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "div", 95)(20, "button", 96);
    \u0275\u0275listener("click", function AdminrhCertificateModeleComponent_tr_176_Template_button_click_20_listener() {
      const cert_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadPdf(cert_r6));
    });
    \u0275\u0275element(21, "i");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cert_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r1.getAvatarStyle(cert_r6.employe_id).bg)("color", ctx_r1.getAvatarStyle(cert_r6.employe_id).color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials((cert_r6.employe == null ? null : cert_r6.employe.name) || ""), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", cert_r6.employe == null ? null : cert_r6.employe.prenom, " ", cert_r6.employe == null ? null : cert_r6.employe.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 19, cert_r6.date_delivrance, "d MMM yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(cert_r6.formation == null ? null : cert_r6.formation.titre);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ip-cert-badge--valide", cert_r6.statut === "valide")("ip-cert-badge--expire", cert_r6.statut === "expir\xE9")("ip-cert-badge--revoque", cert_r6.statut === "r\xE9voqu\xE9");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", cert_r6.statut === "valide" ? "D\xE9livr\xE9" : cert_r6.statut === "expir\xE9" ? "Expir\xE9" : "R\xE9voqu\xE9", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.downloading);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.downloading ? "isax isax-refresh ip-spin" : "isax isax-document-download");
  }
}
function AdminrhCertificateModeleComponent_tr_177_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 97);
    \u0275\u0275element(2, "i", 98);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Aucun certificat trouv\xE9");
    \u0275\u0275elementEnd()()();
  }
}
var DEFAULT_CONFIG = __spreadValues({}, DEFAULT_CERT_CONFIG);
var PALETTE = ["#059669", "#1D6EBF", "#7B5EA7", "#A0522D", "#C0392B", "#1A1A2E"];
var AdminrhCertificateModeleComponent = class _AdminrhCertificateModeleComponent {
  http;
  certService;
  auth;
  config = __spreadValues({}, DEFAULT_CONFIG);
  modeleId = null;
  saving = false;
  saveSuccess = false;
  error = "";
  downloading = false;
  palette = PALETTE;
  get apiUrl() {
    return environment.apiUrl;
  }
  get entrepriseId() {
    return this.auth.getUser()?.entreprise_id ?? 0;
  }
  // recently issued (up to 5) for preview panel
  recentCertificats = [];
  constructor(http, certService, auth) {
    this.http = http;
    this.certService = certService;
    this.auth = auth;
  }
  ngOnInit() {
    this.loadModele();
    this.loadRecent();
  }
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
  loadRecent() {
    this.certService.getCertificats().subscribe({
      next: (data) => {
        this.recentCertificats = data.slice(0, 5);
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
  downloadPdf(cert) {
    if (this.downloading)
      return;
    this.downloading = true;
    this.certService.downloadPdf(cert, this.config).finally(() => {
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
  static \u0275fac = function AdminrhCertificateModeleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhCertificateModeleComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(CertificatService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhCertificateModeleComponent, selectors: [["app-adminrh-certificate-modele"]], decls: 178, vars: 51, consts: [["class", "alert alert-danger alert-dismissible", 4, "ngIf"], [1, "ip-page-head"], [1, "ip-page-head__title"], [1, "ip-page-head__sub"], [1, "ip-customizer-layout"], [1, "ip-panel"], [1, "ip-section"], [1, "ip-section-head"], [1, "isax", "isax-document"], [1, "ip-field"], [1, "ip-label"], ["type", "text", "placeholder", "Ex. TechNova S\xE9n\xE9gal", 1, "ip-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Learning Management System", 1, "ip-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "https://\u2026/logo.png", 1, "ip-input", 3, "ngModelChange", "ngModel"], [1, "ip-palette-row"], ["type", "button", "class", "ip-palette-swatch", 3, "background", "ip-palette-swatch--active", "click", 4, "ngFor", "ngForOf"], ["type", "color", "title", "Couleur personnalis\xE9e", 1, "ip-color-pick", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "ip-palette-swatch", 2, "background", "#FAFBFF", "border", "1px solid #dee2e6", 3, "click"], ["type", "button", 1, "ip-palette-swatch", 2, "background", "#fff", "border", "1px solid #dee2e6", 3, "click"], ["type", "button", 1, "ip-palette-swatch", 2, "background", "#F0FFF4", "border", "1px solid #dee2e6", 3, "click"], ["type", "button", 1, "ip-palette-swatch", 2, "background", "#EFF6FF", "border", "1px solid #dee2e6", 3, "click"], [1, "isax", "isax-text"], ["type", "text", "placeholder", "a compl\xE9t\xE9 avec succ\xE8s la formation", 1, "ip-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Pr\xE9nom Nom", 1, "ip-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Responsable RH, TechNova S\xE9n\xE9gal", 1, "ip-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "1 an", 1, "ip-input", 3, "ngModelChange", "ngModel"], [1, "isax", "isax-shield-tick"], [1, "ip-toggle-row"], [1, "ip-toggle-label"], [1, "ip-toggle-sub"], [1, "ip-switch"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "ip-switch-track"], [1, "ip-save-row"], ["class", "ip-save-ok", 4, "ngIf"], ["type", "button", 1, "ip-btn", "ip-btn--primary", "ip-btn--wide", 3, "click", "disabled"], [1, "isax", "isax-save-2"], [1, "ip-preview-col"], [1, "ip-preview-head"], [1, "isax", "isax-eye"], ["type", "button", 1, "ip-btn", "ip-btn--ghost", "ip-btn--sm", 3, "click", "disabled"], [1, "ip-cert-card"], [1, "ip-cert-card__bar"], [1, "ip-cert-card__header"], [1, "ip-cert-card__logo-wrap"], ["class", "ip-cert-card__logo-img", "alt", "logo", "onerror", "this.style.display='none'", 3, "src", 4, "ngIf"], ["class", "ip-cert-card__logo-mark", 3, "background", 4, "ngIf"], [1, "ip-cert-card__header-text"], [1, "ip-cert-card__company"], [1, "ip-cert-card__company-sub"], ["class", "ip-cert-card__num", 4, "ngIf"], [1, "ip-cert-card__body"], [1, "ip-cert-card__label"], [1, "ip-cert-card__name"], [1, "ip-cert-card__accroche"], [1, "ip-cert-card__formation"], ["class", "ip-cert-card__stats", 4, "ngIf"], [1, "ip-cert-card__sig-row"], ["class", "ip-cert-card__sig", 4, "ngIf"], ["class", "ip-cert-card__qr", 4, "ngIf"], [1, "ip-cert-card__validity"], [4, "ngIf"], [1, "ip-recent-head"], [1, "ip-card"], [1, "table-responsive"], [1, "table", "ip-table"], [4, "ngFor", "ngForOf"], [1, "alert", "alert-danger", "alert-dismissible"], ["type", "button", 1, "btn-close", 3, "click"], ["type", "button", 1, "ip-palette-swatch", 3, "click"], [1, "ip-save-ok"], [1, "isax", "isax-tick-circle"], ["alt", "logo", "onerror", "this.style.display='none'", 1, "ip-cert-card__logo-img", 3, "src"], [1, "ip-cert-card__logo-mark"], [1, "ip-cert-card__num"], [1, "ip-cert-card__stats"], ["class", "ip-cert-card__stat", 4, "ngIf"], ["class", "ip-cert-card__stat-sep", 4, "ngIf"], [1, "ip-cert-card__stat"], [1, "ip-cert-card__stat-val"], [1, "ip-cert-card__stat-label"], [1, "ip-cert-card__stat-sep"], [1, "ip-cert-card__sig"], [1, "ip-cert-card__sig-line"], [1, "ip-cert-card__sig-name"], [1, "ip-cert-card__sig-role"], [1, "ip-cert-card__qr"], [1, "isax", "isax-scan-barcode"], [1, "ip-user-cell"], [1, "ip-avatar"], [1, "ip-user-name"], [1, "ip-user-sub"], [1, "ip-formation-name"], [1, "ip-cert-badge"], [1, "fa-solid", "fa-circle"], [1, "ip-actions"], ["type", "button", "title", "T\xE9l\xE9charger PDF", 1, "ip-action-btn", 3, "click", "disabled"], ["colspan", "4", 1, "ip-empty"], [1, "isax", "isax-award"]], template: function AdminrhCertificateModeleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AdminrhCertificateModeleComponent_div_0_Template, 3, 1, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "div")(3, "h5", 2);
      \u0275\u0275text(4, "Personnalisation du certificat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Configurez le mod\xE8le de certificat appliqu\xE9 \xE0 toutes les formations de votre entreprise");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "div", 7);
      \u0275\u0275element(11, "i", 8);
      \u0275\u0275text(12, " Identit\xE9 entreprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 9)(14, "label", 10);
      \u0275\u0275text(15, "Nom de l'entreprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.config.entreprise_nom, $event) || (ctx.config.entreprise_nom = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 9)(18, "label", 10);
      \u0275\u0275text(19, "Sous-titre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.config.entreprise_sous_titre, $event) || (ctx.config.entreprise_sous_titre = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 9)(22, "label", 10);
      \u0275\u0275text(23, "Logo (URL)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.config.logo_url, $event) || (ctx.config.logo_url = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 9)(26, "label", 10);
      \u0275\u0275text(27, "Couleur principale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 14);
      \u0275\u0275template(29, AdminrhCertificateModeleComponent_button_29_Template, 1, 4, "button", 15);
      \u0275\u0275elementStart(30, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.config.couleur_principale, $event) || (ctx.config.couleur_principale = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 9)(32, "label", 10);
      \u0275\u0275text(33, "Couleur de fond du certificat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 14)(35, "button", 17);
      \u0275\u0275listener("click", function AdminrhCertificateModeleComponent_Template_button_click_35_listener() {
        return ctx.config.bg_couleur = "#FAFBFF";
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 18);
      \u0275\u0275listener("click", function AdminrhCertificateModeleComponent_Template_button_click_36_listener() {
        return ctx.config.bg_couleur = "#fff";
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "button", 19);
      \u0275\u0275listener("click", function AdminrhCertificateModeleComponent_Template_button_click_37_listener() {
        return ctx.config.bg_couleur = "#F0FFF4";
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 20);
      \u0275\u0275listener("click", function AdminrhCertificateModeleComponent_Template_button_click_38_listener() {
        return ctx.config.bg_couleur = "#EFF6FF";
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.config.bg_couleur, $event) || (ctx.config.bg_couleur = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "div", 6)(41, "div", 7);
      \u0275\u0275element(42, "i", 21);
      \u0275\u0275text(43, " Textes du certificat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 9)(45, "label", 10);
      \u0275\u0275text(46, "Intitul\xE9 d'accroche");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_47_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.config.accroche, $event) || (ctx.config.accroche = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 9)(49, "label", 10);
      \u0275\u0275text(50, "Signataire");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_51_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.config.signataire_nom, $event) || (ctx.config.signataire_nom = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 9)(53, "label", 10);
      \u0275\u0275text(54, "R\xF4le du signataire");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "input", 24);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_55_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.config.signataire_role, $event) || (ctx.config.signataire_role = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 9)(57, "label", 10);
      \u0275\u0275text(58, "Dur\xE9e de validit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_59_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.config.duree_validite, $event) || (ctx.config.duree_validite = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div", 6)(61, "div", 7);
      \u0275\u0275element(62, "i", 26);
      \u0275\u0275text(63, " Options & s\xE9curit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 27)(65, "div")(66, "div", 28);
      \u0275\u0275text(67, "Score et dur\xE9e visibles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 29);
      \u0275\u0275text(69, "Affich\xE9s sur le certificat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "label", 30)(71, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_71_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.config.show_score, $event) || (ctx.config.show_score = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "span", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 27)(74, "div")(75, "div", 28);
      \u0275\u0275text(76, "Dur\xE9e totale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 29);
      \u0275\u0275text(78, "Heures de formation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "label", 30)(80, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_80_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.config.show_duree, $event) || (ctx.config.show_duree = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(81, "span", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 27)(83, "div")(84, "div", 28);
      \u0275\u0275text(85, "Nom du formateur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 29);
      \u0275\u0275text(87, "Signature du formateur");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "label", 30)(89, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_89_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.config.show_formateur, $event) || (ctx.config.show_formateur = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(90, "span", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 27)(92, "div")(93, "div", 28);
      \u0275\u0275text(94, "QR code de v\xE9rification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 29);
      \u0275\u0275text(96, "Lien de validation publique");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "label", 30)(98, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_98_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.config.show_qr, $event) || (ctx.config.show_qr = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(99, "span", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "div", 27)(101, "div")(102, "div", 28);
      \u0275\u0275text(103, "Num\xE9ro unique visible");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "div", 29);
      \u0275\u0275text(105, "R\xE9f\xE9rence tra\xE7able");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "label", 30)(107, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_107_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.config.show_numero, $event) || (ctx.config.show_numero = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(108, "span", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "div", 27)(110, "div")(111, "div", 28);
      \u0275\u0275text(112, "Date d'expiration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 29);
      \u0275\u0275text(114, "Valide jusqu'au\u2026");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "label", 30)(116, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_116_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.config.show_date_expiration, $event) || (ctx.config.show_date_expiration = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(117, "span", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(118, "div", 33);
      \u0275\u0275template(119, AdminrhCertificateModeleComponent_div_119_Template, 3, 0, "div", 34);
      \u0275\u0275elementStart(120, "button", 35);
      \u0275\u0275listener("click", function AdminrhCertificateModeleComponent_Template_button_click_120_listener() {
        return ctx.saveModele();
      });
      \u0275\u0275element(121, "i", 36);
      \u0275\u0275text(122);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(123, "div", 37)(124, "div", 38)(125, "span");
      \u0275\u0275element(126, "i", 39);
      \u0275\u0275text(127, " Aper\xE7u en temps r\xE9el \u2014 mod\xE8le appliqu\xE9 \xE0 toutes les formations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "button", 40);
      \u0275\u0275listener("click", function AdminrhCertificateModeleComponent_Template_button_click_128_listener() {
        return ctx.downloadPreview();
      });
      \u0275\u0275element(129, "i");
      \u0275\u0275text(130);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "div", 41);
      \u0275\u0275element(132, "div", 42);
      \u0275\u0275elementStart(133, "div", 43)(134, "div", 44);
      \u0275\u0275template(135, AdminrhCertificateModeleComponent_img_135_Template, 1, 1, "img", 45)(136, AdminrhCertificateModeleComponent_div_136_Template, 2, 3, "div", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "div", 47)(138, "div", 48);
      \u0275\u0275text(139);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "div", 49);
      \u0275\u0275text(141);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(142, AdminrhCertificateModeleComponent_div_142_Template, 2, 0, "div", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "div", 51)(144, "div", 52);
      \u0275\u0275text(145, "CERTIFICAT DE R\xC9USSITE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "div", 53);
      \u0275\u0275text(147, "Moussa Ndiaye");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "div", 54);
      \u0275\u0275text(149);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "div", 55);
      \u0275\u0275text(151, " Cybers\xE9curit\xE9 & protection des donn\xE9es ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(152, AdminrhCertificateModeleComponent_div_152_Template, 4, 3, "div", 56);
      \u0275\u0275elementStart(153, "div", 57);
      \u0275\u0275template(154, AdminrhCertificateModeleComponent_div_154_Template, 6, 2, "div", 58)(155, AdminrhCertificateModeleComponent_div_155_Template, 6, 2, "div", 58)(156, AdminrhCertificateModeleComponent_div_156_Template, 2, 0, "div", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "div", 60);
      \u0275\u0275text(158, " D\xE9livr\xE9 le 15 janvier 2025 ");
      \u0275\u0275template(159, AdminrhCertificateModeleComponent_ng_container_159_Template, 2, 1, "ng-container", 61);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(160, "div", 62);
      \u0275\u0275text(161, "CERTIFICATS R\xC9CEMMENT D\xC9LIVR\xC9S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "div", 63)(163, "div", 64)(164, "table", 65)(165, "thead")(166, "tr")(167, "th");
      \u0275\u0275text(168, "Employ\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "th");
      \u0275\u0275text(170, "Formation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "th");
      \u0275\u0275text(172, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "th");
      \u0275\u0275text(174, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(175, "tbody");
      \u0275\u0275template(176, AdminrhCertificateModeleComponent_tr_176_Template, 22, 22, "tr", 66)(177, AdminrhCertificateModeleComponent_tr_177_Template, 5, 0, "tr", 61);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.config.entreprise_nom);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.config.entreprise_sous_titre);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.config.logo_url);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.palette);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.config.couleur_principale);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("ip-palette-swatch--active", ctx.config.bg_couleur === "#FAFBFF");
      \u0275\u0275advance();
      \u0275\u0275classProp("ip-palette-swatch--active", ctx.config.bg_couleur === "#fff");
      \u0275\u0275advance();
      \u0275\u0275classProp("ip-palette-swatch--active", ctx.config.bg_couleur === "#F0FFF4");
      \u0275\u0275advance();
      \u0275\u0275classProp("ip-palette-swatch--active", ctx.config.bg_couleur === "#EFF6FF");
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.config.bg_couleur);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.config.accroche);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.config.signataire_nom);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.config.signataire_role);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.config.duree_validite);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.config.show_score);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.config.show_duree);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.config.show_formateur);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.config.show_qr);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.config.show_numero);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.config.show_date_expiration);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.saveSuccess);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.saving ? "Enregistrement\u2026" : "Enregistrer le mod\xE8le", " ");
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.downloading);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.downloading ? "isax isax-refresh ip-spin" : "isax isax-document-download");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.downloading ? "G\xE9n\xE9ration\u2026" : "Exporter PDF", " ");
      \u0275\u0275advance();
      \u0275\u0275styleProp("background", ctx.config.bg_couleur);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background", ctx.config.couleur_principale);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.config.logo_url);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.config.logo_url);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.config.entreprise_nom || "Votre Entreprise");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.config.entreprise_sous_titre);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.config.show_numero);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.config.accroche);
      \u0275\u0275advance();
      \u0275\u0275styleProp("color", ctx.config.couleur_principale);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.config.show_score || ctx.config.show_duree);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.config.signataire_nom || ctx.config.signataire_role);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.config.show_formateur);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.config.show_qr);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.config.show_date_expiration);
      \u0275\u0275advance(17);
      \u0275\u0275property("ngForOf", ctx.recentCertificats);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.recentCertificats.length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ['\n\n.ip-page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.ip-btn--primary[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary[_ngcontent-%COMP%]:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-btn--ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n}\n.ip-btn--wide[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.ip-btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.ip-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.55;\n  cursor: default;\n}\n.ip-customizer-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  gap: 24px;\n  align-items: flex-start;\n}\n@media (max-width: 900px) {\n  .ip-customizer-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-panel[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.ip-section[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid #E9ECEF;\n}\n.ip-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-section-head[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1A1A2E;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ip-section-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #D4AF37;\n  font-size: 14px;\n}\n.ip-field[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.ip-field[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.ip-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 500;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 5px;\n}\n.ip-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-palette-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.ip-palette-swatch[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n  transition: transform 0.12s, border-color 0.12s;\n  padding: 0;\n}\n.ip-palette-swatch--active[_ngcontent-%COMP%] {\n  border-color: #1A1A2E;\n  transform: scale(1.15);\n}\n.ip-palette-swatch[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.ip-color-pick[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 1px solid #E9ECEF;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n}\n.ip-color-pick[_ngcontent-%COMP%]::-webkit-color-swatch-wrapper {\n  padding: 0;\n  border-radius: 50%;\n}\n.ip-color-pick[_ngcontent-%COMP%]::-webkit-color-swatch {\n  border-radius: 50%;\n  border: none;\n}\n.ip-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 9px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-toggle-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-toggle-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-toggle-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 1px;\n}\n.ip-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.ip-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ip-switch-track[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 22px;\n  background: #DEE2E6;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.ip-switch-track[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.ip-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ip-switch-track[_ngcontent-%COMP%] {\n  background: #D4AF37;\n}\n.ip-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ip-switch-track[_ngcontent-%COMP%]::before {\n  transform: translateX(18px);\n}\n.ip-save-row[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-save-ok[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #059669;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.ip-save-ok[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ip-preview-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 14px;\n}\n.ip-preview-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-right: 4px;\n}\n.ip-cert-card[_ngcontent-%COMP%] {\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n}\n.ip-cert-card__bar[_ngcontent-%COMP%] {\n  height: 6px;\n}\n.ip-cert-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #E9ECEF;\n}\n.ip-cert-card__logo-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.ip-cert-card__logo-img[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  object-fit: contain;\n  border-radius: 6px;\n}\n.ip-cert-card__logo-mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n}\n.ip-cert-card__header-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ip-cert-card__company[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.ip-cert-card__company-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-cert-card__num[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  font-family: monospace;\n  white-space: nowrap;\n}\n.ip-cert-card__body[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n}\n.ip-cert-card__label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-bottom: 6px;\n}\n.ip-cert-card__name[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n  margin-bottom: 6px;\n}\n.ip-cert-card__accroche[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 6px;\n}\n.ip-cert-card__formation[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.ip-cert-card__stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 16px;\n}\n.ip-cert-card__stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ip-cert-card__stat-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-cert-card__stat-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.ip-cert-card__stat-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: #E9ECEF;\n}\n.ip-cert-card__sig-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding-top: 12px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 4px;\n}\n.ip-cert-card__sig[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ip-cert-card__sig-line[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 1px;\n  background: #E9ECEF;\n  margin: 0 auto 4px;\n}\n.ip-cert-card__sig-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-card__sig-role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n}\n.ip-cert-card__qr[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #F8F9FA;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  color: #6C757D;\n}\n.ip-cert-card__validity[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 12px;\n}\n.ip-recent-head[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 10px;\n}\n.ip-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-table[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ip-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #FAFBFF;\n}\n.ip-user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n}\n.ip-user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-user-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-formation-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 6px;\n}\n.ip-cert-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n.ip-cert-badge--valide[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-cert-badge--expire[_ngcontent-%COMP%] {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-cert-badge--revoque[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.ip-action-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n}\n.ip-action-btn[_ngcontent-%COMP%]:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ip-spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  display: inline-block;\n}\n/*# sourceMappingURL=adminrh-certificate-modele.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhCertificateModeleComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-certificate-modele", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- Error -->\r
<div *ngIf="error" class="alert alert-danger alert-dismissible">\r
  {{ error }}\r
  <button type="button" class="btn-close" (click)="error = ''"></button>\r
</div>\r
\r
<!-- \u2500\u2500 Page header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div class="ip-page-head">\r
  <div>\r
    <h5 class="ip-page-head__title">Personnalisation du certificat</h5>\r
    <p class="ip-page-head__sub">Configurez le mod\xE8le de certificat appliqu\xE9 \xE0 toutes les formations de votre entreprise</p>\r
  </div>\r
</div>\r
\r
<!-- \u2500\u2500 Two-column layout \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div class="ip-customizer-layout">\r
\r
  <!-- \u2500\u2500 Left panel : configuration \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="ip-panel">\r
\r
    <!-- Section: Identit\xE9 entreprise -->\r
    <div class="ip-section">\r
      <div class="ip-section-head"><i class="isax isax-document"></i> Identit\xE9 entreprise</div>\r
\r
      <div class="ip-field">\r
        <label class="ip-label">Nom de l'entreprise</label>\r
        <input type="text" class="ip-input" [(ngModel)]="config.entreprise_nom"\r
               placeholder="Ex. TechNova S\xE9n\xE9gal">\r
      </div>\r
      <div class="ip-field">\r
        <label class="ip-label">Sous-titre</label>\r
        <input type="text" class="ip-input" [(ngModel)]="config.entreprise_sous_titre"\r
               placeholder="Learning Management System">\r
      </div>\r
      <div class="ip-field">\r
        <label class="ip-label">Logo (URL)</label>\r
        <input type="text" class="ip-input" [(ngModel)]="config.logo_url"\r
               placeholder="https://\u2026/logo.png">\r
      </div>\r
\r
      <div class="ip-field">\r
        <label class="ip-label">Couleur principale</label>\r
        <div class="ip-palette-row">\r
          <button *ngFor="let c of palette" type="button"\r
                  class="ip-palette-swatch"\r
                  [style.background]="c"\r
                  [class.ip-palette-swatch--active]="config.couleur_principale === c"\r
                  (click)="setPalette(c)"></button>\r
          <input type="color" class="ip-color-pick" [(ngModel)]="config.couleur_principale"\r
                 title="Couleur personnalis\xE9e">\r
        </div>\r
      </div>\r
\r
      <div class="ip-field">\r
        <label class="ip-label">Couleur de fond du certificat</label>\r
        <div class="ip-palette-row">\r
          <button type="button" class="ip-palette-swatch"\r
                  style="background:#FAFBFF; border:1px solid #dee2e6;"\r
                  [class.ip-palette-swatch--active]="config.bg_couleur === '#FAFBFF'"\r
                  (click)="config.bg_couleur = '#FAFBFF'"></button>\r
          <button type="button" class="ip-palette-swatch"\r
                  style="background:#fff; border:1px solid #dee2e6;"\r
                  [class.ip-palette-swatch--active]="config.bg_couleur === '#fff'"\r
                  (click)="config.bg_couleur = '#fff'"></button>\r
          <button type="button" class="ip-palette-swatch"\r
                  style="background:#F0FFF4; border:1px solid #dee2e6;"\r
                  [class.ip-palette-swatch--active]="config.bg_couleur === '#F0FFF4'"\r
                  (click)="config.bg_couleur = '#F0FFF4'"></button>\r
          <button type="button" class="ip-palette-swatch"\r
                  style="background:#EFF6FF; border:1px solid #dee2e6;"\r
                  [class.ip-palette-swatch--active]="config.bg_couleur === '#EFF6FF'"\r
                  (click)="config.bg_couleur = '#EFF6FF'"></button>\r
          <input type="color" class="ip-color-pick" [(ngModel)]="config.bg_couleur"\r
                 title="Couleur personnalis\xE9e">\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Section: Textes -->\r
    <div class="ip-section">\r
      <div class="ip-section-head"><i class="isax isax-text"></i> Textes du certificat</div>\r
\r
      <div class="ip-field">\r
        <label class="ip-label">Intitul\xE9 d'accroche</label>\r
        <input type="text" class="ip-input" [(ngModel)]="config.accroche"\r
               placeholder="a compl\xE9t\xE9 avec succ\xE8s la formation">\r
      </div>\r
      <div class="ip-field">\r
        <label class="ip-label">Signataire</label>\r
        <input type="text" class="ip-input" [(ngModel)]="config.signataire_nom"\r
               placeholder="Pr\xE9nom Nom">\r
      </div>\r
      <div class="ip-field">\r
        <label class="ip-label">R\xF4le du signataire</label>\r
        <input type="text" class="ip-input" [(ngModel)]="config.signataire_role"\r
               placeholder="Responsable RH, TechNova S\xE9n\xE9gal">\r
      </div>\r
      <div class="ip-field">\r
        <label class="ip-label">Dur\xE9e de validit\xE9</label>\r
        <input type="text" class="ip-input" [(ngModel)]="config.duree_validite"\r
               placeholder="1 an">\r
      </div>\r
    </div>\r
\r
    <!-- Section: Options & s\xE9curit\xE9 -->\r
    <div class="ip-section">\r
      <div class="ip-section-head"><i class="isax isax-shield-tick"></i> Options &amp; s\xE9curit\xE9</div>\r
\r
      <div class="ip-toggle-row">\r
        <div>\r
          <div class="ip-toggle-label">Score et dur\xE9e visibles</div>\r
          <div class="ip-toggle-sub">Affich\xE9s sur le certificat</div>\r
        </div>\r
        <label class="ip-switch">\r
          <input type="checkbox" [(ngModel)]="config.show_score">\r
          <span class="ip-switch-track"></span>\r
        </label>\r
      </div>\r
      <div class="ip-toggle-row">\r
        <div>\r
          <div class="ip-toggle-label">Dur\xE9e totale</div>\r
          <div class="ip-toggle-sub">Heures de formation</div>\r
        </div>\r
        <label class="ip-switch">\r
          <input type="checkbox" [(ngModel)]="config.show_duree">\r
          <span class="ip-switch-track"></span>\r
        </label>\r
      </div>\r
      <div class="ip-toggle-row">\r
        <div>\r
          <div class="ip-toggle-label">Nom du formateur</div>\r
          <div class="ip-toggle-sub">Signature du formateur</div>\r
        </div>\r
        <label class="ip-switch">\r
          <input type="checkbox" [(ngModel)]="config.show_formateur">\r
          <span class="ip-switch-track"></span>\r
        </label>\r
      </div>\r
      <div class="ip-toggle-row">\r
        <div>\r
          <div class="ip-toggle-label">QR code de v\xE9rification</div>\r
          <div class="ip-toggle-sub">Lien de validation publique</div>\r
        </div>\r
        <label class="ip-switch">\r
          <input type="checkbox" [(ngModel)]="config.show_qr">\r
          <span class="ip-switch-track"></span>\r
        </label>\r
      </div>\r
      <div class="ip-toggle-row">\r
        <div>\r
          <div class="ip-toggle-label">Num\xE9ro unique visible</div>\r
          <div class="ip-toggle-sub">R\xE9f\xE9rence tra\xE7able</div>\r
        </div>\r
        <label class="ip-switch">\r
          <input type="checkbox" [(ngModel)]="config.show_numero">\r
          <span class="ip-switch-track"></span>\r
        </label>\r
      </div>\r
      <div class="ip-toggle-row">\r
        <div>\r
          <div class="ip-toggle-label">Date d'expiration</div>\r
          <div class="ip-toggle-sub">Valide jusqu'au\u2026</div>\r
        </div>\r
        <label class="ip-switch">\r
          <input type="checkbox" [(ngModel)]="config.show_date_expiration">\r
          <span class="ip-switch-track"></span>\r
        </label>\r
      </div>\r
    </div>\r
\r
    <!-- Save -->\r
    <div class="ip-save-row">\r
      <div *ngIf="saveSuccess" class="ip-save-ok">\r
        <i class="isax isax-tick-circle"></i> Mod\xE8le enregistr\xE9\r
      </div>\r
      <button type="button" class="ip-btn ip-btn--primary ip-btn--wide"\r
              [disabled]="saving" (click)="saveModele()">\r
        <i class="isax isax-save-2"></i>\r
        {{ saving ? 'Enregistrement\u2026' : 'Enregistrer le mod\xE8le' }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 Right panel : live preview \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="ip-preview-col">\r
    <div class="ip-preview-head">\r
      <span><i class="isax isax-eye"></i> Aper\xE7u en temps r\xE9el \u2014 mod\xE8le appliqu\xE9 \xE0 toutes les formations</span>\r
      <button type="button" class="ip-btn ip-btn--ghost ip-btn--sm"\r
              [disabled]="downloading" (click)="downloadPreview()">\r
        <i [class]="downloading ? 'isax isax-refresh ip-spin' : 'isax isax-document-download'"></i>\r
        {{ downloading ? 'G\xE9n\xE9ration\u2026' : 'Exporter PDF' }}\r
      </button>\r
    </div>\r
\r
    <!-- Certificate card preview -->\r
    <div class="ip-cert-card" [style.background]="config.bg_couleur">\r
      <div class="ip-cert-card__bar" [style.background]="config.couleur_principale"></div>\r
\r
      <div class="ip-cert-card__header">\r
        <div class="ip-cert-card__logo-wrap">\r
          <img *ngIf="config.logo_url" [src]="config.logo_url" class="ip-cert-card__logo-img"\r
               alt="logo" onerror="this.style.display='none'">\r
          <div *ngIf="!config.logo_url" class="ip-cert-card__logo-mark"\r
               [style.background]="config.couleur_principale">\r
            {{ getInitials(config.entreprise_nom || 'E') }}\r
          </div>\r
        </div>\r
        <div class="ip-cert-card__header-text">\r
          <div class="ip-cert-card__company">{{ config.entreprise_nom || 'Votre Entreprise' }}</div>\r
          <div class="ip-cert-card__company-sub">{{ config.entreprise_sous_titre }}</div>\r
        </div>\r
        <div *ngIf="config.show_numero" class="ip-cert-card__num">N\xB0 CERT-2025-0091</div>\r
      </div>\r
\r
      <div class="ip-cert-card__body">\r
        <div class="ip-cert-card__label">CERTIFICAT DE R\xC9USSITE</div>\r
        <div class="ip-cert-card__name">Moussa Ndiaye</div>\r
        <div class="ip-cert-card__accroche">{{ config.accroche }}</div>\r
        <div class="ip-cert-card__formation" [style.color]="config.couleur_principale">\r
          Cybers\xE9curit\xE9 &amp; protection des donn\xE9es\r
        </div>\r
\r
        <div class="ip-cert-card__stats" *ngIf="config.show_score || config.show_duree">\r
          <div *ngIf="config.show_score" class="ip-cert-card__stat">\r
            <div class="ip-cert-card__stat-val" [style.color]="config.couleur_principale">87%</div>\r
            <div class="ip-cert-card__stat-label">Score obtenu</div>\r
          </div>\r
          <div *ngIf="config.show_score && config.show_duree" class="ip-cert-card__stat-sep"></div>\r
          <div *ngIf="config.show_duree" class="ip-cert-card__stat">\r
            <div class="ip-cert-card__stat-val">8h</div>\r
            <div class="ip-cert-card__stat-label">Dur\xE9e totale</div>\r
          </div>\r
        </div>\r
\r
        <div class="ip-cert-card__sig-row">\r
          <div *ngIf="config.signataire_nom || config.signataire_role" class="ip-cert-card__sig">\r
            <div class="ip-cert-card__sig-line"></div>\r
            <div class="ip-cert-card__sig-name">{{ config.signataire_nom || 'Signataire' }}</div>\r
            <div class="ip-cert-card__sig-role">{{ config.signataire_role }}</div>\r
          </div>\r
          <div *ngIf="config.show_formateur" class="ip-cert-card__sig">\r
            <div class="ip-cert-card__sig-line"></div>\r
            <div class="ip-cert-card__sig-name">Ibrahima Sow</div>\r
            <div class="ip-cert-card__sig-role" [style.color]="config.couleur_principale">\r
              Formateur \xB7 Cybers\xE9curit\xE9\r
            </div>\r
          </div>\r
          <div *ngIf="config.show_qr" class="ip-cert-card__qr">\r
            <i class="isax isax-scan-barcode"></i>\r
          </div>\r
        </div>\r
\r
        <div class="ip-cert-card__validity">\r
          D\xE9livr\xE9 le 15 janvier 2025\r
          <ng-container *ngIf="config.show_date_expiration">\r
            \xB7 Valide jusqu'au 15 janvier 2026 ({{ config.duree_validite }})\r
          </ng-container>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Recently issued -->\r
    <div class="ip-recent-head">CERTIFICATS R\xC9CEMMENT D\xC9LIVR\xC9S</div>\r
    <div class="ip-card">\r
      <div class="table-responsive">\r
        <table class="table ip-table">\r
          <thead>\r
            <tr>\r
              <th>Employ\xE9</th>\r
              <th>Formation</th>\r
              <th>Statut</th>\r
              <th>Actions</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let cert of recentCertificats">\r
              <td>\r
                <div class="ip-user-cell">\r
                  <div class="ip-avatar"\r
                       [style.background]="getAvatarStyle(cert.employe_id).bg"\r
                       [style.color]="getAvatarStyle(cert.employe_id).color">\r
                    {{ getInitials(cert.employe?.name || '') }}\r
                  </div>\r
                  <div>\r
                    <div class="ip-user-name">{{ cert.employe?.prenom }} {{ cert.employe?.nom }}</div>\r
                    <div class="ip-user-sub">{{ cert.date_delivrance | date:'d MMM yyyy' }}</div>\r
                  </div>\r
                </div>\r
              </td>\r
              <td><span class="ip-formation-name">{{ cert.formation?.titre }}</span></td>\r
              <td>\r
                <span class="ip-cert-badge"\r
                      [class.ip-cert-badge--valide]="cert.statut === 'valide'"\r
                      [class.ip-cert-badge--expire]="cert.statut === 'expir\xE9'"\r
                      [class.ip-cert-badge--revoque]="cert.statut === 'r\xE9voqu\xE9'">\r
                  <i class="fa-solid fa-circle"></i>\r
                  {{ cert.statut === 'valide' ? 'D\xE9livr\xE9' : cert.statut === 'expir\xE9' ? 'Expir\xE9' : 'R\xE9voqu\xE9' }}\r
                </span>\r
              </td>\r
              <td>\r
                <div class="ip-actions">\r
                  <button type="button" class="ip-action-btn" title="T\xE9l\xE9charger PDF"\r
                          [disabled]="downloading" (click)="downloadPdf(cert)">\r
                    <i [class]="downloading ? 'isax isax-refresh ip-spin' : 'isax isax-document-download'"></i>\r
                  </button>\r
                </div>\r
              </td>\r
            </tr>\r
            <tr *ngIf="recentCertificats.length === 0">\r
              <td colspan="4" class="ip-empty">\r
                <i class="isax isax-award"></i>\r
                <span>Aucun certificat trouv\xE9</span>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/adminrh/adminrh-certificate-modele/adminrh-certificate-modele.component.scss */\n.ip-page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn i {\n  font-size: 15px;\n}\n.ip-btn--primary {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-btn--ghost {\n  background: #fff;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n}\n.ip-btn--wide {\n  width: 100%;\n  justify-content: center;\n}\n.ip-btn--sm {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.ip-btn[disabled] {\n  opacity: 0.55;\n  cursor: default;\n}\n.ip-customizer-layout {\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  gap: 24px;\n  align-items: flex-start;\n}\n@media (max-width: 900px) {\n  .ip-customizer-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-panel {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.ip-section {\n  padding: 16px 20px;\n  border-bottom: 1px solid #E9ECEF;\n}\n.ip-section:last-child {\n  border-bottom: none;\n}\n.ip-section-head {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1A1A2E;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ip-section-head i {\n  color: #D4AF37;\n  font-size: 14px;\n}\n.ip-field {\n  margin-bottom: 12px;\n}\n.ip-field:last-child {\n  margin-bottom: 0;\n}\n.ip-label {\n  display: block;\n  font-size: 11px;\n  font-weight: 500;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 5px;\n}\n.ip-input {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-palette-row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.ip-palette-swatch {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n  transition: transform 0.12s, border-color 0.12s;\n  padding: 0;\n}\n.ip-palette-swatch--active {\n  border-color: #1A1A2E;\n  transform: scale(1.15);\n}\n.ip-palette-swatch:hover {\n  transform: scale(1.1);\n}\n.ip-color-pick {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 1px solid #E9ECEF;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n}\n.ip-color-pick::-webkit-color-swatch-wrapper {\n  padding: 0;\n  border-radius: 50%;\n}\n.ip-color-pick::-webkit-color-swatch {\n  border-radius: 50%;\n  border: none;\n}\n.ip-toggle-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 9px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-toggle-row:last-child {\n  border-bottom: none;\n}\n.ip-toggle-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-toggle-sub {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 1px;\n}\n.ip-switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.ip-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ip-switch-track {\n  position: absolute;\n  inset: 0;\n  border-radius: 22px;\n  background: #DEE2E6;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.ip-switch-track::before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.ip-switch input:checked + .ip-switch-track {\n  background: #D4AF37;\n}\n.ip-switch input:checked + .ip-switch-track::before {\n  transform: translateX(18px);\n}\n.ip-save-row {\n  padding: 16px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-save-ok {\n  font-size: 12px;\n  color: #059669;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.ip-save-ok i {\n  font-size: 14px;\n}\n.ip-preview-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 14px;\n}\n.ip-preview-head i {\n  font-size: 14px;\n  margin-right: 4px;\n}\n.ip-cert-card {\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n}\n.ip-cert-card__bar {\n  height: 6px;\n}\n.ip-cert-card__header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #E9ECEF;\n}\n.ip-cert-card__logo-wrap {\n  flex-shrink: 0;\n}\n.ip-cert-card__logo-img {\n  width: 36px;\n  height: 36px;\n  object-fit: contain;\n  border-radius: 6px;\n}\n.ip-cert-card__logo-mark {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n}\n.ip-cert-card__header-text {\n  flex: 1;\n  min-width: 0;\n}\n.ip-cert-card__company {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.ip-cert-card__company-sub {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-cert-card__num {\n  font-size: 11px;\n  color: #6C757D;\n  font-family: monospace;\n  white-space: nowrap;\n}\n.ip-cert-card__body {\n  padding: 20px;\n  text-align: center;\n}\n.ip-cert-card__label {\n  font-size: 10px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-bottom: 6px;\n}\n.ip-cert-card__name {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n  margin-bottom: 6px;\n}\n.ip-cert-card__accroche {\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 6px;\n}\n.ip-cert-card__formation {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.ip-cert-card__stats {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 16px;\n}\n.ip-cert-card__stat {\n  text-align: center;\n}\n.ip-cert-card__stat-val {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-cert-card__stat-label {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.ip-cert-card__stat-sep {\n  width: 1px;\n  height: 32px;\n  background: #E9ECEF;\n}\n.ip-cert-card__sig-row {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding-top: 12px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 4px;\n}\n.ip-cert-card__sig {\n  text-align: center;\n}\n.ip-cert-card__sig-line {\n  width: 70px;\n  height: 1px;\n  background: #E9ECEF;\n  margin: 0 auto 4px;\n}\n.ip-cert-card__sig-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-card__sig-role {\n  font-size: 10px;\n  color: #6C757D;\n}\n.ip-cert-card__qr {\n  width: 40px;\n  height: 40px;\n  background: #F8F9FA;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  color: #6C757D;\n}\n.ip-cert-card__validity {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 12px;\n}\n.ip-recent-head {\n  font-size: 10px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 10px;\n}\n.ip-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-table {\n  margin: 0;\n}\n.ip-table thead th {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table tbody td {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.ip-table tbody tr:hover td {\n  background: #FAFBFF;\n}\n.ip-user-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n}\n.ip-user-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-user-sub {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-formation-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 6px;\n}\n.ip-cert-badge i {\n  font-size: 8px;\n}\n.ip-cert-badge--valide {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-cert-badge--expire {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-cert-badge--revoque {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-actions {\n  display: flex;\n  gap: 4px;\n}\n.ip-action-btn {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n}\n.ip-action-btn:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-empty {\n  text-align: center;\n  padding: 40px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty i {\n  font-size: 28px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ip-spin {\n  animation: spin 0.8s linear infinite;\n  display: inline-block;\n}\n/*# sourceMappingURL=adminrh-certificate-modele.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }, { type: CertificatService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhCertificateModeleComponent, { className: "AdminrhCertificateModeleComponent", filePath: "app/features/adminrh/adminrh-certificate-modele/adminrh-certificate-modele.component.ts", lineNumber: 19 });
})();
export {
  AdminrhCertificateModeleComponent
};
//# sourceMappingURL=chunk-22BRL2JL.js.map
