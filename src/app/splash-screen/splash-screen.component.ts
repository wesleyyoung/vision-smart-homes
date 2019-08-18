import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { SplashService } from '../splash.service';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit, OnDestroy {

  loading: Boolean = this._splash.loading;
  loadingWatcher: Subscription;

  constructor(
    private _splash: SplashService
  ) { }

  ngOnInit() {
    this.loadingWatcher = this._splash.loadingStatus.subscribe((value) => {
      this.loading = value;
    });
  }

  ngOnDestroy() {
    this.loadingWatcher.unsubscribe();
  }

}
