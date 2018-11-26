import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSegmentsComponent } from './flight-segments.component';

describe('FlightSegmentsComponent', () => {
  let component: FlightSegmentsComponent;
  let fixture: ComponentFixture<FlightSegmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightSegmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSegmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
