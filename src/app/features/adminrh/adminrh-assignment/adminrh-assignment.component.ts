import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

interface EmpProgression {
  id: number;
  nom: string;
  email: string;
  formations_total: number;
  formations_en_cours: number;
  formations_terminees: number;
  progression_moyenne: number;
  score_moyen: number;
}

interface FormationCompletion {
  id: number;
  titre: string;
  inscrits: number;
  termines: number;
  taux: number;
}

@Component({
  selector: 'app-adminrh-assignment',
  templateUrl: './adminrh-assignment.component.html',
  styleUrl: './adminrh-assignment.component.scss',
  imports: [CommonModule, FormsModule]
})
export class AdminrhAssignmentComponent implements OnInit {

  employees: EmpProgression[] = [];
  formations: FormationCompletion[] = [];
  certificats: any[] = [];

  loading = true;

  private _searchQuery = '';
  get searchQuery(): string { return this._searchQuery; }
  set searchQuery(v: string) { this._searchQuery = v; this.currentPage = 1; }

  private _filterStatut = 'tous';
  get filterStatut(): string { return this._filterStatut; }
  set filterStatut(v: string) { this._filterStatut = v; this.currentPage = 1; }

  // ── Pagination ───────────────────────────────────────────────────
  pageSize    = 10;
  currentPage = 1;

  get totalPages(): number { return Math.max(1, Math.ceil(this.filteredEmployees.length / this.pageSize)); }

  get pagedEmployees(): EmpProgression[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredEmployees.slice(start, start + this.pageSize);
  }

  get pageNumbers(): number[] {
    const total = this.totalPages;
    const cur   = this.currentPage;
    const delta = 2;
    const range: number[] = [];
    for (let i = Math.max(1, cur - delta); i <= Math.min(total, cur + delta); i++) range.push(i);
    if (range[0] > 2) range.unshift(-1, 1);
    else if (range[0] === 2) range.unshift(1);
    if (range[range.length - 1] < total - 1) range.push(-1, total);
    else if (range[range.length - 1] === total - 1) range.push(total);
    return range;
  }

  goToPage(n: number): void { if (n >= 1 && n <= this.totalPages) this.currentPage = n; }
  prevPage():          void { this.goToPage(this.currentPage - 1); }
  nextPage():          void { this.goToPage(this.currentPage + 1); }

  // ── KPIs ─────────────────────────────────────────────────────────
  get kpiActifs(): number {
    return this.employees.filter(e => e.formations_en_cours > 0).length;
  }
  get kpiCompletionMoy(): number {
    if (!this.employees.length) return 0;
    const sum = this.employees.reduce((s, e) => s + e.progression_moyenne, 0);
    return Math.round(sum / this.employees.length);
  }
  get kpiCertifiesMois(): number {
    const now = new Date();
    return this.certificats.filter(c => {
      const d = new Date(c.created_at || c.date_delivrance || '');
      return !isNaN(d.getTime()) && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }).length;
  }
  get kpiDifficulte(): number {
    return this.employees.filter(e => e.formations_en_cours > 0 && e.progression_moyenne < 30).length;
  }
  get kpiTotal(): number {
    return this.employees.length;
  }

