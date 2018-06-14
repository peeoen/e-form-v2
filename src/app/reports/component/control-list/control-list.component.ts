import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ControlsState, ControlStateModel } from '../../../core/state mangement/states/control.state';

@Component({
  selector: 'app-control-list',
  templateUrl: './control-list.component.html',
  styleUrls: ['./control-list.component.scss']
})
export class ControlListComponent implements OnInit {

  @Select(ControlsState) controls$: Observable<ControlStateModel>;

  constructor() {

  }

  ngOnInit() {
  }

}
