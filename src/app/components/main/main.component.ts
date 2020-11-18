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
    image: './assets/images/main-plane001.png'
  }, {
    title: 'Курс підготовки для отримання ліцензії приватного пілота (PPL(A))',
    image: './assets/images/main-plane001.png'
  }, {
    title: 'Курс підготовки для отримання ліцензії приватного пілота (PPL(A))',
    image: './assets/images/main-plane001.png'
  }, {
    title: 'Курс підготовки для отримання ліцензії приватного пілота (PPL(A))',
    image: './assets/images/main-plane001.png'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
