import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { At3Component } from './at3.component';

describe('At3Component', () => {
  let component: At3Component;
  let fixture: ComponentFixture<At3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ At3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(At3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
