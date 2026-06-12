import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { routes } from '../../../../shared/service/routes/routes';
import { CommonService } from '../../../../shared/service/common/common.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-student-sidebar',
  templateUrl: './student-sidebar.component.html',
  styleUrl: './student-sidebar.component.scss',
  imports: [CommonModule, RouterModule],
})
export class StudentSidebarComponent implements OnInit {
  public routes = routes;
  isCollapsed = false;
  public currentUrl = '';
  base: any;
  page: any;
  last: any;

  constructor(
    private common: CommonService,
    private router: Router
  ) {
    this.common.base.subscribe((base: string) => (this.base = base));
    this.common.page.subscribe((page: string) => (this.page = page));
    this.common.last.subscribe((last: string) => (this.last = last));

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentUrl = event.urlAfterRedirects || event.url;
      });
  }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
  }

  // ── Tableau de bord : toujours actif (inchangé) ─────────────────────────────
  isDashboardActive(): boolean {
    return true;
  }

  // ── Parent actif si une de ses routes enfants est active ────────────────────
  isFormationsActive(): boolean {
    return [
      routes.studentMyCourses,
      routes.student_CataloguesAssignes,
      routes.student_ParcoursAssignes,
      routes.student_SessionsAcceptees,
    ].some(r => r && this.currentUrl.startsWith(r));
  }

  isDemandesActive(): boolean {
    return [
      routes.studentDemande,
      routes.student_DemandeSession,
      routes.student_DemandeParcours,
      routes.student_DemandeCatalogue,
    ].some(r => r && this.currentUrl.startsWith(r));
  }
  isPalmaresActive(): boolean {
  return [
    routes.studentCertificat,
  ].some(r => r && this.currentUrl.startsWith(r));
}

  isCompetencesActive(): boolean {
    return [
      routes.student_MesCompetences,
      routes.student_CompetencesRecommandees,
      routes.student_EcartCompetences,
    ].some(r => r && this.currentUrl.startsWith(r));
  }

  // ── Un seul sous-lien actif à la fois ───────────────────────────────────────
  isExactActive(path: string): boolean {
    return !!path && this.currentUrl.startsWith(path);
  }
}
