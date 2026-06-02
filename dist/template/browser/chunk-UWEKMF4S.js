import {
  BrowserModule
} from "./chunk-NHSI3UX5.js";
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders
} from "./chunk-46QRNFHM.js";
import "./chunk-MNWNTO2T.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  Injectable,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵinject,
  ɵɵtext
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/shared/service/certifier/certifier-service.service.ts
var CertifierService = class _CertifierService {
  http;
  apiUrl = "https://api.certifier.io/v1";
  accessToken = "cfp_o3eyPlaQVpOvL6Y63W2EqBnDXWsQ2No0g7x6";
  //  token
  constructor(http) {
    this.http = http;
  }
  getHeaders() {
    return new HttpHeaders({
      "Authorization": `Bearer ${this.accessToken}`,
      "Certifier-Version": "2022-10-26",
      "Content-Type": "application/json"
    });
  }
  // Récupérer tous les credentials
  getCredentials() {
    return this.http.get(`${this.apiUrl}/credentials`, {
      headers: this.getHeaders()
    });
  }
  // Créer un nouveau credential
  createCredential(credentialData) {
    return this.http.post(`${this.apiUrl}/credentials`, credentialData, {
      headers: this.getHeaders()
    });
  }
  // Récupérer un credential spécifique
  getCredential(credentialId) {
    return this.http.get(`${this.apiUrl}/credentials/${credentialId}`, {
      headers: this.getHeaders()
    });
  }
  // Mettre à jour un credential
  updateCredential(credentialId, credentialData) {
    return this.http.put(`${this.apiUrl}/credentials/${credentialId}`, credentialData, {
      headers: this.getHeaders()
    });
  }
  // Supprimer un credential
  deleteCredential(credentialId) {
    return this.http.delete(`${this.apiUrl}/credentials/${credentialId}`, {
      headers: this.getHeaders()
    });
  }
  static \u0275fac = function CertifierService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CertifierService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CertifierService, factory: _CertifierService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CertifierService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/adminrh/adminrh-certifier/adminrh-certifier.component.ts
var AdminrhCertifierComponent = class _AdminrhCertifierComponent {
  certifierService;
  credentials = [];
  loading = false;
  constructor(certifierService) {
    this.certifierService = certifierService;
  }
  ngOnInit() {
    this.loadCredentials();
  }
  loadCredentials() {
    this.loading = true;
    this.certifierService.getCredentials().subscribe({
      next: (response) => {
        this.credentials = response.data || response;
        this.loading = false;
      },
      error: (error) => {
        console.error("Erreur lors du chargement des certificats:", error);
        this.loading = false;
      }
    });
  }
  createCertificate(certificateData) {
    this.certifierService.createCredential(certificateData).subscribe({
      next: (response) => {
        console.log("Certificat cr\xE9\xE9:", response);
        this.loadCredentials();
      },
      error: (error) => {
        console.error("Erreur lors de la cr\xE9ation du certificat:", error);
      }
    });
  }
  static \u0275fac = function AdminrhCertifierComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhCertifierComponent)(\u0275\u0275directiveInject(CertifierService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhCertifierComponent, selectors: [["app-adminrh-certifier"]], features: [\u0275\u0275ProvidersFeature([
    CertifierService
  ])], decls: 2, vars: 0, template: function AdminrhCertifierComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "adminrh-certifier works!");
      \u0275\u0275domElementEnd();
    }
  }, dependencies: [
    BrowserModule,
    HttpClientModule
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhCertifierComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-certifier", imports: [
      BrowserModule,
      HttpClientModule
    ], providers: [
      CertifierService
    ], template: "<p>adminrh-certifier works!</p>\r\n" }]
  }], () => [{ type: CertifierService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhCertifierComponent, { className: "AdminrhCertifierComponent", filePath: "src/app/features/adminrh/adminrh-certifier/adminrh-certifier.component.ts", lineNumber: 26 });
})();
export {
  AdminrhCertifierComponent
};
//# sourceMappingURL=chunk-UWEKMF4S.js.map
