import { Component } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //templateUrl: './servers.component.html',
  //selector:'.app-servers',
  selector:'app-servers',
  template:`
    <app-server></app-server>
    <app-server></app-server>
    <app-warning-alert></app-warning-alert>
    <app-success-alert></app-success-alert>
    `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
