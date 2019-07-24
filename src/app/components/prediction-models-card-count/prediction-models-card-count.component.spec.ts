import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionModelsCardCountComponent } from './prediction-models-card-count.component';

describe('PredictionModelsCardCountComponent', () => {
  let component: PredictionModelsCardCountComponent;
  let fixture: ComponentFixture<PredictionModelsCardCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictionModelsCardCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionModelsCardCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
