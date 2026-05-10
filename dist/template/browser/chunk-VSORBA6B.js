import {
  FormationsService
} from "./chunk-BNTQZQX6.js";
import {
  Router,
  RouterModule
} from "./chunk-LFLGGSY5.js";
import "./chunk-VEAR4SGA.js";
import "./chunk-J5AS2QYG.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-GWJREDC5.js";
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
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-2JCHGHJA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/student/mes-competences-recommandees/mes-competences-recommandees.component.ts
function MesCompetencesRecommandeesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement des comp\xE9tences recommand\xE9es...");
    \u0275\u0275elementEnd()();
  }
}
function MesCompetencesRecommandeesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 7);
    \u0275\u0275listener("click", function MesCompetencesRecommandeesComponent_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.load());
    });
    \u0275\u0275element(5, "i", 8);
    \u0275\u0275text(6, "R\xE9essayer ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_div_43_div_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 54);
  }
  if (rf & 2) {
    const f_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("alt", \u0275\u0275interpolate(f_r5.formation_titre))("src", ctx_r1.getImage(f_r5.image), \u0275\u0275sanitizeUrl);
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_div_43_div_1_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 55);
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_div_43_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.formatDuree(f_r5.duree));
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_div_43_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r6, " ");
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_div_43_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "div", 42);
    \u0275\u0275template(3, MesCompetencesRecommandeesComponent_ng_container_2_div_43_div_1_img_3_Template, 1, 3, "img", 43)(4, MesCompetencesRecommandeesComponent_ng_container_2_div_43_div_1_i_4_Template, 1, 0, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 45)(6, "div", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 47);
    \u0275\u0275text(9);
    \u0275\u0275template(10, MesCompetencesRecommandeesComponent_ng_container_2_div_43_div_1_span_10_Template, 2, 1, "span", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 48);
    \u0275\u0275text(12, "Disponible");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 49);
    \u0275\u0275template(14, MesCompetencesRecommandeesComponent_ng_container_2_div_43_div_1_div_14_Template, 3, 1, "div", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 51)(16, "button", 52);
    \u0275\u0275listener("click", function MesCompetencesRecommandeesComponent_ng_container_2_div_43_div_1_Template_button_click_16_listener() {
      const f_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.allerVersFormation(f_r5.formation_id));
    });
    \u0275\u0275element(17, "i", 53);
    \u0275\u0275text(18, "Voir la formation ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.getImage(f_r5.image));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.getImage(f_r5.image));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r5.formation_titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", f_r5.nb_competences, " comp\xE9tence(s) \xE0 acqu\xE9rir ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r5.duree);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", f_r5.competences);
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, MesCompetencesRecommandeesComponent_ng_container_2_div_43_div_1_Template, 19, 6, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.formationsFiltrees);
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_div_44_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('Aucun r\xE9sultat pour "', ctx_r1.recherche, '".');
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_div_44_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Vous avez d\xE9j\xE0 acc\xE8s \xE0 toutes les formations disponibles.");
    \u0275\u0275elementEnd();
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275elementStart(2, "h6");
    \u0275\u0275text(3, "Aucune comp\xE9tence recommand\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MesCompetencesRecommandeesComponent_ng_container_2_div_44_p_4_Template, 2, 1, "p", 2)(5, MesCompetencesRecommandeesComponent_ng_container_2_div_44_p_5_Template, 2, 0, "p", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.recherche);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.recherche);
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9)(2, "div")(3, "h3", 10);
    \u0275\u0275element(4, "i", 11);
    \u0275\u0275text(5, "Comp\xE9tences recommand\xE9es ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 12);
    \u0275\u0275text(7, "Comp\xE9tences que vous pourriez acqu\xE9rir via les formations disponibles");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 13)(9, "div", 14)(10, "div", 15);
    \u0275\u0275element(11, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 17)(13, "div", 18);
    \u0275\u0275text(14, "Comp\xE9tences accessibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 19);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 20)(18, "div", 21);
    \u0275\u0275element(19, "i", 22);
    \u0275\u0275elementStart(20, "div")(21, "div", 23);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 24);
    \u0275\u0275text(24, "Formations");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 25);
    \u0275\u0275element(26, "i", 26);
    \u0275\u0275elementStart(27, "div")(28, "div", 23);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 24);
    \u0275\u0275text(31, "Comp\xE9tences");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(32, "div", 27)(33, "div", 28);
    \u0275\u0275element(34, "i", 29);
    \u0275\u0275elementStart(35, "input", 30);
    \u0275\u0275listener("input", function MesCompetencesRecommandeesComponent_ng_container_2_Template_input_input_35_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRecherche($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 31)(37, "select", 32);
    \u0275\u0275listener("change", function MesCompetencesRecommandeesComponent_ng_container_2_Template_select_change_37_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTri($event.target.value));
    });
    \u0275\u0275elementStart(38, "option", 33);
    \u0275\u0275text(39, "Trier : Comp\xE9tences \u2193");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 34);
    \u0275\u0275text(41, "Trier : Dur\xE9e \u2193");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 35);
    \u0275\u0275template(43, MesCompetencesRecommandeesComponent_ng_container_2_div_43_Template, 2, 1, "div", 36)(44, MesCompetencesRecommandeesComponent_ng_container_2_div_44_Template, 6, 2, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate2(" ", ctx_r1.totalCompetences, " comp\xE9tence(s) r\xE9parties sur ", ctx_r1.total, " formation(s) disponible(s) ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.total);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.totalCompetences);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.recherche);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.formationsFiltrees.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.formationsFiltrees.length === 0);
  }
}
var MesCompetencesRecommandeesComponent = class _MesCompetencesRecommandeesComponent {
  formationsService;
  router;
  loading = true;
  error = "";
  total = 0;
  formations = [];
  recherche = "";
  tri = "competences";
  imageBase = "http://localhost:8000/storage/";
  constructor(formationsService, router) {
    this.formationsService = formationsService;
    this.router = router;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.error = "";
    this.formationsService.getCompetencesRecommandees().subscribe({
      next: (res) => {
        this.formations = res.formations ?? [];
        this.total = res.total ?? 0;
        this.loading = false;
      },
      error: () => {
        this.error = "Impossible de charger les comp\xE9tences recommand\xE9es.";
        this.loading = false;
      }
    });
  }
  get formationsFiltrees() {
    let list = [...this.formations];
    if (this.recherche.trim()) {
      const q = this.recherche.toLowerCase();
      list = list.filter((f) => f.formation_titre.toLowerCase().includes(q) || f.competences.some((c) => c.toLowerCase().includes(q)));
    }
    if (this.tri === "competences") {
      list.sort((a, b) => b.nb_competences - a.nb_competences);
    } else if (this.tri === "duree") {
      list.sort((a, b) => {
        const da = parseFloat(a.duree ?? "0") || 0;
        const db = parseFloat(b.duree ?? "0") || 0;
        return db - da;
      });
    }
    return list;
  }
  get totalCompetences() {
    return this.formations.reduce((acc, f) => acc + f.nb_competences, 0);
  }
  // ✅ Fiche détail formation
  allerVersFormation(id) {
    this.router.navigate(["/courses/course-details-2", id]);
  }
  // ✅ Image avec fallback
  getImage(image) {
    if (!image)
      return null;
    if (image.startsWith("http"))
      return image;
    return this.imageBase + image;
  }
  // ✅ Durée avec unité
  formatDuree(duree) {
    if (!duree)
      return "";
    const n = parseFloat(duree);
    if (isNaN(n))
      return duree;
    return n < 1 ? `${Math.round(n * 60)} min` : `${n}h`;
  }
  setTri(t) {
    this.tri = t;
  }
  onRecherche(event) {
    this.recherche = event.target.value;
  }
  static \u0275fac = function MesCompetencesRecommandeesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MesCompetencesRecommandeesComponent)(\u0275\u0275directiveInject(FormationsService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MesCompetencesRecommandeesComponent, selectors: [["app-mes-competences-recommandees"]], decls: 3, vars: 3, consts: [["class", "cp-loading", 4, "ngIf"], ["class", "cp-error", 4, "ngIf"], [4, "ngIf"], [1, "cp-loading"], [1, "cp-loading__ring"], [1, "cp-error"], [1, "isax", "isax-warning-2"], [1, "cp-btn", "cp-btn--primary", 3, "click"], [1, "isax", "isax-refresh", "me-2"], [1, "cp-header", "mb-4"], [1, "cp-header__title"], [1, "isax", "isax-lamp-on", "me-2", 2, "color", "#069b8f"], [1, "cp-header__sub"], [1, "cp-stats", "mb-4"], [1, "cp-stat-main"], [1, "cp-stat-main__circle", "cp-stat-main__circle--reco"], [1, "isax", "isax-lamp-on", 2, "font-size", "2rem", "color", "#069b8f"], [1, "cp-stat-main__info"], [1, "cp-stat-main__label"], [1, "cp-stat-main__sub"], [1, "cp-stat-cards"], [1, "cp-stat-card", "cp-stat-card--teal"], [1, "isax", "isax-book-1"], [1, "cp-stat-card__value"], [1, "cp-stat-card__label"], [1, "cp-stat-card", "cp-stat-card--green"], [1, "isax", "isax-medal-star"], [1, "cp-toolbar", "mb-4"], [1, "cp-search"], [1, "isax", "isax-search-normal-1"], ["type", "text", "placeholder", "Rechercher une comp\xE9tence ou une formation...", 1, "cp-search__input", 3, "input", "value"], [1, "cp-sort"], [1, "cp-sort__select", 3, "change"], ["value", "competences"], ["value", "duree"], [1, "cp-section"], ["class", "cp-formation-grid", 4, "ngIf"], ["class", "cp-empty", 4, "ngIf"], [1, "cp-formation-grid"], ["class", "cp-formation-card", 4, "ngFor", "ngForOf"], [1, "cp-formation-card"], [1, "cp-formation-card__header"], [1, "cp-formation-card__icon", "cp-formation-card__icon--teal"], ["class", "cp-formation-card__img", 3, "src", "alt", 4, "ngIf"], ["class", "isax isax-lamp-on", 4, "ngIf"], [1, "cp-formation-card__info"], [1, "cp-formation-card__titre"], [1, "cp-formation-card__meta"], [1, "cp-formation-card__badge", "cp-formation-card__badge--teal"], [1, "cp-badges", "cp-badges--sm", "mt-3"], ["class", "cp-badge cp-badge--reco", 4, "ngFor", "ngForOf"], [1, "cp-formation-card__footer"], [1, "cp-btn-link", "cp-btn-link--teal", 3, "click"], [1, "isax", "isax-play-circle", "me-1"], [1, "cp-formation-card__img", 3, "src", "alt"], [1, "isax", "isax-lamp-on"], [1, "cp-badge", "cp-badge--reco"], [1, "isax", "isax-lamp-on", "me-1"], [1, "cp-empty"], [1, "isax", "isax-lamp-on", "cp-empty__icon"]], template: function MesCompetencesRecommandeesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MesCompetencesRecommandeesComponent_div_0_Template, 4, 0, "div", 0)(1, MesCompetencesRecommandeesComponent_div_1_Template, 7, 1, "div", 1)(2, MesCompetencesRecommandeesComponent_ng_container_2_Template, 45, 7, "ng-container", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule], styles: ["\n\n.cp-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  gap: 16px;\n  color: #6b7280;\n}\n.cp-loading__ring[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cp-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 48px;\n  gap: 12px;\n  color: #ef4444;\n  text-align: center;\n}\n.cp-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.cp-header__title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n}\n.cp-header__sub[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 4px 0 0;\n}\n.cp-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.cp-stat-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 20px 24px;\n  flex: 1;\n  min-width: 260px;\n}\n.cp-stat-main__circle--reco[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  background: rgba(6, 155, 143, 0.12);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cp-stat-main__label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.cp-stat-main__sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #9ca3af;\n  margin-top: 4px;\n}\n.cp-stat-cards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.cp-stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  min-width: 130px;\n}\n.cp-stat-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.cp-stat-card__value[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.cp-stat-card__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.cp-stat-card--teal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.cp-stat-card--teal[_ngcontent-%COMP%]   .cp-stat-card__value[_ngcontent-%COMP%] {\n  color: #069b8f;\n}\n.cp-stat-card--green[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.cp-stat-card--green[_ngcontent-%COMP%]   .cp-stat-card__value[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.cp-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.cp-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 8px 14px;\n  flex: 1;\n  min-width: 220px;\n}\n.cp-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.cp-search__input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 0.875rem;\n  width: 100%;\n  color: #111827;\n}\n.cp-search__input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.cp-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.cp-formation-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 16px;\n}\n.cp-formation-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 20px;\n  transition: box-shadow 0.2s;\n}\n.cp-formation-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.cp-formation-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.cp-formation-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cp-formation-card__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.cp-formation-card__icon--teal[_ngcontent-%COMP%] {\n  background: rgba(6, 155, 143, 0.12);\n}\n.cp-formation-card__icon--teal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #069b8f;\n}\n.cp-formation-card__info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.cp-formation-card__titre[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: #111827;\n  line-height: 1.3;\n}\n.cp-formation-card__meta[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #6b7280;\n  margin-top: 3px;\n}\n.cp-formation-card__badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  white-space: nowrap;\n  align-self: flex-start;\n}\n.cp-formation-card__badge--teal[_ngcontent-%COMP%] {\n  background: rgba(6, 155, 143, 0.12);\n  color: #069b8f;\n}\n.cp-formation-card__footer[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  padding-top: 12px;\n  border-top: 1px solid #f3f4f6;\n}\n.cp-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.cp-badges--sm[_ngcontent-%COMP%]   .cp-badge[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  padding: 3px 10px;\n}\n.cp-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 12px;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 500;\n}\n.cp-badge--reco[_ngcontent-%COMP%] {\n  background: rgba(6, 155, 143, 0.12);\n  color: #069b8f;\n}\n.cp-btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 0.8rem;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 0;\n}\n.cp-btn-link--teal[_ngcontent-%COMP%] {\n  color: #069b8f;\n}\n.cp-btn-link--teal[_ngcontent-%COMP%]:hover {\n  color: rgb(4.099378882, 105.900621118, 97.701863354);\n}\n.cp-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #9ca3af;\n}\n.cp-empty__icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 12px;\n  display: block;\n}\n.cp-empty[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.cp-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.cp-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 18px;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n}\n.cp-btn--primary[_ngcontent-%COMP%] {\n  background: #069b8f;\n  color: #fff;\n}\n.cp-btn--primary[_ngcontent-%COMP%]:hover {\n  background: rgb(4.4795031056, 115.7204968944, 106.7614906832);\n}\n.cp-sort__select[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 8px 14px;\n  font-size: 0.875rem;\n  color: #374151;\n  background: #fff;\n  outline: none;\n  cursor: pointer;\n}\n.cp-sort__select[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n}\n.cp-formation-card__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=mes-competences-recommandees.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MesCompetencesRecommandeesComponent, [{
    type: Component,
    args: [{ selector: "app-mes-competences-recommandees", standalone: true, imports: [CommonModule, RouterModule], template: '<!-- LOADING -->\r\n<div class="cp-loading" *ngIf="loading">\r\n  <div class="cp-loading__ring"></div>\r\n  <p>Chargement des comp\xE9tences recommand\xE9es...</p>\r\n</div>\r\n\r\n<!-- ERREUR -->\r\n<div class="cp-error" *ngIf="error && !loading">\r\n  <i class="isax isax-warning-2"></i>\r\n  <p>{{ error }}</p>\r\n  <button class="cp-btn cp-btn--primary" (click)="load()">\r\n    <i class="isax isax-refresh me-2"></i>R\xE9essayer\r\n  </button>\r\n</div>\r\n\r\n<ng-container *ngIf="!loading && !error">\r\n\r\n  <!-- \u2500\u2500 HEADER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r\n  <div class="cp-header mb-4">\r\n    <div>\r\n      <h3 class="cp-header__title">\r\n        <i class="isax isax-lamp-on me-2" style="color:#069b8f"></i>Comp\xE9tences recommand\xE9es\r\n      </h3>\r\n      <p class="cp-header__sub">Comp\xE9tences que vous pourriez acqu\xE9rir via les formations disponibles</p>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- \u2500\u2500 STATS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r\n  <div class="cp-stats mb-4">\r\n    <div class="cp-stat-main">\r\n      <div class="cp-stat-main__circle cp-stat-main__circle--reco">\r\n        <i class="isax isax-lamp-on" style="font-size:2rem; color:#069b8f"></i>\r\n      </div>\r\n      <div class="cp-stat-main__info">\r\n        <div class="cp-stat-main__label">Comp\xE9tences accessibles</div>\r\n        <div class="cp-stat-main__sub">\r\n          {{ totalCompetences }} comp\xE9tence(s) r\xE9parties sur {{ total }} formation(s) disponible(s)\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="cp-stat-cards">\r\n      <div class="cp-stat-card cp-stat-card--teal">\r\n        <i class="isax isax-book-1"></i>\r\n        <div>\r\n          <div class="cp-stat-card__value">{{ total }}</div>\r\n          <div class="cp-stat-card__label">Formations</div>\r\n        </div>\r\n      </div>\r\n      <div class="cp-stat-card cp-stat-card--green">\r\n        <i class="isax isax-medal-star"></i>\r\n        <div>\r\n          <div class="cp-stat-card__value">{{ totalCompetences }}</div>\r\n          <div class="cp-stat-card__label">Comp\xE9tences</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- \u2500\u2500 TOOLBAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r\n  <div class="cp-toolbar mb-4">\r\n    <div class="cp-search">\r\n      <i class="isax isax-search-normal-1"></i>\r\n      <input type="text" placeholder="Rechercher une comp\xE9tence ou une formation..."\r\n             [value]="recherche" (input)="onRecherche($event)" class="cp-search__input"/>\r\n    </div>\r\n    <!-- \u2705 Tri -->\r\n    <div class="cp-sort">\r\n      <select class="cp-sort__select" (change)="setTri($any($event.target).value)">\r\n        <option value="competences">Trier : Comp\xE9tences \u2193</option>\r\n        <option value="duree">Trier : Dur\xE9e \u2193</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- \u2500\u2500 LISTE FORMATIONS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r\n  <div class="cp-section">\r\n    <div class="cp-formation-grid" *ngIf="formationsFiltrees.length > 0">\r\n      <div class="cp-formation-card" *ngFor="let f of formationsFiltrees">\r\n\r\n        <div class="cp-formation-card__header">\r\n\r\n          <!-- \u2705 Image de couverture ou ic\xF4ne fallback -->\r\n          <div class="cp-formation-card__icon cp-formation-card__icon--teal">\r\n            <img *ngIf="getImage(f.image)" [src]="getImage(f.image)"\r\n                 class="cp-formation-card__img" alt="{{ f.formation_titre }}"/>\r\n            <i *ngIf="!getImage(f.image)" class="isax isax-lamp-on"></i>\r\n          </div>\r\n\r\n          <div class="cp-formation-card__info">\r\n            <div class="cp-formation-card__titre">{{ f.formation_titre }}</div>\r\n            <div class="cp-formation-card__meta">\r\n              {{ f.nb_competences }} comp\xE9tence(s) \xE0 acqu\xE9rir\r\n              <!-- \u2705 Dur\xE9e avec unit\xE9 -->\r\n              <span *ngIf="f.duree"> \xB7 {{ formatDuree(f.duree) }}</span>\r\n            </div>\r\n          </div>\r\n          <span class="cp-formation-card__badge cp-formation-card__badge--teal">Disponible</span>\r\n        </div>\r\n\r\n        <div class="cp-badges cp-badges--sm mt-3">\r\n          <div class="cp-badge cp-badge--reco" *ngFor="let c of f.competences">\r\n            <i class="isax isax-lamp-on me-1"></i>{{ c }}\r\n          </div>\r\n        </div>\r\n\r\n        <div class="cp-formation-card__footer">\r\n          <!-- \u2705 Redirige vers le d\xE9tail de la formation -->\r\n          <button class="cp-btn-link cp-btn-link--teal"\r\n                  (click)="allerVersFormation(f.formation_id)">\r\n            <i class="isax isax-play-circle me-1"></i>Voir la formation\r\n          </button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class="cp-empty" *ngIf="formationsFiltrees.length === 0">\r\n      <i class="isax isax-lamp-on cp-empty__icon"></i>\r\n      <h6>Aucune comp\xE9tence recommand\xE9e</h6>\r\n      <p *ngIf="recherche">Aucun r\xE9sultat pour "{{ recherche }}".</p>\r\n      <p *ngIf="!recherche">Vous avez d\xE9j\xE0 acc\xE8s \xE0 toutes les formations disponibles.</p>\r\n    </div>\r\n  </div>\r\n\r\n</ng-container>', styles: ["/* src/app/features/student/mes-competences-recommandees/mes-competences-recommandees.component.scss */\n.cp-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  gap: 16px;\n  color: #6b7280;\n}\n.cp-loading__ring {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cp-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 48px;\n  gap: 12px;\n  color: #ef4444;\n  text-align: center;\n}\n.cp-error i {\n  font-size: 2rem;\n}\n.cp-header__title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n}\n.cp-header__sub {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 4px 0 0;\n}\n.cp-stats {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.cp-stat-main {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 20px 24px;\n  flex: 1;\n  min-width: 260px;\n}\n.cp-stat-main__circle--reco {\n  width: 72px;\n  height: 72px;\n  background: rgba(6, 155, 143, 0.12);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cp-stat-main__label {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.cp-stat-main__sub {\n  font-size: 0.8rem;\n  color: #9ca3af;\n  margin-top: 4px;\n}\n.cp-stat-cards {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.cp-stat-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  min-width: 130px;\n}\n.cp-stat-card i {\n  font-size: 1.4rem;\n}\n.cp-stat-card__value {\n  font-size: 1.4rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.cp-stat-card__label {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.cp-stat-card--teal i,\n.cp-stat-card--teal .cp-stat-card__value {\n  color: #069b8f;\n}\n.cp-stat-card--green i,\n.cp-stat-card--green .cp-stat-card__value {\n  color: #10b981;\n}\n.cp-toolbar {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.cp-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 8px 14px;\n  flex: 1;\n  min-width: 220px;\n}\n.cp-search i {\n  color: #9ca3af;\n}\n.cp-search__input {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 0.875rem;\n  width: 100%;\n  color: #111827;\n}\n.cp-search__input::placeholder {\n  color: #9ca3af;\n}\n.cp-section {\n  margin-bottom: 24px;\n}\n.cp-formation-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 16px;\n}\n.cp-formation-card {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 20px;\n  transition: box-shadow 0.2s;\n}\n.cp-formation-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.cp-formation-card__header {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.cp-formation-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cp-formation-card__icon i {\n  font-size: 1.2rem;\n}\n.cp-formation-card__icon--teal {\n  background: rgba(6, 155, 143, 0.12);\n}\n.cp-formation-card__icon--teal i {\n  color: #069b8f;\n}\n.cp-formation-card__info {\n  flex: 1;\n}\n.cp-formation-card__titre {\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: #111827;\n  line-height: 1.3;\n}\n.cp-formation-card__meta {\n  font-size: 0.78rem;\n  color: #6b7280;\n  margin-top: 3px;\n}\n.cp-formation-card__badge {\n  font-size: 0.7rem;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  white-space: nowrap;\n  align-self: flex-start;\n}\n.cp-formation-card__badge--teal {\n  background: rgba(6, 155, 143, 0.12);\n  color: #069b8f;\n}\n.cp-formation-card__footer {\n  margin-top: 14px;\n  padding-top: 12px;\n  border-top: 1px solid #f3f4f6;\n}\n.cp-badges {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.cp-badges--sm .cp-badge {\n  font-size: 0.72rem;\n  padding: 3px 10px;\n}\n.cp-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 12px;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 500;\n}\n.cp-badge--reco {\n  background: rgba(6, 155, 143, 0.12);\n  color: #069b8f;\n}\n.cp-btn-link {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 0.8rem;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 0;\n}\n.cp-btn-link--teal {\n  color: #069b8f;\n}\n.cp-btn-link--teal:hover {\n  color: rgb(4.099378882, 105.900621118, 97.701863354);\n}\n.cp-empty {\n  text-align: center;\n  padding: 60px 20px;\n  color: #9ca3af;\n}\n.cp-empty__icon {\n  font-size: 3rem;\n  margin-bottom: 12px;\n  display: block;\n}\n.cp-empty h6 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.cp-empty p {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.cp-btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 18px;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n}\n.cp-btn--primary {\n  background: #069b8f;\n  color: #fff;\n}\n.cp-btn--primary:hover {\n  background: rgb(4.4795031056, 115.7204968944, 106.7614906832);\n}\n.cp-sort__select {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 8px 14px;\n  font-size: 0.875rem;\n  color: #374151;\n  background: #fff;\n  outline: none;\n  cursor: pointer;\n}\n.cp-sort__select:focus {\n  border-color: #069b8f;\n}\n.cp-formation-card__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=mes-competences-recommandees.component.css.map */\n"] }]
  }], () => [{ type: FormationsService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MesCompetencesRecommandeesComponent, { className: "MesCompetencesRecommandeesComponent", filePath: "src/app/features/student/mes-competences-recommandees/mes-competences-recommandees.component.ts", lineNumber: 24 });
})();
export {
  MesCompetencesRecommandeesComponent
};
//# sourceMappingURL=chunk-VSORBA6B.js.map
