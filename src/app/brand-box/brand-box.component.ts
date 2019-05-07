import { Component, OnInit, Inject, Input, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export interface Brand {
  name: string;
  subname: string;
  info: string;
  website: string;
  logo: string;
  logo_sm: string;
}

@Component({
  selector: 'app-brand-box',
  inputs: ['brand', 'i'],
  templateUrl: './brand-box.component.html',
  styleUrls: ['./brand-box.component.scss']
})
export class BrandBoxComponent implements OnInit {

  public isMobile: boolean;

  constructor(@Inject(DOCUMENT) private document: any) { }

  @HostListener('window:resize', ['$event']) onresize(ev) {
    this.isMobile = ev.target.innerWidth <= 750;
  }

  @Input() brand: Brand;
  @Input() i: number;

  public isEven(n) {
    return n % 2 == 0;
  }

  public openPage(url: string): void {
    this.document.location.href = url;
  }
  ngOnInit() {
    this.isMobile = window.innerWidth <= 750;
  }

}
