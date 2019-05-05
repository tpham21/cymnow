import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'template3',
  templateUrl: './template3.component.html',
  styleUrls: ['./template3.component.css']
})
export class Template3Component implements OnInit {
  @Input() template:any;
  constructor() { }

  ngOnInit() {
  }

}
