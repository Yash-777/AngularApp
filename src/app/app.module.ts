import { TotoalCommnonComponents } from './common-components/totoalCommnonComponents';
import { AuthGuardService } from './services/authenticated-routes/local-storage/auth-guard.service';
import { UsersModule } from './users/users.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogIntoAppModule } from './log-into-app/log-into-app.module';
import { ViewdelayDirective } from './common-components/directives/viewdelay.directive';
import { HighlightElementDirective } from './common-components/directives/highlight-element.directive';
import { ReverseStrPipe } from './pipes/reverse-str.pipe';
import { FilterByPipe } from './pipes/filters/filter-by.pipe';
import { Viewdelay2Directive } from './common-components/directives/viewdelay2.directive';

@NgModule({
  declarations: [
    AppComponent,
    TotoalCommnonComponents,
    // UsingCookieComponent, ScrollBackToTopComponent, ScrollPositionComponent,
    // HomeComponent, HomeparentComponent
    ViewdelayDirective,
    HighlightElementDirective,
    
    ReverseStrPipe,
    FilterByPipe,
    Viewdelay2Directive,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    UsersModule,
    LogIntoAppModule
  ],
  providers: [ AuthGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
