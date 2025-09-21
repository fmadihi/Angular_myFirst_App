import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Practice001Component } from './practice001/practice001.component';
import { Practice002Component } from './practice002/practice002.component';
import { TwoComponentComponent } from "./two-component/two-component.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ServerComponent, ServersComponent, Practice001Component, Practice002Component, TwoComponentComponent,TwoComponentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first_app';
  name = 'Fatemeh Madihi';

}
