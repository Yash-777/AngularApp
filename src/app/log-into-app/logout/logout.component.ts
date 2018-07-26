import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent extends LoginComponent implements OnInit {

  ngOnInit() {
    console.log('LogoutComponent ngOnInit funciton get loaded.');
    this.logout();
  }

  logout() {
    
    if ( localStorage.getItem('userLogged') == 'true' ) {
      console.log('Valid Credentials. ');
    }
    localStorage.setItem('userLogged', 'false');
    this.redirectNavigation('/users');
  }
}
/*
D:\AngularProjects\AngularApp>ng g component log-into-app/logout
installing component
  create src\app\log-into-app\logout\logout.component.css
  create src\app\log-into-app\logout\logout.component.html
  create src\app\log-into-app\logout\logout.component.spec.ts
  create src\app\log-into-app\logout\logout.component.ts
  update src\app\log-into-app\log-into-app.module.ts
*/
