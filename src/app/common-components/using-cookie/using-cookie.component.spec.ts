import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingCookieComponent } from './using-cookie.component';

describe('UsingCookieComponent', () => {
  let component: UsingCookieComponent;
  let fixture: ComponentFixture<UsingCookieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingCookieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
