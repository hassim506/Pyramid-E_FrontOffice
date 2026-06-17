import {
  AdminHeaderComponent,
  HeaderComponent
} from "./chunk-B5YUSY7B.js";
import {
  FooterComponent
} from "./chunk-GMEFLTYT.js";
import "./chunk-34ZCH5GK.js";
import "./chunk-EOCJYYK5.js";
import {
  AuthService
} from "./chunk-IEFOQSOV.js";
import "./chunk-K7E3GT3E.js";
import {
  DataService
} from "./chunk-L2JYRU5M.js";
import {
  SlickCarouselModule
} from "./chunk-RAWGSTJW.js";
import {
  routes
} from "./chunk-YJLHMFCU.js";
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
} from "./chunk-HLA233IM.js";
import {
  Router,
  RouterLink
} from "./chunk-I4S43CN7.js";
import "./chunk-NHSI3UX5.js";
import "./chunk-46QRNFHM.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-MNWNTO2T.js";
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
import "./chunk-4MWRP73S.js";

// src/app/auth/register/register.component.ts
function RegisterComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, " Acc\xE8s r\xE9serv\xE9 aux administrateurs. Vous n'avez pas les droits pour cr\xE9er un compte. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function RegisterComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
function RegisterComponent_form_17_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "small");
    \u0275\u0275text(2, "First name is required");
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_form_17_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "small");
    \u0275\u0275text(2, "Last name is required");
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_form_17_div_30_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_form_17_div_30_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Please enter a valid email");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_form_17_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275template(1, RegisterComponent_form_17_div_30_small_1_Template, 2, 0, "small", 51)(2, RegisterComponent_form_17_div_30_small_2_Template, 2, 0, "small", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["email"].hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["email"].hasError("email"));
  }
}
function RegisterComponent_form_17_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "small");
    \u0275\u0275text(2, "Phone number is required");
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_form_17_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "small");
    \u0275\u0275text(2, "Function is required");
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_form_17_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "small");
    \u0275\u0275text(2, "Please select a role");
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_form_17_div_76_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_form_17_div_76_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Password must be at least 8 characters");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_form_17_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275template(1, RegisterComponent_form_17_div_76_small_1_Template, 2, 0, "small", 51)(2, RegisterComponent_form_17_div_76_small_2_Template, 2, 0, "small", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["password"].hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["password"].hasError("minlength"));
  }
}
function RegisterComponent_form_17_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "small");
    \u0275\u0275text(2, "Password confirmation is required");
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_form_17_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "small");
    \u0275\u0275text(2, "Passwords do not match");
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_form_17_span_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 52);
  }
}
function RegisterComponent_form_17_i_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 53);
  }
}
function RegisterComponent_form_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 18);
    \u0275\u0275listener("ngSubmit", function RegisterComponent_form_17_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 19)(2, "label", 20);
    \u0275\u0275text(3, "First Name");
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 22);
    \u0275\u0275element(7, "input", 23);
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275element(9, "i", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, RegisterComponent_form_17_div_10_Template, 3, 0, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 19)(12, "label", 20);
    \u0275\u0275text(13, "Last Name");
    \u0275\u0275elementStart(14, "span", 21);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 22);
    \u0275\u0275element(17, "input", 26);
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275element(19, "i", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, RegisterComponent_form_17_div_20_Template, 3, 0, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 19)(22, "label", 20);
    \u0275\u0275text(23, "Email");
    \u0275\u0275elementStart(24, "span", 21);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 22);
    \u0275\u0275element(27, "input", 27);
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275element(29, "i", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, RegisterComponent_form_17_div_30_Template, 3, 2, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 19)(32, "label", 20);
    \u0275\u0275text(33, "Phone Number");
    \u0275\u0275elementStart(34, "span", 21);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 22);
    \u0275\u0275element(37, "input", 29);
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275element(39, "i", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, RegisterComponent_form_17_div_40_Template, 3, 0, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 19)(42, "label", 20);
    \u0275\u0275text(43, "Function");
    \u0275\u0275elementStart(44, "span", 21);
    \u0275\u0275text(45, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 22);
    \u0275\u0275element(47, "input", 31);
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275element(49, "i", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(50, RegisterComponent_form_17_div_50_Template, 3, 0, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 33)(52, "label", 20);
    \u0275\u0275text(53, "User Role");
    \u0275\u0275elementStart(54, "span", 21);
    \u0275\u0275text(55, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "select", 34)(57, "option", 35);
    \u0275\u0275text(58, "Select a role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "option", 36);
    \u0275\u0275text(60, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "option", 37);
    \u0275\u0275text(62, "Instructor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "option", 38);
    \u0275\u0275text(64, "Administrator");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(65, RegisterComponent_form_17_div_65_Template, 3, 0, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "input", 39)(67, "input", 40);
    \u0275\u0275elementStart(68, "div", 19)(69, "label", 20);
    \u0275\u0275text(70, "New Password ");
    \u0275\u0275elementStart(71, "span", 41);
    \u0275\u0275text(72, " *");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 22)(74, "input", 42);
    \u0275\u0275listener("input", function RegisterComponent_form_17_Template_input_input_74_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.checkPasswordStrength($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span", 43);
    \u0275\u0275listener("click", function RegisterComponent_form_17_Template_span_click_75_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.togglePassword(0));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(76, RegisterComponent_form_17_div_76_Template, 3, 2, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 19)(78, "label", 20);
    \u0275\u0275text(79, "Confirm Password ");
    \u0275\u0275elementStart(80, "span", 41);
    \u0275\u0275text(81, " *");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 22);
    \u0275\u0275element(83, "input", 44);
    \u0275\u0275elementStart(84, "span", 45);
    \u0275\u0275listener("click", function RegisterComponent_form_17_Template_span_click_84_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.togglePassword(1));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(85, RegisterComponent_form_17_div_85_Template, 3, 0, "div", 25)(86, RegisterComponent_form_17_div_86_Template, 3, 0, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 46)(88, "button", 47);
    \u0275\u0275template(89, RegisterComponent_form_17_span_89_Template, 1, 0, "span", 48);
    \u0275\u0275text(90);
    \u0275\u0275template(91, RegisterComponent_form_17_i_91_Template, 1, 0, "i", 49);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.registerForm);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r0.f["prenom"].invalid && ctx_r0.f["prenom"].touched);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.f["prenom"].invalid && ctx_r0.f["prenom"].touched);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r0.f["nom"].invalid && ctx_r0.f["nom"].touched);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.f["nom"].invalid && ctx_r0.f["nom"].touched);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r0.f["email"].invalid && ctx_r0.f["email"].touched);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.f["email"].invalid && ctx_r0.f["email"].touched);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r0.f["numero"].invalid && ctx_r0.f["numero"].touched);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.f["numero"].invalid && ctx_r0.f["numero"].touched);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r0.f["fonction"].invalid && ctx_r0.f["fonction"].touched);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.f["fonction"].invalid && ctx_r0.f["fonction"].touched);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r0.f["role_id"].invalid && ctx_r0.f["role_id"].touched);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("is-invalid", ctx_r0.f["password"].invalid && ctx_r0.f["password"].touched);
    \u0275\u0275property("type", ctx_r0.password[0] ? "text" : "password");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.password[0] ? "isax-eye" : "isax-eye-slash");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["password"].invalid && ctx_r0.f["password"].touched);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r0.f["password_confirmation"].invalid && ctx_r0.f["password_confirmation"].touched);
    \u0275\u0275property("type", ctx_r0.password[1] ? "text" : "password");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.password[1] ? "isax-eye" : "isax-eye-slash");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["password_confirmation"].invalid && ctx_r0.f["password_confirmation"].touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.registerForm.hasError("mismatch") && ctx_r0.f["password_confirmation"].touched);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isLoading || ctx_r0.registerForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isLoading ? "Signing up..." : "Ajouter l'employ\xE9", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading);
  }
}
var RegisterComponent = class _RegisterComponent {
  fb;
  authService;
  router;
  dataService;
  registerForm;
  isLoading = false;
  errorMessage = "";
  successMessage = "";
  password = [false, false];
  strengthLevel = "";
  routes = routes;
  welcomeLogin = [];
  isAdmin = false;
  constructor(fb, authService, router, dataService) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.dataService = dataService;
    this.welcomeLogin = this.dataService.welcomeLogin;
    this.registerForm = this.fb.group({
      prenom: ["", Validators.required],
      nom: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      numero: ["", Validators.required],
      fonction: ["", Validators.required],
      role_id: ["", Validators.required],
      // Pas de valeur par défaut
      entreprise_id: [1, Validators.required],
      password: ["", [Validators.required, Validators.minLength(8)]],
      password_confirmation: ["", Validators.required],
      statut: [1]
    }, { validators: this.passwordMatchValidator });
  }
  ngOnInit() {
    this.checkAdminAccess();
  }
  checkAdminAccess() {
    const user = this.authService.getUser();
    this.isAdmin = user && (user.role_id === 1 || user.fonction?.toLowerCase().includes("admin"));
    console.log("Current user:", user);
    console.log("Is admin:", this.isAdmin);
    if (!this.isAdmin) {
      this.errorMessage = "Acc\xE8s refus\xE9. Seuls les administrateurs peuvent cr\xE9er des comptes.";
    }
  }
  passwordMatchValidator(form) {
    return form.get("password")?.value === form.get("password_confirmation")?.value ? null : { mismatch: true };
  }
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  checkPasswordStrength(event) {
    const value = event.target.value;
    if (value.length < 8) {
      this.strengthLevel = "poor";
    } else if (!/[A-Za-z0-9]/.test(value)) {
      this.strengthLevel = "weak";
    } else if (!/[^A-Za-z0-9]/.test(value)) {
      this.strengthLevel = "strong";
    } else {
      this.strengthLevel = "heavy";
    }
  }
  onSubmit() {
    this.errorMessage = "";
    this.successMessage = "";
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    if (!this.isAdmin) {
      this.errorMessage = "Vous n'avez pas les droits pour cr\xE9er un compte.";
      return;
    }
    this.isLoading = true;
    const formData = this.registerForm.value;
    formData.role_id = parseInt(formData.role_id);
    console.log("Form data before submit:", formData);
    this.authService.register(formData).subscribe({
      next: (res) => {
        this.isLoading = false;
        console.log("Register response:", res);
        if (res?.success || res?.status) {
          this.successMessage = res?.message || "Compte cr\xE9\xE9 avec succ\xE8s !";
          this.registerForm.reset();
          this.registerForm.patchValue({
            entreprise_id: 1,
            statut: 1
          });
          setTimeout(() => {
            this.router.navigate(["/index"]);
          }, 2e3);
        } else {
          this.errorMessage = res?.message || "Erreur lors de la cr\xE9ation du compte";
        }
      },
      error: (err) => {
        this.isLoading = false;
        console.error("Register error:", err);
        if (err.error?.errors) {
          const errors = Object.values(err.error.errors).flat();
          this.errorMessage = errors.join(", ");
        } else {
          this.errorMessage = err.error?.message || err.message || "Erreur lors de la cr\xE9ation du compte";
        }
      }
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 18, vars: 5, consts: [[1, "main-wrapper"], [1, "login-content"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-8", "col-lg-6"], [1, "login-wrapper"], [1, "loginbox"], [1, "w-100"], [1, "d-flex", "align-items-center", "justify-content-between", "login-header"], ["src", "assets/img/logo.png", "alt", "Logo", 1, "img-fluid"], [1, "link-1", 3, "routerLink"], [1, "fs-32", "fw-bold", "topic", "text-center"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "alert alert-danger mt-3", 4, "ngIf"], ["class", "alert alert-success mt-3", 4, "ngIf"], ["class", "mb-3 pb-3", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "alert", "alert-warning"], [1, "alert", "alert-danger", "mt-3"], [1, "alert", "alert-success", "mt-3"], [1, "mb-3", "pb-3", 3, "ngSubmit", "formGroup"], [1, "mb-3", "position-relative"], [1, "form-label"], [1, "text-danger", "ms-1"], [1, "position-relative"], ["type", "text", "formControlName", "prenom", "placeholder", "Enter your first name", 1, "form-control", "form-control-lg"], [1, "isax", "isax-user", "input-icon", "text-gray-7", "fs-14"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["type", "text", "formControlName", "nom", "placeholder", "Enter your last name", 1, "form-control", "form-control-lg"], ["type", "email", "formControlName", "email", "placeholder", "Enter your email", 1, "form-control", "form-control-lg"], [1, "isax", "isax-sms", "input-icon", "text-gray-7", "fs-14"], ["type", "text", "formControlName", "numero", "placeholder", "Enter your phone number", 1, "form-control", "form-control-lg"], [1, "isax", "isax-call", "input-icon", "text-gray-7", "fs-14"], ["type", "text", "formControlName", "fonction", "placeholder", "Enter your function", 1, "form-control", "form-control-lg"], [1, "isax", "isax-briefcase", "input-icon", "text-gray-7", "fs-14"], [1, "mb-3"], ["formControlName", "role_id", 1, "form-control", "form-control-lg"], ["value", ""], ["value", "3"], ["value", "2"], ["value", "1"], ["type", "hidden", "formControlName", "entreprise_id"], ["type", "hidden", "formControlName", "statut"], [1, "text-danger"], ["formControlName", "password", "placeholder", "Enter your password", 1, "form-control", "form-control-lg", 3, "input", "type"], ["tabindex", "0", 1, "isax", "toggle-password", "fs-14", 3, "click", "ngClass"], ["formControlName", "password_confirmation", "placeholder", "Confirm your password", 1, "form-control", "form-control-lg", 3, "type"], ["tabindex", "0", 1, "isax", "toggle-passwords", "fs-14", 3, "click", "ngClass"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-secondary", "btn-lg", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "isax isax-arrow-right-3 ms-1", 4, "ngIf"], [1, "invalid-feedback", "d-block"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "isax", "isax-arrow-right-3", "ms-1"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-admin-header");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7);
      \u0275\u0275element(9, "img", 8);
      \u0275\u0275elementStart(10, "a", 9);
      \u0275\u0275text(11, "Back to Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "h1", 10);
      \u0275\u0275text(13, "Ajouter l'employ\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, RegisterComponent_div_14_Template, 2, 0, "div", 11)(15, RegisterComponent_div_15_Template, 2, 1, "div", 12)(16, RegisterComponent_div_16_Template, 2, 1, "div", 13)(17, RegisterComponent_form_17_Template, 92, 32, "form", 14);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", !ctx.isAdmin);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAdmin);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    RouterLink,
    SlickCarouselModule,
    AdminHeaderComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterLink,
      SlickCarouselModule,
      HeaderComponent,
      FooterComponent,
      AdminHeaderComponent
    ], template: `\r
<app-admin-header></app-admin-header>\r
\r
<div class="main-wrapper">\r
  <div class="login-content">\r
    <div class="row justify-content-center">\r
      <!-- On masque le banner \xE0 gauche pour centrer -->\r
      <!-- <div class="col-md-6 login-bg d-none d-lg-flex"> ... </div> -->\r
\r
      <div class="col-12 col-md-8 col-lg-6">\r
        <div class="login-wrapper">\r
          <div class="loginbox">\r
            <div class="w-100">\r
              <div class="d-flex align-items-center justify-content-between login-header">\r
                <img src="assets/img/logo.png" class="img-fluid" alt="Logo">\r
                <a [routerLink]="routes.home" class="link-1">Back to Home</a>\r
              </div>\r
\r
              <h1 class="fs-32 fw-bold topic text-center">Ajouter l'employ\xE9</h1>\r
\r
              <!-- Acc\xE8s r\xE9serv\xE9 admin -->\r
              <div *ngIf="!isAdmin" class="alert alert-warning">\r
                Acc\xE8s r\xE9serv\xE9 aux administrateurs. Vous n'avez pas les droits pour cr\xE9er un compte.\r
              </div>\r
\r
              <!-- Messages d'erreur et de succ\xE8s -->\r
              <div *ngIf="errorMessage" class="alert alert-danger mt-3">\r
                {{ errorMessage }}\r
              </div>\r
              <div *ngIf="successMessage" class="alert alert-success mt-3">{{ successMessage }}</div>\r
\r
              <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="mb-3 pb-3" *ngIf="isAdmin">\r
                <!-- Prenom -->\r
                <div class="mb-3 position-relative">\r
                  <label class="form-label">First Name<span class="text-danger ms-1">*</span></label>\r
                  <div class="position-relative">\r
                    <input type="text" class="form-control form-control-lg" formControlName="prenom" [class.is-invalid]="f['prenom'].invalid && f['prenom'].touched" placeholder="Enter your first name">\r
                    <span><i class="isax isax-user input-icon text-gray-7 fs-14"></i></span>\r
                  </div>\r
                  <div *ngIf="f['prenom'].invalid && f['prenom'].touched" class="invalid-feedback d-block">\r
                    <small>First name is required</small>\r
                  </div>\r
                </div>\r
\r
                <!-- Nom -->\r
                <div class="mb-3 position-relative">\r
                  <label class="form-label">Last Name<span class="text-danger ms-1">*</span></label>\r
                  <div class="position-relative">\r
                    <input type="text" class="form-control form-control-lg" formControlName="nom" [class.is-invalid]="f['nom'].invalid && f['nom'].touched" placeholder="Enter your last name">\r
                    <span><i class="isax isax-user input-icon text-gray-7 fs-14"></i></span>\r
                  </div>\r
                  <div *ngIf="f['nom'].invalid && f['nom'].touched" class="invalid-feedback d-block">\r
                    <small>Last name is required</small>\r
                  </div>\r
                </div>\r
\r
                <!-- Email -->\r
                <div class="mb-3 position-relative">\r
                  <label class="form-label">Email<span class="text-danger ms-1">*</span></label>\r
                  <div class="position-relative">\r
                    <input type="email" class="form-control form-control-lg" formControlName="email" [class.is-invalid]="f['email'].invalid && f['email'].touched" placeholder="Enter your email">\r
                    <span><i class="isax isax-sms input-icon text-gray-7 fs-14"></i></span>\r
                  </div>\r
                  <div *ngIf="f['email'].invalid && f['email'].touched" class="invalid-feedback d-block">\r
                    <small *ngIf="f['email'].hasError('required')">Email is required</small>\r
                    <small *ngIf="f['email'].hasError('email')">Please enter a valid email</small>\r
                  </div>\r
                </div>\r
\r
                <!-- Numero -->\r
                <div class="mb-3 position-relative">\r
                  <label class="form-label">Phone Number<span class="text-danger ms-1">*</span></label>\r
                  <div class="position-relative">\r
                    <input type="text" class="form-control form-control-lg" formControlName="numero" [class.is-invalid]="f['numero'].invalid && f['numero'].touched" placeholder="Enter your phone number">\r
                    <span><i class="isax isax-call input-icon text-gray-7 fs-14"></i></span>\r
                  </div>\r
                  <div *ngIf="f['numero'].invalid && f['numero'].touched" class="invalid-feedback d-block">\r
                    <small>Phone number is required</small>\r
                  </div>\r
                </div>\r
\r
                <!-- Fonction -->\r
                <div class="mb-3 position-relative">\r
                  <label class="form-label">Function<span class="text-danger ms-1">*</span></label>\r
                  <div class="position-relative">\r
                    <input type="text" class="form-control form-control-lg" formControlName="fonction" [class.is-invalid]="f['fonction'].invalid && f['fonction'].touched" placeholder="Enter your function">\r
                    <span><i class="isax isax-briefcase input-icon text-gray-7 fs-14"></i></span>\r
                  </div>\r
                  <div *ngIf="f['fonction'].invalid && f['fonction'].touched" class="invalid-feedback d-block">\r
                    <small>Function is required</small>\r
                  </div>\r
                </div>\r
\r
                <!-- Role Selection (visible) -->\r
                <div class="mb-3">\r
                  <label class="form-label">User Role<span class="text-danger ms-1">*</span></label>\r
                  <select class="form-control form-control-lg" formControlName="role_id">\r
                    <option value="">Select a role</option>\r
                    <option value="3">Student</option>\r
                    <option value="2">Instructor</option>\r
                    <option value="1">Administrator</option>\r
                  </select>\r
                  <div *ngIf="f['role_id'].invalid && f['role_id'].touched" class="invalid-feedback d-block">\r
                    <small>Please select a role</small>\r
                  </div>\r
                </div>\r
\r
                <!-- Hidden fields -->\r
                <input type="hidden" formControlName="entreprise_id">\r
                <input type="hidden" formControlName="statut">\r
\r
                <!-- Password -->\r
                <div class="mb-3 position-relative">\r
                  <label class="form-label">New Password <span class="text-danger"> *</span></label>\r
                  <div class="position-relative">\r
                    <input [type]="password[0] ? 'text' : 'password'" class="form-control form-control-lg" formControlName="password" [class.is-invalid]="f['password'].invalid && f['password'].touched" (input)="checkPasswordStrength($event)" placeholder="Enter your password">\r
                    <span class="isax toggle-password fs-14" [ngClass]="password[0] ? 'isax-eye' : 'isax-eye-slash'" (click)="togglePassword(0)" tabindex="0"></span>\r
                  </div>\r
                  <div *ngIf="f['password'].invalid && f['password'].touched" class="invalid-feedback d-block">\r
                    <small *ngIf="f['password'].hasError('required')">Password is required</small>\r
                    <small *ngIf="f['password'].hasError('minlength')">Password must be at least 8 characters</small>\r
                  </div>\r
                </div>\r
\r
                <!-- Confirm Password -->\r
                <div class="mb-3 position-relative">\r
                  <label class="form-label">Confirm Password <span class="text-danger"> *</span></label>\r
                  <div class="position-relative">\r
                    <input [type]="password[1] ? 'text' : 'password'" class="form-control form-control-lg" formControlName="password_confirmation" [class.is-invalid]="f['password_confirmation'].invalid && f['password_confirmation'].touched" placeholder="Confirm your password">\r
                    <span class="isax toggle-passwords fs-14" [ngClass]="password[1] ? 'isax-eye' : 'isax-eye-slash'" (click)="togglePassword(1)" tabindex="0"></span>\r
                  </div>\r
                  <div *ngIf="f['password_confirmation'].invalid && f['password_confirmation'].touched" class="invalid-feedback d-block">\r
                    <small>Password confirmation is required</small>\r
                  </div>\r
                  <div *ngIf="registerForm.hasError('mismatch') && f['password_confirmation'].touched" class="invalid-feedback d-block">\r
                    <small>Passwords do not match</small>\r
                  </div>\r
                </div>\r
\r
                <div class="d-grid">\r
                  <button class="btn btn-secondary btn-lg" type="submit" [disabled]="isLoading || registerForm.invalid">\r
                    <span *ngIf="isLoading" class="spinner-border spinner-border-sm me-2"></span>\r
                    {{ isLoading ? 'Signing up...' : 'Ajouter l\\'employ\xE9' }}\r
                    <i *ngIf="!isLoading" class="isax isax-arrow-right-3 ms-1"></i>\r
                  </button>\r
                </div>\r
              </form>\r
\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }, { type: DataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "app/auth/register/register.component.ts", lineNumber: 29 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-UBDYLERE.js.map
