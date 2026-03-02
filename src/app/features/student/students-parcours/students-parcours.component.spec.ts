import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsParcoursComponent } from './students-parcours.component';

describe('StudentsParcoursComponent', () => {
  let component: StudentsParcoursComponent;
  let fixture: ComponentFixture<StudentsParcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsParcoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
