import {
  DataService
} from "./chunk-L2JYRU5M.js";
import {
  routes
} from "./chunk-YJLHMFCU.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-HLA233IM.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgIf
} from "./chunk-MNWNTO2T.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7XGB4BEQ.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-profile/adminrh-profile.component.ts
function AdminrhProfileComponent_div_13_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.superAdminProfile.telephone, " ");
  }
}
function AdminrhProfileComponent_div_13_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function AdminrhProfileComponent_div_13_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleEdit());
    });
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275text(2, " Modifier le profil ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhProfileComponent_div_13_div_19_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "strong");
    \u0275\u0275text(3, "Client ID :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.superAdminProfile.client_id);
  }
}
function AdminrhProfileComponent_div_13_div_19_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "strong");
    \u0275\u0275text(3, "Entreprise ID :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.superAdminProfile.entreprise_id);
  }
}
function AdminrhProfileComponent_div_13_div_19_div_85_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "strong");
    \u0275\u0275text(3, "Client :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.superAdminProfile.client.nom, " (ID: ", ctx_r0.superAdminProfile.client.id, ")");
  }
}
function AdminrhProfileComponent_div_13_div_19_div_85_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "strong");
    \u0275\u0275text(3, "Entreprise :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.superAdminProfile.entreprise.nom, " (ID: ", ctx_r0.superAdminProfile.entreprise.id, ")");
  }
}
function AdminrhProfileComponent_div_13_div_19_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "h6", 39);
    \u0275\u0275text(3, "Informations d'affectation");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, AdminrhProfileComponent_div_13_div_19_div_85_div_4_Template, 6, 2, "div", 35)(5, AdminrhProfileComponent_div_13_div_19_div_85_div_5_Template, 6, 2, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.superAdminProfile.client);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.superAdminProfile.entreprise);
  }
}
function AdminrhProfileComponent_div_13_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "h5", 29)(3, "span");
    \u0275\u0275text(4, "Informations du profil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 31)(8, "div", 2)(9, "div", 32)(10, "div", 33)(11, "strong");
    \u0275\u0275text(12, "ID :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 32)(16, "div", 33)(17, "strong");
    \u0275\u0275text(18, "Nom :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 32)(22, "div", 33)(23, "strong");
    \u0275\u0275text(24, "Name :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 32)(28, "div", 33)(29, "strong");
    \u0275\u0275text(30, "Pr\xE9nom :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 32)(34, "div", 33)(35, "strong");
    \u0275\u0275text(36, "Email :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 32)(40, "div", 33)(41, "strong");
    \u0275\u0275text(42, "T\xE9l\xE9phone :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 32)(46, "div", 33)(47, "strong");
    \u0275\u0275text(48, "Fonction :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 32)(52, "div", 33)(53, "strong");
    \u0275\u0275text(54, "Num\xE9ro :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span");
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 32)(58, "div", 33)(59, "strong");
    \u0275\u0275text(60, "R\xF4le :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 34);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "div", 32)(64, "div", 33)(65, "strong");
    \u0275\u0275text(66, "Statut :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 30);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(69, AdminrhProfileComponent_div_13_div_19_div_69_Template, 6, 1, "div", 35)(70, AdminrhProfileComponent_div_13_div_19_div_70_Template, 6, 1, "div", 35);
    \u0275\u0275elementStart(71, "div", 32)(72, "div", 33)(73, "strong");
    \u0275\u0275text(74, "Cr\xE9\xE9 le :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span");
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "div", 32)(79, "div", 33)(80, "strong");
    \u0275\u0275text(81, "Modifi\xE9 le :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span");
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(85, AdminrhProfileComponent_div_13_div_19_div_85_Template, 6, 2, "div", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r0.getStatusClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusText(), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.superAdminProfile.id);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.superAdminProfile.nom || "Non d\xE9fini");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.superAdminProfile.name || "Non d\xE9fini");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.superAdminProfile.prenom || "Non d\xE9fini");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.superAdminProfile.email || "Non d\xE9fini");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.superAdminProfile.telephone || "Non d\xE9fini");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.superAdminProfile.fonction || "Non d\xE9fini");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.superAdminProfile.numero || "Non d\xE9fini");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.superAdminProfile.role || (ctx_r0.superAdminProfile.role_id === 1 ? "Super Admin" : "Utilisateur"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r0.getStatusClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusText(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.superAdminProfile.client_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.superAdminProfile.entreprise_id);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.superAdminProfile.created_at ? \u0275\u0275pipeBind2(77, 18, ctx_r0.superAdminProfile.created_at, "dd/MM/yyyy \xE0 HH:mm") : "Non d\xE9fini");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.superAdminProfile.updated_at ? \u0275\u0275pipeBind2(84, 21, ctx_r0.superAdminProfile.updated_at, "dd/MM/yyyy \xE0 HH:mm") : "Non d\xE9fini");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.superAdminProfile.client || ctx_r0.superAdminProfile.entreprise);
  }
}
function AdminrhProfileComponent_div_13_div_20_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1, " Le nom est requis ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhProfileComponent_div_13_div_20_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1, " Le pr\xE9nom est requis ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhProfileComponent_div_13_div_20_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1, " Un email valide est requis ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhProfileComponent_div_13_div_20_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1, " La fonction est requise ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhProfileComponent_div_13_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "h5", 40);
    \u0275\u0275text(3, "Modifier le profil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 31)(5, "form", 41);
    \u0275\u0275listener("ngSubmit", function AdminrhProfileComponent_div_13_div_20_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveProfile());
    });
    \u0275\u0275elementStart(6, "div", 2)(7, "div", 32)(8, "div", 42)(9, "label");
    \u0275\u0275text(10, "Nom ");
    \u0275\u0275elementStart(11, "span", 43);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "input", 44);
    \u0275\u0275template(14, AdminrhProfileComponent_div_13_div_20_div_14_Template, 2, 0, "div", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 32)(16, "div", 42)(17, "label");
    \u0275\u0275text(18, "Pr\xE9nom ");
    \u0275\u0275elementStart(19, "span", 43);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "input", 46);
    \u0275\u0275template(22, AdminrhProfileComponent_div_13_div_20_div_22_Template, 2, 0, "div", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 32)(24, "div", 42)(25, "label");
    \u0275\u0275text(26, "Email ");
    \u0275\u0275elementStart(27, "span", 43);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(29, "input", 47);
    \u0275\u0275template(30, AdminrhProfileComponent_div_13_div_20_div_30_Template, 2, 0, "div", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 32)(32, "div", 42)(33, "label");
    \u0275\u0275text(34, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 32)(37, "div", 42)(38, "label");
    \u0275\u0275text(39, "Fonction ");
    \u0275\u0275elementStart(40, "span", 43);
    \u0275\u0275text(41, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(42, "input", 49);
    \u0275\u0275template(43, AdminrhProfileComponent_div_13_div_20_div_43_Template, 2, 0, "div", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 32)(45, "div", 42)(46, "label");
    \u0275\u0275text(47, "Num\xE9ro");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 38)(50, "div", 51)(51, "button", 52);
    \u0275\u0275element(52, "i", 53);
    \u0275\u0275text(53, " Enregistrer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 54);
    \u0275\u0275listener("click", function AdminrhProfileComponent_div_13_div_20_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleEdit());
    });
    \u0275\u0275element(55, "i", 55);
    \u0275\u0275text(56, " Annuler ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r0.profileForm);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-invalid", ((tmp_3_0 = ctx_r0.profileForm.get("nom")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r0.profileForm.get("nom")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r0.profileForm.get("nom")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.profileForm.get("nom")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ((tmp_5_0 = ctx_r0.profileForm.get("prenom")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.profileForm.get("prenom")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r0.profileForm.get("prenom")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r0.profileForm.get("prenom")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ((tmp_7_0 = ctx_r0.profileForm.get("email")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r0.profileForm.get("email")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx_r0.profileForm.get("email")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r0.profileForm.get("email")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(12);
    \u0275\u0275classProp("is-invalid", ((tmp_9_0 = ctx_r0.profileForm.get("fonction")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r0.profileForm.get("fonction")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_10_0 = ctx_r0.profileForm.get("fonction")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r0.profileForm.get("fonction")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r0.profileForm.invalid || ctx_r0.loading);
  }
}
function AdminrhProfileComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 11)(2, "div", 12)(3, "div", 13)(4, "div", 14)(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 16)(8, "div", 17)(9, "h4");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h6");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18);
    \u0275\u0275element(14, "i", 19);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, AdminrhProfileComponent_div_13_div_16_Template, 3, 1, "div", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 21);
    \u0275\u0275template(18, AdminrhProfileComponent_div_13_button_18_Template, 3, 0, "button", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, AdminrhProfileComponent_div_13_div_19_Template, 86, 24, "div", 23)(20, AdminrhProfileComponent_div_13_div_20_Template, 57, 14, "div", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getInitials(), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.superAdminProfile.prenom, " ", ctx_r0.superAdminProfile.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.superAdminProfile.fonction);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.superAdminProfile.email, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.superAdminProfile.telephone);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.isEditing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditing);
  }
}
function AdminrhProfileComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 38)(2, "div", 57)(3, "div", 58)(4, "span", 59);
    \u0275\u0275text(5, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 60);
    \u0275\u0275text(7, "Chargement du profil...");
    \u0275\u0275elementEnd()()()();
  }
}
function AdminrhProfileComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 38)(2, "div", 61);
    \u0275\u0275element(3, "i", 62);
    \u0275\u0275text(4, " Aucune information de profil trouv\xE9e. Veuillez vous reconnecter. ");
    \u0275\u0275elementEnd()()();
  }
}
var AdminrhProfileComponent = class _AdminrhProfileComponent {
  dataService;
  fb;
  routes = routes;
  superAdminProfile = null;
  profileForm;
  isEditing = false;
  loading = false;
  constructor(dataService, fb) {
    this.dataService = dataService;
    this.fb = fb;
    this.profileForm = this.fb.group({
      nom: ["", [Validators.required]],
      prenom: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      telephone: [""],
      fonction: ["", [Validators.required]],
      numero: [""]
    });
  }
  ngOnInit() {
    this.loadSuperAdminProfile();
  }
  loadSuperAdminProfile() {
    this.loading = true;
    console.log("\u{1F50D} D\xE9but du chargement du profil...");
    try {
      const userDataString = localStorage.getItem("pyramide_user");
      console.log("\u{1F4E6} Donn\xE9es brutes du localStorage:", userDataString);
      if (userDataString) {
        const currentUser = JSON.parse(userDataString);
        console.log("\u2705 Utilisateur pars\xE9:", currentUser);
        if (!currentUser.role && currentUser.role_id === 1) {
          currentUser.role = "Super Admin";
          console.log("\u2795 Ajout du r\xF4le: Super Admin");
        } else if (!currentUser.role) {
          currentUser.role = "Utilisateur";
        }
        this.superAdminProfile = currentUser;
        console.log("\u{1F464} Profil superAdmin assign\xE9:", this.superAdminProfile);
        this.profileForm.patchValue({
          nom: currentUser.nom || "",
          prenom: currentUser.prenom || "",
          email: currentUser.email || "",
          telephone: currentUser.telephone || "",
          fonction: currentUser.fonction || "",
          numero: currentUser.numero || ""
        });
        console.log("\u{1F4DD} Formulaire rempli");
      } else {
        console.error('\u274C Aucune donn\xE9e dans localStorage avec la cl\xE9 "pyramide_user"');
      }
    } catch (error) {
      console.error("\u{1F4A5} Erreur lors du chargement du profil:", error);
    } finally {
      this.loading = false;
      console.log("\u{1F3C1} Fin du chargement. superAdminProfile:", this.superAdminProfile);
      console.log("\u{1F3C1} Loading:", this.loading);
    }
  }
  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing && this.superAdminProfile) {
      this.profileForm.patchValue({
        nom: this.superAdminProfile.nom,
        prenom: this.superAdminProfile.prenom,
        email: this.superAdminProfile.email,
        telephone: this.superAdminProfile.telephone,
        fonction: this.superAdminProfile.fonction,
        numero: this.superAdminProfile.numero
      });
    }
  }
  saveProfile() {
    if (this.profileForm.valid && this.superAdminProfile) {
      this.loading = true;
      const updatedProfile = __spreadValues(__spreadValues({}, this.superAdminProfile), this.profileForm.value);
      try {
        localStorage.setItem("pyramide_user", JSON.stringify(updatedProfile));
        this.superAdminProfile = updatedProfile;
        this.isEditing = false;
        console.log("\u2705 Profil mis \xE0 jour avec succ\xE8s");
      } catch (error) {
        console.error("\u274C Erreur lors de la mise \xE0 jour du profil:", error);
      } finally {
        this.loading = false;
      }
    }
  }
  toggleClass(data) {
    data.active = !data.active;
  }
  getStatusText() {
    if (!this.superAdminProfile)
      return "";
    return this.superAdminProfile.statut === 1 ? "Actif" : "Inactif";
  }
  getStatusClass() {
    if (!this.superAdminProfile)
      return "";
    return this.superAdminProfile.statut === 1 ? "status-active" : "status-inactive";
  }
  getInitials() {
    if (!this.superAdminProfile)
      return "";
    const firstNameInitial = this.superAdminProfile.prenom?.charAt(0) || "";
    const lastNameInitial = this.superAdminProfile.nom?.charAt(0) || "";
    return (firstNameInitial + lastNameInitial).toUpperCase();
  }
  static \u0275fac = function AdminrhProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhProfileComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhProfileComponent, selectors: [["app-adminrh-profile"]], decls: 16, vars: 4, consts: [[1, "content", "container-fluid"], [1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-sub-header"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], ["class", "row", 4, "ngIf"], [1, "col-md-12"], [1, "profile-header"], [1, "row", "align-items-center"], [1, "col-auto", "profile-image"], [1, "avatar", "avatar-xl"], [1, "col"], [1, "profile-user-info"], [1, "user-location"], [1, "fas", "fa-envelope"], ["class", "user-location", 4, "ngIf"], [1, "col-auto"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "fas", "fa-phone"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-edit", "me-2"], [1, "card"], [1, "card-header"], [1, "card-title", "d-flex", "justify-content-between", "align-items-center"], [1, "badge", 3, "ngClass"], [1, "card-body"], [1, "col-md-6"], [1, "profile-info-item"], [1, "badge", "badge-primary"], ["class", "col-md-6", 4, "ngIf"], ["class", "row mt-4", 4, "ngIf"], [1, "row", "mt-4"], [1, "col-12"], [1, "mb-3"], [1, "card-title"], [3, "ngSubmit", "formGroup"], [1, "form-group", "local-forms"], [1, "login-danger"], ["type", "text", "formControlName", "nom", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "prenom", 1, "form-control"], ["type", "email", "formControlName", "email", 1, "form-control"], ["type", "tel", "formControlName", "telephone", 1, "form-control"], ["type", "text", "formControlName", "fonction", 1, "form-control"], ["type", "text", "formControlName", "numero", 1, "form-control"], [1, "student-submit"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "fas", "fa-save", "me-2"], ["type", "button", 1, "btn", "btn-secondary", "ms-2", 3, "click"], [1, "fas", "fa-times", "me-2"], [1, "invalid-feedback"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "sr-only"], [1, "mt-3"], [1, "alert", "alert-warning", "text-center"], [1, "fas", "fa-exclamation-triangle", "me-2"]], template: function AdminrhProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
      \u0275\u0275text(6, "Mon Profil Super Administrateur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "ul", 6)(8, "li", 7)(9, "a", 8);
      \u0275\u0275text(10, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li", 9);
      \u0275\u0275text(12, "Mon Profil");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(13, AdminrhProfileComponent_div_13_Template, 21, 9, "div", 10)(14, AdminrhProfileComponent_div_14_Template, 8, 0, "div", 10)(15, AdminrhProfileComponent_div_15_Template, 5, 0, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.superadmin_dashboard);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.superAdminProfile && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.superAdminProfile && !ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, DatePipe], styles: ["\n\n.profile-header[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 30px;\n  border-radius: 10px;\n  margin-bottom: 30px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n}\n.profile-header[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: bold;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n.profile-header[_ngcontent-%COMP%]   .profile-user-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: #333;\n  font-weight: 600;\n}\n.profile-header[_ngcontent-%COMP%]   .profile-user-info[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 10px;\n  font-weight: 500;\n}\n.profile-header[_ngcontent-%COMP%]   .profile-user-info[_ngcontent-%COMP%]   .user-Location[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 5px;\n}\n.profile-header[_ngcontent-%COMP%]   .profile-user-info[_ngcontent-%COMP%]   .user-Location[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  width: 16px;\n}\n.profile-info-item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.profile-info-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 5px;\n  display: block;\n}\n.profile-info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 14px;\n}\n.status-active[_ngcontent-%COMP%] {\n  background-color: #28a745 !important;\n  color: white;\n}\n.status-inactive[_ngcontent-%COMP%] {\n  background-color: #dc3545 !important;\n  color: white;\n}\n.badge-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n}\n.profile-menu[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.profile-menu[_ngcontent-%COMP%]   .nav-tabs-solid[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #f8f9fa;\n}\n.profile-menu[_ngcontent-%COMP%]   .nav-tabs-solid[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: #6c757d;\n  font-weight: 500;\n}\n.profile-menu[_ngcontent-%COMP%]   .nav-tabs-solid[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n  border-radius: 5px 5px 0 0;\n}\n.profile-menu[_ngcontent-%COMP%]   .nav-tabs-solid[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n  border: none;\n  border-radius: 10px;\n}\n.card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=adminrh-profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhProfileComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-profile", imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="content container-fluid">\r
  <div class="page-header">\r
    <div class="row">\r
      <div class="col-sm-12">\r
        <div class="page-sub-header">\r
          <h3 class="page-title">Mon Profil Super Administrateur</h3>\r
          <ul class="breadcrumb">\r
            <li class="breadcrumb-item"><a [routerLink]="routes.superadmin_dashboard">Dashboard</a></li>\r
            <li class="breadcrumb-item active">Mon Profil</li>\r
          </ul>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Affichage du profil -->\r
  <div class="row" *ngIf="superAdminProfile && !loading">\r
    <div class="col-md-12">\r
      <div class="profile-header">\r
        <div class="row align-items-center">\r
          <div class="col-auto profile-image">\r
            <div class="avatar avatar-xl">\r
              {{ getInitials() }}\r
            </div>\r
          </div>\r
          <div class="col">\r
            <div class="profile-user-info">\r
              <h4>{{ superAdminProfile.prenom }} {{ superAdminProfile.nom }}</h4>\r
              <h6>{{ superAdminProfile.fonction }}</h6>\r
              <div class="user-location">\r
                <i class="fas fa-envelope"></i> {{ superAdminProfile.email }}\r
              </div>\r
              <div class="user-location" *ngIf="superAdminProfile.telephone">\r
                <i class="fas fa-phone"></i> {{ superAdminProfile.telephone }}\r
              </div>\r
            </div>\r
          </div>\r
          <div class="col-auto">\r
            <button \r
              *ngIf="!isEditing" \r
              class="btn btn-primary" \r
              (click)="toggleEdit()">\r
              <i class="fas fa-edit me-2"></i> Modifier le profil\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Vue en lecture -->\r
      <div class="card" *ngIf="!isEditing">\r
        <div class="card-header">\r
          <h5 class="card-title d-flex justify-content-between align-items-center">\r
            <span>Informations du profil</span>\r
            <span class="badge" [ngClass]="getStatusClass()">\r
              {{ getStatusText() }}\r
            </span>\r
          </h5>\r
        </div>\r
        <div class="card-body">\r
          <div class="row">\r
            <div class="col-md-6">\r
              <div class="profile-info-item">\r
                <strong>ID :</strong>\r
                <span>{{ superAdminProfile.id }}</span>\r
              </div>\r
            </div>\r
            <div class="col-md-6">\r
              <div class="profile-info-item">\r
                <strong>Nom :</strong>\r
                <span>{{ superAdminProfile.nom || 'Non d\xE9fini' }}</span>\r
              </div>\r
            </div>\r
            <div class="col-md-6">\r
              <div class="profile-info-item">\r
                <strong>Name :</strong>\r
                <span>{{ superAdminProfile.name || 'Non d\xE9fini' }}</span>\r
              </div>\r
            </div>\r
            <div class="col-md-6">\r
              <div class="profile-info-item">\r
                <strong>Pr\xE9nom :</strong>\r
                <span>{{ superAdminProfile.prenom || 'Non d\xE9fini' }}</span>\r
              </div>\r
            </div>\r
            <div class="col-md-6">\r
              <div class="profile-info-item">\r
                <strong>Email :</strong>\r
                <span>{{ superAdminProfile.email || 'Non d\xE9fini' }}</span>\r
              </div>\r
            </div>\r
            <div class="col-md-6">\r
              <div class="profile-info-item">\r
                <strong>T\xE9l\xE9phone :</strong>\r
                <span>{{ superAdminProfile.telephone || 'Non d\xE9fini' }}</span>\r
              </div>\r
            </div>\r
            <div class="col-md-6">\r
              <div class="profile-info-item">\r
                <strong>Fonction :</strong>\r
                <span>{{ superAdminProfile.fonction || 'Non d\xE9fini' }}</span>\r
              </div>\r
            </div>\r
            <div class="col-md-6">\r
              <div class="profile-info-item">\r
                <strong>Num\xE9ro :</strong>\r
                <span>{{ superAdminProfile.numero || 'Non d\xE9fini' }}</span>\r
              </div>\r
            </div>\r
       <!-- Affichage du r\xF4le -->\r
      <div class="col-md-6">\r
        <div class="profile-info-item">\r
          <strong>R\xF4le :</strong>\r
          <span class="badge badge-primary">\r
            {{ superAdminProfile.role || (superAdminProfile.role_id === 1 ? 'Super Admin' : 'Utilisateur') }}\r
          </span>\r
        </div>\r
      </div>\r
            <div class="col-md-6">\r
              <div class="profile-info-item">\r
                <strong>Statut :</strong>\r
                <span class="badge" [ngClass]="getStatusClass()">\r
                  {{ getStatusText() }}\r
                </span>\r
              </div>\r
            </div>\r
            <div class="col-md-6" *ngIf="superAdminProfile.client_id">\r
              <div class="profile-info-item">\r
                <strong>Client ID :</strong>\r
                <span>{{ superAdminProfile.client_id }}</span>\r
              </div>\r
            </div>\r
            <div class="col-md-6" *ngIf="superAdminProfile.entreprise_id">\r
              <div class="profile-info-item">\r
                <strong>Entreprise ID :</strong>\r
                <span>{{ superAdminProfile.entreprise_id }}</span>\r
              </div>\r
            </div>\r
            <div class="col-md-6">\r
              <div class="profile-info-item">\r
                <strong>Cr\xE9\xE9 le :</strong>\r
                <span>{{ superAdminProfile.created_at ? (superAdminProfile.created_at | date:'dd/MM/yyyy \xE0 HH:mm') : 'Non d\xE9fini' }}</span>\r
              </div>\r
            </div>\r
            <div class="col-md-6">\r
              <div class="profile-info-item">\r
                <strong>Modifi\xE9 le :</strong>\r
                <span>{{ superAdminProfile.updated_at ? (superAdminProfile.updated_at | date:'dd/MM/yyyy \xE0 HH:mm') : 'Non d\xE9fini' }}</span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Informations client/entreprise si disponibles -->\r
          <div class="row mt-4" *ngIf="superAdminProfile.client || superAdminProfile.entreprise">\r
            <div class="col-12">\r
              <h6 class="mb-3">Informations d'affectation</h6>\r
            </div>\r
            <div class="col-md-6" *ngIf="superAdminProfile.client">\r
              <div class="profile-info-item">\r
                <strong>Client :</strong>\r
                <span>{{ superAdminProfile.client.nom }} (ID: {{ superAdminProfile.client.id }})</span>\r
              </div>\r
            </div>\r
            <div class="col-md-6" *ngIf="superAdminProfile.entreprise">\r
              <div class="profile-info-item">\r
                <strong>Entreprise :</strong>\r
                <span>{{ superAdminProfile.entreprise.nom }} (ID: {{ superAdminProfile.entreprise.id }})</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Vue en \xE9dition -->\r
      <div class="card" *ngIf="isEditing">\r
        <div class="card-header">\r
          <h5 class="card-title">Modifier le profil</h5>\r
        </div>\r
        <div class="card-body">\r
          <form [formGroup]="profileForm" (ngSubmit)="saveProfile()">\r
            <div class="row">\r
              <div class="col-md-6">\r
                <div class="form-group local-forms">\r
                  <label>Nom <span class="login-danger">*</span></label>\r
                  <input \r
                    type="text" \r
                    class="form-control"\r
                    formControlName="nom"\r
                    [class.is-invalid]="profileForm.get('nom')?.invalid && profileForm.get('nom')?.touched">\r
                  <div class="invalid-feedback" *ngIf="profileForm.get('nom')?.invalid && profileForm.get('nom')?.touched">\r
                    Le nom est requis\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="col-md-6">\r
                <div class="form-group local-forms">\r
                  <label>Pr\xE9nom <span class="login-danger">*</span></label>\r
                  <input \r
                    type="text" \r
                    class="form-control"\r
                    formControlName="prenom"\r
                    [class.is-invalid]="profileForm.get('prenom')?.invalid && profileForm.get('prenom')?.touched">\r
                  <div class="invalid-feedback" *ngIf="profileForm.get('prenom')?.invalid && profileForm.get('prenom')?.touched">\r
                    Le pr\xE9nom est requis\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="col-md-6">\r
                <div class="form-group local-forms">\r
                  <label>Email <span class="login-danger">*</span></label>\r
                  <input \r
                    type="email" \r
                    class="form-control"\r
                    formControlName="email"\r
                    [class.is-invalid]="profileForm.get('email')?.invalid && profileForm.get('email')?.touched">\r
                  <div class="invalid-feedback" *ngIf="profileForm.get('email')?.invalid && profileForm.get('email')?.touched">\r
                    Un email valide est requis\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="col-md-6">\r
                <div class="form-group local-forms">\r
                  <label>T\xE9l\xE9phone</label>\r
                  <input \r
                    type="tel" \r
                    class="form-control"\r
                    formControlName="telephone">\r
                </div>\r
              </div>\r
              <div class="col-md-6">\r
                <div class="form-group local-forms">\r
                  <label>Fonction <span class="login-danger">*</span></label>\r
                  <input \r
                    type="text" \r
                    class="form-control"\r
                    formControlName="fonction"\r
                    [class.is-invalid]="profileForm.get('fonction')?.invalid && profileForm.get('fonction')?.touched">\r
                  <div class="invalid-feedback" *ngIf="profileForm.get('fonction')?.invalid && profileForm.get('fonction')?.touched">\r
                    La fonction est requise\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="col-md-6">\r
                <div class="form-group local-forms">\r
                  <label>Num\xE9ro</label>\r
                  <input \r
                    type="text" \r
                    class="form-control"\r
                    formControlName="numero">\r
                </div>\r
              </div>\r
            </div>\r
            <div class="col-12">\r
              <div class="student-submit">\r
                <button \r
                  type="submit" \r
                  class="btn btn-primary"\r
                  [disabled]="profileForm.invalid || loading">\r
                  <i class="fas fa-save me-2"></i> Enregistrer\r
                </button>\r
                <button \r
                  type="button" \r
                  class="btn btn-secondary ms-2" \r
                  (click)="toggleEdit()">\r
                  <i class="fas fa-times me-2"></i> Annuler\r
                </button>\r
              </div>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading -->\r
  <div class="row" *ngIf="loading">\r
    <div class="col-12">\r
      <div class="text-center py-5">\r
        <div class="spinner-border text-primary" role="status">\r
          <span class="sr-only">Chargement...</span>\r
        </div>\r
        <p class="mt-3">Chargement du profil...</p>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Message si aucun profil trouv\xE9 -->\r
  <div class="row" *ngIf="!superAdminProfile && !loading">\r
    <div class="col-12">\r
      <div class="alert alert-warning text-center">\r
        <i class="fas fa-exclamation-triangle me-2"></i>\r
        Aucune information de profil trouv\xE9e. Veuillez vous reconnecter.\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/features/adminrh/adminrh-profile/adminrh-profile.component.scss */\n.profile-header {\n  background: #fff;\n  padding: 30px;\n  border-radius: 10px;\n  margin-bottom: 30px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n}\n.profile-header .avatar {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: bold;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n.profile-header .profile-user-info h4 {\n  margin-bottom: 5px;\n  color: #333;\n  font-weight: 600;\n}\n.profile-header .profile-user-info h6 {\n  color: #6c757d;\n  margin-bottom: 10px;\n  font-weight: 500;\n}\n.profile-header .profile-user-info .user-Location {\n  color: #6c757d;\n  margin-bottom: 5px;\n}\n.profile-header .profile-user-info .user-Location i {\n  margin-right: 8px;\n  width: 16px;\n}\n.profile-info-item {\n  margin-bottom: 20px;\n}\n.profile-info-item label {\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 5px;\n  display: block;\n}\n.profile-info-item span {\n  color: #6c757d;\n  font-size: 14px;\n}\n.status-active {\n  background-color: #28a745 !important;\n  color: white;\n}\n.status-inactive {\n  background-color: #dc3545 !important;\n  color: white;\n}\n.badge-primary {\n  background-color: #007bff;\n  color: white;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n}\n.profile-menu {\n  margin-bottom: 30px;\n}\n.profile-menu .nav-tabs-solid {\n  border-bottom: 2px solid #f8f9fa;\n}\n.profile-menu .nav-tabs-solid .nav-link {\n  border: none;\n  background: transparent;\n  color: #6c757d;\n  font-weight: 500;\n}\n.profile-menu .nav-tabs-solid .nav-link.active {\n  background: #007bff;\n  color: white;\n  border-radius: 5px 5px 0 0;\n}\n.profile-menu .nav-tabs-solid .nav-link i {\n  margin-right: 8px;\n}\n.card {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n  border: none;\n  border-radius: 10px;\n}\n.card .card-title {\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=adminrh-profile.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhProfileComponent, { className: "AdminrhProfileComponent", filePath: "app/features/adminrh/adminrh-profile/adminrh-profile.component.ts", lineNumber: 19 });
})();
export {
  AdminrhProfileComponent
};
//# sourceMappingURL=chunk-H2BKWXKA.js.map
