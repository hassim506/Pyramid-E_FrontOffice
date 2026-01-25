import { Component } from '@angular/core';
import { CommonService } from '../../../../shared/service/common/common.service';
import { routes } from '../../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-adminrh-sidebar',
    templateUrl: './adminrh-sidebar.component.html',
    styleUrl: './adminrh-sidebar.component.scss',
    imports:[CommonModule,RouterLink,RouterLinkActive]
})
export class AdminrhSidebarComponent {
  public routes = routes;
  public base = '';
  public page = '';
  public last = '';
  currentUser: any;
isHoldingAdmin(): boolean {
  // Adaptez selon la structure de votre user/role
  return this.currentUser?.role_id === 4 
    || this.currentUser?.role === 'Superadmin RH Holding';
}
  constructor(private common: CommonService) {
    this.common.base.subscribe((base: string) => {
      this.base = base;
    });
    this.common.page.subscribe((page: string) => {
      this.page = page;
    });
    this.common.last.subscribe((last: string) => {
      this.last = last;
    });
  }
}
