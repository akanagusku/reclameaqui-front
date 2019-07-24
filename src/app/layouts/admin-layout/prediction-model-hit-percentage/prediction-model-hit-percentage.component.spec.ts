import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionModelHitPercentageComponent } from './prediction-model-hit-percentage.component';

describe('PredictionModelHitPercentageComponent', () => {
  let component: PredictionModelHitPercentageComponent;
  let fixture: ComponentFixture<PredictionModelHitPercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictionModelHitPercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionModelHitPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
