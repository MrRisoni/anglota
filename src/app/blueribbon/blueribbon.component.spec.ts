import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueribbonComponent } from './blueribbon.component';

describe('BlueribbonComponent', () => {
  let component: BlueribbonComponent;
  let fixture: ComponentFixture<BlueribbonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueribbonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueribbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
