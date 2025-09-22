import { NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RenderBasicBackgroundHilighteDirective } from './customDirective/render-basic-background-hilighte.directive';

@Component({
  selector: 'app-direktive',
  imports: [NgForOf, NgIf, NgClass,NgStyle,RenderBasicBackgroundHilighteDirective],
  templateUrl: './direktive.component.html',
  styleUrl: './direktive.component.css',
  // styles: [
  //   `
  //     .odd {
  //       background: red;
  //     }
  //     .even {
  //       background: green;
  //     }
  //   `,
  // ],
})
export class DirektiveComponent {
  oddNumber = [1, 3, 5];
  evenNumber = [2, 4];
  onlyOdd = false;
}
