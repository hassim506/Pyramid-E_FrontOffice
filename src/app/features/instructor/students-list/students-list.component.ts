import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-students-list',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss'
})
export class StudentsListComponent implements OnInit {
  loading = false;
  error = '';

  // All unique apprenants across all formations
  allApprenants: any[] = [];
  tableData: any[] = [];
  totalData = 0;

  // Pagination
  currentPage = 1;
  pageSize = 15;

  // Filters
  searchValue = '';
  selectedFormationId = '';

  // Formation list for filter dropdown
  formations: any[] = [];

  private baseUrl = environment.apiUrl;

  constructor(
    private authService: AuthService,
    private formationService: FormationService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('pyramide_token');
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  loadData(): void {
    this.loading = true;
    this.error = '';

    this.formationService.getFormationsformateur().subscribe({
      next: (res) => {
        this.formations = res.formations || [];
        if (this.formations.length === 0) {
          this.loading = false;
          return;
        }

        // Fetch participants for each formation in parallel
        const requests = this.formations.map(f =>
          this.http.get<any>(`${this.baseUrl}/formations/${f.id}/participants`, {
            headers: this.getHeaders()
          }).pipe(catchError(() => of({ participants: [] })))
        );

        forkJoin(requests).subscribe({
          next: (results) => {
            const seen = new Set<number>();
            this.allApprenants = [];

            results.forEach((r, idx) => {
              const formation = this.formations[idx];
              const participants = r.participants || r.data || [];
              participants.forEach((p: any) => {
                const entry = {
                  id: p.id,
                  nom: p.nom || p.name || '—',
                  prenom: p.prenom || '',
                  email: p.email || '—',
                  avatar: p.avatar || p.photo || null,
                  formation_id: formation.id,
                  formation_titre: formation.titre,
                  progression: p.pivot?.progression ?? p.progression ?? 0,
                  statut_formation: p.pivot?.statut_formation ?? p.statut_formation ?? '—',
                  date_inscription: p.pivot?.date_inscription ?? p.date_inscription ?? null,
                };
                // One row per apprenant per formation (not deduped by apprenant)
                this.allApprenants.push(entry);
              });
            });

            this.applyFilters();
            this.loading = false;
          },
          error: () => {
            this.error = 'Erreur lors du chargement des apprenants.';
            this.loading = false;
          }
        });
      },
      error: () => {
        this.error = 'Erreur lors du chargement des formations.';
        this.loading = false;
      }
    });
  }

  applyFilters(): void {
    let filtered = [...this.allApprenants];

    if (this.searchValue.trim()) {
      const q = this.searchValue.toLowerCase();
      filtered = filtered.filter(a =>
        a.nom.toLowerCase().includes(q) ||
        a.prenom.toLowerCase().includes(q) ||
        a.email.toLowerCase().includes(q) ||
        a.formation_titre.toLowerCase().includes(q)
      );
    }

    if (this.selectedFormationId) {
      filtered = filtered.filter(a => String(a.formation_id) === String(this.selectedFormationId));
    }

    this.totalData = filtered.length;
    this.currentPage = 1;
    const start = 0;
    this.tableData = filtered.slice(start, start + this.pageSize);
    this._filtered = filtered;
  }

  private _filtered: any[] = [];

  onPageChange(page: number): void {
    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    this.tableData = this._filtered.slice(start, start + this.pageSize);
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const totalPages = Math.ceil(this.totalData / this.pageSize);
    const start = Math.max(1, this.currentPage - 2);
    const end   = Math.min(totalPages, this.currentPage + 2);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  }

  getInitials(apprenant: any): string {
    const n = `${apprenant.prenom} ${apprenant.nom}`.trim();
    return n.split(' ').map((w: string) => w[0]).join('').substring(0, 2).toUpperCase() || '?';
  }

  getFullName(apprenant: any): string {
    return `${apprenant.prenom} ${apprenant.nom}`.trim() || apprenant.email;
  }

  getStatutClass(statut: string): string {
    switch (statut) {
      case 'en_cours':  return 'ip-statut-encours';
      case 'termine':   return 'ip-statut-termine';
      case 'abandonne': return 'ip-statut-abandonne';
      default:          return 'ip-statut-default';
    }
  }

  getStatutLabel(statut: string): string {
    const map: Record<string, string> = {
      en_cours:   'En cours',
      termine:    'Terminé',
      abandonne:  'Abandonné',
      non_commence: 'Non commencé',
    };
    return map[statut] || statut || '—';
  }
}
