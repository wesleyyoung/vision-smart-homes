import { 
  Component,
  OnInit,
  Inject,
  Input,
  HostListener,
  ViewChild,
  ElementRef
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  animateChild,
  transition
} from '@angular/animations';
import { ApiService } from '../api.service';

export interface FullServiceTile {
  headline: string;
  tagline: string;
  bgLg: string;
  bgMd: string;
  bgSm: string;
}

@Component({
  selector: 'app-full-service-tile',
  inputs: ['service', 'align'],
  templateUrl: './full-service-tile.component.html',
  styleUrls: ['./full-service-tile.component.scss']
})
export class FullServiceTileComponent implements OnInit {

  public isMobile: boolean = this.api.isMobileWatcher;
  public isMedium: boolean = this.api.isMediumWatcher;

  constructor(private api: ApiService) { }

  @Input() service: FullServiceTile;
  @Input() align: string;

  ngOnInit() {
    this.api.isMobile.subscribe(isMobile => {
      this.isMobile = isMobile;
    });
    this.api.isMedium.subscribe(isMed => {
      this.isMedium = isMed;
    });
  }

}
