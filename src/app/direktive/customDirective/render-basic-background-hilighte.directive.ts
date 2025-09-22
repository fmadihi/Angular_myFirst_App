import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appRenderBasicBackgroundHilighte]',
})
export class RenderBasicBackgroundHilighteDirective implements OnInit {
  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'pink');
  }
  @HostListener('mouseenter') mouseEnter() {
    this.renderer.setStyle(
      this.elem.nativeElement,
      'background-color',
      'yellow'
    );
  }
  @HostListener('mouseleave') mouseLeave() {
    this.renderer.setStyle(
      this.elem.nativeElement,
      'background-color',
      'transparent'
    );
  }
}
