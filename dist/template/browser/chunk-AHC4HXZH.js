import {
  CompanyAddComponent
} from "./chunk-3FYOGEZY.js";
import {
  ClientCompanyService
} from "./chunk-S72XEEG7.js";
import {
  CustomPaginationComponent
} from "./chunk-Z2HA3X3F.js";
import {
  MatSortModule
} from "./chunk-62IXQG2C.js";
import {
  PaginationService
} from "./chunk-YIMRJUCQ.js";
import {
  MatTableDataSource
} from "./chunk-IBHFC2JC.js";
import {
  FormationService
} from "./chunk-SRQJ2PQ4.js";
import "./chunk-G5NIWSXA.js";
import "./chunk-WYKMS2OJ.js";
import "./chunk-5FDCLFRJ.js";
import "./chunk-D4V2IZRR.js";
import "./chunk-AHGPUK2P.js";
import "./chunk-FKX6UC3I.js";
import {
  DataService
} from "./chunk-WWUAO4BD.js";
import {
  routes
} from "./chunk-W6FAPSPW.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-AK2M3J6O.js";
import {
  Router,
  RouterLink
} from "./chunk-AJNKO2CX.js";
import "./chunk-FZP3BRBS.js";
import "./chunk-GSAJL664.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  TitleCasePipe
} from "./chunk-3IMMP55I.js";
import {
  Component,
  firstValueFrom,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UPBSS6WA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/superadmin/companymanagement/companymanagement.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => [1, 2, 3, 4, 5];
var _c2 = (a0) => ["/superadmin/superadmin-company-details", a0];
var _c3 = (a0) => [a0];
var _c4 = (a0) => ({ entreprise_id: a0 });
var _c5 = (a0) => ["/superadmin/superadmin-client-details", a0];
function CompanyManagementComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 27);
    \u0275\u0275listener("click", function CompanyManagementComponent_div_14_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error = "");
    });
    \u0275\u0275element(4, "i", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.error, " ");
  }
}
function CompanyManagementComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 27);
    \u0275\u0275listener("click", function CompanyManagementComponent_div_15_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.successMessage = "");
    });
    \u0275\u0275element(4, "i", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.successMessage, " ");
  }
}
function CompanyManagementComponent_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 33);
  }
}
function CompanyManagementComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, CompanyManagementComponent_div_21_div_1_Template, 1, 0, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function CompanyManagementComponent_ul_22_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 37);
    \u0275\u0275listener("click", function CompanyManagementComponent_ul_22_li_1_Template_li_click_0_listener() {
      const company_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectCompany(company_r5));
    });
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39)(4, "span", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "span", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const company_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("cm-list__item--active", (ctx_r1.selectedCompany == null ? null : ctx_r1.selectedCompany.id) === company_r5.id);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-status", company_r5.statut);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCompanyInitials(company_r5.nom), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(company_r5.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(company_r5.secteur_activite);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-status", company_r5.statut);
  }
}
function CompanyManagementComponent_ul_22_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 43);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275elementStart(2, "small");
    \u0275\u0275text(3, "Aucune entreprise trouv\xE9e");
    \u0275\u0275elementEnd()();
  }
}
function CompanyManagementComponent_ul_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 34);
    \u0275\u0275template(1, CompanyManagementComponent_ul_22_li_1_Template, 9, 7, "li", 35)(2, CompanyManagementComponent_ul_22_li_2_Template, 4, 0, "li", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.tableData)("ngForTrackBy", ctx_r1.trackByCompanyId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.tableData.length);
  }
}
function CompanyManagementComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275element(2, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "S\xE9lectionnez une entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Choisissez une entreprise dans la liste pour voir ses d\xE9tails.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 48);
    \u0275\u0275listener("click", function CompanyManagementComponent_div_26_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNew());
    });
    \u0275\u0275element(8, "i", 49);
    \u0275\u0275text(9, "Cr\xE9er une entreprise ");
    \u0275\u0275elementEnd()();
  }
}
function CompanyManagementComponent_ng_container_27_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275element(1, "i", 103);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedCompany.secteur_activite, " ");
  }
}
function CompanyManagementComponent_ng_container_27_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275element(1, "i", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getCountryFlag(ctx_r1.selectedCompany.pays), " ", ctx_r1.getCountryName(ctx_r1.selectedCompany.pays), " ");
  }
}
function CompanyManagementComponent_ng_container_27_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 105);
    \u0275\u0275listener("click", function CompanyManagementComponent_ng_container_27_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.archiveCompany(ctx_r1.selectedCompany));
    });
    \u0275\u0275element(1, "i", 106);
    \u0275\u0275text(2, "Archiver ");
    \u0275\u0275elementEnd();
  }
}
function CompanyManagementComponent_ng_container_27_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function CompanyManagementComponent_ng_container_27_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.suspendCompany(ctx_r1.selectedCompany));
    });
    \u0275\u0275element(1, "i", 107);
    \u0275\u0275text(2, "Suspendre ");
    \u0275\u0275elementEnd();
  }
}
function CompanyManagementComponent_ng_container_27_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 108);
    \u0275\u0275listener("click", function CompanyManagementComponent_ng_container_27_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reactivateCompany(ctx_r1.selectedCompany));
    });
    \u0275\u0275element(1, "i", 109);
    \u0275\u0275text(2, "R\xE9activer ");
    \u0275\u0275elementEnd();
  }
}
function CompanyManagementComponent_ng_container_27_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedCompany.employes_count ?? ctx_r1.selectedCompany.taille_effectif ?? "\u2014");
  }
}
function CompanyManagementComponent_ng_container_27_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 110);
  }
}
function CompanyManagementComponent_ng_container_27_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedCompany.formations_actives_count ?? ctx_r1.selectedCompany.formations_count ?? "\u2014");
  }
}
function CompanyManagementComponent_ng_container_27_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 110);
  }
}
function CompanyManagementComponent_ng_container_27_span_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedCompany.taux_completion != null ? ctx_r1.selectedCompany.taux_completion + "%" : "\u2014", " ");
  }
}
function CompanyManagementComponent_ng_container_27_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 110);
  }
}
function CompanyManagementComponent_ng_container_27_span_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedCompany.certificats_count ?? "\u2014");
  }
}
function CompanyManagementComponent_ng_container_27_span_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 110);
  }
}
function CompanyManagementComponent_ng_container_27_ng_container_129_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 119);
    \u0275\u0275element(1, "i", 120);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedCompany.client.email, " ");
  }
}
function CompanyManagementComponent_ng_container_27_ng_container_129_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 119);
    \u0275\u0275element(1, "i", 121);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedCompany.client.telephone, " ");
  }
}
function CompanyManagementComponent_ng_container_27_ng_container_129_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 119);
    \u0275\u0275element(1, "i", 122);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedCompany.client.contact_principal, " ");
  }
}
function CompanyManagementComponent_ng_container_27_ng_container_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 111)(2, "div", 112);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 113)(5, "p", 114);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 115);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, CompanyManagementComponent_ng_container_27_ng_container_129_p_10_Template, 3, 1, "p", 116)(11, CompanyManagementComponent_ng_container_27_ng_container_129_p_11_Template, 3, 1, "p", 116)(12, CompanyManagementComponent_ng_container_27_ng_container_129_p_12_Template, 3, 1, "p", 116);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 117)(14, "a", 118);
    \u0275\u0275element(15, "i", 61);
    \u0275\u0275text(16, "Voir le client ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCompanyInitials(ctx_r1.selectedCompany.client.nom), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedCompany.client.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, ctx_r1.selectedCompany.client.type));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedCompany.client.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCompany.client.telephone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCompany.client.contact_principal);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c5, ctx_r1.selectedCompany.client_id));
  }
}
function CompanyManagementComponent_ng_container_27_ng_template_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275element(1, "i", 124);
    \u0275\u0275elementStart(2, "small");
    \u0275\u0275text(3, "Aucun client associ\xE9");
    \u0275\u0275elementEnd()();
  }
}
function CompanyManagementComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 50)(2, "div", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 52)(5, "h2", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 54)(8, "span", 55);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, CompanyManagementComponent_ng_container_27_span_10_Template, 3, 1, "span", 56)(11, CompanyManagementComponent_ng_container_27_span_11_Template, 3, 2, "span", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 57)(13, "button", 58);
    \u0275\u0275listener("click", function CompanyManagementComponent_ng_container_27_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editCompany(ctx_r1.selectedCompany));
    });
    \u0275\u0275element(14, "i", 59);
    \u0275\u0275text(15, "Modifier ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 60);
    \u0275\u0275element(17, "i", 61);
    \u0275\u0275text(18, "D\xE9tails ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, CompanyManagementComponent_ng_container_27_button_19_Template, 3, 0, "button", 62)(20, CompanyManagementComponent_ng_container_27_button_20_Template, 3, 0, "button", 63)(21, CompanyManagementComponent_ng_container_27_button_21_Template, 3, 0, "button", 64);
    \u0275\u0275elementStart(22, "button", 65);
    \u0275\u0275listener("click", function CompanyManagementComponent_ng_container_27_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteCompany(ctx_r1.selectedCompany));
    });
    \u0275\u0275element(23, "i", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 67)(25, "a", 68)(26, "div", 69);
    \u0275\u0275element(27, "i", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 71)(29, "span", 72);
    \u0275\u0275template(30, CompanyManagementComponent_ng_container_27_span_30_Template, 2, 1, "span", 23)(31, CompanyManagementComponent_ng_container_27_span_31_Template, 1, 0, "span", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 74);
    \u0275\u0275text(33, "Employ\xE9s ");
    \u0275\u0275element(34, "i", 75);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "a", 68)(36, "div", 76);
    \u0275\u0275element(37, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 71)(39, "span", 72);
    \u0275\u0275template(40, CompanyManagementComponent_ng_container_27_span_40_Template, 2, 1, "span", 23)(41, CompanyManagementComponent_ng_container_27_span_41_Template, 1, 0, "span", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 74);
    \u0275\u0275text(43, "Formations actives ");
    \u0275\u0275element(44, "i", 75);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 78)(46, "div", 79);
    \u0275\u0275element(47, "i", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 71)(49, "span", 72);
    \u0275\u0275template(50, CompanyManagementComponent_ng_container_27_span_50_Template, 2, 1, "span", 23)(51, CompanyManagementComponent_ng_container_27_span_51_Template, 1, 0, "span", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 74);
    \u0275\u0275text(53, "Taux de compl\xE9tion");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 78)(55, "div", 81);
    \u0275\u0275element(56, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 71)(58, "span", 72);
    \u0275\u0275template(59, CompanyManagementComponent_ng_container_27_span_59_Template, 2, 1, "span", 23)(60, CompanyManagementComponent_ng_container_27_span_60_Template, 1, 0, "span", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 74);
    \u0275\u0275text(62, "Certificats d\xE9livr\xE9s");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "div", 83)(64, "a", 84);
    \u0275\u0275element(65, "i", 70);
    \u0275\u0275elementStart(66, "span");
    \u0275\u0275text(67, "Liste des employ\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "i", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "a", 84);
    \u0275\u0275element(70, "i", 77);
    \u0275\u0275elementStart(71, "span");
    \u0275\u0275text(72, "Formations de l'entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275element(73, "i", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "a", 86);
    \u0275\u0275element(75, "i", 87);
    \u0275\u0275elementStart(76, "span");
    \u0275\u0275text(77, "Fiche compl\xE8te");
    \u0275\u0275elementEnd();
    \u0275\u0275element(78, "i", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 88)(80, "div", 89)(81, "div", 90);
    \u0275\u0275element(82, "i", 91);
    \u0275\u0275elementStart(83, "h3", 92);
    \u0275\u0275text(84, "Informations g\xE9n\xE9rales");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 93)(86, "div", 94)(87, "div", 95)(88, "span", 96);
    \u0275\u0275text(89, "NINEA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span", 97);
    \u0275\u0275text(91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 95)(93, "span", 96);
    \u0275\u0275text(94, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "span", 98)(96, "a", 99);
    \u0275\u0275text(97);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(98, "div", 95)(99, "span", 96);
    \u0275\u0275text(100, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "span", 98);
    \u0275\u0275text(102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div", 95)(104, "span", 96);
    \u0275\u0275text(105, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "span", 98);
    \u0275\u0275text(107);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "div", 95)(109, "span", 96);
    \u0275\u0275text(110, "Pays");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "span", 98);
    \u0275\u0275text(112);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "div", 95)(114, "span", 96);
    \u0275\u0275text(115, "Secteur d'activit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "span", 98);
    \u0275\u0275text(117);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div", 95)(119, "span", 96);
    \u0275\u0275text(120, "Effectif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "span", 98);
    \u0275\u0275text(122);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(123, "div", 89)(124, "div", 90);
    \u0275\u0275element(125, "i", 100);
    \u0275\u0275elementStart(126, "h3", 92);
    \u0275\u0275text(127, "Client associ\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(128, "div", 93);
    \u0275\u0275template(129, CompanyManagementComponent_ng_container_27_ng_container_129_Template, 17, 11, "ng-container", 101)(130, CompanyManagementComponent_ng_container_27_ng_template_130_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const noClient_r11 = \u0275\u0275reference(131);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCompanyInitials(ctx_r1.selectedCompany.nom), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedCompany.nom);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-status", ctx_r1.selectedCompany.statut);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(ctx_r1.selectedCompany.statut), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCompany.secteur_activite);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCompany.pays);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(38, _c2, ctx_r1.selectedCompany.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedCompany.statut === "active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCompany.statut === "active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCompany.statut === "inactive" || ctx_r1.selectedCompany.statut === "suspendue");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(40, _c3, ctx_r1.routes.superadminUserList))("queryParams", \u0275\u0275pureFunction1(42, _c4, ctx_r1.selectedCompany.id));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.statsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.statsLoading);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(44, _c3, ctx_r1.routes.superadminCourse))("queryParams", \u0275\u0275pureFunction1(46, _c4, ctx_r1.selectedCompany.id));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.statsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.statsLoading);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", !ctx_r1.statsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.statsLoading);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx_r1.statsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.statsLoading);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(48, _c3, ctx_r1.routes.superadminUserList))("queryParams", \u0275\u0275pureFunction1(50, _c4, ctx_r1.selectedCompany.id));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(52, _c3, ctx_r1.routes.superadminCourse))("queryParams", \u0275\u0275pureFunction1(54, _c4, ctx_r1.selectedCompany.id));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(56, _c2, ctx_r1.selectedCompany.id));
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r1.selectedCompany.ninea || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275property("href", "mailto:" + ctx_r1.selectedCompany.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedCompany.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedCompany.telephone || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedCompany.adresse || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getCountryFlag(ctx_r1.selectedCompany.pays || ""), " ", ctx_r1.getCountryName(ctx_r1.selectedCompany.pays || ""), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedCompany.secteur_activite || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedCompany.taille_effectif || "\u2014", " personnes");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.selectedCompany.client)("ngIfElse", noClient_r11);
  }
}
var CompanyManagementComponent = class _CompanyManagementComponent {
  data;
  router;
  pagination;
  clientCompanyService;
  formationService;
  routes = routes;
  companyDialog = false;
  isEditMode = false;
  selectedCompany = null;
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
  successMessage = "";
  // Variables pour le modal/dialog
  // companyDialog: boolean = false;
  // isEditMode: boolean = false;
  submitted = false;
  // selectedCompany: Company | null = null;
  // Variables pour le loading
  loading = false;
  error = "";
  constructor(data, router, pagination, clientCompanyService, formationService) {
    this.data = data;
    this.router = router;
    this.pagination = pagination;
    this.clientCompanyService = clientCompanyService;
    this.formationService = formationService;
    this.getCompanyList();
    this.pagination.tablePageSize.subscribe((res) => {
      if (this.router.url == "/superadmin/company-management" || this.router.url.includes("superadmin-companymanagement")) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }
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
  // ... existing methods ...
  // 🆕 Méthodes pour gérer les pays
  getCountryFlag(countryCode) {
    const country = this.paysList.find((p) => p.code === countryCode);
    return country ? country.flag : "\u{1F30D}";
  }
  getCountryName(countryCode) {
    const country = this.paysList.find((p) => p.code === countryCode);
    return country ? country.nom : countryCode;
  }
  getCompanyList() {
    this.loading = true;
    this.error = "";
    this.clientCompanyService.getCompanies().subscribe({
      next: (response) => {
        console.log("Companies data:", response);
        this.actualData = response.entreprises || [];
        this.getTableData({ skip: 0, limit: this.pageSize });
        this.loading = false;
      },
      error: (error) => {
        console.error("Erreur lors de la r\xE9cup\xE9ration des entreprises:", error);
        this.error = "Erreur lors du chargement des donn\xE9es";
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
      }
    ];
    const mockCompanies = [
      {
        id: 1,
        nom: "Innovation Digital",
        ninea: "20243011234567",
        adresse: "789 Boulevard Saint-Germain, 75007 Paris",
        telephone: "01 45 67 89 02",
        email: "team@innovation-digital.fr",
        secteur_activite: "Startup Digital",
        taille_effectif: 8,
        statut: "active",
        client_id: 1,
        client: mockClients[0]
      }
    ];
    this.actualData = mockCompanies;
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
    this.getCompanyList();
  }
  searchData(value) {
    if (value == "") {
      this.tableData = [...this.tableDataCopy];
    } else {
      const filteredData = this.tableDataCopy.filter((company) => company.nom.toLowerCase().includes(value.toLowerCase()) || company.email.toLowerCase().includes(value.toLowerCase()) || company.telephone.toLowerCase().includes(value.toLowerCase()) || company.secteur_activite.toLowerCase().includes(value.toLowerCase()) || company.client?.nom.toLowerCase().includes(value.toLowerCase()) || company.ninea.toLowerCase().includes(value.toLowerCase()));
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
    this.companyDialog = true;
    this.isEditMode = false;
    this.selectedCompany = null;
    this.submitted = false;
  }
  editCompany(company) {
    this.companyDialog = true;
    this.isEditMode = true;
    this.selectedCompany = __spreadValues({}, company);
    this.submitted = false;
  }
  deleteCompany(company) {
    if (confirm(`\xCAtes-vous s\xFBr de vouloir supprimer l'entreprise "${company.nom}" ?`)) {
      this.loading = true;
      this.clientCompanyService.deleteCompany(company.id).subscribe({
        next: () => {
          console.log("Entreprise supprim\xE9e avec succ\xE8s");
          this.refreshData();
        },
        error: (error) => {
          console.error("Erreur lors de la suppression:", error);
          this.loading = false;
          this.actualData = this.actualData.filter((c) => c.id !== company.id);
          this.getTableData({ skip: this.skip, limit: this.limit });
        }
      });
    }
  }
  hideDialog() {
    this.companyDialog = false;
    this.submitted = false;
    this.selectedCompany = null;
  }
  clearMessages() {
    this.error = "";
    this.successMessage = "";
  }
  saveCompany() {
    this.submitted = true;
    if (this.selectedCompany && this.validateCompany(this.selectedCompany)) {
      this.loading = true;
      if (this.isEditMode) {
        this.clientCompanyService.updateCompany(this.selectedCompany.id, this.selectedCompany).subscribe({
          next: (response) => {
            console.log("Entreprise mise \xE0 jour avec succ\xE8s");
            this.refreshData();
            this.hideDialog();
          },
          error: (error) => {
            console.error("Erreur lors de la mise \xE0 jour:", error);
            this.loading = false;
          }
        });
      } else {
        this.clientCompanyService.createCompany(this.selectedCompany).subscribe({
          next: (response) => {
            console.log("Entreprise cr\xE9\xE9e avec succ\xE8s");
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
  suspendCompany(company) {
    if (confirm("\xCAtes-vous s\xFBr de vouloir suspendre cette entreprise ?")) {
      const updatedCompany = __spreadProps(__spreadValues({}, company), { statut: "suspendue" });
      this.clientCompanyService.updateCompany(company.id, updatedCompany).subscribe({
        next: () => {
          console.log("Entreprise suspendue avec succ\xE8s");
          this.successMessage = "Entreprise suspendue avec succ\xE8s";
          this.refreshData();
          setTimeout(() => this.clearMessages(), 3e3);
        },
        error: (error) => {
          console.error("Erreur lors de la suspension:", error);
          this.error = "Erreur lors de la suspension de l'entreprise";
        }
      });
    }
  }
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
  onPageChange(page) {
    this.currentPage = page;
    const skip = (page - 1) * this.pageSize;
    this.skip = skip;
    this.getTableData({ skip, limit: this.pageSize });
  }
  // Méthode appelée après la sauvegarde d'une entreprise
  onCompanySaved() {
    this.successMessage = this.isEditMode ? "Entreprise modifi\xE9e avec succ\xE8s" : "Entreprise cr\xE9\xE9e avec succ\xE8s";
    this.refreshData();
    this.hideDialog();
    setTimeout(() => this.clearMessages(), 3e3);
  }
  // Méthodes manquantes pour les permissions et utilitaires
  canEditCompany(company) {
    return !!company;
  }
  canDeleteCompany(company) {
    return !!company;
  }
  getCompanyField(company, field) {
    if (!company)
      return "N/A";
    const value = company[field];
    return value || "N/A";
  }
  getClientName(client) {
    if (!client)
      return "Aucun client";
    return typeof client === "string" ? client : client.nom || "Client inconnu";
  }
  getStatusCompanyClass(statut) {
    switch (statut?.toLowerCase()) {
      case "active":
        return "badge bg-success";
      case "inactive":
        return "badge bg-warning";
      case "suspendue":
        return "badge bg-danger";
      default:
        return "badge bg-secondary";
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
  // TrackBy function pour optimiser les performances
  trackByCompanyId(index, company) {
    return company.id;
  }
  getStatusLabel(statut) {
    switch (statut) {
      case "active":
        return "Active";
      case "inactive":
        return "Inactive";
      case "suspendue":
        return "Suspendue";
      default:
        return "Inconnu";
    }
  }
  validateCompany(company) {
    return !!(company.nom && company.email && company.telephone && company.adresse && company.secteur_activite && company.ninea && company.client_id);
  }
  generateId() {
    return Math.max(...this.actualData.map((c) => c.id), 0) + 1;
  }
  statsLoading = false;
  selectCompany(company) {
    this.selectedCompany = company;
    if (company.formations_count === void 0 && company.employes_count === void 0) {
      this.statsLoading = true;
      Promise.all([
        firstValueFrom(this.clientCompanyService.getCompany(company.id)).catch(() => null),
        firstValueFrom(this.formationService.getFormationsByEntreprise(company.id)).catch(() => null)
      ]).then(([detailRes, formRes]) => {
        if (this.selectedCompany?.id !== company.id)
          return;
        const detail = detailRes?.entreprise || detailRes?.data || detailRes || {};
        const formations = formRes?.formations ?? formRes?.data ?? [];
        const actives = formations.filter((f) => f.est_publie && f.inscription_ouverte).length;
        this.selectedCompany = __spreadProps(__spreadValues({}, this.selectedCompany), {
          formations_count: formations.length,
          formations_actives_count: actives,
          employes_count: detail.employes_count ?? detail.users?.length ?? company.taille_effectif ?? 0,
          taux_completion: detail.taux_completion ?? 0,
          certificats_count: detail.certificats_count ?? 0
        });
        this.statsLoading = false;
      });
    }
  }
  getCompanyInitials(name) {
    return name.split(" ").map((word) => word.charAt(0)).join("").substring(0, 2).toUpperCase();
  }
  formatDate(date) {
    if (!date)
      return "";
    return new Date(date).toLocaleDateString("fr-FR");
  }
  getStatusClass(status) {
    switch (status?.toLowerCase()) {
      case "active":
        return "badge bg-success";
      case "inactive":
        return "badge bg-warning";
      case "suspendue":
        return "badge bg-danger";
      default:
        return "badge bg-secondary";
    }
  }
  static \u0275fac = function CompanyManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyManagementComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(ClientCompanyService), \u0275\u0275directiveInject(FormationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyManagementComponent, selectors: [["app-companymanagement"]], decls: 29, vars: 17, consts: [["noClient", ""], [1, "cm-shell"], [1, "cm-header"], [1, "cm-header__left"], [1, "cm-header__title"], [1, "cm-header__count"], [1, "cm-header__right"], ["type", "button", 1, "cm-btn", "cm-btn--ghost", 3, "click", "disabled"], [1, "isax", "isax-refresh"], ["type", "button", 1, "cm-btn", "cm-btn--primary", 3, "click"], [1, "isax", "isax-add"], ["class", "cm-alert cm-alert--danger", 4, "ngIf"], ["class", "cm-alert cm-alert--success", 4, "ngIf"], [1, "cm-body"], [1, "cm-sidebar"], [1, "cm-sidebar__search"], [1, "isax", "isax-search-normal-1", "cm-sidebar__search-icon"], ["type", "search", "placeholder", "Rechercher...", 1, "cm-sidebar__search-input", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "cm-sidebar__loading", 4, "ngIf"], ["class", "cm-list", 4, "ngIf"], [1, "cm-sidebar__pager"], [1, "cm-detail"], ["class", "cm-empty-state", 4, "ngIf"], [4, "ngIf"], [3, "onClose", "onSave", "visible", "isEditMode", "companyData"], [1, "cm-alert", "cm-alert--danger"], [1, "isax", "isax-warning-2", "me-2"], ["type", "button", 1, "cm-alert__close", 3, "click"], [1, "isax", "isax-close-circle"], [1, "cm-alert", "cm-alert--success"], [1, "isax", "isax-tick-circle", "me-2"], [1, "cm-sidebar__loading"], ["class", "cm-skeleton", 4, "ngFor", "ngForOf"], [1, "cm-skeleton"], [1, "cm-list"], ["class", "cm-list__item", 3, "cm-list__item--active", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cm-list__empty", 4, "ngIf"], [1, "cm-list__item", 3, "click"], [1, "cm-list__avatar"], [1, "cm-list__info"], [1, "cm-list__name"], [1, "cm-list__sub"], [1, "cm-list__dot"], [1, "cm-list__empty"], [1, "isax", "isax-building", "d-block", "mb-2"], [1, "cm-empty-state"], [1, "cm-empty-state__icon"], [1, "isax", "isax-building"], ["type", "button", 1, "cm-btn", "cm-btn--primary", "mt-3", 3, "click"], [1, "isax", "isax-add", "me-1"], [1, "cm-detail-header"], [1, "cm-detail-header__avatar"], [1, "cm-detail-header__info"], [1, "cm-detail-header__name"], [1, "cm-detail-header__meta"], [1, "cm-badge"], ["class", "cm-meta-chip", 4, "ngIf"], [1, "cm-detail-header__actions"], ["type", "button", 1, "cm-btn", "cm-btn--outline", 3, "click"], [1, "isax", "isax-edit", "me-1"], [1, "cm-btn", "cm-btn--ghost", 3, "routerLink"], [1, "isax", "isax-eye", "me-1"], ["type", "button", "class", "cm-btn cm-btn--ghost cm-btn--warn", 3, "click", 4, "ngIf"], ["type", "button", "class", "cm-btn cm-btn--ghost cm-btn--danger", 3, "click", 4, "ngIf"], ["type", "button", "class", "cm-btn cm-btn--ghost cm-btn--success", 3, "click", 4, "ngIf"], ["type", "button", 1, "cm-btn", "cm-btn--ghost", "cm-btn--danger", 3, "click"], [1, "isax", "isax-trash"], [1, "cm-kpi-row"], [1, "cm-kpi-card", "cm-kpi-card--link", 3, "routerLink", "queryParams"], [1, "cm-kpi-card__icon", "cm-kpi-card__icon--blue"], [1, "isax", "isax-people"], [1, "cm-kpi-card__body"], [1, "cm-kpi-card__value"], ["class", "cm-kpi-skeleton", 4, "ngIf"], [1, "cm-kpi-card__label"], [1, "isax", "isax-arrow-right-3", "ms-1"], [1, "cm-kpi-card__icon", "cm-kpi-card__icon--green"], [1, "isax", "isax-book"], [1, "cm-kpi-card"], [1, "cm-kpi-card__icon", "cm-kpi-card__icon--teal"], [1, "isax", "isax-chart-2"], [1, "cm-kpi-card__icon", "cm-kpi-card__icon--orange"], [1, "isax", "isax-award"], [1, "cm-quick-links"], [1, "cm-quick-link", 3, "routerLink", "queryParams"], [1, "isax", "isax-arrow-right-3", "cm-quick-link__arrow"], [1, "cm-quick-link", 3, "routerLink"], [1, "isax", "isax-document-text"], [1, "cm-detail-grid"], [1, "cm-card"], [1, "cm-card__header"], [1, "isax", "isax-building", "cm-card__icon"], [1, "cm-card__title"], [1, "cm-card__body"], [1, "cm-info-list"], [1, "cm-info-row"], [1, "cm-info-row__label"], [1, "cm-info-row__value", "cm-mono"], [1, "cm-info-row__value"], [1, "cm-link", 3, "href"], [1, "isax", "isax-people", "cm-card__icon"], [4, "ngIf", "ngIfElse"], [1, "cm-meta-chip"], [1, "isax", "isax-category", "me-1"], [1, "isax", "isax-global", "me-1"], ["type", "button", 1, "cm-btn", "cm-btn--ghost", "cm-btn--warn", 3, "click"], [1, "isax", "isax-archive", "me-1"], [1, "isax", "isax-pause", "me-1"], ["type", "button", 1, "cm-btn", "cm-btn--ghost", "cm-btn--success", 3, "click"], [1, "isax", "isax-refresh", "me-1"], [1, "cm-kpi-skeleton"], [1, "cm-client-block"], [1, "cm-client-block__avatar"], [1, "cm-client-block__info"], [1, "cm-client-block__name"], [1, "cm-badge", "cm-badge--type"], ["class", "cm-client-block__meta", 4, "ngIf"], [1, "cm-card__footer"], [1, "cm-btn", "cm-btn--ghost", "cm-btn--sm", 3, "routerLink"], [1, "cm-client-block__meta"], [1, "isax", "isax-sms", "me-1"], [1, "isax", "isax-call", "me-1"], [1, "isax", "isax-user", "me-1"], [1, "cm-info-empty"], [1, "isax", "isax-people", "d-block", "mb-1"]], template: function CompanyManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h1", 4);
      \u0275\u0275text(4, "Entreprises");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
      \u0275\u0275listener("click", function CompanyManagementComponent_Template_button_click_8_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275element(9, "i", 8);
      \u0275\u0275text(10, " Actualiser ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275listener("click", function CompanyManagementComponent_Template_button_click_11_listener() {
        return ctx.openNew();
      });
      \u0275\u0275element(12, "i", 10);
      \u0275\u0275text(13, " Nouvelle entreprise ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(14, CompanyManagementComponent_div_14_Template, 5, 1, "div", 11)(15, CompanyManagementComponent_div_15_Template, 5, 1, "div", 12);
      \u0275\u0275elementStart(16, "div", 13)(17, "aside", 14)(18, "div", 15);
      \u0275\u0275element(19, "i", 16);
      \u0275\u0275elementStart(20, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function CompanyManagementComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CompanyManagementComponent_Template_input_ngModelChange_20_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(21, CompanyManagementComponent_div_21_Template, 2, 2, "div", 18)(22, CompanyManagementComponent_ul_22_Template, 3, 3, "ul", 19);
      \u0275\u0275elementStart(23, "div", 20);
      \u0275\u0275element(24, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "main", 21);
      \u0275\u0275template(26, CompanyManagementComponent_div_26_Template, 10, 0, "div", 22)(27, CompanyManagementComponent_ng_container_27_Template, 132, 58, "ng-container", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "app-company-add", 24);
      \u0275\u0275listener("onClose", function CompanyManagementComponent_Template_app_company_add_onClose_28_listener() {
        return ctx.hideDialog();
      })("onSave", function CompanyManagementComponent_Template_app_company_add_onSave_28_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.actualData.length, " entreprise", ctx.actualData.length > 1 ? "s" : "");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275classProp("cm-spin", ctx.loading);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(16, _c0));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", !ctx.selectedCompany && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedCompany);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.companyDialog)("isEditMode", ctx.isEditMode)("companyData", ctx.selectedCompany);
    }
  }, dependencies: [RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, CommonModule, NgForOf, NgIf, MatSortModule, CustomPaginationComponent, CompanyAddComponent, TitleCasePipe], styles: ['\n\n.cm-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: calc(100vh - 120px);\n  font-family: inherit;\n}\n.cm-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 0 20px;\n  flex-shrink: 0;\n}\n.cm-header__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n}\n.cm-header__title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.cm-header__count[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  background: #f1f5f9;\n  padding: 2px 10px;\n  border-radius: 999px;\n}\n.cm-header__right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.cm-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 14px;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n  gap: 8px;\n}\n.cm-alert--danger[_ngcontent-%COMP%] {\n  background: #fff1f0;\n  color: #c0392b;\n  border: 1px solid #f5c6c3;\n}\n.cm-alert--success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.cm-alert__close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n  padding: 0;\n  line-height: 1;\n}\n.cm-alert__close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.cm-body[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex: 1;\n  min-height: 0;\n}\n.cm-sidebar[_ngcontent-%COMP%] {\n  width: 300px;\n  flex-shrink: 0;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.cm-sidebar__search[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 14px 14px 10px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.cm-sidebar__search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 26px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 0.9rem;\n  pointer-events: none;\n}\n.cm-sidebar__search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px 8px 34px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.85rem;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.cm-sidebar__search-input[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n  background: #fff;\n}\n.cm-sidebar__search-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.cm-sidebar__loading[_ngcontent-%COMP%] {\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.cm-sidebar__pager[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-top: 1px solid #f1f5f9;\n  margin-top: auto;\n  font-size: 0.78rem;\n}\n.cm-sidebar__pager[_ngcontent-%COMP%]     .pagination {\n  margin: 0;\n  justify-content: center;\n}\n.cm-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 8px;\n  overflow-y: auto;\n  flex: 1;\n}\n.cm-list__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.cm-list__item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.cm-list__item--active[_ngcontent-%COMP%] {\n  background: rgba(6, 155, 143, 0.07) !important;\n}\n.cm-list__item--active[_ngcontent-%COMP%]   .cm-list__name[_ngcontent-%COMP%] {\n  color: #069b8f;\n  font-weight: 600;\n}\n.cm-list__avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      rgb(3.7192546584, 96.0807453416, 88.6422360248));\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.cm-list__avatar[data-status=inactive][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #94a3b8,\n      #64748b);\n}\n.cm-list__avatar[data-status=suspendue][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n}\n.cm-list__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cm-list__name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #0f172a;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cm-list__sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cm-list__dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: #cbd5e1;\n}\n.cm-list__dot[data-status=active][_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.cm-list__dot[data-status=inactive][_ngcontent-%COMP%] {\n  background: #cbd5e1;\n}\n.cm-list__dot[data-status=suspendue][_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.cm-list__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n  color: #94a3b8;\n  font-size: 0.85rem;\n  list-style: none;\n}\n.cm-list__empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.cm-detail[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.cm-empty-state[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 60px 20px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.cm-empty-state__icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 20px;\n  background: #f1f5f9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n}\n.cm-empty-state__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #94a3b8;\n}\n.cm-empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 8px;\n}\n.cm-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin-bottom: 0;\n}\n.cm-detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 20px 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  flex-wrap: wrap;\n  overflow: hidden;\n}\n.cm-detail-header__avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      rgb(3.7192546584, 96.0807453416, 88.6422360248));\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.cm-detail-header__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  min-width: 200px;\n}\n.cm-detail-header__name[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cm-detail-header__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n}\n.cm-detail-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n  flex-shrink: 0;\n}\n.cm-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n@media (max-width: 900px) {\n  .cm-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.cm-kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 16px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.cm-kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cm-kpi-card__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.cm-kpi-card__icon--blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #3b82f6;\n}\n.cm-kpi-card__icon--green[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #22c55e;\n}\n.cm-kpi-card__icon--teal[_ngcontent-%COMP%] {\n  background: rgba(6, 155, 143, 0.1);\n  color: #069b8f;\n}\n.cm-kpi-card__icon--orange[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  color: #f97316;\n}\n.cm-kpi-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.cm-kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.2;\n}\n.cm-kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.cm-kpi-card--link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  cursor: pointer;\n  transition: box-shadow 0.15s, transform 0.15s;\n}\n.cm-kpi-card--link[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  transform: translateY(-2px);\n}\n.cm-kpi-card--link[_ngcontent-%COMP%]:hover   .cm-kpi-card__label[_ngcontent-%COMP%] {\n  color: #069b8f;\n}\n.cm-kpi-skeleton[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f1f5f9 25%,\n      #e2e8f0 50%,\n      #f1f5f9 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_cm-shimmer 1.4s infinite;\n  vertical-align: middle;\n}\n.cm-quick-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.cm-quick-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 16px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.83rem;\n  font-weight: 500;\n  color: #0f172a;\n  text-decoration: none;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  transition: all 0.15s;\n}\n.cm-quick-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #069b8f;\n}\n.cm-quick-link__arrow[_ngcontent-%COMP%] {\n  color: #94a3b8 !important;\n  margin-left: auto;\n}\n.cm-quick-link[_ngcontent-%COMP%]:hover {\n  background: rgba(6, 155, 143, 0.05);\n  border-color: #069b8f;\n  color: #069b8f;\n}\n.cm-quick-link[_ngcontent-%COMP%]:hover   .cm-quick-link__arrow[_ngcontent-%COMP%] {\n  color: #069b8f !important;\n}\n.cm-detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .cm-detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cm-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.cm-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.cm-card__icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #069b8f;\n}\n.cm-card__title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.cm-card__body[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n}\n.cm-card__footer[_ngcontent-%COMP%] {\n  padding: 10px 18px 14px;\n  border-top: 1px solid #f1f5f9;\n}\n.cm-info-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.cm-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 9px 0;\n  border-bottom: 1px solid #f1f5f9;\n  gap: 12px;\n}\n.cm-info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cm-info-row__label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  flex-shrink: 0;\n  width: 130px;\n  padding-top: 1px;\n}\n.cm-info-row__value[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #0f172a;\n  text-align: right;\n  word-break: break-word;\n}\n.cm-client-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.cm-client-block__avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.cm-client-block__info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.cm-client-block__name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.cm-client-block__meta[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  margin: 0 0 2px;\n  display: flex;\n  align-items: center;\n}\n.cm-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.73rem;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 999px;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  background: #f1f5f9;\n  color: #475569;\n}\n.cm-badge[data-status=active][_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.cm-badge[data-status=inactive][_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.cm-badge[data-status=suspendue][_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #92400e;\n}\n.cm-badge--type[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n.cm-meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.78rem;\n  color: #64748b;\n  background: #f1f5f9;\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n.cm-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer;\n  border: 1px solid transparent;\n  text-decoration: none;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.cm-btn--primary[_ngcontent-%COMP%] {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n}\n.cm-btn--primary[_ngcontent-%COMP%]:hover {\n  background: rgb(4.4795031056, 115.7204968944, 106.7614906832);\n}\n.cm-btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #069b8f;\n  border-color: #069b8f;\n}\n.cm-btn--outline[_ngcontent-%COMP%]:hover {\n  background: rgba(6, 155, 143, 0.06);\n}\n.cm-btn--ghost[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #334155;\n  border-color: #e2e8f0;\n}\n.cm-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.cm-btn--warn[_ngcontent-%COMP%] {\n  color: #92400e;\n  background: #fff3cd;\n  border-color: #fde68a;\n}\n.cm-btn--warn[_ngcontent-%COMP%]:hover {\n  background: #fde68a;\n}\n.cm-btn--danger[_ngcontent-%COMP%] {\n  color: #991b1b;\n  background: #fff1f0;\n  border-color: #f5c6c3;\n}\n.cm-btn--danger[_ngcontent-%COMP%]:hover {\n  background: #f5c6c3;\n}\n.cm-btn--success[_ngcontent-%COMP%] {\n  color: #166534;\n  background: #dcfce7;\n  border-color: #bbf7d0;\n}\n.cm-btn--success[_ngcontent-%COMP%]:hover {\n  background: #bbf7d0;\n}\n.cm-btn--sm[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  font-size: 0.78rem;\n}\n.cm-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cm-mono[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 0.82rem;\n}\n.cm-link[_ngcontent-%COMP%] {\n  color: #069b8f;\n  text-decoration: none;\n}\n.cm-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.cm-info-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  color: #94a3b8;\n  font-size: 0.85rem;\n}\n.cm-info-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  display: block;\n  margin-bottom: 6px;\n}\n.cm-skeleton[_ngcontent-%COMP%] {\n  height: 56px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      90deg,\n      #f1f5f9 25%,\n      #e2e8f0 50%,\n      #f1f5f9 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_cm-shimmer 1.4s infinite;\n}\n@keyframes _ngcontent-%COMP%_cm-shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_cm-rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cm-spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_cm-rotate 0.8s linear infinite;\n  display: inline-block;\n}\n/*# sourceMappingURL=companymanagement.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyManagementComponent, [{
    type: Component,
    args: [{ selector: "app-companymanagement", imports: [RouterLink, FormsModule, CommonModule, MatSortModule, CustomPaginationComponent, CompanyAddComponent], template: `<!-- \u2500\u2500 SHELL \u2500\u2500 -->
<div class="cm-shell">

  <!-- \u2500\u2500 HEADER \u2500\u2500 -->
  <div class="cm-header">
    <div class="cm-header__left">
      <h1 class="cm-header__title">Entreprises</h1>
      <span class="cm-header__count">{{ actualData.length }} entreprise{{ actualData.length > 1 ? 's' : '' }}</span>
    </div>
    <div class="cm-header__right">
      <button type="button" class="cm-btn cm-btn--ghost" (click)="refreshData()" [disabled]="loading">
        <i class="isax isax-refresh" [class.cm-spin]="loading"></i>
        Actualiser
      </button>
      <button type="button" class="cm-btn cm-btn--primary" (click)="openNew()">
        <i class="isax isax-add"></i>
        Nouvelle entreprise
      </button>
    </div>
  </div>

  <!-- \u2500\u2500 ALERTS \u2500\u2500 -->
  <div *ngIf="error" class="cm-alert cm-alert--danger">
    <i class="isax isax-warning-2 me-2"></i>{{ error }}
    <button type="button" class="cm-alert__close" (click)="error = ''"><i class="isax isax-close-circle"></i></button>
  </div>
  <div *ngIf="successMessage" class="cm-alert cm-alert--success">
    <i class="isax isax-tick-circle me-2"></i>{{ successMessage }}
    <button type="button" class="cm-alert__close" (click)="successMessage = ''"><i class="isax isax-close-circle"></i></button>
  </div>

  <!-- \u2500\u2500 BODY \u2500\u2500 -->
  <div class="cm-body">

    <!-- \u2550\u2550 SIDEBAR \u2550\u2550 -->
    <aside class="cm-sidebar">

      <!-- Search -->
      <div class="cm-sidebar__search">
        <i class="isax isax-search-normal-1 cm-sidebar__search-icon"></i>
        <input type="search"
               class="cm-sidebar__search-input"
               placeholder="Rechercher..."
               [(ngModel)]="searchDataValue"
               [ngModelOptions]="{ standalone: true }"
               (ngModelChange)="searchData(searchDataValue)">
      </div>

      <!-- Loading skeleton -->
      <div *ngIf="loading" class="cm-sidebar__loading">
        <div class="cm-skeleton" *ngFor="let i of [1,2,3,4,5]"></div>
      </div>

      <!-- List -->
      <ul class="cm-list" *ngIf="!loading">
        <li *ngFor="let company of tableData; trackBy: trackByCompanyId"
            class="cm-list__item"
            [class.cm-list__item--active]="selectedCompany?.id === company.id"
            (click)="selectCompany(company)">
          <div class="cm-list__avatar" [attr.data-status]="company.statut">
            {{ getCompanyInitials(company.nom) }}
          </div>
          <div class="cm-list__info">
            <span class="cm-list__name">{{ company.nom }}</span>
            <span class="cm-list__sub">{{ company.secteur_activite }}</span>
          </div>
          <span class="cm-list__dot" [attr.data-status]="company.statut"></span>
        </li>

        <li *ngIf="!tableData.length" class="cm-list__empty">
          <i class="isax isax-building d-block mb-2"></i>
          <small>Aucune entreprise trouv\xE9e</small>
        </li>
      </ul>

      <!-- Pagination -->
      <div class="cm-sidebar__pager">
        <app-custom-pagination/>
      </div>
    </aside>

    <!-- \u2550\u2550 DETAIL PANEL \u2550\u2550 -->
    <main class="cm-detail">

      <!-- Empty state -->
      <div *ngIf="!selectedCompany && !loading" class="cm-empty-state">
        <div class="cm-empty-state__icon"><i class="isax isax-building"></i></div>
        <h3>S\xE9lectionnez une entreprise</h3>
        <p>Choisissez une entreprise dans la liste pour voir ses d\xE9tails.</p>
        <button type="button" class="cm-btn cm-btn--primary mt-3" (click)="openNew()">
          <i class="isax isax-add me-1"></i>Cr\xE9er une entreprise
        </button>
      </div>

      <ng-container *ngIf="selectedCompany">

        <!-- \u2500\u2500 DETAIL HEADER \u2500\u2500 -->
        <div class="cm-detail-header">
          <div class="cm-detail-header__avatar">
            {{ getCompanyInitials(selectedCompany.nom) }}
          </div>
          <div class="cm-detail-header__info">
            <h2 class="cm-detail-header__name">{{ selectedCompany.nom }}</h2>
            <div class="cm-detail-header__meta">
              <span class="cm-badge" [attr.data-status]="selectedCompany.statut">
                {{ getStatusLabel(selectedCompany.statut) }}
              </span>
              <span class="cm-meta-chip" *ngIf="selectedCompany.secteur_activite">
                <i class="isax isax-category me-1"></i>{{ selectedCompany.secteur_activite }}
              </span>
              <span class="cm-meta-chip" *ngIf="selectedCompany.pays">
                <i class="isax isax-global me-1"></i>
                {{ getCountryFlag(selectedCompany.pays) }} {{ getCountryName(selectedCompany.pays) }}
              </span>
            </div>
          </div>
          <div class="cm-detail-header__actions">
            <button type="button" class="cm-btn cm-btn--outline" (click)="editCompany(selectedCompany)">
              <i class="isax isax-edit me-1"></i>Modifier
            </button>
            <a [routerLink]="['/superadmin/superadmin-company-details', selectedCompany.id]"
               class="cm-btn cm-btn--ghost">
              <i class="isax isax-eye me-1"></i>D\xE9tails
            </a>
            <button type="button" *ngIf="selectedCompany.statut === 'active'"
                    class="cm-btn cm-btn--ghost cm-btn--warn"
                    (click)="archiveCompany(selectedCompany)">
              <i class="isax isax-archive me-1"></i>Archiver
            </button>
            <button type="button" *ngIf="selectedCompany.statut === 'active'"
                    class="cm-btn cm-btn--ghost cm-btn--danger"
                    (click)="suspendCompany(selectedCompany)">
              <i class="isax isax-pause me-1"></i>Suspendre
            </button>
            <button type="button"
                    *ngIf="selectedCompany.statut === 'inactive' || selectedCompany.statut === 'suspendue'"
                    class="cm-btn cm-btn--ghost cm-btn--success"
                    (click)="reactivateCompany(selectedCompany)">
              <i class="isax isax-refresh me-1"></i>R\xE9activer
            </button>
            <button type="button" class="cm-btn cm-btn--ghost cm-btn--danger"
                    (click)="deleteCompany(selectedCompany)">
              <i class="isax isax-trash"></i>
            </button>
          </div>
        </div>

        <!-- \u2500\u2500 KPI ROW \u2500\u2500 -->
        <div class="cm-kpi-row">
          <!-- Employ\xE9s -->
          <a class="cm-kpi-card cm-kpi-card--link"
             [routerLink]="[routes.superadminUserList]"
             [queryParams]="{entreprise_id: selectedCompany.id}">
            <div class="cm-kpi-card__icon cm-kpi-card__icon--blue"><i class="isax isax-people"></i></div>
            <div class="cm-kpi-card__body">
              <span class="cm-kpi-card__value">
                <span *ngIf="!statsLoading">{{ selectedCompany.employes_count ?? selectedCompany.taille_effectif ?? '\u2014' }}</span>
                <span *ngIf="statsLoading" class="cm-kpi-skeleton"></span>
              </span>
              <span class="cm-kpi-card__label">Employ\xE9s <i class="isax isax-arrow-right-3 ms-1"></i></span>
            </div>
          </a>
          <!-- Formations actives -->
          <a class="cm-kpi-card cm-kpi-card--link"
             [routerLink]="[routes.superadminCourse]"
             [queryParams]="{entreprise_id: selectedCompany.id}">
            <div class="cm-kpi-card__icon cm-kpi-card__icon--green"><i class="isax isax-book"></i></div>
            <div class="cm-kpi-card__body">
              <span class="cm-kpi-card__value">
                <span *ngIf="!statsLoading">{{ selectedCompany.formations_actives_count ?? selectedCompany.formations_count ?? '\u2014' }}</span>
                <span *ngIf="statsLoading" class="cm-kpi-skeleton"></span>
              </span>
              <span class="cm-kpi-card__label">Formations actives <i class="isax isax-arrow-right-3 ms-1"></i></span>
            </div>
          </a>
          <!-- Taux compl\xE9tion -->
          <div class="cm-kpi-card">
            <div class="cm-kpi-card__icon cm-kpi-card__icon--teal"><i class="isax isax-chart-2"></i></div>
            <div class="cm-kpi-card__body">
              <span class="cm-kpi-card__value">
                <span *ngIf="!statsLoading">
                  {{ selectedCompany.taux_completion != null ? (selectedCompany.taux_completion + '%') : '\u2014' }}
                </span>
                <span *ngIf="statsLoading" class="cm-kpi-skeleton"></span>
              </span>
              <span class="cm-kpi-card__label">Taux de compl\xE9tion</span>
            </div>
          </div>
          <!-- Certificats -->
          <div class="cm-kpi-card">
            <div class="cm-kpi-card__icon cm-kpi-card__icon--orange"><i class="isax isax-award"></i></div>
            <div class="cm-kpi-card__body">
              <span class="cm-kpi-card__value">
                <span *ngIf="!statsLoading">{{ selectedCompany.certificats_count ?? '\u2014' }}</span>
                <span *ngIf="statsLoading" class="cm-kpi-skeleton"></span>
              </span>
              <span class="cm-kpi-card__label">Certificats d\xE9livr\xE9s</span>
            </div>
          </div>
        </div>

        <!-- \u2500\u2500 QUICK LINKS \u2500\u2500 -->
        <div class="cm-quick-links">
          <a [routerLink]="[routes.superadminUserList]"
             [queryParams]="{entreprise_id: selectedCompany.id}"
             class="cm-quick-link">
            <i class="isax isax-people"></i>
            <span>Liste des employ\xE9s</span>
            <i class="isax isax-arrow-right-3 cm-quick-link__arrow"></i>
          </a>
          <a [routerLink]="[routes.superadminCourse]"
             [queryParams]="{entreprise_id: selectedCompany.id}"
             class="cm-quick-link">
            <i class="isax isax-book"></i>
            <span>Formations de l'entreprise</span>
            <i class="isax isax-arrow-right-3 cm-quick-link__arrow"></i>
          </a>
          <a [routerLink]="['/superadmin/superadmin-company-details', selectedCompany.id]"
             class="cm-quick-link">
            <i class="isax isax-document-text"></i>
            <span>Fiche compl\xE8te</span>
            <i class="isax isax-arrow-right-3 cm-quick-link__arrow"></i>
          </a>
        </div>

        <!-- \u2500\u2500 DETAIL GRID \u2500\u2500 -->
        <div class="cm-detail-grid">

          <!-- Informations g\xE9n\xE9rales -->
          <div class="cm-card">
            <div class="cm-card__header">
              <i class="isax isax-building cm-card__icon"></i>
              <h3 class="cm-card__title">Informations g\xE9n\xE9rales</h3>
            </div>
            <div class="cm-card__body">
              <div class="cm-info-list">
                <div class="cm-info-row">
                  <span class="cm-info-row__label">NINEA</span>
                  <span class="cm-info-row__value cm-mono">{{ selectedCompany.ninea || '\u2014' }}</span>
                </div>
                <div class="cm-info-row">
                  <span class="cm-info-row__label">Email</span>
                  <span class="cm-info-row__value">
                    <a [href]="'mailto:' + selectedCompany.email" class="cm-link">{{ selectedCompany.email }}</a>
                  </span>
                </div>
                <div class="cm-info-row">
                  <span class="cm-info-row__label">T\xE9l\xE9phone</span>
                  <span class="cm-info-row__value">{{ selectedCompany.telephone || '\u2014' }}</span>
                </div>
                <div class="cm-info-row">
                  <span class="cm-info-row__label">Adresse</span>
                  <span class="cm-info-row__value">{{ selectedCompany.adresse || '\u2014' }}</span>
                </div>
                <div class="cm-info-row">
                  <span class="cm-info-row__label">Pays</span>
                  <span class="cm-info-row__value">
                    {{ getCountryFlag(selectedCompany.pays || '') }}
                    {{ getCountryName(selectedCompany.pays || '') }}
                  </span>
                </div>
                <div class="cm-info-row">
                  <span class="cm-info-row__label">Secteur d'activit\xE9</span>
                  <span class="cm-info-row__value">{{ selectedCompany.secteur_activite || '\u2014' }}</span>
                </div>
                <div class="cm-info-row">
                  <span class="cm-info-row__label">Effectif</span>
                  <span class="cm-info-row__value">{{ selectedCompany.taille_effectif || '\u2014' }} personnes</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Client associ\xE9 -->
          <div class="cm-card">
            <div class="cm-card__header">
              <i class="isax isax-people cm-card__icon"></i>
              <h3 class="cm-card__title">Client associ\xE9</h3>
            </div>
            <div class="cm-card__body">
              <ng-container *ngIf="selectedCompany.client; else noClient">
                <div class="cm-client-block">
                  <div class="cm-client-block__avatar">
                    {{ getCompanyInitials(selectedCompany.client.nom) }}
                  </div>
                  <div class="cm-client-block__info">
                    <p class="cm-client-block__name">{{ selectedCompany.client.nom }}</p>
                    <span class="cm-badge cm-badge--type">{{ selectedCompany.client.type | titlecase }}</span>
                    <p class="cm-client-block__meta" *ngIf="selectedCompany.client.email">
                      <i class="isax isax-sms me-1"></i>{{ selectedCompany.client.email }}
                    </p>
                    <p class="cm-client-block__meta" *ngIf="selectedCompany.client.telephone">
                      <i class="isax isax-call me-1"></i>{{ selectedCompany.client.telephone }}
                    </p>
                    <p class="cm-client-block__meta" *ngIf="selectedCompany.client.contact_principal">
                      <i class="isax isax-user me-1"></i>{{ selectedCompany.client.contact_principal }}
                    </p>
                  </div>
                </div>
                <div class="cm-card__footer">
                  <a [routerLink]="['/superadmin/superadmin-client-details', selectedCompany.client_id]"
                     class="cm-btn cm-btn--ghost cm-btn--sm">
                    <i class="isax isax-eye me-1"></i>Voir le client
                  </a>
                </div>
              </ng-container>
              <ng-template #noClient>
                <div class="cm-info-empty">
                  <i class="isax isax-people d-block mb-1"></i>
                  <small>Aucun client associ\xE9</small>
                </div>
              </ng-template>
            </div>
          </div>

        </div>

      </ng-container>
    </main>
  </div>

</div>

<!-- \u2500\u2500 DIALOGS \u2500\u2500 -->
<app-company-add
  [visible]="companyDialog"
  [isEditMode]="isEditMode"
  [companyData]="selectedCompany"
  (onClose)="hideDialog()"
  (onSave)="refreshData()">
</app-company-add>
`, styles: ['/* src/app/features/superadmin/companymanagement/companymanagement.component.scss */\n.cm-shell {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: calc(100vh - 120px);\n  font-family: inherit;\n}\n.cm-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 0 20px;\n  flex-shrink: 0;\n}\n.cm-header__left {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n}\n.cm-header__title {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.cm-header__count {\n  font-size: 0.8rem;\n  color: #64748b;\n  background: #f1f5f9;\n  padding: 2px 10px;\n  border-radius: 999px;\n}\n.cm-header__right {\n  display: flex;\n  gap: 10px;\n}\n.cm-alert {\n  display: flex;\n  align-items: center;\n  padding: 10px 14px;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n  gap: 8px;\n}\n.cm-alert--danger {\n  background: #fff1f0;\n  color: #c0392b;\n  border: 1px solid #f5c6c3;\n}\n.cm-alert--success {\n  background: #f0fdf4;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.cm-alert__close {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n  padding: 0;\n  line-height: 1;\n}\n.cm-alert__close:hover {\n  opacity: 1;\n}\n.cm-body {\n  display: flex;\n  gap: 20px;\n  flex: 1;\n  min-height: 0;\n}\n.cm-sidebar {\n  width: 300px;\n  flex-shrink: 0;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.cm-sidebar__search {\n  position: relative;\n  padding: 14px 14px 10px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.cm-sidebar__search-icon {\n  position: absolute;\n  left: 26px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 0.9rem;\n  pointer-events: none;\n}\n.cm-sidebar__search-input {\n  width: 100%;\n  padding: 8px 12px 8px 34px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.85rem;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.cm-sidebar__search-input:focus {\n  border-color: #069b8f;\n  background: #fff;\n}\n.cm-sidebar__search-input::placeholder {\n  color: #94a3b8;\n}\n.cm-sidebar__loading {\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.cm-sidebar__pager {\n  padding: 8px;\n  border-top: 1px solid #f1f5f9;\n  margin-top: auto;\n  font-size: 0.78rem;\n}\n.cm-sidebar__pager ::ng-deep .pagination {\n  margin: 0;\n  justify-content: center;\n}\n.cm-list {\n  list-style: none;\n  margin: 0;\n  padding: 8px;\n  overflow-y: auto;\n  flex: 1;\n}\n.cm-list__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.cm-list__item:hover {\n  background: #f8fafc;\n}\n.cm-list__item--active {\n  background: rgba(6, 155, 143, 0.07) !important;\n}\n.cm-list__item--active .cm-list__name {\n  color: #069b8f;\n  font-weight: 600;\n}\n.cm-list__avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      rgb(3.7192546584, 96.0807453416, 88.6422360248));\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.cm-list__avatar[data-status=inactive] {\n  background:\n    linear-gradient(\n      135deg,\n      #94a3b8,\n      #64748b);\n}\n.cm-list__avatar[data-status=suspendue] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n}\n.cm-list__info {\n  flex: 1;\n  min-width: 0;\n}\n.cm-list__name {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #0f172a;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cm-list__sub {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cm-list__dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: #cbd5e1;\n}\n.cm-list__dot[data-status=active] {\n  background: #22c55e;\n}\n.cm-list__dot[data-status=inactive] {\n  background: #cbd5e1;\n}\n.cm-list__dot[data-status=suspendue] {\n  background: #f59e0b;\n}\n.cm-list__empty {\n  text-align: center;\n  padding: 32px 16px;\n  color: #94a3b8;\n  font-size: 0.85rem;\n  list-style: none;\n}\n.cm-list__empty i {\n  font-size: 2rem;\n}\n.cm-detail {\n  flex: 1;\n  min-width: 0;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.cm-empty-state {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 60px 20px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.cm-empty-state__icon {\n  width: 72px;\n  height: 72px;\n  border-radius: 20px;\n  background: #f1f5f9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n}\n.cm-empty-state__icon i {\n  font-size: 2rem;\n  color: #94a3b8;\n}\n.cm-empty-state h3 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 8px;\n}\n.cm-empty-state p {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin-bottom: 0;\n}\n.cm-detail-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 20px 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  flex-wrap: wrap;\n  overflow: hidden;\n}\n.cm-detail-header__avatar {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      rgb(3.7192546584, 96.0807453416, 88.6422360248));\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.cm-detail-header__info {\n  flex: 1;\n  min-width: 0;\n  min-width: 200px;\n}\n.cm-detail-header__name {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cm-detail-header__meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n}\n.cm-detail-header__actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n  flex-shrink: 0;\n}\n.cm-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n@media (max-width: 900px) {\n  .cm-kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.cm-kpi-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 16px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.cm-kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cm-kpi-card__icon i {\n  font-size: 1.2rem;\n}\n.cm-kpi-card__icon--blue {\n  background: #eff6ff;\n  color: #3b82f6;\n}\n.cm-kpi-card__icon--green {\n  background: #f0fdf4;\n  color: #22c55e;\n}\n.cm-kpi-card__icon--teal {\n  background: rgba(6, 155, 143, 0.1);\n  color: #069b8f;\n}\n.cm-kpi-card__icon--orange {\n  background: #fff7ed;\n  color: #f97316;\n}\n.cm-kpi-card__body {\n  display: flex;\n  flex-direction: column;\n}\n.cm-kpi-card__value {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.2;\n}\n.cm-kpi-card__label {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.cm-kpi-card--link {\n  text-decoration: none;\n  cursor: pointer;\n  transition: box-shadow 0.15s, transform 0.15s;\n}\n.cm-kpi-card--link:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  transform: translateY(-2px);\n}\n.cm-kpi-card--link:hover .cm-kpi-card__label {\n  color: #069b8f;\n}\n.cm-kpi-skeleton {\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f1f5f9 25%,\n      #e2e8f0 50%,\n      #f1f5f9 75%);\n  background-size: 200% 100%;\n  animation: cm-shimmer 1.4s infinite;\n  vertical-align: middle;\n}\n.cm-quick-links {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.cm-quick-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 16px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.83rem;\n  font-weight: 500;\n  color: #0f172a;\n  text-decoration: none;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  transition: all 0.15s;\n}\n.cm-quick-link i {\n  font-size: 0.95rem;\n  color: #069b8f;\n}\n.cm-quick-link__arrow {\n  color: #94a3b8 !important;\n  margin-left: auto;\n}\n.cm-quick-link:hover {\n  background: rgba(6, 155, 143, 0.05);\n  border-color: #069b8f;\n  color: #069b8f;\n}\n.cm-quick-link:hover .cm-quick-link__arrow {\n  color: #069b8f !important;\n}\n.cm-detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .cm-detail-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.cm-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.cm-card__header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.cm-card__icon {\n  font-size: 1rem;\n  color: #069b8f;\n}\n.cm-card__title {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.cm-card__body {\n  padding: 16px 18px;\n}\n.cm-card__footer {\n  padding: 10px 18px 14px;\n  border-top: 1px solid #f1f5f9;\n}\n.cm-info-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.cm-info-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 9px 0;\n  border-bottom: 1px solid #f1f5f9;\n  gap: 12px;\n}\n.cm-info-row:last-child {\n  border-bottom: none;\n}\n.cm-info-row__label {\n  font-size: 0.8rem;\n  color: #64748b;\n  flex-shrink: 0;\n  width: 130px;\n  padding-top: 1px;\n}\n.cm-info-row__value {\n  font-size: 0.85rem;\n  color: #0f172a;\n  text-align: right;\n  word-break: break-word;\n}\n.cm-client-block {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.cm-client-block__avatar {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.cm-client-block__info {\n  flex: 1;\n}\n.cm-client-block__name {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.cm-client-block__meta {\n  font-size: 0.78rem;\n  color: #64748b;\n  margin: 0 0 2px;\n  display: flex;\n  align-items: center;\n}\n.cm-badge {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.73rem;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 999px;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  background: #f1f5f9;\n  color: #475569;\n}\n.cm-badge[data-status=active] {\n  background: #dcfce7;\n  color: #166534;\n}\n.cm-badge[data-status=inactive] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.cm-badge[data-status=suspendue] {\n  background: #fff3cd;\n  color: #92400e;\n}\n.cm-badge--type {\n  background: #ede9fe;\n  color: #5b21b6;\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n.cm-meta-chip {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.78rem;\n  color: #64748b;\n  background: #f1f5f9;\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n.cm-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer;\n  border: 1px solid transparent;\n  text-decoration: none;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.cm-btn--primary {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n}\n.cm-btn--primary:hover {\n  background: rgb(4.4795031056, 115.7204968944, 106.7614906832);\n}\n.cm-btn--outline {\n  background: #fff;\n  color: #069b8f;\n  border-color: #069b8f;\n}\n.cm-btn--outline:hover {\n  background: rgba(6, 155, 143, 0.06);\n}\n.cm-btn--ghost {\n  background: #f1f5f9;\n  color: #334155;\n  border-color: #e2e8f0;\n}\n.cm-btn--ghost:hover {\n  background: #e2e8f0;\n}\n.cm-btn--warn {\n  color: #92400e;\n  background: #fff3cd;\n  border-color: #fde68a;\n}\n.cm-btn--warn:hover {\n  background: #fde68a;\n}\n.cm-btn--danger {\n  color: #991b1b;\n  background: #fff1f0;\n  border-color: #f5c6c3;\n}\n.cm-btn--danger:hover {\n  background: #f5c6c3;\n}\n.cm-btn--success {\n  color: #166534;\n  background: #dcfce7;\n  border-color: #bbf7d0;\n}\n.cm-btn--success:hover {\n  background: #bbf7d0;\n}\n.cm-btn--sm {\n  padding: 4px 10px;\n  font-size: 0.78rem;\n}\n.cm-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cm-mono {\n  font-family: "Courier New", monospace;\n  font-size: 0.82rem;\n}\n.cm-link {\n  color: #069b8f;\n  text-decoration: none;\n}\n.cm-link:hover {\n  text-decoration: underline;\n}\n.cm-info-empty {\n  text-align: center;\n  padding: 24px;\n  color: #94a3b8;\n  font-size: 0.85rem;\n}\n.cm-info-empty i {\n  font-size: 1.5rem;\n  display: block;\n  margin-bottom: 6px;\n}\n.cm-skeleton {\n  height: 56px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      90deg,\n      #f1f5f9 25%,\n      #e2e8f0 50%,\n      #f1f5f9 75%);\n  background-size: 200% 100%;\n  animation: cm-shimmer 1.4s infinite;\n}\n@keyframes cm-shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@keyframes cm-rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cm-spin {\n  animation: cm-rotate 0.8s linear infinite;\n  display: inline-block;\n}\n/*# sourceMappingURL=companymanagement.component.css.map */\n'] }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }, { type: ClientCompanyService }, { type: FormationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyManagementComponent, { className: "CompanyManagementComponent", filePath: "src/app/features/superadmin/companymanagement/companymanagement.component.ts", lineNumber: 24 });
})();
export {
  CompanyManagementComponent
};
//# sourceMappingURL=chunk-AHC4HXZH.js.map
