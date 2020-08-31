import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundDelayComponent } from './refund-delay.component';

describe('RefundDelayComponent', () => {
  let component: RefundDelayComponent;
  let fixture: ComponentFixture<RefundDelayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundDelayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
