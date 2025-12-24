import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminStatementsComponent } from './superadmin-statements.component';

describe('SuperadminStatementsComponent', () => {
  let component: SuperadminStatementsComponent;
  let fixture: ComponentFixture<SuperadminStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperadminStatementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
