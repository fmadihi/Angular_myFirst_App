import { NgFor } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ɵEmptyOutletComponent } from '@angular/router';

@Component({
  selector: 'app-main-show',
  imports: [NgFor, ɵEmptyOutletComponent],
  templateUrl: './main-show.component.html',
  styleUrl: './main-show.component.css',
})
export class MainShowComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    OnDestroy,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{

  @ContentChild('contentSetion')  contentSetion!:ElementRef
  @Input('serItemEL') item: { type: string; name: string; content: string } = {
    type: '',
    name: '',
    content: '',
  };

  constructor() {
    console.log('first: constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('second: ngOnChanges called');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('third: ngOnInit called');
  }
  ngDoCheck(): void {
    console.log('fourth: ngDoCheck called');
  }
  // veiw sycle
  ngAfterContentInit(): void {
    console.log('1-view: ngAfterContentInit called');
    console.log('***',this.contentSetion.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    console.log('2-view: ngAfterContentChecked called');
  }
  ngAfterViewInit(): void {
    console.log('3-view: ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('4-view: ngAfterViewChecked called');
  }
  // destroy
  ngOnDestroy(): void {
    console.log('finally: ngOnDestroy called - ypo clicked on the destroy btn');
  }
}
