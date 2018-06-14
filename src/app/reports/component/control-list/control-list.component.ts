import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ControlsState, ControlStateModel } from '../../../core/state mangement/states/control.state';
import { ReportStateService } from '../../services/report-state.service';

@Component({
  selector: 'app-control-list',
  templateUrl: './control-list.component.html',
  styleUrls: ['./control-list.component.scss']
})
export class ControlListComponent implements OnInit {

  @Select(ControlsState) controls$: Observable<ControlStateModel>;

  constructor(    private reportStateService: ReportStateService,) {
    this.reportStateService.changeActivePage$.subscribe(x => console.log(x))
  }

  ngOnInit() {
  }

}
