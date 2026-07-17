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
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
  ɵɵproperty,
  ɵɵreference,
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
} from "./chunk-VTSSTHJF.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-certificate-modele/adminrh-certificate-modele.component.ts
function AdminrhCertificateModeleComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 75);
    \u0275\u0275listener("click", function AdminrhCertificateModeleComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.error = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.error, " ");
  }
}
function AdminrhCertificateModeleComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "img", 77);
    \u0275\u0275listener("error", function AdminrhCertificateModeleComponent_div_25_Template_img_error_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLogoError());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 78);
    \u0275\u0275listener("click", function AdminrhCertificateModeleComponent_div_25_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeLogo());
    });
    \u0275\u0275element(3, "i", 79);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.config.logo_url, \u0275\u0275sanitizeUrl);
  }
}
function AdminrhCertificateModeleComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275listener("click", function AdminrhCertificateModeleComponent_div_26_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      \u0275\u0275nextContext();
      const fileInput_r6 = \u0275\u0275reference(29);
      return \u0275\u0275resetView(fileInput_r6.click());
    });
    \u0275\u0275element(1, "i", 81);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Cliquez pour uploader un logo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5, "PNG, JPG, SVG (max 2MB)");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhCertificateModeleComponent_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function AdminrhCertificateModeleComponent_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      \u0275\u0275nextContext();
      const fileInput_r6 = \u0275\u0275reference(29);
      return \u0275\u0275resetView(fileInput_r6.click());
    });
    \u0275\u0275element(1, "i", 83);
    \u0275\u0275text(2, " Changer le logo ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCertificateModeleComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275element(1, "span", 85);
    \u0275\u0275text(2, " Upload en cours... ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCertificateModeleComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275element(1, "i", 87);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.logoUploadError, " ");
  }
}
function AdminrhCertificateModeleComponent_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function AdminrhCertificateModeleComponent_button_36_Template_button_click_0_listener() {
      const c_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setPalette(c_r9));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", c_r9);
    \u0275\u0275classProp("ip-palette-swatch--active", ctx_r2.config.couleur_principale === c_r9);
  }
}
function AdminrhCertificateModeleComponent_div_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275text(2, " Mod\xE8le enregistr\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCertificateModeleComponent_img_142_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 91);
    \u0275\u0275listener("error", function AdminrhCertificateModeleComponent_img_142_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPreviewLogoError());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r2.config.logo_url, \u0275\u0275sanitizeUrl);
  }
}
function AdminrhCertificateModeleComponent_div_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", ctx_r2.config.couleur_principale);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getInitials(ctx_r2.config.entreprise_nom || "E"), " ");
  }
}
function AdminrhCertificateModeleComponent_div_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275text(1, "N\xB0 CERT-2025-0091");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCertificateModeleComponent_div_159_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "div", 98);
    \u0275\u0275text(2, "87%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 99);
    \u0275\u0275text(4, "Score obtenu");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r2.config.couleur_principale);
  }
}
function AdminrhCertificateModeleComponent_div_159_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 100);
  }
}
function AdminrhCertificateModeleComponent_div_159_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "div", 98);
    \u0275\u0275text(2, "8h");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 99);
    \u0275\u0275text(4, "Dur\xE9e totale");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhCertificateModeleComponent_div_159_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275template(1, AdminrhCertificateModeleComponent_div_159_div_1_Template, 5, 2, "div", 95)(2, AdminrhCertificateModeleComponent_div_159_div_2_Template, 1, 0, "div", 96)(3, AdminrhCertificateModeleComponent_div_159_div_3_Template, 5, 0, "div", 95);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.config.show_score);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.config.show_score && ctx_r2.config.show_duree);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.config.show_duree);
  }
}
function AdminrhCertificateModeleComponent_div_161_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275element(1, "div", 102);
    \u0275\u0275elementStart(2, "div", 103);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 104);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.config.signataire_nom || "Signataire");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.config.signataire_role);
  }
}
function AdminrhCertificateModeleComponent_div_162_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275element(1, "div", 102);
    \u0275\u0275elementStart(2, "div", 103);
    \u0275\u0275text(3, "Ibrahima Sow");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 104);
    \u0275\u0275text(5, " Formateur \xB7 Cybers\xE9curit\xE9 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r2.config.couleur_principale);
  }
}
function AdminrhCertificateModeleComponent_div_163_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275element(1, "i", 106);
    \u0275\u0275elementEnd();
  }
}
function AdminrhCertificateModeleComponent_ng_container_166_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 Valide jusqu'au 15 janvier 2026 (", ctx_r2.config.duree_validite, ") ");
  }
}
function AdminrhCertificateModeleComponent_tr_183_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 107)(3, "div", 108);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 109);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 110);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td")(12, "span", 111);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "span", 112);
    \u0275\u0275element(16, "i", 113);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "div", 114)(20, "button", 115);
    \u0275\u0275listener("click", function AdminrhCertificateModeleComponent_tr_183_Template_button_click_20_listener() {
      const cert_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.downloadPdf(cert_r12));
    });
    \u0275\u0275element(21, "i");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cert_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r2.getAvatarStyle(cert_r12.employe_id).bg)("color", ctx_r2.getAvatarStyle(cert_r12.employe_id).color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getInitials((cert_r12.employe == null ? null : cert_r12.employe.name) || ""), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", cert_r12.employe == null ? null : cert_r12.employe.prenom, " ", cert_r12.employe == null ? null : cert_r12.employe.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 19, cert_r12.date_delivrance, "d MMM yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(cert_r12.formation == null ? null : cert_r12.formation.titre);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ip-cert-badge--valide", cert_r12.statut === "valide")("ip-cert-badge--expire", cert_r12.statut === "expir\xE9")("ip-cert-badge--revoque", cert_r12.statut === "r\xE9voqu\xE9");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", cert_r12.statut === "valide" ? "D\xE9livr\xE9" : cert_r12.statut === "expir\xE9" ? "Expir\xE9" : "R\xE9voqu\xE9", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.downloading);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.downloading ? "isax isax-refresh ip-spin" : "isax isax-document-download");
  }
}
function AdminrhCertificateModeleComponent_tr_184_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 116);
    \u0275\u0275element(2, "i", 117);
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
  uploadingLogo = false;
  logoUploadError = "";
  previewLogoError = false;
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
            if (this.config.logo_url && !this.config.logo_url.startsWith("http")) {
              const baseUrl = this.apiUrl.replace("/api", "");
              this.config.logo_url = baseUrl + this.config.logo_url;
              console.log("\u2705 Logo URL charg\xE9e:", this.config.logo_url);
            }
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
    const configToSave = __spreadValues({}, this.config);
    if (configToSave.logo_url && configToSave.logo_url.includes("/storage/")) {
      const match = configToSave.logo_url.match(/\/storage\/.+$/);
      if (match) {
        configToSave.logo_url = match[0];
        console.log("\u{1F4BE} Sauvegarde du logo avec URL relative:", configToSave.logo_url);
      }
    }
    const payload = {
      nom: `Mod\xE8le ${this.config.entreprise_nom || "d\xE9faut"}`,
      config: configToSave
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
  onLogoFileSelected(event) {
    const input = event.target;
    if (!input.files || input.files.length === 0)
      return;
    const file = input.files[0];
    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      this.logoUploadError = "Le fichier est trop volumineux (max 2MB)";
      input.value = "";
      return;
    }
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif", "image/svg+xml", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      this.logoUploadError = "Format non support\xE9. Utilisez PNG, JPG, GIF, SVG ou WebP";
      input.value = "";
      return;
    }
    this.uploadingLogo = true;
    this.logoUploadError = "";
    const formData = new FormData();
    formData.append("logo", file);
    formData.append("entreprise_id", this.entrepriseId.toString());
    this.http.post(`${this.apiUrl}/modeles-certificat/upload-logo`, formData).subscribe({
      next: (res) => {
        console.log("\u{1F4E6} R\xE9ponse upload logo:", res);
        if (res.success && res.url) {
          if (res.url.startsWith("http://") || res.url.startsWith("https://")) {
            this.config.logo_url = res.url;
          } else {
            const baseUrl = this.apiUrl.replace("/api", "");
            this.config.logo_url = baseUrl + res.url;
          }
          console.log("\u2705 Logo URL finale:", this.config.logo_url);
          this.saveModele();
          this.uploadingLogo = false;
          input.value = "";
        } else {
          this.logoUploadError = "R\xE9ponse invalide du serveur";
          this.uploadingLogo = false;
          input.value = "";
        }
      },
      error: (err) => {
        console.error("\u274C Erreur upload logo:", err);
        this.logoUploadError = err?.error?.message || err?.message || "Erreur lors de l'upload du logo";
        this.uploadingLogo = false;
        input.value = "";
      }
    });
  }
  removeLogo() {
    if (confirm("\xCAtes-vous s\xFBr de vouloir supprimer le logo ?")) {
      this.config.logo_url = "";
    }
  }
  onLogoError() {
    console.warn("\u26A0\uFE0F Erreur de chargement du logo upload\xE9");
  }
  onPreviewLogoError() {
    this.previewLogoError = true;
    console.warn("\u26A0\uFE0F Erreur de chargement du logo dans la pr\xE9visualisation");
    console.log("URL du logo:", this.config.logo_url);
  }
  static \u0275fac = function AdminrhCertificateModeleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhCertificateModeleComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(CertificatService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhCertificateModeleComponent, selectors: [["app-adminrh-certificate-modele"]], decls: 185, vars: 56, consts: [["fileInput", ""], ["class", "alert alert-danger alert-dismissible", 4, "ngIf"], [1, "ip-page-head"], [1, "ip-page-head__title"], [1, "ip-page-head__sub"], [1, "ip-customizer-layout"], [1, "ip-panel"], [1, "ip-section"], [1, "ip-section-head"], [1, "isax", "isax-document"], [1, "ip-field"], [1, "ip-label"], ["type", "text", "placeholder", "Ex. TechNova S\xE9n\xE9gal", 1, "ip-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Learning Management System", 1, "ip-input", 3, "ngModelChange", "ngModel"], [1, "ip-logo-upload"], ["class", "ip-logo-preview", 4, "ngIf"], ["class", "ip-upload-zone", 3, "click", 4, "ngIf"], ["type", "button", "class", "ip-btn ip-btn--ghost ip-btn--sm", 3, "click", 4, "ngIf"], ["type", "file", "hidden", "", "accept", "image/png,image/jpeg,image/jpg,image/gif,image/svg+xml,image/webp", 3, "change", "disabled"], ["class", "ip-upload-loading", 4, "ngIf"], ["class", "ip-upload-error", 4, "ngIf"], [1, "ip-palette-row"], ["type", "button", "class", "ip-palette-swatch", 3, "background", "ip-palette-swatch--active", "click", 4, "ngFor", "ngForOf"], ["type", "color", "title", "Couleur personnalis\xE9e", 1, "ip-color-pick", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "ip-palette-swatch", 2, "background", "#FAFBFF", "border", "1px solid #dee2e6", 3, "click"], ["type", "button", 1, "ip-palette-swatch", 2, "background", "#fff", "border", "1px solid #dee2e6", 3, "click"], ["type", "button", 1, "ip-palette-swatch", 2, "background", "#F0FFF4", "border", "1px solid #dee2e6", 3, "click"], ["type", "button", 1, "ip-palette-swatch", 2, "background", "#EFF6FF", "border", "1px solid #dee2e6", 3, "click"], [1, "isax", "isax-text"], ["type", "text", "placeholder", "a compl\xE9t\xE9 avec succ\xE8s la formation", 1, "ip-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Pr\xE9nom Nom", 1, "ip-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Responsable RH, TechNova S\xE9n\xE9gal", 1, "ip-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "1 an", 1, "ip-input", 3, "ngModelChange", "ngModel"], [1, "isax", "isax-shield-tick"], [1, "ip-toggle-row"], [1, "ip-toggle-label"], [1, "ip-toggle-sub"], [1, "ip-switch"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "ip-switch-track"], [1, "ip-save-row"], ["class", "ip-save-ok", 4, "ngIf"], ["type", "button", 1, "ip-btn", "ip-btn--primary", "ip-btn--wide", 3, "click", "disabled"], [1, "isax", "isax-save-2"], [1, "ip-preview-col"], [1, "ip-preview-head"], [1, "isax", "isax-eye"], ["type", "button", 1, "ip-btn", "ip-btn--ghost", "ip-btn--sm", 3, "click", "disabled"], [1, "ip-cert-card"], [1, "ip-cert-card__bar"], [1, "ip-cert-card__header"], [1, "ip-cert-card__logo-wrap"], ["class", "ip-cert-card__logo-img", "alt", "logo", 3, "src", "error", 4, "ngIf"], ["class", "ip-cert-card__logo-mark", 3, "background", 4, "ngIf"], [1, "ip-cert-card__header-text"], [1, "ip-cert-card__company"], [1, "ip-cert-card__company-sub"], ["class", "ip-cert-card__num", 4, "ngIf"], [1, "ip-cert-card__body"], [1, "ip-cert-card__label"], [1, "ip-cert-card__name"], [1, "ip-cert-card__accroche"], [1, "ip-cert-card__formation"], ["class", "ip-cert-card__stats", 4, "ngIf"], [1, "ip-cert-card__sig-row"], ["class", "ip-cert-card__sig", 4, "ngIf"], ["class", "ip-cert-card__qr", 4, "ngIf"], [1, "ip-cert-card__validity"], [4, "ngIf"], [1, "ip-recent-head"], [1, "ip-card"], [1, "table-responsive"], [1, "table", "ip-table"], [4, "ngFor", "ngForOf"], [1, "alert", "alert-danger", "alert-dismissible"], ["type", "button", 1, "btn-close", 3, "click"], [1, "ip-logo-preview"], ["alt", "Logo", 3, "error", "src"], ["type", "button", "title", "Supprimer le logo", 1, "ip-logo-remove", 3, "click"], [1, "isax", "isax-trash"], [1, "ip-upload-zone", 3, "click"], [1, "isax", "isax-document-upload"], ["type", "button", 1, "ip-btn", "ip-btn--ghost", "ip-btn--sm", 3, "click"], [1, "isax", "isax-edit"], [1, "ip-upload-loading"], [1, "ip-spin"], [1, "ip-upload-error"], [1, "isax", "isax-warning-2"], ["type", "button", 1, "ip-palette-swatch", 3, "click"], [1, "ip-save-ok"], [1, "isax", "isax-tick-circle"], ["alt", "logo", 1, "ip-cert-card__logo-img", 3, "error", "src"], [1, "ip-cert-card__logo-mark"], [1, "ip-cert-card__num"], [1, "ip-cert-card__stats"], ["class", "ip-cert-card__stat", 4, "ngIf"], ["class", "ip-cert-card__stat-sep", 4, "ngIf"], [1, "ip-cert-card__stat"], [1, "ip-cert-card__stat-val"], [1, "ip-cert-card__stat-label"], [1, "ip-cert-card__stat-sep"], [1, "ip-cert-card__sig"], [1, "ip-cert-card__sig-line"], [1, "ip-cert-card__sig-name"], [1, "ip-cert-card__sig-role"], [1, "ip-cert-card__qr"], [1, "isax", "isax-scan-barcode"], [1, "ip-user-cell"], [1, "ip-avatar"], [1, "ip-user-name"], [1, "ip-user-sub"], [1, "ip-formation-name"], [1, "ip-cert-badge"], [1, "fa-solid", "fa-circle"], [1, "ip-actions"], ["type", "button", "title", "T\xE9l\xE9charger PDF", 1, "ip-action-btn", 3, "click", "disabled"], ["colspan", "4", 1, "ip-empty"], [1, "isax", "isax-award"]], template: function AdminrhCertificateModeleComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275template(0, AdminrhCertificateModeleComponent_div_0_Template, 3, 1, "div", 1);
      \u0275\u0275elementStart(1, "div", 2)(2, "div")(3, "h5", 3);
      \u0275\u0275text(4, "Personnalisation du certificat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Configurez le mod\xE8le de certificat appliqu\xE9 \xE0 toutes les formations de votre entreprise");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8);
      \u0275\u0275element(11, "i", 9);
      \u0275\u0275text(12, " Identit\xE9 entreprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 10)(14, "label", 11);
      \u0275\u0275text(15, "Nom de l'entreprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.config.entreprise_nom, $event) || (ctx.config.entreprise_nom = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 10)(18, "label", 11);
      \u0275\u0275text(19, "Sous-titre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.config.entreprise_sous_titre, $event) || (ctx.config.entreprise_sous_titre = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 10)(22, "label", 11);
      \u0275\u0275text(23, "Logo de l'entreprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 14);
      \u0275\u0275template(25, AdminrhCertificateModeleComponent_div_25_Template, 4, 1, "div", 15)(26, AdminrhCertificateModeleComponent_div_26_Template, 6, 0, "div", 16)(27, AdminrhCertificateModeleComponent_button_27_Template, 3, 0, "button", 17);
      \u0275\u0275elementStart(28, "input", 18, 0);
      \u0275\u0275listener("change", function AdminrhCertificateModeleComponent_Template_input_change_28_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLogoFileSelected($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(30, AdminrhCertificateModeleComponent_div_30_Template, 3, 0, "div", 19)(31, AdminrhCertificateModeleComponent_div_31_Template, 3, 1, "div", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 10)(33, "label", 11);
      \u0275\u0275text(34, "Couleur principale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 21);
      \u0275\u0275template(36, AdminrhCertificateModeleComponent_button_36_Template, 1, 4, "button", 22);
      \u0275\u0275elementStart(37, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_37_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.config.couleur_principale, $event) || (ctx.config.couleur_principale = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 10)(39, "label", 11);
      \u0275\u0275text(40, "Couleur de fond du certificat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 21)(42, "button", 24);
      \u0275\u0275listener("click", function AdminrhCertificateModeleComponent_Template_button_click_42_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.config.bg_couleur = "#FAFBFF");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "button", 25);
      \u0275\u0275listener("click", function AdminrhCertificateModeleComponent_Template_button_click_43_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.config.bg_couleur = "#fff");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 26);
      \u0275\u0275listener("click", function AdminrhCertificateModeleComponent_Template_button_click_44_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.config.bg_couleur = "#F0FFF4");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "button", 27);
      \u0275\u0275listener("click", function AdminrhCertificateModeleComponent_Template_button_click_45_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.config.bg_couleur = "#EFF6FF");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_46_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.config.bg_couleur, $event) || (ctx.config.bg_couleur = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "div", 7)(48, "div", 8);
      \u0275\u0275element(49, "i", 28);
      \u0275\u0275text(50, " Textes du certificat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 10)(52, "label", 11);
      \u0275\u0275text(53, "Intitul\xE9 d'accroche");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "input", 29);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_54_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.config.accroche, $event) || (ctx.config.accroche = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 10)(56, "label", 11);
      \u0275\u0275text(57, "Signataire");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_58_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.config.signataire_nom, $event) || (ctx.config.signataire_nom = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 10)(60, "label", 11);
      \u0275\u0275text(61, "R\xF4le du signataire");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_62_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.config.signataire_role, $event) || (ctx.config.signataire_role = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 10)(64, "label", 11);
      \u0275\u0275text(65, "Dur\xE9e de validit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_66_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.config.duree_validite, $event) || (ctx.config.duree_validite = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "div", 7)(68, "div", 8);
      \u0275\u0275element(69, "i", 33);
      \u0275\u0275text(70, " Options & s\xE9curit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 34)(72, "div")(73, "div", 35);
      \u0275\u0275text(74, "Score et dur\xE9e visibles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 36);
      \u0275\u0275text(76, "Affich\xE9s sur le certificat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "label", 37)(78, "input", 38);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_78_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.config.show_score, $event) || (ctx.config.show_score = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(79, "span", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "div", 34)(81, "div")(82, "div", 35);
      \u0275\u0275text(83, "Dur\xE9e totale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 36);
      \u0275\u0275text(85, "Heures de formation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "label", 37)(87, "input", 38);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_87_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.config.show_duree, $event) || (ctx.config.show_duree = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(88, "span", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 34)(90, "div")(91, "div", 35);
      \u0275\u0275text(92, "Nom du formateur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div", 36);
      \u0275\u0275text(94, "Signature du formateur");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "label", 37)(96, "input", 38);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_96_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.config.show_formateur, $event) || (ctx.config.show_formateur = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(97, "span", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div", 34)(99, "div")(100, "div", 35);
      \u0275\u0275text(101, "QR code de v\xE9rification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 36);
      \u0275\u0275text(103, "Lien de validation publique");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "label", 37)(105, "input", 38);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_105_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.config.show_qr, $event) || (ctx.config.show_qr = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(106, "span", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div", 34)(108, "div")(109, "div", 35);
      \u0275\u0275text(110, "Num\xE9ro unique visible");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "div", 36);
      \u0275\u0275text(112, "R\xE9f\xE9rence tra\xE7able");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "label", 37)(114, "input", 38);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_114_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.config.show_numero, $event) || (ctx.config.show_numero = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(115, "span", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "div", 34)(117, "div")(118, "div", 35);
      \u0275\u0275text(119, "Date d'expiration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 36);
      \u0275\u0275text(121, "Valide jusqu'au\u2026");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "label", 37)(123, "input", 38);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhCertificateModeleComponent_Template_input_ngModelChange_123_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.config.show_date_expiration, $event) || (ctx.config.show_date_expiration = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(124, "span", 39);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(125, "div", 40);
      \u0275\u0275template(126, AdminrhCertificateModeleComponent_div_126_Template, 3, 0, "div", 41);
      \u0275\u0275elementStart(127, "button", 42);
      \u0275\u0275listener("click", function AdminrhCertificateModeleComponent_Template_button_click_127_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveModele());
      });
      \u0275\u0275element(128, "i", 43);
      \u0275\u0275text(129);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(130, "div", 44)(131, "div", 45)(132, "span");
      \u0275\u0275element(133, "i", 46);
      \u0275\u0275text(134, " Aper\xE7u en temps r\xE9el \u2014 mod\xE8le appliqu\xE9 \xE0 toutes les formations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "button", 47);
      \u0275\u0275listener("click", function AdminrhCertificateModeleComponent_Template_button_click_135_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.downloadPreview());
      });
      \u0275\u0275element(136, "i");
      \u0275\u0275text(137);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "div", 48);
      \u0275\u0275element(139, "div", 49);
      \u0275\u0275elementStart(140, "div", 50)(141, "div", 51);
      \u0275\u0275template(142, AdminrhCertificateModeleComponent_img_142_Template, 1, 1, "img", 52)(143, AdminrhCertificateModeleComponent_div_143_Template, 2, 3, "div", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div", 54)(145, "div", 55);
      \u0275\u0275text(146);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "div", 56);
      \u0275\u0275text(148);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(149, AdminrhCertificateModeleComponent_div_149_Template, 2, 0, "div", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "div", 58)(151, "div", 59);
      \u0275\u0275text(152, "CERTIFICAT DE R\xC9USSITE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "div", 60);
      \u0275\u0275text(154, "Moussa Ndiaye");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "div", 61);
      \u0275\u0275text(156);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "div", 62);
      \u0275\u0275text(158, " Cybers\xE9curit\xE9 & protection des donn\xE9es ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(159, AdminrhCertificateModeleComponent_div_159_Template, 4, 3, "div", 63);
      \u0275\u0275elementStart(160, "div", 64);
      \u0275\u0275template(161, AdminrhCertificateModeleComponent_div_161_Template, 6, 2, "div", 65)(162, AdminrhCertificateModeleComponent_div_162_Template, 6, 2, "div", 65)(163, AdminrhCertificateModeleComponent_div_163_Template, 2, 0, "div", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "div", 67);
      \u0275\u0275text(165, " D\xE9livr\xE9 le 15 janvier 2025 ");
      \u0275\u0275template(166, AdminrhCertificateModeleComponent_ng_container_166_Template, 2, 1, "ng-container", 68);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(167, "div", 69);
      \u0275\u0275text(168, "CERTIFICATS R\xC9CEMMENT D\xC9LIVR\xC9S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "div", 70)(170, "div", 71)(171, "table", 72)(172, "thead")(173, "tr")(174, "th");
      \u0275\u0275text(175, "Employ\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "th");
      \u0275\u0275text(177, "Formation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "th");
      \u0275\u0275text(179, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "th");
      \u0275\u0275text(181, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(182, "tbody");
      \u0275\u0275template(183, AdminrhCertificateModeleComponent_tr_183_Template, 22, 22, "tr", 73)(184, AdminrhCertificateModeleComponent_tr_184_Template, 5, 0, "tr", 68);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.config.entreprise_nom);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.config.entreprise_sous_titre);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.config.logo_url);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.config.logo_url);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.config.logo_url);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.uploadingLogo);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.uploadingLogo);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.logoUploadError);
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
      \u0275\u0275property("ngIf", ctx.config.logo_url && !ctx.previewLogoError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.config.logo_url || ctx.previewLogoError);
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
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ['\n\n.ip-page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.ip-btn--primary[_ngcontent-%COMP%] {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary[_ngcontent-%COMP%]:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-btn--ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n}\n.ip-btn--wide[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.ip-btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.ip-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.55;\n  cursor: default;\n}\n.ip-customizer-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  gap: 24px;\n  align-items: flex-start;\n}\n@media (max-width: 900px) {\n  .ip-customizer-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-panel[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.ip-section[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid #E9ECEF;\n}\n.ip-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-section-head[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1A1A2E;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ip-section-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #D4AF37;\n  font-size: 14px;\n}\n.ip-field[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.ip-field[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.ip-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 500;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 5px;\n}\n.ip-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-palette-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.ip-palette-swatch[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n  transition: transform 0.12s, border-color 0.12s;\n  padding: 0;\n}\n.ip-palette-swatch--active[_ngcontent-%COMP%] {\n  border-color: #1A1A2E;\n  transform: scale(1.15);\n}\n.ip-palette-swatch[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.ip-color-pick[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 1px solid #E9ECEF;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n}\n.ip-color-pick[_ngcontent-%COMP%]::-webkit-color-swatch-wrapper {\n  padding: 0;\n  border-radius: 50%;\n}\n.ip-color-pick[_ngcontent-%COMP%]::-webkit-color-swatch {\n  border-radius: 50%;\n  border: none;\n}\n.ip-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 9px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-toggle-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ip-toggle-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-toggle-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 1px;\n}\n.ip-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.ip-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ip-switch-track[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 22px;\n  background: #DEE2E6;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.ip-switch-track[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.ip-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ip-switch-track[_ngcontent-%COMP%] {\n  background: #D4AF37;\n}\n.ip-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .ip-switch-track[_ngcontent-%COMP%]::before {\n  transform: translateX(18px);\n}\n.ip-logo-upload[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-logo-preview[_ngcontent-%COMP%] {\n  position: relative;\n  width: fit-content;\n}\n.ip-logo-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  object-fit: contain;\n  border-radius: 10px;\n  border: 1px solid #E9ECEF;\n  background: #F8F9FA;\n}\n.ip-logo-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  width: 24px;\n  height: 24px;\n  background: #DC3545;\n  color: #fff;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.ip-logo-remove[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ip-logo-remove[_ngcontent-%COMP%]:hover {\n  background: rgb(197.9088607595, 34.2911392405, 49.9670886076);\n  transform: scale(1.1);\n}\n.ip-upload-zone[_ngcontent-%COMP%] {\n  border: 2px dashed #E9ECEF;\n  border-radius: 10px;\n  padding: 24px 16px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.15s;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.ip-upload-zone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #6C757D;\n}\n.ip-upload-zone[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-upload-zone[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-upload-zone[_ngcontent-%COMP%]:hover {\n  border-color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-upload-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-upload-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #DC3545;\n  background: #FEE2E2;\n  padding: 6px 10px;\n  border-radius: 6px;\n}\n.ip-upload-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ip-spin[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border: 2px solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ip-save-row[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-save-ok[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #059669;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.ip-save-ok[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ip-preview-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 14px;\n}\n.ip-preview-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-right: 4px;\n}\n.ip-cert-card[_ngcontent-%COMP%] {\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n}\n.ip-cert-card__bar[_ngcontent-%COMP%] {\n  height: 6px;\n}\n.ip-cert-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #E9ECEF;\n}\n.ip-cert-card__logo-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.ip-cert-card__logo-img[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  object-fit: contain;\n  border-radius: 6px;\n}\n.ip-cert-card__logo-mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n}\n.ip-cert-card__header-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ip-cert-card__company[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.ip-cert-card__company-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-cert-card__num[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  font-family: monospace;\n  white-space: nowrap;\n}\n.ip-cert-card__body[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n}\n.ip-cert-card__label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-bottom: 6px;\n}\n.ip-cert-card__name[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n  margin-bottom: 6px;\n}\n.ip-cert-card__accroche[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 6px;\n}\n.ip-cert-card__formation[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.ip-cert-card__stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 16px;\n}\n.ip-cert-card__stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ip-cert-card__stat-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-cert-card__stat-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.ip-cert-card__stat-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: #E9ECEF;\n}\n.ip-cert-card__sig-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding-top: 12px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 4px;\n}\n.ip-cert-card__sig[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ip-cert-card__sig-line[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 1px;\n  background: #E9ECEF;\n  margin: 0 auto 4px;\n}\n.ip-cert-card__sig-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-card__sig-role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n}\n.ip-cert-card__qr[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #F8F9FA;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  color: #6C757D;\n}\n.ip-cert-card__validity[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 12px;\n}\n.ip-recent-head[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 10px;\n}\n.ip-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-table[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ip-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #FAFBFF;\n}\n.ip-user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n}\n.ip-user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-user-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-formation-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 6px;\n}\n.ip-cert-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n.ip-cert-badge--valide[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-cert-badge--expire[_ngcontent-%COMP%] {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-cert-badge--revoque[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.ip-action-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n}\n.ip-action-btn[_ngcontent-%COMP%]:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ip-spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  display: inline-block;\n}\n/*# sourceMappingURL=adminrh-certificate-modele.component.css.map */'] });
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
        <label class="ip-label">Logo de l'entreprise</label>\r
        <div class="ip-logo-upload">\r
          <!-- Preview du logo actuel -->\r
          <div class="ip-logo-preview" *ngIf="config.logo_url">\r
            <img [src]="config.logo_url" alt="Logo" (error)="onLogoError()">\r
            <button type="button" class="ip-logo-remove" (click)="removeLogo()" title="Supprimer le logo">\r
              <i class="isax isax-trash"></i>\r
            </button>\r
          </div>\r
