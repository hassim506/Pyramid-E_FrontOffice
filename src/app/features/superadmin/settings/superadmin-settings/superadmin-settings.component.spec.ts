import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminSettingsComponent } from './superadmin-settings.component';

describe('SuperadminSettingsComponent', () => {
  let component: SuperadminSettingsComponent;
  let fixture: ComponentFixture<SuperadminSettingsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
