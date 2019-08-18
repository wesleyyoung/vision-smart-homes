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

export interface Service {
  headline: string;
  tagline: string;
  icon: string
}

@Component({
  selector: 'app-service-tile',
  inputs: ['services'],
  templateUrl: './service-tile.component.html',
  styleUrls: ['./service-tile.component.scss'],
  animations: [
    trigger('flyIn', [
      state('on-page', style({ 
        transform: 'translate(0, 0)',
        opacity: 1
      })),
      state('dash-off', style({
        transform: 'translate(0, 0)',
      })),
      state('rest-left', style({ 
        transform: 'translate(-25%, 20%)',
        opacity: 0
      })),
      state('rest-center', style({ 
        transform: 'translateY(25%)',
        opacity: 0
      })),
      state('rest-right', style({ 
        transform: 'translate(25%, 20%)',
        opacity: 0
      })),
      transition('* => *', [
        animate('0.55s ease')
      ])
    ])
  ]
})
export class ServiceTileComponent implements OnInit {

  public colSpan: number;
  public isMobile: boolean = this.api.isMobileWatcher;
  public mobileTrigger: number = 750;
  public isInViewport: boolean;

  @ViewChild('serviceBoxContainer', {static: false}) boxes: any;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private api: ApiService) { }

  @HostListener('window:scroll', []) onscroll() {
    let offset = this.boxes._element.nativeElement.offsetTop;
    let height = this.boxes._element.nativeElement.clientHeight
    this.isInViewport = (window.scrollY + window.innerHeight) > (offset + (window.innerHeight * .15))  && window.scrollY - height <= offset;
  }

  @Input() serviceList: Array<Service>;

  ngOnInit() {
    this.isInViewport = false;
    if (this.isMobile) {
      this.colSpan = 6;
    } else {
      this.colSpan = 2;
    }
    this.api.isMobile.subscribe(isMobile => {
      this.isMobile = isMobile;
      if (isMobile) {
        this.colSpan = 6;
      } else {
        this.colSpan = 2;
      }
    });
  }

}
