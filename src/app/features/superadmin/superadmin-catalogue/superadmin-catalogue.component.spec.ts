import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminCatalogueComponent } from './superadmin-catalogue.component';

describe('SuperadminCatalogueComponent', () => {
  let component: SuperadminCatalogueComponent;
  let fixture: ComponentFixture<SuperadminCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminCatalogueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
