import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelHitPercentGraphComponent } from './model-hit-percent-graph.component';

describe('LastYearComplainsComponent', () => {
  let component: ModelHitPercentGraphComponent;
  let fixture: ComponentFixture<ModelHitPercentGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelHitPercentGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelHitPercentGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
