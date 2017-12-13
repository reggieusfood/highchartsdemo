import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { SplineChartComponent } from './charts/spline/spline.component';

declare var require: any;
export function highchartsFactory() {
  return require('highcharts');
}


@NgModule({
  declarations: [
    AppComponent,
    SplineChartComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  exports: [],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
