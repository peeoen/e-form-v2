import { Directive, ElementRef, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[control-host]'
})
export class ControlHostDirective {
  constructor(public viewContainerRef: ViewContainerRef, public el: ElementRef) {

    
   }
}
