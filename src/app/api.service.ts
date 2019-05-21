import { Injectable } from '@angular/core';
import { 
  Component,
  OnInit,
  Inject,
  HostListener,
  NgZone ,
  ViewChild
} from '@angular/core';
import { Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

export interface PortfolioPic {
  src: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public mobileWidthTrigger = 750;
  public mobileHeightTrigger = 600;
  public mediumWidthTrigger = 2000;
  public isMobileWatcher: boolean = window.innerWidth <= this.mobileWidthTrigger || window.innerHeight <= this.mobileHeightTrigger;
  public isMobile = new Subject<boolean>();
  public isMediumWatcher: boolean = !this.isMobileWatcher && window.innerWidth <= this.mediumWidthTrigger;
  public isMedium = new Subject<boolean>();

  constructor(@Inject(DOCUMENT) private document: any) {
    window.addEventListener('resize', ev => {
      this.isMobileWatcher = window.innerWidth <= this.mobileWidthTrigger || window.innerHeight <= this.mobileHeightTrigger;
      this.isMediumWatcher = !this.isMobileWatcher && window.innerWidth < this.mediumWidthTrigger;
      this.isMobile.next(this.isMobileWatcher);
      this.isMedium.next(this.isMediumWatcher);
    });
  }

  public getPortfolioPics: Function = ($done: Function) => {
    $done(this.portfolioPics);
  }

  public portfolioPics: Array<PortfolioPic> = [{
    src: '../../assets/portfolio-img/portfolio-1.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-2.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-5.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-31.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-7.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-21.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-9.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-10.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-12.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-13.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-14.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-15.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-16.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-17.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-18.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-19.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-20.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-8.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-22.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-23.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-24.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-25.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-26.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-27.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-28.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-29.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-30.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-6.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-32.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-33.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-34.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-35.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-36.jpg'
  },{
    src: '../../assets/portfolio-img/portfolio-37.jpg'
  }
];


}
