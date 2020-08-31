import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaNejUpsaleComponent } from './ja-nej-upsale.component';

describe('JaNejUpsaleComponent', () => {
  let component: JaNejUpsaleComponent;
  let fixture: ComponentFixture<JaNejUpsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaNejUpsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaNejUpsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
