import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.css']
})
export class Template2Component implements OnInit {
   @Input()template:any; 
  constructor() { }

  ngOnInit() {
  }

}
