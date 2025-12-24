import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhChangePasswordComponent } from './adminrh-change-password.component';

describe('AdminrhChangePasswordComponent', () => {
  let component: AdminrhChangePasswordComponent;
  let fixture: ComponentFixture<AdminrhChangePasswordComponent>; 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhChangePasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminrhChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
