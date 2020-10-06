import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPlaneComponent } from './section-plane.component';

describe('SectionPlaneComponent', () => {
  let component: SectionPlaneComponent;
  let fixture: ComponentFixture<SectionPlaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionPlaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
