import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhParcoursComponent } from './adminrh-parcours.component';

describe('AdminrhParcoursComponent', () => {
  let component: AdminrhParcoursComponent;
  let fixture: ComponentFixture<AdminrhParcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhParcoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
