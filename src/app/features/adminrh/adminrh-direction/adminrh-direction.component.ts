import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { routes } from '../../../shared/service/routes/routes';
import { DirectionService, Direction, DirectionCreateRequest } from '../../../shared/service/direction/direction.service';
import { UserService } from '../../../shared/service/user/user.service';
import { httpErrorMessage } from '../../../shared/utils/http-error.utils';

@Component({
  selector: 'app-adminrh-direction',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './adminrh-direction.component.html',
  styleUrls: ['./adminrh-direction.component.scss']
})
export class AdminrhDirectionComponent implements OnInit {
  routes = routes;

  // State
  loading = false;
  error = '';
  successMessage = '';
  searchFilter = '';

  // Arborescence
  arborescence: any[] = [];
  totalDirections = 0;
  totalDepartements = 0;
  totalEquipes = 0;
  totalEmployes = 0;

  // Tree selection
  expandedDirections: Set<number> = new Set();
  expandedDepartements: Set<number> = new Set();
  selectedNode: any = null;
  selectedNodeType: 'direction' | 'departement' | 'equipe' = 'direction';

  // Detail panel
  detailLoading = false;
  detailDirection: any = null;
  detailTab: 'membres' | 'structure' | 'formations' = 'membres';

  // Modal
  showModal = false;
  modalMode: 'create' | 'edit' = 'create';
  modalForm!: FormGroup;
  modalLoading = false;
  modalError = '';

  // Affecter modal
  showAffecterModal = false;
  availableEmployes: any[] = [];
  selectedEmployeIds: number[] = [];
  affecterLoading = false;
  employeSearch = '';

  // Entreprise info
  entrepriseNom = '';

