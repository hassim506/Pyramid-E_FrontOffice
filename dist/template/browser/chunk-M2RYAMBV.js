import {
  PermissionService
} from "./chunk-MFYPUOQJ.js";
import {
  RoleRedirectService
} from "./chunk-3RV5TLTL.js";
import {
  AuthService
} from "./chunk-I3LFGWFR.js";
import {
  Router
} from "./chunk-UFFO2UKW.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-BSBCM3BI.js";

// src/app/guards/permission-guard.guard.ts
var PermissionGuard = class _PermissionGuard {
  permissionService;
  router;
  constructor(permissionService, router) {
    this.permissionService = permissionService;
    this.router = router;
  }
  canActivate(route) {
    const requiredPermission = route.data["permission"];
    if (!requiredPermission) {
      return true;
    }
    if (this.permissionService.hasPermission(requiredPermission)) {
      return true;
    }
    this.router.navigate(["/unauthorized"]);
    return false;
  }
  static \u0275fac = function PermissionGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionGuard)(\u0275\u0275inject(PermissionService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PermissionGuard, factory: _PermissionGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: PermissionService }, { type: Router }], null);
})();

// src/app/guards/auth.guard.ts
var authGuard = (_route, _state) => {
  const router = inject(Router);
  const token = localStorage.getItem("pyramide_token");
  const userData = localStorage.getItem("pyramide_user");
  if (token && userData) {
    try {
      JSON.parse(userData);
      return true;
    } catch {
      router.navigate(["/auth/login"]);
      return false;
    }
  }
  router.navigate(["/auth/login"]);
  return false;
};

