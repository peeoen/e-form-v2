import { AfterViewInit, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss']
})
export class StylesComponent implements OnInit, AfterViewInit {

  images= [
    'http://via.placeholder.com/350x150',
    'http://via.placeholder.com/350x150',
    'http://via.placeholder.com/350x150',
    'http://via.placeholder.com/350x150',
    'http://via.placeholder.com/350x150'
  ]

  options = {

    items: 3, 
    dots: false, 
    navigation: true
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }
}
