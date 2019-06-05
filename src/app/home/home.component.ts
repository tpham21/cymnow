import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  config:any;
  constructor(){
  	this.config = {
	  	section3:
	  	{
	  		header: {
					style: { "color": "#24243e", "letter-spacing": "10px"},
					text: "Services Offered"
			}
	  	},
	  	section4: {
	  		header: {
				style: { "color": "#24243e", "letter-spacing": "10px"},
				text: "Areas Covered"
			}
	  	},
	  	section5: {
	  		header: {
				style: { "color": "#24243e","letter-spacing": "10px"},
				text: "FAQ"
			}
	  	}
	}
  }

  ngOnInit() {
  }

}
