import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practice001',
  imports: [FormsModule],
  templateUrl: './practice001.component.html',
  styleUrl: './practice001.component.css',
})
export class Practice001Component {
  userName: string = '';
  clickAvailable = false;
  eventText: string = '';

  constructor() {
    console.log(this.userName);
  }
  // keyDownFunc(event: KeyboardEvent) {
  //   if (this.userName !== '') {
  //     this.clickAvailable = true;
  //     this.eventText = (event.target as HTMLInputElement).value;
  //   } else {
  //     this.clickAvailable = false;
  //   }
  // }
  // clickFunc() {
  //   this.eventText = '';
  //   this.userName = '';
  //   this.clickAvailable = false;
  // }
}
