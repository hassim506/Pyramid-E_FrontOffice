import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSortModule, Sort } from '@angular/material/sort';
import { RouterLink } from '@angular/router';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';
import { SessionFormationService, SessionFormation } from '../../../shared/service/session/session-formation.service';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { UserService } from '../../../shared/service/user/user.service';


@Component({
  selector: 'app-adminrh-session',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatSortModule, RouterLink, CustomPaginationComponent],
  templateUrl: './adminrh-session.component.html',
  styleUrls: ['./adminrh-session.component.scss']
})
export class AdminrhSessionComponent implements OnInit {
  // Variables de pagination
  public pageSize = 10;
  public tableData: SessionFormation[] = [];
  public tableDataCopy: SessionFormation[] = [];
  public actualData: SessionFormation[] = [];
  public currentPage = 1;
  public skip = 0;
  public totalData = 0;
    public pageSelection: any[] = []; 

  public searchDataValue = '';

  // Variables de filtrage
  public selectedStatut = '';
  public selectedType = '';

  // Variables d'état
  loading = false;
  error = '';
  successMessage = '';
  selectedSession: SessionFormation | null = null;
  isEditMode = false;
  isSubmitting = false;

  // Form et données pour le modal
  sessionForm!: FormGroup; // Changed from FormGroup | undefined to FormGroup with definite assignment assertion
  formations: any[] = [];
  formateurs: any[] = [];

  constructor(
    private sessionFormationService: SessionFormationService,
    private formationService: FormationService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.initForm();
  }

  initForm() {
    this.sessionForm = this.fb.group({
      titre: ['', Validators.required],
      formation_id: ['', Validators.required],
      formateur_id: ['', Validators.required],
      type: ['', Validators.required],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      lieu: ['', Validators.required],
      capacite_max: ['', [Validators.required, Validators.min(1)]],
      description: [''],
      instructions_acces: ['']
    });
  }
  ngOnInit() {
    this.loadSessions();
    this.loadFormations();
    this.loadFormateurs();
  }


  // Mise à jour de la méthode calculateTotalPages
  calculateTotalPages(totalData: number, pageSize: number): void {
    const totalPages = Math.ceil(totalData / pageSize);
    this.pageSelection = [];
    for (let i = 1; i <= totalPages; i++) {
      this.pageSelection.push({
        skip: (i - 1) * pageSize,
        limit: pageSize
      });
    }
  }
  
  loadSessions() {
    this.loading = true;
    this.error = '';
    
    this.sessionFormationService.getAllSessionsRH().subscribe({
      next: (response) => {
        console.log('Response sessions:', response);
        this.actualData = response.sessions || [];
        this.tableDataCopy = [...this.actualData];
        this.totalData = this.actualData.length;
        this.calculateTotalPages(this.totalData, this.pageSize); // Ajout de cette ligne
        this.getTableData();
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur sessions:', error);
        this.error = 'Erreur lors du chargement des sessions';
        this.loading = false;
      }
    });
  }

  // private applyFilters() {
  //   let filteredData = [...this.tableDataCopy];

  //   if (this.searchDataValue.trim()) {
  //     filteredData = filteredData.filter(session =>
  //       session.titre?.toLowerCase().includes(this.searchDataValue.toLowerCase()) ||
  //       session.code_session?.toLowerCase().includes(this.searchDataValue.toLowerCase()) ||
  //       session.formation?.titre?.toLowerCase().includes(this.searchDataValue.toLowerCase())
  //     );
  //   }

  //   if (this.selectedStatut) {
  //     filteredData = filteredData.filter(session => session.statut === this.selectedStatut);
  //   }

  //   if (this.selectedType) {
  //     filteredData = filteredData.filter(session => session.type === this.selectedType);
  //   }

  //   this.actualData = filteredData;
  //   this.totalData = filteredData.length;
  //   this.currentPage = 1;
  //   this.calculateTotalPages(this.totalData, this.pageSize); // Ajout de cette ligne
  //   this.getTableData();
  // }

  loadFormations() {
    this.formationService.getFormationsrh().subscribe({
      next: (response) => {
        this.formations = response.formations || [];
      },
      error: (error) => {
        console.error('Erreur formations:', error);
      }
    });
  }

  loadFormateurs() {
    // Adapter selon votre endpoint pour récupérer les formateurs
    this.userService.getMyUsers().subscribe({
      next: (response) => {
        // Filtrer pour ne garder que les formateurs
        this.formateurs = (response.data || response).filter((user: any) => 
          user.role_id === 2 || user.fonction?.toLowerCase().includes('formateur')
        );
      },
      error: (error) => {
        console.error('Erreur formateurs:', error);
      }
    });
  }

  openNew() {
    this.isEditMode = false;
    this.sessionForm.reset();
    this.selectedSession = null;
  }

  editSession(session: SessionFormation) {
    this.isEditMode = true;
    this.selectedSession = session;
    
    // Formatter les dates pour les inputs datetime-local
    const dateDebut = new Date(session.date_debut).toISOString().slice(0, 16);
    const dateFin = new Date(session.date_fin).toISOString().slice(0, 16);
    
    this.sessionForm.patchValue({
      titre: session.titre,
      formation_id: session.formation_id,
      formateur_id: session.formateur_id,
      type: session.type,
      date_debut: dateDebut,
      date_fin: dateFin,
      lieu: session.lieu,
      capacite_max: session.capacite_max,
      description: session.description,
      instructions_acces: session.instructions_acces
    });
  }

