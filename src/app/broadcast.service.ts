import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {
  private channels:any = {};

  constructor(){
  	console.log("inside constructor");
  }

  register(channelName:string){
  	 if(!this.channels[channelName]){
  	 	console.log("Im in here");
  	 	this.channels[channelName] = { "source": new Subject<string>()};
  	 	this.channels[channelName]['observable'] = this.channels[channelName]['source'].asObservable();
  	 	this.channels[channelName]['announce'] = function(val:any){
  	 		this.channels[channelName]['source'].next(val);
  	 	}
  	 	this.channels[channelName]['subscribe'] = function(callback:any){
  	 		this.channels[channelName]['observable'].subscribe(callback);
  	 	}
  	 }
  	 return this.channels[channelName];
  }

  unregister(channelName:string){
  	delete this.channels[channelName];
  }
}
