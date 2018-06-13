import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlActiveDirective } from '../../../../share/directives/control-active.directive';
import { ControlDirective } from '../../../../share/directives/control.directive';
import { ControlTextboxStyle } from './../../../../core/models/controls/control-textbox';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Input() id: string;
  @Input() styles: ControlTextboxStyle;
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
        'font-style': (this.styles.italic) ? 'italic': 'normal' || '',
        'text-decoration': (this.styles.underline) ? 'underline': 'normal' || '',
        'text-align': this.styles.alignment || '',
        'width': this.styles.width || '',
      }
      return styles;
    }

  }
}
