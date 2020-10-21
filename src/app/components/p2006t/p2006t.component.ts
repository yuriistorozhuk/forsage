import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p2006t',
  templateUrl: './p2006t.component.html',
  styleUrls: ['./p2006t.component.scss']
})
export class P2006tComponent implements OnInit {
  public title: string = "Однопілотні багатодвигунні поршневі літаки МЕР(А)";
  public image: string = null;

  public info: string = "";
  public categories: any[] = [{
    subtitle: 'Технічні характеристики',
    list: [{
      name: 'Маса, кг макс злітна',
      value: '1230 кг'
    }, {
       name: 'Маса, кг порожнього',
        value: '800 кг'
    },
    {
      name: 'Кіл-сть місць',
      value: '1+3'
    },
    {
      name: 'Ємність вантажного відсіку',
      value: '60 кг'
    },
    {
      name: 'Довжина фюзеляжу',
      value: '8,7м'
    },
    {
      name: 'Висота фюзеляжу',
      value: '2,85м'
    },
    {
      name: 'Ширина кабіни',
      value: '1,23м'
    },
    {
      name: 'Двигун (потужність)х2 ',
      value: 'Rotax 912 S3 (100 лс)'
    },
    {
      name: 'Максимальна швидкість',
      value: '287 км/год (119 вузлів)'
    },
    {
      name: 'Крейсерська швидкість',
      value: '260 км/год (108 вузлів)'
    },
    {
      name: 'Швидкість звалювания',
      value: '89 км/год'
    },
    {
      name: 'Швидкопідйомність',
      value: '6,1 м/сек'
    },
    {
      name: 'Дальність',
      value: '1148 км'
    },
    {
      name: 'Практична стеля',
      value: '4421 м'
    },
    {
      name: 'Розбіг',
      value: '280 м'
      },
      {
        name: 'Пробіг',
        value: '200 м'
      },
      {
        name: 'Ємність паливних баків',
        value: '100+100 л'
      },
      {
        name: 'Витрата палива',
        value: '35-40 л/г на обидва бака'
      },
    ],
  }]
  constructor() {
  }

  ngOnInit(): void {
  }

}
