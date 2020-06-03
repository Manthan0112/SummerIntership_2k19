import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  imgPath: string = '../assets/background.jpg';

  constructor() { }

  ngOnInit() {
  }

}
