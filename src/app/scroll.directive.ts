import { Directive, HostListener} from '@angular/core';
import { BroadcastService } from './broadcast.service';
@Directive({
  selector: '[scroll]'
})

export class ScrollDirective {
    private channel:any;
	
  constructor(private broadcast: BroadcastService) { 
  	this.channel = this.broadcast.register('scroll');
  }

  @HostListener('window:scroll', ['$event'])
    track(event) {
    
   }
}
