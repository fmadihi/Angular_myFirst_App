import { NgIf, NgForOf, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-practice002',
  imports: [NgIf, NgForOf, NgClass],
  templateUrl: './practice002.component.html',
  // styleUrl: './practice002.component.css',
  styles: [
    `
      .blueWhite {
        background-color: blue;
        color: white;
      }
    `,
  ],
})
export class Practice002Component {
  isShowPara: boolean = false;
  // textArray: any[] = [1];
  textArray: any[] = [];
  isBlueWhite: boolean = false;
  constructor() {
   
  }
  changeIsShowParaFunc() {
    this.isShowPara = !this.isShowPara;
    // this.textArray.push(this.textArray[this.textArray.length - 1] + 1);
    this.textArray.push(new Date().toDateString());
     this.textArray[this.textArray.length - 1] >= 5
      ? (this.isBlueWhite = true)
      : (this.isBlueWhite = false);
  }
}
