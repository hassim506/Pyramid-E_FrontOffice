import {
  CompanyAddComponent
} from "./chunk-IWG5B5S3.js";
import "./chunk-GVIVIINZ.js";
import {
  ClientCompanyService
} from "./chunk-AOQ7MVQS.js";
import {
  CustomPaginationComponent
} from "./chunk-QBIBOWET.js";
import {
  MatSort,
  MatSortHeader,
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
  AuthService
} from "./chunk-GD4TWLVQ.js";
import "./chunk-K7E3GT3E.js";
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
  Router,
  RouterLink
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  NgForOf,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTSSTHJF.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/adminrh/companymanagement/companymanagement.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ["/adminrh/adminrh-company-details", a0];
function CompanyManagementComponent_div_8_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 27);
    \u0275\u0275text(4, "Inactives");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.inactiveCompanies);
  }
}
function CompanyManagementComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "div", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 27);
    \u0275\u0275text(5, "Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 25)(7, "div", 28);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small", 27);
    \u0275\u0275text(10, "Actives");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, CompanyManagementComponent_div_8_div_11_Template, 5, 1, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.totalCompanies);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.activeCompanies);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.inactiveCompanies > 0);
  }
}
function CompanyManagementComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 33);
    \u0275\u0275listener("click", function CompanyManagementComponent_div_13_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearMessages());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function CompanyManagementComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "i", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 33);
    \u0275\u0275listener("click", function CompanyManagementComponent_div_14_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearMessages());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function CompanyManagementComponent_small_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.tableData.length, " r\xE9sultat(s) trouv\xE9(s) sur ", ctx_r0.totalCompanies, " ");
  }
}
function CompanyManagementComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 25)(2, "div", 37)(3, "span", 38);
    \u0275\u0275text(4, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 27);
    \u0275\u0275text(6, "Chargement des entreprises...");
    \u0275\u0275elementEnd()()();
  }
}
function CompanyManagementComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "div", 41);
    \u0275\u0275element(3, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h5", 43);
    \u0275\u0275text(5, "Aucune entreprise trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.canAddCompany() ? "Commencez par ajouter votre premi\xE8re entreprise." : "Aucune entreprise n'est associ\xE9e \xE0 votre profil.", " ");
  }
}
function CompanyManagementComponent_div_27_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "button", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 68)(4, "li")(5, "a", 69);
    \u0275\u0275listener("click", function CompanyManagementComponent_div_27_div_8_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changePageSize(5));
    });
    \u0275\u0275text(6, "5 par page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "li")(8, "a", 69);
    \u0275\u0275listener("click", function CompanyManagementComponent_div_27_div_8_Template_a_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changePageSize(10));
    });
    \u0275\u0275text(9, "10 par page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li")(11, "a", 69);
    \u0275\u0275listener("click", function CompanyManagementComponent_div_27_div_8_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changePageSize(25));
    });
    \u0275\u0275text(12, "25 par page");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li")(14, "a", 69);
    \u0275\u0275listener("click", function CompanyManagementComponent_div_27_div_8_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changePageSize(50));
    });
    \u0275\u0275text(15, "50 par page");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.pageSize, " par page ");
  }
}
function CompanyManagementComponent_div_27_tr_34_small_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const company_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.getClientType(company_r7.client)), " ");
  }
}
function CompanyManagementComponent_div_27_tr_34_button_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 89);
    \u0275\u0275listener("click", function CompanyManagementComponent_div_27_tr_34_button_53_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const company_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.archiveCompany(company_r7));
    });
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275elementEnd();
  }
}
function CompanyManagementComponent_div_27_tr_34_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function CompanyManagementComponent_div_27_tr_34_button_54_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const company_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.reactivateCompany(company_r7));
    });
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275elementEnd();
  }
}
function CompanyManagementComponent_div_27_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 70)(1, "td")(2, "div", 71)(3, "span", 72);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "td")(6, "div", 71)(7, "div", 73)(8, "span", 74);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div")(11, "a", 75);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 76);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "td")(16, "div")(17, "div", 77);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, CompanyManagementComponent_div_27_tr_34_small_19_Template, 3, 3, "small", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td")(21, "div", 71);
    \u0275\u0275element(22, "i", 78);
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "td")(26, "div", 71);
    \u0275\u0275element(27, "i", 79);
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "td")(31, "span", 48);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "td")(34, "div", 71);
    \u0275\u0275element(35, "i", 80);
    \u0275\u0275elementStart(36, "span", 77);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "td")(39, "div", 71)(40, "span", 81);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "td")(45, "span");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "td", 62)(48, "div", 82)(49, "button", 83);
    \u0275\u0275listener("click", function CompanyManagementComponent_div_27_tr_34_Template_button_click_49_listener() {
      const company_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editCompany(company_r7));
    });
    \u0275\u0275element(50, "i", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "a", 85);
    \u0275\u0275element(52, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275template(53, CompanyManagementComponent_div_27_tr_34_button_53_Template, 2, 0, "button", 87)(54, CompanyManagementComponent_div_27_tr_34_button_54_Template, 2, 0, "button", 88);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const company_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getCompanyField(company_r7, "ninea"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getCompanyInitials(company_r7.nom || ""));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c1, company_r7.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", company_r7.nom || "Nom non renseign\xE9", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ID: ", company_r7.id, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getClientName(company_r7.client));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getClientType(company_r7.client));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getCompanyField(company_r7, "email"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getCompanyField(company_r7, "telephone"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getCompanyField(company_r7, "secteur_activite"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getCompanyField(company_r7, "taille_effectif"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getCountryFlag(company_r7.pays || ""));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getCountryName(company_r7.pays || ""));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getStatusClass(company_r7.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(company_r7.statut), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r0.canEditCompany(company_r7));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c1, company_r7.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", company_r7.statut === "active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", company_r7.statut === "inactive");
  }
}
function CompanyManagementComponent_div_27_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 92)(2, "div", 27);
    \u0275\u0275element(3, "i", 93);
    \u0275\u0275elementStart(4, "h6");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 94);
    \u0275\u0275text(7, "Essayez avec d'autres termes de recherche.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1('Aucun r\xE9sultat pour "', ctx_r0.searchDataValue, '"');
  }
}
function CompanyManagementComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 45)(2, "div", 46)(3, "h6", 47);
    \u0275\u0275text(4, "Liste des Entreprises");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "span", 48);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CompanyManagementComponent_div_27_div_8_Template, 16, 1, "div", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 50)(10, "table", 51);
    \u0275\u0275listener("matSortChange", function CompanyManagementComponent_div_27_Template_table_matSortChange_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sortData($event));
    });
    \u0275\u0275elementStart(11, "thead", 52)(12, "tr")(13, "th", 53);
    \u0275\u0275text(14, "NINEA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 54);
    \u0275\u0275text(16, "Entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 55);
    \u0275\u0275text(18, "Client/Groupe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 56);
    \u0275\u0275text(20, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 57);
    \u0275\u0275text(22, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 58);
    \u0275\u0275text(24, "Secteur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 59);
    \u0275\u0275text(26, "Effectif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 60);
    \u0275\u0275text(28, "Pays");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 61);
    \u0275\u0275text(30, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th", 62);
    \u0275\u0275text(32, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "tbody");
    \u0275\u0275template(34, CompanyManagementComponent_div_27_tr_34_Template, 55, 24, "tr", 63)(35, CompanyManagementComponent_div_27_tr_35_Template, 8, 1, "tr", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 65);
    \u0275\u0275element(37, "app-custom-pagination");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r0.tableData.length, " affich\xE9e(s)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasData);
    \u0275\u0275advance(26);
    \u0275\u0275property("ngForOf", ctx_r0.tableData)("ngForTrackBy", ctx_r0.trackByCompanyId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tableData.length === 0 && ctx_r0.searchDataValue && !ctx_r0.loading);
  }
}
var CompanyManagementComponent = class _CompanyManagementComponent {
  data;
  router;
  pagination;
  clientCompanyService;
  authService;
  routes = routes;
  companyDialog = false;
  isEditMode = false;
  selectedCompany = null;
  // Variables de pagination
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
  // Variables de gestion d'état
  submitted = false;
  loading = false;
  error = "";
  successMessage = "";
  // Données utilisateur connecté
  currentUser;
  // Liste des pays avec typage strict
  paysList = [
    { code: "SN", nom: "S\xE9n\xE9gal", flag: "\u{1F1F8}\u{1F1F3}" },
    { code: "FR", nom: "France", flag: "\u{1F1EB}\u{1F1F7}" },
    { code: "ML", nom: "Mali", flag: "\u{1F1F2}\u{1F1F1}" },
    { code: "BF", nom: "Burkina Faso", flag: "\u{1F1E7}\u{1F1EB}" },
    { code: "CI", nom: "C\xF4te d'Ivoire", flag: "\u{1F1E8}\u{1F1EE}" },
    { code: "GN", nom: "Guin\xE9e", flag: "\u{1F1EC}\u{1F1F3}" },
    { code: "MR", nom: "Mauritanie", flag: "\u{1F1F2}\u{1F1F7}" },
    { code: "GM", nom: "Gambie", flag: "\u{1F1EC}\u{1F1F2}" },
    { code: "GW", nom: "Guin\xE9e-Bissau", flag: "\u{1F1EC}\u{1F1FC}" },
    { code: "CV", nom: "Cap-Vert", flag: "\u{1F1E8}\u{1F1FB}" }
  ];
  constructor(data, router, pagination, clientCompanyService, authService) {
    this.data = data;
    this.router = router;
    this.pagination = pagination;
    this.clientCompanyService = clientCompanyService;
    this.authService = authService;
    this.pagination.tablePageSize.subscribe((res) => {
      if (this.router.url === "/adminrh/companymanagement" || this.router.url.includes("adminrh-companymanagement")) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }
  ngOnInit() {
    this.initializeUser();
    this.loadCompanies();
  }
  // === INITIALISATION ===
  initializeUser() {
    this.currentUser = this.authService.getUser();
    if (!this.currentUser) {
      this.error = "Utilisateur non connect\xE9. Veuillez vous reconnecter.";
      console.error("\u274C Aucun utilisateur connect\xE9");
      return;
    }
    console.log("\u{1F464} Utilisateur connect\xE9:", this.currentUser);
  }
  // === MÉTHODES DE CHARGEMENT DES DONNÉES ===
  loadCompanies() {
    if (!this.currentUser) {
      this.error = "Utilisateur non connect\xE9.";
      return;
    }
    this.loading = true;
    this.error = "";
    this.successMessage = "";
    console.log("\u{1F504} Chargement des entreprises...");
    this.clientCompanyService.getMyCompanies().subscribe({
      next: (response) => {
        console.log("\u{1F4E6} R\xE9ponse API entreprises:", response);
        try {
          const allCompanies = this.extractCompaniesFromResponse(response);
          console.log("\u{1F3E2} Entreprises extraites:", allCompanies.length, allCompanies);
          const filteredCompanies = this.filterCompaniesByRole(allCompanies);
          this.actualData = filteredCompanies;
          this.totalData = this.actualData.length;
          this.getTableData({ skip: 0, limit: this.pageSize });
          this.loading = false;
          console.log("\u2705 Entreprises charg\xE9es avec succ\xE8s:", this.actualData.length);
          if (this.actualData.length === 0) {
            this.error = "Aucune entreprise trouv\xE9e pour votre profil.";
          }
        } catch (err) {
          console.error("\u274C Erreur lors du traitement des donn\xE9es:", err);
          this.handleLoadError(new Error("Erreur lors du traitement des donn\xE9es"));
        }
      },
      error: (error) => {
        console.error("\u274C Erreur lors du chargement des entreprises:", error);
        this.handleLoadError(error);
      }
    });
  }
  extractCompaniesFromResponse(response) {
    if (!response)
      return [];
    if (Array.isArray(response)) {
      return response;
    }
    if (response.entreprises && Array.isArray(response.entreprises)) {
      return response.entreprises;
    }
    if (response.data && Array.isArray(response.data)) {
      return response.data;
    }
    if (response.companies && Array.isArray(response.companies)) {
      return response.companies;
    }
    return [];
  }
  handleLoadError(error) {
    this.error = this.getErrorMessage(error);
    this.loading = false;
    this.actualData = [];
    this.getTableData({ skip: 0, limit: this.pageSize });
  }
  filterCompaniesByRole(companies) {
    if (!this.currentUser) {
      console.warn("\u26A0\uFE0F Aucun utilisateur connect\xE9");
      return [];
    }
    const userRoleId = Number(this.currentUser.role_id) || 0;
    const userClientId = Number(this.currentUser.client_id) || 0;
    const userEntrepriseId = Number(this.currentUser.entreprise_id) || 0;
    console.log("\u{1F50D} Filtrage des entreprises par r\xF4le:");
    console.log("- Role ID:", userRoleId);
    console.log("- Client ID (groupe):", userClientId);
    console.log("- Entreprise ID:", userEntrepriseId);
    console.log("- Total entreprises avant filtrage:", companies.length);
    if (companies.length > 0) {
      console.log("- Structure entreprise exemple:", companies[0]);
    }
    let filteredCompanies = [];
    switch (userRoleId) {
      case 1:
        console.log("\u{1F451} Super Admin - Acc\xE8s \xE0 toutes les entreprises");
        filteredCompanies = [...companies];
        break;
      case 5:
      // Responsable RH Groupe
      case 14:
        console.log("\u{1F465} RH Groupe - Filtrage par client_id:", userClientId);
        filteredCompanies = companies.filter((company) => {
          const companyClientId = Number(company.client_id) || 0;
          const hasAccess = companyClientId === userClientId;
          console.log(`${hasAccess ? "\u2705" : "\u274C"} Entreprise "${company.nom || "Sans nom"}" (client_id: ${companyClientId} ${hasAccess ? "===" : "!=="} ${userClientId})`);
          return hasAccess;
        });
        break;
      case 4:
      // Admin RH
      case 9:
        console.log("\u{1F3E2} Admin RH/Role limit\xE9 - Filtrage par entreprise:", userEntrepriseId);
        filteredCompanies = companies.filter((company) => {
          const companyId = Number(company.id) || 0;
          const hasAccess = companyId === userEntrepriseId;
          console.log(`${hasAccess ? "\u2705" : "\u274C"} Entreprise "${company.nom || "Sans nom"}" (id: ${companyId} ${hasAccess ? "===" : "!=="} ${userEntrepriseId})`);
          return hasAccess;
        });
        break;
      default:
        console.warn("\u26A0\uFE0F R\xF4le non reconnu:", userRoleId);
        filteredCompanies = [];
        break;
    }
    console.log("\u2705 Entreprises apr\xE8s filtrage:", filteredCompanies.length);
    return filteredCompanies;
  }
  getTableData(pageOption) {
    this.tableData = [];
    this.tableDataCopy = [];
    this.serialNumberArray = [];
    this.actualData.forEach((company, index) => {
      const serialNumber = index + 1;
      if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
        this.tableData.push(company);
        this.tableDataCopy.push(company);
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
    console.log("\u{1F4CA} Donn\xE9es du tableau mises \xE0 jour:", {
      totalData: this.totalData,
      tableData: this.tableData.length,
      pageSize: this.pageSize
    });
  }
  // === MÉTHODES DE PERMISSIONS ===
  canAddCompany() {
    if (!this.currentUser)
      return false;
    const userRoleId = Number(this.currentUser.role_id) || 0;
    return [1, 5, 14].includes(userRoleId);
  }
  canEditCompany(company) {
    if (!this.currentUser || !company)
      return false;
    const userRoleId = Number(this.currentUser.role_id) || 0;
    const userClientId = Number(this.currentUser.client_id) || 0;
    const userEntrepriseId = Number(this.currentUser.entreprise_id) || 0;
    const companyId = Number(company.id) || 0;
    const companyClientId = Number(company.client_id) || 0;
    switch (userRoleId) {
      case 1:
        return true;
      case 5:
      // RH Groupe
      case 14:
        return companyClientId === userClientId;
      case 4:
      case 9:
        return companyId === userEntrepriseId;
      default:
        return false;
    }
  }
  canDeleteCompany(company) {
    if (!this.currentUser || !company)
      return false;
    const userRoleId = Number(this.currentUser.role_id) || 0;
    return userRoleId === 1 || [5, 14].includes(userRoleId) && this.canEditCompany(company);
  }
  // === MÉTHODES DE RECHERCHE ET TRI ===
  searchData(value) {
    const searchValue = (value || "").toLowerCase().trim();
    if (searchValue === "") {
      this.tableData = [...this.tableDataCopy];
    } else {
      this.tableData = this.tableDataCopy.filter((company) => this.matchesSearch(company, searchValue));
    }
    console.log(`\u{1F50D} Recherche "${value}": ${this.tableData.length} r\xE9sultats`);
  }
  matchesSearch(company, searchValue) {
    const fields = [
      company?.nom || "",
      company?.email || "",
      company?.telephone || "",
      company?.secteur_activite || "",
      this.getClientName(company.client),
      company?.ninea || "",
      company?.adresse || ""
    ];
    return fields.some((field) => field.toLowerCase().includes(searchValue));
  }
  sortData(sort) {
    const data = [...this.tableData];
    if (!sort.active || sort.direction === "") {
      this.tableData = data;
      return;
    }
    this.tableData = data.sort((a, b) => {
      const result = this.compareValues(a, b, sort.active);
      return sort.direction === "asc" ? result : -result;
    });
  }
  compareValues(a, b, sortField) {
    let aValue = "";
    let bValue = "";
    switch (sortField) {
      case "nom":
        aValue = a.nom || "";
        bValue = b.nom || "";
        break;
      case "email":
        aValue = a.email || "";
        bValue = b.email || "";
        break;
      case "telephone":
        aValue = a.telephone || "";
        bValue = b.telephone || "";
        break;
      case "secteur_activite":
        aValue = a.secteur_activite || "";
        bValue = b.secteur_activite || "";
        break;
      case "ninea":
        aValue = a.ninea || "";
        bValue = b.ninea || "";
        break;
      case "client":
        aValue = this.getClientName(a.client);
        bValue = this.getClientName(b.client);
        break;
      case "taille_effectif":
        aValue = Number(a.taille_effectif || a.taille_effectif || 0);
        bValue = Number(b.taille_effectif || b.taille_effectif || 0);
        break;
      default:
        aValue = String(a[sortField] || "");
        bValue = String(b[sortField] || "");
    }
    if (typeof aValue === "number" && typeof bValue === "number") {
      return aValue - bValue;
    }
    return String(aValue).localeCompare(String(bValue));
  }
  // === MÉTHODES UTILITAIRES POUR GESTION DES DONNÉES ===
  getCompanyField(company, field) {
    if (!company)
      return "Non renseign\xE9";
    const fieldMap = {
      "taille_effectif": String(company.taille_effectif || company.taille_effectif || 0),
      "email": company.email || "Non renseign\xE9",
      "telephone": company.telephone || "Non renseign\xE9",
      "adresse": company.adresse || "Non renseign\xE9e",
      "ninea": company.ninea || "Non renseign\xE9",
      "secteur_activite": company.secteur_activite || "Non renseign\xE9",
      "pays": company.pays || "SN"
    };
    return fieldMap[field] || "Non renseign\xE9";
  }
  getClientName(client) {
    if (!client)
      return "Non renseign\xE9";
    if (typeof client === "string") {
      return client;
    }
    if (typeof client === "object") {
      return client.nom || client.name || client.raison_sociale || "Non renseign\xE9";
    }
    return "Non renseign\xE9";
  }
  getClientType(client) {
    if (!client || typeof client === "string")
      return "";
    if (typeof client === "object") {
      return client.type || client.client_type || "";
    }
    return "";
  }
  // === MÉTHODES D'ACTIONS ===
  refreshData() {
    console.log("\u{1F504} Actualisation des donn\xE9es...");
    this.searchDataValue = "";
    this.clearMessages();
    this.loadCompanies();
  }
  openNew() {
    if (!this.canAddCompany()) {
      this.error = "Vous n'\xEAtes pas autoris\xE9 \xE0 ajouter une entreprise.";
      console.warn("\u26A0\uFE0F Utilisateur non autoris\xE9 \xE0 ajouter une entreprise");
      return;
    }
    this.companyDialog = true;
    this.isEditMode = false;
    this.selectedCompany = null;
    this.submitted = false;
    this.clearMessages();
    console.log("\u2795 Ouverture du formulaire de cr\xE9ation");
  }
  editCompany(company) {
    if (!company) {
      this.error = "Entreprise non valide.";
      return;
    }
    if (!this.canEditCompany(company)) {
      this.error = `Vous n'\xEAtes pas autoris\xE9 \xE0 modifier l'entreprise "${company.nom || "inconnue"}".`;
      console.warn("\u26A0\uFE0F Utilisateur non autoris\xE9 \xE0 modifier cette entreprise");
      return;
    }
    this.companyDialog = true;
    this.isEditMode = true;
    this.selectedCompany = __spreadValues({}, company);
    this.submitted = false;
    this.clearMessages();
    console.log("\u270F\uFE0F Ouverture du formulaire de modification:", company.nom);
  }
  deleteCompany(company) {
    if (!company) {
      this.error = "Entreprise non valide.";
      return;
    }
    if (!this.canDeleteCompany(company)) {
      this.error = `Vous n'\xEAtes pas autoris\xE9 \xE0 supprimer l'entreprise "${company.nom || "inconnue"}".`;
      console.warn("\u26A0\uFE0F Utilisateur non autoris\xE9 \xE0 supprimer cette entreprise");
      return;
    }
    const companyName = company.nom || "inconnue";
    const confirmMessage = `\xCAtes-vous s\xFBr de vouloir supprimer l'entreprise "${companyName}" ?

Cette action est irr\xE9versible et supprimera \xE9galement :
- Tous les utilisateurs li\xE9s
- Toutes les formations
- Toutes les donn\xE9es associ\xE9es`;
    if (confirm(confirmMessage)) {
      this.performDelete(company, companyName);
    }
  }
  archiveCompany(company) {
    if (confirm("\xCAtes-vous s\xFBr de vouloir archiver cette entreprise ?")) {
      const updatedCompany = __spreadProps(__spreadValues({}, company), { statut: "inactive" });
      this.clientCompanyService.updateCompany(company.id, updatedCompany).subscribe({
        next: () => {
          console.log("Entreprise archiv\xE9e avec succ\xE8s");
          this.successMessage = "Entreprise archiv\xE9e avec succ\xE8s";
          this.refreshData();
          setTimeout(() => this.clearMessages(), 3e3);
        },
        error: (error) => {
          console.error("Erreur lors de l'archivage:", error);
          this.error = "Erreur lors de l'archivage de l'entreprise";
        }
      });
    }
  }
  // suspendCompany(company: any) {
  //   if (confirm('Êtes-vous sûr de vouloir suspendre cette entreprise ?')) {
  //     const updatedCompany = { ...company, statut: 'suspendue' };
  //     this.clientCompanyService.updateCompany(company.id, updatedCompany).subscribe({
  //       next: () => {
  //         console.log('Entreprise suspendue avec succès');
  //         this.successMessage = 'Entreprise suspendue avec succès';
  //         this.refreshData();
  //         setTimeout(() => this.clearMessages(), 3000);
  //       },
  //       error: (error: any) => {
  //         console.error('Erreur lors de la suspension:', error);
  //         this.error = 'Erreur lors de la suspension de l\'entreprise';
  //       }
  //     });
  //   }
  // }
  reactivateCompany(company) {
    const message = company.statut === "inactive" ? "r\xE9activer" : "r\xE9activer";
    if (confirm(`\xCAtes-vous s\xFBr de vouloir ${message} cette entreprise ?`)) {
      const updatedCompany = __spreadProps(__spreadValues({}, company), { statut: "active" });
      this.clientCompanyService.updateCompany(company.id, updatedCompany).subscribe({
        next: () => {
          console.log("Entreprise r\xE9activ\xE9e avec succ\xE8s");
          this.successMessage = "Entreprise r\xE9activ\xE9e avec succ\xE8s";
          this.refreshData();
          setTimeout(() => this.clearMessages(), 3e3);
        },
        error: (error) => {
          console.error("Erreur lors de la r\xE9activation:", error);
          this.error = "Erreur lors de la r\xE9activation de l'entreprise";
        }
      });
    }
  }
  // getStatusClass(statut: string): string {
  //   switch (statut) {
  //     case 'active':
  //       return 'badge bg-success';
  //     case 'inactive':
  //       return 'badge bg-secondary';
  //     case 'suspendue':
  //       return 'badge bg-warning';
  //     default:
  //       return 'badge bg-light';
  //   }
  // }
  // getStatusLabel(statut: string): string {
  //   switch (statut) {
  //     case 'active':
  //       return 'Active';
  //     case 'inactive':
  //       return 'Inactive';
  //     case 'suspendue':
  //       return 'Suspendue';
  //     default:
  //       return 'Inconnu';
  //   }
  // }
  performDelete(company, companyName) {
    this.loading = true;
    this.clearMessages();
    console.log("\u{1F5D1}\uFE0F Suppression de l'entreprise:", companyName);
    this.clientCompanyService.deleteCompany(company.id).subscribe({
      next: () => {
        console.log("\u2705 Entreprise supprim\xE9e avec succ\xE8s");
        this.successMessage = `L'entreprise "${companyName}" a \xE9t\xE9 supprim\xE9e avec succ\xE8s.`;
        this.refreshData();
      },
      error: (error) => {
        console.error("\u274C Erreur lors de la suppression:", error);
        this.error = "Erreur lors de la suppression de l'entreprise. V\xE9rifiez qu'elle ne contient pas de donn\xE9es li\xE9es.";
        this.loading = false;
      }
    });
  }
  hideDialog() {
    this.companyDialog = false;
    this.submitted = false;
    this.selectedCompany = null;
    this.clearMessages();
    console.log("\u274C Fermeture du modal");
  }
  onCompanySaved() {
    this.hideDialog();
    this.successMessage = this.isEditMode ? "Entreprise modifi\xE9e avec succ\xE8s." : "Entreprise cr\xE9\xE9e avec succ\xE8s.";
    this.refreshData();
  }
  clearMessages() {
    this.error = "";
    this.successMessage = "";
  }
  // === MÉTHODES UTILITAIRES D'AFFICHAGE ===
  getCountryFlag(countryCode) {
    if (!countryCode)
      return "\u{1F30D}";
    const country = this.paysList.find((p) => p.code === countryCode.toUpperCase());
    return country?.flag || "\u{1F30D}";
  }
  getCountryName(countryCode) {
    if (!countryCode)
      return "Non sp\xE9cifi\xE9";
    const country = this.paysList.find((p) => p.code === countryCode.toUpperCase());
    return country?.nom || countryCode;
  }
  getCompanyInitials(name) {
    if (!name)
      return "NC";
    return name.split(" ").map((word) => word.charAt(0)).join("").substring(0, 2).toUpperCase();
  }
  formatDate(date) {
    if (!date)
      return "Non sp\xE9cifi\xE9";
    try {
      return new Date(date).toLocaleDateString("fr-FR");
    } catch {
      return "Date invalide";
    }
  }
  getStatusClass(status) {
    const statusMap = {
      "active": "badge bg-success",
      "inactive": "badge bg-warning",
      "suspendue": "badge bg-danger"
    };
    return statusMap[status?.toLowerCase() || ""] || "badge bg-secondary";
  }
  getStatusLabel(status) {
    const statusMap = {
      "active": "Actif",
      "inactive": "Inactif",
      "suspendue": "Suspendue"
    };
    return statusMap[status?.toLowerCase() || ""] || "Non d\xE9fini";
  }
  getErrorMessage(error) {
    const errorMap = {
      403: "Vous n'avez pas les droits pour acc\xE9der aux entreprises.",
      401: "Session expir\xE9e. Veuillez vous reconnecter.",
      500: "Erreur serveur. Veuillez r\xE9essayer plus tard.",
      404: "Aucune entreprise trouv\xE9e."
    };
    if (error?.status && errorMap[error.status]) {
      return errorMap[error.status];
    }
    if (!navigator.onLine) {
      return "Pas de connexion internet.";
    }
    return "Erreur lors du chargement des donn\xE9es.";
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
  trackByCompanyId(index, company) {
    return company?.id || index;
  }
  // === GETTERS POUR LES STATISTIQUES ===
  get totalCompanies() {
    return this.actualData.length;
  }
  get activeCompanies() {
    return this.actualData.filter((c) => c.statut?.toLowerCase() === "active").length;
  }
  get inactiveCompanies() {
    return this.actualData.filter((c) => c.statut?.toLowerCase() === "inactive").length;
  }
  get hasData() {
    return this.actualData.length > 0;
  }
  get showEmptyState() {
    return !this.loading && !this.hasData && !this.error;
  }
  static \u0275fac = function CompanyManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyManagementComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(ClientCompanyService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyManagementComponent, selectors: [["app-companymanagement"]], decls: 29, vars: 18, consts: [[1, "page-content"], [1, "page-title", "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "fw-bold", "mb-1"], [1, "text-muted", "mb-0"], [1, "d-flex", "align-items-center", "gap-2"], ["class", "d-flex align-items-center gap-3 me-3", 4, "ngIf"], [1, "btn", "btn-outline-primary", 3, "click", "disabled"], [1, "isax", "isax-refresh"], [1, "ms-1"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "card", "mb-4"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "input-group"], [1, "input-group-text"], [1, "isax", "isax-search-normal-1"], ["type", "search", "placeholder", "Rechercher par nom, email, t\xE9l\xE9phone, secteur...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled"], [1, "col-md-6", "text-end"], ["class", "text-muted", 4, "ngIf"], ["class", "d-flex justify-content-center p-5", 4, "ngIf"], ["class", "card", 4, "ngIf"], [3, "onClose", "onSave", "visible", "isEditMode", "companyData"], [1, "d-flex", "align-items-center", "gap-3", "me-3"], [1, "text-center"], [1, "fw-bold", "text-primary"], [1, "text-muted"], [1, "fw-bold", "text-success"], ["class", "text-center", 4, "ngIf"], [1, "fw-bold", "text-warning"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "isax", "isax-tick-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "isax", "isax-warning-2", "me-2"], [1, "d-flex", "justify-content-center", "p-5"], ["role", "status", 1, "spinner-border", "text-primary", "mb-3"], [1, "visually-hidden"], [1, "card"], [1, "card-body", "text-center", "py-5"], [1, "mb-4"], [1, "isax", "isax-building", "display-1", "text-muted"], [1, "fw-bold", "mb-3"], [1, "text-muted", "mb-4"], [1, "card-header", "bg-white", "border-bottom"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "fw-bold"], [1, "badge", "bg-light", "text-dark"], ["class", "dropdown", 4, "ngIf"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-hover", "mb-0", 3, "matSortChange"], [1, "table-light"], ["mat-sort-header", "ninea"], ["mat-sort-header", "nom"], ["mat-sort-header", "client"], ["mat-sort-header", "email"], ["mat-sort-header", "telephone"], ["mat-sort-header", "secteur_activite"], ["mat-sort-header", "taille_effectif"], ["mat-sort-header", "pays"], ["mat-sort-header", "statut"], [1, "text-end"], ["class", "align-middle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "card-footer", "bg-white", "border-top"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-sm", "btn-outline-secondary", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], [1, "align-middle"], [1, "d-flex", "align-items-center"], [1, "badge", "bg-light", "text-dark", "font-monospace"], [1, "avatar", "avatar-md", "bg-primary", "text-white", "rounded", "me-3", "d-flex", "align-items-center", "justify-content-center"], [1, "fw-bold"], [1, "fw-semibold", "text-decoration-none", "text-dark", 3, "routerLink"], [1, "text-muted", "small"], [1, "fw-medium"], [1, "isax", "isax-sms", "text-muted", "me-2"], [1, "isax", "isax-call", "text-muted", "me-2"], [1, "isax", "isax-profile-2user", "text-muted", "me-2"], [1, "me-2"], ["role", "group", 1, "btn-group", "btn-group-sm"], ["title", "Modifier", 1, "btn", "btn-outline-primary", 3, "click", "disabled"], [1, "isax", "isax-edit"], ["title", "Voir d\xE9tails", 1, "btn", "btn-outline-info", 3, "routerLink"], [1, "isax", "isax-eye"], ["class", "btn btn-outline-warning", "title", "Archiver l'entreprise", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-success", "title", "R\xE9activer l'entreprise", 3, "click", 4, "ngIf"], ["title", "Archiver l'entreprise", 1, "btn", "btn-outline-warning", 3, "click"], [1, "isax", "isax-archive"], ["title", "R\xE9activer l'entreprise", 1, "btn", "btn-outline-success", 3, "click"], ["colspan", "10", 1, "text-center", "py-4"], [1, "isax", "isax-search-normal-1", "display-6", "mb-3", "d-block"], [1, "mb-0"]], template: function CompanyManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h4", 2);
      \u0275\u0275text(4, "Gestion des Entreprises");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275template(8, CompanyManagementComponent_div_8_Template, 12, 3, "div", 5);
      \u0275\u0275elementStart(9, "button", 6);
      \u0275\u0275listener("click", function CompanyManagementComponent_Template_button_click_9_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275elementStart(11, "span", 8);
      \u0275\u0275text(12, "Actualiser");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(13, CompanyManagementComponent_div_13_Template, 4, 1, "div", 9)(14, CompanyManagementComponent_div_14_Template, 4, 1, "div", 10);
      \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "span", 16);
      \u0275\u0275element(21, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function CompanyManagementComponent_Template_input_ngModelChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CompanyManagementComponent_Template_input_ngModelChange_22_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 19);
      \u0275\u0275template(24, CompanyManagementComponent_small_24_Template, 2, 2, "small", 20);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(25, CompanyManagementComponent_div_25_Template, 7, 0, "div", 21)(26, CompanyManagementComponent_div_26_Template, 8, 1, "div", 22)(27, CompanyManagementComponent_div_27_Template, 38, 5, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "app-company-add", 23);
      \u0275\u0275listener("onClose", function CompanyManagementComponent_Template_app_company_add_onClose_28_listener() {
        return ctx.hideDialog();
      })("onSave", function CompanyManagementComponent_Template_app_company_add_onSave_28_listener() {
        return ctx.onCompanySaved();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" G\xE9rez les entreprises ", (ctx.currentUser == null ? null : ctx.currentUser.role_id) === 5 || (ctx.currentUser == null ? null : ctx.currentUser.role_id) === 14 ? "de votre groupe" : (ctx.currentUser == null ? null : ctx.currentUser.role_id) === 1 ? "de la plateforme" : "assign\xE9es", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.hasData);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275classProp("fa-spin", ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(17, _c0))("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.searchDataValue && ctx.hasData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEmptyState);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasData && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.companyDialog)("isEditMode", ctx.isEditMode)("companyData", ctx.selectedCompany);
    }
  }, dependencies: [RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, CommonModule, NgForOf, NgIf, MatSortModule, MatSort, MatSortHeader, CustomPaginationComponent, CompanyAddComponent, TitleCasePipe], styles: ['\n\n.page-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.page-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #0f172a;\n}\n.page-title[_ngcontent-%COMP%]   p.text-muted[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.page-title[_ngcontent-%COMP%]   .fw-bold.text-primary[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #069b8f !important;\n}\n.page-title[_ngcontent-%COMP%]   .fw-bold.text-success[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.page-title[_ngcontent-%COMP%]   .fw-bold.text-warning[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.page-title[_ngcontent-%COMP%]   small.text-muted[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #069b8f !important;\n  border-color: #069b8f !important;\n  font-size: 0.85rem;\n  border-radius: 8px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(4.4795031056, 115.7204968944, 106.7614906832) !important;\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #069b8f !important;\n  border-color: #069b8f !important;\n  font-size: 0.85rem;\n  border-radius: 8px;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgba(6, 155, 143, 0.07) !important;\n}\n.alert[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  font-size: 0.875rem;\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.alert.alert-success[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  filter: none;\n  opacity: 0.5;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: #fff1f0;\n  color: #c0392b;\n  border: 1px solid #f5c6c3;\n}\n.alert.alert-danger[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  filter: none;\n  opacity: 0.5;\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0 !important;\n  border-radius: 14px !important;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07) !important;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: #fff !important;\n  padding: 14px 20px;\n  border-bottom: 1px solid #f1f5f9 !important;\n  border-radius: 14px 14px 0 0 !important;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #0f172a;\n}\n.card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  background: #fff !important;\n  padding: 10px 20px;\n  border-top: 1px solid #f1f5f9 !important;\n  border-radius: 0 0 14px 14px !important;\n}\n.input-group-text[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  color: #94a3b8;\n  border-right: none;\n}\n.form-control[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 0 8px 8px 0 !important;\n  font-size: 0.85rem;\n  background: #f8fafc;\n  color: #0f172a;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.12);\n  background: #fff;\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.display-1[_ngcontent-%COMP%] {\n  font-size: 3rem !important;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n.table[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #0f172a;\n  margin-bottom: 0;\n}\n.table.table-hover[_ngcontent-%COMP%]   thead.table-light[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc !important;\n  color: #64748b;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 12px 14px;\n  border-bottom: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n  transition: background 0.12s;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc !important;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  vertical-align: middle;\n  color: #0f172a;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n.avatar.bg-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      rgb(3.7192546584, 96.0807453416, 88.6422360248)) !important;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 999px;\n}\n.badge.bg-light[_ngcontent-%COMP%] {\n  background: #f1f5f9 !important;\n  color: #475569 !important;\n}\n.badge.bg-dark[_ngcontent-%COMP%] {\n  color: #0f172a !important;\n}\n.badge.bg-success[_ngcontent-%COMP%] {\n  background: #dcfce7 !important;\n  color: #166534 !important;\n}\n.badge.bg-warning[_ngcontent-%COMP%] {\n  background: #fff3cd !important;\n  color: #92400e !important;\n}\n.badge.bg-danger[_ngcontent-%COMP%] {\n  background: #fff1f0 !important;\n  color: #991b1b !important;\n}\n.badge.bg-secondary[_ngcontent-%COMP%] {\n  background: #e2e8f0 !important;\n  color: #475569 !important;\n}\n.badge.font-monospace[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 0.78rem;\n}\n.btn-group-sm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 4px 9px;\n  font-size: 0.78rem;\n  border-radius: 7px !important;\n  line-height: 1.4;\n}\n.btn-group-sm[_ngcontent-%COMP%]   .btn.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #069b8f;\n  border-color: #069b8f;\n}\n.btn-group-sm[_ngcontent-%COMP%]   .btn.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background: rgba(6, 155, 143, 0.08);\n}\n.btn-group-sm[_ngcontent-%COMP%]   .btn.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 53, 69, 0.07);\n}\n.btn-group-sm[_ngcontent-%COMP%]   .btn.btn-outline-info[_ngcontent-%COMP%]:hover {\n  background: rgba(14, 165, 233, 0.07);\n}\n.btn-group-sm[_ngcontent-%COMP%]   .btn.btn-outline-warning[_ngcontent-%COMP%]:hover {\n  background: rgba(245, 158, 11, 0.07);\n}\n.btn-group-sm[_ngcontent-%COMP%]   .btn.btn-outline-success[_ngcontent-%COMP%]:hover {\n  background: rgba(34, 197, 94, 0.07);\n}\n.btn-group-sm[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.09);\n  font-size: 0.83rem;\n  padding: 4px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  padding: 6px 12px;\n  color: #0f172a;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:active {\n  background: rgba(6, 155, 143, 0.1);\n  color: #069b8f;\n}\n.spinner-border.text-primary[_ngcontent-%COMP%] {\n  color: #069b8f !important;\n}\na.text-dark[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #0f172a !important;\n  font-weight: 600;\n}\na.text-dark[_ngcontent-%COMP%]:hover {\n  color: #069b8f !important;\n}\na.fw-semibold[_ngcontent-%COMP%]:hover {\n  color: #069b8f !important;\n}\n.display-6[_ngcontent-%COMP%] {\n  font-size: 1.6rem !important;\n  color: #cbd5e1;\n}\n/*# sourceMappingURL=companymanagement.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyManagementComponent, [{
    type: Component,
    args: [{ selector: "app-companymanagement", standalone: true, imports: [RouterLink, FormsModule, CommonModule, MatSortModule, CustomPaginationComponent, CompanyAddComponent], template: `<div class="page-content">\r
  <!-- En-t\xEAte de la page -->\r
  <div class="page-title d-flex align-items-center justify-content-between mb-4">\r
    <div>\r
      <h4 class="fw-bold mb-1">Gestion des Entreprises</h4>\r
      <p class="text-muted mb-0">\r
        G\xE9rez les entreprises {{ currentUser?.role_id === 5 || currentUser?.role_id === 14 ? 'de votre groupe' : currentUser?.role_id === 1 ? 'de la plateforme' : 'assign\xE9es' }}\r
      </p>\r
    </div>\r
    <div class="d-flex align-items-center gap-2">\r
      <!-- Statistiques rapides -->\r
      <div class="d-flex align-items-center gap-3 me-3" *ngIf="hasData">\r
        <div class="text-center">\r
          <div class="fw-bold text-primary">{{ totalCompanies }}</div>\r
          <small class="text-muted">Total</small>\r
        </div>\r
        <div class="text-center">\r
          <div class="fw-bold text-success">{{ activeCompanies }}</div>\r
          <small class="text-muted">Actives</small>\r
        </div>\r
        <div class="text-center" *ngIf="inactiveCompanies > 0">\r
          <div class="fw-bold text-warning">{{ inactiveCompanies }}</div>\r
          <small class="text-muted">Inactives</small>\r
        </div>\r
      </div>\r
\r
      <!-- Actions -->\r
      <button class="btn btn-outline-primary" (click)="refreshData()" [disabled]="loading">\r
        <i class="isax isax-refresh" [class.fa-spin]="loading"></i>\r
        <span class="ms-1">Actualiser</span>\r
      </button>\r
      <!-- <button class="btn btn-primary"\r
              (click)="openNew()"\r
              [disabled]="loading"\r
              *ngIf="canAddCompany()">\r
        <i class="isax isax-add"></i>\r
        <span class="ms-1">Ajouter</span>\r
      </button> -->\r
    </div>\r
  </div>\r
\r
  <!-- Messages de notification -->\r
  <div class="alert alert-success alert-dismissible fade show"\r
       *ngIf="successMessage"\r
       role="alert">\r
    <i class="isax isax-tick-circle me-2"></i>\r
    {{ successMessage }}\r
    <button type="button" class="btn-close" (click)="clearMessages()"></button>\r
  </div>\r
\r
  <div class="alert alert-danger alert-dismissible fade show"\r
       *ngIf="error"\r
       role="alert">\r
    <i class="isax isax-warning-2 me-2"></i>\r
    {{ error }}\r
    <button type="button" class="btn-close" (click)="clearMessages()"></button>\r
  </div>\r
\r
  <!-- Barre de recherche -->\r
  <div class="card mb-4">\r
    <div class="card-body">\r
      <div class="row align-items-center">\r
        <div class="col-md-6">\r
          <div class="input-group">\r
            <span class="input-group-text">\r
              <i class="isax isax-search-normal-1"></i>\r
            </span>\r
            <input\r
              [(ngModel)]="searchDataValue"\r
              [ngModelOptions]="{ standalone: true }"\r
              type="search"\r
              (ngModelChange)="searchData(searchDataValue)"\r
              class="form-control"\r
              placeholder="Rechercher par nom, email, t\xE9l\xE9phone, secteur..."\r
              [disabled]="loading">\r
          </div>\r
        </div>\r
        <div class="col-md-6 text-end">\r
          <small class="text-muted" *ngIf="searchDataValue && hasData">\r
            {{ tableData.length }} r\xE9sultat(s) trouv\xE9(s) sur {{ totalCompanies }}\r
          </small>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \xC9tat de chargement -->\r
  <div class="d-flex justify-content-center p-5" *ngIf="loading">\r
    <div class="text-center">\r
      <div class="spinner-border text-primary mb-3" role="status">\r
        <span class="visually-hidden">Chargement...</span>\r
      </div>\r
      <p class="text-muted">Chargement des entreprises...</p>\r
    </div>\r
  </div>\r
\r
  <!-- \xC9tat vide -->\r
  <div class="card" *ngIf="showEmptyState">\r
    <div class="card-body text-center py-5">\r
      <div class="mb-4">\r
        <i class="isax isax-building display-1 text-muted"></i>\r
      </div>\r
      <h5 class="fw-bold mb-3">Aucune entreprise trouv\xE9e</h5>\r
      <p class="text-muted mb-4">\r
        {{ canAddCompany() ? 'Commencez par ajouter votre premi\xE8re entreprise.' : 'Aucune entreprise n\\'est associ\xE9e \xE0 votre profil.' }}\r
      </p>\r
      <!-- <button class="btn btn-primary"\r
              (click)="openNew()"\r
              *ngIf="canAddCompany()">\r
        <i class="isax isax-add me-2"></i>\r
        Ajouter une entreprise\r
      </button> -->\r
    </div>\r
  </div>\r
\r
  <!-- Tableau des entreprises -->\r
  <div class="card" *ngIf="hasData && !loading">\r
    <div class="card-header bg-white border-bottom">\r
      <div class="d-flex align-items-center justify-content-between">\r
        <h6 class="mb-0 fw-bold">Liste des Entreprises</h6>\r
        <div class="d-flex align-items-center gap-2">\r
          <span class="badge bg-light text-dark">{{ tableData.length }} affich\xE9e(s)</span>\r
          <div class="dropdown" *ngIf="hasData">\r
            <button class="btn btn-sm btn-outline-secondary dropdown-toggle"\r
                    type="button"\r
                    data-bs-toggle="dropdown">\r
              {{ pageSize }} par page\r
            </button>\r
            <ul class="dropdown-menu">\r
              <li><a class="dropdown-item" href="javascript:void(0)" (click)="changePageSize(5)">5 par page</a></li>\r
              <li><a class="dropdown-item" href="javascript:void(0)" (click)="changePageSize(10)">10 par page</a></li>\r
              <li><a class="dropdown-item" href="javascript:void(0)" (click)="changePageSize(25)">25 par page</a></li>\r
              <li><a class="dropdown-item" href="javascript:void(0)" (click)="changePageSize(50)">50 par page</a></li>\r
            </ul>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="table-responsive">\r
      <table matSort (matSortChange)="sortData($event)" class="table table-hover mb-0">\r
        <thead class="table-light">\r
          <tr>\r
            <th mat-sort-header="ninea">NINEA</th>\r
            <th mat-sort-header="nom">Entreprise</th>\r
            <th mat-sort-header="client">Client/Groupe</th>\r
            <th mat-sort-header="email">Email</th>\r
            <th mat-sort-header="telephone">T\xE9l\xE9phone</th>\r
            <th mat-sort-header="secteur_activite">Secteur</th>\r
            <th mat-sort-header="taille_effectif">Effectif</th>\r
            <th mat-sort-header="pays">Pays</th>\r
            <th mat-sort-header="statut">Statut</th>\r
            <th class="text-end">Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let company of tableData; trackBy: trackByCompanyId" class="align-middle">\r
            <!-- NINEA -->\r
            <td>\r
              <div class="d-flex align-items-center">\r
                <span class="badge bg-light text-dark font-monospace">\r
                  {{ getCompanyField(company, 'ninea') }}\r
                </span>\r
              </div>\r
            </td>\r
\r
            <!-- Nom de l'entreprise -->\r
            <td>\r
              <div class="d-flex align-items-center">\r
                <div class="avatar avatar-md bg-primary text-white rounded me-3 d-flex align-items-center justify-content-center">\r
                  <span class="fw-bold">{{ getCompanyInitials(company.nom || '') }}</span>\r
                </div>\r
                <div>\r
                  <a [routerLink]="['/adminrh/adminrh-company-details', company.id]"\r
                     class="fw-semibold text-decoration-none text-dark">\r
                    {{ company.nom || 'Nom non renseign\xE9' }}\r
                  </a>\r
                  <div class="text-muted small">\r
                    ID: {{ company.id }}\r
                  </div>\r
                </div>\r
              </div>\r
            </td>\r
\r
            <!-- Client/Groupe - \u2705 CORRECTION ICI -->\r
            <td>\r
              <div>\r
                <div class="fw-medium">{{ getClientName(company.client) }}</div>\r
                <small class="text-muted" *ngIf="getClientType(company.client)">\r
                  {{ getClientType(company.client) | titlecase }}\r
                </small>\r
              </div>\r
            </td>\r
\r
            <!-- Email -->\r
            <td>\r
              <div class="d-flex align-items-center">\r
                <i class="isax isax-sms text-muted me-2"></i>\r
                <span>{{ getCompanyField(company, 'email') }}</span>\r
              </div>\r
            </td>\r
\r
            <!-- T\xE9l\xE9phone -->\r
            <td>\r
              <div class="d-flex align-items-center">\r
                <i class="isax isax-call text-muted me-2"></i>\r
                <span>{{ getCompanyField(company, 'telephone') }}</span>\r
              </div>\r
            </td>\r
\r
            <!-- Secteur -->\r
            <td>\r
              <span class="badge bg-light text-dark">\r
                {{ getCompanyField(company, 'secteur_activite') }}\r
              </span>\r
            </td>\r
\r
            <!-- Effectif -->\r
            <td>\r
              <div class="d-flex align-items-center">\r
                <i class="isax isax-profile-2user text-muted me-2"></i>\r
                <span class="fw-medium">{{ getCompanyField(company, 'taille_effectif') }}</span>\r
              </div>\r
            </td>\r
\r
            <!-- Pays -->\r
            <td>\r
              <div class="d-flex align-items-center">\r
                <span class="me-2">{{ getCountryFlag(company.pays || '') }}</span>\r
                <span>{{ getCountryName(company.pays || '') }}</span>\r
              </div>\r
            </td>\r
\r
            <!-- Statut -->\r
            <td>\r
              <span [class]="getStatusClass(company.statut)">\r
                {{ getStatusLabel(company.statut) }}\r
              </span>\r
            </td>\r
\r
            <!-- Actions -->\r
            <td class="text-end">\r
              <div class="btn-group btn-group-sm" role="group">\r
                <button class="btn btn-outline-primary"\r
                        (click)="editCompany(company)"\r
                        [disabled]="!canEditCompany(company)"\r
                        title="Modifier">\r
                  <i class="isax isax-edit"></i>\r
                </button>\r
                <!-- <button class="btn btn-outline-danger"\r
                        (click)="deleteCompany(company)"\r
                        [disabled]="!canDeleteCompany(company)"\r
                        title="Supprimer">\r
                  <i class="isax isax-trash"></i>\r
                </button> -->\r
                <a [routerLink]="['/adminrh/adminrh-company-details', company.id]"\r
                   class="btn btn-outline-info"\r
                   title="Voir d\xE9tails">\r
                  <i class="isax isax-eye"></i>\r
                </a>\r
                 <!-- Bouton Archiver pour les entreprises actives -->\r
                <button\r
                    *ngIf="company.statut === 'active'"\r
                    class="btn btn-outline-warning"\r
                    (click)="archiveCompany(company)"\r
                    title="Archiver l'entreprise">\r
                  <i class="isax isax-archive"></i>\r
                </button>\r
\r
                <!-- Bouton R\xE9activer pour les entreprises inactives -->\r
                <button\r
                    *ngIf="company.statut === 'inactive'"\r
                    class="btn btn-outline-success"\r
                    (click)="reactivateCompany(company)"\r
                    title="R\xE9activer l'entreprise">\r
                  <i class="isax isax-refresh"></i>\r
                </button>\r
\r
                <!-- Bouton Suspendre pour les entreprises actives -->\r
                <!-- <button\r
                    *ngIf="company.statut === 'active'"\r
                    class="btn btn-outline-danger"\r
                    (click)="suspendCompany(company)"\r
                    title="Suspendre l'entreprise">\r
                  <i class="isax isax-pause"></i>\r
                </button> -->\r
\r
                <!-- Bouton R\xE9activer pour les entreprises suspendues -->\r
                <!-- <button\r
                    *ngIf="company.statut === 'suspendue'"\r
                    class="btn btn-outline-success"\r
                    (click)="reactivateCompany(company)"\r
                    title="R\xE9activer l'entreprise">\r
                  <i class="isax isax-refresh"></i>\r
                </button> -->\r
              </div>\r
            </td>\r
          </tr>\r
\r
          <!-- Message si recherche vide -->\r
          <tr *ngIf="tableData.length === 0 && searchDataValue && !loading">\r
            <td colspan="10" class="text-center py-4">\r
              <div class="text-muted">\r
                <i class="isax isax-search-normal-1 display-6 mb-3 d-block"></i>\r
                <h6>Aucun r\xE9sultat pour "{{ searchDataValue }}"</h6>\r
                <p class="mb-0">Essayez avec d'autres termes de recherche.</p>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div class="card-footer bg-white border-top">\r
      <app-custom-pagination></app-custom-pagination>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal d'ajout/modification -->\r
<app-company-add\r
  [visible]="companyDialog"\r
  [isEditMode]="isEditMode"\r
  [companyData]="selectedCompany"\r
  (onClose)="hideDialog()"\r
  (onSave)="onCompanySaved()">\r
</app-company-add>\r
`, styles: ['/* src/app/features/adminrh/companymanagement/companymanagement.component.scss */\n.page-content {\n  padding: 0;\n}\n.page-title h4 {\n  font-size: 1.25rem;\n  color: #0f172a;\n}\n.page-title p.text-muted {\n  font-size: 0.85rem;\n}\n.page-title .fw-bold.text-primary {\n  font-size: 1.1rem;\n  color: #069b8f !important;\n}\n.page-title .fw-bold.text-success {\n  font-size: 1.1rem;\n}\n.page-title .fw-bold.text-warning {\n  font-size: 1.1rem;\n}\n.page-title small.text-muted {\n  font-size: 0.72rem;\n}\n.btn-primary {\n  background-color: #069b8f !important;\n  border-color: #069b8f !important;\n  font-size: 0.85rem;\n  border-radius: 8px;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: rgb(4.4795031056, 115.7204968944, 106.7614906832) !important;\n}\n.btn-outline-primary {\n  color: #069b8f !important;\n  border-color: #069b8f !important;\n  font-size: 0.85rem;\n  border-radius: 8px;\n}\n.btn-outline-primary:hover:not(:disabled) {\n  background-color: rgba(6, 155, 143, 0.07) !important;\n}\n.alert {\n  border-radius: 10px;\n  font-size: 0.875rem;\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.alert.alert-success {\n  background: #f0fdf4;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.alert.alert-success .btn-close {\n  filter: none;\n  opacity: 0.5;\n}\n.alert.alert-danger {\n  background: #fff1f0;\n  color: #c0392b;\n  border: 1px solid #f5c6c3;\n}\n.alert.alert-danger .btn-close {\n  filter: none;\n  opacity: 0.5;\n}\n.card {\n  border: 1px solid #e2e8f0 !important;\n  border-radius: 14px !important;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07) !important;\n}\n.card .card-body {\n  padding: 16px 20px;\n}\n.card .card-header {\n  background: #fff !important;\n  padding: 14px 20px;\n  border-bottom: 1px solid #f1f5f9 !important;\n  border-radius: 14px 14px 0 0 !important;\n}\n.card .card-header h6 {\n  font-size: 0.9rem;\n  color: #0f172a;\n}\n.card .card-footer {\n  background: #fff !important;\n  padding: 10px 20px;\n  border-top: 1px solid #f1f5f9 !important;\n  border-radius: 0 0 14px 14px !important;\n}\n.input-group-text {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  color: #94a3b8;\n  border-right: none;\n}\n.form-control {\n  border: 1px solid #e2e8f0;\n  border-radius: 0 8px 8px 0 !important;\n  font-size: 0.85rem;\n  background: #f8fafc;\n  color: #0f172a;\n}\n.form-control:focus {\n  border-color: #069b8f;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.12);\n  background: #fff;\n}\n.form-control::placeholder {\n  color: #94a3b8;\n}\n.display-1 {\n  font-size: 3rem !important;\n}\n.table-responsive {\n  border-radius: 0;\n}\n.table {\n  font-size: 0.85rem;\n  color: #0f172a;\n  margin-bottom: 0;\n}\n.table.table-hover thead.table-light tr th {\n  background: #f8fafc !important;\n  color: #64748b;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 12px 14px;\n  border-bottom: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n.table tbody tr {\n  border-bottom: 1px solid #f1f5f9;\n  transition: background 0.12s;\n}\n.table tbody tr:last-child {\n  border-bottom: none;\n}\n.table tbody tr:hover {\n  background: #f8fafc !important;\n}\n.table tbody tr td {\n  padding: 12px 14px;\n  vertical-align: middle;\n  color: #0f172a;\n}\n.avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n.avatar.bg-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      rgb(3.7192546584, 96.0807453416, 88.6422360248)) !important;\n}\n.badge {\n  font-size: 0.73rem;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 999px;\n}\n.badge.bg-light {\n  background: #f1f5f9 !important;\n  color: #475569 !important;\n}\n.badge.bg-dark {\n  color: #0f172a !important;\n}\n.badge.bg-success {\n  background: #dcfce7 !important;\n  color: #166534 !important;\n}\n.badge.bg-warning {\n  background: #fff3cd !important;\n  color: #92400e !important;\n}\n.badge.bg-danger {\n  background: #fff1f0 !important;\n  color: #991b1b !important;\n}\n.badge.bg-secondary {\n  background: #e2e8f0 !important;\n  color: #475569 !important;\n}\n.badge.font-monospace {\n  font-family: "Courier New", monospace;\n  font-size: 0.78rem;\n}\n.btn-group-sm .btn {\n  padding: 4px 9px;\n  font-size: 0.78rem;\n  border-radius: 7px !important;\n  line-height: 1.4;\n}\n.btn-group-sm .btn.btn-outline-primary {\n  color: #069b8f;\n  border-color: #069b8f;\n}\n.btn-group-sm .btn.btn-outline-primary:hover {\n  background: rgba(6, 155, 143, 0.08);\n}\n.btn-group-sm .btn.btn-outline-danger:hover {\n  background: rgba(220, 53, 69, 0.07);\n}\n.btn-group-sm .btn.btn-outline-info:hover {\n  background: rgba(14, 165, 233, 0.07);\n}\n.btn-group-sm .btn.btn-outline-warning:hover {\n  background: rgba(245, 158, 11, 0.07);\n}\n.btn-group-sm .btn.btn-outline-success:hover {\n  background: rgba(34, 197, 94, 0.07);\n}\n.btn-group-sm .btn.btn-outline-secondary:hover {\n  background: #f1f5f9;\n}\n.dropdown-menu {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.09);\n  font-size: 0.83rem;\n  padding: 4px;\n}\n.dropdown-menu .dropdown-item {\n  border-radius: 6px;\n  padding: 6px 12px;\n  color: #0f172a;\n}\n.dropdown-menu .dropdown-item:hover {\n  background: #f1f5f9;\n}\n.dropdown-menu .dropdown-item:active {\n  background: rgba(6, 155, 143, 0.1);\n  color: #069b8f;\n}\n.spinner-border.text-primary {\n  color: #069b8f !important;\n}\na.text-dark {\n  text-decoration: none;\n  color: #0f172a !important;\n  font-weight: 600;\n}\na.text-dark:hover {\n  color: #069b8f !important;\n}\na.fw-semibold:hover {\n  color: #069b8f !important;\n}\n.display-6 {\n  font-size: 1.6rem !important;\n  color: #cbd5e1;\n}\n/*# sourceMappingURL=companymanagement.component.css.map */\n'] }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }, { type: ClientCompanyService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyManagementComponent, { className: "CompanyManagementComponent", filePath: "app/features/adminrh/companymanagement/companymanagement.component.ts", lineNumber: 30 });
})();
export {
  CompanyManagementComponent
};
//# sourceMappingURL=chunk-WRZC6T42.js.map
