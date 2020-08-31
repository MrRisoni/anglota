import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCheckinComponent } from './web-checkin.component';

describe('WebCheckinComponent', () => {
  let component: WebCheckinComponent;
  let fixture: ComponentFixture<WebCheckinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebCheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
