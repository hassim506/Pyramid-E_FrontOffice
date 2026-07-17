import {
  FormationService
} from "./chunk-R5DFAXQH.js";
import "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-F53JZPBU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-IKOSZIEY.js";
import {
  RouterLink
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-5DIP3EXV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
} from "./chunk-VTSSTHJF.js";
import "./chunk-4MWRP73S.js";

// src/app/features/instructor/instructor-course-grid/instructor-course-grid.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0, a1) => ({ "bg-success": a0, "bg-primary": a1 });
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
function InstructorCourseGridComponent_div_2_div_75_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 73);
    \u0275\u0275element(2, "i", 74);
    \u0275\u0275text(3, " Certifiante ");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseGridComponent_div_2_div_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "div", 45)(3, "a", 46);
    \u0275\u0275element(4, "img", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 48)(6, "span", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 50)(9, "span", 49);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 51)(12, "div", 52)(13, "span", 53);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "h6", 54)(16, "a", 55);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p", 56);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 57)(21, "span", 58);
    \u0275\u0275element(22, "i", 59);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 58);
    \u0275\u0275element(25, "i", 60);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275element(28, "i", 61);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 62)(31, "div", 63);
    \u0275\u0275element(32, "i", 64);
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, InstructorCourseGridComponent_div_2_div_75_div_35_Template, 4, 0, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 65)(37, "div", 66)(38, "a", 67);
    \u0275\u0275element(39, "i", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "a", 69);
    \u0275\u0275element(41, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 70);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_div_75_Template_button_click_42_listener() {
      const formation_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.archiveFormation(formation_r4));
    });
    \u0275\u0275element(43, "i", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 72);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const formation_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "/courses/course-details/" + formation_r4.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.getFormationImage(formation_r4), \u0275\u0275sanitizeUrl)("alt", formation_r4.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getStatusClass(formation_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusText(formation_r4), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(22, _c1, ctx_r0.isFormationGratuite(formation_r4), !ctx_r0.isFormationGratuite(formation_r4)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatPrix(formation_r4.prix), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-color", (formation_r4.categorie == null ? null : formation_r4.categorie.couleur) || "#6c757d");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (formation_r4.categorie == null ? null : formation_r4.categorie.nom) || "Non d\xE9finie", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "/courses/course-details/" + formation_r4.id, \u0275\u0275sanitizeUrl);
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
    \u0275\u0275property("href", "/courses/course-details/" + formation_r4.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "/courses/instructor-course-edit/" + formation_r4.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", formation_r4.type_display || formation_r4.type, " ");
  }
}
function InstructorCourseGridComponent_div_2_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275element(1, "i", 76);
    \u0275\u0275elementStart(2, "h5", 77);
    \u0275\u0275text(3, "Aucune formation trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 77);
    \u0275\u0275text(5, "Commencez par cr\xE9er votre premi\xE8re formation.");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseGridComponent_div_2_div_77_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_div_77_button_6_Template_button_click_0_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onPageChange(p_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", p_r7 === ctx_r0.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r7);
  }
}
function InstructorCourseGridComponent_div_2_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "span", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 80)(4, "button", 81);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_div_77_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPageChange(ctx_r0.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, InstructorCourseGridComponent_div_2_div_77_button_6_Template, 2, 3, "button", 83);
    \u0275\u0275elementStart(7, "button", 81);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_div_77_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPageChange(ctx_r0.currentPage + 1));
    });
    \u0275\u0275element(8, "i", 84);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.totalData, " formation", ctx_r0.totalData > 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.getPageNumbers());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage * ctx_r0.pageSize >= ctx_r0.totalData);
  }
}
function InstructorCourseGridComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 7)(2, "div", 8)(3, "div", 9);
    \u0275\u0275element(4, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 12);
    \u0275\u0275text(9, "Publi\xE9es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 13);
    \u0275\u0275element(12, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "div", 11);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 12);
    \u0275\u0275text(17, "En attente");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 8)(19, "div", 15);
    \u0275\u0275element(20, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div")(22, "div", 11);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 12);
    \u0275\u0275text(25, "Brouillons");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 8)(27, "div", 17);
    \u0275\u0275element(28, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div")(30, "div", 11);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 12);
    \u0275\u0275text(33, "Gratuites");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 8)(35, "div", 19);
    \u0275\u0275element(36, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div")(38, "div", 11);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 12);
    \u0275\u0275text(41, "Payantes");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 21)(43, "h5", 22);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 23)(46, "a", 24);
    \u0275\u0275element(47, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "a", 26);
    \u0275\u0275element(49, "i", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 28)(51, "div", 29)(52, "div", 30)(53, "div", 31)(54, "a", 32);
    \u0275\u0275text(55, " Statut ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "ul", 33)(57, "li")(58, "a", 34);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_Template_a_click_58_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterByStatus("all"));
    });
    \u0275\u0275text(59, "Toutes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "li")(61, "a", 34);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_Template_a_click_61_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterByStatus("active"));
    });
    \u0275\u0275text(62, "Publi\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "li")(64, "a", 34);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_Template_a_click_64_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterByStatus("pending"));
    });
    \u0275\u0275text(65, "En attente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "li")(67, "a", 34);
    \u0275\u0275listener("click", function InstructorCourseGridComponent_div_2_Template_a_click_67_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterByStatus("draft"));
    });
    \u0275\u0275text(68, "Brouillons");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(69, "div", 35)(70, "div", 36)(71, "span", 37);
    \u0275\u0275element(72, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseGridComponent_div_2_Template_input_ngModelChange_73_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchDataValue, $event) || (ctx_r0.searchDataValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function InstructorCourseGridComponent_div_2_Template_input_ngModelChange_73_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.searchData(ctx_r0.searchDataValue));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(74, "div", 28);
    \u0275\u0275template(75, InstructorCourseGridComponent_div_2_div_75_Template, 46, 25, "div", 40)(76, InstructorCourseGridComponent_div_2_div_76_Template, 6, 0, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(77, InstructorCourseGridComponent_div_2_div_77_Template, 9, 5, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.getActiveFormationsCount());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.getPendingFormationsCount());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.getDraftFormationsCount());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.getFreeFormationsCount());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.getPaidFormationsCount());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Mes Formations (", ctx_r0.totalData, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.instructorCourse);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.instructorCourseGrid);
    \u0275\u0275advance(25);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchDataValue);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(14, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.tableData)("ngForTrackBy", ctx_r0.trackByFormation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tableData.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.totalData > ctx_r0.pageSize);
  }
}
var InstructorCourseGridComponent = class _InstructorCourseGridComponent {
  formationService;
  routes = routes;
  loading = false;
  error = "";
  allFormations = [];
  tableData = [];
  totalData = 0;
  currentPage = 1;
  pageSize = 12;
  searchDataValue = "";
  statusFilter = "all";
  _filtered = [];
  constructor(formationService) {
    this.formationService = formationService;
  }
  ngOnInit() {
    this.loadFormations();
  }
  loadFormations() {
    this.loading = true;
    this.error = "";
    this.formationService.getFormationsformateur().subscribe({
      next: (response) => {
        this.allFormations = response.formations || [];
        this.loading = false;
        this.applyFilters();
      },
      error: () => {
        this.error = "Erreur lors du chargement des formations";
        this.loading = false;
      }
    });
  }
  applyFilters() {
    let filtered = [...this.allFormations];
    if (this.searchDataValue.trim()) {
      const q = this.searchDataValue.toLowerCase();
      filtered = filtered.filter((f) => f.titre?.toLowerCase().includes(q) || f.description?.toLowerCase().includes(q));
    }
    if (this.statusFilter !== "all") {
      filtered = filtered.filter((f) => {
        const published = f.est_publie === true || f.est_publie === 1;
        if (this.statusFilter === "active")
          return published;
        if (this.statusFilter === "draft")
          return !published;
        if (this.statusFilter === "pending")
          return f.statut === "pending" || f.statut === "en_attente";
        return true;
      });
    }
    this.totalData = filtered.length;
    this.currentPage = 1;
    this._filtered = filtered;
    this.tableData = filtered.slice(0, this.pageSize);
  }
  searchData(value) {
    this.searchDataValue = value;
    this.applyFilters();
  }
  filterByStatus(status) {
    this.statusFilter = status;
    this.applyFilters();
  }
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
  // ── KPI ──────────────────────────────────────
  getActiveFormationsCount() {
    return this.allFormations.filter((f) => f.est_publie === true || f.est_publie === 1).length;
  }
  getPendingFormationsCount() {
    return this.allFormations.filter((f) => f.statut === "pending" || f.statut === "en_attente").length;
  }
  getDraftFormationsCount() {
    return this.allFormations.filter((f) => !f.est_publie || f.est_publie === 0).length;
  }
  getFreeFormationsCount() {
    return this.allFormations.filter((f) => !f.prix || parseFloat(f.prix) === 0).length;
  }
  getPaidFormationsCount() {
    return this.allFormations.filter((f) => f.prix && parseFloat(f.prix) > 0).length;
  }
  // ── Helpers ───────────────────────────────────
  isFormationGratuite(f) {
    return !f.prix || parseFloat(f.prix) === 0;
  }
  formatPrix(prix) {
    return !prix || parseFloat(prix) === 0 ? "Gratuit" : `${Math.round(parseFloat(prix))} XOF`;
  }
  getFormationImage(f) {
    return this.formationService.getImageUrl(f.image_couverture || f.image_url || f.image || f.photo);
  }
  getStatusClass(f) {
    return f.est_publie === true || f.est_publie === 1 ? "bg-success" : "bg-secondary";
  }
  getStatusText(f) {
    return f.est_publie === true || f.est_publie === 1 ? "Publi\xE9" : "Brouillon";
  }
  trackByFormation(_, f) {
    return f.id || _;
  }
  archiveFormation(formation) {
    if (!confirm(`Archiver la formation "${formation.titre}" ?`))
      return;
    this.formationService.deleteFormation(formation.id).subscribe({
      next: () => this.loadFormations()
    });
  }
  static \u0275fac = function InstructorCourseGridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorCourseGridComponent)(\u0275\u0275directiveInject(FormationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorCourseGridComponent, selectors: [["app-instructor-course-grid"]], decls: 3, vars: 3, consts: [["class", "d-flex justify-content-center py-5", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "justify-content-center", "py-5"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], ["role", "alert", 1, "alert", "alert-danger"], [1, "icg-kpi-row"], [1, "icg-kpi"], [1, "icg-kpi__icon", "ki-green"], [1, "isax", "isax-tick-circle"], [1, "icg-kpi__val"], [1, "icg-kpi__lbl"], [1, "icg-kpi__icon", "ki-amber"], [1, "isax", "isax-clock"], [1, "icg-kpi__icon", "ki-blue"], [1, "isax", "isax-edit-2"], [1, "icg-kpi__icon", "ki-teal"], [1, "isax", "isax-tag"], [1, "icg-kpi__icon", "ki-purple"], [1, "isax", "isax-dollar-circle"], [1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold"], [1, "d-flex", "align-items-center", "list-icons"], [1, "me-2", 3, "routerLink"], [1, "isax", "isax-task"], [1, "active", 3, "routerLink"], [1, "isax", "isax-element-3"], [1, "row"], [1, "col-md-8"], [1, "mb-3"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "text-gray-6", "btn", "rounded", "border", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1", 3, "click"], [1, "col-md-4"], [1, "input-icon", "mb-3"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal-14"], ["type", "search", "placeholder", "Rechercher une formation...", 1, "form-control", "form-control-md", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "col-xl-4 col-lg-6 col-md-6", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "col-12 text-center py-5", 4, "ngIf"], ["class", "icg-pagination", 4, "ngIf"], [1, "col-xl-4", "col-lg-6", "col-md-6"], [1, "card", "border-0", "shadow-sm", "mb-4"], [1, "position-relative"], ["target", "_blank", 3, "href"], ["onerror", "this.src='assets/img/course/course-01.jpg'", 1, "card-img-top", 2, "height", "200px", "object-fit", "cover", 3, "src", "alt"], [1, "position-absolute", "top-0", "end-0", "m-2"], [1, "badge", 3, "ngClass"], [1, "position-absolute", "bottom-0", "start-0", "m-2"], [1, "card-body"], [1, "mb-2"], [1, "badge", "rounded-pill", 2, "color", "white", "font-size", "11px"], [1, "fw-bold", "mb-2"], ["target", "_blank", 1, "text-decoration-none", "text-dark", 3, "href"], [1, "text-muted", "small", "mb-3", 2, "height", "40px", "overflow", "hidden"], [1, "d-flex", "align-items-center", "mb-3", "small", "text-muted"], [1, "me-3"], [1, "isax", "isax-video-circle", "me-1"], [1, "isax", "isax-clock", "me-1"], [1, "isax", "isax-flag", "me-1"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-flex", "align-items-center", "small", "text-muted"], [1, "isax", "isax-people", "me-1"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], ["target", "_blank", "title", "Voir les d\xE9tails", 1, "btn", "btn-sm", "btn-outline-primary", "me-2", 3, "href"], [1, "isax", "isax-eye"], ["target", "_blank", "title", "Modifier", 1, "btn", "btn-sm", "btn-outline-secondary", "me-2", 3, "href"], ["title", "Archiver", 1, "btn", "btn-sm", "btn-outline-warning", 3, "click"], [1, "isax", "isax-archive"], [1, "small", "text-muted"], [1, "badge", "bg-warning"], [1, "isax", "isax-award", "me-1"], [1, "col-12", "text-center", "py-5"], [1, "isax", "isax-book-1", "fs-48", "text-muted", "mb-3"], [1, "text-muted"], [1, "icg-pagination"], [1, "pg-info"], [1, "pg-controls"], ["type", "button", 1, "pg-btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], ["type", "button", "class", "pg-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-2"], ["type", "button", 1, "pg-btn", 3, "click"]], template: function InstructorCourseGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, InstructorCourseGridComponent_div_0_Template, 4, 0, "div", 0)(1, InstructorCourseGridComponent_div_1_Template, 2, 1, "div", 1)(2, InstructorCourseGridComponent_div_2_Template, 78, 15, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ["\n\n.icg-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 16px;\n  margin-bottom: 20px;\n}\n@media (max-width: 1100px) {\n  .icg-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .icg-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.icg-kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 14px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.icg-kpi__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.icg-kpi__val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1A1A2E;\n  line-height: 1;\n}\n.icg-kpi__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 3px;\n}\n.ki-green[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ki-amber[_ngcontent-%COMP%] {\n  background: #FFFBEB;\n  color: #D97706;\n}\n.ki-blue[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.ki-teal[_ngcontent-%COMP%] {\n  background: #F0FDFA;\n  color: #0D9488;\n}\n.ki-purple[_ngcontent-%COMP%] {\n  background: #F5F3FF;\n  color: #7C3AED;\n}\n.icg-card-img[_ngcontent-%COMP%] {\n  height: 200px;\n  object-fit: cover;\n}\n.icg-categorie-badge[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 11px;\n}\n.icg-desc[_ngcontent-%COMP%] {\n  height: 40px;\n  overflow: hidden;\n}\n.icg-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 4px;\n  margin-top: 8px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.pg-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6C757D;\n}\n.pg-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pg-btn[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 12px;\n  transition: all 0.12s;\n  padding: 0 8px;\n}\n.pg-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #534AB7;\n  color: #534AB7;\n  background: #EEF2FF;\n}\n.pg-btn.active[_ngcontent-%COMP%] {\n  background: #534AB7;\n  border-color: #534AB7;\n  color: #fff;\n}\n.pg-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=instructor-course-grid.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorCourseGridComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-course-grid", imports: [CommonModule, FormsModule, RouterLink], template: `<!-- Loading State -->\r
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
    <!-- KPI row -->\r
    <div class="icg-kpi-row">\r
      <div class="icg-kpi">\r
        <div class="icg-kpi__icon ki-green"><i class="isax isax-tick-circle"></i></div>\r
        <div><div class="icg-kpi__val">{{ getActiveFormationsCount() }}</div><div class="icg-kpi__lbl">Publi\xE9es</div></div>\r
      </div>\r
      <div class="icg-kpi">\r
        <div class="icg-kpi__icon ki-amber"><i class="isax isax-clock"></i></div>\r
        <div><div class="icg-kpi__val">{{ getPendingFormationsCount() }}</div><div class="icg-kpi__lbl">En attente</div></div>\r
      </div>\r
      <div class="icg-kpi">\r
        <div class="icg-kpi__icon ki-blue"><i class="isax isax-edit-2"></i></div>\r
        <div><div class="icg-kpi__val">{{ getDraftFormationsCount() }}</div><div class="icg-kpi__lbl">Brouillons</div></div>\r
      </div>\r
      <div class="icg-kpi">\r
        <div class="icg-kpi__icon ki-teal"><i class="isax isax-tag"></i></div>\r
        <div><div class="icg-kpi__val">{{ getFreeFormationsCount() }}</div><div class="icg-kpi__lbl">Gratuites</div></div>\r
      </div>\r
      <div class="icg-kpi">\r
        <div class="icg-kpi__icon ki-purple"><i class="isax isax-dollar-circle"></i></div>\r
        <div><div class="icg-kpi__val">{{ getPaidFormationsCount() }}</div><div class="icg-kpi__lbl">Payantes</div></div>\r
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
                <input [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }"\r
                       type="search" (ngModelChange)="searchData(searchDataValue)"\r
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
                    <a [href]="'/courses/course-details/' + formation.id" target="_blank">\r
                        <img class="card-img-top"\r
                             [src]="getFormationImage(formation)"\r
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
                        <span class="badge rounded-pill"\r
                              [style.background-color]="formation.categorie?.couleur || '#6c757d'"\r
                              style="color: white; font-size: 11px;">\r
                            {{ formation.categorie?.nom || 'Non d\xE9finie' }}\r
                        </span>\r
                    </div>\r
\r
                    <!-- Titre -->\r
                    <h6 class="fw-bold mb-2">\r
                        <a [href]="'/courses/course-details/' + formation.id" target="_blank"\r
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
                            <a [href]="'/courses/course-details/' + formation.id" target="_blank"\r
                               class="btn btn-sm btn-outline-primary me-2"\r
                               title="Voir les d\xE9tails">\r
                                <i class="isax isax-eye"></i>\r
                            </a>\r
                            <a [href]="'/courses/instructor-course-edit/' + formation.id" target="_blank"\r
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
    <div class="icg-pagination" *ngIf="totalData > pageSize">\r
      <span class="pg-info">{{ totalData }} formation{{ totalData > 1 ? 's' : '' }}</span>\r
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
`, styles: ["/* src/app/features/instructor/instructor-course-grid/instructor-course-grid.component.scss */\n.icg-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 16px;\n  margin-bottom: 20px;\n}\n@media (max-width: 1100px) {\n  .icg-kpi-row {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .icg-kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.icg-kpi {\n  background: #fff;\n  border: 1px solid #E9ECEF;\n  border-radius: 10px;\n  padding: 14px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.icg-kpi__icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n.icg-kpi__val {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1A1A2E;\n  line-height: 1;\n}\n.icg-kpi__lbl {\n  font-size: 11px;\n  color: #6C757D;\n  margin-top: 3px;\n}\n.ki-green {\n  background: #ECFDF5;\n  color: #059669;\n}\n.ki-amber {\n  background: #FFFBEB;\n  color: #D97706;\n}\n.ki-blue {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.ki-teal {\n  background: #F0FDFA;\n  color: #0D9488;\n}\n.ki-purple {\n  background: #F5F3FF;\n  color: #7C3AED;\n}\n.icg-card-img {\n  height: 200px;\n  object-fit: cover;\n}\n.icg-categorie-badge {\n  color: #fff;\n  font-size: 11px;\n}\n.icg-desc {\n  height: 40px;\n  overflow: hidden;\n}\n.icg-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 4px;\n  margin-top: 8px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.pg-info {\n  font-size: 12px;\n  color: #6C757D;\n}\n.pg-controls {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pg-btn {\n  min-width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  border: 1px solid #E9ECEF;\n  background: #fff;\n  color: #6C757D;\n  cursor: pointer;\n  font-size: 12px;\n  transition: all 0.12s;\n  padding: 0 8px;\n}\n.pg-btn:hover:not(:disabled) {\n  border-color: #534AB7;\n  color: #534AB7;\n  background: #EEF2FF;\n}\n.pg-btn.active {\n  background: #534AB7;\n  border-color: #534AB7;\n  color: #fff;\n}\n.pg-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=instructor-course-grid.component.css.map */\n"] }]
  }], () => [{ type: FormationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorCourseGridComponent, { className: "InstructorCourseGridComponent", filePath: "app/features/instructor/instructor-course-grid/instructor-course-grid.component.ts", lineNumber: 14 });
})();
export {
  InstructorCourseGridComponent
};
//# sourceMappingURL=chunk-JAKJRWWT.js.map
