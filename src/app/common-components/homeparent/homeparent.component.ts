import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-homeparent',
  templateUrl: './homeparent.component.html',
  styleUrls: ['./homeparent.component.css']
})
export class HomeparentComponent implements OnInit {
  
  constructor() {
    console.log('ParentComponent « Data : ', this.data);
    console.log('ParentComponent « Items : ', this.items);
  }

  @Input() data: any[];
  @Input() items: string[];
  
  @Output() arrayData_parent : String[] = ["Parent" ,"1", "2", "3", "..." ];

  ngOnInit() {
    console.log('ngOnInit ParentComponent « Data : ', this.data);
    console.log('ngOnInit ParentComponent « Items : ', this.items);
  }

}
