import {
  CatalogueService
} from "./chunk-XZBJPFDI.js";
import {
  DemandeFormationService
} from "./chunk-DOEWAYTW.js";
import {
  MatSortModule
} from "./chunk-VL5HRZ2I.js";
import {
  MatTableDataSource
} from "./chunk-ZJFUPILQ.js";
import {
  CustomPaginationComponent
} from "./chunk-QBIBOWET.js";
import {
  PaginationService
} from "./chunk-M25A5D3F.js";
import "./chunk-6YZDBSHM.js";
import "./chunk-2KO2PJ3F.js";
import "./chunk-5FDCLFRJ.js";
import "./chunk-4TVHDBGR.js";
import "./chunk-MQ5W77M6.js";
import {
  AuthService
} from "./chunk-GD4TWLVQ.js";
import "./chunk-K7E3GT3E.js";
import {
  DataService
} from "./chunk-IRUS5LM6.js";
import {
  routes
} from "./chunk-OVFIVR43.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-IKOSZIEY.js";
import {
  Router,
  RouterLink
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule,
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
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTSSTHJF.js";
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-demande-catalogue/adminrh-demande-catalogue.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => [1, 2, 3, 4, 5];
function AdminrhDemandeCatalogueComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 38);
    \u0275\u0275listener("click", function AdminrhDemandeCatalogueComponent_div_73_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearMessages());
    });
    \u0275\u0275element(4, "i", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMessage, " ");
  }
}
function AdminrhDemandeCatalogueComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 38);
    \u0275\u0275listener("click", function AdminrhDemandeCatalogueComponent_div_74_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearMessages());
    });
    \u0275\u0275element(4, "i", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function AdminrhDemandeCatalogueComponent_div_75_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 43);
  }
}
function AdminrhDemandeCatalogueComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, AdminrhDemandeCatalogueComponent_div_75_div_1_Template, 1, 0, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function AdminrhDemandeCatalogueComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucune demande de catalogue");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhDemandeCatalogueComponent_div_77_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(d_r4.date_souhaitee_debut), " ");
  }
}
function AdminrhDemandeCatalogueComponent_div_77_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r4.catalogue == null ? null : d_r4.catalogue.nombre_formations, " formation(s) ");
  }
}
function AdminrhDemandeCatalogueComponent_div_77_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", d_r4.motif_demande);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' "', d_r4.motif_demande, '" ');
  }
}
function AdminrhDemandeCatalogueComponent_div_77_div_1_button_27_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 73);
  }
}
function AdminrhDemandeCatalogueComponent_div_77_div_1_button_27_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 17);
  }
}
function AdminrhDemandeCatalogueComponent_div_77_div_1_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function AdminrhDemandeCatalogueComponent_div_77_div_1_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const d_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.validerDemande(d_r4));
    });
    \u0275\u0275template(1, AdminrhDemandeCatalogueComponent_div_77_div_1_button_27_span_1_Template, 1, 0, "span", 71)(2, AdminrhDemandeCatalogueComponent_div_77_div_1_button_27_i_2_Template, 1, 0, "i", 72);
    \u0275\u0275text(3, " Approuver ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.validatingIds.has(d_r4.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.validatingIds.has(d_r4.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.validatingIds.has(d_r4.id));
  }
}
function AdminrhDemandeCatalogueComponent_div_77_div_1_button_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 73);
  }
}
function AdminrhDemandeCatalogueComponent_div_77_div_1_button_28_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 19);
  }
}
function AdminrhDemandeCatalogueComponent_div_77_div_1_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 74);
    \u0275\u0275listener("click", function AdminrhDemandeCatalogueComponent_div_77_div_1_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const d_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refuserDemande(d_r4));
    });
    \u0275\u0275template(1, AdminrhDemandeCatalogueComponent_div_77_div_1_button_28_span_1_Template, 1, 0, "span", 71)(2, AdminrhDemandeCatalogueComponent_div_77_div_1_button_28_i_2_Template, 1, 0, "i", 75);
    \u0275\u0275text(3, " Refuser ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.refusingIds.has(d_r4.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.refusingIds.has(d_r4.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.refusingIds.has(d_r4.id));
  }
}
function AdminrhDemandeCatalogueComponent_div_77_div_1_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function AdminrhDemandeCatalogueComponent_div_77_div_1_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const d_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.annulerDemande(d_r4));
    });
    \u0275\u0275element(1, "i", 77);
    \u0275\u0275elementEnd();
  }
}
function AdminrhDemandeCatalogueComponent_div_77_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "div", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 51)(6, "div", 52);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 53);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 54);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 55);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 56);
    \u0275\u0275template(15, AdminrhDemandeCatalogueComponent_div_77_div_1_span_15_Template, 3, 1, "span", 57)(16, AdminrhDemandeCatalogueComponent_div_77_div_1_span_16_Template, 3, 1, "span", 57);
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, AdminrhDemandeCatalogueComponent_div_77_div_1_div_19_Template, 2, 2, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 59)(21, "div", 60)(22, "span", 61);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 62);
    \u0275\u0275text(25, "Catalogue");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 63);
    \u0275\u0275template(27, AdminrhDemandeCatalogueComponent_div_77_div_1_button_27_Template, 4, 3, "button", 64)(28, AdminrhDemandeCatalogueComponent_div_77_div_1_button_28_Template, 4, 3, "button", 65)(29, AdminrhDemandeCatalogueComponent_div_77_div_1_button_29_Template, 2, 0, "button", 66);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((d_r4.employe == null ? null : d_r4.employe.prenom == null ? null : d_r4.employe.prenom.charAt(0)) || "") + ((d_r4.employe == null ? null : d_r4.employe.nom == null ? null : d_r4.employe.nom.charAt(0)) || ""));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((d_r4.employe == null ? null : d_r4.employe.name) || "Employ\xE9 inconnu");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((d_r4.employe == null ? null : d_r4.employe.email) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(d_r4.created_at));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((d_r4.catalogue == null ? null : d_r4.catalogue.titre) || "Catalogue #" + d_r4.catalogue_id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", d_r4.date_souhaitee_debut);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r4.catalogue == null ? null : d_r4.catalogue.nombre_formations);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("pb pb-", d_r4.priorite));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r4.priorite_display);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r4.motif_demande);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("sb-pending", d_r4.statut === "en_attente")("sb-approved", d_r4.statut === "validee")("sb-rejected", d_r4.statut === "refusee")("sb-cancelled", d_r4.statut === "annulee");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r4.statut_display, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.canValidate(d_r4));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canRefuse(d_r4));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canCancel(d_r4));
  }
}
function AdminrhDemandeCatalogueComponent_div_77_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucun r\xE9sultat");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhDemandeCatalogueComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275template(1, AdminrhDemandeCatalogueComponent_div_77_div_1_Template, 30, 24, "div", 46)(2, AdminrhDemandeCatalogueComponent_div_77_div_2_Template, 4, 0, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.tableData)("ngForTrackBy", ctx_r1.trackByDemandeId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.tableData.length);
  }
}
function AdminrhDemandeCatalogueComponent_div_78_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275listener("click", function AdminrhDemandeCatalogueComponent_div_78_button_6_Template_button_click_0_listener() {
      const i_r10 = \u0275\u0275restoreView(_r9).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(i_r10 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r10 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.currentPage === i_r10 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r10 + 1);
  }
}
function AdminrhDemandeCatalogueComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 79)(4, "button", 80);
    \u0275\u0275listener("click", function AdminrhDemandeCatalogueComponent_div_78_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminrhDemandeCatalogueComponent_div_78_button_6_Template, 2, 3, "button", 82);
    \u0275\u0275elementStart(7, "button", 80);
    \u0275\u0275listener("click", function AdminrhDemandeCatalogueComponent_div_78_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 83);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("Affichage ", (ctx_r1.currentPage - 1) * ctx_r1.pageSize + 1, "\u2013", ctx_r1.currentPage * ctx_r1.pageSize > ctx_r1.totalData ? ctx_r1.totalData : ctx_r1.currentPage * ctx_r1.pageSize, " sur ", ctx_r1.totalData, " demandes");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pagesArray);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
