import {
  RapportExportService
} from "./chunk-GUJDHY23.js";
import "./chunk-ESOPKBER.js";
import {
  AuthService
} from "./chunk-IEFOQSOV.js";
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
} from "./chunk-HLA233IM.js";
import "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-46QRNFHM.js";
import {
  CommonModule
} from "./chunk-MNWNTO2T.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  catchError,
  forkJoin,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/instructor/instructor-statements/instructor-statements.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.label;
var _forTrack3 = ($index, $item) => $item.text;
var _forTrack4 = ($index, $item) => $item.nom;
function InstructorStatementsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 10);
  }
}
function InstructorStatementsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function InstructorStatementsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMsg, " ");
  }
}
function InstructorStatementsComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function InstructorStatementsComponent_For_26_Template_div_click_0_listener() {
      const t_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectType(t_r3.key));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 64)(4, "div", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected-blue", ctx_r0.selectedType === t_r3.key);
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
function InstructorStatementsComponent_For_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    \u0275\u0275property("value", f_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r4.titre || f_r4.title);
  }
}
function InstructorStatementsComponent_For_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 67)(2, "div", 68);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 69);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 70);
    \u0275\u0275listener("click", function InstructorStatementsComponent_For_86_Template_button_click_6_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      return \u0275\u0275resetView(s_r6.on = !s_r6.on);
    });
    \u0275\u0275element(7, "span", 71);
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
function InstructorStatementsComponent_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "div", 72);
    \u0275\u0275elementEnd();
  }
}
function InstructorStatementsComponent_Conditional_97_Conditional_18_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "span", 82);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 83);
    \u0275\u0275element(4, "div", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 85);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("title", q_r7.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r7.label);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", q_r7.pct, "%");
    \u0275\u0275classProp("rp-bar-fill--blue", q_r7.pct >= 60)("rp-bar-fill--ko", q_r7.pct < 60);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", q_r7.pct, "%");
  }
}
function InstructorStatementsComponent_Conditional_97_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79);
    \u0275\u0275element(2, "i", 80);
    \u0275\u0275text(3, " Scores quiz par formation ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, InstructorStatementsComponent_Conditional_97_Conditional_18_For_5_Template, 7, 9, "div", 81, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.quizBars);
  }
}
function InstructorStatementsComponent_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1, "Performance p\xE9dagogique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 74)(3, "div", 75)(4, "div", 76);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 77);
    \u0275\u0275text(7, "Compl\xE9tion");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 75)(9, "div", 76);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 77);
    \u0275\u0275text(12, "Certifi\xE9s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 75)(14, "div", 76);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 77);
    \u0275\u0275text(17, "En difficult\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(18, InstructorStatementsComponent_Conditional_97_Conditional_18_Template, 6, 0, "div", 78);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.completion, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.certifies);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.difficulte);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.quizBars.length ? 18 : -1);
  }
}
function InstructorStatementsComponent_For_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "div", 86);
    \u0275\u0275elementStart(2, "div", 87);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ins_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ins_r8.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ins_r8.text);
  }
}
function InstructorStatementsComponent_For_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div");
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 88)(4, "div", 89);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 90);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 91);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 92);
    \u0275\u0275listener("click", function InstructorStatementsComponent_For_113_Template_button_click_10_listener() {
      const r_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.downloadRecent(r_r10));
    });
    \u0275\u0275element(11, "i", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("rp-hist-icon rp-hist-icon--", r_r10.format));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", ctx_r0.getFormatIcon(r_r10.format)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r10.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r10.meta);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r10.date);
  }
}
var InstructorStatementsComponent = class _InstructorStatementsComponent {
  http;
  authService;
  exportSvc;
  currentUser;
  selectedType = "apprenants";
  types = [
    { key: "apprenants", icon: "isax-profile-2user", color: "blue", label: "Apprenants", sub: "Progression individuelle" },
    { key: "quiz", icon: "isax-award", color: "purple", label: "Quiz & scores", sub: "Taux de r\xE9ussite par question" },
    { key: "formation", icon: "isax-book-1", color: "green", label: "Par formation", sub: "Compl\xE9tion & engagement" },
    { key: "sessions", icon: "isax-calendar-1", color: "orange", label: "Sessions", sub: "Pr\xE9sences & participation" },
    { key: "difficulte", icon: "isax-danger", color: "red", label: "En difficult\xE9", sub: "Apprenants \xE0 risque" },
    { key: "certifications", icon: "isax-medal", color: "gold", label: "Certifications", sub: "D\xE9livr\xE9s par mes formations" }
  ];
  formation = "toutes";
  periode = "mois";
  format = "pdf";
  apprenants = "tous";
  destinataire = "";
  schedules = [
    { label: "R\xE9sum\xE9 hebdomadaire apprenants", sub: "Chaque vendredi \xB7 progression + alertes difficult\xE9", on: true },
    { label: "Rapport apr\xE8s chaque session", sub: "Pr\xE9sences, dur\xE9es, questions pos\xE9es", on: true },
    { label: "Alerte quiz en \xE9chec", sub: "Si un apprenant \xE9choue 2x au m\xEAme quiz", on: false }
  ];
  // Preview
  completion = 0;
  certifies = 0;
  difficulte = 0;
  quizBars = [];
  formations = [];
  loading = false;
  generating = false;
  successMsg = "";
  insights = [
    { color: "#A32D2D", text: "La formation la plus abandonn\xE9e a un taux de compl\xE9tion de 41%. Envisagez de la scinder en modules." },
    { color: "#185FA5", text: "Certifications d\xE9livr\xE9es ce trimestre. Le score moyen est de 76%." },
    { color: "#854F0B", text: "Certains apprenants n'ont pas eu d'activit\xE9 depuis plus de 7 jours. Un email de relance peut \xEAtre d\xE9clench\xE9." }
  ];
  recents = [
    { nom: "Rapport apprenants T1 2025", meta: "Toutes formations \xB7 PDF", format: "pdf", date: "15 jan." },
    { nom: "Scores quiz d\xE9c. 2024", meta: "Excel \xB7 d\xE9tail par question", format: "excel", date: "1 jan." },
    { nom: "Pr\xE9sences sessions nov. 2024", meta: "CSV \xB7 183 apprenants", format: "csv", date: "1 d\xE9c." }
  ];
  rawFormations = [];
  rawCerts = [];
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
      fmts: this.http.get(`${environment.apiUrl}/formateur/formations`, { headers: this.headers }).pipe(catchError(() => of({ formations: [] }))),
      certs: this.http.get(`${environment.apiUrl}/certificats`, { headers: this.headers }).pipe(catchError(() => of([])))
    }).subscribe({
      next: ({ fmts, certs }) => {
        const fl = fmts.formations || fmts.data || (Array.isArray(fmts) ? fmts : []);
        const cl = Array.isArray(certs) ? certs : certs.certificats || [];
        this.rawFormations = fl;
        this.rawCerts = cl;
        this.certifies = cl.length;
        this.completion = 74;
        this.difficulte = 4;
        this.quizBars = fl.slice(0, 3).map((f, i) => ({
          label: f.titre || f.title || `Formation ${i + 1}`,
          pct: Math.floor(44 + i * 22)
        }));
        this.formations = fl;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  getDisplayName() {
    const u = this.currentUser;
    if (!u)
      return "Formateur";
    return u.name || `${u.prenom ?? ""} ${u.nom ?? ""}`.trim() || u.email || "Formateur";
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
      this.successMsg = `Rapport ${this.selectedType} g\xE9n\xE9r\xE9 (${this.format.toUpperCase()}) \u2014 t\xE9l\xE9chargement lanc\xE9.`;
      setTimeout(() => {
        this.successMsg = "";
      }, 4e3);
    }, 600);
  }
  exportQuick(fmt) {
    this.doExport(fmt);
    this.successMsg = `Export ${fmt.toUpperCase()} lanc\xE9.`;
    setTimeout(() => {
      this.successMsg = "";
    }, 3e3);
  }
  doExport(fmt) {
    const filename = `rapport-formateur-${this.selectedType}-${this.periode}`;
    const fmtRows = this.rawFormations.map((f) => ({
      Formation: f.titre || f.title || "",
      Inscrits: f.nb_participants ?? 0,
      Compl\u00E9tion: `${f.taux_completion ?? 0}%`,
      Niveau: f.niveau || ""
    }));
    const certRows = this.rawCerts.map((c) => ({
      Apprenant: c.employe_nom || c.user?.name || "",
      Formation: c.formation_titre || c.formation?.titre || "",
      D\u00E9livr\u00E9: c.date_emission || "",
      Expiration: c.date_expiration || ""
    }));
    if (fmt === "csv") {
      this.exportSvc.exportCsv(this.selectedType === "certifications" ? certRows : fmtRows, filename);
    } else if (fmt === "excel") {
      this.exportSvc.exportExcel(this.selectedType === "certifications" ? certRows : fmtRows, filename);
    } else {
      this.exportSvc.exportPdf(`Rapport p\xE9dagogique \u2014 ${this.getDisplayName()}`, [
        { heading: "Mes formations", rows: fmtRows },
        { heading: "Certifications", rows: certRows }
      ], filename);
    }
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
    return { mois: "Ce mois", trimestre: "Ce trimestre", duree: "Toute la dur\xE9e" }[this.periode] ?? this.periode;
  }
  static \u0275fac = function InstructorStatementsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorStatementsComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(RapportExportService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorStatementsComponent, selectors: [["app-instructor-statements"]], decls: 138, vars: 12, consts: [[1, "rp-header"], [1, "rp-header__icon", "rp-header__icon--blue"], [1, "isax", "isax-receipt-item"], [1, "rp-header__info"], [1, "rp-header__title"], [1, "rp-header__sub"], [1, "rp-header__acts"], ["type", "button", 1, "rp-btn", "rp-btn--ghost"], [1, "isax", "isax-clock"], ["type", "button", 1, "rp-btn", "rp-btn--blue", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "isax", "isax-document-upload"], [1, "rp-toast", "rp-toast--blue"], [1, "rp-layout"], [1, "rp-layout__left"], [1, "rp-card"], [1, "rp-card__head"], [1, "isax", "isax-grid-2"], [1, "rp-card__title"], [1, "rp-type-grid"], [1, "rp-type-card", 3, "selected-blue"], [1, "isax", "isax-filter"], [1, "rp-filters"], [1, "rp-flt-row", "rp-flt-row--3"], [1, "rp-field"], [1, "rp-label"], [1, "rp-select", 3, "ngModelChange", "ngModel"], ["value", "mois"], ["value", "trimestre"], ["value", "duree"], ["value", "custom"], ["value", "toutes"], [3, "value"], ["value", "pdf"], ["value", "excel"], ["value", "csv"], [1, "rp-flt-row", "rp-flt-row--2"], ["value", "tous"], ["value", "actifs"], ["value", "difficulte"], ["type", "text", "placeholder", "Email(s) s\xE9par\xE9s par virgule", 1, "rp-input", 3, "ngModelChange", "ngModel"], [1, "rp-schedules"], [1, "rp-sched-row"], [1, "rp-layout__right"], [1, "isax", "isax-eye"], [1, "rp-badge", "rp-badge--blue"], [1, "rp-preview"], [1, "rp-preview__loading"], [1, "isax", "isax-lamp-on"], [1, "rp-insights"], [1, "rp-insight"], [1, "isax", "isax-clock-1"], [1, "rp-hist-list"], [1, "rp-hist-item"], [1, "isax", "isax-document-download"], [1, "rp-export-grid"], ["type", "button", 1, "rp-exp-btn", 3, "click"], [1, "isax", "isax-document", "rp-exp-icon", "rp-exp-icon--pdf"], [1, "rp-exp-label"], [1, "rp-exp-sub"], [1, "isax", "isax-document-text", "rp-exp-icon", "rp-exp-icon--excel"], [1, "isax", "isax-clipboard-text", "rp-exp-icon", "rp-exp-icon--csv"], [1, "isax", "isax-tick-circle"], [1, "rp-type-card", 3, "click"], [1, "rp-type-body"], [1, "rp-type-name"], [1, "rp-type-sub"], [1, "rp-sched-info"], [1, "rp-sched-label"], [1, "rp-sched-sub"], ["type", "button", 1, "rp-toggle", "rp-toggle--blue", 3, "click"], [1, "rp-toggle__thumb"], [1, "spinner-border", "spinner-border-sm", "text-secondary"], [1, "rp-preview__title"], [1, "rp-kpi-row"], [1, "rp-kpi"], [1, "rp-kpi__val"], [1, "rp-kpi__lbl"], [1, "rp-preview__section"], [1, "rp-preview__section-title"], [1, "isax", "isax-award"], [1, "rp-bar-row"], [1, "rp-bar-label", 3, "title"], [1, "rp-bar-track"], [1, "rp-bar-fill"], [1, "rp-bar-pct"], [1, "rp-insight__dot"], [1, "rp-insight__text"], [1, "rp-hist-info"], [1, "rp-hist-name"], [1, "rp-hist-meta"], [1, "rp-hist-date"], ["type", "button", "title", "T\xE9l\xE9charger", 1, "rp-hist-dl", 3, "click"]], template: function InstructorStatementsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275text(7, "Suivi apprenants, scores quiz et compl\xE9tion \xB7 donn\xE9es en temps r\xE9el");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275element(10, "i", 8);
      \u0275\u0275text(11, " Historique ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 9);
      \u0275\u0275listener("click", function InstructorStatementsComponent_Template_button_click_12_listener() {
        return ctx.generate();
      });
      \u0275\u0275conditionalCreate(13, InstructorStatementsComponent_Conditional_13_Template, 1, 0, "span", 10)(14, InstructorStatementsComponent_Conditional_14_Template, 1, 0, "i", 11);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(16, InstructorStatementsComponent_Conditional_16_Template, 3, 1, "div", 12);
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "div", 16);
      \u0275\u0275element(21, "i", 17);
      \u0275\u0275elementStart(22, "span", 18);
      \u0275\u0275text(23, "Type de rapport");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 19);
      \u0275\u0275repeaterCreate(25, InstructorStatementsComponent_For_26_Template, 8, 10, "div", 20, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 15)(28, "div", 16);
      \u0275\u0275element(29, "i", 21);
      \u0275\u0275elementStart(30, "span", 18);
      \u0275\u0275text(31, "Filtres & p\xE9rim\xE8tre");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 22)(33, "div", 23)(34, "div", 24)(35, "label", 25);
      \u0275\u0275text(36, "P\xE9riode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "select", 26);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorStatementsComponent_Template_select_ngModelChange_37_listener($event) {
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
      \u0275\u0275text(43, "Toute la dur\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "option", 30);
      \u0275\u0275text(45, "Personnalis\xE9e");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 24)(47, "label", 25);
      \u0275\u0275text(48, "Formation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "select", 26);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorStatementsComponent_Template_select_ngModelChange_49_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formation, $event) || (ctx.formation = $event);
        return $event;
      });
      \u0275\u0275elementStart(50, "option", 31);
      \u0275\u0275text(51, "Toutes");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(52, InstructorStatementsComponent_For_53_Template, 2, 2, "option", 32, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 24)(55, "label", 25);
      \u0275\u0275text(56, "Format export");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "select", 26);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorStatementsComponent_Template_select_ngModelChange_57_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.format, $event) || (ctx.format = $event);
        return $event;
      });
      \u0275\u0275elementStart(58, "option", 33);
      \u0275\u0275text(59, "PDF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "option", 34);
      \u0275\u0275text(61, "Excel (.xlsx)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "option", 35);
      \u0275\u0275text(63, "CSV");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(64, "div", 36)(65, "div", 24)(66, "label", 25);
      \u0275\u0275text(67, "Apprenants");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "select", 26);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorStatementsComponent_Template_select_ngModelChange_68_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.apprenants, $event) || (ctx.apprenants = $event);
        return $event;
      });
      \u0275\u0275elementStart(69, "option", 37);
      \u0275\u0275text(70, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "option", 38);
      \u0275\u0275text(72, "Actifs uniquement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "option", 39);
      \u0275\u0275text(74, "En difficult\xE9");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(75, "div", 24)(76, "label", 25);
      \u0275\u0275text(77, "Destinataire(s)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "input", 40);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorStatementsComponent_Template_input_ngModelChange_78_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.destinataire, $event) || (ctx.destinataire = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(79, "div", 15)(80, "div", 16);
      \u0275\u0275element(81, "i", 8);
      \u0275\u0275elementStart(82, "span", 18);
      \u0275\u0275text(83, "Planification automatique");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div", 41);
      \u0275\u0275repeaterCreate(85, InstructorStatementsComponent_For_86_Template, 8, 4, "div", 42, _forTrack2);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "div", 43)(88, "div", 15)(89, "div", 16);
      \u0275\u0275element(90, "i", 44);
      \u0275\u0275elementStart(91, "span", 18);
      \u0275\u0275text(92, "Aper\xE7u du rapport");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "span", 45);
      \u0275\u0275text(94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 46);
      \u0275\u0275conditionalCreate(96, InstructorStatementsComponent_Conditional_96_Template, 2, 0, "div", 47)(97, InstructorStatementsComponent_Conditional_97_Template, 19, 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div", 15)(99, "div", 16);
      \u0275\u0275element(100, "i", 48);
      \u0275\u0275elementStart(101, "span", 18);
      \u0275\u0275text(102, "Insights p\xE9dagogiques");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "div", 49);
      \u0275\u0275repeaterCreate(104, InstructorStatementsComponent_For_105_Template, 4, 3, "div", 50, _forTrack3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "div", 15)(107, "div", 16);
      \u0275\u0275element(108, "i", 51);
      \u0275\u0275elementStart(109, "span", 18);
      \u0275\u0275text(110, "Rapports r\xE9cents");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "div", 52);
      \u0275\u0275repeaterCreate(112, InstructorStatementsComponent_For_113_Template, 12, 9, "div", 53, _forTrack4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "div", 15)(115, "div", 16);
      \u0275\u0275element(116, "i", 54);
      \u0275\u0275elementStart(117, "span", 18);
      \u0275\u0275text(118, "Export rapide");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "div", 55)(120, "button", 56);
      \u0275\u0275listener("click", function InstructorStatementsComponent_Template_button_click_120_listener() {
        return ctx.exportQuick("pdf");
      });
      \u0275\u0275element(121, "i", 57);
      \u0275\u0275elementStart(122, "div", 58);
      \u0275\u0275text(123, "PDF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "div", 59);
      \u0275\u0275text(125, "Rapport complet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "button", 56);
      \u0275\u0275listener("click", function InstructorStatementsComponent_Template_button_click_126_listener() {
        return ctx.exportQuick("excel");
      });
      \u0275\u0275element(127, "i", 60);
      \u0275\u0275elementStart(128, "div", 58);
      \u0275\u0275text(129, "Excel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "div", 59);
      \u0275\u0275text(131, "Donn\xE9es brutes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "button", 56);
      \u0275\u0275listener("click", function InstructorStatementsComponent_Template_button_click_132_listener() {
        return ctx.exportQuick("csv");
      });
      \u0275\u0275element(133, "i", 61);
      \u0275\u0275elementStart(134, "div", 58);
      \u0275\u0275text(135, "CSV");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "div", 59);
      \u0275\u0275text(137, "Export complet");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("Rapports p\xE9dagogiques \u2014 ", ctx.getDisplayName());
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.generating);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.generating ? 13 : 14);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.generating ? "G\xE9n\xE9ration\u2026" : "G\xE9n\xE9rer maintenant", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.successMsg ? 16 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.types);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.periode);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.formation);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.formations);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.format);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.apprenants);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.destinataire);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.schedules);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.periodeLabel);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading ? 96 : 97);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.insights);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.recents);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.rp-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 14px 18px;\n  margin-bottom: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  flex-wrap: wrap;\n}\n.rp-header__icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.rp-header__icon--blue[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.rp-header__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.rp-header__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1E293B;\n}\n.rp-header__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n  margin-top: 2px;\n}\n.rp-header__acts[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.rp-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  border: 1px solid #E2E8F0;\n  transition: all 0.15s;\n}\n.rp-btn--ghost[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  color: #64748B;\n}\n.rp-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #F8FAFC;\n}\n.rp-btn--blue[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.rp-btn--blue[_ngcontent-%COMP%]:hover {\n  background: rgb(20.1142857143, 79.619047619, 138.2857142857);\n}\n.rp-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.rp-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.rp-toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.rp-toast--blue[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.rp-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 16px;\n  align-items: start;\n}\n@media (max-width: 1100px) {\n  .rp-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.rp-layout__left[_ngcontent-%COMP%], \n.rp-layout__right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.rp-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.rp-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #E2E8F0;\n}\n.rp-card__head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #64748B;\n}\n.rp-card__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1E293B;\n  flex: 1;\n}\n.rp-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.rp-badge--blue[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: rgb(20.7619047619, 82.1825396825, 142.7380952381);\n}\n.rp-type-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  padding: 12px 14px;\n}\n.rp-type-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  border: 1px solid #E2E8F0;\n  border-radius: 9px;\n  padding: 10px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.rp-type-card[_ngcontent-%COMP%]:hover {\n  border-color: rgb(199.1090909091, 210.6727272727, 226.0909090909);\n  background: #F8FAFC;\n}\n.rp-type-card.selected-blue[_ngcontent-%COMP%] {\n  border-color: #185FA5;\n  background: #E6F1FB;\n}\n.rp-type-card.selected-blue[_ngcontent-%COMP%]   .rp-type-name[_ngcontent-%COMP%] {\n  color: #185FA5;\n}\n.rp-type-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 7px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.rp-type-icon--blue[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.rp-type-icon--purple[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.rp-type-icon--green[_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.rp-type-icon--orange[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.rp-type-icon--red[_ngcontent-%COMP%] {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.rp-type-icon--gold[_ngcontent-%COMP%] {\n  background: #FFFBEB;\n  color: #B7891A;\n}\n.rp-type-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.rp-type-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1E293B;\n}\n.rp-type-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #64748B;\n  margin-top: 2px;\n  line-height: 1.3;\n}\n.rp-filters[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.rp-flt-row[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.rp-flt-row--3[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 768px) {\n  .rp-flt-row--3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.rp-flt-row--2[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n@media (max-width: 768px) {\n  .rp-flt-row--2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.rp-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.rp-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748B;\n  font-weight: 500;\n}\n.rp-select[_ngcontent-%COMP%], \n.rp-input[_ngcontent-%COMP%] {\n  border: 1px solid #E2E8F0;\n  border-radius: 7px;\n  padding: 6px 9px;\n  font-size: 12px;\n  color: #1E293B;\n  background: #FFFFFF;\n  width: 100%;\n  font-family: inherit;\n}\n.rp-select[_ngcontent-%COMP%]:focus, \n.rp-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #185FA5;\n}\n.rp-schedules[_ngcontent-%COMP%] {\n  padding: 4px 14px;\n}\n.rp-sched-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid #E2E8F0;\n}\n.rp-sched-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.rp-sched-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.rp-sched-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #1E293B;\n}\n.rp-sched-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748B;\n  margin-top: 1px;\n}\n.rp-toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #E2E8F0;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  border: none;\n  transition: background 0.2s;\n}\n.rp-toggle--blue.on[_ngcontent-%COMP%] {\n  background: #185FA5;\n}\n.rp-toggle__thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n}\n.rp-toggle.on[_ngcontent-%COMP%]   .rp-toggle__thumb[_ngcontent-%COMP%] {\n  left: 19px;\n}\n.rp-preview[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n}\n.rp-preview__loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 24px;\n}\n.rp-preview__title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748B;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 10px;\n}\n.rp-preview__section[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.rp-preview__section-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #64748B;\n  margin-bottom: 7px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.rp-preview__section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.rp-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 6px;\n}\n.rp-kpi[_ngcontent-%COMP%] {\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  padding: 8px;\n  text-align: center;\n}\n.rp-kpi__val[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  color: #1E293B;\n}\n.rp-kpi__lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #64748B;\n  margin-top: 1px;\n}\n.rp-bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.rp-bar-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748B;\n  width: 90px;\n  flex-shrink: 0;\n  text-align: right;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rp-bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 7px;\n  background: #E2E8F0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.rp-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s;\n}\n.rp-bar-fill--blue[_ngcontent-%COMP%] {\n  background: #185FA5;\n}\n.rp-bar-fill--ko[_ngcontent-%COMP%] {\n  background: #E24B4A;\n}\n.rp-bar-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #1E293B;\n  width: 30px;\n  text-align: right;\n}\n.rp-insights[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px 14px;\n}\n.rp-insight[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px 10px;\n  border-radius: 8px;\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n}\n.rp-insight__dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.rp-insight__text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n  line-height: 1.4;\n}\n.rp-insight[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1E293B;\n  font-weight: 500;\n}\n.rp-export-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  padding: 12px 14px;\n}\n.rp-exp-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  padding: 12px 8px;\n  border: 1px solid #E2E8F0;\n  border-radius: 9px;\n  cursor: pointer;\n  background: transparent;\n  transition: all 0.15s;\n}\n.rp-exp-btn[_ngcontent-%COMP%]:hover {\n  background: #F8FAFC;\n  border-color: rgb(199.1090909091, 210.6727272727, 226.0909090909);\n}\n.rp-exp-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.rp-exp-icon--pdf[_ngcontent-%COMP%] {\n  color: #A32D2D;\n}\n.rp-exp-icon--excel[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.rp-exp-icon--csv[_ngcontent-%COMP%] {\n  color: #854F0B;\n}\n.rp-exp-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1E293B;\n}\n.rp-exp-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #64748B;\n}\n.rp-hist-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.rp-hist-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n  border-bottom: 1px solid #E2E8F0;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.rp-hist-item[_ngcontent-%COMP%]:hover {\n  background: #F8FAFC;\n}\n.rp-hist-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.rp-hist-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n}\n.rp-hist-icon--pdf[_ngcontent-%COMP%] {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.rp-hist-icon--excel[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.rp-hist-icon--csv[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.rp-hist-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.rp-hist-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1E293B;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rp-hist-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748B;\n  margin-top: 1px;\n}\n.rp-hist-date[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #64748B;\n  flex-shrink: 0;\n}\n.rp-hist-dl[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border: 1px solid #E2E8F0;\n  border-radius: 7px;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  color: #64748B;\n  flex-shrink: 0;\n}\n.rp-hist-dl[_ngcontent-%COMP%]:hover {\n  background: #E6F1FB;\n  color: #185FA5;\n  border-color: #185FA5;\n}\n/*# sourceMappingURL=instructor-statements.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorStatementsComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-statements", imports: [CommonModule, FormsModule], template: `<!-- \u2500\u2500 PAGE HEADER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div class="rp-header">\r
  <div class="rp-header__icon rp-header__icon--blue">\r
    <i class="isax isax-receipt-item"></i>\r
  </div>\r
  <div class="rp-header__info">\r
    <div class="rp-header__title">Rapports p\xE9dagogiques \u2014 {{ getDisplayName() }}</div>\r
    <div class="rp-header__sub">Suivi apprenants, scores quiz et compl\xE9tion \xB7 donn\xE9es en temps r\xE9el</div>\r
  </div>\r
  <div class="rp-header__acts">\r
    <button type="button" class="rp-btn rp-btn--ghost">\r
      <i class="isax isax-clock"></i> Historique\r
    </button>\r
    <button type="button" class="rp-btn rp-btn--blue" (click)="generate()" [disabled]="generating">\r
      @if (generating) { <span class="spinner-border spinner-border-sm me-1"></span> }\r
      @else { <i class="isax isax-document-upload"></i> }\r
      {{ generating ? 'G\xE9n\xE9ration\u2026' : 'G\xE9n\xE9rer maintenant' }}\r
    </button>\r
  </div>\r
</div>\r
\r
@if (successMsg) {\r
  <div class="rp-toast rp-toast--blue">\r
    <i class="isax isax-tick-circle"></i> {{ successMsg }}\r
  </div>\r
}\r
\r
<div class="rp-layout">\r
\r
  <!-- LEFT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="rp-layout__left">\r
\r
    <!-- Type de rapport -->\r
    <div class="rp-card">\r
      <div class="rp-card__head">\r
        <i class="isax isax-grid-2"></i>\r
        <span class="rp-card__title">Type de rapport</span>\r
      </div>\r
      <div class="rp-type-grid">\r
        @for (t of types; track t.key) {\r
          <div class="rp-type-card"\r
               [class.selected-blue]="selectedType === t.key"\r
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
        <span class="rp-card__title">Filtres & p\xE9rim\xE8tre</span>\r
      </div>\r
      <div class="rp-filters">\r
        <div class="rp-flt-row rp-flt-row--3">\r
          <div class="rp-field">\r
            <label class="rp-label">P\xE9riode</label>\r
            <select class="rp-select" [(ngModel)]="periode">\r
              <option value="mois">Ce mois</option>\r
              <option value="trimestre">Ce trimestre</option>\r
              <option value="duree">Toute la dur\xE9e</option>\r
              <option value="custom">Personnalis\xE9e</option>\r
            </select>\r
          </div>\r
          <div class="rp-field">\r
            <label class="rp-label">Formation</label>\r
            <select class="rp-select" [(ngModel)]="formation">\r
              <option value="toutes">Toutes</option>\r
              @for (f of formations; track f.id) {\r
                <option [value]="f.id">{{ f.titre || f.title }}</option>\r
              }\r
            </select>\r
          </div>\r
          <div class="rp-field">\r
            <label class="rp-label">Format export</label>\r
            <select class="rp-select" [(ngModel)]="format">\r
              <option value="pdf">PDF</option>\r
              <option value="excel">Excel (.xlsx)</option>\r
              <option value="csv">CSV</option>\r
            </select>\r
          </div>\r
        </div>\r
        <div class="rp-flt-row rp-flt-row--2">\r
          <div class="rp-field">\r
            <label class="rp-label">Apprenants</label>\r
            <select class="rp-select" [(ngModel)]="apprenants">\r
              <option value="tous">Tous</option>\r
              <option value="actifs">Actifs uniquement</option>\r
              <option value="difficulte">En difficult\xE9</option>\r
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
        <span class="rp-card__title">Planification automatique</span>\r
      </div>\r
      <div class="rp-schedules">\r
        @for (s of schedules; track s.label) {\r
          <div class="rp-sched-row">\r
            <div class="rp-sched-info">\r
              <div class="rp-sched-label">{{ s.label }}</div>\r
              <div class="rp-sched-sub">{{ s.sub }}</div>\r
            </div>\r
            <button type="button" class="rp-toggle rp-toggle--blue" [class.on]="s.on" (click)="s.on = !s.on">\r
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
        <span class="rp-card__title">Aper\xE7u du rapport</span>\r
        <span class="rp-badge rp-badge--blue">{{ periodeLabel }}</span>\r
      </div>\r
      <div class="rp-preview">\r
        @if (loading) {\r
          <div class="rp-preview__loading">\r
            <div class="spinner-border spinner-border-sm text-secondary"></div>\r
          </div>\r
        } @else {\r
          <div class="rp-preview__title">Performance p\xE9dagogique</div>\r
          <!-- KPIs -->\r
          <div class="rp-kpi-row">\r
            <div class="rp-kpi">\r
              <div class="rp-kpi__val">{{ completion }}%</div>\r
              <div class="rp-kpi__lbl">Compl\xE9tion</div>\r
            </div>\r
            <div class="rp-kpi">\r
              <div class="rp-kpi__val">{{ certifies }}</div>\r
              <div class="rp-kpi__lbl">Certifi\xE9s</div>\r
            </div>\r
            <div class="rp-kpi">\r
              <div class="rp-kpi__val">{{ difficulte }}</div>\r
              <div class="rp-kpi__lbl">En difficult\xE9</div>\r
            </div>\r
          </div>\r
          <!-- Quiz par formation -->\r
          @if (quizBars.length) {\r
            <div class="rp-preview__section">\r
              <div class="rp-preview__section-title">\r
                <i class="isax isax-award"></i> Scores quiz par formation\r
              </div>\r
              @for (q of quizBars; track q.label) {\r
                <div class="rp-bar-row">\r
                  <span class="rp-bar-label" [title]="q.label">{{ q.label }}</span>\r
                  <div class="rp-bar-track">\r
                    <div class="rp-bar-fill"\r
                         [class.rp-bar-fill--blue]="q.pct >= 60"\r
                         [class.rp-bar-fill--ko]="q.pct < 60"\r
                         [style.width.%]="q.pct"></div>\r
                  </div>\r
                  <span class="rp-bar-pct">{{ q.pct }}%</span>\r
                </div>\r
              }\r
            </div>\r
          }\r
        }\r
      </div>\r
    </div>\r
\r
    <!-- Insights -->\r
    <div class="rp-card">\r
      <div class="rp-card__head">\r
        <i class="isax isax-lamp-on"></i>\r
        <span class="rp-card__title">Insights p\xE9dagogiques</span>\r
      </div>\r
      <div class="rp-insights">\r
        @for (ins of insights; track ins.text) {\r
          <div class="rp-insight">\r
            <div class="rp-insight__dot" [style.background]="ins.color"></div>\r
            <div class="rp-insight__text">{{ ins.text }}</div>\r
          </div>\r
        }\r
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
          <div class="rp-exp-sub">Export complet</div>\r
        </button>\r
      </div>\r
    </div>\r
\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/instructor/instructor-statements/instructor-statements.component.scss */\n.rp-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 14px 18px;\n  margin-bottom: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  flex-wrap: wrap;\n}\n.rp-header__icon {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.rp-header__icon--blue {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.rp-header__info {\n  flex: 1;\n  min-width: 0;\n}\n.rp-header__title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1E293B;\n}\n.rp-header__sub {\n  font-size: 12px;\n  color: #64748B;\n  margin-top: 2px;\n}\n.rp-header__acts {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.rp-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  border: 1px solid #E2E8F0;\n  transition: all 0.15s;\n}\n.rp-btn--ghost {\n  background: #FFFFFF;\n  color: #64748B;\n}\n.rp-btn--ghost:hover {\n  background: #F8FAFC;\n}\n.rp-btn--blue {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.rp-btn--blue:hover {\n  background: rgb(20.1142857143, 79.619047619, 138.2857142857);\n}\n.rp-btn i {\n  font-size: 14px;\n}\n.rp-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.rp-toast {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.rp-toast--blue {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.rp-layout {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 16px;\n  align-items: start;\n}\n@media (max-width: 1100px) {\n  .rp-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.rp-layout__left,\n.rp-layout__right {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.rp-card {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.rp-card__head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #E2E8F0;\n}\n.rp-card__head i {\n  font-size: 15px;\n  color: #64748B;\n}\n.rp-card__title {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1E293B;\n  flex: 1;\n}\n.rp-badge {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.rp-badge--blue {\n  background: #E6F1FB;\n  color: rgb(20.7619047619, 82.1825396825, 142.7380952381);\n}\n.rp-type-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  padding: 12px 14px;\n}\n.rp-type-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  border: 1px solid #E2E8F0;\n  border-radius: 9px;\n  padding: 10px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.rp-type-card:hover {\n  border-color: rgb(199.1090909091, 210.6727272727, 226.0909090909);\n  background: #F8FAFC;\n}\n.rp-type-card.selected-blue {\n  border-color: #185FA5;\n  background: #E6F1FB;\n}\n.rp-type-card.selected-blue .rp-type-name {\n  color: #185FA5;\n}\n.rp-type-icon {\n  width: 28px;\n  height: 28px;\n  border-radius: 7px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.rp-type-icon--blue {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.rp-type-icon--purple {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.rp-type-icon--green {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.rp-type-icon--orange {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.rp-type-icon--red {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.rp-type-icon--gold {\n  background: #FFFBEB;\n  color: #B7891A;\n}\n.rp-type-body {\n  flex: 1;\n}\n.rp-type-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1E293B;\n}\n.rp-type-sub {\n  font-size: 10px;\n  color: #64748B;\n  margin-top: 2px;\n  line-height: 1.3;\n}\n.rp-filters {\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.rp-flt-row {\n  display: grid;\n  gap: 8px;\n}\n.rp-flt-row--3 {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 768px) {\n  .rp-flt-row--3 {\n    grid-template-columns: 1fr;\n  }\n}\n.rp-flt-row--2 {\n  grid-template-columns: 1fr 1fr;\n}\n@media (max-width: 768px) {\n  .rp-flt-row--2 {\n    grid-template-columns: 1fr;\n  }\n}\n.rp-field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.rp-label {\n  font-size: 11px;\n  color: #64748B;\n  font-weight: 500;\n}\n.rp-select,\n.rp-input {\n  border: 1px solid #E2E8F0;\n  border-radius: 7px;\n  padding: 6px 9px;\n  font-size: 12px;\n  color: #1E293B;\n  background: #FFFFFF;\n  width: 100%;\n  font-family: inherit;\n}\n.rp-select:focus,\n.rp-input:focus {\n  outline: none;\n  border-color: #185FA5;\n}\n.rp-schedules {\n  padding: 4px 14px;\n}\n.rp-sched-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid #E2E8F0;\n}\n.rp-sched-row:last-child {\n  border-bottom: none;\n}\n.rp-sched-info {\n  flex: 1;\n}\n.rp-sched-label {\n  font-size: 12px;\n  color: #1E293B;\n}\n.rp-sched-sub {\n  font-size: 11px;\n  color: #64748B;\n  margin-top: 1px;\n}\n.rp-toggle {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #E2E8F0;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  border: none;\n  transition: background 0.2s;\n}\n.rp-toggle--blue.on {\n  background: #185FA5;\n}\n.rp-toggle__thumb {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n}\n.rp-toggle.on .rp-toggle__thumb {\n  left: 19px;\n}\n.rp-preview {\n  padding: 12px 14px;\n}\n.rp-preview__loading {\n  display: flex;\n  justify-content: center;\n  padding: 24px;\n}\n.rp-preview__title {\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748B;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 10px;\n}\n.rp-preview__section {\n  margin-top: 12px;\n}\n.rp-preview__section-title {\n  font-size: 11px;\n  font-weight: 500;\n  color: #64748B;\n  margin-bottom: 7px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.rp-preview__section-title i {\n  font-size: 13px;\n}\n.rp-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 6px;\n}\n.rp-kpi {\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  padding: 8px;\n  text-align: center;\n}\n.rp-kpi__val {\n  font-size: 17px;\n  font-weight: 600;\n  color: #1E293B;\n}\n.rp-kpi__lbl {\n  font-size: 10px;\n  color: #64748B;\n  margin-top: 1px;\n}\n.rp-bar-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.rp-bar-label {\n  font-size: 11px;\n  color: #64748B;\n  width: 90px;\n  flex-shrink: 0;\n  text-align: right;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rp-bar-track {\n  flex: 1;\n  height: 7px;\n  background: #E2E8F0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.rp-bar-fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s;\n}\n.rp-bar-fill--blue {\n  background: #185FA5;\n}\n.rp-bar-fill--ko {\n  background: #E24B4A;\n}\n.rp-bar-pct {\n  font-size: 11px;\n  font-weight: 600;\n  color: #1E293B;\n  width: 30px;\n  text-align: right;\n}\n.rp-insights {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px 14px;\n}\n.rp-insight {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px 10px;\n  border-radius: 8px;\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n}\n.rp-insight__dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.rp-insight__text {\n  font-size: 12px;\n  color: #64748B;\n  line-height: 1.4;\n}\n.rp-insight strong {\n  color: #1E293B;\n  font-weight: 500;\n}\n.rp-export-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  padding: 12px 14px;\n}\n.rp-exp-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  padding: 12px 8px;\n  border: 1px solid #E2E8F0;\n  border-radius: 9px;\n  cursor: pointer;\n  background: transparent;\n  transition: all 0.15s;\n}\n.rp-exp-btn:hover {\n  background: #F8FAFC;\n  border-color: rgb(199.1090909091, 210.6727272727, 226.0909090909);\n}\n.rp-exp-icon {\n  font-size: 24px;\n}\n.rp-exp-icon--pdf {\n  color: #A32D2D;\n}\n.rp-exp-icon--excel {\n  color: #3B6D11;\n}\n.rp-exp-icon--csv {\n  color: #854F0B;\n}\n.rp-exp-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1E293B;\n}\n.rp-exp-sub {\n  font-size: 10px;\n  color: #64748B;\n}\n.rp-hist-list {\n  display: flex;\n  flex-direction: column;\n}\n.rp-hist-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n  border-bottom: 1px solid #E2E8F0;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.rp-hist-item:hover {\n  background: #F8FAFC;\n}\n.rp-hist-item:last-child {\n  border-bottom: none;\n}\n.rp-hist-icon {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n}\n.rp-hist-icon--pdf {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.rp-hist-icon--excel {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.rp-hist-icon--csv {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.rp-hist-info {\n  flex: 1;\n  min-width: 0;\n}\n.rp-hist-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1E293B;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rp-hist-meta {\n  font-size: 11px;\n  color: #64748B;\n  margin-top: 1px;\n}\n.rp-hist-date {\n  font-size: 10px;\n  color: #64748B;\n  flex-shrink: 0;\n}\n.rp-hist-dl {\n  width: 26px;\n  height: 26px;\n  border: 1px solid #E2E8F0;\n  border-radius: 7px;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  color: #64748B;\n  flex-shrink: 0;\n}\n.rp-hist-dl:hover {\n  background: #E6F1FB;\n  color: #185FA5;\n  border-color: #185FA5;\n}\n/*# sourceMappingURL=instructor-statements.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }, { type: AuthService }, { type: RapportExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorStatementsComponent, { className: "InstructorStatementsComponent", filePath: "app/features/instructor/instructor-statements/instructor-statements.component.ts", lineNumber: 21 });
})();
export {
  InstructorStatementsComponent
};
//# sourceMappingURL=chunk-HZR4WBHI.js.map
