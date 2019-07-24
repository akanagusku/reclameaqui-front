import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainListByModelComponent } from './complain-list-by-model.component';

describe('ComplainListComponent', () => {
  let component: ComplainListByModelComponent;
  let fixture: ComponentFixture<ComplainListByModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainListByModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainListByModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
