import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  template:any;
  constructor() { 
  	this.template = [
	  			{
	  				image: "assets/imgs/wedding.jpg",
					title:{
	  					text:"Celebrating Your Moments Now",
	  					style: {
	  						"font-size": "75px",
	  						"letter-spacing": "10px",
	  						"font-family": "font2",
	  						"color": "white"
	  					}
	  				},
	  				description:{
				  		style: {
				  			"color": "white", 
				  			"font-size": "20px", 
				  			"font-weight": "100", 
				  			"letter-spacing": "2px",
				  			"padding": "2% 15%"
				  		},
				  		text: 'A professional wedding planner in Fairfax, Virginia, Celebrating Your Moments Now provides ready-to-wed couples with stress-free planning services.'
				  	},	  			
	  			},
	  			{
	  				image:"assets/imgs/bouquets.jpg",
	  				description:{
				  		style: {
				  			"color": "white", 
				  			"font-size": "20px", 
				  			"font-weight": "100", 
				  			"letter-spacing": "2px",
				  			"padding": "0 15%"
				  		},
				  		text: 'Established in 2017, the company’s team of dedicated consultants pride themselves on ensuring each couple and vendor works together in harmony.'
				  	},
	  			},
	  			{
	  				image:"assets/imgs/tables.jpg",
	  				description:{
				  		style: {
				  			"color": "white", 
				  			"font-size": "20px", 
				  			"font-weight": "100", 
				  			"letter-spacing": "2px",
				  			"padding": "0 15%"
				  		},
				  		text: 'Creating a seamless, once-in-a-lifetime wedding experience, Celebrating Your Moments Now makes certain that attention is paid to even the smallest detail!'
				  	},
	  			},
	  			{
	  				image:"assets/imgs/IMG_5806.jpg",
	  				description:{
				  		style: {
				  			"color": "white", 
				  			"font-size": "20px", 
				  			"font-weight": "100", 
				  			"letter-spacing": "2px",
				  			"padding": "0 10%"
				  		},
				  		text: 'Celebrating Your Moments Now happily customizes its services to give you and your significant other the special attention you deserve'
				  	},
	  			},
	  			{
	  				image:"assets/imgs/background3.jpg",
	  				description:{
				  		style: {
				  			"color": "white", 
				  			"font-size": "20px", 
				  			"font-weight": "100", 
				  			"letter-spacing": "2px",
				  			"padding": "0 10%"
				  		},
				  		text: 'Celebrating Your Moments Now provides wedding planning services to couples located in and around Fairfax. Services are also extended to those throughout Maryland, New York, New Jersey, Pennsylvania, Texas and Washington D.C.'
				  	},
	  			}
	  		];	
  }

  ngOnInit() {
  }

}
