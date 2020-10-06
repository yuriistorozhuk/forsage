import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpl',
  templateUrl: './cpl.component.html',
  styleUrls: ['./cpl.component.scss']
})
export class CPLComponent implements OnInit {
  public title: string = "Курс підготовки для отримання ліцензії комерційного пілота (СPL(A)/IR)";

  public staff: any = {
    id: 1,
    name: 'Давидкін Дмитро Володимирович',
    role: 'Керівник з підготовки'
  }

  public info: string = "Мета курсу (CPL(A)/IR – підготовка пілотів для виконання ними комерційних повітряних перевезень, з рівнем компетентності що відповідає правам які передбачені свідоцтвом CPL(A) на однопілотних однодвигунних та багатодвигунних літаках, та у якості другого пілота на багато пілотних літаках (за умов проходження модульного курсу ATPL). Рейтинг IR передбачає право власника виконувати польоти в умовах ІМС (інструментальні метеоумови), за IFR (інструментальні правила польотів)";
  public subtitle: string = "Заявники на отримання свідоцтва СPL(A)";
  public description: string[] = [
    "Заявники на отримання свідоцтва CPL(A) з рейтингом IR проходять не менше",
    "ніж 500 годин теоретичної підготовки та 180 годин льотної підготовки.",
    "Після проходження усіх тестів з теоретичної підготовки (внутрішньо шкільні),",
    "кандидат на отримання ліцензії комерційного пілота допускається до",
    "проходження льотної підготовки."
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
