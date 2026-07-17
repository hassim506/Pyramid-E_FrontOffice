import {
  MatSort,
  MatSortModule
} from "./chunk-VL5HRZ2I.js";
import {
  PaginationService
} from "./chunk-M25A5D3F.js";
import {
  MatTableDataSource
} from "./chunk-ZJFUPILQ.js";
import "./chunk-6YZDBSHM.js";
import "./chunk-2KO2PJ3F.js";
import "./chunk-5FDCLFRJ.js";
import "./chunk-4TVHDBGR.js";
import "./chunk-MQ5W77M6.js";
import {
  DataService
} from "./chunk-QYVCNCEX.js";
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
  Router
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  NgClass
} from "./chunk-5DIP3EXV.js";
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTSSTHJF.js";
import "./chunk-4MWRP73S.js";

// src/app/features/student/student-order-history/student-order-history.component.ts
var _c0 = () => ({ standalone: true });
function StudentOrderHistoryComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 17);
    \u0275\u0275element(10, "i", 18);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "div", 19)(14, "a", 20);
    \u0275\u0275element(15, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 22);
    \u0275\u0275element(17, "i", 23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.orderId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.amount);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r1.status === "Completed" ? "bg-success" : "bg-info");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.status);
  }
}
var StudentOrderHistoryComponent = class _StudentOrderHistoryComponent {
  data;
  router;
  pagination;
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
  constructor(data, router, pagination) {
    this.data = data;
    this.router = router;
    this.pagination = pagination;
    this.data.getStudentOrderHistory().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.studentOrderHistory) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getStudentOrderHistory().subscribe((apiRes) => {
      this.tableData = [];
      this.tableDataCopy = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
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
    });
  }
  searchData(value) {
    if (value == "") {
      this.tableData = this.tableDataCopy;
    } else {
      this.dataSource.filter = value.trim().toLowerCase();
      this.tableData = this.dataSource.filteredData;
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
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize
    });
  }
  static \u0275fac = function StudentOrderHistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentOrderHistoryComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentOrderHistoryComponent, selectors: [["app-student-order-history"]], decls: 37, vars: 3, consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "row"], [1, "col-md-8"], [1, "mb-3"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "btn", "rounded", "border", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "col-md-4"], [1, "input-icon", "mb-3"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal-14"], ["type", "search", "placeholder", "Rechercher", 1, "form-control", "form-control-md", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "table-responsive", "custom-table"], ["matSort", "", 1, "table", 3, "matSortChange"], [1, "thead-light"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_invoice", 1, "text-primary"], [1, "badge", "d-inline-flex", "align-items-center", "me-1", 3, "ngClass"], [1, "fa-solid", "fa-circle", "fs-5", "me-1"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_invoice", 1, "d-inline-flex", "fs-14", "me-1", "action-icon"], [1, "isax", "isax-eye"], ["href", "javascript:void(0);", 1, "d-inline-flex", "fs-14", "action-icon"], [1, "isax", "isax-import"]], template: function StudentOrderHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5");
      \u0275\u0275text(2, "Historique du Panier");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "a", 5);
      \u0275\u0275text(8, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "ul", 6)(10, "li")(11, "a", 7);
      \u0275\u0275text(12, "Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li")(14, "a", 7);
      \u0275\u0275text(15, "Pending");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(16, "div", 8)(17, "div", 9)(18, "span", 10);
      \u0275\u0275element(19, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function StudentOrderHistoryComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function StudentOrderHistoryComponent_Template_input_ngModelChange_20_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 13)(22, "table", 14);
      \u0275\u0275listener("matSortChange", function StudentOrderHistoryComponent_Template_table_matSortChange_22_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(23, "thead", 15)(24, "tr")(25, "th");
      \u0275\u0275text(26, "Order ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th");
      \u0275\u0275text(28, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th");
      \u0275\u0275text(30, "Montant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "tbody");
      \u0275\u0275repeaterCreate(35, StudentOrderHistoryComponent_For_36_Template, 18, 5, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(2, _c0));
      \u0275\u0275advance(15);
      \u0275\u0275repeater(ctx.tableData);
    }
  }, dependencies: [CommonModule, NgClass, MatSortModule, MatSort, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentOrderHistoryComponent, [{
    type: Component,
    args: [{ selector: "app-student-order-history", imports: [CommonModule, MatSortModule, FormsModule], template: `\r
    <div class="page-title d-flex align-items-center justify-content-between">\r
        <h5>Historique du Panier</h5>\r
    </div>\r
        <div class="row">\r
            <div class="col-md-8">\r
                <div class="mb-3">\r
                    <div class="dropdown">\r
                        <a href="javascript:void(0);" class="dropdown-toggle btn rounded border d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">\r
                            Status\r
                        </a>\r
                        <ul class="dropdown-menu dropdown-menu-end p-3">\r
                            <li>\r
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Completed</a>\r
                            </li>\r
                            <li>\r
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Pending</a>\r
                            </li>\r
                        </ul>\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="col-md-4">\r
                <div class="input-icon mb-3">\r
                    <span class="input-icon-addon">\r
                        <i class="isax isax-search-normal-14"></i>\r
                    </span>\r
                    <input  [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-md" placeholder="Rechercher">\r
                </div>\r
            </div>\r
        </div>\r
            <div class="table-responsive custom-table">\r
                <table matSort (matSortChange)="sortData($event)" class="table">\r
                    <thead class="thead-light">\r
                        <tr>\r
                            <th>Order ID</th>\r
                            <th>Date</th>\r
                            <th>Montant</th>\r
                            <th>Status</th>\r
                            <th></th>\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        @for (data of tableData;track data){\r
                        <tr>\r
                            <td><a href="javascript:void(0);" class="text-primary" data-bs-toggle="modal" data-bs-target="#view_invoice">{{data.orderId}}</a></td>\r
                            <td>{{data.date}}</td>\r
                            <td>{{data.amount}}</td>\r
                            <td><span class="badge d-inline-flex align-items-center me-1" [ngClass]="data.status==='Completed'?'bg-success':'bg-info'"><i class="fa-solid fa-circle fs-5 me-1"></i>{{data.status}}</span></td>\r
                            <td>\r
                                <div class="d-flex align-items-center">\r
                                    <a href="javascript:void(0);" class="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_invoice"><i class="isax isax-eye"></i></a>\r
                                    <a href="javascript:void(0);" class="d-inline-flex fs-14 action-icon"><i class="isax isax-import"></i></a>\r
                                </div>\r
                            </td>\r
                        </tr>\r
                    }\r
                    </tbody>\r
                </table>\r
            </div>\r
` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentOrderHistoryComponent, { className: "StudentOrderHistoryComponent", filePath: "app/features/student/student-order-history/student-order-history.component.ts", lineNumber: 18 });
})();
export {
  StudentOrderHistoryComponent
};
//# sourceMappingURL=chunk-JUYRYTMY.js.map
