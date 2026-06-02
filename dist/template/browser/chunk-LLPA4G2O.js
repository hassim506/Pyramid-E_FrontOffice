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
  ɵɵtextInterpolate
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/auth/magic-verify/magic-verify.component.ts
function MagicVerifyComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6);
    \u0275\u0275element(2, "i", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 8);
    \u0275\u0275text(4, "V\xE9rification en cours\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6, "Nous v\xE9rifions votre lien de connexion.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function MagicVerifyComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275element(2, "i", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 8);
    \u0275\u0275text(4, "Connexion r\xE9ussie !");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6, "Redirection vers votre tableau de bord\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function MagicVerifyComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 12);
    \u0275\u0275element(2, "i", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 8);
    \u0275\u0275text(4, "Lien invalide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 15);
    \u0275\u0275text(8, " Retour \xE0 la connexion ");
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
var MagicVerifyComponent = class _MagicVerifyComponent {
  route;
  router;
  authService;
  routes = routes;
  state = "loading";
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
      this.errorMsg = "Lien de connexion invalide.";
      return;
    }
    this.authService.verifyMagicLink(token).subscribe({
      next: (res) => {
        this.state = "success";
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
            this.router.navigate(["/index"]);
        }, 1200);
      },
      error: (err) => {
        this.state = "error";
        this.errorMsg = err?.message || "Lien invalide ou expir\xE9.";
      }
    });
  }
  static \u0275fac = function MagicVerifyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MagicVerifyComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MagicVerifyComponent, selectors: [["app-magic-verify"]], decls: 8, vars: 3, consts: [[1, "main-wrapper"], [1, "login-content"], [1, "row", "justify-content-center", "align-items-center", 2, "min-height", "100vh"], [1, "col-md-5", "col-lg-4"], [1, "loginbox", "text-center", "p-5"], [4, "ngIf"], [1, "mv-icon", "mv-icon--spin", "mb-4"], [1, "isax", "isax-refresh"], [1, "fw-bold", "mb-2"], [1, "text-muted"], [1, "mv-icon", "mv-icon--success", "mb-4"], [1, "isax", "isax-tick-circle"], [1, "mv-icon", "mv-icon--error", "mb-4"], [1, "isax", "isax-close-circle"], [1, "text-muted", "mb-4"], [1, "btn", "btn-secondary", 3, "routerLink"]], template: function MagicVerifyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275template(5, MagicVerifyComponent_ng_container_5_Template, 7, 0, "ng-container", 5)(6, MagicVerifyComponent_ng_container_6_Template, 7, 0, "ng-container", 5)(7, MagicVerifyComponent_ng_container_7_Template, 9, 2, "ng-container", 5);
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
  }, dependencies: [CommonModule, NgIf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MagicVerifyComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-magic-verify", imports: [CommonModule, RouterLink], template: `<div class="main-wrapper">
  <div class="login-content">
    <div class="row justify-content-center align-items-center" style="min-height:100vh;">
      <div class="col-md-5 col-lg-4">
        <div class="loginbox text-center p-5">

          <!-- Loading -->
          <ng-container *ngIf="state === 'loading'">
            <div class="mv-icon mv-icon--spin mb-4">
              <i class="isax isax-refresh"></i>
            </div>
            <h5 class="fw-bold mb-2">V\xE9rification en cours\u2026</h5>
            <p class="text-muted">Nous v\xE9rifions votre lien de connexion.</p>
          </ng-container>

          <!-- Success -->
          <ng-container *ngIf="state === 'success'">
            <div class="mv-icon mv-icon--success mb-4">
              <i class="isax isax-tick-circle"></i>
            </div>
            <h5 class="fw-bold mb-2">Connexion r\xE9ussie !</h5>
            <p class="text-muted">Redirection vers votre tableau de bord\u2026</p>
          </ng-container>

          <!-- Error -->
          <ng-container *ngIf="state === 'error'">
            <div class="mv-icon mv-icon--error mb-4">
              <i class="isax isax-close-circle"></i>
            </div>
            <h5 class="fw-bold mb-2">Lien invalide</h5>
            <p class="text-muted mb-4">{{ errorMsg }}</p>
            <a [routerLink]="routes.login" class="btn btn-secondary">
              Retour \xE0 la connexion
            </a>
          </ng-container>

        </div>
      </div>
    </div>
  </div>
</div>
` }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MagicVerifyComponent, { className: "MagicVerifyComponent", filePath: "src/app/auth/magic-verify/magic-verify.component.ts", lineNumber: 13 });
})();
export {
  MagicVerifyComponent
};
//# sourceMappingURL=chunk-LLPA4G2O.js.map
