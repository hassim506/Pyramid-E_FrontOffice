import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormationService } from '../../../shared/service/formation/formation.service';

interface VideoRessourceItem {
  section_id: number;
  titre: string;
  description: string | null;
  type: string;
  contenu: string | null;
  ressources: any[] | null;
  duree_estimee: string | null;
  statut: string;
  module_id: number;
  module_titre: string;
  formation_id: number;
  formation_titre: string;
}

interface Stats {
  total_items: number;
  total_videos: number;
  total_ressources: number;
  total_formations: number;
}

type TypeFilter = 'all' | 'video' | 'pdf' | 'ressource';

@Component({
  selector: 'app-instructor-videos-ressources',
  standalone: true,
  templateUrl: './instructor-videos-ressources.component.html',
  styleUrls: ['./instructor-videos-ressources.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class InstructorVideosRessourcesComponent implements OnInit {
  public loading = false;
  public error = '';

  public allItems: VideoRessourceItem[] = [];
  public stats: Stats = {
    total_items: 0,
    total_videos: 0,
    total_ressources: 0,
    total_formations: 0,
  };

  public searchValue = '';
  public typeFilter: TypeFilter = 'all';
  public formationFilter = 'all';

  private _filtered: VideoRessourceItem[] = [];
  public tableData: VideoRessourceItem[] = [];

  public currentPage = 1;
  public pageSize = 12;

  constructor(private formationService: FormationService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error = '';

    this.formationService.getVideosRessourcesFormateur().subscribe({
      next: (response: any) => {
        this.allItems = response.items || [];
        this.stats = response.stats || this.stats;
        this.loading = false;
        this.applyFilters();
      },
      error: () => {
        this.error = 'Erreur lors du chargement des vidéos et ressources';
        this.loading = false;
      }
    });
  }

  get formationsUniques(): { id: number; titre: string }[] {
    const map = new Map<number, string>();
    this.allItems.forEach(item => map.set(item.formation_id, item.formation_titre));
    return Array.from(map.entries()).map(([id, titre]) => ({ id, titre }));
  }

  applyFilters(): void {
    let filtered = [...this.allItems];

    if (this.searchValue.trim()) {
      const q = this.searchValue.toLowerCase();
      filtered = filtered.filter(item =>
        item.titre?.toLowerCase().includes(q) ||
        item.formation_titre?.toLowerCase().includes(q) ||
        item.module_titre?.toLowerCase().includes(q)
      );
    }

    if (this.typeFilter !== 'all') {
      filtered = filtered.filter(item => item.type === this.typeFilter);
    }

    if (this.formationFilter !== 'all') {
      filtered = filtered.filter(item => item.formation_id === Number(this.formationFilter));
    }

    this._filtered = filtered;
    this.currentPage = 1;
    this.updatePage();
  }

  updatePage(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    this.tableData = this._filtered.slice(start, start + this.pageSize);
  }

  get totalData(): number {
    return this._filtered.length;
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.totalData / this.pageSize));
  }

  onSearch(value: string): void {
    this.searchValue = value;
    this.applyFilters();
  }

  onTypeFilter(type: TypeFilter): void {
    this.typeFilter = type;
    this.applyFilters();
  }

  onFormationFilter(formationId: string): void {
    this.formationFilter = formationId;
    this.applyFilters();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updatePage();
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const start = Math.max(1, this.currentPage - 2);
    const end = Math.min(this.totalPages, this.currentPage + 2);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  }

  getTypeIcon(type: string): string {
    switch (type) {
      case 'video': return 'isax-video-circle';
      case 'pdf': return 'isax-document-text';
      case 'ressource': return 'isax-folder-2';
      default: return 'isax-document';
    }
  }

  getTypeLabel(type: string): string {
    switch (type) {
      case 'video': return 'Vidéo';
      case 'pdf': return 'PDF';
      case 'ressource': return 'Ressource';
      default: return type;
    }
  }

  getTypeBadgeClass(type: string): string {
    switch (type) {
      case 'video': return 'bg-danger';
      case 'pdf': return 'bg-info';
      case 'ressource': return 'bg-primary';
      default: return 'bg-secondary';
    }
  }

  trackByItem(_: number, item: VideoRessourceItem): number {
    return item.section_id;
  }
}
