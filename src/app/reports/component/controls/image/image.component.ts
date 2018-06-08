import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlDirective } from '../../../../share/directives/control.directive';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() id: string;

  @ViewChild(ControlDirective) control: ControlDirective;

  constructor() { }

  ngOnInit() {
  }
}
