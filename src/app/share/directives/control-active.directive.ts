import { Directive, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[control-active]' })
export class ControlActiveDirective {


    constructor(public viewContainerRef: ViewContainerRef, 
        public el: ElementRef,
        public renderer: Renderer2) {

     }



     setActive() {
        this.el.nativeElement.style.outline = '3px solid darksalmon';
        this.el.nativeElement.style.outlineStyle = 'dashed';
        this.el.nativeElement.style.outlineWidth = '1px';
        this.el.nativeElement.style.outlineOffset = '10px';

     }

     setInActive() {
      this.el.nativeElement.style.outline = 'initial';
     }
}