import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhCategorieComponent } from './adminrh-categorie.component';

describe('AdminrhCategorieComponent', () => {
  let component: AdminrhCategorieComponent;
  let fixture: ComponentFixture<AdminrhCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhCategorieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
