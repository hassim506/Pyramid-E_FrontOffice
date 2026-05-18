import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../../../../shared/service/routes/routes';
import { CommonService } from '../../../../shared/service/common/common.service';

@Component({
  selector: 'app-student-sidebar',
  templateUrl: './student-sidebar.component.html',
  styleUrl: './student-sidebar.component.scss',
  imports: [CommonModule, RouterModule],
})
export class StudentSidebarComponent {
  public routes = routes;
  isCollapsed = false;

  constructor(private common: CommonService) {}
}
