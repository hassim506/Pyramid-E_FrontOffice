import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-UFFO2UKW.js";
import "./chunk-U7UKDAOZ.js";
import {
  HttpClient
} from "./chunk-EGNJBGKD.js";
import {
  CommonModule,
  DatePipe,
  NgIf
} from "./chunk-I2HNPZHV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-BSBCM3BI.js";
import "./chunk-4MWRP73S.js";

// src/app/features/verify-certificate/verify-certificate.component.ts
function VerifyCertificateComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6);
    \u0275\u0275element(2, "i", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 8);
    \u0275\u0275text(4, "V\xE9rification en cours\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6, "Nous v\xE9rifions l'authenticit\xE9 de ce certificat.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function VerifyCertificateComponent_ng_container_5_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 14);
    \u0275\u0275text(2, "Entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.cert.entreprise);
  }
}
function VerifyCertificateComponent_ng_container_5_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 14);
    \u0275\u0275text(2, "Formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.cert.formateur);
  }
}
function VerifyCertificateComponent_ng_container_5_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 14);
    \u0275\u0275text(2, "Date d'expiration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r0.cert.date_expiration, "dd/MM/yyyy"));
  }
}
function VerifyCertificateComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275element(2, "i", 11);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Certificat authentique");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h2", 8);
    \u0275\u0275text(6, "Certificat valide \u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 9);
    \u0275\u0275text(8, "Ce certificat est authentique et a \xE9t\xE9 d\xE9livr\xE9 par Pyramide Formation.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 12)(10, "div", 13)(11, "span", 14);
    \u0275\u0275text(12, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 15);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 13)(16, "span", 14);
    \u0275\u0275text(17, "Titulaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 15);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, VerifyCertificateComponent_ng_container_5_div_20_Template, 5, 1, "div", 16)(21, VerifyCertificateComponent_ng_container_5_div_21_Template, 5, 1, "div", 16);
    \u0275\u0275elementStart(22, "div", 13)(23, "span", 14);
    \u0275\u0275text(24, "Date de d\xE9livrance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 15);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, VerifyCertificateComponent_ng_container_5_div_28_Template, 6, 4, "div", 16);
    \u0275\u0275elementStart(29, "div", 13)(30, "span", 14);
    \u0275\u0275text(31, "Code du certificat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 17);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r0.cert.formation);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.cert.employe);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.cert.entreprise);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.cert.formateur == null ? null : ctx_r0.cert.formateur.trim());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 7, ctx_r0.cert.date_delivrance, "dd/MM/yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.cert.date_expiration);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.cert.code_unique);
  }
}
function VerifyCertificateComponent_ng_container_6_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, " Ce certificat a le statut ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " et ne peut pas \xEAtre v\xE9rifi\xE9 comme valide. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.cert.statut);
  }
}
function VerifyCertificateComponent_ng_container_6_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, " Aucun certificat ne correspond \xE0 ce code. V\xE9rifiez que le lien est correct. ");
    \u0275\u0275elementEnd();
  }
}
function VerifyCertificateComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275element(2, "i", 19);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Certificat non valide");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h2", 8);
    \u0275\u0275text(6, "Certificat introuvable ou non valide");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, VerifyCertificateComponent_ng_container_6_p_7_Template, 5, 1, "p", 20)(8, VerifyCertificateComponent_ng_container_6_p_8_Template, 2, 0, "p", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.cert);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.cert);
  }
}
function VerifyCertificateComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275element(2, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 8);
    \u0275\u0275text(4, "Erreur de v\xE9rification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
var VerifyCertificateComponent = class _VerifyCertificateComponent {
  route;
  http;
  state = "loading";
  cert = null;
  errorMsg = "";
  constructor(route, http) {
    this.route = route;
    this.http = http;
  }
  ngOnInit() {
    const code = this.route.snapshot.queryParamMap.get("code");
    if (!code) {
      this.state = "error";
      this.errorMsg = "Aucun code de certificat fourni.";
      return;
    }
    this.http.get(`${environment.apiUrl}/certificats/verify?code=${encodeURIComponent(code)}`).subscribe({
      next: (res) => {
        this.cert = res;
        this.state = res.valid ? "valid" : "invalid";
      },
      error: (err) => {
        if (err.status === 404) {
          this.state = "invalid";
          this.cert = null;
        } else {
          this.state = "error";
          this.errorMsg = "Impossible de v\xE9rifier le certificat. Veuillez r\xE9essayer.";
        }
      }
    });
  }
  static \u0275fac = function VerifyCertificateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VerifyCertificateComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerifyCertificateComponent, selectors: [["app-verify-certificate"]], decls: 10, vars: 4, consts: [[1, "vc-page"], [1, "vc-card"], [1, "vc-logo"], ["src", "assets/img/logo.png", "alt", "Pyramide Formation", 2, "height", "48px"], [4, "ngIf"], [1, "vc-footer"], [1, "vc-icon", "vc-icon--spin"], [1, "isax", "isax-refresh"], [1, "vc-title"], [1, "vc-sub"], [1, "vc-badge", "vc-badge--valid"], [1, "isax", "isax-shield-tick"], [1, "vc-details"], [1, "vc-row"], [1, "vc-label"], [1, "vc-value"], ["class", "vc-row", 4, "ngIf"], [1, "vc-value", "vc-code"], [1, "vc-badge", "vc-badge--invalid"], [1, "isax", "isax-shield-slash"], ["class", "vc-sub", 4, "ngIf"], [1, "vc-icon", "vc-icon--error"], [1, "isax", "isax-warning-2"]], template: function VerifyCertificateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, VerifyCertificateComponent_ng_container_4_Template, 7, 0, "ng-container", 4)(5, VerifyCertificateComponent_ng_container_5_Template, 34, 10, "ng-container", 4)(6, VerifyCertificateComponent_ng_container_6_Template, 9, 2, "ng-container", 4)(7, VerifyCertificateComponent_ng_container_7_Template, 7, 1, "ng-container", 4);
      \u0275\u0275elementStart(8, "p", 5);
      \u0275\u0275text(9, "Pyramide Formation \u2014 Plateforme de gestion de la formation professionnelle");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.state === "loading");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "valid");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "invalid");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "error");
    }
  }, dependencies: [CommonModule, NgIf, DatePipe], styles: ["\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.vc-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f3f4f6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 16px;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.vc-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);\n  padding: 48px 40px;\n  max-width: 520px;\n  width: 100%;\n  text-align: center;\n}\n.vc-logo[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.vc-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  margin-bottom: 20px;\n}\n.vc-icon--spin[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.vc-icon--error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.vc-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 20px;\n  border-radius: 999px;\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n.vc-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.vc-badge--valid[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n  border: 1.5px solid #6ee7b7;\n}\n.vc-badge--invalid[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n  border: 1.5px solid #fca5a5;\n}\n.vc-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 8px;\n}\n.vc-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0 0 28px;\n}\n.vc-details[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 4px 0;\n  margin-bottom: 28px;\n  text-align: left;\n}\n.vc-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n  padding: 10px 20px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.vc-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.vc-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n  width: 140px;\n}\n.vc-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #111827;\n  font-weight: 500;\n}\n.vc-code[_ngcontent-%COMP%] {\n  font-family: monospace;\n  letter-spacing: 1px;\n  color: #069b8f;\n}\n.vc-footer[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #d1d5db;\n  margin: 0;\n}\n/*# sourceMappingURL=verify-certificate.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerifyCertificateComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-verify-certificate", imports: [CommonModule, RouterLink], template: `<div class="vc-page">\r
  <div class="vc-card">\r
\r
    <!-- Logo -->\r
    <div class="vc-logo">\r
      <img src="assets/img/logo.png" alt="Pyramide Formation" style="height:48px;">\r
    </div>\r
\r
    <!-- Chargement -->\r
    <ng-container *ngIf="state === 'loading'">\r
      <div class="vc-icon vc-icon--spin">\r
        <i class="isax isax-refresh"></i>\r
      </div>\r
      <h2 class="vc-title">V\xE9rification en cours\u2026</h2>\r
      <p class="vc-sub">Nous v\xE9rifions l'authenticit\xE9 de ce certificat.</p>\r
    </ng-container>\r
\r
    <!-- Valide -->\r
    <ng-container *ngIf="state === 'valid'">\r
      <div class="vc-badge vc-badge--valid">\r
        <i class="isax isax-shield-tick"></i>\r
        <span>Certificat authentique</span>\r
      </div>\r
\r
      <h2 class="vc-title">Certificat valide \u2713</h2>\r
      <p class="vc-sub">Ce certificat est authentique et a \xE9t\xE9 d\xE9livr\xE9 par Pyramide Formation.</p>\r
\r
      <div class="vc-details">\r
        <div class="vc-row">\r
          <span class="vc-label">Formation</span>\r
          <span class="vc-value">{{ cert.formation }}</span>\r
        </div>\r
        <div class="vc-row">\r
          <span class="vc-label">Titulaire</span>\r
          <span class="vc-value">{{ cert.employe }}</span>\r
        </div>\r
        <div class="vc-row" *ngIf="cert.entreprise">\r
          <span class="vc-label">Entreprise</span>\r
          <span class="vc-value">{{ cert.entreprise }}</span>\r
        </div>\r
        <div class="vc-row" *ngIf="cert.formateur?.trim()">\r
          <span class="vc-label">Formateur</span>\r
          <span class="vc-value">{{ cert.formateur }}</span>\r
        </div>\r
        <div class="vc-row">\r
          <span class="vc-label">Date de d\xE9livrance</span>\r
          <span class="vc-value">{{ cert.date_delivrance | date:'dd/MM/yyyy' }}</span>\r
        </div>\r
        <div class="vc-row" *ngIf="cert.date_expiration">\r
          <span class="vc-label">Date d'expiration</span>\r
          <span class="vc-value">{{ cert.date_expiration | date:'dd/MM/yyyy' }}</span>\r
        </div>\r
        <div class="vc-row">\r
          <span class="vc-label">Code du certificat</span>\r
          <span class="vc-value vc-code">{{ cert.code_unique }}</span>\r
        </div>\r
      </div>\r
    </ng-container>\r
\r
    <!-- Invalide / expir\xE9 / r\xE9voqu\xE9 -->\r
    <ng-container *ngIf="state === 'invalid'">\r
      <div class="vc-badge vc-badge--invalid">\r
        <i class="isax isax-shield-slash"></i>\r
        <span>Certificat non valide</span>\r
      </div>\r
\r
      <h2 class="vc-title">Certificat introuvable ou non valide</h2>\r
      <p class="vc-sub" *ngIf="cert">\r
        Ce certificat a le statut <strong>{{ cert.statut }}</strong> et ne peut pas \xEAtre v\xE9rifi\xE9 comme valide.\r
      </p>\r
      <p class="vc-sub" *ngIf="!cert">\r
        Aucun certificat ne correspond \xE0 ce code. V\xE9rifiez que le lien est correct.\r
      </p>\r
    </ng-container>\r
\r
    <!-- Erreur r\xE9seau -->\r
    <ng-container *ngIf="state === 'error'">\r
      <div class="vc-icon vc-icon--error">\r
        <i class="isax isax-warning-2"></i>\r
      </div>\r
      <h2 class="vc-title">Erreur de v\xE9rification</h2>\r
      <p class="vc-sub">{{ errorMsg }}</p>\r
    </ng-container>\r
\r
    <p class="vc-footer">Pyramide Formation \u2014 Plateforme de gestion de la formation professionnelle</p>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/verify-certificate/verify-certificate.component.scss */\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.vc-page {\n  min-height: 100vh;\n  background: #f3f4f6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 16px;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.vc-card {\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);\n  padding: 48px 40px;\n  max-width: 520px;\n  width: 100%;\n  text-align: center;\n}\n.vc-logo {\n  margin-bottom: 32px;\n}\n.vc-icon {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  margin-bottom: 20px;\n}\n.vc-icon--spin {\n  background: #f3f4f6;\n  color: #6b7280;\n  animation: spin 0.8s linear infinite;\n}\n.vc-icon--error {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.vc-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 20px;\n  border-radius: 999px;\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n.vc-badge i {\n  font-size: 18px;\n}\n.vc-badge--valid {\n  background: #ecfdf5;\n  color: #059669;\n  border: 1.5px solid #6ee7b7;\n}\n.vc-badge--invalid {\n  background: #fef2f2;\n  color: #dc2626;\n  border: 1.5px solid #fca5a5;\n}\n.vc-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 8px;\n}\n.vc-sub {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0 0 28px;\n}\n.vc-details {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 4px 0;\n  margin-bottom: 28px;\n  text-align: left;\n}\n.vc-row {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n  padding: 10px 20px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.vc-row:last-child {\n  border-bottom: none;\n}\n.vc-label {\n  font-size: 11px;\n  font-weight: 700;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n  width: 140px;\n}\n.vc-value {\n  font-size: 14px;\n  color: #111827;\n  font-weight: 500;\n}\n.vc-code {\n  font-family: monospace;\n  letter-spacing: 1px;\n  color: #069b8f;\n}\n.vc-footer {\n  font-size: 12px;\n  color: #d1d5db;\n  margin: 0;\n}\n/*# sourceMappingURL=verify-certificate.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerifyCertificateComponent, { className: "VerifyCertificateComponent", filePath: "app/features/verify-certificate/verify-certificate.component.ts", lineNumber: 14 });
})();
export {
  VerifyCertificateComponent
};
//# sourceMappingURL=chunk-4JKKRASK.js.map
