import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {

  @Input()
  public title: string = null;

  @Input()
  public description: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
