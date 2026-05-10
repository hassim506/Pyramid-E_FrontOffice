import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-YMJPU2MG.js";
import {
  HttpClient
} from "./chunk-J5AS2QYG.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-GWJREDC5.js";
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
  ɵɵproperty,
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
} from "./chunk-2JCHGHJA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/superadmin/superadmin-certificate/superadmin-certificate.component.ts
function SuperadminCertificateComponent_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entreprise_r1 = ctx.$implicit;
    \u0275\u0275property("value", entreprise_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", entreprise_r1.nom, " ");
  }
}
function SuperadminCertificateComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function SuperadminCertificateComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "span", 35);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function SuperadminCertificateComponent_div_44_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "strong");
    \u0275\u0275text(2, "Expire le:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const certificate_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.isExpired(certificate_r4) ? "text-danger" : "text-muted");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(certificate_r4.date_expiration), " ");
  }
}
function SuperadminCertificateComponent_div_44_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "strong");
    \u0275\u0275text(2, "Score:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const certificate_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", certificate_r4.score_final, "% ");
  }
}
function SuperadminCertificateComponent_div_44_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_div_44_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const certificate_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.revokeCertificate(certificate_r4));
    });
    \u0275\u0275element(1, "i", 56);
    \u0275\u0275elementEnd();
  }
}
function SuperadminCertificateComponent_div_44_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_div_44_button_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const certificate_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reactivateCertificate(certificate_r4));
    });
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275elementEnd();
  }
}
function SuperadminCertificateComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "div", 38)(3, "div", 39)(4, "h6", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 41)(9, "strong");
    \u0275\u0275text(10, "Employ\xE9:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 41)(13, "strong");
    \u0275\u0275text(14, "Formation:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 41)(17, "strong");
    \u0275\u0275text(18, "Entreprise:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 41)(21, "strong");
    \u0275\u0275text(22, "D\xE9livr\xE9 le:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, SuperadminCertificateComponent_div_44_div_24_Template, 5, 3, "div", 42)(25, SuperadminCertificateComponent_div_44_div_25_Template, 4, 1, "div", 43);
    \u0275\u0275elementStart(26, "div", 44)(27, "div", 45)(28, "button", 46);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_div_44_Template_button_click_28_listener() {
      const certificate_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewCertificate(certificate_r4));
    });
    \u0275\u0275element(29, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 48);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_div_44_Template_button_click_30_listener() {
      const certificate_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadCertificate(certificate_r4));
    });
    \u0275\u0275element(31, "i", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 45);
    \u0275\u0275template(33, SuperadminCertificateComponent_div_44_button_33_Template, 2, 0, "button", 50)(34, SuperadminCertificateComponent_div_44_button_34_Template, 2, 0, "button", 51);
    \u0275\u0275elementStart(35, "button", 52);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_div_44_Template_button_click_35_listener() {
      const certificate_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteCertificate(certificate_r4));
    });
    \u0275\u0275element(36, "i", 53);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const certificate_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(certificate_r4.code_unique);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(certificate_r4.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(certificate_r4.statut);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", certificate_r4.employe.prenom, " ", certificate_r4.employe.nom, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", certificate_r4.formation.titre, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", certificate_r4.entreprise.nom, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(certificate_r4.date_delivrance), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", certificate_r4.date_expiration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", certificate_r4.score_final);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", certificate_r4.statut === "valide");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", certificate_r4.statut === "r\xE9voqu\xE9");
  }
}
function SuperadminCertificateComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275elementStart(2, "h5", 60);
    \u0275\u0275text(3, "Aucun certificat trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 60);
    \u0275\u0275text(5, "Modifiez vos crit\xE8res de recherche ou filtres.");
    \u0275\u0275elementEnd()();
  }
}
function SuperadminCertificateComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "nav", 62)(2, "ul", 63)(3, "li", 64)(4, "button", 65);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_div_46_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275element(5, "i", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "li", 67)(7, "span", 68);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "li", 64)(10, "button", 65);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_div_46_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275element(11, "i", 69);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.currentPage, " / ", ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function SuperadminCertificateComponent_div_55_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3, "Date d'expiration:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedCertificate.date_expiration));
  }
}
function SuperadminCertificateComponent_div_55_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3, "Score final:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedCertificate.score_final, "%");
  }
}
function SuperadminCertificateComponent_div_55_button_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_div_55_button_71_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.revokeCertificate(ctx_r1.selectedCertificate));
    });
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275text(2, "R\xE9voquer ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminCertificateComponent_div_55_button_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_div_55_button_72_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reactivateCertificate(ctx_r1.selectedCertificate));
    });
    \u0275\u0275element(1, "i", 81);
    \u0275\u0275text(2, "R\xE9activer ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminCertificateComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 20)(2, "div", 71)(3, "h6");
    \u0275\u0275text(4, "Informations g\xE9n\xE9rales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "table", 72)(6, "tr")(7, "td")(8, "strong");
    \u0275\u0275text(9, "Code unique:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "tr")(13, "td")(14, "strong");
    \u0275\u0275text(15, "Statut:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tr")(20, "td")(21, "strong");
    \u0275\u0275text(22, "Date de d\xE9livrance:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, SuperadminCertificateComponent_div_55_tr_25_Template, 6, 1, "tr", 73)(26, SuperadminCertificateComponent_div_55_tr_26_Template, 6, 1, "tr", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 71)(28, "h6");
    \u0275\u0275text(29, "D\xE9tails");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "table", 72)(31, "tr")(32, "td")(33, "strong");
    \u0275\u0275text(34, "Employ\xE9:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "tr")(38, "td")(39, "strong");
    \u0275\u0275text(40, "Email:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "td");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "tr")(44, "td")(45, "strong");
    \u0275\u0275text(46, "Fonction:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "td");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "tr")(50, "td")(51, "strong");
    \u0275\u0275text(52, "Formation:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "td");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "tr")(56, "td")(57, "strong");
    \u0275\u0275text(58, "Formateur:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "td");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "tr")(62, "td")(63, "strong");
    \u0275\u0275text(64, "Entreprise:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "td");
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(67, "div", 74)(68, "button", 2);
    \u0275\u0275listener("click", function SuperadminCertificateComponent_div_55_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadCertificate(ctx_r1.selectedCertificate));
    });
    \u0275\u0275element(69, "i", 75);
    \u0275\u0275text(70, "T\xE9l\xE9charger PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(71, SuperadminCertificateComponent_div_55_button_71_Template, 3, 0, "button", 76)(72, SuperadminCertificateComponent_div_55_button_72_Template, 3, 0, "button", 77);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.selectedCertificate.code_unique);
    \u0275\u0275advance(6);
    \u0275\u0275classMap(ctx_r1.getStatusClass(ctx_r1.selectedCertificate.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedCertificate.statut);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedCertificate.date_delivrance));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCertificate.date_expiration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCertificate.score_final);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedCertificate.employe.prenom, " ", ctx_r1.selectedCertificate.employe.nom);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedCertificate.employe.email);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedCertificate.employe.fonction);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedCertificate.formation.titre);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedCertificate.formateur.prenom, " ", ctx_r1.selectedCertificate.formateur.nom);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedCertificate.entreprise.nom);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.selectedCertificate.statut === "valide");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCertificate.statut === "r\xE9voqu\xE9");
  }
}
var SuperadminCertificateComponent = class _SuperadminCertificateComponent {
  http;
  certificates = [];
  filteredCertificates = [];
  loading = false;
  error = "";
  selectedCertificate = null;
  // Filtres
  searchTerm = "";
  selectedStatus = "";
  selectedEntreprise = "";
  // Pagination
  currentPage = 1;
  itemsPerPage = 8;
  totalPages = 0;
  // URLs de l'API
  apiUrl = "http://127.0.0.1:8000/api";
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.loadCertificates();
  }
  loadCertificates() {
    this.loading = true;
    this.error = "";
    this.http.get(`${this.apiUrl}/certificats`).subscribe({
      next: (data) => {
        this.certificates = data;
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        this.error = "Erreur lors du chargement des certificats";
        this.loading = false;
        console.error("Erreur:", err);
      }
    });
  }
  applyFilters() {
    this.filteredCertificates = this.certificates.filter((cert) => {
      const matchesSearch = !this.searchTerm || cert.code_unique.toLowerCase().includes(this.searchTerm.toLowerCase()) || cert.employe.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || cert.formation.titre.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus = !this.selectedStatus || cert.statut === this.selectedStatus;
      const matchesEntreprise = !this.selectedEntreprise || cert.entreprise_id.toString() === this.selectedEntreprise;
      return matchesSearch && matchesStatus && matchesEntreprise;
    });
    this.totalPages = Math.ceil(this.filteredCertificates.length / this.itemsPerPage);
    this.currentPage = 1;
  }
  getPaginatedCertificates() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredCertificates.slice(startIndex, endIndex);
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  viewCertificate(certificate) {
    this.selectedCertificate = certificate;
  }
  downloadCertificate(certificate) {
    const link = document.createElement("a");
    link.href = `${this.apiUrl}${certificate.url_pdf}`;
    link.download = `certificat-${certificate.code_unique}.pdf`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  updateCertificateStatus(certificateId, newStatus) {
    this.http.put(`${this.apiUrl}/certificats/${certificateId}`, { statut: newStatus }).subscribe({
      next: () => {
        const index = this.certificates.findIndex((c) => c.id === certificateId);
        if (index !== -1) {
          this.certificates[index].statut = newStatus;
          this.applyFilters();
        }
      },
      error: (err) => {
        this.error = "Erreur lors de la mise \xE0 jour du statut";
        console.error("Erreur:", err);
      }
    });
  }
  revokeCertificate(certificate) {
    if (confirm(`\xCAtes-vous s\xFBr de vouloir r\xE9voquer le certificat ${certificate.code_unique} ?`)) {
      this.updateCertificateStatus(certificate.id, "r\xE9voqu\xE9");
    }
  }
  reactivateCertificate(certificate) {
    if (confirm(`\xCAtes-vous s\xFBr de vouloir r\xE9activer le certificat ${certificate.code_unique} ?`)) {
      this.updateCertificateStatus(certificate.id, "valide");
    }
  }
  deleteCertificate(certificate) {
    if (confirm(`\xCAtes-vous s\xFBr de vouloir supprimer d\xE9finitivement le certificat ${certificate.code_unique} ?`)) {
      this.http.delete(`${this.apiUrl}/certificats/${certificate.id}`).subscribe({
        next: () => {
          this.certificates = this.certificates.filter((c) => c.id !== certificate.id);
          this.applyFilters();
        },
        error: (err) => {
          this.error = "Erreur lors de la suppression du certificat";
          console.error("Erreur:", err);
        }
      });
    }
  }
  getStatusClass(status) {
    switch (status) {
      case "valide":
        return "badge bg-success";
      case "expir\xE9":
        return "badge bg-warning";
      case "r\xE9voqu\xE9":
        return "badge bg-danger";
      default:
        return "badge bg-secondary";
    }
  }
  getUniqueEntreprises() {
    const entreprises = this.certificates.map((c) => ({ id: c.entreprise_id, nom: c.entreprise.nom }));
    return entreprises.filter((e, index, self) => index === self.findIndex((x) => x.id === e.id));
  }
  isExpired(certificate) {
    if (!certificate.date_expiration)
      return false;
    return new Date(certificate.date_expiration) < /* @__PURE__ */ new Date();
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString("fr-FR");
  }
  static \u0275fac = function SuperadminCertificateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminCertificateComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminCertificateComponent, selectors: [["app-superadmin-certificate"]], decls: 56, vars: 11, consts: [[1, "certificate"], [1, "page-title", "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "btn", "btn-primary", "me-2", 3, "click"], [1, "isax", "isax-refresh-circle", "me-1"], [1, "row", "mb-4"], [1, "col-md-4"], [1, "form-group"], [1, "form-label"], ["type", "text", "placeholder", "Code, employ\xE9, formation...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-3"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "valide"], ["value", "expir\xE9"], ["value", "r\xE9voqu\xE9"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "form-control-plaintext"], ["class", "alert alert-danger mb-4", 4, "ngIf"], ["class", "text-center py-4", 4, "ngIf"], [1, "row"], ["class", "col-md-6 col-lg-4 mb-4", 4, "ngFor", "ngForOf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "d-flex justify-content-center mt-4", 4, "ngIf"], ["id", "view_certificate", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], ["class", "modal-body", 4, "ngIf"], [3, "value"], [1, "alert", "alert-danger", "mb-4"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "col-md-6", "col-lg-4", "mb-4"], [1, "card", "h-100"], [1, "card-body"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-3"], [1, "card-title", "mb-0"], [1, "mb-2"], ["class", "mb-2", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], [1, "d-flex", "justify-content-between"], [1, "btn-group"], ["data-bs-toggle", "modal", "data-bs-target", "#view_certificate", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "isax", "isax-eye"], [1, "btn", "btn-sm", "btn-outline-success", 3, "click"], [1, "isax", "isax-import"], ["class", "btn btn-sm btn-outline-warning", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-outline-success", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "isax", "isax-trash"], [1, "mb-3"], [1, "btn", "btn-sm", "btn-outline-warning", 3, "click"], [1, "isax", "isax-close-circle"], [1, "isax", "isax-check-circle"], [1, "text-center", "py-5"], [1, "isax", "isax-document-text", "display-1", "text-muted", "mb-3"], [1, "text-muted"], [1, "d-flex", "justify-content-center", "mt-4"], ["aria-label", "Pagination des certificats"], [1, "pagination"], [1, "page-item"], [1, "page-link", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], [1, "page-item", "active"], [1, "page-link"], [1, "isax", "isax-arrow-right-3"], [1, "modal-body"], [1, "col-md-6"], [1, "table", "table-borderless"], [4, "ngIf"], [1, "text-center", "mt-4"], [1, "isax", "isax-import", "me-2"], ["class", "btn btn-warning me-2", "data-bs-dismiss", "modal", 3, "click", 4, "ngIf"], ["class", "btn btn-success me-2", "data-bs-dismiss", "modal", 3, "click", 4, "ngIf"], ["data-bs-dismiss", "modal", 1, "btn", "btn-warning", "me-2", 3, "click"], [1, "isax", "isax-close-circle", "me-2"], ["data-bs-dismiss", "modal", 1, "btn", "btn-success", "me-2", 3, "click"], [1, "isax", "isax-check-circle", "me-2"]], template: function SuperadminCertificateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
      \u0275\u0275text(3, "Gestion des Certificats");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "button", 2);
      \u0275\u0275listener("click", function SuperadminCertificateComponent_Template_button_click_5_listener() {
        return ctx.loadCertificates();
      });
      \u0275\u0275element(6, "i", 3);
      \u0275\u0275text(7, "Actualiser ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "label", 7);
      \u0275\u0275text(12, "Rechercher");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminCertificateComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SuperadminCertificateComponent_Template_input_ngModelChange_13_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 9)(15, "div", 6)(16, "label", 7);
      \u0275\u0275text(17, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminCertificateComponent_Template_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SuperadminCertificateComponent_Template_select_ngModelChange_18_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(19, "option", 11);
      \u0275\u0275text(20, "Tous les statuts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 12);
      \u0275\u0275text(22, "Valide");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "option", 13);
      \u0275\u0275text(24, "Expir\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "option", 14);
      \u0275\u0275text(26, "R\xE9voqu\xE9");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(27, "div", 9)(28, "div", 6)(29, "label", 7);
      \u0275\u0275text(30, "Entreprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function SuperadminCertificateComponent_Template_select_ngModelChange_31_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedEntreprise, $event) || (ctx.selectedEntreprise = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SuperadminCertificateComponent_Template_select_ngModelChange_31_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(32, "option", 11);
      \u0275\u0275text(33, "Toutes les entreprises");
      \u0275\u0275elementEnd();
      \u0275\u0275template(34, SuperadminCertificateComponent_option_34_Template, 2, 2, "option", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 16)(36, "div", 6)(37, "label", 7);
      \u0275\u0275text(38, "R\xE9sultats");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 17);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(41, SuperadminCertificateComponent_div_41_Template, 2, 1, "div", 18)(42, SuperadminCertificateComponent_div_42_Template, 4, 0, "div", 19);
      \u0275\u0275elementStart(43, "div", 20);
      \u0275\u0275template(44, SuperadminCertificateComponent_div_44_Template, 37, 13, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(45, SuperadminCertificateComponent_div_45_Template, 6, 0, "div", 22)(46, SuperadminCertificateComponent_div_46_Template, 12, 8, "div", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 24)(48, "div", 25)(49, "div", 26)(50, "div", 27)(51, "h5");
      \u0275\u0275text(52, "D\xE9tails du Certificat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "button", 28);
      \u0275\u0275element(54, "i", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(55, SuperadminCertificateComponent_div_55_Template, 73, 17, "div", 30);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedEntreprise);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.getUniqueEntreprises());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.filteredCertificates.length, " certificat(s) ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getPaginatedCertificates());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredCertificates.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalPages > 1);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.selectedCertificate);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminCertificateComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-certificate", imports: [CommonModule, FormsModule], template: `<div class="certificate">
  <div class="page-title d-flex align-items-center justify-content-between mb-4">
    <h5>Gestion des Certificats</h5>
    <div>
      <button class="btn btn-primary me-2" (click)="loadCertificates()">
        <i class="isax isax-refresh-circle me-1"></i>Actualiser
      </button>
    </div>
  </div>

  <!-- Filtres et recherche -->
  <div class="row mb-4">
    <div class="col-md-4">
      <div class="form-group">
        <label class="form-label">Rechercher</label>
        <input 
          type="text" 
          class="form-control" 
          placeholder="Code, employ\xE9, formation..."
          [(ngModel)]="searchTerm"
          (ngModelChange)="applyFilters()">
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label class="form-label">Statut</label>
        <select class="form-control" [(ngModel)]="selectedStatus" (ngModelChange)="applyFilters()">
          <option value="">Tous les statuts</option>
          <option value="valide">Valide</option>
          <option value="expir\xE9">Expir\xE9</option>
          <option value="r\xE9voqu\xE9">R\xE9voqu\xE9</option>
        </select>
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label class="form-label">Entreprise</label>
        <select class="form-control" [(ngModel)]="selectedEntreprise" (ngModelChange)="applyFilters()">
          <option value="">Toutes les entreprises</option>
          <option *ngFor="let entreprise of getUniqueEntreprises()" [value]="entreprise.id">
            {{entreprise.nom}}
          </option>
        </select>
      </div>
    </div>
    <div class="col-md-2">
      <div class="form-group">
        <label class="form-label">R\xE9sultats</label>
        <div class="form-control-plaintext">
          {{filteredCertificates.length}} certificat(s)
        </div>
      </div>
    </div>
  </div>

  <!-- Message d'erreur -->
  <div *ngIf="error" class="alert alert-danger mb-4">
    {{error}}
  </div>

  <!-- Loading -->
  <div *ngIf="loading" class="text-center py-4">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Chargement...</span>
    </div>
  </div>

  <!-- Liste des certificats -->
  <div class="row">
    <div *ngFor="let certificate of getPaginatedCertificates()" class="col-md-6 col-lg-4 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-3">
            <h6 class="card-title mb-0">{{certificate.code_unique}}</h6>
            <span [class]="getStatusClass(certificate.statut)">{{certificate.statut}}</span>
          </div>
          
          <div class="mb-2">
            <strong>Employ\xE9:</strong> {{certificate.employe.prenom}} {{certificate.employe.nom}}
          </div>
          
          <div class="mb-2">
            <strong>Formation:</strong> {{certificate.formation.titre}}
          </div>
          
          <div class="mb-2">
            <strong>Entreprise:</strong> {{certificate.entreprise.nom}}
          </div>
          
          <div class="mb-2">
            <strong>D\xE9livr\xE9 le:</strong> {{formatDate(certificate.date_delivrance)}}
          </div>
          
          <div *ngIf="certificate.date_expiration" class="mb-2">
            <strong>Expire le:</strong> 
            <span [class]="isExpired(certificate) ? 'text-danger' : 'text-muted'">
              {{formatDate(certificate.date_expiration)}}
            </span>
          </div>
          
          <div *ngIf="certificate.score_final" class="mb-3">
            <strong>Score:</strong> {{certificate.score_final}}%
          </div>

          <div class="d-flex justify-content-between">
            <div class="btn-group">
              <button 
                class="btn btn-sm btn-outline-primary" 
                (click)="viewCertificate(certificate)"
                data-bs-toggle="modal" 
                data-bs-target="#view_certificate">
                <i class="isax isax-eye"></i>
              </button>
              
              <button 
                class="btn btn-sm btn-outline-success" 
                (click)="downloadCertificate(certificate)">
                <i class="isax isax-import"></i>
              </button>
            </div>

            <div class="btn-group">
              <button 
                *ngIf="certificate.statut === 'valide'"
                class="btn btn-sm btn-outline-warning" 
                (click)="revokeCertificate(certificate)">
                <i class="isax isax-close-circle"></i>
              </button>
              
              <button 
                *ngIf="certificate.statut === 'r\xE9voqu\xE9'"
                class="btn btn-sm btn-outline-success" 
                (click)="reactivateCertificate(certificate)">
                <i class="isax isax-check-circle"></i>
              </button>
              
              <button 
                class="btn btn-sm btn-outline-danger" 
                (click)="deleteCertificate(certificate)">
                <i class="isax isax-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Message si aucun r\xE9sultat -->
  <div *ngIf="!loading && filteredCertificates.length === 0" class="text-center py-5">
    <i class="isax isax-document-text display-1 text-muted mb-3"></i>
    <h5 class="text-muted">Aucun certificat trouv\xE9</h5>
    <p class="text-muted">Modifiez vos crit\xE8res de recherche ou filtres.</p>
  </div>

  <!-- Pagination -->
  <div *ngIf="totalPages > 1" class="d-flex justify-content-center mt-4">
    <nav aria-label="Pagination des certificats">
      <ul class="pagination">
        <li class="page-item" [class.disabled]="currentPage === 1">
          <button class="page-link" (click)="prevPage()" [disabled]="currentPage === 1">
            <i class="isax isax-arrow-left-2"></i>
          </button>
        </li>
        
        <li class="page-item active">
          <span class="page-link">{{currentPage}} / {{totalPages}}</span>
        </li>
        
        <li class="page-item" [class.disabled]="currentPage === totalPages">
          <button class="page-link" (click)="nextPage()" [disabled]="currentPage === totalPages">
            <i class="isax isax-arrow-right-3"></i>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</div>

<!-- Modal de visualisation -->
<div class="modal fade" id="view_certificate">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5>D\xE9tails du Certificat</h5>
        <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
          <i class="isax isax-close-circle5"></i>
        </button>
      </div>
      <div class="modal-body" *ngIf="selectedCertificate">
        <div class="row">
          <div class="col-md-6">
            <h6>Informations g\xE9n\xE9rales</h6>
            <table class="table table-borderless">
              <tr>
                <td><strong>Code unique:</strong></td>
                <td>{{selectedCertificate.code_unique}}</td>
              </tr>
              <tr>
                <td><strong>Statut:</strong></td>
                <td><span [class]="getStatusClass(selectedCertificate.statut)">{{selectedCertificate.statut}}</span></td>
              </tr>
              <tr>
                <td><strong>Date de d\xE9livrance:</strong></td>
                <td>{{formatDate(selectedCertificate.date_delivrance)}}</td>
              </tr>
              <tr *ngIf="selectedCertificate.date_expiration">
                <td><strong>Date d'expiration:</strong></td>
                <td>{{formatDate(selectedCertificate.date_expiration)}}</td>
              </tr>
              <tr *ngIf="selectedCertificate.score_final">
                <td><strong>Score final:</strong></td>
                <td>{{selectedCertificate.score_final}}%</td>
              </tr>
            </table>
          </div>
          
          <div class="col-md-6">
            <h6>D\xE9tails</h6>
            <table class="table table-borderless">
              <tr>
                <td><strong>Employ\xE9:</strong></td>
                <td>{{selectedCertificate.employe.prenom}} {{selectedCertificate.employe.nom}}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>{{selectedCertificate.employe.email}}</td>
              </tr>
              <tr>
                <td><strong>Fonction:</strong></td>
                <td>{{selectedCertificate.employe.fonction}}</td>
              </tr>
              <tr>
                <td><strong>Formation:</strong></td>
                <td>{{selectedCertificate.formation.titre}}</td>
              </tr>
              <tr>
                <td><strong>Formateur:</strong></td>
                <td>{{selectedCertificate.formateur.prenom}} {{selectedCertificate.formateur.nom}}</td>
              </tr>
              <tr>
                <td><strong>Entreprise:</strong></td>
                <td>{{selectedCertificate.entreprise.nom}}</td>
              </tr>
            </table>
          </div>
        </div>
        
        <div class="text-center mt-4">
          <button 
            class="btn btn-primary me-2" 
            (click)="downloadCertificate(selectedCertificate)">
            <i class="isax isax-import me-2"></i>T\xE9l\xE9charger PDF
          </button>
          
          <button 
            *ngIf="selectedCertificate.statut === 'valide'"
            class="btn btn-warning me-2" 
            (click)="revokeCertificate(selectedCertificate)"
            data-bs-dismiss="modal">
            <i class="isax isax-close-circle me-2"></i>R\xE9voquer
          </button>
          
          <button 
            *ngIf="selectedCertificate.statut === 'r\xE9voqu\xE9'"
            class="btn btn-success me-2" 
            (click)="reactivateCertificate(selectedCertificate)"
            data-bs-dismiss="modal">
            <i class="isax isax-check-circle me-2"></i>R\xE9activer
          </button>
        </div>
      </div>
    </div>
  </div>
</div>` }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminCertificateComponent, { className: "SuperadminCertificateComponent", filePath: "src/app/features/superadmin/superadmin-certificate/superadmin-certificate.component.ts", lineNumber: 52 });
})();
export {
  SuperadminCertificateComponent
};
//# sourceMappingURL=chunk-HQN2OF3L.js.map
