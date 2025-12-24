import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhIntegrationsComponent } from './adminrh-integrations.component';

describe('AdminrhIntegrationsComponent', () => {
  let component: AdminrhIntegrationsComponent;
  let fixture: ComponentFixture<AdminrhIntegrationsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminrhIntegrationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhIntegrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
