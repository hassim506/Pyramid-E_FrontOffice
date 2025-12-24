import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhCertificateComponent } from './adminrh-certificate.component';

describe('AdminrhCertificateComponent', () => {
  let component: AdminrhCertificateComponent;
  let fixture: ComponentFixture<AdminrhCertificateComponent>;  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminrhCertificateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
