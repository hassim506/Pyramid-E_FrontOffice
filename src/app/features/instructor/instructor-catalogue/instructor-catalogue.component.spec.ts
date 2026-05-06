import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorCatalogueComponent } from './instructor-catalogue.component';

describe('InstructorCatalogueComponent', () => {
  let component: InstructorCatalogueComponent;
  let fixture: ComponentFixture<InstructorCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorCatalogueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
