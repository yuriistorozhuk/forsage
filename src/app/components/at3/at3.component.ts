import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at3',
  templateUrl: './at3.component.html',
  styleUrls: ['./at3.component.scss']
})
export class At3Component implements OnInit {

  public title: string = "Однопілотні однодвигунні поршневі літаки SEP(A)";
  public image: any = {
    url: "./assets/images/plane001.png",
    styles: {
      right: '53px', top: '337px',
      height: '219px', width: '698px',
      transform: "rotate(-15deg)"
    }
  }

  public at3Info: string = "";
  public at3: any[] = [{
    subtitle: 'AERO AT-3 R100',
    description: [
      "Багатоцільовий літак, польського виробництва,",
      "призначений для вирішення широкого кола завдань, таких як:",
    ],
    list: [{
        name: 'навчання пілотів',
        options: {
          checkbox: true
        }
    }, {
        name: 'навчання техніці спортивного пілотажу, тренування льотного складу',
        options: {
          checkbox: true
        }
    }, {
        name: 'патрулювання і моніторинг територій і об\'єктів',
        options: {
          checkbox: true
        }
    }, {
        name: 'огляд лісів і виявлення пожеж',
        options: {
          checkbox: true
        }
    }, {
        name: 'огляд нафтопроводів і газопроводів',
        options: {
          checkbox: true
        }
    }, {
        name: 'огляд ліній електропередач',
        options: {
          checkbox: true
        }
    }, {
        name: 'ведення пошукових робіт',
        options: {
          checkbox: true
        }
    }, {
        name: 'геологічна розвідка, аерозйомка місцевості',
        options: {
          checkbox: true
        }
    }, {
        name: 'кригова розвідка',
        options: {
          checkbox: true
        }
    }, {
        name: 'перевезення пошти, вантажу, багажу',
        options: {
          checkbox: true
        }
    }, {
        name: 'повітряні прогулянки',
        options: {
          checkbox: true
        }
    }, {
        name: 'туристичні польоти',
        options: {
          checkbox: true
        }
    }, {
        name: 'ділові польоти',
        options: {
          checkbox: true
        }
    }],
    summary: []
  }];

  public info: string = "";
  public categories: any[] = [{
    subtitle: 'Технічні характеристики',
    list: [{
      name: 'Довжина',
      value: '6,25 м (20 футів 6 дюймів)'
    }, {
        name: 'Розмах крила',
        value: '7.55 м'
    }, {
      name: 'Висота',
      value: '2,23 м (7 футів 4 дюймів)'
    }, {
      name: 'Площа крила',
      value: '9,3 м ² (100,6 кв.м)'
    }, {
      name: 'Маса пустого літака',
      value: '350 кг (771 фунтів)'
    }, {
      name: 'Корисне навантаження',
      value: '232 кг (511 фунтів)'
    }, {
      name: 'Максимальна злітна маса',
      value: '582 кг (1,282фунтів)'
    }, {
      name: 'Двигун',
      value: '1 × Rotax 912 S Elprop 3-1-1P, 100 к.с. (75 кВт)'
    }, {
      name: 'Максимальна швидкість',
      value: '220 км/год (119 вузлів)'
    }, {
      name: 'Крейсерська швидкість',
      value: '200 км/год (108 вузлів)'
    }, {
      name: 'Швидкість звалювания',
      value: '82 км/год (44 вузлів)'
    }, {
      name: 'Дальність польоту',
      value: '717 км (387 миль)'
    }, {
      name: 'Практична стеля',
      value: '4000 м (13123 футів)'
    }, {
      name: 'Злітна дистанція',
      value: '145 м (476 футів)'
    }, {
      name: 'Посадкова дистанція',
      value: '200 м (656 футів)'
    }],
    summary: []
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
