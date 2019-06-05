import { Component, OnInit } from '@angular/core';
import { FORMDATA } from '../form_data';
@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  structures:any;
  model:any;
  constructor() {
  	console.log(FORMDATA);
  	this.structures = FORMDATA;
  	this.model = {};
  }

  ngOnInit() {
  }

}
