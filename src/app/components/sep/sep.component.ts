import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sep',
  templateUrl: './sep.component.html',
  styleUrls: ['./sep.component.scss']
})
export class SEPComponent implements OnInit {

  public title: string = "Курс підготовки для отримання рейтингу класу SEP (однодвигунний поршневий) або MEP (багатодвигунний поршневий)";
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
    summary: ['Розрахунковий час проходження програми один тиждень.']
  }];

  public reqSubtitle: string = "";
  public reqs: any[] = [{
    subtitle: 'Вимоги до кандидатів:',
    list: [
      {
        name: 'Вік не молодше ніж 18 років.', options: {
          checkbox: true
        }},
      {
        name: 'Діючий медичний сертифікат 2-го або 1-го класу.', options: {
          checkbox: true
        } },
      {
        name: 'Діюча ліцензія РРL(А), СРL(А), АТРL(А)', options: {
          checkbox: true
        } },
      {
        name: 'Діюча ліцензія РРL(А), СРL(А), АТРL(А)', options: {
          checkbox: true
        } },
      {
        name: 'Як мінімум 70 годин нальоту в якості командира повітряного судна', options: {
          checkbox: true
        } },
      {
        name: 'Як мінімум повна середня освіта', options: {
          checkbox: true
        } },
    ]
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
