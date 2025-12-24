import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhStatementsComponent } from './adminrh-statements.component';

describe('AdminrhStatementsComponent', () => {
  let component: AdminrhStatementsComponent;
  let fixture: ComponentFixture<AdminrhStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminrhStatementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
