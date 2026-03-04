import { TestBed } from '@angular/core/testing';

import { CertifierServiceService } from './certifier-service.service';

describe('CertifierServiceService', () => {
  let service: CertifierServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertifierServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
