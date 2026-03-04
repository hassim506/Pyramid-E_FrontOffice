import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  pageSelection,
  pageSize,
  pageSizeCal,
  PaginationService,
} from './pagination.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class CustomPaginationComponent {
  @Input() totalItems!: number;
  @Input() pageSize: number = 10;
  @Input() currentPage: number = 1;
   @Input() itemsPerPage!: number;
  @Input() totalData!: number;
  @Output() pageChange = new EventEmitter<number>();

  public totalPages = 0;
  public pageNumberArray: number[] = [];
  public pageSelection: pageSelection[] = [];
    public serialNumberArray: number[] = []; 
      public tableData: any[] = []; 


  constructor(private pagination: PaginationService) {
    this.pagination.calculatePageSize.subscribe((res: pageSizeCal) => {
      this.calculateTotalPages(res.totalData, res.pageSize);
      this.pageSize = res.pageSize;
    });
    this.pagination.changePagesize.subscribe((res: pageSize) => {
      this.changePageSize(res.pageSize);
    });
  }

  ngOnChanges(): void {
    this.calculateTotalPages(this.totalItems, this.pageSize);
  }

  calculateTotalPages(totalItems: number, pageSize: number): void {
    this.totalPages = Math.ceil(totalItems / pageSize);
    this.pageNumberArray = [];
    this.pageSelection = [];
    for (let i = 1; i <= this.totalPages; i++) {
      const limit = pageSize * i;
      const skip = limit - pageSize;
      this.pageNumberArray.push(i);
      this.pageSelection.push({ skip, limit });
    }
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.pageChange.emit(page);
    }
  }

  getMoreData(event: string): void {
    if (event === 'next' && this.currentPage < this.totalPages) {
      this.onPageChange(this.currentPage + 1);
    } else if (event === 'previous' && this.currentPage > 1) {
      this.onPageChange(this.currentPage - 1);
    }
  }

  moveToPage(pageNumber: number): void {
    this.onPageChange(pageNumber);
  }

  changePageSize(pageSize: number): void {
    this.pageSize = pageSize;
    this.currentPage = 1;
    this.calculateTotalPages(this.totalItems, this.pageSize);
    this.pageChange.emit(1);
  }
}