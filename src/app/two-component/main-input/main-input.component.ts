import { NgForOf } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-input',
  imports: [FormsModule, NgForOf],
  templateUrl: './main-input.component.html',
  styleUrl: './main-input.component.css',
})
export class MainInputComponent {
  serverName: string = '';
  // serverContent: string = '';

  @ViewChild('serverContentInp') serverContent!: ElementRef;
  serverItems: any[] = [];
  @Output('ADB') addBelow = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('ACB') addCopyBelow = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  addBelowFun(e: any) {
    this.addBelow.emit({
      // serverName: this.serverName,
      // serverContent: this.serverContent,
      serverName: e.value,
      serverContent: this.serverContent.nativeElement.value,
    });
    console.log(this.serverContent.nativeElement.value);
  }

  addCopyBelowFun(e: any) {
    this.addCopyBelow.emit({
      // serverName: this.serverName,
      // serverContent: this.serverContent,
      serverName: e.value,
      serverContent: this.serverContent.nativeElement.value,
    });
  }
}
