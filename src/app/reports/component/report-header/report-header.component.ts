import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Actions, Store, ofActionSuccessful } from '@ngxs/store';
import { DndDropEvent } from 'ngx-drag-drop';
import { Subscription, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
// import { ChangeReportActive } from './../../../core/state mangement/states/report.state';
import { AddControl, ChangeActivePage, ChangeReportActive, MoveControl } from './../../../core/state mangement/states/report.state';
@Component({
  selector: 'app-report-header',
  templateUrl: './report-header.component.html',
  styleUrls: ['./report-header.component.scss']
})
export class ReportHeaderComponent implements OnInit, OnDestroy {
  selected = 'option2';
  @Input() reportName: string;
  @Output() added = new EventEmitter();
  @Output() saved = new EventEmitter();

  actionSubscription$: Subscription;
  constructor(private store: Store, private action$: Actions) { 

  }

  ngOnInit() {
    const actions = [AddControl, ChangeReportActive, ChangeActivePage, MoveControl];
    const concatActions = merge(
      this.action$.pipe(ofActionSuccessful(AddControl)),
      this.action$.pipe(ofActionSuccessful(ChangeReportActive)),
      this.action$.pipe(ofActionSuccessful(ChangeActivePage)),
      this.action$.pipe(ofActionSuccessful(MoveControl)),
    );

    this.actionSubscription$ = concatActions.pipe(
      debounceTime(10)
    ).subscribe(() => {
      console.log('action');
    })

  }

  ngOnDestroy() {
    if (this.actionSubscription$) {
      this.actionSubscription$.unsubscribe();
    }
  }

  addPage() {
    this.added.emit();
  }

  savePage() {
    this.saved.emit();
  }

  onDrop(event: DndDropEvent) {

  }
}
