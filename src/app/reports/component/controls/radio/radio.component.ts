import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlDirective } from '../../../../share/directives/control.directive';
@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  @Input() id: string;

  @ViewChild(ControlDirective) control: ControlDirective;

  constructor() { }

  ngOnInit() {
  }
}
