import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlDirective } from '../../../../share/directives/control.directive';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() id: string;

  @ViewChild(ControlDirective) control: ControlDirective;

  constructor() { }

  ngOnInit() {
  }
}
