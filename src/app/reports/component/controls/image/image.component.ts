import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlActiveDirective } from '../../../../share/directives/control-active.directive';
import { ControlDirective } from '../../../../share/directives/control.directive';
import { ControlImageStyle } from './../../../../core/models/controls/control-image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() id: string;
  @Input() styles: ControlImageStyle;
  @ViewChild(ControlDirective) control: ControlDirective;

  @ViewChild(ControlActiveDirective) controlActive: ControlActiveDirective;
  constructor() { }

  ngOnInit() {
  }

  getStyle() {
    if (this.styles) {
      const styles = {
        'width': this.styles.width || '',
        'height': this.styles.height || '',
      }
      return styles;
    }

  }
}
