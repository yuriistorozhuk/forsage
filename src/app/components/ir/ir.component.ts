import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ir',
  templateUrl: './ir.component.html',
  styleUrls: ['./ir.component.scss']
})
export class IRComponent implements OnInit {

  public title: string = "Курс підготовки для отримання рейтингу IR (право виконання польотів за приладами)";
  public image: string = null;

  public info: string = "Призначенням курсу є підготовка для отримання рейтингу IR на однопілотному багатодвигуннму літаку (земля) (МЕР(L).";
  public categories: any[] = [{
    subtitle: 'Курс складається з:',
    list: [{
      name: 'Практична тренувальна програма',
      value: ''
    }, {
      name: 'Екзаменаційний політ',
        value: '1 година  30 хвилин'

      }],
    description: ['Розрахунковий час проходження курсу – два дні, з нальотом:']

  },]

  public reqSubtitle: string = "";
  public reqs: any[] = [{
    subtitle: 'Вимоги до кандидатів:',
    list: [
      { name: 'Вік не молодше ніж 18 років.' },
      { name: 'Діючий медичний сертифікат 2-го або 1-го класу.' },
      { name: 'Діюча ліцензія РРL(А), СРL(А), АТРL(А), з рейтингом ІR' },
      { name: 'Діючий рейтинг МЕР' },
      { name: 'Як мінімум 70 годин нальоту в якості КПС (РІС)' },
      { name: 'Як мінімум повна середня освіта' },
    ],

  }];


  constructor() { }

  ngOnInit(): void {
  }

}
