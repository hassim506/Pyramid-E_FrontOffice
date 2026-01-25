import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ OBLIGATOIRE
import { Formations } from '../../../shared/models/Formations.models';
import { FormationsService } from '../../../shared/service/Formations/formations.service';

@Component({
  selector: 'app-student-courses',
  standalone: true, // ✅ important
  imports: [CommonModule], // ✅ FIX DU PROBLÈME
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.scss'],
})
export class StudentCoursesComponent implements OnInit {
  tableData: Formations[] = [];
  loading = true;

  currentPage = 1;
  totalPages = 1;

  constructor(
    private formationsService: FormationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(page: number = 1): void {
    this.loading = true;

    this.formationsService.getAllFormations().subscribe({
      next: (res: any) => {
        console.log('API formations response:', res); // 🔍 debug utile

        this.tableData = res.data ?? res.formations ?? [];
        this.currentPage = res.current_page ?? 1;
        this.totalPages = res.last_page ?? 1;

        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur chargement formations', err);
        this.loading = false;
      },
    });
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.loadCourses(page);
    }
  }

  goToDetails(id: number): void {
    this.router.navigate(['/courses/course-details'], {
      queryParams: { id },
    });
  }
}
    