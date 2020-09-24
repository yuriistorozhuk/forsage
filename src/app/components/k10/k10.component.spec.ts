import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { K10Component } from './k10.component';

describe('K10Component', () => {
  let component: K10Component;
  let fixture: ComponentFixture<K10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ K10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(K10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
