import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorParcoursComponent } from './instructor-parcours.component';

describe('InstructorParcoursComponent', () => {
  let component: InstructorParcoursComponent;
  let fixture: ComponentFixture<InstructorParcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorParcoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
