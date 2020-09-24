import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() staff: any = null;

  public image = null;
  public name = null;
  public role = null;

  constructor() { }

  ngOnInit(): void {
    const { id, name, role } = this.staff;

    this.image = `./assets/images/staff00${id}.png`;
    this.name = name;
    this.role = role;
  }

}
