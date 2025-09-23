import { Component } from '@angular/core';
import { StructurTempViewDirective } from './structur-temp-view.directive';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-structure-directive',
  imports: [StructurTempViewDirective, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './structure-directive.component.html',
  styleUrl: './structure-directive.component.css',
  providers: [UserService],
})
export class StructureDirectiveComponent {
  numb: number = 4;
  constructor(private userService: UserService) {}

  showData() {
    this.userService.showNameList();
  }
}
