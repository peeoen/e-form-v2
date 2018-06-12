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
  fontColor: string;
  bgColor: string;
  constructor() { 
    const _font = new Font();
    this.fontStyles = _font.fontStyles;
    this.fontSizes = _font.fontSizes;
    
  }

  ngOnInit() {
  }

}
