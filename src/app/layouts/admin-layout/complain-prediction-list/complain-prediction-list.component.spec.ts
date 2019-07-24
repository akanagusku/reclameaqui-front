import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainPredictionListComponent } from './complain-prediction-list.component';

describe('TableListComponent', () => {
  let component: ComplainPredictionListComponent;
  let fixture: ComponentFixture<ComplainPredictionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainPredictionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainPredictionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
