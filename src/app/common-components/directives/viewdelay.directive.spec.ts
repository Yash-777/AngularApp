import { TemplateRef, ViewContainerRef } from '@angular/core';
import { ViewdelayDirective } from './viewdelay.directive';

describe('ViewdelayDirective', () => {
  it('should create an instance', () => {
    // private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef
    const directive = new ViewdelayDirective( );
    expect(directive).toBeTruthy();
  });
});
/*
Cannot create an instance of an abstract class.
*/