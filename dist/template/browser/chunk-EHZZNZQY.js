import {
  ClientCompanyService
} from "./chunk-NAWDUVHO.js";
import {
  SessionFormationService
} from "./chunk-XOAIMG5H.js";
import {
  CustomPaginationComponent
} from "./chunk-3XTSKOGE.js";
import "./chunk-EDMPVZTI.js";
import "./chunk-FKX6UC3I.js";
import {
  routes
} from "./chunk-TYVQP4CB.js";
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
  RouterModule
} from "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  SlicePipe
} from "./chunk-MNWNTO2T.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipeBind3,
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

// src/app/features/superadmin/superadmin-session/superadmin-session.component.ts
function SuperadminSessionComponent_option_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("value", c_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1.nom);
  }
}
function SuperadminSessionComponent_button_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function SuperadminSessionComponent_button_77_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetFilters());
    });
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275text(2, "R\xE9initialiser ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSessionComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 50);
    \u0275\u0275listener("click", function SuperadminSessionComponent_div_85_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.error = "");
    });
    \u0275\u0275element(4, "i", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.error, " ");
  }
}
function SuperadminSessionComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "i", 3);
    \u0275\u0275text(2, "Chargement des sessions\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSessionComponent_ng_container_87_table_1_tr_25_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(2, 2, s_r6.description, 0, 60), "", ((s_r6.description == null ? null : s_r6.description.length) ?? 0) > 60 ? "\u2026" : "");
  }
}
function SuperadminSessionComponent_ng_container_87_table_1_tr_25_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", (s_r6.formateur == null ? null : s_r6.formateur.prenom) || "", " ", (s_r6.formateur == null ? null : s_r6.formateur.nom) || "", " ");
  }
}
function SuperadminSessionComponent_ng_container_87_table_1_tr_25_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Non assign\xE9");
    \u0275\u0275elementContainerEnd();
  }
}
function SuperadminSessionComponent_ng_container_87_table_1_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SuperadminSessionComponent_ng_container_87_table_1_tr_25_div_6_Template, 3, 6, "div", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 66);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "div", 67)(12, "div", 68);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div")(15, "div", 66);
    \u0275\u0275template(16, SuperadminSessionComponent_ng_container_87_table_1_tr_25_ng_container_16_Template, 2, 2, "ng-container", 44)(17, SuperadminSessionComponent_ng_container_87_table_1_tr_25_ng_container_17_Template, 2, 0, "ng-container", 44);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "td", 69)(19, "span", 70);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 71);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 71);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 71);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 72)(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "td", 69)(31, "span", 70);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "td")(34, "div", 73)(35, "button", 74);
    \u0275\u0275listener("click", function SuperadminSessionComponent_ng_container_87_table_1_tr_25_Template_button_click_35_listener() {
      const s_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.deleteSession(s_r6));
    });
    \u0275\u0275element(36, "i", 75);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r6.code_session || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r6.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r6.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((s_r6.formation == null ? null : s_r6.formation.titre) || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(((s_r6.formateur == null ? null : s_r6.formateur.prenom == null ? null : s_r6.formateur.prenom[0]) ?? "F") + ((s_r6.formateur == null ? null : s_r6.formateur.nom == null ? null : s_r6.formateur.nom[0]) ?? ""));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (s_r6.formateur == null ? null : s_r6.formateur.prenom) || (s_r6.formateur == null ? null : s_r6.formateur.nom));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(s_r6.formateur == null ? null : s_r6.formateur.prenom) && !(s_r6.formateur == null ? null : s_r6.formateur.nom));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-s", ctx_r2.getTypeData(s_r6.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getTypeLabel(s_r6.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r6.lieu || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(s_r6.date_debut));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(s_r6.date_fin));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", s_r6.nombre_places_restantes === 0 ? "#991b1b" : "#27500a");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", s_r6.nombre_inscrits, "/", s_r6.capacite_max, " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-s", ctx_r2.getStatutData(s_r6.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getStatutLabel(s_r6.statut));
  }
}
function SuperadminSessionComponent_ng_container_87_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 54)(1, "thead")(2, "tr")(3, "th", 55);
    \u0275\u0275text(4, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 56);
    \u0275\u0275text(8, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 57);
    \u0275\u0275text(10, "Formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 58);
    \u0275\u0275text(12, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 59);
    \u0275\u0275text(14, "Lieu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 59);
    \u0275\u0275text(16, "Date d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 59);
    \u0275\u0275text(18, "Date fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 58);
    \u0275\u0275text(20, "Places");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 60);
    \u0275\u0275text(22, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "th", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, SuperadminSessionComponent_ng_container_87_table_1_tr_25_Template, 37, 18, "tr", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(25);
    \u0275\u0275property("ngForOf", ctx_r2.sessions)("ngForTrackBy", ctx_r2.trackBySession);
  }
}
function SuperadminSessionComponent_ng_container_87_div_2_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function SuperadminSessionComponent_ng_container_87_div_2_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.resetFilters());
    });
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275text(2, "R\xE9initialiser ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminSessionComponent_ng_container_87_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "i", 3);
    \u0275\u0275text(2);
    \u0275\u0275template(3, SuperadminSessionComponent_ng_container_87_div_2_button_3_Template, 3, 0, "button", 77);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.hasActiveFilters ? "Aucun r\xE9sultat pour ces filtres" : "Aucune session trouv\xE9e", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasActiveFilters);
  }
}
function SuperadminSessionComponent_ng_container_87_app_custom_pagination_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-custom-pagination", 79);
    \u0275\u0275listener("pageChange", function SuperadminSessionComponent_ng_container_87_app_custom_pagination_3_Template_app_custom_pagination_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onPageChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("totalItems", ctx_r2.totalData)("pageSize", ctx_r2.pageSize)("currentPage", ctx_r2.currentPage);
  }
}
function SuperadminSessionComponent_ng_container_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SuperadminSessionComponent_ng_container_87_table_1_Template, 26, 2, "table", 52)(2, SuperadminSessionComponent_ng_container_87_div_2_Template, 4, 2, "div", 43)(3, SuperadminSessionComponent_ng_container_87_app_custom_pagination_3_Template, 1, 3, "app-custom-pagination", 53);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.sessions.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.sessions.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.sessions.length > 0 && ctx_r2.totalData > ctx_r2.pageSize);
  }
}
var SuperadminSessionComponent = class _SuperadminSessionComponent {
  sessionService;
  companyService;
  routes = routes;
  allSessions = [];
  sessions = [];
  companies = [];
  loading = false;
  error = "";
  // Filters
  searchTerm = "";
  selectedEntreprise = "";
  selectedStatut = "";
  selectedType = "";
  dateDebut = "";
  dateFin = "";
  // Pagination
  currentPage = 1;
  pageSize = 10;
  totalData = 0;
  // Stats
  stats = { total: 0, planifiees: 0, enCours: 0, terminees: 0, annulees: 0 };
  constructor(sessionService, companyService) {
    this.sessionService = sessionService;
    this.companyService = companyService;
  }
  ngOnInit() {
    this.loadSessions();
    this.loadCompanies();
  }
  loadSessions() {
    this.loading = true;
    this.error = "";
    this.sessionService.getAllSessions().subscribe({
      next: (response) => {
        this.loading = false;
        if (response?.status && response.sessions) {
          this.allSessions = response.sessions;
          this.calculateStats();
          this.applyFilters();
        } else {
          this.error = "Aucune session trouv\xE9e";
        }
      },
      error: (err) => {
        this.loading = false;
        console.error("Erreur chargement sessions:", err);
        this.error = "Erreur lors du chargement des sessions";
      }
    });
  }
  loadCompanies() {
    this.companyService.getCompanies().subscribe({
      next: (response) => {
        if (response?.data) {
          this.companies = response.data;
        } else if (Array.isArray(response)) {
          this.companies = response;
        }
      },
      error: () => {
        this.companies = [];
      }
    });
  }
  calculateStats() {
    this.stats = {
      total: this.allSessions.length,
      planifiees: this.allSessions.filter((s) => s.statut === "planifiee").length,
      enCours: this.allSessions.filter((s) => s.statut === "en_cours").length,
      terminees: this.allSessions.filter((s) => s.statut === "terminee").length,
      annulees: this.allSessions.filter((s) => s.statut === "annulee").length
    };
  }
  applyFilters() {
    let data = [...this.allSessions];
    if (this.searchTerm) {
      const q = this.searchTerm.toLowerCase();
      data = data.filter((s) => s.titre?.toLowerCase().includes(q) || s.code_session?.toLowerCase().includes(q) || s.lieu?.toLowerCase().includes(q) || s.formation?.titre?.toLowerCase().includes(q) || s.formateur?.nom?.toLowerCase().includes(q) || s.formateur?.prenom?.toLowerCase().includes(q));
    }
    if (this.selectedStatut) {
      data = data.filter((s) => s.statut === this.selectedStatut);
    }
    if (this.selectedType) {
      data = data.filter((s) => s.type === this.selectedType);
    }
    if (this.selectedEntreprise) {
      data = data.filter((s) => s.formation?.entreprise_id === +this.selectedEntreprise || s.organisateur?.entreprise_id === +this.selectedEntreprise);
    }
    if (this.dateDebut) {
      const d = new Date(this.dateDebut);
      data = data.filter((s) => new Date(s.date_debut) >= d);
    }
    if (this.dateFin) {
      const d = new Date(this.dateFin);
      data = data.filter((s) => new Date(s.date_debut) <= d);
    }
    this.totalData = data.length;
    const start = (this.currentPage - 1) * this.pageSize;
    this.sessions = data.slice(start, start + this.pageSize);
  }
  onSearch() {
    this.currentPage = 1;
    this.applyFilters();
  }
  onFilterChange() {
    this.currentPage = 1;
    this.applyFilters();
  }
  resetFilters() {
    this.searchTerm = "";
    this.selectedEntreprise = "";
    this.selectedStatut = "";
    this.selectedType = "";
    this.dateDebut = "";
    this.dateFin = "";
    this.currentPage = 1;
    this.applyFilters();
  }
  onPageChange(page) {
    this.currentPage = page;
    this.applyFilters();
  }
  PageSize() {
    this.currentPage = 1;
    this.applyFilters();
  }
  deleteSession(session) {
    if (confirm(`Supprimer la session "${session.titre}" ?`)) {
      this.sessionService.deleteSession(session.id).subscribe({
        next: () => this.loadSessions(),
        error: (err) => {
          console.error("Erreur suppression:", err);
          this.error = "Erreur lors de la suppression";
        }
      });
    }
  }
  formatDate(date) {
    if (!date)
      return "\u2014";
    return new Date(date).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  formatDateShort(date) {
    if (!date)
      return "\u2014";
    return new Date(date).toLocaleDateString("fr-FR", { day: "2-digit", month: "short" });
  }
  getStatutData(statut) {
    const map = {
      planifiee: "plan",
      en_cours: "live",
      terminee: "done",
      annulee: "cancel"
    };
    return map[statut] || "draft";
  }
  getStatutLabel(statut) {
    const map = {
      planifiee: "Planifi\xE9e",
      en_cours: "En cours",
      terminee: "Termin\xE9e",
      annulee: "Annul\xE9e"
    };
    return map[statut] || statut;
  }
  getTypeData(type) {
    const map = {
      presentiel: "pub",
      distanciel: "pending",
      hybride: "done"
    };
    return map[type] || "draft";
  }
  getTypeLabel(type) {
    const map = {
      presentiel: "Pr\xE9sentiel",
      distanciel: "Distanciel",
      hybride: "Hybride"
    };
    return map[type] || type;
  }
  trackBySession(index, session) {
    return session.id;
  }
  get hasActiveFilters() {
    return !!(this.searchTerm || this.selectedEntreprise || this.selectedStatut || this.selectedType || this.dateDebut || this.dateFin);
  }
  static \u0275fac = function SuperadminSessionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminSessionComponent)(\u0275\u0275directiveInject(SessionFormationService), \u0275\u0275directiveInject(ClientCompanyService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminSessionComponent, selectors: [["app-superadmin-session"]], decls: 88, vars: 19, consts: [[1, "ac-shell"], [1, "ac-topbar"], ["type", "button", 1, "ac-tab", "active"], [1, "isax", "isax-calendar-1"], [1, "ac-spacer"], [2, "display", "flex", "align-items", "center", "padding", "0 10px"], [1, "ac-topbar-info"], [1, "ac-kpi-row", 2, "grid-template-columns", "repeat(5,1fr)"], [1, "ac-kpi"], [1, "ac-kpi__label"], [1, "isax", "isax-calendar"], [1, "ac-kpi__val"], [1, "isax", "isax-clock"], [1, "ac-kpi__delta", "neutral"], [1, "isax", "isax-play-circle"], [1, "ac-kpi__delta", "up"], [1, "isax", "isax-tick-circle"], [1, "isax", "isax-close-circle"], [1, "ac-kpi__delta", "down"], [1, "ac-toolbar"], [1, "ac-search"], [1, "isax", "isax-search-normal", "ac-search__icon"], ["type", "text", "placeholder", "Titre, code, lieu, formateur\u2026", 1, "ac-search__input", 3, "ngModelChange", "ngModel"], ["title", "Entreprise", 1, "ac-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["title", "Statut", 1, "ac-select", 3, "ngModelChange", "change", "ngModel"], ["value", "planifiee"], ["value", "en_cours"], ["value", "terminee"], ["value", "annulee"], ["title", "Type", 1, "ac-select", 3, "ngModelChange", "change", "ngModel"], ["value", "presentiel"], ["value", "distanciel"], ["value", "hybride"], ["type", "date", "title", "Date d\xE9but", 1, "ac-select", 2, "width", "130px", 3, "ngModelChange", "change", "ngModel"], ["type", "date", "title", "Date fin", 1, "ac-select", 2, "width", "130px", 3, "ngModelChange", "change", "ngModel"], ["type", "button", "class", "ac-chip", 3, "click", 4, "ngIf"], ["title", "Taille de page", 1, "ac-select", 3, "ngModelChange", "change", "ngModel"], ["value", "10"], ["value", "25"], ["value", "50"], ["class", "ac-alert", 4, "ngIf"], ["class", "ac-empty", 4, "ngIf"], [4, "ngIf"], [3, "value"], ["type", "button", 1, "ac-chip", 3, "click"], [1, "isax", "isax-refresh"], [1, "ac-alert"], [1, "isax", "isax-warning-2"], ["type", "button", 1, "ac-alert-close", 3, "click"], [1, "ac-empty"], ["class", "ac-table", 4, "ngIf"], [3, "totalItems", "pageSize", "currentPage", "pageChange", 4, "ngIf"], [1, "ac-table"], [2, "width", "90px"], [2, "width", "120px"], [2, "width", "130px"], [2, "width", "80px", "text-align", "center"], [2, "width", "100px"], [2, "width", "88px", "text-align", "center"], [2, "width", "70px"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [2, "font-size", "11px", "color", "#9ca3af", "font-family", "monospace"], [1, "ac-table-name"], ["class", "ac-table-sub", 4, "ngIf"], [1, "ac-table-name", 2, "font-size", "12px"], [1, "ac-instructor"], [1, "ac-instructor-av"], [2, "text-align", "center"], [1, "ac-status"], [2, "font-size", "12px"], [2, "text-align", "center", "font-size", "12px"], [1, "ac-actions"], ["type", "button", "title", "Supprimer", 1, "ac-act", "ac-act--del", 3, "click"], [1, "isax", "isax-trash"], [1, "ac-table-sub"], ["type", "button", "class", "ac-chip", "style", "margin-top:10px;", 3, "click", 4, "ngIf"], ["type", "button", 1, "ac-chip", 2, "margin-top", "10px", 3, "click"], [3, "pageChange", "totalItems", "pageSize", "currentPage"]], template: function SuperadminSessionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275text(4, "Sessions ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "span", 4);
      \u0275\u0275elementStart(6, "div", 5)(7, "span", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "div", 9);
      \u0275\u0275element(12, "i", 10);
      \u0275\u0275text(13, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 11);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 8)(17, "div", 9);
      \u0275\u0275element(18, "i", 12);
      \u0275\u0275text(19, "Planifi\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 11);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 13);
      \u0275\u0275text(23, "\xE0 venir");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 8)(25, "div", 9);
      \u0275\u0275element(26, "i", 14);
      \u0275\u0275text(27, "En cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 11);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 15);
      \u0275\u0275text(31, "actives");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 8)(33, "div", 9);
      \u0275\u0275element(34, "i", 16);
      \u0275\u0275text(35, "Termin\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 11);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 8)(39, "div", 9);
      \u0275\u0275element(40, "i", 17);
      \u0275\u0275text(41, "Annul\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 11);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 18);
      \u0275\u0275text(45, "annul\xE9es");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 19)(47, "div", 20);
      \u0275\u0275element(48, "i", 21);
      \u0275\u0275elementStart(49, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminSessionComponent_Template_input_ngModelChange_49_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SuperadminSessionComponent_Template_input_ngModelChange_49_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "select", 23);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminSessionComponent_Template_select_ngModelChange_50_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedEntreprise, $event) || (ctx.selectedEntreprise = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SuperadminSessionComponent_Template_select_change_50_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(51, "option", 24);
      \u0275\u0275text(52, "Toutes entreprises");
      \u0275\u0275elementEnd();
      \u0275\u0275template(53, SuperadminSessionComponent_option_53_Template, 2, 2, "option", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "select", 26);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminSessionComponent_Template_select_ngModelChange_54_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedStatut, $event) || (ctx.selectedStatut = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SuperadminSessionComponent_Template_select_change_54_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(55, "option", 24);
      \u0275\u0275text(56, "Tous statuts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "option", 27);
      \u0275\u0275text(58, "Planifi\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "option", 28);
      \u0275\u0275text(60, "En cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "option", 29);
      \u0275\u0275text(62, "Termin\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "option", 30);
      \u0275\u0275text(64, "Annul\xE9e");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "select", 31);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminSessionComponent_Template_select_ngModelChange_65_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedType, $event) || (ctx.selectedType = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SuperadminSessionComponent_Template_select_change_65_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(66, "option", 24);
      \u0275\u0275text(67, "Tous types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "option", 32);
      \u0275\u0275text(69, "Pr\xE9sentiel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "option", 33);
      \u0275\u0275text(71, "Distanciel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "option", 34);
      \u0275\u0275text(73, "Hybride");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminSessionComponent_Template_input_ngModelChange_74_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dateDebut, $event) || (ctx.dateDebut = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SuperadminSessionComponent_Template_input_change_74_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "input", 36);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminSessionComponent_Template_input_ngModelChange_75_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dateFin, $event) || (ctx.dateFin = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SuperadminSessionComponent_Template_input_change_75_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "span", 4);
      \u0275\u0275template(77, SuperadminSessionComponent_button_77_Template, 3, 0, "button", 37);
      \u0275\u0275elementStart(78, "select", 38);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminSessionComponent_Template_select_ngModelChange_78_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SuperadminSessionComponent_Template_select_change_78_listener() {
        return ctx.PageSize();
      });
      \u0275\u0275elementStart(79, "option", 39);
      \u0275\u0275text(80, "10 / page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "option", 40);
      \u0275\u0275text(82, "25 / page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "option", 41);
      \u0275\u0275text(84, "50 / page");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(85, SuperadminSessionComponent_div_85_Template, 5, 1, "div", 42)(86, SuperadminSessionComponent_div_86_Template, 3, 0, "div", 43)(87, SuperadminSessionComponent_ng_container_87_Template, 4, 3, "ng-container", 44);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate2("", ctx.totalData, " session", ctx.totalData !== 1 ? "s" : "");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.stats.total);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.stats.planifiees);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.stats.enCours);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.stats.terminees);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.stats.annulees);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedEntreprise);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.companies);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatut);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedType);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.dateDebut);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.dateFin);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.hasActiveFilters);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.pageSize);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, CustomPaginationComponent, SlicePipe], styles: ['\n\n.ac-shell[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ac-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 16px;\n  font-size: 13px;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ac-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.ac-tab.active[_ngcontent-%COMP%] {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ac-tab[_ngcontent-%COMP%]:hover:not(.active) {\n  color: #111827;\n}\n.ac-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 160px;\n  max-width: 220px;\n}\n.ac-search__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ac-search__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 10px 6px 30px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ac-search__input[_ngcontent-%COMP%]:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.ac-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    background 0.15s,\n    color 0.15s;\n}\n.ac-chip[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ac-chip--on[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  border-color: #85B7EB;\n  color: #0C447C;\n}\n.ac-spacer[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.ac-view-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-btn.active[_ngcontent-%COMP%], \n.ac-view-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background: #185FA5;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.15s;\n}\n.ac-add-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  color: #fff;\n}\n.ac-add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ac-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  padding: 12px 14px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ac-kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.ac-kpi__label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: #4b5563;\n  margin-bottom: 4px;\n}\n.ac-kpi__label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ac-kpi__val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 500;\n  color: #111827;\n}\n.ac-kpi__delta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-top: 2px;\n}\n.ac-kpi__delta.up[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.ac-kpi__delta.down[_ngcontent-%COMP%] {\n  color: #A32D2D;\n}\n.ac-kpi__delta.neutral[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.ac-skeletons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n}\n.ac-skeleton-card[_ngcontent-%COMP%] {\n  height: 220px;\n  border-radius: 12px;\n  background: #f3f4f6;\n  animation: _ngcontent-%COMP%_ac-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_ac-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ac-alert[_ngcontent-%COMP%] {\n  margin: 12px 14px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n  background: #f9fafb;\n}\n.ac-fcard[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  transition: border-color 0.15s;\n}\n.ac-fcard[_ngcontent-%COMP%]:hover {\n  border-color: #aec6e4;\n}\n.ac-fcard__thumb[_ngcontent-%COMP%] {\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  position: relative;\n  overflow: hidden;\n}\n.ac-fcard__thumb[data-th=blue][_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.ac-fcard__thumb[data-th=teal][_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.ac-fcard__thumb[data-th=purple][_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.ac-fcard__thumb[data-th=amber][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ac-fcard__thumb[data-th=coral][_ngcontent-%COMP%] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.ac-fcard__thumb[data-th=green][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.ac-fcard__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-fcard__body[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  flex: 1;\n}\n.ac-fcard__cat[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 4px;\n}\n.ac-fcard__cat[data-cat=tech][_ngcontent-%COMP%] {\n  color: #0C447C;\n}\n.ac-fcard__cat[data-cat=rh][_ngcontent-%COMP%] {\n  color: #085041;\n}\n.ac-fcard__cat[data-cat=mgmt][_ngcontent-%COMP%] {\n  color: #534AB7;\n}\n.ac-fcard__cat[data-cat=fin][_ngcontent-%COMP%] {\n  color: #633806;\n}\n.ac-fcard__cat[data-cat=default][_ngcontent-%COMP%] {\n  color: #4b5563;\n}\n.ac-fcard__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 6px;\n  line-height: 1.3;\n}\n.ac-fcard__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ac-fcard__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-fcard__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ac-fcard__footer[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-top: 1px solid #f3f4f6;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-fcard__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-left: auto;\n}\n.ac-status[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.ac-status[data-s=pub][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=draft][_ngcontent-%COMP%] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=pending][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-status[data-s=plan][_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #3730A3;\n}\n.ac-status[data-s=live][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=done][_ngcontent-%COMP%] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=cancel][_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #991B1B;\n}\n.ac-prog[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0 6px;\n}\n.ac-prog__bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: #f3f4f6;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ac-prog__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  background: #185FA5;\n}\n.ac-prog__txt[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9ca3af;\n  text-align: right;\n  margin-top: 2px;\n}\n.ac-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.ac-act[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-act[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-act--del[_ngcontent-%COMP%] {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ac-act--del[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.ac-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.ac-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ac-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ac-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ac-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.ac-table-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n}\n.ac-table-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.ac-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 14px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ac-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n}\n.ac-empty--span[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.ac-empty-tab[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 14px;\n  gap: 12px;\n  color: #9ca3af;\n}\n.ac-empty-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.ac-empty-tab[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ac-pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ac-pager__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ac-pager__btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.ac-pager__btn[_ngcontent-%COMP%] {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ac-pager__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ac-pager__btn.active[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ac-pager__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ac-toolbar--chips[_ngcontent-%COMP%] {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-top: none;\n  background: #fff;\n  gap: 6px;\n}\n.ac-view-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.ac-view-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ac-view-toggle.active[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #111827;\n  font-weight: 500;\n}\n.ac-view-toggle[_ngcontent-%COMP%]:hover:not(.active) {\n  background: #f9fafb;\n}\n.ac-sessions-list[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  background: #f9fafb;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ac-session-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  transition: border-color 0.15s;\n}\n.ac-session-row[_ngcontent-%COMP%]:hover {\n  border-color: #aec6e4;\n}\n.ac-session-date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 40px;\n}\n.ac-session-date__day[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1;\n}\n.ac-session-date__month[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.ac-session-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ac-session-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ac-session-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 3px;\n  flex-wrap: wrap;\n}\n.ac-session-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-session-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ac-session-badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.ac-session-places[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  white-space: nowrap;\n}\n.ac-cal[_ngcontent-%COMP%] {\n  padding: 12px 14px 14px;\n  background: #f9fafb;\n}\n.ac-cal__nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.ac-cal__nav-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 14px;\n  color: #4b5563;\n  transition: background 0.12s;\n}\n.ac-cal__nav-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-cal__nav-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n  text-transform: capitalize;\n}\n.ac-cal__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 4px;\n}\n.ac-cal__head[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 4px 0 6px;\n}\n.ac-cal__cell[_ngcontent-%COMP%] {\n  min-height: 80px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 5px 5px 4px;\n  overflow: hidden;\n  transition: border-color 0.12s;\n}\n.ac-cal__cell[_ngcontent-%COMP%]:hover {\n  border-color: #aec6e4;\n}\n.ac-cal__cell--other[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.ac-cal__cell--other[_ngcontent-%COMP%]   .ac-cal__day[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.ac-cal__cell--today[_ngcontent-%COMP%] {\n  border-color: #185FA5;\n}\n.ac-cal__cell--today[_ngcontent-%COMP%]   .ac-cal__day[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 50%;\n}\n.ac-cal__day[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 4px;\n  display: block;\n}\n.ac-cal__events[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ac-cal__event[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 4px;\n  border-radius: 3px;\n  background: #E6F1FB;\n  color: #0C447C;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: default;\n}\n.ac-cal__event--dist[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-cal__event--hybr[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.wz-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 620px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.wz-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-head__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E6F1FB;\n  color: #185FA5;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.wz-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.wz-head__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-head__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.wz-close[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.wz-close[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.wz-stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.wz-step__circle[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 500;\n  flex-shrink: 0;\n  border: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  color: #9ca3af;\n  transition: all 0.2s;\n}\n.wz-step__circle.active[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.wz-step__circle.done[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n  border-color: #97C459;\n}\n.wz-step__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.wz-step__label.active[_ngcontent-%COMP%] {\n  color: #185FA5;\n}\n.wz-step__label.done[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.wz-step__line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 0.5px;\n  background: #e5e7eb;\n  margin: 0 8px;\n  min-width: 20px;\n}\n.wz-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.wz-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.wz-field--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.wz-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.wz-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-req[_ngcontent-%COMP%] {\n  color: #E24B4A;\n}\n.wz-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.wz-input[_ngcontent-%COMP%]:focus {\n  border-color: #185FA5;\n  box-shadow: 0 0 0 2px #E6F1FB;\n}\n.wz-input[readonly][_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.wz-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 68px;\n  line-height: 1.5;\n}\n.wz-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-domain-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.wz-domain-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.wz-domain-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.wz-domain-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-domain-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.wz-domain-card.selected[_ngcontent-%COMP%] {\n  border-color: #185FA5;\n  background: #E6F1FB;\n}\n.wz-domain-card.selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0C447C;\n}\n.wz-strip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 10px;\n}\n.wz-strip__hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.wz-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  border: 0.5px solid #85B7EB;\n  font-size: 12px;\n  color: #0C447C;\n}\n.wz-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  cursor: pointer;\n  color: #378ADD;\n}\n.wz-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #0C447C;\n}\n.wz-pool[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 6px;\n}\n.wz-pool__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-pool__search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.wz-pool__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.wz-pool__list[_ngcontent-%COMP%] {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.wz-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.wz-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.wz-pool__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.wz-pool__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.wz-pool__item[_ngcontent-%COMP%]:hover, \n.wz-pool__item.checked[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.wz-pool__check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.wz-pool__check.on[_ngcontent-%COMP%] {\n  background: #185FA5;\n  border-color: #185FA5;\n  color: #fff;\n}\n.wz-pool__thumb[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.wz-pool__thumb[data-th=blue][_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.wz-pool__thumb[data-th=teal][_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.wz-pool__thumb[data-th=purple][_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-pool__thumb[data-th=amber][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.wz-pool__thumb[data-th=coral][_ngcontent-%COMP%] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.wz-pool__thumb[data-th=green][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.wz-pool__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.wz-pool__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wz-pool__meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-pool__tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  background: #f3f4f6;\n  color: #4b5563;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.wz-pool__empty[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.wz-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 0.5px solid #f3f4f6;\n}\n.wz-toggle-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.wz-toggle-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-toggle-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.wz-toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.wz-toggle[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.wz-toggle.on[_ngcontent-%COMP%] {\n  background: #185FA5;\n}\n.wz-toggle.on[_ngcontent-%COMP%]::after {\n  left: 19px;\n}\n.wz-info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #E6F1FB;\n  border-radius: 8px;\n  border: 0.5px solid #85B7EB;\n  margin-bottom: 12px;\n  font-size: 12px;\n  color: #0C447C;\n  line-height: 1.5;\n}\n.wz-info-banner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #185FA5;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.wz-recap-card[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 10px;\n}\n.wz-recap-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.wz-recap-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-recap-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.wz-rl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-rv[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-recap-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.wz-rc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.wz-error[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.wz-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.wz-foot__info[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-btn-ghost[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.wz-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.wz-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #185FA5;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.wz-btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.wz-btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.wz-btn-success[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #3B6D11;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.wz-btn-success[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.wz-btn-success[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.cw-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 600px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.cw-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.cw-head__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E1F5EE;\n  color: #0F6E56;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cw-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.cw-head__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-head__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.cw-close[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.cw-close[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.cw-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.cw-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.cw-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.cw-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.cw-upload-zone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 24px 16px;\n  border: 1.5px dashed #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  cursor: pointer;\n  margin-bottom: 16px;\n  transition: border-color 0.15s, background 0.15s;\n}\n.cw-upload-zone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #9ca3af;\n}\n.cw-upload-zone[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n  font-weight: 500;\n}\n.cw-upload-zone__hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 400;\n}\n.cw-upload-zone[_ngcontent-%COMP%]:hover {\n  border-color: #79C9AB;\n  background: #E1F5EE;\n}\n.cw-upload-zone[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.cw-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.cw-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-req[_ngcontent-%COMP%] {\n  color: #E24B4A;\n}\n.cw-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.cw-input[_ngcontent-%COMP%]:focus {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-input[readonly][_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.cw-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 72px;\n  line-height: 1.5;\n}\n.cw-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-toggle-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 0;\n}\n.cw-toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.cw-toggle[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.cw-toggle.on[_ngcontent-%COMP%] {\n  background: #0F6E56;\n}\n.cw-toggle.on[_ngcontent-%COMP%]::after {\n  left: 19px;\n}\n.cw-toggle-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4b5563;\n}\n.cw-section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 8px;\n}\n.cw-domain-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-domain-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.cw-domain-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #9ca3af;\n}\n.cw-domain-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-domain-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-domain-card.selected[_ngcontent-%COMP%] {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-domain-card.selected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-domain-card.selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-level-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-level-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.cw-level-card__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-level-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.cw-level-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-level-card.selected[_ngcontent-%COMP%] {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-level-card.selected[_ngcontent-%COMP%]   .cw-level-card__label[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-level-card.selected[_ngcontent-%COMP%]   .cw-level-card__sub[_ngcontent-%COMP%] {\n  color: rgb(148.5, 219.5, 194.65);\n}\n.cw-tags-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n  min-height: 36px;\n  padding: 6px 8px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.cw-tags-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  background: #E1F5EE;\n  border: 0.5px solid #79C9AB;\n  font-size: 12px;\n  color: #0F6E56;\n}\n.cw-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  cursor: pointer;\n  color: #79C9AB;\n}\n.cw-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #0F6E56;\n}\n.cw-tag-input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 12px;\n  color: #111827;\n  background: transparent;\n  flex: 1;\n  min-width: 100px;\n  font-family: inherit;\n}\n.cw-strip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 8px;\n}\n.cw-strip-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.cw-pool[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.cw-pool__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.cw-pool__search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.cw-pool__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.cw-pool__list[_ngcontent-%COMP%] {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.cw-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.cw-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.cw-pool__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.cw-pool__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cw-pool__item[_ngcontent-%COMP%]:hover, \n.cw-pool__item.checked[_ngcontent-%COMP%] {\n  background: #E1F5EE;\n}\n.cw-pool__check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.cw-pool__check.on[_ngcontent-%COMP%] {\n  background: #0F6E56;\n  border-color: #0F6E56;\n  color: #fff;\n}\n.cw-pool__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cw-pool__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cw-pool__meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-pool__empty[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.cw-vis-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.cw-vis-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  cursor: pointer;\n  transition: all 0.15s;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cw-vis-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #9ca3af;\n  margin-bottom: 4px;\n}\n.cw-vis-card__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-vis-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-vis-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-vis-card.selected[_ngcontent-%COMP%] {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-vis-card.selected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-vis-card.selected[_ngcontent-%COMP%]   .cw-vis-card__label[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-error[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.cw-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.cw-btn-ghost[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.cw-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.cw-btn-draft[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: #fff;\n  cursor: pointer;\n  transition: background 0.12s, border-color 0.12s;\n}\n.cw-btn-draft[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.cw-btn-draft[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.cw-btn-draft[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #0F6E56;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.cw-btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.cw-btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.cw-btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .ac-card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-skeletons[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .ac-card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ac-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.ac-act--arch[_ngcontent-%COMP%] {\n  color: #BA7517;\n}\n.ac-act--arch[_ngcontent-%COMP%]:hover {\n  border-color: #BA7517;\n  color: #BA7517;\n  background: #FAEEDA;\n}\n.ac-instructor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ac-instructor-av[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #E6F1FB;\n  color: #185FA5;\n  font-size: 11px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.ac-select[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  outline: none;\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.ac-select[_ngcontent-%COMP%]:focus {\n  border-color: #185FA5;\n}\n.ac-topbar-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ac-alert-close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n  font-size: 14px;\n}\n.ac-alert-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=superadmin-session.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminSessionComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-session", standalone: true, imports: [CommonModule, FormsModule, RouterModule, CustomPaginationComponent], template: `<div class="ac-shell">

  <!-- \u2500\u2500 Topbar \u2500\u2500 -->
  <div class="ac-topbar">
    <button type="button" class="ac-tab active">
      <i class="isax isax-calendar-1"></i>Sessions
    </button>
    <span class="ac-spacer"></span>
    <div style="display:flex;align-items:center;padding:0 10px;">
      <span class="ac-topbar-info">{{ totalData }} session{{ totalData !== 1 ? 's' : '' }}</span>
    </div>
  </div>

  <!-- \u2500\u2500 KPI \u2500\u2500 -->
  <div class="ac-kpi-row" style="grid-template-columns:repeat(5,1fr);">
    <div class="ac-kpi">
      <div class="ac-kpi__label"><i class="isax isax-calendar"></i>Total</div>
      <div class="ac-kpi__val">{{ stats.total }}</div>
    </div>
    <div class="ac-kpi">
      <div class="ac-kpi__label"><i class="isax isax-clock"></i>Planifi\xE9es</div>
      <div class="ac-kpi__val">{{ stats.planifiees }}</div>
      <div class="ac-kpi__delta neutral">\xE0 venir</div>
    </div>
    <div class="ac-kpi">
      <div class="ac-kpi__label"><i class="isax isax-play-circle"></i>En cours</div>
      <div class="ac-kpi__val">{{ stats.enCours }}</div>
      <div class="ac-kpi__delta up">actives</div>
    </div>
    <div class="ac-kpi">
      <div class="ac-kpi__label"><i class="isax isax-tick-circle"></i>Termin\xE9es</div>
      <div class="ac-kpi__val">{{ stats.terminees }}</div>
    </div>
    <div class="ac-kpi">
      <div class="ac-kpi__label"><i class="isax isax-close-circle"></i>Annul\xE9es</div>
      <div class="ac-kpi__val">{{ stats.annulees }}</div>
      <div class="ac-kpi__delta down">annul\xE9es</div>
    </div>
  </div>

  <!-- \u2500\u2500 Toolbar \u2500\u2500 -->
  <div class="ac-toolbar">
    <div class="ac-search">
      <i class="isax isax-search-normal ac-search__icon"></i>
      <input class="ac-search__input" type="text"
             [(ngModel)]="searchTerm"
             (ngModelChange)="onSearch()"
             placeholder="Titre, code, lieu, formateur\u2026">
    </div>

    <!-- Entreprise -->
    <select class="ac-select" title="Entreprise" [(ngModel)]="selectedEntreprise" (change)="onFilterChange()">
      <option value="">Toutes entreprises</option>
      <option *ngFor="let c of companies" [value]="c.id">{{ c.nom }}</option>
    </select>

    <!-- Statut -->
    <select class="ac-select" title="Statut" [(ngModel)]="selectedStatut" (change)="onFilterChange()">
      <option value="">Tous statuts</option>
      <option value="planifiee">Planifi\xE9e</option>
      <option value="en_cours">En cours</option>
      <option value="terminee">Termin\xE9e</option>
      <option value="annulee">Annul\xE9e</option>
    </select>

    <!-- Type -->
    <select class="ac-select" title="Type" [(ngModel)]="selectedType" (change)="onFilterChange()">
      <option value="">Tous types</option>
      <option value="presentiel">Pr\xE9sentiel</option>
      <option value="distanciel">Distanciel</option>
      <option value="hybride">Hybride</option>
    </select>

    <!-- Date range -->
    <input class="ac-select" type="date" title="Date d\xE9but"
           [(ngModel)]="dateDebut" (change)="onFilterChange()"
           style="width:130px;">
    <input class="ac-select" type="date" title="Date fin"
           [(ngModel)]="dateFin" (change)="onFilterChange()"
           style="width:130px;">

    <span class="ac-spacer"></span>

    <!-- Reset -->
    <button type="button" class="ac-chip" *ngIf="hasActiveFilters" (click)="resetFilters()">
      <i class="isax isax-refresh"></i>R\xE9initialiser
    </button>

    <!-- Page size -->
    <select class="ac-select" title="Taille de page" [(ngModel)]="pageSize" (change)="PageSize()">
      <option value="10">10 / page</option>
      <option value="25">25 / page</option>
      <option value="50">50 / page</option>
    </select>
  </div>

  <!-- \u2500\u2500 Alert \u2500\u2500 -->
  <div class="ac-alert" *ngIf="error">
    <i class="isax isax-warning-2"></i>{{ error }}
    <button type="button" class="ac-alert-close" (click)="error=''">
      <i class="isax isax-close-circle"></i>
    </button>
  </div>

  <!-- \u2500\u2500 Loading \u2500\u2500 -->
  <div class="ac-empty" *ngIf="loading">
    <i class="isax isax-calendar-1"></i>Chargement des sessions\u2026
  </div>

  <!-- \u2500\u2500 Table \u2500\u2500 -->
  <ng-container *ngIf="!loading">
    <table class="ac-table" *ngIf="sessions.length > 0">
      <thead>
        <tr>
          <th style="width:90px;">Code</th>
          <th>Titre</th>
          <th style="width:120px;">Formation</th>
          <th style="width:130px;">Formateur</th>
          <th style="width:80px;text-align:center;">Type</th>
          <th style="width:100px;">Lieu</th>
          <th style="width:100px;">Date d\xE9but</th>
          <th style="width:100px;">Date fin</th>
          <th style="width:80px;text-align:center;">Places</th>
          <th style="width:88px;text-align:center;">Statut</th>
          <th style="width:70px;"></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let s of sessions; trackBy: trackBySession">
          <!-- Code -->
          <td style="font-size:11px;color:#9ca3af;font-family:monospace;">{{ s.code_session || '\u2014' }}</td>
          <!-- Titre -->
          <td>
            <div class="ac-table-name">{{ s.titre }}</div>
            <div class="ac-table-sub" *ngIf="s.description">{{ s.description | slice:0:60 }}{{ (s.description?.length ?? 0) > 60 ? '\u2026' : '' }}</div>
          </td>
          <!-- Formation -->
          <td>
            <div class="ac-table-name" style="font-size:12px;">{{ s.formation?.titre || '\u2014' }}</div>
          </td>
          <!-- Formateur -->
          <td>
            <div class="ac-instructor">
              <div class="ac-instructor-av">{{ (s.formateur?.prenom?.[0] ?? 'F') + (s.formateur?.nom?.[0] ?? '') }}</div>
              <div>
                <div class="ac-table-name" style="font-size:12px;">
                  <ng-container *ngIf="s.formateur?.prenom || s.formateur?.nom">
                    {{ s.formateur?.prenom || '' }} {{ s.formateur?.nom || '' }}
                  </ng-container>
                  <ng-container *ngIf="!s.formateur?.prenom && !s.formateur?.nom">Non assign\xE9</ng-container>
                </div>
              </div>
            </div>
          </td>
          <!-- Type -->
          <td style="text-align:center;">
            <span class="ac-status" [attr.data-s]="getTypeData(s.type)">{{ getTypeLabel(s.type) }}</span>
          </td>
          <!-- Lieu -->
          <td style="font-size:12px;">{{ s.lieu || '\u2014' }}</td>
          <!-- Date d\xE9but -->
          <td style="font-size:12px;">{{ formatDate(s.date_debut) }}</td>
          <!-- Date fin -->
          <td style="font-size:12px;">{{ formatDate(s.date_fin) }}</td>
          <!-- Places -->
          <td style="text-align:center;font-size:12px;">
            <span [style.color]="s.nombre_places_restantes === 0 ? '#991b1b' : '#27500a'">
              {{ s.nombre_inscrits }}/{{ s.capacite_max }}
            </span>
          </td>
          <!-- Statut -->
          <td style="text-align:center;">
            <span class="ac-status" [attr.data-s]="getStatutData(s.statut)">{{ getStatutLabel(s.statut) }}</span>
          </td>
          <!-- Actions -->
          <td>
            <div class="ac-actions">
              <button type="button" class="ac-act ac-act--del" (click)="deleteSession(s)" title="Supprimer">
                <i class="isax isax-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Empty -->
    <div class="ac-empty" *ngIf="sessions.length === 0">
      <i class="isax isax-calendar-1"></i>
      {{ hasActiveFilters ? 'Aucun r\xE9sultat pour ces filtres' : 'Aucune session trouv\xE9e' }}
      <button type="button" class="ac-chip" style="margin-top:10px;" *ngIf="hasActiveFilters" (click)="resetFilters()">
        <i class="isax isax-refresh"></i>R\xE9initialiser
      </button>
    </div>

    <!-- Pagination -->
    <app-custom-pagination
      *ngIf="sessions.length > 0 && totalData > pageSize"
      [totalItems]="totalData"
      [pageSize]="pageSize"
      [currentPage]="currentPage"
      (pageChange)="onPageChange($event)">
    </app-custom-pagination>
  </ng-container>

</div>
`, styles: ['/* src/app/features/superadmin/superadmin-session/superadmin-session.component.scss */\n.ac-shell {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ac-topbar {\n  display: flex;\n  align-items: stretch;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-tab {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 16px;\n  font-size: 13px;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ac-tab i {\n  font-size: 15px;\n}\n.ac-tab.active {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ac-tab:hover:not(.active) {\n  color: #111827;\n}\n.ac-toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-search {\n  position: relative;\n  flex: 1;\n  min-width: 160px;\n  max-width: 220px;\n}\n.ac-search__icon {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ac-search__input {\n  width: 100%;\n  padding: 6px 10px 6px 30px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ac-search__input:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.ac-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    background 0.15s,\n    color 0.15s;\n}\n.ac-chip:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ac-chip--on {\n  background: #E6F1FB;\n  border-color: #85B7EB;\n  color: #0C447C;\n}\n.ac-spacer {\n  margin-left: auto;\n}\n.ac-view-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-btn.active,\n.ac-view-btn:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-add-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background: #185FA5;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.15s;\n}\n.ac-add-btn:hover {\n  opacity: 0.9;\n  color: #fff;\n}\n.ac-add-btn i {\n  font-size: 13px;\n}\n.ac-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  padding: 12px 14px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ac-kpi {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.ac-kpi__label {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: #4b5563;\n  margin-bottom: 4px;\n}\n.ac-kpi__label i {\n  font-size: 13px;\n}\n.ac-kpi__val {\n  font-size: 22px;\n  font-weight: 500;\n  color: #111827;\n}\n.ac-kpi__delta {\n  font-size: 11px;\n  margin-top: 2px;\n}\n.ac-kpi__delta.up {\n  color: #3B6D11;\n}\n.ac-kpi__delta.down {\n  color: #A32D2D;\n}\n.ac-kpi__delta.neutral {\n  color: #9ca3af;\n}\n.ac-skeletons {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n}\n.ac-skeleton-card {\n  height: 220px;\n  border-radius: 12px;\n  background: #f3f4f6;\n  animation: ac-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes ac-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ac-alert {\n  margin: 12px 14px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-card-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n  background: #f9fafb;\n}\n.ac-fcard {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  transition: border-color 0.15s;\n}\n.ac-fcard:hover {\n  border-color: #aec6e4;\n}\n.ac-fcard__thumb {\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  position: relative;\n  overflow: hidden;\n}\n.ac-fcard__thumb[data-th=blue] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.ac-fcard__thumb[data-th=teal] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.ac-fcard__thumb[data-th=purple] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.ac-fcard__thumb[data-th=amber] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ac-fcard__thumb[data-th=coral] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.ac-fcard__thumb[data-th=green] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.ac-fcard__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-fcard__body {\n  padding: 10px 12px;\n  flex: 1;\n}\n.ac-fcard__cat {\n  font-size: 10px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 4px;\n}\n.ac-fcard__cat[data-cat=tech] {\n  color: #0C447C;\n}\n.ac-fcard__cat[data-cat=rh] {\n  color: #085041;\n}\n.ac-fcard__cat[data-cat=mgmt] {\n  color: #534AB7;\n}\n.ac-fcard__cat[data-cat=fin] {\n  color: #633806;\n}\n.ac-fcard__cat[data-cat=default] {\n  color: #4b5563;\n}\n.ac-fcard__title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 6px;\n  line-height: 1.3;\n}\n.ac-fcard__meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ac-fcard__meta span {\n  font-size: 11px;\n  color: #4b5563;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-fcard__meta span i {\n  font-size: 12px;\n}\n.ac-fcard__footer {\n  padding: 8px 12px;\n  border-top: 1px solid #f3f4f6;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-fcard__actions {\n  display: flex;\n  gap: 4px;\n  margin-left: auto;\n}\n.ac-status {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.ac-status[data-s=pub] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=draft] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=pending] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-status[data-s=plan] {\n  background: #EEF2FF;\n  color: #3730A3;\n}\n.ac-status[data-s=live] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=done] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=cancel] {\n  background: #FEF2F2;\n  color: #991B1B;\n}\n.ac-prog {\n  flex: 1;\n  margin: 0 6px;\n}\n.ac-prog__bar {\n  height: 4px;\n  background: #f3f4f6;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ac-prog__fill {\n  height: 100%;\n  border-radius: 4px;\n  background: #185FA5;\n}\n.ac-prog__txt {\n  font-size: 10px;\n  color: #9ca3af;\n  text-align: right;\n  margin-top: 2px;\n}\n.ac-actions {\n  display: flex;\n  gap: 5px;\n}\n.ac-act {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-act:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-act--del {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ac-act--del:hover {\n  background: #fef2f2;\n}\n.ac-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.ac-table th {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ac-table td {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ac-table tr:last-child td {\n  border-bottom: none;\n}\n.ac-table tr:hover td {\n  background: #f9fafb;\n}\n.ac-table-name {\n  font-size: 13px;\n  font-weight: 500;\n}\n.ac-table-sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.ac-empty {\n  text-align: center;\n  padding: 40px 14px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ac-empty i {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n}\n.ac-empty--span {\n  grid-column: 1/-1;\n}\n.ac-empty-tab {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 14px;\n  gap: 12px;\n  color: #9ca3af;\n}\n.ac-empty-tab i {\n  font-size: 2.5rem;\n}\n.ac-empty-tab p {\n  font-size: 14px;\n}\n.ac-pager {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ac-pager__info {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ac-pager__btns {\n  display: flex;\n  gap: 4px;\n}\n.ac-pager__btn {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ac-pager__btn:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ac-pager__btn.active {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ac-pager__btn:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ac-toolbar--chips {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-top: none;\n  background: #fff;\n  gap: 6px;\n}\n.ac-view-group {\n  display: inline-flex;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.ac-view-toggle {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-toggle i {\n  font-size: 14px;\n}\n.ac-view-toggle.active {\n  background: #f3f4f6;\n  color: #111827;\n  font-weight: 500;\n}\n.ac-view-toggle:hover:not(.active) {\n  background: #f9fafb;\n}\n.ac-sessions-list {\n  padding: 10px 14px;\n  background: #f9fafb;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ac-session-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  transition: border-color 0.15s;\n}\n.ac-session-row:hover {\n  border-color: #aec6e4;\n}\n.ac-session-date {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 40px;\n}\n.ac-session-date__day {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1;\n}\n.ac-session-date__month {\n  font-size: 10px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.ac-session-info {\n  flex: 1;\n  min-width: 0;\n}\n.ac-session-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ac-session-meta {\n  display: flex;\n  gap: 10px;\n  margin-top: 3px;\n  flex-wrap: wrap;\n}\n.ac-session-meta span {\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-session-meta span i {\n  font-size: 12px;\n}\n.ac-session-badges {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.ac-session-places {\n  font-size: 11px;\n  color: #4b5563;\n  white-space: nowrap;\n}\n.ac-cal {\n  padding: 12px 14px 14px;\n  background: #f9fafb;\n}\n.ac-cal__nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.ac-cal__nav-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 14px;\n  color: #4b5563;\n  transition: background 0.12s;\n}\n.ac-cal__nav-btn:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-cal__nav-label {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n  text-transform: capitalize;\n}\n.ac-cal__grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 4px;\n}\n.ac-cal__head {\n  text-align: center;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 4px 0 6px;\n}\n.ac-cal__cell {\n  min-height: 80px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 5px 5px 4px;\n  overflow: hidden;\n  transition: border-color 0.12s;\n}\n.ac-cal__cell:hover {\n  border-color: #aec6e4;\n}\n.ac-cal__cell--other {\n  background: #f9fafb;\n}\n.ac-cal__cell--other .ac-cal__day {\n  color: #9ca3af;\n}\n.ac-cal__cell--today {\n  border-color: #185FA5;\n}\n.ac-cal__cell--today .ac-cal__day {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 50%;\n}\n.ac-cal__day {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 4px;\n  display: block;\n}\n.ac-cal__events {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ac-cal__event {\n  font-size: 10px;\n  padding: 2px 4px;\n  border-radius: 3px;\n  background: #E6F1FB;\n  color: #0C447C;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: default;\n}\n.ac-cal__event--dist {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-cal__event--hybr {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.wz-modal {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 620px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.wz-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-head__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E6F1FB;\n  color: #185FA5;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.wz-head__text {\n  flex: 1;\n}\n.wz-head__title {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-head__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.wz-close {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.wz-close:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.wz-stepper {\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-step {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.wz-step__circle {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 500;\n  flex-shrink: 0;\n  border: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  color: #9ca3af;\n  transition: all 0.2s;\n}\n.wz-step__circle.active {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.wz-step__circle.done {\n  background: #EAF3DE;\n  color: #27500A;\n  border-color: #97C459;\n}\n.wz-step__label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.wz-step__label.active {\n  color: #185FA5;\n}\n.wz-step__label.done {\n  color: #3B6D11;\n}\n.wz-step__line {\n  flex: 1;\n  height: 0.5px;\n  background: #e5e7eb;\n  margin: 0 8px;\n  min-width: 20px;\n}\n.wz-body {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.wz-body::-webkit-scrollbar {\n  width: 4px;\n}\n.wz-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.wz-body::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.wz-field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.wz-field--full {\n  grid-column: 1/-1;\n}\n.wz-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.wz-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-req {\n  color: #E24B4A;\n}\n.wz-input {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.wz-input:focus {\n  border-color: #185FA5;\n  box-shadow: 0 0 0 2px #E6F1FB;\n}\n.wz-input[readonly] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.wz-textarea {\n  resize: vertical;\n  min-height: 68px;\n  line-height: 1.5;\n}\n.wz-hint {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-domain-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.wz-domain-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.wz-domain-card i {\n  font-size: 20px;\n}\n.wz-domain-card span {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-domain-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.wz-domain-card.selected {\n  border-color: #185FA5;\n  background: #E6F1FB;\n}\n.wz-domain-card.selected span {\n  color: #0C447C;\n}\n.wz-strip {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 10px;\n}\n.wz-strip__hint {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.wz-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  border: 0.5px solid #85B7EB;\n  font-size: 12px;\n  color: #0C447C;\n}\n.wz-chip i {\n  font-size: 11px;\n  cursor: pointer;\n  color: #378ADD;\n}\n.wz-chip i:hover {\n  color: #0C447C;\n}\n.wz-pool {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 6px;\n}\n.wz-pool__search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-pool__search i {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.wz-pool__search input {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.wz-pool__list {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.wz-pool__list::-webkit-scrollbar {\n  width: 3px;\n}\n.wz-pool__list::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.wz-pool__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.wz-pool__item:last-child {\n  border-bottom: none;\n}\n.wz-pool__item:hover,\n.wz-pool__item.checked {\n  background: #f9fafb;\n}\n.wz-pool__check {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.wz-pool__check.on {\n  background: #185FA5;\n  border-color: #185FA5;\n  color: #fff;\n}\n.wz-pool__thumb {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.wz-pool__thumb[data-th=blue] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.wz-pool__thumb[data-th=teal] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.wz-pool__thumb[data-th=purple] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-pool__thumb[data-th=amber] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.wz-pool__thumb[data-th=coral] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.wz-pool__thumb[data-th=green] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.wz-pool__info {\n  flex: 1;\n  min-width: 0;\n}\n.wz-pool__name {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wz-pool__meta {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-pool__tag {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  background: #f3f4f6;\n  color: #4b5563;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.wz-pool__empty {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.wz-toggle-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 0.5px solid #f3f4f6;\n}\n.wz-toggle-row:last-child {\n  border-bottom: none;\n}\n.wz-toggle-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-toggle-sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.wz-toggle {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.wz-toggle::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.wz-toggle.on {\n  background: #185FA5;\n}\n.wz-toggle.on::after {\n  left: 19px;\n}\n.wz-info-banner {\n  display: flex;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #E6F1FB;\n  border-radius: 8px;\n  border: 0.5px solid #85B7EB;\n  margin-bottom: 12px;\n  font-size: 12px;\n  color: #0C447C;\n  line-height: 1.5;\n}\n.wz-info-banner i {\n  font-size: 15px;\n  color: #185FA5;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.wz-recap-card {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 10px;\n}\n.wz-recap-title {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.wz-recap-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-recap-row:last-child {\n  border-bottom: none;\n}\n.wz-rl {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-rv {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-recap-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.wz-rc {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.wz-error {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.wz-foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.wz-foot__info {\n  flex: 1;\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-btn-ghost {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.wz-btn-ghost:hover {\n  background: #f3f4f6;\n}\n.wz-btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #185FA5;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-primary i {\n  font-size: 13px;\n}\n.wz-btn-primary:hover {\n  opacity: 0.9;\n}\n.wz-btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.wz-btn-success {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #3B6D11;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-success i {\n  font-size: 13px;\n}\n.wz-btn-success:hover {\n  opacity: 0.9;\n}\n.wz-btn-success:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.cw-modal {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 600px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.cw-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.cw-head__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E1F5EE;\n  color: #0F6E56;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cw-head__text {\n  flex: 1;\n}\n.cw-head__title {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-head__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.cw-close {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.cw-close:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.cw-body {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.cw-body::-webkit-scrollbar {\n  width: 4px;\n}\n.cw-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.cw-body::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.cw-upload-zone {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 24px 16px;\n  border: 1.5px dashed #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  cursor: pointer;\n  margin-bottom: 16px;\n  transition: border-color 0.15s, background 0.15s;\n}\n.cw-upload-zone i {\n  font-size: 28px;\n  color: #9ca3af;\n}\n.cw-upload-zone span {\n  font-size: 13px;\n  color: #4b5563;\n  font-weight: 500;\n}\n.cw-upload-zone__hint {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 400;\n}\n.cw-upload-zone:hover {\n  border-color: #79C9AB;\n  background: #E1F5EE;\n}\n.cw-upload-zone:hover i {\n  color: #0F6E56;\n}\n.cw-field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.cw-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.cw-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-req {\n  color: #E24B4A;\n}\n.cw-input {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.cw-input:focus {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-input[readonly] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.cw-textarea {\n  resize: vertical;\n  min-height: 72px;\n  line-height: 1.5;\n}\n.cw-hint {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-toggle-inline {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 0;\n}\n.cw-toggle {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.cw-toggle::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.cw-toggle.on {\n  background: #0F6E56;\n}\n.cw-toggle.on::after {\n  left: 19px;\n}\n.cw-toggle-label {\n  font-size: 12px;\n  color: #4b5563;\n}\n.cw-section-label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 8px;\n}\n.cw-domain-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-domain-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.cw-domain-card i {\n  font-size: 20px;\n  color: #9ca3af;\n}\n.cw-domain-card span {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-domain-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-domain-card.selected {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-domain-card.selected i {\n  color: #0F6E56;\n}\n.cw-domain-card.selected span {\n  color: #0F6E56;\n}\n.cw-level-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-level-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.cw-level-card__label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-level-card__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.cw-level-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-level-card.selected {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-level-card.selected .cw-level-card__label {\n  color: #0F6E56;\n}\n.cw-level-card.selected .cw-level-card__sub {\n  color: rgb(148.5, 219.5, 194.65);\n}\n.cw-tags-box {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n  min-height: 36px;\n  padding: 6px 8px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.cw-tags-box:focus-within {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  background: #E1F5EE;\n  border: 0.5px solid #79C9AB;\n  font-size: 12px;\n  color: #0F6E56;\n}\n.cw-tag i {\n  font-size: 11px;\n  cursor: pointer;\n  color: #79C9AB;\n}\n.cw-tag i:hover {\n  color: #0F6E56;\n}\n.cw-tag-input {\n  border: none;\n  outline: none;\n  font-size: 12px;\n  color: #111827;\n  background: transparent;\n  flex: 1;\n  min-width: 100px;\n  font-family: inherit;\n}\n.cw-strip {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 8px;\n}\n.cw-strip-hint {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.cw-pool {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.cw-pool__search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.cw-pool__search i {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.cw-pool__search input {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.cw-pool__list {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.cw-pool__list::-webkit-scrollbar {\n  width: 3px;\n}\n.cw-pool__list::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.cw-pool__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.cw-pool__item:last-child {\n  border-bottom: none;\n}\n.cw-pool__item:hover,\n.cw-pool__item.checked {\n  background: #E1F5EE;\n}\n.cw-pool__check {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.cw-pool__check.on {\n  background: #0F6E56;\n  border-color: #0F6E56;\n  color: #fff;\n}\n.cw-pool__info {\n  flex: 1;\n  min-width: 0;\n}\n.cw-pool__name {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cw-pool__meta {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-pool__empty {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.cw-vis-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.cw-vis-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  cursor: pointer;\n  transition: all 0.15s;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cw-vis-card i {\n  font-size: 20px;\n  color: #9ca3af;\n  margin-bottom: 4px;\n}\n.cw-vis-card__label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-vis-card__sub {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-vis-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-vis-card.selected {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-vis-card.selected i {\n  color: #0F6E56;\n}\n.cw-vis-card.selected .cw-vis-card__label {\n  color: #0F6E56;\n}\n.cw-error {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.cw-foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.cw-btn-ghost {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.cw-btn-ghost:hover {\n  background: #f3f4f6;\n}\n.cw-btn-draft {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: #fff;\n  cursor: pointer;\n  transition: background 0.12s, border-color 0.12s;\n}\n.cw-btn-draft i {\n  font-size: 13px;\n}\n.cw-btn-draft:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.cw-btn-draft:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #0F6E56;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.cw-btn-primary i {\n  font-size: 13px;\n}\n.cw-btn-primary:hover {\n  opacity: 0.9;\n}\n.cw-btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .ac-card-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-skeletons {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .ac-card-grid {\n    grid-template-columns: 1fr;\n  }\n  .ac-kpi-row {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.ac-act--arch {\n  color: #BA7517;\n}\n.ac-act--arch:hover {\n  border-color: #BA7517;\n  color: #BA7517;\n  background: #FAEEDA;\n}\n.ac-instructor {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ac-instructor-av {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #E6F1FB;\n  color: #185FA5;\n  font-size: 11px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.ac-select {\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  outline: none;\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.ac-select:focus {\n  border-color: #185FA5;\n}\n.ac-topbar-info {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ac-alert-close {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n  font-size: 14px;\n}\n.ac-alert-close:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=superadmin-session.component.css.map */\n'] }]
  }], () => [{ type: SessionFormationService }, { type: ClientCompanyService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminSessionComponent, { className: "SuperadminSessionComponent", filePath: "src/app/features/superadmin/superadmin-session/superadmin-session.component.ts", lineNumber: 18 });
})();
export {
  SuperadminSessionComponent
};
//# sourceMappingURL=chunk-EHZZNZQY.js.map
