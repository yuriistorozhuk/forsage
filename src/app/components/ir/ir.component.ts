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
     description: 'Розрахунковий час проходження курсу – два дні, з нальотом:'
  }, {
    subtitle: 'Вимоги до кандидатів:'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
