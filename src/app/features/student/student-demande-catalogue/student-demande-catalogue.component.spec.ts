import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDemandeCatalogueComponent } from './student-demande-catalogue.component';

describe('StudentDemandeCatalogueComponent', () => {
  let component: StudentDemandeCatalogueComponent;
  let fixture: ComponentFixture<StudentDemandeCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDemandeCatalogueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDemandeCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
