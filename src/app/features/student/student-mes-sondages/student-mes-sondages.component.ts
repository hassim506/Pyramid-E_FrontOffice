import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SondageService, Sondage } from '../../../shared/service/sondage/sondage.service';
import { routes } from '../../../shared/service/routes/routes';

@Component({
  selector: 'app-student-mes-sondages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-mes-sondages.component.html',
  styleUrl: './student-mes-sondages.component.scss',
})
export class StudentMesSondagesComponent implements OnInit {

  public routes = routes;
  sondages: Sondage[] = [];
  loading = true;
  error = '';

  constructor(private sondageService: SondageService, private router: Router) {}

  ngOnInit(): void {
    this.sondageService.getMesSondages().subscribe({
      next: (res) => { this.sondages = res.sondages ?? []; this.loading = false; },
      error: () => { this.error = 'Impossible de charger les sondages.'; this.loading = false; },
    });
  }

  openSondage(s: Sondage): void {
    this.router.navigate(['/student/student-sondage', s.id]);
  }

  getDeclenchementLabel(d: string | undefined): string {
    if (d === 'a_chaud') return 'À chaud';
    if (d === 'a_froid') return 'À froid';
    return 'Manuel';
  }

  getDeclenchementClass(d: string | undefined): string {
    if (d === 'a_chaud') return 'badge-chaud';
    if (d === 'a_froid') return 'badge-froid';
    return 'badge-manuel';
  }
}
