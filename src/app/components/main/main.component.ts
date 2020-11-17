import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = 'Льотна школа';
  image = {
    url: './assets/images/plane004.png',
    styles: {}
  };

  constructor() { }

  ngOnInit(): void {
  }

}
