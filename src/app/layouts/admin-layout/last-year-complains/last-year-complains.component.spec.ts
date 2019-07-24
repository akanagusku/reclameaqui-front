import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastYearComplainsComponent } from './last-year-complains.component';

describe('LastYearComplainsComponent', () => {
  let component: LastYearComplainsComponent;
  let fixture: ComponentFixture<LastYearComplainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastYearComplainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastYearComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
