import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  userCreationStatus = 'No user was created!';
  serverName = '';
  userName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  revealSecret = false;
  clickNumbers = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  onSubmitUser() {
    this.userCreationStatus = 'User name is ' + this.userName;
    this.userName='';
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onToggleSecret() {
    this.revealSecret = !this.revealSecret;
    //this.clickNumbers.push(this.clickNumbers.length + 1);
    this.clickNumbers.push(new Date());
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