\r
          <!-- Zone d'upload -->\r
          <div class="ip-upload-zone" *ngIf="!config.logo_url" (click)="fileInput.click()">\r
            <i class="isax isax-document-upload"></i>\r
            <span>Cliquez pour uploader un logo</span>\r
            <small>PNG, JPG, SVG (max 2MB)</small>\r
          </div>\r
\r
          <!-- Bouton de changement si un logo existe -->\r
          <button type="button" class="ip-btn ip-btn--ghost ip-btn--sm"\r
                  *ngIf="config.logo_url" (click)="fileInput.click()">\r
            <i class="isax isax-edit"></i> Changer le logo\r
          </button>\r
\r
          <input #fileInput type="file" hidden accept="image/png,image/jpeg,image/jpg,image/gif,image/svg+xml,image/webp"\r
                 (change)="onLogoFileSelected($event)" [disabled]="uploadingLogo">\r
\r
          <!-- Indicateur de chargement -->\r
          <div class="ip-upload-loading" *ngIf="uploadingLogo">\r
            <span class="ip-spin"></span> Upload en cours...\r
          </div>\r
\r
          <!-- Message d'erreur -->\r
          <div class="ip-upload-error" *ngIf="logoUploadError">\r
            <i class="isax isax-warning-2"></i> {{ logoUploadError }}\r
          </div>\r
        </div>\r
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
          <img *ngIf="config.logo_url && !previewLogoError"\r
               [src]="config.logo_url"\r
               class="ip-cert-card__logo-img"\r
               alt="logo"\r
               (error)="onPreviewLogoError()">\r
          <div *ngIf="!config.logo_url || previewLogoError"\r
               class="ip-cert-card__logo-mark"\r
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
`, styles: ['/* src/app/features/adminrh/adminrh-certificate-modele/adminrh-certificate-modele.component.scss */\n.ip-page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ip-btn i {\n  font-size: 15px;\n}\n.ip-btn--primary {\n  background: #D4AF37;\n  color: #fff;\n}\n.ip-btn--primary:hover {\n  background: rgb(186.1728395062, 151.7308641975, 40.0271604938);\n  color: #fff;\n}\n.ip-btn--ghost {\n  background: #fff;\n  color: #6C757D;\n  border: 1px solid #E9ECEF;\n}\n.ip-btn--ghost:hover {\n  background: #F8F9FA;\n  color: #1A1A2E;\n}\n.ip-btn--wide {\n  width: 100%;\n  justify-content: center;\n}\n.ip-btn--sm {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.ip-btn[disabled] {\n  opacity: 0.55;\n  cursor: default;\n}\n.ip-customizer-layout {\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  gap: 24px;\n  align-items: flex-start;\n}\n@media (max-width: 900px) {\n  .ip-customizer-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-panel {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.ip-section {\n  padding: 16px 20px;\n  border-bottom: 1px solid #E9ECEF;\n}\n.ip-section:last-child {\n  border-bottom: none;\n}\n.ip-section-head {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1A1A2E;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ip-section-head i {\n  color: #D4AF37;\n  font-size: 14px;\n}\n.ip-field {\n  margin-bottom: 12px;\n}\n.ip-field:last-child {\n  margin-bottom: 0;\n}\n.ip-label {\n  display: block;\n  font-size: 11px;\n  font-weight: 500;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 5px;\n}\n.ip-input {\n  width: 100%;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1A1A2E;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.ip-input:focus {\n  outline: none;\n  border-color: #D4AF37;\n  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);\n}\n.ip-palette-row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.ip-palette-swatch {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n  transition: transform 0.12s, border-color 0.12s;\n  padding: 0;\n}\n.ip-palette-swatch--active {\n  border-color: #1A1A2E;\n  transform: scale(1.15);\n}\n.ip-palette-swatch:hover {\n  transform: scale(1.1);\n}\n.ip-color-pick {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 1px solid #E9ECEF;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n}\n.ip-color-pick::-webkit-color-swatch-wrapper {\n  padding: 0;\n  border-radius: 50%;\n}\n.ip-color-pick::-webkit-color-swatch {\n  border-radius: 50%;\n  border: none;\n}\n.ip-toggle-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 9px 0;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n}\n.ip-toggle-row:last-child {\n  border-bottom: none;\n}\n.ip-toggle-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-toggle-sub {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 1px;\n}\n.ip-switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.ip-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ip-switch-track {\n  position: absolute;\n  inset: 0;\n  border-radius: 22px;\n  background: #DEE2E6;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.ip-switch-track::before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.ip-switch input:checked + .ip-switch-track {\n  background: #D4AF37;\n}\n.ip-switch input:checked + .ip-switch-track::before {\n  transform: translateX(18px);\n}\n.ip-logo-upload {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-logo-preview {\n  position: relative;\n  width: fit-content;\n}\n.ip-logo-preview img {\n  width: 100px;\n  height: 100px;\n  object-fit: contain;\n  border-radius: 10px;\n  border: 1px solid #E9ECEF;\n  background: #F8F9FA;\n}\n.ip-logo-remove {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  width: 24px;\n  height: 24px;\n  background: #DC3545;\n  color: #fff;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.ip-logo-remove i {\n  font-size: 12px;\n}\n.ip-logo-remove:hover {\n  background: rgb(197.9088607595, 34.2911392405, 49.9670886076);\n  transform: scale(1.1);\n}\n.ip-upload-zone {\n  border: 2px dashed #E9ECEF;\n  border-radius: 10px;\n  padding: 24px 16px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.15s;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.ip-upload-zone i {\n  font-size: 32px;\n  color: #6C757D;\n}\n.ip-upload-zone span {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-upload-zone small {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-upload-zone:hover {\n  border-color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-upload-loading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #6C757D;\n}\n.ip-upload-error {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #DC3545;\n  background: #FEE2E2;\n  padding: 6px 10px;\n  border-radius: 6px;\n}\n.ip-upload-error i {\n  font-size: 14px;\n}\n.ip-spin {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border: 2px solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ip-save-row {\n  padding: 16px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ip-save-ok {\n  font-size: 12px;\n  color: #059669;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.ip-save-ok i {\n  font-size: 14px;\n}\n.ip-preview-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 14px;\n}\n.ip-preview-head i {\n  font-size: 14px;\n  margin-right: 4px;\n}\n.ip-cert-card {\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n}\n.ip-cert-card__bar {\n  height: 6px;\n}\n.ip-cert-card__header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #E9ECEF;\n}\n.ip-cert-card__logo-wrap {\n  flex-shrink: 0;\n}\n.ip-cert-card__logo-img {\n  width: 36px;\n  height: 36px;\n  object-fit: contain;\n  border-radius: 6px;\n}\n.ip-cert-card__logo-mark {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n}\n.ip-cert-card__header-text {\n  flex: 1;\n  min-width: 0;\n}\n.ip-cert-card__company {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1A1A2E;\n}\n.ip-cert-card__company-sub {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-cert-card__num {\n  font-size: 11px;\n  color: #6C757D;\n  font-family: monospace;\n  white-space: nowrap;\n}\n.ip-cert-card__body {\n  padding: 20px;\n  text-align: center;\n}\n.ip-cert-card__label {\n  font-size: 10px;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-bottom: 6px;\n}\n.ip-cert-card__name {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1A1A2E;\n  margin-bottom: 6px;\n}\n.ip-cert-card__accroche {\n  font-size: 12px;\n  color: #6C757D;\n  margin-bottom: 6px;\n}\n.ip-cert-card__formation {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.ip-cert-card__stats {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 16px;\n}\n.ip-cert-card__stat {\n  text-align: center;\n}\n.ip-cert-card__stat-val {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1A1A2E;\n}\n.ip-cert-card__stat-label {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 2px;\n}\n.ip-cert-card__stat-sep {\n  width: 1px;\n  height: 32px;\n  background: #E9ECEF;\n}\n.ip-cert-card__sig-row {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding-top: 12px;\n  border-top: 1px solid #E9ECEF;\n  margin-top: 4px;\n}\n.ip-cert-card__sig {\n  text-align: center;\n}\n.ip-cert-card__sig-line {\n  width: 70px;\n  height: 1px;\n  background: #E9ECEF;\n  margin: 0 auto 4px;\n}\n.ip-cert-card__sig-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-card__sig-role {\n  font-size: 10px;\n  color: #6C757D;\n}\n.ip-cert-card__qr {\n  width: 40px;\n  height: 40px;\n  background: #F8F9FA;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  color: #6C757D;\n}\n.ip-cert-card__validity {\n  font-size: 10px;\n  color: #6C757D;\n  margin-top: 12px;\n}\n.ip-recent-head {\n  font-size: 10px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 10px;\n}\n.ip-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.ip-table {\n  margin: 0;\n}\n.ip-table thead th {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table tbody td {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.ip-table tbody tr:hover td {\n  background: #FAFBFF;\n}\n.ip-user-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n}\n.ip-user-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-user-sub {\n  font-size: 11px;\n  color: #6C757D;\n}\n.ip-formation-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-cert-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 6px;\n}\n.ip-cert-badge i {\n  font-size: 8px;\n}\n.ip-cert-badge--valide {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-cert-badge--expire {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-cert-badge--revoque {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-actions {\n  display: flex;\n  gap: 4px;\n}\n.ip-action-btn {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.12s;\n}\n.ip-action-btn:hover {\n  border-color: #D4AF37;\n  color: #D4AF37;\n  background: #FDF8E7;\n}\n.ip-empty {\n  text-align: center;\n  padding: 40px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty i {\n  font-size: 28px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ip-spin {\n  animation: spin 0.8s linear infinite;\n  display: inline-block;\n}\n/*# sourceMappingURL=adminrh-certificate-modele.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }, { type: CertificatService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhCertificateModeleComponent, { className: "AdminrhCertificateModeleComponent", filePath: "app/features/adminrh/adminrh-certificate-modele/adminrh-certificate-modele.component.ts", lineNumber: 19 });
})();
export {
  AdminrhCertificateModeleComponent
};
//# sourceMappingURL=chunk-3CUOQFBG.js.map
