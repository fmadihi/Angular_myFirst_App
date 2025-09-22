/*
برای دادن مقدار داینامیک به متغیر delay
باید یک اسم مستعار عین همین دایرکتیو قرار بدیم
و بعد داخل html 
جلو این  مساور و "" مقدار میذاریم

selector: '[hideStructurTempView]',
@Input('hideStructurTempView') hide5S: number = 0;
html:
<div *hideStructurTempView="5000">
*/
import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[hideStructurTempView], [logName]',
})
export class StructurTempViewDirective implements OnInit {
  @Input('hideStructurTempView') hide5S: number = 0;
  @Input('hideStructurTempViewAfterThat') showElem: TemplateRef<any> | null;
  @Input('logName') firstName: string = '';
  @Input('logNameAfter') secondName: string = '';
  @Input('logNameTheEnd') thirdName: string = '';



  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}
  ngOnInit(): void {
    this.container.createEmbeddedView(this.template);

    setTimeout(() => {
      this.container.clear();
      if (this.showElem) {
        this.container.createEmbeddedView(this.showElem);
      }
    }, this.hide5S);

    console.log('firstName is: ' + this.firstName);
    console.log('secondName is: ' + this.secondName);
    console.log('thirdName is: ' + this.thirdName);
  }
}
