import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesCataloguesComponent } from './mes-catalogues.component';

describe('MesCataloguesComponent', () => {
  let component: MesCataloguesComponent;
  let fixture: ComponentFixture<MesCataloguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesCataloguesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesCataloguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
