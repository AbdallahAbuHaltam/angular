import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //templateUrl: './servers.component.html',
  //selector:'.app-servers',
  selector:'app-servers',
  //template:`
   // <app-server></app-server>
    //<app-server></app-server>
   // `,
   templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
  
})
export class ServersComponent implements OnInit{
  allowNewServer= false;
  serverCreationStatus='No server was created!';
  serverName='TestServer';
  serverCreated=false;
  servers=['TestServer','TestServer 2'];
  // username='';
  // emptyString=false
  constructor(){
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }
 ngOnInit() {
   
 }
 onCreateServer(){
  this.servers.push(this.serverName);
  this.serverCreated=true;
  this.serverCreationStatus='Server was created! Name is '+this.serverName;
 }
 onUpdateServerName(event:Event){
  console.log(event);
  this.serverName=(<HTMLInputElement>event.target).value;
 }
//  resetUsername(){
//   this.username='';
//  }
}
