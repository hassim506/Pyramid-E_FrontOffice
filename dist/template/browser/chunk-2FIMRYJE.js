import {
  CustomPaginationComponent
} from "./chunk-2EUN5DIU.js";
import {
  MatPaginatorModule
} from "./chunk-D36CEDK4.js";
import "./chunk-NAND5NLV.js";
import {
  MatSort,
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
  DataService
} from "./chunk-QN7QKNG4.js";
import {
  routes
} from "./chunk-ZAFZNJD2.js";
import "./chunk-YMJPU2MG.js";
import {
  Router,
  RouterLink
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
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2JCHGHJA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/superadmin/superadmin-quiz-results/superadmin-quiz-results.component.ts
function SuperadminQuizResultsComponent_For_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 30)(3, "a", 31);
    \u0275\u0275element(4, "img", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r1.routes.studentsDetails);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/user/", data_r1.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.routes.studentsDetails);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r1.studentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.score);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.attempts);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.finishTime);
  }
}
var SuperadminQuizResultsComponent = class _SuperadminQuizResultsComponent {
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
    this.data.getInstructorQuizResult().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.instructorQuizResult) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getInstructorQuizResult().subscribe((apiRes) => {
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
  static \u0275fac = function SuperadminQuizResultsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminQuizResultsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminQuizResultsComponent, selectors: [["app-superadmin-quiz-results"]], decls: 68, vars: 0, consts: [[1, "page-title"], [1, "card"], [1, "card-body"], [1, "d-sm-flex", "align-items-center"], [1, "quiz-img", "me-3", "mb-2", "mb-sm-0"], ["src", "assets/img/students/quiz.jpg", "alt", ""], [1, "mb-2"], ["href", "javascript:void(0);"], [1, "question-info", "d-flex", "align-items-center"], [1, "d-flex", "align-items-center", "fs-14", "me-2", "pe-2", "border-end", "mb-0"], [1, "isax", "isax-message-question5", "text-primary-soft", "me-2"], [1, "d-flex", "align-items-center", "fs-14", "mb-0"], [1, "isax", "isax-clock5", "text-secondary-soft", "me-2"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "card", "bg-secondary-transparent", "border-0"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-1", "fw-normal", "text-gray-5"], [1, "fs-20", "fw-bold", "mb-1", "d-block", "text-gray-9"], [1, "icon-box", "bg-soft-secondary"], ["src", "assets/img/icon/user-tick.svg", "alt", ""], [1, "card", "bg-info-transparent", "border-0"], [1, "icon-box", "bg-soft-info"], ["src", "assets/img/icon/document.svg", "alt", ""], [1, "card", "bg-purple-transparent", "border-0"], [1, "icon-box", "bg-soft-purple"], ["src", "assets/img/icon/clock.svg", "alt", ""], [1, "table-responsive", "custom-table"], ["matSort", "", 1, "table", 3, "matSortChange"], [1, "thead-light"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-md", "avatar-rounded", "flex-shrink-0", "me-2", 3, "routerLink"], ["alt", "", 3, "src"], [1, "fs-14", 3, "routerLink"]], template: function SuperadminQuizResultsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h5", 0);
      \u0275\u0275text(1, "Quiz Results");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
      \u0275\u0275element(6, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div")(8, "h5", 6)(9, "a", 7);
      \u0275\u0275text(10, "Information About UI/UX Design Degree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8)(12, "p", 9);
      \u0275\u0275element(13, "i", 10);
      \u0275\u0275text(14, "25 Questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 11);
      \u0275\u0275element(16, "i", 12);
      \u0275\u0275text(17, "30 Minutes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "div", 2)(22, "div", 16)(23, "div")(24, "h6", 17);
      \u0275\u0275text(25, "Total Particpants");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 18);
      \u0275\u0275text(27, "30");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 19);
      \u0275\u0275element(29, "img", 20);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(30, "div", 14)(31, "div", 21)(32, "div", 2)(33, "div", 16)(34, "div")(35, "h6", 17);
      \u0275\u0275text(36, "Scores");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "span", 18);
      \u0275\u0275text(38, "03");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 22);
      \u0275\u0275element(40, "img", 23);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(41, "div", 14)(42, "div", 24)(43, "div", 2)(44, "div", 16)(45, "div")(46, "h6", 17);
      \u0275\u0275text(47, "Average Time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span", 18);
      \u0275\u0275text(49, "00:00:55");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 25);
      \u0275\u0275element(51, "img", 26);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(52, "div", 27)(53, "table", 28);
      \u0275\u0275listener("matSortChange", function SuperadminQuizResultsComponent_Template_table_matSortChange_53_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(54, "thead", 29)(55, "tr")(56, "th");
      \u0275\u0275text(57, "Student Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th");
      \u0275\u0275text(59, "Score");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th");
      \u0275\u0275text(61, "Attemplts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th");
      \u0275\u0275text(63, "Finish Time");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "tbody");
      \u0275\u0275repeaterCreate(65, SuperadminQuizResultsComponent_For_66_Template, 13, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(67, "app-custom-pagination");
    }
    if (rf & 2) {
      \u0275\u0275advance(65);
      \u0275\u0275repeater(ctx.tableData);
    }
  }, dependencies: [CommonModule, MatTableModule, MatSortModule, MatSort, MatPaginatorModule, MatSelectModule, CustomPaginationComponent, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminQuizResultsComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-quiz-results", imports: [CommonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSelectModule, CustomPaginationComponent, RouterLink], template: '\n    <h5 class="page-title">Quiz Results</h5>\n    <div class="card">\n        <div class="card-body">\n            <div class="d-sm-flex align-items-center">\n                <div class="quiz-img me-3 mb-2 mb-sm-0">\n                    <img src="assets/img/students/quiz.jpg" alt="">\n                </div>\n                <div>\n                    <h5 class="mb-2"><a href="javascript:void(0);">Information About UI/UX Design Degree</a></h5>\n                    <div class="question-info d-flex align-items-center">\n                        <p class="d-flex align-items-center fs-14 me-2 pe-2 border-end mb-0"><i class="isax isax-message-question5 text-primary-soft me-2"></i>25 Questions</p>\n                        <p class="d-flex align-items-center fs-14 mb-0"><i class="isax isax-clock5 text-secondary-soft me-2"></i>30 Minutes</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-lg-4 col-md-6">\n            <div class="card bg-secondary-transparent border-0">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between">\n                        <div>\n                            <h6 class="mb-1 fw-normal text-gray-5">Total Particpants</h6>\n                            <span class="fs-20 fw-bold mb-1 d-block text-gray-9">30</span>\n                        </div>\n                        <div class="icon-box bg-soft-secondary">\n                            <img src="assets/img/icon/user-tick.svg" alt="">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="col-lg-4 col-md-6">\n            <div class="card bg-info-transparent border-0">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between">\n                        <div>\n                            <h6 class="mb-1 fw-normal text-gray-5">Scores</h6>\n                            <span class="fs-20 fw-bold mb-1 d-block text-gray-9">03</span>\n                        </div>\n                        <div class="icon-box  bg-soft-info">\n                            <img src="assets/img/icon/document.svg" alt="">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="col-lg-4 col-md-6">\n            <div class="card bg-purple-transparent border-0">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between">\n                        <div>\n                            <h6 class="mb-1 fw-normal text-gray-5">Average Time</h6>\n                            <span class="fs-20 fw-bold mb-1 d-block text-gray-9">00:00:55</span>\n                        </div>\n                        <div class="icon-box  bg-soft-purple">\n                            <img src="assets/img/icon/clock.svg" alt="">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="table-responsive custom-table">\n        <table matSort (matSortChange)="sortData($event)" class="table">\n            <thead class="thead-light">\n                <tr>\n                    <th>Student Name</th>\n                    <th>Score</th>\n                    <th>Attemplts</th>\n                    <th>Finish Time</th>\n                </tr>\n            </thead>\n            <tbody>\n                @for (data of tableData;track data){\n                <tr>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.studentsDetails" class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">\n                                <img src="assets/img/user/{{data.img}}" alt="">\n                            </a>\n                            <a [routerLink]="routes.studentsDetails" class="fs-14">{{data.studentName}}</a>\n                        </div>\n                    </td>\n                    <td>{{data.score}}</td>\n                    <td>{{data.attempts}}</td>\n                    <td>{{data.finishTime}}</td>\n                </tr>\n                }\n            </tbody>\n        </table>\n    </div>\n    <!-- /pagination -->\n    <app-custom-pagination/>\n    <!-- /pagination -->\n' }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminQuizResultsComponent, { className: "SuperadminQuizResultsComponent", filePath: "src/app/features/superadmin/superadmin-quiz-results/superadmin-quiz-results.component.ts", lineNumber: 20 });
})();
export {
  SuperadminQuizResultsComponent
};
//# sourceMappingURL=chunk-2FIMRYJE.js.map
