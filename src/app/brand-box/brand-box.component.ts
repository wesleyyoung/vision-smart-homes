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
  styleUrls: ['./brand-box.component.scss'],
  animations: [
    trigger('flyIn', [
      state('on-page', style({ 
        transform: 'translate(0, 0)',
        opacity: 1
      })),
      state('rest-left', style({ 
        transform: 'translate(-25%, 0)',
        opacity: 0
      })),
      state('rest-right', style({ 
        transform: 'translate(25%, 0)',
        opacity: 0
      })),
      transition('* => *', [
        animate('1.5s ease')
      ])
    ])
  ]
})
export class BrandBoxComponent implements OnInit {

  public isMobile: boolean;
  public isInViewport: boolean;

  @ViewChild('brandBoxContainer') box: any;

  constructor(@Inject(DOCUMENT) private document: any) { }

  @HostListener('window:resize', ['$event']) onresize(ev) {
    this.isMobile = ev.target.innerWidth <= 750;
  }

  @HostListener('window:scroll', []) onscroll() {
    let offset = this.box._element.nativeElement.offsetTop;
    let height = this.box._element.nativeElement.clientHeight
    this.isInViewport = (window.scrollY + window.innerHeight) > (offset + 100) && window.scrollY - height <= offset;
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
    this.isInViewport = false;
    this.isMobile = window.innerWidth <= 750;
  }

}
