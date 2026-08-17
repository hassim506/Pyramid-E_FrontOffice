import { Routes } from '@angular/router';
import { UserListComponent } from './features/superadmin/user/user-list.component'
import { PermissionGuard } from './guards/permission-guard.guard';
import { authGuard } from './guards/auth.guard';
import { layoutGuard } from './guards/layout.guard';
export const routes: Routes = [
    { path:'',
      redirectTo:'index',
      pathMatch:'full'
    },
    { path: 'auth', loadComponent:()=> import('./auth/auth.component').then((m)=>m.AuthComponent),
        children: [
            { path: 'forgot-password', loadComponent: () => import('./auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent) },
            { path: 'login', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
            { path: 'register', loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent) },
            { path: 'set-password', loadComponent: () => import('./auth/set-password/set-password.component').then(m => m.SetPasswordComponent) },
            { path: 'otp', loadComponent: () => import('./auth/otp/otp.component').then(m => m.OtpComponent) },
            { path: 'lock-screen', loadComponent: () => import('./auth/lock-screen/lock-screen.component').then(m => m.LockScreenComponent) },
            { path: 'magic-verify', loadComponent: () => import('./auth/magic-verify/magic-verify.component').then(m => m.MagicVerifyComponent) },
            { path: 'activate',    loadComponent: () => import('./auth/activate/activate.component').then(m => m.ActivateComponent) }
        ]
},
    // ══════════════════════════════════════════════════════════════════════
    // PAGES PLEIN ÉCRAN — en dehors de tout layout back-office
    // ══════════════════════════════════════════════════════════════════════
    {
        path: 'courses/course-watch/:id',
        loadComponent: () => import('./features/courses/course-watch/course-watch.component').then(m => m.CourseWatchComponent),
        canActivate: [authGuard],
    },
    // Rétrocompatibilité ancienne URL
    {
        path: 'student/lecture-formation/:id',
        loadComponent: () => import('./features/courses/course-watch/course-watch.component').then(m => m.CourseWatchComponent),
        canActivate: [authGuard],
    },
    // ✅ Route quiz plein écran — hors layout, même niveau que lecture-formation
    {
        path: 'student/quiz/:id',
        loadComponent: () => import('./features/student/student-quiz-questions/student-quiz-questions.component').then(m => m.StudentQuizQuestionsComponent),
        canActivate: [authGuard],
    },

{path:'',loadComponent:()=>import ('./features/features.component').then((m)=>m.FeaturesComponent),
    children:[
        {path:'index',loadComponent:()=>import ('./features/home-list/home/home.component').then((m)=>m.HomeComponent)},
        {path:'index-two',loadComponent:()=>import ('./features/home-list/home2/home2.component').then((m)=>m.Home2Component)},
        {path:'index-three',loadComponent:()=>import ('./features/home-list/home3/home3.component').then((m)=>m.Home3Component)},
        {path:'index-four',loadComponent:()=>import ('./features/home-list/home4/home4.component').then((m)=>m.Home4Component)},
        {path:'index-five',loadComponent:()=>import ('./features/home-list/home5/home5.component').then((m)=>m.Home5Component)},
        {path:'index-six',loadComponent:()=>import ('./features/home-list/home6/home6.component').then((m)=>m.Home6Component)},
        {path:'courses',loadComponent:()=>import ('./features/courses/courses.component').then((m)=>m.CoursesComponent),
            children:[
                {path:'add-course',loadComponent:()=>import ('./features/courses/add-course/add-course.component').then((m)=>m.AddCourseComponent)},
                {path:'course-details/:id',loadComponent:()=>import ('./features/courses/course-details/course-details.component').then((m)=>m.CourseDetailsComponent)},
                {path:'course-details-2',loadComponent:()=>import ('./features/courses/course-details-2/course-details-2.component').then((m)=>m.CourseDetails2Component)},
                {path:'course-list',loadComponent:()=>import ('./features/courses/course-list/course-list.component').then((m)=>m.CourseListComponent)},
                {path:'course-grid',loadComponent:()=>import ('./features/courses/course-grid/course-grid.component').then((m)=>m.CourseGridComponent)},
                {path:'course-category',loadComponent:()=>import ('./features/courses/course-category/course-category.component').then((m)=>m.CourseCategoryComponent)},
                {path:'course-category-2',loadComponent:()=>import ('./features/courses/course-category-2/course-category-2.component').then((m)=>m.CourseCategory2Component)},
                {path:'course-category-3',loadComponent:()=>import ('./features/courses/course-category-3/course-category-3.component').then((m)=>m.CourseCategory3Component)},
                {path:'course-resume',loadComponent:()=>import ('./features/courses/course-resume/course-resume.component').then((m)=>m.CourseResumeComponent)},

                {path:'cart',loadComponent:()=>import ('./features/courses/course-cart/course-cart.component').then((m)=>m.CourseCartComponent)},
                {path:'checkout',loadComponent:()=>import ('./features/courses/course-checkout/course-checkout.component').then((m)=>m.CourseCheckoutComponent)},
                {path:'add-course',loadComponent:()=>import ('./features/courses/add-course/add-course.component').then((m)=>m.AddCourseComponent)},
              {path:'instructor-course-add',loadComponent:()=>import ('./features/courses/instructor-course-add/instructor-course-add.component').then((m)=>m.InstructorCourseAddComponent)},
              {path:'instructor-course-edit/:id',loadComponent:()=>import ('./features/courses/instructor-course-edit/instructor-course-edit.component').then((m)=>m.InstructorCourseEditComponent)},
              {path:'instructor-course-details/:id',loadComponent:()=>import ('./features/courses/instructor-course-details/instructor-course-details.component').then((m)=>m.InstructorCourseDetailsComponent)},



            ]
        },
        {path : 'instructor',loadComponent:()=>import ('./features/instructor/instructor.component').then((m)=>m.InstructorComponent), canActivate: [layoutGuard],
            children:[
                {path:'instructor-dashboard',loadComponent:()=>import ('./features/instructor/instructor-dashboard/instructor-dashboard.component').then((m)=>m.InstructorDashboardComponent)},
                {path:'instructor-profile',loadComponent:()=>import ('./features/instructor/instructor-profile/instructor-profile.component').then((m)=>m.InstructorProfileComponent)},
                {path:'instructor-payouts',loadComponent:()=>import ('./features/instructor/instructor-payouts/instructor-payouts.component').then((m)=>m.InstructorPayoutsComponent)},
                {path:'instructor-tickets',loadComponent:()=>import ('./features/instructor/instructor-tickets/instructor-tickets.component').then((m)=>m.InstructorTicketsComponent)},
                {path:'instructor-announcements',loadComponent:()=>import ('./features/instructor/instructor-announcements/instructor-announcements.component').then((m)=>m.InstructorAnnouncementsComponent)},
                {path:'instructor-quiz-questions/:quizId',loadComponent:()=>import ('./features/instructor/instructor-quiz-questions/instructor-quiz-questions.component').then((m)=>m.InstructorQuizQuestionsComponent)},
                {path:'instructor-quiz-results',loadComponent:()=>import ('./features/instructor/instructor-quiz-results/instructor-quiz-results.component').then((m)=>m.InstructorQuizResultsComponent)},
                {path:'instructor-quiz-details',loadComponent:()=>import ('./features/instructor/instructor-quiz-details/instructor-quiz-details.component').then((m)=>m.InstructorQuizDetailsComponent)},
                {path:'instructor-quiz',loadComponent:()=>import ('./features/instructor/instructor-quiz/instructor-quiz.component').then((m)=>m.InstructorQuizComponent)},
                {path:'instructor-certificate',loadComponent:()=>import ('./features/instructor/instructor-certificate/instructor-certificate.component').then((m)=>m.InstructorCertificateComponent)},
                {path:'instructor-earnings',loadComponent:()=>import ('./features/instructor/instructor-earnings/instructor-earnings.component').then((m)=>m.InstructorEarningsComponent)},
                {path:'instructor-statements',loadComponent:()=>import ('./features/instructor/instructor-statements/instructor-statements.component').then((m)=>m.InstructorStatementsComponent)},
                {path:'instructor-course',loadComponent:()=>import ('./features/instructor/instructor-course/instructor-course.component').then((m)=>m.InstructorCourseComponent)},
                {path:'instructor-course-grid',loadComponent:()=>import ('./features/instructor/instructor-course-grid/instructor-course-grid.component').then((m)=>m.InstructorCourseGridComponent)},
                {path:'instructor-session',loadComponent:()=>import ('./features/instructor/instructor-session/instructor-session.component').then((m)=>m.InstructorSessionComponent)},
                {path:'instructor-mes-sondages',loadComponent:()=>import ('./features/instructor/instructor-mes-sondages/instructor-mes-sondages.component').then((m)=>m.InstructorMesSondagesComponent)},
                {path:'video-ressources',loadComponent:()=>import ('./features/instructor/video-ressources/video-ressources.component').then((m)=>m.VideoRessourcesComponent)},

                {path:'instructor-message',loadComponent:()=>import ('./features/instructor/instructor-message/instructor-message.component').then((m)=>m.InstructorMessageComponent)},
                {path:'instructor-assignment',loadComponent:()=>import ('./features/instructor/instructor-assignment/instructor-assignment.component').then((m)=>m.InstructorAssignmentComponent)},
                {path:'students-list',loadComponent:()=>import ('./features/instructor/students-list/students-list.component').then((m)=>m.StudentsListComponent)},
                {path:'students-grid',loadComponent:()=>import ('./features/instructor/students-grid/students-grid.component').then((m)=>m.StudentsGridComponent)},
                {path:'students-details',loadComponent:()=>import ('./features/instructor/students-details/students-details.component').then((m)=>m.StudentsDetailsComponent)},
                {path:'settings',loadComponent:()=>import ('./features/instructor/settings/settings.component').then((m)=>m.SettingsComponent),
                    children:[
                        {path:'instructor-setting-withdraw',loadComponent:()=>import ('./features/instructor/settings/instructor-setting-withdraw/instructor-setting-withdraw.component').then((m)=>m.InstructorSettingWithdrawComponent)},
                        {path:'instructor-setting-notifications',loadComponent:()=>import ('./features/instructor/settings/instructor-setting-notifications/instructor-setting-notifications.component').then((m)=>m.InstructorSettingNotificationsComponent)},
                        {path:'instructor-plans',loadComponent:()=>import ('./features/instructor/settings/instructor-plans/instructor-plans.component').then((m)=>m.InstructorPlansComponent)},
                        {path:'instructor-integrations',loadComponent:()=>import ('./features/instructor/settings/instructor-integrations/instructor-integrations.component').then((m)=>m.InstructorIntegrationsComponent)},
                        {path:'instructor-linked-accounts',loadComponent:()=>import ('./features/instructor/settings/instructor-linked-accounts/instructor-linked-accounts.component').then((m)=>m.InstructorLinkedAccountsComponent)},
                        {path:'instructor-social-profiles',loadComponent:()=>import ('./features/instructor/settings/instructor-social-profiles/instructor-social-profiles.component').then((m)=>m.InstructorSocialProfilesComponent)},
                        {path:'instructor-change-password',loadComponent:()=>import ('./features/instructor/settings/instructor-change-password/instructor-change-password.component').then((m)=>m.InstructorChangePasswordComponent)},
                        {path:'instructor-settings',loadComponent:()=>import ('./features/instructor/settings/instructor-settings/instructor-settings.component').then((m)=>m.InstructorSettingsComponent)}

                    ]
                },
            ]
        },
        {path : 'superadmin',loadComponent:()=>import ('./features/superadmin/superadmin.component').then((m)=>m.SuperadminComponent), canActivate: [layoutGuard],
            children:[
                {path:'superadmin-dashboard',loadComponent:()=>import ('./features/superadmin/superadmin-dashboard/superadmin-dashboard.component').then((m)=>m.SuperAdminDashboardComponent)},
                {path:'superadmin-profile',loadComponent:()=>import ('./features/superadmin/superadmin-profile/superadmin-profile.component').then((m)=>m.SuperadminProfileComponent)},
                {path:'superadmin-payouts',loadComponent:()=>import ('./features/superadmin/superadmin-payouts/superadmin-payouts.component').then((m)=>m.SuperadminPayoutsComponent)},
                {path:'superadmin-tickets',loadComponent:()=>import ('./features/superadmin/superadmin-tickets/superadmin-tickets.component').then((m)=>m.SuperadminTicketsComponent)},
                {path:'superadmin-companymanagement',loadComponent:()=>import ('./features/superadmin/companymanagement/companymanagement.component').then((m)=>m.CompanyManagementComponent)},
                {path:'superadmin-company-details/:id',loadComponent:()=>import ('./features/superadmin/company-details/company-details.component').then((m)=>m.CompanyDetailsComponent)},
                {path:'superadmin-company-add',loadComponent:()=>import ('./features/superadmin/company-add/company-add.component').then((m)=>m.CompanyAddComponent)},
                {path:'superadmin-client-list',loadComponent:()=>import ('./features/superadmin/client/client-list.component').then((m)=>m.ClientListComponent)},
                {path:'superadmin-client-add',loadComponent:()=>import ('./features/superadmin/client-add/client-add.component').then((m)=>m.ClientAddComponent)},
                {path:'superadmin-client-details/:id',loadComponent:()=>import ('./features/superadmin/client-details/client-details.component').then((m)=>m.ClientDetailsComponent)},
                {path:'superadmin-permission',loadComponent:()=>import ('./features/superadmin/superadmin-permission/superadmin-permission.component').then((m)=>m.SuperadminPermissionComponent)},
                {path:'superadmin-role',loadComponent:()=>import ('./features/superadmin/superadmin-role/superadmin-role.component').then((m)=>m.SuperadminRoleComponent)},

                // {path:'superadmin-register',loadComponent:()=>import ('./features/superadmin/register/register.component').then((m)=>m.RegisterComponent)},
                {path:'superadmin-user-list',loadComponent:()=>import ('./features/superadmin/user/user-list.component').then((m)=>m.UserListComponent), canActivate: [PermissionGuard], data: { permission: 'lister utilisateurs' }},
                {path:'superadmin-user-details/:id',loadComponent:()=>import ('./features/superadmin/user-details/user-details.component').then((m)=>m.UserDetailsComponent)},
                {path:'superadmin-user-add',loadComponent:()=>import ('./features/superadmin/user-add/user-add.component').then((m)=>m.UserAddComponent)},

                {path:'superadmin-announcements',loadComponent:()=>import ('./features/superadmin/superadmin-announcements/superadmin-announcements.component').then((m)=>m.SuperadminAnnouncementsComponent)},
                {path:'superadmin-quiz-questions',loadComponent:()=>import ('./features/superadmin/superadmin-quiz-questions/superadmin-quiz-questions.component').then((m)=>m.SuperadminQuizQuestionsComponent)},
                {path:'superadmin-quiz-results',loadComponent:()=>import ('./features/superadmin/superadmin-quiz-results/superadmin-quiz-results.component').then((m)=>m.SuperadminQuizResultsComponent)},
                {path:'superadmin-quiz-details',loadComponent:()=>import ('./features/superadmin/superadmin-quiz-details/superadmin-quiz-details.component').then((m)=>m.SuperadminQuizDetailsComponent)},
                {path:'superadmin-quiz',loadComponent:()=>import ('./features/superadmin/superadmin-quiz/superadmin-quiz.component').then((m)=>m.SuperadminQuizComponent)},
                {path:'superadmin-certificate',loadComponent:()=>import ('./features/superadmin/superadmin-certificate/superadmin-certificate.component').then((m)=>m.SuperadminCertificateComponent)},
                {path:'superadmin-earnings',loadComponent:()=>import ('./features/superadmin/superadmin-earnings/superadmin-earnings.component').then((m)=>m.SuperadminEarningsComponent)},
                {path:'superadmin-rapports',loadComponent:()=>import ('./features/superadmin/superadmin-rapports/superadmin-rapports.component').then((m)=>m.SuperadminRapportsComponent)},
                {path:'superadmin-course',loadComponent:()=>import ('./features/superadmin/superadmin-course/superadmin-course.component').then((m)=>m.SuperadminCourseComponent)},
                {path:'superadmin-course-grid',loadComponent:()=>import ('./features/superadmin/superadmin-course-grid/superadmin-course-grid.component').then((m)=>m.SuperadminCourseGridComponent)},
                {path:'superadmin-session',loadComponent:()=>import ('./features/superadmin/superadmin-session/superadmin-session.component').then((m)=>m.SuperadminSessionComponent)},
                {path:'superadmin-parcours',loadComponent:()=>import ('./features/superadmin/superadmin-parcours/superadmin-parcours.component').then((m)=>m.SuperadminParcoursComponent)},
                {path:'superadmin-catalogue',loadComponent:()=>import ('./features/superadmin/superadmin-catalogue/superadmin-catalogue.component').then((m)=>m.SuperadminCatalogueComponent)},
                {path:'superadmin-message',loadComponent:()=>import ('./features/superadmin/superadmin-message/superadmin-message.component').then((m)=>m.SuperadminMessageComponent)},
                {path:'superadmin-audit-logs',loadComponent:()=>import ('./features/superadmin/superadmin-audit-logs/superadmin-audit-logs.component').then((m)=>m.SuperadminAuditLogsComponent)},
                {path:'superadmin-sondage',loadComponent:()=>import ('./features/superadmin/superadmin-sondage/superadmin-sondage.component').then((m)=>m.SuperadminSondageComponent)},
                {path:'superadmin-assignment',loadComponent:()=>import ('./features/superadmin/superadmin-assignment/superadmin-assignment.component').then((m)=>m.SuperadminAssignmentComponent)},
                {path:'students-list',loadComponent:()=>import ('./features/superadmin/students-list/students-list.component').then((m)=>m.StudentsListComponent)},
                {path:'students-grid',loadComponent:()=>import ('./features/superadmin/students-grid/students-grid.component').then((m)=>m.StudentsGridComponent)},
                {path:'students-details',loadComponent:()=>import ('./features/superadmin/students-details/students-details.component').then((m)=>m.StudentsDetailsComponent)},
                {path:'settings',loadComponent:()=>import ('./features/superadmin/settings/settings.component').then((m)=>m.SettingsComponent),
                    children:[
                        {path:'superadmin-setting-withdraw',loadComponent:()=>import ('./features/superadmin/settings/superadmin-setting-withdraw/superadmin-setting-withdraw.component').then((m)=>m.SuperadminSettingWithdrawComponent)},
                        {path:'superadmin-setting-notifications',loadComponent:()=>import ('./features/superadmin/settings/superadmin-setting-notifications/superadmin-setting-notifications.component').then((m)=>m.SuperadminSettingNotificationsComponent)},
                        {path:'superadmin-plans',loadComponent:()=>import ('./features/superadmin/settings/superadmin-plans/superadmin-plans.component').then((m)=>m.SuperadminPlansComponent)},
                        {path:'superadmin-integrations',loadComponent:()=>import ('./features/superadmin/settings/superadmin-integrations/superadmin-integrations.component').then((m)=>m.SuperadminIntegrationsComponent)},
                        {path:'superadmin-linked-accounts',loadComponent:()=>import ('./features/superadmin/settings/superadmin-linked-accounts/superadmin-linked-accounts.component').then((m)=>m.SuperadminLinkedAccountsComponent)},
                        {path:'superadmin-social-profiles',loadComponent:()=>import ('./features/superadmin/settings/superadmin-social-profiles/superadmin-social-profiles.component').then((m)=>m.SuperadminSocialProfilesComponent)},
                        {path:'superadmin-change-password',loadComponent:()=>import ('./features/superadmin/settings/superadmin-change-password/superadmin-change-password.component').then((m)=>m.SuperadminChangePasswordComponent)},
                        {path:'superadmin-settings',loadComponent:()=>import ('./features/superadmin/settings/superadmin-settings/superadmin-settings.component').then((m)=>m.SuperadminSettingsComponent)}

                    ]
                },
            ]
        },
        {path : 'adminrh',loadComponent:()=>import ('./features/adminrh/adminrh.component').then((m)=>m.AdminrhComponent), canActivate: [layoutGuard],
            children:[
                {path:'adminrh-dashboard',loadComponent:()=>import ('./features/adminrh/adminrh-dashboard/adminrh-dashboard.component').then((m)=>m.AdminrhDashboardComponent)},
                {path:'adminrh-profile',loadComponent:()=>import ('./features/adminrh/adminrh-profile/adminrh-profile.component').then((m)=>m.AdminrhProfileComponent)},
                {path:'adminrh-payouts',loadComponent:()=>import ('./features/adminrh/adminrh-payouts/adminrh-payouts.component').then((m)=>m.AdminrhPayoutsComponent)},
                {path:'adminrh-tickets',loadComponent:()=>import ('./features/adminrh/adminrh-tickets/adminrh-tickets.component').then((m)=>m.AdminrhTicketsComponent)},
                {path:'adminrh-companymanagement',loadComponent:()=>import ('./features/adminrh/companymanagement/companymanagement.component').then((m)=>m.CompanyManagementComponent)},
                {path:'adminrh-company-details/:id',loadComponent:()=>import ('./features/adminrh/company-details/company-details.component').then((m)=>m.CompanyDetailsComponent)},
                {path:'adminrh-company-add',loadComponent:()=>import ('./features/adminrh/company-add/company-add.component').then((m)=>m.CompanyAddComponent)},
                {path:'adminrh-client-list',loadComponent:()=>import ('./features/adminrh/client/client-list.component').then((m)=>m.ClientListComponent)},
                {path:'adminrh-client-add',loadComponent:()=>import ('./features/adminrh/client-add/client-add.component').then((m)=>m.ClientAddComponent)},
                {path:'adminrh-client-details/:id',loadComponent:()=>import ('./features/adminrh/client-details/client-details.component').then((m)=>m.ClientDetailsComponent)},
                {path:'adminrh-permission',loadComponent:()=>import ('./features/adminrh/adminrh-permission/adminrh-permission.component').then((m)=>m.AdminrhPermissionComponent)},
                {path:'adminrh-role',loadComponent:()=>import ('./features/adminrh/adminrh-role/adminrh-role.component').then((m)=>m.AdminrhRoleComponent)},

                // {path:'adminrh-register',loadComponent:()=>import ('./features/adminrh/register/register.component').then((m)=>m.RegisterComponent)},
                {path:'adminrh-user-list',loadComponent:()=>import ('./features/adminrh/user/user-list.component').then((m)=>m.UserListComponent)},
                {path:'adminrh-user-group-list',loadComponent:()=>import ('./features/adminrh/user-group-list/user-group-list.component').then((m)=>m.UserGroupListComponent)},

                {path:'adminrh-user-details/:id',loadComponent:()=>import ('./features/adminrh/user-details/user-details.component').then((m)=>m.UserDetailsComponent)},
                {path:'adminrh-user-add',loadComponent:()=>import ('./features/adminrh/user-add/user-add.component').then((m)=>m.UserAddComponent)},
                {path:'adminrh-demande',loadComponent:()=>import ('./features/adminrh/adminrh-demande/adminrh-demande.component').then((m)=>m.AdminrhDemandeComponent)},
                {path:'adminrh-announcements',loadComponent:()=>import ('./features/adminrh/adminrh-announcements/adminrh-announcements.component').then((m)=>m.AdminrhAnnouncementsComponent)},
                {path:'adminrh-quiz-questions/:quizId',loadComponent:()=>import ('./features/adminrh/adminrh-quiz-questions/adminrh-quiz-questions.component').then((m)=>m.AdminrhQuizQuestionsComponent)},
                {path:'adminrh-quiz-questions',loadComponent:()=>import ('./features/adminrh/adminrh-quiz-questions/adminrh-quiz-questions.component').then((m)=>m.AdminrhQuizQuestionsComponent)},
                {path:'adminrh-quiz-results',loadComponent:()=>import ('./features/adminrh/adminrh-quiz-results/adminrh-quiz-results.component').then((m)=>m.AdminrhQuizResultsComponent)},
                {path:'adminrh-quiz-details',loadComponent:()=>import ('./features/adminrh/adminrh-quiz-details/adminrh-quiz-details.component').then((m)=>m.AdminrhQuizDetailsComponent)},
                {path:'adminrh-quiz',loadComponent:()=>import ('./features/adminrh/adminrh-quiz/adminrh-quiz.component').then((m)=>m.AdminrhQuizComponent)},
                {path:'adminrh-certificate',loadComponent:()=>import ('./features/adminrh/adminrh-certificate/adminrh-certificate.component').then((m)=>m.AdminrhCertificateComponent)},
                {path:'adminrh-certificate-modele',loadComponent:()=>import ('./features/adminrh/adminrh-certificate-modele/adminrh-certificate-modele.component').then((m)=>m.AdminrhCertificateModeleComponent)},
                {path:'adminrh-sondage',loadComponent:()=>import ('./features/adminrh/adminrh-sondage/adminrh-sondage.component').then((m)=>m.AdminrhSondageComponent)},
                {path:'adminrh-mes-sondages',loadComponent:()=>import ('./features/adminrh/adminrh-mes-sondages/adminrh-mes-sondages.component').then((m)=>m.AdminrhMesSondagesComponent)},
                {path:'adminrh-certifier',loadComponent:()=>import ('./features/adminrh/adminrh-certifier/adminrh-certifier.component').then((m)=>m.AdminrhCertifierComponent)},
                {path:'adminrh-categorie',loadComponent:()=>import ('./features/adminrh/adminrh-categorie/adminrh-categorie.component').then((m)=>m.AdminrhCategorieComponent)},

                {path:'adminrh-catalogue',loadComponent:()=>import ('./features/adminrh/adminrh-catalogue/adminrh-catalogue.component').then((m)=>m.AdminrhCatalogueComponent)},
                {path:'adminrh-parcours',loadComponent:()=>import ('./features/adminrh/adminrh-parcours/adminrh-parcours.component').then((m)=>m.AdminrhParcoursComponent)},
                {path:'adminrh-demande-parcours',loadComponent:()=>import ('./features/adminrh/adminrh-demande-parcours/adminrh-demande-parcours.component').then((m)=>m.AdminrhDemandeParcoursComponent)},
                {path:'adminrh-demande-catalogue',loadComponent:()=>import ('./features/adminrh/adminrh-demande-catalogue/adminrh-demande-catalogue.component').then((m)=>m.AdminrhDemandeCatalogueComponent)},
                {path:'adminrh-demande-session',loadComponent:()=>import ('./features/adminrh/adminrh-demande-session/adminrh-demande-session.component').then((m)=>m.AdminrhDemandeSessionComponent)},


                {path:'adminrh-earnings',loadComponent:()=>import ('./features/adminrh/adminrh-earnings/adminrh-earnings.component').then((m)=>m.AdminrhEarningsComponent)},
                {path:'adminrh-rapport',loadComponent:()=>import ('./features/adminrh/adminrh-statements/adminrh-statements.component').then((m)=>m.AdminrhStatementsComponent)},
                {path:'adminrh-statements',loadComponent:()=>import ('./features/adminrh/adminrh-statements/adminrh-statements.component').then((m)=>m.AdminrhStatementsComponent)},

                {path:'adminrh-direction',loadComponent:()=>import ('./features/adminrh/adminrh-direction/adminrh-direction.component').then((m)=>m.AdminrhDirectionComponent)},
                {path:'adminrh-course',loadComponent:()=>import ('./features/adminrh/adminrh-course/adminrh-course.component').then((m)=>m.AdminrhCourseComponent)},
                {path:'adminrh-course-grid',loadComponent:()=>import ('./features/adminrh/adminrh-course-grid/adminrh-course-grid.component').then((m)=>m.AdminrhCourseGridComponent)},
                {path:'adminrh-session',loadComponent:()=>import ('./features/adminrh/adminrh-session/adminrh-session.component').then((m)=>m.AdminrhSessionComponent)},

                {path:'adminrh-message',loadComponent:()=>import ('./features/adminrh/adminrh-message/adminrh-message.component').then((m)=>m.AdminrhMessageComponent)},
                {path:'adminrh-assignment',loadComponent:()=>import ('./features/adminrh/adminrh-assignment/adminrh-assignment.component').then((m)=>m.AdminrhAssignmentComponent)},
                {path:'students-list',loadComponent:()=>import ('./features/adminrh/students-list/students-list.component').then((m)=>m.StudentsListComponent)},
                {path:'students-grid',loadComponent:()=>import ('./features/adminrh/students-grid/students-grid.component').then((m)=>m.StudentsGridComponent)},
                {path:'students-details',loadComponent:()=>import ('./features/adminrh/students-details/students-details.component').then((m)=>m.StudentsDetailsComponent)},
                {path:'settings',loadComponent:()=>import ('./features/adminrh/settings/settings.component').then((m)=>m.SettingsComponent),
                    children:[
                        {path:'adminrh-setting-withdraw',loadComponent:()=>import ('./features/adminrh/settings/adminrh-setting-withdraw/adminrh-setting-withdraw.component').then((m)=>m.AdminrhSettingWithdrawComponent)},
                        {path:'adminrh-setting-notifications',loadComponent:()=>import ('./features/adminrh/settings/adminrh-setting-notifications/adminrh-setting-notifications.component').then((m)=>m.AdminrhSettingNotificationsComponent)},
                        {path:'adminrh-plans',loadComponent:()=>import ('./features/adminrh/settings/adminrh-plans/adminrh-plans.component').then((m)=>m.AdminrhPlansComponent)},
                        {path:'adminrh-integrations',loadComponent:()=>import ('./features/adminrh/settings/adminrh-integrations/adminrh-integrations.component').then((m)=>m.AdminrhIntegrationsComponent)},
                        {path:'adminrh-linked-accounts',loadComponent:()=>import ('./features/adminrh/settings/adminrh-linked-accounts/adminrh-linked-accounts.component').then((m)=>m.AdminrhLinkedAccountsComponent)},
                        {path:'adminrh-social-profiles',loadComponent:()=>import ('./features/adminrh/settings/adminrh-social-profiles/adminrh-social-profiles.component').then((m)=>m.AdminrhSocialProfilesComponent)},
                        {path:'adminrh-change-password',loadComponent:()=>import ('./features/adminrh/settings/adminrh-change-password/adminrh-change-password.component').then((m)=>m.AdminrhChangePasswordComponent)},
                        {path:'adminrh-settings',loadComponent:()=>import ('./features/adminrh/settings/adminrh-settings/adminrh-settings.component').then((m)=>m.AdminrhSettingsComponent)}

                    ]
                },
            ]
        },
        { path: 'pages', loadComponent:()=>import ('./features/pages/pages.component').then((m)=>m.PagesComponent),
            children: [
                { path: 'faq', loadComponent: () => import('./features/pages/faq/faq.component').then(m => m.FaqComponent) },
                { path: 'notifications', loadComponent: () => import('./features/pages/notifications/notifications.component').then(m => m.NotificationsComponent) },
                { path: 'pricing-plan', loadComponent: () => import('./features/pages/pricing-plan/pricing-plan.component').then(m => m.PricingPlanComponent) },
                { path: 'term-condition', loadComponent: () => import('./features/pages/term-condition/term-condition.component').then(m => m.TermConditionComponent) },
                { path: 'privacy-policy', loadComponent: () => import('./features/pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent) },
                { path: 'instructor-details', loadComponent: () => import('./features/pages/instructor-details/instructor-details.component').then(m => m.InstructorDetailsComponent) },
                { path: 'become-an-instructor', loadComponent: () => import('./features/pages/become-an-expert/become-an-expert.component').then(m => m.BecomeAnExpertComponent) },
                { path: 'instructor-grid', loadComponent: () => import('./features/pages/instructor-grid/instructor-grid.component').then(m => m.InstructorGridComponent) },
                { path: 'instructor-list', loadComponent: () => import('./features/pages/instructor-list/instructor-list.component').then(m => m.InstructorListComponent) },
                { path: 'contact-us', loadComponent: () => import('./features/pages/contact-us/contact-us.component').then(m => m.ContactUsComponent) },
                { path: 'about-us', loadComponent: () => import('./features/pages/about-us/about-us.component').then(m => m.AboutUsComponent) },
                { path: 'testimonial', loadComponent: () => import('./features/pages/testimonial/testimonial.component').then(m => m.TestimonialComponent) }
            ]
        },
        { path: 'blog', loadComponent: () => import('./features/blog/blog.component').then(m => m.BlogComponent),
        children: [
            { path: 'blog-grid', loadComponent: () => import('./features/blog/blog-grid/blog-grid.component').then(m => m.BlogGridComponent) },
            { path: 'blog-masonry', loadComponent: () => import('./features/blog/blog-masonry/blog-masonry.component').then(m => m.BlogMasonryComponent) },
            { path: 'blog-details-left-sidebar', loadComponent: () => import('./features/blog/blog-details-left-sidebar/blog-details-left-sidebar.component').then(m => m.BlogDetailsLeftSidebarComponent) },
            { path: 'blog-details-right-sidebar', loadComponent: () => import('./features/blog/blog-details-right-sidebar/blog-details-right-sidebar.component').then(m => m.BlogDetailsRightSidebarComponent) },
            { path: 'blog-2-grid', loadComponent: () => import('./features/blog/blog-2-grid/blog-2-grid.component').then(m => m.Blog2GridComponent) },
            { path: 'blog-3-grid', loadComponent: () => import('./features/blog/blog-3-grid/blog-3-grid.component').then(m => m.Blog3GridComponent) },
            { path: 'blog-carousal', loadComponent: () => import('./features/blog/blog-carousal/blog-carousal.component').then(m => m.BlogCarousalComponent) },
            { path: 'blog-left-sidebar', loadComponent: () => import('./features/blog/blog-left-sidebar/blog-left-sidebar.component').then(m => m.BlogLeftSidebarComponent) },
            { path: 'blog-right-sidebar', loadComponent: () => import('./features/blog/blog-right-sidebar/blog-right-sidebar.component').then(m => m.BlogRightSidebarComponent) },
            { path: 'blog-details', loadComponent: () => import('./features/blog/blog-details/blog-details.component').then(m => m.BlogDetailsComponent) }
        ]
        },
        {path : 'student',loadComponent:()=>import ('./features/student/student.component').then((m)=>m.StudentComponent), canActivate: [layoutGuard],
    children:[
        {path:'student-dashboard',loadComponent:()=>import ('./features/student/student-dashboard/student-dashboard.component').then((m)=>m.StudentDashboardComponent)},
        {path:'student-profile',loadComponent:()=>import ('./features/student/student-profile/student-profile.component').then((m)=>m.StudentProfileComponent)},

        // RENOMMÉ : student-courses → mes-catalogues
        {path:'mes-catalogues',loadComponent:()=>import ('./features/student/mes-catalogues/mes-catalogues.component').then((m)=>m.MesCataloguesComponent)},
        {path:'mes-catalogues/:id',loadComponent:()=>import ('./features/student/mes-catalogues-details/mes-catalogues-details.component').then((m)=>m.MesCataloguesDetailsComponent)},

        {path:'student-courses',redirectTo:'mes-catalogues',pathMatch:'full'},

        {path:'catalogue-detail/:id',loadComponent:()=>import ('./features/student/explorer/catalogue-detail/catalogue-detail.component').then((m)=>m.CatalogueDetailComponent)},

        // RENOMMÉ : mes-cours → mes-formations
        {path:'mes-formations',loadComponent:()=>import ('./features/student/mes-cours/mes-cours.component').then((m)=>m.MesCoursComponent)},
        {path:'mes-cours',redirectTo:'mes-formations',pathMatch:'full'},

        {path:'student-tickets',loadComponent:()=>import ('./features/student/student-tickets/student-tickets.component').then((m)=>m.StudentTicketsComponent)},
        {path:'students-session',loadComponent:()=>import ('./features/student/students-session/students-session.component').then((m)=>m.StudentsSessionsComponent)},
        {path:'sessions-acceptees',loadComponent:()=>import ('./features/student/sessions-acceptees/sessions-acceptees.component').then((m)=>m.SessionsAccepteesComponent)},
        // RENOMMÉ : students-catalogue → student-demande-catalogue
        {path:'student-demande-catalogue',loadComponent:()=>import ('./features/student/student-demande-catalogue/student-demande-catalogue.component').then((m)=>m.StudentDemandeCatalogueComponent)},
        {path:'students-catalogue',redirectTo:'student-demande-catalogue',pathMatch:'full'},
        {path:'students-explorer',loadComponent:()=>import ('./features/student/explorer/explorer.component').then((m)=>m.ExplorerComponent)},


        // RENOMMÉ : students-parcours → mes-demandes-parcours
        {path:'mes-demandes-parcours',loadComponent:()=>import ('./features/student/student-demande-parcours/student-demande-parcours.component').then((m)=>m.StudentDemandeParcoursComponent)},
        {path:'students-parcours',redirectTo:'mes-demandes-parcours',pathMatch:'full'},

        // RENOMMÉ : parcours-assignes → mes-parcours-assignes
        // RENOMMÉ : parcours-assignes → mes-parcours-assignes
        {path:'mes-parcours',loadComponent:()=>import ('./features/student/mes-parcours/mes-parcours.component').then((m)=>m.MesParcoursComponent)},
        {path:'parcours-assignes',redirectTo:'mes-parcours-assignes',pathMatch:'full'},
        {path:'mes-parcours',redirectTo:'mes-parcours-assignes',pathMatch:'full'},
        {path:'mes-parcours',redirectTo:'mes-parcours',pathMatch:'full'},

        // RENOMMÉ : parcours-assigne/:id → mes-parcours/:id
        {path:'mes-parcours/:id',loadComponent:()=>import ('./features/student/parcours-assigne-detail/parcours-assigne-detail.component').then((m)=>m.ParcoursAssigneDetailComponent)},
        {path:'parcours-assigne/:id',redirectTo:'mes-parcours/:id',pathMatch:'full'},

        // Détails parcours (pour n'importe quel parcours depuis l'explorer)
        {path:'parcours-details/:id',loadComponent:()=>import ('./features/student/parcours-details/parcours-details.component').then((m)=>m.ParcoursDetailsComponent)},

        {path:'student-sondage/:id',loadComponent:()=>import('./features/student/student-sondage/student-sondage.component').then(m=>m.StudentSondageComponent)},
        {path:'student-mes-sondages',loadComponent:()=>import('./features/student/student-mes-sondages/student-mes-sondages.component').then(m=>m.StudentMesSondagesComponent)},
        {path:'student-quiz',loadComponent:()=>import ('./features/student/student-quiz/student-quiz.component').then((m)=>m.StudentQuizComponent)},
        {path:'student-quiz-questions/:id',loadComponent:()=>import ('./features/student/student-quiz-questions/student-quiz-questions.component').then((m)=>m.StudentQuizQuestionsComponent)},
        {path:'student-planning',loadComponent:()=>import ('./features/student/student-planning/student-planning.component').then((m)=>m.StudentPlanningComponent)},
        {path:'student-certificate',loadComponent:()=>import ('./features/student/student-certificate/student-certificate.component').then((m)=>m.StudentCertificateComponent)},
        {path:'student-demande',loadComponent:()=>import ('./features/student/student-demande/student-demande.component').then((m)=>m.StudentDemandeComponent)},

        {path:'mes-competences',loadComponent:()=>import ('./features/student/mes-competences/mes-competences.component').then((m)=>m.MesCompetencesComponent)},
        {path:'mes-competences-recommandees',loadComponent:()=>import ('./features/student/mes-competences-recommandees/mes-competences-recommandees.component').then((m)=>m.MesCompetencesRecommandeesComponent)},
        {path:'student-message',loadComponent:()=>import ('./features/student/student-message/student-message.component').then((m)=>m.StudentMessageComponent)},
        {path:'student-qa',loadComponent:()=>import ('./features/student/student-qa/student-qa.component').then((m)=>m.StudentQaComponent)},
        {path:'student-order-history',loadComponent:()=>import ('./features/student/student-order-history/student-order-history.component').then((m)=>m.StudentOrderHistoryComponent)},
        {path:'student-referral',loadComponent:()=>import ('./features/student/student-referral/student-referral.component').then((m)=>m.StudentReferralComponent)},
        {path:'student-reviews',loadComponent:()=>import ('./features/student/student-reviews/student-reviews.component').then((m)=>m.StudentReviewsComponent)},
        {path:'student-wishlist',loadComponent:()=>import ('./features/student/student-wishlist/student-wishlist.component').then((m)=>m.StudentWishlistComponent)},
         {path:'ecart-competences',loadComponent:()=>import ('./features/student/ecart-competences/ecart-competences.component').then((m)=>m.EcartCompetencesComponent)},
        {path:'settings',loadComponent:()=>import ('./features/student/settings/settings.component').then((m)=>m.SettingsComponent),
            children:[
                {path:'student-linked-accounts',loadComponent:()=>import ('./features/student/settings/student-linked-accounts/student-linked-accounts.component').then((m)=>m.StudentLinkedAccountsComponent)},
                {path:'student-change-password',loadComponent:()=>import ('./features/student/settings/student-change-password/student-change-password.component').then((m)=>m.StudentChangePasswordComponent)},
                {path:'student-settings',loadComponent:()=>import ('./features/student/settings/student-settings/student-settings.component').then((m)=>m.StudentSettingsComponent)},
                {path:'student-notifications',loadComponent:()=>import ('./features/student/settings/student-notifications/student-notifications.component').then((m)=>m.StudentNotificationsComponent)},
                {path:'student-billing-address',loadComponent:()=>import ('./features/student/settings/student-billing-address/student-billing-address.component').then((m)=>m.StudentBillingAddressComponent)},
                {path:'student-social-profile',loadComponent:()=>import ('./features/student/settings/student-social-profile/student-social-profile.component').then((m)=>m.StudentSocialProfileComponent)}
            ]
        },
    ]
},


    ]

},
{ path: 'verify-certificate', loadComponent: () => import('./features/verify-certificate/verify-certificate.component').then(m => m.VerifyCertificateComponent) },
{ path: 'sondage/:token',   loadComponent: () => import('./features/sondage-public/sondage-public.component').then(m => m.SondagePublicComponent) },
{ path: 'under-construction', loadComponent: () => import('./features/pages/under-construction/under-construction.component').then(m => m.UnderConstructionComponent) },
{ path: 'coming-soon', loadComponent: () => import('./features/pages/coming-soon/coming-soon.component').then(m => m.ComingSoonComponent) },

{ path: 'error-500', loadComponent: () => import('./error/error500/error500.component').then(m => m.Error500Component) },
{ path: 'error-404', loadComponent: () => import('./error/error404/error404.component').then(m => m.Error404Component) },
{
    path:'**',
    redirectTo:'error-404',
    pathMatch:'full'
}





]as const;
