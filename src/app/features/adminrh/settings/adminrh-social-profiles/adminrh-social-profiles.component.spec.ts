import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhSocialProfilesComponent } from './adminrh-social-profiles.component';

describe('AdminrhSocialProfilesComponent', () => {
  let component: AdminrhSocialProfilesComponent;
  let fixture: ComponentFixture<AdminrhSocialProfilesComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminrhSocialProfilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhSocialProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
