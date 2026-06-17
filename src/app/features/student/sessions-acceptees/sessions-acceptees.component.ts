import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormationService } from '../../../shared/service/formation/formation.service';
declare const bootstrap: any;

interface SessionAcceptee {
  id: number;
  titre: string;
  description?: string;
  date_debut?: string;
  date_fin?: string;
  type: string;
  type_display?: string;
  lieu?: string;
  capacite_max?: number;
  nombre_inscrits?: number;
  places_restantes?: number;
  statut_session?: string;
  instructions_acces?: string;
  date_limite_inscription?: string;
  certificat_delivre?: boolean;
  image_couverture?: string;
  formation_id?: number;
  formation_titre?: string;
  statut_inscription?: string;
  statut_participation?: string;
  progression?: number;
  certificat_obtenu?: boolean;
  est_termine: boolean;
  est_a_venir: boolean;
  duree_jours?: number;
  source?: string;
  badge_label?: string;
  date_assignation?: string;
  demande_id?: number;
  notes?: string;
}

@Component({
  selector: 'app-sessions-acceptees',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe, DecimalPipe],
  templateUrl: './sessions-acceptees.component.html',
  styleUrl: './sessions-acceptees.component.scss',
})
export class SessionsAccepteesComponent implements OnInit {

  // ─── Data ───────────────────────────────────────────────
  allSessions:      SessionAcceptee[] = [];
  filteredSessions: SessionAcceptee[] = [];
  displayedSessions: SessionAcceptee[] = [];

  // ─── State ──────────────────────────────────────────────
  loading = false;
  error: string | null = null;

  // ─── Filtres ────────────────────────────────────────────
  searchTerm    = '';
  selectedFiltre = 'toutes';

  filtres = [
    { label: 'Toutes',      value: 'toutes',    icon: 'isax-calendar-1'  },
    { label: 'À venir',     value: 'a_venir',   icon: 'isax-clock'       },
    { label: 'En cours',    value: 'en_cours',  icon: 'isax-play-circle' },
    { label: 'Terminées',   value: 'terminees', icon: 'isax-medal-star'  },
    { label: 'Certifiantes',value: 'certif',    icon: 'isax-award'       },
  ];

  // ─── Pagination ─────────────────────────────────────────
  currentPage = 1;
  pageSize    = 9;
  totalItems  = 0;
  totalPages  = 1;

  // ─── Modal ──────────────────────────────────────────────
  sessionSelectionnee: SessionAcceptee | null = null;
  private modalInstance: any = null;

  constructor(
    private formationsService: FormationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadSessions();
  }

  // ════════════════════════════════════════════════════════
  // CHARGEMENT
  // ════════════════════════════════════════════════════════
  loadSessions(): void {
    this.loading = true;
    this.error   = null;

    this.formationsService.getMesSessionsAcceptees().subscribe({
      next: (res) => {
        this.allSessions = res.sessions ?? [];
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur sessions:', err);
        this.error   = 'Impossible de charger vos sessions. Veuillez réessayer.';
        this.loading = false;
      }
    });
  }

  // ════════════════════════════════════════════════════════
  // FILTRES & RECHERCHE
  // ════════════════════════════════════════════════════════
  onFiltreChange(value: string): void {
    this.selectedFiltre = value;
    this.currentPage    = 1;
    this.applyFilters();
  }

