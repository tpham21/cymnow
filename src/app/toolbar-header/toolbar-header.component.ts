import { Component, OnInit, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'toolbar-header',
  templateUrl: './toolbar-header.component.html',
  styleUrls: ['./toolbar-header.component.css']
})
export class ToolbarHeaderComponent implements OnInit {
	private scrollPosition:number;
	private element:any;
  constructor(private ele:ElementRef, private renderer:Renderer2) {
  	let self = this;
  	setTimeout(function() {
	  	self.scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  		self.element = self.ele.nativeElement.querySelector('.toolbar-header');
  		self.renderer.setStyle(self.element, 'opacity', '1');
       	self.renderer.setStyle(self.element, 'height', '80px');
  	}, 50);
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
        track(event) {
        	if(!this.element) return;
 			let position = window.pageYOffset || document.documentElement.scrollTop;
 			 if(this.scrollPosition == position) return;
 			 if(position==0){
 			 	this.renderer.setStyle(this.element, 'opacity', '1');
       		 	this.renderer.setStyle(this.element, 'height', '80px');
       			return;
 			 }
 			 if(this.scrollPosition<position){ 
       		 	this.renderer.setStyle(this.element, 'opacity', '0');
       		 	this.renderer.setStyle(this.element, 'height', '0px');
       		 }
       		 else{
       		 	this.renderer.setStyle(this.element, 'opacity', '1');
       		 	this.renderer.setStyle(this.element, 'height', '80px');
       		
       		}
       		this.scrollPosition = position;
       	}
}
