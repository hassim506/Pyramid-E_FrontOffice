import {
  CustomPaginationComponent
} from "./chunk-Z2HA3X3F.js";
import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-62IXQG2C.js";
import "./chunk-YIMRJUCQ.js";
import {
  FormationService
} from "./chunk-SRQJ2PQ4.js";
import "./chunk-D4V2IZRR.js";
import "./chunk-AHGPUK2P.js";
import "./chunk-FKX6UC3I.js";
import {
  routes
} from "./chunk-W6FAPSPW.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-AK2M3J6O.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-AJNKO2CX.js";
import "./chunk-FZP3BRBS.js";
import "./chunk-GSAJL664.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-3IMMP55I.js";
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
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UPBSS6WA.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/superadmin/superadmin-course/superadmin-course.component.ts
var _c0 = (a0, a1) => [a0, a1];
var _c1 = (a0, a1) => ({ "badge bg-success": a0, "fw-medium text-primary": a1 });
function SuperadminCourseComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 56);
    \u0275\u0275listener("click", function SuperadminCourseComponent_div_56_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function SuperadminCourseComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "div", 59)(3, "span", 60);
    \u0275\u0275text(4, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 61);
    \u0275\u0275text(6, "Chargement des formations...");
    \u0275\u0275elementEnd()()();
  }
}
function SuperadminCourseComponent_button_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function SuperadminCourseComponent_button_118_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.searchDataValue = "";
      return \u0275\u0275resetView(ctx_r1.searchData(""));
    });
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275elementEnd();
  }
}
function SuperadminCourseComponent_div_119_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 84)(1, "td", 85)(2, "div", 22)(3, "div", 86);
    \u0275\u0275element(4, "img", 87);
    \u0275\u0275elementStart(5, "div", 88)(6, "span", 89);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 90)(9, "h6", 91)(10, "a", 92);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 93)(13, "span", 94);
    \u0275\u0275element(14, "i", 95);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 94);
    \u0275\u0275element(17, "i", 96);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275element(20, "i", 97);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(22, "td")(23, "span", 98);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td")(26, "div", 22)(27, "div", 99);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div")(30, "div", 100);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "small", 21);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "td", 58)(35, "div", 101);
    \u0275\u0275element(36, "i", 102);
    \u0275\u0275elementStart(37, "span", 103);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "td", 58)(40, "span", 104);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "td", 58)(43, "span", 105);
    \u0275\u0275element(44, "i", 81);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "td", 58)(47, "span", 106);
    \u0275\u0275element(48, "i", 107);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "td", 82)(51, "div", 108)(52, "a", 109);
    \u0275\u0275element(53, "i", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "a", 111);
    \u0275\u0275element(55, "i", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 113);
    \u0275\u0275listener("click", function SuperadminCourseComponent_div_119_tr_35_Template_button_click_56_listener() {
      const formation_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteFormation(formation_r6));
    });
    \u0275\u0275element(57, "i", 114);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const formation_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.getDefaultImage(formation_r6), \u0275\u0275sanitizeUrl)("alt", formation_r6.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", formation_r6.nombre_modules || 0, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(22, _c0, ctx_r1.routes.courseDetails, formation_r6.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", formation_r6.titre, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", formation_r6.niveau_display || formation_r6.niveau, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", formation_r6.langue || "FR", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", formation_r6.difficulte, " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", (formation_r6.categorie == null ? null : formation_r6.categorie.couleur) || "#6c757d");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (formation_r6.categorie == null ? null : formation_r6.categorie.nom) || "Non d\xE9finie", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ((formation_r6.formateur == null ? null : formation_r6.formateur.prenom == null ? null : formation_r6.formateur.prenom.charAt(0)) || "F") + ((formation_r6.formateur == null ? null : formation_r6.formateur.nom == null ? null : formation_r6.formateur.nom.charAt(0)) || "X"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(formation_r6.formateur_nom || "Non assign\xE9");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((formation_r6.formateur == null ? null : formation_r6.formateur.fonction) || "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(formation_r6.nb_max_participants || 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(25, _c1, ctx_r1.isFormationGratuite(formation_r6), !ctx_r1.isFormationGratuite(formation_r6)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatPrix(formation_r6.prix), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", formation_r6.duree_totale || 0, "h ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(formation_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusText(formation_r6), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(28, _c0, ctx_r1.routes.courseDetails, formation_r6.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(31, _c0, ctx_r1.routes.courseDetails, formation_r6.id));
  }
}
function SuperadminCourseComponent_div_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65)(2, "div", 4)(3, "h6", 66);
    \u0275\u0275element(4, "i", 67);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 68)(9, "table", 69);
    \u0275\u0275listener("matSortChange", function SuperadminCourseComponent_div_119_Template_table_matSortChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortData($event));
    });
    \u0275\u0275elementStart(10, "thead", 70)(11, "tr")(12, "th", 71);
    \u0275\u0275element(13, "i", 72);
    \u0275\u0275text(14, "Formation ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275element(16, "i", 73);
    \u0275\u0275text(17, "Cat\xE9gorie ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 74);
    \u0275\u0275element(19, "i", 75);
    \u0275\u0275text(20, "Formateur ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 76);
    \u0275\u0275element(22, "i", 77);
    \u0275\u0275text(23, "Participants ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 78);
    \u0275\u0275element(25, "i", 79);
    \u0275\u0275text(26, "Co\xFBt ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 80);
    \u0275\u0275element(28, "i", 81);
    \u0275\u0275text(29, "Dur\xE9e ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 58);
    \u0275\u0275text(31, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th", 82);
    \u0275\u0275text(33, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "tbody");
    \u0275\u0275template(35, SuperadminCourseComponent_div_119_tr_35_Template, 58, 34, "tr", 83);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Liste des Formations (", ctx_r1.totalData, " r\xE9sultats) ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Affichage ", ctx_r1.serialNumberArray[0] || 0, " - ", ctx_r1.serialNumberArray[ctx_r1.serialNumberArray.length - 1] || 0, " sur ", ctx_r1.totalData, " ");
    \u0275\u0275advance(28);
    \u0275\u0275property("ngForOf", ctx_r1.formations)("ngForTrackBy", ctx_r1.trackByFormation);
  }
}
function SuperadminCourseComponent_div_120_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Aucun r\xE9sultat ne correspond \xE0 vos crit\xE8res de recherche. ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminCourseComponent_div_120_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Il n'y a actuellement aucune formation pour votre entreprise. ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminCourseComponent_div_120_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 125);
    \u0275\u0275listener("click", function SuperadminCourseComponent_div_120_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.searchDataValue = "";
      ctx_r1.selectedStatus = "";
      return \u0275\u0275resetView(ctx_r1.searchData(""));
    });
    \u0275\u0275element(1, "i", 126);
    \u0275\u0275text(2, " R\xE9initialiser les filtres ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminCourseComponent_div_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "div", 116);
    \u0275\u0275element(2, "i", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 118);
    \u0275\u0275text(4, "Aucune formation trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 119);
    \u0275\u0275template(6, SuperadminCourseComponent_div_120_span_6_Template, 2, 0, "span", 120)(7, SuperadminCourseComponent_div_120_span_7_Template, 2, 0, "span", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 121);
    \u0275\u0275template(9, SuperadminCourseComponent_div_120_button_9_Template, 3, 0, "button", 122);
    \u0275\u0275elementStart(10, "button", 123);
    \u0275\u0275element(11, "i", 124);
    \u0275\u0275text(12, " Cr\xE9er une formation ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.searchDataValue || ctx_r1.selectedStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.searchDataValue && !ctx_r1.selectedStatus);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.searchDataValue || ctx_r1.selectedStatus);
  }
}
function SuperadminCourseComponent_app_custom_pagination_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-custom-pagination", 127);
    \u0275\u0275listener("pageChange", function SuperadminCourseComponent_app_custom_pagination_121_Template_app_custom_pagination_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("totalItems", ctx_r1.totalData)("pageSize", ctx_r1.pageSize)("currentPage", ctx_r1.currentPage);
  }
}
var SuperadminCourseComponent = class _SuperadminCourseComponent {
  formationService;
  route;
  routes = routes;
  allFormations = [];
  formations = [];
  searchDataValue = "";
  selectedStatus = "";
  loading = false;
  error = "";
  currentPage = 1;
  pageSize = 10;
  serialNumberArray = [];
  totalData = 0;
  stats = { active: 0, pending: 0, draft: 0, free: 0, paid: 0 };
  entrepriseId = null;
  pageNumberArray = [];
  totalPages = 0;
  skip = 0;
  limit = 10;
  constructor(formationService, route) {
    this.formationService = formationService;
    this.route = route;
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const id = params.get("entreprise_id");
      this.entrepriseId = id ? +id : null;
      this.getFormationsList();
    });
  }
  // ✅ prix est string | number | undefined
  isFormationGratuite(formation) {
    return parseFloat(String(formation.prix ?? 0)) === 0;
  }
  formatPrix(prix) {
    const montant = parseFloat(String(prix ?? 0));
    return montant === 0 ? "Gratuit" : `${montant.toFixed(2)} FCFA`;
  }
  trackByFormation(index, formation) {
    return formation.id;
  }
  onPageChange(page) {
    this.currentPage = page;
    this.skip = (page - 1) * this.pageSize;
    this.getTableData(this.skip, this.pageSize);
  }
  getFormationsList() {
    this.loading = true;
    this.error = "";
    this.formations = [];
    this.formationService.getFormations(__spreadValues({ page: 1, limit: 10 }, this.entrepriseId ? { entreprise_id: this.entrepriseId } : {})).subscribe({
      next: (response) => {
        if (response.status && response.formations) {
          this.allFormations = response.formations;
          this.formations = [...this.allFormations];
          this.totalData = this.formations.length;
          this.calculateStats();
          this.calculateTotalPages(this.totalData, this.pageSize);
        } else {
          this.error = "Aucune formation trouv\xE9e";
        }
        this.loading = false;
      },
      error: (error) => {
        console.error("Erreur chargement formations:", error);
        this.error = "Erreur lors du chargement des formations";
        this.loading = false;
      }
    });
  }
  calculateStats() {
    this.stats = {
      active: this.allFormations.filter((f) => f.est_publie && f.inscription_ouverte).length,
      pending: this.allFormations.filter((f) => !f.est_publie && !f.inscription_ouverte).length,
      draft: this.allFormations.filter((f) => !f.est_publie).length,
      free: this.allFormations.filter((f) => this.isFormationGratuite(f)).length,
      paid: this.allFormations.filter((f) => !this.isFormationGratuite(f)).length
    };
  }
  calculateTotalPages(totalData, pageSize) {
    this.pageNumberArray = [];
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 !== 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    for (let i = 1; i <= this.totalPages; i++) {
      const limit = pageSize * i;
      const skip = limit - pageSize;
      this.pageNumberArray.push({ skip, limit });
    }
  }
  getTableData(skip, limit) {
    this.serialNumberArray = [];
    this.formations = [];
    let filteredData = [...this.allFormations];
    if (this.selectedStatus) {
      switch (this.selectedStatus.toLowerCase()) {
        case "published":
          filteredData = filteredData.filter((f) => f.est_publie && f.inscription_ouverte);
          break;
        case "pending":
          filteredData = filteredData.filter((f) => !f.est_publie && !f.inscription_ouverte);
          break;
        case "draft":
          filteredData = filteredData.filter((f) => !f.est_publie);
          break;
      }
    }
    if (this.searchDataValue) {
      const search = this.searchDataValue.toLowerCase();
      filteredData = filteredData.filter((f) => f.titre?.toLowerCase().includes(search) || f.description?.toLowerCase().includes(search) || f.formateur_nom?.toLowerCase().includes(search) || f.categorie?.nom?.toLowerCase().includes(search));
    }
    this.totalData = filteredData.length;
    this.calculateTotalPages(this.totalData, this.pageSize);
    const start = skip;
    const end = Math.min(skip + limit, this.totalData);
    for (let i = start; i < end; i++) {
      this.serialNumberArray.push(i + 1);
    }
    this.formations = filteredData.slice(start, end);
  }
  searchData(searchValue) {
    this.searchDataValue = searchValue;
    this.skip = 0;
    this.getTableData(this.skip, this.limit);
  }
  filterByStatus(status) {
    this.selectedStatus = status;
    this.skip = 0;
    this.getTableData(this.skip, this.limit);
  }
  sortData(sort) {
    if (!sort.active || sort.direction === "")
      return;
    this.allFormations.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "titre":
          return this.compare(a.titre ?? "", b.titre ?? "", isAsc);
        case "formateur":
          return this.compare(a.formateur_nom ?? "", b.formateur_nom ?? "", isAsc);
        case "prix":
          return this.compare(parseFloat(String(a.prix ?? 0)), parseFloat(String(b.prix ?? 0)), isAsc);
        case "duree":
          return this.compare(a.duree_totale ?? 0, b.duree_totale ?? 0, isAsc);
        case "participants":
          return this.compare(a.nb_max_participants ?? 0, b.nb_max_participants ?? 0, isAsc);
        default:
          return 0;
      }
    });
    this.getTableData(this.skip, this.limit);
  }
  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  getMoreData(event) {
    if (event === "next") {
      this.skip += this.limit;
      this.getTableData(this.skip, this.limit);
    } else if (event === "previous") {
      this.skip -= this.limit;
      this.getTableData(this.skip, this.limit);
    }
  }
  moveToPage(pageNumber) {
    this.skip = this.pageNumberArray[pageNumber - 1].skip;
    this.limit = this.pageNumberArray[pageNumber - 1].limit - this.skip;
    this.getTableData(this.skip, this.limit);
  }
  PageSize() {
    this.skip = 0;
    this.getTableData(this.skip, this.pageSize);
  }
  getStatusClass(formation) {
    if (formation.est_publie && formation.inscription_ouverte)
      return "bg-success";
    if (!formation.est_publie)
      return "bg-info";
    return "bg-secondary";
  }
  getStatusText(formation) {
    if (formation.est_publie && formation.inscription_ouverte)
      return "Publi\xE9";
    if (!formation.est_publie)
      return "Brouillon";
    return "En attente";
  }
  getDefaultImage(formation) {
    return this.formationService.getImageUrl(formation.image_couverture);
  }
  deleteFormation(formation) {
    if (confirm(`\xCAtes-vous s\xFBr de vouloir supprimer la formation "${formation.titre}" ?`)) {
      this.loading = true;
      this.formationService.deleteFormation(formation.id).subscribe({
        next: () => this.getFormationsList(),
        error: (error) => {
          console.error("Erreur suppression:", error);
          this.error = "Erreur lors de la suppression de la formation";
          this.loading = false;
        }
      });
    }
  }
  static \u0275fac = function SuperadminCourseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminCourseComponent)(\u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminCourseComponent, selectors: [["app-superadmin-course"]], decls: 122, vars: 16, consts: [[1, "row", "mb-4"], [1, "col-xxl", "col-lg-4", "col-md-6", "mb-3"], [1, "card", "bg-success", "shadow-sm", "border-0"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "fw-medium", "mb-1", "text-white"], [1, "fw-bold", "text-white", "mb-0"], [1, "text-white", "opacity-75"], [1, "isax", "isax-tick-circle", "fs-1"], [1, "card", "bg-warning", "shadow-sm", "border-0"], [1, "isax", "isax-clock", "fs-1"], [1, "card", "bg-info", "shadow-sm", "border-0"], [1, "isax", "isax-document", "fs-1"], [1, "card", "bg-success", "shadow-sm", "border-0", 2, "background", "linear-gradient(135deg, #28a745 0%, #20c997 100%) !important"], [1, "isax", "isax-gift", "fs-1"], [1, "card", "bg-primary", "shadow-sm", "border-0", 2, "background", "linear-gradient(135deg, #6f42c1 0%, #007bff 100%) !important"], [1, "isax", "isax-dollar-circle", "fs-1"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "d-flex justify-content-center align-items-center py-5", 4, "ngIf"], [1, "page-title", "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "fw-bold", "mb-1"], [1, "text-muted"], [1, "d-flex", "align-items-center"], ["role", "group", 1, "btn-group", "me-3"], [1, "btn", "btn-outline-primary", "active", 3, "routerLink"], [1, "isax", "isax-task", "me-1"], [1, "btn", "btn-outline-primary", 3, "routerLink"], [1, "isax", "isax-element-3", "me-1"], [1, "card", "border-0", "shadow-sm", "mb-4"], [1, "row", "g-3"], [1, "col-md-3"], [1, "form-label", "fw-medium"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-secondary", "dropdown-toggle", "w-100", "text-start"], [1, "isax", "isax-filter", "me-2"], [1, "dropdown-menu", "w-100"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"], [1, "isax", "isax-tick-circle", "me-2", "text-success"], [1, "isax", "isax-clock", "me-2", "text-warning"], [1, "isax", "isax-document", "me-2", "text-info"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", "5"], ["value", "10"], ["value", "25"], ["value", "50"], [1, "col-md-6"], [1, "position-relative"], ["type", "search", "placeholder", "Rechercher par titre, description, formateur ou cat\xE9gorie...", 1, "form-control", "ps-5", 3, "ngModelChange", "ngModel"], [1, "position-absolute", "top-50", "start-0", "translate-middle-y", "ms-3"], [1, "isax", "isax-search-normal-1", "text-muted"], ["class", "btn btn-sm btn-outline-secondary position-absolute top-50 end-0 translate-middle-y me-2", "type", "button", 3, "click", 4, "ngIf"], ["class", "card border-0 shadow-sm", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], [3, "totalItems", "pageSize", "currentPage", "pageChange", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "isax", "isax-warning-2", "me-2"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center", "py-5"], [1, "text-center"], ["role", "status", 1, "spinner-border", "text-primary", 2, "width", "3rem", "height", "3rem"], [1, "visually-hidden"], [1, "mt-3", "text-muted"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "position-absolute", "top-50", "end-0", "translate-middle-y", "me-2", 3, "click"], [1, "isax", "isax-close-circle"], [1, "card", "border-0", "shadow-sm"], [1, "card-header", "bg-white", "border-bottom"], [1, "mb-0", "fw-medium"], [1, "isax", "isax-book", "me-2", "text-primary"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-hover", "mb-0", 3, "matSortChange"], [1, "table-light"], ["mat-sort-header", "titre", 1, "ps-4"], [1, "isax", "isax-book", "me-1"], [1, "isax", "isax-category", "me-1"], ["mat-sort-header", "formateur"], [1, "isax", "isax-user", "me-1"], ["mat-sort-header", "participants", 1, "text-center"], [1, "isax", "isax-people", "me-1"], ["mat-sort-header", "prix", 1, "text-center"], [1, "isax", "isax-dollar-circle", "me-1"], ["mat-sort-header", "duree", 1, "text-center"], [1, "isax", "isax-clock", "me-1"], [1, "text-center", "pe-4"], ["class", "align-middle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "align-middle"], [1, "ps-2"], [1, "position-relative", "me-3", 2, "min-width", "120px", "flex-shrink", "0"], ["onerror", "this.src='assets/img/course/course-01.jpg'", 1, "rounded", 2, "width", "120px !important", "height", "75px !important", "object-fit", "cover", "border", "1px solid #dee2e6", 3, "src", "alt"], [1, "position-absolute", "top-0", "end-0", "translate-middle"], [1, "badge", "bg-primary", "rounded-circle", 2, "width", "22px", "height", "22px", "font-size", "10px", "display", "flex", "align-items", "center", "justify-content", "center"], [1, "flex-grow-1"], [1, "mb-1", "fw-medium"], [1, "text-decoration-none", "text-dark", 3, "routerLink"], [1, "d-flex", "align-items-center", "text-muted", "small"], [1, "me-3"], [1, "isax", "isax-flag", "me-1"], [1, "isax", "isax-language-square", "me-1"], [1, "isax", "isax-star", "me-1"], [1, "badge", "rounded-pill", 2, "color", "white", "font-size", "11px"], [1, "avatar", "avatar-sm", "me-2", "bg-gradient-primary", "text-white", "d-flex", "align-items-center", "justify-content-center", "rounded-circle"], [1, "fw-medium", "fs-14", "mb-0"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-people", "me-1", "text-muted"], [1, "fw-medium"], [3, "ngClass"], [1, "badge", "bg-light", "text-dark"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "fa-solid", "fa-circle", "fs-6", "me-1"], ["role", "group", 1, "btn-group"], ["title", "Voir les d\xE9tails", 1, "btn", "btn-sm", "btn-outline-info", 3, "routerLink"], [1, "isax", "isax-eye"], ["title", "Modifier", 1, "btn", "btn-sm", "btn-outline-primary", 3, "routerLink"], [1, "isax", "isax-edit-2"], ["title", "Supprimer", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "isax", "isax-trash"], [1, "text-center", "py-5"], [1, "mb-4"], [1, "isax", "isax-book", "text-muted", 2, "font-size", "4rem"], [1, "text-muted", "mb-3"], [1, "text-muted", "mb-4"], [4, "ngIf"], [1, "d-flex", "gap-2", "justify-content-center"], ["class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary"], [1, "isax", "isax-add", "me-1"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "isax", "isax-refresh", "me-1"], [3, "pageChange", "totalItems", "pageSize", "currentPage"]], template: function SuperadminCourseComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "h6", 5);
      \u0275\u0275text(7, "Formations Actives");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h4", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275element(11, "i", 8);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(12, "div", 1)(13, "div", 9)(14, "div", 3)(15, "div", 4)(16, "div")(17, "h6", 5);
      \u0275\u0275text(18, "En Attente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "h4", 6);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 7);
      \u0275\u0275element(22, "i", 10);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(23, "div", 1)(24, "div", 11)(25, "div", 3)(26, "div", 4)(27, "div")(28, "h6", 5);
      \u0275\u0275text(29, "Brouillons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "h4", 6);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 7);
      \u0275\u0275element(33, "i", 12);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 1)(35, "div", 13)(36, "div", 3)(37, "div", 4)(38, "div")(39, "h6", 5);
      \u0275\u0275text(40, "Formations Gratuites");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "h4", 6);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 7);
      \u0275\u0275element(44, "i", 14);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(45, "div", 1)(46, "div", 15)(47, "div", 3)(48, "div", 4)(49, "div")(50, "h6", 5);
      \u0275\u0275text(51, "Formations Payantes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "h4", 6);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 7);
      \u0275\u0275element(55, "i", 16);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(56, SuperadminCourseComponent_div_56_Template, 4, 1, "div", 17)(57, SuperadminCourseComponent_div_57_Template, 7, 0, "div", 18);
      \u0275\u0275elementStart(58, "div", 19)(59, "div")(60, "h5", 20);
      \u0275\u0275text(61, "Formations de l'Entreprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "small", 21);
      \u0275\u0275text(63, "G\xE9rez toutes les formations de votre organisation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 22)(65, "div", 23)(66, "a", 24);
      \u0275\u0275element(67, "i", 25);
      \u0275\u0275text(68, " Liste ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "a", 26);
      \u0275\u0275element(70, "i", 27);
      \u0275\u0275text(71, " Grille ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(72, "div", 28)(73, "div", 3)(74, "div", 29)(75, "div", 30)(76, "label", 31);
      \u0275\u0275text(77, "Filtrer par statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div", 32)(79, "button", 33);
      \u0275\u0275element(80, "i", 34);
      \u0275\u0275text(81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "ul", 35)(83, "li")(84, "a", 36);
      \u0275\u0275listener("click", function SuperadminCourseComponent_Template_a_click_84_listener() {
        return ctx.filterByStatus("");
      });
      \u0275\u0275element(85, "i", 37);
      \u0275\u0275text(86, "Tous les statuts ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "li")(88, "a", 36);
      \u0275\u0275listener("click", function SuperadminCourseComponent_Template_a_click_88_listener() {
        return ctx.filterByStatus("published");
      });
      \u0275\u0275element(89, "i", 37);
      \u0275\u0275text(90, "Publi\xE9es ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "li")(92, "a", 36);
      \u0275\u0275listener("click", function SuperadminCourseComponent_Template_a_click_92_listener() {
        return ctx.filterByStatus("pending");
      });
      \u0275\u0275element(93, "i", 38);
      \u0275\u0275text(94, "En Attente ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "li")(96, "a", 36);
      \u0275\u0275listener("click", function SuperadminCourseComponent_Template_a_click_96_listener() {
        return ctx.filterByStatus("draft");
      });
      \u0275\u0275element(97, "i", 39);
      \u0275\u0275text(98, "Brouillons ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(99, "div", 30)(100, "label", 31);
      \u0275\u0275text(101, "Taille de page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "select", 40);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminCourseComponent_Template_select_ngModelChange_102_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SuperadminCourseComponent_Template_select_change_102_listener() {
        return ctx.PageSize();
      });
      \u0275\u0275elementStart(103, "option", 41);
      \u0275\u0275text(104, "5 par page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "option", 42);
      \u0275\u0275text(106, "10 par page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "option", 43);
      \u0275\u0275text(108, "25 par page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "option", 44);
      \u0275\u0275text(110, "50 par page");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(111, "div", 45)(112, "label", 31);
      \u0275\u0275text(113, "Rechercher");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "div", 46)(115, "input", 47);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminCourseComponent_Template_input_ngModelChange_115_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SuperadminCourseComponent_Template_input_ngModelChange_115_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "div", 48);
      \u0275\u0275element(117, "i", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275template(118, SuperadminCourseComponent_button_118_Template, 2, 0, "button", 50);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(119, SuperadminCourseComponent_div_119_Template, 36, 6, "div", 51)(120, SuperadminCourseComponent_div_120_Template, 13, 3, "div", 52)(121, SuperadminCourseComponent_app_custom_pagination_121_Template, 1, 3, "app-custom-pagination", 53);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.stats.active);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.stats.pending);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.stats.draft);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.stats.free);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.stats.paid);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.superadminCourse);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.superadminCourseGrid);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate1(" ", ctx.selectedStatus || "Tous les statuts", " ");
      \u0275\u0275advance(21);
      \u0275\u0275twoWayProperty("ngModel", ctx.pageSize);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.searchDataValue);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.formations.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.formations.length > 0 && ctx.totalData > ctx.pageSize);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, MatSortModule, MatSort, MatSortHeader, CustomPaginationComponent], styles: ["\n\n.row.mb-4[_ngcontent-%COMP%]    > [class^=col-][_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n}\n.row.mb-4[_ngcontent-%COMP%]    > [class^=col-][_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.formation-image[_ngcontent-%COMP%] {\n  width: 100px !important;\n  height: 70px !important;\n  object-fit: cover;\n  border: 1px solid #dee2e6;\n  border-radius: 0.375rem;\n}\n/*# sourceMappingURL=superadmin-course.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminCourseComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-course", standalone: true, imports: [CommonModule, RouterModule, FormsModule, MatSortModule, CustomPaginationComponent], template: `<!-- Statistiques avec ic\xF4nes et animations -->\r
<div class="row mb-4">\r
    <div class="col-xxl col-lg-4 col-md-6 mb-3">\r
        <div class="card bg-success shadow-sm border-0">\r
            <div class="card-body">\r
                <div class="d-flex align-items-center justify-content-between">\r
                    <div>\r
                        <h6 class="fw-medium mb-1 text-white">Formations Actives</h6>\r
                        <h4 class="fw-bold text-white mb-0">{{ stats.active }}</h4>\r
                    </div>\r
                    <div class="text-white opacity-75">\r
                        <i class="isax isax-tick-circle fs-1"></i>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    \r
    <div class="col-xxl col-lg-4 col-md-6 mb-3">\r
        <div class="card bg-warning shadow-sm border-0">\r
            <div class="card-body">\r
                <div class="d-flex align-items-center justify-content-between">\r
                    <div>\r
                        <h6 class="fw-medium mb-1 text-white">En Attente</h6>\r
                        <h4 class="fw-bold text-white mb-0">{{ stats.pending }}</h4>\r
                    </div>\r
                    <div class="text-white opacity-75">\r
                        <i class="isax isax-clock fs-1"></i>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    \r
    <div class="col-xxl col-lg-4 col-md-6 mb-3">\r
        <div class="card bg-info shadow-sm border-0">\r
            <div class="card-body">\r
                <div class="d-flex align-items-center justify-content-between">\r
                    <div>\r
                        <h6 class="fw-medium mb-1 text-white">Brouillons</h6>\r
                        <h4 class="fw-bold text-white mb-0">{{ stats.draft }}</h4>\r
                    </div>\r
                    <div class="text-white opacity-75">\r
                        <i class="isax isax-document fs-1"></i>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    \r
    <div class="col-xxl col-lg-4 col-md-6 mb-3">\r
        <div class="card bg-success shadow-sm border-0" style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%) !important;">\r
            <div class="card-body">\r
                <div class="d-flex align-items-center justify-content-between">\r
                    <div>\r
                        <h6 class="fw-medium mb-1 text-white">Formations Gratuites</h6>\r
                        <h4 class="fw-bold text-white mb-0">{{ stats.free }}</h4>\r
                    </div>\r
                    <div class="text-white opacity-75">\r
                        <i class="isax isax-gift fs-1"></i>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    \r
    <div class="col-xxl col-lg-4 col-md-6 mb-3">\r
        <div class="card bg-primary shadow-sm border-0" style="background: linear-gradient(135deg, #6f42c1 0%, #007bff 100%) !important;">\r
            <div class="card-body">\r
                <div class="d-flex align-items-center justify-content-between">\r
                    <div>\r
                        <h6 class="fw-medium mb-1 text-white">Formations Payantes</h6>\r
                        <h4 class="fw-bold text-white mb-0">{{ stats.paid }}</h4>\r
                    </div>\r
                    <div class="text-white opacity-75">\r
                        <i class="isax isax-dollar-circle fs-1"></i>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- \xC9tats d'erreur et de chargement -->\r
<div class="alert alert-danger alert-dismissible fade show" *ngIf="error" role="alert">\r
    <i class="isax isax-warning-2 me-2"></i>\r
    {{ error }}\r
    <button type="button" class="btn-close" (click)="error = ''" aria-label="Close"></button>\r
</div>\r
\r
<div *ngIf="loading" class="d-flex justify-content-center align-items-center py-5">\r
    <div class="text-center">\r
        <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;">\r
            <span class="visually-hidden">Chargement...</span>\r
        </div>\r
        <p class="mt-3 text-muted">Chargement des formations...</p>\r
    </div>\r
</div>\r
\r
<!-- En-t\xEAte avec navigation -->\r
<div class="page-title d-flex align-items-center justify-content-between mb-4">\r
    <div>\r
        <h5 class="fw-bold mb-1">Formations de l'Entreprise</h5>\r
        <small class="text-muted">G\xE9rez toutes les formations de votre organisation</small>\r
    </div>\r
    <div class="d-flex align-items-center">\r
        <div class="btn-group me-3" role="group">\r
            <a [routerLink]="routes.superadminCourse" \r
               class="btn btn-outline-primary active">\r
                <i class="isax isax-task me-1"></i>\r
                Liste\r
            </a>\r
            <a [routerLink]="routes.superadminCourseGrid" \r
               class="btn btn-outline-primary">\r
                <i class="isax isax-element-3 me-1"></i>\r
                Grille\r
            </a>\r
        </div>\r
        <!-- <button class="btn btn-primary">\r
            <i class="isax isax-add me-1"></i>\r
            Nouvelle Formation\r
        </button> -->\r
    </div>\r
</div>\r
\r
<!-- Filtres et recherche -->\r
<div class="card border-0 shadow-sm mb-4">\r
    <div class="card-body">\r
        <div class="row g-3">\r
            <div class="col-md-3">\r
                <label class="form-label fw-medium">Filtrer par statut</label>\r
                <div class="dropdown">\r
                    <button class="btn btn-outline-secondary dropdown-toggle w-100 text-start" \r
                            type="button" \r
                            data-bs-toggle="dropdown" \r
                            aria-expanded="false">\r
                        <i class="isax isax-filter me-2"></i>\r
                        {{ selectedStatus || 'Tous les statuts' }}\r
                    </button>\r
                    <ul class="dropdown-menu w-100">\r
                        <li><a class="dropdown-item" href="javascript:void(0);" (click)="filterByStatus('')">\r
                            <i class="isax isax-tick-circle me-2 text-success"></i>Tous les statuts\r
                        </a></li>\r
                        <li><a class="dropdown-item" href="javascript:void(0);" (click)="filterByStatus('published')">\r
                            <i class="isax isax-tick-circle me-2 text-success"></i>Publi\xE9es\r
                        </a></li>\r
                        <li><a class="dropdown-item" href="javascript:void(0);" (click)="filterByStatus('pending')">\r
                            <i class="isax isax-clock me-2 text-warning"></i>En Attente\r
                        </a></li>\r
                        <li><a class="dropdown-item" href="javascript:void(0);" (click)="filterByStatus('draft')">\r
                            <i class="isax isax-document me-2 text-info"></i>Brouillons\r
                        </a></li>\r
                    </ul>\r
                </div>\r
            </div>\r
            \r
            <div class="col-md-3">\r
                <label class="form-label fw-medium">Taille de page</label>\r
                <select class="form-select" [(ngModel)]="pageSize" (change)="PageSize()">\r
                    <option value="5">5 par page</option>\r
                    <option value="10">10 par page</option>\r
                    <option value="25">25 par page</option>\r
                    <option value="50">50 par page</option>\r
                </select>\r
            </div>\r
            \r
            <div class="col-md-6">\r
                <label class="form-label fw-medium">Rechercher</label>\r
                <div class="position-relative">\r
                    <input [(ngModel)]="searchDataValue" \r
                           type="search" \r
                           (ngModelChange)="searchData(searchDataValue)" \r
                           class="form-control ps-5" \r
                           placeholder="Rechercher par titre, description, formateur ou cat\xE9gorie...">\r
                    <div class="position-absolute top-50 start-0 translate-middle-y ms-3">\r
                        <i class="isax isax-search-normal-1 text-muted"></i>\r
                    </div>\r
                    <button *ngIf="searchDataValue" \r
                            class="btn btn-sm btn-outline-secondary position-absolute top-50 end-0 translate-middle-y me-2"\r
                            (click)="searchDataValue = ''; searchData('')"\r
                            type="button">\r
                        <i class="isax isax-close-circle"></i>\r
                    </button>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- Tableau des formations -->\r
<div class="card border-0 shadow-sm" *ngIf="!loading">\r
    <div class="card-header bg-white border-bottom">\r
        <div class="d-flex align-items-center justify-content-between">\r
            <h6 class="mb-0 fw-medium">\r
                <i class="isax isax-book me-2 text-primary"></i>\r
                Liste des Formations ({{ totalData }} r\xE9sultats)\r
            </h6>\r
            <small class="text-muted">\r
                Affichage {{ serialNumberArray[0] || 0 }} - {{ serialNumberArray[serialNumberArray.length - 1] || 0 }} sur {{ totalData }}\r
            </small>\r
        </div>\r
    </div>\r
    \r
    <div class="table-responsive">\r
        <table matSort (matSortChange)="sortData($event)" class="table table-hover mb-0">\r
            <thead class="table-light">\r
                <tr>\r
                    <th mat-sort-header="titre" class="ps-4">\r
                        <i class="isax isax-book me-1"></i>Formation\r
                    </th>\r
                    <th>\r
                        <i class="isax isax-category me-1"></i>Cat\xE9gorie\r
                    </th>\r
                    <th mat-sort-header="formateur">\r
                        <i class="isax isax-user me-1"></i>Formateur\r
                    </th>\r
                    <th mat-sort-header="participants" class="text-center">\r
                        <i class="isax isax-people me-1"></i>Participants\r
                    </th>\r
                    <th mat-sort-header="prix" class="text-center">\r
                        <i class="isax isax-dollar-circle me-1"></i>Co\xFBt\r
                    </th>\r
                    <th mat-sort-header="duree" class="text-center">\r
                        <i class="isax isax-clock me-1"></i>Dur\xE9e\r
                    </th>\r
                    <th class="text-center">Statut</th>\r
                    <th class="text-center pe-4">Actions</th>\r
                </tr>\r
            </thead>\r
            <tbody>\r
                <tr *ngFor="let formation of formations; trackBy: trackByFormation" \r
                    class="align-middle">\r
                    <td class="ps-2">\r
    <div class="d-flex align-items-center">\r
        <div class="position-relative me-3" style="min-width: 120px; flex-shrink: 0;">\r
            <img class="rounded" \r
                 [src]="getDefaultImage(formation)" \r
                 [alt]="formation.titre"\r
                 style="width: 120px !important; height: 75px !important; object-fit: cover; border: 1px solid #dee2e6;"\r
                 onerror="this.src='assets/img/course/course-01.jpg'">\r
            <div class="position-absolute top-0 end-0 translate-middle">\r
                <span class="badge bg-primary rounded-circle" \r
                      style="width: 22px; height: 22px; font-size: 10px; display: flex; align-items: center; justify-content: center;">\r
                    {{ formation.nombre_modules || 0 }}\r
                </span>\r
            </div>\r
        </div>\r
                            <div class="flex-grow-1">\r
                                <h6 class="mb-1 fw-medium">\r
                                    <a [routerLink]="[routes.courseDetails, formation.id]"\r
                                       class="text-decoration-none text-dark">\r
                                        {{ formation.titre }}\r
                                    </a>\r
                                </h6>\r
                                <div class="d-flex align-items-center text-muted small">\r
                                    <span class="me-3">\r
                                        <i class="isax isax-flag me-1"></i>\r
                                        {{ formation.niveau_display || formation.niveau }}\r
                                    </span>\r
                                    <span class="me-3">\r
                                        <i class="isax isax-language-square me-1"></i>\r
                                        {{ formation.langue || 'FR' }}\r
                                    </span>\r
                                    <span>\r
                                        <i class="isax isax-star me-1"></i>\r
                                        {{ formation.difficulte }}\r
                                    </span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </td>\r
                    \r
                    <td>\r
                        <span class="badge rounded-pill" \r
                              [style.background-color]="formation.categorie?.couleur || '#6c757d'"\r
                              style="color: white; font-size: 11px;">\r
                            {{ formation.categorie?.nom || 'Non d\xE9finie' }}\r
                        </span>\r
                    </td>\r
                    \r
                    <td>\r
                        <div class="d-flex align-items-center">\r
                            <div class="avatar avatar-sm me-2 bg-gradient-primary text-white d-flex align-items-center justify-content-center rounded-circle">\r
                                {{ (formation.formateur?.prenom?.charAt(0) || 'F') + (formation.formateur?.nom?.charAt(0) || 'X') }}\r
                            </div>\r
                            <div>\r
                                <div class="fw-medium fs-14 mb-0">{{ formation.formateur_nom || 'Non assign\xE9' }}</div>\r
                                <small class="text-muted">{{ formation.formateur?.fonction || '' }}</small>\r
                            </div>\r
                        </div>\r
                    </td>\r
                    \r
                    <td class="text-center">\r
                        <div class="d-flex align-items-center justify-content-center">\r
                            <i class="isax isax-people me-1 text-muted"></i>\r
                            <span class="fw-medium">{{ formation.nb_max_participants || 0 }}</span>\r
                        </div>\r
                    </td>\r
                    \r
                    <td class="text-center">\r
                        <span [ngClass]="{'badge bg-success': isFormationGratuite(formation), 'fw-medium text-primary': !isFormationGratuite(formation)}">\r
                            {{ formatPrix(formation.prix) }}\r
                        </span>\r
                    </td>\r
                    \r
                    <td class="text-center">\r
                        <span class="badge bg-light text-dark">\r
                            <i class="isax isax-clock me-1"></i>\r
                            {{ formation.duree_totale || 0 }}h\r
                        </span>\r
                    </td>\r
                    \r
                    <td class="text-center">\r
                        <span class="badge d-inline-flex align-items-center" \r
                              [ngClass]="getStatusClass(formation)">\r
                            <i class="fa-solid fa-circle fs-6 me-1"></i>\r
                            {{ getStatusText(formation) }}\r
                        </span>\r
                    </td>\r
                    \r
                    <td class="text-center pe-4">\r
                        <div class="btn-group" role="group">\r
                            <a [routerLink]="[routes.courseDetails, formation.id]" \r
                               class="btn btn-sm btn-outline-info" \r
                               title="Voir les d\xE9tails">\r
                                <i class="isax isax-eye"></i>\r
                            </a>\r
                            <a [routerLink]="[routes.courseDetails, formation.id]" \r
                               class="btn btn-sm btn-outline-primary" \r
                               title="Modifier">\r
                                <i class="isax isax-edit-2"></i>\r
                            </a>\r
                            <button class="btn btn-sm btn-outline-danger" \r
                                    (click)="deleteFormation(formation)" \r
                                    title="Supprimer">\r
                                <i class="isax isax-trash"></i>\r
                            </button>\r
                        </div>\r
                    </td>\r
                </tr>\r
            </tbody>\r
        </table>\r
    </div>\r
</div>\r
\r
<!-- Message si aucune formation -->\r
<div *ngIf="!loading && formations.length === 0" class="text-center py-5">\r
    <div class="mb-4">\r
        <i class="isax isax-book text-muted" style="font-size: 4rem;"></i>\r
    </div>\r
    <h5 class="text-muted mb-3">Aucune formation trouv\xE9e</h5>\r
    <p class="text-muted mb-4">\r
        <span *ngIf="searchDataValue || selectedStatus">\r
            Aucun r\xE9sultat ne correspond \xE0 vos crit\xE8res de recherche.\r
        </span>\r
        <span *ngIf="!searchDataValue && !selectedStatus">\r
            Il n'y a actuellement aucune formation pour votre entreprise.\r
        </span>\r
    </p>\r
    <div class="d-flex gap-2 justify-content-center">\r
        <button *ngIf="searchDataValue || selectedStatus" \r
                class="btn btn-outline-primary" \r
                (click)="searchDataValue = ''; selectedStatus = ''; searchData('')">\r
            <i class="isax isax-refresh me-1"></i>\r
            R\xE9initialiser les filtres\r
        </button>\r
        <button class="btn btn-primary">\r
            <i class="isax isax-add me-1"></i>\r
            Cr\xE9er une formation\r
        </button>\r
    </div>\r
</div>\r
\r
<!-- Pagination avec logique user-list -->\r
<app-custom-pagination\r
    *ngIf="!loading && formations.length > 0 && totalData > pageSize"\r
    [totalItems]="totalData"\r
    [pageSize]="pageSize"\r
    [currentPage]="currentPage"\r
    (pageChange)="onPageChange($event)">\r
</app-custom-pagination>`, styles: ["/* src/app/features/superadmin/superadmin-course/superadmin-course.component.scss */\n.row.mb-4 > [class^=col-] .card {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n}\n.row.mb-4 > [class^=col-] .card .card-body {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.formation-image {\n  width: 100px !important;\n  height: 70px !important;\n  object-fit: cover;\n  border: 1px solid #dee2e6;\n  border-radius: 0.375rem;\n}\n/*# sourceMappingURL=superadmin-course.component.css.map */\n"] }]
  }], () => [{ type: FormationService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminCourseComponent, { className: "SuperadminCourseComponent", filePath: "src/app/features/superadmin/superadmin-course/superadmin-course.component.ts", lineNumber: 18 });
})();
export {
  SuperadminCourseComponent
};
//# sourceMappingURL=chunk-JRQGSNY3.js.map
