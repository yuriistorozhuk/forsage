import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router,
  ) { }

  goTo(path: string, id: string): void {
    this.router.navigate([path]);
    setTimeout(() => {
      const element = document.getElementById(id);
      element.scrollIntoView({behavior: 'smooth'});
    }, 100);
  }
}
