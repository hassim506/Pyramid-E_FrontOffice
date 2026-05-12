import {
  environment
} from "./chunk-FKX6UC3I.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-GSAJL664.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UPBSS6WA.js";

// src/app/shared/service/quiz/question-quiz.service.ts
var QuestionQuizService = class _QuestionQuizService {
  http;
  baseUrl = `${environment.apiUrl}/quizzes`;
  constructor(http) {
    this.http = http;
  }
  getHeaders() {
    const token = localStorage.getItem("pyramide_token") || localStorage.getItem("access_token");
    return new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": token ? `Bearer ${token}` : ""
    });
  }
  getQuestions(quizId) {
    return this.http.get(`${this.baseUrl}/${quizId}/questions`, {
      headers: this.getHeaders()
    });
  }
  getQuestion(quizId, questionId) {
    return this.http.get(`${this.baseUrl}/${quizId}/questions/${questionId}`, {
      headers: this.getHeaders()
    });
  }
  createQuestion(quizId, question) {
    return this.http.post(`${this.baseUrl}/${quizId}/questions`, question, {
      headers: this.getHeaders()
    });
  }
  updateQuestion(quizId, questionId, question) {
    return this.http.put(`${this.baseUrl}/${quizId}/questions/${questionId}`, question, {
      headers: this.getHeaders()
    });
  }
  deleteQuestion(quizId, questionId) {
    return this.http.delete(`${this.baseUrl}/${quizId}/questions/${questionId}`, {
      headers: this.getHeaders()
    });
  }
  reorderQuestions(quizId, reorderData) {
    return this.http.put(`${this.baseUrl}/${quizId}/questions/reorder`, reorderData, {
      headers: this.getHeaders()
    });
  }
  static \u0275fac = function QuestionQuizService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuestionQuizService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuestionQuizService, factory: _QuestionQuizService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionQuizService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  QuestionQuizService
};
//# sourceMappingURL=chunk-ZNCWEFQ3.js.map
