import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPLComponent } from './ppl.component';

describe('PPLComponent', () => {
  let component: PPLComponent;
  let fixture: ComponentFixture<PPLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
