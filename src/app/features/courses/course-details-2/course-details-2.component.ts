// src/app/features/courses/course-details-2/course-details-2.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Formation } from '../../../shared/models/formation.models';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';

@Component({
  standalone: true,
  selector: 'app-course-details-2',
  imports: [CommonModule],
  templateUrl: './course-details-2.component.html',
  styleUrls: ['./course-details-2.component.scss']
})
export class CourseDetails2Component implements OnInit {

  formation: Formation | null = null;
  loading: boolean = true;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formationsService: FormationsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const formationId = +params['id'];
      if (formationId) {
        this.loadFormationDetails(formationId);
      }
    });
  }

  loadFormationDetails(id: number): void {
    this.loading = true;
    this.error = '';

    this.formationsService.getFormationById(id).subscribe({
      next: (response: any) => {
        // accepte plusieurs structures comme dans ClientDetails
        this.formation = response.data || response.formation || response;
        this.loading = false;
      },
      error: () => {
        this.error = 'Formation introuvable';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/formations']);
  }

  get totalLessons(): number {
    if (!this.formation?.modules) return 0;
    return this.formation.modules.reduce(
      (total, module) => total + (module.sections?.length || 0),
      0
    );
  }

  get totalDuration(): number {
    return this.formation?.duree_totale || 0;
  }

  canSubscribe(): boolean {
    return !!this.formation?.inscription_ouverte;
  }
}
