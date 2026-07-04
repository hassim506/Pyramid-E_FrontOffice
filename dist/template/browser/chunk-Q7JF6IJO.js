import {
  FormationService
} from "./chunk-MHGWTEI2.js";
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
import {
  RouterLink
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
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
} from "./chunk-VTSSTHJF.js";
import "./chunk-4MWRP73S.js";

// src/app/features/instructor/students-list/students-list.component.ts
function StudentsListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "span", 5);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function StudentsListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 7);
    \u0275\u0275listener("click", function StudentsListComponent_div_1_Template_button_click_2_listener() {
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
function StudentsListComponent_ng_container_2_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    \u0275\u0275property("value", f_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r4.titre);
  }
}
function StudentsListComponent_ng_container_2_tr_34_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getInitials(a_r5));
  }
}
function StudentsListComponent_ng_container_2_tr_34_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 38);
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", a_r5.avatar, \u0275\u0275sanitizeUrl)("alt", ctx_r1.getFullName(a_r5));
  }
}
function StudentsListComponent_ng_container_2_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 25);
    \u0275\u0275template(3, StudentsListComponent_ng_container_2_tr_34_div_3_Template, 2, 1, "div", 26)(4, StudentsListComponent_ng_container_2_tr_34_img_4_Template, 1, 2, "img", 27);
    \u0275\u0275elementStart(5, "div")(6, "div", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 30);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "div", 31)(15, "div", 32);
    \u0275\u0275element(16, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 34);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "td")(20, "span", 35);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "span", 36);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !a_r5.avatar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r5.avatar);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getFullName(a_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r5.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r5.formation_titre);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", a_r5.progression, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", a_r5.progression, "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getStatutClass(a_r5.statut_formation));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatutLabel(a_r5.statut_formation), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r5.date_inscription ? \u0275\u0275pipeBind2(25, 11, a_r5.date_inscription, "dd/MM/yyyy") : "\u2014");
  }
}
function StudentsListComponent_ng_container_2_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275element(2, "i", 40);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Aucun apprenant trouv\xE9");
    \u0275\u0275elementEnd()()();
  }
}
function StudentsListComponent_ng_container_2_div_36_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function StudentsListComponent_ng_container_2_div_36_button_6_Template_button_click_0_listener() {
      const p_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPageChange(p_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", p_r8 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r8);
  }
}
function StudentsListComponent_ng_container_2_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43)(4, "button", 44);
    \u0275\u0275listener("click", function StudentsListComponent_ng_container_2_div_36_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, StudentsListComponent_ng_container_2_div_36_button_6_Template, 2, 3, "button", 46);
    \u0275\u0275elementStart(7, "button", 44);
    \u0275\u0275listener("click", function StudentsListComponent_ng_container_2_div_36_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.totalData, " apprenant", ctx_r1.totalData > 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getPageNumbers());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage * ctx_r1.pageSize >= ctx_r1.totalData);
  }
}
function StudentsListComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 8)(2, "div")(3, "h5", 9);
    \u0275\u0275text(4, "Mes apprenants ");
    \u0275\u0275elementStart(5, "span", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 11);
    \u0275\u0275text(8, "Apprenants inscrits \xE0 vos formations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 12);
    \u0275\u0275listener("click", function StudentsListComponent_ng_container_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadData());
    });
    \u0275\u0275element(10, "i", 13);
    \u0275\u0275text(11, " Actualiser ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 14)(13, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function StudentsListComponent_ng_container_2_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchValue, $event) || (ctx_r1.searchValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function StudentsListComponent_ng_container_2_Template_input_input_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 16);
    \u0275\u0275twoWayListener("ngModelChange", function StudentsListComponent_ng_container_2_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedFormationId, $event) || (ctx_r1.selectedFormationId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function StudentsListComponent_ng_container_2_Template_select_change_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementStart(15, "option", 17);
    \u0275\u0275text(16, "Toutes les formations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, StudentsListComponent_ng_container_2_option_17_Template, 2, 2, "option", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 19)(19, "div", 20)(20, "table", 21)(21, "thead")(22, "tr")(23, "th");
    \u0275\u0275text(24, "Apprenant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th");
    \u0275\u0275text(32, "Inscription");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "tbody");
    \u0275\u0275template(34, StudentsListComponent_ng_container_2_tr_34_Template, 26, 14, "tr", 22)(35, StudentsListComponent_ng_container_2_tr_35_Template, 5, 0, "tr", 2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(36, StudentsListComponent_ng_container_2_div_36_Template, 9, 5, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.totalData);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchValue);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedFormationId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.formations);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.tableData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tableData.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalData > ctx_r1.pageSize);
  }
}
var StudentsListComponent = class _StudentsListComponent {
  authService;
  formationService;
  http;
  loading = false;
  error = "";
  // All unique apprenants across all formations
  allApprenants = [];
  tableData = [];
  totalData = 0;
  // Pagination
  currentPage = 1;
  pageSize = 15;
  // Filters
  searchValue = "";
  selectedFormationId = "";
  // Formation list for filter dropdown
  formations = [];
  baseUrl = environment.apiUrl;
  constructor(authService, formationService, http) {
    this.authService = authService;
    this.formationService = formationService;
    this.http = http;
  }
  ngOnInit() {
    this.loadData();
  }
  getHeaders() {
    const token = localStorage.getItem("pyramide_token");
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }
  loadData() {
    this.loading = true;
    this.error = "";
    this.formationService.getFormationsformateur().subscribe({
      next: (res) => {
        this.formations = res.formations || [];
        if (this.formations.length === 0) {
          this.loading = false;
          return;
        }
        const requests = this.formations.map((f) => this.http.get(`${this.baseUrl}/formations/${f.id}/participants`, {
          headers: this.getHeaders()
        }).pipe(catchError(() => of({ participants: [] }))));
        forkJoin(requests).subscribe({
          next: (results) => {
            const seen = /* @__PURE__ */ new Set();
            this.allApprenants = [];
            results.forEach((r, idx) => {
              const formation = this.formations[idx];
              const participants = r.participants || r.data || [];
              participants.forEach((p) => {
                const entry = {
                  id: p.id,
                  nom: p.nom || p.name || "\u2014",
                  prenom: p.prenom || "",
                  email: p.email || "\u2014",
                  avatar: p.avatar || p.photo || null,
                  formation_id: formation.id,
                  formation_titre: formation.titre,
                  progression: p.pivot?.progression ?? p.progression ?? 0,
                  statut_formation: p.pivot?.statut_formation ?? p.statut_formation ?? "\u2014",
                  date_inscription: p.pivot?.date_inscription ?? p.date_inscription ?? null
                };
                this.allApprenants.push(entry);
              });
            });
            this.applyFilters();
            this.loading = false;
          },
          error: () => {
            this.error = "Erreur lors du chargement des apprenants.";
            this.loading = false;
          }
        });
      },
      error: () => {
        this.error = "Erreur lors du chargement des formations.";
        this.loading = false;
      }
    });
  }
  applyFilters() {
    let filtered = [...this.allApprenants];
    if (this.searchValue.trim()) {
      const q = this.searchValue.toLowerCase();
      filtered = filtered.filter((a) => a.nom.toLowerCase().includes(q) || a.prenom.toLowerCase().includes(q) || a.email.toLowerCase().includes(q) || a.formation_titre.toLowerCase().includes(q));
    }
    if (this.selectedFormationId) {
      filtered = filtered.filter((a) => String(a.formation_id) === String(this.selectedFormationId));
    }
    this.totalData = filtered.length;
    this.currentPage = 1;
    const start = 0;
    this.tableData = filtered.slice(start, start + this.pageSize);
    this._filtered = filtered;
  }
  _filtered = [];
  onPageChange(page) {
    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    this.tableData = this._filtered.slice(start, start + this.pageSize);
  }
  getPageNumbers() {
    const pages = [];
    const totalPages = Math.ceil(this.totalData / this.pageSize);
    const start = Math.max(1, this.currentPage - 2);
    const end = Math.min(totalPages, this.currentPage + 2);
    for (let i = start; i <= end; i++)
      pages.push(i);
    return pages;
  }
  getInitials(apprenant) {
    const n = `${apprenant.prenom} ${apprenant.nom}`.trim();
    return n.split(" ").map((w) => w[0]).join("").substring(0, 2).toUpperCase() || "?";
  }
  getFullName(apprenant) {
    return `${apprenant.prenom} ${apprenant.nom}`.trim() || apprenant.email;
  }
  getStatutClass(statut) {
    switch (statut) {
      case "en_cours":
        return "ip-statut-encours";
      case "termine":
        return "ip-statut-termine";
      case "abandonne":
        return "ip-statut-abandonne";
      default:
        return "ip-statut-default";
    }
  }
  getStatutLabel(statut) {
    const map = {
      en_cours: "En cours",
      termine: "Termin\xE9",
      abandonne: "Abandonn\xE9",
      non_commence: "Non commenc\xE9"
    };
    return map[statut] || statut || "\u2014";
  }
  static \u0275fac = function StudentsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentsListComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentsListComponent, selectors: [["app-students-list"]], decls: 3, vars: 3, consts: [["class", "ip-loader", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible", 4, "ngIf"], [4, "ngIf"], [1, "ip-loader"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "alert", "alert-danger", "alert-dismissible"], ["type", "button", 1, "btn-close", 3, "click"], [1, "ip-page-head"], [1, "ip-page-head__title"], [1, "ip-count"], [1, "ip-page-head__sub"], ["type", "button", 1, "ip-btn", "ip-btn--outline", 3, "click"], [1, "isax", "isax-refresh-2"], [1, "ip-toolbar"], ["type", "text", "placeholder", "Rechercher nom, email, formation\u2026", 1, "ip-search", 3, "ngModelChange", "input", "ngModel"], [1, "ip-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "ip-card"], [1, "table-responsive"], [1, "table", "ip-table"], [4, "ngFor", "ngForOf"], ["class", "ip-pagination", 4, "ngIf"], [3, "value"], [1, "ip-student-cell"], ["class", "ip-avatar", 4, "ngIf"], ["class", "ip-avatar-img", "onerror", "this.style.display='none'", 3, "src", "alt", 4, "ngIf"], [1, "ip-student-name"], [1, "ip-student-email"], [1, "ip-formation-tag"], [1, "ip-progress-wrap"], [1, "ip-progress-bar"], [1, "ip-progress-fill"], [1, "ip-progress-pct"], [1, "ip-statut", 3, "ngClass"], [1, "text-muted"], [1, "ip-avatar"], ["onerror", "this.style.display='none'", 1, "ip-avatar-img", 3, "src", "alt"], ["colspan", "5", 1, "ip-empty"], [1, "isax", "isax-profile-2user"], [1, "ip-pagination"], [1, "pg-info"], [1, "pg-controls"], ["type", "button", 1, "pg-btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], ["type", "button", "class", "pg-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-2"], ["type", "button", 1, "pg-btn", 3, "click"]], template: function StudentsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, StudentsListComponent_div_0_Template, 4, 0, "div", 0)(1, StudentsListComponent_div_1_Template, 3, 1, "div", 1)(2, StudentsListComponent_ng_container_2_Template, 37, 7, "ng-container", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n\n.ip-loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #EEF2FF;\n  color: #534AB7;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n}\n.ip-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.ip-btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #534AB7;\n  border: 1px solid #534AB7;\n}\n.ip-btn--outline[_ngcontent-%COMP%]:hover {\n  background: #EEF2FF;\n}\n.ip-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.ip-search[_ngcontent-%COMP%] {\n  height: 36px;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 0 12px;\n  font-size: 13px;\n  outline: none;\n  min-width: 240px;\n  transition: border-color 0.15s;\n}\n.ip-search[_ngcontent-%COMP%]:focus {\n  border-color: #534AB7;\n}\n.ip-select[_ngcontent-%COMP%] {\n  height: 36px;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 0 10px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  cursor: pointer;\n  max-width: 240px;\n}\n.ip-select[_ngcontent-%COMP%]:focus {\n  border-color: #534AB7;\n}\n.ip-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.ip-table[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ip-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ip-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #FAFBFF;\n}\n.ip-student-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: #534AB7;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 500;\n}\n.ip-avatar-img[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.ip-student-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-student-email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 1px;\n}\n.ip-formation-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #EEF2FF;\n  color: #534AB7;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 6px;\n  max-width: 200px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ip-progress-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ip-progress-bar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 5px;\n  background: #E9ECEF;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ip-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #534AB7;\n  border-radius: 4px;\n}\n.ip-progress-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  min-width: 28px;\n}\n.ip-statut[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.ip-statut-encours[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.ip-statut-termine[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-statut-abandonne[_ngcontent-%COMP%] {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-statut-default[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-top: 1px solid #E9ECEF;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.pg-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n}\n.pg-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pg-btn[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 12px;\n  transition: all 0.12s;\n  padding: 0 8px;\n}\n.pg-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #534AB7;\n  color: #534AB7;\n  background: #EEF2FF;\n}\n.pg-btn.active[_ngcontent-%COMP%] {\n  background: #534AB7;\n  border-color: #534AB7;\n  color: #fff;\n}\n.pg-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=students-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentsListComponent, [{
    type: Component,
    args: [{ selector: "app-students-list", imports: [CommonModule, FormsModule, RouterLink], template: `<!-- Loading -->\r
<div *ngIf="loading" class="ip-loader">\r
  <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Chargement...</span></div>\r
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
  <!-- Page header -->\r
  <div class="ip-page-head">\r
    <div>\r
      <h5 class="ip-page-head__title">Mes apprenants <span class="ip-count">{{ totalData }}</span></h5>\r
      <p class="ip-page-head__sub">Apprenants inscrits \xE0 vos formations</p>\r
    </div>\r
    <button type="button" class="ip-btn ip-btn--outline" (click)="loadData()">\r
      <i class="isax isax-refresh-2"></i> Actualiser\r
    </button>\r
  </div>\r
\r
  <!-- Toolbar -->\r
  <div class="ip-toolbar">\r
    <input type="text" class="ip-search" placeholder="Rechercher nom, email, formation\u2026"\r
           [(ngModel)]="searchValue" (input)="applyFilters()">\r
    <select class="ip-select" [(ngModel)]="selectedFormationId" (change)="applyFilters()">\r
      <option value="">Toutes les formations</option>\r
      <option *ngFor="let f of formations" [value]="f.id">{{ f.titre }}</option>\r
    </select>\r
  </div>\r
\r
  <!-- Table -->\r
  <div class="ip-card">\r
    <div class="table-responsive">\r
      <table class="table ip-table">\r
        <thead>\r
          <tr>\r
            <th>Apprenant</th>\r
            <th>Formation</th>\r
            <th>Progression</th>\r
            <th>Statut</th>\r
            <th>Inscription</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let a of tableData">\r
            <td>\r
              <div class="ip-student-cell">\r
                <div class="ip-avatar" *ngIf="!a.avatar">{{ getInitials(a) }}</div>\r
                <img *ngIf="a.avatar" [src]="a.avatar" class="ip-avatar-img" [alt]="getFullName(a)"\r
                     onerror="this.style.display='none'">\r
                <div>\r
                  <div class="ip-student-name">{{ getFullName(a) }}</div>\r
                  <div class="ip-student-email">{{ a.email }}</div>\r
                </div>\r
              </div>\r
            </td>\r
            <td>\r
              <span class="ip-formation-tag">{{ a.formation_titre }}</span>\r
            </td>\r
            <td>\r
              <div class="ip-progress-wrap">\r
                <div class="ip-progress-bar">\r
                  <div class="ip-progress-fill" [style.width.%]="a.progression"></div>\r
                </div>\r
                <span class="ip-progress-pct">{{ a.progression }}%</span>\r
              </div>\r
            </td>\r
            <td>\r
              <span class="ip-statut" [ngClass]="getStatutClass(a.statut_formation)">\r
                {{ getStatutLabel(a.statut_formation) }}\r
              </span>\r
            </td>\r
            <td>\r
              <span class="text-muted">{{ a.date_inscription ? (a.date_inscription | date:'dd/MM/yyyy') : '\u2014' }}</span>\r
            </td>\r
          </tr>\r
          <tr *ngIf="tableData.length === 0">\r
            <td colspan="5" class="ip-empty">\r
              <i class="isax isax-profile-2user"></i>\r
              <span>Aucun apprenant trouv\xE9</span>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div class="ip-pagination" *ngIf="totalData > pageSize">\r
      <span class="pg-info">{{ totalData }} apprenant{{ totalData > 1 ? 's' : '' }}</span>\r
      <div class="pg-controls">\r
        <button type="button" class="pg-btn" [disabled]="currentPage === 1" (click)="onPageChange(currentPage - 1)">\r
          <i class="isax isax-arrow-left-2"></i>\r
        </button>\r
        <button type="button" class="pg-btn"\r
                *ngFor="let p of getPageNumbers()"\r
                [class.active]="p === currentPage"\r
                (click)="onPageChange(p)">{{ p }}</button>\r
        <button type="button" class="pg-btn"\r
                [disabled]="currentPage * pageSize >= totalData"\r
                (click)="onPageChange(currentPage + 1)">\r
          <i class="isax isax-arrow-right-2"></i>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
</ng-container>\r
`, styles: ["/* src/app/features/instructor/students-list/students-list.component.scss */\n.ip-loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.ip-page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.ip-page-head__title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1A1A2E;\n  margin: 0 0 4px;\n}\n.ip-page-head__sub {\n  font-size: 13px;\n  color: #6C757D;\n  margin: 0;\n}\n.ip-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #EEF2FF;\n  color: #534AB7;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 20px;\n  margin-left: 6px;\n}\n.ip-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.15s;\n}\n.ip-btn i {\n  font-size: 16px;\n}\n.ip-btn--outline {\n  background: #fff;\n  color: #534AB7;\n  border: 1px solid #534AB7;\n}\n.ip-btn--outline:hover {\n  background: #EEF2FF;\n}\n.ip-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.ip-search {\n  height: 36px;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 0 12px;\n  font-size: 13px;\n  outline: none;\n  min-width: 240px;\n  transition: border-color 0.15s;\n}\n.ip-search:focus {\n  border-color: #534AB7;\n}\n.ip-select {\n  height: 36px;\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  padding: 0 10px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  cursor: pointer;\n  max-width: 240px;\n}\n.ip-select:focus {\n  border-color: #534AB7;\n}\n.ip-card {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.ip-table {\n  margin: 0;\n}\n.ip-table thead th {\n  background: #F8F9FA;\n  border-bottom: 1px solid #E9ECEF;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6C757D;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 10px 14px;\n  white-space: nowrap;\n}\n.ip-table tbody td {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgb(238.9052631579, 241.1, 243.2947368421);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.ip-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.ip-table tbody tr:hover td {\n  background: #FAFBFF;\n}\n.ip-student-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ip-avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: #534AB7;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 500;\n}\n.ip-avatar-img {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.ip-student-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1A1A2E;\n}\n.ip-student-email {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 1px;\n}\n.ip-formation-tag {\n  display: inline-block;\n  background: #EEF2FF;\n  color: #534AB7;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 6px;\n  max-width: 200px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ip-progress-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ip-progress-bar {\n  width: 80px;\n  height: 5px;\n  background: #E9ECEF;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ip-progress-fill {\n  height: 100%;\n  background: #534AB7;\n  border-radius: 4px;\n}\n.ip-progress-pct {\n  font-size: 11px;\n  color: #6C757D;\n  min-width: 28px;\n}\n.ip-statut {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.ip-statut-encours {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.ip-statut-termine {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ip-statut-abandonne {\n  background: #FFF5F5;\n  color: #DC3545;\n}\n.ip-statut-default {\n  background: #F8F9FA;\n  color: #6C757D;\n}\n.ip-empty {\n  text-align: center;\n  padding: 48px 0;\n  color: #6C757D;\n  font-size: 13px;\n}\n.ip-empty i {\n  font-size: 32px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.4;\n}\n.ip-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-top: 1px solid #E9ECEF;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.pg-info {\n  font-size: 12px;\n  color: #6C757D;\n}\n.pg-controls {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pg-btn {\n  min-width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 12px;\n  transition: all 0.12s;\n  padding: 0 8px;\n}\n.pg-btn:hover:not(:disabled) {\n  border-color: #534AB7;\n  color: #534AB7;\n  background: #EEF2FF;\n}\n.pg-btn.active {\n  background: #534AB7;\n  border-color: #534AB7;\n  color: #fff;\n}\n.pg-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=students-list.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: FormationService }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentsListComponent, { className: "StudentsListComponent", filePath: "app/features/instructor/students-list/students-list.component.ts", lineNumber: 18 });
})();
export {
  StudentsListComponent
};
//# sourceMappingURL=chunk-Q7JF6IJO.js.map
