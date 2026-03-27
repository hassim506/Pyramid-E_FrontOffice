import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router'; // ✅ ajouté
import { routes } from '../../../../shared/service/routes/routes';
import { CommonService } from '../../../../shared/service/common/common.service';
import { filter } from 'rxjs/operators'; // ✅ ajouté

@Component({
    selector: 'app-student-sidebar',
    templateUrl: './student-sidebar.component.html',
    styleUrl: './student-sidebar.component.scss',
    imports: [CommonModule, RouterModule],
})
export class StudentSidebarComponent {
  public routes = routes;
  public base = '';
  public page = '';
  public last = '';
  isCollapsed = false;

  // ✅ ajouté
  public currentUrl = '';

  constructor(
    private common: CommonService,
    private router: Router // ✅ ajouté
  ) {
    this.common.base.subscribe((base: string) => {
      this.base = base;
    });
    this.common.page.subscribe((page: string) => {
      this.page = page;
    });
    this.common.last.subscribe((last: string) => {
      this.last = last;
    });

    // ✅ ajouté (écoute changement de route)
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentUrl = event.url;
      });
  }

  // ✅ ajouté (Dashboard toujours actif)
  isDashboardActive(): boolean {
    return true;
  }
}