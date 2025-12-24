import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhAssignmentComponent } from './adminrh-assignment.component';

describe('AdminrhAssignmentComponent', () => {
  let component:AdminrhAssignmentComponent;
  let fixture: ComponentFixture<AdminrhAssignmentComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhAssignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminrhAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
