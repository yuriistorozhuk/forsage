import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-k10',
  templateUrl: './k10.component.html',
  styleUrls: ['./k10.component.scss']
})
export class K10Component implements OnInit {

  public title: string = "Однопілотні однодвигунні поршневі літаки SEP(A)";
  public image: any = {
    url: "./assets/images/plane003.png",
    styles: {
      top: '476px',
      height: '280px', width: '796px'
    }
  }

  public k10Info: string = ""; 
  public k10: any[] = [{
    subtitle: 'К-10 "Свіфт"',
    description: [
      "Багатоцільовий літак, українського виробництва,",
      "призначений для вирішення широкого кола завдань, таких як:", 
    ],
    list: [{
      name: 'навчання пілотів', options: {
        checkbox: true
      }
    }, {
        name: 'навчання техніці спортивного пілотажу, тренування льотного складу', options: {
          checkbox: true
        }
      }
      , {
        name: 'патрулювання і моніторинг територій і об\'єктів', options: {
          checkbox: true
        }
      }
      , {
        name: 'огляд лісів і виявлення пожеж', options: {
          checkbox: true
        }
      }, {
        name: 'огляд нафтопроводів і газопроводів', options: {
          checkbox: true
        }
      }, {
        name: 'огляд ліній електропередач', options: {
          checkbox: true
        }
      }, {
        name: 'ведення пошукових робіт', options: {
          checkbox: true
        }
      }, {
        name: 'геологічна розвідка, аерозйомка місцевості', options: {
          checkbox: true
        }
      }
      , {
        name: 'кригова розвідка', options: {
          checkbox: true
        }
      }, {
        name: 'буксирування планерів', options: {
          checkbox: true
        }
      }, {
        name: 'перевезення пошти, вантажу, багажу', options: {
          checkbox: true
        }
      }, {
        name: 'повітряні прогулянки', options: {
          checkbox: true
        }
      }
      , {
        name: 'туристичні польоти', options: {
          checkbox: true
        }
      }
      , {
        name: 'ділові польоти', options: {
          checkbox: true
        }
      }
    ]
  }];

  public info: string = "";
  public categories: any[] = [{
    subtitle: 'Технічні характеристики',
    list: [{
      name: 'Розмах крила',
      value: '8.5                           9.1'
    }, {
        name: 'Маса пустого (без BRS)',
        value: '335 кг'
      },
      {
        name: 'Двигун',
        value: 'ROTAX 912 UL                          ROTAX 912 ULS'
      },
      {
        name: 'Потужність',
        value: '80-100 к.с. 115 к.с. (форсаж)'
      },
      {
        name: 'Максимальна швидкість польоту',
        value: '225 км/год                                      225 км/год'
      },
      {
        name: 'Максимальна швидкість з випущеними закрилками',
        value: '120 км/год                                      120 км/год'
      },
      {
        name: 'Максимальна дальність польоту',
        value: '650 км'
      },
      {
        name: 'Швидкість відриву',
        value: '81 км/год                                      85 км/год'
      },
      {
        name: 'Швидкість завалювання (закрилки прибрані, режим двигуна "МГ")',
        value: '78 км/год                                      82 км/год'
      },
      {
        name: 'Розбіг/пробіг',
        value: '130/90 м                                      100/75 м'
      },
      {
        name: 'Скоропідйомність біля землі',
        value: '5-7 м/с                                      6 м/с'
      },
      {
        name: 'Ємність паливних баків',
        value: '65 л                                      80 л'
      },
      {
        name: 'Ємність багажного відсіку',
        value: '300 л                                     360 л'
      },
      {
        name: 'Крейсерська швидкість (обороти двигуна 5000 об/хв)',
        value: '200 км/год                                     180 км/год'
      },
      {
        name: 'Максимальна злітна маса',
        value: '575-625 кг'
      },
      {
        name: 'Експлуатаційне перевантаження',
        value: '+4.4/-0.5                                     +3.8/-0.5'
      }
    ],
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
