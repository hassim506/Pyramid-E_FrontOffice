import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  HttpClient
} from "./chunk-TLD64Y2W.js";
import {
  BehaviorSubject,
  Injectable,
  catchError,
  of,
  setClassMetadata,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTSSTHJF.js";

// src/app/shared/service/progression/progression.service.ts
var ProgressionService = class _ProgressionService {
  http;
  apiUrl = environment.apiUrl;
  // ✅ CLÉ COMPOSITE "formationId_parcoursId_catalogueId"
  //    formation simple              → "42_null_null"
  //    formation dans parcours 5     → "42_5_null"
  //    formation dans catalogue 3    → "42_null_3"
  //    → isolation totale, jamais de contamination croisée
  progressions = /* @__PURE__ */ new Map();
  _change$ = new BehaviorSubject(this.progressions);
  change$ = this._change$.asObservable();
  constructor(http) {
    this.http = http;
  }
  // ════════════════════════════════════════════
  // CLÉ COMPOSITE PRIVÉE
  // ════════════════════════════════════════════
  key(formationId, parcoursId, catalogueId = null) {
    return `${formationId}_${parcoursId ?? "null"}_${catalogueId ?? "null"}`;
  }
  // ════════════════════════════════════════════
  // CHARGER depuis l'API au démarrage du lecteur
  // ════════════════════════════════════════════
  loadFromApi(formationId, parcoursId = null, catalogueId = null) {
    const params = {};
    if (parcoursId)
      params["parcours_id"] = parcoursId;
    if (catalogueId)
      params["catalogue_id"] = catalogueId;
    console.log(`\u{1F4E1} [ProgressionService] loadFromApi \u2192 formationId=${formationId} | parcoursId=${parcoursId} | catalogueId=${catalogueId} | cl\xE9="${this.key(formationId, parcoursId, catalogueId)}" | params:`, params);
    return this.http.get(`${this.apiUrl}/formations/${formationId}/progression`, { params }).pipe(tap((res) => {
      console.log(`\u2705 [ProgressionService] loadFromApi r\xE9ponse pour cl\xE9="${this.key(formationId, parcoursId, catalogueId)}":`, res);
      if (res?.status) {
        const completed = new Set(res.completed_section_ids ?? []);
        const k = this.key(formationId, parcoursId, catalogueId);
        this.progressions.set(k, {
          formationId,
          parcoursId,
          catalogueId,
          // ✅
          completed,
          totalSections: res.total_sections ?? 0,
          percent: res.progression ?? 0
        });
        console.log(`\u{1F4BE} [ProgressionService] Cache mis \xE0 jour \u2192 cl\xE9="${k}" | sections compl\xE9t\xE9es: [${[...completed]}] | total: ${res.total_sections} | %: ${res.progression}`);
        this._change$.next(new Map(this.progressions));
      }
    }), catchError((err) => {
      console.error(`\u274C [ProgressionService] loadFromApi ERREUR pour formationId=${formationId} parcoursId=${parcoursId} catalogueId=${catalogueId}:`, err);
      return of(null);
    }));
  }
  // ════════════════════════════════════════════
  // INIT locale (sans appel API)
  // ════════════════════════════════════════════
  init(formationId, totalSections, alreadyCompleted = [], parcoursId = null, catalogueId = null) {
    const k = this.key(formationId, parcoursId, catalogueId);
    if (!this.progressions.has(k)) {
      const completed = new Set(alreadyCompleted);
      const percent = this.calcPercent(completed.size, totalSections);
      this.progressions.set(k, {
        formationId,
        parcoursId,
        catalogueId,
        // ✅
        completed,
        totalSections,
        percent
      });
      console.log(`\u{1F527} [ProgressionService] init (nouveau) \u2192 cl\xE9="${k}" | total=${totalSections} | d\xE9j\xE0 compl\xE9t\xE9es: [${alreadyCompleted}] | %=${percent}`);
    } else {
      const prog = this.progressions.get(k);
      prog.totalSections = totalSections;
      prog.percent = this.calcPercent(prog.completed.size, totalSections);
      console.log(`\u{1F527} [ProgressionService] init (mise \xE0 jour totalSections) \u2192 cl\xE9="${k}" | total=${totalSections} | sections en cache: [${[...prog.completed]}] | %=${prog.percent}`);
    }
    this._change$.next(new Map(this.progressions));
  }
  // ════════════════════════════════════════════
  // MARQUER une section complétée
  // ════════════════════════════════════════════
  markCompleted(formationId, sectionId, parcoursId = null, catalogueId = null) {
    const k = this.key(formationId, parcoursId, catalogueId);
    const prog = this.progressions.get(k);
    if (prog && !prog.completed.has(sectionId)) {
      prog.completed.add(sectionId);
      prog.percent = this.calcPercent(prog.completed.size, prog.totalSections);
      this._change$.next(new Map(this.progressions));
      console.log(`\u26A1 [ProgressionService] Mise \xE0 jour locale optimiste \u2192 sections compl\xE9t\xE9es: [${[...prog.completed]}] | %=${prog.percent}`);
    } else {
      console.warn(`\u26A0\uFE0F [ProgressionService] markCompleted \u2014 aucune entr\xE9e en cache pour cl\xE9="${k}", mise \xE0 jour locale ignor\xE9e`);
    }
    const url = `${this.apiUrl}/formations/${formationId}/sections/${sectionId}/complete`;
    console.log("\u{1F4E1} POST progression:", url, "| sectionId:", sectionId, "| formationId:", formationId);
    return this.http.post(url, {}, { headers: this.getAuthHeaders() }).pipe(tap((res) => {
      if (prog) {
        prog.percent = res?.progression ?? prog.percent;
        if (res?.completed_section_ids) {
          prog.completed = new Set(res.completed_section_ids);
        }
        this._change$.next(new Map(this.progressions));
        console.log(`\u{1F504} [ProgressionService] % synchronis\xE9 depuis API \u2192 %=${prog.percent} | est_termine=${res.est_termine} | quiz_final=${JSON.stringify(res.quiz_final)}`);
      }
    }), catchError((err) => {
      if (prog) {
        prog.completed.delete(sectionId);
        prog.percent = this.calcPercent(prog.completed.size, prog.totalSections);
        this._change$.next(new Map(this.progressions));
      }
      return throwError(() => err);
    }));
  }
  getAuthHeaders() {
    const token = localStorage.getItem("pyramide_token");
    return token ? { "Authorization": `Bearer ${token}` } : {};
  }
  // ════════════════════════════════════════════
  // RETIRER une section (retry quiz)
  // ════════════════════════════════════════════
  markUncompleted(formationId, sectionId, parcoursId = null, catalogueId = null) {
    const k = this.key(formationId, parcoursId, catalogueId);
    const prog = this.progressions.get(k);
    console.log(`\u21A9\uFE0F [ProgressionService] markUncompleted \u2192 formationId=${formationId} | sectionId=${sectionId} | parcoursId=${parcoursId} | catalogueId=${catalogueId} | cl\xE9="${k}"`);
    if (prog) {
      prog.completed.delete(sectionId);
      prog.percent = this.calcPercent(prog.completed.size, prog.totalSections);
      this._change$.next(new Map(this.progressions));
      console.log(`\u26A1 [ProgressionService] Section retir\xE9e localement \u2192 sections restantes: [${[...prog.completed]}] | %=${prog.percent}`);
    }
    const body = {};
    if (parcoursId)
      body["parcours_id"] = parcoursId;
    if (catalogueId)
      body["catalogue_id"] = catalogueId;
    this.http.post(`${this.apiUrl}/formations/${formationId}/sections/${sectionId}/uncomplete`, body).pipe(tap((res) => {
      console.log(`\u2705 [ProgressionService] markUncompleted r\xE9ponse API:`, res);
      if (res?.status && prog) {
        prog.percent = res.progression ?? prog.percent;
        this._change$.next(new Map(this.progressions));
      }
    }), catchError((err) => {
      console.error(`\u274C [ProgressionService] markUncompleted ERREUR API:`, err);
      return of(null);
    })).subscribe();
  }
  // ════════════════════════════════════════════
  // GETTERS — tous exigent parcoursId + catalogueId pour isoler le contexte
  // ════════════════════════════════════════════
  /** Retourne le % pour un contexte précis */
  getPercent(formationId, parcoursId = null, catalogueId = null) {
    return this.progressions.get(this.key(formationId, parcoursId, catalogueId))?.percent ?? 0;
  }
  getCompleted(formationId, parcoursId = null, catalogueId = null) {
    return this.progressions.get(this.key(formationId, parcoursId, catalogueId))?.completed ?? /* @__PURE__ */ new Set();
  }
  isCompleted(formationId, sectionId, parcoursId = null, catalogueId = null) {
    return this.progressions.get(this.key(formationId, parcoursId, catalogueId))?.completed.has(sectionId) ?? false;
  }
  hasData(formationId, parcoursId = null, catalogueId = null) {
    return this.progressions.has(this.key(formationId, parcoursId, catalogueId));
  }
  /** Debug — affiche tout le cache en console */
  debugDump() {
    console.group("\u{1F5FA}\uFE0F [ProgressionService] Dump complet du cache");
    this.progressions.forEach((v, k) => {
      console.log(`  cl\xE9="${k}" \u2192`, {
        formationId: v.formationId,
        parcoursId: v.parcoursId,
        catalogueId: v.catalogueId,
        percent: v.percent,
        completed: [...v.completed],
        totalSections: v.totalSections
      });
    });
    console.groupEnd();
  }
  calcPercent(done, total) {
    if (!total)
      return 0;
    return Math.round(done / total * 100);
  }
  static \u0275fac = function ProgressionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressionService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProgressionService, factory: _ProgressionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ProgressionService
};
//# sourceMappingURL=chunk-IQL562NT.js.map
