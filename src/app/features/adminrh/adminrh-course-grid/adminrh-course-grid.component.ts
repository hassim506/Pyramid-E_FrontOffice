import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-adminrh-course-grid',
  imports:[CommonModule,RouterLink],
  templateUrl: './adminrh-course-grid.component.html',
  styleUrl: './adminrh-course-grid.component.scss'
})
export class AdminrhCourseGridComponent {
routes=routes
}
