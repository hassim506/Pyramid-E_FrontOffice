import {
  FormationService
} from "./chunk-R5DFAXQH.js";
import {
  LightgalleryModule
} from "./chunk-EKBW3B5U.js";
import {
  require_aos
} from "./chunk-EOCJYYK5.js";
import {
  AuthService
} from "./chunk-GD4TWLVQ.js";
import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-F53JZPBU.js";
import {
  FormsModule
} from "./chunk-IKOSZIEY.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-M6KR3YQW.js";
import {
  DomSanitizer
} from "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  Location,
  NgForOf,
  NgIf,
  SlicePipe
} from "./chunk-5DIP3EXV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  Subject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
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
} from "./chunk-VTSSTHJF.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-4MWRP73S.js";

// src/app/features/courses/course-details/course-details.component.ts
var import_aos = __toESM(require_aos());
var _c0 = () => ["/student/students-explorer"];
var _c1 = (a0) => ({ formationId: a0 });
function CourseDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementEnd();
  }
}
function CourseDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 8);
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
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.success, "\n");
  }
}
function CourseDetailsComponent_div_3_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 76);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.averageRating, "/5");
  }
}
function CourseDetailsComponent_div_3_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getLangueLabel(ctx_r0.formation.langue), " ");
  }
}
function CourseDetailsComponent_div_3_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275text(2, " Certifiante ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailsComponent_div_3_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275element(1, "img", 81);
    \u0275\u0275elementStart(2, "div")(3, "div", 82);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 83);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.getImageUrl(ctx_r0.formation.formateur == null ? null : ctx_r0.formation.formateur.avatar), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r0.formation.formateur == null ? null : ctx_r0.formation.formateur.nom) || "Expert Formateur");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.formation.formateur == null ? null : ctx_r0.formation.formateur.fonction) || "Formateur");
  }
}
function CourseDetailsComponent_div_3_ng_container_63_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3);
  }
}
function CourseDetailsComponent_div_3_ng_container_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 84);
    \u0275\u0275element(2, "i", 10);
    \u0275\u0275text(3, " Comp\xE9tences acquises ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 85);
    \u0275\u0275template(5, CourseDetailsComponent_div_3_ng_container_63_li_5_Template, 2, 1, "li", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.getCompetencesList(ctx_r0.formation.competences_acquises));
  }
}
function CourseDetailsComponent_div_3_ng_container_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 84);
    \u0275\u0275element(2, "i", 87);
    \u0275\u0275text(3, " Pr\xE9requis ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 88);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formation.prerequis);
  }
}
function CourseDetailsComponent_div_3_ng_container_65_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r4);
  }
}
function CourseDetailsComponent_div_3_ng_container_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 84);
    \u0275\u0275element(2, "i", 89);
    \u0275\u0275text(3, " Outils requis ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 85);
    \u0275\u0275template(5, CourseDetailsComponent_div_3_ng_container_65_li_5_Template, 2, 1, "li", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.getOutilsList(ctx_r0.formation.outils_requis));
  }
}
function CourseDetailsComponent_div_3_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91)(2, "div", 92)(3, "div", 93);
    \u0275\u0275text(4, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 94);
    \u0275\u0275text(7, "Introduction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 95);
    \u0275\u0275text(9, "Contenu en pr\xE9paration");
    \u0275\u0275elementEnd()()()()();
  }
}
function CourseDetailsComponent_div_3_div_75_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", module_r6.duree_estimee, "min");
  }
}
function CourseDetailsComponent_div_3_div_75_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103)(1, "div", 104);
    \u0275\u0275element(2, "i", 105);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 106)(6, "button", 107);
    \u0275\u0275listener("click", function CourseDetailsComponent_div_3_div_75_div_13_div_1_Template_button_click_6_listener() {
      const section_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.previewSection(section_r8));
    });
    \u0275\u0275text(7, "Aper\xE7u");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 108);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r8 = ctx.$implicit;
    const j_r9 = ctx.index;
    const i_r10 = \u0275\u0275nextContext(2).index;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3("", i_r10 + 1, ".", j_r9 + 1, " ", section_r8.titre);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", section_r8.duree_estimee || 5, "min");
  }
}
function CourseDetailsComponent_div_3_div_75_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275text(1, " Contenu en cours de pr\xE9paration ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailsComponent_div_3_div_75_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275template(1, CourseDetailsComponent_div_3_div_75_div_13_div_1_Template, 10, 4, "div", 101)(2, CourseDetailsComponent_div_3_div_75_div_13_div_2_Template, 2, 0, "div", 102);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", module_r6.sections);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(module_r6.sections == null ? null : module_r6.sections.length));
  }
}
function CourseDetailsComponent_div_3_div_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 96);
    \u0275\u0275listener("click", function CourseDetailsComponent_div_3_div_75_Template_div_click_1_listener() {
      const module_r6 = \u0275\u0275restoreView(_r5).$implicit;
      return \u0275\u0275resetView(module_r6._open = !module_r6._open);
    });
    \u0275\u0275elementStart(2, "div", 92)(3, "div", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 94);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 95);
    \u0275\u0275text(9);
    \u0275\u0275template(10, CourseDetailsComponent_div_3_div_75_span_10_Template, 2, 1, "span", 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 97);
    \u0275\u0275element(12, "i", 98);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, CourseDetailsComponent_div_3_div_75_div_13_Template, 3, 2, "div", 99);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r6 = ctx.$implicit;
    const i_r10 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275classProp("open", module_r6._open);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r10 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(module_r6.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", (module_r6.sections == null ? null : module_r6.sections.length) || 0, " le\xE7on", ((module_r6.sections == null ? null : module_r6.sections.length) || 0) !== 1 ? "s" : "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", module_r6.duree_estimee);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", module_r6._open);
  }
}
function CourseDetailsComponent_div_3_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "h2", 41);
    \u0275\u0275text(3, "\xC0 propos du formateur");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 42)(5, "div", 110);
    \u0275\u0275element(6, "img", 111);
    \u0275\u0275elementStart(7, "div")(8, "div", 112);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 113);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 114)(13, "div", 115);
    \u0275\u0275element(14, "i", 26);
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " formations ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 115);
    \u0275\u0275element(19, "i", 28);
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " apprenants ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 115);
    \u0275\u0275element(24, "i", 76);
    \u0275\u0275elementStart(25, "strong");
    \u0275\u0275text(26, "4.5");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, "/5 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "p", 116);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r0.getImageUrl(ctx_r0.formation.formateur == null ? null : ctx_r0.formation.formateur.avatar), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r0.formation.formateur == null ? null : ctx_r0.formation.formateur.nom) || "Expert Formateur");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.formation.formateur == null ? null : ctx_r0.formation.formateur.fonction) || "Formateur Expert");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.formation.formateur == null ? null : ctx_r0.formation.formateur.nb_formations) || 1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formation.nb_inscrits || 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.formation.formateur == null ? null : ctx_r0.formation.formateur.bio) || "Expert dans son domaine avec plusieurs ann\xE9es d'exp\xE9rience en formation professionnelle.", " ");
  }
}
function CourseDetailsComponent_div_3_div_78_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 119);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r11);
  }
}
function CourseDetailsComponent_div_3_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "h2", 41);
    \u0275\u0275text(3, "Mots-cl\xE9s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 42)(5, "div", 117);
    \u0275\u0275template(6, CourseDetailsComponent_div_3_div_78_span_6_Template, 2, 1, "span", 118);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.getTagsList(ctx_r0.formation.tags));
  }
}
function CourseDetailsComponent_div_3_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275element(1, "iframe", 121);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.getYouTubeEmbedUrl(ctx_r0.formation.media_url), \u0275\u0275sanitizeResourceUrl);
  }
}
function CourseDetailsComponent_div_3_video_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "video", 122);
    \u0275\u0275element(1, "source", 123);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("poster", ctx_r0.getImageUrl(ctx_r0.formation.image_couverture), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.getMediaUrl(ctx_r0.formation.media_url), \u0275\u0275sanitizeUrl);
  }
}
function CourseDetailsComponent_div_3_img_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 124);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.getImageUrl(ctx_r0.formation.image_couverture), \u0275\u0275sanitizeUrl);
  }
}
function CourseDetailsComponent_div_3_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 125);
  }
}
function CourseDetailsComponent_div_3_a_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 126);
    \u0275\u0275element(1, "i", 127);
    \u0275\u0275text(2, " Modifier la formation ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", "/courses/instructor-course-edit/" + ctx_r0.formation.id, \u0275\u0275sanitizeUrl);
  }
}
function CourseDetailsComponent_div_3_a_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 126);
    \u0275\u0275element(1, "i", 89);
    \u0275\u0275text(2, " G\xE9rer la formation ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", "/courses/instructor-course-edit/" + ctx_r0.formation.id, \u0275\u0275sanitizeUrl);
  }
}
function CourseDetailsComponent_div_3_button_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 128);
    \u0275\u0275element(1, "i", 129);
    \u0275\u0275text(2, " Demander la formation ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c0))("queryParams", \u0275\u0275pureFunction1(3, _c1, ctx_r0.formation.id));
  }
}
function CourseDetailsComponent_div_3_li_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275text(2, " Certificat d'ach\xE8vement");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "section", 11);
    \u0275\u0275element(2, "div", 12)(3, "div", 13);
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15)(6, "div", 16)(7, "a", 17);
    \u0275\u0275text(8, "Formations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "slice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 18)(19, "div", 19)(20, "div", 20);
    \u0275\u0275element(21, "i", 21);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h1", 22);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 23);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 24)(28, "div", 25);
    \u0275\u0275element(29, "i", 26);
    \u0275\u0275elementStart(30, "strong");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " modules ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 25);
    \u0275\u0275element(34, "i", 27);
    \u0275\u0275elementStart(35, "strong");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " de contenu ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 25);
    \u0275\u0275element(39, "i", 28);
    \u0275\u0275elementStart(40, "strong");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " inscrits ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, CourseDetailsComponent_div_3_div_43_Template, 4, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 30)(45, "span", 31);
    \u0275\u0275element(46, "i", 32);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 33);
    \u0275\u0275element(49, "i", 34);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, CourseDetailsComponent_div_3_span_51_Template, 3, 1, "span", 35)(52, CourseDetailsComponent_div_3_span_52_Template, 3, 0, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(53, CourseDetailsComponent_div_3_div_53_Template, 7, 3, "div", 37);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(54, "div", 15)(55, "div", 38)(56, "div")(57, "div", 39)(58, "div", 40)(59, "h2", 41);
    \u0275\u0275text(60, "Aper\xE7u de la formation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 42);
    \u0275\u0275element(62, "div", 43);
    \u0275\u0275template(63, CourseDetailsComponent_div_3_ng_container_63_Template, 6, 1, "ng-container", 3)(64, CourseDetailsComponent_div_3_ng_container_64_Template, 6, 1, "ng-container", 3)(65, CourseDetailsComponent_div_3_ng_container_65_Template, 6, 1, "ng-container", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 39)(67, "div", 40)(68, "h2", 41);
    \u0275\u0275text(69, "Contenu du cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span", 44);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 45)(73, "div", 46);
    \u0275\u0275template(74, CourseDetailsComponent_div_3_div_74_Template, 10, 0, "div", 47)(75, CourseDetailsComponent_div_3_div_75_Template, 14, 8, "div", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(76, "div", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(77, CourseDetailsComponent_div_3_div_77_Template, 30, 6, "div", 50)(78, CourseDetailsComponent_div_3_div_78_Template, 7, 1, "div", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 51)(80, "div", 52)(81, "div", 53);
    \u0275\u0275template(82, CourseDetailsComponent_div_3_div_82_Template, 2, 1, "div", 54)(83, CourseDetailsComponent_div_3_video_83_Template, 2, 2, "video", 55)(84, CourseDetailsComponent_div_3_img_84_Template, 1, 1, "img", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 57);
    \u0275\u0275template(86, CourseDetailsComponent_div_3_div_86_Template, 1, 0, "div", 58)(87, CourseDetailsComponent_div_3_a_87_Template, 3, 1, "a", 59)(88, CourseDetailsComponent_div_3_a_88_Template, 3, 1, "a", 59)(89, CourseDetailsComponent_div_3_button_89_Template, 3, 5, "button", 60);
    \u0275\u0275elementStart(90, "div", 61)(91, "button", 62);
    \u0275\u0275element(92, "i", 63);
    \u0275\u0275text(93, " Favoris ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "button", 64);
    \u0275\u0275listener("click", function CourseDetailsComponent_div_3_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.shareFormation());
    });
    \u0275\u0275element(95, "i", 65);
    \u0275\u0275text(96, " Partager ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "div", 66);
    \u0275\u0275element(98, "i", 67);
    \u0275\u0275text(99, " Garantie remboursement 30 jours ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(100, "div", 39)(101, "div", 40)(102, "h2", 41);
    \u0275\u0275text(103, "Ce cours comprend");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 42)(105, "ul", 68)(106, "li");
    \u0275\u0275element(107, "i", 69);
    \u0275\u0275text(108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "li");
    \u0275\u0275element(110, "i", 70);
    \u0275\u0275text(111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "li");
    \u0275\u0275element(113, "i", 71);
    \u0275\u0275text(114, " Acc\xE8s \xE0 vie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "li");
    \u0275\u0275element(116, "i", 72);
    \u0275\u0275text(117, " Acc\xE8s mobile et tablette");
    \u0275\u0275elementEnd();
    \u0275\u0275template(118, CourseDetailsComponent_div_3_li_118_Template, 3, 0, "li", 3);
    \u0275\u0275elementStart(119, "li");
    \u0275\u0275element(120, "i", 28);
    \u0275\u0275text(121, " Acc\xE8s \xE0 la communaut\xE9");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(122, "div", 39)(123, "div", 40)(124, "h2", 41);
    \u0275\u0275text(125, "Informations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "div", 42)(127, "table", 73)(128, "tr")(129, "td");
    \u0275\u0275element(130, "i", 28);
    \u0275\u0275text(131, " Inscrits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "td");
    \u0275\u0275text(133);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "tr")(135, "td");
    \u0275\u0275element(136, "i", 27);
    \u0275\u0275text(137, " Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "td");
    \u0275\u0275text(139);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(140, "tr")(141, "td");
    \u0275\u0275element(142, "i", 26);
    \u0275\u0275text(143, " Modules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "td");
    \u0275\u0275text(145);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(146, "tr")(147, "td");
    \u0275\u0275element(148, "i", 32);
    \u0275\u0275text(149, " Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "td");
    \u0275\u0275text(151);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(152, "tr")(153, "td");
    \u0275\u0275element(154, "i", 74);
    \u0275\u0275text(155, " Langue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "td");
    \u0275\u0275text(157);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(158, "tr")(159, "td");
    \u0275\u0275element(160, "i", 75);
    \u0275\u0275text(161, " Mis \xE0 jour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "td");
    \u0275\u0275text(163);
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-image", "url(" + ctx_r0.getImageUrl(ctx_r0.formation.image_couverture) + ")");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate((ctx_r0.formation.categorie == null ? null : ctx_r0.formation.categorie.nom) || "G\xE9n\xE9ral");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(17, 43, ctx_r0.formation.titre, 0, 40), "", (ctx_r0.formation.titre == null ? null : ctx_r0.formation.titre.length) > 40 ? "\u2026" : "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.formation.categorie == null ? null : ctx_r0.formation.categorie.nom) || "Formation", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formation.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formation.short_description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.formation.modules == null ? null : ctx_r0.formation.modules.length) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.formation.duree_totale || 0, "h");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formation.nb_inscrits || 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.averageRating > 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getNiveauLabel(ctx_r0.formation.niveau), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getTypeFormationLabel(ctx_r0.formation.type_formation), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.langue);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.est_certifiante);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.formateur);
    \u0275\u0275advance(9);
    \u0275\u0275property("innerHTML", ctx_r0.formation.description, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getCompetencesList(ctx_r0.formation.competences_acquises).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.prerequis);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getOutilsList(ctx_r0.formation.outils_requis).length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", (ctx_r0.formation.modules == null ? null : ctx_r0.formation.modules.length) || 0, " modules \xB7 ", ctx_r0.formation.duree_totale || 0, "h");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !(ctx_r0.formation.modules == null ? null : ctx_r0.formation.modules.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.formation.modules);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.formation.formateur);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getTagsList(ctx_r0.formation.tags).length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.isYouTubeUrl(ctx_r0.formation.media_url));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getMediaUrl(ctx_r0.formation.media_url) && !ctx_r0.isYouTubeUrl(ctx_r0.formation.media_url));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.formation.media_url);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.role_id) === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.role_id) === 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.role_id) === 1 || (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.role_id) === 4 || (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.role_id) === 5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.role_id) === 2);
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formation.duree_totale || 0, "h de contenu vid\xE9o");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.formation.modules == null ? null : ctx_r0.formation.modules.length) || 0, " ressources t\xE9l\xE9chargeables");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.formation.est_certifiante);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r0.formation.nb_inscrits || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.formation.duree_totale || 0, "h");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r0.formation.modules == null ? null : ctx_r0.formation.modules.length) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.getNiveauLabel(ctx_r0.formation.niveau));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.getLangueLabel(ctx_r0.formation.langue));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.formation.updated_at));
  }
}
function CourseDetailsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275element(1, "i", 131);
    \u0275\u0275elementStart(2, "h4", 132);
    \u0275\u0275text(3, "Formation introuvable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 133);
    \u0275\u0275text(5, "La formation que vous recherchez n'existe pas ou n'est plus disponible.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 134);
    \u0275\u0275element(7, "i", 135);
    \u0275\u0275text(8, " Retour aux formations ");
    \u0275\u0275elementEnd()();
  }
}
var STORAGE_BASE = environment.apiUrl.replace(/\/api$/, "") + "/storage";
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
      this.formationId = params.get("id") ? parseInt(params.get("id"), 10) : null;
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
      this.formation.image_couverture = `${STORAGE_BASE}/${this.formation.image_couverture}`;
    }
    if (this.formation.formateur?.avatar && !this.formation.formateur.avatar.startsWith("http")) {
      this.formation.formateur.avatar = `${STORAGE_BASE}/${this.formation.formateur.avatar}`;
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
      resourceUrl = `${STORAGE_BASE}/${resourceUrl}`;
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
    if (imageName.startsWith(STORAGE_BASE + "/") && !imageName.includes("/formations/")) {
      const fileName = imageName.replace(STORAGE_BASE + "/", "");
      const correctedUrl = `${STORAGE_BASE}/formations/${fileName}`;
      console.log("URL corrected:", correctedUrl);
      return correctedUrl;
    }
    if (imageName.startsWith("http://") || imageName.startsWith("https://")) {
      console.log("URL already complete:", imageName);
      return imageName;
    }
    const finalUrl = `${STORAGE_BASE}/formations/${imageName}`;
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
    return `${STORAGE_BASE}/formations/videos/${mediaName}`;
  }
  static \u0275fac = function CourseDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(DomSanitizer));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseDetailsComponent, selectors: [["app-course-details"]], decls: 5, vars: 5, consts: [["class", "cd-loader", 4, "ngIf"], ["class", "cd-alert cd-alert--err", 4, "ngIf"], ["class", "cd-alert cd-alert--ok", 4, "ngIf"], [4, "ngIf"], ["class", "container", "style", "padding:80px 0; text-align:center", 4, "ngIf"], [1, "cd-loader"], [1, "cd-spin"], [1, "cd-alert", "cd-alert--err"], [1, "isax", "isax-warning-2"], [1, "cd-alert", "cd-alert--ok"], [1, "isax", "isax-tick-circle"], [1, "cd-hero"], [1, "cd-hero__bg"], [1, "cd-hero__overlay"], [1, "cd-hero__body"], [1, "container"], [1, "cd-hero-breadcrumb"], ["routerLink", "/courses"], [1, "row", "align-items-start"], [1, "col-lg-8"], [1, "cd-hero-cat"], [1, "isax", "isax-category"], [1, "cd-hero-title"], [1, "cd-hero-desc"], [1, "cd-hero-meta"], [1, "cd-hero-stat"], [1, "isax", "isax-book-1"], [1, "isax", "isax-clock"], [1, "isax", "isax-people"], ["class", "cd-hero-stat", 4, "ngIf"], [1, "cd-hero-badges"], [1, "cd-badge", "cd-badge--gold"], [1, "isax", "isax-signal"], [1, "cd-badge", "cd-badge--green"], [1, "isax", "isax-monitor"], ["class", "cd-badge cd-badge--gray", 4, "ngIf"], ["class", "cd-badge cd-badge--certif", 4, "ngIf"], ["class", "cd-hero-instructor", "style", "margin-top:20px", 4, "ngIf"], [1, "cd-layout"], [1, "cd-card"], [1, "cd-card-head"], [1, "cd-card-title"], [1, "cd-card-body"], [1, "cd-description", 3, "innerHTML"], [1, "cd-card-sub"], [1, "cd-card-body", 2, "padding-top", "12px", "padding-bottom", "0"], [1, "cd-accordion"], ["class", "cd-acc-item", 4, "ngIf"], ["class", "cd-acc-item", 4, "ngFor", "ngForOf"], [2, "padding-bottom", "4px"], ["class", "cd-card", 4, "ngIf"], [1, "cd-sidebar"], [1, "cd-price-card"], [1, "cd-price-thumb"], ["class", "ratio ratio-16x9", 4, "ngIf"], ["controls", "", 3, "poster", 4, "ngIf"], ["alt", "Couverture", 3, "src", 4, "ngIf"], [1, "cd-price-body"], ["class", "cd-price-tag", 4, "ngIf"], ["target", "_blank", "class", "cd-enroll-btn cd-enroll-btn--primary", "style", "text-decoration:none;", 3, "href", 4, "ngIf"], ["class", "cd-enroll-btn cd-enroll-btn--green", 3, "routerLink", "queryParams", 4, "ngIf"], [1, "cd-action-row", 2, "margin-top", "10px"], [1, "cd-action-btn"], [1, "isax", "isax-heart"], [1, "cd-action-btn", 3, "click"], [1, "isax", "isax-send-2"], [1, "cd-guarantee"], [1, "isax", "isax-shield-tick"], [1, "cd-includes"], [1, "isax", "isax-play-circle"], [1, "isax", "isax-document-download"], [1, "isax", "isax-infinity"], [1, "isax", "isax-mobile"], [1, "cd-info-table"], [1, "isax", "isax-global"], [1, "isax", "isax-calendar-1"], [1, "isax", "isax-star"], [1, "cd-badge", "cd-badge--gray"], [1, "cd-badge", "cd-badge--certif"], [1, "isax", "isax-award"], [1, "cd-hero-instructor", 2, "margin-top", "20px"], ["alt", "Formateur", 1, "cd-hero-instructor__avatar", 3, "src"], [1, "cd-hero-instructor__name"], [1, "cd-hero-instructor__role"], [1, "cd-section-label", 2, "margin-top", "20px"], [1, "cd-check-list"], [4, "ngFor", "ngForOf"], [1, "isax", "isax-info-circle"], [1, "cd-description"], [1, "isax", "isax-setting-2"], [1, "cd-acc-item"], [1, "cd-acc-head"], [1, "cd-acc-head__left"], [1, "cd-acc-head__num"], [1, "cd-acc-head__title"], [1, "cd-acc-head__meta"], [1, "cd-acc-head", 3, "click"], [1, "cd-acc-head__right"], [1, "isax", "isax-arrow-down", "cd-acc-head__arrow"], ["class", "cd-acc-body", 4, "ngIf"], [1, "cd-acc-body"], ["class", "cd-section-row", 4, "ngFor", "ngForOf"], ["class", "cd-section-row", "style", "justify-content:center; color:#9CA3AF;", 4, "ngIf"], [1, "cd-section-row"], [1, "cd-section-row__left"], [1, "isax", "isax-play-circle", "cd-section-row__icon"], [1, "cd-section-row__right"], [1, "cd-preview-btn", 3, "click"], [1, "cd-section-row__dur"], [1, "cd-section-row", 2, "justify-content", "center", "color", "#9CA3AF"], [1, "cd-instructor"], ["alt", "Formateur", 1, "cd-instructor__avatar", 3, "src"], [1, "cd-instructor__name"], [1, "cd-instructor__role"], [1, "cd-instructor-stats"], [1, "cd-inst-stat"], [1, "cd-instructor__bio"], [1, "cd-tags"], ["class", "cd-tag", 4, "ngFor", "ngForOf"], [1, "cd-tag"], [1, "ratio", "ratio-16x9"], ["title", "Aper\xE7u", "frameborder", "0", "allowfullscreen", "", 3, "src"], ["controls", "", 3, "poster"], ["type", "video/mp4", 3, "src"], ["alt", "Couverture", 3, "src"], [1, "cd-price-tag"], ["target", "_blank", 1, "cd-enroll-btn", "cd-enroll-btn--primary", 2, "text-decoration", "none", 3, "href"], [1, "isax", "isax-edit-2"], [1, "cd-enroll-btn", "cd-enroll-btn--green", 3, "routerLink", "queryParams"], [1, "isax", "isax-document-text"], [1, "container", 2, "padding", "80px 0", "text-align", "center"], [1, "isax", "isax-book-1", 2, "font-size", "3rem", "color", "#9CA3AF", "display", "block", "margin-bottom", "16px"], [2, "color", "#374151"], [2, "color", "#9CA3AF", "font-size", "14px"], ["routerLink", "/courses", 1, "cd-enroll-btn", "cd-enroll-btn--green", 2, "display", "inline-flex", "width", "auto", "padding", "10px 24px", "text-decoration", "none"], [1, "isax", "isax-arrow-left"]], template: function CourseDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CourseDetailsComponent_div_0_Template, 2, 0, "div", 0)(1, CourseDetailsComponent_div_1_Template, 3, 1, "div", 1)(2, CourseDetailsComponent_div_2_Template, 3, 1, "div", 2)(3, CourseDetailsComponent_div_3_Template, 164, 47, "div", 3)(4, CourseDetailsComponent_div_4_Template, 9, 0, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.formation && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.formation && !ctx.loading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, LightgalleryModule, FormsModule, SlicePipe], styles: [`

.cd-hero[_ngcontent-%COMP%] {
  position: relative;
  background: #111827;
  overflow: hidden;
  min-height: 340px;
  display: flex;
  align-items: center;
}
.cd-hero__bg[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: brightness(0.35) saturate(0.7);
  transition: transform 6s ease;
}
.cd-hero[_ngcontent-%COMP%]:hover   .cd-hero__bg[_ngcontent-%COMP%] {
  transform: scale(1.03);
}
.cd-hero__overlay[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(0, 0, 0, 0.55) 100%);
}
.cd-hero__body[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  padding: 48px 0 40px;
  width: 100%;
}
.cd-hero-breadcrumb[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 18px;
}
.cd-hero-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}
.cd-hero-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  color: #fff;
}
.cd-hero-breadcrumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  color: rgba(255, 255, 255, 0.4);
}
.cd-hero-cat[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #BA7517;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 14px;
}
.cd-hero-title[_ngcontent-%COMP%] {
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  line-height: 1.25;
  margin-bottom: 10px;
}
.cd-hero-desc[_ngcontent-%COMP%] {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 20px;
  max-width: 600px;
}
.cd-hero-meta[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
}
.cd-hero-stat[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.85);
}
.cd-hero-stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #E9C97E;
  font-size: 15px;
}
.cd-hero-stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: #fff;
}
.cd-hero-instructor[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  width: fit-content;
}
.cd-hero-instructor__avatar[_ngcontent-%COMP%] {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #E9C97E;
}
.cd-hero-instructor__name[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 600;
  color: #fff;
}
.cd-hero-instructor__role[_ngcontent-%COMP%] {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
}
.cd-hero-badges[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}
.cd-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 500;
}
.cd-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 12px;
}
.cd-badge--gold[_ngcontent-%COMP%] {
  background: #FAEEDA;
  color: #8C5410;
  border: 1px solid #E9C97E;
}
.cd-badge--green[_ngcontent-%COMP%] {
  background: #E6F4F5;
  color: #004D54;
  border: 1px solid #9DD4D8;
}
.cd-badge--gray[_ngcontent-%COMP%] {
  background: #F3F4F6;
  color: #4B5563;
  border: 1px solid #E5E7EB;
}
.cd-badge--certif[_ngcontent-%COMP%] {
  background: #F0FDF4;
  color: #166534;
  border: 1px solid #BBF7D0;
}
.cd-layout[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 24px;
  padding: 28px 0 48px;
  align-items: start;
}
@media (max-width: 991px) {
  .cd-layout[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.cd-card[_ngcontent-%COMP%] {
  background: #fff;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 20px;
}
.cd-card[_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
}
.cd-card-head[_ngcontent-%COMP%] {
  padding: 18px 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cd-card-title[_ngcontent-%COMP%] {
  font-size: 15px;
  font-weight: 700;
  color: #111827;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
}
.cd-card-title[_ngcontent-%COMP%]::before {
  content: "";
  display: block;
  width: 3px;
  height: 18px;
  background: #BA7517;
  border-radius: 2px;
}
.cd-card-sub[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #9CA3AF;
}
.cd-card-body[_ngcontent-%COMP%] {
  padding: 16px 20px 20px;
}
.cd-section-label[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #BA7517;
  margin: 0 0 10px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.cd-section-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 14px;
}
.cd-description[_ngcontent-%COMP%] {
  font-size: 14px;
  color: #4B5563;
  line-height: 1.75;
}
.cd-check-list[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
@media (max-width: 600px) {
  .cd-check-list[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.cd-check-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  color: #4B5563;
}
.cd-check-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {
  content: "";
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  background: #E6F4F5 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M2 6l3 3 5-5' stroke='%23006F78' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/12px no-repeat;
  border-radius: 50%;
  margin-top: 1px;
}
.cd-accordion[_ngcontent-%COMP%] {
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  overflow: hidden;
}
.cd-acc-item[_ngcontent-%COMP%] {
  border-bottom: 1px solid #E5E7EB;
}
.cd-acc-item[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.cd-acc-head[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 16px;
  cursor: pointer;
  background: #F9FAFB;
  transition: background 0.15s;
}
.cd-acc-head[_ngcontent-%COMP%]:hover {
  background: rgb(242.88, 244.9, 246.92);
}
.cd-acc-head.open[_ngcontent-%COMP%] {
  background: #FAEEDA;
}
.cd-acc-head__left[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
}
.cd-acc-head__num[_ngcontent-%COMP%] {
  width: 26px;
  height: 26px;
  border-radius: 8px;
  background: #BA7517;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
}
.cd-acc-head__title[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 600;
  color: #111827;
}
.cd-acc-head__meta[_ngcontent-%COMP%] {
  font-size: 11px;
  color: #9CA3AF;
  margin-top: 2px;
}
.cd-acc-head__right[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
}
.cd-acc-head__arrow[_ngcontent-%COMP%] {
  font-size: 14px;
  color: #9CA3AF;
  transition: transform 0.2s;
}
.cd-acc-head.open[_ngcontent-%COMP%]   .cd-acc-head__arrow[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}
.cd-acc-body[_ngcontent-%COMP%] {
  padding: 0;
}
.cd-section-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px 10px 52px;
  border-top: 1px solid #E5E7EB;
  font-size: 13px;
}
.cd-section-row[_ngcontent-%COMP%]:hover {
  background: #F9FAFB;
}
.cd-section-row__left[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #4B5563;
}
.cd-section-row__icon[_ngcontent-%COMP%] {
  color: #006F78;
  font-size: 15px;
}
.cd-section-row__right[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
}
.cd-section-row__dur[_ngcontent-%COMP%] {
  font-size: 11px;
  color: #9CA3AF;
}
.cd-preview-btn[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 500;
  color: #BA7517;
  background: #FAEEDA;
  border: 1px solid #E9C97E;
  padding: 2px 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s;
}
.cd-preview-btn[_ngcontent-%COMP%]:hover {
  background: rgb(247.5714285714, 229.7428571429, 200.0285714286);
}
.cd-instructor[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
@media (max-width: 480px) {
  .cd-instructor[_ngcontent-%COMP%] {
    flex-direction: column;
  }
}
.cd-instructor__avatar[_ngcontent-%COMP%] {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 3px solid #E9C97E;
}
.cd-instructor__name[_ngcontent-%COMP%] {
  font-size: 16px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 2px;
}
.cd-instructor__role[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #006F78;
  font-weight: 500;
  margin-bottom: 6px;
}
.cd-instructor__bio[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #4B5563;
  line-height: 1.65;
}
.cd-instructor-stats[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin: 8px 0;
}
.cd-inst-stat[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: #4B5563;
}
.cd-inst-stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #BA7517;
  font-size: 14px;
}
.cd-inst-stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: #111827;
}
.cd-sidebar[_ngcontent-%COMP%] {
  position: sticky;
  top: 80px;
}
.cd-price-card[_ngcontent-%COMP%] {
  background: #fff;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
}
.cd-price-thumb[_ngcontent-%COMP%] {
  position: relative;
  height: 180px;
  overflow: hidden;
  background: #F3F4F6;
}
.cd-price-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cd-price-thumb[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  border: 0;
}
.cd-price-thumb[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cd-price-body[_ngcontent-%COMP%] {
  padding: 18px 20px 20px;
}
.cd-price-tag[_ngcontent-%COMP%] {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 16px;
}
.cd-price-main[_ngcontent-%COMP%] {
  font-size: 28px;
  font-weight: 800;
  color: #8C5410;
}
.cd-price-free[_ngcontent-%COMP%] {
  font-size: 28px;
  font-weight: 800;
  color: #006F78;
}
.cd-price-old[_ngcontent-%COMP%] {
  font-size: 14px;
  color: #9CA3AF;
  text-decoration: line-through;
}
.cd-price-discount[_ngcontent-%COMP%] {
  display: inline-block;
  background: #E6F4F5;
  color: #004D54;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 6px;
}
.cd-enroll-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 13px 20px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
}
.cd-enroll-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 16px;
}
.cd-enroll-btn--primary[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #BA7517 0%,
      #8C5410 100%);
  color: #fff;
  box-shadow: 0 4px 12px rgba(186, 117, 23, 0.35);
}
.cd-enroll-btn--primary[_ngcontent-%COMP%]:hover {
  box-shadow: 0 6px 18px rgba(186, 117, 23, 0.45);
  transform: translateY(-1px);
}
.cd-enroll-btn--green[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #006F78 0%,
      #004D54 100%);
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 111, 120, 0.3);
}
.cd-enroll-btn--green[_ngcontent-%COMP%]:hover {
  box-shadow: 0 6px 18px rgba(0, 111, 120, 0.4);
  transform: translateY(-1px);
}
.cd-action-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin: 10px 0;
}
.cd-action-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #E5E7EB;
  background: #F9FAFB;
  color: #4B5563;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.15s;
}
.cd-action-btn[_ngcontent-%COMP%]:hover {
  border-color: #BA7517;
  color: #BA7517;
  background: #FAEEDA;
}
.cd-guarantee[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 11px;
  color: #9CA3AF;
  margin-top: 10px;
}
.cd-guarantee[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #006F78;
  font-size: 13px;
}
.cd-includes[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0;
  margin: 0;
}
.cd-includes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid #F3F4F6;
  font-size: 13px;
  color: #4B5563;
}
.cd-includes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.cd-includes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  width: 18px;
  color: #006F78;
  font-size: 15px;
  flex-shrink: 0;
}
.cd-info-table[_ngcontent-%COMP%] {
  width: 100%;
  font-size: 13px;
}
.cd-info-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  border-bottom: 1px solid #F3F4F6;
}
.cd-info-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.cd-info-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 9px 0;
}
.cd-info-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {
  color: #9CA3AF;
  display: flex;
  align-items: center;
  gap: 7px;
}
.cd-info-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   i[_ngcontent-%COMP%] {
  font-size: 14px;
}
.cd-info-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {
  font-weight: 600;
  color: #111827;
  text-align: right;
}
.cd-tags[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.cd-tag[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 500;
  background: #F3F4F6;
  color: #4B5563;
  border: 1px solid #E5E7EB;
}
.cd-tag[_ngcontent-%COMP%]:hover {
  background: #FAEEDA;
  color: #8C5410;
  border-color: #E9C97E;
}
.cd-loader[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
}
.cd-loader[_ngcontent-%COMP%]   .cd-spin[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid #FAEEDA;
  border-top-color: #BA7517;
  animation: _ngcontent-%COMP%_cd-spin 0.7s linear infinite;
}
@keyframes _ngcontent-%COMP%_cd-spin {
  to {
    transform: rotate(360deg);
  }
}
.cd-alert[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 13px;
  margin: 16px;
}
.cd-alert--err[_ngcontent-%COMP%] {
  background: #FEF2F2;
  color: #DC2626;
  border: 1px solid #FECACA;
}
.cd-alert--ok[_ngcontent-%COMP%] {
  background: #E6F4F5;
  color: #004D54;
  border: 1px solid #9DD4D8;
}
.cd-stars[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 2px;
}
.cd-stars[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 14px;
  color: #BA7517;
}
.cd-stars[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #4B5563;
  margin-left: 5px;
}
.cd-back-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 13px;
  padding: 6px 14px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 16px;
  transition: background 0.15s;
}
.cd-back-btn[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
}
/*# sourceMappingURL=course-details.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-course-details", imports: [CommonModule, RouterLink, LightgalleryModule, FormsModule], template: `<!-- Loading -->\r
<div *ngIf="loading" class="cd-loader">\r
  <div class="cd-spin"></div>\r
</div>\r
\r
<!-- Alerts -->\r
<div *ngIf="error && !loading" class="cd-alert cd-alert--err">\r
  <i class="isax isax-warning-2"></i> {{ error }}\r
</div>\r
<div *ngIf="success" class="cd-alert cd-alert--ok">\r
  <i class="isax isax-tick-circle"></i> {{ success }}\r
</div>\r
\r
<!-- Main content -->\r
<div *ngIf="formation && !loading">\r
\r
  <!-- \u2500\u2500 HERO BANNER \u2500\u2500 -->\r
  <section class="cd-hero">\r
    <div class="cd-hero__bg" [style.background-image]="'url(' + getImageUrl(formation.image_couverture) + ')'"></div>\r
    <div class="cd-hero__overlay"></div>\r
    <div class="cd-hero__body">\r
      <div class="container">\r
\r
        <!-- Breadcrumb -->\r
        <div class="cd-hero-breadcrumb">\r
          <a routerLink="/courses">Formations</a>\r
          <span>/</span>\r
          <span>{{ formation.categorie?.nom || 'G\xE9n\xE9ral' }}</span>\r
          <span>/</span>\r
          <span>{{ formation.titre | slice:0:40 }}{{ formation.titre?.length > 40 ? '\u2026' : '' }}</span>\r
        </div>\r
\r
        <div class="row align-items-start">\r
          <div class="col-lg-8">\r
            <!-- Category -->\r
            <div class="cd-hero-cat">\r
              <i class="isax isax-category"></i>\r
              {{ formation.categorie?.nom || 'Formation' }}\r
            </div>\r
\r
            <!-- Title -->\r
            <h1 class="cd-hero-title">{{ formation.titre }}</h1>\r
            <p class="cd-hero-desc">{{ formation.short_description }}</p>\r
\r
            <!-- Stats row -->\r
            <div class="cd-hero-meta">\r
              <div class="cd-hero-stat">\r
                <i class="isax isax-book-1"></i>\r
                <strong>{{ formation.modules?.length || 0 }}</strong> modules\r
              </div>\r
              <div class="cd-hero-stat">\r
                <i class="isax isax-clock"></i>\r
                <strong>{{ formation.duree_totale || 0 }}h</strong> de contenu\r
              </div>\r
              <div class="cd-hero-stat">\r
                <i class="isax isax-people"></i>\r
                <strong>{{ formation.nb_inscrits || 0 }}</strong> inscrits\r
              </div>\r
              <div class="cd-hero-stat" *ngIf="averageRating > 0">\r
                <i class="isax isax-star"></i>\r
                <strong>{{ averageRating }}/5</strong>\r
              </div>\r
            </div>\r
\r
            <!-- Badges -->\r
            <div class="cd-hero-badges">\r
              <span class="cd-badge cd-badge--gold">\r
                <i class="isax isax-signal"></i> {{ getNiveauLabel(formation.niveau) }}\r
              </span>\r
              <span class="cd-badge cd-badge--green">\r
                <i class="isax isax-monitor"></i> {{ getTypeFormationLabel(formation.type_formation) }}\r
              </span>\r
              <span class="cd-badge cd-badge--gray" *ngIf="formation.langue">\r
                <i class="isax isax-global"></i> {{ getLangueLabel(formation.langue) }}\r
              </span>\r
              <span class="cd-badge cd-badge--certif" *ngIf="formation.est_certifiante">\r
                <i class="isax isax-award"></i> Certifiante\r
              </span>\r
            </div>\r
\r
            <!-- Instructor chip -->\r
            <div class="cd-hero-instructor" *ngIf="formation.formateur" style="margin-top:20px">\r
              <img class="cd-hero-instructor__avatar"\r
                   [src]="getImageUrl(formation.formateur?.avatar)"\r
                   alt="Formateur">\r
              <div>\r
                <div class="cd-hero-instructor__name">{{ formation.formateur?.nom || 'Expert Formateur' }}</div>\r
                <div class="cd-hero-instructor__role">{{ formation.formateur?.fonction || 'Formateur' }}</div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- \u2500\u2500 BODY \u2500\u2500 -->\r
  <div class="container">\r
    <div class="cd-layout">\r
\r
      <!-- LEFT COLUMN -->\r
      <div>\r
\r
        <!-- Description & Comp\xE9tences -->\r
        <div class="cd-card">\r
          <div class="cd-card-head">\r
            <h2 class="cd-card-title">Aper\xE7u de la formation</h2>\r
          </div>\r
          <div class="cd-card-body">\r
            <div class="cd-description" [innerHTML]="formation.description"></div>\r
\r
            <!-- Comp\xE9tences acquises -->\r
            <ng-container *ngIf="getCompetencesList(formation.competences_acquises).length > 0">\r
              <div class="cd-section-label" style="margin-top:20px">\r
                <i class="isax isax-tick-circle"></i> Comp\xE9tences acquises\r
              </div>\r
              <ul class="cd-check-list">\r
                <li *ngFor="let c of getCompetencesList(formation.competences_acquises)">{{ c }}</li>\r
              </ul>\r
            </ng-container>\r
\r
            <!-- Pr\xE9requis -->\r
            <ng-container *ngIf="formation.prerequis">\r
              <div class="cd-section-label" style="margin-top:20px">\r
                <i class="isax isax-info-circle"></i> Pr\xE9requis\r
              </div>\r
              <p class="cd-description">{{ formation.prerequis }}</p>\r
            </ng-container>\r
\r
            <!-- Outils requis -->\r
            <ng-container *ngIf="getOutilsList(formation.outils_requis).length > 0">\r
              <div class="cd-section-label" style="margin-top:20px">\r
                <i class="isax isax-setting-2"></i> Outils requis\r
              </div>\r
              <ul class="cd-check-list">\r
                <li *ngFor="let o of getOutilsList(formation.outils_requis)">{{ o }}</li>\r
              </ul>\r
            </ng-container>\r
          </div>\r
        </div>\r
\r
        <!-- Contenu du cours -->\r
        <div class="cd-card">\r
          <div class="cd-card-head">\r
            <h2 class="cd-card-title">Contenu du cours</h2>\r
            <span class="cd-card-sub">{{ formation.modules?.length || 0 }} modules \xB7 {{ formation.duree_totale || 0 }}h</span>\r
          </div>\r
          <div class="cd-card-body" style="padding-top:12px; padding-bottom:0;">\r
            <div class="cd-accordion">\r
              <div *ngIf="!formation.modules?.length" class="cd-acc-item">\r
                <div class="cd-acc-head">\r
                  <div class="cd-acc-head__left">\r
                    <div class="cd-acc-head__num">1</div>\r
                    <div>\r
                      <div class="cd-acc-head__title">Introduction</div>\r
                      <div class="cd-acc-head__meta">Contenu en pr\xE9paration</div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div *ngFor="let module of formation.modules; let i = index" class="cd-acc-item">\r
                <div class="cd-acc-head" [class.open]="module._open" (click)="module._open = !module._open">\r
                  <div class="cd-acc-head__left">\r
                    <div class="cd-acc-head__num">{{ i + 1 }}</div>\r
                    <div>\r
                      <div class="cd-acc-head__title">{{ module.titre }}</div>\r
                      <div class="cd-acc-head__meta">\r
                        {{ module.sections?.length || 0 }} le\xE7on{{ (module.sections?.length || 0) !== 1 ? 's' : '' }}\r
                        <span *ngIf="module.duree_estimee"> \xB7 {{ module.duree_estimee }}min</span>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  <div class="cd-acc-head__right">\r
                    <i class="isax isax-arrow-down cd-acc-head__arrow"></i>\r
                  </div>\r
                </div>\r
                <div class="cd-acc-body" *ngIf="module._open">\r
                  <div *ngFor="let section of module.sections; let j = index" class="cd-section-row">\r
                    <div class="cd-section-row__left">\r
                      <i class="isax isax-play-circle cd-section-row__icon"></i>\r
                      <span>{{ i + 1 }}.{{ j + 1 }} {{ section.titre }}</span>\r
                    </div>\r
                    <div class="cd-section-row__right">\r
                      <button class="cd-preview-btn" (click)="previewSection(section)">Aper\xE7u</button>\r
                      <span class="cd-section-row__dur">{{ section.duree_estimee || 5 }}min</span>\r
                    </div>\r
                  </div>\r
                  <div *ngIf="!module.sections?.length" class="cd-section-row" style="justify-content:center; color:#9CA3AF;">\r
                    Contenu en cours de pr\xE9paration\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div style="padding-bottom:4px;"></div>\r
        </div>\r
\r
        <!-- Formateur -->\r
        <div class="cd-card" *ngIf="formation.formateur">\r
          <div class="cd-card-head">\r
            <h2 class="cd-card-title">\xC0 propos du formateur</h2>\r
          </div>\r
          <div class="cd-card-body">\r
            <div class="cd-instructor">\r
              <img class="cd-instructor__avatar"\r
                   [src]="getImageUrl(formation.formateur?.avatar)"\r
                   alt="Formateur">\r
              <div>\r
                <div class="cd-instructor__name">{{ formation.formateur?.nom || 'Expert Formateur' }}</div>\r
                <div class="cd-instructor__role">{{ formation.formateur?.fonction || 'Formateur Expert' }}</div>\r
                <div class="cd-instructor-stats">\r
                  <div class="cd-inst-stat">\r
                    <i class="isax isax-book-1"></i>\r
                    <strong>{{ formation.formateur?.nb_formations || 1 }}</strong> formations\r
                  </div>\r
                  <div class="cd-inst-stat">\r
                    <i class="isax isax-people"></i>\r
                    <strong>{{ formation.nb_inscrits || 0 }}</strong> apprenants\r
                  </div>\r
                  <div class="cd-inst-stat">\r
                    <i class="isax isax-star"></i>\r
                    <strong>4.5</strong>/5\r
                  </div>\r
                </div>\r
                <p class="cd-instructor__bio">\r
                  {{ formation.formateur?.bio || 'Expert dans son domaine avec plusieurs ann\xE9es d\\'exp\xE9rience en formation professionnelle.' }}\r
                </p>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Tags -->\r
        <div class="cd-card" *ngIf="getTagsList(formation.tags).length > 0">\r
          <div class="cd-card-head">\r
            <h2 class="cd-card-title">Mots-cl\xE9s</h2>\r
          </div>\r
          <div class="cd-card-body">\r
            <div class="cd-tags">\r
              <span class="cd-tag" *ngFor="let tag of getTagsList(formation.tags)">{{ tag }}</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div><!-- /left -->\r
\r
      <!-- RIGHT COLUMN (sidebar) -->\r
      <div class="cd-sidebar">\r
\r
        <!-- Price & Enroll Card -->\r
        <div class="cd-price-card">\r
\r
          <!-- Thumb -->\r
          <div class="cd-price-thumb">\r
            <div class="ratio ratio-16x9" *ngIf="isYouTubeUrl(formation.media_url)">\r
              <iframe [src]="getYouTubeEmbedUrl(formation.media_url)"\r
                      title="Aper\xE7u" frameborder="0" allowfullscreen></iframe>\r
            </div>\r
            <video *ngIf="getMediaUrl(formation.media_url) && !isYouTubeUrl(formation.media_url)"\r
                   controls [poster]="getImageUrl(formation.image_couverture)">\r
              <source [src]="getMediaUrl(formation.media_url)" type="video/mp4">\r
            </video>\r
            <img *ngIf="!formation.media_url"\r
                 [src]="getImageUrl(formation.image_couverture)"\r
                 alt="Couverture">\r
          </div>\r
\r
          <div class="cd-price-body">\r
            <!-- Prix : uniquement pour les apprenants/employ\xE9s (role 2) -->\r
            <div class="cd-price-tag" *ngIf="currentUser?.role_id === 2">\r
              <!-- <span *ngIf="formation.prix == 0 || formation.prix == '0.00'" class="cd-price-free">GRATUIT</span> -->\r
              <!-- <span *ngIf="formation.prix > 0" class="cd-price-main">{{ formation.prix }} FCFA</span>\r
              <span *ngIf="formation.prix_original && formation.prix_original > formation.prix" class="cd-price-old">\r
                {{ formation.prix_original }} FCFA\r
              </span> -->\r
              <!-- <span *ngIf="calculateDiscount(formation.prix, formation.prix_original) > 0" class="cd-price-discount">\r
                -{{ calculateDiscount(formation.prix, formation.prix_original) }}%\r
              </span> -->\r
            </div>\r
\r
            <!-- CTA button \u2014 adapt\xE9 selon le r\xF4le -->\r
\r
            <!-- Formateur (3) : modifier sa formation -->\r
            <a *ngIf="currentUser?.role_id === 3"\r
               [href]="'/courses/instructor-course-edit/' + formation.id"\r
               target="_blank"\r
               class="cd-enroll-btn cd-enroll-btn--primary" style="text-decoration:none;">\r
              <i class="isax isax-edit-2"></i> Modifier la formation\r
            </a>\r
\r
            <!-- Superadmin (1) / AdminRH (4) / RH Groupe (5) : acc\xE8s admin -->\r
            <a *ngIf="currentUser?.role_id === 1 || currentUser?.role_id === 4 || currentUser?.role_id === 5"\r
               [href]="'/courses/instructor-course-edit/' + formation.id"\r
               target="_blank"\r
               class="cd-enroll-btn cd-enroll-btn--primary" style="text-decoration:none;">\r
              <i class="isax isax-setting-2"></i> G\xE9rer la formation\r
            </a>\r
\r
            <!-- Apprenant / Employ\xE9 (2) : demande via l'organisation -->\r
            <button\r
              class="cd-enroll-btn cd-enroll-btn--green"\r
              *ngIf="currentUser?.role_id === 2"\r
              [routerLink]="['/student/students-explorer']"\r
              [queryParams]="{formationId: formation.id}">\r
              <i class="isax isax-document-text"></i> Demander la formation\r
            </button>\r
\r
            <!-- Secondary actions -->\r
            <div class="cd-action-row" style="margin-top:10px;">\r
              <button class="cd-action-btn">\r
                <i class="isax isax-heart"></i> Favoris\r
              </button>\r
              <button class="cd-action-btn" (click)="shareFormation()">\r
                <i class="isax isax-send-2"></i> Partager\r
              </button>\r
            </div>\r
\r
            <div class="cd-guarantee">\r
              <i class="isax isax-shield-tick"></i>\r
              Garantie remboursement 30 jours\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Ce cours comprend -->\r
        <div class="cd-card">\r
          <div class="cd-card-head"><h2 class="cd-card-title">Ce cours comprend</h2></div>\r
          <div class="cd-card-body">\r
            <ul class="cd-includes">\r
              <li><i class="isax isax-play-circle"></i> {{ formation.duree_totale || 0 }}h de contenu vid\xE9o</li>\r
              <li><i class="isax isax-document-download"></i> {{ formation.modules?.length || 0 }} ressources t\xE9l\xE9chargeables</li>\r
              <li><i class="isax isax-infinity"></i> Acc\xE8s \xE0 vie</li>\r
              <li><i class="isax isax-mobile"></i> Acc\xE8s mobile et tablette</li>\r
              <li *ngIf="formation.est_certifiante"><i class="isax isax-award"></i> Certificat d'ach\xE8vement</li>\r
              <li><i class="isax isax-people"></i> Acc\xE8s \xE0 la communaut\xE9</li>\r
            </ul>\r
          </div>\r
        </div>\r
\r
        <!-- Infos formation -->\r
        <div class="cd-card">\r
          <div class="cd-card-head"><h2 class="cd-card-title">Informations</h2></div>\r
          <div class="cd-card-body">\r
            <table class="cd-info-table">\r
              <tr>\r
                <td><i class="isax isax-people"></i> Inscrits</td>\r
                <td>{{ formation.nb_inscrits || 0 }}</td>\r
              </tr>\r
              <tr>\r
                <td><i class="isax isax-clock"></i> Dur\xE9e</td>\r
                <td>{{ formation.duree_totale || 0 }}h</td>\r
              </tr>\r
              <tr>\r
                <td><i class="isax isax-book-1"></i> Modules</td>\r
                <td>{{ formation.modules?.length || 0 }}</td>\r
              </tr>\r
              <tr>\r
                <td><i class="isax isax-signal"></i> Niveau</td>\r
                <td>{{ getNiveauLabel(formation.niveau) }}</td>\r
              </tr>\r
              <tr>\r
                <td><i class="isax isax-global"></i> Langue</td>\r
                <td>{{ getLangueLabel(formation.langue) }}</td>\r
              </tr>\r
              <tr>\r
                <td><i class="isax isax-calendar-1"></i> Mis \xE0 jour</td>\r
                <td>{{ formatDate(formation.updated_at) }}</td>\r
              </tr>\r
            </table>\r
          </div>\r
        </div>\r
\r
      </div><!-- /sidebar -->\r
    </div><!-- /cd-layout -->\r
  </div><!-- /container -->\r
\r
</div><!-- /formation -->\r
\r
<!-- Not found -->\r
<div *ngIf="!formation && !loading && !error" class="container" style="padding:80px 0; text-align:center">\r
  <i class="isax isax-book-1" style="font-size:3rem; color:#9CA3AF; display:block; margin-bottom:16px;"></i>\r
  <h4 style="color:#374151;">Formation introuvable</h4>\r
  <p style="color:#9CA3AF; font-size:14px;">La formation que vous recherchez n'existe pas ou n'est plus disponible.</p>\r
  <a routerLink="/courses" class="cd-enroll-btn cd-enroll-btn--green" style="display:inline-flex; width:auto; padding:10px 24px; text-decoration:none;">\r
    <i class="isax isax-arrow-left"></i> Retour aux formations\r
  </a>\r
</div>\r
`, styles: [`/* src/app/features/courses/course-details/course-details.component.scss */
.cd-hero {
  position: relative;
  background: #111827;
  overflow: hidden;
  min-height: 340px;
  display: flex;
  align-items: center;
}
.cd-hero__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: brightness(0.35) saturate(0.7);
  transition: transform 6s ease;
}
.cd-hero:hover .cd-hero__bg {
  transform: scale(1.03);
}
.cd-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(0, 0, 0, 0.55) 100%);
}
.cd-hero__body {
  position: relative;
  z-index: 2;
  padding: 48px 0 40px;
  width: 100%;
}
.cd-hero-breadcrumb {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 18px;
}
.cd-hero-breadcrumb a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}
.cd-hero-breadcrumb a:hover {
  color: #fff;
}
.cd-hero-breadcrumb span {
  color: rgba(255, 255, 255, 0.4);
}
.cd-hero-cat {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #BA7517;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 14px;
}
.cd-hero-title {
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  line-height: 1.25;
  margin-bottom: 10px;
}
.cd-hero-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 20px;
  max-width: 600px;
}
.cd-hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
}
.cd-hero-stat {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.85);
}
.cd-hero-stat i {
  color: #E9C97E;
  font-size: 15px;
}
.cd-hero-stat strong {
  color: #fff;
}
.cd-hero-instructor {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  width: fit-content;
}
.cd-hero-instructor__avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #E9C97E;
}
.cd-hero-instructor__name {
  font-size: 13px;
  font-weight: 600;
  color: #fff;
}
.cd-hero-instructor__role {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
}
.cd-hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}
.cd-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 500;
}
.cd-badge i {
  font-size: 12px;
}
.cd-badge--gold {
  background: #FAEEDA;
  color: #8C5410;
  border: 1px solid #E9C97E;
}
.cd-badge--green {
  background: #E6F4F5;
  color: #004D54;
  border: 1px solid #9DD4D8;
}
.cd-badge--gray {
  background: #F3F4F6;
  color: #4B5563;
  border: 1px solid #E5E7EB;
}
.cd-badge--certif {
  background: #F0FDF4;
  color: #166534;
  border: 1px solid #BBF7D0;
}
.cd-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 24px;
  padding: 28px 0 48px;
  align-items: start;
}
@media (max-width: 991px) {
  .cd-layout {
    grid-template-columns: 1fr;
  }
}
.cd-card {
  background: #fff;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 20px;
}
.cd-card:last-child {
  margin-bottom: 0;
}
.cd-card-head {
  padding: 18px 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cd-card-title {
  font-size: 15px;
  font-weight: 700;
  color: #111827;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
}
.cd-card-title::before {
  content: "";
  display: block;
  width: 3px;
  height: 18px;
  background: #BA7517;
  border-radius: 2px;
}
.cd-card-sub {
  font-size: 12px;
  color: #9CA3AF;
}
.cd-card-body {
  padding: 16px 20px 20px;
}
.cd-section-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #BA7517;
  margin: 0 0 10px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.cd-section-label i {
  font-size: 14px;
}
.cd-description {
  font-size: 14px;
  color: #4B5563;
  line-height: 1.75;
}
.cd-check-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
@media (max-width: 600px) {
  .cd-check-list {
    grid-template-columns: 1fr;
  }
}
.cd-check-list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  color: #4B5563;
}
.cd-check-list li::before {
  content: "";
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  background: #E6F4F5 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M2 6l3 3 5-5' stroke='%23006F78' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/12px no-repeat;
  border-radius: 50%;
  margin-top: 1px;
}
.cd-accordion {
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  overflow: hidden;
}
.cd-acc-item {
  border-bottom: 1px solid #E5E7EB;
}
.cd-acc-item:last-child {
  border-bottom: none;
}
.cd-acc-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 16px;
  cursor: pointer;
  background: #F9FAFB;
  transition: background 0.15s;
}
.cd-acc-head:hover {
  background: rgb(242.88, 244.9, 246.92);
}
.cd-acc-head.open {
  background: #FAEEDA;
}
.cd-acc-head__left {
  display: flex;
  align-items: center;
  gap: 10px;
}
.cd-acc-head__num {
  width: 26px;
  height: 26px;
  border-radius: 8px;
  background: #BA7517;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
}
.cd-acc-head__title {
  font-size: 13px;
  font-weight: 600;
  color: #111827;
}
.cd-acc-head__meta {
  font-size: 11px;
  color: #9CA3AF;
  margin-top: 2px;
}
.cd-acc-head__right {
  display: flex;
  align-items: center;
  gap: 10px;
}
.cd-acc-head__arrow {
  font-size: 14px;
  color: #9CA3AF;
  transition: transform 0.2s;
}
.cd-acc-head.open .cd-acc-head__arrow {
  transform: rotate(180deg);
}
.cd-acc-body {
  padding: 0;
}
.cd-section-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px 10px 52px;
  border-top: 1px solid #E5E7EB;
  font-size: 13px;
}
.cd-section-row:hover {
  background: #F9FAFB;
}
.cd-section-row__left {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #4B5563;
}
.cd-section-row__icon {
  color: #006F78;
  font-size: 15px;
}
.cd-section-row__right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.cd-section-row__dur {
  font-size: 11px;
  color: #9CA3AF;
}
.cd-preview-btn {
  font-size: 11px;
  font-weight: 500;
  color: #BA7517;
  background: #FAEEDA;
  border: 1px solid #E9C97E;
  padding: 2px 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s;
}
.cd-preview-btn:hover {
  background: rgb(247.5714285714, 229.7428571429, 200.0285714286);
}
.cd-instructor {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
@media (max-width: 480px) {
  .cd-instructor {
    flex-direction: column;
  }
}
.cd-instructor__avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 3px solid #E9C97E;
}
.cd-instructor__name {
  font-size: 16px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 2px;
}
.cd-instructor__role {
  font-size: 12px;
  color: #006F78;
  font-weight: 500;
  margin-bottom: 6px;
}
.cd-instructor__bio {
  font-size: 13px;
  color: #4B5563;
  line-height: 1.65;
}
.cd-instructor-stats {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin: 8px 0;
}
.cd-inst-stat {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: #4B5563;
}
.cd-inst-stat i {
  color: #BA7517;
  font-size: 14px;
}
.cd-inst-stat strong {
  color: #111827;
}
.cd-sidebar {
  position: sticky;
  top: 80px;
}
.cd-price-card {
  background: #fff;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
}
.cd-price-thumb {
  position: relative;
  height: 180px;
  overflow: hidden;
  background: #F3F4F6;
}
.cd-price-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cd-price-thumb iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
.cd-price-thumb video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cd-price-body {
  padding: 18px 20px 20px;
}
.cd-price-tag {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 16px;
}
.cd-price-main {
  font-size: 28px;
  font-weight: 800;
  color: #8C5410;
}
.cd-price-free {
  font-size: 28px;
  font-weight: 800;
  color: #006F78;
}
.cd-price-old {
  font-size: 14px;
  color: #9CA3AF;
  text-decoration: line-through;
}
.cd-price-discount {
  display: inline-block;
  background: #E6F4F5;
  color: #004D54;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 6px;
}
.cd-enroll-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 13px 20px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
}
.cd-enroll-btn i {
  font-size: 16px;
}
.cd-enroll-btn--primary {
  background:
    linear-gradient(
      135deg,
      #BA7517 0%,
      #8C5410 100%);
  color: #fff;
  box-shadow: 0 4px 12px rgba(186, 117, 23, 0.35);
}
.cd-enroll-btn--primary:hover {
  box-shadow: 0 6px 18px rgba(186, 117, 23, 0.45);
  transform: translateY(-1px);
}
.cd-enroll-btn--green {
  background:
    linear-gradient(
      135deg,
      #006F78 0%,
      #004D54 100%);
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 111, 120, 0.3);
}
.cd-enroll-btn--green:hover {
  box-shadow: 0 6px 18px rgba(0, 111, 120, 0.4);
  transform: translateY(-1px);
}
.cd-action-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin: 10px 0;
}
.cd-action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #E5E7EB;
  background: #F9FAFB;
  color: #4B5563;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.15s;
}
.cd-action-btn:hover {
  border-color: #BA7517;
  color: #BA7517;
  background: #FAEEDA;
}
.cd-guarantee {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 11px;
  color: #9CA3AF;
  margin-top: 10px;
}
.cd-guarantee i {
  color: #006F78;
  font-size: 13px;
}
.cd-includes {
  list-style: none;
  padding: 0;
  margin: 0;
}
.cd-includes li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid #F3F4F6;
  font-size: 13px;
  color: #4B5563;
}
.cd-includes li:last-child {
  border-bottom: none;
}
.cd-includes li i {
  width: 18px;
  color: #006F78;
  font-size: 15px;
  flex-shrink: 0;
}
.cd-info-table {
  width: 100%;
  font-size: 13px;
}
.cd-info-table tr {
  border-bottom: 1px solid #F3F4F6;
}
.cd-info-table tr:last-child {
  border-bottom: none;
}
.cd-info-table td {
  padding: 9px 0;
}
.cd-info-table td:first-child {
  color: #9CA3AF;
  display: flex;
  align-items: center;
  gap: 7px;
}
.cd-info-table td:first-child i {
  font-size: 14px;
}
.cd-info-table td:last-child {
  font-weight: 600;
  color: #111827;
  text-align: right;
}
.cd-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.cd-tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 500;
  background: #F3F4F6;
  color: #4B5563;
  border: 1px solid #E5E7EB;
}
.cd-tag:hover {
  background: #FAEEDA;
  color: #8C5410;
  border-color: #E9C97E;
}
.cd-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
}
.cd-loader .cd-spin {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid #FAEEDA;
  border-top-color: #BA7517;
  animation: cd-spin 0.7s linear infinite;
}
@keyframes cd-spin {
  to {
    transform: rotate(360deg);
  }
}
.cd-alert {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 13px;
  margin: 16px;
}
.cd-alert--err {
  background: #FEF2F2;
  color: #DC2626;
  border: 1px solid #FECACA;
}
.cd-alert--ok {
  background: #E6F4F5;
  color: #004D54;
  border: 1px solid #9DD4D8;
}
.cd-stars {
  display: flex;
  align-items: center;
  gap: 2px;
}
.cd-stars i {
  font-size: 14px;
  color: #BA7517;
}
.cd-stars span {
  font-size: 13px;
  color: #4B5563;
  margin-left: 5px;
}
.cd-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 13px;
  padding: 6px 14px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 16px;
  transition: background 0.15s;
}
.cd-back-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
}
/*# sourceMappingURL=course-details.component.css.map */
`] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: FormationService }, { type: AuthService }, { type: Location }, { type: DomSanitizer }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseDetailsComponent, { className: "CourseDetailsComponent", filePath: "app/features/courses/course-details/course-details.component.ts", lineNumber: 26 });
})();
export {
  CourseDetailsComponent
};
//# sourceMappingURL=chunk-PQO3O4Z4.js.map
