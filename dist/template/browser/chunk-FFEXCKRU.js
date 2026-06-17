import {
  SondageService
} from "./chunk-TEYNJJCR.js";
import "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-YJLHMFCU.js";
import {
  Router
} from "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-MNWNTO2T.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/student/student-mes-sondages/student-mes-sondages.component.ts
function StudentMesSondagesComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementEnd();
  }
}
function StudentMesSondagesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function StudentMesSondagesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucun sondage disponible pour le moment.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Les sondages apparaissent apr\xE8s la fin d'une formation.");
    \u0275\u0275elementEnd()();
  }
}
function StudentMesSondagesComponent_div_9_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "Obligatoire");
    \u0275\u0275elementEnd();
  }
}
function StudentMesSondagesComponent_div_9_div_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r3.description);
  }
}
function StudentMesSondagesComponent_div_9_div_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1, "Aucune description");
    \u0275\u0275elementEnd();
  }
}
function StudentMesSondagesComponent_div_9_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", s_r3.formation.titre);
  }
}
function StudentMesSondagesComponent_div_9_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ~", s_r3.duree_estimee, " min");
  }
}
function StudentMesSondagesComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("click", function StudentMesSondagesComponent_div_9_div_1_Template_div_click_0_listener() {
      const s_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openSondage(s_r3));
    });
    \u0275\u0275elementStart(1, "div", 16)(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, StudentMesSondagesComponent_div_9_div_1_span_4_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h6", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, StudentMesSondagesComponent_div_9_div_1_p_7_Template, 2, 1, "p", 20)(8, StudentMesSondagesComponent_div_9_div_1_p_8_Template, 2, 0, "p", 21);
    \u0275\u0275elementStart(9, "div", 22);
    \u0275\u0275template(10, StudentMesSondagesComponent_div_9_div_1_span_10_Template, 3, 1, "span", 23);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275element(12, "i", 12);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, StudentMesSondagesComponent_div_9_div_1_span_14_Template, 3, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 24);
    \u0275\u0275element(16, "i", 25);
    \u0275\u0275text(17, " R\xE9pondre ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getDeclenchementClass(s_r3.declenchement));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getDeclenchementLabel(s_r3.declenchement), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r3.est_obligatoire);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r3.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !s_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r3.formation);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", s_r3.nombre_questions, " question", s_r3.nombre_questions !== 1 ? "s" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r3.duree_estimee);
  }
}
function StudentMesSondagesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, StudentMesSondagesComponent_div_9_div_1_Template, 18, 11, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.sondages);
  }
}
var StudentMesSondagesComponent = class _StudentMesSondagesComponent {
  sondageService;
  router;
  routes = routes;
  sondages = [];
  loading = true;
  error = "";
  constructor(sondageService, router) {
    this.sondageService = sondageService;
    this.router = router;
  }
  ngOnInit() {
    this.sondageService.getMesSondages().subscribe({
      next: (res) => {
        this.sondages = res.sondages ?? [];
        this.loading = false;
      },
      error: () => {
        this.error = "Impossible de charger les sondages.";
        this.loading = false;
      }
    });
  }
  openSondage(s) {
    this.router.navigate(["/student/student-sondage", s.id]);
  }
  getDeclenchementLabel(d) {
    if (d === "a_chaud")
      return "\xC0 chaud";
    if (d === "a_froid")
      return "\xC0 froid";
    return "Manuel";
  }
  getDeclenchementClass(d) {
    if (d === "a_chaud")
      return "badge-chaud";
    if (d === "a_froid")
      return "badge-froid";
    return "badge-manuel";
  }
  static \u0275fac = function StudentMesSondagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentMesSondagesComponent)(\u0275\u0275directiveInject(SondageService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentMesSondagesComponent, selectors: [["app-student-mes-sondages"]], decls: 10, vars: 4, consts: [[1, "sms-wrap"], [1, "sms-header"], [1, "sms-title"], [1, "sms-sub"], ["class", "sms-loader", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "sms-empty", 4, "ngIf"], ["class", "sms-grid", 4, "ngIf"], [1, "sms-loader"], ["role", "status", 1, "spinner-border"], [1, "alert", "alert-danger"], [1, "sms-empty"], [1, "isax", "isax-note-21"], [1, "sms-grid"], ["class", "sms-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "sms-card", 3, "click"], [1, "sms-card__top"], [1, "sms-badge"], ["class", "sms-badge sms-badge--required", 4, "ngIf"], [1, "sms-card__title"], ["class", "sms-card__desc", 4, "ngIf"], ["class", "sms-card__desc sms-muted", 4, "ngIf"], [1, "sms-card__meta"], [4, "ngIf"], [1, "sms-btn"], [1, "isax", "isax-play-circle", "me-2"], [1, "sms-badge", "sms-badge--required"], [1, "sms-card__desc"], [1, "sms-card__desc", "sms-muted"], [1, "isax", "isax-book-1"], [1, "isax", "isax-clock"]], template: function StudentMesSondagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Mes Sondages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Participez aux sondages li\xE9s \xE0 vos formations");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, StudentMesSondagesComponent_div_6_Template, 2, 0, "div", 4)(7, StudentMesSondagesComponent_div_7_Template, 2, 1, "div", 5)(8, StudentMesSondagesComponent_div_8_Template, 6, 0, "div", 6)(9, StudentMesSondagesComponent_div_9_Template, 2, 1, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.sondages.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.sondages.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.sms-wrap[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1100px;\n}\n.sms-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.sms-title[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 0.25rem;\n}\n.sms-sub[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin: 0;\n}\n.sms-loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 3rem;\n}\n.sms-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #6c757d;\n}\n.sms-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  display: block;\n  margin-bottom: 1rem;\n  color: #dee2e6;\n}\n.sms-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n}\n.sms-empty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.sms-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.25rem;\n}\n.sms-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  cursor: pointer;\n  transition: box-shadow 0.2s, transform 0.2s;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.sms-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);\n  transform: translateY(-2px);\n}\n.sms-card__top[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.sms-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.2rem 0.6rem;\n  border-radius: 6px;\n}\n.sms-badge-chaud[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  color: #d97706;\n}\n.sms-badge-froid[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1D6EBF;\n}\n.sms-badge-manuel[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #059669;\n}\n.sms-badge--required[_ngcontent-%COMP%] {\n  background: #fff5f5;\n  color: #dc3545;\n}\n.sms-card__title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n  line-height: 1.4;\n}\n.sms-card__desc[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin: 0;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.sms-muted[_ngcontent-%COMP%] {\n  color: #adb5bd !important;\n  font-style: italic;\n}\n.sms-card__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.625rem;\n  font-size: 0.8125rem;\n  color: #6c757d;\n}\n.sms-card__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.sms-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  background: #1D6EBF;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 0.25rem;\n  transition: background 0.2s;\n}\n.sms-btn[_ngcontent-%COMP%]:hover {\n  background: #1558a0;\n}\n/*# sourceMappingURL=student-mes-sondages.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentMesSondagesComponent, [{
    type: Component,
    args: [{ selector: "app-student-mes-sondages", standalone: true, imports: [CommonModule], template: `<div class="sms-wrap">\r
\r
  <div class="sms-header">\r
    <h4 class="sms-title">Mes Sondages</h4>\r
    <p class="sms-sub">Participez aux sondages li\xE9s \xE0 vos formations</p>\r
  </div>\r
\r
  <!-- Loader -->\r
  <div *ngIf="loading" class="sms-loader">\r
    <div class="spinner-border" role="status"></div>\r
  </div>\r
\r
  <!-- Error -->\r
  <div *ngIf="!loading && error" class="alert alert-danger">{{ error }}</div>\r
\r
  <!-- Empty -->\r
  <div *ngIf="!loading && !error && sondages.length === 0" class="sms-empty">\r
    <i class="isax isax-note-21"></i>\r
    <p>Aucun sondage disponible pour le moment.</p>\r
    <span>Les sondages apparaissent apr\xE8s la fin d'une formation.</span>\r
  </div>\r
\r
  <!-- Grid -->\r
  <div *ngIf="!loading && sondages.length > 0" class="sms-grid">\r
    <div *ngFor="let s of sondages" class="sms-card" (click)="openSondage(s)">\r
\r
      <div class="sms-card__top">\r
        <span class="sms-badge" [class]="getDeclenchementClass(s.declenchement)">\r
          {{ getDeclenchementLabel(s.declenchement) }}\r
        </span>\r
        <span *ngIf="s.est_obligatoire" class="sms-badge sms-badge--required">Obligatoire</span>\r
      </div>\r
\r
      <h6 class="sms-card__title">{{ s.titre }}</h6>\r
      <p class="sms-card__desc" *ngIf="s.description">{{ s.description }}</p>\r
      <p class="sms-card__desc sms-muted" *ngIf="!s.description">Aucune description</p>\r
\r
      <div class="sms-card__meta">\r
        <span *ngIf="s.formation"><i class="isax isax-book-1"></i> {{ s.formation.titre }}</span>\r
        <span><i class="isax isax-note-21"></i> {{ s.nombre_questions }} question{{ s.nombre_questions !== 1 ? 's' : '' }}</span>\r
        <span *ngIf="s.duree_estimee"><i class="isax isax-clock"></i> ~{{ s.duree_estimee }} min</span>\r
      </div>\r
\r
      <button class="sms-btn">\r
        <i class="isax isax-play-circle me-2"></i> R\xE9pondre\r
      </button>\r
\r
    </div>\r
  </div>\r
\r
</div>\r
`, styles: ["/* src/app/features/student/student-mes-sondages/student-mes-sondages.component.scss */\n.sms-wrap {\n  padding: 2rem;\n  max-width: 1100px;\n}\n.sms-header {\n  margin-bottom: 2rem;\n}\n.sms-title {\n  font-size: 1.375rem;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 0.25rem;\n}\n.sms-sub {\n  color: #6c757d;\n  margin: 0;\n}\n.sms-loader {\n  display: flex;\n  justify-content: center;\n  padding: 3rem;\n}\n.sms-empty {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #6c757d;\n}\n.sms-empty i {\n  font-size: 3rem;\n  display: block;\n  margin-bottom: 1rem;\n  color: #dee2e6;\n}\n.sms-empty p {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n}\n.sms-empty span {\n  font-size: 0.875rem;\n}\n.sms-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.25rem;\n}\n.sms-card {\n  background: #fff;\n  border-radius: 14px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  cursor: pointer;\n  transition: box-shadow 0.2s, transform 0.2s;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.sms-card:hover {\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);\n  transform: translateY(-2px);\n}\n.sms-card__top {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.sms-badge {\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.2rem 0.6rem;\n  border-radius: 6px;\n}\n.sms-badge-chaud {\n  background: #fff7ed;\n  color: #d97706;\n}\n.sms-badge-froid {\n  background: #eff6ff;\n  color: #1D6EBF;\n}\n.sms-badge-manuel {\n  background: #f0fdf4;\n  color: #059669;\n}\n.sms-badge--required {\n  background: #fff5f5;\n  color: #dc3545;\n}\n.sms-card__title {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n  line-height: 1.4;\n}\n.sms-card__desc {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin: 0;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.sms-muted {\n  color: #adb5bd !important;\n  font-style: italic;\n}\n.sms-card__meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.625rem;\n  font-size: 0.8125rem;\n  color: #6c757d;\n}\n.sms-card__meta span {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.sms-btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  background: #1D6EBF;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 0.25rem;\n  transition: background 0.2s;\n}\n.sms-btn:hover {\n  background: #1558a0;\n}\n/*# sourceMappingURL=student-mes-sondages.component.css.map */\n"] }]
  }], () => [{ type: SondageService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentMesSondagesComponent, { className: "StudentMesSondagesComponent", filePath: "app/features/student/student-mes-sondages/student-mes-sondages.component.ts", lineNumber: 14 });
})();
export {
  StudentMesSondagesComponent
};
//# sourceMappingURL=chunk-FFEXCKRU.js.map
