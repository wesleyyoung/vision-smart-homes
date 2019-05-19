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

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public mobileWidthTrigger = 750;
  public mobileHeightTrigger = 600;
  public isMobileWatcher: boolean = window.innerWidth <= this.mobileWidthTrigger || window.innerHeight <= this.mobileHeightTrigger;;
  public isMobile = new Subject<boolean>();

  constructor(@Inject(DOCUMENT) private document: any) {
    window.addEventListener('resize', ev => {
      this.isMobileWatcher = window.innerWidth <= this.mobileWidthTrigger || window.innerHeight <= this.mobileHeightTrigger;
      this.isMobile.next(this.isMobileWatcher);
    })
    this.isMobileWatcher = window.innerWidth <= this.mobileWidthTrigger || window.innerHeight <= this.mobileHeightTrigger;
    this.isMobile.next(window.innerWidth <= this.mobileWidthTrigger || window.innerHeight <= this.mobileHeightTrigger);
  }
}
