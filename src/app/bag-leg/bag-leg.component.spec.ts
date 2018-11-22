import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagLegComponent } from './bag-leg.component';

describe('BagLegComponent', () => {
  let component: BagLegComponent;
  let fixture: ComponentFixture<BagLegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagLegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagLegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
