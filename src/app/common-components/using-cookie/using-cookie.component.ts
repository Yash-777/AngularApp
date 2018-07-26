import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-using-cookie',
  templateUrl: './using-cookie.component.html',
  styleUrls: ['./using-cookie.component.css']
})
export class UsingCookieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('UsingCookieComponent init method loaded.');
  }

  cookiePolicy(msg : string) : void {
    console.log('cookiePolicy function with message : ', msg );
    var footer = $('#footer_bottom_floating_line');
    footer.css({display: 'none'});
  }
}
/*
D:\AngularProjects\AngularApp>ng g component CommonComponent/using-cookie
installing component
  create src\app\common-component\using-cookie\using-cookie.component.css
  create src\app\common-component\using-cookie\using-cookie.component.html
  create src\app\common-component\using-cookie\using-cookie.component.spec.ts
  create src\app\common-component\using-cookie\using-cookie.component.ts
  update src\app\app.module.ts
*/