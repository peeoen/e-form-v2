import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ReportsState } from '../../../core/state mangement/states';
import { Page } from './../../../core/models/page';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  @Select(ReportsState.pagesActive) pages$:  Observable<Page[]>;
  constructor() { }

  ngOnInit() {
  }

}
