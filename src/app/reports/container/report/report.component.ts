import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ReportsState } from '../../../core/state mangement/states';
import { ControlService } from '../../services/control.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  @Select(ReportsState) reports$: Observable<any>;


  constructor(private controlService: ControlService) { 
    console.log(this.controlService.controls);
  }

  ngOnInit() {
  }
}
