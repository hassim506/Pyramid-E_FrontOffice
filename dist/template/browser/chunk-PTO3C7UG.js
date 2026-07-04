import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  HttpClient
} from "./chunk-TLD64Y2W.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTSSTHJF.js";

// src/app/shared/service/quiz/quiz-results.service.ts
var QuizResultsService = class _QuizResultsService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getAllResults() {
    return this.http.get(`${this.apiUrl}/quiz-results`);
  }
  getResultsByQuiz(quizId) {
    return this.http.get(`${this.apiUrl}/quiz-results/quiz/${quizId}`);
  }
  getResultsByFormation(formationId) {
    return this.http.get(`${this.apiUrl}/quiz-results/formation/${formationId}`);
  }
  getQuizStatistics(quizId) {
    return this.http.get(`${this.apiUrl}/quiz-results/quiz/${quizId}/statistics`);
  }
  static \u0275fac = function QuizResultsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizResultsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuizResultsService, factory: _QuizResultsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizResultsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  QuizResultsService
};
//# sourceMappingURL=chunk-PTO3C7UG.js.map
