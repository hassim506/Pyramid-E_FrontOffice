import {
  httpErrorMessage
} from "./chunk-RL3SOXDI.js";
import {
  MatSortModule
} from "./chunk-OA5BMQAL.js";
import {
  CustomPaginationComponent
} from "./chunk-2X3HKWIN.js";
import "./chunk-LBRLB4CW.js";
import {
  FormationService
} from "./chunk-335YI34S.js";
import "./chunk-5I6ORW2F.js";
import "./chunk-CBU3D44N.js";
import "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-YJLHMFCU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-HLA233IM.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-MNWNTO2T.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
} from "./chunk-7XGB4BEQ.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/superadmin/superadmin-course/superadmin-course.component.ts
function SuperadminCourseComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 35);
    \u0275\u0275listener("click", function SuperadminCourseComponent_div_72_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error = "");
    });
    \u0275\u0275element(4, "i", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.error, " ");
  }
}
function SuperadminCourseComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275text(2, "Chargement des formations\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminCourseComponent_ng_container_74_table_1_tr_21_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r4.niveau_display || f_r4.niveau);
  }
}
function SuperadminCourseComponent_ng_container_74_table_1_tr_21_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", f_r4.langue);
  }
}
function SuperadminCourseComponent_ng_container_74_table_1_tr_21_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r4.formateur == null ? null : f_r4.formateur.fonction);
  }
}
function SuperadminCourseComponent_ng_container_74_table_1_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 51)(2, "div", 52);
    \u0275\u0275element(3, "img", 53);
    \u0275\u0275elementStart(4, "span", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "td")(7, "a", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 56);
    \u0275\u0275template(10, SuperadminCourseComponent_ng_container_74_table_1_tr_21_span_10_Template, 2, 1, "span", 32)(11, SuperadminCourseComponent_ng_container_74_table_1_tr_21_span_11_Template, 2, 1, "span", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "span", 57);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "div", 58)(17, "div", 59);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "div", 60);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, SuperadminCourseComponent_ng_container_74_table_1_tr_21_div_22_Template, 2, 1, "div", 61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "td", 62);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 63)(26, "span", 64);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td", 62);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td", 63)(31, "span", 64);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "td")(34, "div", 65)(35, "a", 66);
    \u0275\u0275element(36, "i", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "a", 68);
    \u0275\u0275element(38, "i", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 70);
    \u0275\u0275listener("click", function SuperadminCourseComponent_ng_container_74_table_1_tr_21_Template_button_click_39_listener() {
      const f_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteFormation(f_r4));
    });
    \u0275\u0275element(40, "i", 71);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.getDefaultImage(f_r4), \u0275\u0275sanitizeUrl)("alt", f_r4.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r4.nombre_modules || 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r1.routes.courseDetails + "/" + f_r4.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r4.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", f_r4.niveau_display || f_r4.niveau);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r4.langue);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ((f_r4.categorie == null ? null : f_r4.categorie.couleur) || "#6c757d") + "22")("color", (f_r4.categorie == null ? null : f_r4.categorie.couleur) || "#6c757d");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (f_r4.categorie == null ? null : f_r4.categorie.nom) || "\u2014", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(((f_r4.formateur == null ? null : f_r4.formateur.prenom == null ? null : f_r4.formateur.prenom[0]) ?? "F") + ((f_r4.formateur == null ? null : f_r4.formateur.nom == null ? null : f_r4.formateur.nom[0]) ?? ""));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r4.formateur_nom || "Non assign\xE9");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r4.formateur == null ? null : f_r4.formateur.fonction);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r4.nb_max_participants || 0);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-s", ctx_r1.isFormationGratuite(f_r4) ? "pub" : "pending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatPrix(f_r4.prix), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r4.duree_totale || 0, "h");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-s", f_r4.est_publie && f_r4.inscription_ouverte ? "pub" : !f_r4.est_publie ? "draft" : "done");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusText(f_r4), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r1.routes.courseDetails + "/" + f_r4.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "/courses/instructor-course-edit/" + f_r4.id, \u0275\u0275sanitizeUrl);
  }
}
function SuperadminCourseComponent_ng_container_74_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 41)(1, "thead")(2, "tr")(3, "th", 42);
    \u0275\u0275text(4, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 43);
    \u0275\u0275text(8, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 44);
    \u0275\u0275text(10, "Formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 45);
    \u0275\u0275text(12, "Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 46);
    \u0275\u0275text(14, "Co\xFBt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 47);
    \u0275\u0275text(16, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 48);
    \u0275\u0275text(18, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "th", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, SuperadminCourseComponent_ng_container_74_table_1_tr_21_Template, 41, 23, "tr", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r1.formations)("ngForTrackBy", ctx_r1.trackByFormation);
  }
}
function SuperadminCourseComponent_ng_container_74_div_2_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function SuperadminCourseComponent_ng_container_74_div_2_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.searchDataValue = "";
      return \u0275\u0275resetView(ctx_r1.filterByStatus(""));
    });
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275text(2, "R\xE9initialiser ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminCourseComponent_ng_container_74_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275text(2);
    \u0275\u0275template(3, SuperadminCourseComponent_ng_container_74_div_2_button_3_Template, 3, 0, "button", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.searchDataValue || ctx_r1.selectedStatus ? "Aucun r\xE9sultat pour ces filtres" : "Aucune formation trouv\xE9e", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchDataValue || ctx_r1.selectedStatus);
  }
}
function SuperadminCourseComponent_ng_container_74_app_custom_pagination_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-custom-pagination", 75);
    \u0275\u0275listener("pageChange", function SuperadminCourseComponent_ng_container_74_app_custom_pagination_3_Template_app_custom_pagination_pageChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("totalItems", ctx_r1.totalData)("pageSize", ctx_r1.pageSize)("currentPage", ctx_r1.currentPage);
  }
}
function SuperadminCourseComponent_ng_container_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SuperadminCourseComponent_ng_container_74_table_1_Template, 22, 2, "table", 39)(2, SuperadminCourseComponent_ng_container_74_div_2_Template, 4, 2, "div", 31)(3, SuperadminCourseComponent_ng_container_74_app_custom_pagination_3_Template, 1, 3, "app-custom-pagination", 40);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formations.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formations.length > 0 && ctx_r1.totalData > ctx_r1.pageSize);
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
        this.error = httpErrorMessage(error, "Impossible de charger les formations.");
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminCourseComponent, selectors: [["app-superadmin-course"]], decls: 75, vars: 21, consts: [[1, "ac-shell"], [1, "ac-topbar"], ["type", "button", 1, "ac-tab", "active"], [1, "isax", "isax-task"], [1, "ac-tab", 3, "routerLink"], [1, "isax", "isax-element-3"], [1, "ac-spacer"], [2, "display", "flex", "align-items", "center", "padding", "0 10px"], [1, "ac-topbar-info"], [1, "ac-kpi-row"], [1, "ac-kpi"], [1, "ac-kpi__label"], [1, "isax", "isax-tick-circle"], [1, "ac-kpi__val"], [1, "ac-kpi__delta", "up"], [1, "isax", "isax-clock"], [1, "ac-kpi__delta", "neutral"], [1, "isax", "isax-document"], [1, "isax", "isax-gift"], [1, "isax", "isax-dollar-circle"], [1, "ac-toolbar"], [1, "ac-search"], [1, "isax", "isax-search-normal", "ac-search__icon"], ["type", "text", "placeholder", "Titre, formateur, cat\xE9gorie\u2026", 1, "ac-search__input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "ac-chip", 3, "click"], ["title", "Taille de page", 1, "ac-select", 3, "ngModelChange", "change", "ngModel"], ["value", "5"], ["value", "10"], ["value", "25"], ["value", "50"], ["class", "ac-alert", 4, "ngIf"], ["class", "ac-empty", 4, "ngIf"], [4, "ngIf"], [1, "ac-alert"], [1, "isax", "isax-warning-2"], ["type", "button", 1, "ac-alert-close", 3, "click"], [1, "isax", "isax-close-circle"], [1, "ac-empty"], [1, "isax", "isax-book-1"], ["class", "ac-table", 4, "ngIf"], [3, "totalItems", "pageSize", "currentPage", "pageChange", 4, "ngIf"], [1, "ac-table"], [2, "width", "136px"], [2, "width", "110px"], [2, "width", "150px"], [2, "width", "80px", "text-align", "center"], [2, "width", "90px", "text-align", "center"], [2, "width", "72px", "text-align", "center"], [2, "width", "88px", "text-align", "center"], [2, "width", "80px"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [2, "padding", "8px 14px"], [1, "ac-thumb"], ["onerror", "this.src='assets/img/course/course-01.jpg'", 3, "src", "alt"], [1, "ac-thumb-badge"], ["target", "_blank", 1, "ac-table-name", "ac-link", 3, "href"], [1, "ac-table-sub"], [1, "ac-cat-pill"], [1, "ac-instructor"], [1, "ac-instructor-av"], [1, "ac-table-name", 2, "font-size", "12px"], ["class", "ac-table-sub", 4, "ngIf"], [2, "text-align", "center", "font-size", "13px"], [2, "text-align", "center"], [1, "ac-status"], [1, "ac-actions"], ["target", "_blank", "title", "Voir", 1, "ac-act", 3, "href"], [1, "isax", "isax-eye"], ["target", "_blank", "title", "Modifier", 1, "ac-act", 3, "href"], [1, "isax", "isax-edit-2"], ["type", "button", "title", "Supprimer", 1, "ac-act", "ac-act--del", 3, "click"], [1, "isax", "isax-trash"], ["type", "button", "class", "ac-chip", "style", "margin-top:10px;", 3, "click", 4, "ngIf"], ["type", "button", 1, "ac-chip", 2, "margin-top", "10px", 3, "click"], [1, "isax", "isax-refresh"], [3, "pageChange", "totalItems", "pageSize", "currentPage"]], template: function SuperadminCourseComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275text(4, "Liste ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "a", 4);
      \u0275\u0275element(6, "i", 5);
      \u0275\u0275text(7, "Grille ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "span", 6);
      \u0275\u0275elementStart(9, "div", 7)(10, "span", 8);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11);
      \u0275\u0275element(15, "i", 12);
      \u0275\u0275text(16, "Publi\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 13);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 14);
      \u0275\u0275text(20, "actives");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11);
      \u0275\u0275element(23, "i", 15);
      \u0275\u0275text(24, "En attente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 13);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 16);
      \u0275\u0275text(28, "\xE0 valider");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 10)(30, "div", 11);
      \u0275\u0275element(31, "i", 17);
      \u0275\u0275text(32, "Brouillons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 13);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 10)(36, "div", 11);
      \u0275\u0275element(37, "i", 18);
      \u0275\u0275text(38, "Gratuites");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 13);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 10)(42, "div", 11);
      \u0275\u0275element(43, "i", 19);
      \u0275\u0275text(44, "Payantes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 13);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 20)(48, "div", 21);
      \u0275\u0275element(49, "i", 22);
      \u0275\u0275elementStart(50, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminCourseComponent_Template_input_ngModelChange_50_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SuperadminCourseComponent_Template_input_ngModelChange_50_listener($event) {
        return ctx.searchData($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "button", 24);
      \u0275\u0275listener("click", function SuperadminCourseComponent_Template_button_click_51_listener() {
        return ctx.filterByStatus("");
      });
      \u0275\u0275text(52, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "button", 24);
      \u0275\u0275listener("click", function SuperadminCourseComponent_Template_button_click_53_listener() {
        return ctx.filterByStatus("published");
      });
      \u0275\u0275element(54, "i", 12);
      \u0275\u0275text(55, "Publi\xE9es ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "button", 24);
      \u0275\u0275listener("click", function SuperadminCourseComponent_Template_button_click_56_listener() {
        return ctx.filterByStatus("pending");
      });
      \u0275\u0275element(57, "i", 15);
      \u0275\u0275text(58, "En attente ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "button", 24);
      \u0275\u0275listener("click", function SuperadminCourseComponent_Template_button_click_59_listener() {
        return ctx.filterByStatus("draft");
      });
      \u0275\u0275element(60, "i", 17);
      \u0275\u0275text(61, "Brouillons ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "span", 6);
      \u0275\u0275elementStart(63, "select", 25);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminCourseComponent_Template_select_ngModelChange_63_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SuperadminCourseComponent_Template_select_change_63_listener() {
        return ctx.PageSize();
      });
      \u0275\u0275elementStart(64, "option", 26);
      \u0275\u0275text(65, "5 / page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "option", 27);
      \u0275\u0275text(67, "10 / page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "option", 28);
      \u0275\u0275text(69, "25 / page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "option", 29);
      \u0275\u0275text(71, "50 / page");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(72, SuperadminCourseComponent_div_72_Template, 5, 1, "div", 30)(73, SuperadminCourseComponent_div_73_Template, 3, 0, "div", 31)(74, SuperadminCourseComponent_ng_container_74_Template, 4, 3, "ng-container", 32);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.superadminCourseGrid);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.totalData, " formation", ctx.totalData !== 1 ? "s" : "");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.stats.active);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.stats.pending);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.stats.draft);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.stats.free);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.stats.paid);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275advance();
      \u0275\u0275classProp("ac-chip--on", ctx.selectedStatus === "");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("ac-chip--on", ctx.selectedStatus === "published");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("ac-chip--on", ctx.selectedStatus === "pending");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("ac-chip--on", ctx.selectedStatus === "draft");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.pageSize);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, MatSortModule, CustomPaginationComponent], styles: ['\n\n.ac-shell[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ac-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 16px;\n  font-size: 13px;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ac-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.ac-tab.active[_ngcontent-%COMP%] {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ac-tab[_ngcontent-%COMP%]:hover:not(.active) {\n  color: #111827;\n}\n.ac-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 160px;\n  max-width: 220px;\n}\n.ac-search__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ac-search__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 10px 6px 30px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ac-search__input[_ngcontent-%COMP%]:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.ac-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    background 0.15s,\n    color 0.15s;\n}\n.ac-chip[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ac-chip--on[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  border-color: #85B7EB;\n  color: #0C447C;\n}\n.ac-spacer[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.ac-view-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-btn.active[_ngcontent-%COMP%], \n.ac-view-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background: #185FA5;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.15s;\n}\n.ac-add-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  color: #fff;\n}\n.ac-add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ac-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  padding: 12px 14px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ac-kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.ac-kpi__label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: #4b5563;\n  margin-bottom: 4px;\n}\n.ac-kpi__label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.ac-kpi__val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 500;\n  color: #111827;\n}\n.ac-kpi__delta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-top: 2px;\n}\n.ac-kpi__delta.up[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.ac-kpi__delta.down[_ngcontent-%COMP%] {\n  color: #A32D2D;\n}\n.ac-kpi__delta.neutral[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.ac-skeletons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n}\n.ac-skeleton-card[_ngcontent-%COMP%] {\n  height: 220px;\n  border-radius: 12px;\n  background: #f3f4f6;\n  animation: _ngcontent-%COMP%_ac-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_ac-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ac-alert[_ngcontent-%COMP%] {\n  margin: 12px 14px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n  background: #f9fafb;\n}\n.ac-fcard[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  transition: border-color 0.15s;\n}\n.ac-fcard[_ngcontent-%COMP%]:hover {\n  border-color: #aec6e4;\n}\n.ac-fcard__thumb[_ngcontent-%COMP%] {\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  position: relative;\n  overflow: hidden;\n}\n.ac-fcard__thumb[data-th=blue][_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.ac-fcard__thumb[data-th=teal][_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.ac-fcard__thumb[data-th=purple][_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.ac-fcard__thumb[data-th=amber][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ac-fcard__thumb[data-th=coral][_ngcontent-%COMP%] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.ac-fcard__thumb[data-th=green][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.ac-fcard__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-fcard__body[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  flex: 1;\n}\n.ac-fcard__cat[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 4px;\n}\n.ac-fcard__cat[data-cat=tech][_ngcontent-%COMP%] {\n  color: #0C447C;\n}\n.ac-fcard__cat[data-cat=rh][_ngcontent-%COMP%] {\n  color: #085041;\n}\n.ac-fcard__cat[data-cat=mgmt][_ngcontent-%COMP%] {\n  color: #534AB7;\n}\n.ac-fcard__cat[data-cat=fin][_ngcontent-%COMP%] {\n  color: #633806;\n}\n.ac-fcard__cat[data-cat=default][_ngcontent-%COMP%] {\n  color: #4b5563;\n}\n.ac-fcard__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 6px;\n  line-height: 1.3;\n}\n.ac-fcard__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ac-fcard__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-fcard__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ac-fcard__footer[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-top: 1px solid #f3f4f6;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-fcard__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-left: auto;\n}\n.ac-status[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.ac-status[data-s=pub][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=draft][_ngcontent-%COMP%] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=pending][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-status[data-s=plan][_ngcontent-%COMP%] {\n  background: #EEF2FF;\n  color: #3730A3;\n}\n.ac-status[data-s=live][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=done][_ngcontent-%COMP%] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=cancel][_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #991B1B;\n}\n.ac-prog[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0 6px;\n}\n.ac-prog__bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: #f3f4f6;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ac-prog__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  background: #185FA5;\n}\n.ac-prog__txt[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9ca3af;\n  text-align: right;\n  margin-top: 2px;\n}\n.ac-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.ac-act[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-act[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-act--del[_ngcontent-%COMP%] {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ac-act--del[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.ac-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.ac-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ac-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ac-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.ac-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.ac-table-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n}\n.ac-table-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.ac-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 14px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ac-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n}\n.ac-empty--span[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.ac-empty-tab[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 14px;\n  gap: 12px;\n  color: #9ca3af;\n}\n.ac-empty-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.ac-empty-tab[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ac-pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ac-pager__info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ac-pager__btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.ac-pager__btn[_ngcontent-%COMP%] {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ac-pager__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ac-pager__btn.active[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ac-pager__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ac-toolbar--chips[_ngcontent-%COMP%] {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-top: none;\n  background: #fff;\n  gap: 6px;\n}\n.ac-view-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.ac-view-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ac-view-toggle.active[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #111827;\n  font-weight: 500;\n}\n.ac-view-toggle[_ngcontent-%COMP%]:hover:not(.active) {\n  background: #f9fafb;\n}\n.ac-sessions-list[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  background: #f9fafb;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ac-session-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  transition: border-color 0.15s;\n}\n.ac-session-row[_ngcontent-%COMP%]:hover {\n  border-color: #aec6e4;\n}\n.ac-session-date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 40px;\n}\n.ac-session-date__day[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1;\n}\n.ac-session-date__month[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.ac-session-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ac-session-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ac-session-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 3px;\n  flex-wrap: wrap;\n}\n.ac-session-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-session-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ac-session-badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.ac-session-places[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4b5563;\n  white-space: nowrap;\n}\n.ac-cal[_ngcontent-%COMP%] {\n  padding: 12px 14px 14px;\n  background: #f9fafb;\n}\n.ac-cal__nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.ac-cal__nav-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 14px;\n  color: #4b5563;\n  transition: background 0.12s;\n}\n.ac-cal__nav-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-cal__nav-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n  text-transform: capitalize;\n}\n.ac-cal__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 4px;\n}\n.ac-cal__head[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 4px 0 6px;\n}\n.ac-cal__cell[_ngcontent-%COMP%] {\n  min-height: 80px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 5px 5px 4px;\n  overflow: hidden;\n  transition: border-color 0.12s;\n}\n.ac-cal__cell[_ngcontent-%COMP%]:hover {\n  border-color: #aec6e4;\n}\n.ac-cal__cell--other[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.ac-cal__cell--other[_ngcontent-%COMP%]   .ac-cal__day[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.ac-cal__cell--today[_ngcontent-%COMP%] {\n  border-color: #185FA5;\n}\n.ac-cal__cell--today[_ngcontent-%COMP%]   .ac-cal__day[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 50%;\n}\n.ac-cal__day[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 4px;\n  display: block;\n}\n.ac-cal__events[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ac-cal__event[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 4px;\n  border-radius: 3px;\n  background: #E6F1FB;\n  color: #0C447C;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: default;\n}\n.ac-cal__event--dist[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-cal__event--hybr[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.wz-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 620px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.wz-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-head__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E6F1FB;\n  color: #185FA5;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.wz-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.wz-head__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-head__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.wz-close[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.wz-close[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.wz-stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.wz-step__circle[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 500;\n  flex-shrink: 0;\n  border: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  color: #9ca3af;\n  transition: all 0.2s;\n}\n.wz-step__circle.active[_ngcontent-%COMP%] {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.wz-step__circle.done[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n  border-color: #97C459;\n}\n.wz-step__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.wz-step__label.active[_ngcontent-%COMP%] {\n  color: #185FA5;\n}\n.wz-step__label.done[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.wz-step__line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 0.5px;\n  background: #e5e7eb;\n  margin: 0 8px;\n  min-width: 20px;\n}\n.wz-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.wz-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.wz-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.wz-field--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.wz-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.wz-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-req[_ngcontent-%COMP%] {\n  color: #E24B4A;\n}\n.wz-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.wz-input[_ngcontent-%COMP%]:focus {\n  border-color: #185FA5;\n  box-shadow: 0 0 0 2px #E6F1FB;\n}\n.wz-input[readonly][_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.wz-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 68px;\n  line-height: 1.5;\n}\n.wz-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-domain-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.wz-domain-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.wz-domain-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.wz-domain-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-domain-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.wz-domain-card.selected[_ngcontent-%COMP%] {\n  border-color: #185FA5;\n  background: #E6F1FB;\n}\n.wz-domain-card.selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0C447C;\n}\n.wz-strip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 10px;\n}\n.wz-strip__hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.wz-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  border: 0.5px solid #85B7EB;\n  font-size: 12px;\n  color: #0C447C;\n}\n.wz-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  cursor: pointer;\n  color: #378ADD;\n}\n.wz-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #0C447C;\n}\n.wz-pool[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 6px;\n}\n.wz-pool__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-pool__search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.wz-pool__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.wz-pool__list[_ngcontent-%COMP%] {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.wz-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.wz-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.wz-pool__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.wz-pool__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.wz-pool__item[_ngcontent-%COMP%]:hover, \n.wz-pool__item.checked[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.wz-pool__check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.wz-pool__check.on[_ngcontent-%COMP%] {\n  background: #185FA5;\n  border-color: #185FA5;\n  color: #fff;\n}\n.wz-pool__thumb[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.wz-pool__thumb[data-th=blue][_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.wz-pool__thumb[data-th=teal][_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.wz-pool__thumb[data-th=purple][_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-pool__thumb[data-th=amber][_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.wz-pool__thumb[data-th=coral][_ngcontent-%COMP%] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.wz-pool__thumb[data-th=green][_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.wz-pool__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.wz-pool__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wz-pool__meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-pool__tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  background: #f3f4f6;\n  color: #4b5563;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.wz-pool__empty[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.wz-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 0.5px solid #f3f4f6;\n}\n.wz-toggle-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.wz-toggle-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-toggle-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.wz-toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.wz-toggle[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.wz-toggle.on[_ngcontent-%COMP%] {\n  background: #185FA5;\n}\n.wz-toggle.on[_ngcontent-%COMP%]::after {\n  left: 19px;\n}\n.wz-info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #E6F1FB;\n  border-radius: 8px;\n  border: 0.5px solid #85B7EB;\n  margin-bottom: 12px;\n  font-size: 12px;\n  color: #0C447C;\n  line-height: 1.5;\n}\n.wz-info-banner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #185FA5;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.wz-recap-card[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 10px;\n}\n.wz-recap-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.wz-recap-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-recap-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.wz-rl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-rv[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-recap-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.wz-rc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.wz-error[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.wz-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.wz-foot__info[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-btn-ghost[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.wz-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.wz-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #185FA5;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.wz-btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.wz-btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.wz-btn-success[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #3B6D11;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.wz-btn-success[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.wz-btn-success[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.cw-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 600px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.cw-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.cw-head__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E1F5EE;\n  color: #0F6E56;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cw-head__text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.cw-head__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-head__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.cw-close[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.cw-close[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.cw-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.cw-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.cw-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.cw-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.cw-upload-zone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 24px 16px;\n  border: 1.5px dashed #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  cursor: pointer;\n  margin-bottom: 16px;\n  transition: border-color 0.15s, background 0.15s;\n}\n.cw-upload-zone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #9ca3af;\n}\n.cw-upload-zone[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n  font-weight: 500;\n}\n.cw-upload-zone__hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 400;\n}\n.cw-upload-zone[_ngcontent-%COMP%]:hover {\n  border-color: #79C9AB;\n  background: #E1F5EE;\n}\n.cw-upload-zone[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.cw-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.cw-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-req[_ngcontent-%COMP%] {\n  color: #E24B4A;\n}\n.cw-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.cw-input[_ngcontent-%COMP%]:focus {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-input[readonly][_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.cw-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 72px;\n  line-height: 1.5;\n}\n.cw-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-toggle-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 0;\n}\n.cw-toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.cw-toggle[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.cw-toggle.on[_ngcontent-%COMP%] {\n  background: #0F6E56;\n}\n.cw-toggle.on[_ngcontent-%COMP%]::after {\n  left: 19px;\n}\n.cw-toggle-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4b5563;\n}\n.cw-section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 8px;\n}\n.cw-domain-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-domain-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.cw-domain-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #9ca3af;\n}\n.cw-domain-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-domain-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-domain-card.selected[_ngcontent-%COMP%] {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-domain-card.selected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-domain-card.selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-level-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-level-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.cw-level-card__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-level-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.cw-level-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-level-card.selected[_ngcontent-%COMP%] {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-level-card.selected[_ngcontent-%COMP%]   .cw-level-card__label[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-level-card.selected[_ngcontent-%COMP%]   .cw-level-card__sub[_ngcontent-%COMP%] {\n  color: rgb(148.5, 219.5, 194.65);\n}\n.cw-tags-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n  min-height: 36px;\n  padding: 6px 8px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.cw-tags-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  background: #E1F5EE;\n  border: 0.5px solid #79C9AB;\n  font-size: 12px;\n  color: #0F6E56;\n}\n.cw-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  cursor: pointer;\n  color: #79C9AB;\n}\n.cw-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #0F6E56;\n}\n.cw-tag-input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 12px;\n  color: #111827;\n  background: transparent;\n  flex: 1;\n  min-width: 100px;\n  font-family: inherit;\n}\n.cw-strip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 8px;\n}\n.cw-strip-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.cw-pool[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.cw-pool__search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.cw-pool__search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.cw-pool__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.cw-pool__list[_ngcontent-%COMP%] {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.cw-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.cw-pool__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.cw-pool__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.cw-pool__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cw-pool__item[_ngcontent-%COMP%]:hover, \n.cw-pool__item.checked[_ngcontent-%COMP%] {\n  background: #E1F5EE;\n}\n.cw-pool__check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.cw-pool__check.on[_ngcontent-%COMP%] {\n  background: #0F6E56;\n  border-color: #0F6E56;\n  color: #fff;\n}\n.cw-pool__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cw-pool__name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cw-pool__meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-pool__empty[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.cw-vis-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.cw-vis-card[_ngcontent-%COMP%] {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  cursor: pointer;\n  transition: all 0.15s;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cw-vis-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #9ca3af;\n  margin-bottom: 4px;\n}\n.cw-vis-card__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-vis-card__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-vis-card[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-vis-card.selected[_ngcontent-%COMP%] {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-vis-card.selected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-vis-card.selected[_ngcontent-%COMP%]   .cw-vis-card__label[_ngcontent-%COMP%] {\n  color: #0F6E56;\n}\n.cw-error[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.cw-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.cw-btn-ghost[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.cw-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.cw-btn-draft[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: #fff;\n  cursor: pointer;\n  transition: background 0.12s, border-color 0.12s;\n}\n.cw-btn-draft[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.cw-btn-draft[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.cw-btn-draft[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #0F6E56;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.cw-btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.cw-btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.cw-btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .ac-card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-skeletons[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .ac-card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ac-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.ac-act--arch[_ngcontent-%COMP%] {\n  color: #BA7517;\n}\n.ac-act--arch[_ngcontent-%COMP%]:hover {\n  border-color: #BA7517;\n  color: #BA7517;\n  background: #FAEEDA;\n}\n.ac-act--warn[_ngcontent-%COMP%] {\n  color: #B45309;\n  border-color: #FCD34D;\n}\n.ac-act--warn[_ngcontent-%COMP%]:hover {\n  background: #FFFBEB;\n}\n.ac-act--ok[_ngcontent-%COMP%] {\n  color: #166534;\n  border-color: #86EFAC;\n}\n.ac-act--ok[_ngcontent-%COMP%]:hover {\n  background: #F0FDF4;\n}\n.ac-select[_ngcontent-%COMP%] {\n  height: 32px;\n  padding: 0 10px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n}\n.ac-table-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ac-course-img[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 44px;\n  height: 32px;\n  border-radius: 6px;\n  overflow: hidden;\n  display: block;\n  background: #f3f4f6;\n}\n.ac-course-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-course-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  text-decoration: none;\n}\n.ac-course-title[_ngcontent-%COMP%]:hover {\n  color: #185FA5;\n  text-decoration: underline;\n}\n.ac-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #4b5563;\n  background: #f3f4f6;\n  border-radius: 20px;\n  padding: 2px 8px;\n}\n.ac-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  border-radius: 4px;\n  padding: 2px 7px;\n}\n.ac-badge--free[_ngcontent-%COMP%] {\n  background: #D1FAE5;\n  color: #065F46;\n}\n.ac-badge--paid[_ngcontent-%COMP%] {\n  color: #185FA5;\n  font-weight: 600;\n}\n.ac-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ac-confirm-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 28px 32px;\n  max-width: 380px;\n  width: 90%;\n  text-align: center;\n}\n.ac-confirm-modal[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 12px 0 6px;\n}\n.ac-confirm-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4b5563;\n  margin-bottom: 20px;\n}\n.ac-confirm-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n}\n.ac-confirm-icon--warn[_ngcontent-%COMP%] {\n  background: #FEF3C7;\n  color: #B45309;\n}\n.ac-confirm-icon--ok[_ngcontent-%COMP%] {\n  background: #D1FAE5;\n  color: #065F46;\n}\n.ac-confirm-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n.ac-btn-ghost[_ngcontent-%COMP%] {\n  padding: 7px 18px;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  background: #f3f4f6;\n  font-size: 13px;\n  cursor: pointer;\n}\n.ac-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.ac-btn-warn[_ngcontent-%COMP%] {\n  padding: 7px 18px;\n  border: none;\n  border-radius: 20px;\n  background: #F59E0B;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.ac-btn-warn[_ngcontent-%COMP%]:hover {\n  background: #D97706;\n}\n.ac-btn-ok[_ngcontent-%COMP%] {\n  padding: 7px 18px;\n  border: none;\n  border-radius: 20px;\n  background: #10B981;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.ac-btn-ok[_ngcontent-%COMP%]:hover {\n  background: #059669;\n}\n.ac-skeleton-row[_ngcontent-%COMP%] {\n  height: 48px;\n  background: #f3f4f6;\n  border-radius: 8px;\n  margin: 6px 14px;\n  animation: _ngcontent-%COMP%_ac-pulse 1.2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_ac-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ac-thumb[_ngcontent-%COMP%] {\n  position: relative;\n  width: 108px;\n  height: 68px;\n  border-radius: 8px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.ac-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-thumb-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  font-size: 10px;\n  padding: 1px 6px;\n  border-radius: 10px;\n}\n.ac-cat-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ac-instructor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ac-instructor-av[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #E6F1FB;\n  color: #185FA5;\n  font-size: 11px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.ac-link[_ngcontent-%COMP%] {\n  color: #185FA5;\n  text-decoration: none;\n}\n.ac-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.ac-select[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  outline: none;\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.ac-select[_ngcontent-%COMP%]:focus {\n  border-color: #185FA5;\n}\n.ac-topbar-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ac-alert-close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n  font-size: 14px;\n}\n.ac-alert-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=superadmin-course.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminCourseComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-course", standalone: true, imports: [CommonModule, RouterModule, FormsModule, MatSortModule, CustomPaginationComponent], template: `<div class="ac-shell">\r
\r
  <!-- \u2500\u2500 Topbar \u2500\u2500 -->\r
  <div class="ac-topbar">\r
    <button type="button" class="ac-tab active">\r
      <i class="isax isax-task"></i>Liste\r
    </button>\r
    <a [routerLink]="routes.superadminCourseGrid" class="ac-tab">\r
      <i class="isax isax-element-3"></i>Grille\r
    </a>\r
    <span class="ac-spacer"></span>\r
    <div style="display:flex;align-items:center;padding:0 10px;">\r
      <span class="ac-topbar-info">{{ totalData }} formation{{ totalData !== 1 ? 's' : '' }}</span>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 KPI \u2500\u2500 -->\r
  <div class="ac-kpi-row">\r
    <div class="ac-kpi">\r
      <div class="ac-kpi__label"><i class="isax isax-tick-circle"></i>Publi\xE9es</div>\r
      <div class="ac-kpi__val">{{ stats.active }}</div>\r
      <div class="ac-kpi__delta up">actives</div>\r
    </div>\r
    <div class="ac-kpi">\r
      <div class="ac-kpi__label"><i class="isax isax-clock"></i>En attente</div>\r
      <div class="ac-kpi__val">{{ stats.pending }}</div>\r
      <div class="ac-kpi__delta neutral">\xE0 valider</div>\r
    </div>\r
    <div class="ac-kpi">\r
      <div class="ac-kpi__label"><i class="isax isax-document"></i>Brouillons</div>\r
      <div class="ac-kpi__val">{{ stats.draft }}</div>\r
    </div>\r
    <div class="ac-kpi">\r
      <div class="ac-kpi__label"><i class="isax isax-gift"></i>Gratuites</div>\r
      <div class="ac-kpi__val">{{ stats.free }}</div>\r
    </div>\r
    <div class="ac-kpi">\r
      <div class="ac-kpi__label"><i class="isax isax-dollar-circle"></i>Payantes</div>\r
      <div class="ac-kpi__val">{{ stats.paid }}</div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 Toolbar \u2500\u2500 -->\r
  <div class="ac-toolbar">\r
    <div class="ac-search">\r
      <i class="isax isax-search-normal ac-search__icon"></i>\r
      <input class="ac-search__input" type="text"\r
             [(ngModel)]="searchDataValue"\r
             (ngModelChange)="searchData($event)"\r
             placeholder="Titre, formateur, cat\xE9gorie\u2026">\r
    </div>\r
    <!-- Statut filter chips -->\r
    <button type="button" class="ac-chip" [class.ac-chip--on]="selectedStatus===''"\r
            (click)="filterByStatus('')">Tous</button>\r
    <button type="button" class="ac-chip" [class.ac-chip--on]="selectedStatus==='published'"\r
            (click)="filterByStatus('published')">\r
      <i class="isax isax-tick-circle"></i>Publi\xE9es\r
    </button>\r
    <button type="button" class="ac-chip" [class.ac-chip--on]="selectedStatus==='pending'"\r
            (click)="filterByStatus('pending')">\r
      <i class="isax isax-clock"></i>En attente\r
    </button>\r
    <button type="button" class="ac-chip" [class.ac-chip--on]="selectedStatus==='draft'"\r
            (click)="filterByStatus('draft')">\r
      <i class="isax isax-document"></i>Brouillons\r
    </button>\r
    <span class="ac-spacer"></span>\r
    <select class="ac-select" title="Taille de page" [(ngModel)]="pageSize" (change)="PageSize()">\r
      <option value="5">5 / page</option>\r
      <option value="10">10 / page</option>\r
      <option value="25">25 / page</option>\r
      <option value="50">50 / page</option>\r
    </select>\r
  </div>\r
\r
  <!-- \u2500\u2500 Alert \u2500\u2500 -->\r
  <div class="ac-alert" *ngIf="error">\r
    <i class="isax isax-warning-2"></i>{{ error }}\r
    <button type="button" class="ac-alert-close" (click)="error=''"><i class="isax isax-close-circle"></i></button>\r
  </div>\r
\r
  <!-- \u2500\u2500 Loading \u2500\u2500 -->\r
  <div class="ac-empty" *ngIf="loading">\r
    <i class="isax isax-book-1"></i>Chargement des formations\u2026\r
  </div>\r
\r
  <!-- \u2500\u2500 Table \u2500\u2500 -->\r
  <ng-container *ngIf="!loading">\r
    <table class="ac-table" *ngIf="formations.length > 0">\r
      <thead>\r
        <tr>\r
          <th style="width:136px;">Formation</th>\r
          <th>Titre</th>\r
          <th style="width:110px;">Cat\xE9gorie</th>\r
          <th style="width:150px;">Formateur</th>\r
          <th style="width:80px;text-align:center;">Participants</th>\r
          <th style="width:90px;text-align:center;">Co\xFBt</th>\r
          <th style="width:72px;text-align:center;">Dur\xE9e</th>\r
          <th style="width:88px;text-align:center;">Statut</th>\r
          <th style="width:80px;"></th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let f of formations; trackBy: trackByFormation">\r
          <!-- Image -->\r
          <td style="padding:8px 14px;">\r
            <div class="ac-thumb">\r
              <img [src]="getDefaultImage(f)" [alt]="f.titre"\r
                   onerror="this.src='assets/img/course/course-01.jpg'">\r
              <span class="ac-thumb-badge">{{ f.nombre_modules || 0 }}</span>\r
            </div>\r
          </td>\r
          <!-- Titre -->\r
          <td>\r
            <a [href]="routes.courseDetails + '/' + f.id" target="_blank" class="ac-table-name ac-link">{{ f.titre }}</a>\r
            <div class="ac-table-sub">\r
              <span *ngIf="f.niveau_display || f.niveau">{{ f.niveau_display || f.niveau }}</span>\r
              <span *ngIf="f.langue"> \xB7 {{ f.langue }}</span>\r
            </div>\r
          </td>\r
          <!-- Cat\xE9gorie -->\r
          <td>\r
            <span class="ac-cat-pill"\r
                  [style.background]="(f.categorie?.couleur || '#6c757d') + '22'"\r
                  [style.color]="f.categorie?.couleur || '#6c757d'">\r
              {{ f.categorie?.nom || '\u2014' }}\r
            </span>\r
          </td>\r
          <!-- Formateur -->\r
          <td>\r
            <div class="ac-instructor">\r
              <div class="ac-instructor-av">{{ (f.formateur?.prenom?.[0] ?? 'F') + (f.formateur?.nom?.[0] ?? '') }}</div>\r
              <div>\r
                <div class="ac-table-name" style="font-size:12px;">{{ f.formateur_nom || 'Non assign\xE9' }}</div>\r
                <div class="ac-table-sub" *ngIf="f.formateur?.fonction">{{ f.formateur?.fonction }}</div>\r
              </div>\r
            </div>\r
          </td>\r
          <!-- Participants -->\r
          <td style="text-align:center;font-size:13px;">{{ f.nb_max_participants || 0 }}</td>\r
          <!-- Prix -->\r
          <td style="text-align:center;">\r
            <span class="ac-status" [attr.data-s]="isFormationGratuite(f) ? 'pub' : 'pending'">\r
              {{ formatPrix(f.prix) }}\r
            </span>\r
          </td>\r
          <!-- Dur\xE9e -->\r
          <td style="text-align:center;font-size:13px;">{{ f.duree_totale || 0 }}h</td>\r
          <!-- Statut -->\r
          <td style="text-align:center;">\r
            <span class="ac-status" [attr.data-s]="f.est_publie && f.inscription_ouverte ? 'pub' : !f.est_publie ? 'draft' : 'done'">\r
              {{ getStatusText(f) }}\r
            </span>\r
          </td>\r
          <!-- Actions -->\r
          <td>\r
            <div class="ac-actions">\r
              <a [href]="routes.courseDetails + '/' + f.id" target="_blank" class="ac-act" title="Voir">\r
                <i class="isax isax-eye"></i>\r
              </a>\r
              <a [href]="'/courses/instructor-course-edit/' + f.id" target="_blank" class="ac-act" title="Modifier">\r
                <i class="isax isax-edit-2"></i>\r
              </a>\r
              <button type="button" class="ac-act ac-act--del" (click)="deleteFormation(f)" title="Supprimer">\r
                <i class="isax isax-trash"></i>\r
              </button>\r
            </div>\r
          </td>\r
        </tr>\r
      </tbody>\r
    </table>\r
\r
    <!-- Empty -->\r
    <div class="ac-empty" *ngIf="formations.length === 0">\r
      <i class="isax isax-book-1"></i>\r
      {{ searchDataValue || selectedStatus ? 'Aucun r\xE9sultat pour ces filtres' : 'Aucune formation trouv\xE9e' }}\r
      <button type="button" class="ac-chip" style="margin-top:10px;"\r
              *ngIf="searchDataValue || selectedStatus"\r
              (click)="searchDataValue=''; filterByStatus('')">\r
        <i class="isax isax-refresh"></i>R\xE9initialiser\r
      </button>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <app-custom-pagination\r
      *ngIf="formations.length > 0 && totalData > pageSize"\r
      [totalItems]="totalData"\r
      [pageSize]="pageSize"\r
      [currentPage]="currentPage"\r
      (pageChange)="onPageChange($event)">\r
    </app-custom-pagination>\r
  </ng-container>\r
\r
</div>\r
`, styles: ['/* src/app/features/superadmin/superadmin-course/superadmin-course.component.scss */\n.ac-shell {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n}\n.ac-topbar {\n  display: flex;\n  align-items: stretch;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-tab {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 16px;\n  font-size: 13px;\n  color: #4b5563;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: color 0.15s, border-color 0.15s;\n}\n.ac-tab i {\n  font-size: 15px;\n}\n.ac-tab.active {\n  color: #185FA5;\n  border-bottom-color: #185FA5;\n  font-weight: 500;\n}\n.ac-tab:hover:not(.active) {\n  color: #111827;\n}\n.ac-toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #fff;\n}\n.ac-search {\n  position: relative;\n  flex: 1;\n  min-width: 160px;\n  max-width: 220px;\n}\n.ac-search__icon {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.ac-search__input {\n  width: 100%;\n  padding: 6px 10px 6px 30px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.ac-search__input:focus {\n  border-color: #185FA5;\n  background: #fff;\n}\n.ac-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    background 0.15s,\n    color 0.15s;\n}\n.ac-chip:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.ac-chip--on {\n  background: #E6F1FB;\n  border-color: #85B7EB;\n  color: #0C447C;\n}\n.ac-spacer {\n  margin-left: auto;\n}\n.ac-view-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-btn.active,\n.ac-view-btn:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-add-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background: #185FA5;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.15s;\n}\n.ac-add-btn:hover {\n  opacity: 0.9;\n  color: #fff;\n}\n.ac-add-btn i {\n  font-size: 13px;\n}\n.ac-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  padding: 12px 14px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.ac-kpi {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.ac-kpi__label {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  color: #4b5563;\n  margin-bottom: 4px;\n}\n.ac-kpi__label i {\n  font-size: 13px;\n}\n.ac-kpi__val {\n  font-size: 22px;\n  font-weight: 500;\n  color: #111827;\n}\n.ac-kpi__delta {\n  font-size: 11px;\n  margin-top: 2px;\n}\n.ac-kpi__delta.up {\n  color: #3B6D11;\n}\n.ac-kpi__delta.down {\n  color: #A32D2D;\n}\n.ac-kpi__delta.neutral {\n  color: #9ca3af;\n}\n.ac-skeletons {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n}\n.ac-skeleton-card {\n  height: 220px;\n  border-radius: 12px;\n  background: #f3f4f6;\n  animation: ac-shimmer 1.4s ease-in-out infinite;\n}\n@keyframes ac-shimmer {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ac-alert {\n  margin: 12px 14px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-card-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  padding: 14px;\n  background: #f9fafb;\n}\n.ac-fcard {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  transition: border-color 0.15s;\n}\n.ac-fcard:hover {\n  border-color: #aec6e4;\n}\n.ac-fcard__thumb {\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  position: relative;\n  overflow: hidden;\n}\n.ac-fcard__thumb[data-th=blue] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.ac-fcard__thumb[data-th=teal] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.ac-fcard__thumb[data-th=purple] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.ac-fcard__thumb[data-th=amber] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ac-fcard__thumb[data-th=coral] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.ac-fcard__thumb[data-th=green] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.ac-fcard__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-fcard__body {\n  padding: 10px 12px;\n  flex: 1;\n}\n.ac-fcard__cat {\n  font-size: 10px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 4px;\n}\n.ac-fcard__cat[data-cat=tech] {\n  color: #0C447C;\n}\n.ac-fcard__cat[data-cat=rh] {\n  color: #085041;\n}\n.ac-fcard__cat[data-cat=mgmt] {\n  color: #534AB7;\n}\n.ac-fcard__cat[data-cat=fin] {\n  color: #633806;\n}\n.ac-fcard__cat[data-cat=default] {\n  color: #4b5563;\n}\n.ac-fcard__title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  margin-bottom: 6px;\n  line-height: 1.3;\n}\n.ac-fcard__meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ac-fcard__meta span {\n  font-size: 11px;\n  color: #4b5563;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-fcard__meta span i {\n  font-size: 12px;\n}\n.ac-fcard__footer {\n  padding: 8px 12px;\n  border-top: 1px solid #f3f4f6;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ac-fcard__actions {\n  display: flex;\n  gap: 4px;\n  margin-left: auto;\n}\n.ac-status {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 500;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.ac-status[data-s=pub] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=draft] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=pending] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-status[data-s=plan] {\n  background: #EEF2FF;\n  color: #3730A3;\n}\n.ac-status[data-s=live] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ac-status[data-s=done] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.ac-status[data-s=cancel] {\n  background: #FEF2F2;\n  color: #991B1B;\n}\n.ac-prog {\n  flex: 1;\n  margin: 0 6px;\n}\n.ac-prog__bar {\n  height: 4px;\n  background: #f3f4f6;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.ac-prog__fill {\n  height: 100%;\n  border-radius: 4px;\n  background: #185FA5;\n}\n.ac-prog__txt {\n  font-size: 10px;\n  color: #9ca3af;\n  text-align: right;\n  margin-top: 2px;\n}\n.ac-actions {\n  display: flex;\n  gap: 5px;\n}\n.ac-act {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-act:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-act--del {\n  color: #991b1b;\n  border-color: #fca5a5;\n}\n.ac-act--del:hover {\n  background: #fef2f2;\n}\n.ac-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.ac-table th {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.ac-table td {\n  font-size: 13px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  vertical-align: middle;\n}\n.ac-table tr:last-child td {\n  border-bottom: none;\n}\n.ac-table tr:hover td {\n  background: #f9fafb;\n}\n.ac-table-name {\n  font-size: 13px;\n  font-weight: 500;\n}\n.ac-table-sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.ac-empty {\n  text-align: center;\n  padding: 40px 14px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.ac-empty i {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n}\n.ac-empty--span {\n  grid-column: 1/-1;\n}\n.ac-empty-tab {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 14px;\n  gap: 12px;\n  color: #9ca3af;\n}\n.ac-empty-tab i {\n  font-size: 2.5rem;\n}\n.ac-empty-tab p {\n  font-size: 14px;\n}\n.ac-pager {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 1px solid #f3f4f6;\n}\n.ac-pager__info {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ac-pager__btns {\n  display: flex;\n  gap: 4px;\n}\n.ac-pager__btn {\n  padding: 4px 9px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  color: #4b5563;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.ac-pager__btn:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.ac-pager__btn.active {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.ac-pager__btn:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ac-toolbar--chips {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-top: none;\n  background: #fff;\n  gap: 6px;\n}\n.ac-view-group {\n  display: inline-flex;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.ac-view-toggle {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: background 0.12s, color 0.12s;\n}\n.ac-view-toggle i {\n  font-size: 14px;\n}\n.ac-view-toggle.active {\n  background: #f3f4f6;\n  color: #111827;\n  font-weight: 500;\n}\n.ac-view-toggle:hover:not(.active) {\n  background: #f9fafb;\n}\n.ac-sessions-list {\n  padding: 10px 14px;\n  background: #f9fafb;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ac-session-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  transition: border-color 0.15s;\n}\n.ac-session-row:hover {\n  border-color: #aec6e4;\n}\n.ac-session-date {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 40px;\n}\n.ac-session-date__day {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1;\n}\n.ac-session-date__month {\n  font-size: 10px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.ac-session-info {\n  flex: 1;\n  min-width: 0;\n}\n.ac-session-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ac-session-meta {\n  display: flex;\n  gap: 10px;\n  margin-top: 3px;\n  flex-wrap: wrap;\n}\n.ac-session-meta span {\n  font-size: 11px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.ac-session-meta span i {\n  font-size: 12px;\n}\n.ac-session-badges {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.ac-session-places {\n  font-size: 11px;\n  color: #4b5563;\n  white-space: nowrap;\n}\n.ac-cal {\n  padding: 12px 14px 14px;\n  background: #f9fafb;\n}\n.ac-cal__nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.ac-cal__nav-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 14px;\n  color: #4b5563;\n  transition: background 0.12s;\n}\n.ac-cal__nav-btn:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.ac-cal__nav-label {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n  text-transform: capitalize;\n}\n.ac-cal__grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 4px;\n}\n.ac-cal__head {\n  text-align: center;\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 4px 0 6px;\n}\n.ac-cal__cell {\n  min-height: 80px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 5px 5px 4px;\n  overflow: hidden;\n  transition: border-color 0.12s;\n}\n.ac-cal__cell:hover {\n  border-color: #aec6e4;\n}\n.ac-cal__cell--other {\n  background: #f9fafb;\n}\n.ac-cal__cell--other .ac-cal__day {\n  color: #9ca3af;\n}\n.ac-cal__cell--today {\n  border-color: #185FA5;\n}\n.ac-cal__cell--today .ac-cal__day {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  background: #185FA5;\n  color: #fff;\n  border-radius: 50%;\n}\n.ac-cal__day {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n  line-height: 1;\n  margin-bottom: 4px;\n  display: block;\n}\n.ac-cal__events {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.ac-cal__event {\n  font-size: 10px;\n  padding: 2px 4px;\n  border-radius: 3px;\n  background: #E6F1FB;\n  color: #0C447C;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: default;\n}\n.ac-cal__event--dist {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ac-cal__event--hybr {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.wz-modal {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 620px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.wz-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-head__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E6F1FB;\n  color: #185FA5;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.wz-head__text {\n  flex: 1;\n}\n.wz-head__title {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-head__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.wz-close {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.wz-close:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.wz-stepper {\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.wz-step {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.wz-step__circle {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 500;\n  flex-shrink: 0;\n  border: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  color: #9ca3af;\n  transition: all 0.2s;\n}\n.wz-step__circle.active {\n  background: #185FA5;\n  color: #fff;\n  border-color: #185FA5;\n}\n.wz-step__circle.done {\n  background: #EAF3DE;\n  color: #27500A;\n  border-color: #97C459;\n}\n.wz-step__label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #9ca3af;\n}\n.wz-step__label.active {\n  color: #185FA5;\n}\n.wz-step__label.done {\n  color: #3B6D11;\n}\n.wz-step__line {\n  flex: 1;\n  height: 0.5px;\n  background: #e5e7eb;\n  margin: 0 8px;\n  min-width: 20px;\n}\n.wz-body {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.wz-body::-webkit-scrollbar {\n  width: 4px;\n}\n.wz-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.wz-body::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.wz-field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.wz-field--full {\n  grid-column: 1/-1;\n}\n.wz-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.wz-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-req {\n  color: #E24B4A;\n}\n.wz-input {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.wz-input:focus {\n  border-color: #185FA5;\n  box-shadow: 0 0 0 2px #E6F1FB;\n}\n.wz-input[readonly] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.wz-textarea {\n  resize: vertical;\n  min-height: 68px;\n  line-height: 1.5;\n}\n.wz-hint {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-domain-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.wz-domain-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.wz-domain-card i {\n  font-size: 20px;\n}\n.wz-domain-card span {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.wz-domain-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.wz-domain-card.selected {\n  border-color: #185FA5;\n  background: #E6F1FB;\n}\n.wz-domain-card.selected span {\n  color: #0C447C;\n}\n.wz-strip {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 10px;\n}\n.wz-strip__hint {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.wz-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  border: 0.5px solid #85B7EB;\n  font-size: 12px;\n  color: #0C447C;\n}\n.wz-chip i {\n  font-size: 11px;\n  cursor: pointer;\n  color: #378ADD;\n}\n.wz-chip i:hover {\n  color: #0C447C;\n}\n.wz-pool {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 6px;\n}\n.wz-pool__search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-pool__search i {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.wz-pool__search input {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.wz-pool__list {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.wz-pool__list::-webkit-scrollbar {\n  width: 3px;\n}\n.wz-pool__list::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.wz-pool__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.wz-pool__item:last-child {\n  border-bottom: none;\n}\n.wz-pool__item:hover,\n.wz-pool__item.checked {\n  background: #f9fafb;\n}\n.wz-pool__check {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.wz-pool__check.on {\n  background: #185FA5;\n  border-color: #185FA5;\n  color: #fff;\n}\n.wz-pool__thumb {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.wz-pool__thumb[data-th=blue] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.wz-pool__thumb[data-th=teal] {\n  background: #E1F5EE;\n  color: #0F6E56;\n}\n.wz-pool__thumb[data-th=purple] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.wz-pool__thumb[data-th=amber] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.wz-pool__thumb[data-th=coral] {\n  background: #FAECE7;\n  color: #993C1D;\n}\n.wz-pool__thumb[data-th=green] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.wz-pool__info {\n  flex: 1;\n  min-width: 0;\n}\n.wz-pool__name {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.wz-pool__meta {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.wz-pool__tag {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  background: #f3f4f6;\n  color: #4b5563;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.wz-pool__empty {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.wz-toggle-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 0.5px solid #f3f4f6;\n}\n.wz-toggle-row:last-child {\n  border-bottom: none;\n}\n.wz-toggle-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-toggle-sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.wz-toggle {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.wz-toggle::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.wz-toggle.on {\n  background: #185FA5;\n}\n.wz-toggle.on::after {\n  left: 19px;\n}\n.wz-info-banner {\n  display: flex;\n  gap: 10px;\n  padding: 10px 12px;\n  background: #E6F1FB;\n  border-radius: 8px;\n  border: 0.5px solid #85B7EB;\n  margin-bottom: 12px;\n  font-size: 12px;\n  color: #0C447C;\n  line-height: 1.5;\n}\n.wz-info-banner i {\n  font-size: 15px;\n  color: #185FA5;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.wz-recap-card {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 10px;\n}\n.wz-recap-title {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.wz-recap-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px 0;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.wz-recap-row:last-child {\n  border-bottom: none;\n}\n.wz-rl {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-rv {\n  font-size: 12px;\n  font-weight: 500;\n  color: #111827;\n}\n.wz-recap-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.wz-rc {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.wz-error {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.wz-foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.wz-foot__info {\n  flex: 1;\n  font-size: 12px;\n  color: #9ca3af;\n}\n.wz-btn-ghost {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.wz-btn-ghost:hover {\n  background: #f3f4f6;\n}\n.wz-btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #185FA5;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-primary i {\n  font-size: 13px;\n}\n.wz-btn-primary:hover {\n  opacity: 0.9;\n}\n.wz-btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.wz-btn-success {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #3B6D11;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.wz-btn-success i {\n  font-size: 13px;\n}\n.wz-btn-success:hover {\n  opacity: 0.9;\n}\n.wz-btn-success:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.cw-modal {\n  background: #fff;\n  border-radius: 12px;\n  border: 0.5px solid #e5e7eb;\n  width: 100%;\n  max-width: 600px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);\n}\n.cw-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-bottom: 0.5px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.cw-head__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #E1F5EE;\n  color: #0F6E56;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cw-head__text {\n  flex: 1;\n}\n.cw-head__title {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-head__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 1px;\n}\n.cw-close {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 0.5px solid #e5e7eb;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 16px;\n  transition: background 0.12s;\n}\n.cw-close:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.cw-body {\n  padding: 18px 20px;\n  overflow-y: auto;\n  flex: 1;\n}\n.cw-body::-webkit-scrollbar {\n  width: 4px;\n}\n.cw-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.cw-body::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 4px;\n}\n.cw-upload-zone {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 24px 16px;\n  border: 1.5px dashed #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  cursor: pointer;\n  margin-bottom: 16px;\n  transition: border-color 0.15s, background 0.15s;\n}\n.cw-upload-zone i {\n  font-size: 28px;\n  color: #9ca3af;\n}\n.cw-upload-zone span {\n  font-size: 13px;\n  color: #4b5563;\n  font-weight: 500;\n}\n.cw-upload-zone__hint {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 400;\n}\n.cw-upload-zone:hover {\n  border-color: #79C9AB;\n  background: #E1F5EE;\n}\n.cw-upload-zone:hover i {\n  color: #0F6E56;\n}\n.cw-field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.cw-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.cw-label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-req {\n  color: #E24B4A;\n}\n.cw-input {\n  width: 100%;\n  padding: 7px 10px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.cw-input:focus {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-input[readonly] {\n  background: #f9fafb;\n  color: #4b5563;\n  cursor: default;\n}\n.cw-textarea {\n  resize: vertical;\n  min-height: 72px;\n  line-height: 1.5;\n}\n.cw-hint {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-toggle-inline {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 0;\n}\n.cw-toggle {\n  width: 36px;\n  height: 20px;\n  border-radius: 20px;\n  background: #e5e7eb;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.cw-toggle::after {\n  content: "";\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #fff;\n  top: 3px;\n  left: 3px;\n  transition: left 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.cw-toggle.on {\n  background: #0F6E56;\n}\n.cw-toggle.on::after {\n  left: 19px;\n}\n.cw-toggle-label {\n  font-size: 12px;\n  color: #4b5563;\n}\n.cw-section-label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 8px;\n}\n.cw-domain-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-domain-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 8px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  text-align: center;\n  transition: all 0.15s;\n}\n.cw-domain-card i {\n  font-size: 20px;\n  color: #9ca3af;\n}\n.cw-domain-card span {\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b5563;\n}\n.cw-domain-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-domain-card.selected {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-domain-card.selected i {\n  color: #0F6E56;\n}\n.cw-domain-card.selected span {\n  color: #0F6E56;\n}\n.cw-level-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.cw-level-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.cw-level-card__label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-level-card__sub {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.cw-level-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-level-card.selected {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-level-card.selected .cw-level-card__label {\n  color: #0F6E56;\n}\n.cw-level-card.selected .cw-level-card__sub {\n  color: rgb(148.5, 219.5, 194.65);\n}\n.cw-tags-box {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n  min-height: 36px;\n  padding: 6px 8px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.cw-tags-box:focus-within {\n  border-color: #0F6E56;\n  box-shadow: 0 0 0 2px #E1F5EE;\n}\n.cw-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  background: #E1F5EE;\n  border: 0.5px solid #79C9AB;\n  font-size: 12px;\n  color: #0F6E56;\n}\n.cw-tag i {\n  font-size: 11px;\n  cursor: pointer;\n  color: #79C9AB;\n}\n.cw-tag i:hover {\n  color: #0F6E56;\n}\n.cw-tag-input {\n  border: none;\n  outline: none;\n  font-size: 12px;\n  color: #111827;\n  background: transparent;\n  flex: 1;\n  min-width: 100px;\n  font-family: inherit;\n}\n.cw-strip {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  min-height: 34px;\n  margin-bottom: 8px;\n}\n.cw-strip-hint {\n  font-size: 12px;\n  color: #9ca3af;\n  padding: 6px 0;\n}\n.cw-pool {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.cw-pool__search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-bottom: 0.5px solid #e5e7eb;\n}\n.cw-pool__search i {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.cw-pool__search input {\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.cw-pool__list {\n  max-height: 180px;\n  overflow-y: auto;\n}\n.cw-pool__list::-webkit-scrollbar {\n  width: 3px;\n}\n.cw-pool__list::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.cw-pool__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-bottom: 0.5px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.cw-pool__item:last-child {\n  border-bottom: none;\n}\n.cw-pool__item:hover,\n.cw-pool__item.checked {\n  background: #E1F5EE;\n}\n.cw-pool__check {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 0.5px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #9ca3af;\n  transition: all 0.12s;\n}\n.cw-pool__check.on {\n  background: #0F6E56;\n  border-color: #0F6E56;\n  color: #fff;\n}\n.cw-pool__info {\n  flex: 1;\n  min-width: 0;\n}\n.cw-pool__name {\n  font-size: 13px;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cw-pool__meta {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-pool__empty {\n  padding: 16px 12px;\n  font-size: 12px;\n  color: #9ca3af;\n  text-align: center;\n}\n.cw-vis-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.cw-vis-card {\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  cursor: pointer;\n  transition: all 0.15s;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cw-vis-card i {\n  font-size: 20px;\n  color: #9ca3af;\n  margin-bottom: 4px;\n}\n.cw-vis-card__label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n}\n.cw-vis-card__sub {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.cw-vis-card:hover {\n  border-color: #9ca3af;\n  background: #f9fafb;\n}\n.cw-vis-card.selected {\n  border-color: #0F6E56;\n  background: #E1F5EE;\n}\n.cw-vis-card.selected i {\n  color: #0F6E56;\n}\n.cw-vis-card.selected .cw-vis-card__label {\n  color: #0F6E56;\n}\n.cw-error {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 12px;\n  color: #a32d2d;\n  background: #fef2f2;\n  border: 0.5px solid #fca5a5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.cw-foot {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 18px;\n  border-top: 0.5px solid #e5e7eb;\n  background: #f9fafb;\n  flex-shrink: 0;\n}\n.cw-btn-ghost {\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: transparent;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.cw-btn-ghost:hover {\n  background: #f3f4f6;\n}\n.cw-btn-draft {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border: 0.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  background: #fff;\n  cursor: pointer;\n  transition: background 0.12s, border-color 0.12s;\n}\n.cw-btn-draft i {\n  font-size: 13px;\n}\n.cw-btn-draft:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.cw-btn-draft:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cw-btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  background: #0F6E56;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.cw-btn-primary i {\n  font-size: 13px;\n}\n.cw-btn-primary:hover {\n  opacity: 0.9;\n}\n.cw-btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .ac-card-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .ac-skeletons {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .ac-card-grid {\n    grid-template-columns: 1fr;\n  }\n  .ac-kpi-row {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.ac-act--arch {\n  color: #BA7517;\n}\n.ac-act--arch:hover {\n  border-color: #BA7517;\n  color: #BA7517;\n  background: #FAEEDA;\n}\n.ac-act--warn {\n  color: #B45309;\n  border-color: #FCD34D;\n}\n.ac-act--warn:hover {\n  background: #FFFBEB;\n}\n.ac-act--ok {\n  color: #166534;\n  border-color: #86EFAC;\n}\n.ac-act--ok:hover {\n  background: #F0FDF4;\n}\n.ac-select {\n  height: 32px;\n  padding: 0 10px;\n  font-size: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  color: #4b5563;\n  cursor: pointer;\n}\n.ac-table-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ac-course-img {\n  flex-shrink: 0;\n  width: 44px;\n  height: 32px;\n  border-radius: 6px;\n  overflow: hidden;\n  display: block;\n  background: #f3f4f6;\n}\n.ac-course-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-course-title {\n  font-size: 13px;\n  font-weight: 500;\n  color: #111827;\n  text-decoration: none;\n}\n.ac-course-title:hover {\n  color: #185FA5;\n  text-decoration: underline;\n}\n.ac-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #4b5563;\n  background: #f3f4f6;\n  border-radius: 20px;\n  padding: 2px 8px;\n}\n.ac-badge {\n  font-size: 11px;\n  font-weight: 500;\n  border-radius: 4px;\n  padding: 2px 7px;\n}\n.ac-badge--free {\n  background: #D1FAE5;\n  color: #065F46;\n}\n.ac-badge--paid {\n  color: #185FA5;\n  font-weight: 600;\n}\n.ac-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ac-confirm-modal {\n  background: #fff;\n  border-radius: 12px;\n  padding: 28px 32px;\n  max-width: 380px;\n  width: 90%;\n  text-align: center;\n}\n.ac-confirm-modal h4 {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 12px 0 6px;\n}\n.ac-confirm-modal p {\n  font-size: 13px;\n  color: #4b5563;\n  margin-bottom: 20px;\n}\n.ac-confirm-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n}\n.ac-confirm-icon--warn {\n  background: #FEF3C7;\n  color: #B45309;\n}\n.ac-confirm-icon--ok {\n  background: #D1FAE5;\n  color: #065F46;\n}\n.ac-confirm-btns {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n.ac-btn-ghost {\n  padding: 7px 18px;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  background: #f3f4f6;\n  font-size: 13px;\n  cursor: pointer;\n}\n.ac-btn-ghost:hover {\n  background: #e5e7eb;\n}\n.ac-btn-warn {\n  padding: 7px 18px;\n  border: none;\n  border-radius: 20px;\n  background: #F59E0B;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.ac-btn-warn:hover {\n  background: #D97706;\n}\n.ac-btn-ok {\n  padding: 7px 18px;\n  border: none;\n  border-radius: 20px;\n  background: #10B981;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.ac-btn-ok:hover {\n  background: #059669;\n}\n.ac-skeleton-row {\n  height: 48px;\n  background: #f3f4f6;\n  border-radius: 8px;\n  margin: 6px 14px;\n  animation: ac-pulse 1.2s ease-in-out infinite;\n}\n@keyframes ac-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.45;\n  }\n}\n.ac-thumb {\n  position: relative;\n  width: 108px;\n  height: 68px;\n  border-radius: 8px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.ac-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.ac-thumb-badge {\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  font-size: 10px;\n  padding: 1px 6px;\n  border-radius: 10px;\n}\n.ac-cat-pill {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.ac-instructor {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ac-instructor-av {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #E6F1FB;\n  color: #185FA5;\n  font-size: 11px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.ac-link {\n  color: #185FA5;\n  text-decoration: none;\n}\n.ac-link:hover {\n  text-decoration: underline;\n}\n.ac-select {\n  padding: 5px 10px;\n  font-size: 12px;\n  color: #4b5563;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: transparent;\n  outline: none;\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.ac-select:focus {\n  border-color: #185FA5;\n}\n.ac-topbar-info {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ac-alert-close {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n  font-size: 14px;\n}\n.ac-alert-close:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=superadmin-course.component.css.map */\n'] }]
  }], () => [{ type: FormationService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminCourseComponent, { className: "SuperadminCourseComponent", filePath: "app/features/superadmin/superadmin-course/superadmin-course.component.ts", lineNumber: 19 });
})();
export {
  SuperadminCourseComponent
};
//# sourceMappingURL=chunk-XIXDFIGU.js.map
