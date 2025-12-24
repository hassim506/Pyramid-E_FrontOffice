import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminSettingNotificationsComponent } from './superadmin-setting-notifications.component';

describe('SuperadminSettingNotificationsComponent', () => {
  let component: SuperadminSettingNotificationsComponent;
  let fixture: ComponentFixture<SuperadminSettingNotificationsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminSettingNotificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminSettingNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
