import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ChartsComponent} from './charts.component';

const chartRoutes: Routes = [
  {
    path: '', component: ChartsComponent,
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(chartRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChartsRoutingModule {
}
