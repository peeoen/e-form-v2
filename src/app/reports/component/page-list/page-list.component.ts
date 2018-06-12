import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ChangeActivePage, ReportsState } from '../../../core/state mangement/states';
import { Page } from './../../../core/models/page';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {
  @Output() added = new EventEmitter();
  @Select(ReportsState.pageOfReportSelected) pages$:  Observable<Page[]>;
  constructor(private store: Store) {

   }

  ngOnInit() {
  }

  changePageActive(page: Page) {
    this.store.dispatch(new ChangeActivePage(page.pageNumber));
  }

  addPage() {
    this.added.emit();
  }
}
