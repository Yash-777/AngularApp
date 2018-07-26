import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-back-to-top',
  templateUrl: './scroll-back-to-top.component.html',
  styleUrls: ['./scroll-back-to-top.component.css']
})
export class ScrollBackToTopComponent implements OnInit {

  constructor() { 
  }
  
  ngOnInit() {
    this.scrollCheck( 100 );
  }
  
  scrollToApplicationTop( msg : string ) : void {
    console.log('scrollApplicationTop method called with Message : ', msg);
    // window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    $("html,body").animate({scrollTop:0},"slow");
  }
  
  scrollCheck( value : number) : void {
    var checkScroll = function() {
      // if( $(window).height()+value < $(document).height() ) {
      if( ( $(window).scrollTop() + ($(window).height()/2) ) > $(window).height() ) {
        // console.log('Show Scroll Top');
        $("#back-to-top").removeClass('affix-top').addClass('affix');
      } else {
        // console.log('Hide Scroll Top');
        $("#back-to-top").removeClass('affix').addClass('affix-top');
      }
    }
    $(document).on( 'scroll', checkScroll );
    $(window).on( 'resize', checkScroll );

  }
}

/*
D:\AngularProjects\AngularApp>ng g component CommonComponents/ScrollBackToTop
installing component
  create src\app\common-components\scroll-back-to-top\scroll-back-to-top.component.css
  create src\app\common-components\scroll-back-to-top\scroll-back-to-top.component.html
  create src\app\common-components\scroll-back-to-top\scroll-back-to-top.component.spec.ts
  create src\app\common-components\scroll-back-to-top\scroll-back-to-top.component.ts
  update src\app\app.module.ts
*/
