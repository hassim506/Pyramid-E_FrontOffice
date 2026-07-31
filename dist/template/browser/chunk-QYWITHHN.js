import {
  DataService
} from "./chunk-T4K5LKDF.js";
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

// src/app/features/student/student-profile/student-profile.component.ts
function StudentProfileComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.studentProfile == null ? null : ctx_r0.studentProfile.email, " ");
  }
}
function StudentProfileComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.studentProfile == null ? null : ctx_r0.studentProfile.telephone, " ");
  }
}
function StudentProfileComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.studentProfile == null ? null : ctx_r0.studentProfile.entreprise == null ? null : ctx_r0.studentProfile.entreprise.nom, " ");
  }
}
function StudentProfileComponent_div_36_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate(ctx_r0.studentProfile == null ? null : ctx_r0.studentProfile.matricule);
  }
}
function StudentProfileComponent_div_37_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate(ctx_r0.studentProfile == null ? null : ctx_r0.studentProfile.entreprise == null ? null : ctx_r0.studentProfile.entreprise.nom);
  }
}
function StudentProfileComponent_div_38_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate(ctx_r0.studentProfile == null ? null : ctx_r0.studentProfile.client == null ? null : ctx_r0.studentProfile.client.nom);
  }
}
function StudentProfileComponent_ng_container_40_div_49_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate(ctx_r0.studentProfile.direction);
  }
}
function StudentProfileComponent_ng_container_40_div_50_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate(ctx_r0.studentProfile.entreprise.nom);
  }
}
function StudentProfileComponent_ng_container_40_div_51_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate(ctx_r0.studentProfile.client.nom);
  }
}
function StudentProfileComponent_ng_container_40_Template(rf, ctx) {
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
    \u0275\u0275template(49, StudentProfileComponent_ng_container_40_div_49_Template, 5, 1, "div", 39)(50, StudentProfileComponent_ng_container_40_div_50_Template, 5, 1, "div", 39)(51, StudentProfileComponent_ng_container_40_div_51_Template, 5, 1, "div", 39);
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
    \u0275\u0275textInterpolate(ctx_r0.studentProfile.nom);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.studentProfile.prenom);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.studentProfile.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.studentProfile.telephone || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.studentProfile.fonction || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.studentProfile.matricule || ctx_r0.studentProfile.numero || "\u2014");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate((ctx_r0.studentProfile.role == null ? null : ctx_r0.studentProfile.role.name) || "Employ\xE9");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.studentProfile.direction);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.studentProfile.entreprise);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.studentProfile.client);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("sp-badge--active", ctx_r0.studentProfile.statut === 1)("sp-badge--inactive", ctx_r0.studentProfile.statut !== 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusText(), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 17, ctx_r0.studentProfile.created_at, "dd/MM/yyyy \xE0 HH:mm"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 20, ctx_r0.studentProfile.updated_at, "dd/MM/yyyy \xE0 HH:mm"));
  }
}
function StudentProfileComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275element(2, "i", 42);
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "Modifier le profil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 43);
    \u0275\u0275listener("ngSubmit", function StudentProfileComponent_div_41_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveProfile());
    });
    \u0275\u0275elementStart(6, "div", 33)(7, "div", 44)(8, "label", 45);
    \u0275\u0275text(9, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 44)(12, "label", 47);
    \u0275\u0275text(13, "Pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 44)(16, "label", 49);
    \u0275\u0275text(17, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 44)(20, "label", 51);
    \u0275\u0275text(21, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 44)(24, "label", 53);
    \u0275\u0275text(25, "Fonction");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 44)(28, "label", 55);
    \u0275\u0275text(29, "Num\xE9ro matricule");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 57)(32, "button", 58);
    \u0275\u0275element(33, "i", 59);
    \u0275\u0275text(34, " Sauvegarder ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 60);
    \u0275\u0275listener("click", function StudentProfileComponent_div_41_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleEdit());
    });
    \u0275\u0275text(36, " Annuler ");
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
var StudentProfileComponent = class _StudentProfileComponent {
  dataService;
  fb;
  routes = routes;
  studentProfile = null;
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
          currentUser.role = "Employe";
          console.log("\u2795 Ajout du r\xF4le: Employe");
        } else if (!currentUser.role) {
          currentUser.role = "Utilisateur";
        }
        this.studentProfile = currentUser;
        console.log("\u{1F464} Profil Employe assign\xE9:", this.studentProfile);
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
      console.log("\u{1F3C1} Fin du chargement. studentProfile:", this.studentProfile);
      console.log("\u{1F3C1} Loading:", this.loading);
    }
  }
  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing && this.studentProfile) {
      this.profileForm.patchValue({
        nom: this.studentProfile.nom,
        prenom: this.studentProfile.prenom,
        email: this.studentProfile.email,
        telephone: this.studentProfile.telephone,
        fonction: this.studentProfile.fonction,
        numero: this.studentProfile.numero
      });
    }
  }
  saveProfile() {
    if (this.profileForm.valid && this.studentProfile) {
      this.loading = true;
      const updatedProfile = __spreadValues(__spreadValues({}, this.studentProfile), this.profileForm.value);
      try {
        localStorage.setItem("pyramide_user", JSON.stringify(updatedProfile));
        this.studentProfile = updatedProfile;
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
    if (!this.studentProfile)
      return "";
    return this.studentProfile.statut === 1 ? "Actif" : "Inactif";
  }
  getStatusClass() {
    if (!this.studentProfile)
      return "";
    return this.studentProfile.statut === 1 ? "status-active" : "status-inactive";
  }
  getInitials() {
    if (!this.studentProfile)
      return "";
    const firstNameInitial = this.studentProfile.prenom?.charAt(0) || "";
    const lastNameInitial = this.studentProfile.nom?.charAt(0) || "";
    return (firstNameInitial + lastNameInitial).toUpperCase();
  }
  static \u0275fac = function StudentProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentProfileComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentProfileComponent, selectors: [["app-student-profile"]], decls: 42, vars: 27, consts: [[1, "sp-page"], [1, "sp-hero"], [1, "sp-hero__bg"], [1, "sp-hero__body"], [1, "sp-hero__identity"], [1, "sp-av"], [1, "sp-hero__info"], [1, "sp-hero__name"], [1, "sp-hero__fonction"], [1, "sp-hero__meta"], [4, "ngIf"], [1, "sp-hero__actions"], [1, "sp-status"], [1, "sp-layout"], [1, "sp-aside"], [1, "sp-card", "sp-aside__card"], [1, "sp-av", "sp-av--lg"], [1, "sp-aside__name"], [1, "sp-aside__role"], [1, "sp-status", "sp-status--sm"], [1, "sp-aside__chips"], [1, "sp-chip"], [1, "sp-chip__lbl"], [1, "sp-chip__val"], ["class", "sp-chip", 4, "ngIf"], [1, "sp-main"], ["class", "sp-card", 4, "ngIf"], [1, "isax", "isax-sms"], [1, "isax", "isax-call"], [1, "isax", "isax-building-3"], [1, "sp-card"], [1, "sp-card__header"], [1, "isax", "isax-user-square"], [1, "sp-grid"], [1, "sp-field"], [1, "sp-field__lbl"], [1, "sp-field__val"], [1, "isax", "isax-buildings-2"], [1, "sp-badge", "sp-badge--role"], ["class", "sp-field", 4, "ngIf"], [1, "sp-badge"], [1, "isax", "isax-calendar-1"], [1, "isax", "isax-edit-2"], [3, "ngSubmit", "formGroup"], [1, "sp-form-group"], ["for", "sp-nom"], ["id", "sp-nom", "formControlName", "nom", "placeholder", "Nom", 1, "form-control"], ["for", "sp-prenom"], ["id", "sp-prenom", "formControlName", "prenom", "placeholder", "Pr\xE9nom", 1, "form-control"], ["for", "sp-email"], ["id", "sp-email", "formControlName", "email", "type", "email", "placeholder", "Email", 1, "form-control"], ["for", "sp-telephone"], ["id", "sp-telephone", "formControlName", "telephone", "placeholder", "T\xE9l\xE9phone", 1, "form-control"], ["for", "sp-fonction"], ["id", "sp-fonction", "formControlName", "fonction", "placeholder", "Fonction", 1, "form-control"], ["for", "sp-numero"], ["id", "sp-numero", "formControlName", "numero", "placeholder", "Matricule", 1, "form-control"], [1, "sp-form-actions"], ["type", "submit", 1, "sp-btn", "sp-btn--primary", 3, "disabled"], [1, "isax", "isax-tick-circle"], ["type", "button", 1, "sp-btn", "sp-btn--light", 3, "click"]], template: function StudentProfileComponent_Template(rf, ctx) {
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
      \u0275\u0275template(13, StudentProfileComponent_span_13_Template, 3, 1, "span", 10)(14, StudentProfileComponent_span_14_Template, 3, 1, "span", 10)(15, StudentProfileComponent_span_15_Template, 3, 1, "span", 10);
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
      \u0275\u0275template(36, StudentProfileComponent_div_36_Template, 5, 1, "div", 24)(37, StudentProfileComponent_div_37_Template, 5, 1, "div", 24)(38, StudentProfileComponent_div_38_Template, 5, 1, "div", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "main", 25);
      \u0275\u0275template(40, StudentProfileComponent_ng_container_40_Template, 76, 23, "ng-container", 10)(41, StudentProfileComponent_div_41_Template, 37, 2, "div", 26);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.getInitials());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.studentProfile == null ? null : ctx.studentProfile.prenom, " ", ctx.studentProfile == null ? null : ctx.studentProfile.nom);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((ctx.studentProfile == null ? null : ctx.studentProfile.fonction) || "\u2014");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.studentProfile == null ? null : ctx.studentProfile.email);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.studentProfile == null ? null : ctx.studentProfile.telephone);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.studentProfile == null ? null : ctx.studentProfile.entreprise);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("sp-status--active", (ctx.studentProfile == null ? null : ctx.studentProfile.statut) === 1)("sp-status--inactive", (ctx.studentProfile == null ? null : ctx.studentProfile.statut) !== 1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getStatusText(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.getInitials());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.studentProfile == null ? null : ctx.studentProfile.prenom, " ", ctx.studentProfile == null ? null : ctx.studentProfile.nom);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((ctx.studentProfile == null ? null : ctx.studentProfile.role == null ? null : ctx.studentProfile.role.name) || "Employ\xE9");
      \u0275\u0275advance();
      \u0275\u0275classProp("sp-status--active", (ctx.studentProfile == null ? null : ctx.studentProfile.statut) === 1)("sp-status--inactive", (ctx.studentProfile == null ? null : ctx.studentProfile.statut) !== 1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getStatusText(), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("#", ctx.studentProfile == null ? null : ctx.studentProfile.id);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.studentProfile == null ? null : ctx.studentProfile.matricule);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.studentProfile == null ? null : ctx.studentProfile.entreprise);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.studentProfile == null ? null : ctx.studentProfile.client);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isEditing && ctx.studentProfile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditing);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, DatePipe], styles: ['\n\n.sp-page[_ngcontent-%COMP%] {\n  padding: 0 0 40px;\n}\n.sp-hero[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      #0d9488 0%,\n      #0891b2 50%,\n      #6366f1 100%);\n  border-radius: 20px;\n  margin-bottom: 28px;\n  overflow: hidden;\n}\n.sp-hero__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(255, 255, 255, 0.12) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 10% 80%,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 40%);\n  pointer-events: none;\n}\n.sp-hero__body[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 28px 32px;\n  flex-wrap: wrap;\n}\n.sp-hero__identity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.sp-hero__info[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.sp-hero__name[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 22px;\n  font-weight: 700;\n  color: #fff;\n}\n.sp-hero__fonction[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 14px;\n  opacity: 0.85;\n  color: #fff;\n}\n.sp-hero__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 14px;\n}\n.sp-hero__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.9);\n}\n.sp-hero__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.sp-hero__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.sp-av[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  border: 3px solid rgba(255, 255, 255, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.sp-av--lg[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  font-size: 26px;\n  background:\n    linear-gradient(\n      135deg,\n      #0d9488,\n      #6366f1);\n  border: none;\n  margin: 0 auto 12px;\n}\n.sp-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 14px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.sp-status[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0.7;\n}\n.sp-status--active[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.2);\n  color: #16a34a;\n  border: 1px solid rgba(34, 197, 94, 0.3);\n}\n.sp-status--inactive[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #dc2626;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n.sp-status--sm[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.sp-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .sp-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.sp-aside__card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px 20px;\n}\n.sp-aside__name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 4px;\n}\n.sp-aside__role[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin-bottom: 12px;\n}\n.sp-aside__chips[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  text-align: left;\n}\n.sp-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #f3f4f6;\n  border-radius: 10px;\n  padding: 8px 12px;\n}\n.sp-chip__lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.sp-chip__val[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n}\n.sp-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);\n  padding: 24px;\n  margin-bottom: 20px;\n}\n.sp-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.sp-card__header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #0d9488;\n}\n.sp-card__header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n}\n.sp-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 14px;\n}\n.sp-field[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border: 1px solid #f3f4f6;\n  border-radius: 12px;\n  padding: 12px 16px;\n  transition: border-color 0.2s;\n}\n.sp-field[_ngcontent-%COMP%]:hover {\n  border-color: #d1fae5;\n}\n.sp-field__lbl[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #9ca3af;\n  margin-bottom: 4px;\n}\n.sp-field__val[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.sp-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 12px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.sp-badge--role[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #4338ca;\n}\n.sp-badge--active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.sp-badge--inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.sp-form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.sp-form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.sp-form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n  padding: 10px 14px;\n  font-size: 14px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.sp-form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #0d9488;\n  box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.1);\n  outline: none;\n}\n.sp-form-actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n  gap: 12px;\n}\n.sp-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 20px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: opacity 0.2s, transform 0.1s;\n}\n.sp-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.sp-btn--edit[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  color: #0d9488;\n}\n.sp-btn--edit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.sp-btn--primary[_ngcontent-%COMP%] {\n  background: #0d9488;\n  color: #fff;\n}\n.sp-btn--primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.sp-btn--light[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n}\n/*# sourceMappingURL=student-profile.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentProfileComponent, [{
    type: Component,
    args: [{ selector: "app-student-profile", imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="sp-page">

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       HERO BANNER
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="sp-hero">
    <div class="sp-hero__bg"></div>

    <div class="sp-hero__body">
      <!-- Avatar + identit\xE9 -->
      <div class="sp-hero__identity">
        <div class="sp-av">{{ getInitials() }}</div>
        <div class="sp-hero__info">
          <h2 class="sp-hero__name">{{ studentProfile?.prenom }} {{ studentProfile?.nom }}</h2>
          <p class="sp-hero__fonction">{{ studentProfile?.fonction || '\u2014' }}</p>
          <div class="sp-hero__meta">
            <span *ngIf="studentProfile?.email">
              <i class="isax isax-sms"></i>{{ studentProfile?.email }}
            </span>
            <span *ngIf="studentProfile?.telephone">
              <i class="isax isax-call"></i>{{ studentProfile?.telephone }}
            </span>
            <span *ngIf="studentProfile?.entreprise">
              <i class="isax isax-building-3"></i>{{ studentProfile?.entreprise?.nom }}
            </span>
          </div>
        </div>
      </div>

      <!-- Badge statut + bouton -->
      <div class="sp-hero__actions">
        <span class="sp-status" [class.sp-status--active]="studentProfile?.statut === 1"
                                [class.sp-status--inactive]="studentProfile?.statut !== 1">
          {{ getStatusText() }}
        </span>
        <!-- <button *ngIf="!isEditing" type="button" class="sp-btn sp-btn--edit" (click)="toggleEdit()">
          <i class="isax isax-edit-2"></i> Modifier
        </button> -->
      </div>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       CONTENU
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="sp-layout">

    <!-- \u2500\u2500 Colonne gauche : r\xE9capitulatif \u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <aside class="sp-aside">
      <div class="sp-card sp-aside__card">
        <div class="sp-av sp-av--lg">{{ getInitials() }}</div>
        <div class="sp-aside__name">{{ studentProfile?.prenom }} {{ studentProfile?.nom }}</div>
        <div class="sp-aside__role">{{ studentProfile?.role?.name || 'Employ\xE9' }}</div>
        <span class="sp-status sp-status--sm"
              [class.sp-status--active]="studentProfile?.statut === 1"
              [class.sp-status--inactive]="studentProfile?.statut !== 1">
          {{ getStatusText() }}
        </span>

        <div class="sp-aside__chips">
          <div class="sp-chip">
            <span class="sp-chip__lbl">ID</span>
            <span class="sp-chip__val">#{{ studentProfile?.id }}</span>
          </div>
          <div class="sp-chip" *ngIf="studentProfile?.matricule">
            <span class="sp-chip__lbl">Matricule</span>
            <span class="sp-chip__val">{{ studentProfile?.matricule }}</span>
          </div>
          <div class="sp-chip" *ngIf="studentProfile?.entreprise">
            <span class="sp-chip__lbl">Entreprise</span>
            <span class="sp-chip__val">{{ studentProfile?.entreprise?.nom }}</span>
          </div>
          <div class="sp-chip" *ngIf="studentProfile?.client">
            <span class="sp-chip__lbl">Client</span>
            <span class="sp-chip__val">{{ studentProfile?.client?.nom }}</span>
          </div>
        </div>
      </div>
    </aside>

    <!-- \u2500\u2500 Colonne droite : d\xE9tails \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <main class="sp-main">

      <!-- VIEW MODE -->
      <ng-container *ngIf="!isEditing && studentProfile">

        <!-- Informations personnelles -->
        <div class="sp-card">
          <div class="sp-card__header">
            <i class="isax isax-user-square"></i>
            <h4>Informations personnelles</h4>
          </div>
          <div class="sp-grid">
            <div class="sp-field">
              <span class="sp-field__lbl">Nom</span>
              <span class="sp-field__val">{{ studentProfile.nom }}</span>
            </div>
            <div class="sp-field">
              <span class="sp-field__lbl">Pr\xE9nom</span>
              <span class="sp-field__val">{{ studentProfile.prenom }}</span>
            </div>
            <div class="sp-field">
              <span class="sp-field__lbl">Email</span>
              <span class="sp-field__val">{{ studentProfile.email }}</span>
            </div>
            <div class="sp-field">
              <span class="sp-field__lbl">T\xE9l\xE9phone</span>
              <span class="sp-field__val">{{ studentProfile.telephone || '\u2014' }}</span>
            </div>
            <div class="sp-field">
              <span class="sp-field__lbl">Fonction</span>
              <span class="sp-field__val">{{ studentProfile.fonction || '\u2014' }}</span>
            </div>
            <div class="sp-field">
              <span class="sp-field__lbl">Num\xE9ro matricule</span>
              <span class="sp-field__val">{{ studentProfile.matricule || studentProfile.numero || '\u2014' }}</span>
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
                <span class="sp-badge sp-badge--role">{{ studentProfile.role?.name || 'Employ\xE9' }}</span>
              </span>
            </div>
            <div class="sp-field" *ngIf="studentProfile.direction">
              <span class="sp-field__lbl">Direction</span>
              <span class="sp-field__val">{{ studentProfile.direction }}</span>
            </div>
            <div class="sp-field" *ngIf="studentProfile.entreprise">
              <span class="sp-field__lbl">Entreprise</span>
              <span class="sp-field__val">{{ studentProfile.entreprise.nom }}</span>
            </div>
            <div class="sp-field" *ngIf="studentProfile.client">
              <span class="sp-field__lbl">Client / Groupe</span>
              <span class="sp-field__val">{{ studentProfile.client.nom }}</span>
            </div>
            <div class="sp-field">
              <span class="sp-field__lbl">Statut</span>
              <span class="sp-field__val">
                <span class="sp-badge" [class.sp-badge--active]="studentProfile.statut === 1"
                                       [class.sp-badge--inactive]="studentProfile.statut !== 1">
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
              <span class="sp-field__val">{{ studentProfile.created_at | date:'dd/MM/yyyy \xE0 HH:mm' }}</span>
            </div>
            <div class="sp-field">
              <span class="sp-field__lbl">Derni\xE8re modification</span>
              <span class="sp-field__val">{{ studentProfile.updated_at | date:'dd/MM/yyyy \xE0 HH:mm' }}</span>
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
              <label for="sp-nom">Nom</label>
              <input id="sp-nom" class="form-control" formControlName="nom" placeholder="Nom">
            </div>
            <div class="sp-form-group">
              <label for="sp-prenom">Pr\xE9nom</label>
              <input id="sp-prenom" class="form-control" formControlName="prenom" placeholder="Pr\xE9nom">
            </div>
            <div class="sp-form-group">
              <label for="sp-email">Email</label>
              <input id="sp-email" class="form-control" formControlName="email" type="email" placeholder="Email">
            </div>
            <div class="sp-form-group">
              <label for="sp-telephone">T\xE9l\xE9phone</label>
              <input id="sp-telephone" class="form-control" formControlName="telephone" placeholder="T\xE9l\xE9phone">
            </div>
            <div class="sp-form-group">
              <label for="sp-fonction">Fonction</label>
              <input id="sp-fonction" class="form-control" formControlName="fonction" placeholder="Fonction">
            </div>
            <div class="sp-form-group">
              <label for="sp-numero">Num\xE9ro matricule</label>
              <input id="sp-numero" class="form-control" formControlName="numero" placeholder="Matricule">
            </div>
          </div>

          <div class="sp-form-actions">
            <button class="sp-btn sp-btn--primary" type="submit" [disabled]="profileForm.invalid || loading">
              <i class="isax isax-tick-circle"></i> Sauvegarder
            </button>
            <button type="button" class="sp-btn sp-btn--light" (click)="toggleEdit()">
              Annuler
            </button>
          </div>
        </form>
      </div>

    </main>
  </div>

</div>
`, styles: ['/* src/app/features/student/student-profile/student-profile.component.scss */\n.sp-page {\n  padding: 0 0 40px;\n}\n.sp-hero {\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      #0d9488 0%,\n      #0891b2 50%,\n      #6366f1 100%);\n  border-radius: 20px;\n  margin-bottom: 28px;\n  overflow: hidden;\n}\n.sp-hero__bg {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(255, 255, 255, 0.12) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 10% 80%,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 40%);\n  pointer-events: none;\n}\n.sp-hero__body {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 28px 32px;\n  flex-wrap: wrap;\n}\n.sp-hero__identity {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.sp-hero__info {\n  color: #fff;\n}\n.sp-hero__name {\n  margin: 0 0 4px;\n  font-size: 22px;\n  font-weight: 700;\n  color: #fff;\n}\n.sp-hero__fonction {\n  margin: 0 0 10px;\n  font-size: 14px;\n  opacity: 0.85;\n  color: #fff;\n}\n.sp-hero__meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 14px;\n}\n.sp-hero__meta span {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.9);\n}\n.sp-hero__meta span i {\n  font-size: 15px;\n}\n.sp-hero__actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.sp-av {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  border: 3px solid rgba(255, 255, 255, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.sp-av--lg {\n  width: 80px;\n  height: 80px;\n  font-size: 26px;\n  background:\n    linear-gradient(\n      135deg,\n      #0d9488,\n      #6366f1);\n  border: none;\n  margin: 0 auto 12px;\n}\n.sp-status {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 14px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.sp-status::before {\n  content: "";\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0.7;\n}\n.sp-status--active {\n  background: rgba(34, 197, 94, 0.2);\n  color: #16a34a;\n  border: 1px solid rgba(34, 197, 94, 0.3);\n}\n.sp-status--inactive {\n  background: rgba(239, 68, 68, 0.15);\n  color: #dc2626;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n.sp-status--sm {\n  margin-top: 8px;\n}\n.sp-layout {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .sp-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.sp-aside__card {\n  text-align: center;\n  padding: 28px 20px;\n}\n.sp-aside__name {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 4px;\n}\n.sp-aside__role {\n  font-size: 13px;\n  color: #6b7280;\n  margin-bottom: 12px;\n}\n.sp-aside__chips {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  text-align: left;\n}\n.sp-chip {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #f3f4f6;\n  border-radius: 10px;\n  padding: 8px 12px;\n}\n.sp-chip__lbl {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.sp-chip__val {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n}\n.sp-card {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);\n  padding: 24px;\n  margin-bottom: 20px;\n}\n.sp-card__header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.sp-card__header i {\n  font-size: 20px;\n  color: #0d9488;\n}\n.sp-card__header h4 {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 700;\n  color: #111827;\n}\n.sp-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 14px;\n}\n.sp-field {\n  background: #f9fafb;\n  border: 1px solid #f3f4f6;\n  border-radius: 12px;\n  padding: 12px 16px;\n  transition: border-color 0.2s;\n}\n.sp-field:hover {\n  border-color: #d1fae5;\n}\n.sp-field__lbl {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #9ca3af;\n  margin-bottom: 4px;\n}\n.sp-field__val {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.sp-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 12px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.sp-badge--role {\n  background: #e0e7ff;\n  color: #4338ca;\n}\n.sp-badge--active {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.sp-badge--inactive {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.sp-form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.sp-form-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.sp-form-group .form-control {\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n  padding: 10px 14px;\n  font-size: 14px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.sp-form-group .form-control:focus {\n  border-color: #0d9488;\n  box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.1);\n  outline: none;\n}\n.sp-form-actions {\n  margin-top: 24px;\n  display: flex;\n  gap: 12px;\n}\n.sp-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 20px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: opacity 0.2s, transform 0.1s;\n}\n.sp-btn:active {\n  transform: scale(0.98);\n}\n.sp-btn--edit {\n  background: rgba(255, 255, 255, 0.95);\n  color: #0d9488;\n}\n.sp-btn--edit i {\n  font-size: 15px;\n}\n.sp-btn--primary {\n  background: #0d9488;\n  color: #fff;\n}\n.sp-btn--primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.sp-btn--light {\n  background: #f3f4f6;\n  color: #374151;\n}\n/*# sourceMappingURL=student-profile.component.css.map */\n'] }]
  }], () => [{ type: DataService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentProfileComponent, { className: "StudentProfileComponent", filePath: "app/features/student/student-profile/student-profile.component.ts", lineNumber: 20 });
})();
export {
  StudentProfileComponent
};
//# sourceMappingURL=chunk-QYWITHHN.js.map
