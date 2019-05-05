import { Component, OnInit, HostListener, ElementRef, Renderer2} from '@angular/core';
import { BroadcastService } from './../broadcast.service';

@Component({
  selector: 'signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {
    private element: any;
    private dimension: any;
    private covers: any;
    private last: number;
    constructor(private broadcast: BroadcastService, private ele:ElementRef, private renderer:Renderer2) {
       let self = this;
       this.dimension = {};
       this.covers = [];
       this.last = 0;
       setTimeout(function(){
	      self.element = self.ele.nativeElement.querySelector('.signature');
	      self.dimension = self.element? self.element.getBoundingClientRect():{};
	      self.covers = self.element.querySelectorAll('.img');
	      for(let item of self.covers){
	      	let rec = item.getBoundingClientRect();
	      	item.height = rec.height;
	      	item.travelDistance = (rec.height + self.dimension.height)/2;
	      	item.fraction = item.travelDistance/self.dimension.height * 2;
	      }
      }, 300);
       }

    ngOnInit() {
    }

   
   @HostListener('window:scroll', ['$event'])
        track(event) {
       		if(!this.element) return;
       		this.dimension = this.element.getBoundingClientRect();
       		if((this.last==0 && this.dimension.y>0) || (this.last==-this.dimension.height && this.dimension.y < -this.dimension.height)) return;
       	
       		if(this.dimension.y < -this.dimension.height){
       			for(let item of this.covers)
       		  		this.renderer.setStyle(item, 'top', '-' + item.height + 'px');
       		  	return this.last = -this.dimension.height;
       		}
       		if(this.dimension.y > 0){
       			for(let item of this.covers)
       		  		this.renderer.setStyle(item, 'top', '50%');
       			return this.last = 0;
       		}

       		for(let item of this.covers){
       			this.renderer.setStyle(item, 'top', item.travelDistance + item.fraction*this.dimension.y - 100 + 'px');
       		}
       
       		
       		return this.last = this.dimension.y;
       	}

}
