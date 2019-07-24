import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutModelsWinnersComponent } from './donut-models-winners.component';

describe('DonutModelsWinnersComponent', () => {
  let component: DonutModelsWinnersComponent;
  let fixture: ComponentFixture<DonutModelsWinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutModelsWinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutModelsWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
