import { Component, OnInit } from '@angular/core';
import { Font, FontSizes, FontStyles } from './../../../../core/models/font';

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.scss']
})
export class FontsComponent implements OnInit {

  fontStyles: FontStyles;
  fontSizes: FontSizes;

  constructor() { 
    const _font = new Font();
    this.fontStyles = _font.fontStyles;
    this.fontSizes = _font.fontSizes;
    console.log(this.fontSizes);
    
  }

  ngOnInit() {
  }

}
