import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminIntegrationsComponent } from './superadmin-integrations.component';

describe('SuperadminIntegrationsComponent', () => {
  let component: SuperadminIntegrationsComponent;
  let fixture: ComponentFixture<SuperadminIntegrationsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperadminIntegrationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminIntegrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
