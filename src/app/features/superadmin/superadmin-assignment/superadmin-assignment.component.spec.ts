import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminAssignmentComponent } from './superadmin-assignment.component';

describe('SuperadminAssignmentComponent', () => {
  let component: SuperadminAssignmentComponent;
  let fixture: ComponentFixture<SuperadminAssignmentComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminAssignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
