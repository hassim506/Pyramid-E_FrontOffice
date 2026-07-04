import {
  ClientAddComponent
} from "./chunk-PPPB4TCE.js";
import {
  httpErrorMessage
} from "./chunk-RL3SOXDI.js";
import {
  ClientCompanyService
} from "./chunk-AOQ7MVQS.js";
import {
  MatSort,
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
  NgIf,
  TitleCasePipe
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTSSTHJF.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/adminrh/client/client-list.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ["/superadmin/superadmin-client-details", a0];
function ClientListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, "\n");
  }
}
function ClientListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "span", 22);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function ClientListComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 24)(6, "div", 25);
    \u0275\u0275element(7, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 27)(9, "p", 28);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td")(12, "span", 29);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td")(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td")(30, "div", 24)(31, "a", 30);
    \u0275\u0275listener("click", function ClientListComponent_For_41_Template_a_click_31_listener() {
      const data_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editClient(data_r3));
    });
    \u0275\u0275element(32, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "a", 32);
    \u0275\u0275listener("click", function ClientListComponent_For_41_Template_a_click_33_listener() {
      const data_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.deleteClient(data_r3));
    });
    \u0275\u0275element(34, "i", 33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c1, data_r3.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r3.ninea);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c1, data_r3.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.nom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 13, data_r3.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.telephone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.pays);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.secteur_activite);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.taille);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getStatusClass(data_r3.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 15, data_r3.statut));
  }
}
var ClientListComponent = class _ClientListComponent {
  data;
  router;
  pagination;
  clientCompanyService;
  routes = routes;
  // pagination variables
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
  dataSource;
  searchDataValue = "";
  // Variables pour le modal/dialog
  clientDialog = false;
  isEditMode = false;
  submitted = false;
  selectedClient = null;
  // Variables pour le loading
  loading = false;
  error = "";
  constructor(data, router, pagination, clientCompanyService) {
    this.data = data;
    this.router = router;
    this.pagination = pagination;
    this.clientCompanyService = clientCompanyService;
    this.getClientList();
    this.pagination.tablePageSize.subscribe((res) => {
      if (this.router.url == "/superadmin/clients" || this.router.url.includes("clients")) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }
  getClientList() {
    this.loading = true;
    this.error = "";
    this.clientCompanyService.getClients().subscribe({
      next: (response) => {
        console.log("Clients data:", response);
        this.actualData = response.clients || [];
        this.getTableData({ skip: 0, limit: this.pageSize });
        this.loading = false;
      },
      error: (error) => {
        console.error("Erreur lors de la r\xE9cup\xE9ration des clients:", error);
        this.error = httpErrorMessage(error, "Impossible de charger les clients.");
        this.loading = false;
        this.loadMockData();
      }
    });
  }
  loadMockData() {
    console.log("Chargement des donn\xE9es de test...");
    const mockClients = [
      {
        id: 1,
        nom: "Groupe TechnoSolutions",
        type: "groupe",
        ninea: "20240021234567",
        adresse: "456 Rue de la R\xE9publique, 69002 Lyon",
        telephone: "04 78 90 12 34",
        email: "info@technosolutions.fr",
        contact_principal: "Marie Dubois",
        secteur_activite: "Conseil IT",
        taille: "PME",
        statut: "actif",
        date_contrat: "2024-06-01",
        date_fin_contrat: "2025-12-31"
      },
      {
        id: 2,
        nom: "Startup Innovante SARL",
        type: "entreprise",
        ninea: "20240027890123",
        adresse: "123 Avenue des Entrepreneurs, 75011 Paris",
        telephone: "01 42 78 90 12",
        email: "contact@startup-innovante.com",
        contact_principal: "Thomas Martin",
        secteur_activite: "Tech",
        taille: "TPE",
        statut: "actif",
        date_contrat: "2024-03-15",
        date_fin_contrat: "2025-03-15"
      }
    ];
    this.actualData = mockClients;
    this.getTableData({ skip: 0, limit: this.pageSize });
  }
  getTableData(pageOption) {
    this.tableData = [];
    this.tableDataCopy = [];
    this.serialNumberArray = [];
    this.totalData = this.actualData.length;
    this.actualData.map((res, index) => {
      const serialNumber = index + 1;
      if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
        this.tableData.push(res);
        this.tableDataCopy.push(res);
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
  }
  // Rechargement des données
  refreshData() {
    this.getClientList();
  }
  searchData(value) {
    if (value == "") {
      this.tableData = [...this.tableDataCopy];
    } else {
      const filteredData = this.tableDataCopy.filter((client) => client.nom.toLowerCase().includes(value.toLowerCase()) || client.email.toLowerCase().includes(value.toLowerCase()) || client.telephone.toLowerCase().includes(value.toLowerCase()) || client.secteur_activite.toLowerCase().includes(value.toLowerCase()) || client.ninea.toLowerCase().includes(value.toLowerCase()) || client.type.toLowerCase().includes(value.toLowerCase()) || client.contact_principal.toLowerCase().includes(value.toLowerCase()));
      this.tableData = filteredData;
    }
  }
  sortData(sort) {
    const data = this.tableData.slice();
    if (!sort.active || sort.direction === "") {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = a[sort.active];
        const bValue = b[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === "asc" ? 1 : -1);
      });
    }
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
  // Méthodes pour les actions du template
  openNew() {
    this.clientDialog = true;
    this.isEditMode = false;
    this.selectedClient = null;
    this.submitted = false;
    console.log("Ouvrir nouveau client");
  }
  editClient(client) {
    this.clientDialog = true;
    this.isEditMode = true;
    this.selectedClient = __spreadValues({}, client);
    this.submitted = false;
    console.log("\xC9diter client:", client);
  }
  deleteClient(client) {
    if (confirm(`\xCAtes-vous s\xFBr de vouloir supprimer le client "${client.nom}" ?`)) {
      this.loading = true;
      this.clientCompanyService.deleteClient(client.id).subscribe({
        next: () => {
          console.log("Client supprim\xE9 avec succ\xE8s");
          this.refreshData();
        },
        error: (error) => {
          console.error("Erreur lors de la suppression:", error);
          this.loading = false;
          this.actualData = this.actualData.filter((c) => c.id !== client.id);
          this.getTableData({ skip: this.skip, limit: this.limit });
        }
      });
    }
  }
  hideDialog() {
    this.clientDialog = false;
    this.submitted = false;
    this.selectedClient = null;
  }
  saveClient() {
    this.submitted = true;
    if (this.selectedClient && this.validateClient(this.selectedClient)) {
      this.loading = true;
      if (this.isEditMode) {
        this.clientCompanyService.updateClient(this.selectedClient.id, this.selectedClient).subscribe({
          next: (response) => {
            console.log("Client mis \xE0 jour avec succ\xE8s");
            this.refreshData();
            this.hideDialog();
          },
          error: (error) => {
            console.error("Erreur lors de la mise \xE0 jour:", error);
            this.loading = false;
          }
        });
      } else {
        this.clientCompanyService.createClient(this.selectedClient).subscribe({
          next: (response) => {
            console.log("Client cr\xE9\xE9 avec succ\xE8s");
            this.refreshData();
            this.hideDialog();
          },
          error: (error) => {
            console.error("Erreur lors de la cr\xE9ation:", error);
            this.loading = false;
          }
        });
      }
    }
  }
  validateClient(client) {
    return !!(client.nom && client.email && client.telephone && client.adresse && client.secteur_activite && client.ninea && client.type && client.contact_principal);
  }
  getStatusClass(status) {
    switch (status?.toLowerCase()) {
      case "actif":
        return "badge bg-success";
      case "inactif":
        return "badge bg-warning";
      case "suspendu":
        return "badge bg-danger";
      default:
        return "badge bg-secondary";
    }
  }
  formatDate(date) {
    if (!date)
      return "";
    return new Date(date).toLocaleDateString("fr-FR");
  }
  getClientInitials(name) {
    return name.split(" ").map((word) => word.charAt(0)).join("").substring(0, 2).toUpperCase();
  }
  static \u0275fac = function ClientListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(ClientCompanyService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientListComponent, selectors: [["app-client-list"]], decls: 44, vars: 11, consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold"], [1, "d-flex", "align-items-center", "list-icons"], [1, "btn", "btn-outline-primary", "me-2", 3, "click", "disabled"], [1, "isax", "isax-refresh"], ["href", "javascript:void(0);", 1, "active", "me-2", 3, "click"], [1, "isax", "isax-add"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "d-flex justify-content-center p-4", 4, "ngIf"], [1, "row", "justify-content-end"], [1, "col-md-4"], [1, "input-icon", "mb-3"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal-14"], ["type", "search", "placeholder", "Rechercher...", 1, "form-control", "form-control-md", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "table-responsive", "custom-table"], ["matSort", "", 1, "table", 3, "matSortChange"], [1, "thead-light"], [3, "onClose", "onSave", "visible", "isEditMode", "clientData"], [1, "alert", "alert-danger"], [1, "d-flex", "justify-content-center", "p-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "text-primary", 3, "routerLink"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-md", "avatar-rounded", "flex-shrink-0", "me-2", "bg-primary", "text-white", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-people"], [3, "routerLink"], [1, "fs-14", "mb-0"], [1, "badge", "bg-info"], ["href", "javascript:void(0);", 1, "d-inline-flex", "fs-14", "me-1", "action-icon", 3, "click"], [1, "isax", "isax-edit"], ["href", "javascript:void(0);", 1, "d-inline-flex", "fs-14", "action-icon", 3, "click"], [1, "isax", "isax-trash"]], template: function ClientListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5", 1);
      \u0275\u0275text(2, "Gestion des Clients");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
      \u0275\u0275listener("click", function ClientListComponent_Template_button_click_4_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275element(5, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "a", 5);
      \u0275\u0275listener("click", function ClientListComponent_Template_a_click_6_listener() {
        return ctx.openNew();
      });
      \u0275\u0275element(7, "i", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(8, ClientListComponent_div_8_Template, 2, 1, "div", 7)(9, ClientListComponent_div_9_Template, 4, 0, "div", 8);
      \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "span", 12);
      \u0275\u0275element(14, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ClientListComponent_Template_input_ngModelChange_15_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(16, "div", 15)(17, "table", 16);
      \u0275\u0275listener("matSortChange", function ClientListComponent_Template_table_matSortChange_17_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(18, "thead", 17)(19, "tr")(20, "th");
      \u0275\u0275text(21, "NINEA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Nom du client");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "T\xE9l\xE9phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "Secteur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "Pays");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th");
      \u0275\u0275text(35, "Taille");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th");
      \u0275\u0275text(37, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "tbody");
      \u0275\u0275repeaterCreate(40, ClientListComponent_For_41_Template, 35, 21, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(42, "app-custom-pagination");
      \u0275\u0275elementStart(43, "app-client-add", 18);
      \u0275\u0275listener("onClose", function ClientListComponent_Template_app_client_add_onClose_43_listener() {
        return ctx.hideDialog();
      })("onSave", function ClientListComponent_Template_app_client_add_onSave_43_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275classProp("fa-spin", ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(10, _c0));
      \u0275\u0275advance(25);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(3);
      \u0275\u0275property("visible", ctx.clientDialog)("isEditMode", ctx.isEditMode)("clientData", ctx.selectedClient);
    }
  }, dependencies: [RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, CommonModule, NgIf, MatSortModule, MatSort, CustomPaginationComponent, ClientAddComponent, TitleCasePipe], styles: ["\n\n.page-title[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.table-responsive.custom-table[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  padding: 0.4em 0.7em;\n}\n.input-icon-addon[_ngcontent-%COMP%] {\n  color: #888;\n}\n.action-icon[_ngcontent-%COMP%] {\n  color: #007bff;\n  cursor: pointer;\n}\n.action-icon[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n/*# sourceMappingURL=client-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientListComponent, [{
    type: Component,
    args: [{ selector: "app-client-list", imports: [RouterLink, FormsModule, CommonModule, MatSortModule, CustomPaginationComponent, ClientAddComponent], template: `<div class="page-title d-flex align-items-center justify-content-between">\r
    <h5 class="fw-bold">Gestion des Clients</h5>\r
    <div class="d-flex align-items-center list-icons">\r
        <button class="btn btn-outline-primary me-2" (click)="refreshData()" [disabled]="loading">\r
            <i class="isax isax-refresh" [class.fa-spin]="loading"></i>\r
        </button>\r
        <a href="javascript:void(0);" class="active me-2" (click)="openNew()"><i class="isax isax-add"></i></a>\r
    </div>\r
</div>\r
\r
<!-- Ajouter une alerte d'erreur si n\xE9cessaire -->\r
<div class="alert alert-danger" *ngIf="error">\r
    {{error}}\r
</div>\r
\r
<!-- Ajouter un spinner de loading -->\r
<div *ngIf="loading" class="d-flex justify-content-center p-4">\r
    <div class="spinner-border text-primary" role="status">\r
        <span class="visually-hidden">Chargement...</span>\r
    </div>\r
</div>\r
\r
<div class="row justify-content-end">\r
    <div class="col-md-4">\r
        <div class="input-icon mb-3">\r
            <span class="input-icon-addon">\r
                <i class="isax isax-search-normal-14"></i>\r
            </span>\r
            <input [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-md" placeholder="Rechercher...">\r
        </div>\r
    </div>\r
</div>\r
<div class="table-responsive custom-table">\r
    <table matSort (matSortChange)="sortData($event)" class="table">\r
        <thead class="thead-light">\r
            <tr>\r
                <th>NINEA</th>\r
                <th>Nom du client</th>\r
                <th>Type</th>\r
                <th>Email</th>\r
                <th>T\xE9l\xE9phone</th>\r
                <th>Secteur</th>\r
                <th>Pays</th>\r
                <th>Taille</th>\r
                <th>Statut</th>\r
                <th></th>\r
            </tr>\r
        </thead>\r
        <tbody>\r
            @for (data of tableData;track data){\r
            <tr>\r
                <td><a [routerLink]="['/superadmin/superadmin-client-details', data.id]" class="text-primary">{{data.ninea}}</a></td>\r
                <td>\r
                    <div class="d-flex align-items-center">\r
                        <div class="avatar avatar-md avatar-rounded flex-shrink-0 me-2 bg-primary text-white d-flex align-items-center justify-content-center">\r
                            <i class="isax isax-people"></i>\r
                        </div>\r
                        <a [routerLink]="['/superadmin/superadmin-client-details', data.id]"><p class="fs-14 mb-0">{{data.nom}}</p></a>\r
                    </div>\r
                </td>\r
                <td>\r
                    <span class="badge bg-info">{{data.type | titlecase}}</span>\r
                </td>\r
                <td>{{data.email}}</td>\r
                <td>{{data.telephone}}</td>\r
                <td>{{data.pays}}</td>\r
                <td>{{data.secteur_activite}}</td>\r
                <td>{{data.taille}}</td>\r
                <td>\r
                    <span [class]="getStatusClass(data.statut)">{{data.statut | titlecase}}</span>\r
                </td>\r
                <td>\r
                    <div class="d-flex align-items-center">\r
                        <a href="javascript:void(0);" class="d-inline-flex fs-14 me-1 action-icon" (click)="editClient(data)"><i class="isax isax-edit"></i></a>\r
                        <a href="javascript:void(0);" class="d-inline-flex fs-14 action-icon" (click)="deleteClient(data)"><i class="isax isax-trash"></i></a>\r
                    </div>\r
                </td>\r
            </tr>\r
            }\r
        </tbody>\r
    </table>\r
</div>\r
<!-- /pagination -->\r
<app-custom-pagination/>\r
\r
<!-- /pagination -->\r
\r
<app-client-add \r
  [visible]="clientDialog" \r
  [isEditMode]="isEditMode" \r
  [clientData]="selectedClient"\r
  (onClose)="hideDialog()"\r
  (onSave)="refreshData()">\r
</app-client-add>`, styles: ["/* src/app/features/adminrh/client/client-list.component.scss */\n.page-title {\n  margin-bottom: 1.5rem;\n}\n.table-responsive.custom-table {\n  margin-top: 1rem;\n}\n.badge {\n  font-size: 0.85em;\n  padding: 0.4em 0.7em;\n}\n.input-icon-addon {\n  color: #888;\n}\n.action-icon {\n  color: #007bff;\n  cursor: pointer;\n}\n.action-icon:hover {\n  color: #0056b3;\n}\n/*# sourceMappingURL=client-list.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }, { type: ClientCompanyService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientListComponent, { className: "ClientListComponent", filePath: "app/features/adminrh/client/client-list.component.ts", lineNumber: 23 });
})();
export {
  ClientListComponent
};
//# sourceMappingURL=chunk-7IYPNEV6.js.map
