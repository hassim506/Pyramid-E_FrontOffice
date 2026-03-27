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
  imports:[CommonModule,MatTableModule,MatSortModule,MatPaginatorModule,MatSelectModule,CustomPaginationComponent,RouterLink,FormsModule],
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
  filterQuizId: number | null = null;
  filterUserId: number | null = null;
  filterStatus: string = 'all'; // 'all', 'success', 'failed'
  
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
    this.filteredResults = this.results.filter(result => {
      let matches = true;

      if (this.filterQuizId !== null) {
        matches = matches && result.quiz_id === this.filterQuizId;
      }

      if (this.filterUserId !== null) {
        matches = matches && result.user_id === this.filterUserId;
      }

      if (this.filterStatus !== 'all') {
        matches = matches && (this.filterStatus === 'success' ? result.est_reussi : !result.est_reussi);
      }

      return matches;
    });

    this.totalData = Math.ceil(this.filteredResults.length / this.pageSize);
    this.currentPage = 1;
  }

  clearFilters(): void {
    this.filterQuizId = null;
    this.filterUserId = null;
    this.filterStatus = 'all';
    this.applyFilters();
  }

  getPaginatedResults(): QuizResult[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredResults.slice(startIndex, startIndex + this.pageSize);
  }

  nextPage(): void {
    if (this.currentPage < this.totalData) {
      this.currentPage++;
    }
  }
  parseFloat(value: string): number {
    return parseFloat(value);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  sortData(event: any): void {
    // Implémentation du tri si nécessaire
    console.log('Sort event:', event);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalData) {
      this.currentPage = page;
    }
  }

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