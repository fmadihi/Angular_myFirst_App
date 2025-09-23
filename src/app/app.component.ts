import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Practice001Component } from './practice001/practice001.component';
import { Practice002Component } from './practice002/practice002.component';
import { TwoComponentComponent } from './two-component/two-component.component';
import { DirektiveComponent } from './direktive/direktive.component';
import { Basic_Background_highlighte_Directive } from './direktive/customDirective/Basic_Background_highlighte.directive';
import { RenderBasicBackgroundHilighteDirective } from './direktive/customDirective/render-basic-background-hilighte.directive';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ServerComponent,
    ServersComponent,
    Practice001Component,
    Practice002Component,
    TwoComponentComponent,
    TwoComponentComponent,
    DirektiveComponent,
    Basic_Background_highlighte_Directive,
    RenderBasicBackgroundHilighteDirective,
    StructureDirectiveComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit {
  title = 'first_app';
  name = 'Fatemeh Madihi';

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getData();
  }

  getDataFetch() {
    this.userService.getFetchApi();
  }

  addData(name:string){
    this.userService.setData(name)
  }
  showData(){
    this.userService.showNameList()

  }
}
