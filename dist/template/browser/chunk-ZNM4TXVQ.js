import {
  UserAddComponent
} from "./chunk-Q3UWY3VU.js";
import {
  httpErrorMessage
} from "./chunk-RL3SOXDI.js";
import {
  UserService
} from "./chunk-C3XHZ4TX.js";
import "./chunk-AOQ7MVQS.js";
import {
  CustomPaginationComponent
} from "./chunk-QBIBOWET.js";
import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-VL5HRZ2I.js";
import "./chunk-M25A5D3F.js";
import "./chunk-4TVHDBGR.js";
import "./chunk-MQ5W77M6.js";
import "./chunk-K7E3GT3E.js";
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
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
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/adminrh/user-group-list/user-group-list.component.ts
var _c0 = (a0) => ["/superadmin/user-details", a0];
function UserGroupListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, "\n");
  }
}
function UserGroupListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "span", 25);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function UserGroupListComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 26)(3, "a", 27)(4, "p", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "div", 26)(19, "button", 29);
    \u0275\u0275listener("click", function UserGroupListComponent_tr_34_Template_button_click_19_listener() {
      const data_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editUser(data_r3));
    });
    \u0275\u0275element(20, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 31);
    \u0275\u0275listener("click", function UserGroupListComponent_tr_34_Template_button_click_21_listener() {
      const data_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.deleteUser(data_r3.id));
    });
    \u0275\u0275element(22, "i", 32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, data_r3.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.name || data_r3.prenom + " " + data_r3.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.numero || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.fonction || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((data_r3.entreprise == null ? null : data_r3.entreprise.nom) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getStatutBadgeClass(data_r3.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3.statut === 1 ? "Actif" : "Inactif", " ");
  }
}
function UserGroupListComponent_div_35_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 37)(1, "a", 38);
    \u0275\u0275listener("click", function UserGroupListComponent_div_35_li_8_Template_a_click_1_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPageChange(i_r6 + 1));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.currentPage === i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
  }
}
function UserGroupListComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "nav", 35)(4, "ul", 36)(5, "li", 37)(6, "a", 38);
    \u0275\u0275listener("click", function UserGroupListComponent_div_35_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange(ctx_r0.currentPage - 1));
    });
    \u0275\u0275element(7, "i", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, UserGroupListComponent_div_35_li_8_Template, 3, 3, "li", 40);
    \u0275\u0275elementStart(9, "li", 37)(10, "a", 38);
    \u0275\u0275listener("click", function UserGroupListComponent_div_35_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange(ctx_r0.currentPage + 1));
    });
    \u0275\u0275element(11, "i", 41);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Affichage de ", ctx_r0.skip + 1, " \xE0 ", ctx_r0.skip + ctx_r0.tableData.length, " sur ", ctx_r0.totalData, " utilisateurs ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r0.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.pageSelection);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r0.currentPage === ctx_r0.pageSelection.length);
  }
}
var UserGroupListComponent = class _UserGroupListComponent {
  userService;
  router;
  pageSize = 10;
  tableData = [];
  tableDataCopy = [];
  actualData = [];
  currentPage = 1;
  skip = 0;
  limit = this.pageSize;
  serialNumberArray = [];
  totalData = 0;
  pageSelection = [];
  searchDataValue = "";
  loading = false;
  error = "";
  userDialog = false;
  isEditMode = false;
  selectedUser = null;
  constructor(userService, router) {
    this.userService = userService;
    this.router = router;
  }
  ngOnInit() {
    this.getUserList();
  }
  getUserList() {
    this.loading = true;
    this.error = "";
    this.userService.getMyUsersgroup().subscribe({
      next: (response) => {
        console.log("===== R\xC9PONSE COMPL\xC8TE API =====");
        console.log(response);
        console.log("Nombre total d'utilisateurs:", response.users?.length || response.data?.length || 0);
        console.log("================================");
        this.actualData = response.users || response.data || response || [];
        this.tableDataCopy = [...this.actualData];
        this.totalData = this.actualData.length;
        this.calculateTotalPages(this.totalData, this.pageSize);
        this.getTableData({ skip: 0, limit: this.pageSize });
        this.loading = false;
      },
      error: (error) => {
        console.error("Erreur lors de la r\xE9cup\xE9ration des utilisateurs:", error);
        this.error = httpErrorMessage(error, "Impossible de charger les donn\xE9es.");
        this.loading = false;
      }
    });
  }
  getTableData(data) {
    this.skip = data.skip;
    this.limit = data.limit;
    const startIndex = this.skip;
    const endIndex = startIndex + this.limit;
    this.tableData = this.actualData.slice(startIndex, endIndex);
    this.serialNumberArray = Array.from({ length: this.tableData.length }, (_, i) => startIndex + i + 1);
  }
  onPageChange(page) {
    this.currentPage = page;
    const skip = (page - 1) * this.pageSize;
    this.getTableData({ skip, limit: this.pageSize });
  }
  searchData(value) {
    this.searchDataValue = value;
    if (value.trim()) {
      this.actualData = this.tableDataCopy.filter((user) => user.nom?.toLowerCase().includes(value.toLowerCase()) || user.prenom?.toLowerCase().includes(value.toLowerCase()) || user.email?.toLowerCase().includes(value.toLowerCase()) || user.fonction?.toLowerCase().includes(value.toLowerCase()) || user.numero?.toLowerCase().includes(value.toLowerCase()));
    } else {
      this.actualData = [...this.tableDataCopy];
    }
    this.totalData = this.actualData.length;
    this.currentPage = 1;
    this.calculateTotalPages(this.totalData, this.pageSize);
    this.getTableData({ skip: 0, limit: this.pageSize });
  }
  sortData(sort) {
    const data = this.actualData.slice();
    if (!sort.active || sort.direction === "") {
      this.actualData = data;
      return;
    }
    this.actualData = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "nom":
          return this.compare(a.nom, b.nom, isAsc);
        case "email":
          return this.compare(a.email, b.email, isAsc);
        case "fonction":
          return this.compare(a.fonction, b.fonction, isAsc);
        case "statut":
          return this.compare(a.statut, b.statut, isAsc);
        default:
          return 0;
      }
    });
    this.getTableData({ skip: this.skip, limit: this.limit });
  }
  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  calculateTotalPages(totalData, pageSize) {
    const totalPages = Math.ceil(totalData / pageSize);
    this.pageSelection = [];
    for (let i = 1; i <= totalPages; i++) {
      this.pageSelection.push({
        skip: (i - 1) * pageSize,
        limit: pageSize
      });
    }
  }
  openNew() {
    this.userDialog = true;
    this.isEditMode = false;
    this.selectedUser = null;
  }
  editUser(user) {
    this.userDialog = true;
    this.isEditMode = true;
    this.selectedUser = __spreadValues({}, user);
  }
  deleteUser(id) {
    if (confirm("\xCAtes-vous s\xFBr de vouloir supprimer cet utilisateur ?")) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          console.log("Utilisateur supprim\xE9");
          this.refreshData();
        },
        error: (error) => {
          console.error("Erreur lors de la suppression:", error);
          alert("Erreur lors de la suppression");
        }
      });
    }
  }
  hideDialog() {
    this.userDialog = false;
    this.selectedUser = null;
  }
  refreshData() {
    this.getUserList();
  }
  getRoleBadgeClass(role) {
    switch (role?.toLowerCase()) {
      case "superadmin":
      case "super admin":
        return "badge bg-danger";
      case "admin":
        return "badge bg-warning";
      case "formateur":
        return "badge bg-info";
      case "responsable rh":
      case "responsable rh groupe":
        return "badge bg-primary";
      case "employ\xE9":
        return "badge bg-secondary";
      default:
        return "badge bg-secondary";
    }
  }
  getStatutBadgeClass(statut) {
    return statut === 1 ? "badge bg-success" : "badge bg-warning";
  }
  static \u0275fac = function UserGroupListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserGroupListComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserGroupListComponent, selectors: [["app-user-group-list"]], decls: 37, vars: 8, consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold"], [1, "d-flex", "align-items-center", "list-icons"], [1, "btn", "btn-primary", 3, "click"], [1, "isax", "isax-add", "me-1"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "d-flex justify-content-center p-4", 4, "ngIf"], [1, "row", "justify-content-end"], [1, "col-lg-3", "col-md-6"], [1, "d-flex", "align-items-center", "form-wrap", "search-course"], ["type", "text", "placeholder", "Rechercher...", 1, "form-control", 3, "ngModelChange", "keyup", "ngModel"], [1, "btn", "btn-search"], [1, "isax", "isax-search-normal-15"], [1, "table-responsive", "custom-table"], ["matSort", "", 1, "table", 3, "matSortChange"], ["mat-sort-header", "nom"], ["mat-sort-header", "email"], ["mat-sort-header", "fonction"], ["mat-sort-header", "statut"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-between align-items-center mt-3", 4, "ngIf"], [3, "onClose", "onSave", "visible", "isEditMode", "userData"], [1, "alert", "alert-danger"], [1, "d-flex", "justify-content-center", "p-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "d-flex", "align-items-center"], [3, "routerLink"], [1, "fs-14", "mb-0"], [1, "btn", "btn-sm", "btn-light", "me-2", 3, "click"], [1, "isax", "isax-edit"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "isax", "isax-trash"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [1, "text-muted"], ["aria-label", "Pagination"], [1, "pagination", "mb-0"], [1, "page-item"], ["href", "javascript:void(0)", 1, "page-link", 3, "click"], [1, "isax", "isax-arrow-left-2"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-3"]], template: function UserGroupListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5", 1);
      \u0275\u0275text(2, "Gestion des Utilisateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
      \u0275\u0275listener("click", function UserGroupListComponent_Template_button_click_4_listener() {
        return ctx.openNew();
      });
      \u0275\u0275element(5, "i", 4);
      \u0275\u0275text(6, "Ajouter un utilisateur ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(7, UserGroupListComponent_div_7_Template, 2, 1, "div", 5)(8, UserGroupListComponent_div_8_Template, 4, 0, "div", 6);
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function UserGroupListComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("keyup", function UserGroupListComponent_Template_input_keyup_12_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 11);
      \u0275\u0275element(14, "i", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 13)(16, "table", 14);
      \u0275\u0275listener("matSortChange", function UserGroupListComponent_Template_table_matSortChange_16_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(17, "thead")(18, "tr")(19, "th", 15);
      \u0275\u0275text(20, "Nom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th", 16);
      \u0275\u0275text(22, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th");
      \u0275\u0275text(24, "Num\xE9ro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th", 17);
      \u0275\u0275text(26, "Fonction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th");
      \u0275\u0275text(28, "Entreprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th", 18);
      \u0275\u0275text(30, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "tbody");
      \u0275\u0275template(34, UserGroupListComponent_tr_34_Template, 23, 11, "tr", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(35, UserGroupListComponent_div_35_Template, 12, 8, "div", 20);
      \u0275\u0275elementStart(36, "app-user-add", 21);
      \u0275\u0275listener("onClose", function UserGroupListComponent_Template_app_user_add_onClose_36_listener() {
        return ctx.hideDialog();
      })("onSave", function UserGroupListComponent_Template_app_user_add_onSave_36_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275advance(22);
      \u0275\u0275property("ngForOf", ctx.tableData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalData > 0);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.userDialog)("isEditMode", ctx.isEditMode)("userData", ctx.selectedUser);
    }
  }, dependencies: [RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, CommonModule, NgForOf, NgIf, MatSortModule, MatSort, MatSortHeader, UserAddComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupListComponent, [{
    type: Component,
    args: [{ selector: "app-user-group-list", standalone: true, imports: [RouterLink, FormsModule, CommonModule, MatSortModule, CustomPaginationComponent, UserAddComponent], template: `<div class="page-title d-flex align-items-center justify-content-between">\r
    <h5 class="fw-bold">Gestion des Utilisateurs</h5>\r
    <div class="d-flex align-items-center list-icons">\r
        <button class="btn btn-primary" (click)="openNew()">\r
            <i class="isax isax-add me-1"></i>Ajouter un utilisateur\r
        </button>\r
    </div>\r
</div>\r
\r
<div class="alert alert-danger" *ngIf="error">\r
    {{error}}\r
</div>\r
\r
<div *ngIf="loading" class="d-flex justify-content-center p-4">\r
    <div class="spinner-border text-primary" role="status">\r
        <span class="visually-hidden">Chargement...</span>\r
    </div>\r
</div>\r
\r
<div class="row justify-content-end">\r
    <div class="col-lg-3 col-md-6">\r
        <div class="d-flex align-items-center form-wrap search-course">\r
            <input type="text" class="form-control" placeholder="Rechercher..." [(ngModel)]="searchDataValue" (keyup)="searchData(searchDataValue)">\r
            <button class="btn btn-search">\r
                <i class="isax isax-search-normal-15"></i>\r
            </button>\r
        </div>\r
    </div>\r
</div>\r
\r
<div class="table-responsive custom-table">\r
    <table matSort (matSortChange)="sortData($event)" class="table">\r
        <thead>\r
            <tr>\r
                <th mat-sort-header="nom">Nom</th>\r
                <th mat-sort-header="email">Email</th>\r
                <th>Num\xE9ro</th>\r
                <th mat-sort-header="fonction">Fonction</th>\r
                <th>Entreprise</th>\r
                <th mat-sort-header="statut">Statut</th>\r
                <th>Actions</th>\r
            </tr>\r
        </thead>\r
        <tbody>\r
            <tr *ngFor="let data of tableData; let i = index">\r
                <td>\r
                    <div class="d-flex align-items-center">\r
                        <a [routerLink]="['/superadmin/user-details', data.id]">\r
                            <p class="fs-14 mb-0">{{data.name || (data.prenom + ' ' + data.nom)}}</p>\r
                        </a>\r
                    </div>\r
                </td>\r
                <td>{{data.email}}</td>\r
                <td>{{data.numero || 'N/A'}}</td>\r
                <td>{{data.fonction || 'N/A'}}</td>\r
                <td>{{data.entreprise?.nom || 'N/A'}}</td>\r
                <td>\r
                    <span [class]="getStatutBadgeClass(data.statut)">\r
                        {{data.statut === 1 ? 'Actif' : 'Inactif'}}\r
                    </span>\r
                </td>\r
                <td>\r
                    <div class="d-flex align-items-center">\r
                        <button class="btn btn-sm btn-light me-2" (click)="editUser(data)">\r
                            <i class="isax isax-edit"></i>\r
                        </button>\r
                        <button class="btn btn-sm btn-danger" (click)="deleteUser(data.id)">\r
                            <i class="isax isax-trash"></i>\r
                        </button>\r
                    </div>\r
                </td>\r
            </tr>\r
        </tbody>\r
    </table>\r
</div>\r
\r
<!-- Pagination -->\r
<div class="d-flex justify-content-between align-items-center mt-3" *ngIf="totalData > 0">\r
    <div class="text-muted">\r
        Affichage de {{skip + 1}} \xE0 {{skip + tableData.length}} sur {{totalData}} utilisateurs\r
    </div>\r
    <nav aria-label="Pagination">\r
        <ul class="pagination mb-0">\r
            <li class="page-item" [class.disabled]="currentPage === 1">\r
                <a class="page-link" (click)="onPageChange(currentPage - 1)" href="javascript:void(0)">\r
                    <i class="isax isax-arrow-left-2"></i>\r
                </a>\r
            </li>\r
            <li class="page-item" *ngFor="let page of pageSelection; let i = index" [class.active]="currentPage === i + 1">\r
                <a class="page-link" (click)="onPageChange(i + 1)" href="javascript:void(0)">{{i + 1}}</a>\r
            </li>\r
            <li class="page-item" [class.disabled]="currentPage === pageSelection.length">\r
                <a class="page-link" (click)="onPageChange(currentPage + 1)" href="javascript:void(0)">\r
                    <i class="isax isax-arrow-right-3"></i>\r
                </a>\r
            </li>\r
        </ul>\r
    </nav>\r
</div>\r
\r
<app-user-add \r
  [visible]="userDialog" \r
  [isEditMode]="isEditMode" \r
  [userData]="selectedUser"\r
  (onClose)="hideDialog()"\r
  (onSave)="refreshData()">\r
</app-user-add>` }]
  }], () => [{ type: UserService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserGroupListComponent, { className: "UserGroupListComponent", filePath: "app/features/adminrh/user-group-list/user-group-list.component.ts", lineNumber: 21 });
})();
export {
  UserGroupListComponent
};
//# sourceMappingURL=chunk-ZNM4TXVQ.js.map
