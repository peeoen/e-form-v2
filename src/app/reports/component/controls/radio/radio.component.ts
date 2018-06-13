import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlActiveDirective } from '../../../../share/directives/control-active.directive';
import { ControlDirective } from '../../../../share/directives/control.directive';
import { ControlRadioStyle } from './../../../../core/models/controls/control-radio';

@Component({
  selector: '[app-radio]',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  @Input() id: string;
  @Input() styles: ControlRadioStyle;
  @ViewChild(ControlDirective) control: ControlDirective;

  @ViewChild(ControlActiveDirective) controlActive: ControlActiveDirective;
  constructor() { }

  ngOnInit() {
  }

  getStyle() {
    if (this.styles) {
      const styles = {
        'font-family': this.styles.fontFamily,
        'font-size': this.styles.fontSize || '',
        'font-weight': (this.styles.bold) ? 'bold' : 'normal' || '',
      }
      return styles;
    }
  }
}
