import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-report-header',
  templateUrl: './report-header.component.html',
  styleUrls: ['./report-header.component.scss']
})
export class ReportHeaderComponent implements OnInit {

  @Input() reportName: string;
  @Output() added = new EventEmitter();
  @Output() saved = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addPage() {
    this.added.emit();
  }

  savePage() {
    this.saved.emit();
  }

}
