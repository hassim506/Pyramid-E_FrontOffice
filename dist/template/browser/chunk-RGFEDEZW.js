import {
  CustomPaginationComponent
} from "./chunk-3XTSKOGE.js";
import {
  PaginationService
} from "./chunk-EDMPVZTI.js";
import {
  FormationService
} from "./chunk-2O6NHTWJ.js";
import {
  AuthService
} from "./chunk-SNOA42FF.js";
import "./chunk-FKX6UC3I.js";
import {
  routes
} from "./chunk-TYVQP4CB.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-45DOGZAU.js";
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

// src/app/features/superadmin/superadmin-course-grid/superadmin-course-grid.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ["/formateur/formation-details", a0];
var _c2 = (a0, a1) => ({ "bg-success": a0, "bg-primary": a1 });
var _c3 = (a0) => ["/formateur/formation-edit", a0];
function SuperadminCourseGridComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "span", 16);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function SuperadminCourseGridComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, "\n");
  }
}
function SuperadminCourseGridComponent_div_2_div_73_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 76);
    \u0275\u0275element(2, "i", 77);
    \u0275\u0275text(3, " Certifiante ");
    \u0275\u0275elementEnd()();
  }
}
function SuperadminCourseGridComponent_div_2_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "div", 50)(3, "a", 51);
    \u0275\u0275element(4, "img", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 53)(6, "span", 54);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 55)(9, "span", 54);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 21)(12, "div", 9)(13, "span", 56);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "h6", 57)(16, "a", 58);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p", 59);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 60)(21, "span", 61);
    \u0275\u0275element(22, "i", 62);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 61);
    \u0275\u0275element(25, "i", 63);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275element(28, "i", 64);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 65)(31, "div", 66);
    \u0275\u0275element(32, "i", 67);
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, SuperadminCourseGridComponent_div_2_div_73_div_35_Template, 4, 0, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 68)(37, "div", 30)(38, "a", 69);
    \u0275\u0275element(39, "i", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "a", 71);
    \u0275\u0275element(41, "i", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 73);
    \u0275\u0275listener("click", function SuperadminCourseGridComponent_div_2_div_73_Template_button_click_42_listener() {
      const formation_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDeleteModal(formation_r4));
    });
    \u0275\u0275element(43, "i", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 75);
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
function SuperadminCourseGridComponent_div_2_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275elementStart(2, "h5", 80);
    \u0275\u0275text(3, "Aucune formation trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 80);
    \u0275\u0275text(5, "Commencez par cr\xE9er votre premi\xE8re formation.");
    \u0275\u0275elementEnd()();
  }
}
function SuperadminCourseGridComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 18)(2, "div", 19)(3, "div", 20)(4, "div", 21)(5, "h6", 22);
    \u0275\u0275text(6, "Formations Publi\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h4", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 19)(10, "div", 24)(11, "div", 21)(12, "h6", 22);
    \u0275\u0275text(13, "En Attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h4", 23);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 19)(17, "div", 25)(18, "div", 21)(19, "h6", 22);
    \u0275\u0275text(20, "Brouillons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h4", 23);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 19)(24, "div", 26)(25, "div", 21)(26, "h6", 22);
    \u0275\u0275text(27, "Formations Gratuites");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "h4", 23);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div", 19)(31, "div", 27)(32, "div", 21)(33, "h6", 22);
    \u0275\u0275text(34, "Formations Payantes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "h4", 23);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(37, "div", 28)(38, "h5", 29);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 30)(41, "div", 31)(42, "a", 32);
    \u0275\u0275element(43, "i", 33);
    \u0275\u0275text(44, " Liste ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "a", 34);
    \u0275\u0275element(46, "i", 35);
    \u0275\u0275text(47, " Grille ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "div", 18)(49, "div", 36)(50, "div", 10)(51, "div", 37)(52, "a", 38);
    \u0275\u0275text(53, " Statut ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "ul", 39)(55, "li")(56, "a", 40);
    \u0275\u0275listener("click", function SuperadminCourseGridComponent_div_2_Template_a_click_56_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterByStatus("all"));
    });
    \u0275\u0275text(57, "Toutes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "li")(59, "a", 40);
    \u0275\u0275listener("click", function SuperadminCourseGridComponent_div_2_Template_a_click_59_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterByStatus("active"));
    });
    \u0275\u0275text(60, "Publi\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "li")(62, "a", 40);
    \u0275\u0275listener("click", function SuperadminCourseGridComponent_div_2_Template_a_click_62_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterByStatus("pending"));
    });
    \u0275\u0275text(63, "En attente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "li")(65, "a", 40);
    \u0275\u0275listener("click", function SuperadminCourseGridComponent_div_2_Template_a_click_65_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterByStatus("draft"));
    });
    \u0275\u0275text(66, "Brouillons");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(67, "div", 41)(68, "div", 42)(69, "span", 43);
    \u0275\u0275element(70, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminCourseGridComponent_div_2_Template_input_ngModelChange_71_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchDataValue, $event) || (ctx_r0.searchDataValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SuperadminCourseGridComponent_div_2_Template_input_ngModelChange_71_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.searchData(ctx_r0.searchDataValue));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(72, "div", 18);
    \u0275\u0275template(73, SuperadminCourseGridComponent_div_2_div_73_Template, 46, 33, "div", 46)(74, SuperadminCourseGridComponent_div_2_div_74_Template, 6, 0, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "app-custom-pagination");
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
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.superadminCourse);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.superadminCourseGrid);
    \u0275\u0275advance(26);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchDataValue);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(13, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.tableData)("ngForTrackBy", ctx_r0.trackByFormation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tableData.length === 0);
  }
}
var SuperadminCourseGridComponent = class _SuperadminCourseGridComponent {
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
    this.formationService.getFormations({ page: 1, limit: 12 }).subscribe({
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
  static \u0275fac = function SuperadminCourseGridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminCourseGridComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminCourseGridComponent, selectors: [["app-superadmin-course-grid"]], decls: 19, vars: 3, consts: [["class", "d-flex justify-content-center py-5", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [4, "ngIf"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "text-center", "custom-modal-body"], [1, "avatar", "avatar-lg", "bg-danger-transparent", "rounded-circle", "mb-2"], [1, "isax", "isax-trash", "fs-24", "text-danger"], [1, "mb-2"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center"], ["data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["data-bs-dismiss", "modal", 1, "btn", "btn-danger", "rounded-pill", 3, "click"], [1, "d-flex", "justify-content-center", "py-5"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], ["role", "alert", 1, "alert", "alert-danger"], [1, "row"], [1, "col-xxl", "col-lg-4", "col-md-6"], [1, "card", "bg-success"], [1, "card-body"], [1, "fw-medium", "mb-1", "text-white"], [1, "fw-bold", "text-white"], [1, "card", "bg-secondary"], [1, "card", "bg-info"], [1, "card", "bg-skyblue"], [1, "card", "bg-purple"], [1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold"], [1, "d-flex", "align-items-center"], ["role", "group", 1, "btn-group", "me-3"], [1, "btn", "btn-outline-primary", "active", 3, "routerLink"], [1, "isax", "isax-task", "me-1"], [1, "btn", "btn-outline-primary", 3, "routerLink"], [1, "isax", "isax-element-3", "me-1"], [1, "col-md-8"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "text-gray-6", "btn", "rounded", "border", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1", 3, "click"], [1, "col-md-4"], [1, "input-icon", "mb-3"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal-14"], ["type", "search", "placeholder", "Rechercher une formation...", 1, "form-control", "form-control-md", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "col-xl-4 col-lg-6 col-md-6", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "col-12 text-center py-5", 4, "ngIf"], [1, "col-xl-4", "col-lg-6", "col-md-6"], [1, "card", "border-0", "shadow-sm", "mb-4"], [1, "position-relative"], [3, "routerLink"], ["onerror", "this.src='assets/img/course/course-01.jpg'", 1, "card-img-top", 2, "height", "200px", "object-fit", "cover", 3, "src", "alt"], [1, "position-absolute", "top-0", "end-0", "m-2"], [1, "badge", 3, "ngClass"], [1, "position-absolute", "bottom-0", "start-0", "m-2"], [1, "badge", "rounded-pill", 2, "color", "white", "font-size", "11px"], [1, "fw-bold", "mb-2"], [1, "text-decoration-none", "text-dark", 3, "routerLink"], [1, "text-muted", "small", "mb-3", 2, "height", "40px", "overflow", "hidden"], [1, "d-flex", "align-items-center", "mb-3", "small", "text-muted"], [1, "me-3"], [1, "isax", "isax-video-circle", "me-1"], [1, "isax", "isax-clock", "me-1"], [1, "isax", "isax-flag", "me-1"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-flex", "align-items-center", "small", "text-muted"], [1, "isax", "isax-people", "me-1"], [1, "d-flex", "align-items-center", "justify-content-between"], ["title", "Voir les d\xE9tails", 1, "btn", "btn-sm", "btn-outline-primary", "me-2", 3, "routerLink"], [1, "isax", "isax-eye"], ["title", "Modifier", 1, "btn", "btn-sm", "btn-outline-secondary", "me-2", 3, "routerLink"], [1, "isax", "isax-edit-2"], ["title", "Supprimer", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "isax", "isax-trash"], [1, "small", "text-muted"], [1, "badge", "bg-warning"], [1, "isax", "isax-award", "me-1"], [1, "col-12", "text-center", "py-5"], [1, "isax", "isax-book-1", "fs-48", "text-muted", "mb-3"], [1, "text-muted"]], template: function SuperadminCourseGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, SuperadminCourseGridComponent_div_0_Template, 4, 0, "div", 0)(1, SuperadminCourseGridComponent_div_1_Template, 2, 1, "div", 1)(2, SuperadminCourseGridComponent_div_2_Template, 76, 14, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "span", 7);
      \u0275\u0275element(8, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div")(10, "h4", 9);
      \u0275\u0275text(11, "Supprimer la formation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 10);
      \u0275\u0275text(13, "\xCAtes-vous s\xFBr de vouloir supprimer cette formation ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 11)(15, "button", 12);
      \u0275\u0275text(16, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 13);
      \u0275\u0275listener("click", function SuperadminCourseGridComponent_Template_button_click_17_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275text(18, "Oui, Supprimer");
      \u0275\u0275elementEnd()()()()()()();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminCourseGridComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-course-grid", imports: [CommonModule, CustomPaginationComponent, FormsModule, RouterLink], template: `<!-- Loading State -->
<div *ngIf="loading" class="d-flex justify-content-center py-5">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Chargement...</span>
    </div>
</div>

<!-- Error State -->
<div *ngIf="error" class="alert alert-danger" role="alert">
    {{ error }}
</div>

<!-- Main Content -->
<div *ngIf="!loading && !error">
    <!-- Statistics Cards -->
    <div class="row">
        <div class="col-xxl col-lg-4 col-md-6">
            <div class="card bg-success">
                <div class="card-body">
                    <h6 class="fw-medium mb-1 text-white">Formations Publi\xE9es</h6>
                    <h4 class="fw-bold text-white">{{ getActiveFormationsCount() }}</h4>
                </div>
            </div>
        </div>
        <div class="col-xxl col-lg-4 col-md-6">
            <div class="card bg-secondary">
                <div class="card-body">
                    <h6 class="fw-medium mb-1 text-white">En Attente</h6>
                    <h4 class="fw-bold text-white">{{ getPendingFormationsCount() }}</h4>
                </div>
            </div>
        </div>
        <div class="col-xxl col-lg-4 col-md-6">
            <div class="card bg-info">
                <div class="card-body">
                    <h6 class="fw-medium mb-1 text-white">Brouillons</h6>
                    <h4 class="fw-bold text-white">{{ getDraftFormationsCount() }}</h4>
                </div>
            </div>
        </div>
        <div class="col-xxl col-lg-4 col-md-6">
            <div class="card bg-skyblue">
                <div class="card-body">
                    <h6 class="fw-medium mb-1 text-white">Formations Gratuites</h6>
                    <h4 class="fw-bold text-white">{{ getFreeFormationsCount() }}</h4>
                </div>
            </div>
        </div>
        <div class="col-xxl col-lg-4 col-md-6">
            <div class="card bg-purple">
                <div class="card-body">
                    <h6 class="fw-medium mb-1 text-white">Formations Payantes</h6>
                    <h4 class="fw-bold text-white">{{ getPaidFormationsCount() }}</h4>
                </div>
            </div>
        </div>
    </div>

    <!-- Page Header -->
    <div class="page-title d-flex align-items-center justify-content-between">
        <h5 class="fw-bold">Mes Formations ({{ totalData }})</h5>
        <!-- <div class="d-flex align-items-center list-icons">
            <a [routerLink]="routes.instructorCourse" class="me-2"><i class="isax isax-task"></i></a>
            <a [routerLink]="routes.instructorCourseGrid" class="active"><i class="isax isax-element-3"></i></a>
        </div> -->
         <div class="d-flex align-items-center">
        <div class="btn-group me-3" role="group">
            <a [routerLink]="routes.superadminCourse" 
               class="btn btn-outline-primary active">
                <i class="isax isax-task me-1"></i>
                Liste
            </a>
            <a [routerLink]="routes.superadminCourseGrid" 
               class="btn btn-outline-primary">
                <i class="isax isax-element-3 me-1"></i>
                Grille
            </a>
        </div>
        <!-- <button class="btn btn-primary">
            <i class="isax isax-add me-1"></i>
            Nouvelle Formation
        </button> -->
    </div>

    </div>

    <!-- Filters and Search -->
    <div class="row">
        <div class="col-md-8">
            <div class="mb-3">
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle text-gray-6 btn rounded border d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                        Statut
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end p-3">
                        <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="filterByStatus('all')">Toutes</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="filterByStatus('active')">Publi\xE9es</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="filterByStatus('pending')">En attente</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="filterByStatus('draft')">Brouillons</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="input-icon mb-3">
                <span class="input-icon-addon">
                    <i class="isax isax-search-normal-14"></i>
                </span>
                <input [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" 
                       type="search" (ngModelChange)="searchData(searchDataValue)" 
                       class="form-control form-control-md" placeholder="Rechercher une formation...">
            </div>
        </div>
    </div>

    <!-- Grid Layout -->
    <div class="row">
        <div class="col-xl-4 col-lg-6 col-md-6" *ngFor="let formation of tableData; trackBy: trackByFormation">
            <div class="card border-0 shadow-sm mb-4">
                <!-- Image de la formation -->
                <div class="position-relative">
                    <a [routerLink]="['/formateur/formation-details', formation.id]">
                        <img class="card-img-top" 
                             [src]="getFormationImage(formation)" 
                             [alt]="formation.titre"
                             style="height: 200px; object-fit: cover;"
                             onerror="this.src='assets/img/course/course-01.jpg'">
                    </a>
                    
                    <!-- Badge statut -->
                    <div class="position-absolute top-0 end-0 m-2">
                        <span class="badge" [ngClass]="getStatusClass(formation)">
                            {{ getStatusText(formation) }}
                        </span>
                    </div>
                    
                    <!-- Badge prix -->
                    <div class="position-absolute bottom-0 start-0 m-2">
                        <span class="badge" [ngClass]="{'bg-success': isFormationGratuite(formation), 'bg-primary': !isFormationGratuite(formation)}">
                            {{ formatPrix(formation.prix) }}
                        </span>
                    </div>
                </div>

                <!-- Contenu de la carte -->
                <div class="card-body">
                    <!-- Cat\xE9gorie -->
                    <div class="mb-2">
                        <span class="badge rounded-pill" 
                              [style.background-color]="formation.categorie?.couleur || '#6c757d'"
                              style="color: white; font-size: 11px;">
                            {{ formation.categorie?.nom || 'Non d\xE9finie' }}
                        </span>
                    </div>

                    <!-- Titre -->
                    <h6 class="fw-bold mb-2">
                        <a [routerLink]="['/formateur/formation-details', formation.id]" 
                           class="text-decoration-none text-dark">
                            {{ formation.titre }}
                        </a>
                    </h6>

                    <!-- Description courte -->
                    <p class="text-muted small mb-3" style="height: 40px; overflow: hidden;">
                        {{ formation.short_description || formation.description }}
                    </p>

                    <!-- Informations -->
                    <div class="d-flex align-items-center mb-3 small text-muted">
                        <span class="me-3">
                            <i class="isax isax-video-circle me-1"></i>
                            {{ formation.nombre_modules || 0 }} modules
                        </span>
                        <span class="me-3">
                            <i class="isax isax-clock me-1"></i>
                            {{ formation.duree_totale || 0 }}h
                        </span>
                        <span>
                            <i class="isax isax-flag me-1"></i>
                            {{ formation.niveau_display || formation.niveau }}
                        </span>
                    </div>

                    <!-- Participants -->
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="d-flex align-items-center small text-muted">
                            <i class="isax isax-people me-1"></i>
                            <span>{{ formation.nb_participants || 0 }}/{{ formation.nb_max_participants || 0 }} participants</span>
                        </div>
                        
                        <!-- Certification -->
                        <div *ngIf="formation.est_certifiante">
                            <span class="badge bg-warning">
                                <i class="isax isax-award me-1"></i>
                                Certifiante
                            </span>
                        </div>
                    </div>

                    <!-- Actions -->
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center">
                            <a [routerLink]="['/formateur/formation-details', formation.id]" 
                               class="btn btn-sm btn-outline-primary me-2"
                               title="Voir les d\xE9tails">
                                <i class="isax isax-eye"></i>
                            </a>
                            <a [routerLink]="['/formateur/formation-edit', formation.id]" 
                               class="btn btn-sm btn-outline-secondary me-2"
                               title="Modifier">
                                <i class="isax isax-edit-2"></i>
                            </a>
                            <button class="btn btn-sm btn-outline-danger" 
                                    (click)="openDeleteModal(formation)"
                                    title="Supprimer">
                                <i class="isax isax-trash"></i>
                            </button>
                        </div>
                        
                        <div class="small text-muted">
                            {{ formation.type_display || formation.type }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Empty State -->
        <div *ngIf="tableData.length === 0" class="col-12 text-center py-5">
            <i class="isax isax-book-1 fs-48 text-muted mb-3"></i>
            <h5 class="text-muted">Aucune formation trouv\xE9e</h5>
            <p class="text-muted">Commencez par cr\xE9er votre premi\xE8re formation.</p>
        </div>
    </div>

    <!-- Pagination -->
    <app-custom-pagination/>
</div>

<!-- Delete Modal -->
<div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body text-center custom-modal-body">
                <span class="avatar avatar-lg bg-danger-transparent rounded-circle mb-2">
                    <i class="isax isax-trash fs-24 text-danger"></i>
                </span>
                <div>
                    <h4 class="mb-2">Supprimer la formation</h4>
                    <p class="mb-3">\xCAtes-vous s\xFBr de vouloir supprimer cette formation ?</p>
                    <div class="d-flex align-items-center justify-content-center">
                        <button class="btn bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal">Annuler</button>
                        <button class="btn btn-danger rounded-pill" 
                                (click)="confirmDelete()" 
                                data-bs-dismiss="modal">Oui, Supprimer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], () => [{ type: Router }, { type: PaginationService }, { type: FormationService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminCourseGridComponent, { className: "SuperadminCourseGridComponent", filePath: "src/app/features/superadmin/superadmin-course-grid/superadmin-course-grid.component.ts", lineNumber: 33 });
})();
export {
  SuperadminCourseGridComponent
};
//# sourceMappingURL=chunk-RGFEDEZW.js.map
