import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhAnnouncementsComponent } from './adminrh-announcements.component';

describe('AdminrhAnnouncementsComponent', () => {
  let component: AdminrhAnnouncementsComponent;
  let fixture: ComponentFixture<AdminrhAnnouncementsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhAnnouncementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminrhAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
