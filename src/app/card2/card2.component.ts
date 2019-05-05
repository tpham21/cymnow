import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {
  @Input()template:any; 	
  selectedTemplate:any;
  constructor() { 
  }

  ngOnInit() {
  	this.selectedTemplate = !this.template?{}:
  							(Array.isArray(this.template)?
  								(this.template.length?this.template[0]:{}):
  							this.template);
  	console.log(this.selectedTemplate);
  	if(Array.isArray(this.template) && this.template.length>1){
  		let indx = 1;
  		setInterval(()=>{
  			this.selectedTemplate = this.template[indx];
  			indx = (this.template.length == indx+1) ?0:indx+1
  		}, 3000);
  	}
  }

}
