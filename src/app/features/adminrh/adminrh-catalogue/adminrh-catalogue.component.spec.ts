import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhCatalogueComponent } from './adminrh-catalogue.component';

describe('AdminrhCatalogueComponent', () => {
  let component: AdminrhCatalogueComponent;
  let fixture: ComponentFixture<AdminrhCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhCatalogueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
