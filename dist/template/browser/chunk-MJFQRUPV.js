import {
  httpErrorMessage
} from "./chunk-RL3SOXDI.js";
import {
  ClientAddComponent
} from "./chunk-NU7VQVJK.js";
import {
  ClientCompanyService
} from "./chunk-AOQ7MVQS.js";
import {
  MatSortModule
} from "./chunk-VL5HRZ2I.js";
import {
  MatTableDataSource
} from "./chunk-ZJFUPILQ.js";
import {
  CustomPaginationComponent
} from "./chunk-QBIBOWET.js";
import {
  PaginationService
} from "./chunk-M25A5D3F.js";
import "./chunk-6YZDBSHM.js";
import "./chunk-2KO2PJ3F.js";
import "./chunk-5FDCLFRJ.js";
import "./chunk-4TVHDBGR.js";
import "./chunk-MQ5W77M6.js";
import "./chunk-K7E3GT3E.js";
import {
  DataService
} from "./chunk-IRUS5LM6.js";
import {
  routes
} from "./chunk-OVFIVR43.js";
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
} from "./chunk-VTSSTHJF.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/superadmin/client/client-list.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => [1, 2, 3, 4, 5];
var _c2 = (a0) => ["/superadmin/superadmin-client-details", a0];
function ClientListComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 26);
    \u0275\u0275listener("click", function ClientListComponent_div_14_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error = "");
    });
    \u0275\u0275element(4, "i", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.error, " ");
  }
}
function ClientListComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 30);
  }
}
function ClientListComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, ClientListComponent_div_20_div_1_Template, 1, 0, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function ClientListComponent_ul_21_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 34);
    \u0275\u0275listener("click", function ClientListComponent_ul_21_li_1_Template_li_click_0_listener() {
      const client_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectClient(client_r4));
    });
    \u0275\u0275elementStart(1, "div", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36)(4, "span", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 38);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "span", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const client_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("cl-list__item--active", (ctx_r1.selectedClient == null ? null : ctx_r1.selectedClient.id) === client_r4.id);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-type", client_r4.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getClientInitials(client_r4.nom), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(client_r4.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(8, 8, client_r4.type), " \xB7 ", client_r4.secteur_activite);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-status", client_r4.statut);
  }
}
function ClientListComponent_ul_21_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 40);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275elementStart(2, "small");
    \u0275\u0275text(3, "Aucun client trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function ClientListComponent_ul_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 31);
    \u0275\u0275template(1, ClientListComponent_ul_21_li_1_Template, 10, 10, "li", 32)(2, ClientListComponent_ul_21_li_2_Template, 4, 0, "li", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.tableData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.tableData.length);
  }
}
function ClientListComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43);
    \u0275\u0275element(2, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "S\xE9lectionnez un client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Choisissez un client dans la liste pour voir ses informations.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 45);
    \u0275\u0275listener("click", function ClientListComponent_div_25_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNew());
    });
    \u0275\u0275element(8, "i", 46);
    \u0275\u0275text(9, "Cr\xE9er un client ");
    \u0275\u0275elementEnd()();
  }
}
function ClientListComponent_ng_container_26_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 88);
    \u0275\u0275element(1, "i", 89);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedClient.secteur_activite, " ");
  }
}
function ClientListComponent_ng_container_26_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 88);
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getCountryFlag(ctx_r1.selectedClient.pays), " ", ctx_r1.getCountryName(ctx_r1.selectedClient.pays), " ");
  }
}
function ClientListComponent_ng_container_26_ng_container_108_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 93)(1, "div", 94);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 95)(4, "span", 96);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 97);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 52);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ent_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getClientInitials(ent_r7.nom), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ent_r7.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ent_r7.secteur_activite);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-status", ent_r7.statut);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, ent_r7.statut), " ");
  }
}
function ClientListComponent_ng_container_26_ng_container_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ul", 91);
    \u0275\u0275template(2, ClientListComponent_ng_container_26_ng_container_108_li_2_Template, 11, 7, "li", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.selectedClient.entreprises);
  }
}
function ClientListComponent_ng_container_26_ng_template_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275element(1, "i", 99);
    \u0275\u0275elementStart(2, "small");
    \u0275\u0275text(3, "Aucune entreprise associ\xE9e");
    \u0275\u0275elementEnd()();
  }
}
function ClientListComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 47)(2, "div", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 49)(5, "h2", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 51)(8, "span", 52);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 53);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ClientListComponent_ng_container_26_span_14_Template, 3, 1, "span", 54)(15, ClientListComponent_ng_container_26_span_15_Template, 3, 2, "span", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 55)(17, "button", 56);
    \u0275\u0275listener("click", function ClientListComponent_ng_container_26_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editClient(ctx_r1.selectedClient));
    });
    \u0275\u0275element(18, "i", 57);
    \u0275\u0275text(19, "Modifier ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "a", 58);
    \u0275\u0275element(21, "i", 59);
    \u0275\u0275text(22, "D\xE9tails ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 60);
    \u0275\u0275listener("click", function ClientListComponent_ng_container_26_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteClient(ctx_r1.selectedClient));
    });
    \u0275\u0275element(24, "i", 61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 62)(26, "div", 63)(27, "div", 64);
    \u0275\u0275element(28, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 66)(30, "span", 67);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 68);
    \u0275\u0275text(33, "Entreprises");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 63)(35, "div", 69);
    \u0275\u0275element(36, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 66)(38, "span", 67);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 68);
    \u0275\u0275text(41, "Taille");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 63)(43, "div", 70);
    \u0275\u0275element(44, "i", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 66)(46, "span", 67);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 68);
    \u0275\u0275text(49, "Date contrat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 63)(51, "div", 72);
    \u0275\u0275element(52, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 66)(54, "span", 67);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 68);
    \u0275\u0275text(57, "Fin contrat");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(58, "div", 74)(59, "div", 75)(60, "div", 76);
    \u0275\u0275element(61, "i", 77);
    \u0275\u0275elementStart(62, "h3", 78);
    \u0275\u0275text(63, "Informations g\xE9n\xE9rales");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 79)(65, "div", 80)(66, "div", 81)(67, "span", 82);
    \u0275\u0275text(68, "NINEA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 83);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 81)(72, "span", 82);
    \u0275\u0275text(73, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "span", 84)(75, "a", 85);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div", 81)(78, "span", 82);
    \u0275\u0275text(79, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 84);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 81)(83, "span", 82);
    \u0275\u0275text(84, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "span", 84);
    \u0275\u0275text(86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 81)(88, "span", 82);
    \u0275\u0275text(89, "Pays");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span", 84);
    \u0275\u0275text(91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 81)(93, "span", 82);
    \u0275\u0275text(94, "Secteur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "span", 84);
    \u0275\u0275text(96);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "div", 81)(98, "span", 82);
    \u0275\u0275text(99, "Contact principal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "span", 84);
    \u0275\u0275text(101);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(102, "div", 75)(103, "div", 76);
    \u0275\u0275element(104, "i", 86);
    \u0275\u0275elementStart(105, "h3", 78);
    \u0275\u0275text(106, "Entreprises associ\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 79);
    \u0275\u0275template(108, ClientListComponent_ng_container_26_ng_container_108_Template, 3, 1, "ng-container", 87)(109, ClientListComponent_ng_container_26_ng_template_109_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const noEntreprises_r8 = \u0275\u0275reference(110);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-type", ctx_r1.selectedClient.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getClientInitials(ctx_r1.selectedClient.nom), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedClient.nom);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-status", ctx_r1.selectedClient.statut);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 24, ctx_r1.selectedClient.statut), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 26, ctx_r1.selectedClient.type));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedClient.secteur_activite);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedClient.pays);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(28, _c2, ctx_r1.selectedClient.id));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate((ctx_r1.selectedClient.entreprises == null ? null : ctx_r1.selectedClient.entreprises.length) || "\u2014");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.selectedClient.taille || "\u2014");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedClient.date_contrat) || "\u2014");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedClient.date_fin_contrat) || "\u2014");
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r1.selectedClient.ninea || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275property("href", "mailto:" + ctx_r1.selectedClient.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedClient.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedClient.telephone || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedClient.adresse || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getCountryFlag(ctx_r1.selectedClient.pays || ""), " ", ctx_r1.getCountryName(ctx_r1.selectedClient.pays || ""), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedClient.secteur_activite || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedClient.contact_principal || "\u2014");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.selectedClient.entreprises == null ? null : ctx_r1.selectedClient.entreprises.length)("ngIfElse", noEntreprises_r8);
  }
}
var ClientListComponent = class _ClientListComponent {
  data;
  router;
  pagination;
  clientCompanyService;
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
  // Variables pour le modal/dialog
  clientDialog = false;
  isEditMode = false;
  submitted = false;
  selectedClient = null;
  // Variables pour le loading
  loading = false;
  error = "";
  constructor(data, router, pagination, clientCompanyService) {
    this.data = data;
    this.router = router;
    this.pagination = pagination;
    this.clientCompanyService = clientCompanyService;
    this.getClientList();
    this.pagination.tablePageSize.subscribe((res) => {
      if (this.router.url == "/superadmin/clients" || this.router.url.includes("clients")) {
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
        this.error = httpErrorMessage(error, "Impossible de charger les entreprises.");
        this.loading = false;
        this.loadMockData();
      }
    });
  }
  getClientList() {
    this.loading = true;
    this.error = "";
    this.clientCompanyService.getClients().subscribe({
      next: (response) => {
        console.log("Clients data:", response);
        this.actualData = response.clients || [];
        this.getTableData({ skip: 0, limit: this.pageSize });
        this.loading = false;
      },
      error: (error) => {
        console.error("Erreur lors de la r\xE9cup\xE9ration des clients:", error);
        this.error = httpErrorMessage(error, "Impossible de charger les clients.");
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
      },
      {
        id: 2,
        nom: "Startup Innovante SARL",
        type: "entreprise",
        ninea: "20240027890123",
        adresse: "123 Avenue des Entrepreneurs, 75011 Paris",
        telephone: "01 42 78 90 12",
        email: "contact@startup-innovante.com",
        contact_principal: "Thomas Martin",
        secteur_activite: "Tech",
        taille: "TPE",
        statut: "actif",
        date_contrat: "2024-03-15",
        date_fin_contrat: "2025-03-15"
      }
    ];
    this.actualData = mockClients;
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
    this.getClientList();
  }
  searchData(value) {
    if (value == "") {
      this.tableData = [...this.tableDataCopy];
    } else {
      const filteredData = this.tableDataCopy.filter((client) => client.nom.toLowerCase().includes(value.toLowerCase()) || client.email.toLowerCase().includes(value.toLowerCase()) || client.telephone.toLowerCase().includes(value.toLowerCase()) || client.secteur_activite.toLowerCase().includes(value.toLowerCase()) || client.ninea.toLowerCase().includes(value.toLowerCase()) || client.type.toLowerCase().includes(value.toLowerCase()) || client.contact_principal.toLowerCase().includes(value.toLowerCase()));
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
    this.clientDialog = true;
    this.isEditMode = false;
    this.selectedClient = null;
    this.submitted = false;
    console.log("Ouvrir nouveau client");
  }
  editClient(client) {
    this.clientDialog = true;
    this.isEditMode = true;
    this.selectedClient = __spreadValues({}, client);
    this.submitted = false;
    console.log("\xC9diter client:", client);
  }
  deleteClient(client) {
    if (confirm(`\xCAtes-vous s\xFBr de vouloir supprimer le client "${client.nom}" ?`)) {
      this.loading = true;
      this.clientCompanyService.deleteClient(client.id).subscribe({
        next: () => {
          console.log("Client supprim\xE9 avec succ\xE8s");
          this.refreshData();
        },
        error: (error) => {
          console.error("Erreur lors de la suppression:", error);
          this.loading = false;
          this.actualData = this.actualData.filter((c) => c.id !== client.id);
          this.getTableData({ skip: this.skip, limit: this.limit });
        }
      });
    }
  }
  hideDialog() {
    this.clientDialog = false;
    this.submitted = false;
    this.selectedClient = null;
  }
  saveClient() {
    this.submitted = true;
    if (this.selectedClient && this.validateClient(this.selectedClient)) {
      this.loading = true;
      if (this.isEditMode) {
        this.clientCompanyService.updateClient(this.selectedClient.id, this.selectedClient).subscribe({
          next: (response) => {
            console.log("Client mis \xE0 jour avec succ\xE8s");
            this.refreshData();
            this.hideDialog();
          },
          error: (error) => {
            console.error("Erreur lors de la mise \xE0 jour:", error);
            this.loading = false;
          }
        });
      } else {
        this.clientCompanyService.createClient(this.selectedClient).subscribe({
          next: (response) => {
            console.log("Client cr\xE9\xE9 avec succ\xE8s");
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
  validateClient(client) {
    return !!(client.nom && client.email && client.telephone && client.adresse && client.secteur_activite && client.ninea && client.type && client.contact_principal);
  }
  getStatusClass(status) {
    switch (status?.toLowerCase()) {
      case "actif":
        return "badge bg-success";
      case "inactif":
        return "badge bg-warning";
      case "suspendu":
        return "badge bg-danger";
      default:
        return "badge bg-secondary";
    }
  }
  formatDate(date) {
    if (!date)
      return "";
    return new Date(date).toLocaleDateString("fr-FR");
  }
  selectClient(client) {
    this.selectedClient = client;
  }
  getClientInitials(name) {
    return name.split(" ").map((word) => word.charAt(0)).join("").substring(0, 2).toUpperCase();
  }
  static \u0275fac = function ClientListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(ClientCompanyService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientListComponent, selectors: [["app-client-list"]], decls: 28, vars: 16, consts: [["noEntreprises", ""], [1, "cl-shell"], [1, "cl-header"], [1, "cl-header__left"], [1, "cl-header__title"], [1, "cl-header__count"], [1, "cl-header__right"], ["type", "button", 1, "cl-btn", "cl-btn--ghost", 3, "click", "disabled"], [1, "isax", "isax-refresh"], ["type", "button", 1, "cl-btn", "cl-btn--primary", 3, "click"], [1, "isax", "isax-add"], ["class", "cl-alert cl-alert--danger", 4, "ngIf"], [1, "cl-body"], [1, "cl-sidebar"], [1, "cl-sidebar__search"], [1, "isax", "isax-search-normal-1", "cl-sidebar__search-icon"], ["type", "search", "placeholder", "Rechercher...", 1, "cl-sidebar__search-input", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "cl-sidebar__loading", 4, "ngIf"], ["class", "cl-list", 4, "ngIf"], [1, "cl-sidebar__pager"], [1, "cl-detail"], ["class", "cl-empty-state", 4, "ngIf"], [4, "ngIf"], [3, "onClose", "onSave", "visible", "isEditMode", "clientData"], [1, "cl-alert", "cl-alert--danger"], [1, "isax", "isax-warning-2", "me-2"], ["type", "button", 1, "cl-alert__close", 3, "click"], [1, "isax", "isax-close-circle"], [1, "cl-sidebar__loading"], ["class", "cl-skeleton", 4, "ngFor", "ngForOf"], [1, "cl-skeleton"], [1, "cl-list"], ["class", "cl-list__item", 3, "cl-list__item--active", "click", 4, "ngFor", "ngForOf"], ["class", "cl-list__empty", 4, "ngIf"], [1, "cl-list__item", 3, "click"], [1, "cl-list__avatar"], [1, "cl-list__info"], [1, "cl-list__name"], [1, "cl-list__sub"], [1, "cl-list__dot"], [1, "cl-list__empty"], [1, "isax", "isax-people", "d-block", "mb-2"], [1, "cl-empty-state"], [1, "cl-empty-state__icon"], [1, "isax", "isax-people"], ["type", "button", 1, "cl-btn", "cl-btn--primary", "mt-3", 3, "click"], [1, "isax", "isax-add", "me-1"], [1, "cl-detail-header"], [1, "cl-detail-header__avatar"], [1, "cl-detail-header__info"], [1, "cl-detail-header__name"], [1, "cl-detail-header__meta"], [1, "cl-badge"], [1, "cl-badge", "cl-badge--type"], ["class", "cl-meta-chip", 4, "ngIf"], [1, "cl-detail-header__actions"], ["type", "button", 1, "cl-btn", "cl-btn--outline", 3, "click"], [1, "isax", "isax-edit", "me-1"], [1, "cl-btn", "cl-btn--ghost", 3, "routerLink"], [1, "isax", "isax-eye", "me-1"], ["type", "button", 1, "cl-btn", "cl-btn--ghost", "cl-btn--danger", 3, "click"], [1, "isax", "isax-trash"], [1, "cl-kpi-row"], [1, "cl-kpi-card"], [1, "cl-kpi-card__icon", "cl-kpi-card__icon--purple"], [1, "isax", "isax-building"], [1, "cl-kpi-card__body"], [1, "cl-kpi-card__value"], [1, "cl-kpi-card__label"], [1, "cl-kpi-card__icon", "cl-kpi-card__icon--blue"], [1, "cl-kpi-card__icon", "cl-kpi-card__icon--teal"], [1, "isax", "isax-calendar"], [1, "cl-kpi-card__icon", "cl-kpi-card__icon--orange"], [1, "isax", "isax-timer"], [1, "cl-detail-grid"], [1, "cl-card"], [1, "cl-card__header"], [1, "isax", "isax-people", "cl-card__icon"], [1, "cl-card__title"], [1, "cl-card__body"], [1, "cl-info-list"], [1, "cl-info-row"], [1, "cl-info-row__label"], [1, "cl-info-row__value", "cl-mono"], [1, "cl-info-row__value"], [1, "cl-link", 3, "href"], [1, "isax", "isax-building", "cl-card__icon"], [4, "ngIf", "ngIfElse"], [1, "cl-meta-chip"], [1, "isax", "isax-category", "me-1"], [1, "isax", "isax-global", "me-1"], [1, "cl-company-list"], ["class", "cl-company-item", 4, "ngFor", "ngForOf"], [1, "cl-company-item"], [1, "cl-company-item__avatar"], [1, "cl-company-item__info"], [1, "cl-company-item__name"], [1, "cl-company-item__meta"], [1, "cl-info-empty"], [1, "isax", "isax-building", "d-block", "mb-1"]], template: function ClientListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h1", 4);
      \u0275\u0275text(4, "Clients");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
      \u0275\u0275listener("click", function ClientListComponent_Template_button_click_8_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275element(9, "i", 8);
      \u0275\u0275text(10, " Actualiser ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275listener("click", function ClientListComponent_Template_button_click_11_listener() {
        return ctx.openNew();
      });
      \u0275\u0275element(12, "i", 10);
      \u0275\u0275text(13, " Nouveau client ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(14, ClientListComponent_div_14_Template, 5, 1, "div", 11);
      \u0275\u0275elementStart(15, "div", 12)(16, "aside", 13)(17, "div", 14);
      \u0275\u0275element(18, "i", 15);
      \u0275\u0275elementStart(19, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ClientListComponent_Template_input_ngModelChange_19_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(20, ClientListComponent_div_20_Template, 2, 2, "div", 17)(21, ClientListComponent_ul_21_Template, 3, 2, "ul", 18);
      \u0275\u0275elementStart(22, "div", 19);
      \u0275\u0275element(23, "app-custom-pagination");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "main", 20);
      \u0275\u0275template(25, ClientListComponent_div_25_Template, 10, 0, "div", 21)(26, ClientListComponent_ng_container_26_Template, 111, 30, "ng-container", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "app-client-add", 23);
      \u0275\u0275listener("onClose", function ClientListComponent_Template_app_client_add_onClose_27_listener() {
        return ctx.hideDialog();
      })("onSave", function ClientListComponent_Template_app_client_add_onSave_27_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.actualData.length, " client", ctx.actualData.length > 1 ? "s" : "");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275classProp("cl-spin", ctx.loading);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(15, _c0));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", !ctx.selectedClient && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedClient);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.clientDialog)("isEditMode", ctx.isEditMode)("clientData", ctx.selectedClient);
    }
  }, dependencies: [RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, CommonModule, NgForOf, NgIf, MatSortModule, CustomPaginationComponent, ClientAddComponent, TitleCasePipe], styles: ['\n\n.cl-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: calc(100vh - 120px);\n  font-family: inherit;\n}\n.cl-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 0 20px;\n  flex-shrink: 0;\n}\n.cl-header__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n}\n.cl-header__title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.cl-header__count[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  background: #f1f5f9;\n  padding: 2px 10px;\n  border-radius: 999px;\n}\n.cl-header__right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.cl-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 14px;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n  gap: 8px;\n}\n.cl-alert--danger[_ngcontent-%COMP%] {\n  background: #fff1f0;\n  color: #c0392b;\n  border: 1px solid #f5c6c3;\n}\n.cl-alert__close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n  padding: 0;\n  line-height: 1;\n}\n.cl-alert__close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.cl-body[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex: 1;\n  min-height: 0;\n}\n.cl-sidebar[_ngcontent-%COMP%] {\n  width: 300px;\n  flex-shrink: 0;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.cl-sidebar__search[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 14px 14px 10px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.cl-sidebar__search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 26px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 0.9rem;\n  pointer-events: none;\n}\n.cl-sidebar__search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px 8px 34px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.85rem;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.cl-sidebar__search-input[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n  background: #fff;\n}\n.cl-sidebar__search-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.cl-sidebar__loading[_ngcontent-%COMP%] {\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.cl-sidebar__pager[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-top: 1px solid #f1f5f9;\n  margin-top: auto;\n  font-size: 0.78rem;\n}\n.cl-sidebar__pager[_ngcontent-%COMP%]     .pagination {\n  margin: 0;\n  justify-content: center;\n}\n.cl-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 8px;\n  overflow-y: auto;\n  flex: 1;\n}\n.cl-list__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.cl-list__item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.cl-list__item--active[_ngcontent-%COMP%] {\n  background: rgba(6, 155, 143, 0.07) !important;\n}\n.cl-list__item--active[_ngcontent-%COMP%]   .cl-list__name[_ngcontent-%COMP%] {\n  color: #069b8f;\n  font-weight: 600;\n}\n.cl-list__avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.cl-list__avatar[data-type=groupe][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #6d28d9);\n}\n.cl-list__avatar[data-type=entreprise][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #1d4ed8);\n}\n.cl-list__avatar[data-type=association][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      rgb(3.7192546584, 96.0807453416, 88.6422360248));\n}\n.cl-list__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cl-list__name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #0f172a;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cl-list__sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cl-list__dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: #cbd5e1;\n}\n.cl-list__dot[data-status=actif][_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.cl-list__dot[data-status=inactif][_ngcontent-%COMP%] {\n  background: #cbd5e1;\n}\n.cl-list__dot[data-status=suspendu][_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.cl-list__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n  color: #94a3b8;\n  font-size: 0.85rem;\n  list-style: none;\n}\n.cl-list__empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.cl-detail[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.cl-empty-state[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 60px 20px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.cl-empty-state__icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 20px;\n  background: #f1f5f9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n}\n.cl-empty-state__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #94a3b8;\n}\n.cl-empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 8px;\n}\n.cl-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin-bottom: 0;\n}\n.cl-detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 20px 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  flex-wrap: wrap;\n  overflow: hidden;\n}\n.cl-detail-header__avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.cl-detail-header__avatar[data-type=groupe][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #6d28d9);\n}\n.cl-detail-header__avatar[data-type=entreprise][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #1d4ed8);\n}\n.cl-detail-header__avatar[data-type=association][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      rgb(3.7192546584, 96.0807453416, 88.6422360248));\n}\n.cl-detail-header__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.cl-detail-header__name[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cl-detail-header__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n}\n.cl-detail-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n  flex-shrink: 0;\n}\n.cl-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n@media (max-width: 900px) {\n  .cl-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.cl-kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 16px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.cl-kpi-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cl-kpi-card__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.cl-kpi-card__icon--purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.cl-kpi-card__icon--blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #3b82f6;\n}\n.cl-kpi-card__icon--teal[_ngcontent-%COMP%] {\n  background: rgba(6, 155, 143, 0.1);\n  color: #069b8f;\n}\n.cl-kpi-card__icon--orange[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  color: #f97316;\n}\n.cl-kpi-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.cl-kpi-card__value[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.2;\n}\n.cl-kpi-card__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.cl-detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .cl-detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cl-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.cl-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.cl-card__icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #069b8f;\n}\n.cl-card__title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.cl-card__body[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n}\n.cl-info-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.cl-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 9px 0;\n  border-bottom: 1px solid #f1f5f9;\n  gap: 12px;\n}\n.cl-info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cl-info-row__label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  flex-shrink: 0;\n  width: 130px;\n  padding-top: 1px;\n}\n.cl-info-row__value[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #0f172a;\n  text-align: right;\n  word-break: break-word;\n}\n.cl-company-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.cl-company-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border: 1px solid #f1f5f9;\n  border-radius: 10px;\n  background: #f8fafc;\n}\n.cl-company-item__avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      rgb(3.7192546584, 96.0807453416, 88.6422360248));\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.cl-company-item__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cl-company-item__name[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  font-weight: 500;\n  color: #0f172a;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cl-company-item__meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  display: block;\n}\n.cl-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.73rem;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 999px;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  background: #f1f5f9;\n  color: #475569;\n}\n.cl-badge[data-status=actif][_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.cl-badge[data-status=inactif][_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.cl-badge[data-status=suspendu][_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #92400e;\n}\n.cl-badge[data-status=active][_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.cl-badge--type[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n.cl-meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.78rem;\n  color: #64748b;\n  background: #f1f5f9;\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n.cl-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer;\n  border: 1px solid transparent;\n  text-decoration: none;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.cl-btn--primary[_ngcontent-%COMP%] {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n}\n.cl-btn--primary[_ngcontent-%COMP%]:hover {\n  background: rgb(4.4795031056, 115.7204968944, 106.7614906832);\n}\n.cl-btn--outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #069b8f;\n  border-color: #069b8f;\n}\n.cl-btn--outline[_ngcontent-%COMP%]:hover {\n  background: rgba(6, 155, 143, 0.06);\n}\n.cl-btn--ghost[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #334155;\n  border-color: #e2e8f0;\n}\n.cl-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.cl-btn--danger[_ngcontent-%COMP%] {\n  color: #991b1b;\n  background: #fff1f0;\n  border-color: #f5c6c3;\n}\n.cl-btn--danger[_ngcontent-%COMP%]:hover {\n  background: #f5c6c3;\n}\n.cl-btn--sm[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  font-size: 0.78rem;\n}\n.cl-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cl-mono[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 0.82rem;\n}\n.cl-link[_ngcontent-%COMP%] {\n  color: #069b8f;\n  text-decoration: none;\n}\n.cl-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.cl-info-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  color: #94a3b8;\n  font-size: 0.85rem;\n}\n.cl-info-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  display: block;\n  margin-bottom: 6px;\n}\n.cl-skeleton[_ngcontent-%COMP%] {\n  height: 56px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      90deg,\n      #f1f5f9 25%,\n      #e2e8f0 50%,\n      #f1f5f9 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_cl-shimmer 1.4s infinite;\n}\n@keyframes _ngcontent-%COMP%_cl-shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_cl-rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cl-spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_cl-rotate 0.8s linear infinite;\n  display: inline-block;\n}\n/*# sourceMappingURL=client-list.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientListComponent, [{
    type: Component,
    args: [{ selector: "app-client-list", imports: [RouterLink, FormsModule, CommonModule, MatSortModule, CustomPaginationComponent, ClientAddComponent], template: `<!-- \u2500\u2500 SHELL \u2500\u2500 -->\r
<div class="cl-shell">\r
\r
  <!-- \u2500\u2500 HEADER \u2500\u2500 -->\r
  <div class="cl-header">\r
    <div class="cl-header__left">\r
      <h1 class="cl-header__title">Clients</h1>\r
      <span class="cl-header__count">{{ actualData.length }} client{{ actualData.length > 1 ? 's' : '' }}</span>\r
    </div>\r
    <div class="cl-header__right">\r
      <button type="button" class="cl-btn cl-btn--ghost" (click)="refreshData()" [disabled]="loading">\r
        <i class="isax isax-refresh" [class.cl-spin]="loading"></i>\r
        Actualiser\r
      </button>\r
      <button type="button" class="cl-btn cl-btn--primary" (click)="openNew()">\r
        <i class="isax isax-add"></i>\r
        Nouveau client\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 ALERTS \u2500\u2500 -->\r
  <div *ngIf="error" class="cl-alert cl-alert--danger">\r
    <i class="isax isax-warning-2 me-2"></i>{{ error }}\r
    <button type="button" class="cl-alert__close" (click)="error = ''"><i class="isax isax-close-circle"></i></button>\r
  </div>\r
\r
  <!-- \u2500\u2500 BODY \u2500\u2500 -->\r
  <div class="cl-body">\r
\r
    <!-- \u2550\u2550 SIDEBAR \u2550\u2550 -->\r
    <aside class="cl-sidebar">\r
\r
      <!-- Search -->\r
      <div class="cl-sidebar__search">\r
        <i class="isax isax-search-normal-1 cl-sidebar__search-icon"></i>\r
        <input type="search"\r
               class="cl-sidebar__search-input"\r
               placeholder="Rechercher..."\r
               [(ngModel)]="searchDataValue"\r
               [ngModelOptions]="{ standalone: true }"\r
               (ngModelChange)="searchData(searchDataValue)">\r
      </div>\r
\r
      <!-- Loading skeleton -->\r
      <div *ngIf="loading" class="cl-sidebar__loading">\r
        <div class="cl-skeleton" *ngFor="let i of [1,2,3,4,5]"></div>\r
      </div>\r
\r
      <!-- List -->\r
      <ul class="cl-list" *ngIf="!loading">\r
        <li *ngFor="let client of tableData"\r
            class="cl-list__item"\r
            [class.cl-list__item--active]="selectedClient?.id === client.id"\r
            (click)="selectClient(client)">\r
          <div class="cl-list__avatar" [attr.data-type]="client.type">\r
            {{ getClientInitials(client.nom) }}\r
          </div>\r
          <div class="cl-list__info">\r
            <span class="cl-list__name">{{ client.nom }}</span>\r
            <span class="cl-list__sub">{{ client.type | titlecase }} \xB7 {{ client.secteur_activite }}</span>\r
          </div>\r
          <span class="cl-list__dot" [attr.data-status]="client.statut"></span>\r
        </li>\r
\r
        <li *ngIf="!tableData.length" class="cl-list__empty">\r
          <i class="isax isax-people d-block mb-2"></i>\r
          <small>Aucun client trouv\xE9</small>\r
        </li>\r
      </ul>\r
\r
      <!-- Pagination -->\r
      <div class="cl-sidebar__pager">\r
        <app-custom-pagination/>\r
      </div>\r
    </aside>\r
\r
    <!-- \u2550\u2550 DETAIL PANEL \u2550\u2550 -->\r
    <main class="cl-detail">\r
\r
      <!-- Empty state -->\r
      <div *ngIf="!selectedClient && !loading" class="cl-empty-state">\r
        <div class="cl-empty-state__icon"><i class="isax isax-people"></i></div>\r
        <h3>S\xE9lectionnez un client</h3>\r
        <p>Choisissez un client dans la liste pour voir ses informations.</p>\r
        <button type="button" class="cl-btn cl-btn--primary mt-3" (click)="openNew()">\r
          <i class="isax isax-add me-1"></i>Cr\xE9er un client\r
        </button>\r
      </div>\r
\r
      <ng-container *ngIf="selectedClient">\r
\r
        <!-- \u2500\u2500 DETAIL HEADER \u2500\u2500 -->\r
        <div class="cl-detail-header">\r
          <div class="cl-detail-header__avatar" [attr.data-type]="selectedClient.type">\r
            {{ getClientInitials(selectedClient.nom) }}\r
          </div>\r
          <div class="cl-detail-header__info">\r
            <h2 class="cl-detail-header__name">{{ selectedClient.nom }}</h2>\r
            <div class="cl-detail-header__meta">\r
              <span class="cl-badge" [attr.data-status]="selectedClient.statut">\r
                {{ selectedClient.statut | titlecase }}\r
              </span>\r
              <span class="cl-badge cl-badge--type">{{ selectedClient.type | titlecase }}</span>\r
              <span class="cl-meta-chip" *ngIf="selectedClient.secteur_activite">\r
                <i class="isax isax-category me-1"></i>{{ selectedClient.secteur_activite }}\r
              </span>\r
              <span class="cl-meta-chip" *ngIf="selectedClient.pays">\r
                <i class="isax isax-global me-1"></i>\r
                {{ getCountryFlag(selectedClient.pays) }} {{ getCountryName(selectedClient.pays) }}\r
              </span>\r
            </div>\r
          </div>\r
          <div class="cl-detail-header__actions">\r
            <button type="button" class="cl-btn cl-btn--outline" (click)="editClient(selectedClient)">\r
              <i class="isax isax-edit me-1"></i>Modifier\r
            </button>\r
            <a [routerLink]="['/superadmin/superadmin-client-details', selectedClient.id]"\r
               class="cl-btn cl-btn--ghost">\r
              <i class="isax isax-eye me-1"></i>D\xE9tails\r
            </a>\r
            <button type="button" class="cl-btn cl-btn--ghost cl-btn--danger"\r
                    (click)="deleteClient(selectedClient)">\r
              <i class="isax isax-trash"></i>\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- \u2500\u2500 KPI ROW \u2500\u2500 -->\r
        <div class="cl-kpi-row">\r
          <div class="cl-kpi-card">\r
            <div class="cl-kpi-card__icon cl-kpi-card__icon--purple"><i class="isax isax-building"></i></div>\r
            <div class="cl-kpi-card__body">\r
              <span class="cl-kpi-card__value">{{ selectedClient.entreprises?.length || '\u2014' }}</span>\r
              <span class="cl-kpi-card__label">Entreprises</span>\r
            </div>\r
          </div>\r
          <div class="cl-kpi-card">\r
            <div class="cl-kpi-card__icon cl-kpi-card__icon--blue"><i class="isax isax-people"></i></div>\r
            <div class="cl-kpi-card__body">\r
              <span class="cl-kpi-card__value">{{ selectedClient.taille || '\u2014' }}</span>\r
              <span class="cl-kpi-card__label">Taille</span>\r
            </div>\r
          </div>\r
          <div class="cl-kpi-card">\r
            <div class="cl-kpi-card__icon cl-kpi-card__icon--teal"><i class="isax isax-calendar"></i></div>\r
            <div class="cl-kpi-card__body">\r
              <span class="cl-kpi-card__value">{{ formatDate(selectedClient.date_contrat) || '\u2014' }}</span>\r
              <span class="cl-kpi-card__label">Date contrat</span>\r
            </div>\r
          </div>\r
          <div class="cl-kpi-card">\r
            <div class="cl-kpi-card__icon cl-kpi-card__icon--orange"><i class="isax isax-timer"></i></div>\r
            <div class="cl-kpi-card__body">\r
              <span class="cl-kpi-card__value">{{ formatDate(selectedClient.date_fin_contrat) || '\u2014' }}</span>\r
              <span class="cl-kpi-card__label">Fin contrat</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u2500\u2500 DETAIL GRID \u2500\u2500 -->\r
        <div class="cl-detail-grid">\r
\r
          <!-- Informations g\xE9n\xE9rales -->\r
          <div class="cl-card">\r
            <div class="cl-card__header">\r
              <i class="isax isax-people cl-card__icon"></i>\r
              <h3 class="cl-card__title">Informations g\xE9n\xE9rales</h3>\r
            </div>\r
            <div class="cl-card__body">\r
              <div class="cl-info-list">\r
                <div class="cl-info-row">\r
                  <span class="cl-info-row__label">NINEA</span>\r
                  <span class="cl-info-row__value cl-mono">{{ selectedClient.ninea || '\u2014' }}</span>\r
                </div>\r
                <div class="cl-info-row">\r
                  <span class="cl-info-row__label">Email</span>\r
                  <span class="cl-info-row__value">\r
                    <a [href]="'mailto:' + selectedClient.email" class="cl-link">{{ selectedClient.email }}</a>\r
                  </span>\r
                </div>\r
                <div class="cl-info-row">\r
                  <span class="cl-info-row__label">T\xE9l\xE9phone</span>\r
                  <span class="cl-info-row__value">{{ selectedClient.telephone || '\u2014' }}</span>\r
                </div>\r
                <div class="cl-info-row">\r
                  <span class="cl-info-row__label">Adresse</span>\r
                  <span class="cl-info-row__value">{{ selectedClient.adresse || '\u2014' }}</span>\r
                </div>\r
                <div class="cl-info-row">\r
                  <span class="cl-info-row__label">Pays</span>\r
                  <span class="cl-info-row__value">\r
                    {{ getCountryFlag(selectedClient.pays || '') }}\r
                    {{ getCountryName(selectedClient.pays || '') }}\r
                  </span>\r
                </div>\r
                <div class="cl-info-row">\r
                  <span class="cl-info-row__label">Secteur</span>\r
                  <span class="cl-info-row__value">{{ selectedClient.secteur_activite || '\u2014' }}</span>\r
                </div>\r
                <div class="cl-info-row">\r
                  <span class="cl-info-row__label">Contact principal</span>\r
                  <span class="cl-info-row__value">{{ selectedClient.contact_principal || '\u2014' }}</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Entreprises associ\xE9es -->\r
          <div class="cl-card">\r
            <div class="cl-card__header">\r
              <i class="isax isax-building cl-card__icon"></i>\r
              <h3 class="cl-card__title">Entreprises associ\xE9es</h3>\r
            </div>\r
            <div class="cl-card__body">\r
              <ng-container *ngIf="selectedClient.entreprises?.length; else noEntreprises">\r
                <ul class="cl-company-list">\r
                  <li *ngFor="let ent of selectedClient.entreprises" class="cl-company-item">\r
                    <div class="cl-company-item__avatar">\r
                      {{ getClientInitials(ent.nom) }}\r
                    </div>\r
                    <div class="cl-company-item__info">\r
                      <span class="cl-company-item__name">{{ ent.nom }}</span>\r
                      <span class="cl-company-item__meta">{{ ent.secteur_activite }}</span>\r
                    </div>\r
                    <span class="cl-badge" [attr.data-status]="ent.statut">\r
                      {{ ent.statut | titlecase }}\r
                    </span>\r
                  </li>\r
                </ul>\r
              </ng-container>\r
              <ng-template #noEntreprises>\r
                <div class="cl-info-empty">\r
                  <i class="isax isax-building d-block mb-1"></i>\r
                  <small>Aucune entreprise associ\xE9e</small>\r
                </div>\r
              </ng-template>\r
            </div>\r
          </div>\r
\r
        </div>\r
\r
      </ng-container>\r
    </main>\r
  </div>\r
\r
</div>\r
\r
<!-- \u2500\u2500 DIALOGS \u2500\u2500 -->\r
<app-client-add\r
  [visible]="clientDialog"\r
  [isEditMode]="isEditMode"\r
  [clientData]="selectedClient"\r
  (onClose)="hideDialog()"\r
  (onSave)="refreshData()">\r
</app-client-add>\r
`, styles: ['/* src/app/features/superadmin/client/client-list.component.scss */\n.cl-shell {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: calc(100vh - 120px);\n  font-family: inherit;\n}\n.cl-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 0 20px;\n  flex-shrink: 0;\n}\n.cl-header__left {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n}\n.cl-header__title {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.cl-header__count {\n  font-size: 0.8rem;\n  color: #64748b;\n  background: #f1f5f9;\n  padding: 2px 10px;\n  border-radius: 999px;\n}\n.cl-header__right {\n  display: flex;\n  gap: 10px;\n}\n.cl-alert {\n  display: flex;\n  align-items: center;\n  padding: 10px 14px;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  margin-bottom: 16px;\n  gap: 8px;\n}\n.cl-alert--danger {\n  background: #fff1f0;\n  color: #c0392b;\n  border: 1px solid #f5c6c3;\n}\n.cl-alert__close {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n  padding: 0;\n  line-height: 1;\n}\n.cl-alert__close:hover {\n  opacity: 1;\n}\n.cl-body {\n  display: flex;\n  gap: 20px;\n  flex: 1;\n  min-height: 0;\n}\n.cl-sidebar {\n  width: 300px;\n  flex-shrink: 0;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.cl-sidebar__search {\n  position: relative;\n  padding: 14px 14px 10px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.cl-sidebar__search-icon {\n  position: absolute;\n  left: 26px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 0.9rem;\n  pointer-events: none;\n}\n.cl-sidebar__search-input {\n  width: 100%;\n  padding: 8px 12px 8px 34px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.85rem;\n  color: #0f172a;\n  background: #f8fafc;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.cl-sidebar__search-input:focus {\n  border-color: #069b8f;\n  background: #fff;\n}\n.cl-sidebar__search-input::placeholder {\n  color: #94a3b8;\n}\n.cl-sidebar__loading {\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.cl-sidebar__pager {\n  padding: 8px;\n  border-top: 1px solid #f1f5f9;\n  margin-top: auto;\n  font-size: 0.78rem;\n}\n.cl-sidebar__pager ::ng-deep .pagination {\n  margin: 0;\n  justify-content: center;\n}\n.cl-list {\n  list-style: none;\n  margin: 0;\n  padding: 8px;\n  overflow-y: auto;\n  flex: 1;\n}\n.cl-list__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.cl-list__item:hover {\n  background: #f8fafc;\n}\n.cl-list__item--active {\n  background: rgba(6, 155, 143, 0.07) !important;\n}\n.cl-list__item--active .cl-list__name {\n  color: #069b8f;\n  font-weight: 600;\n}\n.cl-list__avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.cl-list__avatar[data-type=groupe] {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #6d28d9);\n}\n.cl-list__avatar[data-type=entreprise] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #1d4ed8);\n}\n.cl-list__avatar[data-type=association] {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      rgb(3.7192546584, 96.0807453416, 88.6422360248));\n}\n.cl-list__info {\n  flex: 1;\n  min-width: 0;\n}\n.cl-list__name {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #0f172a;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cl-list__sub {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cl-list__dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: #cbd5e1;\n}\n.cl-list__dot[data-status=actif] {\n  background: #22c55e;\n}\n.cl-list__dot[data-status=inactif] {\n  background: #cbd5e1;\n}\n.cl-list__dot[data-status=suspendu] {\n  background: #f59e0b;\n}\n.cl-list__empty {\n  text-align: center;\n  padding: 32px 16px;\n  color: #94a3b8;\n  font-size: 0.85rem;\n  list-style: none;\n}\n.cl-list__empty i {\n  font-size: 2rem;\n}\n.cl-detail {\n  flex: 1;\n  min-width: 0;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.cl-empty-state {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 60px 20px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.cl-empty-state__icon {\n  width: 72px;\n  height: 72px;\n  border-radius: 20px;\n  background: #f1f5f9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n}\n.cl-empty-state__icon i {\n  font-size: 2rem;\n  color: #94a3b8;\n}\n.cl-empty-state h3 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin-bottom: 8px;\n}\n.cl-empty-state p {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin-bottom: 0;\n}\n.cl-detail-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 20px 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  flex-wrap: wrap;\n  overflow: hidden;\n}\n.cl-detail-header__avatar {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.cl-detail-header__avatar[data-type=groupe] {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #6d28d9);\n}\n.cl-detail-header__avatar[data-type=entreprise] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #1d4ed8);\n}\n.cl-detail-header__avatar[data-type=association] {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      rgb(3.7192546584, 96.0807453416, 88.6422360248));\n}\n.cl-detail-header__info {\n  flex: 1;\n  min-width: 200px;\n}\n.cl-detail-header__name {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cl-detail-header__meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n}\n.cl-detail-header__actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n  flex-shrink: 0;\n}\n.cl-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n@media (max-width: 900px) {\n  .cl-kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.cl-kpi-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 16px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.cl-kpi-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cl-kpi-card__icon i {\n  font-size: 1.2rem;\n}\n.cl-kpi-card__icon--purple {\n  background: #ede9fe;\n  color: #6d28d9;\n}\n.cl-kpi-card__icon--blue {\n  background: #eff6ff;\n  color: #3b82f6;\n}\n.cl-kpi-card__icon--teal {\n  background: rgba(6, 155, 143, 0.1);\n  color: #069b8f;\n}\n.cl-kpi-card__icon--orange {\n  background: #fff7ed;\n  color: #f97316;\n}\n.cl-kpi-card__body {\n  display: flex;\n  flex-direction: column;\n}\n.cl-kpi-card__value {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.2;\n}\n.cl-kpi-card__label {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.cl-detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .cl-detail-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.cl-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.cl-card__header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.cl-card__icon {\n  font-size: 1rem;\n  color: #069b8f;\n}\n.cl-card__title {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.cl-card__body {\n  padding: 16px 18px;\n}\n.cl-info-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.cl-info-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 9px 0;\n  border-bottom: 1px solid #f1f5f9;\n  gap: 12px;\n}\n.cl-info-row:last-child {\n  border-bottom: none;\n}\n.cl-info-row__label {\n  font-size: 0.8rem;\n  color: #64748b;\n  flex-shrink: 0;\n  width: 130px;\n  padding-top: 1px;\n}\n.cl-info-row__value {\n  font-size: 0.85rem;\n  color: #0f172a;\n  text-align: right;\n  word-break: break-word;\n}\n.cl-company-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.cl-company-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border: 1px solid #f1f5f9;\n  border-radius: 10px;\n  background: #f8fafc;\n}\n.cl-company-item__avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      rgb(3.7192546584, 96.0807453416, 88.6422360248));\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.cl-company-item__info {\n  flex: 1;\n  min-width: 0;\n}\n.cl-company-item__name {\n  font-size: 0.83rem;\n  font-weight: 500;\n  color: #0f172a;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cl-company-item__meta {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  display: block;\n}\n.cl-badge {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.73rem;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 999px;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  background: #f1f5f9;\n  color: #475569;\n}\n.cl-badge[data-status=actif] {\n  background: #dcfce7;\n  color: #166534;\n}\n.cl-badge[data-status=inactif] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.cl-badge[data-status=suspendu] {\n  background: #fff3cd;\n  color: #92400e;\n}\n.cl-badge[data-status=active] {\n  background: #dcfce7;\n  color: #166534;\n}\n.cl-badge--type {\n  background: #ede9fe;\n  color: #5b21b6;\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n.cl-meta-chip {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.78rem;\n  color: #64748b;\n  background: #f1f5f9;\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n.cl-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 500;\n  cursor: pointer;\n  border: 1px solid transparent;\n  text-decoration: none;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.cl-btn--primary {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n}\n.cl-btn--primary:hover {\n  background: rgb(4.4795031056, 115.7204968944, 106.7614906832);\n}\n.cl-btn--outline {\n  background: #fff;\n  color: #069b8f;\n  border-color: #069b8f;\n}\n.cl-btn--outline:hover {\n  background: rgba(6, 155, 143, 0.06);\n}\n.cl-btn--ghost {\n  background: #f1f5f9;\n  color: #334155;\n  border-color: #e2e8f0;\n}\n.cl-btn--ghost:hover {\n  background: #e2e8f0;\n}\n.cl-btn--danger {\n  color: #991b1b;\n  background: #fff1f0;\n  border-color: #f5c6c3;\n}\n.cl-btn--danger:hover {\n  background: #f5c6c3;\n}\n.cl-btn--sm {\n  padding: 4px 10px;\n  font-size: 0.78rem;\n}\n.cl-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cl-mono {\n  font-family: "Courier New", monospace;\n  font-size: 0.82rem;\n}\n.cl-link {\n  color: #069b8f;\n  text-decoration: none;\n}\n.cl-link:hover {\n  text-decoration: underline;\n}\n.cl-info-empty {\n  text-align: center;\n  padding: 24px;\n  color: #94a3b8;\n  font-size: 0.85rem;\n}\n.cl-info-empty i {\n  font-size: 1.5rem;\n  display: block;\n  margin-bottom: 6px;\n}\n.cl-skeleton {\n  height: 56px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      90deg,\n      #f1f5f9 25%,\n      #e2e8f0 50%,\n      #f1f5f9 75%);\n  background-size: 200% 100%;\n  animation: cl-shimmer 1.4s infinite;\n}\n@keyframes cl-shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@keyframes cl-rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cl-spin {\n  animation: cl-rotate 0.8s linear infinite;\n  display: inline-block;\n}\n/*# sourceMappingURL=client-list.component.css.map */\n'] }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }, { type: ClientCompanyService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientListComponent, { className: "ClientListComponent", filePath: "app/features/superadmin/client/client-list.component.ts", lineNumber: 23 });
})();
export {
  ClientListComponent
};
//# sourceMappingURL=chunk-MJFQRUPV.js.map
