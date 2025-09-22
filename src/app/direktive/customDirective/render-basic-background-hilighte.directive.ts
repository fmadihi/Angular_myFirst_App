import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appRenderBasicBackgroundHilighte]',
})
export class RenderBasicBackgroundHilighteDirective implements OnInit {
  @Input() colorElDefault: string = 'black';
  @Input() backgrounDefault01: string = 'transparent';
  @Input() backgrounDefault02: string = 'transparent';

  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'pink');
  }

  @HostBinding('style.color') colorEl: string = this.colorElDefault;

  @HostListener('mouseenter') mouseEnter() {
    this.renderer.setStyle(
      this.elem.nativeElement,
      'background-color',
      this.backgrounDefault01
    );
    this.colorEl = this.colorElDefault;
  }
  @HostListener('mouseleave') mouseLeave() {
    this.renderer.setStyle(
      this.elem.nativeElement,
      'background-color',
      this.backgrounDefault02
    );
    this.colorEl = this.colorElDefault;
  }
}
