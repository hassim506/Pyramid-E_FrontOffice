import {
  PermissionService
} from "./chunk-HPF6XDYM.js";
import {
  RoleRedirectService
} from "./chunk-Q2ZVMBGJ.js";
import {
  AuthService
} from "./chunk-GD4TWLVQ.js";
import {
  Router
} from "./chunk-M6KR3YQW.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTSSTHJF.js";

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
    loadComponent: () => import("./chunk-PZ3IRYAL.js").then((m) => m.AuthComponent),
    children: [
      { path: "forgot-password", loadComponent: () => import("./chunk-OQJ7HJYC.js").then((m) => m.ForgotPasswordComponent) },
      { path: "login", loadComponent: () => import("./chunk-7XGK6Q6G.js").then((m) => m.LoginComponent) },
      { path: "register", loadComponent: () => import("./chunk-PGHIEZIJ.js").then((m) => m.RegisterComponent) },
      { path: "set-password", loadComponent: () => import("./chunk-Y2N4MJQT.js").then((m) => m.SetPasswordComponent) },
      { path: "otp", loadComponent: () => import("./chunk-GJVDBD3G.js").then((m) => m.OtpComponent) },
      { path: "lock-screen", loadComponent: () => import("./chunk-7MVX4GKF.js").then((m) => m.LockScreenComponent) },
      { path: "magic-verify", loadComponent: () => import("./chunk-JUEI53HQ.js").then((m) => m.MagicVerifyComponent) },
      { path: "activate", loadComponent: () => import("./chunk-Y2QP5SCW.js").then((m) => m.ActivateComponent) }
    ]
  },
  // ══════════════════════════════════════════════════════════════════════
  // PAGES PLEIN ÉCRAN — en dehors de tout layout back-office
  // ══════════════════════════════════════════════════════════════════════
  {
    path: "courses/course-watch/:id",
    loadComponent: () => import("./chunk-B3GWLQNX.js").then((m) => m.CourseWatchComponent),
    canActivate: [authGuard]
  },
  // Rétrocompatibilité ancienne URL
  {
    path: "student/lecture-formation/:id",
    loadComponent: () => import("./chunk-B3GWLQNX.js").then((m) => m.CourseWatchComponent),
    canActivate: [authGuard]
  },
  // ✅ Route quiz plein écran — hors layout, même niveau que lecture-formation
  {
    path: "student/quiz/:id",
    loadComponent: () => import("./chunk-JR6APGKN.js").then((m) => m.StudentQuizQuestionsComponent),
    canActivate: [authGuard]
  },
  {
    path: "",
    loadComponent: () => import("./chunk-3KV4PC24.js").then((m) => m.FeaturesComponent),
    children: [
      { path: "index", loadComponent: () => import("./chunk-ETGJZPQS.js").then((m) => m.HomeComponent) },
      { path: "index-two", loadComponent: () => import("./chunk-EKQ7S2RT.js").then((m) => m.Home2Component) },
      { path: "index-three", loadComponent: () => import("./chunk-TD62UXED.js").then((m) => m.Home3Component) },
      { path: "index-four", loadComponent: () => import("./chunk-ALXJQYFU.js").then((m) => m.Home4Component) },
      { path: "index-five", loadComponent: () => import("./chunk-3VX7FFN3.js").then((m) => m.Home5Component) },
      { path: "index-six", loadComponent: () => import("./chunk-J7DOBXYW.js").then((m) => m.Home6Component) },
      {
        path: "courses",
        loadComponent: () => import("./chunk-DJBSN2HV.js").then((m) => m.CoursesComponent),
        children: [
          { path: "add-course", loadComponent: () => import("./chunk-B37MXYXA.js").then((m) => m.AddCourseComponent) },
          { path: "course-details/:id", loadComponent: () => import("./chunk-PQO3O4Z4.js").then((m) => m.CourseDetailsComponent) },
          { path: "course-details-2", loadComponent: () => import("./chunk-I7HWLJOB.js").then((m) => m.CourseDetails2Component) },
          { path: "course-list", loadComponent: () => import("./chunk-PF6CBWCI.js").then((m) => m.CourseListComponent) },
          { path: "course-grid", loadComponent: () => import("./chunk-K2TTAAWD.js").then((m) => m.CourseGridComponent) },
          { path: "course-category", loadComponent: () => import("./chunk-W2QYG6LR.js").then((m) => m.CourseCategoryComponent) },
          { path: "course-category-2", loadComponent: () => import("./chunk-KFAWJHPT.js").then((m) => m.CourseCategory2Component) },
          { path: "course-category-3", loadComponent: () => import("./chunk-HOIYLARQ.js").then((m) => m.CourseCategory3Component) },
          { path: "course-resume", loadComponent: () => import("./chunk-I6Z77M3O.js").then((m) => m.CourseResumeComponent) },
          { path: "cart", loadComponent: () => import("./chunk-6IXDBIQA.js").then((m) => m.CourseCartComponent) },
          { path: "checkout", loadComponent: () => import("./chunk-YLW4GBCR.js").then((m) => m.CourseCheckoutComponent) },
          { path: "add-course", loadComponent: () => import("./chunk-B37MXYXA.js").then((m) => m.AddCourseComponent) },
          { path: "instructor-course-add", loadComponent: () => import("./chunk-7MQ5FR7M.js").then((m) => m.InstructorCourseAddComponent) },
          { path: "instructor-course-edit/:id", loadComponent: () => import("./chunk-YBF4R2ES.js").then((m) => m.InstructorCourseEditComponent) },
          { path: "instructor-course-details/:id", loadComponent: () => import("./chunk-LXQYZAC3.js").then((m) => m.InstructorCourseDetailsComponent) }
        ]
      },
      {
        path: "instructor",
        loadComponent: () => import("./chunk-EBCU73NV.js").then((m) => m.InstructorComponent),
        canActivate: [layoutGuard],
        children: [
          { path: "instructor-dashboard", loadComponent: () => import("./chunk-7RLNV77P.js").then((m) => m.InstructorDashboardComponent) },
          { path: "instructor-profile", loadComponent: () => import("./chunk-6EPJCQN4.js").then((m) => m.InstructorProfileComponent) },
          { path: "instructor-payouts", loadComponent: () => import("./chunk-RGR3CIOP.js").then((m) => m.InstructorPayoutsComponent) },
          { path: "instructor-tickets", loadComponent: () => import("./chunk-QMCLDQQN.js").then((m) => m.InstructorTicketsComponent) },
          { path: "instructor-announcements", loadComponent: () => import("./chunk-EKGFMJO6.js").then((m) => m.InstructorAnnouncementsComponent) },
          { path: "instructor-quiz-questions/:quizId", loadComponent: () => import("./chunk-IXSFIPSR.js").then((m) => m.InstructorQuizQuestionsComponent) },
          { path: "instructor-quiz-results", loadComponent: () => import("./chunk-VT5QCD5U.js").then((m) => m.InstructorQuizResultsComponent) },
          { path: "instructor-quiz-details", loadComponent: () => import("./chunk-I2PUGBJ5.js").then((m) => m.InstructorQuizDetailsComponent) },
          { path: "instructor-quiz", loadComponent: () => import("./chunk-2MKYEYCT.js").then((m) => m.InstructorQuizComponent) },
          { path: "instructor-certificate", loadComponent: () => import("./chunk-BYYZPJYG.js").then((m) => m.InstructorCertificateComponent) },
          { path: "instructor-earnings", loadComponent: () => import("./chunk-7IJ4SBA5.js").then((m) => m.InstructorEarningsComponent) },
          { path: "instructor-statements", loadComponent: () => import("./chunk-RPRWZPO5.js").then((m) => m.InstructorStatementsComponent) },
          { path: "instructor-course", loadComponent: () => import("./chunk-RNBVB6ZO.js").then((m) => m.InstructorCourseComponent) },
          { path: "instructor-course-grid", loadComponent: () => import("./chunk-JAKJRWWT.js").then((m) => m.InstructorCourseGridComponent) },
          { path: "instructor-session", loadComponent: () => import("./chunk-L2LNG5SA.js").then((m) => m.InstructorSessionComponent) },
          { path: "instructor-mes-sondages", loadComponent: () => import("./chunk-FF5H3O4N.js").then((m) => m.InstructorMesSondagesComponent) },
          { path: "instructor-message", loadComponent: () => import("./chunk-OJ32KCPM.js").then((m) => m.InstructorMessageComponent) },
          { path: "instructor-assignment", loadComponent: () => import("./chunk-YFAD5ZSY.js").then((m) => m.InstructorAssignmentComponent) },
          { path: "students-list", loadComponent: () => import("./chunk-ZNCRQY24.js").then((m) => m.StudentsListComponent) },
          { path: "students-grid", loadComponent: () => import("./chunk-YPABADGM.js").then((m) => m.StudentsGridComponent) },
          { path: "students-details", loadComponent: () => import("./chunk-BKWL2BCY.js").then((m) => m.StudentsDetailsComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-MV5BIUQN.js").then((m) => m.SettingsComponent),
            children: [
              { path: "instructor-setting-withdraw", loadComponent: () => import("./chunk-C7VS743A.js").then((m) => m.InstructorSettingWithdrawComponent) },
              { path: "instructor-setting-notifications", loadComponent: () => import("./chunk-WB5CWDYK.js").then((m) => m.InstructorSettingNotificationsComponent) },
              { path: "instructor-plans", loadComponent: () => import("./chunk-C4GU3YUJ.js").then((m) => m.InstructorPlansComponent) },
              { path: "instructor-integrations", loadComponent: () => import("./chunk-J3QHSX2J.js").then((m) => m.InstructorIntegrationsComponent) },
              { path: "instructor-linked-accounts", loadComponent: () => import("./chunk-5FLJSJJH.js").then((m) => m.InstructorLinkedAccountsComponent) },
              { path: "instructor-social-profiles", loadComponent: () => import("./chunk-QVF5OT7U.js").then((m) => m.InstructorSocialProfilesComponent) },
              { path: "instructor-change-password", loadComponent: () => import("./chunk-POOAW7JO.js").then((m) => m.InstructorChangePasswordComponent) },
              { path: "instructor-settings", loadComponent: () => import("./chunk-5Q7YDQXQ.js").then((m) => m.InstructorSettingsComponent) }
            ]
          }
        ]
      },
      {
        path: "superadmin",
        loadComponent: () => import("./chunk-F3BR4HU7.js").then((m) => m.SuperadminComponent),
        canActivate: [layoutGuard],
        children: [
          { path: "superadmin-dashboard", loadComponent: () => import("./chunk-UVA2QQHV.js").then((m) => m.SuperAdminDashboardComponent) },
          { path: "superadmin-profile", loadComponent: () => import("./chunk-GYVKUTEW.js").then((m) => m.SuperadminProfileComponent) },
          { path: "superadmin-payouts", loadComponent: () => import("./chunk-CTJYTIHU.js").then((m) => m.SuperadminPayoutsComponent) },
          { path: "superadmin-tickets", loadComponent: () => import("./chunk-TW3AOT2I.js").then((m) => m.SuperadminTicketsComponent) },
          { path: "superadmin-companymanagement", loadComponent: () => import("./chunk-73TPYBDH.js").then((m) => m.CompanyManagementComponent) },
          { path: "superadmin-company-details/:id", loadComponent: () => import("./chunk-CJU7OTTO.js").then((m) => m.CompanyDetailsComponent) },
          { path: "superadmin-company-add", loadComponent: () => import("./chunk-WX6RF2QZ.js").then((m) => m.CompanyAddComponent) },
          { path: "superadmin-client-list", loadComponent: () => import("./chunk-5I7HUJZI.js").then((m) => m.ClientListComponent) },
          { path: "superadmin-client-add", loadComponent: () => import("./chunk-C7M2S6Z5.js").then((m) => m.ClientAddComponent) },
          { path: "superadmin-client-details/:id", loadComponent: () => import("./chunk-Z24PTKYR.js").then((m) => m.ClientDetailsComponent) },
          { path: "superadmin-permission", loadComponent: () => import("./chunk-FCMGIWIZ.js").then((m) => m.SuperadminPermissionComponent) },
          { path: "superadmin-role", loadComponent: () => import("./chunk-J22OGSEZ.js").then((m) => m.SuperadminRoleComponent) },
          // {path:'superadmin-register',loadComponent:()=>import ('./features/superadmin/register/register.component').then((m)=>m.RegisterComponent)},
          { path: "superadmin-user-list", loadComponent: () => import("./chunk-L2QOP6UP.js").then((m) => m.UserListComponent), canActivate: [PermissionGuard], data: { permission: "lister utilisateurs" } },
          { path: "superadmin-user-details/:id", loadComponent: () => import("./chunk-VHZIMQII.js").then((m) => m.UserDetailsComponent) },
          { path: "superadmin-user-add", loadComponent: () => import("./chunk-RPMAYCSX.js").then((m) => m.UserAddComponent) },
          { path: "superadmin-announcements", loadComponent: () => import("./chunk-25SBUT42.js").then((m) => m.SuperadminAnnouncementsComponent) },
          { path: "superadmin-quiz-questions", loadComponent: () => import("./chunk-ZORDONZ7.js").then((m) => m.SuperadminQuizQuestionsComponent) },
          { path: "superadmin-quiz-results", loadComponent: () => import("./chunk-ZIDDE24L.js").then((m) => m.SuperadminQuizResultsComponent) },
          { path: "superadmin-quiz-details", loadComponent: () => import("./chunk-JJDC4T6U.js").then((m) => m.SuperadminQuizDetailsComponent) },
          { path: "superadmin-quiz", loadComponent: () => import("./chunk-2AKZ5NZJ.js").then((m) => m.SuperadminQuizComponent) },
          { path: "superadmin-certificate", loadComponent: () => import("./chunk-YQH7MRDE.js").then((m) => m.SuperadminCertificateComponent) },
          { path: "superadmin-earnings", loadComponent: () => import("./chunk-YILEZYGG.js").then((m) => m.SuperadminEarningsComponent) },
          { path: "superadmin-rapports", loadComponent: () => import("./chunk-5JW4JHQK.js").then((m) => m.SuperadminRapportsComponent) },
          { path: "superadmin-course", loadComponent: () => import("./chunk-HJZLHTCS.js").then((m) => m.SuperadminCourseComponent) },
          { path: "superadmin-course-grid", loadComponent: () => import("./chunk-7FIEFOXE.js").then((m) => m.SuperadminCourseGridComponent) },
          { path: "superadmin-session", loadComponent: () => import("./chunk-NXUSHAIZ.js").then((m) => m.SuperadminSessionComponent) },
          { path: "superadmin-parcours", loadComponent: () => import("./chunk-B7AYZ5HX.js").then((m) => m.SuperadminParcoursComponent) },
          { path: "superadmin-message", loadComponent: () => import("./chunk-E5NFROOB.js").then((m) => m.SuperadminMessageComponent) },
          { path: "superadmin-audit-logs", loadComponent: () => import("./chunk-LTVI5J7G.js").then((m) => m.SuperadminAuditLogsComponent) },
          { path: "superadmin-sondage", loadComponent: () => import("./chunk-X2JPNXYN.js").then((m) => m.SuperadminSondageComponent) },
          { path: "superadmin-assignment", loadComponent: () => import("./chunk-7IINRRJ5.js").then((m) => m.SuperadminAssignmentComponent) },
          { path: "students-list", loadComponent: () => import("./chunk-TDK5OP7O.js").then((m) => m.StudentsListComponent) },
          { path: "students-grid", loadComponent: () => import("./chunk-JMYNL5IE.js").then((m) => m.StudentsGridComponent) },
          { path: "students-details", loadComponent: () => import("./chunk-A4F4CWCJ.js").then((m) => m.StudentsDetailsComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-53ITHDZP.js").then((m) => m.SettingsComponent),
            children: [
              { path: "superadmin-setting-withdraw", loadComponent: () => import("./chunk-WHYS2Y2J.js").then((m) => m.SuperadminSettingWithdrawComponent) },
              { path: "superadmin-setting-notifications", loadComponent: () => import("./chunk-WGJW3GOW.js").then((m) => m.SuperadminSettingNotificationsComponent) },
              { path: "superadmin-plans", loadComponent: () => import("./chunk-B2XCHCG7.js").then((m) => m.SuperadminPlansComponent) },
              { path: "superadmin-integrations", loadComponent: () => import("./chunk-MRF2OD4G.js").then((m) => m.SuperadminIntegrationsComponent) },
              { path: "superadmin-linked-accounts", loadComponent: () => import("./chunk-ZCJDLMRJ.js").then((m) => m.SuperadminLinkedAccountsComponent) },
              { path: "superadmin-social-profiles", loadComponent: () => import("./chunk-GYBTE7KR.js").then((m) => m.SuperadminSocialProfilesComponent) },
              { path: "superadmin-change-password", loadComponent: () => import("./chunk-DUQMGWOW.js").then((m) => m.SuperadminChangePasswordComponent) },
              { path: "superadmin-settings", loadComponent: () => import("./chunk-5TF5YPLM.js").then((m) => m.SuperadminSettingsComponent) }
            ]
          }
        ]
      },
      {
        path: "adminrh",
        loadComponent: () => import("./chunk-JXW3MJZJ.js").then((m) => m.AdminrhComponent),
        canActivate: [layoutGuard],
        children: [
          { path: "adminrh-dashboard", loadComponent: () => import("./chunk-A7JDWHNO.js").then((m) => m.AdminrhDashboardComponent) },
          { path: "adminrh-profile", loadComponent: () => import("./chunk-OWN7XWHS.js").then((m) => m.AdminrhProfileComponent) },
          { path: "adminrh-payouts", loadComponent: () => import("./chunk-OUBSQDIZ.js").then((m) => m.AdminrhPayoutsComponent) },
          { path: "adminrh-tickets", loadComponent: () => import("./chunk-LCG6LVYK.js").then((m) => m.AdminrhTicketsComponent) },
          { path: "adminrh-companymanagement", loadComponent: () => import("./chunk-WRZC6T42.js").then((m) => m.CompanyManagementComponent) },
          { path: "adminrh-company-details/:id", loadComponent: () => import("./chunk-FNZ2O7B6.js").then((m) => m.CompanyDetailsComponent) },
          { path: "adminrh-company-add", loadComponent: () => import("./chunk-JHLGYGM5.js").then((m) => m.CompanyAddComponent) },
          { path: "adminrh-client-list", loadComponent: () => import("./chunk-C6RTHGUB.js").then((m) => m.ClientListComponent) },
          { path: "adminrh-client-add", loadComponent: () => import("./chunk-5HTHKQMI.js").then((m) => m.ClientAddComponent) },
          { path: "adminrh-client-details/:id", loadComponent: () => import("./chunk-CV7VO47U.js").then((m) => m.ClientDetailsComponent) },
          { path: "adminrh-permission", loadComponent: () => import("./chunk-ZDSIAQHZ.js").then((m) => m.AdminrhPermissionComponent) },
          { path: "adminrh-role", loadComponent: () => import("./chunk-QWOV52MG.js").then((m) => m.AdminrhRoleComponent) },
          // {path:'adminrh-register',loadComponent:()=>import ('./features/adminrh/register/register.component').then((m)=>m.RegisterComponent)},
          { path: "adminrh-user-list", loadComponent: () => import("./chunk-RATPFHO6.js").then((m) => m.UserListComponent) },
          { path: "adminrh-user-group-list", loadComponent: () => import("./chunk-ZNM4TXVQ.js").then((m) => m.UserGroupListComponent) },
          { path: "adminrh-user-details/:id", loadComponent: () => import("./chunk-MSVYUWOO.js").then((m) => m.UserDetailsComponent) },
          { path: "adminrh-user-add", loadComponent: () => import("./chunk-O2BPQHCB.js").then((m) => m.UserAddComponent) },
          { path: "adminrh-demande", loadComponent: () => import("./chunk-J27R3IPC.js").then((m) => m.AdminrhDemandeComponent) },
          { path: "adminrh-announcements", loadComponent: () => import("./chunk-3OJKDLZK.js").then((m) => m.AdminrhAnnouncementsComponent) },
          { path: "adminrh-quiz-questions/:quizId", loadComponent: () => import("./chunk-MA4WI5QC.js").then((m) => m.AdminrhQuizQuestionsComponent) },
          { path: "adminrh-quiz-questions", loadComponent: () => import("./chunk-MA4WI5QC.js").then((m) => m.AdminrhQuizQuestionsComponent) },
          { path: "adminrh-quiz-results", loadComponent: () => import("./chunk-JKBUVM3H.js").then((m) => m.AdminrhQuizResultsComponent) },
          { path: "adminrh-quiz-details", loadComponent: () => import("./chunk-WITQQWUU.js").then((m) => m.AdminrhQuizDetailsComponent) },
          { path: "adminrh-quiz", loadComponent: () => import("./chunk-23LFRAAB.js").then((m) => m.AdminrhQuizComponent) },
          { path: "adminrh-certificate", loadComponent: () => import("./chunk-4IEJ3LDE.js").then((m) => m.AdminrhCertificateComponent) },
          { path: "adminrh-certificate-modele", loadComponent: () => import("./chunk-3CUOQFBG.js").then((m) => m.AdminrhCertificateModeleComponent) },
          { path: "adminrh-sondage", loadComponent: () => import("./chunk-ZFSOQCNZ.js").then((m) => m.AdminrhSondageComponent) },
          { path: "adminrh-mes-sondages", loadComponent: () => import("./chunk-UZVZTLQ2.js").then((m) => m.AdminrhMesSondagesComponent) },
          { path: "adminrh-certifier", loadComponent: () => import("./chunk-HQ5Z2NIK.js").then((m) => m.AdminrhCertifierComponent) },
          { path: "adminrh-categorie", loadComponent: () => import("./chunk-4FEI443R.js").then((m) => m.AdminrhCategorieComponent) },
          { path: "adminrh-catalogue", loadComponent: () => import("./chunk-CTPE5ZOU.js").then((m) => m.AdminrhCatalogueComponent) },
          { path: "adminrh-parcours", loadComponent: () => import("./chunk-3LBZ44S4.js").then((m) => m.AdminrhParcoursComponent) },
          { path: "adminrh-demande-parcours", loadComponent: () => import("./chunk-IZAINYWY.js").then((m) => m.AdminrhDemandeParcoursComponent) },
          { path: "adminrh-demande-catalogue", loadComponent: () => import("./chunk-CKBVWGTT.js").then((m) => m.AdminrhDemandeCatalogueComponent) },
          { path: "adminrh-demande-session", loadComponent: () => import("./chunk-PJS3WIZV.js").then((m) => m.AdminrhDemandeSessionComponent) },
          { path: "adminrh-earnings", loadComponent: () => import("./chunk-IHQLRUNQ.js").then((m) => m.AdminrhEarningsComponent) },
          { path: "adminrh-rapport", loadComponent: () => import("./chunk-2IKVUZD2.js").then((m) => m.AdminrhStatementsComponent) },
          { path: "adminrh-statements", loadComponent: () => import("./chunk-2IKVUZD2.js").then((m) => m.AdminrhStatementsComponent) },
          { path: "adminrh-course", loadComponent: () => import("./chunk-ZSTYQ2X3.js").then((m) => m.AdminrhCourseComponent) },
          { path: "adminrh-course-grid", loadComponent: () => import("./chunk-VB2T3FQF.js").then((m) => m.AdminrhCourseGridComponent) },
          { path: "adminrh-session", loadComponent: () => import("./chunk-3D3YCPIH.js").then((m) => m.AdminrhSessionComponent) },
          { path: "adminrh-message", loadComponent: () => import("./chunk-E6Y642YF.js").then((m) => m.AdminrhMessageComponent) },
          { path: "adminrh-assignment", loadComponent: () => import("./chunk-SV2UNPJL.js").then((m) => m.AdminrhAssignmentComponent) },
          { path: "students-list", loadComponent: () => import("./chunk-PT54KGP5.js").then((m) => m.StudentsListComponent) },
          { path: "students-grid", loadComponent: () => import("./chunk-GYXK3BY5.js").then((m) => m.StudentsGridComponent) },
          { path: "students-details", loadComponent: () => import("./chunk-VDF5BEPJ.js").then((m) => m.StudentsDetailsComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-UFU4JTVV.js").then((m) => m.SettingsComponent),
            children: [
              { path: "adminrh-setting-withdraw", loadComponent: () => import("./chunk-SAH77UKU.js").then((m) => m.AdminrhSettingWithdrawComponent) },
              { path: "adminrh-setting-notifications", loadComponent: () => import("./chunk-NL4RUUU5.js").then((m) => m.AdminrhSettingNotificationsComponent) },
              { path: "adminrh-plans", loadComponent: () => import("./chunk-7CCK7LSQ.js").then((m) => m.AdminrhPlansComponent) },
              { path: "adminrh-integrations", loadComponent: () => import("./chunk-ZUYK4A63.js").then((m) => m.AdminrhIntegrationsComponent) },
              { path: "adminrh-linked-accounts", loadComponent: () => import("./chunk-NOP7ZXR3.js").then((m) => m.AdminrhLinkedAccountsComponent) },
              { path: "adminrh-social-profiles", loadComponent: () => import("./chunk-4ZK5GP5A.js").then((m) => m.AdminrhSocialProfilesComponent) },
              { path: "adminrh-change-password", loadComponent: () => import("./chunk-FQ72VCWE.js").then((m) => m.AdminrhChangePasswordComponent) },
              { path: "adminrh-settings", loadComponent: () => import("./chunk-OKFQGGQB.js").then((m) => m.AdminrhSettingsComponent) }
            ]
          }
        ]
      },
      {
        path: "pages",
        loadComponent: () => import("./chunk-BESQDSGV.js").then((m) => m.PagesComponent),
        children: [
          { path: "faq", loadComponent: () => import("./chunk-QNJW6SL7.js").then((m) => m.FaqComponent) },
          { path: "notifications", loadComponent: () => import("./chunk-4EG6PXTR.js").then((m) => m.NotificationsComponent) },
          { path: "pricing-plan", loadComponent: () => import("./chunk-I4YBPZ5U.js").then((m) => m.PricingPlanComponent) },
          { path: "term-condition", loadComponent: () => import("./chunk-WROBMXII.js").then((m) => m.TermConditionComponent) },
          { path: "privacy-policy", loadComponent: () => import("./chunk-EHIOZHOV.js").then((m) => m.PrivacyPolicyComponent) },
          { path: "instructor-details", loadComponent: () => import("./chunk-E4R7ZYBY.js").then((m) => m.InstructorDetailsComponent) },
          { path: "become-an-instructor", loadComponent: () => import("./chunk-ONAUMKS2.js").then((m) => m.BecomeAnExpertComponent) },
          { path: "instructor-grid", loadComponent: () => import("./chunk-WCPLU746.js").then((m) => m.InstructorGridComponent) },
          { path: "instructor-list", loadComponent: () => import("./chunk-UGBCDZVJ.js").then((m) => m.InstructorListComponent) },
          { path: "contact-us", loadComponent: () => import("./chunk-GKHCYR6A.js").then((m) => m.ContactUsComponent) },
          { path: "about-us", loadComponent: () => import("./chunk-MFNVLZBW.js").then((m) => m.AboutUsComponent) },
          { path: "testimonial", loadComponent: () => import("./chunk-T5LRAWKG.js").then((m) => m.TestimonialComponent) }
        ]
      },
      {
        path: "blog",
        loadComponent: () => import("./chunk-W6EJIDXK.js").then((m) => m.BlogComponent),
        children: [
          { path: "blog-grid", loadComponent: () => import("./chunk-KSKGM5EQ.js").then((m) => m.BlogGridComponent) },
          { path: "blog-masonry", loadComponent: () => import("./chunk-RNVW7KAS.js").then((m) => m.BlogMasonryComponent) },
          { path: "blog-details-left-sidebar", loadComponent: () => import("./chunk-INEOCVRE.js").then((m) => m.BlogDetailsLeftSidebarComponent) },
          { path: "blog-details-right-sidebar", loadComponent: () => import("./chunk-QPA4E6BA.js").then((m) => m.BlogDetailsRightSidebarComponent) },
          { path: "blog-2-grid", loadComponent: () => import("./chunk-NFX3AZRZ.js").then((m) => m.Blog2GridComponent) },
          { path: "blog-3-grid", loadComponent: () => import("./chunk-CBPN35FG.js").then((m) => m.Blog3GridComponent) },
          { path: "blog-carousal", loadComponent: () => import("./chunk-CDMQBEEO.js").then((m) => m.BlogCarousalComponent) },
          { path: "blog-left-sidebar", loadComponent: () => import("./chunk-T6CC63D3.js").then((m) => m.BlogLeftSidebarComponent) },
          { path: "blog-right-sidebar", loadComponent: () => import("./chunk-QJTKT473.js").then((m) => m.BlogRightSidebarComponent) },
          { path: "blog-details", loadComponent: () => import("./chunk-QCRBMJMX.js").then((m) => m.BlogDetailsComponent) }
        ]
      },
      {
        path: "student",
        loadComponent: () => import("./chunk-3F4FV7ZO.js").then((m) => m.StudentComponent),
        canActivate: [layoutGuard],
        children: [
          { path: "student-dashboard", loadComponent: () => import("./chunk-FKQTRLVB.js").then((m) => m.StudentDashboardComponent) },
          { path: "student-profile", loadComponent: () => import("./chunk-RNZ43D6I.js").then((m) => m.StudentProfileComponent) },
          // RENOMMÉ : student-courses → mes-catalogues
          { path: "mes-catalogues", loadComponent: () => import("./chunk-EEUPJPSW.js").then((m) => m.MesCataloguesComponent) },
          { path: "mes-catalogues/:id", loadComponent: () => import("./chunk-4YUTKCV6.js").then((m) => m.MesCataloguesDetailsComponent) },
          { path: "student-courses", redirectTo: "mes-catalogues", pathMatch: "full" },
          { path: "catalogue-detail/:id", loadComponent: () => import("./chunk-BCMBL7YP.js").then((m) => m.CatalogueDetailComponent) },
          // RENOMMÉ : mes-cours → mes-formations
          { path: "mes-formations", loadComponent: () => import("./chunk-I4KWPUTD.js").then((m) => m.MesCoursComponent) },
          { path: "mes-cours", redirectTo: "mes-formations", pathMatch: "full" },
          { path: "student-tickets", loadComponent: () => import("./chunk-CD4T3CM5.js").then((m) => m.StudentTicketsComponent) },
          { path: "students-session", loadComponent: () => import("./chunk-ELLLRVTC.js").then((m) => m.StudentsSessionsComponent) },
          { path: "sessions-acceptees", loadComponent: () => import("./chunk-Q4Z6VSOT.js").then((m) => m.SessionsAccepteesComponent) },
          // RENOMMÉ : students-catalogue → student-demande-catalogue
          { path: "student-demande-catalogue", loadComponent: () => import("./chunk-ZU6XBFLJ.js").then((m) => m.StudentDemandeCatalogueComponent) },
          { path: "students-catalogue", redirectTo: "student-demande-catalogue", pathMatch: "full" },
          { path: "students-explorer", loadComponent: () => import("./chunk-3TPL4C6W.js").then((m) => m.ExplorerComponent) },
          // RENOMMÉ : students-parcours → mes-demandes-parcours
          { path: "mes-demandes-parcours", loadComponent: () => import("./chunk-UYBFEBOT.js").then((m) => m.StudentDemandeParcoursComponent) },
          { path: "students-parcours", redirectTo: "mes-demandes-parcours", pathMatch: "full" },
          // RENOMMÉ : parcours-assignes → mes-parcours-assignes
          // RENOMMÉ : parcours-assignes → mes-parcours-assignes
          { path: "mes-parcours", loadComponent: () => import("./chunk-VRXN3OLV.js").then((m) => m.MesParcoursComponent) },
          { path: "parcours-assignes", redirectTo: "mes-parcours-assignes", pathMatch: "full" },
          { path: "mes-parcours", redirectTo: "mes-parcours-assignes", pathMatch: "full" },
          { path: "mes-parcours", redirectTo: "mes-parcours", pathMatch: "full" },
          // RENOMMÉ : parcours-assigne/:id → mes-parcours/:id
          { path: "mes-parcours/:id", loadComponent: () => import("./chunk-QDICFZ3F.js").then((m) => m.ParcoursAssigneDetailComponent) },
          { path: "parcours-assigne/:id", redirectTo: "mes-parcours/:id", pathMatch: "full" },
          // Détails parcours (pour n'importe quel parcours depuis l'explorer)
          { path: "parcours-details/:id", loadComponent: () => import("./chunk-ANG7GHJS.js").then((m) => m.ParcoursDetailsComponent) },
          { path: "student-sondage/:id", loadComponent: () => import("./chunk-3Y36LWVC.js").then((m) => m.StudentSondageComponent) },
          { path: "student-mes-sondages", loadComponent: () => import("./chunk-PS3BV7QV.js").then((m) => m.StudentMesSondagesComponent) },
          { path: "student-quiz", loadComponent: () => import("./chunk-H2FSWOVW.js").then((m) => m.StudentQuizComponent) },
          { path: "student-quiz-questions/:id", loadComponent: () => import("./chunk-JR6APGKN.js").then((m) => m.StudentQuizQuestionsComponent) },
          { path: "student-planning", loadComponent: () => import("./chunk-SYRVL3BZ.js").then((m) => m.StudentPlanningComponent) },
          { path: "student-certificate", loadComponent: () => import("./chunk-B5QMPNID.js").then((m) => m.StudentCertificateComponent) },
          { path: "student-demande", loadComponent: () => import("./chunk-LWNL6Q23.js").then((m) => m.StudentDemandeComponent) },
          { path: "mes-competences", loadComponent: () => import("./chunk-KSSWIRVS.js").then((m) => m.MesCompetencesComponent) },
          { path: "mes-competences-recommandees", loadComponent: () => import("./chunk-CXQDTVNB.js").then((m) => m.MesCompetencesRecommandeesComponent) },
          { path: "student-message", loadComponent: () => import("./chunk-D6KYJSNM.js").then((m) => m.StudentMessageComponent) },
          { path: "student-qa", loadComponent: () => import("./chunk-R2LDZN6B.js").then((m) => m.StudentQaComponent) },
          { path: "student-order-history", loadComponent: () => import("./chunk-JUYRYTMY.js").then((m) => m.StudentOrderHistoryComponent) },
          { path: "student-referral", loadComponent: () => import("./chunk-X26ZX7HY.js").then((m) => m.StudentReferralComponent) },
          { path: "student-reviews", loadComponent: () => import("./chunk-YUHTXRUK.js").then((m) => m.StudentReviewsComponent) },
          { path: "student-wishlist", loadComponent: () => import("./chunk-B7QTDK7P.js").then((m) => m.StudentWishlistComponent) },
          { path: "ecart-competences", loadComponent: () => import("./chunk-VL55SAKL.js").then((m) => m.EcartCompetencesComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-5SFXGXHV.js").then((m) => m.SettingsComponent),
            children: [
              { path: "student-linked-accounts", loadComponent: () => import("./chunk-7LHVQHJ5.js").then((m) => m.StudentLinkedAccountsComponent) },
              { path: "student-change-password", loadComponent: () => import("./chunk-RL2CWBU3.js").then((m) => m.StudentChangePasswordComponent) },
              { path: "student-settings", loadComponent: () => import("./chunk-JW3RO3A3.js").then((m) => m.StudentSettingsComponent) },
              { path: "student-notifications", loadComponent: () => import("./chunk-NVAIZ2S2.js").then((m) => m.StudentNotificationsComponent) },
              { path: "student-billing-address", loadComponent: () => import("./chunk-Y4I66K4C.js").then((m) => m.StudentBillingAddressComponent) },
              { path: "student-social-profile", loadComponent: () => import("./chunk-SUM77LAI.js").then((m) => m.StudentSocialProfileComponent) }
            ]
          }
        ]
      }
    ]
  },
  { path: "verify-certificate", loadComponent: () => import("./chunk-M6MB5UBK.js").then((m) => m.VerifyCertificateComponent) },
  { path: "sondage/:token", loadComponent: () => import("./chunk-5SZJ6TOC.js").then((m) => m.SondagePublicComponent) },
  { path: "under-construction", loadComponent: () => import("./chunk-DCX55Z6F.js").then((m) => m.UnderConstructionComponent) },
  { path: "coming-soon", loadComponent: () => import("./chunk-YP7ZKPH4.js").then((m) => m.ComingSoonComponent) },
  { path: "error-500", loadComponent: () => import("./chunk-I5Z2THZP.js").then((m) => m.Error500Component) },
  { path: "error-404", loadComponent: () => import("./chunk-KWV4UVY6.js").then((m) => m.Error404Component) },
  {
    path: "**",
    redirectTo: "error-404",
    pathMatch: "full"
  }
];

export {
  routes
};
//# sourceMappingURL=chunk-XM6XI5WV.js.map
