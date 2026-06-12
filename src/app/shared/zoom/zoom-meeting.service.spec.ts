import { TestBed } from '@angular/core/testing';

import { ZoomMeetingService } from './zoom-meeting.service';

describe('ZoomMeetingService', () => {
  let service: ZoomMeetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoomMeetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