  constructor(
    private directionService: DirectionService,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('pyramide_user') || '{}');
    this.entrepriseNom = user.entreprise?.nom || 'Mon Entreprise';
    this.initForm();
    this.loadArborescence();
  }

  initForm(): void {
    this.modalForm = this.fb.group({
      nom: ['', Validators.required],
      type: ['direction', Validators.required],
      parent_id: [null],
      description: [''],
      code: [''],
      responsable_id: [null]
    });
  }

  // ─── ARBORESCENCE ─────────────────────────────────────────

  loadArborescence(): void {
    this.loading = true;
    this.directionService.getArborescence().subscribe({
      next: (res) => {
        this.arborescence = res.arborescence || [];
        this.computeStats();
        this.loading = false;
        if (this.arborescence.length && !this.selectedNode) {
          this.selectDirection(this.arborescence[0]);
        }
      },
      error: (err) => {
        this.error = httpErrorMessage(err, 'Erreur lors du chargement');
        this.loading = false;
      }
    });
  }

  computeStats(): void {
    let dirs = 0, depts = 0, equipes = 0, emps = 0;
    for (const dir of this.arborescence) {
      dirs++;
      emps += dir.employes_count || 0;
      for (const enfant of (dir.enfants || [])) {
        if (enfant.type === 'sous_direction') {
          depts++;
          emps += enfant.employes_count || 0;
          for (const sub of (enfant.enfants || [])) {
            equipes++;
            emps += sub.employes_count || 0;
          }
        } else if (enfant.type === 'departement') {
          depts++;
          emps += enfant.employes_count || 0;
          for (const sub of (enfant.enfants || [])) {
            equipes++;
            emps += sub.employes_count || 0;
          }
        }
      }
    }
    this.totalDirections = dirs;
    this.totalDepartements = depts;
    this.totalEquipes = equipes;
    this.totalEmployes = emps;
  }

  // ─── TREE INTERACTION ─────────────────────────────────────

  toggleDirection(dir: any, event: Event): void {
    event.stopPropagation();
    if (this.expandedDirections.has(dir.id)) {
      this.expandedDirections.delete(dir.id);
    } else {
      this.expandedDirections.add(dir.id);
    }
  }

  toggleDepartement(dept: any, event: Event): void {
    event.stopPropagation();
    if (this.expandedDepartements.has(dept.id)) {
      this.expandedDepartements.delete(dept.id);
    } else {
      this.expandedDepartements.add(dept.id);
    }
  }

  isDirectionExpanded(dir: any): boolean {
    return this.expandedDirections.has(dir.id);
  }

  isDepartementExpanded(dept: any): boolean {
    return this.expandedDepartements.has(dept.id);
  }

  selectDirection(dir: any): void {
    this.selectedNode = dir;
    this.selectedNodeType = 'direction';
    this.expandedDirections.add(dir.id);
    this.loadDetail(dir.id);
  }

  selectDepartement(dept: any): void {
    this.selectedNode = dept;
    this.selectedNodeType = 'departement';
    this.expandedDepartements.add(dept.id);
    this.loadDetail(dept.id);
  }

  selectEquipe(equipe: any): void {
    this.selectedNode = equipe;
    this.selectedNodeType = 'equipe';
    this.loadDetail(equipe.id);
  }

  isSelected(node: any): boolean {
    return this.selectedNode?.id === node.id;
  }

  // ─── DETAIL PANEL ─────────────────────────────────────────

  loadDetail(id: number): void {
    this.detailLoading = true;
    this.detailTab = 'membres';
    this.directionService.getById(id).subscribe({
      next: (res) => {
        this.detailDirection = res.direction;
        this.detailLoading = false;
      },
      error: () => {
        this.detailLoading = false;
      }
    });
  }

  setDetailTab(tab: 'membres' | 'structure' | 'formations'): void {
    this.detailTab = tab;
  }

  getBreadcrumb(): string[] {
    if (!this.detailDirection) return [];
    const parts: string[] = [];
    if (this.detailDirection.parent?.parent) {
      parts.push(this.detailDirection.parent.parent.nom);
    }
    if (this.detailDirection.parent) {
      parts.push(this.detailDirection.parent.nom);
    }
    parts.push(this.detailDirection.nom);
    return parts;
  }

  getTypeLabel(type: string): string {
    switch (type) {
      case 'direction': return 'Direction';
      case 'sous_direction': return 'Département';
      case 'departement': return 'Équipe';
      default: return type;
    }
  }

  getInitials(user: any): string {
    const n = (user.prenom || '')[0] || '';
    const l = (user.nom || '')[0] || '';
    return (n + l).toUpperCase();
  }

  getAvatarClass(index: number): string {
    const classes = ['av-g', 'av-b', 'av-p', 'av-a'];
    return classes[index % classes.length];
  }

  getDotColor(index: number): string {
    const colors = ['#0F6E56', '#185FA5', '#534AB7', '#854F0B'];
    return colors[index % colors.length];
  }

  getIconColor(index: number): string {
    const classes = ['dhi-green', 'dhi-blue', 'dhi-amber', 'dhi-purple'];
    return classes[index % classes.length];
  }

  getDirIcon(index: number): string {
    const icons = ['ti-building', 'ti-chart-bar', 'ti-users', 'ti-briefcase'];
    return icons[index % icons.length];
  }

  // ─── CRUD MODAL ───────────────────────────────────────────

  openCreateModal(type: 'direction' | 'sous_direction' | 'departement', parentId?: number): void {
    this.modalMode = 'create';
    this.modalError = '';
    this.modalForm.reset({ type, parent_id: parentId || null, nom: '', description: '', code: '', responsable_id: null });
    this.showModal = true;
  }

  openEditModal(direction: any): void {
    this.modalMode = 'edit';
    this.modalError = '';
    this.modalForm.patchValue({
      nom: direction.nom,
      type: direction.type,
      parent_id: direction.parent_id,
      description: direction.description || '',
      code: direction.code || '',
      responsable_id: direction.responsable_id
    });
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  submitModal(): void {
    if (this.modalForm.invalid) return;
    this.modalLoading = true;
    this.modalError = '';

    const data: DirectionCreateRequest = this.modalForm.value;

    const obs = this.modalMode === 'create'
      ? this.directionService.create(data)
      : this.directionService.update(this.selectedNode.id, data);

    obs.subscribe({
      next: () => {
        this.modalLoading = false;
        this.showModal = false;
        this.successMessage = this.modalMode === 'create' ? 'Créé avec succès' : 'Mis à jour avec succès';
        this.loadArborescence();
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (err) => {
        this.modalLoading = false;
        this.modalError = httpErrorMessage(err, 'Erreur');
      }
    });
  }

  // ─── DELETE ───────────────────────────────────────────────

  confirmDelete(): void {
    if (!this.selectedNode) return;
    if (!confirm(`Supprimer "${this.selectedNode.nom}" ? Cette action est irréversible.`)) return;

    this.directionService.delete(this.selectedNode.id).subscribe({
      next: () => {
        this.successMessage = 'Supprimé avec succès';
        this.selectedNode = null;
        this.detailDirection = null;
        this.loadArborescence();
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (err) => {
        this.error = httpErrorMessage(err, 'Impossible de supprimer');
        setTimeout(() => this.error = '', 5000);
      }
    });
  }

  // ─── AFFECTER EMPLOYES ────────────────────────────────────

  openAffecterModal(): void {
    this.showAffecterModal = true;
    this.selectedEmployeIds = [];
    this.employeSearch = '';
    this.affecterLoading = true;
    this.userService.getMyUsers().subscribe({
      next: (res: any) => {
        this.availableEmployes = (res.users || res.data || []).filter((u: any) =>
          u.statut !== false && u.statut !== 0 &&
          (!u.direction_id || u.direction_id !== this.selectedNode?.id)
        );
        this.affecterLoading = false;
      },
      error: () => {
        this.affecterLoading = false;
      }
    });
  }

  closeAffecterModal(): void {
    this.showAffecterModal = false;
  }

  toggleEmployeSelection(id: number): void {
    const idx = this.selectedEmployeIds.indexOf(id);
    if (idx > -1) {
      this.selectedEmployeIds.splice(idx, 1);
    } else {
      this.selectedEmployeIds.push(id);
    }
  }

  isEmployeSelected(id: number): boolean {
    return this.selectedEmployeIds.includes(id);
  }

  get filteredEmployes(): any[] {
    if (!this.employeSearch) return this.availableEmployes;
    const s = this.employeSearch.toLowerCase();
    return this.availableEmployes.filter((u: any) =>
      `${u.prenom} ${u.nom} ${u.email}`.toLowerCase().includes(s)
    );
  }

  submitAffecter(): void {
    if (!this.selectedEmployeIds.length || !this.selectedNode) return;
    this.affecterLoading = true;
    this.directionService.affecterEmployes(this.selectedNode.id, this.selectedEmployeIds).subscribe({
      next: () => {
        this.affecterLoading = false;
        this.showAffecterModal = false;
        this.successMessage = 'Employés affectés avec succès';
        this.loadDetail(this.selectedNode.id);
        this.loadArborescence();
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (err) => {
        this.affecterLoading = false;
        this.error = httpErrorMessage(err, 'Erreur lors de l\'affectation');
      }
    });
  }

  retirerEmploye(userId: number): void {
    if (!this.selectedNode) return;
    if (!confirm('Retirer cet employé de cette direction ?')) return;
    this.directionService.retirerEmployes(this.selectedNode.id, [userId]).subscribe({
      next: () => {
        this.successMessage = 'Employé retiré';
        this.loadDetail(this.selectedNode.id);
        this.loadArborescence();
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (err) => {
        this.error = httpErrorMessage(err, 'Erreur');
      }
    });
  }

  // ─── FILTRAGE ARBRE ───────────────────────────────────────

  get filteredArborescence(): any[] {
    if (!this.searchFilter) return this.arborescence;
    const s = this.searchFilter.toLowerCase();
    return this.arborescence.filter((dir: any) => {
      if (dir.nom.toLowerCase().includes(s)) return true;
      return (dir.enfants || []).some((e: any) =>
        e.nom.toLowerCase().includes(s) ||
        (e.enfants || []).some((sub: any) => sub.nom.toLowerCase().includes(s))
      );
    });
  }
}
