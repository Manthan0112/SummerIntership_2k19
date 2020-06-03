import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgPath: string[] = [
    '../assets/salon11.jpg',
    '../assets/salon12.jpg',
    '../assets/salon13.jpg',
    '../assets/salon17.jpg',
    '../assets/salon15.jpg',
    '../assets/salon16.jpg',
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
