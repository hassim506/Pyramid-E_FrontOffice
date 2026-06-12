import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuizResultsService, QuizResult, QuizResultsResponse } from '../../../shared/service/quiz/quiz-results.service';

@Component({
  selector: 'app-superadmin-quiz-results',
  imports: [CommonModule, FormsModule],
  templateUrl: './superadmin-quiz-results.component.html',
  styleUrl: './superadmin-quiz-results.component.scss'
})
export class SuperadminQuizResultsComponent implements OnInit {
  results: QuizResult[] = [];
  filteredResults: QuizResult[] = [];
  loading = false;

  filterSearch = '';
  filterStatus = 'all';

  currentPage = 1;
  readonly itemsPerPage = 10;

  constructor(private quizResultsService: QuizResultsService) {}

  ngOnInit(): void { this.loadResults(); }

  loadResults(): void {
    this.loading = true;
    this.quizResultsService.getAllResults().subscribe({
      next: (res: QuizResultsResponse) => {
        this.results = res.results;
        this.applyFilters();
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  applyFilters(): void {
    const s = this.filterSearch.toLowerCase();
    this.filteredResults = this.results.filter(r => {
      const matchStatus = this.filterStatus === 'all'
        || (this.filterStatus === 'success' ? r.est_reussi : !r.est_reussi);
      const matchSearch = !s
        || r.quiz?.titre?.toLowerCase().includes(s)
        || r.user?.prenom?.toLowerCase().includes(s)
        || r.user?.nom?.toLowerCase().includes(s)
        || r.user?.name?.toLowerCase().includes(s)
        || r.user?.matricule?.toLowerCase().includes(s);
      return matchStatus && matchSearch;
    });
    this.currentPage = 1;
  }

  clearFilters(): void {
    this.filterSearch = '';
    this.filterStatus = 'all';
    this.applyFilters();
  }

  get totalPages(): number { return Math.ceil(this.filteredResults.length / this.itemsPerPage); }

  get paginatedResults(): QuizResult[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredResults.slice(start, start + this.itemsPerPage);
  }

  get pageEnd(): number { return Math.min(this.currentPage * this.itemsPerPage, this.filteredResults.length); }

  get pageNumbers(): number[] {
    const total = this.totalPages;
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const p = this.currentPage;
    const pages: number[] = [1];
    if (p > 3) pages.push(-1);
    for (let i = Math.max(2, p - 1); i <= Math.min(total - 1, p + 1); i++) pages.push(i);
    if (p < total - 2) pages.push(-1);
    pages.push(total);
    return pages;
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) this.currentPage = page;
  }

  parseFloat(v: string): number { return parseFloat(v); }

  getSuccessRate(): number {
    if (!this.filteredResults.length) return 0;
    return Math.round(this.filteredResults.filter(r => r.est_reussi).length / this.filteredResults.length * 100);
  }

  getAverageScore(): number {
    if (!this.filteredResults.length) return 0;
    return Math.round(this.filteredResults.reduce((s, r) => s + parseFloat(r.note), 0) / this.filteredResults.length * 100) / 100;
  }

  formatDate(d: string): string {
    return new Date(d).toLocaleDateString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
  }

  getUserName(r: QuizResult): string {
    if (r.user?.prenom && r.user?.nom) return `${r.user.prenom} ${r.user.nom}`;
    return r.user?.name || `Utilisateur #${r.user_id}`;
  }

  getInitials(r: QuizResult): string {
    const name = this.getUserName(r);
    return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase() || '?';
  }

  avatarColors = ['#E6F1FB,#0C447C', '#E1F5EE,#085041', '#EEEDFE,#3C3489', '#FAEEDA,#633806', '#F1EFE8,#444441'];
  getAvatarStyle(id: number): { bg: string; color: string } {
    const pair = this.avatarColors[id % this.avatarColors.length].split(',');
    return { bg: pair[0], color: pair[1] };
  }
}