  onSearchChange(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  applyFilters(): void {
    let result = [...this.allSessions];

    // Filtre type
    switch (this.selectedFiltre) {
      case 'a_venir':   result = result.filter(s =>  s.est_a_venir && !s.est_termine); break;
      case 'terminees': result = result.filter(s =>  s.est_termine);                   break;
      case 'en_cours':  result = result.filter(s => !s.est_termine && !s.est_a_venir); break;
      case 'certif':    result = result.filter(s =>  s.certificat_delivre);            break;
    }

    // Recherche
    if (this.searchTerm.trim()) {
      const q = this.searchTerm.toLowerCase();
      result = result.filter(s =>
        s.titre?.toLowerCase().includes(q) ||
        s.formation_titre?.toLowerCase().includes(q) ||
        s.lieu?.toLowerCase().includes(q)
      );
    }

    this.filteredSessions = result;
    this.totalItems       = result.length;
    this.totalPages       = Math.max(1, Math.ceil(result.length / this.pageSize));
    if (this.currentPage > this.totalPages) this.currentPage = 1;
    this.updatePage();
  }

  clearFilters(): void {
    this.searchTerm     = '';
    this.selectedFiltre = 'toutes';
    this.currentPage    = 1;
    this.applyFilters();
  }

  get hasActiveFilters(): boolean {
    return this.searchTerm.trim() !== '' || this.selectedFiltre !== 'toutes';
  }

  // ════════════════════════════════════════════════════════
  // KPI GETTERS
  // ════════════════════════════════════════════════════════
  get totalSessions():    number { return this.allSessions.length; }
  get totalAVenir():      number { return this.allSessions.filter(s =>  s.est_a_venir && !s.est_termine).length; }
  get totalEnCours():     number { return this.allSessions.filter(s => !s.est_termine && !s.est_a_venir).length; }
  get totalTerminees():   number { return this.allSessions.filter(s =>  s.est_termine).length; }
  get totalCertifiantes():number { return this.allSessions.filter(s =>  s.certificat_delivre).length; }
  get totalCertifiees():  number { return this.allSessions.filter(s =>  s.certificat_obtenu).length; }

  // ════════════════════════════════════════════════════════
  // PAGINATION
  // ════════════════════════════════════════════════════════
  updatePage(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    this.displayedSessions = this.filteredSessions.slice(start, start + this.pageSize);
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePage();
  }

  get pages(): number[] {
    const delta  = 2;
    const range: number[] = [];
    for (
      let i = Math.max(1, this.currentPage - delta);
      i <= Math.min(this.totalPages, this.currentPage + delta);
      i++
    ) range.push(i);
    return range;
  }

  // ════════════════════════════════════════════════════════
  // MODAL DÉTAIL
  // ════════════════════════════════════════════════════════
  ouvrirDetail(session: SessionAcceptee): void {
    this.sessionSelectionnee = session;
    setTimeout(() => {
      const el = document.getElementById('sessionDetailModal');
      if (el) {
        this.modalInstance = new bootstrap.Modal(el);
        this.modalInstance.show();
      }
    }, 50);
  }

  fermerDetail(): void {
    this.modalInstance?.hide();
    this.sessionSelectionnee = null;
  }

  /** Bouton "Voir la page complète" — route à créer plus tard */
  goToDetail(sessionId: number): void {
    this.fermerDetail();
    this.router.navigate(['/student/sessions', sessionId]);
  }

  // ════════════════════════════════════════════════════════
  // HELPERS UI
  // ════════════════════════════════════════════════════════
  getTypeColor(type: string): string {
    switch (type) {
      case 'presentiel': return '#0369a1';
      case 'distanciel': return '#7c3aed';
      case 'hybride':    return '#0d9488';
      default:           return '#069b8f';
    }
  }

  getTypeGradient(type: string): string {
    return 'linear-gradient(135deg, #069b8f, #0ab09f)';
  }

  getTypeIcon(type: string): string {
    switch (type) {
      case 'presentiel': return 'isax isax-buildings-2';
      case 'distanciel': return 'isax isax-monitor';
      case 'hybride':    return 'isax isax-element-3';
      default:           return 'isax isax-calendar-1';
    }
  }

  getTypeLabel(type: string): string {
    switch (type) {
      case 'presentiel': return 'Présentiel';
      case 'distanciel': return 'Distanciel';
      case 'hybride':    return 'Hybride';
      default:           return type ?? 'Session';
    }
  }

  getStatutInscriptionLabel(statut: string): string {
    switch (statut) {
      case 'inscrit':  return 'Inscrit';
      case 'confirme': return 'Confirmé';
      case 'annule':   return 'Annulé';
      default:         return statut;
    }
  }

  getStatutParticipationLabel(statut: string): string {
    switch (statut) {
      case 'non_commence': return 'Non commencé';
      case 'en_cours':     return 'En cours';
      case 'termine':      return 'Terminé';
      case 'absent':       return 'Absent';
      default:             return statut;
    }
  }

  /** Vérifie si une chaîne est une URL directe */
  isUrl(value: string | null | undefined): boolean {
    if (!value) return false;
    return /^https?:\/\//i.test(value.trim());
  }

  /** Extrait la première URL dans un texte mixte */
  extractUrl(value: string | null | undefined): string | null {
    if (!value) return null;
    const match = value.match(/https?:\/\/[^\s]+/i);
    return match ? match[0] : null;
  }
}