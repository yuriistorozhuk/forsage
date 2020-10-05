import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-course',
  templateUrl: './section-course.component.html',
  styleUrls: ['./section-course.component.scss']
})
export class SectionCourseComponent implements OnInit {

  @Input() staff: any = null;

  @Input() info: string = null;
  @Input() subtitle: string = null;
  @Input() description: string[] = null;

  constructor() { }

  ngOnInit(): void {
  }

}
