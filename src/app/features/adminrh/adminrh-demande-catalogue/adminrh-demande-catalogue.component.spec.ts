import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhDemandeCatalogueComponent } from './adminrh-demande-catalogue.component';

describe('AdminrhDemandeCatalogueComponent', () => {
  let component: AdminrhDemandeCatalogueComponent;
  let fixture: ComponentFixture<AdminrhDemandeCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhDemandeCatalogueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhDemandeCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
