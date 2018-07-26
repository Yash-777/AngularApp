import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollPositionComponent } from './scroll-position.component';

describe('ScrollPositionComponent', () => {
  let component: ScrollPositionComponent;
  let fixture: ComponentFixture<ScrollPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
