import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainWithoutEvaluationComponent } from './complain-without-evaluation.component';

describe('ComplainWithoutEvaluationComponent', () => {
  let component: ComplainWithoutEvaluationComponent;
  let fixture: ComponentFixture<ComplainWithoutEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainWithoutEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainWithoutEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
