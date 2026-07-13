// import { Component } from '@angular/core';
import { Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { apiResultFormat, instructorQuizResult, pageSelection } from '../../../shared/models/model';
import { PaginationService, tablePageSize } from '../../../shared/service/custom-pagination/pagination.service';
import { DataService } from '../../../shared/service/data/data.service';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';
 import { Component, OnInit } from '@angular/core';
import { QuizResultsService, QuizResult, QuizResultsResponse } from '../../../shared/service/quiz/quiz-results.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-instructor-quiz-results',
  imports:[CommonModule,MatTableModule,MatSortModule,MatPaginatorModule,MatSelectModule,CustomPaginationComponent,FormsModule],
  templateUrl: './instructor-quiz-results.component.html',
  styleUrl: './instructor-quiz-results.component.scss'
})




export class InstructorQuizResultsComponent implements OnInit {
  results: QuizResult[] = [];
  filteredResults: QuizResult[] = [];
  totalResults = 0;
  userId = 0;
  isAuthenticated = false;
  loading = false;

  // Filtres
  filterSearch = '';
  filterStatus: string = 'all';

  // Pagination
  currentPage = 1;
  pageSize = 10;
  totalData = 0;

  constructor(private quizResultsService: QuizResultsService) {}

  ngOnInit(): void {
    this.loadResults();
  }

  loadResults(): void {
    this.loading = true;
    this.quizResultsService.getAllResults().subscribe({
      next: (response: QuizResultsResponse) => {
        this.results = response.results;
        this.filteredResults = [...this.results];
        this.totalResults = response.total_in_db;
        this.userId = response.user_id;
        this.isAuthenticated = response.is_authenticated;
        this.applyFilters();
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des résultats:', error);
        this.loading = false;
      }
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

    // Tri du plus récent au plus ancien
    this.filteredResults.sort((a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

    this.totalData = Math.ceil(this.filteredResults.length / this.pageSize);
    this.currentPage = 1;
  }

  clearFilters(): void {
    this.filterSearch = '';
    this.filterStatus = 'all';
    this.applyFilters();
  }

  getUserName(result: QuizResult): string {
    if (result.user?.prenom || result.user?.nom) {
      return `${result.user.prenom ?? ''} ${result.user.nom ?? ''}`.trim();
    }
    return result.user?.name || `User #${result.user_id}`;
  }

  getInitials(result: QuizResult): string {
    const name = this.getUserName(result);
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  }

  getAvatarStyle(userId: number): { bg: string; color: string } {
    const colors = [
      { bg: '#EDE9FE', color: '#7C3AED' },
      { bg: '#D1FAE5', color: '#059669' },
      { bg: '#FEF3C7', color: '#D97706' },
      { bg: '#DBEAFE', color: '#2563EB' },
      { bg: '#FCE7F3', color: '#DB2777' },
    ];
    return colors[userId % colors.length];
  }

  readonly itemsPerPage = 10;

  get totalPages(): number { return Math.max(1, Math.ceil(this.filteredResults.length / this.itemsPerPage)); }

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
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  parseFloat(value: string): number { return parseFloat(value); }

  getSuccessRate(): number {
    if (this.filteredResults.length === 0) return 0;
    const successCount = this.filteredResults.filter(r => r.est_reussi).length;
    return Math.round((successCount / this.filteredResults.length) * 100);
  }

  getAverageScore(): number {
    if (this.filteredResults.length === 0) return 0;
    const totalScore = this.filteredResults.reduce((sum, r) => sum + parseFloat(r.note), 0);
    return Math.round((totalScore / this.filteredResults.length) * 100) / 100;
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
