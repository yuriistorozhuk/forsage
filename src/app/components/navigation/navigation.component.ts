import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    public navigation: NavigationService
  ) { }

  ngOnInit(): void {
  }

  onClick(event) {
    console.log('contact us');
  }
}
