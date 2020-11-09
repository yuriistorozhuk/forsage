import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p2006t',
  templateUrl: './p2006t.component.html',
  styleUrls: ['./p2006t.component.scss']
})
export class P2006tComponent implements OnInit {
  public title: string = "Однопілотні багатодвигунні поршневі літаки МЕР(А)";
  public image: any = {
    url: "./assets/images/plane004.png",
    styles: {
      right: '31px', top: '322px',
      height: '200px', width: '840px'
    }
  }
  public tecnamP2006TInfo: string = "";
  public tecnamP2006T: any[] = [{
    subtitle: 'Tecnam P2006T:',
    description: [
      "Tecnam P2006T — чотиримісний високоплан, з великою комфортною кабіною, з прибираючимся шасі, оснащений двома поршневими  двигунами внутрішнього згоряння Rotax 912S3 потужністю 100 л.с.",
      "Маса порожнього літака Tecnam P2006T є найнижчою серед своїх прямих конкурентів, у той час, як корисне навантаження, набагато вище.",
      "Високий потолок  та швидкість набору висоти виділяють Tecnam P2006T серед своїх конкурентів.",
      "Літак може керуватися одним або двома пілотами.",
      "Сучасне обладнання кабіни літака дозволяє виконувати польоти вдень та вночі, в простих та в складних метеоумовах, як за правилами візуальних польотів, так і за правилами польотів за приладами.",
    ],
    list: [{
      name: ''
    }]
  }];

  public usageTecnamP2006TInfo: string = "";
  public usageTecnamP2006T: any[] = [{
    subtitle: 'Використання Tecnam P2006T:',
    description: [
      "Tecnam P2006T має європейский сертифікат типу EASA.",
      "Tecnam P2006T може використовуватись як в приватних, так і в комерційних цілях:"
    ],
    list: [   
      {
        name: 'Навчання курсантів льотних шкіл та аероклубів', options: {
          checkbox: true
        } },
      {
        name: 'Перевезення пасажирів', options: {
          checkbox: true
        } },
      {
        name: 'Патрулювання місцевості', options: {
          checkbox: true
        } },
      {
        name: 'Патрулювання місцевості', options: {
          checkbox: true
        } },
     
    ]
  }];

  public technicalCharacteristicsInfo: string = "";
  public technicalCharacteristics: any[] = [{
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
  }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
