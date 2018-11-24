import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagOptionComponent } from './bag-option.component';

describe('BagOptionComponent', () => {
  let component: BagOptionComponent;
  let fixture: ComponentFixture<BagOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
