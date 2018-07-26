import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-position',
  templateUrl: './scroll-position.component.html',
  styleUrls: ['./scroll-position.component.css']
})
export class ScrollPositionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.progressBarPercentageCSS();
  }

  progressBarPercentageCSS() : void {
    $(document).ready(function() {
      //alert("JQuery Code is working.");
    
      var progressBar=$('.progress-bar');
      //progressBar.css({width:'70%'});
      var value, width;

      var getMax=function(){
        /*var appdocument = document.body.clientHeight;
        var appdocumentView = window.innerHeight;
        return appdocument - appdocumentView*/
        
        return $(document).height()-$(window).height()
      }
      var getValue=function(){
        return $(window).scrollTop()
      }
      var getWidth=function(){
        value=getValue()
        width=(value/max)*100
        width=width+'%'
        return width
      }
      var setWidth=function(){
        progressBar.css({width:getWidth()})
      }
      
      var max=getMax()

      $(document).on( 'scroll', setWidth )
      $(window).on( 'resize', function(){ max=getMax(); setWidth(); } )
    });
    /*
    Divs with CSS « 
      https://blog.risingstack.com/
      https://alligator.io/angular/using-pipes-in-component-class/
    HTML <progress> Tag « 
      https://peter.grman.at/how-to-write-typescript-definition-files/
      https://www.w3schools.com/tags/tag_progress.asp
      https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress
    */
  }
  progressBarPercentageHTML() : void {
    $(document).ready(function() {
      var progressBar=$('.progress');
      progressBar.attr("max", $(document).height());

      var getValue=function(){
        return $(window).scrollTop()
      }

      var setWidth=function(){
        progressBar.attr("value", getValue());
      }

      $(document).on( 'scroll', setWidth )
      $(window).on( 'resize', function(){
        progressBar.attr("max", $(document).height()); setWidth(); 
      } )
    });
  }
}
/*
D:\AngularProjects\AngularApp>ng g component CommonComponents/scrollPosition
installing component
  create src\app\common-components\scroll-position\scroll-position.component.css
  create src\app\common-components\scroll-position\scroll-position.component.html
  create src\app\common-components\scroll-position\scroll-position.component.spec.ts
  create src\app\common-components\scroll-position\scroll-position.component.ts
  update src\app\app.module.ts
*/