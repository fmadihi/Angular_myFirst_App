import { Component } from '@angular/core';
import { MainInputComponent } from './main-input/main-input.component';
import { MainShowComponent } from './main-show/main-show.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-two-component',
  imports: [MainInputComponent, MainShowComponent, NgFor],
  templateUrl: './two-component.component.html',
  styleUrl: './two-component.component.css',
})
export class TwoComponentComponent {
  serverItems: any[] = [];
  addBelowFunParent(addBelowEvent: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverItems.push({
      type: 'server',
      name: addBelowEvent.serverName,
      content: addBelowEvent.serverContent,
    });
  }

  addCopyBelowFunParent(addCopyBelowEvent: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverItems.push({
      type: 'copy',
      name: addCopyBelowEvent.serverName,
      content: addCopyBelowEvent.serverContent,
    });
  }
}
