import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CatalogueService, Catalogue } from '../../../shared/service/catalogue/catalogue.service';
import { ClientCompanyService } from '../../../shared/service/client/client-company.service';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';

declare var bootstrap: any;

@Component({
  selector: 'app-superadmin-catalogue',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './superadmin-catalogue.component.html',
  styleUrls: ['./superadmin-catalogue.component.scss']
})
export class SuperadminCatalogueComponent implements OnInit {
  loading = false;
  error = '';
  success = '';

  catalogues: Catalogue[] = [];
  entreprises: any[] = [];
  selectedCatalogue: Catalogue | null = null;

  // Filtres
  searchTerm = '';
  selectedEntreprise = '';
  selectedType = '';
  selectedStatus = '';

  types = [
    { value: 'technique', label: 'Technique' },
    { value: 'management', label: 'Management' },
    { value: 'soft_skills', label: 'Soft Skills' }
  ];

  constructor(
    private catalogueService: CatalogueService,
    private clientCompanyService: ClientCompanyService
  ) {}

  ngOnInit(): void {
    this.loadCatalogues();
    this.loadEntreprises();
  }

  loadCatalogues(): void {
    this.loading = true;
    this.error = '';

    this.catalogueService.getCatalogues().subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status && response.catalogues) {
          this.catalogues = response.catalogues;
        } else {
          this.catalogues = [];
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = httpErrorMessage(err, 'Impossible de charger les catalogues.');
      }
    });
  }

  loadEntreprises(): void {
    this.clientCompanyService.getCompanies().subscribe({
      next: (res: any) => {
        this.entreprises = res.data || res.entreprises || [];
      },
      error: () => {}
    });
  }

  // ── Filtres ──

  get filteredCatalogues(): Catalogue[] {
    return this.catalogues.filter(cat => {
      const matchesSearch = !this.searchTerm ||
        cat.titre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        cat.description?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        this.getEntrepriseName(cat).toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesEntreprise = !this.selectedEntreprise ||
        String(cat.entreprise_id) === this.selectedEntreprise;

      const matchesType = !this.selectedType || cat.type === this.selectedType;

      const matchesStatus = !this.selectedStatus ||
        (this.selectedStatus === 'active' && cat.est_publie) ||
        (this.selectedStatus === 'inactive' && !cat.est_publie);

      return matchesSearch && matchesEntreprise && matchesType && matchesStatus;
    });
  }

  get uniqueEntreprises(): any[] {
    const map = new Map<number, any>();
    this.catalogues.forEach(cat => {
      if (cat.entreprise_id && cat.entreprise) {
        map.set(cat.entreprise_id, cat.entreprise);
      }
    });
    return Array.from(map.values());
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedEntreprise = '';
    this.selectedType = '';
    this.selectedStatus = '';
  }

  get hasActiveFilters(): boolean {
    return !!(this.searchTerm || this.selectedEntreprise || this.selectedType || this.selectedStatus);
  }

  // ── KPI ──

  getPubliedCount(): number {
    return this.catalogues.filter(c => c.est_publie).length;
  }

  getTotalFormationsCount(): number {
    return this.catalogues.reduce((sum, c) => sum + (c.nombre_formations || 0), 0);
  }

  getEntrepriseCount(): number {
    const ids = new Set(this.catalogues.map(c => c.entreprise_id).filter(Boolean));
    return ids.size;
  }

  getCertifiantCount(): number {
    return this.catalogues.filter(c => c.metadata?.certificat_disponible).length;
  }

  // ── Helpers ──

  getEntrepriseName(cat: Catalogue): string {
    if (cat.entreprise?.nom) return cat.entreprise.nom;
    if (cat.entreprise?.name) return cat.entreprise.name;
    return '—';
  }

  getTypeLabel(type: string): string {
    const t = this.types.find(x => x.value === type);
    return t ? t.label : type;
  }

  getIconClass(icone: string): string {
    return `isax isax-${icone}`;
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }

  // ── View modal ──

  viewCatalogue(cat: Catalogue): void {
    this.selectedCatalogue = cat;
    const modal = new bootstrap.Modal(document.getElementById('viewModal'));
    modal.show();
  }

  trackByCatalogueId(_i: number, cat: Catalogue): number {
    return cat.id;
  }

  trackByFormationId(_i: number, f: any): number {
    return f.id;
  }

  getFeaturedFormationsCount(formations: any[]): number {
    return formations.filter(f => f.pivot?.est_featured).length;
  }

  getAveragePrice(formations: any[]): number {
    if (formations.length === 0) return 0;
    const total = formations.reduce((sum, f) => sum + parseFloat(f.prix || '0'), 0);
    return total / formations.length;
  }
}
