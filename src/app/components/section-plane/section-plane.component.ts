import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-plane',
  templateUrl: './section-plane.component.html',
  styleUrls: ['./section-plane.component.scss']
})
export class SectionPlaneComponent implements OnInit {

  @Input() info: string = null;
  @Input() categories: any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.categories);
  }

}
