import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullServiceTileComponent } from './full-service-tile.component';

describe('FullServiceTileComponent', () => {
  let component: FullServiceTileComponent;
  let fixture: ComponentFixture<FullServiceTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullServiceTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullServiceTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
