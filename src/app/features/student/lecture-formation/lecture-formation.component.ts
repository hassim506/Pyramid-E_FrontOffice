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
  modules: any[] = [];
  selectedSection: any = null;
  hasContent = false;

  constructor(
    private route: ActivatedRoute,
    private formationsService: FormationsService
  ) {}

  ngOnInit(): void {
    this.formationId = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.formationId) {
      this.error = 'Formation introuvable';
      this.loading = false;
      return;
    }

    this.loadStructureDirectly();
  }

  /**
   * 🔥 Charger directement formation + modules depuis la structure
   * (Plus propre que double appel)
   */
  loadStructureDirectly(): void {

    this.loading = true;
    this.error = '';

    this.formationsService.getFormationStructure(this.formationId).subscribe({

      next: (res: any) => {

        console.log('🔥 STRUCTURE API COMPLETE =>', res);

        // 🔎 Adapter selon format backend
        this.formation =
          res?.formation ||
          res?.structure?.formation ||
          res?.data?.formation ||
          null;

        this.modules =
          res?.modules ||
          res?.structure?.modules ||
          res?.data?.modules ||
          [];

        if (!Array.isArray(this.modules)) {
          this.modules = [];
        }

        // 🔥 Vérifier contenu réel
        this.hasContent = false;

        for (let module of this.modules) {
          if (Array.isArray(module.sections) && module.sections.length > 0) {
            this.hasContent = true;
            this.selectedSection = module.sections[0];
            break;
          }
        }

        this.loading = false;
      },

      error: (err) => {
        console.error('❌ ERREUR API STRUCTURE', err);
        this.error = 'Impossible de charger le contenu de la formation';
        this.loading = false;
      }

    });
  }

  selectSection(section: any): void {
    this.selectedSection = section;
  }
}
