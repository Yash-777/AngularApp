
import { Injectable } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service'; // Angular 4+
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    if ( localStorage.getItem('userLogged') == 'true' ) {
      // logged in so return true [ localStorage.setItem('userLogged', 'true') ]
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.redirectNavigationState('/login', state);
    return false;
    
  }

  //https://stackoverflow.com/a/42718707/5081877
  canActivateChild(route: ActivatedRouteSnapshot, state:  RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  // http://localhost:4200/?returnUrl=%2Fusers « http://localhost:4200/<navigate>?<queryParams>returnUrl=%2Fusers
  redirectNavigationState(path : string, state: RouterStateSnapshot) {
    this.router.navigate([ path ], { queryParams: { returnUrl: state.url }});
  }
}

/*
D:\AngularProjects\AngularApp>ng g service services/AuthenticatedRoutes/localStorage/AuthGuard
installing service
  create src\app\services\authenticated-routes\local-storage\auth-guard.service.spec.ts
  create src\app\services\authenticated-routes\local-storage\auth-guard.service.ts
  WARNING Service is generated but not provided, it must be provided to be used
*/