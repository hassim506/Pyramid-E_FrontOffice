import {
  RapportExportService
} from "./chunk-MHSMBBCC.js";
import "./chunk-ESOPKBER.js";
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
  HttpClient,
  HttpHeaders
} from "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  NgForOf
} from "./chunk-5DIP3EXV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  catchError,
  forkJoin,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTSSTHJF.js";
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-statements/adminrh-statements.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.label;
var _forTrack2 = ($index, $item) => $item.nom;
function AdminrhStatementsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 10);
  }
}
function AdminrhStatementsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function AdminrhStatementsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMsg, " ");
  }
}
function AdminrhStatementsComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function AdminrhStatementsComponent_For_26_Template_div_click_0_listener() {
      const t_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectType(t_r3.key));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61)(4, "div", 62);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 63);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r0.selectedType === t_r3.key);
    \u0275\u0275attribute("data-color", t_r3.color);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("rp-type-icon rp-type-icon--", t_r3.color));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", t_r3.icon));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.sub);
  }
}
function AdminrhStatementsComponent_option_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    \u0275\u0275property("value", f_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r4.label);
  }
}
function AdminrhStatementsComponent_For_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 65)(2, "div", 66);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 67);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 68);
    \u0275\u0275listener("click", function AdminrhStatementsComponent_For_85_Template_button_click_6_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      return \u0275\u0275resetView(s_r6.on = !s_r6.on);
    });
    \u0275\u0275element(7, "span", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r6.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r6.sub);
    \u0275\u0275advance();
    \u0275\u0275classProp("on", s_r6.on);
  }
}
function AdminrhStatementsComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "div", 70);
    \u0275\u0275elementEnd();
  }
}
function AdminrhStatementsComponent_Conditional_96_Conditional_18_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "span", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 81);
    \u0275\u0275element(4, "div", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 83);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("title", f_r7.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r7.label);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", f_r7.pct, "%");
    \u0275\u0275classProp("rp-bar-fill--ok", f_r7.pct >= 60)("rp-bar-fill--ko", f_r7.pct < 60);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r7.pct, "%");
  }
}
function AdminrhStatementsComponent_Conditional_96_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77);
    \u0275\u0275element(2, "i", 78);
    \u0275\u0275text(3, " Par formation ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, AdminrhStatementsComponent_Conditional_96_Conditional_18_For_5_Template, 7, 9, "div", 79, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.formations);
  }
}
function AdminrhStatementsComponent_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 72)(3, "div", 73)(4, "div", 74);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 75);
    \u0275\u0275text(7, "Compl\xE9tion");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 73)(9, "div", 74);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 75);
    \u0275\u0275text(12, "Certifi\xE9s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 73)(14, "div", 74);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 75);
    \u0275\u0275text(17, "En difficult\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(18, AdminrhStatementsComponent_Conditional_96_Conditional_18_Template, 6, 0, "div", 76);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Progression \xB7 ", ctx_r0.getEntrepriseName());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.stats.completion, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.stats.certifies);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.stats.difficulte);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.formations.length ? 18 : -1);
  }
}
function AdminrhStatementsComponent_For_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div");
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 84)(4, "div", 85);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 86);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 87);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 88);
    \u0275\u0275listener("click", function AdminrhStatementsComponent_For_128_Template_button_click_10_listener() {
      const r_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.downloadRecent(r_r9));
    });
    \u0275\u0275element(11, "i", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("rp-hist-icon rp-hist-icon--", r_r9.format));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", ctx_r0.getFormatIcon(r_r9.format)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r9.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.meta);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.date);
  }
}
var AdminrhStatementsComponent = class _AdminrhStatementsComponent {
  http;
  authService;
  exportSvc;
  currentUser;
  // Type sélectionné
  selectedType = "progression";
  types = [
    { key: "progression", icon: "isax-chart-2", color: "green", label: "Progression", sub: "Avancement des employ\xE9s" },
    { key: "certifications", icon: "isax-medal", color: "gold", label: "Certifications", sub: "Obtenus & expirations" },
    { key: "sessions", icon: "isax-calendar-1", color: "orange", label: "Sessions", sub: "Pr\xE9sences & participation" },
    { key: "quiz", icon: "isax-award", color: "purple", label: "Quiz & scores", sub: "R\xE9sultats des \xE9valuations" },
    { key: "demandes", icon: "isax-document-text", color: "blue", label: "Demandes", sub: "Formation & parcours" },
    { key: "bilan", icon: "isax-receipt-item", color: "gray", label: "Bilan RH global", sub: "Synth\xE8se compl\xE8te" }
  ];
  // Filtres
  periode = "trimestre";
  employes = "tous";
  format = "pdf";
  formation = "toutes";
  destinataire = "";
  // Options dynamiques du select formation
  formationOptions = [];
  // Planification
  schedules = [
    { label: "Rapport hebdo progression", sub: "Chaque lundi \xB7 r\xE9sum\xE9 de la semaine", on: true },
    { label: "Bilan mensuel complet", sub: "1er du mois \xB7 envoy\xE9 \xE0 la direction", on: true },
    { label: "Alerte inactivit\xE9", sub: "Si un employ\xE9 est inactif >7j", on: false }
  ];
  // Preview stats
  stats = { completion: 0, certifies: 0, difficulte: 0 };
  formations = [];
  loading = false;
  generating = false;
  successMsg = "";
  // Rapports récents (simulés)
  recents = [
    { nom: "Progression T1 2025", meta: "Toutes formations \xB7 PDF", format: "pdf", date: "15 jan." },
    { nom: "Certifications d\xE9c. 2024", meta: "Toutes formations \xB7 Excel", format: "excel", date: "1 jan." },
    { nom: "Sessions nov. 2024", meta: "Pr\xE9sences & dur\xE9es \xB7 CSV", format: "csv", date: "1 d\xE9c." }
  ];
  // Données brutes chargées depuis l'API
  rawUsers = [];
  rawCerts = [];
  rawFmts = [];
  rawSessions = [];
  rawQuizzes = [];
  rawDemandes = [];
  constructor(http, authService, exportSvc) {
    this.http = http;
    this.authService = authService;
    this.exportSvc = exportSvc;
  }
  get headers() {
    const token = localStorage.getItem("pyramide_token");
    return new HttpHeaders({ "Authorization": `Bearer ${token}`, "Content-Type": "application/json" });
  }
  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.loadPreview();
  }
  loadPreview() {
    this.loading = true;
    forkJoin({
      users: this.http.get(`${environment.apiUrl}/mes-utilisateurs-rh`, { headers: this.headers }).pipe(catchError(() => of({ users: [] }))),
      certs: this.http.get(`${environment.apiUrl}/certificats`, { headers: this.headers }).pipe(catchError(() => of([]))),
      fmts: this.http.get(`${environment.apiUrl}/adminrh/formations`, { headers: this.headers }).pipe(catchError(() => of({ formations: [] }))),
      sessions: this.http.get(`${environment.apiUrl}/adminrh/sessions`, { headers: this.headers }).pipe(catchError(() => of({ sessions: [] }))),
      quizzes: this.http.get(`${environment.apiUrl}/quizzes`, { headers: this.headers }).pipe(catchError(() => of([]))),
      demandes: this.http.get(`${environment.apiUrl}/demandes-formation`, { headers: this.headers }).pipe(catchError(() => of({ demandes: [] })))
    }).subscribe({
      next: ({ users, certs, fmts, sessions, quizzes, demandes }) => {
        this.rawUsers = users.users || users.data || [];
        this.rawCerts = Array.isArray(certs) ? certs : certs.certificats || certs.data || [];
        this.rawFmts = fmts.formations || fmts.data || [];
        this.rawSessions = sessions.sessions || sessions.data || [];
        this.rawQuizzes = Array.isArray(quizzes) ? quizzes : quizzes.quizzes || quizzes.data || [];
        this.rawDemandes = demandes.demandes || demandes.data || (Array.isArray(demandes) ? demandes : []);
        this.stats.certifies = this.rawCerts.length;
        this.stats.difficulte = this.rawUsers.filter((u) => !u.est_actif && u.statut !== 1).length;
        this.stats.completion = this.rawFmts.length ? Math.round(this.rawFmts.reduce((s, f) => s + (f.taux_completion ?? 0), 0) / this.rawFmts.length) : 0;
        this.formations = this.rawFmts.slice(0, 4).map((f) => ({
          label: f.titre || f.title || "\u2014",
          pct: f.taux_completion ?? 0
        }));
        this.formationOptions = this.rawFmts.map((f) => ({
          value: f.titre || f.title || "",
          label: f.titre || f.title || "\u2014"
        }));
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  getEntrepriseName() {
    return this.currentUser?.entreprise?.nom || this.currentUser?.entreprise_nom || "votre entreprise";
  }
  selectType(key) {
    this.selectedType = key;
  }
  generate() {
    this.generating = true;
    this.successMsg = "";
    setTimeout(() => {
      this.generating = false;
      this.doExport(this.format);
      const label = this.types.find((t) => t.key === this.selectedType)?.label ?? this.selectedType;
      this.successMsg = `Rapport \xAB ${label} \xBB g\xE9n\xE9r\xE9 en ${this.format.toUpperCase()} \u2014 t\xE9l\xE9chargement lanc\xE9.`;
      setTimeout(() => {
        this.successMsg = "";
      }, 4e3);
    }, 400);
  }
  exportQuick(fmt) {
    this.doExport(fmt);
    this.successMsg = `Export ${fmt.toUpperCase()} lanc\xE9.`;
    setTimeout(() => {
      this.successMsg = "";
    }, 3e3);
  }
  doExport(fmt) {
    const entreprise = this.getEntrepriseName();
    const label = this.types.find((t) => t.key === this.selectedType)?.label ?? this.selectedType;
    const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const filename = `rapport-${this.selectedType}-${this.periode}-${date}`;
    const pdfTitle = `Rapport RH \u2014 ${label} \u2014 ${entreprise} \u2014 ${this.periodeLabel}`;
    if (fmt === "csv") {
      this.exportSvc.exportCsv(this.buildRows(), filename);
    } else if (fmt === "excel") {
      this.exportSvc.exportExcel(this.buildRows(), filename);
    } else {
      if (this.selectedType === "bilan") {
        this.exportSvc.exportPdf(pdfTitle, [
          { heading: "Employ\xE9s", rows: this.buildUserRows() },
          { heading: "Formations", rows: this.buildProgressionRows() },
          { heading: "Certifications", rows: this.buildCertRows() },
          { heading: "Sessions", rows: this.buildSessionRows() },
          { heading: "Quiz", rows: this.buildQuizRows() }
        ], filename);
      } else {
        this.exportSvc.exportPdf(pdfTitle, [
          { heading: label, rows: this.buildRows() }
        ], filename);
      }
    }
  }
  // ── Sélecteur de lignes selon le type ────────────────────────────
  buildRows() {
    switch (this.selectedType) {
      case "progression":
        return this.buildProgressionRows();
      case "certifications":
        return this.buildCertRows();
      case "sessions":
        return this.buildSessionRows();
      case "quiz":
        return this.buildQuizRows();
      case "demandes":
        return this.buildDemandesRows();
      case "bilan":
        return this.buildUserRows();
      default:
        return this.buildUserRows();
    }
  }
  // ── Constructeurs de lignes par type ─────────────────────────────
  buildUserRows() {
    let data = [...this.rawUsers];
    if (this.employes === "actifs") {
      data = data.filter((u) => u.statut === 1 || u.est_actif === true);
    }
    return data.map((u) => ({
      "Nom": u.name || `${u.prenom ?? ""} ${u.nom ?? ""}`.trim() || "\u2014",
      "Email": u.email || "\u2014",
      "R\xF4le": u.role?.name || u.role || "\u2014",
      "Direction": u.direction || "\u2014",
      "Matricule": u.matricule || "\u2014",
      "Statut": u.statut === 1 || u.est_actif ? "Actif" : "Inactif",
      "Inscrit le": u.created_at ? new Date(u.created_at).toLocaleDateString("fr-FR") : "\u2014"
    }));
  }
  buildProgressionRows() {
    let data = [...this.rawFmts];
    if (this.formation !== "toutes" && this.formation) {
      data = data.filter((f) => (f.titre || f.title) === this.formation);
    }
    const threshold = this.getDateThreshold();
    if (threshold) {
      data = data.filter((f) => !f.created_at || new Date(f.created_at) >= threshold);
    }
    return data.map((f) => ({
      "Formation": f.titre || f.title || "\u2014",
      "Cat\xE9gorie": f.categorie?.nom || "\u2014",
      "Compl\xE9tion": `${f.taux_completion ?? 0}%`,
      "Inscrits": f.nb_participants || f.nb_inscrits || 0,
      "Dur\xE9e": f.duree_totale ? `${Math.round(f.duree_totale / 60)}h` : "\u2014",
      "Publi\xE9": f.est_publie ? "Oui" : "Non"
    }));
  }
  buildCertRows() {
    let data = [...this.rawCerts];
    const threshold = this.getDateThreshold();
    if (threshold) {
      data = data.filter((c) => !c.date_emission || new Date(c.date_emission) >= threshold);
    }
    if (this.employes === "actifs") {
      data = data.filter((c) => !c.user || c.user?.statut === 1 || c.user?.est_actif === true);
    }
    if (this.formation !== "toutes" && this.formation) {
      data = data.filter((c) => (c.formation_titre || c.formation?.titre) === this.formation);
    }
    return data.map((c) => ({
      "Employ\xE9": c.employe_nom || c.user?.name || c.nom_employe || "\u2014",
      "Formation": c.formation_titre || c.formation?.titre || "\u2014",
      "D\xE9livr\xE9 le": c.date_emission ? new Date(c.date_emission).toLocaleDateString("fr-FR") : "\u2014",
      "Expiration": c.date_expiration ? new Date(c.date_expiration).toLocaleDateString("fr-FR") : "N/A",
      "Statut": c.date_expiration && new Date(c.date_expiration) < /* @__PURE__ */ new Date() ? "Expir\xE9" : "Valide"
    }));
  }
  buildSessionRows() {
    let data = [...this.rawSessions];
    const threshold = this.getDateThreshold();
    if (threshold) {
      data = data.filter((s) => !s.date_debut || new Date(s.date_debut) >= threshold);
    }
    if (this.formation !== "toutes" && this.formation) {
      data = data.filter((s) => (s.formation?.titre || s.formation_titre) === this.formation);
    }
    return data.map((s) => ({
      "Titre": s.titre || "\u2014",
      "Formation": s.formation?.titre || s.formation_titre || "\u2014",
      "Type": s.type || "\u2014",
      "Statut": s.statut || "\u2014",
      "Date d\xE9but": s.date_debut ? new Date(s.date_debut).toLocaleDateString("fr-FR") : "\u2014",
      "Date fin": s.date_fin ? new Date(s.date_fin).toLocaleDateString("fr-FR") : "\u2014",
      "Inscrits": s.nombre_inscrits || 0,
      "Capacit\xE9": s.capacite_max || 0
    }));
  }
  buildQuizRows() {
    let data = [...this.rawQuizzes];
    if (this.formation !== "toutes" && this.formation) {
      data = data.filter((q) => (q.formation?.titre || q.formation_titre) === this.formation);
    }
    return data.map((q) => ({
      "Quiz": q.titre || "\u2014",
      "Formation": q.formation?.titre || q.formation_titre || "\u2014",
      "Questions": q.nb_questions || q.questions?.length || 0,
      "Score min": q.score_minimum != null ? `${q.score_minimum}%` : "\u2014",
      "Dur\xE9e (min)": q.duree_minutes || "\u2014",
      "Statut": q.is_active ? "Actif" : "Inactif"
    }));
  }
  buildDemandesRows() {
    let data = [...this.rawDemandes];
    const threshold = this.getDateThreshold();
    if (threshold) {
      data = data.filter((d) => !d.created_at || new Date(d.created_at) >= threshold);
    }
    if (this.formation !== "toutes" && this.formation) {
      data = data.filter((d) => d.formation?.titre === this.formation);
    }
    return data.map((d) => {
      const nom = d.employe ? `${d.employe.prenom ?? ""} ${d.employe.nom ?? d.employe.name ?? ""}`.trim() || d.employe.name || "\u2014" : "\u2014";
      const email = d.employe?.email || "\u2014";
      const objet = d.formation?.titre || d.catalogue?.titre || d.parcours?.nom || d.session_formation?.titre || "\u2014";
      return {
        "Employ\xE9": nom,
        "Email": email,
        "Type": d.type_demande || "\u2014",
        "Objet": objet,
        "Statut": d.statut_display || d.statut || "\u2014",
        "Priorit\xE9": d.priorite_display || d.priorite || "\u2014",
        "Valid\xE9 par": d.validee_par?.name || "\u2014",
        "Date demande": d.created_at ? new Date(d.created_at).toLocaleDateString("fr-FR") : "\u2014",
        "Date souhait\xE9e": d.date_souhaitee_debut ? new Date(d.date_souhaitee_debut).toLocaleDateString("fr-FR") : "\u2014",
        "Date validation": d.date_validation ? new Date(d.date_validation).toLocaleDateString("fr-FR") : "\u2014",
        "Motif": d.motif_demande || "\u2014"
      };
    });
  }
  // ── Filtre temporel ───────────────────────────────────────────────
  getDateThreshold() {
    const now = /* @__PURE__ */ new Date();
    if (this.periode === "mois")
      return new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
    if (this.periode === "trimestre")
      return new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
    if (this.periode === "annee")
      return new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
    return null;
  }
  downloadRecent(r) {
    if (r.url) {
      window.open(r.url, "_blank");
      return;
    }
    this.doExport(r.format);
    this.successMsg = `T\xE9l\xE9chargement de \xAB ${r.nom} \xBB lanc\xE9.`;
    setTimeout(() => {
      this.successMsg = "";
    }, 3e3);
  }
  getFormatIcon(fmt) {
    return { pdf: "isax-document", excel: "isax-document-text", csv: "isax-clipboard-text" }[fmt] ?? "isax-document";
  }
  get periodeLabel() {
    return { mois: "Ce mois", trimestre: "Ce trimestre", annee: "Cette ann\xE9e", custom: "Personnalis\xE9e" }[this.periode] ?? this.periode;
  }
  static \u0275fac = function AdminrhStatementsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhStatementsComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(RapportExportService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhStatementsComponent, selectors: [["app-adminrh-statements"]], decls: 129, vars: 14, consts: [[1, "rp-header"], [1, "rp-header__icon", "rp-header__icon--teal"], [1, "isax", "isax-receipt-item"], [1, "rp-header__info"], [1, "rp-header__title"], [1, "rp-header__sub"], [1, "rp-header__acts"], ["type", "button", 1, "rp-btn", "rp-btn--ghost"], [1, "isax", "isax-clock"], ["type", "button", 1, "rp-btn", "rp-btn--teal", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "isax", "isax-document-upload"], [1, "rp-toast", "rp-toast--teal"], [1, "rp-layout"], [1, "rp-layout__left"], [1, "rp-card"], [1, "rp-card__head"], [1, "isax", "isax-grid-2"], [1, "rp-card__title"], [1, "rp-type-grid"], [1, "rp-type-card", 3, "selected"], [1, "isax", "isax-filter"], [1, "rp-filters"], [1, "rp-flt-row", "rp-flt-row--3"], [1, "rp-field"], [1, "rp-label"], [1, "rp-select", 3, "ngModelChange", "ngModel"], ["value", "mois"], ["value", "trimestre"], ["value", "annee"], ["value", "custom"], ["value", "tous"], ["value", "actifs"], ["value", "difficulte"], ["value", "pdf"], ["value", "excel"], ["value", "csv"], [1, "rp-flt-row", "rp-flt-row--2"], ["value", "toutes"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Email(s) s\xE9par\xE9s par virgule", 1, "rp-input", 3, "ngModelChange", "ngModel"], [1, "rp-schedules"], [1, "rp-sched-row"], [1, "rp-layout__right"], [1, "isax", "isax-eye"], [1, "rp-badge", "rp-badge--teal"], [1, "rp-preview"], [1, "rp-preview__loading"], [1, "isax", "isax-document-download"], [1, "rp-export-grid"], ["type", "button", 1, "rp-exp-btn", 3, "click"], [1, "isax", "isax-document", "rp-exp-icon", "rp-exp-icon--pdf"], [1, "rp-exp-label"], [1, "rp-exp-sub"], [1, "isax", "isax-document-text", "rp-exp-icon", "rp-exp-icon--excel"], [1, "isax", "isax-clipboard-text", "rp-exp-icon", "rp-exp-icon--csv"], [1, "isax", "isax-clock-1"], [1, "rp-hist-list"], [1, "rp-hist-item"], [1, "isax", "isax-tick-circle"], [1, "rp-type-card", 3, "click"], [1, "rp-type-body"], [1, "rp-type-name"], [1, "rp-type-sub"], [3, "value"], [1, "rp-sched-info"], [1, "rp-sched-label"], [1, "rp-sched-sub"], ["type", "button", 1, "rp-toggle", 3, "click"], [1, "rp-toggle__thumb"], [1, "spinner-border", "spinner-border-sm", "text-secondary"], [1, "rp-preview__title"], [1, "rp-kpi-row"], [1, "rp-kpi"], [1, "rp-kpi__val"], [1, "rp-kpi__lbl"], [1, "rp-preview__section"], [1, "rp-preview__section-title"], [1, "isax", "isax-book-1"], [1, "rp-bar-row"], [1, "rp-bar-label", 3, "title"], [1, "rp-bar-track"], [1, "rp-bar-fill"], [1, "rp-bar-pct"], [1, "rp-hist-info"], [1, "rp-hist-name"], [1, "rp-hist-meta"], [1, "rp-hist-date"], ["type", "button", "title", "T\xE9l\xE9charger", 1, "rp-hist-dl", 3, "click"]], template: function AdminrhStatementsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275text(7, "G\xE9n\xE9ration de rapports sur vos employ\xE9s, formations et certifications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275element(10, "i", 8);
      \u0275\u0275text(11, " Historique ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 9);
      \u0275\u0275listener("click", function AdminrhStatementsComponent_Template_button_click_12_listener() {
        return ctx.generate();
      });
      \u0275\u0275conditionalCreate(13, AdminrhStatementsComponent_Conditional_13_Template, 1, 0, "span", 10)(14, AdminrhStatementsComponent_Conditional_14_Template, 1, 0, "i", 11);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(16, AdminrhStatementsComponent_Conditional_16_Template, 3, 1, "div", 12);
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "div", 16);
      \u0275\u0275element(21, "i", 17);
      \u0275\u0275elementStart(22, "span", 18);
      \u0275\u0275text(23, "Choisir le type de rapport");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 19);
      \u0275\u0275repeaterCreate(25, AdminrhStatementsComponent_For_26_Template, 8, 11, "div", 20, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 15)(28, "div", 16);
      \u0275\u0275element(29, "i", 21);
      \u0275\u0275elementStart(30, "span", 18);
      \u0275\u0275text(31, "Filtres");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 22)(33, "div", 23)(34, "div", 24)(35, "label", 25);
      \u0275\u0275text(36, "P\xE9riode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "select", 26);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhStatementsComponent_Template_select_ngModelChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.periode, $event) || (ctx.periode = $event);
        return $event;
      });
      \u0275\u0275elementStart(38, "option", 27);
      \u0275\u0275text(39, "Ce mois");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "option", 28);
      \u0275\u0275text(41, "Ce trimestre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "option", 29);
      \u0275\u0275text(43, "Cette ann\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "option", 30);
      \u0275\u0275text(45, "Personnalis\xE9e");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 24)(47, "label", 25);
      \u0275\u0275text(48, "Employ\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "select", 26);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhStatementsComponent_Template_select_ngModelChange_49_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.employes, $event) || (ctx.employes = $event);
        return $event;
      });
      \u0275\u0275elementStart(50, "option", 31);
      \u0275\u0275text(51, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "option", 32);
      \u0275\u0275text(53, "Actifs uniquement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "option", 33);
      \u0275\u0275text(55, "En difficult\xE9");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(56, "div", 24)(57, "label", 25);
      \u0275\u0275text(58, "Format");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "select", 26);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhStatementsComponent_Template_select_ngModelChange_59_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.format, $event) || (ctx.format = $event);
        return $event;
      });
      \u0275\u0275elementStart(60, "option", 34);
      \u0275\u0275text(61, "PDF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "option", 35);
      \u0275\u0275text(63, "Excel (.xlsx)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "option", 36);
      \u0275\u0275text(65, "CSV");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "div", 37)(67, "div", 24)(68, "label", 25);
      \u0275\u0275text(69, "Formation sp\xE9cifique");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "select", 26);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhStatementsComponent_Template_select_ngModelChange_70_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formation, $event) || (ctx.formation = $event);
        return $event;
      });
      \u0275\u0275elementStart(71, "option", 38);
      \u0275\u0275text(72, "Toutes les formations");
      \u0275\u0275elementEnd();
      \u0275\u0275template(73, AdminrhStatementsComponent_option_73_Template, 2, 2, "option", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 24)(75, "label", 25);
      \u0275\u0275text(76, "Destinataire(s)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "input", 40);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhStatementsComponent_Template_input_ngModelChange_77_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.destinataire, $event) || (ctx.destinataire = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(78, "div", 15)(79, "div", 16);
      \u0275\u0275element(80, "i", 8);
      \u0275\u0275elementStart(81, "span", 18);
      \u0275\u0275text(82, "Envoi automatique");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 41);
      \u0275\u0275repeaterCreate(84, AdminrhStatementsComponent_For_85_Template, 8, 4, "div", 42, _forTrack1);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "div", 43)(87, "div", 15)(88, "div", 16);
      \u0275\u0275element(89, "i", 44);
      \u0275\u0275elementStart(90, "span", 18);
      \u0275\u0275text(91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "span", 45);
      \u0275\u0275text(93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 46);
      \u0275\u0275conditionalCreate(95, AdminrhStatementsComponent_Conditional_95_Template, 2, 0, "div", 47)(96, AdminrhStatementsComponent_Conditional_96_Template, 19, 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 15)(98, "div", 16);
      \u0275\u0275element(99, "i", 48);
      \u0275\u0275elementStart(100, "span", 18);
      \u0275\u0275text(101, "Export rapide");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div", 49)(103, "button", 50);
      \u0275\u0275listener("click", function AdminrhStatementsComponent_Template_button_click_103_listener() {
        return ctx.exportQuick("pdf");
      });
      \u0275\u0275element(104, "i", 51);
      \u0275\u0275elementStart(105, "div", 52);
      \u0275\u0275text(106, "PDF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div", 53);
      \u0275\u0275text(108, "Rapport complet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "button", 50);
      \u0275\u0275listener("click", function AdminrhStatementsComponent_Template_button_click_109_listener() {
        return ctx.exportQuick("excel");
      });
      \u0275\u0275element(110, "i", 54);
      \u0275\u0275elementStart(111, "div", 52);
      \u0275\u0275text(112, "Excel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 53);
      \u0275\u0275text(114, "Donn\xE9es brutes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "button", 50);
      \u0275\u0275listener("click", function AdminrhStatementsComponent_Template_button_click_115_listener() {
        return ctx.exportQuick("csv");
      });
      \u0275\u0275element(116, "i", 55);
      \u0275\u0275elementStart(117, "div", 52);
      \u0275\u0275text(118, "CSV");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div", 53);
      \u0275\u0275text(120, "Import RH");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(121, "div", 15)(122, "div", 16);
      \u0275\u0275element(123, "i", 56);
      \u0275\u0275elementStart(124, "span", 18);
      \u0275\u0275text(125, "Rapports r\xE9cents");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "div", 57);
      \u0275\u0275repeaterCreate(127, AdminrhStatementsComponent_For_128_Template, 12, 9, "div", 58, _forTrack2);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("Rapports RH \u2014 ", ctx.getEntrepriseName());
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.generating);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.generating ? 13 : 14);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.generating ? "G\xE9n\xE9ration\u2026" : "G\xE9n\xE9rer", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.successMsg ? 16 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.types);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.periode);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.employes);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.format);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.formation);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.formationOptions);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.destinataire);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.schedules);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("Aper\xE7u \u2014 ", ctx.periodeLabel);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getEntrepriseName());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading ? 95 : 96);
      \u0275\u0275advance(32);
      \u0275\u0275repeater(ctx.recents);
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.rp-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 14px 18px;\n  margin-bottom: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  flex-wrap: wrap;\n}\n.rp-header__icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.rp-header__icon--teal[_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.rp-header__icon--purple[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.rp-header__icon--blue[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.rp-header__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.rp-header__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1E293B;\n}\n.rp-header__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n  margin-top: 2px;\n}\n.rp-header__acts[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.rp-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  border: 1px solid #E2E8F0;\n  transition: all 0.15s;\n}\n.rp-btn--ghost[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  color: #64748B;\n}\n.rp-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #F8FAFC;\n}\n.rp-btn--teal[_ngcontent-%COMP%] {\n  background: #0F6E56;\n  color: #fff;\n  border-color: #0F6E56;\n}\n.rp-btn--teal[_ngcontent-%COMP%]:hover {\n  background: rgb(11.328, 83.072, 64.9472);\n}\n.rp-btn--purple[_ngcontent-%COMP%] {\n  background: #534AB7;\n  color: #fff;\n  border-color: #534AB7;\n}\n.rp-btn--purple[_ngcontent-%COMP%]:hover {\n  background: rgb(72.4837944664, 64.4300395257, 161.9699604743);\n}\n.rp-btn--blue[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.rp-btn--blue[_ngcontent-%COMP%]:hover {\n  background: rgb(20.1142857143, 79.619047619, 138.2857142857);\n}\n.rp-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.rp-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.rp-toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.rp-toast--teal[_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.rp-toast--purple[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.rp-toast--blue[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.rp-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 16px;\n  align-items: start;\n}\n@media (max-width: 1100px) {\n  .rp-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.rp-layout__left[_ngcontent-%COMP%], \n.rp-layout__right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.rp-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.rp-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #E2E8F0;\n}\n.rp-card__head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #64748B;\n}\n.rp-card__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1E293B;\n  flex: 1;\n}\n.rp-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.rp-badge--teal[_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: rgb(11.94, 87.56, 68.456);\n}\n.rp-badge--purple[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #3C3489;\n}\n.rp-badge--blue[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.rp-type-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  padding: 12px 14px;\n}\n.rp-type-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  border: 1px solid #E2E8F0;\n  border-radius: 9px;\n  padding: 10px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.rp-type-card[_ngcontent-%COMP%]:hover {\n  border-color: rgb(199.1090909091, 210.6727272727, 226.0909090909);\n  background: #F8FAFC;\n}\n.rp-type-card.selected[_ngcontent-%COMP%] {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.rp-type-card.selected[_ngcontent-%COMP%]   .rp-type-name[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.rp-type-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 7px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.rp-type-icon--green[_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.rp-type-icon--gold[_ngcontent-%COMP%] {\n  background: #FFFBEB;\n  color: #B7891A;\n}\n.rp-type-icon--orange[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.rp-type-icon--purple[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.rp-type-icon--blue[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.rp-type-icon--gray[_ngcontent-%COMP%] {\n  background: #F1EFE8;\n  color: #5F5E5A;\n}\n.rp-type-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.rp-type-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1E293B;\n}\n.rp-type-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #64748B;\n  margin-top: 2px;\n  line-height: 1.3;\n}\n.rp-filters[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.rp-flt-row[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.rp-flt-row--3[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 768px) {\n  .rp-flt-row--3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.rp-flt-row--2[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n@media (max-width: 768px) {\n  .rp-flt-row--2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.rp-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.rp-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748B;\n  font-weight: 500;\n}\n.rp-select[_ngcontent-%COMP%], \n.rp-input[_ngcontent-%COMP%] {\n  border: 1px solid #E2E8F0;\n  border-radius: 7px;\n  padding: 6px 9px;\n  font-size: 12px;\n  color: #1E293B;\n  background: #FFFFFF;\n  width: 100%;\n  font-family: inherit;\n}\n.rp-select[_ngcontent-%COMP%]:focus, \n.rp-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0F6E56;\n}\n.rp-schedules[_ngcontent-%COMP%] {\n  padding: 4px 14px;\n}\n.rp-sched-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid #E2E8F0;\n}\n.rp-sched-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.rp-sched-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.rp-sched-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #1E293B;\n}\n.rp-sched-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748B;\n  margin-top: 1px;\n}\n.rp-toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #E2E8F0;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  border: none;\n  transition: background 0.2s;\n}\n.rp-toggle.on[_ngcontent-%COMP%] {\n  background: #0F6E56;\n}\n.rp-toggle__thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n}\n.rp-toggle.on[_ngcontent-%COMP%]   .rp-toggle__thumb[_ngcontent-%COMP%] {\n  left: 19px;\n}\n.rp-preview[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n}\n.rp-preview__loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 24px;\n}\n.rp-preview__title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748B;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 10px;\n}\n.rp-preview__section[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.rp-preview__section-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #64748B;\n  margin-bottom: 7px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.rp-preview__section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.rp-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 6px;\n}\n.rp-kpi[_ngcontent-%COMP%] {\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  padding: 8px;\n  text-align: center;\n}\n.rp-kpi__val[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  color: #1E293B;\n}\n.rp-kpi__lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #64748B;\n  margin-top: 1px;\n}\n.rp-bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.rp-bar-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748B;\n  width: 90px;\n  flex-shrink: 0;\n  text-align: right;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rp-bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 7px;\n  background: #E2E8F0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.rp-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s;\n}\n.rp-bar-fill--ok[_ngcontent-%COMP%] {\n  background: #0F6E56;\n}\n.rp-bar-fill--ko[_ngcontent-%COMP%] {\n  background: #E24B4A;\n}\n.rp-bar-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #1E293B;\n  width: 30px;\n  text-align: right;\n}\n.rp-export-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  padding: 12px 14px;\n}\n.rp-exp-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  padding: 12px 8px;\n  border: 1px solid #E2E8F0;\n  border-radius: 9px;\n  cursor: pointer;\n  background: transparent;\n  transition: all 0.15s;\n}\n.rp-exp-btn[_ngcontent-%COMP%]:hover {\n  background: #F8FAFC;\n  border-color: rgb(199.1090909091, 210.6727272727, 226.0909090909);\n}\n.rp-exp-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.rp-exp-icon--pdf[_ngcontent-%COMP%] {\n  color: #A32D2D;\n}\n.rp-exp-icon--excel[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.rp-exp-icon--csv[_ngcontent-%COMP%] {\n  color: #854F0B;\n}\n.rp-exp-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1E293B;\n}\n.rp-exp-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #64748B;\n}\n.rp-hist-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.rp-hist-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n  border-bottom: 1px solid #E2E8F0;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.rp-hist-item[_ngcontent-%COMP%]:hover {\n  background: #F8FAFC;\n}\n.rp-hist-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.rp-hist-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n}\n.rp-hist-icon--pdf[_ngcontent-%COMP%] {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.rp-hist-icon--excel[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.rp-hist-icon--csv[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.rp-hist-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.rp-hist-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1E293B;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rp-hist-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748B;\n  margin-top: 1px;\n}\n.rp-hist-date[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #64748B;\n  flex-shrink: 0;\n}\n.rp-hist-dl[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border: 1px solid #E2E8F0;\n  border-radius: 7px;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  color: #64748B;\n  flex-shrink: 0;\n}\n.rp-hist-dl[_ngcontent-%COMP%]:hover {\n  background: #E1F5EE;\n  color: #0F6E56;\n  border-color: #0F6E56;\n}\n.rp-insights[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px 14px;\n}\n.rp-insight[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px 10px;\n  border-radius: 8px;\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n}\n.rp-insight__dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.rp-insight__text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n  line-height: 1.4;\n}\n.rp-insight[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1E293B;\n  font-weight: 500;\n}\n/*# sourceMappingURL=adminrh-statements.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhStatementsComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-statements", imports: [CommonModule, FormsModule], template: `<!-- \u2500\u2500 PAGE HEADER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div class="rp-header">\r
  <div class="rp-header__icon rp-header__icon--teal">\r
    <i class="isax isax-receipt-item"></i>\r
  </div>\r
  <div class="rp-header__info">\r
    <div class="rp-header__title">Rapports RH \u2014 {{ getEntrepriseName() }}</div>\r
    <div class="rp-header__sub">G\xE9n\xE9ration de rapports sur vos employ\xE9s, formations et certifications</div>\r
  </div>\r
  <div class="rp-header__acts">\r
    <button type="button" class="rp-btn rp-btn--ghost">\r
      <i class="isax isax-clock"></i> Historique\r
    </button>\r
    <button type="button" class="rp-btn rp-btn--teal" (click)="generate()" [disabled]="generating">\r
      @if (generating) { <span class="spinner-border spinner-border-sm me-1"></span> }\r
      @else { <i class="isax isax-document-upload"></i> }\r
      {{ generating ? 'G\xE9n\xE9ration\u2026' : 'G\xE9n\xE9rer' }}\r
    </button>\r
  </div>\r
</div>\r
\r
@if (successMsg) {\r
  <div class="rp-toast rp-toast--teal">\r
    <i class="isax isax-tick-circle"></i> {{ successMsg }}\r
  </div>\r
}\r
\r
<!-- \u2500\u2500 BODY \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div class="rp-layout">\r
\r
  <!-- LEFT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="rp-layout__left">\r
\r
    <!-- Type de rapport -->\r
    <div class="rp-card">\r
      <div class="rp-card__head">\r
        <i class="isax isax-grid-2"></i>\r
        <span class="rp-card__title">Choisir le type de rapport</span>\r
      </div>\r
      <div class="rp-type-grid">\r
        @for (t of types; track t.key) {\r
          <div class="rp-type-card"\r
               [class.selected]="selectedType === t.key"\r
               [attr.data-color]="t.color"\r
               (click)="selectType(t.key)">\r
            <div class="rp-type-icon rp-type-icon--{{ t.color }}">\r
              <i class="isax {{ t.icon }}"></i>\r
            </div>\r
            <div class="rp-type-body">\r
              <div class="rp-type-name">{{ t.label }}</div>\r
              <div class="rp-type-sub">{{ t.sub }}</div>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
\r
    <!-- Filtres -->\r
    <div class="rp-card">\r
      <div class="rp-card__head">\r
        <i class="isax isax-filter"></i>\r
        <span class="rp-card__title">Filtres</span>\r
      </div>\r
      <div class="rp-filters">\r
        <div class="rp-flt-row rp-flt-row--3">\r
          <div class="rp-field">\r
            <label class="rp-label">P\xE9riode</label>\r
            <select class="rp-select" [(ngModel)]="periode">\r
              <option value="mois">Ce mois</option>\r
              <option value="trimestre">Ce trimestre</option>\r
              <option value="annee">Cette ann\xE9e</option>\r
              <option value="custom">Personnalis\xE9e</option>\r
            </select>\r
          </div>\r
          <div class="rp-field">\r
            <label class="rp-label">Employ\xE9s</label>\r
            <select class="rp-select" [(ngModel)]="employes">\r
              <option value="tous">Tous</option>\r
              <option value="actifs">Actifs uniquement</option>\r
              <option value="difficulte">En difficult\xE9</option>\r
            </select>\r
          </div>\r
          <div class="rp-field">\r
            <label class="rp-label">Format</label>\r
            <select class="rp-select" [(ngModel)]="format">\r
              <option value="pdf">PDF</option>\r
              <option value="excel">Excel (.xlsx)</option>\r
              <option value="csv">CSV</option>\r
            </select>\r
          </div>\r
        </div>\r
        <div class="rp-flt-row rp-flt-row--2">\r
          <div class="rp-field">\r
            <label class="rp-label">Formation sp\xE9cifique</label>\r
            <select class="rp-select" [(ngModel)]="formation">\r
              <option value="toutes">Toutes les formations</option>\r
              <option *ngFor="let f of formationOptions" [value]="f.value">{{ f.label }}</option>\r
            </select>\r
          </div>\r
          <div class="rp-field">\r
            <label class="rp-label">Destinataire(s)</label>\r
            <input class="rp-input" type="text" placeholder="Email(s) s\xE9par\xE9s par virgule" [(ngModel)]="destinataire">\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Planification -->\r
    <div class="rp-card">\r
      <div class="rp-card__head">\r
        <i class="isax isax-clock"></i>\r
        <span class="rp-card__title">Envoi automatique</span>\r
      </div>\r
      <div class="rp-schedules">\r
        @for (s of schedules; track s.label) {\r
          <div class="rp-sched-row">\r
            <div class="rp-sched-info">\r
              <div class="rp-sched-label">{{ s.label }}</div>\r
              <div class="rp-sched-sub">{{ s.sub }}</div>\r
            </div>\r
            <button type="button" class="rp-toggle" [class.on]="s.on" (click)="s.on = !s.on">\r
              <span class="rp-toggle__thumb"></span>\r
            </button>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
  <!-- RIGHT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="rp-layout__right">\r
\r
    <!-- Aper\xE7u -->\r
    <div class="rp-card">\r
      <div class="rp-card__head">\r
        <i class="isax isax-eye"></i>\r
        <span class="rp-card__title">Aper\xE7u \u2014 {{ periodeLabel }}</span>\r
        <span class="rp-badge rp-badge--teal">{{ getEntrepriseName() }}</span>\r
      </div>\r
      <div class="rp-preview">\r
        @if (loading) {\r
          <div class="rp-preview__loading">\r
            <div class="spinner-border spinner-border-sm text-secondary"></div>\r
          </div>\r
        } @else {\r
          <div class="rp-preview__title">Progression \xB7 {{ getEntrepriseName() }}</div>\r
          <div class="rp-kpi-row">\r
            <div class="rp-kpi">\r
              <div class="rp-kpi__val">{{ stats.completion }}%</div>\r
              <div class="rp-kpi__lbl">Compl\xE9tion</div>\r
            </div>\r
            <div class="rp-kpi">\r
              <div class="rp-kpi__val">{{ stats.certifies }}</div>\r
              <div class="rp-kpi__lbl">Certifi\xE9s</div>\r
            </div>\r
            <div class="rp-kpi">\r
              <div class="rp-kpi__val">{{ stats.difficulte }}</div>\r
              <div class="rp-kpi__lbl">En difficult\xE9</div>\r
            </div>\r
          </div>\r
          @if (formations.length) {\r
            <div class="rp-preview__section">\r
              <div class="rp-preview__section-title">\r
                <i class="isax isax-book-1"></i> Par formation\r
              </div>\r
              @for (f of formations; track f.label) {\r
                <div class="rp-bar-row">\r
                  <span class="rp-bar-label" [title]="f.label">{{ f.label }}</span>\r
                  <div class="rp-bar-track">\r
                    <div class="rp-bar-fill" [class.rp-bar-fill--ok]="f.pct >= 60" [class.rp-bar-fill--ko]="f.pct < 60" [style.width.%]="f.pct"></div>\r
                  </div>\r
                  <span class="rp-bar-pct">{{ f.pct }}%</span>\r
                </div>\r
              }\r
            </div>\r
          }\r
        }\r
      </div>\r
    </div>\r
\r
    <!-- Export rapide -->\r
    <div class="rp-card">\r
      <div class="rp-card__head">\r
        <i class="isax isax-document-download"></i>\r
        <span class="rp-card__title">Export rapide</span>\r
      </div>\r
      <div class="rp-export-grid">\r
        <button type="button" class="rp-exp-btn" (click)="exportQuick('pdf')">\r
          <i class="isax isax-document rp-exp-icon rp-exp-icon--pdf"></i>\r
          <div class="rp-exp-label">PDF</div>\r
          <div class="rp-exp-sub">Rapport complet</div>\r
        </button>\r
        <button type="button" class="rp-exp-btn" (click)="exportQuick('excel')">\r
          <i class="isax isax-document-text rp-exp-icon rp-exp-icon--excel"></i>\r
          <div class="rp-exp-label">Excel</div>\r
          <div class="rp-exp-sub">Donn\xE9es brutes</div>\r
        </button>\r
        <button type="button" class="rp-exp-btn" (click)="exportQuick('csv')">\r
          <i class="isax isax-clipboard-text rp-exp-icon rp-exp-icon--csv"></i>\r
          <div class="rp-exp-label">CSV</div>\r
          <div class="rp-exp-sub">Import RH</div>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Rapports r\xE9cents -->\r
    <div class="rp-card">\r
      <div class="rp-card__head">\r
        <i class="isax isax-clock-1"></i>\r
        <span class="rp-card__title">Rapports r\xE9cents</span>\r
      </div>\r
      <div class="rp-hist-list">\r
        @for (r of recents; track r.nom) {\r
          <div class="rp-hist-item">\r
            <div class="rp-hist-icon rp-hist-icon--{{ r.format }}">\r
              <i class="isax {{ getFormatIcon(r.format) }}"></i>\r
            </div>\r
            <div class="rp-hist-info">\r
              <div class="rp-hist-name">{{ r.nom }}</div>\r
              <div class="rp-hist-meta">{{ r.meta }}</div>\r
            </div>\r
            <div class="rp-hist-date">{{ r.date }}</div>\r
            <button type="button" class="rp-hist-dl" (click)="downloadRecent(r)" title="T\xE9l\xE9charger">\r
              <i class="isax isax-document-download"></i>\r
            </button>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/adminrh/adminrh-statements/adminrh-statements.component.scss */\n.rp-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 14px 18px;\n  margin-bottom: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  flex-wrap: wrap;\n}\n.rp-header__icon {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.rp-header__icon--teal {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.rp-header__icon--purple {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.rp-header__icon--blue {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.rp-header__info {\n  flex: 1;\n  min-width: 0;\n}\n.rp-header__title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1E293B;\n}\n.rp-header__sub {\n  font-size: 12px;\n  color: #64748B;\n  margin-top: 2px;\n}\n.rp-header__acts {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.rp-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  border: 1px solid #E2E8F0;\n  transition: all 0.15s;\n}\n.rp-btn--ghost {\n  background: #FFFFFF;\n  color: #64748B;\n}\n.rp-btn--ghost:hover {\n  background: #F8FAFC;\n}\n.rp-btn--teal {\n  background: #0F6E56;\n  color: #fff;\n  border-color: #0F6E56;\n}\n.rp-btn--teal:hover {\n  background: rgb(11.328, 83.072, 64.9472);\n}\n.rp-btn--purple {\n  background: #534AB7;\n  color: #fff;\n  border-color: #534AB7;\n}\n.rp-btn--purple:hover {\n  background: rgb(72.4837944664, 64.4300395257, 161.9699604743);\n}\n.rp-btn--blue {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.rp-btn--blue:hover {\n  background: rgb(20.1142857143, 79.619047619, 138.2857142857);\n}\n.rp-btn i {\n  font-size: 14px;\n}\n.rp-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.rp-toast {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.rp-toast--teal {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.rp-toast--purple {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.rp-toast--blue {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.rp-layout {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 16px;\n  align-items: start;\n}\n@media (max-width: 1100px) {\n  .rp-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.rp-layout__left,\n.rp-layout__right {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.rp-card {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.rp-card__head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #E2E8F0;\n}\n.rp-card__head i {\n  font-size: 15px;\n  color: #64748B;\n}\n.rp-card__title {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1E293B;\n  flex: 1;\n}\n.rp-badge {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.rp-badge--teal {\n  background: #E1F5EE;\n  color: rgb(11.94, 87.56, 68.456);\n}\n.rp-badge--purple {\n  background: #EEEDFE;\n  color: #3C3489;\n}\n.rp-badge--blue {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.rp-type-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  padding: 12px 14px;\n}\n.rp-type-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  border: 1px solid #E2E8F0;\n  border-radius: 9px;\n  padding: 10px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.rp-type-card:hover {\n  border-color: rgb(199.1090909091, 210.6727272727, 226.0909090909);\n  background: #F8FAFC;\n}\n.rp-type-card.selected {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.rp-type-card.selected .rp-type-name {\n  color: #0F6E56;\n}\n.rp-type-icon {\n  width: 28px;\n  height: 28px;\n  border-radius: 7px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.rp-type-icon--green {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.rp-type-icon--gold {\n  background: #FFFBEB;\n  color: #B7891A;\n}\n.rp-type-icon--orange {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.rp-type-icon--purple {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.rp-type-icon--blue {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.rp-type-icon--gray {\n  background: #F1EFE8;\n  color: #5F5E5A;\n}\n.rp-type-body {\n  flex: 1;\n}\n.rp-type-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1E293B;\n}\n.rp-type-sub {\n  font-size: 10px;\n  color: #64748B;\n  margin-top: 2px;\n  line-height: 1.3;\n}\n.rp-filters {\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.rp-flt-row {\n  display: grid;\n  gap: 8px;\n}\n.rp-flt-row--3 {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 768px) {\n  .rp-flt-row--3 {\n    grid-template-columns: 1fr;\n  }\n}\n.rp-flt-row--2 {\n  grid-template-columns: 1fr 1fr;\n}\n@media (max-width: 768px) {\n  .rp-flt-row--2 {\n    grid-template-columns: 1fr;\n  }\n}\n.rp-field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.rp-label {\n  font-size: 11px;\n  color: #64748B;\n  font-weight: 500;\n}\n.rp-select,\n.rp-input {\n  border: 1px solid #E2E8F0;\n  border-radius: 7px;\n  padding: 6px 9px;\n  font-size: 12px;\n  color: #1E293B;\n  background: #FFFFFF;\n  width: 100%;\n  font-family: inherit;\n}\n.rp-select:focus,\n.rp-input:focus {\n  outline: none;\n  border-color: #0F6E56;\n}\n.rp-schedules {\n  padding: 4px 14px;\n}\n.rp-sched-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid #E2E8F0;\n}\n.rp-sched-row:last-child {\n  border-bottom: none;\n}\n.rp-sched-info {\n  flex: 1;\n}\n.rp-sched-label {\n  font-size: 12px;\n  color: #1E293B;\n}\n.rp-sched-sub {\n  font-size: 11px;\n  color: #64748B;\n  margin-top: 1px;\n}\n.rp-toggle {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #E2E8F0;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  border: none;\n  transition: background 0.2s;\n}\n.rp-toggle.on {\n  background: #0F6E56;\n}\n.rp-toggle__thumb {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n}\n.rp-toggle.on .rp-toggle__thumb {\n  left: 19px;\n}\n.rp-preview {\n  padding: 12px 14px;\n}\n.rp-preview__loading {\n  display: flex;\n  justify-content: center;\n  padding: 24px;\n}\n.rp-preview__title {\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748B;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 10px;\n}\n.rp-preview__section {\n  margin-top: 12px;\n}\n.rp-preview__section-title {\n  font-size: 11px;\n  font-weight: 500;\n  color: #64748B;\n  margin-bottom: 7px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.rp-preview__section-title i {\n  font-size: 13px;\n}\n.rp-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 6px;\n}\n.rp-kpi {\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  padding: 8px;\n  text-align: center;\n}\n.rp-kpi__val {\n  font-size: 17px;\n  font-weight: 600;\n  color: #1E293B;\n}\n.rp-kpi__lbl {\n  font-size: 10px;\n  color: #64748B;\n  margin-top: 1px;\n}\n.rp-bar-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.rp-bar-label {\n  font-size: 11px;\n  color: #64748B;\n  width: 90px;\n  flex-shrink: 0;\n  text-align: right;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rp-bar-track {\n  flex: 1;\n  height: 7px;\n  background: #E2E8F0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.rp-bar-fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s;\n}\n.rp-bar-fill--ok {\n  background: #0F6E56;\n}\n.rp-bar-fill--ko {\n  background: #E24B4A;\n}\n.rp-bar-pct {\n  font-size: 11px;\n  font-weight: 600;\n  color: #1E293B;\n  width: 30px;\n  text-align: right;\n}\n.rp-export-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  padding: 12px 14px;\n}\n.rp-exp-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  padding: 12px 8px;\n  border: 1px solid #E2E8F0;\n  border-radius: 9px;\n  cursor: pointer;\n  background: transparent;\n  transition: all 0.15s;\n}\n.rp-exp-btn:hover {\n  background: #F8FAFC;\n  border-color: rgb(199.1090909091, 210.6727272727, 226.0909090909);\n}\n.rp-exp-icon {\n  font-size: 24px;\n}\n.rp-exp-icon--pdf {\n  color: #A32D2D;\n}\n.rp-exp-icon--excel {\n  color: #3B6D11;\n}\n.rp-exp-icon--csv {\n  color: #854F0B;\n}\n.rp-exp-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1E293B;\n}\n.rp-exp-sub {\n  font-size: 10px;\n  color: #64748B;\n}\n.rp-hist-list {\n  display: flex;\n  flex-direction: column;\n}\n.rp-hist-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n  border-bottom: 1px solid #E2E8F0;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.rp-hist-item:hover {\n  background: #F8FAFC;\n}\n.rp-hist-item:last-child {\n  border-bottom: none;\n}\n.rp-hist-icon {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n}\n.rp-hist-icon--pdf {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.rp-hist-icon--excel {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.rp-hist-icon--csv {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.rp-hist-info {\n  flex: 1;\n  min-width: 0;\n}\n.rp-hist-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1E293B;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rp-hist-meta {\n  font-size: 11px;\n  color: #64748B;\n  margin-top: 1px;\n}\n.rp-hist-date {\n  font-size: 10px;\n  color: #64748B;\n  flex-shrink: 0;\n}\n.rp-hist-dl {\n  width: 26px;\n  height: 26px;\n  border: 1px solid #E2E8F0;\n  border-radius: 7px;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  color: #64748B;\n  flex-shrink: 0;\n}\n.rp-hist-dl:hover {\n  background: #E1F5EE;\n  color: #0F6E56;\n  border-color: #0F6E56;\n}\n.rp-insights {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px 14px;\n}\n.rp-insight {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px 10px;\n  border-radius: 8px;\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n}\n.rp-insight__dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.rp-insight__text {\n  font-size: 12px;\n  color: #64748B;\n  line-height: 1.4;\n}\n.rp-insight strong {\n  color: #1E293B;\n  font-weight: 500;\n}\n/*# sourceMappingURL=adminrh-statements.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }, { type: AuthService }, { type: RapportExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhStatementsComponent, { className: "AdminrhStatementsComponent", filePath: "app/features/adminrh/adminrh-statements/adminrh-statements.component.ts", lineNumber: 25 });
})();
export {
  AdminrhStatementsComponent
};
//# sourceMappingURL=chunk-HNUXMYQZ.js.map
