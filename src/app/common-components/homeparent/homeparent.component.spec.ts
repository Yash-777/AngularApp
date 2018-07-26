import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeparentComponent } from './homeparent.component';

describe('HomeparentComponent', () => {
  let component: HomeparentComponent;
  let fixture: ComponentFixture<HomeparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
