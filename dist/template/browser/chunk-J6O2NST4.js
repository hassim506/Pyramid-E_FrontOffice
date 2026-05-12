import {
  UserService
} from "./chunk-SXUTTUO5.js";
import {
  ClientCompanyService
} from "./chunk-S72XEEG7.js";
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
} from "./chunk-AK2M3J6O.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-3IMMP55I.js";
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
} from "./chunk-UPBSS6WA.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/adminrh/user-add/user-add.component.ts
function UserAddComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "small");
    \u0275\u0275text(2, "Le nom est requis (min. 2 caract\xE8res)");
    \u0275\u0275elementEnd()();
  }
}
function UserAddComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "small");
    \u0275\u0275text(2, "Le pr\xE9nom est requis (min. 2 caract\xE8res)");
    \u0275\u0275elementEnd()();
  }
}
function UserAddComponent_div_0_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "small");
    \u0275\u0275text(2, "Email valide requis");
    \u0275\u0275elementEnd()();
  }
}
function UserAddComponent_div_0_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "small");
    \u0275\u0275text(2, "Le r\xF4le est requis");
    \u0275\u0275elementEnd()();
  }
}
function UserAddComponent_div_0_option_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const company_r3 = ctx.$implicit;
    \u0275\u0275property("value", company_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(company_r3.nom);
  }
}
function UserAddComponent_div_0_div_75_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "small");
    \u0275\u0275text(2, "Mot de passe requis (min. 8 caract\xE8res)");
    \u0275\u0275elementEnd()();
  }
}
function UserAddComponent_div_0_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 12);
    \u0275\u0275text(2, "Mot de passe ");
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 41);
    \u0275\u0275template(6, UserAddComponent_div_0_div_75_div_6_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.userForm.get("password")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.userForm.get("password")) == null ? null : tmp_2_0.touched));
  }
}
function UserAddComponent_div_0_div_76_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "small");
    \u0275\u0275text(2, "Confirmation du mot de passe requise");
    \u0275\u0275elementEnd()();
  }
}
function UserAddComponent_div_0_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 12);
    \u0275\u0275text(2, "Confirmer le mot de passe ");
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 42);
    \u0275\u0275template(6, UserAddComponent_div_0_div_76_div_6_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.userForm.get("password_confirmation")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.userForm.get("password_confirmation")) == null ? null : tmp_2_0.touched));
  }
}
function UserAddComponent_div_0_span_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 43);
  }
}
function UserAddComponent_div_0_i_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 44);
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
    \u0275\u0275elementStart(47, "option", 22);
    \u0275\u0275text(48, "Super Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option", 23);
    \u0275\u0275text(50, "Employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "option", 24);
    \u0275\u0275text(52, "Formateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "option", 25);
    \u0275\u0275text(54, "Responsable RH");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "option", 26);
    \u0275\u0275text(56, "Responsable RH Groupe");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(57, UserAddComponent_div_0_div_57_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 11)(59, "label", 12);
    \u0275\u0275text(60, "Statut ");
    \u0275\u0275elementStart(61, "span", 13);
    \u0275\u0275text(62, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "select", 27)(64, "option", 22);
    \u0275\u0275text(65, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "option", 28);
    \u0275\u0275text(67, "Inactif");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 29)(69, "label", 12);
    \u0275\u0275text(70, "Entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "select", 30)(72, "option", 21);
    \u0275\u0275text(73, "Aucune");
    \u0275\u0275elementEnd();
    \u0275\u0275template(74, UserAddComponent_div_0_option_74_Template, 2, 2, "option", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(75, UserAddComponent_div_0_div_75_Template, 7, 1, "div", 32)(76, UserAddComponent_div_0_div_76_Template, 7, 1, "div", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div", 33)(78, "button", 34);
    \u0275\u0275listener("click", function UserAddComponent_div_0_Template_button_click_78_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideDialog());
    });
    \u0275\u0275element(79, "i", 35);
    \u0275\u0275text(80, "Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "button", 36);
    \u0275\u0275listener("click", function UserAddComponent_div_0_Template_button_click_81_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveUser());
    });
    \u0275\u0275template(82, UserAddComponent_div_0_span_82_Template, 1, 0, "span", 37)(83, UserAddComponent_div_0_i_83_Template, 1, 0, "i", 38);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
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
    \u0275\u0275advance(27);
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.userForm.get("role_id")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.userForm.get("role_id")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.companies);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEditMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEditMode);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.userForm.valid || ctx_r1.loading);
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
    \u0275\u0275element(0, "div", 45);
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
  clients = [];
  companies = [];
  constructor(fb, userService, clientCompanyService) {
    this.fb = fb;
    this.userService = userService;
    this.clientCompanyService = clientCompanyService;
  }
  ngOnInit() {
    this.initForm();
    this.loadClients();
    this.loadCompanies();
  }
  ngOnChanges() {
    if (this.visible && this.userData && this.isEditMode) {
      this.populateForm();
    } else if (this.visible && !this.isEditMode) {
      this.resetForm();
    }
  }
  initForm() {
    this.userForm = this.fb.group({
      nom: ["", [Validators.required, Validators.minLength(2)]],
      prenom: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      numero: [""],
      fonction: [""],
      role_id: ["", Validators.required],
      entreprise_id: [""],
      statut: [1, Validators.required],
      password: ["", this.isEditMode ? [] : [Validators.required, Validators.minLength(8)]],
      password_confirmation: ["", this.isEditMode ? [] : [Validators.required, Validators.minLength(8)]]
    });
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
    this.clientCompanyService.getMyCompanies().subscribe({
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
    return new (__ngFactoryType__ || _UserAddComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ClientCompanyService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAddComponent, selectors: [["app-user-add"]], inputs: { visible: "visible", isEditMode: "isEditMode", userData: "userData" }, outputs: { onClose: "onClose", onSave: "onSave" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 2, consts: [["class", "modal fade show d-block", "tabindex", "-1", "role", "dialog", 3, "show", 4, "ngIf"], ["class", "modal-backdrop fade show", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "d-block"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "row"], [1, "col-md-6", "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "nom", 1, "form-control"], ["class", "text-danger mt-1", 4, "ngIf"], ["type", "text", "formControlName", "prenom", 1, "form-control"], ["type", "email", "formControlName", "email", 1, "form-control"], ["type", "text", "formControlName", "numero", 1, "form-control"], ["type", "text", "formControlName", "fonction", 1, "form-control"], ["formControlName", "role_id", 1, "form-select"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["formControlName", "statut", 1, "form-select"], ["value", "0"], [1, "col-md-12", "mb-3"], ["formControlName", "entreprise_id", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-md-6 mb-3", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "isax", "isax-close-circle", "me-1"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "isax isax-tick-circle me-1", 4, "ngIf"], [1, "text-danger", "mt-1"], [3, "value"], ["type", "password", "formControlName", "password", 1, "form-control"], ["type", "password", "formControlName", "password_confirmation", 1, "form-control"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "isax", "isax-tick-circle", "me-1"], [1, "modal-backdrop", "fade", "show"]], template: function UserAddComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, UserAddComponent_div_0_Template, 85, 15, "div", 0)(1, UserAddComponent_div_1_Template, 1, 0, "div", 1);
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
                                <option value="1">Super Admin</option>\r
                                <option value="2">Employ\xE9</option>\r
                                <option value="3">Formateur</option>\r
                                <option value="4">Responsable RH</option>\r
                                <option value="5">Responsable RH Groupe</option>\r
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
                <button type="button" class="btn btn-secondary" (click)="hideDialog()">\r
                    <i class="isax isax-close-circle me-1"></i>Annuler\r
                </button>\r
                <button type="button" class="btn btn-primary" (click)="saveUser()" [disabled]="!userForm.valid || loading">\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAddComponent, { className: "UserAddComponent", filePath: "src/app/features/adminrh/user-add/user-add.component.ts", lineNumber: 16 });
})();

export {
  UserAddComponent
};
//# sourceMappingURL=chunk-J6O2NST4.js.map
