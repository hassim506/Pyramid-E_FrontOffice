import { TestBed } from '@angular/core/testing';

import { AdminRHStatsService } from './adminrh-stat.service';

describe('AdminRHStatsService', () => {
  let service: AdminRHStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminRHStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
