import { Directive,  ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[horizontal-scroll]'
})
export class HorizontalScrollDirective {
  base: number;
  original:number;
  innerWidth: number;
  prevEvent: any;
  constructor( private ele:ElementRef, 
  			   private renderer:Renderer2) { 
  	this.base = 0;
  	this.original = this.ele.nativeElement.scrollWidth;
  	this.innerWidth = this.ele.nativeElement.clientWidth;
  }

  @HostListener("mousewheel", ['$event'])onMouseWheelChrome(event) {
   		this.mouseWheelFunc(event);
   };

  @HostListener('DOMMouseScroll', ['$event']) onMouseWheelFirefox(event: any) {
    this.mouseWheelFunc(event);
  }

  @HostListener('onmousewheel', ['$event']) onMouseWheelIE(event: any) {
    this.mouseWheelFunc(event);
  }

   @HostListener('touchend', ['$event']) touchEnd(event){
   	console.log("touchend");
   		event.wheelDelta = event.changedTouches[0].clientX - this.prevEvent.changedTouches[0].clientX;
        console.log();
        this.mouseWheelFunc(event);
   }
   
   @HostListener('mouseup', ['$event']) onMouseup(event) {
        event.wheelDelta = event.clientX - this.prevEvent.clientX;
        this.mouseWheelFunc(event);
    }

    @HostListener('touchstart', ['$event'])
    @HostListener('mousedown', ['$event']) onMousedown(event) {
    	console.log("dragstart");
        this.prevEvent = event;
    }

    mouseWheelFunc(event: any) {
    	let scrollWidth =  this.ele.nativeElement.querySelector('.card-content').scrollWidth;
	    let innerWidth = this.ele.nativeElement.querySelector('.card-content').clientWidth;
	    let delta = Math.max(-1, Math.min(1, (event.wheelDelta || - event.detail)));    
	    if(delta<0 && Math.abs(this.base - innerWidth) > this.original) return;
	    this.original = scrollWidth>this.original?scrollWidth:this.original;
	    if(delta<0 && scrollWidth + this.base <0)
	        this.base =  this.innerWidth - this.original;
	    else
	        this.base+=370*delta;
	    if(this.base>0) this.base=0;
	 	this.renderer.setStyle(this.ele.nativeElement.querySelector('.card-content'), 'transform', 'translateX('+this.base+'px)');
   		event.preventDefault();	
    }

}
