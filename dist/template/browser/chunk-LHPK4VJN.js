import {
  ProgressionService
} from "./chunk-3FG3UELT.js";
import {
  QuizService
} from "./chunk-3C7UQEN3.js";
import {
  FormationService
} from "./chunk-QDYFEC2R.js";
import {
  environment
} from "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-37V3B3KY.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-UFFO2UKW.js";
import {
  DomSanitizer
} from "./chunk-U7UKDAOZ.js";
import "./chunk-EGNJBGKD.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  TitleCasePipe
} from "./chunk-I2HNPZHV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  Subject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-BSBCM3BI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/courses/course-watch/course-watch.component.ts
var _c0 = () => [];
function CourseWatchComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p", 7);
    \u0275\u0275text(3, "Chargement de la formation...");
    \u0275\u0275elementEnd()();
  }
}
function CourseWatchComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275element(2, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Impossible de charger la formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 11);
    \u0275\u0275text(8, "Retour aux formations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.error);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.courseList);
  }
}
function CourseWatchComponent_div_2_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 42);
    \u0275\u0275listener("click", function CourseWatchComponent_div_2_div_20_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.error = "");
    });
    \u0275\u0275element(4, "i", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.error, " ");
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 64)(2, "div", 65);
    \u0275\u0275element(3, "iframe", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.getYouTubeEmbedUrl(ctx_r0.activeSection.ressources), \u0275\u0275sanitizeResourceUrl)("title", ctx_r0.activeSection.titre);
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 64)(2, "video", 67);
    \u0275\u0275text(3, " Votre navigateur ne supporte pas la lecture vid\xE9o. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.getVideoUrl(ctx_r0.activeSection.ressources), \u0275\u0275sanitizeUrl);
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 64);
    \u0275\u0275element(2, "img", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.getImageUrl(ctx_r0.formation.image_couverture), \u0275\u0275sanitizeUrl)("alt", ctx_r0.activeSection.titre);
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "img", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.getImageUrl(ctx_r0.resolveResourceUrl(ctx_r0.activeSection.ressources)), \u0275\u0275sanitizeUrl)("alt", ctx_r0.activeSection.titre);
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_14_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275element(1, "i", 72);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Image non disponible.");
    \u0275\u0275elementEnd()();
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 69);
    \u0275\u0275template(2, CourseWatchComponent_div_2_ng_container_21_ng_container_14_div_2_Template, 2, 2, "div", 70)(3, CourseWatchComponent_div_2_ng_container_21_ng_container_14_ng_template_3_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const noImageMedia_r5 = \u0275\u0275reference(4);
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.hasResource(ctx_r0.activeSection))("ngIfElse", noImageMedia_r5);
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 69);
    \u0275\u0275element(2, "iframe", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.getPdfUrl(ctx_r0.activeSection.ressources), \u0275\u0275sanitizeResourceUrl);
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 69);
    \u0275\u0275element(2, "iframe", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.getFileViewerUrl(ctx_r0.activeSection.ressources), \u0275\u0275sanitizeResourceUrl)("title", ctx_r0.activeSection.titre);
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275element(1, "i", 76);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDuration(ctx_r0.activeSection.duree_estimee));
  }
}
function CourseWatchComponent_div_2_ng_container_21_button_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 80);
  }
}
function CourseWatchComponent_div_2_ng_container_21_button_22_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 81);
  }
}
function CourseWatchComponent_div_2_ng_container_21_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function CourseWatchComponent_div_2_ng_container_21_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.markDone());
    });
    \u0275\u0275template(1, CourseWatchComponent_div_2_ng_container_21_button_22_span_1_Template, 1, 0, "span", 78)(2, CourseWatchComponent_div_2_ng_container_21_button_22_i_2_Template, 1, 0, "i", 79);
    \u0275\u0275text(3, " Marquer comme compl\xE9t\xE9 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.markDoneLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.markDoneLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.markDoneLoading);
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275element(1, "i", 81);
    \u0275\u0275text(2, "Section compl\xE9t\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_37_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 88);
    \u0275\u0275element(1, "i", 95);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.formatDuration(ctx_r0.activeSection.duree_estimee), " ");
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_37_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275element(1, "i", 97);
    \u0275\u0275text(2, "Compl\xE9t\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_37_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "div", 99)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 100)(5, "p", 101);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 102);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 103);
    \u0275\u0275text(10, "Voir le profil");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getFormateurInitials());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r0.formation.formateur_details == null ? null : ctx_r0.formation.formateur_details.nom) || (ctx_r0.formation.formateur == null ? null : ctx_r0.formation.formateur.nom_complet) || "Formateur");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", (ctx_r0.formation.formateur_details == null ? null : ctx_r0.formation.formateur_details.fonction) || "Formateur", " \xB7 ", (ctx_r0.formation.formateur_details == null ? null : ctx_r0.formation.formateur_details.entreprise) || "Pyramide IT");
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_37_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "h3", 105);
    \u0275\u0275text(2, "\xC0 propos de cette le\xE7on");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 106);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", ctx_r0.activeSection.description || ctx_r0.activeSection.contenu || (ctx_r0.activeModule == null ? null : ctx_r0.activeModule.description), \u0275\u0275sanitizeHtml);
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_37_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "h3", 105);
    \u0275\u0275text(2, "\xC0 propos du module");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 106);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", ctx_r0.activeModule.description, \u0275\u0275sanitizeHtml);
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_37_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "h3", 105);
    \u0275\u0275text(2, "Objectifs du module");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 106);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", ctx_r0.activeModule.objectifs, \u0275\u0275sanitizeHtml);
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_37_div_18_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 112);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comp_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(comp_r7);
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_37_div_18_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r8);
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_37_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107)(1, "h3", 108);
    \u0275\u0275text(2, "Ce que vous allez apprendre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 109);
    \u0275\u0275template(4, CourseWatchComponent_div_2_ng_container_21_div_37_div_18_span_4_Template, 2, 1, "span", 110)(5, CourseWatchComponent_div_2_ng_container_21_div_37_div_18_span_5_Template, 2, 1, "span", 111);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.formation.competences_acquises);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.formation.tags);
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_37_div_19_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obj_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(obj_r9);
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_37_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "h3", 105);
    \u0275\u0275text(2, "Objectifs p\xE9dagogiques");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 114);
    \u0275\u0275template(4, CourseWatchComponent_div_2_ng_container_21_div_37_div_19_li_4_Template, 2, 1, "li", 115);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.getObjectifsList(ctx_r0.formation.objectifs_pedagogiques));
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_37_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275element(1, "i", 119);
    \u0275\u0275elementStart(2, "span", 120);
    \u0275\u0275text(3, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 121);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formation.niveau_display || ctx_r0.formation.niveau);
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_37_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275element(1, "i", 76);
    \u0275\u0275elementStart(2, "span", 120);
    \u0275\u0275text(3, "Dur\xE9e totale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 121);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDuration(ctx_r0.formation.duree_totale));
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_37_div_20_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275element(1, "i", 122);
    \u0275\u0275elementStart(2, "span", 120);
    \u0275\u0275text(3, "Langue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 121);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formation.langue);
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_37_div_20_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275element(1, "i", 123);
    \u0275\u0275elementStart(2, "span", 120);
    \u0275\u0275text(3, "Certifiante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 121);
    \u0275\u0275text(5, "Oui");
    \u0275\u0275elementEnd()();
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_37_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275template(1, CourseWatchComponent_div_2_ng_container_21_div_37_div_20_div_1_Template, 6, 1, "div", 117)(2, CourseWatchComponent_div_2_ng_container_21_div_37_div_20_div_2_Template, 6, 1, "div", 117)(3, CourseWatchComponent_div_2_ng_container_21_div_37_div_20_div_3_Template, 6, 1, "div", 117)(4, CourseWatchComponent_div_2_ng_container_21_div_37_div_20_div_4_Template, 6, 0, "div", 117);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.niveau);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.duree_totale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.langue);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.est_certifiante);
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84)(2, "h2", 85);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 86);
    \u0275\u0275template(5, CourseWatchComponent_div_2_ng_container_21_div_37_span_5_Template, 3, 1, "span", 87);
    \u0275\u0275elementStart(6, "span", 88);
    \u0275\u0275element(7, "i");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, CourseWatchComponent_div_2_ng_container_21_div_37_span_10_Template, 3, 0, "span", 89);
    \u0275\u0275elementStart(11, "span", 88);
    \u0275\u0275element(12, "i", 90);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, CourseWatchComponent_div_2_ng_container_21_div_37_div_14_Template, 11, 4, "div", 91)(15, CourseWatchComponent_div_2_ng_container_21_div_37_div_15_Template, 4, 1, "div", 92)(16, CourseWatchComponent_div_2_ng_container_21_div_37_div_16_Template, 4, 1, "div", 92)(17, CourseWatchComponent_div_2_ng_container_21_div_37_div_17_Template, 4, 1, "div", 92)(18, CourseWatchComponent_div_2_ng_container_21_div_37_div_18_Template, 6, 2, "div", 93)(19, CourseWatchComponent_div_2_ng_container_21_div_37_div_19_Template, 5, 1, "div", 92)(20, CourseWatchComponent_div_2_ng_container_21_div_37_div_20_Template, 5, 4, "div", 94);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.activeSection.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.activeSection.duree_estimee);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", ctx_r0.getSectionIcon(ctx_r0.activeSection.type), " me-1"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 16, ctx_r0.activeSection.type || "Texte"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.isSectionCompleted(ctx_r0.activeSection.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Module ", ctx_r0.getModuleIndex() + 1, " \xB7 ", ctx_r0.activeModule == null ? null : ctx_r0.activeModule.titre, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.formateur_details || ctx_r0.formation.formateur);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeSection.description || ctx_r0.activeSection.contenu || (ctx_r0.activeModule == null ? null : ctx_r0.activeModule.description));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.activeModule == null ? null : ctx_r0.activeModule.description) && (ctx_r0.activeSection.description || ctx_r0.activeSection.contenu));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeModule == null ? null : ctx_r0.activeModule.objectifs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.competences_acquises && ctx_r0.formation.competences_acquises.length || ctx_r0.formation.tags && ctx_r0.formation.tags.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.objectifs_pedagogiques);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.niveau || ctx_r0.formation.duree_totale || ctx_r0.formation.langue || ctx_r0.formation.difficulte);
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_38_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 126)(2, "div", 127);
    \u0275\u0275element(3, "i", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 129)(5, "p", 130);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 131);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 132);
    \u0275\u0275element(10, "i", 133);
    \u0275\u0275text(11, "T\xE9l\xE9charger ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.activeSection.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.activeSection.type || "Document");
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.getFileFullUrl(ctx_r0.activeSection.ressources), \u0275\u0275sanitizeUrl);
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_38_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275element(1, "i", 134);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Aucune ressource disponible pour cette section.");
    \u0275\u0275elementEnd()();
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_38_div_7_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const outil_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(outil_r10);
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_38_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "h3", 105);
    \u0275\u0275text(2, "Outils requis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 109);
    \u0275\u0275template(4, CourseWatchComponent_div_2_ng_container_21_div_38_div_7_span_4_Template, 2, 1, "span", 111);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.formation.outils_requis);
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 124)(2, "h3", 125);
    \u0275\u0275text(3, "Ressources de la section");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CourseWatchComponent_div_2_ng_container_21_div_38_div_4_Template, 12, 3, "div", 70)(5, CourseWatchComponent_div_2_ng_container_21_div_38_ng_template_5_Template, 4, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, CourseWatchComponent_div_2_ng_container_21_div_38_div_7_Template, 5, 1, "div", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noResources_r11 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.hasResource(ctx_r0.activeSection))("ngIfElse", noResources_r11);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.formation.outils_requis && ctx_r0.formation.outils_requis.length);
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 135)(2, "div", 71);
    \u0275\u0275element(3, "i", 136);
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Les notes personnelles seront bient\xF4t disponibles.");
    \u0275\u0275elementEnd()()()();
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 142);
    \u0275\u0275element(1, "div", 143);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement du quiz...");
    \u0275\u0275elementEnd()();
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 144)(1, "div", 145);
    \u0275\u0275element(2, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h4", 147);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 148);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.activeSection.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.activeSection.description || "Quiz non encore disponible.");
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_3_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 95);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.quiz.duree_minutes, " min");
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_3_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 157);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Score minimum : ", ctx_r0.quiz.score_minimum, "%");
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 149)(1, "div", 150);
    \u0275\u0275element(2, "i", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 151);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 152);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 153)(8, "span");
    \u0275\u0275element(9, "i", 154);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_3_span_11_Template, 3, 1, "span", 28)(12, CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_3_span_12_Template, 3, 1, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 155);
    \u0275\u0275listener("click", function CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_3_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.startQuiz());
    });
    \u0275\u0275element(14, "i", 156);
    \u0275\u0275text(15, "Commencer le quiz ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.quiz.titre || ctx_r0.activeSection.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.quiz.description || ctx_r0.activeSection.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", (ctx_r0.quiz.questions == null ? null : ctx_r0.quiz.questions.length) || 0, " questions");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.quiz.duree_minutes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.quiz.score_minimum);
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_4_button_14_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 178);
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_4_button_14_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 179);
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_4_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 173);
    \u0275\u0275listener("click", function CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_4_button_14_Template_button_click_0_listener() {
      const opt_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.toggleAnswer(ctx_r0.currentQuestion.id, opt_r15.id, ctx_r0.currentQuestion.type));
    });
    \u0275\u0275elementStart(1, "span", 174);
    \u0275\u0275template(2, CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_4_button_14_i_2_Template, 1, 0, "i", 175)(3, CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_4_button_14_i_3_Template, 1, 0, "i", 176);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 177);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("cw-quiz-option--selected", ctx_r0.isAnswerSelected(ctx_r0.currentQuestion.id, opt_r15.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.isAnswerSelected(ctx_r0.currentQuestion.id, opt_r15.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isAnswerSelected(ctx_r0.currentQuestion.id, opt_r15.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r15.texte);
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_4_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 180);
    \u0275\u0275listener("click", function CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_4_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.nextQuestion());
    });
    \u0275\u0275text(1, " Suivant");
    \u0275\u0275element(2, "i", 56);
    \u0275\u0275elementEnd();
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_4_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 181);
    \u0275\u0275listener("click", function CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_4_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.submitQuiz());
    });
    \u0275\u0275element(1, "i", 81);
    \u0275\u0275text(2, "Terminer le quiz ");
    \u0275\u0275elementEnd();
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 158)(1, "div", 159)(2, "div", 160);
    \u0275\u0275element(3, "div", 161);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 162);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 163)(7, "div", 164);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h4", 165);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 166);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 167);
    \u0275\u0275template(14, CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_4_button_14_Template, 6, 5, "button", 168);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 169)(16, "button", 170);
    \u0275\u0275listener("click", function CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_4_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.prevQuestion());
    });
    \u0275\u0275element(17, "i", 46);
    \u0275\u0275text(18, "Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_4_button_19_Template, 3, 0, "button", 171)(20, CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_4_button_20_Template, 3, 0, "button", 172);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", (ctx_r0.currentQuestionIndex + 1) / ((ctx_r0.quiz.questions == null ? null : ctx_r0.quiz.questions.length) || 1) * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Question ", ctx_r0.currentQuestionIndex + 1, " / ", ctx_r0.quiz.questions == null ? null : ctx_r0.quiz.questions.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", ctx_r0.currentQuestionIndex + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.currentQuestion.question_text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.currentQuestion.type === "multiple_choice_multi" ? "Plusieurs r\xE9ponses possibles" : ctx_r0.currentQuestion.type === "true_false" ? "Vrai ou Faux" : "Une seule r\xE9ponse", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.currentQuestion.reponses);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentQuestionIndex === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.currentQuestionIndex < ((ctx_r0.quiz.questions == null ? null : ctx_r0.quiz.questions.length) || 0) - 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentQuestionIndex === ((ctx_r0.quiz.questions == null ? null : ctx_r0.quiz.questions.length) || 0) - 1);
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_5_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 197);
    \u0275\u0275element(1, "i", 198);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r19 = ctx.$implicit;
    const q_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("cw-quiz-correction__opt--correct", opt_r19.est_correcte)("cw-quiz-correction__opt--selected", ctx_r0.isAnswerSelected(q_r20.id, opt_r19.id) && !opt_r19.est_correcte)("cw-quiz-correction__opt--right", ctx_r0.isAnswerSelected(q_r20.id, opt_r19.id) && opt_r19.est_correcte);
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-tick-circle", opt_r19.est_correcte)("isax-close-circle", ctx_r0.isAnswerSelected(q_r20.id, opt_r19.id) && !opt_r19.est_correcte)("isax-record-circle", !opt_r19.est_correcte && !ctx_r0.isAnswerSelected(q_r20.id, opt_r19.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r19.texte, " ");
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_5_div_8_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 199);
    \u0275\u0275element(1, "i", 200);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", q_r20.explication, " ");
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_5_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 191)(1, "div", 192)(2, "span", 193);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 194);
    \u0275\u0275template(6, CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_5_div_8_div_6_Template, 3, 13, "div", 195);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_5_div_8_p_7_Template, 3, 1, "p", 196);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r20 = ctx.$implicit;
    const qi_r21 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", qi_r21 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", q_r20.question_text, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", q_r20.reponses);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r20.explication);
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 182)(1, "div", 183)(2, "div", 184);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 185);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 186);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_5_div_8_Template, 8, 4, "div", 187);
    \u0275\u0275elementStart(9, "div", 188)(10, "button", 189);
    \u0275\u0275listener("click", function CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_5_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.retryQuiz());
    });
    \u0275\u0275element(11, "i", 190);
    \u0275\u0275text(12, "Recommencer ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("cw-quiz-results__score--pass", ctx_r0.quizScore >= (ctx_r0.quiz.score_minimum || 50))("cw-quiz-results__score--fail", ctx_r0.quizScore < (ctx_r0.quiz.score_minimum || 50));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.quizScore, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.quizScore >= (ctx_r0.quiz.score_minimum || 50) ? "R\xE9ussi !" : "Non valid\xE9", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Score minimum requis : ", ctx_r0.quiz.score_minimum || 50, "% ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.quiz.questions);
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_1_Template, 4, 0, "div", 137)(2, CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_2_Template, 8, 2, "div", 138)(3, CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_3_Template, 16, 5, "div", 139)(4, CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_4_Template, 21, 11, "div", 140)(5, CourseWatchComponent_div_2_ng_container_21_ng_container_40_div_5_Template, 13, 8, "div", 141);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.quizLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.quizLoading && !ctx_r0.quiz);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.quizLoading && ctx_r0.quiz && !ctx_r0.quizStarted && !ctx_r0.quizFinished);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.quizLoading && ctx_r0.quiz && ctx_r0.quizStarted && !ctx_r0.quizFinished && ctx_r0.currentQuestion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.quizLoading && ctx_r0.quiz && ctx_r0.quizFinished);
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_41_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 205);
    \u0275\u0275element(1, "i", 206);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.activeSection.resume || ctx_r0.activeSection.intro);
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_41_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 202);
    \u0275\u0275template(1, CourseWatchComponent_div_2_ng_container_21_ng_container_41_div_1_div_1_Template, 4, 1, "div", 203);
    \u0275\u0275element(2, "div", 204);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeSection.resume || ctx_r0.activeSection.intro);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.activeSection.contenu || ctx_r0.activeSection.description, \u0275\u0275sanitizeHtml);
  }
}
function CourseWatchComponent_div_2_ng_container_21_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CourseWatchComponent_div_2_ng_container_21_ng_container_41_div_1_Template, 3, 2, "div", 201);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeSection.contenu || ctx_r0.activeSection.description);
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_42_button_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 214);
    \u0275\u0275element(1, "i", 215);
    \u0275\u0275text(2, "Mon certificat ");
    \u0275\u0275elementEnd();
  }
}
function CourseWatchComponent_div_2_ng_container_21_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 207)(1, "div", 208);
    \u0275\u0275element(2, "i", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 209);
    \u0275\u0275text(4, "Formation termin\xE9e \u2014 F\xE9licitations !");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 210);
    \u0275\u0275text(6, "Vous avez compl\xE9t\xE9 toutes les sections \xB7 Score moyen : \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 211);
    \u0275\u0275template(8, CourseWatchComponent_div_2_ng_container_21_div_42_button_8_Template, 3, 0, "button", 212);
    \u0275\u0275elementStart(9, "a", 213);
    \u0275\u0275text(10, " Voir mes formations ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.formation.est_certifiante);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.courseList);
  }
}
function CourseWatchComponent_div_2_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 44)(2, "button", 45);
    \u0275\u0275listener("click", function CourseWatchComponent_div_2_ng_container_21_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275element(3, "i", 46);
    \u0275\u0275text(4, "Retour ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "i", 47);
    \u0275\u0275elementStart(6, "span", 48);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "i", 47);
    \u0275\u0275elementStart(9, "span", 49);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, CourseWatchComponent_div_2_ng_container_21_ng_container_11_Template, 4, 2, "ng-container", 28)(12, CourseWatchComponent_div_2_ng_container_21_ng_container_12_Template, 4, 1, "ng-container", 28)(13, CourseWatchComponent_div_2_ng_container_21_ng_container_13_Template, 3, 2, "ng-container", 28)(14, CourseWatchComponent_div_2_ng_container_21_ng_container_14_Template, 5, 2, "ng-container", 28)(15, CourseWatchComponent_div_2_ng_container_21_ng_container_15_Template, 3, 1, "ng-container", 28)(16, CourseWatchComponent_div_2_ng_container_21_ng_container_16_Template, 3, 2, "ng-container", 28)(17, CourseWatchComponent_div_2_ng_container_21_div_17_Template, 4, 1, "div", 50);
    \u0275\u0275elementStart(18, "div", 51)(19, "button", 52);
    \u0275\u0275listener("click", function CourseWatchComponent_div_2_ng_container_21_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.navigatePrev());
    });
    \u0275\u0275element(20, "i", 46);
    \u0275\u0275text(21, "Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, CourseWatchComponent_div_2_ng_container_21_button_22_Template, 4, 3, "button", 53)(23, CourseWatchComponent_div_2_ng_container_21_div_23_Template, 3, 0, "div", 54);
    \u0275\u0275elementStart(24, "button", 55);
    \u0275\u0275listener("click", function CourseWatchComponent_div_2_ng_container_21_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.navigateNext());
    });
    \u0275\u0275text(25, " Suivant");
    \u0275\u0275element(26, "i", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 57)(28, "button", 58);
    \u0275\u0275listener("click", function CourseWatchComponent_div_2_ng_container_21_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setTab("overview"));
    });
    \u0275\u0275element(29, "i", 59);
    \u0275\u0275text(30, "Description ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 58);
    \u0275\u0275listener("click", function CourseWatchComponent_div_2_ng_container_21_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setTab("faq"));
    });
    \u0275\u0275element(32, "i", 60);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 58);
    \u0275\u0275listener("click", function CourseWatchComponent_div_2_ng_container_21_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setTab("notes"));
    });
    \u0275\u0275element(35, "i", 61);
    \u0275\u0275text(36, "Mes notes ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, CourseWatchComponent_div_2_ng_container_21_div_37_Template, 21, 18, "div", 62)(38, CourseWatchComponent_div_2_ng_container_21_div_38_Template, 8, 3, "div", 62)(39, CourseWatchComponent_div_2_ng_container_21_div_39_Template, 6, 0, "div", 62)(40, CourseWatchComponent_div_2_ng_container_21_ng_container_40_Template, 6, 5, "ng-container", 28)(41, CourseWatchComponent_div_2_ng_container_21_ng_container_41_Template, 2, 1, "ng-container", 28)(42, CourseWatchComponent_div_2_ng_container_21_div_42_Template, 11, 2, "div", 63);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.formation.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.activeModule == null ? null : ctx_r0.activeModule.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.activeSection.type === "video" || ctx_r0.activeSection.type === "lecture") && ctx_r0.hasResource(ctx_r0.activeSection) && ctx_r0.isYouTube(ctx_r0.activeSection.ressources));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.activeSection.type === "video" || ctx_r0.activeSection.type === "lecture") && ctx_r0.hasResource(ctx_r0.activeSection) && !ctx_r0.isYouTube(ctx_r0.activeSection.ressources));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.activeSection.type === "video" || ctx_r0.activeSection.type === "lecture") && !ctx_r0.hasResource(ctx_r0.activeSection));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeSection.type === "image");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeSection.type === "pdf" && ctx_r0.hasResource(ctx_r0.activeSection));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeSection.type === "fichier" && ctx_r0.hasResource(ctx_r0.activeSection) && ctx_r0.isViewableFile(ctx_r0.activeSection.ressources));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeSection.duree_estimee);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.hasPrev);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.isSectionCompleted(ctx_r0.activeSection.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSectionCompleted(ctx_r0.activeSection.id));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.hasNext);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("cw-tabs__item--active", ctx_r0.activeTab === "overview");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("cw-tabs__item--active", ctx_r0.activeTab === "faq");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Ressources (", ctx_r0.getResourceCount(), ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("cw-tabs__item--active", ctx_r0.activeTab === "notes");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "overview");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "faq");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "notes");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeSection.type === "quiz" || ctx_r0.activeSection.type === "assignment");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.activeSection.type === "texte" || ctx_r0.activeSection.type === "text" || ctx_r0.activeSection.type === "reading" || !ctx_r0.activeSection.type) && ctx_r0.activeTab === "overview");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.progressPercent === 100);
  }
}
function CourseWatchComponent_div_2_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 216)(1, "div", 217);
    \u0275\u0275element(2, "i", 218);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "S\xE9lectionnez une section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Choisissez une section dans le menu \xE0 droite pour commencer.");
    \u0275\u0275elementEnd()();
  }
}
function CourseWatchComponent_div_2_div_36_ul_8_li_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 234);
    \u0275\u0275element(1, "i", 95);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r25 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.formatDuration(section_r25.duree_estimee), " ");
  }
}
function CourseWatchComponent_div_2_div_36_ul_8_li_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 235);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r25 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, section_r25.type));
  }
}
function CourseWatchComponent_div_2_div_36_ul_8_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 227);
    \u0275\u0275listener("click", function CourseWatchComponent_div_2_div_36_ul_8_li_1_Template_li_click_0_listener() {
      const section_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const mod_r23 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectSection(section_r25, mod_r23));
    });
    \u0275\u0275elementStart(1, "div", 228);
    \u0275\u0275element(2, "i", 198);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 229)(4, "span", 230);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 231);
    \u0275\u0275template(7, CourseWatchComponent_div_2_div_36_ul_8_li_1_span_7_Template, 3, 1, "span", 232)(8, CourseWatchComponent_div_2_div_36_ul_8_li_1_span_8_Template, 3, 3, "span", 233);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r25 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("cw-section-item--active", ctx_r0.isActiveSection(section_r25.id))("cw-section-item--done", ctx_r0.isSectionCompleted(section_r25.id));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("isax-tick-circle", ctx_r0.isSectionCompleted(section_r25.id))("isax-play-circle", !ctx_r0.isSectionCompleted(section_r25.id) && (section_r25.type === "video" || section_r25.type === "lecture"))("isax-document-text", !ctx_r0.isSectionCompleted(section_r25.id) && (section_r25.type === "texte" || section_r25.type === "text" || section_r25.type === "reading"))("isax-document", !ctx_r0.isSectionCompleted(section_r25.id) && section_r25.type === "pdf")("isax-gallery", !ctx_r0.isSectionCompleted(section_r25.id) && section_r25.type === "image")("isax-document-download", !ctx_r0.isSectionCompleted(section_r25.id) && section_r25.type === "fichier")("isax-task-square", !ctx_r0.isSectionCompleted(section_r25.id) && (section_r25.type === "quiz" || section_r25.type === "assignment"))("isax-play-circle5", !ctx_r0.isSectionCompleted(section_r25.id) && !section_r25.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(section_r25.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", section_r25.duree_estimee);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", section_r25.type);
  }
}
function CourseWatchComponent_div_2_div_36_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 225);
    \u0275\u0275template(1, CourseWatchComponent_div_2_div_36_ul_8_li_1_Template, 9, 23, "li", 226);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mod_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", mod_r23.sections || \u0275\u0275pureFunction0(1, _c0));
  }
}
function CourseWatchComponent_div_2_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 219)(1, "button", 220);
    \u0275\u0275listener("click", function CourseWatchComponent_div_2_div_36_Template_button_click_1_listener() {
      const mod_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleModule(mod_r23.id));
    });
    \u0275\u0275elementStart(2, "div", 221)(3, "span", 222);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 223);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "i", 198);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CourseWatchComponent_div_2_div_36_ul_8_Template, 2, 2, "ul", 224);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mod_r23 = ctx.$implicit;
    const mi_r26 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("cw-module-header--open", ctx_r0.isModuleOpen(mod_r23.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(mi_r26 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mod_r23.titre);
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-arrow-up-2", ctx_r0.isModuleOpen(mod_r23.id))("isax-arrow-down-2", !ctx_r0.isModuleOpen(mod_r23.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isModuleOpen(mod_r23.id));
  }
}
function CourseWatchComponent_div_2_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 236);
    \u0275\u0275element(1, "i", 237);
    \u0275\u0275elementStart(2, "small");
    \u0275\u0275text(3, "Aucun module disponible");
    \u0275\u0275elementEnd()();
  }
}
function CourseWatchComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "header", 13)(2, "div", 14)(3, "button", 15);
    \u0275\u0275listener("click", function CourseWatchComponent_div_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275element(4, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "span", 18);
    \u0275\u0275text(7, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h1", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 20)(11, "div", 21)(12, "div", 22);
    \u0275\u0275element(13, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 24);
    \u0275\u0275text(15);
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "div", 25)(19, "main", 26);
    \u0275\u0275template(20, CourseWatchComponent_div_2_div_20_Template, 5, 1, "div", 27)(21, CourseWatchComponent_div_2_ng_container_21_Template, 43, 26, "ng-container", 28)(22, CourseWatchComponent_div_2_div_22_Template, 7, 0, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "aside", 30)(24, "div", 31)(25, "h3", 32);
    \u0275\u0275text(26, "Sommaire de la formation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 33)(28, "div", 34)(29, "span");
    \u0275\u0275text(30, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "strong");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 35);
    \u0275\u0275element(34, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 37);
    \u0275\u0275template(36, CourseWatchComponent_div_2_div_36_Template, 9, 9, "div", 38)(37, CourseWatchComponent_div_2_div_37_Template, 4, 0, "div", 39);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.formation.titre);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r0.progressPercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.completedIds.size, "/", ctx_r0.totalSectionsCount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.progressPercent, "%");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeSection);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.activeSection);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate3("", ctx_r0.progressPercent, "% \xB7 ", ctx_r0.completedIds.size, "/", ctx_r0.totalSectionsCount);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.progressPercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.formation.modules);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.formation.modules == null ? null : ctx_r0.formation.modules.length));
  }
}
var STORAGE_BASE = environment.apiUrl.replace(/\/api$/, "") + "/storage";
var CourseWatchComponent = class _CourseWatchComponent {
  route;
  router;
  sanitizer;
  formationService;
  progressionService;
  quizService;
  routes = routes;
  formation = null;
  loading = true;
  error = "";
  /** Section actuellement lue */
  activeSection = null;
  /** Module de la section active */
  activeModule = null;
  /** IDs des modules ouverts dans le sidebar */
  openModules = /* @__PURE__ */ new Set();
  /** Progression locale */
  progressPercent = 0;
  completedIds = /* @__PURE__ */ new Set();
  /** Onglet du panneau droit */
  activeTab = "overview";
  // ── Quiz player ──────────────────────────────────────────────────────────────
  quiz = null;
  quizLoading = false;
  quizStarted = false;
  quizFinished = false;
  currentQuestionIndex = 0;
  userAnswers = {};
  quizScore = 0;
  formationId;
  parcoursId = null;
  catalogueId = null;
  fromPage = "";
  destroy$ = new Subject();
  constructor(route, router, sanitizer, formationService, progressionService, quizService) {
    this.route = route;
    this.router = router;
    this.sanitizer = sanitizer;
    this.formationService = formationService;
    this.progressionService = progressionService;
    this.quizService = quizService;
  }
  ngOnInit() {
    const state = history.state ?? {};
    const qp = this.route.snapshot.queryParamMap;
    this.fromPage = state?.fromPage ?? qp.get("fromPage") ?? "";
    this.parcoursId = state?.parcoursId ? Number(state.parcoursId) : qp.get("parcoursId") ? Number(qp.get("parcoursId")) : null;
    this.catalogueId = state?.catalogueId ? Number(state.catalogueId) : qp.get("catalogueId") ? Number(qp.get("catalogueId")) : null;
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      const raw = params.get("id");
      if (!raw) {
        this.error = "ID de formation manquant";
        return;
      }
      this.formationId = +raw;
      this.loadFormation();
    });
    this.progressionService.change$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (!this.formationId)
        return;
      this.progressPercent = this.progressionService.getPercent(this.formationId, this.parcoursId, this.catalogueId);
      this.completedIds = new Set(this.progressionService.getCompleted(this.formationId, this.parcoursId, this.catalogueId));
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ─── Chargement ─────────────────────────────────────────────────────────────
  loadFormation() {
    this.loading = true;
    this.error = "";
    this.formationService.getFormationById(this.formationId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.formation = res.formation || res.data || res;
        this.formation.modules = this.formation.modules || [];
        this.processImages();
        this.initProgression();
        this.selectFirstSection();
        this.loading = false;
      },
      error: (err) => {
        this.error = "Impossible de charger la formation";
        this.loading = false;
        console.error(err);
      }
    });
  }
  processImages() {
    if (this.formation.image_couverture && !this.formation.image_couverture.startsWith("http")) {
      this.formation.image_couverture = `${STORAGE_BASE}/${this.formation.image_couverture}`;
    }
  }
  initProgression() {
    const total = this.allSections().length;
    this.progressionService.init(this.formationId, total, [], this.parcoursId, this.catalogueId);
    this.progressPercent = this.progressionService.getPercent(this.formationId, this.parcoursId, this.catalogueId);
    this.completedIds = new Set(this.progressionService.getCompleted(this.formationId, this.parcoursId, this.catalogueId));
    this.progressionService.loadFromApi(this.formationId, this.parcoursId, this.catalogueId).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.progressPercent = this.progressionService.getPercent(this.formationId, this.parcoursId, this.catalogueId);
        this.completedIds = new Set(this.progressionService.getCompleted(this.formationId, this.parcoursId, this.catalogueId));
      },
      error: (err) => {
        console.warn("Progression API indisponible, utilisation locale.", err?.status);
      }
    });
  }
  selectFirstSection() {
    for (const mod of this.formation.modules) {
      if (mod.sections?.length) {
        this.openModules.add(mod.id);
        this.selectSection(mod.sections[0], mod);
        return;
      }
    }
  }
  // ─── Navigation sections ────────────────────────────────────────────────────
  selectSection(section, mod) {
    this.activeSection = section;
    this.activeModule = mod;
    this.activeTab = "overview";
    if (section.type === "quiz" || section.type === "assignment") {
      const quizId = section.quiz_id;
      if (quizId) {
        this.loadQuiz(quizId);
      } else {
        this.quiz = null;
        this.quizLoading = true;
        this.quizService.getQuizzesByFormation(this.formationId).pipe(takeUntil(this.destroy$)).subscribe({
          next: (quizzes) => {
            const sectionTitle = section.titre?.toLowerCase().trim() ?? "";
            const match = quizzes.find((q) => q.titre?.toLowerCase().trim() === sectionTitle) ?? (quizzes.length === 1 ? quizzes[0] : null);
            if (match) {
              section.quiz_id = match.id;
              this.loadQuiz(match.id);
            } else {
              this.quizLoading = false;
            }
          },
          error: () => {
            this.quizLoading = false;
          }
        });
      }
    }
  }
  // ── Quiz player ────────────────────────────────────────────────────────────
  loadQuiz(quizId) {
    this.quizLoading = true;
    this.quiz = null;
    this.quizStarted = false;
    this.quizFinished = false;
    this.currentQuestionIndex = 0;
    this.userAnswers = {};
    this.quizScore = 0;
    this.quizService.getQuiz(quizId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        const raw = res?.quiz || res;
        if (raw?.questions) {
          raw.questions = raw.questions.map((q) => __spreadProps(__spreadValues({}, q), {
            reponses: (q.reponses || []).map((r) => __spreadProps(__spreadValues({}, r), {
              texte: r.texte ?? r.reponse_text ?? "",
              est_correcte: r.est_correcte ?? r.is_correct ?? false
            }))
          }));
        }
        this.quiz = raw;
        this.quizLoading = false;
      },
      error: () => {
        this.quiz = null;
        this.quizLoading = false;
      }
    });
  }
  startQuiz() {
    this.quizStarted = true;
  }
  get currentQuestion() {
    return this.quiz?.questions?.[this.currentQuestionIndex] ?? null;
  }
  isAnswerSelected(questionId, optionId) {
    return this.userAnswers[questionId]?.includes(optionId) ?? false;
  }
  toggleAnswer(questionId, optionId, type) {
    if (type === "multiple_choice_multi") {
      const current = this.userAnswers[questionId] ?? [];
      const idx = current.indexOf(optionId);
      if (idx >= 0) {
        this.userAnswers = __spreadProps(__spreadValues({}, this.userAnswers), { [questionId]: current.filter((id) => id !== optionId) });
      } else {
        this.userAnswers = __spreadProps(__spreadValues({}, this.userAnswers), { [questionId]: [...current, optionId] });
      }
    } else {
      this.userAnswers = __spreadProps(__spreadValues({}, this.userAnswers), { [questionId]: [optionId] });
    }
  }
  nextQuestion() {
    this.currentQuestionIndex++;
  }
  prevQuestion() {
    this.currentQuestionIndex--;
  }
  submitQuiz() {
    if (!this.quiz?.questions) {
      this.quizFinished = true;
      return;
    }
    let correct = 0;
    const total = this.quiz.questions.length;
    for (const q of this.quiz.questions) {
      const selected = this.userAnswers[q.id] ?? [];
      const correctIds = (q.reponses ?? []).filter((r) => r.est_correcte).map((r) => r.id);
      const isCorrect = correctIds.length === selected.length && correctIds.every((id) => selected.includes(id));
      if (isCorrect) {
        correct++;
      }
    }
    this.quizScore = total > 0 ? Math.round(correct / total * 100) : 0;
    this.quizFinished = true;
  }
  retryQuiz() {
    this.quizStarted = false;
    this.quizFinished = false;
    this.currentQuestionIndex = 0;
    this.userAnswers = {};
    this.quizScore = 0;
  }
  toggleModule(modId) {
    if (this.openModules.has(modId)) {
      this.openModules.delete(modId);
    } else {
      this.openModules.add(modId);
    }
  }
  isModuleOpen(modId) {
    return this.openModules.has(modId);
  }
  isActiveSection(sectionId) {
    return this.activeSection?.id === sectionId;
  }
  isSectionCompleted(sectionId) {
    return this.completedIds.has(sectionId);
  }
  markDoneLoading = false;
  markDone() {
    if (!this.activeSection || this.markDoneLoading)
      return;
    const sid = this.activeSection.id;
    if (this.isSectionCompleted(sid))
      return;
    this.markDoneLoading = true;
    this.error = "";
    this.progressionService.markCompleted(this.formationId, sid, this.parcoursId, this.catalogueId).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.markDoneLoading = false;
      },
      error: (err) => {
        this.markDoneLoading = false;
        const status = err?.status;
        console.error("\u274C markCompleted HTTP error", {
          status,
          url: err?.url,
          body: err?.error,
          message: err?.message
        });
        if (status === 401) {
          this.error = "Session expir\xE9e. Veuillez vous reconnecter.";
        } else if (status === 404) {
          this.error = "Section introuvable (id: " + sid + ").";
        } else if (status === 422) {
          this.error = "Donn\xE9es invalides: " + JSON.stringify(err?.error?.errors ?? err?.error?.message ?? "");
        } else if (status === 500) {
          this.error = "Erreur serveur (500). Consultez les logs Laravel.";
        } else if (status === 0) {
          this.error = "Serveur inaccessible (CORS ou serveur arr\xEAt\xE9).";
        } else {
          this.error = `Erreur ${status}: ${err?.error?.message ?? "inconnue"}`;
        }
        setTimeout(() => this.error = "", 8e3);
      }
    });
  }
  navigateNext() {
    const flat = this.allSections();
    const idx = flat.findIndex((s) => s.section.id === this.activeSection?.id);
    if (idx < flat.length - 1) {
      const { section, mod } = flat[idx + 1];
      this.selectSection(section, mod);
    }
  }
  navigatePrev() {
    const flat = this.allSections();
    const idx = flat.findIndex((s) => s.section.id === this.activeSection?.id);
    if (idx > 0) {
      const { section, mod } = flat[idx - 1];
      this.selectSection(section, mod);
    }
  }
  allSections() {
    const result = [];
    for (const mod of this.formation?.modules || []) {
      for (const section of mod.sections || []) {
        result.push({ section, mod });
      }
    }
    return result;
  }
  get currentIndex() {
    return this.allSections().findIndex((s) => s.section.id === this.activeSection?.id);
  }
  get totalSectionsCount() {
    return this.allSections().length;
  }
  get hasPrev() {
    return this.currentIndex > 0;
  }
  get hasNext() {
    return this.currentIndex < this.totalSectionsCount - 1;
  }
  // ─── Média ───────────────────────────────────────────────────────────────────
  /** Retourne une SafeResourceUrl pour les iframes (YouTube, PDF, etc.) */
  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  /**
   * Normalise `section.ressources` qui peut être :
   *   - une string URL
   *   - un objet  { url: '...' } ou { path: '...' }
   *   - un tableau dont le 1er élément est une string ou un objet
   */
  resolveResourceUrl(raw) {
    if (!raw)
      return "";
    if (typeof raw === "string")
      return raw;
    if (Array.isArray(raw))
      return this.resolveResourceUrl(raw[0]);
    if (typeof raw === "object") {
      return raw.url || raw.path || raw.src || raw.uri || "";
    }
    return String(raw);
  }
  isYouTube(raw) {
    const url = this.resolveResourceUrl(raw);
    if (!url)
      return false;
    return /youtube\.com|youtu\.be/.test(url);
  }
  getYouTubeEmbedUrl(raw) {
    const url = this.resolveResourceUrl(raw);
    const id = this.extractYouTubeId(url);
    const embed = `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embed);
  }
  extractYouTubeId(url) {
    if (!url || typeof url !== "string")
      return "";
    const patterns = [
      /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
      /youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
      /youtu\.be\/([a-zA-Z0-9_-]+)/
    ];
    for (const p of patterns) {
      const m = url.match(p);
      if (m)
        return m[1];
    }
    return "";
  }
  getVideoUrl(raw) {
    const url = this.resolveResourceUrl(raw);
    if (this.isYouTube(url)) {
      return this.getYouTubeEmbedUrl(url);
    }
    const full = url.startsWith("http") ? url : `${STORAGE_BASE}/${url}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(full);
  }
  getPdfUrl(raw) {
    const url = this.resolveResourceUrl(raw);
    const full = url.startsWith("http") ? url : `${STORAGE_BASE}/${url}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(full);
  }
  getFileFullUrl(raw) {
    const url = this.resolveResourceUrl(raw);
    return url.startsWith("http") ? url : `${STORAGE_BASE}/${url}`;
  }
  isViewableFile(raw) {
    const url = this.resolveResourceUrl(raw);
    const ext = url.split("?")[0].split(".").pop()?.toLowerCase() || "";
    return ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx"].includes(ext);
  }
  getFileViewerUrl(raw) {
    const url = this.resolveResourceUrl(raw);
    const full = url.startsWith("http") ? url : `${STORAGE_BASE}/${url}`;
    const ext = full.split("?")[0].split(".").pop()?.toLowerCase() || "";
    if (["doc", "docx", "xls", "xlsx", "ppt", "pptx"].includes(ext)) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(`https://docs.google.com/viewer?url=${encodeURIComponent(full)}&embedded=true`);
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(full);
  }
  getImageUrl(url) {
    if (!url)
      return "assets/img/course/courses-06.jpg";
    if (url.startsWith("http"))
      return url;
    return `${STORAGE_BASE}/${url}`;
  }
  /** Retourne true si la section a une ressource exploitable */
  hasResource(section) {
    return !!this.resolveResourceUrl(section?.ressources);
  }
  // ─── Durée ───────────────────────────────────────────────────────────────────
  formatDuration(minutes) {
    const m = parseInt(minutes) || 0;
    if (!m)
      return "";
    if (m < 60)
      return `${m} min`;
    return `${Math.floor(m / 60)}h ${m % 60 ? m % 60 + "min" : ""}`.trim();
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "";
    try {
      return new Date(dateStr).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    } catch {
      return "";
    }
  }
  // ─── Icône / couleur de section ──────────────────────────────────────────────
  getSectionIcon(type) {
    const map = {
      video: "isax isax-video-play",
      lecture: "isax isax-video-play",
      reading: "isax isax-document-text",
      text: "isax isax-document-text",
      pdf: "isax isax-document",
      image: "isax isax-gallery",
      fichier: "isax isax-document-download",
      quiz: "isax isax-message-question",
      assignment: "isax isax-task-square"
    };
    return map[type] || "isax isax-play-circle5";
  }
  getSectionColor(type) {
    const map = {
      video: "text-primary",
      lecture: "text-primary",
      reading: "text-info",
      text: "text-info",
      pdf: "text-secondary",
      image: "text-success",
      fichier: "text-warning",
      quiz: "text-warning",
      assignment: "text-danger"
    };
    return map[type] || "text-success";
  }
  // ─── Utilitaires template ─────────────────────────────────────────────────
  getObjectifsList(txt) {
    if (!txt)
      return [];
    return txt.split("\n").map((l) => l.replace(/^[-•*]\s*/, "").trim()).filter(Boolean);
  }
  getListFromString(txt) {
    if (!txt)
      return [];
    try {
      return JSON.parse(txt);
    } catch {
    }
    return txt.split("\n").map((l) => l.replace(/^[-•*]\s*/, "").trim()).filter(Boolean);
  }
  setTab(tab) {
    this.activeTab = tab;
  }
  getResourceCount() {
    if (!this.activeSection)
      return 0;
    const res = this.activeSection.ressources;
    if (!res)
      return 0;
    if (Array.isArray(res))
      return res.length;
    if (typeof res === "string" || typeof res === "object")
      return 1;
    return 0;
  }
  getFormateurInitials() {
    const name = this.formation?.formateur_details?.nom || this.formation?.formateur?.nom_complet || "F";
    return name.split(" ").map((w) => w[0]?.toUpperCase() || "").slice(0, 2).join("");
  }
  getModuleIndex() {
    if (!this.activeModule || !this.formation?.modules)
      return 0;
    return this.formation.modules.findIndex((m) => m.id === this.activeModule.id);
  }
  goBack() {
    if (this.fromPage === "parcours" && this.parcoursId) {
      this.router.navigate(["/student/mes-parcours", this.parcoursId]);
    } else if (this.fromPage === "catalogue" && this.catalogueId) {
      this.router.navigate(["/student/catalogue-detail", this.catalogueId]);
    } else {
      this.router.navigate(["/student/mes-formations"]);
    }
  }
  static \u0275fac = function CourseWatchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseWatchComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(ProgressionService), \u0275\u0275directiveInject(QuizService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseWatchComponent, selectors: [["app-course-watch"]], decls: 3, vars: 3, consts: [["noImageMedia", ""], ["noResources", ""], ["class", "cw-loader", 4, "ngIf"], ["class", "cw-error", 4, "ngIf"], ["class", "cw-shell", 4, "ngIf"], [1, "cw-loader"], [1, "cw-loader__ring"], [1, "cw-loader__text"], [1, "cw-error"], [1, "cw-error__icon"], [1, "isax", "isax-warning-2"], [1, "cw-btn", "cw-btn--outline", "mt-3", 3, "routerLink"], [1, "cw-shell"], [1, "cw-topbar"], [1, "cw-topbar__left"], [1, "cw-topbar__back", 3, "click"], [1, "isax", "isax-arrow-left-2"], [1, "cw-topbar__info"], [1, "cw-topbar__label"], [1, "cw-topbar__title"], [1, "cw-topbar__right"], [1, "cw-topbar__progress"], [1, "cw-topbar__progress-track"], [1, "cw-topbar__progress-fill"], [1, "cw-topbar__progress-label"], [1, "cw-body"], [1, "cw-main"], ["class", "cw-alert cw-alert--danger mb-4", 4, "ngIf"], [4, "ngIf"], ["class", "cw-empty-state", 4, "ngIf"], [1, "cw-sidebar"], [1, "cw-sidebar__header"], [1, "cw-sidebar__header-title"], [1, "cw-sidebar__progress"], [1, "cw-sidebar__progress-info"], [1, "cw-sidebar__progress-bar"], [1, "cw-sidebar__progress-fill"], [1, "cw-sidebar__content"], ["class", "cw-sidebar__module", 4, "ngFor", "ngForOf"], ["class", "cw-sidebar__empty", 4, "ngIf"], [1, "cw-alert", "cw-alert--danger", "mb-4"], [1, "isax", "isax-warning-2", "me-2"], [1, "cw-alert__close", 3, "click"], [1, "isax", "isax-close-circle"], [1, "cw-breadcrumb"], [1, "cw-breadcrumb__back", 3, "click"], [1, "isax", "isax-arrow-left-2", "me-1"], [1, "isax", "isax-arrow-right-3", "cw-breadcrumb__sep"], [1, "cw-breadcrumb__module"], [1, "cw-breadcrumb__current"], ["class", "cw-duration-badge", 4, "ngIf"], [1, "cw-actions-bar"], [1, "cw-btn", "cw-btn--prev", 3, "click", "disabled"], ["class", "cw-btn cw-btn--complete", 3, "disabled", "click", 4, "ngIf"], ["class", "cw-done-badge", 4, "ngIf"], [1, "cw-btn", "cw-btn--next", 3, "click", "disabled"], [1, "isax", "isax-arrow-right-2", "ms-1"], [1, "cw-tabs"], [1, "cw-tabs__item", 3, "click"], [1, "isax", "isax-document-text", "me-1"], [1, "isax", "isax-folder-open", "me-1"], [1, "isax", "isax-note-2", "me-1"], ["class", "cw-tab-content", 4, "ngIf"], ["class", "cw-congrats", 4, "ngIf"], [1, "cw-media-wrap", "cw-media-wrap--video"], [1, "cw-embed-wrap"], ["frameborder", "0", "allowfullscreen", "", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", 3, "src", "title"], ["controls", "", "preload", "metadata", 1, "cw-video-native", 3, "src"], [1, "cw-cover-fallback", 3, "src", "alt"], [1, "cw-media-wrap"], [4, "ngIf", "ngIfElse"], [1, "cw-empty-media"], [1, "isax", "isax-gallery", "fs-36", "d-block", "mb-2"], [1, "cw-pdf-frame-inline", 3, "src"], ["frameborder", "0", "allowfullscreen", "", 1, "cw-pdf-frame-inline", 3, "src", "title"], [1, "cw-duration-badge"], [1, "isax", "isax-clock"], [1, "cw-btn", "cw-btn--complete", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", 4, "ngIf"], ["class", "isax isax-tick-circle me-2", 4, "ngIf"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "isax", "isax-tick-circle", "me-2"], [1, "cw-done-badge"], [1, "cw-tab-content"], [1, "cw-detail-header"], [1, "cw-detail-header__title"], [1, "cw-detail-header__meta"], ["class", "cw-meta-tag", 4, "ngIf"], [1, "cw-meta-tag"], ["class", "cw-meta-tag cw-meta-tag--done", 4, "ngIf"], [1, "isax", "isax-book-1", "me-1"], ["class", "cw-formateur-card", 4, "ngIf"], ["class", "cw-about-section", 4, "ngIf"], ["class", "cw-skills-section", 4, "ngIf"], ["class", "cw-info-grid", 4, "ngIf"], [1, "isax", "isax-clock", "me-1"], [1, "cw-meta-tag", "cw-meta-tag--done"], [1, "isax", "isax-tick-circle", "me-1"], [1, "cw-formateur-card"], [1, "cw-formateur-card__avatar"], [1, "cw-formateur-card__info"], [1, "cw-formateur-card__name"], [1, "cw-formateur-card__role"], [1, "cw-btn", "cw-btn--outline", "cw-formateur-card__btn"], [1, "cw-about-section"], [1, "cw-about-section__title"], [1, "cw-about-section__body", 3, "innerHTML"], [1, "cw-skills-section"], [1, "cw-skills-section__title"], [1, "cw-skills-section__tags"], ["class", "cw-skill-tag", 4, "ngFor", "ngForOf"], ["class", "cw-skill-tag cw-skill-tag--secondary", 4, "ngFor", "ngForOf"], [1, "cw-skill-tag"], [1, "cw-skill-tag", "cw-skill-tag--secondary"], [1, "cw-objectives-list"], [4, "ngFor", "ngForOf"], [1, "cw-info-grid"], ["class", "cw-info-item", 4, "ngIf"], [1, "cw-info-item"], [1, "isax", "isax-chart-2"], [1, "cw-info-item__label"], [1, "cw-info-item__value"], [1, "isax", "isax-global"], [1, "isax", "isax-award"], [1, "cw-resources-section"], [1, "cw-resources-section__title"], [1, "cw-file-card"], [1, "cw-file-card__icon"], [1, "isax", "isax-document-download"], [1, "cw-file-card__info"], [1, "cw-file-card__name"], [1, "cw-file-card__hint"], ["target", "_blank", "download", "", 1, "cw-btn", "cw-btn--primary", "cw-file-card__btn", 3, "href"], [1, "isax", "isax-document-download", "me-2"], [1, "isax", "isax-folder-open", "fs-36", "d-block", "mb-2"], [1, "cw-notes-section"], [1, "isax", "isax-note-2", "fs-36", "d-block", "mb-2"], ["class", "cw-quiz-loader", 4, "ngIf"], ["class", "cw-quiz-banner", 4, "ngIf"], ["class", "cw-quiz-start", 4, "ngIf"], ["class", "cw-quiz-player", 4, "ngIf"], ["class", "cw-quiz-results", 4, "ngIf"], [1, "cw-quiz-loader"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "cw-quiz-banner"], [1, "cw-quiz-banner__icon"], [1, "isax", "isax-task-square"], [1, "cw-quiz-banner__title"], [1, "cw-quiz-banner__sub"], [1, "cw-quiz-start"], [1, "cw-quiz-start__icon"], [1, "cw-quiz-start__title"], [1, "cw-quiz-start__sub"], [1, "cw-quiz-start__meta"], [1, "isax", "isax-message-question", "me-1"], [1, "cw-btn", "cw-btn--primary", "cw-quiz-start__btn", 3, "click"], [1, "isax", "isax-play-circle", "me-2"], [1, "isax", "isax-award", "me-1"], [1, "cw-quiz-player"], [1, "cw-quiz-progress"], [1, "cw-quiz-progress__bar"], [1, "cw-quiz-progress__fill"], [1, "cw-quiz-progress__label"], [1, "cw-quiz-question"], [1, "cw-quiz-question__num"], [1, "cw-quiz-question__text"], [1, "cw-quiz-question__hint"], [1, "cw-quiz-options"], ["type", "button", "class", "cw-quiz-option", 3, "cw-quiz-option--selected", "click", 4, "ngFor", "ngForOf"], [1, "cw-quiz-nav"], [1, "cw-btn", "cw-btn--outline", 3, "click", "disabled"], ["class", "cw-btn cw-btn--primary", 3, "click", 4, "ngIf"], ["class", "cw-btn cw-btn--success", 3, "click", 4, "ngIf"], ["type", "button", 1, "cw-quiz-option", 3, "click"], [1, "cw-quiz-option__check"], ["class", "isax isax-tick-circle", 4, "ngIf"], ["class", "isax isax-record-circle", 4, "ngIf"], [1, "cw-quiz-option__text"], [1, "isax", "isax-tick-circle"], [1, "isax", "isax-record-circle"], [1, "cw-btn", "cw-btn--primary", 3, "click"], [1, "cw-btn", "cw-btn--success", 3, "click"], [1, "cw-quiz-results"], [1, "cw-quiz-results__score-wrap"], [1, "cw-quiz-results__score"], [1, "cw-quiz-results__label"], [1, "cw-quiz-results__detail"], ["class", "cw-quiz-correction", 4, "ngFor", "ngForOf"], [1, "cw-quiz-results__actions"], [1, "cw-btn", "cw-btn--outline", 3, "click"], [1, "isax", "isax-refresh", "me-2"], [1, "cw-quiz-correction"], [1, "cw-quiz-correction__q"], [1, "cw-quiz-correction__num"], [1, "cw-quiz-correction__opts"], ["class", "cw-quiz-correction__opt", 3, "cw-quiz-correction__opt--correct", "cw-quiz-correction__opt--selected", "cw-quiz-correction__opt--right", 4, "ngFor", "ngForOf"], ["class", "cw-quiz-correction__exp", 4, "ngIf"], [1, "cw-quiz-correction__opt"], [1, "isax"], [1, "cw-quiz-correction__exp"], [1, "isax", "isax-info-circle", "me-1"], ["class", "cw-text-card", 4, "ngIf"], [1, "cw-text-card"], ["class", "cw-text-intro", 4, "ngIf"], [1, "cw-text-body", 3, "innerHTML"], [1, "cw-text-intro"], [1, "isax", "isax-info-circle", "cw-text-intro__icon"], [1, "cw-congrats"], [1, "cw-congrats__icon"], [1, "cw-congrats__title"], [1, "cw-congrats__sub"], [1, "cw-congrats__actions"], ["class", "cw-btn cw-btn--primary", 4, "ngIf"], [1, "cw-btn", "cw-btn--outline", 3, "routerLink"], [1, "cw-btn", "cw-btn--primary"], [1, "isax", "isax-award", "me-2"], [1, "cw-empty-state"], [1, "cw-empty-state__icon"], [1, "isax", "isax-play-circle"], [1, "cw-sidebar__module"], [1, "cw-module-header", 3, "click"], [1, "cw-module-header__left"], [1, "cw-module-header__num"], [1, "cw-module-header__title"], ["class", "cw-section-list", 4, "ngIf"], [1, "cw-section-list"], ["class", "cw-section-item", 3, "cw-section-item--active", "cw-section-item--done", "click", 4, "ngFor", "ngForOf"], [1, "cw-section-item", 3, "click"], [1, "cw-section-item__status"], [1, "cw-section-item__body"], [1, "cw-section-item__title"], [1, "cw-section-item__meta"], ["class", "cw-section-item__duration", 4, "ngIf"], ["class", "cw-section-item__type", 4, "ngIf"], [1, "cw-section-item__duration"], [1, "cw-section-item__type"], [1, "cw-sidebar__empty"], [1, "isax", "isax-folder-open", "d-block", "mb-2"]], template: function CourseWatchComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CourseWatchComponent_div_0_Template, 4, 0, "div", 2)(1, CourseWatchComponent_div_1_Template, 9, 2, "div", 3)(2, CourseWatchComponent_div_2_Template, 38, 16, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.formation);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, TitleCasePipe], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  background: #f8fafc;\n  font-family: inherit;\n}\n.cw-loader[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 80vh;\n  gap: 16px;\n}\n.cw-loader__ring[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: 3px solid #e2e8f0;\n  border-top-color: #069b8f;\n  animation: _ngcontent-%COMP%_cw-spin 0.7s linear infinite;\n}\n.cw-loader__text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n}\n@keyframes _ngcontent-%COMP%_cw-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cw-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 80vh;\n  padding: 40px;\n  text-align: center;\n  gap: 10px;\n}\n.cw-error__icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #dc2626;\n}\n.cw-error[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.cw-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n  max-width: 380px;\n}\n.cw-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 60px);\n  overflow: hidden;\n}\n.cw-topbar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 56px;\n  padding: 0 20px;\n  background: #0f172a;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n  gap: 16px;\n  z-index: 100;\n}\n.cw-topbar__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.cw-topbar__right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.cw-topbar__back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  background: rgba(255, 255, 255, 0.09);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 8px;\n  color: #fff;\n  font-size: 16px;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n}\n.cw-topbar__back[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.18);\n}\n.cw-topbar__info[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.cw-topbar__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: rgba(255, 255, 255, 0.38);\n  font-weight: 600;\n}\n.cw-topbar__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 44vw;\n}\n.cw-topbar__progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.cw-topbar__progress-track[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.12);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.cw-topbar__progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #069b8f,\n      rgb(8.6608695652, 223.7391304348, 206.4173913043));\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.cw-topbar__progress-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.45);\n  white-space: nowrap;\n}\n.cw-topbar__progress-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: rgb(17.2049689441, 245.7950310559, 227.3850931677);\n  margin-left: 4px;\n}\n.cw-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  overflow: hidden;\n}\n.cw-main[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px 28px;\n  background: #f8fafc;\n  min-width: 0;\n}\n.cw-main[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n.cw-main[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f5f9;\n}\n.cw-main[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 4px;\n}\n.cw-content-wrap[_ngcontent-%COMP%] {\n  max-width: 860px;\n  margin: 0 auto;\n}\n.cw-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.cw-alert--danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n  border: 1px solid rgba(220, 38, 38, 0.2);\n}\n.cw-alert__close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  font-size: 16px;\n  padding: 0;\n}\n.cw-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n  font-size: 12px;\n  color: #94a3b8;\n  margin-bottom: 18px;\n}\n.cw-breadcrumb__back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #069b8f;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 0;\n  transition: all 0.2s ease;\n}\n.cw-breadcrumb__back[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.cw-breadcrumb__sep[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #cbd5e1;\n}\n.cw-breadcrumb__module[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 500;\n}\n.cw-breadcrumb__current[_ngcontent-%COMP%] {\n  color: #069b8f;\n  font-weight: 600;\n}\n.cw-section-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.cw-section-header__type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  padding: 4px 12px;\n  border-radius: 99px;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n.cw-section-header__type-badge[data-type=video][_ngcontent-%COMP%], \n.cw-section-header__type-badge[data-type=lecture][_ngcontent-%COMP%] {\n  background: rgba(6, 155, 143, 0.1);\n  color: #069b8f;\n}\n.cw-section-header__type-badge[data-type=texte][_ngcontent-%COMP%], \n.cw-section-header__type-badge[data-type=text][_ngcontent-%COMP%], \n.cw-section-header__type-badge[data-type=reading][_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.1);\n  color: #7c3aed;\n}\n.cw-section-header__type-badge[data-type=pdf][_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n}\n.cw-section-header__type-badge[data-type=quiz][_ngcontent-%COMP%], \n.cw-section-header__type-badge[data-type=assignment][_ngcontent-%COMP%] {\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.cw-section-header__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1.3;\n  letter-spacing: -0.3px;\n  margin: 0 0 12px;\n}\n.cw-section-header__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.cw-meta-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 99px;\n  background: #f1f5f9;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.cw-meta-tag--done[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.cw-media-wrap[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.cw-media-wrap--video[_ngcontent-%COMP%] {\n  background: #0f172a;\n}\n.cw-embed-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n}\n.cw-embed-wrap[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n.cw-video-native[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-height: 60vh;\n  object-fit: contain;\n}\n.cw-cover-fallback[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-height: 60vh;\n  object-fit: cover;\n}\n.cw-video-description[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-top: none;\n  border-radius: 0 0 18px 18px;\n  text-align: center;\n}\n.cw-video-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #64748b;\n  line-height: 1.6;\n}\n.cw-image-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  padding: 20px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n.cw-image-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  display: block;\n  margin: 0 auto;\n  border-radius: 12px;\n}\n.cw-file-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.cw-file-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #fff;\n  border-radius: 18px 18px 0 0;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  padding: 20px 24px;\n}\n.cw-file-card__icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  flex-shrink: 0;\n  border-radius: 12px;\n  background: #e6f7f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #069b8f;\n  font-size: 24px;\n}\n.cw-file-card__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cw-file-card__name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n  color: #0f172a;\n  margin: 0 0 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cw-file-card__hint[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #94a3b8;\n}\n.cw-file-card__btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  text-decoration: none;\n}\n.cw-file-viewer[_ngcontent-%COMP%] {\n  height: 75vh;\n  border: 1px solid #e2e8f0;\n  border-top: none;\n  border-radius: 0 0 18px 18px;\n  overflow: hidden;\n}\n.cw-file-frame[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  display: block;\n}\n.cw-pdf-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  margin-bottom: 20px;\n  overflow: hidden;\n}\n.cw-pdf-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.cw-pdf-header__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #fef2f2;\n  color: #dc2626;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.cw-pdf-header__name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.cw-pdf-header__hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 2px 0 0;\n}\n.cw-pdf-viewer[_ngcontent-%COMP%] {\n  height: 70vh;\n}\n.cw-pdf-frame[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n.cw-text-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  padding: 28px 32px;\n  margin-bottom: 20px;\n}\n.cw-text-intro[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  background: #e6f7f5;\n  border: 1px solid rgba(6, 155, 143, 0.18);\n  border-radius: 12px;\n  padding: 14px 16px;\n  margin-bottom: 22px;\n}\n.cw-text-intro__icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #069b8f;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.cw-text-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: rgb(4.099378882, 105.900621118, 97.701863354);\n  line-height: 1.6;\n}\n.cw-text-body[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.85;\n  color: #475569;\n}\n.cw-text-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.cw-text-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.cw-text-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 800;\n  margin-top: 1.4em;\n  margin-bottom: 0.5em;\n}\n.cw-text-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.cw-text-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.cw-text-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 1em;\n}\n.cw-text-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.cw-text-body[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  padding-left: 1.5em;\n  margin-bottom: 1em;\n}\n.cw-text-body[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.4em;\n}\n.cw-text-body[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  color: #047a6f;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-size: 0.85em;\n}\n.cw-text-body[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  border-left: 3px solid #069b8f;\n  margin: 1.2em 0;\n  padding: 0.7em 1.2em;\n  background: #e6f7f5;\n  border-radius: 0 12px 12px 0;\n  color: #475569;\n  font-style: italic;\n}\n.cw-text-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #069b8f;\n  text-decoration: underline;\n}\n.cw-text-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  border-radius: 12px;\n}\n.cw-quiz-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background: #eef2ff;\n  border: 1px solid rgba(79, 70, 229, 0.2);\n  border-radius: 18px;\n  padding: 24px 28px;\n  margin-bottom: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.cw-quiz-banner__icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 12px;\n  flex-shrink: 0;\n  background: rgba(79, 70, 229, 0.15);\n  color: #4f46e5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n}\n.cw-quiz-banner__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.cw-quiz-banner__sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.5;\n}\n.cw-duration-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 99px;\n  background: #0f172a;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  margin: -12px 0 16px auto;\n  float: right;\n}\n.cw-duration-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.cw-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  margin: 16px 0 0;\n  border-bottom: 2px solid #e2e8f0;\n  clear: both;\n}\n.cw-tabs__item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 12px 20px;\n  border: none;\n  background: none;\n  font-size: 13px;\n  font-weight: 600;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n}\n.cw-tabs__item[_ngcontent-%COMP%]:hover {\n  color: #069b8f;\n}\n.cw-tabs__item--active[_ngcontent-%COMP%] {\n  color: #069b8f;\n  border-bottom-color: #069b8f;\n}\n.cw-tabs__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.cw-tab-content[_ngcontent-%COMP%] {\n  padding: 24px 0;\n}\n.cw-detail-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.cw-detail-header__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1.3;\n  margin: 0 0 14px;\n}\n.cw-detail-header__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n}\n.cw-formateur-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  padding: 16px 20px;\n  margin-bottom: 24px;\n}\n.cw-formateur-card__avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #069b8f;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.cw-formateur-card__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cw-formateur-card__name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 2px;\n}\n.cw-formateur-card__role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 0;\n}\n.cw-formateur-card__btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 12px;\n  padding: 7px 14px;\n}\n.cw-about-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.cw-about-section__title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #94a3b8;\n  margin: 0 0 12px;\n}\n.cw-about-section__body[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.8;\n  color: #475569;\n}\n.cw-about-section__body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.8em;\n}\n.cw-about-section__body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.cw-about-section__body[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  padding-left: 1.5em;\n  margin-bottom: 0.8em;\n}\n.cw-about-section__body[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.3em;\n}\n.cw-skills-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.cw-skills-section__title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #94a3b8;\n  margin: 0 0 12px;\n}\n.cw-skills-section__tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.cw-skill-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 7px 16px;\n  border-radius: 99px;\n  font-size: 13px;\n  font-weight: 600;\n  background: #e6f7f5;\n  color: #069b8f;\n  border: 1px solid rgba(6, 155, 143, 0.2);\n}\n.cw-skill-tag--secondary[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  border-color: #e2e8f0;\n}\n.cw-objectives-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.cw-objectives-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 8px 0;\n  font-size: 14px;\n  color: #475569;\n  line-height: 1.5;\n}\n.cw-objectives-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2713";\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  background: #e6f7f5;\n  color: #069b8f;\n  font-size: 11px;\n  font-weight: 700;\n  margin-top: 1px;\n}\n.cw-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.cw-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 16px 12px;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  text-align: center;\n}\n.cw-info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #069b8f;\n}\n.cw-info-item__label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #94a3b8;\n}\n.cw-info-item__value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.cw-resources-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.cw-resources-section__title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #94a3b8;\n  margin: 0 0 14px;\n}\n.cw-notes-section[_ngcontent-%COMP%] {\n  min-height: 200px;\n}\n.cw-pdf-frame-inline[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 55vh;\n  border: none;\n  display: block;\n}\n.cw-sidebar__header[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 14px 16px;\n  background: #0f172a;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n}\n.cw-sidebar__header-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: rgba(255, 255, 255, 0.7);\n  margin: 0;\n}\n.cw-empty-media[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 48px 20px;\n  color: #94a3b8;\n  text-align: center;\n}\n.cw-empty-media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  margin-bottom: 10px;\n  opacity: 0.5;\n}\n.cw-empty-media[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0;\n}\n.cw-empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 50vh;\n  text-align: center;\n  gap: 10px;\n}\n.cw-empty-state__icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #069b8f;\n  opacity: 0.4;\n  margin-bottom: 4px;\n}\n.cw-empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #334155;\n  margin: 0;\n}\n.cw-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.cw-actions-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n  margin-top: 24px;\n  padding: 18px 22px;\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.cw-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 10px 20px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.cw-btn--complete[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      #047a6f 100%);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.3);\n}\n.cw-btn--complete[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(6, 155, 143, 0.4);\n}\n.cw-btn--complete[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.cw-btn--prev[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  border: 1.5px solid #e2e8f0;\n}\n.cw-btn--prev[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.cw-btn--prev[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.cw-btn--next[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  color: #069b8f;\n  border: 1.5px solid rgba(6, 155, 143, 0.2);\n}\n.cw-btn--next[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.3);\n}\n.cw-btn--next[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.cw-btn--outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #475569;\n  border: 1.5px solid #e2e8f0;\n}\n.cw-btn--outline[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: #0f172a;\n  border-color: #cbd5e1;\n}\n.cw-done-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  background: #f0fdf4;\n  color: #16a34a;\n  border: 1.5px solid rgba(22, 163, 74, 0.25);\n}\n.cw-nav-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-left: auto;\n}\n.cw-congrats[_ngcontent-%COMP%] {\n  margin-top: 28px;\n  padding: 30px 24px;\n  border-radius: 18px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #e6f7f5,\n      #f0fdf4);\n  border: 1px solid rgba(6, 155, 143, 0.18);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  position: relative;\n  overflow: hidden;\n}\n.cw-congrats__icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #d97706;\n  display: block;\n  margin-bottom: 10px;\n}\n.cw-congrats__title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.cw-congrats__sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #475569;\n  margin: 0 0 20px;\n}\n.cw-congrats__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n@keyframes _ngcontent-%COMP%_cw-sparkle {\n  0%, 100% {\n    opacity: 0.4;\n    transform: scale(0.8);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n}\n.cw-sidebar[_ngcontent-%COMP%] {\n  width: 300px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-left: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.cw-sidebar__progress[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 14px 16px;\n  background: #0f172a;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n}\n.cw-sidebar__progress-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.45);\n  margin-bottom: 6px;\n}\n.cw-sidebar__progress-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: rgb(17.2049689441, 245.7950310559, 227.3850931677);\n}\n.cw-sidebar__progress-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.cw-sidebar__progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #069b8f,\n      rgb(8.6608695652, 223.7391304348, 206.4173913043));\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.cw-sidebar__progress-count[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.3);\n  margin-top: 5px;\n}\n.cw-sidebar__content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 8px 0;\n}\n.cw-sidebar__content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.cw-sidebar__content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e2e8f0;\n  border-radius: 4px;\n}\n.cw-sidebar__empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px 20px;\n  color: #94a3b8;\n  text-align: center;\n  font-size: 12px;\n}\n.cw-sidebar__empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 8px;\n  opacity: 0.5;\n}\n.cw-module-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border: none;\n  border-bottom: 1px solid #f1f5f9;\n  cursor: pointer;\n  text-align: left;\n  transition: all 0.2s ease;\n  gap: 8px;\n}\n.cw-module-header[_ngcontent-%COMP%]:hover {\n  background: #e6f7f5;\n}\n.cw-module-header--open[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n}\n.cw-module-header__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.cw-module-header__num[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 6px;\n  background: #069b8f;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cw-module-header__title[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #1e293b;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cw-module-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.cw-section-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 4px 8px 6px;\n}\n.cw-section-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-bottom: 2px;\n}\n.cw-section-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.cw-section-item--active[_ngcontent-%COMP%] {\n  background: #e6f7f5 !important;\n}\n.cw-section-item--active[_ngcontent-%COMP%]   .cw-section-item__title[_ngcontent-%COMP%] {\n  color: #069b8f;\n  font-weight: 600;\n}\n.cw-section-item--active[_ngcontent-%COMP%]   .cw-section-item__status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #069b8f;\n}\n.cw-section-item--done[_ngcontent-%COMP%]   .cw-section-item__status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.cw-section-item--done[_ngcontent-%COMP%]   .cw-section-item__title[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  text-decoration: line-through;\n}\n.cw-section-item__status[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 15px;\n  color: #cbd5e1;\n  margin-top: 1px;\n}\n.cw-section-item__body[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.cw-section-item__title[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12.5px;\n  color: #334155;\n  line-height: 1.4;\n}\n.cw-section-item__duration[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 11px;\n  color: #94a3b8;\n  margin-top: 3px;\n}\n.cw-section-item__duration[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.cw-quiz-loader[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  gap: 16px;\n}\n.cw-quiz-loader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.cw-quiz-start[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n  padding: 40px 32px;\n  margin-bottom: 20px;\n  max-width: 600px;\n  text-align: center;\n}\n.cw-quiz-start__icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #4f46e5;\n  opacity: 0.7;\n  display: block;\n  margin-bottom: 16px;\n}\n.cw-quiz-start__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 10px;\n}\n.cw-quiz-start__sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  line-height: 1.6;\n  margin: 0 0 22px;\n}\n.cw-quiz-start__meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 14px;\n  font-size: 13px;\n  color: #64748b;\n  margin-bottom: 28px;\n}\n.cw-quiz-start__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.cw-quiz-start__meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #4f46e5;\n}\n.cw-quiz-start__btn[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 12px 28px;\n}\n.cw-btn--primary[_ngcontent-%COMP%] {\n  background: #4f46e5;\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.3);\n}\n.cw-btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgb(44.9677725118, 34.2274881517, 223.9725118483);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(79, 70, 229, 0.38);\n}\n.cw-btn--primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.cw-btn--success[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(22, 163, 74, 0.28);\n}\n.cw-btn--success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgb(18.3610810811, 136.0389189189, 61.76);\n  transform: translateY(-1px);\n}\n.cw-btn--success[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.cw-quiz-player[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n  padding: 28px 32px;\n  margin-bottom: 20px;\n  max-width: 700px;\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n.cw-quiz-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.cw-quiz-progress__bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: #e2e8f0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.cw-quiz-progress__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #4f46e5,\n      rgb(164.0805687204, 159.4312796209, 241.5687203791));\n  border-radius: 99px;\n  transition: width 0.35s ease;\n}\n.cw-quiz-progress__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #94a3b8;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.cw-quiz-question__num[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  color: #4f46e5;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  background: #eef2ff;\n  padding: 3px 10px;\n  border-radius: 99px;\n  margin-bottom: 10px;\n}\n.cw-quiz-question__text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n  line-height: 1.4;\n}\n.cw-quiz-question__hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 0;\n  font-style: italic;\n}\n.cw-quiz-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.cw-quiz-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 13px 16px;\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 12px;\n  cursor: pointer;\n  text-align: left;\n  transition: all 0.15s ease;\n  font-size: 14px;\n  color: #334155;\n}\n.cw-quiz-option[_ngcontent-%COMP%]:hover {\n  border-color: rgba(79, 70, 229, 0.45);\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.cw-quiz-option--selected[_ngcontent-%COMP%] {\n  border-color: #4f46e5;\n  background: #eef2ff;\n  color: #4f46e5;\n  font-weight: 600;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);\n}\n.cw-quiz-option__check[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n  line-height: 1;\n  color: inherit;\n}\n.cw-quiz-option__text[_ngcontent-%COMP%] {\n  flex: 1;\n  line-height: 1.4;\n}\n.cw-quiz-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.cw-quiz-results[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n  padding: 32px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.cw-quiz-results__score-wrap[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.cw-quiz-results__score[_ngcontent-%COMP%] {\n  font-size: 52px;\n  font-weight: 900;\n  line-height: 1;\n  margin-bottom: 8px;\n}\n.cw-quiz-results__score--pass[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.cw-quiz-results__score--fail[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.cw-quiz-results__label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #334155;\n}\n.cw-quiz-results__detail[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.cw-quiz-results__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 4px;\n}\n.cw-quiz-correction[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px 18px;\n}\n.cw-quiz-correction__q[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 12px;\n}\n.cw-quiz-correction__num[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  color: #4f46e5;\n  background: #eef2ff;\n  padding: 2px 8px;\n  border-radius: 99px;\n  flex-shrink: 0;\n}\n.cw-quiz-correction__opts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  margin-bottom: 10px;\n}\n.cw-quiz-correction__opt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #64748b;\n  padding: 7px 12px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n}\n.cw-quiz-correction__opt[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  flex-shrink: 0;\n}\n.cw-quiz-correction__opt--correct[_ngcontent-%COMP%] {\n  color: #16a34a;\n  background: #f0fdf4;\n  border-color: rgba(22, 163, 74, 0.25);\n  font-weight: 500;\n}\n.cw-quiz-correction__opt--selected[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fef2f2;\n  border-color: rgba(220, 38, 38, 0.25);\n  font-weight: 500;\n}\n.cw-quiz-correction__opt--right[_ngcontent-%COMP%] {\n  color: #16a34a;\n  background: #f0fdf4;\n  border-color: #16a34a;\n  font-weight: 700;\n}\n.cw-quiz-correction__exp[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin: 8px 0 0;\n  font-style: italic;\n  display: flex;\n  align-items: flex-start;\n  gap: 4px;\n}\n.cw-quiz-correction__exp[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n@media (max-width: 991px) {\n  .cw-shell[_ngcontent-%COMP%] {\n    height: auto;\n    overflow: visible;\n  }\n  .cw-body[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    overflow: visible;\n  }\n  .cw-main[_ngcontent-%COMP%] {\n    overflow: visible;\n    padding: 18px 16px;\n  }\n  .cw-topbar__progress[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .cw-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    border-left: none;\n    border-bottom: 1px solid #e2e8f0;\n    max-height: 40vh;\n    overflow: hidden;\n  }\n}\n@media (max-width: 575px) {\n  .cw-main[_ngcontent-%COMP%] {\n    padding: 14px 12px;\n  }\n  .cw-section-header__title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .cw-text-card[_ngcontent-%COMP%] {\n    padding: 18px 16px;\n  }\n  .cw-nav-btns[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .cw-nav-btns[_ngcontent-%COMP%]   .cw-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n  .cw-topbar__title[_ngcontent-%COMP%] {\n    max-width: 36vw;\n  }\n}\n/*# sourceMappingURL=course-watch.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseWatchComponent, [{
    type: Component,
    args: [{ selector: "app-course-watch", imports: [CommonModule, RouterLink], template: `<!-- LOADER -->
<div *ngIf="loading" class="cw-loader">
  <div class="cw-loader__ring"></div>
  <p class="cw-loader__text">Chargement de la formation...</p>
</div>

<!-- ERREUR -->
<div *ngIf="!loading && error" class="cw-error">
  <div class="cw-error__icon"><i class="isax isax-warning-2"></i></div>
  <h3>Impossible de charger la formation</h3>
  <p>{{ error }}</p>
  <a [routerLink]="routes.courseList" class="cw-btn cw-btn--outline mt-3">Retour aux formations</a>
</div>

<!-- PLAYER -->
<div class="cw-shell" *ngIf="!loading && !error && formation">

  <!-- \u2500\u2500 TOP BAR \u2500\u2500 -->
  <header class="cw-topbar">
    <div class="cw-topbar__left">
      <button class="cw-topbar__back" (click)="goBack()">
        <i class="isax isax-arrow-left-2"></i>
      </button>
      <div class="cw-topbar__info">
        <span class="cw-topbar__label">Formation</span>
        <h1 class="cw-topbar__title">{{ formation.titre }}</h1>
      </div>
    </div>

    <div class="cw-topbar__right">
      <div class="cw-topbar__progress">
        <div class="cw-topbar__progress-track">
          <div class="cw-topbar__progress-fill" [style.width.%]="progressPercent"></div>
        </div>
        <span class="cw-topbar__progress-label">
          {{ completedIds.size }}/{{ totalSectionsCount }}
          <strong>{{ progressPercent }}%</strong>
        </span>
      </div>
    </div>
  </header>

  <!-- \u2500\u2500 BODY \u2500\u2500 -->
  <div class="cw-body">

    <!-- \u2550\u2550 MAIN \u2550\u2550 -->
    <main class="cw-main">

      <!-- Alerte erreur progression -->
      <div *ngIf="error" class="cw-alert cw-alert--danger mb-4">
        <i class="isax isax-warning-2 me-2"></i>{{ error }}
        <button class="cw-alert__close" (click)="error = ''">
          <i class="isax isax-close-circle"></i>
        </button>
      </div>

      <ng-container *ngIf="activeSection">

        <!-- Breadcrumb -->
        <div class="cw-breadcrumb">
          <button class="cw-breadcrumb__back" (click)="goBack()">
            <i class="isax isax-arrow-left-2 me-1"></i>Retour
          </button>
          <i class="isax isax-arrow-right-3 cw-breadcrumb__sep"></i>
          <span class="cw-breadcrumb__module">{{ formation.titre }}</span>
          <i class="isax isax-arrow-right-3 cw-breadcrumb__sep"></i>
          <span class="cw-breadcrumb__current">{{ activeModule?.titre }}</span>
        </div>

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <!-- MEDIA AREA (vid\xE9o, image, fichier, pdf) -->
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

        <!-- \u2500\u2500 VID\xC9O (YouTube) \u2500\u2500 -->
        <ng-container *ngIf="(activeSection.type === 'video' || activeSection.type === 'lecture') && hasResource(activeSection) && isYouTube(activeSection.ressources)">
          <div class="cw-media-wrap cw-media-wrap--video">
            <div class="cw-embed-wrap">
              <iframe [src]="getYouTubeEmbedUrl(activeSection.ressources)"
                      frameborder="0" allowfullscreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      [title]="activeSection.titre">
              </iframe>
            </div>
          </div>
        </ng-container>

        <!-- \u2500\u2500 VID\xC9O (fichier local) \u2500\u2500 -->
        <ng-container *ngIf="(activeSection.type === 'video' || activeSection.type === 'lecture') && hasResource(activeSection) && !isYouTube(activeSection.ressources)">
          <div class="cw-media-wrap cw-media-wrap--video">
            <video class="cw-video-native" controls preload="metadata"
                   [src]="getVideoUrl(activeSection.ressources)">
              Votre navigateur ne supporte pas la lecture vid\xE9o.
            </video>
          </div>
        </ng-container>

        <!-- \u2500\u2500 VID\xC9O sans ressource \u2192 image couverture \u2500\u2500 -->
        <ng-container *ngIf="(activeSection.type === 'video' || activeSection.type === 'lecture') && !hasResource(activeSection)">
          <div class="cw-media-wrap cw-media-wrap--video">
            <img [src]="getImageUrl(formation.image_couverture)"
                 class="cw-cover-fallback" [alt]="activeSection.titre">
          </div>
        </ng-container>

        <!-- \u2500\u2500 IMAGE \u2500\u2500 -->
        <ng-container *ngIf="activeSection.type === 'image'">
          <div class="cw-media-wrap">
            <div *ngIf="hasResource(activeSection); else noImageMedia">
              <img [src]="getImageUrl(resolveResourceUrl(activeSection.ressources))"
                   class="cw-cover-fallback"
                   [alt]="activeSection.titre">
            </div>
            <ng-template #noImageMedia>
              <div class="cw-empty-media">
                <i class="isax isax-gallery fs-36 d-block mb-2"></i>
                <p>Image non disponible.</p>
              </div>
            </ng-template>
          </div>
        </ng-container>

        <!-- \u2500\u2500 PDF inline (dans zone media) \u2500\u2500 -->
        <ng-container *ngIf="activeSection.type === 'pdf' && hasResource(activeSection)">
          <div class="cw-media-wrap">
            <iframe [src]="getPdfUrl(activeSection.ressources)" class="cw-pdf-frame-inline"></iframe>
          </div>
        </ng-container>

        <!-- \u2500\u2500 FICHIER (zone media = aper\xE7u int\xE9gr\xE9 si possible) \u2500\u2500 -->
        <ng-container *ngIf="activeSection.type === 'fichier' && hasResource(activeSection) && isViewableFile(activeSection.ressources)">
          <div class="cw-media-wrap">
            <iframe [src]="getFileViewerUrl(activeSection.ressources)"
                    class="cw-pdf-frame-inline"
                    frameborder="0" allowfullscreen
                    [title]="activeSection.titre">
            </iframe>
          </div>
        </ng-container>

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <!-- DURATION BADGE (sous la vid\xE9o) -->
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <div class="cw-duration-badge" *ngIf="activeSection.duree_estimee">
          <i class="isax isax-clock"></i>
          <span>{{ formatDuration(activeSection.duree_estimee) }}</span>
        </div>

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <!-- ACTIONS BAR (Pr\xE9c\xE9dent / Compl\xE9t\xE9e / Suivant) -->
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <div class="cw-actions-bar">
          <button class="cw-btn cw-btn--prev" [disabled]="!hasPrev" (click)="navigatePrev()">
            <i class="isax isax-arrow-left-2 me-1"></i>Pr\xE9c\xE9dent
          </button>

          <button class="cw-btn cw-btn--complete"
                  *ngIf="!isSectionCompleted(activeSection.id)"
                  [disabled]="markDoneLoading"
                  (click)="markDone()">
            <span *ngIf="markDoneLoading"
                  class="spinner-border spinner-border-sm me-2" role="status"></span>
            <i *ngIf="!markDoneLoading" class="isax isax-tick-circle me-2"></i>
            Marquer comme compl\xE9t\xE9
          </button>

          <div class="cw-done-badge" *ngIf="isSectionCompleted(activeSection.id)">
            <i class="isax isax-tick-circle me-2"></i>Section compl\xE9t\xE9e
          </div>

          <button class="cw-btn cw-btn--next" [disabled]="!hasNext" (click)="navigateNext()">
            Suivant<i class="isax isax-arrow-right-2 ms-1"></i>
          </button>
        </div>

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <!-- TABS (Description / Ressources / Mes notes) -->
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <div class="cw-tabs">
          <button class="cw-tabs__item" [class.cw-tabs__item--active]="activeTab === 'overview'" (click)="setTab('overview')">
            <i class="isax isax-document-text me-1"></i>Description
          </button>
          <button class="cw-tabs__item" [class.cw-tabs__item--active]="activeTab === 'faq'" (click)="setTab('faq')">
            <i class="isax isax-folder-open me-1"></i>Ressources ({{ getResourceCount() }})
          </button>
          <button class="cw-tabs__item" [class.cw-tabs__item--active]="activeTab === 'notes'" (click)="setTab('notes')">
            <i class="isax isax-note-2 me-1"></i>Mes notes
          </button>
        </div>

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <!-- TAB CONTENT: DESCRIPTION -->
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <div class="cw-tab-content" *ngIf="activeTab === 'overview'">

          <!-- Section title + meta -->
          <div class="cw-detail-header">
            <h2 class="cw-detail-header__title">{{ activeSection.titre }}</h2>
            <div class="cw-detail-header__meta">
              <span class="cw-meta-tag" *ngIf="activeSection.duree_estimee">
                <i class="isax isax-clock me-1"></i>{{ formatDuration(activeSection.duree_estimee) }}
              </span>
              <span class="cw-meta-tag">
                <i class="isax {{ getSectionIcon(activeSection.type) }} me-1"></i>{{ activeSection.type || 'Texte' | titlecase }}
              </span>
              <span class="cw-meta-tag cw-meta-tag--done" *ngIf="isSectionCompleted(activeSection.id)">
                <i class="isax isax-tick-circle me-1"></i>Compl\xE9t\xE9e
              </span>
              <span class="cw-meta-tag">
                <i class="isax isax-book-1 me-1"></i>Module {{ getModuleIndex() + 1 }} \xB7 {{ activeModule?.titre }}
              </span>
            </div>
          </div>

          <!-- Formateur card -->
          <div class="cw-formateur-card" *ngIf="formation.formateur_details || formation.formateur">
            <div class="cw-formateur-card__avatar">
              <span>{{ getFormateurInitials() }}</span>
            </div>
            <div class="cw-formateur-card__info">
              <p class="cw-formateur-card__name">{{ formation.formateur_details?.nom || formation.formateur?.nom_complet || 'Formateur' }}</p>
              <p class="cw-formateur-card__role">{{ formation.formateur_details?.fonction || 'Formateur' }} \xB7 {{ formation.formateur_details?.entreprise || 'Pyramide IT' }}</p>
            </div>
            <button class="cw-btn cw-btn--outline cw-formateur-card__btn">Voir le profil</button>
          </div>

          <!-- \xC0 propos de cette le\xE7on -->
          <div class="cw-about-section" *ngIf="activeSection.description || activeSection.contenu || activeModule?.description">
            <h3 class="cw-about-section__title">\xC0 propos de cette le\xE7on</h3>
            <div class="cw-about-section__body" [innerHTML]="activeSection.description || activeSection.contenu || activeModule?.description"></div>
          </div>

          <!-- Description du module -->
          <div class="cw-about-section" *ngIf="activeModule?.description && (activeSection.description || activeSection.contenu)">
            <h3 class="cw-about-section__title">\xC0 propos du module</h3>
            <div class="cw-about-section__body" [innerHTML]="activeModule.description"></div>
          </div>

          <!-- Objectifs du module -->
          <div class="cw-about-section" *ngIf="activeModule?.objectifs">
            <h3 class="cw-about-section__title">Objectifs du module</h3>
            <div class="cw-about-section__body" [innerHTML]="activeModule.objectifs"></div>
          </div>

          <!-- Ce que vous allez apprendre (comp\xE9tences / tags) -->
          <div class="cw-skills-section" *ngIf="(formation.competences_acquises && formation.competences_acquises.length) || (formation.tags && formation.tags.length)">
            <h3 class="cw-skills-section__title">Ce que vous allez apprendre</h3>
            <div class="cw-skills-section__tags">
              <span class="cw-skill-tag" *ngFor="let comp of formation.competences_acquises">{{ comp }}</span>
              <span class="cw-skill-tag cw-skill-tag--secondary" *ngFor="let tag of formation.tags">{{ tag }}</span>
            </div>
          </div>

          <!-- Objectifs p\xE9dagogiques de la formation -->
          <div class="cw-about-section" *ngIf="formation.objectifs_pedagogiques">
            <h3 class="cw-about-section__title">Objectifs p\xE9dagogiques</h3>
            <ul class="cw-objectives-list">
              <li *ngFor="let obj of getObjectifsList(formation.objectifs_pedagogiques)">{{ obj }}</li>
            </ul>
          </div>

          <!-- Infos suppl\xE9mentaires formation -->
          <div class="cw-info-grid" *ngIf="formation.niveau || formation.duree_totale || formation.langue || formation.difficulte">
            <div class="cw-info-item" *ngIf="formation.niveau">
              <i class="isax isax-chart-2"></i>
              <span class="cw-info-item__label">Niveau</span>
              <span class="cw-info-item__value">{{ formation.niveau_display || formation.niveau }}</span>
            </div>
            <div class="cw-info-item" *ngIf="formation.duree_totale">
              <i class="isax isax-clock"></i>
              <span class="cw-info-item__label">Dur\xE9e totale</span>
              <span class="cw-info-item__value">{{ formatDuration(formation.duree_totale) }}</span>
            </div>
            <div class="cw-info-item" *ngIf="formation.langue">
              <i class="isax isax-global"></i>
              <span class="cw-info-item__label">Langue</span>
              <span class="cw-info-item__value">{{ formation.langue }}</span>
            </div>
            <div class="cw-info-item" *ngIf="formation.est_certifiante">
              <i class="isax isax-award"></i>
              <span class="cw-info-item__label">Certifiante</span>
              <span class="cw-info-item__value">Oui</span>
            </div>
          </div>

        </div>

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <!-- TAB CONTENT: RESSOURCES -->
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <div class="cw-tab-content" *ngIf="activeTab === 'faq'">

          <!-- Ressources de la section active -->
          <div class="cw-resources-section">
            <h3 class="cw-resources-section__title">Ressources de la section</h3>

            <div *ngIf="hasResource(activeSection); else noResources">
              <!-- Fichier t\xE9l\xE9chargeable -->
              <div class="cw-file-card">
                <div class="cw-file-card__icon"><i class="isax isax-document-download"></i></div>
                <div class="cw-file-card__info">
                  <p class="cw-file-card__name">{{ activeSection.titre }}</p>
                  <p class="cw-file-card__hint">{{ activeSection.type || 'Document' }}</p>
                </div>
                <a [href]="getFileFullUrl(activeSection.ressources)"
                   target="_blank" download
                   class="cw-btn cw-btn--primary cw-file-card__btn">
                  <i class="isax isax-document-download me-2"></i>T\xE9l\xE9charger
                </a>
              </div>
            </div>

            <ng-template #noResources>
              <div class="cw-empty-media">
                <i class="isax isax-folder-open fs-36 d-block mb-2"></i>
                <p>Aucune ressource disponible pour cette section.</p>
              </div>
            </ng-template>
          </div>

          <!-- Outils requis -->
          <div class="cw-about-section" *ngIf="formation.outils_requis && formation.outils_requis.length">
            <h3 class="cw-about-section__title">Outils requis</h3>
            <div class="cw-skills-section__tags">
              <span class="cw-skill-tag cw-skill-tag--secondary" *ngFor="let outil of formation.outils_requis">{{ outil }}</span>
            </div>
          </div>
        </div>

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <!-- TAB CONTENT: NOTES -->
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <div class="cw-tab-content" *ngIf="activeTab === 'notes'">
          <div class="cw-notes-section">
            <div class="cw-empty-media">
              <i class="isax isax-note-2 fs-36 d-block mb-2"></i>
              <p>Les notes personnelles seront bient\xF4t disponibles.</p>
            </div>
          </div>
        </div>

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <!-- QUIZ (reste inchang\xE9 \u2014 affich\xE9 \xE0 la place de la media) -->
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <ng-container *ngIf="activeSection.type === 'quiz' || activeSection.type === 'assignment'">

          <!-- Loading quiz -->
          <div *ngIf="quizLoading" class="cw-quiz-loader">
            <div class="spinner-border text-primary" role="status"></div>
            <p>Chargement du quiz...</p>
          </div>

          <!-- Pas de quiz associ\xE9 -->
          <div *ngIf="!quizLoading && !quiz" class="cw-quiz-banner">
            <div class="cw-quiz-banner__icon"><i class="isax isax-task-square"></i></div>
            <div>
              <h4 class="cw-quiz-banner__title">{{ activeSection.titre }}</h4>
              <p class="cw-quiz-banner__sub">{{ activeSection.description || 'Quiz non encore disponible.' }}</p>
            </div>
          </div>

          <!-- Quiz charg\xE9 \u2014 \xE9cran d'accueil -->
          <div *ngIf="!quizLoading && quiz && !quizStarted && !quizFinished" class="cw-quiz-start">
            <div class="cw-quiz-start__icon"><i class="isax isax-task-square"></i></div>
            <h3 class="cw-quiz-start__title">{{ quiz.titre || activeSection.titre }}</h3>
            <p class="cw-quiz-start__sub">{{ quiz.description || activeSection.description }}</p>
            <div class="cw-quiz-start__meta">
              <span><i class="isax isax-message-question me-1"></i>{{ quiz.questions?.length || 0 }} questions</span>
              <span *ngIf="quiz.duree_minutes"><i class="isax isax-clock me-1"></i>{{ quiz.duree_minutes }} min</span>
              <span *ngIf="quiz.score_minimum"><i class="isax isax-award me-1"></i>Score minimum : {{ quiz.score_minimum }}%</span>
            </div>
            <button class="cw-btn cw-btn--primary cw-quiz-start__btn" (click)="startQuiz()">
              <i class="isax isax-play-circle me-2"></i>Commencer le quiz
            </button>
          </div>

          <!-- Quiz en cours -->
          <div *ngIf="!quizLoading && quiz && quizStarted && !quizFinished && currentQuestion" class="cw-quiz-player">
            <div class="cw-quiz-progress">
              <div class="cw-quiz-progress__bar">
                <div class="cw-quiz-progress__fill"
                     [style.width.%]="((currentQuestionIndex + 1) / (quiz.questions?.length || 1)) * 100"></div>
              </div>
              <span class="cw-quiz-progress__label">Question {{ currentQuestionIndex + 1 }} / {{ quiz.questions?.length }}</span>
            </div>

            <div class="cw-quiz-question">
              <div class="cw-quiz-question__num">Q{{ currentQuestionIndex + 1 }}</div>
              <h4 class="cw-quiz-question__text">{{ currentQuestion.question_text }}</h4>
              <p class="cw-quiz-question__hint">
                {{ currentQuestion.type === 'multiple_choice_multi' ? 'Plusieurs r\xE9ponses possibles' :
                   currentQuestion.type === 'true_false' ? 'Vrai ou Faux' : 'Une seule r\xE9ponse' }}
              </p>
            </div>

            <div class="cw-quiz-options">
              <button *ngFor="let opt of currentQuestion.reponses"
                      type="button"
                      class="cw-quiz-option"
                      [class.cw-quiz-option--selected]="isAnswerSelected(currentQuestion.id, opt.id)"
                      (click)="toggleAnswer(currentQuestion.id, opt.id, currentQuestion.type)">
                <span class="cw-quiz-option__check">
                  <i *ngIf="isAnswerSelected(currentQuestion.id, opt.id)" class="isax isax-tick-circle"></i>
                  <i *ngIf="!isAnswerSelected(currentQuestion.id, opt.id)" class="isax isax-record-circle"></i>
                </span>
                <span class="cw-quiz-option__text">{{ opt.texte }}</span>
              </button>
            </div>

            <div class="cw-quiz-nav">
              <button class="cw-btn cw-btn--outline" [disabled]="currentQuestionIndex === 0" (click)="prevQuestion()">
                <i class="isax isax-arrow-left-2 me-1"></i>Pr\xE9c\xE9dent
              </button>
              <button *ngIf="currentQuestionIndex < (quiz.questions?.length || 0) - 1"
                      class="cw-btn cw-btn--primary" (click)="nextQuestion()">
                Suivant<i class="isax isax-arrow-right-2 ms-1"></i>
              </button>
              <button *ngIf="currentQuestionIndex === (quiz.questions?.length || 0) - 1"
                      class="cw-btn cw-btn--success" (click)="submitQuiz()">
                <i class="isax isax-tick-circle me-2"></i>Terminer le quiz
              </button>
            </div>
          </div>

          <!-- R\xE9sultats -->
          <div *ngIf="!quizLoading && quiz && quizFinished" class="cw-quiz-results">
            <div class="cw-quiz-results__score-wrap">
              <div class="cw-quiz-results__score"
                   [class.cw-quiz-results__score--pass]="quizScore >= (quiz.score_minimum || 50)"
                   [class.cw-quiz-results__score--fail]="quizScore < (quiz.score_minimum || 50)">
                {{ quizScore }}%
              </div>
              <div class="cw-quiz-results__label">
                {{ quizScore >= (quiz.score_minimum || 50) ? 'R\xE9ussi !' : 'Non valid\xE9' }}
              </div>
            </div>
            <p class="cw-quiz-results__detail">
              Score minimum requis : {{ quiz.score_minimum || 50 }}%
            </p>
            <div class="cw-quiz-correction" *ngFor="let q of quiz.questions; let qi = index">
              <div class="cw-quiz-correction__q">
                <span class="cw-quiz-correction__num">Q{{ qi + 1 }}</span>
                {{ q.question_text }}
              </div>
              <div class="cw-quiz-correction__opts">
                <div *ngFor="let opt of q.reponses" class="cw-quiz-correction__opt"
                     [class.cw-quiz-correction__opt--correct]="opt.est_correcte"
                     [class.cw-quiz-correction__opt--selected]="isAnswerSelected(q.id, opt.id) && !opt.est_correcte"
                     [class.cw-quiz-correction__opt--right]="isAnswerSelected(q.id, opt.id) && opt.est_correcte">
                  <i class="isax"
                     [class.isax-tick-circle]="opt.est_correcte"
                     [class.isax-close-circle]="isAnswerSelected(q.id, opt.id) && !opt.est_correcte"
                     [class.isax-record-circle]="!opt.est_correcte && !isAnswerSelected(q.id, opt.id)"></i>
                  {{ opt.texte }}
                </div>
              </div>
              <p *ngIf="q.explication" class="cw-quiz-correction__exp">
                <i class="isax isax-info-circle me-1"></i>{{ q.explication }}
              </p>
            </div>
            <div class="cw-quiz-results__actions">
              <button class="cw-btn cw-btn--outline" (click)="retryQuiz()">
                <i class="isax isax-refresh me-2"></i>Recommencer
              </button>
            </div>
          </div>

        </ng-container>

        <!-- \u2500\u2500 TEXTE / LECTURE (contenu inline sans media) \u2500\u2500 -->
        <ng-container *ngIf="(activeSection.type === 'texte' || activeSection.type === 'text' || activeSection.type === 'reading' || !activeSection.type) && activeTab === 'overview'">
          <div class="cw-text-card" *ngIf="activeSection.contenu || activeSection.description">
            <div class="cw-text-intro" *ngIf="activeSection.resume || activeSection.intro">
              <i class="isax isax-info-circle cw-text-intro__icon"></i>
              <p>{{ activeSection.resume || activeSection.intro }}</p>
            </div>
            <div class="cw-text-body" [innerHTML]="activeSection.contenu || activeSection.description"></div>
          </div>
        </ng-container>

        <!-- F\xE9licitations (formation termin\xE9e) -->
        <div class="cw-congrats" *ngIf="progressPercent === 100">
          <div class="cw-congrats__icon"><i class="isax isax-award"></i></div>
          <h3 class="cw-congrats__title">Formation termin\xE9e \u2014 F\xE9licitations !</h3>
          <p class="cw-congrats__sub">Vous avez compl\xE9t\xE9 toutes les sections \xB7 Score moyen : \u2014</p>
          <div class="cw-congrats__actions">
            <button class="cw-btn cw-btn--primary" *ngIf="formation.est_certifiante">
              <i class="isax isax-award me-2"></i>Mon certificat
            </button>
            <a [routerLink]="routes.courseList" class="cw-btn cw-btn--outline">
              Voir mes formations
            </a>
          </div>
        </div>

      </ng-container>

      <!-- Aucune section s\xE9lectionn\xE9e -->
      <div *ngIf="!activeSection" class="cw-empty-state">
        <div class="cw-empty-state__icon"><i class="isax isax-play-circle"></i></div>
        <h3>S\xE9lectionnez une section</h3>
        <p>Choisissez une section dans le menu \xE0 droite pour commencer.</p>
      </div>

    </main>

    <!-- \u2550\u2550 SIDEBAR \u2550\u2550 -->
    <aside class="cw-sidebar">

      <div class="cw-sidebar__header">
        <h3 class="cw-sidebar__header-title">Sommaire de la formation</h3>
      </div>

      <div class="cw-sidebar__progress">
        <div class="cw-sidebar__progress-info">
          <span>Progression</span>
          <strong>{{ progressPercent }}% \xB7 {{ completedIds.size }}/{{ totalSectionsCount }}</strong>
        </div>
        <div class="cw-sidebar__progress-bar">
          <div class="cw-sidebar__progress-fill" [style.width.%]="progressPercent"></div>
        </div>
      </div>

      <div class="cw-sidebar__content">
        <div *ngFor="let mod of formation.modules; let mi = index" class="cw-sidebar__module">

          <button class="cw-module-header"
                  (click)="toggleModule(mod.id)"
                  [class.cw-module-header--open]="isModuleOpen(mod.id)">
            <div class="cw-module-header__left">
              <span class="cw-module-header__num">{{ mi + 1 }}</span>
              <span class="cw-module-header__title">{{ mod.titre }}</span>
            </div>
            <i class="isax"
               [class.isax-arrow-up-2]="isModuleOpen(mod.id)"
               [class.isax-arrow-down-2]="!isModuleOpen(mod.id)"></i>
          </button>

          <ul class="cw-section-list" *ngIf="isModuleOpen(mod.id)">
            <li *ngFor="let section of mod.sections || []"
                class="cw-section-item"
                [class.cw-section-item--active]="isActiveSection(section.id)"
                [class.cw-section-item--done]="isSectionCompleted(section.id)"
                (click)="selectSection(section, mod)">

              <div class="cw-section-item__status">
                <i class="isax"
                   [class.isax-tick-circle]="isSectionCompleted(section.id)"
                   [class.isax-play-circle]="!isSectionCompleted(section.id) && (section.type === 'video' || section.type === 'lecture')"
                   [class.isax-document-text]="!isSectionCompleted(section.id) && (section.type === 'texte' || section.type === 'text' || section.type === 'reading')"
                   [class.isax-document]="!isSectionCompleted(section.id) && section.type === 'pdf'"
                   [class.isax-gallery]="!isSectionCompleted(section.id) && section.type === 'image'"
                   [class.isax-document-download]="!isSectionCompleted(section.id) && section.type === 'fichier'"
                   [class.isax-task-square]="!isSectionCompleted(section.id) && (section.type === 'quiz' || section.type === 'assignment')"
                   [class.isax-play-circle5]="!isSectionCompleted(section.id) && !section.type">
                </i>
              </div>

              <div class="cw-section-item__body">
                <span class="cw-section-item__title">{{ section.titre }}</span>
                <div class="cw-section-item__meta">
                  <span *ngIf="section.duree_estimee" class="cw-section-item__duration">
                    <i class="isax isax-clock me-1"></i>{{ formatDuration(section.duree_estimee) }}
                  </span>
                  <span *ngIf="section.type" class="cw-section-item__type">{{ section.type | titlecase }}</span>
                </div>
              </div>

            </li>
          </ul>

        </div>

        <div *ngIf="!formation.modules?.length" class="cw-sidebar__empty">
          <i class="isax isax-folder-open d-block mb-2"></i>
          <small>Aucun module disponible</small>
        </div>
      </div>

    </aside>

  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/courses/course-watch/course-watch.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  background: #f8fafc;\n  font-family: inherit;\n}\n.cw-loader {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 80vh;\n  gap: 16px;\n}\n.cw-loader__ring {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: 3px solid #e2e8f0;\n  border-top-color: #069b8f;\n  animation: cw-spin 0.7s linear infinite;\n}\n.cw-loader__text {\n  font-size: 14px;\n  color: #94a3b8;\n}\n@keyframes cw-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cw-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 80vh;\n  padding: 40px;\n  text-align: center;\n  gap: 10px;\n}\n.cw-error__icon {\n  font-size: 3rem;\n  color: #dc2626;\n}\n.cw-error h3 {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.cw-error p {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n  max-width: 380px;\n}\n.cw-shell {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 60px);\n  overflow: hidden;\n}\n.cw-topbar {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 56px;\n  padding: 0 20px;\n  background: #0f172a;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n  gap: 16px;\n  z-index: 100;\n}\n.cw-topbar__left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.cw-topbar__right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.cw-topbar__back {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  background: rgba(255, 255, 255, 0.09);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 8px;\n  color: #fff;\n  font-size: 16px;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n}\n.cw-topbar__back:hover {\n  background: rgba(255, 255, 255, 0.18);\n}\n.cw-topbar__info {\n  min-width: 0;\n}\n.cw-topbar__label {\n  display: block;\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: rgba(255, 255, 255, 0.38);\n  font-weight: 600;\n}\n.cw-topbar__title {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 44vw;\n}\n.cw-topbar__progress {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.cw-topbar__progress-track {\n  width: 120px;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.12);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.cw-topbar__progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #069b8f,\n      rgb(8.6608695652, 223.7391304348, 206.4173913043));\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.cw-topbar__progress-label {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.45);\n  white-space: nowrap;\n}\n.cw-topbar__progress-label strong {\n  color: rgb(17.2049689441, 245.7950310559, 227.3850931677);\n  margin-left: 4px;\n}\n.cw-body {\n  flex: 1;\n  display: flex;\n  overflow: hidden;\n}\n.cw-main {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px 28px;\n  background: #f8fafc;\n  min-width: 0;\n}\n.cw-main::-webkit-scrollbar {\n  width: 5px;\n}\n.cw-main::-webkit-scrollbar-track {\n  background: #f1f5f9;\n}\n.cw-main::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 4px;\n}\n.cw-content-wrap {\n  max-width: 860px;\n  margin: 0 auto;\n}\n.cw-alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.cw-alert--danger {\n  background: #fef2f2;\n  color: #dc2626;\n  border: 1px solid rgba(220, 38, 38, 0.2);\n}\n.cw-alert__close {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  font-size: 16px;\n  padding: 0;\n}\n.cw-breadcrumb {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n  font-size: 12px;\n  color: #94a3b8;\n  margin-bottom: 18px;\n}\n.cw-breadcrumb__back {\n  display: inline-flex;\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #069b8f;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 0;\n  transition: all 0.2s ease;\n}\n.cw-breadcrumb__back:hover {\n  text-decoration: underline;\n}\n.cw-breadcrumb__sep {\n  font-size: 10px;\n  color: #cbd5e1;\n}\n.cw-breadcrumb__module {\n  color: #64748b;\n  font-weight: 500;\n}\n.cw-breadcrumb__current {\n  color: #069b8f;\n  font-weight: 600;\n}\n.cw-section-header {\n  margin-bottom: 20px;\n}\n.cw-section-header__type-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  padding: 4px 12px;\n  border-radius: 99px;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n.cw-section-header__type-badge[data-type=video],\n.cw-section-header__type-badge[data-type=lecture] {\n  background: rgba(6, 155, 143, 0.1);\n  color: #069b8f;\n}\n.cw-section-header__type-badge[data-type=texte],\n.cw-section-header__type-badge[data-type=text],\n.cw-section-header__type-badge[data-type=reading] {\n  background: rgba(124, 58, 237, 0.1);\n  color: #7c3aed;\n}\n.cw-section-header__type-badge[data-type=pdf] {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n}\n.cw-section-header__type-badge[data-type=quiz],\n.cw-section-header__type-badge[data-type=assignment] {\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.cw-section-header__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1.3;\n  letter-spacing: -0.3px;\n  margin: 0 0 12px;\n}\n.cw-section-header__meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.cw-meta-tag {\n  display: inline-flex;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 99px;\n  background: #f1f5f9;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.cw-meta-tag--done {\n  background: #f0fdf4;\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.cw-media-wrap {\n  border-radius: 18px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.cw-media-wrap--video {\n  background: #0f172a;\n}\n.cw-embed-wrap {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n}\n.cw-embed-wrap iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n.cw-video-native {\n  display: block;\n  width: 100%;\n  max-height: 60vh;\n  object-fit: contain;\n}\n.cw-cover-fallback {\n  display: block;\n  width: 100%;\n  max-height: 60vh;\n  object-fit: cover;\n}\n.cw-video-description {\n  padding: 14px 18px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-top: none;\n  border-radius: 0 0 18px 18px;\n  text-align: center;\n}\n.cw-video-description p {\n  margin: 0;\n  font-size: 13px;\n  color: #64748b;\n  line-height: 1.6;\n}\n.cw-image-wrap {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  padding: 20px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n.cw-image-wrap img {\n  max-width: 100%;\n  display: block;\n  margin: 0 auto;\n  border-radius: 12px;\n}\n.cw-file-wrap {\n  margin-bottom: 20px;\n}\n.cw-file-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #fff;\n  border-radius: 18px 18px 0 0;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  padding: 20px 24px;\n}\n.cw-file-card__icon {\n  width: 52px;\n  height: 52px;\n  flex-shrink: 0;\n  border-radius: 12px;\n  background: #e6f7f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #069b8f;\n  font-size: 24px;\n}\n.cw-file-card__info {\n  flex: 1;\n  min-width: 0;\n}\n.cw-file-card__name {\n  font-weight: 600;\n  font-size: 15px;\n  color: #0f172a;\n  margin: 0 0 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cw-file-card__hint {\n  margin: 0;\n  font-size: 13px;\n  color: #94a3b8;\n}\n.cw-file-card__btn {\n  flex-shrink: 0;\n  text-decoration: none;\n}\n.cw-file-viewer {\n  height: 75vh;\n  border: 1px solid #e2e8f0;\n  border-top: none;\n  border-radius: 0 0 18px 18px;\n  overflow: hidden;\n}\n.cw-file-frame {\n  width: 100%;\n  height: 100%;\n  border: none;\n  display: block;\n}\n.cw-pdf-wrap {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  margin-bottom: 20px;\n  overflow: hidden;\n}\n.cw-pdf-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.cw-pdf-header__icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #fef2f2;\n  color: #dc2626;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.cw-pdf-header__name {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.cw-pdf-header__hint {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 2px 0 0;\n}\n.cw-pdf-viewer {\n  height: 70vh;\n}\n.cw-pdf-frame {\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n.cw-text-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  padding: 28px 32px;\n  margin-bottom: 20px;\n}\n.cw-text-intro {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  background: #e6f7f5;\n  border: 1px solid rgba(6, 155, 143, 0.18);\n  border-radius: 12px;\n  padding: 14px 16px;\n  margin-bottom: 22px;\n}\n.cw-text-intro__icon {\n  font-size: 18px;\n  color: #069b8f;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.cw-text-intro p {\n  margin: 0;\n  font-size: 14px;\n  color: rgb(4.099378882, 105.900621118, 97.701863354);\n  line-height: 1.6;\n}\n.cw-text-body {\n  font-size: 15px;\n  line-height: 1.85;\n  color: #475569;\n}\n.cw-text-body h2,\n.cw-text-body h3,\n.cw-text-body h4 {\n  color: #0f172a;\n  font-weight: 800;\n  margin-top: 1.4em;\n  margin-bottom: 0.5em;\n}\n.cw-text-body h2 {\n  font-size: 20px;\n}\n.cw-text-body h3 {\n  font-size: 17px;\n}\n.cw-text-body p {\n  margin: 0 0 1em;\n}\n.cw-text-body ul,\n.cw-text-body ol {\n  padding-left: 1.5em;\n  margin-bottom: 1em;\n}\n.cw-text-body li {\n  margin-bottom: 0.4em;\n}\n.cw-text-body code {\n  background: #e6f7f5;\n  color: #047a6f;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-size: 0.85em;\n}\n.cw-text-body blockquote {\n  border-left: 3px solid #069b8f;\n  margin: 1.2em 0;\n  padding: 0.7em 1.2em;\n  background: #e6f7f5;\n  border-radius: 0 12px 12px 0;\n  color: #475569;\n  font-style: italic;\n}\n.cw-text-body a {\n  color: #069b8f;\n  text-decoration: underline;\n}\n.cw-text-body img {\n  max-width: 100%;\n  border-radius: 12px;\n}\n.cw-quiz-banner {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background: #eef2ff;\n  border: 1px solid rgba(79, 70, 229, 0.2);\n  border-radius: 18px;\n  padding: 24px 28px;\n  margin-bottom: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.cw-quiz-banner__icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 12px;\n  flex-shrink: 0;\n  background: rgba(79, 70, 229, 0.15);\n  color: #4f46e5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n}\n.cw-quiz-banner__title {\n  font-size: 18px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.cw-quiz-banner__sub {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.5;\n}\n.cw-duration-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 99px;\n  background: #0f172a;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  margin: -12px 0 16px auto;\n  float: right;\n}\n.cw-duration-badge i {\n  font-size: 13px;\n}\n.cw-tabs {\n  display: flex;\n  gap: 0;\n  margin: 16px 0 0;\n  border-bottom: 2px solid #e2e8f0;\n  clear: both;\n}\n.cw-tabs__item {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 12px 20px;\n  border: none;\n  background: none;\n  font-size: 13px;\n  font-weight: 600;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n}\n.cw-tabs__item:hover {\n  color: #069b8f;\n}\n.cw-tabs__item--active {\n  color: #069b8f;\n  border-bottom-color: #069b8f;\n}\n.cw-tabs__item i {\n  font-size: 14px;\n}\n.cw-tab-content {\n  padding: 24px 0;\n}\n.cw-detail-header {\n  margin-bottom: 24px;\n}\n.cw-detail-header__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1.3;\n  margin: 0 0 14px;\n}\n.cw-detail-header__meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n}\n.cw-formateur-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  padding: 16px 20px;\n  margin-bottom: 24px;\n}\n.cw-formateur-card__avatar {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #069b8f;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.cw-formateur-card__info {\n  flex: 1;\n  min-width: 0;\n}\n.cw-formateur-card__name {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 2px;\n}\n.cw-formateur-card__role {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 0;\n}\n.cw-formateur-card__btn {\n  flex-shrink: 0;\n  font-size: 12px;\n  padding: 7px 14px;\n}\n.cw-about-section {\n  margin-bottom: 24px;\n}\n.cw-about-section__title {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #94a3b8;\n  margin: 0 0 12px;\n}\n.cw-about-section__body {\n  font-size: 14px;\n  line-height: 1.8;\n  color: #475569;\n}\n.cw-about-section__body p {\n  margin: 0 0 0.8em;\n}\n.cw-about-section__body ul,\n.cw-about-section__body ol {\n  padding-left: 1.5em;\n  margin-bottom: 0.8em;\n}\n.cw-about-section__body li {\n  margin-bottom: 0.3em;\n}\n.cw-skills-section {\n  margin-bottom: 24px;\n}\n.cw-skills-section__title {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #94a3b8;\n  margin: 0 0 12px;\n}\n.cw-skills-section__tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.cw-skill-tag {\n  display: inline-block;\n  padding: 7px 16px;\n  border-radius: 99px;\n  font-size: 13px;\n  font-weight: 600;\n  background: #e6f7f5;\n  color: #069b8f;\n  border: 1px solid rgba(6, 155, 143, 0.2);\n}\n.cw-skill-tag--secondary {\n  background: #f1f5f9;\n  color: #475569;\n  border-color: #e2e8f0;\n}\n.cw-objectives-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.cw-objectives-list li {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 8px 0;\n  font-size: 14px;\n  color: #475569;\n  line-height: 1.5;\n}\n.cw-objectives-list li::before {\n  content: "\\2713";\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  background: #e6f7f5;\n  color: #069b8f;\n  font-size: 11px;\n  font-weight: 700;\n  margin-top: 1px;\n}\n.cw-info-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.cw-info-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 16px 12px;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  text-align: center;\n}\n.cw-info-item i {\n  font-size: 20px;\n  color: #069b8f;\n}\n.cw-info-item__label {\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #94a3b8;\n}\n.cw-info-item__value {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.cw-resources-section {\n  margin-bottom: 20px;\n}\n.cw-resources-section__title {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #94a3b8;\n  margin: 0 0 14px;\n}\n.cw-notes-section {\n  min-height: 200px;\n}\n.cw-pdf-frame-inline {\n  width: 100%;\n  height: 55vh;\n  border: none;\n  display: block;\n}\n.cw-sidebar__header {\n  flex-shrink: 0;\n  padding: 14px 16px;\n  background: #0f172a;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n}\n.cw-sidebar__header-title {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: rgba(255, 255, 255, 0.7);\n  margin: 0;\n}\n.cw-empty-media {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 48px 20px;\n  color: #94a3b8;\n  text-align: center;\n}\n.cw-empty-media i {\n  font-size: 2.4rem;\n  margin-bottom: 10px;\n  opacity: 0.5;\n}\n.cw-empty-media p {\n  font-size: 13px;\n  margin: 0;\n}\n.cw-empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 50vh;\n  text-align: center;\n  gap: 10px;\n}\n.cw-empty-state__icon {\n  font-size: 3rem;\n  color: #069b8f;\n  opacity: 0.4;\n  margin-bottom: 4px;\n}\n.cw-empty-state h3 {\n  font-size: 18px;\n  font-weight: 700;\n  color: #334155;\n  margin: 0;\n}\n.cw-empty-state p {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.cw-actions-bar {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n  margin-top: 24px;\n  padding: 18px 22px;\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.cw-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 10px 20px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.cw-btn--complete {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      #047a6f 100%);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.3);\n}\n.cw-btn--complete:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(6, 155, 143, 0.4);\n}\n.cw-btn--complete:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.cw-btn--prev {\n  background: #f1f5f9;\n  color: #475569;\n  border: 1.5px solid #e2e8f0;\n}\n.cw-btn--prev:hover:not(:disabled) {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.cw-btn--prev:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.cw-btn--next {\n  background: #e6f7f5;\n  color: #069b8f;\n  border: 1.5px solid rgba(6, 155, 143, 0.2);\n}\n.cw-btn--next:hover:not(:disabled) {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.3);\n}\n.cw-btn--next:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.cw-btn--outline {\n  background: transparent;\n  color: #475569;\n  border: 1.5px solid #e2e8f0;\n}\n.cw-btn--outline:hover {\n  background: #f8fafc;\n  color: #0f172a;\n  border-color: #cbd5e1;\n}\n.cw-done-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  background: #f0fdf4;\n  color: #16a34a;\n  border: 1.5px solid rgba(22, 163, 74, 0.25);\n}\n.cw-nav-btns {\n  display: flex;\n  gap: 8px;\n  margin-left: auto;\n}\n.cw-congrats {\n  margin-top: 28px;\n  padding: 30px 24px;\n  border-radius: 18px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #e6f7f5,\n      #f0fdf4);\n  border: 1px solid rgba(6, 155, 143, 0.18);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  position: relative;\n  overflow: hidden;\n}\n.cw-congrats__icon {\n  font-size: 3rem;\n  color: #d97706;\n  display: block;\n  margin-bottom: 10px;\n}\n.cw-congrats__title {\n  font-size: 20px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.cw-congrats__sub {\n  font-size: 14px;\n  color: #475569;\n  margin: 0 0 20px;\n}\n.cw-congrats__actions {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n@keyframes cw-sparkle {\n  0%, 100% {\n    opacity: 0.4;\n    transform: scale(0.8);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n}\n.cw-sidebar {\n  width: 300px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-left: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.cw-sidebar__progress {\n  flex-shrink: 0;\n  padding: 14px 16px;\n  background: #0f172a;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n}\n.cw-sidebar__progress-info {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.45);\n  margin-bottom: 6px;\n}\n.cw-sidebar__progress-info strong {\n  color: rgb(17.2049689441, 245.7950310559, 227.3850931677);\n}\n.cw-sidebar__progress-bar {\n  height: 4px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.cw-sidebar__progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #069b8f,\n      rgb(8.6608695652, 223.7391304348, 206.4173913043));\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.cw-sidebar__progress-count {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.3);\n  margin-top: 5px;\n}\n.cw-sidebar__content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 8px 0;\n}\n.cw-sidebar__content::-webkit-scrollbar {\n  width: 4px;\n}\n.cw-sidebar__content::-webkit-scrollbar-thumb {\n  background: #e2e8f0;\n  border-radius: 4px;\n}\n.cw-sidebar__empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px 20px;\n  color: #94a3b8;\n  text-align: center;\n  font-size: 12px;\n}\n.cw-sidebar__empty i {\n  font-size: 2rem;\n  margin-bottom: 8px;\n  opacity: 0.5;\n}\n.cw-module-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border: none;\n  border-bottom: 1px solid #f1f5f9;\n  cursor: pointer;\n  text-align: left;\n  transition: all 0.2s ease;\n  gap: 8px;\n}\n.cw-module-header:hover {\n  background: #e6f7f5;\n}\n.cw-module-header--open {\n  background: #e6f7f5;\n}\n.cw-module-header__left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.cw-module-header__num {\n  width: 20px;\n  height: 20px;\n  border-radius: 6px;\n  background: #069b8f;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cw-module-header__title {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #1e293b;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cw-module-header i {\n  font-size: 13px;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.cw-section-list {\n  list-style: none;\n  margin: 0;\n  padding: 4px 8px 6px;\n}\n.cw-section-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-bottom: 2px;\n}\n.cw-section-item:hover {\n  background: #f8fafc;\n}\n.cw-section-item--active {\n  background: #e6f7f5 !important;\n}\n.cw-section-item--active .cw-section-item__title {\n  color: #069b8f;\n  font-weight: 600;\n}\n.cw-section-item--active .cw-section-item__status i {\n  color: #069b8f;\n}\n.cw-section-item--done .cw-section-item__status i {\n  color: #16a34a;\n}\n.cw-section-item--done .cw-section-item__title {\n  color: #94a3b8;\n  text-decoration: line-through;\n}\n.cw-section-item__status {\n  flex-shrink: 0;\n  font-size: 15px;\n  color: #cbd5e1;\n  margin-top: 1px;\n}\n.cw-section-item__body {\n  min-width: 0;\n}\n.cw-section-item__title {\n  display: block;\n  font-size: 12.5px;\n  color: #334155;\n  line-height: 1.4;\n}\n.cw-section-item__duration {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 11px;\n  color: #94a3b8;\n  margin-top: 3px;\n}\n.cw-section-item__duration i {\n  font-size: 11px;\n}\n.cw-quiz-loader {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  gap: 16px;\n}\n.cw-quiz-loader p {\n  font-size: 14px;\n  color: #94a3b8;\n  margin: 0;\n}\n.cw-quiz-start {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n  padding: 40px 32px;\n  margin-bottom: 20px;\n  max-width: 600px;\n  text-align: center;\n}\n.cw-quiz-start__icon {\n  font-size: 3rem;\n  color: #4f46e5;\n  opacity: 0.7;\n  display: block;\n  margin-bottom: 16px;\n}\n.cw-quiz-start__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 10px;\n}\n.cw-quiz-start__sub {\n  font-size: 14px;\n  color: #64748b;\n  line-height: 1.6;\n  margin: 0 0 22px;\n}\n.cw-quiz-start__meta {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 14px;\n  font-size: 13px;\n  color: #64748b;\n  margin-bottom: 28px;\n}\n.cw-quiz-start__meta span {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.cw-quiz-start__meta i {\n  font-size: 14px;\n  color: #4f46e5;\n}\n.cw-quiz-start__btn {\n  font-size: 14px;\n  padding: 12px 28px;\n}\n.cw-btn--primary {\n  background: #4f46e5;\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.3);\n}\n.cw-btn--primary:hover:not(:disabled) {\n  background: rgb(44.9677725118, 34.2274881517, 223.9725118483);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(79, 70, 229, 0.38);\n}\n.cw-btn--primary:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.cw-btn--success {\n  background: #16a34a;\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(22, 163, 74, 0.28);\n}\n.cw-btn--success:hover:not(:disabled) {\n  background: rgb(18.3610810811, 136.0389189189, 61.76);\n  transform: translateY(-1px);\n}\n.cw-btn--success:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.cw-quiz-player {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n  padding: 28px 32px;\n  margin-bottom: 20px;\n  max-width: 700px;\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n.cw-quiz-progress {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.cw-quiz-progress__bar {\n  flex: 1;\n  height: 6px;\n  background: #e2e8f0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.cw-quiz-progress__fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #4f46e5,\n      rgb(164.0805687204, 159.4312796209, 241.5687203791));\n  border-radius: 99px;\n  transition: width 0.35s ease;\n}\n.cw-quiz-progress__label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #94a3b8;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.cw-quiz-question__num {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  color: #4f46e5;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  background: #eef2ff;\n  padding: 3px 10px;\n  border-radius: 99px;\n  margin-bottom: 10px;\n}\n.cw-quiz-question__text {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n  line-height: 1.4;\n}\n.cw-quiz-question__hint {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 0;\n  font-style: italic;\n}\n.cw-quiz-options {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.cw-quiz-option {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 13px 16px;\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 12px;\n  cursor: pointer;\n  text-align: left;\n  transition: all 0.15s ease;\n  font-size: 14px;\n  color: #334155;\n}\n.cw-quiz-option:hover {\n  border-color: rgba(79, 70, 229, 0.45);\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.cw-quiz-option--selected {\n  border-color: #4f46e5;\n  background: #eef2ff;\n  color: #4f46e5;\n  font-weight: 600;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);\n}\n.cw-quiz-option__check {\n  font-size: 18px;\n  flex-shrink: 0;\n  line-height: 1;\n  color: inherit;\n}\n.cw-quiz-option__text {\n  flex: 1;\n  line-height: 1.4;\n}\n.cw-quiz-nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.cw-quiz-results {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n  padding: 32px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.cw-quiz-results__score-wrap {\n  text-align: center;\n}\n.cw-quiz-results__score {\n  font-size: 52px;\n  font-weight: 900;\n  line-height: 1;\n  margin-bottom: 8px;\n}\n.cw-quiz-results__score--pass {\n  color: #16a34a;\n}\n.cw-quiz-results__score--fail {\n  color: #dc2626;\n}\n.cw-quiz-results__label {\n  font-size: 18px;\n  font-weight: 700;\n  color: #334155;\n}\n.cw-quiz-results__detail {\n  text-align: center;\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.cw-quiz-results__actions {\n  display: flex;\n  justify-content: center;\n  padding-top: 4px;\n}\n.cw-quiz-correction {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px 18px;\n}\n.cw-quiz-correction__q {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 12px;\n}\n.cw-quiz-correction__num {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  color: #4f46e5;\n  background: #eef2ff;\n  padding: 2px 8px;\n  border-radius: 99px;\n  flex-shrink: 0;\n}\n.cw-quiz-correction__opts {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  margin-bottom: 10px;\n}\n.cw-quiz-correction__opt {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #64748b;\n  padding: 7px 12px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n}\n.cw-quiz-correction__opt i {\n  font-size: 15px;\n  flex-shrink: 0;\n}\n.cw-quiz-correction__opt--correct {\n  color: #16a34a;\n  background: #f0fdf4;\n  border-color: rgba(22, 163, 74, 0.25);\n  font-weight: 500;\n}\n.cw-quiz-correction__opt--selected {\n  color: #dc2626;\n  background: #fef2f2;\n  border-color: rgba(220, 38, 38, 0.25);\n  font-weight: 500;\n}\n.cw-quiz-correction__opt--right {\n  color: #16a34a;\n  background: #f0fdf4;\n  border-color: #16a34a;\n  font-weight: 700;\n}\n.cw-quiz-correction__exp {\n  font-size: 12px;\n  color: #64748b;\n  margin: 8px 0 0;\n  font-style: italic;\n  display: flex;\n  align-items: flex-start;\n  gap: 4px;\n}\n.cw-quiz-correction__exp i {\n  font-size: 13px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n@media (max-width: 991px) {\n  .cw-shell {\n    height: auto;\n    overflow: visible;\n  }\n  .cw-body {\n    flex-direction: column-reverse;\n    overflow: visible;\n  }\n  .cw-main {\n    overflow: visible;\n    padding: 18px 16px;\n  }\n  .cw-topbar__progress {\n    display: none;\n  }\n  .cw-sidebar {\n    width: 100%;\n    border-left: none;\n    border-bottom: 1px solid #e2e8f0;\n    max-height: 40vh;\n    overflow: hidden;\n  }\n}\n@media (max-width: 575px) {\n  .cw-main {\n    padding: 14px 12px;\n  }\n  .cw-section-header__title {\n    font-size: 18px;\n  }\n  .cw-text-card {\n    padding: 18px 16px;\n  }\n  .cw-nav-btns {\n    width: 100%;\n  }\n  .cw-nav-btns .cw-btn {\n    flex: 1;\n    justify-content: center;\n  }\n  .cw-topbar__title {\n    max-width: 36vw;\n  }\n}\n/*# sourceMappingURL=course-watch.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: DomSanitizer }, { type: FormationService }, { type: ProgressionService }, { type: QuizService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseWatchComponent, { className: "CourseWatchComponent", filePath: "app/features/courses/course-watch/course-watch.component.ts", lineNumber: 20 });
})();
export {
  CourseWatchComponent
};
//# sourceMappingURL=chunk-LHPK4VJN.js.map
