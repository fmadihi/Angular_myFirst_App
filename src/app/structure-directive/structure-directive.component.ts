import { Component } from '@angular/core';
import { StructurTempViewDirective } from './structur-temp-view.directive';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-structure-directive',
  imports: [StructurTempViewDirective, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './structure-directive.component.html',
  styleUrl: './structure-directive.component.css',
  // این کامنت شده است چون در کاپوننت اصلی 
  // appcomponent.ts 
  // فراخونی شده است. 
  // اگر بخواهیم این سرویس فقط اینجاا استفاد خودش را داشته باشد و مقادیر کامپوننت اصلی را نگیرد کافیست که 
  // خط زیر را از کامنت در بیاریم
  // اونوقت این سرویس اینجا محنصر به فرد خواهد شد
  // providers: [UserService],
})
export class StructureDirectiveComponent {
  numb: number = 4;
  constructor(private userService: UserService) {}

  showData() {
    this.userService.showNameList();
  }
}
