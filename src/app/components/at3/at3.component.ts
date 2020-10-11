import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at3',
  templateUrl: './at3.component.html',
  styleUrls: ['./at3.component.scss']
})
export class At3Component implements OnInit {

  public title: string = "Однопілотні однодвигунні поршневі літаки SEP(A)";
  public image: string = null;

  public info: string = "";
  public categories: any[] = [{
    subtitle: 'Технічні характеристики',
    list: [{
      name: 'Довжина',
      value: '6,25 м (20 футів 6 дюймів)'
    }, {
        name: 'Розмах крила',
        value: '7.55 м'
    },
    {
      name: 'Висота',
      value: '2,23 м (7 футів 4 дюймів)'
    },
    {
      name: 'Площа крила',
      value: '9,3 м ² (100,6 кв.м)'
    },
    {
      name: 'Маса пустого літака',
      value: '350 кг (771 фунтів)'
    },
    {
      name: 'Корисне навантаження',
      value: '232 кг (511 фунтів)'
    },
    {
      name: 'Максимальна злітна маса',
      value: '582 кг (1,282фунтів)'
    },
    {
      name: 'Двигун',
      value: '1 × Rotax 912 S Elprop 3-1-1P, 100 к.с. (75 кВт)'
    },
    {
      name: 'Максимальна швидкість',
      value: '220 км/год (119 вузлів)'
    },
    {
      name: 'Крейсерська швидкість',
      value: '200 км/год (108 вузлів)'
    },
    {
      name: 'Швидкість звалювания',
      value: '82 км/год (44 вузлів)'
    },
    {
      name: 'Дальність польоту',
      value: '717 км (387 миль)'
    },
    {
      name: 'Практична стеля',
      value: '4000 м (13123 футів)'
    },
    {
      name: 'Злітна дистанція',
      value: '145 м (476 футів)'
    },
    {
      name: 'Посадкова дистанція',
      value: '200 м (656 футів)'
    },
    ],
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
