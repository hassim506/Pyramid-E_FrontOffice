import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhRoleComponent } from './adminrh-role.component';

describe('AdminrhRoleComponent', () => {
  let component: AdminrhRoleComponent;
  let fixture: ComponentFixture<AdminrhRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhRoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
