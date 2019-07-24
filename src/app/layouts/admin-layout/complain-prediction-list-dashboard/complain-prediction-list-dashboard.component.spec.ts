import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainPredictionListDashboardComponent } from './complain-prediction-list-dashboard.component';

describe('ComplainPredictionListDashboardComponent', () => {
  let component: ComplainPredictionListDashboardComponent;
  let fixture: ComponentFixture<ComplainPredictionListDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainPredictionListDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainPredictionListDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
