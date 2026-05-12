import {
  FormationService
} from "./chunk-SRQJ2PQ4.js";
import {
  LightgalleryModule
} from "./chunk-5GXEJMVC.js";
import {
  require_aos
} from "./chunk-EOCJYYK5.js";
import {
  AuthService
} from "./chunk-REZZRIDN.js";
import "./chunk-FKX6UC3I.js";
import {
  routes
} from "./chunk-W6FAPSPW.js";
import {
  FormsModule
} from "./chunk-AK2M3J6O.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-AJNKO2CX.js";
import {
  DomSanitizer
} from "./chunk-FZP3BRBS.js";
import "./chunk-GSAJL664.js";
import {
  CommonModule,
  Location,
  NgForOf,
  NgIf
} from "./chunk-3IMMP55I.js";
import {
  Component,
  Subject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-UPBSS6WA.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-4MWRP73S.js";

// src/app/features/courses/course-details/course-details.component.ts
var import_aos = __toESM(require_aos());
function CourseDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "span", 7);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function CourseDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, "\n");
  }
}
function CourseDetailsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.success, "\n");
  }
}
function CourseDetailsComponent_div_3_h6_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 99);
    \u0275\u0275text(1, " Comp\xE9tences acquises ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailsComponent_div_3_ul_55_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const competence_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", competence_r3, " ");
  }
}
function CourseDetailsComponent_div_3_ul_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 100);
    \u0275\u0275template(1, CourseDetailsComponent_div_3_ul_55_li_1_Template, 2, 1, "li", 101);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.getCompetencesList(ctx_r0.formation.competences_acquises));
  }
}
function CourseDetailsComponent_div_3_h6_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 99);
    \u0275\u0275text(1, "Pr\xE9requis");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailsComponent_div_3_p_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formation.prerequis);
  }
}
function CourseDetailsComponent_div_3_h6_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 99);
    \u0275\u0275text(1, " Outils requis ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailsComponent_div_3_ul_59_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const outil_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", outil_r4, " ");
  }
}
function CourseDetailsComponent_div_3_ul_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 103);
    \u0275\u0275template(1, CourseDetailsComponent_div_3_ul_59_li_1_Template, 2, 1, "li", 101);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.getOutilsList(ctx_r0.formation.outils_requis));
  }
}
function CourseDetailsComponent_div_3_div_70_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 112)(1, "p", 58);
    \u0275\u0275element(2, "img", 113);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 114)(5, "a", 115);
    \u0275\u0275listener("click", function CourseDetailsComponent_div_3_div_70_ul_7_li_1_Template_a_click_5_listener() {
      const section_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.previewSection(section_r6));
    });
    \u0275\u0275text(6, " Aper\xE7u ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 58);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r6 = ctx.$implicit;
    const j_r7 = ctx.index;
    const i_r8 = \u0275\u0275nextContext(2).index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" Le\xE7on ", i_r8 + 1, ".", j_r7 + 1, " ", section_r6.titre, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", section_r6.duree_estimee || "5", "min");
  }
}
function CourseDetailsComponent_div_3_div_70_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275template(1, CourseDetailsComponent_div_3_div_70_ul_7_li_1_Template, 9, 4, "li", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", module_r9.sections);
  }
}
function CourseDetailsComponent_div_3_div_70_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116)(1, "p", 117);
    \u0275\u0275text(2, "Contenu en cours de pr\xE9paration...");
    \u0275\u0275elementEnd()();
  }
}
function CourseDetailsComponent_div_3_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "h2", 105)(2, "button", 106);
    \u0275\u0275text(3);
    \u0275\u0275element(4, "i", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 108)(6, "div", 109);
    \u0275\u0275template(7, CourseDetailsComponent_div_3_div_70_ul_7_Template, 2, 1, "ul", 3)(8, CourseDetailsComponent_div_3_div_70_div_8_Template, 3, 0, "div", 110);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const module_r9 = ctx.$implicit;
    const i_r8 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275property("id", "headingcustomicon1" + i_r8);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-bs-target", "#collapsecustomicon1" + i_r8)("aria-controls", "collapsecustomicon1" + i_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Module ", i_r8 + 1, ": ", module_r9.titre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "collapsecustomicon1" + i_r8);
    \u0275\u0275attribute("aria-labelledby", "headingcustomicon1" + i_r8);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (module_r9.sections == null ? null : module_r9.sections.length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(module_r9.sections == null ? null : module_r9.sections.length));
  }
}
function CourseDetailsComponent_div_3_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "h2", 118)(2, "button", 119);
    \u0275\u0275text(3, " Introduction au cours ");
    \u0275\u0275element(4, "i", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 120)(6, "div", 109)(7, "ul")(8, "li", 112)(9, "p", 58);
    \u0275\u0275element(10, "img", 113);
    \u0275\u0275text(11, " Le\xE7on 1.1 Pr\xE9sentation du cours ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 114)(13, "a", 121);
    \u0275\u0275text(14, "Aper\xE7u");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 58);
    \u0275\u0275text(16, "5min");
    \u0275\u0275elementEnd()()()()()()();
  }
}
function CourseDetailsComponent_div_3_div_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "div", 123);
    \u0275\u0275element(2, "iframe", 124);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.getYouTubeEmbedUrl(ctx_r0.formation.media_url), \u0275\u0275sanitizeResourceUrl);
  }
}
function CourseDetailsComponent_div_3_div_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "video", 125);
    \u0275\u0275element(2, "source", 126);
    \u0275\u0275text(3, " Votre navigateur ne supporte pas la vid\xE9o. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("poster", ctx_r0.getImageUrl(ctx_r0.formation.image_couverture), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.getMediaUrl(ctx_r0.formation.media_url), \u0275\u0275sanitizeUrl);
  }
}
function CourseDetailsComponent_div_3_div_115_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275listener("click", function CourseDetailsComponent_div_3_div_115_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openYouTubeVideo(ctx_r0.formation.media_url));
    });
    \u0275\u0275element(1, "i", 130);
    \u0275\u0275elementEnd();
  }
}
function CourseDetailsComponent_div_3_div_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275element(1, "img", 127);
    \u0275\u0275template(2, CourseDetailsComponent_div_3_div_115_div_2_Template, 2, 0, "div", 128);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", 200, "px");
    \u0275\u0275property("src", ctx_r0.getImageUrl(ctx_r0.formation.image_couverture), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.media_url && ctx_r0.isYouTubeUrl(ctx_r0.formation.media_url));
  }
}
function CourseDetailsComponent_div_3_h2_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 131);
    \u0275\u0275text(1, " GRATUIT ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailsComponent_div_3_h2_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 132);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formation.prix, "FCFA ");
  }
}
function CourseDetailsComponent_div_3_p_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 117)(1, "span", 133);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 134);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.formation.prix_original, "FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" -", ctx_r0.calculateDiscount(ctx_r0.formation.prix, ctx_r0.formation.prix_original), "% ");
  }
}
function CourseDetailsComponent_div_3_button_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 135);
    \u0275\u0275element(1, "i", 136);
    \u0275\u0275text(2, " Commencer gratuitement ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailsComponent_div_3_button_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 135);
    \u0275\u0275element(1, "i", 137);
    \u0275\u0275text(2, " Demander la formation ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailsComponent_div_3_li_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 82);
    \u0275\u0275element(1, "i", 138);
    \u0275\u0275text(2, " Certificat d'ach\xE8vement ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailsComponent_div_3_div_196_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 141);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r11, " ");
  }
}
function CourseDetailsComponent_div_3_div_196_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "h5", 42);
    \u0275\u0275text(3, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 139);
    \u0275\u0275template(5, CourseDetailsComponent_div_3_div_196_span_5_Template, 2, 1, "span", 140);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.getTagsList(ctx_r0.formation.tags));
  }
}
function CourseDetailsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "section", 12);
    \u0275\u0275element(2, "div", 13);
    \u0275\u0275elementStart(3, "div", 14)(4, "div", 15)(5, "div", 16)(6, "h1", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 19)(11, "p", 20);
    \u0275\u0275element(12, "img", 21);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 20);
    \u0275\u0275element(15, "img", 22);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 20);
    \u0275\u0275element(18, "img", 23);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 24);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 25)(23, "div", 26)(24, "div", 27);
    \u0275\u0275element(25, "img", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 29)(27, "h6", 30)(28, "a", 31);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "p", 32);
    \u0275\u0275text(31, "Instructeur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 33);
    \u0275\u0275element(33, "i", 34)(34, "i", 34)(35, "i", 34)(36, "i", 34)(37, "i", 35);
    \u0275\u0275elementStart(38, "p", 32)(39, "span", 36);
    \u0275\u0275text(40, "4.0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(42, "section", 37)(43, "div", 38)(44, "div", 15)(45, "div", 16)(46, "div", 39)(47, "div", 40)(48, "div", 41)(49, "h5", 42);
    \u0275\u0275text(50, "Aper\xE7u");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "h6", 43);
    \u0275\u0275text(52, "Description du cours");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "div", 44);
    \u0275\u0275template(54, CourseDetailsComponent_div_3_h6_54_Template, 2, 0, "h6", 45)(55, CourseDetailsComponent_div_3_ul_55_Template, 2, 1, "ul", 46)(56, CourseDetailsComponent_div_3_h6_56_Template, 2, 0, "h6", 45)(57, CourseDetailsComponent_div_3_p_57_Template, 2, 1, "p", 3)(58, CourseDetailsComponent_div_3_h6_58_Template, 2, 0, "h6", 45)(59, CourseDetailsComponent_div_3_ul_59_Template, 2, 1, "ul", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 40)(61, "div", 41)(62, "div", 48)(63, "h5", 49);
    \u0275\u0275text(64, "Contenu du cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "h6", 50);
    \u0275\u0275text(66);
    \u0275\u0275elementStart(67, "span", 51);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 52);
    \u0275\u0275template(70, CourseDetailsComponent_div_3_div_70_Template, 9, 9, "div", 53)(71, CourseDetailsComponent_div_3_div_71_Template, 17, 0, "div", 54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "div", 40)(73, "div", 41)(74, "h5", 42);
    \u0275\u0275text(75, "\xC0 propos de l'instructeur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 55)(77, "div", 56)(78, "div", 27);
    \u0275\u0275element(79, "img", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 29)(81, "h5", 57)(82, "a", 31);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "p", 58);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "div", 56);
    \u0275\u0275element(87, "i", 34)(88, "i", 34)(89, "i", 34)(90, "i", 34)(91, "i", 34);
    \u0275\u0275elementStart(92, "p", 58);
    \u0275\u0275text(93, "4.5");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(94, "div", 59)(95, "p", 60);
    \u0275\u0275element(96, "img", 61);
    \u0275\u0275text(97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "p", 60);
    \u0275\u0275element(99, "img", 62);
    \u0275\u0275text(100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "p", 60);
    \u0275\u0275element(102, "img", 63);
    \u0275\u0275text(103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "p", 60);
    \u0275\u0275element(105, "img", 23);
    \u0275\u0275text(106);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "p");
    \u0275\u0275text(108);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(109, "div", 64)(110, "div", 65)(111, "div", 40)(112, "div", 41);
    \u0275\u0275template(113, CourseDetailsComponent_div_3_div_113_Template, 3, 1, "div", 66)(114, CourseDetailsComponent_div_3_div_114_Template, 4, 2, "div", 66)(115, CourseDetailsComponent_div_3_div_115_Template, 3, 4, "div", 66);
    \u0275\u0275elementStart(116, "div", 67);
    \u0275\u0275template(117, CourseDetailsComponent_div_3_h2_117_Template, 2, 0, "h2", 68)(118, CourseDetailsComponent_div_3_h2_118_Template, 2, 1, "h2", 69)(119, CourseDetailsComponent_div_3_p_119_Template, 5, 2, "p", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "div", 71);
    \u0275\u0275template(121, CourseDetailsComponent_div_3_button_121_Template, 3, 0, "button", 72)(122, CourseDetailsComponent_div_3_button_122_Template, 3, 0, "button", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "div", 73)(124, "button", 74);
    \u0275\u0275element(125, "i", 75);
    \u0275\u0275text(126, " Favoris ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "button", 76);
    \u0275\u0275listener("click", function CourseDetailsComponent_div_3_Template_button_click_127_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.shareFormation());
    });
    \u0275\u0275element(128, "i", 77);
    \u0275\u0275text(129, " Partager ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(130, "div", 78)(131, "p", 79);
    \u0275\u0275element(132, "i", 80);
    \u0275\u0275text(133, " Garantie de remboursement de 30 jours ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(134, "div", 40)(135, "div", 41)(136, "h5", 42);
    \u0275\u0275text(137, "Ce cours comprend :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "ul", 81)(139, "li", 82);
    \u0275\u0275element(140, "i", 83);
    \u0275\u0275text(141);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "li", 82);
    \u0275\u0275element(143, "i", 84);
    \u0275\u0275text(144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "li", 82);
    \u0275\u0275element(146, "i", 85);
    \u0275\u0275text(147, " Acc\xE8s \xE0 vie complet ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "li", 82);
    \u0275\u0275element(149, "i", 86);
    \u0275\u0275text(150, " Acc\xE8s sur mobile et tablette ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(151, CourseDetailsComponent_div_3_li_151_Template, 3, 0, "li", 87);
    \u0275\u0275elementStart(152, "li", 58);
    \u0275\u0275element(153, "i", 88);
    \u0275\u0275text(154, " Acc\xE8s \xE0 la communaut\xE9 ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(155, "div", 40)(156, "div", 41)(157, "h5", 42);
    \u0275\u0275text(158, "Informations sur le cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "ul", 89)(160, "li", 90)(161, "span");
    \u0275\u0275element(162, "i", 91);
    \u0275\u0275text(163, " \xC9tudiants inscrits ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "strong");
    \u0275\u0275text(165);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(166, "li", 90)(167, "span");
    \u0275\u0275element(168, "i", 92);
    \u0275\u0275text(169, " Dur\xE9e totale ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "strong");
    \u0275\u0275text(171);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(172, "li", 90)(173, "span");
    \u0275\u0275element(174, "i", 93);
    \u0275\u0275text(175, " Nombre de modules ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "strong");
    \u0275\u0275text(177);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(178, "li", 90)(179, "span");
    \u0275\u0275element(180, "i", 94);
    \u0275\u0275text(181, " Niveau ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(182, "strong");
    \u0275\u0275text(183);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(184, "li", 90)(185, "span");
    \u0275\u0275element(186, "i", 95);
    \u0275\u0275text(187, " Langue ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(188, "strong");
    \u0275\u0275text(189);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(190, "li", 96)(191, "span");
    \u0275\u0275element(192, "i", 97);
    \u0275\u0275text(193, " Derni\xE8re mise \xE0 jour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(194, "strong");
    \u0275\u0275text(195);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(196, CourseDetailsComponent_div_3_div_196_Template, 6, 1, "div", 98);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + ctx_r0.getImageUrl(ctx_r0.formation.image_couverture) + ")")("background-repeat", "no-repeat")("background-position", "center")("background-size", "cover");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formation.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formation.short_description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.formation.modules == null ? null : ctx_r0.formation.modules.length) || 0, "+ Modules ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formation.duree_totale, "h ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formation.nb_inscrits || 0, " \xE9tudiants inscrits ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formation.categorie == null ? null : ctx_r0.formation.categorie.nom, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.getImageUrl(ctx_r0.formation.formateur == null ? null : ctx_r0.formation.formateur.avatar), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.formation.formateur == null ? null : ctx_r0.formation.formateur.nom) || "Formateur Expert", " ");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" (", (ctx_r0.formation.avis == null ? null : ctx_r0.formation.avis.length) || 15, ") ");
    \u0275\u0275advance(12);
    \u0275\u0275property("innerHTML", ctx_r0.formation.description, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getCompetencesList(ctx_r0.formation.competences_acquises).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getCompetencesList(ctx_r0.formation.competences_acquises).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.prerequis);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.prerequis);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getOutilsList(ctx_r0.formation.outils_requis).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getOutilsList(ctx_r0.formation.outils_requis).length > 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.formation.modules == null ? null : ctx_r0.formation.modules.length) || 0, " Modules ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.formation.duree_totale, "h");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.formation.modules);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.formation.modules == null ? null : ctx_r0.formation.modules.length));
    \u0275\u0275advance(8);
    \u0275\u0275property("src", ctx_r0.getImageUrl(ctx_r0.formation.formateur == null ? null : ctx_r0.formation.formateur.avatar), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.formation.formateur == null ? null : ctx_r0.formation.formateur.nom) || "Expert Formateur", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.formation.formateur == null ? null : ctx_r0.formation.formateur.fonction) || "Formateur Expert");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.formation.formateur == null ? null : ctx_r0.formation.formateur.nb_formations) || 1, " Cours ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.formation.modules == null ? null : ctx_r0.formation.modules.length) || 0, "+ Modules ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formation.duree_totale, "h ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formation.nb_inscrits || 0, " \xE9tudiants ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.formation.formateur == null ? null : ctx_r0.formation.formateur.bio) || "Expert dans son domaine avec plusieurs ann\xE9es d'exp\xE9rience en formation professionnelle.");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.isYouTubeUrl(ctx_r0.formation.media_url));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getMediaUrl(ctx_r0.formation.media_url) && !ctx_r0.isYouTubeUrl(ctx_r0.formation.media_url));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.formation.media_url);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.formation.prix == 0 || ctx_r0.formation.prix == "0.00");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.prix > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.prix_original && ctx_r0.formation.prix_original > ctx_r0.formation.prix);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.formation.prix == 0 || ctx_r0.formation.prix == "0.00");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.prix > 0 && (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.role_id) === 2);
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formation.duree_totale, "h de contenu vid\xE9o ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.formation.modules == null ? null : ctx_r0.formation.modules.length) || 0, " ressources t\xE9l\xE9chargeables ");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.formation.est_certifiante);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r0.formation.nb_inscrits || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.formation.duree_totale, "h");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r0.formation.modules == null ? null : ctx_r0.formation.modules.length) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.getNiveauLabel(ctx_r0.formation.niveau));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.getLangueLabel(ctx_r0.formation.langue));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.formation.updated_at));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getTagsList(ctx_r0.formation.tags).length > 0);
  }
}
function CourseDetailsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 142)(2, "div", 143);
    \u0275\u0275element(3, "i", 144);
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5, "Formation non trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 145);
    \u0275\u0275text(7, "La formation que vous recherchez n'existe pas ou n'est plus disponible.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 146);
    \u0275\u0275element(9, "i", 147);
    \u0275\u0275text(10, " Retour aux formations ");
    \u0275\u0275elementEnd()()()();
  }
}
var CourseDetailsComponent = class _CourseDetailsComponent {
  route;
  router;
  formationService;
  authService;
  location;
  sanitizer;
  routes = routes;
  // Data properties
  formation = null;
  loading = false;
  error = "";
  success = "";
  // Calculated properties
  totalSections = 0;
  totalDuration = 0;
  averageRating = 0;
  // User state
  currentUser = null;
  // Comment form
  newComment = {
    nom: "",
    email: "",
    sujet: "",
    commentaire: "",
    note: 5
  };
  submittingComment = false;
  // Related courses
  relatedCourses = [];
  // LightGallery configuration
  settings = {
    counter: false,
    download: false,
    selector: ".lg-item",
    plugins: [],
    licenseKey: "your_license_key"
  };
  // Private properties
  lightGallery;
  formationId = null;
  destroy$ = new Subject();
  constructor(route, router, formationService, authService, location, sanitizer) {
    this.route = route;
    this.router = router;
    this.formationService = formationService;
    this.authService = authService;
    this.location = location;
    this.sanitizer = sanitizer;
  }
  ngOnInit() {
    import_aos.default.init({
      duration: 1200,
      once: true,
      disable: "mobile"
    });
    this.currentUser = this.authService.getUser();
    if (this.currentUser) {
      this.newComment.nom = this.currentUser.nom || this.currentUser.name || "";
      this.newComment.email = this.currentUser.email || "";
    }
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.formationId = params.get("id");
      if (this.formationId) {
        this.loadFormation();
      } else {
        this.error = "ID de formation manquant";
        this.router.navigate(["/courses"]);
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onInit = (detail) => {
    this.lightGallery = detail.instance;
  };
  // ================================
  // LOADING AND DATA METHODS
  // ================================
  loadFormation() {
    if (!this.formationId)
      return;
    this.loading = true;
    this.error = "";
    this.formationService.getFormationById(this.formationId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.formation = response.formation || response.data || response;
        this.processFormationData();
        this.loadRelatedCourses();
        this.loading = false;
        console.log("\u2705 Formation charg\xE9e:", this.formation);
        setTimeout(() => import_aos.default.refresh(), 100);
      },
      error: (error) => {
        console.error("\u274C Erreur lors du chargement de la formation:", error);
        this.handleLoadError(error);
      }
    });
  }
  processFormationData() {
    if (!this.formation)
      return;
    this.calculateTotalSections();
    this.calculateTotalDuration();
    this.calculateAverageRating();
    if (typeof this.formation.tags === "string") {
      try {
        this.formation.tags = JSON.parse(this.formation.tags);
      } catch {
        this.formation.tags = this.formation.tags.split(",").map((tag) => tag.trim());
      }
    }
    if (typeof this.formation.competences_acquises === "string") {
      try {
        this.formation.competences_acquises = JSON.parse(this.formation.competences_acquises);
      } catch {
        this.formation.competences_acquises = [];
      }
    }
    if (typeof this.formation.outils_requis === "string") {
      try {
        this.formation.outils_requis = JSON.parse(this.formation.outils_requis);
      } catch {
        this.formation.outils_requis = [];
      }
    }
    this.formation.modules = this.formation.modules || [];
    this.formation.faqs = this.formation.faqs || [];
    this.formation.avis = this.formation.avis || [];
    if (this.formation.image_couverture && !this.formation.image_couverture.startsWith("http")) {
      this.formation.image_couverture = `http://localhost:8000/storage/${this.formation.image_couverture}`;
    }
    if (this.formation.formateur?.avatar && !this.formation.formateur.avatar.startsWith("http")) {
      this.formation.formateur.avatar = `http://localhost:8000/storage/${this.formation.formateur.avatar}`;
    }
  }
  calculateTotalSections() {
    if (!this.formation?.modules) {
      this.totalSections = 0;
      return;
    }
    this.totalSections = this.formation.modules.reduce((total, module) => {
      return total + (module.sections?.length || 0);
    }, 0);
  }
  calculateTotalDuration() {
    if (!this.formation?.modules) {
      this.totalDuration = 0;
      return;
    }
    this.totalDuration = this.formation.modules.reduce((total, module) => {
      const moduleDuration = module.sections?.reduce((moduleTotal, section) => {
        return moduleTotal + (parseInt(section.duree_estimee) || 0);
      }, 0) || 0;
      return total + moduleDuration;
    }, 0);
  }
  calculateAverageRating() {
    if (!this.formation?.avis || this.formation.avis.length === 0) {
      this.averageRating = 0;
      return;
    }
    const totalRating = this.formation.avis.reduce((sum, avis) => {
      return sum + (parseFloat(avis.note) || 0);
    }, 0);
    this.averageRating = Math.round(totalRating / this.formation.avis.length * 10) / 10;
  }
  parseToNumber(value) {
    return parseInt(value) || 0;
  }
  loadRelatedCourses() {
    if (!this.formation?.formateur_id) {
      console.log("\u2139\uFE0F Aucun formateur sp\xE9cifi\xE9 pour charger les formations similaires");
      return;
    }
    this.formationService.getFormations({ page: 1, limit: 20 }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        const allFormations = response.formations || response.data || [];
        this.relatedCourses = allFormations.filter((f) => f.formateur_id === this.formation.formateur_id && f.id !== this.formation.id).slice(0, 4);
        console.log("\u{1F517} Formations du formateur charg\xE9es:", this.relatedCourses.length);
      },
      error: (error) => {
        console.log("\u2139\uFE0F Formations similaires non disponibles:", error);
        this.relatedCourses = [];
      }
    });
  }
  handleLoadError(error) {
    this.loading = false;
    if (error.status === 404) {
      this.error = "Formation non trouv\xE9e";
    } else if (error.status === 403) {
      this.error = "Acc\xE8s non autoris\xE9 \xE0 cette formation";
    } else {
      this.error = "Erreur lors du chargement de la formation";
    }
    console.error("\u274C Erreur de chargement:", error);
    setTimeout(() => {
      this.router.navigate(["/courses"]);
    }, 3e3);
  }
  // ================================
  // HELPER METHODS FOR TEMPLATE
  // ================================
  formatDuration(minutes) {
    if (!minutes || minutes === 0)
      return "0 min";
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
    }
    return `${mins}min`;
  }
  getStarsArray(rating) {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }
  getObjectifsList(objectifs) {
    if (!objectifs)
      return [];
    return objectifs.split("\n").map((obj) => obj.replace(/^[-•*]\s*/, "").trim()).filter((obj) => obj.length > 0);
  }
  getPrerequisList(prerequis) {
    if (!prerequis)
      return [];
    return prerequis.split("\n").map((pre) => pre.replace(/^[-•*]\s*/, "").trim()).filter((pre) => pre.length > 0);
  }
  getNiveauLabel(niveau) {
    const niveaux = {
      "debutant": "D\xE9butant",
      "intermediaire": "Interm\xE9diaire",
      "avance": "Avanc\xE9",
      "expert": "Expert"
    };
    return niveaux[niveau] || niveau.charAt(0).toUpperCase() + niveau.slice(1);
  }
  getTypeLabel(type) {
    const types = {
      "en_ligne": "En ligne",
      "presentiel": "Pr\xE9sentiel",
      "hybride": "Hybride",
      "video": "Vid\xE9o",
      "hands-on": "Pratique",
      "reading": "Lecture",
      "quiz": "Quiz"
    };
    return types[type] || type;
  }
  getSectionTypeIcon(type) {
    const icons = {
      "video": "fas fa-play-circle",
      "hands-on": "fas fa-hands-helping",
      "reading": "fas fa-file-text",
      "quiz": "fas fa-question-circle",
      "assignment": "fas fa-tasks"
    };
    return icons[type] || "fas fa-file";
  }
  getSectionTypeColor(type) {
    const colors = {
      "video": "text-primary",
      "hands-on": "text-success",
      "reading": "text-info",
      "quiz": "text-warning",
      "assignment": "text-danger"
    };
    return colors[type] || "text-secondary";
  }
  calculateDiscount(prix, prixOriginal) {
    if (!prixOriginal || prixOriginal <= prix)
      return 0;
    return Math.round((prixOriginal - prix) / prixOriginal * 100);
  }
  // ================================
  // USER ACTION METHODS
  // ================================
  previewSection(section) {
    if (!section.ressources) {
      this.error = "Aucune ressource disponible pour cette section";
      setTimeout(() => this.error = "", 3e3);
      return;
    }
    let resourceUrl = section.ressources;
    if (!resourceUrl.startsWith("http")) {
      resourceUrl = `http://localhost:8000/storage/${resourceUrl}`;
    }
    if (section.type === "video") {
      window.open(resourceUrl, "_blank", "width=800,height=600");
      console.log("\u{1F3A5} Ouverture de la section:", section.titre);
    } else {
      window.open(resourceUrl, "_blank");
      console.log("\u{1F4C4} Ouverture de la ressource:", section.titre);
    }
  }
  shareFormation() {
    const url = window.location.href;
    const title = this.formation?.titre || "Formation int\xE9ressante";
    const text = this.formation?.short_description || "D\xE9couvrez cette formation";
    if (navigator.share) {
      navigator.share({
        title,
        text,
        url
      }).catch(() => {
        this.copyToClipboard(url);
      });
    } else {
      this.copyToClipboard(url);
    }
  }
  copyToClipboard(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        this.success = "Lien copi\xE9 dans le presse-papier";
        setTimeout(() => this.success = "", 3e3);
      }).catch(() => {
        this.fallbackCopyToClipboard(text);
      });
    } else {
      this.fallbackCopyToClipboard(text);
    }
  }
  fallbackCopyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      this.success = "Lien copi\xE9 dans le presse-papier";
      setTimeout(() => this.success = "", 3e3);
    } catch (err) {
      console.error("Erreur lors de la copie:", err);
      this.error = "Impossible de copier le lien";
      setTimeout(() => this.error = "", 3e3);
    }
    document.body.removeChild(textArea);
  }
  // ================================
  // COMMENT METHODS
  // ================================
  submitComment() {
    if (!this.validateCommentForm()) {
      return;
    }
    this.submittingComment = true;
    this.error = "";
    const commentData = {
      formation_id: this.formation?.id,
      nom: this.newComment.nom.trim(),
      email: this.newComment.email.trim(),
      sujet: this.newComment.sujet.trim(),
      commentaire: this.newComment.commentaire.trim(),
      note: this.newComment.note || 5
    };
    this.simulateCommentSubmission(commentData);
  }
  simulateCommentSubmission(commentData) {
    setTimeout(() => {
      this.success = "Commentaire enregistr\xE9 avec succ\xE8s !";
      this.resetCommentForm();
      this.submittingComment = false;
      const newAvis = __spreadProps(__spreadValues({}, commentData), {
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        id: Date.now()
      });
      if (!this.formation.avis) {
        this.formation.avis = [];
      }
      this.formation.avis.unshift(newAvis);
      this.calculateAverageRating();
      console.log("\u{1F4AC} Commentaire simul\xE9 ajout\xE9:", commentData.sujet);
      setTimeout(() => this.success = "", 5e3);
    }, 1e3);
  }
  validateCommentForm() {
    const { nom, email, sujet, commentaire } = this.newComment;
    if (!nom.trim()) {
      this.error = "Le nom est obligatoire";
      setTimeout(() => this.error = "", 3e3);
      return false;
    }
    if (!email.trim()) {
      this.error = "L'email est obligatoire";
      setTimeout(() => this.error = "", 3e3);
      return false;
    }
    if (!this.isValidEmail(email)) {
      this.error = "Format d'email invalide";
      setTimeout(() => this.error = "", 3e3);
      return false;
    }
    if (!sujet.trim()) {
      this.error = "Le sujet est obligatoire";
      setTimeout(() => this.error = "", 3e3);
      return false;
    }
    if (!commentaire.trim()) {
      this.error = "Le commentaire est obligatoire";
      setTimeout(() => this.error = "", 3e3);
      return false;
    }
    if (commentaire.trim().length < 10) {
      this.error = "Le commentaire doit contenir au moins 10 caract\xE8res";
      setTimeout(() => this.error = "", 3e3);
      return false;
    }
    return true;
  }
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  resetCommentForm() {
    this.newComment = {
      nom: this.currentUser?.nom || this.currentUser?.name || "",
      email: this.currentUser?.email || "",
      sujet: "",
      commentaire: "",
      note: 5
    };
  }
  setRating(rating) {
    this.newComment.note = Math.max(1, Math.min(5, rating));
    console.log("\u2B50 Note s\xE9lectionn\xE9e:", this.newComment.note);
  }
  // ================================
  // UTILITY METHODS
  // ================================
  goBack() {
    this.location.back();
  }
  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  trackByIndex(index, item) {
    return item?.id || index;
  }
  // ================================
  // SOCIAL SHARING METHODS
  // ================================
  shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    this.openShareWindow(shareUrl);
  }
  shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(this.formation?.titre || "");
    const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    this.openShareWindow(shareUrl);
  }
  shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(this.formation?.titre || "");
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`;
    this.openShareWindow(shareUrl);
  }
  openShareWindow(url) {
    const features = "width=600,height=400,scrollbars=yes,resizable=yes,toolbar=no,location=no,menubar=no";
    window.open(url, "share", features);
  }
  getImageUrl(imageName) {
    console.log("Image name received:", imageName);
    if (!imageName || imageName.trim() === "") {
      return "assets/img/course/courses-06.jpg";
    }
    if (imageName.startsWith("http://localhost:8000/storage/") && !imageName.includes("/formations/")) {
      const fileName = imageName.replace("http://localhost:8000/storage/", "");
      const correctedUrl = `http://localhost:8000/storage/formations/${fileName}`;
      console.log("URL corrected:", correctedUrl);
      return correctedUrl;
    }
    if (imageName.startsWith("http://") || imageName.startsWith("https://")) {
      console.log("URL already complete:", imageName);
      return imageName;
    }
    const finalUrl = `http://localhost:8000/storage/formations/${imageName}`;
    console.log("Constructed URL:", finalUrl);
    return finalUrl;
  }
  getCompetencesList(competences) {
    if (!competences)
      return [];
    try {
      return JSON.parse(competences);
    } catch (e) {
      return [];
    }
  }
  getBannerStyle() {
    if (this.formation?.image_couverture) {
      return {
        "background-image": `url(${this.getImageUrl(this.formation.image_couverture)})`,
        "background-repeat": "no-repeat",
        "background-position": "center",
        "background-size": "cover",
        "position": "relative"
      };
    }
    return {};
  }
  getTagsList(tags) {
    if (!tags)
      return [];
    try {
      return JSON.parse(tags);
    } catch (e) {
      return [];
    }
  }
  getOutilsList(outils) {
    if (!outils)
      return [];
    try {
      return JSON.parse(outils);
    } catch (e) {
      return [];
    }
  }
  getLangueLabel(langue) {
    const langues = {
      "fr": "Fran\xE7ais",
      "en": "Anglais",
      "es": "Espagnol",
      "de": "Allemand",
      "it": "Italien",
      "pt": "Portugais",
      "ar": "Arabe",
      "zh": "Chinois",
      "ja": "Japonais",
      "ru": "Russe"
    };
    return langues[langue] || langue?.charAt(0).toUpperCase() + langue?.slice(1) || "Non sp\xE9cifi\xE9";
  }
  formatDate(dateString) {
    if (!dateString)
      return "Non sp\xE9cifi\xE9";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    } catch (error) {
      return "Date invalide";
    }
  }
  // Méthode bonus pour gérer les statuts de difficulté
  getDifficulteLabel(difficulte) {
    const difficultes = {
      "facile": "Facile",
      "moyen": "Moyen",
      "difficile": "Difficile",
      "expert": "Expert"
    };
    return difficultes[difficulte] || difficulte?.charAt(0).toUpperCase() + difficulte?.slice(1) || "Non sp\xE9cifi\xE9";
  }
  // Méthode pour gérer les types de formation
  getTypeFormationLabel(type) {
    const types = {
      "en_ligne": "En ligne",
      "presentiel": "Pr\xE9sentiel",
      "hybride": "Hybride",
      "e_learning": "E-learning",
      "webinaire": "Webinaire",
      "atelier": "Atelier"
    };
    return types[type] || type?.charAt(0).toUpperCase() + type?.slice(1) || "Non sp\xE9cifi\xE9";
  }
  isYouTubeUrl(url) {
    if (!url)
      return false;
    const youtubePatterns = [
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
      /(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]+)/,
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([a-zA-Z0-9_-]+)/
    ];
    return youtubePatterns.some((pattern) => pattern.test(url));
  }
  getYouTubeVideoId(url) {
    if (!url)
      return null;
    const patterns = [
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
      /(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]+)/,
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([a-zA-Z0-9_-]+)/
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  }
  getYouTubeEmbedUrl(url) {
    const videoId = this.getYouTubeVideoId(url);
    if (!videoId)
      return null;
    const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&modestbranding=1&autoplay=0`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
  getYouTubeThumbnail(url) {
    const videoId = this.getYouTubeVideoId(url);
    if (!videoId)
      return this.getImageUrl(null);
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }
  openYouTubeVideo(url) {
    if (this.isYouTubeUrl(url)) {
      window.open(url, "_blank", "width=800,height=600");
    }
  }
  // Modification de la méthode getMediaUrl existante
  getMediaUrl(mediaName) {
    if (!mediaName)
      return null;
    if (this.isYouTubeUrl(mediaName)) {
      return mediaName;
    }
    return `http://localhost:8000/storage/formations/videos/${mediaName}`;
  }
  static \u0275fac = function CourseDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(DomSanitizer));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseDetailsComponent, selectors: [["app-course-details"]], decls: 5, vars: 5, consts: [["class", "d-flex justify-content-center py-5", 4, "ngIf"], ["class", "alert alert-danger mx-3", "role", "alert", 4, "ngIf"], ["class", "alert alert-success mx-3", "role", "alert", 4, "ngIf"], [4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "d-flex", "justify-content-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], ["role", "alert", 1, "alert", "alert-danger", "mx-3"], [1, "fas", "fa-exclamation-triangle", "me-2"], ["role", "alert", 1, "alert", "alert-success", "mx-3"], [1, "fas", "fa-check-circle", "me-2"], [1, "inner-banner", 2, "position", "relative"], [1, "banner-overlay", 2, "position", "absolute", "top", "0", "left", "0", "width", "100%", "height", "100%", "background-color", "rgba(0, 0, 0, 0.5)", "z-index", "1"], [1, "container", 2, "position", "relative", "z-index", "2"], [1, "row"], [1, "col-lg-8"], [1, "text-white", "mb-3", "mb-sm-2"], [1, "text-white", "fs-14", "mb-3"], [1, "d-flex", "align-items-center", "gap-2", "gap-sm-3", "gap-xl-4", "flex-wrap", "justify-content-md-start", "justify-content-center"], [1, "fw-medium", "text-white", "d-flex", "align-items-center", "mb-0"], ["src", "./assets/img/icons/book.svg", "alt", "img", 1, "me-2"], ["src", "./assets/img/icons/timer-start.svg", "alt", "img", 1, "me-2"], ["src", "./assets/img/icons/people.svg", "alt", "img", 1, "me-2"], [1, "badge", "badge-sm", "rounded-pill", "bg-warning", "fs-12"], [1, "d-sm-flex", "align-items-center", "justify-content-sm-between", "mt-5"], [1, "d-flex", "text-start", "align-items-center", "justify-content-sm-start", "justify-content-center"], [1, "avatar", "avatar-lg"], ["alt", "Formateur", 1, "rounded-circle", 3, "src"], [1, "ms-2"], [1, "fs-18", "text-white"], ["href", "javascript:void(0)"], [1, "text-white", "fs-14"], [1, "d-flex", "mt-sm-0", "mt-2", "align-items-center", "justify-content-sm-start", "justify-content-center"], [1, "fa-solid", "fa-star", "text-warning", "me-1"], [1, "fa-solid", "fa-star", "text-white", "me-1"], [1, "text-warning"], [1, "course-details"], [1, "container"], [1, "course-page-content"], [1, "card"], [1, "card-body"], [1, "subs-title", "mb-3"], [1, "mb-3"], [3, "innerHTML"], ["class", "mb-3 mt-4", 4, "ngIf"], ["class", "custom-list", 4, "ngIf"], ["class", "custom-list mb-0", 4, "ngIf"], [1, "d-flex", "justify-content-between", "flex-wrap"], [1, "subs-title", "mb-2", "mb-sm-3"], [1, "text-gray-7", "mb-3"], [1, "text-secondary"], ["id", "accordioncustomicon1Example", 1, "accordion", "accordion-customicon1", "accordions-items-seperate", "p-0"], ["class", "accordion-item", "data-aos", "fade-up", 4, "ngFor", "ngForOf"], ["class", "accordion-item", "data-aos", "fade-up", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-4", "gap-2", "flex-wrap"], [1, "d-flex", "align-items-center"], [1, "fs-18", "fw-semibold"], [1, "mb-0"], [1, "course-info", "align-items-center", "d-flex", "gap-2", "gap-xl-3", "mt-3", "mb-3", "flex-wrap"], [1, "fw-medium", "d-flex", "align-items-center", "fs-14", "mb-0"], ["src", "./assets/img/icons/play2.svg", "alt", "img", 1, "me-2"], ["src", "./assets/img/icons/book2.svg", "alt", "img", 1, "me-2"], ["src", "./assets/img/icons/timer-start2.svg", "alt", "img", 1, "me-2"], [1, "col-lg-4"], [1, "course-sidebar-sec"], ["class", "position-relative mb-4", 4, "ngIf"], [1, "text-center", "mb-4"], ["class", "text-success fs-30 mb-0", 4, "ngIf"], ["class", "text-primary fs-30 mb-0", 4, "ngIf"], ["class", "text-muted mb-0", 4, "ngIf"], [1, "d-grid", "mb-3"], ["class", "btn btn-primary btn-lg", 4, "ngIf"], [1, "d-flex", "gap-2", "mb-3"], [1, "btn", "btn-outline-secondary", "flex-fill"], [1, "fas", "fa-heart", "me-1"], [1, "btn", "btn-outline-secondary", "flex-fill", 3, "click"], [1, "fas", "fa-share", "me-1"], [1, "text-center"], [1, "text-muted", "fs-14", "mb-0"], [1, "fas", "fa-shield-alt", "me-1"], [1, "list-unstyled", "course-includes"], [1, "mb-2"], [1, "fas", "fa-play-circle", "text-primary", "me-2"], [1, "fas", "fa-download", "text-primary", "me-2"], [1, "fas", "fa-infinity", "text-primary", "me-2"], [1, "fas", "fa-mobile-alt", "text-primary", "me-2"], ["class", "mb-2", 4, "ngIf"], [1, "fas", "fa-users", "text-primary", "me-2"], [1, "list-unstyled", "course-features"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "fas", "fa-users", "text-muted", "me-2"], [1, "fas", "fa-clock", "text-muted", "me-2"], [1, "fas", "fa-book", "text-muted", "me-2"], [1, "fas", "fa-signal", "text-muted", "me-2"], [1, "fas", "fa-globe", "text-muted", "me-2"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-0"], [1, "fas", "fa-calendar", "text-muted", "me-2"], ["class", "card", 4, "ngIf"], [1, "mb-3", "mt-4"], [1, "custom-list"], ["class", "list-items", 4, "ngFor", "ngForOf"], [1, "list-items"], [1, "custom-list", "mb-0"], ["data-aos", "fade-up", 1, "accordion-item"], [1, "accordion-header", 3, "id"], ["type", "button", "data-bs-toggle", "collapse", "aria-expanded", "false", 1, "accordion-button", "collapsed"], [1, "fa-solid", "fa-chevron-down"], ["data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body", "p-0"], ["class", "text-center py-4", 4, "ngIf"], ["class", "p-4 px-3 d-flex justify-content-between", 4, "ngFor", "ngForOf"], [1, "p-4", "px-3", "d-flex", "justify-content-between"], ["src", "./assets/img/icons/play.svg", "alt", "img", 1, "me-2"], [1, "d-flex", "gap-xl-5", "gap-3"], ["href", "javascript:void(0);", 1, "preview-link", 3, "click"], [1, "text-center", "py-4"], [1, "text-muted", "mb-0"], ["id", "headingcustomicon1default", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1default", "aria-expanded", "false", "aria-controls", "collapsecustomicon1default", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1default", "aria-labelledby", "headingcustomicon1default", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], ["href", "javascript:void(0);", 1, "preview-link"], [1, "position-relative", "mb-4"], [1, "ratio", "ratio-16x9"], ["title", "Aper\xE7u de la formation", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"], ["controls", "", 1, "img-fluid", "w-100", "rounded", 3, "poster"], ["type", "video/mp4", 3, "src"], ["alt", "Couverture du cours", 1, "img-fluid", "rounded", "w-100", 2, "object-fit", "cover", 3, "src"], ["class", "play-button-overlay", 3, "click", 4, "ngIf"], [1, "play-button-overlay", 3, "click"], [1, "fas", "fa-play-circle", "fa-3x", "text-white"], [1, "text-success", "fs-30", "mb-0"], [1, "text-primary", "fs-30", "mb-0"], [1, "text-decoration-line-through"], [1, "badge", "bg-success", "ms-2"], [1, "btn", "btn-primary", "btn-lg"], [1, "fas", "fa-play", "me-2"], [1, "isax", "isax-document-text5", "me-2"], [1, "fas", "fa-certificate", "text-primary", "me-2"], [1, "tags-container"], ["class", "badge bg-light text-dark me-1 mb-1", 4, "ngFor", "ngForOf"], [1, "badge", "bg-light", "text-dark", "me-1", "mb-1"], [1, "row", "justify-content-center"], [1, "col-md-6", "text-center", "py-5"], [1, "fas", "fa-search", "fa-3x", "text-muted", "mb-3"], [1, "text-muted"], ["routerLink", "/formations", 1, "btn", "btn-primary"], [1, "fas", "fa-arrow-left", "me-2"]], template: function CourseDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CourseDetailsComponent_div_0_Template, 4, 0, "div", 0)(1, CourseDetailsComponent_div_1_Template, 3, 1, "div", 1)(2, CourseDetailsComponent_div_2_Template, 3, 1, "div", 2)(3, CourseDetailsComponent_div_3_Template, 197, 54, "div", 3)(4, CourseDetailsComponent_div_4_Template, 11, 0, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.formation && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.formation && !ctx.loading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, LightgalleryModule, FormsModule], styles: ['\n\n.play-button-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n  transition: all 0.3s ease;\n  opacity: 0.8;\n}\n.play-button-overlay[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transform: translate(-50%, -50%) scale(1.1);\n}\n.ratio[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ratio[_ngcontent-%COMP%]::before {\n  display: block;\n  padding-top: var(--bs-aspect-ratio);\n  content: "";\n}\n.ratio[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.ratio-16x9[_ngcontent-%COMP%] {\n  --bs-aspect-ratio: calc(9 / 16 * 100%);\n}\n/*# sourceMappingURL=course-details.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-course-details", imports: [CommonModule, RouterLink, LightgalleryModule, FormsModule], template: `<!-- Loading State -->\r
<div *ngIf="loading" class="d-flex justify-content-center py-5">\r
  <div class="spinner-border text-primary" role="status">\r
    <span class="visually-hidden">Chargement...</span>\r
  </div>\r
</div>\r
\r
<!-- Error State -->\r
<div *ngIf="error" class="alert alert-danger mx-3" role="alert">\r
  <i class="fas fa-exclamation-triangle me-2"></i>\r
  {{ error }}\r
</div>\r
\r
<!-- Success State -->\r
<div *ngIf="success" class="alert alert-success mx-3" role="alert">\r
  <i class="fas fa-check-circle me-2"></i>\r
  {{ success }}\r
</div>\r
\r
<!-- Course Details Content -->\r
<div *ngIf="formation && !loading">\r
  \r
  <!-- Banner Section -->\r
 <section class="inner-banner"\r
         [style.background-image]="'url(' + getImageUrl(formation.image_couverture) + ')'"\r
         [style.background-repeat]="'no-repeat'"\r
         [style.background-position]="'center'"\r
         [style.background-size]="'cover'"\r
         style="position: relative;">\r
  \r
  <!-- Overlay noir transparent -->\r
  <div class="banner-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 1;"></div>\r
  \r
  <div class="container" style="position: relative; z-index: 2;">\r
    <div class="row">\r
      <div class="col-lg-8">\r
        <h1 class="text-white mb-3 mb-sm-2">{{ formation.titre }}</h1>\r
        <p class="text-white fs-14 mb-3">{{ formation.short_description }}</p>\r
\r
          <div class="d-flex align-items-center gap-2 gap-sm-3 gap-xl-4 flex-wrap justify-content-md-start justify-content-center">\r
            <p class="fw-medium text-white d-flex align-items-center mb-0">\r
              <img class="me-2" src="./assets/img/icons/book.svg" alt="img">\r
              {{ formation.modules?.length || 0 }}+ Modules\r
            </p>\r
            <p class="fw-medium text-white d-flex align-items-center mb-0">\r
              <img class="me-2" src="./assets/img/icons/timer-start.svg" alt="img">\r
              {{ formation.duree_totale }}h\r
            </p>\r
            <p class="fw-medium text-white d-flex align-items-center mb-0">\r
              <img class="me-2" src="./assets/img/icons/people.svg" alt="img">\r
              {{ formation.nb_inscrits || 0 }} \xE9tudiants inscrits\r
            </p>\r
            <span class="badge badge-sm rounded-pill bg-warning fs-12">\r
              {{ formation.categorie?.nom }}\r
            </span>\r
          </div>\r
          \r
          <div class="d-sm-flex align-items-center justify-content-sm-between mt-5">\r
            <div class="d-flex text-start align-items-center justify-content-sm-start justify-content-center">\r
              <div class="avatar avatar-lg">\r
                <img class="rounded-circle" \r
                     [src]="getImageUrl(formation.formateur?.avatar)" \r
                     alt="Formateur">\r
              </div>\r
              <div class="ms-2">\r
                <h6 class="fs-18 text-white">\r
                  <a href="javascript:void(0)">\r
                    {{ formation.formateur?.nom || 'Formateur Expert' }}\r
                  </a>\r
                </h6>\r
                <p class="text-white fs-14">Instructeur</p>\r
              </div>\r
            </div>\r
            \r
            <div class="d-flex mt-sm-0 mt-2 align-items-center justify-content-sm-start justify-content-center">\r
              <i class="fa-solid fa-star text-warning me-1"></i>\r
              <i class="fa-solid fa-star text-warning me-1"></i>\r
              <i class="fa-solid fa-star text-warning me-1"></i>\r
              <i class="fa-solid fa-star text-warning me-1"></i>\r
              <i class="fa-solid fa-star text-white me-1"></i>\r
              <p class="text-white fs-14">\r
                <span class="text-warning">4.0</span> ({{ formation.avis?.length || 15 }})\r
              </p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Course Detail Section -->\r
  <section class="course-details">\r
    <div class="container">\r
      <div class="row">\r
        <div class="col-lg-8">\r
          <div class="course-page-content">\r
            \r
            <!-- Overview Card -->\r
            <div class="card">\r
              <div class="card-body">\r
                <h5 class="subs-title mb-3">Aper\xE7u</h5>\r
                <h6 class="mb-3">Description du cours</h6>\r
                <div [innerHTML]="formation.description"></div>\r
                \r
                <!-- Comp\xE9tences Acquises -->\r
                <h6 class="mb-3 mt-4" *ngIf="getCompetencesList(formation.competences_acquises).length > 0">\r
                  Comp\xE9tences acquises\r
                </h6>\r
                <ul class="custom-list" *ngIf="getCompetencesList(formation.competences_acquises).length > 0">\r
                  <li class="list-items" *ngFor="let competence of getCompetencesList(formation.competences_acquises)">\r
                    {{ competence }}\r
                  </li>\r
                </ul>\r
                \r
                <!-- Pr\xE9requis -->\r
                <h6 class="mb-3 mt-4" *ngIf="formation.prerequis">Pr\xE9requis</h6>\r
                <p *ngIf="formation.prerequis">{{ formation.prerequis }}</p>\r
                \r
                <!-- Outils Requis -->\r
                <h6 class="mb-3 mt-4" *ngIf="getOutilsList(formation.outils_requis).length > 0">\r
                  Outils requis\r
                </h6>\r
                <ul class="custom-list mb-0" *ngIf="getOutilsList(formation.outils_requis).length > 0">\r
                  <li class="list-items" *ngFor="let outil of getOutilsList(formation.outils_requis)">\r
                    {{ outil }}\r
                  </li>\r
                </ul>\r
              </div>\r
            </div>\r
\r
            <!-- Course Content Card -->\r
            <div class="card">\r
              <div class="card-body">\r
                <div class="d-flex justify-content-between flex-wrap">\r
                  <h5 class="subs-title mb-2 mb-sm-3">Contenu du cours</h5>\r
                  <h6 class="text-gray-7 mb-3">\r
                    {{ formation.modules?.length || 0 }} Modules\r
                    <span class="text-secondary">{{ formation.duree_totale }}h</span>\r
                  </h6>\r
                </div>\r
                \r
                <div class="accordion accordion-customicon1 accordions-items-seperate p-0" \r
                     id="accordioncustomicon1Example">\r
                  \r
                  <div class="accordion-item" \r
                       *ngFor="let module of formation.modules; let i = index" \r
                       data-aos="fade-up">\r
                    <h2 class="accordion-header" [id]="'headingcustomicon1' + i">\r
                      <button class="accordion-button collapsed" \r
                              type="button" \r
                              data-bs-toggle="collapse" \r
                              [attr.data-bs-target]="'#collapsecustomicon1' + i" \r
                              aria-expanded="false" \r
                              [attr.aria-controls]="'collapsecustomicon1' + i">\r
                        Module {{ i + 1 }}: {{ module.titre }}\r
                        <i class="fa-solid fa-chevron-down"></i>\r
                      </button>\r
                    </h2>\r
                    \r
                    <div [id]="'collapsecustomicon1' + i" \r
                         class="accordion-collapse collapse" \r
                         [attr.aria-labelledby]="'headingcustomicon1' + i" \r
                         data-bs-parent="#accordioncustomicon1Example">\r
                      <div class="accordion-body p-0">\r
                        <ul *ngIf="module.sections?.length > 0">\r
                          <li class="p-4 px-3 d-flex justify-content-between" \r
                              *ngFor="let section of module.sections; let j = index">\r
                            <p class="mb-0">\r
                              <img class="me-2" src="./assets/img/icons/play.svg" alt="img">\r
                              Le\xE7on {{ i + 1 }}.{{ j + 1 }} {{ section.titre }}\r
                            </p>\r
                            <div class="d-flex gap-xl-5 gap-3">\r
                             <a href="javascript:void(0);" \r
                            class="preview-link"\r
                            (click)="previewSection(section)">\r
                            Aper\xE7u\r
                          </a>\r
                              <p class="mb-0">{{ section.duree_estimee || '5' }}min</p>\r
                            </div>\r
                          </li>\r
                        </ul>\r
                        \r
                        <div class="text-center py-4" *ngIf="!module.sections?.length">\r
                          <p class="text-muted mb-0">Contenu en cours de pr\xE9paration...</p>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  \r
                  <!-- Module par d\xE9faut si pas de modules -->\r
                  <div class="accordion-item" *ngIf="!formation.modules?.length" data-aos="fade-up">\r
                    <h2 class="accordion-header" id="headingcustomicon1default">\r
                      <button class="accordion-button collapsed" \r
                              type="button" \r
                              data-bs-toggle="collapse" \r
                              data-bs-target="#collapsecustomicon1default" \r
                              aria-expanded="false" \r
                              aria-controls="collapsecustomicon1default">\r
                        Introduction au cours\r
                        <i class="fa-solid fa-chevron-down"></i>\r
                      </button>\r
                    </h2>\r
                    <div id="collapsecustomicon1default" \r
                         class="accordion-collapse collapse" \r
                         aria-labelledby="headingcustomicon1default" \r
                         data-bs-parent="#accordioncustomicon1Example">\r
                      <div class="accordion-body p-0">\r
                        <ul>\r
                          <li class="p-4 px-3 d-flex justify-content-between">\r
                            <p class="mb-0">\r
                              <img class="me-2" src="./assets/img/icons/play.svg" alt="img">\r
                              Le\xE7on 1.1 Pr\xE9sentation du cours\r
                            </p>\r
                            <div class="d-flex gap-xl-5 gap-3">\r
                              <a href="javascript:void(0);" class="preview-link">Aper\xE7u</a>\r
                              <p class="mb-0">5min</p>\r
                            </div>\r
                          </li>\r
                        </ul>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Instructor Card -->\r
            <div class="card">\r
              <div class="card-body">\r
                <h5 class="subs-title mb-3">\xC0 propos de l'instructeur</h5>\r
                \r
                <div class="d-flex align-items-center justify-content-between mt-4 gap-2 flex-wrap">\r
                  <div class="d-flex align-items-center">\r
                    <div class="avatar avatar-lg">\r
                      <img class="rounded-circle" \r
                           [src]="getImageUrl(formation.formateur?.avatar)" \r
                           alt="Formateur">\r
                    </div>\r
                    <div class="ms-2">\r
                      <h5 class="fs-18 fw-semibold">\r
                        <a href="javascript:void(0)">\r
                          {{ formation.formateur?.nom || 'Expert Formateur' }}\r
                        </a>\r
                      </h5>\r
                      <p class="mb-0">{{ formation.formateur?.fonction || 'Formateur Expert' }}</p>\r
                    </div>\r
                  </div>\r
                  \r
                  <div class="d-flex align-items-center">\r
                    <i class="fa-solid fa-star text-warning me-1"></i>\r
                    <i class="fa-solid fa-star text-warning me-1"></i>\r
                    <i class="fa-solid fa-star text-warning me-1"></i>\r
                    <i class="fa-solid fa-star text-warning me-1"></i>\r
                    <i class="fa-solid fa-star text-warning me-1"></i>\r
                    <p class="mb-0">4.5</p>\r
                  </div>\r
                </div>\r
                \r
                <div class="course-info align-items-center d-flex gap-2 gap-xl-3 mt-3 mb-3 flex-wrap">\r
                  <p class="fw-medium d-flex align-items-center fs-14 mb-0">\r
                    <img class="me-2" src="./assets/img/icons/play2.svg" alt="img">\r
                    {{ formation.formateur?.nb_formations || 1 }} Cours\r
                  </p>\r
                  <p class="fw-medium d-flex align-items-center fs-14 mb-0">\r
                    <img class="me-2" src="./assets/img/icons/book2.svg" alt="img">\r
                    {{ formation.modules?.length || 0 }}+ Modules\r
                  </p>\r
                  <p class="fw-medium d-flex align-items-center fs-14 mb-0">\r
                    <img class="me-2" src="./assets/img/icons/timer-start2.svg" alt="img">\r
                    {{ formation.duree_totale }}h\r
                  </p>\r
                  <p class="fw-medium d-flex align-items-center fs-14 mb-0">\r
                    <img class="me-2" src="./assets/img/icons/people.svg" alt="img">\r
                    {{ formation.nb_inscrits || 0 }} \xE9tudiants\r
                  </p>\r
                </div>\r
                \r
                <p>{{ formation.formateur?.bio || 'Expert dans son domaine avec plusieurs ann\xE9es d\\'exp\xE9rience en formation professionnelle.' }}</p>\r
              </div>\r
            </div>\r
\r
            <!-- Reviews Section -->\r
            <!-- <div class="card">\r
              <div class="card-body">\r
                <h5 class="subs-title mb-3">Avis des \xE9tudiants</h5>\r
                \r
                <div class="review-summary mb-4">\r
                  <div class="d-flex align-items-center mb-3">\r
                    <div class="rating-display me-4">\r
                      <h2 class="mb-0">4.0</h2>\r
                      <div class="stars">\r
                        <i class="fa-solid fa-star text-warning"></i>\r
                        <i class="fa-solid fa-star text-warning"></i>\r
                        <i class="fa-solid fa-star text-warning"></i>\r
                        <i class="fa-solid fa-star text-warning"></i>\r
                        <i class="fa-solid fa-star text-muted"></i>\r
                      </div>\r
                      <p class="mb-0 text-muted">{{ formation.avis?.length || 15 }} avis</p>\r
                    </div>\r
                  </div>\r
                </div> -->\r
\r
                <!-- Sample Review -->\r
                <!-- <div class="review-item border-bottom pb-3 mb-3">\r
                  <div class="d-flex align-items-center mb-2">\r
                    <div class="avatar avatar-sm me-2">\r
                      <img class="rounded-circle" src="./assets/img/avatar/avatar1.jpg" alt="User">\r
                    </div>\r
                    <div>\r
                      <h6 class="mb-0">Marie Dupont</h6>\r
                      <div class="stars-sm">\r
                        <i class="fa-solid fa-star text-warning"></i>\r
                        <i class="fa-solid fa-star text-warning"></i>\r
                        <i class="fa-solid fa-star text-warning"></i>\r
                        <i class="fa-solid fa-star text-warning"></i>\r
                        <i class="fa-solid fa-star text-warning"></i>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  <p class="mb-0">Excellente formation ! Les concepts sont tr\xE8s bien expliqu\xE9s et les exercices pratiques sont parfaits pour assimiler les notions.</p>\r
                </div> -->\r
              <!-- </div> -->\r
            <!-- </div> -->\r
\r
            <!-- Comments Form Card -->\r
            <!-- <div class="card">\r
              <div class="card-body">\r
                <h5 class="subs-title mb-3">Laisser un avis</h5>\r
                <form class="course-details-form" #commentForm="ngForm" (ngSubmit)="submitComment()">\r
                  <div class="row">\r
                    <div class="col-sm-6">\r
                      <div class="mb-3">\r
                        <label class="form-label fs-14 fw-medium text-gray-7">Nom *</label>\r
                        <input class="form-control fs-14 text-gray-7" \r
                               type="text" \r
                               [(ngModel)]="newComment.nom"\r
                               name="nom"\r
                               required>\r
                      </div>\r
                    </div>\r
                    <div class="col-sm-6">\r
                      <div class="mb-3">\r
                        <label class="form-label fs-14 fw-medium text-gray-7">Email *</label>\r
                        <input class="form-control fs-14 text-gray-7" \r
                               type="email" \r
                               [(ngModel)]="newComment.email"\r
                               name="email"\r
                               required>\r
                      </div>\r
                    </div>\r
                    <div class="col-12">\r
                      <div class="mb-3">\r
                        <label class="form-label fs-14 fw-medium text-gray-7">Note</label>\r
                        <div class="rating-input">\r
                          <i class="fa-solid fa-star" \r
                             *ngFor="let star of [1,2,3,4,5]; let i = index"\r
                             [class.text-warning]="i < (newComment.note || 0)"\r
                             [class.text-muted]="i >= (newComment.note || 0)"\r
                             (click)="setRating(i + 1)"></i>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div class="col-12">\r
                      <div class="mb-3">\r
                        <label class="form-label fs-14 fw-medium text-gray-7">Votre avis *</label>\r
                        <textarea class="form-control fs-14 text-gray-7"\r
                                  rows="4"\r
                                  [(ngModel)]="newComment.commentaire"\r
                                  name="commentaire"\r
                                  placeholder="Partagez votre exp\xE9rience avec cette formation..."\r
                                  required></textarea>\r
                      </div>\r
                    </div>\r
                    <div class="col-12">\r
                      <button type="submit" \r
                              class="btn btn-primary"\r
                              [disabled]="submittingComment || !commentForm.valid">\r
                        {{ submittingComment ? 'Envoi en cours...' : 'Publier l\\'avis' }}\r
                      </button>\r
                    </div>\r
                  </div>\r
                </form>\r
              </div>\r
            </div> -->\r
          </div>\r
        </div>\r
\r
        <!-- Sidebar -->\r
        <div class="col-lg-4">\r
          <div class="course-sidebar-sec">\r
            \r
            <!-- Video/Price Card -->\r
            <div class="card">\r
              <div class="card-body">\r
                \r
                <!-- Video Preview -->\r
                <div class="position-relative mb-4" *ngIf="isYouTubeUrl(formation.media_url)">\r
      <div class="ratio ratio-16x9">\r
        <iframe \r
          [src]="getYouTubeEmbedUrl(formation.media_url)"\r
          title="Aper\xE7u de la formation"\r
          frameborder="0"\r
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\r
          allowfullscreen>\r
        </iframe>\r
      </div>\r
    </div>\r
    \r
    <!-- Regular Video Preview -->\r
    <div class="position-relative mb-4" *ngIf="getMediaUrl(formation.media_url) && !isYouTubeUrl(formation.media_url)">\r
      <video class="img-fluid w-100 rounded" \r
             controls\r
             [poster]="getImageUrl(formation.image_couverture)">\r
        <source [src]="getMediaUrl(formation.media_url)" type="video/mp4">\r
        Votre navigateur ne supporte pas la vid\xE9o.\r
      </video>\r
    </div>\r
    \r
    <!-- Image Preview if no video -->\r
    <div class="position-relative mb-4" *ngIf="!formation.media_url">\r
      <img class="img-fluid rounded w-100" \r
           [src]="getImageUrl(formation.image_couverture)" \r
           alt="Couverture du cours"\r
           [style.height.px]="200"\r
           style="object-fit: cover;">\r
      \r
      <!-- Play button overlay for YouTube -->\r
      <div class="play-button-overlay" \r
           *ngIf="formation.media_url && isYouTubeUrl(formation.media_url)"\r
           (click)="openYouTubeVideo(formation.media_url)">\r
        <i class="fas fa-play-circle fa-3x text-white"></i>\r
      </div>\r
    </div>\r
                \r
                <!-- Image Preview if no video\r
                <div class="position-relative mb-4" *ngIf="!formation.media_url">\r
                  <img class="img-fluid rounded w-100" \r
                       [src]="getImageUrl(formation.image_couverture)" \r
                       alt="Couverture du cours"\r
                       [style.height.px]="200"\r
                       style="object-fit: cover;">\r
                </div> -->\r
                \r
                <!-- Price Section -->\r
                <div class="text-center mb-4">\r
                  <h2 *ngIf="formation.prix == 0 || formation.prix == '0.00'" class="text-success fs-30 mb-0">\r
                    GRATUIT\r
                  </h2>\r
                  <h2 *ngIf="formation.prix > 0" class="text-primary fs-30 mb-0">\r
                    {{ formation.prix }}FCFA\r
                  </h2>\r
                  <p class="text-muted mb-0" *ngIf="formation.prix_original && formation.prix_original > formation.prix">\r
                    <span class="text-decoration-line-through">{{ formation.prix_original }}FCFA</span>\r
                    <span class="badge bg-success ms-2">\r
                      -{{ calculateDiscount(formation.prix, formation.prix_original) }}%\r
                    </span>\r
                  </p>\r
                </div>\r
                \r
                <!-- Enrollment Button -->\r
                <div class="d-grid mb-3">\r
                  <button class="btn btn-primary btn-lg" \r
                          *ngIf="formation.prix == 0 || formation.prix == '0.00'">\r
                    <i class="fas fa-play me-2"></i>\r
                    Commencer gratuitement\r
                  </button>\r
                  <button class="btn btn-primary btn-lg" \r
                          *ngIf="formation.prix > 0 && currentUser?.role_id === 2">\r
                    <i class="isax isax-document-text5 me-2"></i>\r
                    Demander la formation\r
                  </button>\r
                </div>\r
                \r
                <!-- Action Buttons -->\r
                <div class="d-flex gap-2 mb-3">\r
                  <button class="btn btn-outline-secondary flex-fill">\r
                    <i class="fas fa-heart me-1"></i>\r
                    Favoris\r
                  </button>\r
                  <button class="btn btn-outline-secondary flex-fill" (click)="shareFormation()">\r
                    <i class="fas fa-share me-1"></i>\r
                    Partager\r
                  </button>\r
                </div>\r
                \r
                <!-- Money back guarantee -->\r
                <div class="text-center">\r
                  <p class="text-muted fs-14 mb-0">\r
                    <i class="fas fa-shield-alt me-1"></i>\r
                    Garantie de remboursement de 30 jours\r
                  </p>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Course Includes Card -->\r
            <div class="card">\r
              <div class="card-body">\r
                <h5 class="subs-title mb-3">Ce cours comprend :</h5>\r
                <ul class="list-unstyled course-includes">\r
                  <li class="mb-2">\r
                    <i class="fas fa-play-circle text-primary me-2"></i>\r
                    {{ formation.duree_totale }}h de contenu vid\xE9o\r
                  </li>\r
                  <li class="mb-2">\r
                    <i class="fas fa-download text-primary me-2"></i>\r
                    {{ formation.modules?.length || 0 }} ressources t\xE9l\xE9chargeables\r
                  </li>\r
                  <li class="mb-2">\r
                    <i class="fas fa-infinity text-primary me-2"></i>\r
                    Acc\xE8s \xE0 vie complet\r
                  </li>\r
                  <li class="mb-2">\r
                    <i class="fas fa-mobile-alt text-primary me-2"></i>\r
                    Acc\xE8s sur mobile et tablette\r
                  </li>\r
                  <li class="mb-2" *ngIf="formation.est_certifiante">\r
                    <i class="fas fa-certificate text-primary me-2"></i>\r
                    Certificat d'ach\xE8vement\r
                  </li>\r
                  <li class="mb-0">\r
                    <i class="fas fa-users text-primary me-2"></i>\r
                    Acc\xE8s \xE0 la communaut\xE9\r
                  </li>\r
                </ul>\r
              </div>\r
            </div>\r
\r
            <!-- Course Features Card -->\r
            <div class="card">\r
              <div class="card-body">\r
                <h5 class="subs-title mb-3">Informations sur le cours</h5>\r
                <ul class="list-unstyled course-features">\r
                  <li class="d-flex justify-content-between align-items-center mb-2">\r
                    <span>\r
                      <i class="fas fa-users text-muted me-2"></i>\r
                      \xC9tudiants inscrits\r
                    </span>\r
                    <strong>{{ formation.nb_inscrits || 0 }}</strong>\r
                  </li>\r
                  <li class="d-flex justify-content-between align-items-center mb-2">\r
                    <span>\r
                      <i class="fas fa-clock text-muted me-2"></i>\r
                      Dur\xE9e totale\r
                    </span>\r
                    <strong>{{ formation.duree_totale }}h</strong>\r
                  </li>\r
                  <li class="d-flex justify-content-between align-items-center mb-2">\r
                    <span>\r
                      <i class="fas fa-book text-muted me-2"></i>\r
                      Nombre de modules\r
                    </span>\r
                    <strong>{{ formation.modules?.length || 0 }}</strong>\r
                  </li>\r
                  <li class="d-flex justify-content-between align-items-center mb-2">\r
                    <span>\r
                      <i class="fas fa-signal text-muted me-2"></i>\r
                      Niveau\r
                    </span>\r
                    <strong>{{ getNiveauLabel(formation.niveau) }}</strong>\r
                  </li>\r
                  <li class="d-flex justify-content-between align-items-center mb-2">\r
                    <span>\r
                      <i class="fas fa-globe text-muted me-2"></i>\r
                      Langue\r
                    </span>\r
                    <strong>{{ getLangueLabel(formation.langue) }}</strong>\r
                  </li>\r
                  <li class="d-flex justify-content-between align-items-center mb-0">\r
                    <span>\r
                      <i class="fas fa-calendar text-muted me-2"></i>\r
                      Derni\xE8re mise \xE0 jour\r
                    </span>\r
                    <strong>{{ formatDate(formation.updated_at) }}</strong>\r
                  </li>\r
                </ul>\r
              </div>\r
            </div>\r
\r
            <!-- Tags Card -->\r
            <div class="card" *ngIf="getTagsList(formation.tags).length > 0">\r
              <div class="card-body">\r
                <h5 class="subs-title mb-3">Tags</h5>\r
                <div class="tags-container">\r
                  <span class="badge bg-light text-dark me-1 mb-1" \r
                        *ngFor="let tag of getTagsList(formation.tags)">\r
                    {{ tag }}\r
                  </span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
</div>\r
\r
<!-- No Formation Found -->\r
<div *ngIf="!formation && !loading && !error" class="container">\r
  <div class="row justify-content-center">\r
    <div class="col-md-6 text-center py-5">\r
      <i class="fas fa-search fa-3x text-muted mb-3"></i>\r
      <h4>Formation non trouv\xE9e</h4>\r
      <p class="text-muted">La formation que vous recherchez n'existe pas ou n'est plus disponible.</p>\r
      <a routerLink="/formations" class="btn btn-primary">\r
        <i class="fas fa-arrow-left me-2"></i>\r
        Retour aux formations\r
      </a>\r
    </div>\r
  </div>\r
</div>`, styles: ['/* src/app/features/courses/course-details/course-details.component.scss */\n.play-button-overlay {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n  transition: all 0.3s ease;\n  opacity: 0.8;\n}\n.play-button-overlay:hover {\n  opacity: 1;\n  transform: translate(-50%, -50%) scale(1.1);\n}\n.ratio {\n  position: relative;\n}\n.ratio::before {\n  display: block;\n  padding-top: var(--bs-aspect-ratio);\n  content: "";\n}\n.ratio > * {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.ratio-16x9 {\n  --bs-aspect-ratio: calc(9 / 16 * 100%);\n}\n/*# sourceMappingURL=course-details.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: FormationService }, { type: AuthService }, { type: Location }, { type: DomSanitizer }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseDetailsComponent, { className: "CourseDetailsComponent", filePath: "src/app/features/courses/course-details/course-details.component.ts", lineNumber: 23 });
})();
export {
  CourseDetailsComponent
};
//# sourceMappingURL=chunk-DRBA2K5V.js.map
