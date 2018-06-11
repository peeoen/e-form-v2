import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[controlPosition]'
})
export class ControlDirective {

    offset: {
        x?: number,
        y?: number
    } = {};

    constructor(private el: ElementRef) {

    }

    @HostListener('mousedown', ['$event'])
    onMouseDown(event: MouseEvent) {

        this.offset = {
            x: event.offsetX,
            y: event.offsetY
        };
    }

}