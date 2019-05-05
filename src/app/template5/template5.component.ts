import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'template5',
  templateUrl: './template5.component.html',
  styleUrls: ['./template5.component.css']
})
export class Template5Component implements OnInit {
 @Input() template:any;
 base: number;
 original:number;
 innerWidth: number;
  constructor( private ele:ElementRef, 
  			   private renderer:Renderer2 ) { 
  	this.base = 0;
  	this.original = this.ele.nativeElement.scrollWidth;
  	this.innerWidth = this.ele.nativeElement.clientWidth;
  }

  ngOnInit() {
  }

}
