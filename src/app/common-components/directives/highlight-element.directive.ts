import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]'
})
export class HighlightElementDirective {
  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  @Input('appHighlightElement') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
/*
D:\AngularProjects\AngularApp>ng g directive CommonComponents/directives/highlightElement
installing directive
  create src\app\common-components\directives\highlight-element.directive.spec.ts
  create src\app\common-components\directives\highlight-element.directive.ts
  update src\app\app.module.ts
*/