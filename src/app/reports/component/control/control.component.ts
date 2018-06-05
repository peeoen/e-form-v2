import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
  
  constructor() { }

  ngOnInit() {
  }

}
