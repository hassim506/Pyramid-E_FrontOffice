import {
  MatPaginatorModule
} from "./chunk-FBLRLILW.js";
import "./chunk-23NXCKBB.js";
import {
  MatSortModule
} from "./chunk-VL5HRZ2I.js";
import "./chunk-WJ6EOSPX.js";
import {
  MatTableDataSource,
  MatTableModule
} from "./chunk-ZJFUPILQ.js";
import {
  CustomPaginationComponent
} from "./chunk-QBIBOWET.js";
import {
  PaginationService
} from "./chunk-M25A5D3F.js";
import {
  MatSelectModule
} from "./chunk-WIXYUA7K.js";
import "./chunk-3ONGXC5Y.js";
import "./chunk-6YZDBSHM.js";
import "./chunk-2KO2PJ3F.js";
import "./chunk-I5B54ZJK.js";
import "./chunk-5FDCLFRJ.js";
import "./chunk-4TVHDBGR.js";
import "./chunk-MQ5W77M6.js";
import {
  BsDatepickerModule
} from "./chunk-TJCVDSY2.js";
import "./chunk-KO2FPA3P.js";
import "./chunk-DQMJNWQC.js";
import {
  DataService
} from "./chunk-IRUS5LM6.js";
import {
  routes
} from "./chunk-OVFIVR43.js";
import {
  FormsModule
} from "./chunk-IKOSZIEY.js";
import {
  Router
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule
} from "./chunk-5DIP3EXV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject
} from "./chunk-VTSSTHJF.js";
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorPayoutsComponent, { className: "InstructorPayoutsComponent", filePath: "app/features/instructor/instructor-payouts/instructor-payouts.component.ts", lineNumber: 23 });
})();
export {
  InstructorPayoutsComponent
};
//# sourceMappingURL=chunk-OBWLSCJZ.js.map
