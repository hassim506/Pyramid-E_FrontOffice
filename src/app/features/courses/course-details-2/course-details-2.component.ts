import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute }            from '@angular/router';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { Formation }                 from '../../../shared/models/formation.models';
import { FormationsService }         from '../../../shared/service/Formationsss/formations.service';

@Component({
  standalone: true,
  selector: 'app-course-details-2',
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './course-details-2.component.html',
  styleUrls: ['./course-details-2.component.scss']
})
export class CourseDetails2Component implements OnInit {

  formation: Formation | null = null;
  loading = true;
  error   = '';

  constructor(
    private route: ActivatedRoute,
    private formationsService: FormationsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) this.loadFormationDetails(id);
  }

  loadFormationDetails(id: number): void {
    this.loading = true;
    this.formationsService.getFormationById(id).subscribe({
      next: (res: any) => {
        this.formation = res?.data || res?.formation || res;
        this.loading   = false;
      },
      error: () => {
        this.error   = 'Formation introuvable';
        this.loading = false;
      }
    });
  }

  canSubscribe(): boolean {
    return !!this.formation?.inscription_ouverte;
  }
}