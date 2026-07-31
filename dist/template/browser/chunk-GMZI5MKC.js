import {
  httpErrorMessage
} from "./chunk-RL3SOXDI.js";
import {
  ClientCompanyService
} from "./chunk-X44DCWVU.js";
import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-37V3B3KY.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-ZGFJXD53.js";
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from "./chunk-EGNJBGKD.js";
import {
  CommonModule,
  DecimalPipe,
  JsonPipe,
  NgClass,
  NgForOf,
  NgIf,
  UpperCasePipe
} from "./chunk-I2HNPZHV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  Injectable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BSBCM3BI.js";
import "./chunk-4MWRP73S.js";

// src/app/shared/service/audit-log/audit-log.service.ts
var AuditLogService = class _AuditLogService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getHeaders() {
    const token = localStorage.getItem("pyramide_token");
    let headers = new HttpHeaders({ "Content-Type": "application/json" });
    if (token)
      headers = headers.set("Authorization", `Bearer ${token}`);
    return headers;
  }
  getLogs(filters = {}) {
    let params = new HttpParams();
    if (filters.search)
      params = params.set("search", filters.search);
    if (filters.type_action)
      params = params.set("type_action", filters.type_action);
    if (filters.severite)
      params = params.set("severite", filters.severite);
    if (filters.statut)
      params = params.set("statut", filters.statut);
    if (filters.acteur_role)
      params = params.set("acteur_role", filters.acteur_role);
    if (filters.acteur_entreprise)
      params = params.set("acteur_entreprise", filters.acteur_entreprise);
    if (filters.ip_address)
      params = params.set("ip_address", filters.ip_address);
    if (filters.date_debut)
      params = params.set("date_debut", filters.date_debut);
    if (filters.date_fin)
      params = params.set("date_fin", filters.date_fin);
    if (filters.par_page)
      params = params.set("par_page", String(filters.par_page));
    if (filters.page)
      params = params.set("page", String(filters.page));
    return this.http.get(`${this.apiUrl}/audit-logs`, {
      headers: this.getHeaders(),
      params
    });
  }
  getStatistiques(dateDebut, dateFin) {
    let params = new HttpParams();
    if (dateDebut)
      params = params.set("date_debut", dateDebut);
    if (dateFin)
      params = params.set("date_fin", dateFin);
    return this.http.get(`${this.apiUrl}/audit-logs/statistiques`, {
      headers: this.getHeaders(),
      params
    });
  }
  getLogById(id) {
    return this.http.get(`${this.apiUrl}/audit-logs/${id}`, {
      headers: this.getHeaders()
    });
  }
  deleteLogs(ids) {
    return this.http.delete(`${this.apiUrl}/audit-logs/destroy`, {
      headers: this.getHeaders(),
      body: { ids }
    });
  }
  purgeAllLogs() {
    return this.http.delete(`${this.apiUrl}/audit-logs/purge-all`, {
      headers: this.getHeaders()
    });
  }
  getLaravelLog(params = {}) {
    let httpParams = new HttpParams();
    if (params.lines)
      httpParams = httpParams.set("lines", String(params.lines));
    if (params.level)
      httpParams = httpParams.set("level", params.level);
    if (params.search)
      httpParams = httpParams.set("search", params.search);
    return this.http.get(`${this.apiUrl}/audit-logs/laravel-log`, {
      headers: this.getHeaders(),
      params: httpParams
    });
  }
  purgeLaravelLog() {
    return this.http.delete(`${this.apiUrl}/audit-logs/laravel-log`, {
      headers: this.getHeaders()
    });
  }
  exportCsv(filters = {}) {
    let params = new HttpParams();
    if (filters.date_debut)
      params = params.set("date_debut", filters.date_debut);
    if (filters.date_fin)
      params = params.set("date_fin", filters.date_fin);
    if (filters.severite)
      params = params.set("severite", filters.severite);
    return this.http.get(`${this.apiUrl}/audit-logs/export-csv`, {
      headers: this.getHeaders(),
      params,
      responseType: "blob"
    });
  }
  static \u0275fac = function AuditLogService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuditLogService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuditLogService, factory: _AuditLogService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditLogService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/superadmin/superadmin-audit-logs/superadmin-audit-logs.component.ts
function SuperadminAuditLogsComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatFileSize(ctx_r0.laravelFileSize));
  }
}
function SuperadminAuditLogsComponent_ng_container_28_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.laravelTotalEntries, " entr\xE9es \xB7 ", ctx_r0.formatFileSize(ctx_r0.laravelFileSize), " ");
  }
}
function SuperadminAuditLogsComponent_ng_container_28_i_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 50);
  }
}
function SuperadminAuditLogsComponent_ng_container_28_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 51);
  }
}
function SuperadminAuditLogsComponent_ng_container_28_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "i", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.laravelError, " ");
  }
}
function SuperadminAuditLogsComponent_ng_container_28_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "span", 51);
    \u0275\u0275text(2, " Chargement des logs Laravel\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminAuditLogsComponent_ng_container_28_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275element(1, "i", 56);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Fichier laravel.log vide");
    \u0275\u0275elementEnd()();
  }
}
function SuperadminAuditLogsComponent_ng_container_28_div_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 61);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "pre", 62);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.getLevelClass(entry_r3.level));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r3.timestamp);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, entry_r3.level));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r3.message);
  }
}
function SuperadminAuditLogsComponent_ng_container_28_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275template(1, SuperadminAuditLogsComponent_ng_container_28_div_45_div_1_Template, 8, 6, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.laravelEntries);
  }
}
function SuperadminAuditLogsComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 24)(2, "div", 25);
    \u0275\u0275element(3, "i", 26);
    \u0275\u0275elementStart(4, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminAuditLogsComponent_ng_container_28_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.laravelSearch, $event) || (ctx_r0.laravelSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function SuperadminAuditLogsComponent_ng_container_28_Template_input_keyup_enter_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadLaravelLog());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 28);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminAuditLogsComponent_ng_container_28_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.laravelLevel, $event) || (ctx_r0.laravelLevel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SuperadminAuditLogsComponent_ng_container_28_Template_select_change_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadLaravelLog());
    });
    \u0275\u0275elementStart(6, "option", 29);
    \u0275\u0275text(7, "Tous les niveaux");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 30);
    \u0275\u0275text(9, "Emergency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 31);
    \u0275\u0275text(11, "Alert");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 32);
    \u0275\u0275text(13, "Critical");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 33);
    \u0275\u0275text(15, "Error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 34);
    \u0275\u0275text(17, "Warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 35);
    \u0275\u0275text(19, "Notice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 36);
    \u0275\u0275text(21, "Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 37);
    \u0275\u0275text(23, "Debug");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminAuditLogsComponent_ng_container_28_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.laravelLines, $event) || (ctx_r0.laravelLines = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SuperadminAuditLogsComponent_ng_container_28_Template_select_change_24_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadLaravelLog());
    });
    \u0275\u0275elementStart(25, "option", 39);
    \u0275\u0275text(26, "100 derni\xE8res");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 39);
    \u0275\u0275text(28, "200 derni\xE8res");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 39);
    \u0275\u0275text(30, "500 derni\xE8res");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 39);
    \u0275\u0275text(32, "1000 derni\xE8res");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "button", 10);
    \u0275\u0275listener("click", function SuperadminAuditLogsComponent_ng_container_28_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadLaravelLog());
    });
    \u0275\u0275element(34, "i", 11);
    \u0275\u0275text(35, " Actualiser ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "span", 40);
    \u0275\u0275template(37, SuperadminAuditLogsComponent_ng_container_28_span_37_Template, 2, 2, "span", 41);
    \u0275\u0275elementStart(38, "button", 42);
    \u0275\u0275listener("click", function SuperadminAuditLogsComponent_ng_container_28_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.purgeLaravelLog());
    });
    \u0275\u0275template(39, SuperadminAuditLogsComponent_ng_container_28_i_39_Template, 1, 0, "i", 43)(40, SuperadminAuditLogsComponent_ng_container_28_span_40_Template, 1, 0, "span", 44);
    \u0275\u0275text(41, " Purger ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, SuperadminAuditLogsComponent_ng_container_28_div_42_Template, 3, 1, "div", 45)(43, SuperadminAuditLogsComponent_ng_container_28_div_43_Template, 3, 0, "div", 46)(44, SuperadminAuditLogsComponent_ng_container_28_div_44_Template, 4, 0, "div", 47)(45, SuperadminAuditLogsComponent_ng_container_28_div_45_Template, 2, 1, "div", 48);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.laravelSearch);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.laravelLevel);
    \u0275\u0275advance(19);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.laravelLines);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 100);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 200);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 500);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 1e3);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.laravelLoading);
    \u0275\u0275advance();
    \u0275\u0275classProp("spinning", ctx_r0.laravelLoading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.laravelFileSize > 0);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.purging || ctx_r0.laravelEntries.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.purging);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.purging);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.laravelError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.laravelLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.laravelLoading && ctx_r0.laravelEntries.length === 0 && !ctx_r0.laravelError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.laravelLoading && ctx_r0.laravelEntries.length > 0);
  }
}
function SuperadminAuditLogsComponent_ng_container_29_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275text(1, "\xC0 traiter imm\xE9diatement");
    \u0275\u0275elementEnd();
  }
}
function SuperadminAuditLogsComponent_ng_container_29_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275text(1, "Aucune alerte");
    \u0275\u0275elementEnd();
  }
}
function SuperadminAuditLogsComponent_ng_container_29_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275text(1, "Aujourd'hui");
    \u0275\u0275elementEnd();
  }
}
function SuperadminAuditLogsComponent_ng_container_29_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275text(1, "Aucune ce jour");
    \u0275\u0275elementEnd();
  }
}
function SuperadminAuditLogsComponent_ng_container_29_option_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 123);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r5 = ctx.$implicit;
    \u0275\u0275property("value", e_r5.nom);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r5.nom);
  }
}
function SuperadminAuditLogsComponent_ng_container_29_div_116_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275listener("click", function SuperadminAuditLogsComponent_ng_container_29_div_116_div_3_Template_div_click_0_listener() {
      const chip_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeChip(chip_r8.key));
    });
    \u0275\u0275element(1, "i", 129);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 130);
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const chip_r8 = ctx.$implicit;
    \u0275\u0275property("ngClass", chip_r8.class);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", chip_r8.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", chip_r8.label, " ");
  }
}
function SuperadminAuditLogsComponent_ng_container_29_div_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124)(1, "span", 125);
    \u0275\u0275text(2, "Filtres actifs :");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SuperadminAuditLogsComponent_ng_container_29_div_116_div_3_Template, 5, 3, "div", 126);
    \u0275\u0275elementStart(4, "span", 127);
    \u0275\u0275listener("click", function SuperadminAuditLogsComponent_ng_container_29_div_116_Template_span_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearAllFilters());
    });
    \u0275\u0275text(5, "Tout effacer");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.activeChips);
  }
}
function SuperadminAuditLogsComponent_ng_container_29_div_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275element(1, "span", 132);
    \u0275\u0275text(2, " Chargement des logs... ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminAuditLogsComponent_ng_container_29_div_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275element(1, "i", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 134);
    \u0275\u0275listener("click", function SuperadminAuditLogsComponent_ng_container_29_div_118_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.refresh());
    });
    \u0275\u0275text(4, "R\xE9essayer");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function SuperadminAuditLogsComponent_ng_container_29_div_119_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 50);
  }
}
function SuperadminAuditLogsComponent_ng_container_29_div_119_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 51);
  }
}
function SuperadminAuditLogsComponent_ng_container_29_div_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135)(1, "span", 136);
    \u0275\u0275element(2, "i", 137);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 42);
    \u0275\u0275listener("click", function SuperadminAuditLogsComponent_ng_container_29_div_119_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteSelectedLogs());
    });
    \u0275\u0275template(5, SuperadminAuditLogsComponent_ng_container_29_div_119_i_5_Template, 1, 0, "i", 43)(6, SuperadminAuditLogsComponent_ng_container_29_div_119_span_6_Template, 1, 0, "span", 44);
    \u0275\u0275text(7, " Supprimer la s\xE9lection ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 12);
    \u0275\u0275listener("click", function SuperadminAuditLogsComponent_ng_container_29_div_119_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectedIds.clear());
    });
    \u0275\u0275element(9, "i", 138);
    \u0275\u0275text(10, " D\xE9s\xE9lectionner ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "span", 139);
    \u0275\u0275elementStart(12, "button", 42);
    \u0275\u0275listener("click", function SuperadminAuditLogsComponent_ng_container_29_div_119_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.purgeAllAuditLogs());
    });
    \u0275\u0275element(13, "i", 50);
    \u0275\u0275text(14, " Purger tout ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedCount, " log(s) s\xE9lectionn\xE9(s) ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.deleting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.deleting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.deleting);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r0.deleting);
  }
}
function SuperadminAuditLogsComponent_ng_container_29_div_120_tr_23_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const log_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", log_r13.acteur_entreprise);
  }
}
function SuperadminAuditLogsComponent_ng_container_29_div_120_tr_23_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 173);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r13.details);
  }
}
function SuperadminAuditLogsComponent_ng_container_29_div_120_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 151)(1, "td")(2, "input", 152);
    \u0275\u0275listener("change", function SuperadminAuditLogsComponent_ng_container_29_div_120_tr_23_Template_input_change_2_listener() {
      const log_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleSelectLog(log_r13.id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td")(4, "div", 153);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 154);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "div", 155)(10, "div", 156);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 157)(13, "div", 158);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 159);
    \u0275\u0275text(16);
    \u0275\u0275template(17, SuperadminAuditLogsComponent_ng_container_29_div_120_tr_23_ng_container_17_Template, 2, 1, "ng-container", 20);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "td")(19, "span", 160);
    \u0275\u0275element(20, "i", 129);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "div", 161);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, SuperadminAuditLogsComponent_ng_container_29_div_120_tr_23_div_25_Template, 2, 1, "div", 162);
    \u0275\u0275elementStart(26, "div", 163);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td");
    \u0275\u0275element(29, "span", 164);
    \u0275\u0275elementStart(30, "span", 165);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "td")(33, "div", 166);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 167);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "td")(38, "span", 168);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "td")(41, "div", 169)(42, "button", 170);
    \u0275\u0275listener("click", function SuperadminAuditLogsComponent_ng_container_29_div_120_tr_23_Template_button_click_42_listener() {
      const log_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openDetail(log_r13));
    });
    \u0275\u0275element(43, "i", 171);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 172);
    \u0275\u0275listener("click", function SuperadminAuditLogsComponent_ng_container_29_div_120_tr_23_Template_button_click_44_listener() {
      const log_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.toggleSelectLog(log_r13.id);
      return \u0275\u0275resetView(ctx_r0.deleteSelectedLogs());
    });
    \u0275\u0275element(45, "i", 50);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const log_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("row-selected", ctx_r0.isLogSelected(log_r13.id));
    \u0275\u0275property("ngClass", ctx_r0.getRowClass(log_r13));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r0.isLogSelected(log_r13.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatTime(log_r13.created_at));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.timeAgo(log_r13.created_at));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.getActorClass(log_r13));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getActorInitials(log_r13));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(log_r13.acteur_nom ?? "Inconnu");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", log_r13.acteur_role ?? "Non authentifi\xE9");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", log_r13.acteur_entreprise);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getActionClass(log_r13.type_action));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getActionIcon(log_r13.type_action));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getActionLabel(log_r13.type_action), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(log_r13.libelle_action);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", log_r13.details);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r13.reference);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getSeverityDotClass(log_r13.severite));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getSeverityTextClass(log_r13.severite));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getSeverityLabel(log_r13.severite), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(log_r13.ip_address ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r13.localisation ?? "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getStatusClass(log_r13.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(log_r13.statut), " ");
  }
}
function SuperadminAuditLogsComponent_ng_container_29_div_120_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 174);
    \u0275\u0275element(2, "i", 175);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Aucun log trouv\xE9 pour les filtres s\xE9lectionn\xE9s");
    \u0275\u0275elementEnd()()();
  }
}
function SuperadminAuditLogsComponent_ng_container_29_div_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 140)(1, "table", 141)(2, "thead")(3, "tr")(4, "th", 142)(5, "input", 143);
    \u0275\u0275listener("change", function SuperadminAuditLogsComponent_ng_container_29_div_120_Template_input_change_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleSelectAll());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "th", 144);
    \u0275\u0275text(7, "Horodatage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 145);
    \u0275\u0275text(9, "Acteur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 144);
    \u0275\u0275text(11, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 146);
    \u0275\u0275text(13, "Cible / Ressource");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 147);
    \u0275\u0275text(15, "S\xE9v\xE9rit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 144);
    \u0275\u0275text(17, "IP / Localisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 148);
    \u0275\u0275text(19, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 149);
    \u0275\u0275text(21, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, SuperadminAuditLogsComponent_ng_container_29_div_120_tr_23_Template, 46, 24, "tr", 150)(24, SuperadminAuditLogsComponent_ng_container_29_div_120_tr_24_Template, 5, 0, "tr", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r0.allSelected);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r0.logs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.logs.length === 0 && !ctx_r0.loading);
  }
}
function SuperadminAuditLogsComponent_ng_container_29_div_121_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 185);
    \u0275\u0275listener("click", function SuperadminAuditLogsComponent_ng_container_29_div_121_button_16_Template_button_click_0_listener() {
      const p_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.goToPage(p_r16));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r16 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", p_r16 === ctx_r0.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r16);
  }
}
function SuperadminAuditLogsComponent_ng_container_29_div_121_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 186);
    \u0275\u0275text(2, "...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 185);
    \u0275\u0275listener("click", function SuperadminAuditLogsComponent_ng_container_29_div_121_ng_container_17_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.totalPages));
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.totalPages);
  }
}
function SuperadminAuditLogsComponent_ng_container_29_div_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 176)(1, "div", 177);
    \u0275\u0275text(2, " Lignes par page ");
    \u0275\u0275elementStart(3, "select", 178);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminAuditLogsComponent_ng_container_29_div_121_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pageSize, $event) || (ctx_r0.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SuperadminAuditLogsComponent_ng_container_29_div_121_Template_select_change_3_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPageSizeChange());
    });
    \u0275\u0275elementStart(4, "option", 123);
    \u0275\u0275text(5, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 123);
    \u0275\u0275text(7, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 123);
    \u0275\u0275text(9, "100");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "span", 179);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 180)(14, "button", 181);
    \u0275\u0275listener("click", function SuperadminAuditLogsComponent_ng_container_29_div_121_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage - 1));
    });
    \u0275\u0275element(15, "i", 182);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, SuperadminAuditLogsComponent_ng_container_29_div_121_button_16_Template, 2, 3, "button", 183)(17, SuperadminAuditLogsComponent_ng_container_29_div_121_ng_container_17_Template, 5, 1, "ng-container", 20);
    \u0275\u0275elementStart(18, "button", 181);
    \u0275\u0275listener("click", function SuperadminAuditLogsComponent_ng_container_29_div_121_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage + 1));
    });
    \u0275\u0275element(19, "i", 184);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("value", 25);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 50);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 100);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" Affichage ", ctx_r0.displayStart, "\u2013", ctx_r0.displayEnd, " sur ", \u0275\u0275pipeBind1(12, 11, ctx_r0.totalItems), " \xE9v\xE9nements ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.totalPages > 4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
  }
}
function SuperadminAuditLogsComponent_ng_container_29_span_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 187);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.kpi.alertesCritiques, " critiques");
  }
}
function SuperadminAuditLogsComponent_ng_container_29_ng_container_129_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 189)(1, "div", 190);
    \u0275\u0275element(2, "i", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 191)(4, "div", 192);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 193);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 194);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alert_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", alert_r18.iconClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", alert_r18.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(alert_r18.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(alert_r18.sub);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(alert_r18.time);
  }
}
function SuperadminAuditLogsComponent_ng_container_29_ng_container_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SuperadminAuditLogsComponent_ng_container_29_ng_container_129_div_1_Template, 10, 5, "div", 188);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.securityAlerts);
  }
}
function SuperadminAuditLogsComponent_ng_container_29_ng_template_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 189)(1, "div", 195);
    \u0275\u0275text(2, " Aucune alerte critique aujourd'hui ");
    \u0275\u0275elementEnd()();
  }
}
function SuperadminAuditLogsComponent_ng_container_29_ng_container_137_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 197)(1, "span", 198);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 199);
    \u0275\u0275element(4, "div", 200);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 201);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r19 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r19.label);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", stat_r19.barWidth, "%");
    \u0275\u0275property("ngClass", stat_r19.fillClass);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, stat_r19.value));
  }
}
function SuperadminAuditLogsComponent_ng_container_29_ng_container_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SuperadminAuditLogsComponent_ng_container_29_ng_container_137_div_1_Template, 8, 7, "div", 196);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.actionStats);
  }
}
function SuperadminAuditLogsComponent_ng_container_29_ng_template_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 202);
    \u0275\u0275text(1, " Aucune donn\xE9e disponible ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminAuditLogsComponent_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 63)(2, "div", 64)(3, "div", 65)(4, "span", 66);
    \u0275\u0275element(5, "i", 67);
    \u0275\u0275text(6, " Logs aujourd'hui");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 68);
    \u0275\u0275element(8, "i", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 69);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 70);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 64)(15, "div", 65)(16, "span", 66);
    \u0275\u0275element(17, "i", 53);
    \u0275\u0275text(18, " Alertes critiques");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 71);
    \u0275\u0275element(20, "i", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 69);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, SuperadminAuditLogsComponent_ng_container_29_div_23_Template, 2, 0, "div", 72)(24, SuperadminAuditLogsComponent_ng_container_29_div_24_Template, 2, 0, "div", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 64)(26, "div", 65)(27, "span", 66);
    \u0275\u0275element(28, "i", 74);
    \u0275\u0275text(29, " Connexions \xE9chou\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 75);
    \u0275\u0275element(31, "i", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 69);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, SuperadminAuditLogsComponent_ng_container_29_div_34_Template, 2, 0, "div", 72)(35, SuperadminAuditLogsComponent_ng_container_29_div_35_Template, 2, 0, "div", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 64)(37, "div", 65)(38, "span", 66);
    \u0275\u0275element(39, "i", 76);
    \u0275\u0275text(40, " Utilisateurs actifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 77);
    \u0275\u0275element(42, "i", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 69);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 78);
    \u0275\u0275text(46, "Aujourd'hui");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 64)(48, "div", 65)(49, "span", 66);
    \u0275\u0275element(50, "i", 50);
    \u0275\u0275text(51, " Suppressions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 79);
    \u0275\u0275element(53, "i", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 69);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 78);
    \u0275\u0275text(57, "Ce mois");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 80)(59, "div", 81)(60, "div", 82)(61, "div", 83)(62, "div", 84);
    \u0275\u0275element(63, "i", 85);
    \u0275\u0275elementStart(64, "input", 86);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminAuditLogsComponent_ng_container_29_Template_input_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchQuery, $event) || (ctx_r0.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SuperadminAuditLogsComponent_ng_container_29_Template_input_ngModelChange_64_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSearch());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "select", 87);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminAuditLogsComponent_ng_container_29_Template_select_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filterType, $event) || (ctx_r0.filterType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SuperadminAuditLogsComponent_ng_container_29_Template_select_change_65_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFilterChange());
    });
    \u0275\u0275elementStart(66, "option", 29);
    \u0275\u0275text(67, "Tous les types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "option", 88);
    \u0275\u0275text(69, "Connexion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "option", 89);
    \u0275\u0275text(71, "\xC9chec connexion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "option", 90);
    \u0275\u0275text(73, "Cr\xE9ation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "option", 91);
    \u0275\u0275text(75, "Modification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "option", 92);
    \u0275\u0275text(77, "Suppression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "option", 93);
    \u0275\u0275text(79, "Export de donn\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "option", 94);
    \u0275\u0275text(81, "Acc\xE8s refus\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "option", 95);
    \u0275\u0275text(83, "R\xE9vocation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "option", 96);
    \u0275\u0275text(85, "Approbation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "select", 87);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminAuditLogsComponent_ng_container_29_Template_select_ngModelChange_86_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filterProfile, $event) || (ctx_r0.filterProfile = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SuperadminAuditLogsComponent_ng_container_29_Template_select_change_86_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFilterChange());
    });
    \u0275\u0275elementStart(87, "option", 29);
    \u0275\u0275text(88, "Tous les profils");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "option", 97);
    \u0275\u0275text(90, "Superadmin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "option", 98);
    \u0275\u0275text(92, "Admin RH");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "option", 99);
    \u0275\u0275text(94, "Formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "option", 100);
    \u0275\u0275text(96, "Employ\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "select", 87);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminAuditLogsComponent_ng_container_29_Template_select_ngModelChange_97_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filterCompany, $event) || (ctx_r0.filterCompany = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SuperadminAuditLogsComponent_ng_container_29_Template_select_change_97_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFilterChange());
    });
    \u0275\u0275elementStart(98, "option", 29);
    \u0275\u0275text(99, "Toutes les entreprises");
    \u0275\u0275elementEnd();
    \u0275\u0275template(100, SuperadminAuditLogsComponent_ng_container_29_option_100_Template, 2, 2, "option", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "select", 87);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminAuditLogsComponent_ng_container_29_Template_select_ngModelChange_101_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filterSeverity, $event) || (ctx_r0.filterSeverity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SuperadminAuditLogsComponent_ng_container_29_Template_select_change_101_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFilterChange());
    });
    \u0275\u0275elementStart(102, "option", 29);
    \u0275\u0275text(103, "Tous niveaux");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "option", 36);
    \u0275\u0275text(105, "Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "option", 102);
    \u0275\u0275text(107, "Avertissement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "option", 103);
    \u0275\u0275text(109, "Critique");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(110, "div", 104);
    \u0275\u0275elementStart(111, "div", 105)(112, "input", 106);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminAuditLogsComponent_ng_container_29_Template_input_ngModelChange_112_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.dateFrom, $event) || (ctx_r0.dateFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SuperadminAuditLogsComponent_ng_container_29_Template_input_change_112_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFilterChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "span", 107);
    \u0275\u0275text(114, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "input", 106);
    \u0275\u0275twoWayListener("ngModelChange", function SuperadminAuditLogsComponent_ng_container_29_Template_input_ngModelChange_115_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.dateTo, $event) || (ctx_r0.dateTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SuperadminAuditLogsComponent_ng_container_29_Template_input_change_115_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFilterChange());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(116, SuperadminAuditLogsComponent_ng_container_29_div_116_Template, 6, 1, "div", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275template(117, SuperadminAuditLogsComponent_ng_container_29_div_117_Template, 3, 0, "div", 109)(118, SuperadminAuditLogsComponent_ng_container_29_div_118_Template, 5, 1, "div", 110)(119, SuperadminAuditLogsComponent_ng_container_29_div_119_Template, 15, 5, "div", 111)(120, SuperadminAuditLogsComponent_ng_container_29_div_120_Template, 25, 3, "div", 112)(121, SuperadminAuditLogsComponent_ng_container_29_div_121_Template, 20, 13, "div", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "div", 114)(123, "div", 115)(124, "div", 116);
    \u0275\u0275element(125, "i", 117);
    \u0275\u0275elementStart(126, "span", 118);
    \u0275\u0275text(127, "Alertes s\xE9curit\xE9 actives");
    \u0275\u0275elementEnd();
    \u0275\u0275template(128, SuperadminAuditLogsComponent_ng_container_29_span_128_Template, 2, 1, "span", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275template(129, SuperadminAuditLogsComponent_ng_container_29_ng_container_129_Template, 2, 1, "ng-container", 120)(130, SuperadminAuditLogsComponent_ng_container_29_ng_template_130_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "div", 115)(133, "div", 116);
    \u0275\u0275element(134, "i", 121);
    \u0275\u0275elementStart(135, "span", 118);
    \u0275\u0275text(136, "R\xE9partition des actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(137, SuperadminAuditLogsComponent_ng_container_29_ng_container_137_Template, 2, 1, "ng-container", 120)(138, SuperadminAuditLogsComponent_ng_container_29_ng_template_138_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const noAlerts_r20 = \u0275\u0275reference(131);
    const noStats_r21 = \u0275\u0275reference(139);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 30, ctx_r0.kpi.logsToday));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.tendanceClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.tendanceLabel);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.kpi.alertesCritiques);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.kpi.alertesCritiques > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.kpi.alertesCritiques === 0);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.kpi.connexionsEchouees);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.kpi.connexionsEchouees > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.kpi.connexionsEchouees === 0);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.kpi.utilisateursActifs);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.kpi.suppressions);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.filterType);
    \u0275\u0275advance(21);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.filterProfile);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.filterCompany);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.entreprises);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.filterSeverity);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.dateFrom);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.dateTo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeChips.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.error && !ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedCount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && !ctx_r0.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.totalItems > 0);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.kpi.alertesCritiques > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.securityAlerts.length > 0)("ngIfElse", noAlerts_r20);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.actionStats.length > 0)("ngIfElse", noStats_r21);
  }
}
function SuperadminAuditLogsComponent_div_31_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 224);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedLog.details, " ");
  }
}
function SuperadminAuditLogsComponent_div_31_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 215);
    \u0275\u0275text(1, "Ressource cibl\xE9e");
    \u0275\u0275elementEnd();
  }
}
function SuperadminAuditLogsComponent_div_31_div_57_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 211)(1, "div", 212);
    \u0275\u0275text(2, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 213);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedLog.entite_type);
  }
}
function SuperadminAuditLogsComponent_div_31_div_57_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 211)(1, "div", 212);
    \u0275\u0275text(2, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 214);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", ctx_r0.selectedLog.entite_id);
  }
}
function SuperadminAuditLogsComponent_div_31_div_57_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 211)(1, "div", 212);
    \u0275\u0275text(2, "Label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 213);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedLog.entite_label);
  }
}
function SuperadminAuditLogsComponent_div_31_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 210);
    \u0275\u0275template(1, SuperadminAuditLogsComponent_div_31_div_57_div_1_Template, 5, 1, "div", 222)(2, SuperadminAuditLogsComponent_div_31_div_57_div_2_Template, 5, 1, "div", 222)(3, SuperadminAuditLogsComponent_div_31_div_57_div_3_Template, 5, 1, "div", 222);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedLog.entite_type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedLog.entite_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedLog.entite_label);
  }
}
function SuperadminAuditLogsComponent_div_31_span_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 225);
    \u0275\u0275text(1, "TOR");
    \u0275\u0275elementEnd();
  }
}
function SuperadminAuditLogsComponent_div_31_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 211)(1, "div", 212);
    \u0275\u0275text(2, "M\xE9thode HTTP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 214);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.selectedLog.methode_http, " ", ctx_r0.selectedLog.code_http);
  }
}
function SuperadminAuditLogsComponent_div_31_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 226)(1, "div", 227)(2, "div", 212);
    \u0275\u0275text(3, "URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 228);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedLog.url);
  }
}
function SuperadminAuditLogsComponent_div_31_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 226)(1, "div", 227)(2, "div", 212);
    \u0275\u0275text(3, "User-Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 229);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedLog.user_agent);
  }
}
function SuperadminAuditLogsComponent_div_31_ng_container_75_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 232)(1, "div", 233);
    \u0275\u0275text(2, "Avant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre", 234);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r0.selectedLog.avant));
  }
}
function SuperadminAuditLogsComponent_div_31_ng_container_75_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 235)(1, "div", 233);
    \u0275\u0275text(2, "Apr\xE8s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre", 234);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r0.selectedLog.apres));
  }
}
function SuperadminAuditLogsComponent_div_31_ng_container_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 215);
    \u0275\u0275text(2, "Modifications");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SuperadminAuditLogsComponent_div_31_ng_container_75_div_3_Template, 6, 3, "div", 230)(4, SuperadminAuditLogsComponent_div_31_ng_container_75_div_4_Template, 6, 3, "div", 231);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.selectedLog.avant);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedLog.apres);
  }
}
function SuperadminAuditLogsComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 203)(1, "div", 204)(2, "div", 205)(3, "span", 160);
    \u0275\u0275element(4, "i", 129);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 206);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 207);
    \u0275\u0275listener("click", function SuperadminAuditLogsComponent_div_31_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDetail());
    });
    \u0275\u0275element(9, "i", 208);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 209)(11, "div", 210)(12, "div", 211)(13, "div", 212);
    \u0275\u0275text(14, "S\xE9v\xE9rit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 213);
    \u0275\u0275element(16, "span", 164);
    \u0275\u0275elementStart(17, "span", 165);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 211)(20, "div", 212);
    \u0275\u0275text(21, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 213)(23, "span", 168);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 211)(26, "div", 212);
    \u0275\u0275text(27, "Horodatage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 214);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 215);
    \u0275\u0275text(31, "Acteur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 210)(33, "div", 211)(34, "div", 212);
    \u0275\u0275text(35, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 216)(37, "div", 156);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 211)(42, "div", 212);
    \u0275\u0275text(43, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 213);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 211)(47, "div", 212);
    \u0275\u0275text(48, "Entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 213);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 215);
    \u0275\u0275text(52, "Description de l'action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 217);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275template(55, SuperadminAuditLogsComponent_div_31_div_55_Template, 2, 1, "div", 218)(56, SuperadminAuditLogsComponent_div_31_div_56_Template, 2, 0, "div", 219)(57, SuperadminAuditLogsComponent_div_31_div_57_Template, 4, 3, "div", 220);
    \u0275\u0275elementStart(58, "div", 215);
    \u0275\u0275text(59, "Informations r\xE9seau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 210)(61, "div", 211)(62, "div", 212);
    \u0275\u0275text(63, "Adresse IP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 214);
    \u0275\u0275text(65);
    \u0275\u0275template(66, SuperadminAuditLogsComponent_div_31_span_66_Template, 2, 0, "span", 221);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 211)(68, "div", 212);
    \u0275\u0275text(69, "Localisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 213);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(72, SuperadminAuditLogsComponent_div_31_div_72_Template, 5, 2, "div", 222);
    \u0275\u0275elementEnd();
    \u0275\u0275template(73, SuperadminAuditLogsComponent_div_31_div_73_Template, 6, 1, "div", 223)(74, SuperadminAuditLogsComponent_div_31_div_74_Template, 6, 1, "div", 223)(75, SuperadminAuditLogsComponent_div_31_ng_container_75_Template, 5, 2, "ng-container", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("open", ctx_r0.drawerOpen);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.getActionClass(ctx_r0.selectedLog.type_action));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getActionIcon(ctx_r0.selectedLog.type_action));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getActionLabel(ctx_r0.selectedLog.type_action), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedLog.reference);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngClass", ctx_r0.getSeverityDotClass(ctx_r0.selectedLog.severite));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getSeverityTextClass(ctx_r0.selectedLog.severite));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getSeverityLabel(ctx_r0.selectedLog.severite), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r0.getStatusClass(ctx_r0.selectedLog.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(ctx_r0.selectedLog.statut), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatTime(ctx_r0.selectedLog.created_at));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", ctx_r0.getActorClass(ctx_r0.selectedLog));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getActorInitials(ctx_r0.selectedLog));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedLog.acteur_nom ?? "Inconnu");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedLog.acteur_role ?? "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedLog.acteur_entreprise ?? "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedLog.libelle_action);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedLog.details);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedLog.entite_label || ctx_r0.selectedLog.entite_type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedLog.entite_label || ctx_r0.selectedLog.entite_type);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedLog.ip_address ?? "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedLog.est_tor);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedLog.localisation ?? "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedLog.methode_http);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedLog.url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedLog.user_agent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedLog.avant || ctx_r0.selectedLog.apres);
  }
}
var SuperadminAuditLogsComponent = class _SuperadminAuditLogsComponent {
  auditLogService;
  companyService;
  routes = routes;
  // ── État chargement ──────────────────────────────────────────────────────────
  loading = false;
  loadingStats = false;
  error = null;
  // ── Filtres ──────────────────────────────────────────────────────────────────
  searchQuery = "";
  filterType = "";
  filterProfile = "";
  filterCompany = "";
  filterSeverity = "";
  dateFrom = "";
  dateTo = "";
  activeChips = [];
  searchSubject = new Subject();
  destroy$ = new Subject();
  // ── Pagination ───────────────────────────────────────────────────────────────
  currentPage = 1;
  pageSize = 50;
  totalItems = 0;
  lastPage = 1;
  // ── KPI ──────────────────────────────────────────────────────────────────────
  kpi = {
    logsToday: 0,
    tendancePourcent: 0,
    alertesCritiques: 0,
    connexionsEchouees: 0,
    utilisateursActifs: 0,
    suppressions: 0
  };
  // ── Données ──────────────────────────────────────────────────────────────────
  logs = [];
  securityAlerts = [];
  actionStats = [];
  entreprises = [];
  // ── Sélection & suppression ──────────────────────────────────────────────────
  selectedIds = /* @__PURE__ */ new Set();
  deleting = false;
  // ── Drawer détail ────────────────────────────────────────────────────────────
  selectedLog = null;
  drawerOpen = false;
  // ── Laravel Log tab ─────────────────────────────────────────────────────────
  activeTab = "audit";
  laravelEntries = [];
  laravelLoading = false;
  laravelError = "";
  laravelFileSize = 0;
  laravelTotalEntries = 0;
  laravelSearch = "";
  laravelLevel = "";
  laravelLines = 200;
  purging = false;
  STAT_LABELS = {
    connexion: { label: "Connexions r\xE9ussies", fillClass: "sf-g" },
    modification: { label: "Modifications", fillClass: "sf-p" },
    creation: { label: "Cr\xE9ations", fillClass: "sf-p" },
    export: { label: "Exports de donn\xE9es", fillClass: "sf-a" },
    echec_connexion: { label: "Connexions \xE9chou\xE9es", fillClass: "sf-a" },
    suppression: { label: "Suppressions", fillClass: "sf-r" },
    acces_refuse: { label: "Acc\xE8s refus\xE9s", fillClass: "sf-r" },
    revocation: { label: "R\xE9vocations", fillClass: "sf-r" },
    approbation: { label: "Approbations", fillClass: "sf-g" },
    generation: { label: "G\xE9n\xE9rations", fillClass: "sf-g" }
  };
  constructor(auditLogService, companyService) {
    this.auditLogService = auditLogService;
    this.companyService = companyService;
  }
  ngOnInit() {
    this.initSearchDebounce();
    this.loadAll();
    this.loadEntreprises();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ── Chargement ────────────────────────────────────────────────────────────────
  initSearchDebounce() {
    this.searchSubject.pipe(debounceTime(400), distinctUntilChanged(), takeUntil(this.destroy$)).subscribe(() => {
      this.currentPage = 1;
      this.loadLogs();
      this.buildActiveChips();
    });
  }
  loadAll() {
    this.loadLogs();
    this.loadStats();
  }
  loadLogs() {
    this.loading = true;
    this.error = null;
    this.auditLogService.getLogs(this.buildFilters()).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        const paginated = res.data;
        this.logs = paginated.data ?? [];
        this.totalItems = paginated.total ?? 0;
        this.lastPage = paginated.last_page ?? 1;
        this.currentPage = paginated.current_page ?? 1;
        this.loading = false;
      },
      error: (err) => {
        this.error = httpErrorMessage(err, "Impossible de charger les logs.");
        this.loading = false;
      }
    });
  }
  loadStats() {
    this.loadingStats = true;
    this.auditLogService.getStatistiques(this.dateFrom || void 0, this.dateTo || void 0).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        const data = res.data;
        this.kpi = {
          logsToday: data.kpi.logs_aujourdhui,
          tendancePourcent: data.kpi.tendance_pourcent,
          alertesCritiques: data.kpi.alertes_critiques,
          connexionsEchouees: data.kpi.connexions_echouees,
          utilisateursActifs: data.kpi.utilisateurs_actifs,
          suppressions: data.kpi.suppressions_mois
        };
        const repartition = data.repartition ?? {};
        const max = Math.max(...Object.values(repartition), 1);
        this.actionStats = Object.entries(repartition).sort(([, a], [, b]) => b - a).map(([key, value]) => {
          const meta = this.STAT_LABELS[key] ?? { label: key, fillClass: "sf-p" };
          return {
            key,
            label: meta.label,
            value,
            barWidth: Math.round(value / max * 100),
            fillClass: meta.fillClass
          };
        });
        this.securityAlerts = (data.alertes_actives ?? []).map((log) => ({
          icon: this.getAlertIcon(log.type_action),
          iconClass: log.severite === "critique" ? "ai-icon-r" : "ai-icon-a",
          title: log.libelle_action,
          sub: [log.entite_label, log.details, log.ip_address].filter(Boolean).join(" \xB7 "),
          time: this.timeAgo(new Date(log.created_at))
        }));
        this.loadingStats = false;
      },
      error: () => {
        this.loadingStats = false;
      }
    });
  }
  refresh() {
    this.loadAll();
  }
  loadEntreprises() {
    this.companyService.getCompanies({ per_page: 200 }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        const data = res.data ?? res.entreprises ?? res ?? [];
        this.entreprises = (Array.isArray(data) ? data : []).map((e) => ({
          id: e.id,
          nom: e.nom
        }));
      },
      error: () => {
      }
    });
  }
  // ── Filtres ────────────────────────────────────────────────────────────────────
  buildFilters() {
    return {
      search: this.searchQuery || void 0,
      type_action: this.filterType || void 0,
      acteur_role: this.filterProfile || void 0,
      acteur_entreprise: this.filterCompany || void 0,
      severite: this.filterSeverity || void 0,
      date_debut: this.dateFrom || void 0,
      date_fin: this.dateTo || void 0,
      par_page: this.pageSize,
      page: this.currentPage
    };
  }
  onSearch() {
    this.searchSubject.next(this.searchQuery);
  }
  onFilterChange() {
    this.currentPage = 1;
    this.loadLogs();
    this.loadStats();
    this.buildActiveChips();
  }
  buildActiveChips() {
    const chips = [];
    const sevLabels = { critique: "Critique", attention: "Avertissement", info: "Info" };
    if (this.filterSeverity) {
      chips.push({ label: sevLabels[this.filterSeverity] ?? this.filterSeverity, class: "afc-r", icon: "isax-warning-2", key: "severity" });
    }
    if (this.filterProfile) {
      chips.push({ label: this.filterProfile, class: "afc-p", icon: "isax-shield", key: "profile" });
    }
    if (this.filterCompany) {
      chips.push({ label: this.filterCompany, class: "afc-b", icon: "isax-buildings-2", key: "company" });
    }
    if (this.filterType) {
      chips.push({ label: this.filterType, class: "afc-g", icon: "isax-tag", key: "type" });
    }
    if (this.dateFrom) {
      chips.push({ label: this.dateFrom + (this.dateTo && this.dateTo !== this.dateFrom ? " \u2192 " + this.dateTo : ""), class: "afc-a", icon: "isax-calendar", key: "date" });
    }
    this.activeChips = chips;
  }
  removeChip(key) {
    if (key === "severity")
      this.filterSeverity = "";
    if (key === "profile")
      this.filterProfile = "";
    if (key === "company")
      this.filterCompany = "";
    if (key === "type")
      this.filterType = "";
    if (key === "date") {
      this.dateFrom = "";
      this.dateTo = "";
    }
    this.onFilterChange();
  }
  clearAllFilters() {
    this.filterSeverity = "";
    this.filterProfile = "";
    this.filterCompany = "";
    this.filterType = "";
    this.dateFrom = "";
    this.dateTo = "";
    this.searchQuery = "";
    this.onFilterChange();
  }
  // ── Pagination ────────────────────────────────────────────────────────────────
  get totalPages() {
    return this.lastPage;
  }
  get displayStart() {
    return this.totalItems === 0 ? 0 : (this.currentPage - 1) * this.pageSize + 1;
  }
  get displayEnd() {
    return Math.min(this.currentPage * this.pageSize, this.totalItems);
  }
  get pageNumbers() {
    const pages = [];
    const start = Math.max(1, this.currentPage - 1);
    const end = Math.min(this.totalPages, this.currentPage + 1);
    for (let i = start; i <= end; i++)
      pages.push(i);
    return pages;
  }
  goToPage(page) {
    if (page < 1 || page > this.totalPages || page === this.currentPage)
      return;
    this.currentPage = page;
    this.loadLogs();
  }
  onPageSizeChange() {
    this.currentPage = 1;
    this.loadLogs();
  }
  // ── Drawer détail ────────────────────────────────────────────────────────────
  openDetail(log) {
    this.selectedLog = log;
    this.drawerOpen = true;
  }
  closeDetail() {
    this.drawerOpen = false;
    setTimeout(() => {
      this.selectedLog = null;
    }, 250);
  }
  // ── Export CSV ────────────────────────────────────────────────────────────────
  exportCSV() {
    this.auditLogService.exportCsv({
      date_debut: this.dateFrom || void 0,
      date_fin: this.dateTo || void 0,
      severite: this.filterSeverity || void 0
    }).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `audit-logs-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => console.error("Export CSV failed:", err)
    });
  }
  // ── Helpers affichage ────────────────────────────────────────────────────────
  getActorInitials(log) {
    if (!log.acteur_nom)
      return "??";
    return log.acteur_nom.split(" ").map((w) => w[0] ?? "").join("").substring(0, 2).toUpperCase();
  }
  getActorClass(log) {
    const role = (log.acteur_role ?? "").toLowerCase();
    if (!log.user_id)
      return "av-r";
    if (role.includes("superadmin") || role.includes("super admin"))
      return "av-p";
    if (role.includes("admin rh"))
      return "av-a";
    if (role.includes("formateur"))
      return "av-g";
    if (role.includes("syst"))
      return "av-sys";
    return "av-b";
  }
  getActionClass(type) {
    const m = {
      connexion: "ap-login",
      deconnexion: "ap-logout",
      echec_connexion: "ap-fail",
      creation: "ap-create",
      modification: "ap-update",
      suppression: "ap-delete",
      export: "ap-export",
      import: "ap-update",
      approbation: "ap-approve",
      refus: "ap-reject",
      revocation: "ap-revoke",
      generation: "ap-create",
      acces_refuse: "ap-fail"
    };
    return m[type] ?? "ap-update";
  }
  getActionIcon(type) {
    const m = {
      connexion: "isax-login",
      deconnexion: "isax-logout",
      echec_connexion: "isax-lock",
      creation: "isax-add-circle",
      modification: "isax-edit-2",
      suppression: "isax-trash",
      export: "isax-import",
      import: "isax-document-upload",
      approbation: "isax-tick-circle",
      refus: "isax-close-circle",
      revocation: "isax-forbidden",
      generation: "isax-medal-star",
      acces_refuse: "isax-lock",
      autre: "isax-info-circle"
    };
    return m[type] ?? "isax-info-circle";
  }
  getActionLabel(type) {
    const m = {
      connexion: "Connexion",
      deconnexion: "D\xE9connexion",
      echec_connexion: "\xC9chec login",
      creation: "Cr\xE9ation",
      modification: "Modification",
      suppression: "Suppression",
      export: "Export donn\xE9es",
      import: "Import",
      approbation: "Approbation",
      refus: "Refus",
      revocation: "R\xE9vocation",
      generation: "G\xE9n\xE9ration",
      acces_refuse: "Acc\xE8s refus\xE9",
      autre: "Autre"
    };
    return m[type] ?? type;
  }
  getSeverityDotClass(sev) {
    return { info: "sev-ok", attention: "sev-warn", critique: "sev-danger" }[sev] ?? "sev-ok";
  }
  getSeverityTextClass(sev) {
    return { info: "text-info", attention: "text-warn", critique: "text-danger" }[sev] ?? "text-info";
  }
  getSeverityLabel(sev) {
    return { info: "Info", attention: "Attention", critique: "Critique" }[sev] ?? sev;
  }
  getStatusClass(status) {
    return { ok: "st-ok", bloque: "st-bloque", en_cours: "st-encours" }[status] ?? "st-ok";
  }
  getStatusLabel(status) {
    return { ok: "OK", bloque: "Bloqu\xE9", en_cours: "En cours" }[status] ?? status;
  }
  getRowClass(log) {
    if (log.severite === "critique")
      return "row-danger";
    if (log.severite === "attention")
      return "row-warn";
    return "";
  }
  formatTime(dateStr) {
    const d = new Date(dateStr);
    const day = d.getDate().toString().padStart(2, "0");
    const mo = (d.getMonth() + 1).toString().padStart(2, "0");
    const h = d.getHours().toString().padStart(2, "0");
    const mi = d.getMinutes().toString().padStart(2, "0");
    const s = d.getSeconds().toString().padStart(2, "0");
    return `${day}/${mo} \xB7 ${h}:${mi}:${s}`;
  }
  timeAgo(dateStr) {
    const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 6e4);
    if (diff < 1)
      return "\xC0 l'instant";
    if (diff < 60)
      return `Il y a ${diff} min`;
    const h = Math.floor(diff / 60);
    if (h < 24)
      return `Il y a ${h}h`;
    return `Il y a ${Math.floor(h / 24)}j`;
  }
  getAlertIcon(type) {
    const m = {
      echec_connexion: "isax-lock",
      acces_refuse: "isax-global",
      export: "isax-import",
      suppression: "isax-trash"
    };
    return m[type] ?? "isax-warning-2";
  }
  get tendanceLabel() {
    const t = this.kpi.tendancePourcent;
    if (t > 0)
      return `\u2191 +${t}% vs hier`;
    if (t < 0)
      return `\u2193 ${t}% vs hier`;
    return "= vs hier";
  }
  get tendanceClass() {
    return this.kpi.tendancePourcent >= 0 ? "trend-up" : "trend-down";
  }
  // ── Sélection & suppression logs d'audit ─────────────────────────────────────
  toggleSelectLog(id) {
    if (this.selectedIds.has(id)) {
      this.selectedIds.delete(id);
    } else {
      this.selectedIds.add(id);
    }
  }
  isLogSelected(id) {
    return this.selectedIds.has(id);
  }
  get allSelected() {
    return this.logs.length > 0 && this.logs.every((l) => this.selectedIds.has(l.id));
  }
  toggleSelectAll() {
    if (this.allSelected) {
      this.logs.forEach((l) => this.selectedIds.delete(l.id));
    } else {
      this.logs.forEach((l) => this.selectedIds.add(l.id));
    }
  }
  get selectedCount() {
    return this.selectedIds.size;
  }
  deleteSelectedLogs() {
    if (this.selectedIds.size === 0)
      return;
    if (!confirm(`Supprimer ${this.selectedIds.size} log(s) s\xE9lectionn\xE9(s) ?`))
      return;
    this.deleting = true;
    this.auditLogService.deleteLogs(Array.from(this.selectedIds)).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.deleting = false;
        this.selectedIds.clear();
        this.loadAll();
      },
      error: (err) => {
        this.deleting = false;
        this.error = httpErrorMessage(err, "Erreur lors de la suppression.");
      }
    });
  }
  purgeAllAuditLogs() {
    if (!confirm("Purger TOUS les logs d'audit ? Cette action est irr\xE9versible."))
      return;
    this.deleting = true;
    this.auditLogService.purgeAllLogs().pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.deleting = false;
        this.selectedIds.clear();
        this.loadAll();
      },
      error: (err) => {
        this.deleting = false;
        this.error = httpErrorMessage(err, "Erreur lors de la purge.");
      }
    });
  }
  // ── Laravel Log ─────────────────────────────────────────────────────────────
  switchTab(tab) {
    this.activeTab = tab;
    if (tab === "laravel" && this.laravelEntries.length === 0) {
      this.loadLaravelLog();
    }
  }
  loadLaravelLog() {
    this.laravelLoading = true;
    this.laravelError = "";
    this.auditLogService.getLaravelLog({
      lines: this.laravelLines,
      level: this.laravelLevel || void 0,
      search: this.laravelSearch || void 0
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.laravelEntries = res.entries || [];
        this.laravelFileSize = res.file_size || 0;
        this.laravelTotalEntries = res.total_entries || 0;
        this.laravelLoading = false;
      },
      error: (err) => {
        this.laravelError = httpErrorMessage(err, "Impossible de charger les logs Laravel.");
        this.laravelLoading = false;
      }
    });
  }
  purgeLaravelLog() {
    if (!confirm("\xCAtes-vous s\xFBr de vouloir purger le fichier laravel.log ? Cette action est irr\xE9versible."))
      return;
    this.purging = true;
    this.auditLogService.purgeLaravelLog().pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.purging = false;
        this.laravelEntries = [];
        this.laravelFileSize = 0;
        this.laravelTotalEntries = 0;
      },
      error: (err) => {
        this.purging = false;
        this.laravelError = httpErrorMessage(err, "Erreur lors de la purge.");
      }
    });
  }
  formatFileSize(bytes) {
    if (bytes >= 1048576)
      return (bytes / 1048576).toFixed(2) + " Mo";
    if (bytes >= 1024)
      return (bytes / 1024).toFixed(1) + " Ko";
    return bytes + " o";
  }
  getLevelClass(level) {
    const m = {
      emergency: "lvl-emergency",
      alert: "lvl-alert",
      critical: "lvl-critical",
      error: "lvl-error",
      warning: "lvl-warning",
      notice: "lvl-notice",
      info: "lvl-info",
      debug: "lvl-debug"
    };
    return m[level] || "lvl-debug";
  }
  static \u0275fac = function SuperadminAuditLogsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminAuditLogsComponent)(\u0275\u0275directiveInject(AuditLogService), \u0275\u0275directiveInject(ClientCompanyService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminAuditLogsComponent, selectors: [["app-superadmin-audit-logs"]], decls: 32, vars: 13, consts: [["noAlerts", ""], ["noStats", ""], [1, "al-page"], [1, "al-header"], [1, "al-header__left"], [1, "al-header__icon"], [1, "isax", "isax-clipboard-text"], [1, "al-header__title"], [1, "al-header__sub"], [1, "al-header__actions"], [1, "al-btn", "al-btn--outline", 3, "click", "disabled"], [1, "isax", "isax-refresh"], [1, "al-btn", "al-btn--outline", 3, "click"], [1, "isax", "isax-import"], [1, "al-btn", "al-btn--primary"], [1, "isax", "isax-shield-tick"], [1, "al-tabs"], [1, "al-tabs__btn", 3, "click"], [1, "isax", "isax-code"], ["class", "al-tabs__badge", 4, "ngIf"], [4, "ngIf"], [1, "al-overlay", 3, "click"], ["class", "al-drawer", 3, "open", 4, "ngIf"], [1, "al-tabs__badge"], [1, "ll-toolbar"], [1, "ll-search"], [1, "isax", "isax-search-normal-1"], ["type", "search", "placeholder", "Rechercher dans les logs\u2026", 3, "ngModelChange", "keyup.enter", "ngModel"], ["title", "Filtrer par niveau", 1, "ll-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "emergency"], ["value", "alert"], ["value", "critical"], ["value", "error"], ["value", "warning"], ["value", "notice"], ["value", "info"], ["value", "debug"], ["title", "Nombre d'entr\xE9es", 1, "ll-select", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], [1, "ll-spacer"], ["class", "ll-info", 4, "ngIf"], [1, "al-btn", "al-btn--danger", 3, "click", "disabled"], ["class", "isax isax-trash", 4, "ngIf"], ["class", "ll-spinner", 4, "ngIf"], ["class", "ll-alert ll-alert--err", 4, "ngIf"], ["class", "ll-loading", 4, "ngIf"], ["class", "ll-empty", 4, "ngIf"], ["class", "ll-entries", 4, "ngIf"], [1, "ll-info"], [1, "isax", "isax-trash"], [1, "ll-spinner"], [1, "ll-alert", "ll-alert--err"], [1, "isax", "isax-warning-2"], [1, "ll-loading"], [1, "ll-empty"], [1, "isax", "isax-document-text"], [1, "ll-entries"], ["class", "ll-entry", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "ll-entry", 3, "ngClass"], [1, "ll-entry__time"], [1, "ll-entry__level"], [1, "ll-entry__msg"], [1, "al-kpi-row"], [1, "al-kpi"], [1, "al-kpi__top"], [1, "al-kpi__label"], [1, "isax", "isax-task-square"], [1, "al-kpi__icon", "ki-p"], [1, "al-kpi__val"], [1, "al-kpi__trend", 3, "ngClass"], [1, "al-kpi__icon", "ki-r"], ["class", "al-kpi__trend trend-down", 4, "ngIf"], ["class", "al-kpi__trend trend-neutral", 4, "ngIf"], [1, "isax", "isax-login"], [1, "al-kpi__icon", "ki-a"], [1, "isax", "isax-profile-2user"], [1, "al-kpi__icon", "ki-g"], [1, "al-kpi__trend", "trend-neutral"], [1, "al-kpi__icon", "ki-b"], [1, "al-main"], [1, "al-card"], [1, "al-filters"], [1, "al-filter-row"], [1, "al-search"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Rechercher un log, utilisateur, IP...", 3, "ngModelChange", "ngModel"], [1, "al-sel", 3, "ngModelChange", "change", "ngModel"], ["value", "connexion"], ["value", "echec_connexion"], ["value", "creation"], ["value", "modification"], ["value", "suppression"], ["value", "export"], ["value", "acces_refuse"], ["value", "revocation"], ["value", "approbation"], ["value", "Super Admin"], ["value", "Admin RH"], ["value", "Formateur"], ["value", "Employ\xE9"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "attention"], ["value", "critique"], [1, "al-spacer"], [1, "al-date-range"], ["type", "date", 1, "al-date-inp", 3, "ngModelChange", "change", "ngModel"], [1, "al-date-sep"], ["class", "al-active-filters", 4, "ngIf"], ["class", "al-state-row", 4, "ngIf"], ["class", "al-state-row al-state-error", 4, "ngIf"], ["class", "al-selection-bar", 4, "ngIf"], ["class", "al-table-wrap", 4, "ngIf"], ["class", "al-pagination", 4, "ngIf"], [1, "al-side-panels"], [1, "al-sp-card"], [1, "al-sp-head"], [1, "isax", "isax-warning-2", "sp-icon-r"], [1, "al-sp-title"], ["class", "al-sp-badge badge-r", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "isax", "isax-chart-2", "sp-icon-m"], [1, "al-kpi__trend", "trend-down"], [3, "value"], [1, "al-active-filters"], [1, "al-af-label"], ["class", "al-chip", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "al-clear-btn", 3, "click"], [1, "al-chip", 3, "click", "ngClass"], [1, "isax", 3, "ngClass"], [1, "al-chip-x"], [1, "al-state-row"], [1, "al-spinner"], [1, "al-state-row", "al-state-error"], [1, "al-btn", "al-btn--outline", 2, "margin-left", "8px", 3, "click"], [1, "al-selection-bar"], [1, "al-selection-bar__info"], [1, "isax", "isax-tick-square"], [1, "isax", "isax-close-circle"], [2, "flex", "1"], [1, "al-table-wrap"], [1, "al-table"], [2, "width", "3%"], ["type", "checkbox", "title", "Tout s\xE9lectionner", 1, "al-checkbox", 3, "change", "checked"], [2, "width", "12%"], [2, "width", "17%"], [2, "width", "20%"], [2, "width", "8%"], [2, "width", "7%"], [2, "width", "9%"], [3, "ngClass", "row-selected", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["type", "checkbox", 1, "al-checkbox", 3, "change", "checked"], [1, "al-time"], [1, "al-time-sub"], [1, "al-actor"], [1, "al-av", 3, "ngClass"], [1, "al-actor-info"], [1, "al-actor-name"], [1, "al-actor-role"], [1, "al-pill", 3, "ngClass"], [1, "al-target"], ["class", "al-target-sub", 4, "ngIf"], [1, "al-event-id"], [1, "al-sev-dot", 3, "ngClass"], [1, "al-sev-text", 3, "ngClass"], [1, "al-ip"], [1, "al-loc"], [1, "al-status", 3, "ngClass"], [1, "al-row-actions"], ["title", "Voir d\xE9tail", 1, "al-eye-btn", 3, "click"], [1, "isax", "isax-eye"], ["title", "Supprimer", 1, "al-del-btn", 3, "click"], [1, "al-target-sub"], ["colspan", "9", 1, "al-empty"], [1, "isax", "isax-search-status"], [1, "al-pagination"], [1, "al-pag-size"], [3, "ngModelChange", "change", "ngModel"], [1, "al-pag-info"], [1, "al-pag-btns"], [1, "al-pag-btn", 3, "click", "disabled"], [1, "isax", "isax-arrow-left-2"], ["class", "al-pag-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-3"], [1, "al-pag-btn", 3, "click"], [1, "al-pag-btn", "al-pag-dots"], [1, "al-sp-badge", "badge-r"], ["class", "al-alert-item", 4, "ngFor", "ngForOf"], [1, "al-alert-item"], [1, "al-ai-icon", 3, "ngClass"], [1, "al-ai-body"], [1, "al-ai-title"], [1, "al-ai-sub"], [1, "al-ai-time"], [1, "al-ai-body", 2, "text-align", "center", "padding", "12px", "color", "var(--color-text-tertiary)", "font-size", "12px"], ["class", "al-stat-row", 4, "ngFor", "ngForOf"], [1, "al-stat-row"], [1, "al-sr-label"], [1, "al-sr-bar"], [1, "al-sr-fill", 3, "ngClass"], [1, "al-sr-val"], [1, "al-stat-row", 2, "justify-content", "center", "color", "var(--color-text-tertiary)", "font-size", "12px"], [1, "al-drawer"], [1, "al-dw-head"], [1, "al-dw-title"], [1, "al-dw-ref"], [1, "al-dw-close", 3, "click"], [1, "isax", "isax-close-square"], [1, "al-dw-body"], [1, "al-dw-row", "al-dw-row--inline"], [1, "al-dw-field"], [1, "al-dw-label"], [1, "al-dw-val"], [1, "al-dw-val", "al-dw-mono"], [1, "al-dw-section"], [1, "al-dw-val", "al-actor"], [1, "al-dw-box"], ["class", "al-dw-box al-dw-muted", "style", "margin-top:6px;", 4, "ngIf"], ["class", "al-dw-section", 4, "ngIf"], ["class", "al-dw-row al-dw-row--inline", 4, "ngIf"], ["class", "al-tor-badge", 4, "ngIf"], ["class", "al-dw-field", 4, "ngIf"], ["class", "al-dw-row", 4, "ngIf"], [1, "al-dw-box", "al-dw-muted", 2, "margin-top", "6px"], [1, "al-tor-badge"], [1, "al-dw-row"], [1, "al-dw-field", 2, "flex", "1"], [1, "al-dw-val", "al-dw-mono", "al-dw-overflow"], [1, "al-dw-val", "al-dw-muted", "al-dw-overflow"], ["class", "al-dw-diff", 4, "ngIf"], ["class", "al-dw-diff al-dw-diff--after", 4, "ngIf"], [1, "al-dw-diff"], [1, "al-dw-diff-label"], [1, "al-dw-pre"], [1, "al-dw-diff", "al-dw-diff--after"]], template: function SuperadminAuditLogsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
      \u0275\u0275element(4, "i", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div")(6, "div", 7);
      \u0275\u0275text(7, "Logs d'audit \u2014 Pyramide LMS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 8);
      \u0275\u0275text(9, "Toutes les actions sur la plateforme \xB7 temps r\xE9el \xB7 r\xE9tention 90 jours");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 9)(11, "button", 10);
      \u0275\u0275listener("click", function SuperadminAuditLogsComponent_Template_button_click_11_listener() {
        return ctx.refresh();
      });
      \u0275\u0275element(12, "i", 11);
      \u0275\u0275text(13, " Actualiser ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 12);
      \u0275\u0275listener("click", function SuperadminAuditLogsComponent_Template_button_click_14_listener() {
        return ctx.exportCSV();
      });
      \u0275\u0275element(15, "i", 13);
      \u0275\u0275text(16, " Exporter CSV ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 14);
      \u0275\u0275element(18, "i", 15);
      \u0275\u0275text(19, " Rapport s\xE9curit\xE9 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 16)(21, "button", 17);
      \u0275\u0275listener("click", function SuperadminAuditLogsComponent_Template_button_click_21_listener() {
        return ctx.switchTab("audit");
      });
      \u0275\u0275element(22, "i", 6);
      \u0275\u0275text(23, " Logs d'audit ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 17);
      \u0275\u0275listener("click", function SuperadminAuditLogsComponent_Template_button_click_24_listener() {
        return ctx.switchTab("laravel");
      });
      \u0275\u0275element(25, "i", 18);
      \u0275\u0275text(26, " Laravel Log ");
      \u0275\u0275template(27, SuperadminAuditLogsComponent_span_27_Template, 2, 1, "span", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(28, SuperadminAuditLogsComponent_ng_container_28_Template, 46, 18, "ng-container", 20)(29, SuperadminAuditLogsComponent_ng_container_29_Template, 140, 32, "ng-container", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 21);
      \u0275\u0275listener("click", function SuperadminAuditLogsComponent_Template_div_click_30_listener() {
        return ctx.closeDetail();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(31, SuperadminAuditLogsComponent_div_31_Template, 76, 28, "div", 22);
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275classProp("spinning", ctx.loading);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("active", ctx.activeTab === "audit");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "laravel");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.laravelFileSize > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "laravel");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "audit");
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.drawerOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedLog);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, UpperCasePipe, JsonPipe, DecimalPipe], styles: ['\n\n.al-page[_ngcontent-%COMP%] {\n  background: var(--color-background-tertiary, #F8FAFC);\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.al-header[_ngcontent-%COMP%] {\n  background: var(--color-background-primary, #FFFFFF);\n  border-bottom: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  padding: 13px 20px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.al-header__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n}\n.al-header__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--border-radius-md, 8px);\n  background: #EEEDFE;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  color: #534AB7;\n  flex-shrink: 0;\n}\n.al-header__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1E293B);\n}\n.al-header__sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-text-secondary, #64748B);\n  margin-top: 2px;\n}\n.al-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.al-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border-radius: var(--border-radius-md, 8px);\n  font-size: 12px;\n  cursor: pointer;\n  font-family: inherit;\n}\n.al-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.al-btn--outline[_ngcontent-%COMP%] {\n  border: 0.5px solid var(--color-border-secondary, #CBD5E1);\n  background: transparent;\n  color: var(--color-text-secondary, #64748B);\n}\n.al-btn--outline[_ngcontent-%COMP%]:hover {\n  background: var(--color-background-secondary, #F1F5F9);\n}\n.al-btn--primary[_ngcontent-%COMP%] {\n  border: none;\n  background: #534AB7;\n  color: #fff;\n  font-weight: 500;\n}\n.al-btn--primary[_ngcontent-%COMP%]:hover {\n  background: rgb(74.1166007905, 65.8814229249, 165.6185770751);\n}\n.al-kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 10px;\n  padding: 12px 20px;\n}\n.al-kpi[_ngcontent-%COMP%] {\n  background: var(--color-background-primary, #FFFFFF);\n  border: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  border-radius: var(--border-radius-md, 8px);\n  padding: 10px 12px;\n}\n.al-kpi__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 4px;\n}\n.al-kpi__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-text-secondary, #64748B);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.al-kpi__label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.al-kpi__icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: var(--border-radius-md, 8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n}\n.al-kpi__val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1E293B);\n}\n.al-kpi__trend[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-top: 1px;\n}\n.ki-p[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.ki-r[_ngcontent-%COMP%] {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.ki-a[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ki-g[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.ki-b[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.trend-up[_ngcontent-%COMP%] {\n  color: #3B6D11;\n}\n.trend-down[_ngcontent-%COMP%] {\n  color: #A32D2D;\n}\n.trend-neutral[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary, #64748B);\n}\n.al-main[_ngcontent-%COMP%] {\n  padding: 0 20px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.al-card[_ngcontent-%COMP%] {\n  background: var(--color-background-primary, #FFFFFF);\n  border: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  border-radius: var(--border-radius-lg, 12px);\n  overflow: hidden;\n}\n.al-filters[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.al-filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.al-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  background: var(--color-background-secondary, #F1F5F9);\n  border: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  border-radius: var(--border-radius-md, 8px);\n  padding: 6px 10px;\n  flex: 1;\n  max-width: 240px;\n}\n.al-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--color-text-tertiary, #94A3B8);\n}\n.al-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-size: 12px;\n  color: var(--color-text-primary, #1E293B);\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.al-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-tertiary, #94A3B8);\n}\n.al-sel[_ngcontent-%COMP%] {\n  border: 0.5px solid var(--color-border-secondary, #CBD5E1);\n  border-radius: var(--border-radius-md, 8px);\n  padding: 6px 9px;\n  font-size: 12px;\n  color: var(--color-text-primary, #1E293B);\n  background: var(--color-background-primary, #FFFFFF);\n  font-family: inherit;\n  outline: none;\n  cursor: pointer;\n}\n.al-sel[_ngcontent-%COMP%]:focus {\n  border-color: #534AB7;\n}\n.al-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.al-date-range[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.al-date-inp[_ngcontent-%COMP%] {\n  border: 0.5px solid var(--color-border-secondary, #CBD5E1);\n  border-radius: var(--border-radius-md, 8px);\n  padding: 5px 9px;\n  font-size: 12px;\n  color: var(--color-text-secondary, #64748B);\n  background: var(--color-background-primary, #FFFFFF);\n  font-family: inherit;\n  width: 120px;\n  outline: none;\n}\n.al-date-inp[_ngcontent-%COMP%]:focus {\n  border-color: #534AB7;\n}\n.al-date-sep[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-tertiary, #94A3B8);\n}\n.al-active-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.al-af-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-text-secondary, #64748B);\n}\n.al-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.al-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.afc-r[_ngcontent-%COMP%] {\n  background: #FCEBEB;\n  color: #791F1F;\n  border: 0.5px solid #F09595;\n}\n.afc-a[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n  border: 0.5px solid #EF9F27;\n}\n.afc-p[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #3C3489;\n  border: 0.5px solid #AFA9EC;\n}\n.afc-b[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #0C447C;\n  border: 0.5px solid #85B7EB;\n}\n.afc-g[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n  border: 0.5px solid #97C459;\n}\n.al-chip-x[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: 0.7;\n  margin-left: 2px;\n}\n.al-clear-btn[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-text-tertiary, #94A3B8);\n  cursor: pointer;\n  margin-left: 4px;\n  text-decoration: underline;\n}\n.al-clear-btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-text-primary, #1E293B);\n}\n.al-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.al-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.al-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  color: var(--color-text-secondary, #64748B);\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  background: var(--color-background-secondary, #F1F5F9);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  white-space: nowrap;\n}\n.al-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 9px 14px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  color: var(--color-text-primary, #1E293B);\n  vertical-align: middle;\n}\n.al-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.al-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--color-background-secondary, #F1F5F9);\n}\n.al-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row-danger[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: rgba(252, 235, 235, 0.4);\n}\n.al-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row-danger[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(252, 235, 235, 0.7);\n}\n.al-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row-warn[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: rgba(250, 238, 218, 0.25);\n}\n.al-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row-warn[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(250, 238, 218, 0.5);\n}\n.al-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-text-secondary, #64748B);\n  white-space: nowrap;\n}\n.al-time-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--color-text-tertiary, #94A3B8);\n  margin-top: 1px;\n}\n.al-actor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.al-av[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 9px;\n  font-weight: 500;\n  flex-shrink: 0;\n}\n.av-p[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #3C3489;\n}\n.av-g[_ngcontent-%COMP%] {\n  background: #E1F5EE;\n  color: #085041;\n}\n.av-b[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.av-a[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.av-r[_ngcontent-%COMP%] {\n  background: #FCEBEB;\n  color: #791F1F;\n}\n.av-sys[_ngcontent-%COMP%] {\n  background: #F1EFE8;\n  color: #444441;\n}\n.al-actor-info[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.al-actor-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1E293B);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.al-actor-role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--color-text-secondary, #64748B);\n}\n.al-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.al-pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.ap-create[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ap-update[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.ap-delete[_ngcontent-%COMP%] {\n  background: #FCEBEB;\n  color: #791F1F;\n}\n.ap-login[_ngcontent-%COMP%] {\n  background: #EEEDFE;\n  color: #3C3489;\n}\n.ap-approve[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ap-reject[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ap-export[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.ap-revoke[_ngcontent-%COMP%] {\n  background: #FCEBEB;\n  color: #791F1F;\n}\n.ap-fail[_ngcontent-%COMP%] {\n  background: #FCEBEB;\n  color: #791F1F;\n  border: 0.5px solid #F09595;\n}\n.al-target[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-primary, #1E293B);\n}\n.al-target-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--color-text-secondary, #64748B);\n  margin-top: 1px;\n}\n.al-event-id[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--color-text-tertiary, #94A3B8);\n  font-family: monospace;\n  margin-top: 1px;\n}\n.al-sev-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 5px;\n}\n.sev-info[_ngcontent-%COMP%] {\n  background: #534AB7;\n}\n.sev-warn[_ngcontent-%COMP%] {\n  background: #EF9F27;\n}\n.sev-danger[_ngcontent-%COMP%] {\n  background: #E24B4A;\n}\n.sev-ok[_ngcontent-%COMP%] {\n  background: #639922;\n}\n.al-sev-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n}\n.text-info[_ngcontent-%COMP%] {\n  color: #534AB7;\n}\n.text-warn[_ngcontent-%COMP%] {\n  color: #854F0B;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #A32D2D;\n}\n.al-ip[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-text-secondary, #64748B);\n  font-family: monospace;\n}\n.al-loc[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--color-text-tertiary, #94A3B8);\n  margin-top: 1px;\n}\n.al-status[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.st-ok[_ngcontent-%COMP%] {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.st-bloque[_ngcontent-%COMP%] {\n  background: #FCEBEB;\n  color: #791F1F;\n}\n.st-encours[_ngcontent-%COMP%] {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.al-eye-btn[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  border-radius: var(--border-radius-md, 8px);\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  color: var(--color-text-secondary, #64748B);\n}\n.al-eye-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-background-secondary, #F1F5F9);\n}\n.al-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: var(--color-text-secondary, #64748B);\n  font-size: 13px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.al-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  opacity: 0.3;\n}\n.al-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  background: var(--color-background-secondary, #F1F5F9);\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.al-pag-size[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--color-text-secondary, #64748B);\n}\n.al-pag-size[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 0.5px solid var(--color-border-secondary, #CBD5E1);\n  border-radius: var(--border-radius-md, 8px);\n  padding: 3px 7px;\n  font-size: 12px;\n  color: var(--color-text-primary, #1E293B);\n  background: var(--color-background-primary, #FFFFFF);\n  font-family: inherit;\n  outline: none;\n}\n.al-pag-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-secondary, #64748B);\n}\n.al-pag-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.al-pag-btn[_ngcontent-%COMP%] {\n  min-width: 26px;\n  height: 26px;\n  padding: 0 6px;\n  border: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  border-radius: var(--border-radius-md, 8px);\n  background: var(--color-background-primary, #FFFFFF);\n  cursor: pointer;\n  font-size: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary, #64748B);\n  font-family: inherit;\n}\n.al-pag-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-background-secondary, #F1F5F9);\n}\n.al-pag-btn.active[_ngcontent-%COMP%] {\n  background: #534AB7;\n  color: #fff;\n  border-color: #534AB7;\n}\n.al-pag-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.al-pag-btn.al-pag-dots[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.al-pag-btn.al-pag-dots[_ngcontent-%COMP%]:hover {\n  background: var(--color-background-primary, #FFFFFF);\n}\n.al-pag-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.al-side-panels[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.al-sp-card[_ngcontent-%COMP%] {\n  background: var(--color-background-primary, #FFFFFF);\n  border: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  border-radius: var(--border-radius-lg, 12px);\n  overflow: hidden;\n}\n.al-sp-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n}\n.al-sp-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1E293B);\n  flex: 1;\n}\n.al-sp-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n}\n.badge-r[_ngcontent-%COMP%] {\n  background: #FCEBEB;\n  color: #791F1F;\n}\n.badge-a[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #633806;\n}\n.sp-icon-r[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #A32D2D;\n}\n.sp-icon-m[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--color-text-secondary, #64748B);\n}\n.al-alert-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 9px 14px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.al-alert-item[_ngcontent-%COMP%]:hover {\n  background: var(--color-background-secondary, #F1F5F9);\n}\n.al-alert-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.al-ai-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.ai-icon-r[_ngcontent-%COMP%] {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.ai-icon-a[_ngcontent-%COMP%] {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.al-ai-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.al-ai-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1E293B);\n}\n.al-ai-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-text-secondary, #64748B);\n  margin-top: 1px;\n  line-height: 1.3;\n}\n.al-ai-time[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--color-text-tertiary, #94A3B8);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.al-stat-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 14px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n}\n.al-stat-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.al-sr-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-secondary, #64748B);\n  flex: 1;\n}\n.al-sr-bar[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 6px;\n  background: var(--color-background-secondary, #F1F5F9);\n  border-radius: 4px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.al-sr-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n}\n.sf-p[_ngcontent-%COMP%] {\n  background: #534AB7;\n}\n.sf-r[_ngcontent-%COMP%] {\n  background: #E24B4A;\n}\n.sf-g[_ngcontent-%COMP%] {\n  background: #639922;\n}\n.sf-a[_ngcontent-%COMP%] {\n  background: #EF9F27;\n}\n.al-sr-val[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1E293B);\n  width: 36px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.al-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  z-index: 900;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.25s;\n}\n.al-overlay.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: all;\n}\n.al-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 480px;\n  max-width: 96vw;\n  height: 100vh;\n  background: var(--color-background-primary, #FFFFFF);\n  border-left: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  z-index: 901;\n  display: flex;\n  flex-direction: column;\n  transform: translateX(100%);\n  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.12);\n}\n.al-drawer.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.al-dw-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  flex-shrink: 0;\n  gap: 10px;\n}\n.al-dw-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.al-dw-ref[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-text-tertiary, #94A3B8);\n  font-family: monospace;\n  white-space: nowrap;\n}\n.al-dw-close[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  border-radius: var(--border-radius-md, 8px);\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  color: var(--color-text-secondary, #64748B);\n  flex-shrink: 0;\n}\n.al-dw-close[_ngcontent-%COMP%]:hover {\n  background: var(--color-background-secondary, #F1F5F9);\n}\n.al-dw-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.al-dw-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.al-dw-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n}\n.al-dw-section[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--color-text-tertiary, #94A3B8);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-top: 10px;\n  margin-bottom: 4px;\n  padding-bottom: 4px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n}\n.al-dw-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.al-dw-row--inline[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.al-dw-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  flex: 1;\n  min-width: 120px;\n}\n.al-dw-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--color-text-tertiary, #94A3B8);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.al-dw-val[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-primary, #1E293B);\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.al-dw-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 11px;\n}\n.al-dw-muted[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary, #64748B);\n}\n.al-dw-overflow[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n  word-break: break-all;\n}\n.al-dw-box[_ngcontent-%COMP%] {\n  background: var(--color-background-secondary, #F1F5F9);\n  border: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  border-radius: var(--border-radius-md, 8px);\n  padding: 10px 12px;\n  font-size: 12px;\n  color: var(--color-text-primary, #1E293B);\n  line-height: 1.5;\n}\n.al-dw-diff[_ngcontent-%COMP%] {\n  background: rgba(234, 243, 222, 0.5);\n  border: 0.5px solid #97C459;\n  border-radius: var(--border-radius-md, 8px);\n  padding: 8px 10px;\n}\n.al-dw-diff--after[_ngcontent-%COMP%] {\n  background: rgba(238, 237, 254, 0.5);\n  border-color: #AFA9EC;\n}\n.al-dw-diff-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-secondary, #64748B);\n  margin-bottom: 4px;\n}\n.al-dw-pre[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-family: monospace;\n  color: var(--color-text-primary, #1E293B);\n  white-space: pre-wrap;\n  word-break: break-all;\n  margin: 0;\n}\n.al-tor-badge[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  padding: 1px 5px;\n  border-radius: 4px;\n  background: #FCEBEB;\n  color: #791F1F;\n  letter-spacing: 0.05em;\n}\n.al-state-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 20px;\n  font-size: 13px;\n  color: var(--color-text-secondary, #64748B);\n  border-bottom: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n}\n.al-state-row.al-state-error[_ngcontent-%COMP%] {\n  color: #A32D2D;\n}\n.al-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid var(--color-border-tertiary, #E2E8F0);\n  border-top-color: #534AB7;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spinning[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@media (max-width: 1100px) {\n  .al-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .al-kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .al-side-panels[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .al-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .al-header__actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .al-filter-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .al-search[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.al-selection-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  background: #eff6ff;\n  border: 1px solid #93c5fd;\n  border-radius: 8px;\n  margin-bottom: 10px;\n}\n.al-selection-bar__info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #1e40af;\n}\n.al-selection-bar__info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.al-checkbox[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: var(--color-primary, #185fa5);\n}\n.al-row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.al-del-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border: 1px solid #fca5a5;\n  border-radius: 6px;\n  background: transparent;\n  color: #991b1b;\n  cursor: pointer;\n  font-size: 13px;\n  transition: background 0.12s;\n}\n.al-del-btn[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.row-selected[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #eff6ff !important;\n}\n.al-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-bottom: 1px solid var(--color-border);\n  margin-bottom: 20px;\n}\n.al-tabs__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-text-secondary);\n  background: none;\n  border: none;\n  border-bottom: 2px solid transparent;\n  cursor: pointer;\n  transition: color 0.15s, border-color 0.15s;\n}\n.al-tabs__btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.al-tabs__btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-text-primary);\n}\n.al-tabs__btn.active[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  border-bottom-color: var(--color-primary);\n}\n.al-tabs__badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 1px 6px;\n  border-radius: 10px;\n  background: var(--color-bg-tertiary);\n  color: var(--color-text-secondary);\n  font-weight: 600;\n}\n.ll-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background: var(--color-bg-secondary);\n  border: 1px solid var(--color-border);\n  border-radius: 10px;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.ll-search[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 180px;\n  max-width: 280px;\n}\n.ll-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: var(--color-text-tertiary);\n  pointer-events: none;\n}\n.ll-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px 7px 30px;\n  font-size: 12px;\n  border: 1px solid var(--color-border);\n  border-radius: 8px;\n  background: var(--color-bg-primary);\n  outline: none;\n  color: var(--color-text-primary);\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.ll-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-primary);\n}\n.ll-select[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  font-size: 12px;\n  border: 1px solid var(--color-border);\n  border-radius: 8px;\n  background: var(--color-bg-primary);\n  color: var(--color-text-secondary);\n  cursor: pointer;\n  outline: none;\n}\n.ll-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.ll-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-tertiary);\n  white-space: nowrap;\n}\n.ll-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_ll-spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_ll-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.al-btn--danger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  font-size: 12px;\n  font-weight: 500;\n  border: none;\n  border-radius: 8px;\n  background: #dc2626;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.al-btn--danger[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.al-btn--danger[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.ll-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.ll-alert--err[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #991b1b;\n}\n.ll-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 40px;\n  font-size: 13px;\n  color: var(--color-text-tertiary);\n}\n.ll-loading[_ngcontent-%COMP%]   .ll-spinner[_ngcontent-%COMP%] {\n  border-color: var(--color-border);\n  border-top-color: var(--color-primary);\n}\n.ll-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 20px;\n  color: var(--color-text-tertiary);\n}\n.ll-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  display: block;\n  margin-bottom: 10px;\n  opacity: 0.5;\n}\n.ll-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n}\n.ll-entries[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border);\n  border-radius: 10px;\n  overflow: hidden;\n  max-height: 70vh;\n  overflow-y: auto;\n  background: #1e1e2e;\n  font-family:\n    "JetBrains Mono",\n    "Fira Code",\n    "Consolas",\n    monospace;\n}\n.ll-entries[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.ll-entries[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #1e1e2e;\n}\n.ll-entries[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #444;\n  border-radius: 3px;\n}\n.ll-entry[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 6px 14px;\n  border-bottom: 1px solid #2a2a3c;\n  font-size: 11.5px;\n  line-height: 1.5;\n}\n.ll-entry[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ll-entry__time[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #6b7280;\n  min-width: 140px;\n  font-size: 11px;\n}\n.ll-entry__level[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  min-width: 70px;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 6px;\n  border-radius: 4px;\n  text-align: center;\n}\n.ll-entry__msg[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #d4d4d8;\n  white-space: pre-wrap;\n  word-break: break-all;\n  margin: 0;\n  font-size: 11px;\n  font-family: inherit;\n}\n.lvl-emergency[_ngcontent-%COMP%]   .ll-entry__level[_ngcontent-%COMP%] {\n  background: #7f1d1d;\n  color: #fca5a5;\n}\n.lvl-alert[_ngcontent-%COMP%]   .ll-entry__level[_ngcontent-%COMP%] {\n  background: #7f1d1d;\n  color: #fca5a5;\n}\n.lvl-critical[_ngcontent-%COMP%]   .ll-entry__level[_ngcontent-%COMP%] {\n  background: #991b1b;\n  color: #fecaca;\n}\n.lvl-error[_ngcontent-%COMP%]   .ll-entry__level[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n}\n.lvl-warning[_ngcontent-%COMP%]   .ll-entry__level[_ngcontent-%COMP%] {\n  background: #92400e;\n  color: #fde68a;\n}\n.lvl-notice[_ngcontent-%COMP%]   .ll-entry__level[_ngcontent-%COMP%] {\n  background: #1e40af;\n  color: #bfdbfe;\n}\n.lvl-info[_ngcontent-%COMP%]   .ll-entry__level[_ngcontent-%COMP%] {\n  background: #065f46;\n  color: #a7f3d0;\n}\n.lvl-debug[_ngcontent-%COMP%]   .ll-entry__level[_ngcontent-%COMP%] {\n  background: #374151;\n  color: #9ca3af;\n}\n.lvl-emergency[_ngcontent-%COMP%], \n.lvl-alert[_ngcontent-%COMP%], \n.lvl-critical[_ngcontent-%COMP%] {\n  background: #1c0f0f;\n}\n.lvl-emergency[_ngcontent-%COMP%]   .ll-entry__msg[_ngcontent-%COMP%], \n.lvl-alert[_ngcontent-%COMP%]   .ll-entry__msg[_ngcontent-%COMP%], \n.lvl-critical[_ngcontent-%COMP%]   .ll-entry__msg[_ngcontent-%COMP%] {\n  color: #fca5a5;\n}\n.lvl-error[_ngcontent-%COMP%] {\n  background: #1f1010;\n}\n.lvl-error[_ngcontent-%COMP%]   .ll-entry__msg[_ngcontent-%COMP%] {\n  color: #fecaca;\n}\n.lvl-warning[_ngcontent-%COMP%] {\n  background: #1a1708;\n}\n.lvl-warning[_ngcontent-%COMP%]   .ll-entry__msg[_ngcontent-%COMP%] {\n  color: #fde68a;\n}\n/*# sourceMappingURL=superadmin-audit-logs.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminAuditLogsComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-audit-logs", imports: [CommonModule, FormsModule], template: `<div class="al-page">\r
\r
  <!-- \u2500\u2500 EN-T\xCATE \u2500\u2500 -->\r
  <div class="al-header">\r
    <div class="al-header__left">\r
      <div class="al-header__icon"><i class="isax isax-clipboard-text"></i></div>\r
      <div>\r
        <div class="al-header__title">Logs d'audit \u2014 Pyramide LMS</div>\r
        <div class="al-header__sub">Toutes les actions sur la plateforme \xB7 temps r\xE9el \xB7 r\xE9tention 90 jours</div>\r
      </div>\r
    </div>\r
    <div class="al-header__actions">\r
      <button class="al-btn al-btn--outline" (click)="refresh()" [disabled]="loading">\r
        <i class="isax isax-refresh" [class.spinning]="loading"></i> Actualiser\r
      </button>\r
      <button class="al-btn al-btn--outline" (click)="exportCSV()">\r
        <i class="isax isax-import"></i> Exporter CSV\r
      </button>\r
      <button class="al-btn al-btn--primary">\r
        <i class="isax isax-shield-tick"></i> Rapport s\xE9curit\xE9\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 TABS \u2500\u2500 -->\r
  <div class="al-tabs">\r
    <button class="al-tabs__btn" [class.active]="activeTab === 'audit'" (click)="switchTab('audit')">\r
      <i class="isax isax-clipboard-text"></i> Logs d'audit\r
    </button>\r
    <button class="al-tabs__btn" [class.active]="activeTab === 'laravel'" (click)="switchTab('laravel')">\r
      <i class="isax isax-code"></i> Laravel Log\r
      <span class="al-tabs__badge" *ngIf="laravelFileSize > 0">{{ formatFileSize(laravelFileSize) }}</span>\r
    </button>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       TAB: LARAVEL LOG\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <ng-container *ngIf="activeTab === 'laravel'">\r
    <div class="ll-toolbar">\r
      <div class="ll-search">\r
        <i class="isax isax-search-normal-1"></i>\r
        <input type="search" [(ngModel)]="laravelSearch" placeholder="Rechercher dans les logs\u2026"\r
               (keyup.enter)="loadLaravelLog()">\r
      </div>\r
      <select class="ll-select" [(ngModel)]="laravelLevel" (change)="loadLaravelLog()" title="Filtrer par niveau">\r
        <option value="">Tous les niveaux</option>\r
        <option value="emergency">Emergency</option>\r
        <option value="alert">Alert</option>\r
        <option value="critical">Critical</option>\r
        <option value="error">Error</option>\r
        <option value="warning">Warning</option>\r
        <option value="notice">Notice</option>\r
        <option value="info">Info</option>\r
        <option value="debug">Debug</option>\r
      </select>\r
      <select class="ll-select" [(ngModel)]="laravelLines" (change)="loadLaravelLog()" title="Nombre d'entr\xE9es">\r
        <option [ngValue]="100">100 derni\xE8res</option>\r
        <option [ngValue]="200">200 derni\xE8res</option>\r
        <option [ngValue]="500">500 derni\xE8res</option>\r
        <option [ngValue]="1000">1000 derni\xE8res</option>\r
      </select>\r
      <button class="al-btn al-btn--outline" (click)="loadLaravelLog()" [disabled]="laravelLoading">\r
        <i class="isax isax-refresh" [class.spinning]="laravelLoading"></i> Actualiser\r
      </button>\r
      <span class="ll-spacer"></span>\r
      <span class="ll-info" *ngIf="laravelFileSize > 0">\r
        {{ laravelTotalEntries }} entr\xE9es \xB7 {{ formatFileSize(laravelFileSize) }}\r
      </span>\r
      <button class="al-btn al-btn--danger" (click)="purgeLaravelLog()" [disabled]="purging || laravelEntries.length === 0">\r
        <i class="isax isax-trash" *ngIf="!purging"></i>\r
        <span class="ll-spinner" *ngIf="purging"></span>\r
        Purger\r
      </button>\r
    </div>\r
\r
    <!-- Error -->\r
    <div class="ll-alert ll-alert--err" *ngIf="laravelError">\r
      <i class="isax isax-warning-2"></i> {{ laravelError }}\r
    </div>\r
\r
    <!-- Loading -->\r
    <div class="ll-loading" *ngIf="laravelLoading">\r
      <span class="ll-spinner"></span> Chargement des logs Laravel\u2026\r
    </div>\r
\r
    <!-- Empty -->\r
    <div class="ll-empty" *ngIf="!laravelLoading && laravelEntries.length === 0 && !laravelError">\r
      <i class="isax isax-document-text"></i>\r
      <p>Fichier laravel.log vide</p>\r
    </div>\r
\r
    <!-- Log entries -->\r
    <div class="ll-entries" *ngIf="!laravelLoading && laravelEntries.length > 0">\r
      <div *ngFor="let entry of laravelEntries" class="ll-entry" [ngClass]="getLevelClass(entry.level)">\r
        <span class="ll-entry__time">{{ entry.timestamp }}</span>\r
        <span class="ll-entry__level">{{ entry.level | uppercase }}</span>\r
        <pre class="ll-entry__msg">{{ entry.message }}</pre>\r
      </div>\r
    </div>\r
  </ng-container>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
       TAB: AUDIT (existing content)\r
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <ng-container *ngIf="activeTab === 'audit'">\r
\r
  <!-- \u2500\u2500 KPI ROW \u2500\u2500 -->\r
  <div class="al-kpi-row">\r
    <div class="al-kpi">\r
      <div class="al-kpi__top">\r
        <span class="al-kpi__label"><i class="isax isax-task-square"></i> Logs aujourd'hui</span>\r
        <div class="al-kpi__icon ki-p"><i class="isax isax-task-square"></i></div>\r
      </div>\r
      <div class="al-kpi__val">{{ kpi.logsToday | number }}</div>\r
      <div class="al-kpi__trend" [ngClass]="tendanceClass">{{ tendanceLabel }}</div>\r
    </div>\r
    <div class="al-kpi">\r
      <div class="al-kpi__top">\r
        <span class="al-kpi__label"><i class="isax isax-warning-2"></i> Alertes critiques</span>\r
        <div class="al-kpi__icon ki-r"><i class="isax isax-warning-2"></i></div>\r
      </div>\r
      <div class="al-kpi__val">{{ kpi.alertesCritiques }}</div>\r
      <div class="al-kpi__trend trend-down" *ngIf="kpi.alertesCritiques > 0">\xC0 traiter imm\xE9diatement</div>\r
      <div class="al-kpi__trend trend-neutral" *ngIf="kpi.alertesCritiques === 0">Aucune alerte</div>\r
    </div>\r
    <div class="al-kpi">\r
      <div class="al-kpi__top">\r
        <span class="al-kpi__label"><i class="isax isax-login"></i> Connexions \xE9chou\xE9es</span>\r
        <div class="al-kpi__icon ki-a"><i class="isax isax-login"></i></div>\r
      </div>\r
      <div class="al-kpi__val">{{ kpi.connexionsEchouees }}</div>\r
      <div class="al-kpi__trend trend-down" *ngIf="kpi.connexionsEchouees > 0">Aujourd'hui</div>\r
      <div class="al-kpi__trend trend-neutral" *ngIf="kpi.connexionsEchouees === 0">Aucune ce jour</div>\r
    </div>\r
    <div class="al-kpi">\r
      <div class="al-kpi__top">\r
        <span class="al-kpi__label"><i class="isax isax-profile-2user"></i> Utilisateurs actifs</span>\r
        <div class="al-kpi__icon ki-g"><i class="isax isax-profile-2user"></i></div>\r
      </div>\r
      <div class="al-kpi__val">{{ kpi.utilisateursActifs }}</div>\r
      <div class="al-kpi__trend trend-neutral">Aujourd'hui</div>\r
    </div>\r
    <div class="al-kpi">\r
      <div class="al-kpi__top">\r
        <span class="al-kpi__label"><i class="isax isax-trash"></i> Suppressions</span>\r
        <div class="al-kpi__icon ki-b"><i class="isax isax-trash"></i></div>\r
      </div>\r
      <div class="al-kpi__val">{{ kpi.suppressions }}</div>\r
      <div class="al-kpi__trend trend-neutral">Ce mois</div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 CONTENU PRINCIPAL \u2500\u2500 -->\r
  <div class="al-main">\r
\r
    <!-- TABLE DES LOGS -->\r
    <div class="al-card">\r
\r
      <!-- Filtres -->\r
      <div class="al-filters">\r
        <div class="al-filter-row">\r
          <div class="al-search">\r
            <i class="isax isax-search-normal"></i>\r
            <input\r
              type="text"\r
              placeholder="Rechercher un log, utilisateur, IP..."\r
              [(ngModel)]="searchQuery"\r
              (ngModelChange)="onSearch()"\r
            >\r
          </div>\r
          <select class="al-sel" [(ngModel)]="filterType" (change)="onFilterChange()">\r
            <option value="">Tous les types</option>\r
            <option value="connexion">Connexion</option>\r
            <option value="echec_connexion">\xC9chec connexion</option>\r
            <option value="creation">Cr\xE9ation</option>\r
            <option value="modification">Modification</option>\r
            <option value="suppression">Suppression</option>\r
            <option value="export">Export de donn\xE9es</option>\r
            <option value="acces_refuse">Acc\xE8s refus\xE9</option>\r
            <option value="revocation">R\xE9vocation</option>\r
            <option value="approbation">Approbation</option>\r
          </select>\r
          <select class="al-sel" [(ngModel)]="filterProfile" (change)="onFilterChange()">\r
            <option value="">Tous les profils</option>\r
            <option value="Super Admin">Superadmin</option>\r
            <option value="Admin RH">Admin RH</option>\r
            <option value="Formateur">Formateur</option>\r
            <option value="Employ\xE9">Employ\xE9</option>\r
          </select>\r
          <select class="al-sel" [(ngModel)]="filterCompany" (change)="onFilterChange()">\r
            <option value="">Toutes les entreprises</option>\r
            <option *ngFor="let e of entreprises" [value]="e.nom">{{ e.nom }}</option>\r
          </select>\r
          <select class="al-sel" [(ngModel)]="filterSeverity" (change)="onFilterChange()">\r
            <option value="">Tous niveaux</option>\r
            <option value="info">Info</option>\r
            <option value="attention">Avertissement</option>\r
            <option value="critique">Critique</option>\r
          </select>\r
          <div class="al-spacer"></div>\r
          <div class="al-date-range">\r
            <input class="al-date-inp" type="date" [(ngModel)]="dateFrom" (change)="onFilterChange()">\r
            <span class="al-date-sep">\u2192</span>\r
            <input class="al-date-inp" type="date" [(ngModel)]="dateTo" (change)="onFilterChange()">\r
          </div>\r
        </div>\r
\r
        <!-- Chips filtres actifs -->\r
        <div class="al-active-filters" *ngIf="activeChips.length > 0">\r
          <span class="al-af-label">Filtres actifs :</span>\r
          <div\r
            *ngFor="let chip of activeChips"\r
            class="al-chip"\r
            [ngClass]="chip.class"\r
            (click)="removeChip(chip.key)"\r
          >\r
            <i class="isax" [ngClass]="chip.icon"></i>\r
            {{ chip.label }}\r
            <span class="al-chip-x">\xD7</span>\r
          </div>\r
          <span class="al-clear-btn" (click)="clearAllFilters()">Tout effacer</span>\r
        </div>\r
      </div>\r
\r
      <!-- \xC9tat chargement / erreur -->\r
      <div class="al-state-row" *ngIf="loading">\r
        <span class="al-spinner"></span> Chargement des logs...\r
      </div>\r
      <div class="al-state-row al-state-error" *ngIf="error && !loading">\r
        <i class="isax isax-warning-2"></i> {{ error }}\r
        <button class="al-btn al-btn--outline" (click)="refresh()" style="margin-left:8px;">R\xE9essayer</button>\r
      </div>\r
\r
      <!-- Table -->\r
      <!-- Barre d'actions s\xE9lection -->\r
      <div class="al-selection-bar" *ngIf="selectedCount > 0">\r
        <span class="al-selection-bar__info">\r
          <i class="isax isax-tick-square"></i> {{ selectedCount }} log(s) s\xE9lectionn\xE9(s)\r
        </span>\r
        <button class="al-btn al-btn--danger" (click)="deleteSelectedLogs()" [disabled]="deleting">\r
          <i class="isax isax-trash" *ngIf="!deleting"></i>\r
          <span class="ll-spinner" *ngIf="deleting"></span>\r
          Supprimer la s\xE9lection\r
        </button>\r
        <button class="al-btn al-btn--outline" (click)="selectedIds.clear()">\r
          <i class="isax isax-close-circle"></i> D\xE9s\xE9lectionner\r
        </button>\r
        <span style="flex:1"></span>\r
        <button class="al-btn al-btn--danger" (click)="purgeAllAuditLogs()" [disabled]="deleting">\r
          <i class="isax isax-trash"></i> Purger tout\r
        </button>\r
      </div>\r
\r
      <div class="al-table-wrap" *ngIf="!loading && !error">\r
        <table class="al-table">\r
          <thead>\r
            <tr>\r
              <th style="width:3%">\r
                <input type="checkbox" class="al-checkbox" [checked]="allSelected"\r
                       (change)="toggleSelectAll()" title="Tout s\xE9lectionner">\r
              </th>\r
              <th style="width:12%">Horodatage</th>\r
              <th style="width:17%">Acteur</th>\r
              <th style="width:12%">Action</th>\r
              <th style="width:20%">Cible / Ressource</th>\r
              <th style="width:8%">S\xE9v\xE9rit\xE9</th>\r
              <th style="width:12%">IP / Localisation</th>\r
              <th style="width:7%">Statut</th>\r
              <th style="width:9%">Actions</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let log of logs" [ngClass]="getRowClass(log)" [class.row-selected]="isLogSelected(log.id)">\r
\r
              <!-- Checkbox -->\r
              <td>\r
                <input type="checkbox" class="al-checkbox" [checked]="isLogSelected(log.id)"\r
                       (change)="toggleSelectLog(log.id)">\r
              </td>\r
\r
              <!-- Horodatage -->\r
              <td>\r
                <div class="al-time">{{ formatTime(log.created_at) }}</div>\r
                <div class="al-time-sub">{{ timeAgo(log.created_at) }}</div>\r
              </td>\r
\r
              <!-- Acteur -->\r
              <td>\r
                <div class="al-actor">\r
                  <div class="al-av" [ngClass]="getActorClass(log)">{{ getActorInitials(log) }}</div>\r
                  <div class="al-actor-info">\r
                    <div class="al-actor-name">{{ log.acteur_nom ?? 'Inconnu' }}</div>\r
                    <div class="al-actor-role">\r
                      {{ log.acteur_role ?? 'Non authentifi\xE9' }}<ng-container *ngIf="log.acteur_entreprise"> \xB7 {{ log.acteur_entreprise }}</ng-container>\r
                    </div>\r
                  </div>\r
                </div>\r
              </td>\r
\r
              <!-- Action -->\r
              <td>\r
                <span class="al-pill" [ngClass]="getActionClass(log.type_action)">\r
                  <i class="isax" [ngClass]="getActionIcon(log.type_action)"></i>\r
                  {{ getActionLabel(log.type_action) }}\r
                </span>\r
              </td>\r
\r
              <!-- Cible -->\r
              <td>\r
                <div class="al-target">{{ log.libelle_action }}</div>\r
                <div class="al-target-sub" *ngIf="log.details">{{ log.details }}</div>\r
                <div class="al-event-id">{{ log.reference }}</div>\r
              </td>\r
\r
              <!-- S\xE9v\xE9rit\xE9 -->\r
              <td>\r
                <span class="al-sev-dot" [ngClass]="getSeverityDotClass(log.severite)"></span>\r
                <span class="al-sev-text" [ngClass]="getSeverityTextClass(log.severite)">\r
                  {{ getSeverityLabel(log.severite) }}\r
                </span>\r
              </td>\r
\r
              <!-- IP -->\r
              <td>\r
                <div class="al-ip">{{ log.ip_address ?? '\u2014' }}</div>\r
                <div class="al-loc">{{ log.localisation ?? '' }}</div>\r
              </td>\r
\r
              <!-- Statut -->\r
              <td>\r
                <span class="al-status" [ngClass]="getStatusClass(log.statut)">\r
                  {{ getStatusLabel(log.statut) }}\r
                </span>\r
              </td>\r
\r
              <!-- Actions -->\r
              <td>\r
                <div class="al-row-actions">\r
                  <button class="al-eye-btn" title="Voir d\xE9tail" (click)="openDetail(log)">\r
                    <i class="isax isax-eye"></i>\r
                  </button>\r
                  <button class="al-del-btn" title="Supprimer" (click)="toggleSelectLog(log.id); deleteSelectedLogs()">\r
                    <i class="isax isax-trash"></i>\r
                  </button>\r
                </div>\r
              </td>\r
            </tr>\r
\r
            <!-- Aucun r\xE9sultat -->\r
            <tr *ngIf="logs.length === 0 && !loading">\r
              <td colspan="9" class="al-empty">\r
                <i class="isax isax-search-status"></i>\r
                <span>Aucun log trouv\xE9 pour les filtres s\xE9lectionn\xE9s</span>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <!-- Pagination -->\r
      <div class="al-pagination" *ngIf="totalItems > 0">\r
        <div class="al-pag-size">\r
          Lignes par page\r
          <select [(ngModel)]="pageSize" (change)="onPageSizeChange()">\r
            <option [value]="25">25</option>\r
            <option [value]="50">50</option>\r
            <option [value]="100">100</option>\r
          </select>\r
        </div>\r
        <span class="al-pag-info">\r
          Affichage {{ displayStart }}\u2013{{ displayEnd }} sur {{ totalItems | number }} \xE9v\xE9nements\r
        </span>\r
        <div class="al-pag-btns">\r
          <button class="al-pag-btn" [disabled]="currentPage === 1" (click)="goToPage(currentPage - 1)">\r
            <i class="isax isax-arrow-left-2"></i>\r
          </button>\r
          <button\r
            *ngFor="let p of pageNumbers"\r
            class="al-pag-btn"\r
            [class.active]="p === currentPage"\r
            (click)="goToPage(p)"\r
          >{{ p }}</button>\r
          <ng-container *ngIf="totalPages > 4">\r
            <span class="al-pag-btn al-pag-dots">...</span>\r
            <button class="al-pag-btn" (click)="goToPage(totalPages)">{{ totalPages }}</button>\r
          </ng-container>\r
          <button class="al-pag-btn" [disabled]="currentPage === totalPages" (click)="goToPage(currentPage + 1)">\r
            <i class="isax isax-arrow-right-3"></i>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- \u2500\u2500 PANNEAUX LAT\xC9RAUX \u2500\u2500 -->\r
    <div class="al-side-panels">\r
\r
      <!-- Alertes s\xE9curit\xE9 -->\r
      <div class="al-sp-card">\r
        <div class="al-sp-head">\r
          <i class="isax isax-warning-2 sp-icon-r"></i>\r
          <span class="al-sp-title">Alertes s\xE9curit\xE9 actives</span>\r
          <span class="al-sp-badge badge-r" *ngIf="kpi.alertesCritiques > 0">{{ kpi.alertesCritiques }} critiques</span>\r
        </div>\r
\r
        <ng-container *ngIf="securityAlerts.length > 0; else noAlerts">\r
          <div *ngFor="let alert of securityAlerts" class="al-alert-item">\r
            <div class="al-ai-icon" [ngClass]="alert.iconClass">\r
              <i class="isax" [ngClass]="alert.icon"></i>\r
            </div>\r
            <div class="al-ai-body">\r
              <div class="al-ai-title">{{ alert.title }}</div>\r
              <div class="al-ai-sub">{{ alert.sub }}</div>\r
            </div>\r
            <div class="al-ai-time">{{ alert.time }}</div>\r
          </div>\r
        </ng-container>\r
        <ng-template #noAlerts>\r
          <div class="al-alert-item">\r
            <div class="al-ai-body" style="text-align:center;padding:12px;color:var(--color-text-tertiary);font-size:12px;">\r
              Aucune alerte critique aujourd'hui\r
            </div>\r
          </div>\r
        </ng-template>\r
      </div>\r
\r
      <!-- R\xE9partition des actions -->\r
      <div class="al-sp-card">\r
        <div class="al-sp-head">\r
          <i class="isax isax-chart-2 sp-icon-m"></i>\r
          <span class="al-sp-title">R\xE9partition des actions</span>\r
        </div>\r
        <ng-container *ngIf="actionStats.length > 0; else noStats">\r
          <div class="al-stat-row" *ngFor="let stat of actionStats">\r
            <span class="al-sr-label">{{ stat.label }}</span>\r
            <div class="al-sr-bar">\r
              <div class="al-sr-fill" [ngClass]="stat.fillClass" [style.width.%]="stat.barWidth"></div>\r
            </div>\r
            <span class="al-sr-val">{{ stat.value | number }}</span>\r
          </div>\r
        </ng-container>\r
        <ng-template #noStats>\r
          <div class="al-stat-row" style="justify-content:center;color:var(--color-text-tertiary);font-size:12px;">\r
            Aucune donn\xE9e disponible\r
          </div>\r
        </ng-template>\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
  </ng-container><!-- /audit tab -->\r
\r
</div>\r
\r
<!-- \u2500\u2500 OVERLAY + DRAWER D\xC9TAIL \u2500\u2500 -->\r
<div class="al-overlay" [class.open]="drawerOpen" (click)="closeDetail()"></div>\r
\r
<div class="al-drawer" [class.open]="drawerOpen" *ngIf="selectedLog">\r
\r
  <!-- En-t\xEAte drawer -->\r
  <div class="al-dw-head">\r
    <div class="al-dw-title">\r
      <span class="al-pill" [ngClass]="getActionClass(selectedLog.type_action)">\r
        <i class="isax" [ngClass]="getActionIcon(selectedLog.type_action)"></i>\r
        {{ getActionLabel(selectedLog.type_action) }}\r
      </span>\r
      <span class="al-dw-ref">{{ selectedLog.reference }}</span>\r
    </div>\r
    <button class="al-dw-close" (click)="closeDetail()">\r
      <i class="isax isax-close-square"></i>\r
    </button>\r
  </div>\r
\r
  <!-- Corps drawer -->\r
  <div class="al-dw-body">\r
\r
    <!-- S\xE9v\xE9rit\xE9 + Statut -->\r
    <div class="al-dw-row al-dw-row--inline">\r
      <div class="al-dw-field">\r
        <div class="al-dw-label">S\xE9v\xE9rit\xE9</div>\r
        <div class="al-dw-val">\r
          <span class="al-sev-dot" [ngClass]="getSeverityDotClass(selectedLog.severite)"></span>\r
          <span class="al-sev-text" [ngClass]="getSeverityTextClass(selectedLog.severite)">\r
            {{ getSeverityLabel(selectedLog.severite) }}\r
          </span>\r
        </div>\r
      </div>\r
      <div class="al-dw-field">\r
        <div class="al-dw-label">Statut</div>\r
        <div class="al-dw-val">\r
          <span class="al-status" [ngClass]="getStatusClass(selectedLog.statut)">\r
            {{ getStatusLabel(selectedLog.statut) }}\r
          </span>\r
        </div>\r
      </div>\r
      <div class="al-dw-field">\r
        <div class="al-dw-label">Horodatage</div>\r
        <div class="al-dw-val al-dw-mono">{{ formatTime(selectedLog.created_at) }}</div>\r
      </div>\r
    </div>\r
\r
    <!-- Acteur -->\r
    <div class="al-dw-section">Acteur</div>\r
    <div class="al-dw-row al-dw-row--inline">\r
      <div class="al-dw-field">\r
        <div class="al-dw-label">Nom</div>\r
        <div class="al-dw-val al-actor">\r
          <div class="al-av" [ngClass]="getActorClass(selectedLog)">{{ getActorInitials(selectedLog) }}</div>\r
          <span>{{ selectedLog.acteur_nom ?? 'Inconnu' }}</span>\r
        </div>\r
      </div>\r
      <div class="al-dw-field">\r
        <div class="al-dw-label">R\xF4le</div>\r
        <div class="al-dw-val">{{ selectedLog.acteur_role ?? '\u2014' }}</div>\r
      </div>\r
      <div class="al-dw-field">\r
        <div class="al-dw-label">Entreprise</div>\r
        <div class="al-dw-val">{{ selectedLog.acteur_entreprise ?? '\u2014' }}</div>\r
      </div>\r
    </div>\r
\r
    <!-- Description -->\r
    <div class="al-dw-section">Description de l'action</div>\r
    <div class="al-dw-box">{{ selectedLog.libelle_action }}</div>\r
    <div class="al-dw-box al-dw-muted" *ngIf="selectedLog.details" style="margin-top:6px;">\r
      {{ selectedLog.details }}\r
    </div>\r
\r
    <!-- Cible -->\r
    <div class="al-dw-section" *ngIf="selectedLog.entite_label || selectedLog.entite_type">Ressource cibl\xE9e</div>\r
    <div class="al-dw-row al-dw-row--inline" *ngIf="selectedLog.entite_label || selectedLog.entite_type">\r
      <div class="al-dw-field" *ngIf="selectedLog.entite_type">\r
        <div class="al-dw-label">Type</div>\r
        <div class="al-dw-val">{{ selectedLog.entite_type }}</div>\r
      </div>\r
      <div class="al-dw-field" *ngIf="selectedLog.entite_id">\r
        <div class="al-dw-label">ID</div>\r
        <div class="al-dw-val al-dw-mono">#{{ selectedLog.entite_id }}</div>\r
      </div>\r
      <div class="al-dw-field" *ngIf="selectedLog.entite_label">\r
        <div class="al-dw-label">Label</div>\r
        <div class="al-dw-val">{{ selectedLog.entite_label }}</div>\r
      </div>\r
    </div>\r
\r
    <!-- R\xE9seau -->\r
    <div class="al-dw-section">Informations r\xE9seau</div>\r
    <div class="al-dw-row al-dw-row--inline">\r
      <div class="al-dw-field">\r
        <div class="al-dw-label">Adresse IP</div>\r
        <div class="al-dw-val al-dw-mono">\r
          {{ selectedLog.ip_address ?? '\u2014' }}\r
          <span class="al-tor-badge" *ngIf="selectedLog.est_tor">TOR</span>\r
        </div>\r
      </div>\r
      <div class="al-dw-field">\r
        <div class="al-dw-label">Localisation</div>\r
        <div class="al-dw-val">{{ selectedLog.localisation ?? '\u2014' }}</div>\r
      </div>\r
      <div class="al-dw-field" *ngIf="selectedLog.methode_http">\r
        <div class="al-dw-label">M\xE9thode HTTP</div>\r
        <div class="al-dw-val al-dw-mono">{{ selectedLog.methode_http }} {{ selectedLog.code_http }}</div>\r
      </div>\r
    </div>\r
    <div class="al-dw-row" *ngIf="selectedLog.url">\r
      <div class="al-dw-field" style="flex:1">\r
        <div class="al-dw-label">URL</div>\r
        <div class="al-dw-val al-dw-mono al-dw-overflow">{{ selectedLog.url }}</div>\r
      </div>\r
    </div>\r
    <div class="al-dw-row" *ngIf="selectedLog.user_agent">\r
      <div class="al-dw-field" style="flex:1">\r
        <div class="al-dw-label">User-Agent</div>\r
        <div class="al-dw-val al-dw-muted al-dw-overflow">{{ selectedLog.user_agent }}</div>\r
      </div>\r
    </div>\r
\r
    <!-- Donn\xE9es avant / apr\xE8s -->\r
    <ng-container *ngIf="selectedLog.avant || selectedLog.apres">\r
      <div class="al-dw-section">Modifications</div>\r
      <div class="al-dw-diff" *ngIf="selectedLog.avant">\r
        <div class="al-dw-diff-label">Avant</div>\r
        <pre class="al-dw-pre">{{ selectedLog.avant | json }}</pre>\r
      </div>\r
      <div class="al-dw-diff al-dw-diff--after" *ngIf="selectedLog.apres">\r
        <div class="al-dw-diff-label">Apr\xE8s</div>\r
        <pre class="al-dw-pre">{{ selectedLog.apres | json }}</pre>\r
      </div>\r
    </ng-container>\r
\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/superadmin/superadmin-audit-logs/superadmin-audit-logs.component.scss */\n.al-page {\n  background: var(--color-background-tertiary, #F8FAFC);\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.al-header {\n  background: var(--color-background-primary, #FFFFFF);\n  border-bottom: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  padding: 13px 20px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.al-header__left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n}\n.al-header__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--border-radius-md, 8px);\n  background: #EEEDFE;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  color: #534AB7;\n  flex-shrink: 0;\n}\n.al-header__title {\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1E293B);\n}\n.al-header__sub {\n  font-size: 11px;\n  color: var(--color-text-secondary, #64748B);\n  margin-top: 2px;\n}\n.al-header__actions {\n  display: flex;\n  gap: 8px;\n}\n.al-btn {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border-radius: var(--border-radius-md, 8px);\n  font-size: 12px;\n  cursor: pointer;\n  font-family: inherit;\n}\n.al-btn i {\n  font-size: 13px;\n}\n.al-btn--outline {\n  border: 0.5px solid var(--color-border-secondary, #CBD5E1);\n  background: transparent;\n  color: var(--color-text-secondary, #64748B);\n}\n.al-btn--outline:hover {\n  background: var(--color-background-secondary, #F1F5F9);\n}\n.al-btn--primary {\n  border: none;\n  background: #534AB7;\n  color: #fff;\n  font-weight: 500;\n}\n.al-btn--primary:hover {\n  background: rgb(74.1166007905, 65.8814229249, 165.6185770751);\n}\n.al-kpi-row {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 10px;\n  padding: 12px 20px;\n}\n.al-kpi {\n  background: var(--color-background-primary, #FFFFFF);\n  border: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  border-radius: var(--border-radius-md, 8px);\n  padding: 10px 12px;\n}\n.al-kpi__top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 4px;\n}\n.al-kpi__label {\n  font-size: 11px;\n  color: var(--color-text-secondary, #64748B);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.al-kpi__label i {\n  font-size: 12px;\n}\n.al-kpi__icon {\n  width: 26px;\n  height: 26px;\n  border-radius: var(--border-radius-md, 8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n}\n.al-kpi__val {\n  font-size: 20px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1E293B);\n}\n.al-kpi__trend {\n  font-size: 10px;\n  margin-top: 1px;\n}\n.ki-p {\n  background: #EEEDFE;\n  color: #534AB7;\n}\n.ki-r {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.ki-a {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.ki-g {\n  background: #EAF3DE;\n  color: #3B6D11;\n}\n.ki-b {\n  background: #E6F1FB;\n  color: #185FA5;\n}\n.trend-up {\n  color: #3B6D11;\n}\n.trend-down {\n  color: #A32D2D;\n}\n.trend-neutral {\n  color: var(--color-text-secondary, #64748B);\n}\n.al-main {\n  padding: 0 20px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.al-card {\n  background: var(--color-background-primary, #FFFFFF);\n  border: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  border-radius: var(--border-radius-lg, 12px);\n  overflow: hidden;\n}\n.al-filters {\n  padding: 12px 14px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.al-filter-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.al-search {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  background: var(--color-background-secondary, #F1F5F9);\n  border: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  border-radius: var(--border-radius-md, 8px);\n  padding: 6px 10px;\n  flex: 1;\n  max-width: 240px;\n}\n.al-search i {\n  font-size: 14px;\n  color: var(--color-text-tertiary, #94A3B8);\n}\n.al-search input {\n  border: none;\n  background: transparent;\n  font-size: 12px;\n  color: var(--color-text-primary, #1E293B);\n  outline: none;\n  flex: 1;\n  font-family: inherit;\n}\n.al-search input::placeholder {\n  color: var(--color-text-tertiary, #94A3B8);\n}\n.al-sel {\n  border: 0.5px solid var(--color-border-secondary, #CBD5E1);\n  border-radius: var(--border-radius-md, 8px);\n  padding: 6px 9px;\n  font-size: 12px;\n  color: var(--color-text-primary, #1E293B);\n  background: var(--color-background-primary, #FFFFFF);\n  font-family: inherit;\n  outline: none;\n  cursor: pointer;\n}\n.al-sel:focus {\n  border-color: #534AB7;\n}\n.al-spacer {\n  flex: 1;\n}\n.al-date-range {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.al-date-inp {\n  border: 0.5px solid var(--color-border-secondary, #CBD5E1);\n  border-radius: var(--border-radius-md, 8px);\n  padding: 5px 9px;\n  font-size: 12px;\n  color: var(--color-text-secondary, #64748B);\n  background: var(--color-background-primary, #FFFFFF);\n  font-family: inherit;\n  width: 120px;\n  outline: none;\n}\n.al-date-inp:focus {\n  border-color: #534AB7;\n}\n.al-date-sep {\n  font-size: 12px;\n  color: var(--color-text-tertiary, #94A3B8);\n}\n.al-active-filters {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.al-af-label {\n  font-size: 11px;\n  color: var(--color-text-secondary, #64748B);\n}\n.al-chip {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.al-chip i {\n  font-size: 11px;\n}\n.afc-r {\n  background: #FCEBEB;\n  color: #791F1F;\n  border: 0.5px solid #F09595;\n}\n.afc-a {\n  background: #FAEEDA;\n  color: #633806;\n  border: 0.5px solid #EF9F27;\n}\n.afc-p {\n  background: #EEEDFE;\n  color: #3C3489;\n  border: 0.5px solid #AFA9EC;\n}\n.afc-b {\n  background: #E6F1FB;\n  color: #0C447C;\n  border: 0.5px solid #85B7EB;\n}\n.afc-g {\n  background: #EAF3DE;\n  color: #27500A;\n  border: 0.5px solid #97C459;\n}\n.al-chip-x {\n  font-size: 11px;\n  opacity: 0.7;\n  margin-left: 2px;\n}\n.al-clear-btn {\n  font-size: 11px;\n  color: var(--color-text-tertiary, #94A3B8);\n  cursor: pointer;\n  margin-left: 4px;\n  text-decoration: underline;\n}\n.al-clear-btn:hover {\n  color: var(--color-text-primary, #1E293B);\n}\n.al-table-wrap {\n  overflow-x: auto;\n}\n.al-table {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.al-table th {\n  font-size: 10px;\n  font-weight: 500;\n  color: var(--color-text-secondary, #64748B);\n  text-align: left;\n  padding: 8px 14px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  background: var(--color-background-secondary, #F1F5F9);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  white-space: nowrap;\n}\n.al-table td {\n  font-size: 12px;\n  padding: 9px 14px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  color: var(--color-text-primary, #1E293B);\n  vertical-align: middle;\n}\n.al-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.al-table tbody tr:hover td {\n  background: var(--color-background-secondary, #F1F5F9);\n}\n.al-table tbody tr.row-danger td {\n  background: rgba(252, 235, 235, 0.4);\n}\n.al-table tbody tr.row-danger:hover td {\n  background: rgba(252, 235, 235, 0.7);\n}\n.al-table tbody tr.row-warn td {\n  background: rgba(250, 238, 218, 0.25);\n}\n.al-table tbody tr.row-warn:hover td {\n  background: rgba(250, 238, 218, 0.5);\n}\n.al-time {\n  font-size: 11px;\n  color: var(--color-text-secondary, #64748B);\n  white-space: nowrap;\n}\n.al-time-sub {\n  font-size: 10px;\n  color: var(--color-text-tertiary, #94A3B8);\n  margin-top: 1px;\n}\n.al-actor {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.al-av {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 9px;\n  font-weight: 500;\n  flex-shrink: 0;\n}\n.av-p {\n  background: #EEEDFE;\n  color: #3C3489;\n}\n.av-g {\n  background: #E1F5EE;\n  color: #085041;\n}\n.av-b {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.av-a {\n  background: #FAEEDA;\n  color: #633806;\n}\n.av-r {\n  background: #FCEBEB;\n  color: #791F1F;\n}\n.av-sys {\n  background: #F1EFE8;\n  color: #444441;\n}\n.al-actor-info {\n  min-width: 0;\n}\n.al-actor-name {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1E293B);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.al-actor-role {\n  font-size: 10px;\n  color: var(--color-text-secondary, #64748B);\n}\n.al-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.al-pill i {\n  font-size: 11px;\n}\n.ap-create {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ap-update {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.ap-delete {\n  background: #FCEBEB;\n  color: #791F1F;\n}\n.ap-login {\n  background: #EEEDFE;\n  color: #3C3489;\n}\n.ap-approve {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.ap-reject {\n  background: #FAEEDA;\n  color: #633806;\n}\n.ap-export {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.ap-revoke {\n  background: #FCEBEB;\n  color: #791F1F;\n}\n.ap-fail {\n  background: #FCEBEB;\n  color: #791F1F;\n  border: 0.5px solid #F09595;\n}\n.al-target {\n  font-size: 12px;\n  color: var(--color-text-primary, #1E293B);\n}\n.al-target-sub {\n  font-size: 10px;\n  color: var(--color-text-secondary, #64748B);\n  margin-top: 1px;\n}\n.al-event-id {\n  font-size: 10px;\n  color: var(--color-text-tertiary, #94A3B8);\n  font-family: monospace;\n  margin-top: 1px;\n}\n.al-sev-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 5px;\n}\n.sev-info {\n  background: #534AB7;\n}\n.sev-warn {\n  background: #EF9F27;\n}\n.sev-danger {\n  background: #E24B4A;\n}\n.sev-ok {\n  background: #639922;\n}\n.al-sev-text {\n  font-size: 11px;\n  font-weight: 500;\n}\n.text-info {\n  color: #534AB7;\n}\n.text-warn {\n  color: #854F0B;\n}\n.text-danger {\n  color: #A32D2D;\n}\n.al-ip {\n  font-size: 11px;\n  color: var(--color-text-secondary, #64748B);\n  font-family: monospace;\n}\n.al-loc {\n  font-size: 10px;\n  color: var(--color-text-tertiary, #94A3B8);\n  margin-top: 1px;\n}\n.al-status {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.st-ok {\n  background: #EAF3DE;\n  color: #27500A;\n}\n.st-bloque {\n  background: #FCEBEB;\n  color: #791F1F;\n}\n.st-encours {\n  background: #E6F1FB;\n  color: #0C447C;\n}\n.al-eye-btn {\n  width: 24px;\n  height: 24px;\n  border: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  border-radius: var(--border-radius-md, 8px);\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  color: var(--color-text-secondary, #64748B);\n}\n.al-eye-btn:hover {\n  background: var(--color-background-secondary, #F1F5F9);\n}\n.al-empty {\n  text-align: center;\n  padding: 40px;\n  color: var(--color-text-secondary, #64748B);\n  font-size: 13px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.al-empty i {\n  font-size: 32px;\n  opacity: 0.3;\n}\n.al-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  border-top: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  background: var(--color-background-secondary, #F1F5F9);\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.al-pag-size {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--color-text-secondary, #64748B);\n}\n.al-pag-size select {\n  border: 0.5px solid var(--color-border-secondary, #CBD5E1);\n  border-radius: var(--border-radius-md, 8px);\n  padding: 3px 7px;\n  font-size: 12px;\n  color: var(--color-text-primary, #1E293B);\n  background: var(--color-background-primary, #FFFFFF);\n  font-family: inherit;\n  outline: none;\n}\n.al-pag-info {\n  font-size: 12px;\n  color: var(--color-text-secondary, #64748B);\n}\n.al-pag-btns {\n  display: flex;\n  gap: 4px;\n}\n.al-pag-btn {\n  min-width: 26px;\n  height: 26px;\n  padding: 0 6px;\n  border: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  border-radius: var(--border-radius-md, 8px);\n  background: var(--color-background-primary, #FFFFFF);\n  cursor: pointer;\n  font-size: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-text-secondary, #64748B);\n  font-family: inherit;\n}\n.al-pag-btn:hover:not(:disabled) {\n  background: var(--color-background-secondary, #F1F5F9);\n}\n.al-pag-btn.active {\n  background: #534AB7;\n  color: #fff;\n  border-color: #534AB7;\n}\n.al-pag-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.al-pag-btn.al-pag-dots {\n  cursor: default;\n}\n.al-pag-btn.al-pag-dots:hover {\n  background: var(--color-background-primary, #FFFFFF);\n}\n.al-pag-btn i {\n  font-size: 12px;\n}\n.al-side-panels {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.al-sp-card {\n  background: var(--color-background-primary, #FFFFFF);\n  border: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  border-radius: var(--border-radius-lg, 12px);\n  overflow: hidden;\n}\n.al-sp-head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n}\n.al-sp-title {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1E293B);\n  flex: 1;\n}\n.al-sp-badge {\n  font-size: 10px;\n  padding: 2px 7px;\n  border-radius: 20px;\n}\n.badge-r {\n  background: #FCEBEB;\n  color: #791F1F;\n}\n.badge-a {\n  background: #FAEEDA;\n  color: #633806;\n}\n.sp-icon-r {\n  font-size: 15px;\n  color: #A32D2D;\n}\n.sp-icon-m {\n  font-size: 15px;\n  color: var(--color-text-secondary, #64748B);\n}\n.al-alert-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 9px 14px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.al-alert-item:hover {\n  background: var(--color-background-secondary, #F1F5F9);\n}\n.al-alert-item:last-child {\n  border-bottom: none;\n}\n.al-ai-icon {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.ai-icon-r {\n  background: #FCEBEB;\n  color: #A32D2D;\n}\n.ai-icon-a {\n  background: #FAEEDA;\n  color: #854F0B;\n}\n.al-ai-body {\n  flex: 1;\n  min-width: 0;\n}\n.al-ai-title {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1E293B);\n}\n.al-ai-sub {\n  font-size: 11px;\n  color: var(--color-text-secondary, #64748B);\n  margin-top: 1px;\n  line-height: 1.3;\n}\n.al-ai-time {\n  font-size: 10px;\n  color: var(--color-text-tertiary, #94A3B8);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.al-stat-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 14px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n}\n.al-stat-row:last-child {\n  border-bottom: none;\n}\n.al-sr-label {\n  font-size: 12px;\n  color: var(--color-text-secondary, #64748B);\n  flex: 1;\n}\n.al-sr-bar {\n  width: 100px;\n  height: 6px;\n  background: var(--color-background-secondary, #F1F5F9);\n  border-radius: 4px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.al-sr-fill {\n  height: 100%;\n  border-radius: 4px;\n}\n.sf-p {\n  background: #534AB7;\n}\n.sf-r {\n  background: #E24B4A;\n}\n.sf-g {\n  background: #639922;\n}\n.sf-a {\n  background: #EF9F27;\n}\n.al-sr-val {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--color-text-primary, #1E293B);\n  width: 36px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.al-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  z-index: 900;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.25s;\n}\n.al-overlay.open {\n  opacity: 1;\n  pointer-events: all;\n}\n.al-drawer {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 480px;\n  max-width: 96vw;\n  height: 100vh;\n  background: var(--color-background-primary, #FFFFFF);\n  border-left: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  z-index: 901;\n  display: flex;\n  flex-direction: column;\n  transform: translateX(100%);\n  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.12);\n}\n.al-drawer.open {\n  transform: translateX(0);\n}\n.al-dw-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  flex-shrink: 0;\n  gap: 10px;\n}\n.al-dw-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.al-dw-ref {\n  font-size: 11px;\n  color: var(--color-text-tertiary, #94A3B8);\n  font-family: monospace;\n  white-space: nowrap;\n}\n.al-dw-close {\n  width: 28px;\n  height: 28px;\n  border: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  border-radius: var(--border-radius-md, 8px);\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  color: var(--color-text-secondary, #64748B);\n  flex-shrink: 0;\n}\n.al-dw-close:hover {\n  background: var(--color-background-secondary, #F1F5F9);\n}\n.al-dw-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.al-dw-body::-webkit-scrollbar {\n  width: 4px;\n}\n.al-dw-body::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n}\n.al-dw-section {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--color-text-tertiary, #94A3B8);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-top: 10px;\n  margin-bottom: 4px;\n  padding-bottom: 4px;\n  border-bottom: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n}\n.al-dw-row {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.al-dw-row--inline {\n  flex-direction: row;\n}\n.al-dw-field {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  flex: 1;\n  min-width: 120px;\n}\n.al-dw-label {\n  font-size: 10px;\n  color: var(--color-text-tertiary, #94A3B8);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.al-dw-val {\n  font-size: 12px;\n  color: var(--color-text-primary, #1E293B);\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.al-dw-mono {\n  font-family: monospace;\n  font-size: 11px;\n}\n.al-dw-muted {\n  color: var(--color-text-secondary, #64748B);\n}\n.al-dw-overflow {\n  overflow-wrap: anywhere;\n  word-break: break-all;\n}\n.al-dw-box {\n  background: var(--color-background-secondary, #F1F5F9);\n  border: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n  border-radius: var(--border-radius-md, 8px);\n  padding: 10px 12px;\n  font-size: 12px;\n  color: var(--color-text-primary, #1E293B);\n  line-height: 1.5;\n}\n.al-dw-diff {\n  background: rgba(234, 243, 222, 0.5);\n  border: 0.5px solid #97C459;\n  border-radius: var(--border-radius-md, 8px);\n  padding: 8px 10px;\n}\n.al-dw-diff--after {\n  background: rgba(238, 237, 254, 0.5);\n  border-color: #AFA9EC;\n}\n.al-dw-diff-label {\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-secondary, #64748B);\n  margin-bottom: 4px;\n}\n.al-dw-pre {\n  font-size: 11px;\n  font-family: monospace;\n  color: var(--color-text-primary, #1E293B);\n  white-space: pre-wrap;\n  word-break: break-all;\n  margin: 0;\n}\n.al-tor-badge {\n  font-size: 9px;\n  font-weight: 700;\n  padding: 1px 5px;\n  border-radius: 4px;\n  background: #FCEBEB;\n  color: #791F1F;\n  letter-spacing: 0.05em;\n}\n.al-state-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 20px;\n  font-size: 13px;\n  color: var(--color-text-secondary, #64748B);\n  border-bottom: 0.5px solid var(--color-border-tertiary, #E2E8F0);\n}\n.al-state-row.al-state-error {\n  color: #A32D2D;\n}\n.al-spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid var(--color-border-tertiary, #E2E8F0);\n  border-top-color: #534AB7;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spinning {\n  animation: spin 0.7s linear infinite;\n}\n@media (max-width: 1100px) {\n  .al-kpi-row {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .al-kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .al-side-panels {\n    grid-template-columns: 1fr;\n  }\n  .al-header {\n    flex-wrap: wrap;\n  }\n  .al-header__actions {\n    width: 100%;\n  }\n  .al-filter-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .al-search {\n    max-width: 100%;\n  }\n}\n.al-selection-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  background: #eff6ff;\n  border: 1px solid #93c5fd;\n  border-radius: 8px;\n  margin-bottom: 10px;\n}\n.al-selection-bar__info {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #1e40af;\n}\n.al-selection-bar__info i {\n  font-size: 15px;\n}\n.al-checkbox {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: var(--color-primary, #185fa5);\n}\n.al-row-actions {\n  display: flex;\n  gap: 4px;\n}\n.al-del-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border: 1px solid #fca5a5;\n  border-radius: 6px;\n  background: transparent;\n  color: #991b1b;\n  cursor: pointer;\n  font-size: 13px;\n  transition: background 0.12s;\n}\n.al-del-btn:hover {\n  background: #fef2f2;\n}\n.row-selected td {\n  background: #eff6ff !important;\n}\n.al-tabs {\n  display: flex;\n  gap: 0;\n  border-bottom: 1px solid var(--color-border);\n  margin-bottom: 20px;\n}\n.al-tabs__btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--color-text-secondary);\n  background: none;\n  border: none;\n  border-bottom: 2px solid transparent;\n  cursor: pointer;\n  transition: color 0.15s, border-color 0.15s;\n}\n.al-tabs__btn i {\n  font-size: 15px;\n}\n.al-tabs__btn:hover {\n  color: var(--color-text-primary);\n}\n.al-tabs__btn.active {\n  color: var(--color-primary);\n  border-bottom-color: var(--color-primary);\n}\n.al-tabs__badge {\n  font-size: 10px;\n  padding: 1px 6px;\n  border-radius: 10px;\n  background: var(--color-bg-tertiary);\n  color: var(--color-text-secondary);\n  font-weight: 600;\n}\n.ll-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background: var(--color-bg-secondary);\n  border: 1px solid var(--color-border);\n  border-radius: 10px;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.ll-search {\n  position: relative;\n  flex: 1;\n  min-width: 180px;\n  max-width: 280px;\n}\n.ll-search i {\n  position: absolute;\n  left: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 14px;\n  color: var(--color-text-tertiary);\n  pointer-events: none;\n}\n.ll-search input {\n  width: 100%;\n  padding: 7px 10px 7px 30px;\n  font-size: 12px;\n  border: 1px solid var(--color-border);\n  border-radius: 8px;\n  background: var(--color-bg-primary);\n  outline: none;\n  color: var(--color-text-primary);\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.ll-search input:focus {\n  border-color: var(--color-primary);\n}\n.ll-select {\n  padding: 7px 10px;\n  font-size: 12px;\n  border: 1px solid var(--color-border);\n  border-radius: 8px;\n  background: var(--color-bg-primary);\n  color: var(--color-text-secondary);\n  cursor: pointer;\n  outline: none;\n}\n.ll-spacer {\n  flex: 1;\n}\n.ll-info {\n  font-size: 12px;\n  color: var(--color-text-tertiary);\n  white-space: nowrap;\n}\n.ll-spinner {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: ll-spin 0.6s linear infinite;\n}\n@keyframes ll-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.al-btn--danger {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  font-size: 12px;\n  font-weight: 500;\n  border: none;\n  border-radius: 8px;\n  background: #dc2626;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.al-btn--danger:hover {\n  opacity: 0.9;\n}\n.al-btn--danger:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.ll-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.ll-alert--err {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #991b1b;\n}\n.ll-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 40px;\n  font-size: 13px;\n  color: var(--color-text-tertiary);\n}\n.ll-loading .ll-spinner {\n  border-color: var(--color-border);\n  border-top-color: var(--color-primary);\n}\n.ll-empty {\n  text-align: center;\n  padding: 48px 20px;\n  color: var(--color-text-tertiary);\n}\n.ll-empty i {\n  font-size: 2.5rem;\n  display: block;\n  margin-bottom: 10px;\n  opacity: 0.5;\n}\n.ll-empty p {\n  font-size: 14px;\n  margin: 0;\n}\n.ll-entries {\n  border: 1px solid var(--color-border);\n  border-radius: 10px;\n  overflow: hidden;\n  max-height: 70vh;\n  overflow-y: auto;\n  background: #1e1e2e;\n  font-family:\n    "JetBrains Mono",\n    "Fira Code",\n    "Consolas",\n    monospace;\n}\n.ll-entries::-webkit-scrollbar {\n  width: 6px;\n}\n.ll-entries::-webkit-scrollbar-track {\n  background: #1e1e2e;\n}\n.ll-entries::-webkit-scrollbar-thumb {\n  background: #444;\n  border-radius: 3px;\n}\n.ll-entry {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 6px 14px;\n  border-bottom: 1px solid #2a2a3c;\n  font-size: 11.5px;\n  line-height: 1.5;\n}\n.ll-entry:last-child {\n  border-bottom: none;\n}\n.ll-entry__time {\n  flex-shrink: 0;\n  color: #6b7280;\n  min-width: 140px;\n  font-size: 11px;\n}\n.ll-entry__level {\n  flex-shrink: 0;\n  min-width: 70px;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 6px;\n  border-radius: 4px;\n  text-align: center;\n}\n.ll-entry__msg {\n  flex: 1;\n  color: #d4d4d8;\n  white-space: pre-wrap;\n  word-break: break-all;\n  margin: 0;\n  font-size: 11px;\n  font-family: inherit;\n}\n.lvl-emergency .ll-entry__level {\n  background: #7f1d1d;\n  color: #fca5a5;\n}\n.lvl-alert .ll-entry__level {\n  background: #7f1d1d;\n  color: #fca5a5;\n}\n.lvl-critical .ll-entry__level {\n  background: #991b1b;\n  color: #fecaca;\n}\n.lvl-error .ll-entry__level {\n  background: #dc2626;\n  color: #fff;\n}\n.lvl-warning .ll-entry__level {\n  background: #92400e;\n  color: #fde68a;\n}\n.lvl-notice .ll-entry__level {\n  background: #1e40af;\n  color: #bfdbfe;\n}\n.lvl-info .ll-entry__level {\n  background: #065f46;\n  color: #a7f3d0;\n}\n.lvl-debug .ll-entry__level {\n  background: #374151;\n  color: #9ca3af;\n}\n.lvl-emergency,\n.lvl-alert,\n.lvl-critical {\n  background: #1c0f0f;\n}\n.lvl-emergency .ll-entry__msg,\n.lvl-alert .ll-entry__msg,\n.lvl-critical .ll-entry__msg {\n  color: #fca5a5;\n}\n.lvl-error {\n  background: #1f1010;\n}\n.lvl-error .ll-entry__msg {\n  color: #fecaca;\n}\n.lvl-warning {\n  background: #1a1708;\n}\n.lvl-warning .ll-entry__msg {\n  color: #fde68a;\n}\n/*# sourceMappingURL=superadmin-audit-logs.component.css.map */\n'] }]
  }], () => [{ type: AuditLogService }, { type: ClientCompanyService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminAuditLogsComponent, { className: "SuperadminAuditLogsComponent", filePath: "app/features/superadmin/superadmin-audit-logs/superadmin-audit-logs.component.ts", lineNumber: 33 });
})();
export {
  SuperadminAuditLogsComponent
};
//# sourceMappingURL=chunk-GMZI5MKC.js.map
