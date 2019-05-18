import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrandBoxComponent } from './brand-box/brand-box.component';
import { 
  FormsModule,
  ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatTableModule,
  MatSortModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatSnackBarModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonToggleModule,
  MatGridListModule,
  MatRippleModule,
  MatExpansionModule,
  MatTreeModule,
  MatTabsModule,
  MatMenuModule,
  MatRadioModule
} from '@angular/material';
import { ServiceTileComponent } from './service-tile/service-tile.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BrandBoxComponent,
    ServiceTileComponent,
    ContactModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatRippleModule,
    MatExpansionModule,
    MatTreeModule,
    MatTabsModule,
    MatMenuModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule
 ],
  providers: [],
  entryComponents: [
    ContactModalComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
