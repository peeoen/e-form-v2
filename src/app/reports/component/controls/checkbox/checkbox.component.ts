import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlCheckboxStyle } from '../../../../core/models/controls/control-checkbox';
import { ControlDirective } from '../../../../share/directives/control.directive';
import { ControlActiveDirective } from './../../../../share/directives/control-active.directive';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() id: string;
  @Input() styles: ControlCheckboxStyle;
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
        'font-weight': (this.styles.bold) ? 'bold': 'normal' || '',
      }
      return styles;
    }

  }
}
