import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhPermissionComponent } from './adminrh-permission.component';

describe('AdminrhPermissionComponent', () => {
  let component: AdminrhPermissionComponent;
  let fixture: ComponentFixture<AdminrhPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhPermissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
