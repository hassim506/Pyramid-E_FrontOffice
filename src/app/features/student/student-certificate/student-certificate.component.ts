import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RouterModule }      from '@angular/router';
import { FormsModule }       from '@angular/forms';
import { DemandeFormationService }   from '../../../shared/service/demande/demande-formation.service';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';

@Component({
  standalone: true,
  selector: 'app-student-certificate',
  templateUrl: './student-certificate.component.html',
  styleUrl: './student-certificate.component.scss',
  imports: [CommonModule, RouterModule, FormsModule, CustomPaginationComponent]
})
export class StudentCertificateComponent implements OnInit {

  loading = true;

  // ================================
  // DONNÉES
  // ================================
  allDemandes: any[] = [];
  demandes:    any[] = [];

  // ================================
  // FILTRES
  // ================================
  searchDataValue = '';
  selectedStatus  = '';

  // ================================
  // PAGINATION
  // ================================
  totalData   = 0;
  pageSize    = 10;
  currentPage = 1;
  skip        = 0;
  limit       = 10;

  // ================================
  // UI STATE
  // ================================
  motifOuvertId: number | null = null;

  constructor(private demandeFormationService: DemandeFormationService) {}

  ngOnInit(): void {
    this.loadDemandes();
  }

  // ================================
  // GETTERS STATS — remplace le pipe statCount
  // ================================
  get totalEnAttente(): number {
    return this.allDemandes.filter(d => d.statut === 'en_attente').length;
  }

  get totalValidees(): number {
    return this.allDemandes.filter(d => d.statut === 'validee').length;
  }

  get totalRefusees(): number {
    return this.allDemandes.filter(d => d.statut === 'refusee').length;
  }

  // ================================
  // CHARGEMENT API
  // ================================
  loadDemandes(): void {
    this.loading       = true;
    this.motifOuvertId = null;

    this.demandeFormationService.getMesDemandes().subscribe({
      next: (res: any) => {
        const raw        = res.demandes ?? res;
        this.allDemandes = raw.map((d: any) => this.normaliserDemande(d));
        this.totalData   = this.allDemandes.length;
        this.getTableData(this.skip, this.limit);
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  // ================================
  // NORMALISATION — gère tous les types
  // ================================
  private normaliserDemande(d: any): any {
    return {
      ...d,
      titre_affiche:      this.getTitreAffiche(d),
      sous_titre_affiche: this.getSousTitreAffiche(d),
      image_affiche:      this.getImageAffiche(d),
      icone_type:         this.getIconeType(d.type_demande),
      label_type:         this.getLabelType(d.type_demande),
      formation: d.formation ? {
        ...d.formation,
        categorie:  d.formation.categorie  ?? null,
        niveau:     d.formation.niveau     ?? '—',
        langue:     d.formation.langue     ?? 'FR',
        difficulte: d.formation.difficulte ?? '—',
      } : null,
    };
  }

  private getTitreAffiche(d: any): string {
    switch (d.type_demande) {
      case 'catalogue': return d.catalogue?.titre         ?? `Catalogue #${d.catalogue_id}`;
      case 'parcours':  return d.parcours?.titre          ?? `Parcours #${d.parcours_id}`;
      case 'session':   return d.session_formation?.titre ?? `Session #${d.session_formation_id}`;
      default:          return d.formation?.titre         ?? `Formation #${d.formation_id}`;
    }
  }

  private getSousTitreAffiche(d: any): string {
    switch (d.type_demande) {
      case 'catalogue': {
        const nb   = d.catalogue?.nombre_formations ?? '?';
        const type = d.catalogue?.type_display ?? '';
        return `${nb} formation(s)${type ? ' · ' + type : ''}`;
      }
      case 'parcours':
        return d.parcours?.description ?? '';
      case 'session': {
        const date = d.session_formation?.date_debut;
        return date ? `Début : ${new Date(date).toLocaleDateString('fr-FR')}` : '';
      }
      default:
        return d.formation?.formateur_nom ?? d.formation?.categorie?.nom ?? '';
    }
  }

  private getImageAffiche(d: any): string {
    const fallback = 'assets/img/course/course-01.jpg';
    switch (d.type_demande) {
      case 'catalogue': return d.catalogue?.image_couverture         || fallback;
      case 'parcours':  return d.parcours?.image_couverture          || fallback;
      case 'session':   return d.session_formation?.image_couverture || fallback;
      default:          return d.formation?.image_couverture         || fallback;
    }
  }

  private getIconeType(type: string): string {
    const icons: Record<string, string> = {
      catalogue: 'isax isax-book-1',
      parcours:  'isax isax-routing',
      session:   'isax isax-calendar-1',
      formation: 'isax isax-teacher',
    };
    return icons[type] ?? 'isax isax-book';
  }

  private getLabelType(type: string): string {
    const labels: Record<string, string> = {
      catalogue: 'Catalogue',
      parcours:  'Parcours',
      session:   'Session',
      formation: 'Formation',
    };
    return labels[type] ?? 'Formation';
  }

  // ================================
  // FILTRE + RECHERCHE + PAGINATION
  // ================================
  getTableData(skip: number, limit: number): void {
    let filtered = [...this.allDemandes];

    if (this.selectedStatus) {
      filtered = filtered.filter(d => d.statut === this.selectedStatus);
    }

    if (this.searchDataValue) {
      const s = this.searchDataValue.toLowerCase();
      filtered = filtered.filter(d =>
        d.titre_affiche?.toLowerCase().includes(s)            ||
        d.sous_titre_affiche?.toLowerCase().includes(s)       ||
        d.formation?.titre?.toLowerCase().includes(s)         ||
        d.catalogue?.titre?.toLowerCase().includes(s)         ||
        d.parcours?.titre?.toLowerCase().includes(s)          ||
        d.session_formation?.titre?.toLowerCase().includes(s)
      );
    }

    this.totalData = filtered.length;
    this.demandes  = filtered.slice(skip, skip + limit);
  }

  searchData(value: string): void {
    this.searchDataValue = value;
    this.currentPage     = 1;
    this.skip            = 0;
    this.getTableData(this.skip, this.limit);
  }

  filterByStatus(status: string): void {
    this.selectedStatus = status;
    this.currentPage    = 1;
    this.skip           = 0;
    this.getTableData(this.skip, this.limit);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.skip        = (page - 1) * this.pageSize;
    this.getTableData(this.skip, this.pageSize);
  }

  // ================================
  // MOTIF REFUS TOGGLE
  // ================================
  toggleMotif(id: number, event: Event): void {
    event.stopPropagation();
    this.motifOuvertId = this.motifOuvertId === id ? null : id;
  }

  isMotifOuvert(id: number): boolean {
    return this.motifOuvertId === id;
  }

  // ================================
  // ACTIONS
  // ================================
  annulerDemande(id: number): void {
    this.demandeFormationService.annulerDemande(id).subscribe({
      next: () => this.loadDemandes()
    });
  }

  // ================================
  // HELPERS CSS
  // ================================
  getPrioriteClass(priorite: string): string {
    const map: Record<string, string> = {
      urgente: 'priorite-urgente',
      haute:   'priorite-haute',
      normale: 'priorite-normale',
      basse:   'priorite-basse',
    };
    return map[priorite] ?? 'priorite-normale';
  }

  getTypeBadgeClass(type: string): string {
    const map: Record<string, string> = {
      catalogue: 'type-catalogue',
      parcours:  'type-parcours',
      session:   'type-session',
      formation: 'type-formation',
    };
    return map[type] ?? 'type-formation';
  }
}