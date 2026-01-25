// src/app/features/student/student-courses/student-courses.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formations } from '../../../shared/models/Formations.models';
import { FormationsService } from '../../../shared/service/Formations/Formations.service';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.scss'],
})
export class StudentCoursesComponent implements OnInit {
  tableData: Formations[] = [];
  loading = true;

  constructor(
    private FormationsService: FormationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.loading = true;

    this.FormationsService.getAllFormations().subscribe({
      next: (response: any) => {
        this.tableData = response.formations;
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Erreur chargement formations', error);
        this.loading = false;
      },
    });
  }

  goToDetails(id: number): void {
    this.router.navigate(['/courses/course-details'], {
      queryParams: { id },
    });
  }
}
