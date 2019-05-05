import { Component, OnInit, Input, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css']
})
export class Card3Component implements OnInit {
  @Input()template:any; 	
  selectedTemplate:any;
  constructor(private ele:ElementRef, private renderer:Renderer2) { 
  }

  ngOnInit() {
  	let self = this;	
  	let elementContainers:any;
  	let indx = 0;
  	let len = self.template.length;
 	let last = indx;
  		
  	setTimeout(function(){
  		elementContainers = self.ele.nativeElement.querySelectorAll('.container');
  		if(Array.isArray(self.template) && len){ 
  			self.addClasses(indx, self.template, elementContainers);
  		}	
  	}, 30);
  		 			
  	if(Array.isArray(self.template) && len>1){
  		setInterval(()=>{
  			last = indx;
  			indx = (len == indx+1) ?0:indx+1;
  			elementContainers[last].classList.add('animated', 'fadeOut');
   			self.addClasses(indx, self.template, elementContainers);
  			self.removeClasses(last, self.template, elementContainers);
  		}, 8000);
  	}
  }

  addClasses(indx, template, elementContainers){
  		elementContainers[indx].classList.add('animated', 'zoom-in', 'selected');
  	  	elementContainers[indx].querySelector('.info-container').classList.add('animated', 'fadeIn', 'dim');
  	  	if(template[indx].header) this.addDelayClass(elementContainers[indx], '.header', 'fadeInDown', 500);
  	  	if(template[indx].title) this.addDelayClass(elementContainers[indx], '.title', 'fadeInRight', 500);
  	  	if(template[indx].description) this.addDelayClass(elementContainers[indx], '.description', 'fadeInUp', 500);
  }

  removeClasses(indx, template, elementContainers){
  	setTimeout(function(){
  		elementContainers[indx].querySelector('.info-container').classList.remove('dim');
  	  	if(template[indx].header) elementContainers[indx].querySelector('.header').classList.remove('selected');
  	  	if(template[indx].title) elementContainers[indx].querySelector('.title').classList.remove('selected');
  	  	if(template[indx].description) elementContainers[indx].querySelector('.description').classList.remove('selected');
  		elementContainers[indx].classList.remove('animated', 'fadeOut', 'selected', 'zoom-in');
  	}, 3000);
  }

  addDelayClass(elem, className, animationName, timer){
  	setTimeout(()=>{
  		elem.querySelector(className).classList.add('animated', animationName, 'selected');
  	},timer);
  }
}
