import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

// selector: همان نامکامپوننت است
// یعنی با چه تگی صدا زده بشه
// <app-server></app-server>

// templateUrl: آدرس فایل html قرار میگیره
@Component({
  selector: 'app-server',
    imports: [NgStyle,NgClass],
  templateUrl: './server.component.html',
  //   styleUrl: './app.component.css'
  styles:[`
    .online{
      color : white
    }`]
})
export class ServerComponent {
  serverName: string = 'Fatemeh Madihi';
  serverId: number = 1;
  serverStatus: string = 'offline';
  serverTXT: string = '';

  constructor() {
    this.serverTXT = Math.random() > 0.5 ? 'Offline' : 'Online';
  }

  getServerStatus() {
    return this.serverStatus;
  }
  getColor(){
    return this.serverTXT == 'Offline' ? '#ffa1a1' : '#61f161'
  }
  getTextColor(){
     return this.serverTXT == 'Online'
  }
}
