import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhSettingsComponent } from './adminrh-settings.component';

describe('AdminrhSettingsComponent', () => {
  let component: AdminrhSettingsComponent;
  let fixture: ComponentFixture<AdminrhSettingsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminrhSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
