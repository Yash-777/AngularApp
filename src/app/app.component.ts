import { StyleAttributeService } from './services/html-element/style-attribute.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { LoadedRouterConfig } from '@angular/router/src/config';
import { UsingCookieComponent } from './common-components/using-cookie/using-cookie.component';
import { ScrollPositionComponent } from './common-components/scroll-position/scroll-position.component';
import { ScrollBackToTopComponent } from './common-components/scroll-back-to-top/scroll-back-to-top.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'application';

  // @ViewChild("component1") childComp: Component1;
  @ViewChild("childComp") acceptCookie: UsingCookieComponent;
  @ViewChild("scrolledTill") scrollPosition: ScrollPositionComponent;
  @ViewChild("scrollTop") backToTop: ScrollBackToTopComponent;
  
  constructor() {
    console.log('AppComponent constructor is loaded.');
    //localStorage.setItem('userLogged', 'false');
    // Fasing problem that after login, if i refresh the browser then Angular AppComponent is loading,
    // constructor is getting LoadedRouterConfig.
  }

  
  public ngOnInit() {
    
    //this.progressBarPercentageHTML();
  }
  

}
