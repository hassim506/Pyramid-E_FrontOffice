import {
  environment
} from "./chunk-FKX6UC3I.js";
import {
  HttpClient
} from "./chunk-46QRNFHM.js";
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
} from "./chunk-7XGB4BEQ.js";

// src/app/shared/service/progression/progression.service.ts
var ProgressionService = class _ProgressionService {
  http;
  apiUrl = environment.apiUrl;
  progressions = /* @__PURE__ */ new Map();
  _change$ = new BehaviorSubject(this.progressions);
  change$ = this._change$.asObservable();
  constructor(http) {
    this.http = http;
  }
  // ════════════════════════════════════════════
  // CHARGER depuis l'API au démarrage du lecteur
  // ════════════════════════════════════════════
  loadFromApi(formationId) {
    return this.http.get(`${this.apiUrl}/formations/${formationId}/progression`).pipe(tap((res) => {
      if (res?.status) {
        const completed = new Set(res.completed_section_ids ?? []);
        this.progressions.set(formationId, {
          formationId,
          completed,
          totalSections: res.total_sections ?? 0,
          percent: res.progression ?? 0
        });
        this._change$.next(new Map(this.progressions));
      }
    }), catchError(() => of(null)));
  }
  // ════════════════════════════════════════════
  // INIT locale (fallback si pas d'API)
  // ════════════════════════════════════════════
  init(formationId, totalSections, alreadyCompleted = []) {
    if (!this.progressions.has(formationId)) {
      const completed = new Set(alreadyCompleted);
      this.progressions.set(formationId, {
        formationId,
        completed,
        totalSections,
        percent: this.calcPercent(completed.size, totalSections)
      });
      this._change$.next(new Map(this.progressions));
    } else {
      const prog = this.progressions.get(formationId);
      prog.totalSections = totalSections;
      prog.percent = this.calcPercent(prog.completed.size, totalSections);
      this._change$.next(new Map(this.progressions));
    }
  }
  // ════════════════════════════════════════════
  // MARQUER une section — retourne Observable
  // pour que l'appelant puisse lire quiz_final
  // ════════════════════════════════════════════
  markCompleted(formationId, sectionId) {
    const prog = this.progressions.get(formationId);
    if (prog && !prog.completed.has(sectionId)) {
      prog.completed.add(sectionId);
      prog.percent = this.calcPercent(prog.completed.size, prog.totalSections);
      this._change$.next(new Map(this.progressions));
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
  markUncompleted(formationId, sectionId) {
    const prog = this.progressions.get(formationId);
    if (prog) {
      prog.completed.delete(sectionId);
      prog.percent = this.calcPercent(prog.completed.size, prog.totalSections);
      this._change$.next(new Map(this.progressions));
    }
    this.http.post(`${this.apiUrl}/formations/${formationId}/sections/${sectionId}/uncomplete`, {}).pipe(tap((res) => {
      if (res?.status && prog) {
        prog.percent = res.progression ?? prog.percent;
        this._change$.next(new Map(this.progressions));
      }
    }), catchError(() => of(null))).subscribe();
  }
  // ════════════════════════════════════════════
  // GETTERS
  // ════════════════════════════════════════════
  getPercent(formationId) {
    return this.progressions.get(formationId)?.percent ?? 0;
  }
  getCompleted(formationId) {
    return this.progressions.get(formationId)?.completed ?? /* @__PURE__ */ new Set();
  }
  isCompleted(formationId, sectionId) {
    return this.progressions.get(formationId)?.completed.has(sectionId) ?? false;
  }
  hasData(formationId) {
    return this.progressions.has(formationId);
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
//# sourceMappingURL=chunk-GDHW5LKJ.js.map
