import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plane-card',
  templateUrl: './plane-card.component.html',
  styleUrls: ['./plane-card.component.scss']
})
export class PlaneCardComponent implements OnInit {

  @Input()
  public title: string = null;

  @Input()
  public image: string = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
