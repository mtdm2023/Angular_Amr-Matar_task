import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';

import { FormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { SpinnerComponent } from './spinner/spinner.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { UpperPannerComponent } from './upper-panner/upper-panner.component';
import { CardComponent } from './card/card.component';
import { GraphListComponent } from './graph-list/graph-list.component';
import { ListCardComponent } from './list-card/list-card.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { BarchartComponent } from './barchart/barchart.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    LeftMenuComponent,
    UpperPannerComponent,
    CardComponent,
    GraphListComponent,
    ListCardComponent,
    RadarChartComponent,
    BarchartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatPaginatorModule,
    FormsModule,
    BrowserAnimationsModule,
    NgApexchartsModule



  ],
  exports :[
    MatCardModule,
    MatIconModule,
    SpinnerComponent,
    NgApexchartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
