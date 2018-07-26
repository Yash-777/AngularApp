import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StyleAttributeService } from '../../services/html-element/style-attribute.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'

  ,styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  model: any = {};
  loading = false;
  require: any;
  
  constructor(private route: ActivatedRoute,private router: Router, private styleService: StyleAttributeService) { }
  ngOnInit() {
    console.log('LoginComponent Initialized.');
    //this.styleService.addStyle('loginStyle', this.require('./login.component.css') );
  }
  ngOnDestroy() {
    console.log('LoginComponent Destroyed.');
    //this.styleService.removeStyle('loginStyle');
  }

  login() {
    let userName = this.model.username;
    let password = this.model.password;

    console.log( userName, password );
    if( userName == 'Yash' && password == 'admin' ) {
      console.log('Valid Credentials.');

      localStorage.setItem('userLogged', 'true');

      this.redirectNavigation('/users');
    } else {
      console.log('Invalid Credentials.');

      localStorage.setItem('userLogged', 'false');
    }
  }

  returnUrl: string;
  redirectNavigation( path:string ) {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnLogin'] || path;
    console.log('Navigation URL : ', this.returnUrl);
    this.router.navigate([this.returnUrl]);
  }
}
/*
D:\AngularProjects\AngularApp>ng g component log-into-app/login
installing component
  create src\app\log-into-app\login\login.component.css
  create src\app\log-into-app\login\login.component.html
  create src\app\log-into-app\login\login.component.spec.ts
  create src\app\log-into-app\login\login.component.ts
  update src\app\log-into-app\log-into-app.module.ts
*/