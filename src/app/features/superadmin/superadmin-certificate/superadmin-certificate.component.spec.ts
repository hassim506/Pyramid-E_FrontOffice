import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminCertificateComponent } from './superadmin-certificate.component';

describe('SuperadminCertificateComponent', () => {
  let component: SuperadminCertificateComponent;
  let fixture: ComponentFixture<SuperadminCertificateComponent>;  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperadminCertificateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
