
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  AdminrhSidebarComponent } from './adminrh-sidebar.component';

describe('AdminrhSidebarComponent', () => {
  let component: AdminrhSidebarComponent;
  let fixture: ComponentFixture<AdminrhSidebarComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminrhSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
