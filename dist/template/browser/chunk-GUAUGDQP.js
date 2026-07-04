import {
  PermissionService
} from "./chunk-HPF6XDYM.js";
import {
  AuthService
} from "./chunk-GD4TWLVQ.js";
import "./chunk-K7E3GT3E.js";
import {
  routes
} from "./chunk-OVFIVR43.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-IKOSZIEY.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf
} from "./chunk-5DIP3EXV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTSSTHJF.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/features/adminrh/adminrh-permission/adminrh-permission.component.ts
function AdminrhPermissionComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "button", 52);
    \u0275\u0275listener("click", function AdminrhPermissionComponent_div_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275element(2, "i", 53);
    \u0275\u0275text(3, " Nouvelle Permission ");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhPermissionComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 56);
    \u0275\u0275listener("click", function AdminrhPermissionComponent_div_13_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.successMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMessage, " ");
  }
}
function AdminrhPermissionComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "i", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 56);
    \u0275\u0275listener("click", function AdminrhPermissionComponent_div_14_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.errorMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function AdminrhPermissionComponent_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    \u0275\u0275property("value", option_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r5, " ");
  }
}
function AdminrhPermissionComponent_th_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 60);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function AdminrhPermissionComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 61)(2, "div", 62)(3, "span", 63);
    \u0275\u0275text(4, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 64);
    \u0275\u0275text(6, "Chargement des permissions...");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.isSuperAdmin ? 6 : 5);
  }
}
function AdminrhPermissionComponent_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 61);
    \u0275\u0275element(2, "i", 65);
    \u0275\u0275elementStart(3, "p", 25);
    \u0275\u0275text(4, "Aucune permission trouv\xE9e");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.isSuperAdmin ? 6 : 5);
  }
}
function AdminrhPermissionComponent_tr_50_td_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 60)(1, "div", 66)(2, "button", 67);
    \u0275\u0275text(3, " Actions ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 68)(5, "li")(6, "a", 69);
    \u0275\u0275listener("click", function AdminrhPermissionComponent_tr_50_td_12_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const permission_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal(permission_r7));
    });
    \u0275\u0275element(7, "i", 70);
    \u0275\u0275text(8, " Modifier ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "li");
    \u0275\u0275element(10, "hr", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "li")(12, "a", 72);
    \u0275\u0275listener("click", function AdminrhPermissionComponent_tr_50_td_12_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const permission_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deletePermission(permission_r7));
    });
    \u0275\u0275element(13, "i", 73);
    \u0275\u0275text(14, " Supprimer ");
    \u0275\u0275elementEnd()()()()();
  }
}
function AdminrhPermissionComponent_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AdminrhPermissionComponent_tr_50_td_12_Template, 15, 0, "td", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const permission_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(permission_r7.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(permission_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 5, permission_r7.created_at, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 8, permission_r7.updated_at, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isSuperAdmin);
  }
}
function AdminrhPermissionComponent_div_51_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 77)(1, "a", 78);
    \u0275\u0275listener("click", function AdminrhPermissionComponent_div_51_li_8_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(1));
    });
    \u0275\u0275text(2, "1");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhPermissionComponent_div_51_li_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 84)(1, "span", 85);
    \u0275\u0275text(2, "...");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhPermissionComponent_div_51_li_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 77)(1, "a", 78);
    \u0275\u0275listener("click", function AdminrhPermissionComponent_div_51_li_10_Template_a_click_1_listener() {
      const page_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(page_r11));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r11 === ctx_r1.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", page_r11, " ");
  }
}
function AdminrhPermissionComponent_div_51_li_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 84)(1, "span", 85);
    \u0275\u0275text(2, "...");
    \u0275\u0275elementEnd()();
  }
}
function AdminrhPermissionComponent_div_51_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 77)(1, "a", 78);
    \u0275\u0275listener("click", function AdminrhPermissionComponent_div_51_li_12_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.totalPages));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.totalPages);
  }
}
function AdminrhPermissionComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "nav", 75)(4, "ul", 76)(5, "li", 77)(6, "a", 78);
    \u0275\u0275listener("click", function AdminrhPermissionComponent_div_51_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(7, "i", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AdminrhPermissionComponent_div_51_li_8_Template, 3, 0, "li", 80)(9, AdminrhPermissionComponent_div_51_li_9_Template, 3, 0, "li", 81)(10, AdminrhPermissionComponent_div_51_li_10_Template, 3, 3, "li", 82)(11, AdminrhPermissionComponent_div_51_li_11_Template, 3, 0, "li", 81)(12, AdminrhPermissionComponent_div_51_li_12_Template, 3, 1, "li", 80);
    \u0275\u0275elementStart(13, "li", 77)(14, "a", 78);
    \u0275\u0275listener("click", function AdminrhPermissionComponent_div_51_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(15, "i", 83);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Affichage de ", ctx_r1.getStartIndex(), " \xE0 ", ctx_r1.getEndIndex(), " sur ", ctx_r1.totalItems, " r\xE9sultats ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("tabindex", ctx_r1.currentPage === 1 ? -1 : null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getPaginationArray()[0] > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPaginationArray()[0] > 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getPaginationArray());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPaginationArray()[ctx_r1.getPaginationArray().length - 1] < ctx_r1.totalPages - 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPaginationArray()[ctx_r1.getPaginationArray().length - 1] < ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275attribute("tabindex", ctx_r1.currentPage === ctx_r1.totalPages ? -1 : null);
  }
}
function AdminrhPermissionComponent_div_67_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Le nom est requis");
    \u0275\u0275elementEnd();
  }
}
function AdminrhPermissionComponent_div_67_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Le nom doit contenir au moins 3 caract\xE8res");
    \u0275\u0275elementEnd();
  }
}
function AdminrhPermissionComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275template(1, AdminrhPermissionComponent_div_67_small_1_Template, 2, 0, "small", 30)(2, AdminrhPermissionComponent_div_67_small_2_Template, 2, 0, "small", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["name"].hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["name"].hasError("minlength"));
  }
}
function AdminrhPermissionComponent_span_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 87);
  }
}
function AdminrhPermissionComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 88);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r1.showModal);
  }
}
var SUPERADMIN_ONLY_PERMISSIONS = [
  "gerer systeme",
  "gerer roles",
  "lister roles",
  "creer roles",
  "modifier roles",
  "supprimer roles",
  "lister permissions",
  "creer permissions",
  "modifier permissions",
  "supprimer permissions",
  "voir logs",
  "sauvegarder systeme",
  "mode maintenance",
  "lister clients",
  "creer clients",
  "modifier clients",
  "supprimer clients",
  "gerer contrats clients"
];
var SUPERADMIN_DELETE_KEYWORDS = ["supprimer"];
var AdminrhPermissionComponent = class _AdminrhPermissionComponent {
  permissionService;
  authService;
  fb;
  routes = routes;
  isSuperAdmin = false;
  // État des données
  permissions = [];
  filteredPermissions = [];
  paginatedPermissions = [];
  // Formulaire et modal
  permissionForm;
  isEditing = false;
  selectedPermission = null;
  showModal = false;
  // États de l'interface
  loading = false;
  searchText = "";
  successMessage = "";
  errorMessage = "";
  // Configuration de la pagination
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  totalPages = 0;
  itemsPerPageOptions = [5, 10, 25, 50];
  constructor(permissionService, authService, fb) {
    this.permissionService = permissionService;
    this.authService = authService;
    this.fb = fb;
    this.initializeForm();
    const user = this.authService.getUser();
    const roles = user?.roles || [];
    this.isSuperAdmin = roles.some((r) => r.toLowerCase() === "super admin" || r.toLowerCase() === "super admin rh holding");
  }
  ngOnInit() {
    this.loadPermissions();
  }
  // ============= INITIALISATION =============
  initializeForm() {
    this.permissionForm = this.fb.group({
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
          Validators.pattern(/^[a-zA-Z0-9\s\-_.]+$/)
          // Caractères autorisés
        ]
      ],
      guard_name: ["web", [Validators.required]]
    });
  }
  // ============= CHARGEMENT DES DONNÉES =============
  loadPermissions() {
    this.loading = true;
    console.log("\u{1F50D} Chargement des permissions...");
    this.permissionService.getAllPermissions().subscribe({
      next: (response) => {
        console.log("\u2705 R\xE9ponse des permissions:", response);
        this.permissions = this.extractPermissionsFromResponse(response);
        console.log(`\u2705 ${this.permissions.length} permissions charg\xE9es`);
        this.initializeDataDisplay();
        this.loading = false;
      },
      error: (error) => {
        console.error("\u274C Erreur lors du chargement des permissions:", error);
        this.handleError(error, "chargement");
        this.permissions = [];
        this.initializeDataDisplay();
        this.loading = false;
      }
    });
  }
  extractPermissionsFromResponse(response) {
    let list = [];
    if (Array.isArray(response)) {
      list = response;
    } else if (response?.data && Array.isArray(response.data)) {
      list = response.data;
    } else if (response?.success && Array.isArray(response.data)) {
      list = response.data;
    } else if (response?.permissions && Array.isArray(response.permissions)) {
      list = response.permissions;
    } else {
      console.warn("\u26A0\uFE0F Structure de r\xE9ponse non reconnue:", response);
      return [];
    }
    if (!this.isSuperAdmin) {
      list = list.filter((p) => !this.isRestrictedForAdminRh(p.name));
    }
    return list;
  }
  isRestrictedForAdminRh(name) {
    const lower = name.toLowerCase().trim();
    if (SUPERADMIN_ONLY_PERMISSIONS.includes(lower))
      return true;
    if (SUPERADMIN_DELETE_KEYWORDS.some((kw) => lower.startsWith(kw)))
      return true;
    return false;
  }
  initializeDataDisplay() {
    this.filteredPermissions = [...this.permissions];
    this.currentPage = 1;
    this.updatePagination();
  }
  // ============= RECHERCHE ET FILTRAGE =============
  searchPermissions() {
    const searchTerm = this.searchText.trim().toLowerCase();
    if (!searchTerm) {
      this.filteredPermissions = [...this.permissions];
    } else {
      this.filteredPermissions = this.permissions.filter((permission) => permission.name.toLowerCase().includes(searchTerm) || permission.guard_name.toLowerCase().includes(searchTerm));
    }
    this.currentPage = 1;
    this.updatePagination();
    console.log(`\u{1F50D} Recherche "${searchTerm}": ${this.filteredPermissions.length} r\xE9sultat(s)`);
  }
  clearSearch() {
    this.searchText = "";
    this.searchPermissions();
  }
  // ============= PAGINATION =============
  updatePagination() {
    this.totalItems = this.filteredPermissions.length;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    } else if (this.currentPage < 1) {
      this.currentPage = 1;
    }
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedPermissions = this.filteredPermissions.slice(startIndex, endIndex);
  }
  onPageChange(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }
  onItemsPerPageChange() {
    this.currentPage = 1;
    this.updatePagination();
  }
  getPaginationArray() {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }
  getStartIndex() {
    return Math.min((this.currentPage - 1) * this.itemsPerPage + 1, this.totalItems);
  }
  getEndIndex() {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }
  // ============= GESTION DES MODALS =============
  openModal(permission) {
    this.showModal = true;
    if (permission) {
      this.isEditing = true;
      this.selectedPermission = permission;
      this.permissionForm.patchValue({
        name: permission.name,
        guard_name: permission.guard_name
      });
      console.log("\u{1F4DD} Mode \xE9dition:", permission.name);
    } else {
      this.isEditing = false;
      this.selectedPermission = null;
      this.permissionForm.reset({
        guard_name: "web"
      });
      console.log("\u2795 Mode cr\xE9ation");
    }
  }
  closeModal() {
    this.showModal = false;
    this.permissionForm.reset({ guard_name: "web" });
    this.selectedPermission = null;
    this.isEditing = false;
    this.clearMessages();
  }
  // ============= CRUD OPERATIONS =============
  onSubmit() {
    if (this.permissionForm.invalid) {
      this.markFormGroupTouched();
      return;
    }
    this.loading = true;
    const permissionData = this.sanitizeFormData(this.permissionForm.value);
    if (this.isEditing && this.selectedPermission) {
      this.updatePermission(permissionData);
    } else {
      this.createPermission(permissionData);
    }
  }
  createPermission(permissionData) {
    console.log("\u2795 Cr\xE9ation d'une permission:", permissionData);
    this.permissionService.createPermission(permissionData).subscribe({
      next: (response) => {
        console.log("\u2705 Permission cr\xE9\xE9e:", response);
        this.showSuccess("Permission cr\xE9\xE9e avec succ\xE8s");
        this.loadPermissions();
        this.closeModal();
        this.loading = false;
      },
      error: (error) => {
        this.handleError(error, "cr\xE9ation");
        this.loading = false;
      }
    });
  }
  updatePermission(permissionData) {
    if (!this.selectedPermission)
      return;
    console.log("\u{1F4DD} Mise \xE0 jour de la permission:", this.selectedPermission.id, permissionData);
    this.permissionService.updatePermission(this.selectedPermission.id, permissionData).subscribe({
      next: (response) => {
        console.log("\u2705 Permission mise \xE0 jour:", response);
        this.showSuccess("Permission mise \xE0 jour avec succ\xE8s");
        this.loadPermissions();
        this.closeModal();
        this.loading = false;
      },
      error: (error) => {
        this.handleError(error, "mise \xE0 jour");
        this.loading = false;
      }
    });
  }
  deletePermission(permission) {
    const confirmMessage = `\xCAtes-vous s\xFBr de vouloir supprimer la permission "${permission.name}" ?

Cette action est irr\xE9versible et peut affecter les r\xF4les utilisant cette permission.`;
    if (confirm(confirmMessage)) {
      this.loading = true;
      console.log("\u{1F5D1}\uFE0F Suppression de la permission:", permission.id);
      this.permissionService.deletePermission(permission.id).subscribe({
        next: (response) => {
          console.log("\u2705 Permission supprim\xE9e:", response);
          this.showSuccess(`Permission "${permission.name}" supprim\xE9e avec succ\xE8s`);
          this.loadPermissions();
          this.loading = false;
        },
        error: (error) => {
          this.handleError(error, "suppression");
          this.loading = false;
        }
      });
    }
  }
  // ============= UTILITAIRES =============
  sanitizeFormData(data) {
    return __spreadProps(__spreadValues({}, data), {
      name: data.name?.trim(),
      guard_name: data.guard_name?.trim()
    });
  }
  markFormGroupTouched() {
    Object.keys(this.permissionForm.controls).forEach((key) => {
      const control = this.permissionForm.get(key);
      control?.markAsTouched();
    });
  }
  // ============= GESTION DES ERREURS ET MESSAGES =============
  handleError(error, action) {
    console.error(`\u274C Erreur lors de la ${action}:`, error);
    if (error.status === 422 && error.error?.errors) {
      const messages = Object.values(error.error.errors).flat().join("\n");
      this.showError(messages);
    } else if (error.status === 404) {
      this.showError("Permission introuvable");
    } else if (error.status === 403) {
      this.showError("Vous n'avez pas les droits pour effectuer cette action");
    } else if (error.error?.message) {
      this.showError(error.error.message);
    } else {
      this.showError(`Erreur lors de la ${action} de la permission`);
    }
  }
  showSuccess(message) {
    this.clearMessages();
    this.successMessage = message;
    console.log("\u2705 Succ\xE8s:", message);
    setTimeout(() => {
      this.successMessage = "";
    }, 4e3);
  }
  showError(message) {
    this.clearMessages();
    this.errorMessage = message;
    console.error("\u274C Erreur:", message);
    setTimeout(() => {
      this.errorMessage = "";
    }, 5e3);
  }
  clearMessages() {
    this.successMessage = "";
    this.errorMessage = "";
  }
  // ============= TRACKBY FUNCTIONS =============
  trackByPermissionId(index, permission) {
    return permission.id;
  }
  // ============= GETTERS =============
  get f() {
    return this.permissionForm.controls;
  }
  get hasPermissions() {
    return this.permissions.length > 0;
  }
  get hasFilteredResults() {
    return this.filteredPermissions.length > 0;
  }
  get isSearching() {
    return this.searchText.trim().length > 0;
  }
  get totalGuards() {
    const guards = [...new Set(this.permissions.map((p) => p.guard_name))];
    return guards.sort();
  }
  // ============= MÉTHODES DE STATISTIQUES =============
  getPermissionsByGuard(guardName) {
    return this.permissions.filter((p) => p.guard_name === guardName);
  }
  getGuardCount(guardName) {
    return this.getPermissionsByGuard(guardName).length;
  }
  getGuardPercentage(guardName) {
    if (this.permissions.length === 0)
      return 0;
    return this.getGuardCount(guardName) / this.permissions.length * 100;
  }
  static \u0275fac = function AdminrhPermissionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminrhPermissionComponent)(\u0275\u0275directiveInject(PermissionService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminrhPermissionComponent, selectors: [["app-adminrh-permission"]], decls: 77, vars: 29, consts: [[1, "page-content"], [1, "d-md-flex", "d-block", "align-items-center", "justify-content-between", "mb-4"], [1, "my-auto", "mb-2"], [1, "mb-1"], [1, "breadcrumb", "mb-0"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], ["class", "d-flex my-xl-auto right-content align-items-center flex-wrap", 4, "ngIf"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "card", "mb-4"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "input-group"], [1, "input-group-text"], [1, "isax", "isax-search-normal-1"], ["type", "text", "placeholder", "Rechercher une permission...", 1, "form-control", 3, "ngModelChange", "keyup", "ngModel"], [1, "col-md-6", "text-md-end", "mt-3", "mt-md-0"], [1, "d-flex", "align-items-center", "justify-content-md-end", "gap-3"], [1, "d-flex", "align-items-center"], [1, "form-label", "mb-0", "me-2"], [1, "form-select", "form-select-sm", 2, "width", "auto", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "text-muted"], [1, "card"], [1, "table-responsive"], [1, "table", "table-hover"], ["class", "text-end", 4, "ngIf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-between align-items-center mt-4", 4, "ngIf"], ["tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "name", "placeholder", "Ex: cr\xE9er-utilisateur, modifier-cours...", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "isax", "isax-add", "me-2"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "isax", "isax-tick-circle", "me-2"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "isax", "isax-close-circle", "me-2"], [3, "value"], [1, "text-end"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2", "text-muted"], [1, "isax", "isax-box", "fs-48", "text-muted", "mb-3", "d-block"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-sm", "btn-light", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"], [1, "isax", "isax-edit", "me-2"], [1, "dropdown-divider"], ["href", "javascript:void(0);", 1, "dropdown-item", "text-danger", 3, "click"], [1, "isax", "isax-trash", "me-2"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-4"], ["aria-label", "Pagination des permissions"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], ["href", "javascript:void(0);", 1, "page-link", 3, "click"], [1, "isax", "isax-arrow-left-2"], ["class", "page-item", 4, "ngIf"], ["class", "page-item disabled", 4, "ngIf"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "isax", "isax-arrow-right-2"], [1, "page-item", "disabled"], [1, "page-link"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "modal-backdrop", "fade"]], template: function AdminrhPermissionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
      \u0275\u0275text(4, "Gestion des Permissions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "nav")(6, "ol", 4)(7, "li", 5)(8, "a", 6);
      \u0275\u0275text(9, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "li", 7);
      \u0275\u0275text(11, "Permissions");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(12, AdminrhPermissionComponent_div_12_Template, 4, 0, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, AdminrhPermissionComponent_div_13_Template, 4, 1, "div", 9)(14, AdminrhPermissionComponent_div_14_Template, 4, 1, "div", 10);
      \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "span", 16);
      \u0275\u0275element(21, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhPermissionComponent_Template_input_ngModelChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return $event;
      });
      \u0275\u0275listener("keyup", function AdminrhPermissionComponent_Template_input_keyup_22_listener() {
        return ctx.searchPermissions();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 19)(24, "div", 20)(25, "div", 21)(26, "label", 22);
      \u0275\u0275text(27, "Afficher:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "select", 23);
      \u0275\u0275twoWayListener("ngModelChange", function AdminrhPermissionComponent_Template_select_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.itemsPerPage, $event) || (ctx.itemsPerPage = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AdminrhPermissionComponent_Template_select_change_28_listener() {
        return ctx.onItemsPerPageChange();
      });
      \u0275\u0275template(29, AdminrhPermissionComponent_option_29_Template, 2, 2, "option", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "span", 25);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(32, "div", 26)(33, "div", 12)(34, "div", 27)(35, "table", 28)(36, "thead")(37, "tr")(38, "th");
      \u0275\u0275text(39, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th");
      \u0275\u0275text(41, "Nom de la Permission");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "th");
      \u0275\u0275text(43, "Date de Cr\xE9ation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "th");
      \u0275\u0275text(45, "Date de Modification");
      \u0275\u0275elementEnd();
      \u0275\u0275template(46, AdminrhPermissionComponent_th_46_Template, 2, 0, "th", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "tbody");
      \u0275\u0275template(48, AdminrhPermissionComponent_tr_48_Template, 7, 1, "tr", 30)(49, AdminrhPermissionComponent_tr_49_Template, 5, 1, "tr", 30)(50, AdminrhPermissionComponent_tr_50_Template, 13, 11, "tr", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(51, AdminrhPermissionComponent_div_51_Template, 16, 14, "div", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 33)(53, "div", 34)(54, "div", 35)(55, "div", 36)(56, "h5", 37);
      \u0275\u0275text(57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "button", 38);
      \u0275\u0275listener("click", function AdminrhPermissionComponent_Template_button_click_58_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "form", 39);
      \u0275\u0275listener("ngSubmit", function AdminrhPermissionComponent_Template_form_ngSubmit_59_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(60, "div", 40)(61, "div", 41)(62, "label", 42);
      \u0275\u0275text(63, " Nom de la Permission ");
      \u0275\u0275elementStart(64, "span", 43);
      \u0275\u0275text(65, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(66, "input", 44);
      \u0275\u0275template(67, AdminrhPermissionComponent_div_67_Template, 3, 2, "div", 45);
      \u0275\u0275elementStart(68, "small", 25);
      \u0275\u0275text(69, " Utilisez des tirets pour s\xE9parer les mots (ex: cr\xE9er-utilisateur) ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(70, "div", 46)(71, "button", 47);
      \u0275\u0275listener("click", function AdminrhPermissionComponent_Template_button_click_71_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275text(72, " Annuler ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "button", 48);
      \u0275\u0275template(74, AdminrhPermissionComponent_span_74_Template, 1, 0, "span", 49);
      \u0275\u0275text(75);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(76, AdminrhPermissionComponent_div_76_Template, 1, 2, "div", 50);
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.superadmin_dashboard);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isSuperAdmin);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.itemsPerPage);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.itemsPerPageOptions);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate3(" ", ctx.getStartIndex(), " - ", ctx.getEndIndex(), " de ", ctx.totalItems, " permission(s) ");
      \u0275\u0275advance(15);
      \u0275\u0275property("ngIf", ctx.isSuperAdmin);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.paginatedPermissions.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.paginatedPermissions);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalPages > 1);
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showModal);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.isEditing ? "Modifier la Permission" : "Nouvelle Permission", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.permissionForm);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("is-invalid", ctx.f["name"].invalid && ctx.f["name"].touched);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f["name"].invalid && ctx.f["name"].touched);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.permissionForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isEditing ? "Mettre \xE0 jour" : "Cr\xE9er", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, FormsModule, NgModel, DatePipe], styles: ["\n\n.page-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  margin: 0 2px;\n  border: 1px solid #dee2e6;\n  color: #6c757d;\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  border-color: #dee2e6;\n}\n.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  border-color: #007bff;\n  color: white;\n}\n.pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #6c757d;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  background-color: #f8f9fa;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.modal.show[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=adminrh-permission.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminrhPermissionComponent, [{
    type: Component,
    args: [{ selector: "app-adminrh-permission", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule], template: `<div class="page-content">\r
  <div class="d-md-flex d-block align-items-center justify-content-between mb-4">\r
    <div class="my-auto mb-2">\r
      <h3 class="mb-1">Gestion des Permissions</h3>\r
      <nav>\r
        <ol class="breadcrumb mb-0">\r
          <li class="breadcrumb-item">\r
            <a [routerLink]="routes.superadmin_dashboard">Dashboard</a>\r
          </li>\r
          <li class="breadcrumb-item active" aria-current="page">Permissions</li>\r
        </ol>\r
      </nav>\r
    </div>\r
    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap" *ngIf="isSuperAdmin">\r
      <button\r
        type="button"\r
        class="btn btn-primary"\r
        (click)="openModal()">\r
        <i class="isax isax-add me-2"></i>\r
        Nouvelle Permission\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Messages -->\r
  <div *ngIf="successMessage" class="alert alert-success alert-dismissible fade show" role="alert">\r
    <i class="isax isax-tick-circle me-2"></i>\r
    {{ successMessage }}\r
    <button type="button" class="btn-close" (click)="successMessage = ''" aria-label="Close"></button>\r
  </div>\r
\r
  <div *ngIf="errorMessage" class="alert alert-danger alert-dismissible fade show" role="alert">\r
    <i class="isax isax-close-circle me-2"></i>\r
    {{ errorMessage }}\r
    <button type="button" class="btn-close" (click)="errorMessage = ''" aria-label="Close"></button>\r
  </div>\r
\r
  <!-- Recherche et contr\xF4les -->\r
  <div class="card mb-4">\r
    <div class="card-body">\r
      <div class="row align-items-center">\r
        <div class="col-md-6">\r
          <div class="input-group">\r
            <span class="input-group-text">\r
              <i class="isax isax-search-normal-1"></i>\r
            </span>\r
            <input \r
              type="text" \r
              class="form-control" \r
              placeholder="Rechercher une permission..."\r
              [(ngModel)]="searchText"\r
              (keyup)="searchPermissions()">\r
          </div>\r
        </div>\r
        <div class="col-md-6 text-md-end mt-3 mt-md-0">\r
          <div class="d-flex align-items-center justify-content-md-end gap-3">\r
            <div class="d-flex align-items-center">\r
              <label class="form-label mb-0 me-2">Afficher:</label>\r
              <select \r
                class="form-select form-select-sm"\r
                style="width: auto;"\r
                [(ngModel)]="itemsPerPage"\r
                (change)="onItemsPerPageChange()">\r
                <option *ngFor="let option of itemsPerPageOptions" [value]="option">\r
                  {{ option }}\r
                </option>\r
              </select>\r
            </div>\r
            <span class="text-muted">\r
              {{ getStartIndex() }} - {{ getEndIndex() }} de {{ totalItems }} permission(s)\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Liste des permissions -->\r
  <div class="card">\r
    <div class="card-body">\r
      <div class="table-responsive">\r
        <table class="table table-hover">\r
          <thead>\r
            <tr>\r
              <th>ID</th>\r
              <th>Nom de la Permission</th>\r
              <th>Date de Cr\xE9ation</th>\r
              <th>Date de Modification</th>\r
              <th class="text-end" *ngIf="isSuperAdmin">Actions</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngIf="loading">\r
              <td [attr.colspan]="isSuperAdmin ? 6 : 5" class="text-center py-5">\r
                <div class="spinner-border text-primary" role="status">\r
                  <span class="visually-hidden">Chargement...</span>\r
                </div>\r
                <p class="mt-2 text-muted">Chargement des permissions...</p>\r
              </td>\r
            </tr>\r
\r
            <tr *ngIf="!loading && paginatedPermissions.length === 0">\r
              <td [attr.colspan]="isSuperAdmin ? 6 : 5" class="text-center py-5">\r
                <i class="isax isax-box fs-48 text-muted mb-3 d-block"></i>\r
                <p class="text-muted">Aucune permission trouv\xE9e</p>\r
              </td>\r
            </tr>\r
\r
            <tr *ngFor="let permission of paginatedPermissions">\r
              <td>{{ permission.id }}</td>\r
              <td>\r
                <strong>{{ permission.name }}</strong>\r
              </td>\r
              <td>{{ permission.created_at | date:'dd/MM/yyyy HH:mm' }}</td>\r
              <td>{{ permission.updated_at | date:'dd/MM/yyyy HH:mm' }}</td>\r
              <td class="text-end" *ngIf="isSuperAdmin">\r
                <div class="dropdown">\r
                  <button\r
                    class="btn btn-sm btn-light dropdown-toggle"\r
                    type="button"\r
                    data-bs-toggle="dropdown"\r
                    aria-expanded="false">\r
                    Actions\r
                  </button>\r
                  <ul class="dropdown-menu">\r
                    <li>\r
                      <a\r
                        class="dropdown-item"\r
                        href="javascript:void(0);"\r
                        (click)="openModal(permission)">\r
                        <i class="isax isax-edit me-2"></i>\r
                        Modifier\r
                      </a>\r
                    </li>\r
                    <li><hr class="dropdown-divider"></li>\r
                    <li>\r
                      <a\r
                        class="dropdown-item text-danger"\r
                        href="javascript:void(0);"\r
                        (click)="deletePermission(permission)">\r
                        <i class="isax isax-trash me-2"></i>\r
                        Supprimer\r
                      </a>\r
                    </li>\r
                  </ul>\r
                </div>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <!-- Pagination -->\r
      <div class="d-flex justify-content-between align-items-center mt-4" *ngIf="totalPages > 1">\r
        <div class="text-muted">\r
          Affichage de {{ getStartIndex() }} \xE0 {{ getEndIndex() }} sur {{ totalItems }} r\xE9sultats\r
        </div>\r
        \r
        <nav aria-label="Pagination des permissions">\r
          <ul class="pagination pagination-sm mb-0">\r
            <!-- Bouton Pr\xE9c\xE9dent -->\r
            <li class="page-item" [class.disabled]="currentPage === 1">\r
              <a \r
                class="page-link" \r
                href="javascript:void(0);"\r
                (click)="onPageChange(currentPage - 1)"\r
                [attr.tabindex]="currentPage === 1 ? -1 : null">\r
                <i class="isax isax-arrow-left-2"></i>\r
              </a>\r
            </li>\r
\r
            <!-- Premi\xE8re page -->\r
            <li class="page-item" *ngIf="getPaginationArray()[0] > 1">\r
              <a class="page-link" href="javascript:void(0);" (click)="onPageChange(1)">1</a>\r
            </li>\r
            <li class="page-item disabled" *ngIf="getPaginationArray()[0] > 2">\r
              <span class="page-link">...</span>\r
            </li>\r
\r
            <!-- Pages visibles -->\r
            <li \r
              class="page-item" \r
              *ngFor="let page of getPaginationArray()"\r
              [class.active]="page === currentPage">\r
              <a \r
                class="page-link" \r
                href="javascript:void(0);"\r
                (click)="onPageChange(page)">\r
                {{ page }}\r
              </a>\r
            </li>\r
\r
            <!-- Derni\xE8re page -->\r
            <li class="page-item disabled" *ngIf="getPaginationArray()[getPaginationArray().length - 1] < totalPages - 1">\r
              <span class="page-link">...</span>\r
            </li>\r
            <li class="page-item" *ngIf="getPaginationArray()[getPaginationArray().length - 1] < totalPages">\r
              <a class="page-link" href="javascript:void(0);" (click)="onPageChange(totalPages)">{{ totalPages }}</a>\r
            </li>\r
\r
            <!-- Bouton Suivant -->\r
            <li class="page-item" [class.disabled]="currentPage === totalPages">\r
              <a \r
                class="page-link" \r
                href="javascript:void(0);"\r
                (click)="onPageChange(currentPage + 1)"\r
                [attr.tabindex]="currentPage === totalPages ? -1 : null">\r
                <i class="isax isax-arrow-right-2"></i>\r
              </a>\r
            </li>\r
          </ul>\r
        </nav>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal existant reste inchang\xE9 -->\r
<!-- Modal Ajout/Modification -->\r
<div \r
  class="modal fade" \r
  [class.show]="showModal" \r
  [style.display]="showModal ? 'block' : 'none'"\r
  tabindex="-1">\r
  <div class="modal-dialog modal-dialog-centered">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">\r
          {{ isEditing ? 'Modifier la Permission' : 'Nouvelle Permission' }}\r
        </h5>\r
        <button \r
          type="button" \r
          class="btn-close" \r
          (click)="closeModal()">\r
        </button>\r
      </div>\r
      <form [formGroup]="permissionForm" (ngSubmit)="onSubmit()">\r
        <div class="modal-body">\r
          <!-- Nom de la permission -->\r
          <div class="mb-3">\r
            <label class="form-label">\r
              Nom de la Permission <span class="text-danger">*</span>\r
            </label>\r
            <input \r
              type="text" \r
              class="form-control"\r
              formControlName="name"\r
              [class.is-invalid]="f['name'].invalid && f['name'].touched"\r
              placeholder="Ex: cr\xE9er-utilisateur, modifier-cours...">\r
            <div class="invalid-feedback" *ngIf="f['name'].invalid && f['name'].touched">\r
              <small *ngIf="f['name'].hasError('required')">Le nom est requis</small>\r
              <small *ngIf="f['name'].hasError('minlength')">Le nom doit contenir au moins 3 caract\xE8res</small>\r
            </div>\r
            <small class="text-muted">\r
              Utilisez des tirets pour s\xE9parer les mots (ex: cr\xE9er-utilisateur)\r
            </small>\r
          </div>\r
\r
        </div>\r
        <div class="modal-footer">\r
          <button \r
            type="button" \r
            class="btn btn-secondary" \r
            (click)="closeModal()"\r
            [disabled]="loading">\r
            Annuler\r
          </button>\r
          <button \r
            type="submit" \r
            class="btn btn-primary"\r
            [disabled]="permissionForm.invalid || loading">\r
            <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>\r
            {{ isEditing ? 'Mettre \xE0 jour' : 'Cr\xE9er' }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
<div \r
  class="modal-backdrop fade" \r
  [class.show]="showModal"\r
  *ngIf="showModal">\r
</div>`, styles: ["/* src/app/features/adminrh/adminrh-permission/adminrh-permission.component.scss */\n.page-content {\n  padding: 20px;\n}\n.pagination .page-link {\n  border-radius: 6px;\n  margin: 0 2px;\n  border: 1px solid #dee2e6;\n  color: #6c757d;\n}\n.pagination .page-link:hover {\n  background-color: #f8f9fa;\n  border-color: #dee2e6;\n}\n.pagination .page-item.active .page-link {\n  background-color: #007bff;\n  border-color: #007bff;\n  color: white;\n}\n.pagination .page-item.disabled .page-link {\n  color: #6c757d;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n.table th {\n  font-weight: 600;\n  background-color: #f8f9fa;\n}\n.table tbody tr {\n  transition: all 0.3s ease;\n}\n.table tbody tr:hover {\n  background-color: #f8f9fa;\n}\n.modal.show {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=adminrh-permission.component.css.map */\n"] }]
  }], () => [{ type: PermissionService }, { type: AuthService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminrhPermissionComponent, { className: "AdminrhPermissionComponent", filePath: "app/features/adminrh/adminrh-permission/adminrh-permission.component.ts", lineNumber: 29 });
})();
export {
  AdminrhPermissionComponent
};
//# sourceMappingURL=chunk-GUAUGDQP.js.map
