import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../../../../shared/service/routes/routes';
import { CommonService } from '../../../../shared/service/common/common.service';
import { AuthService } from '../../../../shared/service/authentification/auth.service';

@Component({
  selector: 'app-student-sidebar',
  templateUrl: './student-sidebar.component.html',
  styleUrl: './student-sidebar.component.scss',
  imports: [CommonModule, RouterModule],
})
export class StudentSidebarComponent {
  public routes = routes;
  isCollapsed = false;

  constructor(private common: CommonService, private authService: AuthService) {}

  isRhInLearnerMode(): boolean {
    const user = this.authService.getUser();
    if (!user) return false;
    const roleType = user.role_type ?? (user as any)['role_type'] ?? '';
    const roleId   = user.role_id ?? 0;
    // RH système (role_id 4, 5, 9, 14) ou rôle dynamique de type 'rh'
    return [4, 5, 9, 14].includes(roleId) || roleType === 'rh';
  }
}
