import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreseatComponent } from './preseat.component';

describe('PreseatComponent', () => {
  let component: PreseatComponent;
  let fixture: ComponentFixture<PreseatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreseatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
