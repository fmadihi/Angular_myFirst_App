import { Component } from '@angular/core';

// selector: همان نامکامپوننت است
// یعنی با چه تگی صدا زده بشه
// <app-server></app-server>

// templateUrl: آدرس فایل html قرار میگیره
@Component({
  selector: 'app-server',
  //   imports: [],
  templateUrl: './server.component.html',
  //   styleUrl: './app.component.css'
})
export class ServerComponent {
  serverName: string = 'Fatemeh Madihi';
  serverId: number = 1;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
