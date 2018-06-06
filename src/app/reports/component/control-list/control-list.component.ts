import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ControlStateModel, ControlsState } from '../../../core/state mangement/states';

@Component({
  selector: 'app-control-list',
  templateUrl: './control-list.component.html',
  styleUrls: ['./control-list.component.scss']
})
export class ControlListComponent implements OnInit {

  @Select(ControlsState) controls$: Observable<ControlStateModel>;

  constructor(private store: Store) {
    const control = this.store.selectSnapshot(ControlsState);
  }

  ngOnInit() {
  }

}
