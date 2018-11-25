import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsRowComponent } from './seats-row.component';

describe('SeatsRowComponent', () => {
  let component: SeatsRowComponent;
  let fixture: ComponentFixture<SeatsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
