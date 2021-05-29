import { Component, OnInit } from '@angular/core';

@Component({
  // Angular does not support id selector or pseudo selector like hover also doesn't support
  selector: 'app-servers',
  // selector: '[app-servers]', // attribute selector
  // selector: '.app-servers', // class selector
  template: `<app-server></app-server><p>22</p><app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
