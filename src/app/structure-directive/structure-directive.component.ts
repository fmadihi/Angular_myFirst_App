import { Component } from '@angular/core';
import { StructurTempViewDirective } from './structur-temp-view.directive';
import { NgSwitch,NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-structure-directive',
  imports: [StructurTempViewDirective, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './structure-directive.component.html',
  styleUrl: './structure-directive.component.css'
})
export class StructureDirectiveComponent {
  numb:number = 4
}
