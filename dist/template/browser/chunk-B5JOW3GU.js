import {
  CustomPaginationComponent
} from "./chunk-2X3HKWIN.js";
import {
  PaginationService
} from "./chunk-LBRLB4CW.js";
import {
  FormationService
} from "./chunk-335YI34S.js";
import {
  AuthService
} from "./chunk-IEFOQSOV.js";
import "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-YJLHMFCU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-HLA233IM.js";
import {
  Router,
  RouterLink
} from "./chunk-I4S43CN7.js";
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
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
import "./chunk-4MWRP73S.js";

// src/app/features/instructor/instructor-course-grid/instructor-course-grid.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ["/formateur/formation-details", a0];
var _c2 = (a0, a1) => ({ "bg-success": a0, "bg-primary": a1 });
var _c3 = (a0) => ["/formateur/formation-edit", a0];
function InstructorCourseGridComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "span", 5);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function InstructorCourseGridComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, "\n");
  }
}
function InstructorCourseGridComponent_div_2_div_70_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 67);
    \u0275\u0275element(2, "i", 68);
    \u0275\u0275text(3, " Certifiante ");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseGridComponent_div_2_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "div", 39)(3, "a", 40);
    \u0275\u0275element(4, "img", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 42)(6, "span", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 44)(9, "span", 43);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 10)(12, "div", 45)(13, "span", 46);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "h6", 47)(16, "a", 48);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p", 49);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 50)(21, "span", 51);
    \u0275\u0275element(22, "i", 52);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 51);
    \u0275\u0275element(25, "i", 53);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275element(28, "i", 54);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 55)(31, "div", 56);
    \u0275\u0275element(32, "i", 57);
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, InstructorCourseGridComponent_div_2_div_70_div_35_Template, 4, 0, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 58)(37, "div", 59)(38, "a", 60);
    \u0275\u0275element(39, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "a", 62);
    \u0275\u0275element(41, "i", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 64);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_div_70_Template_button_click_42_listener() {
      const formation_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.archiveFormation(formation_r4));
    });
    \u0275\u0275element(43, "i", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 66);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const formation_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c1, formation_r4.id));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.getFormationImage(formation_r4), \u0275\u0275sanitizeUrl)("alt", formation_r4.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getStatusClass(formation_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusText(formation_r4), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(24, _c2, ctx_r0.isFormationGratuite(formation_r4), !ctx_r0.isFormationGratuite(formation_r4)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatPrix(formation_r4.prix), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-color", (formation_r4.categorie == null ? null : formation_r4.categorie.couleur) || "#6c757d");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (formation_r4.categorie == null ? null : formation_r4.categorie.nom) || "Non d\xE9finie", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(27, _c1, formation_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", formation_r4.titre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", formation_r4.short_description || formation_r4.description, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", formation_r4.nombre_modules || 0, " modules ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", formation_r4.duree_totale || 0, "h ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", formation_r4.niveau_display || formation_r4.niveau, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", formation_r4.nb_participants || 0, "/", formation_r4.nb_max_participants || 0, " participants");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", formation_r4.est_certifiante);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(29, _c1, formation_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(31, _c3, formation_r4.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", formation_r4.type_display || formation_r4.type, " ");
  }
}
function InstructorCourseGridComponent_div_2_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "i", 70);
    \u0275\u0275elementStart(2, "h5", 71);
    \u0275\u0275text(3, "Aucune formation trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 71);
    \u0275\u0275text(5, "Commencez par cr\xE9er votre premi\xE8re formation.");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseGridComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "h6", 11);
    \u0275\u0275text(6, "Formations Publi\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h4", 12);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 13)(11, "div", 10)(12, "h6", 11);
    \u0275\u0275text(13, "En Attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h4", 12);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 8)(17, "div", 14)(18, "div", 10)(19, "h6", 11);
    \u0275\u0275text(20, "Brouillons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h4", 12);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 8)(24, "div", 15)(25, "div", 10)(26, "h6", 11);
    \u0275\u0275text(27, "Formations Gratuites");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "h4", 12);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div", 8)(31, "div", 16)(32, "div", 10)(33, "h6", 11);
    \u0275\u0275text(34, "Formations Payantes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "h4", 12);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(37, "div", 17)(38, "h5", 18);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 19)(41, "a", 20);
    \u0275\u0275element(42, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "a", 22);
    \u0275\u0275element(44, "i", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 7)(46, "div", 24)(47, "div", 25)(48, "div", 26)(49, "a", 27);
    \u0275\u0275text(50, " Statut ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "ul", 28)(52, "li")(53, "a", 29);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_Template_a_click_53_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterByStatus("all"));
    });
    \u0275\u0275text(54, "Toutes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "li")(56, "a", 29);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_Template_a_click_56_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterByStatus("active"));
    });
    \u0275\u0275text(57, "Publi\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "li")(59, "a", 29);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_Template_a_click_59_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterByStatus("pending"));
    });
    \u0275\u0275text(60, "En attente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "li")(62, "a", 29);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_Template_a_click_62_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterByStatus("draft"));
    });
    \u0275\u0275text(63, "Brouillons");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(64, "div", 30)(65, "div", 31)(66, "span", 32);
    \u0275\u0275element(67, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseGridComponent_div_2_Template_input_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchDataValue, $event) || (ctx_r0.searchDataValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function InstructorCourseGridComponent_div_2_Template_input_ngModelChange_68_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.searchData(ctx_r0.searchDataValue));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(69, "div", 7);
    \u0275\u0275template(70, InstructorCourseGridComponent_div_2_div_70_Template, 46, 33, "div", 35)(71, InstructorCourseGridComponent_div_2_div_71_Template, 6, 0, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275element(72, "app-custom-pagination");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.getActiveFormationsCount());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.getPendingFormationsCount());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.getDraftFormationsCount());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.getFreeFormationsCount());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.getPaidFormationsCount());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Mes Formations (", ctx_r0.totalData, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.instructorCourse);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.instructorCourseGrid);
    \u0275\u0275advance(25);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchDataValue);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(13, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.tableData)("ngForTrackBy", ctx_r0.trackByFormation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tableData.length === 0);
  }
}
var InstructorCourseGridComponent = class _InstructorCourseGridComponent {
  router;
  pagination;
  formationService;
  authService;
  routes = routes;
  // pagination variables
  pageSize = 12;
  // Plus d'éléments par page pour le grid
  tableData = [];
  actualData = [];
  currentPage = 1;
  skip = 0;
  limit = this.pageSize;
  totalData = 0;
  searchDataValue = "";
  // Nouvelles propriétés
  formations = [];
  loading = false;
  error = "";
  constructor(router, pagination, formationService, authService) {
    this.router = router;
    this.pagination = pagination;
    this.formationService = formationService;
    this.authService = authService;
  }
  ngOnInit() {
    this.loadFormations();
  }
  loadFormations() {
    this.loading = true;
    this.error = "";
    this.formationService.getFormationsformateur().subscribe({
      next: (response) => {
        this.formations = response.formations || [];
        this.actualData = this.formations;
        this.totalData = this.formations.length;
        this.loading = false;
        this.getTableData({ skip: 0, limit: this.pageSize });
      },
      error: (error) => {
        this.error = "Erreur lors du chargement des formations";
        this.loading = false;
        console.error("Erreur:", error);
      }
    });
  }
  getTableData(pageOption) {
    this.tableData = [];
    this.formations.map((formation, index) => {
      const serialNumber = index + 1;
      if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
        formation.sNo = serialNumber;
        this.tableData.push(formation);
      }
    });
    this.pagination.calculatePageSize.next({
      totalData: this.totalData,
      pageSize: this.pageSize,
      tableData: this.tableData,
      tableDataCopy: this.tableData,
      serialNumberArray: []
    });
  }
  searchData(value) {
    if (value == "") {
      this.actualData = this.formations;
    } else {
      this.actualData = this.formations.filter((formation) => formation.titre.toLowerCase().includes(value.toLowerCase()) || formation.description.toLowerCase().includes(value.toLowerCase()));
    }
    this.getTableData({ skip: 0, limit: this.pageSize });
  }
  // Méthodes pour les statistiques
  getActiveFormationsCount() {
    return this.formations.filter((f) => f.est_publie === true).length;
  }
  getPendingFormationsCount() {
    return this.formations.filter((f) => f.est_publie === false && f.inscription_ouverte === false).length;
  }
  getDraftFormationsCount() {
    return this.formations.filter((f) => f.est_publie === false).length;
  }
  getFreeFormationsCount() {
    return this.formations.filter((f) => !f.prix || parseFloat(f.prix) === 0).length;
  }
  getPaidFormationsCount() {
    return this.formations.filter((f) => f.prix && parseFloat(f.prix) > 0).length;
  }
  // Méthodes utilitaires
  isFormationGratuite(formation) {
    return !formation.prix || parseFloat(formation.prix) === 0;
  }
  formatPrix(prix) {
    if (!prix || parseFloat(prix) === 0) {
      return "Gratuit";
    }
    return `${parseFloat(prix)} \u20AC`;
  }
  getFormationImage(formation) {
    return this.formationService.getImageUrl(formation.image_couverture);
  }
  getStatusClass(formation) {
    if (formation.est_publie) {
      return "bg-success";
    } else if (formation.inscription_ouverte) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }
  getStatusText(formation) {
    if (formation.est_publie) {
      return "Publi\xE9";
    } else if (formation.inscription_ouverte) {
      return "En attente";
    } else {
      return "Brouillon";
    }
  }
  trackByFormation(index, formation) {
    return formation.id || index;
  }
  // Méthodes de filtrage
  filterByStatus(status) {
    if (status === "all") {
      this.actualData = this.formations;
    } else if (status === "active") {
      this.actualData = this.formations.filter((f) => f.est_publie === true);
    } else if (status === "pending") {
      this.actualData = this.formations.filter((f) => f.est_publie === false && f.inscription_ouverte === false);
    } else if (status === "draft") {
      this.actualData = this.formations.filter((f) => f.est_publie === false);
    }
    this.getTableData({ skip: 0, limit: this.pageSize });
  }
  // Modal de suppression
  selectedFormation = null;
  openDeleteModal(formation) {
    this.selectedFormation = formation;
  }
  confirmDelete() {
    if (this.selectedFormation) {
      this.formationService.deleteFormation(this.selectedFormation.id).subscribe({
        next: () => {
          this.loadFormations();
          this.selectedFormation = null;
        },
        error: (error) => {
          console.error("Erreur lors de la suppression:", error);
        }
      });
    }
  }
  archiveFormation(formation) {
    if (!confirm(`Archiver la formation "${formation.titre}" ?`))
      return;
    this.formationService.deleteFormation(formation.id).subscribe({
      next: () => this.loadFormations(),
      error: (error) => console.error("Erreur archivage:", error)
    });
  }
  static \u0275fac = function InstructorCourseGridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorCourseGridComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorCourseGridComponent, selectors: [["app-instructor-course-grid"]], decls: 3, vars: 3, consts: [["class", "d-flex justify-content-center py-5", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "justify-content-center", "py-5"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], ["role", "alert", 1, "alert", "alert-danger"], [1, "row"], [1, "col-xxl", "col-lg-4", "col-md-6"], [1, "card", "bg-success"], [1, "card-body"], [1, "fw-medium", "mb-1", "text-white"], [1, "fw-bold", "text-white"], [1, "card", "bg-secondary"], [1, "card", "bg-info"], [1, "card", "bg-skyblue"], [1, "card", "bg-purple"], [1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold"], [1, "d-flex", "align-items-center", "list-icons"], [1, "me-2", 3, "routerLink"], [1, "isax", "isax-task"], [1, "active", 3, "routerLink"], [1, "isax", "isax-element-3"], [1, "col-md-8"], [1, "mb-3"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "text-gray-6", "btn", "rounded", "border", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1", 3, "click"], [1, "col-md-4"], [1, "input-icon", "mb-3"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal-14"], ["type", "search", "placeholder", "Rechercher une formation...", 1, "form-control", "form-control-md", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "col-xl-4 col-lg-6 col-md-6", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "col-12 text-center py-5", 4, "ngIf"], [1, "col-xl-4", "col-lg-6", "col-md-6"], [1, "card", "border-0", "shadow-sm", "mb-4"], [1, "position-relative"], [3, "routerLink"], ["onerror", "this.src='assets/img/course/course-01.jpg'", 1, "card-img-top", 2, "height", "200px", "object-fit", "cover", 3, "src", "alt"], [1, "position-absolute", "top-0", "end-0", "m-2"], [1, "badge", 3, "ngClass"], [1, "position-absolute", "bottom-0", "start-0", "m-2"], [1, "mb-2"], [1, "badge", "rounded-pill", 2, "color", "white", "font-size", "11px"], [1, "fw-bold", "mb-2"], [1, "text-decoration-none", "text-dark", 3, "routerLink"], [1, "text-muted", "small", "mb-3", 2, "height", "40px", "overflow", "hidden"], [1, "d-flex", "align-items-center", "mb-3", "small", "text-muted"], [1, "me-3"], [1, "isax", "isax-video-circle", "me-1"], [1, "isax", "isax-clock", "me-1"], [1, "isax", "isax-flag", "me-1"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-flex", "align-items-center", "small", "text-muted"], [1, "isax", "isax-people", "me-1"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], ["title", "Voir les d\xE9tails", 1, "btn", "btn-sm", "btn-outline-primary", "me-2", 3, "routerLink"], [1, "isax", "isax-eye"], ["title", "Modifier", 1, "btn", "btn-sm", "btn-outline-secondary", "me-2", 3, "routerLink"], [1, "isax", "isax-edit-2"], ["title", "Archiver", 1, "btn", "btn-sm", "btn-outline-warning", 3, "click"], [1, "isax", "isax-archive"], [1, "small", "text-muted"], [1, "badge", "bg-warning"], [1, "isax", "isax-award", "me-1"], [1, "col-12", "text-center", "py-5"], [1, "isax", "isax-book-1", "fs-48", "text-muted", "mb-3"], [1, "text-muted"]], template: function InstructorCourseGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, InstructorCourseGridComponent_div_0_Template, 4, 0, "div", 0)(1, InstructorCourseGridComponent_div_1_Template, 2, 1, "div", 1)(2, InstructorCourseGridComponent_div_2_Template, 73, 14, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, CustomPaginationComponent, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorCourseGridComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-course-grid", imports: [CommonModule, CustomPaginationComponent, FormsModule, RouterLink], template: `<!-- Loading State -->\r
<div *ngIf="loading" class="d-flex justify-content-center py-5">\r
    <div class="spinner-border" role="status">\r
        <span class="visually-hidden">Chargement...</span>\r
    </div>\r
</div>\r
\r
<!-- Error State -->\r
<div *ngIf="error" class="alert alert-danger" role="alert">\r
    {{ error }}\r
</div>\r
\r
<!-- Main Content -->\r
<div *ngIf="!loading && !error">\r
    <!-- Statistics Cards -->\r
    <div class="row">\r
        <div class="col-xxl col-lg-4 col-md-6">\r
            <div class="card bg-success">\r
                <div class="card-body">\r
                    <h6 class="fw-medium mb-1 text-white">Formations Publi\xE9es</h6>\r
                    <h4 class="fw-bold text-white">{{ getActiveFormationsCount() }}</h4>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="col-xxl col-lg-4 col-md-6">\r
            <div class="card bg-secondary">\r
                <div class="card-body">\r
                    <h6 class="fw-medium mb-1 text-white">En Attente</h6>\r
                    <h4 class="fw-bold text-white">{{ getPendingFormationsCount() }}</h4>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="col-xxl col-lg-4 col-md-6">\r
            <div class="card bg-info">\r
                <div class="card-body">\r
                    <h6 class="fw-medium mb-1 text-white">Brouillons</h6>\r
                    <h4 class="fw-bold text-white">{{ getDraftFormationsCount() }}</h4>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="col-xxl col-lg-4 col-md-6">\r
            <div class="card bg-skyblue">\r
                <div class="card-body">\r
                    <h6 class="fw-medium mb-1 text-white">Formations Gratuites</h6>\r
                    <h4 class="fw-bold text-white">{{ getFreeFormationsCount() }}</h4>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="col-xxl col-lg-4 col-md-6">\r
            <div class="card bg-purple">\r
                <div class="card-body">\r
                    <h6 class="fw-medium mb-1 text-white">Formations Payantes</h6>\r
                    <h4 class="fw-bold text-white">{{ getPaidFormationsCount() }}</h4>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- Page Header -->\r
    <div class="page-title d-flex align-items-center justify-content-between">\r
        <h5 class="fw-bold">Mes Formations ({{ totalData }})</h5>\r
        <div class="d-flex align-items-center list-icons">\r
            <a [routerLink]="routes.instructorCourse" class="me-2"><i class="isax isax-task"></i></a>\r
            <a [routerLink]="routes.instructorCourseGrid" class="active"><i class="isax isax-element-3"></i></a>\r
        </div>\r
    </div>\r
\r
    <!-- Filters and Search -->\r
    <div class="row">\r
        <div class="col-md-8">\r
            <div class="mb-3">\r
                <div class="dropdown">\r
                    <a href="javascript:void(0);" class="dropdown-toggle text-gray-6 btn rounded border d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">\r
                        Statut\r
                    </a>\r
                    <ul class="dropdown-menu dropdown-menu-end p-3">\r
                        <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="filterByStatus('all')">Toutes</a></li>\r
                        <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="filterByStatus('active')">Publi\xE9es</a></li>\r
                        <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="filterByStatus('pending')">En attente</a></li>\r
                        <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="filterByStatus('draft')">Brouillons</a></li>\r
                    </ul>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="col-md-4">\r
            <div class="input-icon mb-3">\r
                <span class="input-icon-addon">\r
                    <i class="isax isax-search-normal-14"></i>\r
                </span>\r
                <input [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" \r
                       type="search" (ngModelChange)="searchData(searchDataValue)" \r
                       class="form-control form-control-md" placeholder="Rechercher une formation...">\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- Grid Layout -->\r
    <div class="row">\r
        <div class="col-xl-4 col-lg-6 col-md-6" *ngFor="let formation of tableData; trackBy: trackByFormation">\r
            <div class="card border-0 shadow-sm mb-4">\r
                <!-- Image de la formation -->\r
                <div class="position-relative">\r
                    <a [routerLink]="['/formateur/formation-details', formation.id]">\r
                        <img class="card-img-top" \r
                             [src]="getFormationImage(formation)" \r
                             [alt]="formation.titre"\r
                             style="height: 200px; object-fit: cover;"\r
                             onerror="this.src='assets/img/course/course-01.jpg'">\r
                    </a>\r
                    \r
                    <!-- Badge statut -->\r
                    <div class="position-absolute top-0 end-0 m-2">\r
                        <span class="badge" [ngClass]="getStatusClass(formation)">\r
                            {{ getStatusText(formation) }}\r
                        </span>\r
                    </div>\r
                    \r
                    <!-- Badge prix -->\r
                    <div class="position-absolute bottom-0 start-0 m-2">\r
                        <span class="badge" [ngClass]="{'bg-success': isFormationGratuite(formation), 'bg-primary': !isFormationGratuite(formation)}">\r
                            {{ formatPrix(formation.prix) }}\r
                        </span>\r
                    </div>\r
                </div>\r
\r
                <!-- Contenu de la carte -->\r
                <div class="card-body">\r
                    <!-- Cat\xE9gorie -->\r
                    <div class="mb-2">\r
                        <span class="badge rounded-pill" \r
                              [style.background-color]="formation.categorie?.couleur || '#6c757d'"\r
                              style="color: white; font-size: 11px;">\r
                            {{ formation.categorie?.nom || 'Non d\xE9finie' }}\r
                        </span>\r
                    </div>\r
\r
                    <!-- Titre -->\r
                    <h6 class="fw-bold mb-2">\r
                        <a [routerLink]="['/formateur/formation-details', formation.id]" \r
                           class="text-decoration-none text-dark">\r
                            {{ formation.titre }}\r
                        </a>\r
                    </h6>\r
\r
                    <!-- Description courte -->\r
                    <p class="text-muted small mb-3" style="height: 40px; overflow: hidden;">\r
                        {{ formation.short_description || formation.description }}\r
                    </p>\r
\r
                    <!-- Informations -->\r
                    <div class="d-flex align-items-center mb-3 small text-muted">\r
                        <span class="me-3">\r
                            <i class="isax isax-video-circle me-1"></i>\r
                            {{ formation.nombre_modules || 0 }} modules\r
                        </span>\r
                        <span class="me-3">\r
                            <i class="isax isax-clock me-1"></i>\r
                            {{ formation.duree_totale || 0 }}h\r
                        </span>\r
                        <span>\r
                            <i class="isax isax-flag me-1"></i>\r
                            {{ formation.niveau_display || formation.niveau }}\r
                        </span>\r
                    </div>\r
\r
                    <!-- Participants -->\r
                    <div class="d-flex align-items-center justify-content-between mb-3">\r
                        <div class="d-flex align-items-center small text-muted">\r
                            <i class="isax isax-people me-1"></i>\r
                            <span>{{ formation.nb_participants || 0 }}/{{ formation.nb_max_participants || 0 }} participants</span>\r
                        </div>\r
                        \r
                        <!-- Certification -->\r
                        <div *ngIf="formation.est_certifiante">\r
                            <span class="badge bg-warning">\r
                                <i class="isax isax-award me-1"></i>\r
                                Certifiante\r
                            </span>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Actions -->\r
                    <div class="d-flex align-items-center justify-content-between">\r
                        <div class="d-flex align-items-center">\r
                            <a [routerLink]="['/formateur/formation-details', formation.id]" \r
                               class="btn btn-sm btn-outline-primary me-2"\r
                               title="Voir les d\xE9tails">\r
                                <i class="isax isax-eye"></i>\r
                            </a>\r
                            <a [routerLink]="['/formateur/formation-edit', formation.id]" \r
                               class="btn btn-sm btn-outline-secondary me-2"\r
                               title="Modifier">\r
                                <i class="isax isax-edit-2"></i>\r
                            </a>\r
                            <button class="btn btn-sm btn-outline-warning"\r
                                    (click)="archiveFormation(formation)"\r
                                    title="Archiver">\r
                                <i class="isax isax-archive"></i>\r
                            </button>\r
                        </div>\r
                        \r
                        <div class="small text-muted">\r
                            {{ formation.type_display || formation.type }}\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- Empty State -->\r
        <div *ngIf="tableData.length === 0" class="col-12 text-center py-5">\r
            <i class="isax isax-book-1 fs-48 text-muted mb-3"></i>\r
            <h5 class="text-muted">Aucune formation trouv\xE9e</h5>\r
            <p class="text-muted">Commencez par cr\xE9er votre premi\xE8re formation.</p>\r
        </div>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <app-custom-pagination/>\r
</div>\r
\r
` }]
  }], () => [{ type: Router }, { type: PaginationService }, { type: FormationService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorCourseGridComponent, { className: "InstructorCourseGridComponent", filePath: "app/features/instructor/instructor-course-grid/instructor-course-grid.component.ts", lineNumber: 17 });
})();
export {
  InstructorCourseGridComponent
};
//# sourceMappingURL=chunk-B5JOW3GU.js.map
