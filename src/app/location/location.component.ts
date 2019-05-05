import { Component, OnInit, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  template:any;	
  selectedTemplate:any;
  constructor(private ele:ElementRef, private renderer:Renderer2) { 
    this.template = {
          header: {
          style: { "color": "#000"},
          text: "Celebrating Your Moments Now provides wedding planning services to couples located in and around Fairfax. Services are also extended to those throughout"
        },
        style:{ "background-color": "transparent", "opacity": 1},
        
          cards:[
            {
            image: "assets/imgs/virginia.jpg",
              title: {
                style: {"color": "#fff", "font-size": "30px", "letter-spacing": "3px"},
                "text": "Virginia"
              },
            },
            {
            image: "assets/imgs/washingtonDC.jpg",
              title: {
                style: {"color": "#fff", "font-size": "30px", "letter-spacing": "3px"},
                "text": "Washington DC"
              },
            },
            {
              image: "assets/imgs/maryland.jpg",
              title: {
                style: {"color": "#fff", "font-size": "30px", "letter-spacing": "3px"},
                "text": "Maryland"
              },
            },
            {
              image: "assets/imgs/philadelphia.jpg",
              title: {
                style: {"color": "#fff", "font-size": "30px", "letter-spacing": "3px"},
                "text": "Philadelphia"
              },
            },
            {
            image: "assets/imgs/newJersey.jpg",
              title: {
                style: {"color": "#fff", "font-size": "30px", "letter-spacing": "3px"},
                "text": "New Jersey"
              },
            },
            {
            image: "assets/imgs/newyork.jpg",
              title: {
                style: {"color": "#fff", "font-size": "30px", "letter-spacing": "3px"},
                "text": "New York"
              },
            },
            {
            image: "assets/imgs/texas.jpg",
              title: {
                style: {"color": "#fff", "font-size": "30px", "letter-spacing": "3px"},
                "text": "Texas"
              },
            }
          ]
        };
  }
  ngOnInit() {
  	let self = this;	
  	let elementContainers:any;
  	let indx = 0;
  	let len = self.template.cards.length;
 	let last = indx;
  		
  	setTimeout(function(){
  		elementContainers = self.ele.nativeElement.querySelectorAll('.card-container');
  		if(Array.isArray(self.template.cards) && len){ 
  			self.addClasses(indx, self.template.cards, elementContainers);
  		}	
  	}, 30);
  		 			
  	if(Array.isArray(self.template.cards) && len>1){
  		setInterval(()=>{
  			last = indx;
  			indx = (len == indx+1) ?0:indx+1;
  			elementContainers[last].classList.add('animated', 'fadeOut');
   			self.addClasses(indx, self.template.cards, elementContainers);
  			self.removeClasses(last, self.template.cards, elementContainers);
  		}, 5000);
  	}
  }

  addClasses(indx, template, elementContainers){
  		elementContainers[indx].classList.add('animated', 'fadeInRight', 'selected');
  	  	elementContainers[indx].querySelector('.info-content').classList.add('animated', 'fadeIn');
  	  	if(template[indx].header) this.addDelayClass(elementContainers[indx], '.header', 'fadeInDown', 500);
  	  	if(template[indx].title) this.addDelayClass(elementContainers[indx], '.title', 'fadeIn', 500);
  	  	if(template[indx].description) this.addDelayClass(elementContainers[indx], '.description', 'fadeInUp', 500);
  }

  removeClasses(indx, template, elementContainers){
  	setTimeout(function(){
  	  	if(template[indx].header) elementContainers[indx].querySelector('.header').classList.remove('selected');
  	  	if(template[indx].title) elementContainers[indx].querySelector('.title').classList.remove('selected');
  	  	if(template[indx].description) elementContainers[indx].querySelector('.description').classList.remove('selected');
  		elementContainers[indx].classList.remove('animated', 'fadeOut', 'selected', 'fadeInRight');
  	}, 3000);
  }

  addDelayClass(elem, className, animationName, timer){
  	setTimeout(()=>{
  		elem.querySelector(className).classList.add('animated', animationName, 'selected');
  	},timer);
  }
}
