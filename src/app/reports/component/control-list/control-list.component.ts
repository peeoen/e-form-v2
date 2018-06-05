import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { ControlsState, ControlStateModel } from '../../../core/state mangement/states';

@Component({
  selector: 'app-control-list',
  templateUrl: './control-list.component.html',
  styleUrls: ['./control-list.component.scss']
})
export class ControlListComponent implements OnInit {

  @Select(ControlsState) controls$: Observable<ControlStateModel>;

  constructor() { }

  ngOnInit() {
  }

}
