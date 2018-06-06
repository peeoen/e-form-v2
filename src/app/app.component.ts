import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // pdfSrc: string = '/assets/tes.pdf';
  pdfSrc: string;

  constructor() {
    const doc = new jsPDF();
    doc.text(20, 20, 'test');
    const uri = doc.output('datauristring');
    console.log(uri);
    this.pdfSrc = uri;
  }
}
