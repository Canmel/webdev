import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ChartsRoutingModule} from './charts-routing.module';
import {ChartsComponent} from './charts.component';
import {SvgMapComponent} from '../../public/svg-map/svg-map.component';

import { FusionChartsModule } from 'angular4-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsRoutingModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme)
  ],
  declarations: [
    ChartsComponent,
    SvgMapComponent
  ]
})
export class ChartsModule {
}
