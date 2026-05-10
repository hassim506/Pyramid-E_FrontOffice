import {
  CategorieService
} from "./chunk-6UTDYCNA.js";
import {
  FormationService
} from "./chunk-IPOGRO4B.js";
import {
  AuthService
} from "./chunk-FLPD3SNY.js";
import "./chunk-FKX6UC3I.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
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
} from "./chunk-YMJPU2MG.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-LFLGGSY5.js";
import {
  DomSanitizer
} from "./chunk-VEAR4SGA.js";
import "./chunk-J5AS2QYG.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-GWJREDC5.js";
import {
  Component,
  Subscription,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2JCHGHJA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/courses/instructor-course-edit/instructor-course-edit.component.ts
var _c0 = (a0, a1) => ({ "progress-active": a0, "progress-activated": a1 });
var _c1 = () => ({ standalone: true });
function InstructorCourseEditComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "div", 54)(3, "span", 55);
    \u0275\u0275text(4, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 56);
    \u0275\u0275text(6, "Chargement des donn\xE9es...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 57);
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
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Erreur !");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "button", 60);
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
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Succ\xE8s !");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "button", 60);
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
function InstructorCourseEditComponent_div_3_div_58_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 123);
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
function InstructorCourseEditComponent_div_3_div_58_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 125)(2, "input", 126);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_div_3_div_58_div_91_Template_input_ngModelChange_2_listener($event) {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.objectifs[i_r8], $event) || (ctx_r1.objectifs[i_r8] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 127);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_58_div_91_Template_button_click_3_listener() {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeObjectif(i_r8));
    });
    \u0275\u0275element(4, "i", 128);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.objectifs[i_r8]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(2, _c1));
  }
}
function InstructorCourseEditComponent_div_3_div_58_div_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 125)(2, "input", 129);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_div_3_div_58_div_101_Template_input_ngModelChange_2_listener($event) {
      const i_r10 = \u0275\u0275restoreView(_r9).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.prerequis[i_r10], $event) || (ctx_r1.prerequis[i_r10] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 127);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_58_div_101_Template_button_click_3_listener() {
      const i_r10 = \u0275\u0275restoreView(_r9).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removePrerequis(i_r10));
    });
    \u0275\u0275element(4, "i", 128);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r10 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.prerequis[i_r10]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(2, _c1));
  }
}
function InstructorCourseEditComponent_div_3_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83)(2, "div", 84)(3, "h4", 85);
    \u0275\u0275element(4, "i", 86);
    \u0275\u0275text(5, " Informations de base ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 87)(7, "div", 27)(8, "div", 28)(9, "label", 88);
    \u0275\u0275text(10, "Titre de la formation");
    \u0275\u0275elementStart(11, "span", 30);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "input", 89);
    \u0275\u0275elementStart(14, "div", 90);
    \u0275\u0275text(15, "Le titre est requis (min. 5 caract\xE8res)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 91)(17, "label", 88);
    \u0275\u0275text(18, "Cat\xE9gorie");
    \u0275\u0275elementStart(19, "span", 30);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "select", 92)(22, "option", 93);
    \u0275\u0275text(23, "S\xE9lectionner une cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, InstructorCourseEditComponent_div_3_div_58_option_24_Template, 2, 2, "option", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 90);
    \u0275\u0275text(26, "La cat\xE9gorie est requise");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 91)(28, "label", 88);
    \u0275\u0275text(29, "Niveau");
    \u0275\u0275elementStart(30, "span", 30);
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "select", 95)(33, "option", 96);
    \u0275\u0275text(34, "D\xE9butant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 97);
    \u0275\u0275text(36, "Interm\xE9diaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 98);
    \u0275\u0275text(38, "Avanc\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 99);
    \u0275\u0275text(40, "Expert");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 91)(42, "label", 88);
    \u0275\u0275text(43, "Langue");
    \u0275\u0275elementStart(44, "span", 30);
    \u0275\u0275text(45, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "select", 100)(47, "option", 101);
    \u0275\u0275text(48, "Fran\xE7ais");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option", 102);
    \u0275\u0275text(50, "Anglais");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "option", 103);
    \u0275\u0275text(52, "Espagnol");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div", 32)(54, "label", 88);
    \u0275\u0275text(55, "Type de formation");
    \u0275\u0275elementStart(56, "span", 30);
    \u0275\u0275text(57, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "select", 104)(59, "option", 105);
    \u0275\u0275text(60, "En ligne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "option", 106);
    \u0275\u0275text(62, "Pr\xE9sentiel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "option", 107);
    \u0275\u0275text(64, "Hybride");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 32)(66, "label", 88);
    \u0275\u0275text(67, "Nombre max de participants");
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "input", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 28)(70, "label", 88);
    \u0275\u0275text(71, "Description courte");
    \u0275\u0275elementStart(72, "span", 30);
    \u0275\u0275text(73, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(74, "input", 109);
    \u0275\u0275elementStart(75, "div", 90);
    \u0275\u0275text(76, "La description courte est requise");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 28)(78, "label", 88);
    \u0275\u0275text(79, "Description compl\xE8te");
    \u0275\u0275elementStart(80, "span", 30);
    \u0275\u0275text(81, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(82, "textarea", 110);
    \u0275\u0275elementStart(83, "div", 90);
    \u0275\u0275text(84, "La description est requise");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 32)(86, "div", 111)(87, "div", 112)(88, "h6", 113);
    \u0275\u0275element(89, "i", 114);
    \u0275\u0275text(90, " Objectifs p\xE9dagogiques ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(91, InstructorCourseEditComponent_div_3_div_58_div_91_Template, 5, 3, "div", 115);
    \u0275\u0275elementStart(92, "button", 116);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_58_Template_button_click_92_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addObjectif());
    });
    \u0275\u0275element(93, "i", 117);
    \u0275\u0275text(94, " Ajouter ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(95, "div", 32)(96, "div", 111)(97, "div", 112)(98, "h6", 113);
    \u0275\u0275element(99, "i", 118);
    \u0275\u0275text(100, " Pr\xE9requis ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(101, InstructorCourseEditComponent_div_3_div_58_div_101_Template, 5, 3, "div", 115);
    \u0275\u0275elementStart(102, "button", 116);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_58_Template_button_click_102_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addPrerequis());
    });
    \u0275\u0275element(103, "i", 117);
    \u0275\u0275text(104, " Ajouter ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(105, "div", 119)(106, "div", 42);
    \u0275\u0275element(107, "input", 120);
    \u0275\u0275elementStart(108, "label", 121);
    \u0275\u0275element(109, "i", 122);
    \u0275\u0275text(110, " Formation certifiante ");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r1.basicInfoForm);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r1.basicInfoForm.get("titre")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.basicInfoForm.get("titre")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-invalid", ((tmp_5_0 = ctx_r1.basicInfoForm.get("categorie_formation_id")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.basicInfoForm.get("categorie_formation_id")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance(50);
    \u0275\u0275classProp("is-invalid", ((tmp_7_0 = ctx_r1.basicInfoForm.get("short_description")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.basicInfoForm.get("short_description")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r1.basicInfoForm.get("description")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.basicInfoForm.get("description")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.objectifs);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r1.prerequis);
  }
}
function InstructorCourseEditComponent_div_3_div_59_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 159);
    \u0275\u0275element(1, "img", 160);
    \u0275\u0275elementStart(2, "div", 161)(3, "button", 162);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_59_div_20_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeImage());
    });
    \u0275\u0275element(4, "i", 128);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 163)(6, "button", 164);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_59_div_20_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      \u0275\u0275nextContext();
      const imageInput_r13 = \u0275\u0275reference(19);
      return \u0275\u0275resetView(imageInput_r13.click());
    });
    \u0275\u0275element(7, "i", 165);
    \u0275\u0275text(8, " Changer l'image ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.imagePreview, \u0275\u0275sanitizeUrl);
  }
}
function InstructorCourseEditComponent_div_3_div_59_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 166);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_59_ng_template_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      \u0275\u0275nextContext();
      const imageInput_r13 = \u0275\u0275reference(19);
      return \u0275\u0275resetView(imageInput_r13.click());
    });
    \u0275\u0275elementStart(1, "div", 167);
    \u0275\u0275element(2, "i", 168);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 124);
    \u0275\u0275text(4, "T\xE9l\xE9charger une image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 169);
    \u0275\u0275text(6, " Glissez-d\xE9posez votre image ici ou cliquez pour parcourir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 170);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_59_ng_template_21_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r14);
      \u0275\u0275nextContext();
      const imageInput_r13 = \u0275\u0275reference(19);
      $event.stopPropagation();
      return \u0275\u0275resetView(imageInput_r13.click());
    });
    \u0275\u0275element(8, "i", 171);
    \u0275\u0275text(9, " Choisir un fichier ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 163)(11, "small", 140);
    \u0275\u0275element(12, "i", 172);
    \u0275\u0275text(13, " Formats accept\xE9s : JPEG, PNG, WebP \u2022 Taille max : 5MB \u2022 R\xE9solution recommand\xE9e : 1200x600px ");
    \u0275\u0275elementEnd()()();
  }
}
function InstructorCourseEditComponent_div_3_div_59_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 173);
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.imageError, " ");
  }
}
function InstructorCourseEditComponent_div_3_div_59_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 174);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_59_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearVideoUrl());
    });
    \u0275\u0275element(1, "i", 128);
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseEditComponent_div_3_div_59_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 175)(1, "small");
    \u0275\u0275element(2, "i", 176);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.videoUrlError);
  }
}
function InstructorCourseEditComponent_div_3_div_59_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 177)(1, "small");
    \u0275\u0275element(2, "i", 178);
    \u0275\u0275text(3, "URL vid\xE9o valide");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseEditComponent_div_3_div_59_div_42_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 188);
    \u0275\u0275element(1, "iframe", 189);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getYouTubeEmbedUrl((tmp_7_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_7_0.value), \u0275\u0275sanitizeResourceUrl);
  }
}
function InstructorCourseEditComponent_div_3_div_59_div_42_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 188);
    \u0275\u0275element(1, "iframe", 190);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getVimeoEmbedUrl((tmp_7_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_7_0.value), \u0275\u0275sanitizeResourceUrl);
  }
}
function InstructorCourseEditComponent_div_3_div_59_div_42_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 191)(1, "video", 192);
    \u0275\u0275text(2, " Votre navigateur ne supporte pas les vid\xE9os HTML5. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", (tmp_7_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_7_0.value, \u0275\u0275sanitizeUrl);
  }
}
function InstructorCourseEditComponent_div_3_div_59_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 179)(1, "div", 180)(2, "div", 181)(3, "h6", 182);
    \u0275\u0275element(4, "i", 183);
    \u0275\u0275text(5, " Aper\xE7u de la vid\xE9o ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 184);
    \u0275\u0275text(7, "Vid\xE9o d\xE9tect\xE9e");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 185);
    \u0275\u0275template(9, InstructorCourseEditComponent_div_3_div_59_div_42_div_9_Template, 2, 1, "div", 186)(10, InstructorCourseEditComponent_div_3_div_59_div_42_div_10_Template, 2, 1, "div", 186)(11, InstructorCourseEditComponent_div_3_div_59_div_42_div_11_Template, 3, 1, "div", 187);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.isYouTubeUrl((tmp_6_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_6_0.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isVimeoUrl((tmp_7_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_7_0.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isDirectVideoUrl((tmp_8_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_8_0.value));
  }
}
function InstructorCourseEditComponent_div_3_div_59_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 193)(1, "div", 194)(2, "div", 195);
    \u0275\u0275element(3, "i", 196);
    \u0275\u0275elementStart(4, "h6", 140);
    \u0275\u0275text(5, "Aucune vid\xE9o de pr\xE9sentation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 197);
    \u0275\u0275text(7, " Ajoutez une vid\xE9o pour pr\xE9senter votre formation aux apprenants ");
    \u0275\u0275elementEnd()()()();
  }
}
function InstructorCourseEditComponent_div_3_div_59_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "div", 111)(2, "div", 112)(3, "h6", 113);
    \u0275\u0275element(4, "i", 198);
    \u0275\u0275text(5, " Param\xE8tres de la vid\xE9o ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 27)(7, "div", 41)(8, "div", 42);
    \u0275\u0275element(9, "input", 199);
    \u0275\u0275elementStart(10, "label", 200);
    \u0275\u0275text(11, " Lecture automatique ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 146);
    \u0275\u0275text(13, " La vid\xE9o d\xE9marre automatiquement (non recommand\xE9) ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 41)(15, "div", 42);
    \u0275\u0275element(16, "input", 201);
    \u0275\u0275elementStart(17, "label", 202);
    \u0275\u0275text(18, " Afficher les contr\xF4les ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "small", 146);
    \u0275\u0275text(20, " Permet aux utilisateurs de contr\xF4ler la lecture ");
    \u0275\u0275elementEnd()()()()()()();
  }
}
function InstructorCourseEditComponent_div_3_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83)(2, "div", 84)(3, "h4", 85);
    \u0275\u0275element(4, "i", 130);
    \u0275\u0275text(5, " M\xE9dia de la formation ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 131);
    \u0275\u0275element(7, "i", 132);
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "Information :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Ajoutez une image de couverture attractive et optionnellement une vid\xE9o de pr\xE9sentation pour donner envie aux apprenants. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "form", 87)(12, "div", 27)(13, "div", 133)(14, "label", 88);
    \u0275\u0275element(15, "i", 134);
    \u0275\u0275text(16, " Image de couverture ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 135);
    \u0275\u0275listener("dragover", function InstructorCourseEditComponent_div_3_div_59_Template_div_dragover_17_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragOver($event));
    })("dragleave", function InstructorCourseEditComponent_div_3_div_59_Template_div_dragleave_17_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragLeave($event));
    })("drop", function InstructorCourseEditComponent_div_3_div_59_Template_div_drop_17_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    });
    \u0275\u0275elementStart(18, "input", 136, 1);
    \u0275\u0275listener("change", function InstructorCourseEditComponent_div_3_div_59_Template_input_change_18_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onImageSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, InstructorCourseEditComponent_div_3_div_59_div_20_Template, 9, 1, "div", 137)(21, InstructorCourseEditComponent_div_3_div_59_ng_template_21_Template, 14, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, InstructorCourseEditComponent_div_3_div_59_div_23_Template, 3, 1, "div", 138);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 133)(25, "label", 88);
    \u0275\u0275element(26, "i", 139);
    \u0275\u0275text(27, " Vid\xE9o de pr\xE9sentation ");
    \u0275\u0275elementStart(28, "span", 140);
    \u0275\u0275text(29, "(optionnel)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 13)(31, "div", 125)(32, "span", 141);
    \u0275\u0275element(33, "i", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 143);
    \u0275\u0275listener("blur", function InstructorCourseEditComponent_div_3_div_59_Template_input_blur_34_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.validateVideoUrl());
    })("input", function InstructorCourseEditComponent_div_3_div_59_Template_input_input_34_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onVideoUrlChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, InstructorCourseEditComponent_div_3_div_59_button_35_Template, 2, 0, "button", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 145)(37, "small", 146);
    \u0275\u0275element(38, "i", 147);
    \u0275\u0275text(39, " Plateformes support\xE9es : YouTube, Vimeo, ou lien direct vers une vid\xE9o ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, InstructorCourseEditComponent_div_3_div_59_div_40_Template, 4, 1, "div", 148)(41, InstructorCourseEditComponent_div_3_div_59_div_41_Template, 4, 0, "div", 149);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, InstructorCourseEditComponent_div_3_div_59_div_42_Template, 12, 3, "div", 150)(43, InstructorCourseEditComponent_div_3_div_59_div_43_Template, 8, 0, "div", 151);
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, InstructorCourseEditComponent_div_3_div_59_div_44_Template, 21, 0, "div", 152);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 153)(46, "h6", 124);
    \u0275\u0275element(47, "i", 154);
    \u0275\u0275text(48, " R\xE9sum\xE9 de cette section ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 27)(50, "div", 41)(51, "p", 155);
    \u0275\u0275element(52, "i", 156);
    \u0275\u0275text(53, " Image de couverture : ");
    \u0275\u0275elementStart(54, "span", 157);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 41)(57, "p", 155);
    \u0275\u0275element(58, "i", 158);
    \u0275\u0275text(59, " Vid\xE9o de pr\xE9sentation : ");
    \u0275\u0275elementStart(60, "span", 157);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_19_0;
    let tmp_20_0;
    const noImageTemplate_r16 = \u0275\u0275reference(22);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx_r1.mediaForm);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-primary", ctx_r1.isDragOver)("bg-light", !ctx_r1.imagePreview);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.imagePreview)("ngIfElse", noImageTemplate_r16);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.imageError);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", (tmp_11_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_11_0.value);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.videoUrlError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.videoUrlValid && ((tmp_13_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_13_0.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_14_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_14_0.value) && ctx_r1.videoUrlValid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_15_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_15_0.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_16_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_16_0.value) && ctx_r1.videoUrlValid);
    \u0275\u0275advance(10);
    \u0275\u0275classMap(ctx_r1.imagePreview ? "text-success" : "text-muted");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.imagePreview ? "Ajout\xE9e" : "Non d\xE9finie", " ");
    \u0275\u0275advance(5);
    \u0275\u0275classMap(((tmp_19_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_19_0.value) && ctx_r1.videoUrlValid ? "text-success" : "text-muted");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_20_0 = ctx_r1.mediaForm.get("media_url")) == null ? null : tmp_20_0.value) && ctx_r1.videoUrlValid ? "Configur\xE9e" : "Non d\xE9finie", " ");
  }
}
function InstructorCourseEditComponent_div_3_div_60_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 210)(1, "div", 211)(2, "div", 212)(3, "div", 213)(4, "h3", 182);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "Modules");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "div", 211)(9, "div", 214)(10, "div", 213)(11, "h3", 182);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "small");
    \u0275\u0275text(14, "Sections");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 211)(16, "div", 215)(17, "div", 213)(18, "h3", 182);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "small");
    \u0275\u0275text(21, "Dur\xE9e totale");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.modules.length);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.getTotalSections());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.getTotalDuration(), " min");
  }
}
function InstructorCourseEditComponent_div_3_div_60_div_11_div_1_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 169);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", module_r20.description, " ");
  }
}
function InstructorCourseEditComponent_div_3_div_60_div_11_div_1_div_20_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 240);
    \u0275\u0275text(1, "Obligatoire");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseEditComponent_div_3_div_60_div_11_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 235)(1, "div", 236);
    \u0275\u0275element(2, "i", 237);
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "br");
    \u0275\u0275elementStart(7, "small", 140);
    \u0275\u0275text(8);
    \u0275\u0275template(9, InstructorCourseEditComponent_div_3_div_60_div_11_div_1_div_20_span_9_Template, 2, 0, "span", 238);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 239)(11, "button", 225);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_60_div_11_div_1_div_20_Template_button_click_11_listener() {
      const sectionIndex_r22 = \u0275\u0275restoreView(_r21).index;
      const moduleIndex_r19 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editSection(moduleIndex_r19, sectionIndex_r22));
    });
    \u0275\u0275element(12, "i", 226);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 227);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_60_div_11_div_1_div_20_Template_button_click_13_listener() {
      const sectionIndex_r22 = \u0275\u0275restoreView(_r21).index;
      const moduleIndex_r19 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeSection(moduleIndex_r19, sectionIndex_r22));
    });
    \u0275\u0275element(14, "i", 228);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r23 = ctx.$implicit;
    const sectionIndex_r22 = ctx.index;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", sectionIndex_r22 + 1, ". ", section_r23.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", section_r23.type, " \xB7 ", section_r23.duree_estimee, " min ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", section_r23.obligatoire);
  }
}
function InstructorCourseEditComponent_div_3_div_60_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 218)(1, "h2", 219)(2, "button", 220)(3, "div", 221);
    \u0275\u0275element(4, "i", 222);
    \u0275\u0275elementStart(5, "div", 223)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "br");
    \u0275\u0275elementStart(9, "small", 140);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 224);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_60_div_11_div_1_Template_div_click_11_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(12, "button", 225);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_60_div_11_div_1_Template_button_click_12_listener() {
      const moduleIndex_r19 = \u0275\u0275restoreView(_r18).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.editModule(moduleIndex_r19));
    });
    \u0275\u0275element(13, "i", 226);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 227);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_60_div_11_div_1_Template_button_click_14_listener() {
      const moduleIndex_r19 = \u0275\u0275restoreView(_r18).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeModule(moduleIndex_r19));
    });
    \u0275\u0275element(15, "i", 228);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(16, "div", 229)(17, "div", 230);
    \u0275\u0275template(18, InstructorCourseEditComponent_div_3_div_60_div_11_div_1_p_18_Template, 2, 1, "p", 231);
    \u0275\u0275elementStart(19, "div", 232);
    \u0275\u0275template(20, InstructorCourseEditComponent_div_3_div_60_div_11_div_1_div_20_Template, 15, 5, "div", 233);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 234);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_60_div_11_div_1_Template_button_click_21_listener() {
      const moduleIndex_r19 = \u0275\u0275restoreView(_r18).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openSectionModal(moduleIndex_r19));
    });
    \u0275\u0275element(22, "i", 117);
    \u0275\u0275text(23, " Ajouter une section ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const module_r20 = ctx.$implicit;
    const moduleIndex_r19 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("collapsed", moduleIndex_r19 !== 0);
    \u0275\u0275attribute("data-bs-toggle", "collapse")("data-bs-target", "#module-" + moduleIndex_r19);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("Module ", moduleIndex_r19 + 1, ": ", module_r20.titre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", (module_r20.sections == null ? null : module_r20.sections.length) || 0, " sections \xB7 ", ctx_r1.getModuleDuration(module_r20), " min ");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("show", moduleIndex_r19 === 0);
    \u0275\u0275property("id", "module-" + moduleIndex_r19);
    \u0275\u0275attribute("data-bs-parent", "#modulesAccordion");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", module_r20.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", module_r20.sections);
  }
}
function InstructorCourseEditComponent_div_3_div_60_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 216);
    \u0275\u0275template(1, InstructorCourseEditComponent_div_3_div_60_div_11_div_1_Template, 24, 14, "div", 217);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.modules);
  }
}
function InstructorCourseEditComponent_div_3_div_60_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 241);
    \u0275\u0275element(1, "i", 242);
    \u0275\u0275elementStart(2, "h5", 140);
    \u0275\u0275text(3, "Aucun module cr\xE9\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 140);
    \u0275\u0275text(5, "Commencez par cr\xE9er votre premier module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 16);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_60_div_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openModuleModal());
    });
    \u0275\u0275element(7, "i", 206);
    \u0275\u0275text(8, " Cr\xE9er le premier module ");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseEditComponent_div_3_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83)(2, "div", 84)(3, "div", 203)(4, "h4", 204);
    \u0275\u0275element(5, "i", 205);
    \u0275\u0275text(6, " Modules et Sections ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 16);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_60_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openModuleModal());
    });
    \u0275\u0275element(8, "i", 206);
    \u0275\u0275text(9, " Ajouter un module ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, InstructorCourseEditComponent_div_3_div_60_div_10_Template, 22, 3, "div", 207)(11, InstructorCourseEditComponent_div_3_div_60_div_11_Template, 2, 1, "div", 208)(12, InstructorCourseEditComponent_div_3_div_60_div_12_Template, 9, 0, "div", 209);
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
function InstructorCourseEditComponent_div_3_div_61_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 125)(2, "input", 270);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_div_3_div_61_div_55_Template_input_ngModelChange_2_listener($event) {
      const i_r27 = \u0275\u0275restoreView(_r26).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.competencesAcquises[i_r27], $event) || (ctx_r1.competencesAcquises[i_r27] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 127);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_61_div_55_Template_button_click_3_listener() {
      const i_r27 = \u0275\u0275restoreView(_r26).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeCompetence(i_r27));
    });
    \u0275\u0275element(4, "i", 128);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r27 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.competencesAcquises[i_r27]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(2, _c1));
  }
}
function InstructorCourseEditComponent_div_3_div_61_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 125)(2, "input", 271);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_div_3_div_61_div_64_Template_input_ngModelChange_2_listener($event) {
      const i_r29 = \u0275\u0275restoreView(_r28).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.outilsRequis[i_r29], $event) || (ctx_r1.outilsRequis[i_r29] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 127);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_61_div_64_Template_button_click_3_listener() {
      const i_r29 = \u0275\u0275restoreView(_r28).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeOutil(i_r29));
    });
    \u0275\u0275element(4, "i", 128);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r29 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.outilsRequis[i_r29]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(2, _c1));
  }
}
function InstructorCourseEditComponent_div_3_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83)(2, "div", 84)(3, "h4", 85);
    \u0275\u0275element(4, "i", 86);
    \u0275\u0275text(5, " Informations suppl\xE9mentaires ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 87)(7, "div", 27)(8, "div", 243)(9, "h5", 244);
    \u0275\u0275element(10, "i", 245);
    \u0275\u0275text(11, " D\xE9tails de la formation ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 91)(13, "label", 88);
    \u0275\u0275text(14, "Difficult\xE9");
    \u0275\u0275elementStart(15, "span", 30);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 246)(18, "option", 247);
    \u0275\u0275text(19, "Facile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 248);
    \u0275\u0275text(21, "Moyen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 249);
    \u0275\u0275text(23, "Difficile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 99);
    \u0275\u0275text(25, "Expert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 90);
    \u0275\u0275text(27, "Le niveau de difficult\xE9 est requis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 91)(29, "label", 88);
    \u0275\u0275text(30, "Coo\xFBt (XOF)");
    \u0275\u0275elementStart(31, "span", 30);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "input", 250);
    \u0275\u0275elementStart(34, "small", 140);
    \u0275\u0275text(35, "0 pour une formation gratuite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 90);
    \u0275\u0275text(37, "Le Co\xFBt est requis (0 minimum)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 91)(39, "label", 88);
    \u0275\u0275text(40, "Dur\xE9e totale (heures)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 251);
    \u0275\u0275elementStart(42, "small", 140);
    \u0275\u0275text(43, "Estimation du temps total n\xE9cessaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 90);
    \u0275\u0275text(45, "La dur\xE9e doit \xEAtre d'au moins 1 heure");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 252)(47, "h5", 244);
    \u0275\u0275element(48, "i", 253);
    \u0275\u0275text(49, " Contenu et comp\xE9tences ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 32)(51, "label", 88);
    \u0275\u0275text(52, "Comp\xE9tences acquises");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 111)(54, "div", 112);
    \u0275\u0275template(55, InstructorCourseEditComponent_div_3_div_61_div_55_Template, 5, 3, "div", 115);
    \u0275\u0275elementStart(56, "button", 116);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_61_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addCompetence());
    });
    \u0275\u0275element(57, "i", 117);
    \u0275\u0275text(58, " Ajouter une comp\xE9tence ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(59, "div", 32)(60, "label", 88);
    \u0275\u0275text(61, "Outils requis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 111)(63, "div", 112);
    \u0275\u0275template(64, InstructorCourseEditComponent_div_3_div_61_div_64_Template, 5, 3, "div", 115);
    \u0275\u0275elementStart(65, "button", 116);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_div_61_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addOutil());
    });
    \u0275\u0275element(66, "i", 117);
    \u0275\u0275text(67, " Ajouter un outil ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(68, "div", 252)(69, "h5", 244);
    \u0275\u0275element(70, "i", 254);
    \u0275\u0275text(71, " Public cible et marketing ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 28)(73, "label", 88);
    \u0275\u0275text(74, "Public cible");
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "textarea", 255);
    \u0275\u0275elementStart(76, "small", 140);
    \u0275\u0275text(77, "D\xE9crivez pr\xE9cis\xE9ment votre audience cible");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 28)(79, "label", 88);
    \u0275\u0275text(80, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275element(81, "input", 256);
    \u0275\u0275elementStart(82, "small", 140);
    \u0275\u0275text(83, "Maximum 10 tags, s\xE9par\xE9s par des virgules. Utiles pour la recherche.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 252)(85, "h5", 244);
    \u0275\u0275element(86, "i", 198);
    \u0275\u0275text(87, " Param\xE8tres avanc\xE9s ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 32)(89, "label", 88);
    \u0275\u0275text(90, "Date de d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275element(91, "input", 257);
    \u0275\u0275elementStart(92, "small", 140);
    \u0275\u0275text(93, "Date de d\xE9but pr\xE9vue (optionnel)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 32)(95, "label", 88);
    \u0275\u0275text(96, "Date de fin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(97, "input", 258);
    \u0275\u0275elementStart(98, "small", 140);
    \u0275\u0275text(99, "Date de fin pr\xE9vue (optionnel)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "div", 28)(101, "label", 88);
    \u0275\u0275text(102, "M\xE9tadonn\xE9es (JSON)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(103, "textarea", 259);
    \u0275\u0275elementStart(104, "small", 140);
    \u0275\u0275text(105, "Informations techniques au format JSON (optionnel)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div", 252)(107, "h5", 244);
    \u0275\u0275element(108, "i", 260);
    \u0275\u0275text(109, " Options de publication ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "div", 91)(111, "div", 42);
    \u0275\u0275element(112, "input", 261);
    \u0275\u0275elementStart(113, "label", 262);
    \u0275\u0275element(114, "i", 263);
    \u0275\u0275text(115, " Inscriptions ouvertes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "small", 146);
    \u0275\u0275text(117, " Les utilisateurs peuvent s'inscrire \xE0 cette formation ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(118, "div", 91)(119, "div", 42);
    \u0275\u0275element(120, "input", 264);
    \u0275\u0275elementStart(121, "label", 265);
    \u0275\u0275element(122, "i", 266);
    \u0275\u0275text(123, " Formation publi\xE9e ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "small", 146);
    \u0275\u0275text(125, " La formation est visible publiquement ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(126, "div", 267)(127, "div", 268)(128, "div", 112)(129, "h6", 113);
    \u0275\u0275element(130, "i", 154);
    \u0275\u0275text(131, " R\xE9sum\xE9 des informations suppl\xE9mentaires ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "div", 27)(133, "div", 41)(134, "ul", 269)(135, "li", 155)(136, "strong");
    \u0275\u0275text(137, "Difficult\xE9:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(138);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "li", 155)(140, "strong");
    \u0275\u0275text(141, "Co\xFBt:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "span");
    \u0275\u0275text(143);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(144, "li", 155)(145, "strong");
    \u0275\u0275text(146, "Dur\xE9e:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(147);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(148, "div", 41)(149, "ul", 269)(150, "li", 155)(151, "strong");
    \u0275\u0275text(152, "Comp\xE9tences:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(153);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "li", 155)(155, "strong");
    \u0275\u0275text(156, "Outils requis:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "li", 155)(159, "strong");
    \u0275\u0275text(160, "Inscriptions:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "span");
    \u0275\u0275text(162);
    \u0275\u0275elementEnd()()()()()()()()()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_15_0;
    let tmp_16_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r1.additionalInfoForm);
    \u0275\u0275advance(11);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r1.additionalInfoForm.get("difficulte")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.additionalInfoForm.get("difficulte")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(16);
    \u0275\u0275classProp("is-invalid", ((tmp_5_0 = ctx_r1.additionalInfoForm.get("prix")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.additionalInfoForm.get("prix")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r1.additionalInfoForm.get("duree_totale")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.additionalInfoForm.get("duree_totale")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.competencesAcquises);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.outilsRequis);
    \u0275\u0275advance(74);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getDifficulteLabel((tmp_9_0 = ctx_r1.additionalInfoForm.get("difficulte")) == null ? null : tmp_9_0.value), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(((tmp_10_0 = ctx_r1.additionalInfoForm.get("prix")) == null ? null : tmp_10_0.value) == 0 ? "text-success" : "text-primary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_11_0 = ctx_r1.additionalInfoForm.get("prix")) == null ? null : tmp_11_0.value) == 0 ? "GRATUIT" : ((tmp_11_0 = ctx_r1.additionalInfoForm.get("prix")) == null ? null : tmp_11_0.value) + "XOF", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ((tmp_12_0 = ctx_r1.additionalInfoForm.get("duree_totale")) == null ? null : tmp_12_0.value) || "Non d\xE9finie", "h ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCompetencesCount(), " d\xE9finie(s) ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getOutilsCount(), " d\xE9fini(s) ");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(((tmp_15_0 = ctx_r1.additionalInfoForm.get("inscription_ouverte")) == null ? null : tmp_15_0.value) ? "text-success" : "text-warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_16_0 = ctx_r1.additionalInfoForm.get("inscription_ouverte")) == null ? null : tmp_16_0.value) ? "Ouvertes" : "Ferm\xE9es", " ");
  }
}
function InstructorCourseEditComponent_div_3_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83)(2, "div", 84)(3, "h4", 85);
    \u0275\u0275element(4, "i", 272);
    \u0275\u0275text(5, " Estimation des co\xFBts de formation ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 131);
    \u0275\u0275element(7, "i", 132);
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "Information :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Cette estimation permet aux entreprises d'\xE9valuer le budget n\xE9cessaire pour cette formation. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "form", 87)(12, "div", 27)(13, "div", 133)(14, "h5", 273);
    \u0275\u0275element(15, "i", 274);
    \u0275\u0275text(16, " Co\xFBts de d\xE9veloppement ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 32)(18, "label", 88);
    \u0275\u0275text(19, "Co\xFBt de conception (XOF)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 275);
    \u0275\u0275elementStart(21, "small", 140);
    \u0275\u0275text(22, "Analyse des besoins, conception p\xE9dagogique");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 32)(24, "label", 88);
    \u0275\u0275text(25, "Co\xFBt de production (XOF)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 276);
    \u0275\u0275elementStart(27, "small", 140);
    \u0275\u0275text(28, "Cr\xE9ation du contenu, vid\xE9os, exercices");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 277)(30, "h5", 273);
    \u0275\u0275element(31, "i", 278);
    \u0275\u0275text(32, " Co\xFBts de livraison ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 32)(34, "label", 88);
    \u0275\u0275text(35, "Co\xFBt formateur par jour (XOF)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 279);
    \u0275\u0275elementStart(37, "small", 140);
    \u0275\u0275text(38, "Tarif journalier du formateur");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 32)(40, "label", 88);
    \u0275\u0275text(41, "Frais logistiques par participant (XOF)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 280);
    \u0275\u0275elementStart(43, "small", 140);
    \u0275\u0275text(44, "Mat\xE9riel, documentation, pauses");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 281)(46, "div", 111)(47, "div", 112)(48, "h5", 113);
    \u0275\u0275element(49, "i", 282);
    \u0275\u0275text(50, " Estimation totale ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 27)(52, "div", 41)(53, "div", 283)(54, "span");
    \u0275\u0275text(55, "Co\xFBts de d\xE9veloppement :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "strong");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 283)(59, "span");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "strong");
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 283)(64, "span");
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "strong");
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(68, "hr");
    \u0275\u0275elementStart(69, "div", 283)(70, "span")(71, "strong");
    \u0275\u0275text(72, "Co\xFBt total estim\xE9 :");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "strong", 284);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(75, "div", 41)(76, "div", 283)(77, "span");
    \u0275\u0275text(78, "Co\xFBt par participant :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "strong", 285);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 283)(82, "span");
    \u0275\u0275text(83, "Co\xFBt par heure :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "strong", 286);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(86, "div", 287)(87, "label", 88);
    \u0275\u0275text(88, "Notes sur l'estimation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(89, "textarea", 288);
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
function InstructorCourseEditComponent_div_3_button_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_button_64_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevStep());
    });
    \u0275\u0275element(1, "i", 289);
    \u0275\u0275text(2, " Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseEditComponent_div_3_button_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_button_66_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275text(1, " Suivant ");
    \u0275\u0275element(2, "i", 290);
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseEditComponent_div_3_button_67_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 294);
  }
}
function InstructorCourseEditComponent_div_3_button_67_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 295);
  }
}
function InstructorCourseEditComponent_div_3_button_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 291);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_3_button_67_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateCourse());
    });
    \u0275\u0275template(1, InstructorCourseEditComponent_div_3_button_67_span_1_Template, 1, 0, "span", 292)(2, InstructorCourseEditComponent_div_3_button_67_i_2_Template, 1, 0, "i", 293);
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
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "div", 27)(3, "div", 65)(4, "div", 66)(5, "div", 67)(6, "ul", 68)(7, "li", 69)(8, "div", 70)(9, "span", 71)(10, "span", 72);
    \u0275\u0275text(11, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 73);
    \u0275\u0275element(13, "i", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 75)(15, "p");
    \u0275\u0275text(16, "Informations de base");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "li", 69)(18, "div", 70)(19, "span", 71)(20, "span", 72);
    \u0275\u0275text(21, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 73);
    \u0275\u0275element(23, "i", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 75)(25, "p");
    \u0275\u0275text(26, "M\xE9dia");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "li", 69)(28, "div", 70)(29, "span", 71)(30, "span", 72);
    \u0275\u0275text(31, "03");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 73);
    \u0275\u0275element(33, "i", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 75)(35, "p");
    \u0275\u0275text(36, "Modules & Sections");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "li", 69)(38, "div", 70)(39, "span", 71)(40, "span", 72);
    \u0275\u0275text(41, "04");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 73);
    \u0275\u0275element(43, "i", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 75)(45, "p");
    \u0275\u0275text(46, "Informations");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "li", 69)(48, "div", 70)(49, "span", 71)(50, "span", 72);
    \u0275\u0275text(51, "05");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 73);
    \u0275\u0275element(53, "i", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 75)(55, "p");
    \u0275\u0275text(56, "Co\xFBt estimatif");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(57, "div", 76);
    \u0275\u0275template(58, InstructorCourseEditComponent_div_3_div_58_Template, 111, 12, "div", 51)(59, InstructorCourseEditComponent_div_3_div_59_Template, 62, 20, "div", 51)(60, InstructorCourseEditComponent_div_3_div_60_Template, 13, 3, "div", 51)(61, InstructorCourseEditComponent_div_3_div_61_Template, 163, 19, "div", 51)(62, InstructorCourseEditComponent_div_3_div_62_Template, 90, 11, "div", 51);
    \u0275\u0275elementStart(63, "div", 77);
    \u0275\u0275template(64, InstructorCourseEditComponent_div_3_button_64_Template, 3, 0, "button", 78);
    \u0275\u0275elementStart(65, "div", 79);
    \u0275\u0275template(66, InstructorCourseEditComponent_div_3_button_66_Template, 3, 0, "button", 80)(67, InstructorCourseEditComponent_div_3_button_67_Template, 4, 4, "button", 81);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(13, _c0, ctx_r1.currentStep === 0, ctx_r1.currentStep > 0));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(16, _c0, ctx_r1.currentStep === 1, ctx_r1.currentStep > 1));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(19, _c0, ctx_r1.currentStep === 2, ctx_r1.currentStep > 2));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(22, _c0, ctx_r1.currentStep === 3, ctx_r1.currentStep > 3));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(25, _c0, ctx_r1.currentStep === 4, ctx_r1.currentStep > 4));
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
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentStep > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentStep < 4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep === 4);
  }
}
function InstructorCourseEditComponent_div_92_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 125)(2, "input", 270);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_div_92_div_55_Template_input_ngModelChange_2_listener($event) {
      const i_r35 = \u0275\u0275restoreView(_r34).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.competencesAcquises[i_r35], $event) || (ctx_r1.competencesAcquises[i_r35] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 127);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_92_div_55_Template_button_click_3_listener() {
      const i_r35 = \u0275\u0275restoreView(_r34).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeCompetence(i_r35));
    });
    \u0275\u0275element(4, "i", 128);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r35 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.competencesAcquises[i_r35]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(2, _c1));
  }
}
function InstructorCourseEditComponent_div_92_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 125)(2, "input", 271);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_div_92_div_64_Template_input_ngModelChange_2_listener($event) {
      const i_r37 = \u0275\u0275restoreView(_r36).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.outilsRequis[i_r37], $event) || (ctx_r1.outilsRequis[i_r37] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 127);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_92_div_64_Template_button_click_3_listener() {
      const i_r37 = \u0275\u0275restoreView(_r36).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeOutil(i_r37));
    });
    \u0275\u0275element(4, "i", 128);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r37 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.outilsRequis[i_r37]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(2, _c1));
  }
}
function InstructorCourseEditComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83)(2, "div", 84)(3, "h4", 85);
    \u0275\u0275element(4, "i", 86);
    \u0275\u0275text(5, " Informations suppl\xE9mentaires ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 87)(7, "div", 27)(8, "div", 243)(9, "h5", 244);
    \u0275\u0275element(10, "i", 245);
    \u0275\u0275text(11, " D\xE9tails de la formation ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 91)(13, "label", 88);
    \u0275\u0275text(14, "Difficult\xE9");
    \u0275\u0275elementStart(15, "span", 30);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 246)(18, "option", 247);
    \u0275\u0275text(19, "Facile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 248);
    \u0275\u0275text(21, "Moyen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 249);
    \u0275\u0275text(23, "Difficile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 99);
    \u0275\u0275text(25, "Expert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 90);
    \u0275\u0275text(27, "Le niveau de difficult\xE9 est requis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 91)(29, "label", 88);
    \u0275\u0275text(30, "Co\xFBt (XOF)");
    \u0275\u0275elementStart(31, "span", 30);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "input", 250);
    \u0275\u0275elementStart(34, "small", 140);
    \u0275\u0275text(35, "0 pour une formation gratuite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 90);
    \u0275\u0275text(37, "Le Co\xFBt est requis (0 minimum)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 91)(39, "label", 88);
    \u0275\u0275text(40, "Dur\xE9e totale (heures)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 251);
    \u0275\u0275elementStart(42, "small", 140);
    \u0275\u0275text(43, "Estimation du temps total n\xE9cessaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 90);
    \u0275\u0275text(45, "La dur\xE9e doit \xEAtre d'au moins 1 heure");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 252)(47, "h5", 244);
    \u0275\u0275element(48, "i", 253);
    \u0275\u0275text(49, " Contenu et comp\xE9tences ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 32)(51, "label", 88);
    \u0275\u0275text(52, "Comp\xE9tences acquises");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 111)(54, "div", 112);
    \u0275\u0275template(55, InstructorCourseEditComponent_div_92_div_55_Template, 5, 3, "div", 115);
    \u0275\u0275elementStart(56, "button", 116);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_92_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addCompetence());
    });
    \u0275\u0275element(57, "i", 117);
    \u0275\u0275text(58, " Ajouter une comp\xE9tence ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(59, "div", 32)(60, "label", 88);
    \u0275\u0275text(61, "Outils requis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 111)(63, "div", 112);
    \u0275\u0275template(64, InstructorCourseEditComponent_div_92_div_64_Template, 5, 3, "div", 115);
    \u0275\u0275elementStart(65, "button", 116);
    \u0275\u0275listener("click", function InstructorCourseEditComponent_div_92_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addOutil());
    });
    \u0275\u0275element(66, "i", 117);
    \u0275\u0275text(67, " Ajouter un outil ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(68, "div", 252)(69, "h5", 244);
    \u0275\u0275element(70, "i", 254);
    \u0275\u0275text(71, " Public cible et marketing ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 28)(73, "label", 88);
    \u0275\u0275text(74, "Public cible");
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "textarea", 255);
    \u0275\u0275elementStart(76, "small", 140);
    \u0275\u0275text(77, "D\xE9crivez pr\xE9cis\xE9ment votre audience cible");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 28)(79, "label", 88);
    \u0275\u0275text(80, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275element(81, "input", 256);
    \u0275\u0275elementStart(82, "small", 140);
    \u0275\u0275text(83, "Maximum 10 tags, s\xE9par\xE9s par des virgules. Utiles pour la recherche.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 252)(85, "h5", 244);
    \u0275\u0275element(86, "i", 198);
    \u0275\u0275text(87, " Param\xE8tres avanc\xE9s ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 32)(89, "label", 88);
    \u0275\u0275text(90, "Date de d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275element(91, "input", 257);
    \u0275\u0275elementStart(92, "small", 140);
    \u0275\u0275text(93, "Date de d\xE9but pr\xE9vue (optionnel)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 32)(95, "label", 88);
    \u0275\u0275text(96, "Date de fin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(97, "input", 258);
    \u0275\u0275elementStart(98, "small", 140);
    \u0275\u0275text(99, "Date de fin pr\xE9vue (optionnel)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "div", 28)(101, "label", 88);
    \u0275\u0275text(102, "M\xE9tadonn\xE9es (JSON)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(103, "textarea", 259);
    \u0275\u0275elementStart(104, "small", 140);
    \u0275\u0275text(105, "Informations techniques au format JSON (optionnel)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div", 252)(107, "h5", 244);
    \u0275\u0275element(108, "i", 260);
    \u0275\u0275text(109, " Options de publication ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "div", 91)(111, "div", 42);
    \u0275\u0275element(112, "input", 261);
    \u0275\u0275elementStart(113, "label", 262);
    \u0275\u0275element(114, "i", 263);
    \u0275\u0275text(115, " Inscriptions ouvertes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "small", 146);
    \u0275\u0275text(117, " Les utilisateurs peuvent s'inscrire \xE0 cette formation ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(118, "div", 91)(119, "div", 42);
    \u0275\u0275element(120, "input", 264);
    \u0275\u0275elementStart(121, "label", 265);
    \u0275\u0275element(122, "i", 266);
    \u0275\u0275text(123, " Formation publi\xE9e ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "small", 146);
    \u0275\u0275text(125, " La formation est visible publiquement ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(126, "div", 267)(127, "div", 268)(128, "div", 112)(129, "h6", 113);
    \u0275\u0275element(130, "i", 154);
    \u0275\u0275text(131, " R\xE9sum\xE9 des informations suppl\xE9mentaires ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "div", 27)(133, "div", 41)(134, "ul", 269)(135, "li", 155)(136, "strong");
    \u0275\u0275text(137, "Difficult\xE9:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(138);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "li", 155)(140, "strong");
    \u0275\u0275text(141, "Co\xFBt:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "span");
    \u0275\u0275text(143);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(144, "li", 155)(145, "strong");
    \u0275\u0275text(146, "Dur\xE9e:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(147);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(148, "div", 41)(149, "ul", 269)(150, "li", 155)(151, "strong");
    \u0275\u0275text(152, "Comp\xE9tences:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(153);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "li", 155)(155, "strong");
    \u0275\u0275text(156, "Outils requis:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "li", 155)(159, "strong");
    \u0275\u0275text(160, "Inscriptions:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "span");
    \u0275\u0275text(162);
    \u0275\u0275elementEnd()()()()()()()()()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_14_0;
    let tmp_15_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r1.additionalInfoForm);
    \u0275\u0275advance(11);
    \u0275\u0275classProp("is-invalid", ((tmp_3_0 = ctx_r1.additionalInfoForm.get("difficulte")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.additionalInfoForm.get("difficulte")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(16);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r1.additionalInfoForm.get("prix")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.additionalInfoForm.get("prix")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-invalid", ((tmp_5_0 = ctx_r1.additionalInfoForm.get("duree_totale")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.additionalInfoForm.get("duree_totale")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.competencesAcquises);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.outilsRequis);
    \u0275\u0275advance(74);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getDifficulteLabel((tmp_8_0 = ctx_r1.additionalInfoForm.get("difficulte")) == null ? null : tmp_8_0.value), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(((tmp_9_0 = ctx_r1.additionalInfoForm.get("prix")) == null ? null : tmp_9_0.value) == 0 ? "text-success" : "text-primary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_10_0 = ctx_r1.additionalInfoForm.get("prix")) == null ? null : tmp_10_0.value) == 0 ? "GRATUIT" : ((tmp_10_0 = ctx_r1.additionalInfoForm.get("prix")) == null ? null : tmp_10_0.value) + "XOF", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ((tmp_11_0 = ctx_r1.additionalInfoForm.get("duree_totale")) == null ? null : tmp_11_0.value) || "Non d\xE9finie", "h ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCompetencesCount(), " d\xE9finie(s) ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getOutilsCount(), " d\xE9fini(s) ");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(((tmp_14_0 = ctx_r1.additionalInfoForm.get("inscription_ouverte")) == null ? null : tmp_14_0.value) ? "text-success" : "text-warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_15_0 = ctx_r1.additionalInfoForm.get("inscription_ouverte")) == null ? null : tmp_15_0.value) ? "Ouvertes" : "Ferm\xE9es", " ");
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
  objectifs = [""];
  prerequis = [""];
  competencesAcquises = [""];
  outilsRequis = [""];
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
  // Subscriptions
  subscriptions = new Subscription();
  constructor(fb, formationService, categorieService, router, route, sanitizer, authService) {
    this.fb = fb;
    this.formationService = formationService;
    this.categorieService = categorieService;
    this.router = router;
    this.route = route;
    this.sanitizer = sanitizer;
    this.authService = authService;
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
    const subscription = this.formationService.getFormationById(this.courseId.toString()).subscribe({
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
    if (this.course.image_url) {
      this.imagePreview = this.course.image_url;
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
    if (this.course.objectifs) {
      if (typeof this.course.objectifs === "string") {
        this.objectifs = this.course.objectifs.split(",").map((obj) => obj.trim()).filter((obj) => obj);
      } else if (Array.isArray(this.course.objectifs)) {
        this.objectifs = [...this.course.objectifs];
      }
    }
    if (this.objectifs.length === 0)
      this.objectifs = [""];
    if (this.course.prerequis) {
      if (typeof this.course.prerequis === "string") {
        this.prerequis = this.course.prerequis.split(",").map((pre) => pre.trim()).filter((pre) => pre);
      } else if (Array.isArray(this.course.prerequis)) {
        this.prerequis = [...this.course.prerequis];
      }
    }
    if (this.prerequis.length === 0)
      this.prerequis = [""];
    if (this.course.competences_acquises) {
      if (typeof this.course.competences_acquises === "string") {
        this.competencesAcquises = this.course.competences_acquises.split(",").map((comp) => comp.trim()).filter((comp) => comp);
      } else if (Array.isArray(this.course.competences_acquises)) {
        this.competencesAcquises = [...this.course.competences_acquises];
      }
    }
    if (this.competencesAcquises.length === 0)
      this.competencesAcquises = [""];
    if (this.course.outils_requis) {
      if (typeof this.course.outils_requis === "string") {
        this.outilsRequis = this.course.outils_requis.split(",").map((outil) => outil.trim()).filter((outil) => outil);
      } else if (Array.isArray(this.course.outils_requis)) {
        this.outilsRequis = [...this.course.outils_requis];
      }
    }
    if (this.outilsRequis.length === 0)
      this.outilsRequis = [""];
  }
  loadModulesAndSections() {
    if (!this.course.modules) {
      this.modules = [];
      return;
    }
    try {
      if (typeof this.course.modules === "string") {
        this.modules = JSON.parse(this.course.modules);
      } else if (Array.isArray(this.course.modules)) {
        this.modules = this.course.modules;
      } else {
        this.modules = [];
      }
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
      case 2:
        if (this.modules.length === 0) {
          this.error = "Vous devez cr\xE9er au moins un module";
          setTimeout(() => this.error = "", 5e3);
          return false;
        }
        break;
      case 3:
        if (this.additionalInfoForm.invalid) {
          this.markFormGroupTouched(this.additionalInfoForm);
          this.error = "Veuillez remplir correctement les informations suppl\xE9mentaires";
          setTimeout(() => this.error = "", 5e3);
          return false;
        }
        break;
      case 4:
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
    this.objectifs.push("");
    this.markAsChanged();
  }
  removeObjectif(index) {
    if (this.objectifs.length > 1) {
      this.objectifs.splice(index, 1);
      this.markAsChanged();
    }
  }
  // ==================== PREREQUIS ====================
  addPrerequis() {
    this.prerequis.push("");
    this.markAsChanged();
  }
  removePrerequis(index) {
    if (this.prerequis.length > 1) {
      this.prerequis.splice(index, 1);
      this.markAsChanged();
    }
  }
  // ==================== COMPETENCES ====================
  addCompetence() {
    this.competencesAcquises.push("");
    this.markAsChanged();
  }
  removeCompetence(index) {
    if (this.competencesAcquises.length > 1) {
      this.competencesAcquises.splice(index, 1);
      this.markAsChanged();
    }
  }
  // ==================== OUTILS ====================
  addOutil() {
    this.outilsRequis.push("");
    this.markAsChanged();
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
    return module.sections?.reduce((sum, s) => sum + (s.duree_estimee || 0), 0) || 0;
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
    const modal = new bootstrap.Modal(document.getElementById("sectionModal"));
    modal.show();
  }
  editSection(moduleIndex, sectionIndex) {
    this.currentModuleIndex = moduleIndex;
    this.editingSectionIndex = sectionIndex;
    this.currentSection = __spreadValues({}, this.modules[moduleIndex].sections[sectionIndex]);
    const modal = new bootstrap.Modal(document.getElementById("sectionModal"));
    modal.show();
  }
  saveSection() {
    if (!this.currentSection.titre || this.currentModuleIndex === null)
      return;
    const module = this.modules[this.currentModuleIndex];
    if (this.editingSectionIndex !== null) {
      module.sections[this.editingSectionIndex] = __spreadValues({}, this.currentSection);
    } else {
      this.currentSection.ordre = module.sections.length;
      module.sections.push(__spreadValues({}, this.currentSection));
    }
    this.closeModal("sectionModal");
    this.markAsChanged();
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
  // ==================== MISE À JOUR ====================
  updateCourse() {
    this.saving = true;
    this.error = "";
    this.success = "";
    if (!this.validateAllSteps()) {
      this.saving = false;
      return;
    }
    const formData = this.buildFormData();
    console.log("Donn\xE9es envoy\xE9es pour mise \xE0 jour:", formData);
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
      tags: additionalInfo.tags?.trim() || null,
      date_debut: additionalInfo.date_debut || null,
      date_fin: additionalInfo.date_fin || null,
      inscription_ouverte: Boolean(additionalInfo.inscription_ouverte),
      est_publie: Boolean(additionalInfo.est_publie),
      // Média
      media_url: mediaInfo.media_url?.trim() || null,
      video_autoplay: Boolean(mediaInfo.video_autoplay),
      video_show_controls: Boolean(mediaInfo.video_show_controls),
      // Objectifs, prérequis, compétences, outils
      objectifs: this.objectifs.filter((obj) => obj.trim()).join(", "),
      prerequis: this.prerequis.filter((pre) => pre.trim()).join(", "),
      competences_acquises: this.competencesAcquises.filter((comp) => comp.trim()).join(", "),
      outils_requis: this.outilsRequis.filter((outil) => outil.trim()).join(", "),
      // Modules (JSON stringified pour l'édition)
      modules: this.modules.map((module) => ({
        id: module.id,
        titre: module.titre?.trim(),
        description: module.description?.trim(),
        duree_estimee: module.duree_estimee.toString() || "0",
        ordre: module.ordre,
        sections: module.sections.map((section) => ({
          id: section.id,
          titre: section.titre?.trim(),
          type: section.type,
          duree_estimee: section.duree_estimee.toString() || "0",
          contenu: section.contenu?.trim() || null,
          ressources: section.ressources?.trim() ? section.ressources.split(",").map((r) => r.trim()).filter((r) => r) : [],
          // Convertir en array au lieu de string
          obligatoire: Boolean(section.obligatoire),
          visible: Boolean(section.visible),
          ordre: section.ordre
        }))
      })),
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
    if (this.objectifs.filter((obj) => obj.trim()).length === 0) {
      isValid = false;
      errorMessages.push("Au moins un objectif est requis");
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
    this.router.navigate(["/instructor/courses"]);
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
    return new (__ngFactoryType__ || _InstructorCourseEditComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(FormationService), \u0275\u0275directiveInject(CategorieService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorCourseEditComponent, selectors: [["app-instructor-course-edit"]], decls: 95, vars: 15, consts: [["sectionForm", "ngForm"], ["imageInput", ""], ["noImageTemplate", ""], ["class", "d-flex justify-content-center align-items-center py-5", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show mx-3", "role", "alert", 4, "ngIf"], ["class", "alert alert-success alert-dismissible fade show mx-3", "role", "alert", 4, "ngIf"], ["class", "content", 4, "ngIf"], ["id", "updateSuccessModal", "tabindex", "-1", "data-bs-backdrop", "static", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "text-center", "p-5"], [1, "text-success", "mb-4"], [1, "fas", "fa-check-circle", "fa-5x"], [1, "mb-3"], [1, "text-muted", "mb-4"], [1, "d-flex", "gap-2", "justify-content-center"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-list", "me-2"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-edit", "me-2"], ["id", "sectionModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close"], [3, "ngSubmit"], [1, "modal-body"], [1, "row"], [1, "col-md-12", "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "name", "titre", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-6", "mb-3"], ["name", "type", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "video"], ["value", "reading"], ["value", "hands-on"], ["value", "quiz"], ["type", "number", "name", "duree", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "contenu", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "url", "name", "ressources", "placeholder", "https://...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-6"], [1, "form-check", "form-switch"], ["type", "checkbox", "name", "obligatoire", "id", "obligatoire", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "obligatoire", 1, "form-check-label"], ["type", "checkbox", "name", "visible", "id", "visible", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "visible", 1, "form-check-label"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["id", "successModal", "tabindex", "-1", "data-bs-backdrop", "static", 1, "modal", "fade"], ["class", "form-step", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center", "py-5"], [1, "text-center"], ["role", "status", 1, "spinner-border", "text-primary", 2, "width", "3rem", "height", "3rem"], [1, "visually-hidden"], [1, "mt-3", "text-muted"], [1, "alert", "alert-info"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "mx-3"], [1, "fas", "fa-exclamation-triangle", "me-2"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show", "mx-3"], [1, "fas", "fa-check-circle", "me-2"], [1, "content"], [1, "container"], [1, "col-lg-10", "mx-auto"], [1, "add-course-item"], [1, "wizard", "mb-4"], ["id", "progressbar2", 1, "form-wizard-steps"], [3, "ngClass"], [1, "profile-step"], [1, "dot-active", "mb-2"], [1, "number"], [1, "tickmark"], [1, "fa-solid", "fa-check"], [1, "step-section"], [1, "form-container"], [1, "d-flex", "justify-content-between", "mt-4"], ["class", "btn btn-outline-secondary", 3, "click", 4, "ngIf"], [1, "ms-auto"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-success", 3, "disabled", "click", 4, "ngIf"], [1, "form-step"], [1, "card", "border-0", "shadow-sm"], [1, "card-body", "p-4"], [1, "card-title", "mb-4"], [1, "fas", "fa-info-circle", "text-primary", "me-2"], [3, "formGroup"], [1, "form-label", "fw-semibold"], ["type", "text", "formControlName", "titre", "placeholder", "Ex: D\xE9veloppement Web avec Angular", 1, "form-control"], [1, "invalid-feedback"], [1, "col-md-4", "mb-3"], ["formControlName", "categorie_formation_id", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "niveau", 1, "form-select"], ["value", "debutant"], ["value", "intermediaire"], ["value", "avance"], ["value", "expert"], ["formControlName", "langue", 1, "form-select"], ["value", "fr"], ["value", "en"], ["value", "es"], ["formControlName", "type", 1, "form-select"], ["value", "en_ligne"], ["value", "presentiel"], ["value", "hybride"], ["type", "number", "formControlName", "nb_max_participants", "placeholder", "25", "min", "1", 1, "form-control"], ["type", "text", "formControlName", "short_description", "placeholder", "R\xE9sum\xE9 en une phrase", 1, "form-control"], ["formControlName", "description", "rows", "5", "placeholder", "Description d\xE9taill\xE9e de la formation...", 1, "form-control"], [1, "card", "bg-light"], [1, "card-body"], [1, "card-title"], [1, "fas", "fa-bullseye", "text-success", "me-2"], ["class", "mb-2", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "fas", "fa-plus", "me-1"], [1, "fas", "fa-list-check", "text-info", "me-2"], [1, "col-md-12"], ["type", "checkbox", "formControlName", "est_certifiante", "id", "certifiante", 1, "form-check-input"], ["for", "certifiante", 1, "form-check-label"], [1, "fas", "fa-certificate", "text-warning", "me-2"], [3, "value"], [1, "mb-2"], [1, "input-group"], ["type", "text", "placeholder", "Nouvel objectif", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [1, "fas", "fa-times"], ["type", "text", "placeholder", "Nouveau pr\xE9requis", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "fas", "fa-photo-video", "text-primary", "me-2"], [1, "alert", "alert-info", "mb-4"], [1, "fas", "fa-info-circle", "me-2"], [1, "col-md-12", "mb-4"], [1, "fas", "fa-image", "me-2"], [1, "upload-area", "border-2", "border-dashed", "rounded-3", "p-4", "text-center", "position-relative", 3, "dragover", "dragleave", "drop"], ["type", "file", "accept", "image/*", "id", "imageUpload", 1, "d-none", 3, "change"], ["class", "position-relative", 4, "ngIf", "ngIfElse"], ["class", "alert alert-danger mt-2 mb-0 py-2", 4, "ngIf"], [1, "fas", "fa-play-circle", "me-2"], [1, "text-muted"], [1, "input-group-text"], [1, "fab", "fa-youtube", "text-danger"], ["type", "url", "formControlName", "media_url", "placeholder", "https://www.youtube.com/watch?v=... ou https://youtu.be/...", 1, "form-control", 3, "blur", "input"], ["type", "button", "class", "btn btn-outline-secondary", "title", "Effacer l'URL", 3, "click", 4, "ngIf"], [1, "mt-2"], [1, "text-muted", "d-block"], [1, "fas", "fa-lightbulb", "me-1"], ["class", "text-danger mt-1", 4, "ngIf"], ["class", "text-success mt-1", 4, "ngIf"], ["class", "video-preview", 4, "ngIf"], ["class", "video-placeholder", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], [1, "mt-4", "p-3", "bg-light", "rounded"], [1, "fas", "fa-clipboard-check", "me-2"], [1, "mb-1"], [1, "fas", "fa-image", "me-2", "text-primary"], [1, "fw-semibold"], [1, "fas", "fa-play-circle", "me-2", "text-primary"], [1, "position-relative"], ["alt", "Aper\xE7u de l'image", 1, "img-fluid", "rounded", "shadow-sm", 2, "max-height", "300px", "max-width", "100%", 3, "src"], [1, "position-absolute", "top-0", "end-0", "m-2"], ["type", "button", "title", "Supprimer l'image", 1, "btn", "btn-sm", "btn-danger", "rounded-circle", 3, "click"], [1, "mt-3"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "fas", "fa-sync-alt", "me-2"], [1, "upload-placeholder", 2, "cursor", "pointer", 3, "click"], [1, "upload-icon", "mb-3"], [1, "fas", "fa-cloud-upload-alt", "fa-3x", "text-primary"], [1, "text-muted", "mb-3"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-folder-open", "me-2"], [1, "fas", "fa-info-circle", "me-1"], [1, "alert", "alert-danger", "mt-2", "mb-0", "py-2"], ["type", "button", "title", "Effacer l'URL", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "text-danger", "mt-1"], [1, "fas", "fa-exclamation-circle", "me-1"], [1, "text-success", "mt-1"], [1, "fas", "fa-check-circle", "me-1"], [1, "video-preview"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], [1, "fas", "fa-eye", "me-2"], [1, "badge", "bg-success"], [1, "card-body", "p-0"], ["class", "ratio ratio-16x9", 4, "ngIf"], ["class", "p-3", 4, "ngIf"], [1, "ratio", "ratio-16x9"], ["title", "Aper\xE7u YouTube", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", "loading", "lazy", 3, "src"], ["title", "Aper\xE7u Vimeo", "frameborder", "0", "allow", "autoplay; fullscreen; picture-in-picture", "allowfullscreen", "", "loading", "lazy", 3, "src"], [1, "p-3"], ["controls", "", "preload", "metadata", 1, "w-100", "rounded", 2, "max-height", "400px", 3, "src"], [1, "video-placeholder"], [1, "card", "border-dashed"], [1, "card-body", "text-center", "py-4"], [1, "fas", "fa-video", "fa-3x", "text-muted", "mb-3"], [1, "text-muted", "small", "mb-0"], [1, "fas", "fa-cog", "me-2"], ["type", "checkbox", "formControlName", "video_autoplay", "id", "videoAutoplay", 1, "form-check-input"], ["for", "videoAutoplay", 1, "form-check-label"], ["type", "checkbox", "formControlName", "video_show_controls", "id", "videoControls", 1, "form-check-input"], ["for", "videoControls", 1, "form-check-label"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "card-title", "mb-0"], [1, "fas", "fa-book", "text-primary", "me-2"], [1, "fas", "fa-plus", "me-2"], ["class", "row mb-4", 4, "ngIf"], ["class", "accordion", "id", "modulesAccordion", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], [1, "row", "mb-4"], [1, "col-md-4"], [1, "card", "bg-primary", "text-white"], [1, "card-body", "text-center"], [1, "card", "bg-success", "text-white"], [1, "card", "bg-info", "text-white"], ["id", "modulesAccordion", 1, "accordion"], ["class", "accordion-item mb-3 border rounded", 4, "ngFor", "ngForOf"], [1, "accordion-item", "mb-3", "border", "rounded"], [1, "accordion-header"], ["type", "button", 1, "accordion-button"], [1, "d-flex", "align-items-center", "w-100"], [1, "fas", "fa-grip-vertical", "me-3", "text-muted"], [1, "flex-grow-1"], [1, "btn-group", "me-2", 3, "click"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "fas", "fa-edit"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fas", "fa-trash"], [1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body"], ["class", "text-muted mb-3", 4, "ngIf"], [1, "sections-list", "mb-3"], ["class", "d-flex align-items-center justify-content-between p-3 mb-2 border rounded bg-light", 4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-outline-success", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-between", "p-3", "mb-2", "border", "rounded", "bg-light"], [1, "d-flex", "align-items-center"], [1, "fas", "fa-play-circle", "text-success", "me-3"], ["class", "badge bg-success ms-2", 4, "ngIf"], [1, "btn-group"], [1, "badge", "bg-success", "ms-2"], [1, "text-center", "py-5"], [1, "fas", "fa-folder-open", "fa-4x", "text-muted", "mb-3"], [1, "col-12", "mb-4"], [1, "text-secondary", "border-bottom", "pb-2"], [1, "fas", "fa-cogs", "me-2"], ["formControlName", "difficulte", 1, "form-select"], ["value", "facile"], ["value", "moyen"], ["value", "difficile"], ["type", "number", "formControlName", "prix", "placeholder", "0", "min", "0", "step", "0.01", 1, "form-control"], ["type", "number", "formControlName", "duree_totale", "placeholder", "40", "min", "1", "step", "0.5", 1, "form-control"], [1, "col-12", "mb-4", "mt-4"], [1, "fas", "fa-graduation-cap", "me-2"], [1, "fas", "fa-users", "me-2"], ["formControlName", "public_cible", "rows", "3", "placeholder", "\xC0 qui s'adresse cette formation ? (ex: d\xE9veloppeurs juniors, chefs de projet, \xE9tudiants en informatique...)", 1, "form-control"], ["type", "text", "formControlName", "tags", "placeholder", "javascript, angular, web, d\xE9veloppement (s\xE9par\xE9s par des virgules)", 1, "form-control"], ["type", "date", "formControlName", "date_debut", 1, "form-control"], ["type", "date", "formControlName", "date_fin", 1, "form-control"], ["formControlName", "metadata", "rows", "2", "placeholder", '{"version": "1.0", "auteur": "Nom", "copyright": "2024"}', 1, "form-control"], [1, "fas", "fa-toggle-on", "me-2"], ["type", "checkbox", "formControlName", "inscription_ouverte", "id", "inscriptionOuverte", 1, "form-check-input"], ["for", "inscriptionOuverte", 1, "form-check-label"], [1, "fas", "fa-door-open", "text-success", "me-2"], ["type", "checkbox", "formControlName", "est_publie", "id", "estPublie", 1, "form-check-input"], ["for", "estPublie", 1, "form-check-label"], [1, "fas", "fa-eye", "text-info", "me-2"], [1, "col-12", "mt-4"], [1, "card", "bg-light", "border-left-primary"], [1, "list-unstyled"], ["type", "text", "placeholder", "Nouvelle comp\xE9tence acquise", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Nouvel outil requis", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "fas", "fa-calculator", "text-primary", "me-2"], [1, "text-secondary"], [1, "fas", "fa-code", "me-2"], ["type", "number", "formControlName", "cout_conception", "placeholder", "2000", "step", "100", "min", "0", 1, "form-control"], ["type", "number", "formControlName", "cout_production", "placeholder", "5000", "step", "100", "min", "0", 1, "form-control"], [1, "col-md-12", "mb-4", "mt-4"], [1, "fas", "fa-chalkboard-teacher", "me-2"], ["type", "number", "formControlName", "cout_formateur_jour", "placeholder", "600", "step", "50", "min", "0", 1, "form-control"], ["type", "number", "formControlName", "frais_logistique", "placeholder", "50", "step", "10", "min", "0", 1, "form-control"], [1, "col-md-12", "mt-4"], [1, "fas", "fa-chart-line", "text-success", "me-2"], [1, "d-flex", "justify-content-between"], [1, "text-success"], [1, "text-primary"], [1, "text-info"], [1, "col-md-12", "mt-3"], ["formControlName", "notes_estimation", "rows", "3", "placeholder", "Pr\xE9cisions sur l'estimation, conditions particuli\xE8res, options suppl\xE9mentaires...", 1, "form-control"], [1, "fas", "fa-arrow-left", "me-2"], [1, "fas", "fa-arrow-right", "ms-2"], [1, "btn", "btn-success", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "fas fa-check me-2", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fas", "fa-check", "me-2"]], template: function InstructorCourseEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275template(0, InstructorCourseEditComponent_div_0_Template, 9, 1, "div", 3)(1, InstructorCourseEditComponent_div_1_Template, 6, 1, "div", 4)(2, InstructorCourseEditComponent_div_2_Template, 6, 1, "div", 5)(3, InstructorCourseEditComponent_div_3_Template, 68, 28, "div", 6);
      \u0275\u0275elementStart(4, "div", 7)(5, "div", 8)(6, "div", 9)(7, "div", 10)(8, "div", 11);
      \u0275\u0275element(9, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "h4", 13);
      \u0275\u0275text(11, "Formation mise \xE0 jour avec succ\xE8s !");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 14);
      \u0275\u0275text(13, "Toutes les modifications ont \xE9t\xE9 sauvegard\xE9es.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 15)(15, "button", 16);
      \u0275\u0275listener("click", function InstructorCourseEditComponent_Template_button_click_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goToCoursesList());
      });
      \u0275\u0275element(16, "i", 17);
      \u0275\u0275text(17, " Voir mes formations ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 18);
      \u0275\u0275listener("click", function InstructorCourseEditComponent_Template_button_click_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.continueEditing());
      });
      \u0275\u0275element(19, "i", 19);
      \u0275\u0275text(20, " Continuer l'\xE9dition ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(21, "div", 20)(22, "div", 21)(23, "div", 9)(24, "div", 22)(25, "h5", 23);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "button", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "form", 25, 0);
      \u0275\u0275listener("ngSubmit", function InstructorCourseEditComponent_Template_form_ngSubmit_28_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveSection());
      });
      \u0275\u0275elementStart(30, "div", 26)(31, "div", 27)(32, "div", 28)(33, "label", 29);
      \u0275\u0275text(34, "Titre de la section");
      \u0275\u0275elementStart(35, "span", 30);
      \u0275\u0275text(36, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_Template_input_ngModelChange_37_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentSection.titre, $event) || (ctx.currentSection.titre = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 32)(39, "label", 29);
      \u0275\u0275text(40, "Type");
      \u0275\u0275elementStart(41, "span", 30);
      \u0275\u0275text(42, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "select", 33);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_Template_select_ngModelChange_43_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentSection.type, $event) || (ctx.currentSection.type = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(44, "option", 34);
      \u0275\u0275text(45, "Vid\xE9o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "option", 35);
      \u0275\u0275text(47, "Lecture");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "option", 36);
      \u0275\u0275text(49, "Pratique");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "option", 37);
      \u0275\u0275text(51, "Quiz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 32)(53, "label", 29);
      \u0275\u0275text(54, "Dur\xE9e (minutes)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "input", 38);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_Template_input_ngModelChange_55_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentSection.duree_estimee, $event) || (ctx.currentSection.duree_estimee = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 28)(57, "label", 29);
      \u0275\u0275text(58, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "textarea", 39);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_Template_textarea_ngModelChange_59_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentSection.contenu, $event) || (ctx.currentSection.contenu = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 28)(61, "label", 29);
      \u0275\u0275text(62, "URL de la ressource");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "input", 40);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_Template_input_ngModelChange_63_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentSection.ressources, $event) || (ctx.currentSection.ressources = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 41)(65, "div", 42)(66, "input", 43);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_Template_input_ngModelChange_66_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentSection.obligatoire, $event) || (ctx.currentSection.obligatoire = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "label", 44);
      \u0275\u0275text(68, "Section obligatoire");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "div", 41)(70, "div", 42)(71, "input", 45);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorCourseEditComponent_Template_input_ngModelChange_71_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentSection.visible, $event) || (ctx.currentSection.visible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "label", 46);
      \u0275\u0275text(73, "Section visible");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(74, "div", 47)(75, "button", 48);
      \u0275\u0275text(76, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "button", 49);
      \u0275\u0275text(78);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(79, "div", 50)(80, "div", 8)(81, "div", 9)(82, "div", 10)(83, "div", 11);
      \u0275\u0275element(84, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "h4", 13);
      \u0275\u0275text(86, "Formation enregistr\xE9e avec succ\xE8s !");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "p", 14);
      \u0275\u0275text(88, "Votre formation a \xE9t\xE9 enregistr\xE9e et l'estimation des co\xFBts est disponible.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 15)(90, "button", 16);
      \u0275\u0275listener("click", function InstructorCourseEditComponent_Template_button_click_90_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goToCoursesList());
      });
      \u0275\u0275text(91, " Voir mes formations");
      \u0275\u0275template(92, InstructorCourseEditComponent_div_92_Template, 163, 19, "div", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "button", 18);
      \u0275\u0275listener("click", function InstructorCourseEditComponent_Template_button_click_93_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.createNewCourse());
      });
      \u0275\u0275text(94, " Cr\xE9er une nouvelle formation ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      const sectionForm_r38 = \u0275\u0275reference(29);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(23);
      \u0275\u0275textInterpolate1("", ctx.editingSectionIndex !== null ? "Modifier" : "Nouvelle", " Section");
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.currentSection.titre);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.currentSection.type);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.currentSection.duree_estimee);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.currentSection.contenu);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.currentSection.ressources);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.currentSection.obligatoire);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.currentSection.visible);
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", !sectionForm_r38.valid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.editingSectionIndex !== null ? "Modifier" : "Ajouter", " ");
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", ctx.currentStep === 3);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, FormGroupDirective, FormControlName, FormsModule, NgModel, NgForm], styles: ['\n\n.content[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n.add-course-item[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  padding: 30px;\n  margin-bottom: 30px;\n}\n.wizard[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 30px;\n  position: relative;\n}\n.wizard[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 20px;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: #e9ecef;\n  z-index: 1;\n}\n.wizard[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  position: relative;\n  z-index: 2;\n}\n.wizard[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #e9ecef;\n  color: #6c757d;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 10px;\n  font-size: 16px;\n  transition: all 0.3s ease;\n}\n.wizard[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6c757d;\n  font-weight: 500;\n}\n.wizard[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step.active[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: white;\n  transform: scale(1.1);\n}\n.wizard[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 600;\n}\n.wizard[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step.completed[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%] {\n  background: var(--success-color);\n  color: white;\n}\n.wizard[_ngcontent-%COMP%]   .wizard-steps[_ngcontent-%COMP%]   .wizard-step.completed[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: var(--success-color);\n}\n.upload-zone[_ngcontent-%COMP%] {\n  border: 2px dashed #dee2e6;\n  border-radius: 8px;\n  padding: 40px;\n  text-align: center;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.upload-zone[_ngcontent-%COMP%]:hover, \n.upload-zone.drag-over[_ngcontent-%COMP%] {\n  border-color: var(--primary-color);\n  background-color: rgba(var(--primary-rgb), 0.05);\n}\n.upload-zone[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.image-preview-zone[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.image-preview-zone[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 200px;\n  border-radius: 8px;\n}\n.image-preview-zone[_ngcontent-%COMP%]   .remove-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.video-preview[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.module-item[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.module-item[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  padding: 15px 20px;\n}\n.module-item[_ngcontent-%COMP%]   .section-item[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.module-item[_ngcontent-%COMP%]   .section-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.stat-card[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.form-step[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n  padding: 12px 15px;\n  font-size: 14px;\n  transition: all 0.3s ease;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 0.2rem rgba(var(--primary-rgb), 0.25);\n}\n.form-control.is-invalid[_ngcontent-%COMP%], \n.form-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--danger-color);\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 10px 20px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: #D4AF37 !important;\n  border-color: #D4AF37 !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  border-color: var(--primary-dark);\n  transform: translateY(-1px);\n}\n.btn.btn-success[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.alert[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: none;\n  padding: 15px 20px;\n}\n.alert.alert-info[_ngcontent-%COMP%] {\n  background: rgba(var(--info-rgb), 0.1);\n  color: var(--info-color);\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: rgba(var(--success-rgb), 0.1);\n  color: var(--success-color);\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: rgba(var(--danger-rgb), 0.1);\n  color: var(--danger-color);\n}\n.spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n@media (max-width: 768px) {\n  .add-course-item[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .wizard-steps[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .wizard-steps[_ngcontent-%COMP%]   .wizard-step[_ngcontent-%COMP%] {\n    flex: 0 0 50%;\n    margin-bottom: 20px;\n  }\n  .upload-zone[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=instructor-course-edit.component.css.map */'] });
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
                                        <p>Informations</p>\r
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
                                                <input type="text" class="form-control" formControlName="titre" \r
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
                                                <input type="number" class="form-control" formControlName="nb_max_participants" \r
                                                       placeholder="25" min="1">\r
                                            </div>\r
\r
                                            <div class="col-md-12 mb-3">\r
                                                <label class="form-label fw-semibold">Description courte<span class="text-danger">*</span></label>\r
                                                <input type="text" class="form-control" formControlName="short_description" \r
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
                                                <div class="card bg-light">\r
                                                    <div class="card-body">\r
                                                        <h6 class="card-title">\r
                                                            <i class="fas fa-bullseye text-success me-2"></i>\r
                                                            Objectifs p\xE9dagogiques\r
                                                        </h6>\r
                                                        <div *ngFor="let obj of objectifs; let i = index" class="mb-2">\r
                                                            <div class="input-group">\r
                                                                <input type="text" class="form-control" [(ngModel)]="objectifs[i]" \r
                                                                       [ngModelOptions]="{standalone: true}"\r
                                                                       placeholder="Nouvel objectif">\r
                                                                <button class="btn btn-outline-danger" type="button" (click)="removeObjectif(i)">\r
                                                                    <i class="fas fa-times"></i>\r
                                                                </button>\r
                                                            </div>\r
                                                        </div>\r
                                                        <button class="btn btn-sm btn-outline-primary" type="button" (click)="addObjectif()">\r
                                                            <i class="fas fa-plus me-1"></i> Ajouter\r
                                                        </button>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
\r
                                            <!-- Pr\xE9requis -->\r
                                            <div class="col-md-6 mb-3">\r
                                                <div class="card bg-light">\r
                                                    <div class="card-body">\r
                                                        <h6 class="card-title">\r
                                                            <i class="fas fa-list-check text-info me-2"></i>\r
                                                            Pr\xE9requis\r
                                                        </h6>\r
                                                        <div *ngFor="let req of prerequis; let i = index" class="mb-2">\r
                                                            <div class="input-group">\r
                                                                <input type="text" class="form-control" [(ngModel)]="prerequis[i]" \r
                                                                       [ngModelOptions]="{standalone: true}"\r
                                                                       placeholder="Nouveau pr\xE9requis">\r
                                                                <button class="btn btn-outline-danger" type="button" (click)="removePrerequis(i)">\r
                                                                    <i class="fas fa-times"></i>\r
                                                                </button>\r
                                                            </div>\r
                                                        </div>\r
                                                        <button class="btn btn-sm btn-outline-primary" type="button" (click)="addPrerequis()">\r
                                                            <i class="fas fa-plus me-1"></i> Ajouter\r
                                                        </button>\r
                                                    </div>\r
                                                </div>\r
                                            </div>\r
\r
                                            <div class="col-md-12">\r
                                                <div class="form-check form-switch">\r
                                                    <input class="form-check-input" type="checkbox" formControlName="est_certifiante" \r
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
                                                    <input type="file" \r
                                                           #imageInput \r
                                                           (change)="onImageSelected($event)" \r
                                                           accept="image/*" \r
                                                           class="d-none"\r
                                                           id="imageUpload">\r
                                                    \r
                                                    <!-- Zone d'affichage de l'image -->\r
                                                    <div *ngIf="imagePreview; else noImageTemplate" class="position-relative">\r
                                                        <img [src]="imagePreview" \r
                                                             class="img-fluid rounded shadow-sm" \r
                                                             style="max-height: 300px; max-width: 100%;"\r
                                                             alt="Aper\xE7u de l'image">\r
                                                        \r
                                                        <!-- Boutons d'action sur l'image -->\r
                                                        <div class="position-absolute top-0 end-0 m-2">\r
                                                            <button type="button" \r
                                                                    class="btn btn-sm btn-danger rounded-circle"\r
                                                                    (click)="removeImage()"\r
                                                                    title="Supprimer l'image">\r
                                                                <i class="fas fa-times"></i>\r
                                                            </button>\r
                                                        </div>\r
                                                        \r
                                                        <!-- Bouton pour changer l'image -->\r
                                                        <div class="mt-3">\r
                                                            <button type="button" \r
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
                                                        <div class="upload-placeholder" \r
                                                             (click)="imageInput.click()" \r
                                                             style="cursor: pointer;">\r
                                                            <div class="upload-icon mb-3">\r
                                                                <i class="fas fa-cloud-upload-alt fa-3x text-primary"></i>\r
                                                            </div>\r
                                                            <h5 class="mb-2">T\xE9l\xE9charger une image</h5>\r
                                                            <p class="text-muted mb-3">\r
                                                                Glissez-d\xE9posez votre image ici ou cliquez pour parcourir\r
                                                            </p>\r
                                                            <button type="button" \r
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
                                                        <input type="url" \r
                                                               class="form-control" \r
                                                               formControlName="media_url"\r
                                                               placeholder="https://www.youtube.com/watch?v=... ou https://youtu.be/..."\r
                                                               (blur)="validateVideoUrl()"\r
                                                               (input)="onVideoUrlChange($event)">\r
                                                        <button type="button" \r
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
                                                                <video controls \r
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
                                                                    <input class="form-check-input" \r
                                                                           type="checkbox" \r
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
                                                                    <input class="form-check-input" \r
                                                                           type="checkbox" \r
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
                                                    Image de couverture : \r
                                                    <span class="fw-semibold" [class]="imagePreview ? 'text-success' : 'text-muted'">\r
                                                        {{ imagePreview ? 'Ajout\xE9e' : 'Non d\xE9finie' }}\r
                                                    </span>\r
                                                </p>\r
                                            </div>\r
                                            <div class="col-md-6">\r
                                                <p class="mb-1">\r
                                                    <i class="fas fa-play-circle me-2 text-primary"></i>\r
                                                    Vid\xE9o de pr\xE9sentation : \r
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
                                    <div class="row mb-4" *ngIf="modules.length > 0">\r
                                        <div class="col-md-4">\r
                                            <div class="card bg-primary text-white">\r
                                                <div class="card-body text-center">\r
                                                    <h3 class="mb-0">{{ modules.length }}</h3>\r
                                                    <small>Modules</small>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="card bg-success text-white">\r
                                                <div class="card-body text-center">\r
                                                    <h3 class="mb-0">{{ getTotalSections() }}</h3>\r
                                                    <small>Sections</small>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                        <div class="col-md-4">\r
                                            <div class="card bg-info text-white">\r
                                                <div class="card-body text-center">\r
                                                    <h3 class="mb-0">{{ getTotalDuration() }} min</h3>\r
                                                    <small>Dur\xE9e totale</small>\r
                                                </div>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
\r
                                    <!-- Liste des modules -->\r
                                    <div *ngIf="modules.length > 0" class="accordion" id="modulesAccordion">\r
                                        <div *ngFor="let module of modules; let moduleIndex = index" \r
                                             class="accordion-item mb-3 border rounded">\r
                                            \r
                                            <h2 class="accordion-header">\r
                                                <button class="accordion-button" type="button" \r
                                                        [class.collapsed]="moduleIndex !== 0"\r
                                                        [attr.data-bs-toggle]="'collapse'"\r
                                                        [attr.data-bs-target]="'#module-' + moduleIndex">\r
                                                    <div class="d-flex align-items-center w-100">\r
                                                        <i class="fas fa-grip-vertical me-3 text-muted"></i>\r
                                                        <div class="flex-grow-1">\r
                                                            <strong>Module {{ moduleIndex + 1 }}: {{ module.titre }}</strong>\r
                                                            <br>\r
                                                            <small class="text-muted">\r
                                                                {{ module.sections?.length || 0 }} sections \xB7 \r
                                                                {{ getModuleDuration(module) }} min\r
                                                            </small>\r
                                                        </div>\r
                                                        <div class="btn-group me-2" (click)="$event.stopPropagation()">\r
                                                            <button class="btn btn-sm btn-outline-primary" \r
                                                                    (click)="editModule(moduleIndex)">\r
                                                                <i class="fas fa-edit"></i>\r
                                                            </button>\r
                                                            <button class="btn btn-sm btn-outline-danger" \r
                                                                    (click)="removeModule(moduleIndex)">\r
                                                                <i class="fas fa-trash"></i>\r
                                                            </button>\r
                                                        </div>\r
                                                    </div>\r
                                                </button>\r
                                            </h2>\r
\r
                                            <div [id]="'module-' + moduleIndex" \r
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
                                                        <div *ngFor="let section of module.sections; let sectionIndex = index" \r
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
                                                                <button class="btn btn-sm btn-outline-primary" \r
                                                                        (click)="editSection(moduleIndex, sectionIndex)">\r
                                                                    <i class="fas fa-edit"></i>\r
                                                                </button>\r
                                                                <button class="btn btn-sm btn-outline-danger" \r
                                                                        (click)="removeSection(moduleIndex, sectionIndex)">\r
                                                                    <i class="fas fa-trash"></i>\r
                                                                </button>\r
                                                            </div>\r
                                                        </div>\r
                                                    </div>\r
\r
                                                    <!-- Ajouter section -->\r
                                                    <button class="btn btn-sm btn-outline-success" \r
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
<!-- \xC9tape 4: Informations suppl\xE9mentaires -->\r
<div *ngIf="currentStep === 3" class="form-step">\r
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
                        <select class="form-select" formControlName="difficulte" \r
                                [class.is-invalid]="additionalInfoForm.get('difficulte')?.invalid && additionalInfoForm.get('difficulte')?.touched">\r
                            <option value="facile">Facile</option>\r
                            <option value="moyen">Moyen</option>\r
                            <option value="difficile">Difficile</option>\r
                            <option value="expert">Expert</option>\r
                        </select>\r
                        <div class="invalid-feedback">Le niveau de difficult\xE9 est requis</div>\r
                    </div>\r
\r
                    <div class="col-md-4 mb-3">\r
                        <label class="form-label fw-semibold">Coo\xFBt (XOF)<span class="text-danger">*</span></label>\r
                        <input type="number" class="form-control" formControlName="prix" \r
                               placeholder="0" min="0" step="0.01"\r
                               [class.is-invalid]="additionalInfoForm.get('prix')?.invalid && additionalInfoForm.get('prix')?.touched">\r
                        <small class="text-muted">0 pour une formation gratuite</small>\r
                        <div class="invalid-feedback">Le Co\xFBt est requis (0 minimum)</div>\r
                    </div>\r
\r
                    <div class="col-md-4 mb-3">\r
                        <label class="form-label fw-semibold">Dur\xE9e totale (heures)</label>\r
                        <input type="number" class="form-control" formControlName="duree_totale" \r
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
                        <label class="form-label fw-semibold">Comp\xE9tences acquises</label>\r
                        <div class="card bg-light">\r
                            <div class="card-body">\r
                                <div *ngFor="let comp of competencesAcquises; let i = index" class="mb-2">\r
                                    <div class="input-group">\r
                                        <input type="text" class="form-control" \r
                                               [(ngModel)]="competencesAcquises[i]" \r
                                               [ngModelOptions]="{standalone: true}"\r
                                               placeholder="Nouvelle comp\xE9tence acquise">\r
                                        <button class="btn btn-outline-danger" type="button" \r
                                                (click)="removeCompetence(i)">\r
                                            <i class="fas fa-times"></i>\r
                                        </button>\r
                                    </div>\r
                                </div>\r
                                <button class="btn btn-sm btn-outline-primary" type="button" \r
                                        (click)="addCompetence()">\r
                                    <i class="fas fa-plus me-1"></i> Ajouter une comp\xE9tence\r
                                </button>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-md-6 mb-3">\r
                        <label class="form-label fw-semibold">Outils requis</label>\r
                        <div class="card bg-light">\r
                            <div class="card-body">\r
                                <div *ngFor="let outil of outilsRequis; let i = index" class="mb-2">\r
                                    <div class="input-group">\r
                                        <input type="text" class="form-control" \r
                                               [(ngModel)]="outilsRequis[i]" \r
                                               [ngModelOptions]="{standalone: true}"\r
                                               placeholder="Nouvel outil requis">\r
                                        <button class="btn btn-outline-danger" type="button" \r
                                                (click)="removeOutil(i)">\r
                                            <i class="fas fa-times"></i>\r
                                        </button>\r
                                    </div>\r
                                </div>\r
                                <button class="btn btn-sm btn-outline-primary" type="button" \r
                                        (click)="addOutil()">\r
                                    <i class="fas fa-plus me-1"></i> Ajouter un outil\r
                                </button>\r
                            </div>\r
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
                        <input type="text" class="form-control" formControlName="tags" \r
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
                            <input class="form-check-input" type="checkbox" \r
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
                            <input class="form-check-input" type="checkbox" \r
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
                                                <strong>Co\xFBt:</strong> \r
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
                                                <strong>Inscriptions:</strong> \r
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
</div>                        \r
\r
                        <!-- \xC9tape 5: Co\xFBt estimatif -->\r
                        <div *ngIf="currentStep === 4" class="form-step">\r
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
                                                <input type="number" class="form-control" formControlName="cout_conception" \r
                                                       placeholder="2000" step="100" min="0">\r
                                                <small class="text-muted">Analyse des besoins, conception p\xE9dagogique</small>\r
                                            </div>\r
\r
                                            <div class="col-md-6 mb-3">\r
                                                <label class="form-label fw-semibold">Co\xFBt de production (XOF)</label>\r
                                                <input type="number" class="form-control" formControlName="cout_production" \r
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
                                                <input type="number" class="form-control" formControlName="cout_formateur_jour" \r
                                                       placeholder="600" step="50" min="0">\r
                                                <small class="text-muted">Tarif journalier du formateur</small>\r
                                            </div>\r
\r
                                            <div class="col-md-6 mb-3">\r
                                                <label class="form-label fw-semibold">Frais logistiques par participant (XOF)</label>\r
                                                <input type="number" class="form-control" formControlName="frais_logistique" \r
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
                        <div class="d-flex justify-content-between mt-4">\r
                            <button class="btn btn-outline-secondary" \r
                                    *ngIf="currentStep > 0"\r
                                    (click)="prevStep()">\r
                                <i class="fas fa-arrow-left me-2"></i> Pr\xE9c\xE9dent\r
                            </button>\r
                            <div class="ms-auto">\r
                                <button class="btn btn-primary" \r
                                        *ngIf="currentStep < 4"\r
                                        (click)="nextStep()">\r
                                    Suivant <i class="fas fa-arrow-right ms-2"></i>\r
                                </button>\r
                                <button class="btn btn-success" \r
                                        *ngIf="currentStep === 4"\r
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
                        <div class="col-md-12 mb-3">\r
                            <label class="form-label">Titre de la section<span class="text-danger">*</span></label>\r
                            <input type="text" class="form-control" [(ngModel)]="currentSection.titre" \r
                                   name="titre" required>\r
                        </div>\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Type<span class="text-danger">*</span></label>\r
                            <select class="form-select" [(ngModel)]="currentSection.type" name="type" required>\r
                                <option value="video">Vid\xE9o</option>\r
                                <option value="reading">Lecture</option>\r
                                <option value="hands-on">Pratique</option>\r
                                <option value="quiz">Quiz</option>\r
                            </select>\r
                        </div>\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Dur\xE9e (minutes)</label>\r
                            <input type="number" class="form-control" [(ngModel)]="currentSection.duree_estimee" \r
                                   name="duree" min="0">\r
                        </div>\r
                        <div class="col-md-12 mb-3">\r
                            <label class="form-label">Description</label>\r
                            <textarea class="form-control" [(ngModel)]="currentSection.contenu" \r
                                      name="contenu" rows="3"></textarea>\r
                        </div>\r
                        <div class="col-md-12 mb-3">\r
                            <label class="form-label">URL de la ressource</label>\r
                            <input type="url" class="form-control" [(ngModel)]="currentSection.ressources" \r
                                   name="ressources" placeholder="https://...">\r
                        </div>\r
                        <div class="col-md-6">\r
                            <div class="form-check form-switch">\r
                                <input class="form-check-input" type="checkbox" [(ngModel)]="currentSection.obligatoire" \r
                                       name="obligatoire" id="obligatoire">\r
                                <label class="form-check-label" for="obligatoire">Section obligatoire</label>\r
                            </div>\r
                        </div>\r
                        <div class="col-md-6">\r
                            <div class="form-check form-switch">\r
                                <input class="form-check-input" type="checkbox" [(ngModel)]="currentSection.visible" \r
                                       name="visible" id="visible">\r
                                <label class="form-check-label" for="visible">Section visible</label>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="modal-footer">\r
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>\r
                    <button type="submit" class="btn btn-primary" [disabled]="!sectionForm.valid">\r
                        {{ editingSectionIndex !== null ? 'Modifier' : 'Ajouter' }}\r
                    </button>\r
                </div>\r
            </form>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- Modal: Succ\xE8s -->\r
<div class="modal fade" id="successModal" tabindex="-1" data-bs-backdrop="static">\r
    <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content">\r
            <div class="modal-body text-center p-5">\r
                <div class="text-success mb-4">\r
                    <i class="fas fa-check-circle fa-5x"></i>\r
                </div>\r
                <h4 class="mb-3">Formation enregistr\xE9e avec succ\xE8s !</h4>\r
                <p class="text-muted mb-4">Votre formation a \xE9t\xE9 enregistr\xE9e et l'estimation des co\xFBts est disponible.</p>\r
                <div class="d-flex gap-2 justify-content-center">\r
                    <button class="btn btn-primary" (click)="goToCoursesList()">\r
                        Voir mes formations<!-- \xC9tape 4: Informations suppl\xE9mentaires -->\r
<div *ngIf="currentStep === 3" class="form-step">\r
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
                        <select class="form-select" formControlName="difficulte" \r
                                [class.is-invalid]="additionalInfoForm.get('difficulte')?.invalid && additionalInfoForm.get('difficulte')?.touched">\r
                            <option value="facile">Facile</option>\r
                            <option value="moyen">Moyen</option>\r
                            <option value="difficile">Difficile</option>\r
                            <option value="expert">Expert</option>\r
                        </select>\r
                        <div class="invalid-feedback">Le niveau de difficult\xE9 est requis</div>\r
                    </div>\r
\r
                    <div class="col-md-4 mb-3">\r
                        <label class="form-label fw-semibold">Co\xFBt (XOF)<span class="text-danger">*</span></label>\r
                        <input type="number" class="form-control" formControlName="prix" \r
                               placeholder="0" min="0" step="0.01"\r
                               [class.is-invalid]="additionalInfoForm.get('prix')?.invalid && additionalInfoForm.get('prix')?.touched">\r
                        <small class="text-muted">0 pour une formation gratuite</small>\r
                        <div class="invalid-feedback">Le Co\xFBt est requis (0 minimum)</div>\r
                    </div>\r
\r
                    <div class="col-md-4 mb-3">\r
                        <label class="form-label fw-semibold">Dur\xE9e totale (heures)</label>\r
                        <input type="number" class="form-control" formControlName="duree_totale" \r
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
                        <label class="form-label fw-semibold">Comp\xE9tences acquises</label>\r
                        <div class="card bg-light">\r
                            <div class="card-body">\r
                                <div *ngFor="let comp of competencesAcquises; let i = index" class="mb-2">\r
                                    <div class="input-group">\r
                                        <input type="text" class="form-control" \r
                                               [(ngModel)]="competencesAcquises[i]" \r
                                               [ngModelOptions]="{standalone: true}"\r
                                               placeholder="Nouvelle comp\xE9tence acquise">\r
                                        <button class="btn btn-outline-danger" type="button" \r
                                                (click)="removeCompetence(i)">\r
                                            <i class="fas fa-times"></i>\r
                                        </button>\r
                                    </div>\r
                                </div>\r
                                <button class="btn btn-sm btn-outline-primary" type="button" \r
                                        (click)="addCompetence()">\r
                                    <i class="fas fa-plus me-1"></i> Ajouter une comp\xE9tence\r
                                </button>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="col-md-6 mb-3">\r
                        <label class="form-label fw-semibold">Outils requis</label>\r
                        <div class="card bg-light">\r
                            <div class="card-body">\r
                                <div *ngFor="let outil of outilsRequis; let i = index" class="mb-2">\r
                                    <div class="input-group">\r
                                        <input type="text" class="form-control" \r
                                               [(ngModel)]="outilsRequis[i]" \r
                                               [ngModelOptions]="{standalone: true}"\r
                                               placeholder="Nouvel outil requis">\r
                                        <button class="btn btn-outline-danger" type="button" \r
                                                (click)="removeOutil(i)">\r
                                            <i class="fas fa-times"></i>\r
                                        </button>\r
                                    </div>\r
                                </div>\r
                                <button class="btn btn-sm btn-outline-primary" type="button" \r
                                        (click)="addOutil()">\r
                                    <i class="fas fa-plus me-1"></i> Ajouter un outil\r
                                </button>\r
                            </div>\r
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
                        <input type="text" class="form-control" formControlName="tags" \r
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
                            <input class="form-check-input" type="checkbox" \r
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
                            <input class="form-check-input" type="checkbox" \r
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
                                                <strong>Co\xFBt:</strong> \r
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
                                                <strong>Inscriptions:</strong> \r
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
                    </button>\r
                    <button class="btn btn-outline-secondary" (click)="createNewCourse()">\r
                        Cr\xE9er une nouvelle formation\r
                    </button>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>`, styles: ['/* src/app/features/courses/instructor-course-edit/instructor-course-edit.component.scss */\n.content {\n  padding: 20px 0;\n}\n.add-course-item {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  padding: 30px;\n  margin-bottom: 30px;\n}\n.wizard .wizard-steps {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 30px;\n  position: relative;\n}\n.wizard .wizard-steps::before {\n  content: "";\n  position: absolute;\n  top: 20px;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: #e9ecef;\n  z-index: 1;\n}\n.wizard .wizard-steps .wizard-step {\n  flex: 1;\n  text-align: center;\n  position: relative;\n  z-index: 2;\n}\n.wizard .wizard-steps .wizard-step .step-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #e9ecef;\n  color: #6c757d;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 10px;\n  font-size: 16px;\n  transition: all 0.3s ease;\n}\n.wizard .wizard-steps .wizard-step .step-label {\n  font-size: 14px;\n  color: #6c757d;\n  font-weight: 500;\n}\n.wizard .wizard-steps .wizard-step.active .step-icon {\n  background: var(--primary-color);\n  color: white;\n  transform: scale(1.1);\n}\n.wizard .wizard-steps .wizard-step.active .step-label {\n  color: var(--primary-color);\n  font-weight: 600;\n}\n.wizard .wizard-steps .wizard-step.completed .step-icon {\n  background: var(--success-color);\n  color: white;\n}\n.wizard .wizard-steps .wizard-step.completed .step-label {\n  color: var(--success-color);\n}\n.upload-zone {\n  border: 2px dashed #dee2e6;\n  border-radius: 8px;\n  padding: 40px;\n  text-align: center;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.upload-zone:hover,\n.upload-zone.drag-over {\n  border-color: var(--primary-color);\n  background-color: rgba(var(--primary-rgb), 0.05);\n}\n.upload-zone .btn {\n  margin-top: 10px;\n}\n.image-preview-zone {\n  position: relative;\n  display: inline-block;\n}\n.image-preview-zone img {\n  max-width: 100%;\n  max-height: 200px;\n  border-radius: 8px;\n}\n.image-preview-zone .remove-image {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.video-preview {\n  margin-top: 15px;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.module-item {\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.module-item .card-header {\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  padding: 15px 20px;\n}\n.module-item .section-item {\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n}\n.module-item .section-item:hover {\n  background: #f8f9fa;\n}\n.stat-card {\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.stat-card .stat-value {\n  font-size: 24px;\n  font-weight: 700;\n}\n.stat-card .stat-label {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.form-step {\n  min-height: 400px;\n}\n.form-control,\n.form-select {\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n  padding: 12px 15px;\n  font-size: 14px;\n  transition: all 0.3s ease;\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 0.2rem rgba(var(--primary-rgb), 0.25);\n}\n.form-control.is-invalid,\n.form-select.is-invalid {\n  border-color: var(--danger-color);\n}\n.btn {\n  border-radius: 8px;\n  padding: 10px 20px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.btn.btn-primary {\n  background: var(--primary-color);\n  color: #D4AF37 !important;\n  border-color: #D4AF37 !important;\n}\n.btn.btn-primary:hover {\n  background: var(--primary-dark);\n  border-color: var(--primary-dark);\n  transform: translateY(-1px);\n}\n.btn.btn-success:hover {\n  transform: translateY(-1px);\n}\n.alert {\n  border-radius: 8px;\n  border: none;\n  padding: 15px 20px;\n}\n.alert.alert-info {\n  background: rgba(var(--info-rgb), 0.1);\n  color: var(--info-color);\n}\n.alert.alert-success {\n  background: rgba(var(--success-rgb), 0.1);\n  color: var(--success-color);\n}\n.alert.alert-danger {\n  background: rgba(var(--danger-rgb), 0.1);\n  color: var(--danger-color);\n}\n.spinner-border {\n  width: 3rem;\n  height: 3rem;\n}\n@media (max-width: 768px) {\n  .add-course-item {\n    padding: 20px;\n  }\n  .wizard-steps {\n    flex-wrap: wrap;\n  }\n  .wizard-steps .wizard-step {\n    flex: 0 0 50%;\n    margin-bottom: 20px;\n  }\n  .upload-zone {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=instructor-course-edit.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: FormationService }, { type: CategorieService }, { type: Router }, { type: ActivatedRoute }, { type: DomSanitizer }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorCourseEditComponent, { className: "InstructorCourseEditComponent", filePath: "src/app/features/courses/instructor-course-edit/instructor-course-edit.component.ts", lineNumber: 41 });
})();
export {
  InstructorCourseEditComponent
};
//# sourceMappingURL=chunk-PUIM4PWE.js.map
