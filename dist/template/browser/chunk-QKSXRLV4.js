import {
  DateRangePickerComponent
} from "./chunk-QU6O5KAP.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-ISDT5NHH.js";
import "./chunk-PFI4JPHC.js";
import "./chunk-B7WLGCJZ.js";
import "./chunk-TTG64NGZ.js";
import {
  routes
} from "./chunk-W6FAPSPW.js";
import "./chunk-AK2M3J6O.js";
import {
  RouterLink
} from "./chunk-AJNKO2CX.js";
import "./chunk-FZP3BRBS.js";
import "./chunk-GSAJL664.js";
import {
  CommonModule
} from "./chunk-3IMMP55I.js";
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
} from "./chunk-UPBSS6WA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/instructor/instructor-dashboard/instructor-dashboard.component.ts
var _c0 = ["chart"];
var InstructorDashboardComponent = class _InstructorDashboardComponent {
  routes = routes;
  chart;
  Earningchart;
  ColumnCharts;
  bestSellingCourses = [];
  ngOnInit() {
    this.Earningchart = {
      chart: {
        height: 290,
        type: "bar",
        stacked: true,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          horizontal: false,
          endingShape: "rounded"
        }
      },
      series: [{
        name: "Earnings",
        data: [80, 100, 70, 110, 80, 90, 85, 85, 110, 30, 100, 90]
      }],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        labels: {
          style: {
            colors: "#4D4D4D",
            fontSize: "13px"
          }
        }
      },
      yaxis: {
        labels: {
          offsetX: -15,
          style: {
            colors: "#4D4D4D",
            fontSize: "13px"
          }
        }
      },
      grid: {
        borderColor: "#4D4D4D",
        strokeDashArray: 5
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
        // Disable data labels
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "linear",
          shadeIntensity: 0.35,
          gradientToColors: ["#392C7D"],
          // Second gradient color
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
          angle: 90
          // This sets the gradient direction from top to bottom
        }
      }
    };
    this.ColumnCharts = {
      series: [
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
          color: "#1D9CFD"
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "20%",
          borderRadius: 7
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      fill: {
        opacity: 1
      },
      grid: {
        show: false
      }
    };
  }
  isClassAdded = [false];
  toggleClass(index) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  static \u0275fac = function InstructorDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorDashboardComponent, selectors: [["app-instructor-dashboard"]], viewQuery: function InstructorDashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 163, vars: 20, consts: [[1, "row"], [1, "col-md-6", "col-xl-4"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "icon-box", "bg-primary-transparent", "me-2", "me-xxl-3", "flex-shrink-0"], ["src", "assets/img/icon/graduation.svg", "alt", ""], [1, "d-block"], [1, "fs-24", "mt-1"], [1, "icon-box", "bg-secondary-transparent", "me-2", "me-xxl-3", "flex-shrink-0"], ["src", "assets/img/icon/book.svg", "alt", ""], [1, "icon-box", "bg-success-transparent", "me-2", "me-xxl-3", "flex-shrink-0"], ["src", "assets/img/icon/bookmark.svg", "alt", ""], [1, "icon-box", "bg-info-transparent", "me-2", "me-xxl-3", "flex-shrink-0"], ["src", "assets/img/icon/user-octagon.svg", "alt", ""], [1, "icon-box", "bg-blue-transparent", "me-2", "me-xxl-3", "flex-shrink-0"], ["src", "assets/img/icon/book-2.svg", "alt", ""], [1, "icon-box", "bg-purple-transparent", "me-2", "me-xxl-3", "flex-shrink-0"], ["src", "assets/img/icon/money-add.svg", "alt", ""], [1, "d-flex", "align-items-center", "flex-wrap", "gap-3", "justify-content-between", "border-bottom", "mb-2", "pb-3"], [1, "fw-bold"], ["id", "earnnings_chart"], [3, "series", "chart", "xaxis", "yaxis", "stroke", "tooltip", "dataLabels", "fill", "plotOptions", "grid"], [1, "mb-3", "fw-bold"], [1, "table-responsive", "custom-table"], [1, "table"], [1, "thead-light"], [1, "course-title", "d-flex", "align-items-center"], [1, "avatar", "avatar-xl", "flex-shrink-0", "me-2", 3, "routerLink"], ["src", "assets/img/instructor/instructor-table-01.jpg", "alt", "Img"], [1, "fw-medium"], [3, "routerLink"], ["src", "assets/img/instructor/instructor-table-02.jpg", "alt", "Img"], ["src", "assets/img/instructor/instructor-table-03.jpg", "alt", "Img"], ["src", "assets/img/instructor/instructor-table-04.jpg", "alt", "Img"], ["src", "assets/img/instructor/instructor-table-05.jpg", "alt", "Img"]], template: function InstructorDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
      \u0275\u0275element(6, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div")(8, "span", 7);
      \u0275\u0275text(9, "Enrolled Courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "h4", 8);
      \u0275\u0275text(11, "12");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(12, "div", 1)(13, "div", 2)(14, "div", 3)(15, "div", 4)(16, "span", 9);
      \u0275\u0275element(17, "img", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div")(19, "span", 7);
      \u0275\u0275text(20, "Active Courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "h4", 8);
      \u0275\u0275text(22, "08");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(23, "div", 1)(24, "div", 2)(25, "div", 3)(26, "div", 4)(27, "span", 11);
      \u0275\u0275element(28, "img", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div")(30, "span", 7);
      \u0275\u0275text(31, "Completed Courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "h4", 8);
      \u0275\u0275text(33, "06");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(34, "div", 1)(35, "div", 2)(36, "div", 3)(37, "div", 4)(38, "span", 13);
      \u0275\u0275element(39, "img", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div")(41, "span", 7);
      \u0275\u0275text(42, "Total Students");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "h4", 8);
      \u0275\u0275text(44, "17");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(45, "div", 1)(46, "div", 2)(47, "div", 3)(48, "div", 4)(49, "span", 15);
      \u0275\u0275element(50, "img", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div")(52, "span", 7);
      \u0275\u0275text(53, "Total Courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "h4", 8);
      \u0275\u0275text(55, "11");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(56, "div", 1)(57, "div", 2)(58, "div", 3)(59, "div", 4)(60, "span", 17);
      \u0275\u0275element(61, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div")(63, "span", 7);
      \u0275\u0275text(64, "Total Earnings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "h4", 8);
      \u0275\u0275text(66, "$486");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(67, "div", 2)(68, "div", 3)(69, "div", 19)(70, "h5", 20);
      \u0275\u0275text(71, "Earnings by Year");
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "app-date-range-picker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 21);
      \u0275\u0275element(74, "apx-chart", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(75, "h5", 23);
      \u0275\u0275text(76, "Recently Created Courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 24)(78, "table", 25)(79, "thead", 26)(80, "tr")(81, "th");
      \u0275\u0275text(82, "Courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "th");
      \u0275\u0275text(84, "Enrolled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "th");
      \u0275\u0275text(86, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "tbody")(88, "tr")(89, "td")(90, "div", 27)(91, "a", 28);
      \u0275\u0275element(92, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div")(94, "p", 30)(95, "a", 31);
      \u0275\u0275text(96, "Complete HTML, CSS and Javascript");
      \u0275\u0275element(97, "br");
      \u0275\u0275text(98, " Course");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(99, "td");
      \u0275\u0275text(100, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "td");
      \u0275\u0275text(102, "Published");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "tr")(104, "td")(105, "div", 27)(106, "a", 28);
      \u0275\u0275element(107, "img", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div")(109, "p", 30)(110, "a", 31);
      \u0275\u0275text(111, "Complete Course on Fullstack Web");
      \u0275\u0275element(112, "br");
      \u0275\u0275text(113, " Developer");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(114, "td");
      \u0275\u0275text(115, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "td");
      \u0275\u0275text(117, "Published");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "tr")(119, "td")(120, "div", 27)(121, "a", 28);
      \u0275\u0275element(122, "img", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div")(124, "p", 30)(125, "a", 31);
      \u0275\u0275text(126, "Data Science Fundamentals and");
      \u0275\u0275element(127, "br");
      \u0275\u0275text(128, " Advanced Bootcampr");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(129, "td");
      \u0275\u0275text(130, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "td");
      \u0275\u0275text(132, "Published");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "tr")(134, "td")(135, "div", 27)(136, "a", 28);
      \u0275\u0275element(137, "img", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "div")(139, "p", 30)(140, "a", 31);
      \u0275\u0275text(141, "Master Microservices with Spring Boot");
      \u0275\u0275element(142, "br");
      \u0275\u0275text(143, " and Spring Cloud");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(144, "td");
      \u0275\u0275text(145, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "td");
      \u0275\u0275text(147, "Published");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "tr")(149, "td")(150, "div", 27)(151, "a", 28);
      \u0275\u0275element(152, "img", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "div")(154, "p", 30)(155, "a", 31);
      \u0275\u0275text(156, "Information About UI/UX Design");
      \u0275\u0275element(157, "br");
      \u0275\u0275text(158, " Degree");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(159, "td");
      \u0275\u0275text(160, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "td");
      \u0275\u0275text(162, "Published");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(74);
      \u0275\u0275property("series", ctx.Earningchart.series)("chart", ctx.Earningchart.chart)("xaxis", ctx.Earningchart.xaxis)("yaxis", ctx.Earningchart.yaxis)("stroke", ctx.Earningchart.stroke)("tooltip", ctx.Earningchart.tooltip)("dataLabels", ctx.Earningchart.dataLabels)("fill", ctx.Earningchart.fill)("plotOptions", ctx.Earningchart.plotOptions)("grid", ctx.Earningchart.grid);
      \u0275\u0275advance(17);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
    }
  }, dependencies: [CommonModule, RouterLink, NgApexchartsModule, ChartComponent, DateRangePickerComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-dashboard", imports: [CommonModule, RouterLink, NgApexchartsModule, DateRangePickerComponent], template: '\n \n    <div class="row">\n        <div class="col-md-6 col-xl-4">\n            <div class="card">\n                <div class="card-body">\n                    <div class="d-flex align-items-center">\n                        <span class="icon-box bg-primary-transparent me-2 me-xxl-3 flex-shrink-0">\n                            <img src="assets/img/icon/graduation.svg" alt="">\n                        </span>\n                        <div>\n                            <span class="d-block">Enrolled Courses</span>\n                            <h4 class="fs-24 mt-1">12</h4>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="col-md-6 col-xl-4">\n            <div class="card">\n                <div class="card-body">\n                    <div class="d-flex align-items-center">\n                        <span class="icon-box bg-secondary-transparent me-2 me-xxl-3 flex-shrink-0">\n                            <img src="assets/img/icon/book.svg" alt="">\n                        </span>\n                        <div>\n                            <span class="d-block">Active Courses</span>\n                            <h4 class="fs-24 mt-1">08</h4>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="col-md-6 col-xl-4">\n            <div class="card">\n                <div class="card-body">\n                    <div class="d-flex align-items-center">\n                        <span class="icon-box bg-success-transparent me-2 me-xxl-3 flex-shrink-0">\n                            <img src="assets/img/icon/bookmark.svg" alt="">\n                        </span>\n                        <div>\n                            <span class="d-block">Completed Courses</span>\n                            <h4 class="fs-24 mt-1">06</h4>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="col-md-6 col-xl-4">\n            <div class="card">\n                <div class="card-body">\n                    <div class="d-flex align-items-center">\n                        <span class="icon-box bg-info-transparent me-2 me-xxl-3 flex-shrink-0">\n                            <img src="assets/img/icon/user-octagon.svg" alt="">\n                        </span>\n                        <div>\n                            <span class="d-block">Total Students</span>\n                            <h4 class="fs-24 mt-1">17</h4>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="col-md-6 col-xl-4">\n            <div class="card">\n                <div class="card-body">\n                    <div class="d-flex align-items-center">\n                        <span class="icon-box bg-blue-transparent me-2 me-xxl-3 flex-shrink-0">\n                            <img src="assets/img/icon/book-2.svg" alt="">\n                        </span>\n                        <div>\n                            <span class="d-block">Total Courses</span>\n                            <h4 class="fs-24 mt-1">11</h4>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="col-md-6 col-xl-4">\n            <div class="card">\n                <div class="card-body">\n                    <div class="d-flex align-items-center">\n                        <span class="icon-box bg-purple-transparent me-2 me-xxl-3 flex-shrink-0">\n                            <img src="assets/img/icon/money-add.svg" alt="">\n                        </span>\n                        <div>\n                            <span class="d-block">Total Earnings</span>\n                            <h4 class="fs-24 mt-1">$486</h4>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="card">\n        <div class="card-body">\n            <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between border-bottom mb-2 pb-3">\n                <h5 class="fw-bold">Earnings by Year</h5> \n                <app-date-range-picker/>\n                \n            </div>\n            <div id="earnnings_chart">\n                <apx-chart\n                [series]="Earningchart.series"\n                [chart]="Earningchart.chart"\n                [xaxis]="Earningchart.xaxis"\n                [yaxis]="Earningchart.yaxis"\n                [stroke]="Earningchart.stroke"\n                [tooltip]="Earningchart.tooltip"\n                [dataLabels]="Earningchart.dataLabels"\n                [fill]="Earningchart.fill"\n                [plotOptions]="Earningchart.plotOptions"\n                [grid]="Earningchart.grid"\n            ></apx-chart>\n            </div>\n        </div>\n    </div>\n    <h5 class="mb-3 fw-bold">Recently Created Courses</h5>\n    <div class="table-responsive custom-table">\n        <table class="table">\n            <thead class="thead-light">\n                <tr>\n                    <th>Courses</th>\n                    <th>Enrolled</th>\n                    <th>Status</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>\n                        <div class="course-title d-flex align-items-center">\n                            <a [routerLink]="routes.courseDetails" class="avatar avatar-xl flex-shrink-0 me-2"><img src="assets/img/instructor/instructor-table-01.jpg" alt="Img"></a>\n                            <div>\n                                <p class="fw-medium"><a [routerLink]="routes.courseDetails">Complete HTML, CSS and Javascript<br> Course</a></p>\n                            </div>\n                        </div>\n                    </td>\n                    <td>0</td>\n                    <td>Published</td>\n                </tr>\n                <tr>\n                    <td>\n                        <div class="course-title d-flex align-items-center">\n                            <a [routerLink]="routes.courseDetails" class="avatar avatar-xl flex-shrink-0 me-2"><img src="assets/img/instructor/instructor-table-02.jpg" alt="Img"></a>\n                            <div>\n                                <p class="fw-medium"><a [routerLink]="routes.courseDetails">Complete Course on Fullstack Web<br> Developer</a></p>\n                            </div>\n                        </div>\n                    </td>\n                    <td>2</td>\n                    <td>Published</td>\n                </tr>\n                <tr>\n                    <td>\n                        <div class="course-title d-flex align-items-center">\n                            <a [routerLink]="routes.courseDetails" class="avatar avatar-xl flex-shrink-0 me-2"><img src="assets/img/instructor/instructor-table-03.jpg" alt="Img"></a>\n                            <div>\n                                <p class="fw-medium"><a [routerLink]="routes.courseDetails">Data Science Fundamentals and<br> Advanced Bootcampr</a></p>\n                            </div>\n                        </div>\n                    </td>\n                    <td>2</td>\n                    <td>Published</td>\n                </tr>\n                <tr>\n                    <td>\n                        <div class="course-title d-flex align-items-center">\n                            <a [routerLink]="routes.courseDetails" class="avatar avatar-xl flex-shrink-0 me-2"><img src="assets/img/instructor/instructor-table-04.jpg" alt="Img"></a>\n                            <div>\n                                <p class="fw-medium"><a [routerLink]="routes.courseDetails">Master Microservices with Spring Boot<br> and Spring Cloud</a></p>\n                            </div>\n                        </div>\n                    </td>\n                    <td>1</td>\n                    <td>Published</td>\n                </tr>\n                <tr>\n                    <td>\n                        <div class="course-title d-flex align-items-center">\n                            <a [routerLink]="routes.courseDetails" class="avatar avatar-xl flex-shrink-0 me-2"><img src="assets/img/instructor/instructor-table-05.jpg" alt="Img"></a>\n                            <div>\n                                <p class="fw-medium"><a [routerLink]="routes.courseDetails">Information About UI/UX Design<br> Degree</a></p>\n                            </div>\n                        </div>\n                    </td>\n                    <td>0</td>\n                    <td>Published</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n          ' }]
  }], null, { chart: [{
    type: ViewChild,
    args: ["chart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorDashboardComponent, { className: "InstructorDashboardComponent", filePath: "src/app/features/instructor/instructor-dashboard/instructor-dashboard.component.ts", lineNumber: 32 });
})();
export {
  InstructorDashboardComponent
};
//# sourceMappingURL=chunk-QKSXRLV4.js.map
