import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'service-offer',
  templateUrl: './service-offer.component.html',
  styleUrls: ['./service-offer.component.css']
})
export class ServiceOfferComponent implements OnInit {
  template:any;
  constructor() {
  	this.template = {
		  		header: {
					style: { "color": "#000", "font-size":"20px"},
					text: "Celebrating Your Moments Now happily customizes its services to give you and your significant other the special attention you deserve"
				},
				style:{ "background-color": "transparent", "opacity": 1},
		  	
		  		cards:[
			  		{
			  			version: 1,
			 			image: "assets/imgs/consulation.jpg",
				  		// header: {
					  	// 	style: { "color": "#000", "font-size":"20px", "letter-spacing": "5px"},
					  	// 	text: "Information"
					  	// },
				  		title: {
				  			style: {"color": "rgba(0,0,0,0.75)", "font-size": "25px", "letter-spacing": "3px"},
				  			"text": "Consultation"
				  		},
			  		},
			  		{
			  			version: 1,
			 			image: "assets/imgs/budget_analysis.jpg",
				  		// header: {
					  	// 	style: { "color": "#000", "font-size":"20px", "letter-spacing": "5px"},
					  	// 	text: "Information"
					  	// },
				  		title: {
				  			style: {"color": "rgba(0,0,0,0.75)", "font-size": "25px", "letter-spacing": "3px"},
				  			"text": "Budget analysis"
				  		},
			  		},
			  		{
			  			version: 1,
			 			image: "assets/imgs/planning.jpg",
				  		// header: {
					  	// 	style: { "color": "#000", "font-size":"20px", "letter-spacing": "5px"},
					  	// 	text: "Information"
					  	// },
				  		title: {
				  			style: {"color": "rgba(0,0,0,0.75)", "font-size": "25px", "letter-spacing": "3px"},
				  			"text": "Planning"
				  		},
			  		},
			  		{
			  			version: 1,
			 			image: "assets/imgs/todolist.jpg",
				  		// header: {
					  	// 	style: { "color": "#000", "font-size":"20px", "letter-spacing": "5px"},
					  	// 	text: ""
					  	// },
				  		title: {
				  			style: {"color": "rgba(0,0,0,0.75)", "font-size": "25px", "letter-spacing": "3px"},
				  			"text": "Todo Lists"
				  		},
			  		},
			  		{
			  			version: 1,
			 			image: "assets/imgs/referral.jpg",
				  		// header: {
					  	// 	style: { "color": "#000", "font-size":"20px", "letter-spacing": "5px"},
					  	// 	text: "Information"
					  	// },
				  		title: {
				  			style: {"color": "rgba(0,0,0,0.75)", "font-size": "25px", "letter-spacing": "3px"},
				  			"text": "Referrals"
				  		},
			  		},
			  		{
			  			version: 1,
			 			image: "assets/imgs/timeline.jpg",
				  		// header: {
					  	// 	style: { "color": "#000", "font-size":"20px", "letter-spacing": "5px"},
					  	// 	text: "Information"
					  	// },
				  		title: {
				  			style: {"color": "rgba(0,0,0,0.75)", "font-size": "25px", "letter-spacing": "3px"},
				  			"text": "Timelines"
				  		},
			  		}
		  		]
		  	};
  }

  ngOnInit() {
  }

}
