import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

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

  @Input()
  public link: string = null;
  
  constructor(public navigation: NavigationService) { }

  ngOnInit(): void {
  }

}
