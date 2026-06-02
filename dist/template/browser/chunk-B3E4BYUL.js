import {
  environment
} from "./chunk-FKX6UC3I.js";
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from "./chunk-46QRNFHM.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7XGB4BEQ.js";

// src/app/shared/service/sondage/sondage.service.ts
var SondageService = class _SondageService {
  http;
  api = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  headers() {
    const token = localStorage.getItem("pyramide_token");
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }
  getSondages(filters = {}) {
    let params = new HttpParams();
    Object.entries(filters).forEach(([k, v]) => {
      if (v !== void 0 && v !== null && v !== "")
        params = params.set(k, String(v));
    });
    return this.http.get(`${this.api}/sondages`, { headers: this.headers(), params });
  }
  getSondage(id) {
    return this.http.get(`${this.api}/sondages/${id}`, { headers: this.headers() });
  }
  createSondage(data) {
    return this.http.post(`${this.api}/sondages`, data, { headers: this.headers() });
  }
  updateSondage(id, data) {
    return this.http.put(`${this.api}/sondages/${id}`, data, { headers: this.headers() });
  }
  deleteSondage(id) {
    return this.http.delete(`${this.api}/sondages/${id}`, { headers: this.headers() });
  }
  publishSondage(id) {
    return this.http.put(`${this.api}/sondages/${id}/publish`, {}, { headers: this.headers() });
  }
  archiveSondage(id) {
    return this.http.put(`${this.api}/sondages/${id}/archive`, {}, { headers: this.headers() });
  }
  addQuestion(sondageId, data) {
    return this.http.post(`${this.api}/sondages/${sondageId}/questions`, data, { headers: this.headers() });
  }
  updateQuestion(sondageId, questionId, data) {
    return this.http.put(`${this.api}/sondages/${sondageId}/questions/${questionId}`, data, { headers: this.headers() });
  }
  deleteQuestion(sondageId, questionId) {
    return this.http.delete(`${this.api}/sondages/${sondageId}/questions/${questionId}`, { headers: this.headers() });
  }
  getStatistiques(id) {
    return this.http.get(`${this.api}/sondages/${id}/statistiques`, { headers: this.headers() });
  }
  respondSondage(sondageId, reponses) {
    return this.http.post(`${this.api}/sondages/${sondageId}/repondre`, { reponses }, { headers: this.headers() });
  }
  getMesSondages() {
    return this.http.get(`${this.api}/mes-sondages`, { headers: this.headers() });
  }
  getExportUrl(id) {
    const token = localStorage.getItem("pyramide_token");
    return `${this.api}/sondages/${id}/export?token=${token}`;
  }
  getTypeLabel(type) {
    const map = {
      satisfaction: "Satisfaction",
      evaluation: "\xC9valuation",
      feedback: "Feedback",
      quiz: "Quiz",
      enquete: "Enqu\xEAte"
    };
    return map[type] ?? type;
  }
  getTypeColor(type) {
    const map = {
      satisfaction: "#059669",
      evaluation: "#1D6EBF",
      feedback: "#7B5EA7",
      quiz: "#D97706",
      enquete: "#C0392B"
    };
    return map[type] ?? "#6C757D";
  }
  static \u0275fac = function SondageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SondageService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SondageService, factory: _SondageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SondageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  SondageService
};
//# sourceMappingURL=chunk-B3E4BYUL.js.map
