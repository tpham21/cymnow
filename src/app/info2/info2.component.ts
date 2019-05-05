import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'info2',
  templateUrl: './info2.component.html',
  styleUrls: ['./info2.component.css']
})
export class Info2Component implements OnInit {
  @Input() template:any;	
  constructor() { }

  ngOnInit() {
  }

}
