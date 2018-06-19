import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  htmlContent: string;
  constructor() { }

  ngOnInit() {
    $('div#froala-editor').froalaEditor({
      dragInline: false,
      tabSpaces: 4,
      theme: 'gray',
      height: 600,
      fontFamilySelection: true,
      fontSizeSelection: true,
      paragraphFormatSelection: true,
      charCounterCount: false,
      toolbarButtons: [
        'fontFamily', '|', 'fontSize', '|',
        'bold', 'italic', 'underline', '|',
        'align', 'verticalAlign', '|',
        'formatOL', 'formatUL', 'indent', 'outdent', '|',
        'insertImage', '|',
        'undo', 'redo', 'help'
      ]
    })
  }
}
