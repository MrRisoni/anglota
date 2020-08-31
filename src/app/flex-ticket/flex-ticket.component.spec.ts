import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexTicketComponent } from './flex-ticket.component';

describe('FlexTicketComponent', () => {
  let component: FlexTicketComponent;
  let fixture: ComponentFixture<FlexTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
