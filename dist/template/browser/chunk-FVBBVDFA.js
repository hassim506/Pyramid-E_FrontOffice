import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-46QRNFHM.js";
import {
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7XGB4BEQ.js";

// src/app/shared/service/quiz/quiz.service.ts
var QuizService = class _QuizService {
  http;
  apiUrl = `${environment.apiUrl}/quizzes`;
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
  getQuizzes() {
    return this.http.get(this.apiUrl, {
      headers: this.getHeaders()
    }).pipe(map((response) => {
      console.log("R\xE9ponse API quiz:", response);
      return response.quizzes || [];
    }));
  }
  getQuiz(id) {
    return this.http.get(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }
  getQuizzesByFormation(formationId) {
    return this.http.get(`${this.apiUrl}/formation/${formationId}`, {
      headers: this.getHeaders()
    }).pipe(map((response) => response.quizzes || []));
  }
  createQuiz(quiz) {
    return this.http.post(this.apiUrl, quiz, {
      headers: this.getHeaders()
    });
  }
  updateQuiz(id, quiz) {
    return this.http.put(`${this.apiUrl}/${id}`, quiz, {
      headers: this.getHeaders()
    });
  }
  deleteQuiz(id) {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }
  submitQuiz(id, answers) {
    return this.http.post(`${this.apiUrl}/${id}/submit`, answers, {
      headers: this.getHeaders()
    });
  }
  static \u0275fac = function QuizService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuizService, factory: _QuizService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  QuizService
};
//# sourceMappingURL=chunk-FVBBVDFA.js.map
