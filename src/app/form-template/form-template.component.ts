import { Component, OnInit, Input, ViewChild, NgZone } from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

@Component({
  selector: 'form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {
   @Input()structures:any; 	
   @Input()model:any; 	
   constructor(private ngZone: NgZone) {}

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  ngOnInit() {

  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
