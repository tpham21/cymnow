import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'button1',
  templateUrl: './button1.component.html',
  styleUrls: ['./button1.component.css']
})
export class Button1Component implements OnInit {
  @Input()template: any;	
  constructor() { 
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
   }

}
