import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainPredictionCountComponent } from './complain-prediction-count.component';

describe('ComplainPredictionCountComponent', () => {
  let component: ComplainPredictionCountComponent;
  let fixture: ComponentFixture<ComplainPredictionCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainPredictionCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainPredictionCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