// src/app/guards/layout.guard.ts
var layoutGuard = (_route, state) => {
  const authService = inject(AuthService);
  const redirectService = inject(RoleRedirectService);
  const router = inject(Router);
  if (!authService.isLoggedIn()) {
    router.navigate(["/auth/login"]);
    return false;
  }
  if (!redirectService.canAccessUrl(state.url)) {
    const defaultRoute = redirectService.getDefaultRoute();
    if (defaultRoute && defaultRoute !== state.url) {
      router.navigate([defaultRoute]);
    } else {
      router.navigate(["/auth/login"]);
    }
    return false;
  }
  return true;
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "index",
    pathMatch: "full"
  },
  {
    path: "auth",
    loadComponent: () => import("./chunk-AFHUFPZD.js").then((m) => m.AuthComponent),
    children: [
      { path: "forgot-password", loadComponent: () => import("./chunk-RIKLPU4C.js").then((m) => m.ForgotPasswordComponent) },
      { path: "login", loadComponent: () => import("./chunk-UDOG3TYT.js").then((m) => m.LoginComponent) },
      { path: "register", loadComponent: () => import("./chunk-7M4JFXGK.js").then((m) => m.RegisterComponent) },
      { path: "set-password", loadComponent: () => import("./chunk-WSXOW4GR.js").then((m) => m.SetPasswordComponent) },
      { path: "otp", loadComponent: () => import("./chunk-U7YKVGFM.js").then((m) => m.OtpComponent) },
      { path: "lock-screen", loadComponent: () => import("./chunk-YNEB6NH4.js").then((m) => m.LockScreenComponent) },
      { path: "magic-verify", loadComponent: () => import("./chunk-W5PZC7L3.js").then((m) => m.MagicVerifyComponent) },
      { path: "activate", loadComponent: () => import("./chunk-4R7PORNN.js").then((m) => m.ActivateComponent) }
    ]
  },
  // ══════════════════════════════════════════════════════════════════════
  // PAGES PLEIN ÉCRAN — en dehors de tout layout back-office
  // ══════════════════════════════════════════════════════════════════════
  {
    path: "courses/course-watch/:id",
    loadComponent: () => import("./chunk-LHPK4VJN.js").then((m) => m.CourseWatchComponent),
    canActivate: [authGuard]
  },
  // Rétrocompatibilité ancienne URL
  {
    path: "student/lecture-formation/:id",
    loadComponent: () => import("./chunk-LHPK4VJN.js").then((m) => m.CourseWatchComponent),
    canActivate: [authGuard]
  },
  // ✅ Route quiz plein écran — hors layout, même niveau que lecture-formation
  {
    path: "student/quiz/:id",
    loadComponent: () => import("./chunk-MTGCHC3U.js").then((m) => m.StudentQuizQuestionsComponent),
    canActivate: [authGuard]
  },
  {
    path: "",
    loadComponent: () => import("./chunk-IQZKOWGA.js").then((m) => m.FeaturesComponent),
    children: [
      { path: "index", loadComponent: () => import("./chunk-EJXUIYBJ.js").then((m) => m.HomeComponent) },
      { path: "index-two", loadComponent: () => import("./chunk-K5IXEIBQ.js").then((m) => m.Home2Component) },
      { path: "index-three", loadComponent: () => import("./chunk-XERSZWEX.js").then((m) => m.Home3Component) },
      { path: "index-four", loadComponent: () => import("./chunk-MGM7DXR3.js").then((m) => m.Home4Component) },
      { path: "index-five", loadComponent: () => import("./chunk-2EMQ7JZZ.js").then((m) => m.Home5Component) },
      { path: "index-six", loadComponent: () => import("./chunk-SDQPBKKY.js").then((m) => m.Home6Component) },
      {
        path: "courses",
        loadComponent: () => import("./chunk-LXAMCF3O.js").then((m) => m.CoursesComponent),
        children: [
          { path: "add-course", loadComponent: () => import("./chunk-ZY3HIT7C.js").then((m) => m.AddCourseComponent) },
          { path: "course-details/:id", loadComponent: () => import("./chunk-J2JN4XY6.js").then((m) => m.CourseDetailsComponent) },
          { path: "course-details-2", loadComponent: () => import("./chunk-PFQVGNNN.js").then((m) => m.CourseDetails2Component) },
          { path: "course-list", loadComponent: () => import("./chunk-36AS42PD.js").then((m) => m.CourseListComponent) },
          { path: "course-grid", loadComponent: () => import("./chunk-MOIMRNXF.js").then((m) => m.CourseGridComponent) },
          { path: "course-category", loadComponent: () => import("./chunk-VWRUOEWZ.js").then((m) => m.CourseCategoryComponent) },
          { path: "course-category-2", loadComponent: () => import("./chunk-ETS74NHJ.js").then((m) => m.CourseCategory2Component) },
          { path: "course-category-3", loadComponent: () => import("./chunk-O2HMES5J.js").then((m) => m.CourseCategory3Component) },
          { path: "course-resume", loadComponent: () => import("./chunk-DFP23U5X.js").then((m) => m.CourseResumeComponent) },
          { path: "cart", loadComponent: () => import("./chunk-WYQJGNE7.js").then((m) => m.CourseCartComponent) },
          { path: "checkout", loadComponent: () => import("./chunk-SE2Z662M.js").then((m) => m.CourseCheckoutComponent) },
          { path: "add-course", loadComponent: () => import("./chunk-ZY3HIT7C.js").then((m) => m.AddCourseComponent) },
          { path: "instructor-course-add", loadComponent: () => import("./chunk-HNTHBOII.js").then((m) => m.InstructorCourseAddComponent) },
          { path: "instructor-course-edit/:id", loadComponent: () => import("./chunk-ZY4HTZLI.js").then((m) => m.InstructorCourseEditComponent) },
          { path: "instructor-course-details/:id", loadComponent: () => import("./chunk-3ESMFDMF.js").then((m) => m.InstructorCourseDetailsComponent) }
        ]
      },
      {
        path: "instructor",
        loadComponent: () => import("./chunk-LIEJHNZW.js").then((m) => m.InstructorComponent),
        canActivate: [layoutGuard],
        children: [
          { path: "instructor-dashboard", loadComponent: () => import("./chunk-5AD4O345.js").then((m) => m.InstructorDashboardComponent) },
          { path: "instructor-profile", loadComponent: () => import("./chunk-YITGXGHL.js").then((m) => m.InstructorProfileComponent) },
          { path: "instructor-payouts", loadComponent: () => import("./chunk-TOAEQUC2.js").then((m) => m.InstructorPayoutsComponent) },
          { path: "instructor-tickets", loadComponent: () => import("./chunk-6UHW3DSH.js").then((m) => m.InstructorTicketsComponent) },
          { path: "instructor-announcements", loadComponent: () => import("./chunk-XJIJ7UFV.js").then((m) => m.InstructorAnnouncementsComponent) },
          { path: "instructor-quiz-questions/:quizId", loadComponent: () => import("./chunk-SNHBOCMX.js").then((m) => m.InstructorQuizQuestionsComponent) },
          { path: "instructor-quiz-results", loadComponent: () => import("./chunk-PL5Q5NU6.js").then((m) => m.InstructorQuizResultsComponent) },
          { path: "instructor-quiz-details", loadComponent: () => import("./chunk-DDRBLJNP.js").then((m) => m.InstructorQuizDetailsComponent) },
          { path: "instructor-quiz", loadComponent: () => import("./chunk-ZC5SPC25.js").then((m) => m.InstructorQuizComponent) },
          { path: "instructor-certificate", loadComponent: () => import("./chunk-AZ5MF5US.js").then((m) => m.InstructorCertificateComponent) },
          { path: "instructor-earnings", loadComponent: () => import("./chunk-NQDWTXOE.js").then((m) => m.InstructorEarningsComponent) },
          { path: "instructor-statements", loadComponent: () => import("./chunk-M2RRUEZB.js").then((m) => m.InstructorStatementsComponent) },
          { path: "instructor-course", loadComponent: () => import("./chunk-BHPSJMUB.js").then((m) => m.InstructorCourseComponent) },
          { path: "instructor-course-grid", loadComponent: () => import("./chunk-X7RKCNMN.js").then((m) => m.InstructorCourseGridComponent) },
          { path: "instructor-session", loadComponent: () => import("./chunk-NHKQMSTV.js").then((m) => m.InstructorSessionComponent) },
          { path: "instructor-mes-sondages", loadComponent: () => import("./chunk-MBQQXVVK.js").then((m) => m.InstructorMesSondagesComponent) },
          { path: "video-ressources", loadComponent: () => import("./chunk-Q53ZWUQY.js").then((m) => m.VideoRessourcesComponent) },
          { path: "instructor-message", loadComponent: () => import("./chunk-ELMVQ2T4.js").then((m) => m.InstructorMessageComponent) },
          { path: "instructor-assignment", loadComponent: () => import("./chunk-UWEBP3UB.js").then((m) => m.InstructorAssignmentComponent) },
          { path: "students-list", loadComponent: () => import("./chunk-OQ54MATY.js").then((m) => m.StudentsListComponent) },
          { path: "students-grid", loadComponent: () => import("./chunk-QZMVK7SH.js").then((m) => m.StudentsGridComponent) },
          { path: "students-details", loadComponent: () => import("./chunk-VCOVBA4Q.js").then((m) => m.StudentsDetailsComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-Y42JFDCL.js").then((m) => m.SettingsComponent),
            children: [
              { path: "instructor-setting-withdraw", loadComponent: () => import("./chunk-NBMK7HXW.js").then((m) => m.InstructorSettingWithdrawComponent) },
              { path: "instructor-setting-notifications", loadComponent: () => import("./chunk-HJ46ZDB5.js").then((m) => m.InstructorSettingNotificationsComponent) },
              { path: "instructor-plans", loadComponent: () => import("./chunk-JT7F3LT7.js").then((m) => m.InstructorPlansComponent) },
              { path: "instructor-integrations", loadComponent: () => import("./chunk-FYP5DEU5.js").then((m) => m.InstructorIntegrationsComponent) },
              { path: "instructor-linked-accounts", loadComponent: () => import("./chunk-K4ZSUDK6.js").then((m) => m.InstructorLinkedAccountsComponent) },
              { path: "instructor-social-profiles", loadComponent: () => import("./chunk-NCXHNG3E.js").then((m) => m.InstructorSocialProfilesComponent) },
              { path: "instructor-change-password", loadComponent: () => import("./chunk-YF6PF4ZC.js").then((m) => m.InstructorChangePasswordComponent) },
              { path: "instructor-settings", loadComponent: () => import("./chunk-4CY4SVRT.js").then((m) => m.InstructorSettingsComponent) }
            ]
          }
        ]
      },
      {
        path: "superadmin",
        loadComponent: () => import("./chunk-SO7VTD6G.js").then((m) => m.SuperadminComponent),
        canActivate: [layoutGuard],
        children: [
          { path: "superadmin-dashboard", loadComponent: () => import("./chunk-CFOQY5UY.js").then((m) => m.SuperAdminDashboardComponent) },
          { path: "superadmin-profile", loadComponent: () => import("./chunk-PYBBKMY7.js").then((m) => m.SuperadminProfileComponent) },
          { path: "superadmin-payouts", loadComponent: () => import("./chunk-C7DGXPZG.js").then((m) => m.SuperadminPayoutsComponent) },
          { path: "superadmin-tickets", loadComponent: () => import("./chunk-EKJT5CJV.js").then((m) => m.SuperadminTicketsComponent) },
          { path: "superadmin-companymanagement", loadComponent: () => import("./chunk-S7Z5QCXV.js").then((m) => m.CompanyManagementComponent) },
          { path: "superadmin-company-details/:id", loadComponent: () => import("./chunk-FK3UJHVT.js").then((m) => m.CompanyDetailsComponent) },
          { path: "superadmin-company-add", loadComponent: () => import("./chunk-E27TP3BW.js").then((m) => m.CompanyAddComponent) },
          { path: "superadmin-client-list", loadComponent: () => import("./chunk-AOZ6OXEM.js").then((m) => m.ClientListComponent) },
          { path: "superadmin-client-add", loadComponent: () => import("./chunk-2U5LL6CU.js").then((m) => m.ClientAddComponent) },
          { path: "superadmin-client-details/:id", loadComponent: () => import("./chunk-HXLGG35R.js").then((m) => m.ClientDetailsComponent) },
          { path: "superadmin-permission", loadComponent: () => import("./chunk-TZRSKAWN.js").then((m) => m.SuperadminPermissionComponent) },
          { path: "superadmin-role", loadComponent: () => import("./chunk-EBBZSHLG.js").then((m) => m.SuperadminRoleComponent) },
          // {path:'superadmin-register',loadComponent:()=>import ('./features/superadmin/register/register.component').then((m)=>m.RegisterComponent)},
          { path: "superadmin-user-list", loadComponent: () => import("./chunk-Q5WCG7BX.js").then((m) => m.UserListComponent), canActivate: [PermissionGuard], data: { permission: "lister utilisateurs" } },
          { path: "superadmin-user-details/:id", loadComponent: () => import("./chunk-TC34OATL.js").then((m) => m.UserDetailsComponent) },
          { path: "superadmin-user-add", loadComponent: () => import("./chunk-BZ55UTCV.js").then((m) => m.UserAddComponent) },
          { path: "superadmin-announcements", loadComponent: () => import("./chunk-KSMMOH57.js").then((m) => m.SuperadminAnnouncementsComponent) },
          { path: "superadmin-quiz-questions", loadComponent: () => import("./chunk-BEFHZQXD.js").then((m) => m.SuperadminQuizQuestionsComponent) },
          { path: "superadmin-quiz-results", loadComponent: () => import("./chunk-QE4TQ27E.js").then((m) => m.SuperadminQuizResultsComponent) },
          { path: "superadmin-quiz-details", loadComponent: () => import("./chunk-G5TJONGH.js").then((m) => m.SuperadminQuizDetailsComponent) },
          { path: "superadmin-quiz", loadComponent: () => import("./chunk-HUFYOI7H.js").then((m) => m.SuperadminQuizComponent) },
          { path: "superadmin-certificate", loadComponent: () => import("./chunk-PH43RXPR.js").then((m) => m.SuperadminCertificateComponent) },
          { path: "superadmin-earnings", loadComponent: () => import("./chunk-HAV26A7W.js").then((m) => m.SuperadminEarningsComponent) },
          { path: "superadmin-rapports", loadComponent: () => import("./chunk-RFJPRXAF.js").then((m) => m.SuperadminRapportsComponent) },
          { path: "superadmin-course", loadComponent: () => import("./chunk-HWE5PZPK.js").then((m) => m.SuperadminCourseComponent) },
          { path: "superadmin-course-grid", loadComponent: () => import("./chunk-KWOM2ALG.js").then((m) => m.SuperadminCourseGridComponent) },
          { path: "superadmin-session", loadComponent: () => import("./chunk-CQWEORON.js").then((m) => m.SuperadminSessionComponent) },
          { path: "superadmin-parcours", loadComponent: () => import("./chunk-ZLM55TK2.js").then((m) => m.SuperadminParcoursComponent) },
          { path: "superadmin-catalogue", loadComponent: () => import("./chunk-ORWPEFAU.js").then((m) => m.SuperadminCatalogueComponent) },
          { path: "superadmin-message", loadComponent: () => import("./chunk-PJLOGOOV.js").then((m) => m.SuperadminMessageComponent) },
          { path: "superadmin-audit-logs", loadComponent: () => import("./chunk-GMZI5MKC.js").then((m) => m.SuperadminAuditLogsComponent) },
          { path: "superadmin-sondage", loadComponent: () => import("./chunk-ZTNAX4LG.js").then((m) => m.SuperadminSondageComponent) },
          { path: "superadmin-assignment", loadComponent: () => import("./chunk-WFKKCILU.js").then((m) => m.SuperadminAssignmentComponent) },
          { path: "students-list", loadComponent: () => import("./chunk-ZWYXDSAG.js").then((m) => m.StudentsListComponent) },
          { path: "students-grid", loadComponent: () => import("./chunk-N25P2A2K.js").then((m) => m.StudentsGridComponent) },
          { path: "students-details", loadComponent: () => import("./chunk-5IPJ6HAW.js").then((m) => m.StudentsDetailsComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-Z7VIXORQ.js").then((m) => m.SettingsComponent),
            children: [
              { path: "superadmin-setting-withdraw", loadComponent: () => import("./chunk-KXNOPEVW.js").then((m) => m.SuperadminSettingWithdrawComponent) },
              { path: "superadmin-setting-notifications", loadComponent: () => import("./chunk-AI6TSAV5.js").then((m) => m.SuperadminSettingNotificationsComponent) },
              { path: "superadmin-plans", loadComponent: () => import("./chunk-2JXTFGY2.js").then((m) => m.SuperadminPlansComponent) },
              { path: "superadmin-integrations", loadComponent: () => import("./chunk-2Y2EVDCR.js").then((m) => m.SuperadminIntegrationsComponent) },
              { path: "superadmin-linked-accounts", loadComponent: () => import("./chunk-X27UKQGN.js").then((m) => m.SuperadminLinkedAccountsComponent) },
              { path: "superadmin-social-profiles", loadComponent: () => import("./chunk-VM7FDVQE.js").then((m) => m.SuperadminSocialProfilesComponent) },
              { path: "superadmin-change-password", loadComponent: () => import("./chunk-ULVE76F3.js").then((m) => m.SuperadminChangePasswordComponent) },
              { path: "superadmin-settings", loadComponent: () => import("./chunk-2RY5XIRG.js").then((m) => m.SuperadminSettingsComponent) }
            ]
          }
        ]
      },
      {
        path: "adminrh",
        loadComponent: () => import("./chunk-2JS7YG7O.js").then((m) => m.AdminrhComponent),
        canActivate: [layoutGuard],
        children: [
          { path: "adminrh-dashboard", loadComponent: () => import("./chunk-ZPAGPJPK.js").then((m) => m.AdminrhDashboardComponent) },
          { path: "adminrh-profile", loadComponent: () => import("./chunk-LT7JY3U7.js").then((m) => m.AdminrhProfileComponent) },
          { path: "adminrh-payouts", loadComponent: () => import("./chunk-HOKY2ZJY.js").then((m) => m.AdminrhPayoutsComponent) },
          { path: "adminrh-tickets", loadComponent: () => import("./chunk-SNGT6H33.js").then((m) => m.AdminrhTicketsComponent) },
          { path: "adminrh-companymanagement", loadComponent: () => import("./chunk-TFLD4QQL.js").then((m) => m.CompanyManagementComponent) },
          { path: "adminrh-company-details/:id", loadComponent: () => import("./chunk-W24RBU3H.js").then((m) => m.CompanyDetailsComponent) },
          { path: "adminrh-company-add", loadComponent: () => import("./chunk-DQXJEB76.js").then((m) => m.CompanyAddComponent) },
          { path: "adminrh-client-list", loadComponent: () => import("./chunk-QZYFSQLC.js").then((m) => m.ClientListComponent) },
          { path: "adminrh-client-add", loadComponent: () => import("./chunk-XC7DDVVJ.js").then((m) => m.ClientAddComponent) },
          { path: "adminrh-client-details/:id", loadComponent: () => import("./chunk-N6CBTHIA.js").then((m) => m.ClientDetailsComponent) },
          { path: "adminrh-permission", loadComponent: () => import("./chunk-O2LH44ZW.js").then((m) => m.AdminrhPermissionComponent) },
          { path: "adminrh-role", loadComponent: () => import("./chunk-644DPLXI.js").then((m) => m.AdminrhRoleComponent) },
          // {path:'adminrh-register',loadComponent:()=>import ('./features/adminrh/register/register.component').then((m)=>m.RegisterComponent)},
          { path: "adminrh-user-list", loadComponent: () => import("./chunk-JOH7SEM5.js").then((m) => m.UserListComponent) },
          { path: "adminrh-user-group-list", loadComponent: () => import("./chunk-PBN2PZ76.js").then((m) => m.UserGroupListComponent) },
          { path: "adminrh-user-details/:id", loadComponent: () => import("./chunk-XUIMLJZK.js").then((m) => m.UserDetailsComponent) },
          { path: "adminrh-user-add", loadComponent: () => import("./chunk-NPE725XP.js").then((m) => m.UserAddComponent) },
          { path: "adminrh-demande", loadComponent: () => import("./chunk-QI5G5AVO.js").then((m) => m.AdminrhDemandeComponent) },
          { path: "adminrh-announcements", loadComponent: () => import("./chunk-DKAWTRBO.js").then((m) => m.AdminrhAnnouncementsComponent) },
          { path: "adminrh-quiz-questions/:quizId", loadComponent: () => import("./chunk-I43YSHYT.js").then((m) => m.AdminrhQuizQuestionsComponent) },
          { path: "adminrh-quiz-questions", loadComponent: () => import("./chunk-I43YSHYT.js").then((m) => m.AdminrhQuizQuestionsComponent) },
          { path: "adminrh-quiz-results", loadComponent: () => import("./chunk-OHC3JO2W.js").then((m) => m.AdminrhQuizResultsComponent) },
          { path: "adminrh-quiz-details", loadComponent: () => import("./chunk-2VDBP4XF.js").then((m) => m.AdminrhQuizDetailsComponent) },
          { path: "adminrh-quiz", loadComponent: () => import("./chunk-LLYJOWJA.js").then((m) => m.AdminrhQuizComponent) },
          { path: "adminrh-certificate", loadComponent: () => import("./chunk-S4FJFR7G.js").then((m) => m.AdminrhCertificateComponent) },
          { path: "adminrh-certificate-modele", loadComponent: () => import("./chunk-CHUWEROR.js").then((m) => m.AdminrhCertificateModeleComponent) },
          { path: "adminrh-sondage", loadComponent: () => import("./chunk-DZSTO337.js").then((m) => m.AdminrhSondageComponent) },
          { path: "adminrh-mes-sondages", loadComponent: () => import("./chunk-Q6IDE7MW.js").then((m) => m.AdminrhMesSondagesComponent) },
          { path: "adminrh-certifier", loadComponent: () => import("./chunk-GABHHDGQ.js").then((m) => m.AdminrhCertifierComponent) },
          { path: "adminrh-categorie", loadComponent: () => import("./chunk-YAUST5V5.js").then((m) => m.AdminrhCategorieComponent) },
          { path: "adminrh-catalogue", loadComponent: () => import("./chunk-4CQZPHZD.js").then((m) => m.AdminrhCatalogueComponent) },
          { path: "adminrh-parcours", loadComponent: () => import("./chunk-GNQJWPAE.js").then((m) => m.AdminrhParcoursComponent) },
          { path: "adminrh-demande-parcours", loadComponent: () => import("./chunk-JLX7H6HJ.js").then((m) => m.AdminrhDemandeParcoursComponent) },
          { path: "adminrh-demande-catalogue", loadComponent: () => import("./chunk-ROHSRBJD.js").then((m) => m.AdminrhDemandeCatalogueComponent) },
          { path: "adminrh-demande-session", loadComponent: () => import("./chunk-KZONBNMD.js").then((m) => m.AdminrhDemandeSessionComponent) },
          { path: "adminrh-earnings", loadComponent: () => import("./chunk-GUZZT5ME.js").then((m) => m.AdminrhEarningsComponent) },
          { path: "adminrh-rapport", loadComponent: () => import("./chunk-YXUIKLCC.js").then((m) => m.AdminrhStatementsComponent) },
          { path: "adminrh-statements", loadComponent: () => import("./chunk-YXUIKLCC.js").then((m) => m.AdminrhStatementsComponent) },
          { path: "adminrh-course", loadComponent: () => import("./chunk-CG6VUR5R.js").then((m) => m.AdminrhCourseComponent) },
          { path: "adminrh-course-grid", loadComponent: () => import("./chunk-3OSOMWKV.js").then((m) => m.AdminrhCourseGridComponent) },
          { path: "adminrh-session", loadComponent: () => import("./chunk-UJ4A3OBD.js").then((m) => m.AdminrhSessionComponent) },
          { path: "adminrh-message", loadComponent: () => import("./chunk-LHUQNN3T.js").then((m) => m.AdminrhMessageComponent) },
          { path: "adminrh-assignment", loadComponent: () => import("./chunk-M5AGCVAY.js").then((m) => m.AdminrhAssignmentComponent) },
          { path: "students-list", loadComponent: () => import("./chunk-QCWDIIMV.js").then((m) => m.StudentsListComponent) },
          { path: "students-grid", loadComponent: () => import("./chunk-J5DZTLZE.js").then((m) => m.StudentsGridComponent) },
          { path: "students-details", loadComponent: () => import("./chunk-HO4WIXSY.js").then((m) => m.StudentsDetailsComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-7CIIM5SX.js").then((m) => m.SettingsComponent),
            children: [
              { path: "adminrh-setting-withdraw", loadComponent: () => import("./chunk-BC6EDIAA.js").then((m) => m.AdminrhSettingWithdrawComponent) },
              { path: "adminrh-setting-notifications", loadComponent: () => import("./chunk-NHGRJWTQ.js").then((m) => m.AdminrhSettingNotificationsComponent) },
              { path: "adminrh-plans", loadComponent: () => import("./chunk-WOOLPPOJ.js").then((m) => m.AdminrhPlansComponent) },
              { path: "adminrh-integrations", loadComponent: () => import("./chunk-TFFU7QFT.js").then((m) => m.AdminrhIntegrationsComponent) },
              { path: "adminrh-linked-accounts", loadComponent: () => import("./chunk-BC3GT4CJ.js").then((m) => m.AdminrhLinkedAccountsComponent) },
              { path: "adminrh-social-profiles", loadComponent: () => import("./chunk-5HQW5QXP.js").then((m) => m.AdminrhSocialProfilesComponent) },
              { path: "adminrh-change-password", loadComponent: () => import("./chunk-2OHJISKI.js").then((m) => m.AdminrhChangePasswordComponent) },
              { path: "adminrh-settings", loadComponent: () => import("./chunk-35LMFTFI.js").then((m) => m.AdminrhSettingsComponent) }
            ]
          }
        ]
      },
      {
        path: "pages",
        loadComponent: () => import("./chunk-NK2OG5PI.js").then((m) => m.PagesComponent),
        children: [
          { path: "faq", loadComponent: () => import("./chunk-3CTB55XM.js").then((m) => m.FaqComponent) },
          { path: "notifications", loadComponent: () => import("./chunk-Y77QH5SE.js").then((m) => m.NotificationsComponent) },
          { path: "pricing-plan", loadComponent: () => import("./chunk-L5QGFJMT.js").then((m) => m.PricingPlanComponent) },
          { path: "term-condition", loadComponent: () => import("./chunk-7CDTYB3F.js").then((m) => m.TermConditionComponent) },
          { path: "privacy-policy", loadComponent: () => import("./chunk-ZUXWSSO5.js").then((m) => m.PrivacyPolicyComponent) },
          { path: "instructor-details", loadComponent: () => import("./chunk-KEKVLCSI.js").then((m) => m.InstructorDetailsComponent) },
          { path: "become-an-instructor", loadComponent: () => import("./chunk-KGMYU6QD.js").then((m) => m.BecomeAnExpertComponent) },
          { path: "instructor-grid", loadComponent: () => import("./chunk-3HI2LBRP.js").then((m) => m.InstructorGridComponent) },
          { path: "instructor-list", loadComponent: () => import("./chunk-PTPFDMVG.js").then((m) => m.InstructorListComponent) },
          { path: "contact-us", loadComponent: () => import("./chunk-A4SX2ZLB.js").then((m) => m.ContactUsComponent) },
          { path: "about-us", loadComponent: () => import("./chunk-DXXKGVED.js").then((m) => m.AboutUsComponent) },
          { path: "testimonial", loadComponent: () => import("./chunk-ZFEH3QTC.js").then((m) => m.TestimonialComponent) }
        ]
      },
      {
        path: "blog",
        loadComponent: () => import("./chunk-OR2JUVMU.js").then((m) => m.BlogComponent),
        children: [
          { path: "blog-grid", loadComponent: () => import("./chunk-VIQUYUCC.js").then((m) => m.BlogGridComponent) },
          { path: "blog-masonry", loadComponent: () => import("./chunk-MN5HGZUM.js").then((m) => m.BlogMasonryComponent) },
          { path: "blog-details-left-sidebar", loadComponent: () => import("./chunk-EHUN5MQH.js").then((m) => m.BlogDetailsLeftSidebarComponent) },
          { path: "blog-details-right-sidebar", loadComponent: () => import("./chunk-5OKOHNXW.js").then((m) => m.BlogDetailsRightSidebarComponent) },
          { path: "blog-2-grid", loadComponent: () => import("./chunk-DE2KFVKA.js").then((m) => m.Blog2GridComponent) },
          { path: "blog-3-grid", loadComponent: () => import("./chunk-YV4CB6L5.js").then((m) => m.Blog3GridComponent) },
          { path: "blog-carousal", loadComponent: () => import("./chunk-HGFZ7GZU.js").then((m) => m.BlogCarousalComponent) },
          { path: "blog-left-sidebar", loadComponent: () => import("./chunk-P7JN5OT5.js").then((m) => m.BlogLeftSidebarComponent) },
          { path: "blog-right-sidebar", loadComponent: () => import("./chunk-7HEYESQN.js").then((m) => m.BlogRightSidebarComponent) },
          { path: "blog-details", loadComponent: () => import("./chunk-QVDIQGGU.js").then((m) => m.BlogDetailsComponent) }
        ]
      },
      {
        path: "student",
        loadComponent: () => import("./chunk-TVAR4R44.js").then((m) => m.StudentComponent),
        canActivate: [layoutGuard],
        children: [
          { path: "student-dashboard", loadComponent: () => import("./chunk-GFUG3ZDJ.js").then((m) => m.StudentDashboardComponent) },
          { path: "student-profile", loadComponent: () => import("./chunk-QYWITHHN.js").then((m) => m.StudentProfileComponent) },
          // RENOMMÉ : student-courses → mes-catalogues
          { path: "mes-catalogues", loadComponent: () => import("./chunk-VAGTRCKZ.js").then((m) => m.MesCataloguesComponent) },
          { path: "mes-catalogues/:id", loadComponent: () => import("./chunk-HOQNVYJ4.js").then((m) => m.MesCataloguesDetailsComponent) },
          { path: "student-courses", redirectTo: "mes-catalogues", pathMatch: "full" },
          { path: "catalogue-detail/:id", loadComponent: () => import("./chunk-YHTZSQ7Z.js").then((m) => m.CatalogueDetailComponent) },
          // RENOMMÉ : mes-cours → mes-formations
          { path: "mes-formations", loadComponent: () => import("./chunk-DKFERZZ4.js").then((m) => m.MesCoursComponent) },
          { path: "mes-cours", redirectTo: "mes-formations", pathMatch: "full" },
          { path: "student-tickets", loadComponent: () => import("./chunk-NJXTKFBQ.js").then((m) => m.StudentTicketsComponent) },
          { path: "students-session", loadComponent: () => import("./chunk-SWSIYWNJ.js").then((m) => m.StudentsSessionsComponent) },
          { path: "sessions-acceptees", loadComponent: () => import("./chunk-N7R64JNJ.js").then((m) => m.SessionsAccepteesComponent) },
          // RENOMMÉ : students-catalogue → student-demande-catalogue
          { path: "student-demande-catalogue", loadComponent: () => import("./chunk-3JGJPIOP.js").then((m) => m.StudentDemandeCatalogueComponent) },
          { path: "students-catalogue", redirectTo: "student-demande-catalogue", pathMatch: "full" },
          { path: "students-explorer", loadComponent: () => import("./chunk-D4I76HUJ.js").then((m) => m.ExplorerComponent) },
          // RENOMMÉ : students-parcours → mes-demandes-parcours
          { path: "mes-demandes-parcours", loadComponent: () => import("./chunk-YRBWVAVO.js").then((m) => m.StudentDemandeParcoursComponent) },
          { path: "students-parcours", redirectTo: "mes-demandes-parcours", pathMatch: "full" },
          // RENOMMÉ : parcours-assignes → mes-parcours-assignes
          // RENOMMÉ : parcours-assignes → mes-parcours-assignes
          { path: "mes-parcours", loadComponent: () => import("./chunk-IZWKGZWB.js").then((m) => m.MesParcoursComponent) },
          { path: "parcours-assignes", redirectTo: "mes-parcours-assignes", pathMatch: "full" },
          { path: "mes-parcours", redirectTo: "mes-parcours-assignes", pathMatch: "full" },
          { path: "mes-parcours", redirectTo: "mes-parcours", pathMatch: "full" },
          // RENOMMÉ : parcours-assigne/:id → mes-parcours/:id
          { path: "mes-parcours/:id", loadComponent: () => import("./chunk-ODHJMCSY.js").then((m) => m.ParcoursAssigneDetailComponent) },
          { path: "parcours-assigne/:id", redirectTo: "mes-parcours/:id", pathMatch: "full" },
          // Détails parcours (pour n'importe quel parcours depuis l'explorer)
          { path: "parcours-details/:id", loadComponent: () => import("./chunk-AXYJFXFC.js").then((m) => m.ParcoursDetailsComponent) },
          { path: "student-sondage/:id", loadComponent: () => import("./chunk-AUTKLVKI.js").then((m) => m.StudentSondageComponent) },
          { path: "student-mes-sondages", loadComponent: () => import("./chunk-5WZZ2NHP.js").then((m) => m.StudentMesSondagesComponent) },
          { path: "student-quiz", loadComponent: () => import("./chunk-UBNWI4TG.js").then((m) => m.StudentQuizComponent) },
          { path: "student-quiz-questions/:id", loadComponent: () => import("./chunk-MTGCHC3U.js").then((m) => m.StudentQuizQuestionsComponent) },
          { path: "student-planning", loadComponent: () => import("./chunk-Y66UTFA3.js").then((m) => m.StudentPlanningComponent) },
          { path: "student-certificate", loadComponent: () => import("./chunk-SFLBBWJW.js").then((m) => m.StudentCertificateComponent) },
          { path: "student-demande", loadComponent: () => import("./chunk-OK5O2QJH.js").then((m) => m.StudentDemandeComponent) },
          { path: "mes-competences", loadComponent: () => import("./chunk-GXX43G76.js").then((m) => m.MesCompetencesComponent) },
          { path: "mes-competences-recommandees", loadComponent: () => import("./chunk-PINGA3BJ.js").then((m) => m.MesCompetencesRecommandeesComponent) },
          { path: "student-message", loadComponent: () => import("./chunk-WEO2XVA5.js").then((m) => m.StudentMessageComponent) },
          { path: "student-qa", loadComponent: () => import("./chunk-I5ZA5DT6.js").then((m) => m.StudentQaComponent) },
          { path: "student-order-history", loadComponent: () => import("./chunk-KJTWAAGZ.js").then((m) => m.StudentOrderHistoryComponent) },
          { path: "student-referral", loadComponent: () => import("./chunk-KKAK7MBS.js").then((m) => m.StudentReferralComponent) },
          { path: "student-reviews", loadComponent: () => import("./chunk-7H2RYBDM.js").then((m) => m.StudentReviewsComponent) },
          { path: "student-wishlist", loadComponent: () => import("./chunk-GSPYADGP.js").then((m) => m.StudentWishlistComponent) },
          { path: "ecart-competences", loadComponent: () => import("./chunk-RG3OTZMY.js").then((m) => m.EcartCompetencesComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-7VJZKSTT.js").then((m) => m.SettingsComponent),
            children: [
              { path: "student-linked-accounts", loadComponent: () => import("./chunk-RR5PW2JR.js").then((m) => m.StudentLinkedAccountsComponent) },
              { path: "student-change-password", loadComponent: () => import("./chunk-IFJ6LGX4.js").then((m) => m.StudentChangePasswordComponent) },
              { path: "student-settings", loadComponent: () => import("./chunk-IK3QT5CD.js").then((m) => m.StudentSettingsComponent) },
              { path: "student-notifications", loadComponent: () => import("./chunk-L263IITG.js").then((m) => m.StudentNotificationsComponent) },
              { path: "student-billing-address", loadComponent: () => import("./chunk-4MRDBYDM.js").then((m) => m.StudentBillingAddressComponent) },
              { path: "student-social-profile", loadComponent: () => import("./chunk-S56VQIM7.js").then((m) => m.StudentSocialProfileComponent) }
            ]
          }
        ]
      }
    ]
  },
  { path: "verify-certificate", loadComponent: () => import("./chunk-4JKKRASK.js").then((m) => m.VerifyCertificateComponent) },
  { path: "sondage/:token", loadComponent: () => import("./chunk-2WYBMUNU.js").then((m) => m.SondagePublicComponent) },
  { path: "under-construction", loadComponent: () => import("./chunk-FLYJRV6J.js").then((m) => m.UnderConstructionComponent) },
  { path: "coming-soon", loadComponent: () => import("./chunk-34LDNRLS.js").then((m) => m.ComingSoonComponent) },
  { path: "error-500", loadComponent: () => import("./chunk-QINIHWT3.js").then((m) => m.Error500Component) },
  { path: "error-404", loadComponent: () => import("./chunk-V7ZRU2JR.js").then((m) => m.Error404Component) },
  {
    path: "**",
    redirectTo: "error-404",
    pathMatch: "full"
  }
];

export {
  routes
};
//# sourceMappingURL=chunk-M2RYAMBV.js.map
