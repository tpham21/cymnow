import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css']
})
export class Template1Component implements OnInit {
  @Input()template: any;
  selectedTemplate: any;
  constructor() {
  }

  ngOnInit() {
  	if(Array.isArray(this.template)){
  		if(this.template.length){
  			this.selectedTemplate = this.template[0];
  			let index = 1;
  			if(this.template.length>1)
  			setInterval(function(){
  				this.selectedTemplate = this.template[index];
  				if(index + 1 > this.template.length) return index =0;
  				return index++;
  			}, 3000);
  		}
  		else
  			this.selectedTemplate = {};
  	}else
  		this.selectedTemplate = this.template||{};

  }

}
