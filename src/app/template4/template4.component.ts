import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'template4',
  templateUrl: './template4.component.html',
  styleUrls: ['./template4.component.css']
})
export class Template4Component implements OnInit {
  @Input()template:any; 	
  constructor() { }

  ngOnInit() {
  }

}
