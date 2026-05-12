import {
  ProgressionService
} from "./chunk-XCPJS7Q5.js";
import {
  FormationsService
} from "./chunk-3MN45TQB.js";
import "./chunk-FKX6UC3I.js";
import {
  FormsModule
} from "./chunk-AK2M3J6O.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-AJNKO2CX.js";
import {
  DomSanitizer
} from "./chunk-FZP3BRBS.js";
import "./chunk-GSAJL664.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-3IMMP55I.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵproperty,
  ɵɵpureFunction0,
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
  ɵɵtextInterpolate2
} from "./chunk-UPBSS6WA.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/student/lecture-formation/lecture-formation.component.ts
var _c0 = () => ["Vrai", "Faux"];
var _c1 = () => [];
function LectureFormationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p", 7);
    \u0275\u0275text(3, "Chargement de la formation...");
    \u0275\u0275elementEnd()();
  }
}
function LectureFormationComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275element(2, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Impossible de charger la formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function LectureFormationComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275element(2, "i", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 15);
    \u0275\u0275text(6, "Le contenu de cette formation n'est pas encore disponible.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 16);
    \u0275\u0275element(8, "i", 17);
    \u0275\u0275text(9, " Vous serez notifi\xE9 d\xE8s que le contenu sera publi\xE9. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formation == null ? null : ctx_r0.formation.titre);
  }
}
function LectureFormationComponent_div_3_ng_container_22_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.selectedSection.duree_estimee, " ");
  }
}
function LectureFormationComponent_div_3_ng_container_22_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275text(2, "Compl\xE9t\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function LectureFormationComponent_div_3_ng_container_22_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275element(1, "i", 70);
    \u0275\u0275text(2, "Quiz disponible ");
    \u0275\u0275elementEnd();
  }
}
function LectureFormationComponent_div_3_ng_container_22_ng_container_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74);
    \u0275\u0275element(2, "iframe", 75);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.getYoutubeEmbed(ctx_r0.selectedSection.media_url), \u0275\u0275sanitizeResourceUrl);
  }
}
function LectureFormationComponent_div_3_ng_container_22_ng_container_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74);
    \u0275\u0275element(2, "iframe", 76);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.getVimeoEmbed(ctx_r0.selectedSection.media_url), \u0275\u0275sanitizeResourceUrl);
  }
}
function LectureFormationComponent_div_3_ng_container_22_ng_container_22_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Impossible de charger la vid\xE9o.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 81);
    \u0275\u0275element(5, "i", 82);
    \u0275\u0275text(6, "Ouvrir dans un nouvel onglet");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275property("href", ctx_r0.selectedSection.media_url, \u0275\u0275sanitizeUrl);
  }
}
function LectureFormationComponent_div_3_ng_container_22_ng_container_22_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "video", 77);
    \u0275\u0275listener("ended", function LectureFormationComponent_div_3_ng_container_22_ng_container_22_div_3_Template_video_ended_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.markCompleted(ctx_r0.selectedSection.id));
    })("error", function LectureFormationComponent_div_3_ng_container_22_ng_container_22_div_3_Template_video_error_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.videoError = true);
    });
    \u0275\u0275text(2, " Votre navigateur ne supporte pas la lecture vid\xE9o. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LectureFormationComponent_div_3_ng_container_22_ng_container_22_div_3_div_3_Template, 7, 1, "div", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.selectedSection.media_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.videoError);
  }
}
function LectureFormationComponent_div_3_ng_container_22_ng_container_22_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedSection.description);
  }
}
function LectureFormationComponent_div_3_ng_container_22_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LectureFormationComponent_div_3_ng_container_22_ng_container_22_div_1_Template, 3, 1, "div", 71)(2, LectureFormationComponent_div_3_ng_container_22_ng_container_22_div_2_Template, 3, 1, "div", 71)(3, LectureFormationComponent_div_3_ng_container_22_ng_container_22_div_3_Template, 4, 2, "div", 71)(4, LectureFormationComponent_div_3_ng_container_22_ng_container_22_div_4_Template, 3, 1, "div", 72);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isYoutube(ctx_r0.selectedSection.media_url));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isVimeo(ctx_r0.selectedSection.media_url));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isYoutube(ctx_r0.selectedSection.media_url) && !ctx_r0.isVimeo(ctx_r0.selectedSection.media_url));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedSection.description);
  }
}
function LectureFormationComponent_div_3_ng_container_22_ng_container_23_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275element(1, "i", 88);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.selectedSection.legende || ctx_r0.selectedSection.caption, " ");
  }
}
function LectureFormationComponent_div_3_ng_container_22_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 84);
    \u0275\u0275element(2, "img", 85);
    \u0275\u0275template(3, LectureFormationComponent_div_3_ng_container_22_ng_container_23_div_3_Template, 3, 1, "div", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.selectedSection.media_url || ctx_r0.selectedSection.image_url, \u0275\u0275sanitizeUrl)("alt", ctx_r0.selectedSection.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedSection.legende || ctx_r0.selectedSection.caption);
  }
}
function LectureFormationComponent_div_3_ng_container_22_ng_container_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275element(1, "img", 95);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.selectedSection.image_url || ctx_r0.selectedSection.image_couverture, \u0275\u0275sanitizeUrl)("alt", ctx_r0.selectedSection.titre);
  }
}
function LectureFormationComponent_div_3_ng_container_22_ng_container_24_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275element(1, "i", 97);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.selectedSection.resume || ctx_r0.selectedSection.intro);
  }
}
function LectureFormationComponent_div_3_ng_container_22_ng_container_24_div_5_a_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 103)(1, "div", 104);
    \u0275\u0275element(2, "i", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 106)(4, "span", 107);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 108);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "i", 109);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275property("href", r_r5.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("isax-document-text", r_r5.type === "pdf" || !r_r5.type)("isax-link", r_r5.type === "lien")("isax-video", r_r5.type === "video");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r5.nom || r_r5.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.type || "document");
  }
}
function LectureFormationComponent_div_3_ng_container_22_ng_container_24_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "h4", 99);
    \u0275\u0275element(2, "i", 100);
    \u0275\u0275text(3, "Ressources compl\xE9mentaires");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 101);
    \u0275\u0275template(5, LectureFormationComponent_div_3_ng_container_22_ng_container_24_div_5_a_5_Template, 9, 9, "a", 102);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.selectedSection.ressources);
  }
}
function LectureFormationComponent_div_3_ng_container_22_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LectureFormationComponent_div_3_ng_container_22_ng_container_24_div_1_Template, 2, 2, "div", 89);
    \u0275\u0275elementStart(2, "div", 90);
    \u0275\u0275template(3, LectureFormationComponent_div_3_ng_container_22_ng_container_24_div_3_Template, 4, 1, "div", 91);
    \u0275\u0275element(4, "div", 92);
    \u0275\u0275template(5, LectureFormationComponent_div_3_ng_container_22_ng_container_24_div_5_Template, 6, 1, "div", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedSection.image_url || ctx_r0.selectedSection.image_couverture);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.selectedSection.resume || ctx_r0.selectedSection.intro);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.selectedSection.contenu, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedSection.ressources == null ? null : ctx_r0.selectedSection.ressources.length);
  }
}
function LectureFormationComponent_div_3_ng_container_22_ng_container_25_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275element(1, "div", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.selectedSection.contenu, \u0275\u0275sanitizeHtml);
  }
}
function LectureFormationComponent_div_3_ng_container_22_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 110)(2, "div", 111);
    \u0275\u0275element(3, "img", 112);
    \u0275\u0275elementStart(4, "div", 113);
    \u0275\u0275element(5, "i", 114);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 115)(7, "p", 116);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "audio", 117);
    \u0275\u0275listener("ended", function LectureFormationComponent_div_3_ng_container_22_ng_container_25_Template_audio_ended_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.markCompleted(ctx_r0.selectedSection.id));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, LectureFormationComponent_div_3_ng_container_22_ng_container_25_div_10_Template, 2, 1, "div", 118);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", (ctx_r0.formation == null ? null : ctx_r0.formation.image_couverture) || "assets/img/course/course-01.jpg", \u0275\u0275sanitizeUrl)("alt", ctx_r0.selectedSection.titre);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedSection.titre);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.selectedSection.media_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedSection.contenu);
  }
}
function LectureFormationComponent_div_3_ng_container_22_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 119)(2, "div", 120)(3, "div", 121);
    \u0275\u0275element(4, "i", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "p", 123);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 124);
    \u0275\u0275text(9, "Consultez le document ci-dessous ou t\xE9l\xE9chargez-le.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "a", 125);
    \u0275\u0275element(11, "i", 126);
    \u0275\u0275text(12, "T\xE9l\xE9charger ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 127);
    \u0275\u0275element(14, "iframe", 128);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.selectedSection.titre);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r0.selectedSection.media_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.getSafeUrl(ctx_r0.selectedSection.media_url + "#toolbar=1"), \u0275\u0275sanitizeResourceUrl);
  }
}
function LectureFormationComponent_div_3_ng_container_22_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 129);
    \u0275\u0275listener("click", function LectureFormationComponent_div_3_ng_container_22_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.markCompleted(ctx_r0.selectedSection.id));
    });
    \u0275\u0275element(1, "i", 130);
    \u0275\u0275text(2, "Marquer comme compl\xE9t\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function LectureFormationComponent_div_3_ng_container_22_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275element(1, "i", 130);
    \u0275\u0275text(2, "Section compl\xE9t\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function LectureFormationComponent_div_3_ng_container_22_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 132);
    \u0275\u0275listener("click", function LectureFormationComponent_div_3_ng_container_22_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.startQuiz());
    });
    \u0275\u0275element(1, "i", 133);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.quizResults[ctx_r0.selectedSection.id] ? "Voir r\xE9sultats / Refaire" : "Passer le quiz", " ");
  }
}
function LectureFormationComponent_div_3_ng_container_22_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134)(1, "div", 135)(2, "span");
    \u0275\u0275text(3, "\u2726");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u2726");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "\u2726");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 136);
    \u0275\u0275element(9, "i", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3", 138);
    \u0275\u0275text(11, "Formation termin\xE9e !");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 139);
    \u0275\u0275text(13, "F\xE9licitations ! Vous avez compl\xE9t\xE9 toutes les sections de cette formation.");
    \u0275\u0275elementEnd()();
  }
}
function LectureFormationComponent_div_3_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 43)(2, "button", 44);
    \u0275\u0275listener("click", function LectureFormationComponent_div_3_ng_container_22_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275element(3, "i", 45);
    \u0275\u0275text(4, "Retour ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "i", 46);
    \u0275\u0275elementStart(6, "span", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "i", 46);
    \u0275\u0275elementStart(9, "span", 48);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 49)(12, "div", 50);
    \u0275\u0275element(13, "i");
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "h2", 51);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 52);
    \u0275\u0275template(19, LectureFormationComponent_div_3_ng_container_22_span_19_Template, 3, 1, "span", 53)(20, LectureFormationComponent_div_3_ng_container_22_span_20_Template, 3, 0, "span", 54)(21, LectureFormationComponent_div_3_ng_container_22_span_21_Template, 3, 0, "span", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, LectureFormationComponent_div_3_ng_container_22_ng_container_22_Template, 5, 4, "ng-container", 35)(23, LectureFormationComponent_div_3_ng_container_22_ng_container_23_Template, 4, 3, "ng-container", 35)(24, LectureFormationComponent_div_3_ng_container_22_ng_container_24_Template, 6, 4, "ng-container", 35)(25, LectureFormationComponent_div_3_ng_container_22_ng_container_25_Template, 11, 5, "ng-container", 35)(26, LectureFormationComponent_div_3_ng_container_22_ng_container_26_Template, 15, 3, "ng-container", 35);
    \u0275\u0275elementStart(27, "div", 56);
    \u0275\u0275template(28, LectureFormationComponent_div_3_ng_container_22_button_28_Template, 3, 0, "button", 57)(29, LectureFormationComponent_div_3_ng_container_22_div_29_Template, 3, 0, "div", 58)(30, LectureFormationComponent_div_3_ng_container_22_button_30_Template, 3, 1, "button", 59);
    \u0275\u0275elementStart(31, "div", 60)(32, "button", 61);
    \u0275\u0275listener("click", function LectureFormationComponent_div_3_ng_container_22_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPrev());
    });
    \u0275\u0275element(33, "i", 45);
    \u0275\u0275text(34, "Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 62);
    \u0275\u0275listener("click", function LectureFormationComponent_div_3_ng_container_22_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToNext());
    });
    \u0275\u0275text(36, " Suivant");
    \u0275\u0275element(37, "i", 63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(38, LectureFormationComponent_div_3_ng_container_22_div_38_Template, 14, 0, "div", 64);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.getModuleOfSection(ctx_r0.selectedSection));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.selectedSection.titre);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-type", ctx_r0.selectedSection.type || "texte");
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", ctx_r0.getSectionIcon(ctx_r0.selectedSection)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getSectionTypeLabel(ctx_r0.selectedSection));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedSection.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.selectedSection.duree_estimee);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isCompleted(ctx_r0.selectedSection.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasQuiz(ctx_r0.selectedSection));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedSection.type === "video");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedSection.type === "image");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedSection.type === "texte" || !ctx_r0.selectedSection.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedSection.type === "audio");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedSection.type === "pdf");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.isCompleted(ctx_r0.selectedSection.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isCompleted(ctx_r0.selectedSection.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasQuiz(ctx_r0.selectedSection) && ctx_r0.isCompleted(ctx_r0.selectedSection.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.hasPrev());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r0.hasNext());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.progressPercent === 100);
  }
}
function LectureFormationComponent_div_3_ng_container_23_div_14_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 161);
    \u0275\u0275listener("click", function LectureFormationComponent_div_3_ng_container_23_div_14_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.exitQuiz());
    });
    \u0275\u0275text(1, "Continuer");
    \u0275\u0275element(2, "i", 63);
    \u0275\u0275elementEnd();
  }
}
function LectureFormationComponent_div_3_ng_container_23_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 151)(1, "div", 152)(2, "div", 153);
    \u0275\u0275element(3, "i", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 154);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 155);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 156);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 157)(11, "button", 158);
    \u0275\u0275listener("click", function LectureFormationComponent_div_3_ng_container_23_div_14_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.retryQuiz());
    });
    \u0275\u0275element(12, "i", 159);
    \u0275\u0275text(13, "R\xE9essayer");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, LectureFormationComponent_div_3_ng_container_23_div_14_button_14_Template, 3, 0, "button", 160);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const result_r12 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275classProp("lp-quiz-result__card--pass", result_r12.passed)("lp-quiz-result__card--fail", !result_r12.passed);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("isax-award", result_r12.passed)("isax-close-circle", !result_r12.passed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", result_r12.score, "/", result_r12.total);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(result_r12.passed ? "Quiz r\xE9ussi !" : "Quiz non r\xE9ussi");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(result_r12.passed ? "Bravo ! Vous pouvez continuer vers la section suivante." : "R\xE9visez le contenu et r\xE9essayez pour valider la section.");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", result_r12.passed);
  }
}
function LectureFormationComponent_div_3_ng_container_23_div_16_div_6_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 170);
    \u0275\u0275listener("click", function LectureFormationComponent_div_3_ng_container_23_div_16_div_6_button_1_Template_button_click_0_listener() {
      const option_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const question_r15 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectAnswer(question_r15.id, option_r14));
    });
    \u0275\u0275elementStart(1, "span", 171);
    \u0275\u0275element(2, "i", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 172);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    const question_r15 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.getAnswerClass(question_r15, option_r14));
    \u0275\u0275property("disabled", ctx_r0.quizSubmitted);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("isax-tick-circle", ctx_r0.quizSubmitted && ctx_r0.isCorrectAnswer(question_r15, option_r14))("isax-close-circle", ctx_r0.quizSubmitted && ctx_r0.currentAnswers[question_r15.id] === option_r14 && !ctx_r0.isCorrectAnswer(question_r15, option_r14))("isax-record", !ctx_r0.quizSubmitted && ctx_r0.currentAnswers[question_r15.id] === option_r14)("isax-radio", !ctx_r0.quizSubmitted && ctx_r0.currentAnswers[question_r15.id] !== option_r14);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r14);
  }
}
function LectureFormationComponent_div_3_ng_container_23_div_16_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 168);
    \u0275\u0275template(1, LectureFormationComponent_div_3_ng_container_23_div_16_div_6_button_1_Template, 5, 12, "button", 169);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const question_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", question_r15.options || \u0275\u0275pureFunction0(1, _c0));
  }
}
function LectureFormationComponent_div_3_ng_container_23_div_16_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 173);
    \u0275\u0275element(1, "i", 174);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const question_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(question_r15.explication);
  }
}
function LectureFormationComponent_div_3_ng_container_23_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 162)(1, "div", 163)(2, "span", 164);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 165);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, LectureFormationComponent_div_3_ng_container_23_div_16_div_6_Template, 2, 2, "div", 166)(7, LectureFormationComponent_div_3_ng_container_23_div_16_div_7_Template, 4, 1, "div", 167);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const question_r15 = ctx.$implicit;
    const qi_r16 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", qi_r16 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(question_r15.question);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", question_r15.type === "qcm" || question_r15.type === "vrai_faux");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.quizSubmitted && question_r15.explication);
  }
}
function LectureFormationComponent_div_3_ng_container_23_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 175)(1, "button", 176);
    \u0275\u0275listener("click", function LectureFormationComponent_div_3_ng_container_23_div_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.submitQuiz());
    });
    \u0275\u0275element(2, "i", 177);
    \u0275\u0275text(3, "Valider mes r\xE9ponses ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 178);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.canSubmitQuiz());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.getAnsweredCount(), " / ", ctx_r0.selectedSection.quiz.questions.length, " r\xE9ponses");
  }
}
function LectureFormationComponent_div_3_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 140)(2, "div", 141)(3, "button", 142);
    \u0275\u0275listener("click", function LectureFormationComponent_div_3_ng_container_23_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.exitQuiz());
    });
    \u0275\u0275element(4, "i", 45);
    \u0275\u0275text(5, "Retour au contenu ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 143)(7, "div", 144);
    \u0275\u0275element(8, "i", 70);
    \u0275\u0275text(9, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h2", 145);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 146);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, LectureFormationComponent_div_3_ng_container_23_div_14_Template, 15, 13, "div", 147);
    \u0275\u0275elementStart(15, "div", 148);
    \u0275\u0275template(16, LectureFormationComponent_div_3_ng_container_23_div_16_Template, 8, 4, "div", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, LectureFormationComponent_div_3_ng_container_23_div_17_Template, 6, 3, "div", 150);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.selectedSection.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.selectedSection.quiz.questions.length, " question(s) \xB7 Score minimum : 60%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.quizSubmitted && ctx_r0.getQuizResult());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.selectedSection.quiz.questions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.quizSubmitted);
  }
}
function LectureFormationComponent_div_3_div_34_ul_11_li_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 196);
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r21.duree_estimee);
  }
}
function LectureFormationComponent_div_3_div_34_ul_11_li_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 197);
    \u0275\u0275element(1, "i", 70);
    \u0275\u0275text(2, "Quiz");
    \u0275\u0275elementEnd();
  }
}
function LectureFormationComponent_div_3_div_34_ul_11_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 189);
    \u0275\u0275listener("click", function LectureFormationComponent_div_3_div_34_ul_11_li_1_Template_li_click_0_listener() {
      const section_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.selectSection(section_r21));
    });
    \u0275\u0275elementStart(1, "div", 190);
    \u0275\u0275element(2, "i", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 191)(4, "span", 192);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 193);
    \u0275\u0275template(7, LectureFormationComponent_div_3_div_34_ul_11_li_1_span_7_Template, 3, 1, "span", 194)(8, LectureFormationComponent_div_3_div_34_ul_11_li_1_span_8_Template, 3, 0, "span", 195);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r21 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("lp-section-item--active", (ctx_r0.selectedSection == null ? null : ctx_r0.selectedSection.id) === section_r21.id)("lp-section-item--done", ctx_r0.isCompleted(section_r21.id));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("isax-tick-circle", ctx_r0.isCompleted(section_r21.id))("isax-play-circle", !ctx_r0.isCompleted(section_r21.id) && section_r21.type === "video")("isax-document-text", !ctx_r0.isCompleted(section_r21.id) && section_r21.type === "texte")("isax-gallery", !ctx_r0.isCompleted(section_r21.id) && section_r21.type === "image")("isax-voice-cricle", !ctx_r0.isCompleted(section_r21.id) && section_r21.type === "audio")("isax-document", !ctx_r0.isCompleted(section_r21.id) && (section_r21.type === "pdf" || !section_r21.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(section_r21.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", section_r21.duree_estimee);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasQuiz(section_r21));
  }
}
function LectureFormationComponent_div_3_div_34_ul_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 187);
    \u0275\u0275template(1, LectureFormationComponent_div_3_div_34_ul_11_li_1_Template, 9, 19, "li", 188);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", module_r22.sections || \u0275\u0275pureFunction0(1, _c1));
  }
}
function LectureFormationComponent_div_3_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 179)(1, "button", 180);
    \u0275\u0275listener("click", function LectureFormationComponent_div_3_div_34_Template_button_click_1_listener() {
      const mi_r19 = \u0275\u0275restoreView(_r18).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleModule(mi_r19));
    });
    \u0275\u0275elementStart(2, "div", 181)(3, "span", 182);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 183);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 184)(8, "div", 185);
    \u0275\u0275element(9, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "i", 105);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, LectureFormationComponent_div_3_div_34_ul_11_Template, 2, 2, "ul", 186);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r22 = ctx.$implicit;
    const mi_r19 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("lp-module-header--open", ctx_r0.openModules[mi_r19]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(mi_r19 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(module_r22.titre);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r0.getModuleProgress(module_r22), "%");
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-arrow-up-2", ctx_r0.openModules[mi_r19])("isax-arrow-down-2", !ctx_r0.openModules[mi_r19]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.openModules[mi_r19]);
  }
}
function LectureFormationComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "header", 19)(2, "div", 20)(3, "button", 21);
    \u0275\u0275listener("click", function LectureFormationComponent_div_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275element(4, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23)(6, "span", 24);
    \u0275\u0275text(7, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h1", 25);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 26)(11, "div", 27)(12, "div", 28);
    \u0275\u0275element(13, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 30);
    \u0275\u0275text(15);
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "button", 31);
    \u0275\u0275listener("click", function LectureFormationComponent_div_3_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleSidebar());
    });
    \u0275\u0275element(19, "i", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 33)(21, "main", 34);
    \u0275\u0275template(22, LectureFormationComponent_div_3_ng_container_22_Template, 39, 22, "ng-container", 35)(23, LectureFormationComponent_div_3_ng_container_23_Template, 18, 5, "ng-container", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "aside", 36)(25, "div", 37)(26, "div", 38)(27, "span");
    \u0275\u0275text(28, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "strong");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 39);
    \u0275\u0275element(32, "div", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 41);
    \u0275\u0275template(34, LectureFormationComponent_div_3_div_34_Template, 12, 11, "div", 42);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.formation == null ? null : ctx_r0.formation.titre);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r0.progressPercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.completedCount, "/", ctx_r0.totalSections, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.progressPercent, "%");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("lp-main--sidebar-closed", !ctx_r0.sidebarOpen);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedSection && !ctx_r0.quizMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedSection && ctx_r0.quizMode);
    \u0275\u0275advance();
    \u0275\u0275classProp("lp-sidebar--open", ctx_r0.sidebarOpen);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.progressPercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.progressPercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.modules);
  }
}
function LectureFormationComponent_div_4_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 216)(1, "div", 217);
    \u0275\u0275element(2, "i", 133);
    \u0275\u0275text(3, "Quiz final disponible ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 218);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 219)(7, "span");
    \u0275\u0275element(8, "i", 220);
    \u0275\u0275text(9, " Score minimum : ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275element(13, "i", 221);
    \u0275\u0275text(14, " Tentatives : ");
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.quizFinalData.titre);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.quizFinalData.score_minimum, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.quizFinalData.max_tentatives);
  }
}
function LectureFormationComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 198);
    \u0275\u0275listener("click", function LectureFormationComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resterEtFairePlusTard());
    });
    \u0275\u0275elementStart(1, "div", 199);
    \u0275\u0275listener("click", function LectureFormationComponent_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r23);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 200)(3, "span");
    \u0275\u0275text(4, "\u{1F389}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "\u2B50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "\u{1F3C6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "\u2728");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "\u{1F38A}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 201);
    \u0275\u0275element(14, "div", 202);
    \u0275\u0275elementStart(15, "div", 203);
    \u0275\u0275element(16, "i", 137);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "h2", 204);
    \u0275\u0275text(18, "F\xE9licitations ! \u{1F389}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 205);
    \u0275\u0275text(20, " Vous avez termin\xE9 la formation ");
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, LectureFormationComponent_div_4_div_23_Template, 17, 3, "div", 206);
    \u0275\u0275elementStart(24, "div", 207)(25, "button", 208);
    \u0275\u0275listener("click", function LectureFormationComponent_div_4_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.allerAuQuizFinal());
    });
    \u0275\u0275element(26, "i", 209);
    \u0275\u0275text(27, " Passer le quiz maintenant ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 210);
    \u0275\u0275listener("click", function LectureFormationComponent_div_4_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resterEtFairePlusTard());
    });
    \u0275\u0275element(29, "i", 211);
    \u0275\u0275text(30, " Je le ferai plus tard ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 212);
    \u0275\u0275listener("click", function LectureFormationComponent_div_4_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fermerModalQuizFinal());
    });
    \u0275\u0275element(32, "i", 213);
    \u0275\u0275text(33, " Retour au tableau de bord ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "p", 214);
    \u0275\u0275element(35, "i", 215);
    \u0275\u0275text(36, " Le quiz restera disponible dans ");
    \u0275\u0275elementStart(37, "strong");
    \u0275\u0275text(38, "Mes Quiz");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275textInterpolate(ctx_r0.formation == null ? null : ctx_r0.formation.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.quizFinalData);
  }
}
var LectureFormationComponent = class _LectureFormationComponent {
  route;
  router;
  formationsService;
  sanitizer;
  progressionService;
  // ── Mode embarqué ────────────────────────────────
  embeddedFormationId = null;
  closePlayer = new EventEmitter();
  get isEmbedded() {
    return this.embeddedFormationId !== null;
  }
  formationId;
  loading = true;
  error = "";
  formation = null;
  modules = [];
  selectedSection = null;
  hasContent = false;
  sidebarOpen = true;
  openModules = [];
  flatSections = [];
  // ── Progression via service partagé ─────────────
  get completedIds() {
    return this.progressionService.getCompleted(this.formationId);
  }
  get completedCount() {
    return this.completedIds.size;
  }
  get totalSections() {
    return this.flatSections.length;
  }
  get progressPercent() {
    return this.progressionService.getPercent(this.formationId);
  }
  quizMode = false;
  quizSubmitted = false;
  currentAnswers = {};
  quizResults = {};
  videoError = false;
  // ── Modal Quiz Final ─────────────────────────────
  showQuizFinalModal = false;
  quizFinalData = null;
  sub;
  constructor(route, router, formationsService, sanitizer, progressionService) {
    this.route = route;
    this.router = router;
    this.formationsService = formationsService;
    this.sanitizer = sanitizer;
    this.progressionService = progressionService;
  }
  ngOnInit() {
    if (this.embeddedFormationId) {
      this.formationId = this.embeddedFormationId;
      this.loadStructure();
    } else {
      const idFromRoute = this.route.snapshot.paramMap.get("id");
      if (idFromRoute) {
        this.formationId = Number(idFromRoute);
        this.loadStructure();
      } else {
        this.error = "Formation introuvable";
        this.loading = false;
      }
    }
  }
  ngOnChanges(changes) {
    if (changes["embeddedFormationId"]?.currentValue) {
      this.formationId = changes["embeddedFormationId"].currentValue;
      this.resetState();
      this.loadStructure();
    }
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  resetState() {
    this.loading = true;
    this.error = "";
    this.formation = null;
    this.modules = [];
    this.selectedSection = null;
    this.hasContent = false;
    this.openModules = [];
    this.flatSections = [];
    this.quizMode = false;
    this.quizSubmitted = false;
    this.currentAnswers = {};
    this.quizResults = {};
    this.videoError = false;
    this.sidebarOpen = true;
    this.showQuizFinalModal = false;
    this.quizFinalData = null;
  }
  loadStructure() {
    this.loading = true;
    this.error = "";
    this.progressionService.loadFromApi(this.formationId).subscribe();
    this.formationsService.getFormationStructure(this.formationId).subscribe({
      next: (res) => {
        this.formation = res?.formation || res?.structure?.formation || res?.data?.formation || null;
        this.modules = res?.modules || res?.structure?.modules || res?.data?.modules || [];
        if (!Array.isArray(this.modules))
          this.modules = [];
        this.openModules = this.modules.map(() => true);
        this.flatSections = [];
        this.hasContent = false;
        for (const m of this.modules) {
          for (const s of m.sections || []) {
            this.flatSections.push(s);
            if (!this.hasContent) {
              this.hasContent = true;
              this.selectedSection = s;
            }
          }
        }
        if (!this.progressionService.hasData(this.formationId)) {
          this.progressionService.init(this.formationId, this.flatSections.length, []);
        } else {
          this.progressionService.init(this.formationId, this.flatSections.length);
        }
        this.loading = false;
      },
      error: () => {
        this.error = "Impossible de charger le contenu";
        this.loading = false;
      }
    });
  }
  selectSection(section) {
    this.selectedSection = section;
    this.quizMode = false;
    this.quizSubmitted = false;
    this.currentAnswers = {};
    this.videoError = false;
    if (window.innerWidth < 992)
      this.sidebarOpen = false;
  }
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  toggleModule(i) {
    this.openModules[i] = !this.openModules[i];
  }
  getCurrentIndex() {
    return this.flatSections.findIndex((s) => s.id === this.selectedSection?.id);
  }
  hasPrev() {
    return this.getCurrentIndex() > 0;
  }
  hasNext() {
    return this.getCurrentIndex() < this.flatSections.length - 1;
  }
  goToPrev() {
    const i = this.getCurrentIndex();
    if (i > 0)
      this.selectSection(this.flatSections[i - 1]);
  }
  goToNext() {
    const i = this.getCurrentIndex();
    if (i < this.flatSections.length - 1)
      this.selectSection(this.flatSections[i + 1]);
  }
  // ✅ markCompleted — souscrit à l'Observable et gère quiz_final
  markCompleted(sectionId) {
    this.progressionService.markCompleted(this.formationId, sectionId).subscribe((res) => {
      if (this.hasQuiz(this.selectedSection) && !this.quizResults[sectionId]) {
        setTimeout(() => this.startQuiz(), 400);
      }
      if (res?.est_termine && res?.quiz_final) {
        setTimeout(() => this._ouvrirModalQuizFinal(res.quiz_final), 600);
      }
    });
  }
  isCompleted(id) {
    return this.progressionService.isCompleted(this.formationId, id);
  }
  hasQuiz(s) {
    return s?.quiz?.questions?.length > 0;
  }
  startQuiz() {
    this.quizMode = true;
    this.quizSubmitted = false;
    this.currentAnswers = {};
  }
  exitQuiz() {
    this.quizMode = false;
    this.quizSubmitted = false;
    this.currentAnswers = {};
  }
  selectAnswer(qId, a) {
    if (!this.quizSubmitted)
      this.currentAnswers[qId] = a;
  }
  canSubmitQuiz() {
    return (this.selectedSection?.quiz?.questions || []).every((q) => this.currentAnswers[q.id] !== void 0);
  }
  getAnsweredCount() {
    return Object.keys(this.currentAnswers).length;
  }
  submitQuiz() {
    if (!this.canSubmitQuiz())
      return;
    const questions = this.selectedSection?.quiz?.questions || [];
    let score = 0;
    questions.forEach((q) => {
      const ua = this.currentAnswers[q.id];
      if (Array.isArray(q.reponse_correcte)) {
        if (q.reponse_correcte.includes(ua))
          score++;
      } else {
        if (ua?.toLowerCase() === q.reponse_correcte?.toLowerCase())
          score++;
      }
    });
    const passed = score >= Math.ceil(questions.length * 0.6);
    this.quizResults[this.selectedSection.id] = {
      sectionId: this.selectedSection.id,
      score,
      total: questions.length,
      passed,
      answers: __spreadValues({}, this.currentAnswers)
    };
    this.quizSubmitted = true;
    if (passed) {
      this.progressionService.markCompleted(this.formationId, this.selectedSection.id).subscribe((res) => {
        if (res?.est_termine && res?.quiz_final) {
          setTimeout(() => this._ouvrirModalQuizFinal(res.quiz_final), 600);
        }
      });
    }
  }
  retryQuiz() {
    this.quizSubmitted = false;
    this.currentAnswers = {};
    if (this.selectedSection?.id) {
      delete this.quizResults[this.selectedSection.id];
      this.progressionService.markUncompleted(this.formationId, this.selectedSection.id);
    }
  }
  // ── Modal Quiz Final ─────────────────────────────
  _ouvrirModalQuizFinal(quiz) {
    this.quizFinalData = quiz;
    this.showQuizFinalModal = true;
  }
  allerAuQuizFinal() {
    if (!this.quizFinalData)
      return;
    this.showQuizFinalModal = false;
    this.router.navigate(["/student/student-quiz-questions", this.quizFinalData.id]);
  }
  fermerModalQuizFinal() {
    this.showQuizFinalModal = false;
    this.goBack();
  }
  resterEtFairePlusTard() {
    this.showQuizFinalModal = false;
  }
  // ── Helpers ──────────────────────────────────────
  isCorrectAnswer(q, opt) {
    if (Array.isArray(q.reponse_correcte))
      return q.reponse_correcte.includes(opt);
    return opt?.toLowerCase() === q.reponse_correcte?.toLowerCase();
  }
  getAnswerClass(q, opt) {
    if (!this.quizSubmitted)
      return this.currentAnswers[q.id] === opt ? "lp-quiz-opt--selected" : "";
    if (this.isCorrectAnswer(q, opt))
      return "lp-quiz-opt--correct";
    if (this.currentAnswers[q.id] === opt)
      return "lp-quiz-opt--wrong";
    return "";
  }
  getQuizResult() {
    return this.quizResults[this.selectedSection?.id] ?? null;
  }
  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  isYoutube(url) {
    return /youtube\.com|youtu\.be/.test(url || "");
  }
  isVimeo(url) {
    return /vimeo\.com/.test(url || "");
  }
  getYoutubeEmbed(url) {
    const id = url.match(/(?:v=|youtu\.be\/)([^&\s]+)/)?.[1] ?? "";
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`);
  }
  getVimeoEmbed(url) {
    const id = url.match(/vimeo\.com\/(\d+)/)?.[1] ?? "";
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${id}?title=0&byline=0`);
  }
  getModuleOfSection(section) {
    for (const m of this.modules) {
      if ((m.sections || []).some((s) => s.id === section.id))
        return m.titre;
    }
    return "";
  }
  getModuleProgress(module) {
    const s = module.sections || [];
    return s.length ? Math.round(s.filter((x) => this.progressionService.isCompleted(this.formationId, x.id)).length / s.length * 100) : 0;
  }
  goBack() {
    if (this.isEmbedded) {
      this.closePlayer.emit();
      return;
    }
    const state = history.state;
    if (state?.fromPage === "parcours" && state?.parcoursId) {
      this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
        this.router.navigate(["/student/parcours-assigne", state.parcoursId]);
      });
    } else if (state?.fromPage === "catalogue" && state?.catalogueId) {
      this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
        this.router.navigate(["/student/catalogue-detail", state.catalogueId]);
      });
    } else {
      this.router.navigate(["/student/mes-cours"]);
    }
  }
  getSectionIcon(s) {
    return { video: "isax-video-play", texte: "isax-document-text", image: "isax-gallery", pdf: "isax-document", audio: "isax-voice-cricle" }[s?.type] ?? "isax-document-text";
  }
  getSectionTypeLabel(s) {
    return { video: "Vid\xE9o", texte: "Lecture", image: "Image", pdf: "Document", audio: "Audio" }[s?.type] ?? "Contenu";
  }
  static \u0275fac = function LectureFormationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LectureFormationComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormationsService), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(ProgressionService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LectureFormationComponent, selectors: [["app-lecture-formation"]], inputs: { embeddedFormationId: "embeddedFormationId" }, outputs: { closePlayer: "closePlayer" }, features: [\u0275\u0275NgOnChangesFeature], decls: 5, vars: 5, consts: [["class", "lp-loader", 4, "ngIf"], ["class", "lp-error", 4, "ngIf"], ["class", "lp-empty", 4, "ngIf"], ["class", "lp-shell", 4, "ngIf"], ["class", "lp-modal-overlay", 3, "click", 4, "ngIf"], [1, "lp-loader"], [1, "lp-loader__ring"], [1, "lp-loader__text"], [1, "lp-error"], [1, "lp-error__icon"], [1, "isax", "isax-warning-2"], [1, "lp-empty"], [1, "lp-empty__icon"], [1, "isax", "isax-book-1"], [1, "lp-empty__title"], [1, "lp-empty__sub"], [1, "lp-empty__hint"], [1, "isax", "isax-notification", "me-2"], [1, "lp-shell"], [1, "lp-topbar"], [1, "lp-topbar__left"], [1, "lp-topbar__back", 3, "click"], [1, "isax", "isax-arrow-left-2"], [1, "lp-topbar__info"], [1, "lp-topbar__label"], [1, "lp-topbar__title"], [1, "lp-topbar__right"], [1, "lp-topbar__progress"], [1, "lp-topbar__progress-track"], [1, "lp-topbar__progress-fill"], [1, "lp-topbar__progress-label"], [1, "lp-topbar__menu-btn", 3, "click"], [1, "isax", "isax-sidebar-right"], [1, "lp-body"], [1, "lp-main"], [4, "ngIf"], [1, "lp-sidebar"], [1, "lp-sidebar__progress"], [1, "lp-sidebar__progress-info"], [1, "lp-sidebar__progress-bar"], [1, "lp-sidebar__progress-fill"], [1, "lp-sidebar__content"], ["class", "lp-sidebar__module", 4, "ngFor", "ngForOf"], [1, "lp-breadcrumb"], [1, "lp-breadcrumb__back", 3, "click"], [1, "isax", "isax-arrow-left-2", "me-1"], [1, "isax", "isax-arrow-right-3", "lp-breadcrumb__sep"], [1, "lp-breadcrumb__module"], [1, "lp-breadcrumb__current"], [1, "lp-section-header"], [1, "lp-section-header__type-badge"], [1, "lp-section-header__title"], [1, "lp-section-header__meta"], ["class", "lp-meta-tag", 4, "ngIf"], ["class", "lp-meta-tag lp-meta-tag--done", 4, "ngIf"], ["class", "lp-meta-tag lp-meta-tag--quiz", 4, "ngIf"], [1, "lp-actions-bar"], ["class", "lp-btn lp-btn--complete", 3, "click", 4, "ngIf"], ["class", "lp-done-badge", 4, "ngIf"], ["class", "lp-btn lp-btn--quiz", 3, "click", 4, "ngIf"], [1, "lp-nav-btns"], [1, "lp-btn", "lp-btn--prev", 3, "click", "disabled"], [1, "lp-btn", "lp-btn--next", 3, "click", "disabled"], [1, "isax", "isax-arrow-right-2", "ms-1"], ["class", "lp-congrats", 4, "ngIf"], [1, "lp-meta-tag"], [1, "isax", "isax-clock", "me-1"], [1, "lp-meta-tag", "lp-meta-tag--done"], [1, "isax", "isax-tick-circle", "me-1"], [1, "lp-meta-tag", "lp-meta-tag--quiz"], [1, "isax", "isax-task-square", "me-1"], ["class", "lp-media-wrap lp-media-wrap--video", 4, "ngIf"], ["class", "lp-video-description", 4, "ngIf"], [1, "lp-media-wrap", "lp-media-wrap--video"], [1, "lp-embed-wrap"], ["frameborder", "0", "allowfullscreen", "", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", 3, "src"], ["frameborder", "0", "allowfullscreen", "", 3, "src"], ["controls", "", "preload", "metadata", 1, "lp-video-native", 3, "ended", "error", "src"], ["class", "lp-video-error", 4, "ngIf"], [1, "lp-video-error"], [1, "isax", "isax-video-slash"], ["target", "_blank", 1, "lp-btn-link", 3, "href"], [1, "isax", "isax-export", "me-1"], [1, "lp-video-description"], [1, "lp-media-wrap", "lp-media-wrap--image"], [1, "lp-image-content", 3, "src", "alt"], ["class", "lp-image-caption", 4, "ngIf"], [1, "lp-image-caption"], [1, "isax", "isax-gallery", "me-2"], ["class", "lp-content-hero", 4, "ngIf"], [1, "lp-text-card"], ["class", "lp-text-intro", 4, "ngIf"], [1, "lp-text-body", 3, "innerHTML"], ["class", "lp-resources", 4, "ngIf"], [1, "lp-content-hero"], [1, "lp-content-hero__img", 3, "src", "alt"], [1, "lp-text-intro"], [1, "isax", "isax-info-circle", "lp-text-intro__icon"], [1, "lp-resources"], [1, "lp-resources__title"], [1, "isax", "isax-folder-2", "me-2"], [1, "lp-resources__list"], ["target", "_blank", "class", "lp-resource-item", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "lp-resource-item", 3, "href"], [1, "lp-resource-item__icon"], [1, "isax"], [1, "lp-resource-item__body"], [1, "lp-resource-item__name"], [1, "lp-resource-item__type"], [1, "isax", "isax-export", "lp-resource-item__arrow"], [1, "lp-audio-wrap"], [1, "lp-audio-cover"], [1, "lp-audio-cover__img", 3, "src", "alt"], [1, "lp-audio-cover__overlay"], [1, "isax", "isax-voice-cricle"], [1, "lp-audio-player"], [1, "lp-audio-player__title"], ["controls", "", 1, "lp-audio-native", 3, "ended", "src"], ["class", "lp-text-card", 4, "ngIf"], [1, "lp-pdf-wrap"], [1, "lp-pdf-header"], [1, "lp-pdf-header__icon"], [1, "isax", "isax-document-text"], [1, "lp-pdf-header__name"], [1, "lp-pdf-header__hint"], ["target", "_blank", "download", "", 1, "lp-btn", "lp-btn--outline", 3, "href"], [1, "isax", "isax-import", "me-1"], [1, "lp-pdf-viewer"], [1, "lp-pdf-frame", 3, "src"], [1, "lp-btn", "lp-btn--complete", 3, "click"], [1, "isax", "isax-tick-circle", "me-2"], [1, "lp-done-badge"], [1, "lp-btn", "lp-btn--quiz", 3, "click"], [1, "isax", "isax-task-square", "me-2"], [1, "lp-congrats"], [1, "lp-congrats__sparkles"], [1, "lp-congrats__icon"], [1, "isax", "isax-award"], [1, "lp-congrats__title"], [1, "lp-congrats__sub"], [1, "lp-quiz-shell"], [1, "lp-quiz-header"], [1, "lp-quiz-header__back", 3, "click"], [1, "lp-quiz-header__info"], [1, "lp-quiz-header__badge"], [1, "lp-quiz-header__title"], [1, "lp-quiz-header__count"], ["class", "lp-quiz-result", 4, "ngIf"], [1, "lp-quiz-questions"], ["class", "lp-quiz-question", 4, "ngFor", "ngForOf"], ["class", "lp-quiz-footer", 4, "ngIf"], [1, "lp-quiz-result"], [1, "lp-quiz-result__card"], [1, "lp-quiz-result__icon"], [1, "lp-quiz-result__score"], [1, "lp-quiz-result__label"], [1, "lp-quiz-result__sub"], [1, "lp-quiz-result__actions"], [1, "lp-btn", "lp-btn--outline", 3, "click"], [1, "isax", "isax-refresh", "me-1"], ["class", "lp-btn lp-btn--next", 3, "click", 4, "ngIf"], [1, "lp-btn", "lp-btn--next", 3, "click"], [1, "lp-quiz-question"], [1, "lp-quiz-question__header"], [1, "lp-quiz-question__num"], [1, "lp-quiz-question__text"], ["class", "lp-quiz-opts", 4, "ngIf"], ["class", "lp-quiz-explication", 4, "ngIf"], [1, "lp-quiz-opts"], ["class", "lp-quiz-opt", 3, "class", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "lp-quiz-opt", 3, "click", "disabled"], [1, "lp-quiz-opt__indicator"], [1, "lp-quiz-opt__text"], [1, "lp-quiz-explication"], [1, "isax", "isax-info-circle", "me-2"], [1, "lp-quiz-footer"], [1, "lp-btn", "lp-btn--complete", 3, "click", "disabled"], [1, "isax", "isax-send-2", "me-2"], [1, "lp-quiz-footer__hint"], [1, "lp-sidebar__module"], [1, "lp-module-header", 3, "click"], [1, "lp-module-header__left"], [1, "lp-module-header__num"], [1, "lp-module-header__title"], [1, "lp-module-header__right"], [1, "lp-module-header__mini-bar"], ["class", "lp-section-list", 4, "ngIf"], [1, "lp-section-list"], ["class", "lp-section-item", 3, "lp-section-item--active", "lp-section-item--done", "click", 4, "ngFor", "ngForOf"], [1, "lp-section-item", 3, "click"], [1, "lp-section-item__status"], [1, "lp-section-item__body"], [1, "lp-section-item__title"], [1, "lp-section-item__footer"], ["class", "lp-section-item__duration", 4, "ngIf"], ["class", "lp-section-item__quiz-badge", 4, "ngIf"], [1, "lp-section-item__duration"], [1, "lp-section-item__quiz-badge"], [1, "lp-modal-overlay", 3, "click"], [1, "lp-modal", 3, "click"], [1, "lp-modal__confetti"], [1, "lp-modal__icon-wrap"], [1, "lp-modal__icon-ring"], [1, "lp-modal__icon"], [1, "lp-modal__title"], [1, "lp-modal__sub"], ["class", "lp-modal__quiz-info", 4, "ngIf"], [1, "lp-modal__actions"], [1, "lp-modal__btn", "lp-modal__btn--primary", 3, "click"], [1, "isax", "isax-play-circle", "me-2"], [1, "lp-modal__btn", "lp-modal__btn--secondary", 3, "click"], [1, "isax", "isax-clock", "me-2"], [1, "lp-modal__btn", "lp-modal__btn--ghost", 3, "click"], [1, "isax", "isax-arrow-left-2", "me-2"], [1, "lp-modal__note"], [1, "isax", "isax-info-circle", "me-1"], [1, "lp-modal__quiz-info"], [1, "lp-modal__quiz-badge"], [1, "lp-modal__quiz-name"], [1, "lp-modal__quiz-meta"], [1, "isax", "isax-medal-star", "me-1"], [1, "isax", "isax-repeat", "me-1"]], template: function LectureFormationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, LectureFormationComponent_div_0_Template, 4, 0, "div", 0)(1, LectureFormationComponent_div_1_Template, 7, 1, "div", 1)(2, LectureFormationComponent_div_2_Template, 10, 1, "div", 2)(3, LectureFormationComponent_div_3_Template, 35, 16, "div", 3)(4, LectureFormationComponent_div_4_Template, 39, 2, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && !ctx.hasContent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.hasContent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showQuizFinalModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background: #f8fafc;\n  font-family: inherit;\n}\n.lp-loader[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  gap: 16px;\n}\n.lp-loader__ring[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: 3px solid #e2e8f0;\n  border-top-color: #069b8f;\n  animation: _ngcontent-%COMP%_lp-spin 0.7s linear infinite;\n}\n.lp-loader__text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n}\n@keyframes _ngcontent-%COMP%_lp-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.lp-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  padding: 40px;\n  text-align: center;\n  gap: 10px;\n}\n.lp-error__icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #dc2626;\n}\n.lp-error[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.lp-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n  max-width: 380px;\n}\n.lp-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  padding: 40px;\n  text-align: center;\n  gap: 10px;\n}\n.lp-empty__icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #069b8f;\n  opacity: 0.5;\n}\n.lp-empty__title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n.lp-empty__sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n  max-width: 380px;\n}\n.lp-empty__hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n}\n.lp-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n.lp-topbar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 58px;\n  padding: 0 20px;\n  background: #0f172a;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n  gap: 16px;\n  z-index: 100;\n}\n.lp-topbar__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.lp-topbar__right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.lp-topbar__back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  background: rgba(255, 255, 255, 0.09);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 8px;\n  color: #fff;\n  font-size: 16px;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n}\n.lp-topbar__back[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.18);\n}\n.lp-topbar__info[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.lp-topbar__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: rgba(255, 255, 255, 0.38);\n  font-weight: 600;\n}\n.lp-topbar__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 42vw;\n}\n.lp-topbar__progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.lp-topbar__progress-track[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.12);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.lp-topbar__progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #069b8f,\n      rgb(8.6608695652, 223.7391304348, 206.4173913043));\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.lp-topbar__progress-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.45);\n  white-space: nowrap;\n}\n.lp-topbar__progress-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: rgb(17.2049689441, 245.7950310559, 227.3850931677);\n  margin-left: 4px;\n}\n.lp-topbar__menu-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  background: rgba(255, 255, 255, 0.09);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 8px;\n  color: #fff;\n  cursor: pointer;\n  font-size: 16px;\n  transition: all 0.2s ease;\n}\n.lp-topbar__menu-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.18);\n}\n.lp-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  overflow: hidden;\n}\n.lp-main[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px 28px;\n  background: #f8fafc;\n  min-width: 0;\n  transition: padding 0.2s ease;\n}\n.lp-main[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n.lp-main[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f5f9;\n}\n.lp-main[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 4px;\n}\n.lp-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n  font-size: 12px;\n  color: #94a3b8;\n  margin-bottom: 18px;\n}\n.lp-breadcrumb__back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #069b8f;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 0;\n  transition: all 0.2s ease;\n}\n.lp-breadcrumb__back[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.lp-breadcrumb__sep[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #cbd5e1;\n}\n.lp-breadcrumb__module[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 500;\n}\n.lp-breadcrumb__current[_ngcontent-%COMP%] {\n  color: #069b8f;\n  font-weight: 600;\n}\n.lp-section-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.lp-section-header__type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  padding: 4px 12px;\n  border-radius: 99px;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n.lp-section-header__type-badge[data-type=video][_ngcontent-%COMP%] {\n  background: rgba(6, 155, 143, 0.1);\n  color: #069b8f;\n}\n.lp-section-header__type-badge[data-type=texte][_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.1);\n  color: #7c3aed;\n}\n.lp-section-header__type-badge[data-type=image][_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.1);\n  color: #d97706;\n}\n.lp-section-header__type-badge[data-type=audio][_ngcontent-%COMP%] {\n  background: rgba(236, 72, 153, 0.1);\n  color: #ec4899;\n}\n.lp-section-header__type-badge[data-type=pdf][_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n}\n.lp-section-header__title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1.3;\n  letter-spacing: -0.4px;\n  margin: 0 0 12px;\n}\n.lp-section-header__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.lp-meta-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 99px;\n  background: #f1f5f9;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.lp-meta-tag--done[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.lp-meta-tag--quiz[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  color: #4f46e5;\n  border-color: rgba(79, 70, 229, 0.2);\n}\n.lp-media-wrap[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.lp-media-wrap--video[_ngcontent-%COMP%] {\n  background: #0f172a;\n}\n.lp-media-wrap--image[_ngcontent-%COMP%] {\n  background: #0f172a;\n}\n.lp-embed-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n}\n.lp-embed-wrap[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n.lp-video-native[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-height: 60vh;\n  object-fit: contain;\n}\n.lp-video-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px;\n  color: #94a3b8;\n  gap: 8px;\n  text-align: center;\n}\n.lp-video-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: #dc2626;\n  opacity: 0.6;\n}\n.lp-video-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n}\n.lp-btn-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #069b8f;\n  text-decoration: none;\n}\n.lp-btn-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.lp-video-description[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-top: none;\n  border-radius: 0 0 18px 18px;\n}\n.lp-video-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #64748b;\n  line-height: 1.6;\n}\n.lp-image-content[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-height: 65vh;\n  object-fit: contain;\n}\n.lp-image-caption[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 16px;\n  background: rgba(0, 0, 0, 0.55);\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.lp-image-caption[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.lp-content-hero[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.lp-content-hero__img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-height: 340px;\n  object-fit: cover;\n}\n.lp-text-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  padding: 28px 32px;\n  margin-bottom: 20px;\n  transition: box-shadow 0.2s ease;\n}\n.lp-text-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.lp-text-intro[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  background: #e6f7f5;\n  border: 1px solid rgba(6, 155, 143, 0.18);\n  border-radius: 12px;\n  padding: 14px 16px;\n  margin-bottom: 22px;\n}\n.lp-text-intro__icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #069b8f;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.lp-text-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: rgb(5.9809937888, 154.5090062112, 142.5470186335);\n  line-height: 1.6;\n}\n.lp-text-body[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.85;\n  color: #475569;\n}\n.lp-text-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.lp-text-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.lp-text-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.lp-text-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.lp-text-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 800;\n  margin-top: 1.6em;\n  margin-bottom: 0.5em;\n  letter-spacing: -0.3px;\n}\n.lp-text-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.lp-text-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.lp-text-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 1em;\n}\n.lp-text-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.lp-text-body[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  padding-left: 1.5em;\n  margin-bottom: 1em;\n}\n.lp-text-body[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.4em;\n}\n.lp-text-body[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  color: #047a6f;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-size: 0.85em;\n  font-family: "SF Mono", monospace;\n}\n.lp-text-body[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #e2e8f0;\n  padding: 1.2rem 1.4rem;\n  border-radius: 12px;\n  overflow-x: auto;\n  font-size: 0.85em;\n  margin-bottom: 1em;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);\n}\n.lp-text-body[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: none;\n  color: inherit;\n  padding: 0;\n}\n.lp-text-body[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  border-left: 3px solid #069b8f;\n  margin: 1.2em 0;\n  padding: 0.7em 1.2em;\n  background: #e6f7f5;\n  border-radius: 0 12px 12px 0;\n  color: #475569;\n  font-style: italic;\n}\n.lp-text-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #069b8f;\n  text-decoration: underline;\n}\n.lp-text-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #334155;\n  font-weight: 700;\n}\n.lp-text-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  border-radius: 12px;\n  margin: 0.5em 0;\n}\n.lp-text-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 1em;\n  font-size: 14px;\n}\n.lp-text-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #334155;\n  font-weight: 700;\n  padding: 10px 14px;\n  border: 1px solid #e2e8f0;\n}\n.lp-text-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  border: 1px solid #e2e8f0;\n}\n.lp-text-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.lp-resources[_ngcontent-%COMP%] {\n  margin-top: 28px;\n  padding-top: 22px;\n  border-top: 1px solid #e2e8f0;\n}\n.lp-resources__title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #334155;\n  display: flex;\n  align-items: center;\n  margin: 0 0 14px;\n}\n.lp-resources__title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #069b8f;\n}\n.lp-resources__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.lp-resource-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: 12px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  color: #334155;\n}\n.lp-resource-item[_ngcontent-%COMP%]:hover {\n  background: #e6f7f5;\n  border-color: rgba(6, 155, 143, 0.2);\n  color: #069b8f;\n}\n.lp-resource-item__icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  color: #64748b;\n  flex-shrink: 0;\n}\n.lp-resource-item__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.lp-resource-item__name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.lp-resource-item__type[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.lp-resource-item__arrow[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.lp-audio-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  background: #0f172a;\n  border-radius: 18px;\n  padding: 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.lp-audio-cover[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n  width: 90px;\n  height: 90px;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.lp-audio-cover__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.lp-audio-cover__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.4);\n  font-size: 2rem;\n  color: rgba(255, 255, 255, 0.85);\n}\n.lp-audio-player[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.lp-audio-player__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  margin: 0 0 12px;\n}\n.lp-audio-native[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n}\n.lp-audio-native[_ngcontent-%COMP%]::-webkit-media-controls-panel {\n  background: #1e293b;\n}\n.lp-pdf-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  margin-bottom: 20px;\n  overflow: hidden;\n}\n.lp-pdf-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.lp-pdf-header__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #fef2f2;\n  color: #dc2626;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.lp-pdf-header__name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.lp-pdf-header__hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 2px 0 0;\n}\n.lp-pdf-viewer[_ngcontent-%COMP%] {\n  height: 70vh;\n}\n.lp-pdf-frame[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n.lp-actions-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n  margin-top: 24px;\n  padding: 18px 22px;\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.lp-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 10px 20px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.lp-btn--complete[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      #047a6f 100%);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.3);\n}\n.lp-btn--complete[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(6, 155, 143, 0.4);\n}\n.lp-btn--complete[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  transform: none;\n}\n.lp-btn--quiz[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5 0%,\n      rgb(41.1374407583, 30.5592417062, 217.4407582938) 100%);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.25);\n}\n.lp-btn--quiz[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(79, 70, 229, 0.35);\n}\n.lp-btn--prev[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  border: 1.5px solid #e2e8f0;\n}\n.lp-btn--prev[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.lp-btn--prev[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.lp-btn--next[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  color: #069b8f;\n  border: 1.5px solid rgba(6, 155, 143, 0.2);\n}\n.lp-btn--next[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.3);\n}\n.lp-btn--next[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.lp-btn--outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #475569;\n  border: 1.5px solid #e2e8f0;\n}\n.lp-btn--outline[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: #0f172a;\n  border-color: #cbd5e1;\n}\n.lp-done-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  background: #f0fdf4;\n  color: #16a34a;\n  border: 1.5px solid rgba(22, 163, 74, 0.25);\n}\n.lp-done-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.lp-nav-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-left: auto;\n}\n.lp-congrats[_ngcontent-%COMP%] {\n  margin-top: 28px;\n  padding: 30px 24px;\n  border-radius: 18px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #e6f7f5,\n      #f0fdf4);\n  border: 1px solid rgba(6, 155, 143, 0.18);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  position: relative;\n  overflow: hidden;\n}\n.lp-congrats__sparkles[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 30px;\n  font-size: 20px;\n  color: #d97706;\n  pointer-events: none;\n  opacity: 0.7;\n}\n.lp-congrats__sparkles[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_lp-sparkle 2s infinite;\n}\n.lp-congrats__sparkles[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.4s;\n}\n.lp-congrats__sparkles[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.8s;\n}\n.lp-congrats__icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #d97706;\n  display: block;\n  margin-bottom: 12px;\n}\n.lp-congrats__title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.lp-congrats__sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #475569;\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_lp-sparkle {\n  0%, 100% {\n    opacity: 0.4;\n    transform: scale(0.8);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n}\n.lp-quiz-shell[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n}\n.lp-quiz-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.lp-quiz-header__back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 600;\n  color: #069b8f;\n  padding: 0;\n  margin-bottom: 14px;\n  transition: all 0.2s ease;\n}\n.lp-quiz-header__back[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.lp-quiz-header__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  padding: 4px 12px;\n  border-radius: 99px;\n  background: #eef2ff;\n  color: #4f46e5;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n.lp-quiz-header__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.lp-quiz-header__count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n.lp-quiz-result[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.lp-quiz-result__card[_ngcontent-%COMP%] {\n  padding: 28px 24px;\n  border-radius: 18px;\n  text-align: center;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.lp-quiz-result__card--pass[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.lp-quiz-result__card--fail[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-color: rgba(220, 38, 38, 0.2);\n}\n.lp-quiz-result__icon[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  margin-bottom: 10px;\n}\n.lp-quiz-result__card--pass[_ngcontent-%COMP%]   .lp-quiz-result__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.lp-quiz-result__card--fail[_ngcontent-%COMP%]   .lp-quiz-result__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.lp-quiz-result__score[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n  margin-bottom: 4px;\n}\n.lp-quiz-result__label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #334155;\n  margin-bottom: 8px;\n}\n.lp-quiz-result__sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0 0 20px;\n  max-width: 380px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.lp-quiz-result__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n.lp-quiz-questions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  margin-bottom: 22px;\n}\n.lp-quiz-question[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n}\n.lp-quiz-question__header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  padding: 18px 20px 14px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.lp-quiz-question__num[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 26px;\n  height: 26px;\n  border-radius: 8px;\n  background: #4f46e5;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.lp-quiz-question__text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #334155;\n  margin: 0;\n  line-height: 1.5;\n  padding-top: 2px;\n}\n.lp-quiz-opts[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.lp-quiz-opt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 14px;\n  border-radius: 12px;\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-align: left;\n  width: 100%;\n  color: #334155;\n  font-size: 14px;\n}\n.lp-quiz-opt[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #eef2ff;\n  border-color: rgba(79, 70, 229, 0.25);\n  color: #4f46e5;\n}\n.lp-quiz-opt[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n}\n.lp-quiz-opt__indicator[_ngcontent-%COMP%] {\n  font-size: 17px;\n  flex-shrink: 0;\n  color: #cbd5e1;\n}\n.lp-quiz-opt__text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.lp-quiz-opt--selected[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  border-color: #4f46e5;\n  color: #4f46e5;\n}\n.lp-quiz-opt--selected[_ngcontent-%COMP%]   .lp-quiz-opt__indicator[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.lp-quiz-opt--correct[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-color: rgba(22, 163, 74, 0.4);\n  color: #16a34a;\n}\n.lp-quiz-opt--correct[_ngcontent-%COMP%]   .lp-quiz-opt__indicator[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.lp-quiz-opt--wrong[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-color: rgba(220, 38, 38, 0.3);\n  color: #dc2626;\n}\n.lp-quiz-opt--wrong[_ngcontent-%COMP%]   .lp-quiz-opt__indicator[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.lp-quiz-explication[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin: 0 18px 14px;\n  padding: 12px 14px;\n  background: #fffbeb;\n  border: 1px solid rgba(217, 119, 6, 0.2);\n  border-radius: 12px;\n  font-size: 13px;\n  color: rgb(167.3721973094, 91.7847533632, 4.6278026906);\n  line-height: 1.5;\n}\n.lp-quiz-explication[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #d97706;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.lp-quiz-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 18px 22px;\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.lp-quiz-footer__hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n}\n.lp-sidebar[_ngcontent-%COMP%] {\n  width: 300px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-left: 1px solid #e2e8f0;\n  overflow: hidden;\n  transition: width 0.22s ease;\n}\n.lp-sidebar[_ngcontent-%COMP%]:not(.lp-sidebar--open) {\n  width: 0;\n  border-left-width: 0;\n  overflow: hidden;\n}\n.lp-sidebar__progress[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 14px 16px;\n  background: #0f172a;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n}\n.lp-sidebar__progress-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.45);\n  margin-bottom: 6px;\n}\n.lp-sidebar__progress-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: rgb(17.2049689441, 245.7950310559, 227.3850931677);\n}\n.lp-sidebar__progress-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.lp-sidebar__progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #069b8f,\n      rgb(8.6608695652, 223.7391304348, 206.4173913043));\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.lp-sidebar__content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 8px 0;\n}\n.lp-sidebar__content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.lp-sidebar__content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e2e8f0;\n  border-radius: 4px;\n}\n.lp-module-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border: none;\n  border-bottom: 1px solid #f1f5f9;\n  cursor: pointer;\n  text-align: left;\n  transition: all 0.2s ease;\n  gap: 8px;\n}\n.lp-module-header[_ngcontent-%COMP%]:hover {\n  background: #e6f7f5;\n}\n.lp-module-header--open[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n}\n.lp-module-header__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.lp-module-header__right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.lp-module-header__num[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 6px;\n  background: #069b8f;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.lp-module-header__title[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #334155;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.lp-module-header__mini-bar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 3px;\n  background: #e2e8f0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.lp-module-header__mini-bar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #069b8f;\n  border-radius: 99px;\n  transition: width 0.4s;\n}\n.lp-module-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #94a3b8;\n}\n.lp-section-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 4px 8px 6px;\n}\n.lp-section-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-bottom: 2px;\n}\n.lp-section-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.lp-section-item--active[_ngcontent-%COMP%] {\n  background: #e6f7f5 !important;\n}\n.lp-section-item--active[_ngcontent-%COMP%]   .lp-section-item__title[_ngcontent-%COMP%] {\n  color: #069b8f;\n  font-weight: 600;\n}\n.lp-section-item--active[_ngcontent-%COMP%]   .lp-section-item__status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #069b8f;\n}\n.lp-section-item--done[_ngcontent-%COMP%]   .lp-section-item__status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.lp-section-item--done[_ngcontent-%COMP%]   .lp-section-item__title[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  text-decoration: line-through;\n}\n.lp-section-item__status[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 15px;\n  color: #cbd5e1;\n  margin-top: 1px;\n}\n.lp-section-item__body[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.lp-section-item__title[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12.5px;\n  color: #334155;\n  line-height: 1.4;\n}\n.lp-section-item__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 3px;\n}\n.lp-section-item__duration[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 11px;\n  color: #94a3b8;\n}\n.lp-section-item__duration[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.lp-section-item__quiz-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 7px;\n  border-radius: 99px;\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.lp-section-item__quiz-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n@media (max-width: 991px) {\n  .lp-topbar__progress[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .lp-sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 58px;\n    right: 0;\n    bottom: 0;\n    z-index: 200;\n    width: 280px !important;\n    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06);\n    transform: translateX(100%);\n    transition: transform 0.22s ease;\n    border-left: 1px solid #e2e8f0;\n  }\n  .lp-sidebar--open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .lp-sidebar[_ngcontent-%COMP%]:not(.lp-sidebar--open) {\n    width: 280px !important;\n    overflow: hidden;\n  }\n  .lp-main[_ngcontent-%COMP%] {\n    padding: 18px 16px;\n  }\n}\n@media (max-width: 575px) {\n  .lp-main[_ngcontent-%COMP%] {\n    padding: 14px 12px;\n  }\n  .lp-section-header__title[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .lp-text-card[_ngcontent-%COMP%] {\n    padding: 18px 16px;\n  }\n  .lp-nav-btns[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .lp-nav-btns[_ngcontent-%COMP%]   .lp-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n  .lp-topbar__title[_ngcontent-%COMP%] {\n    max-width: 38vw;\n  }\n}\n.lp-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  background: rgba(15, 23, 42, 0.75);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_lp-fade-in 0.25s ease;\n}\n@keyframes _ngcontent-%COMP%_lp-fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.lp-modal[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 24px;\n  padding: 40px 36px 32px;\n  max-width: 460px;\n  width: 100%;\n  text-align: center;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.22), 0 8px 24px rgba(0, 0, 0, 0.12);\n  animation: _ngcontent-%COMP%_lp-slide-up 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  overflow: hidden;\n}\n.lp-modal[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 5px;\n  background:\n    linear-gradient(\n      90deg,\n      #069b8f,\n      #4f46e5,\n      #d97706);\n  border-radius: 24px 24px 0 0;\n}\n@keyframes _ngcontent-%COMP%_lp-slide-up {\n  from {\n    opacity: 0;\n    transform: translateY(30px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.lp-modal__confetti[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-around;\n  padding: 0 20px;\n  font-size: 18px;\n  pointer-events: none;\n}\n.lp-modal__confetti[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_lp-float 3s ease-in-out infinite;\n  display: inline-block;\n}\n.lp-modal__confetti[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0s;\n}\n.lp-modal__confetti[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.4s;\n}\n.lp-modal__confetti[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.8s;\n}\n.lp-modal__confetti[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 1.2s;\n}\n.lp-modal__confetti[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 1.6s;\n}\n@keyframes _ngcontent-%COMP%_lp-float {\n  0%, 100% {\n    transform: translateY(0) rotate(-5deg);\n    opacity: 0.7;\n  }\n  50% {\n    transform: translateY(-8px) rotate(5deg);\n    opacity: 1;\n  }\n}\n.lp-modal__icon-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin: 16px auto 20px;\n  width: 80px;\n  height: 80px;\n}\n.lp-modal__icon-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(6, 155, 143, 0.15),\n      rgba(79, 70, 229, 0.15));\n  border: 2px solid rgba(6, 155, 143, 0.2);\n  animation: _ngcontent-%COMP%_lp-pulse-ring 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_lp-pulse-ring {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.08);\n    opacity: 0.7;\n  }\n}\n.lp-modal__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 8px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      #047a6f);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 24px rgba(6, 155, 143, 0.35);\n}\n.lp-modal__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #fff;\n}\n.lp-modal__title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 8px;\n  letter-spacing: -0.3px;\n}\n.lp-modal__sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0 0 24px;\n  line-height: 1.6;\n}\n.lp-modal__sub[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.lp-modal__quiz-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #eef2ff,\n      #e6f7f5);\n  border: 1px solid rgba(79, 70, 229, 0.15);\n  border-radius: 16px;\n  padding: 18px 20px;\n  margin-bottom: 24px;\n  text-align: left;\n}\n.lp-modal__quiz-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  padding: 4px 12px;\n  border-radius: 99px;\n  background: rgba(79, 70, 229, 0.1);\n  color: #4f46e5;\n  margin-bottom: 10px;\n}\n.lp-modal__quiz-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.lp-modal__quiz-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 12px;\n  line-height: 1.4;\n}\n.lp-modal__quiz-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.lp-modal__quiz-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #64748b;\n}\n.lp-modal__quiz-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #069b8f;\n}\n.lp-modal__quiz-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.lp-modal__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.lp-modal__btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  width: 100%;\n  padding: 13px 20px;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n}\n.lp-modal__btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.lp-modal__btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      #047a6f 100%);\n  color: #fff;\n  box-shadow: 0 4px 16px rgba(6, 155, 143, 0.3);\n}\n.lp-modal__btn--primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 24px rgba(6, 155, 143, 0.4);\n}\n.lp-modal__btn--secondary[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  border: 1.5px solid #e2e8f0;\n}\n.lp-modal__btn--secondary[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.lp-modal__btn--ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #94a3b8;\n  border: 1.5px solid #e2e8f0;\n  font-size: 13px;\n  padding: 10px 20px;\n}\n.lp-modal__btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: #64748b;\n}\n.lp-modal__note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 0;\n}\n.lp-modal__note[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #cbd5e1;\n}\n.lp-modal__note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 600;\n}\n@media (max-width: 480px) {\n  .lp-modal[_ngcontent-%COMP%] {\n    padding: 32px 20px 24px;\n    border-radius: 20px;\n  }\n  .lp-modal__title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=lecture-formation.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LectureFormationComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-lecture-formation", imports: [CommonModule, FormsModule], template: `<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     LOADER\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div *ngIf="loading" class="lp-loader">\r
  <div class="lp-loader__ring"></div>\r
  <p class="lp-loader__text">Chargement de la formation...</p>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     ERREUR\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div *ngIf="!loading && error" class="lp-error">\r
  <div class="lp-error__icon"><i class="isax isax-warning-2"></i></div>\r
  <h3>Impossible de charger la formation</h3>\r
  <p>{{ error }}</p>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     SANS CONTENU\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div *ngIf="!loading && !error && !hasContent" class="lp-empty">\r
  <div class="lp-empty__icon"><i class="isax isax-book-1"></i></div>\r
  <h2 class="lp-empty__title">{{ formation?.titre }}</h2>\r
  <p class="lp-empty__sub">Le contenu de cette formation n'est pas encore disponible.</p>\r
  <p class="lp-empty__hint">\r
    <i class="isax isax-notification me-2"></i>\r
    Vous serez notifi\xE9 d\xE8s que le contenu sera publi\xE9.\r
  </p>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     PLAYER PRINCIPAL\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="lp-shell" *ngIf="!loading && !error && hasContent">\r
\r
  <!-- \u2500\u2500 TOP BAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <header class="lp-topbar">\r
    <div class="lp-topbar__left">\r
      <button class="lp-topbar__back" (click)="goBack()">\r
        <i class="isax isax-arrow-left-2"></i>\r
      </button>\r
      <div class="lp-topbar__info">\r
        <span class="lp-topbar__label">Formation</span>\r
        <h1 class="lp-topbar__title">{{ formation?.titre }}</h1>\r
      </div>\r
    </div>\r
\r
    <div class="lp-topbar__right">\r
      <div class="lp-topbar__progress">\r
        <div class="lp-topbar__progress-track">\r
          <div class="lp-topbar__progress-fill" [style.width.%]="progressPercent"></div>\r
        </div>\r
        <span class="lp-topbar__progress-label">\r
          {{ completedCount }}/{{ totalSections }}\r
          <strong>{{ progressPercent }}%</strong>\r
        </span>\r
      </div>\r
      <button class="lp-topbar__menu-btn" (click)="toggleSidebar()">\r
        <i class="isax isax-sidebar-right"></i>\r
      </button>\r
    </div>\r
  </header>\r
\r
  <!-- \u2500\u2500 BODY \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="lp-body">\r
\r
    <!-- \u2550\u2550 MAIN \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <main class="lp-main" [class.lp-main--sidebar-closed]="!sidebarOpen">\r
      <ng-container *ngIf="selectedSection && !quizMode">\r
\r
        <!-- Breadcrumb -->\r
        <div class="lp-breadcrumb">\r
          <button class="lp-breadcrumb__back" (click)="goBack()">\r
            <i class="isax isax-arrow-left-2 me-1"></i>Retour\r
          </button>\r
          <i class="isax isax-arrow-right-3 lp-breadcrumb__sep"></i>\r
          <span class="lp-breadcrumb__module">{{ getModuleOfSection(selectedSection) }}</span>\r
          <i class="isax isax-arrow-right-3 lp-breadcrumb__sep"></i>\r
          <span class="lp-breadcrumb__current">{{ selectedSection.titre }}</span>\r
        </div>\r
\r
        <!-- \u2500\u2500 SECTION HEADER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
        <div class="lp-section-header">\r
          <div class="lp-section-header__type-badge" [attr.data-type]="selectedSection.type || 'texte'">\r
            <i class="isax {{ getSectionIcon(selectedSection) }}"></i>\r
            <span>{{ getSectionTypeLabel(selectedSection) }}</span>\r
          </div>\r
          <h2 class="lp-section-header__title">{{ selectedSection.titre }}</h2>\r
          <div class="lp-section-header__meta">\r
            <span *ngIf="selectedSection.duree_estimee" class="lp-meta-tag">\r
              <i class="isax isax-clock me-1"></i>{{ selectedSection.duree_estimee }}\r
            </span>\r
            <span *ngIf="isCompleted(selectedSection.id)" class="lp-meta-tag lp-meta-tag--done">\r
              <i class="isax isax-tick-circle me-1"></i>Compl\xE9t\xE9e\r
            </span>\r
            <span *ngIf="hasQuiz(selectedSection)" class="lp-meta-tag lp-meta-tag--quiz">\r
              <i class="isax isax-task-square me-1"></i>Quiz disponible\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- VIDEO -->\r
        <ng-container *ngIf="selectedSection.type === 'video'">\r
          <div class="lp-media-wrap lp-media-wrap--video" *ngIf="isYoutube(selectedSection.media_url)">\r
            <div class="lp-embed-wrap">\r
              <iframe [src]="getYoutubeEmbed(selectedSection.media_url)" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>\r
            </div>\r
          </div>\r
          <div class="lp-media-wrap lp-media-wrap--video" *ngIf="isVimeo(selectedSection.media_url)">\r
            <div class="lp-embed-wrap">\r
              <iframe [src]="getVimeoEmbed(selectedSection.media_url)" frameborder="0" allowfullscreen></iframe>\r
            </div>\r
          </div>\r
          <div class="lp-media-wrap lp-media-wrap--video" *ngIf="!isYoutube(selectedSection.media_url) && !isVimeo(selectedSection.media_url)">\r
            <video class="lp-video-native" controls preload="metadata" [src]="selectedSection.media_url" (ended)="markCompleted(selectedSection.id)" (error)="videoError = true">\r
              Votre navigateur ne supporte pas la lecture vid\xE9o.\r
            </video>\r
            <div class="lp-video-error" *ngIf="videoError">\r
              <i class="isax isax-video-slash"></i>\r
              <p>Impossible de charger la vid\xE9o.</p>\r
              <a [href]="selectedSection.media_url" target="_blank" class="lp-btn-link"><i class="isax isax-export me-1"></i>Ouvrir dans un nouvel onglet</a>\r
            </div>\r
          </div>\r
          <div class="lp-video-description" *ngIf="selectedSection.description"><p>{{ selectedSection.description }}</p></div>\r
        </ng-container>\r
\r
        <!-- IMAGE -->\r
        <ng-container *ngIf="selectedSection.type === 'image'">\r
          <div class="lp-media-wrap lp-media-wrap--image">\r
            <img [src]="selectedSection.media_url || selectedSection.image_url" [alt]="selectedSection.titre" class="lp-image-content">\r
            <div class="lp-image-caption" *ngIf="selectedSection.legende || selectedSection.caption">\r
              <i class="isax isax-gallery me-2"></i>{{ selectedSection.legende || selectedSection.caption }}\r
            </div>\r
          </div>\r
        </ng-container>\r
\r
        <!-- TEXTE -->\r
        <ng-container *ngIf="selectedSection.type === 'texte' || !selectedSection.type">\r
          <div class="lp-content-hero" *ngIf="selectedSection.image_url || selectedSection.image_couverture">\r
            <img [src]="selectedSection.image_url || selectedSection.image_couverture" [alt]="selectedSection.titre" class="lp-content-hero__img">\r
          </div>\r
          <div class="lp-text-card">\r
            <div class="lp-text-intro" *ngIf="selectedSection.resume || selectedSection.intro">\r
              <i class="isax isax-info-circle lp-text-intro__icon"></i>\r
              <p>{{ selectedSection.resume || selectedSection.intro }}</p>\r
            </div>\r
            <div class="lp-text-body" [innerHTML]="selectedSection.contenu"></div>\r
            <div class="lp-resources" *ngIf="selectedSection.ressources?.length">\r
              <h4 class="lp-resources__title"><i class="isax isax-folder-2 me-2"></i>Ressources compl\xE9mentaires</h4>\r
              <div class="lp-resources__list">\r
                <a *ngFor="let r of selectedSection.ressources" [href]="r.url" target="_blank" class="lp-resource-item">\r
                  <div class="lp-resource-item__icon">\r
                    <i class="isax" [class.isax-document-text]="r.type === 'pdf' || !r.type" [class.isax-link]="r.type === 'lien'" [class.isax-video]="r.type === 'video'"></i>\r
                  </div>\r
                  <div class="lp-resource-item__body">\r
                    <span class="lp-resource-item__name">{{ r.nom || r.titre }}</span>\r
                    <span class="lp-resource-item__type">{{ r.type || 'document' }}</span>\r
                  </div>\r
                  <i class="isax isax-export lp-resource-item__arrow"></i>\r
                </a>\r
              </div>\r
            </div>\r
          </div>\r
        </ng-container>\r
\r
        <!-- AUDIO -->\r
        <ng-container *ngIf="selectedSection.type === 'audio'">\r
          <div class="lp-audio-wrap">\r
            <div class="lp-audio-cover">\r
              <img [src]="formation?.image_couverture || 'assets/img/course/course-01.jpg'" [alt]="selectedSection.titre" class="lp-audio-cover__img">\r
              <div class="lp-audio-cover__overlay"><i class="isax isax-voice-cricle"></i></div>\r
            </div>\r
            <div class="lp-audio-player">\r
              <p class="lp-audio-player__title">{{ selectedSection.titre }}</p>\r
              <audio controls class="lp-audio-native" [src]="selectedSection.media_url" (ended)="markCompleted(selectedSection.id)"></audio>\r
            </div>\r
          </div>\r
          <div class="lp-text-card" *ngIf="selectedSection.contenu">\r
            <div class="lp-text-body" [innerHTML]="selectedSection.contenu"></div>\r
          </div>\r
        </ng-container>\r
\r
        <!-- PDF -->\r
        <ng-container *ngIf="selectedSection.type === 'pdf'">\r
          <div class="lp-pdf-wrap">\r
            <div class="lp-pdf-header">\r
              <div class="lp-pdf-header__icon"><i class="isax isax-document-text"></i></div>\r
              <div>\r
                <p class="lp-pdf-header__name">{{ selectedSection.titre }}</p>\r
                <p class="lp-pdf-header__hint">Consultez le document ci-dessous ou t\xE9l\xE9chargez-le.</p>\r
              </div>\r
              <a [href]="selectedSection.media_url" target="_blank" class="lp-btn lp-btn--outline" download>\r
                <i class="isax isax-import me-1"></i>T\xE9l\xE9charger\r
              </a>\r
            </div>\r
            <div class="lp-pdf-viewer">\r
              <iframe [src]="getSafeUrl(selectedSection.media_url + '#toolbar=1')" class="lp-pdf-frame"></iframe>\r
            </div>\r
          </div>\r
        </ng-container>\r
\r
        <!-- ACTIONS BAR -->\r
        <div class="lp-actions-bar">\r
          <button class="lp-btn lp-btn--complete" *ngIf="!isCompleted(selectedSection.id)" (click)="markCompleted(selectedSection.id)">\r
            <i class="isax isax-tick-circle me-2"></i>Marquer comme compl\xE9t\xE9\r
          </button>\r
          <div class="lp-done-badge" *ngIf="isCompleted(selectedSection.id)">\r
            <i class="isax isax-tick-circle me-2"></i>Section compl\xE9t\xE9e\r
          </div>\r
          <button class="lp-btn lp-btn--quiz" *ngIf="hasQuiz(selectedSection) && isCompleted(selectedSection.id)" (click)="startQuiz()">\r
            <i class="isax isax-task-square me-2"></i>\r
            {{ quizResults[selectedSection.id] ? 'Voir r\xE9sultats / Refaire' : 'Passer le quiz' }}\r
          </button>\r
          <div class="lp-nav-btns">\r
            <button class="lp-btn lp-btn--prev" [disabled]="!hasPrev()" (click)="goToPrev()">\r
              <i class="isax isax-arrow-left-2 me-1"></i>Pr\xE9c\xE9dent\r
            </button>\r
            <button class="lp-btn lp-btn--next" [disabled]="!hasNext()" (click)="goToNext()">\r
              Suivant<i class="isax isax-arrow-right-2 ms-1"></i>\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- F\xE9licitations -->\r
        <div class="lp-congrats" *ngIf="progressPercent === 100">\r
          <div class="lp-congrats__sparkles"><span>\u2726</span><span>\u2726</span><span>\u2726</span></div>\r
          <div class="lp-congrats__icon"><i class="isax isax-award"></i></div>\r
          <h3 class="lp-congrats__title">Formation termin\xE9e !</h3>\r
          <p class="lp-congrats__sub">F\xE9licitations ! Vous avez compl\xE9t\xE9 toutes les sections de cette formation.</p>\r
        </div>\r
\r
      </ng-container>\r
\r
      <!-- MODE QUIZ -->\r
      <ng-container *ngIf="selectedSection && quizMode">\r
        <div class="lp-quiz-shell">\r
          <div class="lp-quiz-header">\r
            <button class="lp-quiz-header__back" (click)="exitQuiz()">\r
              <i class="isax isax-arrow-left-2 me-1"></i>Retour au contenu\r
            </button>\r
            <div class="lp-quiz-header__info">\r
              <div class="lp-quiz-header__badge"><i class="isax isax-task-square me-1"></i>Quiz</div>\r
              <h2 class="lp-quiz-header__title">{{ selectedSection.titre }}</h2>\r
              <p class="lp-quiz-header__count">{{ selectedSection.quiz.questions.length }} question(s) \xB7 Score minimum : 60%</p>\r
            </div>\r
          </div>\r
          <div class="lp-quiz-result" *ngIf="quizSubmitted && getQuizResult() as result">\r
            <div class="lp-quiz-result__card" [class.lp-quiz-result__card--pass]="result.passed" [class.lp-quiz-result__card--fail]="!result.passed">\r
              <div class="lp-quiz-result__icon">\r
                <i class="isax" [class.isax-award]="result.passed" [class.isax-close-circle]="!result.passed"></i>\r
              </div>\r
              <div class="lp-quiz-result__score">{{ result.score }}/{{ result.total }}</div>\r
              <div class="lp-quiz-result__label">{{ result.passed ? 'Quiz r\xE9ussi !' : 'Quiz non r\xE9ussi' }}</div>\r
              <p class="lp-quiz-result__sub">{{ result.passed ? 'Bravo ! Vous pouvez continuer vers la section suivante.' : 'R\xE9visez le contenu et r\xE9essayez pour valider la section.' }}</p>\r
              <div class="lp-quiz-result__actions">\r
                <button class="lp-btn lp-btn--outline" (click)="retryQuiz()"><i class="isax isax-refresh me-1"></i>R\xE9essayer</button>\r
                <button class="lp-btn lp-btn--next" (click)="exitQuiz()" *ngIf="result.passed">Continuer<i class="isax isax-arrow-right-2 ms-1"></i></button>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="lp-quiz-questions">\r
            <div class="lp-quiz-question" *ngFor="let question of selectedSection.quiz.questions; let qi = index">\r
              <div class="lp-quiz-question__header">\r
                <span class="lp-quiz-question__num">Q{{ qi + 1 }}</span>\r
                <p class="lp-quiz-question__text">{{ question.question }}</p>\r
              </div>\r
              <div class="lp-quiz-opts" *ngIf="question.type === 'qcm' || question.type === 'vrai_faux'">\r
                <button class="lp-quiz-opt" *ngFor="let option of (question.options || ['Vrai', 'Faux'])" [class]="getAnswerClass(question, option)" [disabled]="quizSubmitted" (click)="selectAnswer(question.id, option)">\r
                  <span class="lp-quiz-opt__indicator">\r
                    <i class="isax" [class.isax-tick-circle]="quizSubmitted && isCorrectAnswer(question, option)" [class.isax-close-circle]="quizSubmitted && currentAnswers[question.id] === option && !isCorrectAnswer(question, option)" [class.isax-record]="!quizSubmitted && currentAnswers[question.id] === option" [class.isax-radio]="!quizSubmitted && currentAnswers[question.id] !== option"></i>\r
                  </span>\r
                  <span class="lp-quiz-opt__text">{{ option }}</span>\r
                </button>\r
              </div>\r
              <div class="lp-quiz-explication" *ngIf="quizSubmitted && question.explication">\r
                <i class="isax isax-info-circle me-2"></i><span>{{ question.explication }}</span>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="lp-quiz-footer" *ngIf="!quizSubmitted">\r
            <button class="lp-btn lp-btn--complete" [disabled]="!canSubmitQuiz()" (click)="submitQuiz()">\r
              <i class="isax isax-send-2 me-2"></i>Valider mes r\xE9ponses\r
            </button>\r
            <span class="lp-quiz-footer__hint">{{ getAnsweredCount() }} / {{ selectedSection.quiz.questions.length }} r\xE9ponses</span>\r
          </div>\r
        </div>\r
      </ng-container>\r
\r
    </main>\r
\r
    <!-- \u2550\u2550 SIDEBAR \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <aside class="lp-sidebar" [class.lp-sidebar--open]="sidebarOpen">\r
      <div class="lp-sidebar__progress">\r
        <div class="lp-sidebar__progress-info">\r
          <span>Progression</span><strong>{{ progressPercent }}%</strong>\r
        </div>\r
        <div class="lp-sidebar__progress-bar">\r
          <div class="lp-sidebar__progress-fill" [style.width.%]="progressPercent"></div>\r
        </div>\r
      </div>\r
      <div class="lp-sidebar__content">\r
        <div class="lp-sidebar__module" *ngFor="let module of modules; let mi = index">\r
          <button class="lp-module-header" (click)="toggleModule(mi)" [class.lp-module-header--open]="openModules[mi]">\r
            <div class="lp-module-header__left">\r
              <span class="lp-module-header__num">{{ mi + 1 }}</span>\r
              <span class="lp-module-header__title">{{ module.titre }}</span>\r
            </div>\r
            <div class="lp-module-header__right">\r
              <div class="lp-module-header__mini-bar"><div [style.width.%]="getModuleProgress(module)"></div></div>\r
              <i class="isax" [class.isax-arrow-up-2]="openModules[mi]" [class.isax-arrow-down-2]="!openModules[mi]"></i>\r
            </div>\r
          </button>\r
          <ul class="lp-section-list" *ngIf="openModules[mi]">\r
            <li class="lp-section-item" *ngFor="let section of module.sections || []" (click)="selectSection(section)" [class.lp-section-item--active]="selectedSection?.id === section.id" [class.lp-section-item--done]="isCompleted(section.id)">\r
              <div class="lp-section-item__status">\r
                <i class="isax" [class.isax-tick-circle]="isCompleted(section.id)" [class.isax-play-circle]="!isCompleted(section.id) && section.type === 'video'" [class.isax-document-text]="!isCompleted(section.id) && section.type === 'texte'" [class.isax-gallery]="!isCompleted(section.id) && section.type === 'image'" [class.isax-voice-cricle]="!isCompleted(section.id) && section.type === 'audio'" [class.isax-document]="!isCompleted(section.id) && (section.type === 'pdf' || !section.type)"></i>\r
              </div>\r
              <div class="lp-section-item__body">\r
                <span class="lp-section-item__title">{{ section.titre }}</span>\r
                <div class="lp-section-item__footer">\r
                  <span *ngIf="section.duree_estimee" class="lp-section-item__duration"><i class="isax isax-clock me-1"></i>{{ section.duree_estimee }}</span>\r
                  <span *ngIf="hasQuiz(section)" class="lp-section-item__quiz-badge"><i class="isax isax-task-square me-1"></i>Quiz</span>\r
                </div>\r
              </div>\r
            </li>\r
          </ul>\r
        </div>\r
      </div>\r
    </aside>\r
\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     MODAL QUIZ FINAL\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="lp-modal-overlay" *ngIf="showQuizFinalModal" (click)="resterEtFairePlusTard()">\r
  <div class="lp-modal" (click)="$event.stopPropagation()">\r
\r
    <!-- Confettis d\xE9coratifs -->\r
    <div class="lp-modal__confetti">\r
      <span>\u{1F389}</span><span>\u2B50</span><span>\u{1F3C6}</span><span>\u2728</span><span>\u{1F38A}</span>\r
    </div>\r
\r
    <!-- Ic\xF4ne centrale -->\r
    <div class="lp-modal__icon-wrap">\r
      <div class="lp-modal__icon-ring"></div>\r
      <div class="lp-modal__icon">\r
        <i class="isax isax-award"></i>\r
      </div>\r
    </div>\r
\r
    <!-- Titre -->\r
    <h2 class="lp-modal__title">F\xE9licitations ! \u{1F389}</h2>\r
    <p class="lp-modal__sub">\r
      Vous avez termin\xE9 la formation\r
      <strong>{{ formation?.titre }}</strong>\r
    </p>\r
\r
    <!-- Info quiz -->\r
    <div class="lp-modal__quiz-info" *ngIf="quizFinalData">\r
      <div class="lp-modal__quiz-badge">\r
        <i class="isax isax-task-square me-2"></i>Quiz final disponible\r
      </div>\r
      <p class="lp-modal__quiz-name">{{ quizFinalData.titre }}</p>\r
      <div class="lp-modal__quiz-meta">\r
        <span>\r
          <i class="isax isax-medal-star me-1"></i>\r
          Score minimum : <strong>{{ quizFinalData.score_minimum }}%</strong>\r
        </span>\r
        <span>\r
          <i class="isax isax-repeat me-1"></i>\r
          Tentatives : <strong>{{ quizFinalData.max_tentatives }}</strong>\r
        </span>\r
      </div>\r
    </div>\r
\r
    <!-- Actions -->\r
    <div class="lp-modal__actions">\r
      <button class="lp-modal__btn lp-modal__btn--primary" (click)="allerAuQuizFinal()">\r
        <i class="isax isax-play-circle me-2"></i>\r
        Passer le quiz maintenant\r
      </button>\r
      <button class="lp-modal__btn lp-modal__btn--secondary" (click)="resterEtFairePlusTard()">\r
        <i class="isax isax-clock me-2"></i>\r
        Je le ferai plus tard\r
      </button>\r
      <button class="lp-modal__btn lp-modal__btn--ghost" (click)="fermerModalQuizFinal()">\r
        <i class="isax isax-arrow-left-2 me-2"></i>\r
        Retour au tableau de bord\r
      </button>\r
    </div>\r
\r
    <!-- Note -->\r
    <p class="lp-modal__note">\r
      <i class="isax isax-info-circle me-1"></i>\r
      Le quiz restera disponible dans <strong>Mes Quiz</strong>\r
    </p>\r
\r
  </div>\r
</div>`, styles: ['/* src/app/features/student/lecture-formation/lecture-formation.component.scss */\n:host {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background: #f8fafc;\n  font-family: inherit;\n}\n.lp-loader {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  gap: 16px;\n}\n.lp-loader__ring {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: 3px solid #e2e8f0;\n  border-top-color: #069b8f;\n  animation: lp-spin 0.7s linear infinite;\n}\n.lp-loader__text {\n  font-size: 14px;\n  color: #94a3b8;\n}\n@keyframes lp-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.lp-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  padding: 40px;\n  text-align: center;\n  gap: 10px;\n}\n.lp-error__icon {\n  font-size: 3rem;\n  color: #dc2626;\n}\n.lp-error h3 {\n  font-size: 18px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.lp-error p {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n  max-width: 380px;\n}\n.lp-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  padding: 40px;\n  text-align: center;\n  gap: 10px;\n}\n.lp-empty__icon {\n  font-size: 3rem;\n  color: #069b8f;\n  opacity: 0.5;\n}\n.lp-empty__title {\n  font-size: 20px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n.lp-empty__sub {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n  max-width: 380px;\n}\n.lp-empty__hint {\n  font-size: 13px;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n}\n.lp-shell {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n.lp-topbar {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 58px;\n  padding: 0 20px;\n  background: #0f172a;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n  gap: 16px;\n  z-index: 100;\n}\n.lp-topbar__left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.lp-topbar__right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.lp-topbar__back {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  background: rgba(255, 255, 255, 0.09);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 8px;\n  color: #fff;\n  font-size: 16px;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n}\n.lp-topbar__back:hover {\n  background: rgba(255, 255, 255, 0.18);\n}\n.lp-topbar__info {\n  min-width: 0;\n}\n.lp-topbar__label {\n  display: block;\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: rgba(255, 255, 255, 0.38);\n  font-weight: 600;\n}\n.lp-topbar__title {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 42vw;\n}\n.lp-topbar__progress {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.lp-topbar__progress-track {\n  width: 120px;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.12);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.lp-topbar__progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #069b8f,\n      rgb(8.6608695652, 223.7391304348, 206.4173913043));\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.lp-topbar__progress-label {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.45);\n  white-space: nowrap;\n}\n.lp-topbar__progress-label strong {\n  color: rgb(17.2049689441, 245.7950310559, 227.3850931677);\n  margin-left: 4px;\n}\n.lp-topbar__menu-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  background: rgba(255, 255, 255, 0.09);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 8px;\n  color: #fff;\n  cursor: pointer;\n  font-size: 16px;\n  transition: all 0.2s ease;\n}\n.lp-topbar__menu-btn:hover {\n  background: rgba(255, 255, 255, 0.18);\n}\n.lp-body {\n  flex: 1;\n  display: flex;\n  overflow: hidden;\n}\n.lp-main {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px 28px;\n  background: #f8fafc;\n  min-width: 0;\n  transition: padding 0.2s ease;\n}\n.lp-main::-webkit-scrollbar {\n  width: 5px;\n}\n.lp-main::-webkit-scrollbar-track {\n  background: #f1f5f9;\n}\n.lp-main::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 4px;\n}\n.lp-breadcrumb {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n  font-size: 12px;\n  color: #94a3b8;\n  margin-bottom: 18px;\n}\n.lp-breadcrumb__back {\n  display: inline-flex;\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #069b8f;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 0;\n  transition: all 0.2s ease;\n}\n.lp-breadcrumb__back:hover {\n  text-decoration: underline;\n}\n.lp-breadcrumb__sep {\n  font-size: 10px;\n  color: #cbd5e1;\n}\n.lp-breadcrumb__module {\n  color: #64748b;\n  font-weight: 500;\n}\n.lp-breadcrumb__current {\n  color: #069b8f;\n  font-weight: 600;\n}\n.lp-section-header {\n  margin-bottom: 20px;\n}\n.lp-section-header__type-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  padding: 4px 12px;\n  border-radius: 99px;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n.lp-section-header__type-badge[data-type=video] {\n  background: rgba(6, 155, 143, 0.1);\n  color: #069b8f;\n}\n.lp-section-header__type-badge[data-type=texte] {\n  background: rgba(124, 58, 237, 0.1);\n  color: #7c3aed;\n}\n.lp-section-header__type-badge[data-type=image] {\n  background: rgba(217, 119, 6, 0.1);\n  color: #d97706;\n}\n.lp-section-header__type-badge[data-type=audio] {\n  background: rgba(236, 72, 153, 0.1);\n  color: #ec4899;\n}\n.lp-section-header__type-badge[data-type=pdf] {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n}\n.lp-section-header__title {\n  font-size: 24px;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1.3;\n  letter-spacing: -0.4px;\n  margin: 0 0 12px;\n}\n.lp-section-header__meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.lp-meta-tag {\n  display: inline-flex;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 99px;\n  background: #f1f5f9;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.lp-meta-tag--done {\n  background: #f0fdf4;\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.lp-meta-tag--quiz {\n  background: #eef2ff;\n  color: #4f46e5;\n  border-color: rgba(79, 70, 229, 0.2);\n}\n.lp-media-wrap {\n  border-radius: 18px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.lp-media-wrap--video {\n  background: #0f172a;\n}\n.lp-media-wrap--image {\n  background: #0f172a;\n}\n.lp-embed-wrap {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n}\n.lp-embed-wrap iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n.lp-video-native {\n  display: block;\n  width: 100%;\n  max-height: 60vh;\n  object-fit: contain;\n}\n.lp-video-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px;\n  color: #94a3b8;\n  gap: 8px;\n  text-align: center;\n}\n.lp-video-error i {\n  font-size: 2.5rem;\n  color: #dc2626;\n  opacity: 0.6;\n}\n.lp-video-error p {\n  margin: 0;\n  font-size: 13px;\n}\n.lp-btn-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #069b8f;\n  text-decoration: none;\n}\n.lp-btn-link:hover {\n  text-decoration: underline;\n}\n.lp-video-description {\n  padding: 14px 18px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-top: none;\n  border-radius: 0 0 18px 18px;\n}\n.lp-video-description p {\n  margin: 0;\n  font-size: 13px;\n  color: #64748b;\n  line-height: 1.6;\n}\n.lp-image-content {\n  display: block;\n  width: 100%;\n  max-height: 65vh;\n  object-fit: contain;\n}\n.lp-image-caption {\n  display: flex;\n  align-items: center;\n  padding: 10px 16px;\n  background: rgba(0, 0, 0, 0.55);\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.lp-image-caption i {\n  font-size: 14px;\n}\n.lp-content-hero {\n  border-radius: 18px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.lp-content-hero__img {\n  display: block;\n  width: 100%;\n  max-height: 340px;\n  object-fit: cover;\n}\n.lp-text-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  padding: 28px 32px;\n  margin-bottom: 20px;\n  transition: box-shadow 0.2s ease;\n}\n.lp-text-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.lp-text-intro {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  background: #e6f7f5;\n  border: 1px solid rgba(6, 155, 143, 0.18);\n  border-radius: 12px;\n  padding: 14px 16px;\n  margin-bottom: 22px;\n}\n.lp-text-intro__icon {\n  font-size: 18px;\n  color: #069b8f;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.lp-text-intro p {\n  margin: 0;\n  font-size: 14px;\n  color: rgb(5.9809937888, 154.5090062112, 142.5470186335);\n  line-height: 1.6;\n}\n.lp-text-body {\n  font-size: 15px;\n  line-height: 1.85;\n  color: #475569;\n}\n.lp-text-body h1,\n.lp-text-body h2,\n.lp-text-body h3,\n.lp-text-body h4,\n.lp-text-body h5 {\n  color: #0f172a;\n  font-weight: 800;\n  margin-top: 1.6em;\n  margin-bottom: 0.5em;\n  letter-spacing: -0.3px;\n}\n.lp-text-body h2 {\n  font-size: 20px;\n}\n.lp-text-body h3 {\n  font-size: 17px;\n}\n.lp-text-body p {\n  margin: 0 0 1em;\n}\n.lp-text-body ul,\n.lp-text-body ol {\n  padding-left: 1.5em;\n  margin-bottom: 1em;\n}\n.lp-text-body li {\n  margin-bottom: 0.4em;\n}\n.lp-text-body code {\n  background: #e6f7f5;\n  color: #047a6f;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-size: 0.85em;\n  font-family: "SF Mono", monospace;\n}\n.lp-text-body pre {\n  background: #0f172a;\n  color: #e2e8f0;\n  padding: 1.2rem 1.4rem;\n  border-radius: 12px;\n  overflow-x: auto;\n  font-size: 0.85em;\n  margin-bottom: 1em;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);\n}\n.lp-text-body pre code {\n  background: none;\n  color: inherit;\n  padding: 0;\n}\n.lp-text-body blockquote {\n  border-left: 3px solid #069b8f;\n  margin: 1.2em 0;\n  padding: 0.7em 1.2em;\n  background: #e6f7f5;\n  border-radius: 0 12px 12px 0;\n  color: #475569;\n  font-style: italic;\n}\n.lp-text-body a {\n  color: #069b8f;\n  text-decoration: underline;\n}\n.lp-text-body strong {\n  color: #334155;\n  font-weight: 700;\n}\n.lp-text-body img {\n  max-width: 100%;\n  border-radius: 12px;\n  margin: 0.5em 0;\n}\n.lp-text-body table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 1em;\n  font-size: 14px;\n}\n.lp-text-body table th {\n  background: #f8fafc;\n  color: #334155;\n  font-weight: 700;\n  padding: 10px 14px;\n  border: 1px solid #e2e8f0;\n}\n.lp-text-body table td {\n  padding: 9px 14px;\n  border: 1px solid #e2e8f0;\n}\n.lp-text-body table tr:nth-child(even) td {\n  background: #f8fafc;\n}\n.lp-resources {\n  margin-top: 28px;\n  padding-top: 22px;\n  border-top: 1px solid #e2e8f0;\n}\n.lp-resources__title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #334155;\n  display: flex;\n  align-items: center;\n  margin: 0 0 14px;\n}\n.lp-resources__title i {\n  font-size: 16px;\n  color: #069b8f;\n}\n.lp-resources__list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.lp-resource-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: 12px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  color: #334155;\n}\n.lp-resource-item:hover {\n  background: #e6f7f5;\n  border-color: rgba(6, 155, 143, 0.2);\n  color: #069b8f;\n}\n.lp-resource-item__icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  color: #64748b;\n  flex-shrink: 0;\n}\n.lp-resource-item__body {\n  flex: 1;\n  min-width: 0;\n}\n.lp-resource-item__name {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.lp-resource-item__type {\n  font-size: 11px;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.lp-resource-item__arrow {\n  font-size: 14px;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.lp-audio-wrap {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  background: #0f172a;\n  border-radius: 18px;\n  padding: 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n}\n.lp-audio-cover {\n  position: relative;\n  flex-shrink: 0;\n  width: 90px;\n  height: 90px;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.lp-audio-cover__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.lp-audio-cover__overlay {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.4);\n  font-size: 2rem;\n  color: rgba(255, 255, 255, 0.85);\n}\n.lp-audio-player {\n  flex: 1;\n  min-width: 0;\n}\n.lp-audio-player__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  margin: 0 0 12px;\n}\n.lp-audio-native {\n  width: 100%;\n  border-radius: 8px;\n}\n.lp-audio-native::-webkit-media-controls-panel {\n  background: #1e293b;\n}\n.lp-pdf-wrap {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  margin-bottom: 20px;\n  overflow: hidden;\n}\n.lp-pdf-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.lp-pdf-header__icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  background: #fef2f2;\n  color: #dc2626;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.lp-pdf-header__name {\n  font-size: 14px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.lp-pdf-header__hint {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 2px 0 0;\n}\n.lp-pdf-viewer {\n  height: 70vh;\n}\n.lp-pdf-frame {\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n.lp-actions-bar {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n  margin-top: 24px;\n  padding: 18px 22px;\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.lp-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 10px 20px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.lp-btn--complete {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      #047a6f 100%);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.3);\n}\n.lp-btn--complete:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(6, 155, 143, 0.4);\n}\n.lp-btn--complete:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  transform: none;\n}\n.lp-btn--quiz {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5 0%,\n      rgb(41.1374407583, 30.5592417062, 217.4407582938) 100%);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.25);\n}\n.lp-btn--quiz:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(79, 70, 229, 0.35);\n}\n.lp-btn--prev {\n  background: #f1f5f9;\n  color: #475569;\n  border: 1.5px solid #e2e8f0;\n}\n.lp-btn--prev:hover:not(:disabled) {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.lp-btn--prev:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.lp-btn--next {\n  background: #e6f7f5;\n  color: #069b8f;\n  border: 1.5px solid rgba(6, 155, 143, 0.2);\n}\n.lp-btn--next:hover:not(:disabled) {\n  background: #069b8f;\n  color: #fff;\n  border-color: #069b8f;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.3);\n}\n.lp-btn--next:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.lp-btn--outline {\n  background: transparent;\n  color: #475569;\n  border: 1.5px solid #e2e8f0;\n}\n.lp-btn--outline:hover {\n  background: #f8fafc;\n  color: #0f172a;\n  border-color: #cbd5e1;\n}\n.lp-done-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  background: #f0fdf4;\n  color: #16a34a;\n  border: 1.5px solid rgba(22, 163, 74, 0.25);\n}\n.lp-done-badge i {\n  font-size: 15px;\n}\n.lp-nav-btns {\n  display: flex;\n  gap: 8px;\n  margin-left: auto;\n}\n.lp-congrats {\n  margin-top: 28px;\n  padding: 30px 24px;\n  border-radius: 18px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #e6f7f5,\n      #f0fdf4);\n  border: 1px solid rgba(6, 155, 143, 0.18);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  position: relative;\n  overflow: hidden;\n}\n.lp-congrats__sparkles {\n  position: absolute;\n  top: 16px;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 30px;\n  font-size: 20px;\n  color: #d97706;\n  pointer-events: none;\n  opacity: 0.7;\n}\n.lp-congrats__sparkles span {\n  animation: lp-sparkle 2s infinite;\n}\n.lp-congrats__sparkles span:nth-child(2) {\n  animation-delay: 0.4s;\n}\n.lp-congrats__sparkles span:nth-child(3) {\n  animation-delay: 0.8s;\n}\n.lp-congrats__icon {\n  font-size: 3rem;\n  color: #d97706;\n  display: block;\n  margin-bottom: 12px;\n}\n.lp-congrats__title {\n  font-size: 20px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.lp-congrats__sub {\n  font-size: 14px;\n  color: #475569;\n  margin: 0;\n}\n@keyframes lp-sparkle {\n  0%, 100% {\n    opacity: 0.4;\n    transform: scale(0.8);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n}\n.lp-quiz-shell {\n  max-width: 720px;\n  margin: 0 auto;\n}\n.lp-quiz-header {\n  margin-bottom: 24px;\n}\n.lp-quiz-header__back {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 600;\n  color: #069b8f;\n  padding: 0;\n  margin-bottom: 14px;\n  transition: all 0.2s ease;\n}\n.lp-quiz-header__back:hover {\n  text-decoration: underline;\n}\n.lp-quiz-header__badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  padding: 4px 12px;\n  border-radius: 99px;\n  background: #eef2ff;\n  color: #4f46e5;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n.lp-quiz-header__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.lp-quiz-header__count {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n.lp-quiz-result {\n  margin-bottom: 24px;\n}\n.lp-quiz-result__card {\n  padding: 28px 24px;\n  border-radius: 18px;\n  text-align: center;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.lp-quiz-result__card--pass {\n  background: #f0fdf4;\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.lp-quiz-result__card--fail {\n  background: #fef2f2;\n  border-color: rgba(220, 38, 38, 0.2);\n}\n.lp-quiz-result__icon {\n  font-size: 2.8rem;\n  margin-bottom: 10px;\n}\n.lp-quiz-result__card--pass .lp-quiz-result__icon i {\n  color: #16a34a;\n}\n.lp-quiz-result__card--fail .lp-quiz-result__icon i {\n  color: #dc2626;\n}\n.lp-quiz-result__score {\n  font-size: 3rem;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n  margin-bottom: 4px;\n}\n.lp-quiz-result__label {\n  font-size: 16px;\n  font-weight: 700;\n  color: #334155;\n  margin-bottom: 8px;\n}\n.lp-quiz-result__sub {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0 0 20px;\n  max-width: 380px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.lp-quiz-result__actions {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n.lp-quiz-questions {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  margin-bottom: 22px;\n}\n.lp-quiz-question {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n}\n.lp-quiz-question__header {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  padding: 18px 20px 14px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.lp-quiz-question__num {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 26px;\n  height: 26px;\n  border-radius: 8px;\n  background: #4f46e5;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.lp-quiz-question__text {\n  font-size: 15px;\n  font-weight: 600;\n  color: #334155;\n  margin: 0;\n  line-height: 1.5;\n  padding-top: 2px;\n}\n.lp-quiz-opts {\n  padding: 14px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.lp-quiz-opt {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 14px;\n  border-radius: 12px;\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-align: left;\n  width: 100%;\n  color: #334155;\n  font-size: 14px;\n}\n.lp-quiz-opt:hover:not(:disabled) {\n  background: #eef2ff;\n  border-color: rgba(79, 70, 229, 0.25);\n  color: #4f46e5;\n}\n.lp-quiz-opt:disabled {\n  cursor: not-allowed;\n}\n.lp-quiz-opt__indicator {\n  font-size: 17px;\n  flex-shrink: 0;\n  color: #cbd5e1;\n}\n.lp-quiz-opt__text {\n  flex: 1;\n}\n.lp-quiz-opt--selected {\n  background: #eef2ff;\n  border-color: #4f46e5;\n  color: #4f46e5;\n}\n.lp-quiz-opt--selected .lp-quiz-opt__indicator {\n  color: #4f46e5;\n}\n.lp-quiz-opt--correct {\n  background: #f0fdf4;\n  border-color: rgba(22, 163, 74, 0.4);\n  color: #16a34a;\n}\n.lp-quiz-opt--correct .lp-quiz-opt__indicator {\n  color: #16a34a;\n}\n.lp-quiz-opt--wrong {\n  background: #fef2f2;\n  border-color: rgba(220, 38, 38, 0.3);\n  color: #dc2626;\n}\n.lp-quiz-opt--wrong .lp-quiz-opt__indicator {\n  color: #dc2626;\n}\n.lp-quiz-explication {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin: 0 18px 14px;\n  padding: 12px 14px;\n  background: #fffbeb;\n  border: 1px solid rgba(217, 119, 6, 0.2);\n  border-radius: 12px;\n  font-size: 13px;\n  color: rgb(167.3721973094, 91.7847533632, 4.6278026906);\n  line-height: 1.5;\n}\n.lp-quiz-explication i {\n  font-size: 15px;\n  color: #d97706;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.lp-quiz-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 18px 22px;\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.lp-quiz-footer__hint {\n  font-size: 13px;\n  color: #94a3b8;\n}\n.lp-sidebar {\n  width: 300px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-left: 1px solid #e2e8f0;\n  overflow: hidden;\n  transition: width 0.22s ease;\n}\n.lp-sidebar:not(.lp-sidebar--open) {\n  width: 0;\n  border-left-width: 0;\n  overflow: hidden;\n}\n.lp-sidebar__progress {\n  flex-shrink: 0;\n  padding: 14px 16px;\n  background: #0f172a;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n}\n.lp-sidebar__progress-info {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.45);\n  margin-bottom: 6px;\n}\n.lp-sidebar__progress-info strong {\n  color: rgb(17.2049689441, 245.7950310559, 227.3850931677);\n}\n.lp-sidebar__progress-bar {\n  height: 4px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.lp-sidebar__progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #069b8f,\n      rgb(8.6608695652, 223.7391304348, 206.4173913043));\n  border-radius: 99px;\n  transition: width 0.4s ease;\n}\n.lp-sidebar__content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 8px 0;\n}\n.lp-sidebar__content::-webkit-scrollbar {\n  width: 4px;\n}\n.lp-sidebar__content::-webkit-scrollbar-thumb {\n  background: #e2e8f0;\n  border-radius: 4px;\n}\n.lp-module-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border: none;\n  border-bottom: 1px solid #f1f5f9;\n  cursor: pointer;\n  text-align: left;\n  transition: all 0.2s ease;\n  gap: 8px;\n}\n.lp-module-header:hover {\n  background: #e6f7f5;\n}\n.lp-module-header--open {\n  background: #e6f7f5;\n}\n.lp-module-header__left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.lp-module-header__right {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.lp-module-header__num {\n  width: 20px;\n  height: 20px;\n  border-radius: 6px;\n  background: #069b8f;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.lp-module-header__title {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #334155;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.lp-module-header__mini-bar {\n  width: 36px;\n  height: 3px;\n  background: #e2e8f0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.lp-module-header__mini-bar div {\n  height: 100%;\n  background: #069b8f;\n  border-radius: 99px;\n  transition: width 0.4s;\n}\n.lp-module-header i {\n  font-size: 13px;\n  color: #94a3b8;\n}\n.lp-section-list {\n  list-style: none;\n  margin: 0;\n  padding: 4px 8px 6px;\n}\n.lp-section-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-bottom: 2px;\n}\n.lp-section-item:hover {\n  background: #f8fafc;\n}\n.lp-section-item--active {\n  background: #e6f7f5 !important;\n}\n.lp-section-item--active .lp-section-item__title {\n  color: #069b8f;\n  font-weight: 600;\n}\n.lp-section-item--active .lp-section-item__status i {\n  color: #069b8f;\n}\n.lp-section-item--done .lp-section-item__status i {\n  color: #16a34a;\n}\n.lp-section-item--done .lp-section-item__title {\n  color: #94a3b8;\n  text-decoration: line-through;\n}\n.lp-section-item__status {\n  flex-shrink: 0;\n  font-size: 15px;\n  color: #cbd5e1;\n  margin-top: 1px;\n}\n.lp-section-item__body {\n  min-width: 0;\n}\n.lp-section-item__title {\n  display: block;\n  font-size: 12.5px;\n  color: #334155;\n  line-height: 1.4;\n}\n.lp-section-item__footer {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 3px;\n}\n.lp-section-item__duration {\n  display: flex;\n  align-items: center;\n  font-size: 11px;\n  color: #94a3b8;\n}\n.lp-section-item__duration i {\n  font-size: 11px;\n}\n.lp-section-item__quiz-badge {\n  display: inline-flex;\n  align-items: center;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 7px;\n  border-radius: 99px;\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.lp-section-item__quiz-badge i {\n  font-size: 10px;\n}\n@media (max-width: 991px) {\n  .lp-topbar__progress {\n    display: none;\n  }\n  .lp-sidebar {\n    position: fixed;\n    top: 58px;\n    right: 0;\n    bottom: 0;\n    z-index: 200;\n    width: 280px !important;\n    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06);\n    transform: translateX(100%);\n    transition: transform 0.22s ease;\n    border-left: 1px solid #e2e8f0;\n  }\n  .lp-sidebar--open {\n    transform: translateX(0);\n  }\n  .lp-sidebar:not(.lp-sidebar--open) {\n    width: 280px !important;\n    overflow: hidden;\n  }\n  .lp-main {\n    padding: 18px 16px;\n  }\n}\n@media (max-width: 575px) {\n  .lp-main {\n    padding: 14px 12px;\n  }\n  .lp-section-header__title {\n    font-size: 19px;\n  }\n  .lp-text-card {\n    padding: 18px 16px;\n  }\n  .lp-nav-btns {\n    width: 100%;\n  }\n  .lp-nav-btns .lp-btn {\n    flex: 1;\n    justify-content: center;\n  }\n  .lp-topbar__title {\n    max-width: 38vw;\n  }\n}\n.lp-modal-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  background: rgba(15, 23, 42, 0.75);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  animation: lp-fade-in 0.25s ease;\n}\n@keyframes lp-fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.lp-modal {\n  position: relative;\n  background: #fff;\n  border-radius: 24px;\n  padding: 40px 36px 32px;\n  max-width: 460px;\n  width: 100%;\n  text-align: center;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.22), 0 8px 24px rgba(0, 0, 0, 0.12);\n  animation: lp-slide-up 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  overflow: hidden;\n}\n.lp-modal::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 5px;\n  background:\n    linear-gradient(\n      90deg,\n      #069b8f,\n      #4f46e5,\n      #d97706);\n  border-radius: 24px 24px 0 0;\n}\n@keyframes lp-slide-up {\n  from {\n    opacity: 0;\n    transform: translateY(30px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.lp-modal__confetti {\n  position: absolute;\n  top: 14px;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-around;\n  padding: 0 20px;\n  font-size: 18px;\n  pointer-events: none;\n}\n.lp-modal__confetti span {\n  animation: lp-float 3s ease-in-out infinite;\n  display: inline-block;\n}\n.lp-modal__confetti span:nth-child(1) {\n  animation-delay: 0s;\n}\n.lp-modal__confetti span:nth-child(2) {\n  animation-delay: 0.4s;\n}\n.lp-modal__confetti span:nth-child(3) {\n  animation-delay: 0.8s;\n}\n.lp-modal__confetti span:nth-child(4) {\n  animation-delay: 1.2s;\n}\n.lp-modal__confetti span:nth-child(5) {\n  animation-delay: 1.6s;\n}\n@keyframes lp-float {\n  0%, 100% {\n    transform: translateY(0) rotate(-5deg);\n    opacity: 0.7;\n  }\n  50% {\n    transform: translateY(-8px) rotate(5deg);\n    opacity: 1;\n  }\n}\n.lp-modal__icon-wrap {\n  position: relative;\n  display: inline-block;\n  margin: 16px auto 20px;\n  width: 80px;\n  height: 80px;\n}\n.lp-modal__icon-ring {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(6, 155, 143, 0.15),\n      rgba(79, 70, 229, 0.15));\n  border: 2px solid rgba(6, 155, 143, 0.2);\n  animation: lp-pulse-ring 2s ease-in-out infinite;\n}\n@keyframes lp-pulse-ring {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.08);\n    opacity: 0.7;\n  }\n}\n.lp-modal__icon {\n  position: absolute;\n  inset: 8px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f,\n      #047a6f);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 24px rgba(6, 155, 143, 0.35);\n}\n.lp-modal__icon i {\n  font-size: 28px;\n  color: #fff;\n}\n.lp-modal__title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 8px;\n  letter-spacing: -0.3px;\n}\n.lp-modal__sub {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0 0 24px;\n  line-height: 1.6;\n}\n.lp-modal__sub strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.lp-modal__quiz-info {\n  background:\n    linear-gradient(\n      135deg,\n      #eef2ff,\n      #e6f7f5);\n  border: 1px solid rgba(79, 70, 229, 0.15);\n  border-radius: 16px;\n  padding: 18px 20px;\n  margin-bottom: 24px;\n  text-align: left;\n}\n.lp-modal__quiz-badge {\n  display: inline-flex;\n  align-items: center;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  padding: 4px 12px;\n  border-radius: 99px;\n  background: rgba(79, 70, 229, 0.1);\n  color: #4f46e5;\n  margin-bottom: 10px;\n}\n.lp-modal__quiz-badge i {\n  font-size: 13px;\n}\n.lp-modal__quiz-name {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 12px;\n  line-height: 1.4;\n}\n.lp-modal__quiz-meta {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.lp-modal__quiz-meta span {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #64748b;\n}\n.lp-modal__quiz-meta span i {\n  font-size: 13px;\n  color: #069b8f;\n}\n.lp-modal__quiz-meta span strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.lp-modal__actions {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.lp-modal__btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  width: 100%;\n  padding: 13px 20px;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n}\n.lp-modal__btn i {\n  font-size: 16px;\n}\n.lp-modal__btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      #047a6f 100%);\n  color: #fff;\n  box-shadow: 0 4px 16px rgba(6, 155, 143, 0.3);\n}\n.lp-modal__btn--primary:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 24px rgba(6, 155, 143, 0.4);\n}\n.lp-modal__btn--secondary {\n  background: #f1f5f9;\n  color: #475569;\n  border: 1.5px solid #e2e8f0;\n}\n.lp-modal__btn--secondary:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.lp-modal__btn--ghost {\n  background: transparent;\n  color: #94a3b8;\n  border: 1.5px solid #e2e8f0;\n  font-size: 13px;\n  padding: 10px 20px;\n}\n.lp-modal__btn--ghost:hover {\n  background: #f8fafc;\n  color: #64748b;\n}\n.lp-modal__note {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 0;\n}\n.lp-modal__note i {\n  font-size: 13px;\n  color: #cbd5e1;\n}\n.lp-modal__note strong {\n  color: #64748b;\n  font-weight: 600;\n}\n@media (max-width: 480px) {\n  .lp-modal {\n    padding: 32px 20px 24px;\n    border-radius: 20px;\n  }\n  .lp-modal__title {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=lecture-formation.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: FormationsService }, { type: DomSanitizer }, { type: ProgressionService }], { embeddedFormationId: [{
    type: Input
  }], closePlayer: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LectureFormationComponent, { className: "LectureFormationComponent", filePath: "src/app/features/student/lecture-formation/lecture-formation.component.ts", lineNumber: 26 });
})();
export {
  LectureFormationComponent
};
//# sourceMappingURL=chunk-7A2UDDR4.js.map
