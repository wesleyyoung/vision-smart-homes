import { Component, Inject, HostListener, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    '../assets/fonts/custom-fonts.css'
  ]
})
export class AppComponent implements OnInit{

  title = 'vision-smart-homes';

  public previousHeight: number = window.scrollY;
  public atTop: boolean = this.previousHeight == 0;
  public showNav: boolean;
  public isMobile: boolean = this.api.isMobileWatcher;

  constructor(private api: ApiService) { }

  @HostListener('window:scroll', ['$event']) onscroll(ev) {
    // this.showNav = (window.scrollY < this.previousHeight) || (window.scrollY < window.innerHeight);
    this.previousHeight = window.scrollY;
    this.atTop = window.scrollY == 0;
  }

  ngOnInit() {
    this.showNav = true;
    this.api.isMobile.subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }
}
