import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-superadmin-course-grid',
  imports:[CommonModule,RouterLink],
  templateUrl: './superadmin-course-grid.component.html',
  styleUrl: './superadmin-course-grid.component.scss'
})
export class SuperadminCourseGridComponent {
routes=routes
}
