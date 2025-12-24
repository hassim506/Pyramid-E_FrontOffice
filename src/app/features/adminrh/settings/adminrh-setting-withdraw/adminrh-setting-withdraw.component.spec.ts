import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhSettingWithdrawComponent } from './adminrh-setting-withdraw.component';

describe('AdminrhSettingWithdrawComponent', () => {
  let component: AdminrhSettingWithdrawComponent;
  let fixture: ComponentFixture<AdminrhSettingWithdrawComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhSettingWithdrawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminrhSettingWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