  onSubmit() {
    if (this.sessionForm.invalid) return; 

    this.isSubmitting = true;
  const formData = this.sessionForm.value;

    if (this.isEditMode && this.selectedSession) {
      this.sessionFormationService.updateSession(this.selectedSession.id, formData).subscribe({
        next: (response) => {
          this.successMessage = 'Session modifiée avec succès';
          this.isSubmitting = false;
          this.loadSessions();
          // Fermer le modal
          const modal = document.getElementById('sessionModal');
          if (modal) {
            const bootstrapModal = (window as any).bootstrap.Modal.getInstance(modal);
            if (bootstrapModal) bootstrapModal.hide();
          }
        },
        error: (error) => {
          this.error = 'Erreur lors de la modification';
          this.isSubmitting = false;
        }
      });
    } else {
      this.sessionFormationService.createSession(formData).subscribe({
        next: (response) => {
          this.successMessage = 'Session créée avec succès';
          this.isSubmitting = false;
          this.loadSessions();
          // Fermer le modal
          const modal = document.getElementById('sessionModal');
          if (modal) {
            const bootstrapModal = (window as any).bootstrap.Modal.getInstance(modal);
            if (bootstrapModal) bootstrapModal.hide();
          }
        },
        error: (error) => {
          this.error = 'Erreur lors de la création';
          this.isSubmitting = false;
        }
      });
    }
  }

  viewDetails(session: SessionFormation) {
    this.selectedSession = session;
    // Ouvrir le modal de détails
    const modal = new (window as any).bootstrap.Modal(document.getElementById('sessionDetailsModal'));
    modal.show();
  }

  manageParticipants(session: SessionFormation) {
    console.log('Gérer participants', session);
    // Navigation vers la page de gestion des participants
  }

  cancelSession(session: SessionFormation) {
    if (confirm('Êtes-vous sûr de vouloir annuler cette session ?')) {
      const motif = prompt('Motif d\'annulation (optionnel):') || '';
      this.sessionFormationService.cancelSession(session.id, motif).subscribe({
        next: () => {
          this.successMessage = 'Session annulée avec succès';
          this.loadSessions();
        },
        error: () => {
          this.error = 'Erreur lors de l\'annulation';
        }
      });
    }
  }

  deleteSession(session: SessionFormation) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette session ? Cette action est irréversible.')) {
      this.sessionFormationService.deleteSession(session.id).subscribe({
        next: () => {
          this.successMessage = 'Session supprimée avec succès';
          this.loadSessions();
        },
        error: () => {
          this.error = 'Erreur lors de la suppression';
        }
      });
    }
  }

  refreshData() {
    this.loadSessions();
  }

  // Méthodes de filtrage et recherche
  searchData(value: string) {
    this.searchDataValue = value;
    this.applyFilters();
  }

  filterByStatut() {
    this.applyFilters();
  }

  filterByType() {
    this.applyFilters();
  }

  private applyFilters() {
    let filteredData = [...this.tableDataCopy];

    if (this.searchDataValue.trim()) {
      filteredData = filteredData.filter(session =>
        session.titre?.toLowerCase().includes(this.searchDataValue.toLowerCase()) ||
        session.code_session?.toLowerCase().includes(this.searchDataValue.toLowerCase()) ||
        session.formation?.titre?.toLowerCase().includes(this.searchDataValue.toLowerCase())
      );
    }

    if (this.selectedStatut) {
      filteredData = filteredData.filter(session => session.statut === this.selectedStatut);
    }

    if (this.selectedType) {
      filteredData = filteredData.filter(session => session.type === this.selectedType);
    }

    this.actualData = filteredData;
    this.totalData = filteredData.length;
    this.currentPage = 1;
    this.getTableData();
  }

  // Méthodes utilitaires
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  getStatutDisplay(statut: string): string {
    const statusMap: { [key: string]: string } = {
      'planifiee': 'Planifiée',
      'en_cours': 'En cours',
      'terminee': 'Terminée',
      'annulee': 'Annulée'
    };
    return statusMap[statut] || statut;
  }

  getStatutClass(statut: string): string {
    switch (statut) {
      case 'planifiee': return 'badge bg-info';
      case 'en_cours': return 'badge bg-success';
      case 'terminee': return 'badge bg-secondary';
      case 'annulee': return 'badge bg-danger';
      default: return 'badge bg-light';
    }
  }

  getTypeClass(type: string): string {
    switch (type) {
      case 'presentiel': return 'badge bg-primary';
      case 'distanciel': return 'badge bg-warning';
      case 'hybride': return 'badge bg-success';
      default: return 'badge bg-light';
    }
  }

  // Méthodes de pagination
  onPageChange(page: number) {
    this.currentPage = page;
    this.skip = (page - 1) * this.pageSize;
    this.getTableData();
  }

  private getTableData() {
    const startIndex = this.skip;
    const endIndex = startIndex + this.pageSize;
    this.tableData = this.actualData.slice(startIndex, endIndex);
  }

  // Méthodes de tri
  sortData(sort: Sort) {
    const data = this.actualData.slice();
    if (!sort.active || sort.direction === '') {
      this.actualData = data;
      return;
    }

    this.actualData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'titre':
          return this.compare(a.titre, b.titre, isAsc);
        case 'date_debut':
          return this.compare(new Date(a.date_debut), new Date(b.date_debut), isAsc);
        case 'statut':
          return this.compare(a.statut, b.statut, isAsc);
        default:
          return 0;
      }
    });
    this.getTableData();
  }

  compare(a: string | number | Date, b: string | number | Date, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  trackBySessionId(index: number, session: SessionFormation): number {
    return session.id;
  }

  clearMessages() {
    this.error = '';
    this.successMessage = '';
  }
}