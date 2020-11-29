import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = 'Льотна школа';
  image = {
    url: './assets/images/plane004.png',
    styles: {}
  };

  public sections = [{
    title: 'Ми гарантуємо якісне навчання!',
    description: [
      'Все більша кількість людей, як в Україні, так і в усьому світі, хочуть освоїти повітряний простір.',
      'Що ще може так мотивувати і надихати як не думка про можливість вільно і безперешкодно переміщатися в повітрі.',
      'Часи змінюються, змінюються закони і небо стає більш доступним.'
    ]
  }];

  public courses = [{
    title: 'Курс підготовки для отримання ліцензії приватного пілота (PPL(A))',
    image: './assets/images/main-plane001.jpg'
  }, {
    title: 'Курс підготовки для отримання ліцензії комерційного пілота (СPL(A)/IR)',
    image: './assets/images/main-plane002.jpg'
  }, {
     title: 'Підготовки для отримання рейтингу класу SEP або MEP',
    image: './assets/images/main-plane003.jpg'
  }, {
      title: 'Підготовки для отримання рейтингу IR (право виконання польотів за приладами)',
    image: './assets/images/main-plane004.jpg'
  }];

  public fleet = [{
    title: null,
    description: ["Повітряний флот АТО ЛЬОТНА ШКОЛА ФОРСАЖ"]
  }];

  public aircrafts = [{
    title: 'K-10 SWIFT – український надлегкий літак нового покоління',
    image: './assets/images/main-plane005.jpg'
  }, {
      title: 'Tecnam P2006T – легкий двомоторний цільнометалічний літак',
    image: './assets/images/main-plane006.jpg'
  }, {
      title: 'AT-3 - легкий одномоторний літак, польського виробництва, призначений для вирішення широкого кола завдань',
    image: './assets/images/main-plane001.jpg'
  
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
