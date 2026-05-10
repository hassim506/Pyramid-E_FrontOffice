import {
  DateRangePickerComponent
} from "./chunk-BBNORKII.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-BZGM6D4K.js";
import {
  BsDatepickerModule
} from "./chunk-2KO2TTRT.js";
import "./chunk-YZMAOYRX.js";
import "./chunk-KJG6A5PB.js";
import {
  routes
} from "./chunk-ZAFZNJD2.js";
import "./chunk-YMJPU2MG.js";
import {
  RouterLink
} from "./chunk-LFLGGSY5.js";
import "./chunk-VEAR4SGA.js";
import "./chunk-J5AS2QYG.js";
import {
  CommonModule
} from "./chunk-GWJREDC5.js";
import {
  Component,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-2JCHGHJA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/superadmin/superadmin-earnings/superadmin-earnings.component.ts
var _c0 = ["chart"];
var SuperadminEarningsComponent = class _SuperadminEarningsComponent {
  routes = routes;
  chart;
  earningChart;
  ngOnInit() {
    this.earningChart = {
      series: [{
        name: "Earnings",
        data: [25, 40, 30, 55, 25, 35, 25, 50, 20, 40, 20, 50]
      }],
      chart: {
        height: 273,
        type: "area",
        zoom: {
          enabled: false
        }
      },
      colors: ["#FF4667"],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "",
        align: "left"
      },
      // grid: {
      //   row: {
      //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      //     opacity: 0.5
      //   },
      // },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yaxis: {
        min: 10,
        max: 60,
        tickAmount: 5,
        labels: {
          formatter: (val) => {
            return val / 1 + "K";
          }
        }
      },
      legend: {
        position: "top",
        horizontalAlign: "left"
      }
    };
  }
  bsValue = /* @__PURE__ */ new Date();
  bsRangeValue;
  maxDate = /* @__PURE__ */ new Date();
  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }
  static \u0275fac = function SuperadminEarningsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminEarningsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminEarningsComponent, selectors: [["app-superadmin-earnings"]], viewQuery: function SuperadminEarningsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 129, vars: 16, consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "row"], [1, "col-xl-4", "col-md-6"], [1, "card", "bg-light"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "earnings-icon", "bg-success"], [1, "isax", "isax-dollar-circle4"], [1, "ms-3"], [1, "mb-1"], [1, "fw-bold", "text-success", "mb-1"], [1, "earnings-icon", "bg-secondary"], [1, "isax", "isax-star5"], [1, "fw-bold", "text-secondary", "mb-1"], [1, "earnings-icon", "bg-info"], [1, "isax", "isax-profile-tick5"], [1, "fw-bold", "text-info", "mb-1"], [1, "col-md-12"], [1, "card"], [1, "card-header", "d-flex", "flex-wrap", "gap-2", "align-items-center", "justify-content-between"], [1, "icon-form", "mb-0"], [1, "form-icon"], [1, "isax", "isax-calendar-1", "fs-16"], ["type", "text", "placeholder", "2025", 1, "form-control", "yearpicker"], ["id", "earnigs_chart"], [3, "series", "chart", "xaxis", "yaxis", "stroke", "tooltip", "dataLabels", "fill", "plotOptions", "grid", "colors"], [1, "card", "mb-0"], [1, "table-responsive", "custom-table"], [1, "table"], [1, "thead-light"], [1, "order"], ["href", "javascript:void(0);"], [3, "routerLink"]], template: function SuperadminEarningsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5");
      \u0275\u0275text(2, "Earnings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "span", 6);
      \u0275\u0275element(9, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8)(11, "h6", 9);
      \u0275\u0275text(12, "Revenue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h5", 10);
      \u0275\u0275text(14, "$8420");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p");
      \u0275\u0275text(16, "Earning this month");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(17, "div", 2)(18, "div", 3)(19, "div", 4)(20, "div", 5)(21, "span", 11);
      \u0275\u0275element(22, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 8)(24, "h6", 9);
      \u0275\u0275text(25, "Courses Ratings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "h5", 13);
      \u0275\u0275text(27, "4.8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p");
      \u0275\u0275text(29, "Rating this month");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(30, "div", 2)(31, "div", 3)(32, "div", 4)(33, "div", 5)(34, "span", 14);
      \u0275\u0275element(35, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 8)(37, "h6", 9);
      \u0275\u0275text(38, "Students Enrolled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "h5", 16);
      \u0275\u0275text(40, "12000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p");
      \u0275\u0275text(42, "New this month");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(43, "div", 17)(44, "div", 18)(45, "div", 19)(46, "h5");
      \u0275\u0275text(47, "Earnings by Year");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 20)(49, "span", 21);
      \u0275\u0275element(50, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275element(51, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 4)(53, "div", 24);
      \u0275\u0275element(54, "apx-chart", 25);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(55, "div", 26)(56, "div", 19)(57, "h5");
      \u0275\u0275text(58, "Earnings");
      \u0275\u0275elementEnd();
      \u0275\u0275element(59, "app-date-range-picker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 4)(61, "div", 27)(62, "table", 28)(63, "thead", 29)(64, "tr")(65, "th");
      \u0275\u0275text(66, "Order ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th");
      \u0275\u0275text(68, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "th");
      \u0275\u0275text(70, "Course");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th");
      \u0275\u0275text(72, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "tbody")(74, "tr")(75, "td", 30)(76, "a", 31);
      \u0275\u0275text(77, "ORD010");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "td");
      \u0275\u0275text(79, "28 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "td")(81, "a", 32);
      \u0275\u0275text(82, "Information about UI/UX Design Degree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "td");
      \u0275\u0275text(84, "$160");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "tr")(86, "td", 30)(87, "a", 31);
      \u0275\u0275text(88, "ORD009");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "td");
      \u0275\u0275text(90, "22 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "td")(92, "a", 32);
      \u0275\u0275text(93, "Wordpress for Beginners - Master Wordpress Quickly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "td");
      \u0275\u0275text(95, "$140");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "tr")(97, "td", 30)(98, "a", 31);
      \u0275\u0275text(99, "ORD008");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "td");
      \u0275\u0275text(101, "17 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "td")(103, "a", 32);
      \u0275\u0275text(104, "Sketch from A to Z (2022): Become an app designer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "td");
      \u0275\u0275text(106, "$200");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "tr")(108, "td", 30)(109, "a", 31);
      \u0275\u0275text(110, "ORD007");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "td");
      \u0275\u0275text(112, "08 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "td")(114, "a", 32);
      \u0275\u0275text(115, "Learn Angular Fundamental From beginning to advance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "td");
      \u0275\u0275text(117, "$170");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "tr")(119, "td", 30)(120, "a", 31);
      \u0275\u0275text(121, "ORD006");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "td");
      \u0275\u0275text(123, "03 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "td")(125, "a", 32);
      \u0275\u0275text(126, "C# Developers Double Your Coding Speed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "td");
      \u0275\u0275text(128, "$120");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(54);
      \u0275\u0275property("series", ctx.earningChart.series)("chart", ctx.earningChart.chart)("xaxis", ctx.earningChart.xaxis)("yaxis", ctx.earningChart.yaxis)("stroke", ctx.earningChart.stroke)("tooltip", ctx.earningChart.tooltip)("dataLabels", ctx.earningChart.dataLabels)("fill", ctx.earningChart.fill)("plotOptions", ctx.earningChart.plotOptions)("grid", ctx.earningChart.grid)("colors", ctx.earningChart.colors);
      \u0275\u0275advance(27);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
    }
  }, dependencies: [CommonModule, RouterLink, NgApexchartsModule, ChartComponent, BsDatepickerModule, DateRangePickerComponent], styles: ["\n\n.page-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  background-color: #f8f9fa;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.modal.show[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=superadmin-earnings.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminEarningsComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-earnings", imports: [CommonModule, RouterLink, NgApexchartsModule, BsDatepickerModule, DateRangePickerComponent], template: '\n    <div class="page-title d-flex align-items-center justify-content-between">\n        <h5>Earnings</h5>\n    </div>\n    <div class="row">\n        <div class="col-xl-4 col-md-6">\n            <div class="card bg-light">\n                <div class="card-body">\n                    <div class="d-flex align-items-center">\n                        <span class="earnings-icon bg-success">\n                            <i class="isax isax-dollar-circle4"></i>\n                        </span>\n                        <div class="ms-3">\n                        <h6 class="mb-1">Revenue</h6>\n                            <h5 class="fw-bold text-success mb-1">$8420</h5>\n                            <p>Earning this month</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="col-xl-4 col-md-6">\n            <div class="card bg-light">\n                <div class="card-body">\n                    <div class="d-flex align-items-center">\n                        <span class="earnings-icon bg-secondary">\n                            <i class="isax isax-star5"></i>\n                        </span>\n                        <div class="ms-3">\n                            <h6 class="mb-1">Courses Ratings</h6>\n                            <h5 class="fw-bold text-secondary mb-1">4.8</h5>\n                            <p>Rating this month</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="col-xl-4 col-md-6">\n            <div class="card bg-light">\n                <div class="card-body">\n                    <div class="d-flex align-items-center">\n                        <span class="earnings-icon bg-info">\n                            <i class="isax isax-profile-tick5"></i>\n                        </span>\n                        <div class="ms-3">\n                        <h6 class="mb-1">Students Enrolled</h6>\n                        <h5 class="fw-bold text-info mb-1">12000</h5>\n                        <p>New this month</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            </div>\n            <div class="col-md-12">\n            <div class="card">\n                <div class="card-header d-flex flex-wrap gap-2 align-items-center justify-content-between">\n                    <h5>Earnings by Year</h5>\n                    <div class="icon-form mb-0">\n                        <span class="form-icon"><i class="isax isax-calendar-1 fs-16"></i></span>\n                        <input type="text" class="form-control yearpicker" placeholder="2025">\n                    </div>\n                </div>\n                <div class="card-body">\n                    <div id="earnigs_chart">\n                        <apx-chart\n                        [series]="earningChart.series"\n                        [chart]="earningChart.chart"\n                        [xaxis]="earningChart.xaxis"\n                        [yaxis]="earningChart.yaxis"\n                        [stroke]="earningChart.stroke"\n                        [tooltip]="earningChart.tooltip"\n                        [dataLabels]="earningChart.dataLabels"\n                        [fill]="earningChart.fill"\n                        [plotOptions]="earningChart.plotOptions"\n                        [grid]="earningChart.grid"\n                        [colors]="earningChart.colors"\n                    ></apx-chart>\n                    </div>\n                </div>\n            </div>										\n        </div>\n    </div>\n    <div class="card mb-0">\n        <div class="card-header d-flex flex-wrap gap-2 align-items-center justify-content-between">\n            <h5>Earnings</h5>\n            <app-date-range-picker/>\n        </div>\n        <div class="card-body">\n            <div class="table-responsive custom-table">\n                <table class="table">\n                    <thead class="thead-light">\n                        <tr>\n                            <th>Order ID</th>\n                            <th>Date</th>\n                            <th>Course</th>\n                            <th>Amount</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td class="order"><a href="javascript:void(0);">ORD010</a></td>\n                            <td>28 Jan 2025</td>\n                            <td><a [routerLink]="routes.courseDetails">Information about UI/UX Design Degree</a></td>\n                            <td>$160</td>												\n                        </tr>\n                        <tr>\n                            <td class="order"><a href="javascript:void(0);">ORD009</a></td>\n                            <td>22 Jan 2025</td>\n                            <td><a [routerLink]="routes.courseDetails">Wordpress for Beginners - Master Wordpress Quickly</a></td>\n                            <td>$140</td>												\n                        </tr>	\n                        <tr>\n                            <td class="order"><a href="javascript:void(0);">ORD008</a></td>\n                            <td>17 Jan 2025</td>\n                            <td><a [routerLink]="routes.courseDetails">Sketch from A to Z (2022): Become an app designer</a></td>\n                            <td>$200</td>												\n                        </tr>\n                        <tr>\n                            <td class="order"><a href="javascript:void(0);">ORD007</a></td>\n                            <td>08 Jan 2025</td>\n                            <td><a [routerLink]="routes.courseDetails">Learn Angular Fundamental From beginning to advance</a></td>\n                            <td>$170</td>												\n                        </tr>	\n                        <tr>\n                            <td class="order"><a href="javascript:void(0);">ORD006</a></td>\n                            <td>03 Jan 2025</td>\n                            <td><a [routerLink]="routes.courseDetails">C# Developers Double Your Coding Speed</a></td>\n                            <td>$120</td>												\n                        </tr>								\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n', styles: ["/* src/app/features/superadmin/superadmin-earnings/superadmin-earnings.component.scss */\n.page-content {\n  padding: 20px;\n}\n.table th {\n  font-weight: 600;\n  background-color: #f8f9fa;\n}\n.table tbody tr {\n  transition: all 0.3s ease;\n}\n.table tbody tr:hover {\n  background-color: #f8f9fa;\n}\n.modal.show {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=superadmin-earnings.component.css.map */\n"] }]
  }], () => [], { chart: [{
    type: ViewChild,
    args: ["chart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminEarningsComponent, { className: "SuperadminEarningsComponent", filePath: "src/app/features/superadmin/superadmin-earnings/superadmin-earnings.component.ts", lineNumber: 32 });
})();
export {
  SuperadminEarningsComponent
};
//# sourceMappingURL=chunk-A4TCBHQD.js.map
