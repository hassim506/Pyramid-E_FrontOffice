import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { routes } from '../../../../shared/service/routes/routes';
import { CommonService } from '../../../../shared/service/common/common.service';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../../shared/service/authentification/auth.service';

@Component({
  selector: 'app-student-sidebar',
  templateUrl: './student-sidebar.component.html',
  styleUrl: './student-sidebar.component.scss',
  imports: [CommonModule, RouterModule],
})
export class StudentSidebarComponent implements OnInit, OnDestroy {
  public routes = routes;
  public currentUrl = '';
  public base: any; public page: any; public last: any;

  isCollapsed = false;

  openGroups: Record<string, boolean> = {
    formations:  false,
    demandes:    false,
    competences: false,
    palmares:    false,
    aide:        false,
  };

  toggleGroup(key: string): void {
    this.openGroups[key] = !this.openGroups[key];
  }

  private navSub?: Subscription;

  constructor(private common: CommonService, private router: Router, private authService: AuthService) {
    this.common.base.subscribe((b: string) => (this.base = b));
    this.common.page.subscribe((p: string) => (this.page = p));
    this.common.last.subscribe((l: string) => (this.last = l));

    this.navSub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.currentUrl = e.urlAfterRedirects || e.url;
        this.autoOpenGroups();
      });
  }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.autoOpenGroups();
  }

  ngOnDestroy(): void { this.navSub?.unsubscribe(); }

  private autoOpenGroups(): void {
    if (this.isFormationsActive())  this.openGroups['formations']  = true;
    if (this.isDemandesActive())    this.openGroups['demandes']    = true;
    if (this.isCompetencesActive()) this.openGroups['competences'] = true;
    if (this.isPalmaresActive())    this.openGroups['palmares']    = true;
  }

  isDashboardActive(): boolean {
    return this.currentUrl === '/student/student-dashboard';
  }

  isFormationsActive(): boolean {
    return [routes.studentMyCourses, routes.student_CataloguesAssignes,
            routes.student_ParcoursAssignes, routes.student_SessionsAcceptees]
      .some(r => r && this.currentUrl.startsWith(r));
  }

  isDemandesActive(): boolean {
    return [routes.studentDemande, routes.student_DemandeSession,
            routes.student_DemandeParcours, routes.student_DemandeCatalogue]
      .some(r => r && this.currentUrl.startsWith(r));
  }

  isCompetencesActive(): boolean {
    return [routes.student_MesCompetences, routes.student_CompetencesRecommandees,
            routes.student_EcartCompetences]
      .some(r => r && this.currentUrl.startsWith(r));
  }

  isPalmaresActive(): boolean {
    return [routes.studentCertificat]
      .some(r => r && this.currentUrl.startsWith(r));
  }

  isExactActive(path: string): boolean {
    return !!path && this.currentUrl.startsWith(path);
  }

  isInLearnerMode(): boolean {
    const user = this.authService.getUser();
    if (!user) return false;
    const roleType = user.role_type ?? (user as any)['role_type'] ?? '';
    const roleId   = user.role_id ?? 0;
    // Tout profil non-employé peut être en mode apprenant
    if (roleId === 2 || roleType === 'employe') return false;
    return true;
  }

  getAdminReturnRoute(): string {
    const user = this.authService.getUser();
    if (!user) return this.routes.adminrh_dashboard;
    const roleType = user.role_type ?? (user as any)['role_type'] ?? '';
    const roleId   = user.role_id ?? 0;
    if (roleId === 3 || roleType === 'formateur') return this.routes.instructor_dashboard;
    if (roleId === 1 || roleType === 'admin')     return this.routes.superadmin_dashboard ?? this.routes.adminrh_dashboard;
    return this.routes.adminrh_dashboard;
  }

  /** @deprecated use isInLearnerMode() */
  isRhInLearnerMode(): boolean { return this.isInLearnerMode(); }
}
