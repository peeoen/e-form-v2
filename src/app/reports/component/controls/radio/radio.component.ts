import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlActiveDirective } from '../../../../share/directives/control-active.directive';
import { ControlDirective } from '../../../../share/directives/control.directive';
@Component({
  selector: '[app-radio]',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  @Input() id: string;

  @ViewChild(ControlDirective) control: ControlDirective;

  @ViewChild(ControlActiveDirective) controlActive: ControlActiveDirective;
  constructor() { }

  ngOnInit() {
  }
}
