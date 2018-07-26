import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { StyleAttributeService } from '../services/html-element/style-attribute.service';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LoginComponent, LogoutComponent],
  exports: [LoginComponent],
  providers: [StyleAttributeService]
})
export class LogIntoAppModule { }

/*
D:\AngularProjects\AngularApp>ng g module logIntoApp
installing module
  create src\app\log-into-app\log-into-app.module.ts
  WARNING Module is generated but not provided, it must be provided to be used
*/