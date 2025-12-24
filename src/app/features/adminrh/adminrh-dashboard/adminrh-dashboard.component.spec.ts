import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhDashboardComponent } from './adminrh-dashboard.component';

describe('AdminrhDashboardComponent', () => {
  let component: AdminrhDashboardComponent;
  let fixture: ComponentFixture<AdminrhDashboardComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminrhDashboardComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
