import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'info3',
  templateUrl: './info3.component.html',
  styleUrls: ['./info3.component.css']
})
export class Info3Component implements OnInit {
  @Input() template:any;	

  constructor() { }

  ngOnInit() {
  }

}
