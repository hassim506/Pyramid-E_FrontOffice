import {
  ClientCompanyService
} from "./chunk-S72XEEG7.js";
import {
  ActivatedRoute,
  Router
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
  ɵɵtextInterpolate1
} from "./chunk-UPBSS6WA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/client-details/client-details.component.ts
function ClientDetailsComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ClientDetailsComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editClient());
    });
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2, "Modifier ");
    \u0275\u0275elementEnd();
  }
}
function ClientDetailsComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ClientDetailsComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteClient());
    });
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2, "Supprimer ");
    \u0275\u0275elementEnd();
  }
}
function ClientDetailsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "span", 16);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function ClientDetailsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, "\n");
  }
}
function ClientDetailsComponent_div_11_div_181_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 61)(2, "div", 35)(3, "div", 2)(4, "div", 62);
    \u0275\u0275element(5, "i", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h6", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 64);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 64);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const entreprise_r4 = ctx.$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(entreprise_r4.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entreprise_r4.secteur_activite);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", entreprise_r4.taille_effectif, " employ\xE9s");
  }
}
function ClientDetailsComponent_div_11_div_181_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 33)(2, "h6", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 35)(5, "div", 19);
    \u0275\u0275template(6, ClientDetailsComponent_div_11_div_181_div_6_Template, 13, 3, "div", 60);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Entreprises Associ\xE9es (", ctx_r1.client == null ? null : ctx_r1.client.entreprises == null ? null : ctx_r1.client.entreprises.length, ")");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.client.entreprises);
  }
}
function ClientDetailsComponent_div_11_div_198_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275element(1, "div", 66);
    \u0275\u0275elementStart(2, "div", 67)(3, "h6", 31);
    \u0275\u0275text(4, "Profil mis \xE0 jour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.client == null ? null : ctx_r1.client.updated_at));
  }
}
function ClientDetailsComponent_div_11_div_199_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275element(1, "div", 68);
    \u0275\u0275elementStart(2, "div", 67)(3, "h6", 31);
    \u0275\u0275text(4, "D\xE9but de contrat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.client == null ? null : ctx_r1.client.date_contrat));
  }
}
function ClientDetailsComponent_div_11_div_200_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275element(1, "div", 69);
    \u0275\u0275elementStart(2, "div", 67)(3, "h6", 31);
    \u0275\u0275text(4, "Client enregistr\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.client == null ? null : ctx_r1.client.created_at));
  }
}
function ClientDetailsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "div", 21)(3, "div", 22)(4, "div", 23)(5, "div", 24);
    \u0275\u0275element(6, "i", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h5", 26);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 27);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 28)(15, "div", 29)(16, "div", 30)(17, "h6", 31);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 32);
    \u0275\u0275text(20, "Taille");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 29)(22, "div", 30)(23, "h6", 31);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 32);
    \u0275\u0275text(26, "Entreprises");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(27, "div", 21)(28, "div", 33)(29, "h6", 34);
    \u0275\u0275text(30, "Informations de Contact");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 35)(32, "div", 36)(33, "div", 37);
    \u0275\u0275element(34, "i", 38);
    \u0275\u0275elementStart(35, "div")(36, "p", 39);
    \u0275\u0275text(37, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "a", 40);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 37);
    \u0275\u0275element(41, "i", 41);
    \u0275\u0275elementStart(42, "div")(43, "p", 39);
    \u0275\u0275text(44, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "a", 40);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 42);
    \u0275\u0275element(48, "i", 43);
    \u0275\u0275elementStart(49, "div")(50, "p", 39);
    \u0275\u0275text(51, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p", 44);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 37);
    \u0275\u0275element(55, "i", 45);
    \u0275\u0275elementStart(56, "div")(57, "p", 39);
    \u0275\u0275text(58, "SIRET");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "p", 44);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 2);
    \u0275\u0275element(62, "i", 46);
    \u0275\u0275elementStart(63, "div")(64, "p", 39);
    \u0275\u0275text(65, "Contact Principal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "p", 44);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(68, "div", 21)(69, "div", 33)(70, "h6", 34);
    \u0275\u0275text(71, "Contrat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 35)(73, "div", 36)(74, "div", 37);
    \u0275\u0275element(75, "i", 47);
    \u0275\u0275elementStart(76, "div")(77, "p", 39);
    \u0275\u0275text(78, "Date d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "p", 44);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 2);
    \u0275\u0275element(82, "i", 48);
    \u0275\u0275elementStart(83, "div")(84, "p", 39);
    \u0275\u0275text(85, "Date fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "p", 44);
    \u0275\u0275text(87);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(88, "div", 49)(89, "div", 21)(90, "div", 33)(91, "h6", 34);
    \u0275\u0275text(92, "Informations G\xE9n\xE9rales");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 35)(94, "div", 19)(95, "div", 50)(96, "div", 51)(97, "label", 52);
    \u0275\u0275text(98, "ID Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "p", 34);
    \u0275\u0275text(100);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(101, "div", 50)(102, "div", 51)(103, "label", 52);
    \u0275\u0275text(104, "Nom du client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "p", 34);
    \u0275\u0275text(106);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(107, "div", 50)(108, "div", 51)(109, "label", 52);
    \u0275\u0275text(110, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "span", 53);
    \u0275\u0275text(112);
    \u0275\u0275pipe(113, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(114, "div", 50)(115, "div", 51)(116, "label", 52);
    \u0275\u0275text(117, "SIRET");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "p", 34);
    \u0275\u0275text(119);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(120, "div", 50)(121, "div", 51)(122, "label", 52);
    \u0275\u0275text(123, "Secteur d'activit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "p", 34);
    \u0275\u0275text(125);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(126, "div", 50)(127, "div", 51)(128, "label", 52);
    \u0275\u0275text(129, "Taille");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "p", 34);
    \u0275\u0275text(131);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(132, "div", 50)(133, "div", 51)(134, "label", 52);
    \u0275\u0275text(135, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "span");
    \u0275\u0275text(137);
    \u0275\u0275pipe(138, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(139, "div", 50)(140, "div", 51)(141, "label", 52);
    \u0275\u0275text(142, "Contact principal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "p", 34);
    \u0275\u0275text(144);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(145, "div", 50)(146, "div", 51)(147, "label", 52);
    \u0275\u0275text(148, "Date de cr\xE9ation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "p", 34);
    \u0275\u0275text(150);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(151, "div", 50)(152, "div", 51)(153, "label", 52);
    \u0275\u0275text(154, "Derni\xE8re mise \xE0 jour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "p", 34);
    \u0275\u0275text(156);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(157, "div", 21)(158, "div", 33)(159, "h6", 34);
    \u0275\u0275text(160, "D\xE9tails du Contrat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(161, "div", 35)(162, "div", 19)(163, "div", 50)(164, "div", 51)(165, "label", 52);
    \u0275\u0275text(166, "Date d\xE9but contrat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "p", 34);
    \u0275\u0275text(168);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(169, "div", 50)(170, "div", 51)(171, "label", 52);
    \u0275\u0275text(172, "Date fin contrat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(173, "p", 34);
    \u0275\u0275text(174);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(175, "div", 54)(176, "div", 51)(177, "label", 52);
    \u0275\u0275text(178, "Dur\xE9e du contrat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(179, "p", 34);
    \u0275\u0275text(180);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(181, ClientDetailsComponent_div_11_div_181_Template, 7, 2, "div", 55);
    \u0275\u0275elementStart(182, "div", 21)(183, "div", 33)(184, "h6", 34);
    \u0275\u0275text(185, "Adresse Compl\xE8te");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(186, "div", 35)(187, "div", 56);
    \u0275\u0275element(188, "i", 57);
    \u0275\u0275elementStart(189, "div")(190, "p", 34);
    \u0275\u0275text(191);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(192, "div", 21)(193, "div", 33)(194, "h6", 34);
    \u0275\u0275text(195, "Activit\xE9 R\xE9cente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(196, "div", 35)(197, "div", 58);
    \u0275\u0275template(198, ClientDetailsComponent_div_11_div_198_Template, 7, 1, "div", 59)(199, ClientDetailsComponent_div_11_div_199_Template, 7, 1, "div", 59)(200, ClientDetailsComponent_div_11_div_200_Template, 7, 1, "div", 59);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.client == null ? null : ctx_r1.client.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.client == null ? null : ctx_r1.client.secteur_activite);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(ctx_r1.client == null ? null : ctx_r1.client.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 38, ctx_r1.client == null ? null : ctx_r1.client.statut));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.client == null ? null : ctx_r1.client.taille);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r1.client == null ? null : ctx_r1.client.entreprises_count) || 0);
    \u0275\u0275advance(14);
    \u0275\u0275property("href", \u0275\u0275interpolate1("mailto:", ctx_r1.client == null ? null : ctx_r1.client.email), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.client == null ? null : ctx_r1.client.email);
    \u0275\u0275advance(6);
    \u0275\u0275property("href", \u0275\u0275interpolate1("tel:", ctx_r1.client == null ? null : ctx_r1.client.telephone), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.client == null ? null : ctx_r1.client.telephone);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.client == null ? null : ctx_r1.client.adresse);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.client == null ? null : ctx_r1.client.ninea);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.client == null ? null : ctx_r1.client.contact_principal);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.client == null ? null : ctx_r1.client.date_contrat));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.client == null ? null : ctx_r1.client.date_fin_contrat));
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.client == null ? null : ctx_r1.client.id);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.client == null ? null : ctx_r1.client.nom);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(113, 40, ctx_r1.client == null ? null : ctx_r1.client.type));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.client == null ? null : ctx_r1.client.ninea);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.client == null ? null : ctx_r1.client.secteur_activite);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.client == null ? null : ctx_r1.client.taille);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r1.getStatusClass(ctx_r1.client == null ? null : ctx_r1.client.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(138, 42, ctx_r1.client == null ? null : ctx_r1.client.statut));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.client == null ? null : ctx_r1.client.contact_principal);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.client == null ? null : ctx_r1.client.created_at));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.client == null ? null : ctx_r1.client.updated_at));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.client == null ? null : ctx_r1.client.date_contrat));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.client == null ? null : ctx_r1.client.date_fin_contrat));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.calculateContractDuration());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.client == null ? null : ctx_r1.client.entreprises == null ? null : ctx_r1.client.entreprises.length);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.client == null ? null : ctx_r1.client.adresse);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.client == null ? null : ctx_r1.client.updated_at);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.client == null ? null : ctx_r1.client.date_contrat);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.client == null ? null : ctx_r1.client.created_at);
  }
}
var ClientDetailsComponent = class _ClientDetailsComponent {
  route;
  router;
  clientCompanyService;
  client = null;
  loading = true;
  error = "";
  constructor(route, router, clientCompanyService) {
    this.route = route;
    this.router = router;
    this.clientCompanyService = clientCompanyService;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const clientId = +params["id"];
      if (clientId) {
        this.loadClientDetails(clientId);
      }
    });
  }
  loadClientDetails(id) {
    this.loading = true;
    this.error = "";
    this.clientCompanyService.getClient(id).subscribe({
      next: (response) => {
        this.client = response.client || response.data || response;
        this.loading = false;
      },
      error: (error) => {
        this.error = "Client non trouv\xE9";
        this.loading = false;
      }
    });
  }
  goBack() {
    this.router.navigate(["/superadmin/clients"]);
  }
  editClient() {
    if (this.client) {
      console.log("\xC9diter client:", this.client);
    }
  }
  deleteClient() {
    if (this.client && confirm(`Supprimer le client "${this.client.nom}" ?`)) {
      this.clientCompanyService.deleteClient(this.client.id).subscribe({
        next: () => {
          console.log("Client supprim\xE9");
          this.router.navigate(["/superadmin/clients"]);
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
  calculateContractDuration() {
    if (!this.client?.date_contrat || !this.client?.date_fin_contrat) {
      return "Non d\xE9fini";
    }
    const startDate = new Date(this.client.date_contrat);
    const endDate = new Date(this.client.date_fin_contrat);
    const diffTime = endDate.getTime() - startDate.getTime();
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    const diffMonths = Math.round(diffDays / 30);
    if (diffMonths < 12) {
      return `${diffMonths} mois`;
    } else {
      const years = Math.floor(diffMonths / 12);
      const remainingMonths = diffMonths % 12;
      return remainingMonths > 0 ? `${years} an(s) ${remainingMonths} mois` : `${years} an(s)`;
    }
  }
  static \u0275fac = function ClientDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ClientCompanyService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientDetailsComponent, selectors: [["app-client-details"]], decls: 12, vars: 5, consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold"], [1, "d-flex", "align-items-center"], [1, "btn", "btn-outline-primary", "me-2", 3, "click"], [1, "isax", "isax-arrow-left", "me-1"], ["class", "btn btn-primary me-2", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-danger", 3, "click", 4, "ngIf"], ["class", "d-flex justify-content-center align-items-center", "style", "min-height: 300px;", 4, "ngIf"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "btn", "btn-primary", "me-2", 3, "click"], [1, "isax", "isax-edit", "me-1"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "isax", "isax-trash", "me-1"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "min-height", "300px"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "alert", "alert-warning"], [1, "isax", "isax-info-circle", "me-2"], [1, "row"], [1, "col-xl-4", "col-lg-5"], [1, "card"], [1, "card-body", "text-center"], [1, "client-avatar", "mb-3"], [1, "avatar", "avatar-xxl", "avatar-rounded", "bg-primary", "text-white", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-people", 2, "font-size", "2rem"], [1, "mb-2"], [1, "text-muted", "mb-3"], [1, "row", "mt-4"], [1, "col-6"], [1, "text-center"], [1, "mb-1"], [1, "text-muted", "mb-0", "fs-12"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], [1, "contact-info"], [1, "d-flex", "align-items-center", "mb-3"], [1, "isax", "isax-sms", "me-3", "text-primary"], [1, "mb-0", "fs-14", "fw-medium"], [1, "text-primary", 3, "href"], [1, "isax", "isax-call", "me-3", "text-primary"], [1, "d-flex", "align-items-start", "mb-3"], [1, "isax", "isax-location", "me-3", "text-primary"], [1, "mb-0", "text-muted"], [1, "isax", "isax-document", "me-3", "text-primary"], [1, "isax", "isax-user", "me-3", "text-primary"], [1, "isax", "isax-calendar", "me-3", "text-primary"], [1, "isax", "isax-calendar-edit", "me-3", "text-primary"], [1, "col-xl-8", "col-lg-7"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label", "fw-medium"], [1, "badge", "bg-info"], [1, "col-md-12"], ["class", "card", 4, "ngIf"], [1, "d-flex", "align-items-start"], [1, "isax", "isax-location", "me-3", "text-primary", 2, "margin-top", "4px"], [1, "timeline"], ["class", "timeline-item", 4, "ngIf"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "card", "mb-3", "border-start", "border-3", "border-primary"], [1, "avatar", "avatar-md", "avatar-rounded", "flex-shrink-0", "me-3", "bg-light", "text-primary", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-building"], [1, "mb-0", "text-muted", "fs-12"], [1, "timeline-item"], [1, "timeline-marker", "bg-primary"], [1, "timeline-content"], [1, "timeline-marker", "bg-success"], [1, "timeline-marker", "bg-info"]], template: function ClientDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5", 1);
      \u0275\u0275text(2, "D\xE9tails du Client");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
      \u0275\u0275listener("click", function ClientDetailsComponent_Template_button_click_4_listener() {
        return ctx.goBack();
      });
      \u0275\u0275element(5, "i", 4);
      \u0275\u0275text(6, "Retour ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, ClientDetailsComponent_button_7_Template, 3, 0, "button", 5)(8, ClientDetailsComponent_button_8_Template, 3, 0, "button", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, ClientDetailsComponent_div_9_Template, 4, 0, "div", 7)(10, ClientDetailsComponent_div_10_Template, 3, 1, "div", 8)(11, ClientDetailsComponent_div_11_Template, 201, 44, "div", 9);
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.client);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.client);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.client);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TitleCasePipe], styles: ['\n\n.client-avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  font-size: 2.5rem;\n}\n.contact-info[_ngcontent-%COMP%]   .isax[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 20px;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 2rem;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 10px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: #e9ecef;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 2rem;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -2rem;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 3px solid #fff;\n  box-shadow: 0 0 0 3px #e9ecef;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  border-left: 3px solid var(--bs-primary);\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--bs-dark);\n  margin-bottom: 0.5rem;\n}\n@media (max-width: 768px) {\n  .page-title[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start !important;\n    gap: 1rem;\n  }\n  .client-avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=client-details.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-client-details", imports: [TitleCasePipe, CommonModule], template: `<div class="page-title d-flex align-items-center justify-content-between">\r
    <h5 class="fw-bold">D\xE9tails du Client</h5>\r
    <div class="d-flex align-items-center">\r
        <button class="btn btn-outline-primary me-2" (click)="goBack()">\r
            <i class="isax isax-arrow-left me-1"></i>Retour\r
        </button>\r
        <button class="btn btn-primary me-2" (click)="editClient()" *ngIf="client">\r
            <i class="isax isax-edit me-1"></i>Modifier\r
        </button>\r
        <button class="btn btn-outline-danger" (click)="deleteClient()" *ngIf="client">\r
            <i class="isax isax-trash me-1"></i>Supprimer\r
        </button>\r
    </div>\r
</div>\r
\r
<div *ngIf="loading" class="d-flex justify-content-center align-items-center" style="min-height: 300px;">\r
    <div class="spinner-border text-primary" role="status">\r
        <span class="visually-hidden">Chargement...</span>\r
    </div>\r
</div>\r
\r
<div *ngIf="!loading && error" class="alert alert-warning">\r
    <i class="isax isax-info-circle me-2"></i>\r
    {{error}}\r
</div>\r
\r
<div *ngIf="!loading && client" class="row">\r
    <!-- Informations principales -->\r
    <div class="col-xl-4 col-lg-5">\r
        <div class="card">\r
            <div class="card-body text-center">\r
                <div class="client-avatar mb-3">\r
                    <div class="avatar avatar-xxl avatar-rounded bg-primary text-white d-inline-flex align-items-center justify-content-center">\r
                        <i class="isax isax-people" style="font-size: 2rem;"></i>\r
                    </div>\r
                </div>\r
                <h5 class="mb-2">{{client?.nom}}</h5>\r
                <p class="text-muted mb-3">{{client?.secteur_activite}}</p>\r
                <span [class]="getStatusClass(client?.statut)">{{client?.statut | titlecase}}</span>\r
                \r
                <div class="row mt-4">\r
                    <div class="col-6">\r
                        <div class="text-center">\r
                            <h6 class="mb-1">{{client?.taille}}</h6>\r
                            <p class="text-muted mb-0 fs-12">Taille</p>\r
                        </div>\r
                    </div>\r
                    <div class="col-6">\r
                        <div class="text-center">\r
                            <h6 class="mb-1">{{client?.entreprises_count || 0}}</h6>\r
                            <p class="text-muted mb-0 fs-12">Entreprises</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- Informations de contact -->\r
        <div class="card">\r
            <div class="card-header">\r
                <h6 class="mb-0">Informations de Contact</h6>\r
            </div>\r
            <div class="card-body">\r
                <div class="contact-info">\r
                    <div class="d-flex align-items-center mb-3">\r
                        <i class="isax isax-sms me-3 text-primary"></i>\r
                        <div>\r
                            <p class="mb-0 fs-14 fw-medium">Email</p>\r
                            <a href="mailto:{{client?.email}}" class="text-primary">{{client?.email}}</a>\r
                        </div>\r
                    </div>\r
                    <div class="d-flex align-items-center mb-3">\r
                        <i class="isax isax-call me-3 text-primary"></i>\r
                        <div>\r
                            <p class="mb-0 fs-14 fw-medium">T\xE9l\xE9phone</p>\r
                            <a href="tel:{{client?.telephone}}" class="text-primary">{{client?.telephone}}</a>\r
                        </div>\r
                    </div>\r
                    <div class="d-flex align-items-start mb-3">\r
                        <i class="isax isax-location me-3 text-primary"></i>\r
                        <div>\r
                            <p class="mb-0 fs-14 fw-medium">Adresse</p>\r
                            <p class="mb-0 text-muted">{{client?.adresse}}</p>\r
                        </div>\r
                    </div>\r
                    <div class="d-flex align-items-center mb-3">\r
                        <i class="isax isax-document me-3 text-primary"></i>\r
                        <div>\r
                            <p class="mb-0 fs-14 fw-medium">SIRET</p>\r
                            <p class="mb-0 text-muted">{{client?.ninea}}</p>\r
                        </div>\r
                    </div>\r
                    <div class="d-flex align-items-center">\r
                        <i class="isax isax-user me-3 text-primary"></i>\r
                        <div>\r
                            <p class="mb-0 fs-14 fw-medium">Contact Principal</p>\r
                            <p class="mb-0 text-muted">{{client?.contact_principal}}</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- Informations de contrat -->\r
        <div class="card">\r
            <div class="card-header">\r
                <h6 class="mb-0">Contrat</h6>\r
            </div>\r
            <div class="card-body">\r
                <div class="contact-info">\r
                    <div class="d-flex align-items-center mb-3">\r
                        <i class="isax isax-calendar me-3 text-primary"></i>\r
                        <div>\r
                            <p class="mb-0 fs-14 fw-medium">Date d\xE9but</p>\r
                            <p class="mb-0 text-muted">{{formatDate(client?.date_contrat)}}</p>\r
                        </div>\r
                    </div>\r
                    <div class="d-flex align-items-center">\r
                        <i class="isax isax-calendar-edit me-3 text-primary"></i>\r
                        <div>\r
                            <p class="mb-0 fs-14 fw-medium">Date fin</p>\r
                            <p class="mb-0 text-muted">{{formatDate(client?.date_fin_contrat)}}</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- D\xE9tails du client -->\r
    <div class="col-xl-8 col-lg-7">\r
        <!-- Informations g\xE9n\xE9rales -->\r
        <div class="card">\r
            <div class="card-header">\r
                <h6 class="mb-0">Informations G\xE9n\xE9rales</h6>\r
            </div>\r
            <div class="card-body">\r
                <div class="row">\r
                    <div class="col-md-6">\r
                        <div class="mb-3">\r
                            <label class="form-label fw-medium">ID Client</label>\r
                            <p class="mb-0">{{client?.id}}</p>\r
                        </div>\r
                    </div>\r
                    <div class="col-md-6">\r
                        <div class="mb-3">\r
                            <label class="form-label fw-medium">Nom du client</label>\r
                            <p class="mb-0">{{client?.nom}}</p>\r
                        </div>\r
                    </div>\r
                    <div class="col-md-6">\r
                        <div class="mb-3">\r
                            <label class="form-label fw-medium">Type</label>\r
                            <span class="badge bg-info">{{client?.type | titlecase}}</span>\r
                        </div>\r
                    </div>\r
                    <div class="col-md-6">\r
                        <div class="mb-3">\r
                            <label class="form-label fw-medium">SIRET</label>\r
                            <p class="mb-0">{{client?.ninea}}</p>\r
                        </div>\r
                    </div>\r
                    <div class="col-md-6">\r
                        <div class="mb-3">\r
                            <label class="form-label fw-medium">Secteur d'activit\xE9</label>\r
                            <p class="mb-0">{{client?.secteur_activite}}</p>\r
                        </div>\r
                    </div>\r
                    <div class="col-md-6">\r
                        <div class="mb-3">\r
                            <label class="form-label fw-medium">Taille</label>\r
                            <p class="mb-0">{{client?.taille}}</p>\r
                        </div>\r
                    </div>\r
                    <div class="col-md-6">\r
                        <div class="mb-3">\r
                            <label class="form-label fw-medium">Statut</label>\r
                            <span [class]="getStatusClass(client?.statut)">{{client?.statut | titlecase}}</span>\r
                        </div>\r
                    </div>\r
                    <div class="col-md-6">\r
                        <div class="mb-3">\r
                            <label class="form-label fw-medium">Contact principal</label>\r
                            <p class="mb-0">{{client?.contact_principal}}</p>\r
                        </div>\r
                    </div>\r
                    <div class="col-md-6">\r
                        <div class="mb-3">\r
                            <label class="form-label fw-medium">Date de cr\xE9ation</label>\r
                            <p class="mb-0">{{formatDate(client?.created_at)}}</p>\r
                        </div>\r
                    </div>\r
                    <div class="col-md-6">\r
                        <div class="mb-3">\r
                            <label class="form-label fw-medium">Derni\xE8re mise \xE0 jour</label>\r
                            <p class="mb-0">{{formatDate(client?.updated_at)}}</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- Informations de contrat d\xE9taill\xE9es -->\r
        <div class="card">\r
            <div class="card-header">\r
                <h6 class="mb-0">D\xE9tails du Contrat</h6>\r
            </div>\r
            <div class="card-body">\r
                <div class="row">\r
                    <div class="col-md-6">\r
                        <div class="mb-3">\r
                            <label class="form-label fw-medium">Date d\xE9but contrat</label>\r
                            <p class="mb-0">{{formatDate(client?.date_contrat)}}</p>\r
                        </div>\r
                    </div>\r
                    <div class="col-md-6">\r
                        <div class="mb-3">\r
                            <label class="form-label fw-medium">Date fin contrat</label>\r
                            <p class="mb-0">{{formatDate(client?.date_fin_contrat)}}</p>\r
                        </div>\r
                    </div>\r
                    <div class="col-md-12">\r
                        <div class="mb-3">\r
                            <label class="form-label fw-medium">Dur\xE9e du contrat</label>\r
                            <p class="mb-0">{{calculateContractDuration()}}</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- Entreprises associ\xE9es -->\r
<div class="card" *ngIf="client?.entreprises?.length">\r
    <div class="card-header">\r
        <h6 class="mb-0">Entreprises Associ\xE9es ({{client?.entreprises?.length}})</h6>\r
    </div>\r
    <div class="card-body">\r
        <div class="row">\r
            <div class="col-md-6" *ngFor="let entreprise of client.entreprises">\r
                <div class="card mb-3 border-start border-3 border-primary">\r
                    <div class="card-body">\r
                        <div class="d-flex align-items-center">\r
                            <div class="avatar avatar-md avatar-rounded flex-shrink-0 me-3 bg-light text-primary d-flex align-items-center justify-content-center">\r
                                <i class="isax isax-building"></i>\r
                            </div>\r
                            <div>\r
                                <h6 class="mb-1">{{entreprise.nom}}</h6>\r
                                <p class="mb-0 text-muted fs-12">{{entreprise.secteur_activite}}</p>\r
                                <p class="mb-0 text-muted fs-12">{{entreprise.taille_effectif}} employ\xE9s</p>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
        <!-- Adresse compl\xE8te -->\r
        <div class="card">\r
            <div class="card-header">\r
                <h6 class="mb-0">Adresse Compl\xE8te</h6>\r
            </div>\r
            <div class="card-body">\r
                <div class="d-flex align-items-start">\r
                    <i class="isax isax-location me-3 text-primary" style="margin-top: 4px;"></i>\r
                    <div>\r
                        <p class="mb-0">{{client?.adresse}}</p>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- Historique/Activit\xE9 r\xE9cente -->\r
        <div class="card">\r
            <div class="card-header">\r
                <h6 class="mb-0">Activit\xE9 R\xE9cente</h6>\r
            </div>\r
            <div class="card-body">\r
                <div class="timeline">\r
                    <div class="timeline-item" *ngIf="client?.updated_at">\r
                        <div class="timeline-marker bg-primary"></div>\r
                        <div class="timeline-content">\r
                            <h6 class="mb-1">Profil mis \xE0 jour</h6>\r
                            <p class="text-muted mb-0 fs-12">{{formatDate(client?.updated_at)}}</p>\r
                        </div>\r
                    </div>\r
                    <div class="timeline-item" *ngIf="client?.date_contrat">\r
                        <div class="timeline-marker bg-success"></div>\r
                        <div class="timeline-content">\r
                            <h6 class="mb-1">D\xE9but de contrat</h6>\r
                            <p class="text-muted mb-0 fs-12">{{formatDate(client?.date_contrat)}}</p>\r
                        </div>\r
                    </div>\r
                    <div class="timeline-item" *ngIf="client?.created_at">\r
                        <div class="timeline-marker bg-info"></div>\r
                        <div class="timeline-content">\r
                            <h6 class="mb-1">Client enregistr\xE9</h6>\r
                            <p class="text-muted mb-0 fs-12">{{formatDate(client?.created_at)}}</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>`, styles: ['/* src/app/features/adminrh/client-details/client-details.component.scss */\n.client-avatar .avatar {\n  width: 120px;\n  height: 120px;\n  font-size: 2.5rem;\n}\n.contact-info .isax {\n  font-size: 1.2rem;\n  width: 20px;\n}\n.timeline {\n  position: relative;\n  padding-left: 2rem;\n}\n.timeline::before {\n  content: "";\n  position: absolute;\n  left: 10px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: #e9ecef;\n}\n.timeline .timeline-item {\n  position: relative;\n  margin-bottom: 2rem;\n}\n.timeline .timeline-item:last-child {\n  margin-bottom: 0;\n}\n.timeline .timeline-item .timeline-marker {\n  position: absolute;\n  left: -2rem;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 3px solid #fff;\n  box-shadow: 0 0 0 3px #e9ecef;\n}\n.timeline .timeline-item .timeline-content {\n  background: #f8f9fa;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  border-left: 3px solid var(--bs-primary);\n}\n.timeline .timeline-item .timeline-content h6 {\n  color: var(--bs-dark);\n  margin-bottom: 0.5rem;\n}\n@media (max-width: 768px) {\n  .page-title {\n    flex-direction: column;\n    align-items: flex-start !important;\n    gap: 1rem;\n  }\n  .client-avatar .avatar {\n    width: 80px;\n    height: 80px;\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=client-details.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: ClientCompanyService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientDetailsComponent, { className: "ClientDetailsComponent", filePath: "src/app/features/adminrh/client-details/client-details.component.ts", lineNumber: 13 });
})();
export {
  ClientDetailsComponent
};
//# sourceMappingURL=chunk-BBLGE75S.js.map
