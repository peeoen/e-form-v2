import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import * as jsPDF from 'jspdf';
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
  pdfSrc: string;

  constructor(private route: ActivatedRoute,
    private store: Store,
    private cd: ChangeDetectorRef) {

      setTimeout(() => {
        const doc = new jsPDF();
        doc.text(20, 20, 'test');
        const uri = doc.output('datauristring');
        console.log(uri);
        this.pdfSrc = uri;
        this.cd.markForCheck();
      }, 1000);

  }

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
