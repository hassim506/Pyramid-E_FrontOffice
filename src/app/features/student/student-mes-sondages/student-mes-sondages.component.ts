import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SondageService, Sondage } from '../../../shared/service/sondage/sondage.service';

@Component({
  selector: 'app-student-mes-sondages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-mes-sondages.component.html',
  styleUrl: './student-mes-sondages.component.scss',
})
export class StudentMesSondagesComponent implements OnInit {

  sondages: Sondage[] = [];
  sondagesRepondus: Sondage[] = [];
  loading = true;
  error = '';
  showHistorique = false;

  constructor(private sondageService: SondageService, private router: Router) {}

  ngOnInit(): void {
    this.sondageService.getMesSondages().subscribe({
      next: (res: any) => {
        const all: Sondage[] = res.sondages ?? [];
        this.sondages = all.filter((s: any) => !s.deja_repondu);
        this.sondagesRepondus = all.filter((s: any) => s.deja_repondu);
        this.loading = false;
      },
      error: () => { this.error = 'Impossible de charger les sondages.'; this.loading = false; },
    });
  }

  get aCompleter(): number { return this.sondages.length; }
  get repondus(): number { return this.sondagesRepondus.length; }
  get clotures(): number { return 0; }

  openSondage(s: Sondage): void {
    this.router.navigate(['/student/student-sondage', s.id]);
  }

  typeLabel(type: string): string { return this.sondageService.getTypeLabel(type); }
  typeColor(type: string): string { return this.sondageService.getTypeColor(type); }
}
