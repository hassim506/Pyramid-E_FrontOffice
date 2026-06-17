import {
  httpErrorMessage
} from "./chunk-RL3SOXDI.js";
import {
  ClientCompanyService
} from "./chunk-KF3OLSX7.js";
import {
  AuthService
} from "./chunk-IEFOQSOV.js";
import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-46QRNFHM.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  TitleCasePipe
} from "./chunk-MNWNTO2T.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  catchError,
  forkJoin,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/company-details/company-details.component.ts
function CompanyDetailsComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("ID: ", ctx_r0.company.id);
  }
}
function CompanyDetailsComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function CompanyDetailsComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editCompany());
    });
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2, "Modifier ");
    \u0275\u0275elementEnd();
  }
}
function CompanyDetailsComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function CompanyDetailsComponent_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.archiveCompany());
    });
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2, "Archiver ");
    \u0275\u0275elementEnd();
  }
}
function CompanyDetailsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "div", 21)(3, "span", 22);
    \u0275\u0275text(4, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 23);
    \u0275\u0275text(6, "Chargement des d\xE9tails de l'entreprise...");
    \u0275\u0275elementEnd()()();
  }
}
function CompanyDetailsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275text(2);
    \u0275\u0275element(3, "button", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function CompanyDetailsComponent_div_15_h5_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.employeeCount);
  }
}
function CompanyDetailsComponent_div_15_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 88);
  }
}
function CompanyDetailsComponent_div_15_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 44)(2, "h6", 45);
    \u0275\u0275element(3, "i", 89);
    \u0275\u0275text(4, " Client Associ\xE9 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 47)(6, "div", 2)(7, "div", 90);
    \u0275\u0275element(8, "i", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 92)(10, "h6", 86);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 93);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "small", 23);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.company.client.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 3, ctx_r0.company.client.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.company.client.email);
  }
}
function CompanyDetailsComponent_div_15_h3_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.employeeCount);
  }
}
function CompanyDetailsComponent_div_15_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 94);
  }
}
function CompanyDetailsComponent_div_15_div_131_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 104)(2, "div", 2)(3, "div", 105);
    \u0275\u0275element(4, "i", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 107);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 104);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 104)(10, "span", 108);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 104)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 104);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const employee_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", employee_r4.prenom, " ", employee_r4.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r4.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, employee_r4.role));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(employee_r4.est_actif ? "badge bg-success-subtle text-success" : "badge bg-warning-subtle text-warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", employee_r4.est_actif ? "Actif" : "Inactif", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(employee_r4.created_at));
  }
}
function CompanyDetailsComponent_div_15_div_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 95)(2, "h6", 45);
    \u0275\u0275element(3, "i", 96);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 97);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 98)(8, "div", 99)(9, "table", 100)(10, "thead", 101)(11, "tr")(12, "th", 102);
    \u0275\u0275text(13, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 102);
    \u0275\u0275text(15, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 102);
    \u0275\u0275text(17, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 102);
    \u0275\u0275text(19, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 102);
    \u0275\u0275text(21, "Inscription");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, CompanyDetailsComponent_div_15_div_131_tr_23_Template, 18, 10, "tr", 103);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Employ\xE9s Inscrits (", ctx_r0.employeeCount, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.employeeCount, " utilisateurs");
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r0.employees);
  }
}
function CompanyDetailsComponent_div_15_div_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 44)(2, "h6", 45);
    \u0275\u0275element(3, "i", 109);
    \u0275\u0275text(4, " D\xE9tails du Client ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 47)(6, "div", 27)(7, "div", 64)(8, "div", 75)(9, "label", 76);
    \u0275\u0275text(10, "Nom du client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 60);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 64)(14, "div", 75)(15, "label", 76);
    \u0275\u0275text(16, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 108);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 64)(21, "div", 75)(22, "label", 76);
    \u0275\u0275text(23, "Contact principal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 60);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 64)(27, "div", 75)(28, "label", 76);
    \u0275\u0275text(29, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 60);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.company.client.nom);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 4, ctx_r0.company.client.type));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.company.client.contact_principal);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.company.client.telephone);
  }
}
function CompanyDetailsComponent_div_15_div_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275element(1, "div", 111);
    \u0275\u0275elementStart(2, "div", 85)(3, "h6", 86);
    \u0275\u0275text(4, "Profil mis \xE0 jour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.company.updated_at));
  }
}
function CompanyDetailsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "div", 30)(4, "div", 31)(5, "div", 32);
    \u0275\u0275element(6, "i", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h4", 34);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 35);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 36);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 37)(15, "div", 38)(16, "div", 39)(17, "h5", 40);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 41);
    \u0275\u0275text(20, "Effectif d\xE9clar\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 38)(22, "div", 39);
    \u0275\u0275template(23, CompanyDetailsComponent_div_15_h5_23_Template, 2, 1, "h5", 42)(24, CompanyDetailsComponent_div_15_div_24_Template, 1, 0, "div", 43);
    \u0275\u0275elementStart(25, "p", 41);
    \u0275\u0275text(26, "Sur la plateforme");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(27, "div", 29)(28, "div", 44)(29, "h6", 45);
    \u0275\u0275element(30, "i", 46);
    \u0275\u0275text(31, " Informations de Contact ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 47)(33, "div", 48)(34, "div", 49);
    \u0275\u0275element(35, "i", 50);
    \u0275\u0275elementStart(36, "div")(37, "p", 51);
    \u0275\u0275text(38, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "a", 52);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 49);
    \u0275\u0275element(42, "i", 53);
    \u0275\u0275elementStart(43, "div")(44, "p", 51);
    \u0275\u0275text(45, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "a", 54);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 55);
    \u0275\u0275element(49, "i", 56);
    \u0275\u0275elementStart(50, "div")(51, "p", 51);
    \u0275\u0275text(52, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "p", 57);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 58);
    \u0275\u0275element(56, "i", 59);
    \u0275\u0275elementStart(57, "div")(58, "p", 51);
    \u0275\u0275text(59, "SIRET/NINEA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "p", 60);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(62, CompanyDetailsComponent_div_15_div_62_Template, 17, 5, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 62)(64, "div", 63)(65, "div", 64)(66, "div", 65)(67, "div", 47)(68, "div", 2)(69, "div", 66);
    \u0275\u0275element(70, "i", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div");
    \u0275\u0275template(72, CompanyDetailsComponent_div_15_h3_72_Template, 2, 1, "h3", 68)(73, CompanyDetailsComponent_div_15_div_73_Template, 1, 0, "div", 69);
    \u0275\u0275elementStart(74, "p", 70);
    \u0275\u0275text(75, "Employ\xE9s inscrits sur la plateforme");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(76, "div", 64)(77, "div", 71)(78, "div", 47)(79, "div", 2)(80, "div", 66);
    \u0275\u0275element(81, "i", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div")(83, "h3", 73);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "p", 70);
    \u0275\u0275text(86, "Employ\xE9s actifs");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(87, "div", 29)(88, "div", 44)(89, "h6", 45);
    \u0275\u0275element(90, "i", 74);
    \u0275\u0275text(91, " Informations G\xE9n\xE9rales ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 47)(93, "div", 27)(94, "div", 64)(95, "div", 75)(96, "label", 76);
    \u0275\u0275text(97, "Nom de l'entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "p", 60);
    \u0275\u0275text(99);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(100, "div", 64)(101, "div", 75)(102, "label", 76);
    \u0275\u0275text(103, "SIRET/NINEA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "p", 60);
    \u0275\u0275text(105);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(106, "div", 64)(107, "div", 75)(108, "label", 76);
    \u0275\u0275text(109, "Secteur d'activit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "p", 60);
    \u0275\u0275text(111);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(112, "div", 64)(113, "div", 75)(114, "label", 76);
    \u0275\u0275text(115, "Effectif d\xE9clar\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "p", 60);
    \u0275\u0275text(117);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(118, "div", 64)(119, "div", 75)(120, "label", 76);
    \u0275\u0275text(121, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "span", 77);
    \u0275\u0275text(123);
    \u0275\u0275pipe(124, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(125, "div", 64)(126, "div", 75)(127, "label", 76);
    \u0275\u0275text(128, "Date d'enregistrement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "p", 60);
    \u0275\u0275text(130);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(131, CompanyDetailsComponent_div_15_div_131_Template, 24, 3, "div", 78)(132, CompanyDetailsComponent_div_15_div_132_Template, 32, 6, "div", 78);
    \u0275\u0275elementStart(133, "div", 79)(134, "div", 44)(135, "h6", 45);
    \u0275\u0275element(136, "i", 80);
    \u0275\u0275text(137, " Activit\xE9 R\xE9cente ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(138, "div", 47)(139, "div", 81);
    \u0275\u0275template(140, CompanyDetailsComponent_div_15_div_140_Template, 7, 1, "div", 82);
    \u0275\u0275elementStart(141, "div", 83);
    \u0275\u0275element(142, "div", 84);
    \u0275\u0275elementStart(143, "div", 85)(144, "h6", 86);
    \u0275\u0275text(145, "Entreprise enregistr\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "p", 41);
    \u0275\u0275text(147);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.company.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.company.secteur_activite);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getStatusClass(ctx_r0.company.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 32, ctx_r0.company.statut), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.company.taille_effectif || 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r0.loadingEmployees);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingEmployees);
    \u0275\u0275advance(15);
    \u0275\u0275property("href", \u0275\u0275interpolate1("mailto:", ctx_r0.company.email), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.company.email);
    \u0275\u0275advance(6);
    \u0275\u0275property("href", \u0275\u0275interpolate1("tel:", ctx_r0.company.telephone), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.company.telephone);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.company.adresse);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.company.ninea);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.company.client);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", !ctx_r0.loadingEmployees);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingEmployees);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.getActiveEmployeesCount());
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r0.company.nom);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.company.ninea);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.company.secteur_activite);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.company.taille_effectif, " employ\xE9s");
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r0.getStatusClass(ctx_r0.company.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(124, 34, ctx_r0.company.statut), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.company.created_at));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.employees.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.company.client);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.company.updated_at);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.company.created_at));
  }
}
var CompanyDetailsComponent = class _CompanyDetailsComponent {
  route;
  router;
  clientCompanyService;
  authService;
  http;
  company = null;
  loading = true;
  error = "";
  employeeCount = 0;
  employees = [];
  loadingEmployees = false;
  currentUser;
  constructor(route, router, clientCompanyService, authService, http) {
    this.route = route;
    this.router = router;
    this.clientCompanyService = clientCompanyService;
    this.authService = authService;
    this.http = http;
  }
  get headers() {
    const token = localStorage.getItem("pyramide_token");
    return new HttpHeaders({ "Authorization": `Bearer ${token}`, "Content-Type": "application/json" });
  }
  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.route.params.subscribe((params) => {
      const companyId = +params["id"];
      if (companyId) {
        this.loadCompanyDetails(companyId);
      }
    });
  }
  loadCompanyDetails(id) {
    this.loading = true;
    this.error = "";
    forkJoin({
      company: this.http.get(`${environment.apiUrl}/mes-entreprises/${id}`, { headers: this.headers }).pipe(catchError(() => of(null))),
      employees: this.http.get(`${environment.apiUrl}/entreprises/${id}/employes`, { headers: this.headers }).pipe(catchError(() => of({ employes: [] })))
    }).subscribe({
      next: ({ company, employees }) => {
        if (!company || company.status === false) {
          this.error = company?.message || "Acc\xE8s non autoris\xE9 \xE0 cette entreprise";
          this.loading = false;
          return;
        }
        this.company = company.entreprise || company.data || company;
        const empData = employees?.employes || employees?.data || employees?.users || [];
        this.employees = Array.isArray(empData) ? empData : [];
        this.employeeCount = employees?.pagination?.total ?? this.employees.length;
        this.loading = false;
      },
      error: (err) => {
        this.error = httpErrorMessage(err, "Impossible de charger les donn\xE9es.");
        this.loading = false;
      }
    });
  }
  loadEmployeeCount(companyId) {
    this.loadingEmployees = true;
    this.http.get(`${environment.apiUrl}/entreprises/${companyId}/employes`, { headers: this.headers }).subscribe({
      next: (response) => {
        const empData = response?.employes || response?.data || [];
        this.employees = Array.isArray(empData) ? empData : [];
        this.employeeCount = response?.pagination?.total ?? this.employees.length;
        this.loadingEmployees = false;
      },
      error: () => {
        this.employeeCount = 0;
        this.loadingEmployees = false;
      }
    });
  }
  // Méthodes utilitaires pour l'affichage
  getEmployeesByRole(role) {
    return this.employees.filter((emp) => emp.role === role);
  }
  getActiveEmployeesCount() {
    return this.employees.filter((emp) => emp.est_actif).length;
  }
  // ...existing methods...
  goBack() {
    this.router.navigate(["/adminrh/adminrh-companymanagement"]);
  }
  editCompany() {
    if (this.company) {
      console.log("\xC9diter entreprise:", this.company);
    }
  }
  deleteCompany() {
    if (this.company && confirm(`Supprimer l'entreprise "${this.company.nom}" ?`)) {
      this.clientCompanyService.deleteCompany(this.company.id).subscribe({
        next: () => this.router.navigate(["/adminrh/adminrh-companymanagement"]),
        error: (error) => console.error("Erreur suppression:", error)
      });
    }
  }
  archiveCompany() {
    if (this.company && confirm(`Archiver l'entreprise "${this.company.nom}" ?`)) {
      this.clientCompanyService.deleteCompany(this.company.id).subscribe({
        next: () => this.router.navigate(["/adminrh/adminrh-companymanagement"]),
        error: (error) => console.error("Erreur archivage:", error)
      });
    }
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
  static \u0275fac = function CompanyDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ClientCompanyService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyDetailsComponent, selectors: [["app-company-details"]], decls: 16, vars: 6, consts: [[1, "container-fluid"], [1, "page-title", "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "d-flex", "align-items-center"], [1, "fw-bold", "mb-0"], [1, "isax", "isax-building", "me-2", "text-primary"], ["class", "badge bg-light text-dark ms-3", 4, "ngIf"], [1, "d-flex", "align-items-center", "gap-2"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "isax", "isax-arrow-left", "me-1"], ["class", "btn btn-primary btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-warning btn-sm", 3, "click", 4, "ngIf"], ["class", "d-flex justify-content-center align-items-center", "style", "min-height: 400px;", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "row g-4", 4, "ngIf"], [1, "badge", "bg-light", "text-dark", "ms-3"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "isax", "isax-edit", "me-1"], [1, "btn", "btn-outline-warning", "btn-sm", 3, "click"], [1, "isax", "isax-archive", "me-1"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "min-height", "400px"], [1, "text-center"], ["role", "status", 1, "spinner-border", "text-primary", "mb-3", 2, "width", "3rem", "height", "3rem"], [1, "visually-hidden"], [1, "text-muted"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "isax", "isax-info-circle", "me-2"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close"], [1, "row", "g-4"], [1, "col-xl-4", "col-lg-5"], [1, "card", "shadow-sm", "mb-4"], [1, "card-body", "text-center"], [1, "company-avatar", "mb-4"], [1, "avatar", "avatar-xxl", "avatar-rounded", "bg-gradient-primary", "text-white", "d-inline-flex", "align-items-center", "justify-content-center", "shadow"], [1, "isax", "isax-building", 2, "font-size", "2.5rem"], [1, "mb-2", "fw-bold"], [1, "text-muted", "mb-3", "fs-5"], [1, "px-3", "py-2", "fs-6"], [1, "row", "mt-4", "g-3"], [1, "col-6"], [1, "bg-light", "rounded", "p-3"], [1, "mb-1", "text-primary", "fw-bold"], [1, "text-muted", "mb-0", "fs-6"], ["class", "mb-1 text-success fw-bold", 4, "ngIf"], ["class", "spinner-border spinner-border-sm text-success", 4, "ngIf"], [1, "card-header", "bg-light"], [1, "mb-0", "fw-semibold"], [1, "isax", "isax-call", "me-2", "text-primary"], [1, "card-body"], [1, "contact-info"], [1, "d-flex", "align-items-center", "mb-3", "p-2", "bg-light", "rounded"], [1, "isax", "isax-sms", "me-3", "text-primary", "fs-5"], [1, "mb-1", "fs-6", "fw-medium", "text-muted"], [1, "text-primary", "fw-medium", 3, "href"], [1, "isax", "isax-call", "me-3", "text-success", "fs-5"], [1, "text-success", "fw-medium", 3, "href"], [1, "d-flex", "align-items-start", "mb-3", "p-2", "bg-light", "rounded"], [1, "isax", "isax-location", "me-3", "text-warning", "fs-5"], [1, "mb-0"], [1, "d-flex", "align-items-center", "p-2", "bg-light", "rounded"], [1, "isax", "isax-document", "me-3", "text-info", "fs-5"], [1, "mb-0", "fw-medium"], ["class", "card shadow-sm", 4, "ngIf"], [1, "col-xl-8", "col-lg-7"], [1, "row", "mb-4"], [1, "col-md-6"], [1, "card", "bg-gradient-primary", "text-white", "shadow-sm", "h-100"], [1, "me-3"], [1, "isax", "isax-people", "fs-1", "opacity-75"], ["class", "mb-1 fw-bold", 4, "ngIf"], ["class", "spinner-border spinner-border-sm", "role", "status", 4, "ngIf"], [1, "mb-0", "opacity-90"], [1, "card", "bg-gradient-success", "text-white", "shadow-sm", "h-100"], [1, "isax", "isax-user-tick", "fs-1", "opacity-75"], [1, "mb-1", "fw-bold"], [1, "isax", "isax-document", "me-2", "text-primary"], [1, "info-item"], [1, "form-label", "fw-semibold", "text-muted", "mb-1"], [1, "px-2", "py-1"], ["class", "card shadow-sm mb-4", 4, "ngIf"], [1, "card", "shadow-sm"], [1, "isax", "isax-clock", "me-2", "text-primary"], [1, "timeline"], ["class", "timeline-item d-flex mb-3", 4, "ngIf"], [1, "timeline-item", "d-flex"], [1, "timeline-marker", "bg-success", "rounded-circle", "me-3", "mt-1", 2, "width", "12px", "height", "12px"], [1, "timeline-content"], [1, "mb-1", "fw-semibold"], [1, "mb-1", "text-success", "fw-bold"], [1, "spinner-border", "spinner-border-sm", "text-success"], [1, "isax", "isax-people", "me-2", "text-primary"], [1, "avatar", "avatar-lg", "avatar-rounded", "flex-shrink-0", "me-3", "bg-gradient-info", "text-white", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-user", "fs-4"], [1, "flex-grow-1"], [1, "mb-1", "text-muted", "fs-6"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "card-header", "bg-light", "d-flex", "justify-content-between", "align-items-center"], [1, "isax", "isax-profile-2user", "me-2", "text-primary"], [1, "badge", "bg-primary"], [1, "card-body", "p-0"], [1, "table-responsive"], [1, "table", "table-hover", "mb-0"], [1, "table-light"], [1, "border-0", "fw-semibold"], [4, "ngFor", "ngForOf"], [1, "py-3"], [1, "avatar", "avatar-sm", "bg-light", "text-primary", "me-2", "d-flex", "align-items-center", "justify-content-center", "rounded"], [1, "isax", "isax-user"], [1, "fw-medium"], [1, "badge", "bg-info-subtle", "text-info"], [1, "isax", "isax-briefcase", "me-2", "text-primary"], [1, "timeline-item", "d-flex", "mb-3"], [1, "timeline-marker", "bg-primary", "rounded-circle", "me-3", "mt-1", 2, "width", "12px", "height", "12px"]], template: function CompanyDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275text(5, " D\xE9tails de l'Entreprise ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, CompanyDetailsComponent_span_6_Template, 2, 1, "span", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
      \u0275\u0275listener("click", function CompanyDetailsComponent_Template_button_click_8_listener() {
        return ctx.goBack();
      });
      \u0275\u0275element(9, "i", 8);
      \u0275\u0275text(10, "Retour ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, CompanyDetailsComponent_button_11_Template, 3, 0, "button", 9)(12, CompanyDetailsComponent_button_12_Template, 3, 0, "button", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(13, CompanyDetailsComponent_div_13_Template, 7, 0, "div", 11)(14, CompanyDetailsComponent_div_14_Template, 4, 1, "div", 12)(15, CompanyDetailsComponent_div_15_Template, 148, 36, "div", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.company);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.company);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.company);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.company);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TitleCasePipe], styles: ['\n\n.company-avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  font-size: 2.5rem;\n}\n.contact-info[_ngcontent-%COMP%]   .isax[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 20px;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 2rem;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 10px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: #e9ecef;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 2rem;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -2rem;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 3px solid #fff;\n  box-shadow: 0 0 0 3px #e9ecef;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  border-left: 3px solid var(--bs-primary);\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--bs-dark);\n  margin-bottom: 0.5rem;\n}\n@media (max-width: 768px) {\n  .page-title[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start !important;\n    gap: 1rem;\n  }\n  .company-avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=company-details.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-company-details", imports: [TitleCasePipe, CommonModule], template: `<div class="container-fluid">\r
  <!-- Header avec actions -->\r
  <div class="page-title d-flex align-items-center justify-content-between mb-4">\r
    <div class="d-flex align-items-center">\r
      <h4 class="fw-bold mb-0">\r
        <i class="isax isax-building me-2 text-primary"></i>\r
        D\xE9tails de l'Entreprise\r
      </h4>\r
      <span class="badge bg-light text-dark ms-3" *ngIf="company">ID: {{ company.id }}</span>\r
    </div>\r
    <div class="d-flex align-items-center gap-2">\r
      <button class="btn btn-outline-secondary btn-sm" (click)="goBack()">\r
        <i class="isax isax-arrow-left me-1"></i>Retour\r
      </button>\r
      <button class="btn btn-primary btn-sm" (click)="editCompany()" *ngIf="company">\r
        <i class="isax isax-edit me-1"></i>Modifier\r
      </button>\r
      <button class="btn btn-outline-warning btn-sm" (click)="archiveCompany()" *ngIf="company">\r
        <i class="isax isax-archive me-1"></i>Archiver\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- \xC9tats de chargement et d'erreur -->\r
  <div *ngIf="loading" class="d-flex justify-content-center align-items-center" style="min-height: 400px;">\r
    <div class="text-center">\r
      <div class="spinner-border text-primary mb-3" role="status" style="width: 3rem; height: 3rem;">\r
        <span class="visually-hidden">Chargement...</span>\r
      </div>\r
      <p class="text-muted">Chargement des d\xE9tails de l'entreprise...</p>\r
    </div>\r
  </div>\r
\r
  <div *ngIf="!loading && error" class="alert alert-danger alert-dismissible fade show" role="alert">\r
    <i class="isax isax-info-circle me-2"></i>\r
    {{ error }}\r
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\r
  </div>\r
\r
  <!-- Contenu principal -->\r
  <div *ngIf="!loading && company" class="row g-4">\r
    <!-- Sidebar gauche - Informations principales -->\r
    <div class="col-xl-4 col-lg-5">\r
      <!-- Profil de l'entreprise -->\r
      <div class="card shadow-sm mb-4">\r
        <div class="card-body text-center">\r
          <div class="company-avatar mb-4">\r
            <div class="avatar avatar-xxl avatar-rounded bg-gradient-primary text-white d-inline-flex align-items-center justify-content-center shadow">\r
              <i class="isax isax-building" style="font-size: 2.5rem;"></i>\r
            </div>\r
          </div>\r
          <h4 class="mb-2 fw-bold">{{ company.nom }}</h4>\r
          <p class="text-muted mb-3 fs-5">{{ company.secteur_activite }}</p>\r
          <span [class]="getStatusClass(company.statut)" class="px-3 py-2 fs-6">\r
            {{ company.statut | titlecase }}\r
          </span>\r
          \r
          <!-- Statistiques rapides -->\r
          <div class="row mt-4 g-3">\r
            <div class="col-6">\r
              <div class="bg-light rounded p-3">\r
                <h5 class="mb-1 text-primary fw-bold">{{ company.taille_effectif || 0 }}</h5>\r
                <p class="text-muted mb-0 fs-6">Effectif d\xE9clar\xE9</p>\r
              </div>\r
            </div>\r
            <div class="col-6">\r
              <div class="bg-light rounded p-3">\r
                <h5 class="mb-1 text-success fw-bold" *ngIf="!loadingEmployees">{{ employeeCount }}</h5>\r
                <div *ngIf="loadingEmployees" class="spinner-border spinner-border-sm text-success"></div>\r
                <p class="text-muted mb-0 fs-6">Sur la plateforme</p>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Informations de contact -->\r
      <div class="card shadow-sm mb-4">\r
        <div class="card-header bg-light">\r
          <h6 class="mb-0 fw-semibold">\r
            <i class="isax isax-call me-2 text-primary"></i>\r
            Informations de Contact\r
          </h6>\r
        </div>\r
        <div class="card-body">\r
          <div class="contact-info">\r
            <div class="d-flex align-items-center mb-3 p-2 bg-light rounded">\r
              <i class="isax isax-sms me-3 text-primary fs-5"></i>\r
              <div>\r
                <p class="mb-1 fs-6 fw-medium text-muted">Email</p>\r
                <a href="mailto:{{ company.email }}" class="text-primary fw-medium">{{ company.email }}</a>\r
              </div>\r
            </div>\r
            <div class="d-flex align-items-center mb-3 p-2 bg-light rounded">\r
              <i class="isax isax-call me-3 text-success fs-5"></i>\r
              <div>\r
                <p class="mb-1 fs-6 fw-medium text-muted">T\xE9l\xE9phone</p>\r
                <a href="tel:{{ company.telephone }}" class="text-success fw-medium">{{ company.telephone }}</a>\r
              </div>\r
            </div>\r
            <div class="d-flex align-items-start mb-3 p-2 bg-light rounded">\r
              <i class="isax isax-location me-3 text-warning fs-5"></i>\r
              <div>\r
                <p class="mb-1 fs-6 fw-medium text-muted">Adresse</p>\r
                <p class="mb-0">{{ company.adresse }}</p>\r
              </div>\r
            </div>\r
            <div class="d-flex align-items-center p-2 bg-light rounded">\r
              <i class="isax isax-document me-3 text-info fs-5"></i>\r
              <div>\r
                <p class="mb-1 fs-6 fw-medium text-muted">SIRET/NINEA</p>\r
                <p class="mb-0 fw-medium">{{ company.ninea }}</p>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Client associ\xE9 -->\r
      <div class="card shadow-sm" *ngIf="company.client">\r
        <div class="card-header bg-light">\r
          <h6 class="mb-0 fw-semibold">\r
            <i class="isax isax-people me-2 text-primary"></i>\r
            Client Associ\xE9\r
          </h6>\r
        </div>\r
        <div class="card-body">\r
          <div class="d-flex align-items-center">\r
            <div class="avatar avatar-lg avatar-rounded flex-shrink-0 me-3 bg-gradient-info text-white d-flex align-items-center justify-content-center">\r
              <i class="isax isax-user fs-4"></i>\r
            </div>\r
            <div class="flex-grow-1">\r
              <h6 class="mb-1 fw-semibold">{{ company.client.nom }}</h6>\r
              <p class="mb-1 text-muted fs-6">{{ company.client.type | titlecase }}</p>\r
              <small class="text-muted">{{ company.client.email }}</small>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Contenu principal - D\xE9tails -->\r
    <div class="col-xl-8 col-lg-7">\r
      <!-- Statistiques des employ\xE9s -->\r
      <div class="row mb-4">\r
        <div class="col-md-6">\r
          <div class="card bg-gradient-primary text-white shadow-sm h-100">\r
            <div class="card-body">\r
              <div class="d-flex align-items-center">\r
                <div class="me-3">\r
                  <i class="isax isax-people fs-1 opacity-75"></i>\r
                </div>\r
                <div>\r
                  <h3 class="mb-1 fw-bold" *ngIf="!loadingEmployees">{{ employeeCount }}</h3>\r
                  <div *ngIf="loadingEmployees" class="spinner-border spinner-border-sm" role="status"></div>\r
                  <p class="mb-0 opacity-90">Employ\xE9s inscrits sur la plateforme</p>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="col-md-6">\r
          <div class="card bg-gradient-success text-white shadow-sm h-100">\r
            <div class="card-body">\r
              <div class="d-flex align-items-center">\r
                <div class="me-3">\r
                  <i class="isax isax-user-tick fs-1 opacity-75"></i>\r
                </div>\r
                <div>\r
                  <h3 class="mb-1 fw-bold">{{ getActiveEmployeesCount() }}</h3>\r
                  <p class="mb-0 opacity-90">Employ\xE9s actifs</p>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Informations g\xE9n\xE9rales -->\r
      <div class="card shadow-sm mb-4">\r
        <div class="card-header bg-light">\r
          <h6 class="mb-0 fw-semibold">\r
            <i class="isax isax-document me-2 text-primary"></i>\r
            Informations G\xE9n\xE9rales\r
          </h6>\r
        </div>\r
        <div class="card-body">\r
          <div class="row g-4">\r
            <div class="col-md-6">\r
              <div class="info-item">\r
                <label class="form-label fw-semibold text-muted mb-1">Nom de l'entreprise</label>\r
                <p class="mb-0 fw-medium">{{ company.nom }}</p>\r
              </div>\r
            </div>\r
            <div class="col-md-6">\r
              <div class="info-item">\r
                <label class="form-label fw-semibold text-muted mb-1">SIRET/NINEA</label>\r
                <p class="mb-0 fw-medium">{{ company.ninea }}</p>\r
              </div>\r
            </div>\r
            <div class="col-md-6">\r
              <div class="info-item">\r
                <label class="form-label fw-semibold text-muted mb-1">Secteur d'activit\xE9</label>\r
                <p class="mb-0 fw-medium">{{ company.secteur_activite }}</p>\r
              </div>\r
            </div>\r
            <div class="col-md-6">\r
              <div class="info-item">\r
                <label class="form-label fw-semibold text-muted mb-1">Effectif d\xE9clar\xE9</label>\r
                <p class="mb-0 fw-medium">{{ company.taille_effectif }} employ\xE9s</p>\r
              </div>\r
            </div>\r
            <div class="col-md-6">\r
              <div class="info-item">\r
                <label class="form-label fw-semibold text-muted mb-1">Statut</label>\r
                <span [class]="getStatusClass(company.statut)" class="px-2 py-1">\r
                  {{ company.statut | titlecase }}\r
                </span>\r
              </div>\r
            </div>\r
            <div class="col-md-6">\r
              <div class="info-item">\r
                <label class="form-label fw-semibold text-muted mb-1">Date d'enregistrement</label>\r
                <p class="mb-0 fw-medium">{{ formatDate(company.created_at) }}</p>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Liste des employ\xE9s -->\r
      <div class="card shadow-sm mb-4" *ngIf="employees.length > 0">\r
        <div class="card-header bg-light d-flex justify-content-between align-items-center">\r
          <h6 class="mb-0 fw-semibold">\r
            <i class="isax isax-profile-2user me-2 text-primary"></i>\r
            Employ\xE9s Inscrits ({{ employeeCount }})\r
          </h6>\r
          <span class="badge bg-primary">{{ employeeCount }} utilisateurs</span>\r
        </div>\r
        <div class="card-body p-0">\r
          <div class="table-responsive">\r
            <table class="table table-hover mb-0">\r
              <thead class="table-light">\r
                <tr>\r
                  <th class="border-0 fw-semibold">Nom</th>\r
                  <th class="border-0 fw-semibold">Email</th>\r
                  <th class="border-0 fw-semibold">R\xF4le</th>\r
                  <th class="border-0 fw-semibold">Statut</th>\r
                  <th class="border-0 fw-semibold">Inscription</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr *ngFor="let employee of employees">\r
                  <td class="py-3">\r
                    <div class="d-flex align-items-center">\r
                      <div class="avatar avatar-sm bg-light text-primary me-2 d-flex align-items-center justify-content-center rounded">\r
                        <i class="isax isax-user"></i>\r
                      </div>\r
                      <span class="fw-medium">{{ employee.prenom }} {{ employee.nom }}</span>\r
                    </div>\r
                  </td>\r
                  <td class="py-3">{{ employee.email }}</td>\r
                  <td class="py-3">\r
                    <span class="badge bg-info-subtle text-info">{{ employee.role | titlecase }}</span>\r
                  </td>\r
                  <td class="py-3">\r
                    <span [class]="employee.est_actif ? 'badge bg-success-subtle text-success' : 'badge bg-warning-subtle text-warning'">\r
                      {{ employee.est_actif ? 'Actif' : 'Inactif' }}\r
                    </span>\r
                  </td>\r
                  <td class="py-3">{{ formatDate(employee.created_at) }}</td>\r
                </tr>\r
              </tbody>\r
            </table>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- D\xE9tails du client -->\r
      <div class="card shadow-sm mb-4" *ngIf="company.client">\r
        <div class="card-header bg-light">\r
          <h6 class="mb-0 fw-semibold">\r
            <i class="isax isax-briefcase me-2 text-primary"></i>\r
            D\xE9tails du Client\r
          </h6>\r
        </div>\r
        <div class="card-body">\r
          <div class="row g-4">\r
            <div class="col-md-6">\r
              <div class="info-item">\r
                <label class="form-label fw-semibold text-muted mb-1">Nom du client</label>\r
                <p class="mb-0 fw-medium">{{ company.client.nom }}</p>\r
              </div>\r
            </div>\r
            <div class="col-md-6">\r
              <div class="info-item">\r
                <label class="form-label fw-semibold text-muted mb-1">Type</label>\r
                <span class="badge bg-info-subtle text-info">{{ company.client.type | titlecase }}</span>\r
              </div>\r
            </div>\r
            <div class="col-md-6">\r
              <div class="info-item">\r
                <label class="form-label fw-semibold text-muted mb-1">Contact principal</label>\r
                <p class="mb-0 fw-medium">{{ company.client.contact_principal }}</p>\r
              </div>\r
            </div>\r
            <div class="col-md-6">\r
              <div class="info-item">\r
                <label class="form-label fw-semibold text-muted mb-1">T\xE9l\xE9phone</label>\r
                <p class="mb-0 fw-medium">{{ company.client.telephone }}</p>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Timeline d'activit\xE9 -->\r
      <div class="card shadow-sm">\r
        <div class="card-header bg-light">\r
          <h6 class="mb-0 fw-semibold">\r
            <i class="isax isax-clock me-2 text-primary"></i>\r
            Activit\xE9 R\xE9cente\r
          </h6>\r
        </div>\r
        <div class="card-body">\r
          <div class="timeline">\r
            <div class="timeline-item d-flex mb-3" *ngIf="company.updated_at">\r
              <div class="timeline-marker bg-primary rounded-circle me-3 mt-1" style="width: 12px; height: 12px;"></div>\r
              <div class="timeline-content">\r
                <h6 class="mb-1 fw-semibold">Profil mis \xE0 jour</h6>\r
                <p class="text-muted mb-0 fs-6">{{ formatDate(company.updated_at) }}</p>\r
              </div>\r
            </div>\r
            <div class="timeline-item d-flex">\r
              <div class="timeline-marker bg-success rounded-circle me-3 mt-1" style="width: 12px; height: 12px;"></div>\r
              <div class="timeline-content">\r
                <h6 class="mb-1 fw-semibold">Entreprise enregistr\xE9e</h6>\r
                <p class="text-muted mb-0 fs-6">{{ formatDate(company.created_at) }}</p>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ['/* src/app/features/adminrh/company-details/company-details.component.scss */\n.company-avatar .avatar {\n  width: 120px;\n  height: 120px;\n  font-size: 2.5rem;\n}\n.contact-info .isax {\n  font-size: 1.2rem;\n  width: 20px;\n}\n.timeline {\n  position: relative;\n  padding-left: 2rem;\n}\n.timeline::before {\n  content: "";\n  position: absolute;\n  left: 10px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: #e9ecef;\n}\n.timeline .timeline-item {\n  position: relative;\n  margin-bottom: 2rem;\n}\n.timeline .timeline-item:last-child {\n  margin-bottom: 0;\n}\n.timeline .timeline-item .timeline-marker {\n  position: absolute;\n  left: -2rem;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 3px solid #fff;\n  box-shadow: 0 0 0 3px #e9ecef;\n}\n.timeline .timeline-item .timeline-content {\n  background: #f8f9fa;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  border-left: 3px solid var(--bs-primary);\n}\n.timeline .timeline-item .timeline-content h6 {\n  color: var(--bs-dark);\n  margin-bottom: 0.5rem;\n}\n@media (max-width: 768px) {\n  .page-title {\n    flex-direction: column;\n    align-items: flex-start !important;\n    gap: 1rem;\n  }\n  .company-avatar .avatar {\n    width: 80px;\n    height: 80px;\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=company-details.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: ClientCompanyService }, { type: AuthService }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyDetailsComponent, { className: "CompanyDetailsComponent", filePath: "app/features/adminrh/company-details/company-details.component.ts", lineNumber: 20 });
})();
export {
  CompanyDetailsComponent
};
//# sourceMappingURL=chunk-GTNOZZRP.js.map
