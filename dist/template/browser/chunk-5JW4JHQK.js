import {
  RapportExportService
} from "./chunk-GNSMQYWH.js";
import "./chunk-5RVU2RVV.js";
import {
  TicketService
} from "./chunk-SLJU2SMA.js";
import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-IKOSZIEY.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-TLD64Y2W.js";
import {
  CommonModule
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
} from "./chunk-VTSSTHJF.js";
import "./chunk-4MWRP73S.js";

// src/app/features/superadmin/superadmin-rapports/superadmin-rapports.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.value;
var _forTrack2 = ($index, $item) => $item.label;
var _forTrack3 = ($index, $item) => $item.nom;
function SuperadminRapportsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 10);
  }
}
function SuperadminRapportsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function SuperadminRapportsComponent_Conditional_16_Template(rf, ctx) {
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
function SuperadminRapportsComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function SuperadminRapportsComponent_For_26_Template_div_click_0_listener() {
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
    \u0275\u0275classProp("selected-purple", ctx_r0.selectedType === t_r3.key);
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
function SuperadminRapportsComponent_For_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r4 = ctx.$implicit;
    \u0275\u0275property("value", e_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r4.label);
  }
}
function SuperadminRapportsComponent_For_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 67)(2, "div", 68);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 69);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 70);
    \u0275\u0275listener("click", function SuperadminRapportsComponent_For_102_Template_button_click_6_listener() {
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
function SuperadminRapportsComponent_Conditional_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "div", 72);
    \u0275\u0275elementEnd();
  }
}
function SuperadminRapportsComponent_Conditional_113_Conditional_62_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "span", 86);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 87);
    \u0275\u0275element(4, "div", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 89);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("title", e_r7.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r7.label);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", e_r7.pct, "%");
    \u0275\u0275classProp("rp-bar-fill--purple", e_r7.pct >= 65)("rp-bar-fill--orange", e_r7.pct < 65);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", e_r7.pct, "%");
  }
}
function SuperadminRapportsComponent_Conditional_113_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 75);
    \u0275\u0275element(2, "i", 84);
    \u0275\u0275text(3, " Certification par entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, SuperadminRapportsComponent_Conditional_113_Conditional_62_For_5_Template, 7, 9, "div", 85, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.entreprises);
  }
}
function SuperadminRapportsComponent_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 74)(3, "div", 75);
    \u0275\u0275element(4, "i", 76);
    \u0275\u0275text(5, " Utilisateurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 77)(7, "div", 78)(8, "div", 79);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 80);
    \u0275\u0275text(11, "Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 78)(13, "div", 79);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 80);
    \u0275\u0275text(16, "Actifs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 78)(18, "div", 79);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 80);
    \u0275\u0275text(21, "% Certifi\xE9s");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 74)(23, "div", 75);
    \u0275\u0275element(24, "i", 81);
    \u0275\u0275text(25, " Formations & sessions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 77)(27, "div", 78)(28, "div", 79);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 80);
    \u0275\u0275text(31, "Formations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 78)(33, "div", 79);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 80);
    \u0275\u0275text(36, "Sessions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 78)(38, "div", 79);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 80);
    \u0275\u0275text(41, "Demandes");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 74)(43, "div", 75);
    \u0275\u0275element(44, "i", 82);
    \u0275\u0275text(45, " Support & tickets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 77)(47, "div", 78)(48, "div", 79);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 80);
    \u0275\u0275text(51, "Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 78)(53, "div", 79);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 80);
    \u0275\u0275text(56, "Ouverts / En cours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 78)(58, "div", 79);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 80);
    \u0275\u0275text(61, "R\xE9solus / Ferm\xE9s");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(62, SuperadminRapportsComponent_Conditional_113_Conditional_62_Template, 6, 0, "div", 74);
    \u0275\u0275elementStart(63, "div", 74)(64, "div", 75);
    \u0275\u0275element(65, "i", 83);
    \u0275\u0275text(66, " Certifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 77)(68, "div", 78)(69, "div", 79);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 80);
    \u0275\u0275text(72, "D\xE9livr\xE9s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 78)(74, "div", 79);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 80);
    \u0275\u0275text(77, "Expirent <30j");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 78)(79, "div", 79);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 80);
    \u0275\u0275text(82, "Score moy.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Performance globale \u2014 ", ctx_r0.periodeLabel);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.totalUsers);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.activeUsers);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.completion, "%");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.totalFormations);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalSessions);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalDemandes);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.totalTickets);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.ticketsOuverts);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalTickets - ctx_r0.ticketsOuverts);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.entreprises.length ? 62 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.totalCerts);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.certExpiring);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.scoresMoy > 0 ? ctx_r0.scoresMoy + "%" : "\u2014");
  }
}
function SuperadminRapportsComponent_For_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div");
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 90)(4, "div", 91);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 92);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 93);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 94);
    \u0275\u0275listener("click", function SuperadminRapportsComponent_For_121_Template_button_click_10_listener() {
      const r_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.downloadRecent(r_r9));
    });
    \u0275\u0275element(11, "i", 54);
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
var SuperadminRapportsComponent = class _SuperadminRapportsComponent {
  http;
  exportSvc;
  ticketService;
  selectedType = "multi";
  types = [
    { key: "multi", icon: "isax-buildings-2", color: "purple", label: "Multi-entreprises", sub: "Vue consolid\xE9e de toutes les entreprises" },
    { key: "entreprise", icon: "isax-profile-2user", color: "gray", label: "Par entreprise", sub: "Rapport cibl\xE9 sur une seule entreprise" },
    { key: "certifications", icon: "isax-medal", color: "orange", label: "Certifications", sub: "D\xE9livr\xE9s, expirations, renouvellements" },
    { key: "support", icon: "isax-ticket", color: "gray", label: "Support & tickets", sub: "D\xE9lais de r\xE9solution, satisfaction" },
    { key: "performance", icon: "isax-chart-2", color: "purple", label: "Performance globale", sub: "KPIs consolid\xE9s plateforme" },
    { key: "financier", icon: "isax-wallet-add", color: "gray", label: "Financier", sub: "Formations, prix, inscrits" }
  ];
  periode = "trimestre";
  entreprise = "toutes";
  format = "pdf";
  formationsF = "toutes";
  groupe = "entreprise";
  langue = "fr";
  schedules = [
    { label: "Rapport hebdomadaire", sub: "Chaque lundi 08h00 \xB7 envoy\xE9 aux Admin RH", on: true },
    { label: "Rapport mensuel consolid\xE9", sub: "1er de chaque mois \xB7 toutes entreprises + direction", on: true },
    { label: "Alerte expirations certificats", sub: "30j avant \xB7 email automatique aux concern\xE9s", on: false }
  ];
  // ── KPIs ───────────────────────────────────────────────
  totalUsers = 0;
  activeUsers = 0;
  completion = 0;
  totalCerts = 0;
  certExpiring = 0;
  scoresMoy = 0;
  totalFormations = 0;
  totalSessions = 0;
  totalDemandes = 0;
  entreprises = [];
  entrepriseOptions = [];
  loading = false;
  generating = false;
  successMsg = "";
  recents = [];
  // ── Données brutes ─────────────────────────────────────
  rawUsers = [];
  rawCerts = [];
  rawClients = [];
  rawFormations = [];
  rawSessions = [];
  rawQuizzes = [];
  rawDemandes = [];
  rawTickets = [];
  totalTickets = 0;
  ticketsOuverts = 0;
  constructor(http, exportSvc, ticketService) {
    this.http = http;
    this.exportSvc = exportSvc;
    this.ticketService = ticketService;
  }
  get headers() {
    const token = localStorage.getItem("pyramide_token");
    return new HttpHeaders({ "Authorization": `Bearer ${token}`, "Content-Type": "application/json" });
  }
  ngOnInit() {
    this.loadPreview();
  }
  // ════════════════════════════════════════════════════════
  // CHARGEMENT
  // ════════════════════════════════════════════════════════
  loadPreview() {
    this.loading = true;
    forkJoin({
      users: this.http.get(`${environment.apiUrl}/users`, { headers: this.headers }).pipe(catchError(() => of({ users: [] }))),
      certs: this.http.get(`${environment.apiUrl}/certificats`, { headers: this.headers }).pipe(catchError(() => of([]))),
      clients: this.http.get(`${environment.apiUrl}/entreprises`, { headers: this.headers }).pipe(catchError(() => of({ data: [] }))),
      formations: this.http.get(`${environment.apiUrl}/formations`, { headers: this.headers }).pipe(catchError(() => of([]))),
      sessions: this.http.get(`${environment.apiUrl}/sessions-formation`, { headers: this.headers }).pipe(catchError(() => of([]))),
      quizzes: this.http.get(`${environment.apiUrl}/quizzes`, { headers: this.headers }).pipe(catchError(() => of([]))),
      demandes: this.http.get(`${environment.apiUrl}/demandes-formation`, { headers: this.headers }).pipe(catchError(() => of([]))),
      tickets: this.ticketService.getTickets({ par_page: 1e3 }).pipe(catchError(() => of({ data: { data: [] } })))
    }).subscribe({
      next: ({ users, certs, clients, formations, sessions, quizzes, demandes, tickets }) => {
        this.rawUsers = users.users || users.data || (Array.isArray(users) ? users : []);
        this.rawCerts = Array.isArray(certs) ? certs : certs.certificats || certs.data || [];
        this.rawClients = clients.data || clients.entreprises || (Array.isArray(clients) ? clients : []);
        this.rawFormations = formations.data || formations.formations || (Array.isArray(formations) ? formations : []);
        this.rawSessions = sessions.data || sessions.sessions || (Array.isArray(sessions) ? sessions : []);
        this.rawQuizzes = quizzes.data || quizzes.quizzes || (Array.isArray(quizzes) ? quizzes : []);
        this.rawDemandes = demandes.demandes || demandes.data || (Array.isArray(demandes) ? demandes : []);
        this.rawTickets = tickets?.data?.data || tickets?.data || [];
        this.totalUsers = this.rawUsers.length;
        this.activeUsers = this.rawUsers.filter((u) => u.statut === 1 || u.statut === "actif").length;
        const certifiedIds = new Set(this.rawCerts.map((c) => c.employe_id));
        this.completion = this.totalUsers ? Math.round(certifiedIds.size / this.totalUsers * 100) : 0;
        this.totalCerts = this.rawCerts.length;
        this.certExpiring = this.rawCerts.filter((c) => {
          if (!c.date_expiration)
            return false;
          const diff = new Date(c.date_expiration).getTime() - Date.now();
          return diff > 0 && diff < 30 * 864e5;
        }).length;
        const scores = this.rawCerts.map((c) => Number(c.score_final)).filter((n) => !isNaN(n) && n > 0);
        this.scoresMoy = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
        this.totalFormations = this.rawFormations.length;
        this.totalSessions = this.rawSessions.length;
        this.totalDemandes = this.rawDemandes.length;
        this.totalTickets = this.rawTickets.length;
        this.ticketsOuverts = this.rawTickets.filter((t) => t.statut === "ouvert" || t.statut === "en_cours").length;
        this.entrepriseOptions = this.rawClients.map((e) => ({
          value: String(e.id),
          label: e.nom || e.name || `Entreprise ${e.id}`
        }));
        this.entreprises = this.rawClients.slice(0, 5).map((e) => {
          const empCount = this.rawUsers.filter((u) => u.entreprise_id === e.id).length;
          const certCount = this.rawCerts.filter((c) => c.entreprise_id === e.id).length;
          const pct = empCount > 0 ? Math.min(100, Math.round(certCount / empCount * 100)) : 0;
          return { label: e.nom || e.name || `Entreprise ${e.id}`, pct };
        });
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  // ════════════════════════════════════════════════════════
  // ACTIONS
  // ════════════════════════════════════════════════════════
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
  // ════════════════════════════════════════════════════════
  // EXPORT
  // ════════════════════════════════════════════════════════
  doExport(fmt) {
    const filename = `rapport-superadmin-${this.selectedType}-${this.periode}-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}`;
    if (fmt === "pdf") {
      if (this.selectedType === "multi") {
        this.exportSvc.exportPdf("Rapport global \u2014 toutes entreprises", [
          { heading: "Utilisateurs", rows: this.buildUserRows() },
          { heading: "Entreprises", rows: this.buildClientRows() },
          { heading: "Certifications", rows: this.buildCertRows() },
          { heading: "Support & tickets", rows: this.buildTicketRows() }
        ], filename);
      } else {
        const labelMap = {
          entreprise: "Par entreprise",
          certifications: "Certifications",
          support: "Support & tickets",
          performance: "Performance globale",
          financier: "Donn\xE9es financi\xE8res"
        };
        this.exportSvc.exportPdf(`Rapport \u2014 ${labelMap[this.selectedType] ?? this.selectedType}`, [{ heading: labelMap[this.selectedType] ?? this.selectedType, rows: this.buildRows() }], filename);
      }
    } else if (fmt === "excel") {
      this.exportSvc.exportExcel(this.buildRows(), filename);
    } else if (fmt === "csv") {
      this.exportSvc.exportCsv(this.buildRows(), filename);
    } else if (fmt === "json") {
      const json = JSON.stringify(this.buildRows(), null, 2);
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename + ".json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  }
  // ════════════════════════════════════════════════════════
  // BUILDERS (dispatch par type)
  // ════════════════════════════════════════════════════════
  buildRows() {
    switch (this.selectedType) {
      case "certifications":
        return this.buildCertRows();
      case "entreprise":
        return this.buildClientRows();
      case "performance":
        return this.buildPerformanceRows();
      case "financier":
        return this.buildFinancierRows();
      case "support":
        return this.buildTicketRows();
      default:
        return this.buildUserRows();
    }
  }
  buildUserRows() {
    return this.applyFilters(this.rawUsers, "entreprise_id", "created_at").map((u) => ({
      "Nom": u.name || `${u.prenom ?? ""} ${u.nom ?? ""}`.trim() || "\u2014",
      "Email": u.email || "\u2014",
      "R\xF4le": u.role?.name || u.role || "\u2014",
      "Entreprise": u.entreprise?.nom || u.entreprise_nom || "\u2014",
      "Direction": u.direction || "\u2014",
      "Matricule": u.matricule || "\u2014",
      "Statut": u.statut === 1 || u.statut === "actif" ? "Actif" : "Inactif",
      "Inscrit le": u.created_at ? new Date(u.created_at).toLocaleDateString("fr-FR") : "\u2014"
    }));
  }
  buildCertRows() {
    return this.applyFilters(this.rawCerts, "entreprise_id", "date_delivrance").map((c) => ({
      "Employ\xE9": c.employe ? `${c.employe.prenom ?? ""} ${c.employe.nom ?? c.employe.name ?? ""}`.trim() || c.employe.name || "\u2014" : "\u2014",
      "Email": c.employe?.email || "\u2014",
      "Formation": c.formation?.titre || "\u2014",
      "Session": c.session?.titre || "\u2014",
      "Entreprise": c.entreprise?.nom || "\u2014",
      "Formateur": c.formateur ? `${c.formateur.prenom ?? ""} ${c.formateur.nom ?? c.formateur.name ?? ""}`.trim() || "\u2014" : "\u2014",
      "Code": c.code_unique || "\u2014",
      "Score": c.score_final != null ? `${c.score_final}%` : "\u2014",
      "D\xE9livr\xE9 le": c.date_delivrance ? new Date(c.date_delivrance).toLocaleDateString("fr-FR") : "\u2014",
      "Expiration": c.date_expiration ? new Date(c.date_expiration).toLocaleDateString("fr-FR") : "\u2014",
      "Statut": c.statut || "\u2014"
    }));
  }
  buildClientRows() {
    return this.rawClients.map((e) => {
      const empCount = this.rawUsers.filter((u) => u.entreprise_id === e.id).length;
      const certCount = this.rawCerts.filter((c) => c.entreprise_id === e.id).length;
      return {
        "Entreprise": e.nom || e.name || "\u2014",
        "Email": e.email || "\u2014",
        "Secteur": e.secteur_activite || "\u2014",
        "Pays": e.pays || "\u2014",
        "Statut": e.statut || "\u2014",
        "Employ\xE9s": empCount,
        "Certifications": certCount,
        "Abonnement": e.abonnement || "\u2014"
      };
    });
  }
  buildPerformanceRows() {
    return this.rawClients.map((e) => {
      const users = this.rawUsers.filter((u) => u.entreprise_id === e.id);
      const actives = users.filter((u) => u.statut === 1 || u.statut === "actif").length;
      const certs = this.rawCerts.filter((c) => c.entreprise_id === e.id);
      const scores = certs.map((c) => Number(c.score_final)).filter((n) => !isNaN(n) && n > 0);
      const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
      const fmts = this.rawFormations.filter((f) => f.entreprise_id === e.id);
      return {
        "Entreprise": e.nom || "\u2014",
        "Employ\xE9s total": users.length,
        "Actifs": actives,
        "Formations": fmts.length,
        "Certifications": certs.length,
        "Score moyen": avg ? `${avg}%` : "\u2014"
      };
    });
  }
  buildFinancierRows() {
    return this.applyFilters(this.rawFormations, "entreprise_id", "created_at").map((f) => ({
      "Formation": f.titre || "\u2014",
      "Entreprise": f.entreprise?.nom || "\u2014",
      "Type": f.type || "\u2014",
      "Prix": f.prix != null && f.prix > 0 ? `${f.prix} XOF` : "Gratuit",
      "Statut": f.est_publie ? "Publi\xE9e" : "Non publi\xE9e",
      "Inscrits": f.nb_inscriptions ?? "\u2014",
      "Date d\xE9but": f.date_debut ? new Date(f.date_debut).toLocaleDateString("fr-FR") : "\u2014"
    }));
  }
  buildDemandesRows() {
    return this.rawDemandes.map((d) => ({
      "Employ\xE9": d.employe ? `${d.employe.prenom ?? ""} ${d.employe.nom ?? d.employe.name ?? ""}`.trim() || d.employe.name || "\u2014" : "\u2014",
      "Email": d.employe?.email || "\u2014",
      "Entreprise": d.employe?.entreprise_id ? `#${d.employe.entreprise_id}` : "\u2014",
      "Type": d.type_demande || "\u2014",
      "Objet": d.formation?.titre || d.catalogue?.titre || d.parcours?.nom || d.session_formation?.titre || "\u2014",
      "Statut": d.statut_display || d.statut || "\u2014",
      "Priorit\xE9": d.priorite_display || d.priorite || "\u2014",
      "Valid\xE9 par": d.validee_par?.name || "\u2014",
      "Date demande": d.created_at ? new Date(d.created_at).toLocaleDateString("fr-FR") : "\u2014",
      "Date validation": d.date_validation ? new Date(d.date_validation).toLocaleDateString("fr-FR") : "\u2014",
      "Motif": d.motif_demande || "\u2014"
    }));
  }
  buildTicketRows() {
    let data = [...this.rawTickets];
    if (this.entreprise && this.entreprise !== "toutes") {
      data = data.filter((t) => String(t.entreprise_id) === String(this.entreprise));
    }
    const thresh = this.getDateThreshold();
    if (thresh) {
      data = data.filter((t) => t.created_at && new Date(t.created_at).getTime() >= thresh);
    }
    return data.map((t) => {
      const statutLabel = {
        ouvert: "Ouvert",
        en_cours: "En cours",
        en_attente: "En attente",
        resolu: "R\xE9solu",
        ferme: "Ferm\xE9",
        annule: "Annul\xE9"
      };
      const prioriteLabel = {
        basse: "Basse",
        moyenne: "Moyenne",
        haute: "Haute",
        critique: "Critique"
      };
      const tempsMins = t.temps_resolution_minutes;
      const tempsLabel = tempsMins != null ? tempsMins >= 60 ? `${Math.floor(tempsMins / 60)}h${tempsMins % 60 ? tempsMins % 60 + "min" : ""}` : `${tempsMins}min` : "\u2014";
      return {
        "R\xE9f\xE9rence": t.reference || `#${t.id}`,
        "Sujet": t.sujet || "\u2014",
        "Cr\xE9ateur": t.createur?.name || "\u2014",
        "Email": t.createur?.email || "\u2014",
        "Entreprise": t.entreprise?.nom || "\u2014",
        "Cat\xE9gorie": t.categorie || "\u2014",
        "Type": t.type || "\u2014",
        "Canal": t.canal || "\u2014",
        "Priorit\xE9": prioriteLabel[t.priorite] || t.priorite || "\u2014",
        "Statut": statutLabel[t.statut] || t.statut || "\u2014",
        "Agent assign\xE9": t.agent_assigne?.name || "\u2014",
        "SLA respect\xE9": t.sla_respecte === true ? "Oui" : t.sla_respecte === false ? "Non" : "\u2014",
        "Temps r\xE9sol.": tempsLabel,
        "Satisfaction": t.satisfaction_score != null ? `${t.satisfaction_score}/5` : "\u2014",
        "Escalad\xE9": t.est_escalade ? "Oui" : "Non",
        "Date cr\xE9ation": t.created_at ? new Date(t.created_at).toLocaleDateString("fr-FR") : "\u2014",
        "Date r\xE9sol.": t.date_resolution ? new Date(t.date_resolution).toLocaleDateString("fr-FR") : "\u2014"
      };
    });
  }
  // ════════════════════════════════════════════════════════
  // FILTRES (période + entreprise)
  // ════════════════════════════════════════════════════════
  applyFilters(items, entField, dateField) {
    let data = [...items];
    if (this.entreprise && this.entreprise !== "toutes") {
      data = data.filter((i) => String(i[entField]) === String(this.entreprise));
    }
    const thresh = this.getDateThreshold();
    if (thresh) {
      data = data.filter((i) => i[dateField] && new Date(i[dateField]).getTime() >= thresh);
    }
    return data;
  }
  getDateThreshold() {
    const now = /* @__PURE__ */ new Date();
    if (this.periode === "mois") {
      return new Date(now.getFullYear(), now.getMonth(), 1).getTime();
    } else if (this.periode === "trimestre") {
      const q = Math.floor(now.getMonth() / 3);
      return new Date(now.getFullYear(), q * 3, 1).getTime();
    } else if (this.periode === "annee") {
      return new Date(now.getFullYear(), 0, 1).getTime();
    }
    return null;
  }
  // ════════════════════════════════════════════════════════
  // HELPERS
  // ════════════════════════════════════════════════════════
  getFormatIcon(fmt) {
    return { pdf: "isax-document", excel: "isax-document-text", csv: "isax-clipboard-text" }[fmt] ?? "isax-document";
  }
  get periodeLabel() {
    const now = /* @__PURE__ */ new Date();
    if (this.periode === "mois")
      return now.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
    if (this.periode === "trimestre")
      return `T${Math.floor(now.getMonth() / 3) + 1} ${now.getFullYear()}`;
    if (this.periode === "annee")
      return String(now.getFullYear());
    return "Personnalis\xE9e";
  }
  static \u0275fac = function SuperadminRapportsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminRapportsComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(RapportExportService), \u0275\u0275directiveInject(TicketService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminRapportsComponent, selectors: [["app-superadmin-rapports"]], decls: 146, vars: 12, consts: [[1, "rp-header"], [1, "rp-header__icon", "rp-header__icon--purple"], [1, "isax", "isax-receipt-item"], [1, "rp-header__info"], [1, "rp-header__title"], [1, "rp-header__sub"], [1, "rp-header__acts"], ["type", "button", 1, "rp-btn", "rp-btn--ghost"], [1, "isax", "isax-clock"], ["type", "button", 1, "rp-btn", "rp-btn--purple", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "isax", "isax-document-upload"], [1, "rp-toast", "rp-toast--purple"], [1, "rp-layout"], [1, "rp-layout__left"], [1, "rp-card"], [1, "rp-card__head"], [1, "isax", "isax-grid-2"], [1, "rp-card__title"], [1, "rp-type-grid"], [1, "rp-type-card", 3, "selected-purple"], [1, "isax", "isax-filter"], [1, "rp-filters"], [1, "rp-flt-row", "rp-flt-row--3"], [1, "rp-field"], [1, "rp-label"], [1, "rp-select", 3, "ngModelChange", "ngModel"], ["value", "mois"], ["value", "trimestre"], ["value", "annee"], ["value", "custom"], ["value", "toutes"], [3, "value"], ["value", "pdf"], ["value", "excel"], ["value", "csv"], ["value", "json"], ["value", "actives"], ["value", "terminees"], ["value", "entreprise"], ["value", "formation"], ["value", "domaine"], ["value", "fr"], ["value", "en"], [1, "rp-schedules"], [1, "rp-sched-row"], [1, "rp-layout__right"], [1, "isax", "isax-eye"], [1, "rp-badge", "rp-badge--purple"], [1, "rp-preview"], [1, "rp-preview__loading"], [1, "isax", "isax-clock-1"], [1, "rp-hist-list"], [1, "rp-hist-item"], [1, "isax", "isax-document-download"], [1, "rp-export-grid"], ["type", "button", 1, "rp-exp-btn", 3, "click"], [1, "isax", "isax-document", "rp-exp-icon", "rp-exp-icon--pdf"], [1, "rp-exp-label"], [1, "rp-exp-sub"], [1, "isax", "isax-document-text", "rp-exp-icon", "rp-exp-icon--excel"], [1, "isax", "isax-clipboard-text", "rp-exp-icon", "rp-exp-icon--csv"], [1, "isax", "isax-tick-circle"], [1, "rp-type-card", 3, "click"], [1, "rp-type-body"], [1, "rp-type-name"], [1, "rp-type-sub"], [1, "rp-sched-info"], [1, "rp-sched-label"], [1, "rp-sched-sub"], ["type", "button", 1, "rp-toggle", "rp-toggle--purple", 3, "click"], [1, "rp-toggle__thumb"], [1, "spinner-border", "spinner-border-sm", "text-secondary"], [1, "rp-preview__title"], [1, "rp-preview__section"], [1, "rp-preview__section-title"], [1, "isax", "isax-people"], [1, "rp-kpi-row"], [1, "rp-kpi"], [1, "rp-kpi__val"], [1, "rp-kpi__lbl"], [1, "isax", "isax-book"], [1, "isax", "isax-ticket"], [1, "isax", "isax-medal"], [1, "isax", "isax-buildings-2"], [1, "rp-bar-row"], [1, "rp-bar-label", 3, "title"], [1, "rp-bar-track"], [1, "rp-bar-fill"], [1, "rp-bar-pct"], [1, "rp-hist-info"], [1, "rp-hist-name"], [1, "rp-hist-meta"], [1, "rp-hist-date"], ["type", "button", "title", "T\xE9l\xE9charger", 1, "rp-hist-dl", 3, "click"]], template: function SuperadminRapportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5, "Rapports globaux \u2014 toutes entreprises");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275text(7, "G\xE9n\xE9ration, planification et export \xB7 donn\xE9es en temps r\xE9el");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275element(10, "i", 8);
      \u0275\u0275text(11, " Historique ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 9);
      \u0275\u0275listener("click", function SuperadminRapportsComponent_Template_button_click_12_listener() {
        return ctx.generate();
      });
      \u0275\u0275conditionalCreate(13, SuperadminRapportsComponent_Conditional_13_Template, 1, 0, "span", 10)(14, SuperadminRapportsComponent_Conditional_14_Template, 1, 0, "i", 11);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(16, SuperadminRapportsComponent_Conditional_16_Template, 3, 1, "div", 12);
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "div", 16);
      \u0275\u0275element(21, "i", 17);
      \u0275\u0275elementStart(22, "span", 18);
      \u0275\u0275text(23, "Type de rapport");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 19);
      \u0275\u0275repeaterCreate(25, SuperadminRapportsComponent_For_26_Template, 8, 10, "div", 20, _forTrack0);
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
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminRapportsComponent_Template_select_ngModelChange_37_listener($event) {
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
      \u0275\u0275text(48, "Entreprises");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "select", 26);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminRapportsComponent_Template_select_ngModelChange_49_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.entreprise, $event) || (ctx.entreprise = $event);
        return $event;
      });
      \u0275\u0275elementStart(50, "option", 31);
      \u0275\u0275text(51, "Toutes");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(52, SuperadminRapportsComponent_For_53_Template, 2, 2, "option", 32, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 24)(55, "label", 25);
      \u0275\u0275text(56, "Format export");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "select", 26);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminRapportsComponent_Template_select_ngModelChange_57_listener($event) {
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
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "option", 36);
      \u0275\u0275text(65, "JSON");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "div", 23)(67, "div", 24)(68, "label", 25);
      \u0275\u0275text(69, "Inclure les formations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "select", 26);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminRapportsComponent_Template_select_ngModelChange_70_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formationsF, $event) || (ctx.formationsF = $event);
        return $event;
      });
      \u0275\u0275elementStart(71, "option", 31);
      \u0275\u0275text(72, "Toutes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "option", 37);
      \u0275\u0275text(74, "Actives uniquement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "option", 38);
      \u0275\u0275text(76, "Termin\xE9es uniquement");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "div", 24)(78, "label", 25);
      \u0275\u0275text(79, "Regrouper par");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "select", 26);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminRapportsComponent_Template_select_ngModelChange_80_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.groupe, $event) || (ctx.groupe = $event);
        return $event;
      });
      \u0275\u0275elementStart(81, "option", 39);
      \u0275\u0275text(82, "Entreprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "option", 40);
      \u0275\u0275text(84, "Formation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "option", 41);
      \u0275\u0275text(86, "Domaine");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "div", 24)(88, "label", 25);
      \u0275\u0275text(89, "Langue du rapport");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "select", 26);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminRapportsComponent_Template_select_ngModelChange_90_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.langue, $event) || (ctx.langue = $event);
        return $event;
      });
      \u0275\u0275elementStart(91, "option", 42);
      \u0275\u0275text(92, "Fran\xE7ais");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "option", 43);
      \u0275\u0275text(94, "Anglais");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(95, "div", 15)(96, "div", 16);
      \u0275\u0275element(97, "i", 8);
      \u0275\u0275elementStart(98, "span", 18);
      \u0275\u0275text(99, "Planification automatique");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "div", 44);
      \u0275\u0275repeaterCreate(101, SuperadminRapportsComponent_For_102_Template, 8, 4, "div", 45, _forTrack2);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(103, "div", 46)(104, "div", 15)(105, "div", 16);
      \u0275\u0275element(106, "i", 47);
      \u0275\u0275elementStart(107, "span", 18);
      \u0275\u0275text(108, "Aper\xE7u du rapport");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "span", 48);
      \u0275\u0275text(110);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "div", 49);
      \u0275\u0275conditionalCreate(112, SuperadminRapportsComponent_Conditional_112_Template, 2, 0, "div", 50)(113, SuperadminRapportsComponent_Conditional_113_Template, 83, 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "div", 15)(115, "div", 16);
      \u0275\u0275element(116, "i", 51);
      \u0275\u0275elementStart(117, "span", 18);
      \u0275\u0275text(118, "Rapports r\xE9cents");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "div", 52);
      \u0275\u0275repeaterCreate(120, SuperadminRapportsComponent_For_121_Template, 12, 9, "div", 53, _forTrack3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 15)(123, "div", 16);
      \u0275\u0275element(124, "i", 54);
      \u0275\u0275elementStart(125, "span", 18);
      \u0275\u0275text(126, "Export rapide");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "div", 55)(128, "button", 56);
      \u0275\u0275listener("click", function SuperadminRapportsComponent_Template_button_click_128_listener() {
        return ctx.exportQuick("pdf");
      });
      \u0275\u0275element(129, "i", 57);
      \u0275\u0275elementStart(130, "div", 58);
      \u0275\u0275text(131, "PDF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "div", 59);
      \u0275\u0275text(133, "Rapport complet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "button", 56);
      \u0275\u0275listener("click", function SuperadminRapportsComponent_Template_button_click_134_listener() {
        return ctx.exportQuick("excel");
      });
      \u0275\u0275element(135, "i", 60);
      \u0275\u0275elementStart(136, "div", 58);
      \u0275\u0275text(137, "Excel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "div", 59);
      \u0275\u0275text(139, "Donn\xE9es brutes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "button", 56);
      \u0275\u0275listener("click", function SuperadminRapportsComponent_Template_button_click_140_listener() {
        return ctx.exportQuick("csv");
      });
      \u0275\u0275element(141, "i", 61);
      \u0275\u0275elementStart(142, "div", 58);
      \u0275\u0275text(143, "CSV");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div", 59);
      \u0275\u0275text(145, "Export complet");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
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
      \u0275\u0275twoWayProperty("ngModel", ctx.entreprise);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.entrepriseOptions);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.format);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.formationsF);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.groupe);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.langue);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.schedules);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.periodeLabel);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading ? 112 : 113);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.recents);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.rp-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 14px 18px;\n  margin-bottom: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  flex-wrap: wrap;\n}\n.rp-header__icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.rp-header__icon--purple[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.rp-header__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.rp-header__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1E293B;\n}\n.rp-header__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n  margin-top: 2px;\n}\n.rp-header__acts[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.rp-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  border: 1px solid #E2E8F0;\n  transition: all 0.15s;\n}\n.rp-btn--ghost[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  color: #64748B;\n}\n.rp-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #F8FAFC;\n}\n.rp-btn--purple[_ngcontent-%COMP%] {\n  background: #534AB7;\n  color: #fff;\n  border-color: #534AB7;\n}\n.rp-btn--purple[_ngcontent-%COMP%]:hover {\n  background: rgb(72.4837944664, 64.4300395257, 161.9699604743);\n}\n.rp-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.rp-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.rp-toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.rp-toast--purple[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.rp-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 16px;\n  align-items: start;\n}\n@media (max-width: 1100px) {\n  .rp-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.rp-layout__left[_ngcontent-%COMP%], \n.rp-layout__right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.rp-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.rp-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #E2E8F0;\n}\n.rp-card__head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #64748B;\n}\n.rp-card__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1E293B;\n  flex: 1;\n}\n.rp-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.rp-badge--purple[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: rgb(74.1166007905, 65.8814229249, 165.6185770751);\n}\n.rp-type-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  padding: 12px 14px;\n}\n.rp-type-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  border: 1px solid #E2E8F0;\n  border-radius: 9px;\n  padding: 10px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.rp-type-card[_ngcontent-%COMP%]:hover {\n  border-color: rgb(199.1090909091, 210.6727272727, 226.0909090909);\n  background: #F8FAFC;\n}\n.rp-type-card.selected-purple[_ngcontent-%COMP%] {\n  border-color: #534AB7;\n  background: #EEEDFE;\n}\n.rp-type-card.selected-purple[_ngcontent-%COMP%]   .rp-type-name[_ngcontent-%COMP%] {\n  color: #534AB7;\n}\n.rp-type-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 7px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.rp-type-icon--purple[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.rp-type-icon--orange[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.rp-type-icon--gray[_ngcontent-%COMP%] {\n  background: #F1EFE8;\n  color: #5F5E5A;\n}\n.rp-type-icon--green[_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.rp-type-icon--blue[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.rp-type-icon--gold[_ngcontent-%COMP%] {\n  background: #FFFBEB;\n  color: #B7891A;\n}\n.rp-type-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.rp-type-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1E293B;\n}\n.rp-type-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #64748B;\n  margin-top: 2px;\n  line-height: 1.3;\n}\n.rp-filters[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.rp-flt-row[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.rp-flt-row--3[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 768px) {\n  .rp-flt-row--3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.rp-flt-row--2[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n@media (max-width: 768px) {\n  .rp-flt-row--2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.rp-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.rp-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748B;\n  font-weight: 500;\n}\n.rp-select[_ngcontent-%COMP%], \n.rp-input[_ngcontent-%COMP%] {\n  border: 1px solid #E2E8F0;\n  border-radius: 7px;\n  padding: 6px 9px;\n  font-size: 12px;\n  color: #1E293B;\n  background: #FFFFFF;\n  width: 100%;\n  font-family: inherit;\n}\n.rp-select[_ngcontent-%COMP%]:focus, \n.rp-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #534AB7;\n}\n.rp-schedules[_ngcontent-%COMP%] {\n  padding: 4px 14px;\n}\n.rp-sched-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid #E2E8F0;\n}\n.rp-sched-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.rp-sched-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.rp-sched-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #1E293B;\n}\n.rp-sched-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748B;\n  margin-top: 1px;\n}\n.rp-toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #E2E8F0;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  border: none;\n  transition: background 0.2s;\n}\n.rp-toggle--purple.on[_ngcontent-%COMP%] {\n  background: #534AB7;\n}\n.rp-toggle__thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n}\n.rp-toggle.on[_ngcontent-%COMP%]   .rp-toggle__thumb[_ngcontent-%COMP%] {\n  left: 19px;\n}\n.rp-preview[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n}\n.rp-preview__loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 24px;\n}\n.rp-preview__title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748B;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 10px;\n}\n.rp-preview__section[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.rp-preview__section-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #64748B;\n  margin-bottom: 7px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.rp-preview__section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.rp-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 6px;\n}\n.rp-kpi[_ngcontent-%COMP%] {\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  padding: 8px;\n  text-align: center;\n}\n.rp-kpi__val[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  color: #1E293B;\n}\n.rp-kpi__lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #64748B;\n  margin-top: 1px;\n}\n.rp-bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.rp-bar-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748B;\n  width: 90px;\n  flex-shrink: 0;\n  text-align: right;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rp-bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 7px;\n  background: #E2E8F0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.rp-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s;\n}\n.rp-bar-fill--purple[_ngcontent-%COMP%] {\n  background: #534AB7;\n}\n.rp-bar-fill--orange[_ngcontent-%COMP%] {\n  background: #E5820A;\n}\n.rp-bar-fill--ko[_ngcontent-%COMP%] {\n  background: #E24B4A;\n}\n.rp-bar-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #1E293B;\n  width: 30px;\n  text-align: right;\n}\n.rp-export-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  padding: 12px 14px;\n}\n.rp-exp-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  padding: 12px 8px;\n  border: 1px solid #E2E8F0;\n  border-radius: 9px;\n  cursor: pointer;\n  background: transparent;\n  transition: all 0.15s;\n}\n.rp-exp-btn[_ngcontent-%COMP%]:hover {\n  background: #F8FAFC;\n  border-color: rgb(199.1090909091, 210.6727272727, 226.0909090909);\n}\n.rp-exp-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.rp-exp-icon--pdf[_ngcontent-%COMP%] {\n  color: #A32D2D;\n}\n.rp-exp-icon--excel[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.rp-exp-icon--csv[_ngcontent-%COMP%] {\n  color: #854F0B;\n}\n.rp-exp-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1E293B;\n}\n.rp-exp-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #64748B;\n}\n.rp-hist-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.rp-hist-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n  border-bottom: 1px solid #E2E8F0;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.rp-hist-item[_ngcontent-%COMP%]:hover {\n  background: #F8FAFC;\n}\n.rp-hist-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.rp-hist-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n}\n.rp-hist-icon--pdf[_ngcontent-%COMP%] {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.rp-hist-icon--excel[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.rp-hist-icon--csv[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.rp-hist-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.rp-hist-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1E293B;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rp-hist-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748B;\n  margin-top: 1px;\n}\n.rp-hist-date[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #64748B;\n  flex-shrink: 0;\n}\n.rp-hist-dl[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border: 1px solid #E2E8F0;\n  border-radius: 7px;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  color: #64748B;\n  flex-shrink: 0;\n}\n.rp-hist-dl[_ngcontent-%COMP%]:hover {\n  background: #EEEDFE;\n  color: #534AB7;\n  border-color: #534AB7;\n}\n/*# sourceMappingURL=superadmin-rapports.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminRapportsComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-rapports", imports: [CommonModule, FormsModule], template: `<!-- \u2500\u2500 PAGE HEADER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div class="rp-header">\r
  <div class="rp-header__icon rp-header__icon--purple">\r
    <i class="isax isax-receipt-item"></i>\r
  </div>\r
  <div class="rp-header__info">\r
    <div class="rp-header__title">Rapports globaux \u2014 toutes entreprises</div>\r
    <div class="rp-header__sub">G\xE9n\xE9ration, planification et export \xB7 donn\xE9es en temps r\xE9el</div>\r
  </div>\r
  <div class="rp-header__acts">\r
    <button type="button" class="rp-btn rp-btn--ghost">\r
      <i class="isax isax-clock"></i> Historique\r
    </button>\r
    <button type="button" class="rp-btn rp-btn--purple" (click)="generate()" [disabled]="generating">\r
      @if (generating) { <span class="spinner-border spinner-border-sm me-1"></span> }\r
      @else { <i class="isax isax-document-upload"></i> }\r
      {{ generating ? 'G\xE9n\xE9ration\u2026' : 'G\xE9n\xE9rer maintenant' }}\r
    </button>\r
  </div>\r
</div>\r
\r
@if (successMsg) {\r
  <div class="rp-toast rp-toast--purple">\r
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
               [class.selected-purple]="selectedType === t.key"\r
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
              <option value="annee">Cette ann\xE9e</option>\r
              <option value="custom">Personnalis\xE9e</option>\r
            </select>\r
          </div>\r
          <div class="rp-field">\r
            <label class="rp-label">Entreprises</label>\r
            <select class="rp-select" [(ngModel)]="entreprise">\r
              <option value="toutes">Toutes</option>\r
              @for (e of entrepriseOptions; track e.value) {\r
                <option [value]="e.value">{{ e.label }}</option>\r
              }\r
            </select>\r
          </div>\r
          <div class="rp-field">\r
            <label class="rp-label">Format export</label>\r
            <select class="rp-select" [(ngModel)]="format">\r
              <option value="pdf">PDF</option>\r
              <option value="excel">Excel (.xlsx)</option>\r
              <option value="csv">CSV</option>\r
              <option value="json">JSON</option>\r
            </select>\r
          </div>\r
        </div>\r
        <div class="rp-flt-row rp-flt-row--3">\r
          <div class="rp-field">\r
            <label class="rp-label">Inclure les formations</label>\r
            <select class="rp-select" [(ngModel)]="formationsF">\r
              <option value="toutes">Toutes</option>\r
              <option value="actives">Actives uniquement</option>\r
              <option value="terminees">Termin\xE9es uniquement</option>\r
            </select>\r
          </div>\r
          <div class="rp-field">\r
            <label class="rp-label">Regrouper par</label>\r
            <select class="rp-select" [(ngModel)]="groupe">\r
              <option value="entreprise">Entreprise</option>\r
              <option value="formation">Formation</option>\r
              <option value="domaine">Domaine</option>\r
            </select>\r
          </div>\r
          <div class="rp-field">\r
            <label class="rp-label">Langue du rapport</label>\r
            <select class="rp-select" [(ngModel)]="langue">\r
              <option value="fr">Fran\xE7ais</option>\r
              <option value="en">Anglais</option>\r
            </select>\r
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
            <button type="button" class="rp-toggle rp-toggle--purple" [class.on]="s.on" (click)="s.on = !s.on">\r
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
        <span class="rp-badge rp-badge--purple">{{ periodeLabel }}</span>\r
      </div>\r
      <div class="rp-preview">\r
        @if (loading) {\r
          <div class="rp-preview__loading">\r
            <div class="spinner-border spinner-border-sm text-secondary"></div>\r
          </div>\r
        } @else {\r
          <div class="rp-preview__title">Performance globale \u2014 {{ periodeLabel }}</div>\r
\r
          <!-- Utilisateurs -->\r
          <div class="rp-preview__section">\r
            <div class="rp-preview__section-title"><i class="isax isax-people"></i> Utilisateurs</div>\r
            <div class="rp-kpi-row">\r
              <div class="rp-kpi"><div class="rp-kpi__val">{{ totalUsers }}</div><div class="rp-kpi__lbl">Total</div></div>\r
              <div class="rp-kpi"><div class="rp-kpi__val">{{ activeUsers }}</div><div class="rp-kpi__lbl">Actifs</div></div>\r
              <div class="rp-kpi"><div class="rp-kpi__val">{{ completion }}%</div><div class="rp-kpi__lbl">% Certifi\xE9s</div></div>\r
            </div>\r
          </div>\r
\r
          <!-- Formations & sessions -->\r
          <div class="rp-preview__section">\r
            <div class="rp-preview__section-title"><i class="isax isax-book"></i> Formations & sessions</div>\r
            <div class="rp-kpi-row">\r
              <div class="rp-kpi"><div class="rp-kpi__val">{{ totalFormations }}</div><div class="rp-kpi__lbl">Formations</div></div>\r
              <div class="rp-kpi"><div class="rp-kpi__val">{{ totalSessions }}</div><div class="rp-kpi__lbl">Sessions</div></div>\r
              <div class="rp-kpi"><div class="rp-kpi__val">{{ totalDemandes }}</div><div class="rp-kpi__lbl">Demandes</div></div>\r
            </div>\r
          </div>\r
\r
          <!-- Tickets -->\r
          <div class="rp-preview__section">\r
            <div class="rp-preview__section-title"><i class="isax isax-ticket"></i> Support & tickets</div>\r
            <div class="rp-kpi-row">\r
              <div class="rp-kpi"><div class="rp-kpi__val">{{ totalTickets }}</div><div class="rp-kpi__lbl">Total</div></div>\r
              <div class="rp-kpi"><div class="rp-kpi__val">{{ ticketsOuverts }}</div><div class="rp-kpi__lbl">Ouverts / En cours</div></div>\r
              <div class="rp-kpi"><div class="rp-kpi__val">{{ totalTickets - ticketsOuverts }}</div><div class="rp-kpi__lbl">R\xE9solus / Ferm\xE9s</div></div>\r
            </div>\r
          </div>\r
\r
          <!-- Par entreprise -->\r
          @if (entreprises.length) {\r
            <div class="rp-preview__section">\r
              <div class="rp-preview__section-title"><i class="isax isax-buildings-2"></i> Certification par entreprise</div>\r
              @for (e of entreprises; track e.label) {\r
                <div class="rp-bar-row">\r
                  <span class="rp-bar-label" [title]="e.label">{{ e.label }}</span>\r
                  <div class="rp-bar-track">\r
                    <div class="rp-bar-fill"\r
                         [class.rp-bar-fill--purple]="e.pct >= 65"\r
                         [class.rp-bar-fill--orange]="e.pct < 65"\r
                         [style.width.%]="e.pct"></div>\r
                  </div>\r
                  <span class="rp-bar-pct">{{ e.pct }}%</span>\r
                </div>\r
              }\r
            </div>\r
          }\r
\r
          <!-- Certifications -->\r
          <div class="rp-preview__section">\r
            <div class="rp-preview__section-title"><i class="isax isax-medal"></i> Certifications</div>\r
            <div class="rp-kpi-row">\r
              <div class="rp-kpi"><div class="rp-kpi__val">{{ totalCerts }}</div><div class="rp-kpi__lbl">D\xE9livr\xE9s</div></div>\r
              <div class="rp-kpi"><div class="rp-kpi__val">{{ certExpiring }}</div><div class="rp-kpi__lbl">Expirent &lt;30j</div></div>\r
              <div class="rp-kpi"><div class="rp-kpi__val">{{ scoresMoy > 0 ? (scoresMoy + '%') : '\u2014' }}</div><div class="rp-kpi__lbl">Score moy.</div></div>\r
            </div>\r
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
`, styles: ["/* src/app/features/superadmin/superadmin-rapports/superadmin-rapports.component.scss */\n.rp-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 14px 18px;\n  margin-bottom: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  flex-wrap: wrap;\n}\n.rp-header__icon {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.rp-header__icon--purple {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.rp-header__info {\n  flex: 1;\n  min-width: 0;\n}\n.rp-header__title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1E293B;\n}\n.rp-header__sub {\n  font-size: 12px;\n  color: #64748B;\n  margin-top: 2px;\n}\n.rp-header__acts {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.rp-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  border: 1px solid #E2E8F0;\n  transition: all 0.15s;\n}\n.rp-btn--ghost {\n  background: #FFFFFF;\n  color: #64748B;\n}\n.rp-btn--ghost:hover {\n  background: #F8FAFC;\n}\n.rp-btn--purple {\n  background: #534AB7;\n  color: #fff;\n  border-color: #534AB7;\n}\n.rp-btn--purple:hover {\n  background: rgb(72.4837944664, 64.4300395257, 161.9699604743);\n}\n.rp-btn i {\n  font-size: 14px;\n}\n.rp-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.rp-toast {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.rp-toast--purple {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.rp-layout {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 16px;\n  align-items: start;\n}\n@media (max-width: 1100px) {\n  .rp-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.rp-layout__left,\n.rp-layout__right {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.rp-card {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.rp-card__head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #E2E8F0;\n}\n.rp-card__head i {\n  font-size: 15px;\n  color: #64748B;\n}\n.rp-card__title {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1E293B;\n  flex: 1;\n}\n.rp-badge {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.rp-badge--purple {\n  background: #EEEDFE;\n  color: rgb(74.1166007905, 65.8814229249, 165.6185770751);\n}\n.rp-type-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  padding: 12px 14px;\n}\n.rp-type-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  border: 1px solid #E2E8F0;\n  border-radius: 9px;\n  padding: 10px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.rp-type-card:hover {\n  border-color: rgb(199.1090909091, 210.6727272727, 226.0909090909);\n  background: #F8FAFC;\n}\n.rp-type-card.selected-purple {\n  border-color: #534AB7;\n  background: #EEEDFE;\n}\n.rp-type-card.selected-purple .rp-type-name {\n  color: #534AB7;\n}\n.rp-type-icon {\n  width: 28px;\n  height: 28px;\n  border-radius: 7px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.rp-type-icon--purple {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.rp-type-icon--orange {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.rp-type-icon--gray {\n  background: #F1EFE8;\n  color: #5F5E5A;\n}\n.rp-type-icon--green {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.rp-type-icon--blue {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.rp-type-icon--gold {\n  background: #FFFBEB;\n  color: #B7891A;\n}\n.rp-type-body {\n  flex: 1;\n}\n.rp-type-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1E293B;\n}\n.rp-type-sub {\n  font-size: 10px;\n  color: #64748B;\n  margin-top: 2px;\n  line-height: 1.3;\n}\n.rp-filters {\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.rp-flt-row {\n  display: grid;\n  gap: 8px;\n}\n.rp-flt-row--3 {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 768px) {\n  .rp-flt-row--3 {\n    grid-template-columns: 1fr;\n  }\n}\n.rp-flt-row--2 {\n  grid-template-columns: 1fr 1fr;\n}\n@media (max-width: 768px) {\n  .rp-flt-row--2 {\n    grid-template-columns: 1fr;\n  }\n}\n.rp-field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.rp-label {\n  font-size: 11px;\n  color: #64748B;\n  font-weight: 500;\n}\n.rp-select,\n.rp-input {\n  border: 1px solid #E2E8F0;\n  border-radius: 7px;\n  padding: 6px 9px;\n  font-size: 12px;\n  color: #1E293B;\n  background: #FFFFFF;\n  width: 100%;\n  font-family: inherit;\n}\n.rp-select:focus,\n.rp-input:focus {\n  outline: none;\n  border-color: #534AB7;\n}\n.rp-schedules {\n  padding: 4px 14px;\n}\n.rp-sched-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid #E2E8F0;\n}\n.rp-sched-row:last-child {\n  border-bottom: none;\n}\n.rp-sched-info {\n  flex: 1;\n}\n.rp-sched-label {\n  font-size: 12px;\n  color: #1E293B;\n}\n.rp-sched-sub {\n  font-size: 11px;\n  color: #64748B;\n  margin-top: 1px;\n}\n.rp-toggle {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #E2E8F0;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  border: none;\n  transition: background 0.2s;\n}\n.rp-toggle--purple.on {\n  background: #534AB7;\n}\n.rp-toggle__thumb {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n}\n.rp-toggle.on .rp-toggle__thumb {\n  left: 19px;\n}\n.rp-preview {\n  padding: 12px 14px;\n}\n.rp-preview__loading {\n  display: flex;\n  justify-content: center;\n  padding: 24px;\n}\n.rp-preview__title {\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748B;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 10px;\n}\n.rp-preview__section {\n  margin-top: 12px;\n}\n.rp-preview__section-title {\n  font-size: 11px;\n  font-weight: 500;\n  color: #64748B;\n  margin-bottom: 7px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.rp-preview__section-title i {\n  font-size: 13px;\n}\n.rp-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 6px;\n}\n.rp-kpi {\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  padding: 8px;\n  text-align: center;\n}\n.rp-kpi__val {\n  font-size: 17px;\n  font-weight: 600;\n  color: #1E293B;\n}\n.rp-kpi__lbl {\n  font-size: 10px;\n  color: #64748B;\n  margin-top: 1px;\n}\n.rp-bar-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.rp-bar-label {\n  font-size: 11px;\n  color: #64748B;\n  width: 90px;\n  flex-shrink: 0;\n  text-align: right;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rp-bar-track {\n  flex: 1;\n  height: 7px;\n  background: #E2E8F0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.rp-bar-fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.4s;\n}\n.rp-bar-fill--purple {\n  background: #534AB7;\n}\n.rp-bar-fill--orange {\n  background: #E5820A;\n}\n.rp-bar-fill--ko {\n  background: #E24B4A;\n}\n.rp-bar-pct {\n  font-size: 11px;\n  font-weight: 600;\n  color: #1E293B;\n  width: 30px;\n  text-align: right;\n}\n.rp-export-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  padding: 12px 14px;\n}\n.rp-exp-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  padding: 12px 8px;\n  border: 1px solid #E2E8F0;\n  border-radius: 9px;\n  cursor: pointer;\n  background: transparent;\n  transition: all 0.15s;\n}\n.rp-exp-btn:hover {\n  background: #F8FAFC;\n  border-color: rgb(199.1090909091, 210.6727272727, 226.0909090909);\n}\n.rp-exp-icon {\n  font-size: 24px;\n}\n.rp-exp-icon--pdf {\n  color: #A32D2D;\n}\n.rp-exp-icon--excel {\n  color: #3B6D11;\n}\n.rp-exp-icon--csv {\n  color: #854F0B;\n}\n.rp-exp-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1E293B;\n}\n.rp-exp-sub {\n  font-size: 10px;\n  color: #64748B;\n}\n.rp-hist-list {\n  display: flex;\n  flex-direction: column;\n}\n.rp-hist-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n  border-bottom: 1px solid #E2E8F0;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.rp-hist-item:hover {\n  background: #F8FAFC;\n}\n.rp-hist-item:last-child {\n  border-bottom: none;\n}\n.rp-hist-icon {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n}\n.rp-hist-icon--pdf {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.rp-hist-icon--excel {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.rp-hist-icon--csv {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.rp-hist-info {\n  flex: 1;\n  min-width: 0;\n}\n.rp-hist-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1E293B;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rp-hist-meta {\n  font-size: 11px;\n  color: #64748B;\n  margin-top: 1px;\n}\n.rp-hist-date {\n  font-size: 10px;\n  color: #64748B;\n  flex-shrink: 0;\n}\n.rp-hist-dl {\n  width: 26px;\n  height: 26px;\n  border: 1px solid #E2E8F0;\n  border-radius: 7px;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  color: #64748B;\n  flex-shrink: 0;\n}\n.rp-hist-dl:hover {\n  background: #EEEDFE;\n  color: #534AB7;\n  border-color: #534AB7;\n}\n/*# sourceMappingURL=superadmin-rapports.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }, { type: RapportExportService }, { type: TicketService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminRapportsComponent, { className: "SuperadminRapportsComponent", filePath: "app/features/superadmin/superadmin-rapports/superadmin-rapports.component.ts", lineNumber: 21 });
})();
export {
  SuperadminRapportsComponent
};
//# sourceMappingURL=chunk-5JW4JHQK.js.map
