import { 
  Component,
  OnInit,
  Inject,
  HostListener,
  NgZone ,
  ViewChild
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatIconRegistry 
} from '@angular/material';
import { Brand } from '../brand-box/brand-box.component';
import { Service } from '../service-tile/service-tile.component';
import { ContactModalComponent } from '../contact-modal/contact-modal.component';
import { ApiService } from '../api.service';


export interface PortfolioPic {
  src: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public visiblePics: number = 14;
  public isMobile: boolean = this.api.isMobileWatcher;
  public isMedium: boolean = this.api.isMediumWatcher;

  constructor(
    @Inject(DOCUMENT) private document: any,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private dialog: MatDialog,
    private api: ApiService
    ) { 
      iconRegistry.addSvgIcon('tv', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/tv.svg'));
      iconRegistry.addSvgIcon('speaker', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/speaker.svg'));
      iconRegistry.addSvgIcon('wifi', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/wifi.svg'));
      iconRegistry.addSvgIcon('lock', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/lock.svg'));
      iconRegistry.addSvgIcon('web_asset', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/web_asset.svg'));
      iconRegistry.addSvgIcon('4k', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/4k.svg'));
      iconRegistry.addSvgIcon('phone', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/phone.svg'));
      iconRegistry.addSvgIcon('pin', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/pin.svg'));
    }

  openContactModal(): void {
    this.dialog.open(ContactModalComponent, {
      panelClass: ['dark-bg', 'contact-modal']
    });
  }

  public automationBrands: Array<Brand> = [{
      name: 'Crestron Electronics™',
      subname: 'Certified Integrated Partner',
      website: 'https://crestron.com',
      info: 'Control Systems for Home Automation, Campus & Building Control by Crestron Electronics',
      logo: '../../assets/crestron-logo-png-transparent.png',
      logo_sm: '../../assets/crestron-logo-png-transparent-sm.png'
    }, {
      name: 'Control 4™',
      subname: 'Professional Installers And Programmers',
      website: 'https://control4.com',
      info: 'The Magic Of A Truly Smart Home',
      logo: '../../assets/control-4-logo.png',
      logo_sm: '../../assets/control-4-logo-sm.png'
    }
  ];

  public ourServices1: Array<Service> = [{
    headline: 'TV',
    tagline: 'No cables. No clutter. Just entertainment',
    icon: 'tv'
  }, {
    headline: 'Wi-Fi',
    tagline: 'Business class wireless networks',
    icon: 'wifi'
  }, {
    headline: 'Whole Home Audio',
    tagline: 'Hand-written apologies for your neighbors',
    icon: 'speaker'
  }];

  public ourServices2: Array<Service> = [{
    headline: 'Security',
    tagline: 'Cameras, doorlocks, and automated alarm systems',
    icon: 'lock'
  }, {
    headline: 'Shades',
    tagline: 'Bring your home to life with the touch of a button',
    icon: 'web_asset'
  }, {
    headline: 'Video Distribution',
    tagline: '4K video from anywhere in your home',
    icon: '4k'
  }];

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

  public visiblePortfolioPics: Array<PortfolioPic> = [];

  public openPage(url: string): void {
    this.document.location.href = url;
  }

  public isEven(n) {
    return n % 2 == 0;
  }

  ngOnInit() {
    this.api.isMobile.subscribe(isMobile => {
      this.isMobile = isMobile;
    });
    this.api.isMedium.subscribe(isMed => {
      this.isMedium = isMed;
    });
    for (var i = 0; i < this.visiblePics; i++) {
      this.visiblePortfolioPics.push(this.portfolioPics[i]);
    }
  }

}
