import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsCatalogueComponent } from './students-catalogue.component';

describe('StudentsCatalogueComponent', () => {
  let component: StudentsCatalogueComponent;
  let fixture: ComponentFixture<StudentsCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsCatalogueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
