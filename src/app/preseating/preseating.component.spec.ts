import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreseatingComponent } from './preseating.component';

describe('PreseatingComponent', () => {
  let component: PreseatingComponent;
  let fixture: ComponentFixture<PreseatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreseatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreseatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
