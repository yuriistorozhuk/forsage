import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NavigationService } from 'src/app/services/navigation.service';

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
    image: './assets/images/main-plane001.jpg',
    link: '/ppl'
  }, {
    title: 'Курс підготовки для отримання ліцензії комерційного пілота (СPL(A)/IR)',
    image: './assets/images/main-plane002.jpg',
    link: '/cpl'
  }, {
     title: 'Підготовки для отримання рейтингу класу SEP або MEP',
    image: './assets/images/main-plane003.jpg',
    link: '/sep'
  }, {
      title: 'Підготовки для отримання рейтингу IR (право виконання польотів за приладами)',
    image: './assets/images/main-plane004.jpg',
    link: '/ir'
  }];

  public fleet = [{
    title: null,
    description: ["Повітряний флот АТО ЛЬОТНА ШКОЛА ФОРСАЖ"]
  }];

  public aircrafts = [{
    title: 'K-10 SWIFT – український надлегкий літак нового покоління',
    image: './assets/images/main-plane005.jpg',
    link: '/k-10'
  }, {
      title: 'Tecnam P2006T – легкий двомоторний цільнометалічний літак',
    image: './assets/images/main-plane006.jpg',
    link: '/p2006t'
  }, {
      title: 'AT-3 - легкий одномоторний літак, польського виробництва, призначений для вирішення широкого кола завдань',
    image: './assets/images/main-plane001.jpg',
    link: '/at-3'
  
    }];

  public location = [{
    title: null,
    description: ["Наша адреса"]
  }];

  public staff = [{
    id: 2,
    name: 'Давидкін Дмитро Володимирович',
    role: 'Керівник з підготовки'
  },
    {
      id: 3,
      name: 'Остапенко Олег Анатолійович',
      role: 'Керівник з безпеки польотів'
    },
    {
      id: 1,
      name: 'Остапенко Олександр Анатолійович',
      role: 'Головний льотний інструктор'
    },
    {
      id: 4,
      name: 'Сєдов Максим Геннадійович',
      role: 'Льотний інструктор'
    },
    {
      id: 5,
      name: 'Кочерженко Дмитро Олександрович',
      role: 'Інструктор теоретичної підготовки'
    },
    {
      id: 6,
      name: 'Олійник Олексій Олексійович',
      role: 'Інструктор теоретичної підготовки'
    }
  ];

  public closeResult = null;
  
  constructor(
    public navigation: NavigationService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  scroll(element) {
    window.scrollTo(element.yPosition)
  }

  openModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
