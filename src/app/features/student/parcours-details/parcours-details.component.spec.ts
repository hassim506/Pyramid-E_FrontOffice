import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursDetailsComponent } from './parcours-details.component';

describe('ParcoursDetailsComponent', () => {
  let component: ParcoursDetailsComponent;
  let fixture: ComponentFixture<ParcoursDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParcoursDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcoursDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
