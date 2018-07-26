import { Injectable, Optional, Inject } from '@angular/core';


@Injectable()
export class StyleAttributeService {
  private stylesMap: Map<any, Node> = new Map();
  host: any;

  constructor() {
    this.host = document.head;
  }

  createStyleNode(content: string): Node {
    const styleEl = document.createElement('style');
    styleEl.textContent = content;
    return styleEl;
  }

  has(key: any): boolean {
    return this.stylesMap.has(key);
  }

  addStyle(key: any, style: string): void {
    const styleEl = this.createStyleNode(style);
    this.stylesMap.set(key, styleEl);
    this.host.appendChild(styleEl);
  }

  removeStyle(key: any): void {
    const styleEl = this.stylesMap.get(key);
    if (styleEl) {
      this.stylesMap.delete(key);
      this.host.removeChild(styleEl);
    }
  }
}
/* https://stackoverflow.com/a/48239417/5081877
D:\AngularProjects\AngularApp>ng g service services/HtmlElement/StyleAttribute
installing service
  create src\app\services\html-element\style-attribute.service.spec.ts
  create src\app\services\html-element\style-attribute.service.ts
  WARNING Service is generated but not provided, it must be provided to be used

*/