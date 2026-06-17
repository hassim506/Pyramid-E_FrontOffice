import {
  FormationService
} from "./chunk-335YI34S.js";
import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  Router,
  RouterModule
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/student/mes-competences-recommandees/mes-competences-recommandees.component.ts
function MesCompetencesRecommandeesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275element(2, "div")(3, "div")(4, "div")(5, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Chargement de vos comp\xE9tences recommand\xE9es...");
    \u0275\u0275elementEnd()();
  }
}
function MesCompetencesRecommandeesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 8);
    \u0275\u0275listener("click", function MesCompetencesRecommandeesComponent_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.load());
    });
    \u0275\u0275element(5, "i", 9);
    \u0275\u0275text(6, "R\xE9essayer ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_div_49_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r4, " ");
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_div_49_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "div", 43);
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 46);
    \u0275\u0275template(9, MesCompetencesRecommandeesComponent_ng_container_2_div_49_div_1_div_9_Template, 3, 1, "div", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const grp_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("--d-color", ctx_r1.getDomaineColor(grp_r5.domaine, i_r6))("--d-color-lt", ctx_r1.getDomaineColorLight(grp_r5.domaine, i_r6));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", ctx_r1.getDomaineIcon(grp_r5.domaine)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(grp_r5.domaine.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(grp_r5.competences.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", grp_r5.competences);
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275template(1, MesCompetencesRecommandeesComponent_ng_container_2_div_49_div_1_Template, 10, 10, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.groupesFinaux)("ngForTrackBy", ctx_r1.trackByDomaine);
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_ng_template_50_p_4_Template(rf, ctx) {
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
function MesCompetencesRecommandeesComponent_ng_container_2_ng_template_50_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Vous avez d\xE9j\xE0 acc\xE8s \xE0 toutes les formations disponibles.");
    \u0275\u0275elementEnd();
  }
}
function MesCompetencesRecommandeesComponent_ng_container_2_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275elementStart(2, "h6");
    \u0275\u0275text(3, "Aucune comp\xE9tence recommand\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MesCompetencesRecommandeesComponent_ng_container_2_ng_template_50_p_4_Template, 2, 1, "p", 3)(5, MesCompetencesRecommandeesComponent_ng_container_2_ng_template_50_p_5_Template, 2, 0, "p", 3);
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
    \u0275\u0275elementStart(1, "div", 10)(2, "div")(3, "h3", 11);
    \u0275\u0275element(4, "i", 12);
    \u0275\u0275text(5, "Comp\xE9tences recommand\xE9es ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 13);
    \u0275\u0275text(7, "Comp\xE9tences que vous pourriez acqu\xE9rir via les formations disponibles");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 14)(9, "div", 15)(10, "div", 16);
    \u0275\u0275element(11, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 18)(13, "div", 19);
    \u0275\u0275text(14, "Comp\xE9tences accessibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 20);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 21)(18, "div", 22);
    \u0275\u0275element(19, "i", 23);
    \u0275\u0275elementStart(20, "div")(21, "div", 24);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 25);
    \u0275\u0275text(24, "Formations");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 26);
    \u0275\u0275element(26, "i", 27);
    \u0275\u0275elementStart(27, "div")(28, "div", 24);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 25);
    \u0275\u0275text(31, "Comp\xE9tences");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 28);
    \u0275\u0275element(33, "i", 29);
    \u0275\u0275elementStart(34, "div")(35, "div", 24);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 25);
    \u0275\u0275text(38, "Domaines");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(39, "div", 30)(40, "div", 31);
    \u0275\u0275element(41, "i", 32);
    \u0275\u0275elementStart(42, "input", 33);
    \u0275\u0275listener("input", function MesCompetencesRecommandeesComponent_ng_container_2_Template_input_input_42_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRecherche($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 34)(44, "select", 35);
    \u0275\u0275listener("change", function MesCompetencesRecommandeesComponent_ng_container_2_Template_select_change_44_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setTri($event.target.value));
    });
    \u0275\u0275elementStart(45, "option", 36);
    \u0275\u0275text(46, "Trier : Comp\xE9tences \u2193");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option", 37);
    \u0275\u0275text(48, "Trier : Dur\xE9e \u2193");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(49, MesCompetencesRecommandeesComponent_ng_container_2_div_49_Template, 2, 2, "div", 38)(50, MesCompetencesRecommandeesComponent_ng_container_2_ng_template_50_Template, 6, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const emptyState_r7 = \u0275\u0275reference(51);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate2(" ", ctx_r1.totalCompetences, " comp\xE9tence(s) r\xE9parties sur ", ctx_r1.total, " formation(s) disponible(s) ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.total);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.totalCompetences);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.groupesFinaux.length);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.recherche);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.hasGroupes)("ngIfElse", emptyState_r7);
  }
}
var FALLBACK_COLORS = [
  "#4f46e5",
  "#059669",
  "#db2777",
  "#ea580c",
  "#0284c7",
  "#0d9488",
  "#64748b",
  "#7c3aed"
];
var MesCompetencesRecommandeesComponent = class _MesCompetencesRecommandeesComponent {
  formationsService;
  router;
  loading = true;
  error = "";
  total = 0;
  formations = [];
  recherche = "";
  tri = "competences";
  imageBase = environment.apiUrl.replace(/\/api$/, "") + "/storage/";
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
  // ── Formations filtrées + triées ──────────────────────────────────────────
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
  // ── Groupement par domaine (même logique que les acquises) ────────────────
  get groupesFinaux() {
    const map = /* @__PURE__ */ new Map();
    for (const f of this.formationsFiltrees) {
      const key = f.domaine?.id ?? "autres";
      if (!map.has(key)) {
        const domaine = f.domaine ?? {
          id: 0,
          nom: "Autres comp\xE9tences",
          slug: "autres",
          couleur: "#64748b",
          icone: "isax-category"
        };
        map.set(key, { domaine, formations: [], competences: [] });
      }
      const grp = map.get(key);
      grp.formations.push(f);
      const existing = new Set(grp.competences);
      f.competences.forEach((c) => {
        if (!existing.has(c))
          grp.competences.push(c);
      });
    }
    return Array.from(map.values()).sort((a, b) => b.competences.length - a.competences.length);
  }
  get hasGroupes() {
    return this.groupesFinaux.length > 0;
  }
  get totalCompetences() {
    const all = /* @__PURE__ */ new Set();
    this.formations.forEach((f) => f.competences.forEach((c) => all.add(c)));
    return all.size;
  }
  // ── Helpers domaine ───────────────────────────────────────────────────────
  getDomaineColor(domaine, index = 0) {
    return domaine.couleur ?? FALLBACK_COLORS[index % FALLBACK_COLORS.length];
  }
  getDomaineColorLight(domaine, index = 0) {
    return this.getDomaineColor(domaine, index) + "18";
  }
  getDomaineIcon(domaine) {
    return domaine.icone ?? "isax-category";
  }
  // ── Helpers existants (inchangés) ─────────────────────────────────────────
  allerVersFormation(id) {
    this.router.navigate(["/courses/course-details-2", id]);
  }
  getImage(image) {
    if (!image)
      return null;
    if (image.startsWith("http"))
      return image;
    return this.imageBase + image;
  }
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
  trackByDomaine(_, g) {
    return g.domaine.id;
  }
  static \u0275fac = function MesCompetencesRecommandeesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MesCompetencesRecommandeesComponent)(\u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MesCompetencesRecommandeesComponent, selectors: [["app-mes-competences-recommandees"]], decls: 3, vars: 3, consts: [["emptyState", ""], ["class", "qq-loading", 4, "ngIf"], ["class", "cp-error", 4, "ngIf"], [4, "ngIf"], [1, "qq-loading"], [1, "qq-loading__ring"], [1, "cp-error"], [1, "isax", "isax-warning-2"], [1, "cp-btn", "cp-btn--primary", 3, "click"], [1, "isax", "isax-refresh", "me-2"], [1, "cp-header", "mb-4"], [1, "cp-header__title"], [1, "isax", "isax-lamp-on", "me-2", 2, "color", "#069b8f"], [1, "cp-header__sub"], [1, "cp-stats", "mb-4"], [1, "cp-stat-main"], [1, "cp-stat-main__circle", "cp-stat-main__circle--reco"], [1, "isax", "isax-lamp-on", 2, "font-size", "2rem", "color", "#069b8f"], [1, "cp-stat-main__info"], [1, "cp-stat-main__label"], [1, "cp-stat-main__sub"], [1, "cp-stat-cards"], [1, "cp-stat-card", "cp-stat-card--teal"], [1, "isax", "isax-book-1"], [1, "cp-stat-card__value"], [1, "cp-stat-card__label"], [1, "cp-stat-card", "cp-stat-card--green"], [1, "isax", "isax-medal-star"], [1, "cp-stat-card", "cp-stat-card--indigo"], [1, "isax", "isax-category"], [1, "cp-toolbar", "mb-4"], [1, "cp-search"], [1, "isax", "isax-search-normal-1"], ["type", "text", "placeholder", "Rechercher une comp\xE9tence...", 1, "cp-search__input", 3, "input", "value"], [1, "cp-sort"], [1, "cp-sort__select", 3, "change"], ["value", "competences"], ["value", "duree"], ["class", "cp-domaine-grid", 4, "ngIf", "ngIfElse"], [1, "cp-domaine-grid"], ["class", "cp-domaine-card", 3, "--d-color", "--d-color-lt", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cp-domaine-card"], [1, "cp-domaine-card__header"], [1, "cp-domaine-card__icon"], [1, "cp-domaine-card__title"], [1, "cp-domaine-card__count"], [1, "cp-badges", "cp-badges--sm", "mt-3"], ["class", "cp-badge cp-badge--reco", 4, "ngFor", "ngForOf"], [1, "cp-badge", "cp-badge--reco"], [1, "isax", "isax-lamp-on", "me-1"], [1, "cp-empty"], [1, "isax", "isax-lamp-on", "cp-empty__icon"]], template: function MesCompetencesRecommandeesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MesCompetencesRecommandeesComponent_div_0_Template, 8, 0, "div", 1)(1, MesCompetencesRecommandeesComponent_div_1_Template, 7, 1, "div", 2)(2, MesCompetencesRecommandeesComponent_ng_container_2_Template, 52, 8, "ng-container", 3);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule], styles: ["\n\n.qq-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.qq-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes _ngcontent-%COMP%_qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cp-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 48px;\n  gap: 12px;\n  color: #ef4444;\n  text-align: center;\n}\n.cp-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.cp-header__title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.cp-header__sub[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 4px 0 0;\n}\n.cp-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.cp-stat-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 20px 24px;\n  flex: 1;\n  min-width: 260px;\n}\n.cp-stat-main__circle--reco[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  background: rgba(6, 155, 143, 0.12);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cp-stat-main__label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.cp-stat-main__sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n.cp-stat-cards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.cp-stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  min-width: 130px;\n}\n.cp-stat-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.cp-stat-card__value[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.cp-stat-card__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.cp-stat-card--teal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.cp-stat-card--teal[_ngcontent-%COMP%]   .cp-stat-card__value[_ngcontent-%COMP%] {\n  color: #069b8f;\n}\n.cp-stat-card--green[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.cp-stat-card--green[_ngcontent-%COMP%]   .cp-stat-card__value[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.cp-stat-card--indigo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.cp-stat-card--indigo[_ngcontent-%COMP%]   .cp-stat-card__value[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.cp-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.cp-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 14px;\n  flex: 1;\n  min-width: 220px;\n}\n.cp-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.cp-search__input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 0.875rem;\n  width: 100%;\n  color: #0f172a;\n}\n.cp-search__input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.cp-sort__select[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 14px;\n  font-size: 0.875rem;\n  color: #334155;\n  background: #fff;\n  outline: none;\n  cursor: pointer;\n}\n.cp-sort__select[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n}\n.cp-domaine-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n.cp-domaine-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 20px;\n  transition: all 0.2s ease;\n  border-top: 3px solid var(--d-color, #069b8f);\n}\n.cp-domaine-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.cp-domaine-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.cp-domaine-card__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 8px;\n  background: var(--d-color-lt, rgba(6, 155, 143, 0.12));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cp-domaine-card__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--d-color, #069b8f);\n}\n.cp-domaine-card__title[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.3;\n}\n.cp-domaine-card__count[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  background: var(--d-color-lt, rgba(6, 155, 143, 0.12));\n  color: var(--d-color, #069b8f);\n  white-space: nowrap;\n}\n.cp-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.cp-badges--sm[_ngcontent-%COMP%]   .cp-badge[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  padding: 3px 10px;\n}\n.cp-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 12px;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 500;\n}\n.cp-badge--reco[_ngcontent-%COMP%] {\n  background: rgba(6, 155, 143, 0.12);\n  color: #069b8f;\n}\n.cp-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #94a3b8;\n}\n.cp-empty__icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 12px;\n  display: block;\n}\n.cp-empty[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #334155;\n  margin-bottom: 6px;\n}\n.cp-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.cp-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 18px;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n}\n.cp-btn--primary[_ngcontent-%COMP%] {\n  background: #069b8f;\n  color: #fff;\n}\n.cp-btn--primary[_ngcontent-%COMP%]:hover {\n  background: #047a6f;\n}\n/*# sourceMappingURL=mes-competences-recommandees.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MesCompetencesRecommandeesComponent, [{
    type: Component,
    args: [{ selector: "app-mes-competences-recommandees", standalone: true, imports: [CommonModule, RouterModule], template: '<!-- LOADING -->\r\n<div class="qq-loading" *ngIf="loading">\r\n  <div class="qq-loading__ring">\r\n    <div></div><div></div><div></div><div></div>\r\n  </div>\r\n  <p>Chargement de vos comp\xE9tences recommand\xE9es...</p>\r\n</div>\r\n\r\n<!-- ERREUR -->\r\n<div class="cp-error" *ngIf="error && !loading">\r\n  <i class="isax isax-warning-2"></i>\r\n  <p>{{ error }}</p>\r\n  <button class="cp-btn cp-btn--primary" (click)="load()">\r\n    <i class="isax isax-refresh me-2"></i>R\xE9essayer\r\n  </button>\r\n</div>\r\n\r\n<ng-container *ngIf="!loading && !error">\r\n\r\n  <!-- \u2500\u2500 HEADER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r\n  <div class="cp-header mb-4">\r\n    <div>\r\n      <h3 class="cp-header__title">\r\n        <i class="isax isax-lamp-on me-2" style="color:#069b8f"></i>Comp\xE9tences recommand\xE9es\r\n      </h3>\r\n      <p class="cp-header__sub">Comp\xE9tences que vous pourriez acqu\xE9rir via les formations disponibles</p>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- \u2500\u2500 STATS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r\n  <div class="cp-stats mb-4">\r\n    <div class="cp-stat-main">\r\n      <div class="cp-stat-main__circle cp-stat-main__circle--reco">\r\n        <i class="isax isax-lamp-on" style="font-size:2rem; color:#069b8f"></i>\r\n      </div>\r\n      <div class="cp-stat-main__info">\r\n        <div class="cp-stat-main__label">Comp\xE9tences accessibles</div>\r\n        <div class="cp-stat-main__sub">\r\n          {{ totalCompetences }} comp\xE9tence(s) r\xE9parties sur {{ total }} formation(s) disponible(s)\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="cp-stat-cards">\r\n      <div class="cp-stat-card cp-stat-card--teal">\r\n        <i class="isax isax-book-1"></i>\r\n        <div>\r\n          <div class="cp-stat-card__value">{{ total }}</div>\r\n          <div class="cp-stat-card__label">Formations</div>\r\n        </div>\r\n      </div>\r\n      <div class="cp-stat-card cp-stat-card--green">\r\n        <i class="isax isax-medal-star"></i>\r\n        <div>\r\n          <div class="cp-stat-card__value">{{ totalCompetences }}</div>\r\n          <div class="cp-stat-card__label">Comp\xE9tences</div>\r\n        </div>\r\n      </div>\r\n      <div class="cp-stat-card cp-stat-card--indigo">\r\n        <i class="isax isax-category"></i>\r\n        <div>\r\n          <div class="cp-stat-card__value">{{ groupesFinaux.length }}</div>\r\n          <div class="cp-stat-card__label">Domaines</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- \u2500\u2500 TOOLBAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r\n  <div class="cp-toolbar mb-4">\r\n    <div class="cp-search">\r\n      <i class="isax isax-search-normal-1"></i>\r\n      <input type="text" placeholder="Rechercher une comp\xE9tence..."\r\n             [value]="recherche" (input)="onRecherche($event)" class="cp-search__input"/>\r\n    </div>\r\n    <div class="cp-sort">\r\n      <select class="cp-sort__select" (change)="setTri($any($event.target).value)">\r\n        <option value="competences">Trier : Comp\xE9tences \u2193</option>\r\n        <option value="duree">Trier : Dur\xE9e \u2193</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r\n  <!-- GRILLE PAR DOMAINE                                   -->\r\n  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r\n  <div class="cp-domaine-grid" *ngIf="hasGroupes; else emptyState">\r\n\r\n    <div class="cp-domaine-card"\r\n         *ngFor="let grp of groupesFinaux; let i = index; trackBy: trackByDomaine"\r\n         [style.--d-color]="getDomaineColor(grp.domaine, i)"\r\n         [style.--d-color-lt]="getDomaineColorLight(grp.domaine, i)">\r\n\r\n      <!-- En-t\xEAte domaine -->\r\n      <div class="cp-domaine-card__header">\r\n        <div class="cp-domaine-card__icon">\r\n          <i class="isax {{ getDomaineIcon(grp.domaine) }}"></i>\r\n        </div>\r\n        <div class="cp-domaine-card__title">{{ grp.domaine.nom }}</div>\r\n        <span class="cp-domaine-card__count">{{ grp.competences.length }}</span>\r\n      </div>\r\n\r\n      <!-- Badges comp\xE9tences uniquement -->\r\n      <div class="cp-badges cp-badges--sm mt-3">\r\n        <div class="cp-badge cp-badge--reco" *ngFor="let c of grp.competences">\r\n          <i class="isax isax-lamp-on me-1"></i>{{ c }}\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!-- \xC9tat vide -->\r\n  <ng-template #emptyState>\r\n    <div class="cp-empty">\r\n      <i class="isax isax-lamp-on cp-empty__icon"></i>\r\n      <h6>Aucune comp\xE9tence recommand\xE9e</h6>\r\n      <p *ngIf="recherche">Aucun r\xE9sultat pour "{{ recherche }}".</p>\r\n      <p *ngIf="!recherche">Vous avez d\xE9j\xE0 acc\xE8s \xE0 toutes les formations disponibles.</p>\r\n    </div>\r\n  </ng-template>\r\n\r\n</ng-container>', styles: ["/* src/app/features/student/mes-competences-recommandees/mes-competences-recommandees.component.scss */\n.qq-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 20px;\n}\n.qq-loading p {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.qq-loading__ring {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.qq-loading__ring div {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid transparent;\n  border-top-color: #069b8f;\n  border-radius: 50%;\n  animation: qq-spin 0.8s linear infinite;\n}\n.qq-loading__ring div:nth-child(2) {\n  width: 38px;\n  height: 38px;\n  top: 6px;\n  left: 6px;\n  border-top-color: #4f46e5;\n  animation-delay: -0.3s;\n}\n.qq-loading__ring div:nth-child(3) {\n  width: 26px;\n  height: 26px;\n  top: 12px;\n  left: 12px;\n  border-top-color: #f59e0b;\n  animation-delay: -0.6s;\n}\n.qq-loading__ring div:nth-child(4) {\n  width: 14px;\n  height: 14px;\n  top: 18px;\n  left: 18px;\n  border-top-color: #10b981;\n  animation-delay: -0.9s;\n}\n@keyframes qq-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cp-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 48px;\n  gap: 12px;\n  color: #ef4444;\n  text-align: center;\n}\n.cp-error i {\n  font-size: 2rem;\n}\n.cp-header__title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.cp-header__sub {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 4px 0 0;\n}\n.cp-stats {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.cp-stat-main {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 20px 24px;\n  flex: 1;\n  min-width: 260px;\n}\n.cp-stat-main__circle--reco {\n  width: 72px;\n  height: 72px;\n  background: rgba(6, 155, 143, 0.12);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cp-stat-main__label {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.cp-stat-main__sub {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n.cp-stat-cards {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.cp-stat-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  min-width: 130px;\n}\n.cp-stat-card i {\n  font-size: 1.4rem;\n}\n.cp-stat-card__value {\n  font-size: 1.4rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.cp-stat-card__label {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.cp-stat-card--teal i,\n.cp-stat-card--teal .cp-stat-card__value {\n  color: #069b8f;\n}\n.cp-stat-card--green i,\n.cp-stat-card--green .cp-stat-card__value {\n  color: #10b981;\n}\n.cp-stat-card--indigo i,\n.cp-stat-card--indigo .cp-stat-card__value {\n  color: #4f46e5;\n}\n.cp-toolbar {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.cp-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 14px;\n  flex: 1;\n  min-width: 220px;\n}\n.cp-search i {\n  color: #94a3b8;\n}\n.cp-search__input {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 0.875rem;\n  width: 100%;\n  color: #0f172a;\n}\n.cp-search__input::placeholder {\n  color: #94a3b8;\n}\n.cp-sort__select {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 8px 14px;\n  font-size: 0.875rem;\n  color: #334155;\n  background: #fff;\n  outline: none;\n  cursor: pointer;\n}\n.cp-sort__select:focus {\n  border-color: #069b8f;\n}\n.cp-domaine-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n.cp-domaine-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 20px;\n  transition: all 0.2s ease;\n  border-top: 3px solid var(--d-color, #069b8f);\n}\n.cp-domaine-card:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n.cp-domaine-card__header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.cp-domaine-card__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 8px;\n  background: var(--d-color-lt, rgba(6, 155, 143, 0.12));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cp-domaine-card__icon i {\n  font-size: 1.3rem;\n  color: var(--d-color, #069b8f);\n}\n.cp-domaine-card__title {\n  flex: 1;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.3;\n}\n.cp-domaine-card__count {\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  background: var(--d-color-lt, rgba(6, 155, 143, 0.12));\n  color: var(--d-color, #069b8f);\n  white-space: nowrap;\n}\n.cp-badges {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.cp-badges--sm .cp-badge {\n  font-size: 0.72rem;\n  padding: 3px 10px;\n}\n.cp-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 12px;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 500;\n}\n.cp-badge--reco {\n  background: rgba(6, 155, 143, 0.12);\n  color: #069b8f;\n}\n.cp-empty {\n  text-align: center;\n  padding: 60px 20px;\n  color: #94a3b8;\n}\n.cp-empty__icon {\n  font-size: 3rem;\n  margin-bottom: 12px;\n  display: block;\n}\n.cp-empty h6 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #334155;\n  margin-bottom: 6px;\n}\n.cp-empty p {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.cp-btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 18px;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n}\n.cp-btn--primary {\n  background: #069b8f;\n  color: #fff;\n}\n.cp-btn--primary:hover {\n  background: #047a6f;\n}\n/*# sourceMappingURL=mes-competences-recommandees.component.css.map */\n"] }]
  }], () => [{ type: FormationService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MesCompetencesRecommandeesComponent, { className: "MesCompetencesRecommandeesComponent", filePath: "app/features/student/mes-competences-recommandees/mes-competences-recommandees.component.ts", lineNumber: 38 });
})();
export {
  MesCompetencesRecommandeesComponent
};
//# sourceMappingURL=chunk-CLA6X3RP.js.map
