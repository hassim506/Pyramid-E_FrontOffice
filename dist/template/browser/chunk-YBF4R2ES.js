import {
  CategorieService
} from "./chunk-66KTPOSK.js";
import {
  QuestionQuizService
} from "./chunk-II5H6G6J.js";
import {
  QuizService
} from "./chunk-NLROXVMT.js";
import {
  FormationService
} from "./chunk-R5DFAXQH.js";
import {
  AuthService
} from "./chunk-GD4TWLVQ.js";
import "./chunk-K7E3GT3E.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-5DIP3EXV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  Subscription,
  catchError,
  forkJoin,
  of,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTSSTHJF.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/courses/instructor-course-edit/instructor-course-edit.component.ts
var _c0 = (a0, a1) => ({ "progress-active": a0, "progress-activated": a1 });
var _c1 = () => ({ standalone: true });
function InstructorCourseEditComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59)(2, "div", 60)(3, "span", 61);
    \u0275\u0275text(4, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 62);
    \u0275\u0275text(6, "Chargement des donn\xE9es...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 63);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" \xC9tape actuelle : ", ctx_r1.currentStep, "\n");
  }
}
function InstructorCourseEditComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Erreur !");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "button", 66);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function InstructorCourseEditComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Succ\xE8s !");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "button", 66);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.success = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.success, " ");
  }
}
function InstructorCourseEditComponent_div_3_div_68_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 133);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r6 = ctx.$implicit;
    \u0275\u0275property("value", cat_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r6.nom);
  }
}
function InstructorCourseEditComponent_div_3_div_68_span_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 134);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 135);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_68_span_90_Template_button_click_2_listener() {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeObjectif(i_r8));
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const obj_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", obj_r9, " ");
  }
}
function InstructorCourseEditComponent_div_3_div_68_span_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 136);
    \u0275\u0275text(1, "Aucun objectif ajout\xE9");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseEditComponent_div_3_div_68_span_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 137);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 135);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_68_span_101_Template_button_click_2_listener() {
      const i_r11 = \u0275\u0275restoreView(_r10).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removePrerequis(i_r11));
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const req_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", req_r12, " ");
  }
}
function InstructorCourseEditComponent_div_3_div_68_span_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 136);
    \u0275\u0275text(1, "Aucun pr\xE9requis ajout\xE9");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseEditComponent_div_3_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91)(2, "div", 92)(3, "h4", 93);
    \u0275\u0275element(4, "i", 94);
    \u0275\u0275text(5, " Informations de base ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 95)(7, "div", 38)(8, "div", 39)(9, "label", 96);
    \u0275\u0275text(10, "Titre de la formation");
    \u0275\u0275elementStart(11, "span", 29);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "input", 97);
    \u0275\u0275elementStart(14, "div", 98);
    \u0275\u0275text(15, "Le titre est requis (min. 5 caract\xE8res)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 99)(17, "label", 96);
    \u0275\u0275text(18, "Cat\xE9gorie");
    \u0275\u0275elementStart(19, "span", 29);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "select", 100)(22, "option", 101);
    \u0275\u0275text(23, "S\xE9lectionner une cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, InstructorCourseEditComponent_div_3_div_68_option_24_Template, 2, 2, "option", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 98);
    \u0275\u0275text(26, "La cat\xE9gorie est requise");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 99)(28, "label", 96);
    \u0275\u0275text(29, "Niveau");
    \u0275\u0275elementStart(30, "span", 29);
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "select", 103)(33, "option", 104);
    \u0275\u0275text(34, "D\xE9butant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 105);
    \u0275\u0275text(36, "Interm\xE9diaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 106);
    \u0275\u0275text(38, "Avanc\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 107);
    \u0275\u0275text(40, "Expert");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 99)(42, "label", 96);
    \u0275\u0275text(43, "Langue");
    \u0275\u0275elementStart(44, "span", 29);
    \u0275\u0275text(45, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "select", 108)(47, "option", 109);
    \u0275\u0275text(48, "Fran\xE7ais");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option", 110);
    \u0275\u0275text(50, "Anglais");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "option", 111);
    \u0275\u0275text(52, "Espagnol");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div", 41)(54, "label", 96);
    \u0275\u0275text(55, "Type de formation");
    \u0275\u0275elementStart(56, "span", 29);
    \u0275\u0275text(57, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "select", 112)(59, "option", 113);
    \u0275\u0275text(60, "En ligne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "option", 114);
    \u0275\u0275text(62, "Pr\xE9sentiel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "option", 115);
    \u0275\u0275text(64, "Hybride");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 41)(66, "label", 96);
    \u0275\u0275text(67, "Nombre max de participants");
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "input", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 39)(70, "label", 96);
    \u0275\u0275text(71, "Description courte");
    \u0275\u0275elementStart(72, "span", 29);
    \u0275\u0275text(73, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(74, "input", 117);
    \u0275\u0275elementStart(75, "div", 98);
    \u0275\u0275text(76, "La description courte est requise");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 39)(78, "label", 96);
    \u0275\u0275text(79, "Description compl\xE8te");
    \u0275\u0275elementStart(80, "span", 29);
    \u0275\u0275text(81, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(82, "textarea", 118);
    \u0275\u0275elementStart(83, "div", 98);
    \u0275\u0275text(84, "La description est requise");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 41)(86, "label", 28);
    \u0275\u0275element(87, "i", 119);
    \u0275\u0275text(88, " Objectifs p\xE9dagogiques ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 120);
    \u0275\u0275template(90, InstructorCourseEditComponent_div_3_div_68_span_90_Template, 4, 1, "span", 121)(91, InstructorCourseEditComponent_div_3_div_68_span_91_Template, 2, 0, "span", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 123)(93, "input", 124);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_div_3_div_68_Template_input_ngModelChange_93_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newObjectif, $event) || (ctx_r1.newObjectif = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function InstructorCourseEditComponent_div_3_div_68_Template_input_keyup_enter_93_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addObjectif());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "button", 125);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_68_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addObjectif());
    });
    \u0275\u0275text(95, "+ Ajouter");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "div", 41)(97, "label", 28);
    \u0275\u0275element(98, "i", 126);
    \u0275\u0275text(99, " Pr\xE9requis ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 120);
    \u0275\u0275template(101, InstructorCourseEditComponent_div_3_div_68_span_101_Template, 4, 1, "span", 127)(102, InstructorCourseEditComponent_div_3_div_68_span_102_Template, 2, 0, "span", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "div", 123)(104, "input", 128);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_div_3_div_68_Template_input_ngModelChange_104_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newPrerequis, $event) || (ctx_r1.newPrerequis = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function InstructorCourseEditComponent_div_3_div_68_Template_input_keyup_enter_104_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addPrerequis());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "button", 125);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_68_Template_button_click_105_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addPrerequis());
    });
    \u0275\u0275text(106, "+ Ajouter");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(107, "div", 129)(108, "div", 52);
    \u0275\u0275element(109, "input", 130);
    \u0275\u0275elementStart(110, "label", 131);
    \u0275\u0275element(111, "i", 132);
    \u0275\u0275text(112, " Formation certifiante ");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r1.basicInfoForm);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ((tmp_5_0 = ctx_r1.basicInfoForm.get("titre")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.basicInfoForm.get("titre")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r1.basicInfoForm.get("categorie_formation_id")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.basicInfoForm.get("categorie_formation_id")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance(50);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r1.basicInfoForm.get("short_description")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.basicInfoForm.get("short_description")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-invalid", ((tmp_9_0 = ctx_r1.basicInfoForm.get("description")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.basicInfoForm.get("description")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.objectifs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.objectifs.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newObjectif);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(18, _c1));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.prerequis);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.prerequis.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPrerequis);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(19, _c1));
  }
}
function InstructorCourseEditComponent_div_3_div_69_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 168);
    \u0275\u0275element(1, "img", 169);
    \u0275\u0275elementStart(2, "div", 170)(3, "button", 171);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_69_div_20_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeImage());
    });
    \u0275\u0275element(4, "i", 172);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 173)(6, "button", 174);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_69_div_20_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      \u0275\u0275nextContext();
      const imageInput_r15 = \u0275\u0275reference(19);
      return \u0275\u0275resetView(imageInput_r15.click());
    });
    \u0275\u0275element(7, "i", 175);
    \u0275\u0275text(8, " Changer l'image ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.imagePreview, \u0275\u0275sanitizeUrl);
  }
}
function InstructorCourseEditComponent_div_3_div_69_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_69_ng_template_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      \u0275\u0275nextContext();
      const imageInput_r15 = \u0275\u0275reference(19);
      return \u0275\u0275resetView(imageInput_r15.click());
    });
    \u0275\u0275elementStart(1, "div", 177);
    \u0275\u0275element(2, "i", 178);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 162);
    \u0275\u0275text(4, "T\xE9l\xE9charger une image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 179);
    \u0275\u0275text(6, " Glissez-d\xE9posez votre image ici ou cliquez pour parcourir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 180);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_69_ng_template_21_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r16);
      \u0275\u0275nextContext();
      const imageInput_r15 = \u0275\u0275reference(19);
      $event.stopPropagation();
      return \u0275\u0275resetView(imageInput_r15.click());
    });
    \u0275\u0275element(8, "i", 181);
    \u0275\u0275text(9, " Choisir un fichier ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 173)(11, "small", 148);
    \u0275\u0275element(12, "i", 182);
    \u0275\u0275text(13, " Formats accept\xE9s : JPEG, PNG, WebP \u2022 Taille max : 5MB \u2022 R\xE9solution recommand\xE9e : 1200x600px ");
    \u0275\u0275elementEnd()()();
  }
}
function InstructorCourseEditComponent_div_3_div_69_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 183);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.imageError, " ");
  }
}
function InstructorCourseEditComponent_div_3_div_69_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 184);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_69_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearVideoUrl());
    });
    \u0275\u0275element(1, "i", 172);
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseEditComponent_div_3_div_69_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 185)(1, "small");
    \u0275\u0275element(2, "i", 186);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.videoUrlError);
  }
}
function InstructorCourseEditComponent_div_3_div_69_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 187)(1, "small");
    \u0275\u0275element(2, "i", 188);
    \u0275\u0275text(3, "URL vid\xE9o valide");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseEditComponent_div_3_div_69_div_42_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 198);
    \u0275\u0275element(1, "iframe", 199);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getYouTubeEmbedUrl((tmp_8_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_8_0.value), \u0275\u0275sanitizeResourceUrl);
  }
}
function InstructorCourseEditComponent_div_3_div_69_div_42_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 198);
    \u0275\u0275element(1, "iframe", 200);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getVimeoEmbedUrl((tmp_8_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_8_0.value), \u0275\u0275sanitizeResourceUrl);
  }
}
function InstructorCourseEditComponent_div_3_div_69_div_42_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 201)(1, "video", 202);
    \u0275\u0275text(2, " Votre navigateur ne supporte pas les vid\xE9os HTML5. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", (tmp_8_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_8_0.value, \u0275\u0275sanitizeUrl);
  }
}
function InstructorCourseEditComponent_div_3_div_69_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 189)(1, "div", 190)(2, "div", 191)(3, "h6", 192);
    \u0275\u0275element(4, "i", 193);
    \u0275\u0275text(5, " Aper\xE7u de la vid\xE9o ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 194);
    \u0275\u0275text(7, "Vid\xE9o d\xE9tect\xE9e");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 195);
    \u0275\u0275template(9, InstructorCourseEditComponent_div_3_div_69_div_42_div_9_Template, 2, 1, "div", 196)(10, InstructorCourseEditComponent_div_3_div_69_div_42_div_10_Template, 2, 1, "div", 196)(11, InstructorCourseEditComponent_div_3_div_69_div_42_div_11_Template, 3, 1, "div", 197);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.isYouTubeUrl((tmp_7_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_7_0.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isVimeoUrl((tmp_8_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_8_0.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isDirectVideoUrl((tmp_9_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_9_0.value));
  }
}
function InstructorCourseEditComponent_div_3_div_69_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 203)(1, "div", 204)(2, "div", 205);
    \u0275\u0275element(3, "i", 206);
    \u0275\u0275elementStart(4, "h6", 148);
    \u0275\u0275text(5, "Aucune vid\xE9o de pr\xE9sentation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 207);
    \u0275\u0275text(7, " Ajoutez une vid\xE9o pour pr\xE9senter votre formation aux apprenants ");
    \u0275\u0275elementEnd()()()();
  }
}
function InstructorCourseEditComponent_div_3_div_69_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129)(1, "div", 208)(2, "div", 209)(3, "h6", 210);
    \u0275\u0275element(4, "i", 211);
    \u0275\u0275text(5, " Param\xE8tres de la vid\xE9o ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 38)(7, "div", 51)(8, "div", 52);
    \u0275\u0275element(9, "input", 212);
    \u0275\u0275elementStart(10, "label", 213);
    \u0275\u0275text(11, " Lecture automatique ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 155);
    \u0275\u0275text(13, " La vid\xE9o d\xE9marre automatiquement (non recommand\xE9) ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 51)(15, "div", 52);
    \u0275\u0275element(16, "input", 214);
    \u0275\u0275elementStart(17, "label", 215);
    \u0275\u0275text(18, " Afficher les contr\xF4les ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "small", 155);
    \u0275\u0275text(20, " Permet aux utilisateurs de contr\xF4ler la lecture ");
    \u0275\u0275elementEnd()()()()()()();
  }
}
function InstructorCourseEditComponent_div_3_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91)(2, "div", 92)(3, "h4", 93);
    \u0275\u0275element(4, "i", 138);
    \u0275\u0275text(5, " M\xE9dia de la formation ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 139);
    \u0275\u0275element(7, "i", 140);
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "Information :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Ajoutez une image de couverture attractive et optionnellement une vid\xE9o de pr\xE9sentation pour donner envie aux apprenants. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "form", 95)(12, "div", 38)(13, "div", 141)(14, "label", 96);
    \u0275\u0275element(15, "i", 142);
    \u0275\u0275text(16, " Image de couverture ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 143);
    \u0275\u0275listener("dragover", function InstructorCourseEditComponent_div_3_div_69_Template_div_dragover_17_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragOver($event));
    })("dragleave", function InstructorCourseEditComponent_div_3_div_69_Template_div_dragleave_17_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragLeave($event));
    })("drop", function InstructorCourseEditComponent_div_3_div_69_Template_div_drop_17_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    });
    \u0275\u0275elementStart(18, "input", 144, 2);
    \u0275\u0275listener("change", function InstructorCourseEditComponent_div_3_div_69_Template_input_change_18_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onImageSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, InstructorCourseEditComponent_div_3_div_69_div_20_Template, 9, 1, "div", 145)(21, InstructorCourseEditComponent_div_3_div_69_ng_template_21_Template, 14, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, InstructorCourseEditComponent_div_3_div_69_div_23_Template, 3, 1, "div", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 141)(25, "label", 96);
    \u0275\u0275element(26, "i", 147);
    \u0275\u0275text(27, " Vid\xE9o de pr\xE9sentation ");
    \u0275\u0275elementStart(28, "span", 148);
    \u0275\u0275text(29, "(optionnel)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 15)(31, "div", 149)(32, "span", 150);
    \u0275\u0275element(33, "i", 151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 152);
    \u0275\u0275listener("blur", function InstructorCourseEditComponent_div_3_div_69_Template_input_blur_34_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.validateVideoUrl());
    })("input", function InstructorCourseEditComponent_div_3_div_69_Template_input_input_34_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onVideoUrlChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, InstructorCourseEditComponent_div_3_div_69_button_35_Template, 2, 0, "button", 153);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 154)(37, "small", 155);
    \u0275\u0275element(38, "i", 156);
    \u0275\u0275text(39, " Plateformes support\xE9es : YouTube, Vimeo, ou lien direct vers une vid\xE9o ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, InstructorCourseEditComponent_div_3_div_69_div_40_Template, 4, 1, "div", 157)(41, InstructorCourseEditComponent_div_3_div_69_div_41_Template, 4, 0, "div", 158);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, InstructorCourseEditComponent_div_3_div_69_div_42_Template, 12, 3, "div", 159)(43, InstructorCourseEditComponent_div_3_div_69_div_43_Template, 8, 0, "div", 160);
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, InstructorCourseEditComponent_div_3_div_69_div_44_Template, 21, 0, "div", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 161)(46, "h6", 162);
    \u0275\u0275element(47, "i", 163);
    \u0275\u0275text(48, " R\xE9sum\xE9 de cette section ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 38)(50, "div", 51)(51, "p", 164);
    \u0275\u0275element(52, "i", 165);
    \u0275\u0275text(53, " Image de couverture : ");
    \u0275\u0275elementStart(54, "span", 166);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 51)(57, "p", 164);
    \u0275\u0275element(58, "i", 167);
    \u0275\u0275text(59, " Vid\xE9o de pr\xE9sentation : ");
    \u0275\u0275elementStart(60, "span", 166);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_20_0;
    let tmp_21_0;
    const noImageTemplate_r18 = \u0275\u0275reference(22);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx_r1.mediaForm);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-primary", ctx_r1.isDragOver)("bg-light", !ctx_r1.imagePreview);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.imagePreview)("ngIfElse", noImageTemplate_r18);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.imageError);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", (tmp_12_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_12_0.value);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.videoUrlError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.videoUrlValid && ((tmp_14_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_14_0.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_15_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_15_0.value) && ctx_r1.videoUrlValid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_16_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_16_0.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_17_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_17_0.value) && ctx_r1.videoUrlValid);
    \u0275\u0275advance(10);
    \u0275\u0275classMap(ctx_r1.imagePreview ? "text-success" : "text-muted");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.imagePreview ? "Ajout\xE9e" : "Non d\xE9finie", " ");
    \u0275\u0275advance(5);
    \u0275\u0275classMap(((tmp_20_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_20_0.value) && ctx_r1.videoUrlValid ? "text-success" : "text-muted");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_21_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_21_0.value) && ctx_r1.videoUrlValid ? "Configur\xE9e" : "Non d\xE9finie", " ");
  }
}
function InstructorCourseEditComponent_div_3_div_70_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 223)(1, "div", 224)(2, "div", 225)(3, "div", 226);
    \u0275\u0275element(4, "i", 227);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 228)(6, "span", 229);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 230);
    \u0275\u0275text(9, "Modules");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 224)(11, "div", 231)(12, "div", 226);
    \u0275\u0275element(13, "i", 232);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 228)(15, "span", 229);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 230);
    \u0275\u0275text(18, "Sections");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 224)(20, "div", 233)(21, "div", 226);
    \u0275\u0275element(22, "i", 234);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 228)(24, "span", 229);
    \u0275\u0275text(25);
    \u0275\u0275elementStart(26, "small");
    \u0275\u0275text(27, " min");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "span", 230);
    \u0275\u0275text(29, "Dur\xE9e totale");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.modules.length);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.getTotalSections());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.getTotalDuration());
  }
}
function InstructorCourseEditComponent_div_3_div_70_div_11_div_1_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 179);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", module_r22.description, " ");
  }
}
function InstructorCourseEditComponent_div_3_div_70_div_11_div_1_div_20_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 260);
    \u0275\u0275text(1, "Obligatoire");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseEditComponent_div_3_div_70_div_11_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 255)(1, "div", 256);
    \u0275\u0275element(2, "i", 257);
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "br");
    \u0275\u0275elementStart(7, "small", 148);
    \u0275\u0275text(8);
    \u0275\u0275template(9, InstructorCourseEditComponent_div_3_div_70_div_11_div_1_div_20_span_9_Template, 2, 0, "span", 258);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 259)(11, "button", 244);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_70_div_11_div_1_div_20_Template_button_click_11_listener() {
      const sectionIndex_r24 = \u0275\u0275restoreView(_r23).index;
      const moduleIndex_r21 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editSection(moduleIndex_r21, sectionIndex_r24));
    });
    \u0275\u0275element(12, "i", 245);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 246);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_70_div_11_div_1_div_20_Template_button_click_13_listener() {
      const sectionIndex_r24 = \u0275\u0275restoreView(_r23).index;
      const moduleIndex_r21 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeSection(moduleIndex_r21, sectionIndex_r24));
    });
    \u0275\u0275element(14, "i", 247);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r25 = ctx.$implicit;
    const sectionIndex_r24 = ctx.index;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", sectionIndex_r24 + 1, ". ", section_r25.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", section_r25.type, " \xB7 ", section_r25.duree_estimee, " min ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", section_r25.obligatoire);
  }
}
function InstructorCourseEditComponent_div_3_div_70_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 237)(1, "h2", 238)(2, "button", 239)(3, "div", 240);
    \u0275\u0275element(4, "i", 241);
    \u0275\u0275elementStart(5, "div", 242)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "br");
    \u0275\u0275elementStart(9, "small", 148);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 243);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_70_div_11_div_1_Template_div_click_11_listener($event) {
      \u0275\u0275restoreView(_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(12, "button", 244);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_70_div_11_div_1_Template_button_click_12_listener() {
      const moduleIndex_r21 = \u0275\u0275restoreView(_r20).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editModule(moduleIndex_r21));
    });
    \u0275\u0275element(13, "i", 245);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 246);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_70_div_11_div_1_Template_button_click_14_listener() {
      const moduleIndex_r21 = \u0275\u0275restoreView(_r20).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeModule(moduleIndex_r21));
    });
    \u0275\u0275element(15, "i", 247);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(16, "div", 248)(17, "div", 249);
    \u0275\u0275template(18, InstructorCourseEditComponent_div_3_div_70_div_11_div_1_p_18_Template, 2, 1, "p", 250);
    \u0275\u0275elementStart(19, "div", 251);
    \u0275\u0275template(20, InstructorCourseEditComponent_div_3_div_70_div_11_div_1_div_20_Template, 15, 5, "div", 252);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 253);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_70_div_11_div_1_Template_button_click_21_listener() {
      const moduleIndex_r21 = \u0275\u0275restoreView(_r20).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openSectionModal(moduleIndex_r21));
    });
    \u0275\u0275element(22, "i", 254);
    \u0275\u0275text(23, " Ajouter une section ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const module_r22 = ctx.$implicit;
    const moduleIndex_r21 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("collapsed", moduleIndex_r21 !== 0);
    \u0275\u0275attribute("data-bs-toggle", "collapse")("data-bs-target", "#module-" + moduleIndex_r21);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(module_r22.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", (module_r22.sections == null ? null : module_r22.sections.length) || 0, " sections \xB7 ", ctx_r1.getModuleDuration(module_r22), " min ");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("show", moduleIndex_r21 === 0);
    \u0275\u0275property("id", "module-" + moduleIndex_r21);
    \u0275\u0275attribute("data-bs-parent", "#modulesAccordion");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", module_r22.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", module_r22.sections);
  }
}
function InstructorCourseEditComponent_div_3_div_70_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 235);
    \u0275\u0275template(1, InstructorCourseEditComponent_div_3_div_70_div_11_div_1_Template, 24, 13, "div", 236);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.modules);
  }
}
function InstructorCourseEditComponent_div_3_div_70_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 261);
    \u0275\u0275element(1, "i", 262);
    \u0275\u0275elementStart(2, "h5", 148);
    \u0275\u0275text(3, "Aucun module cr\xE9\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 148);
    \u0275\u0275text(5, "Commencez par cr\xE9er votre premier module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 18);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_70_div_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openModuleModal());
    });
    \u0275\u0275element(7, "i", 219);
    \u0275\u0275text(8, " Cr\xE9er le premier module ");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseEditComponent_div_3_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91)(2, "div", 92)(3, "div", 216)(4, "h4", 217);
    \u0275\u0275element(5, "i", 218);
    \u0275\u0275text(6, " Modules et Sections ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 18);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_70_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openModuleModal());
    });
    \u0275\u0275element(8, "i", 219);
    \u0275\u0275text(9, " Ajouter un module ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, InstructorCourseEditComponent_div_3_div_70_div_10_Template, 30, 3, "div", 220)(11, InstructorCourseEditComponent_div_3_div_70_div_11_Template, 2, 1, "div", 221)(12, InstructorCourseEditComponent_div_3_div_70_div_12_Template, 9, 0, "div", 222);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.modules.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.modules.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.modules.length === 0);
  }
}
function InstructorCourseEditComponent_div_3_div_71_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 268);
  }
}
function InstructorCourseEditComponent_div_3_div_71_i_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 269);
  }
}
function InstructorCourseEditComponent_div_3_div_71_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "i", 140);
    \u0275\u0275text(2, " Aucune section de type ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " dans vos modules. Retournez \xE0 l'\xE9tape Modules & Sections pour en ajouter une. ");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseEditComponent_div_3_div_71_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 275);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_71_div_12_div_4_Template_div_click_0_listener() {
      const qs_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectQuiz(qs_r29.moduleIndex, qs_r29.sectionIndex));
    });
    \u0275\u0275element(1, "i", 276);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "small", 148);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const qs_r29 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("background", ctx_r1.activeQuizKey === ctx_r1.getQuizKey(qs_r29.moduleIndex, qs_r29.sectionIndex) ? "#ede9fe" : "#f9fafb");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(qs_r29.sectionTitle);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(qs_r29.moduleTitle);
  }
}
function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 280);
    \u0275\u0275element(1, "div", 281);
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_div_14_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 311)(1, "input", 312);
    \u0275\u0275listener("change", function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_div_14_div_3_div_2_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r36);
      const opt_r35 = \u0275\u0275nextContext().$implicit;
      const q_r32 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.toggleQuizCorrect(q_r32, opt_r35));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 313);
    \u0275\u0275text(3, "Correcte");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r35 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("checked", opt_r35.is_correct);
  }
}
function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_div_14_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 311)(1, "input", 314);
    \u0275\u0275listener("change", function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_div_14_div_3_div_3_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r37);
      const opt_r35 = \u0275\u0275nextContext().$implicit;
      const q_r32 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.toggleQuizCorrect(q_r32, opt_r35));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 315);
    \u0275\u0275text(3, "Correcte");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r35 = \u0275\u0275nextContext().$implicit;
    const q_r32 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("name", "tf_" + q_r32.id)("checked", opt_r35.is_correct);
  }
}
function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_div_14_div_3_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 316);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_div_14_div_3_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r38);
      const oi_r39 = \u0275\u0275nextContext().index;
      const q_r32 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.removeQuizOption(q_r32, oi_r39));
    });
    \u0275\u0275element(1, "i", 172);
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_div_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 307)(1, "input", 308);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_div_14_div_3_Template_input_ngModelChange_1_listener($event) {
      const opt_r35 = \u0275\u0275restoreView(_r34).$implicit;
      \u0275\u0275twoWayBindingSet(opt_r35.reponse_text, $event) || (opt_r35.reponse_text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_div_14_div_3_div_2_Template, 4, 1, "div", 309)(3, InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_div_14_div_3_div_3_Template, 4, 2, "div", 309)(4, InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_div_14_div_3_button_4_Template, 2, 0, "button", 310);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r35 = ctx.$implicit;
    const q_r32 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", opt_r35.reponse_text);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r32.type !== "true_false");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r32.type === "true_false");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r32.type !== "true_false");
  }
}
function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_div_14_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 317);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_div_14_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r40);
      const q_r32 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.addQuizOption(q_r32));
    });
    \u0275\u0275element(1, "i", 254);
    \u0275\u0275text(2, " R\xE9ponse");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 28);
    \u0275\u0275text(2, "R\xE9ponses");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_div_14_div_3_Template, 5, 6, "div", 305)(4, InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_div_14_button_4_Template, 3, 0, "button", 306);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r32 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", q_r32.reponses);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r32.type !== "true_false");
  }
}
function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 301)(1, "div", 162)(2, "label", 28);
    \u0275\u0275text(3, "Question");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 302);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r33);
      const q_r32 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(q_r32.question_text, $event) || (q_r32.question_text = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 303)(6, "div", 51)(7, "label", 28);
    \u0275\u0275text(8, "Points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 287);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r33);
      const q_r32 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(q_r32.points, $event) || (q_r32.points = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 51)(11, "label", 28);
    \u0275\u0275text(12, "Explication");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 304);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r33);
      const q_r32 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(q_r32.explication, $event) || (q_r32.explication = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_div_14_Template, 5, 2, "div", 279);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r32 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", q_r32.question_text);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c1));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", q_r32.points);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c1));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", q_r32.explication);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r32.type !== "text");
  }
}
function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 295)(1, "div", 296);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_Template_div_click_1_listener() {
      const q_r32 = \u0275\u0275restoreView(_r31).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.toggleQuizQuestion(q_r32.id));
    });
    \u0275\u0275elementStart(2, "span", 297);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 86)(5, "span", 298);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 299);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_Template_button_click_7_listener($event) {
      const q_r32 = \u0275\u0275restoreView(_r31).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.removeQuizQuestion(q_r32));
    });
    \u0275\u0275element(8, "i", 247);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_div_9_Template, 15, 10, "div", 300);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r32 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r32.question_text || "(sans titre)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getTypeLabel(q_r32.type));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.expandedQuestion === q_r32.id);
  }
}
function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 282)(2, "div", 283)(3, "label", 96);
    \u0275\u0275text(4, "Titre du quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 284);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.activeLocalQuiz.titre, $event) || (ctx_r1.activeLocalQuiz.titre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 224)(7, "label", 96);
    \u0275\u0275text(8, "Dur\xE9e (min)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 285);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.activeLocalQuiz.duree_minutes, $event) || (ctx_r1.activeLocalQuiz.duree_minutes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 51)(11, "label", 96);
    \u0275\u0275text(12, "Score minimum (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 286);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.activeLocalQuiz.score_minimum, $event) || (ctx_r1.activeLocalQuiz.score_minimum = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 51)(15, "label", 96);
    \u0275\u0275text(16, "Tentatives max");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 287);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.activeLocalQuiz.tentatives_max, $event) || (ctx_r1.activeLocalQuiz.tentatives_max = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_div_18_Template, 10, 3, "div", 288);
    \u0275\u0275elementStart(19, "div", 289)(20, "button", 290);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.addQuizQuestion("multiple_choice"));
    });
    \u0275\u0275element(21, "i", 291);
    \u0275\u0275text(22, " Choix unique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 290);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.addQuizQuestion("multiple_choice_multi"));
    });
    \u0275\u0275element(24, "i", 292);
    \u0275\u0275text(25, " Choix multiple");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 290);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.addQuizQuestion("true_false"));
    });
    \u0275\u0275element(27, "i", 293);
    \u0275\u0275text(28, " Vrai / Faux");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 290);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.addQuizQuestion("text"));
    });
    \u0275\u0275element(30, "i", 294);
    \u0275\u0275text(31, " Texte libre");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.activeLocalQuiz.titre);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c1));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.activeLocalQuiz.duree_minutes);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(10, _c1));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.activeLocalQuiz.score_minimum);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(11, _c1));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.activeLocalQuiz.tentatives_max);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(12, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.activeLocalQuiz.questions);
  }
}
function InstructorCourseEditComponent_div_3_div_71_div_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 277);
    \u0275\u0275template(1, InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_1_Template, 2, 0, "div", 278)(2, InstructorCourseEditComponent_div_3_div_71_div_12_div_5_div_2_Template, 32, 13, "div", 279);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingQuiz);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingQuiz);
  }
}
function InstructorCourseEditComponent_div_3_div_71_div_12_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 318)(1, "span");
    \u0275\u0275text(2, "S\xE9lectionnez une section quiz \xE0 gauche pour l'\xE9diter.");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseEditComponent_div_3_div_71_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 270)(1, "div", 271)(2, "p", 272);
    \u0275\u0275text(3, "Sections quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, InstructorCourseEditComponent_div_3_div_71_div_12_div_4_Template, 7, 4, "div", 273);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, InstructorCourseEditComponent_div_3_div_71_div_12_div_5_Template, 3, 2, "div", 274)(6, InstructorCourseEditComponent_div_3_div_71_div_12_ng_template_6_Template, 3, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noQuizSelected_r41 = \u0275\u0275reference(7);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.getQuizSections());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeLocalQuiz)("ngIfElse", noQuizSelected_r41);
  }
}
function InstructorCourseEditComponent_div_3_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91)(2, "div", 92)(3, "div", 216)(4, "h4", 217);
    \u0275\u0275element(5, "i", 263);
    \u0275\u0275text(6, " Quiz des modules ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 264);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_71_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveActiveQuiz());
    });
    \u0275\u0275template(8, InstructorCourseEditComponent_div_3_div_71_span_8_Template, 1, 0, "span", 57)(9, InstructorCourseEditComponent_div_3_div_71_i_9_Template, 1, 0, "i", 265);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, InstructorCourseEditComponent_div_3_div_71_div_11_Template, 6, 0, "div", 266)(12, InstructorCourseEditComponent_div_3_div_71_div_12_Template, 8, 3, "div", 267);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.saving || !ctx_r1.activeLocalQuiz);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Enregistrement..." : "Enregistrer ce quiz", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getQuizSections().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getQuizSections().length > 0);
  }
}
function InstructorCourseEditComponent_div_3_div_72_span_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 351);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 135);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_72_span_45_Template_button_click_2_listener() {
      const i_r44 = \u0275\u0275restoreView(_r43).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeCompetence(i_r44));
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const comp_r45 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", comp_r45, " ");
  }
}
function InstructorCourseEditComponent_div_3_div_72_span_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 136);
    \u0275\u0275text(1, "Aucune comp\xE9tence ajout\xE9e");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseEditComponent_div_3_div_72_span_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 352);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 135);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_72_span_56_Template_button_click_2_listener() {
      const i_r47 = \u0275\u0275restoreView(_r46).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeOutil(i_r47));
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const outil_r48 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", outil_r48, " ");
  }
}
function InstructorCourseEditComponent_div_3_div_72_span_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 136);
    \u0275\u0275text(1, "Aucun outil ajout\xE9");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseEditComponent_div_3_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91)(2, "div", 92)(3, "h4", 93);
    \u0275\u0275element(4, "i", 94);
    \u0275\u0275text(5, " Informations suppl\xE9mentaires ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 95)(7, "div", 38)(8, "div", 319)(9, "h5", 320);
    \u0275\u0275element(10, "i", 321);
    \u0275\u0275text(11, " D\xE9tails de la formation ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 99)(13, "label", 96);
    \u0275\u0275text(14, "Difficult\xE9");
    \u0275\u0275elementStart(15, "span", 29);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 322)(18, "option", 323);
    \u0275\u0275text(19, "Facile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 324);
    \u0275\u0275text(21, "Moyen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 325);
    \u0275\u0275text(23, "Difficile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 107);
    \u0275\u0275text(25, "Expert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 98);
    \u0275\u0275text(27, "Le niveau de difficult\xE9 est requis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 99)(29, "label", 96);
    \u0275\u0275text(30, "Dur\xE9e totale (heures)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 326);
    \u0275\u0275elementStart(32, "small", 148);
    \u0275\u0275text(33, "Estimation du temps total n\xE9cessaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 98);
    \u0275\u0275text(35, "La dur\xE9e doit \xEAtre d'au moins 1 heure");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 327)(37, "h5", 320);
    \u0275\u0275element(38, "i", 328);
    \u0275\u0275text(39, " Contenu et comp\xE9tences ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 41)(41, "label", 28);
    \u0275\u0275element(42, "i", 329);
    \u0275\u0275text(43, " Comp\xE9tences acquises ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 120);
    \u0275\u0275template(45, InstructorCourseEditComponent_div_3_div_72_span_45_Template, 4, 1, "span", 330)(46, InstructorCourseEditComponent_div_3_div_72_span_46_Template, 2, 0, "span", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 123)(48, "input", 331);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_div_3_div_72_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCompetence, $event) || (ctx_r1.newCompetence = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function InstructorCourseEditComponent_div_3_div_72_Template_input_keyup_enter_48_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addCompetence());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 125);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_72_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addCompetence());
    });
    \u0275\u0275text(50, "+ Ajouter");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 41)(52, "label", 28);
    \u0275\u0275element(53, "i", 332);
    \u0275\u0275text(54, " Outils requis ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 120);
    \u0275\u0275template(56, InstructorCourseEditComponent_div_3_div_72_span_56_Template, 4, 1, "span", 333)(57, InstructorCourseEditComponent_div_3_div_72_span_57_Template, 2, 0, "span", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 123)(59, "input", 334);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_div_3_div_72_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newOutil, $event) || (ctx_r1.newOutil = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function InstructorCourseEditComponent_div_3_div_72_Template_input_keyup_enter_59_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addOutil());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 125);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_72_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addOutil());
    });
    \u0275\u0275text(61, "+ Ajouter");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 327)(63, "h5", 320);
    \u0275\u0275element(64, "i", 335);
    \u0275\u0275text(65, " Public cible et marketing ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 39)(67, "label", 96);
    \u0275\u0275text(68, "Public cible");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "textarea", 336);
    \u0275\u0275elementStart(70, "small", 148);
    \u0275\u0275text(71, "D\xE9crivez pr\xE9cis\xE9ment votre audience cible");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 39)(73, "label", 96);
    \u0275\u0275text(74, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "input", 337);
    \u0275\u0275elementStart(76, "small", 148);
    \u0275\u0275text(77, "Maximum 10 tags, s\xE9par\xE9s par des virgules. Utiles pour la recherche.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 327)(79, "h5", 320);
    \u0275\u0275element(80, "i", 211);
    \u0275\u0275text(81, " Param\xE8tres avanc\xE9s ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 41)(83, "label", 96);
    \u0275\u0275text(84, "Date de d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275element(85, "input", 338);
    \u0275\u0275elementStart(86, "small", 148);
    \u0275\u0275text(87, "Date de d\xE9but pr\xE9vue (optionnel)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 41)(89, "label", 96);
    \u0275\u0275text(90, "Date de fin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(91, "input", 339);
    \u0275\u0275elementStart(92, "small", 148);
    \u0275\u0275text(93, "Date de fin pr\xE9vue (optionnel)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 39)(95, "label", 96);
    \u0275\u0275text(96, "M\xE9tadonn\xE9es (JSON)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(97, "textarea", 340);
    \u0275\u0275elementStart(98, "small", 148);
    \u0275\u0275text(99, "Informations techniques au format JSON (optionnel)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "div", 327)(101, "h5", 320);
    \u0275\u0275element(102, "i", 341);
    \u0275\u0275text(103, " Options de publication ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 99)(105, "div", 52);
    \u0275\u0275element(106, "input", 342);
    \u0275\u0275elementStart(107, "label", 343);
    \u0275\u0275element(108, "i", 344);
    \u0275\u0275text(109, " Inscriptions ouvertes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "small", 155);
    \u0275\u0275text(111, " Les utilisateurs peuvent s'inscrire \xE0 cette formation ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(112, "div", 99)(113, "div", 52);
    \u0275\u0275element(114, "input", 345);
    \u0275\u0275elementStart(115, "label", 346);
    \u0275\u0275element(116, "i", 347);
    \u0275\u0275text(117, " Formation publi\xE9e ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "small", 155);
    \u0275\u0275text(119, " La formation est visible publiquement ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(120, "div", 348)(121, "div", 349)(122, "div", 209)(123, "h6", 210);
    \u0275\u0275element(124, "i", 163);
    \u0275\u0275text(125, " R\xE9sum\xE9 des informations suppl\xE9mentaires ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "div", 38)(127, "div", 51)(128, "ul", 350)(129, "li", 164)(130, "strong");
    \u0275\u0275text(131, "Difficult\xE9:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(132);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "li", 164)(134, "strong");
    \u0275\u0275text(135, "Co\xFBt:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "span");
    \u0275\u0275text(137);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(138, "li", 164)(139, "strong");
    \u0275\u0275text(140, "Dur\xE9e:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(141);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(142, "div", 51)(143, "ul", 350)(144, "li", 164)(145, "strong");
    \u0275\u0275text(146, "Comp\xE9tences:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(147);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "li", 164)(149, "strong");
    \u0275\u0275text(150, "Outils requis:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "li", 164)(153, "strong");
    \u0275\u0275text(154, "Inscriptions:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "span");
    \u0275\u0275text(156);
    \u0275\u0275elementEnd()()()()()()()()()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_21_0;
    let tmp_22_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r1.additionalInfoForm);
    \u0275\u0275advance(11);
    \u0275\u0275classProp("is-invalid", ((tmp_5_0 = ctx_r1.additionalInfoForm.get("difficulte")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.additionalInfoForm.get("difficulte")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(14);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r1.additionalInfoForm.get("duree_totale")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.additionalInfoForm.get("duree_totale")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.competencesAcquises);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.competencesAcquises.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCompetence);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(23, _c1));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.outilsRequis);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.outilsRequis.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newOutil);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(24, _c1));
    \u0275\u0275advance(73);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getDifficulteLabel((tmp_15_0 = ctx_r1.additionalInfoForm.get("difficulte")) == null ? null : tmp_15_0.value), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(((tmp_16_0 = ctx_r1.additionalInfoForm.get("prix")) == null ? null : tmp_16_0.value) == 0 ? "text-success" : "text-primary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_17_0 = ctx_r1.additionalInfoForm.get("prix")) == null ? null : tmp_17_0.value) == 0 ? "GRATUIT" : ((tmp_17_0 = ctx_r1.additionalInfoForm.get("prix")) == null ? null : tmp_17_0.value) + "XOF", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ((tmp_18_0 = ctx_r1.additionalInfoForm.get("duree_totale")) == null ? null : tmp_18_0.value) || "Non d\xE9finie", "h ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCompetencesCount(), " d\xE9finie(s) ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getOutilsCount(), " d\xE9fini(s) ");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(((tmp_21_0 = ctx_r1.additionalInfoForm.get("inscription_ouverte")) == null ? null : tmp_21_0.value) ? "text-success" : "text-warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_22_0 = ctx_r1.additionalInfoForm.get("inscription_ouverte")) == null ? null : tmp_22_0.value) ? "Ouvertes" : "Ferm\xE9es", " ");
  }
}
function InstructorCourseEditComponent_div_3_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91)(2, "div", 92)(3, "h4", 93);
    \u0275\u0275element(4, "i", 353);
    \u0275\u0275text(5, " Estimation des co\xFBts de formation ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 139);
    \u0275\u0275element(7, "i", 140);
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "Information :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Cette estimation permet aux entreprises d'\xE9valuer le budget n\xE9cessaire pour cette formation. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "form", 95)(12, "div", 38)(13, "div", 141)(14, "h5", 354);
    \u0275\u0275element(15, "i", 355);
    \u0275\u0275text(16, " Co\xFBts de d\xE9veloppement ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 41)(18, "label", 96);
    \u0275\u0275text(19, "Co\xFBt de conception (XOF)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 356);
    \u0275\u0275elementStart(21, "small", 148);
    \u0275\u0275text(22, "Analyse des besoins, conception p\xE9dagogique");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 41)(24, "label", 96);
    \u0275\u0275text(25, "Co\xFBt de production (XOF)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 357);
    \u0275\u0275elementStart(27, "small", 148);
    \u0275\u0275text(28, "Cr\xE9ation du contenu, vid\xE9os, exercices");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 358)(30, "h5", 354);
    \u0275\u0275element(31, "i", 359);
    \u0275\u0275text(32, " Co\xFBts de livraison ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 41)(34, "label", 96);
    \u0275\u0275text(35, "Co\xFBt formateur par jour (XOF)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 360);
    \u0275\u0275elementStart(37, "small", 148);
    \u0275\u0275text(38, "Tarif journalier du formateur");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 41)(40, "label", 96);
    \u0275\u0275text(41, "Frais logistiques par participant (XOF)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 361);
    \u0275\u0275elementStart(43, "small", 148);
    \u0275\u0275text(44, "Mat\xE9riel, documentation, pauses");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 362)(46, "div", 208)(47, "div", 209)(48, "h5", 210);
    \u0275\u0275element(49, "i", 363);
    \u0275\u0275text(50, " Estimation totale ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 38)(52, "div", 51)(53, "div", 364)(54, "span");
    \u0275\u0275text(55, "Co\xFBts de d\xE9veloppement :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "strong");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 364)(59, "span");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "strong");
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 364)(64, "span");
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "strong");
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(68, "hr");
    \u0275\u0275elementStart(69, "div", 364)(70, "span")(71, "strong");
    \u0275\u0275text(72, "Co\xFBt total estim\xE9 :");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "strong", 365);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(75, "div", 51)(76, "div", 364)(77, "span");
    \u0275\u0275text(78, "Co\xFBt par participant :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "strong", 366);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 364)(82, "span");
    \u0275\u0275text(83, "Co\xFBt par heure :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "strong", 367);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(86, "div", 368)(87, "label", 96);
    \u0275\u0275text(88, "Notes sur l'estimation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(89, "textarea", 369);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx_r1.pricingForm);
    \u0275\u0275advance(46);
    \u0275\u0275textInterpolate1("", ctx_r1.getCoutDeveloppement(), " XOF");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Co\xFBt formateur (", ctx_r1.getFormControlValue("nb_jours") || 1, " jour", (ctx_r1.getFormControlValue("nb_jours") || 1) > 1 ? "s" : "", ") :");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getCoutFormateur(), " XOF");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Logistique (", ctx_r1.getFormControlValue("nb_max_participants") || 1, " participant", (ctx_r1.getFormControlValue("nb_max_participants") || 1) > 1 ? "s" : "", ") :");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getCoutLogistique(), " XOF");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.getCoutTotal(), " XOF");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.getCoutParticipant(), " XOF");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.getCoutParHeure(), " XOF");
  }
}
function InstructorCourseEditComponent_div_3_button_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_button_78_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r49);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevStep());
    });
    \u0275\u0275element(1, "i", 370);
    \u0275\u0275text(2, " Retour ");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseEditComponent_div_3_button_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_button_79_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r50);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275text(1, " Suivant ");
    \u0275\u0275element(2, "i", 371);
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseEditComponent_div_3_button_80_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 375);
  }
}
function InstructorCourseEditComponent_div_3_button_80_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 376);
  }
}
function InstructorCourseEditComponent_div_3_button_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 372);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_button_80_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateCourse());
    });
    \u0275\u0275template(1, InstructorCourseEditComponent_div_3_button_80_span_1_Template, 1, 0, "span", 373)(2, InstructorCourseEditComponent_div_3_button_80_i_2_Template, 1, 0, "i", 374);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Mise \xE0 jour..." : "Mettre \xE0 jour la formation", " ");
  }
}
function InstructorCourseEditComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70)(2, "div", 38)(3, "div", 71)(4, "div", 72)(5, "div", 73)(6, "ul", 74)(7, "li", 75)(8, "div", 76)(9, "span", 77)(10, "span", 78);
    \u0275\u0275text(11, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 79);
    \u0275\u0275element(13, "i", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 81)(15, "p");
    \u0275\u0275text(16, "Informations de base");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "li", 75)(18, "div", 76)(19, "span", 77)(20, "span", 78);
    \u0275\u0275text(21, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 79);
    \u0275\u0275element(23, "i", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 81)(25, "p");
    \u0275\u0275text(26, "M\xE9dia");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "li", 75)(28, "div", 76)(29, "span", 77)(30, "span", 78);
    \u0275\u0275text(31, "03");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 79);
    \u0275\u0275element(33, "i", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 81)(35, "p");
    \u0275\u0275text(36, "Modules & Sections");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "li", 75)(38, "div", 76)(39, "span", 77)(40, "span", 78);
    \u0275\u0275text(41, "04");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 79);
    \u0275\u0275element(43, "i", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 81)(45, "p");
    \u0275\u0275text(46, "Quiz");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "li", 75)(48, "div", 76)(49, "span", 77)(50, "span", 78);
    \u0275\u0275text(51, "05");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 79);
    \u0275\u0275element(53, "i", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 81)(55, "p");
    \u0275\u0275text(56, "Informations");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "li", 75)(58, "div", 76)(59, "span", 77)(60, "span", 78);
    \u0275\u0275text(61, "06");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span", 79);
    \u0275\u0275element(63, "i", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 81)(65, "p");
    \u0275\u0275text(66, "Co\xFBt estimatif");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(67, "div", 82);
    \u0275\u0275template(68, InstructorCourseEditComponent_div_3_div_68_Template, 113, 20, "div", 83)(69, InstructorCourseEditComponent_div_3_div_69_Template, 62, 20, "div", 83)(70, InstructorCourseEditComponent_div_3_div_70_Template, 13, 3, "div", 83)(71, InstructorCourseEditComponent_div_3_div_71_Template, 13, 6, "div", 83)(72, InstructorCourseEditComponent_div_3_div_72_Template, 157, 25, "div", 83)(73, InstructorCourseEditComponent_div_3_div_73_Template, 90, 11, "div", 83);
    \u0275\u0275elementStart(74, "div", 84)(75, "span", 85);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 86);
    \u0275\u0275template(78, InstructorCourseEditComponent_div_3_button_78_Template, 3, 0, "button", 87)(79, InstructorCourseEditComponent_div_3_button_79_Template, 3, 0, "button", 88)(80, InstructorCourseEditComponent_div_3_button_80_Template, 4, 4, "button", 89);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(16, _c0, ctx_r1.currentStep === 0, ctx_r1.currentStep > 0));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(19, _c0, ctx_r1.currentStep === 1, ctx_r1.currentStep > 1));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(22, _c0, ctx_r1.currentStep === 2, ctx_r1.currentStep > 2));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(25, _c0, ctx_r1.currentStep === 3, ctx_r1.currentStep > 3));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(28, _c0, ctx_r1.currentStep === 4, ctx_r1.currentStep > 4));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(31, _c0, ctx_r1.currentStep === 5, ctx_r1.currentStep > 5));
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r1.currentStep === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep === 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep === 4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep === 5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\xC9tape ", ctx_r1.currentStep + 1, " sur 6");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentStep > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep < 5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep === 5);
  }
}
function InstructorCourseEditComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "label", 28);
    \u0275\u0275text(2, "Contenu texte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 377);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_div_87_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r52);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.currentSection.contenu, $event) || (ctx_r1.currentSection.contenu = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.currentSection.contenu);
  }
}
function InstructorCourseEditComponent_div_88_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 382);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_div_88_ng_container_10_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.currentSection.ressources, $event) || (ctx_r1.currentSection.ressources = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "small", 148);
    \u0275\u0275text(3, "YouTube, Vimeo ou lien direct (.mp4 / .webm)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.currentSection.ressources);
  }
}
function InstructorCourseEditComponent_div_88_ng_container_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 385);
    \u0275\u0275element(1, "i", 386);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.sectionUploadFile.name, " ");
  }
}
function InstructorCourseEditComponent_div_88_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 383);
    \u0275\u0275listener("change", function InstructorCourseEditComponent_div_88_ng_container_11_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r55);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSectionFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "small", 148);
    \u0275\u0275text(3, "Formats : MP4, WebM, OGG");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, InstructorCourseEditComponent_div_88_ng_container_11_div_4_Template, 3, 1, "div", 384);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.sectionUploadFile);
  }
}
function InstructorCourseEditComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "label", 28);
    \u0275\u0275text(2, "Source vid\xE9o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 378)(4, "button", 379);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_88_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r53);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.sectionVideoMode = "url";
      ctx_r1.sectionUploadFile = null;
      return \u0275\u0275resetView(ctx_r1.currentSection.ressources = "");
    });
    \u0275\u0275element(5, "i", 380);
    \u0275\u0275text(6, " URL ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 379);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_88_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r53);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.sectionVideoMode = "upload";
      return \u0275\u0275resetView(ctx_r1.currentSection.ressources = "");
    });
    \u0275\u0275element(8, "i", 381);
    \u0275\u0275text(9, " Upload fichier ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, InstructorCourseEditComponent_div_88_ng_container_10_Template, 4, 1, "ng-container", 279)(11, InstructorCourseEditComponent_div_88_ng_container_11_Template, 5, 1, "ng-container", 279);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("btn-primary", ctx_r1.sectionVideoMode === "url")("btn-outline-secondary", ctx_r1.sectionVideoMode !== "url");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("btn-primary", ctx_r1.sectionVideoMode === "upload")("btn-outline-secondary", ctx_r1.sectionVideoMode !== "upload");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.sectionVideoMode === "url");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sectionVideoMode === "upload");
  }
}
function InstructorCourseEditComponent_div_89_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154);
    \u0275\u0275element(1, "img", 390);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.sectionUploadPreview, \u0275\u0275sanitizeUrl);
  }
}
function InstructorCourseEditComponent_div_89_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 391);
    \u0275\u0275element(1, "i", 188);
    \u0275\u0275text(2, " Image existante conserv\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseEditComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "label", 28);
    \u0275\u0275text(2, "Image \xE0 afficher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 387);
    \u0275\u0275listener("change", function InstructorCourseEditComponent_div_89_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r56);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSectionFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 148);
    \u0275\u0275text(5, "Formats : JPEG, PNG, WebP, GIF");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, InstructorCourseEditComponent_div_89_div_6_Template, 2, 1, "div", 388)(7, InstructorCourseEditComponent_div_89_div_7_Template, 3, 0, "div", 389);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.sectionUploadPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentSection.ressources && !ctx_r1.sectionUploadPreview);
  }
}
function InstructorCourseEditComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 392);
    \u0275\u0275element(2, "i", 140);
    \u0275\u0275text(3, " Une fois la section cr\xE9\xE9e, configurez le quiz \xE0 l'\xE9tape ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ". ");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseEditComponent_div_91_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 385);
    \u0275\u0275element(1, "i", 386);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.sectionUploadFile.name, " ");
  }
}
function InstructorCourseEditComponent_div_91_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 391);
    \u0275\u0275element(1, "i", 188);
    \u0275\u0275text(2, " Fichier existant conserv\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseEditComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "label", 28);
    \u0275\u0275text(2, "Fichier \xE0 mettre \xE0 disposition");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 393);
    \u0275\u0275listener("change", function InstructorCourseEditComponent_div_91_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r57);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSectionFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 148);
    \u0275\u0275text(5, "PDF, Word, Excel, PowerPoint, ZIP, TXT");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, InstructorCourseEditComponent_div_91_div_6_Template, 3, 1, "div", 384)(7, InstructorCourseEditComponent_div_91_div_7_Template, 3, 0, "div", 389);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.sectionUploadFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentSection.ressources && !ctx_r1.sectionUploadFile);
  }
}
function InstructorCourseEditComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "label", 28);
    \u0275\u0275text(2, "Description (optionnelle)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 394);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_div_92_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r58);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.currentSection.contenu, $event) || (ctx_r1.currentSection.contenu = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.currentSection.contenu);
  }
}
function InstructorCourseEditComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129)(1, "div", 395);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.sectionUploadError);
  }
}
function InstructorCourseEditComponent_span_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 268);
  }
}
var InstructorCourseEditComponent = class _InstructorCourseEditComponent {
  fb;
  formationService;
  categorieService;
  router;
  route;
  sanitizer;
  authService;
  quizService;
  questionService;
  // État général
  loading = true;
  saving = false;
  error = "";
  success = "";
  currentStep = 0;
  // ID et données de la formation
  courseId = null;
  course = null;
  originalCourseData = null;
  hasUnsavedChanges = false;
  // Formulaires
  basicInfoForm;
  mediaForm;
  additionalInfoForm;
  pricingForm;
  // Données
  categories = [];
  modules = [];
  objectifs = [];
  prerequis = [];
  competencesAcquises = [];
  outilsRequis = [];
  newObjectif = "";
  newPrerequis = "";
  newCompetence = "";
  newOutil = "";
  // Média
  imagePreview = null;
  selectedImageFile = null;
  isDragOver = false;
  imageError = "";
  videoUrlError = "";
  videoUrlValid = false;
  // Modals - Module
  newModule = this.getEmptyModule();
  editingModuleIndex = null;
  // Modals - Section
  currentSection = this.getEmptySection();
  editingSectionIndex = null;
  currentModuleIndex = null;
  // Section upload (modal)
  sectionVideoMode = "url";
  sectionUploadFile = null;
  sectionUploading = false;
  sectionUploadError = "";
  sectionUploadPreview = null;
  // ── quiz editor (step 3) ───────────────────────────────────────────────
  localQuizzes = [];
  activeQuizKey = null;
  expandedQuestion = null;
  loadingQuiz = false;
  // Subscriptions
  subscriptions = new Subscription();
  constructor(fb, formationService, categorieService, router, route, sanitizer, authService, quizService, questionService) {
    this.fb = fb;
    this.formationService = formationService;
    this.categorieService = categorieService;
    this.router = router;
    this.route = route;
    this.sanitizer = sanitizer;
    this.authService = authService;
    this.quizService = quizService;
    this.questionService = questionService;
    this.initForms();
  }
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get("id");
    this.courseId = idParam ? parseInt(idParam, 10) : null;
    if (!this.courseId || isNaN(this.courseId)) {
      this.error = "ID de formation manquant ou invalide";
      this.router.navigate(["/instructor/courses"]);
      return;
    }
    this.loadCategories();
    this.loadCourseData();
    this.setupChangeDetection();
    this.setupBeforeUnloadHandler();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    window.removeEventListener("beforeunload", this.beforeUnloadHandler);
  }
  // ==================== INITIALISATION ====================
  initForms() {
    this.basicInfoForm = this.fb.group({
      titre: ["", [Validators.required, Validators.minLength(5)]],
      categorie_formation_id: ["", Validators.required],
      niveau: ["debutant", Validators.required],
      langue: ["fr", Validators.required],
      type: ["en_ligne", Validators.required],
      nb_max_participants: [25],
      short_description: ["", Validators.required],
      description: ["", Validators.required],
      est_certifiante: [false]
    });
    this.mediaForm = this.fb.group({
      media_url: [""],
      video_autoplay: [false],
      video_show_controls: [true]
    });
    this.additionalInfoForm = this.fb.group({
      difficulte: ["moyen", Validators.required],
      prix: [0, [Validators.required, Validators.min(0)]],
      duree_totale: [null, [Validators.min(1)]],
      public_cible: [""],
      tags: [""],
      date_debut: [""],
      date_fin: [""],
      metadata: [""],
      inscription_ouverte: [true],
      est_publie: [false]
    });
    this.pricingForm = this.fb.group({
      cout_conception: [0],
      cout_production: [0],
      cout_formateur_jour: [0],
      frais_logistique: [0],
      nb_jours: [1],
      notes_estimation: [""]
    });
  }
  // ==================== CHARGEMENT DES DONNÉES ====================
  loadCategories() {
    const subscription = this.categorieService.getCategories().subscribe({
      next: (response) => {
        try {
          if (Array.isArray(response)) {
            this.categories = response;
          } else if (response?.data?.categories && Array.isArray(response.data.categories)) {
            this.categories = response.data.categories;
          } else if (response?.categories && Array.isArray(response.categories)) {
            this.categories = response.categories;
          } else if (response?.data && Array.isArray(response.data)) {
            this.categories = response.data;
          } else {
            console.warn("Format de r\xE9ponse inattendu pour les cat\xE9gories:", response);
            this.categories = [];
          }
          this.categories = this.categories.filter((cat) => cat && typeof cat === "object" && cat.id && cat.nom);
          if (this.categories.length === 0) {
            this.error = "Aucune cat\xE9gorie de formation disponible.";
          }
        } catch (error) {
          console.error("Erreur lors du traitement des cat\xE9gories:", error);
          this.categories = [];
          this.error = "Erreur lors du traitement des cat\xE9gories.";
        }
      },
      error: (err) => {
        console.error("Erreur chargement cat\xE9gories:", err);
        this.categories = [];
        this.error = "Impossible de charger les cat\xE9gories.";
      }
    });
    this.subscriptions.add(subscription);
  }
  loadCourseData() {
    if (!this.courseId)
      return;
    this.loading = true;
    this.error = "";
    const subscription = this.formationService.getFormationById(this.courseId).subscribe({
      next: (response) => {
        console.log("R\xE9ponse API:", response);
        if (response?.data) {
          this.course = response.data;
        } else if (response?.formation) {
          this.course = response.formation;
        } else {
          this.course = response;
        }
        if (!this.course) {
          this.error = "Formation non trouv\xE9e";
          this.loading = false;
          return;
        }
        this.originalCourseData = JSON.parse(JSON.stringify(this.course));
        this.populateFormsWithCourseData();
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error("Erreur lors du chargement de la formation:", err);
        if (err.status === 404) {
          this.error = "Formation non trouv\xE9e";
        } else if (err.status === 403) {
          this.error = "Acc\xE8s non autoris\xE9 \xE0 cette formation";
        } else {
          this.error = "Erreur lors du chargement de la formation";
        }
      }
    });
    this.subscriptions.add(subscription);
  }
  populateFormsWithCourseData() {
    if (!this.course)
      return;
    this.basicInfoForm.patchValue({
      titre: this.course.titre || "",
      categorie_formation_id: this.course.categorie_formation_id || "",
      niveau: this.course.niveau || "debutant",
      langue: this.course.langue || "fr",
      type: this.course.type || "en_ligne",
      nb_max_participants: this.course.nb_max_participants || 25,
      short_description: this.course.short_description || "",
      description: this.course.description || "",
      est_certifiante: Boolean(this.course.est_certifiante)
    });
    this.mediaForm.patchValue({
      media_url: this.course.media_url || "",
      video_autoplay: Boolean(this.course.video_autoplay),
      video_show_controls: this.course.video_show_controls !== false
    });
    const rawImage = this.course.image_couverture || this.course.image_url;
    if (rawImage) {
      this.imagePreview = this.formationService.getImageUrl(rawImage);
    }
    this.additionalInfoForm.patchValue({
      difficulte: this.course.difficulte || "moyen",
      prix: this.course.prix || 0,
      duree_totale: this.course.duree_totale || null,
      public_cible: this.course.public_cible || "",
      tags: this.course.tags || "",
      date_debut: this.course.date_debut ? this.course.date_debut.split("T")[0] : "",
      date_fin: this.course.date_fin ? this.course.date_fin.split("T")[0] : "",
      metadata: this.course.metadata ? JSON.stringify(this.course.metadata) : "",
      inscription_ouverte: this.course.inscription_ouverte !== false,
      est_publie: Boolean(this.course.est_publie)
    });
    this.pricingForm.patchValue({
      cout_conception: this.course.cout_conception || 0,
      cout_production: this.course.cout_production || 0,
      cout_formateur_jour: this.course.cout_formateur_jour || 0,
      frais_logistique: this.course.frais_logistique || 0,
      nb_jours: this.course.nb_jours || 1,
      notes_estimation: this.course.notes_estimation || ""
    });
    this.handleArrayData();
    this.loadModulesAndSections();
    if (this.mediaForm.get("media_url")?.value) {
      this.validateVideoUrl();
    }
    setTimeout(() => {
      this.markAllFormsAsPristine();
      this.hasUnsavedChanges = false;
    }, 100);
  }
  handleArrayData() {
    const rawObjectifs = this.course.objectifs_pedagogiques ?? this.course.objectifs;
    if (rawObjectifs) {
      if (typeof rawObjectifs === "string") {
        this.objectifs = rawObjectifs.split(",").map((obj) => obj.trim()).filter((obj) => obj);
      } else if (Array.isArray(rawObjectifs)) {
        this.objectifs = [...rawObjectifs];
      }
    }
    if (this.objectifs.length === 0)
      this.objectifs = [];
    if (this.course.prerequis) {
      if (typeof this.course.prerequis === "string") {
        this.prerequis = this.course.prerequis.split(",").map((pre) => pre.trim()).filter((pre) => pre);
      } else if (Array.isArray(this.course.prerequis)) {
        this.prerequis = [...this.course.prerequis];
      }
    }
    if (this.prerequis.length === 0)
      this.prerequis = [];
    if (this.course.competences_acquises) {
      if (typeof this.course.competences_acquises === "string") {
        this.competencesAcquises = this.course.competences_acquises.split(",").map((comp) => comp.trim()).filter((comp) => comp);
      } else if (Array.isArray(this.course.competences_acquises)) {
        this.competencesAcquises = [...this.course.competences_acquises];
      }
    }
    if (this.competencesAcquises.length === 0)
      this.competencesAcquises = [];
    if (this.course.outils_requis) {
      if (typeof this.course.outils_requis === "string") {
        this.outilsRequis = this.course.outils_requis.split(",").map((outil) => outil.trim()).filter((outil) => outil);
      } else if (Array.isArray(this.course.outils_requis)) {
        this.outilsRequis = [...this.course.outils_requis];
      }
    }
    if (this.outilsRequis.length === 0)
      this.outilsRequis = [];
  }
  loadModulesAndSections() {
    if (!this.course.modules) {
      this.modules = [];
      return;
    }
    try {
      let raw;
      if (typeof this.course.modules === "string") {
        raw = JSON.parse(this.course.modules);
      } else if (Array.isArray(this.course.modules)) {
        raw = this.course.modules;
      } else {
        raw = [];
      }
      this.modules = raw.map((m) => __spreadProps(__spreadValues({}, m), {
        sections: (m.sections ?? []).map((s) => __spreadProps(__spreadValues({}, s), {
          ressources: Array.isArray(s.ressources) ? s.ressources.join(", ") : s.ressources ?? ""
        }))
      }));
    } catch (error) {
      console.error("Erreur lors du parsing des modules:", error);
      this.modules = [];
    }
  }
  // ==================== GESTION DES CHANGEMENTS ====================
  setupChangeDetection() {
    this.subscriptions.add(this.basicInfoForm.valueChanges.subscribe(() => {
      this.hasUnsavedChanges = true;
    }));
    this.subscriptions.add(this.mediaForm.valueChanges.subscribe(() => {
      this.hasUnsavedChanges = true;
    }));
    this.subscriptions.add(this.additionalInfoForm.valueChanges.subscribe(() => {
      this.hasUnsavedChanges = true;
    }));
    this.subscriptions.add(this.pricingForm.valueChanges.subscribe(() => {
      this.hasUnsavedChanges = true;
    }));
  }
  setupBeforeUnloadHandler() {
    this.beforeUnloadHandler = this.beforeUnloadHandler.bind(this);
    window.addEventListener("beforeunload", this.beforeUnloadHandler);
  }
  beforeUnloadHandler = (event) => {
    if (this.hasUnsavedChanges) {
      const message = "Vous avez des modifications non sauvegard\xE9es. \xCAtes-vous s\xFBr de vouloir quitter ?";
      event.returnValue = message;
      return message;
    }
    return void 0;
  };
  markAsChanged() {
    this.hasUnsavedChanges = true;
  }
  // ==================== NAVIGATION ====================
  nextStep() {
    if (this.validateCurrentStep()) {
      this.currentStep++;
    }
  }
  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
  validateCurrentStep() {
    switch (this.currentStep) {
      case 0:
        if (this.basicInfoForm.invalid) {
          this.markFormGroupTouched(this.basicInfoForm);
          this.error = "Veuillez remplir correctement les informations de base";
          setTimeout(() => this.error = "", 5e3);
          return false;
        }
        break;
      case 1:
        break;
      // Média optionnel
      case 2:
        break;
      // Modules optionnels
      case 3:
        break;
      // Quiz optionnel
      case 4:
        if (this.additionalInfoForm.invalid) {
          this.markFormGroupTouched(this.additionalInfoForm);
          this.error = "Veuillez remplir correctement les informations suppl\xE9mentaires";
          setTimeout(() => this.error = "", 5e3);
          return false;
        }
        break;
      case 5:
        break;
    }
    this.error = "";
    return true;
  }
  markFormGroupTouched(formGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      formGroup.get(key)?.markAsTouched();
    });
  }
  // ==================== OBJECTIFS ====================
  addObjectif() {
    const v = this.newObjectif.trim();
    if (v) {
      this.objectifs.push(v);
      this.newObjectif = "";
      this.markAsChanged();
    }
  }
  removeObjectif(index) {
    if (this.objectifs.length > 1) {
      this.objectifs.splice(index, 1);
      this.markAsChanged();
    }
  }
  // ==================== PREREQUIS ====================
  addPrerequis() {
    const v = this.newPrerequis.trim();
    if (v) {
      this.prerequis.push(v);
      this.newPrerequis = "";
      this.markAsChanged();
    }
  }
  removePrerequis(index) {
    if (this.prerequis.length > 1) {
      this.prerequis.splice(index, 1);
      this.markAsChanged();
    }
  }
  // ==================== COMPETENCES ====================
  addCompetence() {
    const v = this.newCompetence.trim();
    if (v) {
      this.competencesAcquises.push(v);
      this.newCompetence = "";
      this.markAsChanged();
    }
  }
  removeCompetence(index) {
    if (this.competencesAcquises.length > 1) {
      this.competencesAcquises.splice(index, 1);
      this.markAsChanged();
    }
  }
  // ==================== OUTILS ====================
  addOutil() {
    const v = this.newOutil.trim();
    if (v) {
      this.outilsRequis.push(v);
      this.newOutil = "";
      this.markAsChanged();
    }
  }
  removeOutil(index) {
    if (this.outilsRequis.length > 1) {
      this.outilsRequis.splice(index, 1);
      this.markAsChanged();
    }
  }
  getCompetencesCount() {
    return this.competencesAcquises.filter((c) => c.trim()).length;
  }
  getOutilsCount() {
    return this.outilsRequis.filter((o) => o.trim()).length;
  }
  // ==================== MÉDIA - IMAGE ====================
  onDragOver(event) {
    event.preventDefault();
    this.isDragOver = true;
  }
  onDragLeave(event) {
    event.preventDefault();
    this.isDragOver = false;
  }
  onDrop(event) {
    event.preventDefault();
    this.isDragOver = false;
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.processImageFile(files[0]);
    }
  }
  onImageSelected(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this.processImageFile(input.files[0]);
    }
  }
  processImageFile(file) {
    this.imageError = "";
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      this.imageError = "Format non support\xE9. Utilisez JPEG, PNG ou WebP.";
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.imageError = "L'image est trop volumineuse. Taille max: 5MB.";
      return;
    }
    this.selectedImageFile = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
      this.markAsChanged();
    };
    reader.readAsDataURL(file);
  }
  removeImage() {
    this.imagePreview = null;
    this.selectedImageFile = null;
    this.imageError = "";
    this.markAsChanged();
  }
  // ==================== MÉDIA - VIDEO ====================
  onVideoUrlChange(event) {
    this.videoUrlError = "";
    this.videoUrlValid = false;
  }
  validateVideoUrl() {
    const url = this.mediaForm.get("media_url")?.value;
    if (!url) {
      this.videoUrlValid = false;
      return;
    }
    if (this.isYouTubeUrl(url) || this.isVimeoUrl(url) || this.isDirectVideoUrl(url)) {
      this.videoUrlValid = true;
      this.videoUrlError = "";
    } else {
      this.videoUrlValid = false;
      this.videoUrlError = "URL non reconnue. Utilisez YouTube, Vimeo ou un lien direct.";
    }
  }
  clearVideoUrl() {
    this.mediaForm.patchValue({ media_url: "" });
    this.videoUrlValid = false;
    this.videoUrlError = "";
  }
  isYouTubeUrl(url) {
    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)/.test(url);
  }
  isVimeoUrl(url) {
    return /^(https?:\/\/)?(www\.)?vimeo\.com/.test(url);
  }
  isDirectVideoUrl(url) {
    return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
  }
  getYouTubeEmbedUrl(url) {
    let videoId = "";
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      videoId = match[2];
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }
  getVimeoEmbedUrl(url) {
    const regExp = /vimeo\.com\/(\d+)/;
    const match = url.match(regExp);
    const videoId = match ? match[1] : "";
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${videoId}`);
  }
  // ==================== MODULES ====================
  getEmptyModule() {
    return {
      titre: "",
      description: "",
      duree_estimee: 0,
      ordre: 0,
      sections: []
    };
  }
  openModuleModal() {
    this.newModule = this.getEmptyModule();
    this.editingModuleIndex = null;
    const modal = new bootstrap.Modal(document.getElementById("moduleModal"));
    modal.show();
  }
  editModule(index) {
    this.editingModuleIndex = index;
    this.newModule = __spreadValues({}, this.modules[index]);
    const modal = new bootstrap.Modal(document.getElementById("moduleModal"));
    modal.show();
  }
  saveModule() {
    if (!this.newModule.titre)
      return;
    if (this.editingModuleIndex !== null) {
      this.modules[this.editingModuleIndex] = __spreadProps(__spreadValues({}, this.newModule), {
        sections: this.modules[this.editingModuleIndex].sections
      });
    } else {
      this.newModule.ordre = this.modules.length;
      this.newModule.sections = [];
      this.modules.push(__spreadValues({}, this.newModule));
    }
    this.closeModal("moduleModal");
    this.markAsChanged();
  }
  removeModule(index) {
    if (confirm("Supprimer ce module et toutes ses sections ?")) {
      this.modules.splice(index, 1);
      this.modules.forEach((m, i) => m.ordre = i);
      this.markAsChanged();
    }
  }
  getModuleDuration(module) {
    return module.sections?.reduce((sum, s) => sum + (parseInt(String(s.duree_estimee), 10) || 0), 0) || 0;
  }
  getTotalSections() {
    return this.modules.reduce((sum, m) => sum + (m.sections?.length || 0), 0);
  }
  getTotalDuration() {
    return this.modules.reduce((sum, m) => sum + this.getModuleDuration(m), 0);
  }
  // ==================== SECTIONS ====================
  getEmptySection() {
    return {
      titre: "",
      type: "text",
      duree_estimee: 0,
      contenu: "",
      ressources: "",
      obligatoire: true,
      visible: true,
      ordre: 0
    };
  }
  validateSectionType(type) {
    const validTypes = ["text", "video", "pdf", "quiz", "exercice", "ressource"];
    return validTypes.includes(type) ? type : "text";
  }
  openSectionModal(moduleIndex) {
    this.currentModuleIndex = moduleIndex;
    this.currentSection = this.getEmptySection();
    this.editingSectionIndex = null;
    this.sectionVideoMode = "url";
    this.sectionUploadFile = null;
    this.sectionUploading = false;
    this.sectionUploadError = "";
    this.sectionUploadPreview = null;
    const modal = new bootstrap.Modal(document.getElementById("sectionModal"));
    modal.show();
  }
  editSection(moduleIndex, sectionIndex) {
    this.currentModuleIndex = moduleIndex;
    this.editingSectionIndex = sectionIndex;
    this.currentSection = __spreadValues({}, this.modules[moduleIndex].sections[sectionIndex]);
    this.sectionVideoMode = "url";
    this.sectionUploadFile = null;
    this.sectionUploading = false;
    this.sectionUploadError = "";
    this.sectionUploadPreview = null;
    const modal = new bootstrap.Modal(document.getElementById("sectionModal"));
    modal.show();
  }
  onSectionFileSelected(event) {
    const input = event.target;
    if (!input.files?.length)
      return;
    const file = input.files[0];
    this.sectionUploadFile = file;
    this.sectionUploadError = "";
    if (this.currentSection.type === "image") {
      const reader = new FileReader();
      reader.onload = () => {
        this.sectionUploadPreview = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      this.sectionUploadPreview = null;
    }
  }
  saveSection() {
    if (!this.currentSection.titre || this.currentModuleIndex === null)
      return;
    const doSave = () => {
      const module = this.modules[this.currentModuleIndex];
      if (this.editingSectionIndex !== null) {
        module.sections[this.editingSectionIndex] = __spreadValues({}, this.currentSection);
      } else {
        this.currentSection.ordre = module.sections.length;
        module.sections.push(__spreadValues({}, this.currentSection));
      }
      this.closeModal("sectionModal");
      this.markAsChanged();
    };
    if (this.sectionUploadFile) {
      this.sectionUploading = true;
      this.formationService.uploadFile(this.sectionUploadFile).subscribe({
        next: (res) => {
          this.sectionUploading = false;
          this.currentSection.ressources = res.url || res.path || "";
          doSave();
        },
        error: () => {
          this.sectionUploading = false;
          this.sectionUploadError = "\xC9chec de l'upload, veuillez r\xE9essayer.";
        }
      });
    } else {
      doSave();
    }
  }
  removeSection(moduleIndex, sectionIndex) {
    if (confirm("Supprimer cette section ?")) {
      this.modules[moduleIndex].sections.splice(sectionIndex, 1);
      this.modules[moduleIndex].sections.forEach((s, i) => s.ordre = i);
      this.markAsChanged();
    }
  }
  // ==================== UTILITAIRES ====================
  closeModal(modalId) {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }
  }
  getDifficulteLabel(value) {
    const labels = {
      "facile": "Facile",
      "moyen": "Moyen",
      "difficile": "Difficile",
      "expert": "Expert"
    };
    return labels[value] || value || "Non d\xE9fini";
  }
  getFormControlValue(controlName) {
    return this.basicInfoForm.get(controlName)?.value || this.pricingForm.get(controlName)?.value;
  }
  // ==================== CALCULS COÛTS ====================
  getCoutDeveloppement() {
    const conception = this.pricingForm.get("cout_conception")?.value || 0;
    const production = this.pricingForm.get("cout_production")?.value || 0;
    return conception + production;
  }
  getCoutFormateur() {
    const coutJour = this.pricingForm.get("cout_formateur_jour")?.value || 0;
    const nbJours = this.pricingForm.get("nb_jours")?.value || 1;
    return coutJour * nbJours;
  }
  getCoutLogistique() {
    const frais = this.pricingForm.get("frais_logistique")?.value || 0;
    const participants = this.basicInfoForm.get("nb_max_participants")?.value || 1;
    return frais * participants;
  }
  getCoutTotal() {
    return this.getCoutDeveloppement() + this.getCoutFormateur() + this.getCoutLogistique();
  }
  getCoutParticipant() {
    const total = this.getCoutTotal();
    const participants = this.basicInfoForm.get("nb_max_participants")?.value || 1;
    return Math.round(total / participants);
  }
  getCoutParHeure() {
    const total = this.getCoutTotal();
    const duree = this.additionalInfoForm.get("duree_totale")?.value || 1;
    return Math.round(total / duree);
  }
  // ==================== QUIZ EDITOR (step 3) ====================
  getQuizKey(moduleIndex, sectionIndex) {
    return `${moduleIndex}-${sectionIndex}`;
  }
  getQuizSections() {
    const result = [];
    this.modules.forEach((mod, mi) => {
      (mod.sections || []).forEach((sec, si) => {
        if (sec.type === "quiz") {
          result.push({ moduleIndex: mi, sectionIndex: si, moduleTitle: mod.titre, sectionTitle: sec.titre });
        }
      });
    });
    return result;
  }
  getOrCreateLocalQuiz(moduleIndex, sectionIndex) {
    const key = this.getQuizKey(moduleIndex, sectionIndex);
    let lq = this.localQuizzes.find((q) => this.getQuizKey(q.moduleIndex, q.sectionIndex) === key);
    if (!lq) {
      const sec = this.modules[moduleIndex]?.sections[sectionIndex];
      lq = {
        moduleIndex,
        sectionIndex,
        quizId: sec?.quiz_id || void 0,
        titre: sec?.titre || "Nouveau quiz",
        description: "",
        score_minimum: 70,
        tentatives_max: 2,
        duree_minutes: 0,
        questions: []
      };
      this.localQuizzes.push(lq);
      if (lq.quizId) {
        this.loadExistingQuiz(lq);
      }
    }
    return lq;
  }
  loadExistingQuiz(lq) {
    if (!lq.quizId)
      return;
    this.loadingQuiz = true;
    this.quizService.getQuiz(lq.quizId).pipe(catchError(() => of(null))).subscribe((res) => {
      const quiz = res?.quiz || res;
      if (quiz) {
        lq.titre = quiz.titre || lq.titre;
        lq.description = quiz.description || "";
        lq.score_minimum = quiz.score_minimum ?? 70;
        lq.tentatives_max = quiz.max_tentatives ?? quiz.tentatives_max ?? 2;
        lq.duree_minutes = quiz.duree_minutes ?? 0;
        this.questionService.getQuestions(lq.quizId).pipe(catchError(() => of({ questions: [] }))).subscribe((res2) => {
          lq.questions = (res2.questions || []).map((q) => __spreadProps(__spreadValues({}, q), {
            reponses: q.reponses || this.quizDefaultOptions(q.type)
          }));
          this.loadingQuiz = false;
        });
      } else {
        this.loadingQuiz = false;
      }
    });
  }
  selectQuiz(moduleIndex, sectionIndex) {
    this.activeQuizKey = this.getQuizKey(moduleIndex, sectionIndex);
    this.expandedQuestion = null;
    this.getOrCreateLocalQuiz(moduleIndex, sectionIndex);
  }
  get activeLocalQuiz() {
    if (!this.activeQuizKey)
      return null;
    return this.localQuizzes.find((q) => this.getQuizKey(q.moduleIndex, q.sectionIndex) === this.activeQuizKey) || null;
  }
  quizDefaultOptions(type) {
    if (type === "true_false") {
      return [{ reponse_text: "Vrai", is_correct: true, ordre: 1 }, { reponse_text: "Faux", is_correct: false, ordre: 2 }];
    }
    if (type === "multiple_choice" || type === "multiple_choice_multi") {
      return [{ reponse_text: "", is_correct: true, ordre: 1 }, { reponse_text: "", is_correct: false, ordre: 2 }];
    }
    return [];
  }
  addQuizQuestion(type) {
    const lq = this.activeLocalQuiz;
    if (!lq)
      return;
    const newQ = {
      id: Date.now(),
      question_text: "",
      type,
      points: 1,
      ordre: (lq.questions.length || 0) + 1,
      reponses: this.quizDefaultOptions(type),
      explication: "",
      _new: true
    };
    lq.questions = [...lq.questions, newQ];
    this.expandedQuestion = newQ.id;
  }
  removeQuizQuestion(q) {
    const lq = this.activeLocalQuiz;
    if (!lq)
      return;
    lq.questions = lq.questions.filter((x) => x.id !== q.id);
  }
  toggleQuizQuestion(id) {
    this.expandedQuestion = this.expandedQuestion === id ? null : id;
  }
  toggleQuizCorrect(q, opt) {
    if (q.type === "multiple_choice") {
      q.reponses.forEach((r) => r.is_correct = false);
      opt.is_correct = true;
    } else {
      opt.is_correct = !opt.is_correct;
    }
  }
  addQuizOption(q) {
    q.reponses = [...q.reponses || [], { reponse_text: "", is_correct: false, ordre: (q.reponses?.length || 0) + 1 }];
  }
  removeQuizOption(q, index) {
    q.reponses = q.reponses.filter((_, i) => i !== index);
  }
  getTypeLabel(type) {
    const map = {
      multiple_choice: "Choix unique",
      multiple_choice_multi: "Choix multiple",
      true_false: "Vrai / Faux",
      text: "Texte libre"
    };
    return map[type] || type;
  }
  saveActiveQuiz() {
    const lq = this.activeLocalQuiz;
    if (!lq || !this.courseId)
      return;
    this.saving = true;
    this.error = "";
    const onError = (err) => {
      this.saving = false;
      const msg = err?.error?.message || (err?.error?.errors ? Object.values(err.error.errors).flat().join(", ") : null) || `Erreur ${err?.status ?? ""}`;
      this.error = "Erreur enregistrement quiz : " + msg;
      setTimeout(() => this.error = "", 6e3);
    };
    const doSaveQuestions = (quizId) => {
      if (!lq.questions.length) {
        this.saving = false;
        this.success = "Quiz enregistr\xE9";
        setTimeout(() => this.success = "", 3e3);
        return;
      }
      const saves = lq.questions.map((q) => {
        const payload = {
          question_text: q.question_text,
          type: q.type,
          points: q.points,
          ordre: q.ordre,
          reponses: q.reponses,
          explication: q.explication,
          quizzes_id: quizId
        };
        if (q._new)
          return this.questionService.createQuestion(quizId, payload).pipe(catchError((e) => {
            onError(e);
            return of(null);
          }));
        return this.questionService.updateQuestion(quizId, q.id, payload).pipe(catchError((e) => {
          onError(e);
          return of(null);
        }));
      });
      forkJoin(saves).subscribe(() => {
        lq.questions.forEach((q) => delete q._new);
        this.saving = false;
        this.success = "Quiz enregistr\xE9 avec succ\xE8s";
        setTimeout(() => this.success = "", 3e3);
      });
    };
    if (lq.quizId) {
      this.quizService.updateQuiz(lq.quizId, {
        titre: lq.titre,
        description: lq.description,
        type: "formation",
        score_minimum: lq.score_minimum,
        max_tentatives: lq.tentatives_max,
        duree_minutes: lq.duree_minutes
      }).subscribe({
        next: () => doSaveQuestions(lq.quizId),
        error: onError
      });
    } else {
      this.quizService.createQuiz({
        titre: lq.titre,
        description: lq.description,
        formation_id: this.courseId,
        type: "formation",
        score_minimum: lq.score_minimum,
        max_tentatives: lq.tentatives_max,
        duree_minutes: lq.duree_minutes,
        is_active: true
      }).subscribe({
        next: (quiz) => {
          lq.quizId = (quiz?.quiz || quiz).id;
          doSaveQuestions(lq.quizId);
        },
        error: onError
      });
    }
  }
  // ==================== MISE À JOUR ====================
  updateCourse() {
    this.saving = true;
    this.error = "";
    this.success = "";
    if (!this.validateAllSteps()) {
      this.saving = false;
      return;
    }
    let formData;
    try {
      formData = this.buildFormData();
    } catch (err) {
      this.saving = false;
      this.error = "Erreur lors de la pr\xE9paration des donn\xE9es. V\xE9rifiez les modules et sections.";
      console.error("buildFormData error:", err);
      return;
    }
    const doUpdate = (imagePath) => {
      if (imagePath)
        formData.image_couverture = imagePath;
      const subscription = this.formationService.updateFormation(this.courseId, formData).subscribe({
        next: (response) => {
          this.saving = false;
          this.success = "Formation mise \xE0 jour avec succ\xE8s !";
          this.hasUnsavedChanges = false;
          this.markAllFormsAsPristine();
          setTimeout(() => {
            const modal = new bootstrap.Modal(document.getElementById("updateSuccessModal"));
            modal.show();
          }, 100);
        },
        error: (err) => {
          this.saving = false;
          console.error("Erreur mise \xE0 jour:", err);
          if (err.status === 422 && err.error?.errors) {
            const errors = err.error.errors;
            let errorMessage = "Erreurs de validation :\n";
            Object.keys(errors).forEach((field) => {
              if (Array.isArray(errors[field])) {
                errorMessage += `\u2022 ${field}: ${errors[field].join(", ")}
`;
              } else {
                errorMessage += `\u2022 ${field}: ${errors[field]}
`;
              }
            });
            this.error = errorMessage;
          } else if (err.error?.message) {
            this.error = err.error.message;
          } else {
            this.error = "Erreur lors de la mise \xE0 jour de la formation.";
          }
        }
      });
      this.subscriptions.add(subscription);
    };
    if (this.selectedImageFile) {
      this.formationService.uploadImageCouverture(this.selectedImageFile).subscribe({
        next: (res) => doUpdate(res.path || null),
        error: () => doUpdate(null)
      });
    } else {
      doUpdate(null);
    }
  }
  buildFormData() {
    const basicInfo = this.basicInfoForm.value;
    const mediaInfo = this.mediaForm.value;
    const additionalInfo = this.additionalInfoForm.value;
    const pricingInfo = this.pricingForm.value;
    let parsedMetadata = null;
    if (additionalInfo.metadata) {
      try {
        parsedMetadata = JSON.parse(additionalInfo.metadata);
      } catch (e) {
        parsedMetadata = { raw: additionalInfo.metadata };
      }
    }
    const formData = {
      // Informations de base
      titre: basicInfo.titre?.trim(),
      short_description: basicInfo.short_description?.trim(),
      description: basicInfo.description?.trim(),
      categorie_formation_id: parseInt(basicInfo.categorie_formation_id) || null,
      niveau: basicInfo.niveau,
      langue: basicInfo.langue,
      type: basicInfo.type,
      nb_max_participants: parseInt(basicInfo.nb_max_participants) || 25,
      est_certifiante: Boolean(basicInfo.est_certifiante),
      // Informations supplémentaires
      difficulte: additionalInfo.difficulte,
      prix: parseFloat(additionalInfo.prix) || 0,
      duree_totale: parseInt(additionalInfo.duree_totale) || null,
      public_cible: additionalInfo.public_cible?.trim() || null,
      tags: Array.isArray(additionalInfo.tags) ? additionalInfo.tags : additionalInfo.tags ? additionalInfo.tags.toString().split(",").map((t) => t.trim()).filter((t) => t) : null,
      date_debut: additionalInfo.date_debut || null,
      date_fin: additionalInfo.date_fin || null,
      inscription_ouverte: Boolean(additionalInfo.inscription_ouverte),
      est_publie: Boolean(additionalInfo.est_publie),
      // Média
      media_url: mediaInfo.media_url?.trim() || null,
      video_autoplay: Boolean(mediaInfo.video_autoplay),
      video_show_controls: Boolean(mediaInfo.video_show_controls),
      objectifs_pedagogiques: this.objectifs.filter((obj) => String(obj).trim()).map((obj) => String(obj).trim()).join(", ") || null,
      prerequis: this.prerequis.filter((pre) => String(pre).trim()).map((pre) => String(pre).trim()).join(", ") || null,
      competences_acquises: this.competencesAcquises.filter((comp) => comp.trim()),
      outils_requis: this.outilsRequis.filter((outil) => outil.trim()),
      modules: this.modules.map((module) => {
        const moduleData = {
          titre: String(module.titre ?? "").trim(),
          description: String(module.description ?? "").trim() || null,
          duree_estimee: String(module.duree_estimee ?? "0"),
          ordre: module.ordre,
          sections: (module.sections ?? []).map((section) => {
            const sectionData = {
              titre: String(section.titre ?? "").trim(),
              type: section.type || "text",
              duree_estimee: String(section.duree_estimee ?? "0"),
              contenu: section.contenu ? String(section.contenu).trim() : null,
              ressources: Array.isArray(section.ressources) ? section.ressources.filter((r) => r && String(r).trim()) : section.ressources ? String(section.ressources).split(",").map((r) => r.trim()).filter(Boolean) : [],
              obligatoire: Boolean(section.obligatoire),
              visible: Boolean(section.visible),
              ordre: section.ordre
            };
            if (section.id !== void 0 && section.id !== null) {
              sectionData.id = section.id;
            }
            return sectionData;
          })
        };
        if (module.id !== void 0 && module.id !== null) {
          moduleData.id = module.id;
        }
        return moduleData;
      }),
      // Coûts
      cout_conception: parseFloat(pricingInfo.cout_conception) || 0,
      cout_production: parseFloat(pricingInfo.cout_production) || 0,
      cout_formateur_jour: parseFloat(pricingInfo.cout_formateur_jour) || 0,
      frais_logistique: parseFloat(pricingInfo.frais_logistique) || 0,
      nb_jours: parseInt(pricingInfo.nb_jours) || 1,
      notes_estimation: pricingInfo.notes_estimation?.trim() || null,
      // Métadonnées
      metadata: parsedMetadata
    };
    Object.keys(formData).forEach((key) => {
      if (formData[key] === "" || formData[key] === void 0) {
        formData[key] = null;
      }
    });
    return formData;
  }
  validateAllSteps() {
    let isValid = true;
    let errorMessages = [];
    if (this.basicInfoForm.invalid) {
      this.markFormGroupTouched(this.basicInfoForm);
      isValid = false;
      const formErrors = this.getFormErrorsInFrench(this.basicInfoForm);
      errorMessages.push(...formErrors);
    }
    if (this.additionalInfoForm.invalid) {
      this.markFormGroupTouched(this.additionalInfoForm);
      isValid = false;
      const formErrors = this.getFormErrorsInFrench(this.additionalInfoForm);
      errorMessages.push(...formErrors);
    }
    if (!isValid) {
      this.error = errorMessages.join("\n");
    }
    return isValid;
  }
  getFormErrorsInFrench(formGroup) {
    const errors = [];
    const fieldNames = {
      "titre": "Titre",
      "categorie_formation_id": "Cat\xE9gorie",
      "niveau": "Niveau",
      "langue": "Langue",
      "type": "Type",
      "short_description": "Description courte",
      "description": "Description",
      "difficulte": "Difficult\xE9",
      "prix": "Prix",
      "duree_totale": "Dur\xE9e totale",
      "public_cible": "Public cible",
      "nb_max_participants": "Nombre max de participants"
    };
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      const fieldName = fieldNames[key] || key;
      if (control && control.errors) {
        if (control.errors["required"]) {
          errors.push(`\u2022 ${fieldName} est requis`);
        }
        if (control.errors["minlength"]) {
          const minLength = control.errors["minlength"].requiredLength;
          errors.push(`\u2022 ${fieldName} doit contenir au moins ${minLength} caract\xE8res`);
        }
        if (control.errors["min"]) {
          const minValue = control.errors["min"].min;
          errors.push(`\u2022 ${fieldName} doit \xEAtre sup\xE9rieur ou \xE9gal \xE0 ${minValue}`);
        }
      }
    });
    return errors;
  }
  markAllFormsAsPristine() {
    this.basicInfoForm.markAsPristine();
    this.mediaForm.markAsPristine();
    this.additionalInfoForm.markAsPristine();
    this.pricingForm.markAsPristine();
  }
  // ==================== NAVIGATION POST-MISE À JOUR ====================
  goToCoursesList() {
    this.closeModal("updateSuccessModal");
    window.close();
    this.router.navigate(["/instructor/instructor-course"]);
  }
  continueEditing() {
    this.closeModal("updateSuccessModal");
    this.hasUnsavedChanges = false;
  }
  createNewCourse() {
    if (this.hasUnsavedChanges) {
      if (confirm("Vous avez des modifications non sauvegard\xE9es. \xCAtes-vous s\xFBr de vouloir cr\xE9er une nouvelle formation ?")) {
        this.router.navigate(["/instructor/courses/add"]);
      }
    } else {
      this.router.navigate(["/instructor/courses/add"]);
    }
  }
  static \u0275fac = function InstructorCourseEditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorCourseEditComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(CategorieService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(QuizService), \u0275\u0275directiveInject(QuestionQuizService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorCourseEditComponent, selectors: [["app-instructor-course-edit"]], decls: 110, vars: 26, consts: [["moduleForm", "ngForm"], ["sectionForm", "ngForm"], ["imageInput", ""], ["noImageTemplate", ""], ["noQuizSelected", ""], ["class", "d-flex justify-content-center align-items-center py-5", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show mx-3", "role", "alert", 4, "ngIf"], ["class", "alert alert-success alert-dismissible fade show mx-3", "role", "alert", 4, "ngIf"], ["class", "content", 4, "ngIf"], ["id", "updateSuccessModal", "tabindex", "-1", "data-bs-backdrop", "static", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "text-center", "p-5"], [1, "text-success", "mb-4"], [1, "fas", "fa-check-circle", "fa-5x"], [1, "mb-3"], [1, "text-muted", "mb-4"], [1, "d-flex", "gap-2", "justify-content-center"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-list", "me-2"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-edit", "me-2"], ["id", "moduleModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close"], [3, "ngSubmit"], [1, "modal-body"], [1, "form-label"], [1, "text-danger"], ["type", "text", "name", "titre", "required", "", "placeholder", "Ex: Introduction au sujet", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "description", "rows", "3", "placeholder", "Description du module...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "duree_estimee", "min", "0", "placeholder", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["id", "sectionModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "row"], [1, "col-md-12", "mb-3"], ["type", "text", "name", "titre", "required", "", "placeholder", "Ex: Introduction\u2026", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-6", "mb-3"], ["name", "type", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "text"], ["value", "video"], ["value", "image"], ["value", "quiz"], ["value", "fichier"], ["type", "number", "name", "duree", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "col-md-12 mb-3", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], [1, "col-md-6"], [1, "form-check", "form-switch"], ["type", "checkbox", "name", "obligatoire", "id", "sm_edit_obligatoire", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "sm_edit_obligatoire", 1, "form-check-label"], ["type", "checkbox", "name", "visible", "id", "sm_edit_visible", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "sm_edit_visible", 1, "form-check-label"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center", "py-5"], [1, "text-center"], ["role", "status", 1, "spinner-border", "text-primary", 2, "width", "3rem", "height", "3rem"], [1, "visually-hidden"], [1, "mt-3", "text-muted"], [1, "alert", "alert-info"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "mx-3"], [1, "fas", "fa-exclamation-triangle", "me-2"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show", "mx-3"], [1, "fas", "fa-check-circle", "me-2"], [1, "content"], [1, "container"], [1, "col-lg-10", "mx-auto"], [1, "add-course-item"], [1, "wizard", "mb-4"], ["id", "progressbar2", 1, "form-wizard-steps"], [3, "ngClass"], [1, "profile-step"], [1, "dot-active", "mb-2"], [1, "number"], [1, "tickmark"], [1, "fa-solid", "fa-check"], [1, "step-section"], [1, "form-container"], ["class", "form-step", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "pf-nav-footer"], [1, "pf-step-lbl"], [1, "d-flex", "gap-2", "align-items-center"], ["class", "btn btn-outline-secondary", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-success", 3, "disabled", "click", 4, "ngIf"], [1, "form-step"], [1, "card", "border-0", "shadow-sm"], [1, "card-body", "p-4"], [1, "card-title", "mb-4"], [1, "fas", "fa-info-circle", "text-primary", "me-2"], [3, "formGroup"], [1, "form-label", "fw-semibold"], ["type", "text", "formControlName", "titre", "placeholder", "Ex: D\xE9veloppement Web avec Angular", 1, "form-control"], [1, "invalid-feedback"], [1, "col-md-4", "mb-3"], ["formControlName", "categorie_formation_id", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "niveau", 1, "form-select"], ["value", "debutant"], ["value", "intermediaire"], ["value", "avance"], ["value", "expert"], ["formControlName", "langue", 1, "form-select"], ["value", "fr"], ["value", "en"], ["value", "es"], ["formControlName", "type", 1, "form-select"], ["value", "en_ligne"], ["value", "presentiel"], ["value", "hybride"], ["type", "number", "formControlName", "nb_max_participants", "placeholder", "25", "min", "1", 1, "form-control"], ["type", "text", "formControlName", "short_description", "placeholder", "R\xE9sum\xE9 en une phrase", 1, "form-control"], ["formControlName", "description", "rows", "5", "placeholder", "Description d\xE9taill\xE9e de la formation...", 1, "form-control"], [1, "fas", "fa-bullseye", "me-1", 2, "color", "#C4900A"], [1, "pf-tags-wrap"], ["class", "pf-tag", 4, "ngFor", "ngForOf"], ["class", "pf-empty-tags", 4, "ngIf"], [1, "pf-tag-input"], ["type", "text", "placeholder", "Ajouter un objectif\u2026", 3, "ngModelChange", "keyup.enter", "ngModel", "ngModelOptions"], ["type", "button", 3, "click"], [1, "fas", "fa-list-check", "me-1", 2, "color", "#1565C0"], ["class", "pf-tag pf-tag-blue", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Ajouter un pr\xE9requis\u2026", 3, "ngModelChange", "keyup.enter", "ngModel", "ngModelOptions"], [1, "col-md-12"], ["type", "checkbox", "formControlName", "est_certifiante", "id", "certifiante", 1, "form-check-input"], ["for", "certifiante", 1, "form-check-label"], [1, "fas", "fa-certificate", "text-warning", "me-2"], [3, "value"], [1, "pf-tag"], ["type", "button", 1, "pf-tag-del", 3, "click"], [1, "pf-empty-tags"], [1, "pf-tag", "pf-tag-blue"], [1, "fas", "fa-photo-video", "text-primary", "me-2"], [1, "alert", "alert-info", "mb-4"], [1, "fas", "fa-info-circle", "me-2"], [1, "col-md-12", "mb-4"], [1, "fas", "fa-image", "me-2"], [1, "upload-area", "border-2", "border-dashed", "rounded-3", "p-4", "text-center", "position-relative", 3, "dragover", "dragleave", "drop"], ["type", "file", "accept", "image/*", "id", "imageUpload", 1, "d-none", 3, "change"], ["class", "position-relative", 4, "ngIf", "ngIfElse"], ["class", "alert alert-danger mt-2 mb-0 py-2", 4, "ngIf"], [1, "fas", "fa-play-circle", "me-2"], [1, "text-muted"], [1, "input-group"], [1, "input-group-text"], [1, "fab", "fa-youtube", "text-danger"], ["type", "url", "formControlName", "media_url", "placeholder", "https://www.youtube.com/watch?v=... ou https://youtu.be/...", 1, "form-control", 3, "blur", "input"], ["type", "button", "class", "btn btn-outline-secondary", "title", "Effacer l'URL", 3, "click", 4, "ngIf"], [1, "mt-2"], [1, "text-muted", "d-block"], [1, "fas", "fa-lightbulb", "me-1"], ["class", "text-danger mt-1", 4, "ngIf"], ["class", "text-success mt-1", 4, "ngIf"], ["class", "video-preview", 4, "ngIf"], ["class", "video-placeholder", 4, "ngIf"], [1, "mt-4", "p-3", "bg-light", "rounded"], [1, "mb-2"], [1, "fas", "fa-clipboard-check", "me-2"], [1, "mb-1"], [1, "fas", "fa-image", "me-2", "text-primary"], [1, "fw-semibold"], [1, "fas", "fa-play-circle", "me-2", "text-primary"], [1, "position-relative"], ["alt", "Aper\xE7u de l'image", 1, "img-fluid", "rounded", "shadow-sm", 2, "max-height", "300px", "max-width", "100%", 3, "src"], [1, "position-absolute", "top-0", "end-0", "m-2"], ["type", "button", "title", "Supprimer l'image", 1, "btn", "btn-sm", "btn-danger", "rounded-circle", 3, "click"], [1, "fas", "fa-times"], [1, "mt-3"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "fas", "fa-sync-alt", "me-2"], [1, "upload-placeholder", 2, "cursor", "pointer", 3, "click"], [1, "upload-icon", "mb-3"], [1, "fas", "fa-cloud-upload-alt", "fa-3x", "text-primary"], [1, "text-muted", "mb-3"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-folder-open", "me-2"], [1, "fas", "fa-info-circle", "me-1"], [1, "alert", "alert-danger", "mt-2", "mb-0", "py-2"], ["type", "button", "title", "Effacer l'URL", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "text-danger", "mt-1"], [1, "fas", "fa-exclamation-circle", "me-1"], [1, "text-success", "mt-1"], [1, "fas", "fa-check-circle", "me-1"], [1, "video-preview"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], [1, "fas", "fa-eye", "me-2"], [1, "badge", "bg-success"], [1, "card-body", "p-0"], ["class", "ratio ratio-16x9", 4, "ngIf"], ["class", "p-3", 4, "ngIf"], [1, "ratio", "ratio-16x9"], ["title", "Aper\xE7u YouTube", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", "loading", "lazy", 3, "src"], ["title", "Aper\xE7u Vimeo", "frameborder", "0", "allow", "autoplay; fullscreen; picture-in-picture", "allowfullscreen", "", "loading", "lazy", 3, "src"], [1, "p-3"], ["controls", "", "preload", "metadata", 1, "w-100", "rounded", 2, "max-height", "400px", 3, "src"], [1, "video-placeholder"], [1, "card", "border-dashed"], [1, "card-body", "text-center", "py-4"], [1, "fas", "fa-video", "fa-3x", "text-muted", "mb-3"], [1, "text-muted", "small", "mb-0"], [1, "card", "bg-light"], [1, "card-body"], [1, "card-title"], [1, "fas", "fa-cog", "me-2"], ["type", "checkbox", "formControlName", "video_autoplay", "id", "videoAutoplay", 1, "form-check-input"], ["for", "videoAutoplay", 1, "form-check-label"], ["type", "checkbox", "formControlName", "video_show_controls", "id", "videoControls", 1, "form-check-input"], ["for", "videoControls", 1, "form-check-label"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "card-title", "mb-0"], [1, "fas", "fa-book", "text-primary", "me-2"], [1, "fas", "fa-plus", "me-2"], ["class", "row mb-4 g-3", 4, "ngIf"], ["class", "accordion", "id", "modulesAccordion", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], [1, "row", "mb-4", "g-3"], [1, "col-md-4"], [1, "stat-card", "stat-card--indigo"], [1, "stat-card__icon"], [1, "fas", "fa-layer-group"], [1, "stat-card__body"], [1, "stat-card__value"], [1, "stat-card__label"], [1, "stat-card", "stat-card--teal"], [1, "fas", "fa-list-ul"], [1, "stat-card", "stat-card--amber"], [1, "fas", "fa-clock"], ["id", "modulesAccordion", 1, "accordion"], ["class", "accordion-item mb-3 border rounded", 4, "ngFor", "ngForOf"], [1, "accordion-item", "mb-3", "border", "rounded"], [1, "accordion-header"], ["type", "button", 1, "accordion-button"], [1, "d-flex", "align-items-center", "w-100"], [1, "fas", "fa-grip-vertical", "me-3", "text-muted"], [1, "flex-grow-1"], [1, "btn-group", "me-2", 3, "click"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "fas", "fa-edit"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fas", "fa-trash"], [1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body"], ["class", "text-muted mb-3", 4, "ngIf"], [1, "sections-list", "mb-3"], ["class", "d-flex align-items-center justify-content-between p-3 mb-2 border rounded bg-light", 4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-outline-success", 3, "click"], [1, "fas", "fa-plus", "me-1"], [1, "d-flex", "align-items-center", "justify-content-between", "p-3", "mb-2", "border", "rounded", "bg-light"], [1, "d-flex", "align-items-center"], [1, "fas", "fa-play-circle", "text-success", "me-3"], ["class", "badge bg-success ms-2", 4, "ngIf"], [1, "btn-group"], [1, "badge", "bg-success", "ms-2"], [1, "text-center", "py-5"], [1, "fas", "fa-folder-open", "fa-4x", "text-muted", "mb-3"], [1, "fas", "fa-question-circle", "text-primary", "me-2"], ["type", "button", 1, "btn", "btn-success", "btn-sm", 3, "click", "disabled"], ["class", "fas fa-save me-1", 4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], ["style", "display:flex;gap:1rem;min-height:400px", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "fas", "fa-save", "me-1"], [2, "display", "flex", "gap", "1rem", "min-height", "400px"], [2, "width", "220px", "flex-shrink", "0", "border-right", "1px solid #e5e7eb", "padding-right", "1rem"], [1, "fw-semibold", "text-muted", "mb-2", 2, "font-size", "0.8rem", "text-transform", "uppercase", "letter-spacing", ".05em"], ["style", "cursor:pointer;padding:.4rem .6rem;border-radius:.375rem;margin-bottom:.25rem;font-size:.85rem", 3, "background", "click", 4, "ngFor", "ngForOf"], ["style", "flex:1", 4, "ngIf", "ngIfElse"], [2, "cursor", "pointer", "padding", ".4rem .6rem", "border-radius", ".375rem", "margin-bottom", ".25rem", "font-size", ".85rem", 3, "click"], [1, "fas", "fa-question-circle", "me-1", 2, "color", "#7c3aed"], [2, "flex", "1"], ["class", "text-center py-4", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "row", "g-2", "mb-3"], [1, "col-md-8"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "number", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "number", "min", "0", "max", "100", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "number", "min", "1", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "card mb-2 border", 4, "ngFor", "ngForOf"], [1, "d-flex", "gap-2", "mt-3", "flex-wrap"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "fas", "fa-dot-circle", "me-1"], [1, "fas", "fa-check-square", "me-1"], [1, "fas", "fa-toggle-on", "me-1"], [1, "fas", "fa-font", "me-1"], [1, "card", "mb-2", "border"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "py-2", "px-3", 2, "cursor", "pointer", "background", "#f8f9fa", 3, "click"], [1, "fw-semibold", 2, "font-size", ".875rem"], [1, "badge", "bg-secondary", 2, "font-size", ".7rem"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], ["class", "card-body p-3", 4, "ngIf"], [1, "card-body", "p-3"], ["type", "text", "placeholder", "Texte de la question", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "row", "g-2", "mb-2"], ["type", "text", "placeholder", "Optionnel", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "d-flex align-items-center gap-2 mb-1", 4, "ngFor", "ngForOf"], ["type", "button", "class", "btn btn-sm btn-outline-primary mt-1", 3, "click", 4, "ngIf"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], ["type", "text", "placeholder", "R\xE9ponse", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "form-check mb-0 ms-1", 4, "ngIf"], ["type", "button", "class", "btn btn-sm btn-outline-secondary", 3, "click", 4, "ngIf"], [1, "form-check", "mb-0", "ms-1"], ["type", "checkbox", 1, "form-check-input", 3, "change", "checked"], [1, "form-check-label", 2, "font-size", ".75rem"], ["type", "radio", 1, "form-check-input", 3, "change", "name", "checked"], [1, "form-check-label", 2, "font-size", ".75rem", "color", "#059669", "font-weight", "600"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", "mt-1", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-center", "text-muted", 2, "flex", "1"], [1, "col-12", "mb-4"], [1, "text-secondary", "border-bottom", "pb-2"], [1, "fas", "fa-cogs", "me-2"], ["formControlName", "difficulte", 1, "form-select"], ["value", "facile"], ["value", "moyen"], ["value", "difficile"], ["type", "number", "formControlName", "duree_totale", "placeholder", "40", "min", "1", "step", "0.5", 1, "form-control"], [1, "col-12", "mb-4", "mt-4"], [1, "fas", "fa-graduation-cap", "me-2"], [1, "fas", "fa-graduation-cap", "me-1", 2, "color", "#3D7A5F"], ["class", "pf-tag pf-tag-green", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Ajouter une comp\xE9tence\u2026", 3, "ngModelChange", "keyup.enter", "ngModel", "ngModelOptions"], [1, "fas", "fa-tools", "me-1", 2, "color", "#6B3FA0"], ["class", "pf-tag pf-tag-purple", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Ajouter un outil\u2026", 3, "ngModelChange", "keyup.enter", "ngModel", "ngModelOptions"], [1, "fas", "fa-users", "me-2"], ["formControlName", "public_cible", "rows", "3", "placeholder", "\xC0 qui s'adresse cette formation ? (ex: d\xE9veloppeurs juniors, chefs de projet, \xE9tudiants en informatique...)", 1, "form-control"], ["type", "text", "formControlName", "tags", "placeholder", "javascript, angular, web, d\xE9veloppement (s\xE9par\xE9s par des virgules)", 1, "form-control"], ["type", "date", "formControlName", "date_debut", 1, "form-control"], ["type", "date", "formControlName", "date_fin", 1, "form-control"], ["formControlName", "metadata", "rows", "2", "placeholder", '{"version": "1.0", "auteur": "Nom", "copyright": "2024"}', 1, "form-control"], [1, "fas", "fa-toggle-on", "me-2"], ["type", "checkbox", "formControlName", "inscription_ouverte", "id", "inscriptionOuverte", 1, "form-check-input"], ["for", "inscriptionOuverte", 1, "form-check-label"], [1, "fas", "fa-door-open", "text-success", "me-2"], ["type", "checkbox", "formControlName", "est_publie", "id", "estPublie", 1, "form-check-input"], ["for", "estPublie", 1, "form-check-label"], [1, "fas", "fa-eye", "text-info", "me-2"], [1, "col-12", "mt-4"], [1, "card", "bg-light", "border-left-primary"], [1, "list-unstyled"], [1, "pf-tag", "pf-tag-green"], [1, "pf-tag", "pf-tag-purple"], [1, "fas", "fa-calculator", "text-primary", "me-2"], [1, "text-secondary"], [1, "fas", "fa-code", "me-2"], ["type", "number", "formControlName", "cout_conception", "placeholder", "2000", "step", "100", "min", "0", 1, "form-control"], ["type", "number", "formControlName", "cout_production", "placeholder", "5000", "step", "100", "min", "0", 1, "form-control"], [1, "col-md-12", "mb-4", "mt-4"], [1, "fas", "fa-chalkboard-teacher", "me-2"], ["type", "number", "formControlName", "cout_formateur_jour", "placeholder", "600", "step", "50", "min", "0", 1, "form-control"], ["type", "number", "formControlName", "frais_logistique", "placeholder", "50", "step", "10", "min", "0", 1, "form-control"], [1, "col-md-12", "mt-4"], [1, "fas", "fa-chart-line", "text-success", "me-2"], [1, "d-flex", "justify-content-between"], [1, "text-success"], [1, "text-primary"], [1, "text-info"], [1, "col-md-12", "mt-3"], ["formControlName", "notes_estimation", "rows", "3", "placeholder", "Pr\xE9cisions sur l'estimation, conditions particuli\xE8res, options suppl\xE9mentaires...", 1, "form-control"], [1, "fas", "fa-arrow-left", "me-2"], [1, "fas", "fa-arrow-right", "ms-2"], [1, "btn", "btn-success", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "fas fa-check me-2", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fas", "fa-check", "me-2"], ["name", "contenu", "rows", "5", "placeholder", "R\xE9digez le contenu de lecture\u2026", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn-group", "mb-2", "w-100"], ["type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-link", "me-1"], [1, "fas", "fa-upload", "me-1"], ["type", "url", "name", "ressources_video_url", "placeholder", "https://www.youtube.com/watch?v=\u2026 ou lien .mp4", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "file", "name", "ressources_video_file", "accept", "video/mp4,video/webm,video/ogg", 1, "form-control", 3, "change"], ["class", "mt-1 text-info small", 4, "ngIf"], [1, "mt-1", "text-info", "small"], [1, "fas", "fa-paperclip", "me-1"], ["type", "file", "name", "ressources_image", "accept", "image/jpeg,image/png,image/webp,image/gif", 1, "form-control", 3, "change"], ["class", "mt-2", 4, "ngIf"], ["class", "mt-1 text-success small", 4, "ngIf"], ["alt", "aper\xE7u", 1, "img-fluid", "rounded", 2, "max-height", "180px", 3, "src"], [1, "mt-1", "text-success", "small"], [1, "alert", "alert-info", "mb-0"], ["type", "file", "name", "ressources_fichier", "accept", ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip,.txt", 1, "form-control", 3, "change"], ["name", "contenu", "rows", "2", "placeholder", "Br\xE8ve description\u2026", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "alert", "alert-danger", "py-2", "mb-2"]], template: function InstructorCourseEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275template(0, InstructorCourseEditComponent_div_0_Template, 9, 1, "div", 5)(1, InstructorCourseEditComponent_div_1_Template, 6, 1, "div", 6)(2, InstructorCourseEditComponent_div_2_Template, 6, 1, "div", 7)(3, InstructorCourseEditComponent_div_3_Template, 81, 34, "div", 8);
      \u0275\u0275elementStart(4, "div", 9)(5, "div", 10)(6, "div", 11)(7, "div", 12)(8, "div", 13);
      \u0275\u0275element(9, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "h4", 15);
      \u0275\u0275text(11, "Formation mise \xE0 jour avec succ\xE8s !");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 16);
      \u0275\u0275text(13, "Toutes les modifications ont \xE9t\xE9 sauvegard\xE9es.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 17)(15, "button", 18);
      \u0275\u0275listener("click", function InstructorCourseEditComponent_Template_button_click_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goToCoursesList());
      });
      \u0275\u0275element(16, "i", 19);
      \u0275\u0275text(17, " Voir mes formations ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 20);
      \u0275\u0275listener("click", function InstructorCourseEditComponent_Template_button_click_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.continueEditing());
      });
      \u0275\u0275element(19, "i", 21);
      \u0275\u0275text(20, " Continuer l'\xE9dition ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(21, "div", 22)(22, "div", 10)(23, "div", 11)(24, "div", 23)(25, "h5", 24);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "button", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "form", 26, 0);
      \u0275\u0275listener("ngSubmit", function InstructorCourseEditComponent_Template_form_ngSubmit_28_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveModule());
      });
      \u0275\u0275elementStart(30, "div", 27)(31, "div", 15)(32, "label", 28);
      \u0275\u0275text(33, "Titre du module ");
      \u0275\u0275elementStart(34, "span", 29);
      \u0275\u0275text(35, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_Template_input_ngModelChange_36_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newModule.titre, $event) || (ctx.newModule.titre = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 15)(38, "label", 28);
      \u0275\u0275text(39, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "textarea", 31);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_Template_textarea_ngModelChange_40_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newModule.description, $event) || (ctx.newModule.description = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 15)(42, "label", 28);
      \u0275\u0275text(43, "Dur\xE9e estim\xE9e (minutes)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_Template_input_ngModelChange_44_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newModule.duree_estimee, $event) || (ctx.newModule.duree_estimee = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 33)(46, "button", 34);
      \u0275\u0275text(47, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "button", 35);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(50, "div", 36)(51, "div", 37)(52, "div", 11)(53, "div", 23)(54, "h5", 24);
      \u0275\u0275text(55);
      \u0275\u0275elementEnd();
      \u0275\u0275element(56, "button", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "form", 26, 1);
      \u0275\u0275listener("ngSubmit", function InstructorCourseEditComponent_Template_form_ngSubmit_57_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveSection());
      });
      \u0275\u0275elementStart(59, "div", 27)(60, "div", 38)(61, "div", 39)(62, "label", 28);
      \u0275\u0275text(63, "Titre de la section");
      \u0275\u0275elementStart(64, "span", 29);
      \u0275\u0275text(65, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "input", 40);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_Template_input_ngModelChange_66_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentSection.titre, $event) || (ctx.currentSection.titre = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 41)(68, "label", 28);
      \u0275\u0275text(69, "Type");
      \u0275\u0275elementStart(70, "span", 29);
      \u0275\u0275text(71, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "select", 42);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_Template_select_ngModelChange_72_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentSection.type, $event) || (ctx.currentSection.type = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function InstructorCourseEditComponent_Template_select_ngModelChange_72_listener() {
        \u0275\u0275restoreView(_r1);
        ctx.sectionUploadFile = null;
        ctx.sectionUploadPreview = null;
        ctx.sectionUploadError = "";
        return \u0275\u0275resetView(ctx.currentSection.ressources = "");
      });
      \u0275\u0275elementStart(73, "option", 43);
      \u0275\u0275text(74, "Texte / Lecture");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "option", 44);
      \u0275\u0275text(76, "Vid\xE9o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "option", 45);
      \u0275\u0275text(78, "Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "option", 46);
      \u0275\u0275text(80, "Quiz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "option", 47);
      \u0275\u0275text(82, "Fichier \xE0 t\xE9l\xE9charger");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "div", 41)(84, "label", 28);
      \u0275\u0275text(85, "Dur\xE9e (minutes)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "input", 48);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_Template_input_ngModelChange_86_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentSection.duree_estimee, $event) || (ctx.currentSection.duree_estimee = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(87, InstructorCourseEditComponent_div_87_Template, 4, 1, "div", 49)(88, InstructorCourseEditComponent_div_88_Template, 12, 10, "div", 49)(89, InstructorCourseEditComponent_div_89_Template, 8, 2, "div", 49)(90, InstructorCourseEditComponent_div_90_Template, 7, 0, "div", 49)(91, InstructorCourseEditComponent_div_91_Template, 8, 2, "div", 49)(92, InstructorCourseEditComponent_div_92_Template, 4, 1, "div", 49)(93, InstructorCourseEditComponent_div_93_Template, 3, 1, "div", 50);
      \u0275\u0275elementStart(94, "div", 51)(95, "div", 52)(96, "input", 53);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_Template_input_ngModelChange_96_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentSection.obligatoire, $event) || (ctx.currentSection.obligatoire = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "label", 54);
      \u0275\u0275text(98, "Section obligatoire");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(99, "div", 51)(100, "div", 52)(101, "input", 55);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_Template_input_ngModelChange_101_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentSection.visible, $event) || (ctx.currentSection.visible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "label", 56);
      \u0275\u0275text(103, "Section visible");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(104, "div", 33)(105, "button", 34);
      \u0275\u0275text(106, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "button", 35);
      \u0275\u0275template(108, InstructorCourseEditComponent_span_108_Template, 1, 0, "span", 57);
      \u0275\u0275text(109);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      const moduleForm_r59 = \u0275\u0275reference(29);
      const sectionForm_r60 = \u0275\u0275reference(58);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(23);
      \u0275\u0275textInterpolate1("", ctx.editingModuleIndex !== null ? "Modifier" : "Nouveau", " Module");
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.newModule.titre);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.newModule.description);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.newModule.duree_estimee);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", !moduleForm_r59.valid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.editingModuleIndex !== null ? "Modifier" : "Ajouter", " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.editingSectionIndex !== null ? "Modifier" : "Nouvelle", " Section");
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.currentSection.titre);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.currentSection.type);
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.currentSection.duree_estimee);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentSection.type === "text");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentSection.type === "video");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentSection.type === "image");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentSection.type === "quiz");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentSection.type === "fichier");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentSection.type !== "text");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.sectionUploadError);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.currentSection.obligatoire);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.currentSection.visible);
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", !sectionForm_r60.valid || ctx.sectionUploading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.sectionUploading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.sectionUploading ? "Upload en cours\u2026" : ctx.editingSectionIndex !== null ? "Modifier" : "Ajouter", " ");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, MaxValidator, FormGroupDirective, FormControlName, FormsModule, NgModel, NgForm], styles: ['\n\n.content[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  background: #F8F5F0;\n  min-height: 100vh;\n}\n.add-course-item[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 16px;\n  box-shadow: 0 2px 24px rgba(44, 36, 22, 0.09);\n  overflow: hidden;\n  margin-bottom: 2rem;\n}\n.pf-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.4rem 2rem;\n  border-bottom: 1px solid #E4DDD3;\n}\n.pf-header[_ngcontent-%COMP%]   .pf-header-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: #FDF3DC;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.35rem;\n  color: #C4900A;\n  flex-shrink: 0;\n}\n.pf-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #2C2416;\n  margin: 0;\n}\n.pf-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #7A6A55;\n  margin: 0;\n}\n.wizard[_ngcontent-%COMP%] {\n  padding: 1.25rem 2rem;\n  border-bottom: 1px solid #E4DDD3;\n}\n.wizard[_ngcontent-%COMP%]   .form-wizard-steps[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n.wizard[_ngcontent-%COMP%]   .form-wizard-steps[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 17px;\n  left: 30px;\n  right: 30px;\n  height: 1px;\n  background: #E4DDD3;\n  z-index: 0;\n}\n.wizard[_ngcontent-%COMP%]   .form-wizard-steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  position: relative;\n  z-index: 1;\n}\n.wizard[_ngcontent-%COMP%]   .profile-step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.3rem;\n}\n.wizard[_ngcontent-%COMP%]   .dot-active[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #E4DDD3;\n  color: #7A6A55;\n  font-weight: 700;\n  font-size: 0.78rem;\n  transition: all 0.2s;\n}\n.wizard[_ngcontent-%COMP%]   .dot-active[_ngcontent-%COMP%]   .tickmark[_ngcontent-%COMP%] {\n  display: none;\n}\n.wizard[_ngcontent-%COMP%]   .dot-active[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  display: block;\n}\n.wizard[_ngcontent-%COMP%]   .step-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #7A6A55;\n  margin: 0;\n  font-weight: 500;\n}\n.wizard[_ngcontent-%COMP%]   li.progress-active[_ngcontent-%COMP%]   .dot-active[_ngcontent-%COMP%] {\n  background: #C4900A;\n  color: #FFFFFF;\n  box-shadow: 0 0 0 4px rgba(196, 144, 10, 0.15);\n}\n.wizard[_ngcontent-%COMP%]   li.progress-active[_ngcontent-%COMP%]   .step-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #C4900A;\n  font-weight: 700;\n}\n.wizard[_ngcontent-%COMP%]   li.progress-activated[_ngcontent-%COMP%]   .dot-active[_ngcontent-%COMP%] {\n  background: #5BA87A;\n  color: #FFFFFF;\n}\n.wizard[_ngcontent-%COMP%]   li.progress-activated[_ngcontent-%COMP%]   .dot-active[_ngcontent-%COMP%]   .tickmark[_ngcontent-%COMP%] {\n  display: block;\n}\n.wizard[_ngcontent-%COMP%]   li.progress-activated[_ngcontent-%COMP%]   .dot-active[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  display: none;\n}\n.wizard[_ngcontent-%COMP%]   li.progress-activated[_ngcontent-%COMP%]   .step-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5BA87A;\n}\n.form-container[_ngcontent-%COMP%] {\n  padding: 1.75rem 2rem;\n}\n.form-step[_ngcontent-%COMP%] {\n  min-height: 320px;\n}\n.text-secondary.border-bottom[_ngcontent-%COMP%] {\n  font-size: 0.72rem !important;\n  font-weight: 700 !important;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: #7A6A55 !important;\n  border-color: #E4DDD3 !important;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #7A6A55;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 0.4rem;\n}\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1.5px solid #E4DDD3;\n  padding: 9px 13px;\n  font-size: 0.9rem;\n  color: #2C2416;\n  background: #FFFFFF;\n  transition: border-color 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #C4900A;\n  box-shadow: 0 0 0 3px rgba(196, 144, 10, 0.12);\n  background: #FFFFFF;\n}\n.form-control.is-invalid[_ngcontent-%COMP%], \n.form-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.pf-tags-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.45rem;\n  padding: 0.65rem 0.75rem;\n  background: #F8F5F0;\n  border-radius: 10px;\n  border: 1.5px solid #E4DDD3;\n  min-height: 48px;\n  align-items: flex-start;\n}\n.pf-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.28rem 0.6rem;\n  background: #FDF3DC;\n  color: rgb(157.1805825243, 115.4796116505, 8.0194174757);\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 500;\n  border: 1px solid rgba(196, 144, 10, 0.22);\n}\n.pf-tag[_ngcontent-%COMP%]   .pf-tag-del[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0 0 0 2px;\n  line-height: 1;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.55;\n  font-size: 0.75rem;\n}\n.pf-tag[_ngcontent-%COMP%]   .pf-tag-del[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.pf-tag.pf-tag-blue[_ngcontent-%COMP%] {\n  background: #EBF4FD;\n  color: #1565C0;\n  border-color: rgba(21, 101, 192, 0.2);\n}\n.pf-tag.pf-tag-green[_ngcontent-%COMP%] {\n  background: #EAF5F0;\n  color: #3D7A5F;\n  border-color: rgba(61, 122, 95, 0.2);\n}\n.pf-tag.pf-tag-purple[_ngcontent-%COMP%] {\n  background: #F3EFF9;\n  color: #6B3FA0;\n  border-color: rgba(107, 63, 160, 0.2);\n}\n.pf-tag-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  margin-top: 0.55rem;\n}\n.pf-tag-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1.5px solid #E4DDD3;\n  border-radius: 8px;\n  padding: 0.38rem 0.75rem;\n  font-size: 0.85rem;\n  color: #2C2416;\n  outline: none;\n  background: #FFFFFF;\n}\n.pf-tag-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #C4900A;\n}\n.pf-tag-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgb(172.4637681159, 156.9275362319, 136.5362318841);\n}\n.pf-tag-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #C4900A;\n  color: #FFFFFF;\n  border: none;\n  border-radius: 8px;\n  padding: 0.38rem 0.75rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.pf-tag-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgb(162.0330097087, 119.0446601942, 8.2669902913);\n}\n.pf-empty-tags[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: rgb(161.9927536232, 144.4855072464, 121.5072463768);\n  font-style: italic;\n  padding: 0.2rem 0.3rem;\n}\n.module-item[_ngcontent-%COMP%] {\n  border: 1.5px solid #E4DDD3;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.module-item[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: #F8F5F0;\n  border-bottom: 1px solid #E4DDD3;\n  padding: 11px 15px;\n}\n.module-item[_ngcontent-%COMP%]   .section-item[_ngcontent-%COMP%] {\n  border: 1px solid #E4DDD3;\n  border-radius: 8px;\n  transition: background 0.15s;\n}\n.module-item[_ngcontent-%COMP%]   .section-item[_ngcontent-%COMP%]:hover {\n  background: #F8F5F0;\n}\n.upload-zone[_ngcontent-%COMP%], \n.upload-area[_ngcontent-%COMP%] {\n  border: 2px dashed #E4DDD3;\n  border-radius: 12px;\n  padding: 2.5rem;\n  text-align: center;\n  transition: all 0.2s;\n  cursor: pointer;\n  background: #F8F5F0;\n}\n.upload-zone[_ngcontent-%COMP%]:hover, \n.upload-zone.drag-over[_ngcontent-%COMP%], \n.upload-area[_ngcontent-%COMP%]:hover, \n.upload-area.drag-over[_ngcontent-%COMP%] {\n  border-color: #C4900A;\n  background: #FDF3DC;\n}\n.pf-nav-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.1rem 2rem;\n  border-top: 1px solid #E4DDD3;\n  background: #F8F5F0;\n  margin: 1.5rem -2rem -1.75rem;\n}\n.pf-nav-footer[_ngcontent-%COMP%]   .pf-step-lbl[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #7A6A55;\n  font-weight: 500;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 9px 20px;\n  font-weight: 600;\n  font-size: 0.87rem;\n  transition: all 0.2s;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #2C2416;\n  border-color: #2C2416;\n  color: #FFFFFF;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: rgb(84.8, 69.3818181818, 42.4);\n  border-color: rgb(84.8, 69.3818181818, 42.4);\n}\n.btn.btn-success[_ngcontent-%COMP%] {\n  background: #C4900A;\n  border-color: #C4900A;\n  color: #FFFFFF;\n}\n.btn.btn-success[_ngcontent-%COMP%]:hover {\n  background: rgb(166.8854368932, 122.6097087379, 8.5145631068);\n}\n.btn.btn-outline-secondary[_ngcontent-%COMP%] {\n  border-color: #E4DDD3;\n  color: #7A6A55;\n  background: #FFFFFF;\n}\n.btn.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background: #F8F5F0;\n  color: #2C2416;\n}\n.btn.btn-outline-primary[_ngcontent-%COMP%] {\n  border-color: #C4900A;\n  color: #C4900A;\n  background: #FFFFFF;\n}\n.btn.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background: #FDF3DC;\n}\n.btn.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  transform: none;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 5px 13px;\n  font-size: 0.8rem;\n  border-radius: 8px;\n}\n.alert[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: none;\n  font-size: 0.88rem;\n}\n.alert.alert-info[_ngcontent-%COMP%] {\n  background: #EBF4FD;\n  color: #1565C0;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #EAF5F0;\n  color: #3D7A5F;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: #FEF0F0;\n  color: #C62828;\n}\n.alert.alert-warning[_ngcontent-%COMP%] {\n  background: #FDF3DC;\n  color: rgb(147.4757281553, 108.3495145631, 7.5242718447);\n}\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #C4900A;\n  border-color: #C4900A;\n}\n.card.bg-light[_ngcontent-%COMP%] {\n  background: #F8F5F0 !important;\n  border: 1.5px solid #E4DDD3 !important;\n  border-radius: 10px !important;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 20px;\n  border-radius: 14px;\n  border: 1.5px solid transparent;\n}\n.stat-card__icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.stat-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.stat-card__value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 800;\n  line-height: 1.1;\n  letter-spacing: -0.5px;\n}\n.stat-card__value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  margin-left: 2px;\n}\n.stat-card__label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  opacity: 0.65;\n  margin-top: 2px;\n}\n.stat-card--indigo[_ngcontent-%COMP%] {\n  background: #f0f0ff;\n  border-color: #c7c7f7;\n  color: #3730a3;\n}\n.stat-card--indigo[_ngcontent-%COMP%]   .stat-card__icon[_ngcontent-%COMP%] {\n  background: #e0e0fc;\n  color: #4338ca;\n}\n.stat-card--teal[_ngcontent-%COMP%] {\n  background: #f0fdf9;\n  border-color: #a7f3de;\n  color: #065f46;\n}\n.stat-card--teal[_ngcontent-%COMP%]   .stat-card__icon[_ngcontent-%COMP%] {\n  background: #ccfbef;\n  color: #059669;\n}\n.stat-card--amber[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border-color: #fde68a;\n  color: #78350f;\n}\n.stat-card--amber[_ngcontent-%COMP%]   .stat-card__icon[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n@media (max-width: 768px) {\n  .form-container[_ngcontent-%COMP%], \n   .pf-nav-footer[_ngcontent-%COMP%], \n   .pf-header[_ngcontent-%COMP%] {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .wizard[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .pf-nav-footer[_ngcontent-%COMP%] {\n    margin: 1rem -1rem -1rem;\n  }\n  .step-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.62rem;\n  }\n}\n/*# sourceMappingURL=instructor-course-edit.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorCourseEditComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-course-edit", imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink], template: `<!-- Loading State -->\r
<div *ngIf="loading" class="d-flex justify-content-center align-items-center py-5">\r
    <div class="text-center">\r
        <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;">\r
            <span class="visually-hidden">Chargement...</span>\r
        </div>\r
        <p class="mt-3 text-muted">Chargement des donn\xE9es...</p>\r
    </div>\r
    <div class="alert alert-info">\r
  \xC9tape actuelle : {{ currentStep }}\r
</div>\r
</div>\r
\r
<!-- Error State -->\r
<div *ngIf="error" class="alert alert-danger alert-dismissible fade show mx-3" role="alert">\r
    <i class="fas fa-exclamation-triangle me-2"></i>\r
    <strong>Erreur !</strong> {{ error }}\r
    <button type="button" class="btn-close" (click)="error = ''" aria-label="Close"></button>\r
</div>\r
\r
<!-- Success State -->\r
<div *ngIf="success" class="alert alert-success alert-dismissible fade show mx-3" role="alert">\r
    <i class="fas fa-check-circle me-2"></i>\r
    <strong>Succ\xE8s !</strong> {{ success }}\r
    <button type="button" class="btn-close" (click)="success = ''" aria-label="Close"></button>\r
</div>\r
\r
<!-- Course Form -->\r
<div class="content" *ngIf="!loading">\r
    <div class="container">\r
        <div class="row">\r
            <div class="col-lg-10 mx-auto">\r
                <div class="add-course-item">\r
\r
                    <!-- Progress Wizard -->\r
                    <div class="wizard mb-4">\r
                        <ul class="form-wizard-steps" id="progressbar2">\r
                            <li [ngClass]="{ 'progress-active': currentStep === 0, 'progress-activated': currentStep > 0 }">\r
                                <div class="profile-step">\r
                                    <span class="dot-active mb-2">\r
                                        <span class="number">01</span>\r
                                        <span class="tickmark"><i class="fa-solid fa-check"></i></span>\r
                                    </span>\r
                                    <div class="step-section">\r
                                        <p>Informations de base</p>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                            <li [ngClass]="{ 'progress-active': currentStep === 1, 'progress-activated': currentStep > 1 }">\r
                                <div class="profile-step">\r
                                    <span class="dot-active mb-2">\r
                                        <span class="number">02</span>\r
                                        <span class="tickmark"><i class="fa-solid fa-check"></i></span>\r
                                    </span>\r
                                    <div class="step-section">\r
                                        <p>M\xE9dia</p>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                            <li [ngClass]="{ 'progress-active': currentStep === 2, 'progress-activated': currentStep > 2 }">\r
                                <div class="profile-step">\r
                                    <span class="dot-active mb-2">\r
                                        <span class="number">03</span>\r
                                        <span class="tickmark"><i class="fa-solid fa-check"></i></span>\r
                                    </span>\r
                                    <div class="step-section">\r
                                        <p>Modules & Sections</p>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                            <li [ngClass]="{ 'progress-active': currentStep === 3, 'progress-activated': currentStep > 3 }">\r
                                <div class="profile-step">\r
                                    <span class="dot-active mb-2">\r
                                        <span class="number">04</span>\r
                                        <span class="tickmark"><i class="fa-solid fa-check"></i></span>\r
                                    </span>\r
                                    <div class="step-section">\r
                                        <p>Quiz</p>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                            <li [ngClass]="{ 'progress-active': currentStep === 4, 'progress-activated': currentStep > 4 }">\r
                                <div class="profile-step">\r
                                    <span class="dot-active mb-2">\r
                                        <span class="number">05</span>\r
                                        <span class="tickmark"><i class="fa-solid fa-check"></i></span>\r
                                    </span>\r
                                    <div class="step-section">\r
                                        <p>Informations</p>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                            <li [ngClass]="{ 'progress-active': currentStep === 5, 'progress-activated': currentStep > 5 }">\r
                                <div class="profile-step">\r
                                    <span class="dot-active mb-2">\r
                                        <span class="number">06</span>\r
                                        <span class="tickmark"><i class="fa-solid fa-check"></i></span>\r
                                    </span>\r
                                    <div class="step-section">\r
                                        <p>Co\xFBt estimatif</p>\r
                                    </div>\r
                                </div>\r
                            </li>\r
                        </ul>\r
                    </div>\r
                    <!-- Form Container -->\r
                    <div class="form-container">\r
\r
                        <!-- \xC9tape 1: Informations de base -->\r
                        <div *ngIf="currentStep === 0" class="form-step">\r
                            <div class="card border-0 shadow-sm">\r
                                <div class="card-body p-4">\r
                                    <h4 class="card-title mb-4">\r
                                        <i class="fas fa-info-circle text-primary me-2"></i>\r
                                        Informations de base\r
                                    </h4>\r
\r
                                    <form [formGroup]="basicInfoForm">\r
                                        <div class="row">\r
                                            <div class="col-md-12 mb-3">\r
                                                <label class="form-label fw-semibold">Titre de la formation<span class="text-danger">*</span></label>\r
                                                <input type="text" class="form-control" formControlName="titre"\r
                                                       placeholder="Ex: D\xE9veloppement Web avec Angular"\r
                                                       [class.is-invalid]="basicInfoForm.get('titre')?.invalid && basicInfoForm.get('titre')?.touched">\r
                                                <div class="invalid-feedback">Le titre est requis (min. 5 caract\xE8res)</div>\r
                                            </div>\r
\r
                                            <div class="col-md-4 mb-3">\r
                                                <label class="form-label fw-semibold">Cat\xE9gorie<span class="text-danger">*</span></label>\r
                                                <select class="form-select" formControlName="categorie_formation_id"\r
                                                        [class.is-invalid]="basicInfoForm.get('categorie_formation_id')?.invalid && basicInfoForm.get('categorie_formation_id')?.touched">\r
                                                    <option value="">S\xE9lectionner une cat\xE9gorie</option>\r
                                                    <option *ngFor="let cat of categories" [value]="cat.id">{{ cat.nom }}</option>\r
                                                </select>\r
                                                <div class="invalid-feedback">La cat\xE9gorie est requise</div>\r
                                            </div>\r
\r
                                            <div class="col-md-4 mb-3">\r
                                                <label class="form-label fw-semibold">Niveau<span class="text-danger">*</span></label>\r
                                                <select class="form-select" formControlName="niveau">\r
                                                    <option value="debutant">D\xE9butant</option>\r
                                                    <option value="intermediaire">Interm\xE9diaire</option>\r
                                                    <option value="avance">Avanc\xE9</option>\r
                                                    <option value="expert">Expert</option>\r
                                                </select>\r
                                            </div>\r
\r
                                            <div class="col-md-4 mb-3">\r
                                                <label class="form-label fw-semibold">Langue<span class="text-danger">*</span></label>\r
                                                <select class="form-select" formControlName="langue">\r
                                                    <option value="fr">Fran\xE7ais</option>\r
                                                    <option value="en">Anglais</option>\r
                                                    <option value="es">Espagnol</option>\r
                                                </select>\r
                                            </div>\r
\r
                                            <div class="col-md-6 mb-3">\r
                                                <label class="form-label fw-semibold">Type de formation<span class="text-danger">*</span></label>\r
                                                <select class="form-select" formControlName="type">\r
                                                    <option value="en_ligne">En ligne</option>\r
                                                    <option value="presentiel">Pr\xE9sentiel</option>\r
                                                    <option value="hybride">Hybride</option>\r
                                                </select>\r
                                            </div>\r
\r
                                            <div class="col-md-6 mb-3">\r
                                                <label class="form-label fw-semibold">Nombre max de participants</label>\r
                                                <input type="number" class="form-control" formControlName="nb_max_participants"\r
                                                       placeholder="25" min="1">\r
                                            </div>\r
\r
                                            <div class="col-md-12 mb-3">\r
                                                <label class="form-label fw-semibold">Description courte<span class="text-danger">*</span></label>\r
                                                <input type="text" class="form-control" formControlName="short_description"\r
                                                       placeholder="R\xE9sum\xE9 en une phrase"\r
                                                       [class.is-invalid]="basicInfoForm.get('short_description')?.invalid && basicInfoForm.get('short_description')?.touched">\r
                                                <div class="invalid-feedback">La description courte est requise</div>\r
                                            </div>\r
\r
                                            <div class="col-md-12 mb-3">\r
                                                <label class="form-label fw-semibold">Description compl\xE8te<span class="text-danger">*</span></label>\r
                                                <textarea class="form-control" formControlName="description" rows="5"\r
                                                          placeholder="Description d\xE9taill\xE9e de la formation..."\r
                                                          [class.is-invalid]="basicInfoForm.get('description')?.invalid && basicInfoForm.get('description')?.touched"></textarea>\r
                                                <div class="invalid-feedback">La description est requise</div>\r
                                            </div>\r
\r
                                            <!-- Objectifs p\xE9dagogiques -->\r
                                            <div class="col-md-6 mb-3">\r
                                                <label class="form-label">\r
                                                    <i class="fas fa-bullseye me-1" style="color:#C4900A"></i> Objectifs p\xE9dagogiques\r
                                                </label>\r
                                                <div class="pf-tags-wrap">\r
                                                    <span *ngFor="let obj of objectifs; let i = index" class="pf-tag">\r
                                                        {{ obj }}\r
                                                        <button type="button" class="pf-tag-del" (click)="removeObjectif(i)">\xD7</button>\r
                                                    </span>\r
                                                    <span *ngIf="objectifs.length === 0" class="pf-empty-tags">Aucun objectif ajout\xE9</span>\r
                                                </div>\r
                                                <div class="pf-tag-input">\r
                                                    <input type="text" [(ngModel)]="newObjectif" [ngModelOptions]="{standalone:true}"\r
                                                           placeholder="Ajouter un objectif\u2026" (keyup.enter)="addObjectif()">\r
                                                    <button type="button" (click)="addObjectif()">+ Ajouter</button>\r
                                                </div>\r
                                            </div>\r
\r
                                            <!-- Pr\xE9requis -->\r
                                            <div class="col-md-6 mb-3">\r
                                                <label class="form-label">\r
                                                    <i class="fas fa-list-check me-1" style="color:#1565C0"></i> Pr\xE9requis\r
                                                </label>\r
                                                <div class="pf-tags-wrap">\r
                                                    <span *ngFor="let req of prerequis; let i = index" class="pf-tag pf-tag-blue">\r
                                                        {{ req }}\r
                                                        <button type="button" class="pf-tag-del" (click)="removePrerequis(i)">\xD7</button>\r
                                                    </span>\r
                                                    <span *ngIf="prerequis.length === 0" class="pf-empty-tags">Aucun pr\xE9requis ajout\xE9</span>\r
                                                </div>\r
                                                <div class="pf-tag-input">\r
                                                    <input type="text" [(ngModel)]="newPrerequis" [ngModelOptions]="{standalone:true}"\r
                                                           placeholder="Ajouter un pr\xE9requis\u2026" (keyup.enter)="addPrerequis()">\r
                                                    <button type="button" (click)="addPrerequis()">+ Ajouter</button>\r
                                                </div>\r
                                            </div>\r
\r
                                            <div class="col-md-12">\r
                                                <div class="form-check form-switch">\r
                                                    <input class="form-check-input" type="checkbox" formControlName="est_certifiante"\r
                                                           id="certifiante">\r
                                                    <label class="form-check-label" for="certifiante">\r
                                                        <i class="fas fa-certificate text-warning me-2"></i>\r
                                                        Formation certifiante\r
                                                    </label>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </form>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <!-- \xC9tape 2: M\xE9dia -->\r
                        <div *ngIf="currentStep === 1" class="form-step">\r
                            <div class="card border-0 shadow-sm">\r
                                <div class="card-body p-4">\r
                                    <h4 class="card-title mb-4">\r
                                        <i class="fas fa-photo-video text-primary me-2"></i>\r
                                        M\xE9dia de la formation\r
                                    </h4>\r
\r
                                    <div class="alert alert-info mb-4">\r
                                        <i class="fas fa-info-circle me-2"></i>\r
                                        <strong>Information :</strong> Ajoutez une image de couverture attractive et optionnellement une vid\xE9o de pr\xE9sentation pour donner envie aux apprenants.\r
                                    </div>\r
\r
                                    <form [formGroup]="mediaForm">\r
                                        <div class="row">\r
                                            <!-- Section Image de couverture -->\r
                                            <div class="col-md-12 mb-4">\r
                                                <label class="form-label fw-semibold">\r
                                                    <i class="fas fa-image me-2"></i>\r
                                                    Image de couverture\r
                                                </label>\r
                                                <div class="upload-area border-2 border-dashed rounded-3 p-4 text-center position-relative"\r
                                                     [class.border-primary]="isDragOver"\r
                                                     [class.bg-light]="!imagePreview"\r
                                                     (dragover)="onDragOver($event)"\r
                                                     (dragleave)="onDragLeave($event)"\r
                                                     (drop)="onDrop($event)">\r
\r
                                                    <input type="file"\r
                                                           #imageInput\r
                                                           (change)="onImageSelected($event)"\r
                                                           accept="image/*"\r
                                                           class="d-none"\r
                                                           id="imageUpload">\r
\r
                                                    <!-- Zone d'affichage de l'image -->\r
                                                    <div *ngIf="imagePreview; else noImageTemplate" class="position-relative">\r
                                                        <img [src]="imagePreview"\r
                                                             class="img-fluid rounded shadow-sm"\r
                                                             style="max-height: 300px; max-width: 100%;"\r
                                                             alt="Aper\xE7u de l'image">\r
\r
                                                        <!-- Boutons d'action sur l'image -->\r
                                                        <div class="position-absolute top-0 end-0 m-2">\r
                                                            <button type="button"\r
                                                                    class="btn btn-sm btn-danger rounded-circle"\r
                                                                    (click)="removeImage()"\r
                                                                    title="Supprimer l'image">\r
                                                                <i class="fas fa-times"></i>\r
                                                            </button>\r
                                                        </div>\r
\r
                                                        <!-- Bouton pour changer l'image -->\r
                                                        <div class="mt-3">\r
                                                            <button type="button"\r
                                                                    class="btn btn-outline-primary btn-sm"\r
                                                                    (click)="imageInput.click()">\r
                                                                <i class="fas fa-sync-alt me-2"></i>\r
                                                                Changer l'image\r
                                                            </button>\r
                                                        </div>\r
                                                    </div>\r
\r
                                                    <!-- Template quand aucune image -->\r
                                                    <ng-template #noImageTemplate>\r
                                                        <div class="upload-placeholder"\r
                                                             (click)="imageInput.click()"\r
                                                             style="cursor: pointer;">\r
                                                            <div class="upload-icon mb-3">\r
                                                                <i class="fas fa-cloud-upload-alt fa-3x text-primary"></i>\r
                                                            </div>\r
                                                            <h5 class="mb-2">T\xE9l\xE9charger une image</h5>\r
                                                            <p class="text-muted mb-3">\r
                                                                Glissez-d\xE9posez votre image ici ou cliquez pour parcourir\r
                                                            </p>\r
                                                            <button type="button"\r
                                                                    class="btn btn-primary"\r
                                                                    (click)="$event.stopPropagation(); imageInput.click()">\r
                                                                <i class="fas fa-folder-open me-2"></i>\r
                                                                Choisir un fichier\r
                                                            </button>\r
                                                            <div class="mt-3">\r
                                                                <small class="text-muted">\r
                                                                    <i class="fas fa-info-circle me-1"></i>\r
                                                                    Formats accept\xE9s : JPEG, PNG, WebP \u2022 Taille max : 5MB \u2022 R\xE9solution recommand\xE9e : 1200x600px\r
                                                                </small>\r
                                                            </div>\r
                                                        </div>\r
                                                    </ng-template>\r
                                                </div>\r
\r
                                                <!-- Messages d'erreur pour l'image -->\r
                                                <div *ngIf="imageError" class="alert alert-danger mt-2 mb-0 py-2">\r
                                                    <i class="fas fa-exclamation-triangle me-2"></i>\r
                                                    {{ imageError }}\r
                                                </div>\r
                                            </div>\r
\r
                                            <!-- Section Vid\xE9o de pr\xE9sentation -->\r
                                            <div class="col-md-12 mb-4">\r
                                                <label class="form-label fw-semibold">\r
                                                    <i class="fas fa-play-circle me-2"></i>\r
                                                    Vid\xE9o de pr\xE9sentation <span class="text-muted">(optionnel)</span>\r
                                                </label>\r
\r
                                                <div class="mb-3">\r
                                                    <div class="input-group">\r
                                                        <span class="input-group-text">\r
                                                            <i class="fab fa-youtube text-danger"></i>\r
                                                        </span>\r
                                                        <input type="url"\r
                                                               class="form-control"\r
                                                               formControlName="media_url"\r
                                                               placeholder="https://www.youtube.com/watch?v=... ou https://youtu.be/..."\r
                                                               (blur)="validateVideoUrl()"\r
                                                               (input)="onVideoUrlChange($event)">\r
                                                        <button type="button"\r
                                                                class="btn btn-outline-secondary"\r
                                                                *ngIf="mediaForm.get('media_url')?.value"\r
                                                                (click)="clearVideoUrl()"\r
                                                                title="Effacer l'URL">\r
                                                            <i class="fas fa-times"></i>\r
                                                        </button>\r
                                                    </div>\r
\r
                                                    <!-- Messages d'aide et d'erreur -->\r
                                                    <div class="mt-2">\r
                                                        <small class="text-muted d-block">\r
                                                            <i class="fas fa-lightbulb me-1"></i>\r
                                                            Plateformes support\xE9es : YouTube, Vimeo, ou lien direct vers une vid\xE9o\r
                                                        </small>\r
\r
                                                        <div *ngIf="videoUrlError" class="text-danger mt-1">\r
                                                            <small><i class="fas fa-exclamation-circle me-1"></i>{{ videoUrlError }}</small>\r
                                                        </div>\r
\r
                                                        <div *ngIf="videoUrlValid && mediaForm.get('media_url')?.value" class="text-success mt-1">\r
                                                            <small><i class="fas fa-check-circle me-1"></i>URL vid\xE9o valide</small>\r
                                                        </div>\r
                                                    </div>\r
                                                </div>\r
\r
                                                <!-- Aper\xE7u de la vid\xE9o -->\r
                                                <div class="video-preview" *ngIf="mediaForm.get('media_url')?.value && videoUrlValid">\r
                                                    <div class="card">\r
                                                        <div class="card-header d-flex justify-content-between align-items-center">\r
                                                            <h6 class="mb-0">\r
                                                                <i class="fas fa-eye me-2"></i>\r
                                                                Aper\xE7u de la vid\xE9o\r
                                                            </h6>\r
                                                            <span class="badge bg-success">Vid\xE9o d\xE9tect\xE9e</span>\r
                                                        </div>\r
                                                        <div class="card-body p-0">\r
                                                            <!-- YouTube -->\r
                                                            <div *ngIf="isYouTubeUrl(mediaForm.get('media_url')?.value)" class="ratio ratio-16x9">\r
                                                                <iframe [src]="getYouTubeEmbedUrl(mediaForm.get('media_url')?.value)"\r
                                                                        title="Aper\xE7u YouTube"\r
                                                                        frameborder="0"\r
                                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\r
                                                                        allowfullscreen\r
                                                                        loading="lazy">\r
                                                                </iframe>\r
                                                            </div>\r
\r
                                                            <!-- Vimeo -->\r
                                                            <div *ngIf="isVimeoUrl(mediaForm.get('media_url')?.value)" class="ratio ratio-16x9">\r
                                                                <iframe [src]="getVimeoEmbedUrl(mediaForm.get('media_url')?.value)"\r
                                                                        title="Aper\xE7u Vimeo"\r
                                                                        frameborder="0"\r
                                                                        allow="autoplay; fullscreen; picture-in-picture"\r
                                                                        allowfullscreen\r
                                                                        loading="lazy">\r
                                                                </iframe>\r
                                                            </div>\r
\r
                                                            <!-- Vid\xE9o directe -->\r
                                                            <div *ngIf="isDirectVideoUrl(mediaForm.get('media_url')?.value)" class="p-3">\r
                                                                <video controls\r
                                                                       class="w-100 rounded"\r
                                                                       style="max-height: 400px;"\r
                                                                       [src]="mediaForm.get('media_url')?.value"\r
                                                                       preload="metadata">\r
                                                                    Votre navigateur ne supporte pas les vid\xE9os HTML5.\r
                                                                </video>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                </div>\r
\r
                                                <!-- \xC9tat par d\xE9faut sans vid\xE9o -->\r
                                                <div *ngIf="!mediaForm.get('media_url')?.value" class="video-placeholder">\r
                                                    <div class="card border-dashed">\r
                                                        <div class="card-body text-center py-4">\r
                                                            <i class="fas fa-video fa-3x text-muted mb-3"></i>\r
                                                            <h6 class="text-muted">Aucune vid\xE9o de pr\xE9sentation</h6>\r
                                                            <p class="text-muted small mb-0">\r
                                                                Ajoutez une vid\xE9o pour pr\xE9senter votre formation aux apprenants\r
                                                            </p>\r
                                                        </div>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
\r
                                            <!-- Param\xE8tres vid\xE9o avanc\xE9s -->\r
                                            <div class="col-md-12" *ngIf="mediaForm.get('media_url')?.value && videoUrlValid">\r
                                                <div class="card bg-light">\r
                                                    <div class="card-body">\r
                                                        <h6 class="card-title">\r
                                                            <i class="fas fa-cog me-2"></i>\r
                                                            Param\xE8tres de la vid\xE9o\r
                                                        </h6>\r
                                                        <div class="row">\r
                                                            <div class="col-md-6">\r
                                                                <div class="form-check form-switch">\r
                                                                    <input class="form-check-input"\r
                                                                           type="checkbox"\r
                                                                           formControlName="video_autoplay"\r
                                                                           id="videoAutoplay">\r
                                                                    <label class="form-check-label" for="videoAutoplay">\r
                                                                        Lecture automatique\r
                                                                    </label>\r
                                                                    <small class="text-muted d-block">\r
                                                                        La vid\xE9o d\xE9marre automatiquement (non recommand\xE9)\r
                                                                    </small>\r
                                                                </div>\r
                                                            </div>\r
                                                            <div class="col-md-6">\r
                                                                <div class="form-check form-switch">\r
                                                                    <input class="form-check-input"\r
                                                                           type="checkbox"\r
                                                                           formControlName="video_show_controls"\r
                                                                           id="videoControls">\r
                                                                    <label class="form-check-label" for="videoControls">\r
                                                                        Afficher les contr\xF4les\r
                                                                    </label>\r
                                                                    <small class="text-muted d-block">\r
                                                                        Permet aux utilisateurs de contr\xF4ler la lecture\r
                                                                    </small>\r
                                                                </div>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </form>\r
\r
                                    <!-- R\xE9sum\xE9 de la section -->\r
                                    <div class="mt-4 p-3 bg-light rounded">\r
                                        <h6 class="mb-2">\r
                                            <i class="fas fa-clipboard-check me-2"></i>\r
                                            R\xE9sum\xE9 de cette section\r
                                        </h6>\r
                                        <div class="row">\r
                                            <div class="col-md-6">\r
                                                <p class="mb-1">\r
                                                    <i class="fas fa-image me-2 text-primary"></i>\r
                                                    Image de couverture :\r
                                                    <span class="fw-semibold" [class]="imagePreview ? 'text-success' : 'text-muted'">\r
                                                        {{ imagePreview ? 'Ajout\xE9e' : 'Non d\xE9finie' }}\r
                                                    </span>\r
                                                </p>\r
                                            </div>\r
                                            <div class="col-md-6">\r
                                                <p class="mb-1">\r
                                                    <i class="fas fa-play-circle me-2 text-primary"></i>\r
                                                    Vid\xE9o de pr\xE9sentation :\r
                                                    <span class="fw-semibold" [class]="(mediaForm.get('media_url')?.value && videoUrlValid) ? 'text-success' : 'text-muted'">\r
                                                        {{ (mediaForm.get('media_url')?.value && videoUrlValid) ? 'Configur\xE9e' : 'Non d\xE9finie' }}\r
                                                    </span>\r
                                                </p>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <!-- \xC9tape 3: Modules et Sections -->\r
                        <div *ngIf="currentStep === 2" class="form-step">\r
                            <div class="card border-0 shadow-sm">\r
                                <div class="card-body p-4">\r
                                    <div class="d-flex justify-content-between align-items-center mb-4">\r
                                        <h4 class="card-title mb-0">\r
                                            <i class="fas fa-book text-primary me-2"></i>\r
                                            Modules et Sections\r
                                        </h4>\r
                                        <button class="btn btn-primary" (click)="openModuleModal()">\r
                                            <i class="fas fa-plus me-2"></i> Ajouter un module\r
                                        </button>\r
                                    </div>\r
\r
                                    <!-- Statistiques -->\r
                                    <div class="row mb-4 g-3" *ngIf="modules.length > 0">\r
                                        <div class="col-md-4">\r
                                            <div class="stat-card stat-card--indigo">\r
                                                <div class="stat-card__icon"><i class="fas fa-layer-group"></i></div>\r
                                                <div class="stat-card__body">\r
                                                    <span class="stat-card__value">{{ modules.length }}</span>\r
                                                    <span class="stat-card__label">Modules</span>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="stat-card stat-card--teal">\r
                                                <div class="stat-card__icon"><i class="fas fa-list-ul"></i></div>\r
                                                <div class="stat-card__body">\r
                                                    <span class="stat-card__value">{{ getTotalSections() }}</span>\r
                                                    <span class="stat-card__label">Sections</span>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="stat-card stat-card--amber">\r
                                                <div class="stat-card__icon"><i class="fas fa-clock"></i></div>\r
                                                <div class="stat-card__body">\r
                                                    <span class="stat-card__value">{{ getTotalDuration() }}<small> min</small></span>\r
                                                    <span class="stat-card__label">Dur\xE9e totale</span>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
\r
                                    <!-- Liste des modules -->\r
                                    <div *ngIf="modules.length > 0" class="accordion" id="modulesAccordion">\r
                                        <div *ngFor="let module of modules; let moduleIndex = index"\r
                                             class="accordion-item mb-3 border rounded">\r
\r
                                            <h2 class="accordion-header">\r
                                                <button class="accordion-button" type="button"\r
                                                        [class.collapsed]="moduleIndex !== 0"\r
                                                        [attr.data-bs-toggle]="'collapse'"\r
                                                        [attr.data-bs-target]="'#module-' + moduleIndex">\r
                                                    <div class="d-flex align-items-center w-100">\r
                                                        <i class="fas fa-grip-vertical me-3 text-muted"></i>\r
                                                        <div class="flex-grow-1">\r
                                                            <strong>{{ module.titre }}</strong>\r
                                                            <br>\r
                                                            <small class="text-muted">\r
                                                                {{ module.sections?.length || 0 }} sections \xB7\r
                                                                {{ getModuleDuration(module) }} min\r
                                                            </small>\r
                                                        </div>\r
                                                        <div class="btn-group me-2" (click)="$event.stopPropagation()">\r
                                                            <button class="btn btn-sm btn-outline-primary"\r
                                                                    (click)="editModule(moduleIndex)">\r
                                                                <i class="fas fa-edit"></i>\r
                                                            </button>\r
                                                            <button class="btn btn-sm btn-outline-danger"\r
                                                                    (click)="removeModule(moduleIndex)">\r
                                                                <i class="fas fa-trash"></i>\r
                                                            </button>\r
                                                        </div>\r
                                                    </div>\r
                                                </button>\r
                                            </h2>\r
\r
                                            <div [id]="'module-' + moduleIndex"\r
                                                 class="accordion-collapse collapse"\r
                                                 [class.show]="moduleIndex === 0"\r
                                                 [attr.data-bs-parent]="'#modulesAccordion'">\r
                                                <div class="accordion-body">\r
\r
                                                    <p class="text-muted mb-3" *ngIf="module.description">\r
                                                        {{ module.description }}\r
                                                    </p>\r
\r
                                                    <!-- Liste des sections -->\r
                                                    <div class="sections-list mb-3">\r
                                                        <div *ngFor="let section of module.sections; let sectionIndex = index"\r
                                                             class="d-flex align-items-center justify-content-between p-3 mb-2 border rounded bg-light">\r
                                                            <div class="d-flex align-items-center">\r
                                                                <i class="fas fa-play-circle text-success me-3"></i>\r
                                                                <div>\r
                                                                    <strong>{{ sectionIndex + 1 }}. {{ section.titre }}</strong>\r
                                                                    <br>\r
                                                                    <small class="text-muted">\r
                                                                        {{ section.type }} \xB7 {{ section.duree_estimee }} min\r
                                                                        <span class="badge bg-success ms-2" *ngIf="section.obligatoire">Obligatoire</span>\r
                                                                    </small>\r
                                                                </div>\r
                                                            </div>\r
                                                            <div class="btn-group">\r
                                                                <button class="btn btn-sm btn-outline-primary"\r
                                                                        (click)="editSection(moduleIndex, sectionIndex)">\r
                                                                    <i class="fas fa-edit"></i>\r
                                                                </button>\r
                                                                <button class="btn btn-sm btn-outline-danger"\r
                                                                        (click)="removeSection(moduleIndex, sectionIndex)">\r
                                                                    <i class="fas fa-trash"></i>\r
                                                                </button>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
\r
                                                    <!-- Ajouter section -->\r
                                                    <button class="btn btn-sm btn-outline-success"\r
                                                            (click)="openSectionModal(moduleIndex)">\r
                                                        <i class="fas fa-plus me-1"></i> Ajouter une section\r
                                                    </button>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
\r
                                    <!-- Empty state -->\r
                                    <div *ngIf="modules.length === 0" class="text-center py-5">\r
                                        <i class="fas fa-folder-open fa-4x text-muted mb-3"></i>\r
                                        <h5 class="text-muted">Aucun module cr\xE9\xE9</h5>\r
                                        <p class="text-muted">Commencez par cr\xE9er votre premier module</p>\r
                                        <button class="btn btn-primary" (click)="openModuleModal()">\r
                                            <i class="fas fa-plus me-2"></i> Cr\xE9er le premier module\r
                                        </button>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
<!-- \xC9tape 4 (new): Quiz editor -->\r
<div *ngIf="currentStep === 3" class="form-step">\r
    <div class="card border-0 shadow-sm">\r
        <div class="card-body p-4">\r
            <div class="d-flex justify-content-between align-items-center mb-4">\r
                <h4 class="card-title mb-0">\r
                    <i class="fas fa-question-circle text-primary me-2"></i>\r
                    Quiz des modules\r
                </h4>\r
                <button type="button" class="btn btn-success btn-sm" (click)="saveActiveQuiz()" [disabled]="saving || !activeLocalQuiz">\r
                    <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span>\r
                    <i class="fas fa-save me-1" *ngIf="!saving"></i>\r
                    {{ saving ? 'Enregistrement...' : 'Enregistrer ce quiz' }}\r
                </button>\r
            </div>\r
            <div *ngIf="getQuizSections().length === 0" class="alert alert-info">\r
                <i class="fas fa-info-circle me-2"></i>\r
                Aucune section de type <strong>quiz</strong> dans vos modules. Retournez \xE0 l'\xE9tape Modules &amp; Sections pour en ajouter une.\r
            </div>\r
            <div *ngIf="getQuizSections().length > 0" style="display:flex;gap:1rem;min-height:400px">\r
                <div style="width:220px;flex-shrink:0;border-right:1px solid #e5e7eb;padding-right:1rem">\r
                    <p class="fw-semibold text-muted mb-2" style="font-size:0.8rem;text-transform:uppercase;letter-spacing:.05em">Sections quiz</p>\r
                    <div *ngFor="let qs of getQuizSections()"\r
                         [style.background]="activeQuizKey === getQuizKey(qs.moduleIndex, qs.sectionIndex) ? '#ede9fe' : '#f9fafb'"\r
                         style="cursor:pointer;padding:.4rem .6rem;border-radius:.375rem;margin-bottom:.25rem;font-size:.85rem"\r
                         (click)="selectQuiz(qs.moduleIndex, qs.sectionIndex)">\r
                        <i class="fas fa-question-circle me-1" style="color:#7c3aed"></i>\r
                        <strong>{{ qs.sectionTitle }}</strong><br>\r
                        <small class="text-muted">{{ qs.moduleTitle }}</small>\r
                    </div>\r
                </div>\r
                <div style="flex:1" *ngIf="activeLocalQuiz; else noQuizSelected">\r
                    <div *ngIf="loadingQuiz" class="text-center py-4">\r
                        <div class="spinner-border text-primary" role="status"></div>\r
                    </div>\r
                    <div *ngIf="!loadingQuiz">\r
                        <div class="row g-2 mb-3">\r
                            <div class="col-md-8">\r
                                <label class="form-label fw-semibold">Titre du quiz</label>\r
                                <input type="text" class="form-control" [(ngModel)]="activeLocalQuiz!.titre" [ngModelOptions]="{standalone:true}">\r
                            </div>\r
                            <div class="col-md-4">\r
                                <label class="form-label fw-semibold">Dur\xE9e (min)</label>\r
                                <input type="number" class="form-control" [(ngModel)]="activeLocalQuiz!.duree_minutes" [ngModelOptions]="{standalone:true}" min="0">\r
                            </div>\r
                            <div class="col-md-6">\r
                                <label class="form-label fw-semibold">Score minimum (%)</label>\r
                                <input type="number" class="form-control" [(ngModel)]="activeLocalQuiz!.score_minimum" [ngModelOptions]="{standalone:true}" min="0" max="100">\r
                            </div>\r
                            <div class="col-md-6">\r
                                <label class="form-label fw-semibold">Tentatives max</label>\r
                                <input type="number" class="form-control" [(ngModel)]="activeLocalQuiz!.tentatives_max" [ngModelOptions]="{standalone:true}" min="1">\r
                            </div>\r
                        </div>\r
                        <div *ngFor="let q of activeLocalQuiz!.questions" class="card mb-2 border">\r
                            <div class="card-header d-flex align-items-center justify-content-between py-2 px-3" style="cursor:pointer;background:#f8f9fa" (click)="toggleQuizQuestion(q.id)">\r
                                <span class="fw-semibold" style="font-size:.875rem">{{ q.question_text || '(sans titre)' }}</span>\r
                                <div class="d-flex gap-2 align-items-center">\r
                                    <span class="badge bg-secondary" style="font-size:.7rem">{{ getTypeLabel(q.type) }}</span>\r
                                    <button type="button" class="btn btn-sm btn-outline-danger" (click)="$event.stopPropagation(); removeQuizQuestion(q)"><i class="fas fa-trash"></i></button>\r
                                </div>\r
                            </div>\r
                            <div class="card-body p-3" *ngIf="expandedQuestion === q.id">\r
                                <div class="mb-2">\r
                                    <label class="form-label">Question</label>\r
                                    <input type="text" class="form-control" [(ngModel)]="q.question_text" [ngModelOptions]="{standalone:true}" placeholder="Texte de la question">\r
                                </div>\r
                                <div class="row g-2 mb-2">\r
                                    <div class="col-md-6">\r
                                        <label class="form-label">Points</label>\r
                                        <input type="number" class="form-control" [(ngModel)]="q.points" [ngModelOptions]="{standalone:true}" min="1">\r
                                    </div>\r
                                    <div class="col-md-6">\r
                                        <label class="form-label">Explication</label>\r
                                        <input type="text" class="form-control" [(ngModel)]="q.explication" [ngModelOptions]="{standalone:true}" placeholder="Optionnel">\r
                                    </div>\r
                                </div>\r
                                <div *ngIf="q.type !== 'text'">\r
                                    <label class="form-label">R\xE9ponses</label>\r
                                    <div *ngFor="let opt of q.reponses; let oi = index" class="d-flex align-items-center gap-2 mb-1">\r
                                        <input type="text" class="form-control form-control-sm" [(ngModel)]="opt.reponse_text" [ngModelOptions]="{standalone:true}" placeholder="R\xE9ponse">\r
                                       <!-- Choix multiple/unique : case \xE0 cocher -->\r
<div class="form-check mb-0 ms-1" *ngIf="q.type !== 'true_false'">\r
    <input class="form-check-input" type="checkbox" [checked]="opt.is_correct" (change)="toggleQuizCorrect(q, opt)">\r
    <label class="form-check-label" style="font-size:.75rem">Correcte</label>\r
</div>\r
<!-- Vrai/Faux : radio exclusif -->\r
<div class="form-check mb-0 ms-1" *ngIf="q.type === 'true_false'">\r
    <input class="form-check-input" type="radio"\r
           [name]="'tf_' + q.id"\r
           [checked]="opt.is_correct"\r
           (change)="toggleQuizCorrect(q, opt)">\r
    <label class="form-check-label" style="font-size:.75rem; color:#059669; font-weight:600;">Correcte</label>\r
</div>\r
<button type="button" class="btn btn-sm btn-outline-secondary" (click)="removeQuizOption(q, oi)" *ngIf="q.type !== 'true_false'">\r
    <i class="fas fa-times"></i>\r
</button>\r
                                    </div>\r
                                    <button type="button" class="btn btn-sm btn-outline-primary mt-1" (click)="addQuizOption(q)" *ngIf="q.type !== 'true_false'"><i class="fas fa-plus me-1"></i> R\xE9ponse</button>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <div class="d-flex gap-2 mt-3 flex-wrap">\r
                            <button type="button" class="btn btn-sm btn-outline-primary" (click)="addQuizQuestion('multiple_choice')"><i class="fas fa-dot-circle me-1"></i> Choix unique</button>\r
                            <button type="button" class="btn btn-sm btn-outline-primary" (click)="addQuizQuestion('multiple_choice_multi')"><i class="fas fa-check-square me-1"></i> Choix multiple</button>\r
                            <button type="button" class="btn btn-sm btn-outline-primary" (click)="addQuizQuestion('true_false')"><i class="fas fa-toggle-on me-1"></i> Vrai / Faux</button>\r
                            <button type="button" class="btn btn-sm btn-outline-primary" (click)="addQuizQuestion('text')"><i class="fas fa-font me-1"></i> Texte libre</button>\r
                        </div>\r
                    </div>\r
                </div>\r
                <ng-template #noQuizSelected>\r
                    <div class="d-flex align-items-center justify-content-center text-muted" style="flex:1">\r
                        <span>S\xE9lectionnez une section quiz \xE0 gauche pour l'\xE9diter.</span>\r
                    </div>\r
                </ng-template>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- \xC9tape 5: Informations suppl\xE9mentaires -->\r
<div *ngIf="currentStep === 4" class="form-step">\r
    <div class="card border-0 shadow-sm">\r
        <div class="card-body p-4">\r
            <h4 class="card-title mb-4">\r
                <i class="fas fa-info-circle text-primary me-2"></i>\r
                Informations suppl\xE9mentaires\r
            </h4>\r
\r
            <form [formGroup]="additionalInfoForm">\r
                <div class="row">\r
\r
                    <!-- Section 1: D\xE9tails de formation -->\r
                    <div class="col-12 mb-4">\r
                        <h5 class="text-secondary border-bottom pb-2">\r
                            <i class="fas fa-cogs me-2"></i>\r
                            D\xE9tails de la formation\r
                        </h5>\r
                    </div>\r
\r
                    <div class="col-md-4 mb-3">\r
                        <label class="form-label fw-semibold">Difficult\xE9<span class="text-danger">*</span></label>\r
                        <select class="form-select" formControlName="difficulte"\r
                                [class.is-invalid]="additionalInfoForm.get('difficulte')?.invalid && additionalInfoForm.get('difficulte')?.touched">\r
                            <option value="facile">Facile</option>\r
                            <option value="moyen">Moyen</option>\r
                            <option value="difficile">Difficile</option>\r
                            <option value="expert">Expert</option>\r
                        </select>\r
                        <div class="invalid-feedback">Le niveau de difficult\xE9 est requis</div>\r
                    </div>\r
\r
                    <!-- <div class="col-md-4 mb-3">\r
                        <label class="form-label fw-semibold">Coo\xFBt (XOF)<span class="text-danger">*</span></label>\r
                        <input type="number" class="form-control" formControlName="prix"\r
                               placeholder="0" min="0" step="0.01"\r
                               [class.is-invalid]="additionalInfoForm.get('prix')?.invalid && additionalInfoForm.get('prix')?.touched">\r
                        <small class="text-muted">0 pour une formation gratuite</small>\r
                        <div class="invalid-feedback">Le Co\xFBt est requis (0 minimum)</div>\r
                    </div> -->\r
\r
                    <div class="col-md-4 mb-3">\r
                        <label class="form-label fw-semibold">Dur\xE9e totale (heures)</label>\r
                        <input type="number" class="form-control" formControlName="duree_totale"\r
                               placeholder="40" min="1" step="0.5"\r
                               [class.is-invalid]="additionalInfoForm.get('duree_totale')?.invalid && additionalInfoForm.get('duree_totale')?.touched">\r
                        <small class="text-muted">Estimation du temps total n\xE9cessaire</small>\r
                        <div class="invalid-feedback">La dur\xE9e doit \xEAtre d'au moins 1 heure</div>\r
                    </div>\r
\r
                    <!-- Section 2: Contenu et comp\xE9tences -->\r
                    <div class="col-12 mb-4 mt-4">\r
                        <h5 class="text-secondary border-bottom pb-2">\r
                            <i class="fas fa-graduation-cap me-2"></i>\r
                            Contenu et comp\xE9tences\r
                        </h5>\r
                    </div>\r
\r
                    <div class="col-md-6 mb-3">\r
                        <label class="form-label">\r
                            <i class="fas fa-graduation-cap me-1" style="color:#3D7A5F"></i> Comp\xE9tences acquises\r
                        </label>\r
                        <div class="pf-tags-wrap">\r
                            <span *ngFor="let comp of competencesAcquises; let i = index" class="pf-tag pf-tag-green">\r
                                {{ comp }}\r
                                <button type="button" class="pf-tag-del" (click)="removeCompetence(i)">\xD7</button>\r
                            </span>\r
                            <span *ngIf="competencesAcquises.length === 0" class="pf-empty-tags">Aucune comp\xE9tence ajout\xE9e</span>\r
                        </div>\r
                        <div class="pf-tag-input">\r
                            <input type="text" [(ngModel)]="newCompetence" [ngModelOptions]="{standalone:true}"\r
                                   placeholder="Ajouter une comp\xE9tence\u2026" (keyup.enter)="addCompetence()">\r
                            <button type="button" (click)="addCompetence()">+ Ajouter</button>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-md-6 mb-3">\r
                        <label class="form-label">\r
                            <i class="fas fa-tools me-1" style="color:#6B3FA0"></i> Outils requis\r
                        </label>\r
                        <div class="pf-tags-wrap">\r
                            <span *ngFor="let outil of outilsRequis; let i = index" class="pf-tag pf-tag-purple">\r
                                {{ outil }}\r
                                <button type="button" class="pf-tag-del" (click)="removeOutil(i)">\xD7</button>\r
                            </span>\r
                            <span *ngIf="outilsRequis.length === 0" class="pf-empty-tags">Aucun outil ajout\xE9</span>\r
                        </div>\r
                        <div class="pf-tag-input">\r
                            <input type="text" [(ngModel)]="newOutil" [ngModelOptions]="{standalone:true}"\r
                                   placeholder="Ajouter un outil\u2026" (keyup.enter)="addOutil()">\r
                            <button type="button" (click)="addOutil()">+ Ajouter</button>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Section 3: Public et marketing -->\r
                    <div class="col-12 mb-4 mt-4">\r
                        <h5 class="text-secondary border-bottom pb-2">\r
                            <i class="fas fa-users me-2"></i>\r
                            Public cible et marketing\r
                        </h5>\r
                    </div>\r
\r
                    <div class="col-md-12 mb-3">\r
                        <label class="form-label fw-semibold">Public cible</label>\r
                        <textarea class="form-control" formControlName="public_cible" rows="3"\r
                                  placeholder="\xC0 qui s'adresse cette formation ? (ex: d\xE9veloppeurs juniors, chefs de projet, \xE9tudiants en informatique...)"></textarea>\r
                        <small class="text-muted">D\xE9crivez pr\xE9cis\xE9ment votre audience cible</small>\r
                    </div>\r
\r
                    <div class="col-md-12 mb-3">\r
                        <label class="form-label fw-semibold">Tags</label>\r
                        <input type="text" class="form-control" formControlName="tags"\r
                               placeholder="javascript, angular, web, d\xE9veloppement (s\xE9par\xE9s par des virgules)">\r
                        <small class="text-muted">Maximum 10 tags, s\xE9par\xE9s par des virgules. Utiles pour la recherche.</small>\r
                    </div>\r
\r
                    <!-- Section 4: Param\xE8tres avanc\xE9s -->\r
                    <div class="col-12 mb-4 mt-4">\r
                        <h5 class="text-secondary border-bottom pb-2">\r
                            <i class="fas fa-cog me-2"></i>\r
                            Param\xE8tres avanc\xE9s\r
                        </h5>\r
                    </div>\r
\r
                    <div class="col-md-6 mb-3">\r
                        <label class="form-label fw-semibold">Date de d\xE9but</label>\r
                        <input type="date" class="form-control" formControlName="date_debut">\r
                        <small class="text-muted">Date de d\xE9but pr\xE9vue (optionnel)</small>\r
                    </div>\r
\r
                    <div class="col-md-6 mb-3">\r
                        <label class="form-label fw-semibold">Date de fin</label>\r
                        <input type="date" class="form-control" formControlName="date_fin">\r
                        <small class="text-muted">Date de fin pr\xE9vue (optionnel)</small>\r
                    </div>\r
\r
                    <div class="col-md-12 mb-3">\r
                        <label class="form-label fw-semibold">M\xE9tadonn\xE9es (JSON)</label>\r
                        <textarea class="form-control" formControlName="metadata" rows="2"\r
                                  placeholder='{"version": "1.0", "auteur": "Nom", "copyright": "2024"}'></textarea>\r
                        <small class="text-muted">Informations techniques au format JSON (optionnel)</small>\r
                    </div>\r
\r
                    <!-- Section 5: Options de publication -->\r
                    <div class="col-12 mb-4 mt-4">\r
                        <h5 class="text-secondary border-bottom pb-2">\r
                            <i class="fas fa-toggle-on me-2"></i>\r
                            Options de publication\r
                        </h5>\r
                    </div>\r
                    <div class="col-md-4 mb-3">\r
                        <div class="form-check form-switch">\r
                            <input class="form-check-input" type="checkbox"\r
                                   formControlName="inscription_ouverte" id="inscriptionOuverte">\r
                            <label class="form-check-label" for="inscriptionOuverte">\r
                                <i class="fas fa-door-open text-success me-2"></i>\r
                                Inscriptions ouvertes\r
                            </label>\r
                            <small class="text-muted d-block">\r
                                Les utilisateurs peuvent s'inscrire \xE0 cette formation\r
                            </small>\r
                        </div>\r
                    </div>\r
                    <div class="col-md-4 mb-3">\r
                        <div class="form-check form-switch">\r
                            <input class="form-check-input" type="checkbox"\r
                                   formControlName="est_publie" id="estPublie">\r
                            <label class="form-check-label" for="estPublie">\r
                                <i class="fas fa-eye text-info me-2"></i>\r
                                Formation publi\xE9e\r
                            </label>\r
                            <small class="text-muted d-block">\r
                                La formation est visible publiquement\r
                            </small>\r
                        </div>\r
                    </div>\r
\r
                    <!-- R\xE9sum\xE9 des informations -->\r
                    <div class="col-12 mt-4">\r
                        <div class="card bg-light border-left-primary">\r
                            <div class="card-body">\r
                                <h6 class="card-title">\r
                                    <i class="fas fa-clipboard-check me-2"></i>\r
                                    R\xE9sum\xE9 des informations suppl\xE9mentaires\r
                                </h6>\r
                                <div class="row">\r
                                    <div class="col-md-6">\r
                                        <ul class="list-unstyled">\r
                                            <li class="mb-1">\r
                                                <strong>Difficult\xE9:</strong> {{ getDifficulteLabel(additionalInfoForm.get('difficulte')?.value) }}\r
                                            </li>\r
                                            <li class="mb-1">\r
                                                <strong>Co\xFBt:</strong>\r
                                                <span [class]="additionalInfoForm.get('prix')?.value == 0 ? 'text-success' : 'text-primary'">\r
                                                    {{ additionalInfoForm.get('prix')?.value == 0 ? 'GRATUIT' : additionalInfoForm.get('prix')?.value + 'XOF' }}\r
                                                </span>\r
                                            </li>\r
                                            <li class="mb-1">\r
                                                <strong>Dur\xE9e:</strong> {{ additionalInfoForm.get('duree_totale')?.value || 'Non d\xE9finie' }}h\r
                                            </li>\r
                                        </ul>\r
                                    </div>\r
                                    <div class="col-md-6">\r
                                        <ul class="list-unstyled">\r
                                            <li class="mb-1">\r
                                                <strong>Comp\xE9tences:</strong> {{ getCompetencesCount() }} d\xE9finie(s)\r
                                            </li>\r
                                            <li class="mb-1">\r
                                                <strong>Outils requis:</strong> {{ getOutilsCount() }} d\xE9fini(s)\r
                                            </li>\r
                                            <li class="mb-1">\r
                                                <strong>Inscriptions:</strong>\r
                                                <span [class]="additionalInfoForm.get('inscription_ouverte')?.value ? 'text-success' : 'text-warning'">\r
                                                    {{ additionalInfoForm.get('inscription_ouverte')?.value ? 'Ouvertes' : 'Ferm\xE9es' }}\r
                                                </span>\r
                                            </li>\r
                                        </ul>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </form>\r
        </div>\r
    </div>\r
</div>\r
\r
                        <!-- \xC9tape 6: Co\xFBt estimatif -->\r
                        <div *ngIf="currentStep === 5" class="form-step">\r
                            <div class="card border-0 shadow-sm">\r
                                <div class="card-body p-4">\r
                                    <h4 class="card-title mb-4">\r
                                        <i class="fas fa-calculator text-primary me-2"></i>\r
                                        Estimation des co\xFBts de formation\r
                                    </h4>\r
\r
                                    <div class="alert alert-info mb-4">\r
                                        <i class="fas fa-info-circle me-2"></i>\r
                                        <strong>Information :</strong> Cette estimation permet aux entreprises d'\xE9valuer le budget n\xE9cessaire pour cette formation.\r
                                    </div>\r
\r
                                    <form [formGroup]="pricingForm">\r
                                        <div class="row">\r
                                            <!-- Co\xFBts de d\xE9veloppement -->\r
                                            <div class="col-md-12 mb-4">\r
                                                <h5 class="text-secondary">\r
                                                    <i class="fas fa-code me-2"></i>\r
                                                    Co\xFBts de d\xE9veloppement\r
                                                </h5>\r
                                            </div>\r
\r
                                            <div class="col-md-6 mb-3">\r
                                                <label class="form-label fw-semibold">Co\xFBt de conception (XOF)</label>\r
                                                <input type="number" class="form-control" formControlName="cout_conception"\r
                                                       placeholder="2000" step="100" min="0">\r
                                                <small class="text-muted">Analyse des besoins, conception p\xE9dagogique</small>\r
                                            </div>\r
\r
                                            <div class="col-md-6 mb-3">\r
                                                <label class="form-label fw-semibold">Co\xFBt de production (XOF)</label>\r
                                                <input type="number" class="form-control" formControlName="cout_production"\r
                                                       placeholder="5000" step="100" min="0">\r
                                                <small class="text-muted">Cr\xE9ation du contenu, vid\xE9os, exercices</small>\r
                                            </div>\r
\r
                                            <!-- Co\xFBts de livraison -->\r
                                            <div class="col-md-12 mb-4 mt-4">\r
                                                <h5 class="text-secondary">\r
                                                    <i class="fas fa-chalkboard-teacher me-2"></i>\r
                                                    Co\xFBts de livraison\r
                                                </h5>\r
                                            </div>\r
\r
                                            <div class="col-md-6 mb-3">\r
                                                <label class="form-label fw-semibold">Co\xFBt formateur par jour (XOF)</label>\r
                                                <input type="number" class="form-control" formControlName="cout_formateur_jour"\r
                                                       placeholder="600" step="50" min="0">\r
                                                <small class="text-muted">Tarif journalier du formateur</small>\r
                                            </div>\r
\r
                                            <div class="col-md-6 mb-3">\r
                                                <label class="form-label fw-semibold">Frais logistiques par participant (XOF)</label>\r
                                                <input type="number" class="form-control" formControlName="frais_logistique"\r
                                                       placeholder="50" step="10" min="0">\r
                                                <small class="text-muted">Mat\xE9riel, documentation, pauses</small>\r
                                            </div>\r
\r
                                            <!-- Estimation automatique -->\r
                                            <div class="col-md-12 mt-4">\r
                                                <div class="card bg-light">\r
                                                    <div class="card-body">\r
                                                        <h5 class="card-title">\r
                                                            <i class="fas fa-chart-line text-success me-2"></i>\r
                                                            Estimation totale\r
                                                        </h5>\r
                                                        <div class="row">\r
                                                            <div class="col-md-6">\r
                                                                <div class="d-flex justify-content-between">\r
                                                                    <span>Co\xFBts de d\xE9veloppement :</span>\r
                                                                    <strong>{{ getCoutDeveloppement() }} XOF</strong>\r
                                                                </div>\r
                                                                <div class="d-flex justify-content-between">\r
                                                                    <span>Co\xFBt formateur ({{ getFormControlValue('nb_jours') || 1 }} jour{{ (getFormControlValue('nb_jours') || 1) > 1 ? 's' : '' }}) :</span>\r
                                                                    <strong>{{ getCoutFormateur() }} XOF</strong>\r
                                                                </div>\r
                                                                <div class="d-flex justify-content-between">\r
                                                                    <span>Logistique ({{ getFormControlValue('nb_max_participants') || 1 }} participant{{ (getFormControlValue('nb_max_participants') || 1) > 1 ? 's' : '' }}) :</span>\r
                                                                    <strong>{{ getCoutLogistique() }} XOF</strong>\r
                                                                </div>\r
                                                                <hr>\r
                                                                <div class="d-flex justify-content-between">\r
                                                                    <span><strong>Co\xFBt total estim\xE9 :</strong></span>\r
                                                                    <strong class="text-success">{{ getCoutTotal() }} XOF</strong>\r
                                                                </div>\r
                                                            </div>\r
                                                            <div class="col-md-6">\r
                                                                <div class="d-flex justify-content-between">\r
                                                                    <span>Co\xFBt par participant :</span>\r
                                                                    <strong class="text-primary">{{ getCoutParticipant() }} XOF</strong>\r
                                                                </div>\r
                                                                <div class="d-flex justify-content-between">\r
                                                                    <span>Co\xFBt par heure :</span>\r
                                                                    <strong class="text-info">{{ getCoutParHeure() }} XOF</strong>\r
                                                                </div>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
\r
                                            <!-- Notes -->\r
                                            <div class="col-md-12 mt-3">\r
                                                <label class="form-label fw-semibold">Notes sur l'estimation</label>\r
                                                <textarea class="form-control" formControlName="notes_estimation" rows="3"\r
                                                          placeholder="Pr\xE9cisions sur l'estimation, conditions particuli\xE8res, options suppl\xE9mentaires..."></textarea>\r
                                            </div>\r
                                        </div>\r
                                    </form>\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Navigation Buttons -->\r
                        <div class="d-flex justify-content-between align-items-center pf-nav-footer">\r
                            <span class="pf-step-lbl">\xC9tape {{ currentStep + 1 }} sur 6</span>\r
                            <div class="d-flex gap-2 align-items-center">\r
                                <button class="btn btn-outline-secondary"\r
                                        *ngIf="currentStep > 0"\r
                                        (click)="prevStep()">\r
                                    <i class="fas fa-arrow-left me-2"></i> Retour\r
                                </button>\r
                                <button class="btn btn-primary"\r
                                        *ngIf="currentStep < 5"\r
                                        (click)="nextStep()">\r
                                    Suivant <i class="fas fa-arrow-right ms-2"></i>\r
                                </button>\r
                                <button class="btn btn-success"\r
                                        *ngIf="currentStep === 5"\r
                                        (click)="updateCourse()"\r
                                        [disabled]="saving">\r
                                    <span *ngIf="saving" class="spinner-border spinner-border-sm me-2"></span>\r
                                    <i class="fas fa-check me-2" *ngIf="!saving"></i>\r
                                    {{ saving ? 'Mise \xE0 jour...' : 'Mettre \xE0 jour la formation' }}\r
                                </button>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- Modal: Ajouter/Modifier Module -->\r
<div class="modal fade" id="updateSuccessModal" tabindex="-1" data-bs-backdrop="static">\r
    <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content">\r
            <div class="modal-body text-center p-5">\r
                <div class="text-success mb-4">\r
                    <i class="fas fa-check-circle fa-5x"></i>\r
                </div>\r
                <h4 class="mb-3">Formation mise \xE0 jour avec succ\xE8s !</h4>\r
                <p class="text-muted mb-4">Toutes les modifications ont \xE9t\xE9 sauvegard\xE9es.</p>\r
                <div class="d-flex gap-2 justify-content-center">\r
                    <button class="btn btn-primary" (click)="goToCoursesList()">\r
                        <i class="fas fa-list me-2"></i>\r
                        Voir mes formations\r
                    </button>\r
                    <button class="btn btn-outline-secondary" (click)="continueEditing()">\r
                        <i class="fas fa-edit me-2"></i>\r
                        Continuer l'\xE9dition\r
                    </button>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- Modal: Ajouter/Modifier Module -->\r
<div class="modal fade" id="moduleModal" tabindex="-1">\r
    <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5 class="modal-title">{{ editingModuleIndex !== null ? 'Modifier' : 'Nouveau' }} Module</h5>\r
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>\r
            </div>\r
            <form #moduleForm="ngForm" (ngSubmit)="saveModule()">\r
                <div class="modal-body">\r
                    <div class="mb-3">\r
                        <label class="form-label">Titre du module <span class="text-danger">*</span></label>\r
                        <input type="text" class="form-control" [(ngModel)]="newModule.titre"\r
                               name="titre" required placeholder="Ex: Introduction au sujet">\r
                    </div>\r
                    <div class="mb-3">\r
                        <label class="form-label">Description</label>\r
                        <textarea class="form-control" [(ngModel)]="newModule.description"\r
                                  name="description" rows="3" placeholder="Description du module..."></textarea>\r
                    </div>\r
                    <div class="mb-3">\r
                        <label class="form-label">Dur\xE9e estim\xE9e (minutes)</label>\r
                        <input type="number" class="form-control" [(ngModel)]="newModule.duree_estimee"\r
                               name="duree_estimee" min="0" placeholder="0">\r
                    </div>\r
                </div>\r
                <div class="modal-footer">\r
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>\r
                    <button type="submit" class="btn btn-primary" [disabled]="!moduleForm.valid">\r
                        {{ editingModuleIndex !== null ? 'Modifier' : 'Ajouter' }}\r
                    </button>\r
                </div>\r
            </form>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- Modal: Ajouter/Modifier Section -->\r
<div class="modal fade" id="sectionModal" tabindex="-1">\r
    <div class="modal-dialog modal-dialog-centered modal-lg">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5 class="modal-title">{{ editingSectionIndex !== null ? 'Modifier' : 'Nouvelle' }} Section</h5>\r
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>\r
            </div>\r
            <form #sectionForm="ngForm" (ngSubmit)="saveSection()">\r
                <div class="modal-body">\r
                    <div class="row">\r
                        <!-- Titre -->\r
                        <div class="col-md-12 mb-3">\r
                            <label class="form-label">Titre de la section<span class="text-danger">*</span></label>\r
                            <input type="text" class="form-control" [(ngModel)]="currentSection.titre"\r
                                   name="titre" required placeholder="Ex: Introduction\u2026">\r
                        </div>\r
\r
                        <!-- Type + Dur\xE9e -->\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Type<span class="text-danger">*</span></label>\r
                            <select class="form-select" [(ngModel)]="currentSection.type" name="type" required\r
                                    (ngModelChange)="sectionUploadFile=null;sectionUploadPreview=null;sectionUploadError='';currentSection.ressources=''">\r
                                <option value="text">Texte / Lecture</option>\r
                                <option value="video">Vid\xE9o</option>\r
                                <option value="image">Image</option>\r
                                <option value="quiz">Quiz</option>\r
                                <option value="fichier">Fichier \xE0 t\xE9l\xE9charger</option>\r
                            </select>\r
                        </div>\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Dur\xE9e (minutes)</label>\r
                            <input type="number" class="form-control" [(ngModel)]="currentSection.duree_estimee"\r
                                   name="duree" min="0">\r
                        </div>\r
\r
                        <!-- Contenu texte -->\r
                        <div class="col-md-12 mb-3" *ngIf="currentSection.type === 'text'">\r
                            <label class="form-label">Contenu texte</label>\r
                            <textarea class="form-control" [(ngModel)]="currentSection.contenu"\r
                                      name="contenu" rows="5" placeholder="R\xE9digez le contenu de lecture\u2026"></textarea>\r
                        </div>\r
\r
                        <!-- Vid\xE9o : URL ou upload -->\r
                        <div class="col-md-12 mb-3" *ngIf="currentSection.type === 'video'">\r
                            <label class="form-label">Source vid\xE9o</label>\r
                            <div class="btn-group mb-2 w-100">\r
                                <button type="button" class="btn btn-sm"\r
                                        [class.btn-primary]="sectionVideoMode==='url'"\r
                                        [class.btn-outline-secondary]="sectionVideoMode!=='url'"\r
                                        (click)="sectionVideoMode='url';sectionUploadFile=null;currentSection.ressources=''">\r
                                    <i class="fas fa-link me-1"></i> URL\r
                                </button>\r
                                <button type="button" class="btn btn-sm"\r
                                        [class.btn-primary]="sectionVideoMode==='upload'"\r
                                        [class.btn-outline-secondary]="sectionVideoMode!=='upload'"\r
                                        (click)="sectionVideoMode='upload';currentSection.ressources=''">\r
                                    <i class="fas fa-upload me-1"></i> Upload fichier\r
                                </button>\r
                            </div>\r
                            <ng-container *ngIf="sectionVideoMode==='url'">\r
                                <input type="url" class="form-control" [(ngModel)]="currentSection.ressources"\r
                                       name="ressources_video_url"\r
                                       placeholder="https://www.youtube.com/watch?v=\u2026 ou lien .mp4">\r
                                <small class="text-muted">YouTube, Vimeo ou lien direct (.mp4 / .webm)</small>\r
                            </ng-container>\r
                            <ng-container *ngIf="sectionVideoMode==='upload'">\r
                                <input type="file" class="form-control" name="ressources_video_file"\r
                                       accept="video/mp4,video/webm,video/ogg"\r
                                       (change)="onSectionFileSelected($event)">\r
                                <small class="text-muted">Formats : MP4, WebM, OGG</small>\r
                                <div *ngIf="sectionUploadFile" class="mt-1 text-info small">\r
                                    <i class="fas fa-paperclip me-1"></i> {{ sectionUploadFile.name }}\r
                                </div>\r
                            </ng-container>\r
                        </div>\r
\r
                        <!-- Image : upload -->\r
                        <div class="col-md-12 mb-3" *ngIf="currentSection.type === 'image'">\r
                            <label class="form-label">Image \xE0 afficher</label>\r
                            <input type="file" class="form-control" name="ressources_image"\r
                                   accept="image/jpeg,image/png,image/webp,image/gif"\r
                                   (change)="onSectionFileSelected($event)">\r
                            <small class="text-muted">Formats : JPEG, PNG, WebP, GIF</small>\r
                            <div *ngIf="sectionUploadPreview" class="mt-2">\r
                                <img [src]="sectionUploadPreview" class="img-fluid rounded" style="max-height:180px" alt="aper\xE7u">\r
                            </div>\r
                            <div *ngIf="currentSection.ressources && !sectionUploadPreview" class="mt-1 text-success small">\r
                                <i class="fas fa-check-circle me-1"></i> Image existante conserv\xE9e\r
                            </div>\r
                        </div>\r
\r
                        <!-- Quiz : info -->\r
                        <div class="col-md-12 mb-3" *ngIf="currentSection.type === 'quiz'">\r
                            <div class="alert alert-info mb-0">\r
                                <i class="fas fa-info-circle me-2"></i>\r
                                Une fois la section cr\xE9\xE9e, configurez le quiz \xE0 l'\xE9tape <strong>Quiz</strong>.\r
                            </div>\r
                        </div>\r
\r
                        <!-- Fichier \xE0 t\xE9l\xE9charger -->\r
                        <div class="col-md-12 mb-3" *ngIf="currentSection.type === 'fichier'">\r
                            <label class="form-label">Fichier \xE0 mettre \xE0 disposition</label>\r
                            <input type="file" class="form-control" name="ressources_fichier"\r
                                   accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip,.txt"\r
                                   (change)="onSectionFileSelected($event)">\r
                            <small class="text-muted">PDF, Word, Excel, PowerPoint, ZIP, TXT</small>\r
                            <div *ngIf="sectionUploadFile" class="mt-1 text-info small">\r
                                <i class="fas fa-paperclip me-1"></i> {{ sectionUploadFile.name }}\r
                            </div>\r
                            <div *ngIf="currentSection.ressources && !sectionUploadFile" class="mt-1 text-success small">\r
                                <i class="fas fa-check-circle me-1"></i> Fichier existant conserv\xE9\r
                            </div>\r
                        </div>\r
\r
                        <!-- Description g\xE9n\xE9rale (hors text) -->\r
                        <div class="col-md-12 mb-3" *ngIf="currentSection.type !== 'text'">\r
                            <label class="form-label">Description (optionnelle)</label>\r
                            <textarea class="form-control" [(ngModel)]="currentSection.contenu"\r
                                      name="contenu" rows="2" placeholder="Br\xE8ve description\u2026"></textarea>\r
                        </div>\r
\r
                        <!-- Erreur upload -->\r
                        <div class="col-md-12" *ngIf="sectionUploadError">\r
                            <div class="alert alert-danger py-2 mb-2">{{ sectionUploadError }}</div>\r
                        </div>\r
\r
                        <!-- Options -->\r
                        <div class="col-md-6">\r
                            <div class="form-check form-switch">\r
                                <input class="form-check-input" type="checkbox" [(ngModel)]="currentSection.obligatoire"\r
                                       name="obligatoire" id="sm_edit_obligatoire">\r
                                <label class="form-check-label" for="sm_edit_obligatoire">Section obligatoire</label>\r
                            </div>\r
                        </div>\r
                        <div class="col-md-6">\r
                            <div class="form-check form-switch">\r
                                <input class="form-check-input" type="checkbox" [(ngModel)]="currentSection.visible"\r
                                       name="visible" id="sm_edit_visible">\r
                                <label class="form-check-label" for="sm_edit_visible">Section visible</label>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="modal-footer">\r
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>\r
                    <button type="submit" class="btn btn-primary" [disabled]="!sectionForm.valid || sectionUploading">\r
                        <span *ngIf="sectionUploading" class="spinner-border spinner-border-sm me-1"></span>\r
                        {{ sectionUploading ? 'Upload en cours\u2026' : (editingSectionIndex !== null ? 'Modifier' : 'Ajouter') }}\r
                    </button>\r
                </div>\r
            </form>\r
        </div>\r
    </div>\r
</div>\r
`, styles: ['/* src/app/features/courses/instructor-course-edit/instructor-course-edit.component.scss */\n.content {\n  padding: 2rem 0;\n  background: #F8F5F0;\n  min-height: 100vh;\n}\n.add-course-item {\n  background: #FFFFFF;\n  border-radius: 16px;\n  box-shadow: 0 2px 24px rgba(44, 36, 22, 0.09);\n  overflow: hidden;\n  margin-bottom: 2rem;\n}\n.pf-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.4rem 2rem;\n  border-bottom: 1px solid #E4DDD3;\n}\n.pf-header .pf-header-icon {\n  width: 50px;\n  height: 50px;\n  background: #FDF3DC;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.35rem;\n  color: #C4900A;\n  flex-shrink: 0;\n}\n.pf-header h3 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #2C2416;\n  margin: 0;\n}\n.pf-header p {\n  font-size: 0.8rem;\n  color: #7A6A55;\n  margin: 0;\n}\n.wizard {\n  padding: 1.25rem 2rem;\n  border-bottom: 1px solid #E4DDD3;\n}\n.wizard .form-wizard-steps {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n.wizard .form-wizard-steps::before {\n  content: "";\n  position: absolute;\n  top: 17px;\n  left: 30px;\n  right: 30px;\n  height: 1px;\n  background: #E4DDD3;\n  z-index: 0;\n}\n.wizard .form-wizard-steps li {\n  flex: 1;\n  text-align: center;\n  position: relative;\n  z-index: 1;\n}\n.wizard .profile-step {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.3rem;\n}\n.wizard .dot-active {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #E4DDD3;\n  color: #7A6A55;\n  font-weight: 700;\n  font-size: 0.78rem;\n  transition: all 0.2s;\n}\n.wizard .dot-active .tickmark {\n  display: none;\n}\n.wizard .dot-active .number {\n  display: block;\n}\n.wizard .step-section p {\n  font-size: 0.7rem;\n  color: #7A6A55;\n  margin: 0;\n  font-weight: 500;\n}\n.wizard li.progress-active .dot-active {\n  background: #C4900A;\n  color: #FFFFFF;\n  box-shadow: 0 0 0 4px rgba(196, 144, 10, 0.15);\n}\n.wizard li.progress-active .step-section p {\n  color: #C4900A;\n  font-weight: 700;\n}\n.wizard li.progress-activated .dot-active {\n  background: #5BA87A;\n  color: #FFFFFF;\n}\n.wizard li.progress-activated .dot-active .tickmark {\n  display: block;\n}\n.wizard li.progress-activated .dot-active .number {\n  display: none;\n}\n.wizard li.progress-activated .step-section p {\n  color: #5BA87A;\n}\n.form-container {\n  padding: 1.75rem 2rem;\n}\n.form-step {\n  min-height: 320px;\n}\n.text-secondary.border-bottom {\n  font-size: 0.72rem !important;\n  font-weight: 700 !important;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: #7A6A55 !important;\n  border-color: #E4DDD3 !important;\n}\n.form-label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #7A6A55;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 0.4rem;\n}\n.form-control,\n.form-select {\n  border-radius: 10px;\n  border: 1.5px solid #E4DDD3;\n  padding: 9px 13px;\n  font-size: 0.9rem;\n  color: #2C2416;\n  background: #FFFFFF;\n  transition: border-color 0.2s;\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: #C4900A;\n  box-shadow: 0 0 0 3px rgba(196, 144, 10, 0.12);\n  background: #FFFFFF;\n}\n.form-control.is-invalid,\n.form-select.is-invalid {\n  border-color: #dc3545;\n}\ntextarea.form-control {\n  resize: vertical;\n}\n.pf-tags-wrap {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.45rem;\n  padding: 0.65rem 0.75rem;\n  background: #F8F5F0;\n  border-radius: 10px;\n  border: 1.5px solid #E4DDD3;\n  min-height: 48px;\n  align-items: flex-start;\n}\n.pf-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.28rem 0.6rem;\n  background: #FDF3DC;\n  color: rgb(157.1805825243, 115.4796116505, 8.0194174757);\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 500;\n  border: 1px solid rgba(196, 144, 10, 0.22);\n}\n.pf-tag .pf-tag-del {\n  background: none;\n  border: none;\n  padding: 0 0 0 2px;\n  line-height: 1;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.55;\n  font-size: 0.75rem;\n}\n.pf-tag .pf-tag-del:hover {\n  opacity: 1;\n}\n.pf-tag.pf-tag-blue {\n  background: #EBF4FD;\n  color: #1565C0;\n  border-color: rgba(21, 101, 192, 0.2);\n}\n.pf-tag.pf-tag-green {\n  background: #EAF5F0;\n  color: #3D7A5F;\n  border-color: rgba(61, 122, 95, 0.2);\n}\n.pf-tag.pf-tag-purple {\n  background: #F3EFF9;\n  color: #6B3FA0;\n  border-color: rgba(107, 63, 160, 0.2);\n}\n.pf-tag-input {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  margin-top: 0.55rem;\n}\n.pf-tag-input input {\n  flex: 1;\n  border: 1.5px solid #E4DDD3;\n  border-radius: 8px;\n  padding: 0.38rem 0.75rem;\n  font-size: 0.85rem;\n  color: #2C2416;\n  outline: none;\n  background: #FFFFFF;\n}\n.pf-tag-input input:focus {\n  border-color: #C4900A;\n}\n.pf-tag-input input::placeholder {\n  color: rgb(172.4637681159, 156.9275362319, 136.5362318841);\n}\n.pf-tag-input button {\n  background: #C4900A;\n  color: #FFFFFF;\n  border: none;\n  border-radius: 8px;\n  padding: 0.38rem 0.75rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.pf-tag-input button:hover {\n  background: rgb(162.0330097087, 119.0446601942, 8.2669902913);\n}\n.pf-empty-tags {\n  font-size: 0.8rem;\n  color: rgb(161.9927536232, 144.4855072464, 121.5072463768);\n  font-style: italic;\n  padding: 0.2rem 0.3rem;\n}\n.module-item {\n  border: 1.5px solid #E4DDD3;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.module-item .card-header {\n  background: #F8F5F0;\n  border-bottom: 1px solid #E4DDD3;\n  padding: 11px 15px;\n}\n.module-item .section-item {\n  border: 1px solid #E4DDD3;\n  border-radius: 8px;\n  transition: background 0.15s;\n}\n.module-item .section-item:hover {\n  background: #F8F5F0;\n}\n.upload-zone,\n.upload-area {\n  border: 2px dashed #E4DDD3;\n  border-radius: 12px;\n  padding: 2.5rem;\n  text-align: center;\n  transition: all 0.2s;\n  cursor: pointer;\n  background: #F8F5F0;\n}\n.upload-zone:hover,\n.upload-zone.drag-over,\n.upload-area:hover,\n.upload-area.drag-over {\n  border-color: #C4900A;\n  background: #FDF3DC;\n}\n.pf-nav-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.1rem 2rem;\n  border-top: 1px solid #E4DDD3;\n  background: #F8F5F0;\n  margin: 1.5rem -2rem -1.75rem;\n}\n.pf-nav-footer .pf-step-lbl {\n  font-size: 0.82rem;\n  color: #7A6A55;\n  font-weight: 500;\n}\n.btn {\n  border-radius: 10px;\n  padding: 9px 20px;\n  font-weight: 600;\n  font-size: 0.87rem;\n  transition: all 0.2s;\n}\n.btn.btn-primary {\n  background: #2C2416;\n  border-color: #2C2416;\n  color: #FFFFFF;\n}\n.btn.btn-primary:hover {\n  background: rgb(84.8, 69.3818181818, 42.4);\n  border-color: rgb(84.8, 69.3818181818, 42.4);\n}\n.btn.btn-success {\n  background: #C4900A;\n  border-color: #C4900A;\n  color: #FFFFFF;\n}\n.btn.btn-success:hover {\n  background: rgb(166.8854368932, 122.6097087379, 8.5145631068);\n}\n.btn.btn-outline-secondary {\n  border-color: #E4DDD3;\n  color: #7A6A55;\n  background: #FFFFFF;\n}\n.btn.btn-outline-secondary:hover {\n  background: #F8F5F0;\n  color: #2C2416;\n}\n.btn.btn-outline-primary {\n  border-color: #C4900A;\n  color: #C4900A;\n  background: #FFFFFF;\n}\n.btn.btn-outline-primary:hover {\n  background: #FDF3DC;\n}\n.btn.btn-outline-danger:hover {\n  transform: none;\n}\n.btn.btn-sm {\n  padding: 5px 13px;\n  font-size: 0.8rem;\n  border-radius: 8px;\n}\n.alert {\n  border-radius: 10px;\n  border: none;\n  font-size: 0.88rem;\n}\n.alert.alert-info {\n  background: #EBF4FD;\n  color: #1565C0;\n}\n.alert.alert-success {\n  background: #EAF5F0;\n  color: #3D7A5F;\n}\n.alert.alert-danger {\n  background: #FEF0F0;\n  color: #C62828;\n}\n.alert.alert-warning {\n  background: #FDF3DC;\n  color: rgb(147.4757281553, 108.3495145631, 7.5242718447);\n}\n.form-check-input:checked {\n  background-color: #C4900A;\n  border-color: #C4900A;\n}\n.card.bg-light {\n  background: #F8F5F0 !important;\n  border: 1.5px solid #E4DDD3 !important;\n  border-radius: 10px !important;\n}\n.stat-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 20px;\n  border-radius: 14px;\n  border: 1.5px solid transparent;\n}\n.stat-card__icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.stat-card__body {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.stat-card__value {\n  font-size: 1.75rem;\n  font-weight: 800;\n  line-height: 1.1;\n  letter-spacing: -0.5px;\n}\n.stat-card__value small {\n  font-size: 0.85rem;\n  font-weight: 600;\n  margin-left: 2px;\n}\n.stat-card__label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  opacity: 0.65;\n  margin-top: 2px;\n}\n.stat-card--indigo {\n  background: #f0f0ff;\n  border-color: #c7c7f7;\n  color: #3730a3;\n}\n.stat-card--indigo .stat-card__icon {\n  background: #e0e0fc;\n  color: #4338ca;\n}\n.stat-card--teal {\n  background: #f0fdf9;\n  border-color: #a7f3de;\n  color: #065f46;\n}\n.stat-card--teal .stat-card__icon {\n  background: #ccfbef;\n  color: #059669;\n}\n.stat-card--amber {\n  background: #fffbeb;\n  border-color: #fde68a;\n  color: #78350f;\n}\n.stat-card--amber .stat-card__icon {\n  background: #fef3c7;\n  color: #d97706;\n}\n@media (max-width: 768px) {\n  .form-container,\n  .pf-nav-footer,\n  .pf-header {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .wizard {\n    padding: 1rem;\n  }\n  .pf-nav-footer {\n    margin: 1rem -1rem -1rem;\n  }\n  .step-section p {\n    font-size: 0.62rem;\n  }\n}\n/*# sourceMappingURL=instructor-course-edit.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: FormationService }, { type: CategorieService }, { type: Router }, { type: ActivatedRoute }, { type: DomSanitizer }, { type: AuthService }, { type: QuizService }, { type: QuestionQuizService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorCourseEditComponent, { className: "InstructorCourseEditComponent", filePath: "app/features/courses/instructor-course-edit/instructor-course-edit.component.ts", lineNumber: 67 });
})();
export {
  InstructorCourseEditComponent
};
//# sourceMappingURL=chunk-YBF4R2ES.js.map
