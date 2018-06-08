import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlDirective } from '../../../../share/directives/control.directive';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input() id: string;

  @ViewChild(ControlDirective) control: ControlDirective;

  constructor() { }

  ngOnInit() {
  }
}
