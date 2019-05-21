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
import { ApiService } from '../api.service';

export interface Brand {
  name: string;
  subname: string;
  info: string;
  website: string;
  info_page?: string;
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
        animate('1.1s ease')
      ])
    ])
  ]
})
export class BrandBoxComponent implements OnInit {

  public isMobile: boolean = this.api.isMobileWatcher;
  public isInViewport: boolean;

  @ViewChild('brandBoxContainer') box: any;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private api: ApiService) { }

  @HostListener('window:scroll', []) onscroll() {
    let offset = this.box._element.nativeElement.offsetTop;
    let height = this.box._element.nativeElement.clientHeight
    this.isInViewport = (window.scrollY + window.innerHeight) > (offset + (window.innerHeight * .05)) && window.scrollY - height <= offset;
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
    this.api.isMobile.subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }

}
