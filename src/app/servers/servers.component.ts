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
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
  }

}
