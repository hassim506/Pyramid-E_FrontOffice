import {
  ClientCompanyService
} from "./chunk-NAWDUVHO.js";
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7XGB4BEQ.js";

// src/app/features/adminrh/client-add/client-add.component.ts
function ClientAddComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "small");
    \u0275\u0275text(2, "Le nom est requis");
    \u0275\u0275elementEnd()();
  }
}
function ClientAddComponent_div_0_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "small");
    \u0275\u0275text(2, "Le type est requis");
    \u0275\u0275elementEnd()();
  }
}
function ClientAddComponent_div_0_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "small");
    \u0275\u0275text(2, "Le NINEA est requis (14 chiffres)");
    \u0275\u0275elementEnd()();
  }
}
function ClientAddComponent_div_0_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "small");
    \u0275\u0275text(2, "Email valide requis");
    \u0275\u0275elementEnd()();
  }
}
function ClientAddComponent_div_0_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "small");
    \u0275\u0275text(2, "Le t\xE9l\xE9phone est requis");
    \u0275\u0275elementEnd()();
  }
}
function ClientAddComponent_div_0_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "small");
    \u0275\u0275text(2, "Le contact principal est requis");
    \u0275\u0275elementEnd()();
  }
}
function ClientAddComponent_div_0_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "small");
    \u0275\u0275text(2, "L'adresse est requise");
    \u0275\u0275elementEnd()();
  }
}
function ClientAddComponent_div_0_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "small");
    \u0275\u0275text(2, "Le secteur d'activit\xE9 est requis");
    \u0275\u0275elementEnd()();
  }
}
function ClientAddComponent_div_0_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "small");
    \u0275\u0275text(2, "La taille est requise");
    \u0275\u0275elementEnd()();
  }
}
function ClientAddComponent_div_0_div_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "small");
    \u0275\u0275text(2, "Le statut est requis");
    \u0275\u0275elementEnd()();
  }
}
function ClientAddComponent_div_0_div_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "small");
    \u0275\u0275text(2, "La date de d\xE9but de contrat est requise");
    \u0275\u0275elementEnd()();
  }
}
function ClientAddComponent_div_0_div_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "small");
    \u0275\u0275text(2, "La date de fin de contrat est requise");
    \u0275\u0275elementEnd()();
  }
}
function ClientAddComponent_div_0_span_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 46);
  }
}
function ClientAddComponent_div_0_i_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 47);
  }
}
function ClientAddComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h5", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 7);
    \u0275\u0275listener("click", function ClientAddComponent_div_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideDialog());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8)(8, "form", 9)(9, "div", 10)(10, "div", 11)(11, "label", 12);
    \u0275\u0275text(12, "Nom du client ");
    \u0275\u0275elementStart(13, "span", 13);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 14);
    \u0275\u0275template(16, ClientAddComponent_div_0_div_16_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 11)(18, "label", 12);
    \u0275\u0275text(19, "Type ");
    \u0275\u0275elementStart(20, "span", 13);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "select", 16)(23, "option", 17);
    \u0275\u0275text(24, "S\xE9lectionner un type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 18);
    \u0275\u0275text(26, "Entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 19);
    \u0275\u0275text(28, "Groupe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 20);
    \u0275\u0275text(30, "Particulier");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, ClientAddComponent_div_0_div_31_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 11)(33, "label", 12);
    \u0275\u0275text(34, "NINEA ");
    \u0275\u0275elementStart(35, "span", 13);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(37, "input", 21);
    \u0275\u0275template(38, ClientAddComponent_div_0_div_38_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 11)(40, "label", 12);
    \u0275\u0275text(41, "Email ");
    \u0275\u0275elementStart(42, "span", 13);
    \u0275\u0275text(43, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(44, "input", 22);
    \u0275\u0275template(45, ClientAddComponent_div_0_div_45_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 11)(47, "label", 12);
    \u0275\u0275text(48, "T\xE9l\xE9phone ");
    \u0275\u0275elementStart(49, "span", 13);
    \u0275\u0275text(50, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(51, "input", 23);
    \u0275\u0275template(52, ClientAddComponent_div_0_div_52_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 11)(54, "label", 12);
    \u0275\u0275text(55, "Contact Principal ");
    \u0275\u0275elementStart(56, "span", 13);
    \u0275\u0275text(57, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(58, "input", 24);
    \u0275\u0275template(59, ClientAddComponent_div_0_div_59_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 25)(61, "label", 12);
    \u0275\u0275text(62, "Adresse ");
    \u0275\u0275elementStart(63, "span", 13);
    \u0275\u0275text(64, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(65, "textarea", 26);
    \u0275\u0275template(66, ClientAddComponent_div_0_div_66_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 11)(68, "label", 12);
    \u0275\u0275text(69, "Secteur d'activit\xE9 ");
    \u0275\u0275elementStart(70, "span", 13);
    \u0275\u0275text(71, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(72, "input", 27);
    \u0275\u0275template(73, ClientAddComponent_div_0_div_73_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 11)(75, "label", 12);
    \u0275\u0275text(76, "Taille ");
    \u0275\u0275elementStart(77, "span", 13);
    \u0275\u0275text(78, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "select", 28)(80, "option", 17);
    \u0275\u0275text(81, "S\xE9lectionner une taille");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "option", 29);
    \u0275\u0275text(83, "TPE (Tr\xE8s Petite Entreprise)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "option", 30);
    \u0275\u0275text(85, "PME (Petite et Moyenne Entreprise)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "option", 31);
    \u0275\u0275text(87, "ETI (Entreprise de Taille Interm\xE9diaire)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "option", 32);
    \u0275\u0275text(89, "GE (Grande Entreprise)");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(90, ClientAddComponent_div_0_div_90_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 11)(92, "label", 12);
    \u0275\u0275text(93, "Statut ");
    \u0275\u0275elementStart(94, "span", 13);
    \u0275\u0275text(95, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "select", 33)(97, "option", 17);
    \u0275\u0275text(98, "S\xE9lectionner un statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "option", 34);
    \u0275\u0275text(100, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "option", 35);
    \u0275\u0275text(102, "Inactif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "option", 36);
    \u0275\u0275text(104, "Suspendu");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(105, ClientAddComponent_div_0_div_105_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "div", 11)(107, "label", 12);
    \u0275\u0275text(108, "Date d\xE9but contrat ");
    \u0275\u0275elementStart(109, "span", 13);
    \u0275\u0275text(110, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(111, "input", 37);
    \u0275\u0275template(112, ClientAddComponent_div_0_div_112_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "div", 11)(114, "label", 12);
    \u0275\u0275text(115, "Date fin contrat ");
    \u0275\u0275elementStart(116, "span", 13);
    \u0275\u0275text(117, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(118, "input", 38);
    \u0275\u0275template(119, ClientAddComponent_div_0_div_119_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(120, "div", 39)(121, "button", 40);
    \u0275\u0275listener("click", function ClientAddComponent_div_0_Template_button_click_121_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideDialog());
    });
    \u0275\u0275element(122, "i", 41);
    \u0275\u0275text(123, "Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "button", 42);
    \u0275\u0275listener("click", function ClientAddComponent_div_0_Template_button_click_124_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveClient());
    });
    \u0275\u0275template(125, ClientAddComponent_div_0_span_125_Template, 1, 0, "span", 43)(126, ClientAddComponent_div_0_i_126_Template, 1, 0, "i", 44);
    \u0275\u0275text(127);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r1.visible);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "Modifier le Client" : "Ajouter un Client");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.clientForm);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r1.clientForm.get("nom")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.clientForm.get("nom")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.clientForm.get("type")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.clientForm.get("type")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r1.clientForm.get("ninea")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.clientForm.get("ninea")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.clientForm.get("email")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.clientForm.get("email")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx_r1.clientForm.get("telephone")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.clientForm.get("telephone")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.clientForm.get("contact_principal")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.clientForm.get("contact_principal")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_10_0 = ctx_r1.clientForm.get("adresse")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.clientForm.get("adresse")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r1.clientForm.get("secteur_activite")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r1.clientForm.get("secteur_activite")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(17);
    \u0275\u0275property("ngIf", ((tmp_12_0 = ctx_r1.clientForm.get("taille")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r1.clientForm.get("taille")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ((tmp_13_0 = ctx_r1.clientForm.get("statut")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.clientForm.get("statut")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_14_0 = ctx_r1.clientForm.get("date_contrat")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r1.clientForm.get("date_contrat")) == null ? null : tmp_14_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_15_0 = ctx_r1.clientForm.get("date_fin_contrat")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx_r1.clientForm.get("date_fin_contrat")) == null ? null : tmp_15_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.clientForm.valid || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Mettre \xE0 jour" : "Enregistrer", " ");
  }
}
function ClientAddComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 48);
  }
}
var ClientAddComponent = class _ClientAddComponent {
  fb;
  clientCompanyService;
  visible = false;
  isEditMode = false;
  clientData = null;
  onClose = new EventEmitter();
  onSave = new EventEmitter();
  clientForm;
  loading = false;
  constructor(fb, clientCompanyService) {
    this.fb = fb;
    this.clientCompanyService = clientCompanyService;
  }
  ngOnInit() {
    this.initForm();
  }
  ngOnChanges() {
    if (this.visible && this.clientData && this.isEditMode) {
      this.populateForm();
    } else if (this.visible && !this.isEditMode) {
      this.resetForm();
    }
  }
  initForm() {
    this.clientForm = this.fb.group({
      nom: ["", [Validators.required, Validators.minLength(3)]],
      type: ["", Validators.required],
      ninea: ["", [Validators.required, Validators.pattern(/^\d{14}$/)]],
      email: ["", [Validators.required, Validators.email]],
      telephone: ["", Validators.required],
      contact_principal: ["", Validators.required],
      adresse: ["", Validators.required],
      secteur_activite: ["", Validators.required],
      taille: ["", Validators.required],
      statut: ["actif", Validators.required],
      date_contrat: ["", Validators.required],
      date_fin_contrat: ["", Validators.required]
    });
  }
  populateForm() {
    if (this.clientData) {
      this.clientForm.patchValue({
        nom: this.clientData.nom,
        type: this.clientData.type,
        ninea: this.clientData.ninea,
        email: this.clientData.email,
        telephone: this.clientData.telephone,
        contact_principal: this.clientData.contact_principal,
        adresse: this.clientData.adresse,
        secteur_activite: this.clientData.secteur_activite,
        taille: this.clientData.taille,
        statut: this.clientData.statut,
        date_contrat: this.formatDateForInput(this.clientData.date_contrat),
        date_fin_contrat: this.formatDateForInput(this.clientData.date_fin_contrat)
      });
    }
  }
  resetForm() {
    this.clientForm.reset({
      statut: "actif"
    });
  }
  formatDateForInput(date) {
    if (!date)
      return "";
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  }
  saveClient() {
    if (this.clientForm.invalid) {
      Object.keys(this.clientForm.controls).forEach((key) => {
        this.clientForm.get(key)?.markAsTouched();
      });
      return;
    }
    this.loading = true;
    const formData = this.clientForm.value;
    if (this.isEditMode && this.clientData) {
      this.clientCompanyService.updateClient(this.clientData.id, formData).subscribe({
        next: (response) => {
          console.log("Client mis \xE0 jour avec succ\xE8s", response);
          this.loading = false;
          this.onSave.emit();
          this.hideDialog();
        },
        error: (error) => {
          console.error("Erreur lors de la mise \xE0 jour:", error);
          this.loading = false;
          alert("Erreur lors de la mise \xE0 jour du client");
        }
      });
    } else {
      this.clientCompanyService.createClient(formData).subscribe({
        next: (response) => {
          console.log("Client cr\xE9\xE9 avec succ\xE8s", response);
          this.loading = false;
          this.onSave.emit();
          this.hideDialog();
        },
        error: (error) => {
          console.error("Erreur lors de la cr\xE9ation:", error);
          this.loading = false;
          alert("Erreur lors de la cr\xE9ation du client");
        }
      });
    }
  }
  hideDialog() {
    this.resetForm();
    this.onClose.emit();
  }
  static \u0275fac = function ClientAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientAddComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ClientCompanyService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientAddComponent, selectors: [["app-client-add"]], inputs: { visible: "visible", isEditMode: "isEditMode", clientData: "clientData" }, outputs: { onClose: "onClose", onSave: "onSave" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 2, consts: [["class", "modal fade show d-block", "tabindex", "-1", "role", "dialog", 3, "show", 4, "ngIf"], ["class", "modal-backdrop fade show", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "d-block"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "row"], [1, "col-md-6", "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "nom", "placeholder", "Ex: Groupe TechnoSolutions", 1, "form-control"], ["class", "text-danger mt-1", 4, "ngIf"], ["formControlName", "type", 1, "form-select"], ["value", ""], ["value", "entreprise"], ["value", "groupe"], ["value", "particulier"], ["type", "text", "formControlName", "ninea", "placeholder", "Ex: 12345678901234", 1, "form-control"], ["type", "email", "formControlName", "email", "placeholder", "Ex: info@technosolutions.fr", 1, "form-control"], ["type", "text", "formControlName", "telephone", "placeholder", "Ex: 04 78 90 12 34", 1, "form-control"], ["type", "text", "formControlName", "contact_principal", "placeholder", "Ex: Marie Dubois", 1, "form-control"], [1, "col-md-12", "mb-3"], ["formControlName", "adresse", "rows", "2", "placeholder", "Ex: 456 Rue de la R\xE9publique, 69002 Lyon", 1, "form-control"], ["type", "text", "formControlName", "secteur_activite", "placeholder", "Ex: Conseil IT", 1, "form-control"], ["formControlName", "taille", 1, "form-select"], ["value", "TPE"], ["value", "PME"], ["value", "ETI"], ["value", "GE"], ["formControlName", "statut", 1, "form-select"], ["value", "actif"], ["value", "inactif"], ["value", "suspendu"], ["type", "date", "formControlName", "date_contrat", 1, "form-control"], ["type", "date", "formControlName", "date_fin_contrat", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "isax", "isax-close-circle", "me-1"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "isax isax-tick-circle me-1", 4, "ngIf"], [1, "text-danger", "mt-1"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "isax", "isax-tick-circle", "me-1"], [1, "modal-backdrop", "fade", "show"]], template: function ClientAddComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ClientAddComponent_div_0_Template, 128, 20, "div", 0)(1, ClientAddComponent_div_1_Template, 1, 0, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.visible);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.visible);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ["\n\n.modal[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n.modal-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 1.5rem;\n  opacity: 0.5;\n}\n.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-height: calc(100vh - 200px);\n  overflow-y: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-top: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-label[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  border: 1px solid #ced4da;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--bs-primary);\n  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);\n}\n.text-danger[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.15em;\n}\n/*# sourceMappingURL=client-add.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientAddComponent, [{
    type: Component,
    args: [{ selector: "app-client-add", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ], template: `<div class="modal fade show d-block" [class.show]="visible" *ngIf="visible" tabindex="-1" role="dialog">\r
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5 class="modal-title">{{ isEditMode ? 'Modifier le Client' : 'Ajouter un Client' }}</h5>\r
                <button type="button" class="btn-close" (click)="hideDialog()"></button>\r
            </div>\r
            <div class="modal-body">\r
                <form [formGroup]="clientForm">\r
                    <div class="row">\r
                        <!-- Nom du client -->\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Nom du client <span class="text-danger">*</span></label>\r
                            <input type="text" class="form-control" formControlName="nom" placeholder="Ex: Groupe TechnoSolutions">\r
                            <div *ngIf="clientForm.get('nom')?.invalid && clientForm.get('nom')?.touched" class="text-danger mt-1">\r
                                <small>Le nom est requis</small>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Type -->\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Type <span class="text-danger">*</span></label>\r
                            <select class="form-select" formControlName="type">\r
                                <option value="">S\xE9lectionner un type</option>\r
                                <option value="entreprise">Entreprise</option>\r
                                <option value="groupe">Groupe</option>\r
                                <option value="particulier">Particulier</option>\r
                            </select>\r
                            <div *ngIf="clientForm.get('type')?.invalid && clientForm.get('type')?.touched" class="text-danger mt-1">\r
                                <small>Le type est requis</small>\r
                            </div>\r
                        </div>\r
\r
                        <!-- SIRET -->\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">NINEA <span class="text-danger">*</span></label>\r
                            <input type="text" class="form-control" formControlName="ninea" placeholder="Ex: 12345678901234">\r
                            <div *ngIf="clientForm.get('ninea')?.invalid && clientForm.get('ninea')?.touched" class="text-danger mt-1">\r
                                <small>Le NINEA est requis (14 chiffres)</small>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Email -->\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Email <span class="text-danger">*</span></label>\r
                            <input type="email" class="form-control" formControlName="email" placeholder="Ex: info@technosolutions.fr">\r
                            <div *ngIf="clientForm.get('email')?.invalid && clientForm.get('email')?.touched" class="text-danger mt-1">\r
                                <small>Email valide requis</small>\r
                            </div>\r
                        </div>\r
\r
                        <!-- T\xE9l\xE9phone -->\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">T\xE9l\xE9phone <span class="text-danger">*</span></label>\r
                            <input type="text" class="form-control" formControlName="telephone" placeholder="Ex: 04 78 90 12 34">\r
                            <div *ngIf="clientForm.get('telephone')?.invalid && clientForm.get('telephone')?.touched" class="text-danger mt-1">\r
                                <small>Le t\xE9l\xE9phone est requis</small>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Contact principal -->\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Contact Principal <span class="text-danger">*</span></label>\r
                            <input type="text" class="form-control" formControlName="contact_principal" placeholder="Ex: Marie Dubois">\r
                            <div *ngIf="clientForm.get('contact_principal')?.invalid && clientForm.get('contact_principal')?.touched" class="text-danger mt-1">\r
                                <small>Le contact principal est requis</small>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Adresse -->\r
                        <div class="col-md-12 mb-3">\r
                            <label class="form-label">Adresse <span class="text-danger">*</span></label>\r
                            <textarea class="form-control" formControlName="adresse" rows="2" placeholder="Ex: 456 Rue de la R\xE9publique, 69002 Lyon"></textarea>\r
                            <div *ngIf="clientForm.get('adresse')?.invalid && clientForm.get('adresse')?.touched" class="text-danger mt-1">\r
                                <small>L'adresse est requise</small>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Secteur d'activit\xE9 -->\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Secteur d'activit\xE9 <span class="text-danger">*</span></label>\r
                            <input type="text" class="form-control" formControlName="secteur_activite" placeholder="Ex: Conseil IT">\r
                            <div *ngIf="clientForm.get('secteur_activite')?.invalid && clientForm.get('secteur_activite')?.touched" class="text-danger mt-1">\r
                                <small>Le secteur d'activit\xE9 est requis</small>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Taille -->\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Taille <span class="text-danger">*</span></label>\r
                            <select class="form-select" formControlName="taille">\r
                                <option value="">S\xE9lectionner une taille</option>\r
                                <option value="TPE">TPE (Tr\xE8s Petite Entreprise)</option>\r
                                <option value="PME">PME (Petite et Moyenne Entreprise)</option>\r
                                <option value="ETI">ETI (Entreprise de Taille Interm\xE9diaire)</option>\r
                                <option value="GE">GE (Grande Entreprise)</option>\r
                            </select>\r
                            <div *ngIf="clientForm.get('taille')?.invalid && clientForm.get('taille')?.touched" class="text-danger mt-1">\r
                                <small>La taille est requise</small>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Statut -->\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Statut <span class="text-danger">*</span></label>\r
                            <select class="form-select" formControlName="statut">\r
                                <option value="">S\xE9lectionner un statut</option>\r
                                <option value="actif">Actif</option>\r
                                <option value="inactif">Inactif</option>\r
                                <option value="suspendu">Suspendu</option>\r
                            </select>\r
                            <div *ngIf="clientForm.get('statut')?.invalid && clientForm.get('statut')?.touched" class="text-danger mt-1">\r
                                <small>Le statut est requis</small>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Date d\xE9but contrat -->\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Date d\xE9but contrat <span class="text-danger">*</span></label>\r
                            <input type="date" class="form-control" formControlName="date_contrat">\r
                            <div *ngIf="clientForm.get('date_contrat')?.invalid && clientForm.get('date_contrat')?.touched" class="text-danger mt-1">\r
                                <small>La date de d\xE9but de contrat est requise</small>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Date fin contrat -->\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Date fin contrat <span class="text-danger">*</span></label>\r
                            <input type="date" class="form-control" formControlName="date_fin_contrat">\r
                            <div *ngIf="clientForm.get('date_fin_contrat')?.invalid && clientForm.get('date_fin_contrat')?.touched" class="text-danger mt-1">\r
                                <small>La date de fin de contrat est requise</small>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </form>\r
            </div>\r
            <div class="modal-footer">\r
                <button type="button" class="btn btn-secondary" (click)="hideDialog()">\r
                    <i class="isax isax-close-circle me-1"></i>Annuler\r
                </button>\r
                <button type="button" class="btn btn-primary" (click)="saveClient()" [disabled]="!clientForm.valid || loading">\r
                    <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>\r
                    <i *ngIf="!loading" class="isax isax-tick-circle me-1"></i>\r
                    {{ isEditMode ? 'Mettre \xE0 jour' : 'Enregistrer' }}\r
                </button>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
<div class="modal-backdrop fade show" *ngIf="visible"></div>`, styles: ["/* src/app/features/adminrh/client-add/client-add.component.scss */\n.modal {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.modal-dialog {\n  max-width: 800px;\n}\n.modal-content {\n  border-radius: 0.5rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n.modal-header {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.modal-header .modal-title {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.modal-header .btn-close {\n  background: transparent;\n  border: none;\n  font-size: 1.5rem;\n  opacity: 0.5;\n}\n.modal-header .btn-close:hover {\n  opacity: 1;\n}\n.modal-body {\n  padding: 1.5rem;\n  max-height: calc(100vh - 200px);\n  overflow-y: auto;\n}\n.modal-footer {\n  background-color: #f8f9fa;\n  border-top: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n}\n.form-label {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-label .text-danger {\n  font-size: 0.875rem;\n}\n.form-control,\n.form-select {\n  border-radius: 0.375rem;\n  border: 1px solid #ced4da;\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: var(--bs-primary);\n  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);\n}\n.text-danger {\n  font-size: 0.875rem;\n}\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.15em;\n}\n/*# sourceMappingURL=client-add.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: ClientCompanyService }], { visible: [{
    type: Input
  }], isEditMode: [{
    type: Input
  }], clientData: [{
    type: Input
  }], onClose: [{
    type: Output
  }], onSave: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientAddComponent, { className: "ClientAddComponent", filePath: "src/app/features/adminrh/client-add/client-add.component.ts", lineNumber: 19 });
})();

export {
  ClientAddComponent
};
//# sourceMappingURL=chunk-6QUVJYDC.js.map
