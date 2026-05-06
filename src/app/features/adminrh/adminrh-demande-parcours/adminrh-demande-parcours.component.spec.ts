import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhDemandeParcoursComponent } from './adminrh-demande-parcours.component';

describe('AdminrhDemandeParcoursComponent', () => {
  let component: AdminrhDemandeParcoursComponent;
  let fixture: ComponentFixture<AdminrhDemandeParcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhDemandeParcoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhDemandeParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
