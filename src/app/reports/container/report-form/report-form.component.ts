import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { AddPage, ChangeActivePage, ChangeReportActive, ReportStateModel } from '../../../core/state mangement/states/report.state';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit, OnDestroy {

  id: string;
  reportNotFound = false;
  private sub: Subscription;
  pdfSrc: string;
  report: ReportStateModel;

  constructor(private route: ActivatedRoute,
    private store: Store) {


  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      const reports: ReportStateModel[] = this.store.selectSnapshot(state => state.reports);
      const _report = reports.find(x => x.id === this.id)

      if (this.id && _report) {
        this.report = _report;
        this.store.dispatch(new ChangeReportActive(this.report.id))
        this.store.dispatch(new ChangeActivePage(1));
      }
      else {
        this.reportNotFound = true;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addPage() {
        this.store.dispatch(new AddPage());
  }

  savePage() {
    
  }
}
