import {
  routes
} from "./chunk-F53JZPBU.js";
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
} from "./chunk-IKOSZIEY.js";
import {
  RouterModule
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  DatePipe,
  NgIf
} from "./chunk-5DIP3EXV.js";
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
} from "./chunk-VTSSTHJF.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/superadmin/superadmin-profile/superadmin-profile.component.ts
function SuperadminProfileComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.profile == null ? null : ctx_r0.profile.email);
  }
}
function SuperadminProfileComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.profile == null ? null : ctx_r0.profile.telephone);
  }
}
function SuperadminProfileComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.profile == null ? null : ctx_r0.profile.entreprise == null ? null : ctx_r0.profile.entreprise.nom);
  }
}
function SuperadminProfileComponent_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function SuperadminProfileComponent_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleEdit());
    });
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275text(2, " Modifier ");
    \u0275\u0275elementEnd();
  }
}
function SuperadminProfileComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 23);
    \u0275\u0275text(2, "Matricule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.profile == null ? null : ctx_r0.profile.matricule);
  }
}
function SuperadminProfileComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 23);
    \u0275\u0275text(2, "Entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.profile == null ? null : ctx_r0.profile.entreprise == null ? null : ctx_r0.profile.entreprise.nom);
  }
}
function SuperadminProfileComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 23);
    \u0275\u0275text(2, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.profile == null ? null : ctx_r0.profile.client == null ? null : ctx_r0.profile.client.nom);
  }
}
function SuperadminProfileComponent_ng_container_41_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2, "Direction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.profile.direction);
  }
}
function SuperadminProfileComponent_ng_container_41_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2, "Entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.profile.entreprise.nom);
  }
}
function SuperadminProfileComponent_ng_container_41_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2, "Client / Groupe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.profile.client.nom);
  }
}
function SuperadminProfileComponent_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 33)(2, "div", 34);
    \u0275\u0275element(3, "i", 35);
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5, "Informations personnelles");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36)(7, "div", 37)(8, "span", 38);
    \u0275\u0275text(9, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 39);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 37)(13, "span", 38);
    \u0275\u0275text(14, "Pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 39);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 37)(18, "span", 38);
    \u0275\u0275text(19, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 39);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 37)(23, "span", 38);
    \u0275\u0275text(24, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 39);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 37)(28, "span", 38);
    \u0275\u0275text(29, "Fonction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 39);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 37)(33, "span", 38);
    \u0275\u0275text(34, "Num\xE9ro matricule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 39);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 33)(38, "div", 34);
    \u0275\u0275element(39, "i", 40);
    \u0275\u0275elementStart(40, "h4");
    \u0275\u0275text(41, "Organisation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 36)(43, "div", 37)(44, "span", 38);
    \u0275\u0275text(45, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 39)(47, "span", 41);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(49, SuperadminProfileComponent_ng_container_41_div_49_Template, 5, 1, "div", 42)(50, SuperadminProfileComponent_ng_container_41_div_50_Template, 5, 1, "div", 42)(51, SuperadminProfileComponent_ng_container_41_div_51_Template, 5, 1, "div", 42);
    \u0275\u0275elementStart(52, "div", 37)(53, "span", 38);
    \u0275\u0275text(54, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 39)(56, "span", 43);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(58, "div", 33)(59, "div", 34);
    \u0275\u0275element(60, "i", 44);
    \u0275\u0275elementStart(61, "h4");
    \u0275\u0275text(62, "Historique");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 36)(64, "div", 37)(65, "span", 38);
    \u0275\u0275text(66, "Cr\xE9\xE9 le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 39);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 37)(71, "span", 38);
    \u0275\u0275text(72, "Derni\xE8re modification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 39);
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
    \u0275\u0275textInterpolate((ctx_r0.profile.role == null ? null : ctx_r0.profile.role.name) || "Super Admin");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.profile.direction);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.profile.entreprise);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.profile.client);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("sp-badge--active", ctx_r0.profile.statut === 1)("sp-badge--inactive", ctx_r0.profile.statut !== 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusText(), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 17, ctx_r0.profile.created_at, "dd/MM/yyyy \xE0 HH:mm"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 20, ctx_r0.profile.updated_at, "dd/MM/yyyy \xE0 HH:mm"));
  }
}
function SuperadminProfileComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275element(2, "i", 32);
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "Modifier le profil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 45);
    \u0275\u0275listener("ngSubmit", function SuperadminProfileComponent_div_42_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveProfile());
    });
    \u0275\u0275elementStart(6, "div", 36)(7, "div", 46)(8, "label");
    \u0275\u0275text(9, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 46)(12, "label");
    \u0275\u0275text(13, "Pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 46)(16, "label");
    \u0275\u0275text(17, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 46)(20, "label");
    \u0275\u0275text(21, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 46)(24, "label");
    \u0275\u0275text(25, "Fonction");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 46)(28, "label");
    \u0275\u0275text(29, "Num\xE9ro matricule");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 53)(32, "button", 54);
    \u0275\u0275element(33, "i", 55);
    \u0275\u0275text(34, " Sauvegarder ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 56);
    \u0275\u0275listener("click", function SuperadminProfileComponent_div_42_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r3);
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
var SuperadminProfileComponent = class _SuperadminProfileComponent {
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
  static \u0275fac = function SuperadminProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminProfileComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminProfileComponent, selectors: [["app-superadmin-profile"]], decls: 43, vars: 28, consts: [[1, "sp-page"], [1, "sp-hero"], [1, "sp-hero__bg"], [1, "sp-hero__body"], [1, "sp-hero__identity"], [1, "sp-av"], [1, "sp-hero__info"], [1, "sp-hero__name"], [1, "sp-hero__fonction"], [1, "sp-hero__meta"], [4, "ngIf"], [1, "sp-hero__actions"], [1, "sp-status"], ["type", "button", "class", "sp-btn sp-btn--edit", 3, "click", 4, "ngIf"], [1, "sp-layout"], [1, "sp-aside"], [1, "sp-card", "sp-aside__card"], [1, "sp-av", "sp-av--lg"], [1, "sp-aside__name"], [1, "sp-aside__role"], [1, "sp-status", "sp-status--sm"], [1, "sp-aside__chips"], [1, "sp-chip"], [1, "sp-chip__lbl"], [1, "sp-chip__val"], ["class", "sp-chip", 4, "ngIf"], [1, "sp-main"], ["class", "sp-card", 4, "ngIf"], [1, "isax", "isax-sms"], [1, "isax", "isax-call"], [1, "isax", "isax-building-3"], ["type", "button", 1, "sp-btn", "sp-btn--edit", 3, "click"], [1, "isax", "isax-edit-2"], [1, "sp-card"], [1, "sp-card__header"], [1, "isax", "isax-user-square"], [1, "sp-grid"], [1, "sp-field"], [1, "sp-field__lbl"], [1, "sp-field__val"], [1, "isax", "isax-buildings-2"], [1, "sp-badge", "sp-badge--role"], ["class", "sp-field", 4, "ngIf"], [1, "sp-badge"], [1, "isax", "isax-calendar-1"], [3, "ngSubmit", "formGroup"], [1, "sp-form-group"], ["formControlName", "nom", "placeholder", "Nom", 1, "form-control"], ["formControlName", "prenom", "placeholder", "Pr\xE9nom", 1, "form-control"], ["formControlName", "email", "type", "email", "placeholder", "Email", 1, "form-control"], ["formControlName", "telephone", "placeholder", "T\xE9l\xE9phone", 1, "form-control"], ["formControlName", "fonction", "placeholder", "Fonction", 1, "form-control"], ["formControlName", "numero", "placeholder", "Matricule", 1, "form-control"], [1, "sp-form-actions"], ["type", "submit", 1, "sp-btn", "sp-btn--primary", 3, "disabled"], [1, "isax", "isax-tick-circle"], ["type", "button", 1, "sp-btn", "sp-btn--light", 3, "click"]], template: function SuperadminProfileComponent_Template(rf, ctx) {
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
      \u0275\u0275template(13, SuperadminProfileComponent_span_13_Template, 3, 1, "span", 10)(14, SuperadminProfileComponent_span_14_Template, 3, 1, "span", 10)(15, SuperadminProfileComponent_span_15_Template, 3, 1, "span", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 11)(17, "span", 12);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, SuperadminProfileComponent_button_19_Template, 3, 0, "button", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 14)(21, "aside", 15)(22, "div", 16)(23, "div", 17);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 18);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 19);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 20);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "div", 22)(33, "span", 23);
      \u0275\u0275text(34, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span", 24);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(37, SuperadminProfileComponent_div_37_Template, 5, 1, "div", 25)(38, SuperadminProfileComponent_div_38_Template, 5, 1, "div", 25)(39, SuperadminProfileComponent_div_39_Template, 5, 1, "div", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "main", 26);
      \u0275\u0275template(41, SuperadminProfileComponent_ng_container_41_Template, 76, 23, "ng-container", 10)(42, SuperadminProfileComponent_div_42_Template, 37, 2, "div", 27);
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
      \u0275\u0275classProp("sp-status--active", (ctx.profile == null ? null : ctx.profile.statut) === 1)("sp-status--inactive", (ctx.profile == null ? null : ctx.profile.statut) !== 1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getStatusText(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isEditing);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.getInitials());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.profile == null ? null : ctx.profile.prenom, " ", ctx.profile == null ? null : ctx.profile.nom);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((ctx.profile == null ? null : ctx.profile.role == null ? null : ctx.profile.role.name) || "Super Admin");
      \u0275\u0275advance();
      \u0275\u0275classProp("sp-status--active", (ctx.profile == null ? null : ctx.profile.statut) === 1)("sp-status--inactive", (ctx.profile == null ? null : ctx.profile.statut) !== 1);
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
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, DatePipe], styles: ['\n\n.sp-page[_ngcontent-%COMP%] {\n  padding: 0 0 40px;\n}\n.sp-hero[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      #0F172A 0%,\n      #1e3a8a 55%,\n      #1D4ED8 100%);\n  border-radius: 20px;\n  margin-bottom: 28px;\n  overflow: hidden;\n}\n.sp-hero__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(147, 197, 253, 0.18) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 10% 80%,\n      rgba(255, 255, 255, 0.06) 0%,\n      transparent 40%);\n  pointer-events: none;\n}\n.sp-hero__body[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 28px 32px;\n  flex-wrap: wrap;\n}\n.sp-hero__identity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.sp-hero__info[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.sp-hero__name[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 22px;\n  font-weight: 700;\n  color: #fff;\n}\n.sp-hero__fonction[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 14px;\n  opacity: 0.85;\n  color: #fff;\n}\n.sp-hero__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 14px;\n}\n.sp-hero__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.9);\n}\n.sp-hero__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.sp-hero__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.sp-av[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  border: 3px solid rgba(255, 255, 255, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.sp-av--lg[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  font-size: 26px;\n  background:\n    linear-gradient(\n      135deg,\n      #0F172A,\n      #1D4ED8);\n  border: none;\n  margin: 0 auto 12px;\n}\n.sp-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 14px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.sp-status[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0.7;\n}\n.sp-status--active[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.2);\n  color: #16a34a;\n  border: 1px solid rgba(34, 197, 94, 0.3);\n}\n.sp-status--inactive[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #dc2626;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n.sp-status--sm[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.sp-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .sp-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.sp-aside__card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px 20px;\n}\n.sp-aside__name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 4px;\n}\n.sp-aside__role[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin-bottom: 12px;\n}\n.sp-aside__chips[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  text-align: left;\n}\n.sp-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #eff6ff;\n  border-radius: 10px;\n  padding: 8px 12px;\n}\n.sp-chip__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.sp-chip__val[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n}\n.sp-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);\n  padding: 24px;\n  margin-bottom: 20px;\n}\n.sp-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.sp-card__header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #1D4ED8;\n}\n.sp-card__header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n}\n.sp-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 14px;\n}\n.sp-field[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 12px;\n  padding: 12px 16px;\n  transition: border-color 0.2s;\n}\n.sp-field[_ngcontent-%COMP%]:hover {\n  border-color: #1D4ED8;\n}\n.sp-field__lbl[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #9ca3af;\n  margin-bottom: 4px;\n}\n.sp-field__val[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.sp-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 12px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.sp-badge--role[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.sp-badge--active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.sp-badge--inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.sp-form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.sp-form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.sp-form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n  padding: 10px 14px;\n  font-size: 14px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.sp-form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #1D4ED8;\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.15);\n  outline: none;\n}\n.sp-form-actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n  gap: 12px;\n}\n.sp-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 20px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: opacity 0.2s, transform 0.1s;\n}\n.sp-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.sp-btn--primary[_ngcontent-%COMP%] {\n  background: #1D4ED8;\n  color: #fff;\n}\n.sp-btn--primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.sp-btn--edit[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: #fff;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n}\n.sp-btn--edit[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n.sp-btn--light[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n}\n/*# sourceMappingURL=superadmin-profile.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminProfileComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-profile", imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="sp-page">

  <!-- HERO -->
  <div class="sp-hero">
    <div class="sp-hero__bg"></div>
    <div class="sp-hero__body">
      <div class="sp-hero__identity">
        <div class="sp-av">{{ getInitials() }}</div>
        <div class="sp-hero__info">
          <h2 class="sp-hero__name">{{ profile?.prenom }} {{ profile?.nom }}</h2>
          <p class="sp-hero__fonction">{{ profile?.fonction || '\u2014' }}</p>
          <div class="sp-hero__meta">
            <span *ngIf="profile?.email"><i class="isax isax-sms"></i>{{ profile?.email }}</span>
            <span *ngIf="profile?.telephone"><i class="isax isax-call"></i>{{ profile?.telephone }}</span>
            <span *ngIf="profile?.entreprise"><i class="isax isax-building-3"></i>{{ profile?.entreprise?.nom }}</span>
          </div>
        </div>
      </div>
      <div class="sp-hero__actions">
        <span class="sp-status" [class.sp-status--active]="profile?.statut === 1"
                                [class.sp-status--inactive]="profile?.statut !== 1">
          {{ getStatusText() }}
        </span>
        <button *ngIf="!isEditing" type="button" class="sp-btn sp-btn--edit" (click)="toggleEdit()">
          <i class="isax isax-edit-2"></i> Modifier
        </button>
      </div>
    </div>
  </div>

  <!-- CONTENU -->
  <div class="sp-layout">

    <!-- Aside -->
    <aside class="sp-aside">
      <div class="sp-card sp-aside__card">
        <div class="sp-av sp-av--lg">{{ getInitials() }}</div>
        <div class="sp-aside__name">{{ profile?.prenom }} {{ profile?.nom }}</div>
        <div class="sp-aside__role">{{ profile?.role?.name || 'Super Admin' }}</div>
        <span class="sp-status sp-status--sm"
              [class.sp-status--active]="profile?.statut === 1"
              [class.sp-status--inactive]="profile?.statut !== 1">
          {{ getStatusText() }}
        </span>
        <div class="sp-aside__chips">
          <div class="sp-chip">
            <span class="sp-chip__lbl">ID</span>
            <span class="sp-chip__val">#{{ profile?.id }}</span>
          </div>
          <div class="sp-chip" *ngIf="profile?.matricule">
            <span class="sp-chip__lbl">Matricule</span>
            <span class="sp-chip__val">{{ profile?.matricule }}</span>
          </div>
          <div class="sp-chip" *ngIf="profile?.entreprise">
            <span class="sp-chip__lbl">Entreprise</span>
            <span class="sp-chip__val">{{ profile?.entreprise?.nom }}</span>
          </div>
          <div class="sp-chip" *ngIf="profile?.client">
            <span class="sp-chip__lbl">Client</span>
            <span class="sp-chip__val">{{ profile?.client?.nom }}</span>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main -->
    <main class="sp-main">
      <ng-container *ngIf="!isEditing && profile">

        <!-- Informations personnelles -->
        <div class="sp-card">
          <div class="sp-card__header">
            <i class="isax isax-user-square"></i>
            <h4>Informations personnelles</h4>
          </div>
          <div class="sp-grid">
            <div class="sp-field">
              <span class="sp-field__lbl">Nom</span>
              <span class="sp-field__val">{{ profile.nom }}</span>
            </div>
            <div class="sp-field">
              <span class="sp-field__lbl">Pr\xE9nom</span>
              <span class="sp-field__val">{{ profile.prenom }}</span>
            </div>
            <div class="sp-field">
              <span class="sp-field__lbl">Email</span>
              <span class="sp-field__val">{{ profile.email }}</span>
            </div>
            <div class="sp-field">
              <span class="sp-field__lbl">T\xE9l\xE9phone</span>
              <span class="sp-field__val">{{ profile.telephone || '\u2014' }}</span>
            </div>
            <div class="sp-field">
              <span class="sp-field__lbl">Fonction</span>
              <span class="sp-field__val">{{ profile.fonction || '\u2014' }}</span>
            </div>
            <div class="sp-field">
              <span class="sp-field__lbl">Num\xE9ro matricule</span>
              <span class="sp-field__val">{{ profile.matricule || profile.numero || '\u2014' }}</span>
            </div>
          </div>
        </div>

        <!-- Organisation -->
        <div class="sp-card">
          <div class="sp-card__header">
            <i class="isax isax-buildings-2"></i>
            <h4>Organisation</h4>
          </div>
          <div class="sp-grid">
            <div class="sp-field">
              <span class="sp-field__lbl">R\xF4le</span>
              <span class="sp-field__val">
                <span class="sp-badge sp-badge--role">{{ profile.role?.name || 'Super Admin' }}</span>
              </span>
            </div>
            <div class="sp-field" *ngIf="profile.direction">
              <span class="sp-field__lbl">Direction</span>
              <span class="sp-field__val">{{ profile.direction }}</span>
            </div>
            <div class="sp-field" *ngIf="profile.entreprise">
              <span class="sp-field__lbl">Entreprise</span>
              <span class="sp-field__val">{{ profile.entreprise.nom }}</span>
            </div>
            <div class="sp-field" *ngIf="profile.client">
              <span class="sp-field__lbl">Client / Groupe</span>
              <span class="sp-field__val">{{ profile.client.nom }}</span>
            </div>
            <div class="sp-field">
              <span class="sp-field__lbl">Statut</span>
              <span class="sp-field__val">
                <span class="sp-badge" [class.sp-badge--active]="profile.statut === 1"
                                       [class.sp-badge--inactive]="profile.statut !== 1">
                  {{ getStatusText() }}
                </span>
              </span>
            </div>
          </div>
        </div>

        <!-- Historique -->
        <div class="sp-card">
          <div class="sp-card__header">
            <i class="isax isax-calendar-1"></i>
            <h4>Historique</h4>
          </div>
          <div class="sp-grid">
            <div class="sp-field">
              <span class="sp-field__lbl">Cr\xE9\xE9 le</span>
              <span class="sp-field__val">{{ profile.created_at | date:'dd/MM/yyyy \xE0 HH:mm' }}</span>
            </div>
            <div class="sp-field">
              <span class="sp-field__lbl">Derni\xE8re modification</span>
              <span class="sp-field__val">{{ profile.updated_at | date:'dd/MM/yyyy \xE0 HH:mm' }}</span>
            </div>
          </div>
        </div>

      </ng-container>

      <!-- EDIT MODE -->
      <div class="sp-card" *ngIf="isEditing">
        <div class="sp-card__header">
          <i class="isax isax-edit-2"></i>
          <h4>Modifier le profil</h4>
        </div>
        <form [formGroup]="profileForm" (ngSubmit)="saveProfile()">
          <div class="sp-grid">
            <div class="sp-form-group">
              <label>Nom</label>
              <input class="form-control" formControlName="nom" placeholder="Nom">
            </div>
            <div class="sp-form-group">
              <label>Pr\xE9nom</label>
              <input class="form-control" formControlName="prenom" placeholder="Pr\xE9nom">
            </div>
            <div class="sp-form-group">
              <label>Email</label>
              <input class="form-control" formControlName="email" type="email" placeholder="Email">
            </div>
            <div class="sp-form-group">
              <label>T\xE9l\xE9phone</label>
              <input class="form-control" formControlName="telephone" placeholder="T\xE9l\xE9phone">
            </div>
            <div class="sp-form-group">
              <label>Fonction</label>
              <input class="form-control" formControlName="fonction" placeholder="Fonction">
            </div>
            <div class="sp-form-group">
              <label>Num\xE9ro matricule</label>
              <input class="form-control" formControlName="numero" placeholder="Matricule">
            </div>
          </div>
          <div class="sp-form-actions">
            <button class="sp-btn sp-btn--primary" type="submit" [disabled]="profileForm.invalid || loading">
              <i class="isax isax-tick-circle"></i> Sauvegarder
            </button>
            <button type="button" class="sp-btn sp-btn--light" (click)="toggleEdit()">Annuler</button>
          </div>
        </form>
      </div>

    </main>
  </div>
</div>
`, styles: ['/* src/app/features/superadmin/superadmin-profile/superadmin-profile.component.scss */\n.sp-page {\n  padding: 0 0 40px;\n}\n.sp-hero {\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      #0F172A 0%,\n      #1e3a8a 55%,\n      #1D4ED8 100%);\n  border-radius: 20px;\n  margin-bottom: 28px;\n  overflow: hidden;\n}\n.sp-hero__bg {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(147, 197, 253, 0.18) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 10% 80%,\n      rgba(255, 255, 255, 0.06) 0%,\n      transparent 40%);\n  pointer-events: none;\n}\n.sp-hero__body {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 28px 32px;\n  flex-wrap: wrap;\n}\n.sp-hero__identity {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.sp-hero__info {\n  color: #fff;\n}\n.sp-hero__name {\n  margin: 0 0 4px;\n  font-size: 22px;\n  font-weight: 700;\n  color: #fff;\n}\n.sp-hero__fonction {\n  margin: 0 0 10px;\n  font-size: 14px;\n  opacity: 0.85;\n  color: #fff;\n}\n.sp-hero__meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 14px;\n}\n.sp-hero__meta span {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.9);\n}\n.sp-hero__meta span i {\n  font-size: 15px;\n}\n.sp-hero__actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.sp-av {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  border: 3px solid rgba(255, 255, 255, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.sp-av--lg {\n  width: 80px;\n  height: 80px;\n  font-size: 26px;\n  background:\n    linear-gradient(\n      135deg,\n      #0F172A,\n      #1D4ED8);\n  border: none;\n  margin: 0 auto 12px;\n}\n.sp-status {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 14px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.sp-status::before {\n  content: "";\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0.7;\n}\n.sp-status--active {\n  background: rgba(34, 197, 94, 0.2);\n  color: #16a34a;\n  border: 1px solid rgba(34, 197, 94, 0.3);\n}\n.sp-status--inactive {\n  background: rgba(239, 68, 68, 0.15);\n  color: #dc2626;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n.sp-status--sm {\n  margin-top: 8px;\n}\n.sp-layout {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .sp-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.sp-aside__card {\n  text-align: center;\n  padding: 28px 20px;\n}\n.sp-aside__name {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 4px;\n}\n.sp-aside__role {\n  font-size: 13px;\n  color: #6b7280;\n  margin-bottom: 12px;\n}\n.sp-aside__chips {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  text-align: left;\n}\n.sp-chip {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #eff6ff;\n  border-radius: 10px;\n  padding: 8px 12px;\n}\n.sp-chip__lbl {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.sp-chip__val {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n}\n.sp-card {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);\n  padding: 24px;\n  margin-bottom: 20px;\n}\n.sp-card__header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.sp-card__header i {\n  font-size: 20px;\n  color: #1D4ED8;\n}\n.sp-card__header h4 {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n}\n.sp-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 14px;\n}\n.sp-field {\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 12px;\n  padding: 12px 16px;\n  transition: border-color 0.2s;\n}\n.sp-field:hover {\n  border-color: #1D4ED8;\n}\n.sp-field__lbl {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #9ca3af;\n  margin-bottom: 4px;\n}\n.sp-field__val {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.sp-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 12px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.sp-badge--role {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.sp-badge--active {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.sp-badge--inactive {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.sp-form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.sp-form-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.sp-form-group .form-control {\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n  padding: 10px 14px;\n  font-size: 14px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.sp-form-group .form-control:focus {\n  border-color: #1D4ED8;\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.15);\n  outline: none;\n}\n.sp-form-actions {\n  margin-top: 24px;\n  display: flex;\n  gap: 12px;\n}\n.sp-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 20px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: opacity 0.2s, transform 0.1s;\n}\n.sp-btn:active {\n  transform: scale(0.98);\n}\n.sp-btn--primary {\n  background: #1D4ED8;\n  color: #fff;\n}\n.sp-btn--primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.sp-btn--edit {\n  background: rgba(255, 255, 255, 0.2);\n  color: #fff;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n}\n.sp-btn--edit:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n.sp-btn--light {\n  background: #f3f4f6;\n  color: #374151;\n}\n/*# sourceMappingURL=superadmin-profile.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminProfileComponent, { className: "SuperadminProfileComponent", filePath: "app/features/superadmin/superadmin-profile/superadmin-profile.component.ts", lineNumber: 14 });
})();
export {
  SuperadminProfileComponent
};
//# sourceMappingURL=chunk-GYVKUTEW.js.map