var AdminrhDemandeCatalogueComponent = class _AdminrhDemandeCatalogueComponent {
  data;
  router;
  pagination;
  demandeFormationService;
  catalogueService;
  authService;
  routes = routes;
  // Variables de pagination
  pageSize = 10;
  tableData = [];
  tableDataCopy = [];
  actualData = [];
  allCatalogueDemandes = [];
  currentPage = 1;
  skip = 0;
  limit = this.pageSize;
  serialNumberArray = [];
  totalData = 0;
  pageSelection = [];
  dataSource;
  searchDataValue = "";
  // Variables de gestion d'état
  loading = false;
  error = "";
  successMessage = "";
  // Filtres
  selectedStatutFilter = "tous";
  selectedPrioriteFilter = "tous";
  // Données utilisateur connecté
  currentUser;
  // Statistiques
  stats = {};
  // Filtres de statut
  statutFilters = [
    { value: "tous", label: "Tous les statuts", count: 0, color: "secondary" },
    { value: "en_attente", label: "En attente", count: 0, color: "warning" },
    { value: "validee", label: "Valid\xE9es", count: 0, color: "success" },
    { value: "refusee", label: "Refus\xE9es", count: 0, color: "danger" },
    { value: "annulee", label: "Annul\xE9es", count: 0, color: "secondary" }
  ];
  // Actions en cours
  validatingIds = /* @__PURE__ */ new Set();
  refusingIds = /* @__PURE__ */ new Set();
  constructor(data, router, pagination, demandeFormationService, catalogueService, authService) {
    this.data = data;
    this.router = router;
    this.pagination = pagination;
    this.demandeFormationService = demandeFormationService;
    this.catalogueService = catalogueService;
    this.authService = authService;
    this.pagination.tablePageSize.subscribe((res) => {
      if (this.router.url === "/adminrh/adminrh-demande" || this.router.url.includes("adminrh-demande")) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }
  ngOnInit() {
    this.initializeUser();
    this.loadDemandes();
  }
  // === INITIALISATION ===
  initializeUser() {
    this.currentUser = this.authService.getUser();
    if (!this.currentUser) {
      this.error = "Utilisateur non connect\xE9. Veuillez vous reconnecter.";
      console.error("\u274C Aucun utilisateur connect\xE9");
      return;
    }
    console.log("\u{1F464} Utilisateur connect\xE9:", this.currentUser);
  }
  // === MÉTHODES DE CHARGEMENT DES DONNÉES ===
  // === MÉTHODES DE CHARGEMENT DES DONNÉES ===
  loadDemandes() {
    if (!this.currentUser) {
      this.error = "Utilisateur non connect\xE9.";
      return;
    }
    this.loading = true;
    this.error = "";
    this.successMessage = "";
    console.log("\u{1F504} Chargement des demandes de catalogue...");
    this.demandeFormationService.getDemandesFormation().subscribe({
      next: (response) => {
        console.log("\u{1F4E6} R\xE9ponse API demandes:", response);
        try {
          const catalogueDemandes = (response.demandes || []).filter((d) => d.type_demande === "catalogue");
          this.stats = {
            total: catalogueDemandes.length,
            en_attente: catalogueDemandes.filter((d) => d.statut === "en_attente").length,
            validees: catalogueDemandes.filter((d) => d.statut === "validee").length,
            refusees: catalogueDemandes.filter((d) => d.statut === "refusee").length,
            annulees: catalogueDemandes.filter((d) => d.statut === "annulee").length
          };
          this.updateStatutFilters();
          if (catalogueDemandes.length === 0) {
            this.allCatalogueDemandes = [];
            this.actualData = [];
            this.totalData = 0;
            this.getTableData({ skip: 0, limit: this.pageSize });
            this.loading = false;
            this.error = "Aucune demande de catalogue trouv\xE9e.";
            return;
          }
          const catalogueRequests = catalogueDemandes.map((demande) => {
            if (!demande.catalogue && demande.catalogue_id) {
              return this.catalogueService.getCatalogue(demande.catalogue_id).pipe(catchError(() => of(null)));
            }
            return of(null);
          });
          forkJoin(catalogueRequests).subscribe({
            next: (catalogueResponses) => {
              catalogueDemandes.forEach((demande, index) => {
                const res = catalogueResponses[index];
                if (res && res.data && !demande.catalogue) {
                  demande.catalogue = res.data;
                }
              });
              this.allCatalogueDemandes = catalogueDemandes;
              this.applyFilters();
              this.loading = false;
              console.log("\u2705 Demandes catalogue charg\xE9es:", this.allCatalogueDemandes.length);
            },
            error: (err) => {
              console.error("\u274C Erreur enrichissement catalogues:", err);
              this.allCatalogueDemandes = catalogueDemandes;
              this.applyFilters();
              this.loading = false;
            }
          });
        } catch (err) {
          console.error("\u274C Erreur lors du traitement des donn\xE9es:", err);
          this.handleLoadError(new Error("Erreur lors du traitement des donn\xE9es"));
        }
      },
      error: (error) => {
        console.error("\u274C Erreur lors du chargement des demandes:", error);
        this.handleLoadError(error);
      }
    });
  }
  updateStatutFilters() {
    const statsMap = {
      "tous": "total",
      "en_attente": "en_attente",
      "validee": "validees",
      "refusee": "refusees",
      "annulee": "annulees"
    };
    this.statutFilters.forEach((filter) => {
      const key = statsMap[filter.value] ?? filter.value;
      filter.count = this.stats[key] || 0;
    });
  }
  handleLoadError(error) {
    this.error = this.getErrorMessage(error);
    this.loading = false;
    this.actualData = [];
    this.getTableData({ skip: 0, limit: this.pageSize });
  }
  getTableData(pageOption) {
    this.tableData = [];
    this.tableDataCopy = [];
    this.serialNumberArray = [];
    this.actualData.forEach((demande, index) => {
      const serialNumber = index + 1;
      if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
        this.tableData.push(demande);
        this.tableDataCopy.push(demande);
        this.serialNumberArray.push(serialNumber);
      }
    });
    this.dataSource = new MatTableDataSource(this.actualData);
    this.pagination.calculatePageSize.next({
      totalData: this.totalData,
      pageSize: this.pageSize,
      tableData: this.tableData,
      tableDataCopy: this.tableDataCopy,
      serialNumberArray: this.serialNumberArray
    });
    console.log("\u{1F4CA} Donn\xE9es du tableau mises \xE0 jour:", {
      totalData: this.totalData,
      tableData: this.tableData.length,
      pageSize: this.pageSize
    });
  }
  // === MÉTHODES DE FILTRAGE ===
  applyFilters() {
    let filteredData = [...this.allCatalogueDemandes];
    if (this.selectedStatutFilter !== "tous") {
      filteredData = filteredData.filter((demande) => demande.statut === this.selectedStatutFilter);
    }
    if (this.selectedPrioriteFilter !== "tous") {
      filteredData = filteredData.filter((demande) => demande.priorite === this.selectedPrioriteFilter);
    }
    if (this.searchDataValue.trim()) {
      const searchValue = this.searchDataValue.toLowerCase().trim();
      filteredData = filteredData.filter((demande) => this.matchesSearch(demande, searchValue));
    }
    this.actualData = filteredData;
    this.totalData = this.actualData.length;
    this.getTableData({ skip: 0, limit: this.pageSize });
  }
  onStatutFilterChange(statut) {
    this.selectedStatutFilter = statut;
    this.applyFilters();
  }
  onPrioriteFilterChange(priorite) {
    this.selectedPrioriteFilter = priorite;
    this.applyFilters();
  }
  // === MÉTHODES DE RECHERCHE ET TRI ===
  searchData(value) {
    this.searchDataValue = value;
    this.applyFilters();
    console.log(`\u{1F50D} Recherche "${value}": ${this.actualData.length} r\xE9sultats`);
  }
  matchesSearch(demande, searchValue) {
    const normalizeString = (str) => {
      return String(str || "").toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };
    const fields = [
      demande.catalogue?.titre,
      demande.catalogue?.description,
      demande.employe?.name,
      demande.employe?.email,
      demande.motif_demande,
      demande.objectifs_personnels,
      demande.statut_display,
      demande.priorite_display
    ];
    const normalizedSearch = normalizeString(searchValue);
    return fields.some((field) => {
      const normalizedField = normalizeString(field);
      return normalizedField.includes(normalizedSearch);
    });
  }
  sortData(sort) {
    const data = [...this.tableData];
    if (!sort.active || sort.direction === "") {
      this.tableData = data;
      return;
    }
    this.tableData = data.sort((a, b) => {
      const result = this.compareValues(a, b, sort.active);
      return sort.direction === "asc" ? result : -result;
    });
  }
  compareValues(a, b, sortField) {
    let aValue = "";
    let bValue = "";
    switch (sortField) {
      case "catalogue":
        aValue = a.catalogue?.titre || "";
        bValue = b.catalogue?.titre || "";
        break;
      case "employe":
        aValue = a.employe?.name || "";
        bValue = b.employe?.name || "";
        break;
      case "statut":
        aValue = a.statut_display || "";
        bValue = b.statut_display || "";
        break;
      case "priorite":
        aValue = a.priorite_display || "";
        bValue = b.priorite_display || "";
        break;
      case "created_at":
        aValue = new Date(a.created_at || 0).getTime();
        bValue = new Date(b.created_at || 0).getTime();
        break;
      case "date_souhaitee_debut":
        aValue = new Date(a.date_souhaitee_debut || 0).getTime();
        bValue = new Date(b.date_souhaitee_debut || 0).getTime();
        break;
      default:
        aValue = String(a[sortField] || "");
        bValue = String(b[sortField] || "");
    }
    if (typeof aValue === "number" && typeof bValue === "number") {
      return aValue - bValue;
    }
    return String(aValue).localeCompare(String(bValue));
  }
  // === MÉTHODES D'ACTIONS ===
  refreshData() {
    console.log("\u{1F504} Actualisation des donn\xE9es...");
    this.searchDataValue = "";
    this.selectedStatutFilter = "tous";
    this.selectedPrioriteFilter = "tous";
    this.clearMessages();
    this.loadDemandes();
  }
  // Valider une demande
  validerDemande(demande, commentaire = "") {
    if (this.validatingIds.has(demande.id))
      return;
    const confirmMessage = `\xCAtes-vous s\xFBr de vouloir valider la demande de catalogue "${demande.catalogue?.titre}" pour ${demande.employe?.name} ?`;
    if (confirm(confirmMessage)) {
      this.validatingIds.add(demande.id);
      this.clearMessages();
      const data = commentaire ? { commentaire_rh: commentaire } : {};
      this.demandeFormationService.validerDemande(demande.id, data).subscribe({
        next: () => {
          this.successMessage = `Demande de catalogue valid\xE9e avec succ\xE8s.`;
          this.validatingIds.delete(demande.id);
          this.refreshData();
          console.log("\u2705 Demande valid\xE9e:", demande.id);
        },
        error: (error) => {
          console.error("\u274C Erreur lors de la validation:", error);
          this.error = "Erreur lors de la validation de la demande.";
          this.validatingIds.delete(demande.id);
        }
      });
    }
  }
  // Refuser une demande
  refuserDemande(demande) {
    if (this.refusingIds.has(demande.id))
      return;
    const motif = prompt(`Pourquoi refusez-vous la demande de formation "${demande.catalogue?.titre}" pour ${demande.employe?.name} ?

Veuillez saisir un motif :`);
    if (motif === null)
      return;
    if (!motif.trim()) {
      this.error = "Un motif de refus est obligatoire.";
      return;
    }
    this.refusingIds.add(demande.id);
    this.clearMessages();
    this.demandeFormationService.refuserDemande(demande.id, { commentaire_rh: motif }).subscribe({
      next: () => {
        this.successMessage = `Demande de catalogue refus\xE9e.`;
        this.refusingIds.delete(demande.id);
        this.refreshData();
        console.log("\u2705 Demande refus\xE9e:", demande.id);
      },
      error: (error) => {
        console.error("\u274C Erreur lors du refus:", error);
        this.error = "Erreur lors du refus de la demande.";
        this.refusingIds.delete(demande.id);
      }
    });
  }
  // Annuler une demande
  annulerDemande(demande) {
    const confirmMessage = `\xCAtes-vous s\xFBr de vouloir annuler la demande de formation "${demande.catalogue?.titre}" pour ${demande.employe?.name} ?`;
    if (confirm(confirmMessage)) {
      this.clearMessages();
      this.demandeFormationService.annulerDemande(demande.id).subscribe({
        next: () => {
          this.successMessage = `Demande de catalogue annul\xE9e.`;
          this.refreshData();
          console.log("\u2705 Demande annul\xE9e:", demande.id);
        },
        error: (error) => {
          console.error("\u274C Erreur lors de l'annulation:", error);
          this.error = "Erreur lors de l'annulation de la demande.";
        }
      });
    }
  }
  clearMessages() {
    this.error = "";
    this.successMessage = "";
  }
  // === MÉTHODES UTILITAIRES ===
  getStatutClass(statut) {
    const statutMap = {
      "en_attente": "badge bg-warning",
      "validee": "badge bg-success",
      "refusee": "badge bg-danger",
      "annulee": "badge bg-secondary"
    };
    return statutMap[statut] || "badge bg-secondary";
  }
  // ============================================================
  // REMPLACE ces 3 méthodes dans adminrh-demande.component.ts
  // ============================================================
  // ✅ Corrigé : priorite peut être undefined
  getPrioriteClass(priorite) {
    const prioriteMap = {
      "basse": "badge bg-light text-dark",
      "normale": "badge bg-info",
      "haute": "badge bg-warning",
      "urgente": "badge bg-danger"
    };
    return prioriteMap[priorite ?? ""] || "badge bg-secondary";
  }
  // ✅ Corrigé : date peut être string | null | undefined
  formatDate(date) {
    if (!date)
      return "Non sp\xE9cifi\xE9";
    try {
      return new Date(date).toLocaleDateString("fr-FR");
    } catch {
      return "Date invalide";
    }
  }
  // ✅ Corrigé : date peut être string | null | undefined
  formatDateTime(date) {
    if (!date)
      return "Non sp\xE9cifi\xE9";
    try {
      return new Date(date).toLocaleString("fr-FR");
    } catch {
      return "Date invalide";
    }
  }
  canValidate(demande) {
    return demande.statut === "en_attente" && !this.validatingIds.has(demande.id);
  }
  canRefuse(demande) {
    return demande.statut === "en_attente" && !this.refusingIds.has(demande.id);
  }
  canCancel(demande) {
    return ["en_attente", "validee"].includes(demande.statut);
  }
  trackByDemandeId(index, demande) {
    return demande.id;
  }
  changePageSize(pageSize) {
    this.pageSelection = [];
    this.limit = pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.pageSize = pageSize;
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize
    });
  }
  getErrorMessage(error) {
    const errorMap = {
      403: "Vous n'avez pas les droits pour acc\xE9der aux demandes de formation.",
      401: "Session expir\xE9e. Veuillez vous reconnecter.",
      500: "Erreur serveur. Veuillez r\xE9essayer plus tard.",
      404: "Aucune demande trouv\xE9e."
    };
    if (error?.status && errorMap[error.status]) {
      return errorMap[error.status];
    }
    if (!navigator.onLine) {
      return "Pas de connexion internet.";
    }
    return "Erreur lors du chargement des donn\xE9es.";
  }
  // === GETTERS POUR LES STATISTIQUES ===
  get totalDemandes() {
    return this.stats.total || 0;
  }
  get demandesEnAttente() {
    return this.stats.en_attente || 0;
  }
  get demandesValidees() {
    return this.stats.validees || 0;
  }
  get demandesRefusees() {
    return this.stats.refusees || 0;
  }
  get hasData() {
    return this.actualData.length > 0;
  }
  get showEmptyState() {
    return !this.loading && !this.hasData && !this.error;
  }
  get totalPages() {
    return Math.ceil(this.totalData / this.pageSize);
  }
  get pagesArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i);
  }
  onPageChange(page) {
    this.currentPage = page;
    this.skip = (page - 1) * this.pageSize;
    this.limit = page * this.pageSize;
    this.pagination.tablePageSize.next({ skip: this.skip, limit: this.limit, pageSize: this.pageSize });
  }
  static \u0275fac = function AdminrhDemandeCatalogueComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhDemandeCatalogueComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(DemandeFormationService), \u0275\u0275directiveInject(CatalogueService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhDemandeCatalogueComponent, selectors: [["app-adminrh-demande-catalogue"]], decls: 79, vars: 20, consts: [[1, "page"], [1, "page-header"], [1, "page-header__left"], [1, "page-header__actions"], ["type", "button", 1, "btn-outline"], [1, "isax", "isax-export"], ["type", "button", 1, "btn-primary", 3, "click", "disabled"], [1, "isax", "isax-refresh"], [1, "kpi-row"], [1, "kpi"], [1, "kpi__icon", "ki-amber"], [1, "isax", "isax-clock"], [1, "kpi__body"], [1, "kpi__label"], [1, "kpi__val"], [1, "kpi__delta"], [1, "kpi__icon", "ki-green"], [1, "isax", "isax-tick-circle"], [1, "kpi__icon", "ki-red"], [1, "isax", "isax-close-circle"], [1, "kpi__icon", "ki-teal"], [1, "isax", "isax-category"], [1, "main-card"], [1, "toolbar"], [1, "search-box"], [1, "isax", "isax-search-normal-1"], ["type", "search", "placeholder", "Rechercher catalogue, employ\xE9...", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "button", 1, "filter-chip", 3, "click"], [1, "toolbar-spacer"], ["type", "button", 1, "sort-btn"], [1, "isax", "isax-arrow-3"], ["class", "alert alert--ok", 4, "ngIf"], ["class", "alert alert--err", 4, "ngIf"], ["class", "skeletons", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "demande-list", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "alert", "alert--ok"], ["type", "button", 1, "alert__close", 3, "click"], [1, "alert", "alert--err"], [1, "isax", "isax-warning-2"], [1, "skeletons"], ["class", "sk-item", 4, "ngFor", "ngForOf"], [1, "sk-item"], [1, "empty-state"], [1, "demande-list"], ["class", "demande-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "demande-item"], [1, "d-left"], [1, "d-av"], [1, "d-type-line", "tl-cat"], [1, "d-body"], [1, "d-name"], [1, "d-company"], [1, "d-time"], [1, "d-title"], [1, "d-meta"], [4, "ngIf"], ["class", "d-msg", 3, "title", 4, "ngIf"], [1, "d-right"], [1, "d-badges"], [1, "sb"], [1, "tb", "tb-cat"], [1, "action-row"], ["type", "button", "class", "act-btn act-approve", "title", "Approuver", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "act-btn act-reject", "title", "Refuser", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "act-btn act-cancel", "title", "Annuler", 3, "click", 4, "ngIf"], [1, "isax", "isax-calendar-1"], [1, "isax", "isax-book"], [1, "d-msg", 3, "title"], ["type", "button", "title", "Approuver", 1, "act-btn", "act-approve", 3, "click", "disabled"], ["class", "act-spin", 4, "ngIf"], ["class", "isax isax-tick-circle", 4, "ngIf"], [1, "act-spin"], ["type", "button", "title", "Refuser", 1, "act-btn", "act-reject", 3, "click", "disabled"], ["class", "isax isax-close-circle", 4, "ngIf"], ["type", "button", "title", "Annuler", 1, "act-btn", "act-cancel", 3, "click"], [1, "isax", "isax-minus-circle"], [1, "pagination"], [1, "pagination__pages"], ["type", "button", 1, "pag-btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], ["type", "button", "class", "pag-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-3"], ["type", "button", 1, "pag-btn", 3, "click"]], template: function AdminrhDemandeCatalogueComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Demandes de catalogue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "G\xE9rez et traitez les demandes d'acc\xE8s aux catalogues de formation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 3)(8, "button", 4);
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275text(10, " Exporter ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 6);
      \u0275\u0275listener("click", function AdminrhDemandeCatalogueComponent_Template_button_click_11_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275element(12, "i", 7);
      \u0275\u0275text(13, " Actualiser ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "div", 10);
      \u0275\u0275element(17, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 12)(19, "div", 13);
      \u0275\u0275text(20, "En attente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 14);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 15);
      \u0275\u0275text(24, "\xE0 traiter");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 9)(26, "div", 16);
      \u0275\u0275element(27, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 12)(29, "div", 13);
      \u0275\u0275text(30, "Approuv\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 14);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 15);
      \u0275\u0275text(34, "cette p\xE9riode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 9)(36, "div", 18);
      \u0275\u0275element(37, "i", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 12)(39, "div", 13);
      \u0275\u0275text(40, "Refus\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 14);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 15);
      \u0275\u0275text(44, "cette p\xE9riode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 9)(46, "div", 20);
      \u0275\u0275element(47, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 12)(49, "div", 13);
      \u0275\u0275text(50, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 14);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 15);
      \u0275\u0275text(54, "catalogues");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "div", 22)(56, "div", 23)(57, "div", 24);
      \u0275\u0275element(58, "i", 25);
      \u0275\u0275elementStart(59, "input", 26);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhDemandeCatalogueComponent_Template_input_ngModelChange_59_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AdminrhDemandeCatalogueComponent_Template_input_ngModelChange_59_listener($event) {
        return ctx.searchData($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "button", 27);
      \u0275\u0275listener("click", function AdminrhDemandeCatalogueComponent_Template_button_click_60_listener() {
        return ctx.onStatutFilterChange(ctx.selectedStatutFilter === "en_attente" ? "tous" : "en_attente");
      });
      \u0275\u0275element(61, "i", 11);
      \u0275\u0275text(62, " En attente ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "button", 27);
      \u0275\u0275listener("click", function AdminrhDemandeCatalogueComponent_Template_button_click_63_listener() {
        return ctx.onStatutFilterChange(ctx.selectedStatutFilter === "validee" ? "tous" : "validee");
      });
      \u0275\u0275element(64, "i", 17);
      \u0275\u0275text(65, " Approuv\xE9es ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "button", 27);
      \u0275\u0275listener("click", function AdminrhDemandeCatalogueComponent_Template_button_click_66_listener() {
        return ctx.onStatutFilterChange(ctx.selectedStatutFilter === "refusee" ? "tous" : "refusee");
      });
      \u0275\u0275element(67, "i", 19);
      \u0275\u0275text(68, " Refus\xE9es ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(69, "div", 28);
      \u0275\u0275elementStart(70, "button", 29);
      \u0275\u0275element(71, "i", 30);
      \u0275\u0275text(72, " Plus r\xE9cent ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(73, AdminrhDemandeCatalogueComponent_div_73_Template, 5, 1, "div", 31)(74, AdminrhDemandeCatalogueComponent_div_74_Template, 5, 1, "div", 32)(75, AdminrhDemandeCatalogueComponent_div_75_Template, 2, 2, "div", 33)(76, AdminrhDemandeCatalogueComponent_div_76_Template, 4, 0, "div", 34)(77, AdminrhDemandeCatalogueComponent_div_77_Template, 3, 3, "div", 35)(78, AdminrhDemandeCatalogueComponent_div_78_Template, 9, 6, "div", 36);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.demandesEnAttente);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.demandesValidees);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.demandesRefusees);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.totalDemandes);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(19, _c0));
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.selectedStatutFilter === "en_attente");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.selectedStatutFilter === "validee");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.selectedStatutFilter === "refusee");
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.hasData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.hasData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalPages > 1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, CommonModule, NgForOf, NgIf, MatSortModule], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 0 0 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.page-header__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 4px;\n}\n.page-header__left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6B7280;\n  margin: 0;\n}\n.page-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n  border: 1px solid #E5E7EB;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  transition: background 0.12s, border-color 0.12s;\n}\n.btn-outline[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: #F9FAFB;\n  border-color: #D1D5DB;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #fff;\n  background: #185FA5;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: opacity 0.12s;\n}\n.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n}\n@media (max-width: 900px) {\n  .kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E5E7EB;\n  border-radius: 12px;\n  padding: 14px 16px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.kpi__icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.kpi__icon.ki-amber[_ngcontent-%COMP%] {\n  background: #FEF3C7;\n  color: #BA7517;\n}\n.kpi__icon.ki-blue[_ngcontent-%COMP%] {\n  background: #DBEAFE;\n  color: #185FA5;\n}\n.kpi__icon.ki-green[_ngcontent-%COMP%] {\n  background: #DCFCE7;\n  color: #166534;\n}\n.kpi__icon.ki-red[_ngcontent-%COMP%] {\n  background: #FEE2E2;\n  color: #991B1B;\n}\n.kpi__icon.ki-purple[_ngcontent-%COMP%] {\n  background: #EDE9FE;\n  color: #7C3AED;\n}\n.kpi__icon.ki-teal[_ngcontent-%COMP%] {\n  background: #CCFBF1;\n  color: #0F766E;\n}\n.kpi__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.kpi__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6B7280;\n  margin-bottom: 4px;\n}\n.kpi__val[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1;\n}\n.kpi__delta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-top: 3px;\n  color: #9CA3AF;\n}\n.main-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E5E7EB;\n  border-radius: 16px;\n  overflow: hidden;\n}\n.tab-bar[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #E5E7EB;\n  padding: 0 16px;\n  gap: 4px;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.tab-bar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6B7280;\n  border-bottom: 2px solid transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  transition: color 0.12s, border-color 0.12s;\n}\n.tab[_ngcontent-%COMP%]   .tab-count[_ngcontent-%COMP%] {\n  background: #F3F4F6;\n  color: #6B7280;\n  border-radius: 20px;\n  font-size: 11px;\n  padding: 1px 7px;\n  font-weight: 600;\n  transition: background 0.12s, color 0.12s;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  color: #374151;\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n}\n.tab.active[_ngcontent-%COMP%]   .tab-count[_ngcontent-%COMP%] {\n  background: #DBEAFE;\n  color: #185FA5;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #E5E7EB;\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 180px;\n  max-width: 280px;\n}\n.search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9CA3AF;\n  pointer-events: none;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px 7px 32px;\n  font-size: 13px;\n  border: 1px solid #E5E7EB;\n  border-radius: 8px;\n  background: #F9FAFB;\n  outline: none;\n  color: #374151;\n  transition: border-color 0.15s, background 0.15s;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9CA3AF;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.filter-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 11px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #4B5563;\n  border: 1px solid #E5E7EB;\n  border-radius: 20px;\n  background: #fff;\n  cursor: pointer;\n  transition:\n    background 0.12s,\n    border-color 0.12s,\n    color 0.12s;\n  white-space: nowrap;\n}\n.filter-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.filter-chip[_ngcontent-%COMP%]:hover {\n  background: #F9FAFB;\n  border-color: #D1D5DB;\n}\n.filter-chip.active[_ngcontent-%COMP%] {\n  background: #DBEAFE;\n  border-color: #185FA5;\n  color: #185FA5;\n}\n.toolbar-spacer[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.sort-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 11px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #4B5563;\n  border: 1px solid #E5E7EB;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.sort-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.sort-btn[_ngcontent-%COMP%]:hover {\n  background: #F9FAFB;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 12px 16px 0;\n  padding: 9px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  border-left: 3px solid;\n}\n.alert__close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 15px;\n  color: inherit;\n  opacity: 0.65;\n  padding: 0;\n}\n.alert__close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.alert--ok[_ngcontent-%COMP%] {\n  background: #F0FDF4;\n  border-color: #4ADE80;\n  color: #166534;\n}\n.alert--err[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  border-color: #F87171;\n  color: #991B1B;\n}\n.skeletons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.sk-item[_ngcontent-%COMP%] {\n  height: 84px;\n  background: #F3F4F6;\n  animation: _ngcontent-%COMP%_shimmer 1.4s ease-in-out infinite;\n}\n.sk-item[_ngcontent-%COMP%]:first-child {\n  border-radius: 12px 12px 0 0;\n}\n.sk-item[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0 12px 12px;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 52px 20px;\n  color: #9CA3AF;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  display: block;\n  margin-bottom: 12px;\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n}\n.demande-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.demande-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0;\n  padding: 16px;\n  border-bottom: 1px solid #F3F4F6;\n  transition: background 0.1s;\n}\n.demande-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.demande-item[_ngcontent-%COMP%]:hover {\n  background: #F9FAFB;\n}\n.d-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0;\n  margin-right: 14px;\n  flex-shrink: 0;\n}\n.d-av[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #DBEAFE;\n  color: #185FA5;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n}\n.d-type-line[_ngcontent-%COMP%] {\n  width: 2px;\n  flex: 1;\n  min-height: 20px;\n  margin-top: 4px;\n  border-radius: 2px;\n}\n.d-type-line.tl-form[_ngcontent-%COMP%] {\n  background: #185FA5;\n}\n.d-type-line.tl-parc[_ngcontent-%COMP%] {\n  background: #7C3AED;\n}\n.d-type-line.tl-cat[_ngcontent-%COMP%] {\n  background: #0F766E;\n}\n.d-type-line.tl-sess[_ngcontent-%COMP%] {\n  background: #BA7517;\n}\n.d-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.d-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n}\n.d-company[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9CA3AF;\n  margin-top: 1px;\n}\n.d-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9CA3AF;\n  margin-top: 1px;\n}\n.d-title[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #1F2937;\n}\n.d-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 5px;\n  font-size: 12px;\n  color: #6B7280;\n}\n.d-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.d-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.d-msg[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 7px 10px;\n  background: #F9FAFB;\n  border-left: 3px solid #E5E7EB;\n  border-radius: 0 6px 6px 0;\n  font-size: 12px;\n  color: #4B5563;\n  font-style: italic;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 480px;\n}\n.d-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 8px;\n  margin-left: 16px;\n  flex-shrink: 0;\n}\n.d-badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.sb[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 9px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.sb-pending[_ngcontent-%COMP%] {\n  background: #FEF3C7;\n  color: #BA7517;\n}\n.sb-approved[_ngcontent-%COMP%] {\n  background: #DCFCE7;\n  color: #166534;\n}\n.sb-rejected[_ngcontent-%COMP%] {\n  background: #FEE2E2;\n  color: #991B1B;\n}\n.sb-cancelled[_ngcontent-%COMP%] {\n  background: #F3F4F6;\n  color: #4B5563;\n}\n.tb[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 9px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.tb-form[_ngcontent-%COMP%] {\n  background: #DBEAFE;\n  color: #185FA5;\n}\n.tb-parc[_ngcontent-%COMP%] {\n  background: #EDE9FE;\n  color: #7C3AED;\n}\n.tb-cat[_ngcontent-%COMP%] {\n  background: #CCFBF1;\n  color: #0F766E;\n}\n.tb-sess[_ngcontent-%COMP%] {\n  background: #FEF3C7;\n  color: #BA7517;\n}\n.pb[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 9px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.pb-basse[_ngcontent-%COMP%] {\n  background: #F3F4F6;\n  color: #4B5563;\n}\n.pb-normale[_ngcontent-%COMP%] {\n  background: #DBEAFE;\n  color: #185FA5;\n}\n.pb-haute[_ngcontent-%COMP%] {\n  background: #FEF3C7;\n  color: #BA7517;\n}\n.pb-urgente[_ngcontent-%COMP%] {\n  background: #FEE2E2;\n  color: #991B1B;\n}\n.action-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.act-btn[_ngcontent-%COMP%] {\n  height: 30px;\n  padding: 0 10px;\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 6px;\n  border: 1px solid #E5E7EB;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: #fff;\n  color: #4B5563;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n  white-space: nowrap;\n}\n.act-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.act-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.act-btn.act-approve[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #DCFCE7;\n  color: #166534;\n  border-color: #86EFAC;\n}\n.act-btn.act-reject[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #FEE2E2;\n  color: #991B1B;\n  border-color: #FCA5A5;\n}\n.act-btn.act-cancel[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #FEF3C7;\n  color: #BA7517;\n  border-color: #FCD34D;\n}\n.act-btn.act-view[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #DBEAFE;\n  color: #185FA5;\n  border-color: #93C5FD;\n}\n.act-spin[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 11px;\n  height: 11px;\n  border: 2px solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_dspin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_dspin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-top: 1px solid #E5E7EB;\n  font-size: 12px;\n  color: #6B7280;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.pagination__pages[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pag-btn[_ngcontent-%COMP%] {\n  min-width: 30px;\n  height: 30px;\n  padding: 0 8px;\n  font-size: 12px;\n  border: 1px solid #E5E7EB;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  color: #4B5563;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.12s;\n}\n.pag-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #F3F4F6;\n}\n.pag-btn.active[_ngcontent-%COMP%] {\n  background: #185FA5;\n  border-color: #185FA5;\n  color: #fff;\n  font-weight: 600;\n}\n.pag-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n@media (max-width: 640px) {\n  .d-right[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    margin-left: 0;\n    margin-top: 10px;\n  }\n  .demande-item[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .d-msg[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.kpi-row--card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  padding: 16px;\n  border-bottom: 1px solid #E5E7EB;\n}\n@media (max-width: 900px) {\n  .kpi-row--card[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .kpi-row--card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.d-av--form[_ngcontent-%COMP%] {\n  background: #EDE9FE;\n  color: #7C3AED;\n}\n.d-av--form[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.formations-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6B7280;\n}\n.pm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n  padding: 16px;\n}\n.pm-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  width: 100%;\n  max-width: 820px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n}\n.pm-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #E5E7EB;\n}\n.pm-head__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #DBEAFE;\n  color: #185FA5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.pm-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pm-head__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-head__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6B7280;\n  margin-top: 2px;\n}\n.pm-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #9CA3AF;\n  cursor: pointer;\n  padding: 4px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.pm-close[_ngcontent-%COMP%]:hover {\n  color: #111827;\n}\n.pm-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 20px;\n  font-size: 13px;\n  border-bottom: 1px solid transparent;\n}\n.pm-alert--ok[_ngcontent-%COMP%] {\n  background: #F0FDF4;\n  border-color: #4ADE80;\n  color: #166534;\n}\n.pm-alert--err[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  border-color: #F87171;\n  color: #991B1B;\n}\n.pm-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .pm-body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.pm-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  background: #E5E7EB;\n  flex-shrink: 0;\n}\n@media (max-width: 600px) {\n  .pm-divider[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 1px;\n  }\n}\n.pm-col[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 0;\n}\n.pm-col__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #F3F4F6;\n  flex-wrap: wrap;\n}\n.pm-col__title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #374151;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  white-space: nowrap;\n}\n.pm-col__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.pm-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 120px;\n  max-width: 180px;\n}\n.pm-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 13px;\n  color: #9CA3AF;\n  pointer-events: none;\n}\n.pm-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 8px 5px 26px;\n  font-size: 12px;\n  border: 1px solid #E5E7EB;\n  border-radius: 8px;\n  background: #F9FAFB;\n  outline: none;\n}\n.pm-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.pm-list[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  flex: 1;\n  padding: 6px 0;\n}\n.pm-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 28px 16px;\n  font-size: 13px;\n  color: #6B7280;\n}\n.pm-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n  color: #9CA3AF;\n}\n.pm-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.5;\n}\n.pm-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0;\n}\n.pm-user-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 16px;\n  transition: background 0.1s;\n}\n.pm-user-row[_ngcontent-%COMP%]:hover {\n  background: #F9FAFB;\n}\n.pm-user-av[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #F3F4F6;\n  color: #4B5563;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.pm-user-av--blue[_ngcontent-%COMP%] {\n  background: #DBEAFE;\n  color: #185FA5;\n}\n.pm-user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pm-user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1F2937;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-user-email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9CA3AF;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #E5E7EB;\n  background: #F9FAFB;\n}\n.pm-foot__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6B7280;\n}\n.pm-foot__spacer[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.act-btn--sm[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  height: 26px;\n  font-size: 11px;\n}\n.pm-foot-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6B7280;\n  margin-right: auto;\n}\n/*# sourceMappingURL=adminrh-demande-catalogue.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhDemandeCatalogueComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-demande-catalogue", standalone: true, imports: [RouterLink, FormsModule, CommonModule, MatSortModule, CustomPaginationComponent], template: `<div class="page">\r
\r
  <!-- Page Header -->\r
  <div class="page-header">\r
    <div class="page-header__left">\r
      <h1>Demandes de catalogue</h1>\r
      <p>G\xE9rez et traitez les demandes d'acc\xE8s aux catalogues de formation</p>\r
    </div>\r
    <div class="page-header__actions">\r
      <button type="button" class="btn-outline">\r
        <i class="isax isax-export"></i> Exporter\r
      </button>\r
      <button type="button" class="btn-primary" (click)="refreshData()" [disabled]="loading">\r
        <i class="isax isax-refresh"></i> Actualiser\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- KPI Row -->\r
  <div class="kpi-row">\r
    <div class="kpi">\r
      <div class="kpi__icon ki-amber"><i class="isax isax-clock"></i></div>\r
      <div class="kpi__body">\r
        <div class="kpi__label">En attente</div>\r
        <div class="kpi__val">{{ demandesEnAttente }}</div>\r
        <div class="kpi__delta">\xE0 traiter</div>\r
      </div>\r
    </div>\r
    <div class="kpi">\r
      <div class="kpi__icon ki-green"><i class="isax isax-tick-circle"></i></div>\r
      <div class="kpi__body">\r
        <div class="kpi__label">Approuv\xE9es</div>\r
        <div class="kpi__val">{{ demandesValidees }}</div>\r
        <div class="kpi__delta">cette p\xE9riode</div>\r
      </div>\r
    </div>\r
    <div class="kpi">\r
      <div class="kpi__icon ki-red"><i class="isax isax-close-circle"></i></div>\r
      <div class="kpi__body">\r
        <div class="kpi__label">Refus\xE9es</div>\r
        <div class="kpi__val">{{ demandesRefusees }}</div>\r
        <div class="kpi__delta">cette p\xE9riode</div>\r
      </div>\r
    </div>\r
    <div class="kpi">\r
      <div class="kpi__icon ki-teal"><i class="isax isax-category"></i></div>\r
      <div class="kpi__body">\r
        <div class="kpi__label">Total</div>\r
        <div class="kpi__val">{{ totalDemandes }}</div>\r
        <div class="kpi__delta">catalogues</div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Main card -->\r
  <div class="main-card">\r
\r
    <!-- Toolbar -->\r
    <div class="toolbar">\r
      <div class="search-box">\r
        <i class="isax isax-search-normal-1"></i>\r
        <input type="search" placeholder="Rechercher catalogue, employ\xE9..."\r
               [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone:true}"\r
               (ngModelChange)="searchData($event)">\r
      </div>\r
      <button type="button" class="filter-chip"\r
              [class.active]="selectedStatutFilter === 'en_attente'"\r
              (click)="onStatutFilterChange(selectedStatutFilter === 'en_attente' ? 'tous' : 'en_attente')">\r
        <i class="isax isax-clock"></i> En attente\r
      </button>\r
      <button type="button" class="filter-chip"\r
              [class.active]="selectedStatutFilter === 'validee'"\r
              (click)="onStatutFilterChange(selectedStatutFilter === 'validee' ? 'tous' : 'validee')">\r
        <i class="isax isax-tick-circle"></i> Approuv\xE9es\r
      </button>\r
      <button type="button" class="filter-chip"\r
              [class.active]="selectedStatutFilter === 'refusee'"\r
              (click)="onStatutFilterChange(selectedStatutFilter === 'refusee' ? 'tous' : 'refusee')">\r
        <i class="isax isax-close-circle"></i> Refus\xE9es\r
      </button>\r
      <div class="toolbar-spacer"></div>\r
      <button type="button" class="sort-btn">\r
        <i class="isax isax-arrow-3"></i> Plus r\xE9cent\r
      </button>\r
    </div>\r
\r
    <!-- Alerts -->\r
    <div *ngIf="successMessage" class="alert alert--ok">\r
      <i class="isax isax-tick-circle"></i> {{ successMessage }}\r
      <button type="button" class="alert__close" (click)="clearMessages()"><i class="isax isax-close-circle"></i></button>\r
    </div>\r
    <div *ngIf="error" class="alert alert--err">\r
      <i class="isax isax-warning-2"></i> {{ error }}\r
      <button type="button" class="alert__close" (click)="clearMessages()"><i class="isax isax-close-circle"></i></button>\r
    </div>\r
\r
    <!-- Skeleton -->\r
    <div *ngIf="loading" class="skeletons">\r
      <div *ngFor="let i of [1,2,3,4,5]" class="sk-item"></div>\r
    </div>\r
\r
    <!-- Empty state -->\r
    <div *ngIf="!loading && !hasData" class="empty-state">\r
      <i class="isax isax-category"></i>\r
      <p>Aucune demande de catalogue</p>\r
    </div>\r
\r
    <!-- Demande list -->\r
    <div *ngIf="!loading && hasData" class="demande-list">\r
      <div *ngFor="let d of tableData; trackBy: trackByDemandeId" class="demande-item">\r
\r
        <!-- Left: avatar + type line -->\r
        <div class="d-left">\r
          <div class="d-av">{{ (d.employe?.prenom?.charAt(0) || '') + (d.employe?.nom?.charAt(0) || '') }}</div>\r
          <div class="d-type-line tl-cat"></div>\r
        </div>\r
\r
        <!-- Body -->\r
        <div class="d-body">\r
          <div class="d-name">{{ d.employe?.name || 'Employ\xE9 inconnu' }}</div>\r
          <div class="d-company">{{ d.employe?.email || '\u2014' }}</div>\r
          <div class="d-time">{{ formatDate(d.created_at) }}</div>\r
\r
          <div class="d-title">{{ d.catalogue?.titre || ('Catalogue #' + d.catalogue_id) }}</div>\r
\r
          <div class="d-meta">\r
            <span *ngIf="d.date_souhaitee_debut">\r
              <i class="isax isax-calendar-1"></i> {{ formatDate(d.date_souhaitee_debut) }}\r
            </span>\r
            <span *ngIf="d.catalogue?.nombre_formations">\r
              <i class="isax isax-book"></i> {{ d.catalogue?.nombre_formations }} formation(s)\r
            </span>\r
            <span class="pb pb-{{ d.priorite }}">{{ d.priorite_display }}</span>\r
          </div>\r
\r
          <div *ngIf="d.motif_demande" class="d-msg" [title]="d.motif_demande">\r
            "{{ d.motif_demande }}"\r
          </div>\r
        </div>\r
\r
        <!-- Right: badges + actions -->\r
        <div class="d-right">\r
          <div class="d-badges">\r
            <span class="sb"\r
              [class.sb-pending]="d.statut === 'en_attente'"\r
              [class.sb-approved]="d.statut === 'validee'"\r
              [class.sb-rejected]="d.statut === 'refusee'"\r
              [class.sb-cancelled]="d.statut === 'annulee'">\r
              {{ d.statut_display }}\r
            </span>\r
            <span class="tb tb-cat">Catalogue</span>\r
          </div>\r
          <div class="action-row">\r
            <button *ngIf="canValidate(d)" type="button" class="act-btn act-approve" title="Approuver"\r
                    [disabled]="validatingIds.has(d.id)" (click)="validerDemande(d)">\r
              <span *ngIf="validatingIds.has(d.id)" class="act-spin"></span>\r
              <i *ngIf="!validatingIds.has(d.id)" class="isax isax-tick-circle"></i>\r
              Approuver\r
            </button>\r
            <button *ngIf="canRefuse(d)" type="button" class="act-btn act-reject" title="Refuser"\r
                    [disabled]="refusingIds.has(d.id)" (click)="refuserDemande(d)">\r
              <span *ngIf="refusingIds.has(d.id)" class="act-spin"></span>\r
              <i *ngIf="!refusingIds.has(d.id)" class="isax isax-close-circle"></i>\r
              Refuser\r
            </button>\r
            <button *ngIf="canCancel(d)" type="button" class="act-btn act-cancel" title="Annuler" (click)="annulerDemande(d)">\r
              <i class="isax isax-minus-circle"></i>\r
            </button>\r
          </div>\r
        </div>\r
\r
      </div>\r
\r
      <!-- Empty filtered -->\r
      <div *ngIf="!tableData.length" class="empty-state">\r
        <i class="isax isax-search-normal-1"></i>\r
        <p>Aucun r\xE9sultat</p>\r
      </div>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div *ngIf="totalPages > 1" class="pagination">\r
      <span>Affichage {{ (currentPage - 1) * pageSize + 1 }}\u2013{{ currentPage * pageSize > totalData ? totalData : currentPage * pageSize }} sur {{ totalData }} demandes</span>\r
      <div class="pagination__pages">\r
        <button type="button" class="pag-btn" [disabled]="currentPage === 1" (click)="onPageChange(currentPage - 1)">\r
          <i class="isax isax-arrow-left-2"></i>\r
        </button>\r
        <button type="button" *ngFor="let p of pagesArray; let i = index"\r
                class="pag-btn" [class.active]="currentPage === i + 1"\r
                (click)="onPageChange(i + 1)">{{ i + 1 }}</button>\r
        <button type="button" class="pag-btn" [disabled]="currentPage === totalPages" (click)="onPageChange(currentPage + 1)">\r
          <i class="isax isax-arrow-right-3"></i>\r
        </button>\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
</div>\r
`, styles: ["/* src/app/features/adminrh/adminrh-demande-catalogue/adminrh-demande-catalogue.component.scss */\n.page {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 0 0 24px;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.page-header__left h1 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 4px;\n}\n.page-header__left p {\n  font-size: 13px;\n  color: #6B7280;\n  margin: 0;\n}\n.page-header__actions {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.btn-outline {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #374151;\n  border: 1px solid #E5E7EB;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  transition: background 0.12s, border-color 0.12s;\n}\n.btn-outline i {\n  font-size: 14px;\n}\n.btn-outline:hover {\n  background: #F9FAFB;\n  border-color: #D1D5DB;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #fff;\n  background: #185FA5;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: opacity 0.12s;\n}\n.btn-primary i {\n  font-size: 14px;\n}\n.btn-primary:hover {\n  opacity: 0.88;\n}\n.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n}\n@media (max-width: 900px) {\n  .kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .kpi-row {\n    grid-template-columns: 1fr;\n  }\n}\n.kpi {\n  background: #fff;\n  border: 1px solid #E5E7EB;\n  border-radius: 12px;\n  padding: 14px 16px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.kpi__icon {\n  width: 38px;\n  height: 38px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.kpi__icon.ki-amber {\n  background: #FEF3C7;\n  color: #BA7517;\n}\n.kpi__icon.ki-blue {\n  background: #DBEAFE;\n  color: #185FA5;\n}\n.kpi__icon.ki-green {\n  background: #DCFCE7;\n  color: #166534;\n}\n.kpi__icon.ki-red {\n  background: #FEE2E2;\n  color: #991B1B;\n}\n.kpi__icon.ki-purple {\n  background: #EDE9FE;\n  color: #7C3AED;\n}\n.kpi__icon.ki-teal {\n  background: #CCFBF1;\n  color: #0F766E;\n}\n.kpi__body {\n  flex: 1;\n  min-width: 0;\n}\n.kpi__label {\n  font-size: 12px;\n  color: #6B7280;\n  margin-bottom: 4px;\n}\n.kpi__val {\n  font-size: 24px;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1;\n}\n.kpi__delta {\n  font-size: 11px;\n  margin-top: 3px;\n  color: #9CA3AF;\n}\n.main-card {\n  background: #fff;\n  border: 1px solid #E5E7EB;\n  border-radius: 16px;\n  overflow: hidden;\n}\n.tab-bar {\n  display: flex;\n  border-bottom: 1px solid #E5E7EB;\n  padding: 0 16px;\n  gap: 4px;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.tab-bar::-webkit-scrollbar {\n  display: none;\n}\n.tab {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6B7280;\n  border-bottom: 2px solid transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  transition: color 0.12s, border-color 0.12s;\n}\n.tab .tab-count {\n  background: #F3F4F6;\n  color: #6B7280;\n  border-radius: 20px;\n  font-size: 11px;\n  padding: 1px 7px;\n  font-weight: 600;\n  transition: background 0.12s, color 0.12s;\n}\n.tab:hover {\n  color: #374151;\n}\n.tab.active {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n}\n.tab.active .tab-count {\n  background: #DBEAFE;\n  color: #185FA5;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #E5E7EB;\n}\n.search-box {\n  position: relative;\n  flex: 1;\n  min-width: 180px;\n  max-width: 280px;\n}\n.search-box i {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9CA3AF;\n  pointer-events: none;\n}\n.search-box input {\n  width: 100%;\n  padding: 7px 10px 7px 32px;\n  font-size: 13px;\n  border: 1px solid #E5E7EB;\n  border-radius: 8px;\n  background: #F9FAFB;\n  outline: none;\n  color: #374151;\n  transition: border-color 0.15s, background 0.15s;\n}\n.search-box input::placeholder {\n  color: #9CA3AF;\n}\n.search-box input:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.filter-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 11px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #4B5563;\n  border: 1px solid #E5E7EB;\n  border-radius: 20px;\n  background: #fff;\n  cursor: pointer;\n  transition:\n    background 0.12s,\n    border-color 0.12s,\n    color 0.12s;\n  white-space: nowrap;\n}\n.filter-chip i {\n  font-size: 13px;\n}\n.filter-chip:hover {\n  background: #F9FAFB;\n  border-color: #D1D5DB;\n}\n.filter-chip.active {\n  background: #DBEAFE;\n  border-color: #185FA5;\n  color: #185FA5;\n}\n.toolbar-spacer {\n  margin-left: auto;\n}\n.sort-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 11px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #4B5563;\n  border: 1px solid #E5E7EB;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.sort-btn i {\n  font-size: 13px;\n}\n.sort-btn:hover {\n  background: #F9FAFB;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 12px 16px 0;\n  padding: 9px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  border-left: 3px solid;\n}\n.alert__close {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 15px;\n  color: inherit;\n  opacity: 0.65;\n  padding: 0;\n}\n.alert__close:hover {\n  opacity: 1;\n}\n.alert--ok {\n  background: #F0FDF4;\n  border-color: #4ADE80;\n  color: #166534;\n}\n.alert--err {\n  background: #FEF2F2;\n  border-color: #F87171;\n  color: #991B1B;\n}\n.skeletons {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.sk-item {\n  height: 84px;\n  background: #F3F4F6;\n  animation: shimmer 1.4s ease-in-out infinite;\n}\n.sk-item:first-child {\n  border-radius: 12px 12px 0 0;\n}\n.sk-item:last-child {\n  border-radius: 0 0 12px 12px;\n}\n@keyframes shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 52px 20px;\n  color: #9CA3AF;\n}\n.empty-state i {\n  font-size: 2.8rem;\n  display: block;\n  margin-bottom: 12px;\n  opacity: 0.5;\n}\n.empty-state p {\n  font-size: 14px;\n  margin: 0;\n}\n.demande-list {\n  display: flex;\n  flex-direction: column;\n}\n.demande-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 0;\n  padding: 16px;\n  border-bottom: 1px solid #F3F4F6;\n  transition: background 0.1s;\n}\n.demande-item:last-child {\n  border-bottom: none;\n}\n.demande-item:hover {\n  background: #F9FAFB;\n}\n.d-left {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0;\n  margin-right: 14px;\n  flex-shrink: 0;\n}\n.d-av {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #DBEAFE;\n  color: #185FA5;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n}\n.d-type-line {\n  width: 2px;\n  flex: 1;\n  min-height: 20px;\n  margin-top: 4px;\n  border-radius: 2px;\n}\n.d-type-line.tl-form {\n  background: #185FA5;\n}\n.d-type-line.tl-parc {\n  background: #7C3AED;\n}\n.d-type-line.tl-cat {\n  background: #0F766E;\n}\n.d-type-line.tl-sess {\n  background: #BA7517;\n}\n.d-body {\n  flex: 1;\n  min-width: 0;\n}\n.d-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n}\n.d-company {\n  font-size: 12px;\n  color: #9CA3AF;\n  margin-top: 1px;\n}\n.d-time {\n  font-size: 11px;\n  color: #9CA3AF;\n  margin-top: 1px;\n}\n.d-title {\n  margin-top: 7px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #1F2937;\n}\n.d-meta {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 5px;\n  font-size: 12px;\n  color: #6B7280;\n}\n.d-meta span {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.d-meta i {\n  font-size: 13px;\n}\n.d-msg {\n  margin-top: 8px;\n  padding: 7px 10px;\n  background: #F9FAFB;\n  border-left: 3px solid #E5E7EB;\n  border-radius: 0 6px 6px 0;\n  font-size: 12px;\n  color: #4B5563;\n  font-style: italic;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 480px;\n}\n.d-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 8px;\n  margin-left: 16px;\n  flex-shrink: 0;\n}\n.d-badges {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.sb {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 9px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.sb-pending {\n  background: #FEF3C7;\n  color: #BA7517;\n}\n.sb-approved {\n  background: #DCFCE7;\n  color: #166534;\n}\n.sb-rejected {\n  background: #FEE2E2;\n  color: #991B1B;\n}\n.sb-cancelled {\n  background: #F3F4F6;\n  color: #4B5563;\n}\n.tb {\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 9px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.tb-form {\n  background: #DBEAFE;\n  color: #185FA5;\n}\n.tb-parc {\n  background: #EDE9FE;\n  color: #7C3AED;\n}\n.tb-cat {\n  background: #CCFBF1;\n  color: #0F766E;\n}\n.tb-sess {\n  background: #FEF3C7;\n  color: #BA7517;\n}\n.pb {\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 9px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.pb-basse {\n  background: #F3F4F6;\n  color: #4B5563;\n}\n.pb-normale {\n  background: #DBEAFE;\n  color: #185FA5;\n}\n.pb-haute {\n  background: #FEF3C7;\n  color: #BA7517;\n}\n.pb-urgente {\n  background: #FEE2E2;\n  color: #991B1B;\n}\n.action-row {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.act-btn {\n  height: 30px;\n  padding: 0 10px;\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 6px;\n  border: 1px solid #E5E7EB;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: #fff;\n  color: #4B5563;\n  transition:\n    background 0.12s,\n    color 0.12s,\n    border-color 0.12s;\n  white-space: nowrap;\n}\n.act-btn i {\n  font-size: 13px;\n}\n.act-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.act-btn.act-approve:not(:disabled):hover {\n  background: #DCFCE7;\n  color: #166534;\n  border-color: #86EFAC;\n}\n.act-btn.act-reject:not(:disabled):hover {\n  background: #FEE2E2;\n  color: #991B1B;\n  border-color: #FCA5A5;\n}\n.act-btn.act-cancel:not(:disabled):hover {\n  background: #FEF3C7;\n  color: #BA7517;\n  border-color: #FCD34D;\n}\n.act-btn.act-view:not(:disabled):hover {\n  background: #DBEAFE;\n  color: #185FA5;\n  border-color: #93C5FD;\n}\n.act-spin {\n  display: inline-block;\n  width: 11px;\n  height: 11px;\n  border: 2px solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  animation: dspin 0.6s linear infinite;\n}\n@keyframes dspin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-top: 1px solid #E5E7EB;\n  font-size: 12px;\n  color: #6B7280;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.pagination__pages {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pag-btn {\n  min-width: 30px;\n  height: 30px;\n  padding: 0 8px;\n  font-size: 12px;\n  border: 1px solid #E5E7EB;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  color: #4B5563;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.12s;\n}\n.pag-btn:hover:not(:disabled) {\n  background: #F3F4F6;\n}\n.pag-btn.active {\n  background: #185FA5;\n  border-color: #185FA5;\n  color: #fff;\n  font-weight: 600;\n}\n.pag-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n@media (max-width: 640px) {\n  .d-right {\n    flex-direction: row;\n    align-items: center;\n    margin-left: 0;\n    margin-top: 10px;\n  }\n  .demande-item {\n    flex-wrap: wrap;\n  }\n  .d-msg {\n    max-width: 100%;\n  }\n}\n.kpi-row--card {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  padding: 16px;\n  border-bottom: 1px solid #E5E7EB;\n}\n@media (max-width: 900px) {\n  .kpi-row--card {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .kpi-row--card {\n    grid-template-columns: 1fr;\n  }\n}\n.d-av--form {\n  background: #EDE9FE;\n  color: #7C3AED;\n}\n.d-av--form i {\n  font-size: 15px;\n}\n.formations-count {\n  font-size: 12px;\n  color: #6B7280;\n}\n.pm-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n  padding: 16px;\n}\n.pm-modal {\n  background: #fff;\n  border-radius: 16px;\n  width: 100%;\n  max-width: 820px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n}\n.pm-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #E5E7EB;\n}\n.pm-head__icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #DBEAFE;\n  color: #185FA5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.pm-head__text {\n  flex: 1;\n  min-width: 0;\n}\n.pm-head__title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-head__sub {\n  font-size: 12px;\n  color: #6B7280;\n  margin-top: 2px;\n}\n.pm-close {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #9CA3AF;\n  cursor: pointer;\n  padding: 4px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.pm-close:hover {\n  color: #111827;\n}\n.pm-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 20px;\n  font-size: 13px;\n  border-bottom: 1px solid transparent;\n}\n.pm-alert--ok {\n  background: #F0FDF4;\n  border-color: #4ADE80;\n  color: #166534;\n}\n.pm-alert--err {\n  background: #FEF2F2;\n  border-color: #F87171;\n  color: #991B1B;\n}\n.pm-body {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .pm-body {\n    flex-direction: column;\n  }\n}\n.pm-divider {\n  width: 1px;\n  background: #E5E7EB;\n  flex-shrink: 0;\n}\n@media (max-width: 600px) {\n  .pm-divider {\n    width: 100%;\n    height: 1px;\n  }\n}\n.pm-col {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 0;\n}\n.pm-col__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #F3F4F6;\n  flex-wrap: wrap;\n}\n.pm-col__title {\n  font-size: 12px;\n  font-weight: 600;\n  color: #374151;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  white-space: nowrap;\n}\n.pm-col__title i {\n  font-size: 14px;\n}\n.pm-search {\n  position: relative;\n  flex: 1;\n  min-width: 120px;\n  max-width: 180px;\n}\n.pm-search i {\n  position: absolute;\n  left: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 13px;\n  color: #9CA3AF;\n  pointer-events: none;\n}\n.pm-search input {\n  width: 100%;\n  padding: 5px 8px 5px 26px;\n  font-size: 12px;\n  border: 1px solid #E5E7EB;\n  border-radius: 8px;\n  background: #F9FAFB;\n  outline: none;\n}\n.pm-search input:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.pm-list {\n  overflow-y: auto;\n  flex: 1;\n  padding: 6px 0;\n}\n.pm-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 28px 16px;\n  font-size: 13px;\n  color: #6B7280;\n}\n.pm-empty {\n  text-align: center;\n  padding: 32px 16px;\n  color: #9CA3AF;\n}\n.pm-empty i {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.5;\n}\n.pm-empty p {\n  font-size: 13px;\n  margin: 0;\n}\n.pm-user-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 16px;\n  transition: background 0.1s;\n}\n.pm-user-row:hover {\n  background: #F9FAFB;\n}\n.pm-user-av {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #F3F4F6;\n  color: #4B5563;\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.pm-user-av--blue {\n  background: #DBEAFE;\n  color: #185FA5;\n}\n.pm-user-info {\n  flex: 1;\n  min-width: 0;\n}\n.pm-user-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1F2937;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-user-email {\n  font-size: 11px;\n  color: #9CA3AF;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #E5E7EB;\n  background: #F9FAFB;\n}\n.pm-foot__info {\n  font-size: 12px;\n  color: #6B7280;\n}\n.pm-foot__spacer {\n  margin-left: auto;\n}\n.act-btn--sm {\n  padding: 0 8px;\n  height: 26px;\n  font-size: 11px;\n}\n.pm-foot-info {\n  font-size: 12px;\n  color: #6B7280;\n  margin-right: auto;\n}\n/*# sourceMappingURL=adminrh-demande-catalogue.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }, { type: DemandeFormationService }, { type: CatalogueService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhDemandeCatalogueComponent, { className: "AdminrhDemandeCatalogueComponent", filePath: "app/features/adminrh/adminrh-demande-catalogue/adminrh-demande-catalogue.component.ts", lineNumber: 33 });
})();
export {
  AdminrhDemandeCatalogueComponent
};
//# sourceMappingURL=chunk-EXIOVZVC.js.map
