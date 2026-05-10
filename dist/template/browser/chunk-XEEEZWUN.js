import {
  FormationsService
} from "./chunk-BNTQZQX6.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-LFLGGSY5.js";
import "./chunk-VEAR4SGA.js";
import "./chunk-J5AS2QYG.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-GWJREDC5.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
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
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2JCHGHJA.js";
import "./chunk-4MWRP73S.js";

// src/app/features/courses/course-details-2/course-details-2.component.ts
function CourseDetails2Component_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function CourseDetails2Component_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function CourseDetails2Component_ng_container_2_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Priorit\xE9 ", ctx_r0.demande.priorite_display ?? ctx_r0.demande.priorite, " ");
  }
}
function CourseDetails2Component_ng_container_2_p_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.session.description);
  }
}
function CourseDetails2Component_ng_container_2_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275element(2, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "span", 28);
    \u0275\u0275text(5, "Lieu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.session.lieu);
  }
}
function CourseDetails2Component_ng_container_2_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 41);
    \u0275\u0275text(2, "Trait\xE9e le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r0.demande.date_validation, "dd/MM/yyyy \xE0 HH:mm"));
  }
}
function CourseDetails2Component_ng_container_2_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 41);
    \u0275\u0275text(2, "Mon motif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.demande.motif_demande);
  }
}
function CourseDetails2Component_ng_container_2_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 41);
    \u0275\u0275text(2, "Mes objectifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.demande.objectifs_personnels);
  }
}
function CourseDetails2Component_ng_container_2_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 41);
    \u0275\u0275text(2, "Mon commentaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.demande.commentaire_employe);
  }
}
function CourseDetails2Component_ng_container_2_div_85_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 87);
    \u0275\u0275element(1, "i", 88);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.demande.commentaire_rh, " ");
  }
}
function CourseDetails2Component_ng_container_2_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 37)(2, "h5", 38);
    \u0275\u0275element(3, "i", 84);
    \u0275\u0275text(4, "Motif de refus ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 85);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, CourseDetails2Component_ng_container_2_div_85_p_7_Template, 3, 1, "p", 86);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.demande.motif_refus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.demande.commentaire_rh);
  }
}
function CourseDetails2Component_ng_container_2_div_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48);
    \u0275\u0275element(2, "i", 89);
    \u0275\u0275elementStart(3, "div")(4, "small", 49);
    \u0275\u0275text(5, "Lieu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.session.lieu);
  }
}
function CourseDetails2Component_ng_container_2_div_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48);
    \u0275\u0275element(2, "i", 90);
    \u0275\u0275elementStart(3, "div")(4, "small", 49);
    \u0275\u0275text(5, "Limite d'inscription");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 1, ctx_r0.session.date_limite_inscription, "dd/MM/yyyy"));
  }
}
function CourseDetails2Component_ng_container_2_div_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "h5", 38);
    \u0275\u0275element(3, "i", 91);
    \u0275\u0275text(4, "Mat\xE9riel requis ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 92);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.session.materiel_requis);
  }
}
function CourseDetails2Component_ng_container_2_div_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 37)(2, "h5", 38);
    \u0275\u0275element(3, "i", 94);
    \u0275\u0275text(4, "Instructions d'acc\xE8s ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 92);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.session.instructions_acces);
  }
}
function CourseDetails2Component_ng_container_2_li_166_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 95);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Code session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.session.code_session);
  }
}
function CourseDetails2Component_ng_container_2_li_181_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "img", 96);
    \u0275\u0275text(2, " Formation en salle ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetails2Component_ng_container_2_li_182_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "img", 96);
    \u0275\u0275text(2, " Acc\xE8s en ligne (visio) ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetails2Component_ng_container_2_li_183_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "img", 96);
    \u0275\u0275text(2, " Pr\xE9sentiel + Distanciel ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetails2Component_ng_container_2_li_187_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "img", 76);
    \u0275\u0275text(2, " \xC9valuation incluse ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetails2Component_ng_container_2_li_188_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "img", 77);
    \u0275\u0275text(2, " Certificat d\xE9livr\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetails2Component_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 7);
    \u0275\u0275element(2, "div", 8)(3, "div", 9);
    \u0275\u0275elementStart(4, "div", 10)(5, "div", 11)(6, "div", 12)(7, "nav", 13)(8, "button", 14);
    \u0275\u0275listener("click", function CourseDetails2Component_ng_container_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275element(9, "i", 15);
    \u0275\u0275text(10, "Mes sessions ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 16);
    \u0275\u0275text(12, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 17);
    \u0275\u0275text(14, "D\xE9tail session");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 18)(16, "span", 19);
    \u0275\u0275element(17, "i");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 20);
    \u0275\u0275element(20, "i");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, CourseDetails2Component_ng_container_2_span_22_Template, 3, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h1", 22);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, CourseDetails2Component_ng_container_2_p_25_Template, 2, 1, "p", 23);
    \u0275\u0275elementStart(26, "div", 24)(27, "div", 25)(28, "div", 26);
    \u0275\u0275element(29, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div")(31, "span", 28);
    \u0275\u0275text(32, "D\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 29);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 25)(37, "div", 26);
    \u0275\u0275element(38, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div")(40, "span", 28);
    \u0275\u0275text(41, "Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 29);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 25)(46, "div", 26);
    \u0275\u0275element(47, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div")(49, "span", 28);
    \u0275\u0275text(50, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 29);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(53, CourseDetails2Component_ng_container_2_div_53_Template, 8, 1, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "div", 33);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "section", 34)(56, "div", 35)(57, "div", 11)(58, "div", 12)(59, "div", 36)(60, "div", 37)(61, "h5", 38);
    \u0275\u0275element(62, "i");
    \u0275\u0275text(63, "Statut de ma demande ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 39)(65, "div", 40)(66, "span", 41);
    \u0275\u0275text(67, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 42);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 40)(71, "span", 41);
    \u0275\u0275text(72, "Priorit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span");
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 40)(76, "span", 41);
    \u0275\u0275text(77, "Soumise le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span");
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(81, CourseDetails2Component_ng_container_2_div_81_Template, 6, 4, "div", 43)(82, CourseDetails2Component_ng_container_2_div_82_Template, 5, 1, "div", 43)(83, CourseDetails2Component_ng_container_2_div_83_Template, 5, 1, "div", 43)(84, CourseDetails2Component_ng_container_2_div_84_Template, 5, 1, "div", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(85, CourseDetails2Component_ng_container_2_div_85_Template, 8, 2, "div", 44);
    \u0275\u0275elementStart(86, "div", 36)(87, "div", 37)(88, "h5", 38);
    \u0275\u0275element(89, "i", 45);
    \u0275\u0275text(90, "Informations de la session ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 46)(92, "div", 47)(93, "div", 48);
    \u0275\u0275element(94, "i");
    \u0275\u0275elementStart(95, "div")(96, "small", 49);
    \u0275\u0275text(97, "Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "strong");
    \u0275\u0275text(99);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(100, "div", 47)(101, "div", 48);
    \u0275\u0275element(102, "i", 50);
    \u0275\u0275elementStart(103, "div")(104, "small", 49);
    \u0275\u0275text(105, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "strong");
    \u0275\u0275text(107);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(108, CourseDetails2Component_ng_container_2_div_108_Template, 8, 1, "div", 51);
    \u0275\u0275elementStart(109, "div", 47)(110, "div", 48);
    \u0275\u0275element(111, "i", 52);
    \u0275\u0275elementStart(112, "div")(113, "small", 49);
    \u0275\u0275text(114, "Capacit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "strong");
    \u0275\u0275text(116);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(117, CourseDetails2Component_ng_container_2_div_117_Template, 9, 4, "div", 51);
    \u0275\u0275elementStart(118, "div", 47)(119, "div", 48);
    \u0275\u0275element(120, "i", 53);
    \u0275\u0275elementStart(121, "div")(122, "small", 49);
    \u0275\u0275text(123, "Certificat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "strong");
    \u0275\u0275text(125);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(126, CourseDetails2Component_ng_container_2_div_126_Template, 7, 1, "div", 54)(127, CourseDetails2Component_ng_container_2_div_127_Template, 7, 1, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "div", 56)(129, "div", 57)(130, "div", 58)(131, "div", 59);
    \u0275\u0275element(132, "img", 60);
    \u0275\u0275elementStart(133, "div", 61)(134, "span", 62);
    \u0275\u0275text(135);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(136, "div", 63)(137, "h5", 64);
    \u0275\u0275text(138, "R\xE9sum\xE9 de la session");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "ul", 65)(140, "li");
    \u0275\u0275element(141, "i", 66);
    \u0275\u0275elementStart(142, "span");
    \u0275\u0275text(143, "D\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "strong");
    \u0275\u0275text(145);
    \u0275\u0275pipe(146, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "li");
    \u0275\u0275element(148, "i", 67);
    \u0275\u0275elementStart(149, "span");
    \u0275\u0275text(150, "Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "strong");
    \u0275\u0275text(152);
    \u0275\u0275pipe(153, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(154, "li");
    \u0275\u0275element(155, "i", 68);
    \u0275\u0275elementStart(156, "span");
    \u0275\u0275text(157, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "strong");
    \u0275\u0275text(159);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(160, "li");
    \u0275\u0275element(161, "i", 69);
    \u0275\u0275elementStart(162, "span");
    \u0275\u0275text(163, "Capacit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "strong");
    \u0275\u0275text(165);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(166, CourseDetails2Component_ng_container_2_li_166_Template, 6, 1, "li", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "div", 70)(168, "button", 71);
    \u0275\u0275listener("click", function CourseDetails2Component_ng_container_2_Template_button_click_168_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.commencerFormation());
    });
    \u0275\u0275element(169, "i", 72);
    \u0275\u0275text(170);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(171, "div", 73)(172, "h6", 74);
    \u0275\u0275text(173, "Cette session inclut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(174, "ul", 75)(175, "li");
    \u0275\u0275element(176, "img", 76);
    \u0275\u0275text(177, " Acc\xE8s \xE0 la session ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "li");
    \u0275\u0275element(179, "img", 77);
    \u0275\u0275text(180, " Acc\xE8s entreprise ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(181, CourseDetails2Component_ng_container_2_li_181_Template, 3, 0, "li", 2)(182, CourseDetails2Component_ng_container_2_li_182_Template, 3, 0, "li", 2)(183, CourseDetails2Component_ng_container_2_li_183_Template, 3, 0, "li", 2);
    \u0275\u0275elementStart(184, "li");
    \u0275\u0275element(185, "img", 78);
    \u0275\u0275text(186, " Encadrement formateur ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(187, CourseDetails2Component_ng_container_2_li_187_Template, 3, 0, "li", 2)(188, CourseDetails2Component_ng_container_2_li_188_Template, 3, 0, "li", 2);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-image", ctx_r0.session.image_couverture ? "url(" + ctx_r0.session.image_couverture + ")" : "none");
    \u0275\u0275advance(15);
    \u0275\u0275classMap(\u0275\u0275interpolate1("ti ", ctx_r0.getTypeIcon(ctx_r0.session.type), " me-1"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getTypeLabel(ctx_r0.session.type), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getStatutClass(ctx_r0.demande.statut));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("", ctx_r0.getStatutIcon(ctx_r0.demande.statut), " me-1"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.demande.statut_display ?? ctx_r0.demande.statut, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.demande.priorite);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.session.titre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.session.description);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 70, ctx_r0.session.date_debut, "dd/MM/yyyy"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 73, ctx_r0.session.date_fin, "dd/MM/yyyy"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r0.getDureeJours(), " jour(s)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.session.lieu);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("cd-card--validee", ctx_r0.demande.statut === "validee")("cd-card--refus", ctx_r0.demande.statut === "refusee")("cd-card--attente", ctx_r0.demande.statut === "en_attente");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("", ctx_r0.getStatutIcon(ctx_r0.demande.statut), " me-2"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ctx_r0.getStatutClass(ctx_r0.demande.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.demande.statut_display ?? ctx_r0.demande.statut, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.demande.priorite_display ?? ctx_r0.demande.priorite);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(80, 76, ctx_r0.demande.created_at, "dd/MM/yyyy \xE0 HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.demande.date_validation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.demande.motif_demande);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.demande.objectifs_personnels);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.demande.commentaire_employe);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.demande.statut === "refusee" && ctx_r0.demande.motif_refus);
    \u0275\u0275advance(9);
    \u0275\u0275classMap(\u0275\u0275interpolate1("ti ", ctx_r0.getTypeIcon(ctx_r0.session.type), " text-primary cd-info-item__icon"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getTypeLabel(ctx_r0.session.type));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r0.getDureeJours(), " jour(s)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.session.lieu);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r0.session.capacite_max, " participants ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.session.date_limite_inscription);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.session.certificat_delivre ? "D\xE9livr\xE9" : "Non d\xE9livr\xE9");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.session.materiel_requis);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.demande.statut === "validee" && ctx_r0.session.instructions_acces && ctx_r0.isSessionDistanciel());
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r0.session.image_couverture || "assets/img/course/course-01.jpg", \u0275\u0275sanitizeUrl)("alt", ctx_r0.session.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getTypeLabel(ctx_r0.session.type));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(146, 79, ctx_r0.session.date_debut, "dd/MM/yyyy"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(153, 82, ctx_r0.session.date_fin, "dd/MM/yyyy"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r0.getDureeJours(), " jour(s)");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.session.capacite_max, " places");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.session.code_session);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-success", ctx_r0.canCommencer())("btn-secondary", !ctx_r0.canCommencer());
    \u0275\u0275property("disabled", !ctx_r0.canCommencer());
    \u0275\u0275advance();
    \u0275\u0275classProp("ti-player-play", ctx_r0.canCommencer())("ti-lock", !ctx_r0.canCommencer());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getLabelBouton(), " ");
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r0.isSessionPresentiel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSessionDistanciel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSessionHybride());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.session.evaluation_requise);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.session.certificat_delivre);
  }
}
function CourseDetails2Component_ng_container_3_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Retour au catalogue");
    \u0275\u0275elementContainerEnd();
  }
}
function CourseDetails2Component_ng_container_3_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Retour au parcours");
    \u0275\u0275elementContainerEnd();
  }
}
function CourseDetails2Component_ng_container_3_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Mes formations");
    \u0275\u0275elementContainerEnd();
  }
}
function CourseDetails2Component_ng_container_3_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 124);
    \u0275\u0275element(1, "i", 125);
    \u0275\u0275text(2, " Certifiante ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetails2Component_ng_container_3_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 126);
    \u0275\u0275element(1, "i", 127);
    \u0275\u0275text(2, " Habilitante ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetails2Component_ng_container_3_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 128);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-color", (ctx_r0.formation.categorie == null ? null : ctx_r0.formation.categorie.couleur) || "#6b7280");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formation.categorie == null ? null : ctx_r0.formation.categorie.nom, " ");
  }
}
function CourseDetails2Component_ng_container_3_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "h5", 38);
    \u0275\u0275element(3, "i", 129);
    \u0275\u0275text(4, "Objectifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 92);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formation.objectifs_pedagogiques);
  }
}
function CourseDetails2Component_ng_container_3_div_44_li_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 133);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comp_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", comp_r4, " ");
  }
}
function CourseDetails2Component_ng_container_3_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "h5", 38);
    \u0275\u0275element(3, "i", 130);
    \u0275\u0275text(4, "Comp\xE9tences vis\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ul", 131);
    \u0275\u0275template(6, CourseDetails2Component_ng_container_3_div_44_li_6_Template, 3, 1, "li", 132);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.formation.competences_acquises);
  }
}
function CourseDetails2Component_ng_container_3_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "h5", 38);
    \u0275\u0275element(3, "i", 91);
    \u0275\u0275text(4, "Pr\xE9requis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 92);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formation.prerequis);
  }
}
function CourseDetails2Component_ng_container_3_div_55_li_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 140)(1, "span");
    \u0275\u0275element(2, "img", 76);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 141);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(section_r5.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r5.duree_estimee);
  }
}
function CourseDetails2Component_ng_container_3_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134)(1, "h2", 135)(2, "button", 136);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 137)(5, "div", 138)(6, "ul");
    \u0275\u0275template(7, CourseDetails2Component_ng_container_3_div_55_li_7_Template, 6, 2, "li", 139);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const module_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-bs-target", "#module" + i_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(module_r6.titre);
    \u0275\u0275advance();
    \u0275\u0275property("id", "module" + i_r7);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", module_r6.sections);
  }
}
function CourseDetails2Component_ng_container_3_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "h5", 38);
    \u0275\u0275element(3, "i", 142);
    \u0275\u0275text(4, "Population cible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 143);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formation.public_cible);
  }
}
function CourseDetails2Component_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 7);
    \u0275\u0275element(2, "div", 8)(3, "div", 9);
    \u0275\u0275elementStart(4, "div", 10)(5, "div", 11)(6, "div", 12)(7, "nav", 13)(8, "button", 14);
    \u0275\u0275listener("click", function CourseDetails2Component_ng_container_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275element(9, "i", 15);
    \u0275\u0275template(10, CourseDetails2Component_ng_container_3_ng_container_10_Template, 2, 0, "ng-container", 2)(11, CourseDetails2Component_ng_container_3_ng_container_11_Template, 2, 0, "ng-container", 2)(12, CourseDetails2Component_ng_container_3_ng_container_12_Template, 2, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275text(14, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 17);
    \u0275\u0275text(16, "D\xE9tail formation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 97);
    \u0275\u0275template(18, CourseDetails2Component_ng_container_3_span_18_Template, 3, 0, "span", 98)(19, CourseDetails2Component_ng_container_3_span_19_Template, 3, 0, "span", 99);
    \u0275\u0275elementStart(20, "span", 79);
    \u0275\u0275element(21, "i", 100);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 19);
    \u0275\u0275element(24, "i", 101);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, CourseDetails2Component_ng_container_3_span_26_Template, 2, 3, "span", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "h1", 22);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 81);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "div", 103);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "section", 34)(33, "div", 35)(34, "div", 11)(35, "div", 12)(36, "div", 36)(37, "div", 37)(38, "h5", 38);
    \u0275\u0275element(39, "i", 104);
    \u0275\u0275text(40, "Pr\xE9sentation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 92);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(43, CourseDetails2Component_ng_container_3_div_43_Template, 7, 1, "div", 54)(44, CourseDetails2Component_ng_container_3_div_44_Template, 7, 1, "div", 54)(45, CourseDetails2Component_ng_container_3_div_45_Template, 7, 1, "div", 54);
    \u0275\u0275elementStart(46, "div", 36)(47, "div", 37)(48, "div", 105)(49, "h5", 106);
    \u0275\u0275element(50, "i", 107);
    \u0275\u0275text(51, "Contenu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 108);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 109);
    \u0275\u0275template(55, CourseDetails2Component_ng_container_3_div_55_Template, 8, 4, "div", 110);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(56, CourseDetails2Component_ng_container_3_div_56_Template, 7, 1, "div", 54);
    \u0275\u0275elementStart(57, "div", 111)(58, "div", 37)(59, "h5", 38);
    \u0275\u0275element(60, "i", 112);
    \u0275\u0275text(61, "\xC0 propos du formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 113);
    \u0275\u0275element(63, "img", 114);
    \u0275\u0275elementStart(64, "div")(65, "h5", 115);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "p", 116);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "p", 117);
    \u0275\u0275element(70, "i", 118);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(72, "div", 56)(73, "div", 57)(74, "div", 58)(75, "div", 59);
    \u0275\u0275element(76, "img", 60);
    \u0275\u0275elementStart(77, "div", 61)(78, "div", 119);
    \u0275\u0275element(79, "i", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 62);
    \u0275\u0275text(81, "Aper\xE7u de la formation");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(82, "div", 63)(83, "h5", 64);
    \u0275\u0275text(84, "R\xE9sum\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "ul", 65)(86, "li");
    \u0275\u0275element(87, "i", 121);
    \u0275\u0275elementStart(88, "span");
    \u0275\u0275text(89, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "strong");
    \u0275\u0275text(91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "li");
    \u0275\u0275element(93, "i", 122);
    \u0275\u0275elementStart(94, "span");
    \u0275\u0275text(95, "Langue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "strong");
    \u0275\u0275text(97);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "li");
    \u0275\u0275element(99, "i", 123);
    \u0275\u0275elementStart(100, "span");
    \u0275\u0275text(101, "Participants max");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "strong");
    \u0275\u0275text(103);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(104, "div", 70)(105, "button", 71);
    \u0275\u0275listener("click", function CourseDetails2Component_ng_container_3_Template_button_click_105_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.commencerFormation());
    });
    \u0275\u0275element(106, "i", 72);
    \u0275\u0275text(107);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(108, "div", 73)(109, "h6", 74);
    \u0275\u0275text(110, "Cette formation inclut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "ul", 75)(112, "li");
    \u0275\u0275element(113, "img", 76);
    \u0275\u0275text(114, " Modules structur\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "li");
    \u0275\u0275element(116, "img", 77);
    \u0275\u0275text(117, " Acc\xE8s entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "li");
    \u0275\u0275element(119, "img", 96);
    \u0275\u0275text(120, " Multi-support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "li");
    \u0275\u0275element(122, "img", 78);
    \u0275\u0275text(123);
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-image", ctx_r0.formation.image_couverture ? "url(" + ctx_r0.formation.image_couverture + ")" : "none");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.catalogueId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.parcoursId && !ctx_r0.catalogueId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.catalogueId && !ctx_r0.parcoursId);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.formation.est_certifiante);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.formation.est_certifiante);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formation.niveau_display, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formation.type_display, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.categorie);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formation.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formation.short_description);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.formation.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.objectifs_pedagogiques);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.competences_acquises == null ? null : ctx_r0.formation.competences_acquises.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.prerequis);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r0.formation.nombre_modules, " modules");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.formation.modules);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formation.public_cible);
    \u0275\u0275advance(7);
    \u0275\u0275property("src", ctx_r0.formation.image_couverture || "assets/img/avatar-default.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formation.formateur_nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formation.formateur == null ? null : ctx_r0.formation.formateur.fonction);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formation.formateur_email);
    \u0275\u0275advance(5);
    \u0275\u0275property("alt", \u0275\u0275interpolate(ctx_r0.formation.titre))("src", ctx_r0.formation.image_couverture || "assets/img/course/video-bg.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1("", ctx_r0.formation.duree_totale, " heures");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formation.langue === "fr" ? "Fran\xE7ais" : ctx_r0.formation.langue);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formation.nb_max_participants);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-success", ctx_r0.canCommencer())("btn-secondary", !ctx_r0.canCommencer());
    \u0275\u0275property("disabled", !ctx_r0.canCommencer());
    \u0275\u0275advance();
    \u0275\u0275classProp("ti-player-play", ctx_r0.canCommencer())("ti-lock", !ctx_r0.canCommencer());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getLabelBouton(), " ");
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate1(" Certification : ", ctx_r0.formation.est_certifiante ? "Incluse" : "Non incluse", " ");
  }
}
var CourseDetails2Component = class _CourseDetails2Component {
  route;
  router;
  formationsService;
  formation = null;
  mode = "formation";
  demande = null;
  session = null;
  catalogueId = null;
  parcoursId = null;
  // ✅ fromPage : source de navigation
  // 'demandes'  → /student/mes-cours
  // 'catalogue' → /student/catalogue/:id ou /student/students-catalogue
  // 'parcours'  → /student/students-parcours
  // 'session'   → /student/students-session
  fromPage = null;
  loading = true;
  error = "";
  constructor(route, router, formationsService) {
    this.route = route;
    this.router = router;
    this.formationsService = formationsService;
  }
  ngOnInit() {
    const state = history.state;
    this.fromPage = state?.fromPage ?? null;
    if (!this.fromPage) {
      if (state?.fromCatalogue)
        this.fromPage = "catalogue";
      else if (state?.fromParcours)
        this.fromPage = "parcours";
    }
    this.catalogueId = state?.catalogueId ?? null;
    this.parcoursId = state?.parcoursId ?? null;
    if (state?.mode === "session" && state?.demande) {
      this.mode = "session";
      this.demande = state.demande;
      this.fromPage = this.fromPage ?? "session";
      this.session = state.demande.session_formation ?? state.demande.sessionFormation;
      this.loading = false;
      return;
    }
    if (state?.demande) {
      this.demande = state.demande;
    }
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (id && id !== 0) {
      this.loadFormationDetails(id);
    } else {
      this.error = "Formation introuvable";
      this.loading = false;
    }
  }
  loadFormationDetails(id) {
    this.loading = true;
    this.formationsService.getFormationById(id).subscribe({
      next: (res) => {
        this.formation = res?.data || res?.formation || res;
        if (this.formation && typeof this.formation.competences_acquises === "string") {
          try {
            const raw = this.formation.competences_acquises.replace(/\\\"/g, '"').replace(/^"|"$/g, "");
            this.formation.competences_acquises = JSON.parse(raw) ?? [];
          } catch {
            this.formation.competences_acquises = [];
          }
        }
        this.loading = false;
      },
      error: () => {
        this.error = "Formation introuvable";
        this.loading = false;
      }
    });
  }
  // ════════════════════════════════════════════════════════════
  // BOUTON COMMENCER
  // ════════════════════════════════════════════════════════════
  canCommencer() {
    if (this.fromPage === "catalogue")
      return true;
    if (this.fromPage === "parcours")
      return true;
    if (this.mode === "session") {
      if (this.demande?.statut !== "validee")
        return false;
      const isEnLigne = this.session?.type === "distanciel" || this.session?.type === "hybride";
      const dateDebut = this.session?.date_debut ? new Date(this.session.date_debut) : null;
      const dateOk = dateDebut ? dateDebut <= /* @__PURE__ */ new Date() : false;
      return isEnLigne && dateOk;
    }
    return this.demande?.statut === "validee";
  }
  getLabelBouton() {
    if (this.canCommencer())
      return "Commencer la formation";
    if (this.mode === "session") {
      if (this.isSessionPresentiel())
        return "Formation en pr\xE9sentiel";
      if (this.demande?.statut === "validee")
        return "Session pas encore ouverte";
      if (this.demande?.statut === "en_attente")
        return "En attente de validation";
      if (this.demande?.statut === "refusee")
        return "Demande refus\xE9e";
      if (this.demande?.statut === "annulee")
        return "Demande annul\xE9e";
    }
    if (this.demande?.statut === "en_attente")
      return "En attente de validation";
    if (this.demande?.statut === "refusee")
      return "Demande refus\xE9e";
    if (this.demande?.statut === "annulee")
      return "Demande annul\xE9e";
    return "Acc\xE8s non disponible";
  }
  commencerFormation() {
    if (!this.canCommencer())
      return;
    const id = this.formation?.id ?? Number(this.route.snapshot.paramMap.get("id"));
    if (id) {
      this.router.navigate(["/student/lecture-formation", id]);
    }
  }
  // ════════════════════════════════════════════════════════════
  // RETOUR — switch sur fromPage
  // ════════════════════════════════════════════════════════════
  goBack() {
    switch (this.fromPage) {
      case "demandes":
        this.router.navigate(["/student/mes-cours"]);
        break;
      case "catalogue":
        if (this.catalogueId) {
          this.router.navigate(["/student/catalogue", this.catalogueId]);
        } else {
          this.router.navigate(["/student/students-catalogue"]);
        }
        break;
      case "parcours":
        if (this.parcoursId) {
          this.router.navigate(["/student/parcours-assigne", this.parcoursId]);
        } else {
          this.router.navigate(["/student/students-parcours"]);
        }
        break;
      case "session":
        this.router.navigate(["/student/students-session"]);
        break;
      default:
        this.router.navigate(["/student/mes-cours"]);
        break;
    }
  }
  // ── Helpers ──────────────────────────────────────────────
  getStatutClass(statut) {
    return {
      en_attente: "badge-attente",
      validee: "badge-validee",
      refusee: "badge-refusee",
      annulee: "badge-annulee"
    }[statut] ?? "badge-secondary";
  }
  getStatutIcon(statut) {
    return {
      en_attente: "ti ti-clock",
      validee: "ti ti-circle-check",
      refusee: "ti ti-circle-x",
      annulee: "ti ti-ban"
    }[statut] ?? "ti ti-help";
  }
  getTypeIcon(type) {
    return {
      presentiel: "ti-building",
      distanciel: "ti-wifi",
      hybride: "ti-layout-distribute-horizontal"
    }[type] ?? "ti-calendar";
  }
  getTypeLabel(type) {
    return {
      presentiel: "Pr\xE9sentiel",
      distanciel: "Distanciel",
      hybride: "Hybride"
    }[type] ?? type;
  }
  getDureeJours() {
    if (!this.session?.date_debut || !this.session?.date_fin)
      return 0;
    const ms = new Date(this.session.date_fin).getTime() - new Date(this.session.date_debut).getTime();
    return Math.ceil(ms / (1e3 * 60 * 60 * 24));
  }
  getPlacesRestantes() {
    return this.session?.places_restantes ?? this.session?.capacite_max ?? 0;
  }
  isSessionDistanciel() {
    return this.session?.type === "distanciel";
  }
  isSessionPresentiel() {
    return this.session?.type === "presentiel";
  }
  isSessionHybride() {
    return this.session?.type === "hybride";
  }
  canSubscribe() {
    return !!this.formation?.inscription_ouverte;
  }
  static \u0275fac = function CourseDetails2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseDetails2Component)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormationsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseDetails2Component, selectors: [["app-course-details-2"]], decls: 4, vars: 4, consts: [["class", "cd-loader", 4, "ngIf"], ["class", "cd-error", 4, "ngIf"], [4, "ngIf"], [1, "cd-loader"], [1, "cd-loader__spinner"], [1, "cd-error"], [1, "ti", "ti-alert-circle", "cd-error__icon"], [1, "cd-hero"], [1, "cd-hero__bg"], [1, "cd-hero__overlay"], [1, "container", "position-relative", 2, "z-index", "2"], [1, "row"], [1, "col-lg-8"], [1, "cd-breadcrumb", "mb-3"], [1, "cd-breadcrumb__back", 3, "click"], [1, "ti", "ti-arrow-left", "me-1"], [1, "cd-breadcrumb__sep"], [1, "cd-breadcrumb__current"], [1, "cd-hero__badges", "mb-3"], [1, "cd-badge", "cd-badge--type"], [1, "cd-badge", 3, "ngClass"], ["class", "cd-badge cd-badge--niveau", 4, "ngIf"], [1, "cd-hero__title"], ["class", "cd-hero__subtitle", 4, "ngIf"], [1, "cd-hero__info-grid", "mt-4"], [1, "cd-hero__info-item"], [1, "cd-hero__info-icon"], [1, "ti", "ti-calendar"], [1, "cd-hero__info-label"], [1, "cd-hero__info-value"], [1, "ti", "ti-calendar-check"], [1, "ti", "ti-clock"], ["class", "cd-hero__info-item", 4, "ngIf"], [1, "cd-hero__divider", "mt-4"], [1, "course-details"], [1, "container"], [1, "card", "cd-card", "mb-4"], [1, "card-body"], [1, "subs-title", "mb-3"], [1, "cd-demande-detail"], [1, "cd-demande-row"], [1, "cd-demande-label"], [1, "badge", 3, "ngClass"], ["class", "cd-demande-row", 4, "ngIf"], ["class", "card cd-card cd-card--refus mb-4", 4, "ngIf"], [1, "ti", "ti-info-circle", "me-2", "text-primary"], [1, "row", "g-3"], [1, "col-md-6"], [1, "cd-info-item"], [1, "text-muted", "d-block"], [1, "ti", "ti-clock", "text-warning", "cd-info-item__icon"], ["class", "col-md-6", 4, "ngIf"], [1, "ti", "ti-users", "text-info", "cd-info-item__icon"], [1, "ti", "ti-certificate", "text-success", "cd-info-item__icon"], ["class", "card cd-card mb-4", 4, "ngIf"], ["class", "card cd-card cd-card--validee mb-4", 4, "ngIf"], [1, "col-lg-4"], [1, "cd-sidebar-wrapper"], [1, "cd-sidebar-float"], [1, "cd-video-block"], [1, "cd-video-block__thumb", 3, "src", "alt"], [1, "cd-video-block__overlay"], [1, "cd-video-block__label"], [1, "cd-sidebar-float__body"], [1, "cd-sidebar-float__title"], [1, "formation-summary-list"], [1, "ti", "ti-calendar", "text-primary"], [1, "ti", "ti-calendar-check", "text-success"], [1, "ti", "ti-clock", "text-warning"], [1, "ti", "ti-users", "text-info"], [1, "mt-3"], [1, "btn", "w-100", "fw-semibold", 3, "click", "disabled"], [1, "ti", "me-2"], [1, "cd-sidebar-includes"], [1, "cd-sidebar-includes__title"], [1, "includes-list"], ["src", "./assets/img/icons/play.svg", 1, "me-2"], ["src", "./assets/img/icons/key.svg", 1, "me-2"], ["src", "./assets/img/icons/teacher.svg", 1, "me-2"], [1, "cd-badge", "cd-badge--niveau"], [1, "ti", "ti-flag", "me-1"], [1, "cd-hero__subtitle"], [1, "ti", "ti-map-pin"], [1, "card", "cd-card", "cd-card--refus", "mb-4"], [1, "ti", "ti-circle-x", "me-2", "text-danger"], [1, "text-muted", "mb-2"], ["class", "text-muted small fst-italic", 4, "ngIf"], [1, "text-muted", "small", "fst-italic"], [1, "ti", "ti-message", "me-1"], [1, "ti", "ti-map-pin", "text-danger", "cd-info-item__icon"], [1, "ti", "ti-calendar-x", "text-danger", "cd-info-item__icon"], [1, "ti", "ti-tool", "me-2", "text-warning"], [1, "text-muted", 2, "line-height", "1.7"], [1, "card", "cd-card", "cd-card--validee", "mb-4"], [1, "ti", "ti-link", "me-2", "text-primary"], [1, "ti", "ti-hash", "text-secondary"], ["src", "./assets/img/icons/monitor-mobbile.svg", 1, "me-2"], [1, "cd-hero__badges"], ["class", "cd-badge cd-badge--certifiant", 4, "ngIf"], ["class", "cd-badge cd-badge--habilitant", 4, "ngIf"], [1, "ti", "ti-chart-bar"], [1, "ti", "ti-device-laptop"], ["class", "cd-badge cd-badge--categorie", 3, "background-color", 4, "ngIf"], [1, "cd-hero__divider"], [1, "ti", "ti-file-description", "me-2", "text-primary"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "subs-title", "mb-0"], [1, "ti", "ti-layout-list", "me-2", "text-primary"], [1, "badge", "bg-primary", "rounded-pill"], [1, "accordion", "accordion-customicon1"], ["class", "accordion-item", 4, "ngFor", "ngForOf"], [1, "card", "cd-card"], [1, "ti", "ti-user-circle", "me-2", "text-primary"], [1, "d-flex", "align-items-center", "gap-3"], [1, "rounded-circle", 2, "width", "60px", "height", "60px", "object-fit", "cover", 3, "src"], [1, "fs-18", "fw-semibold", "mb-1"], [1, "mb-0", "text-muted", "small"], [1, "mb-0", "fs-13", "text-muted"], [1, "ti", "ti-mail", "me-1"], [1, "cd-video-block__play-btn"], [1, "ti", "ti-player-play-filled"], [1, "ti", "ti-clock", "text-primary"], [1, "ti", "ti-language", "text-success"], [1, "ti", "ti-users", "text-secondary"], [1, "cd-badge", "cd-badge--certifiant"], [1, "ti", "ti-certificate"], [1, "cd-badge", "cd-badge--habilitant"], [1, "ti", "ti-shield-check"], [1, "cd-badge", "cd-badge--categorie"], [1, "ti", "ti-target", "me-2", "text-primary"], [1, "ti", "ti-star", "me-2", "text-warning"], [1, "competences-list"], [4, "ngFor", "ngForOf"], [1, "ti", "ti-circle-check", "text-success", "me-2"], [1, "accordion-item"], [1, "accordion-header"], ["data-bs-toggle", "collapse", 1, "accordion-button", "collapsed"], [1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body", "p-0"], ["class", "p-3 d-flex justify-content-between align-items-center", 4, "ngFor", "ngForOf"], [1, "p-3", "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted", "small"], [1, "ti", "ti-users", "me-2", "text-info"], [1, "text-muted"]], template: function CourseDetails2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CourseDetails2Component_div_0_Template, 4, 0, "div", 0)(1, CourseDetails2Component_div_1_Template, 4, 1, "div", 1)(2, CourseDetails2Component_ng_container_2_Template, 189, 85, "ng-container", 2)(3, CourseDetails2Component_ng_container_3_Template, 124, 40, "ng-container", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.mode === "session" && ctx.session);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.mode === "formation" && ctx.formation);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe], styles: ["\n\n.cd-loader[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 100px 0;\n  color: #9ca3af;\n}\n.cd-loader__spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  border: 3px solid #e5e7eb;\n  border-top-color: #069b8f;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n.cd-loader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 14px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cd-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px 20px;\n  gap: 12px;\n  color: #dc2626;\n  text-align: center;\n}\n.cd-error__icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  opacity: 0.7;\n}\n.cd-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #4b5563;\n  margin: 0;\n}\n.cd-hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 60px 0 160px;\n  overflow: visible;\n  background: #0f172a;\n}\n.cd-hero__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-size: cover;\n  background-position: center;\n  filter: blur(2px) brightness(0.35);\n  transform: scale(1.05);\n}\n.cd-hero__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(6, 155, 143, 0.72) 0%,\n      rgba(15, 23, 42, 0.92) 65%);\n}\n.cd-hero__badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 18px;\n}\n.cd-hero__title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1.2;\n  letter-spacing: -0.5px;\n  margin-bottom: 12px;\n  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);\n}\n.cd-hero__subtitle[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.78);\n  line-height: 1.65;\n  margin-bottom: 0;\n  max-width: 560px;\n}\n.cd-hero__divider[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 3px;\n  background: #069b8f;\n  border-radius: 2px;\n  margin-top: 24px;\n  opacity: 0.85;\n}\n.cd-hero__quick-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-bottom: 28px;\n}\n.cd-hero__quick-stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 14px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.9);\n}\n.cd-hero__quick-stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: rgba(255, 255, 255, 0.65);\n}\n.cd-hero__instructor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 28px;\n}\n.cd-hero__instructor-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  flex-shrink: 0;\n}\n.cd-hero__instructor-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.cd-hero__instructor-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.5);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 2px;\n}\n.cd-hero__instructor-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 2px;\n}\n.cd-hero__instructor-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.6);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.cd-hero__instructor-sep[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.cd-hero__info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n.cd-hero__info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 8px;\n  padding: 12px 14px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.cd-hero__info-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  color: #fff;\n  font-size: 15px;\n}\n.cd-hero__info-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 2px;\n}\n.cd-hero__info-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.9);\n}\n.cd-hero__info-value--success[_ngcontent-%COMP%] {\n  color: #4ade80 !important;\n}\n.cd-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 12px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.2px;\n}\n.cd-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.cd-badge--certifiant[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.2);\n  color: #4ade80;\n  border: 1px solid rgba(22, 163, 74, 0.3);\n}\n.cd-badge--habilitant[_ngcontent-%COMP%] {\n  background: rgba(6, 155, 143, 0.2);\n  color: rgb(66.3043478261, 247.6956521739, 233.0869565217);\n  border: 1px solid rgba(6, 155, 143, 0.3);\n}\n.cd-badge--niveau[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.2);\n  color: #fbbf24;\n  border: 1px solid rgba(217, 119, 6, 0.3);\n}\n.cd-badge--type[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.2);\n  color: #c4b5fd;\n  border: 1px solid rgba(124, 58, 237, 0.3);\n}\n.cd-badge--categorie[_ngcontent-%COMP%] {\n  color: #fff;\n  border: none;\n}\n.course-details[_ngcontent-%COMP%] {\n  padding: 0 0 64px;\n  background: #f9fafb;\n  margin-top: -100px;\n  position: relative;\n  z-index: 10;\n}\n.cd-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n  background: #fff;\n  transition: all 0.2s ease;\n}\n.cd-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n  border-color: rgb(217.4695652174, 220.3565217391, 226.1304347826);\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s ease;\n}\n.subs-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n  color: #111827;\n  letter-spacing: -0.2px;\n  display: flex;\n  align-items: center;\n}\n.cd-sidebar-wrapper[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 80px;\n  margin-top: -120px;\n  z-index: 20;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.cd-sidebar-float[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18), 0 8px 24px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e5e7eb;\n  background: #fff;\n}\n.cd-sidebar-float__body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.cd-sidebar-float__title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 16px;\n  letter-spacing: -0.2px;\n}\n.cd-sidebar-includes[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  padding: 18px 20px 20px;\n}\n.cd-sidebar-includes__title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 14px;\n}\n.cd-video-block[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 16/9;\n  overflow: hidden;\n  cursor: pointer;\n  background: #0f172a;\n}\n.cd-video-block__thumb[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.5s ease, filter 0.3s ease;\n  filter: brightness(0.85);\n}\n.cd-video-block[_ngcontent-%COMP%]:hover   .cd-video-block__thumb[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n  filter: brightness(0.7);\n}\n.cd-video-block__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.72) 0%,\n      rgba(0, 0, 0, 0.2) 50%,\n      transparent 100%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.cd-video-block__play-btn[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.18);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 2px solid rgba(255, 255, 255, 0.55);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1.6rem;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);\n}\n.cd-video-block__play-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.32);\n  transform: scale(1.1);\n}\n.cd-video-block__label[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 14px;\n  left: 0;\n  right: 0;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n}\n.course-sidebar-sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 90px;\n}\n.formation-summary-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.formation-summary-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 0;\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 13.5px;\n}\n.formation-summary-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.formation-summary-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.formation-summary-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #4b5563;\n}\n.formation-summary-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #111827;\n  font-weight: 600;\n}\n.competences-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.competences-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px 0;\n  font-size: 14px;\n  color: #4b5563;\n  border-bottom: 1px dashed #e5e7eb;\n}\n.competences-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.competences-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.includes-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 0;\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 13px;\n  color: #4b5563;\n}\n.includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 17px;\n  opacity: 0.65;\n}\n.accordion-button[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  background: #f9fafb;\n  color: #111827;\n}\n.accordion-button[_ngcontent-%COMP%]:not(.collapsed) {\n  background: #e6f7f5;\n  color: #069b8f;\n  box-shadow: none;\n}\n.accordion-button[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.accordion-item[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb !important;\n  margin-bottom: 8px;\n  border-radius: 8px !important;\n  overflow: hidden;\n}\n.cd-cta-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08);\n  position: sticky;\n  top: 90px;\n}\n.cd-cta-card__cover[_ngcontent-%COMP%] {\n  position: relative;\n  height: 190px;\n  overflow: hidden;\n}\n.cd-cta-card__cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.cd-cta-card__cover-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 2.5rem;\n  opacity: 0;\n  transition: all 0.2s ease;\n}\n.cd-cta-card__cover[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.cd-cta-card__cover[_ngcontent-%COMP%]:hover   .cd-cta-card__cover-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cd-cta-card__body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.cd-cta-card__summary[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 20px;\n  border: 1px solid #f3f4f6;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.cd-cta-card__summary[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.cd-cta-card__summary[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cd-cta-card__summary[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.cd-cta-card__summary[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #4b5563;\n}\n.cd-cta-card__summary[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #111827;\n  font-weight: 600;\n}\n.cd-cta-card__btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px;\n  border-radius: 50px;\n  font-weight: 700;\n  font-size: 15px;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.4795031056, 115.7204968944, 106.7614906832) 100%);\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: 0 4px 16px rgba(6, 155, 143, 0.35);\n  transition: all 0.2s ease;\n  margin-bottom: 16px;\n}\n.cd-cta-card__btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.cd-cta-card__btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(6, 155, 143, 0.45);\n}\n.cd-cta-card__includes[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.cd-cta-card__includes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  padding: 5px 0;\n}\n.cd-cta-card__includes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.lms-modal[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  overflow: hidden;\n  border: none;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.lms-modal__header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.099378882, 105.900621118, 97.701863354) 100%);\n  padding: 18px 24px;\n  border: none;\n}\n.lms-modal__icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 18px;\n}\n.lms-modal[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n  font-size: 16px;\n}\n.lms-modal__body[_ngcontent-%COMP%] {\n  padding: 28px 24px;\n  background: #f9fafb;\n  max-height: 72vh;\n  overflow-y: auto;\n}\n.lms-modal__body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.lms-modal__body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f3f4f6;\n}\n.lms-modal__body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.lms-modal__footer[_ngcontent-%COMP%] {\n  background: #fff;\n  border-top: 1px solid #e5e7eb;\n  padding: 16px 24px;\n  gap: 12px;\n}\n.lms-step__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.lms-step__number[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #4b5563;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.lms-step__number--blue[_ngcontent-%COMP%] {\n  background: #069b8f;\n}\n.lms-step__number--green[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.lms-step__number--purple[_ngcontent-%COMP%] {\n  background: #7c3aed;\n}\n.lms-step__number--orange[_ngcontent-%COMP%] {\n  background: #ea580c;\n}\n.lms-step__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  color: #111827;\n  margin: 0;\n}\n.lms-type-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 16px 10px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  height: 100%;\n}\n.lms-type-card__icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  display: block;\n  margin-bottom: 8px;\n  color: #9ca3af;\n  transition: all 0.2s ease;\n}\n.lms-type-card__label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 13px;\n  color: #111827;\n}\n.lms-type-card__desc[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9ca3af;\n  line-height: 1.3;\n  margin-top: 4px;\n  display: block;\n}\n.lms-type-card[_ngcontent-%COMP%]:hover {\n  border-color: #069b8f;\n  background: #e6f7f5;\n  transform: translateY(-2px);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.lms-type-card[_ngcontent-%COMP%]:hover   .lms-type-card__icon[_ngcontent-%COMP%] {\n  color: #069b8f;\n}\n.lms-type-card--active[_ngcontent-%COMP%] {\n  border-color: #069b8f !important;\n  background: #069b8f !important;\n}\n.lms-type-card--active[_ngcontent-%COMP%]   .lms-type-card__icon[_ngcontent-%COMP%], \n.lms-type-card--active[_ngcontent-%COMP%]   .lms-type-card__label[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.lms-type-card--active[_ngcontent-%COMP%]   .lms-type-card__desc[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7) !important;\n}\n.lms-session-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  cursor: pointer;\n  margin-bottom: 8px;\n  transition: all 0.2s ease;\n}\n.lms-session-card__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  color: #111827;\n  margin-bottom: 4px;\n}\n.lms-session-card__meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.lms-session-card__places[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 50px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.lms-session-card[_ngcontent-%COMP%]:hover {\n  border-color: #069b8f;\n  background: #e6f7f5;\n}\n.lms-session-card--active[_ngcontent-%COMP%] {\n  border-color: #069b8f !important;\n  background: #069b8f !important;\n}\n.lms-session-card--active[_ngcontent-%COMP%]   .lms-session-card__title[_ngcontent-%COMP%], \n.lms-session-card--active[_ngcontent-%COMP%]   .lms-session-card__meta[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.lms-session-card--active[_ngcontent-%COMP%]   .lms-session-card__places[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n  color: #fff;\n}\n.lms-select-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px;\n  cursor: pointer;\n  position: relative;\n  height: 100%;\n  transition: all 0.2s ease;\n}\n.lms-select-card__check[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 20px;\n}\n.lms-select-card__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n  color: #111827;\n  margin-bottom: 4px;\n  padding-right: 24px;\n}\n.lms-select-card__sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.lms-select-card__desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  font-style: italic;\n  margin: 6px 0 0;\n  line-height: 1.4;\n}\n.lms-select-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.lms-select-card--green[_ngcontent-%COMP%]:hover {\n  border-color: #16a34a;\n  background: #f0fdf4;\n}\n.lms-select-card--green.lms-select-card--active[_ngcontent-%COMP%] {\n  border-color: #16a34a !important;\n  background: #16a34a !important;\n}\n.lms-select-card--green.lms-select-card--active[_ngcontent-%COMP%]   .lms-select-card__title[_ngcontent-%COMP%], \n.lms-select-card--green.lms-select-card--active[_ngcontent-%COMP%]   .lms-select-card__sub[_ngcontent-%COMP%], \n.lms-select-card--green.lms-select-card--active[_ngcontent-%COMP%]   .lms-select-card__check[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.lms-select-card--purple[_ngcontent-%COMP%]:hover {\n  border-color: #7c3aed;\n  background: #f5f3ff;\n}\n.lms-select-card--purple.lms-select-card--active[_ngcontent-%COMP%] {\n  border-color: #7c3aed !important;\n  background: #7c3aed !important;\n}\n.lms-select-card--purple.lms-select-card--active[_ngcontent-%COMP%]   .lms-select-card__title[_ngcontent-%COMP%], \n.lms-select-card--purple.lms-select-card--active[_ngcontent-%COMP%]   .lms-select-card__sub[_ngcontent-%COMP%], \n.lms-select-card--purple.lms-select-card--active[_ngcontent-%COMP%]   .lms-select-card__check[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.lms-select-card--orange[_ngcontent-%COMP%]:hover {\n  border-color: #ea580c;\n  background: #fff7ed;\n}\n.lms-select-card--orange.lms-select-card--active[_ngcontent-%COMP%] {\n  border-color: #ea580c !important;\n  background: #ea580c !important;\n}\n.lms-select-card--orange.lms-select-card--active[_ngcontent-%COMP%]   .lms-select-card__title[_ngcontent-%COMP%], \n.lms-select-card--orange.lms-select-card--active[_ngcontent-%COMP%]   .lms-select-card__sub[_ngcontent-%COMP%], \n.lms-select-card--orange.lms-select-card--active[_ngcontent-%COMP%]   .lms-select-card__check[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.lms-selection-badge[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 8px 14px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n}\n.lms-selection-badge--green[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.lms-selection-badge--purple[_ngcontent-%COMP%] {\n  background: #f5f3ff;\n  color: #7c3aed;\n}\n.lms-selection-badge--orange[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  color: #ea580c;\n}\n.lms-selection-badge--blue[_ngcontent-%COMP%] {\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.lms-input[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1.5px solid #e5e7eb;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.lms-input[_ngcontent-%COMP%]:focus {\n  border-color: #069b8f;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.12);\n}\n.lms-field-error[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 12px;\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n}\n.lms-divider[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 2px dashed #e5e7eb;\n  margin: 24px 0;\n}\n.lms-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n}\n.lms-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 32px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.lms-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n  border: 2px dashed #e5e7eb;\n  border-radius: 12px;\n  color: #9ca3af;\n}\n.lms-empty__icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 10px;\n  opacity: 0.5;\n}\n.lms-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n}\n.lms-placeholder[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #9ca3af;\n}\n.lms-placeholder__icon[_ngcontent-%COMP%] {\n  font-size: 52px;\n  display: block;\n  margin-bottom: 12px;\n  color: rgba(6, 155, 143, 0.3);\n}\n.lms-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.lms-btn-cancel[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 50px;\n  padding: 10px 22px;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.lms-btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n  color: #111827;\n}\n.lms-btn-submit[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.4795031056, 115.7204968944, 106.7614906832) 100%);\n  color: #fff;\n  border: none;\n  border-radius: 50px;\n  padding: 10px 28px;\n  font-weight: 700;\n  font-size: 14px;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.4);\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n}\n.lms-btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(6, 155, 143, 0.5);\n  color: #fff;\n}\n.lms-btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.btn-demande[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 15px;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.35);\n  transition: all 0.2s ease;\n}\n.btn-demande[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(6, 155, 143, 0.45);\n}\n.lms-toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 9999;\n  pointer-events: none;\n  opacity: 0;\n  transform: translateX(20px);\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n.lms-toast-container.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n  pointer-events: all;\n}\n.lms-toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  min-width: 320px;\n  max-width: 420px;\n  padding: 16px 18px;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08);\n  position: relative;\n  overflow: hidden;\n}\n.lms-toast__icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.lms-toast__body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.lms-toast__label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  font-size: 13px;\n  letter-spacing: 0.3px;\n  margin-bottom: 2px;\n}\n.lms-toast__message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.5;\n  opacity: 0.85;\n}\n.lms-toast__close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 2px;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 1;\n  opacity: 0.6;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.lms-toast__close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.lms-toast__progress[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 3px;\n  width: 100%;\n  animation: _ngcontent-%COMP%_toast-progress 4s linear forwards;\n  border-radius: 0 0 12px 12px;\n}\n.lms-toast--success[_ngcontent-%COMP%] {\n  background: #fff;\n  border-left: 4px solid #16a34a;\n  color: #111827;\n}\n.lms-toast--success[_ngcontent-%COMP%]   .lms-toast__icon[_ngcontent-%COMP%], \n.lms-toast--success[_ngcontent-%COMP%]   .lms-toast__label[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.lms-toast--success[_ngcontent-%COMP%]   .lms-toast__close[_ngcontent-%COMP%] {\n  color: #4b5563;\n}\n.lms-toast--success[_ngcontent-%COMP%]   .lms-toast__progress[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.lms-toast--error[_ngcontent-%COMP%] {\n  background: #fff;\n  border-left: 4px solid #dc2626;\n  color: #111827;\n}\n.lms-toast--error[_ngcontent-%COMP%]   .lms-toast__icon[_ngcontent-%COMP%], \n.lms-toast--error[_ngcontent-%COMP%]   .lms-toast__label[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.lms-toast--error[_ngcontent-%COMP%]   .lms-toast__close[_ngcontent-%COMP%] {\n  color: #4b5563;\n}\n.lms-toast--error[_ngcontent-%COMP%]   .lms-toast__progress[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.lms-toast--warning[_ngcontent-%COMP%] {\n  background: #fff;\n  border-left: 4px solid #d97706;\n  color: #111827;\n}\n.lms-toast--warning[_ngcontent-%COMP%]   .lms-toast__icon[_ngcontent-%COMP%], \n.lms-toast--warning[_ngcontent-%COMP%]   .lms-toast__label[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.lms-toast--warning[_ngcontent-%COMP%]   .lms-toast__close[_ngcontent-%COMP%] {\n  color: #4b5563;\n}\n.lms-toast--warning[_ngcontent-%COMP%]   .lms-toast__progress[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n@keyframes _ngcontent-%COMP%_toast-progress {\n  from {\n    width: 100%;\n  }\n  to {\n    width: 0%;\n  }\n}\n@media (max-width: 991px) {\n  .cd-hero[_ngcontent-%COMP%] {\n    padding-bottom: 60px;\n  }\n  .course-details[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .cd-sidebar-wrapper[_ngcontent-%COMP%] {\n    margin-top: 24px;\n    position: static;\n  }\n  .cd-cta-card[_ngcontent-%COMP%] {\n    position: static;\n    margin-top: 32px;\n  }\n}\n@media (max-width: 767px) {\n  .cd-hero[_ngcontent-%COMP%] {\n    padding: 40px 0 50px;\n  }\n  .cd-hero__title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .cd-hero__info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cd-hero__quick-stats[_ngcontent-%COMP%] {\n    gap: 14px;\n  }\n  .lms-toast-container[_ngcontent-%COMP%] {\n    top: auto;\n    bottom: 20px;\n    right: 16px;\n    left: 16px;\n  }\n  .lms-toast[_ngcontent-%COMP%] {\n    min-width: unset;\n    width: 100%;\n  }\n  .lms-type-card__desc[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .lms-modal__body[_ngcontent-%COMP%] {\n    max-height: 65vh;\n  }\n}\n.cd-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: #f8f9fa;\n  border-radius: 10px;\n}\n.cd-info-item__icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.cd-demande-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.cd-demande-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.cd-demande-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cd-demande-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.cd-card--refus[_ngcontent-%COMP%] {\n  border-left: 4px solid #ef4444;\n}\n.cd-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.cd-breadcrumb__back[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  color: #fff;\n  border-radius: 8px;\n  padding: 4px 12px;\n  cursor: pointer;\n}\n.cd-breadcrumb__back[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n}\n.cd-breadcrumb__sep[_ngcontent-%COMP%], \n.cd-breadcrumb__current[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 0.875rem;\n}\n.badge-attente[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  color: #fff;\n}\n.badge-validee[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #fff;\n}\n.badge-refusee[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #fff;\n}\n.badge-annulee[_ngcontent-%COMP%] {\n  background: #6b7280;\n  color: #fff;\n}\n.cd-card--validee[_ngcontent-%COMP%] {\n  border-left: 4px solid #16a34a;\n  background: #f0fdf4;\n}\n.cd-card--attente[_ngcontent-%COMP%] {\n  border-left: 4px solid #d97706;\n  background: #fffbeb;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.4795031056, 115.7204968944, 106.7614906832) 100%) !important;\n  border-color: #069b8f !important;\n  box-shadow: 0 3px 10px rgba(6, 155, 143, 0.35) !important;\n  color: #fff !important;\n  transition: all 0.2s ease;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(6, 155, 143, 0.45) !important;\n}\n/*# sourceMappingURL=course-details-2.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseDetails2Component, [{
    type: Component,
    args: [{ standalone: true, selector: "app-course-details-2", imports: [CommonModule], template: `<!-- ============================================================\r
     LOADER\r
     ============================================================ -->\r
<div *ngIf="loading" class="cd-loader">\r
  <div class="cd-loader__spinner"></div>\r
  <p>Chargement...</p>\r
</div>\r
\r
<!-- ============================================================\r
     ERREUR\r
     ============================================================ -->\r
<div *ngIf="!loading && error" class="cd-error">\r
  <i class="ti ti-alert-circle cd-error__icon"></i>\r
  <p>{{ error }}</p>\r
</div>\r
\r
\r
<!-- ============================================================\r
     MODE SESSION\r
     ============================================================ -->\r
<ng-container *ngIf="!loading && mode === 'session' && session">\r
\r
  <!-- HERO SESSION -->\r
  <section class="cd-hero">\r
    <div class="cd-hero__bg"\r
         [style.background-image]="session.image_couverture ? 'url(' + session.image_couverture + ')' : 'none'">\r
    </div>\r
    <div class="cd-hero__overlay"></div>\r
\r
    <div class="container position-relative" style="z-index:2;">\r
      <div class="row">\r
        <div class="col-lg-8">\r
\r
          <!-- Fil d'ariane -->\r
          <nav class="cd-breadcrumb mb-3">\r
            <button class="cd-breadcrumb__back" (click)="goBack()">\r
              <i class="ti ti-arrow-left me-1"></i>Mes sessions\r
            </button>\r
            <span class="cd-breadcrumb__sep">/</span>\r
            <span class="cd-breadcrumb__current">D\xE9tail session</span>\r
          </nav>\r
\r
          <!-- Badges -->\r
          <div class="cd-hero__badges mb-3">\r
            <span class="cd-badge cd-badge--type">\r
              <i class="ti {{ getTypeIcon(session.type) }} me-1"></i>\r
              {{ getTypeLabel(session.type) }}\r
            </span>\r
            <span class="cd-badge" [ngClass]="getStatutClass(demande.statut)">\r
              <i class="{{ getStatutIcon(demande.statut) }} me-1"></i>\r
              {{ demande.statut_display ?? demande.statut }}\r
            </span>\r
            <span class="cd-badge cd-badge--niveau" *ngIf="demande.priorite">\r
              <i class="ti ti-flag me-1"></i>Priorit\xE9 {{ demande.priorite_display ?? demande.priorite }}\r
            </span>\r
          </div>\r
\r
          <h1 class="cd-hero__title">{{ session.titre }}</h1>\r
          <p class="cd-hero__subtitle" *ngIf="session.description">{{ session.description }}</p>\r
\r
          <!-- Infos rapides dans le hero -->\r
          <div class="cd-hero__info-grid mt-4">\r
            <div class="cd-hero__info-item">\r
              <div class="cd-hero__info-icon"><i class="ti ti-calendar"></i></div>\r
              <div>\r
                <span class="cd-hero__info-label">D\xE9but</span>\r
                <span class="cd-hero__info-value">{{ session.date_debut | date:'dd/MM/yyyy' }}</span>\r
              </div>\r
            </div>\r
            <div class="cd-hero__info-item">\r
              <div class="cd-hero__info-icon"><i class="ti ti-calendar-check"></i></div>\r
              <div>\r
                <span class="cd-hero__info-label">Fin</span>\r
                <span class="cd-hero__info-value">{{ session.date_fin | date:'dd/MM/yyyy' }}</span>\r
              </div>\r
            </div>\r
            <div class="cd-hero__info-item">\r
              <div class="cd-hero__info-icon"><i class="ti ti-clock"></i></div>\r
              <div>\r
                <span class="cd-hero__info-label">Dur\xE9e</span>\r
                <span class="cd-hero__info-value">{{ getDureeJours() }} jour(s)</span>\r
              </div>\r
            </div>\r
            <div class="cd-hero__info-item" *ngIf="session.lieu">\r
              <div class="cd-hero__info-icon"><i class="ti ti-map-pin"></i></div>\r
              <div>\r
                <span class="cd-hero__info-label">Lieu</span>\r
                <span class="cd-hero__info-value">{{ session.lieu }}</span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="cd-hero__divider mt-4"></div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- CONTENU SESSION -->\r
  <section class="course-details">\r
    <div class="container">\r
      <div class="row">\r
\r
        <!-- \u2550\u2550\u2550 GAUCHE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <div class="col-lg-8">\r
\r
          <!-- Bloc statut demande -->\r
          <div class="card cd-card mb-4"\r
               [class.cd-card--validee]="demande.statut === 'validee'"\r
               [class.cd-card--refus]="demande.statut === 'refusee'"\r
               [class.cd-card--attente]="demande.statut === 'en_attente'">\r
            <div class="card-body">\r
              <h5 class="subs-title mb-3">\r
                <i class="{{ getStatutIcon(demande.statut) }} me-2"></i>Statut de ma demande\r
              </h5>\r
              <div class="cd-demande-detail">\r
                <div class="cd-demande-row">\r
                  <span class="cd-demande-label">Statut</span>\r
                  <span class="badge" [ngClass]="getStatutClass(demande.statut)">\r
                    {{ demande.statut_display ?? demande.statut }}\r
                  </span>\r
                </div>\r
                <div class="cd-demande-row">\r
                  <span class="cd-demande-label">Priorit\xE9</span>\r
                  <span>{{ demande.priorite_display ?? demande.priorite }}</span>\r
                </div>\r
                <div class="cd-demande-row">\r
                  <span class="cd-demande-label">Soumise le</span>\r
                  <span>{{ demande.created_at | date:'dd/MM/yyyy \xE0 HH:mm' }}</span>\r
                </div>\r
                <div class="cd-demande-row" *ngIf="demande.date_validation">\r
                  <span class="cd-demande-label">Trait\xE9e le</span>\r
                  <span>{{ demande.date_validation | date:'dd/MM/yyyy \xE0 HH:mm' }}</span>\r
                </div>\r
                <div class="cd-demande-row" *ngIf="demande.motif_demande">\r
                  <span class="cd-demande-label">Mon motif</span>\r
                  <span>{{ demande.motif_demande }}</span>\r
                </div>\r
                <div class="cd-demande-row" *ngIf="demande.objectifs_personnels">\r
                  <span class="cd-demande-label">Mes objectifs</span>\r
                  <span>{{ demande.objectifs_personnels }}</span>\r
                </div>\r
                <div class="cd-demande-row" *ngIf="demande.commentaire_employe">\r
                  <span class="cd-demande-label">Mon commentaire</span>\r
                  <span>{{ demande.commentaire_employe }}</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Motif de refus -->\r
          <div class="card cd-card cd-card--refus mb-4"\r
               *ngIf="demande.statut === 'refusee' && demande.motif_refus">\r
            <div class="card-body">\r
              <h5 class="subs-title mb-3">\r
                <i class="ti ti-circle-x me-2 text-danger"></i>Motif de refus\r
              </h5>\r
              <p class="text-muted mb-2">{{ demande.motif_refus }}</p>\r
              <p class="text-muted small fst-italic" *ngIf="demande.commentaire_rh">\r
                <i class="ti ti-message me-1"></i>{{ demande.commentaire_rh }}\r
              </p>\r
            </div>\r
          </div>\r
\r
          <!-- Infos pratiques session -->\r
          <div class="card cd-card mb-4">\r
            <div class="card-body">\r
              <h5 class="subs-title mb-3">\r
                <i class="ti ti-info-circle me-2 text-primary"></i>Informations de la session\r
              </h5>\r
              <div class="row g-3">\r
                <div class="col-md-6">\r
                  <div class="cd-info-item">\r
                    <i class="ti {{ getTypeIcon(session.type) }} text-primary cd-info-item__icon"></i>\r
                    <div>\r
                      <small class="text-muted d-block">Format</small>\r
                      <strong>{{ getTypeLabel(session.type) }}</strong>\r
                    </div>\r
                  </div>\r
                </div>\r
                <div class="col-md-6">\r
                  <div class="cd-info-item">\r
                    <i class="ti ti-clock text-warning cd-info-item__icon"></i>\r
                    <div>\r
                      <small class="text-muted d-block">Dur\xE9e</small>\r
                      <strong>{{ getDureeJours() }} jour(s)</strong>\r
                    </div>\r
                  </div>\r
                </div>\r
                <div class="col-md-6" *ngIf="session.lieu">\r
                  <div class="cd-info-item">\r
                    <i class="ti ti-map-pin text-danger cd-info-item__icon"></i>\r
                    <div>\r
                      <small class="text-muted d-block">Lieu</small>\r
                      <strong>{{ session.lieu }}</strong>\r
                    </div>\r
                  </div>\r
                </div>\r
                <div class="col-md-6">\r
                  <div class="cd-info-item">\r
                    <i class="ti ti-users text-info cd-info-item__icon"></i>\r
                    <div>\r
                      <small class="text-muted d-block">Capacit\xE9</small>\r
                      <strong>{{ session.capacite_max }} participants </strong>\r
                    </div>\r
                  </div>\r
                </div>\r
                <div class="col-md-6" *ngIf="session.date_limite_inscription">\r
                  <div class="cd-info-item">\r
                    <i class="ti ti-calendar-x text-danger cd-info-item__icon"></i>\r
                    <div>\r
                      <small class="text-muted d-block">Limite d'inscription</small>\r
                      <strong>{{ session.date_limite_inscription | date:'dd/MM/yyyy' }}</strong>\r
                    </div>\r
                  </div>\r
                </div>\r
                <div class="col-md-6">\r
                  <div class="cd-info-item">\r
                    <i class="ti ti-certificate text-success cd-info-item__icon"></i>\r
                    <div>\r
                      <small class="text-muted d-block">Certificat</small>\r
                      <strong>{{ session.certificat_delivre ? 'D\xE9livr\xE9' : 'Non d\xE9livr\xE9' }}</strong>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Mat\xE9riel requis -->\r
          <div class="card cd-card mb-4" *ngIf="session.materiel_requis">\r
            <div class="card-body">\r
              <h5 class="subs-title mb-3">\r
                <i class="ti ti-tool me-2 text-warning"></i>Mat\xE9riel requis\r
              </h5>\r
              <p class="text-muted" style="line-height:1.7">{{ session.materiel_requis }}</p>\r
            </div>\r
          </div>\r
\r
          <!-- Instructions acc\xE8s distanciel -->\r
          <div class="card cd-card cd-card--validee mb-4"\r
               *ngIf="demande.statut === 'validee' && session.instructions_acces && isSessionDistanciel()">\r
            <div class="card-body">\r
              <h5 class="subs-title mb-3">\r
                <i class="ti ti-link me-2 text-primary"></i>Instructions d'acc\xE8s\r
              </h5>\r
              <p class="text-muted" style="line-height:1.7">{{ session.instructions_acces }}</p>\r
            </div>\r
          </div>\r
\r
        </div>\r
\r
        <!-- \u2550\u2550\u2550 DROITE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <div class="col-lg-4">\r
          <div class="cd-sidebar-wrapper">\r
\r
            <div class="cd-sidebar-float">\r
              <div class="cd-video-block">\r
                <img [src]="session.image_couverture || 'assets/img/course/course-01.jpg'"\r
                     [alt]="session.titre" class="cd-video-block__thumb">\r
                <div class="cd-video-block__overlay">\r
                  <span class="cd-video-block__label">{{ getTypeLabel(session.type) }}</span>\r
                </div>\r
              </div>\r
\r
              <div class="cd-sidebar-float__body">\r
                <h5 class="cd-sidebar-float__title">R\xE9sum\xE9 de la session</h5>\r
                <ul class="formation-summary-list">\r
                  <li>\r
                    <i class="ti ti-calendar text-primary"></i>\r
                    <span>D\xE9but</span>\r
                    <strong>{{ session.date_debut | date:'dd/MM/yyyy' }}</strong>\r
                  </li>\r
                  <li>\r
                    <i class="ti ti-calendar-check text-success"></i>\r
                    <span>Fin</span>\r
                    <strong>{{ session.date_fin | date:'dd/MM/yyyy' }}</strong>\r
                  </li>\r
                  <li>\r
                    <i class="ti ti-clock text-warning"></i>\r
                    <span>Dur\xE9e</span>\r
                    <strong>{{ getDureeJours() }} jour(s)</strong>\r
                  </li>\r
                  <li>\r
                    <i class="ti ti-users text-info"></i>\r
                    <span>Capacit\xE9</span>\r
                    <strong>{{ session.capacite_max }} places</strong>\r
                  </li>\r
                  <li *ngIf="session.code_session">\r
                    <i class="ti ti-hash text-secondary"></i>\r
                    <span>Code session</span>\r
                    <strong>{{ session.code_session }}</strong>\r
                  </li>\r
                </ul>\r
\r
                <!-- \u2705 BOUTON COMMENCER \u2014 SESSION -->\r
                <div class="mt-3">\r
                  <button\r
                    class="btn w-100 fw-semibold"\r
                    [class.btn-success]="canCommencer()"\r
                    [class.btn-secondary]="!canCommencer()"\r
                    [disabled]="!canCommencer()"\r
                    (click)="commencerFormation()">\r
                    <i class="ti me-2"\r
                       [class.ti-player-play]="canCommencer()"\r
                       [class.ti-lock]="!canCommencer()"></i>\r
                    {{ getLabelBouton() }}\r
                  </button>\r
                </div>\r
\r
              </div>\r
            </div>\r
\r
            <!-- Cette session inclut -->\r
            <div class="cd-sidebar-includes">\r
              <h6 class="cd-sidebar-includes__title">Cette session inclut</h6>\r
              <ul class="includes-list">\r
                <li>\r
                  <img class="me-2" src="./assets/img/icons/play.svg">\r
                  Acc\xE8s \xE0 la session\r
                </li>\r
                <li>\r
                  <img class="me-2" src="./assets/img/icons/key.svg">\r
                  Acc\xE8s entreprise\r
                </li>\r
                <li *ngIf="isSessionPresentiel()">\r
                  <img class="me-2" src="./assets/img/icons/monitor-mobbile.svg">\r
                  Formation en salle\r
                </li>\r
                <li *ngIf="isSessionDistanciel()">\r
                  <img class="me-2" src="./assets/img/icons/monitor-mobbile.svg">\r
                  Acc\xE8s en ligne (visio)\r
                </li>\r
                <li *ngIf="isSessionHybride()">\r
                  <img class="me-2" src="./assets/img/icons/monitor-mobbile.svg">\r
                  Pr\xE9sentiel + Distanciel\r
                </li>\r
                <li>\r
                  <img class="me-2" src="./assets/img/icons/teacher.svg">\r
                  Encadrement formateur\r
                </li>\r
                <li *ngIf="session.evaluation_requise">\r
                  <img class="me-2" src="./assets/img/icons/play.svg">\r
                  \xC9valuation incluse\r
                </li>\r
                <li *ngIf="session.certificat_delivre">\r
                  <img class="me-2" src="./assets/img/icons/key.svg">\r
                  Certificat d\xE9livr\xE9\r
                </li>\r
              </ul>\r
            </div>\r
\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div>\r
  </section>\r
\r
</ng-container>\r
\r
\r
<!-- ============================================================\r
     MODE FORMATION\r
     ============================================================ -->\r
<ng-container *ngIf="!loading && mode === 'formation' && formation">\r
\r
  <section class="cd-hero">\r
    <div class="cd-hero__bg"\r
         [style.background-image]="formation.image_couverture ? 'url(' + formation.image_couverture + ')' : 'none'">\r
    </div>\r
    <div class="cd-hero__overlay"></div>\r
    <div class="container position-relative" style="z-index:2;">\r
      <div class="row">\r
        <div class="col-lg-8">\r
          <nav class="cd-breadcrumb mb-3">\r
            <button class="cd-breadcrumb__back" (click)="goBack()">\r
              <i class="ti ti-arrow-left me-1"></i>\r
              <ng-container *ngIf="catalogueId">Retour au catalogue</ng-container>\r
              <ng-container *ngIf="parcoursId && !catalogueId">Retour au parcours</ng-container>\r
              <ng-container *ngIf="!catalogueId && !parcoursId">Mes formations</ng-container>\r
            </button>\r
            <span class="cd-breadcrumb__sep">/</span>\r
            <span class="cd-breadcrumb__current">D\xE9tail formation</span>\r
          </nav>\r
          <div class="cd-hero__badges">\r
            <span class="cd-badge cd-badge--certifiant" *ngIf="formation.est_certifiante">\r
              <i class="ti ti-certificate"></i> Certifiante\r
            </span>\r
            <span class="cd-badge cd-badge--habilitant" *ngIf="!formation.est_certifiante">\r
              <i class="ti ti-shield-check"></i> Habilitante\r
            </span>\r
            <span class="cd-badge cd-badge--niveau">\r
              <i class="ti ti-chart-bar"></i> {{ formation.niveau_display }}\r
            </span>\r
            <span class="cd-badge cd-badge--type">\r
              <i class="ti ti-device-laptop"></i> {{ formation.type_display }}\r
            </span>\r
            <span class="cd-badge cd-badge--categorie"\r
                  *ngIf="formation.categorie"\r
                  [style.background-color]="formation.categorie?.couleur || '#6b7280'">\r
              {{ formation.categorie?.nom }}\r
            </span>\r
          </div>\r
          <h1 class="cd-hero__title">{{ formation.titre }}</h1>\r
          <p class="cd-hero__subtitle">{{ formation.short_description }}</p>\r
          <div class="cd-hero__divider"></div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="course-details">\r
    <div class="container">\r
      <div class="row">\r
        <div class="col-lg-8">\r
\r
          <div class="card cd-card mb-4">\r
            <div class="card-body">\r
              <h5 class="subs-title mb-3"><i class="ti ti-file-description me-2 text-primary"></i>Pr\xE9sentation</h5>\r
              <p class="text-muted" style="line-height:1.7;">{{ formation.description }}</p>\r
            </div>\r
          </div>\r
\r
          <div class="card cd-card mb-4" *ngIf="formation.objectifs_pedagogiques">\r
            <div class="card-body">\r
              <h5 class="subs-title mb-3"><i class="ti ti-target me-2 text-primary"></i>Objectifs</h5>\r
              <p class="text-muted" style="line-height:1.7;">{{ formation.objectifs_pedagogiques }}</p>\r
            </div>\r
          </div>\r
\r
          <div class="card cd-card mb-4" *ngIf="formation.competences_acquises?.length">\r
            <div class="card-body">\r
              <h5 class="subs-title mb-3"><i class="ti ti-star me-2 text-warning"></i>Comp\xE9tences vis\xE9es</h5>\r
              <ul class="competences-list">\r
                <li *ngFor="let comp of formation.competences_acquises">\r
                  <i class="ti ti-circle-check text-success me-2"></i>{{ comp }}\r
                </li>\r
              </ul>\r
            </div>\r
          </div>\r
\r
          <div class="card cd-card mb-4" *ngIf="formation.prerequis">\r
            <div class="card-body">\r
              <h5 class="subs-title mb-3"><i class="ti ti-tool me-2 text-warning"></i>Pr\xE9requis</h5>\r
              <p class="text-muted" style="line-height:1.7;">{{ formation.prerequis }}</p>\r
            </div>\r
          </div>\r
\r
          <div class="card cd-card mb-4">\r
            <div class="card-body">\r
              <div class="d-flex justify-content-between align-items-center mb-3">\r
                <h5 class="subs-title mb-0"><i class="ti ti-layout-list me-2 text-primary"></i>Contenu</h5>\r
                <span class="badge bg-primary rounded-pill">{{ formation.nombre_modules }} modules</span>\r
              </div>\r
              <div class="accordion accordion-customicon1">\r
                <div class="accordion-item" *ngFor="let module of formation.modules; let i = index">\r
                  <h2 class="accordion-header">\r
                    <button class="accordion-button collapsed" data-bs-toggle="collapse"\r
                            [attr.data-bs-target]="'#module'+i">{{ module.titre }}</button>\r
                  </h2>\r
                  <div class="accordion-collapse collapse" [id]="'module'+i">\r
                    <div class="accordion-body p-0">\r
                      <ul>\r
                        <li class="p-3 d-flex justify-content-between align-items-center"\r
                            *ngFor="let section of module.sections">\r
                          <span><img class="me-2" src="./assets/img/icons/play.svg">{{ section.titre }}</span>\r
                          <span class="text-muted small">{{ section.duree_estimee }}</span>\r
                        </li>\r
                      </ul>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="card cd-card mb-4" *ngIf="formation.public_cible">\r
            <div class="card-body">\r
              <h5 class="subs-title mb-3"><i class="ti ti-users me-2 text-info"></i>Population cible</h5>\r
              <p class="text-muted">{{ formation.public_cible }}</p>\r
            </div>\r
          </div>\r
\r
          <div class="card cd-card">\r
            <div class="card-body">\r
              <h5 class="subs-title mb-3"><i class="ti ti-user-circle me-2 text-primary"></i>\xC0 propos du formateur</h5>\r
              <div class="d-flex align-items-center gap-3">\r
                <img class="rounded-circle" style="width:60px;height:60px;object-fit:cover;"\r
                     [src]="formation.image_couverture || 'assets/img/avatar-default.png'">\r
                <div>\r
                  <h5 class="fs-18 fw-semibold mb-1">{{ formation.formateur_nom }}</h5>\r
                  <p class="mb-0 text-muted small">{{ formation.formateur?.fonction }}</p>\r
                  <p class="mb-0 fs-13 text-muted"><i class="ti ti-mail me-1"></i>{{ formation.formateur_email }}</p>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
        </div>\r
\r
        <div class="col-lg-4">\r
          <div class="cd-sidebar-wrapper">\r
            <div class="cd-sidebar-float">\r
              <div class="cd-video-block">\r
                <img [src]="formation.image_couverture || 'assets/img/course/video-bg.jpg'"\r
                     alt="{{ formation.titre }}" class="cd-video-block__thumb">\r
                <div class="cd-video-block__overlay">\r
                  <div class="cd-video-block__play-btn"><i class="ti ti-player-play-filled"></i></div>\r
                  <span class="cd-video-block__label">Aper\xE7u de la formation</span>\r
                </div>\r
              </div>\r
              <div class="cd-sidebar-float__body">\r
                <h5 class="cd-sidebar-float__title">R\xE9sum\xE9</h5>\r
                <ul class="formation-summary-list">\r
                  <li>\r
                    <i class="ti ti-clock text-primary"></i>\r
                    <span>Dur\xE9e</span>\r
                    <strong>{{ formation.duree_totale }} heures</strong>\r
                  </li>\r
                  <li>\r
                    <i class="ti ti-language text-success"></i>\r
                    <span>Langue</span>\r
                    <strong>{{ formation.langue === 'fr' ? 'Fran\xE7ais' : formation.langue }}</strong>\r
                  </li>\r
                  <li>\r
                    <i class="ti ti-users text-secondary"></i>\r
                    <span>Participants max</span>\r
                    <strong>{{ formation.nb_max_participants }}</strong>\r
                  </li>\r
                </ul>\r
\r
                <!-- \u2705 BOUTON COMMENCER \u2014 FORMATION -->\r
                <div class="mt-3">\r
                  <button\r
                    class="btn w-100 fw-semibold"\r
                    [class.btn-success]="canCommencer()"\r
                    [class.btn-secondary]="!canCommencer()"\r
                    [disabled]="!canCommencer()"\r
                    (click)="commencerFormation()">\r
                    <i class="ti me-2"\r
                       [class.ti-player-play]="canCommencer()"\r
                       [class.ti-lock]="!canCommencer()"></i>\r
                    {{ getLabelBouton() }}\r
                  </button>\r
                </div>\r
\r
              </div>\r
            </div>\r
\r
            <div class="cd-sidebar-includes">\r
              <h6 class="cd-sidebar-includes__title">Cette formation inclut</h6>\r
              <ul class="includes-list">\r
                <li><img class="me-2" src="./assets/img/icons/play.svg"> Modules structur\xE9s</li>\r
                <li><img class="me-2" src="./assets/img/icons/key.svg"> Acc\xE8s entreprise</li>\r
                <li><img class="me-2" src="./assets/img/icons/monitor-mobbile.svg"> Multi-support</li>\r
                <li>\r
                  <img class="me-2" src="./assets/img/icons/teacher.svg">\r
                  Certification : {{ formation.est_certifiante ? 'Incluse' : 'Non incluse' }}\r
                </li>\r
              </ul>\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div>\r
  </section>\r
\r
</ng-container>`, styles: ["/* src/app/features/courses/course-details-2/course-details-2.component.scss */\n.cd-loader {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 100px 0;\n  color: #9ca3af;\n}\n.cd-loader__spinner {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  border: 3px solid #e5e7eb;\n  border-top-color: #069b8f;\n  animation: spin 0.7s linear infinite;\n}\n.cd-loader p {\n  margin-top: 16px;\n  font-size: 14px;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cd-error {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px 20px;\n  gap: 12px;\n  color: #dc2626;\n  text-align: center;\n}\n.cd-error__icon {\n  font-size: 3.5rem;\n  opacity: 0.7;\n}\n.cd-error p {\n  font-size: 15px;\n  color: #4b5563;\n  margin: 0;\n}\n.cd-hero {\n  position: relative;\n  padding: 60px 0 160px;\n  overflow: visible;\n  background: #0f172a;\n}\n.cd-hero__bg {\n  position: absolute;\n  inset: 0;\n  background-size: cover;\n  background-position: center;\n  filter: blur(2px) brightness(0.35);\n  transform: scale(1.05);\n}\n.cd-hero__overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(6, 155, 143, 0.72) 0%,\n      rgba(15, 23, 42, 0.92) 65%);\n}\n.cd-hero__badges {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 18px;\n}\n.cd-hero__title {\n  font-size: 32px;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1.2;\n  letter-spacing: -0.5px;\n  margin-bottom: 12px;\n  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);\n}\n.cd-hero__subtitle {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.78);\n  line-height: 1.65;\n  margin-bottom: 0;\n  max-width: 560px;\n}\n.cd-hero__divider {\n  width: 52px;\n  height: 3px;\n  background: #069b8f;\n  border-radius: 2px;\n  margin-top: 24px;\n  opacity: 0.85;\n}\n.cd-hero__quick-stats {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-bottom: 28px;\n}\n.cd-hero__quick-stat {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 14px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.9);\n}\n.cd-hero__quick-stat i {\n  font-size: 17px;\n  color: rgba(255, 255, 255, 0.65);\n}\n.cd-hero__instructor {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 28px;\n}\n.cd-hero__instructor-avatar {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  flex-shrink: 0;\n}\n.cd-hero__instructor-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.cd-hero__instructor-label {\n  display: block;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.5);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 2px;\n}\n.cd-hero__instructor-name {\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 2px;\n}\n.cd-hero__instructor-meta {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.6);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.cd-hero__instructor-sep {\n  opacity: 0.5;\n}\n.cd-hero__info-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n.cd-hero__info-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 8px;\n  padding: 12px 14px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.cd-hero__info-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  color: #fff;\n  font-size: 15px;\n}\n.cd-hero__info-label {\n  display: block;\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 2px;\n}\n.cd-hero__info-value {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.9);\n}\n.cd-hero__info-value--success {\n  color: #4ade80 !important;\n}\n.cd-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 12px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.2px;\n}\n.cd-badge i {\n  font-size: 13px;\n}\n.cd-badge--certifiant {\n  background: rgba(22, 163, 74, 0.2);\n  color: #4ade80;\n  border: 1px solid rgba(22, 163, 74, 0.3);\n}\n.cd-badge--habilitant {\n  background: rgba(6, 155, 143, 0.2);\n  color: rgb(66.3043478261, 247.6956521739, 233.0869565217);\n  border: 1px solid rgba(6, 155, 143, 0.3);\n}\n.cd-badge--niveau {\n  background: rgba(217, 119, 6, 0.2);\n  color: #fbbf24;\n  border: 1px solid rgba(217, 119, 6, 0.3);\n}\n.cd-badge--type {\n  background: rgba(124, 58, 237, 0.2);\n  color: #c4b5fd;\n  border: 1px solid rgba(124, 58, 237, 0.3);\n}\n.cd-badge--categorie {\n  color: #fff;\n  border: none;\n}\n.course-details {\n  padding: 0 0 64px;\n  background: #f9fafb;\n  margin-top: -100px;\n  position: relative;\n  z-index: 10;\n}\n.cd-card {\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n  background: #fff;\n  transition: all 0.2s ease;\n}\n.cd-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);\n  border-color: rgb(217.4695652174, 220.3565217391, 226.1304347826);\n}\n.card {\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s ease;\n}\n.subs-title {\n  font-weight: 700;\n  font-size: 16px;\n  color: #111827;\n  letter-spacing: -0.2px;\n  display: flex;\n  align-items: center;\n}\n.cd-sidebar-wrapper {\n  position: sticky;\n  top: 80px;\n  margin-top: -120px;\n  z-index: 20;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.cd-sidebar-float {\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18), 0 8px 24px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e5e7eb;\n  background: #fff;\n}\n.cd-sidebar-float__body {\n  padding: 20px;\n}\n.cd-sidebar-float__title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 16px;\n  letter-spacing: -0.2px;\n}\n.cd-sidebar-includes {\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  padding: 18px 20px 20px;\n}\n.cd-sidebar-includes__title {\n  font-size: 11px;\n  font-weight: 700;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 14px;\n}\n.cd-video-block {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 16/9;\n  overflow: hidden;\n  cursor: pointer;\n  background: #0f172a;\n}\n.cd-video-block__thumb {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.5s ease, filter 0.3s ease;\n  filter: brightness(0.85);\n}\n.cd-video-block:hover .cd-video-block__thumb {\n  transform: scale(1.05);\n  filter: brightness(0.7);\n}\n.cd-video-block__overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.72) 0%,\n      rgba(0, 0, 0, 0.2) 50%,\n      transparent 100%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.cd-video-block__play-btn {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.18);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 2px solid rgba(255, 255, 255, 0.55);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1.6rem;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);\n}\n.cd-video-block__play-btn:hover {\n  background: rgba(255, 255, 255, 0.32);\n  transform: scale(1.1);\n}\n.cd-video-block__label {\n  position: absolute;\n  bottom: 14px;\n  left: 0;\n  right: 0;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n}\n.course-sidebar-sticky {\n  position: sticky;\n  top: 90px;\n}\n.formation-summary-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.formation-summary-list li {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 0;\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 13.5px;\n}\n.formation-summary-list li:last-child {\n  border-bottom: none;\n}\n.formation-summary-list li i {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.formation-summary-list li span {\n  flex: 1;\n  color: #4b5563;\n}\n.formation-summary-list li strong {\n  color: #111827;\n  font-weight: 600;\n}\n.competences-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.competences-list li {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px 0;\n  font-size: 14px;\n  color: #4b5563;\n  border-bottom: 1px dashed #e5e7eb;\n}\n.competences-list li:last-child {\n  border-bottom: none;\n}\n.competences-list li i {\n  font-size: 16px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.includes-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.includes-list li {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 0;\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 13px;\n  color: #4b5563;\n}\n.includes-list li:last-child {\n  border-bottom: none;\n}\n.includes-list li img {\n  width: 17px;\n  opacity: 0.65;\n}\n.accordion-button {\n  font-weight: 600;\n  font-size: 14px;\n  background: #f9fafb;\n  color: #111827;\n}\n.accordion-button:not(.collapsed) {\n  background: #e6f7f5;\n  color: #069b8f;\n  box-shadow: none;\n}\n.accordion-button:focus {\n  box-shadow: none;\n}\n.accordion-item {\n  border: 1px solid #e5e7eb !important;\n  margin-bottom: 8px;\n  border-radius: 8px !important;\n  overflow: hidden;\n}\n.cd-cta-card {\n  background: #fff;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08);\n  position: sticky;\n  top: 90px;\n}\n.cd-cta-card__cover {\n  position: relative;\n  height: 190px;\n  overflow: hidden;\n}\n.cd-cta-card__cover img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.cd-cta-card__cover-overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 2.5rem;\n  opacity: 0;\n  transition: all 0.2s ease;\n}\n.cd-cta-card__cover:hover img {\n  transform: scale(1.04);\n}\n.cd-cta-card__cover:hover .cd-cta-card__cover-overlay {\n  opacity: 1;\n}\n.cd-cta-card__body {\n  padding: 20px;\n}\n.cd-cta-card__summary {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 20px;\n  border: 1px solid #f3f4f6;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.cd-cta-card__summary li {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.cd-cta-card__summary li:last-child {\n  border-bottom: none;\n}\n.cd-cta-card__summary li i {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.cd-cta-card__summary li span {\n  flex: 1;\n  color: #4b5563;\n}\n.cd-cta-card__summary li strong {\n  color: #111827;\n  font-weight: 600;\n}\n.cd-cta-card__btn {\n  width: 100%;\n  padding: 13px;\n  border-radius: 50px;\n  font-weight: 700;\n  font-size: 15px;\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.4795031056, 115.7204968944, 106.7614906832) 100%);\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: 0 4px 16px rgba(6, 155, 143, 0.35);\n  transition: all 0.2s ease;\n  margin-bottom: 16px;\n}\n.cd-cta-card__btn i {\n  font-size: 17px;\n}\n.cd-cta-card__btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(6, 155, 143, 0.45);\n}\n.cd-cta-card__includes {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.cd-cta-card__includes li {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #4b5563;\n  padding: 5px 0;\n}\n.cd-cta-card__includes li i {\n  font-size: 14px;\n}\n.lms-modal {\n  border-radius: 16px;\n  overflow: hidden;\n  border: none;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.lms-modal__header {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.099378882, 105.900621118, 97.701863354) 100%);\n  padding: 18px 24px;\n  border: none;\n}\n.lms-modal__icon {\n  width: 38px;\n  height: 38px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 18px;\n}\n.lms-modal .modal-title {\n  color: #fff;\n  font-weight: 700;\n  font-size: 16px;\n}\n.lms-modal__body {\n  padding: 28px 24px;\n  background: #f9fafb;\n  max-height: 72vh;\n  overflow-y: auto;\n}\n.lms-modal__body::-webkit-scrollbar {\n  width: 6px;\n}\n.lms-modal__body::-webkit-scrollbar-track {\n  background: #f3f4f6;\n}\n.lms-modal__body::-webkit-scrollbar-thumb {\n  background: #e5e7eb;\n  border-radius: 3px;\n}\n.lms-modal__footer {\n  background: #fff;\n  border-top: 1px solid #e5e7eb;\n  padding: 16px 24px;\n  gap: 12px;\n}\n.lms-step__header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.lms-step__number {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #4b5563;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.lms-step__number--blue {\n  background: #069b8f;\n}\n.lms-step__number--green {\n  background: #16a34a;\n}\n.lms-step__number--purple {\n  background: #7c3aed;\n}\n.lms-step__number--orange {\n  background: #ea580c;\n}\n.lms-step__title {\n  font-weight: 600;\n  font-size: 14px;\n  color: #111827;\n  margin: 0;\n}\n.lms-type-card {\n  background: #fff;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 16px 10px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  height: 100%;\n}\n.lms-type-card__icon {\n  font-size: 28px;\n  display: block;\n  margin-bottom: 8px;\n  color: #9ca3af;\n  transition: all 0.2s ease;\n}\n.lms-type-card__label {\n  font-weight: 700;\n  font-size: 13px;\n  color: #111827;\n}\n.lms-type-card__desc {\n  font-size: 10px;\n  color: #9ca3af;\n  line-height: 1.3;\n  margin-top: 4px;\n  display: block;\n}\n.lms-type-card:hover {\n  border-color: #069b8f;\n  background: #e6f7f5;\n  transform: translateY(-2px);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.lms-type-card:hover .lms-type-card__icon {\n  color: #069b8f;\n}\n.lms-type-card--active {\n  border-color: #069b8f !important;\n  background: #069b8f !important;\n}\n.lms-type-card--active .lms-type-card__icon,\n.lms-type-card--active .lms-type-card__label {\n  color: #fff !important;\n}\n.lms-type-card--active .lms-type-card__desc {\n  color: rgba(255, 255, 255, 0.7) !important;\n}\n.lms-session-card {\n  background: #fff;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  cursor: pointer;\n  margin-bottom: 8px;\n  transition: all 0.2s ease;\n}\n.lms-session-card__title {\n  font-weight: 600;\n  font-size: 14px;\n  color: #111827;\n  margin-bottom: 4px;\n}\n.lms-session-card__meta {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.lms-session-card__places {\n  background: #f0fdf4;\n  color: #16a34a;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 50px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.lms-session-card:hover {\n  border-color: #069b8f;\n  background: #e6f7f5;\n}\n.lms-session-card--active {\n  border-color: #069b8f !important;\n  background: #069b8f !important;\n}\n.lms-session-card--active .lms-session-card__title,\n.lms-session-card--active .lms-session-card__meta {\n  color: #fff !important;\n}\n.lms-session-card--active .lms-session-card__places {\n  background: rgba(255, 255, 255, 0.25);\n  color: #fff;\n}\n.lms-select-card {\n  background: #fff;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px;\n  cursor: pointer;\n  position: relative;\n  height: 100%;\n  transition: all 0.2s ease;\n}\n.lms-select-card__check {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 20px;\n}\n.lms-select-card__title {\n  font-weight: 600;\n  font-size: 13px;\n  color: #111827;\n  margin-bottom: 4px;\n  padding-right: 24px;\n}\n.lms-select-card__sub {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.lms-select-card__desc {\n  font-size: 11px;\n  color: #9ca3af;\n  font-style: italic;\n  margin: 6px 0 0;\n  line-height: 1.4;\n}\n.lms-select-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.lms-select-card--green:hover {\n  border-color: #16a34a;\n  background: #f0fdf4;\n}\n.lms-select-card--green.lms-select-card--active {\n  border-color: #16a34a !important;\n  background: #16a34a !important;\n}\n.lms-select-card--green.lms-select-card--active .lms-select-card__title,\n.lms-select-card--green.lms-select-card--active .lms-select-card__sub,\n.lms-select-card--green.lms-select-card--active .lms-select-card__check {\n  color: #fff !important;\n}\n.lms-select-card--purple:hover {\n  border-color: #7c3aed;\n  background: #f5f3ff;\n}\n.lms-select-card--purple.lms-select-card--active {\n  border-color: #7c3aed !important;\n  background: #7c3aed !important;\n}\n.lms-select-card--purple.lms-select-card--active .lms-select-card__title,\n.lms-select-card--purple.lms-select-card--active .lms-select-card__sub,\n.lms-select-card--purple.lms-select-card--active .lms-select-card__check {\n  color: #fff !important;\n}\n.lms-select-card--orange:hover {\n  border-color: #ea580c;\n  background: #fff7ed;\n}\n.lms-select-card--orange.lms-select-card--active {\n  border-color: #ea580c !important;\n  background: #ea580c !important;\n}\n.lms-select-card--orange.lms-select-card--active .lms-select-card__title,\n.lms-select-card--orange.lms-select-card--active .lms-select-card__sub,\n.lms-select-card--orange.lms-select-card--active .lms-select-card__check {\n  color: #fff !important;\n}\n.lms-selection-badge {\n  margin-top: 12px;\n  padding: 8px 14px;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n}\n.lms-selection-badge--green {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.lms-selection-badge--purple {\n  background: #f5f3ff;\n  color: #7c3aed;\n}\n.lms-selection-badge--orange {\n  background: #fff7ed;\n  color: #ea580c;\n}\n.lms-selection-badge--blue {\n  background: #e6f7f5;\n  color: #069b8f;\n}\n.lms-input {\n  border-radius: 8px;\n  border: 1.5px solid #e5e7eb;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.lms-input:focus {\n  border-color: #069b8f;\n  box-shadow: 0 0 0 3px rgba(6, 155, 143, 0.12);\n}\n.lms-field-error {\n  color: #dc2626;\n  font-size: 12px;\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n}\n.lms-divider {\n  border: none;\n  border-top: 2px dashed #e5e7eb;\n  margin: 24px 0;\n}\n.lms-hint {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n}\n.lms-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 32px;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.lms-empty {\n  text-align: center;\n  padding: 32px 16px;\n  border: 2px dashed #e5e7eb;\n  border-radius: 12px;\n  color: #9ca3af;\n}\n.lms-empty__icon {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 10px;\n  opacity: 0.5;\n}\n.lms-empty p {\n  margin: 0;\n  font-size: 13px;\n}\n.lms-placeholder {\n  text-align: center;\n  padding: 40px 20px;\n  color: #9ca3af;\n}\n.lms-placeholder__icon {\n  font-size: 52px;\n  display: block;\n  margin-bottom: 12px;\n  color: rgba(6, 155, 143, 0.3);\n}\n.lms-placeholder p {\n  margin: 0;\n  font-size: 14px;\n}\n.lms-btn-cancel {\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 50px;\n  padding: 10px 22px;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.2s ease;\n}\n.lms-btn-cancel:hover {\n  background: #e5e7eb;\n  color: #111827;\n}\n.lms-btn-submit {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.4795031056, 115.7204968944, 106.7614906832) 100%);\n  color: #fff;\n  border: none;\n  border-radius: 50px;\n  padding: 10px 28px;\n  font-weight: 700;\n  font-size: 14px;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.4);\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n}\n.lms-btn-submit:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(6, 155, 143, 0.5);\n  color: #fff;\n}\n.lms-btn-submit:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.btn-demande {\n  padding: 12px 24px;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 15px;\n  box-shadow: 0 4px 14px rgba(6, 155, 143, 0.35);\n  transition: all 0.2s ease;\n}\n.btn-demande:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(6, 155, 143, 0.45);\n}\n.lms-toast-container {\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 9999;\n  pointer-events: none;\n  opacity: 0;\n  transform: translateX(20px);\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n.lms-toast-container.visible {\n  opacity: 1;\n  transform: translateX(0);\n  pointer-events: all;\n}\n.lms-toast {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  min-width: 320px;\n  max-width: 420px;\n  padding: 16px 18px;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08);\n  position: relative;\n  overflow: hidden;\n}\n.lms-toast__icon {\n  font-size: 22px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.lms-toast__body {\n  flex: 1;\n}\n.lms-toast__label {\n  display: block;\n  font-weight: 700;\n  font-size: 13px;\n  letter-spacing: 0.3px;\n  margin-bottom: 2px;\n}\n.lms-toast__message {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.5;\n  opacity: 0.85;\n}\n.lms-toast__close {\n  background: none;\n  border: none;\n  padding: 2px;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 1;\n  opacity: 0.6;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.lms-toast__close:hover {\n  opacity: 1;\n}\n.lms-toast__progress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 3px;\n  width: 100%;\n  animation: toast-progress 4s linear forwards;\n  border-radius: 0 0 12px 12px;\n}\n.lms-toast--success {\n  background: #fff;\n  border-left: 4px solid #16a34a;\n  color: #111827;\n}\n.lms-toast--success .lms-toast__icon,\n.lms-toast--success .lms-toast__label {\n  color: #16a34a;\n}\n.lms-toast--success .lms-toast__close {\n  color: #4b5563;\n}\n.lms-toast--success .lms-toast__progress {\n  background: #16a34a;\n}\n.lms-toast--error {\n  background: #fff;\n  border-left: 4px solid #dc2626;\n  color: #111827;\n}\n.lms-toast--error .lms-toast__icon,\n.lms-toast--error .lms-toast__label {\n  color: #dc2626;\n}\n.lms-toast--error .lms-toast__close {\n  color: #4b5563;\n}\n.lms-toast--error .lms-toast__progress {\n  background: #dc2626;\n}\n.lms-toast--warning {\n  background: #fff;\n  border-left: 4px solid #d97706;\n  color: #111827;\n}\n.lms-toast--warning .lms-toast__icon,\n.lms-toast--warning .lms-toast__label {\n  color: #d97706;\n}\n.lms-toast--warning .lms-toast__close {\n  color: #4b5563;\n}\n.lms-toast--warning .lms-toast__progress {\n  background: #d97706;\n}\n@keyframes toast-progress {\n  from {\n    width: 100%;\n  }\n  to {\n    width: 0%;\n  }\n}\n@media (max-width: 991px) {\n  .cd-hero {\n    padding-bottom: 60px;\n  }\n  .course-details {\n    margin-top: 0;\n  }\n  .cd-sidebar-wrapper {\n    margin-top: 24px;\n    position: static;\n  }\n  .cd-cta-card {\n    position: static;\n    margin-top: 32px;\n  }\n}\n@media (max-width: 767px) {\n  .cd-hero {\n    padding: 40px 0 50px;\n  }\n  .cd-hero__title {\n    font-size: 22px;\n  }\n  .cd-hero__info-grid {\n    grid-template-columns: 1fr;\n  }\n  .cd-hero__quick-stats {\n    gap: 14px;\n  }\n  .lms-toast-container {\n    top: auto;\n    bottom: 20px;\n    right: 16px;\n    left: 16px;\n  }\n  .lms-toast {\n    min-width: unset;\n    width: 100%;\n  }\n  .lms-type-card__desc {\n    display: none;\n  }\n  .lms-modal__body {\n    max-height: 65vh;\n  }\n}\n.cd-info-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: #f8f9fa;\n  border-radius: 10px;\n}\n.cd-info-item__icon {\n  font-size: 1.4rem;\n}\n.cd-demande-detail {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.cd-demande-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.cd-demande-row:last-child {\n  border-bottom: none;\n}\n.cd-demande-label {\n  font-weight: 600;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.cd-card--refus {\n  border-left: 4px solid #ef4444;\n}\n.cd-breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.cd-breadcrumb__back {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  color: #fff;\n  border-radius: 8px;\n  padding: 4px 12px;\n  cursor: pointer;\n}\n.cd-breadcrumb__back:hover {\n  background: rgba(255, 255, 255, 0.25);\n}\n.cd-breadcrumb__sep,\n.cd-breadcrumb__current {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 0.875rem;\n}\n.badge-attente {\n  background: #f59e0b;\n  color: #fff;\n}\n.badge-validee {\n  background: #10b981;\n  color: #fff;\n}\n.badge-refusee {\n  background: #ef4444;\n  color: #fff;\n}\n.badge-annulee {\n  background: #6b7280;\n  color: #fff;\n}\n.cd-card--validee {\n  border-left: 4px solid #16a34a;\n  background: #f0fdf4;\n}\n.cd-card--attente {\n  border-left: 4px solid #d97706;\n  background: #fffbeb;\n}\n.btn-success {\n  background:\n    linear-gradient(\n      135deg,\n      #069b8f 0%,\n      rgb(4.4795031056, 115.7204968944, 106.7614906832) 100%) !important;\n  border-color: #069b8f !important;\n  box-shadow: 0 3px 10px rgba(6, 155, 143, 0.35) !important;\n  color: #fff !important;\n  transition: all 0.2s ease;\n}\n.btn-success:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(6, 155, 143, 0.45) !important;\n}\n/*# sourceMappingURL=course-details-2.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: FormationsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseDetails2Component, { className: "CourseDetails2Component", filePath: "src/app/features/courses/course-details-2/course-details-2.component.ts", lineNumber: 14 });
})();
export {
  CourseDetails2Component
};
//# sourceMappingURL=chunk-XEEEZWUN.js.map
