import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ServerComponent,ServersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first_app';
  name = 'Fatemeh Madihi'
}
