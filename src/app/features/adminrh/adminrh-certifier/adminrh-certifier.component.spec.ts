import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhCertifierComponent } from './adminrh-certifier.component';

describe('AdminrhCertifierComponent', () => {
  let component: AdminrhCertifierComponent;
  let fixture: ComponentFixture<AdminrhCertifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhCertifierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhCertifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
