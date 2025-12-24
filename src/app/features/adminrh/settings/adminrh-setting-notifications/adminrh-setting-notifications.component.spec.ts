import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhSettingNotificationsComponent } from './adminrh-setting-notifications.component';

describe('AdminrhSettingNotificationsComponent', () => {
  let component: AdminrhSettingNotificationsComponent;
  let fixture: ComponentFixture<AdminrhSettingNotificationsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhSettingNotificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminrhSettingNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
