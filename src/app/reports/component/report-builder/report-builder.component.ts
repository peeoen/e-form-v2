import { Component, OnInit, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ControlDirective } from '../../../share/directives/control-host.directive';
@Component({
  selector: 'app-report-builder',
  templateUrl: './report-builder.component.html',
  styleUrls: ['./report-builder.component.scss']
})
export class ReportBuilderComponent implements OnInit {
  screen = {
    width: null,
    height: null
  };
  pdfSrc: string;
  @ViewChild(ControlDirective) controlHost: ControlDirective;

  constructor() {

   }

  ngOnInit() {
    const doc = new jsPDF();
    doc.text(20, 20, 'test');
    const uri = doc.output('arraybuffer');
    this.pdfSrc = uri;
  }

  
  pageRendered(e: CustomEvent) {
    const el = document.getElementsByClassName('pdfViewer')[0];
    this.screen.width = el.clientWidth + 'px';
    this.screen.height = el.clientHeight + 'px';
  }

}
