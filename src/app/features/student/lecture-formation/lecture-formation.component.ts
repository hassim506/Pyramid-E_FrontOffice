import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormationsService } from '../../../shared/service/Formationsss/formations.service';

@Component({
  standalone: true,
  selector: 'app-lecture-formation',
  imports: [CommonModule],
  templateUrl: './lecture-formation.component.html',
  styleUrls: ['./lecture-formation.component.scss']
})
export class LectureFormationComponent implements OnInit {

  formationId!: number;
  loading = true;
  error = '';

  formation: any = null;
  modules: any[] = [];          // 🔒 toujours tableau
  selectedSection: any = null;
  hasContent = false;          // pour afficher message "pas de contenu" si nécessaire

  constructor(
    private route: ActivatedRoute,
    private formationsService: FormationsService
  ) {}

  ngOnInit(): void {
    this.formationId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadStructure();
  }

  loadStructure(): void {
    this.loading = true;
    this.error = '';

    this.formationsService.getFormationStructure(this.formationId).subscribe({
      next: (res: any) => {
        console.log('STRUCTURE API =>', res);

        // 🔒 sécurisation backend
        this.formation = res?.structure?.formation ?? null;
        this.modules   = res?.structure?.modules ?? [];

        // sécurité ultime
        if (!Array.isArray(this.modules)) {
          this.modules = [];
        }

        // vérifier s'il y a du contenu (au moins une section avec du contenu)
        this.hasContent = this.modules.length > 0;

        // sélectionner première section automatiquement
        if (
          this.hasContent &&
          Array.isArray(this.modules[0].sections) &&
          this.modules[0].sections.length > 0
        ) {
          this.selectedSection = this.modules[0].sections[0];
        } 

        this.loading = false;
      },

      error: (err) => {
        console.error(err);
        this.error = 'Impossible de charger la formation';
        this.loading = false;
      }
    });
  }

  selectSection(section: any): void {
    this.selectedSection = section;
  }

}
