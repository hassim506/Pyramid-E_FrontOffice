import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperadminAuditLogsComponent } from './superadmin-audit-logs.component';

describe('SuperadminAuditLogsComponent', () => {
  let component: SuperadminAuditLogsComponent;
  let fixture: ComponentFixture<SuperadminAuditLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminAuditLogsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SuperadminAuditLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
