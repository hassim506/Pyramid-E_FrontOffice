import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDemandeComponent } from './student-demande.component';

describe('StudentDemandeComponent', () => {
  let component: StudentDemandeComponent;
  let fixture: ComponentFixture<StudentDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDemandeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
