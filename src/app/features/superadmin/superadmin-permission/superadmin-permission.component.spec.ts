import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminPermissionComponent } from './superadmin-permission.component';

describe('SuperadminPermissionComponent', () => {
  let component: SuperadminPermissionComponent;
  let fixture: ComponentFixture<SuperadminPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminPermissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
