import {
  PermissionService
} from "./chunk-W5FY3JM3.js";
import {
  Router
} from "./chunk-I4S43CN7.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7XGB4BEQ.js";

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
var authGuard = (route, state) => {
  const router = inject(Router);
  console.log("=== AUTH GUARD DEBUG COMPLET ===");
  const token = localStorage.getItem("pyramide_token");
  const userData = localStorage.getItem("pyramide_user");
  console.log("1. Token exists:", !!token);
  console.log("2. Token value:", token);
  console.log("3. User data exists:", !!userData);
  console.log("4. User data:", userData);
  console.log("5. Current route:", state.url);
  console.log("6. Route params:", route.params);
  if (token && userData) {
    try {
      const user = JSON.parse(userData);
      console.log("7. Parsed user:", user);
      console.log("8. User role_id:", user.role_id);
      console.log("9. User role_id type:", typeof user.role_id);
      if (state.url.startsWith("/adminrh")) {
        const allowedRoles = [4, 5, 9, 14];
        console.log("10. Allowed roles:", allowedRoles);
        console.log("11. Role check result:", allowedRoles.includes(user.role_id));
        if (!allowedRoles.includes(user.role_id)) {
          console.log("\u274C ACC\xC8S REFUS\xC9 - R\xF4le non autoris\xE9");
          router.navigate(["/auth/login"]);
          return false;
        }
      }
      console.log("\u2705 ACC\xC8S AUTORIS\xC9");
      console.log("================================");
      return true;
    } catch (error) {
      console.error("\u274C ERREUR parsing user data:", error);
      router.navigate(["/auth/login"]);
      return false;
    }
  } else {
    console.log("\u274C ACC\xC8S REFUS\xC9 - Pas de token ou user data");
    console.log("================================");
    router.navigate(["/auth/login"]);
    return false;
  }
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
    loadComponent: () => import("./chunk-OYKEZF4P.js").then((m) => m.AuthComponent),
    children: [
      { path: "forgot-password", loadComponent: () => import("./chunk-GI6GFVAR.js").then((m) => m.ForgotPasswordComponent) },
      { path: "login", loadComponent: () => import("./chunk-2VXY2445.js").then((m) => m.LoginComponent) },
      { path: "register", loadComponent: () => import("./chunk-7HKHSXYU.js").then((m) => m.RegisterComponent) },
      { path: "set-password", loadComponent: () => import("./chunk-TAQXKQ7H.js").then((m) => m.SetPasswordComponent) },
      { path: "otp", loadComponent: () => import("./chunk-VYEKZCRN.js").then((m) => m.OtpComponent) },
      { path: "lock-screen", loadComponent: () => import("./chunk-GHLT765D.js").then((m) => m.LockScreenComponent) },
      { path: "magic-verify", loadComponent: () => import("./chunk-LLPA4G2O.js").then((m) => m.MagicVerifyComponent) },
      { path: "activate", loadComponent: () => import("./chunk-EHBAQGMC.js").then((m) => m.ActivateComponent) }
    ]
  },
  // ══════════════════════════════════════════════════════════════════════
  // PAGE LECTEUR PLEIN ÉCRAN — en dehors de tout layout back-office
  // ══════════════════════════════════════════════════════════════════════
  {
    path: "student/lecture-formation/:id",
    loadComponent: () => import("./chunk-KMSXN3DV.js").then((m) => m.LectureFormationComponent),
    canActivate: [authGuard]
  },
  {
    path: "",
    loadComponent: () => import("./chunk-6V3PVCP3.js").then((m) => m.FeaturesComponent),
    children: [
      { path: "index", loadComponent: () => import("./chunk-M5753YIC.js").then((m) => m.HomeComponent) },
      { path: "index-two", loadComponent: () => import("./chunk-U26W2XVO.js").then((m) => m.Home2Component) },
      { path: "index-three", loadComponent: () => import("./chunk-PNMQJEPU.js").then((m) => m.Home3Component) },
      { path: "index-four", loadComponent: () => import("./chunk-7HBRGELL.js").then((m) => m.Home4Component) },
      { path: "index-five", loadComponent: () => import("./chunk-HYJSODKO.js").then((m) => m.Home5Component) },
      { path: "index-six", loadComponent: () => import("./chunk-FEQVV7TX.js").then((m) => m.Home6Component) },
      {
        path: "courses",
        loadComponent: () => import("./chunk-4CNQFT7E.js").then((m) => m.CoursesComponent),
        children: [
          { path: "add-course", loadComponent: () => import("./chunk-L3AE5ITD.js").then((m) => m.AddCourseComponent) },
          { path: "course-details/:id", loadComponent: () => import("./chunk-Y4KI7SJO.js").then((m) => m.CourseDetailsComponent) },
          { path: "course-details-2", loadComponent: () => import("./chunk-RJAJMC2R.js").then((m) => m.CourseDetails2Component) },
          { path: "course-list", loadComponent: () => import("./chunk-RGLRZ5PF.js").then((m) => m.CourseListComponent) },
          { path: "course-grid", loadComponent: () => import("./chunk-OLYPQTRQ.js").then((m) => m.CourseGridComponent) },
          { path: "course-category", loadComponent: () => import("./chunk-MX3NGTZ7.js").then((m) => m.CourseCategoryComponent) },
          { path: "course-category-2", loadComponent: () => import("./chunk-RXB4WJ7C.js").then((m) => m.CourseCategory2Component) },
          { path: "course-category-3", loadComponent: () => import("./chunk-SP2KRI6K.js").then((m) => m.CourseCategory3Component) },
          { path: "course-resume", loadComponent: () => import("./chunk-C66VOJAY.js").then((m) => m.CourseResumeComponent) },
          { path: "course-watch", loadComponent: () => import("./chunk-2F2WH6DL.js").then((m) => m.CourseWatchComponent) },
          { path: "course-watch/:id", loadComponent: () => import("./chunk-2F2WH6DL.js").then((m) => m.CourseWatchComponent) },
          { path: "cart", loadComponent: () => import("./chunk-245UGUZI.js").then((m) => m.CourseCartComponent) },
          { path: "checkout", loadComponent: () => import("./chunk-O4E5DHE5.js").then((m) => m.CourseCheckoutComponent) },
          { path: "add-course", loadComponent: () => import("./chunk-L3AE5ITD.js").then((m) => m.AddCourseComponent) },
          { path: "instructor-course-add", loadComponent: () => import("./chunk-BKS4CHF7.js").then((m) => m.InstructorCourseAddComponent) },
          { path: "instructor-course-edit/:id", loadComponent: () => import("./chunk-4FVNBYEC.js").then((m) => m.InstructorCourseEditComponent) },
          { path: "instructor-course-details/:id", loadComponent: () => import("./chunk-SF3BX6K3.js").then((m) => m.InstructorCourseDetailsComponent) }
        ]
      },
      {
        path: "instructor",
        loadComponent: () => import("./chunk-LZDT4IET.js").then((m) => m.InstructorComponent),
        children: [
          { path: "instructor-dashboard", loadComponent: () => import("./chunk-N3ATOQWA.js").then((m) => m.InstructorDashboardComponent) },
          { path: "instructor-profile", loadComponent: () => import("./chunk-73V4643B.js").then((m) => m.InstructorProfileComponent) },
          { path: "instructor-payouts", loadComponent: () => import("./chunk-5XQL3YO6.js").then((m) => m.InstructorPayoutsComponent) },
          { path: "instructor-tickets", loadComponent: () => import("./chunk-NCJYO4JD.js").then((m) => m.InstructorTicketsComponent) },
          { path: "instructor-announcements", loadComponent: () => import("./chunk-ZNST4M7E.js").then((m) => m.InstructorAnnouncementsComponent) },
          { path: "instructor-quiz-questions/:quizId", loadComponent: () => import("./chunk-GQ7MRIMW.js").then((m) => m.InstructorQuizQuestionsComponent) },
          { path: "instructor-quiz-results", loadComponent: () => import("./chunk-NNB7B7E4.js").then((m) => m.InstructorQuizResultsComponent) },
          { path: "instructor-quiz-details", loadComponent: () => import("./chunk-5GWTW67D.js").then((m) => m.InstructorQuizDetailsComponent) },
          { path: "instructor-quiz", loadComponent: () => import("./chunk-UV3MDH5S.js").then((m) => m.InstructorQuizComponent) },
          { path: "instructor-certificate", loadComponent: () => import("./chunk-BCR2VLWK.js").then((m) => m.InstructorCertificateComponent) },
          { path: "instructor-earnings", loadComponent: () => import("./chunk-VLD3VRIN.js").then((m) => m.InstructorEarningsComponent) },
          { path: "instructor-statements", loadComponent: () => import("./chunk-QGMEA73H.js").then((m) => m.InstructorStatementsComponent) },
          { path: "instructor-course", loadComponent: () => import("./chunk-BIABITRO.js").then((m) => m.InstructorCourseComponent) },
          { path: "instructor-course-grid", loadComponent: () => import("./chunk-4HLF3GHG.js").then((m) => m.InstructorCourseGridComponent) },
          { path: "instructor-session", loadComponent: () => import("./chunk-I3AWQHTY.js").then((m) => m.InstructorSessionComponent) },
          { path: "instructor-message", loadComponent: () => import("./chunk-DB32WDD3.js").then((m) => m.InstructorMessageComponent) },
          { path: "instructor-assignment", loadComponent: () => import("./chunk-FK6JVWMF.js").then((m) => m.InstructorAssignmentComponent) },
          { path: "students-list", loadComponent: () => import("./chunk-KMVKXKZ4.js").then((m) => m.StudentsListComponent) },
          { path: "students-grid", loadComponent: () => import("./chunk-CZKTDBCB.js").then((m) => m.StudentsGridComponent) },
          { path: "students-details", loadComponent: () => import("./chunk-THXIT3ZM.js").then((m) => m.StudentsDetailsComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-HXXMUH7J.js").then((m) => m.SettingsComponent),
            children: [
              { path: "instructor-setting-withdraw", loadComponent: () => import("./chunk-JNV3F4L7.js").then((m) => m.InstructorSettingWithdrawComponent) },
              { path: "instructor-setting-notifications", loadComponent: () => import("./chunk-J5Y46NHB.js").then((m) => m.InstructorSettingNotificationsComponent) },
              { path: "instructor-plans", loadComponent: () => import("./chunk-SBI7MRIX.js").then((m) => m.InstructorPlansComponent) },
              { path: "instructor-integrations", loadComponent: () => import("./chunk-ERAFV26A.js").then((m) => m.InstructorIntegrationsComponent) },
              { path: "instructor-linked-accounts", loadComponent: () => import("./chunk-TZSIUSAZ.js").then((m) => m.InstructorLinkedAccountsComponent) },
              { path: "instructor-social-profiles", loadComponent: () => import("./chunk-D52KXV7G.js").then((m) => m.InstructorSocialProfilesComponent) },
              { path: "instructor-change-password", loadComponent: () => import("./chunk-CPJ4UCWG.js").then((m) => m.InstructorChangePasswordComponent) },
              { path: "instructor-settings", loadComponent: () => import("./chunk-4LRYS5BP.js").then((m) => m.InstructorSettingsComponent) }
            ]
          }
        ]
      },
      {
        path: "superadmin",
        loadComponent: () => import("./chunk-BZA2WYS4.js").then((m) => m.SuperadminComponent),
        canActivate: [authGuard],
        children: [
          { path: "superadmin-dashboard", loadComponent: () => import("./chunk-XW3QVP5O.js").then((m) => m.SuperAdminDashboardComponent) },
          { path: "superadmin-profile", loadComponent: () => import("./chunk-WRQXTIQH.js").then((m) => m.SuperadminProfileComponent) },
          { path: "superadmin-payouts", loadComponent: () => import("./chunk-4JHPUOCW.js").then((m) => m.SuperadminPayoutsComponent) },
          { path: "superadmin-tickets", loadComponent: () => import("./chunk-XSF5T65C.js").then((m) => m.SuperadminTicketsComponent) },
          { path: "superadmin-companymanagement", loadComponent: () => import("./chunk-XK2EDKTX.js").then((m) => m.CompanyManagementComponent) },
          { path: "superadmin-company-details/:id", loadComponent: () => import("./chunk-PGSR54KH.js").then((m) => m.CompanyDetailsComponent) },
          { path: "superadmin-company-add", loadComponent: () => import("./chunk-JOOTJLZW.js").then((m) => m.CompanyAddComponent) },
          { path: "superadmin-client-list", loadComponent: () => import("./chunk-SA3H4MPK.js").then((m) => m.ClientListComponent) },
          { path: "superadmin-client-add", loadComponent: () => import("./chunk-P2FIZHAE.js").then((m) => m.ClientAddComponent) },
          { path: "superadmin-client-details/:id", loadComponent: () => import("./chunk-7HD7VAQF.js").then((m) => m.ClientDetailsComponent) },
          { path: "superadmin-permission", loadComponent: () => import("./chunk-PTVH7BAK.js").then((m) => m.SuperadminPermissionComponent) },
          { path: "superadmin-role", loadComponent: () => import("./chunk-JCJNWXFS.js").then((m) => m.SuperadminRoleComponent) },
          // {path:'superadmin-register',loadComponent:()=>import ('./features/superadmin/register/register.component').then((m)=>m.RegisterComponent)},
          { path: "superadmin-user-list", loadComponent: () => import("./chunk-KO42EH2N.js").then((m) => m.UserListComponent), canActivate: [PermissionGuard], data: { permission: "lister utilisateurs" } },
          { path: "superadmin-user-details/:id", loadComponent: () => import("./chunk-4SEUZOCH.js").then((m) => m.UserDetailsComponent) },
          { path: "superadmin-user-add", loadComponent: () => import("./chunk-P6BBUGSI.js").then((m) => m.UserAddComponent) },
          { path: "superadmin-announcements", loadComponent: () => import("./chunk-GYXWKA3N.js").then((m) => m.SuperadminAnnouncementsComponent) },
          { path: "superadmin-quiz-questions", loadComponent: () => import("./chunk-24UNMRHP.js").then((m) => m.SuperadminQuizQuestionsComponent) },
          { path: "superadmin-quiz-results", loadComponent: () => import("./chunk-HXNUD4NX.js").then((m) => m.SuperadminQuizResultsComponent) },
          { path: "superadmin-quiz-details", loadComponent: () => import("./chunk-Z2PLVUCL.js").then((m) => m.SuperadminQuizDetailsComponent) },
          { path: "superadmin-quiz", loadComponent: () => import("./chunk-TDOCCFB5.js").then((m) => m.SuperadminQuizComponent) },
          { path: "superadmin-certificate", loadComponent: () => import("./chunk-KXCLWGML.js").then((m) => m.SuperadminCertificateComponent) },
          { path: "superadmin-earnings", loadComponent: () => import("./chunk-FZLPEFVR.js").then((m) => m.SuperadminEarningsComponent) },
          { path: "superadmin-rapports", loadComponent: () => import("./chunk-VMQZGXIO.js").then((m) => m.SuperadminRapportsComponent) },
          { path: "superadmin-course", loadComponent: () => import("./chunk-4ZKMG6E3.js").then((m) => m.SuperadminCourseComponent) },
          { path: "superadmin-course-grid", loadComponent: () => import("./chunk-RGFEDEZW.js").then((m) => m.SuperadminCourseGridComponent) },
          { path: "superadmin-session", loadComponent: () => import("./chunk-EHZZNZQY.js").then((m) => m.SuperadminSessionComponent) },
          { path: "superadmin-parcours", loadComponent: () => import("./chunk-77TCD732.js").then((m) => m.SuperadminParcoursComponent) },
          { path: "superadmin-message", loadComponent: () => import("./chunk-WAWVY22U.js").then((m) => m.SuperadminMessageComponent) },
          { path: "superadmin-audit-logs", loadComponent: () => import("./chunk-TSOXMSKS.js").then((m) => m.SuperadminAuditLogsComponent) },
          { path: "superadmin-sondage", loadComponent: () => import("./chunk-N22ZGI3D.js").then((m) => m.SuperadminSondageComponent) },
          { path: "superadmin-assignment", loadComponent: () => import("./chunk-GKHGAXBE.js").then((m) => m.SuperadminAssignmentComponent) },
          { path: "students-list", loadComponent: () => import("./chunk-3YA6QNMR.js").then((m) => m.StudentsListComponent) },
          { path: "students-grid", loadComponent: () => import("./chunk-OC43S3EH.js").then((m) => m.StudentsGridComponent) },
          { path: "students-details", loadComponent: () => import("./chunk-IVOCTW2X.js").then((m) => m.StudentsDetailsComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-6UN53FQH.js").then((m) => m.SettingsComponent),
            children: [
              { path: "superadmin-setting-withdraw", loadComponent: () => import("./chunk-25ED4OB7.js").then((m) => m.SuperadminSettingWithdrawComponent) },
              { path: "superadmin-setting-notifications", loadComponent: () => import("./chunk-TTV2U24R.js").then((m) => m.SuperadminSettingNotificationsComponent) },
              { path: "superadmin-plans", loadComponent: () => import("./chunk-4E67TSQH.js").then((m) => m.SuperadminPlansComponent) },
              { path: "superadmin-integrations", loadComponent: () => import("./chunk-YW36G6OM.js").then((m) => m.SuperadminIntegrationsComponent) },
              { path: "superadmin-linked-accounts", loadComponent: () => import("./chunk-P7BXJIUH.js").then((m) => m.SuperadminLinkedAccountsComponent) },
              { path: "superadmin-social-profiles", loadComponent: () => import("./chunk-CKJLW2XW.js").then((m) => m.SuperadminSocialProfilesComponent) },
              { path: "superadmin-change-password", loadComponent: () => import("./chunk-SPYO6Q2T.js").then((m) => m.SuperadminChangePasswordComponent) },
              { path: "superadmin-settings", loadComponent: () => import("./chunk-Z3AKYTTK.js").then((m) => m.SuperadminSettingsComponent) }
            ]
          }
        ]
      },
      {
        path: "adminrh",
        loadComponent: () => import("./chunk-Q2JSVEUA.js").then((m) => m.AdminrhComponent),
        canActivate: [authGuard],
        children: [
          { path: "adminrh-dashboard", loadComponent: () => import("./chunk-66URL6OR.js").then((m) => m.AdminrhDashboardComponent) },
          { path: "adminrh-profile", loadComponent: () => import("./chunk-XW3XPNAS.js").then((m) => m.AdminrhProfileComponent) },
          { path: "adminrh-payouts", loadComponent: () => import("./chunk-UZNGHW6X.js").then((m) => m.AdminrhPayoutsComponent) },
          { path: "adminrh-tickets", loadComponent: () => import("./chunk-HF2FYLRH.js").then((m) => m.AdminrhTicketsComponent) },
          { path: "adminrh-companymanagement", loadComponent: () => import("./chunk-AQG7FGFB.js").then((m) => m.CompanyManagementComponent) },
          { path: "adminrh-company-details/:id", loadComponent: () => import("./chunk-L6NVAMKV.js").then((m) => m.CompanyDetailsComponent) },
          { path: "adminrh-company-add", loadComponent: () => import("./chunk-YUBVM3XW.js").then((m) => m.CompanyAddComponent) },
          { path: "adminrh-client-list", loadComponent: () => import("./chunk-6ZTVKOQI.js").then((m) => m.ClientListComponent) },
          { path: "adminrh-client-add", loadComponent: () => import("./chunk-LWCD7NR2.js").then((m) => m.ClientAddComponent) },
          { path: "adminrh-client-details/:id", loadComponent: () => import("./chunk-WYVFDVN4.js").then((m) => m.ClientDetailsComponent) },
          { path: "adminrh-permission", loadComponent: () => import("./chunk-RW6YO37R.js").then((m) => m.AdminrhPermissionComponent) },
          { path: "adminrh-role", loadComponent: () => import("./chunk-KTLFZQNA.js").then((m) => m.AdminrhRoleComponent) },
          // {path:'adminrh-register',loadComponent:()=>import ('./features/adminrh/register/register.component').then((m)=>m.RegisterComponent)},
          { path: "adminrh-user-list", loadComponent: () => import("./chunk-236VFSX5.js").then((m) => m.UserListComponent) },
          { path: "adminrh-user-group-list", loadComponent: () => import("./chunk-IJYJTSUE.js").then((m) => m.UserGroupListComponent) },
          { path: "adminrh-user-details/:id", loadComponent: () => import("./chunk-XOBK5MIC.js").then((m) => m.UserDetailsComponent) },
          { path: "adminrh-user-add", loadComponent: () => import("./chunk-DYKU7RCE.js").then((m) => m.UserAddComponent) },
          { path: "adminrh-demande", loadComponent: () => import("./chunk-POWNNJB2.js").then((m) => m.AdminrhDemandeComponent) },
          { path: "adminrh-announcements", loadComponent: () => import("./chunk-WS7RRHYA.js").then((m) => m.AdminrhAnnouncementsComponent) },
          { path: "adminrh-quiz-questions/:quizId", loadComponent: () => import("./chunk-63FLEIGL.js").then((m) => m.AdminrhQuizQuestionsComponent) },
          { path: "adminrh-quiz-questions", loadComponent: () => import("./chunk-63FLEIGL.js").then((m) => m.AdminrhQuizQuestionsComponent) },
          { path: "adminrh-quiz-results", loadComponent: () => import("./chunk-K7R5XR25.js").then((m) => m.AdminrhQuizResultsComponent) },
          { path: "adminrh-quiz-details", loadComponent: () => import("./chunk-Q4ATMGOU.js").then((m) => m.AdminrhQuizDetailsComponent) },
          { path: "adminrh-quiz", loadComponent: () => import("./chunk-LDBHLPI6.js").then((m) => m.AdminrhQuizComponent) },
          { path: "adminrh-certificate", loadComponent: () => import("./chunk-EQCTSZAQ.js").then((m) => m.AdminrhCertificateComponent) },
          { path: "adminrh-certificate-modele", loadComponent: () => import("./chunk-G4ZCSRUC.js").then((m) => m.AdminrhCertificateModeleComponent) },
          { path: "adminrh-sondage", loadComponent: () => import("./chunk-ISSQD5AR.js").then((m) => m.AdminrhSondageComponent) },
          { path: "adminrh-certifier", loadComponent: () => import("./chunk-UWEKMF4S.js").then((m) => m.AdminrhCertifierComponent) },
          { path: "adminrh-categorie", loadComponent: () => import("./chunk-43XDEDOU.js").then((m) => m.AdminrhCategorieComponent) },
          { path: "adminrh-catalogue", loadComponent: () => import("./chunk-RVTLHJVC.js").then((m) => m.AdminrhCatalogueComponent) },
          { path: "adminrh-parcours", loadComponent: () => import("./chunk-NQP7HUKE.js").then((m) => m.AdminrhParcoursComponent) },
          { path: "adminrh-demande-parcours", loadComponent: () => import("./chunk-SE7VXRKO.js").then((m) => m.AdminrhDemandeParcoursComponent) },
          { path: "adminrh-demande-catalogue", loadComponent: () => import("./chunk-BDJAULIR.js").then((m) => m.AdminrhDemandeCatalogueComponent) },
          { path: "adminrh-demande-session", loadComponent: () => import("./chunk-TOE5X44U.js").then((m) => m.AdminrhDemandeSessionComponent) },
          { path: "adminrh-earnings", loadComponent: () => import("./chunk-TEQZSJDU.js").then((m) => m.AdminrhEarningsComponent) },
          { path: "adminrh-rapport", loadComponent: () => import("./chunk-TANXA6XV.js").then((m) => m.AdminrhStatementsComponent) },
          { path: "adminrh-statements", loadComponent: () => import("./chunk-TANXA6XV.js").then((m) => m.AdminrhStatementsComponent) },
          { path: "adminrh-course", loadComponent: () => import("./chunk-YMYSVBDA.js").then((m) => m.AdminrhCourseComponent) },
          { path: "adminrh-course-grid", loadComponent: () => import("./chunk-QN3TA23U.js").then((m) => m.AdminrhCourseGridComponent) },
          { path: "adminrh-session", loadComponent: () => import("./chunk-TYNX2PKO.js").then((m) => m.AdminrhSessionComponent) },
          { path: "adminrh-message", loadComponent: () => import("./chunk-24QKAR6N.js").then((m) => m.AdminrhMessageComponent) },
          { path: "adminrh-assignment", loadComponent: () => import("./chunk-FDCT5RGY.js").then((m) => m.AdminrhAssignmentComponent) },
          { path: "students-list", loadComponent: () => import("./chunk-NVFDBUBX.js").then((m) => m.StudentsListComponent) },
          { path: "students-grid", loadComponent: () => import("./chunk-N3EZUOJW.js").then((m) => m.StudentsGridComponent) },
          { path: "students-details", loadComponent: () => import("./chunk-IY7JUVWH.js").then((m) => m.StudentsDetailsComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-AIYQYCBT.js").then((m) => m.SettingsComponent),
            children: [
              { path: "adminrh-setting-withdraw", loadComponent: () => import("./chunk-JBCMQQUQ.js").then((m) => m.AdminrhSettingWithdrawComponent) },
              { path: "adminrh-setting-notifications", loadComponent: () => import("./chunk-IT5YQVKS.js").then((m) => m.AdminrhSettingNotificationsComponent) },
              { path: "adminrh-plans", loadComponent: () => import("./chunk-XECMVB63.js").then((m) => m.AdminrhPlansComponent) },
              { path: "adminrh-integrations", loadComponent: () => import("./chunk-DGIRMBOW.js").then((m) => m.AdminrhIntegrationsComponent) },
              { path: "adminrh-linked-accounts", loadComponent: () => import("./chunk-DT6LAX42.js").then((m) => m.AdminrhLinkedAccountsComponent) },
              { path: "adminrh-social-profiles", loadComponent: () => import("./chunk-PGYBTXL5.js").then((m) => m.AdminrhSocialProfilesComponent) },
              { path: "adminrh-change-password", loadComponent: () => import("./chunk-GZU4BFBH.js").then((m) => m.AdminrhChangePasswordComponent) },
              { path: "adminrh-settings", loadComponent: () => import("./chunk-DIXBLBGT.js").then((m) => m.AdminrhSettingsComponent) }
            ]
          }
        ]
      },
      {
        path: "pages",
        loadComponent: () => import("./chunk-6W2ZJ67T.js").then((m) => m.PagesComponent),
        children: [
          { path: "faq", loadComponent: () => import("./chunk-QSOQAYBN.js").then((m) => m.FaqComponent) },
          { path: "notifications", loadComponent: () => import("./chunk-ZWSDI6TM.js").then((m) => m.NotificationsComponent) },
          { path: "pricing-plan", loadComponent: () => import("./chunk-JIZMA6M5.js").then((m) => m.PricingPlanComponent) },
          { path: "term-condition", loadComponent: () => import("./chunk-QHXU7OUL.js").then((m) => m.TermConditionComponent) },
          { path: "privacy-policy", loadComponent: () => import("./chunk-DI3UFFSL.js").then((m) => m.PrivacyPolicyComponent) },
          { path: "instructor-details", loadComponent: () => import("./chunk-EVY5Q6YQ.js").then((m) => m.InstructorDetailsComponent) },
          { path: "become-an-instructor", loadComponent: () => import("./chunk-GY6LT4LH.js").then((m) => m.BecomeAnExpertComponent) },
          { path: "instructor-grid", loadComponent: () => import("./chunk-RFL6LU52.js").then((m) => m.InstructorGridComponent) },
          { path: "instructor-list", loadComponent: () => import("./chunk-7ORRC5BJ.js").then((m) => m.InstructorListComponent) },
          { path: "contact-us", loadComponent: () => import("./chunk-2VAHQJE7.js").then((m) => m.ContactUsComponent) },
          { path: "about-us", loadComponent: () => import("./chunk-IE43JY5T.js").then((m) => m.AboutUsComponent) },
          { path: "testimonial", loadComponent: () => import("./chunk-FBEI2UHF.js").then((m) => m.TestimonialComponent) }
        ]
      },
      {
        path: "blog",
        loadComponent: () => import("./chunk-27KTGXDG.js").then((m) => m.BlogComponent),
        children: [
          { path: "blog-grid", loadComponent: () => import("./chunk-6USLQ4OM.js").then((m) => m.BlogGridComponent) },
          { path: "blog-masonry", loadComponent: () => import("./chunk-XACZEM5P.js").then((m) => m.BlogMasonryComponent) },
          { path: "blog-details-left-sidebar", loadComponent: () => import("./chunk-LQ74T5GS.js").then((m) => m.BlogDetailsLeftSidebarComponent) },
          { path: "blog-details-right-sidebar", loadComponent: () => import("./chunk-Z4G2SMYG.js").then((m) => m.BlogDetailsRightSidebarComponent) },
          { path: "blog-2-grid", loadComponent: () => import("./chunk-6TNIV6PL.js").then((m) => m.Blog2GridComponent) },
          { path: "blog-3-grid", loadComponent: () => import("./chunk-YRLD42KH.js").then((m) => m.Blog3GridComponent) },
          { path: "blog-carousal", loadComponent: () => import("./chunk-EJKYGMED.js").then((m) => m.BlogCarousalComponent) },
          { path: "blog-left-sidebar", loadComponent: () => import("./chunk-DVFRSTGV.js").then((m) => m.BlogLeftSidebarComponent) },
          { path: "blog-right-sidebar", loadComponent: () => import("./chunk-XQV3W3KF.js").then((m) => m.BlogRightSidebarComponent) },
          { path: "blog-details", loadComponent: () => import("./chunk-3UZ3P2LF.js").then((m) => m.BlogDetailsComponent) }
        ]
      },
      {
        path: "student",
        loadComponent: () => import("./chunk-GV524JO2.js").then((m) => m.StudentComponent),
        children: [
          { path: "student-dashboard", loadComponent: () => import("./chunk-Y7IKYFQM.js").then((m) => m.StudentDashboardComponent) },
          { path: "student-profile", loadComponent: () => import("./chunk-VAEXVDLB.js").then((m) => m.StudentProfileComponent) },
          // RENOMMÉ : student-courses → mes-catalogues
          { path: "mes-catalogues", loadComponent: () => import("./chunk-RCXIQUSM.js").then((m) => m.StudentCoursesComponent) },
          { path: "student-courses", redirectTo: "mes-catalogues", pathMatch: "full" },
          { path: "catalogue-detail/:id", loadComponent: () => import("./chunk-JB67Y6HB.js").then((m) => m.CatalogueDetailComponent) },
          // RENOMMÉ : mes-cours → mes-formations
          { path: "mes-formations", loadComponent: () => import("./chunk-XSU6UNQP.js").then((m) => m.MesCoursComponent) },
          { path: "mes-cours", redirectTo: "mes-formations", pathMatch: "full" },
          { path: "student-tickets", loadComponent: () => import("./chunk-QIBH36W4.js").then((m) => m.StudentTicketsComponent) },
          { path: "students-session", loadComponent: () => import("./chunk-BHUAQL77.js").then((m) => m.StudentsSessionsComponent) },
          { path: "sessions-acceptees", loadComponent: () => import("./chunk-TQQIX4AV.js").then((m) => m.SessionsAccepteesComponent) },
          { path: "students-catalogue", loadComponent: () => import("./chunk-ZYCMJPEV.js").then((m) => m.StudentsCatalogueComponent) },
          // RENOMMÉ : students-parcours → mes-parcours
          { path: "mes-parcours", loadComponent: () => import("./chunk-TQMWYJMA.js").then((m) => m.StudentsParcoursComponent) },
          { path: "students-parcours", redirectTo: "mes-parcours", pathMatch: "full" },
          // RENOMMÉ : parcours-assignes → mes-parcours-assignes
          { path: "mes-parcours-assignes", loadComponent: () => import("./chunk-EIRT44DL.js").then((m) => m.ParcoursAssignesComponent) },
          { path: "parcours-assignes", redirectTo: "mes-parcours-assignes", pathMatch: "full" },
          // RENOMMÉ : parcours-assigne/:id → mes-parcours/:id
          { path: "mes-parcours/:id", loadComponent: () => import("./chunk-UA7VACKS.js").then((m) => m.ParcoursAssigneDetailComponent) },
          { path: "parcours-assigne/:id", redirectTo: "mes-parcours/:id", pathMatch: "full" },
          { path: "student-sondage/:id", loadComponent: () => import("./chunk-424H5MVZ.js").then((m) => m.StudentSondageComponent) },
          { path: "student-mes-sondages", loadComponent: () => import("./chunk-EHNMH5C2.js").then((m) => m.StudentMesSondagesComponent) },
          { path: "student-quiz", loadComponent: () => import("./chunk-WDNXQTHX.js").then((m) => m.StudentQuizComponent) },
          { path: "student-quiz-questions/:id", loadComponent: () => import("./chunk-ITW7QQ7Y.js").then((m) => m.StudentQuizQuestionsComponent) },
          { path: "student-planning", loadComponent: () => import("./chunk-TFURDKO4.js").then((m) => m.StudentPlanningComponent) },
          { path: "student-certificate", loadComponent: () => import("./chunk-DZT2O7Z2.js").then((m) => m.StudentCertificateComponent) },
          { path: "student-demande", loadComponent: () => import("./chunk-7YD7H45S.js").then((m) => m.StudentDemandeComponent) },
          { path: "mes-competences", loadComponent: () => import("./chunk-XXYHKMP3.js").then((m) => m.MesCompetencesComponent) },
          { path: "mes-competences-recommandees", loadComponent: () => import("./chunk-6M73NE7D.js").then((m) => m.MesCompetencesRecommandeesComponent) },
          { path: "student-message", loadComponent: () => import("./chunk-H4UZ6YUQ.js").then((m) => m.StudentMessageComponent) },
          { path: "student-qa", loadComponent: () => import("./chunk-IUQRGS6F.js").then((m) => m.StudentQaComponent) },
          { path: "student-order-history", loadComponent: () => import("./chunk-3KH4EHFI.js").then((m) => m.StudentOrderHistoryComponent) },
          { path: "student-referral", loadComponent: () => import("./chunk-MMNL4VBQ.js").then((m) => m.StudentReferralComponent) },
          { path: "student-reviews", loadComponent: () => import("./chunk-EZ4VUXG7.js").then((m) => m.StudentReviewsComponent) },
          { path: "student-wishlist", loadComponent: () => import("./chunk-CCCNKM4A.js").then((m) => m.StudentWishlistComponent) },
          {
            path: "settings",
            loadComponent: () => import("./chunk-4KVCH44T.js").then((m) => m.SettingsComponent),
            children: [
              { path: "student-linked-accounts", loadComponent: () => import("./chunk-DL6QR7TB.js").then((m) => m.StudentLinkedAccountsComponent) },
              { path: "student-change-password", loadComponent: () => import("./chunk-5VCMHXW6.js").then((m) => m.StudentChangePasswordComponent) },
              { path: "student-settings", loadComponent: () => import("./chunk-IVH2CPWV.js").then((m) => m.StudentSettingsComponent) },
              { path: "student-notifications", loadComponent: () => import("./chunk-LAZOOCX2.js").then((m) => m.StudentNotificationsComponent) },
              { path: "student-billing-address", loadComponent: () => import("./chunk-X24BI3SV.js").then((m) => m.StudentBillingAddressComponent) },
              { path: "student-social-profile", loadComponent: () => import("./chunk-PDHHI4VJ.js").then((m) => m.StudentSocialProfileComponent) }
            ]
          }
        ]
      }
    ]
  },
  { path: "verify-certificate", loadComponent: () => import("./chunk-HCVJBQXK.js").then((m) => m.VerifyCertificateComponent) },
  { path: "under-construction", loadComponent: () => import("./chunk-BJJBYT7C.js").then((m) => m.UnderConstructionComponent) },
  { path: "coming-soon", loadComponent: () => import("./chunk-2LSM7OY4.js").then((m) => m.ComingSoonComponent) },
  { path: "error-500", loadComponent: () => import("./chunk-MMSDU7OH.js").then((m) => m.Error500Component) },
  { path: "error-404", loadComponent: () => import("./chunk-34KHBQU2.js").then((m) => m.Error404Component) },
  {
    path: "**",
    redirectTo: "error-404",
    pathMatch: "full"
  }
];

export {
  routes
};
//# sourceMappingURL=chunk-OSONV73K.js.map
