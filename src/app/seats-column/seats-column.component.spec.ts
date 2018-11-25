import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsColumnComponent } from './seats-column.component';

describe('SeatsColumnComponent', () => {
  let component: SeatsColumnComponent;
  let fixture: ComponentFixture<SeatsColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatsColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
