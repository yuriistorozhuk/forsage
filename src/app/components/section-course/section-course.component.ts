import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-course',
  templateUrl: './section-course.component.html',
  styleUrls: ['./section-course.component.scss']
})
export class SectionCourseComponent implements OnInit {

  public staff: any = {
    id: 1,
    name: 'Остапенко Олександр Анатолійович',
    role: 'Головний льотний інструктор'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
