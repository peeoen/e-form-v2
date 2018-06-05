import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Input() title: string;
  @Input() imagePreview: string;
  constructor() { }

  ngOnInit() {
  }

}
