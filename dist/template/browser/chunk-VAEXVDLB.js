import {
  DataService
} from "./chunk-WI4QPEBR.js";
import {
  routes
} from "./chunk-TYVQP4CB.js";
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
} from "./chunk-45DOGZAU.js";
import {
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

// src/app/features/student/student-profile/student-profile.component.ts
function StudentProfileComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.studentProfile == null ? null : ctx_r0.studentProfile.telephone, " ");
  }
}
function StudentProfileComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function StudentProfileComponent_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleEdit());
    });
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275text(2, " Modifier ");
    \u0275\u0275elementEnd();
  }
}
function StudentProfileComponent_div_19_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span");
    \u0275\u0275text(2, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.studentProfile.client.nom);
  }
}
function StudentProfileComponent_div_19_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span");
    \u0275\u0275text(2, "Entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.studentProfile.entreprise.nom);
  }
}
function StudentProfileComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "h4", 18);
    \u0275\u0275text(3, "Informations personnelles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20)(6, "span");
    \u0275\u0275text(7, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 20)(11, "span");
    \u0275\u0275text(12, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 20)(16, "span");
    \u0275\u0275text(17, "Pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 20)(21, "span");
    \u0275\u0275text(22, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 20)(26, "span");
    \u0275\u0275text(27, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "strong");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 20)(31, "span");
    \u0275\u0275text(32, "Fonction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 20)(36, "span");
    \u0275\u0275text(37, "Num\xE9ro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "strong");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 20)(41, "span");
    \u0275\u0275text(42, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "strong", 21);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "h4", 22);
    \u0275\u0275text(46, "Affectation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 19);
    \u0275\u0275template(48, StudentProfileComponent_div_19_div_48_Template, 5, 1, "div", 23)(49, StudentProfileComponent_div_19_div_49_Template, 5, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "h4", 22);
    \u0275\u0275text(51, "Historique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 19)(53, "div", 20)(54, "span");
    \u0275\u0275text(55, "Cr\xE9\xE9 le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "strong");
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 20)(60, "span");
    \u0275\u0275text(61, "Derni\xE8re modification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "strong");
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "date");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.studentProfile.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.studentProfile.nom);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.studentProfile.prenom);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.studentProfile.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.studentProfile.telephone || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.studentProfile.fonction);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.studentProfile.numero || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.studentProfile.role || "Employ\xE9", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.studentProfile.client);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.studentProfile.entreprise);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 12, ctx_r0.studentProfile.created_at, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 15, ctx_r0.studentProfile.updated_at, "dd/MM/yyyy HH:mm"));
  }
}
function StudentProfileComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "h4", 18);
    \u0275\u0275text(3, "Modifier le profil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 24);
    \u0275\u0275listener("ngSubmit", function StudentProfileComponent_div_20_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveProfile());
    });
    \u0275\u0275elementStart(5, "div", 25)(6, "div", 26)(7, "label");
    \u0275\u0275text(8, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 26)(11, "label");
    \u0275\u0275text(12, "Pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 26)(15, "label");
    \u0275\u0275text(16, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 26)(19, "label");
    \u0275\u0275text(20, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 26)(23, "label");
    \u0275\u0275text(24, "Fonction");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 26)(27, "label");
    \u0275\u0275text(28, "Num\xE9ro");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 33)(31, "button", 34);
    \u0275\u0275element(32, "i", 35);
    \u0275\u0275text(33, " Sauvegarder ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 36);
    \u0275\u0275listener("click", function StudentProfileComponent_div_20_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleEdit());
    });
    \u0275\u0275text(35, " Annuler ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r0.profileForm);
    \u0275\u0275advance(27);
    \u0275\u0275property("disabled", ctx_r0.profileForm.invalid);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentProfileComponent, selectors: [["app-student-profile"]], decls: 21, vars: 11, consts: [[1, "content", "container-fluid", "profile-page"], [1, "profile-hero"], [1, "hero-left"], [1, "avatar-xl"], [1, "hero-info"], [1, "role"], [1, "meta"], [1, "fas", "fa-envelope"], [4, "ngIf"], [1, "hero-actions"], [1, "status-pill", 3, "ngClass"], ["class", "btn btn-edit", 3, "click", 4, "ngIf"], ["class", "card profile-card", 4, "ngIf"], [1, "fas", "fa-phone"], [1, "btn", "btn-edit", 3, "click"], [1, "fas", "fa-pen"], [1, "card", "profile-card"], [1, "card-body"], [1, "section-title"], [1, "info-grid"], [1, "info-item"], [1, "badge", "badge-primary"], [1, "section-title", "mt-4"], ["class", "info-item", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "form-group"], ["formControlName", "nom", 1, "form-control"], ["formControlName", "prenom", 1, "form-control"], ["formControlName", "email", 1, "form-control"], ["formControlName", "telephone", 1, "form-control"], ["formControlName", "fonction", 1, "form-control"], ["formControlName", "numero", 1, "form-control"], [1, "actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "fas", "fa-save"], ["type", "button", 1, "btn", "btn-light", 3, "click"]], template: function StudentProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "h2");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 5);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "span");
      \u0275\u0275element(12, "i", 7);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, StudentProfileComponent_span_14_Template, 3, 1, "span", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 9)(16, "span", 10);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, StudentProfileComponent_button_18_Template, 3, 0, "button", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(19, StudentProfileComponent_div_19_Template, 65, 18, "div", 12)(20, StudentProfileComponent_div_20_Template, 36, 2, "div", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.getInitials(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.studentProfile == null ? null : ctx.studentProfile.prenom, " ", ctx.studentProfile == null ? null : ctx.studentProfile.nom);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.studentProfile == null ? null : ctx.studentProfile.fonction);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.studentProfile == null ? null : ctx.studentProfile.email);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.studentProfile == null ? null : ctx.studentProfile.telephone);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.getStatusClass());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getStatusText(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isEditing && ctx.studentProfile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditing);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, DatePipe], styles: ["\n\n.profile-page[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.profile-hero[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      #49e8f7,\n      #dcb183,\n      #7e50e9);\n  border-radius: 16px;\n  padding: 24px;\n  color: #fff;\n  margin-bottom: 30px;\n}\n.profile-hero[_ngcontent-%COMP%]   .hero-left[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n.profile-hero[_ngcontent-%COMP%]   .avatar-xl[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  font-weight: 700;\n}\n.profile-hero[_ngcontent-%COMP%]   .hero-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n}\n.profile-hero[_ngcontent-%COMP%]   .hero-info[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  opacity: 0.9;\n  margin-bottom: 8px;\n}\n.profile-hero[_ngcontent-%COMP%]   .hero-info[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  font-size: 14px;\n}\n.profile-hero[_ngcontent-%COMP%]   .hero-info[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.profile-hero[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.status-pill[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.status-active[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.status-inactive[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.profile-card[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  border: none;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 16px;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n.info-item[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  padding: 14px 16px;\n  border-radius: 12px;\n}\n.info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #6b7280;\n}\n.info-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0d1818;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 20px;\n}\n.actions[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  display: flex;\n  gap: 12px;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #4f46e5;\n  font-weight: 600;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=student-profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentProfileComponent, [{
    type: Component,
    args: [{ selector: "app-student-profile", imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="content container-fluid profile-page">\r
\r
  <!-- HEADER -->\r
  <div class="profile-hero">\r
    <div class="hero-left">\r
      <div class="avatar-xl">\r
        {{ getInitials() }}\r
      </div>\r
      <div class="hero-info">\r
        <h2>{{ studentProfile?.prenom }} {{ studentProfile?.nom }}</h2>\r
        <p class="role">{{ studentProfile?.fonction }}</p>\r
        <div class="meta">\r
          <span><i class="fas fa-envelope"></i> {{ studentProfile?.email }}</span>\r
          <span *ngIf="studentProfile?.telephone">\r
            <i class="fas fa-phone"></i> {{ studentProfile?.telephone }}\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="hero-actions">\r
      <span class="status-pill" [ngClass]="getStatusClass()">\r
        {{ getStatusText() }}\r
      </span>\r
\r
      <button\r
        *ngIf="!isEditing"\r
        class="btn btn-edit"\r
        (click)="toggleEdit()">\r
        <i class="fas fa-pen"></i> Modifier\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- VIEW MODE -->\r
  <div class="card profile-card" *ngIf="!isEditing && studentProfile">\r
    <div class="card-body">\r
\r
      <h4 class="section-title">Informations personnelles</h4>\r
\r
      <div class="info-grid">\r
        <div class="info-item"><span>ID</span><strong>{{ studentProfile.id }}</strong></div>\r
        <div class="info-item"><span>Nom</span><strong>{{ studentProfile.nom }}</strong></div>\r
        <div class="info-item"><span>Pr\xE9nom</span><strong>{{ studentProfile.prenom }}</strong></div>\r
        <div class="info-item"><span>Email</span><strong>{{ studentProfile.email }}</strong></div>\r
        <div class="info-item"><span>T\xE9l\xE9phone</span><strong>{{ studentProfile.telephone || '\u2014' }}</strong></div>\r
        <div class="info-item"><span>Fonction</span><strong>{{ studentProfile.fonction }}</strong></div>\r
        <div class="info-item"><span>Num\xE9ro</span><strong>{{ studentProfile.numero || '\u2014' }}</strong></div>\r
\r
        <div class="info-item">\r
          <span>R\xF4le</span>\r
          <strong class="badge badge-primary">\r
            {{ studentProfile.role || 'Employ\xE9' }}\r
          </strong>\r
        </div>\r
      </div>\r
\r
      <h4 class="section-title mt-4">Affectation</h4>\r
\r
      <div class="info-grid">\r
        <div class="info-item" *ngIf="studentProfile.client">\r
          <span>Client</span>\r
          <strong>{{ studentProfile.client.nom }}</strong>\r
        </div>\r
\r
        <div class="info-item" *ngIf="studentProfile.entreprise">\r
          <span>Entreprise</span>\r
          <strong>{{ studentProfile.entreprise.nom }}</strong>\r
        </div>\r
      </div>\r
\r
      <h4 class="section-title mt-4">Historique</h4>\r
\r
      <div class="info-grid">\r
        <div class="info-item">\r
          <span>Cr\xE9\xE9 le</span>\r
          <strong>{{ studentProfile.created_at | date:'dd/MM/yyyy HH:mm' }}</strong>\r
        </div>\r
        <div class="info-item">\r
          <span>Derni\xE8re modification</span>\r
          <strong>{{ studentProfile.updated_at | date:'dd/MM/yyyy HH:mm' }}</strong>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
  <!-- EDIT MODE -->\r
  <div class="card profile-card" *ngIf="isEditing">\r
    <div class="card-body">\r
      <h4 class="section-title">Modifier le profil</h4>\r
\r
      <form [formGroup]="profileForm" (ngSubmit)="saveProfile()">\r
        <div class="form-grid">\r
\r
          <div class="form-group">\r
            <label>Nom</label>\r
            <input class="form-control" formControlName="nom">\r
          </div>\r
\r
          <div class="form-group">\r
            <label>Pr\xE9nom</label>\r
            <input class="form-control" formControlName="prenom">\r
          </div>\r
\r
          <div class="form-group">\r
            <label>Email</label>\r
            <input class="form-control" formControlName="email">\r
          </div>\r
\r
          <div class="form-group">\r
            <label>T\xE9l\xE9phone</label>\r
            <input class="form-control" formControlName="telephone">\r
          </div>\r
\r
          <div class="form-group">\r
            <label>Fonction</label>\r
            <input class="form-control" formControlName="fonction">\r
          </div>\r
\r
          <div class="form-group">\r
            <label>Num\xE9ro</label>\r
            <input class="form-control" formControlName="numero">\r
          </div>\r
\r
        </div>\r
\r
        <div class="actions">\r
          <button class="btn btn-primary" type="submit" [disabled]="profileForm.invalid">\r
            <i class="fas fa-save"></i> Sauvegarder\r
          </button>\r
          <button type="button" class="btn btn-light" (click)="toggleEdit()">\r
            Annuler\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
\r
</div>\r
`, styles: ["/* src/app/features/student/student-profile/student-profile.component.scss */\n.profile-page {\n  padding: 20px;\n}\n.profile-hero {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      #49e8f7,\n      #dcb183,\n      #7e50e9);\n  border-radius: 16px;\n  padding: 24px;\n  color: #fff;\n  margin-bottom: 30px;\n}\n.profile-hero .hero-left {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n.profile-hero .avatar-xl {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  font-weight: 700;\n}\n.profile-hero .hero-info h2 {\n  margin: 0;\n  font-weight: 700;\n}\n.profile-hero .hero-info .role {\n  opacity: 0.9;\n  margin-bottom: 8px;\n}\n.profile-hero .hero-info .meta span {\n  margin-right: 15px;\n  font-size: 14px;\n}\n.profile-hero .hero-info .meta span i {\n  margin-right: 6px;\n}\n.profile-hero .hero-actions {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.status-pill {\n  padding: 6px 14px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.status-active {\n  background: #22c55e;\n}\n.status-inactive {\n  background: #ef4444;\n}\n.profile-card {\n  border-radius: 16px;\n  border: none;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);\n}\n.section-title {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 16px;\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n.info-item {\n  background: #f9fafb;\n  padding: 14px 16px;\n  border-radius: 12px;\n}\n.info-item span {\n  display: block;\n  font-size: 12px;\n  color: #6b7280;\n}\n.info-item strong {\n  font-size: 14px;\n  color: #0d1818;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 20px;\n}\n.actions {\n  margin-top: 30px;\n  display: flex;\n  gap: 12px;\n}\n.btn-edit {\n  background: #fff;\n  color: #4f46e5;\n  font-weight: 600;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=student-profile.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentProfileComponent, { className: "StudentProfileComponent", filePath: "src/app/features/student/student-profile/student-profile.component.ts", lineNumber: 20 });
})();
export {
  StudentProfileComponent
};
//# sourceMappingURL=chunk-VAEXVDLB.js.map
