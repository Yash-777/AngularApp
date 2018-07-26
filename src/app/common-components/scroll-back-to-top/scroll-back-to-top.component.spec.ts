import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollBackToTopComponent } from './scroll-back-to-top.component';

describe('ScrollBackToTopComponent', () => {
  let component: ScrollBackToTopComponent;
  let fixture: ComponentFixture<ScrollBackToTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollBackToTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollBackToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
