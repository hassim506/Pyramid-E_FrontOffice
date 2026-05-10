import {
  CustomPaginationComponent
} from "./chunk-2EUN5DIU.js";
import {
  MatPaginatorModule
} from "./chunk-D36CEDK4.js";
import "./chunk-NAND5NLV.js";
import {
  MatSortModule
} from "./chunk-LWTJDC5B.js";
import {
  PaginationService
} from "./chunk-JN46OEVN.js";
import "./chunk-GJGS2IST.js";
import {
  MatTableDataSource,
  MatTableModule
} from "./chunk-USSDRVXR.js";
import {
  MatSelectModule
} from "./chunk-5TR7ZTNG.js";
import "./chunk-BCALAYJ4.js";
import "./chunk-4UI2RZNC.js";
import "./chunk-H6U5ZWSD.js";
import "./chunk-IA7LH4QU.js";
import "./chunk-5FDCLFRJ.js";
import "./chunk-GUU2EPD7.js";
import "./chunk-TXJEXWQM.js";
import {
  BsDatepickerModule
} from "./chunk-2KO2TTRT.js";
import "./chunk-YZMAOYRX.js";
import "./chunk-KJG6A5PB.js";
import {
  DataService
} from "./chunk-QN7QKNG4.js";
import {
  routes
} from "./chunk-ZAFZNJD2.js";
import {
  FormsModule
} from "./chunk-YMJPU2MG.js";
import {
  Router
} from "./chunk-LFLGGSY5.js";
import "./chunk-VEAR4SGA.js";
import "./chunk-J5AS2QYG.js";
import {
  CommonModule
} from "./chunk-GWJREDC5.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject
} from "./chunk-2JCHGHJA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/instructor/instructor-payouts/instructor-payouts.component.ts
var InstructorPayoutsComponent = class _InstructorPayoutsComponent {
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
    this.data.getPayout().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.instructor_payouts) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getPayout().subscribe((apiRes) => {
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
  static \u0275fac = function InstructorPayoutsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorPayoutsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorPayoutsComponent, selectors: [["app-instructor-payouts"]], decls: 0, vars: 0, template: function InstructorPayoutsComponent_Template(rf, ctx) {
  }, dependencies: [CommonModule, MatTableModule, MatSortModule, FormsModule, MatPaginatorModule, MatSelectModule, BsDatepickerModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorPayoutsComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-payouts", imports: [CommonModule, MatTableModule, MatSortModule, FormsModule, MatPaginatorModule, MatSelectModule, BsDatepickerModule, CustomPaginationComponent], template: "" }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorPayoutsComponent, { className: "InstructorPayoutsComponent", filePath: "src/app/features/instructor/instructor-payouts/instructor-payouts.component.ts", lineNumber: 23 });
})();
export {
  InstructorPayoutsComponent
};
//# sourceMappingURL=chunk-6ODSVCNG.js.map
