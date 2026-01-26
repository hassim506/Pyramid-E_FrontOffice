// src/app/features/courses/course-details-2/course-details-2.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from '../../../shared/models/formation.models';

import { FormationApiResponse } from '../../../shared/models/Formations.models';
import { CommonModule } from '@angular/common';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';

@Component({
  standalone: true,
  selector: 'app-course-details-2',
  imports: [CommonModule],
  templateUrl: './course-details-2.component.html',
  styleUrls: ['./course-details-2.component.scss']
})
export class CourseDetails2Component implements OnInit {

  formation!: Formation;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private formationsService: FormationsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getFormation(id);
    }
  }

  getFormation(id: number) {
    this.loading = true;
    this.formationsService.getFormationById(id).subscribe({
      next: (res: FormationApiResponse) => {
        this.formation = res as unknown as Formation;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur chargement formation', err);
        this.loading = false;
      }
    });
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
}
