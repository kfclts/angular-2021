import { Component, OnInit } from '@angular/core';

@Component({
  // Angular does not support id selector or pseudo selector like hover also doesn't support
  selector: 'app-servers',
  // selector: '[app-servers]', // attribute selector
  // selector: '.app-servers', // class selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false
  serverCreationStatus = 'No server was created!'
  serverName = 'test server'

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!'
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    // this.serverName = (event.target as HTMLInputElement).value;
    // 1. We are receiving an event from HTML page and its of target in value. As its from HTML event, angular doesn't recognize it. So, we explicitly cast event.target  to (<HTMLInputElement>event.target)
    // If you are not familiar with casting , google it.
  }
}
