import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainDetailPredictionComponent } from './complain-detail-prediction.component';

describe('ComplainDetailPredictionComponent', () => {
  let component: ComplainDetailPredictionComponent;
  let fixture: ComponentFixture<ComplainDetailPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainDetailPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainDetailPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
