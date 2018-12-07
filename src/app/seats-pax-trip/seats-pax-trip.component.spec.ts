import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsPaxTripComponent } from './seats-pax-trip.component';

describe('SeatsPaxTripComponent', () => {
  let component: SeatsPaxTripComponent;
  let fixture: ComponentFixture<SeatsPaxTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatsPaxTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsPaxTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
