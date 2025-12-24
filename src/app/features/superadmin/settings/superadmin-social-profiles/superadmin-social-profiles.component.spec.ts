import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminSocialProfilesComponent } from './superadmin-social-profiles.component';

describe('SuperadminSocialProfilesComponent', () => {
  let component: SuperadminSocialProfilesComponent;
  let fixture: ComponentFixture<SuperadminSocialProfilesComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperadminSocialProfilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminSocialProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
