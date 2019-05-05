import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input()template:any; 	
  constructor() { }

  ngOnInit() {
  }

}
