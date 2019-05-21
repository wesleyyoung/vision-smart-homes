import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrestronComponent } from './crestron.component';

describe('CrestronComponent', () => {
  let component: CrestronComponent;
  let fixture: ComponentFixture<CrestronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrestronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrestronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
