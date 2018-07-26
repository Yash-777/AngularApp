import { AuthGuardService } from './services/authenticated-routes/local-storage/auth-guard.service';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './log-into-app/login/login.component';
import { LogoutComponent } from './log-into-app/logout/logout.component';
import { HomeComponent } from './common-components/home/home.component';

const routes: Routes = [
  {
    path: 'users',
    canActivate: [AuthGuardService],
    children: [
      { path: '', component: UsersComponent },
      { path: 'update/:id', component: UserComponent }
    ]
  },
  { path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule', canActivate: [AuthGuardService]},
  
  
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
  
  { path: '', redirectTo: '', pathMatch: 'full' }
  // otherwise redirect to home
  ,{ path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
