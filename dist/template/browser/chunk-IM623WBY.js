import {
  UserService
} from "./chunk-OE6AEQ26.js";
import {
  ClientCompanyService
} from "./chunk-NAWDUVHO.js";
import {
  AuthService
} from "./chunk-SNOA42FF.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-45DOGZAU.js";
import {
  CommonModule,
  NgIf
} from "./chunk-MNWNTO2T.js";
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7XGB4BEQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/adminrh/company-add/company-add.component.ts
function CompanyAddComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "small");
    \u0275\u0275text(2, "Le nom est requis");
    \u0275\u0275elementEnd()();
  }
}
function CompanyAddComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "small");
    \u0275\u0275text(2, "Le NINEA est requis (14 chiffres)");
    \u0275\u0275elementEnd()();
  }
}
function CompanyAddComponent_div_0_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "small");
    \u0275\u0275text(2, "Email valide requis");
    \u0275\u0275elementEnd()();
  }
}
function CompanyAddComponent_div_0_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "small");
    \u0275\u0275text(2, "Le t\xE9l\xE9phone est requis");
    \u0275\u0275elementEnd()();
  }
}
function CompanyAddComponent_div_0_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "small");
    \u0275\u0275text(2, "L'adresse est requise");
    \u0275\u0275elementEnd()();
  }
}
function CompanyAddComponent_div_0_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "small");
    \u0275\u0275text(2, "Le secteur d'activit\xE9 est requis");
    \u0275\u0275elementEnd()();
  }
}
function CompanyAddComponent_div_0_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "small");
    \u0275\u0275text(2, "Le nombre d'employ\xE9s est requis");
    \u0275\u0275elementEnd()();
  }
}
function CompanyAddComponent_div_0_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentClient.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentClient.email);
  }
}
function CompanyAddComponent_div_0_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "Aucun client trouv\xE9 pour votre groupe");
    \u0275\u0275elementEnd();
  }
}
function CompanyAddComponent_div_0_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "small");
    \u0275\u0275text(2, "Le statut est requis");
    \u0275\u0275elementEnd()();
  }
}
function CompanyAddComponent_div_0_span_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 40);
  }
}
function CompanyAddComponent_div_0_i_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 41);
  }
}
function CompanyAddComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "h5", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 8);
    \u0275\u0275listener("click", function CompanyAddComponent_div_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideDialog());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 9)(8, "form", 10)(9, "div", 11)(10, "div", 12)(11, "label", 13);
    \u0275\u0275text(12, "Nom de l'entreprise ");
    \u0275\u0275elementStart(13, "span", 14);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 15);
    \u0275\u0275template(16, CompanyAddComponent_div_0_div_16_Template, 3, 0, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 12)(18, "label", 13);
    \u0275\u0275text(19, "NINEA ");
    \u0275\u0275elementStart(20, "span", 14);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "input", 17);
    \u0275\u0275template(23, CompanyAddComponent_div_0_div_23_Template, 3, 0, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 12)(25, "label", 13);
    \u0275\u0275text(26, "Email ");
    \u0275\u0275elementStart(27, "span", 14);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(29, "input", 18);
    \u0275\u0275template(30, CompanyAddComponent_div_0_div_30_Template, 3, 0, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 12)(32, "label", 13);
    \u0275\u0275text(33, "T\xE9l\xE9phone ");
    \u0275\u0275elementStart(34, "span", 14);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(36, "input", 19);
    \u0275\u0275template(37, CompanyAddComponent_div_0_div_37_Template, 3, 0, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 20)(39, "label", 13);
    \u0275\u0275text(40, "Adresse ");
    \u0275\u0275elementStart(41, "span", 14);
    \u0275\u0275text(42, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(43, "textarea", 21);
    \u0275\u0275template(44, CompanyAddComponent_div_0_div_44_Template, 3, 0, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 12)(46, "label", 13);
    \u0275\u0275text(47, "Secteur d'activit\xE9 ");
    \u0275\u0275elementStart(48, "span", 14);
    \u0275\u0275text(49, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(50, "input", 22);
    \u0275\u0275template(51, CompanyAddComponent_div_0_div_51_Template, 3, 0, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 12)(53, "label", 13);
    \u0275\u0275text(54, "Nombre d'employ\xE9s ");
    \u0275\u0275elementStart(55, "span", 14);
    \u0275\u0275text(56, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(57, "input", 23);
    \u0275\u0275template(58, CompanyAddComponent_div_0_div_58_Template, 3, 0, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 12)(60, "label", 13);
    \u0275\u0275text(61, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 24);
    \u0275\u0275template(63, CompanyAddComponent_div_0_div_63_Template, 5, 2, "div", 25)(64, CompanyAddComponent_div_0_ng_template_64_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 12)(67, "label", 13);
    \u0275\u0275text(68, "Statut ");
    \u0275\u0275elementStart(69, "span", 14);
    \u0275\u0275text(70, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "select", 26)(72, "option", 27);
    \u0275\u0275text(73, "S\xE9lectionner un statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "option", 28);
    \u0275\u0275text(75, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "option", 29);
    \u0275\u0275text(77, "Inactive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "option", 30);
    \u0275\u0275text(79, "Suspendue");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(80, CompanyAddComponent_div_0_div_80_Template, 3, 0, "div", 16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(81, "div", 31)(82, "button", 32);
    \u0275\u0275listener("click", function CompanyAddComponent_div_0_Template_button_click_82_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideDialog());
    });
    \u0275\u0275element(83, "i", 33);
    \u0275\u0275text(84, "Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "button", 34);
    \u0275\u0275listener("click", function CompanyAddComponent_div_0_Template_button_click_85_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCompany());
    });
    \u0275\u0275template(86, CompanyAddComponent_div_0_span_86_Template, 1, 0, "span", 35)(87, CompanyAddComponent_div_0_i_87_Template, 1, 0, "i", 36);
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_14_0;
    const noClient_r3 = \u0275\u0275reference(65);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r1.visible);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "Modifier l'Entreprise" : "Ajouter une Entreprise");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.companyForm);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.companyForm.get("nom")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.companyForm.get("nom")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r1.companyForm.get("ninea")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.companyForm.get("ninea")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.companyForm.get("email")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.companyForm.get("email")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx_r1.companyForm.get("telephone")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.companyForm.get("telephone")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.companyForm.get("adresse")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.companyForm.get("adresse")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_10_0 = ctx_r1.companyForm.get("secteur_activite")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.companyForm.get("secteur_activite")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r1.companyForm.get("taille_effectif")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r1.companyForm.get("taille_effectif")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.currentClient)("ngIfElse", noClient_r3);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngIf", ((tmp_14_0 = ctx_r1.companyForm.get("statut")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r1.companyForm.get("statut")) == null ? null : tmp_14_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.companyForm.valid || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Mettre \xE0 jour" : "Enregistrer", " ");
  }
}
function CompanyAddComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 42);
  }
}
var CompanyAddComponent = class _CompanyAddComponent {
  fb;
  clientCompanyService;
  authService;
  userService;
  visible = false;
  isEditMode = false;
  companyData = null;
  onClose = new EventEmitter();
  onSave = new EventEmitter();
  companyForm;
  loading = false;
  clients = [];
  currentClient = null;
  constructor(fb, clientCompanyService, authService, userService) {
    this.fb = fb;
    this.clientCompanyService = clientCompanyService;
    this.authService = authService;
    this.userService = userService;
  }
  ngOnInit() {
    this.initForm();
    this.loadClients();
  }
  ngOnChanges() {
    if (this.visible && this.companyData && this.isEditMode) {
      this.populateForm();
    } else if (this.visible && !this.isEditMode) {
      this.resetForm();
    }
  }
  initForm() {
    this.companyForm = this.fb.group({
      nom: ["", [Validators.required, Validators.minLength(3)]],
      ninea: ["", [Validators.required, Validators.pattern(/^\d{14}$/)]],
      email: ["", [Validators.required, Validators.email]],
      telephone: ["", Validators.required],
      adresse: ["", Validators.required],
      secteur_activite: ["", Validators.required],
      taille_effectif: ["", [Validators.required, Validators.min(1)]],
      // ✅ Retirer client_id du FormGroup car plus besoin d'input
      statut: ["active", Validators.required]
    });
  }
  loadClients() {
    const user = this.authService.getUser();
    const userGroupeId = user?.groupe_id;
    this.clientCompanyService.getClients().subscribe({
      next: (response) => {
        const allClients = response.clients || response.data || [];
        this.currentClient = allClients.find((c) => c.groupe_id === userGroupeId) || null;
        console.log("Client du groupe trouv\xE9:", this.currentClient);
      },
      error: (error) => {
        console.error("Erreur lors du chargement des clients:", error);
      }
    });
  }
  saveCompany() {
    if (this.companyForm.invalid) {
      Object.keys(this.companyForm.controls).forEach((key) => {
        this.companyForm.get(key)?.markAsTouched();
      });
      return;
    }
    this.loading = true;
    const formData = __spreadProps(__spreadValues({}, this.companyForm.value), {
      client_id: this.currentClient?.id
      // ✅ Ajouter automatiquement l'ID du client
    });
    if (this.isEditMode && this.companyData) {
      this.clientCompanyService.updateCompany(this.companyData.id, formData).subscribe({
        next: (response) => {
          console.log("Entreprise mise \xE0 jour avec succ\xE8s", response);
          this.loading = false;
          this.onSave.emit();
          this.hideDialog();
        },
        error: (error) => {
          console.error("Erreur lors de la mise \xE0 jour:", error);
          this.loading = false;
          alert("Erreur lors de la mise \xE0 jour de l'entreprise");
        }
      });
    } else {
      this.clientCompanyService.createMyCompany(formData).subscribe({
        next: (response) => {
          console.log("Entreprise cr\xE9\xE9e avec succ\xE8s", response);
          this.loading = false;
          this.onSave.emit();
          this.hideDialog();
        },
        error: (error) => {
          console.error("Erreur lors de la cr\xE9ation:", error);
          this.loading = false;
          alert("Erreur lors de la cr\xE9ation de l'entreprise");
        }
      });
    }
  }
  populateForm() {
    if (this.companyData) {
      this.companyForm.patchValue({
        nom: this.companyData.nom,
        ninea: this.companyData.ninea,
        email: this.companyData.email,
        telephone: this.companyData.telephone,
        adresse: this.companyData.adresse,
        secteur_activite: this.companyData.secteur_activite,
        taille_effectif: this.companyData.taille_effectif,
        client_id: this.companyData.client_id,
        statut: this.companyData.statut
      });
    }
  }
  resetForm() {
    this.companyForm.reset({
      statut: "active"
    });
  }
  // saveCompany() {
  //   if (this.companyForm.invalid) {
  //     Object.keys(this.companyForm.controls).forEach(key => {
  //       this.companyForm.get(key)?.markAsTouched();
  //     });
  //     return;
  //   }
  //   this.loading = true;
  //   const formData = this.companyForm.value;
  //   if (this.isEditMode && this.companyData) {
  //     // Mise à jour
  //     this.clientCompanyService.updateCompany(this.companyData.id, formData).subscribe({
  //       next: (response) => {
  //         console.log('Entreprise mise à jour avec succès', response);
  //         this.loading = false;
  //         this.onSave.emit();
  //         this.hideDialog();
  //       },
  //       error: (error) => {
  //         console.error('Erreur lors de la mise à jour:', error);
  //         this.loading = false;
  //         alert('Erreur lors de la mise à jour de l\'entreprise');
  //       }
  //     });
  //   } else {
  //     // Création
  //     this.clientCompanyService.createMyCompany(formData).subscribe({
  //       next: (response: any) => {
  //         console.log('Entreprise créée avec succès', response);
  //         this.loading = false;
  //         this.onSave.emit();
  //         this.hideDialog();
  //       },
  //       error: (error: any) => {
  //         console.error('Erreur lors de la création:', error);
  //         this.loading = false;
  //         alert('Erreur lors de la création de l\'entreprise');
  //       }
  //     });
  //   }
  // }
  hideDialog() {
    this.resetForm();
    this.onClose.emit();
  }
  static \u0275fac = function CompanyAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyAddComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ClientCompanyService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UserService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyAddComponent, selectors: [["app-company-add"]], inputs: { visible: "visible", isEditMode: "isEditMode", companyData: "companyData" }, outputs: { onClose: "onClose", onSave: "onSave" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 2, consts: [["noClient", ""], ["class", "modal fade show d-block", "tabindex", "-1", "role", "dialog", 3, "show", 4, "ngIf"], ["class", "modal-backdrop fade show", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "d-block"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "row"], [1, "col-md-6", "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "nom", "placeholder", "Ex: Pyramide IT", 1, "form-control"], ["class", "text-danger mt-1", 4, "ngIf"], ["type", "text", "formControlName", "ninea", "placeholder", "Ex: 12345678901234", 1, "form-control"], ["type", "email", "formControlName", "email", "placeholder", "Ex: contact@pyramide-it.fr", 1, "form-control"], ["type", "text", "formControlName", "telephone", "placeholder", "Ex: 01 42 56 78 91", 1, "form-control"], [1, "col-md-12", "mb-3"], ["formControlName", "adresse", "rows", "2", "placeholder", "Ex: 123 Avenue des Champs \xC9lys\xE9es, 75008 Paris", 1, "form-control"], ["type", "text", "formControlName", "secteur_activite", "placeholder", "Ex: Technologie", 1, "form-control"], ["type", "number", "formControlName", "taille_effectif", "placeholder", "Ex: 150", 1, "form-control"], [1, "form-control-plaintext", "border", "rounded", "p-2", "bg-light"], [4, "ngIf", "ngIfElse"], ["formControlName", "statut", 1, "form-select"], ["value", ""], ["value", "active"], ["value", "inactive"], ["value", "suspendue"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "isax", "isax-close-circle", "me-1"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "isax isax-tick-circle me-1", 4, "ngIf"], [1, "text-danger", "mt-1"], [1, "text-muted", "d-block"], [1, "text-muted"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "isax", "isax-tick-circle", "me-1"], [1, "modal-backdrop", "fade", "show"]], template: function CompanyAddComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CompanyAddComponent_div_0_Template, 89, 18, "div", 1)(1, CompanyAddComponent_div_1_Template, 1, 0, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.visible);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.visible);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule], styles: ["\n\n.modal[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n.modal-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 1.5rem;\n  opacity: 0.5;\n}\n.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-height: calc(100vh - 200px);\n  overflow-y: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-top: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-label[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  border: 1px solid #ced4da;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--bs-primary);\n  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);\n}\n.text-danger[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.15em;\n}\n/*# sourceMappingURL=company-add.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyAddComponent, [{
    type: Component,
    args: [{ selector: "app-company-add", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule], template: `<div class="modal fade show d-block" [class.show]="visible" *ngIf="visible" tabindex="-1" role="dialog">\r
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5 class="modal-title">{{ isEditMode ? 'Modifier l\\'Entreprise' : 'Ajouter une Entreprise' }}</h5>\r
                <button type="button" class="btn-close" (click)="hideDialog()"></button>\r
            </div>\r
            <div class="modal-body">\r
                <form [formGroup]="companyForm">\r
                    <div class="row">\r
                        <!-- Nom de l'entreprise -->\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Nom de l'entreprise <span class="text-danger">*</span></label>\r
                            <input type="text" class="form-control" formControlName="nom" placeholder="Ex: Pyramide IT">\r
                            <div *ngIf="companyForm.get('nom')?.invalid && companyForm.get('nom')?.touched" class="text-danger mt-1">\r
                                <small>Le nom est requis</small>\r
                            </div>\r
                        </div>\r
\r
                        <!-- SIRET -->\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">NINEA <span class="text-danger">*</span></label>\r
                            <input type="text" class="form-control" formControlName="ninea" placeholder="Ex: 12345678901234">\r
                            <div *ngIf="companyForm.get('ninea')?.invalid && companyForm.get('ninea')?.touched" class="text-danger mt-1">\r
                                <small>Le NINEA est requis (14 chiffres)</small>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Email -->\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Email <span class="text-danger">*</span></label>\r
                            <input type="email" class="form-control" formControlName="email" placeholder="Ex: contact@pyramide-it.fr">\r
                            <div *ngIf="companyForm.get('email')?.invalid && companyForm.get('email')?.touched" class="text-danger mt-1">\r
                                <small>Email valide requis</small>\r
                            </div>\r
                        </div>\r
\r
                        <!-- T\xE9l\xE9phone -->\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">T\xE9l\xE9phone <span class="text-danger">*</span></label>\r
                            <input type="text" class="form-control" formControlName="telephone" placeholder="Ex: 01 42 56 78 91">\r
                            <div *ngIf="companyForm.get('telephone')?.invalid && companyForm.get('telephone')?.touched" class="text-danger mt-1">\r
                                <small>Le t\xE9l\xE9phone est requis</small>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Adresse -->\r
                        <div class="col-md-12 mb-3">\r
                            <label class="form-label">Adresse <span class="text-danger">*</span></label>\r
                            <textarea class="form-control" formControlName="adresse" rows="2" placeholder="Ex: 123 Avenue des Champs \xC9lys\xE9es, 75008 Paris"></textarea>\r
                            <div *ngIf="companyForm.get('adresse')?.invalid && companyForm.get('adresse')?.touched" class="text-danger mt-1">\r
                                <small>L'adresse est requise</small>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Secteur d'activit\xE9 -->\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Secteur d'activit\xE9 <span class="text-danger">*</span></label>\r
                            <input type="text" class="form-control" formControlName="secteur_activite" placeholder="Ex: Technologie">\r
                            <div *ngIf="companyForm.get('secteur_activite')?.invalid && companyForm.get('secteur_activite')?.touched" class="text-danger mt-1">\r
                                <small>Le secteur d'activit\xE9 est requis</small>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Taille effectif -->\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Nombre d'employ\xE9s <span class="text-danger">*</span></label>\r
                            <input type="number" class="form-control" formControlName="taille_effectif" placeholder="Ex: 150">\r
                            <div *ngIf="companyForm.get('taille_effectif')?.invalid && companyForm.get('taille_effectif')?.touched" class="text-danger mt-1">\r
                                <small>Le nombre d'employ\xE9s est requis</small>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Client -->\r
                       <div class="col-md-6 mb-3">\r
                    <label class="form-label">Client</label>\r
                    <div class="form-control-plaintext border rounded p-2 bg-light">\r
                        <div *ngIf="currentClient; else noClient">\r
                            <strong>{{ currentClient.nom }}</strong>\r
                            <small class="text-muted d-block">{{ currentClient.email }}</small>\r
                        </div>\r
                        <ng-template #noClient>\r
                            <span class="text-muted">Aucun client trouv\xE9 pour votre groupe</span>\r
                        </ng-template>\r
                    </div>\r
                </div>\r
\r
                        <!-- Statut -->\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Statut <span class="text-danger">*</span></label>\r
                            <select class="form-select" formControlName="statut">\r
                                <option value="">S\xE9lectionner un statut</option>\r
                                <option value="active">Active</option>\r
                                <option value="inactive">Inactive</option>\r
                                <option value="suspendue">Suspendue</option>\r
                            </select>\r
                            <div *ngIf="companyForm.get('statut')?.invalid && companyForm.get('statut')?.touched" class="text-danger mt-1">\r
                                <small>Le statut est requis</small>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </form>\r
            </div>\r
            <div class="modal-footer">\r
                <button type="button" class="btn btn-secondary" (click)="hideDialog()">\r
                    <i class="isax isax-close-circle me-1"></i>Annuler\r
                </button>\r
                <button type="button" class="btn btn-primary" (click)="saveCompany()" [disabled]="!companyForm.valid || loading">\r
                    <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>\r
                    <i *ngIf="!loading" class="isax isax-tick-circle me-1"></i>\r
                    {{ isEditMode ? 'Mettre \xE0 jour' : 'Enregistrer' }}\r
                </button>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
<div class="modal-backdrop fade show" *ngIf="visible"></div>`, styles: ["/* src/app/features/adminrh/company-add/company-add.component.scss */\n.modal {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.modal-dialog {\n  max-width: 800px;\n}\n.modal-content {\n  border-radius: 0.5rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n.modal-header {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.modal-header .modal-title {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.modal-header .btn-close {\n  background: transparent;\n  border: none;\n  font-size: 1.5rem;\n  opacity: 0.5;\n}\n.modal-header .btn-close:hover {\n  opacity: 1;\n}\n.modal-body {\n  padding: 1.5rem;\n  max-height: calc(100vh - 200px);\n  overflow-y: auto;\n}\n.modal-footer {\n  background-color: #f8f9fa;\n  border-top: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n}\n.form-label {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-label .text-danger {\n  font-size: 0.875rem;\n}\n.form-control,\n.form-select {\n  border-radius: 0.375rem;\n  border: 1px solid #ced4da;\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: var(--bs-primary);\n  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);\n}\n.text-danger {\n  font-size: 0.875rem;\n}\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.15em;\n}\n/*# sourceMappingURL=company-add.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: ClientCompanyService }, { type: AuthService }, { type: UserService }], { visible: [{
    type: Input
  }], isEditMode: [{
    type: Input
  }], companyData: [{
    type: Input
  }], onClose: [{
    type: Output
  }], onSave: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyAddComponent, { className: "CompanyAddComponent", filePath: "src/app/features/adminrh/company-add/company-add.component.ts", lineNumber: 17 });
})();

export {
  CompanyAddComponent
};
//# sourceMappingURL=chunk-IM623WBY.js.map
