import {
  environment
} from "./chunk-FKX6UC3I.js";
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from "./chunk-GSAJL664.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UPBSS6WA.js";

// src/app/shared/service/ticket/ticket.service.ts
var TicketService = class _TicketService {
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
  getTickets(params) {
    let httpParams = new HttpParams();
    if (params?.statut)
      httpParams = httpParams.set("statut", params.statut);
    if (params?.priorite)
      httpParams = httpParams.set("priorite", params.priorite);
    if (params?.categorie)
      httpParams = httpParams.set("categorie", params.categorie);
    if (params?.search)
      httpParams = httpParams.set("search", params.search);
    if (params?.entreprise_id)
      httpParams = httpParams.set("entreprise_id", String(params.entreprise_id));
    if (params?.user_id)
      httpParams = httpParams.set("user_id", String(params.user_id));
    if (params?.page)
      httpParams = httpParams.set("page", String(params.page));
    if (params?.par_page)
      httpParams = httpParams.set("par_page", String(params.par_page));
    return this.http.get(`${this.apiUrl}/tickets`, { headers: this.getHeaders(), params: httpParams });
  }
  getStatistiques(params) {
    let httpParams = new HttpParams();
    if (params?.entreprise_id)
      httpParams = httpParams.set("entreprise_id", String(params.entreprise_id));
    return this.http.get(`${this.apiUrl}/tickets/statistiques`, { headers: this.getHeaders(), params: httpParams });
  }
  getStatistiquesRh(params) {
    let httpParams = new HttpParams();
    if (params?.entreprise_id)
      httpParams = httpParams.set("entreprise_id", String(params.entreprise_id));
    return this.http.get(`${this.apiUrl}/tickets/statistiques`, { headers: this.getHeaders(), params: httpParams });
  }
  getTicketById(id) {
    return this.http.get(`${this.apiUrl}/tickets/${id}`, { headers: this.getHeaders() });
  }
  createTicket(data) {
    return this.http.post(`${this.apiUrl}/tickets`, data, { headers: this.getHeaders() });
  }
  updateTicket(id, data) {
    return this.http.put(`${this.apiUrl}/tickets/${id}`, data, { headers: this.getHeaders() });
  }
  deleteTicket(id) {
    return this.http.delete(`${this.apiUrl}/tickets/${id}`, { headers: this.getHeaders() });
  }
  ajouterMessage(id, data) {
    return this.http.post(`${this.apiUrl}/tickets/${id}/messages`, data, { headers: this.getHeaders() });
  }
  assigner(id, data) {
    return this.http.post(`${this.apiUrl}/tickets/${id}/assigner`, data, { headers: this.getHeaders() });
  }
  escalader(id, data) {
    return this.http.post(`${this.apiUrl}/tickets/${id}/escalader`, data, { headers: this.getHeaders() });
  }
  noterSatisfaction(id, data) {
    return this.http.post(`${this.apiUrl}/tickets/${id}/satisfaction`, data, { headers: this.getHeaders() });
  }
  static \u0275fac = function TicketService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TicketService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TicketService, factory: _TicketService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TicketService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  TicketService
};
//# sourceMappingURL=chunk-BNBKM6MH.js.map
