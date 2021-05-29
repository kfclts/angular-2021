import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `<app-server></app-server><p>22</p><app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
