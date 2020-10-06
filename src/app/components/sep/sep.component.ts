import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sep',
  templateUrl: './sep.component.html',
  styleUrls: ['./sep.component.scss']
})
export class SEPComponent implements OnInit {

  public title: string = "Курс підготовки для отримання рейтингу класу SEP (однодвигунний поршневий) або MEP (багатодвигунний поршневий";
  public image: string = null;

  public info: string = "Призначенням курсу є підготовка для отримання рейтингу класу SEP (однодвигунний поршневий) або MEP (багатодвигунний поршневий).";
  public categories: any[] = [{
    subtitle: 'Програма складається з двох частин:',
    list: [{
      name: 'Теоретична програма',
      value: '6 годин'
    }, {
      name: 'Тестування з теоретичної підготовки',
      value: '1 година'
    }, {
      name: 'Практична тренувальна програма',
      value: '6 годин'
    }, {
      name: 'Екзаменаційни політ',
      value: '1 година 30 хвилин'
    }],
    description: 'Розрахунковий час проходження програми один тиждень.'
  }, {
    subtitle: 'Вимоги до кандидатів:'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
