import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDemandeParcoursComponent } from './student-demande-parcours.component';

describe('StudentDemandeParcoursComponent', () => {
  let component: StudentDemandeParcoursComponent;
  let fixture: ComponentFixture<StudentDemandeParcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDemandeParcoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDemandeParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
