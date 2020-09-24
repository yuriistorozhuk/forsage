import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SEPComponent } from './sep.component';

describe('SEPComponent', () => {
  let component: SEPComponent;
  let fixture: ComponentFixture<SEPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SEPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SEPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
