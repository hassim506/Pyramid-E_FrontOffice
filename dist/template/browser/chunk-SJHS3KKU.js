import {
  UserService
} from "./chunk-C3XHZ4TX.js";
import {
  ClientCompanyService
} from "./chunk-AOQ7MVQS.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-IKOSZIEY.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-5DIP3EXV.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VTSSTHJF.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/superadmin/user-add/user-add.component.ts
function UserAddComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "small");
    \u0275\u0275text(2, "Le nom est requis (min. 2 caract\xE8res)");
    \u0275\u0275elementEnd()();
  }
}
function UserAddComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "small");
    \u0275\u0275text(2, "Le pr\xE9nom est requis (min. 2 caract\xE8res)");
    \u0275\u0275elementEnd()();
  }
}
function UserAddComponent_div_0_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "small");
    \u0275\u0275text(2, "Email valide requis");
    \u0275\u0275elementEnd()();
  }
}
function UserAddComponent_div_0_option_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    \u0275\u0275property("value", role_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r3.name);
  }
}
function UserAddComponent_div_0_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "small");
    \u0275\u0275text(2, "Le r\xF4le est requis");
    \u0275\u0275elementEnd()();
  }
}
function UserAddComponent_div_0_option_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const company_r4 = ctx.$implicit;
    \u0275\u0275property("value", company_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(company_r4.nom);
  }
}
function UserAddComponent_div_0_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "button", 40);
    \u0275\u0275listener("click", function UserAddComponent_div_0_div_66_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePasswordFields());
    });
    \u0275\u0275element(2, "i", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("isax-lock", !ctx_r1.showPasswordFields)("isax-lock-slash", ctx_r1.showPasswordFields);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.showPasswordFields ? "Annuler le changement de mot de passe" : "Modifier le mot de passe", " ");
  }
}
function UserAddComponent_div_0_div_67_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UserAddComponent_div_0_div_67_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "small");
    \u0275\u0275text(2, "Mot de passe requis (min. 8 caract\xE8res)");
    \u0275\u0275elementEnd()();
  }
}
function UserAddComponent_div_0_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 12);
    \u0275\u0275text(2, "Mot de passe ");
    \u0275\u0275template(3, UserAddComponent_div_0_div_67_span_3_Template, 2, 0, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 43);
    \u0275\u0275template(5, UserAddComponent_div_0_div_67_div_5_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.isEditMode);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.isEditMode ? "Nouveau mot de passe" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r1.userForm.get("password")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.userForm.get("password")) == null ? null : tmp_4_0.touched));
  }
}
function UserAddComponent_div_0_div_68_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function UserAddComponent_div_0_div_68_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "small");
    \u0275\u0275text(2, "Confirmation du mot de passe requise");
    \u0275\u0275elementEnd()();
  }
}
function UserAddComponent_div_0_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 12);
    \u0275\u0275text(2, "Confirmer le mot de passe ");
    \u0275\u0275template(3, UserAddComponent_div_0_div_68_span_3_Template, 2, 0, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 44);
    \u0275\u0275template(5, UserAddComponent_div_0_div_68_div_5_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.isEditMode);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.isEditMode ? "Confirmer le nouveau mot de passe" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r1.userForm.get("password_confirmation")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.userForm.get("password_confirmation")) == null ? null : tmp_4_0.touched));
  }
}
function UserAddComponent_div_0_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 47);
    \u0275\u0275listener("click", function UserAddComponent_div_0_div_69_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.errorMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.errorMessage, " ");
  }
}
function UserAddComponent_div_0_span_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 48);
  }
}
function UserAddComponent_div_0_i_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 49);
  }
}
function UserAddComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h5", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 7);
    \u0275\u0275listener("click", function UserAddComponent_div_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideDialog());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8)(8, "form", 9)(9, "div", 10)(10, "div", 11)(11, "label", 12);
    \u0275\u0275text(12, "Nom ");
    \u0275\u0275elementStart(13, "span", 13);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 14);
    \u0275\u0275template(16, UserAddComponent_div_0_div_16_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 11)(18, "label", 12);
    \u0275\u0275text(19, "Pr\xE9nom ");
    \u0275\u0275elementStart(20, "span", 13);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "input", 16);
    \u0275\u0275template(23, UserAddComponent_div_0_div_23_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 11)(25, "label", 12);
    \u0275\u0275text(26, "Email ");
    \u0275\u0275elementStart(27, "span", 13);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(29, "input", 17);
    \u0275\u0275template(30, UserAddComponent_div_0_div_30_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 11)(32, "label", 12);
    \u0275\u0275text(33, "Num\xE9ro");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 11)(36, "label", 12);
    \u0275\u0275text(37, "Fonction");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 11)(40, "label", 12);
    \u0275\u0275text(41, "R\xF4le ");
    \u0275\u0275elementStart(42, "span", 13);
    \u0275\u0275text(43, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "select", 20)(45, "option", 21);
    \u0275\u0275text(46, "S\xE9lectionner un r\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, UserAddComponent_div_0_option_47_Template, 2, 2, "option", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, UserAddComponent_div_0_div_48_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 11)(50, "label", 12);
    \u0275\u0275text(51, "Statut ");
    \u0275\u0275elementStart(52, "span", 13);
    \u0275\u0275text(53, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "select", 23)(55, "option", 24);
    \u0275\u0275text(56, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "option", 25);
    \u0275\u0275text(58, "Inactif");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 26)(60, "label", 12);
    \u0275\u0275text(61, "Entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "select", 27)(63, "option", 21);
    \u0275\u0275text(64, "Aucune");
    \u0275\u0275elementEnd();
    \u0275\u0275template(65, UserAddComponent_div_0_option_65_Template, 2, 2, "option", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(66, UserAddComponent_div_0_div_66_Template, 4, 5, "div", 28)(67, UserAddComponent_div_0_div_67_Template, 6, 3, "div", 29)(68, UserAddComponent_div_0_div_68_Template, 6, 3, "div", 29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(69, UserAddComponent_div_0_div_69_Template, 4, 1, "div", 30);
    \u0275\u0275elementStart(70, "div", 31)(71, "button", 32);
    \u0275\u0275listener("click", function UserAddComponent_div_0_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideDialog());
    });
    \u0275\u0275element(72, "i", 33);
    \u0275\u0275text(73, "Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "button", 34);
    \u0275\u0275listener("click", function UserAddComponent_div_0_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveUser());
    });
    \u0275\u0275template(75, UserAddComponent_div_0_span_75_Template, 1, 0, "span", 35)(76, UserAddComponent_div_0_i_76_Template, 1, 0, "i", 36);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r1.visible);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "Modifier l'Utilisateur" : "Ajouter un Utilisateur");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.userForm);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r1.userForm.get("nom")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.userForm.get("nom")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.userForm.get("prenom")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.userForm.get("prenom")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r1.userForm.get("email")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.userForm.get("email")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.roles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx_r1.userForm.get("role_id")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.userForm.get("role_id")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.companies);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showPasswordFields);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showPasswordFields);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Mettre \xE0 jour" : "Enregistrer", " ");
  }
}
function UserAddComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 50);
  }
}
var UserAddComponent = class _UserAddComponent {
  fb;
  userService;
  clientCompanyService;
  visible = false;
  isEditMode = false;
  userData = null;
  onClose = new EventEmitter();
  onSave = new EventEmitter();
  userForm;
  loading = false;
  errorMessage = "";
  clients = [];
  companies = [];
  roles = [];
  showPasswordFields = false;
  constructor(fb, userService, clientCompanyService) {
    this.fb = fb;
    this.userService = userService;
    this.clientCompanyService = clientCompanyService;
  }
  ngOnInit() {
    this.initForm();
    this.loadClients();
    this.loadCompanies();
    this.loadRoles();
  }
  loadRoles() {
    this.userService.getRoles().subscribe({
      next: (response) => {
        if (Array.isArray(response))
          this.roles = response;
        else if (response?.data)
          this.roles = response.data;
        else if (response?.roles)
          this.roles = response.roles;
        else
          this.roles = [];
      },
      error: () => {
        this.roles = [
          { id: 1, name: "Super Admin" },
          { id: 2, name: "Employ\xE9" },
          { id: 3, name: "Formateur" },
          { id: 4, name: "Responsable RH" },
          { id: 5, name: "Responsable RH Groupe" }
        ];
      }
    });
  }
  ngOnChanges() {
    this.errorMessage = "";
    if (this.visible && this.userData && this.isEditMode) {
      this.showPasswordFields = false;
      this.initForm();
      this.populateForm();
    } else if (this.visible && !this.isEditMode) {
      this.showPasswordFields = true;
      this.initForm();
      this.resetForm();
    }
  }
  initForm() {
    const pwValidators = !this.isEditMode ? [Validators.required, Validators.minLength(8)] : [];
    this.userForm = this.fb.group({
      nom: ["", [Validators.required, Validators.minLength(2)]],
      prenom: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      numero: [""],
      matricule: [""],
      direction: [""],
      fonction: [""],
      role_id: ["", Validators.required],
      entreprise_id: [""],
      statut: [1, Validators.required],
      password: ["", pwValidators],
      password_confirmation: ["", pwValidators]
    });
    this.userForm.addValidators(this.passwordMatchValidator);
  }
  passwordMatchValidator(control) {
    const pw = control.get("password")?.value;
    const pwc = control.get("password_confirmation")?.value;
    if (!pw && !pwc)
      return null;
    return pw === pwc ? null : { passwordMismatch: true };
  }
  togglePasswordFields() {
    this.showPasswordFields = !this.showPasswordFields;
    const pwValidators = this.showPasswordFields ? [Validators.required, Validators.minLength(8)] : [];
    this.userForm.get("password")?.setValidators(pwValidators);
    this.userForm.get("password_confirmation")?.setValidators(pwValidators);
    this.userForm.get("password")?.updateValueAndValidity();
    this.userForm.get("password_confirmation")?.updateValueAndValidity();
    this.userForm.updateValueAndValidity();
    if (!this.showPasswordFields) {
      this.userForm.patchValue({ password: "", password_confirmation: "" });
    }
  }
  loadClients() {
    this.clientCompanyService.getClients().subscribe({
      next: (response) => {
        this.clients = response.clients || response.data || [];
      },
      error: () => {
      }
    });
  }
  loadCompanies() {
    this.clientCompanyService.getCompanies().subscribe({
      next: (response) => {
        this.companies = response.entreprises || response.data || [];
      },
      error: () => {
      }
    });
  }
  populateForm() {
    if (!this.userData)
      return;
    const rawRoleId = this.userData.role ? typeof this.userData.role === "object" ? this.userData.role.id : this.userData.role_id : this.userData.role_id;
    this.userForm.patchValue({
      nom: this.userData.nom || "",
      prenom: this.userData.prenom || "",
      email: this.userData.email || "",
      numero: this.userData.numero || "",
      matricule: this.userData.matricule || "",
      direction: this.userData.direction || "",
      fonction: this.userData.fonction || "",
      role_id: rawRoleId ? String(rawRoleId) : "",
      entreprise_id: this.userData.entreprise_id || "",
      statut: this.userData.statut
    });
  }
  resetForm() {
    this.userForm.reset({ statut: 1 });
  }
  saveUser() {
    this.errorMessage = "";
    if (this.userForm.invalid) {
      Object.keys(this.userForm.controls).forEach((key) => {
        this.userForm.get(key)?.markAsTouched();
      });
      if (this.userForm.hasError("passwordMismatch")) {
        this.errorMessage = "Les mots de passe ne correspondent pas.";
      } else {
        const missing = [];
        if (this.userForm.get("nom")?.invalid)
          missing.push("Nom");
        if (this.userForm.get("prenom")?.invalid)
          missing.push("Pr\xE9nom");
        if (this.userForm.get("email")?.invalid)
          missing.push("Email valide");
        if (this.userForm.get("role_id")?.invalid)
          missing.push("R\xF4le");
        if (this.userForm.get("password")?.invalid)
          missing.push("Mot de passe (min. 8 caract\xE8res)");
        this.errorMessage = missing.length ? `Champs obligatoires manquants : ${missing.join(", ")}` : "Veuillez corriger les erreurs dans le formulaire.";
      }
      return;
    }
    this.loading = true;
    const formData = __spreadValues({}, this.userForm.value);
    if (formData.role_id)
      formData.role_id = parseInt(formData.role_id);
    if (formData.statut !== void 0)
      formData.statut = parseInt(formData.statut);
    if (formData.entreprise_id)
      formData.entreprise_id = parseInt(formData.entreprise_id);
    else
      delete formData.entreprise_id;
    formData.created_by = 1;
    if (this.isEditMode && this.userData) {
      if (!formData.password) {
        delete formData.password;
        delete formData.password_confirmation;
      }
      this.userService.updateUser(this.userData.id, formData).subscribe({
        next: () => {
          this.loading = false;
          this.onSave.emit();
          this.hideDialog();
        },
        error: (error) => {
          this.errorMessage = this.parseApiError(error);
          this.loading = false;
        }
      });
    } else {
      this.userService.createUser(formData).subscribe({
        next: () => {
          this.loading = false;
          this.onSave.emit();
          this.hideDialog();
        },
        error: (error) => {
          this.errorMessage = this.parseApiError(error);
          this.loading = false;
        }
      });
    }
  }
  parseApiError(error) {
    const errs = error?.error?.errors;
    if (errs) {
      const labels = {
        email: "Email",
        numero: "Num\xE9ro de t\xE9l\xE9phone",
        matricule: "Matricule"
      };
      const messages = [];
      for (const [field, fieldErrors] of Object.entries(errs)) {
        const label = labels[field] || field;
        const arr = Array.isArray(fieldErrors) ? fieldErrors : [fieldErrors];
        for (const msg of arr) {
          const isDuplicate = msg.toLowerCase().includes("has already been taken") || msg.toLowerCase().includes("unique");
          messages.push(isDuplicate ? `${label} d\xE9j\xE0 utilis\xE9 dans le syst\xE8me` : `${label} : ${msg}`);
        }
      }
      if (messages.length)
        return messages.join(" \xB7 ");
    }
    return error?.error?.message || "Erreur lors de l'enregistrement.";
  }
  hideDialog() {
    this.resetForm();
    this.onClose.emit();
  }
  static \u0275fac = function UserAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserAddComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ClientCompanyService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAddComponent, selectors: [["app-user-add"]], inputs: { visible: "visible", isEditMode: "isEditMode", userData: "userData" }, outputs: { onClose: "onClose", onSave: "onSave" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 2, consts: [["class", "modal fade show d-block", "tabindex", "-1", "role", "dialog", 3, "show", 4, "ngIf"], ["class", "modal-backdrop fade show", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "d-block"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "row"], [1, "col-md-6", "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "nom", 1, "form-control"], ["class", "text-danger mt-1", 4, "ngIf"], ["type", "text", "formControlName", "prenom", 1, "form-control"], ["type", "email", "formControlName", "email", 1, "form-control"], ["type", "text", "formControlName", "numero", 1, "form-control"], ["type", "text", "formControlName", "fonction", 1, "form-control"], ["formControlName", "role_id", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "statut", 1, "form-select"], ["value", "1"], ["value", "0"], [1, "col-md-12", "mb-3"], ["formControlName", "entreprise_id", 1, "form-select"], ["class", "col-md-12 mb-2", 4, "ngIf"], ["class", "col-md-6 mb-3", 4, "ngIf"], ["class", "mx-3 mb-2 alert alert-danger alert-dismissible py-2", "role", "alert", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "isax", "isax-close-circle", "me-1"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "isax isax-tick-circle me-1", 4, "ngIf"], [1, "text-danger", "mt-1"], [3, "value"], [1, "col-md-12", "mb-2"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "isax", "me-1"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "placeholder"], ["type", "password", "formControlName", "password_confirmation", 1, "form-control", 3, "placeholder"], ["role", "alert", 1, "mx-3", "mb-2", "alert", "alert-danger", "alert-dismissible", "py-2"], [1, "isax", "isax-warning-2", "me-2"], ["type", "button", 1, "btn-close", "btn-close-sm", 3, "click"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "isax", "isax-tick-circle", "me-1"], [1, "modal-backdrop", "fade", "show"]], template: function UserAddComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, UserAddComponent_div_0_Template, 78, 19, "div", 0)(1, UserAddComponent_div_1_Template, 1, 0, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.visible);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.visible);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAddComponent, [{
    type: Component,
    args: [{ selector: "app-user-add", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule], template: `<div class="modal fade show d-block" [class.show]="visible" *ngIf="visible" tabindex="-1" role="dialog">\r
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5 class="modal-title">{{ isEditMode ? 'Modifier l\\'Utilisateur' : 'Ajouter un Utilisateur' }}</h5>\r
                <button type="button" class="btn-close" (click)="hideDialog()"></button>\r
            </div>\r
            <div class="modal-body">\r
                <form [formGroup]="userForm">\r
                    <div class="row">\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Nom <span class="text-danger">*</span></label>\r
                            <input type="text" class="form-control" formControlName="nom">\r
                            <div *ngIf="userForm.get('nom')?.invalid && userForm.get('nom')?.touched" class="text-danger mt-1">\r
                                <small>Le nom est requis (min. 2 caract\xE8res)</small>\r
                            </div>\r
                        </div>\r
\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Pr\xE9nom <span class="text-danger">*</span></label>\r
                            <input type="text" class="form-control" formControlName="prenom">\r
                            <div *ngIf="userForm.get('prenom')?.invalid && userForm.get('prenom')?.touched" class="text-danger mt-1">\r
                                <small>Le pr\xE9nom est requis (min. 2 caract\xE8res)</small>\r
                            </div>\r
                        </div>\r
\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Email <span class="text-danger">*</span></label>\r
                            <input type="email" class="form-control" formControlName="email">\r
                            <div *ngIf="userForm.get('email')?.invalid && userForm.get('email')?.touched" class="text-danger mt-1">\r
                                <small>Email valide requis</small>\r
                            </div>\r
                        </div>\r
\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Num\xE9ro</label>\r
                            <input type="text" class="form-control" formControlName="numero">\r
                        </div>\r
\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Fonction</label>\r
                            <input type="text" class="form-control" formControlName="fonction">\r
                        </div>\r
\r
                        <div class="col-md-6 mb-3">\r
                                <label class="form-label">R\xF4le <span class="text-danger">*</span></label>\r
                                <select class="form-select" formControlName="role_id">\r
                                    <option value="">S\xE9lectionner un r\xF4le</option>\r
                                    <option *ngFor="let role of roles" [value]="role.id">{{ role.name }}</option>\r
                                </select>\r
                                <div *ngIf="userForm.get('role_id')?.invalid && userForm.get('role_id')?.touched" class="text-danger mt-1">\r
                                    <small>Le r\xF4le est requis</small>\r
                                </div>\r
                            </div>\r
\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Statut <span class="text-danger">*</span></label>\r
                            <select class="form-select" formControlName="statut">\r
                                <option value="1">Actif</option>\r
                                <option value="0">Inactif</option>\r
                            </select>\r
                        </div>\r
\r
                        <div class="col-md-12 mb-3">\r
                            <label class="form-label">Entreprise</label>\r
                            <select class="form-select" formControlName="entreprise_id">\r
                                <option value="">Aucune</option>\r
                                <option *ngFor="let company of companies" [value]="company.id">{{company.nom}}</option>\r
                            </select>\r
                        </div>\r
\r
                        <!-- Toggle modifier le mot de passe (mode \xE9dition) -->\r
                        <div class="col-md-12 mb-2" *ngIf="isEditMode">\r
                            <button type="button" class="btn btn-outline-secondary btn-sm"\r
                                    (click)="togglePasswordFields()">\r
                                <i class="isax me-1" [class.isax-lock]="!showPasswordFields" [class.isax-lock-slash]="showPasswordFields"></i>\r
                                {{ showPasswordFields ? 'Annuler le changement de mot de passe' : 'Modifier le mot de passe' }}\r
                            </button>\r
                        </div>\r
\r
                        <div class="col-md-6 mb-3" *ngIf="showPasswordFields">\r
                            <label class="form-label">Mot de passe <span *ngIf="!isEditMode" class="text-danger">*</span></label>\r
                            <input type="password" class="form-control" formControlName="password"\r
                                   [placeholder]="isEditMode ? 'Nouveau mot de passe' : ''">\r
                            <div *ngIf="userForm.get('password')?.invalid && userForm.get('password')?.touched" class="text-danger mt-1">\r
                                <small>Mot de passe requis (min. 8 caract\xE8res)</small>\r
                            </div>\r
                        </div>\r
\r
                        <div class="col-md-6 mb-3" *ngIf="showPasswordFields">\r
                            <label class="form-label">Confirmer le mot de passe <span *ngIf="!isEditMode" class="text-danger">*</span></label>\r
                            <input type="password" class="form-control" formControlName="password_confirmation"\r
                                   [placeholder]="isEditMode ? 'Confirmer le nouveau mot de passe' : ''">\r
                            <div *ngIf="userForm.get('password_confirmation')?.invalid && userForm.get('password_confirmation')?.touched" class="text-danger mt-1">\r
                                <small>Confirmation du mot de passe requise</small>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </form>\r
            </div>\r
            <div *ngIf="errorMessage" class="mx-3 mb-2 alert alert-danger alert-dismissible py-2" role="alert">\r
                <i class="isax isax-warning-2 me-2"></i>{{ errorMessage }}\r
                <button type="button" class="btn-close btn-close-sm" (click)="errorMessage = ''"></button>\r
            </div>\r
                <div class="modal-footer">\r
                    <button type="button" class="btn btn-secondary" (click)="hideDialog()" [disabled]="loading">\r
                        <i class="isax isax-close-circle me-1"></i>Annuler\r
                    </button>\r
                    <button type="button" class="btn btn-primary" (click)="saveUser()" [disabled]="loading">\r
                        <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>\r
                        <i *ngIf="!loading" class="isax isax-tick-circle me-1"></i>\r
                        {{ isEditMode ? 'Mettre \xE0 jour' : 'Enregistrer' }}\r
                    </button>\r
                </div>\r
        </div>\r
    </div>\r
</div>\r
<div class="modal-backdrop fade show" *ngIf="visible"></div>` }]
  }], () => [{ type: FormBuilder }, { type: UserService }, { type: ClientCompanyService }], { visible: [{
    type: Input
  }], isEditMode: [{
    type: Input
  }], userData: [{
    type: Input
  }], onClose: [{
    type: Output
  }], onSave: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAddComponent, { className: "UserAddComponent", filePath: "app/features/superadmin/user-add/user-add.component.ts", lineNumber: 16 });
})();

export {
  UserAddComponent
};
//# sourceMappingURL=chunk-SJHS3KKU.js.map
