import { Component, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    '../assets/fonts/custom-fonts.css'
  ]
})
export class AppComponent {
  public atTop: boolean = window.scrollY == 0;
  title = 'vision-smart-homes';
  constructor() { }
  @HostListener('window:scroll', []) onscroll() {
    this.atTop = window.scrollY == 0;
  }
}
