import {
  routes
} from "./chunk-37V3B3KY.js";
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
} from "./chunk-ZGFJXD53.js";
import {
  RouterModule
} from "./chunk-UFFO2UKW.js";
import "./chunk-U7UKDAOZ.js";
import "./chunk-EGNJBGKD.js";
import {
  CommonModule,
  DatePipe,
  NgIf
} from "./chunk-I2HNPZHV.js";
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
} from "./chunk-BSBCM3BI.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/instructor/instructor-profile/instructor-profile.component.ts
function InstructorProfileComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.profile == null ? null : ctx_r0.profile.email);
  }
}
function InstructorProfileComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.profile == null ? null : ctx_r0.profile.telephone);
  }
}
function InstructorProfileComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.profile == null ? null : ctx_r0.profile.entreprise == null ? null : ctx_r0.profile.entreprise.nom);
  }
}
function InstructorProfileComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 22);
    \u0275\u0275text(2, "Matricule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.profile == null ? null : ctx_r0.profile.matricule);
  }
}
function InstructorProfileComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 22);
    \u0275\u0275text(2, "Entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.profile == null ? null : ctx_r0.profile.entreprise == null ? null : ctx_r0.profile.entreprise.nom);
  }
}
function InstructorProfileComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 22);
    \u0275\u0275text(2, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.profile == null ? null : ctx_r0.profile.client == null ? null : ctx_r0.profile.client.nom);
  }
}
function InstructorProfileComponent_ng_container_40_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2, "Direction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.profile.direction);
  }
}
function InstructorProfileComponent_ng_container_40_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2, "Entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.profile.entreprise.nom);
  }
}
function InstructorProfileComponent_ng_container_40_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2, "Client / Groupe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.profile.client.nom);
  }
}
function InstructorProfileComponent_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 30)(2, "div", 31);
    \u0275\u0275element(3, "i", 32);
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5, "Informations personnelles");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 33)(7, "div", 34)(8, "span", 35);
    \u0275\u0275text(9, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 36);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 34)(13, "span", 35);
    \u0275\u0275text(14, "Pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 36);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 34)(18, "span", 35);
    \u0275\u0275text(19, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 36);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 34)(23, "span", 35);
    \u0275\u0275text(24, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 36);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 34)(28, "span", 35);
    \u0275\u0275text(29, "Fonction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 36);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 34)(33, "span", 35);
    \u0275\u0275text(34, "Num\xE9ro matricule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 36);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 30)(38, "div", 31);
    \u0275\u0275element(39, "i", 37);
    \u0275\u0275elementStart(40, "h4");
    \u0275\u0275text(41, "Organisation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 33)(43, "div", 34)(44, "span", 35);
    \u0275\u0275text(45, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 36)(47, "span", 38);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(49, InstructorProfileComponent_ng_container_40_div_49_Template, 5, 1, "div", 39)(50, InstructorProfileComponent_ng_container_40_div_50_Template, 5, 1, "div", 39)(51, InstructorProfileComponent_ng_container_40_div_51_Template, 5, 1, "div", 39);
    \u0275\u0275elementStart(52, "div", 34)(53, "span", 35);
    \u0275\u0275text(54, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 36)(56, "span", 40);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(58, "div", 30)(59, "div", 31);
    \u0275\u0275element(60, "i", 41);
    \u0275\u0275elementStart(61, "h4");
    \u0275\u0275text(62, "Historique");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 33)(64, "div", 34)(65, "span", 35);
    \u0275\u0275text(66, "Cr\xE9\xE9 le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 36);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 34)(71, "span", 35);
    \u0275\u0275text(72, "Derni\xE8re modification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 36);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.profile.nom);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profile.prenom);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profile.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profile.telephone || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profile.fonction || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.profile.matricule || ctx_r0.profile.numero || "\u2014");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate((ctx_r0.profile.role == null ? null : ctx_r0.profile.role.name) || "Formateur");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.profile.direction);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.profile.entreprise);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.profile.client);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("ip-badge--active", ctx_r0.profile.statut === 1)("ip-badge--inactive", ctx_r0.profile.statut !== 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusText(), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 17, ctx_r0.profile.created_at, "dd/MM/yyyy \xE0 HH:mm"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 20, ctx_r0.profile.updated_at, "dd/MM/yyyy \xE0 HH:mm"));
  }
}
function InstructorProfileComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275element(2, "i", 42);
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "Modifier le profil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 43);
    \u0275\u0275listener("ngSubmit", function InstructorProfileComponent_div_41_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveProfile());
    });
    \u0275\u0275elementStart(6, "div", 33)(7, "div", 44)(8, "label");
    \u0275\u0275text(9, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 44)(12, "label");
    \u0275\u0275text(13, "Pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 44)(16, "label");
    \u0275\u0275text(17, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 44)(20, "label");
    \u0275\u0275text(21, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 44)(24, "label");
    \u0275\u0275text(25, "Fonction");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 44)(28, "label");
    \u0275\u0275text(29, "Num\xE9ro matricule");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 51)(32, "button", 52);
    \u0275\u0275element(33, "i", 53);
    \u0275\u0275text(34, " Sauvegarder ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 54);
    \u0275\u0275listener("click", function InstructorProfileComponent_div_41_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleEdit());
    });
    \u0275\u0275text(36, "Annuler");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r0.profileForm);
    \u0275\u0275advance(27);
    \u0275\u0275property("disabled", ctx_r0.profileForm.invalid || ctx_r0.loading);
  }
}
var InstructorProfileComponent = class _InstructorProfileComponent {
  fb;
  routes = routes;
  profile = null;
  profileForm;
  isEditing = false;
  loading = false;
  constructor(fb) {
    this.fb = fb;
    this.profileForm = this.fb.group({
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      telephone: [""],
      fonction: ["", Validators.required],
      numero: [""]
    });
  }
  ngOnInit() {
    this.loadProfile();
  }
  loadProfile() {
    try {
      const raw = localStorage.getItem("pyramide_user");
      if (raw) {
        const user = JSON.parse(raw);
        this.profile = user;
        this.profileForm.patchValue({
          nom: user.nom || "",
          prenom: user.prenom || "",
          email: user.email || "",
          telephone: user.telephone || "",
          fonction: user.fonction || "",
          numero: user.numero || ""
        });
      }
    } catch (e) {
    }
  }
  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing && this.profile) {
      this.profileForm.patchValue({
        nom: this.profile.nom,
        prenom: this.profile.prenom,
        email: this.profile.email,
        telephone: this.profile.telephone,
        fonction: this.profile.fonction,
        numero: this.profile.numero
      });
    }
  }
  saveProfile() {
    if (this.profileForm.valid && this.profile) {
      this.loading = true;
      const updated = __spreadValues(__spreadValues({}, this.profile), this.profileForm.value);
      try {
        localStorage.setItem("pyramide_user", JSON.stringify(updated));
        this.profile = updated;
        this.isEditing = false;
      } catch (e) {
      }
      this.loading = false;
    }
  }
  getStatusText() {
    return this.profile?.statut === 1 ? "Actif" : "Inactif";
  }
  getInitials() {
    if (!this.profile)
      return "";
    return ((this.profile.prenom?.charAt(0) || "") + (this.profile.nom?.charAt(0) || "")).toUpperCase();
  }
  static \u0275fac = function InstructorProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorProfileComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorProfileComponent, selectors: [["app-instructor-profile"]], decls: 42, vars: 27, consts: [[1, "ip-page"], [1, "ip-hero"], [1, "ip-hero__bg"], [1, "ip-hero__body"], [1, "ip-hero__identity"], [1, "ip-av"], [1, "ip-hero__info"], [1, "ip-hero__name"], [1, "ip-hero__fonction"], [1, "ip-hero__meta"], [4, "ngIf"], [1, "ip-hero__actions"], [1, "ip-status"], [1, "ip-layout"], [1, "ip-aside"], [1, "ip-card", "ip-aside__card"], [1, "ip-av", "ip-av--lg"], [1, "ip-aside__name"], [1, "ip-aside__role"], [1, "ip-status", "ip-status--sm"], [1, "ip-aside__chips"], [1, "ip-chip"], [1, "ip-chip__lbl"], [1, "ip-chip__val"], ["class", "ip-chip", 4, "ngIf"], [1, "ip-main"], ["class", "ip-card", 4, "ngIf"], [1, "isax", "isax-sms"], [1, "isax", "isax-call"], [1, "isax", "isax-building-3"], [1, "ip-card"], [1, "ip-card__header"], [1, "isax", "isax-user-square"], [1, "ip-grid"], [1, "ip-field"], [1, "ip-field__lbl"], [1, "ip-field__val"], [1, "isax", "isax-buildings-2"], [1, "ip-badge", "ip-badge--role"], ["class", "ip-field", 4, "ngIf"], [1, "ip-badge"], [1, "isax", "isax-calendar-1"], [1, "isax", "isax-edit-2"], [3, "ngSubmit", "formGroup"], [1, "ip-form-group"], ["formControlName", "nom", "placeholder", "Nom", 1, "form-control"], ["formControlName", "prenom", "placeholder", "Pr\xE9nom", 1, "form-control"], ["formControlName", "email", "type", "email", "placeholder", "Email", 1, "form-control"], ["formControlName", "telephone", "placeholder", "T\xE9l\xE9phone", 1, "form-control"], ["formControlName", "fonction", "placeholder", "Fonction", 1, "form-control"], ["formControlName", "numero", "placeholder", "Matricule", 1, "form-control"], [1, "ip-form-actions"], ["type", "submit", 1, "ip-btn", "ip-btn--primary", 3, "disabled"], [1, "isax", "isax-tick-circle"], ["type", "button", 1, "ip-btn", "ip-btn--light", 3, "click"]], template: function InstructorProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6)(8, "h2", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 8);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 9);
      \u0275\u0275template(13, InstructorProfileComponent_span_13_Template, 3, 1, "span", 10)(14, InstructorProfileComponent_span_14_Template, 3, 1, "span", 10)(15, InstructorProfileComponent_span_15_Template, 3, 1, "span", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 11)(17, "span", 12);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "div", 13)(20, "aside", 14)(21, "div", 15)(22, "div", 16);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 17);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 18);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span", 19);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 20)(31, "div", 21)(32, "span", 22);
      \u0275\u0275text(33, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 23);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(36, InstructorProfileComponent_div_36_Template, 5, 1, "div", 24)(37, InstructorProfileComponent_div_37_Template, 5, 1, "div", 24)(38, InstructorProfileComponent_div_38_Template, 5, 1, "div", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "main", 25);
      \u0275\u0275template(40, InstructorProfileComponent_ng_container_40_Template, 76, 23, "ng-container", 10)(41, InstructorProfileComponent_div_41_Template, 37, 2, "div", 26);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.getInitials());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.profile == null ? null : ctx.profile.prenom, " ", ctx.profile == null ? null : ctx.profile.nom);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((ctx.profile == null ? null : ctx.profile.fonction) || "\u2014");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.profile == null ? null : ctx.profile.email);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.profile == null ? null : ctx.profile.telephone);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.profile == null ? null : ctx.profile.entreprise);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("ip-status--active", (ctx.profile == null ? null : ctx.profile.statut) === 1)("ip-status--inactive", (ctx.profile == null ? null : ctx.profile.statut) !== 1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getStatusText(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.getInitials());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.profile == null ? null : ctx.profile.prenom, " ", ctx.profile == null ? null : ctx.profile.nom);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((ctx.profile == null ? null : ctx.profile.role == null ? null : ctx.profile.role.name) || "Formateur");
      \u0275\u0275advance();
      \u0275\u0275classProp("ip-status--active", (ctx.profile == null ? null : ctx.profile.statut) === 1)("ip-status--inactive", (ctx.profile == null ? null : ctx.profile.statut) !== 1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getStatusText(), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("#", ctx.profile == null ? null : ctx.profile.id);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.profile == null ? null : ctx.profile.matricule);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.profile == null ? null : ctx.profile.entreprise);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.profile == null ? null : ctx.profile.client);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isEditing && ctx.profile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditing);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, DatePipe], styles: ['\n\n.ip-page[_ngcontent-%COMP%] {\n  padding: 0 0 40px;\n}\n.ip-hero[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      #4F3B25 0%,\n      #7C5C38 50%,\n      #C9A14A 100%);\n  border-radius: 20px;\n  margin-bottom: 28px;\n  overflow: hidden;\n}\n.ip-hero__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(255, 255, 255, 0.12) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 10% 80%,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 40%);\n  pointer-events: none;\n}\n.ip-hero__body[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 28px 32px;\n  flex-wrap: wrap;\n}\n.ip-hero__identity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.ip-hero__info[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.ip-hero__name[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 22px;\n  font-weight: 700;\n  color: #fff;\n}\n.ip-hero__fonction[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 14px;\n  opacity: 0.85;\n  color: #fff;\n}\n.ip-hero__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 14px;\n}\n.ip-hero__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.9);\n}\n.ip-hero__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.ip-hero__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.ip-av[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  border: 3px solid rgba(255, 255, 255, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.ip-av--lg[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  font-size: 26px;\n  background:\n    linear-gradient(\n      135deg,\n      #4F3B25,\n      #C9A14A);\n  border: none;\n  margin: 0 auto 12px;\n}\n.ip-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 14px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.ip-status[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0.7;\n}\n.ip-status--active[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.2);\n  color: #16a34a;\n  border: 1px solid rgba(34, 197, 94, 0.3);\n}\n.ip-status--inactive[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #dc2626;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n.ip-status--sm[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.ip-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .ip-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-aside__card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px 20px;\n}\n.ip-aside__name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 4px;\n}\n.ip-aside__role[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin-bottom: 12px;\n}\n.ip-aside__chips[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  text-align: left;\n}\n.ip-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #FDF6E7;\n  border-radius: 10px;\n  padding: 8px 12px;\n}\n.ip-chip__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.ip-chip__val[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n}\n.ip-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);\n  padding: 24px;\n  margin-bottom: 20px;\n}\n.ip-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.ip-card__header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #C9A14A;\n}\n.ip-card__header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n}\n.ip-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 14px;\n}\n.ip-field[_ngcontent-%COMP%] {\n  background: #FDF6E7;\n  border: 1px solid #f3e8c8;\n  border-radius: 12px;\n  padding: 12px 16px;\n  transition: border-color 0.2s;\n}\n.ip-field[_ngcontent-%COMP%]:hover {\n  border-color: #C9A14A;\n}\n.ip-field__lbl[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #9ca3af;\n  margin-bottom: 4px;\n}\n.ip-field__val[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.ip-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 12px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.ip-badge--role[_ngcontent-%COMP%] {\n  background: #FEF3C7;\n  color: #92400E;\n}\n.ip-badge--active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.ip-badge--inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.ip-form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ip-form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.ip-form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n  padding: 10px 14px;\n  font-size: 14px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.ip-form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #C9A14A;\n  box-shadow: 0 0 0 3px rgba(201, 161, 74, 0.15);\n  outline: none;\n}\n.ip-form-actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n  gap: 12px;\n}\n.ip-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 20px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: opacity 0.2s, transform 0.1s;\n}\n.ip-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.ip-btn--primary[_ngcontent-%COMP%] {\n  background: #4F3B25;\n  color: #fff;\n}\n.ip-btn--primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.ip-btn--light[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n}\n/*# sourceMappingURL=instructor-profile.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorProfileComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-profile", imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="ip-page">

  <!-- HERO -->
  <div class="ip-hero">
    <div class="ip-hero__bg"></div>
    <div class="ip-hero__body">
      <div class="ip-hero__identity">
        <div class="ip-av">{{ getInitials() }}</div>
        <div class="ip-hero__info">
          <h2 class="ip-hero__name">{{ profile?.prenom }} {{ profile?.nom }}</h2>
          <p class="ip-hero__fonction">{{ profile?.fonction || '\u2014' }}</p>
          <div class="ip-hero__meta">
            <span *ngIf="profile?.email"><i class="isax isax-sms"></i>{{ profile?.email }}</span>
            <span *ngIf="profile?.telephone"><i class="isax isax-call"></i>{{ profile?.telephone }}</span>
            <span *ngIf="profile?.entreprise"><i class="isax isax-building-3"></i>{{ profile?.entreprise?.nom }}</span>
          </div>
        </div>
      </div>
      <div class="ip-hero__actions">
        <span class="ip-status" [class.ip-status--active]="profile?.statut === 1"
                                [class.ip-status--inactive]="profile?.statut !== 1">
          {{ getStatusText() }}
        </span>
      </div>
    </div>
  </div>

  <!-- CONTENU -->
  <div class="ip-layout">

    <!-- Aside -->
    <aside class="ip-aside">
      <div class="ip-card ip-aside__card">
        <div class="ip-av ip-av--lg">{{ getInitials() }}</div>
        <div class="ip-aside__name">{{ profile?.prenom }} {{ profile?.nom }}</div>
        <div class="ip-aside__role">{{ profile?.role?.name || 'Formateur' }}</div>
        <span class="ip-status ip-status--sm"
              [class.ip-status--active]="profile?.statut === 1"
              [class.ip-status--inactive]="profile?.statut !== 1">
          {{ getStatusText() }}
        </span>
        <div class="ip-aside__chips">
          <div class="ip-chip">
            <span class="ip-chip__lbl">ID</span>
            <span class="ip-chip__val">#{{ profile?.id }}</span>
          </div>
          <div class="ip-chip" *ngIf="profile?.matricule">
            <span class="ip-chip__lbl">Matricule</span>
            <span class="ip-chip__val">{{ profile?.matricule }}</span>
          </div>
          <div class="ip-chip" *ngIf="profile?.entreprise">
            <span class="ip-chip__lbl">Entreprise</span>
            <span class="ip-chip__val">{{ profile?.entreprise?.nom }}</span>
          </div>
          <div class="ip-chip" *ngIf="profile?.client">
            <span class="ip-chip__lbl">Client</span>
            <span class="ip-chip__val">{{ profile?.client?.nom }}</span>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main -->
    <main class="ip-main">
      <ng-container *ngIf="!isEditing && profile">

        <!-- Informations personnelles -->
        <div class="ip-card">
          <div class="ip-card__header">
            <i class="isax isax-user-square"></i>
            <h4>Informations personnelles</h4>
          </div>
          <div class="ip-grid">
            <div class="ip-field">
              <span class="ip-field__lbl">Nom</span>
              <span class="ip-field__val">{{ profile.nom }}</span>
            </div>
            <div class="ip-field">
              <span class="ip-field__lbl">Pr\xE9nom</span>
              <span class="ip-field__val">{{ profile.prenom }}</span>
            </div>
            <div class="ip-field">
              <span class="ip-field__lbl">Email</span>
              <span class="ip-field__val">{{ profile.email }}</span>
            </div>
            <div class="ip-field">
              <span class="ip-field__lbl">T\xE9l\xE9phone</span>
              <span class="ip-field__val">{{ profile.telephone || '\u2014' }}</span>
            </div>
            <div class="ip-field">
              <span class="ip-field__lbl">Fonction</span>
              <span class="ip-field__val">{{ profile.fonction || '\u2014' }}</span>
            </div>
            <div class="ip-field">
              <span class="ip-field__lbl">Num\xE9ro matricule</span>
              <span class="ip-field__val">{{ profile.matricule || profile.numero || '\u2014' }}</span>
            </div>
          </div>
        </div>

        <!-- Organisation -->
        <div class="ip-card">
          <div class="ip-card__header">
            <i class="isax isax-buildings-2"></i>
            <h4>Organisation</h4>
          </div>
          <div class="ip-grid">
            <div class="ip-field">
              <span class="ip-field__lbl">R\xF4le</span>
              <span class="ip-field__val">
                <span class="ip-badge ip-badge--role">{{ profile.role?.name || 'Formateur' }}</span>
              </span>
            </div>
            <div class="ip-field" *ngIf="profile.direction">
              <span class="ip-field__lbl">Direction</span>
              <span class="ip-field__val">{{ profile.direction }}</span>
            </div>
            <div class="ip-field" *ngIf="profile.entreprise">
              <span class="ip-field__lbl">Entreprise</span>
              <span class="ip-field__val">{{ profile.entreprise.nom }}</span>
            </div>
            <div class="ip-field" *ngIf="profile.client">
              <span class="ip-field__lbl">Client / Groupe</span>
              <span class="ip-field__val">{{ profile.client.nom }}</span>
            </div>
            <div class="ip-field">
              <span class="ip-field__lbl">Statut</span>
              <span class="ip-field__val">
                <span class="ip-badge" [class.ip-badge--active]="profile.statut === 1"
                                       [class.ip-badge--inactive]="profile.statut !== 1">
                  {{ getStatusText() }}
                </span>
              </span>
            </div>
          </div>
        </div>

        <!-- Historique -->
        <div class="ip-card">
          <div class="ip-card__header">
            <i class="isax isax-calendar-1"></i>
            <h4>Historique</h4>
          </div>
          <div class="ip-grid">
            <div class="ip-field">
              <span class="ip-field__lbl">Cr\xE9\xE9 le</span>
              <span class="ip-field__val">{{ profile.created_at | date:'dd/MM/yyyy \xE0 HH:mm' }}</span>
            </div>
            <div class="ip-field">
              <span class="ip-field__lbl">Derni\xE8re modification</span>
              <span class="ip-field__val">{{ profile.updated_at | date:'dd/MM/yyyy \xE0 HH:mm' }}</span>
            </div>
          </div>
        </div>

      </ng-container>

      <!-- EDIT MODE -->
      <div class="ip-card" *ngIf="isEditing">
        <div class="ip-card__header">
          <i class="isax isax-edit-2"></i>
          <h4>Modifier le profil</h4>
        </div>
        <form [formGroup]="profileForm" (ngSubmit)="saveProfile()">
          <div class="ip-grid">
            <div class="ip-form-group">
              <label>Nom</label>
              <input class="form-control" formControlName="nom" placeholder="Nom">
            </div>
            <div class="ip-form-group">
              <label>Pr\xE9nom</label>
              <input class="form-control" formControlName="prenom" placeholder="Pr\xE9nom">
            </div>
            <div class="ip-form-group">
              <label>Email</label>
              <input class="form-control" formControlName="email" type="email" placeholder="Email">
            </div>
            <div class="ip-form-group">
              <label>T\xE9l\xE9phone</label>
              <input class="form-control" formControlName="telephone" placeholder="T\xE9l\xE9phone">
            </div>
            <div class="ip-form-group">
              <label>Fonction</label>
              <input class="form-control" formControlName="fonction" placeholder="Fonction">
            </div>
            <div class="ip-form-group">
              <label>Num\xE9ro matricule</label>
              <input class="form-control" formControlName="numero" placeholder="Matricule">
            </div>
          </div>
          <div class="ip-form-actions">
            <button class="ip-btn ip-btn--primary" type="submit" [disabled]="profileForm.invalid || loading">
              <i class="isax isax-tick-circle"></i> Sauvegarder
            </button>
            <button type="button" class="ip-btn ip-btn--light" (click)="toggleEdit()">Annuler</button>
          </div>
        </form>
      </div>

    </main>
  </div>
</div>
`, styles: ['/* src/app/features/instructor/instructor-profile/instructor-profile.component.scss */\n.ip-page {\n  padding: 0 0 40px;\n}\n.ip-hero {\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      #4F3B25 0%,\n      #7C5C38 50%,\n      #C9A14A 100%);\n  border-radius: 20px;\n  margin-bottom: 28px;\n  overflow: hidden;\n}\n.ip-hero__bg {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(255, 255, 255, 0.12) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 10% 80%,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 40%);\n  pointer-events: none;\n}\n.ip-hero__body {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 28px 32px;\n  flex-wrap: wrap;\n}\n.ip-hero__identity {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.ip-hero__info {\n  color: #fff;\n}\n.ip-hero__name {\n  margin: 0 0 4px;\n  font-size: 22px;\n  font-weight: 700;\n  color: #fff;\n}\n.ip-hero__fonction {\n  margin: 0 0 10px;\n  font-size: 14px;\n  opacity: 0.85;\n  color: #fff;\n}\n.ip-hero__meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 14px;\n}\n.ip-hero__meta span {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.9);\n}\n.ip-hero__meta span i {\n  font-size: 15px;\n}\n.ip-hero__actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.ip-av {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  border: 3px solid rgba(255, 255, 255, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.ip-av--lg {\n  width: 80px;\n  height: 80px;\n  font-size: 26px;\n  background:\n    linear-gradient(\n      135deg,\n      #4F3B25,\n      #C9A14A);\n  border: none;\n  margin: 0 auto 12px;\n}\n.ip-status {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 14px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.ip-status::before {\n  content: "";\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0.7;\n}\n.ip-status--active {\n  background: rgba(34, 197, 94, 0.2);\n  color: #16a34a;\n  border: 1px solid rgba(34, 197, 94, 0.3);\n}\n.ip-status--inactive {\n  background: rgba(239, 68, 68, 0.15);\n  color: #dc2626;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n.ip-status--sm {\n  margin-top: 8px;\n}\n.ip-layout {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .ip-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.ip-aside__card {\n  text-align: center;\n  padding: 28px 20px;\n}\n.ip-aside__name {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 4px;\n}\n.ip-aside__role {\n  font-size: 13px;\n  color: #6b7280;\n  margin-bottom: 12px;\n}\n.ip-aside__chips {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  text-align: left;\n}\n.ip-chip {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #FDF6E7;\n  border-radius: 10px;\n  padding: 8px 12px;\n}\n.ip-chip__lbl {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.ip-chip__val {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n}\n.ip-card {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);\n  padding: 24px;\n  margin-bottom: 20px;\n}\n.ip-card__header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.ip-card__header i {\n  font-size: 20px;\n  color: #C9A14A;\n}\n.ip-card__header h4 {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n}\n.ip-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 14px;\n}\n.ip-field {\n  background: #FDF6E7;\n  border: 1px solid #f3e8c8;\n  border-radius: 12px;\n  padding: 12px 16px;\n  transition: border-color 0.2s;\n}\n.ip-field:hover {\n  border-color: #C9A14A;\n}\n.ip-field__lbl {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #9ca3af;\n  margin-bottom: 4px;\n}\n.ip-field__val {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.ip-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 12px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.ip-badge--role {\n  background: #FEF3C7;\n  color: #92400E;\n}\n.ip-badge--active {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.ip-badge--inactive {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.ip-form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ip-form-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.ip-form-group .form-control {\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n  padding: 10px 14px;\n  font-size: 14px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.ip-form-group .form-control:focus {\n  border-color: #C9A14A;\n  box-shadow: 0 0 0 3px rgba(201, 161, 74, 0.15);\n  outline: none;\n}\n.ip-form-actions {\n  margin-top: 24px;\n  display: flex;\n  gap: 12px;\n}\n.ip-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 20px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: opacity 0.2s, transform 0.1s;\n}\n.ip-btn:active {\n  transform: scale(0.98);\n}\n.ip-btn--primary {\n  background: #4F3B25;\n  color: #fff;\n}\n.ip-btn--primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.ip-btn--light {\n  background: #f3f4f6;\n  color: #374151;\n}\n/*# sourceMappingURL=instructor-profile.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorProfileComponent, { className: "InstructorProfileComponent", filePath: "app/features/instructor/instructor-profile/instructor-profile.component.ts", lineNumber: 14 });
})();
export {
  InstructorProfileComponent
};
//# sourceMappingURL=chunk-YITGXGHL.js.map
