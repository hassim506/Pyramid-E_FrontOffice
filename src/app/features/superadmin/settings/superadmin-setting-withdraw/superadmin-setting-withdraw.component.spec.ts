import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminSettingWithdrawComponent } from './superadmin-setting-withdraw.component';

describe('SuperadminSettingWithdrawComponent', () => {
  let component: SuperadminSettingWithdrawComponent;
  let fixture: ComponentFixture<SuperadminSettingWithdrawComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminSettingWithdrawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminSettingWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
