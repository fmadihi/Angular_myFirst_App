import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-show',
  imports: [NgFor],
  templateUrl: './main-show.component.html',
  styleUrl: './main-show.component.css',
})
export class MainShowComponent {
 @Input('serItemEL') item: { type: string, name: string, content: string } = {type: '', name: '', content: ''};
}
