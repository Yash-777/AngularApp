import { JsonFilterByPipe } from './../pipes/filters/json-filter-by.pipe';
import { AppRoutingModule } from './../app-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentDetailsService } from '../services/student/student-details.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [ StudentDetailsService ],
  declarations: [
    UsersComponent, UserComponent,
    
    JsonFilterByPipe,
  ],
  exports : [UsersComponent, UserComponent]
})
export class UsersModule {

  // ERROR Error: Uncaught (in promise): Error: UsersModule is already loaded.
  // To get error « form CustomersModule add UserModule like = @NgModule({ imports: [UsersModule ]})
  constructor ( @Optional() @SkipSelf() parentModule : UsersModule ) {
    if( parentModule ) {
      console.log('UsersModule is already loaded.');
      throw new Error('UsersModule is already loaded.');
    }
  }

   //https://www.slideshare.net/EyalV/angular-2-ngmodule
   /*
    We will use the forRoot method to return providers
    for the non-lazy loaded module and forChild for lazy loaded module

    @NgModule({})
    class A {
      static forRoot() {
        return {ngModule: A, providers: [AService]};
      }
      static forChild() {
        return {ngModule: A, providers: [BService]};
      }
    }

    @NgModule({
      imports: [A.forRoot()]
    })
    export class NonLazyLoadedModule {}

    @NgModule({
      imports: [A.forChild()]
    })
    export class LazyLoadedModule {}
   */
  /*static forRoot(config: StudentDetailsService): ModuleWithProviders {
    return {
      ngModule: UsersModule,
      providers: [
        { provide: StudentDetailsService, useValue: config }
      ]
    };
  }*/
}
