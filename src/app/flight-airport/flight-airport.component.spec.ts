import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightAirportComponent } from './flight-airport.component';

describe('FlightAirportComponent', () => {
  let component: FlightAirportComponent;
  let fixture: ComponentFixture<FlightAirportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightAirportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
