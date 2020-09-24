import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2006tComponent } from './p2006t.component';

describe('P2006tComponent', () => {
  let component: P2006tComponent;
  let fixture: ComponentFixture<P2006tComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2006tComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2006tComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
