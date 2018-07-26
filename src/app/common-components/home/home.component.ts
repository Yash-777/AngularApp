import { HomeparentComponent } from './../homeparent/homeparent.component';
import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends HomeparentComponent implements OnInit {

  constructor() {
    super(); /* To call parent component constructor.*/
  }

  @Input() data: any[];
  @Input() items: string[];
  
  // based on this data we generate HTML element from UI. using *ngFor()
  // To send data out of components via outputs, start by defining the outputs attribute.
  // It accepts a list of output parameters that a component exposes to its parent.
  @Output() strData : String = "@Output(): String data from Component.";
  @Output() arrayData : String[] = [ "1", "2", "3", "..." ];

  // Using for HTML element operation, no need to send for UI. As we perform JS operations from component.
  lines : string[] = [ "1", "2", "3", "...", "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ];
  timePeriod : number = 2000;

  ngOnInit() {
    console.log('Data : ', this.data);
    console.log('Items : ', this.items);

    this.typeWriterEffect();
  }

  num = 0;
  increment() {
    this.num++;
  }

  showBindingEle : boolean = true;
  showBindingEleValue : string = 'Hide';
  showDataBinding() : void {
    if( this.showBindingEle ) {
      this.showBindingEle = false;
      this.showBindingEleValue = 'Show';
    } else {
      this.showBindingEle = true;
      this.showBindingEleValue = 'Hide';
    }
  }

  typeWriterEffect() : void {
    
    var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };
    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(function() { that.tick(); }, delta);
    };

    var elements = $('.typewrite');
    new TxtType(elements[0], this.lines, this.timePeriod);
    // this.lines « if it string as array then use json.parse( lines ).

    /*
    window.onload = function() {
       // here this refers to window.
       function textEffect() {
        //ERROR TypeError: Cannot read property 'lines' of undefined at textEffect
       }
    };
    */
  }
}
/*
D:\AngularProjects\AngularApp>ng g component CommonComponents/home
installing component
  create src\app\common-components\home\home.component.css
  create src\app\common-components\home\home.component.html
  create src\app\common-components\home\home.component.spec.ts
  create src\app\common-components\home\home.component.ts
  update src\app\app.module.ts
*/