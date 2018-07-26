import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appViewdelay]'
})
export class ViewdelayDirective {

  constructor( private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {

  }
  
  @Input('appViewdelay') set appDelayAliyas(delay: number) {
    this.viewContainer.clear();
    setTimeout(() =>
    { 
    this.viewContainer.createEmbeddedView( this.templateRef );
    }, delay);
  }

}
/*
D:\AngularProjects\AngularApp>ng g directive CommonComponents/directives/viewdelay
installing directive
  create src\app\common-components\directives\viewdelay.directive.spec.ts
  create src\app\common-components\directives\viewdelay.directive.ts
  update src\app\app.module.ts

URL « https://www.concretepage.com/angular-2/angular-2-custom-structural-directive-example

Create a setter method decorated with @Input(). We need to take care that the method name
should be same as directive name. Find the code snippet.
  @Input() set cpIf(condition: boolean) { 
  }
If we want different method name then @Input() alias should be same as directive name.
Find the code snippet.
  @Input('cpIf') set myCpIf(condition: boolean) { 
  } 

*/