import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Control4Component } from './control4.component';

describe('Control4Component', () => {
  let component: Control4Component;
  let fixture: ComponentFixture<Control4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Control4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Control4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
