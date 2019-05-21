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
import { FullServiceTile } from '../full-service-tile/full-service-tile.component';
import { ContactModalComponent } from '../contact-modal/contact-modal.component';
import { ApiService, PortfolioPic } from '../api.service';


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
      logo_sm: '../../assets/crestron-logo-png-transparent-sm.png',
      info_page: '../crestron'
    }, {
      name: 'Control 4™',
      subname: 'Professional Installers And Programmers',
      website: 'https://control4.com',
      info: 'The Magic Of A Truly Smart Home',
      logo: '../../assets/control-4-logo.png',
      logo_sm: '../../assets/control-4-logo-sm.png',
      info_page: '../control4'
    }
  ];

  public ourServices1: Array<Service> = [{
    headline: 'Smart Lighting',
    tagline: 'The keystone of every dream home, focused on your needs',
    icon: 'wb_incandescent'
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
    icon: 'security'
  }, {
    headline: 'Shades',
    tagline: 'Bring your home to life with the touch of a button',
    icon: 'web_asset'
  }, {
    headline: 'Video Distribution',
    tagline: '4K video from anywhere in your home',
    icon: '4k'
  }];

  public fullServiceTile1: FullServiceTile = {
    headline: 'High Perfomance Audio',
    tagline: 'Not an audiophile? No problem. We\'ll have you annoying your friends and scowling at speaker-toting hikers with your refined sonic palate in no time',
    bgSm: 'url(../../assets/stock_img/sony-speaker-sm.webp)',
    bgMd: 'url(../../assets/stock_img/speakers-md.webp)',
    bgLg: 'url(../../assets/stock_img/speakers.webp)'
  };

  public fullServiceTile2: FullServiceTile = {
    headline: 'Enterprise Level Networks',
    tagline: 'Waiting sucks. Atleast, we think so. Give your smart home the brain power it needs to let you stream your favorite movies, work from home, and keep in touch with your friends',
    bgSm: 'url(../../assets/stock_img/cables-connection-sm.webp)',
    bgMd: 'url(../../assets/stock_img/fiber-switch-md.webp)',
    bgLg: 'url(../../assets/stock_img/fiber-switch.webp)'
  };

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
    this.api.getPortfolioPics(pics => {
      for (var i = 0; i < this.visiblePics; i++) {
        this.visiblePortfolioPics.push(pics[i]);
      }
    });
  }
}
