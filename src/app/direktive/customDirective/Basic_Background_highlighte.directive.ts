import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicBackgroundHighlighte]',
})
export class Basic_Background_highlighte_Directive implements OnInit {
  constructor(private element: ElementRef) {}
  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}
