import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlActiveDirective } from '../../../../share/directives/control-active.directive';
import { ControlDirective } from '../../../../share/directives/control.directive';
import { ControlLabelStyle } from './../../../../core/models/controls/control-label';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent implements OnInit {

  @Input() id: string;
  @Input() styles: ControlLabelStyle;

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
