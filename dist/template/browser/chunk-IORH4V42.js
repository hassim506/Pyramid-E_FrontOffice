import {
  SessionFormationService
} from "./chunk-F4LTBMOU.js";
import {
  CustomPaginationComponent
} from "./chunk-2EUN5DIU.js";
import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-LWTJDC5B.js";
import "./chunk-JN46OEVN.js";
import "./chunk-GUU2EPD7.js";
import "./chunk-TXJEXWQM.js";
import "./chunk-FKX6UC3I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-YMJPU2MG.js";
import "./chunk-J5AS2QYG.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  TitleCasePipe
} from "./chunk-GWJREDC5.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
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
} from "./chunk-2JCHGHJA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/instructor/instructor-session/instructor-session.component.ts
function InstructorSessionComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 35);
    \u0275\u0275listener("click", function InstructorSessionComponent_div_41_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearError());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function InstructorSessionComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "span", 38);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 39);
    \u0275\u0275text(5, "Chargement de vos sessions...");
    \u0275\u0275elementEnd()();
  }
}
function InstructorSessionComponent_div_45_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 48);
    \u0275\u0275element(2, "i", 49);
    \u0275\u0275elementStart(3, "span", 50);
    \u0275\u0275text(4, "Aucune session trouv\xE9e");
    \u0275\u0275elementEnd()()();
  }
}
function InstructorSessionComponent_div_45_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 51)(3, "div", 52)(4, "div", 53);
    \u0275\u0275element(5, "i", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "h6", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small", 56);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small", 50);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td")(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "br");
    \u0275\u0275elementStart(17, "small", 50);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td")(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td")(27, "div", 57)(28, "span", 58);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 59);
    \u0275\u0275element(31, "div", 60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "td");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td")(35, "button", 61);
    \u0275\u0275listener("click", function InstructorSessionComponent_div_45_tr_20_Template_button_click_35_listener() {
      const session_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetails(session_r5));
    });
    \u0275\u0275element(36, "i", 62);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const session_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(session_r5.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(session_r5.code_session);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(session_r5.formation == null ? null : session_r5.formation.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(session_r5.date_debut));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2192 ", ctx_r1.formatDate(session_r5.date_fin));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getTypeClass(session_r5.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 16, session_r5.type));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getStatutClass(session_r5.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatutDisplay(session_r5.statut), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", session_r5.nombre_inscrits || 0, "/", session_r5.capacite_max, " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", (session_r5.nombre_inscrits || 0) / session_r5.capacite_max * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(session_r5.lieu);
  }
}
function InstructorSessionComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "table", 41);
    \u0275\u0275listener("matSortChange", function InstructorSessionComponent_div_45_Template_table_matSortChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortData($event));
    });
    \u0275\u0275elementStart(2, "thead", 42)(3, "tr")(4, "th", 43);
    \u0275\u0275text(5, "Session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 44);
    \u0275\u0275text(7, "Date d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 45);
    \u0275\u0275text(11, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Lieu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, InstructorSessionComponent_div_45_tr_19_Template, 5, 0, "tr", 46)(20, InstructorSessionComponent_div_45_tr_20_Template, 37, 18, "tr", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275property("ngIf", ctx_r1.tableData.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.tableData)("ngForTrackBy", ctx_r1.trackBySessionId);
  }
}
function InstructorSessionComponent_app_custom_pagination_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-custom-pagination", 63);
    \u0275\u0275listener("pageChange", function InstructorSessionComponent_app_custom_pagination_46_Template_app_custom_pagination_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("totalItems", ctx_r1.totalData)("itemsPerPage", ctx_r1.pageSize)("currentPage", ctx_r1.currentPage);
  }
}
function InstructorSessionComponent_div_54_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "h6");
    \u0275\u0275text(2, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedSession.description);
  }
}
function InstructorSessionComponent_div_54_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "h6");
    \u0275\u0275text(2, "Instructions d'acc\xE8s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedSession.instructions_acces);
  }
}
function InstructorSessionComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 8)(2, "div", 65)(3, "h6");
    \u0275\u0275text(4, "Informations g\xE9n\xE9rales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p")(6, "strong");
    \u0275\u0275text(7, "Titre :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p")(10, "strong");
    \u0275\u0275text(11, "Code :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p")(14, "strong");
    \u0275\u0275text(15, "Formation :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p")(18, "strong");
    \u0275\u0275text(19, "Statut :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 66);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 65)(23, "h6");
    \u0275\u0275text(24, "Planning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p")(26, "strong");
    \u0275\u0275text(27, "Date d\xE9but :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p")(30, "strong");
    \u0275\u0275text(31, "Date fin :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p")(34, "strong");
    \u0275\u0275text(35, "Type :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p")(39, "strong");
    \u0275\u0275text(40, "Lieu :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p")(43, "strong");
    \u0275\u0275text(44, "Participants :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(46, InstructorSessionComponent_div_54_div_46_Template, 5, 1, "div", 67)(47, InstructorSessionComponent_div_54_div_47_Template, 5, 1, "div", 67);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSession.titre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSession.code_session);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSession.formation == null ? null : ctx_r1.selectedSession.formation.titre);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.getStatutClass(ctx_r1.selectedSession.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatutDisplay(ctx_r1.selectedSession.statut), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(ctx_r1.selectedSession.date_debut));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(ctx_r1.selectedSession.date_fin));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 14, ctx_r1.selectedSession.type));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSession.lieu);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.selectedSession.nombre_inscrits || 0, " / ", ctx_r1.selectedSession.capacite_max, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSession.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSession.instructions_acces);
  }
}
var InstructorSessionComponent = class _InstructorSessionComponent {
  sessionService;
  // Pagination
  pageSize = 10;
  tableData = [];
  tableDataCopy = [];
  actualData = [];
  currentPage = 1;
  skip = 0;
  totalData = 0;
  // Filtres
  searchDataValue = "";
  selectedStatut = "";
  selectedType = "";
  // État
  loading = false;
  error = "";
  selectedSession = null;
  formateurId = null;
  constructor(sessionService) {
    this.sessionService = sessionService;
  }
  ngOnInit() {
    try {
      const userDataString = localStorage.getItem("pyramide_user");
      if (userDataString) {
        const currentUser = JSON.parse(userDataString);
        this.formateurId = currentUser.id;
      }
    } catch (e) {
      console.error("Erreur lecture utilisateur:", e);
    }
    this.loadSessions();
  }
  loadSessions() {
    if (!this.formateurId) {
      this.error = "Impossible d'identifier le formateur connect\xE9.";
      return;
    }
    this.loading = true;
    this.error = "";
    this.sessionService.getSessionsByFormateur(this.formateurId).subscribe({
      next: (response) => {
        this.tableDataCopy = response.sessions || [];
        this.actualData = [...this.tableDataCopy];
        this.totalData = this.actualData.length;
        this.currentPage = 1;
        this.skip = 0;
        this.getTableData();
        this.loading = false;
      },
      error: (err) => {
        console.error("Erreur sessions:", err);
        this.error = "Erreur lors du chargement des sessions.";
        this.loading = false;
      }
    });
  }
  searchData(value) {
    this.searchDataValue = value;
    this.applyFilters();
  }
  filterByStatut() {
    this.applyFilters();
  }
  filterByType() {
    this.applyFilters();
  }
  applyFilters() {
    let filtered = [...this.tableDataCopy];
    if (this.searchDataValue.trim()) {
      const q = this.searchDataValue.toLowerCase();
      filtered = filtered.filter((s) => s.titre?.toLowerCase().includes(q) || s.code_session?.toLowerCase().includes(q) || s.formation?.titre?.toLowerCase().includes(q));
    }
    if (this.selectedStatut) {
      filtered = filtered.filter((s) => s.statut === this.selectedStatut);
    }
    if (this.selectedType) {
      filtered = filtered.filter((s) => s.type === this.selectedType);
    }
    this.actualData = filtered;
    this.totalData = filtered.length;
    this.currentPage = 1;
    this.skip = 0;
    this.getTableData();
  }
  viewDetails(session) {
    this.selectedSession = session;
    const modal = new window.bootstrap.Modal(document.getElementById("sessionDetailsModal"));
    modal.show();
  }
  onPageChange(page) {
    this.currentPage = page;
    this.skip = (page - 1) * this.pageSize;
    this.getTableData();
  }
  getTableData() {
    this.tableData = this.actualData.slice(this.skip, this.skip + this.pageSize);
  }
  sortData(sort) {
    const data = this.actualData.slice();
    if (!sort.active || sort.direction === "") {
      this.actualData = data;
      this.getTableData();
      return;
    }
    this.actualData = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "titre":
          return this.compare(a.titre, b.titre, isAsc);
        case "date_debut":
          return this.compare(new Date(a.date_debut), new Date(b.date_debut), isAsc);
        case "statut":
          return this.compare(a.statut, b.statut, isAsc);
        default:
          return 0;
      }
    });
    this.getTableData();
  }
  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  getStatutDisplay(statut) {
    const map = {
      planifiee: "Planifi\xE9e",
      en_cours: "En cours",
      terminee: "Termin\xE9e",
      annulee: "Annul\xE9e"
    };
    return map[statut] || statut;
  }
  getStatutClass(statut) {
    switch (statut) {
      case "planifiee":
        return "badge bg-info";
      case "en_cours":
        return "badge bg-success";
      case "terminee":
        return "badge bg-secondary";
      case "annulee":
        return "badge bg-danger";
      default:
        return "badge bg-light";
    }
  }
  getTypeClass(type) {
    switch (type) {
      case "presentiel":
        return "badge bg-primary";
      case "distanciel":
        return "badge bg-warning";
      case "hybride":
        return "badge bg-success";
      default:
        return "badge bg-light";
    }
  }
  trackBySessionId(index, session) {
    return session.id;
  }
  clearError() {
    this.error = "";
  }
  static \u0275fac = function InstructorSessionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorSessionComponent)(\u0275\u0275directiveInject(SessionFormationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorSessionComponent, selectors: [["app-instructor-session"]], decls: 58, vars: 8, consts: [[1, "content"], [1, "page-header"], [1, "page-title"], [1, "page-btn"], ["type", "button", 1, "btn", "btn-filters", 3, "click"], [1, "fa", "fa-refresh", "me-2"], [1, "card"], [1, "card-body"], [1, "row"], [1, "col-lg-4"], [1, "form-group"], ["type", "text", "placeholder", "Rechercher par titre, code ou formation...", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "planifiee"], ["value", "en_cours"], ["value", "terminee"], ["value", "annulee"], ["value", "presentiel"], ["value", "distanciel"], ["value", "hybride"], ["class", "alert alert-danger alert-dismissible", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [3, "totalItems", "itemsPerPage", "currentPage", "pageChange", 4, "ngIf"], ["id", "sessionDetailsModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "alert", "alert-danger", "alert-dismissible"], ["type", "button", 1, "btn-close", 3, "click"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "mt-2"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-hover", 3, "matSortChange"], [1, "thead-light"], ["mat-sort-header", "titre"], ["mat-sort-header", "date_debut"], ["mat-sort-header", "statut"], [4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["colspan", "7", 1, "text-center", "py-4"], [1, "fa", "fa-inbox", "fa-2x", "text-muted", "mb-2", "d-block"], [1, "text-muted"], [1, "d-flex", "align-items-center"], [1, "flex-shrink-0", "me-3"], [1, "avatar", "avatar-md", "bg-primary-light", "rounded", "d-flex", "align-items-center", "justify-content-center"], [1, "fa", "fa-calendar", "text-primary"], [1, "mb-1"], [1, "text-muted", "d-block"], [1, "d-flex", "align-items-center", "gap-2"], [1, "badge", "bg-info"], [1, "progress", "flex-grow-1", 2, "height", "6px", "min-width", "60px"], [1, "progress-bar"], ["type", "button", "title", "Voir d\xE9tails", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "fa", "fa-eye"], [3, "pageChange", "totalItems", "itemsPerPage", "currentPage"], [1, "modal-body"], [1, "col-md-6"], [1, "ms-2"], ["class", "col-12", 4, "ngIf"], [1, "col-12"]], template: function InstructorSessionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Mes Sessions de Formation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Liste de vos sessions assign\xE9es");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 3)(8, "button", 4);
      \u0275\u0275listener("click", function InstructorSessionComponent_Template_button_click_8_listener() {
        return ctx.loadSessions();
      });
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275text(10, "Actualiser ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorSessionComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("input", function InstructorSessionComponent_Template_input_input_16_listener($event) {
        return ctx.searchData($event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "select", 12);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorSessionComponent_Template_select_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedStatut, $event) || (ctx.selectedStatut = $event);
        return $event;
      });
      \u0275\u0275listener("change", function InstructorSessionComponent_Template_select_change_19_listener() {
        return ctx.filterByStatut();
      });
      \u0275\u0275elementStart(20, "option", 13);
      \u0275\u0275text(21, "Tous les statuts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 14);
      \u0275\u0275text(23, "Planifi\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "option", 15);
      \u0275\u0275text(25, "En cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "option", 16);
      \u0275\u0275text(27, "Termin\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "option", 17);
      \u0275\u0275text(29, "Annul\xE9e");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(30, "div", 9)(31, "div", 10)(32, "select", 12);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorSessionComponent_Template_select_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedType, $event) || (ctx.selectedType = $event);
        return $event;
      });
      \u0275\u0275listener("change", function InstructorSessionComponent_Template_select_change_32_listener() {
        return ctx.filterByType();
      });
      \u0275\u0275elementStart(33, "option", 13);
      \u0275\u0275text(34, "Tous les types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "option", 18);
      \u0275\u0275text(36, "Pr\xE9sentiel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "option", 19);
      \u0275\u0275text(38, "Distanciel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "option", 20);
      \u0275\u0275text(40, "Hybride");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275template(41, InstructorSessionComponent_div_41_Template, 3, 1, "div", 21);
      \u0275\u0275elementStart(42, "div", 6)(43, "div", 7);
      \u0275\u0275template(44, InstructorSessionComponent_div_44_Template, 6, 0, "div", 22)(45, InstructorSessionComponent_div_45_Template, 21, 3, "div", 23)(46, InstructorSessionComponent_app_custom_pagination_46_Template, 1, 3, "app-custom-pagination", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 25)(48, "div", 26)(49, "div", 27)(50, "div", 28)(51, "h5", 29);
      \u0275\u0275text(52, "D\xE9tails de la session");
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "button", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275template(54, InstructorSessionComponent_div_54_Template, 48, 16, "div", 31);
      \u0275\u0275elementStart(55, "div", 32)(56, "button", 33);
      \u0275\u0275text(57, "Fermer");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatut);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedType);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.totalData > ctx.pageSize);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.selectedSession);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, MatSortModule, MatSort, MatSortHeader, CustomPaginationComponent, TitleCasePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorSessionComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-session", standalone: true, imports: [CommonModule, FormsModule, MatSortModule, CustomPaginationComponent], template: `<div class="content">\r
  <div class="page-header">\r
    <div class="page-title">\r
      <h4>Mes Sessions de Formation</h4>\r
      <h6>Liste de vos sessions assign\xE9es</h6>\r
    </div>\r
    <div class="page-btn">\r
      <button type="button" class="btn btn-filters" (click)="loadSessions()">\r
        <i class="fa fa-refresh me-2"></i>Actualiser\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Filtres -->\r
  <div class="card">\r
    <div class="card-body">\r
      <div class="row">\r
        <div class="col-lg-4">\r
          <div class="form-group">\r
            <input\r
              type="text"\r
              class="form-control"\r
              placeholder="Rechercher par titre, code ou formation..."\r
              [(ngModel)]="searchDataValue"\r
              (input)="searchData($any($event.target).value)">\r
          </div>\r
        </div>\r
        <div class="col-lg-4">\r
          <div class="form-group">\r
            <select class="form-control" [(ngModel)]="selectedStatut" (change)="filterByStatut()">\r
              <option value="">Tous les statuts</option>\r
              <option value="planifiee">Planifi\xE9e</option>\r
              <option value="en_cours">En cours</option>\r
              <option value="terminee">Termin\xE9e</option>\r
              <option value="annulee">Annul\xE9e</option>\r
            </select>\r
          </div>\r
        </div>\r
        <div class="col-lg-4">\r
          <div class="form-group">\r
            <select class="form-control" [(ngModel)]="selectedType" (change)="filterByType()">\r
              <option value="">Tous les types</option>\r
              <option value="presentiel">Pr\xE9sentiel</option>\r
              <option value="distanciel">Distanciel</option>\r
              <option value="hybride">Hybride</option>\r
            </select>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Erreur -->\r
  <div *ngIf="error" class="alert alert-danger alert-dismissible">\r
    {{ error }}\r
    <button type="button" class="btn-close" (click)="clearError()"></button>\r
  </div>\r
\r
  <!-- Tableau -->\r
  <div class="card">\r
    <div class="card-body">\r
      <div *ngIf="loading" class="text-center py-5">\r
        <div class="spinner-border" role="status">\r
          <span class="visually-hidden">Chargement...</span>\r
        </div>\r
        <p class="mt-2">Chargement de vos sessions...</p>\r
      </div>\r
\r
      <div *ngIf="!loading" class="table-responsive">\r
        <table class="table table-hover" matSort (matSortChange)="sortData($event)">\r
          <thead class="thead-light">\r
            <tr>\r
              <th mat-sort-header="titre">Session</th>\r
              <th mat-sort-header="date_debut">Date d\xE9but</th>\r
              <th>Type</th>\r
              <th mat-sort-header="statut">Statut</th>\r
              <th>Participants</th>\r
              <th>Lieu</th>\r
              <th>Actions</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngIf="tableData.length === 0">\r
              <td colspan="7" class="text-center py-4">\r
                <i class="fa fa-inbox fa-2x text-muted mb-2 d-block"></i>\r
                <span class="text-muted">Aucune session trouv\xE9e</span>\r
              </td>\r
            </tr>\r
            <tr *ngFor="let session of tableData; trackBy: trackBySessionId">\r
              <td>\r
                <div class="d-flex align-items-center">\r
                  <div class="flex-shrink-0 me-3">\r
                    <div class="avatar avatar-md bg-primary-light rounded d-flex align-items-center justify-content-center">\r
                      <i class="fa fa-calendar text-primary"></i>\r
                    </div>\r
                  </div>\r
                  <div>\r
                    <h6 class="mb-1">{{ session.titre }}</h6>\r
                    <small class="text-muted d-block">{{ session.code_session }}</small>\r
                    <small class="text-muted">{{ session.formation?.titre }}</small>\r
                  </div>\r
                </div>\r
              </td>\r
              <td>\r
                <strong>{{ formatDate(session.date_debut) }}</strong><br>\r
                <small class="text-muted">\u2192 {{ formatDate(session.date_fin) }}</small>\r
              </td>\r
              <td>\r
                <span [class]="getTypeClass(session.type)">{{ session.type | titlecase }}</span>\r
              </td>\r
              <td>\r
                <span [class]="getStatutClass(session.statut)">\r
                  {{ getStatutDisplay(session.statut) }}\r
                </span>\r
              </td>\r
              <td>\r
                <div class="d-flex align-items-center gap-2">\r
                  <span class="badge bg-info">\r
                    {{ session.nombre_inscrits || 0 }}/{{ session.capacite_max }}\r
                  </span>\r
                  <div class="progress flex-grow-1" style="height: 6px; min-width: 60px;">\r
                    <div\r
                      class="progress-bar"\r
                      [style.width.%]="(session.nombre_inscrits || 0) / session.capacite_max * 100">\r
                    </div>\r
                  </div>\r
                </div>\r
              </td>\r
              <td>{{ session.lieu }}</td>\r
              <td>\r
                <button\r
                  type="button"\r
                  class="btn btn-sm btn-outline-primary"\r
                  title="Voir d\xE9tails"\r
                  (click)="viewDetails(session)">\r
                  <i class="fa fa-eye"></i>\r
                </button>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <!-- Pagination -->\r
      <app-custom-pagination\r
        *ngIf="!loading && totalData > pageSize"\r
        [totalItems]="totalData"\r
        [itemsPerPage]="pageSize"\r
        [currentPage]="currentPage"\r
        (pageChange)="onPageChange($event)">\r
      </app-custom-pagination>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal d\xE9tails -->\r
<div class="modal fade" id="sessionDetailsModal" tabindex="-1" aria-hidden="true">\r
  <div class="modal-dialog modal-lg">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">D\xE9tails de la session</h5>\r
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>\r
      </div>\r
      <div class="modal-body" *ngIf="selectedSession">\r
        <div class="row">\r
          <div class="col-md-6">\r
            <h6>Informations g\xE9n\xE9rales</h6>\r
            <p><strong>Titre :</strong> {{ selectedSession.titre }}</p>\r
            <p><strong>Code :</strong> {{ selectedSession.code_session }}</p>\r
            <p><strong>Formation :</strong> {{ selectedSession.formation?.titre }}</p>\r
            <p>\r
              <strong>Statut :</strong>\r
              <span [class]="getStatutClass(selectedSession.statut)" class="ms-2">\r
                {{ getStatutDisplay(selectedSession.statut) }}\r
              </span>\r
            </p>\r
          </div>\r
          <div class="col-md-6">\r
            <h6>Planning</h6>\r
            <p><strong>Date d\xE9but :</strong> {{ formatDate(selectedSession.date_debut) }}</p>\r
            <p><strong>Date fin :</strong> {{ formatDate(selectedSession.date_fin) }}</p>\r
            <p><strong>Type :</strong> {{ selectedSession.type | titlecase }}</p>\r
            <p><strong>Lieu :</strong> {{ selectedSession.lieu }}</p>\r
            <p>\r
              <strong>Participants :</strong>\r
              {{ selectedSession.nombre_inscrits || 0 }} / {{ selectedSession.capacite_max }}\r
            </p>\r
          </div>\r
          <div class="col-12" *ngIf="selectedSession.description">\r
            <h6>Description</h6>\r
            <p>{{ selectedSession.description }}</p>\r
          </div>\r
          <div class="col-12" *ngIf="selectedSession.instructions_acces">\r
            <h6>Instructions d'acc\xE8s</h6>\r
            <p>{{ selectedSession.instructions_acces }}</p>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>\r
      </div>\r
    </div>\r
  </div>\r
</div>` }]
  }], () => [{ type: SessionFormationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorSessionComponent, { className: "InstructorSessionComponent", filePath: "src/app/features/instructor/instructor-session/instructor-session.component.ts", lineNumber: 15 });
})();
export {
  InstructorSessionComponent
};
//# sourceMappingURL=chunk-IORH4V42.js.map