  // ── Table filtrée ────────────────────────────────────────────────
  get filteredEmployees(): EmpProgression[] {
    let list = this.employees;
    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      list = list.filter(e => e.nom.toLowerCase().includes(q) || e.email.toLowerCase().includes(q));
    }
    if (this.filterStatut !== 'tous') {
      list = list.filter(e => this.getStatut(e) === this.filterStatut);
    }
    return list;
  }

  // ── Statuts ──────────────────────────────────────────────────────
  getStatut(e: EmpProgression): string {
    if (e.formations_en_cours > 0 && e.progression_moyenne < 30) return 'difficulte';
    if (e.formations_en_cours > 0) return 'actif';
    if (e.formations_terminees > 0) return 'certifie';
    return 'inactif';
  }

  getStatutLabel(e: EmpProgression): string {
    return ({ difficulte: 'En difficulté', actif: 'Actif', certifie: 'Certifié', inactif: 'Inactif' } as any)[this.getStatut(e)] ?? '';
  }

  getProgressClass(p: number): string {
    if (p >= 75) return 'high';
    if (p >= 40) return 'mid';
    return 'low';
  }

  getScoreClass(s: number): string {
    if (s >= 75) return 'good';
    if (s >= 50) return 'avg';
    return s > 0 ? 'bad' : 'none';
  }

  getInitials(nom: string): string {
    return nom.split(' ').filter(Boolean).map(w => w[0]).join('').substring(0, 2).toUpperCase() || '?';
  }

  // ── Sidebar alertes ──────────────────────────────────────────────
  get alertes(): { type: string; icon: string; message: string; count: number }[] {
    const alerts: { type: string; icon: string; message: string; count: number }[] = [];
    const inactifs = this.employees.filter(e => e.formations_total > 0 && e.formations_en_cours === 0 && e.formations_terminees === 0).length;
    const difficulte = this.employees.filter(e => e.formations_en_cours > 0 && e.progression_moyenne < 30).length;
    const faibleScore = this.employees.filter(e => e.score_moyen > 0 && e.score_moyen < 50).length;
    if (inactifs) alerts.push({ type: 'warning', icon: 'isax-clock', message: 'Employés inactifs', count: inactifs });
    if (difficulte) alerts.push({ type: 'danger',  icon: 'isax-danger', message: 'Progression < 30 %', count: difficulte });
    if (faibleScore) alerts.push({ type: 'info',  icon: 'isax-chart-fail', message: 'Score quiz < 50 %', count: faibleScore });
    return alerts;
  }

  // ── Sidebar répartition ──────────────────────────────────────────
  get statutDistribution(): { label: string; count: number; pct: number; color: string }[] {
    const t = this.employees.length || 1;
    const counts: Record<string, number> = { actif: 0, certifie: 0, difficulte: 0, inactif: 0 };
    this.employees.forEach(e => counts[this.getStatut(e)]++);
    return [
      { label: 'Actifs',       count: counts['actif'],      pct: Math.round(counts['actif']      / t * 100), color: '#0F6E56' },
      { label: 'Certifiés',    count: counts['certifie'],   pct: Math.round(counts['certifie']   / t * 100), color: '#3B82F6' },
      { label: 'En difficulté',count: counts['difficulte'], pct: Math.round(counts['difficulte'] / t * 100), color: '#EF4444' },
      { label: 'Inactifs',     count: counts['inactif'],    pct: Math.round(counts['inactif']    / t * 100), color: '#94A3B8' },
    ];
  }

  // ── Recent certs (sidebar) ───────────────────────────────────────
  get recentCerts(): any[] {
    return this.certificats.slice(0, 5);
  }

  // ── Formation completion chart ───────────────────────────────────
  get topFormations(): FormationCompletion[] {
    return this.formations.slice(0, 8);
  }

  constructor(private http: HttpClient) {}

  private get headers(): HttpHeaders {
    const token = localStorage.getItem('pyramide_token');
    return new HttpHeaders({ 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' });
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;

    forkJoin({
      users:      this.http.get<any>(`${environment.apiUrl}/mes-utilisateurs-rh`,  { headers: this.headers }).pipe(catchError(() => of({ users: [] }))),
      formations: this.http.get<any>(`${environment.apiUrl}/adminrh/formations`,    { headers: this.headers }).pipe(catchError(() => of({ formations: [] }))),
      certificats:this.http.get<any>(`${environment.apiUrl}/certificats`,           { headers: this.headers }).pipe(catchError(() => of([]))),
    }).subscribe({
      next: ({ users, formations, certificats }) => {

        const userList: any[]  = users.users || users.data || (Array.isArray(users) ? users : []);
        const formList: any[]  = formations.formations || formations.data || (Array.isArray(formations) ? formations : []);
        const certList: any[]  = Array.isArray(certificats) ? certificats : (certificats.certificats || certificats.data || []);

        this.certificats = certList;
        this.formations  = formList.map(f => ({
          id:       f.id,
          titre:    f.titre || f.title || '—',
          inscrits: f.nombre_inscrits || f.inscrits || 0,
          termines: f.nombre_termines || 0,
          taux:     f.taux_completion ?? (f.nombre_inscrits ? Math.round((f.nombre_termines || 0) / f.nombre_inscrits * 100) : 0),
        }));

        if (!userList.length) {
          this.loading = false;
          return;
        }

        const calls = userList.map(u =>
          this.http.get<any>(`${environment.apiUrl}/employes/${u.id}/formations`, { headers: this.headers }).pipe(
            map(res => ({
              id:                   u.id,
              nom:                  u.name || `${u.prenom ?? ''} ${u.nom ?? ''}`.trim() || u.email,
              email:                u.email,
              formations_total:     res.statistiques?.formations_total     ?? 0,
              formations_en_cours:  res.statistiques?.formations_en_cours  ?? 0,
              formations_terminees: res.statistiques?.formations_terminees ?? 0,
              progression_moyenne:  Math.round(res.statistiques?.progression_moyenne ?? 0),
              score_moyen:          Math.round(res.statistiques?.score_moyen         ?? 0),
            } as EmpProgression)),
            catchError(() => of({
              id:                   u.id,
              nom:                  u.name || `${u.prenom ?? ''} ${u.nom ?? ''}`.trim() || u.email,
              email:                u.email,
              formations_total:     0,
              formations_en_cours:  0,
              formations_terminees: 0,
              progression_moyenne:  0,
              score_moyen:          0,
            } as EmpProgression))
          )
        );

        forkJoin(calls).subscribe({
          next: emps => { this.employees = emps; this.currentPage = 1; this.loading = false; },
          error: ()  => { this.loading = false; }
        });
      },
      error: () => { this.loading = false; }
    });
  }
}
