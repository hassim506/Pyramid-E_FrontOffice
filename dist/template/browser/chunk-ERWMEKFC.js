import {
  UserService
} from "./chunk-DWVCBWMM.js";
import {
  ClientCompanyService
} from "./chunk-TD3GONRB.js";
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
} from "./chunk-YMJPU2MG.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-GWJREDC5.js";
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-2JCHGHJA.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/superadmin/user-add/user-add.component.ts
function UserAddComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "small");
    \u0275\u0275text(2, "Le nom est requis (min. 2 caract\xE8res)");
    \u0275\u0275elementEnd()();
  }
}
function UserAddComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "small");
    \u0275\u0275text(2, "Le pr\xE9nom est requis (min. 2 caract\xE8res)");
    \u0275\u0275elementEnd()();
  }
}
function UserAddComponent_div_0_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "small");
    \u0275\u0275text(2, "Email valide requis");
    \u0275\u0275elementEnd()();
  }
}
function UserAddComponent_div_0_option_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 35);
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
    \u0275\u0275elementStart(0, "div", 34)(1, "small");
    \u0275\u0275text(2, "Le r\xF4le est requis");
    \u0275\u0275elementEnd()();
  }
}
function UserAddComponent_div_0_option_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 35);
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
function UserAddComponent_div_0_div_66_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "small");
    \u0275\u0275text(2, "Mot de passe requis (min. 8 caract\xE8res)");
    \u0275\u0275elementEnd()();
  }
}
function UserAddComponent_div_0_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 12);
    \u0275\u0275text(2, "Mot de passe ");
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 36);
    \u0275\u0275template(6, UserAddComponent_div_0_div_66_div_6_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.userForm.get("password")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.userForm.get("password")) == null ? null : tmp_2_0.touched));
  }
}
function UserAddComponent_div_0_div_67_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "small");
    \u0275\u0275text(2, "Confirmation du mot de passe requise");
    \u0275\u0275elementEnd()();
  }
}
function UserAddComponent_div_0_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 12);
    \u0275\u0275text(2, "Confirmer le mot de passe ");
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 37);
    \u0275\u0275template(6, UserAddComponent_div_0_div_67_div_6_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.userForm.get("password_confirmation")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.userForm.get("password_confirmation")) == null ? null : tmp_2_0.touched));
  }
}
function UserAddComponent_div_0_span_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 38);
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
    \u0275\u0275template(66, UserAddComponent_div_0_div_66_Template, 7, 1, "div", 28)(67, UserAddComponent_div_0_div_67_Template, 7, 1, "div", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 29)(69, "small", 30);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "button", 31);
    \u0275\u0275listener("click", function UserAddComponent_div_0_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideDialog());
    });
    \u0275\u0275text(72, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "button", 32);
    \u0275\u0275listener("click", function UserAddComponent_div_0_Template_button_click_73_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveUser());
    });
    \u0275\u0275template(74, UserAddComponent_div_0_span_74_Template, 1, 0, "span", 33);
    \u0275\u0275text(75);
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
    \u0275\u0275property("ngIf", !ctx_r1.isEditMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEditMode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" Mode: ", ctx_r1.isEditMode ? "\xC9dition" : "Cr\xE9ation", " | Formulaire valide: ", ctx_r1.userForm.valid, " | Loading: ", ctx_r1.loading, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.userForm.valid || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Mettre \xE0 jour" : "Cr\xE9er", " ");
  }
}
function UserAddComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 39);
  }
}
var UserAddComponent = class _UserAddComponent {
  fb;
  userService;
  roleService;
  clientCompanyService;
  visible = false;
  isEditMode = false;
  userData = null;
  onClose = new EventEmitter();
  onSave = new EventEmitter();
  userForm;
  loading = false;
  clients = [];
  companies = [];
  roles = [];
  constructor(fb, userService, roleService, clientCompanyService) {
    this.fb = fb;
    this.userService = userService;
    this.roleService = roleService;
    this.clientCompanyService = clientCompanyService;
  }
  ngOnInit() {
    this.initForm();
    this.loadClients();
    this.loadCompanies();
    this.loadRoles();
  }
  loadRoles() {
    console.log("Chargement des r\xF4les...");
    this.userService.getRoles().subscribe({
      next: (response) => {
        console.log("R\xE9ponse API roles:", response);
        if (Array.isArray(response)) {
          this.roles = response;
        } else if (response && Array.isArray(response.data)) {
          this.roles = response.data;
        } else if (response && Array.isArray(response.roles)) {
          this.roles = response.roles;
        } else if (response && typeof response === "object") {
          this.roles = Object.values(response);
        } else {
          console.error("Format de r\xE9ponse inattendu pour les r\xF4les:", response);
          this.roles = [];
        }
        console.log("R\xF4les finaux assign\xE9s:", this.roles);
      },
      error: (error) => {
        console.error("Erreur chargement r\xF4les:", error);
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
    if (this.userData && this.isEditMode) {
      this.initForm();
      const roleId = this.userData.role ? typeof this.userData.role === "object" ? this.userData.role.id : this.userData.role_id : this.userData.role_id;
      this.userForm.patchValue({
        nom: this.userData.nom || "",
        prenom: this.userData.prenom || "",
        email: this.userData.email || "",
        numero: this.userData.numero || "",
        fonction: this.userData.fonction || "",
        role_id: roleId,
        statut: this.userData.statut,
        entreprise_id: this.userData.entreprise_id || ""
      });
      console.log("Mode \xE9dition - Formulaire valide:", this.userForm.valid);
      console.log("Erreurs du formulaire:", this.userForm.errors);
      console.log("Statut des champs:", Object.keys(this.userForm.controls).map((key) => ({
        field: key,
        value: this.userForm.get(key)?.value,
        valid: this.userForm.get(key)?.valid,
        errors: this.userForm.get(key)?.errors
      })));
    } else if (!this.isEditMode) {
      this.initForm();
    }
  }
  initForm() {
    const passwordValidators = this.isEditMode ? [] : [Validators.required, Validators.minLength(8)];
    this.userForm = this.fb.group({
      nom: ["", [Validators.required, Validators.minLength(2)]],
      prenom: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      numero: [""],
      fonction: [""],
      role_id: ["", Validators.required],
      entreprise_id: [""],
      statut: [1, Validators.required],
      password: ["", passwordValidators],
      password_confirmation: ["", passwordValidators]
    });
  }
  // Ajoutez cette méthode pour debug
  isFormValid() {
    const isValid = this.userForm.valid;
    console.log("Formulaire valide:", isValid);
    if (!isValid) {
      console.log("Champs invalides:", Object.keys(this.userForm.controls).filter((key) => this.userForm.get(key)?.invalid).map((key) => ({
        field: key,
        errors: this.userForm.get(key)?.errors,
        value: this.userForm.get(key)?.value
      })));
    }
    return isValid;
  }
  getRoleName(user) {
    if (!user || !user.role)
      return "";
    if (typeof user.role === "object" && user.role.name)
      return user.role.name;
    if (typeof user.role === "string")
      return user.role;
    return "";
  }
  loadClients() {
    this.clientCompanyService.getClients().subscribe({
      next: (response) => {
        this.clients = response.clients || response.data || [];
      },
      error: (error) => console.error("Erreur chargement clients:", error)
    });
  }
  loadCompanies() {
    this.clientCompanyService.getCompanies().subscribe({
      next: (response) => {
        this.companies = response.entreprises || response.data || [];
      },
      error: (error) => console.error("Erreur chargement entreprises:", error)
    });
  }
  populateForm() {
    if (this.userData) {
      this.userForm.patchValue({
        nom: this.userData.nom,
        prenom: this.userData.prenom,
        email: this.userData.email,
        numero: this.userData.numero,
        fonction: this.userData.fonction,
        role_id: this.userData.role,
        entreprise_id: this.userData.entreprise_id,
        statut: this.userData.statut
      });
    }
  }
  resetForm() {
    this.userForm.reset({ statut: 1 });
  }
  saveUser() {
    if (this.userForm.invalid) {
      Object.keys(this.userForm.controls).forEach((key) => {
        this.userForm.get(key)?.markAsTouched();
      });
      return;
    }
    this.loading = true;
    const formData = __spreadValues({}, this.userForm.value);
    if (formData.role_id) {
      formData.role_id = parseInt(formData.role_id);
    }
    if (formData.statut !== void 0 && formData.statut !== "") {
      formData.statut = parseInt(formData.statut);
    }
    if (formData.entreprise_id) {
      formData.entreprise_id = parseInt(formData.entreprise_id);
    } else {
      delete formData.entreprise_id;
    }
    formData.created_by = 1;
    console.log("===== DONN\xC9ES ENVOY\xC9ES =====");
    console.log(JSON.stringify(formData, null, 2));
    console.log("============================");
    if (this.isEditMode && this.userData) {
      if (!formData.password) {
        delete formData.password;
        delete formData.password_confirmation;
      }
      this.userService.updateUser(this.userData.id, formData).subscribe({
        next: (response) => {
          console.log("Utilisateur mis \xE0 jour:", response);
          this.loading = false;
          this.onSave.emit();
          this.hideDialog();
        },
        error: (error) => {
          console.error("===== ERREUR COMPL\xC8TE =====");
          console.error("Status:", error.status);
          console.error("Error object:", error);
          console.error("Error.error:", error.error);
          console.error("Error.error.errors:", error.error?.errors);
          console.error("Error.error.message:", error.error?.message);
          console.error("============================");
          let errorMessage = "Erreur lors de la mise \xE0 jour";
          if (error.error?.errors) {
            errorMessage = Object.values(error.error.errors).flat().join("\n");
          } else if (error.error?.message) {
            errorMessage = error.error.message;
          }
          alert(errorMessage);
          this.loading = false;
        }
      });
    } else {
      this.userService.createUser(formData).subscribe({
        next: (response) => {
          console.log("Utilisateur cr\xE9\xE9:", response);
          this.loading = false;
          this.onSave.emit();
          this.hideDialog();
        },
        error: (error) => {
          console.error("===== ERREUR COMPL\xC8TE =====");
          console.error("Status:", error.status);
          console.error("Error object:", error);
          console.error("Error.error:", error.error);
          console.error("Error.error.errors:", error.error?.errors);
          console.error("Error.error.message:", error.error?.message);
          console.error("============================");
          let errorMessage = "Erreur lors de la cr\xE9ation";
          if (error.error?.errors) {
            errorMessage = Object.values(error.error.errors).flat().join("\n");
          } else if (error.error?.message) {
            errorMessage = error.error.message;
          }
          alert(errorMessage);
          this.loading = false;
        }
      });
    }
  }
  hideDialog() {
    this.resetForm();
    this.onClose.emit();
  }
  static \u0275fac = function UserAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserAddComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ClientCompanyService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAddComponent, selectors: [["app-user-add"]], inputs: { visible: "visible", isEditMode: "isEditMode", userData: "userData" }, outputs: { onClose: "onClose", onSave: "onSave" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 2, consts: [["class", "modal fade show d-block", "tabindex", "-1", "role", "dialog", 3, "show", 4, "ngIf"], ["class", "modal-backdrop fade show", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "d-block"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "row"], [1, "col-md-6", "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "nom", 1, "form-control"], ["class", "text-danger mt-1", 4, "ngIf"], ["type", "text", "formControlName", "prenom", 1, "form-control"], ["type", "email", "formControlName", "email", 1, "form-control"], ["type", "text", "formControlName", "numero", 1, "form-control"], ["type", "text", "formControlName", "fonction", 1, "form-control"], ["formControlName", "role_id", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "statut", 1, "form-select"], ["value", "1"], ["value", "0"], [1, "col-md-12", "mb-3"], ["formControlName", "entreprise_id", 1, "form-select"], ["class", "col-md-6 mb-3", 4, "ngIf"], [1, "modal-footer"], [1, "text-muted", "me-auto"], ["type", "button", 1, "btn", "btn-secondary", "me-2", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "text-danger", "mt-1"], [3, "value"], ["type", "password", "formControlName", "password", 1, "form-control"], ["type", "password", "formControlName", "password_confirmation", 1, "form-control"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "modal-backdrop", "fade", "show"]], template: function UserAddComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, UserAddComponent_div_0_Template, 76, 19, "div", 0)(1, UserAddComponent_div_1_Template, 1, 0, "div", 1);
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
                        <div class="col-md-6 mb-3" *ngIf="!isEditMode">\r
                            <label class="form-label">Mot de passe <span class="text-danger">*</span></label>\r
                            <input type="password" class="form-control" formControlName="password">\r
                            <div *ngIf="userForm.get('password')?.invalid && userForm.get('password')?.touched" class="text-danger mt-1">\r
                                <small>Mot de passe requis (min. 8 caract\xE8res)</small>\r
                            </div>\r
                        </div>\r
\r
                        <div class="col-md-6 mb-3" *ngIf="!isEditMode">\r
                            <label class="form-label">Confirmer le mot de passe <span class="text-danger">*</span></label>\r
                            <input type="password" class="form-control" formControlName="password_confirmation">\r
                            <div *ngIf="userForm.get('password_confirmation')?.invalid && userForm.get('password_confirmation')?.touched" class="text-danger mt-1">\r
                                <small>Confirmation du mot de passe requise</small>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </form>\r
            </div>\r
                <div class="modal-footer">\r
  <!-- Debug info - \xE0 supprimer apr\xE8s r\xE9solution -->\r
  <small class="text-muted me-auto">\r
    Mode: {{isEditMode ? '\xC9dition' : 'Cr\xE9ation'}} | \r
    Formulaire valide: {{userForm.valid}} | \r
    Loading: {{loading}}\r
  </small>\r
  \r
  <button type="button" class="btn btn-secondary me-2" (click)="hideDialog()" [disabled]="loading">\r
    Annuler\r
  </button>\r
  \r
  <button \r
    type="button" \r
    class="btn btn-primary" \r
    (click)="saveUser()" \r
    [disabled]="!userForm.valid || loading">\r
    <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>\r
    {{isEditMode ? 'Mettre \xE0 jour' : 'Cr\xE9er'}}\r
  </button>\r
</div>\r
            <!-- <div class="modal-footer">\r
                <button type="button" class="btn btn-secondary" (click)="hideDialog()">\r
                    <i class="isax isax-close-circle me-1"></i>Annuler\r
                </button>\r
                <button type="button" class="btn btn-primary" (click)="saveUser()" [disabled]="!userForm.valid || loading">\r
                    <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>\r
                    <i *ngIf="!loading" class="isax isax-tick-circle me-1"></i>\r
                    {{ isEditMode ? 'Mettre \xE0 jour' : 'Enregistrer' }}\r
                </button>\r
            </div> -->\r
        </div>\r
    </div>\r
</div>\r
<div class="modal-backdrop fade show" *ngIf="visible"></div>` }]
  }], () => [{ type: FormBuilder }, { type: UserService }, { type: UserService }, { type: ClientCompanyService }], { visible: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAddComponent, { className: "UserAddComponent", filePath: "src/app/features/superadmin/user-add/user-add.component.ts", lineNumber: 17 });
})();

export {
  UserAddComponent
};
//# sourceMappingURL=chunk-ERWMEKFC.js.map
