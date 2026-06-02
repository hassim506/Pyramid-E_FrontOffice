import {
  AuthService
} from "./chunk-SNOA42FF.js";
import "./chunk-FKX6UC3I.js";
import {
  routes
} from "./chunk-TYVQP4CB.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
import {
  CommonModule,
  NgIf
} from "./chunk-MNWNTO2T.js";
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
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/auth/activate/activate.component.ts
function ActivateComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6);
    \u0275\u0275element(2, "i", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 8);
    \u0275\u0275text(4, "Activation en cours\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6, "Nous activons votre compte, veuillez patienter.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function ActivateComponent_ng_container_6_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.userName);
  }
}
function ActivateComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275element(2, "i", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 8);
    \u0275\u0275text(4, " Bienvenue");
    \u0275\u0275template(5, ActivateComponent_ng_container_6_ng_container_5_Template, 2, 1, "ng-container", 5);
    \u0275\u0275text(6, " ! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 12);
    \u0275\u0275text(8, " Votre compte est activ\xE9 avec succ\xE8s.");
    \u0275\u0275element(9, "br");
    \u0275\u0275text(10, " Vous allez \xEAtre redirig\xE9 vers votre tableau de bord\u2026 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 13);
    \u0275\u0275element(12, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.userName);
  }
}
function ActivateComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275element(2, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 8);
    \u0275\u0275text(4, "Activation impossible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 18);
    \u0275\u0275element(8, "i", 19);
    \u0275\u0275text(9, "Retour \xE0 la connexion ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.login);
  }
}
var ActivateComponent = class _ActivateComponent {
  route;
  router;
  authService;
  routes = routes;
  state = "loading";
  userName = "";
  errorMsg = "";
  constructor(route, router, authService) {
    this.route = route;
    this.router = router;
    this.authService = authService;
  }
  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get("token");
    if (!token) {
      this.state = "error";
      this.errorMsg = "Lien d'activation invalide.";
      return;
    }
    this.authService.activateAccount(token).subscribe({
      next: (res) => {
        this.state = "success";
        const u = res.user;
        this.userName = u ? u["prenom"] ? `${u["prenom"]} ${u["nom"] ?? ""}`.trim() : u.name ?? "" : "";
        const roleId = res.user?.role_id;
        setTimeout(() => {
          if (roleId === 2)
            this.router.navigate(["/student/student-dashboard"]);
          else if ([3, 10, 6, 13].includes(roleId))
            this.router.navigate(["/instructor/instructor-dashboard"]);
          else if ([4, 5, 9, 14].includes(roleId))
            this.router.navigate(["/adminrh/adminrh-dashboard"]);
          else if (roleId === 1)
            this.router.navigate(["/superadmin/superadmin-dashboard"]);
          else
            this.router.navigate(["/auth/login"]);
        }, 2500);
      },
      error: (err) => {
        this.state = "error";
        this.errorMsg = err?.message || "Lien d'activation invalide ou d\xE9j\xE0 utilis\xE9.";
      }
    });
  }
  static \u0275fac = function ActivateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActivateComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActivateComponent, selectors: [["app-activate"]], decls: 8, vars: 3, consts: [[1, "main-wrapper"], [1, "login-content"], [1, "row", "justify-content-center", "align-items-center", 2, "min-height", "100vh"], [1, "col-md-5", "col-lg-4"], [1, "loginbox", "text-center", "p-5"], [4, "ngIf"], [1, "ac-icon", "ac-icon--spin", "mb-4"], [1, "isax", "isax-refresh"], [1, "fw-bold", "mb-2"], [1, "text-muted"], [1, "ac-icon", "ac-icon--gold", "mb-4"], [1, "isax", "isax-award"], [1, "text-muted", "mb-3"], [1, "ac-progress-bar"], [1, "ac-progress-fill"], [1, "ac-icon", "ac-icon--error", "mb-4"], [1, "isax", "isax-close-circle"], [1, "text-muted", "mb-4"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "isax", "isax-arrow-left-2", "me-2"]], template: function ActivateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275template(5, ActivateComponent_ng_container_5_Template, 7, 0, "ng-container", 5)(6, ActivateComponent_ng_container_6_Template, 13, 1, "ng-container", 5)(7, ActivateComponent_ng_container_7_Template, 10, 2, "ng-container", 5);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.state === "loading");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "success");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "error");
    }
  }, dependencies: [CommonModule, NgIf, RouterLink], styles: ["\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_progressFill {\n  from {\n    transform: scaleX(0);\n  }\n  to {\n    transform: scaleX(1);\n  }\n}\n.ac-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n}\n.ac-icon--spin[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.ac-icon--gold[_ngcontent-%COMP%] {\n  background: #FDF3CC;\n  color: #D4AF37;\n  box-shadow: 0 4px 16px rgba(212, 175, 55, 0.25);\n}\n.ac-icon--error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.ac-progress-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: #e5e7eb;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-top: 8px;\n}\n.ac-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #D4AF37,\n      #f0c94a);\n  border-radius: 4px;\n  transform-origin: left;\n  animation: _ngcontent-%COMP%_progressFill 2.5s linear forwards;\n}\n/*# sourceMappingURL=activate.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActivateComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-activate", imports: [CommonModule, RouterLink], template: `<div class="main-wrapper">
  <div class="login-content">
    <div class="row justify-content-center align-items-center" style="min-height:100vh;">
      <div class="col-md-5 col-lg-4">
        <div class="loginbox text-center p-5">

          <!-- Chargement -->
          <ng-container *ngIf="state === 'loading'">
            <div class="ac-icon ac-icon--spin mb-4">
              <i class="isax isax-refresh"></i>
            </div>
            <h5 class="fw-bold mb-2">Activation en cours\u2026</h5>
            <p class="text-muted">Nous activons votre compte, veuillez patienter.</p>
          </ng-container>

          <!-- Succ\xE8s -->
          <ng-container *ngIf="state === 'success'">
            <div class="ac-icon ac-icon--gold mb-4">
              <i class="isax isax-award"></i>
            </div>
            <h5 class="fw-bold mb-2">
              Bienvenue<ng-container *ngIf="userName"> {{ userName }}</ng-container> !
            </h5>
            <p class="text-muted mb-3">
              Votre compte est activ\xE9 avec succ\xE8s.<br>
              Vous allez \xEAtre redirig\xE9 vers votre tableau de bord\u2026
            </p>
            <div class="ac-progress-bar">
              <div class="ac-progress-fill"></div>
            </div>
          </ng-container>

          <!-- Erreur -->
          <ng-container *ngIf="state === 'error'">
            <div class="ac-icon ac-icon--error mb-4">
              <i class="isax isax-close-circle"></i>
            </div>
            <h5 class="fw-bold mb-2">Activation impossible</h5>
            <p class="text-muted mb-4">{{ errorMsg }}</p>
            <a [routerLink]="routes.login" class="btn btn-secondary">
              <i class="isax isax-arrow-left-2 me-2"></i>Retour \xE0 la connexion
            </a>
          </ng-container>

        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/auth/activate/activate.component.scss */\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes progressFill {\n  from {\n    transform: scaleX(0);\n  }\n  to {\n    transform: scaleX(1);\n  }\n}\n.ac-icon {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n}\n.ac-icon--spin {\n  background: #f3f4f6;\n  color: #6b7280;\n  animation: spin 0.8s linear infinite;\n}\n.ac-icon--gold {\n  background: #FDF3CC;\n  color: #D4AF37;\n  box-shadow: 0 4px 16px rgba(212, 175, 55, 0.25);\n}\n.ac-icon--error {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.ac-progress-bar {\n  height: 4px;\n  background: #e5e7eb;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-top: 8px;\n}\n.ac-progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #D4AF37,\n      #f0c94a);\n  border-radius: 4px;\n  transform-origin: left;\n  animation: progressFill 2.5s linear forwards;\n}\n/*# sourceMappingURL=activate.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActivateComponent, { className: "ActivateComponent", filePath: "src/app/auth/activate/activate.component.ts", lineNumber: 14 });
})();
export {
  ActivateComponent
};
//# sourceMappingURL=chunk-EHBAQGMC.js.map
