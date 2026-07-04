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
  NumberValueAccessor,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VTSSTHJF.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/superadmin/company-add/company-add.component.ts
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
function CompanyAddComponent_div_0_option_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pays_r3 = ctx.$implicit;
    \u0275\u0275property("value", pays_r3.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", pays_r3.flag, " ", pays_r3.nom, " ");
  }
}
function CompanyAddComponent_div_0_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "small");
    \u0275\u0275text(2, "Le pays est requis");
    \u0275\u0275elementEnd()();
  }
}
function CompanyAddComponent_div_0_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "small");
    \u0275\u0275text(2, "Le secteur d'activit\xE9 est requis");
    \u0275\u0275elementEnd()();
  }
}
function CompanyAddComponent_div_0_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "small");
    \u0275\u0275text(2, "L'adresse est requise");
    \u0275\u0275elementEnd()();
  }
}
function CompanyAddComponent_div_0_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "small");
    \u0275\u0275text(2, "Le nombre d'employ\xE9s est requis");
    \u0275\u0275elementEnd()();
  }
}
function CompanyAddComponent_div_0_option_77_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const client_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("(", ctx_r1.getCountryFlag(client_r4.pays), " ", client_r4.pays, ")");
  }
}
function CompanyAddComponent_div_0_option_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275template(2, CompanyAddComponent_div_0_option_77_span_2_Template, 2, 2, "span", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const client_r4 = ctx.$implicit;
    \u0275\u0275property("value", client_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", client_r4.nom, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", client_r4.pays);
  }
}
function CompanyAddComponent_div_0_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "small");
    \u0275\u0275text(2, "Le client est requis");
    \u0275\u0275elementEnd()();
  }
}
function CompanyAddComponent_div_0_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "small");
    \u0275\u0275text(2, "Le statut est requis");
    \u0275\u0275elementEnd()();
  }
}
function CompanyAddComponent_div_0_span_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 41);
  }
}
function CompanyAddComponent_div_0_i_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 42);
  }
}
function CompanyAddComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h5", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 7);
    \u0275\u0275listener("click", function CompanyAddComponent_div_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideDialog());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8)(8, "form", 9)(9, "div", 10)(10, "div", 11)(11, "label", 12);
    \u0275\u0275text(12, "Nom de l'entreprise ");
    \u0275\u0275elementStart(13, "span", 13);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 14);
    \u0275\u0275template(16, CompanyAddComponent_div_0_div_16_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 11)(18, "label", 12);
    \u0275\u0275text(19, "NINEA ");
    \u0275\u0275elementStart(20, "span", 13);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "input", 16);
    \u0275\u0275template(23, CompanyAddComponent_div_0_div_23_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 11)(25, "label", 12);
    \u0275\u0275text(26, "Email ");
    \u0275\u0275elementStart(27, "span", 13);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(29, "input", 17);
    \u0275\u0275template(30, CompanyAddComponent_div_0_div_30_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 11)(32, "label", 12);
    \u0275\u0275text(33, "T\xE9l\xE9phone ");
    \u0275\u0275elementStart(34, "span", 13);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(36, "input", 18);
    \u0275\u0275template(37, CompanyAddComponent_div_0_div_37_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 11)(39, "label", 12);
    \u0275\u0275text(40, "Pays ");
    \u0275\u0275elementStart(41, "span", 13);
    \u0275\u0275text(42, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "select", 19)(44, "option", 20);
    \u0275\u0275text(45, "S\xE9lectionner un pays");
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, CompanyAddComponent_div_0_option_46_Template, 2, 3, "option", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, CompanyAddComponent_div_0_div_47_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 11)(49, "label", 12);
    \u0275\u0275text(50, "Secteur d'activit\xE9 ");
    \u0275\u0275elementStart(51, "span", 13);
    \u0275\u0275text(52, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(53, "input", 22);
    \u0275\u0275template(54, CompanyAddComponent_div_0_div_54_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 23)(56, "label", 12);
    \u0275\u0275text(57, "Adresse ");
    \u0275\u0275elementStart(58, "span", 13);
    \u0275\u0275text(59, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(60, "textarea", 24);
    \u0275\u0275template(61, CompanyAddComponent_div_0_div_61_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 11)(63, "label", 12);
    \u0275\u0275text(64, "Nombre d'employ\xE9s ");
    \u0275\u0275elementStart(65, "span", 13);
    \u0275\u0275text(66, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(67, "input", 25);
    \u0275\u0275template(68, CompanyAddComponent_div_0_div_68_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 11)(70, "label", 12);
    \u0275\u0275text(71, "Client ");
    \u0275\u0275elementStart(72, "span", 13);
    \u0275\u0275text(73, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "select", 26)(75, "option", 20);
    \u0275\u0275text(76, "S\xE9lectionner un client");
    \u0275\u0275elementEnd();
    \u0275\u0275template(77, CompanyAddComponent_div_0_option_77_Template, 3, 3, "option", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(78, CompanyAddComponent_div_0_div_78_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 23)(80, "label", 12);
    \u0275\u0275text(81, "Statut ");
    \u0275\u0275elementStart(82, "span", 13);
    \u0275\u0275text(83, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "select", 27)(85, "option", 20);
    \u0275\u0275text(86, "S\xE9lectionner un statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "option", 28);
    \u0275\u0275text(88, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "option", 29);
    \u0275\u0275text(90, "Inactive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "option", 30);
    \u0275\u0275text(92, "Suspendue");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(93, CompanyAddComponent_div_0_div_93_Template, 3, 0, "div", 15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(94, "div", 31)(95, "button", 32);
    \u0275\u0275listener("click", function CompanyAddComponent_div_0_Template_button_click_95_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideDialog());
    });
    \u0275\u0275element(96, "i", 33);
    \u0275\u0275text(97, "Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "button", 34);
    \u0275\u0275listener("click", function CompanyAddComponent_div_0_Template_button_click_98_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCompany());
    });
    \u0275\u0275template(99, CompanyAddComponent_div_0_span_99_Template, 1, 0, "span", 35)(100, CompanyAddComponent_div_0_i_100_Template, 1, 0, "i", 36);
    \u0275\u0275text(101);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_14_0;
    let tmp_15_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r1.visible);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "Modifier l'Entreprise" : "Ajouter une Entreprise");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.companyForm);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r1.companyForm.get("nom")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.companyForm.get("nom")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.companyForm.get("ninea")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.companyForm.get("ninea")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r1.companyForm.get("email")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.companyForm.get("email")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.companyForm.get("telephone")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.companyForm.get("telephone")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.paysList);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.companyForm.get("pays")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.companyForm.get("pays")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_10_0 = ctx_r1.companyForm.get("secteur_activite")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.companyForm.get("secteur_activite")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r1.companyForm.get("adresse")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r1.companyForm.get("adresse")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_12_0 = ctx_r1.companyForm.get("taille_effectif")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r1.companyForm.get("taille_effectif")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.clients);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_14_0 = ctx_r1.companyForm.get("client_id")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r1.companyForm.get("client_id")) == null ? null : tmp_14_0.touched));
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ((tmp_15_0 = ctx_r1.companyForm.get("statut")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx_r1.companyForm.get("statut")) == null ? null : tmp_15_0.touched));
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
    \u0275\u0275element(0, "div", 43);
  }
}
var CompanyAddComponent = class _CompanyAddComponent {
  fb;
  clientCompanyService;
  visible = false;
  isEditMode = false;
  companyData = null;
  onClose = new EventEmitter();
  onSave = new EventEmitter();
  companyForm;
  loading = false;
  clients = [];
  // 🆕 Liste des pays
  paysList = [
    { code: "SN", nom: "S\xE9n\xE9gal", flag: "\u{1F1F8}\u{1F1F3}" },
    { code: "FR", nom: "France", flag: "\u{1F1EB}\u{1F1F7}" },
    { code: "ML", nom: "Mali", flag: "\u{1F1F2}\u{1F1F1}" },
    { code: "BF", nom: "Burkina Faso", flag: "\u{1F1E7}\u{1F1EB}" },
    { code: "CI", nom: "C\xF4te d'Ivoire", flag: "\u{1F1E8}\u{1F1EE}" },
    { code: "GN", nom: "Guin\xE9e", flag: "\u{1F1EC}\u{1F1F3}" },
    { code: "MR", nom: "Mauritanie", flag: "\u{1F1F2}\u{1F1F7}" },
    { code: "GM", nom: "Gambie", flag: "\u{1F1EC}\u{1F1F2}" },
    { code: "GW", nom: "Guin\xE9e-Bissau", flag: "\u{1F1EC}\u{1F1FC}" },
    { code: "CV", nom: "Cap-Vert", flag: "\u{1F1E8}\u{1F1FB}" }
  ];
  constructor(fb, clientCompanyService) {
    this.fb = fb;
    this.clientCompanyService = clientCompanyService;
  }
  ngOnInit() {
    this.initForm();
    this.loadClients(() => {
      if (this.visible && this.companyData && this.isEditMode) {
        this.populateForm();
      }
    });
  }
  ngOnChanges() {
    if (this.visible && this.companyData && this.isEditMode) {
      if (this.clients.length > 0) {
        this.populateForm();
      }
    } else if (this.visible && !this.isEditMode) {
      this.resetForm();
    }
  }
  initForm() {
    this.companyForm = this.fb.group({
      nom: ["", [Validators.required, Validators.minLength(2)]],
      ninea: ["", [Validators.required, Validators.minLength(14)]],
      email: ["", [Validators.required, Validators.email]],
      telephone: ["", Validators.required],
      adresse: ["", Validators.required],
      secteur_activite: ["", Validators.required],
      taille_effectif: ["", [Validators.required, Validators.min(1)]],
      client_id: ["", Validators.required],
      statut: ["", Validators.required],
      pays: ["", Validators.required]
      // 🆕 Nouveau champ
    });
  }
  loadClients(afterLoad) {
    this.clientCompanyService.getClients().subscribe({
      next: (response) => {
        this.clients = response.clients || response.data || [];
        if (afterLoad)
          afterLoad();
      },
      error: (error) => console.error("Erreur chargement clients:", error)
    });
  }
  populateForm() {
    if (!this.companyData)
      return;
    const clientId = this.companyData.client_id ?? this.companyData.client?.id ?? "";
    this.companyForm.patchValue({
      nom: this.companyData.nom,
      ninea: this.companyData.ninea,
      email: this.companyData.email,
      telephone: this.companyData.telephone,
      adresse: this.companyData.adresse,
      secteur_activite: this.companyData.secteur_activite,
      taille_effectif: this.companyData.taille_effectif,
      client_id: String(clientId),
      statut: this.companyData.statut,
      pays: this.companyData.pays
    });
  }
  resetForm() {
    this.companyForm.reset();
    this.companyForm.patchValue({ pays: "SN" });
  }
  // 🆕 Méthode pour obtenir le drapeau d'un pays
  getCountryFlag(countryCode) {
    const country = this.paysList.find((p) => p.code === countryCode);
    return country ? country.flag : "\u{1F30D}";
  }
  saveCompany() {
    if (this.companyForm.invalid) {
      Object.keys(this.companyForm.controls).forEach((key) => {
        this.companyForm.get(key)?.markAsTouched();
      });
      return;
    }
    this.loading = true;
    const formData = __spreadValues({}, this.companyForm.value);
    if (formData.client_id) {
      formData.client_id = parseInt(formData.client_id);
    }
    if (formData.taille_effectif) {
      formData.taille_effectif = parseInt(formData.taille_effectif);
    }
    console.log("===== DONN\xC9ES ENVOY\xC9ES =====");
    console.log(JSON.stringify(formData, null, 2));
    console.log("============================");
    if (this.isEditMode && this.companyData) {
      this.clientCompanyService.updateCompany(this.companyData.id, formData).subscribe({
        next: (response) => {
          console.log("Entreprise mise \xE0 jour:", response);
          this.loading = false;
          this.onSave.emit();
          this.hideDialog();
        },
        error: (error) => {
          this.handleError(error);
        }
      });
    } else {
      this.clientCompanyService.createCompany(formData).subscribe({
        next: (response) => {
          console.log("Entreprise cr\xE9\xE9e:", response);
          this.loading = false;
          this.onSave.emit();
          this.hideDialog();
        },
        error: (error) => {
          this.handleError(error);
        }
      });
    }
  }
  handleError(error) {
    let errorMessage = "Erreur lors de l'op\xE9ration";
    if (error.error?.errors) {
      errorMessage = Object.values(error.error.errors).flat().join("\n");
    } else if (error.error?.message) {
      errorMessage = error.error.message;
    }
    alert(errorMessage);
    this.loading = false;
  }
  hideDialog() {
    this.resetForm();
    this.onClose.emit();
  }
  static \u0275fac = function CompanyAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyAddComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ClientCompanyService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyAddComponent, selectors: [["app-company-add"]], inputs: { visible: "visible", isEditMode: "isEditMode", companyData: "companyData" }, outputs: { onClose: "onClose", onSave: "onSave" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 2, consts: [["class", "modal fade show d-block", "tabindex", "-1", "role", "dialog", 3, "show", 4, "ngIf"], ["class", "modal-backdrop fade show", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "d-block"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "row"], [1, "col-md-6", "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "nom", "placeholder", "Ex: Pyramide IT", 1, "form-control"], ["class", "text-danger mt-1", 4, "ngIf"], ["type", "text", "formControlName", "ninea", "placeholder", "Ex: 12345678901234", 1, "form-control"], ["type", "email", "formControlName", "email", "placeholder", "Ex: contact@pyramide-it.fr", 1, "form-control"], ["type", "text", "formControlName", "telephone", "placeholder", "Ex: +221 77 123 45 67", 1, "form-control"], ["formControlName", "pays", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "secteur_activite", "placeholder", "Ex: Technologie", 1, "form-control"], [1, "col-md-12", "mb-3"], ["formControlName", "adresse", "rows", "2", "placeholder", "Ex: 123 Avenue Bourguiba, Dakar", 1, "form-control"], ["type", "number", "formControlName", "taille_effectif", "placeholder", "Ex: 150", 1, "form-control"], ["formControlName", "client_id", 1, "form-select"], ["formControlName", "statut", 1, "form-select"], ["value", "active"], ["value", "inactive"], ["value", "suspendue"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "isax", "isax-close-circle", "me-1"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "isax isax-tick-circle me-1", 4, "ngIf"], [1, "text-danger", "mt-1"], [3, "value"], ["class", "text-muted", 4, "ngIf"], [1, "text-muted"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "isax", "isax-tick-circle", "me-1"], [1, "modal-backdrop", "fade", "show"]], template: function CompanyAddComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CompanyAddComponent_div_0_Template, 102, 20, "div", 0)(1, CompanyAddComponent_div_1_Template, 1, 0, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.visible);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.visible);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule], styles: ["\n\n.modal[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n.modal-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 1.5rem;\n  opacity: 0.5;\n}\n.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-height: calc(100vh - 200px);\n  overflow-y: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-top: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-label[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  border: 1px solid #ced4da;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--bs-primary);\n  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);\n}\n.text-danger[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.15em;\n}\n/*# sourceMappingURL=company-add.component.css.map */"] });
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
                        <!-- SIRET/NINEA -->\r
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
                            <input type="text" class="form-control" formControlName="telephone" placeholder="Ex: +221 77 123 45 67">\r
                            <div *ngIf="companyForm.get('telephone')?.invalid && companyForm.get('telephone')?.touched" class="text-danger mt-1">\r
                                <small>Le t\xE9l\xE9phone est requis</small>\r
                            </div>\r
                        </div>\r
\r
                        <!-- \u{1F195} PAYS -->\r
                        <div class="col-md-6 mb-3">\r
                            <label class="form-label">Pays <span class="text-danger">*</span></label>\r
                            <select class="form-select" formControlName="pays">\r
                                <option value="">S\xE9lectionner un pays</option>\r
                                <option *ngFor="let pays of paysList" [value]="pays.code">\r
                                    {{ pays.flag }} {{ pays.nom }}\r
                                </option>\r
                            </select>\r
                            <div *ngIf="companyForm.get('pays')?.invalid && companyForm.get('pays')?.touched" class="text-danger mt-1">\r
                                <small>Le pays est requis</small>\r
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
                        <!-- Adresse -->\r
                        <div class="col-md-12 mb-3">\r
                            <label class="form-label">Adresse <span class="text-danger">*</span></label>\r
                            <textarea class="form-control" formControlName="adresse" rows="2" placeholder="Ex: 123 Avenue Bourguiba, Dakar"></textarea>\r
                            <div *ngIf="companyForm.get('adresse')?.invalid && companyForm.get('adresse')?.touched" class="text-danger mt-1">\r
                                <small>L'adresse est requise</small>\r
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
                            <label class="form-label">Client <span class="text-danger">*</span></label>\r
                            <select class="form-select" formControlName="client_id">\r
                                <option value="">S\xE9lectionner un client</option>\r
                                <option *ngFor="let client of clients" [value]="client.id">\r
                                    {{ client.nom }} \r
                                    <span *ngIf="client.pays" class="text-muted">({{ getCountryFlag(client.pays) }} {{ client.pays }})</span>\r
                                </option>\r
                            </select>\r
                            <div *ngIf="companyForm.get('client_id')?.invalid && companyForm.get('client_id')?.touched" class="text-danger mt-1">\r
                                <small>Le client est requis</small>\r
                            </div>\r
                        </div>\r
\r
                        <!-- Statut -->\r
                        <div class="col-md-12 mb-3">\r
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
<div class="modal-backdrop fade show" *ngIf="visible"></div>`, styles: ["/* src/app/features/superadmin/company-add/company-add.component.scss */\n.modal {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.modal-dialog {\n  max-width: 800px;\n}\n.modal-content {\n  border-radius: 0.5rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n.modal-header {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.modal-header .modal-title {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.modal-header .btn-close {\n  background: transparent;\n  border: none;\n  font-size: 1.5rem;\n  opacity: 0.5;\n}\n.modal-header .btn-close:hover {\n  opacity: 1;\n}\n.modal-body {\n  padding: 1.5rem;\n  max-height: calc(100vh - 200px);\n  overflow-y: auto;\n}\n.modal-footer {\n  background-color: #f8f9fa;\n  border-top: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n}\n.form-label {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-label .text-danger {\n  font-size: 0.875rem;\n}\n.form-control,\n.form-select {\n  border-radius: 0.375rem;\n  border: 1px solid #ced4da;\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: var(--bs-primary);\n  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);\n}\n.text-danger {\n  font-size: 0.875rem;\n}\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.15em;\n}\n/*# sourceMappingURL=company-add.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: ClientCompanyService }], { visible: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyAddComponent, { className: "CompanyAddComponent", filePath: "app/features/superadmin/company-add/company-add.component.ts", lineNumber: 16 });
})();

export {
  CompanyAddComponent
};
//# sourceMappingURL=chunk-5AVR6MGF.js.map
