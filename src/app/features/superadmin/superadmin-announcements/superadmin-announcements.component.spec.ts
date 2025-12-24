import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminAnnouncementsComponent } from './superadmin-announcements.component';

describe('SuperadminAnnouncementsComponent', () => {
  let component: SuperadminAnnouncementsComponent;
  let fixture: ComponentFixture<SuperadminAnnouncementsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminAnnouncementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
