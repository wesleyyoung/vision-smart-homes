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
  transition
} from '@angular/animations';

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
        animate('0.75s ease')
      ])
    ])
  ]
})
export class ServiceTileComponent implements OnInit {

  public colSpan: number;
  public isMobile: boolean;
  public mobileTrigger: number = 750;
  public isInViewport: boolean;

  @ViewChild('serviceBoxContainer') boxes: any;

  constructor(@Inject(DOCUMENT) private document: any) { }

  @HostListener('window:resize', ['$event']) onresize(ev) {
    if (window.innerWidth <= this.mobileTrigger) {
      this.colSpan = 6;
      this.isMobile = false;
    } else {
      this.colSpan = 2;
      this.isMobile = true;
    }
  }

  @HostListener('window:scroll', []) onscroll() {
    let offset = this.boxes._element.nativeElement.offsetTop;
    let height = this.boxes._element.nativeElement.clientHeight
    this.isInViewport = (window.scrollY + window.innerHeight) > offset && window.scrollY - height <= offset;
  }

  @Input() serviceList: Array<Service>;

  ngOnInit() {
    this.isInViewport = false;
    if (window.innerWidth <= this.mobileTrigger) {
      this.colSpan = 6;
      this.isMobile = false;
    } else {
      this.colSpan = 2;
      this.isMobile = true;
    }
  }

}
