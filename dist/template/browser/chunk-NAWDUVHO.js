import {
  environment
} from "./chunk-FKX6UC3I.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-46QRNFHM.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7XGB4BEQ.js";

// src/app/shared/service/client/client-company.service.ts
var ClientCompanyService = class _ClientCompanyService {
  http;
  baseUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  // Méthodes pour les Clients
  getClients(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0) {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return this.http.get(`${this.baseUrl}/clients`, { params: httpParams });
  }
  getClient(id) {
    return this.http.get(`${this.baseUrl}/clients/${id}`);
  }
  createClient(client) {
    return this.http.post(`${this.baseUrl}/clients`, client);
  }
  updateClient(id, client) {
    return this.http.put(`${this.baseUrl}/clients/${id}`, client);
  }
  deleteClient(id) {
    return this.http.delete(`${this.baseUrl}/clients/${id}`);
  }
  // Méthodes pour les Entreprises
  getCompanies(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0) {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return this.http.get(`${this.baseUrl}/entreprises`, { params: httpParams });
  }
  getCompany(id) {
    return this.http.get(`${this.baseUrl}/entreprises/${id}`);
  }
  createCompany(company) {
    return this.http.post(`${this.baseUrl}/entreprises`, company);
  }
  createMyCompany(company) {
    return this.http.post(`${this.baseUrl}/mes-entreprises`, company);
  }
  updateCompany(id, company) {
    return this.http.put(`${this.baseUrl}/entreprises/${id}`, company);
  }
  deleteCompany(id) {
    return this.http.delete(`${this.baseUrl}/entreprises/${id}`);
  }
  // Méthodes pour récupérer les entreprises d'un client
  getCompaniesByClient(clientId) {
    return this.http.get(`${this.baseUrl}/mes-entreprises`);
  }
  getMyCompanies() {
    return this.http.get(`${this.baseUrl}/mes-entreprises`);
  }
  static \u0275fac = function ClientCompanyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientCompanyService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClientCompanyService, factory: _ClientCompanyService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientCompanyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ClientCompanyService
};
//# sourceMappingURL=chunk-NAWDUVHO.js.map
