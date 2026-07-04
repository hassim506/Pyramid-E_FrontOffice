import {
  UserService
} from "./chunk-GVIVIINZ.js";
import {
  CompanyAddComponent
} from "./chunk-5AVR6MGF.js";
import {
  ClientCompanyService
} from "./chunk-AOQ7MVQS.js";
import "./chunk-K7E3GT3E.js";
import "./chunk-IKOSZIEY.js";
import {
  ActivatedRoute,
  Router
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
  forkJoin,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
} from "./chunk-VTSSTHJF.js";
import "./chunk-4MWRP73S.js";

// src/app/features/superadmin/company-details/company-details.component.ts
function CompanyDetailsComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
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
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function CompanyDetailsComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editCompany());
    });
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275text(2, "Modifier ");
    \u0275\u0275elementEnd();
  }
}
function CompanyDetailsComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function CompanyDetailsComponent_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.deleteCompany());
    });
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275text(2, "Supprimer ");
    \u0275\u0275elementEnd();
  }
}
function CompanyDetailsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "span", 23);
    \u0275\u0275text(4, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 24);
    \u0275\u0275text(6, "Chargement des d\xE9tails de l'entreprise...");
    \u0275\u0275elementEnd()()();
  }
}
function CompanyDetailsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275text(2);
    \u0275\u0275element(3, "button", 27);
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
    \u0275\u0275elementStart(0, "h5", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nbInscritsPlateforme);
  }
}
function CompanyDetailsComponent_div_15_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 95);
  }
}
function CompanyDetailsComponent_div_15_h5_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nbActifsPlateforme);
  }
}
function CompanyDetailsComponent_div_15_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 97);
  }
}
function CompanyDetailsComponent_div_15_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 47)(2, "h6", 48);
    \u0275\u0275element(3, "i", 98);
    \u0275\u0275text(4, " Client Associ\xE9 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 50)(6, "div", 2)(7, "div", 99);
    \u0275\u0275element(8, "i", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 101)(10, "h6", 93);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 102);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "small", 24);
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
function CompanyDetailsComponent_div_15_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nbInscritsPlateforme);
  }
}
function CompanyDetailsComponent_div_15_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 76);
  }
}
function CompanyDetailsComponent_div_15_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nbActifsPlateforme);
  }
}
function CompanyDetailsComponent_div_15_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 76);
  }
}
function CompanyDetailsComponent_div_15_div_148_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 112)(2, "div", 2)(3, "div", 113);
    \u0275\u0275element(4, "i", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 115);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 112);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 112)(10, "span", 116);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 112)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 112);
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
function CompanyDetailsComponent_div_15_div_148_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 103)(2, "h6", 48);
    \u0275\u0275element(3, "i", 104);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 105);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 106)(8, "div", 107)(9, "table", 108)(10, "thead", 109)(11, "tr")(12, "th", 110);
    \u0275\u0275text(13, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 110);
    \u0275\u0275text(15, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 110);
    \u0275\u0275text(17, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 110);
    \u0275\u0275text(19, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 110);
    \u0275\u0275text(21, "Inscription");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, CompanyDetailsComponent_div_15_div_148_tr_23_Template, 18, 10, "tr", 111);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Employ\xE9s Inscrits (", ctx_r0.nbInscritsPlateforme, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.nbInscritsPlateforme, " utilisateurs");
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r0.employees);
  }
}
function CompanyDetailsComponent_div_15_div_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 47)(2, "h6", 48);
    \u0275\u0275element(3, "i", 117);
    \u0275\u0275text(4, " D\xE9tails du Client ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 50)(6, "div", 28)(7, "div", 81)(8, "div", 82)(9, "label", 83);
    \u0275\u0275text(10, "Nom du client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 63);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 81)(14, "div", 82)(15, "label", 83);
    \u0275\u0275text(16, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 116);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 81)(21, "div", 82)(22, "label", 83);
    \u0275\u0275text(23, "Contact principal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 63);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 81)(27, "div", 82)(28, "label", 83);
    \u0275\u0275text(29, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 63);
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
function CompanyDetailsComponent_div_15_div_157_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275element(1, "div", 119);
    \u0275\u0275elementStart(2, "div", 92)(3, "h6", 93);
    \u0275\u0275text(4, "Profil mis \xE0 jour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 42);
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
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "div", 31)(4, "div", 32)(5, "div", 33);
    \u0275\u0275element(6, "i", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h4", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 37);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 38)(15, "div", 39)(16, "div", 40)(17, "h5", 41);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 42);
    \u0275\u0275text(20, "Effectif d\xE9clar\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 39)(22, "div", 40);
    \u0275\u0275template(23, CompanyDetailsComponent_div_15_h5_23_Template, 2, 1, "h5", 43)(24, CompanyDetailsComponent_div_15_div_24_Template, 1, 0, "div", 44);
    \u0275\u0275elementStart(25, "p", 42);
    \u0275\u0275text(26, "Inscrits");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 39)(28, "div", 40);
    \u0275\u0275template(29, CompanyDetailsComponent_div_15_h5_29_Template, 2, 1, "h5", 45)(30, CompanyDetailsComponent_div_15_div_30_Template, 1, 0, "div", 46);
    \u0275\u0275elementStart(31, "p", 42);
    \u0275\u0275text(32, "Actifs");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(33, "div", 30)(34, "div", 47)(35, "h6", 48);
    \u0275\u0275element(36, "i", 49);
    \u0275\u0275text(37, " Informations de Contact ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 50)(39, "div", 51)(40, "div", 52);
    \u0275\u0275element(41, "i", 53);
    \u0275\u0275elementStart(42, "div")(43, "p", 54);
    \u0275\u0275text(44, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "a", 55);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 52);
    \u0275\u0275element(48, "i", 56);
    \u0275\u0275elementStart(49, "div")(50, "p", 54);
    \u0275\u0275text(51, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "a", 57);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 58);
    \u0275\u0275element(55, "i", 59);
    \u0275\u0275elementStart(56, "div")(57, "p", 54);
    \u0275\u0275text(58, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "p", 60);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 61);
    \u0275\u0275element(62, "i", 62);
    \u0275\u0275elementStart(63, "div")(64, "p", 54);
    \u0275\u0275text(65, "SIRET/NINEA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "p", 63);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(68, CompanyDetailsComponent_div_15_div_68_Template, 17, 5, "div", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 65)(70, "div", 66)(71, "div", 67)(72, "div", 68)(73, "div", 50)(74, "div", 2)(75, "div", 69);
    \u0275\u0275element(76, "i", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div")(78, "h3", 71);
    \u0275\u0275text(79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "p", 72);
    \u0275\u0275text(81, "Effectif d\xE9clar\xE9");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(82, "div", 67)(83, "div", 73)(84, "div", 50)(85, "div", 2)(86, "div", 69);
    \u0275\u0275element(87, "i", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div");
    \u0275\u0275conditionalCreate(89, CompanyDetailsComponent_div_15_Conditional_89_Template, 2, 1, "h3", 75)(90, CompanyDetailsComponent_div_15_Conditional_90_Template, 1, 0, "div", 76);
    \u0275\u0275elementStart(91, "p", 77);
    \u0275\u0275text(92, "Inscrits plateforme");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(93, "div", 67)(94, "div", 78)(95, "div", 50)(96, "div", 2)(97, "div", 69);
    \u0275\u0275element(98, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div");
    \u0275\u0275conditionalCreate(100, CompanyDetailsComponent_div_15_Conditional_100_Template, 2, 1, "h3", 75)(101, CompanyDetailsComponent_div_15_Conditional_101_Template, 1, 0, "div", 76);
    \u0275\u0275elementStart(102, "p", 77);
    \u0275\u0275text(103, "Actifs plateforme");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(104, "div", 30)(105, "div", 47)(106, "h6", 48);
    \u0275\u0275element(107, "i", 80);
    \u0275\u0275text(108, " Informations G\xE9n\xE9rales ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div", 50)(110, "div", 28)(111, "div", 81)(112, "div", 82)(113, "label", 83);
    \u0275\u0275text(114, "Nom de l'entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "p", 63);
    \u0275\u0275text(116);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(117, "div", 81)(118, "div", 82)(119, "label", 83);
    \u0275\u0275text(120, "SIRET/NINEA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "p", 63);
    \u0275\u0275text(122);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(123, "div", 81)(124, "div", 82)(125, "label", 83);
    \u0275\u0275text(126, "Secteur d'activit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "p", 63);
    \u0275\u0275text(128);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(129, "div", 81)(130, "div", 82)(131, "label", 83);
    \u0275\u0275text(132, "Effectif d\xE9clar\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "p", 63);
    \u0275\u0275text(134);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(135, "div", 81)(136, "div", 82)(137, "label", 83);
    \u0275\u0275text(138, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "span", 84);
    \u0275\u0275text(140);
    \u0275\u0275pipe(141, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(142, "div", 81)(143, "div", 82)(144, "label", 83);
    \u0275\u0275text(145, "Date d'enregistrement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "p", 63);
    \u0275\u0275text(147);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(148, CompanyDetailsComponent_div_15_div_148_Template, 24, 3, "div", 85)(149, CompanyDetailsComponent_div_15_div_149_Template, 32, 6, "div", 85);
    \u0275\u0275elementStart(150, "div", 86)(151, "div", 47)(152, "h6", 48);
    \u0275\u0275element(153, "i", 87);
    \u0275\u0275text(154, " Activit\xE9 R\xE9cente ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(155, "div", 50)(156, "div", 88);
    \u0275\u0275template(157, CompanyDetailsComponent_div_15_div_157_Template, 7, 1, "div", 89);
    \u0275\u0275elementStart(158, "div", 90);
    \u0275\u0275element(159, "div", 91);
    \u0275\u0275elementStart(160, "div", 92)(161, "h6", 93);
    \u0275\u0275text(162, "Entreprise enregistr\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(163, "p", 42);
    \u0275\u0275text(164);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 34, ctx_r0.company.statut), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.nbEmployesDeclares || 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r0.loadingEmployees);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingEmployees);
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
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.nbEmployesDeclares || 0);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(!ctx_r0.loadingEmployees ? 89 : 90);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(!ctx_r0.loadingEmployees ? 100 : 101);
    \u0275\u0275advance(16);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(141, 36, ctx_r0.company.statut), " ");
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
  userService;
  company = null;
  loading = true;
  error = "";
  // Compteurs distincts
  nbEmployesDeclares = 0;
  // taille_effectif (RH déclaré)
  nbInscritsPlateforme = 0;
  // utilisateurs inscrits en BDD (rôle employé)
  nbActifsPlateforme = 0;
  // utilisateurs inscrits ET actifs (statut=1)
  employees = [];
  loadingEmployees = false;
  // Dialog modification
  companyDialog = false;
  constructor(route, router, clientCompanyService, userService) {
    this.route = route;
    this.router = router;
    this.clientCompanyService = clientCompanyService;
    this.userService = userService;
  }
  ngOnInit() {
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
      company: this.clientCompanyService.getCompany(id),
      employees: this.userService.getUsersByCompany(id)
    }).subscribe({
      next: (response) => {
        const detail = response.company.entreprise || response.company.data || response.company;
        this.company = detail;
        const stats = detail?.statistiques ?? {};
        this.nbEmployesDeclares = detail?.taille_effectif ?? 0;
        this.nbInscritsPlateforme = stats.nb_employes ?? 0;
        this.nbActifsPlateforme = stats.nb_employes_actifs ?? 0;
        const employeesData = response.employees.users || response.employees.data || response.employees;
        this.employees = Array.isArray(employeesData) ? employeesData : [];
        if (!stats.nb_employes) {
          this.nbInscritsPlateforme = this.employees.length;
          this.nbActifsPlateforme = this.employees.filter((e) => e.statut == 1 || e.est_actif).length;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error("Erreur lors du chargement:", error);
        this.error = "Erreur lors du chargement des donn\xE9es";
        this.loading = false;
      }
    });
  }
  // Méthodes utilitaires pour l'affichage
  getEmployeesByRole(role) {
    return this.employees.filter((emp) => emp.role === role);
  }
  getActiveEmployeesCount() {
    return this.nbActifsPlateforme;
  }
  // ...existing methods...
  goBack() {
    this.router.navigate(["/superadmin/company-management"]);
  }
  editCompany() {
    if (!this.company)
      return;
    this.companyDialog = true;
  }
  onEditSaved() {
    this.companyDialog = false;
    if (this.company) {
      this.loadCompanyDetails(this.company.id);
    }
  }
  onEditClosed() {
    this.companyDialog = false;
  }
  deleteCompany() {
    if (this.company && confirm(`Supprimer l'entreprise "${this.company.nom}" ?`)) {
      this.clientCompanyService.deleteCompany(this.company.id).subscribe({
        next: () => {
          console.log("Entreprise supprim\xE9e");
          this.router.navigate(["/superadmin/company-management"]);
        },
        error: (error) => {
          console.error("Erreur suppression:", error);
        }
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
    return new (__ngFactoryType__ || _CompanyDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ClientCompanyService), \u0275\u0275directiveInject(UserService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyDetailsComponent, selectors: [["app-company-details"]], decls: 17, vars: 9, consts: [[1, "container-fluid"], [1, "page-title", "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "d-flex", "align-items-center"], [1, "fw-bold", "mb-0"], [1, "isax", "isax-building", "me-2", "text-primary"], ["class", "badge bg-light text-dark ms-3", 4, "ngIf"], [1, "d-flex", "align-items-center", "gap-2"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "isax", "isax-arrow-left", "me-1"], ["class", "btn btn-primary btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-danger btn-sm", 3, "click", 4, "ngIf"], ["class", "d-flex justify-content-center align-items-center", "style", "min-height: 400px;", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "row g-4", 4, "ngIf"], [3, "onSave", "onClose", "visible", "isEditMode", "companyData"], [1, "badge", "bg-light", "text-dark", "ms-3"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "isax", "isax-edit", "me-1"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "isax", "isax-trash", "me-1"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "min-height", "400px"], [1, "text-center"], ["role", "status", 1, "spinner-border", "text-primary", "mb-3", 2, "width", "3rem", "height", "3rem"], [1, "visually-hidden"], [1, "text-muted"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "isax", "isax-info-circle", "me-2"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close"], [1, "row", "g-4"], [1, "col-xl-4", "col-lg-5"], [1, "card", "shadow-sm", "mb-4"], [1, "card-body", "text-center"], [1, "company-avatar", "mb-4"], [1, "avatar", "avatar-xxl", "avatar-rounded", "bg-gradient-primary", "text-white", "d-inline-flex", "align-items-center", "justify-content-center", "shadow"], [1, "isax", "isax-building", 2, "font-size", "2.5rem"], [1, "mb-2", "fw-bold"], [1, "text-muted", "mb-3", "fs-5"], [1, "px-3", "py-2", "fs-6"], [1, "row", "mt-4", "g-3"], [1, "col-4"], [1, "bg-light", "rounded", "p-3"], [1, "mb-1", "text-primary", "fw-bold"], [1, "text-muted", "mb-0", "fs-6"], ["class", "mb-1 text-info fw-bold", 4, "ngIf"], ["class", "spinner-border spinner-border-sm text-info", 4, "ngIf"], ["class", "mb-1 text-success fw-bold", 4, "ngIf"], ["class", "spinner-border spinner-border-sm text-success", 4, "ngIf"], [1, "card-header", "bg-light"], [1, "mb-0", "fw-semibold"], [1, "isax", "isax-call", "me-2", "text-primary"], [1, "card-body"], [1, "contact-info"], [1, "d-flex", "align-items-center", "mb-3", "p-2", "bg-light", "rounded"], [1, "isax", "isax-sms", "me-3", "text-primary", "fs-5"], [1, "mb-1", "fs-6", "fw-medium", "text-muted"], [1, "text-primary", "fw-medium", 3, "href"], [1, "isax", "isax-call", "me-3", "text-success", "fs-5"], [1, "text-success", "fw-medium", 3, "href"], [1, "d-flex", "align-items-start", "mb-3", "p-2", "bg-light", "rounded"], [1, "isax", "isax-location", "me-3", "text-warning", "fs-5"], [1, "mb-0"], [1, "d-flex", "align-items-center", "p-2", "bg-light", "rounded"], [1, "isax", "isax-document", "me-3", "text-info", "fs-5"], [1, "mb-0", "fw-medium"], ["class", "card shadow-sm", 4, "ngIf"], [1, "col-xl-8", "col-lg-7"], [1, "row", "mb-4"], [1, "col-md-4"], [1, "card", "bg-light", "shadow-sm", "h-100"], [1, "me-3"], [1, "isax", "isax-building-3", "fs-1", "opacity-75", "text-primary"], [1, "mb-1", "fw-bold", "text-primary"], [1, "mb-0", "text-muted"], [1, "card", "bg-gradient-primary", "text-white", "shadow-sm", "h-100"], [1, "isax", "isax-people", "fs-1", "opacity-75"], [1, "mb-1", "fw-bold"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "mb-0", "opacity-90"], [1, "card", "bg-gradient-success", "text-white", "shadow-sm", "h-100"], [1, "isax", "isax-user-tick", "fs-1", "opacity-75"], [1, "isax", "isax-document", "me-2", "text-primary"], [1, "col-md-6"], [1, "info-item"], [1, "form-label", "fw-semibold", "text-muted", "mb-1"], [1, "px-2", "py-1"], ["class", "card shadow-sm mb-4", 4, "ngIf"], [1, "card", "shadow-sm"], [1, "isax", "isax-clock", "me-2", "text-primary"], [1, "timeline"], ["class", "timeline-item d-flex mb-3", 4, "ngIf"], [1, "timeline-item", "d-flex"], [1, "timeline-marker", "bg-success", "rounded-circle", "me-3", "mt-1", 2, "width", "12px", "height", "12px"], [1, "timeline-content"], [1, "mb-1", "fw-semibold"], [1, "mb-1", "text-info", "fw-bold"], [1, "spinner-border", "spinner-border-sm", "text-info"], [1, "mb-1", "text-success", "fw-bold"], [1, "spinner-border", "spinner-border-sm", "text-success"], [1, "isax", "isax-people", "me-2", "text-primary"], [1, "avatar", "avatar-lg", "avatar-rounded", "flex-shrink-0", "me-3", "bg-gradient-info", "text-white", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-user", "fs-4"], [1, "flex-grow-1"], [1, "mb-1", "text-muted", "fs-6"], [1, "card-header", "bg-light", "d-flex", "justify-content-between", "align-items-center"], [1, "isax", "isax-profile-2user", "me-2", "text-primary"], [1, "badge", "bg-primary"], [1, "card-body", "p-0"], [1, "table-responsive"], [1, "table", "table-hover", "mb-0"], [1, "table-light"], [1, "border-0", "fw-semibold"], [4, "ngFor", "ngForOf"], [1, "py-3"], [1, "avatar", "avatar-sm", "bg-light", "text-primary", "me-2", "d-flex", "align-items-center", "justify-content-center", "rounded"], [1, "isax", "isax-user"], [1, "fw-medium"], [1, "badge", "bg-info-subtle", "text-info"], [1, "isax", "isax-briefcase", "me-2", "text-primary"], [1, "timeline-item", "d-flex", "mb-3"], [1, "timeline-marker", "bg-primary", "rounded-circle", "me-3", "mt-1", 2, "width", "12px", "height", "12px"]], template: function CompanyDetailsComponent_Template(rf, ctx) {
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
      \u0275\u0275template(13, CompanyDetailsComponent_div_13_Template, 7, 0, "div", 11)(14, CompanyDetailsComponent_div_14_Template, 4, 1, "div", 12)(15, CompanyDetailsComponent_div_15_Template, 165, 38, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "app-company-add", 14);
      \u0275\u0275listener("onSave", function CompanyDetailsComponent_Template_app_company_add_onSave_16_listener() {
        return ctx.onEditSaved();
      })("onClose", function CompanyDetailsComponent_Template_app_company_add_onClose_16_listener() {
        return ctx.onEditClosed();
      });
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
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.companyDialog)("isEditMode", true)("companyData", ctx.company);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, CompanyAddComponent, TitleCasePipe], styles: ['\n\n.company-avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  font-size: 2.5rem;\n}\n.contact-info[_ngcontent-%COMP%]   .isax[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 20px;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 2rem;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 10px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: #e9ecef;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 2rem;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -2rem;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 3px solid #fff;\n  box-shadow: 0 0 0 3px #e9ecef;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  border-left: 3px solid var(--bs-primary);\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--bs-dark);\n  margin-bottom: 0.5rem;\n}\n@media (max-width: 768px) {\n  .page-title[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start !important;\n    gap: 1rem;\n  }\n  .company-avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=company-details.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-company-details", imports: [TitleCasePipe, CommonModule, CompanyAddComponent], template: `<div class="container-fluid">\r
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
      <button class="btn btn-outline-danger btn-sm" (click)="deleteCompany()" *ngIf="company">\r
        <i class="isax isax-trash me-1"></i>Supprimer\r
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
            <div class="col-4">\r
              <div class="bg-light rounded p-3">\r
                <h5 class="mb-1 text-primary fw-bold">{{ nbEmployesDeclares || 0 }}</h5>\r
                <p class="text-muted mb-0 fs-6">Effectif d\xE9clar\xE9</p>\r
              </div>\r
            </div>\r
            <div class="col-4">\r
              <div class="bg-light rounded p-3">\r
                <h5 class="mb-1 text-info fw-bold" *ngIf="!loadingEmployees">{{ nbInscritsPlateforme }}</h5>\r
                <div *ngIf="loadingEmployees" class="spinner-border spinner-border-sm text-info"></div>\r
                <p class="text-muted mb-0 fs-6">Inscrits</p>\r
              </div>\r
            </div>\r
            <div class="col-4">\r
              <div class="bg-light rounded p-3">\r
                <h5 class="mb-1 text-success fw-bold" *ngIf="!loadingEmployees">{{ nbActifsPlateforme }}</h5>\r
                <div *ngIf="loadingEmployees" class="spinner-border spinner-border-sm text-success"></div>\r
                <p class="text-muted mb-0 fs-6">Actifs</p>\r
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
        <div class="col-md-4">\r
          <div class="card bg-light shadow-sm h-100">\r
            <div class="card-body">\r
              <div class="d-flex align-items-center">\r
                <div class="me-3"><i class="isax isax-building-3 fs-1 opacity-75 text-primary"></i></div>\r
                <div>\r
                  <h3 class="mb-1 fw-bold text-primary">{{ nbEmployesDeclares || 0 }}</h3>\r
                  <p class="mb-0 text-muted">Effectif d\xE9clar\xE9</p>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="col-md-4">\r
          <div class="card bg-gradient-primary text-white shadow-sm h-100">\r
            <div class="card-body">\r
              <div class="d-flex align-items-center">\r
                <div class="me-3"><i class="isax isax-people fs-1 opacity-75"></i></div>\r
                <div>\r
                  @if (!loadingEmployees) {\r
                    <h3 class="mb-1 fw-bold">{{ nbInscritsPlateforme }}</h3>\r
                  } @else {\r
                    <div class="spinner-border spinner-border-sm" role="status"></div>\r
                  }\r
                  <p class="mb-0 opacity-90">Inscrits plateforme</p>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="col-md-4">\r
          <div class="card bg-gradient-success text-white shadow-sm h-100">\r
            <div class="card-body">\r
              <div class="d-flex align-items-center">\r
                <div class="me-3"><i class="isax isax-user-tick fs-1 opacity-75"></i></div>\r
                <div>\r
                  @if (!loadingEmployees) {\r
                    <h3 class="mb-1 fw-bold">{{ nbActifsPlateforme }}</h3>\r
                  } @else {\r
                    <div class="spinner-border spinner-border-sm" role="status"></div>\r
                  }\r
                  <p class="mb-0 opacity-90">Actifs plateforme</p>\r
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
            Employ\xE9s Inscrits ({{ nbInscritsPlateforme }})\r
          </h6>\r
          <span class="badge bg-primary">{{ nbInscritsPlateforme }} utilisateurs</span>\r
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
</div>\r
\r
<!-- \u2500\u2500 Dialog modification entreprise (r\xE9utilise CompanyAddComponent) \u2500\u2500 -->\r
<app-company-add\r
  [visible]="companyDialog"\r
  [isEditMode]="true"\r
  [companyData]="company"\r
  (onSave)="onEditSaved()"\r
  (onClose)="onEditClosed()">\r
</app-company-add>`, styles: ['/* src/app/features/superadmin/company-details/company-details.component.scss */\n.company-avatar .avatar {\n  width: 120px;\n  height: 120px;\n  font-size: 2.5rem;\n}\n.contact-info .isax {\n  font-size: 1.2rem;\n  width: 20px;\n}\n.timeline {\n  position: relative;\n  padding-left: 2rem;\n}\n.timeline::before {\n  content: "";\n  position: absolute;\n  left: 10px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: #e9ecef;\n}\n.timeline .timeline-item {\n  position: relative;\n  margin-bottom: 2rem;\n}\n.timeline .timeline-item:last-child {\n  margin-bottom: 0;\n}\n.timeline .timeline-item .timeline-marker {\n  position: absolute;\n  left: -2rem;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 3px solid #fff;\n  box-shadow: 0 0 0 3px #e9ecef;\n}\n.timeline .timeline-item .timeline-content {\n  background: #f8f9fa;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  border-left: 3px solid var(--bs-primary);\n}\n.timeline .timeline-item .timeline-content h6 {\n  color: var(--bs-dark);\n  margin-bottom: 0.5rem;\n}\n@media (max-width: 768px) {\n  .page-title {\n    flex-direction: column;\n    align-items: flex-start !important;\n    gap: 1rem;\n  }\n  .company-avatar .avatar {\n    width: 80px;\n    height: 80px;\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=company-details.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: ClientCompanyService }, { type: UserService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyDetailsComponent, { className: "CompanyDetailsComponent", filePath: "app/features/superadmin/company-details/company-details.component.ts", lineNumber: 17 });
})();
export {
  CompanyDetailsComponent
};
//# sourceMappingURL=chunk-CJU7OTTO.js.map
