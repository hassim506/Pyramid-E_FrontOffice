import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhDemandeComponent } from './adminrh-demande.component';

describe('AdminrhDemandeComponent', () => {
  let component: AdminrhDemandeComponent;
  let fixture: ComponentFixture<AdminrhDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhDemandeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
