import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
