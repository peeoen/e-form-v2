import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

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

  onDrop(event: DndDropEvent) {
  
    console.log(event);
    console.log("dropped", JSON.stringify(event, null, 2));
  }
}
