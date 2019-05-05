import { Component, OnInit, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  template:any;	
  constructor(private ele:ElementRef, private renderer:Renderer2) { 
  	this.template = {
    	contents:[
    		{
    			question:{
    				style:{},
    				text: "What is the starting price?"
    			},
    			answer:[
    				{
    					header:{
    						text: "For day-of wedding coordination"
    					},
    					title:{
    						text:"$1000",
    						style:{"font-size":"32px", color:"#d7b065"}
    					} 
    				},
    				{
    					header:{
    						text: "For partial wedding planning"
    					},
    					title:{
    						text:"$2000",
    						style:{"font-size":"32px", color:"#d7b065"}
    					} 
    				},
    				{
    					header:{
    						text: "For full wedding planning"
    					},
    					title:{
    						text:"$5000",
    						style:{"font-size":"32px", color:"#d7b065"}
    					} 
    				},
    				{
    					header:{
    						text: "Hourly rate offered"
    					},
    					title:{
    						text:"$60",
    						style:{"font-size":"32px", color:"#d7b065"}
    					} 
    				}
    			],
    			is_array:true
    		},
    		{
    			question:{
    				style:{},
    				text: "What wedding events do you provide services for?"
    			},
    			answer:{
    				text:"Ceremony, Reception, Rehearsal Dinner"
    			}
    		},
    		{
    			question:{
    				style:{},
    				text: "What wedding events do you provide services for?"
    			},
    			answer:{
    				text:"Ceremony, Reception, Rehearsal Dinner"
    			}
    		},
    		{
    			question:{
    				style:{},
    				text: "What wedding planning services do you offer?"
    			},
    			answer:{
    				text:"Budget Analysis, Day-of Coordination, Event Design, Full Planning, Guest List Creation, Partial Planning, Timelines, To-Do Lists, Vendor Referrals"
    			}
    		},
    		{
    			question:{
    				style:{},
    				text: "What weddings do you have experience planning?"
    			},
    			answer:{
    				text:"Civil, Cultural, Destination, Eco-Friendly, Military, Non-Religious, Religious"
    			}
    		},
    		{
    			question:{
    				style:{},
    				text: "How many planners are on your team?"
    			},
    			answer:{
    				text:"2"
    			}
    		}
    	]	     
    };
  }

  ngOnInit() {
  }

}
