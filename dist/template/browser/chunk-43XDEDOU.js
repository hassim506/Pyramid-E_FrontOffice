import {
  CategorieService
} from "./chunk-35DCAGSA.js";
import "./chunk-FKX6UC3I.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-45DOGZAU.js";
import "./chunk-46QRNFHM.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-MNWNTO2T.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7XGB4BEQ.js";
import "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-categorie/adminrh-categorie.component.ts
function AdminrhCategorieComponent_div_10_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, "Active");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCategorieComponent_div_10_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1, "Inactive");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCategorieComponent_div_10_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1, "Visible");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCategorieComponent_div_10_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1, "Masqu\xE9e");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCategorieComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "div", 52)(3, "div", 53)(4, "div", 54);
    \u0275\u0275element(5, "i", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 18)(7, "h6", 56);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 57);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small", 24);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 58)(14, "div", 59);
    \u0275\u0275template(15, AdminrhCategorieComponent_div_10_span_15_Template, 2, 0, "span", 60)(16, AdminrhCategorieComponent_div_10_span_16_Template, 2, 0, "span", 61)(17, AdminrhCategorieComponent_div_10_span_17_Template, 2, 0, "span", 62)(18, AdminrhCategorieComponent_div_10_span_18_Template, 2, 0, "span", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "small", 64);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 65)(22, "div", 66)(23, "div", 67)(24, "button", 68);
    \u0275\u0275text(25, " Actions ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ul", 69)(27, "li")(28, "a", 70);
    \u0275\u0275listener("click", function AdminrhCategorieComponent_div_10_Template_a_click_28_listener() {
      const categorie_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewCategorie(categorie_r2));
    });
    \u0275\u0275element(29, "i", 71);
    \u0275\u0275text(30, "Voir ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "li")(32, "a", 72);
    \u0275\u0275listener("click", function AdminrhCategorieComponent_div_10_Template_a_click_32_listener() {
      const categorie_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editCategorie(categorie_r2));
    });
    \u0275\u0275element(33, "i", 73);
    \u0275\u0275text(34, "Modifier ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "li");
    \u0275\u0275element(36, "hr", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "li")(38, "a", 75);
    \u0275\u0275listener("click", function AdminrhCategorieComponent_div_10_Template_a_click_38_listener() {
      const categorie_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteCategorie(categorie_r2));
    });
    \u0275\u0275element(39, "i", 76);
    \u0275\u0275text(40, "Supprimer ");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    const categorie_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background-color", categorie_r2.couleur);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getIconClass(categorie_r2.icone));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(categorie_r2.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(categorie_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", categorie_r2.nombre_formations, " formation(s)");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", categorie_r2.est_active);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !categorie_r2.est_active);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", categorie_r2.est_visible);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !categorie_r2.est_visible);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Ordre: ", categorie_r2.ordre);
  }
}
function AdminrhCategorieComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "span", 83);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function AdminrhCategorieComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 85);
    \u0275\u0275element(2, "i", 86);
    \u0275\u0275elementStart(3, "h6", 87);
    \u0275\u0275text(4, "Aucune cat\xE9gorie trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 24);
    \u0275\u0275text(6, "Commencez par cr\xE9er votre premi\xE8re cat\xE9gorie de formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 88);
    \u0275\u0275element(8, "i", 89);
    \u0275\u0275text(9, "Ajouter une cat\xE9gorie ");
    \u0275\u0275elementEnd()()();
  }
}
function AdminrhCategorieComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275text(1, " Le nom est requis (min. 2 caract\xE8res) ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCategorieComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275text(1, " La description est requise ");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCategorieComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "label", 20);
    \u0275\u0275text(2, "Aper\xE7u");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 91);
    \u0275\u0275element(4, "i", 92);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-color", ctx_r2.categorieForm.value.couleur);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getIconClass(ctx_r2.categorieForm.value.icone));
  }
}
function AdminrhCategorieComponent_div_84_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1, "Active");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCategorieComponent_div_84_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 100);
    \u0275\u0275text(1, "Inactive");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCategorieComponent_div_84_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1, "Visible");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCategorieComponent_div_84_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1, "Masqu\xE9e");
    \u0275\u0275elementEnd();
  }
}
function AdminrhCategorieComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 94)(2, "div", 95);
    \u0275\u0275element(3, "i", 96);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 17)(5, "div", 18)(6, "h6")(7, "strong");
    \u0275\u0275text(8, "Nom:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 18)(12, "h6")(13, "strong");
    \u0275\u0275text(14, "Slug:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 19)(18, "h6")(19, "strong");
    \u0275\u0275text(20, "Description:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 17)(24, "div", 18)(25, "h6")(26, "strong");
    \u0275\u0275text(27, "Nombre de formations:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "p");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 18)(31, "h6")(32, "strong");
    \u0275\u0275text(33, "Ordre:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "p");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 17)(37, "div", 18)(38, "h6")(39, "strong");
    \u0275\u0275text(40, "Statut:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div");
    \u0275\u0275template(42, AdminrhCategorieComponent_div_84_span_42_Template, 2, 0, "span", 97)(43, AdminrhCategorieComponent_div_84_span_43_Template, 2, 0, "span", 98)(44, AdminrhCategorieComponent_div_84_span_44_Template, 2, 0, "span", 62)(45, AdminrhCategorieComponent_div_84_span_45_Template, 2, 0, "span", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 18)(47, "h6")(48, "strong");
    \u0275\u0275text(49, "Cr\xE9\xE9e le:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "p");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r2.selectedCategorie.couleur);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getIconClass(ctx_r2.selectedCategorie.icone));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.selectedCategorie.nom);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedCategorie.slug);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedCategorie.description);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.selectedCategorie.nombre_formations);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedCategorie.ordre);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.selectedCategorie.est_active);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.selectedCategorie.est_active);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedCategorie.est_visible);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.selectedCategorie.est_visible);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(ctx_r2.selectedCategorie.created_at));
  }
}
function AdminrhCategorieComponent_p_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, ' \xCAtes-vous s\xFBr de vouloir supprimer la cat\xE9gorie "');
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, '" ? ');
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedCategorie.nom);
  }
}
var AdminrhCategorieComponent = class _AdminrhCategorieComponent {
  categorieService;
  formBuilder;
  categories = [];
  loading = false;
  categorieForm;
  editMode = false;
  selectedCategorie = null;
  constructor(categorieService, formBuilder) {
    this.categorieService = categorieService;
    this.formBuilder = formBuilder;
    this.categorieForm = this.formBuilder.group({
      nom: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required]],
      short_description: [""],
      couleur: ["#3B82F6", [Validators.required]],
      icone: ["code", [Validators.required]],
      ordre: [1, [Validators.required, Validators.min(1)]],
      est_active: [true],
      est_visible: [true],
      parent_id: [null]
    });
  }
  ngOnInit() {
    this.loadCategories();
  }
  loadCategories() {
    this.loading = true;
    this.categorieService.getCategories().subscribe({
      next: (response) => {
        if (response.status) {
          this.categories = response.data.categories;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error("Erreur lors du chargement des cat\xE9gories:", error);
        this.loading = false;
      }
    });
  }
  onSubmit() {
    if (this.categorieForm.valid) {
      const formData = this.categorieForm.value;
      if (this.editMode && this.selectedCategorie) {
        this.updateCategorie(formData);
      } else {
        this.createCategorie(formData);
      }
    }
  }
  createCategorie(categorieData) {
    this.categorieService.createCategorie(categorieData).subscribe({
      next: (response) => {
        if (response.status) {
          this.loadCategories();
          this.resetForm();
        }
      },
      error: (error) => {
        console.error("Erreur lors de la cr\xE9ation:", error);
      }
    });
  }
  updateCategorie(categorieData) {
    if (this.selectedCategorie) {
      this.categorieService.updateCategorie(this.selectedCategorie.id, categorieData).subscribe({
        next: (response) => {
          if (response.status) {
            this.loadCategories();
            this.resetForm();
          }
        },
        error: (error) => {
          console.error("Erreur lors de la mise \xE0 jour:", error);
        }
      });
    }
  }
  editCategorie(categorie) {
    this.editMode = true;
    this.selectedCategorie = categorie;
    this.categorieForm.patchValue({
      nom: categorie.nom,
      description: categorie.description,
      short_description: categorie.short_description,
      couleur: categorie.couleur,
      icone: categorie.icone,
      ordre: categorie.ordre,
      est_active: categorie.est_active,
      est_visible: categorie.est_visible,
      parent_id: categorie.parent_id
    });
  }
  viewCategorie(categorie) {
    this.selectedCategorie = categorie;
  }
  deleteCategorie(categorie) {
    this.selectedCategorie = categorie;
  }
  confirmDelete() {
    console.log("Suppression de la cat\xE9gorie:", this.selectedCategorie?.nom);
  }
  resetForm() {
    this.editMode = false;
    this.selectedCategorie = null;
    this.categorieForm.reset({
      nom: "",
      description: "",
      short_description: "",
      couleur: "#3B82F6",
      icone: "code",
      ordre: 1,
      est_active: true,
      est_visible: true,
      parent_id: null
    });
  }
  getIconClass(iconeName) {
    return `isax isax-${iconeName || "code"}`;
  }
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  static \u0275fac = function AdminrhCategorieComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhCategorieComponent)(\u0275\u0275directiveInject(CategorieService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhCategorieComponent, selectors: [["app-adminrh-categorie"]], decls: 100, vars: 12, consts: [[1, "categorie"], [1, "page-title", "d-flex", "align-items-center", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_categorie", 1, "btn", "btn-secondary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle", "me-1"], [1, "p-0"], [1, "categories-list"], ["class", "card mb-3", 4, "ngFor", "ngForOf"], ["class", "text-center", 4, "ngIf"], ["class", "text-center py-4", 4, "ngIf"], ["id", "add_categorie", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close", 3, "click"], [1, "isax", "isax-close-circle5"], [3, "ngSubmit", "formGroup"], [1, "modal-body", "pb-0"], [1, "row"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "nom", "placeholder", "Ex: D\xE9veloppement Web", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "formControlName", "icone", "placeholder", "Ex: code, cloud, users", 1, "form-control"], [1, "text-muted"], ["rows", "3", "formControlName", "description", "placeholder", "Description d\xE9taill\xE9e de la cat\xE9gorie", 1, "form-control"], ["type", "text", "formControlName", "short_description", "placeholder", "Br\xE8ve description (optionnelle)", 1, "form-control"], ["type", "color", "formControlName", "couleur", 1, "form-control", "form-control-color"], ["type", "number", "formControlName", "ordre", "min", "1", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "formControlName", "est_active", "id", "est_active", 1, "form-check-input"], ["for", "est_active", 1, "form-check-label"], ["type", "checkbox", "formControlName", "est_visible", "id", "est_visible", 1, "form-check-input"], ["for", "est_visible", 1, "form-check-label"], ["class", "mb-3", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light", "rounded-pill", "me-2", 3, "click"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill", 3, "disabled"], ["id", "view_categorie", 1, "modal", "fade"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], ["class", "modal-body", 4, "ngIf"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-body", "text-center", "custom-modal-body"], [1, "avatar", "avatar-lg", "bg-gray-100", "rounded-circle", "mb-2"], [1, "isax", "isax-trash", "fs-24", "text-danger"], [1, "mb-2"], [1, "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill", 3, "click"], [1, "card", "mb-3"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-md-1"], [1, "categorie-icon", "d-flex", "align-items-center", "justify-content-center", "rounded", 2, "width", "50px", "height", "50px"], [2, "font-size", "1.5rem", "color", "white"], [1, "mb-1"], [1, "text-muted", "mb-1", "small"], [1, "col-md-3"], [1, "d-flex", "flex-wrap", "gap-1"], ["class", "badge bg-success", 4, "ngIf"], ["class", "badge bg-secondary", 4, "ngIf"], ["class", "badge bg-primary", 4, "ngIf"], ["class", "badge bg-warning", 4, "ngIf"], [1, "text-muted", "d-block", "mt-1"], [1, "col-md-2"], [1, "d-flex", "justify-content-end"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-sm", "btn-outline-secondary", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_categorie", 1, "dropdown-item", 3, "click"], [1, "isax", "isax-eye", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_categorie", 1, "dropdown-item", 3, "click"], [1, "isax", "isax-edit-2", "me-2"], [1, "dropdown-divider"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "text-danger", 3, "click"], [1, "isax", "isax-trash", "me-2"], [1, "badge", "bg-success"], [1, "badge", "bg-secondary"], [1, "badge", "bg-primary"], [1, "badge", "bg-warning"], [1, "text-center"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "text-center", "py-4"], [1, "empty-state"], [1, "isax", "isax-category", "text-muted", 2, "font-size", "4rem"], [1, "text-muted", "mt-3"], ["data-bs-toggle", "modal", "data-bs-target", "#add_categorie", 1, "btn", "btn-secondary"], [1, "isax", "isax-add-circle", "me-2"], [1, "text-danger"], [1, "d-flex", "align-items-center", "justify-content-center", "p-3", "rounded", 2, "max-width", "200px", "height", "80px"], [2, "font-size", "2rem", "color", "white"], [1, "modal-body"], [1, "text-center", "mb-4"], [1, "d-flex", "align-items-center", "justify-content-center", "p-4", "rounded", "mx-auto", 2, "width", "150px", "height", "150px"], [2, "font-size", "4rem", "color", "white"], ["class", "badge bg-success me-1", 4, "ngIf"], ["class", "badge bg-secondary me-1", 4, "ngIf"], [1, "badge", "bg-success", "me-1"], [1, "badge", "bg-secondary", "me-1"]], template: function AdminrhCategorieComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
      \u0275\u0275text(3, "Cat\xE9gories de Formation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "a", 2);
      \u0275\u0275element(6, "i", 3);
      \u0275\u0275text(7, "Ajouter Cat\xE9gorie ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 4)(9, "div", 5);
      \u0275\u0275template(10, AdminrhCategorieComponent_div_10_Template, 41, 12, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, AdminrhCategorieComponent_div_11_Template, 4, 0, "div", 7)(12, AdminrhCategorieComponent_div_12_Template, 10, 0, "div", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "h5");
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 13);
      \u0275\u0275listener("click", function AdminrhCategorieComponent_Template_button_click_19_listener() {
        return ctx.resetForm();
      });
      \u0275\u0275element(20, "i", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "form", 15);
      \u0275\u0275listener("ngSubmit", function AdminrhCategorieComponent_Template_form_ngSubmit_21_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(22, "div", 16)(23, "div", 17)(24, "div", 18)(25, "div", 19)(26, "label", 20);
      \u0275\u0275text(27, "Nom de la cat\xE9gorie *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "input", 21);
      \u0275\u0275template(29, AdminrhCategorieComponent_div_29_Template, 2, 0, "div", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 18)(31, "div", 19)(32, "label", 20);
      \u0275\u0275text(33, "Ic\xF4ne *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "input", 23);
      \u0275\u0275elementStart(35, "small", 24);
      \u0275\u0275text(36, "Nom de l'ic\xF4ne (sans pr\xE9fixe isax-)");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "div", 19)(38, "label", 20);
      \u0275\u0275text(39, "Description *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "textarea", 25);
      \u0275\u0275template(41, AdminrhCategorieComponent_div_41_Template, 2, 0, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 19)(43, "label", 20);
      \u0275\u0275text(44, "Description courte");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "input", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 17)(47, "div", 18)(48, "div", 19)(49, "label", 20);
      \u0275\u0275text(50, "Couleur *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(51, "input", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 18)(53, "div", 19)(54, "label", 20);
      \u0275\u0275text(55, "Ordre d'affichage *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(56, "input", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "div", 17)(58, "div", 18)(59, "div", 19)(60, "div", 29);
      \u0275\u0275element(61, "input", 30);
      \u0275\u0275elementStart(62, "label", 31);
      \u0275\u0275text(63, " Cat\xE9gorie active ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(64, "div", 18)(65, "div", 19)(66, "div", 29);
      \u0275\u0275element(67, "input", 32);
      \u0275\u0275elementStart(68, "label", 33);
      \u0275\u0275text(69, " Visible publiquement ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(70, AdminrhCategorieComponent_div_70_Template, 5, 4, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 35)(72, "button", 36);
      \u0275\u0275listener("click", function AdminrhCategorieComponent_Template_button_click_72_listener() {
        return ctx.resetForm();
      });
      \u0275\u0275text(73, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "button", 37);
      \u0275\u0275text(75);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(76, "div", 38)(77, "div", 10)(78, "div", 11)(79, "div", 12)(80, "h5");
      \u0275\u0275text(81, "D\xE9tails de la Cat\xE9gorie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "button", 39);
      \u0275\u0275element(83, "i", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(84, AdminrhCategorieComponent_div_84_Template, 52, 14, "div", 40);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(85, "div", 41)(86, "div", 42)(87, "div", 11)(88, "div", 43)(89, "span", 44);
      \u0275\u0275element(90, "i", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div")(92, "h4", 46);
      \u0275\u0275text(93, "Supprimer la Cat\xE9gorie");
      \u0275\u0275elementEnd();
      \u0275\u0275template(94, AdminrhCategorieComponent_p_94_Template, 5, 1, "p", 34);
      \u0275\u0275elementStart(95, "div", 47)(96, "a", 48);
      \u0275\u0275text(97, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "a", 49);
      \u0275\u0275listener("click", function AdminrhCategorieComponent_Template_a_click_98_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275text(99, "Oui, Supprimer");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      let tmp_5_0;
      let tmp_6_0;
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.categories.length === 0);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.editMode ? "Modifier la Cat\xE9gorie" : "Ajouter une Nouvelle Cat\xE9gorie");
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.categorieForm);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.categorieForm.get("nom")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.categorieForm.get("nom")) == null ? null : tmp_5_0.touched));
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.categorieForm.get("description")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.categorieForm.get("description")) == null ? null : tmp_6_0.touched));
      \u0275\u0275advance(29);
      \u0275\u0275property("ngIf", ctx.categorieForm.value.couleur && ctx.categorieForm.value.icone);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.categorieForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.editMode ? "Modifier" : "Cr\xE9er", " ");
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.selectedCategorie);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.selectedCategorie);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, FormsModule], styles: ["\n\n.categorie[_ngcontent-%COMP%]   .categories-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n  border: 1px solid #e9ecef;\n}\n.categorie[_ngcontent-%COMP%]   .categories-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border-color: #d1ecf1;\n}\n.categorie[_ngcontent-%COMP%]   .categories-list[_ngcontent-%COMP%]   .categorie-icon[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease;\n}\n.categorie[_ngcontent-%COMP%]   .categories-list[_ngcontent-%COMP%]   .categorie-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.categorie[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  padding: 3rem 1rem;\n}\n.categorie[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.categorie[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n}\n.categorie[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n}\n.categorie[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  border-color: #adb5bd;\n}\n.categorie[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n}\n.categorie[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 16px;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=adminrh-categorie.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhCategorieComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-categorie", imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule
    ], template: `<div class="categorie">\r
    <div class="page-title d-flex align-items-center justify-content-between">\r
        <h5>Cat\xE9gories de Formation</h5>\r
        <div>\r
            <a href="javascript:void(0);" class="btn btn-secondary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_categorie">\r
                <i class="isax isax-add-circle me-1"></i>Ajouter Cat\xE9gorie\r
            </a>\r
        </div>\r
    </div>\r
    \r
    <div class="p-0">\r
        <!-- Liste des cat\xE9gories -->\r
        <div class="categories-list">\r
            <div class="card mb-3" *ngFor="let categorie of categories">\r
                <div class="card-body">\r
                    <div class="row align-items-center">\r
                        <!-- Ic\xF4ne et couleur -->\r
                        <div class="col-md-1">\r
                            <div class="categorie-icon d-flex align-items-center justify-content-center rounded" \r
                                 [style.background-color]="categorie.couleur" \r
                                 style="width: 50px; height: 50px;">\r
                                <i [class]="getIconClass(categorie.icone)" \r
                                   style="font-size: 1.5rem; color: white;"></i>\r
                            </div>\r
                        </div>\r
                        \r
                        <!-- Informations principales -->\r
                        <div class="col-md-6">\r
                            <h6 class="mb-1">{{ categorie.nom }}</h6>\r
                            <p class="text-muted mb-1 small">{{ categorie.description }}</p>\r
                            <small class="text-muted">{{ categorie.nombre_formations }} formation(s)</small>\r
                        </div>\r
                        \r
                        <!-- Badges de statut -->\r
                        <div class="col-md-3">\r
                            <div class="d-flex flex-wrap gap-1">\r
                                <span class="badge bg-success" *ngIf="categorie.est_active">Active</span>\r
                                <span class="badge bg-secondary" *ngIf="!categorie.est_active">Inactive</span>\r
                                <span class="badge bg-primary" *ngIf="categorie.est_visible">Visible</span>\r
                                <span class="badge bg-warning" *ngIf="!categorie.est_visible">Masqu\xE9e</span>\r
                            </div>\r
                            <small class="text-muted d-block mt-1">Ordre: {{ categorie.ordre }}</small>\r
                        </div>\r
                        \r
                        <!-- Actions -->\r
                        <div class="col-md-2">\r
                            <div class="d-flex justify-content-end">\r
                                <div class="dropdown">\r
                                    <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">\r
                                        Actions\r
                                    </button>\r
                                    <ul class="dropdown-menu">\r
                                        <li>\r
                                            <a class="dropdown-item" href="javascript:void(0);" \r
                                               (click)="viewCategorie(categorie)"\r
                                               data-bs-toggle="modal" \r
                                               data-bs-target="#view_categorie">\r
                                                <i class="isax isax-eye me-2"></i>Voir\r
                                            </a>\r
                                        </li>\r
                                        <li>\r
                                            <a class="dropdown-item" href="javascript:void(0);" \r
                                               (click)="editCategorie(categorie)"\r
                                               data-bs-toggle="modal" \r
                                               data-bs-target="#add_categorie">\r
                                                <i class="isax isax-edit-2 me-2"></i>Modifier\r
                                            </a>\r
                                        </li>\r
                                        <li><hr class="dropdown-divider"></li>\r
                                        <li>\r
                                            <a class="dropdown-item text-danger" href="javascript:void(0);" \r
                                               (click)="deleteCategorie(categorie)"\r
                                               data-bs-toggle="modal" \r
                                               data-bs-target="#delete_modal">\r
                                                <i class="isax isax-trash me-2"></i>Supprimer\r
                                            </a>\r
                                        </li>\r
                                    </ul>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- \xC9tats de chargement et vide -->\r
        <div class="text-center" *ngIf="loading">\r
            <div class="spinner-border" role="status">\r
                <span class="visually-hidden">Chargement...</span>\r
            </div>\r
        </div>\r
\r
        <div class="text-center py-4" *ngIf="!loading && categories.length === 0">\r
            <div class="empty-state">\r
                <i class="isax isax-category text-muted" style="font-size: 4rem;"></i>\r
                <h6 class="text-muted mt-3">Aucune cat\xE9gorie trouv\xE9e</h6>\r
                <p class="text-muted">Commencez par cr\xE9er votre premi\xE8re cat\xE9gorie de formation</p>\r
                <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#add_categorie">\r
                    <i class="isax isax-add-circle me-2"></i>Ajouter une cat\xE9gorie\r
                </button>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- Modales inchang\xE9es -->\r
<!-- Add/Edit Categorie Modal -->\r
<div class="modal fade" id="add_categorie">\r
    <div class="modal-dialog modal-dialog-centered modal-lg">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5>{{ editMode ? 'Modifier la Cat\xE9gorie' : 'Ajouter une Nouvelle Cat\xE9gorie' }}</h5>\r
                <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close" (click)="resetForm()">\r
                    <i class="isax isax-close-circle5"></i>\r
                </button>\r
            </div>\r
            <form [formGroup]="categorieForm" (ngSubmit)="onSubmit()">\r
                <div class="modal-body pb-0">\r
                    <div class="row">\r
                        <div class="col-md-6">\r
                            <div class="mb-3">\r
                                <label class="form-label">Nom de la cat\xE9gorie *</label>\r
                                <input type="text" class="form-control" formControlName="nom" placeholder="Ex: D\xE9veloppement Web">\r
                                <div class="text-danger" *ngIf="categorieForm.get('nom')?.invalid && categorieForm.get('nom')?.touched">\r
                                    Le nom est requis (min. 2 caract\xE8res)\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <div class="col-md-6">\r
                            <div class="mb-3">\r
                                <label class="form-label">Ic\xF4ne *</label>\r
                                <input type="text" class="form-control" formControlName="icone" placeholder="Ex: code, cloud, users">\r
                                <small class="text-muted">Nom de l'ic\xF4ne (sans pr\xE9fixe isax-)</small>\r
                            </div>\r
                        </div>\r
                    </div>\r
                    \r
                    <div class="mb-3">\r
                        <label class="form-label">Description *</label>\r
                        <textarea class="form-control" rows="3" formControlName="description" placeholder="Description d\xE9taill\xE9e de la cat\xE9gorie"></textarea>\r
                        <div class="text-danger" *ngIf="categorieForm.get('description')?.invalid && categorieForm.get('description')?.touched">\r
                            La description est requise\r
                        </div>\r
                    </div>\r
\r
                    <div class="mb-3">\r
                        <label class="form-label">Description courte</label>\r
                        <input type="text" class="form-control" formControlName="short_description" placeholder="Br\xE8ve description (optionnelle)">\r
                    </div>\r
\r
                    <div class="row">\r
                        <div class="col-md-6">\r
                            <div class="mb-3">\r
                                <label class="form-label">Couleur *</label>\r
                                <input type="color" class="form-control form-control-color" formControlName="couleur">\r
                            </div>\r
                        </div>\r
                        <div class="col-md-6">\r
                            <div class="mb-3">\r
                                <label class="form-label">Ordre d'affichage *</label>\r
                                <input type="number" class="form-control" formControlName="ordre" min="1">\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="row">\r
                        <div class="col-md-6">\r
                            <div class="mb-3">\r
                                <div class="form-check">\r
                                    <input class="form-check-input" type="checkbox" formControlName="est_active" id="est_active">\r
                                    <label class="form-check-label" for="est_active">\r
                                        Cat\xE9gorie active\r
                                    </label>\r
                                </div>\r
                            </div>\r
                        </div>\r
                        <div class="col-md-6">\r
                            <div class="mb-3">\r
                                <div class="form-check">\r
                                    <input class="form-check-input" type="checkbox" formControlName="est_visible" id="est_visible">\r
                                    <label class="form-check-label" for="est_visible">\r
                                        Visible publiquement\r
                                    </label>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Aper\xE7u de la cat\xE9gorie -->\r
                    <div class="mb-3" *ngIf="categorieForm.value.couleur && categorieForm.value.icone">\r
                        <label class="form-label">Aper\xE7u</label>\r
                        <div class="d-flex align-items-center justify-content-center p-3 rounded" \r
                             [style.background-color]="categorieForm.value.couleur" \r
                             style="max-width: 200px; height: 80px;">\r
                            <i [class]="getIconClass(categorieForm.value.icone)" \r
                               style="font-size: 2rem; color: white;"></i>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="modal-footer">\r
                    <button class="btn btn-light rounded-pill me-2" type="button" data-bs-dismiss="modal" (click)="resetForm()">Annuler</button>\r
                    <button class="btn btn-secondary rounded-pill" type="submit" [disabled]="categorieForm.invalid" data-bs-dismiss="modal">\r
                        {{ editMode ? 'Modifier' : 'Cr\xE9er' }}\r
                    </button>\r
                </div>\r
            </form>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- View Categorie Modal -->\r
<div class="modal fade" id="view_categorie">\r
    <div class="modal-dialog modal-dialog-centered modal-lg">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5>D\xE9tails de la Cat\xE9gorie</h5>\r
                <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">\r
                    <i class="isax isax-close-circle5"></i>\r
                </button>\r
            </div>\r
            <div class="modal-body" *ngIf="selectedCategorie">\r
                <div class="text-center mb-4">\r
                    <div class="d-flex align-items-center justify-content-center p-4 rounded mx-auto" \r
                         [style.background-color]="selectedCategorie.couleur" \r
                         style="width: 150px; height: 150px;">\r
                        <i [class]="getIconClass(selectedCategorie.icone)" \r
                           style="font-size: 4rem; color: white;"></i>\r
                    </div>\r
                </div>\r
                \r
                <div class="row">\r
                    <div class="col-md-6">\r
                        <h6><strong>Nom:</strong></h6>\r
                        <p>{{ selectedCategorie.nom }}</p>\r
                    </div>\r
                    <div class="col-md-6">\r
                        <h6><strong>Slug:</strong></h6>\r
                        <p>{{ selectedCategorie.slug }}</p>\r
                    </div>\r
                </div>\r
\r
                <div class="mb-3">\r
                    <h6><strong>Description:</strong></h6>\r
                    <p>{{ selectedCategorie.description }}</p>\r
                </div>\r
\r
                <div class="row">\r
                    <div class="col-md-6">\r
                        <h6><strong>Nombre de formations:</strong></h6>\r
                        <p>{{ selectedCategorie.nombre_formations }}</p>\r
                    </div>\r
                    <div class="col-md-6">\r
                        <h6><strong>Ordre:</strong></h6>\r
                        <p>{{ selectedCategorie.ordre }}</p>\r
                    </div>\r
                </div>\r
\r
                <div class="row">\r
                    <div class="col-md-6">\r
                        <h6><strong>Statut:</strong></h6>\r
                        <div>\r
                            <span class="badge bg-success me-1" *ngIf="selectedCategorie.est_active">Active</span>\r
                            <span class="badge bg-secondary me-1" *ngIf="!selectedCategorie.est_active">Inactive</span>\r
                            <span class="badge bg-primary" *ngIf="selectedCategorie.est_visible">Visible</span>\r
                            <span class="badge bg-warning" *ngIf="!selectedCategorie.est_visible">Masqu\xE9e</span>\r
                        </div>\r
                    </div>\r
                    <div class="col-md-6">\r
                        <h6><strong>Cr\xE9\xE9e le:</strong></h6>\r
                        <p>{{ formatDate(selectedCategorie.created_at) }}</p>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- Delete Modal -->\r
<div class="modal fade" id="delete_modal">\r
    <div class="modal-dialog modal-dialog-centered">\r
        <div class="modal-content">\r
            <div class="modal-body text-center custom-modal-body">\r
                <span class="avatar avatar-lg bg-gray-100 rounded-circle mb-2">\r
                    <i class="isax isax-trash fs-24 text-danger"></i>\r
                </span>\r
                <div>\r
                    <h4 class="mb-2">Supprimer la Cat\xE9gorie</h4>\r
                    <p class="mb-3" *ngIf="selectedCategorie">\r
                        \xCAtes-vous s\xFBr de vouloir supprimer la cat\xE9gorie "<strong>{{ selectedCategorie.nom }}</strong>" ?\r
                    </p>\r
                    <div class="d-flex align-items-center justify-content-center">\r
                        <a href="javascript:void(0);" class="btn bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal">Annuler</a>\r
                        <a href="javascript:void(0);" class="btn btn-secondary rounded-pill" data-bs-dismiss="modal" (click)="confirmDelete()">Oui, Supprimer</a>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>`, styles: ["/* src/app/features/adminrh/adminrh-categorie/adminrh-categorie.component.scss */\n.categorie .categories-list .card {\n  transition: all 0.2s ease;\n  border: 1px solid #e9ecef;\n}\n.categorie .categories-list .card:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border-color: #d1ecf1;\n}\n.categorie .categories-list .categorie-icon {\n  transition: transform 0.2s ease;\n}\n.categorie .categories-list .categorie-icon:hover {\n  transform: scale(1.1);\n}\n.categorie .empty-state {\n  padding: 3rem 1rem;\n}\n.categorie .empty-state i {\n  opacity: 0.5;\n}\n.categorie .badge {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n}\n.categorie .dropdown-toggle {\n  border: 1px solid #ddd;\n}\n.categorie .dropdown-toggle:hover {\n  background-color: #f8f9fa;\n  border-color: #adb5bd;\n}\n.categorie .dropdown-item {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n}\n.categorie .dropdown-item i {\n  width: 16px;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=adminrh-categorie.component.css.map */\n"] }]
  }], () => [{ type: CategorieService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhCategorieComponent, { className: "AdminrhCategorieComponent", filePath: "src/app/features/adminrh/adminrh-categorie/adminrh-categorie.component.ts", lineNumber: 16 });
})();
export {
  AdminrhCategorieComponent
};
//# sourceMappingURL=chunk-43XDEDOU.js.map
