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
import { SplashService } from './splash.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    '../assets/fonts/custom-fonts.css'
  ]
})
export class AppComponent implements OnInit {

  title = 'vision-smart-homes';

  loading: Boolean = this._splash.loading;
  loadingWatcher: Subscription;

  public previousHeight: number = window.scrollY;
  public atTop: boolean = this.previousHeight == 0;
  public showNav: boolean;
  public isMobile: boolean = this.api.isMobileWatcher;

  constructor(
    private api: ApiService,
    private _splash: SplashService
  ) { }

  @HostListener('window:scroll', ['$event']) onscroll(ev) {
    // this.showNav = (window.scrollY < this.previousHeight) || (window.scrollY < window.innerHeight);
    if (this.loading) window.scrollTo(0, 0);
    this.previousHeight = window.scrollY;
    this.atTop = window.scrollY == 0;
  }

  ngOnInit() {
    this._splash.startLoading();
    this.showNav = true;
    this.api.isMobile.subscribe(isMobile => {
      this.isMobile = isMobile;
    });
    this.loadingWatcher = this._splash.loadingStatus.subscribe((value) => {
      this.loading = value;
    });
  }
}
