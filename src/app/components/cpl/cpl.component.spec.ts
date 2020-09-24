import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPLComponent } from './cpl.component';

describe('CPLComponent', () => {
  let component: CPLComponent;
  let fixture: ComponentFixture<CPLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
