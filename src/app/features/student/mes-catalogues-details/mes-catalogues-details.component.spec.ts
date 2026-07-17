import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesCataloguesDetailsComponent } from './mes-catalogues-details.component';

describe('MesCataloguesDetailsComponent', () => {
  let component: MesCataloguesDetailsComponent;
  let fixture: ComponentFixture<MesCataloguesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesCataloguesDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesCataloguesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
