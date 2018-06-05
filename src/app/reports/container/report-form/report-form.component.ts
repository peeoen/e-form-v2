import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { ReportStateModel } from '../../../core/state mangement/states';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit, OnDestroy {
  id: string;
  reportNotFound = false;
  private sub: Subscription;

  constructor(private route: ActivatedRoute,
  private store: Store) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
       const reports: ReportStateModel[] = this.store.selectSnapshot(state => state.reports);
       if (this.id && reports.find(x => x.id === this.id)) {
       }
       else {
        this.reportNotFound = true;
       }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}