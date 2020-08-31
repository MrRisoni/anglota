import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BRBComponent } from './brb.component';

describe('BRBComponent', () => {
  let component: BRBComponent;
  let fixture: ComponentFixture<BRBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BRBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BRBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
