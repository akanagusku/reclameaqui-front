import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainCreationAnswerDatediffComponent } from './complain-creation-answer-datediff.component';

describe('ComplainCreationAnswerDatediffComponent', () => {
  let component: ComplainCreationAnswerDatediffComponent;
  let fixture: ComponentFixture<ComplainCreationAnswerDatediffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainCreationAnswerDatediffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainCreationAnswerDatediffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
