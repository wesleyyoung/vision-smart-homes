import { Component, OnInit, Inject, Input, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export interface Service {
  headline: string;
  tagline: string;
  icon: string
}

@Component({
  selector: 'app-service-tile',
  inputs: ['services'],
  templateUrl: './service-tile.component.html',
  styleUrls: ['./service-tile.component.scss']
})
export class ServiceTileComponent implements OnInit {

  public colSpan: number;

  constructor(@Inject(DOCUMENT) private document: any) { }

  @HostListener('window:resize', ['$event']) onresize(ev) {
    if ( ev.target.innerWidth <= 750) {
      this.colSpan = 6;
    } else {
      this.colSpan = 2;
    }
  }

  @Input() serviceList: Array<Service>;
  

  ngOnInit() {
    if (window.innerWidth <= 750) {
      this.colSpan = 6;
    } else {
      this.colSpan = 2;
    }
  }

}
